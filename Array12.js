//sort()
// it is used to arrange the ascending order and decending order then we have to use this function........


console.log(
    [1,5,2,4,3].sort((arg1,arg2)=>{
        return arg1-arg2;
    })
);
                                                                                          //[ 1, 2, 3, 4, 5 ]

console.log(
    [10,2,4,5,3,7].sort((arg1,arg2)=>{
        return arg1-arg2;
    })
);                                                                                         //[ 2, 3, 4, 5, 7, 10 ]




console.log(
    [2,3,4,5,6].sort((arg1,arg2)=>{
        return arg2-arg1;
    })
);                                                                                //[ 6, 5, 4, 3, 2 ]





console.log(
    [10,20,30,40,50,60,70,80,90,100].sort((arg1,arg2)=>{
        return arg2-arg1;
    })                                                                           //[  100, 90, 80, 70, 60,   50, 40, 30, 20, 10]
);




console.log(
    [10,50,60,40,30,20].sort((arg1,arg2)=>{
           return arg1-arg2;
    })[1]
);
                                                                          //20


console.log(
    [50,60,70,100,90,80].sort((arg1,arg2)=>{
        return arg1-arg2;
    })[3]
);                                                             //80

console.log(
    [2,3,5,4,1].sort((arg1,arg2)=>{
        return arg1-arg2;
    })[4]                                               //5
);






console.log(
    [20,30,10,40,50,].sort((arg1,arg2)=>{
        return arg2-arg1;
    })[1]
);                                               //40




console.log(
    [30,10,40,50,60,20].sort((arg1,arg2)=>{
        return arg2-arg1;
    })[3]                                              //30
);


console.log(
    [10,50,100,1000,2000].sort((arg1,arg2)=>{
        return arg1-arg2;
    })[0]
);                                                           //10








