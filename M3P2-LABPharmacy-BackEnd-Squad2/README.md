# FullStack - Projeto Final: LAB Pharmacy

## Principais linguagens, tecnologias e ferramentas utilizadas

<br>

### Backend

- Java
- Spring
- Lombok
- Postgre SQL
- Swagger
- Integração com Frontend

<br><br>

## Escopo do projeto
O projeto LAb Pharmacy foi elaborado como trabalho final do Curso de Desenvolvimento Full-Stack oferecido pela DevinHouse em parceria com a Clamed.

Trata-se de uma aplicação web destinada a facilitar o gerenciamento de informações de vendas de produtos, com foco no mercado farmacêutico. A aplicação permite o cadastro, pesquisa, edição e exclusão de informações relacionadas a vendas e produtos.

A aplicação Frontend possui um sistema de login, com dois tipos de perfis de usuários: Administrador e Vendedor. Cada perfil possui diferentes permissões dentro das funcionalidades do sistema.

Funcionalidades para o Usuário Administrador
O Usuário Administrador tem acesso a todas as funcionalidades do sistema. Ele pode cadastrar outros usuários, bem como cadastrar, pesquisar, editar e excluir informações relacionadas a vendas e produtos.

Funcionalidades para o Usuário Vendedor
O Usuário Vendedor é responsável exclusivamente pela administração dos dados de vendas de produtos. Portanto, ele possui um acesso mais restrito à aplicação. As funcionalidades relacionadas ao Vendedor incluem a criação, edição, pesquisa e exclusão de produtos, bem como a criação, edição, pesquisa e exclusão de informações de vendas.

### DataBase

```
spring.datasource.url=jdbc:postgresql://localhost:5432/lab_pharmacy
```

### Backend


Segue abaixo a lista de Endpoints que integram com o front end.

1. Endpoint **/usuario** que deverá ter 2 caminhos:
- O endpoint **/usuario/login** que será usado para o recebimento das informações de login do usuário e deverá retornar o id do usuário.
- O endpoint **/usuario/cadastro** que deverá receber um novo login de usuário e deverá cadastrar ele no banco de dados.

2. Endpoint **/vendas** que deverá conter as seguintes funcionalidades
- Buscar todas as vendas
- Buscar uma venda por ID
- Adicionar uma nova venda
- Atualizar uma venda por ID
- Deletar uma venda por ID

3. Endpoint **/produtos**
- Buscar todos os produtos
- Buscar um produto por ID
- Adicionar um novo produto
- Atualizar um produto por ID
- Deletar um produto por ID


<br>

### API Externa

Foi utilizado a api externa para preenchimento automatico de dados do endereço atravé do cep utilizando a api do Via CEP

```
https://viacep.com.br/
```


