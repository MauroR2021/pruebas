const elemento = document.querySelector('#pulsador');

elemento.addEventListener("click", function(){
    alert("ME HAN PULSADO");

    setTimeout(() => {
        alert("VOLVÍ");
    }, 5000);
});

