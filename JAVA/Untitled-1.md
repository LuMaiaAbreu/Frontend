
# Loops 

For([expressão inicial], [condição],incremento); {

}

while([condição]){
    (execução)
}

do{
    [execução]
}
while(condição)

# Funções

- evitar repetição de codigos  
- realizar chamadas dinamicas de algoritimos


function calcularMedia( notas ){

    let soma = 0;
    for( c = 0; c < notas.length; c++) 
    
    {   soma  +=  notas [c];  }

    media = soma / notas.length;

    return media;
    
}

function aprovacao (notas){
	
  let media = calcularMedia( notas );
  
	let condicao = media >= 7 ? "Aprovado!!!" : "Reprovado!!!";
    
  return "Media: " + media + " - Resultado: " + condicao;
}

console.log( aprovacao([10,5,6]));