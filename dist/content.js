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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/content.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/content.ts":
/*!****************************!*\
  !*** ./src/app/content.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const list_heart_clicker_1 = __webpack_require__(/*! ./list-heart-clicker */ "./src/app/list-heart-clicker.js");
const util_1 = __webpack_require__(/*! ./util */ "./src/app/util.ts");
chrome.runtime.sendMessage({ action: "init" }, () => {
    var checkReady = setInterval(() => {
        if (document.readyState === "complete") {
            clearInterval(checkReady);
            list_heart_clicker_1.executeScript((el) => __awaiter(void 0, void 0, void 0, function* () {
                const { top, right, bottom, left } = el.getBoundingClientRect();
                if (!util_1.coordinatesInViewport({ top, bottom })) {
                    return;
                }
                chrome.runtime.sendMessage({
                    action: "click",
                    x: (left + right) / 2,
                    y: (top + bottom) / 2,
                });
            }));
        }
    });
});


/***/ }),

/***/ "./src/app/list-heart-clicker.js":
/*!***************************************!*\
  !*** ./src/app/list-heart-clicker.js ***!
  \***************************************/
/*! exports provided: executeScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeScript", function() { return executeScript; });
const executeScript = (clickElement) => {
  'use strict';
  setTimeout(() => {
    // UI elements
    const arrowSvgString = '<svg viewBox="0 0 24 24"><g><path d="M12 4.656l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0L12 4.656z"></path><path d="M12 12.465l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0l8.72-8.72z"></path></g></svg>';
    const likeSvgString = '<svg viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>';

    // Utilities
    const random = (min, max) => Math.random() * (max - min) + min;

    const createFromHTML = (htmlString) => {
      var div = document.createElement('div');
      div.innerHTML = htmlString.trim();

      // Change this to div.childNodes to support multiple top-level nodes
      return div.firstChild;
    }

    // Get elements Utilites

    const arrowSvg = createFromHTML(arrowSvgString);
    const heartSvg = createFromHTML(likeSvgString);
    const blueColor = 'rgba(29,161,242,1.00)';

    arrowSvg.setAttribute("style", "transform: rotate(180deg);");
    const getNav = () => document.querySelector('nav[role="navigation"]');
    const getHearts = () => Array.from(document.querySelectorAll('main [d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"]'))
    const getTweets = (current) => {
      const all = Array.from(document.querySelectorAll('article'));
      return all.slice(all.indexOf(current) + 1);
    }

    // Setup settings
    const getStorageKey = (key) => `t-${key}-${location.pathname}`
    const getLocalSettings = () => ({
      scroll: !!localStorage.getItem(getStorageKey('scroll')),
      like: !!localStorage.getItem(getStorageKey('like')),
    })

    let settings = getLocalSettings();

    // Setup loops
    let tweets = [];
    let currentIndex = 0;
    let reloads = 0;
    const rndReloads = random(10, 20);

    const startInterval = (callback, ms) => {
      callback();
      return setInterval(callback, ms);
    }

    const getIntervalMap = {
      like: () => startInterval(() => {
        settings.like && getHearts().forEach((h) => h !== setTimeout(() => settings.like && clickElement(h), random(300, 3300)));
      }, 5000, 'like'),
      scroll: () => startInterval(() => {
        if (settings.scroll) {
          if (reloads > rndReloads) {
            window.location.reload();
            return;
          }

          let tweet = tweets[currentIndex++];
          if (!tweet) {
            tweets = getTweets(tweets[currentIndex - 2]);
            currentIndex = 0;
            tweet = tweets[currentIndex++];
            reloads++;
          }
          if (tweet) tweet.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 5000, 'scroll')
    };

    const intervalRefMap = {
      scroll: settings.scroll ? getIntervalMap.scroll() : null, like: settings.like ? getIntervalMap.like() : null
    };

    // Setup UX
    const uiContainer = getNav();

    const createNavElement = (newIcon, text, clickHandler) => {
      const newElement = uiContainer.lastChild.cloneNode(true);
      const oldIcon = newElement.querySelector('svg');

      newIcon.className.baseVal = oldIcon.className.baseVal;

      oldIcon.parentElement.appendChild(newIcon);
      oldIcon.parentElement.removeChild(oldIcon);

      const textSpan = newElement.querySelector('span');
      if (textSpan) {
        textSpan.innerHTML = text;
      }

      newElement.addEventListener('click', (e) => {
        clickHandler(e);
        e.preventDefault && e.preventDefault();
        return false;
      });

      return newElement;
    }

    const doButtonStyle = (button, activate) => {
      const svg = button.querySelector('svg');
      const text = button.querySelector('span');

      button.style.color = activate ? blueColor : null;

      if (svg) {
        svg.style.fill = activate ? blueColor : null
      }

      if (text) {
        text.style.color = activate ? blueColor : null;
      }
    }

    const handleClick = (settingKey) => ({ target }) => {
      const button = target.matches('[role="button"]') ? target : target.closest('[role="button"]');
      if (settings[settingKey] = !settings[settingKey]) {
        intervalRefMap[settingKey] = getIntervalMap[settingKey]();
        localStorage.setItem(getStorageKey(settingKey), '1');
        doButtonStyle(button, true);
      } else {
        localStorage.setItem(getStorageKey(settingKey), '');
        intervalRefMap[settingKey] = clearTimeout(intervalRefMap[settingKey]);
        doButtonStyle(button, false);
      }
    };

    const scrollButton = createNavElement(arrowSvg, 'Auto Scroll', handleClick('scroll'));
    if (settings.scroll) doButtonStyle(scrollButton, true);

    const likeButton = createNavElement(heartSvg, 'Auto Like', handleClick('like'));
    if (settings.like) doButtonStyle(likeButton, true);

    uiContainer.prepend(likeButton);
    uiContainer.prepend(scrollButton);

    console.log({ uiContainer, likeButton, scrollButton })

    const getButton = (key) => ({
      scroll: scrollButton,
      like: likeButton,
    })[key];


    // Polling for client side navigation and tab inactivity
    let wasHidden = false;
    let { href } = window.location;
    setInterval(() => {
      if (href !== window.location.href) {
        href = window.location.href;
        settings = getLocalSettings();

        Object.entries(intervalRefMap).forEach(([key, value]) => {
          const button = getButton(key);
          if (settings[key]) {
            if (!value) intervalRefMap[key] = getIntervalMap[key]();
            doButtonStyle(button, true);
          } else {
            clearTimeout(value);
            doButtonStyle(button, false);
          }
        });
      }
      if (document.hidden) {
        if (!wasHidden) {
          wasHidden = true;
          Object.entries(intervalRefMap).forEach(([key, value]) => { intervalRefMap[key] = clearInterval(value) });
        }
      } else if (wasHidden) {
        wasHidden = false;
        Object.keys(intervalRefMap).forEach((key) => { settings[key] && !intervalRefMap[key] && (intervalRefMap[key] = getIntervalMap[key]()) });
      }
    }, 50);
  }, 3000);
}

/***/ }),

/***/ "./src/app/util.ts":
/*!*************************!*\
  !*** ./src/app/util.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.clickLocation = exports.coordinatesInViewport = void 0;
exports.coordinatesInViewport = ({ top, bottom, }) => {
    if (top >= 0 && bottom <= window.innerHeight) {
        return true;
    }
    return false;
};
exports.clickLocation = (location, tabId, button = "left", clickCount = 1) => {
    const target = { tabId }, args = Object.assign(Object.assign({}, location), { type: "mousePressed", button,
        clickCount });
    chrome.debugger.attach(target, "1.2", () => {
        chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", args, () => {
            args.type = "mouseReleased";
            chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", args, () => chrome.debugger.detach(target));
        });
    });
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbGlzdC1oZWFydC1jbGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsZ0hBQXFEO0FBQ3JELHNFQUErQztBQUUvQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUU7SUFDbEQsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtRQUNoQyxJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO1lBQ3RDLGFBQWEsQ0FBQyxVQUFVLENBQUMs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QUNOLFVBQVUsR0FDWCxDQUFDO0lBRUosTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7UUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQ3pCLE1BQU0sRUFDTiwwQkFBMEIsRUFDMUIsSUFBSSxFQUNKLEdBQUcsRUFBRTtZQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUN6QixNQUFNLEVBQ04sMEJBQTBCLEVBQzFCLElBQUksRUFDSixHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDckMsQ0FBQztRQUNKLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMiLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC9jb250ZW50LnRzXCIpO1xuIiwiaW1wb3J0IHsgZXhlY3V0ZVNjcmlwdCB9IGZyb20gXCIuL2xpc3QtaGVhcnQtY2xpY2tlclwiO1xuaW1wb3J0IHsgY29vcmRpbmF0ZXNJblZpZXdwb3J0IH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5jaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogXCJpbml0XCIgfSwgKCkgPT4ge1xuICB2YXIgY2hlY2tSZWFkeSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICBjbGVhckludGVydmFsKGNoZWNrUmVhZHkpO1xuXG4gICAgICBleGVjdXRlU2NyaXB0KGFzeW5jIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgaWYgKCFjb29yZGluYXRlc0luVmlld3BvcnQoeyB0b3AsIGJvdHRvbSB9KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICBhY3Rpb246IFwiY2xpY2tcIixcbiAgICAgICAgICB4OiAobGVmdCArIHJpZ2h0KSAvIDIsXG4gICAgICAgICAgeTogKHRvcCArIGJvdHRvbSkgLyAyLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59KTtcbiIsImV4cG9ydCBjb25zdCBleGVjdXRlU2NyaXB0ID0gKGNsaWNrRWxlbWVudCkgPT4ge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vIFVJIGVsZW1lbnRzXHJcbiAgICBjb25zdCBhcnJvd1N2Z1N0cmluZyA9ICc8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48Zz48cGF0aCBkPVwiTTEyIDQuNjU2bDguNzIgOC43MmMuMjkzLjI5My43NjguMjkzIDEuMDYgMHMuMjk0LS43NjggMC0xLjA2bC05LjI1LTkuMjVjLS4yOTItLjI5NC0uNzY3LS4yOTQtMS4wNiAwbC05LjI1IDkuMjVjLS4xNDYuMTQ1LS4yMi4zMzctLjIyLjUzcy4wNzMuMzgzLjIyLjUzYy4yOTMuMjkyLjc2OC4yOTIgMS4wNiAwTDEyIDQuNjU2elwiPjwvcGF0aD48cGF0aCBkPVwiTTEyIDEyLjQ2NWw4LjcyIDguNzJjLjI5My4yOTMuNzY4LjI5MyAxLjA2IDBzLjI5NC0uNzY4IDAtMS4wNmwtOS4yNS05LjI1Yy0uMjkyLS4yOTQtLjc2Ny0uMjk0LTEuMDYgMGwtOS4yNSA5LjI1Yy0uMTQ2LjE0NS0uMjIuMzM3LS4yMi41M3MuMDczLjM4My4yMi41M2MuMjkzLjI5Mi43NjguMjkyIDEuMDYgMGw4LjcyLTguNzJ6XCI+PC9wYXRoPjwvZz48L3N2Zz4nO1xyXG4gICAgY29uc3QgbGlrZVN2Z1N0cmluZyA9ICc8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48Zz48cGF0aCBkPVwiTTEyIDIxLjYzOGgtLjAxNEM5LjQwMyAyMS41OSAxLjk1IDE0Ljg1NiAxLjk1IDguNDc4YzAtMy4wNjQgMi41MjUtNS43NTQgNS40MDMtNS43NTQgMi4yOSAwIDMuODMgMS41OCA0LjY0NiAyLjczLjgxNC0xLjE0OCAyLjM1NC0yLjczIDQuNjQ1LTIuNzMgMi44OCAwIDUuNDA0IDIuNjkgNS40MDQgNS43NTUgMCA2LjM3Ni03LjQ1NCAxMy4xMS0xMC4wMzcgMTMuMTU3SDEyek03LjM1NCA0LjIyNWMtMi4wOCAwLTMuOTAzIDEuOTg4LTMuOTAzIDQuMjU1IDAgNS43NCA3LjAzNCAxMS41OTYgOC41NSAxMS42NTggMS41MTgtLjA2MiA4LjU1LTUuOTE3IDguNTUtMTEuNjU4IDAtMi4yNjctMS44MjMtNC4yNTUtMy45MDMtNC4yNTUtMi41MjggMC0zLjk0IDIuOTM2LTMuOTUyIDIuOTY1LS4yMy41NjItMS4xNTYuNTYyLTEuMzg3IDAtLjAxNC0uMDMtMS40MjUtMi45NjUtMy45NTQtMi45NjV6XCI+PC9wYXRoPjwvZz48L3N2Zz4nO1xyXG5cclxuICAgIC8vIFV0aWxpdGllc1xyXG4gICAgY29uc3QgcmFuZG9tID0gKG1pbiwgbWF4KSA9PiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcblxyXG4gICAgY29uc3QgY3JlYXRlRnJvbUhUTUwgPSAoaHRtbFN0cmluZykgPT4ge1xyXG4gICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sU3RyaW5nLnRyaW0oKTtcclxuXHJcbiAgICAgIC8vIENoYW5nZSB0aGlzIHRvIGRpdi5jaGlsZE5vZGVzIHRvIHN1cHBvcnQgbXVsdGlwbGUgdG9wLWxldmVsIG5vZGVzXHJcbiAgICAgIHJldHVybiBkaXYuZmlyc3RDaGlsZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgZWxlbWVudHMgVXRpbGl0ZXNcclxuXHJcbiAgICBjb25zdCBhcnJvd1N2ZyA9IGNyZWF0ZUZyb21IVE1MKGFycm93U3ZnU3RyaW5nKTtcclxuICAgIGNvbnN0IGhlYXJ0U3ZnID0gY3JlYXRlRnJvbUhUTUwobGlrZVN2Z1N0cmluZyk7XHJcbiAgICBjb25zdCBibHVlQ29sb3IgPSAncmdiYSgyOSwxNjEsMjQyLDEuMDApJztcclxuXHJcbiAgICBhcnJvd1N2Zy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XCIpO1xyXG4gICAgY29uc3QgZ2V0TmF2ID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2W3JvbGU9XCJuYXZpZ2F0aW9uXCJdJyk7XHJcbiAgICBjb25zdCBnZXRIZWFydHMgPSAoKSA9PiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ21haW4gW2Q9XCJNMTIgMjEuNjM4aC0uMDE0QzkuNDAzIDIxLjU5IDEuOTUgMTQuODU2IDEuOTUgOC40NzhjMC0zLjA2NCAyLjUyNS01Ljc1NCA1LjQwMy01Ljc1NCAyLjI5IDAgMy44MyAxLjU4IDQuNjQ2IDIuNzMuODE0LTEuMTQ4IDIuMzU0LTIuNzMgNC42NDUtMi43MyAyLjg4IDAgNS40MDQgMi42OSA1LjQwNCA1Ljc1NSAwIDYuMzc2LTcuNDU0IDEzLjExLTEwLjAzNyAxMy4xNTdIMTJ6TTcuMzU0IDQuMjI1Yy0yLjA4IDAtMy45MDMgMS45ODgtMy45MDMgNC4yNTUgMCA1Ljc0IDcuMDM0IDExLjU5NiA4LjU1IDExLjY1OCAxLjUxOC0uMDYyIDguNTUtNS45MTcgOC41NS0xMS42NTggMC0yLjI2Ny0xLjgyMy00LjI1NS0zLjkwMy00LjI1NS0yLjUyOCAwLTMuOTQgMi45MzYtMy45NTIgMi45NjUtLjIzLjU2Mi0xLjE1Ni41NjItMS4zODcgMC0uMDE0LS4wMy0xLjQyNS0yLjk2NS0zLjk1NC0yLjk2NXpcIl0nKSlcclxuICAgIGNvbnN0IGdldFR3ZWV0cyA9IChjdXJyZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGFsbCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYXJ0aWNsZScpKTtcclxuICAgICAgcmV0dXJuIGFsbC5zbGljZShhbGwuaW5kZXhPZihjdXJyZW50KSArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHVwIHNldHRpbmdzXHJcbiAgICBjb25zdCBnZXRTdG9yYWdlS2V5ID0gKGtleSkgPT4gYHQtJHtrZXl9LSR7bG9jYXRpb24ucGF0aG5hbWV9YFxyXG4gICAgY29uc3QgZ2V0TG9jYWxTZXR0aW5ncyA9ICgpID0+ICh7XHJcbiAgICAgIHNjcm9sbDogISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShnZXRTdG9yYWdlS2V5KCdzY3JvbGwnKSksXHJcbiAgICAgIGxpa2U6ICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oZ2V0U3RvcmFnZUtleSgnbGlrZScpKSxcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IHNldHRpbmdzID0gZ2V0TG9jYWxTZXR0aW5ncygpO1xyXG5cclxuICAgIC8vIFNldHVwIGxvb3BzXHJcbiAgICBsZXQgdHdlZXRzID0gW107XHJcbiAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcclxuICAgIGxldCByZWxvYWRzID0gMDtcclxuICAgIGNvbnN0IHJuZFJlbG9hZHMgPSByYW5kb20oMTAsIDIwKTtcclxuXHJcbiAgICBjb25zdCBzdGFydEludGVydmFsID0gKGNhbGxiYWNrLCBtcykgPT4ge1xyXG4gICAgICBjYWxsYmFjaygpO1xyXG4gICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoY2FsbGJhY2ssIG1zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRJbnRlcnZhbE1hcCA9IHtcclxuICAgICAgbGlrZTogKCkgPT4gc3RhcnRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgc2V0dGluZ3MubGlrZSAmJiBnZXRIZWFydHMoKS5mb3JFYWNoKChoKSA9PiBoICE9PSBzZXRUaW1lb3V0KCgpID0+IHNldHRpbmdzLmxpa2UgJiYgY2xpY2tFbGVtZW50KGgpLCByYW5kb20oMzAwLCAzMzAwKSkpO1xyXG4gICAgICB9LCA1MDAwLCAnbGlrZScpLFxyXG4gICAgICBzY3JvbGw6ICgpID0+IHN0YXJ0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZXR0aW5ncy5zY3JvbGwpIHtcclxuICAgICAgICAgIGlmIChyZWxvYWRzID4gcm5kUmVsb2Fkcykge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsZXQgdHdlZXQgPSB0d2VldHNbY3VycmVudEluZGV4KytdO1xyXG4gICAgICAgICAgaWYgKCF0d2VldCkge1xyXG4gICAgICAgICAgICB0d2VldHMgPSBnZXRUd2VldHModHdlZXRzW2N1cnJlbnRJbmRleCAtIDJdKTtcclxuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gMDtcclxuICAgICAgICAgICAgdHdlZXQgPSB0d2VldHNbY3VycmVudEluZGV4KytdO1xyXG4gICAgICAgICAgICByZWxvYWRzKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodHdlZXQpIHR3ZWV0LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCA1MDAwLCAnc2Nyb2xsJylcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW50ZXJ2YWxSZWZNYXAgPSB7XHJcbiAgICAgIHNjcm9sbDogc2V0dGluZ3Muc2Nyb2xsID8gZ2V0SW50ZXJ2YWxNYXAuc2Nyb2xsKCkgOiBudWxsLCBsaWtlOiBzZXR0aW5ncy5saWtlID8gZ2V0SW50ZXJ2YWxNYXAubGlrZSgpIDogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTZXR1cCBVWFxyXG4gICAgY29uc3QgdWlDb250YWluZXIgPSBnZXROYXYoKTtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVOYXZFbGVtZW50ID0gKG5ld0ljb24sIHRleHQsIGNsaWNrSGFuZGxlcikgPT4ge1xyXG4gICAgICBjb25zdCBuZXdFbGVtZW50ID0gdWlDb250YWluZXIubGFzdENoaWxkLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgY29uc3Qgb2xkSWNvbiA9IG5ld0VsZW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnJyk7XHJcblxyXG4gICAgICBuZXdJY29uLmNsYXNzTmFtZS5iYXNlVmFsID0gb2xkSWNvbi5jbGFzc05hbWUuYmFzZVZhbDtcclxuXHJcbiAgICAgIG9sZEljb24ucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChuZXdJY29uKTtcclxuICAgICAgb2xkSWNvbi5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG9sZEljb24pO1xyXG5cclxuICAgICAgY29uc3QgdGV4dFNwYW4gPSBuZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuICAgICAgaWYgKHRleHRTcGFuKSB7XHJcbiAgICAgICAgdGV4dFNwYW4uaW5uZXJIVE1MID0gdGV4dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbmV3RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY2xpY2tIYW5kbGVyKGUpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3RWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkb0J1dHRvblN0eWxlID0gKGJ1dHRvbiwgYWN0aXZhdGUpID0+IHtcclxuICAgICAgY29uc3Qgc3ZnID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpO1xyXG4gICAgICBjb25zdCB0ZXh0ID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuXHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5jb2xvciA9IGFjdGl2YXRlID8gYmx1ZUNvbG9yIDogbnVsbDtcclxuXHJcbiAgICAgIGlmIChzdmcpIHtcclxuICAgICAgICBzdmcuc3R5bGUuZmlsbCA9IGFjdGl2YXRlID8gYmx1ZUNvbG9yIDogbnVsbFxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGV4dCkge1xyXG4gICAgICAgIHRleHQuc3R5bGUuY29sb3IgPSBhY3RpdmF0ZSA/IGJsdWVDb2xvciA6IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChzZXR0aW5nS2V5KSA9PiAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICBjb25zdCBidXR0b24gPSB0YXJnZXQubWF0Y2hlcygnW3JvbGU9XCJidXR0b25cIl0nKSA/IHRhcmdldCA6IHRhcmdldC5jbG9zZXN0KCdbcm9sZT1cImJ1dHRvblwiXScpO1xyXG4gICAgICBpZiAoc2V0dGluZ3Nbc2V0dGluZ0tleV0gPSAhc2V0dGluZ3Nbc2V0dGluZ0tleV0pIHtcclxuICAgICAgICBpbnRlcnZhbFJlZk1hcFtzZXR0aW5nS2V5XSA9IGdldEludGVydmFsTWFwW3NldHRpbmdLZXldKCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZ2V0U3RvcmFnZUtleShzZXR0aW5nS2V5KSwgJzEnKTtcclxuICAgICAgICBkb0J1dHRvblN0eWxlKGJ1dHRvbiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZ2V0U3RvcmFnZUtleShzZXR0aW5nS2V5KSwgJycpO1xyXG4gICAgICAgIGludGVydmFsUmVmTWFwW3NldHRpbmdLZXldID0gY2xlYXJUaW1lb3V0KGludGVydmFsUmVmTWFwW3NldHRpbmdLZXldKTtcclxuICAgICAgICBkb0J1dHRvblN0eWxlKGJ1dHRvbiwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNjcm9sbEJ1dHRvbiA9IGNyZWF0ZU5hdkVsZW1lbnQoYXJyb3dTdmcsICdBdXRvIFNjcm9sbCcsIGhhbmRsZUNsaWNrKCdzY3JvbGwnKSk7XHJcbiAgICBpZiAoc2V0dGluZ3Muc2Nyb2xsKSBkb0J1dHRvblN0eWxlKHNjcm9sbEJ1dHRvbiwgdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgbGlrZUJ1dHRvbiA9IGNyZWF0ZU5hdkVsZW1lbnQoaGVhcnRTdmcsICdBdXRvIExpa2UnLCBoYW5kbGVDbGljaygnbGlrZScpKTtcclxuICAgIGlmIChzZXR0aW5ncy5saWtlKSBkb0J1dHRvblN0eWxlKGxpa2VCdXR0b24sIHRydWUpO1xyXG5cclxuICAgIHVpQ29udGFpbmVyLnByZXBlbmQobGlrZUJ1dHRvbik7XHJcbiAgICB1aUNvbnRhaW5lci5wcmVwZW5kKHNjcm9sbEJ1dHRvbik7XHJcblxyXG4gICAgY29uc29sZS5sb2coeyB1aUNvbnRhaW5lciwgbGlrZUJ1dHRvbiwgc2Nyb2xsQnV0dG9uIH0pXHJcblxyXG4gICAgY29uc3QgZ2V0QnV0dG9uID0gKGtleSkgPT4gKHtcclxuICAgICAgc2Nyb2xsOiBzY3JvbGxCdXR0b24sXHJcbiAgICAgIGxpa2U6IGxpa2VCdXR0b24sXHJcbiAgICB9KVtrZXldO1xyXG5cclxuXHJcbiAgICAvLyBQb2xsaW5nIGZvciBjbGllbnQgc2lkZSBuYXZpZ2F0aW9uIGFuZCB0YWIgaW5hY3Rpdml0eVxyXG4gICAgbGV0IHdhc0hpZGRlbiA9IGZhbHNlO1xyXG4gICAgbGV0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAoaHJlZiAhPT0gd2luZG93LmxvY2F0aW9uLmhyZWYpIHtcclxuICAgICAgICBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgc2V0dGluZ3MgPSBnZXRMb2NhbFNldHRpbmdzKCk7XHJcblxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGludGVydmFsUmVmTWFwKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGdldEJ1dHRvbihrZXkpO1xyXG4gICAgICAgICAgaWYgKHNldHRpbmdzW2tleV0pIHtcclxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkgaW50ZXJ2YWxSZWZNYXBba2V5XSA9IGdldEludGVydmFsTWFwW2tleV0oKTtcclxuICAgICAgICAgICAgZG9CdXR0b25TdHlsZShidXR0b24sIHRydWUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbHVlKTtcclxuICAgICAgICAgICAgZG9CdXR0b25TdHlsZShidXR0b24sIGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XHJcbiAgICAgICAgaWYgKCF3YXNIaWRkZW4pIHtcclxuICAgICAgICAgIHdhc0hpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgICBPYmplY3QuZW50cmllcyhpbnRlcnZhbFJlZk1hcCkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7IGludGVydmFsUmVmTWFwW2tleV0gPSBjbGVhckludGVydmFsKHZhbHVlKSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAod2FzSGlkZGVuKSB7XHJcbiAgICAgICAgd2FzSGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoaW50ZXJ2YWxSZWZNYXApLmZvckVhY2goKGtleSkgPT4geyBzZXR0aW5nc1trZXldICYmICFpbnRlcnZhbFJlZk1hcFtrZXldICYmIChpbnRlcnZhbFJlZk1hcFtrZXldID0gZ2V0SW50ZXJ2YWxNYXBba2V5XSgpKSB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgNTApO1xyXG4gIH0sIDMwMDApO1xyXG59IiwiZXhwb3J0IGNvbnN0IGNvb3JkaW5hdGVzSW5WaWV3cG9ydCA9ICh7XHJcbiAgdG9wLFxyXG4gIGJvdHRvbSxcclxufTogUGljazxET01SZWN0LCBcInRvcFwiIHwgXCJib3R0b21cIj4pID0+IHtcclxuICBpZiAodG9wID49IDAgJiYgYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGlja0xvY2F0aW9uID0gKFxyXG4gIGxvY2F0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXHJcbiAgdGFiSWQ6IG51bWJlcixcclxuICBidXR0b24gPSBcImxlZnRcIixcclxuICBjbGlja0NvdW50ID0gMVxyXG4pID0+IHtcclxuICBjb25zdCB0YXJnZXQgPSB7IHRhYklkIH0sXHJcbiAgICBhcmdzID0ge1xyXG4gICAgICAuLi5sb2NhdGlvbixcclxuICAgICAgdHlwZTogXCJtb3VzZVByZXNzZWRcIixcclxuICAgICAgYnV0dG9uLFxyXG4gICAgICBjbGlja0NvdW50LFxyXG4gICAgfTtcclxuXHJcbiAgY2hyb21lLmRlYnVnZ2VyLmF0dGFjaCh0YXJnZXQsIFwiMS4yXCIsICgpID0+IHtcclxuICAgIGNocm9tZS5kZWJ1Z2dlci5zZW5kQ29tbWFuZChcclxuICAgICAgdGFyZ2V0LFxyXG4gICAgICBcIklucHV0LmRpc3BhdGNoTW91c2VFdmVudFwiLFxyXG4gICAgICBhcmdzLFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgYXJncy50eXBlID0gXCJtb3VzZVJlbGVhc2VkXCI7XHJcbiAgICAgICAgY2hyb21lLmRlYnVnZ2VyLnNlbmRDb21tYW5kKFxyXG4gICAgICAgICAgdGFyZ2V0LFxyXG4gICAgICAgICAgXCJJbnB1dC5kaXNwYXRjaE1vdXNlRXZlbnRcIixcclxuICAgICAgICAgIGFyZ3MsXHJcbiAgICAgICAgICAoKSA9PiBjaHJvbWUuZGVidWdnZXIuZGV0YWNoKHRhcmdldClcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9