let widthCar = 50;
let heigthCar = 40;

let yCarros = [40, 96, 150, 210, 270, 318];
let velocidades = [3, 3.5, 4, 5.2, 4.5, 5.8];
let xCarros = [600, 600, 600, 600, 600, 600];

//A movimentação do carro
function moverCarro() {
  for (let i = 0; i < imgCarros.length; i++) {
    xCarros[i] = xCarros[i] - velocidades[i];
  }
}

//Desenhar os carrinhos, como a propria função diz...
function desenharCarro() {
  for (let i = 0; i < imgCarros.length; i++) {
    image(imgCarros[i], xCarros[i], yCarros[i], widthCar, heigthCar);
  }
}

//Aqui acontecera a geração de carros
function geracaoCarros() {
  for (let i = 0; i < imgCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

//Verifica se o carro passou da tela
function passouTodaATela(xCarro) {
  return xCarro < - 50;
}

