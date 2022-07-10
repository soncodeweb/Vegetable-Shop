<?php
class Carts
{
    private $conn;
    public $idCart;
    public $userId;
    public $productId;
    public $quantity;
    public $createdDate;

    function __construct($db)
    {
        return $this->conn = $db;
    }

    public function create()
    {
        $this->idCart = htmlspecialchars(strip_tags($this->idCart));
        $this->userId = htmlspecialchars(strip_tags($this->userId));
        $this->productId = htmlspecialchars(strip_tags($this->productId));
        $this->quantity = htmlspecialchars(strip_tags($this->quantity));
        $this->createdDate = htmlspecialchars(strip_tags($this->createdDate));
        $queryCheckCart = "SELECT * from carts where userId=:userId and productId=:productId LIMIT 1";
        $stmt = $this->conn->prepare($queryCheckCart);
        $stmt->bindParam(":userId", $this->userId);
        $stmt->bindParam(":productId", $this->productId);
        $stmt->execute();
        $rowCount = $stmt->rowCount();
        if ($rowCount > 0) {
            $quantityOld = 0;
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                $quantityOld = $quantity;
            }
            $queryUpdate = "UPDATE carts set quantity=:quantity where userId=:userId and productId=:productId LIMIT 1";
            $stmt = $this->conn->prepare($queryUpdate);
            $stmt->bindParam(":userId", $this->userId);
            $stmt->bindParam(":productId", $this->productId);
            $quantityNew = $this->quantity + $quantityOld;
            $stmt->bindParam(":quantity", $quantityNew);
            $stmt->execute();

            if ($stmt->execute()) {
                return true;
            } else {
                return false;
            }
        } else {
            $queryCreate = "INSERT INTO carts (userId, productId, quantity) values ($this->userId, $this->productId, $this->quantity)";
            $stmt2 = $this->conn->prepare($queryCreate);
            if ($stmt2->execute()) {
                return true;
            } else {
                return false;
            }
        }
    }

    public function show()
    {
        $this->userId = htmlspecialchars(strip_tags($this->userId));
        $queryShow = "Select * from carts where userId=:userId";

        $stmt = $this->conn->prepare($queryShow);
        $stmt->bindParam(":userId", $this->userId);

        $stmt->execute();

        // if($stmt->rowCount() > 0){
        //     extract($row);
        //     $queryProduct = "SELECT * from products, categorys where products.categoryId=categorys.IdCategory and idProduct=:idProduct limit 1";"
        //     $product = $this->conn->prepare($query);
        //     $product->bindParam(':idProduct', $idProduct);

        // }

        try {
            $stmt->execute();
            $dataCart = [];
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                $dataMain = array(
                    "idCart" => $idCart,
                    "userId" => $userId,
                    "productId" => $productId,
                    "quantity" => $quantity,
                    "createdDate" => $createdDate,
                );
                $queryProduct = "SELECT * from products where idProduct=$productId";
                // echo $productId;
                $stmt2 = $this->conn->prepare($queryProduct);
                $stmt2->execute();

                while ($rowProduct = $stmt2->fetch(PDO::FETCH_ASSOC)) {
                    extract($rowProduct);
                    // $dataMain['name'] = "name";

                    $dataMain['name'] = $name;
                    $dataMain['sortDesc'] = $sortDesc;
                    $dataMain['description'] = $description;
                    $dataMain['thumbail'] = $thumbail;
                    $dataMain['price'] = $price;
                    $dataMain['discount'] = $discount;
                    $dataMain['isDeleted'] = $isDeleted;
                    // $dataMain[] = $rowProduct;
                }
                // $dataMain['name'] = "name";
                array_push($dataCart, $dataMain);
            }

            return $dataCart;
        } catch (Exception $e) {
            // echo $e;
            // echo $data;

            return false;
        }
    }

    function delete()
    {
        $this->idCart = htmlspecialchars(strip_tags($this->idCart));
        $quereDelete = "DELETE FROM `carts` WHERE idCart=:idCart";
        $stmt = $this->conn->prepare($quereDelete);

        $stmt->bindParam(':idCart', $this->idCart);
        try {
            $stmt->execute();
            return true;
            //code...
        } catch (Exception $e) {
            // echo $e;
            return false;
        }
    }

    function update()
    {
        $this->idCart = htmlspecialchars(strip_tags($this->idCart));
        $this->userId = htmlspecialchars(strip_tags($this->userId));
        $this->productId = htmlspecialchars(strip_tags($this->productId));
        $this->quantity = htmlspecialchars(strip_tags($this->quantity));
        $this->createdDate = htmlspecialchars(strip_tags($this->createdDate));
        $queryUpdate = "UPDATE carts set quantity=:quantity WHERE userId=:userId and idCart=:idCart";
        $stmt = $this->conn->prepare($queryUpdate);
        $stmt->bindParam(":quantity", $this->quantity);
        $stmt->bindParam(":userId", $this->userId);
        $stmt->bindParam(":idCart", $this->idCart);
        // try {
            
        //     if($stmt->execute()){
        //         return true;
        //     }
        //     else{
        //         return false;
        //     }
            
        // } catch (\Throwable $th) {
        //     echo $sth;
        //     return false;
        // }

        if($stmt->execute()){
            return true;
        }
    else{
        return false;
    }
    }
}
