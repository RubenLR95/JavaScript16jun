//FUNCIÓN AUXILIAR QUE LEE Y CONVIERTE EL VALOR DE UN input(texto) EN UN NÚMERO
function leerNumero(id){
    //OBTIENE EL ELEMENTO POR SSU id Y EXTRAE SU VALOR COMO TEXTO
    const val = parseFloat(document.getElementById(id).value);
    //SI EL VALOR NO ES UN NÚMERO VÁLIDO, DEVUELVE null, SI NO, EL NÚMERO CONVERTIDO
    //VERIFICA SI val ES UN NÚMERO USANDO isNaN DELANTE DEL NOMBRE DE LA VARIABLE, SI val NO ES UN NÚMERO, DEVUELVE null (PARA INDICAR VALOR INVÁLIDO)
    //OPERADOR TERNARIO ( ?  : ) if...else
    return isNaN(val) ? null : val ;

}

//1. CALCULA EL AREA DE UN RECTÁNGULO
function calcularPerimetro(){
    //LEE LA BASE Y LA ALTURA USANDO LA FUNCION AUXILIAR
    const b = leerNumero('baseRect');
    const a = leerNumero('alturaRect');

    // SI CUALQUIERA DE LOS DOS ES UN null VA A MOSTRAR ESTA ALERTA 
    if(b === null || a === null) return alert('Por favor, ingresa valores válidos.');
    //FORMULA DEL PERÍMETRO; 2 * (base + altura)
    const p = 2 * (b+a);

    //ESCRIBE EL RESULTADO EN <P></P>
    document.getElementById('resPerimetro').textContent = `Perimetro: ${p}`;
}

// 2. CONVERTIR GRADOS CELSIUS A FAHRENHEIT
function convertirFahrenheit() {
    //LEE EL VALOR EN CELSIUS
    const c = leerNumero('celsius');
    //VALIDA EL NUMERO
    if(c === null) return alert('Por favor ingrese un valor válido.');
    //FORMULA 
    const f = (c * 9/5) + 32;
    //MOSTRAS EL RESULTADO DE LA CONVERSION REDONDEANDO A 2 DECIMALES
    document.getElementById('resFahrenheit').textContent = `${c.toFixed(2)} °C = ${f.toFixed(2)} °F `;

}
