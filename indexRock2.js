function rock (question2) {
    if (question2 == 'baterista') {
        return 'true';
    } else if (question2 == 'guitarrista') {
        return 'false1';
    } else {
        return 'false2';
    }
}

var question2 = prompt (`Você seria guitarrista ou baterista?`)

function resultrock (result) {
    if (result == 'true') {
        window.location.href='indexRock3.html';
    } else if (result == 'false1') {
        document.write (`<h1>Ah instrumentos de corda não são para você.<br> Tente Novamente!</h1>`);
        document.body.style.background = 'white'
    } else {
        document.write (`<h1>Opção não disponivel</h1>`);
    }
}

resultrock(rock(question2));
