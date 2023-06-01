# FullStack - Projeto Final: LAB Pharmacy


## Principais linguagens, tecnologias e ferramentas utilizadas

<br>

### Frontend

- HTML
- CSS
- Javascript
- React (principal biblioteca para construção do site)
- Styled-components
- Formulários com validação
- Testes unitários
- Responsividade e adaptação de aplicação web para front.

<br><br>

## Escopo do projeto
O projeto LAb Pharmacy foi elaborado como trabalho final do Curso de Desenvolvimento Full-Stack oferecido pela DevinHouse em parceria com a Clamed.

Trata-se de uma aplicação web destinada a facilitar o gerenciamento de informações de vendas de produtos, com foco no mercado farmacêutico. A aplicação permite o cadastro, pesquisa, edição e exclusão de informações relacionadas a vendas e produtos.

A aplicação Frontend possui um sistema de login, com dois tipos de perfis de usuários: Administrador e Vendedor. Cada perfil possui diferentes permissões dentro das funcionalidades do sistema.

Funcionalidades para o Usuário Administrador
O Usuário Administrador tem acesso a todas as funcionalidades do sistema. Ele pode cadastrar outros usuários, bem como cadastrar, pesquisar, editar e excluir informações relacionadas a vendas e produtos.

Funcionalidades para o Usuário Vendedor
O Usuário Vendedor é responsável exclusivamente pela administração dos dados de vendas de produtos. Portanto, ele possui um acesso mais restrito à aplicação. As funcionalidades relacionadas ao Vendedor incluem a criação, edição, pesquisa e exclusão de produtos, bem como a criação, edição, pesquisa e exclusão de informações de vendas.


### Frontend


Segue abaixo a lista de telas necessárias para a aplicação. Em cada tela, o usuário deve fornecer as informações solicitadas no fluxo correspondente.

- Tela de Login 
- Tela de Cadastro de Usuários
- Tela de lista de Usuários
- Tela de Vendas
- Tela de Produtos
- Sair

<br>

- **1. Tela de Login do Administrador**

A tela inicial da aplicação apresenta um formulário de validação, composto por dois campos que requerem a inserção de um email e senha para realizar o login no         sistema. Além disso, há um botão de login disponível.
Para acessar o sistema, o usuário deve fornecer suas informações de login no formulário.

![Login projeto](https://user-images.githubusercontent.com/68797018/233868346-f8c69819-933a-48d6-82f0-8d720e376a9e.png)

<br>

- **2. Tela Sidebar Administrador**

Após realizar o login no sistema, o usuário é direcionado para a tela inicial, que representa o primeiro ponto de interação com o sistema interno da aplicação.

Localizada no canto direito da tela, há uma sidebar que apresenta as rotas do sistema, exibindo opções como Registro de Usuários, Registro de Produtos e Registro de Vendas. Além disso, no topo da sidebar, encontra-se o logo do aplicativo, que permite ao usuário retornar à tela de home ao clicar nele.

![pagina admin](https://user-images.githubusercontent.com/68797018/233868509-8c9f3213-2119-4543-9640-014fb1748124.png)

<br>

- **3. Tela de cadastro de usuários**

Nesta tela, o usuário pode realizar o cadastro de novos usuários no sistema, preenchendo um formulário dividido em duas seções: Dados do Usuário e Dados do Endereço.

A seção Dados do Usuário possui sete campos para preenchimento: Nome Completo, CPF, Data de Nascimento, Celular, E-mail, Escolha uma Senha para o Usuário e Tipo do Usuário. Já na seção Dados do Endereço, há sete campos adicionais para preenchimento: CEP, Estado, Cidade, Bairro, Logradouro, Número e Complemento.

O formulário conta com dois botões: um para limpar os campos e outro para cadastrar as informações fornecidas.

Além do formulário, há uma lista de usuários já cadastrados, com uma barra de pesquisa que permite ao usuário filtrar os resultados. Cada usuário cadastrado é exibido em um card individual contendo informações como ID do usuário, Nome Completo, CPF, Data de Nascimento, E-mail, Celular e Tipo de Usuário.

![pagina cadastro](https://user-images.githubusercontent.com/68797018/233868605-edb5a29a-4f9a-4be2-a2c6-9af933868208.png)

<br>

- **4. Tela de Registro de Produtos**

Aqui o usuário pode adicionar novos produtos à lista da aplicação através de um formulário com 8 campos obrigatórios. Na seção "Dados do produto", são solicitadas informações como Nome do Medicamento, Laboratório, Dosagem, URL da imagem, Tipo do Medicamento, Preço Unitário e Quantidade, enquanto na seção "Descrição do produto", o usuário deve fornecer uma breve descrição do produto.

O formulário possui dois botões, um para limpar os campos e outro para enviar os dados.

Abaixo do formulário há uma lista de produtos, acompanhada de uma barra de pesquisa que permite ao usuário filtrar a lista. Cada produto cadastrado é exibido em um card individual, que mostra o ID do produto, o nome, o tipo, o preço unitário, a quantidade e uma breve descrição.

![cadastro produtos](https://user-images.githubusercontent.com/68797018/233868737-c55548a8-c990-4d9b-8601-17cd91e79af5.png)


<br>

- **5. Tela de Vendas**

Aqui você pode cadastrar novas vendas no sistema preenchendo um formulário com 6 campos: Comprador, Vendedor, Produto, Preço Unitário, Quantidade, Forma de Pagamento e um campo que exibe o valor total com base nas informações inseridas pelo usuário. O formulário conta com dois botões, um para limpar os campos e outro para cadastrar as informações.

Logo abaixo do formulário, há uma lista de vendas, que pode ser filtrada por meio de uma barra de pesquisa. Cada venda cadastrada é exibida em um cartão individual contendo o ID da venda, o nome do vendedor, do produto, o preço unitário, a quantidade, a forma de pagamento e o valor total.

![cadastro vendas](https://user-images.githubusercontent.com/68797018/233868860-2f75c94d-7149-4698-941d-cc75199bc842.png)

<br><br>

## Como rodar a aplicação

No terminal, clone o projeto:
```
git clone https://github.com/DEVin-Clamed/M3P2-LABPharmacy-FrontEnd-Squad2
```

Entre na pasta do projeto:
```
cd DEVin-Clamed/M3P2-LABPharmacy-FrontEnd-Squad2
```

Instale as dependências:
```
npm install --force
```

Execute a aplicação:
```
npm start 
```

<br>






