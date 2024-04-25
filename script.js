document.getElementById("form-imc").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado
    
    // Pegar os valores de peso e altura do formulário
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    // Calcular o IMC
    var imc = peso / (altura * altura);

    // Mostrar a mensagem com base no IMC calculado
    var mensagem;
    if (imc < 18.5) {
        mensagem = "Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc < 25) {
        mensagem = "Seu peso está normal.";
    } else if (imc >= 25 && imc < 30) {
        mensagem = "Você está com sobrepeso.";
    } else {
        mensagem = "Você está obeso.";
    }

    // Exibir a mensagem no HTML
    document.getElementById("resultado").innerHTML = "<p>Seu IMC é: " + imc.toFixed(2) + "</p><p>" + mensagem + "</p>";
});