import promptSync from 'prompt-sync';

// Cria uma instância do promptSync
const prompt = promptSync();

// Função para calcular a média e determinar a situação do aluno
function mediaNotas(n1: number, n2: number, n3: number): string {
    const media = (n1 + n2 + n3) / 3;
    if (media >= 7) {
        return "Aprovado";
    } else if (media > 4 && media < 7) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

// Função para capturar as notas de um aluno
function capturarNotas(aluno: number): { n1: number; n2: number; n3: number } {
    console.log(`Notas do aluno ${aluno}:`);
    const n1 = parseFloat(prompt("Digite a nota da primeira prova: "));
    const n2 = parseFloat(prompt("Digite a nota da segunda prova: "));
    const n3 = parseFloat(prompt("Digite a nota da terceira prova: "));
    return { n1, n2, n3 };
}

// Captura as notas e calcula a situação para 3 alunos
for (let i = 1; i <= 3; i++) {
    const { n1, n2, n3 } = capturarNotas(i);
    const resultado = mediaNotas(n1, n2, n3);
    console.log(`Resultado do aluno ${i}: ${resultado}`);
}






/*Outra forma de fazer*/



/*function calcularMedia(notas: number[]): number {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

// Função para classificar a situação do aluno com base na média
function mediaNotas(media: number): string {
    if (media >= 7) {
        return "Aprovado";
    } else if (media > 4 && media < 7) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

// Dados predefinidos para 3 alunos com suas notas
const alunos = [
    { nome: 'Aluno 1', notas: [8, 7, 9] },
    { nome: 'Aluno 2', notas: [5, 6, 4] },
    { nome: 'Aluno 3', notas: [3, 2, 4] }
];

console.log('============= Programa de Média de Notas =============');

// Loop para calcular a média e situação de cada aluno
for (let aluno of alunos) {
    let media = calcularMedia(aluno.notas);
    console.log(`Notas de ${aluno.nome}: ${aluno.notas.join(', ')}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Situação: ${mediaNotas(media)}`);
    console.log(''); // Linha em branco para separação
}

*/