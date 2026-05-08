const prompt = require("prompt-sync")();
require("colors");

let inventario = ["Espada velha"];
let jogoRodando = true;

let bauQuartoAberto = false;

function resetarJogo() {
  inventario = ["Espada velha"];
  bauQuartoAberto = false;
}

// =========================================================================================

console.clear();

let nome = prompt("Digite seu nome: ");

// 🔹 FUNÇÃO DO JOGO (ISOLADA)
function jogar() {
  console.clear();

  console.log("Jogo iniciado...\n");
  console.log("Você dormiu e acordou em um quarto nobre de um castelo.");
  console.log("Você está sozinho e possui apenas uma espada velha.\n");

  let jogando = true;

  while (jogando) {
    console.log("\nO que deseja fazer?");
    console.log("1. Sair do quarto");
    console.log("2. Explorar o quarto");
    console.log("3. Voltar a dormir");
    console.log("4. Ver inventário");
    console.log("5. Voltar ao menu principal");

    let jogador = Number(prompt("Digite a opção desejada: "));

    switch (jogador) {
      case 1:
        console.clear();

        console.log("Você sai do quarto apenas com sua espada velha...");
        console.log("Um corredor escuro aparece diante de você.\n");

        let evento = Math.floor(Math.random() * 3);

        if (evento === 0) {
          console.log("Um esqueleto apareceu!\n");
          console.log("1. Lutar");
          console.log("2. Fugir");

          let escolha = Number(prompt("Escolha: "));

          switch (escolha) {
            case 1:
              console.clear();
              console.log("Você tentou lutar e sua espada quebrou.");
              console.log("")
              console.log("GAME OVER".red);
              console.log("")

              prompt("Precione [Enter] para voltar ao menu".bgWhite)
              inventario = ["Espada velha"];
              jogando = false
              break;

            case 2:
              console.clear();
              console.log("Você fugiu do esqueleto.");
              break;

            default:
              console.clear()
              console.log("Opção inválida.");
              break;
          }

        } else if (evento === 1) {
          console.log("Você encontrou algumas moedas de ouro!");
          inventario.push("Moedas de ouro");

        } else {
          console.log("O corredor está vazio...");
        }

        // 🔹 MENU SECUNDÁRIO CONTROLADO
        let submenu = true;

        while (submenu && jogando) {
          console.log("\nO que deseja fazer agora?");
          console.log("1. Gritar por ajuda");
          console.log("2. Explorar")
          console.log("3. Ver inventário");

          let escolha2 = Number(prompt("Escolha: "));

          switch (escolha2) {
            case 1:
              console.clear()
              console.log("Você gritou por ajuda");
              console.log("Você vê algumas pessoas vindo em sua direção")
              console.log("Ao se aproximar você percebe que são guardas")
              console.log("Você tenta correr mas na sua frente você vê mais alguns guardas vindo em sua direção")
              console.log("Você fica cercado pelos guardas")
              console.log("")
              console.log("GAME OVER".red)
              console.log("")
                  
              prompt("Precione [Enter] para voltar".bgWhite)
              inventario = ["Espada velha"];
              jogando = false
              break;

            case 2:
              console.clear()
              console.log("Você continua andando e encontra um baú pelos corredores do castelo");
              console.log("")
              console.log("1. Abrir baú")
              console.log("2. Ignorar baú")
              let escolha3 = Number(prompt("Escolha: "))

              switch (escolha3) {
                case 1:
                  console.clear()
                  console.log("Ao abrir o baú você encontra uma chave, espada de ferro e um Lampião")
                  console.log("Você pega os itens e continua sua jornada")
                  console.log("Ao continuar a explorar você encontra um outro fugitivo tentando lutar com alguns guardas")
                
                  
                  inventario.push("Chave", "Espada de ferro", "Lampião")
                  
                  console.log("")
                  console.log("1. Ajudar ele")
                  console.log("2. Ignorar")

                  let escolha4 = Number(prompt("Escolha: "))

                  switch (escolha4) {
                    case 1:
                      console.clear("")
                      console.log("Você pega sua espada de ferro e ajuda o fugitivo a lutar com os guardas")
                      console.log("Vocês derrotam todos os guardas e se cumprimentam")
                      console.log("O fugitivo começa a te seguir e vocês encontram uma porta trancada")

                      console.log("")
                      console.log("1. tentar abrir")
                      console.log("2. Continuar andando")
                      let escolha5 = Number(prompt("Escolha: "))

                        switch (escolha5) {
                          case 1:
                            console.clear("")
                            console.log("Você tenta abrir a porta mas está trancada")
                            console.log("Você lembra que pegou uma chave no báu")
                            console.log("Você tira a chave do seu bolso e tenta destrancar a porta")
                            console.log("")
                            console.log("PORTA DESTRANCADA".yellow)
                            console.log("")
                            console.log("Ao abrir a porta vocês vêem uma floresta")
                            console.log("Vocês se olham e começam a correr até a floresta")
                            console.log("")
                            console.log("Parabéns, você terminou o jogo".green)
                            console.log("")

                              prompt("Precione [Enter] para voltar ao menu".bgWhite)
                              inventario = ["Espada velha"];
                              jogando = false
                              break;

                             case 2:
                              console.clear("")
                              console.log("Vocês continuaram andando sem tentar abrir a porta")
                              console.log("Vocês chegam ao estábulo com alguns cavalos")
                              console.log("Vocês montam nos cavalos e tentam fugir, mas alguns cavaleiros viram vocês roubando os cavalos e vão atrás de vocês")
                              console.log("Vocês entram na floresta para tentar despistar os cavaleiros, mas ao entrar na floresta vocês entram em uma caverna sem saída")
                              console.log("")
                              console.log("GAME OVER".red)
                              console.log("")

                              prompt("Precione [Enter] para voltar ao menu".bgWhite)
                              inventario = ["Espada velha"];
                              jogando = false
                            break;

                            default:
                            console.clear()
                            console.log("Opção inválida")
                            break;
                        } 
                        break;

                        case 2:
                          console.clear("")
                          console.log("Você viu ele morrer na sua frente")
                          console.log("Logo após a morte dele os guardas viram você e começaram a te perseguir")
                          console.log("Você correu até chegar em um beco sem saída")
                          console.log("Você tentou lutar mas eram muitos guardas")
                          console.log("")
                          console.log("GAME OVER".red)
                          console.log("")

                          prompt("Precione [Enter] para voltar ao menu".bgWhite)
                          inventario = ["Espada velha"];
                          jogando = false
                          break;
                            
                      
                          default:
                          console.clear()
                          console.log("Opção inválida")
                          break;
                       
                  }

                  break;
              
                case 2: 
                  console.clear()
                  console.log("Você ignora o baú e continua andando")
                  console.log("Cada vez que você vai andando vai ficando cada vez mais escuro")
                  console.log("Você não enxerga nada, até encontrar com alguns globins")
                  console.log("Você não consegue fugir")
                  console.log("")
                  console.log("GAME OVER".red)

                  prompt("Precione [Enter] para voltar ao menu".bgWhite)
                  inventario = ["Espada velha"];
                  jogando = false
                  break;

                default:
                  console.clear()
                  console.log("Opção inválida.");
                break;
              }
              submenu = false;
              break;

            case 3:
              console.log("\n=== INVENTÁRIO ===");
              inventario.forEach(item => console.log("- " + item));
              prompt("\nPressione ENTER...");
              break;



            default:
              console.clear()
              console.log("Opção inválida.");
              break;
          }
        }

        break;

      case 2:
        console.clear();

        console.log("Você explora o quarto...");
        console.log("Você encontrou um baú!");

        if (!bauQuartoAberto) {
          console.log("Dentro do baú havia uma armadura simples!");
          inventario.push("Armadura simples");
          bauQuartoAberto = true
        } else {
          console.log("O baú já está vazio.");
        }

        prompt("\nPressione ENTER...".bgWhite);
        break;

      case 3:
        console.clear();

        console.log("Você voltou a dormir...");
        console.log("E nunca mais acordou.");
        console.log("")
        console.log("GAME OVER".red);

                prompt("\nPressione ENTER para voltar ao Menu".bgWhite);

        jogando = false;
        break;

      case 4:
        console.clear();

        console.log("=== INVENTÁRIO ===");
        inventario.forEach(item => console.log("- " + item));

        prompt("\nPressione ENTER...");
        break;

      case 5:
        console.log("Voltando ao menu principal...");
        jogando = false;
        break;

      default:
        console.clear()
        console.log("Opção inválida!");
        break;
    }
  }
}

// 🔹 MENU PRINCIPAL
do {
  console.clear();

  console.log(`░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░       ░▒▓██████▓▒░ ░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓████████▓▒░▒▓█▓▒░      ░▒▓████████▓▒░ 
   ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░         ░▒▓█▓▒░   ░▒▓█▓▒░      ░▒▓█▓▒░        
   ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░         ░▒▓█▓▒░   ░▒▓█▓▒░      ░▒▓█▓▒░        
   ░▒▓█▓▒░   ░▒▓████████▓▒░▒▓██████▓▒░        ░▒▓█▓▒░      ░▒▓████████▓▒░░▒▓██████▓▒░   ░▒▓█▓▒░   ░▒▓█▓▒░      ░▒▓██████▓▒░   
   ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░  ░▒▓█▓▒░   ░▒▓█▓▒░      ░▒▓█▓▒░        
   ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░  ░▒▓█▓▒░   ░▒▓█▓▒░      ░▒▓█▓▒░        
   ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░       ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░   ░▒▓█▓▒░   ░▒▓████████▓▒░▒▓████████▓▒░ 
                                                                                                                              
                                                                                                                              `.green);
  console.log(`Bem vindo ${nome}, escolha uma das opções abaixo`.green);
  console.log("1. Jogar");
  console.log("2. Inventário");
  console.log("3. Sair");

  let opcao = Number(prompt("Digite a opção desejada: "));

  switch (opcao) {
    case 1:
      resetarJogo();
      jogar(); //  agora isolado corretamente
      break;

    case 2:
      console.clear();

      console.log("=== INVENTÁRIO ===");
      inventario.forEach(item => console.log("- " + item));

      prompt("\nPressione ENTER...".bgWhite);
      break;

    case 3:
      let confirmar = prompt("Deseja realmente sair? (s/n): ".bgWhite);

      if (confirmar.toLowerCase() === "s") {
        console.log("Te espero na próxima aventura!");
        jogoRodando = false;
      }

      break;

    default:
      console.log("Opção inválida!");
      prompt("Pressione ENTER...".bgWhite);
      break;
  }

} while (jogoRodando);