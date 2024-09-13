import * as readline from 'readline';

function analiseMultiplos(): void {
    let multiplosDe2e5 = 0;
    let multiplosDe2e3 = 0;
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const pergunta = (query: string): Promise<number> => {
        return new Promise((resolve) => rl.question(query, (answer) => {
            resolve(parseInt(answer));
        }));
    };

    const main = async () => {
        while (true) {
            const numero = await pergunta("Digite um número positivo (ou -1 para encerrar): ");

            if (numero === -1) {
                break;
            }

            // Verifica se o número é múltiplo de 2 e 5 simultaneamente
            if (numero % 2 === 0 && numero % 5 === 0) {
                multiplosDe2e5++;
            }

            // Verifica se o número é múltiplo de 2 e 3 simultaneamente
            if (numero % 2 === 0 && numero % 3 === 0) {
                multiplosDe2e3++;
            }
        }

        rl.close();
        console.log(`Quantidade de múltiplos de 2 e 5: ${multiplosDe2e5}`);
        console.log(`Quantidade de múltiplos de 2 e 3: ${multiplosDe2e3}`);
    };

    main();
}

// Chama a função
analiseMultiplos();
