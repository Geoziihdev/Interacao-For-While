function somarNumerosEntreMeN(M: number, N: number): number {
    let soma = 0;
    let i = M;
    
    while (i <= N) {
        soma += i;
        i++;
    }
    return soma;
}

const M = 5;
const N = 15;

const resultado = somarNumerosEntreMeN(M, N);
// Correção: use crase para interpolação de strings
console.log(`A soma de números entre ${M} e ${N} é: ${resultado}`);
