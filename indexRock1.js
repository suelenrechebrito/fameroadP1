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
        window.location.href='indexRock2.html';
    } else if (result == 'false1') {
        document.write (`<h1>Infelizmente, você não conseguiu reunir uma banda, mas não Desista!</h1>`)
    } else {
        document.write (`<h1>Opção não disponivel</h1>`);
    }
}

resultrock(rock(question1));
