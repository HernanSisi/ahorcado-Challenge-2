let abcdario ="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

function crearteclado() {
    let tecladoDiv = document.querySelector("#teclado");
    for (let i = 0; i < abcdario.length; i++) {
        const temp = abcdario[i];
        var botonLetra = document.createElement("button");
        botonLetra.textContent = temp;
        botonLetra.classList.add("boton-normal");
        botonLetra.id = "letra-" + abcdario[i];
        botonLetra.addEventListener("click",()=>{
            let letra = abcdario[i];
            if (vidas <6) {
                console.log(letra);
                document.querySelector("#letra-"+letra).classList.toggle("boton-normal");
                if (Math.random()*10>=5) {
                document.querySelector("#letra-"+letra).classList.toggle("boton-correcto");
                } else {
                    document.querySelector("#letra-"+letra).classList.toggle("boton-error");
                    vidas++;
                    estadovida();
                }
            }
        },{once: true});
        tecladoDiv.appendChild(botonLetra);
    }
}
