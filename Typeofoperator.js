// in order to know the datatype we have to use typeof operator

console.log(typeof"hello");//string
console.log(typeof 100);//number
console.log(typeof true);//boolean
console.log(typeof undefined);//undefined
console.log(typeof null);//object
console.log(typeof []);//object
console.log(typeof 1n );//bigint


console.log(1n+2n); //3n
//console.log(1+2n);//TypeError: Cannot mix BigInt and other types, use explicit conversions


console.log(1n/1n);//1n
//console.log(1/1n);//TypeError: Cannot mix BigInt and other types, use explicit conversions
