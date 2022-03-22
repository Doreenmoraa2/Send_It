CREATE PROCEDURE deleteUsers(
@id VarChar(200),
@isDeleted INT
)

AS BEGIN
UPDATE users SET isDeleted = @isDeleted
				WHERE id = @id AND isDeleted = 0;
END