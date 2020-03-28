const express = require('express') // importando o módulo express
const routes = require('./routes')
const cors = require('cors');

const app = express() // variavel que armazena a minha aplicação( a instância), ela que armazena as rotas;

app.use(cors())
app.use(express.json()) // tranforma o json em algo entendivel pela aplicação
app.use(routes)

app.listen(3333) //ouvir a porta