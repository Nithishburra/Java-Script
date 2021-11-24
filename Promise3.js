/*
let add = ((num,callback)=>{
     return callback(num+5,false)
});

let sub = ((num,callback)=>{
    return callback(num-3,false)
});
/*
let mul = ((num,callback)=>{
    return callback(num*2,false)
});

let div = ((num,callback)=>{
    return callback(num/2+3,false)
});

add(5,(addres,error)=>{
     if(!error){
          sub(addres,(subres,error)=>{
              if(!error){
                  mul(subres,(mulres,error)=>{
                     if(!error){
                         div(mulres,(divres,error)=>{
                             if(!error){
                                 console.log(divres);
                             }
                         })
                     }
                  })
              }
          })
     }
});
*/


/*
let add = ((num,callback)=>{
    return callback(num+6,false);
});


add(6,(addres,error)=>{
    if(!error){
        console.log(addres);
    }
});
*/


let add = (num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num+5);
    });
}

let sub = (num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num-3);
    });
}

let mul = (num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num*2)
    });
}

let div =(num)=>{
    return new Promise((resolve,reject)=>{
         resolve(num/2+3);
    });
}

async function calc() {
    let addRes = await add(5);
    let subRes = await sub(addRes);
    let mulRes = await mul(subRes);
    let divRes = await div(mulRes);
    console.log(addRes,subRes,mulRes,divRes);
}

calc();                                                 //10 7 14 10


(async()=>{
    let addRes = await add(5);
    let subRes = await sub(addRes);
    let mulRes = await mul(subRes);
    let divRes = await div(mulRes);
    console.log(addRes,subRes,mulRes,divRes);
})()
                                                    //10 7 14 10




 add(5).then((posRes)=>{
     sub(posRes).then((posRes)=>{
         mul(posRes).then((posRes)=>{
            div(posRes).then((posRes)=>{
                console.log(posRes);
             },(errRes)=>{

            })
         },(errRes)=>{

         })
     },(errRes)=>{

   })
 },(errRes)=>{

  });                                   //10
