 const cipher={ //cipher es un objeto , los metodos son encode y decode
 encode: (texto, desplazamiento )=>{
  let result= "", mensaje2; 
  desplazamiento= parseInt(desplazamiento); 
  for(let i= 0; i < texto.length; i++){
    //mayuscula 65 al 90
    if(texto.charCodeAt(i)>= 65 && texto.charCodeAt(i)<= 90){
      mensaje2= (((texto.charCodeAt(i)-65 + desplazamiento)%26+26)%26)+65; 
    }
    // minuscula 97-202
    else if( texto.charCodeAt(i)>=97 && texto.charCodeAt(i)<=202){
      mensaje2= (((texto.charCodeAt(i)-97 + desplazamiento)%26+26)%26)+97;
    }
    /*
    //numeros
    else if( texto.charCodeAt(i)>=33 && texto.charCodeAt(i)<=64){
      mensaje2= (((texto.charCodeAt(i)-33 + desplazamiento)%32+32)%32)+33;
    }
  */
    // 32 es espacio 
    else if(texto.charCodeAt(i)===32){
      mensaje2=32;
    }
    
   
    result+= String.fromCharCode(mensaje2); 
  } 
  return result;
 },

  decode: (texto, desplazamiento)=>{
   let result= "", mensaje2;
  desplazamiento= parseInt(desplazamiento);
  for(let i= 0; i < texto.length; i++){
    //mayuscula 65 al 90
    if(texto.charCodeAt(i)>= 65 && texto.charCodeAt(i)<= 90){
      mensaje2= (((texto.charCodeAt(i)-65-desplazamiento)%26 +26)%26)+65;  
    }
    // minuscula 97-202
    else if( texto.charCodeAt(i)>=97 && texto.charCodeAt(i)<=202){
      mensaje2= (((texto.charCodeAt(i)-97-desplazamiento)%26 +26)%26)+97;
    }

    // 32 es espacio 
    else if(texto.charCodeAt(i)===32){  
      mensaje2=32;
    }
  
    result+= String.fromCharCode(mensaje2);
  }
  return result;
  }
};
export default cipher;
