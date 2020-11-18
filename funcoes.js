function checaVencedor() {
  if (checaSequencia(quadrado[0], quadrado[1], quadrado[2])) {
    mudaCorQuadrado(quadrado[0], quadrado[1], quadrado[2]);
    mudarVencedor(quadrado[0]);
  }
  if (checaSequencia(quadrado[3], quadrado[4], quadrado[5])) {
    mudaCorQuadrado(quadrado[3], quadrado[4], quadrado[5]);
    mudarVencedor(quadrado[3]);
  }
  if (checaSequencia(quadrado[6], quadrado[7], quadrado[8])) {
    mudaCorQuadrado(quadrado[6], quadrado[7], quadrado[8]);
    mudarVencedor(quadrado[6]);
  }
  if (checaSequencia(quadrado[0], quadrado[4], quadrado[8])) {
    mudaCorQuadrado(quadrado[0], quadrado[4], quadrado[8]);
    mudarVencedor(quadrado[4]);
  }
  if (checaSequencia(quadrado[2], quadrado[4], quadrado[6])) {
    mudaCorQuadrado(quadrado[2], quadrado[4], quadrado[6]);
    mudarVencedor(quadrado[0]);
  }
  if (checaSequencia(quadrado[0], quadrado[3], quadrado[6])) {
    mudaCorQuadrado(quadrado[0], quadrado[3], quadrado[6]);
    mudarVencedor(quadrado[0]);
  }
  if (checaSequencia(quadrado[1], quadrado[4], quadrado[7])) {
    mudaCorQuadrado(quadrado[1], quadrado[4], quadrado[7]);
    mudarVencedor(quadrado[1]);
  }
  if (checaSequencia(quadrado[2], quadrado[5], quadrado[8])) {
    mudaCorQuadrado(quadrado[2], quadrado[5], quadrado[8]);
    mudarVencedor(quadrado[5]);
  }
}
function mudarVencedor(quadrado) {
  vencedor = quadrado.innerHTML;
  vencedor_selecionado.innerHTML = vencedor;
}
function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
  quadrado1.style.background = '#0f0';
  quadrado2.style.background = '#0f0';
  quadrado3.style.background = '#0f0';
}
function checaSequencia(quadrado1, quadrado2, quadrado3) {
  var e_igual = false;
  if (
    quadrado1.innerHTML != '-' &&
    quadrado1.innerHTML == quadrado2.innerHTML &&
    quadrado2.innerHTML == quadrado3.innerHTML
  ) {
    e_igual = true;
  }
  return e_igual;
}
function mudarjogador(valor) {
  jogador = valor;
  jogador_selecionado.innerHTML = jogador;
}

function reiniciar() {
  vencedor = null;
  vencedor_selecionado.innerHTML = '';
  for (var i = 0; i < quadrado.length; i++) {
    quadrado[i].style.background = '#a09ca6';
    quadrado[i].innerHTML = '-';
    quadrado[i].style.color = '#a09ca6';
  }
  mudarjogador('X');
}
