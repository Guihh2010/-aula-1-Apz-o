function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("50");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if(idade >= 10) {
    if(idade >= 25) {
      return "Começar a guardar dinheiro para comprar um Apzão";
    } else {
      return "tá na hora de comprar um Apzão turbo";
    }
  } else {
    return "Dar role com o Apzão";
  }
}

