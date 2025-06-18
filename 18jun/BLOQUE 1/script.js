// TAXI

document.getElementById('btn1').addEventListener('click', function() {
    //OBTIENE km COMO NÚMERO
    //parseFloat TRANSFROMA DECIMALES
    const km = parseFloat(document.getElementById('km').value);
    //COSTE FIJO
    const tarifaBase = 2.70;
    const costekm = 5;
    //SUMA tarifaBase AL costekm MULTIPLICADO POR km
    const total = tarifaBase + (costekm * km);
    document.getElementById('out1').textContent = 'Precio: ' + total.toFixed(2) + '€';

});

// IMC 

document.getElementById('btn2').addEventListener('click', function() {
            const peso = parseFloat(document.getElementById('peso').value);
            const altura = parseFloat(document.getElementById('altura').value);
            const imc = peso / (altura*altura); //FORMULA IMC
            let categoría = ''; 
            if (imc < 18.5){
                categoría = 'Bajo de peso';
            }
            else if (imc < 25){
                categoría = 'Normal';
            }
            else if(imc < 30){
                categoría = 'Sobrepeso';
            }
            else {
                categoría = 'Obesidad';
            }
            document.getElementById('out2').textContent = 'IMC: ' + imc.toFixed(2) + ' - ' + categoría ;


});
   
    