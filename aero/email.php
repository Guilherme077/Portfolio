<?php
if(isset($_POST['email'] && !empty($_POST['email'])))
$nome = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['message']);

$to = "gui@guilhermepmoreira.com";
$subject = "Contato Portfolio Aero";
$body = "Nome: ".$nome. "\r\n".
        "Email: ".$email. "\r\n".
        "Mensagem: ".$mensagem;

$header = "Form:comercial@guilhermepmoreira.com"."\r\n".
            ."Reply-To:".$email."\r\n".
            ."X-Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)){
    echo("Email enviado com sucesso");
}else{
    echo("Falha ao enviar! Tente enviar um email manualmente para gui@guilhermepmoreira.com");
}
?>