document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('svg[data-src]').forEach(svg => {
        fetch(svg.dataset.src).then(respuesta => 
            respuesta.text()).then(xml => 
                svg.innerHTML = xml);
    });
});
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
    fondoGanador.classList.toggle("oculto");
    fondoPerdedor = document.querySelector("#fondo-incorrecto");
    fondoPerdedor.classList.toggle("oculto");


    error1 = document.querySelector("#error-1");
    error1.classList.toggle("oculto");
    error2 = document.querySelector("#error-2");
    error2.classList.toggle("oculto");
    error3 = document.querySelector("#error-3");
    error3.classList.toggle("oculto");
    error4 = document.querySelector("#error-4");
    error4.classList.toggle("oculto");
    error5 = document.querySelector("#error-5");
    error5.classList.toggle("oculto");
    error6 = document.querySelector("#error-6");
    error6.classList.toggle("oculto");

}, 100);
