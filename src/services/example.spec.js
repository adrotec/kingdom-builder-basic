import {Calculator} from './example';

describe('Calculator', ()=> {
  var calc = new Calculator();
  it('should add two numbers', ()=> {
    expect(calc.add(2, 3)).toBe(5);
  });
  it('should multiply two numbers', ()=> {
    expect(calc.multiply(2, 3)).toBe(6);
  });
  it('should parse numeric strings', ()=> {
    expect(calc.add('2', '3')).toBe(5);
    expect(calc.multiply('2', '3')).toBe(6);
  });
});
