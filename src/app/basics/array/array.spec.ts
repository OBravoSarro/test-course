import { getRobots } from './array';


describe('Array test', () => {

    it('Must return array', () => {
        const resp = getRobots();
        expect( typeof resp ).toBe('object');
    });

    it('Must return 3 items', () => {
        const resp = getRobots();
        expect( resp.length ).toBeGreaterThanOrEqual(3);
    });

    it('Must return Megaman and Robocop', () => {
        const resp = getRobots();
        expect( resp ).toContain('Megaman');
        expect( resp ).toContain('Robocop');
    });

});