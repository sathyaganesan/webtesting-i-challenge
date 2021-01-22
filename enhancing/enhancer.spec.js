const enhancer = require('./enhancer.js');
// test away!

test("success", () => {
    const res = enhancer.success({ enhancement: 1 })
    expect(res).toEqual({ enhancement: 2})
})

test("fail", () => {
    const res = enhancer.fail({ enhancement:13, durability: 8 })
    expect(res).toEqual({enhancement:13, durability: 3 })
    
})
