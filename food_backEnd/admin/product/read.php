<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

require_once('../../database/dbhelper.php');
require_once('../../utils/utility.php');
require_once('../../model/Products/Products.php');

$db = new db();

$connect = $db->openConnect();

$product = new Products($connect);

$dataProducts = $product->read();
if ($dataProducts) {
    $res = [
        "status" => 1,
        "msg" => "Product data retrieved successfully!!!",
        "data" => $dataProducts
    ];
    echo json_encode($res);
} else {
    $res = [
        "status" => 1,
        "msg" => "Product data retrieved failed!!!"
    ];
    echo json_encode($res);
}

$db->closeConnect();
