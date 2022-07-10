<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

require_once('../../database/dbhelper.php');
require_once('../../utils/utility.php');
require_once('../../model/Carts/Carts.php');

$db = new db();

$connect = $db->openConnect();



$cart = new Carts($connect);

$dataInput = json_decode(file_get_contents("php://input"));

$cart->userId = $dataInput->userId;
$cart->productId = $dataInput->productId;
$cart->quantity = $dataInput->quantity;
// $cart->createdDate = $dataInput->createdDate;

if ($cart->create()) {
    $res = [
        'status' => 1,
        'msg' => 'Product added to cart successfully!!',
        // 'data' =>   $dataOutput
    ];
    echo json_encode($res);
} else {
    $res = [
        'status' => 0,
        'msg' => 'Product added to cart failed!!'
    ];
    echo json_encode($res);
}

$db->closeConnect();
