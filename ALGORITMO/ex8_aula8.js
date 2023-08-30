const temperatura = parseFloat(prompt("Digite a temperatura corporal:"));

let classificacao = "";

if (isNaN(temperatura)) {
  classificacao = "Por favor, insira um valor numérico válido.";
} else if (temperatura <= 35.0) {
  classificacao = "Hipotermia";
} else if (temperatura >= 35.0 && temperatura < 37.7) {
  classificacao = "Normal";
} else if (temperatura >= 37.8 && temperatura < 39.5) {
  classificacao = "Febre";
} else if (temperatura >= 39.6 && temperatura < 41) {
  classificacao = "Febre Alta";
} else if (temperatura >= 41) {
  classificacao = "Hipertemia";
}
  
console.log(`A classificação da temperatura é: ${classificacao}`);
