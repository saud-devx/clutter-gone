<?php
header('Content-Type: application/json');

$secretKey = "6LeR5qIrAAAAACchpxuwsF-2PIOh2Lq-whf3u_Um";
$captcha = $_POST['captcha'];

if (!$captcha) {
    echo json_encode(['success' => false, 'message' => 'Captcha is missing']);
    exit;
}

$url = 'https://www.google.com/recaptcha/api/siteverify';
$data = [
    'secret' => $secretKey,
    'response' => $captcha
];

$options = [
    'http' => [
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data)
    ]
];
$context  = stream_context_create($options);
$verify = file_get_contents($url, false, $context);
$responseKeys = json_decode($verify, true);

if ($responseKeys["success"]) {
    echo json_encode(['success' => true, 'message' => 'Form submitted successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Captcha verification failed']);
}
?>
