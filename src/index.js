const express = require("express")

const app = express()

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"]

let indiceJogador = 0

app.get("/", (request, response) => {

    response.send(`É a vez do jogador: ${jogadores[indiceJogador]}`)
    indiceJogador += 1
    if (indiceJogador > jogadores.length - 1) {
        indiceJogador = 0
    }
})

app.listen(3000)

// como o chatgpt resolveu:
// const express = require("express");
// const app = express();
// const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
// let indiceJogador = 0;

// app.get("/", (request, response) => {
//   const jogador = jogadores[indiceJogador];
//   response.send(`É a vez do jogador: ${jogador}`);
//   // Atualiza o índice do jogador para o próximo na lista
//   indiceJogador = (indiceJogador + 1) % jogadores.length; ********
// });

// app.listen(3000);
