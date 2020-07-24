export function cifrar(texto, desplazamiento){
  let result= "", mensaje2;
  desplazamiento= (desplazamiento %26 + 26)%26;
  for(let i= 0; i < texto.length; i++){
    //mayuscula 65 al 90
    if(texto.charCodeAt(i)>= 65 && texto.charCodeAt(i)<= 90){
      mensaje2= (((texto.charCodeAt(i)-65)+desplazamiento)%26)+65;  
    }
    // minuscula 97-202
    else if( texto.charCodeAt(i)>=97 && texto.charCodeAt(i)<=202){
      mensaje2= (((texto.charCodeAt(i)-97)+desplazamiento)%26)+97;
    }
    else if( texto.charCodeAt(i)>=48 && texto.charCodeAt(i)<=57){
      mensaje2= (((texto.charCodeAt(i)-48)+desplazamiento)%26)+48;
    }
    // 32 es espacio 
    else if(texto.charCodeAt(i)===32){
      mensaje2=32;
    }
    result+= String.fromCharCode(mensaje2);
  }
  return result;
}
  export function descifrar(texto, desplazamiento){
   let result= "", mensaje2;
  desplazamiento= (desplazamiento %26 + 26)%26;
  for(let i= 0; i < texto.length; i++){
    //mayuscula 65 al 90
    if(texto.charCodeAt(i)>= 65 && texto.charCodeAt(i)<= 90){
      mensaje2= (((texto.charCodeAt(i)-65)-desplazamiento)%26)+65;  
    }
    // minuscula 97-202
    else if( texto.charCodeAt(i)>=97 && texto.charCodeAt(i)<=202){
      mensaje2= (((texto.charCodeAt(i)-97)-desplazamiento)%26)+97;
    }
    else if( texto.charCodeAt(i)>=48 && texto.charCodeAt(i)<=57){
      mensaje2= (((texto.charCodeAt(i)-48)-desplazamiento)%26)+48;
    }
    // 32 es espacio 
    else if(texto.charCodeAt(i)===32){
      mensaje2=32;
    }
    result+= String.fromCharCode(mensaje2);
  }
  return result;
}
  