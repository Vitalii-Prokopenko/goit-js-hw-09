var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var n=o("iQIUW");const i={form:document.querySelector(".form"),submitBtn:document.querySelector("button")};function s(e,t){return newPromise=new Promise(((r,o)=>{setTimeout((()=>{Math.random()>.3?r(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}function l(e,t,r){document.createElement("div");markupOfPromiseMessage=`<div data-position="${e}">${t}</div>`,i.form.insertAdjacentHTML("beforeend",markupOfPromiseMessage);const o=document.querySelector(`div[data-position="${e}"`);o.style.backgroundColor=r,o.style.color="white",o.style.width="270px",o.style.height="25px",o.style.borderRadius="5px",o.style.marginTop="10px",o.style.textAlign="center"}function u(e,t){e?n.Notify.success(t):n.Notify.failure(t)}i.form.addEventListener("submit",(e=>{e.preventDefault();const{elements:{delay:t,step:r,amount:o}}=e.currentTarget,n=Number(o.value),i=Number(t.value),d=Number(r.value);let a=0;for(let e=1;e<=n;e+=1)a=1===e?i:i+(e-1)*d,s(e,a).then((t=>{l(e,t,"green"),u(!0,t)})).catch((t=>{l(e,t,"red"),u(!1,t)}))}));
//# sourceMappingURL=03-promises.2fbd1d61.js.map
