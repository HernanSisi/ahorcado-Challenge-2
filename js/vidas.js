var vidas = 0;
var sigueElJuego = true;
var puntosVictoria = 0;
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
    } else if (vidas>=6) {
        error6.classList.toggle("oculto");
        fondoPerdedor.classList.toggle("oculto");
        fondoNormal.classList.toggle("oculto");
        sigueElJuego=false;
        let cajaMensaje = document.querySelector("#hijo-caja-mensaje");
        cajaMensaje.classList.add("perdio");
        let letrasFaltantes = document.querySelectorAll(".oculto-respuesta");
        letrasFaltantes.forEach(i => {
            i.classList.remove("oculto-respuesta");
            i.classList.add("letra-faltante");
        });
    }
}
function resetvida() {
    for (let x = 1; x < 7; x++) {
        let listadoerrores = [error1,error2,error3,error4,error5,error6,fondoPerdedor,fondoGanador];
        listadoerrores.forEach(element => {
            if (!(element.classList=="oculto")){
                element.classList.toggle("oculto");
            } 
        });
        if (fondoNormal.classList=="oculto"){
            fondoNormal.classList.toggle("oculto");
        } 
    }
    let cajaMensaje = document.querySelector("#hijo-caja-mensaje");
    cajaMensaje.classList.remove("gano");
    cajaMensaje.classList.remove("perdio");
    sigueElJuego=true;
    let aux = document.querySelectorAll(".tecla");
    aux.forEach(i => {
        i.remove();
    });
    crearteclado();
}