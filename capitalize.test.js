const { expect, test } = require('@jest/globals');
const tester = require('./Tester.js');

test('captilizes', ()=>{
    expect(tester.capitalizer('bLaNk')).toBe('BLaNk');
});

test('reverses', ()=>{
    expect(tester.reverser('abcdefg')).toBe('gfedcba');
});

test('calculator1', ()=>{
    expect(tester.calculator(3,4,'*')).toBe(12);
});

test('cypher1',() =>{
    expect(tester.caesar('quick',-3)).toBe('nrfzh');
})
test('cypher2', ()=>{
    expect(tester.caesar('BROWN', -3)).toBe('YOLTK');
})
test('cypher3',()=>{
    expect(tester.caesar('quick BROWN',-3 )).toBe('nrfzh YOLTK');
})

test('avg', ()=>{
    expect(tester.analyze([1,8,3,4,2,6]).average).toBe(4);
})
test('min', ()=>{
    expect(tester.analyze([1,8,3,4,2,6]).min).toBe(1);
})
test('max', ()=>{
    expect(tester.analyze([1,8,3,4,2,6]).max).toBe(8);
})
test('length', ()=>{
    expect(tester.analyze([1,8,3,4,2,6]).length).toBe(6);
})

