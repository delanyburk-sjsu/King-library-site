<!DOCTYPE HTML>
<html>
<head>
	<title>303 HTML Forms</title>
	<link rel="stylesheet" type="text/css" href="css/basic.css" />
</head>

<body>

<h3>Thank You For Registering!</h3>

<?php
	$name = $_POST['fname''lname'];
	print "<p>Name: $name</p>";
  $email = $_POST['email'];
  print "<p>Email: $email</p>
  $cities = $_POST['cities'];
  print "<p>city: $cities</p>
?>

<p>You've just written your first PHP program!</p>

</body>
</html>
