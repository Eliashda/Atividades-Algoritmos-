function validarCartao(cartaoNumeros) {
    // Passo 1: Duplicar os números em posições ímpares, começando do penúltimo
    for (let i = cartaoNumeros.length - 2; i >= 0; i -= 2) {
        cartaoNumeros[i] *= 2;

        // Se o número resultante for maior que 9, subtrai 9
        if (cartaoNumeros[i] > 9) {
            cartaoNumeros[i] -= 9;
        }
    }

    // Passo 2: Somar todos os números do cartão
    const somaTotal = cartaoNumeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);

    // Passo 3: Verificar se a soma é divisível por 10
    return somaTotal % 10 === 0;
}

function executarValidacao() {
    // Simulação do número do cartão (poderia ser capturado via prompt)
    let numeroCartao = "5148 1500 1379 8819";
    
    // Remove espaços e transforma em um array de números
    numeroCartao = numeroCartao.replaceAll(' ', '').split('').map(Number);

    // Validação do tamanho do cartão (16 números)
    if (numeroCartao.length !== 16) {
        console.log("Número inválido! Um cartão deve ter exatamente 16 dígitos.");
        return 'Número inválido! Um cartão deve ter exatamente 16 dígitos.';
    }

    // Verifica se o cartão é válido ou não
    const valido = validarCartao(numeroCartao);
    console.log(`A validação do seu cartão resulta em: ${valido ? "Válido" : "Inválido"}`);
}

executarValidacao();
