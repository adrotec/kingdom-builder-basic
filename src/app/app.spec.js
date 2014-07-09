import App from './app';
import {ModuleLoader} from 'kingdom';
import {RouteBuilder} from 'kingdom';

var routePrefix = RouteBuilder.getRoutePrefix();

describe('App', () => {
  var app;
  beforeEach(()=> {
    app = ModuleLoader.loadModule({'default': App, __esModule: true});
    app.__moduleId__ = routePrefix + 'app';
    app.registerRoutes();
  });
  it('has a navigation with two items', () => {
    expect(app.navigation.length).toBe(2);
  });
  it('builds title by convention', () => {
    expect(app.navigation[1].title).toBe('Demo');
  });
  it('should convert moduleId to module path', () => {
    expect(app.navigation[0].moduleId).toBe(routePrefix + 'home/home');
  });
});
