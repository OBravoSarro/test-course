import { increment } from './number';


describe('Number test', () => {

    it('Must return number', () => {
        const numberMook = 10;
        const resp = increment(numberMook);
        expect( typeof resp ).toBe('number');
    });

    it('Must return 11', () => {
        const numberMook = 10;
        const resp = increment(numberMook);
        expect( resp ).toBe(numberMook+1);
    });

    it('Must return 100', () => {
        const numberMook = 100;
        const resp = increment(numberMook);
        expect( resp ).toBe(100);
    });

    it('Must return 100 not 102', () => {
        const numberMook = 101;
        const resp = increment(numberMook);
        expect( resp ).toBe(100);
    });

});