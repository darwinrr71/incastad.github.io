<meta charset="UTF-8"> 

<?php
if (isset($_POST["skicka"])) {

	//recepcion de datos
	$namn		= $_POST["namn"];
	$email		= $_POST["email"];
	$tjanster	= $_POST["tjanster"];
	$bostadstyp	= $_POST["bostadstyp"];
	$telefon	= $_POST["telefon"];
	$antalkvm	= $_POST["antalkvm"];
	$meddelande	= $_POST["meddelande"];

	//correo destino
	$email_TO="incastad@hotmail.com";

	//asunto
	$amne="Nytt meddelande av $email"; /* solo es el nombre del asunto dice usuario en contacto*/

	//mensaje
	$meddelande="
					<br><br>
					<b>KONTAKTUPPGIFTER</b> \n
					Namn: <b>".$namn."</b> \n
					E-mail: <b>".$email."</b> \n
					Tjanster: <b>".$tjanster."</b> \n
					Bostadstyp: <b>".$bostadstyp."</b> \n
					Telefon: <b>".$telefon."</b> \n
					Antal kvm: <b>".$antalkvm."</b> \n
					Meddelande: <b>".$meddelande."</b><br>
					<hr>
					<a href='https://incastad.ddns.net' target='_blank'>https://incastad.ddns.net</a>
				";	
	
	//envio de correo
	$header ="MINE-Version: 1.0\r\n";
	$header .="Content-type: text/html; charset=iso-8859-1\r\n";
	$header .="Content-type: text/html; charset=UTF-8\r\n";
	$header .="From: ejemplo@correo.com";				

	//envio de correo
	$mail = mail($email_TO, $amne, $meddelande, $header);

    if ($mail) {
		echo "<script>alert('El correo se envio correctamente :)')</script>";
        //echo "<script>alert(\" Vi behandlar ditt mail och återkommer så fort vi kan med uppgifter.\\n|| Tack för att du kontaktar oss. !\\n|| https://incastad.ddns.net ||\");</script>";
		//echo "<script> window.location='javascript:window.history.back()';</script>";
    } else {
		echo "<script>alert('El correo no se pudo enviar, intente nuevamente :(')</script>";
        //echo "<script> window.location = 'javascript:window.history.back()';</script>"; //regresa a la pagina anterior
    }
}
?>