<?php
$data = file_get_contents('php://input'); 
$response = json_decode($data, true);


$to = "to@mail.com";

$user_message = "";
$name = $response["name"];
$subject = $response['subject'];
$email = $response['email'];
$phone = $response['phone'];
$message = $response['message'];

$from = '<contactform@domain.com>';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: $from" . "\r\n";


$messageToSend = "<b>Naam:</b> $name <br>"
    ."<b>Email:</b> $email <br>"
    ."<b>Telefoonnummer:</b> $phone <br>"
    ."<b>Vraag of opmerking:</b> $message <br>";


if(mail($to, $subject, $messageToSend, $headers))
{
    $user_message = "Complete";
}else{
	$user_message = "Error";
}

print_r($user_message);