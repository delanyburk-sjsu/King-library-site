<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<link rel="stylesheet" type="text/css" href="style.css" />
</head>

<body>

<h3>Thank You For Registering!</h3>

<?php
	$fname = $_POST['fname'];
	$lname = $_POST['lname'];
	$email = $_POST['email'];
	$cities = $_POST['cities'];

	$fullname = "$fname $lname";

	print "<p>Name: $fullname </p>";
	print "<p>Email: $email</p>";
	print "<p>City: $cities </p>";
?>

</body>
</html>
