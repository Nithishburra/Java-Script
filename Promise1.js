// to consume all the promises at a time then we have to use promise.all() this function....


/*
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("hi_1");
    }, 8000);
});

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("hi_2");
    }, 10000);
});


let promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("hi_3");
    }, 15000);
});

Promise.all([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});                                                            //[ 'hi_1', 'hi_2', 'hi_3' ]
*/





/*
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("hi_1");
    }, 8000);
});

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("hi_2");
    }, 10000);
});


let promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("hi_3");
    }, 15000);
});

Promise.race([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});                                                                          //hi_1

*/





/*
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("hello_1");
    }, 5000);
});




let promise2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("Error")
    }, 8000);
});

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("hello_3");
    }, 10000);
});

Promise.all([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});                                                                        //Error

*/





/*
let promise4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
          resolve("hey_1");
    }, 2000);
});




let promise5 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("Error");
    }, 4000);
});



let promise6 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("hey_3");
    }, 6000);
});

Promise.allSettled([promise4,promise5,promise6]).then((posRes)=>{
      console.log(posRes);

},(errRes)=>{
    console.log(errRes);
});

                                                 //[{ status: 'fulfilled', value: 'hey_1' },
                                                 //{ status: 'rejected', reason: 'Error' },
                                                // { status: 'fulfilled', value: 'hey_3' }]

*/





/*

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("bye");
    }, 4000);
});

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("welcome");
    }, 6000);
});

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("ERROR");
    }, 9000);
});


Promise.allSettled([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});                                                                       /* [
                                                                          { status: 'fulfilled', value: 'bye' },
                                                                          { status: 'fulfilled', value: 'welcome' },
                                                                          { status: 'rejected', reason: 'ERROR'}
                                                                            ] 
  
*/





/*

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("welcome");
    }, 5000);
});


let promise2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("welcome to js");
    }, 7000);
});



let promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("welcome to Angular");
    }, 9000);
});


Promise.race([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});
                                                              //welcome

*/






let promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("hi");
    }, 6000);
});



let promise2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("ERROR");
    }, 8000);
});


let promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("bye");
    }, 10000);
});

Promise.allSettled([promise1,promise2,promise3]).then((posRes)=>{
        console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});


/*[
    { status: 'fulfilled', value: 'hi' },
    { status: 'rejected', reason: 'ERROR' },
    { status: 'fulfilled', value: 'bye' }
  ]*/


  
  




























