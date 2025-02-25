const tabelaPaises = {
    "123": "Argentina",
    "456": "México",
    "789": "Brasil",
    "001": "EUA",
    "002": "Canadá",
    "010": "Japão",
    "020": "China",
    "123": "Argentina",
    "345": "França",
    "546": "Alemanha",
    "789": "Brasil",
    "001": "EUA",
    "560": "Portugal",
    "999": "África do Sul",
    "100": "Reino Unido",
    "200": "Itália",
    "250": "Espanha",
    "300": "Austrália",
    "400": "Rússia",
    "500": "Índia"
};

function validarCodigo(codigoSeparado) {
    let soma = 0;
    // Calcula a soma com a lógica de multiplicar os dígitos alternados por 3 ou 1
    for (let i = 0; i < (codigoSeparado.length - 1); i++) {
        soma += (i % 2 === 0 ? codigoSeparado[i] * 1 : codigoSeparado[i] * 3);
    }

    const resultado = (10 - (soma % 10)) % 10;

    // Verifica se o último dígito corresponde ao cálculo
    return parseInt(codigoSeparado[codigoSeparado.length - 1]) === resultado;
}

function obterInformacoes(codigoSeparado) {
    let copiaCodigo = [...codigoSeparado];

    // Extrai o código do país, fabricante e produto
    const paisCodigo = codigoSeparado.slice(0, 3).join('');
    copiaCodigo = copiaCodigo.slice(3);

    const nomePais = tabelaPaises[paisCodigo] || "Desconhecido";

    const fabricante = codigoSeparado.slice(3, 7).join('');
    copiaCodigo = copiaCodigo.slice(4);

    const digitoVerificacao = codigoSeparado[codigoSeparado.length - 1];
    copiaCodigo = copiaCodigo.slice(0, -1);
    const codigoProduto = copiaCodigo.join('');

    // Retorna as informações em um objeto EAN
    return {
        pais: nomePais,
        fabricante: fabricante,
        digitoVerificacao: digitoVerificacao,
        codigoProduto: codigoProduto
    };
}

function main() {
    // Teste com um código EAN fixo (simulando um código inserido pelo usuário)
    let codigo = "7894326682575";

    // Valida se o código possui exatamente 13 dígitos
    if (codigo.length !== 13) {
        console.log('Código deve ter exatamente 13 números');
        return;
    }

    // Converte o código para um array de números
    let codigoSeparado = codigo.split('').map(Number);

    // Verifica a validade do código usando a função de cálculo
    const validez = validarCodigo(codigoSeparado);
    console.log(`A validez do código é: ${validez ? "Válido" : "Inválido"}`);

    // Obtém as informações do código EAN
    const informacoesEAN = obterInformacoes(codigoSeparado);

    // Exibe as informações do EAN
    console.log(`Informações do EAN:
        País: ${informacoesEAN.pais}
        Fabricante: ${informacoesEAN.fabricante}
        Código do produto: ${informacoesEAN.codigoProduto}
        Dígito de verificação: ${informacoesEAN.digitoVerificacao}`);
}

main();
