import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi);
};

/*  fetchData(`${API}/products`)
    .then(response=>response.json())
    .then(products=>{
        console.log(products);
    })
    .catch(error=>{
        console.log(error);
    }) */

fetchData(`${API}/products`)
    .then(response => response.json())//Se retorna el contenido de response en JSON
    .then(products => {
        return fetchData(`${API}/products/${products[0].id}`)//Se llama la segunda petición
    })
    .then(response => response.json())
    .then(product=>{
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`)//Se llama la tercera petición
    })
    .then(response=> response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally(()=> console.log("Finally"))