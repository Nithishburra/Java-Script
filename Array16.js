let arr1 = ["hello_1","hello_2","hello_3"]


//["hello_3","hello_2","hello_1"]
//["1_olleh","2_olleh","3_olleh"]
//["3_olleh","2_olleh","1_olleh"]


let arr2 = [1,2,3,4,5,6]

//[4,5,6,1,2,3]
//[15,6]


/*
let arr3 =  ["hello_1","hello_2","hello_3"]
 arr3.reverse()
 console.log(arr3);                        //[ 'hello_3', 'hello_2', 'hello_1' ]
*/
   


/*
arr2.splice(0,3);       
console.log(arr2);               // [ 4, 5, 6 ]
arr2.splice(3,0,1,2,3);
console.log(arr2);                 //[ 4, 5, 6, 1, 2, 3 ]
*/



console.log(
    arr2.map((element,index)=>{
        return element*1
    }).filter((element,index)=>{
        return element<6

    }).reduce((arg1,arg2)=>{
        return arg1+arg2
    })
);



