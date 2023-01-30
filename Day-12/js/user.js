// API => Application Programing Interface

// Server <==== REST API ====> Client

// js API
/**
 * url
 *  => its works => true => resolve
 *  => its fail => false => reject
 * */
var cityNameInput = document.getElementById("cityNameInput");
var getDetails = document.getElementById("getDetails");
var cityName = document.getElementById("cityName");
var cityTemp = document.getElementById("cityTemp");

getDetails.addEventListener("click", function () {
  var city = cityNameInput.value;
  getData(city);
});

async function checkStatus(code) {
  switch (code) {
    case 200:
      return Promise.resolve(true);

    case 404:
      return Promise.reject("City Not Found");

    default:
      return Promise.reject("Server Error, Contact to Admin");
  }
}
async function getData(_cityName) {
  try {
    var API_KEY = "157d1b09f256c94d8cf63abeab265942";
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${_cityName}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    await checkStatus(response.status);

    let result = await response.json();
    cityName.innerHTML = result.name;
    cityTemp.innerHTML = result.main.temp;
    cityNameInput.value = "";
  } catch (error) {
    alert(error);
    cityName.innerHTML = "";
    cityTemp.innerHTML = "";
  }
}
