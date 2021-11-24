/*
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello_1");
    },0);
});


let promise2 = new Promise((resolve,reject)=>{
    resolve("Hello_2");
});


promise1.then((Posres)=>{
  console.log(Posres)
},(ErrRes)=>{
    console.log(ErrRes);
});

promise2.then((PosRes)=>{
    console.log(PosRes);
},(ErrRes)=>{
    console.log(ErrRes);                     
});                                       //Hello_2
                                          //Hello_1
*/



let promise1 = new Promise((resolve,reject)=>{
    resolve("Hello_1");
});

async function my_fun(){
    let result = await promise1;
    console.log(result);
}


my_fun();                                        //Hello_1




let promise2 = new Promise((resolve,reject)=>{
    resolve("welcome");
});

async function fun_one(){
    let result = await promise2;
    console.log(result);
}

fun_one();                                       //welcome




let promise3 = new Promise((resolve,reject)=>{
    resolve("Hi")
});

async function fun_two(){
    let result = await promise3;
    console.log(result);
}

fun_two();                                     //Hi



















