var student = {
  name: "deepak",
  rollNo: 21,
  batch: "MERN Stack",
  duration: "72hrs",
};

// Object
// collect all props in an array
var allKeys = Object.keys(student);
var allValues = Object.values(student);
var allInArray = Object.entries(student);

console.log(allInArray);
