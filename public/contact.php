<?php
mb_language('Japanese');
mb_internal_encoding('UTF-8');

$logFile = __DIR__ . '/mail_log.txt';
function writeLog($msg) {
    global $logFile;
    file_put_contents($logFile, date('[Y-m-d H:i:s] ') . $msg . "\n", FILE_APPEND);
}

define('MAIL_TO', 'info@findhome-japan.com');
define('MAIL_FROM', 'info@findhome-japan.com');
define('MAIL_FROM_NAME', 'FIND HOME（株式会社FIND）');
define('MAIL_SUBJECT_PREFIX', '【FIND HOME】お問い合わせ：');

// CORS: 許可オリジンのみ反射（www / 非www の両方に対応）
$allowedOrigins = [
    'https://www.findhome-japan.com',
    'https://findhome-japan.com',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['status' => 'error', 'message' => 'Method not allowed']); exit; }

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
if (strpos($contentType, 'application/json') !== false) {
    $input = json_decode(file_get_contents('php://input'), true) ?? [];
} else {
    $input = $_POST;
}

function clean(string $val): string { return htmlspecialchars(trim($val), ENT_QUOTES, 'UTF-8'); }

$inquiryType   = clean($input['inquiryType']   ?? '');
$name          = clean($input['name']          ?? '');
$phone         = clean($input['phone']         ?? '');
$email         = clean($input['email']         ?? '');
$propertyUrl   = clean($input['propertyUrl']   ?? '');
$area          = clean($input['area']          ?? '');
$budget        = clean($input['budget']        ?? '');
$moveTiming    = clean($input['moveTiming']    ?? '');
$contactMethod = clean($input['contactMethod'] ?? '');
$contactTime   = clean($input['contactTime']   ?? '');
$message       = clean($input['message']       ?? '');

writeLog("受信データ: inquiryType={$inquiryType} name={$name} email={$email}");

$errors = [];
if (empty($inquiryType)) $errors[] = 'ご相談種別が未入力です';
if (empty($name))        $errors[] = 'お名前が未入力です';
if (empty($phone))       $errors[] = '電話番号が未入力です';
if (empty($email))       $errors[] = 'メールアドレスが未入力です';
if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'メールアドレスの形式が正しくありません';
if (empty($message))     $errors[] = 'ご相談内容が未入力です';

if (!empty($errors)) { http_response_code(400); echo json_encode(['status' => 'error', 'message' => implode(', ', $errors)]); exit; }

// ── 管理者宛メール ─────────────────────────────
$subject = MAIL_SUBJECT_PREFIX . $inquiryType;
$body  = "FIND HOME お問い合わせフォームより\n\n";
$body .= "■ ご相談種別\n{$inquiryType}\n\n";
$body .= "■ お名前\n{$name}\n\n";
$body .= "■ 電話番号\n{$phone}\n\n";
$body .= "■ メールアドレス\n{$email}\n\n";
$body .= "■ 気になる物件URL\n" . ($propertyUrl !== '' ? $propertyUrl : '（未入力）') . "\n\n";
$body .= "■ 希望エリア\n" . ($area !== '' ? $area : '（未入力）') . "\n\n";
$body .= "■ 家賃予算\n" . ($budget !== '' ? $budget : '（未入力）') . "\n\n";
$body .= "■ 引っ越し希望時期\n" . ($moveTiming !== '' ? $moveTiming : '（未入力）') . "\n\n";
$body .= "■ 希望連絡方法\n" . ($contactMethod !== '' ? $contactMethod : '（未入力）') . "\n\n";
$body .= "■ 連絡希望時間帯\n" . ($contactTime !== '' ? $contactTime : '（未入力）') . "\n\n";
$body .= "■ ご相談内容\n{$message}\n\n";
$body .= "─────────────────────────────\n";
$body .= "このメールはWebサイトのお問い合わせフォームから自動送信されました。";

$headers  = "From: " . mb_encode_mimeheader(MAIL_FROM_NAME, 'UTF-8', 'B') . " <" . MAIL_FROM . ">\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: base64\r\n";

$encodedSubject = mb_encode_mimeheader($subject, 'UTF-8', 'B');
$encodedBody    = base64_encode($body);

writeLog("送信開始 TO:" . MAIL_TO);
// 第5引数 -f で Envelope-From を指定（さくら/XServer等での到達性向上）
$sent = mail(MAIL_TO, $encodedSubject, $encodedBody, $headers, '-f' . MAIL_FROM);
writeLog("mail()結果: " . ($sent ? "成功" : "失敗"));

if ($sent) {
    // ── 自動返信メール ─────────────────────────────
    $replySubject = '【FIND HOME】お問い合わせありがとうございます';
    $replyBody  = "{$name} 様\n\n";
    $replyBody .= "このたびは、FIND HOME（株式会社FIND）へお問い合わせいただき、誠にありがとうございます。\n";
    $replyBody .= "お問い合わせを受け付けいたしました。内容を確認のうえ、担当者よりあらためてご連絡いたします。\n\n";
    $replyBody .= "通常、2〜3営業日以内を目安にご返信しておりますが、お問い合わせ内容によりお時間をいただく場合がございます。\n";
    $replyBody .= "あらかじめご了承ください。\n";
    $replyBody .= "なお、このメールは自動送信です。\n\n";
    $replyBody .= "──────────────────────────────────────────────────\n";
    $replyBody .= "■ お問い合わせ内容\n\n";
    $replyBody .= "ご相談種別　　　：{$inquiryType}\n";
    $replyBody .= "お名前　　　　　：{$name}\n";
    $replyBody .= "電話番号　　　　：{$phone}\n";
    $replyBody .= "メールアドレス　：{$email}\n";
    $replyBody .= "気になる物件URL：" . ($propertyUrl !== '' ? $propertyUrl : '（未入力）') . "\n";
    $replyBody .= "希望エリア　　　：" . ($area !== '' ? $area : '（未入力）') . "\n";
    $replyBody .= "家賃予算　　　　：" . ($budget !== '' ? $budget : '（未入力）') . "\n";
    $replyBody .= "引っ越し希望時期：" . ($moveTiming !== '' ? $moveTiming : '（未入力）') . "\n";
    $replyBody .= "希望連絡方法　　：" . ($contactMethod !== '' ? $contactMethod : '（未入力）') . "\n";
    $replyBody .= "連絡希望時間帯　：" . ($contactTime !== '' ? $contactTime : '（未入力）') . "\n\n";
    $replyBody .= "ご相談内容：\n{$message}\n";
    $replyBody .= "──────────────────────────────────────────────────\n\n";
    $replyBody .= "株式会社FIND（FIND HOME）\n";
    $replyBody .= "https://www.findhome-japan.com";

    $replyHeaders  = "From: " . mb_encode_mimeheader(MAIL_FROM_NAME, 'UTF-8', 'B') . " <" . MAIL_FROM . ">\r\n";
    $replyHeaders .= "MIME-Version: 1.0\r\n";
    $replyHeaders .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $replyHeaders .= "Content-Transfer-Encoding: base64\r\n";

    $encodedReplySubject = mb_encode_mimeheader($replySubject, 'UTF-8', 'B');
    $encodedReplyBody    = base64_encode($replyBody);

    $replySent = mail($email, $encodedReplySubject, $encodedReplyBody, $replyHeaders, '-f' . MAIL_FROM);
    writeLog("自動返信結果: " . ($replySent ? "成功" : "失敗"));

    http_response_code(200);
    echo json_encode(['status' => 'success']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'メール送信に失敗しました']);
}
