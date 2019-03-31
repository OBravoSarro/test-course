import { Player2 } from './player2';


describe('Class test', () => {

    let player: Player2;

    beforeEach( () =>  player = new Player2() );

    it('EventEmitter when player setDamage and the result must be 0', () => {
        let newHp = 0;
        player.hpChange.subscribe((hp: number) =>  newHp = hp );

        const mook = 1000;
        player.setDamage(mook);

        expect( newHp ).toBe(0);
    });

    it('The result must be 0', () => {
        let newHp = 0;
        player.hpChange.subscribe((hp: number) =>  newHp = hp );

        const mook = 50;
        player.setDamage(mook);

        expect( newHp ).toBe(50);
    });

});