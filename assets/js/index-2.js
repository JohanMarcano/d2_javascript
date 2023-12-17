// Eventos del DOM

//Variables

// Funciones 
function calcularStickers() {
    const cantidadSticker1 = parseInt(document.getElementById("cantidadSticker1").value) || 0;
    const cantidadSticker2 = parseInt(document.getElementById("cantidadSticker2").value) || 0;
    const cantidadSticker3 = parseInt(document.getElementById("cantidadSticker3").value) || 0;

    const sumaTotal = cantidadSticker1 + cantidadSticker2 + cantidadSticker3;
    // Mostrar el resultado
    const resultadoParrafo = document.getElementById("resultado");
    if (sumaTotal <= 10) {
        resultadoParrafo.textContent = `Llevas ${sumaTotal} sticker${sumaTotal !== 1 ? 's' : ''}.`;
    } else {
        resultadoParrafo.textContent = "NO puedes llevar más de 10 stickers";
    }
}

// ${sumaTotal} INTERPOLACIÓN - meter una variable en el medio del texto

// Eventos


