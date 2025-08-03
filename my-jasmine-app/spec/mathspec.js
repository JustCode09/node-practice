const add = require('../math');

describe('addition', function(){
    it('adds two numbers', function(){
        expect(add(1,2)).toBe(3);
    })
})