CREATE PROCEDURE getParcels

as begin 
select * from parcel where isDeleted = 0
end

