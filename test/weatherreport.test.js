const {expect}=require('chai');
const {report}=require('../src/weatherreport.js');

const weatherSensorStub = {
    humidity: () => 72,
    precipitation: () => 70,
    temperatureInC: () => 26,
    windspeedInKmph: () => 52,
}
const LowWindRainyDayStub = {
    temperatureInC: () => 28,
    precipitation: () => 70, // High precipitation
    windspeedInKmph: () => 40, // Low wind speed
};


describe('Weather Report Function',()=>{

    it('Should predict stromy day for high precipitation and high wind speed',()=>{
        const weatherreport=report(weatherSensorStub);
        expect(weatherreport).includes('Alert: Stormy with heavy rain');
    });

    it('Should predict rain for high precipitation and low wind speed',()=>{
        const weatherreport=report(LowWindRainyDayStub);
        expect(weatherreport).includes('Alert: Stormy with heavy rain');

    });

});

