function tabelaConversao(): void {
    let polegadaParaCentimetro = 2.54;
    
    console.log("Polegadas | Centímetros");
    console.log("-----------------------");

    for (let polegadas = 1; polegadas <= 20; polegadas++) {
        let centimetros = polegadas * polegadaParaCentimetro;
        console.log(`${polegadas.toFixed(2).padStart(10)} | ${centimetros.toFixed(2).padStart(12)}`);
}
}

tabelaConversao();