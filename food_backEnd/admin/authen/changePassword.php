<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
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
$user->password = getPwdSecurity($dataInput->password);
$user->oldPassword = getPwdSecurity($dataInput->oldPassword);

if ($user->changePassword()) {
    $res = [
        'status' => 1,
        'msg' => 'Change password successfully!!',
        // 'data' =>   $dataOutput
    ];
    echo json_encode($res);
} else {
    $res = [
        'status' => 0,
        'msg' => 'Password change failed!!'
    ];
    echo json_encode($res);
}
$db->closeConnect();
