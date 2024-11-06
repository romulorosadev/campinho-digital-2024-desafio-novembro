//1- Criar variavel para armazenar/manipular o endpoint/url da api
const apiUrl = 'https://ecom-back-strapi.onrender.com/api/products';

//2 - Criar variavel para armazenar/manipular o toke/chave de acesso para api
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzMwOTI2OTYzLCJleHAiOjE3MzM1MTg5NjN9.5oZdqaREzoAKCTKiXINGqQj32g50S0KoXmSKAf5FJhI';

//3 - Criar função que retorna os cabeçalhos pra requisição
function configurarCabecalhos() {
  return {
    'Authorization': token,
    'Content-Type': 'application/json'
  };
}

//4- Criar Função Fetch para Requisição a API
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

//5- Criar função que recebe os produtos por parâmetros e cria elementos HTML pra cada um deles
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
