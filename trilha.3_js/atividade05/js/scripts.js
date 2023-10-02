function Banco(tConta, saldo, agencia, nConta, newSaldo){
    this.agencia = agencia
    this.saldo = saldo
    this.nConta = nConta
    this.tConta = tConta
    this.newSaldo = newSaldo
    this.mostrarSaldo = function(){
        console.log(this.saldo)
    }
    this.deposito = function(){
        this.newSaldo = Number(window.prompt('digite o valor do deposito:'))
        this.saldo += this.newSaldo
        this.atualizarHTML()
        return saldo
    }

    this.saque = function(){
        this.newSaldo = Number(window.prompt('digite o valor do saque:'))

        
        if(this.newSaldo > this.saldo){
            window.alert('impossivel realizar saque, saldo insuficiente')
        }else{
            this.saldo -= this.newSaldo
            console.log(newSaldo)
            this.atualizarHTML()
            dados[0].innerHTML= `agência: ${novaConta.agencia}`
            dados[1].innerHTML= `n° conta: ${novaConta.nConta}`
            dados[2].innerHTML= `tipo:${novaConta.tConta}`
            dados[3].innerHTML= `saque: ${novaConta.newSaldo}`
            dados[3].style = "border-bottom:1px dashed black"
            dados[4].innerHTML= `saldo atual: ${novaConta.saldo}`
            popup.style = "display:block"
        }
        
        return saldo, newSaldo
    }
    this.atualizarHTML = function(){
            Tsaldo.innerHTML = `R$ ${this.saldo.toFixed(2)}`
    }
}
const novaConta = new Banco("conta corrente",000,'233-x','233.233-23',0)
const popup = document.getElementById('popup')
const btdp = document.querySelector('.depositar')
const btsc = document.querySelector('.sacar') 
const btsair = document.querySelector('.sair')
let Tsaldo = document.getElementById('saldo')
let agency = document.getElementById('agencia')
let count = document.getElementById('n-conta')
let dados = document.querySelectorAll('li')
    agency.innerHTML = `N° Agencia: ${novaConta.agencia}`
    Tsaldo.innerText = `R$ ${novaConta.saldo}`
    count.innerHTML = `N° conta: ${novaConta.nConta}`
novaConta.atualizarHTML()

btdp.addEventListener('click',()=>{
    novaConta.deposito()
})

btsc.addEventListener('click', ()=>{
    novaConta.saque()
})

btsair.addEventListener('click', ()=>{
    popup.style = "display:none;"
})






