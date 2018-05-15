"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTruncate = require("react-truncate");

var _reactTruncate2 = _interopRequireDefault(_reactTruncate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowMore = function (_Component) {
  _inherits(ShowMore, _Component);

  function ShowMore() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ShowMore);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShowMore.__proto__ || Object.getPrototypeOf(ShowMore)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: false,
      truncated: false
    }, _this.handleTruncate = function (truncated) {
      if (truncated !== _this.state.truncated) {
        _this.setState({
          truncated: truncated
        });
      }
    }, _this.toggleLines = function (event) {
      event.preventDefault();

      _this.setState({
        expanded: !_this.state.expanded
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ShowMore, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          more = _props.more,
          less = _props.less,
          lines = _props.lines,
          anchorClass = _props.anchorClass;
      var _state = this.state,
          expanded = _state.expanded,
          truncated = _state.truncated;


      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _reactTruncate2.default,
          {
            lines: !expanded && lines,
            ellipsis: _react2.default.createElement(
              "span",
              null,
              "...",
              " ",
              _react2.default.createElement(
                "a",
                { href: "#", className: anchorClass, onClick: this.toggleLines },
                more
              )
            ),
            onTruncate: this.handleTruncate
          },
          children
        ),
        !truncated && expanded && _react2.default.createElement(
          "span",
          null,
          " ",
          _react2.default.createElement(
            "a",
            { href: "#", className: anchorClass, onClick: this.toggleLines },
            less
          )
        )
      );
    }
  }]);

  return ShowMore;
}(_react.Component);

ShowMore.defaultProps = {
  lines: 3,
  more: "Show more",
  less: "Show less",
  anchorClass: ""
};
ShowMore.propTypes = {
  children: _propTypes2.default.node,
  lines: _propTypes2.default.number,
  more: _propTypes2.default.node,
  less: _propTypes2.default.node,
  anchorClass: _propTypes2.default.string
};
exports.default = ShowMore;
module.exports = exports["default"];