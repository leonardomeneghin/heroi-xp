let nomeInput = ""
let xpInput = 0
nomeInput = prompt("Insira o nome do seu herói")
xpInput = prompt("Qual a quantidade de XP do seu herói?")
let heroi ={
    "nome" : nomeInput,
    "xp" : xpInput,
    "nivel":""
    }

let input = 0
console.log("Insira 'SAIR' para encerrar a aplicação")
while(input  !== 'SAIR'){
    let input = prompt("Insira a XP do herói como um numero (ex: 100) ou escreva SAIR em caixa alta para parar a aplicação")
    if(input === 'SAIR') break;
    heroi.xp += input
    if(heroi.xp < 1000){
        heroi.nivel = "Ferro"
    }else if(heroi.xp < 2000){
        heroi.nivel = "Bronze"
    }else if(heroi.xp < 3000){
        heroi.nivel = "Prata"
    }else if(heroi.xp < 4000){
        heroi.nivel = "Ouro"
    }else if(heroi.xp < 5000){
        heroi.nivel = "Platina"
    }else if(heroi.xp < 7000){
        heroi.nivel = "Ascendente"
    }else if(heroi.xp < 10000){
        heroi.nivel = "Imortal"
    }else{
        heroi.nivel = "Radiante"
    }
}
console.log("O Herói de nome " + heroi.nome + " está no nível de " + heroi.nivel + ".");