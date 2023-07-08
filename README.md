# Project-PESO-NET-Mobile


### Getting Started: Usage Instructions and Installation Guide
#### How to set repository
  CREATE DATABASE pesodb

  CREATE TABLE tbl_userrole (
    id INT NOT NULL AUTO_INCREMENT,
    role VARCHAR(15),
    PRIMARY KEY (`id`)
  )

  INSERT INTO tbl_userrole (role) VALUES ('staff')
  INSERT INTO tbl_userrole (role) VALUES ('recruiter')
  INSERT INTO tbl_userrole (role) VALUES ('seeker')
  INSERT INTO tbl_userrole (role) VALUES ('admin')
  
  CREATE TABLE tbl_userinfo (
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    curraddress VARCHAR(255) NOT NULL,
    phonenumber VARCHAR(20) NOT NULL,
    fk_roleid INT,
    PRIMARY KEY (`id`)
  )

  CREATE TABLE tbl_userlogin (
  	id INT NOT NULL AUTO_INCREMENT,
      username VARCHAR(255),
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      fk_userinfoid INT,
      PRIMARY KEY (`id`),
      FOREIGN KEY (`fk_userinfoid`) REFERENCES tbl_userinfo(`id`)
  )
