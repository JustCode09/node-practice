// const add = require('../sum');

// test('adds numbers', ()=>{
//     expect(add()).toBe(5);
// })

// const sum = require('../sum');

// test('adds 2+3 to equals 5', ()=>{
//     expect(sum(2,3)).toBe(5);
// })

// const sum = require('../sum');  

// test('retuens object ', ()=>{
//     expect(sum()).toEqual({ name: 'saurav' });
// });

const frtchData = require('./sum');

test('calls callback with hi', (done)=>{
    frtchData((data) =>{
        expect(data).toBe('hi');
        done(); // Call done to indicate that the test is complete
    })
})