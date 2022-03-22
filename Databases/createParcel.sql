CREATE PROCEDURE createParcel(
@id VarChar(50),
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
@sender_id Varchar(100)
)

as begin 
INSERT INTO parcel(
id,description,sender_number,receiver_number,start_location,end_location,isDeleted,isUpdated,isSent,isDelivered,current_location,sender_id)
VALUES(
@id,@description,@sender_number,@receiver_number,@start_location,@end_location,@isDeleted,@isUpdated,@isSent,@isDelivered,@current_location,@sender_id);
END
 
SELECT * FROM parcel;

