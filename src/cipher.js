alert("hola mundo");
import mensaje from './index.js';
const cipher = (userMessage, n) => {
  let result= "", codigo;
  for(let i= 0; i < userMessage.length; i++){
    //mayuscula 65 al 91
    if(userMessage.charCodeAt(i)>= 65 && userMessage.charCodeAt(i)<=90){
      codigo= (((userMessage.charCodeAt(i)-65)+n)%26)+65;  
    }
    // minuscula 97-202
    else if( userMessage.charCodeAt(i)>=97 && userMessage.charCodeAt(i)<=122){
      codigo= (((userMessage.charCodeAt(i)-97)+n)%26)+97;
    }
    // 32 es espacio 
    else if(userMessage.charCodeAt(i)===32){
      code=32;
    }
    result+= userMessage.fromCharCode(codigo);
  }
  return result;
  // ...
};

export default cipher;
