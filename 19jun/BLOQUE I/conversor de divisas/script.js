//1. CRER LA FUNCIÓN PARA SELECCIONAR LA DIVISA DESEADA
function obtenerTasa(moneda){  
    switch (moneda){ 
        case 'USD' : return 1.09; //1.09$ = 1€
        case 'GBP' : return 0.85;
        case 'JPY' : return 152.34;
        default    : return 1;
    }
}

//CREAR OTRA FUNCION PARA CONVERTIR LA DIVISA A LA MONEDA SELECCIONADA
function convertir(cantidad, tasa){
    return cantidad * tasa;
}

//GUARDAMOS EN UNA const LA REFERENCIA AL BOTÓN
const btnConvertir = document.getElementById('btnConvertir');

//

const spanResultado = document.getElementById('resultado');

document.getElementById('btnConvertir').addEventListener('click', function(){
    // LEE LA CANTIDAD DEL input Y LO PARSEAMOS A float
    let cantidad = parseFloat(document.getElementById('cantidad').value) || 0;
    // LEE LA MONEDA SELECCIONADA
    let moneda = document.getElementById('moneda').value;

    let tasa = obtenerTasa(moneda);

    let resultado = convertir(cantidad, tasa);

    //FORMATEAMOS EL RESULTADO CON DOS DECIMALES Y MOSTRAMOS

    spanResultado.textContent = resultado.toFixed(2) + '' + moneda;
    
});   