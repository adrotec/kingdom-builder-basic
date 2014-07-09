import {RootModule} from 'kingdom';

class App extends RootModule {

	get routes(){
		return [
			{
				pattern: ['', 'home'],
				moduleId: 'home',
        title: 'Home',
				nav: true
			},
			{
				pattern: 'demo',
				hasChildRoutes: true,
				moduleId: 'demo',
				nav: true
			}
		];
	}

}

export default App;
