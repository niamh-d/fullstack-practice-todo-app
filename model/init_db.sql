--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists tasks;
SET foreign_key_checks = 1;

--
-- Create Tables
--
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN
);
