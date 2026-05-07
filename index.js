/**
 *
 * @author Gustavo
 */

const prompt = require("prompt-sync")();
const colors = require("colors");

let inventario = ["Espada velha"];
let jogoRodando = true;
let jogador;

console.clear();

let nome = prompt("Digite seu nome: ");

do {

  console.clear();

  console.log(`Bem vindo ${nome}, escolha uma das opções abaixo`.green);
  console.log("1. Jogar");
  console.log("2. Inventário");
  console.log("3. Sair");

  jogador = Number(prompt("Digite a opção desejada: "));

  switch (jogador) {

    case 1:

      console.clear();

      console.log("Jogo iniciado...");
      console.log("");
      console.log("Você dormiu e acordou em um quarto nobre de um castelo.");
      console.log("Você está sozinho e possui apenas uma espada velha.");
      console.log("");

      let jogando = true;

      do {

        console.log("");
        console.log("O que deseja fazer?");
        console.log("1. Sair do quarto");
        console.log("2. Explorar o quarto");
        console.log("3. Voltar a dormir");
        console.log("4. Ver inventário");
        console.log("5. Voltar ao menu principal");

        jogador = Number(prompt("Digite a opção desejada: "));

        switch (jogador) {

          case 1:

            console.clear();

            console.log("Você sai do quarto apenas com sua espada velha...");
            console.log("Um corredor escuro aparece diante de você.");

            // evento aleatório
            let evento = Math.floor(Math.random() * 3);

            if (evento == 0) {
              console.log("Um esqueleto apareceu!");

              console.log("")
              console.log("1. Lutar")
              console.log("2. Fugir")
              console.log("")
              jogador = Number(prompt("Digite a opção desejada: "))

              switch (jogador) {
                case 1:
                  
                  console.clear()
                
                  console.log("Você tentou lutar com o esqueleto e sua espada quebrou")
                  console.log("GAME OVER")

                  jogando = false

                break
                  
                case 2: 
                  console.clear()
                  console.log("Você fugiu do esqueleto")
                  console.log("")

                break;
              }

            } else if (evento == 1) {
              console.log("Você encontrou algumas moedas de ouro!");
              inventario.push("Moedas de ouro");
          

              console.log("Você encontrou algumas moedas de ouro!");
              inventario.push("Moedas de ouro");
            } else {
              console.log("O corredor está vazio...");
            }

            console.log("1. explorar")
            console.log("2. gritar por ajuda")
            console.log("3. olhar inventario")

            break;

          case 2:

            console.clear();

            console.log("Você explora o quarto...");
            console.log("Você encontrou um baú!");

            if (!inventario.includes("Armadura simples")) {

              console.log("Dentro do baú havia uma armadura simples!");

              inventario.push("Armadura simples");

            } else {

              console.log("O baú já está vazio.");

            }

            console.log("1. sair do quarto")
            console.log("2. guardar bau")
            console.log("3. voltar a dormir")


            break;

          case 3:

            console.clear();

            console.log("Você voltou a dormir...");
            console.log("E nunca mais acordou.");
            console.log("GAME OVER");

            jogando = false;

            break;

          case 4:

            console.clear();

            console.log("=== INVENTÁRIO ===");

            for (let i = 0; i < inventario.length; i++) {
              console.log(`- ${inventario[i]}`);
            }

            prompt("\nPressione ENTER para voltar...");

            break;

          case 5:

            console.log("Voltando ao menu principal...");
            jogando = false;

            break;

          default:

            console.log("Opção inválida!");

            break;
        }

      } while (jogando);

      break;

    case 2:

      console.clear();

      console.log("=== INVENTÁRIO ===");

      for (let i = 0; i < inventario.length; i++) {
        console.log(`- ${inventario[i]}`);
      }

      prompt("\nPressione ENTER para voltar...");

      break;

    case 3:

      let confirmar = prompt("Deseja realmente sair? (s/n): ");

      if (confirmar.toLowerCase() == "s") {

        console.log("Te espero na próxima aventura!");

        jogoRodando = false;
      }

      break;

    default:

      console.log("Opção inválida!");
      prompt("Pressione ENTER para continuar...");

      break;
  }

} while (jogoRodando);