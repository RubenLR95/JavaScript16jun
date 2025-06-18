//HIPOTENUSA DE UN TRIÁNGULO RECTÁNGULO

const cateto1 = pedirNumero('Inserte longitud en centímetros del primer cateto:');
const cateto2 = pedirNumero('Inserte longitud en centímetros del segundo cateto:');

const hipotenusa = Math.hypot(cateto1, cateto2); 

alert(`La suma de ambos catetos es igual a la longitud total de su hipotenusa, que es: ${hipotenusa.toFixed(2)} cm`);



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






