document.getElementById('btnAplicar').addEventListener('click', () => {


    //LEEMOS VALORES 
    const precio = parseFloat(document.getElementById('precio').value)|| 0;
    const rebaja = parseFloat(document.getElementById('rebaja').value) || 0;
    // LLAMAMOS A LA FUNCION
    const {total, ahorro} = aplicarRebaja(precio, rebaja);
    document.getElementById('ahorro').textContent = ahorro.toFixed(2);
    document.getElementById('final').textContent = total.toFixed(2);


    




});

function aplicarRebaja(precio, rebaja){
    const ahorro = (rebaja /100) * precio;
    const total = precio - ahorro;
    return {total, ahorro};
}