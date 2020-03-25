
const express = require('express');
const cors  =  require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//inicia o servidor
app.listen(3333);


//const bodyParser = require('body-parser');

//CONFIGURA O BODY PARSER PARA REQUISIÇÕES 
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
