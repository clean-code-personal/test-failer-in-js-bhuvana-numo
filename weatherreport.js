const {expect} = require('chai');

// This is a stub for a weather sensor. For the sake of testing
// we create a stub that generates weather data and allows us to
// test the other parts of this application in isolation
// without needing the actual Sensor during development
// Later, this can be replaced with the actual interface to the sensor.
const weatherSensorStub = {
    humidity: () => 72,
    precipitation: () => 70,
    temperatureInC: () => 26,
    windspeedInKmph: () => 52,
}


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

// Test a rainy day
function testRainy() {
    const weatherReport = report(weatherSensorStub)
    console.log(weatherReport)
    expect(weatherReport).includes('rain');
}

// Test another rainy day
function testHighPrecipitationAndLowWindspeed() {
    // This instance of stub needs to be different-
    // to give high precipitation (>60) and low wind-speed (<50)
    weatherReport = report(weatherSensorStub)
    // strengthen the assert to expose the bug
    // (function returns Sunny day, it should predict rain)
    expect(weatherReport).is.not.empty;
}

testRainy();
testHighPrecipitationAndLowWindspeed();
console.log('All is well (maybe)');
