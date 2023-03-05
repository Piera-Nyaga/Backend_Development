CREATE PROCEDURE UpdateUser (    
@id VARCHAR(100), 
@name VARCHAR(200),
@email VARCHAR(300) ,
@password VARCHAR(150))
AS BEGIN

IF EXISTS(SELECT * FROM UserTable WHERE Id=@id)
BEGIN
 UPDATE UserTable SET  Name = @name,        
Email = @email,        
Password = @password

WHERE Id=@id
END
END
