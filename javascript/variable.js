/*
// variables use 'var' for each variable
// variable name should start with an letter not number 
// variables are case sensitive
*/

var a; // declaration fo an variable ""no need to use any data type""
var b = 10;
document.write(a + "<br>");
document.write(b);



//float
var num = 20.5;
document.write("<br>" + num + "<br>");
num = 10.555555;
document.write(num);


//string
var name = 'Piyush';
var lastname = 'Anand';
document.write("<br>" + name + " " + lastname);
name = 'Anand';
document.write("<br>" + name + " " + lastname);



//boolean true or false
var boo = true;
document.write("<br>" + boo);



//null
var nul = null;
document.write("<br>" + nul);



var value = 10;
var number = 10;
document.write("<br>" + (value == number));

var a; // no value assinged therefore 'null'
document.write("<br>" + (a == null));



//dynamic property of javascript
var value;
value = 10;
value = 'Piyush';
document.write("<br>" + value); // value can be replaced by the next value of the same name

var a = 10;
var b = '10';
document.write("<br>" + (a == b)); // ""=="" is used to compare the values only

document.write("<br>" + (a === b)); // ""==="" is used to compare the data type of the variable