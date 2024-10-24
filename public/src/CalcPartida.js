import prompt from 'prompt-sync';
let input = prompt();


console.log("Informe a quantidade de vitórias: ");
let vitorias = Number(input());

console.log("Informe a quantidade de derrotas: ");
let derrotas = Number(input());

let saldoRankeadas = calcSaldoRankeada(vitorias, derrotas);

let result;

if(vitorias < 10)
    result = "Ferro";
else if(vitorias >= 11 && vitorias <= 20)
    result = "Bronze";
else if(vitorias >= 21 && vitorias <= 50)
    result = "Prata";
else if(vitorias >= 51 && vitorias <= 80)
    result = "Ouro"; 
else if(vitorias >= 81 && vitorias <= 90)
    result = "Diamante"; 
else if(vitorias >= 91 && vitorias <= 100)
    result = "Lendário"; 
else if(vitorias >= 101)
    result = "Imortal"

console.log("O Herói tem de saldo de " + saldoRankeadas + " está no nível de " + result);

function calcSaldoRankeada(qtdVitorias, qtdDerrotas) {
    return qtdVitorias - qtdDerrotas;
}   