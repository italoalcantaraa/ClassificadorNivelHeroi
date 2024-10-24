import prompt from 'prompt-sync';
let input = prompt();

console.log("Informe o nome: ");
let name = input();

console.log("Informe a quantiade de XP:");
let xp = Number(input());

let levelXp;

if (xp < 1000)
    levelXp = "Ferro"
else if (xp >= 1001 && xp <= 2000)
    levelXp = "Bronze"
else if (xp >= 2001 && xp <= 5000)
    levelXp = "Prata"
else if (xp >= 5001 && xp <= 7000)
    levelXp = "Ouro"
else if (xp >= 7001 && xp <= 8000)
    levelXp = "Platina"
else if (xp >= 8001 && xp <= 9000)
    levelXp = "Ascendente"
else if (xp >= 9001 && xp <= 10000) {
    levelXp = "Imortal"
} else if (xp >= 10001) {
    levelXp = "Radiante"
}

console.log("O Herói de nome " + name + " está no nível " + levelXp);