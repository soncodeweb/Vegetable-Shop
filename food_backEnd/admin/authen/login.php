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

$user->email = $dataInput->email;
$user->password = getPwdSecurity($dataInput->password);

if ($user->login()) {
    // setcookie khi đăng nhập thành công

    $token = getPwdSecurity($user->email . time() . $user->idUser);
    // echo $user->idUser;
    // echo $user->email;

    setcookie('token', $token, time() + 60 * 60 * 24, '/');
    $setTokenQuery = "insert into usertokens (idUser, token) values ('$user->idUser', '$token')";
    $stmt = $user->conn->prepare($setTokenQuery);
    $stmt->execute();
    $res = [
        'status' => 1,
        'msg' => "Login Success!!!",
        'data' => [
            "idUser" => $user->idUser,
            "fullName" =>  $user->fullName,
            "email" =>  $user->email,
            "phoneNumber" =>  $user->phoneNumber,
            "roleId" => $user->idRole,
            "sex" => $user->sex
            // "roleId" => $user->idRole
        ]
    ];
    echo json_encode($res);
} else {
    $res = [
        'status' => 0,
        'msg' => "Login Failed!!!"
    ];
    echo json_encode($res);
}

$db->closeConnect();
