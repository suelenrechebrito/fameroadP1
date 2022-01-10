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