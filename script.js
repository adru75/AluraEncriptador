
const texto_in = document.querySelector("#texto-entrada");
const texto_out = document.querySelector("#texto-salida");

function encriptar() {
    const texto = texto_in.value;
    texto_out.value = encriptarTexto(texto);
    texto_in.value ="";
}

function desencriptar() {
    const texto = texto_in.value;
    texto_out.value = desencriptarTexto(texto);
    texto_in.value ="";
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoEncriptado = "";

    for( var i=0; i < texto.length; i++) {
        if(texto[i] == "a") {
            textoEncriptado = textoEncriptado + "ai";
        }
        else if(texto[i] == "e") {
            textoEncriptado = textoEncriptado + "enter";
        }
        else if(texto[i] == "i") {
            textoEncriptado = textoEncriptado + "imes";
        }
        else if(texto[i] == "o") {
            textoEncriptado = textoEncriptado + "ober";
        }
        else if(texto[i] == "u") {
            textoEncriptado = textoEncriptado + "ufat";
        }
        else {
            textoEncriptado = textoEncriptado + texto[i];
        }
    }
    return textoEncriptado;
}

function desencriptarTexto(mensaje) {
    var textoEncriptado = mensaje;
    var Matriz2 = [
        { letra: "a", valor: "ai" },
        { letra: "e", valor: "enter" },
        { letra: "i", valor: "imes" },
        { letra: "o", valor: "ober" },
        { letra: "u", valor: "ufat" }
    ];

    for (let i = 0; i < Matriz2.length; i++) {
        if (textoEncriptado.includes(Matriz2[i].valor)) {
            textoEncriptado = textoEncriptado.replaceAll(Matriz2[i].valor, Matriz2[i].letra);
        }
    }
    return textoEncriptado;
}

function botonCopiar() {
    var textoCopiado = document.querySelector("#texto-salida");
    navigator.clipboard.writeText(textoCopiado.value);
}