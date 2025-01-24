const {expect}=require('chai');
const {report,weatherSensorStub,LowWindRainyDayStub}=require('../src/weatherreport.js');

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

