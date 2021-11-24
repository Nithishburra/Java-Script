/*
console.log(
    "welcome to javascript".substr(0,7)
);                                                      //welcome

console.log(
    "welcome to javascript".substr(8,2)
);                                                   //to

console.log(
    "welcome to javascript".substr(11,10)
);                                                      //javascript
*/



console.log(

    "hi nithish".substr(0,2)                      //hi

);



console.log(
    "hi nithish".substr(3,7)                      //nithish
);





console.log(
    "hi nithi how are you".substr(0,20)                 //hi nithi how are you
);


console.log(
    "hey good bye!".substr(0,13)
);                                                        //hey good bye!



//includes()
// it is used to if the element avialable then it is return true..if element is not available then it is return false...

console.log(
    [1,2,3,4,5].includes(1)
);                                       //true

console.log(
    [10,20,30,40,50].includes(4)
);                                          //false



console.log(
       [100,200,300,400].includes(4)
);                                           //false



//length

console.log(
    ("hello").length                      //5
);



console.log(" welcome ".length);              //9


console.log(" hi ".length);                   //4


//trim()
//it is used to  removing  begining  and ending spaces ...

console.log(" welcome ".trim().length);              //7


console.log(" hi ".trim().length);                     //2


//trimstart()
//it used to remove the space in starting only....

console.log(" hey ".trimStart().length);                  //4

console.log(" java ".trimStart().length);                 //5




//trimend()
//it is used to remove space at the ending only...

console.log(" hi ".trimEnd().length);                 //3
                                              

console.log(" bye ".trimEnd().length);                 //4




//padstart()
// it is used to add the elements at the starting we have to use this function........
 console.log(
     "welcome".padStart(14,"#")                  //#######welcome
 );

 //padend()
// it is used to add the elements at the ending we have to use this function........
 console.log(
     "hello".padEnd(10,"*")                 //hello*****
 );




 console.log(
     "welcome to js".padStart(16,"$").padEnd(20,"*")
 );                                                        //$$$welcome to js****



 console.log(
     "welcome to IT".padStart(18,"@").padEnd(24,"#")
 );

                                                          //@@@@@welcome to IT######



//lastindexof()
// it is used to if the elements are repeating the number of times in array then if we want to find the last index of that element then we have to use this function..

console.log(
    [1,2,3,1,4,5,6,1].lastIndexOf(1)
);                                           //7



console.log(
    [1,2,3,4,2,5,2].lastIndexOf(2)
);                                             //6


console.log(
    [10,30,40,30,60,30].lastIndexOf(30)
);
                                                 //5
console.log(
    [100,200,100,400].lastIndexOf(100)
);                                               //2


console.log(
    [1000,2000,3000,2000,5000,6000].lastIndexOf(2000)
);
                                                               //3



//repeat()
// if we want to repeat the element number of times then we have to use this fucntion....


console.log(
    "hello".repeat(5)
);



console.log(
    "hi".repeat(10)
);

console.log(
    "welcome".repeat(3)
);


//split()
//it is used to divide the String into list of substrings and then put these Substrings into one array .....

console.log(
 
    "welcome to ES6".split(" ")               //[ 'welcome', 'to', 'ES6' ]
);


console.log(

    "welcome to js".split(" ")                 //[ 'welcome', 'to', 'js' ]
);


console.log(
    "hi how are you".split(" ")                    //[ 'hi', 'how', 'are', 'you' ]
);







//Substring()

console.log(
    "welcome".substring(0,4)
);                                  //welc



console.log(
    "hello".substring(0,2)
);                              //he

console.log(
    "hey".substring(1,3)
);                             //ey


console.log(
      "bye man".substring(0,4)
);                                      //bye




console.log(
    "welcome@to$ashokit#".replace("@"," ").replace("$"," ").replace("#"," ")
);









































































