function validar(){
    text_stick1 = document.querySelector("#stick_1").value
    text_stick2 = document.querySelector("#stick_2").value
    text_stick3 = document.querySelector("#stick_3").value

    valor_stick1 = Number(text_stick1)
    valor_stick2 = Number(text_stick2)
    valor_stick3 = Number(text_stick3)

    total = valor_stick1+valor_stick2+valor_stick3

    text_stick1.innerText = '5'
    texto_paso = document.querySelector("#texto_validado")

    if(total <= 10){
        texto_paso.innerHTML = 'Has seleccionado '+total+' stickers'
    }else{
        texto_paso.innerHTML = 'Llevas demasiados Stickers. Máximo deben ser 10'
    }
}
