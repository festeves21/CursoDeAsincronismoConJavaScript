function sum(n1,n2){
    return n1+n2;
}

function calc(num1, num2, callback){
    return callback(num1,num2);
}

console.log( calc( 3 ,2 , sum));

setTimeout( function(){
    console.log("Hola JavaScript")
},2000);

function gretting(name){
    console.log(`Hola ${name}`)
}

setTimeout(gretting,1000,'Franklin');