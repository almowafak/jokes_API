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
    document.write(
      "<h1 style='color:red'>Joke of the Day</h1>" + response.value
    );
  })
  .catch(err => {
    console.log(err);
  });
