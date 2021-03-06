-- MySQL Script generated by MySQL Workbench
-- Thu Feb 10 20:25:53 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema virtual-med-db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `virtual-med-db` ;

-- -----------------------------------------------------
-- Schema virtual-med-db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `virtual-med-db` DEFAULT CHARACTER SET utf8 ;
USE `virtual-med-db` ;

-- -----------------------------------------------------
-- Table `virtual-med-db`.`address_bank`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `virtual-med-db`.`address_bank` ;

CREATE TABLE IF NOT EXISTS `virtual-med-db`.`address_bank` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `zip_code` INT NULL,
  `address` VARCHAR(100) NULL,
  `district` VARCHAR(100) NULL,
  `city` VARCHAR(100) NULL,
  `state` VARCHAR(50) NULL,
  `person_ID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_address_bank_person1_idx` (`person_ID` ASC) VISIBLE,
  CONSTRAINT `fk_address_bank_person1`
    FOREIGN KEY (`person_ID`)
    REFERENCES `virtual-med-db`.`person` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `virtual-med-db`.`agenda`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `virtual-med-db`.`agenda` ;

CREATE TABLE IF NOT EXISTS `virtual-med-db`.`agenda` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `date` VARCHAR(20) NULL,
  `time` VARCHAR(20) NULL,
  `doctor_ID` INT NOT NULL,
  `patient_ID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_agenda_doctor1_idx` (`doctor_ID` ASC) VISIBLE,
  INDEX `fk_agenda_patient1_idx` (`patient_ID` ASC) VISIBLE,
  CONSTRAINT `fk_agenda_doctor1`
    FOREIGN KEY (`doctor_ID`)
    REFERENCES `virtual-med-db`.`doctor` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_agenda_patient1`
    FOREIGN KEY (`patient_ID`)
    REFERENCES `virtual-med-db`.`patient` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `virtual-med-db`.`doctor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `virtual-med-db`.`doctor` ;

CREATE TABLE IF NOT EXISTS `virtual-med-db`.`doctor` (
  `ID` INT NOT NULL,
  `specialty` VARCHAR(20) NULL,
  `crm` VARCHAR(20) NULL,
  PRIMARY KEY (`ID`),
  CONSTRAINT `fk_doctor_worker1`
    FOREIGN KEY (`ID`)
    REFERENCES `virtual-med-db`.`worker` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `virtual-med-db`.`patient`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `virtual-med-db`.`patient` ;

CREATE TABLE IF NOT EXISTS `virtual-med-db`.`patient` (
  `ID` INT NOT NULL,
  `weight` FLOAT NULL,
  `height` INT NULL,
  `blood_type` VARCHAR(2) NULL,
  PRIMARY KEY (`ID`),
  CONSTRAINT `fk_patient_person`
    FOREIGN KEY (`ID`)
    REFERENCES `virtual-med-db`.`person` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `virtual-med-db`.`person`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `virtual-med-db`.`person` ;

CREATE TABLE IF NOT EXISTS `virtual-med-db`.`person` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `email` VARCHAR(50) NULL,
  `password` VARCHAR(100) NULL,
  `phone` VARCHAR(20) NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `virtual-med-db`.`worker`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `virtual-med-db`.`worker` ;

CREATE TABLE IF NOT EXISTS `virtual-med-db`.`worker` (
  `ID` INT NOT NULL,
  `contract_date` VARCHAR(20) NULL,
  `salary` FLOAT NULL,
  PRIMARY KEY (`ID`),
  CONSTRAINT `fk_worker_person1`
    FOREIGN KEY (`ID`)
    REFERENCES `virtual-med-db`.`person` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
