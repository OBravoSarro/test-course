import { isLogin } from './boolean';


describe('Boolean test', () => {

    it('Must return boolean', () => {
        const mook = true;
        const resp = isLogin(mook);
        expect( typeof resp ).toBe('boolean');
    });

    it('Must return boolean', () => {
        const mook = false;
        const resp = isLogin(mook);
        expect( typeof resp ).toBe('boolean');
    });

    it('Must return true', () => {
        const mook = true;
        const resp = isLogin(mook);
        expect( resp ).toBeTruthy();
    });

    it('Must return false', () => {
        const mook = false;
        const resp = isLogin(mook);
        expect( resp ).toBeFalsy();
    });

    it('Must return true', () => {
        const mook = true;
        const resp = isLogin(mook);
        expect( resp ).not.toBeFalsy();
    });

});