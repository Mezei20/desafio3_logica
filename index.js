// const input = ["Aragorn", "7500"]; - Área de interação, input de dados.
// let index = 0;

// function gets() {
//     return input[index++];
// } 

// informações acima utilizadas para testar o código. Necessário retirar o comentário para teste

function main() {
let nome = gets()
let xp = parseInt(gets())
let nivel;

switch (true) {
    case xp < 1000:
        nivel = "Ferro";
        break;
    case xp <= 2000:
        nivel = "Bronze";
        break;
    case xp <= 5000:
        nivel = "Prata";
        break;
    case xp <= 7000:
        nivel = "Ouro";
        break;
    case xp <= 8000:
        nivel = "Platina";
        break;
    case xp <= 9000:
        nivel = "Ascendente";
        break;
    case xp <= 10000:
        nivel = "Imortal";
        break;
    default:
        nivel = "Radiante";
        break;
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

}

// main() - Necessário retirar o comentário para teste