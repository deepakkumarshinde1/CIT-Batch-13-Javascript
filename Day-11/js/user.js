var userFrom = document.querySelector("#userFrom");
var userDoc = document.querySelector("#userDoc");
var previewImage = document.querySelector("#previewImage");

userFrom.addEventListener("submit", function (event) {
  event.preventDefault();
  var userDetails = {};
  var fromData = new FormData(userFrom);
  fromData.forEach(function (value, name) {
    userDetails[name] = value;
  });
  console.log(userDetails);
  userFrom.reset();
});

userDoc.addEventListener("change", function (event) {
  let file = event.target.files[0];
  if (file === undefined) {
    previewImage.src =
      "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg";
  }
  let reader = new FileReader();
  reader.onload = function () {
    previewImage.src = reader.result;
  };
  reader.readAsDataURL(file);
});
