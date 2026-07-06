const apiKey = "0d283285c74330bd9746c17c95510ae0";
document.getElementById("button").addEventListener("click", async () => {
    const city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const result = await fetch(url);
        const data = await result.json();
        document.getElementById("city-name").innerHTML = data.name;
        document.getElementById("temp").innerHTML = data.main.temp + " °C";
        document.getElementById("humidity").innerHTML = data.main.humidity + " %";
        document.getElementById("desc").innerHTML = data.weather[0].description;
    } catch (error) {
        error("something is error");
    }
});