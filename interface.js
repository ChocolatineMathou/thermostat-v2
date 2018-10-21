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

  $('#current-city').change(function() {
  const city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temp').text(data.main.temp)
  })
})

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };
})
