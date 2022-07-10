<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');



require_once('../../database/dbhelper.php');
require_once('../../utils/utility.php');
require_once('../../model/Users.php');

$db = new db();

$connect = $db->openConnect();

$user = new Users($connect);

$dataInput = json_decode(file_get_contents("php://input"));

$user->idUser = $dataInput->idUser;
$user->fullName = $dataInput->fullName;
$user->sex = (int)$dataInput->sex;

if ($user->update()) {
    $res = [
        'status' => 1,
        'msg' => "Update user successfully!!!"
    ];
    echo json_encode($res);
} else {
    $res = [
        'status' => 0,
        'msg' => "Update user failed!!!"
    ];
    echo json_encode($res);
}
