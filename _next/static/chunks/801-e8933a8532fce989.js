(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[801],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var u in r)n.call(r,u)&&r[u]&&e.push(u);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},6086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},638:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}t.default=function(e,t){var r=i.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};a=e,c=Promise,(null!=c&&"undefined"!==typeof Symbol&&c[Symbol.hasInstance]?c[Symbol.hasInstance](a):a instanceof c)?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=o({},n,e));var a,c;var l=n=o({},n,t);if(l.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(l.suspense)return r(l);n.loadableGenerated&&delete(n=o({},n,n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,u(r,n);delete n.ssr}return r(n)};a(r(1720));var i=a(r(4302));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((n=r(1720))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},4302:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=(a=r(1720))&&a.__esModule?a:{default:a},c=r(7161),l=r(6319);var s=[],f=[],d=!1;function p(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var h=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,r,o;return t=e,(r=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;if(t.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var n=this;this._delay=setTimeout((function(){n._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var o=this;this._timeout=setTimeout((function(){o._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&n(t.prototype,r),o&&n(t,o),e}();function v(e){return function(e,t){var r=function(){if(!o){var t=new h(e,n);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=u.default.lazy(n.loader));var o=null;if(!d&&"function"===typeof n.webpack&&!n.suspense){var a=n.webpack();f.push((function(e){var t=!0,n=!1,o=void 0;try{for(var i,u=a[Symbol.iterator]();!(t=(i=u.next()).done);t=!0){var c=i.value;if(-1!==e.indexOf(c))return r()}}catch(l){n=!0,o=l}finally{try{t||null==u.return||u.return()}finally{if(n)throw o}}}))}var s=n.suspense?function(e,t){return u.default.createElement(n.lazy,i({},e,{ref:t}))}:function(e,t){r();var i=u.default.useContext(l.LoadableContext),a=c.useSubscription(o);return u.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),i&&Array.isArray(n.modules)&&n.modules.forEach((function(e){i(e)})),u.default.useMemo((function(){return a.loading||a.error?u.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:o.retry}):a.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return s.preload=function(){return!n.suspense&&r()},s.displayName="LoadableComponent",u.default.forwardRef(s)}(p,e)}function y(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return y(e,t)}))}v.preloadAll=function(){return new Promise((function(e,t){y(s).then(e,t)}))},v.preloadReady=function(e){var t=void 0===e?[]:e;return new Promise((function(e){var r=function(){return d=!0,e()};y(f,t).then(r,r)}))},window.__NEXT_PRELOADREADY=v.preloadReady;var w=v;t.default=w},5152:function(e,t,r){e.exports=r(638)},1032:function(e,t,r){e.exports=r(6584)},6339:function(e,t,r){"use strict";var n=(0,r(7267).Z)({color:"#7f7f7f",networkName:"email",path:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"});t.Z=n},8137:function(e,t,r){"use strict";var n=r(6459);var o=(0,r(9075).Z)("email",(function(e,t){var r=t.subject,o=t.body,i=t.separator;return"mailto:"+(0,n.Z)({subject:r,body:o?o+i+e:e})}),(function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(e,t){window.location.href=t}});t.Z=o},1020:function(e,t,r){"use strict";var n=(0,r(7267).Z)({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});t.Z=n},6573:function(e,t,r){"use strict";var n=r(5456),o=r(6459);var i=(0,r(9075).Z)("facebook",(function(e,t){var r=t.quote,i=t.hashtag;return(0,n.Z)(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+(0,o.Z)({u:e,quote:r,hashtag:i})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400});t.Z=i},7332:function(e,t,r){"use strict";var n=(0,r(7267).Z)({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});t.Z=n},3597:function(e,t,r){"use strict";var n=r(5456),o=r(6459);var i=(0,r(9075).Z)("linkedin",(function(e,t){var r=t.title,i=t.summary,a=t.source;return(0,n.Z)(e,"linkedin.url"),"https://linkedin.com/shareArticle"+(0,o.Z)({url:e,mini:"true",title:r,summary:i,source:a})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600});t.Z=i},431:function(e,t,r){"use strict";var n=(0,r(7267).Z)({color:"#ff4500",networkName:"reddit",path:"m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z"});t.Z=n},5341:function(e,t,r){"use strict";var n=r(5456),o=r(6459);var i=(0,r(9075).Z)("reddit",(function(e,t){var r=t.title;return(0,n.Z)(e,"reddit.url"),"https://www.reddit.com/submit"+(0,o.Z)({url:e,title:r})}),(function(e){return{title:e.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"});t.Z=i},4276:function(e,t,r){"use strict";var n=(0,r(7267).Z)({color:"#37aee2",networkName:"telegram",path:"m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"});t.Z=n},8168:function(e,t,r){"use strict";var n=r(5456),o=r(6459);var i=(0,r(9075).Z)("telegram",(function(e,t){var r=t.title;return(0,n.Z)(e,"telegram.url"),"https://telegram.me/share/url"+(0,o.Z)({url:e,text:r})}),(function(e){return{title:e.title}}),{windowWidth:550,windowHeight:400});t.Z=i},7385:function(e,t,r){"use strict";var n=(0,r(7267).Z)({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});t.Z=n},6616:function(e,t,r){"use strict";var n=r(5456),o=r(6459);var i=(0,r(9075).Z)("twitter",(function(e,t){var r=t.title,i=t.via,a=t.hashtags,u=void 0===a?[]:a,c=t.related,l=void 0===c?[]:c;return(0,n.Z)(e,"twitter.url"),(0,n.Z)(Array.isArray(u),"twitter.hashtags is not an array"),(0,n.Z)(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+(0,o.Z)({url:e,text:r,via:i,hashtags:u.length>0?u.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400});t.Z=i},9275:function(e,t,r){"use strict";var n=(0,r(7267).Z)({color:"#25D366",networkName:"whatsapp",path:"m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"});t.Z=n},2834:function(e,t,r){"use strict";var n=r(5456),o=r(6459);var i=(0,r(9075).Z)("whatsapp",(function(e,t){var r=t.title,i=t.separator;return(0,n.Z)(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+(0,o.Z)({text:r?r+i+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:550,windowHeight:400});t.Z=i},7267:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(1720),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function a(e){var t=function(t){var r=t.bgStyle,a=t.borderRadius,u=t.iconFillColor,c=t.round,l=t.size,s=i(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return n.default.createElement("svg",o({viewBox:"0 0 64 64",width:l,height:l},s),c?n.default.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:r}):n.default.createElement("rect",{width:"64",height:"64",rx:a,ry:a,fill:e.color,style:r}),n.default.createElement("path",{d:e.path,fill:u}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}},9075:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(1720),o=r(4184),i=r.n(o),a=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(t){i(t)}}function u(e){try{c(n.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}c((n=n.apply(e,t||[])).next())}))},l=function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(u){i=[6,u],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},f=function(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then},d=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},p=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function h(e,t,r){var n=t.height,o=t.width,i=s(t,["height","width"]),a=u({height:n,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),c=window.open(e,"",Object.keys(a).map((function(e){return e+"="+a[e]})).join(", "));if(r)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),r(c))}catch(e){console.error(e)}}),1e3);return c}var v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r=t.props,n=r.onShareWindowClose,o=r.windowHeight,i=void 0===o?400:o,a=r.windowPosition,c=void 0===a?"windowCenter":a,l=r.windowWidth,s=void 0===l?550:l;h(e,u({height:i,width:s},"windowCenter"===c?d(s,i):p(s,i)),n)},t.handleClick=function(e){return c(t,void 0,void 0,(function(){var t,r,n,o,i,a,u,c,s,d;return l(this,(function(l){switch(l.label){case 0:return t=this.props,r=t.beforeOnClick,n=t.disabled,o=t.networkLink,i=t.onClick,a=t.url,u=t.openShareDialogOnClick,c=t.opts,s=o(a,c),n?[2]:(e.preventDefault(),r?(d=r(),f(d)?[4,d]:[3,2]):[3,2]);case 1:l.sent(),l.label=2;case 2:return u&&this.openShareDialog(s),i&&i(e,s),[2]}}))}))},t}return a(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,o=e.disabled,a=e.disabledStyle,c=e.forwardedRef,l=(e.networkLink,e.networkName),f=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),d=e.style,p=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,s(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),h=i()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!o,disabled:!!o},r),v=u(u(f?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},d),o&&a);return n.default.createElement("button",u({},p,{"aria-label":p["aria-label"]||l,className:h,onClick:this.handleClick,ref:c,style:v}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(n.Component),y=function(){return(y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var w=function(e,t,r,o){function i(i,a){var u=r(i),c=y({},i);return Object.keys(u).forEach((function(e){delete c[e]})),n.default.createElement(v,y({},o,c,{forwardedRef:a,networkName:e,networkLink:t,opts:r(i)}))}return i.displayName="ShareButton-"+e,(0,n.forwardRef)(i)}},5456:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=function(e){function t(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return n(t,e),t}(Error);function i(e,t){if(!e)throw new o(t)}},6459:function(e,t,r){"use strict";function n(e){var t=Object.entries(e).filter((function(e){var t=e[1];return void 0!==t&&null!==t})).map((function(e){var t=e[0],r=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(r))}));return t.length>0?"?"+t.join("&"):""}r.d(t,{Z:function(){return n}})},3288:function(e,t,r){"use strict";r.d(t,{ZP:function(){return B}});var n=r(1720),o=Object.prototype.hasOwnProperty;function i(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function u(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}c((n=n.apply(e,t||[])).next())}))}function a(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var u={}[0],c=function(e){return e===u},l=function(e){return"function"==typeof e},s=function(){},f=function(e,t){return Object.assign({},e,t)},d=!0,p="undefined"!=typeof window,h="undefined"!=typeof document,v=p&&window.addEventListener||s,y=h&&document.addEventListener||s,w={isOnline:function(){return d},isVisible:function(){var e=h&&document.visibilityState;return!!c(e)||"hidden"!==e}},b={initFocus:function(e){y("visibilitychange",e),v("focus",e)},initReconnect:function(e){v("online",(function(){d=!0,e()})),v("offline",(function(){d=!1}))}},g="undefined"==typeof window||"Deno"in window,m=g?null:window.requestAnimationFrame,O=m?function(e){return m(e)}:function(e){return setTimeout(e,1)},k=g?n.useEffect:n.useLayoutEffect,_="undefined"!=typeof navigator&&navigator.connection,j=!g&&_&&(["slow-2g","2g"].includes(_.effectiveType)||_.saveData),S=new WeakMap,C=0;function P(e){if(l(e))try{e=e()}catch(t){e=""}var t;return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",r=0;r<e.length;++r){var n=e[r],o=u;null===n||"object"!=typeof n&&!l(n)?o=JSON.stringify(n):S.has(n)?o=S.get(n):(o=C,S.set(n,C++)),t+="$"+o}return t}(e)):t=[e=String(e||"")],[e,t,e?"$err$"+e:"",e?"$req$"+e:""]}var Z=new WeakMap,x=function(e,t,r,n,o,i){void 0===i&&(i=!1);var a=Z.get(e),u=a[0],c=a[1],l=u[t],s=c[t];if(s)for(var f=0;f<s.length;++f)s[f](r,n,o);return i&&l&&l[0]?l[0](2).then((function(){return e.get(t)})):e.get(t)},E=0,R=function(){return++E},D=function(e,t,r,n){return void 0===n&&(n=!0),i(void 0,void 0,void 0,(function(){var o,i,s,f,d,p,h,v,y,w,b;return a(this,(function(a){switch(a.label){case 0:if(o=P(t),i=o[0],s=o[2],!i)return[2];if(f=Z.get(e),d=f[2],p=f[3],c(r))return[2,x(e,i,e.get(i),e.get(s),u,n)];if(y=d[i]=R(),p[i]=0,l(r))try{r=r(e.get(i))}catch(e){r=u,v=e}if(!r||!l(r.then))return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,r];case 2:return h=a.sent(),[3,4];case 3:return w=a.sent(),v=w,[3,4];case 4:if(y!==d[i]){if(v)throw v;return[2,h]}return[3,6];case 5:h=r,a.label=6;case 6:return c(h)||e.set(i,h),e.set(s,v),p[i]=R(),[4,x(e,i,h,v,u,n)];case 7:if(b=a.sent(),v)throw v;return[2,b]}}))}))};function V(e,t){for(var r in e)e[r][0]&&e[r][0](t)}function T(e,t){if(!Z.has(e)){var r=f(b,t),n={},o=D.bind(u,e);return Z.set(e,[n,{},{},{},{},{},o]),g||(r.initFocus(V.bind(u,n,0)),r.initReconnect(V.bind(u,n,1))),[e,o]}}var M=T(new Map),z=M[0],W=M[1],A=f({onLoadingSlow:s,onSuccess:s,onError:s,onErrorRetry:function(e,t,r,n,o){if(w.isVisible()){var i=r.errorRetryCount,a=o.retryCount,u=~~((Math.random()+.5)*(1<<(a<8?a:8)))*r.errorRetryInterval;!c(i)&&a>i||setTimeout(n,u,o)}},revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:j?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:j?5e3:3e3,compare:function e(t,r){var n,i;if(t===r)return!0;if(t&&r&&(n=t.constructor)===r.constructor){if(n===Date)return t.getTime()===r.getTime();if(n===RegExp)return t.toString()===r.toString();if(n===Array){if((i=t.length)===r.length)for(;i--&&e(t[i],r[i]););return-1===i}if(!n||"object"===typeof t){for(n in i=0,t){if(o.call(t,n)&&++i&&!o.call(r,n))return!1;if(!(n in r)||!e(t[n],r[n]))return!1}return Object.keys(r).length===i}}return t!==t&&r!==r},isPaused:function(){return!1},cache:z,mutate:W,fallback:{}},w);function L(e,t){var r=f(e,t);if(!t)return r;var n=e.use,o=e.fallback,i=t.use,a=t.fallback;return n&&i&&(r.use=n.concat(i)),o&&a&&(r.fallback=f(o,a)),r}var I=(0,n.createContext)({});function N(e){return l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]}var H,F=function(e,t,r){var n=t[e]||(t[e]=[]);return n.push(r),function(){var e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}},q={dedupe:!0},B=(Object.defineProperty((function(e){var t=e.children,r=e.value,o=L((0,n.useContext)(I),r),i=r&&r.provider,a=(0,n.useState)((function(){return i?T(i(o.cache||z),r):u}))[0];return a&&(o.cache=a[0],o.mutate=a[1]),(0,n.createElement)(I.Provider,{value:o},t)}),"default",{value:A}),H=function(e,t,r){var o=r.cache,l=r.compare,s=r.fallbackData,d=r.suspense,p=r.revalidateOnMount,h=r.refreshInterval,v=r.refreshWhenHidden,y=r.refreshWhenOffline,w=Z.get(o),b=w[0],m=w[1],_=w[2],j=w[3],S=w[4],C=w[5],E=P(e),V=E[0],T=E[1],M=E[2],z=E[3],W=(0,n.useRef)(!1),A=(0,n.useRef)(!1),L=(0,n.useRef)(V),I=(0,n.useRef)(r),N=function(){return I.current},H=o.get(V),B=c(s)?r.fallback[V]:s,G=c(H)?B:H,$=o.get(M);if(d&&(!V||!t))throw new Error("useSWR requires either key or fetcher with suspense mode");var X=function(){return c(p)?d?!W.current&&!c(G):c(G)||r.revalidateIfStale:p},U=!(!V||!t)&&(!!o.get(z)||!W.current&&X()),Y=function(e,t){var r=(0,n.useState)({})[1],o=(0,n.useRef)(e),i=(0,n.useRef)({data:!1,error:!1,isValidating:!1}),a=(0,n.useCallback)((function(e){var n=!1,a=o.current;for(var u in e){var c=u;a[c]!==e[c]&&(a[c]=e[c],i.current[c]&&(n=!0))}n&&!t.current&&r({})}),[]);return k((function(){o.current=e})),[o,i.current,a]}({data:G,error:$,isValidating:U},A),J=Y[0],K=Y[1],Q=Y[2],ee=(0,n.useCallback)((function(e){return i(void 0,void 0,void 0,(function(){var n,i,s,f,d,p,h,v,y;return a(this,(function(a){switch(a.label){case 0:if(!V||!t||A.current||N().isPaused())return[2,!1];s=!0,f=e||{},d=!c(S[V])&&f.dedupe,p=function(){return!A.current&&V===L.current&&W.current},h=function(){delete S[V],delete C[V]},a.label=1;case 1:return a.trys.push([1,6,,7]),o.set(z,!0),Q({isValidating:!0}),d||x(o,V,J.current.data,J.current.error,!0),d?(i=C[V],[4,S[V]]):[3,3];case 2:return n=a.sent(),[3,5];case 3:return r.loadingTimeout&&!o.get(V)&&setTimeout((function(){s&&p()&&N().onLoadingSlow(V,r)}),r.loadingTimeout),C[V]=i=R(),[4,S[V]=t.apply(t,T)];case 4:n=a.sent(),setTimeout((function(){C[V]===i&&h()}),r.dedupingInterval),p()&&N().onSuccess(n,V,r),a.label=5;case 5:return C[V]!==i?[2,!1]:(o.set(M,u),o.set(z,!1),v={isValidating:!1},!c(_[V])&&(i<=_[V]||i<=j[V]||0===j[V])?(Q(v),[2,!1]):(c(J.current.error)||(v.error=u),l(J.current.data,n)||(v.data=n),l(o.get(V),n)||o.set(V,n),Q(v),d||x(o,V,n,v.error,!1),[3,7]));case 6:return y=a.sent(),h(),o.set(z,!1),N().isPaused()?(Q({isValidating:!1}),[2,!1]):(o.set(M,y),J.current.error!==y&&(Q({isValidating:!1,error:y}),d||x(o,V,u,y,!1)),p()&&(N().onError(y,V,r),r.shouldRetryOnError&&N().onErrorRetry(y,V,r,ee,{retryCount:(f.retryCount||0)+1,dedupe:!0})),[3,7]);case 7:return s=!1,[2,!0]}}))}))}),[V]),te=(0,n.useCallback)((function(e,t){return D(o,L.current,e,t)}),[]);if(k((function(){I.current=r})),k((function(){if(V){var e=W.current,t=ee.bind(u,q),r=function(){return N().isVisible()&&N().isOnline()},n=0,o=F(V,m,(function(e,t,r){Q(f({error:t,isValidating:r},l(e,J.current.data)?null:{data:e}))})),i=F(V,b,(function(e){if(0===e){var o=Date.now();N().revalidateOnFocus&&o>n&&r()&&(n=o+N().focusThrottleInterval,t())}else if(1===e)N().revalidateOnReconnect&&r()&&t();else if(2===e)return ee()}));return A.current=!1,L.current=V,e&&Q({data:G,error:$,isValidating:U}),X()&&(c(G)||g?t():O(t)),W.current=!0,function(){A.current=!0,o(),i()}}}),[V,ee]),k((function(){var e;function t(){h&&-1!==e&&(e=setTimeout(r,h))}function r(){J.current.error||!v&&!N().isVisible()||!y&&!N().isOnline()?t():ee(q).then((function(){return t()}))}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[h,v,y,ee]),(0,n.useDebugValue)(G),d&&c(G))throw c($)?ee(q):$;return{mutate:te,get data(){return K.data=!0,G},get error(){return K.error=!0,$},get isValidating(){return K.isValidating=!0,U}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=N(e),o=r[0],i=r[1],a=r[2],u=f(A,(0,n.useContext)(I)),c=L(u,a),l=H,s=c.use;if(s)for(var d=s.length;d-- >0;)l=s[d](l);return l(o,i||c.fetcher,c)})},3194:function(e,t,r){e.exports=r(8773)},8773:function(e,t,r){"use strict";t.getMDXComponent=function(e,t){return c(e,t).default};var n=u(r(1720)),o=u(r(1032)),i=u(r(1720));function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function u(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}function c(e,t){const r={React:n,ReactDOM:i,_jsx_runtime:o,...t};return new Function(...Object.keys(r),e)(...Object.values(r))}}}]);
//# sourceMappingURL=801-e8933a8532fce989.js.map