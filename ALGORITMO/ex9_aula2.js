const peso = parseFloat(prompt("Digite o peso em kg:"));
const altura = parseFloat(prompt("Digite a altura em metros:"));
if (isNaN(peso) || isNaN(altura)) {
  console.log("Por favor, insira valores numéricos válidos.");
} else {
  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do Peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso Ideal (parabéns)";
  } else if (imc >= 25 && imc < 29.9) {
    classificacao = "Levemente acima do peso";
  } else if (imc >= 30 && imc < 34.9) {
    classificacao = "Obesidade Grau I";
  } else if (imc >= 35 && imc < 39.9) {
    classificacao = "Obesidade Grau II (severa)";
  } else if (imc >= 40) { 
    classificacao = "Obesidade Grau III (mórbida)";
  }

  console.log(`O IMC é ${imc.toFixed(2)} e a classificação é: ${classificacao}`);
}
