
//FUNÇÕES BÁSICAS//
/*
let areaNome = document.getElementById('bloco')


function clicar(){

    areaNome.innerText = 'João'
    areaNome.style.background = 'blue'
}

function entrou(){

    areaNome.innerText = 'Entrou no Bloco'
    areaNome.style.background = 'red'

}

function saiu(){


    areaNome.innerText = 'Saiu do bloco'
    areaNome.style.background = 'green'

}*/




/*
function clicarSoma(){

    let txt1 = document.getElementById('txt1')
    let txt2 = document.getElementById('txt2')
    let numero1 = Number(txt1.value)
    let numero2 = Number(txt2.value)
    let total = numero1 + numero2
    let resultado = document.getElementById('resultado')

    resultado.innerHTML = `A soma de ${numero1} mais ${numero2} é ${total}`
}*/





//// FUNÇÕES COM PARAMETRO E RETORNO//////

//Verificando se o número é maior ou menor que 100//

/*
function verificarNumero(n){

    if(n => 100){

        return 'Maior que 100'

    }else{

        return 'Menor que 100'

    }

}

let resultado = verificarNumero(174)
console.log(resultado)*/


function soma(n1, n2){

    if(n1 + n2 >= 7){

        return 'Aprovado'

    }else{

        return 'Reprovado'

    }

}

let notaFinal = soma(4, 8)
console.log(notaFinal)