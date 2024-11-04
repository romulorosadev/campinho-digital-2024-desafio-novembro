*Projeto: Plataforma de Exploração de Conteúdo*

## 📋 Descrição do Projeto


🤔 Imagine que você precisa juntar dinheiro e decide criar uma pequena loja online para listar seus itens. O objetivo é desenvolver uma plataforma que permita a você apresentar e vender seus produtos de maneira intuitiva e atraente, refletindo a sua identidade única. Essa loja não só ajudará você a arrecadar fundos, mas também permitirá que os visitantes conheçam um pouco mais sobre você e o que está à venda.

Ao consumir a API da nossa loja, você pode criar uma experiência que tenha a sua cara, o seu estilo e o nome que desejar. Com essa flexibilidade, a sua loja pode ser personalizada de acordo com a identidade que você sempre imaginou, garantindo uma conexão mais forte com o seu público.

## Para se inspirar - ONG Campinho - Loja de Roupas 👕🛒

A ONG Campinho é uma organização sem fins lucrativos dedicada a capacitar pessoas através  do ensino de tecnologia. Para ajudar a arrecadar fundos para manter nossas turmas, desenvolvemos uma plataforma de e-commerce que permite a compra de roupas, com todas as vendas revertidas para os nossos programas.


<img width="1159" alt="Captura de Tela 2024-11-04 às 12 19 04" src="https://github.com/user-attachments/assets/55c1a25a-0d64-4447-945d-5564f7434480">

<img width="577" alt="Captura de Tela 2024-11-04 às 12 19 13" src="https://github.com/user-attachments/assets/b3b1f78d-c097-40e7-9f1a-65ef0f0c41e2">



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


## 📡 Testando a Api no Postman:

Ao testar a Api utilizando o postman podemos validar o formato e estrutura: ver como os dados chegam da API permite que o desenvolvedor entenda o formato (JSON, XML, etc.), a estrutura dos objetos, os campos disponíveis e seus tipos. Isso ajuda a planejar como manipular e renderizar esses dados no front-end.

#### ⚠️ Atenção  Se a API exigir uma chave de autenticação (API Key) e você tentar fazer uma requisição sem ela, receberá um erro de resposta, geralmente com um código de status 401 (Não autorizado).

Exemplo do postman sem `API KEY`

<img width="1027" alt="Captura de Tela 2024-11-04 às 10 53 38" src="https://github.com/user-attachments/assets/43bbacb7-88b3-407a-843b-fafbd26477ee">


### Certifique-se de incluir a API Key no cabeçalho da requisição da seguinte forma:

~~~javascript
Authorization: Bearer 66e2589493175d28b257c265c4ba0888ef2f77722b35c45b1666018cda8f510bf8dec9159845134c51d8012a9ff7da8701b2491532aa401310a29a1ba7f4b8d33e6eaeb7ca32037d339ec8d23a3d20bc2fa47141832b702892b48761373690ae6bd51786dbe75cd78f82ca400032cd1a18522f53c3b98016e79c90ef0f3a9cb9
~~~

<img width="1020" alt="Captura de Tela 2024-11-04 às 11 11 35" src="https://github.com/user-attachments/assets/6eb85c4e-5dcc-4c1b-86b4-346d6291c2e9">


## Endpoints Disponíveis 📑

### Products (Produtos):

~~~javascript
Listar todos os produtos: GET /products
Detalhes de um produto específico: GET /products/:id
~~~

## 📡 Consumindo a API com JS:

Este guia mostra como consumir uma API RESTful com JavaScript, utilizando fetch() para fazer requisições e manipular o DOM. O exemplo foca em consumir dados de uma API Strapi e exibi-los em uma página web.

### O que é JSON?
JSON (JavaScript Object Notation) é um formato de dados leve e fácil de ler e escrever, amplamente utilizado para trocar informações entre cliente e servidor. No JavaScript, você pode transformar a resposta JSON em um objeto utilizável com o método `.json()`.

1. Defina a URL da API e o Token:

Comece definindo a URL da API que você deseja consumir e o token de autorização que será necessário nas requisições.

~~~javascript
const apiUrl = 'https://ecom-back-strapi.onrender.com/api/products';
const token = 'Bearer SEU_TOKEN_AQUI'; // Insira seu token aqui
~~~

2. Crie uma Função para Configurar os Cabeçalhos:

Crie uma função que retorna os cabeçalhos necessários para a requisição, incluindo o token de autorização.
~~~javascript
function configurarCabecalhos() {
    return {
        'Authorization': token,
        'Content-Type': 'application/json'
    };
}
~~~

3. Faça a Requisição à API:

Use a função fetch para fazer uma requisição GET à API dentro de uma função assíncrona. Verifique a resposta e trate os erros adequadamente.

~~~javascript
async function buscarProdutos() {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: configurarCabecalhos()
        });

        if (!response.ok) {
            throw new Error('Erro na resposta da API: ' + response.status);
        }

        const data = await response.json();
        return data.data; // Retorna os produtos
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        return null; // Em caso de erro
    }
}
~~~

4. Exiba os Produtos:

Crie uma função que aceita os produtos como parâmetro e cria elementos HTML para cada um deles, exibindo as informações na página.

~~~javascript
function exibirProdutos(produtos) {
    const produtosContainer = document.getElementById('produtos');
    produtosContainer.innerHTML = ''; // Limpa o container antes de adicionar novos produtos

    produtos.forEach(produto => {
        // Crie um elemento de produto
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');

        // Adicione a imagem do produto
        const imagem = document.createElement('img');
        imagem.src = produto.imagens[0]; // Usa a primeira imagem
        imagem.alt = produto.nome;
        imagem.classList.add('produto-imagem');

        // Adicione o nome e preço do produto
        const nome = document.createElement('h2');
        nome.textContent = produto.nome;

        const preco = document.createElement('p');
        preco.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

        // Adicione um botão de compra
        const botaoComprar = document.createElement('button');
        botaoComprar.textContent = 'Comprar';
        botaoComprar.onclick = () => {
            // Aqui você pode adicionar lógica para o botão de compra
            alert(`Você comprou: ${produto.nome}`);
        };

        // Adicione os elementos ao container do produto
        produtoDiv.appendChild(imagem);
        produtoDiv.appendChild(nome);
        produtoDiv.appendChild(preco);
        produtoDiv.appendChild(botaoComprar);
        produtosContainer.appendChild(produtoDiv);
    });
}

~~~

5. Função Principal para Executar o Fluxo:

Por fim, crie uma função principal que chama as funções de buscar produtos e exibir produtos.

~~~javascript
async function iniciarApp() {
    const produtos = await buscarProdutos();
    if (produtos) {
        exibirProdutos(produtos);
    } else {
        console.error('Nenhum produto encontrado.');
    }
}

// Chame a função principal ao carregar a página
window.onload = iniciarApp;

~~~

## 🚀 Hacker Edition: Aprimorando o Projeto da Loja Virtual
Se você está pronto para ir além e aprender mais sobre desenvolvimento web, aqui estão algumas sugestões e recursos para aprimorar o seu projeto de loja virtual. Essas adições não apenas melhorarão a experiência do usuário, mas também darão a você uma compreensão mais profunda do desenvolvimento JavaScript e do front-end.

1. Testes Unitários com Jest

- Adicione testes para suas funções usando Jest.

- Verifique se as funções de busca e manipulação de produtos funcionam corretamente.
- Use npm install --save-dev jest para instalar.
  
2. Tratamento de Erros Específicos

- Crie funções para exibir mensagens de erro específicas na interface.
- Utilize try-catch para lidar com erros durante chamadas à API.
- Exiba mensagens claras para o usuário, como "Erro ao carregar os produtos".
  
3. Loading Spinner

- Implemente um spinner de carregamento enquanto os dados estão sendo buscados.
- Crie um elemento HTML para o spinner e controle sua visibilidade com JavaScript.
- Use funções para mostrar e esconder o loading.
  
4. Design Responsivo

5. Utilize CSS Flexbox ou Grid para garantir que os produtos se ajustem bem em diferentes tamanhos de tela.
   
- Adicione media queries para otimizar a exibição em dispositivos móveis.

5. Implementação de um Carrinho de Compras

- Adicione funcionalidade para que os usuários possam adicionar produtos ao carrinho.
- Crie uma página de carrinho que exiba os itens selecionados e o total.
  
6. Persistência de Dados
- Utilize localStorage ou sessionStorage para manter os dados do carrinho entre as sessões do usuário.
  
7. Documentação
- Crie uma documentação clara para seu projeto, explicando como configurá-lo, executá-lo e como funcionam suas principais funcionalidades.


## 💻Començando a desenvolver: 

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

### 6. Enviar o Repositório para o Moodle
Essa é uma atividade avaliativa, você deve enviar o link do repositório com as questões respondidas para o Moodle, para que o instrutor possa revisar o seu trabalho. O link do GitHub facilita o acesso ao código e também permite que o instrutor veja todo o histórico de commits (versões anteriores do código), o que é útil para acompanhar seu progresso.



## **Boa sorte e bom código!** 🚀📘

