!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}([function(t,e,r){var n=r(1);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(3)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){(t.exports=r(2)(!1)).push([t.i,".f-form-item{\r\n    padding:6px 0;\r\n}\r\n.form-item_label{\r\n    margin-right: 6px;\r\n    font-size: 14px;\r\n    padding-left:12px;\r\n    position: relative;\r\n}\r\n.form-item_label_required{\r\n    position: absolute;\r\n    top:25%;\r\n    left: 0;\r\n    color: red;\r\n    vertical-align: middle;\r\n    line-height: 1em;\r\n}",""])},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(s=n,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),i=n.sources.map(function(t){return"/*# sourceURL=".concat(n.sourceRoot).concat(t," */")});return[r].concat(i).concat([o]).join("\n")}var s,a,l;return[r].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(r,"}"):r}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(var s=0;s<t.length;s++){var a=t[s];null!=a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="(".concat(a[2],") and (").concat(r,")")),e.push(a))}},e}},function(t,e,r){var n,o,i={},s=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),a=function(t){var e={};return function(t,r){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),l=null,u=0,f=[],c=r(4);function p(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=i[n.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](n.parts[s]);for(;s<n.parts.length;s++)o.parts.push(g(n.parts[s],e))}else{var a=[];for(s=0;s<n.parts.length;s++)a.push(g(n.parts[s],e));i[n.id]={id:n.id,refs:1,parts:a}}}}function d(t,e){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};n[s]?n[s].parts.push(a):r.push(n[s]={id:s,parts:[a]})}return r}function h(t,e){var r=a(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=f[f.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),f.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertAt.before,r);r.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return r.nc}();n&&(t.attrs.nonce=n)}return b(e,t.attrs),h(t,e),e}function b(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function g(t,e){var r,n,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var s=u++;r=l||(l=m(e)),n=x.bind(null,r,s,!1),o=x.bind(null,r,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),h(t,e),e}(e),n=function(t,e,r){var n=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(n=c(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,r,e),o=function(){v(r),r.href&&URL.revokeObjectURL(r.href)}):(r=m(e),n=function(t,e){var r=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){v(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=d(t,e);return p(r,e),function(t){for(var n=[],o=0;o<r.length;o++){var s=r[o];(a=i[s.id]).refs--,n.push(a)}t&&p(d(t,e),e);for(o=0;o<n.length;o++){var a;if(0===(a=n[o]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete i[a.id]}}}};var y,_=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function x(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=_(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,r){"use strict";r.r(e);var n=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"f-form"},[this._t("default")],2)};n._withStripped=!0;var o={methods:{dispatch(t,e,r){for(var n=this.$parent||this.$root,o=n.$options.name;n&&(!o||o!==t);)(n=n.$parent)&&(o=n.$options.name);n&&n.$emit.apply(n,[e].concat(r))},broadcast(t,e,r){(function t(e,r,n){this.$children.forEach(o=>{var i=o.$options.name;e===i?o.$emit.apply(o,[r].concat(n)):t.apply(o,[e,r].concat(n))})}).call(this,t,e,r)}}};function i(t,e,r,n,o,i,s,a){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=l):o&&(l=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(u.functional){u._injectStyles=l;var f=u.render;u.render=function(t,e){return l.call(e),f(t,e)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,l):[l]}return{exports:t,options:u}}var s=i({name:"fForm",data:()=>({childName:"fFormItem"}),props:{rules:{type:Array,default:()=>[]}},mixins:[o],mounted(){if(this.rules.length){let t=this.rules;t.forEach(t=>{t[1].error=!1}),this.broadcast(this.childName,"reciveRule",t),this.$on("inputvaliderror",t=>{let e=this.findChild(t);this.rules[e][1].error=!0}),this.$on("inputvalidnoerror",t=>{let e=this.findChild(t);this.rules[e][1].error=!1})}},methods:{findChild(t){let e;return this.rules.forEach((r,n)=>{r[0]===t&&(e=n)}),e},validateForm(t){let e=!1;for(let t=0;t<this.rules.length;t++)if(this.rules[t][1].error){e=!0;break}t&&t(e,this.rules)}}},n,[],!1,null,null,null);s.options.__file="src/f-form.vue";var a=s.exports,l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"f-form-item",attrs:{name:t.label}},[r("span",{staticClass:"form-item_label"},[t.rule.required?r("b",{staticClass:"form-item_label_required"},[t._v("*")]):t._e(),t._v(t._s(t.label))]),t._v(" "),r("span",{staticClass:"fom-item"},[t._t("default")],2),t._v(" "),r("br"),t._v(" "),t.rule.error?r("span",{staticClass:"form-item_error"},[t._v(t._s(t.rule.errorMsg))]):t._e()])};l._withStripped=!0;var u=i({name:"fFormItem",data:()=>({rule:{pattern:void 0,required:!1,errorMsg:"请输入值",formatter:void 0,trigger:"change",error:!1}}),props:{label:String,value:String},mixins:[o],created(){this.$on("reciveRule",(...t)=>{t.forEach(e=>{e[0]===this.value&&(this.rule=Object.assign(this.rule,e[1]),t[1]=this.rule,this.broadcast("fInput","recive-from-item",[this.rule,t[2]||""]))})}),this.$on("inputvaliderror",()=>{this.rule.error=!0,this.dispatch("fForm","inputvaliderror",this.value)}),this.$on("inputvalidnoerror",()=>{this.rule.error=!1,this.dispatch("fForm","inputvalidnoerror",this.value)})},methods:{}},l,[],!1,null,null,null);u.options.__file="src/f-form-item.vue";var f=u.exports,c=function(){var t=this.$createElement;return(this._self._c||t)("input",{staticClass:"f-input",attrs:{AUTOCOMPLETE:"off",type:this.type},domProps:{value:this.rule.value},on:this._d({input:this.handleInput},[this.trigger,this.handleTrigger])})};c._withStripped=!0;var p=i({name:"fInput",data:()=>({rule:{pattern:void 0,required:!1,errorMsg:"请输入值",formatter:void 0,trigger:"change",error:!1},value:null}),props:{type:{type:String,default:"text"}},computed:{trigger:function(){return this.rule.trigger||"change"}},mixins:[o],created(){this.$on("recive-from-item",(...t)=>{this.rule=Object.assign(this.rule,t[0]),this.value=t[1]})},methods:{handleTrigger(t){this.rule.required&&this.rule.pattern&&(this.rule.pattern.test(t.target.value)?this.dispatch("fFormItem","inputvalidnoerror"):this.dispatch("fFormItem","inputvaliderror"))},handleInput(){this.formatter}}},c,[],!1,null,null,null);p.options.__file="src/f-input.vue";var d=p.exports;r(0);r.d(e,"formValidator",function(){return h});const h={fForm:a,fFormItem:f,fInput:d};h.install=function(t,e){for(const e in h)t.component(e,h[e])}}])});