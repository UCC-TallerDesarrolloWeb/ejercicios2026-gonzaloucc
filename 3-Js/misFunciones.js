/**
 * Convierte unidades entre metros, pulgadas, pies y yardas
 * @method convertirUnidades
 * @param {string} id - El id del input que cambió
 * @param {number|string} valor - El valor ingresado en el input
 */
function convertirUnidades(id, valor) {
    // Reemplaza comas por puntos en caso de ingresar decimales con coma
    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    // Validación si el valor no es un número
    if (isNaN(valor)) {
        alert("Se ingresó un valor incorrecto en: " + id);
        document.getElementById("metro").value = "";
        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";
    } 
    else if (id === "metro") {
        document.getElementById("pulgada").value = (valor * 39.3701).toFixed(2);
        document.getElementById("pie").value = (valor * 3.28084).toFixed(2);
        document.getElementById("yarda").value = (valor * 1.09361).toFixed(2);
    } 
    else if (id === "pulgada") {
        document.getElementById("metro").value = (valor * 0.0254).toFixed(2);
        document.getElementById("pie").value = (valor * 0.0833333).toFixed(2);
        document.getElementById("yarda").value = (valor * 0.0277778).toFixed(2);
    } 
    else if (id === "pie") {
        document.getElementById("metro").value = (valor * 0.3048).toFixed(2);
        document.getElementById("pulgada").value = (valor * 12).toFixed(2);
        document.getElementById("yarda").value = (valor * 0.333333).toFixed(2);
    } 
    else if (id === "yarda") {
        document.getElementById("metro").value = (valor * 0.9144).toFixed(2);
        document.getElementById("pulgada").value = (valor * 36).toFixed(2);
        document.getElementById("pie").value = (valor * 3).toFixed(2);
    }
}

/**
 * conversion de grados a radianes
 * @method convertirGR
 * @param {string} id - id del elemento imput del html
 */

function convertirGR(id){
    let grad, rad;

    if(id==="grados"){
        grad = document.getElementById("grados").value;
        rad = grad*Math.PI/180;

    } else {
        rad = document.getElementById("radianes").value;
        grad = rad*180/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}