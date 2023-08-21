// function votar(erro_votacao, candidatos, nulo){
//     

//     }
//     return voto;
// }
function resposta(resposta, voto){
    var resposta =window.prompt("gostaria de finalizar sua votação?(sim/não)")
        if(resposta == "não"){
            voto [0] = Number(window.prompt("os candidatos e seus números para a votação serão: candidato Lucas de número 889; guilherme de número 847; geyson de número 515. caso deseje votar branco insira o número 0"))
            nulo -= 1
    }
}

var c_lucas = 0
var c_guilherme = 0
var c_geyson = 0
var voto = [Number(window.prompt("escolha o número de seu candidato. os candidatos e seus números para a votação serão: candidato Lucas de número 889; candidato guilherme de número 847; e candidato geyson de número 515. caso deseje votar branco insira o número 0"))]
var nulo = 0

if(voto == 0){
    window.alert("você votou branco, obrigado por sua participação")
    resposta(resposta, voto);
}else {
    if(isNaN(voto)){
        while(isNaN(voto)==true){
            window.alert("esse campo compreende somente números, preencha novamente!")
            resposta(resposta, voto)   
        break
        }
    }else if(voto != 889 && voto != 847 && voto != 515){
        window.alert("seu voto não corresponde a nenhum dos candidatos, será portanto marcado como nulo.")
        nulo += 1 
        resposta(resposta, voto)
        }
    }


if(voto[0] === 889){
    c_lucas+=1
    window.alert("o vencedor da votação foi lucas")
}else if(voto[0] === 847){
    c_guilherme+=1
    window.alert("o vencedor da votação foi guilherme")
}else if(voto[0] === 515){
    c_geyson+=1
    window.alert("o vencedor da votação foi geyson")
}else{
    nulo+=1
    window.alert("a votação resultou em nulo")
}

var voto1 = document.getElementById("voto1")
voto1.innerText = c_lucas
var voto2 = document.getElementById("voto2")
voto2.innerText = c_guilherme
var voto3 = document.getElementById("voto3")
voto3.innerText = c_geyson
var voto4 = document.getElementById("voto4")
voto4.innerText = nulo
