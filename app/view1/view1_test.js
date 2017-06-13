'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var View1Ctrl = $controller('View1Ctrl');
      expect(View1Ctrl).toBeDefined();
    }));

  });
});
