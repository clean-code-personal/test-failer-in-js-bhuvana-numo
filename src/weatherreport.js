const {expect} = require('chai');

// This is a stub for a weather sensor. For the sake of testing
// we create a stub that generates weather data and allows us to
// test the other parts of this application in isolation
// without needing the actual Sensor during development
// Later, this can be replaced with the actual interface to the sensor.

function report(sensor) {
    const precipitation = sensor.precipitation();
    const temperature = sensor.temperatureInC();
    const windspeed = sensor.windspeedInKmph();

    if (temperature <= 25) return 'Sunny day';
    if (precipitation > 20 && precipitation < 60) return 'Partly cloudy';
    if (precipitation > 60 && windspeed >= 0) return 'Alert: Stormy with heavy rain';

    return 'Sunny day';
}

module.exports = { report };
