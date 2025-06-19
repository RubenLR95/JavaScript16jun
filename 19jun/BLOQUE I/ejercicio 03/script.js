//CREAR FUNCION CALCULAR IMC

function calcularIMC(peso, altura){
    return peso / (altura*altura);
}

// FUNCION ETIQUETA IMC RECIBE VALOR IMC Y DEVUELVE CATEGORIA CON RETURN
function etiquetaIMC(imc){

    if (imc < 18.5) return 'Bajo de peso';
    if (imc < 25) return 'Normal';
    if (imc < 30) return 'Sobrepeso';
    return 'Obesidad';
}

document.getElementById('btnCalcular').addEventListener('click', function(){

    const peso = parseFloat(document.getElementById('peso').value) || 0;
    const altura = parseFloat(document.getElementById('altura').value) || 0;

    let imc = calcularIMC(peso, altura);
    

    spanResultado.getElementById('imcVal').textContent= imc.toFixed(2);
    spanResultado.getElementById('imcEtiqueta').textContent = etiquetaIMC(imc);
    
    



});


   