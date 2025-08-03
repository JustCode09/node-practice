const add = require('../sum');

test('adds numbers', ()=>{
    expect(add()).toBe(5);
})