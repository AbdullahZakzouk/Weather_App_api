var lat, lon;
function getWeather(lat, lon) {
  var status;
  $.ajax({
    url:
      "https://fcc-weather-api.glitch.me/api/current?" + lat + "&" + lon,
    dataType: "jsonp",
    success: function(json) {
      $("#city").text(json.name + ", ");
      $("#country").text(json.sys.country);
      $("#temp").text("Temp= " + json.main.temp + "ْ C " + "(");
      $("#mintemp").text(json.main.temp_min + ",");
      $("#maxtemp").text(json.main.temp_max + ")");
      $("#pressure").text("Pressure= " + json.main.pressure +" Pa");
      $("#humidity").text("Humidity= " + json.main.humidity + "%");
      $("#status").text(json.weather[0].main);
      backGroundImage(json.weather[0].main);
    },
    error: function(xhr, status, error) {
      $("#bring").text("I'm sorry but there was an error with the API request");
    }
  });
}
$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
});

function backGroundImage(status){
  var status = status.toLowerCase()
  switch (status) {
    case 'drizzle':
      document.body.style.backgroundImage = "url('https://www.lstatic.org//UserFiles/images/2017/default/weather-rain(2).jpg')"; 
      break;
    case 'clouds':
      document.body.style.backgroundImage = "url('https://www.weatherworksinc.com/sites/default/files/Stratus%20(Wikipedia).jpg')";
      break;
    case 'rain':
      document.body.style.backgroundImage = "url('http://www.hirunews.lk/Data/News_Images/201605/1462929594_5245870_hirunews_1461375896_3839260_hirunews_1441598296_1433582_hirunews_rain.jpg')";
      break;
    case 'snow':
      document.body.style.backgroundImage = "url('http://kezj.com/files/2013/12/snow-flickr-thisreidwrites-630x472.jpg?w=1080&q=75')";
      break;
    case 'clear':
      document.body.style.backgroundImage = "url('https://cdn.dribbble.com/users/235449/screenshots/2942469/drib2_1x.jpg')";
      break;
    case 'thunderstom':
      document.body.style.backgroundImage = "https://dsx.weather.com/util/image/v/asthmatry.jpg?v=at&w=1280&h=720&api=7db9fe61-7414-47b5-9871-e17d87b8b6a0')";
      break;
    default:
      document.body.style.backgroundImage = "url('https://www.lstatic.org//UserFiles/images/2017/default/weather-rain(2).jpg')";
  }
}
