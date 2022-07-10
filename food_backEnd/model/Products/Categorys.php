<?php
class Categorys
{
    public $conn;
    public $idCategory;
    public $nameCategory;

    public function __construct($db)
    {
        $this->conn = $db;
    }
}
