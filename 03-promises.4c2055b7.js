!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i");function i(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}function u(e,n){e?r.Notify.success(n):r.Notify.failure(n)}({form:document.querySelector(".form"),submitBtn:document.querySelector("button")}).form.addEventListener("submit",(function(e){e.preventDefault();for(var n=e.currentTarget.elements,t=n.delay,o=n.step,r=n.amount,c=Number(r.value),f=Number(t.value),a=Number(o.value),l=1;l<=c;l+=1)i(l,1===l?f:f+(l-1)*a).then((function(e){u(!0,e)})).catch((function(e){u(!1,e)}))}))}();
//# sourceMappingURL=03-promises.4c2055b7.js.map
