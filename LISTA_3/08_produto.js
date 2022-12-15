const entrada = require("prompt-sync")({sigint:true});

//Elaborar um programa de computador que efetue a leitura de quatro valores inteiros (variáveis A, B, C e D). Ao final o programa deve apresentar o resultado do produto (variável P) do primeiro com o terceiro valor, e o resultado do produto (variável P) do primeiro com o terceiro valor, e o resultado da soma (variável S) do segundo com o quarto valor. 


var a,b,c,d;

var produto;

a = parseFloat(entrada("Digite seu primeiro valor: "));
b = parseFloat(entrada("Digite seu segundo valor: "));
c = parseFloat(entrada("Digite seu terceiro valor: "));
d = parseFloat(entrada("Digite seu quarto valor: "));


console.log("Resultado do produto, primeiro e terceiro valor: " , (a*c));
console.log("Resultado da soma do segundo com o quarto valor: " , (b+d));

