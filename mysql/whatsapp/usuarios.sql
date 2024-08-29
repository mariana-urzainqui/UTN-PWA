CREATE TABLE usuarios(
	usuario_id INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(70) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    creado_en DATE DEFAULT CURRENT_DATE
)


//Opcion 1
INSERT INTO usuarios (username, email, password_hash) VALUES ('pepe', 'pepe@gmail.com', 'pepe123')

//Opcion 2
INSERT INTO `usuarios`(`username`, `email`, `password_hash`) 
VALUES ('jose', 'jose@gmail.com', 'jose123'),
('maria', 'maria@gmail.com', 'maria123')



//Eliminar
DELETE FROM usuarios WHERE usuario_id = 4

//Actualizar
UPDATE usuarios
SET email = 'pepesito@gmail.com'
WHERE usuario_id = 1

//Crear leonel, juan y carlita, eliminar a juan por id y actualizar que carlita ahora se llame carlota

INSERT INTO usuarios (username, email, password_hash) VALUES ('leonel','leonel@gmail.com','leonel123'),
('juan','juan@gmail.com','juan123'),
('carlita','carlita@gmail.com','carlita123')

DELETE FROM usuarios WHERE usuario_id = 6

UPDATE usuarios 
SET username = 'carlota' 
WHERE usuario_id = 7

//Alterar nombre tabla usuarios
ALTER TABLE usuarios RENAME TO users

//Alterar nombre columna tabla usuarios

ALTER TABLE usuarios CHANGE password_hash password VARCHAR(255) NOT NULL


//select
//consultar todo
SELECT * FROM usuarios

//consultar nombre de usuario y mail
SELECT username, email FROM usuarios

//consultar por id de usuario
SELECT * FROM usuarios WHERE usuario_id = 1

//buscar al usuario con el nombre pepe y traer su nombre, id, email y fecha de creacion

SELECT username, usuario_id, email, creado_en FROM usuarios WHERE username = 'pepe'