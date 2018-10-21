$(document).ready(function() {
  const thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);
})
