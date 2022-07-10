<?php

require_once('../../database/dbhelper.php');
require_once("Orders.php");

class OrderDetails extends Orders
{
    public $idOrderDetail;
    public $productId;
    public $quantity;

    public function create()
    {
        $this->idOrder = htmlspecialchars(strip_tags($this->idOrder));
        $this->productId = htmlspecialchars(strip_tags($this->productId));
        $this->quantity = htmlspecialchars(strip_tags($this->quantity));
        $queryInsertProduct = "INSERT INTO orderdetails(orderId, productId, quantity) VALUES (:orderId,:productId,:quantity)";
        $stmt = $this->conn->prepare($queryInsertProduct);
        $stmt->bindParam(":orderId", $this->idOrder);
        $stmt->bindParam(":productId", $this->productId);
        $stmt->bindParam(":quantity", $this->quantity);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function show_IdOrder()
    {
        $this->idOrder = htmlspecialchars(strip_tags($this->idOrder));
        $queryShowOrder = "SELECT * from orders where idOrder=:orderId";
        $queryShowOrderDetails = "SELECT * from orderdetails where orderId=:orderId";
        $stmt1 = $this->conn->prepare($queryShowOrder);
        $stmt1->bindParam(":orderId", $this->idOrder);
        $data = [];
        $data['order'] = [];
        $data['orderDetails'] = [];
        try {

            $stmt2 = $this->conn->prepare($queryShowOrderDetails);
            $stmt2->bindParam(":orderId", $this->idOrder);
            $stmt2->execute();
            while ($row = $stmt2->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                array_push($data['orderDetails'], $row);
            }
            $stmt1->execute();
            while ($row = $stmt1->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                array_push($data['order'], $row);
            }
            return $data;
        } catch (Exception $e) {
            echo $e;
            return false;
        }
    }

    public function show_IdUser()
    {
        $this->userId = htmlspecialchars(strip_tags($this->userId));
        $queryShowOrderUser = "SELECT * from orders, transactstatus  where orders.transactionStatusId = transactstatus.idTransactStatus and userId=:userId ORDER BY orders.idOrder DESC ";
        $queryShowOrderDetails = "SELECT * from orderdetails where orderId=:orderId";
        $stmt1 = $this->conn->prepare($queryShowOrderUser);
        $stmt1->bindParam(":userId", $this->userId);
        $data = [];
        try {
            $stmt1->execute();
            while ($row = $stmt1->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                $idOrderNew = $idOrder;
                $dataNew = [];
                $dataNew['order'] = [];
                $dataNew['orderDetails'] = [];
                $dataNew['order'] = $row;
                try {
                    $stmt2 = $this->conn->prepare($queryShowOrderDetails);
                    $stmt2->bindParam(":orderId", $idOrderNew);
                    $stmt2->execute();
                    while ($row = $stmt2->fetch(PDO::FETCH_ASSOC)) {
                        extract($row);
                        $productIdNew = $productId;
                        $idOrderDetailNew = $idOrderDetail;
                        $orderIdNew = $orderId;
                        // echo $productIdNew;
                        // Hiển thị ra chi tiết sản phẩm đó
                        try {
                            $queryProduct = "SELECT * from products where idProduct=:idProduct";
                            $stmt3 = $this->conn->prepare($queryProduct);
                            $stmt3->bindParam(":idProduct", $productIdNew);
                            $stmt3->execute();
                            while ($row = $stmt3->fetch(PDO::FETCH_ASSOC)) {
                                extract($row);
                                $dataProductNew = [
                                    "idOrderDetail" => $idOrderDetailNew,
                                    "orderId" => $orderIdNew,
                                    "idProduct" => $idProduct,
                                    "name" => $name,
                                    "sortDesc" => $sortDesc,
                                    "description" => $description,
                                    "price" => $price,
                                    "discount" => $discount,
                                    "thumbail" => $thumbail,
                                    "quantity" => $quantity,
                                    "isDeleted" => $isDeleted,

                                ];
                                array_push($dataNew['orderDetails'], $dataProductNew);
                            };
                        } catch (Exception $e) {
                            echo "Lỗi 3";
                        }
                        // Đóng
                        // array_push($dataNew['orderDetails'], $row);
                    }
                } catch (Exception $e) {
                    echo "Lỗi 2";
                }
                array_push($data, $dataNew);
            }
            return $data;
        } catch (Exception $e) {
            echo "Lỗi 1";
            return false;
        }
    }
};
