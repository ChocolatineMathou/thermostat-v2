$(document).ready(function() {
  const thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#up').on('click', function() {
    thermostat.up();
    updateTemperature();
  })

  $('#down').on('click', function() {
    thermostat.down();
    updateTemperature();
  })

  $('#reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  };
})
