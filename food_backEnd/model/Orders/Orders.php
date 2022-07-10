<?php
class Orders
{
    public $conn;
    public $idOrder;
    public $userId;
    public $orderDate;
    public $district;
    public $province;
    public $ward;
    public $address;
    public $transactionStatusId;
    public $isDeleted = 0;
    public $idPaid = 0;
    public $note;
    public $totalMoney = 0;

    function __construct($db)
    {
        $this->conn = $db;
    }

    public function create()
    {
        $this->idOrder = htmlspecialchars(strip_tags($this->idOrder));
        $this->userId = htmlspecialchars(strip_tags($this->userId));
        $this->orderDate = htmlspecialchars(strip_tags($this->orderDate));
        $this->district = htmlspecialchars(strip_tags($this->district));
        $this->province = htmlspecialchars(strip_tags($this->province));
        $this->ward = htmlspecialchars(strip_tags($this->ward));
        $this->address = htmlspecialchars(strip_tags($this->address));
        $this->note = htmlspecialchars(strip_tags($this->note));
        $queryCreateOrder = "INSERT into orders (userId,district,province,ward,address,note) values(:userId,:district,:province,:ward,:address,:note)";
        $stmt = $this->conn->prepare($queryCreateOrder);
        $stmt->bindParam(':userId', $this->userId);
        $stmt->bindParam(':district', $this->district);
        $stmt->bindParam(':province', $this->province);
        $stmt->bindParam(':ward', $this->ward);
        $stmt->bindParam(':address', $this->address);
        $stmt->bindParam(':note', $this->address);
        // $stmt->bindParam(':orderDate', $this->orderDate);

        if ($stmt->execute()) {
            $queryOrder = "SELECT * from orders ORDER BY idOrder DESC LIMIT 1";

            $stmt2 = $this->conn->prepare($queryOrder);

            $stmt2->execute();
            $data = [];
            while ($row = $stmt2->fetch(PDO::FETCH_ASSOC)) {
                $data = $row;
            }
            return $data;
        } else {
            return false;
        }
    }

    public function update()
    {
        $this->idOrder = htmlspecialchars(strip_tags($this->idOrder));
        // $this->userId = htmlspecialchars(strip_tags($this->userId));
        // $this->orderDate = htmlspecialchars(strip_tags($this->orderDate));
        // $this->transactionStatusId = htmlspecialchars(strip_tags($this->transactionStatusId));
        // $this->isDeleted = htmlspecialchars(strip_tags($this->isDeleted));
        // $this->isPaid = htmlspecialchars(strip_tags($this->isPaid));
        // $this->note = htmlspecialchars(strip_tags($this->note));
        $this->totalMoney = htmlspecialchars(strip_tags($this->totalMoney));

        // $queryUpdate = "UPDATE orders SET userId=:userId , orderDate=:orderDate , transactionStatusId=:transactionStatusId ,isDeleted=:isDeleted , isPaid=:isPaid , note=:note ,totalMoney=:totalMoney WHERE idOrder=:idOrder";

        $queryUpdate = "UPDATE orders SET totalMoney=:totalMoney WHERE idOrder=:idOrder";

        $stmt = $this->conn->prepare($queryUpdate);

        $stmt->bindParam(":idOrder", $this->idOrder);
        // $stmt->bindParam(":userId", $this->userId);
        // $stmt->bindParam(":orderDate", $this->orderDate);
        // $stmt->bindParam(":transactionStatusId", $this->transactionStatusId);
        // $stmt->bindParam(":isDeleted", $this->isDeleted);
        // $stmt->bindParam(":isPaid", $this->isPaid);
        // $stmt->bindParam(":note", $this->note);
        $stmt->bindParam(":totalMoney", $this->totalMoney);

        try {
            $stmt->execute();
            return true;
        } catch (Exception $th) {
            echo $th;
            return false;
        }
        // if ($stmt->execute()) {
        //     return true;
        // } else {
        //     return false;
        // }
    }
}
