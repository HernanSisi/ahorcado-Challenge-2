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
    fondoPerdedor = document.querySelector("#fondo-incorrecto");

    error1 = document.querySelector("#error-1");
    error2 = document.querySelector("#error-2");
    error3 = document.querySelector("#error-3");
    error4 = document.querySelector("#error-4");
    error5 = document.querySelector("#error-5");
    error6 = document.querySelector("#error-6");
}, 100);


crearteclado();

