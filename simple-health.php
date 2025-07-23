<?php
/**
 * Health Check Simple
 * 
 * Versión simplificada del health check que solo verifica
 * que PHP está funcionando y retorna un status básico.
 * 
 * Uso: GET /simple-health.php
 */

header('Content-Type: application/json');
header('Cache-Control: no-cache, no-store, must-revalidate');

// Respuesta básica
$response = [
    'status' => 'ok',
    'timestamp' => date('c'),
    'message' => 'Servicio funcionando correctamente',
    'php_version' => PHP_VERSION,
    'server' => $_SERVER['SERVER_NAME'] ?? 'unknown'
];

// Código de respuesta HTTP 200
http_response_code(200);

// Enviar respuesta JSON
echo json_encode($response, JSON_PRETTY_PRINT);
?>