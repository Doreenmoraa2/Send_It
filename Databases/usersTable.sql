create TABLE users (id VarChar(200) PRIMARY KEY,
					username VarChar(100) NOT NULL,
					full_name VarChar(200) NOT NULL,
					phone_number Varchar(100) NOT NULL,
					email VarChar(100) NOT NULL,
					password VarChar(30) NOT NULL,
					isAdmin INT DEFAULT 0,
					isDeleted INT DEFAULT 0,
					isSent INT DEFAULT 0);

