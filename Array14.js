//reverse()
// it is used to reverse the array elements then we have to use this function...


console.log(
    [1,2,3,4,5,6,].reverse()
);
                                                        //[ 6, 5, 4, 3, 2, 1 ]

console.log(
    [10,20,30,40,50].reverse()
);

                                                        //[ 50, 40, 30, 20, 10 ]

console.log(
    ["java","javascript","adv java"].reverse()
);
                                                         //[ 'adv java', 'javascript', 'java' ]
/*
console.log(
    "hello".reverse()
);                                                          //"hello".reverse is not a function
*/


console.log(
    Array.from("hello")
);                                   //[ 'h', 'e', 'l', 'l', 'o' ]
                               // from function will convert string to equivalent array

console.log(
Array.from("hello").reverse()
);                                       //[ 'o', 'l', 'l', 'e', 'h' ]


console.log(
    Array.from("hello").reverse().toString().replace(/,/g,"")        //olleh

);                                                      //o,l,l,e,h

// in order to convert the string we will use tostring()
// inorder to remove commas we will ue replace with globally
// tostring function is older one So the latest function is join()






console.log(

    Array.from("welcome").reverse().join("")             //emoclew

);





console.log(
    Array.from("hi").reverse().join("")
);                                                      //ih


console.log(
    Array.from("nithish").reverse().join("")
);
                                                      //hsihtin


console.log(
    Array.from("welcome to nithish").reverse().join("")
);
                                                    //hsihtin ot emoclew
















