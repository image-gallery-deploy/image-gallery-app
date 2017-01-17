'use strict';

var _home = require('./home.page');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Landing page for image app', function () {

  var home = new _home2.default();

  it('should have a title', function () {
    home.get();
    expect(home.title).toEqual('Albumizer');
  });

  describe('navigate landing and main content pages', function () {
    it('starts at home and shows all images on "images" button click', function () {
      expect(home.url).toBe('/');
      expect(home.stateComponent).toEqual('welcome');

      home.allImgs();

      expect(home.url).toBe('/images');
      expect(home.stateComponent).toEqual('images');
    });
  });
});