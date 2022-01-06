function rock (question1) {
    if (question1 == 'músico') {
        return 'true';
    } else if (question1 == 'vocalista') {
        return 'false1';
    } else {
        return 'false2';
    }
}

var question1 = prompt (`Para iniciar na Fame Road, você deve escolher entre ser vocalista ou músico.`)

function resultrock (result) {
    if (result == 'true') {
        window.location.href='index2.html';
    } else if (result == 'false1') {
        document.write (`<h2>Infelizmente, você não conseguiu reunir uma banda, mas não Desista!</h2>`)
    } else {
        document.write (`<h2>Opção não disponivel</h2>`);
    }
}

resultrock(rock(question1));


function rock1 (question2) {
    if (question2 == 'baterista') {
        return 'true';
    } else if (question2 == 'guitarrista') {
        return 'false1';
    } else {
        return 'false2';
    }
}

function resultrock1 (result) {
    if (result == 'true') {
        var question2 = prompt (`Sua banda foi convidada para fazer abertura do show da Beyonce no Rock in Rio, responda aceito ou recuso.`);
    } else if (result == 'false1') {
        document.write (`<h2>Que pena, instrumento de corda não são para você. Tente Novamente!</h2>`)
    } else {
        document.write (`<h2>Opção não disponivel</h2>`);
    }
}

resultrock1(rock1(question2));


