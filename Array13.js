//foreach()
// it is used to iterate the elements


    [1,2,3,4,5].forEach((element,index)=>{
        console.log(element,index);
    })


// for ----of loop 
// it is used to simpliy the loop
 for(let x of[1,2,3,4,5]){
     console.log(x);
 }

 for(let y of[100,200,300,400,500]){
     console.log(y);
 }


 //for in loop
 // it is used to iterate the JSON objects
let obj = {"key1":"value1","key2":"value2","key3":"value3"}
for(let x in obj){
console.log(obj[x]);
}


