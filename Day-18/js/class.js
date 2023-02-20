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

// write is once and then we will use it everywhere
// inheritance

class Shape {
  constructor(value, shapeType) {
    this.value = value;
    this.type = shapeType;
  }
  draw() {
    console.log(this.value, this.type);
  }
}

class Star extends Shape {}

class Square extends Shape {
  constructor(width_height) {
    super(width_height, "square");
  }
}

class Circle extends Shape {
  constructor(rad) {
    super(rad, "circle");
  }

  static printData() {
    console.log("hi");
  }
}

// if you wat to sent some data at object creation time => constructor
// constructor invoke at the time of object creation

// methods/prop called by using class Name are called as static method/property
// you need to define it as a static

var circle = new Circle(12);

circle.draw();
Circle.printData();
var square = new Square(5);

square.draw();

// access modifier :: public , private , protected
// abstract class
// interface

Date.now();
// Date => class and now is a method
