//array LISTA CON RUTA DE IMÁGENES

const foto = ['chirimoya.jpeg', 'melocoton.jpeg', 'papaya.jpeg'];
//2. REFERENCIAS AL <img> Y AL <button>

const img = document.getElementById('imagen');
const btn = document.getElementById('btnSiguiente');

//INDICE ACTUAL

let indice = 0;

//FUNCIÓN QUE AVANZA AL SIGUIENTE INDICE Y ACTYALIZA LA IMAGEN

function siguienteFoto (){
    indice = (indice + 1) % foto.length;
    img.src = foto[indice];

}

//CREAMOS EVENTO CLICK

btn.addEventListener('click', siguienteFoto);
