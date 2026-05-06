/**
 * 
 * @author Gustavo
 */

const prompt = require('prompt-sync')()
const color = require('colors')

inventario = ["espada velha," ]
jogoRodando = true
jogoRodando = false;
jogador = []


console.clear()
let nome = prompt("Digite seu nome: ");

console.clear()
console.log(`Bem vindo ${nome}, escolha uma das opções abaixo`)
console.log("1. Jogar")
console.log("2. Inventário")
console.log("3. Sair")
jogador = Number(prompt("Digite a opção desejada: "))

switch (jogador) {
  case 1:
    console.log("Jogo iniciado")
    console.log("dormi e acordei em um quarto nobre de um castelo sozinho sem nada apenas com uma espada velha no inventario")
    console.log("")
    console.log("O que faço agora?")
    console.log("1. sair do quarto?")
    console.log("2. explorar o quarto?")
    console.log("3. voltar a dormir?")
    console.log("4. Ver inventário") // não está totalmente funcional
    jogador = Number(prompt("Digite a opção desejada: "))
      switch (jogador) {
        case 1:
          console.clear()
          console.log("voce sai do quarto apenas com uma espada velha")
          break;
        case 2:
          console.clear()
          console.log("voce explora e acha um baú")
          console.log("Você encontrou uma armadura")
          inventario += " armadura simples"
          console.log(`Itens do seu inventário: ${inventario}`) // tirar futuramente
          break;
        case 3:
          console.clear()
          console.log("voce volta dormir e nunca mais acorda o jogo acaba")
          return
        case 4:
          console.clear()
          console.log(`Itens do seu inventário: ${inventario}`)
          console.log("")
          console.log("1. Voltar") // não volta as opções do switch case
          console.log("2. Sair")
          jogador = Number(prompt("Digite a opção desejada: "))
            switch (jogador) {
              case 1:
                console.log("Voltando")
                return
              case 2:
                console.log("Te espero na próxima")
                return
              default:
                console.log("Opção inválida, digite novamente")
                return; // não retorna
            }
        default:
          console.log("Opção inválida, digite novamente")
          return
      
       /** default: // não funciona
        console.log("Opção inválida, digite novamente")
        return */
      
    }  




    break;
  case 2:
    console.log(`Itens do seu inventário: ${inventario}`)
    break;
  case 3:
    console.log("Te espero na próxima")
    return
    default:
      console.log("Opção inválida, digite novamente")
    break;
}