//Copywithin()
// it is used to shift the indexes we have to use this function...

let arr1 = [10,20,30,40,50,60,70,80,90,100]
arr1.copyWithin(5);
console.log(arr1);              //[10,20,30,40,50 ,10,20,30,40,50]





let arr2 = [100,200,300,400,500]
arr2.copyWithin(3);
console.log(arr2);                  //[ 100, 200, 300, 100, 200 ]




let arr3 = [50,60,70,80,90,100,110,120]
arr3.copyWithin(4);
console.log(arr3);                          //[ 50, 60, 70, 80,  50, 60, 70, 80]


let arr4 = [11,22,33,44,55,66,77,88,89]
arr4.copyWithin(3);
console.log(arr4);                        //[11,22,33,11,11,22,33,44,55,66]



let arr5 = [10,20,30,40,50,60,70,80,90,100]
arr5.copyWithin(-3);
console.log(arr5);


let arr6 = [1,2,3,4,5,6,7]
arr6.copyWithin(-4);
console.log(arr6);




let arr7 = [100,200,300,400,500,600]
arr7.copyWithin(-2);
console.log(arr7);
                                                     ////[ 100, 200, 300, 400, 100, 200 ]


let arr8 = [10,20,30,40,50,60,70]
arr8.copyWithin(-4);                                 
console.log(arr8);



let arr9 = [1,2,3,4,5]
arr9.copyWithin(-3);
console.log(arr9);                              ///[ 1, 2, 1, 2, 3 ]




let arr10 = [100,200,300,400,500,600,700,800,900]
arr10.copyWithin(3,7);
console.log(arr10);                        //{100,200,300,800,900,600,700,800,900]

let arr11 = [1,2,3,4,5]
arr11.copyWithin(2,4);
console.log(arr11);                       //[ 1, 2, 5, 4, 5 ]

let arr12 = [2,3,4,5,6,7,8,9]
arr12.copyWithin(5,7);
console.log(arr12);                        //[2, 3, 4, 5,6, 9, 8, 9]



let arr13 = [100,200,300,400,500,600]
arr13.copyWithin(2,5);
console.log(arr13);
                                          //[ 100, 200, 600, 400, 500, 600 ]
                
let arr14 = [10,20,30,40,50,60,70,80]
arr14.copyWithin(3,6);
console.log(arr14);                       ///[10,20,30,70,80,60,70,80]



let arr15 = [10,20,30,40,50,60,70,80,90,100]
arr15.copyWithin(1,3);
console.log(arr15);


let arr16 = [1,2,3,4,5,6]
arr16.copyWithin(-2,-4);
console.log(arr16);                                //[ 1, 2, 3, 4, 3, 4 ]


let arr17 = [10,20,30,40,50,60,70]
arr17.copyWithin(-3,-4);
console.log(arr17);


let arr18 = [100,200,300,400,500,600,700]
arr18.copyWithin(-5,-6);
console.log(arr18);



let arr19 = [10,20,30,40,50,60,70,80,90,100]
arr19.copyWithin(-4,-7);
console.log(arr19);

                                                   //[10,20,30,40,50,60,40,50,60,70]


let arr20 = [1,2,3,4,5,6,7]
arr20.copyWithin(-5,-7);
console.log(arr20);




let arr21 = [200,300,400,500,600,700]
arr21.copyWithin(-2,-5);
console.log(arr21);


let arr22 = [10,20,30,40]
arr22.copyWithin(-1,-2);
console.log(arr22);

let arr23 = [10,20,30,40,50]
arr23.copyWithin(-3,-5);
console.log(arr23);                            //[ 10, 20, 10, 20, 30 ]


let arr24 = [11,22,33,44,55,66]
arr24.copyWithin(-3,-6);
console.log(arr24);                             // [ 11, 22, 33, 11, 22, 33 ]

let arr25 = [1,2,3,4,5,6]
arr25.copyWithin(-4,-6);
console.log(arr25);
                                                  //[ 1, 2, 1, 2, 3, 4 ]


let arr26 = [10,20,30,40,50,60,70]
arr26.copyWithin(-6,-7);
console.log(arr26);





let arr27 =[10,20,30,40,50,60,70,80,90,100]
arr27.copyWithin(2,4,7);
console.log(arr27);




let arr28 = [10,20,30,40,50,60,70,80]
arr28.copyWithin(1,4,5);
console.log(arr28);



let arr29 = [10,20,30,40,50]
arr29.copyWithin(0,2,4);
console.log(arr29);                              // [ 30, 40, 30, 40, 50 ]




let arr30 = [100,200,300,400,500,600,700,800]
arr30.copyWithin(3,5,7);
console.log(arr30);















