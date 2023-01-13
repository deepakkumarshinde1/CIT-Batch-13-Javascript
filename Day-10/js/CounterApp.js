function testElement(element) {
  if (element === null) {
    console.error("element not available");
  } else {
    console.log(element);
  }
}

var decBtn = document.querySelector("#decBtn");
var counterText = document.querySelector("#counterText");
var incBtn = document.querySelector("#incBtn");
var resetCount = document.querySelector("#resetCount");

var counter = 0;
decBtn.addEventListener("click", function (e) {
  count("dec");
});

incBtn.addEventListener("click", function (e) {
  count("inc");
});

resetCount.addEventListener("click", function (event) {
  count();
});

function count(type = "") {
  switch (type) {
    case "inc":
      counter++;
      break;

    case "dec":
      counter--;
      break;

    default:
      counter = 0;
      break;
  }
  counterText.innerHTML = counter;
}

// to access server data => js
// xhr => xml http request => AJAX
// fetch => promise base api

//
//
//        => start at 8
/** promise base api
 *  we will have session at 8.00
 *          => start at 8 => true (resolve) => handel data in then()
 *          => canceled => false (reject) => handel data in catch()
 *  */

async function sessionStatus(isTrainerAvailable) {
  if (isTrainerAvailable === true) {
    return Promise.resolve("session start at 8");
  } else {
    return Promise.reject("session canceled");
  }
}

sessionStatus(true)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error(error);
  });
