// AL HACER CLICK EN EL BOTÓN...

document.getElementById('btncheck').addEventListener('click',() =>{
    //LEEMOS Y CONVERTIMOS EL VAOR DE input
    const n = Number(document.getElementById('num').value);
    const out = document.getElementById('out1');

    // SI n ES MAYOR QUE 0 -> ES POSITIVO. SI ES MENOR QUE 0 -> ES NEGATIVO. SI NO CUMPLE NINGUNO DE LOS CRITERIOS SERÁ 0
    if (n > 0){
        out.textContent = ' El número es POSITIVO';
    } else if (n < 0){
        out.textContent = ' El número es NEGATIVO';
    } else {
        out.textContent = ' El número es CERO';
    }

});