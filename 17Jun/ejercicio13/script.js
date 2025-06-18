//HIPOTENUSA DE UN TRIÁNGULO RECTÁNGULO

const km = pedirNumero('Inserte kilómetros:');

const millas = (km * 0.621371);

alert(`${km.toFixed(2)} km equivalen a ${millas.toFixed(2)} millas`);



function pedirNumero(mensaje) {

    let valor;

    do {

        const entrada = prompt(mensaje);

        valor = Number(entrada);

        if (Number.isNaN(valor)) {
            alert("Entrada no válida. Por favor, ingresa un número.")

        }

    }
    while (Number.isNaN(valor));

    return valor;


}






