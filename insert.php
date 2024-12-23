<?php
$server = "localhost";
$username = 'root';
$password = "";
$database = 'aptech';
$con = mysqli_connect($server, $username, $password, $database);
if (!$con) {
    die('ERROR' . mysqli_connect_error());
}
if (isset($_POST['submit'])) {
    $insert = mysqli_query($con, "INSERT INTO 01c1 (`name`, `pass`) VALUES ('" . $_POST['name'] . "', '" . $_POST['pass'] . "')");
    if ($insert) {
        echo "success";
        exit();
    } else {
        echo "unsuccess";
        exit();
    }
}
