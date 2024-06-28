// Função para solicitar o nome do herói
function getHeroName() {
    let name = prompt("Qual o nome do seu herói?");
    return name;
}

// Função para gerar um número aleatório entre 0 e 15000
function generateHeroExp() {
    return Math.floor(Math.random() * 15001);
}

// Função para determinar o nível do herói com base no XP
function determineHeroLevel(heroExp) {
    let level;

    if (heroExp < 1000) {
        level = "Ferro";
    } else if (heroExp >= 1001 && heroExp <= 2000) {
        level = "Bronze";
    } else if (heroExp >= 2001 && heroExp <= 5000) {
        level = "Prata";
    } else if (heroExp >= 5001 && heroExp <= 7000) {
        level = "Ouro";
    } else if (heroExp >= 7001 && heroExp <= 8000) {
        level = "Platina";
    } else if (heroExp >= 8001 && heroExp <= 9000) {
        level = "Ascendente";
    } else if (heroExp >= 9001 && heroExp <= 10000) {
        level = "Imortal";
    } else if (heroExp >= 10001) {
        level = "Radiante";
    }

    return level;
}

// Função principal
function main() {
    // Solicita o nome do herói
    let name = getHeroName();
    console.log("O nome escolhido foi: " + name);

    // Gera a quantidade de experiência aleatória
    console.log("A quantidade de experiência do seu herói será determinada...");
    let heroExp = generateHeroExp();
    console.log("XP Gerado: " + heroExp);

    // Determina o nível do herói
    let level = determineHeroLevel(heroExp);

    // Exibe a mensagem final
    console.log(`O Herói de nome ${name} está no nível de ${level}`);
}

// Chama a função principal
main();
