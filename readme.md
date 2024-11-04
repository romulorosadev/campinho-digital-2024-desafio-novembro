**Projeto: Plataforma de Exploração de Conteúdo*

## 📋 Descrição do Projeto

Imagine que você faz parte de uma equipe de desenvolvimento responsável por criar uma plataforma inovadora que permita aos usuários explorar e interagir com diferentes tipos de conteúdo, como filmes, produtos ou times de futebol. O objetivo é desenvolver uma aplicação que consuma dados de uma API rica em informações e apresente esses dados de maneira intuitiva e atraente.

<img src="https://github.com/user-attachments/assets/cbf8fd5c-0bbe-4078-8c45-3c97868c05d9" alt="Receita 3" width="500px">

[FIGMA](https://www.figma.com/design/xFS8VNZxnHjS83ekaDlTTx/Food-recipes-website-UI---Del%C3%ADcias-%C3%A0-Mesa-(Community)?node-id=0-1&node-type=canvas&t=oTAUZXbEa8XLF2AG-0)  


## ✅ Critérios de Aceitação

**Consumo da API:**

   - A aplicação deve realizar requisições HTTP usando métodos como `fetch` ou `axios` para consumir dados do endpoint de GET da API fornecida.
Os dados devem ser carregados de forma assíncrona e tratadas possíveis falhas de requisição com mensagens de erro exibidas na interface.
   - Os dados devem ser carregados de forma assíncrona e tratadas possíveis falhas de requisição com mensagens de erro exibidas na interface.

 **Exibição de Dados na Tela:**

- As informações retornadas pela API devem ser exibidas na tela usando manipulação do DOM (Document Object Model).
- Elementos HTML devem ser criados e adicionados dinamicamente ao DOM para exibir os dados de maneira clara e estruturada.
- Os dados devem incluir campos como título, descrição e quaisquer outros detalhes relevantes para o tema (por exemplo, nome do produto, sinopse do filme ou nome do time de futebol).
  
 **Bônus:**
Solte sua imaginação!: Sinta-se à vontade para estilizar e aprimorar a aplicação da forma que desejar. Use cores, fontes, animações e layouts criativos para tornar a experiência visualmente atrativa e única. Quanto mais criativa e bem apresentada a interface, melhor!


## 📡 Sobre a api:

#### ⚠️ Atenção  Se a API exigir uma chave de autenticação (API Key) e você tentar fazer uma requisição sem ela, receberá um erro de resposta, geralmente com um código de status 401 (Não autorizado).

Exemplo do postman sem `API KEY`

<img width="1027" alt="Captura de Tela 2024-11-04 às 10 53 38" src="https://github.com/user-attachments/assets/43bbacb7-88b3-407a-843b-fafbd26477ee">

### Certifique-se de incluir a API Key ou um token de autenticação no cabeçalho da requisição da seguinte forma:

# Certifique-se de incluir a API Key no cabeçalho da requisição da seguinte forma:

~~~javascript
Authorization: Bearer 66e2589493175d28b257c265c4ba0888ef2f77722b35c45b1666018cda8f510bf8dec9159845134c51d8012a9ff7da8701b2491532aa401310a29a1ba7f4b8d33e6eaeb7ca32037d339ec8d23a3d20bc2fa47141832b702892b48761373690ae6bd51786dbe75cd78f82ca400032cd1a18522f53c3b98016e79c90ef0f3a9cb9
~~~

<img width="1020" alt="Captura de Tela 2024-11-04 às 11 11 35" src="https://github.com/user-attachments/assets/6eb85c4e-5dcc-4c1b-86b4-346d6291c2e9">


## Endpoints Disponíveis 📑
Movies (Filmes):

~~~javascript
Listar todos os filmes: GET /movies
Detalhes de um filme específico: GET /movies/:id
~~~

### o que posso fazer? 🤔

- Página de Lista de Filmes
Objetivo: Apresentar uma visão geral dos filmes disponíveis.

Products (Produtos):

~~~javascript
Listar todos os produtos: GET /products
Detalhes de um produto específico: GET /products/:id
~~~

### o que posso fazer? 🤔

- Página de Lista de Produtos
Objetivo: Apresentar uma visão geral de todos os produtos disponíveis.


Teams (Times de Futebol):
~~~javascript
Listar todos os times: GET /teams
Detalhes de um time específico: GET /teams/:id
~~~

### o que posso fazer? 🤔

- Página de Lista de Times
Objetivo: Apresentar uma visão geral de todos os times de futebol disponíveis.

Users (Usuários):

~~~javascript
Listar todos os usuários: GET /users
Detalhes de um usuário específico: GET /users/:id
~~~

### o que posso fazer? 🤔

- Página de Lista de Usuários
Objetivo: Exibir uma visão geral de todos os usuários cadastrados na plataforma.
## 🛠 Instruções para Trabalhar 

### 1. Fork do Repositório
   - Um "fork" é uma cópia de um repositório que fica no seu perfil GitHub. Você faz um fork para ter uma versão própria do projeto na qual você pode trabalhar. Isso permite que você modifique e experimente o código sem afetar o repositório original.
 
#### Como forkar?

[Como fazer um fork](https://github.com/campinho-digital/Como-fazer-um-Fork)  


### 2. Após o Fork

- Clonar o Repositório Forkado
  
Abra o terminal ou o Git Bash em seu computador.


### Clone o repositório forkado para o seu computador com o seguinte comando:

~~~javascript
git clone seu_repositorio
~~~


### Navegue até a pasta do repositório clonado:

~~~javascript
cd seu_repositorio
~~~

#### ⚠️ Atenção 

Quando você clona um repositório, o Git cria uma nova pasta no seu sistema contendo todos os arquivos e a estrutura do projeto. Para trabalhar com esse projeto (editar arquivos, rodar scripts, instalar dependências, etc.), você precisa estar dentro dessa pasta. Se não navegar para essa pasta, você estará em uma localização diferente no seu sistema e os comandos que tentar rodar (como npm install ou git) não funcionarão corretamente, pois eles precisam ser executados no diretório correto.


### 3. Instalar Dependências
Se o projeto utiliza npm, você deve instalar as dependências:

~~~javascript
npm install

~~~

#### ⚠️ Atenção 
Se o projeto utiliza o Node.js e tem um arquivo `package.json`, você precisa rodar `npm install` para instalar todas as bibliotecas e dependências que o projeto necessita para funcionar. Sem isso, o projeto pode não rodar corretamente.


### 4. Rodando o projeto

- Vá até a pasta do projeto no terminal ou prompt de comando.
- Digite o seguinte comando no terminal
  
~~~javascript
npm start
~~~

- Isso irá rodar o comando `"start": "lite-server"` que está configurado no package.json. O `lite-server` vai automaticamente:

- Criar um servidor local.
- Abrir o seu navegador padrão.
- Carregar o arquivo index.html do seu projeto.


### 5. Versionamento com Git
Depois de implementada a solução e adicionar comentários ao código, você precisa versionar essas alterações usando o Git.

Quando você estiver trabalhando em dupla, é fundamental usar o Git para controlar as versões do projeto de forma organizada e eficiente. Isso ajuda a evitar conflitos de código e facilita a colaboração. 


## **Boa sorte e bom código!** 🚀📘

