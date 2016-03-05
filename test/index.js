'use strict';

describe('Controller: AboutCtrl', function () {

  beforeEach(module('diashesgithubioApp'));

  var AboutCtrl;

  beforeEach(inject(function ($controller, $rootScope) {
    AboutCtrl = $controller('AboutCtrl', {

    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutCtrl.awesomeThings.length).toBe(3);
  });
});
