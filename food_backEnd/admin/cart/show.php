<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:POSt');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

require_once('../../database/dbhelper.php');
require_once('../../utils/utility.php');
require_once('../../model/Carts/Carts.php');

$db = new db();

$connect = $db->openConnect();



$cart = new Carts($connect);

$dataInput = json_decode(file_get_contents("php://input"));

$cart->userId = $dataInput->userId;

$dataOutput = $cart->show();

// echo $dataOutput;

if ($dataOutput) {
    $res = [
        'status' => 1,
        'msg' => 'Show products successfully!!',
        'data' =>   $dataOutput
    ];
    echo json_encode($res);
} else {
    $res = [
        'status' => 0,
        'msg' => 'Show products failed!!',
        // 'data' =>   $dataOutput

    ];
    echo json_encode($res);
}

$db->closeConnect();
