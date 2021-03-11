$(document).ready(function() {

let thermostat = new Thermostat()

updateTemperature();

$("#temperature-up").click(function() { 
  thermostat.up();
  updateTemperature();
});

$("#temperature-down").click(function() { 
  thermostat.down();
  updateTemperature();
});

$("#temperature-reset").click(function() { 
  thermostat.reset();
  updateTemperature();
});

$("#powersaving-off").click(function() { 
  thermostat.switchOff();
  updateTemperature();
  $('#power-saving-status').text('off');
});

$("#powersaving-on").click(function() { 
  thermostat.switchOn();
  updateTemperature();
  $('#power-saving-status').text('on');
});

function updateTemperature() {
  $('#temperature').text(thermostat.getTemperature());
  $('#temperature').attr('class', thermostat.energyUsage());
};

displayWeather('London')

$("#current-city").change(function() {
  var city = $("#current-city").val();
  displayWeather(city);
})

function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed'; 
  var units= '&units=metric'

  $.get(url + token + units, function(data) {
    $('#current-temperature').text(data.main.temp);
  })
}
});