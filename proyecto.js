function registrarUsuario() {
    let nombreUsuario = prompt("Ingrese su nombre");
}


// Función que da inicio al registro de usuario.
registrarUsuario();


function convertir(){
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let TresCoutas = 10;
    let SeisCoutas = 20;
    let DoceCoutas = 30;
    
    if (document.getElementById("uno").checked){
        resultado = valore * TresCoutas / 100 + valore;
        alert(`Hola ${nombreUsuario}+su pago es ${resultado} `);
    }
    else if (document.getElementById("dos").checked){
        resultado = valore * SeisCoutas / 100 + valore;
        alert(`Hola ${nombreUsuario}+su pago es ${resultado} `);
    }

    else if (document.getElementById("tres").checked){
        resultado = valore * DoceCoutas / 100 + valore;
        alert(`Hola ${nombreUsuario}+su pago es ${resultado} `);
    }
    else{
        alert("tienes que completar los datos")
    }
}


