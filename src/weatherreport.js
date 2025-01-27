const {expect} = require('chai');

// This is a stub for a weather sensor. For the sake of testing
// we create a stub that generates weather data and allows us to
// test the other parts of this application in isolation
// without needing the actual Sensor during development
// Later, this can be replaced with the actual interface to the sensor.

function report(sensor) {
    const precipitation = sensor.precipitation();
    let reportOut = 'Sunny day';
    if (sensor.temperatureInC() > 25) {
        if (precipitation > 20 && precipitation < 60) {
            reportOut = 'Partly cloudy'
        } else if (sensor.windspeedInKmph() > 50) {
            reportOut = 'Alert: Stormy with heavy rain';
        }
    }
    return reportOut
}



module.exports={report}