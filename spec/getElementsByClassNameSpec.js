if(typeof window === 'undefined') {
  var getElementsByClassName = require('../src/getElementsByClassName');
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
  global.document = dom.window.document;
  var $ = require('jquery');
  var expect = require('../lib/chai/chai').expect;
  var _ = require('../lib/underscore');
}

var htmlStrings = [
  '<div class="targetClassName"></div>',
  '<div class="otherClassName targetClassName"></div>',
  '<div><div class="targetClassName"></div></div>',
  '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
  '<div><div></div><div><div class="targetClassName"></div></div></div>',
  '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
  '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
];

describe('getElementsByClassName', function() {

  it('should match the results of calling the built-in function', function() {
    $('body').addClass('targetClassName');
    htmlStrings.forEach(function(htmlString) {
      var $rootElement = $(htmlString);
      $('body').append($rootElement);

      var result = getElementsByClassName('targetClassName');
      var expectedNodeList = document.getElementsByClassName('targetClassName');
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);
      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
      expect(equality).to.equal(FILL_ME_IN);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');
  });

});