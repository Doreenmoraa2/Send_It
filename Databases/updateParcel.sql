CREATE PROCEDURE updateParcel(
@id VarChar(200),
@description VarChar(500),
@sender_number VarChar(100),
@receiver_number VarChar(100),
@start_location VarChar(100),
@end_location VarChar(100),
@isDeleted INT,
@isUpdated INT,
@isSent INT,
@isDelivered INT,
@current_location VarChar(100),
@sender_id Varchar(200)
)

as begin 
 UPDATE parcel SET 
 description=@description, 
 sender_number=@sender_number, 
 receiver_number = @receiver_number,
 start_location=@start_location,
end_location=@end_location,
isDeleted=@isDeleted, 
isUpdated=@isUpdated, 
isSent=@isSent, 
isDelivered=@isDelivered,
current_location=@current_location, 
sender_id=@sender_id
WHERE  id=@id AND isdeleted = 0;

end
