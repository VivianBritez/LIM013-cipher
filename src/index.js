alert("soy index");

import cipher from './cipher.js';
console.log(cipher);
let mensaje= document.querySelector("#mensaje");
if(mensaje){
    mensaje.addEventListener("submit", function() {
        // saca el valor de mensaje
    let userMessage= document.getElementById("userMensaje1")[0].value;
        cipher(userMessage, 22);
});
};
console.log(cipher);

export default mensaje;
