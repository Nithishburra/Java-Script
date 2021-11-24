/*
function fun_one(arg1?:string,arg2?:string,arg3?:string):void{
      console.log(arg1,arg2,arg3);
}

fun_one();          //undefined undefined undefined
fun_one("gui","hello"); //gui hello undefined
fun_one("hey",null); //hey null undefined
fun_one(null,null,null); //null null null
fun_one(undefined,null,'hi'); //undefined null hi
fun_one(null,"hi","120"); //null hi 120
fun_one("bye"); //bye undefined undefined
*/
/*
function fun_one(arg2:string,arg1?:string):void{ //regular parameters always should be first
    console.log(arg1,arg2);
}
//fun_one();//Expected 1-2 arguments, but got 0...//we must have pass the value
fun_one("hello");  //undefined hello
fun_one("hi"); //undefined hi
fun_one("hey",null); //null hey
fun_one(null,null); //null null
fun_one(undefined); //undefined undefined
*/
/*
function fun_one(arg1:any,arg3:any="hello_2",arg2?:any,...arg4:any[]):any{
         console.log(arg1,arg2,arg3,arg4);
}

 //fun_one(); //Expected 2-3 arguments, but got 0
  //fun_one("hello",null,"hey"); //hello hey null []
   fun_one("hi",null,undefined,123); //hi undefined null [ 123 ]
   fun_one("hey",undefined,123,852); //hey 123 hello [ 852 ]
   fun_one("oops","hi","json","bye"); //oops json hi [ 'bye' ]
   fun_one("bye"); //bye undefined hello []
   fun_one("hi","hi","hi","hi","hi"); //hi hi hi [ 'hi', 'hi' ]
   fun_one("hi","hello","hey","bye"); //hi hey hello [ 'bye' ]
   fun_one("hi","hello_2","hello_3","hello_4");//hi hello_3 hello_2 [ 'hello_4' ]
*/
/*
function fun_two(arg1:string,op2?:any,arg3="hello_2"):any{
       console.log(arg1,op2,arg3);
}
 fun_two("hello"); //hello undefined hello_2
 fun_two("hi","huwai",null); //hi huwai hello_2
 fun_two("hey",123);//hey 123 1258
 fun_two(undefined,undefined,undefined);//undefined undefined hello_2
*/
function fun_one(op1, op2, op3, op4) {
    if (op4 === void 0) { op4 = "hi"; }
    console.log(op1, op2, op3, op4);
}
fun_one("hello", "hi");
fun_one("hi", "bye", "welcome");
fun_one(undefined, null, null, undefined);
