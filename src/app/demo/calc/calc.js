import {Module} from 'kingdom';
import {Calculator} from 'services/example';

class Calc extends Module {
  constructor(calculator: Calculator){
    this.calculator = calculator;
    this.add1 = 0;
    this.add2 = 0;
    this.mul1 = 0;
    this.mul2 = 0;
  }
  get addResult(){
    return this.calculator.add(this.add1, this.add2);
  }
  get mulResult(){
    return this.calculator.multiply(this.mul1, this.mul2);
  }
}

export default Calc;
