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


/* formulario para envio de dados para calculo da média*/

document.getElementById("formulario01").addEventListener("submit", function(evento) {

  evento.preventDefault();

  if(this.classList.match(/erro/)){
    return false;
  }

  let dados = new FormData(this);

  let notas = []; 
this.querySelector
  for(let key of dados.keys()){

    let numero =  dados.get(key).match(/\d*/) ? Number (dados.get(key)): 0;

    if(!isNaN (numero)){
      notas.push(numero);
    }
   

    // adicona itens no array  
    notas.push(parseInt(dados.get(key)));

  }

  console.log(notas);

  document.getElementById("resultado").innerHTML = aprovacao(notas);

});


function validacampo (elemento){

 elemento.addEventListener("focusout", function(event){

    event.preventDefault();

    if(this.value == ""){
      
      document.querySelector('.mensagem').innerHTML = "verifique o preenchimento do campo em vermelho";
      this.classList.add('erro');
      this.parentNode.classList.add("erro");
      return false;
    }

    else{
      document.querySelector('.mensagem').innerHTML = '';
      this.classList.remove('erro');
      this.parentNode.classList.remove("erro");
    }

});
}

function validacamponumerico (elemento){

  elemento.addEventListener("focusout", function(event){
 
     event.preventDefault();
 
     if(this.value != "" && this.value.match(/[0-9]*/) &&  this.value >= 0 && this.value <=10 ){

      document.querySelector('.mensagem').innerHTML = '';
      this.classList.remove('erro');
      this.parentNode.classList.remove("erro");

       
     }
 
     else{
       document.querySelector('.mensagem').innerHTML = "verifique o preenchimento do campo em vermelho";
       this.classList.add('erro');
       this.parentNode.classList.add("erro");
       return false;
     }
 
 });
 }

let camposobrigatorios = document.querySelectorAll("input.obrigatorio");
let camposnumeros = document.querySelectorAll("input.numero");


for( let emfoco  of camposobrigatorios){
    validacampo(emfoco);

}

for( let emfoco  of camposnumeros){
  validacamponumerico(emfoco);

}
