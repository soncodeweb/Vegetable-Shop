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

if ($user->logout()) {
    $res = [
        "status" => 1,
        "msg" => "Logout success!!",
    ];
    echo json_encode($res);
} else {
    $res = [
        "status" => 0,
        "msg" => "Logout failed!!"
    ];
    echo json_encode($res);
}
