<?php
require_once('config.php');

// insert, update, delete, select
// SQL: insery, update, delete
class db
{
    private $servername = HOST;
    private $username = USERNAME;
    private $password = PASSWORD;
    private $db = DATABASE;
    private $conn;
    public function openConnect()
    {
        $this->conn = null;
        try {
            $this->conn = new PDO("mysql:host=" . $this->servername . ";dbname=" . $this->db . "", $this->username, $this->password);
            // set the PDO error mode to exception
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
        }
        return $this->conn;
    }
    public function closeConnect()
    {
        $this->conn = null;
    }
}





// function execute($sql)
// {
//     // open connection
//     $conn = mysqli_connect(HOST, DATABASE, USERNAME, PASSWORD);
//     mysqli_set_charset($conn, 'UTF-8');

//     // query
//     mysqli_query($conn, $sql);
//     // close connection 
//     mysqli_close($conn);
// }

// function executeResult($sql, $isSingle = false)
// {
//     $data = null;
//     // open connection
//     $conn = mysqli_connect(HOST, DATABASE, USERNAME, PASSWORD);
//     mysqli_set_charset($conn, 'UTF-8');

//     // query
//     $resultset = mysqli_query($conn, $sql);
//     if ($isSingle) {
//         $data =  mysqli_fetch_array($resultset, 1);
//     } else {
//         $data = [];
//         while (($row = mysqli_fetch_array($resultset, 1)) != null) {
//             $data[] = $row;
//         }
//     }

//     // close connection 
//     mysqli_close($conn);
//     return $data;
// }
