window.addEventListener("load", onLoad);
var userList = [];
function onLoad() {
  userList = localStorage.getItem("userList"); // '[]' or null
  userList = userList === null ? [] : JSON.parse(userList); // string to json array
  loadStudentTable();

  _event("#userForm", "submit", function (event) {
    event.preventDefault();
    var [userDetails] = _getFromData(this);
    if (isValidate(userDetails)) {
      userList.push(userDetails);
      updateLocalStorage();
      loadStudentTable();
    }
  });

  function loadStudentTable() {
    if (userList.length === 0) {
      let _tr = `<tr>
                <td colspan="5" class="text-center h5 text-primary">
                  Please add the user
                </td>
              </tr>`;
      _html("#studentTBody", _tr);
      return false;
    }
    let _trList = userList.map(function (user, index) {
      return `<tr>
                  <td>${index + 1}</td>
                  <td>${user.username}</td>
                  <td>${user.email}</td>
                  <td>${user.mobile}</td>
                  <td>
                    <button class="btn btn-danger btn-sm removeUser"  data-index="${index}">DEL</button>
                    <button class="btn btn-primary btn-sm">EDIT</button>
                  </td>
                </tr>`;
    });
    _trList = _trList.join(""); // array to string
    _html("#studentTBody", _trList);
    regRemoveEvent();
  }

  function regRemoveEvent() {
    _event(".removeUser", "click", function () {
      let _index = this.dataset.index;
      userList.splice(_index, 1); // index, delete count
      updateLocalStorage();
      loadStudentTable(); // repaint
    });
  }

  function updateLocalStorage() {
    // add , delete , read

    // json array to string => JSON.stringify()
    // string to json array  => JSON.parse()

    localStorage.setItem("userList", JSON.stringify(userList)); // inset and update
    //  localStorage.removeItem(key)
    //   localStorage.getItem(key)
  }
}

// add new user
// print user list
// delete user
// edit user
// destructuring

// var newUser = data[0]
// var formData = data[1]
//var [newUser,formData] = data

let validation = {
  username: /^[a-zA-Z ]+$/g,
  email: /^[a-zA-Z0-9]+[a-zA-Z._0-9]+@[a-z]{3,}[.][a-z]{2,}$/g,
  mobile: /^[6-9]{1}[0-9]{9}$/g,
  address: /^[a-zA-Z ]+$/g,
};

function isValidate(user) {
  let error = [];
  for (const key in user) {
    let test = user[key].match(validation[key]);
    test = test ? true : false;
    if (!test) {
      error.push({ error: key + " must be valid", key });
    }
  }
  return error.length === 0 ? true : false;
}
