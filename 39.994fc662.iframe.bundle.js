(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"./packages/crayons-core/dist/esm-es5/fw-avatar.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"fw_avatar",(function(){return Avatar}));__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js");var _index_25bc21e4_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/crayons-core/dist/esm-es5/index-25bc21e4.js"),Avatar=function(){function a(a){Object(_index_25bc21e4_js__WEBPACK_IMPORTED_MODULE_4__.l)(this,a),this.shape="circle",this.name="",this.size="large",this.mode="dark"}return a.prototype.getInitials=function(){var a="";if(this.initials)a=this.initials;else if(this.name.trim().length>0){var t=this.name.trim().split(" ");1===t.length?a=t.shift().charAt(0):t.length>1&&(a=t.shift().charAt(0)+t.pop().charAt(0))}return a},a.prototype.render=function(){return Object(_index_25bc21e4_js__WEBPACK_IMPORTED_MODULE_4__.i)("div",{class:"avatar \n     avatar--"+this.shape+"\n     avatar--"+this.size+"\n     avatar--"+this.mode+"\n     ","aria-label":this.alt},this.image?Object(_index_25bc21e4_js__WEBPACK_IMPORTED_MODULE_4__.i)("img",{part:"image",class:"avatar__image",src:this.image,alt:this.alt}):Object(_index_25bc21e4_js__WEBPACK_IMPORTED_MODULE_4__.i)("div",{part:"initials",class:"avatar__initials"},this.getInitials()))},a}();Avatar.style=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block;--size:3rem}.avatar{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative;font-size:calc(var(--size) * 0.5);font-weight:400;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle}.avatar__initials{line-height:1;text-transform:uppercase}.avatar__image{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.avatar--dark{background-color:#527fa5;color:#fff}.avatar--light{background-color:#dff0ff;color:#000}.avatar--circle{border-radius:50%}.avatar--rounded{border-radius:4px}.avatar--square{border-radius:0}.avatar--xxlarge{width:96px;height:96px}.avatar--xlarge{width:72px;height:72px}.avatar--large{width:56px;height:56px}.avatar--medium{width:40px;height:40px}.avatar--small{width:32px;height:32px}.avatar--xsmall{width:24px;height:24px}.avatar--xxsmall{width:20px;height:20px}'}}]);