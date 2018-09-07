    DROP DATABASE IF EXISTS slideShowData;
    CREATE DATABASE slideShowData;
    USE slideShowData;
    
    
        
    CREATE TABLE products (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        productId INT,
        productName varchar(255),
        productDescription varchar (255),
        color varchar (255),
        price decimal(6,2) NOT NULL,
       
    );