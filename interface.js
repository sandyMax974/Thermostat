$(document).ready(function() {
  let thermostat = new Thermostat()
$('#temperature').text(thermostat.getTemperature());

$("#temperature-up").click(function() { 
  thermostat.up();
  $('#temperature').text(thermostat.getTemperature());
});

$("#temperature-down").click(function() { 
  thermostat.down();
  $('#temperature').text(thermostat.getTemperature());
});

});