document.addEventListener("DOMContentLoaded", function () {

let result = document.querySelector("#input");
let button = document.querySelector("#button");
let infoDiv = document.querySelector("#info");


const getWeather = async () => {
  let inputValue = result.value;
  const apiKey = `35b1f1d45a7b4378cf2430ae601816be`;

  infoDiv.innerHTML = '';

  await axios
  .get(
`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric` 
// &units=metric  გადავეცით რათა სწორად წასაკითხად ამოიბეჭდოს ტემპერატურის და სხვა მონაცემები 
)
  .then((data) => {
    const datas = data.data;

    const cityName = document.createElement("h2");
    cityName.textContent = `NAME: ${datas.name}`
    infoDiv.appendChild(cityName);

    const country = document.createElement("h2");
    country.textContent = `COUNTRY: ${datas.sys.country}`;
    infoDiv.appendChild(country);

    const temperature = document.createElement("p");
    temperature.textContent = `TEMPERATURE: ${datas.main.temp}C`;
    infoDiv.appendChild(temperature);

    const Description = document.createElement("p");
    Description.textContent = `DESCRIPTION: ${datas.weather[0].description}`;
    infoDiv.appendChild(Description);
  }) .catch((error) => {
    console.error(`Error: ${error}`)
  });

};

button.addEventListener("click", getWeather);
});
