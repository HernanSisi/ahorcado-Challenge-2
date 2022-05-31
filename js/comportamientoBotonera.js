let botonIniciarJuego = document.querySelector(".iniciar-juego");
botonIniciarJuego.addEventListener("click",function() {
    let seccionMenuInicio = document.querySelector(".menu-inicio");
    seccionMenuInicio.classList.add("desactivado");
    let seccionJuego = document.querySelector(".Juego");
    seccionJuego.classList.remove("desactivado");
})


let botonVolverMenuPrincipal = document.querySelectorAll(".volver-menu-principal");
botonVolverMenuPrincipal.forEach(element => {
    element.addEventListener("click",function() {
        let seccionMenuInicio = document.querySelector(".menu-inicio");
        seccionMenuInicio.classList.remove("desactivado");
        let seccionJuego = document.querySelector(".Juego");
        seccionJuego.classList.add("desactivado");
        let seccionAgregarPalabra = document.querySelector(".agregar-palabra");
        seccionAgregarPalabra.classList.add("desactivado");
    })
});


let botonReinicio = document.querySelector(".boton-reinicio");
botonReinicio.addEventListener("click",reinicio);

let botonAgregarPalabra = document.querySelector(".boton-agregar-palabra");
botonAgregarPalabra.addEventListener("click",function () {
    let seccionMenuInicio = document.querySelector(".menu-inicio");
    seccionMenuInicio.classList.add("desactivado");
    let seccionAgregar = document.querySelector(".agregar-palabra");
    seccionAgregar.classList.remove("desactivado");
})


let ingresarpalabra = document.querySelector("#nueva-palabra-campo")
ingresarpalabra.addEventListener("input", function(){
    if (!ingresarpalabra.checkValidity()) {
        ingresarpalabra.classList.add("valor-no-permitido");
    } else { 
        ingresarpalabra.classList.remove("valor-no-permitido");
    }
});

let botonNuevaPalabra = document.querySelector(".boton-nueva-palabra");
botonNuevaPalabra.addEventListener("click",function () {
    if (ingresarpalabra.checkValidity()) {
        let palabra = ingresarpalabra.value.toUpperCase();
        PalabrasOriginales.push(palabra);
        let aux = document.querySelector(".palabra-agregada");
        aux.textContent="La palabra "+palabra+" se agregego correctamente";
        ingresarpalabra.value="";
        setTimeout(() => {
            aux.textContent="";
        }, 2000);
    }
})


