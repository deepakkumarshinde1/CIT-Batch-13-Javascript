// es6 === typescript ==> not equals

// js  ==> (ES5 + ES6/ES2015) + Types ===> Typescript

/*
    let const var 
    class (oop)
    arrow functions
    destructuring
    spread operators
    rest para
    includes  
    closures function 
    generators
    create our own iterators
*/

// class

// human ::: class ==> collection of property and method
// => legs = 2 , hand =2 ::: property's == variables
// => running() , talking(), walking() ::: methods === function

// deepak (instance) = human (class)
// suraj = human

// function ::: independent block of code
// function run(){

// }

// run()

class Human {
  leg = 2;
  running() {
    console.log("this is running methods");
  }
}

// crate a instance of it
// new ==> create a object of class
var deepak = new Human(); // Human()=> constructor
// deepak => object
deepak.running();

class Circle {
  radius = 10;
  draw() {
    console.log("this is a draw method");
  }
}
