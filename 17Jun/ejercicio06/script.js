// PEDIMOS AL USUARIO LAS NOTAS, USANDO prompt() Y QUE ME DEVUELVA UN STRING
//var -> PARA ASIGNAR VARIABLE GENÉRICA, NO ESPECIFICA SI VARIABLE O CONSTANTE
//let -> PARA ASIGNAR VARIABLES CONDICIONALES, QUE SIFREN CAMBIOS EN EL TIEMPO
//const -> PARA ASIGNAR VARIABLES CONSTANTES

//PIDE NÚMEROS CON LA FUNCIÓN INTRODUCIDA
const numero1 = pedirNumero("Ingrese primer número:");
const numero2 = pedirNumero("Ingrese segundo número:");



// 4. CONVERTIMOS CADA ENTRADA DE STRING A NUMBER
// SI LA CONVERSIÓN FALLA RESULTARÁ UN NaN




// 5. CALCULAMOS PROMEDIO

const resultado = numero1 + numero2;

// 6. MOSTRAMOS EL RESULTADO EN PANTALLA CON alert()
// UTILIZAR toFixed(2) PARA LIMITAR DECIMALES

alert(`La suma de ${numero1} + ${numero2} es: ${resultado}`);

// re-promp hasta que el numero sea válido
// Función auxiliar que pide un número hasta la conversión con Number no sea un NaN
//SE DECLARA LA FUNCIÓN pedirNumero(mensaje) = promp(mensaje)
function pedirNumero(mensaje){
    //EMPIEZA NOMBRANDO UNA VARIABLE "valor"
    let valor;
    // GENERAMOS UN BUCLE do -while
     do {
        //const entrada RECIBE DE prompt(mensaje) LO QUE EL USUARIO INGRESE
        const entrada = prompt(mensaje);
        //valor SERÁ IGUAL A entrada TRANSFORMADO EN NÚMERO
        valor = Number(entrada);
        //SI valor NO ES UN NÚMERO VUELVE A PEDIR EL INGRESO HASTA QUE EL USUARIO INGRESA UN straight TRANSFORMABLE A Number
        if (Number.isNaN(valor)){
            alert("Entrada no válida. Por favor, ingresa un número.")

        } 
        
        }
        while (Number.isNaN(valor));
        //CUANDO EL USUARIO INTRODUCE UN MENSAJE CON CARÁCTERES NUMÉRICOS, SE TRANSFORMARÁ A number Y SE ROMPERÁ EL BUCLE
        return valor;

         
}



 

