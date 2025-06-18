// AGREGA UN EVENTO AL BOTÓN CON ID 'btnsum' QUE SE EJECUTA AL HACER CLICK

document.getElementById('btnsum').addEventListener('click', () =>{

    //OBTIENE EL VALOR DE input CON id 'n3', LO CONVIERTE EN LA VARIABLE n
    const n = Number(document.getElementById('n3').value);
    //INICIA LA VARIABLE suma EN 0; ESTA SERVIRÁ COMO UN ACUMULADOR
    let suma = 0;
    
    //BUCLE QUE SUMA TODOS LOS NÚMEROS DE 1 HASTA n
    for (let i = 1; i <= n; i++){
        //suma = suma + i (ESTO ACUMULA LA SUMA DE LOS NÚMEROS)
        suma += i;
    }

    document.getElementById('out3').textContent = `Resultado: ${suma}` ;




});