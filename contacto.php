<?php 
    echo "HOLA"
    if(isset($_POST['submit'])){
    
    $js_code = 'console.log(' . json_encode("PRUEBA", JSON_HEX_TAG) . ');';
    echo $js_code;

    $to = "pdelgadogp@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "(Demihermana) NUEVO MENSAJE WEB";
    $message = $name . " escribió lo siguiente:" . "\n\n" . $_POST['message'];

    $headers = "From: " . $from;
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";  
    mail($to,$subject,$message,$headers);
    // echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>