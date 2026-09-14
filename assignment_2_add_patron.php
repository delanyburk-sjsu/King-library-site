<!doctype html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="asgn2_register_Burk.css" />
</head>

<body>
    <img src="http://profperry.com/Classes20/PHPwithMySQL/KingLibLogo.jpg" >

<h3>Thank You For Registering!</h3>

<?php
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$email = $_POST['email'];
	$cities = $_POST['cities'];

	$fullname = "$firstname $lastname";

	print "<p>Name: $fullname </p>";
	print "<p>Email: $email</p>";
	print "<p>City: $cities </p>";
?>

</body>
</html>
