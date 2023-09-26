
const bt = document.getElementById('bt')
    
bt.addEventListener('click', () =>{
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let op = document.getElementById('op').value
    let num = 0
    let resultado = document.getElementById('resultado')
    if(op === "divisão"){
        if(num2 !== 0){
            num = Math.floor(num1 / num2)
            let resto = num1 % num2
            resultado.innerHTML= `resultado:${num}<br> resto:${resto}`
        }else{
            resultado.innerHTML = "divisão não pode ser feita, escolha um número diferente de 0"
        }
    }if(op === "subtração"){
        num = num1 - num2
        resultado.innerHTML=num
    }if(op === "soma"){
        num = num1 + num2
        resultado.innerHTML=num
    }
    if(op === "mutiplicação"){
        num = num1 * num2
        resultado.innerHTML=num
    }
    
    console.log(num1, num2)
})


