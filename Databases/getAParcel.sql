CREATE PROCEDURE getAParcel(@id VarChar(150))
as begin
select *from parcel where id=@id
end