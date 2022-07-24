import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';


async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json(); 
    return data; 
}

async function* genData(urlApi){
        try{
            const products = await fetchData(`${urlApi}/products`);
            yield console.log(products[0]);
            const product = await fetchData(`${urlApi}/products/${products[0].id}`);
            yield console.log(product.title);
            const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
            yield console.log(category.name);
        }
        catch{
            console.error('Error');
        }
}

const g = genData(API);

g.next();
g.next();
g.next();



