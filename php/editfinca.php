<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT, GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
error_reporting(E_ERROR);

 $method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}


if ($_SERVER['REQUEST_METHOD'] !== 'PUT') :
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Bad Request detected! Only PUT method is allowed',
    ]);
    exit;
endif;

require 'db_fincas.php';
$database = new Operations();
$conn = $database->dbConnection();

$data = json_decode(file_get_contents("php://input"));



if (!isset($data->idfinca)) {
    echo json_encode(['success' => 0, 'message' => 'Please enter correct finca id.']);
    exit;
}



    $fetch_post = "SELECT * FROM `fincas` WHERE idfinca = :idfinca";

    $fetch_stmt = $conn->prepare($fetch_post);
    $fetch_stmt->bindValue(':idfinca', $data->idfinca, PDO::PARAM_INT);
    $fetch_stmt->execute();

    if ($fetch_stmt->rowCount() > 0) :


        print_r($fetch_stmt);

        die();

        $row = $fetch_stmt->fetch(PDO::FETCH_ASSOC);
        $idfinca = isset($data->use) ? $data->idfinca : $row['idfinca'];
        $state = isset($data->state) ? $data->state : $row['state'];
        $use = isset($data->use) ? $data->use : $row['use'];
        $idexplotation = isset($data->idexplotation) ? $data->idexplotation : $row['idexplotation'];
        

       $update_query = "UPDATE `fincas` SET state=:state,use=:use WHERE idfinca = :idfinca";

        $update_stmt = $conn->prepare($update_query);
        $update_stmt->bindValue(':idfinca', $data->idfinca, PDO::PARAM_INT);
        $update_stmt->bindValue(':state', $data->state, PDO::PARAM_STR);
        $update_stmt->bindValue(':use', $data->use, PDO::PARAM_STR);
        $update_stmt->bindValue(':idexplotation', $data->idexplotation, PDO::PARAM_INT);
        


        if ($update_stmt->execute()) {

            echo json_encode([
                'success' => 1,
                'message' => 'Record udated successfully'
            ]);
            exit;
        }

        echo json_encode([
            'success' => 0,
            'message' => 'Did not udpate. Something went  wrong.'
        ]);
        exit;

    else :

        echo json_encode(['success' => 0, 'message' => 'Invalid ID. No record found by the ID finca.']);
        exit;
    endif;

?>