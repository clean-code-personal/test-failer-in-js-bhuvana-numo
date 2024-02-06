let transmissionFailureCount = 0;

function networkTransmitStub(celcius) {
    console.log(`Temperature to transmit: ${celcius} celcius`);

    // The intention here is to transmit the temperature over a network.
    // However, this is a stub, so we just print the message above
    // and give back a return code.

    // Return 200 for ok
    // Return 500 for not-ok
    // This stub always succeeds and returns 200
    return 200;
}

function transmitInCelcius(farenheit) {
    const celcius = (farenheit - 32) * 5 / 9;
    const returnCode = networkTransmitStub(celcius);
    if (returnCode != 200) {
        // non-ok response indicates failure while transmitting over the network
        // let us keep a count of failures to report
        // However, this code doesn't increment failures - that's a bug!
        // Add a test below to catch this bug. Alter the stub above, if needed.
        transmissionFailureCount += 0;
    }
}

transmitInCelcius(400.5);
transmitInCelcius(303.6);
console.log(`Transmission failed ${transmissionFailureCount} times.`);
console.log('All is well (maybe!)');
