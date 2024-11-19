console.log("Ajuda mesmo ele");
function calcularMedia() {
   
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

    
    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert("Por favor, insira notas válidas entre 0 e 10.");
        return;
    }

  
    var media = (nota1 + nota2) / 2;

    
    var resultado = "";
    if (media == 10) {
        resultado = "Aprovado com Distinção!";
    } else if (media >= 7) {
        resultado = "Aprovado!";
    } else {
        resultado = "Reprovado!";
    }

    document.getElementById("resultado").innerText = "Média: " + media.toFixed(2) + " - " + resultado;
}