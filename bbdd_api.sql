-- Eliminar la base de datos si ya existe
DROP DATABASE IF EXISTS bbdd_api;

-- Crear la base de datos
CREATE DATABASE bbdd_api;

-- Usar la base de datos
USE bbdd_api;

-- Crear la tabla paises si no existe
CREATE TABLE IF NOT EXISTS `paises` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,  -- Agregar AUTO_INCREMENT para que el id sea autoincremental
  `nombre` VARCHAR(150) NOT NULL,
  `poblacion` INT(11) NOT NULL,
  PRIMARY KEY (`id`)  -- Definir la clave primaria en el campo id
);

-- Crear la tabla usuarios si no existe
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `apellidos` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL, -- Asegúrate de usar un hash para la contraseña
  `rol` ENUM('admin', 'user') DEFAULT 'user', -- Definir los roles posibles
  PRIMARY KEY (`id`)
);

-- Insertar países si no existen
-- Comprobar si el país ya existe antes de insertar
INSERT INTO `paises` (`nombre`, `poblacion`)
SELECT 'España', 46754778
WHERE NOT EXISTS (SELECT 1 FROM `paises` WHERE `nombre` = 'España');

INSERT INTO `paises` (`nombre`, `poblacion`)
SELECT 'Reino Unido', 67886011
WHERE NOT EXISTS (SELECT 1 FROM `paises` WHERE `nombre` = 'Reino Unido');

INSERT INTO `paises` (`nombre`, `poblacion`)
SELECT 'Francia', 65273511
WHERE NOT EXISTS (SELECT 1 FROM `paises` WHERE `nombre` = 'Francia');
