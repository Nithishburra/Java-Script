//reduce()
//1) to find the sum of the elements we will use this reduce function..

console.log(
    [1,2,3,4,5].reduce((firstelement,accumlator)=>{
        return firstelement+accumlator;                            //15
    })
);

console.log(
    [10,20,30,40,50].reduce((secondelement,accumlator)=>{
        return secondelement+accumlator;                          //150
    })
);


console.log(
    [100,200,300,400,500].reduce((firstelement,accumlator)=>{
        return firstelement+accumlator;                           //1500

    })
);

console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element*100;
    }).filter((element,index)=>{
        return element>=100;
    }).reduce((firstelement,accumlator)=>{
        return firstelement+accumlator;
    })                                                           //1500
    
);
