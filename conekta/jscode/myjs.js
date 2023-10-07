var precio;

var asignarPrecioButton = document.getElementById("precioMes");

asignarPrecioButton.addEventListener("click", function() {
    precio = "$199";
});



// Obtener el elemento donde se mostrará el precio
var mostrarPrecioElement = document.getElementById("mostrarPrecio");

// Mostrar el valor de la variable precio (que se estableció en index.html)
mostrarPrecioElement.textContent = precio || "No se ha asignado un precio aún";




function mensualJS(){
    precio = 199;
}

function semestralJS(){
    precio = 1075;
}

function anualJS(){
    precio = 1910;
}

var mostrar = document.getElementById('precioTotal');
mostrar.innerHTML = precio;




