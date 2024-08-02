const operator = document.querySelector("#operadores");

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");

const button = document.querySelector("#calcular")

function calcular(){
    let resultado = 0

    const number1 = parseFloat(num1.value || 0);
    const number2 = parseFloat(num2.value || 0);

    console.log(number1, number2)

    switch(operator.value){
        case '+':
            resultado = number1 + number2
            break
        case '-':
            resultado = number1 - number2
            break
        case '/':
            resultado = number1 / number2
            break
        case '*':
            resultado = number1 * number2
            break
        default:
            alert("Selecione um operador")
            resultado = null
            break
    }

    return resultado;
};

button.addEventListener("click", e => {
    const resultado = document.querySelector("#resultado");

    resultado.innerHTML = calcular();
})