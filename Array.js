//length
/*
let arr=[10,20,30,40,50]
 console.log(arr.length);    //5
 console.log(arr[0],arr[2],arr[4]);//10 30 50
 console.log(arr[2],arr[5]);   //30 undefined
 arr.length=3;
 console.log(arr.length);
 console.log(arr[0],arr[2],arr[4]);//10 30 undefined
 console.log(arr[0],arr[2],arr[1],arr[3],arr[4],arr[5],arr[-1]);//10 30 20 undefined undefined undefined undefined

 //push()=> it is used to add the element at the last
 //pop()=> it is used to delete the element at the last place
 //shift()=> it is used to remove the element at the beginning
 //unshift()=>it is used to add the element at the beginning

*/


/*
let arr=[20,30,40]
console.log(arr); //[ 20, 30, 40 ]

arr.push(50);
console.log(arr); //[ 20, 30, 40, 50 ]


arr.unshift(10);
console.log(arr);  //[ 10, 20, 30, 40, 50 ]


arr.pop();
console.log(arr);  // 10, 20, 30, 40 ]


arr.shift();
console.log(arr);  //[ 20, 30, 40 ]

arr.unshift(100);
console.log(arr);  //[ 100, 20, 30, 40 ]


arr.shift();
console.log(arr);   //[ 20, 30, 40 ]

*/




/*
let the=[1,2,3,4,5]    
 console.log(the.length);  //5

 delete the[0] // it will delete the element but memory will not released by the delete keyword that is bug in the delete keyword
 console.log(the.length); //5
 console.log(the);           //[ <1 empty item>, 2, 3, 4, 5 ]





 let arr =[100,200,300,400,500]
 console.log(arr.length);

 delete arr[0]
 delete arr[4]
 console.log(arr.length);    //5
 console.log(arr);  //[ <1 empty item>, 200, 300, 400, <1 empty item> ]

*/




/*
let arr1=[10,20,30,40,50]
let arr2=[50,60,70,80,90,100]
let arr3=[...arr1,...arr2]       //by using the spread opeator we can concatenate the arrays....
console.log(arr3);


let var1=[10,20,30]
let var2=[30,40,50]
let var3=[...var1,...var2]
console.log(var3);                [ 10, 20, 30, 30, 40, 50 ]
*/





/*
//cloning
let arr1=[10,20,30]
let arr2=[...arr1]
console.log(arr1);   //[ 10, 20, 30 ]
console.log(arr2);   //[ 10, 20, 30 ]

arr1.pop();
arr1.push(50);

console.log(arr1); //[ 10, 20, 50 ]
console.log(arr2);  //[ 10, 20, 30 ]

arr2.pop()
console.log(arr1);  //[ 10, 20, 50 ]
console.log(arr2);  //[ 10, 20 ]


arr1.unshift(60);
arr2.push(10);
console.log(arr1);  //[ 60, 10, 20, 50 ]
console.log(arr2);  //[ 10, 20, 10 ]


arr1.shift();
console.log(arr2);   //[ 10, 20, 10 ]
console.log(arr1);  //[ 10, 20, 50 ]
*/



 




















