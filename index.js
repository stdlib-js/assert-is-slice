// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,i,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,s=parseInt(i,10),!isFinite(s)){if(!t(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(i=(-s).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=s.toString(r),s||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function c(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,v,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):p.call(i)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_(i):_(i)+e}var S=String.fromCharCode,k=isNaN,x=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,i,a,o,l,p,u,f;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,u=0;u<e.length;u++)if(c(i=e[u]))l+=i;else{if(r=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,k(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=E(i.arg,i.width,i.padRight)),l+=i.arg||"",p+=1}return l}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,t,i,n;for(t=[],n=0,i=j.exec(e);i;)(r=e.slice(n,j.lastIndex-i[0].length)).length&&t.push(r),t.push(I(i)),n=j.lastIndex,i=j.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function F(e){return"string"==typeof e}function A(e){var r,t;if(!F(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[$(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var O,C=Object.prototype,R=C.toString,P=C.__defineGetter__,Z=C.__defineSetter__,N=C.__lookupGetter__,G=C.__lookupSetter__;O=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(N.call(e,r)||G.call(e,r)?(i=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&Z&&Z.call(e,r,t.set),e};var W=O;function L(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e,r,t){W(e,r,{configurable:!1,enumerable:!1,get:t})}function U(e){return"number"==typeof e}function M(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var z=M();function B(){return z&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString,J=Object.prototype.hasOwnProperty;function q(e,r){return null!=e&&J.call(e,r)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"",K=B()?function(e){var r,t,i;if(null==e)return Y.call(e);t=e[H],r=q(e,H);try{e[H]=void 0}catch(r){return Y.call(e)}return i=Y.call(e),r?e[H]=t:delete e[H],i}:function(e){return Y.call(e)},Q=Number,ee=Q.prototype.toString,re=B();function te(e){return"object"==typeof e&&(e instanceof Q||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Number]"===K(e)))}function ie(e){return U(e)||te(e)}L(ie,"isPrimitive",U),L(ie,"isObject",te);var ne=Number.POSITIVE_INFINITY,ae=Q.NEGATIVE_INFINITY,oe=Math.floor;function se(e){return e<ne&&e>ae&&oe(r=e)===r;var r}function ce(e){return U(e)&&se(e)}function le(e){return te(e)&&se(e.valueOf())}function pe(e){return ce(e)||le(e)}function ue(e){return ce(e)||function(e){return null===e}(e)||function(e){return void 0===e}(e)}function fe(){var e,r,t,i;if(0===(e=arguments.length)?(r=null,t=null,i=null):1===e?(r=null,t=arguments[0],i=null):2===e?(r=arguments[0],t=arguments[1],i=null):(r=arguments[0],t=arguments[1],i=arguments[2]),!(this instanceof fe))return new fe(r,t,i);if(!ue(r))throw new TypeError(A("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!ue(t))throw new TypeError(A("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!ue(i))throw new TypeError(A("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",i));if(0===i)throw new RangeError(A("invalid argument. Third argument cannot be zero. Value: `%s`.",i));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===i?null:i,this}L(pe,"isPrimitive",ce),L(pe,"isObject",le),L(fe,"name","Slice"),X(fe.prototype,"start",(function(){return this._start})),X(fe.prototype,"stop",(function(){return this._stop})),X(fe.prototype,"step",(function(){return this._step})),L(fe.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),L(fe.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));var ge=M(),de=Object.prototype.toString,he="function"==typeof Symbol?Symbol:void 0,we="function"==typeof he?he.toStringTag:"",be=ge&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i;if(null==e)return de.call(e);t=e[we],r=q(e,we);try{e[we]=void 0}catch(r){return de.call(e)}return i=de.call(e),r?e[we]=t:delete e[we],i}:function(e){return de.call(e)},ve="function"==typeof Object.defineProperty?Object.defineProperty:null,ye=Object.defineProperty;function me(e){return"number"==typeof e}function _e(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Ee(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+_e(n):_e(n)+e,i&&(e="-"+e)),e}var Se=String.prototype.toLowerCase,ke=String.prototype.toUpperCase;function xe(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!me(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Ee(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Ee(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ke.call(e.specifier)?ke.call(t):Se.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ve(e){return"string"==typeof e}var Te=Math.abs,je=String.prototype.toLowerCase,Ie=String.prototype.toUpperCase,$e=String.prototype.replace,Fe=/e\+(\d)$/,Ae=/e-(\d)$/,Oe=/^(\d+)$/,Ce=/^(\d+)e/,Re=/\.0$/,Pe=/\.0*e/,Ze=/(\..*[^0])0*e/;function Ne(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!me(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Te(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=$e.call(t,Ze,"$1e"),t=$e.call(t,Pe,"e"),t=$e.call(t,Re,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=$e.call(t,Fe,"e+0$1"),t=$e.call(t,Ae,"e-0$1"),e.alternate&&(t=$e.call(t,Oe,"$1."),t=$e.call(t,Ce,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Ie.call(e.specifier)?Ie.call(t):je.call(t)}function Ge(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function We(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Ge(i):Ge(i)+e}var Le=String.fromCharCode,Xe=isNaN,Ue=Array.isArray;function Me(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ze(e){var r,t,i,n,a,o,s,c,l;if(!Ue(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Ve(i=e[c]))o+=i;else{if(r=void 0!==i.precision,!(i=Me(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,Xe(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,Xe(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=xe(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Xe(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Xe(a)?String(i.arg):Le(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Ne(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Ee(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=We(i.arg,i.width,i.padRight)),o+=i.arg||"",s+=1}return o}var Be=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ye(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Je(e){var r,t,i,n;for(t=[],n=0,i=Be.exec(e);i;)(r=e.slice(n,Be.lastIndex-i[0].length)).length&&t.push(r),t.push(Ye(i)),n=Be.lastIndex,i=Be.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function qe(e){return"string"==typeof e}function De(e){var r,t;if(!qe(e))throw new TypeError(De("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Je(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return ze.apply(null,r)}var He,Ke=Object.prototype,Qe=Ke.toString,er=Ke.__defineGetter__,rr=Ke.__defineSetter__,tr=Ke.__lookupGetter__,ir=Ke.__lookupSetter__;function nr(){return/^\s*function\s*([^(]*)/i}He=function(){try{return ve({},"x",{}),!0}catch(e){return!1}}()?ye:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Qe.call(e))throw new TypeError(De("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Qe.call(t))throw new TypeError(De("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(tr.call(e,r)||ir.call(e,r)?(i=e.__proto__,e.__proto__=Ke,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&er&&er.call(e,r,t.get),o&&rr&&rr.call(e,r,t.set),e};var ar=/^\s*function\s*([^(]*)/i;He(nr,"REGEXP",{configurable:!1,enumerable:!1,writable:!1,value:ar});var or="function"==typeof Object.defineProperty?Object.defineProperty:null,sr=Object.defineProperty;function cr(e){return"number"==typeof e}function lr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function pr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+lr(n):lr(n)+e,i&&(e="-"+e)),e}var ur=String.prototype.toLowerCase,fr=String.prototype.toUpperCase;function gr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!cr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=pr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=pr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===fr.call(e.specifier)?fr.call(t):ur.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function dr(e){return"string"==typeof e}var hr=Math.abs,wr=String.prototype.toLowerCase,br=String.prototype.toUpperCase,vr=String.prototype.replace,yr=/e\+(\d)$/,mr=/e-(\d)$/,_r=/^(\d+)$/,Er=/^(\d+)e/,Sr=/\.0$/,kr=/\.0*e/,xr=/(\..*[^0])0*e/;function Vr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!cr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":hr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=vr.call(t,xr,"$1e"),t=vr.call(t,kr,"e"),t=vr.call(t,Sr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=vr.call(t,yr,"e+0$1"),t=vr.call(t,mr,"e-0$1"),e.alternate&&(t=vr.call(t,_r,"$1."),t=vr.call(t,Er,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===br.call(e.specifier)?br.call(t):wr.call(t)}function Tr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function jr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Tr(i):Tr(i)+e}var Ir=String.fromCharCode,$r=isNaN,Fr=Array.isArray;function Ar(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Or(e){var r,t,i,n,a,o,s,c,l;if(!Fr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(dr(i=e[c]))o+=i;else{if(r=void 0!==i.precision,!(i=Ar(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,$r(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,$r(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=gr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!$r(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=$r(a)?String(i.arg):Ir(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Vr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=pr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=jr(i.arg,i.width,i.padRight)),o+=i.arg||"",s+=1}return o}var Cr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Rr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Pr(e){var r,t,i,n;for(t=[],n=0,i=Cr.exec(e);i;)(r=e.slice(n,Cr.lastIndex-i[0].length)).length&&t.push(r),t.push(Rr(i)),n=Cr.lastIndex,i=Cr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Zr(e){return"string"==typeof e}function Nr(e){var r,t;if(!Zr(e))throw new TypeError(Nr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Pr(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Or.apply(null,r)}var Gr,Wr=Object.prototype,Lr=Wr.toString,Xr=Wr.__defineGetter__,Ur=Wr.__defineSetter__,Mr=Wr.__lookupGetter__,zr=Wr.__lookupSetter__;Gr=function(){try{return or({},"x",{}),!0}catch(e){return!1}}()?sr:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Lr.call(e))throw new TypeError(Nr("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Lr.call(t))throw new TypeError(Nr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Mr.call(e,r)||zr.call(e,r)?(i=e.__proto__,e.__proto__=Wr,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Xr&&Xr.call(e,r,t.get),o&&Ur&&Ur.call(e,r,t.set),e};var Br,Yr=Gr,Jr=M(),qr=Object.prototype.toString,Dr="function"==typeof Symbol?Symbol:void 0,Hr="function"==typeof Dr?Dr.toStringTag:"",Kr=Jr&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i;if(null==e)return qr.call(e);t=e[Hr],r=q(e,Hr);try{e[Hr]=void 0}catch(r){return qr.call(e)}return i=qr.call(e),r?e[Hr]=t:delete e[Hr],i}:function(e){return qr.call(e)};Br=Array.isArray?Array.isArray:function(e){return"[object Array]"===Kr(e)};var Qr=Br;function et(e){return"number"==typeof e}function rt(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function tt(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+rt(n):rt(n)+e,i&&(e="-"+e)),e}var it=String.prototype.toLowerCase,nt=String.prototype.toUpperCase;function at(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!et(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=tt(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=tt(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===nt.call(e.specifier)?nt.call(t):it.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ot(e){return"string"==typeof e}var st=Math.abs,ct=String.prototype.toLowerCase,lt=String.prototype.toUpperCase,pt=String.prototype.replace,ut=/e\+(\d)$/,ft=/e-(\d)$/,gt=/^(\d+)$/,dt=/^(\d+)e/,ht=/\.0$/,wt=/\.0*e/,bt=/(\..*[^0])0*e/;function vt(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!et(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":st(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=pt.call(t,bt,"$1e"),t=pt.call(t,wt,"e"),t=pt.call(t,ht,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=pt.call(t,ut,"e+0$1"),t=pt.call(t,ft,"e-0$1"),e.alternate&&(t=pt.call(t,gt,"$1."),t=pt.call(t,dt,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===lt.call(e.specifier)?lt.call(t):ct.call(t)}function yt(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function mt(e,r,t){var i=r-e.length;return i<0?e:e=t?e+yt(i):yt(i)+e}var _t=String.fromCharCode,Et=isNaN,St=Array.isArray;function kt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function xt(e){var r,t,i,n,a,o,s,c,l;if(!St(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(ot(i=e[c]))o+=i;else{if(r=void 0!==i.precision,!(i=kt(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,Et(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,Et(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=at(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Et(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Et(a)?String(i.arg):_t(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=vt(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=tt(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=mt(i.arg,i.width,i.padRight)),o+=i.arg||"",s+=1}return o}var Vt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Tt(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function jt(e){var r,t,i,n;for(t=[],n=0,i=Vt.exec(e);i;)(r=e.slice(n,Vt.lastIndex-i[0].length)).length&&t.push(r),t.push(Tt(i)),n=Vt.lastIndex,i=Vt.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function It(e){return"string"==typeof e}function $t(e){var r,t;if(!It(e))throw new TypeError($t("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[jt(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return xt.apply(null,r)}function Ft(e){return null!==e&&"object"==typeof e}var At=function(e){if("function"!=typeof e)throw new TypeError($t("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!Qr(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(Ft);function Ot(e){var r,t,i;if(("Object"===(t=be(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=ar.exec(i.toString()))return r[1]}return function(e){return Ft(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}(e)?"Buffer":t}return function(e,r,t){Yr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(Ft,"isObjectLikeArray",At),function(e){return e instanceof fe||"Slice"===Ot(e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isSlice=r();
//# sourceMappingURL=index.js.map
