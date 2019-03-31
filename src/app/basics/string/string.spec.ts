import { message } from './string';


describe('String test', () => {

    const nameMook = 'Test 001';

    it('Must return a string', () => {
        const resp = message(nameMook);
        expect( typeof resp ).toBe('string');
    });

    it(`Must contain ${nameMook}`, () => {
        const resp = message(nameMook);
        expect( resp ).toContain(`${nameMook}`);
    });

    it(`Must return: Hello ${nameMook}`, () => {
        const resp = message(nameMook);
        expect( resp ).toBe(`Hello ${nameMook}`);
    });

});