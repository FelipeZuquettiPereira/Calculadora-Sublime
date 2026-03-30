let tela = document.getElementById("tela");

function Numero1(value) {
    if (value === '=') {
       
        tela.textContent = eval(tela.textContent);
    } else {
       
        tela.textContent += value;
    }
}

function reset() {
   
    tela.textContent = "";
}