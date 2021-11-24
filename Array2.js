// map()--->it is used to maipulate the each and every element

console.log(

 [1,2,3,4,5].map((element,index)=>{
 return element*100;                           //[ 100, 200, 300, 400, 500 ]

 })

);


console.log(


[1,2,3,4,5].map((element,index)=>{

    return element+100;                         //[ 101, 102, 103, 104, 105 ]

})

);


console.log(

[1,2,3,4,5].map((element,index)=>{
    return [element];
})                                               //[ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]

);



console.log(

[1,2,3,4,5].map((element,index)=>{
 
    return [element,index];
})
                                                  //[ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 4 ] ]

);


console.log(

[1,2,3,4,5].map((element,index)=>{

    return{[index]:element};                  //[ { '0': 1 }, { '1': 2 }, { '2': 3 }, { '3': 4 }, { '4': 5 } ]
})


);




