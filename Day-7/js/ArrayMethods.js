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
    rollNo: 45,
    marks: 33,
  },
  {
    name: "Sagar",
    rollNo: 26,
    marks: 28,
  },
  {
    name: "Nitin",
    rollNo: 31,
    marks: 23,
  },
  {
    name: "Govind",

    rollNo: 27,
    marks: 30,
  },
  {
    name: "Govindkumar",
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
//console.log(searchResult);

/**************** recreate => map() */
var newArray = studentList.map(function (value, index) {
  return "<li>" + value.name + "</li>";
});
// convert array to string => join()
var liList = newArray.join("");
//console.log(liList);

// marks average => add all values & then div by total length of an array
// reduce
var sumOfMarks = studentList.reduce(function (pValue, cValue) {
  return pValue + cValue.marks;
}, 0);
var length = studentList.length;
//console.log(sumOfMarks / length);

// sort ASC / DEC =>(a,b) => next value, pre value
// string => convert it a lowerCase or upperCase
var sortedArray = studentList.sort(function (next, pre) {
  var a = next.name.toLowerCase();
  var b = pre.name.toLowerCase();
  return a > b ? -1 : 1;
  //if (next.marks > pre.marks) return 1; // no swap
  //if (next.marks < pre.marks) return -1; // swap
});

//console.log(sortedArray);
/***** includes */
var array = [{ name: "deepak" }, 2, 3, 4, 5, 6, 7, 8];
var isIncluded = array.includes({ name: "deepak" });
console.log(isIncluded);
