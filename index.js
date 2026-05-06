/**
 * 
 * @author Gustavo
 */

const prompt = require('prompt-sync')()
const color = require('colors')

let inventario = []
let medo = 0
let energiaLigada = false
let portaAberta = false
let locais = ["gaveta", "estante", "armario"]
let localChave = locais[Math.floor(Math.random() * locais.length)]
let luzLigada = true
let evento = Math.random()
let localAtual = "hall"
let codigoPortao = "geradoAleatorio"
let pistas = ["frase1", "frase2", "frase3"]
let zonaInicial = ["hall", "sala", "cozinha"]
let zonaMedia = ["corredor", "quarto", "lavabo"]
let zonaAlta = ["biblioteca", "salaTrabalho"]
let pistas = ["pista1", "pista2", "pista3", "pista4", "pista5"]
let jogoRodando = true
let opcao = prompt("Escolha uma opção: ")

// =========================================================================================

casa = {
  hall: ["sala", "cozinha", "corredor"],
  sala: [],
  cozinha: [],
  corredor: ["quarto", "biblioteca", "sala de trabalho"]
}

while (jogoRodando) {

  console.log("=== CASA DO TERROR ===")
  console.log("1 - Explorar cômodo")
  console.log("2 - Ir para outro cômodo")
  console.log("3 - Procurar pista")
  console.log("4 - Ver inventário")
  console.log("5 - Ver status")
  console.log("0 - Sair")


}