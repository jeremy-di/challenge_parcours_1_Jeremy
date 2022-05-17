/* === Exo3 ===
 *
 * 1. L'utilisateur tape un nombre dans chaque input.
 * 2. Chaque fois qu'on tape au clavier dans l'un des deux inputs,
 *      et si les deux inputs sont remplis,
 *      on additionne les deux nombres.
 * 3. On affiche le résultat dans #result
 */

//1:

function addCalc(event){
    event.preventDefault();
    let num1 = parseInt(document.querySelector('#input1').value);
    let num2 = parseInt(document.querySelector('#input2').value);

//2:

    let additionInput = num1 += num2;
    let addResult = document.querySelector('#result');
    addResult.textContent = additionInput;
}

//3:

let additionElement = document.querySelector('#container');
additionElement.addEventListener('input', addCalc);



