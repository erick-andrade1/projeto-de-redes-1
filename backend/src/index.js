//Código fonte do servidor:

//Aqui chamamos a biblioteca express, responsável por subir o servidor:
const express = require('express');

//Cors serve para manter o controle de acesso a rota, no nosso caso permitimos tudo:
const cors = require("cors");

//Criamos a constante app, que será responsável pelo uso do express
const app = express();
const PORT = 3001;

//Acesso ao controle do origins
app.use(cors({'Access-Control-Allow-Origin': '*'}));

//Import de rotas:
const Home = require('./router/home');

app.use('/Home', Home);

//Subindo o servidor através do método listen:
app.listen(PORT, console.log(`Server online in PORT = ${PORT}`))