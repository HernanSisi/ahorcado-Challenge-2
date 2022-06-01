/*document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('svg[data-src]').forEach(svg => {
        fetch(svg.dataset.src).then(respuesta =>
            respuesta.text()).then(xml =>
                svg.innerHTML = xml);
        svg.removeAttribute("data-src");
    });
});*/
var divespacios = document.querySelector(".palabra");
var fondoNormal;
var fondoGanador;
var fondoPerdedor;
var error1;
var error2;
var error3;
var error4;
var error5;
var error6;
setTimeout(() => {

    fondoNormal = document.querySelector("#fondo-normal");
    fondoGanador = document.querySelector("#fondo-correcto");
    fondoPerdedor = document.querySelector("#fondo-incorrecto");

    error1 = document.querySelector("#error-1");
    error2 = document.querySelector("#error-2");
    error3 = document.querySelector("#error-3");
    error4 = document.querySelector("#error-4");
    error5 = document.querySelector("#error-5");
    error6 = document.querySelector("#error-6");
}, 100);
function generarespacio(letra) {
    var contenedorLetrasEspacio = document.createElement("div");
    contenedorLetrasEspacio.classList.add("letras-" + letra);
    contenedorLetrasEspacio.classList.add("pistas");
    contenedorLetrasEspacio.classList.add("oculto-respuesta");
    var letraespacio = document.createElement("p");
    letraespacio.textContent = letra;
    var lineaEspacio = document.createElement("div");
    lineaEspacio.setAttribute("style", "height:10px;width:30px;background-color:var(--color-letras);border-radius: 6px;transition: .5s;");
    contenedorLetrasEspacio.appendChild(letraespacio);
    contenedorLetrasEspacio.appendChild(lineaEspacio);
    divespacios.appendChild(contenedorLetrasEspacio);
}

function GenerarPalabra() {
    let pos = Math.round((Math.random() * 100) % (PalabrasOriginales.length - 1));
    var palabraSeleccionada = PalabrasOriginales[pos];
    PalabrasOriginales.splice(pos, 1);
    return palabraSeleccionada;
}

function GenerarJuego() {
    while (divespacios.hasChildNodes()) {
        divespacios.removeChild(divespacios.firstChild);
    }
    let palabraSeleccionada = GenerarPalabra();
    puntosVictoria = 0;
    puntosVictoria = palabraSeleccionada.length;
    for (let i = 0; i < palabraSeleccionada.length; i++) {
        generarespacio(palabraSeleccionada[i]);
    }
}

function reinicio() {
    if (PalabrasOriginales.length == 0) {
        window.location.reload();
    }
    var letrasTeclado = [];
    letrasTeclado = document.querySelectorAll(".boton-correcto");
    letrasTeclado.forEach(i => {
        i.classList.remove("boton-correcto");
        i.classList.add("boton-normal");
    });
    letrasTeclado = [];
    letrasTeclado = document.querySelectorAll(".boton-error");
    letrasTeclado.forEach(i => {
        i.classList.remove("boton-error");
        i.classList.add("boton-normal");
    });
    vidas = 0;
    resetvida();
    GenerarJuego();
}
crearteclado();
GenerarJuego();