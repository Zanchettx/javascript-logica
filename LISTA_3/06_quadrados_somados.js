const entrada = require("prompt-sync")({sigint:true});

//Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à soma dos quadrados dos três valores lidos. 

var a,b,c;

console.log("O programa ira efetuar a soma dos quadrados dos valores lidos !!");

a = parseFloat(entrada("Digite o seu primeiro valor: "));
b = parseFloat(entrada("Digite o seu segundo valor: "));
c = parseFloat(entrada("Digite o seu terceiro valor: "));


var quadradoA,quadradoB,quadradoC;

quadradoA = Math.pow(a,2);
quadradoB = Math.pow(b,2);
quadradoC = Math.pow(c,2);

var resultadoFinal = (quadradoA + quadradoB + quadradoC);

console.log("Essa é a soma dos quadrados: " , resultadoFinal);