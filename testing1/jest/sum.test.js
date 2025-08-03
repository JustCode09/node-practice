// const add = require('../sum');

// test('adds numbers', ()=>{
//     expect(add()).toBe(5);
// })

// const sum = require('../sum');

// test('adds 2+3 to equals 5', ()=>{
//     expect(sum(2,3)).toBe(5);
// })

const sum = require('../sum');  

test('retuens object ', ()=>{
    expect(sum()).toEqual({ name: 'saurav' });
});