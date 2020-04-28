"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

var _AccordionAccordion = _interopRequireDefault(require("./AccordionAccordion"));

var _AccordionContent = _interopRequireDefault(require("./AccordionContent"));

var _AccordionPanel = _interopRequireDefault(require("./AccordionPanel"));

var _AccordionTitle = _interopRequireDefault(require("./AccordionTitle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * An accordion allows users to toggle the display of sections of content.
 */
function Accordion(props) {
  var className = props.className,
      fluid = props.fluid,
      inverted = props.inverted,
      styled = props.styled;
  var classes = (0, _classnames["default"])('ui', (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(styled, 'styled'), className);
  var rest = (0, _lib.getUnhandledProps)(Accordion, props);
  return /*#__PURE__*/_react["default"].createElement(_AccordionAccordion["default"], _extends({}, rest, {
    className: classes
  }));
}

Accordion.handledProps = ["className", "fluid", "inverted", "styled"];
Accordion.propTypes = {
  /** Additional classes. */
  className: _propTypes["default"].string,

  /** Format to take up the width of its container. */
  fluid: _propTypes["default"].bool,

  /** Format for dark backgrounds. */
  inverted: _propTypes["default"].bool,

  /** Adds some basic styling to accordion panels. */
  styled: _propTypes["default"].bool
};
Accordion.Accordion = _AccordionAccordion["default"];
Accordion.Content = _AccordionContent["default"];
Accordion.Panel = _AccordionPanel["default"];
Accordion.Title = _AccordionTitle["default"];
var _default = Accordion;
exports["default"] = _default;

//# sourceMappingURL=Accordion.js.map