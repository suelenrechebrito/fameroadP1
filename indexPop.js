function pop1(){
    var question1 = ""
    while (question1 != 1 && question1 != 2) {
        question1= prompt (`Você quer fazer uma carreira solo ou em grupo.\n Responda 1: solo \n Responda 2: grupo.`)
        if (question1 == 1) {
            window.location.href='indexPop2.html';
        } else if (question1 == 2) {
            window.location.href='popGameOver1.html';
        } else {
            alert ('Opção não disponível.');
        }
    }
}

function pop2(){
    var question2 = ""
    while (question2 != 1 && question2 != 2) {
        question2= prompt (`Além de cantar você deve dançar ou tocar um instrumento.\n Responda 1: dançar \n Responda 2: tocar`)
        if (question2 == 1) {
            window.location.href='popGameOver2.html';
        } else if (question2 == 2) {
            window.location.href='indexPop3.html';
        } else {
            alert ('Opção não disponível.');
        }
    }
}

function pop3(){
    var question3 = ""
    while (question3 != 1 && question3 != 2) {
        question3= prompt (`Você foi convidada a gravar um 'feat' com Britney Spears.\n Responda 1: Aceitar\n Responda 2: Recusar`)
        if (question3 == 1) {
            window.location.href='indexPop4.html';
        } else if (question3 == 2) {
            window.location.href='popGameOver3.html';
        } else {
            alert ('Opção não disponível.');
        }
    }
}