async function weather(){
    let city = document.getElementById("input").value;

    let api_key = '2d6f74acbcd1189b33efc9db73ab739f';

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        let temp = data.main.temp;
        let weather = data.weather[0].description;
        let icon = data.weather[0].icon;

        document.getElementById("text").innerText = 
        `${icon}
        Temperature:n${temp}C
        Condition: ${weather}`
    })
    .catch(err =>{
        document.getElementById("text").innerText =
        `❌City Not Found, ${err.message}`;
    })

}