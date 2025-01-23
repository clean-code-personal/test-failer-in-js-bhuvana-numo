const {expect} = require('chai')

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            console.log(`${computePairNumber(i,j)} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    return majorColors.length * minorColors.length;
}

function computePairNumber(majorIndex,minorIndex){
    return majorIndex * 5 + minorIndex;
}

result = print_color_map();
expect(result).equals(25);
expect(computePairNumber(0,0)).equals(1)
expect(computePairNumber(4,4)).equals(25)
console.log('All is well (maybe!)');
