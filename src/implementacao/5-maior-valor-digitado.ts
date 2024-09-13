function mostrarMaiorValor(m: number, n: number, o: number, p: number): void {
  // Armazenar os valores em um array
  const valores = [m, n, o, p];

  // Inicializa a variável para armazenar o maior valor
  let maior = valores[0];

  // Usa um loop para encontrar o maior valor
  for (let i = 1; i < valores.length; i++) {
      if (valores[i] > maior) {
          maior = valores[i];
      }
  }

  // Exibe o maior valor encontrado
  console.log(maior);
}

// Definindo os valores
const m: number = 5;
const n: number = 18;
const o: number = 58;
const p: number = 25;

// Chamando a função com os valores definidos
mostrarMaiorValor(m, n, o, p);



