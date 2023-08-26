const temperatura = parseFloat(prompt("Digite a temperatura corporal:"));

let classificacao = "";

if (isNaN(temperatura)) {
  classificacao = "Por favor, insira um valor numérico válido.";
} else if (temperatura < 35.0) {
  classificacao = "Hipotermia";
} else if (temperatura >= 35.0 && temperatura < 37.5) {
  classificacao = "Normal";
} else if (temperatura >= 37.5 && temperatura < 38.0) {
  classificacao = "Febre";
} else {
  classificacao = "Febre Alta";
}

console.log(`A classificação da temperatura é: ${classificacao}`);
