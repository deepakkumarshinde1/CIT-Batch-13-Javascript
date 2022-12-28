// console.log(studentList);
/*** array methods
 * Read => forEach
 * Add => push(), unshift()
 * Delete => pop(), shift() , splice()
 * update => splice()
 * search => find(), filter()
 * recreate => map()
 * a to s => join()
 * reduction => reduce()
 * sorting => sort()
 * includes() => ES7
 */

var studentList = [
  {
    name: "deepak",
    rollNo: 25,
    marks: 22,
  },
  {
    name: "Sagar",
    rollNo: 26,
    marks: 23,
  },
  {
    name: "Nitin",
    rollNo: 27,
    marks: 23,
  },
  {
    name: "Govind",
    rollNo: 27,
    marks: 30,
  },
  {
    name: "Govind",
    rollNo: 28,
    marks: 32,
  },
];

console.log(studentList);
var student = studentList[2]; // single student
/*********  forEach => read data  */
studentList.forEach(function (value, index) {
  // console.log(value, index);
});

// for
// var obj = {};
/*for (var index in studentList) {
  //console.log(studentList[index]);
}
for (var value of studentList) {
  console.log(value);
}*/

// array => loop => forEach => read
// react => array => loop => map => read

/** Add => push(), unshift() */
var newStudent = {
  name: "Sagar",
  rollNo: 29,
  marks: 50,
};

//studentList.unshift(newStudent);
// "push" can add data at the end of array;
// "unshift" add data at in beginning
// console.log(studentList);

/*** Delete => pop(), shift() , splice() */

// studentList.shift();

// "pop" deletes data from end
// "shift" deletes data from beginning
// "splice" deletes data at given index position

// studentList.splice(1, 1); // index,deleteCount

/*** update => splice(); */

//studentList[1].marks = 50;

/*var updateStudent = studentList[1];
updateStudent.marks = 50;
updateStudent.name = "Sagarkumar";

console.log(updateStudent);
studentList.splice(1, 1, updateStudent); // startIndex, DeleteCount , Add Data
*/

/*** search => find(), filter() */
var searchValue = 50;
var searchResult = studentList.filter(function (value) {
  return value.rollNo === searchValue;
});
// filter method gives us all match result => it returns a array => if record is not found we get []
// find method gives us a result => it returns only "one record" => if record is not found we get "undefined"
console.log(searchResult);
