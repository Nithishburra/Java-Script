/*
1) promises are the special "javascript" objects...

2) proper communication between producer and consumer also called as Promises

3) producer will generate the promises

4) consumer will consume the promises

5) producer will create promises by using "Promise" class

6) consumer consumes in two ways

  1) then()

  2) async & await


*/


let promise1 = new Promise((resolve,reject)=>{
    resolve("tommorrow i will practise the arrays");     //tommorrow i will practise the arrays
});

 promise1.then((posres)=>{
     console.log(posres)
 },(errres)=>{
     console.log(errres)
 });


let promise2 = new Promise((resolve,reject)=>{
    resolve("tomorrow i will tell some plans");
});

promise2.then((posres)=>{
    console.log(posres);
},(errres)=>{
    console.log(errres);                                    //tomorrow i will tell some plans

});



let promise3 = new Promise((resolve,reject)=>{
    resolve("tommorow i won't come to your place")
});

 promise3.then((posres)=>{
     console.log(posres);
 },(errres)=>{
     console.log(errres);
 });

                                                             //tommorow i won't come to your place


/*
let promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("we will start the angular from tommorrow onwards")
    },6000)
});

  promise4.then((posres)=>{
      console.log(posres);
  },(errres)=>{
      console.log(errres);                          //we will start the angular from tommorrow onwards
  });

*/





let promise5 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("hello_1");
    }, 6000);
});

let promise6 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("hello_2");
    }, 9000);
});

let promise7 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("hello_3");
    }, 11000);
});

promise5.then((posres)=>{
    console.log(posres);
},(errres)=>{
    console.log(errres)
});


promise6.then((posres)=>{
    console.log(posres);
},(errres)=>{
    console.log(errres)
});

promise7.then((posres)=>{
    console.log(posres);
},(errres)=>{
    console.log(errres);
});




















