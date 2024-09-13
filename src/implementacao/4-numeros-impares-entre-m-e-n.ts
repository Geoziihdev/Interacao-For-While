function mostrarImparesEntreMeN(M: number, N: number):void {
  let i = M + 1; 
  while ( i< N) {
      if (i % 2 !== 0) { // Verifica se o número é ímpar
          console.log(i); 
      }     
      i++;
  }   
  
}


// Teste
mostrarImparesEntreMeN(2, 8); // Exibirá: 3, 5, 7

/* Outra forma
function mostrarImparesEntreMeN(m: number, n: number): void {
  for (let i = m + 1; i < n; i++) { 
    if (i % 2 !== 0) {         /Formula para declar se é impar ou par/
      console.log(i); 
    }
  }
}

const m: number = 5;
const n: number = 18;

mostrarImparesEntreMeN(m, n);

*/