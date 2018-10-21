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

  $('#power-saving-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#power-saving-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());      
  };
})
