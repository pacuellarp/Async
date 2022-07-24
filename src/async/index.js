const fnAsync = ()=>{//Retorna una promesa
    return new Promise((resolve,reject)=>{
        (true)//Condición que se debe cumplir para que se resuelva la promesa
            ? setTimeout(()=> resolve('Async!'),2000)//Si se cumple
            : reject(new Error('Error'));//Si se rechaza
    })
}

const anotherFn = async()=>{//Convierte la función en asíncrona
    const something = await fnAsync();//Esto es lo que deberá esperar la función asíncrona para que pueda operar
    console.log(something);
    console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');