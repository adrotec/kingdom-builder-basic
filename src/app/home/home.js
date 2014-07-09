import {Module} from 'kingdom';

class Home extends Module {
  constructor(){
    this.user = null;
  }
  get message(){
    return 'Welcome to the Kingdom, '
      + (this.user ? this.user : 'Everyone');
  }
}

export default Home;
