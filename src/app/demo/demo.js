import {Module} from 'kingdom';

class Demo extends Module {

	get routes(){
		return [
			{
				pattern: ['', 'sub'],
				moduleId: 'sub',
        title: 'Sub Demo 1',
				nav: true
			},
      {
				pattern: 'another',
				nav: true
			},
      {
				pattern: 'calc',
        title: 'Calculator',
				nav: true
			},
		];
	}

}

export default Demo;
