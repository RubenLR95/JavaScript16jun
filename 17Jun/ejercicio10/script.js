

//PEDIMOS PRECIO DEL PRODUCTO Y PORCENTAJE A APLICAR
const precio = pedirNumero("Ingrese el precio de su producto:");
const porcentaje = pedirNumero("Ingrese (solo con números) el porcentaje de descuento que quiere aplicarle (Ej: 00, 09, 30):");





// 5. CALCULAMOS PORCENTAJE INTRODUCIDO DEL PRECIO INTRODUCIDO, Y SE RESTA AL PRECIO INTRODUCIDO, DANDO COMO RESULTADO EL PRECIO REBAJADO

const descuento = (precio) - ((precio) * ((porcentaje) / 100));

alert(`El precio de su producto con ${porcentaje}% de descuento es de ${descuento.toFixed(2)}.`);


// re-promp hasta que el numero sea válido
// Función auxiliar que pide un número hasta la conversión con Number no sea un NaN
//SE DECLARA LA FUNCIÓN pedirNumero(mensaje) = promp(mensaje)
function pedirNumero(mensaje) {
    //EMPIEZA NOMBRANDO UNA VARIABLE "valor"
    let valor;
    // GENERAMOS UN BUCLE do -while
    do {
        //const entrada RECIBE DE prompt(mensaje) LO QUE EL USUARIO INGRESE
        const entrada = prompt(mensaje);
        //valor SERÁ IGUAL A entrada TRANSFORMADO EN NÚMERO
        valor = Number(entrada);
        //SI valor NO ES UN NÚMERO VUELVE A PEDIR EL INGRESO HASTA QUE EL USUARIO INGRESA UN straight TRANSFORMABLE A Number
        if (Number.isNaN(valor)) {
            alert("Entrada no válida. Por favor, ingresa un número.")

        }

    }
    while (Number.isNaN(valor));
    //CUANDO EL USUARIO INTRODUCE UN MENSAJE CON CARÁCTERES NUMÉRICOS, SE TRANSFORMARÁ A number Y SE ROMPERÁ EL BUCLE
    return valor;


}






