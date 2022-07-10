  CREATE TABLE `Roles` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(20)
    `desciptions` varchar(50)
  );

  CREATE TABLE `Users` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `fullName` varchar(50),
    `email` varchar(150),
    `phoneNumber` varchar(20),
    `address` varchar(200),
    `password` varchar(32),
    `roleId` int,
    `createdDate` datetime,
    `updatedDate` datetime,
    `isDeleted` bit
  );

  CREATE TABLE `Categorys` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(100)
  );

  CREATE TABLE `Products` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `categoryId` int,
    `name` varchar(100),
    `price` int,
    `discount` int,
    `thumbail` varchar(500),
    `sortDesc` varchar(100),
    `description` longtext,
    `createdDate` datetime,
    `updatedDate` datetime,
    `isDeleted` bit,
    `gallery_id` int
  );

  CREATE TABLE `Gallerys` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `productId` int,
    `thumbail` varchar(500) NOT NULL
    `idDeleted` bit 
  );

  CREATE TABLE `Orders` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `userId` int,
    `orderDate` datetime,
    `transactionStatusId` int,
    `isDelected` bit
    `isPaid` bit,
    `note` varchar(255),
    `totalMoney` int
  );

  CREATE TABLE `OrderDetails` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `orderId` int,
    `productId` int,
    `quantity` int
  );

  CREATE TABLE `Carts` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `userId` int,
    `productId` int,
    `quantity` int,
    `createdDate` datetime
  );

  CREATE TABLE `TransactStatus` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `status` varchar(50),
    `descriptions` varchar(50),
  );



  ALTER TABLE `Users` ADD FOREIGN KEY (`roleId`) REFERENCES `Roles` (`id`);

  ALTER TABLE `Orders` ADD FOREIGN KEY (`userId`) REFERENCES `Users` (`id`);

  ALTER TABLE `OrderDetails` ADD FOREIGN KEY (`orderId`) REFERENCES `Orders` (`id`);

  ALTER TABLE `Carts` ADD FOREIGN KEY (`userId`) REFERENCES `Users` (`id`);

  ALTER TABLE `Products` ADD FOREIGN KEY (`categoryId`) REFERENCES `Categorys` (`id`);

  ALTER TABLE `Gallerys` ADD FOREIGN KEY (`productId`) REFERENCES `Products` (`id`);

  ALTER TABLE `Order_Details` ADD FOREIGN KEY (`productId`) REFERENCES `Products` (`id`);



// thêm status của đơn hàng vào: đã thanh toán hay chưa, và 

