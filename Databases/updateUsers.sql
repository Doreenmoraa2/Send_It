CREATE PROCEDURE updateUsers(
@id VarChar(200),
@username VarChar(100),
@full_name VarChar(200),
@phone_number Varchar(100),
@email VarChar(100),
@password VarChar(30),
@isAdmin INT,
@isDeleted INT,
@isSent INT
)

AS BEGIN
UPDATE users SET 
username = @username, 
full_name = @full_name, 
phone_number = @phone_number, 
email = @email, 
password = @password,
isAdmin = @isAdmin, 
isDeleted = @isDeleted, 
isSent = @isSent
	WHERE id = @id AND isDeleted = 0;
END