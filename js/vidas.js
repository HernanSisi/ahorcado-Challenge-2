var vidas = 0;
function estadovida() {
    if (vidas==1) {
        error1.classList.toggle("oculto");
    }  else if (vidas==2) {
        error2.classList.toggle("oculto");
    } else if (vidas==3) {
        error3.classList.toggle("oculto");
    } else if (vidas==4) {
        error4.classList.toggle("oculto");
    } else if (vidas==5) {
        error5.classList.toggle("oculto");
    } else if (vidas==6) {
        error6.classList.toggle("oculto");
        fondoPerdedor.classList.toggle("oculto");
        fondoNormal.classList.toggle("oculto");
    }
}