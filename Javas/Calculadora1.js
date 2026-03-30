let tela = document.getElementById("tela");
let currentInput = ""
let currentOperator = ""

function Numero1(value){
    currentInput += value
    tela.textContent = currentInput

}

function reset(value){
    value = "  "
}
