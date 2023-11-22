try {
    
    const num1 = parseFloat(prompt('Digite um número número:'))
    const op = prompt('informe a operação a ser realizada:')
    const num2 = parseFloat(prompt('Digite outro número:'))
    

    if(op == "soma"){
        let resultado = num1 + num2
        console.log(`Resultado ${resultado}`)
    } else if(op === "subtração"){
        let resultado = num1 - num2
        console.log(`Resultado ${resultado}`)
    }else if(op === "divisão"){
        if(num2 === 0){
            throw new Error('impossível dividir por zero, Einstein!?!')
        }else {
            let resultado = num1 / num2
            console.log(`Resultado ${resultado}`)
        }
    }else if(op === "multiplicação"){
        let resultado = num1 * num2
        console.log(`Resultado ${resultado}`)
    }

    
    
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Digite números válidos.');
    }

   
} catch (erro) {
    // Capturar e lidar com exceções
    console.error('Ocorreu um erro:', erro.message);
} finally {
    // Código que será executado independentemente de ocorrer uma exceção ou não
    console.log('Operação concluída.');
}