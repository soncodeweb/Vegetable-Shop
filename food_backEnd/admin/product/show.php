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


$dataInput = json_decode(file_get_contents("php://input"));

$product->idProduct = $dataInput->idProduct;

if ($product->show()) {
    $dataGallery = [];
    $queryGallery = "SELECT * from gallerys where productId ='$product->idProduct'";
    $stmt = $connect->prepare($queryGallery);
    $stmt->execute();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $dataGallery[] = $row;
    }
    $res = [
        "status" => 1,
        "msg" => "Product data retrieved successfully!!!",
        "data" => [
            "idProduct" => $product->idProduct,
            "categoryId" => $product->idCategory,
            "name" => $product->name,
            "nameCategory" => $product->nameCategory,
            "price" => $product->price,
            "discount" => $product->discount,
            "thumbail" => $product->thumbail,
            "sortDesc" => $product->sortDesc,
            "description" => $product->description,
            "createdDate" => $product->createdDate,
            "updatedDate" => $product->updatedDate,
            "isDeleted" => $product->isDeleted,
            "gallery" => $dataGallery
        ]
    ];

    echo json_encode($res);
} else {
    $res = [
        'status' => 0,
        'msg' => "Product data retrieved failed!!!"
    ];
    echo json_encode($res);
}

$db->closeConnect();
