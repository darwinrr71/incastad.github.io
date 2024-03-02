<meta charset="UTF-8"> 

<?php
// validar campos
if(empty($_REQUEST['namn']) || empty($_REQUEST['email']) || empty($_REQUEST['tjanster']) || empty($_REQUEST['bostadstyp']) || empty($_REQUEST['telefon']) || empty($_REQUEST['antalkvm']) || empty($_REQUEST['meddelande']))
{
	echo "<script> window.location = 'javascript:window.history.back()';</script>"; //regresa a la pagina anterior
	//echo "<script> window.location = 'https://incastad.ddns.net';</script>";
}else {

	//recepcion de datos
	$namn=$_POST['namn'];
	$email=$_POST['email'];
	$tjanster=$_POST['tjanster'];
	$bostadstyp=$_POST['bostadstyp'];
	$telefon=$_POST['telefon'];
	$antalkvm=$_POST['antalkvm'];
	$meddelande=$_POST['meddelande'];

	//correo destino
	$cor="incastad@hotmail.com";

	//envio de correo
	$de .="MINE-Version: 1.0\r\n";
	$de .="Content-type: text/html; charset=iso-8859-1\r\n";
	$de .="Content-type: text/html; charset=UTF-8\r\n";
	$de .="From: incastad.ddns.net <info@incastad.ddns.net>";

	//asunto
	$amne="Kontakt användare"; /* solo es el nombre del asunto dice usuario en contacto*/
	
	//mensaje
	$meddelande="
					Meddelande:<b>".$namn."</b>
					<br><br>
					<b>KONTAKTUPPGIFTER</b><br>
					Namn: <b>".$namn."</b><br>
					E-mail: <b>".$email."</b><br>
					Tjanster: <b>".$tjanster."</b><br>
					Bostadstyp: <b>".$bostadstyp."</b><br>
					Telefon: <b>".$telefon."</b><br>
					Antal kvm: <b>".$antalkvm."</b><br>
					Meddelande: <b>".$meddelande."</b><br><br>
					<hr>
					<a href='https://incastad.ddns.net' target='_blank'>https://incastad.ddns.net</a>
				";

	//envio de correo
	mail($cor, $amne, $meddelande, $de) or die('Felmeddelande');

	//script de confirmacion
	echo "<script>alert(\" Vi behandlar ditt mail och återkommer så fort vi kan med uppgifter.\\n|| Tack för att du kontaktar oss. !\\n|| https://incastad.ddns.net ||\");</script>";
	echo "<script> window.location='javascript:window.history.back()';</script>";
	//echo "<script> window.location='https://incastad.ddns.net';</script>";
	}
?>