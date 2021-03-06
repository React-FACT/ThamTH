create database training;
use training;	
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: training
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authentication`
--

DROP TABLE IF EXISTS `authentication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authentication` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(55) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `actived` tinyint DEFAULT '1',
  `roledId` int DEFAULT NULL,
  `createdBy` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` varchar(50) DEFAULT NULL,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `actived` tinyint DEFAULT '1',
  `createdBy` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` varchar(50) DEFAULT NULL,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-28  2:06:12
-- DROP TABLE `user`;
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
	`id` int NOT NULL AUTO_INCREMENT,
    `userName` VARCHAR(45) UNIQUE,
    `lastName` VARCHAR(45),
    `firstName` VARCHAR(45),
    `email` VARCHAR(45) UNIQUE,
    `password` VARCHAR(100),
    `birthDate` DATE,
	`firstLoginDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `lastLoginDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `admin` BIT,
    `status` BIT,
	PRIMARY KEY (`id`)
);
-- DROP TABLE `country`;
DROP TABLE IF EXISTS `country`;
CREATE TABLE `country` (
    `id` INT AUTO_INCREMENT,
    `name` NVARCHAR(150),
    PRIMARY KEY (`id`)
);
-- DROP TABLE `city`;
DROP TABLE IF EXISTS `city`;
CREATE TABLE `city` (
	`id` INT  AUTO_INCREMENT,
	`countryID` INT,
	`name` NVARCHAR(150),
	PRIMARY KEY (`id`),
    FOREIGN KEY (`countryID`) REFERENCES `country`(`id`)
);
-- DROP TABLE `district`;
DROP TABLE IF EXISTS `district`;
CREATE TABLE `district` (
    `id` INT  AUTO_INCREMENT,
    `cityID` INT,
    `name` NVARCHAR(150),
	PRIMARY KEY (`id`),
    FOREIGN KEY (`cityID`) REFERENCES `city`(`id`)
);
-- DROP TABLE `ward`;
DROP TABLE IF EXISTS `ward`;
CREATE TABLE `ward` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `districtID` INT,
    `name` NVARCHAR(150),
    FOREIGN KEY (`districtID`) REFERENCES `district`(`id`)
);