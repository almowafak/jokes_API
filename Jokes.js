fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
    "x-rapidapi-key": "f3429b71d9mshc1bd5baa94078f9p160845jsn507a539f58f3",
    accept: "application/json"
  }
})
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(response => {
    console.log(response);
    document.getElementById("joke").innerHTML += response.value;
  })

  .catch(err => {
    console.log(err);
  });

function weatherBallon(cityID) {
  var key = "a00e4a0493e6a0cb10bb24c8bc828b96";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?id=360630&appid=a00e4a0493e6a0cb10bb24c8bc828b96"
  )
    .then(function(resp) {
      console.log(resp);
      return resp.json();
    }) // Convert data to json
    .then(function(d) {
      drawWeather(d);
    })
    .catch(function() {
      // catch any errors
    });
}
function drawWeather(d) {
  var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  var fahrenheit = Math.round((parseFloat(d.main.temp) - 273.15) * 1.8 + 32);
  var description = d.weather[0].description;

  document.getElementById("description").innerHTML = description;
  document.getElementById("temp").innerHTML = celcius + "&deg;";
  document.getElementById("location").innerHTML = d.name;

  if (description.indexOf("rain") > 0) {
    document.body.className = "rainy";
  } else if (description.indexOf("cloud") > 0) {
    document.body.className = "cloudy";
  } else if (description.indexOf("sunny") > 0) {
    document.body.className = "sunny";
  } else {
    document.body.className = "clear";
  }
}
window.onload = function() {
  weatherBallon(6167865);
};
