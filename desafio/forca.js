class Forca {

  constructor(palavraSecreta, vidas, letrasChutadas, palavra) {
    this.palavraSecreta = palavraSecreta.toLowerCase();
    this.vidas = 6;
    this.letrasChutadas = [];
  }

  // Chutar -> 
  chutar(letra) { 
    letra = letra.toLowerCase();

    if (letra.length > 1 || this.letrasChutadas.indexOf(letra) > -1) {
      return;
    }

    this.letrasChutadas.push(letra);
    var correto = this.palavraSecreta.indexOf(letra) > -1;

    if (!correto) {
      this.vidas -= 1;
    }

    return correto;
  }

  // Array "palavra"
  metodoPalavra() {
    var palavra  = [];
    var arrayPalavraSecreta = this.palavraSecreta.split("");
    var that = this;

    arrayPalavraSecreta.forEach(function (letra) {
      if (that.letrasChutadas.indexOf(letra) > -1) {
        palavra.push(letra);
      } else {
        palavra.push("_");
      }
    });
    
    return palavra;
  }

  // Estado -> Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
  buscarEstado() { 
    if (this.vidas === 0) {
      return "perdeu";
    } else if (this.vidas > 0 && this.metodoPalavra().indexOf("_") < 0) {
      return "ganhou";
    } else {
      return "aguardando chute";
    }
  }

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Array que deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.metodoPalavra() // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
