//flat()
// it is used to convert the multidimensional array to single dimensional array then we have to use this function.

/*
console.log(

    [[10],[20],[30],[40]].flat(1)

);                                   //[ 10, 20, 30, 40 ]

console.log(

    [[1],[2],[3],[4],[5]].flat(1)
);                                      //[ 1, 2, 3, 4, 5 ]

console.log(

    [[10],[20],[30]].flat(1)           //[ 10, 20, 30 ]
);
*/

/*
console.log(
 
  [[[[[[[[[[1]]]]]]]]]],[[[[[[[[[[2]]]]]]]]]],[[[[[[[[[[3]]]]]]]]]].flat(Infinity)


);                                        //[ 1, 2, 3]

// if we have more than one level then we have to use this infinity....
*/



/*
let arr1 = ["1","2","3"]
let arr2 = ["one","second","three"]
console.log(

    arr1.map((element,index)=>{
        return [element,arr2[index]];                //[ [ '1', 'one' ], [ '2', 'second' ], [ '3', 'three' ] ]
    }).flat(1)
);                                                       //[ '1', 'one', '2', 'second', '3', 'three' ]
*/


/*
let arr1 = ["A","B","C"]
let arr2 = ["audi","bmw","benz"]

console.log(
    arr1.flatMap((element,index)=>{
        return [element,arr2[index]]
    })
);
                                                          //[ 'A', 'audi', 'B', 'bmw', 'C', 'benz' ]
*/



let arr1 = ["1","2","3"]
let arr3 = ["rank","rank","rank"]
console.log(
    arr1.flatMap((element,index)=>{
        return [element,arr3[index]]
    })                                                         //[ '1', 'rank', '2', 'rank', '3', 'rank' ]
);



