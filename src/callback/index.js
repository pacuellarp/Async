function sum(a,b){
    console.log(a+b);
}

function calc(a,b,callback){
    setTimeout(callback,2000,a,b);
}
calc(8,7,sum);
//No se ubican los paréntesis en sum pues se llamaría inmediatamente
//Por lo que tampoco es necesario escribirle los parámetros al callback

setTimeout(sum,7000,8,9);
