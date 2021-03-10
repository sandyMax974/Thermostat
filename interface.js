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

$("#temperature-reset").click(function() { 
  thermostat.reset();
  $('#temperature').text(thermostat.getTemperature());
});

$("#powersaving-off").click(function() { 
  thermostat.switchOff();
  $('#temperature').text(thermostat.getTemperature());
  $('#power-saving-status').text('off');
});

$("#powersaving-on").click(function() { 
  thermostat.switchOn();
  $('#temperature').text(thermostat.getTemperature());
  $('#power-saving-status').text('on');
});

});