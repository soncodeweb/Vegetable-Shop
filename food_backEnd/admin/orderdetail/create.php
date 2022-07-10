<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

require_once('../../database/dbhelper.php');
require_once('../../utils/utility.php');
require_once('../../model/Orders/OrderDetails.php');

$db = new db();

$connect = $db->openConnect();

$product = new OrderDetails($connect);

$dataInput = json_decode(file_get_contents("php://input"));

$product->idOrder = $dataInput->idOrder;
$product->productId = $dataInput->productId;
$product->quantity = $dataInput->quantity;

if ($product->create()) {
    $res = [
        "status" => 1,
        "msg" => "Product added to order successfully"
    ];
    echo json_encode($res);
} else {
    $res = [
        "status" => 0,
        "msg" => "Product added to order failed"
    ];
    echo json_encode($res);
}
