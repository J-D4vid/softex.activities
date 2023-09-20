const btn =  document.getElementById("bt")

btn.addEventListener('click',function(e) {
    e.preventDefault()
    const nome = document.getElementById('nome').value
    const salario = document.getElementById('salario').value
    const idade = document.getElementById('idade').value
    const diploma = document.getElementById('diploma').value
    const pup = document.getElementById('popup')
    const btão = document.getElementById('fechar') 
    const name = document.getElementById('name') 
    const age = document.getElementById('age') 
    const salary = document.getElementById('salary') 
    const pd = document.getElementById('p_diploma') 
    pup.style = "display:block;"
    name.innerHTML = `Nome do usuário:<strong>${nome}</strong><br> tipo da variável: string`
    salary.innerHTML = `Salario do usuário: <strong>${Number(salario)}</strong><br> tipo da variável: number`// todos os dados vindos aparit de input ja são lidos como string, então basta apenas converter para número utilizando a função Number()
    age.innerHTML = `Idade do usuário: <strong>${Number(idade)} anos </strong><br> tipo da variável: number `
    pd.innerHTML = `Portador de diploma: <strong>${diploma}</strong><br> tipo da variável: string`
    

    btão.addEventListener('click', function(){
        pup.style = "display:none;"
    })
})

