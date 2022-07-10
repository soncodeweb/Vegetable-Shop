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

$user->fullName = $dataInput->fullName;
$user->email = $dataInput->email;
$user->phoneNumber = $dataInput->phoneNumber;
$user->password = getPwdSecurity($dataInput->password);
// $user->createdDate = $dataInput->createdDate;

if ($user->register()) {
    $res = [
        'status' => 1,
        'msg' => "Register Success!!!"
    ];
    echo json_encode($res);
} else {
    $res = [
        'status' => 0,
        'msg' => "Register Failed!!!",
        'error' => 'Email or PhoneNumber already exists!'
    ];
    echo json_encode($res);
}

$db->closeConnect();
