// This is file is loaded by index.hbs and contains the logic on client-side
// Here we intend to issue a request to the server with fetch to get the weather data

console.log('Client-side javascript file is loaded!');

fetch('http://localhost:3000/weather?address=Boston').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            return console.log(data.error);
        }

        console.log("Forecast: ", data.forecast);
        console.log("Location: ", data.location);
    });
});