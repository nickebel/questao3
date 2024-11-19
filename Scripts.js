console.log("Ajuda mesmo ele");
function verificarMaior() {
    
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);


    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor, insira três números válidos.");
        return;
    }

    var maior = num1;

    if (num2 > maior) {
        maior = num2;
    }
    if (num3 > maior) {
        maior = num3;
    }

 
    document.getElementById("resultado").innerText = "O maior número é: " + maior;
}
