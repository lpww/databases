


-- ---
-- Globals
-- ---
DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'messages'
--
-- ---

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `text` VARCHAR(200) NULL DEFAULT NULL,
  `roomname` VARCHAR(20) NULL DEFAULT NULL,
  `username` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users'
--
-- ---

-- DROP TABLE IF EXISTS `users`;

-- CREATE TABLE `users` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `username` VARCHAR(10) NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- ---
-- Table 'rooms'
--
-- ---

-- DROP TABLE IF EXISTS `rooms`;

-- CREATE TABLE `rooms` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `roomname` VARCHAR(20) NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- ---
-- Table 'usersrooms'
--
-- ---

-- DROP TABLE IF EXISTS `usernameroomname`;

-- CREATE TABLE `usersrooms` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `usernameID` INTEGER(3) NULL DEFAULT NULL,
--   `roomnameID` INTEGER(3) NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- ---
-- Foreign Keys
-- ---

-- ALTER TABLE `messages` ADD FOREIGN KEY (id) REFERENCES `users` (`id`);
-- ALTER TABLE `messages` ADD FOREIGN KEY (id) REFERENCES `rooms` (`id`);
-- ALTER TABLE `usersrooms` ADD FOREIGN KEY (userID) REFERENCES `users` (`id`);
-- ALTER TABLE `usersrooms` ADD FOREIGN KEY (roomID) REFERENCES `rooms` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `usersrooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `messages` (`id`,`message`) VALUES
-- ('','');
-- INSERT INTO `users` (`id`,`user`) VALUES
-- ('','');
-- INSERT INTO `rooms` (`id`,`room`) VALUES
-- ('','');
-- INSERT INTO `usersrooms` (`id`,`userID`,`roomID`) VALUES
-- ('','','');


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

