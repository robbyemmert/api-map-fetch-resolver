!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ApiMap=t():e.ApiMap=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i={baseUrl:"/",defaultHeaders:[]},u={method:"GET",headers:[]},o=(t.Api=function(){function e(t,r){if(n(this,e),"function"!=typeof r)throw new Error("Resolver must be a function");this._defaults=Object.assign({},t),this._resolver=r}return r(e,[{key:"resolve",value:function(e,t,n,r){return this._resolver(e,t,n,r)}},{key:"map",value:function(e){return new o(e,this)}},{key:"defaults",get:function(){return Object.assign({},i,this._defaults)}}]),e}(),t.ApiEndpoint=function(){function e(t,r){n(this,e),this._checkDefaults(t),this._defaults=Object.assign({},t),this._api=r}return r(e,[{key:"_checkDefaults",value:function(e){if(!e.url)throw new Error("API endpoint must specify a URL")}},{key:"request",value:function(e,t){var n="function"==typeof this._defaults.url?this._defaults.url(e):this._defaults.url,r=Object.assign({},u,this.api.defaults,this.defaults,t);return this.api.resolve(this.api.defaults.baseUrl+n,r.method,e,r)}},{key:"defaults",get:function(){return this._defaults}},{key:"api",get:function(){return this._api}}]),e}())}])});
//# sourceMappingURL=api-map.js.map