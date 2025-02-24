const prompt = require('prompt-sync')();

function getVerificador(digitos, pesos) {
    const digitsArr = String(digitos).split('');
    let verif = digitsArr.reduce((prev, curr, i) => prev + curr * pesos[i], 0);
    verif %= 11;
    verif = verif < 2 ? 0 : 11-verif;
    return parseInt(verif);
}

function criarCNPJ(digitos, filial) {
    const pesos1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const pesos2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const verif1 = getVerificador(digitos + filial, pesos1)
    const verif2 = getVerificador(digitos + filial + verif1, pesos2)

    return `${digitos}/${filial}-${verif1}${verif2}`
}

const cnpj = criarCNPJ(prompt("Digite os 8 primeiros dígitos: "), prompt("Digite o nº da filial: "));
console.log("Seu CNPJ é:", cnpj);