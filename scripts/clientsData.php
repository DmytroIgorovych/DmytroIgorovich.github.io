<?php
$name  = $_POST['name']; // from input name
$phone = $_POST['phone']; // from input name
// Need security data
$msg   = "Username: {$name}<br>";
$msg   = "Phone: {$phone}<br>";

mail('29071990d@gmail.com', 'User submitted the form', $msg);
?>