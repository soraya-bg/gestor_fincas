<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $idfinca = mysqli_real_escape_string($mysqli, trim($request->idfinca));
    $state = trim($request->state);
    $use = trim($request->use);
    $idexplotation = mysqli_real_escape_string($mysqli, trim($request->idexplotation));
    
    $sql = "INSERT INTO `fincas`(`idfinca`, `state`, `use`, `idexplotation`) VALUES ('$idfinca', '$state', '$use', '$idexplotation')";
    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
        'idfinca' => $idfinca,
        'state' => $state,
        'use' => $use,
        'idexplotation' => $idexplotation,
        ];
        echo json_encode($authdata);
    }
}

?>