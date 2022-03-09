use training;
INSERT INTO
	`training`.`user` (`userName`,`firstName`, `lastName`, `email`, `password`, `birthDate`, `firstLoginDate`, `lastLoginDate`, `admin`, `status`)
VALUES 
	('tham','tham','tran hong' ,'admin@gmail.com','12345',MAKEDATE(1992,1),CURDATE(),CURDATE(),1,1),
    ('hoa','hoa','tran hong','hoa@gmail.com','12345',MAKEDATE(1990,2),CURDATE(),CURDATE(),0,0),
    ('hue','hue','võ thị','nvc@gmail.com','12345',MAKEDATE(1997,3),CURDATE(),CURDATE(),0,1),
    ('cuc','cuc','nguyễn thu ','nvd@gmail.com','12345',MAKEDATE(1994,4),CURDATE(),CURDATE(),0,0),
    ('tieng','tieng','tran van','nve@gmail.com','12345',MAKEDATE(1996,5),CURDATE(),CURDATE(),0,1),
    ('nam','nam','tran tan','nvf@gmail.com','12345',MAKEDATE(1992,6),CURDATE(),CURDATE(),0,0),
    ('dung','dung','nguyen thi thuy ','nvg@gmail.com','12345',MAKEDATE(2000,7),CURDATE(),CURDATE(),0,1),
    ('dinh','dinh','võ hoang','nvh@gmail.com','12345',MAKEDATE(2002,8),CURDATE(),CURDATE(),0,0),
    ('duc','duc','nguyễn tran','nvi@gmail.com','12345',MAKEDATE(2001,9),CURDATE(),CURDATE(),0,1),
    ('hoang','hoang','phan van','nvk@gmail.com','12345',MAKEDATE(2003,10),CURDATE(),CURDATE(),0,0);

-- INSERT country
INSERT INTO `training`.`country` (`name`) 
	VALUES 	('VN'),
			('US');

-- INSERT city
INSERT INTO 
	`training`.`city` (`countryID`, `name`)
VALUES
	(1,'TP.Hồ Chí Minh'),
    (1,'TP.Cần Thơ');

-- INSERT district
INSERT INTO 
	`training`.`district` (`cityID`, `name`)
VALUES
	(1,'Quận 1'),
    (1,'Quận 2'),
    (2,'Quận Ninh Kiều'),
    (2,'Quận Bình Thuỷ');

-- INSERT ward
INSERT INTO 
	`training`.`ward` (`districtID`, `name`)
VALUES
	(1,'Phường Bến Nghé'),
    (1,'Phường Bến Thành'),
    (2,'Phường An Khánh'),
    (2,'Phường Thủ Thiêm'),
    (3,'Phường Xuân Khánh'),
    (3,'Phường Hưng Lợi'),
    (4,'Phường Trà An'),
    (4,'Phường Trà Nóc');

-- ---------------------------------------------------------------------------------------------------
-- DML SELECT
-- ---------------------------------------------------------------------------------------------------

-- CHECK USER BY admin
SELECT count(`admin`) as haveUser FROM `user` WHERE `admin` = 1;

-- GET PASSWORD BY admin
SELECT `password` FROM `user` WHERE admin = 1;

-- GET USER BY ID
SELECT
	`userName`, `lastName` , `firstName`, `email`, `birthDate`, `password`,  `firstLoginDate`, `lastLoginDate`, `admin`, `status`
FROM 
	`user`
WHERE
	`userName` = 'tham';

-- GET ALL USER
SELECT
	`userName`,  CONCAT(`lastName` ,' ' ,`firstName`) as `fullName`, `email`, `birthDate`, `password`,  `firstLoginDate`, `lastLoginDate`, `admin`, `status`
FROM
	`user`;

-- DELETE USER BY ID
-- DELETE FROM `user` WHERE `userName` ='hoa';



