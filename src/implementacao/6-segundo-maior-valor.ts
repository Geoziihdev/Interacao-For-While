function mostrarSegundoMaiorValor(numeros: number[]): void {
    // Verifica se o array tem menos de dois elementos
    if (numeros.length < 2) {
      console.log("Não há elementos suficientes para determinar o segundo maior valor.");
      return;
    }
  
    // Inicializa as variáveis para o maior e o segundo maior valor
    let maior = Number.NEGATIVE_INFINITY;
    let segundoMaior = Number.NEGATIVE_INFINITY;
  
    let i = 0; // Inicializa o índice para o loop while
  
    // Usa um loop while para iterar sobre os números no array
    while (i < numeros.length) {
      const numero = numeros[i];
  
      if (numero > maior) {
        segundoMaior = maior;
        maior = numero;
      } else if (numero > segundoMaior && numero < maior) {
        segundoMaior = numero;
      }
  
      i++; // Incrementa o índice
    }
  
    // Verifica se o segundo maior valor foi atualizado
    if (segundoMaior === Number.NEGATIVE_INFINITY) {
      console.log("Não há um segundo maior valor distinto.");
    } else {
      console.log(`O segundo maior valor é: ${segundoMaior}`);
    }
  }
  
  // Testando a função com um array de números
  const numeros = [5, 18, 58, 25];
  mostrarSegundoMaiorValor(numeros);
  