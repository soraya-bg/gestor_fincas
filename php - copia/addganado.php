<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $idganado = mysqli_real_escape_string($mysqli, trim($request->idganado));
    $type = trim($request->type);
    $gender = trim($request->gender);
    $birth = trim($request->birth);
    $death = trim($request->death);
    $group = trim($request->group);
    $idexplotation = mysqli_real_escape_string($mysqli, trim($request->idexplotation));
    
    $sql = "INSERT INTO `ganado` (`idganado`, `type`, `gender`, `birth`, `death`, `group`, `idexplotation`) VALUES ('$idganado', '$type', '$gender', '$birth', '$death', '$group', '$idexplotation')";
    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
        'idganado' => $idganado,
        'type' => $type,
        'gender' => $gender,
        'birth' => $birth,
        'death' => $death,
        'group' => $group,
        'idexplotation' => $idexplotation,
        ];
        echo json_encode($authdata);
    }
}

?>