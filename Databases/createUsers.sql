CREATE PROCEDURE createUsers(
@id VarChar(200),
@username VarChar(100),
@full_name VarChar(200),
@phone_number Varchar(100),
@email VarChar(300),
@password VarChar(15),
@isAdmin INT,
@isDeleted INT,
@isSent INT
)
 as begin
 INSERT INTO users(id,username,full_name,phone_number,email,password,isAdmin,isDeleted,isSent)
 VALUES (@id,@username,@full_name,@phone_number,@email,@password,@isAdmin,@isDeleted,@isSent)
 end

 select * from users;