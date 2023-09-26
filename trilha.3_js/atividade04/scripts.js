function somar(){
    window.alert('exemplo de função sem parâmetro, função para somar dois números')
    let num1 = Number(window.prompt('digite um número'))
    let num2 = Number(window.prompt('digite outro número'))
    let res = num1 + num2

    return window.alert(`o resultado da soma é ${res}`)
}
somar()


function subtrair(nu1, nu2, resu){
    window.alert('exemplo de função com parâmetro, função para subtrair dois números')
     resu = nu1 - nu2

    return window.alert(`o resultado da subtração é ${resu}`)
}
subtrair(10,8)


const multiplicar = (num1, num2)=> num1 * num2
const res = multiplicar(Number(window.prompt('digite um número')),Number(window.prompt('digite outro número')))
window.alert(`resultado da arrow function, ${res}`)




