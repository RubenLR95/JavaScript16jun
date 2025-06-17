// PEDIMOS AL USUARIO LAS NOTAS, USANDO prompt() Y QUE ME DEVUELVA UN STRING
//var -> PARA ASIGNAR VARIABLE GENÉRICA, NO ESPECIFICA SI VARIABLE O CONSTANTE
//let -> PARA ASIGNAR VARIABLES CONDICIONALES, QUE SIFREN CAMBIOS EN EL TIEMPO
//const -> PARA ASIGNAR VARIABLES CONSTANTES

const base = prompt("ingrese la longitud de la base del rectangulo en centímetros:");
const altura = prompt("ingrese la longitud de la altura del rectángulo en centímetro:");


// 4. CONVERTIMOS CADA ENTRADA DE STRING A NUMBER
// SI LA CONVERSIÓN FALLA RESULTARÁ UN NaN

const base1 = Number(base);
const altura1= Number(altura);


// 5. CALCULAMOS PROMEDIO

const area = base1 * altura1;

// 6. MOSTRAMOS EL RESULTADO EN PANTALLA CON alert()
// UTILIZAR toFixed(2) PARA LIMITAR DECIMALES

alert(`La base del rectángulo es: ${area.toFixed(2)}cm²`);



 

