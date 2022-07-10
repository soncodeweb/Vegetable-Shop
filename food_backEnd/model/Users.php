<?php
require_once('../../utils/utility.php');
session_start();
class Users
{
    public  $idUser;
    public  $idRole;
    public  $fullName = "";
    public  $phoneNumber;
    public  $email;
    public  $sex;
    public  $address = "";
    public  $district = "";
    public  $ward = "";
    public  $password;
    public  $oldPassword;
    public  $isDeleted = 0;
    public  $createdDate;
    public  $updatedDate;

    // public function __construct($db)
    // {
    //     $this->conn = $db;
    // }

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function register()
    {
        $this->fullName = htmlspecialchars(strip_tags($this->fullName));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->password = htmlspecialchars(strip_tags($this->password));
        $this->phoneNumber = htmlspecialchars(strip_tags($this->phoneNumber));
        $this->sex = htmlspecialchars(strip_tags($this->sex));
        $this->createdDate = htmlspecialchars(strip_tags($this->createdDate));

        // $checkQuery = "SELECT * from users where userName=:userName or email=:email or phoneNumber=:phonerNumber";
        $checkQuery = "SELECT * from users where email='$this->email' or phoneNumber='$this->phoneNumber'";
        $stmt = $this->conn->prepare($checkQuery);
        // $stmt1->bindParam(':email', $this->email);
        // $stmt1->bindParam(':userName', $this->userName);
        // $stmt1->bindParam(':phoneNumber', $this->phoneNumber);
        $stmt->execute();

        $row = $stmt->rowCount();

        if ($row > 0) {
            return false;
        } else {
            $insertQuery = "INSERT INTO  users (fullName, phoneNumber, email, password) values (:fullName,:phoneNumber,:email,:password)";
            $stmt2 = $this->conn->prepare($insertQuery);
            $stmt2->bindParam(':fullName', $this->fullName);
            $stmt2->bindParam(':phoneNumber', $this->phoneNumber);
            $stmt2->bindParam(':email', $this->email);
            $stmt2->bindParam(':password', $this->password);
            // $stmt2->bindParam(':createdDate', $this->createdDate);
            $stmt2 = $stmt2->execute();
            return true;
        }
    }

    public function login()
    {
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->password = htmlspecialchars(strip_tags($this->password));
        $checkQuery = "SELECT * from users where email=:email and password=:password";
        $stmt = $this->conn->prepare($checkQuery);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':password', $this->password);
        $stmt->execute();

        $rowCount = $stmt->rowCount();
        // lấy id người dùng vừa đăng nhập
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $this->idUser = $idUser;
            $this->idRole = $roleId;
            $this->fullName = $fullName;
            $this->phoneNumber = $phoneNumber;
            $this->email = $email;
            $this->sex = $sex;
            $this->isDeleted = $isDeleted;
        }
        if ($rowCount > 0 && $this->isDeleted != 1) {
            return true;
        } else {
            return false;
        }
    }

    public function logout()
    {
        $token = getCOOKIE('token');
        if (empty($token)) {
            return true;
        }

        $query = "delete from usertokens where token = '$token'";

        $stmt = $this->conn->prepare($query);
        if ($stmt->execute()) {
            setcookie('token', '', time() - 60 * 60 * 24 * 7, '/');
            session_destroy();
            return true;
        } else {
            return false;
        }

        // xóa token khoi database
    }

    public function update()
    {
        $this->idUser = htmlspecialchars(strip_tags($this->idUser));
        $this->fullName = htmlspecialchars(strip_tags($this->fullName));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->phoneNumber = htmlspecialchars(strip_tags($this->phoneNumber));
        $this->sex = htmlspecialchars(strip_tags($this->sex));

        $updateQuery = "UPDATE users set fullName='$this->fullName' , sex=$this->sex where idUser='$this->idUser'";

        $stmt = $this->conn->prepare($updateQuery);
        // $stmt->bindParam(':idUser', $this->idUser);
        // $stmt->bindParam(':fullName', $this->fullName);
        // $stmt->bindParam(':sex', $this->sex);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
        // try {
        //     $stmt->execute();
        //     return true;
        // } catch (\Throwable $th) {
        //     return false;
        // }
    }

    public function changePassword()
    {
        $this->idUser = htmlspecialchars(strip_tags($this->idUser));
        $this->oldPassword = htmlspecialchars(strip_tags($this->oldPassword));

        $checkPassword = "SELECT * from users where idUser=:idUser and password=:password";
        $stmt = $this->conn->prepare($checkPassword);
        $stmt->bindParam(':idUser', $this->idUser);
        $stmt->bindParam(':password', $this->oldPassword);

        try {
            $stmt->execute();
            $rowCount = $stmt->rowCount();
            if ($rowCount > 0) {
                $updatePassword = "UPDATE users set password=:password where idUser=:idUser";
                $stmt = $this->conn->prepare($updatePassword);
                $stmt->bindParam(':idUser', $this->idUser);
                $stmt->bindParam(':password', $this->password);
                if ($stmt->execute()) {
                    return true;
                } else {
                    return false;
                }
            }
        } catch (\Throwable $th) {
            echo $th;
            return false;
        }
    }
}
