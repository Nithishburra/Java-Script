console.log("welcome to the java script");

console.log(10+10);
console.log(10+"10"); //string concatenation will be happening..
console.log(10+ +"10");//inorder to convert string to number we have to use this '+' symbol...
console.log(10+10+ +"10");
console.log(10-2);
console.log(10-"2");//internally string will convert to number by using interpreter......
console.log(10+10+"10");
console.log(10+10+ +"10");
console.log(10-"2"-"8");
console.log(10+"2"-"2");
console.log(10>9>8);//ten greater than nine the ans is true.in java script true means value that is"1".so 1>8 is become false..
console.log(10 *"10");//string will convert to number internally....
console.log(100/"100");
console.log(100/"0");//it is infinity....
console.log(100+"100");
console.log(100+ +"100");
console.log(100+ +"100"-"100"*"100");


//*** equal operator will compare with  left side value with righside value...and it is accept only values....

console.log(1=="1");
console.log(1==="1");

///***** equal operator will compare value and datetype.................

console.log("hi"==="hi");
console.log(1==="one");
console.log("JAZ"=="JAZ");
console.log("hey"==="1");
console.log("hey"==="hey");
console.log(1+true);
console.log(1-true);
console.log(1+true-true);
console.log(1+"true");
console.log(1+ +"true");
console.log(1+true-false);
console.log(1+true+true-true-false);
console.log(3+true-false+true-false);
