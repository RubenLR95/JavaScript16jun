// 1. TO DO LIST

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');           //DECLARO VARIABLES Y ENLAZO CON SUS ID CORRESPONDIENTES
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {                        //CREAMOS EVENTO click
    const taskText = taskInput.value.trim();                        //LEER VALOR DEL INPUT
    if (taskText === '')return;                                     //EVITAR TAREAS VACÍAS

    const li = document.createElement('li');                       //CREAR ELEEMENTO li Y ASIGNAR TEXTO
    li.textContent = taskText;                                      

    taskList.appendChild(li);                                       //AÑADIR A LA LISTA
    taskInput.value = '';                                           //LIMPIAR IMPUT
});


// 2. FORMULARIO DINÁMICO

const registerForm = document.getElementById('registerForm');
const formResult = document.getElementById('formResult');

registerForm.addEventListener('submit', e => {
    e.preventDefault();                                             //EVITAMOS QUE EL FORMULARIO RECARGUE LA PÁGINA
    const nombre = registerForm.nombre.value.trim();                //RECOGE DATOS DEL FORMULARIO
    const email = registerForm.email.value.trim();
    const edad = registerForm.edad.value;

   if (!nombre || !email || !edad){                                  //VALIDA LOS DATOS 
        formResult.textContent = 'Por favor, completa los campos obligatorios'

    }

    formResult.innerHTML =                                           //MOSTRAR RESULTADO
    `
        <p><strong>Nombre:</strong>${nombre}</p>
        <p><strong>E-mail:</strong>${email}</p>
        <p><strong>Edad:</strong>${edad}</p>
    `;

}); 

// 3. CALCULADORA DE GASTOS

const expenseInput = document.getElementById('expense');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const totalSpent = document.getElementById('totalSpent');
const cleanBtn = document.getElementById('cleanBtn');

let total = 0;

addExpenseBtn.addEventListener('click', () =>{
    const value = parseFloat(expenseInput.value);               //LEER Y PARSEAR EL VALOR
    if (isNaN(value) || value <= 0) return;
    total += value;                                             //SUMAR EL TOTAL
    totalSpent.textContent = total.toFixed(2);                  //MUESTRA EL TOTAL

    expenseInput.value= '';                                     //LIMPIA EL CAMPO A RELLENAR
});

cleanBtn.addEventListener('click', () =>{                       //
    totalSpent.textContent = '';
});

// 4. GALERIA DE IMÁGENES

const photos = ['Images/img1.jpeg', 'Images/img2.jpeg', 'Images/img3.jpeg','Images/img4.jpeg'];
let current = 0;
const photoEl = document.getElementById('photo');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updatePhoto(){
    photoEl.src= photos[current];                           //CAMBIA EL ATRIBUTO src SEGÚN LA FOTO QUE MUESTRE
}

prevBtn.addEventListener('click', () =>{                        //FUNCIÓN CLICK PARA BOTÓN RETROCEDER
    current = (current - 1 + photos.length) % photos.length;    //FÓRMULA PARA QU EL BOTÓN RETROCEDA AL ELEMENTO ANTERIOR
    updatePhoto();
});

nextBtn.addEventListener('click', () => {                       //FUNCIÓN CLICK PARA BOTÓN SIGUIENTE
    current = (current + 1) % photos.length;                    //FÓRMULA PARA QUE ALL HACER CLICK AVANCE UNO
    updatePhoto();
});

// 5. CLIMA ACTUAL (CON API)

const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const getWeatherResult = document.getElementById('getWeatherResult');
const apiKey = 'bd612296c6904a2c9f8113624252006'                        //NUNCA COLOCAR LA APIKEY AQUÍ, A EXCEPCIÓN DE HOY PARA ESTE EJEERCICIO

getWeatherBtn.addEventListener('click', async () => {                   //COMANDO asyc PARA QUE AL PULSAR SE SINCRONICE CON LA API
    const city = cityInput.value.trim();                                //LEE Y LIMPIA EL NOMBRE DE LA CIUDAD
    if(!city){                                                          //CONDICIÓN: SI NO INGRESA EL NOMBRE DE UNA CIUDAD, SALTA ERROR
        getWeatherResult.textContent = 'Por favor, ingrese el nombre de una ciudad';
        return;
    } 

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}`+     //SE USAN BACKSTICS(``) PARA QUE VALIDE CUALQUIER CARACTER COMO VALOR
                `&q=${encodeURIComponent(city)}&lang=es` +
                `&lang=es`; 
                
                
    try {                                                                   //VALIDA LOS DATOS
        const res = await fetch(url);                                       //PEDIMOS LA INFORMACIÓN A LA API
        const data = await res.json();                                      //CONVERTIMOS LA RESPUESTA DE TEXTO A json

        if(data.error){                                                      // SI LA API DEVUELVE ERROR MOSTRAMOS EL MENSAJE
            getWeatherResult.textContent = `Error: ${data.error.message}`;
            return;                                                     
        }
                // EXTRAEMOS LOS DATOS
        const temp = data.current.temp_c;                                    // TEMPERATURA EN GRADOS CENTIGRADOS
        const desc = data.current.condition.text;                            // DESCRIPCION DEL CLIMA
        const icon = data.current.condition.icon;                             // URL DEL ICONO CLIMA
        const location = data.location.name;                                 // NOMBRE DE LA CIUDAD VALIDADA ANTERIORMENTE


                    // MOSTRAR RESULTADOS
        getWeatherResult.innerHTML = `                                                  
        <p>
        <img src="${icon}" alt="${desc}">   
         En <strong>${location}</strong> hace
        <strong>${temp}°</strong> y está "${desc}". 
        </p>    
        `;
    }  


    catch (err) {
        getWeatherResult.textContent = ' No se puede obtener el clima. evisa tu conexión.';
        console.error(err);
    }
    
});



    


