function validar(){
    var valordigito1 = document.querySelector("#digito1").value
    var valordigito2 = document.querySelector("#digito2").value
    var valordigito3 = document.querySelector("#digito3").value

    document.querySelector("#mensaje").textContent = "Ingrese un mensaje";

    if(valordigito1 === "9"&&valordigito2 === "1"&&valordigito3 === "1"){
        document.querySelector("#mensaje").textContent = "Password 1 correcto";
    }else if(valordigito1 === "7"&&valordigito2 === "1"&&valordigito3 === "4"){
        document.querySelector("#mensaje").textContent = "Password 2 correcto";
    }else{
        document.querySelector("#mensaje").textContent = "Password incorrecto";    
    }

}
