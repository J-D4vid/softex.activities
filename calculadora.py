
from unittest import result


def calculadora(num1, num2, operacao):
    if(operacao == 1): return num1+num2
    elif(operacao == 2): return num1-num2
    elif(operacao == 3): return num1*num2
    elif(operacao == 4): return num1/num2
    else: return False
num1 = int(input("digite o primeiro número"))
num2 = int(input("digite o segundo número"))
operacao= int(input("digite um número entre 1 e 4, sabendo que: 1=soma;2=subtração;3=multiplicação;4=divisão"))
resultado = calculadora(num1,num2, operacao)
print(resultado)
