<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

require_once('../../database/dbhelper.php');
require_once('../../utils/utility.php');
require_once('../../model/Orders/Orders.php');

$db = new db();

$connect = $db->openConnect();



$order = new Orders($connect);

$dataInput = json_decode(file_get_contents("php://input"));

$order->idOrder = $dataInput->idOrder;
// $order->userId = $dataInput->userId;
// $order->orderDate = $dataInput->orderDate;
// $order->transactionStatusId = $dataInput->transactionStatusId;
// $order->isDeleted = $dataInput->isDeleted;
// $order->isPaid = $dataInput->isPaid;
// $order->note = $dataInput->note;
$order->totalMoney = $dataInput->totalMoney;

if ($order->update()) {
    $res = [
        "status" => 1,
        "msg" => "Updated order successfully!!!"
    ];
    echo json_encode($res);
} else {
    $res = [
        "status" => 0,
        "msg" => "Updated order failed!!!"
    ];
    echo json_encode($res);
}
$db->closeConnect();
