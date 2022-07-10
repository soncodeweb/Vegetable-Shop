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

$orderDetail = new OrderDetails($connect);

$dataInput = json_decode(file_get_contents("php://input"));

$orderDetail->idOrder = $dataInput->idOrder;

$dataOutput = $orderDetail->show_IdOrder();

if ($dataOutput) {
    $res = [
        "status" => 1,
        "msg" => "Show order, orderDetails successfully!!!",
        "data" => $dataOutput
    ];
    echo json_encode($res);
} else {
    $res = [
        "status" => 0,
        "msg" => "Show order, orderDetails  failed!!!"
    ];
    echo json_encode($res);
}
$db->closeConnect();
