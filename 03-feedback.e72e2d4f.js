function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,g=Math.min,m=function(){return l.Date.now()};function v(e,t,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(O,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function O(){var e=m();if(j(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?g(n,i-(e-c)):n}(e))}function T(e){return f=void 0,v&&o?y(e):(o=r=void 0,a)}function S(){var e=m(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},S.flush=function(){return void 0===f?a:T(m())},S}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");console.log(y),y.addEventListener("input",e(t)((function(e){const{name:t,value:n}=e.target;try{let e=localStorage.getItem("feedback-form-state");e=e?JSON.parse(e):{},e[t]=n;const o=JSON.stringify(e);localStorage.setItem("feedback-form-state",o)}catch(e){}}),500)),y.addEventListener("submit",(function(e){e.preventDefault();const{elements:{message:t,email:n}}=e.currentTarget;console.log({email:n.value,message:t.value}),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),function(){const e=localStorage.getItem("feedback-form-state");if(!e)return;try{const t=JSON.parse(e);Object.entries(t).forEach((([e,t])=>{console.log(e),console.log(t),y.elements[e].value=t}))}catch(e){}}();
//# sourceMappingURL=03-feedback.e72e2d4f.js.map
