const prompt = require("prompt-sync")();

//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// condição if, else if e else

// loop for pra ficar repetindo 5 vezes pra ir testando as condições
let i = 0;

while (i < 8) {
  let nome = prompt("Qual o nome do herói? ");
  let xp = Number(prompt("Qual a experiência xd dele? "));

  if (xp <= 1000) {
    console.log(`O Herói de nome ${nome} está no nível Ferro`);
  } else if (xp >= 1001 && xp <= 2000) {
    console.log(`O Herói de nome ${nome} está no nível Bronze`);
  } else if (xp >= 2001 && xp <= 5000) {
    console.log(`O Herói de nome ${nome} está no nível Prata`);
  } else if (xp >= 5001 && xp <= 7000) {
    console.log(`O Herói de nome ${nome} está no nível Ouro`);
  } else if (xp >= 7001 && xp <= 8000) {
    console.log(`O Herói de nome ${nome} está no nível Platina`);
  } else if (xp >= 8001 && xp <= 9000) {
    console.log(`O Herói de nome ${nome} está no nível Ascendente`);
  } else if (xp >= 9001 && xp <= 10000) {
    console.log(`O Herói de nome ${nome} está no nível Imortal`);
  } else {
    console.log(`O Herói de nome ${nome} está no nível Radiante`);
  }
  i++;
}

console.log("Fim do programa");
