CREATE TABLE Flipper(
   Id_Flipper INT AUTO_INCREMENT,
   name VARCHAR(255),
   description TEXT,
   price INT,
   is_available BOOLEAN,
   is_deleted BOOLEAN,
   PRIMARY KEY(Id_Flipper)
);

CREATE TABLE account(
   Id_account INT AUTO_INCREMENT,
   login VARCHAR(255),
   password VARCHAR(255),
   is_admin BOOLEAN,
   PRIMARY KEY(Id_account)
);

CREATE TABLE dispo(
   Id_dispo INT AUTO_INCREMENT,
   date_debut DATE,
   date_fin DATE,
   is_deleted BOOLEAN,
   Id_Flipper INT,
   PRIMARY KEY(Id_dispo),
   FOREIGN KEY(Id_Flipper) REFERENCES Flipper(Id_Flipper)
);

CREATE TABLE image(
   Id_image INT AUTO_INCREMENT,
   img_src VARCHAR(255),
   alt VARCHAR(255),
   is_deleted BOOLEAN,
   Id_Flipper INT,
   PRIMARY KEY(Id_image),
   FOREIGN KEY(Id_Flipper) REFERENCES Flipper(Id_Flipper)
);

CREATE TABLE app_user(
   Id_customer INT AUTO_INCREMENT,
   first_name VARCHAR(255),
   last_name VARCHAR(255),
   telephone VARCHAR(255),
   mail VARCHAR(255),
   adresse_facturation VARCHAR(255),
   is_deleted BOOLEAN,
   Id_account INT,
   PRIMARY KEY(Id_customer),
   UNIQUE(Id_account),
   FOREIGN KEY(Id_account) REFERENCES account(Id_account)
);

CREATE TABLE reserver(
   Id_Flipper INT,
   Id_customer INT,
   Id_reserver INT AUTO_INCREMENT,
   date_debut DATE,
   date_fin DATE,
   prix DOUBLE,
   adresse_livraison VARCHAR(255),
   is_deleted VARCHAR(255),
   PRIMARY KEY(Id_reserver),
   FOREIGN KEY(Id_Flipper) REFERENCES Flipper(Id_Flipper),
   FOREIGN KEY(Id_customer) REFERENCES app_user(Id_customer)
);
