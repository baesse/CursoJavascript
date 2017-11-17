

/// alteração de valores a partir da classe css
var titulo=document.querySelector(".titulo")
titulo.textContent="Aparecida Nutricionista";

/// fim alteração de valores a partir da classe css



/// pegar valores em uma tabela
var pacientes =document.querySelectorAll(".paciente");
for(var i=0;i<pacientes.length;i++){

    peso=pacientes[i].querySelector(".info-peso").textContent;
    var altura=pacientes[i].querySelector(".info-altura").textContent;
    var imc =pacientes[i].querySelector(".info-imc") 
       
    
    var pesovalido=true;
    var alturavalida=true   
    
    if(peso < 0 || peso>=1000){
    
        alert("Peso invalido")
        pesovalido=false
    
    }
    if(altura<0||altura>3){
    
            alert("Altura invalida");
            alturavalida=false    
    }    
    if(pesovalido && alturavalida){    
        imc.textContent=(peso/(altura*altura)).toFixed(2);       

    }

}
/// fim pegar peso em uma tabela