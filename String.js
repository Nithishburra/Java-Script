//string is nothing but collection of characters..
//"" , '',  ``(backtick)
//`` backtick operator introduced in ES6..
//`` backtick operator called as template literal..
//`` backtick operator is used to define the "paragraphs"...



var sub="javascript";
var wish=`welcome to ${sub}`;
console.log(wish);

var sub_one="java";
var sub_two="adavance java";
var sub_three="html";
var fullstack =`welcome to these courses ${sub_one}  ${sub_two}   ${sub_three}`;
console.log(fullstack);

var tbl_name="student";
var marks=980;
var sql_query1=`select * from ${tbl_name} where smarks${marks}`;
console.log(sql_query1);


var tbl_name="employee";
 var sal="50000";
 var sql_query2=`select * from ${tbl_name} where employeesal> ${sal}`;
 console.log(sql_query2);

 var username="nithish123";
 var password="hash";
 var sql_query3=`select * from ${username} and ${password}`;
 console.log(sql_query3);

 var username="nithish123";
 var password="hash";
 var sql_query3=`select * from  ${tbl_name} where ${username} and ${password} and salary is>${sal}`;
 console.log(sql_query3);

var sub =`courses
***********
${sub_one}
${sub_two}
${sub_three}`;
console.log(sub);
