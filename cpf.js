function calculoLoop (contador, cpfsodigitos){
    let soma = 0
    for (i=contador; i>1; i--){
        soma += cpfsodigitos[contador-i] * i
    }
    let resultado = soma%11
    if(
        (resultado<2 && cpfsodigitos[contador-1]!=0)
        || (resultado >= 2 && cpfsodigitos[contador-1] != 11-resultado)
        ){
        return false
    }
    return true
}

function verificaCPF (cpf){
    let cpfsodigitos = cpf
    .replaceAll('.','')
    .replaceAll('-','')
    .split('')
    if (cpfsodigitos.length != 11){
        return 'CPF Inválido'
    }
    let valida1digito = calculoLoop(10, cpfsodigitos)
    if (!valida1digito){
        return 'CPF Inválido'
    }
    let valida2digito = calculoLoop(11, cpfsodigitos)
    if (!valida2digito){
        return 'CPF Inválido'
    }
    return 'CPF VALIDO'
}
let cpf = '090.851.019-56'
console.log(verificaCPF(cpf))
let cpf2 = '090.851.019-57'
console.log(verificaCPF(cpf2))
let cpf3 = '090.851.019-17'
console.log(verificaCPF(cpf3))
let cpf4 = '090.851.019-16'
console.log(verificaCPF(cpf4))
let cpf5 = '090.85a.019-16'
console.log(verificaCPF(cpf5))