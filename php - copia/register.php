<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $name = trim($request->name);
    $surname = trim($request->surname);
    $password = mysqli_real_escape_string($mysqli, trim($request->password));
    $email = mysqli_real_escape_string($mysqli, trim($request->email));
    $idexplotation = mysqli_real_escape_string($mysqli, trim($request->idexplotation));
    $sql = "INSERT INTO users(name,surname,email,password,idexplotation) VALUES ('$name','$surname','$email','$password','$idexplotation')";
    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
        'name' => $name,
        'surname' => $surname,
        'email' => $email,
        'password' => '',
        'idexplotation' => $idexplotation,
        'id' => mysqli_insert_id($mysqli)
        ];
        echo json_encode($authdata);
    }
}

?>