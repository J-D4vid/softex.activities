var nota1 = Number(window.prompt('insira uma nota entre 0 e 10'))
var nota2 = Number(window.prompt('insira outra nota entre 0 e 10'))
var nota3 = Number(window.prompt('insira outra nota entre 0 e 10'))
var media = nota1 + nota2 + nota3 
media = media/3
window.alert(`a média adiquirida foi de ${media}`)
console.log(nota1,nota2,nota3,media)