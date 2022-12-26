// Console

// store it and after that we can use it
// variables =>
// var => ES5
// let , const => ES6

var studentName = "Deepakkumar"; // string
var studentRollNumber = 123; // number
var studentMarks = 50.7; // number
var studentIsPresent = true; // boolean
var studentLastMarks; // undefined
var studentParentDetails = null; // object

/**
 * DATA TYPES
 * string
 * number
 * boolean
 * undefined
 * object => array, JSObject, Function , null
 */

/**
 * Primitive Data Types => string ,number ,boolean
 * Non Primitive Data Type / Complex Type ==> array, object
 */

/** How to check a data type */

// Error (not defined) => Uncaught ReferenceError: (Don't have a memory)
// Undefined => variable has/have memory but don't have data

var text; // memory
var type = typeof text;
//console.log(type, text);

// How we can declare a variable
var abc = 123;
var ABC = 123;
var Abc = 123;
var aBC = 123;
var a45 = 123;
var _45 = 123;
var $45 = 123;

var studentName = "Camel Case";
var StudentName = "Pascal Case";
var student_name = "Snack Case";

// local variable declare
var _local_variable = 123;

var a = "20";
var b = 10;

// + => Math Operation or Join Operation
// - / * => Math Operation ==> Convert a string number to pure number => this happen internally => Implicit Type Casting
// We can convert a string number to pure number externally also => Explicit Type Casting  "Number()"
a = Number(a);
var result = a + b;
//console.log(result);

// Arithmetic Operation
var a = 10 + 20;
var b = 10 - 20;
var c = 10 * 20;
var d = 11 / 2; // 5.5
var e = 11 % 2; // 1

//console.log("div", d);
//console.log("modules", e);

// conditional statements
// => if else, switch
var trainer = "available";
// if the trainer is available we will take a batch , else we will  not take a batch
if (trainer == "available") {
  // console.log("we will take a batch ");
} else {
  // console.log("we will  not take a batch");
}

// operators
/** comparisons operators
 *
 * == it checks only data
 * === it checks data and also data type
 * !=
 * !==
 * <
 * <=
 * >
 * >=
 *
 */
/*var a = "31"; // string number
var b = 31; // number

if (a != b) {
  console.log("yes");
} else {
  console.log("no");
}*/

// assignment operators
var a = 10;

// a += 30; // a = a + 30;
//a -= 30; // a = a - 30;
// a *= 30; // a = a * 30;
// a /= 30; // a = a / 30;
//a %= 30; // a = a % 30;

//++a;
//a++;

//--a;
//a--;
//console.log(a);

// logic operators
// AND => LHS and RHS => True Else False => &&
// OR =>  Any One i.e LHS or RHS => True Else False => ||
// NOT => Value True => convert It to false => !
var a = 10;
var b = 11;
var c = 11;
if (a == b || b == c) {
  console.log("yes");
} else {
  console.log("no");
}

var a = true;

if (!a) {
  console.log("yes");
} else {
  console.log("no");
}
// functions
// array
