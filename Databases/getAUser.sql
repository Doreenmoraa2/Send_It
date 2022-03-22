CREATE PROCEDURE getAUser(@id VarChar(150))
AS begin 
SELECT * from users WHERE id = @id

end


