function sertanejo1(){
    var question1 = ""
    while (question1 != 1 && question1 != 2) {
        question1= prompt (`Estilo de sertanejo que prefere tocar.\n Responda 1: Raiz\n Responda 2: Universitário`)
        if (question1 == 1) {
            window.location.href='indexSertanejo2.html';
        } else if (question1 == 2) {
            window.location.href='countryGameOver1.html';
        } else {
            alert ('Opção não disponível.');
        }
    }
}

function sertanejo2(){
    var question2 = ""
    while (question2 != 1 && question2 != 2) {
        question2= prompt (`Seu irmão, pediu para fazer uma dupla com você.\n Responda 1: Não\n Responda 2: Sim`)
        if (question2 == 1) {
            window.location.href='countryGameOver2.html';
        } else if (question2 == 2) {
            window.location.href='indexSertanejo3.html';
        } else {
            alert ('Opção não disponível.');
        }
    }
}

function sertanejo3(){
    var question3 = ""
    while (question3 != 1 && question3 != 2) {
        question3= prompt (`Nossa gravadora quer patrocinar uma turne nacional da sua dupla, como condição desta proposta vocês só poderão tocar 'covers' de outros artistas famosos.\n Responda 1: Não\n Responda 2: Sim`)
        if (question3 == 1) {
            window.location.href='indexSertanejo4.html';
        } else if (question3 == 2) {
            window.location.href='countryGameOver3.html';
        } else {
            alert ('Opção não disponível.');
        }
    }
}