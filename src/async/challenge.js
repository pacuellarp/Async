import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';


//Dos formas de hacerlo, primero, una función normal
async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json(); //Estructura de los datos transformandolos en json
    return data; //Retorna la información de la API que estamos solicitando, como un objeto json
}

//Segundo, una función anónima guardada en una constante
const anotherFunction = async (urlApi)=>{
    try{//Aquí va toda la lógica deseada de aplicación, que se llevará a cabo cuando se cumpla la promesa
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        console.log(products);
        console.log(product.title);
        console.log(category.name);
    }catch(error){//Cuando la promesa llega a un reject
        console.error(error)
    };
};

anotherFunction(API);


// POST

const postData = async (urlApi, payload) => {
    try {
        const response = await fetch(urlApi, {
            method: 'POST',
            mode: 'cors', // default cors
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};


// DELETE


const deleteData = async (urlApi) => {
    try {
        const response = await fetch(urlApi, {
            method: 'DELETE',
            mode: 'cors', // default cors
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}