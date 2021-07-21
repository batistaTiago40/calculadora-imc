function calcular() {
  /* Elementos HTML */
  const peso = document.getElementById('peso').value
  const altura = document.getElementById('altura').value
  const resultado = document.getElementById('res')

  var res = peso / (altura * altura)
  if (res <= 0) {
    /* Erro valor inválido */ 
    window.alert('[ERRO]! O cálculo rseultou em 0')
  } else if (res <= 18.5) {
    resultado.innerHTML = `${res.toFixed(2)} <br> Abaixo do peso`
  } else if (res >= 18.6 && res <= 24.9) {
    resultado.innerHTML = `${res.toFixed(2)} <br> Peso ideal`
  } else if (res >= 25 && res <= 29.9) {
    resultado.innerHTML = `${res.toFixed(2)} <br> Levemente acima do peso`
  } else if (res >= 30 && res <= 34.9) {
    resultado.innerHTML = `${res.toFixed(2)} <br> Obesidade grau 1`
  } else if (res >= 35 && res <= 39.9) {
    resultado.innerHTML = `${res.toFixed(2)} <br> Obesidade grau 2 (severa)`
  } else if (res >= 40) {
    resultado.innerHTML = `${res.toFixed(2)} <br> Obesidade grau 3 (mórbida)`
  }
}