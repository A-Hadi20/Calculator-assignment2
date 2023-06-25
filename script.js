let doSum = (event) => {
    event.preventDefault();

    let num1 = +document.querySelector("#num1").value;
    let num2 = +document.querySelector("#num2").value;

    let result = num1 + num2;

    document.querySelector("#result").innerHTML = result;
};

document.querySelector("#add-btn").addEventListener('click', doSum);

let doSubtraction = (event) => {
    event.preventDefault();

    let num1 = +document.querySelector("#num1").value;
    let num2 = +document.querySelector("#num2").value;

    let result = num1 - num2;

    document.querySelector("#result").innerHTML = result;
};

document.querySelector("#sub-btn").addEventListener('click', doSubtraction);

let doMultiplication = (event) => {
    event.preventDefault();

    let num1 = +document.querySelector("#num1").value;
    let num2 = +document.querySelector("#num2").value;

    let result = num1 * num2;

    document.querySelector("#result").innerHTML = result;
};

document.querySelector("#multi-btn").addEventListener('click', doMultiplication);

let doDivision = (event) => {
    event.preventDefault();

    let num1 = +document.querySelector("#num1").value;
    let num2 = +document.querySelector("#num2").value;

    let result = num1 / num2;

    document.querySelector("#result").innerHTML = result;
};

document.querySelector("#div-btn").addEventListener('click', doDivision);

document.querySelector("#clear-btn").addEventListener('click', () => {
    document.querySelector("#num1").value = "";
    document.querySelector("#num2").value = "";
    document.querySelector("#result").innerHTML = "";
});