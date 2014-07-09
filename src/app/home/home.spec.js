import Home from './home';
import {ModuleLoader} from 'kingdom';

describe('Home', () => {
  var home;
  beforeEach(()=> {
    home = ModuleLoader.loadModule({'default': Home, __esModule: true});
  });

  it('welcomes everyone when no user name is given', () => {
    expect(home.message).toBe('Welcome to the Kingdom, Everyone');
  });
  it('welcomes Anne when the user is Anne', () => {
    home.user = 'Anne';
    expect(home.message).toBe('Welcome to the Kingdom, Anne');
  });

});
