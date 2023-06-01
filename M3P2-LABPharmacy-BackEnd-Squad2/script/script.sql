CREATE TABLE endereco (
id SERIAL PRIMARY KEY,
cep varchar (9) NOT NULL,
logradouro varchar (70) NOT NULL,
numero integer NOT NULL,
bairro varchar (70) NOT NULL,
cidade varchar (70) NOT NULL,
estado varchar (70) NOT NULL,
complemento varchar (70),
latitude numeric NOT NULL,
longitude numeric NOT NULL
);

CREATE TABLE usuario (
id SERIAL PRIMARY KEY,
nome_completo varchar(255) NOT NULL,
cpf varchar(14) NOT NULL,
data_nascimento date NOT NULL,
email varchar(255) NOT NULL,
numero_telefone varchar(20) NOT NULL,
senha varchar(255) NOT NULL,
id_endereco integer NOT NULL,
tipo_usuario integer NOT NULL,
id_usuario_cadastro integer NOT NULL,
FOREIGN KEY (id_endereco) REFERENCES endereco (id),
FOREIGN KEY (tipo_usuario) REFERENCES tipo_usuario (id),
);
CREATE TABLE tipo_usuario (
id SERIAL PRIMARY KEY,
tipo_usuario integer NOT NULL
);
