const fetchD = require('./fetchD');

test('fetches data', async ()=>{
    const data = await fetchD();
    expect(data).toBe('data fetched');
})