<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to      = "@gmail.com"; 
    $subject = "İletişim Formu Mesajı";
    $body    = "Ad: $name\nE-posta: $email\n\nMesaj:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mesajınız başarıyla gönderildi. Teşekkürler!";
    } else {
        echo "Bir hata oluştu. Lütfen tekrar deneyin.";
    }
}
?>
