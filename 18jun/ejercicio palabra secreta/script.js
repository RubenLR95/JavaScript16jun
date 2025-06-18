document.getElementById('btnGuess1').addEventListener('click', () => {

    let intento;
    //HACEMOS EL PROMP Y REPETIMOS HASTA QUE EL USUARIO INSERTE LA PALABRA CORRECTA (HOLA)

    do{
        intento = prompt('Ingresa la palabra secreta:')
        //SERÁ UN BUCLE *MIENTRAS*(WHILE) LA PALABRA INSERTADA *SEA DIFERENTE*(!==) A LA PALABRA ELEGIDA (Hola)
    } while (intento !== 'Spiderman');

    document.getElementById('out5').textContent = '¡Correcto!';



});

document.getElementById('btnGuess2').addEventListener('click', () => {

    let intento;
    //HACEMOS EL PROMP Y REPETIMOS HASTA QUE EL USUARIO INSERTE LA PALABRA CORRECTA (HOLA)

    do{
        intento = prompt('Ingresa la palabra secreta:')
        //SERÁ UN BUCLE *MIENTRAS*(WHILE) LA PALABRA INSERTADA *SEA DIFERENTE*(!==) A LA PALABRA ELEGIDA (Hola)
    } while (intento !== 'Superman');

    document.getElementById('out6').textContent = '¡Correcto!';



});


document.getElementById('btnGuess3').addEventListener('click', () => {

    let intento;
    //HACEMOS EL PROMP Y REPETIMOS HASTA QUE EL USUARIO INSERTE LA PALABRA CORRECTA (HOLA)

    do{
        intento = prompt('Ingresa la palabra secreta:')
        //SERÁ UN BUCLE *MIENTRAS*(WHILE) LA PALABRA INSERTADA *SEA DIFERENTE*(!==) A LA PALABRA ELEGIDA (Hola)
    } while (intento !== 'Deadpool');

    document.getElementById('out7').textContent = '¡Correcto!';



});