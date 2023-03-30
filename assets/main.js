console.log("hello, world")
var today = dayjs().format('MM/DD/YYYY');
const searchBar = $('#searchLocation')
console.log(searchBar)
const searchButton = document.getElementById('searchButton');
const cityName = $('#cityName');
const largeWeatherIcon = $('#largeWeatherIcon');
const tempLabel = $('#tempLabel');
const windLabel = $('#windLabel')
const humidityLabel = $('#humidityLabel')
const date1 = $('#date1');
const date2 = $('#date2');
const date3 = $('#date3');
const date4 = $('#date4');
const date5 = $('#date5');
const temp1 = $('#temp1');
const temp2 = $('#temp2');
const temp3 = $('#temp3');
const temp4 = $('#temp4');
const temp5 = $('#temp5');
var dataRes;






function geoCode() {
    return new Promise((resolve, reject) => fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchBar.val()},&appid=106768b99c3bf32d1e789810e42deff2`)
        .then(function (response) { return response.json() })
        .then(function (data) {

            dataRes = data;
            resolve(data);
        }))

}


searchButton.addEventListener('click', () => {
    geoCode().then(values => {

        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${values[0].lat}&lon=${values[0].lon}&units=imperial&appid=106768b99c3bf32d1e789810e42deff2`).then(function (response) {

            return response.json();
        }).then(function (data) {
            console.log(data);
            cityName.html(data.city.name);
            largeWeatherIcon.attr("src", `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`);
            tempLabel.text("Temp: " + data.list[1].main.temp);
            windLabel.text(`Wind Speed: ${data.list[1].wind.speed}`);
            humidityLabel.text('Humidity: ' + data.list[1].main.humidity);
            console.log(today)
            date1.text(today);
            date2.text(dayjs().add(1, 'day').format('MM/DD/YYYY'));
            date3.text(dayjs().add(2, 'day').format('MM/DD/YYYY'));
            date4.text(dayjs().add(3, 'day').format('MM/DD/YYYY'));
            date5.text(dayjs().add(4, 'day').format('MM/DD/YYYY'));
            temp1.text('Temp: ' + data.list[1].main.temp);
            temp2.text('Temp: ' + data.list[9].main.temp);
            temp3.text('Temp: ' + data.list[17].main.temp);
            temp4.text('Temp: ' + data.list[25].main.temp);
            temp5.text('Temp: ' + data.list[33].main.temp);
           
        })


    })
}
)

