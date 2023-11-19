<?php
include_once("database.php");
$postdata = file_get_contents("php://input");

print ($postdata);
die();

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $idfinca = mysqli_real_escape_string($mysqli, trim($request->idfinca));
    $state = trim($request->state);
    $use = trim($request->use);
    $idexplotation = mysqli_real_escape_string($mysqli, trim($request->idexplotation));
    
    $sql = "UPDATE `fincas` SET 'state' = '$state', 'use' = '$use' WHERE 'idfinca' = '$idfinca'";
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