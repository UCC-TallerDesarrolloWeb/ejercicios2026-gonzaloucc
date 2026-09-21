/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function convertirUnidades=(id, value){

    if(isNaN(valor)){

        alert("se ingreso un valor incorrecto: "+id);
        document.getElementById("metro").value = "";
        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";

    } else if(id==="metro"){

        document.getElementById("pulgada").value = valor*39.3701;
        document.getElementById("pie").value = valor*3.28084;
        document.getElementById("yarda").value = valor*1.09361;

    } else if(id==="pie"){

    } else if(id==="yarda"){

    } else if(id==="pulgada"){

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