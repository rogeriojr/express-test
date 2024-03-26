-- Documento utilizado para inserir comandos sql

-- Criar colunas na tabela de usuarios
CREATE TABLE usuarios(
  nome VARCHAR(50),
  email VARCHAR(100),
  idade INT
);

-- Inserir nas colunas da tabela de usuarios
INSERT INTO usuarios(nome, email, idade) VALUES(
  "Teste User",
  "email@teste.com",
  18
);

-- Lista todos dados da tabela usuarios
SELECT * FROM usuarios

-- Lista um usuario especifico
-- Após WHERE entra a condição do filtro
SELECT * FROM usuarios WHERE idade < 18;

-- Apaga a tabela inteira, tomar muito cuidado com esse comando
DELETE FROM usuarios;

--Apaga um registro que entra dentro da condição do WHERE
DELETE FROM usuarios WHERE nome = "Teste User"

-- Atualiza um usuário na tabela usuarios todos os nomes
UPDATE FROM usuarios SET nome = "Nome atualizado"

-- Atualiza um usuário na tabela usuarios todos os nomes
UPDATE FROM usuarios SET nome = "Nome atualizado" WHERE nome ="Teste User"