function rock1(){
    var question1 = ""
    while (question1 != 1 && question1 != 2) {
        question1= prompt (`Para iniciar na Fame Road, você deve escolher.\n Responda 1: vocalista \n Responda 2: músico.`)
        if (question1 == 1) {
            window.location.href='rockGameOver1.html';
        } else if (question1 == 2) {
            window.location.href='indexRock2.html';
        } else {
            alert ('Opção não disponível.');
        }
    }
}

function rock2(){
    var question2 = ""
    while (question2 != 1 && question2 != 2) {
        question2= prompt (`Você deseja ser baterista ou guitarrista.\n Responda 1: baterista \n Responda 2: guitarrista`)
        if (question2 == 1) {
            window.location.href='indexRock3.html';
        } else if (question2 == 2) {
            window.location.href='rockGameOver2.html';
        } else {
            alert ('Opção não disponível.');
        }
    }
}

function rock3(){
    var question3 = ""
    while (question3 != 1 && question3 != 2) {
        question3= prompt (`O Rock in Rio tem o prazer de oferecer a abertura do show da Beyonce.\n Responda 1: Aceitar\n Responda 2: Recusar`)
        if (question3 == 1) {
            window.location.href='indexRock4.html';
        } else if (question3 == 2) {
            window.location.href='rockGameOver3.html';
        } else {
            alert ('Opção não disponível.');
        }
    }
}


    