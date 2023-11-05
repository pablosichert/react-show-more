"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = require("prop-types");
var _Truncate = _interopRequireDefault(require("./Truncate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
class ShowMoreText extends _react.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "_isMounted", false);
    _defineProperty(this, "handleTruncate", truncated => {
      if (this._isMounted && truncated !== this.state.truncated) {
        this.setState({
          truncated
        });
        if (truncated) {
          this.truncateRef.onResize();
        }
        this.props.onTruncate && this.props.onTruncate();
      }
    });
    _defineProperty(this, "toggleLines", event => {
      event.preventDefault();
      var _self = this;
      if (!_self.props.expandByClick) {
        if (_self.props.onClick) {
          _self.props.onClick(_self.state.expanded, event);
        }
        return;
      }
      if (this._isMounted) {
        this.setState({
          expanded: !this.state.expanded
        }, () => {
          if (_self.props.onClick) {
            _self.props.onClick(_self.state.expanded, event);
          }
        });
      }
    });
    this.state = {
      expanded: false,
      truncated: false
    };
  }
  componentDidMount() {
    this._isMounted = true;
    var _self = this;
    if (this._isMounted) {
      this.setState({
        expanded: _self.props.expanded
      });
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const {
      children,
      more,
      less,
      lines,
      anchorClass,
      className,
      width,
      keepNewLines,
      truncatedEndingComponent,
      onTruncate
    } = this.props;
    const {
      expanded,
      truncated
    } = this.state;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: className
    }, /*#__PURE__*/_react.default.createElement(_Truncate.default, {
      width: width,
      lines: !expanded && lines,
      ellipsis: /*#__PURE__*/_react.default.createElement("span", null, truncatedEndingComponent, /*#__PURE__*/_react.default.createElement("span", {
        className: anchorClass,
        onClick: this.toggleLines
      }, more)),
      onTruncate: this.handleTruncate,
      ref: ref => this.truncateRef = ref
    }, keepNewLines ? children.split("\n").map((line, i, arr) => {
      line = /*#__PURE__*/_react.default.createElement("span", {
        key: i
      }, line);
      if (i === arr.length - 1) {
        return line;
      } else {
        return [line, /*#__PURE__*/_react.default.createElement("br", {
          key: i + "br"
        })];
      }
    }) : children), !truncated && expanded && /*#__PURE__*/_react.default.createElement("span", null, " ", /*#__PURE__*/_react.default.createElement("span", {
      className: anchorClass,
      onClick: this.toggleLines
    }, less)));
  }
}
_defineProperty(ShowMoreText, "defaultProps", {
  lines: 3,
  more: "Show more",
  less: "Show less",
  anchorClass: "show-more-less-clickable",
  onClick: undefined,
  expanded: false,
  width: 0,
  keepNewLines: false,
  truncatedEndingComponent: "... ",
  expandByClick: true,
  onTruncate: undefined
});
_defineProperty(ShowMoreText, "propTypes", {
  children: _propTypes.PropTypes.node,
  lines: _propTypes.PropTypes.number,
  more: _propTypes.PropTypes.node,
  less: _propTypes.PropTypes.node,
  anchorClass: _propTypes.PropTypes.string,
  className: _propTypes.PropTypes.string,
  onClick: _propTypes.PropTypes.func,
  expanded: _propTypes.PropTypes.bool,
  width: _propTypes.PropTypes.number,
  keepNewLines: _propTypes.PropTypes.bool,
  truncatedEndingComponent: _propTypes.PropTypes.node,
  expandByClick: _propTypes.PropTypes.bool,
  onTruncate: _propTypes.PropTypes.func
});
var _default = ShowMoreText;
exports.default = _default;