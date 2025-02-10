const { expect } = require('chai');
const { print_color_map, computePairNumber } = require('../src/misaligned');

describe('Color Mapping Function', () => {
    it('should compute correct pair numbers', () => {
        expect(computePairNumber(0, 0)).to.equal(1);
        expect(computePairNumber(4, 4)).to.equal(25);
    });

    it('should return correct total pair count', () => {
        const result = print_color_map();
        expect(result).to.equal(25);
    });
});
