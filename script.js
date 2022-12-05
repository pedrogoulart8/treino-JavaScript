
//FUNÇÕES BÁSICAS//

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

}





function clicarSoma(){

    let txt1 = document.getElementById('txt1')
    let txt2 = document.getElementById('txt2')
    let numero1 = Number(txt1.value)
    let numero2 = Number(txt2.value)
    let total = numero1 + numero2
    let resultado = document.getElementById('resultado')

    resultado.innerHTML = `A soma de ${numero1} mais ${numero2} é ${total}`
}