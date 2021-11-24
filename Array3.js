//filter()
console.log(
    [10,20,30,40,50].filter((element,index)=>{
        return element>=30;
    })                                                 //[ 30, 40, 50 ]

);



console.log(
    [1,2,3,4,5].filter((element,index)=>{
        return element>=2;
    }).map((element,index)=>{
        return element*100;                             //[ 200, 300, 400, 500 ]

    })
);



console.log(
    [20,40,50,60].filter((element,index)=>{
        return element<=50;                             //[ 20, 40, 50 ]
    })
);




console.log(
    [100,200,300,400].filter((element,index)=>{
        return element<=300;
    }).map((element,index)=>{
        return element*200;                              //[ 20000, 40000, 60000 ]
    })
);




console.log(

     [{"e_id":1,"e_name":"rohit","e_sal":1000},
      {"e_id":2,"e_name":"kohli","e_sal":2000},
      {"e_id":3,"e_name":"rahul","e_sal":3000},
      {"e_id":4,"e_name":"ishan","e_sal":4000},
      {"e_id":5,"e_name":"bumrah","e_sal":5000}
      
     ].filter((element,index)=>{
         return element.e_sal>=2000;
     }).map((element,index)=>{
            return element.e_name === "bumrah" ? {"e_id":5,"e_name":"jasprit bumrah","e_sal":5000}:element;
     })
);          // { e_id: 5, e_name: 'jasprit bumrah', e_sal: 5000 }


