<?php
$server = "localhost";
$username = 'root';
$password = "";
$database = 'aptech';
$con = mysqli_connect($server, $username, $password, $database);

if (!$con) {
    die('ERROR: ' . mysqli_connect_error());
}

// Retrieve and sanitize the ID
$id = isset($_POST['id']) ? mysqli_real_escape_string($con, $_POST['id']) : '';

if (!empty($id)) {
    // Fetch the existing data for the ID
    $sql = "SELECT * FROM 01c1 WHERE id = {$id}";
    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_assoc($result);
} else {
    echo "No ID provided.";
    exit();
}

// Update data
if (isset($_POST['s'])) {
    // Sanitize input data
    $name = mysqli_real_escape_string($con, $_POST['name']);
    $pass = mysqli_real_escape_string($con, $_POST['pass']);
    $sid = mysqli_real_escape_string($con, $_POST['sid']);

    // Prepare the update query
    $query = "UPDATE 01c1 SET name = ?, pass = ? WHERE id = ?";
    $stmt = mysqli_prepare($con, $query);
    mysqli_stmt_bind_param($stmt, 'ssi', $name, $pass, $sid);

    // Execute the update query
    if (mysqli_stmt_execute($stmt)) {
        echo "update";
    } else {
        echo "unupdate: " . mysqli_error($con);
    }
    mysqli_stmt_close($stmt);
} else {
    echo "error while updating data";
}

// Encode the fetched data as JSON
echo json_encode($row);

mysqli_close($con);
