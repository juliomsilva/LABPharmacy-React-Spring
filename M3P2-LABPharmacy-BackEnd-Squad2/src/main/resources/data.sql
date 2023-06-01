INSERT INTO endereco (cep, logradouro, numero, bairro, cidade, estado, complemento)
VALUES ('12345-678', 'Rua das Flores', 123, 'Centro', 'São Paulo', 'SP', 'Sala 101');

INSERT INTO endereco (cep, logradouro, numero, bairro, cidade, estado, complemento)
VALUES ('98765-432', 'Avenida dos Andradas', 456, 'Serra', 'Belo Horizonte', 'MG', null);

INSERT INTO endereco (cep, logradouro, numero, bairro, cidade, estado, complemento)
VALUES ('54321-876', 'Rua do Ouvidor', 789, 'Centro', 'Rio de Janeiro', 'RJ', 'Fundos');

INSERT INTO tipo_usuario (tipo_usuario) VALUES (1);
INSERT INTO tipo_usuario (tipo_usuario) VALUES (0);
INSERT INTO tipo_usuario (tipo_usuario) VALUES (0);

-- usuario 1
INSERT INTO usuario (nome_completo, cpf, data_nascimento, email, numero_telefone, senha, id_endereco, tipo_usuario )
VALUES ('João da Silva', '111.111.111-11', '1990-05-10', 'joao.silva@gmail.com', '(11) 1111-1111', '123456', 1, 1);

-- usuario 2
INSERT INTO usuario (nome_completo, cpf, data_nascimento, email, numero_telefone, senha, id_endereco, tipo_usuario)
VALUES ('Maria dos Santos', '222.222.222-22', '1985-11-23', 'maria.santos@hotmail.com', '(21) 2222-2222', '654321', 2, 2);

-- usuario 3
INSERT INTO usuario (nome_completo, cpf, data_nascimento, email, numero_telefone, senha, id_endereco, tipo_usuario)
VALUES ('José Pereira', '333.333.333-33', '1978-09-15', 'jose.pereira@yahoo.com', '(31) 3333-3333', 'abcdef', 3, 3);


-- produto 1
INSERT INTO produtos (nome_produto, nome_laboratorio, imagem_produto, dosagem, descricao_produto, preco_unitario, tipo_produto, quantidade_estoque, data_cadastro, id_cadastrador, cadastrado_por)
VALUES ('Paracetamol', 'Lab A', 'https://m.media-amazon.com/images/I/41s%2B3nWm0GL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg', '500mg', 'Analgesico para dor de cabeça e febre', 4.50, 'Comprimido', 100, '2023-04-11', 1, 'João da Silva');

-- produto 2
INSERT INTO produtos (nome_produto, nome_laboratorio, imagem_produto, dosagem, descricao_produto, preco_unitario, tipo_produto, quantidade_estoque, data_cadastro, id_cadastrador, cadastrado_por)
VALUES ('Dipirona', 'Lab B','https://m.media-amazon.com/images/I/41s%2B3nWm0GL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg', '1g', NULL, 3.20, 'Gotas', 50, '2023-04-11', 2, 'Maria dos Santos');

-- produto 3
INSERT INTO produtos (nome_produto, nome_laboratorio, imagem_produto, dosagem, descricao_produto, preco_unitario, tipo_produto, quantidade_estoque, data_cadastro, id_cadastrador, cadastrado_por)
VALUES ('Aspirina', 'Lab C', 'https://m.media-amazon.com/images/I/41s%2B3nWm0GL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg', '100mg', 'Analgésico e antiinflamatório', 5.90, 'Comprimido', 200, '2023-04-11', 3, '');

INSERT INTO venda (id_vendedor,id_comprador, id_produto_vendido, preco_unitario_vendido, quantidade_produto_vendido, id_endereco_venda, data_hora_venda, preco_total_venda, forma_pagamento)
VALUES (1,2, 1, 4.50, 2, 1, '2023-04-11 10:30:00', 9.00, 'Cartão de crédito');

INSERT INTO venda (id_vendedor,id_comprador, id_produto_vendido, preco_unitario_vendido, quantidade_produto_vendido, id_endereco_venda, data_hora_venda, preco_total_venda, forma_pagamento)
VALUES (1, 3,2, 3.20, 1, 2, '2023-04-11 12:15:00', 3.20, 'Dinheiro');

INSERT INTO venda (id_vendedor,id_comprador, id_produto_vendido, preco_unitario_vendido, quantidade_produto_vendido, id_endereco_venda, data_hora_venda, preco_total_venda, forma_pagamento)
VALUES (1, 3,3, 5.90, 3, 3, '2023-04-11 14:00:00', 17.70, 'Cartão de débito');
