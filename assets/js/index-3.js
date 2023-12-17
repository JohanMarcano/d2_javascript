// Eventos del DOM



//Variables



// Funciones 
function verificarPassword() {
    const password1 = document.getElementById("passwordSelect1").value;
    const password2 = document.getElementById("passwordSelect2").value;
    const password3 = document.getElementById("passwordSelect3").value;

    // Concatenar los valores para formar el password completo
    const passwordCompleto = password1 + password2 + password3;

    // Verificar el password y mostrar el resultado
    const resultadoParrafo = document.getElementById("resultado");

    if (passwordCompleto === "911") {
        resultadoParrafo.textContent = "Password 1 correcto";
    } else if (passwordCompleto === "714") {
        resultadoParrafo.textContent = "Password 2 correcto";
    } else {
        resultadoParrafo.textContent = "Password incorrecto";
    }
}


// Eventos
