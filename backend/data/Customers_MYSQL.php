CREATE DATABASE `phpro_auth` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `phpro_auth`;


CREATE TABLE phpro_users (
phpro_user_id int(11) NOT NULL auto_increment,
phpro_username varchar(20) NOT NULL,
phpro_password char(40) NOT NULL,
PRIMARY KEY (phpro_user_id),
UNIQUE KEY phpro_username (phpro_username)
);