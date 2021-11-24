//fill()
// if we want to replace all the elements with one element then we have to use this function....

let arr1 = [1,2,3,4,5]
console.log(arr1.fill(100));          //[ 100, 100, 100, 100, 100 ]


let arr2 = [10,20,30,40,50]
console.log(arr2.fill(500));          //[ 500, 500, 500, 500, 500 ]



let arr3 = [100,200,300,400,500]
console.log(arr3.fill(10));               //[ 10, 10, 10, 10, 10 ]



let arr4 = [100,200,300,400,500] 
console.log(arr3.fill(100));                     //[ 100, 100, 100, 100, 100 ]
console.log(arr4.fill(200,1));                    //[ 100, 200, 200, 200, 200 ]
console.log(arr4.fill(300,2));                    //[ 100, 200, 300, 300, 300 ]
console.log(arr4.fill(600,4));                      //[ 100, 200, 300, 300, 600 ]



let arr5 = [10,20,30,40,50] 
console.log(arr5.fill(1));                     //[ 1, 1, 1, 1, 1 ]
console.log(arr5.fill(2,1));                     //[ 1, 2, 2, 2, 2 ]
console.log(arr5.fill(3,2));                     //[ 1, 2, 3, 3, 3 ]
console.log(arr5.fill(4,3));                      //[ 1, 2, 3, 4, 4 ]
console.log(arr5.fill(5,4));                        //[ 1, 2, 3, 4, 5 ]
console.log(arr5.fill(100,2,4));                 //[ 1, 2, 100, 100, 5 ]
console.log(arr5.fill(200,4,5));                //[ 1, 2, 100, 100, 200 ]




//indexof()
// it is used to ... it  won't create indexes to repeated elements....

let arr6 = [10,20,30,10,40,10,20,50]
arr6.forEach((element,index)=>{
     console.log(arr6.indexOf(element),index);
     console.log("....................");
})

let arr7 = [10,20,30,40,60,20]
arr7.forEach((element,index)=>{
    console.log(arr7.indexOf(element),index);
    console.log(".................");
})


let arr8 = [10,20,30,10,20,30]
arr8.forEach((element,index)=>{
    console.log(arr8.indexOf(element),index);
})




let arr9 = [100,200,300,100,200,300]

 console.log(

    arr9.filter((element,index)=>{
        return arr9.indexOf(element) == index;
    })

 );                                            //[ 100, 200, 300 ]



 let arr10 = [10,20,30,10,20,30]

 console.log(
     arr10.filter((element,index)=>{
         return arr10.indexOf(element) == index;
     })
 );
                                                       //[ 10, 20, 30 ]


 let arr11 = [200,300,100,200,300,100]
 console.log(
     arr11.filter((element,index)=>{
         return arr11.indexOf(element) == index;
     })
 );                                                     //[ 200, 300, 100 ]


 let arr12 = [11,12,13,11,12,13]
 console.log(
     arr12.filter((element,index)=>{
         return arr12.indexOf(element) == index;
     })                                              //[ 11, 12, 13 ]

 );

 // In order to remove duplicate values we have to use this indexof function.....
 