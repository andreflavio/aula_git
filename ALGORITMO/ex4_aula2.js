a = prompt("Entre com o número inteiro:");
b = prompt("Entre com o número inteiro:");
a = parseInt(a);
b = parseInt(b);
resto = a % b;
if(resto ==0){
    console.log(nro,"é múltiplo de", a)
}
else{console.log(nro, "não é multiplo de", a);

}
