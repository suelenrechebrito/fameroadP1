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