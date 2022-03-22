CREATE PROCEDURE deleteParcel(
@id VarChar(200),
@isDeleted INT
)

AS BEGIN
UPDATE parcel SET isDeleted = 1
				WHERE id = @id AND isDeleted = 0;
END