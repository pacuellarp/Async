import fetch from 'node-fetch';

const API='https://api.escuelajs.co/api/v1';

//  POST

function postData(urlApi,data){//Función que se encarga de utilizar fetch y usarlo para el llamado del método POST
    const response = fetch(urlApi,{
        method: 'POST',//Este objeto muestra la metodología necesaria para la petición
        mode: 'cors',
        credentials: 'same-origin',//Si no hay autentificación, no pasa nada
        headers: {
            'Content-Type': 'application/json' //Se detalla el tipo de elemento ha enviar
        },
        body:JSON.stringify(data)//La información que se envía, se hace una transformación de string hacia json de la misma
    });
    return response;
}

const data = {
    "title": "Old Brown Shoe",
    "price": 63.60,
    "description": "I'm so glad you came here it won't be the same now when I'm with you",
    "categoryId": 4,
    "images": ["https://c.pxhere.com/photos/f4/b7/shoe_leather_shoe_age_shoe_brown_worn_used_old_antique-1081448.jpg!d"]
}

postData(`${API}/products`,data)
    .then(response =>response.json())//Se transforma en objeto json
    .then(data=>console.log(data))
    .catch(error=> console.error(error))


//   PUT

 function updateData(urlApi, data) {
    return fetch(
        urlApi,
        {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
        },
    );
}

const dataUpdate = {
    "description": "You'll stumble in my footsteps. Keep the same appointments I kept. If you try walking in my shoes",
    "price": 456,
};

updateData(`${API}227`, dataUpdate)
    .then(responde => responde.json())
    .then(data => console.log(data))
    .catch(error => console.error(error)); 



// DELETE

function deleteData(urlApi, data) {
    return fetch(
        urlApi,
        {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
        },
    );
}
    
deleteData(`${API}227`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error)); 