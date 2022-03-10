// Toda regra relacionada a produtos fica nesse arquivo
//array simboliza o BD

let produtos = [
    { nome: 'Arroz', preco: 19.9 },
    { nome: 'Feijão', preco: 7 },
    { nome: 'Farinha', preco: 5.5 },
    { nome: 'Batata', preco: 6.49 }
];

exports.listarProdutos = function (requisicao, resposta) {
    resposta.send(produtos);
}

exports.adicionarProduto = function(requisicao, resposta){
    const novoProduto = requisicao.query;
    if(!novoProduto.nome == undefined || !novoProduto.preco == undefined){
        resposta,send({mensagem: '[ERRO]: Informar nome do preço!'})
    } else {
        produtos.push(novoProduto)
        resposta.send({menssagem : '[Sucesso] : produto adcionado!'})
    }
}
