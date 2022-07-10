<?php

require_once("Categorys.php");

class Products extends Categorys
{
    public $idProduct;
    public $name;
    public $price;
    public $discount;
    public $thumbail;
    public $sortDesc;
    public $description;
    public $createdDate = "";
    public $updatedDate = "";
    public $isDeleted;

    public function show()
    {
        $this->idProduct = htmlspecialchars(strip_tags($this->idProduct));
        $this->idCategory = htmlspecialchars(strip_tags($this->idCategory));
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->price = htmlspecialchars(strip_tags($this->price));
        $this->discount = htmlspecialchars(strip_tags($this->discount));
        $this->thumbail = htmlspecialchars(strip_tags($this->thumbail));
        $this->sortDesc = htmlspecialchars(strip_tags($this->sortDesc));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->createdDate = htmlspecialchars(strip_tags($this->createdDate));
        $this->updatedDate = htmlspecialchars(strip_tags($this->updatedDate));
        $this->isDeleted = htmlspecialchars(strip_tags($this->isDeleted));
        $query = "SELECT * from products, categorys where products.categoryId=categorys.IdCategory and idProduct=:idProduct limit 1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':idProduct', $this->idProduct);
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                $this->idProduct = $idProduct;
                $this->idCategory = $categoryId;
                $this->name = $name;
                $this->nameCategory = $nameCategory;
                $this->price = $price;
                $this->discount = $discount;
                $this->thumbail = $thumbail;
                $this->sortDesc = $sortDesc;
                $this->description = $description;
                $this->createdDate = $createdDate;
                $this->updatedDate = $updatedDate;
                $this->isDeleted = $isDeleted;
            }
            return true;
        } else {
            return false;
        }
    }

    public function read()
    {
        $queryProducts = "SELECT * from products  ";
        $stmt = $this->conn->prepare($queryProducts);
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            $products = [];
            while ($rowProduct = $stmt->fetch(PDO::FETCH_ASSOC)) {
                extract($rowProduct);
                $rowProduct['gallery'] = [];
                $queryGallerys = "SELECT * from gallerys where productId='$idProduct'";
                $stmt2 = $this->conn->prepare($queryGallerys);
                $stmt2->execute();
                while ($rowGallery = $stmt2->fetch(PDO::FETCH_ASSOC)) {
                    extract($rowGallery);
                    array_push($rowProduct['gallery'], $rowGallery);
                }
                $products[] = $rowProduct;
            }
            return $products;
        } else {
            return false;
        }
    }

    public function update()
    {
        # code...
    }
    public function delete()
    {
        # code...
    }
    public function create()
    {
        # code...
    }
}
