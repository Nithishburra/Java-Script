//splice 

// we have to take index position and number of elements to delete ..

/*
let arr1 =[10,20,30,40,50,60,70,80,90,100]
console.log(arr1);

arr1.splice(5,2);
console.log(arr1);   //[10,20,30,40,50,80,90,100]

arr1.splice(6,1);
console.log(arr1);   ////[10,20,30,40,50,80,100]

arr1.splice(6,1);
console.log(arr1);     //[10,20,30,40,50,80,100]

arr1.splice(2,2);
console.log(arr1);   //[ 10, 20, 50, 80 ]

arr1.splice(2,1); 
console.log(arr1);    //[ 10, 20, 80 ]


*/



/*

let arr1=[10,20,30,40,50]
console.log(arr1);             //[ 10, 20, 30, 40, 50 ]

arr1.splice(1,1);
console.log(arr1);             //[ 10, 30, 40, 50 ]

arr1.splice(1,0,20);
console.log(arr1);              //[ 10, 20, 30, 40, 50 ]

arr1.splice(3,0,50,60);
console.log(arr1);                ////[ 10, 20, 30,50,60, 40, 50 ]
                       
arr1.splice(3,2);
console.log(arr1);              //[ 10, 20, 30, 40, 50 ]

arr1.splice(4,0,60,70,80);
console.log(arr1);                 //[ 10, 20, 30, 40,60,70,80, 50 ]


arr1.splice(4,3);
console.log(arr1);               //[ 10, 20, 30, 40, 50 ]



arr1.splice(5,0,60,70,80);
console.log(arr1);                 ////[ 10, 20, 30, 40, 50, 60, 70, 80 ]

arr1.splice(7,0,90,100);
console.log(arr1);                    //[ 10, 20, 30, 40, 50, 60, 70,90,100, 80 ]


arr1.splice(7,2);
console.log(arr1);                ///[ 10, 20, 30, 40, 50, 60, 70, 80 ]


arr1.splice(8,0,90,100);
console.log(arr1);                ///[ 10, 20, 30, 40, 50, 60, 70, 80 ,90 ,100 ]


*/






/*
let arr1 =[1,3,5,7,9]
console.log(arr1);                 //[ 1, 3, 5, 7, 9 ]
               

arr1.splice(0,0,0);
arr1.splice(2,0,2);
arr1.splice(4,0,4);
arr1.splice(6,0,6);
arr1.splice(8,0,8);
arr1.splice(10,0,10);
console.log(arr1);               //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]
*/


let arr1=[20,40,60,80,100]

console.log(arr1);                    //[ 20, 40, 60, 80, 100 ]



arr1.splice(0,0,10);
arr1.splice(2,0,30);
arr1.splice(4,0,50);
arr1.splice(6,0,70);
arr1.splice(8,0,90);
console.log(arr1);                   ////[10, 20, 30, 40, 50,  60, 70, 80, 90, 100 ]




























