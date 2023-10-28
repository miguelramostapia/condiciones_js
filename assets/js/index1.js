function modifica_bordes(){
    figura = document.getElementById('img1');
    if(figura.style.border){
        figura.style.border=''
    }else{
        figura.style.border='3px solid red';
    }
}
