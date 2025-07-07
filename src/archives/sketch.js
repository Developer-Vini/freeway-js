
function setup() {
  createCanvas(500, 400);
  trihaSom.loop();
}

function draw() {
  background(imagemDaEstrada);
  desenharPlayer();
  desenharCarro();
  moverCarro();
  moverPlayer();
  geracaoCarros();
  verificarColisao();
  desenharPonto();
  marcaPontos();
}
