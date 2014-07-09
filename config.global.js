var CONFIG_REQUIREJS = {
  paths: {
    'q': 'bower/q/q',
    'fastclick': 'bower/fastclick/lib/fastclick',
    'ftscroller': 'bower/ftscroller/lib/ftscroller',
    'iscroll': 'bower/iscroll/build/iscroll',
  },
  map: {
    '*': {
      'Q': 'q',
      'breeze': 'bower/breezejs/breeze.debug',
      'plugins/ui': '_ui',
    }
  },
  shim: {
//      'bootstrap': {
//          deps: ['jquery'],
//          exports: 'jQuery'
//     },
//    'fastclick': {
//          exports: 'FastClick'
//     }
       'ftscroller': {
          exports: 'FTScroller'
       },
      'iscroll': {
          exports: 'IScroll'
      }
  }
};
