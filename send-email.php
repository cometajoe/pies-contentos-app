<?php
// send-email.php - Email handler universal (Native PHP mail, formato visual en español)

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Solo POST permitido']);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);
if (!$input || !isset($input['email']) || !isset($input['name'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Nombre y email son requeridos']);
    exit();
}

$config = require 'config.php';
$smtp = $config['smtp'];
$to = $config['recipient_email'];

// Etiquetas amigables en español
$field_labels = [
    'name' => 'Nombre',
    'email' => 'Email',
    'reason' => 'Motivo',
    'message' => 'Mensaje',
    'phone' => 'Teléfono',
    'interest' => 'Interés',
    'aged' => 'Edad',
    'gender' => 'Género',
    'county' => 'Municipio',
    'township' => 'Colonia',
];

// Construir campos
$fields_html = '';
$message_html = '';
foreach ($input as $key => $value) {
    $label = $field_labels[$key] ?? ucfirst($key);
    if ($key === 'message') {
        $message_html = '<div style="background:#fff;padding:20px;border:1px solid #ddd;border-radius:5px;margin:20px 0;"><strong>Mensaje:</strong><br><br>' . nl2br(htmlspecialchars($value)) . '</div>';
    } else {
        $fields_html .= '<div style="background:#f8f9fa;padding:15px;margin:10px 0;border-radius:5px;"><strong>' . $label . ':</strong> ' . htmlspecialchars($value) . '</div>';
    }
}

$subject = 'Nuevo Mensaje de Contacto - ' . ($input['name'] ?? '');
$html = '
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Pies Contentos - Nuevo Mensaje de Contacto</title>
</head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f4f6fb;">
    <div style="background:#667eea;color:#fff;padding:20px;border-radius:16px;text-align:center;margin-bottom:24px;">
        <h1 style="margin:0;font-size:2.5em;">Pies Contentos</h1>
        <h2 style="margin:0;font-size:1.5em;font-weight:400;">Nuevo Mensaje de Contacto</h2>
    </div>
    ' . $fields_html . $message_html . '
    <div style="text-align:center;color:#666;font-size:13px;margin-top:30px;">
        Enviado desde el formulario de contacto de Pies Contentos<br>
        ' . date('d/m/Y H:i:s') . '
    </div>
</body>
</html>';

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: ' . $smtp['from_name'] . ' <' . $smtp['from_email'] . '>',
    'Reply-To: ' . $input['name'] . ' <' . $input['email'] . '>',
    'X-Mailer: PHP/' . phpversion()
];

if (mail($to, $subject, $html, implode("\r\n", $headers))) {
    echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente. ¡Gracias!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Error al enviar el mensaje. Inténtalo de nuevo más tarde.']);
}
?>