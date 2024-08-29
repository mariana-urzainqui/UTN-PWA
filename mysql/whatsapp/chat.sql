CREATE TABLE chat(
	chat_id INT PRIMARY KEY AUTO_INCREMENT,
    enviado_por INT NOT NULL,
    recibido_por INT NOT NULL,
    mensaje TEXT NOT NULL,
    creado_en DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (enviado_por) REFERENCES usuarios(usuario_id),
    FOREIGN KEY (recibido_por) REFERENCES usuarios(usuario_id)
)

INSERT INTO `chat`(`enviado_por`, `recibido_por`, `mensaje`) 
VALUES (1,2,'Hola'), (2,1,'Como estas?')