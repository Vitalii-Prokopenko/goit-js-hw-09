!function(){var e={form:document.querySelector(".form"),submitBtn:document.querySelector("button")};function t(t,n,o){document.createElement("div");markupOfPromiseMessage='<div data-position="'.concat(t,'">').concat(n,"</div>"),e.form.insertAdjacentHTML("beforeend",markupOfPromiseMessage);var r=document.querySelector('div[data-position="'.concat(t,'"'));r.style.backgroundColor=o,r.style.color="white",r.style.width="270px",r.style.height="25px",r.style.borderRadius="5px",r.style.marginTop="10px",r.style.textAlign="center"}e.form.addEventListener("submit",(function(e){var n=function(e){(function(e,t){return newPromise=new Promise((function(n,o){setTimeout((function(){Math.random()>.3?n("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))}),t)}))})(e,1===e?u:u+(e-1)*m).then((function(n){t(e,n,"green")})).catch((function(n){t(e,n,"red")}))};e.preventDefault();for(var o=e.currentTarget.elements,r=o.delay,c=o.step,i=o.amount,a=Number(i.value),u=Number(r.value),m=Number(c.value),s=1;s<=a;s+=1)n(s)}))}();
//# sourceMappingURL=03-promises.1206b837.js.map
