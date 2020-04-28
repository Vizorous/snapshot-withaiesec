"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

var _AccordionPanel = _interopRequireDefault(require("./AccordionPanel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var warnIfPropsAreInvalid = function warnIfPropsAreInvalid(props, state) {
  var exclusive = props.exclusive;
  var activeIndex = state.activeIndex;
  /* eslint-disable no-console */

  if (exclusive && typeof activeIndex !== 'number') {
    console.error('`activeIndex` must be a number if `exclusive` is true');
  } else if (!exclusive && !_lodash["default"].isArray(activeIndex)) {
    console.error('`activeIndex` must be an array if `exclusive` is false');
  }
  /* eslint-enable no-console */

};
/**
 * An Accordion can contain sub-accordions.
 */


var AccordionAccordion = /*#__PURE__*/function (_Component) {
  _inherits(AccordionAccordion, _Component);

  var _super = _createSuper(AccordionAccordion);

  function AccordionAccordion() {
    var _this;

    _classCallCheck(this, AccordionAccordion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "computeNewIndex", function (index) {
      var exclusive = _this.props.exclusive;
      var activeIndex = _this.state.activeIndex;
      if (exclusive) return index === activeIndex ? -1 : index; // check to see if index is in array, and remove it, if not then add it

      return _lodash["default"].includes(activeIndex, index) ? _lodash["default"].without(activeIndex, index) : [].concat(_toConsumableArray(activeIndex), [index]);
    });

    _defineProperty(_assertThisInitialized(_this), "handleTitleClick", function (e, titleProps) {
      var index = titleProps.index;

      _this.trySetState({
        activeIndex: _this.computeNewIndex(index)
      });

      _lodash["default"].invoke(_this.props, 'onTitleClick', e, titleProps);
    });

    _defineProperty(_assertThisInitialized(_this), "isIndexActive", function (index) {
      var exclusive = _this.props.exclusive;
      var activeIndex = _this.state.activeIndex;
      return exclusive ? activeIndex === index : _lodash["default"].includes(activeIndex, index);
    });

    return _this;
  }

  _createClass(AccordionAccordion, [{
    key: "getInitialAutoControlledState",
    value: function getInitialAutoControlledState(_ref) {
      var exclusive = _ref.exclusive;
      return {
        activeIndex: exclusive ? -1 : []
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (process.env.NODE_ENV !== 'production') {
        warnIfPropsAreInvalid(this.props, this.state);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (process.env.NODE_ENV !== 'production') {
        warnIfPropsAreInvalid(this.props, this.state);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          panels = _this$props.panels;
      var classes = (0, _classnames["default"])('accordion', className);
      var rest = (0, _lib.getUnhandledProps)(AccordionAccordion, this.props);
      var ElementType = (0, _lib.getElementType)(AccordionAccordion, this.props);
      return /*#__PURE__*/_react["default"].createElement(ElementType, _extends({}, rest, {
        className: classes
      }), _lib.childrenUtils.isNil(children) ? _lodash["default"].map(panels, function (panel, index) {
        return _AccordionPanel["default"].create(panel, {
          defaultProps: {
            active: _this2.isIndexActive(index),
            index: index,
            onTitleClick: _this2.handleTitleClick
          }
        });
      }) : children);
    }
  }]);

  return AccordionAccordion;
}(_lib.AutoControlledComponent);

exports["default"] = AccordionAccordion;

_defineProperty(AccordionAccordion, "propTypes", {
  /** An element type to render as (string or function). */
  as: _propTypes["default"].elementType,

  /** Index of the currently active panel. */
  activeIndex: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].number), _propTypes["default"].number])]),

  /** Primary content. */
  children: _propTypes["default"].node,

  /** Additional classes. */
  className: _propTypes["default"].string,

  /** Initial activeIndex value. */
  defaultActiveIndex: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].number), _propTypes["default"].number])]),

  /** Only allow one panel open at a time. */
  exclusive: _propTypes["default"].bool,

  /**
   * Called when a panel title is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onTitleClick: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _propTypes["default"].func]),

  /** Shorthand array of props for Accordion. */
  panels: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _propTypes["default"].arrayOf(_propTypes["default"].shape({
    content: _lib.customPropTypes.itemShorthand,
    title: _lib.customPropTypes.itemShorthand
  }))])
});

_defineProperty(AccordionAccordion, "defaultProps", {
  exclusive: true
});

_defineProperty(AccordionAccordion, "autoControlledProps", ['activeIndex']);

_defineProperty(AccordionAccordion, "handledProps", ["activeIndex", "as", "children", "className", "defaultActiveIndex", "exclusive", "onTitleClick", "panels"]);

AccordionAccordion.create = (0, _lib.createShorthandFactory)(AccordionAccordion, function (content) {
  return {
    content: content
  };
});

//# sourceMappingURL=AccordionAccordion.js.map