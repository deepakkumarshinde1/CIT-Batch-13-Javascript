window.addEventListener("load", onLoad);
var userList = [];
function onLoad() {
  _event("#userForm", "submit", function (event) {
    event.preventDefault();
    var [userDetails] = _getFromData(this);
    userList.push(userDetails);
    console.log(userList);
  });
}

// add new user
// print user list
// delete user
// edit user
// destructuring

// var newUser = data[0]
// var formData = data[1]
//var [newUser,formData] = data
