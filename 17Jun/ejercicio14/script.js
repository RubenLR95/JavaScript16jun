//HIPOTENUSA DE UN TRIÁNGULO RECTÁNGULO

const r = pedirNumero('Inserte el radio del cilindro en cm:');
const a = pedirNumero('Inserte la altura del cilindro en cm:')

const V =( 3.14 * (r, 2) * a); 

alert(`El volumen de tu cilindro es de ${V.toFixed(2)} cm`);



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






