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
