/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/focus-trap/index.js":
/*!******************************************!*\
  !*** ./node_modules/focus-trap/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var tabbable = __webpack_require__(/*! tabbable */ \"./node_modules/tabbable/index.js\");\nvar xtend = __webpack_require__(/*! xtend */ \"./node_modules/xtend/immutable.js\");\n\nvar activeFocusDelay;\n\nvar activeFocusTraps = (function() {\n  var trapQueue = [];\n  return {\n    activateTrap: function(trap) {\n      if (trapQueue.length > 0) {\n        var activeTrap = trapQueue[trapQueue.length - 1];\n        if (activeTrap !== trap) {\n          activeTrap.pause();\n        }\n      }\n\n      var trapIndex = trapQueue.indexOf(trap);\n      if (trapIndex === -1) {\n        trapQueue.push(trap);\n      } else {\n        // move this existing trap to the front of the queue\n        trapQueue.splice(trapIndex, 1);\n        trapQueue.push(trap);\n      }\n    },\n\n    deactivateTrap: function(trap) {\n      var trapIndex = trapQueue.indexOf(trap);\n      if (trapIndex !== -1) {\n        trapQueue.splice(trapIndex, 1);\n      }\n\n      if (trapQueue.length > 0) {\n        trapQueue[trapQueue.length - 1].unpause();\n      }\n    }\n  };\n})();\n\nfunction focusTrap(element, userOptions) {\n  var doc = document;\n  var container =\n    typeof element === 'string' ? doc.querySelector(element) : element;\n\n  var config = xtend(\n    {\n      returnFocusOnDeactivate: true,\n      escapeDeactivates: true\n    },\n    userOptions\n  );\n\n  var state = {\n    firstTabbableNode: null,\n    lastTabbableNode: null,\n    nodeFocusedBeforeActivation: null,\n    mostRecentlyFocusedNode: null,\n    active: false,\n    paused: false\n  };\n\n  var trap = {\n    activate: activate,\n    deactivate: deactivate,\n    pause: pause,\n    unpause: unpause\n  };\n\n  return trap;\n\n  function activate(activateOptions) {\n    if (state.active) return;\n\n    updateTabbableNodes();\n\n    state.active = true;\n    state.paused = false;\n    state.nodeFocusedBeforeActivation = doc.activeElement;\n\n    var onActivate =\n      activateOptions && activateOptions.onActivate\n        ? activateOptions.onActivate\n        : config.onActivate;\n    if (onActivate) {\n      onActivate();\n    }\n\n    addListeners();\n    return trap;\n  }\n\n  function deactivate(deactivateOptions) {\n    if (!state.active) return;\n\n    clearTimeout(activeFocusDelay);\n\n    removeListeners();\n    state.active = false;\n    state.paused = false;\n\n    activeFocusTraps.deactivateTrap(trap);\n\n    var onDeactivate =\n      deactivateOptions && deactivateOptions.onDeactivate !== undefined\n        ? deactivateOptions.onDeactivate\n        : config.onDeactivate;\n    if (onDeactivate) {\n      onDeactivate();\n    }\n\n    var returnFocus =\n      deactivateOptions && deactivateOptions.returnFocus !== undefined\n        ? deactivateOptions.returnFocus\n        : config.returnFocusOnDeactivate;\n    if (returnFocus) {\n      delay(function() {\n        tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));\n      });\n    }\n\n    return trap;\n  }\n\n  function pause() {\n    if (state.paused || !state.active) return;\n    state.paused = true;\n    removeListeners();\n  }\n\n  function unpause() {\n    if (!state.paused || !state.active) return;\n    state.paused = false;\n    updateTabbableNodes();\n    addListeners();\n  }\n\n  function addListeners() {\n    if (!state.active) return;\n\n    // There can be only one listening focus trap at a time\n    activeFocusTraps.activateTrap(trap);\n\n    // Delay ensures that the focused element doesn't capture the event\n    // that caused the focus trap activation.\n    activeFocusDelay = delay(function() {\n      tryFocus(getInitialFocusNode());\n    });\n\n    doc.addEventListener('focusin', checkFocusIn, true);\n    doc.addEventListener('mousedown', checkPointerDown, {\n      capture: true,\n      passive: false\n    });\n    doc.addEventListener('touchstart', checkPointerDown, {\n      capture: true,\n      passive: false\n    });\n    doc.addEventListener('click', checkClick, {\n      capture: true,\n      passive: false\n    });\n    doc.addEventListener('keydown', checkKey, {\n      capture: true,\n      passive: false\n    });\n\n    return trap;\n  }\n\n  function removeListeners() {\n    if (!state.active) return;\n\n    doc.removeEventListener('focusin', checkFocusIn, true);\n    doc.removeEventListener('mousedown', checkPointerDown, true);\n    doc.removeEventListener('touchstart', checkPointerDown, true);\n    doc.removeEventListener('click', checkClick, true);\n    doc.removeEventListener('keydown', checkKey, true);\n\n    return trap;\n  }\n\n  function getNodeForOption(optionName) {\n    var optionValue = config[optionName];\n    var node = optionValue;\n    if (!optionValue) {\n      return null;\n    }\n    if (typeof optionValue === 'string') {\n      node = doc.querySelector(optionValue);\n      if (!node) {\n        throw new Error('`' + optionName + '` refers to no known node');\n      }\n    }\n    if (typeof optionValue === 'function') {\n      node = optionValue();\n      if (!node) {\n        throw new Error('`' + optionName + '` did not return a node');\n      }\n    }\n    return node;\n  }\n\n  function getInitialFocusNode() {\n    var node;\n    if (getNodeForOption('initialFocus') !== null) {\n      node = getNodeForOption('initialFocus');\n    } else if (container.contains(doc.activeElement)) {\n      node = doc.activeElement;\n    } else {\n      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');\n    }\n\n    if (!node) {\n      throw new Error(\n        'Your focus-trap needs to have at least one focusable element'\n      );\n    }\n\n    return node;\n  }\n\n  function getReturnFocusNode(previousActiveElement) {\n    var node = getNodeForOption('setReturnFocus');\n    return node ? node : previousActiveElement;\n  }\n\n  // This needs to be done on mousedown and touchstart instead of click\n  // so that it precedes the focus event.\n  function checkPointerDown(e) {\n    if (container.contains(e.target)) return;\n    if (config.clickOutsideDeactivates) {\n      deactivate({\n        returnFocus: !tabbable.isFocusable(e.target)\n      });\n      return;\n    }\n    // This is needed for mobile devices.\n    // (If we'll only let `click` events through,\n    // then on mobile they will be blocked anyways if `touchstart` is blocked.)\n    if (config.allowOutsideClick && config.allowOutsideClick(e)) {\n      return;\n    }\n    e.preventDefault();\n  }\n\n  // In case focus escapes the trap for some strange reason, pull it back in.\n  function checkFocusIn(e) {\n    // In Firefox when you Tab out of an iframe the Document is briefly focused.\n    if (container.contains(e.target) || e.target instanceof Document) {\n      return;\n    }\n    e.stopImmediatePropagation();\n    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());\n  }\n\n  function checkKey(e) {\n    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {\n      e.preventDefault();\n      deactivate();\n      return;\n    }\n    if (isTabEvent(e)) {\n      checkTab(e);\n      return;\n    }\n  }\n\n  // Hijack Tab events on the first and last focusable nodes of the trap,\n  // in order to prevent focus from escaping. If it escapes for even a\n  // moment it can end up scrolling the page and causing confusion so we\n  // kind of need to capture the action at the keydown phase.\n  function checkTab(e) {\n    updateTabbableNodes();\n    if (e.shiftKey && e.target === state.firstTabbableNode) {\n      e.preventDefault();\n      tryFocus(state.lastTabbableNode);\n      return;\n    }\n    if (!e.shiftKey && e.target === state.lastTabbableNode) {\n      e.preventDefault();\n      tryFocus(state.firstTabbableNode);\n      return;\n    }\n  }\n\n  function checkClick(e) {\n    if (config.clickOutsideDeactivates) return;\n    if (container.contains(e.target)) return;\n    if (config.allowOutsideClick && config.allowOutsideClick(e)) {\n      return;\n    }\n    e.preventDefault();\n    e.stopImmediatePropagation();\n  }\n\n  function updateTabbableNodes() {\n    var tabbableNodes = tabbable(container);\n    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();\n    state.lastTabbableNode =\n      tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();\n  }\n\n  function tryFocus(node) {\n    if (node === doc.activeElement) return;\n    if (!node || !node.focus) {\n      tryFocus(getInitialFocusNode());\n      return;\n    }\n    node.focus();\n    state.mostRecentlyFocusedNode = node;\n    if (isSelectableInput(node)) {\n      node.select();\n    }\n  }\n}\n\nfunction isSelectableInput(node) {\n  return (\n    node.tagName &&\n    node.tagName.toLowerCase() === 'input' &&\n    typeof node.select === 'function'\n  );\n}\n\nfunction isEscapeEvent(e) {\n  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;\n}\n\nfunction isTabEvent(e) {\n  return e.key === 'Tab' || e.keyCode === 9;\n}\n\nfunction delay(fn) {\n  return setTimeout(fn, 0);\n}\n\nmodule.exports = focusTrap;\n\n\n//# sourceURL=webpack:///./node_modules/focus-trap/index.js?");

/***/ }),

/***/ "./node_modules/focus-visible/dist/focus-visible.js":
/*!**********************************************************!*\
  !*** ./node_modules/focus-visible/dist/focus-visible.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (global, factory) {\n   true ? factory() :\n  undefined;\n}(this, (function () { 'use strict';\n\n  /**\n   * Applies the :focus-visible polyfill at the given scope.\n   * A scope in this case is either the top-level Document or a Shadow Root.\n   *\n   * @param {(Document|ShadowRoot)} scope\n   * @see https://github.com/WICG/focus-visible\n   */\n  function applyFocusVisiblePolyfill(scope) {\n    var hadKeyboardEvent = true;\n    var hadFocusVisibleRecently = false;\n    var hadFocusVisibleRecentlyTimeout = null;\n\n    var inputTypesWhitelist = {\n      text: true,\n      search: true,\n      url: true,\n      tel: true,\n      email: true,\n      password: true,\n      number: true,\n      date: true,\n      month: true,\n      week: true,\n      time: true,\n      datetime: true,\n      'datetime-local': true\n    };\n\n    /**\n     * Helper function for legacy browsers and iframes which sometimes focus\n     * elements like document, body, and non-interactive SVG.\n     * @param {Element} el\n     */\n    function isValidFocusTarget(el) {\n      if (\n        el &&\n        el !== document &&\n        el.nodeName !== 'HTML' &&\n        el.nodeName !== 'BODY' &&\n        'classList' in el &&\n        'contains' in el.classList\n      ) {\n        return true;\n      }\n      return false;\n    }\n\n    /**\n     * Computes whether the given element should automatically trigger the\n     * `focus-visible` class being added, i.e. whether it should always match\n     * `:focus-visible` when focused.\n     * @param {Element} el\n     * @return {boolean}\n     */\n    function focusTriggersKeyboardModality(el) {\n      var type = el.type;\n      var tagName = el.tagName;\n\n      if (tagName === 'INPUT' && inputTypesWhitelist[type] && !el.readOnly) {\n        return true;\n      }\n\n      if (tagName === 'TEXTAREA' && !el.readOnly) {\n        return true;\n      }\n\n      if (el.isContentEditable) {\n        return true;\n      }\n\n      return false;\n    }\n\n    /**\n     * Add the `focus-visible` class to the given element if it was not added by\n     * the author.\n     * @param {Element} el\n     */\n    function addFocusVisibleClass(el) {\n      if (el.classList.contains('focus-visible')) {\n        return;\n      }\n      el.classList.add('focus-visible');\n      el.setAttribute('data-focus-visible-added', '');\n    }\n\n    /**\n     * Remove the `focus-visible` class from the given element if it was not\n     * originally added by the author.\n     * @param {Element} el\n     */\n    function removeFocusVisibleClass(el) {\n      if (!el.hasAttribute('data-focus-visible-added')) {\n        return;\n      }\n      el.classList.remove('focus-visible');\n      el.removeAttribute('data-focus-visible-added');\n    }\n\n    /**\n     * If the most recent user interaction was via the keyboard;\n     * and the key press did not include a meta, alt/option, or control key;\n     * then the modality is keyboard. Otherwise, the modality is not keyboard.\n     * Apply `focus-visible` to any current active element and keep track\n     * of our keyboard modality state with `hadKeyboardEvent`.\n     * @param {KeyboardEvent} e\n     */\n    function onKeyDown(e) {\n      if (e.metaKey || e.altKey || e.ctrlKey) {\n        return;\n      }\n\n      if (isValidFocusTarget(scope.activeElement)) {\n        addFocusVisibleClass(scope.activeElement);\n      }\n\n      hadKeyboardEvent = true;\n    }\n\n    /**\n     * If at any point a user clicks with a pointing device, ensure that we change\n     * the modality away from keyboard.\n     * This avoids the situation where a user presses a key on an already focused\n     * element, and then clicks on a different element, focusing it with a\n     * pointing device, while we still think we're in keyboard modality.\n     * @param {Event} e\n     */\n    function onPointerDown(e) {\n      hadKeyboardEvent = false;\n    }\n\n    /**\n     * On `focus`, add the `focus-visible` class to the target if:\n     * - the target received focus as a result of keyboard navigation, or\n     * - the event target is an element that will likely require interaction\n     *   via the keyboard (e.g. a text box)\n     * @param {Event} e\n     */\n    function onFocus(e) {\n      // Prevent IE from focusing the document or HTML element.\n      if (!isValidFocusTarget(e.target)) {\n        return;\n      }\n\n      if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {\n        addFocusVisibleClass(e.target);\n      }\n    }\n\n    /**\n     * On `blur`, remove the `focus-visible` class from the target.\n     * @param {Event} e\n     */\n    function onBlur(e) {\n      if (!isValidFocusTarget(e.target)) {\n        return;\n      }\n\n      if (\n        e.target.classList.contains('focus-visible') ||\n        e.target.hasAttribute('data-focus-visible-added')\n      ) {\n        // To detect a tab/window switch, we look for a blur event followed\n        // rapidly by a visibility change.\n        // If we don't see a visibility change within 100ms, it's probably a\n        // regular focus change.\n        hadFocusVisibleRecently = true;\n        window.clearTimeout(hadFocusVisibleRecentlyTimeout);\n        hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {\n          hadFocusVisibleRecently = false;\n        }, 100);\n        removeFocusVisibleClass(e.target);\n      }\n    }\n\n    /**\n     * If the user changes tabs, keep track of whether or not the previously\n     * focused element had .focus-visible.\n     * @param {Event} e\n     */\n    function onVisibilityChange(e) {\n      if (document.visibilityState === 'hidden') {\n        // If the tab becomes active again, the browser will handle calling focus\n        // on the element (Safari actually calls it twice).\n        // If this tab change caused a blur on an element with focus-visible,\n        // re-apply the class when the user switches back to the tab.\n        if (hadFocusVisibleRecently) {\n          hadKeyboardEvent = true;\n        }\n        addInitialPointerMoveListeners();\n      }\n    }\n\n    /**\n     * Add a group of listeners to detect usage of any pointing devices.\n     * These listeners will be added when the polyfill first loads, and anytime\n     * the window is blurred, so that they are active when the window regains\n     * focus.\n     */\n    function addInitialPointerMoveListeners() {\n      document.addEventListener('mousemove', onInitialPointerMove);\n      document.addEventListener('mousedown', onInitialPointerMove);\n      document.addEventListener('mouseup', onInitialPointerMove);\n      document.addEventListener('pointermove', onInitialPointerMove);\n      document.addEventListener('pointerdown', onInitialPointerMove);\n      document.addEventListener('pointerup', onInitialPointerMove);\n      document.addEventListener('touchmove', onInitialPointerMove);\n      document.addEventListener('touchstart', onInitialPointerMove);\n      document.addEventListener('touchend', onInitialPointerMove);\n    }\n\n    function removeInitialPointerMoveListeners() {\n      document.removeEventListener('mousemove', onInitialPointerMove);\n      document.removeEventListener('mousedown', onInitialPointerMove);\n      document.removeEventListener('mouseup', onInitialPointerMove);\n      document.removeEventListener('pointermove', onInitialPointerMove);\n      document.removeEventListener('pointerdown', onInitialPointerMove);\n      document.removeEventListener('pointerup', onInitialPointerMove);\n      document.removeEventListener('touchmove', onInitialPointerMove);\n      document.removeEventListener('touchstart', onInitialPointerMove);\n      document.removeEventListener('touchend', onInitialPointerMove);\n    }\n\n    /**\n     * When the polfyill first loads, assume the user is in keyboard modality.\n     * If any event is received from a pointing device (e.g. mouse, pointer,\n     * touch), turn off keyboard modality.\n     * This accounts for situations where focus enters the page from the URL bar.\n     * @param {Event} e\n     */\n    function onInitialPointerMove(e) {\n      // Work around a Safari quirk that fires a mousemove on <html> whenever the\n      // window blurs, even if you're tabbing out of the page. ¯\\_(ツ)_/¯\n      if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {\n        return;\n      }\n\n      hadKeyboardEvent = false;\n      removeInitialPointerMoveListeners();\n    }\n\n    // For some kinds of state, we are interested in changes at the global scope\n    // only. For example, global pointer input, global key presses and global\n    // visibility change should affect the state at every scope:\n    document.addEventListener('keydown', onKeyDown, true);\n    document.addEventListener('mousedown', onPointerDown, true);\n    document.addEventListener('pointerdown', onPointerDown, true);\n    document.addEventListener('touchstart', onPointerDown, true);\n    document.addEventListener('visibilitychange', onVisibilityChange, true);\n\n    addInitialPointerMoveListeners();\n\n    // For focus and blur, we specifically care about state changes in the local\n    // scope. This is because focus / blur events that originate from within a\n    // shadow root are not re-dispatched from the host element if it was already\n    // the active element in its own scope:\n    scope.addEventListener('focus', onFocus, true);\n    scope.addEventListener('blur', onBlur, true);\n\n    // We detect that a node is a ShadowRoot by ensuring that it is a\n    // DocumentFragment and also has a host property. This check covers native\n    // implementation and polyfill implementation transparently. If we only cared\n    // about the native implementation, we could just check if the scope was\n    // an instance of a ShadowRoot.\n    if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {\n      // Since a ShadowRoot is a special kind of DocumentFragment, it does not\n      // have a root element to add a class to. So, we add this attribute to the\n      // host element instead:\n      scope.host.setAttribute('data-js-focus-visible', '');\n    } else if (scope.nodeType === Node.DOCUMENT_NODE) {\n      document.documentElement.classList.add('js-focus-visible');\n      document.documentElement.setAttribute('data-js-focus-visible', '');\n    }\n  }\n\n  // It is important to wrap all references to global window and document in\n  // these checks to support server-side rendering use cases\n  // @see https://github.com/WICG/focus-visible/issues/199\n  if (typeof window !== 'undefined' && typeof document !== 'undefined') {\n    // Make the polyfill helper globally available. This can be used as a signal\n    // to interested libraries that wish to coordinate with the polyfill for e.g.,\n    // applying the polyfill to a shadow root:\n    window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;\n\n    // Notify interested libraries of the polyfill's presence, in case the\n    // polyfill was loaded lazily:\n    var event;\n\n    try {\n      event = new CustomEvent('focus-visible-polyfill-ready');\n    } catch (error) {\n      // IE11 does not support using CustomEvent as a constructor directly:\n      event = document.createEvent('CustomEvent');\n      event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});\n    }\n\n    window.dispatchEvent(event);\n  }\n\n  if (typeof document !== 'undefined') {\n    // Apply the polyfill to the global document, so that no JavaScript\n    // coordination is required to use the polyfill in the top-level document:\n    applyFocusVisiblePolyfill(document);\n  }\n\n})));\n\n\n//# sourceURL=webpack:///./node_modules/focus-visible/dist/focus-visible.js?");

/***/ }),

/***/ "./node_modules/tabbable/index.js":
/*!****************************************!*\
  !*** ./node_modules/tabbable/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var candidateSelectors = [\n  'input',\n  'select',\n  'textarea',\n  'a[href]',\n  'button',\n  '[tabindex]',\n  'audio[controls]',\n  'video[controls]',\n  '[contenteditable]:not([contenteditable=\"false\"])',\n];\nvar candidateSelector = candidateSelectors.join(',');\n\nvar matches = typeof Element === 'undefined'\n  ? function () {}\n  : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;\n\nfunction tabbable(el, options) {\n  options = options || {};\n\n  var regularTabbables = [];\n  var orderedTabbables = [];\n\n  var candidates = el.querySelectorAll(candidateSelector);\n\n  if (options.includeContainer) {\n    if (matches.call(el, candidateSelector)) {\n      candidates = Array.prototype.slice.apply(candidates);\n      candidates.unshift(el);\n    }\n  }\n\n  var i, candidate, candidateTabindex;\n  for (i = 0; i < candidates.length; i++) {\n    candidate = candidates[i];\n\n    if (!isNodeMatchingSelectorTabbable(candidate)) continue;\n\n    candidateTabindex = getTabindex(candidate);\n    if (candidateTabindex === 0) {\n      regularTabbables.push(candidate);\n    } else {\n      orderedTabbables.push({\n        documentOrder: i,\n        tabIndex: candidateTabindex,\n        node: candidate,\n      });\n    }\n  }\n\n  var tabbableNodes = orderedTabbables\n    .sort(sortOrderedTabbables)\n    .map(function(a) { return a.node })\n    .concat(regularTabbables);\n\n  return tabbableNodes;\n}\n\ntabbable.isTabbable = isTabbable;\ntabbable.isFocusable = isFocusable;\n\nfunction isNodeMatchingSelectorTabbable(node) {\n  if (\n    !isNodeMatchingSelectorFocusable(node)\n    || isNonTabbableRadio(node)\n    || getTabindex(node) < 0\n  ) {\n    return false;\n  }\n  return true;\n}\n\nfunction isTabbable(node) {\n  if (!node) throw new Error('No node provided');\n  if (matches.call(node, candidateSelector) === false) return false;\n  return isNodeMatchingSelectorTabbable(node);\n}\n\nfunction isNodeMatchingSelectorFocusable(node) {\n  if (\n    node.disabled\n    || isHiddenInput(node)\n    || isHidden(node)\n  ) {\n    return false;\n  }\n  return true;\n}\n\nvar focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');\nfunction isFocusable(node) {\n  if (!node) throw new Error('No node provided');\n  if (matches.call(node, focusableCandidateSelector) === false) return false;\n  return isNodeMatchingSelectorFocusable(node);\n}\n\nfunction getTabindex(node) {\n  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);\n  if (!isNaN(tabindexAttr)) return tabindexAttr;\n  // Browsers do not return `tabIndex` correctly for contentEditable nodes;\n  // so if they don't have a tabindex attribute specifically set, assume it's 0.\n  if (isContentEditable(node)) return 0;\n  return node.tabIndex;\n}\n\nfunction sortOrderedTabbables(a, b) {\n  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;\n}\n\nfunction isContentEditable(node) {\n  return node.contentEditable === 'true';\n}\n\nfunction isInput(node) {\n  return node.tagName === 'INPUT';\n}\n\nfunction isHiddenInput(node) {\n  return isInput(node) && node.type === 'hidden';\n}\n\nfunction isRadio(node) {\n  return isInput(node) && node.type === 'radio';\n}\n\nfunction isNonTabbableRadio(node) {\n  return isRadio(node) && !isTabbableRadio(node);\n}\n\nfunction getCheckedRadio(nodes) {\n  for (var i = 0; i < nodes.length; i++) {\n    if (nodes[i].checked) {\n      return nodes[i];\n    }\n  }\n}\n\nfunction isTabbableRadio(node) {\n  if (!node.name) return true;\n  // This won't account for the edge case where you have radio groups with the same\n  // in separate forms on the same page.\n  var radioSet = node.ownerDocument.querySelectorAll('input[type=\"radio\"][name=\"' + node.name + '\"]');\n  var checked = getCheckedRadio(radioSet);\n  return !checked || checked === node;\n}\n\nfunction isHidden(node) {\n  // offsetParent being null will allow detecting cases where an element is invisible or inside an invisible element,\n  // as long as the element does not use position: fixed. For them, their visibility has to be checked directly as well.\n  return node.offsetParent === null || getComputedStyle(node).visibility === 'hidden';\n}\n\nmodule.exports = tabbable;\n\n\n//# sourceURL=webpack:///./node_modules/tabbable/index.js?");

/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = extend\n\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\n\nfunction extend() {\n    var target = {}\n\n    for (var i = 0; i < arguments.length; i++) {\n        var source = arguments[i]\n\n        for (var key in source) {\n            if (hasOwnProperty.call(source, key)) {\n                target[key] = source[key]\n            }\n        }\n    }\n\n    return target\n}\n\n\n//# sourceURL=webpack:///./node_modules/xtend/immutable.js?");

/***/ }),

/***/ "./src/assets/scripts/main.js":
/*!************************************!*\
  !*** ./src/assets/scripts/main.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! focus-visible */ \"./node_modules/focus-visible/dist/focus-visible.js\");\n/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(focus_visible__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/nav */ \"./src/assets/scripts/modules/nav.js\");\n// Focus Visible Polyfill\n // Internal Modules\n\n\n\n//# sourceURL=webpack:///./src/assets/scripts/main.js?");

/***/ }),

/***/ "./src/assets/scripts/modules/nav.js":
/*!*******************************************!*\
  !*** ./src/assets/scripts/modules/nav.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! focus-trap */ \"./node_modules/focus-trap/index.js\");\n/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar SELECTORS = {\n  nav: '.js-nav',\n  toggleBtn: '.js-nav-toggle'\n};\nvar CLASSES = {\n  open: 'is-open'\n};\n\nvar Navigation = /*#__PURE__*/function () {\n  function Navigation() {\n    var _this = this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Navigation);\n\n    this.isOpen = false;\n    this.nav = document.querySelector(SELECTORS.nav);\n    this.toggleBtn = this.nav.querySelector(SELECTORS.toggleBtn);\n    this.focusTrap = focus_trap__WEBPACK_IMPORTED_MODULE_2___default()(this.nav);\n    this.toggleBtn.addEventListener('click', function () {\n      return _this.toggleMenu();\n    });\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Navigation, [{\n    key: \"toggleMenu\",\n    value: function toggleMenu(force) {\n      this.isOpen = typeof force === 'boolean' ? force : !this.isOpen;\n      this.nav.classList.toggle(CLASSES.open, this.isOpen);\n      this.toggleBtn.setAttribute('aria-expanded', String(this.isOpen));\n\n      if (this.isOpen) {\n        this.focusTrap.activate();\n      } else {\n        this.focusTrap.deactivate();\n      }\n    }\n  }]);\n\n  return Navigation;\n}();\n\nif (document.querySelector(SELECTORS.nav)) {\n  new Navigation();\n}\n\n//# sourceURL=webpack:///./src/assets/scripts/modules/nav.js?");

/***/ })

/******/ });