<?php

header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

require_once('../../database/dbhelper.php');
require_once('../../utils/utility.php');
require_once('../../model/Orders/Orders.php');

$db = new db();

$connect = $db->openConnect();

$order = new Orders($connect);

$dataInput = json_decode(file_get_contents("php://input"));

$order->userId = $dataInput->userId;
$order->district = $dataInput->district;
$order->province = $dataInput->province;
$order->ward = $dataInput->ward;
$order->address = $dataInput->address;
$order->note = $dataInput->note;
// $order->orderDate = $dataInput->orderDate;

$dataOutput = $order->create();

if ($dataOutput) {
    $res = [
        'status' => 1,
        'msg' => 'Order created successfully!!',
        'data' =>   $dataOutput
    ];
    echo json_encode($res);
} else {
    $res = [
        'status' => 0,
        'msg' => 'Order created failed!!'
    ];
    echo json_encode($res);
}

$db->closeConnect();
