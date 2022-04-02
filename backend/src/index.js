const express = require('express');
const cors = require("cors");
const bodyPasrser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(cors({'Access-Control-Allow-Origin': '*'}));
app.use(bodyPasrser.json());

//Import de rotas:
const Home = require('./router/home');

app.use('/Home', Home);

app.listen(PORT, console.log(`Server online in PORT = ${PORT}`))