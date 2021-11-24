//findIndex()
// it is used to  to find the index element we have to use this function...

/*
console.log(
    [1,2,3,4,5].findIndex((element,index)=>{
        return element == 3;
    })
)                                               //2


console.log(
    [10,20,30,40,50].findIndex((element,index)=>{
        return element == 40;
    })                                        //3
);


console.log(
    [100,200,300,400,500].findIndex((element,index)=>{
        return element == 500;
    })
);                                           //4


console.log(
  [10,20,30,40,50,60,70,80].findIndex((element,index)=>{
      return element == 90;
  })
);                                           //-1

*/





let arr1 = [10,20,30,40,50]
arr1.splice(arr1.findIndex((element,index)=>{
           return element == 30;
}),1);

console.log(arr1);                               //[ 10, 20, 40, 50 ]



let arr2 = [100,200,300,400,500]
arr2.splice(arr2.findIndex((element,index)=>{
             return element == 500;
}),1);

console.log(arr2);                             // 100, 200, 300, 400 ]


let arr3 = [{"e_id":1,"e_name":"nithish","e_sal":1000},
            {"e_id":2,"e_name":"nikhil","e_sal":2000},
            {"e_id":3,"e_name":"nihal","e_sal":3000},
            {"e_id":4,"e_name":"nithin","e_sal":4000},
            {"e_id":5,"e_name":"nitesh","e_sal":5000}
                                                  ]


arr3.splice(arr3.findIndex((element,index)=>{
    return element.e_id == 3;
}),1);
console.log(arr3);



let arr4 = [
            {"e_id":111,"e_name":"e_one","e_sal":2000},
            {"e_id":222,"e_name":"e_two","e_sal":3000},
            {"e_id":333,"e_name":"e_three","e_sal":4000},
            {"e_id":444,"e_name":"e_four","e_sal":5000},
            {"e_id":555,"e_name":"e_five","e_sal":6000}
]

arr4.splice(arr4.findIndex((element,index)=>{
     return element.e_id == 444;
}),1);
console.log(arr4);

