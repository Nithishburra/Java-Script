//for loop
/*for(var i=0;i<5;i++){
    console.log(i);
}*/

/*for(var i=0;i<5;i++){

}
console.log(i); //var:5*/


/*for(let i=0;i<5;i++){

}
console.log(i);   //let :ReferenceError: i is not defined
*/
//var keyword breaks the scope of rule..
//let keyword obey the scope of rule...
//*******************************************


//duplicate variables

/*var sub="javascript";
var sub="welcome javascript";
console.log(sub); //var:welcome javascript
*/

/*
let sub="javascript";
let sub="welcome javascript";
console.log(sub); //let:SyntaxError: Identifier 'sub' has already been declared
*/

// var keyword allows the duplicate variables
// let keyword won't allows the duplicate variables

//************************************************ */

//block of code
/*
var data=200; //global variable //we can access any where
//console.log(data);
{
    var data=100;
    //console.log(data); // it is access only with in the method
}

console.log(data); //var :100 that is bugin present in the var keyword...
*/

/*
let data=200;

{
    let data=100;
}
console.log(data);//let:200
*/

// var keyword -->global polluting issue==>if any block of code effecting global member called as global polluting issue..
// global polluting issue raised because of var keyword..
// we can overcome this problem by using let keyword..

//************************************************************ */




//variable declaration 
//variable initilization
//variable accesing

/*var msg="hello";
console.log(msg); var:hello*/

/*console.log(msg);
var msg="hello"; //var:undefined */

/*console.log(msg);
let msg="hello"; //let:ReferenceError: Cannot access 'msg' before initialization
*/

// getting undefined before declaration and initilization we can call this as variable hoisting...
// variable hoisting issue raised because of var keyword
// we can overcome this problem by using let keyword.......

//********************************************************************************************** */




 



//*******************************************************************************************//
//diff b/w var and let keywords
//*****************************

 /*         var                                                let
     **************                                   *********************


 version introduced in ES1                             version introduced in ES6


1)  var keyword scope rule break                      let keyword follow the scope of rule

2)  duplicate variables allows                         duplicate variables won't allowed
                                    
3) global polluting issue raised                       we can overcome that problem by using let keyword

4) variable hoisting issue raised                     we can overcome that problem by using let keyword


*/
//************************************************************************************************//







//const keyword
// const means value cannot modify....

//const data=100;
//data=200; //TypeError: Assignment to constant variable.


const arr=[1,2,3,4,5];
//arr=[];//TypeError: Assignment to constant variable.


arr[0]=400;
arr[4]=500;
arr[5]=600;
console.log(arr); //[400,2,3,4,500,600]

arr.pop();               // pop means last row .to delete that row we can use this one....
console.log(arr);       //[400,2,3,4,500]

arr.shift();         // shift menas first row .to delete that row we can use this one......
console.log(arr);   // [ 2, 3, 4, 500 ]   


const obj={                     // when ever we open the flower bracket and write something and then close is called as JSOn object.....
    "sub_one":"angular12",
    "sub_two":"nodejs",          
    "sub_three":"reactjs"
}
//obj={} //TypeError: Assignment to constant variable.// we can't modify the const data........

obj.sub_one="angular12";
obj.sub_two="mongodb";
obj.sub_three="oracle";
console.log(obj); // sub_one: 'angular12', sub_two: 'mongodb', sub_three: 'oracle' }



















