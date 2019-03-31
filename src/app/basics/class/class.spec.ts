import { Player } from './class';


describe('Class test', () => {

    let player = new Player();

    /* beforeAll( () => { });
    afterAll( () => { });
    afterEach( () => { }); */
    beforeEach( () => {
        player = new Player();
    });

    it('Must return number', () => {
        const mook = 20;
        const resp = player.setDamage(mook);
        expect( typeof resp ).toBe('number');
    });

    it('Must return 80 hp', () => {
        const mook = 20;
        const resp = player.setDamage(mook);
        expect( resp ).toBe(80);
    });

    it('Must return 50 hp', () => {
        const mook = 50;
        const resp = player.setDamage(mook);
        expect( resp ).toBe(50);
    });

    it('Must return 1 hp', () => {
        const mook = 99;
        const resp = player.setDamage(mook);
        expect( resp ).toBe(1);
    });

    it('Must return 0 hp', () => {
        const mook = 200;
        const resp = player.setDamage(mook);
        expect( resp ).toBe(0);
    });

});