//some()
// it is used to satisfy atleast one condition if it is satisfies then it is true ,if it is not satisfies then it is false...

/*
console.log(
    [1,2,3,4,5].some((element,index)=>{
        return element>=1;                           //true
                               
    })
);
*/
console.log(
    
    [1,2,3,4,5].some((element,index)=>{
        return element<1;                     //false
    })
);



//every()
// it is used to satisfy condition of each and every element then we have to use every function..
console.log(

    [1,2,3,4,5].every((element,index)=>{
        return element<=5;                       //true
    })

);



console.log(

    [10,20,30.40,50].every((element,index)=>{
        return element>=40;                       //false

    })
);


console.log(
    [10,20,30,40,50,60].every((element,index)=>{
        return element<=60;                            //true
    })
);
