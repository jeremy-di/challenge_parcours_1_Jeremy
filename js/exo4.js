/* === Exo4 ===
 *
 * 1. Dans #container, afficher l'heure à la seconde près.
 *    Format d'affichage : 11h 12m 06s
 * 2. À chaque seconde, l'heure doit être actualisée.
 *
 * Astuce : on peut avoir un objet de date en faisant : var now = new Date();
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
 */


function heureLocale() {
    let dateTimer = new Date;
    let timerHour = dateTimer.getHours();
    let timerMinutes = dateTimer.getMinutes();
    let timerSeconds = dateTimer.getSeconds();

    let executeTimer = document.querySelector('#container');

    if(timerMinutes < 10) {
        timerMinutes = "0"+timerMinutes;
    }
    if(timerSeconds < 10) {
        timerSeconds = "0"+timerSeconds;
    }


    executeTimer.textContent = timerHour+'h '+timerMinutes+'m '+timerSeconds+'s';
}

heureLocale();

setInterval(heureLocale,1000);