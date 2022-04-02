const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors({}));

//Import de rotas:
const Home = require('./router/home');

app.use('/Home', Home);

app.listen(PORT, console.log(`Server online in PORT = ${PORT}`))