//reduceright()
// it is used to find the summation form right to left then we have to use this reduceright function.

console.log(
    ["javascript","to","welcome"].reduceRight((firstelement,accumlator)=>{
        return firstelement+" "+accumlator;
    })
);                                                 //welcome to javascript


console.log(

    ["java","to","welcome"].reduceRight((firstelement,accumlator)=>{
        return firstelement+" "+accumlator;
    })


);                                         //welcome to java


let arr1 = [10,20,30,40,50,60,70,80,90,100]
console.log(arr1.slice(2,5));               //[ 30, 40, 50 ]
console.log(arr1.slice(6,8));                // [70, 80 ]
console.log(arr1.slice(8,10));                //[ 90, 100 ]
console.log(arr1.slice(1,2));                //[ 20 ]
console.log(arr1.slice(7,8));                //[ 80 ]
console.log(arr1.slice(2,4));                 //[ 30, 40 ]
console.log(arr1.slice(0,1));                  //[ 10 ]
console.log(arr1.slice(0,11));                 //[10,20,30,40,50,60,70,80,90,100]

// 2,5 means 2thindex and 3thindex  and 4thindex will be included and 5th index will be excluded




let arr2=[10,20,30,40,50]
console.log(arr2.slice(-3,-1)); //[ 30, 40 ]
console.log(arr2.slice(-1));    //[ 50 ]
console.log(arr2.slice(-4,-2));   //[ 20, 30 ]
console.log(arr2.slice(-2,-1));    //[ 40 ]
console.log(arr2.slice(-4,-3));    //[ 20 ]
console.log(arr2.slice(-3,-2));    //[ 30 ]
console.log(arr2.slice(-5,-1));    //[ 10, 20, 30, 40 ]
console.log(arr2.slice(-2,-1));    //[ 40 ]


