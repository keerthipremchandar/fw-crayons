(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./node_modules/core-js/modules/es.date.to-string.js":function(module,exports,__webpack_require__){var redefine=__webpack_require__("./node_modules/core-js/internals/redefine.js"),DatePrototype=Date.prototype,nativeDateToString=DatePrototype.toString,getTime=DatePrototype.getTime;"Invalid Date"!=String(new Date(NaN))&&redefine(DatePrototype,"toString",(function toString(){var value=getTime.call(this);return value==value?nativeDateToString.call(this):"Invalid Date"}))},"./packages/crayons-core/dist/esm-es5/fw-toggle-group.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"fw_toggle_group",(function(){return ToggleGroup}));__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_25bc21e4_js__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./packages/crayons-core/dist/esm-es5/index-25bc21e4.js"),__awaiter=function(e,t,r,a){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function s(e){try{o(a.next(e))}catch(t){n(t)}}function l(e){try{o(a.throw(e))}catch(t){n(t)}}function o(e){e.done?r(e.value):i(e.value).then(s,l)}o((a=a.apply(e,t||[])).next())}))},__generator=function(e,t){var a,i,n,s,r={label:0,sent:function sent(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function l(e){return function(t){return o([e,t])}}function o(s){if(a)throw new TypeError("Generator is already executing.");for(;r;)try{if(a=1,i&&(n=2&s[0]?i.return:s[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,s[1])).done)return n;switch(i=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,i=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!(n=r.trys,(n=n.length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){r=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){r.label=s[1];break}if(6===s[0]&&r.label<n[1]){r.label=n[1],n=s;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(s);break}n[2]&&r.ops.pop(),r.trys.pop();continue}s=t.call(e,r)}catch(l){s=[6,l],i=0}finally{a=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},__spreadArray=function(e,t){for(var r=0,a=t.length,i=e.length;r<a;r++,i++)e[i]=t[r];return e};function updateSelectedValues(e,t,r,a,i){if(void 0===e&&(e=null),void 0===t&&(t=-1),void 0===r&&(r=!0),void 0===a&&(a=!1),void 0===i&&(i=null),t<0||!e||e.length<=0||t>e.length-1)return i;i||(i=[]);var n=e[t].value,s=i.length>0&&i.includes(n);if(!r&&a&&s){for(var l=-1,o=i.length,u=0;u<o;u++)if(i[u]===n){l=u;break}i=__spreadArray(__spreadArray([],i.slice(0,l)),i.slice(l+1))}else r&&!s&&(i=a?__spreadArray(__spreadArray([],i),[n]):[n]);return i}var ToggleGroup=function(){function e(e){Object(_index_25bc21e4_js__WEBPACK_IMPORTED_MODULE_18__.l)(this,e),this.fwChange=Object(_index_25bc21e4_js__WEBPACK_IMPORTED_MODULE_18__.e)(this,"fwChange",7),this.selectedIndex=-1,this.isInputFormatArray=!1,this.multiple=!1,this.value=null,this.arrSelectedItems=null,this.label="",this.name=""}return e.prototype.setSelectedValues=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return this.value=e,[2]}))}))},e.prototype.watchSelectedValuesChangeHandler=function(){this.parseSelectedItems(),this.updateSelection()},e.prototype.keyupHandler=function(e){var t=this.arrChildElements;if(t&&0!==t.length){var r=function doKeyDownOperations(e,t,r,a){if(void 0===t&&(t=null),void 0===r&&(r=0),void 0===a&&(a=!1),!t||0===t.length)return{index:r,changeSelection:!1,selected:!1};switch(r<0&&(r=0),e){case"ArrowDown":case"ArrowRight":t[r].setAttribute("tabindex","-1"),t[r=++r%t.length].setAttribute("tabindex","0"),t[r].setFocus();break;case"ArrowUp":case"ArrowLeft":t[r].setAttribute("tabindex","-1"),t[r=0===r?t.length-1:--r].setAttribute("tabindex","0"),t[r].setFocus();break;case"Enter":case"Space":t[r].setFocus();var i=t[r].selected;if(!a&&i)return;return{index:r,changeSelection:!0,selected:!a||!i}}return{index:r,changeSelection:!1,selected:!1}}(e.code,this.arrChildElements,this.selectedIndex,this.multiple);if(this.selectedIndex=r.index,r.changeSelection){var a=updateSelectedValues(t,this.selectedIndex,r.selected,this.multiple,this.arrSelectedItems);this.arrSelectedItems=__spreadArray([],a),this.dispatchSelectionChangeEvent()}}},e.prototype.toggleChangeHandler=function(e){var t=e.detail;this.selectedIndex=t.index;var r=updateSelectedValues(this.arrChildElements,this.selectedIndex,t.selected,this.multiple,this.arrSelectedItems);this.arrSelectedItems=r,this.dispatchSelectionChangeEvent()},e.prototype.componentWillLoad=function(){this.parseSelectedItems()},e.prototype.componentDidLoad=function(){var e=this.host;this.arrChildElements=e.children,this.updateSelection(!0)},e.prototype.dispatchSelectionChangeEvent=function(){var e=this.arrSelectedItems.toString();e!==this.value&&(this.value=e,this.fwChange.emit({value:this.isInputFormatArray?__spreadArray([],this.arrSelectedItems):e}))},e.prototype.parseSelectedItems=function(){var e=function validateAndParseInputSelectedValues(e){var t=[],r=!1,a=e?e.toString():"";return e&&(t=(r=!!Array.isArray(e))?__spreadArray([],e):""!==a?a.split(","):[]),{isArray:r,strSelectedValues:a,arrSelectedValues:t}}(this.value);this.value!==e.strSelectedValues&&(this.value=e.strSelectedValues),this.isInputFormatArray=e.isArray,this.arrSelectedItems=e.arrSelectedValues},e.prototype.updateSelection=function(e){void 0===e&&(e=!1);var t=function updateChildSelectionState(e,t,r,a){if(void 0===e&&(e=null),void 0===t&&(t=!1),void 0===r&&(r=null),void 0===a&&(a=!1),!e||0===e.length)return-1;for(var i=-1,n=!1,s=e.length,l=0;l<s;l++){var o=e[l],u=o.value;o.index=l,a&&(o.isCheckbox=t);var c=!(!r||!r.includes(u)),d=c;t||(!n&&c?(n=!0,d=!0):d=!1),o.selected=d,d&&-1===i?(i=l,o.setAttribute("tabindex","0")):o.setAttribute("tabindex","-1")}return i}(this.arrChildElements,this.multiple,this.arrSelectedItems,e);-1!==t&&-1===this.selectedIndex&&(this.selectedIndex=t)},e.prototype.render=function(){return Object(_index_25bc21e4_js__WEBPACK_IMPORTED_MODULE_18__.i)(_index_25bc21e4_js__WEBPACK_IMPORTED_MODULE_18__.f,{"aria-label":this.label},Object(_index_25bc21e4_js__WEBPACK_IMPORTED_MODULE_18__.i)("slot",null))},Object.defineProperty(e.prototype,"host",{get:function get(){return Object(_index_25bc21e4_js__WEBPACK_IMPORTED_MODULE_18__.j)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function get(){return{value:["watchSelectedValuesChangeHandler"]}},enumerable:!1,configurable:!0}),e}();ToggleGroup.style=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0;gap:12px}'}}]);