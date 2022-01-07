function rock (question3) {
    if (question3 == 'aceito') {
        return 'true';
    } else if (question3 == 'recuso') {
        return 'false1';
    } else {
        return 'false2';
    }
}

var question3 = prompt (`O Rock in Rio, quer que a sua banda faça o show de abertura da Beyonce. Responda: aceito ou recuso.`)

function resultrock (result) {
    if (result == 'true') {
        window.location.href='indexRock4.html';
    } else if (result == 'false1') {
        document.write (`<h1>Não acredito que vocês recusaram seria uma excelente oportunidade.<br> Fica para próxima!</h1>`);
    } else {
        document.write (`<h1>Opção não disponivel</h1>`);
    }
}

resultrock(rock(question3));
