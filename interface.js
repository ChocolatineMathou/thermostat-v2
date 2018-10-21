$(document).ready(function() {
  const thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#up').on('click', function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  })

  $('#down').on('click', function() {
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
  })
})
