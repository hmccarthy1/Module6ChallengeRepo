console.log("hello, world")

const searchBar = $('#searchLocation')
console.log(searchBar)
const searchButton = document.getElementById('searchButton');
const cityName = $('#cityName');
const largeWeatherIcon = $('#largeWeatherIcon');


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

        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${values[0].lat}&lon=${values[0].lon}&appid=106768b99c3bf32d1e789810e42deff2`).then(function (response) {

            return response.json();
        }).then(function (data) {
            console.log(data);
            cityName.html(data.city.name);
            largeWeatherIcon.attr("src", `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`)

        })


    })
}
)

