let abcdario ="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

function crearteclado() {
    let tecladoDiv = document.querySelector("#teclado");
    for (let i = 0; i < abcdario.length; i++) {
        const temp = abcdario[i];
        var botonLetra = document.createElement("button");
        botonLetra.textContent = temp;
        botonLetra.classList.add("boton-normal");
        botonLetra.classList.add("tecla");
        botonLetra.id = "letra-" + abcdario[i];
        botonLetra.addEventListener("click", () => {
            let letra = abcdario[i];
            console.log(letra);
            if (vidas < 6 && sigueElJuego) {
                document.querySelector("#letra-" + letra).classList.toggle("boton-normal");
                let aux = document.querySelectorAll(".letras-" + letra);
                if (aux.length > 0) {
                    document.querySelector("#letra-" + letra).classList.toggle("boton-correcto");
                    aux.forEach(i => {
                        i.classList.remove("oculto-respuesta");
                    });
                    puntosVictoria -= aux.length;
                    if (puntosVictoria == 0) {
                        let cajaMensaje = document.querySelector("#hijo-caja-mensaje");
                        cajaMensaje.classList.add("gano");
                        sigueElJuego = false;
                        fondoGanador.classList.toggle("oculto");
                        fondoNormal.classList.toggle("oculto");
                    }
                } else {
                    document.querySelector("#letra-" + letra).classList.toggle("boton-error");
                    vidas++;
                    estadovida();
                }
            }
        },{once: true});
        tecladoDiv.appendChild(botonLetra);
    }
}
