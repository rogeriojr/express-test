/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express'); // importando o express
const app = express(); // Iniciando o express

const porta = 4000; // Defina a porta na qual o servidor irá escutar

//Bom saber:
  // REQ => DADOS ENVIADOS PELO USUÁRIO
  // RES => DADOS ENVIADOS PELO USUÁRIO
app.get('/', function(req, res){ // Requisição feita na raiz
  res.send('<h1>Olá Mundo!</h1>' +
  '<h2>Bem vindo ao meu primeiro projeto Node.js com Express!</h2>' +
  '<h3>(rj-dev)</h3>');
});

// app.get('/blog', function(req, res){ // Requisição feita em um novo endpoint
//   res.send('<h1>Olá Mundo! Bem vindo ao meu blog</h1>');
// });

app.get('/blog/:artigo?', function(req, res){ // Requisição feita em um endpoint com params e tratativa de erro
  var artigo = req.params.artigo

  if (artigo) {
    res.send('<h2>Artigo:' + artigo + ' </h2>')
  } else {
    res.send('<h3>Artigo não encontrado!</h3>')
  }
});

app.get('/socialmidia', function(req, res){ // Requisição feita em um novo endpoint
  res.send('<h1>Olá Mundo! Bem vindo as minhas redes sociais</h1>');
});

app.get('/ola/:nome', function(req, res){ // Requisição feita em um endpoint com parametro
  // Utilizando template string para retornar o nome do usuario
  res.send(`<h1>Olá ${req.params.nome}! Bem vindo ao meu blog</h1>`);
});

app.get('/ola/:nome/:empresa', function(req, res){ // Requisição feita em um endpoint com parametro
  // Utilizando concatenação de  string para retornar o nome do usuario

  //guardando variaveis de nome e empresa
  var nome = req.params.nome
  var empresa = req.params.empresa

  res.send('<h1>Olá ' + nome  + ' do ' + empresa + ' </h1>');
});

//Endpoint utilizando parametros e querys
app.get('/canal/youtube',function(req, res){
  var canal = req.query["canal"]
  if (canal) {
    res.send(canal)
  } else {
    res.send("Nenhum canal fornecido!")
  }
})

// Tratamento de erro para rota padrão
app.use(function(req, res) {
  res.status(404).send('Página não encontrada');
});

app.listen(porta, function(erro) {
  if (erro) {
    console.log('Ocorreu um erro ao iniciar o servidor:', erro);
  } else {
    console.log('Servidor iniciado com sucesso na porta', porta);
  }
});
