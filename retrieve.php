<?php
$server = "localhost";
$username = 'root';
$password = "";
$database = 'aptech';
$con = mysqli_connect($server, $username, $password, $database);
if (!$con) {
    die('ERROR' . mysqli_connect_error());
}
$sql = mysqli_query($con, "select * from 01c1");
if ($sql) {
    $data = array();
    while ($row = mysqli_fetch_assoc($sql)) {
        $data[] = $row;
    }
}
echo json_encode($data);
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
