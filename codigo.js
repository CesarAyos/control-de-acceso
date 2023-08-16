let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿que edad tienes?");
    if (edad > 18){
    if (time >= 2 && time < 7 && free == false){
        alert ("bienvenido, puedes pasar gratis, eres la primera persona despues de las 2 Am");
        free = true;
    } else {
        alert(`son las ${time}:00Hs , puedes pasar pero debes pagar tu entrada`)
    }

    } else {
        alert("Eres menor de edad no puedes ingresar")
    }
}



validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);