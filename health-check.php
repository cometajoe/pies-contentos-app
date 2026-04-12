<?php
/**
 * Health Check Endpoint
 * 
 * Este archivo proporciona un endpoint para verificar el estado de salud
 * de la aplicación PHP y sus dependencias.
 * 
 * Uso: GET /health-check.php
 * 
 * Respuestas:
 * - 200: Todo está funcionando correctamente
 * - 503: Hay problemas con algún componente crítico
 */

header('Content-Type: application/json');
header('Cache-Control: no-cache, no-store, must-revalidate');

// Configuración
const HEALTH_CHECK_VERSION = '1.0.0';
const MAX_RESPONSE_TIME_MS = 5000; // 5 segundos máximo para responder

// Función para medir tiempo de ejecución
function microtime_float() {
    list($usec, $sec) = explode(" ", microtime());
    return ((float)$usec + (float)$sec);
}

$start_time = microtime_float();

// Estructura de respuesta
$health_status = [
    'status' => 'healthy',
    'timestamp' => date('c'),
    'version' => HEALTH_CHECK_VERSION,
    'checks' => [],
    'metadata' => [
        'server' => $_SERVER['SERVER_NAME'] ?? 'unknown',
        'php_version' => PHP_VERSION,
        'response_time_ms' => 0
    ]
];

// Variable para trackear si hay algún error crítico
$has_critical_error = false;

// 1. Verificar PHP básico
$health_status['checks']['php'] = [
    'status' => 'healthy',
    'message' => 'PHP está funcionando correctamente',
    'details' => [
        'version' => PHP_VERSION,
        'memory_limit' => ini_get('memory_limit'),
        'max_execution_time' => ini_get('max_execution_time')
    ]
];

// 2. Verificar memoria disponible
$memory_usage = memory_get_usage(true);
$memory_limit = ini_get('memory_limit');
$memory_limit_bytes = return_bytes($memory_limit);
$memory_usage_percent = ($memory_usage / $memory_limit_bytes) * 100;

if ($memory_usage_percent > 90) {
    $health_status['checks']['memory'] = [
        'status' => 'critical',
        'message' => 'Uso de memoria muy alto',
        'details' => [
            'usage_bytes' => $memory_usage,
            'limit_bytes' => $memory_limit_bytes,
            'usage_percent' => round($memory_usage_percent, 2)
        ]
    ];
    $has_critical_error = true;
} elseif ($memory_usage_percent > 75) {
    $health_status['checks']['memory'] = [
        'status' => 'warning',
        'message' => 'Uso de memoria elevado',
        'details' => [
            'usage_bytes' => $memory_usage,
            'limit_bytes' => $memory_limit_bytes,
            'usage_percent' => round($memory_usage_percent, 2)
        ]
    ];
} else {
    $health_status['checks']['memory'] = [
        'status' => 'healthy',
        'message' => 'Uso de memoria normal',
        'details' => [
            'usage_bytes' => $memory_usage,
            'limit_bytes' => $memory_limit_bytes,
            'usage_percent' => round($memory_usage_percent, 2)
        ]
    ];
}

// 3. Verificar espacio en disco
$disk_free = disk_free_space('.');
$disk_total = disk_total_space('.');
$disk_usage_percent = (($disk_total - $disk_free) / $disk_total) * 100;

if ($disk_usage_percent > 95) {
    $health_status['checks']['disk'] = [
        'status' => 'critical',
        'message' => 'Espacio en disco muy bajo',
        'details' => [
            'free_bytes' => $disk_free,
            'total_bytes' => $disk_total,
            'usage_percent' => round($disk_usage_percent, 2)
        ]
    ];
    $has_critical_error = true;
} elseif ($disk_usage_percent > 85) {
    $health_status['checks']['disk'] = [
        'status' => 'warning',
        'message' => 'Espacio en disco bajo',
        'details' => [
            'free_bytes' => $disk_free,
            'total_bytes' => $disk_total,
            'usage_percent' => round($disk_usage_percent, 2)
        ]
    ];
} else {
    $health_status['checks']['disk'] = [
        'status' => 'healthy',
        'message' => 'Espacio en disco suficiente',
        'details' => [
            'free_bytes' => $disk_free,
            'total_bytes' => $disk_total,
            'usage_percent' => round($disk_usage_percent, 2)
        ]
    ];
}

// 4. Verificar extensiones PHP críticas
$required_extensions = ['json', 'mbstring', 'curl'];
$missing_extensions = [];

foreach ($required_extensions as $extension) {
    if (!extension_loaded($extension)) {
        $missing_extensions[] = $extension;
    }
}

if (!empty($missing_extensions)) {
    $health_status['checks']['php_extensions'] = [
        'status' => 'critical',
        'message' => 'Extensiones PHP faltantes',
        'details' => [
            'missing' => $missing_extensions,
            'required' => $required_extensions
        ]
    ];
    $has_critical_error = true;
} else {
    $health_status['checks']['php_extensions'] = [
        'status' => 'healthy',
        'message' => 'Todas las extensiones requeridas están disponibles',
        'details' => [
            'loaded' => $required_extensions
        ]
    ];
}

// 5. Verificar permisos de escritura en directorios importantes
$writable_dirs = ['./'];
$permission_issues = [];

foreach ($writable_dirs as $dir) {
    if (!is_writable($dir)) {
        $permission_issues[] = $dir;
    }
}

if (!empty($permission_issues)) {
    $health_status['checks']['file_permissions'] = [
        'status' => 'warning',
        'message' => 'Algunos directorios no tienen permisos de escritura',
        'details' => [
            'non_writable' => $permission_issues,
            'checked' => $writable_dirs
        ]
    ];
} else {
    $health_status['checks']['file_permissions'] = [
        'status' => 'healthy',
        'message' => 'Permisos de archivo correctos',
        'details' => [
            'writable' => $writable_dirs
        ]
    ];
}

// 6. Verificar conectividad de red (opcional)
if (function_exists('curl_init')) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://www.google.com');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 5);
    curl_setopt($ch, CURLOPT_NOBODY, true);
    
    $result = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($result !== false && $http_code === 200) {
        $health_status['checks']['network'] = [
            'status' => 'healthy',
            'message' => 'Conectividad de red disponible'
        ];
    } else {
        $health_status['checks']['network'] = [
            'status' => 'warning',
            'message' => 'Problemas de conectividad de red'
        ];
    }
} else {
    $health_status['checks']['network'] = [
        'status' => 'warning',
        'message' => 'cURL no disponible para verificar conectividad'
    ];
}

// 7. Verificar base de datos (ejemplo básico - ajustar según necesidades)
/*
try {
    // Ejemplo con PDO - descomentar y configurar según tu base de datos
    // $pdo = new PDO('mysql:host=localhost;dbname=test', $username, $password);
    // $stmt = $pdo->query('SELECT 1');
    
    $health_status['checks']['database'] = [
        'status' => 'healthy',
        'message' => 'Conexión a base de datos exitosa'
    ];
} catch (Exception $e) {
    $health_status['checks']['database'] = [
        'status' => 'critical',
        'message' => 'Error de conexión a base de datos: ' . $e->getMessage()
    ];
    $has_critical_error = true;
}
*/

// Calcular tiempo de respuesta
$end_time = microtime_float();
$response_time_ms = round(($end_time - $start_time) * 1000, 2);
$health_status['metadata']['response_time_ms'] = $response_time_ms;

// Verificar si el tiempo de respuesta es aceptable
if ($response_time_ms > MAX_RESPONSE_TIME_MS) {
    $health_status['checks']['response_time'] = [
        'status' => 'warning',
        'message' => 'Tiempo de respuesta elevado',
        'details' => [
            'response_time_ms' => $response_time_ms,
            'max_allowed_ms' => MAX_RESPONSE_TIME_MS
        ]
    ];
}

// Determinar estado general
if ($has_critical_error) {
    $health_status['status'] = 'unhealthy';
    http_response_code(503);
} else {
    $health_status['status'] = 'healthy';
    http_response_code(200);
}

// Función auxiliar para convertir memoria
function return_bytes($val) {
    $val = trim($val);
    $last = strtolower($val[strlen($val)-1]);
    $val = (int) $val;
    switch($last) {
        case 'g':
            $val *= 1024;
        case 'm':
            $val *= 1024;
        case 'k':
            $val *= 1024;
    }
    return $val;
}

// Enviar respuesta
echo json_encode($health_status, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
?>