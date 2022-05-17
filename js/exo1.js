/* === Exo1 ===
 *
 * 1. Demander à l'utilisateur de rentrer un premier nombre dans une boîte de dialogue.
 * 2. Demander à l'utilisateur de rentrer un 2e nombre dans une boîte de dialogue.
 * 3. Additionner les deux nombres.
 * 4. Afficher le résultat dans #result.
 */


//1 :

let numberOne = window.prompt('Veuillez entrer un premier chiffre');

//2 :

let numberTwo = window.prompt('Veuillez entrer un deuxième chiffre');

//3 :

let numberOperator = parseInt(numberOne) + parseInt(numberTwo);

//4 :

let calcElement = document.querySelector('#result');
calcElement.textContent= numberOperator;
