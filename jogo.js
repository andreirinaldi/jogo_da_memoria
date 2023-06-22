const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startGame1 = document.getElementById("sba");
const startGame2 = document.getElementById("sbb");
const startGame3 = document.getElementById("sbc");
const startGame4 = document.getElementById("sbd");
const newGameButton = document.getElementById("new");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
const footer = document.querySelector(".footer");
const game = document.querySelector(".wrapper");
const logo = document.querySelector(".logo");
const fundo1 = document.querySelector(".fundo1");
const fundo2 = document.querySelector(".fundo2");
const fundo3 = document.querySelector(".fundo3");
const fundo4 = document.querySelector(".fundo4");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

//-------------------------------------------Items array-------------------------------------------
const items = []
  items['adventure'] = [
  { name: "finn", image: "img/adventure_time/finn00.png" },
  { name: "jake", image: "img/adventure_time/jake00.png" },
  { name: "jujuba", image: "img/adventure_time/jujuba00.png" },
  { name: "rei_gelado", image: "img/adventure_time/rei_gelado00.png" },
  { name: "bmo", image: "img/adventure_time/bmo00.png" },
  { name: "lich", image: "img/adventure_time/lich00.png" },
  { name: "caroco", image: "img/adventure_time/caroco00.png" },
  { name: "menta", image: "img/adventure_time/menta00.png" },
  { name: "marceline", image: "img/adventure_time/marceline00.png" },
  { name: "samambaia", image: "img/adventure_time/samambaia00.png" },
  { name: "lemongrab", image: "img/adventure_time/lemongrab00.png" },
  { name: "guardas_banana", image: "img/adventure_time/guardas_banana00.png" },
  { name: "princesa_de_fogo", image: "img/adventure_time/princesa_de_fogo00.png" },
  { name: "gunter", image: "img/adventure_time/gunter00.png" },
  { name: "hunson_abadeer", image: "img/adventure_time/hunson_abadeer00.png" },
  { name: "dona_tromba", image: "img/adventure_time/dona_tromba00.png" },
  { name: "lady_iris", image: "img/adventure_time/lady_iris00.png" },
  { name: "susana_forte", image: "img/adventure_time/susana_forte00.png" }
];
  items['pokemon'] = [
  { name: "abra", image: "img/pokemon/abra.png" },
  { name: "arcanine", image: "img/pokemon/arcanine.png" },
  { name: "bulbasaur", image: "img/pokemon/bulbasaur.png" },
  { name: "butterfree", image: "img/pokemon/butterfree.png" },
  { name: "charmander", image: "img/pokemon/charmander.png" },
  { name: "cubone", image: "img/pokemon/cubone.png" },
  { name: "diglett", image: "img/pokemon/diglett.png" },
  { name: "gengar", image: "img/pokemon/gengar.png" },
  { name: "jigglypuff", image: "img/pokemon/jigglypuff.png" },
  { name: "magneton", image: "img/pokemon/magneton.png" },
  { name: "meowth", image: "img/pokemon/meowth.png" },
  { name: "mew", image: "img/pokemon/mew.png" },
  { name: "mewtwo", image: "img/pokemon/mewtwo.png" },
  { name: "ninetales", image: "img/pokemon/ninetales.png" },
  { name: "pikachu", image: "img/pokemon/pikachu.png" },
  { name: "psyduck", image: "img/pokemon/psyduck.png" },
  { name: "ratata", image: "img/pokemon/ratata.png" },
  { name: "squirtle", image: "img/pokemon/squirtle.png" }
];
  items['lol'] = [
  { name: "aatrox", image: "img/lol/aatrox.png" },
  { name: "ahri", image: "img/lol/ahri.png" },
  { name: "azir", image: "img/lol/azir.png" },
  { name: "caitlyn", image: "img/lol/caitlyn.png" },
  { name: "darius", image: "img/lol/darius.png" },
  { name: "ezreal", image: "img/lol/ezreal.png" },
  { name: "jinx", image: "img/lol/jinx.png" },
  { name: "lissandra", image: "img/lol/lissandra.png" },
  { name: "nasus", image: "img/lol/nasus.png" },
  { name: "nautilus", image: "img/lol/nautilus.png" },
  { name: "ornn", image: "img/lol/ornn.png" },
  { name: "reksai", image: "img/lol/RekSai.png" },
  { name: "senna", image: "img/lol/senna.png" },
  { name: "teemo", image: "img/lol/teemo.png" },
  { name: "master_yi", image: "img/lol/master_yi.png" },
  { name: "thresh", image: "img/lol/thresh.png" },
  { name: "volibear", image: "img/lol/volibear.png" },
  { name: "zed", image: "img/lol/zed.png" }
];
  items['marvel'] = [
  { name: "capitao_america", image: "img/marvel/capitao_america.png" },
  { name: "captan_marvel", image: "img/marvel/captan_marvel.png" },
  { name: "doutor_estranho", image: "img/marvel/doutor_estranho.png" },
  { name: "falcao", image: "img/marvel/falcao.png" },
  { name: "feiticeira_escarlate", image: "img/marvel/feiticeira_escarlate.png" },
  { name: "gaviao_arqueiro", image: "img/marvel/gaviao_arqueiro.png" },
  { name: "homem_aranha", image: "img/marvel/homem_aranha.png" },
  { name: "homem_formiga", image: "img/marvel/homem_formiga.png" },
  { name: "hulk", image: "img/marvel/hulk.png" },
  { name: "iron_man", image: "img/marvel/iron_man.png" },
  { name: "loki", image: "img/marvel/loki.png" },
  { name: "nick_fury", image: "img/marvel/nick_fury.png" },
  { name: "pantera_negra", image: "img/marvel/pantera_negra.png" },
  { name: "thanos", image: "img/marvel/thanos.png" },
  { name: "thor", image: "img/marvel/thor.png" },
  { name: "ultron", image: "img/marvel/ultron.png" },
  { name: "visao", image: "img/marvel/visao.png" },
  { name: "viuva_negra", image: "img/marvel/viuva_negra.png" }
];

//-------------------------------------------Setando valores-------------------------------------------
//Initial Time
let seconds = 0,
  minutes = 0;
//Initial moves and win count
let movesCount = 0,
  winCount = 0;
//For timer
const timeGenerator = () => {
  seconds += 1;
  //minutes logic
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  //formatar tempo antes de exibir
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `<span>Tempo: </span>${minutesValue}:${secondsValue}`;
};
//Calcular movimentos
const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>Movimentos:</span>${movesCount}`;
};
//para o tabuleiro não aparecer na tela inicial
game.classList.add("hide");

//-------------------------------------------GAME 01-------------------------------------------
//Escolhendo objetos aleatórios da matriz de itens
const generateRandom = (size = tamanho) => {
  //Array temporário
  let tempArray = [...items['adventure']];
  //Iniciar cardValues array
  let cardValues = [];
  //Tamanho deve ser duplo (matriz 4*4)/2 pois existiriam pares de objetos
  size = (size * size) / 2;
  //Seleção de random object
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    //Uma vez selecionado, remova o objeto da matriz temporária
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
};
//Tamanho do tabuleiro (4x4) ou (6x6) dependendo da tela
let tamanho = 0;
$(window).on('load', function() {
  if (window.screen.width < 800) { 
    tamanho = 4
  } else {
    tamanho = 6
  }
});
const matrixGenerator = (cardValues, size = tamanho) => {
  gameContainer.innerHTML = "";
  cardValues = [...cardValues, ...cardValues];
  //Embaralhamento simples
  cardValues.sort(() => Math.random() - 0.5);
  for (let i = 0; i < size * size; i++) {
    /*
      Criar Cartões
      antes => frente (contém imgaem de fundo)
      depois => verso (contém a imagem do personagem/objeto);
      data-card-values ​​é um atributo personalizado que armazena os nomes dos cartões para correspondência posterior
    */
    gameContainer.innerHTML += `
     <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="card-before"><img src="img/interrogacao.png"/></div>
        <div class="card-after">
        <img src="${cardValues[i].image}" class="image"/></div>
     </div>
     `;
  }
  //Grid
  gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;
  //Cards
  cards = document.querySelectorAll(".card-container");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      //Se o cartão selecionado ainda não for correspondido, apenas execute (ou seja, o cartão já correspondido quando clicado será ignorado)
      if (!card.classList.contains("matched")) {
        //Virar o cartão clicado
        card.classList.add("flipped");
        //if (!firstCard) já que firstCard é inicialmente falso
        if (!firstCard) {
          //Então o cartão atual se tornará o primeiroCartão
          firstCard = card;
          //o valor atual das cartas se torna firstCardValue
          firstCardValue = card.getAttribute("data-card-value");
        } else {
          //movimentos de incremento quandoe o usuário selecionar o segundo cartão
          movesCounter();
          //secondCard e value
          secondCard = card;
          let secondCardValue = card.getAttribute("data-card-value");
          if (firstCardValue == secondCardValue) {
            //Se ambos os cartões corresponderem, adicione a classe correspondente para que esses cartões sejam ignorados na próxima vez
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            //Defina firstCard como falso, pois o próximo cartão seria o primeiro agora
            firstCard = false;
            //Incremento de winCount conforme o usuário encontrou uma correspondência correta
            winCount += 1;
            //Condições para vitória / tela de vitória
            if (winCount == Math.floor(cardValues.length / 2)) {
              result.innerHTML = `<h4>Movimentos: ${movesCount}</h4>`;
              fundo1.style.display = 'none';
              fundo2.style.display = 'none';
              fundo3.style.display = 'none';
              fundo4.style.display = 'none';
              return game.style.display = 'none';
            }
          } else {
            //Se as cartas não combinarem
            //vira as cartas de volta ao normal
            let [tempFirst, tempSecond] = [firstCard, secondCard];
            firstCard = false;
            secondCard = false;
            let delay = setTimeout(() => {
              tempFirst.classList.remove("flipped");
              tempSecond.classList.remove("flipped");
            }, 900);
          }
        }
      }
    });
  });
};
startGame1.addEventListener("click", () => {
  movesCount = 0;
  seconds = 0;
  minutes = 0;
  //visibilidade de controles e botões
  controls.classList.add("hide");
  stopButton.classList.remove("hide");
  startGame1.classList.add("hide");
  footer.classList.add("hide");
  logo.classList.add("hide");
  fundo1.classList.remove("hide");
  result.classList.remove("hide");
  game.classList.remove("hide");
  newGameButton.classList.remove("hide");
  //Start timer
  interval = setInterval(timeGenerator, 1000);
  //Initial moves
  moves.innerHTML = `<span>Movimentos:</span> ${movesCount}`;
  initializer();
});

//-------------------------------------------GAME 02-------------------------------------------
const generateRandom2 = (size = tamanho) => {
  let tempArray2 = [...items['pokemon']];
  let cardValues2 = [];
  size = (size * size) / 2;
  for (let i = 0; i < size; i++) {
    const randomIndex2 = Math.floor(Math.random() * tempArray2.length);
    cardValues2.push(tempArray2[randomIndex2]);
    tempArray2.splice(randomIndex2, 1);
  }
  return cardValues2;
};
startGame2.addEventListener("click", () => {
  movesCount = 0;
  seconds = 0;
  minutes = 0;
  controls.classList.add("hide");
  stopButton.classList.remove("hide");
  startGame2.classList.add("hide");
  footer.classList.add("hide");
  logo.classList.add("hide");
  fundo2.classList.remove("hide");
  result.classList.remove("hide");
  game.classList.remove("hide");
  newGameButton.classList.remove("hide");
  interval = setInterval(timeGenerator, 1000);
  moves.innerHTML = `<span>Movimentos:</span> ${movesCount}`;
  initializer2();
});

//-------------------------------------------GAME 03-------------------------------------------
const generateRandom3 = (size = tamanho) => {
  let tempArray3 = [...items['lol']];
  let cardValues3 = [];
  size = (size * size) / 2;
  for (let i = 0; i < size; i++) {
    const randomIndex3 = Math.floor(Math.random() * tempArray3.length);
    cardValues3.push(tempArray3[randomIndex3]);
    tempArray3.splice(randomIndex3, 1);
  }
  return cardValues3;
};
startGame3.addEventListener("click", () => {
  movesCount = 0;
  seconds = 0;
  minutes = 0;
  controls.classList.add("hide");
  stopButton.classList.remove("hide");
  startGame3.classList.add("hide");
  footer.classList.add("hide");
  logo.classList.add("hide");
  fundo3.classList.remove("hide");
  result.classList.remove("hide");
  game.classList.remove("hide");
  newGameButton.classList.remove("hide");
  interval = setInterval(timeGenerator, 1000);
  moves.innerHTML = `<span>Movimentos:</span> ${movesCount}`;
  initializer3();
});

//-------------------------------------------GAME 04-------------------------------------------
const generateRandom4 = (size = tamanho) => {
  let tempArray4 = [...items['marvel']];
  let cardValues4 = [];
  size = (size * size) / 2;
  for (let i = 0; i < size; i++) {
    const randomIndex4 = Math.floor(Math.random() * tempArray4.length);
    cardValues4.push(tempArray4[randomIndex4]);
    tempArray4.splice(randomIndex4, 1);
  }
  return cardValues4;
};
startGame4.addEventListener("click", () => {
  movesCount = 0;
  seconds = 0;
  minutes = 0;
  controls.classList.add("hide");
  stopButton.classList.remove("hide");
  startGame4.classList.add("hide");
  footer.classList.add("hide");
  logo.classList.add("hide");
  fundo4.classList.remove("hide");
  result.classList.remove("hide");
  game.classList.remove("hide");
  newGameButton.classList.remove("hide");
  interval = setInterval(timeGenerator, 1000);
  moves.innerHTML = `<span>Movimentos:</span> ${movesCount}`;
  initializer4();
});

//-------------------------------------------Stop Game-------------------------------------------
stopButton.addEventListener(
  "click",
  (stopGame = () => {
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startGame1.classList.remove("hide");
    startGame2.classList.remove("hide");
    startGame3.classList.remove("hide");
    startGame4.classList.remove("hide");
    footer.classList.remove("hide");
    logo.classList.remove("hide");
    fundo1.classList.add("hide");
    fundo2.classList.add("hide");
    fundo3.classList.add("hide");
    fundo4.classList.add("hide");
    result.classList.add("hide");
    game.classList.add("hide");
    newGameButton.classList.add("hide");
    clearInterval(interval);
  })
);

//---------------------Inicializar e chamar a função---------------------
const initializer = () => {
  result.innerText = "";
  winCount = 0;
  let cardValues = generateRandom();
  matrixGenerator(cardValues);
};
const initializer2 = () => {
  result.innerText = "";
  winCount = 0;
  let cardValues2 = generateRandom2();
  matrixGenerator(cardValues2);
};
const initializer3 = () => {
  result.innerText = "";
  winCount = 0;
  let cardValues3 = generateRandom3();
  matrixGenerator(cardValues3);
};
const initializer4 = () => {
  result.innerText = "";
  winCount = 0;
  let cardValues4 = generateRandom4();
  matrixGenerator(cardValues4);
};