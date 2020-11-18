var jogador,
  vencedor = null;
var quadrado = document.getElementsByClassName('quadrado');
var but = document.getElementById('btn_button');
var jogador_selecionado = document.getElementById('jogador-selecionado');
var vencedor_selecionado = document.getElementById('vencedor-selecionado');
mudarjogador('X');

for (var i = 0; i < quadrado.length; i++) {
  quadrado[i].addEventListener('click', function () {
    if (vencedor != null) {
      return;
    }
    if (this.innerHTML !== '-') {
      return;
    }
    this.innerHTML = jogador;
    this.style.color = '#45385a';
    if (jogador === 'X') {
      jogador = 'O';
    } else {
      jogador = 'X';
    }
    mudarjogador(jogador, jogador, jogador_selecionado);
    checaVencedor();
  });
}

but.addEventListener('click', function () {
  reiniciar(vencedor, quadrado, vencedor_selecionado);
});

