/* eslint-disable */
import React from 'react';
import { useTheme } from 'theming';

var Bottle2 = function (_a) {
    var title = _a.title, paragraph = _a.paragraph;
    return (React.createElement("div", null,
        React.createElement("h2", null, title),
        React.createElement("p", null, paragraph)));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".styles-module_main__38UNI {\n  color: green; }\n";
var styles = {"main":"styles-module_main__38UNI"};
styleInject(css_248z);

var Card = function (_a) {
    var _b;
    var title = _a.title, paragraph = _a.paragraph;
    var theme = useTheme();
    console.log({ theme: theme });
    return (React.createElement("div", { className: styles.main },
        React.createElement("h2", { style: { background: (_b = theme === null || theme === void 0 ? void 0 : theme.color) !== null && _b !== void 0 ? _b : "blue" } }, title),
        React.createElement("p", null,
            "TEST2",
            paragraph)));
};

export { Bottle2, Card };
