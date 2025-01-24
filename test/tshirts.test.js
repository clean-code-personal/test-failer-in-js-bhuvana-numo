const {expect}=require('chai');
const size=require('../src/tshirts.js');

describe('T-shirt size Function', ()=>{

    it('Should return S for size<38',()=>{
        expect(size(37)).to.equal('S');
    });

    it('Should return M for size===38',()=>{
        expect(size(38)).to.equal('M');
    });

    it('should return M for cms between 38 and 42', () => {
        expect(size(40)).to.equal('M'); 
    });

    it('should return L for cms > 42', () => {
        expect(size(43)).to.equal('L'); 
    });

});