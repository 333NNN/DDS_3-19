CREATE DATABASE nodeBercario;

CREATE TABLE if not EXISTS
    nodeBercario.bebe (
        id_bebe INT NOT NULL AUTO_INCREMENT,
        nome_bebe VARCHAR(50) NULL,
        sexo CHAR(1) NULL,
        nome_mae VARCHAR(50) NOT NULL
    );