(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"./packages/crayons-core/dist/esm-es5/fw-format-number.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"fw_format_number",(function(){return FormatNumber}));var _index_25bc21e4_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/crayons-core/dist/esm-es5/index-25bc21e4.js"),FormatNumber=function(){function i(i){Object(_index_25bc21e4_js__WEBPACK_IMPORTED_MODULE_0__.l)(this,i),this.value=0,this.type="decimal",this.useGrouping=!0,this.currencyDisplay="symbol",this.currencySign="standard",this.minimumIntegerDigits=1,this.minimumSignificantDigits=1,this.maximumSignificantDigits=21}return i.prototype.render=function(){return isNaN(this.value)?"":new Intl.NumberFormat(this.locale,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,currencySign:this.currencySign,useGrouping:this.useGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits}).format(this.value)},i}()}}]);