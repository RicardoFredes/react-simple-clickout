'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addOutsideClickEvent = addOutsideClickEvent;
exports.removeOutsideClickEvent = removeOutsideClickEvent;
var outsideClickOptions = {
  active: false
};

function addOutsideClickEvent(node, onClickOut) {
  if (outsideClickOptions.active) {
    outsideClickOptions.onClickOut();
    removeOutsideClickEvent();
  }
  outsideClickOptions.node = node;
  outsideClickOptions.onClickOut = onClickOut;
  setTimeout(function () {
    outsideClickOptions.active = true;
    document.addEventListener('click', handleOutsideClick, false);
  }, 0);
}

function removeOutsideClickEvent() {
  outsideClickOptions.active = false;
  document.removeEventListener('click', handleOutsideClick, false);
}

function handleOutsideClick(_ref) {
  var target = _ref.target;

  var out = !outsideClickOptions.node.contains(target);
  if (out) {
    removeOutsideClickEvent();
    outsideClickOptions.onClickOut();
  }
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OutClick = function (_Component) {
  _inherits(OutClick, _Component);

  function OutClick() {
    _classCallCheck(this, OutClick);

    return _possibleConstructorReturn(this, (OutClick.__proto__ || Object.getPrototypeOf(OutClick)).apply(this, arguments));
  }

  _createClass(OutClick, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _actions.removeOutsideClickEvent)();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _actions.addOutsideClickEvent)(this.el, this.props.onClickOut);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { ref: function ref(el) {
            return _this2.el = el;
          } },
        this.props.children
      );
    }
  }]);

  return OutClick;
}(_react.Component);

exports.default = OutClick;
