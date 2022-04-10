let weather ={
    apiKey:"01e56457f20f3c38687160f7c4ff73bb",
    FetchWeather: function (zipcode){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?zip=" + zipcode +"&units=imperial" + "&appid=" + this.apiKey
        ).then((response)=>response.json())
        .then((data)=> this.displayWeather(data));
    },

    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp} = data.main;
        const {temp_max} = data.main;
        const {temp_min} = data.main;
        const timezone = new Date();
        console.log(name,icon,description, temp,  temp_max, temp_min, timezone)
        document.querySelector(".city").innerText = name;
        document.querySelector(".current-date").innerText = timezone.toDateString();
        document.querySelector(".current-temp").innerText = temp + "°F";
        document.querySelector(".current-conditions").innerText = description;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".current-Hi").innerText = "High: " + temp_max;
        document.querySelector(".current-Lo").innerText = "Low: " + temp_min;
    },
    search: function () {
        this.FetchWeather(document.querySelector(".search-bar").value)
    }
};

document.querySelector(".search button").addEventListener('click', function(){
    weather.search();
})

document.querySelector(".search-bar").addEventListener('keyup', function (){
    if (event.key == "Enter"){
        weather.search();
    }
})

