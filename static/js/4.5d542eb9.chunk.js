(this.webpackJsonpEYEapp=this.webpackJsonpEYEapp||[]).push([[4],{227:function(t,e,n){"use strict";n.r(e),n.d(e,"startInputShims",(function(){return p}));var o=n(21),r=new WeakMap,i=function(t,e,n,o){void 0===o&&(o=0),r.has(t)!==n&&(n?u(t,e,o):c(t,e))},a=function(t){return t===t.getRootNode().activeElement},u=function(t,e,n){var o=e.parentNode,i=e.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o.appendChild(i),r.set(t,i);var a="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform="translate3d("+a+"px,"+n+"px,0) scale(0)"},c=function(t,e){var n=r.get(t);n&&(r.delete(t),n.remove()),t.style.pointerEvents="",e.style.transform=""},s="input, textarea, [no-blur]",l=function(t,e,n,o){var r=t.top,i=t.bottom,a=e.top,u=a+15,c=.5*Math.min(e.bottom,o-n)-i,s=u-r,l=Math.round(c<0?-c:s>0?-s:0),d=Math.min(l,r-a),f=Math.abs(d)/.3;return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(r-u)}},d=function(t,e,n,o){var r=function(t,e,n){var o=t.closest("ion-item,[ion-item]")||t;return l(o.getBoundingClientRect(),e.getBoundingClientRect(),n,t.ownerDocument.defaultView.innerHeight)}(t,n,o);Math.abs(r.scrollAmount)<4?e.focus():(i(t,e,!0,r.inputSafeY),e.focus(),n.scrollByPoint(0,r.scrollAmount,r.scrollDuration).then((function(){i(t,e,!1,r.inputSafeY),e.focus()})))},f=function(t,e,n){if(e&&n){var o=e.x-n.x,r=e.y-n.y;return o*o+r*r>t*t}return!1},v=function(t,e){if("INPUT"===t.tagName&&(!t.parentElement||"ION-INPUT"!==t.parentElement.tagName)&&(!t.parentElement||!t.parentElement.parentElement||"ION-SEARCHBAR"!==t.parentElement.parentElement.tagName)){var n=t.closest("ion-content");if(null!==n){var o=n.$ionPaddingTimer;o&&clearTimeout(o),e>0?n.style.setProperty("--keyboard-offset",e+"px"):n.$ionPaddingTimer=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px")}),120)}}},p=function(t){var e=document,n=t.getNumber("keyboardHeight",290),r=t.getBoolean("scrollAssist",!0),u=t.getBoolean("hideCaretOnScroll",!0),c=t.getBoolean("inputBlurring",!0),l=t.getBoolean("scrollPadding",!0),p=Array.from(e.querySelectorAll("ion-input, ion-textarea")),m=new WeakMap,E=new WeakMap,h=function(t){var e=(t.shadowRoot||t).querySelector("input")||(t.shadowRoot||t).querySelector("textarea"),c=t.closest("ion-content");if(e){if(c&&u&&!m.has(t)){var s=function(t,e,n){if(!n||!e)return function(){};var o=function(n){a(e)&&i(t,e,n)},r=function(){return i(t,e,!1)},u=function(){return o(!0)},c=function(){return o(!1)};return n.addEventListener("ionScrollStart",u),n.addEventListener("ionScrollEnd",c),e.addEventListener("blur",r),function(){n.removeEventListener("ionScrollStart",u),n.removeEventListener("ionScrollEnd",c),e.addEventListener("ionBlur",r)}}(t,e,c);m.set(t,s)}if(c&&r&&!E.has(t)){s=function(t,e,n,r){var i,u=function(t){i=Object(o.j)(t)},c=function(u){if(i){var c=Object(o.j)(u);f(6,i,c)||a(e)||(u.preventDefault(),u.stopPropagation(),d(t,e,n,r))}};return t.addEventListener("touchstart",u,!0),t.addEventListener("touchend",c,!0),function(){t.removeEventListener("touchstart",u,!0),t.removeEventListener("touchend",c,!0)}}(t,e,c,n);E.set(t,s)}}};c&&function(){var t=!0,e=!1,n=document,o=function(){e=!0},r=function(){t=!0},i=function(o){if(e)e=!1;else{var r=n.activeElement;if(r&&!r.matches(s)){var i=o.target;i!==r&&(i.matches(s)||i.closest(s)||(t=!1,setTimeout((function(){t||r.blur()}),50)))}}};n.addEventListener("ionScrollStart",o),n.addEventListener("focusin",r,!0),n.addEventListener("touchend",i,!1)}(),l&&function(t){var e=document,n=function(e){v(e.target,t)},o=function(t){v(t.target,0)};e.addEventListener("focusin",n),e.addEventListener("focusout",o)}(n);for(var g=0,L=p;g<L.length;g++){var y=L[g];h(y)}e.addEventListener("ionInputDidLoad",(function(t){h(t.detail)})),e.addEventListener("ionInputDidUnload",(function(t){!function(t){var e;u&&((e=m.get(t))&&e(),m.delete(t));r&&((e=E.get(t))&&e(),E.delete(t))}(t.detail)}))}}}]);
//# sourceMappingURL=4.5d542eb9.chunk.js.map