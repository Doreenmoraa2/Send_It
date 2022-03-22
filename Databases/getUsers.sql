CREATE PROCEDURE getUsers
as begin
select * from users where isDeleted = 0;
end
 