import Calc from './calc';
import {ModuleLoader} from 'kingdom';

describe('Calc', () => {
  var calc;
  beforeEach(()=> {
    calc = ModuleLoader.loadModule(Calc);
    calc.__moduleId__ = 'app/demo/calc/calc';
    calc.registerRoutes();
  });
  it('returns zero initially for calculated results', () => {
    expect(calc.mulResult).toBe(0);
    expect(calc.addResult).toBe(0);
  });
  it('should multiply numberic values', () => {
    calc.mul1 = '3';
    calc.mul2 = 6;
    expect(calc.mulResult).toBe(18);
  });
});
