// 1. CREAR LISTA UN array DE COLORES
const colours = ["yellow","magenta","cyan","black","white"];
console.log(colours);

// 2. ACCESO Y MODIFICACIÓN POR POSICIÓN
console.log(colours[1]); //MAGENTA

// 3. MODIFICAR SELECCIÓN...
colours[1] = "red";
console.log(colours);

// 4. AÑADIR MAS ELEMENTOS Y ELIMINAR ELEMENTOS
colours.push("purple");
console.log(colours);

// 5. AÑADIR EL ELEMENTO AL INICIO
colours.unshift("pink");
console.log(colours);

// 6. ELIMINAR ELEMENTOS FINAL
colours.pop();       //ELIMINA EL ULTIMO ELEMENTO, EN ESTE MOMENTO, EL MORADO
console.log(colours);

// 7. ELIMINA EL PRIMER ELEMENTO
colours.shift();    // ELIMINA EL PRIMER ELEMENTO, EN ESTE MOMENTO, PINK
console.log(colours);

// 8. EXTRAER subarrays CON .slice
const subColours = colours.slice(0,2);
console.log(subColours);
console.log(colours);

// 9. RECORRER arrays CON forEach
colours.forEach((color, indice)=> { // forEach DEFINE LAS VARIABLES QUE MUESTRA A CONTINUECIÓN ENTRE (), SIN NECESIDAD DE DECLARARLA CON const, let, O var.
    console.log(`El color de la posición ${indice} es ${color}.`);
});

// 10. INSERTAR Y/O ELIMINAR CON splice
const colours2 = ["burning red", "nuclear green", "fury black", "poison purple", "steel grey"];
console.log(colours2);
colours2.splice(1, 1, "barbie pink", "intense blue");
console.log(colours2);

// 11. INVERTIR EL array CON reverse
const numeros = [1, 2, 3, 4, 5];
numeros.reverse();
console.log(numeros);

// 12. UNIR ELEMENTOS CON join
const colours3 = ["golden yellow", "mint green", "blood red", "snow white"];
const cadena = colours3.join(" - ");
console.log(cadena);

// 13. RECORRER CON for ... of Y CONDICIÓN
const nums = [10, 15, 20, 25, 30, 35, 40];
    for (let n of nums){                  //ESTE BUCLE, EN CADA VUELTA, LA VARIABLE n TOMA EL VALOR DE UNO DE LOS ELEMENTOS (nums)
        if (n % 20 === 0 ) {                //LE PIDO QUE, AL RECORRER LA LISTA, ME MUESTRE SOLO LOS ELEMENTOS QUE SON MÚLTIPLOS DE 20
        console.log(`${n} es multiplo de 20`);
    }
}                 

// 14. EN UN array DE TEXTO, TRANSFORMAR TODO A MAYÚSCULAS CON .map()
const frutas = ["manzana", "pera", "uva"];
const FRUTAS_MAYUS = frutas.map(f => f.toUpperCase());      //LA FUNCIÓN FLECHA f => f.toUpperCase() RECIBE CADA FRUTA (f) Y DEVUELVE SU VERSIÓN EN MAYÚSCULAS
console.log(FRUTAS_MAYUS);







