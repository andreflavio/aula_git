const fruta = prompt("Entre com o nome da fruta:");

let valorSuco = "";

switch (fruta) {
  case "laranja":
    valorSuco = "R$ 3,50";
    break;
  case "limão":
    valorSuco = "R$ 3,00";
    break;
  case "acerola":
    valorSuco = "R$ 3,50";
    break;
    case "manga":
      valorSuco = "R$ 4,00";
      break;
    case "melancia":
      valorSuco = "R$ 4,00";
      break;
    case "morango":
      valorSuco = "R$ 5,00";
      break;
    case "maracujá":
      valorSuco = "R$ 4,50";
      break;
    case "açaí":
      valorSuco = "R$ 6,00";
      break;
    default:
    valorSuco = "Não temos esse suco";
    break;
}

console.log(`O valor do suco de ${fruta} é: ${valorSuco}`);
