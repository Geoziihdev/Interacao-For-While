function mostrarNumerosAteN(n: number): void {
    let i = 0;
    while (i <= n) { 
        console.log(i);
        i++;
    }
}

mostrarNumerosAteN(20);

/* Outra forma de fazer */

function mostrarNumerosAteN2(N: number): any {
    let i = 0;
    while (i <= N) { 
        console.log(i);
        i++;
    }
}

// teste
console.log(mostrarNumerosAteN2(5));
