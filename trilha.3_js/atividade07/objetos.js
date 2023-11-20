class conta { //objeto abstrato "conta"
    constructor(numero, saldo, tipoConta){

        this.numero = numero
        this.saldo = saldo
        this.tipoConta = tipoConta
    }
    sacar(valor){
        if(valor <= this.saldo){
            this.saldo -= valor
            console.log(`saque finalizado, novo saldo: ${this.saldo}`)
        }else if(valor > saldo){
            console.log("incapaz de realizar o saque!")
        }
    }
    depositar(valor){
        this.saldo += valor
        console.log(`novo saldo: ${this.saldo}`)
    }
    consultarSaldo(){
        console.log(`saldo atual é de ${this.saldo}`)
    }
}
const contaCorrente = new conta(232302, 5000, 'conta corrente')//objeto concreto "contaCorrente"



class loja{ //objeto abstrato "loja"
    constructor(item, quantidade, preco, moneyCaixa){
        this.item = item
        this.quantidade = quantidade 
        this.preco = preco
        this.moneyCaixa = moneyCaixa
    }
    venderItem(quantidade){
       if(quantidade <= this.quantidade){
        this.quantidade -= quantidade
        let preco = this.preco*quantidade
        this.moneyCaixa += preco
       }else if(quantidade > this.quantidade){
           let extra = quantidade - this.quantidade
           quantidade -= extra
           this.quantidade = 0
           let preco = this.preco*quantidade
           this.moneyCaixa += preco
           console.log(`venda realizada parcialmente devido à falta de estoque,${extra} unidade de diferença do pedido!`)
        }
    }
    comprarItem(quantidade){
        let preco = this.preco*quantidade
        if(preco <= this.moneyCaixa){
            this.quantidade += quantidade
            this.moneyCaixa -= preco
        }else if(preco > this.moneyCaixa){
            console.log("impossivel realizar compra!, capital insuficiente!")
        }
    }
    doarItem(quantidade){
        this.quantidade -= quantidade
    }
}
const madeira = new loja("madeira",10, 100, 200)// objeto concreto "madeira"


