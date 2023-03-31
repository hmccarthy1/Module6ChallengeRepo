var searchHistory = [];
console.log(localStorage.getItem('Searches'))

if (!localStorage.getItem('Searches')) { }
else {
    console.log("test")
    searchHistory = [JSON.parse(localStorage.getItem('Searches'))]
    console.log(searchHistory)
}




var searchTerm;
console.log("hello, world")
var today = dayjs().format('MM/DD/YYYY');
let searchBar = $('#searchLocation');
if (!localStorage.getItem('Searches') === "") { searchBar.attr('placeholder', searchHistory[0][searchHistory[0].length - 1]) }
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

$('section.citySection').click(async () => {
    console.log(event.target.textContent)
    searchTerm = event.target.textContent
    geoCode(searchTerm).then(values => {

        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${values[0].lat}&lon=${values[0].lon}&units=imperial&appid=106768b99c3bf32d1e789810e42deff2`).then(function (response) {

            return response.json();
        }).then(async function (data) {
            $("img").css('visibility', 'visible')
            searchHistory.push(searchTerm);
            console.log(searchHistory)
            localStorage.setItem("Searches", JSON.stringify(searchHistory))
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
            $('#img1').attr('src', `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`)
            $('#img2').attr('src', `https://openweathermap.org/img/wn/${data.list[9].weather[0].icon}@2x.png`)
            $('#img3').attr('src', `https://openweathermap.org/img/wn/${data.list[17].weather[0].icon}@2x.png`)
            $('#img4').attr('src', `https://openweathermap.org/img/wn/${data.list[25].weather[0].icon}@2x.png`)
            $('#img5').attr('src', `https://openweathermap.org/img/wn/${data.list[33].weather[0].icon}@2x.png`)

        })


    })

})

var forecastImages = Array;
forecastImages = [
    $('#img1'),
    $('#img2'),
    $('#img3'),
    $('#img4'),
    $('#img5'),

]




function geoCode(searchTerm) {

    return new Promise((resolve, reject) => fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm},&appid=106768b99c3bf32d1e789810e42deff2`)
        .then(function (response) { return response.json() })
        .then(function (data) {

            dataRes = data;
            resolve(data);
        }))

}


searchButton.addEventListener('click', async () => {

    searchTerm = searchBar.val();
    geoCode(searchTerm).then(values => {

        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${values[0].lat}&lon=${values[0].lon}&units=imperial&appid=106768b99c3bf32d1e789810e42deff2`).then(function (response) {

            return response.json();
        }).then(async function (data) {
            $("img").css('visibility', 'visible')
            searchHistory.push(searchBar.val());
            console.log(searchHistory)
            localStorage.setItem("Searches", JSON.stringify(searchHistory))
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
            $('#img1').attr('src', `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`)
            $('#img2').attr('src', `https://openweathermap.org/img/wn/${data.list[9].weather[0].icon}@2x.png`)
            $('#img3').attr('src', `https://openweathermap.org/img/wn/${data.list[17].weather[0].icon}@2x.png`)
            $('#img4').attr('src', `https://openweathermap.org/img/wn/${data.list[25].weather[0].icon}@2x.png`)
            $('#img5').attr('src', `https://openweathermap.org/img/wn/${data.list[33].weather[0].icon}@2x.png`)

        })


    })
}
)

