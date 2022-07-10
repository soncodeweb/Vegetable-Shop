
<?php

function getPwdSecurity($pwd)
{
    return md5(md5($pwd) . MD5_PRIVATE_KEY);
}

function executeResult($query, $isSingleRecord = false)
{
    $db = new db();
    $connect = $db->openConnect();
    $stmt = $connect->prepare($query);
    $stmt->execute();
    if ($isSingleRecord) {
        $data = $stmt->fetch(PDO::FETCH_ASSOC);
    } else {
        $data = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $row;
        }
    }
    $db->closeConnect();
    return $data;
}
function validateToken()
{
    $token = '';

    if (isset($_COOKIE['token'])) {
        $token = $_COOKIE['token'];
        $sql   = "select * from users where token = '$token'";
        $data  = executeResult($sql);
        if ($data != null && count($data) > 0) {
            return $data[0];
        }
    }
    return null;
}

function authenToken()
{
    if (isset($_SESSION['user'])) {
        return $_SESSION['user'];
    }
    $token = getCOOKIE('token');
    if (empty($token)) {
        return null;
    }
    $sql = "select users.* from users, login_tokens where users.id = login_tokens.id_user and login_tokens.token = '$token'";
    $result = executeResult($sql);
    if ($result != null && count($result) > 0) {
        $_SESSION['user'] = $result[0];
        return $result;
    }
}

function getGET($key)
{
    $value = '';
    if (isset($_GET[$key])) {
        $value = $_GET[$key];
    }
    $value = fixSqlInjection($value);
    return $value;
}

function getPOST($key)
{
    $value = '';
    if (isset($_POST[$key])) {
        $value = $_POST[$key];
    }
    $value = fixSqlInjection($value);
    return $value;
}

function getCOOKIE($key)
{
    $value = '';
    if (isset($_COOKIE[$key])) {
        $value = $_COOKIE[$key];
    }
    $value = fixSqlInjection($value);
    return $value;
}

function fixSqlInjection($str)
{
    $str = str_replace("\\", "\\\\", $str);
    $str = str_replace("'", "\'", $str);
    return $str;
}
