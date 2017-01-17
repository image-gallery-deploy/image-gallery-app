'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomePage = function () {
  function HomePage() {
    _classCallCheck(this, HomePage);

    var nav = element.all(by.css('#images'));
    this.imgsButton = nav.get(0);

    this.uiView = element(by.css('ui-view'));
  }

  _createClass(HomePage, [{
    key: 'get',
    value: function get() {
      return browser.get('/');
    }
  }, {
    key: 'allImgs',
    value: function allImgs() {
      this.imgsButton.click();
    }
  }, {
    key: 'title',
    get: function get() {
      return browser.getTitle();
    }
  }, {
    key: 'url',
    get: function get() {
      return browser.getLocationAbsUrl();
    }
  }, {
    key: 'stateComponent',
    get: function get() {
      return this.uiView.all(by.css('*')).first().getTagName();
    }
  }]);

  return HomePage;
}();

exports.default = HomePage;