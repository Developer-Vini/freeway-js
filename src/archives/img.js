//Imagens
let imagemDaEstrada;
let imagemDoPlayer;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;
let colisaoSom;
let pontoSom;
let trihaSom;

//Carregar as imagens
function preload(){
  colisaoSom = loadSound("src/sounds/colidiu.mp3");
  pontoSom = loadSound("src/sounds/pontos.wav");
  trihaSom = loadSound("src/sounds/trilha.mp3");
  imagemDaEstrada = loadImage("src/img/estrada.png");
  imagemDoPlayer = loadImage("src/img/ator-1.png");
  imagemDoCarro = loadImage("src/img/carro-1.png");
  imagemDoCarro2 = loadImage("src/img/carro-2.png");
  imagemDoCarro3 = loadImage("src/img/carro-3.png");
  imgCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro, imagemDoCarro2, imagemDoCarro3]
}