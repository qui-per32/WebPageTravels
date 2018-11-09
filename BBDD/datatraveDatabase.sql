-- MySQL dump 10.13  Distrib 5.7.23, for Linux (x86_64)
--
-- Host: localhost    Database: travelDatabase
-- ------------------------------------------------------
-- Server version	5.7.23-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `travels`
--

DROP TABLE IF EXISTS `travels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `travels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `travel` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `active` tinyint(4) DEFAULT '0',
  `price` varchar(45) DEFAULT NULL,
  `type` smallint(4) DEFAULT NULL,
  `url` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `travels`
--

LOCK TABLES `travels` WRITE;
/*!40000 ALTER TABLE `travels` DISABLE KEYS */;
INSERT INTO `travels` VALUES (1,'Madrid','Save 50$ pay only',1,'659',NULL,'/images/madrid.JPG'),(2,'Nueva York','Save 65$ pay only',1,'329',NULL,'/images/newYork.JPG'),(3,'Buenos Aires','Save 75$ pay only',1,'729',NULL,'/images/buenosAires.JPG'),(4,'Ciudad de Mexico','Save 35$ pay only',1,'519',NULL,'/images/ciudadMexico.JPG'),(5,'Beijing','Save 90$ pay only',1,'359',NULL,'/images/beijing.JPG'),(14,'tokyo','Save 80$ pay only',1,'250',NULL,'/images/tokyo.JPG'),(15,'Lima','save 56$ pay only',1,'250',NULL,'/images/hola.jpg');
/*!40000 ALTER TABLE `travels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(80) NOT NULL,
  `hash` varchar(80) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (2,'adsads','asdas@gmail.com','123',NULL,0,0),(5,'qwe','qwe@hmail.com','123',NULL,0,0),(6,'12314','1231231@gmail.com','123',NULL,0,0),(7,'quique','quique@gmail.com','123',NULL,0,0),(13,'123123','asda@gmail.com','1234',NULL,0,0),(17,'adsasd','asdad@asdads.com','123',NULL,0,0),(20,'perez','perezgonz32@gmail.com','123',NULL,0,0),(28,'quique','quique@gmail.com','123',NULL,0,0),(29,'quique','quique@gmail.com','123',NULL,0,0),(30,'hola','hola@gmail.com','123',NULL,0,0),(54,'edu','educover@gmail.com','123',NULL,0,0),(86,'Enrique','qui.per.gonz32@gmail.com','$2b$10$yTphdLGiEa.61B5IgLZIM.igAiBY830Bu03niAzmZnruV4yhTsxgK','',1,1),(87,'juan','arkina92@gmail.com','$2b$10$U7pe185L2FR9lLOpmDqTKOqWM9YZPGZ4GWtwtlKhEQMGwoe.c58r2','',1,0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-19 14:03:41
