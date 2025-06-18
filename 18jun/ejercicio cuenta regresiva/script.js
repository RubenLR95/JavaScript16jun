document.getElementById('btnCount').addEventListener('click', () => {
    //OBTIENE EL VALOR INGRESADO EN EL INPUT id 'start' Y LO CONVIEERTE A NÚMERO
    let num = Number(document.getElementById('start').value);
    //OBTIENE LA LISTA <ul> DONDE SE VA A MOSTRAR LOS NÚMEROS
    const ul = document.getElementById('out4');
    
    //LIMPIA EL CONTENIDO ANTERIOR DE LA LISTA PARA  NO DUPLICAR RESULTADOS
    ul.innerHTML = '';

    //BUBLE QUE SE EJECUTA MIENTRAS num SEA MAYOR O IGUAL A 1
    while (num >= 1){
        //CREA UN NUEVO ELEMEMTO li, ES DECIR, UN ITEM EN LA LISTA
        const li = document.createElement('li');

        //LE ASIGNA COMO CONTENIDO EL NÚMERO ACTUAL
        li.textContent = num;

        //AGREGA li COMO HIJO DE ul, ES DECIR, LO MUSTRA EN LA LISTA DENTRO DE ul
        ul.appendChild(li);
        //DECREMENTA EL NÚMERO EN 1 (CUENTA REGRESIVA)
        num --;

    }

});