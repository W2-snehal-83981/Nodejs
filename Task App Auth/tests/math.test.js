// test("hello world!",()=>{

// })

// test('This should fail',()=>{
//     throw new Error('failure')
// })

const {calculateTip,fahrenheitToCelsius,CelsiusTofahrenheit} = require('../math')

test('should calculate tottal with tip', ()=>{
    const total = calculateTip(10,.3)
    expect(total).toBe(13)
})

test('Should convert 32F to 0C',()=>{
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})

test('Should convert 0C to 32F',()=>{
    const temp = CelsiusTofahrenheit(0)
    expect(temp).toBe(32)
})