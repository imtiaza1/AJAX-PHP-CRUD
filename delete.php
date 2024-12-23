<?php
$server = "localhost";
$username = 'root';
$password = "";
$database = 'aptech';
$con = mysqli_connect($server, $username, $password, $database);
if (!$con) {
    die('ERROR' . mysqli_connect_error());
}

$id = $_POST['id']; // Retrieve the ID from the POST data

//deleting data
if (!empty($id)) {
    $sql = "DELETE FROM 01c1 WHERE id={$id}";
    if ($con->query($sql) == true) {
        echo "User deleted successfully.";
    } else {
        echo "Unable to delete user.";
    }
} else {
    echo "No ID provided.";
}
