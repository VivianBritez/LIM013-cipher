import {cifrar, descifrar} from "./cipher.js";

function mostrarEsconder(elementoIdMostrar){
  let elementos= document.querySelectorAll(".bloques");
  for (let i= 0;i < elementos.length; i++){
    //guarda elementos
    let el= elementos[i];
    if(el.id== elementoIdMostrar){
    el.style.display="block";
    }
    else{
      el.style.display="none";
    }
  }
}
document.getElementById("borrar").addEventListener("click", function(){
  document.getElementById("mensaje").value="";
  document.getElementById("mensaje2").value="";

});


document.getElementById("empezar").addEventListener("click", function() {
  mostrarEsconder("content");
  document.getElementById("instrucciones").style.display="none";
  document.getElementById("inicio").style.display="none";

  //document.getElementById("descifrar").style.display="none";

});

/*

document.getElementById("desencriptar").addEventListener("click", function() {
  mostrarEsconder("content");
  document.getElementById("cifrar").style.display="none";
 
});
document.getElementById("volver").addEventListener("click", function(){
  mostrarEsconder("content");
});*/


window.addEventListener("load", inicio, true);

  function inicio(){
    document.getElementById("mensaje").addEventListener("keyup", function(){
    mensaje.value= mensaje.value;
            
  }, true)
    document.getElementById("cifrar").addEventListener("click", function(){
    let texto =document.getElementById("mensaje").value;
    let desplazamiento= document.getElementById("desplazamiento").value;
    document.getElementById("mensaje2").value =cifrar(texto, desplazamiento);  
  }, true);

  document.getElementById("descifrar").addEventListener("click",function(){
    let texto= document.getElementById("mensaje").value;
    let desplazamiento = document.getElementById("desplazamiento").value;
    document.getElementById("mensaje2").value = descifrar(texto, desplazamiento);
  }, true);
}
