

//Variaveis do ator/vaca
let playerWidth = 30;
let playerHeight = 30;
let xPlayer = 90;
let yPlayer = 366;
let colisao = false;
let pontos = 0;

//Mover o Player
function moverPlayer(){
  if(keyIsDown(UP_ARROW))
  {
    yPlayer = yPlayer - 3;
  }
  if(keyIsDown(DOWN_ARROW))
  {
    if(podeSeMover()){
    yPlayer = yPlayer + 3;
    }
  }
}


function desenharPlayer()
{
  image(imagemDoPlayer, xPlayer, yPlayer, playerWidth, playerHeight);
}

function verificarColisao(){
  for(let i = 0; i < imgCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], widthCar, heigthCar, xPlayer, yPlayer, 15)
    
    if(colisao){
      colisaoSom.play();
      colidiu();
      if(pontosMaiorDoQueZero()){
        pontos -= 1;
      }
    }
  }
}

function colidiu(){
  yPlayer = 366
}

function desenharPonto(){
  fill(color(189,83,107))
  textAlign(CENTER)
  textSize(25)
  text(pontos, width / 5, 25)
}

function marcaPontos(){
  if(yPlayer < 15) {
    pontos += 1;
    pontoSom.play();
    colidiu();
  }
}

function pontosMaiorDoQueZero(){
  return pontos > 0;
}

function podeSeMover(){
  return yPlayer < 364;
}
