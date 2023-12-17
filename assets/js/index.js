// Eventos del DOM
const img = document.querySelector("img");

//Variables
let state = false;

// Funciones 


// Eventos
img.addEventListener("click", function() {
    console.log("Hiciste click acá");
    if (state === false) {
        img.style.border = "5px solid red";
        state = true;
    } else {
        img.style.border = "none";
        state = false;
    }
});


// !state = se usa para negar la variable 