const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi,callback){
    let xhttp = new XMLHttpRequest(); 
    //Se crea el llamado del XMLHttpRequest
    xhttp.open('GET',urlApi,true);
    //Abre una conexión a la API, GET le indica el tipo de conexión y el true lo habilita
    xhttp.onreadystatechange = function(event){ //Escucha los diferentes estados que tiene la solicitud para saber cuándo está disponible
        if(xhttp.readyState === 4){ //Valida el estado en valor 4, es decir, se ha completado la llamada
            if(xhttp.status === 200){//Valida el estatus de la petición por parte del servidor en 200, es decir, todo ok
                callback(null,JSON.parse(xhttp.responseText));//Regresa lo entregado en la petición y lo transforma en un objeto
            }else{
                const error = new Error('Error' + urlApi); //Instancia de error por si no se realiza bien la petición
                return callback(error,null);//Como no se realiza nada, no regresa nada
            };
        };
    };
    xhttp.send();//Llamado para que se ejecute toda la lógica anterior
}

fetchData(`${API}/products`,(error1,data1)=>{//Se invoca el metodo fetchData() pasandole como argumentos la varible API concatenada con la cadena 'products' para acceder a la URL de la API deseada, y una función anónima que recibe 2 parámetros (un objeto de error y un arreglo que almacena todos los objetos traidos por la API)
    if(error1) return console.error(error1);//Se valida si existe un error, en caso de que exista se detiene el proceso y se imprime el error
    fetchData(`${API}/products/${data1[6].id}`,(error2,data2)=>{//Se invoca nuevamente la función fetchData con el fin de acceder a un objeto puntual del arreglo data1, se envia como parámetros la url de la API apuntando al atributo del primer objeto de arreglo data1 y nuevamente una función anónima.
        if(error2) return console.error(error2);//Si en este punto se identifica un error se imprime en consola y se detiene el proceso
        fetchData(`${API}/categories/${data2?.category?.id}`,(error3,data3)=>{//Se invoca nuevamente la funcion fetchData con el fin de acceder a la categoria, se envían como parametros la url de la API con la concatenación de 'Categories' y el atributo Id de categoria del objeto data2 de la función anterior
            //En este caso puntual se hace uso de Optional Caining el cual hace una evalucación de las propiedades de un objeto y en vez de arrojar un error devuelve undefined en caso que la propiedad no exista o sea null.
            //Igual que las anteriores e envia una funcion anonima con 2 argumentos, un objeto Error y un objeto de datos
            if(error3) return console.error(error3);//Se valida si existe error, en caso de que exista se detiene el proceso y se imprime el error
            console.log(data1[6]);//Se imprime el objeto en la posición 1 del arreglo de los objetos obtenidos en el metodo invocado inicialmente
            console.log(data2.title);//Se imprime el titulo del objeto que se consultó en la seguna invocación de la función
            console.log(data3.name);//Se imprime el nombre de la categoria a la que pertenece el objeto que se consultó en la seguna invocación del método.
        });
    });
});