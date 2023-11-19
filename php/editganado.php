<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


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

require 'db_ganado.php';
$database = new Operations();
$conn = $database->dbConnection();

$data = json_decode(file_get_contents("php://input"));



if (!isset($data->idganado)) {
    echo json_encode(['success' => 0, 'message' => 'Please enter correct ganado id.']);
    exit;
}

try {

    $fetch_post = "SELECT * FROM `ganado` WHERE idganado=:idganado";
    $fetch_stmt = $conn->prepare($fetch_post);
    $fetch_stmt->bindValue(':idganado', $data->idganado, PDO::PARAM_INT);
    $fetch_stmt->execute();

    if ($fetch_stmt->rowCount() > 0) :

        $row = $fetch_stmt->fetch(PDO::FETCH_ASSOC);
        $type = isset($data->type) ? $data->type : $row['type'];
        $gender = isset($data->gender) ? $data->gender : $row['gender'];
        $birth = isset($data->birth) ? $data->birth : $row['birth'];
        $death = isset($data->death) ? $data->death : $row['death'];
        $group = isset($data->group) ? $data->group : $row['group'];
        $idexplotation = isset($data->idexplotation) ? $data->idexplotation : $row['idexplotation'];

       $update_query = "UPDATE `ganado` SET 'type' = :type, 'gender' = :gender, 'birth' = :birth, 'death' = :death, 'group' = :group, 'idexplotation' = :idexplotation
        WHERE idganado = :idganado";

        $update_stmt = $conn->prepare($update_query);

        $update_stmt->bindValue(':type', htmlspecialchars(strip_tags($type)), PDO::PARAM_STR);
        $update_stmt->bindValue(':gender', htmlspecialchars(strip_tags($gender)), PDO::PARAM_STR);
        $update_stmt->bindValue(':birth', htmlspecialchars(strip_tags($birth)), PDO::PARAM_STR);
        $update_stmt->bindValue(':death', htmlspecialchars(strip_tags($death)), PDO::PARAM_STR);
        $update_stmt->bindValue(':group', htmlspecialchars(strip_tags($group)), PDO::PARAM_STR);
        $update_stmt->bindValue(':idexplotation', htmlspecialchars(strip_tags($idexplotation)), PDO::PARAM_INT);
        $update_stmt->bindValue(':idganado', $data->idganado, PDO::PARAM_INT);


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
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage()
    ]);
    exit;
}
?>