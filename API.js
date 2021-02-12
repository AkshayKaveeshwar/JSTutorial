//before this, go through api.chucknorris.io website

fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        var joke = data.value;
        console.log("JOKE", joke);
    })
    .catch();