<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
error_reporting(E_ERROR);


$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}


if ($_SERVER['REQUEST_METHOD'] !== "DELETE") :
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Bad Request detected. HTTP method should be DELETE',
    ]);
    exit;
endif;

require 'db_fincas.php';
$database = new Operations();
$conn = $database->dbConnection();

$data = json_decode(file_get_contents("php://input"));


$idfinca =  $_GET['idfinca'];



if (!isset($idfinca)) {
    echo json_encode(['success' => 0, 'message' => 'Please provide the ID of the finca.']);
    exit;
}

try {

    $fetch_post = "SELECT * FROM `fincas` WHERE idfinca=:idfinca";
    $fetch_stmt = $conn->prepare($fetch_post);
    $fetch_stmt->bindValue(':idfinca', $idfinca, PDO::PARAM_INT);
    $fetch_stmt->execute();

    if ($fetch_stmt->rowCount() > 0) :

        $delete_post = "DELETE FROM `fincas` WHERE idfinca=:idfinca";
        $delete_post_stmt = $conn->prepare($delete_post);
        $delete_post_stmt->bindValue(':idfinca', $idfinca,PDO::PARAM_INT);

        if ($delete_post_stmt->execute()) {

            echo json_encode([
                'success' => 1,
                'message' => 'Record Deleted successfully'
            ]);
            exit;
        }

        echo json_encode([
            'success' => 0,
            'message' => 'Could not delete. Something went wrong.'
        ]);
        exit;

    else :
        echo json_encode(['success' => 0, 'message' => 'Invalid ID. No posts found by the ID.']);
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