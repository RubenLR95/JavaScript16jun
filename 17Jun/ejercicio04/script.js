// PEDIMOS AL USUARIO LAS NOTAS, USANDO prompt() Y QUE ME DEVUELVA UN STRING
//var -> PARA ASIGNAR VARIABLE GENÉRICA, NO ESPECIFICA SI VARIABLE O CONSTANTE
//let -> PARA ASIGNAR VARIABLES CONDICIONALES, QUE SIFREN CAMBIOS EN EL TIEMPO
//const -> PARA ASIGNAR VARIABLES CONSTANTES

const entrada1 = prompt("ingresa la primera nota:");
const entrada2 = prompt("ingresa la segunda nota:");
const entrada3 = prompt("ingresa la tercera nota:");

// 4. CONVERTIMOS CADA ENTRADA DE STRING A NUMBER
// SI LA CONVERSIÓN FALLA RESULTARÁ UN NaN

const nota1 = Number(entrada1);
const nota2 = Number(entrada2);
const nota3 = Number(entrada3);

// 5. CALCULAMOS PROMEDIO

const promedio = (nota1 + nota2 + nota3) / 3;

// 6. MOSTRAMOS EL RESULTADO EN PANTALLA CON alert()
// UTILIZAR toFixed(2) PARA LIMITAR DECIMALES

alert(`El promedio de las tres notas es: ${promedio.toFixed(2)}`);



 

