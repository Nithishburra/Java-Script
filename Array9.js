//find()
// in order to know the whether the element is present or not then we have to use this function....


console.log(
    [1,2,3,4,5].find((element,index)=>{
        return element == 3;                     //3
    })
)


console.log(
    [10,20,30,40,50].find((element,index)=>{
        return element == 60;
    })
);                                               //undefined      