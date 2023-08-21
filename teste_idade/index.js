function age(nome, nascimento){
    var nome = window.prompt("informe seu nome completo")
    var nascimento = Number(window.prompt("informe seu ano de nascimento."))
    if(nascimento >=1922 && nascimento <= 2021){
        nascimento = 2022-nascimento;
        window.alert(`seu nome é ${nome}, você completou ou completará ${nascimento} anos em 2022, meus parabéns!!`);
    }else {
        if(nascimento < 1922 || nascimento > 2021){
            window.alert("o ano inserido não corresponde a nenhum no ultimo século, por favor preencha o campo com sua veradeira data de nascimento")
            age()
        }else if(isNaN(nascimento)){    
            while(isNaN(nascimento)){
                window.alert("somente números são compreendidos no campo preenchido, refaça o formulário!")
                try{
                    idade = age()
                    break
                } catch{
                    window.alert(Error)
                }
            }
        }
    }
    return;
}

try{
    idade = age()
} catch{
    window.alert(Error)
}
