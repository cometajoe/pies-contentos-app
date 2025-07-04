<?php
// send-email.php - Email handler simplificado con Gmail SMTP

// Headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Manejar preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Solo POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Solo POST permitido']);
    exit();
}

// Obtener y validar datos
$input = json_decode(file_get_contents('php://input'), true);

if (!$input || empty($input['name']) || empty($input['email']) || empty($input['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Todos los campos son requeridos']);
    exit();
}

// Sanitizar datos
$name = filter_var(trim($input['name']), FILTER_SANITIZE_STRING);
$email = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
$reason = $input['reason'] ?? 'general';
$message = filter_var(trim($input['message']), FILTER_SANITIZE_STRING);

// Validar email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email inválido']);
    exit();
}

// Cargar configuración
$config = require 'config.php';
$smtp = $config['smtp'];
$recipient = $config['recipient_email'];

// Mapear razones
$reasons = [
    'general' => 'Consulta General',
    'donation' => 'Donación',
    'press' => 'Prensa'
];

$reason_display = $reasons[$reason] ?? 'Consulta General';

// Preparar email
$subject = "Nuevo Contacto: {$reason_display} - {$name}";

$html_message = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #667eea; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px; }
        .field { background: #f8f9fa; padding: 15px; margin: 10px 0; border-radius: 5px; }
        .message { background: white; padding: 20px; border: 1px solid #ddd; border-radius: 5px; margin: 20px 0; }
        .footer { text-align: center; color: #666; font-size: 12px; margin-top: 30px; }
    </style>
</head>
<body>
    <div class='header'>
        <h1>Pies Contentos</h1>
        <h2>Nuevo Mensaje de Contacto</h2>
    </div>
    
    <div class='field'>
        <strong>Nombre:</strong> " . htmlspecialchars($name) . "
    </div>
    
    <div class='field'>
        <strong>Email:</strong> <a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a>
    </div>
    
    <div class='field'>
        <strong>Motivo:</strong> " . htmlspecialchars($reason_display) . "
    </div>
    
    <div class='message'>
        <strong>Mensaje:</strong><br><br>
        " . nl2br(htmlspecialchars($message)) . "
    </div>
    
    <div class='footer'>
        Enviado desde el formulario de contacto de Pies Contentos<br>
        " . date('d/m/Y H:i:s') . "
    </div>
</body>
</html>";

// Función para enviar email con SMTP
function sendEmail($to, $subject, $html_message, $reply_to, $smtp_config) {
    // Verificar si PHPMailer está disponible
    if (!class_exists('PHPMailer\PHPMailer\PHPMailer')) {
        // Intentar cargar PHPMailer
        $phpmailer_files = [
            'PHPMailer/PHPMailer/PHPMailer.php',
            'phpmailer/PHPMailer/PHPMailer.php'
        ];
        
        $loaded = false;
        foreach ($phpmailer_files as $file) {
            if (file_exists($file)) {
                require_once $file;
                require_once str_replace('PHPMailer.php', 'SMTP.php', $file);
                require_once str_replace('PHPMailer.php', 'Exception.php', $file);
                $loaded = true;
                break;
            }
        }
        
        if (!$loaded) {
            throw new Exception('PHPMailer no disponible. Contacta a tu hosting.');
        }
    }
    
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    
    try {
        // Configuración SMTP
        $mail->isSMTP();
        $mail->Host = $smtp_config['host'];
        $mail->SMTPAuth = true;
        $mail->Username = $smtp_config['username'];
        $mail->Password = $smtp_config['password'];
        $mail->SMTPSecure = 'tls';
        $mail->Port = $smtp_config['port'];
        $mail->CharSet = 'UTF-8';
        
        // Destinatarios
        $mail->setFrom($smtp_config['from_email'], $smtp_config['from_name']);
        $mail->addAddress($to);
        $mail->addReplyTo($reply_to);
        
        // Contenido
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $html_message;
        
        $mail->send();
        return true;
    } catch (Exception $e) {
        throw new Exception("Error SMTP: " . $mail->ErrorInfo);
    }
}

// Enviar email
try {
    $mail_sent = sendEmail(
        $recipient,
        $subject,
        $html_message,
        $name . ' <' . $email . '>',
        $smtp
    );
    
    if ($mail_sent) {
        echo json_encode([
            'success' => true,
            'message' => 'Mensaje enviado correctamente. ¡Gracias por contactarnos!'
        ]);
    }
    
} catch (Exception $e) {
    error_log("Error email: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Error al enviar el mensaje. Inténtalo de nuevo.'
    ]);
}
?> 