import{_ as ve,L as he,J as fe,E as ge}from"./preview.95a7df14.js";import{v as be,o as ye,a as we,y as R,x as ce,n as xe}from"./vue.esm-bundler.b9dec9d9.js";import"./chunk-KSYMO6G6.f719e32d.js";import"./index.e850844b.js";import"./iframe.048ad53f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.f037b798.js";const de={name:"productVariantPicker",presets:!0,mixins:[he,fe,ge],vendors:[],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["type","show_option_selected","hide_unavaiable_variant","hide_soldout_variant","disable_style","prevents_product_image_changes","show_all_values_first_option","auto_variant_placeholder_text"],resize:{horizontal:!0,vertical:!1}}},computed:{element_id(){return this.data.id},disable_style_name(){var n,x,m;return((n=this.data.settings)==null?void 0:n.hide_soldout_variant)&&((x=this.data.settings)==null?void 0:x.disable_style)?`ecom-disable-style-${(m=this.data.settings)==null?void 0:m.disable_style}`:""},autoVariantPlaceholderText(){var n,x;return this.lang((x=(n=this.data.settings)==null?void 0:n.auto_variant_placeholder_text)!=null?x:"-","auto_variant_placeholder_text",this.exporting===!0?{escape:!0}:null)},javascript(){return function(){var le;const n=this.$el;if(!n)return;const x=this.isLive,m=n.querySelector(".ecom-product-single__variant-picker-container");if(!m)return;const M=m.closest(".ecom-sections[data-section-id]"),P=this.settings.show_option_selected,A=this.settings.history_state,H=this.settings.auto_variant_disable,V=this.settings.hide_soldout_variant,N=this.settings.hide_unavaiable_variant,W=this.settings.select_first_variant,U=this.settings.type,B=this.settings.prevents_product_image_changes,j=V&&N,T=!this.settings.hasOwnProperty("show_option_selected")&&!this.settings.show_option_selected,z=this.settings.show_all_values_first_option,C=n.querySelector('[name="id"]'),pe=C?parseInt(C.getAttribute("ec-variants")):0,ue=(le=m.dataset.autoVariantPlaceholder)!=null?le:"-",_e=x&&pe>250,p=n.closest(".ecom-product-form--single");if(!p||(H&&(U!=="dropdown"&&p.classList.add("ecom_auto_variant_disable"),m.querySelectorAll(".ecom-product-single__swatch-item").forEach(function(t){t.classList.remove("ecom-box-active","ecom-button-active","ecom-image-active")}),m.querySelectorAll("select.single-option-selector").forEach(function(t){var h,y,v;const o=((v=(y=(h=t.closest(".selector-wrapper"))==null?void 0:h.querySelector(".ecom-product-variant--option-label-text"))==null?void 0:y.textContent)==null?void 0:v.trim())||"",u=ue.replace(/\{option\}/g,function(){return o});t.querySelectorAll("option").forEach(function(S){S.removeAttribute("selected")});let f=t.querySelector('option[value=""]');f||(f=document.createElement("option"),f.value="",t.prepend(f)),f.textContent=u,f.setAttribute("selected","selected"),t.value="",t.dispatchEvent(new Event("change",{bubbles:!0}))})),!C))return;const Z=n.querySelector("#"+C.dataset.jsonProduct)||!x?n==null?void 0:n.querySelector("[id^=product-json]"):null;if(!Z)return;let O=null;try{O=JSON.parse(Z.innerHTML)}catch{return}function J(e){if(!e)return null;const t=e.featured_image||null,o=e.featured_media||null,u=o&&o.preview_image?o.preview_image:null,b=t&&(t.src||t.url)||u&&(u.src||u.url)||null;return b?{src:b,alt:t&&t.alt||o&&o.alt||u&&u.alt||""}:null}function D(){if(!!z)try{m.querySelectorAll('select[data-option-index="0"]').forEach(e=>{Array.from(e.options).forEach(t=>{t.disabled=!1,t.classList&&t.classList.remove("ecom-variant-disable"),t.style&&(t.style.display="")})}),p.querySelectorAll('.ecom-product-single__swatch-item[data-option-index="0"]').forEach(e=>{e.classList.remove("ecom-variant-disable"),e.removeAttribute("disabled"),e.style&&(e.style.display="")})}catch{}}function X(e){if(p.classList.contains("ecom_auto_variant_disable")&&H)return;const t=p.querySelector(".ecom-product-single__price--badges");if(!!t){if(!e){t.querySelector(".ecom-product-single__price--badges-sold-out").style.display="none";return}if(t&&t.querySelectorAll("span").forEach(function(o){o.style.display="none"}),e)if(e.available&&e.price<e.compare_at_price){if(t&&t.querySelector(".ecom-product-single__price--badges-sale")){const o=t.querySelector(".ecom-product-single__price--badges-sale");o.style.display="block";let u=0;u=Math.round((e.compare_at_price-e.price)*100/e.compare_at_price),o.dataset.type==="amount"&&(u=window.EComposer.formatMoney(e.compare_at_price-e.price));let b=o.dataset.text;b=b.replace(/\{.*\}/g,u),o.innerHTML=b}}else e.available||t&&(t.querySelector(".ecom-product-single__price--badges-sold-out").style.display="block")}}function Y(e){const t=p.querySelector(".ecom-product-single__quantity-input");if(t){const o=t&&t.dataset.minValue?parseInt(t.dataset.minValue):"",u=t&&t.dataset.maxValue?parseInt(t.dataset.maxValue):"";if(e)e.available?((!t.value||o&&o>0&&t.value<o)&&(t.value=o),t.removeAttribute("disabled","disabled")):(o&&o>0&&(t.value=o),t.setAttribute("disabled","disabled"));else{t.value=o&&o>0?o:1,t.setAttribute("disabled","disabled");return}const b=e.inventory_quantity,f=e.inventory_policy;let h=u&&u>0?u:9999;e.inventory_management&&f==="deny"&&(h=u&&u>0&&u<b?u:b,(b<o||!t.value||o&&o>0&&t.value<o)&&(t.value=o)),b<1&&f=="continue"&&((!t.value||o&&o>0&&t.value<o)&&(t.value=o),h=999999),(e&&b&&b>o||e&&f=="continue")&&(e.inventory_management&&f==="deny"?h=u&&u>0&&u<b?u:b:e.inventory_management&&f==="continue"&&(h=999999),t.value<o&&(t.value=o)),h<0&&(h=0);let y=parseInt(t.value);!o&&y>h&&(y=h),y=isNaN(y)||!y?1:y,!o&&!e.available&&(y=0),y=y>=0?y:1,t.value=y,t.setAttribute("max",h)}}function G(e){!e||(e.dataset.ecomProgrammaticMove="1",clearTimeout(e._ecomProgrammaticMoveTimer),e._ecomProgrammaticMoveTimer=setTimeout(function(){delete e.dataset.ecomProgrammaticMove},1500))}function Q(e){const t=p.querySelectorAll(".ecom-product-single__media--slider");if(t.length&&e)t.forEach(function(o){var y,v;const u=o.querySelector(".ecom-product-single__media--featured");if(!u||u.getAttribute("data-priority")==="featured"||o.querySelector("#ecom-single-product-default-variant"))return;const b=u.querySelectorAll(".ecom-product-single__media--image");if(!(b!=null&&b.length))return;let f=!1;b.forEach((S,_)=>{var a,d,l;const r=(a=S.dataset.variant_id)==null?void 0:a.split(",");if(!(r!=null&&r.length)||!r.includes(String(e.id)))return;f=!0;const i=parseInt(S.dataset.index),s=(l=(d=u.ec_splide)==null?void 0:d.index)!=null?l:0;i!==s&&setTimeout(()=>{!u.ec_splide||(G(u),u.ec_splide.go(i))},100)});const h=J(e);if(!f&&h){const _=h.src.split("?")[0].split("/").pop();let r=-1;if(!_)return;b.forEach((i,s)=>{var l;const a=i.querySelector("img"),d=((l=a==null?void 0:a.src)==null?void 0:l.split("?")[0])||"";a&&d.includes(_)&&r===-1&&(r=i.dataset.index!==void 0?parseInt(i.dataset.index):s)}),r>=0&&r!==((v=(y=u.ec_splide)==null?void 0:y.index)!=null?v:0)&&setTimeout(()=>{!u.ec_splide||(G(u),u.ec_splide.go(r))},100)}});else if(J(e)){const o=J(e);p.querySelectorAll(".ecom-product-single__media--single .ecom-product-single__media--featured").forEach(function(b){if(b.getAttribute("data-priority")==="featured")return;const f=b.querySelector("img");f&&(f.setAttribute("src",o.src),f.setAttribute("alt",o.alt),f.setAttribute("srcset",o.src))})}}function ee(e){const t=p.querySelectorAll(".ecom-product-single__add-to-cart--submit");t.length&&t.forEach(function(o){if(p.classList.contains("ecom_auto_variant_disable")&&H)o.setAttribute("disabled","disabled");else if(e)e.available||e.inventory_management===null?(o.removeAttribute("disabled"),o.querySelector(".ecom-add-to-cart-text")&&(!e.inventory_management||e.inventory_management&&e.inventory_quantity>0?(o.querySelector(".ecom-add-to-cart-text").innerHTML=o.dataset.textAddCart,o.classList.remove("ecom-product-single__pre-order")):e.inventory_quantity<=0&&e.inventory_policy=="continue"&&(o.querySelector(".ecom-add-to-cart-text").innerHTML=o.dataset.textPreOrder,o.classList.add("ecom-product-single__pre-order")))):(o.setAttribute("disabled","disabled"),o.querySelector(".ecom-add-to-cart-text")&&(o.querySelector(".ecom-add-to-cart-text").innerHTML=o.dataset.textOutstock,o.classList.remove("ecom-product-single__pre-order")));else if(o.setAttribute("disabled","disabled"),o.querySelector(".ecom-add-to-cart-text")){let u=!1;m.querySelectorAll(".single-option-selector").forEach(function(b){if(b.value===""){u=!0;return}}),u?N?o.querySelector(".ecom-add-to-cart-text").innerHTML=o.dataset.textOutstock:V?o.querySelector(".ecom-add-to-cart-text").innerHTML=o.dataset.textUnavailable:o.querySelector(".ecom-add-to-cart-text").innerHTML=o.dataset.textAddCart:o.querySelector(".ecom-add-to-cart-text").innerHTML=o.dataset.textUnavailable}})}function te(e){if(!(p.classList.contains("ecom_auto_variant_disable")&&H)&&e&&e.options.length)for(let t=0;t<e.options.length;t++)p.querySelectorAll(`.ecom-product-single__swatch-item[data-option-index="${t}"][data-value="${e.options[t].replace(/'/g,"'").replace(/"/g,'\\"')}"]`).forEach(o=>{o.parentNode.childNodes.forEach(function(u){u.classList&&(u.classList.remove("ecom-box-active"),u.classList.remove("ecom-button-active"),u.classList.remove("ecom-image-active"))}),o.classList.add("ecom-box-active"),o.classList.add("ecom-button-active"),o.classList.add("ecom-image-active")}),p.querySelectorAll(`select.ecom-product-single__swatch-select[data-option-index="${t}"]`).forEach(function(o){o.value=e.options[t]})}function oe(e){const t=p.querySelectorAll(".ecom-product-single__media-label");e?t.length&&t.forEach(function(o){o.style.display="";const u=o.querySelector("span.ecom-product-single__media-label-sale");u&&(u.style.display=e.available&&e.compare_at_price&&e.compare_at_price>e.price?"block":"none");const b=o.querySelector(".ecom-product-single__media-label-sold-out");b&&(b.style.display=e.available?"none":"block");const f=o.querySelector(".ecom-product-single__media-label--bage-sale");if(f){const h=f.dataset.labelType;if(e.compare_at_price>e.price){let y=f.dataset.sale,v="";h==="amount"?(v=e.compare_at_price-e.price,f.style.display="inherit",f.innerHTML=y.replace(/\[.*\]/g,window.EComposer.formatMoney(v))):(v=Math.round((e.compare_at_price-e.price)*100/e.compare_at_price),f.style.display="inherit",f.innerHTML=y.replace(/\[.*\]/g,Math.floor(v))),f.style.display=e.available?"inherit":"none"}else f.style.display="none"}}):t.forEach(function(o){o.style.display="none"})}function ie(e){const t=p.querySelectorAll(".ecom-product-single__price--regular"),o=p.querySelectorAll(".ecom-product-single__price--sale"),u=p.querySelectorAll(".ecom-product-single__price--badges-pecent-wrapper"),b=p.querySelectorAll(".ecom-product_ground-price"),f=p.querySelector(".ecom-unit-price"),h=p.querySelectorAll(".ecom-ground-price_unit-price-measurement");if(e&&(p.querySelector("shopify-payment-terms")&&p.querySelector("shopify-payment-terms").setAttribute("variant-id",e.id),o.length&&y(o,e),u.length&&u.forEach(function(v){const S=v.dataset.labelType;if(e.compare_at_price&&e.compare_at_price>e.price){let _=Math.round((e.compare_at_price-e.price)/e.compare_at_price*100);S==="amount"&&(_=window.EComposer.formatMoney(e.compare_at_price-e.price)),v.querySelector("span")&&(v.style.display="block",v.querySelector("span").innerText=`-${_}%`)}else v.style.display="none"}),t.length&&t.forEach(function(v){v.innerHTML=window.EComposer.formatMoney(e.compare_at_price),e.compare_at_price>e.price?v.style.display="inherit":v.style.display="none"}),b.length&&(b.forEach(function(v){e.unit_price?(v.style.display="block",f&&(f.style.display="block")):(v.style.display="none",f&&(f.style.display="none"));const S=v.querySelector(".ecom-ground-price_unit-price");S&&(S.innerHTML=window.EComposer.formatMoney(e.unit_price))}),h.length&&h.forEach(function(v){e.unit_price_measurement.reference_value!=1?v.innerHTML=e.unit_price_measurement.reference_value+e.unit_price_measurement.reference_unit:v.innerHTML=e.unit_price_measurement.reference_unit})),M)){const v=(e.price/100).toFixed(2);M.querySelectorAll("[data-amount]").forEach(function(S){S.setAttribute("data-amount",v)})}function y(v,S){v.forEach(function(_){!S.compare_at_price||S.compare_at_price<S.price?_.classList.add("ecom-product-single__price-normal"):_.classList.remove("ecom-product-single__price-normal"),_.innerHTML=window.EComposer.formatMoney(S.price)})}}function ae(e){const t=p.querySelector(".ecom-product-single__variant-attributes--barcode"),o=p.querySelector(".ecom-product-single__variant-attributes--sku");e?(t&&(t.style.removeProperty("display"),t.querySelector(".ecom-product-single__variant-attributes--text").innerHTML=`${e.barcode?e.barcode:"N/A"}`),o&&(o.style.removeProperty("display"),o.querySelector(".ecom-product-single__variant-attributes--text").innerHTML=`${e.sku?e.sku:"N/A"}`)):(t&&(t.style.display="none"),o&&(o.style.display="none"))}function ne(e){if(!e||p.classList.contains("ecom_auto_variant_disable")&&H)return;const t=p.querySelectorAll(".ecom-product-single__variant-picker-container");if(!t.length||!e)return!1;C.dispatchEvent(new Event("change",{bubbles:!0})),t.forEach(o=>{o.querySelectorAll(".ecom-product-single__variant-picker--selected-value").forEach(function(h){h.remove()}),H&&p.classList.contains("ecom_auto_variant_disable")&&(p.classList.remove("ecom_auto_variant_disable"),p.querySelectorAll(".ecom-product-single__add-to-cart--submit").forEach(function(h){h.removeAttribute("disabled")}));const u=n.querySelectorAll('.selector-wrapper label[for*="ecom-variant-selector"');if(u.length>0&&u.forEach(h=>{let y=h.dataset.optionLabelText;const v=h.querySelector(".ecom-product-variant--option-label-text");y===void 0&&(y=(v?v.textContent:h.textContent).replace(/:\s*$/,"").trim(),h.dataset.optionLabelText=y);const _=(v?getComputedStyle(v,"::after").content:"")==='":"';h.querySelectorAll(".ecom-product-variant--option-label-text").forEach(s=>s.remove());const r=document.createElement("span");r.className="ecom-product-variant--option-label-text";const i=P&&!_&&!y.endsWith(":");r.innerText=`${y}${i?":":""}`,h.prepend(r)}),!P)return 1;const b=e.options.length,f=o.querySelectorAll(".selector-wrapper");for(let h=0;h<b;h++)f[h]&&f[h].querySelectorAll("label").forEach(y=>{const v=document.createElement("span");v.className="ecom-product-single__variant-picker--selected-value",v.innerHTML=e.options[h],y.appendChild(v)}),o.querySelectorAll(`.ecom-product-single__picker--option-label[data-option-index="${h}"]`).forEach(function(y){let v=document.createElement("span");v.classList.add("ecom-product-single__variant-picker--selected-value"),v.innerHTML=e.options[h],y.appendChild(v)})})}function se(e){X(e),B||Q(e),ee(e),Y(e),te(e),ie(e),ae(e),ne(e),oe(e),window.Shopify=window.Shopify||{},window.Shopify.current_product=window.Shopify.current_product||{},window.Shopify.current_product.current_variant=e,p.dispatchEvent(new CustomEvent("ecomVariantChange",{detail:{variant:e}}))}_e?K():me();function K(){const e=M.dataset.sectionId;if(!e){console.error("Section ID not found for high variant product");return}p.dataset.productUrl||(p.dataset.productUrl=window.location.pathname);let t=null,o=p.querySelector("[data-selected-variant]");if(o||(o=p.querySelector(".ecom-product-single__variant-picker--json script")),o&&o.innerHTML)try{t=JSON.parse(o.innerHTML),t&&t.variants&&(t=t.selected_variant||t.selected_or_first_available_variant||null),t=t&&t.id?t:null,r(t)}catch{}u(),D();function u(){m.querySelectorAll("[data-option-value-id]").forEach(i=>{const s=i.cloneNode(!0);i.parentNode.replaceChild(s,i)}),m.querySelectorAll("li[data-option-value-id]").forEach(i=>{i.addEventListener("click",b)}),m.querySelectorAll("select[data-option-index]").forEach(i=>{i.addEventListener("change",f)}),m.querySelectorAll(".ecom-product-single__swatch-select").forEach(i=>{i.addEventListener("change",f)})}function b(i){i.preventDefault();const s=i.target.closest("[data-option-value-id]");if(!!s){if(s.tagName==="LI"){if(s.classList.contains("ecom-box-active")||s.classList.contains("ecom-button-active")||s.classList.contains("ecom-image-active"))return;const a=s.dataset.optionIndex;m.querySelectorAll(`[data-option-index="${a}"]`).forEach(d=>{d.classList.remove("ecom-box-active","ecom-button-active","ecom-image-active")}),s.classList.add("ecom-box-active","ecom-button-active","ecom-image-active")}h(s)}}function f(i){const s=i.target,a=s.options[s.selectedIndex];if(!a)return;const d=a.value,l=parseInt(s.dataset.optionIndex);if(s.dataset.lastSelectedValue===d)return;s.dataset.lastSelectedValue=d;const c=[];m.querySelectorAll("select[data-option-index]").forEach(g=>{const E=parseInt(g.dataset.optionIndex);if(E===l)a.dataset.optionValueId&&(c[E]=a.dataset.optionValueId);else{const I=g.options[g.selectedIndex];I&&I.dataset.optionValueId&&(c[E]=I.dataset.optionValueId)}}),m.querySelectorAll("li[data-option-value-id].ecom-box-active, li[data-option-value-id].ecom-button-active, li[data-option-value-id].ecom-image-active").forEach(g=>{if(g.dataset.optionValueId&&g.dataset.optionIndex){const E=parseInt(g.dataset.optionIndex);c[E]=g.dataset.optionValueId}});const k=c.filter(g=>g).length>0?`&option_values=${c.filter(g=>g).join(",")}`:"",q=p.dataset.productUrl||window.location.pathname,$=a.dataset.productUrl||q,w=$&&q!==$,L=`${$}?section_id=${e}${k}`;m.style.opacity="0.5",m.style.pointerEvents="none",fetch(L).then(g=>{if(!g.ok)throw new Error("Network response was not ok");return g.text()}).then(g=>{const E=new DOMParser().parseFromString(g,"text/html");let I=null;if(w){const F=E.querySelector(".ecom-product-form--single");F&&(p.innerHTML=F.innerHTML,p.dataset.productUrl=$,setTimeout(()=>{K()},100))}else{const F=E.querySelector(".ecom-product-single__variant-picker-container");if(F){m.innerHTML=F.innerHTML,u(),D();const re=m.querySelector(`select[data-option-index="${l}"]`);re&&re.focus()}I=S(E,l)}m.style.opacity="",m.style.pointerEvents="",A&&!w&&I&&I.id&&v(I)}).catch(g=>{console.error("Error fetching variant options:",g),m.style.opacity="",m.style.pointerEvents=""})}function h(i){p.querySelectorAll(".ecom-product-single__media--featured").forEach(function($){$.removeAttribute("data-priority")});const a=y(),d=a.length>0?`&option_values=${a.join(",")}`:"",l=p.dataset.productUrl||window.location.pathname,c=i.dataset.productUrl||l,k=c&&l!==c,q=`${c}?section_id=${e}${d}`;m.style.opacity="0.5",m.style.pointerEvents="none",fetch(q).then($=>{if(!$.ok)throw new Error("Network response was not ok");return $.text()}).then($=>{const w=new DOMParser().parseFromString($,"text/html");let L=null;if(H&&p.classList.contains("ecom_auto_variant_disable")&&(p.classList.remove("ecom_auto_variant_disable"),p.querySelectorAll(".ecom-product-single__add-to-cart--submit").forEach(function(g){g.removeAttribute("disabled")})),k){const g=w.querySelector(".ecom-product-form--single");g&&(p.innerHTML=g.innerHTML,p.dataset.productUrl=c,setTimeout(()=>{K()},100))}else{const g=w.querySelector(".ecom-product-single__variant-picker-container");if(g)if(m.innerHTML=g.innerHTML,u(),D(),i.tagName==="SELECT"){const I=m.querySelector(`select[data-option-index="${i.dataset.optionIndex}"]`);I&&I.focus&&I.focus()}else{const I=m.querySelector(`[data-option-value-id="${i.dataset.optionValueId}"]`);I&&I.focus&&I.focus()}const E=i&&i.dataset.optionIndex?parseInt(i.dataset.optionIndex):null;L=S(w,E)}m.style.opacity="",m.style.pointerEvents="",A&&!k&&L&&L.id&&v(L)}).catch($=>{console.error("Error fetching variant options:",$),m.style.opacity="",m.style.pointerEvents=""})}function y(){const i=[],s=new Set;return m.querySelectorAll("li[data-option-value-id].ecom-box-active, li[data-option-value-id].ecom-button-active, li[data-option-value-id].ecom-image-active").forEach(a=>{if(a.dataset.optionValueId&&a.dataset.optionIndex){const d=parseInt(a.dataset.optionIndex);s.has(d)||(i[d]=a.dataset.optionValueId,s.add(d))}}),m.querySelectorAll("select.single-option-selector[data-option-index]").forEach(a=>{const d=parseInt(a.dataset.optionIndex);if(!s.has(d)){const l=a.options[a.selectedIndex];l&&l.dataset.optionValueId&&(i[d]=l.dataset.optionValueId,s.add(d))}}),m.querySelectorAll("select.ecom-product-single__swatch-select[data-option-index]").forEach(a=>{const d=parseInt(a.dataset.optionIndex);if(!s.has(d)){const l=a.options[a.selectedIndex];l&&l.dataset.optionValueId&&(i[d]=l.dataset.optionValueId,s.add(d))}}),i.filter(a=>a!==void 0)}function v(i){const s=window.location.pathname+"?variant="+i.id;window.history.replaceState({},"",s)}function S(i,s=null){let a=null;const d=i.querySelector("[data-selected-variant]");if(d&&d.innerHTML)try{a=JSON.parse(d.innerHTML)}catch{}if(!a){const l=i.querySelector(".ecom-product-single__variant-picker--json script");if(l&&l.innerHTML)try{const c=JSON.parse(l.innerHTML);c&&c.variants?a=c.selected_variant||c.selected_or_first_available_variant||null:a=c}catch{}}if(!a){const l=i.querySelector("#"+C.dataset.jsonProduct);if(l)try{const c=JSON.parse(l.innerHTML);a=c.selected_variant||c.selected_or_first_available_variant||null}catch{}}if(a){const l=p.querySelector('input[name="id"]');if(l&&(l.value=a.id,l.dispatchEvent(new Event("change",{bubbles:!0}))),a=a.id?a:null,j&&(!a||!a.available)){const c=_(s);return z&&(s===0||s===null)&&!c?(r(a||null),a||null):null}return r(a),a}else{const l=p.querySelector('input[name="id"]');return l&&(l.value="",l.dispatchEvent(new Event("change",{bubbles:!0}))),r(null),null}}function _(i){const s=m.querySelectorAll(".single-option-selector[data-option-index], .ecom-product-single__swatch-item[data-option-index], .ecom-product-single__swatch-select[data-option-index]"),a={};s.forEach(l=>{const c=l.dataset.optionIndex;a[c]||(a[c]=[]),!(i!==null&&parseInt(c)===i)&&a[c].push(l)});let d=!1;return Object.keys(a).sort().forEach(l=>{const k=a[l].find(q=>{if(q.tagName==="LI"){const $=q.classList.contains("ecom-variant-disable")||q.style.display==="none"||q.hasAttribute("disabled"),w=q.classList.contains("ecom-box-active")||q.classList.contains("ecom-button-active")||q.classList.contains("ecom-image-active");return!$&&!w}if(q.tagName==="SELECT"){const $=Array.from(q.options).find(w=>!w.disabled&&w.style.display!=="none"&&w.value!=="");if($)return q._ecomFirstAvailableOption=$.value,!0}return!1});k&&!d&&(k.tagName==="LI"?(k.click(),d=!0):k.tagName==="SELECT"&&(k.value=k._ecomFirstAvailableOption,k.dispatchEvent(new Event("change",{bubbles:!0})),d=!0))}),d}function r(i){X(i),B||Q(i),ne(i),ee(i),Y(i),ie(i),ae(i),oe(i),te(i),window.Shopify=window.Shopify||{},window.Shopify.current_product=window.Shopify.current_product||{},window.Shopify.current_product.current_variant=i,p.dispatchEvent(new CustomEvent("ecomVariantChange",{detail:{variant:i}}))}}function me(){let e=!1;const t=m.querySelectorAll(".single-option-selector");if(!t.length){console.warn("No option selectors found");return}function o(){const _=[];return t.forEach((r,i)=>{_[i]=r.value}),O.variants.find(r=>{for(let i=0;i<_.length;i++){const s=`option${i+1}`;if(r[s]!==_[i])return!1}return!0})}function u(_){_?(C.value=_.id,C.disabled=!1):(C.value="",C.disabled=!0)}function b(){if(!V&&!N){p.querySelectorAll(".ecom-variant-disable").forEach(r=>{r.classList.remove("ecom-variant-disable"),r.style.display=""}),z&&D();return}const _=[];t.forEach(r=>{_.push(r.value)}),t.forEach((r,i)=>{const s=parseInt(r.dataset.optionIndex),a=r.value;if(z&&s===0)return;const d=new Set,l=new Set,c=new Set;O.variants.forEach(w=>{let L=!0;for(let g=0;g<t.length;g++){if(g===i)continue;const E=_[g];if(!E||E==="")continue;const I=`option${g+1}`;if(w[I]!==E){L=!1;break}}if(L){const g=`option${s+1}`,E=w[g];c.add(E),w.available?d.add(E):l.add(E)}}),Array.from(r.options).forEach(w=>{if(w.value==="")return;const L=w.value;let g=!1;(!c.has(L)&&N||!d.has(L)&&l.has(L)&&V)&&(g=!0),g?(w.disabled=!0,w.classList.add("ecom-variant-disable")):(w.disabled=!1,w.classList.remove("ecom-variant-disable"))}),p.querySelectorAll(`.ecom-product-single__swatch-item[data-option-index="${s}"]`).forEach(w=>{const L=w.dataset.value;let g=!1;(!c.has(L)&&N||!d.has(L)&&l.has(L)&&V)&&(g=!0),g?w.classList.add("ecom-variant-disable"):w.classList.remove("ecom-variant-disable")});const k=!c.has(a),q=!d.has(a)&&l.has(a);a&&(k&&N||q&&V)&&(_[i]="")}),z&&D()}function f(){if(U!=="image")return;const _=[];t.forEach(r=>{_.push(r.value)}),t.forEach((r,i)=>{const s=parseInt(r.dataset.optionIndex);p.querySelectorAll(`.ecom-product-single__swatch-item[data-option-index="${s}"]`).forEach(a=>{const d=a.dataset.value,l=a.querySelector("img");if(l){const c=[..._];c[i]=d;let k=O.variants.find($=>{for(let w=0;w<c.length;w++){if(!c[w])continue;const L=`option${w+1}`;if($[L]!==c[w])return!1}return!0});!k&&z&&c[0]&&(k=O.variants.find($=>$.available&&$.option1===c[0]));const q=J(k);q&&(l.setAttribute("src",q.src),l.setAttribute("alt",q.alt||d))}})})}function h(){let _=!e&&W?O.variants[0]:o();if(e=!0,z&&t[0]&&t[0].dataset.justChanged==="true"&&(!_||!_.available)){const r=[];t.forEach(s=>r.push(s.value));const i=O.variants.find(s=>(!V||s.available)&&s.option1===r[0]);i&&(t.forEach((s,a)=>{if(a===0)return;const d=`option${a+1}`;i[d]&&(s.value=i[d])}),_=i)}if(j&&_&&!_.available&&t[0].dataset.justChanged!=="true"){const r=y();r&&(t.forEach((i,s)=>{const a=`option${s+1}`;i.value=r[a]}),_=r)}if(u(_),se(_||null),b(),f(),A&&_){const r=window.location.pathname+"?variant="+_.id;window.history.replaceState({},"",r)}}function y(_){let r=-1;t.forEach((d,l)=>{d.dataset.justChanged==="true"&&(r=l)});const i=[];t.forEach((d,l)=>{i[l]=d.value});let s=null,a=-1;return O.variants.forEach(d=>{if(!d.available)return;if(r>=0){const c=`option${r+1}`;if(d[c]!==i[r])return}let l=0;for(let c=0;c<i.length;c++){const k=`option${c+1}`;d[k]===i[c]&&l++}l>a&&(a=l,s=d)}),s}t.forEach((_,r)=>{_.addEventListener("change",function(){_.dataset.justChanged="true",t.forEach((i,s)=>{s!==r&&delete i.dataset.justChanged}),h()})});function v(){const r=new URLSearchParams(window.location.search).get("variant");if(r){const i=O.variants.find(s=>s.id==r);i&&(t.forEach((s,a)=>{const d=`option${a+1}`;s.value=i[d]}),e=!0)}h()}if(v(),p.addEventListener("ecomVariantChange",function(_){_.detail&&u(_.detail.variant)}),T){const _=n.querySelectorAll('.selector-wrapper label[for*="ecom-variant-selector"');_.length>0&&_.forEach(r=>{let i=r.dataset.optionLabelText;if(i===void 0){const a=r.querySelector(".ecom-product-variant--option-label-text");i=(a?a.textContent:r.textContent).replace(/:\s*$/,"").trim(),r.dataset.optionLabelText=i}r.querySelectorAll(".ecom-product-variant--option-label-text").forEach(a=>a.remove());const s=document.createElement("span");s.className="ecom-product-variant--option-label-text",s.innerText=`${i}:`,r.prepend(s)})}p.querySelectorAll(".ecom-product-single__swatch-item[data-option-index]").forEach(_=>{_.addEventListener("click",function(r){if(r.preventDefault(),this.classList.contains("ecom-variant-disable"))return;const i=p.querySelectorAll(".ecom-product-single__media--featured");let s=null;if(i&&i.length&&(i.length>1?i.forEach(function(l){if(s)return;const c=x?window.screen.width:window.innerWidth;(c>1024&&!l.closest(".hide-on-desktop")||c>767&&c<=1024&&!l.closest(".hide-on-tablet")||c<=767&&!l.closest(".hide-on-mobile"))&&(s=l)}):s=i[0],s&&s.removeAttribute("data-priority")),this.classList.contains("ecom-button-active")||this.classList.contains("ecom-box-active")||this.classList.contains("ecom-image-active"))return;const a=this.dataset.optionIndex;this.parentNode.querySelectorAll(`.ecom-product-single__swatch-item[data-option-index="${a}"]`).forEach(function(l){l.classList.remove("ecom-button-active","ecom-box-active","ecom-image-active","ecom-image-button")}),this.classList.add("ecom-button-active","ecom-box-active","ecom-image-active"),U==="swatch_images"&&this.classList.add("ecom-image-button"),p.classList.remove("ecom_auto_variant_disable");const d=p.querySelector(`select.single-option-selector[data-option-index="${a}"]`);d&&(d.value=this.dataset.value,d.dispatchEvent(new Event("change")))})});const S=p.querySelectorAll(".ecom-product-single__swatch-select");S.length&&S.forEach(function(_){_.addEventListener("change",function(r){const i=p.querySelectorAll(".ecom-product-single__media--featured");let s=null;i&&i.length&&(i.length>1?i.forEach(function(c){if(s)return;const k=x?window.screen.width:window.innerWidth;(k>1024&&!c.closest(".hide-on-desktop")||k>767&&k<=1024&&!c.closest(".hide-on-tablet")||k<=767&&!c.closest(".hide-on-mobile"))&&(s=c)}):s=i[0],s&&s.removeAttribute("data-priority"));let a=r.target.getAttribute("data-option-index"),d=r.target.value;p.classList.remove("ecom_auto_variant_disable"),p.querySelectorAll(`.ecom-product-single__swatch-item[data-option-index="${a}"]`).forEach(c=>{c.dataset.value===d?c.classList.add("ecom-button-active","ecom-box-active","ecom-image-active"):c.classList.remove("ecom-button-active","ecom-box-active","ecom-image-active")});const l=p.querySelector(`select.single-option-selector[data-option-index="${a}"]`);l&&(l.value=d,l.dispatchEvent(new Event("change")))})})}}},page_type(){return this.$store.getters["page/params"].page},liquids(){var m,M,P,A;const n="script",x={wrapper_classes:{code:`{% if product.has_only_default_variant%}${this.exporting?"":" ecom-placeholder-on-builder-mode ecom-force-show"} ecom-product-single__variant-picker--only-default{% endif%} ${this.disable_style_name}`,preview:""},assign_variant:{code:`
                        {%- liquid
                            assign ecom_has_variant_picker = true
                            assign tag_name = 'script'
                            ${(m=this.data.settings)!=null&&m.auto_variant_disable?"assign variant_selected = null":(M=this.data.settings)!=null&&M.select_first_variant?"assign variant_selected = product.variants[0]":"assign variant_selected = product.selected_or_first_available_variant"}
                            assign checkIsHighVariant = false
                            if product.variants_count > 250
                                assign checkIsHighVariant = true
                            endif
                        -%}
                        {% if checkIsHighVariant %}
                            <div data-high-variant-product="{{ checkIsHighVariant }}"></div>
                            <{{tag_name}} type="application/json" data-selected-variant>
                                {
                                    "id": {{ variant_selected.id | json }},
                                    "title": {{ variant_selected.title | json }},
                                    "price": {{ variant_selected.price | json }},
                                    "available": {{ variant_selected.available | json }},
                                    "compare_at_price": {{ variant_selected.compare_at_price | json }},
                                    "featured_image": {{ variant_selected.featured_image | json }},
                                    "featured_media": {{ variant_selected.featured_media | json }},
                                    "sku": {{ variant_selected.sku | json }},
                                    "barcode": {{ variant_selected.barcode | json }},
                                    "options": {{ variant_selected.options | json }},
                                    "option1": {{ variant_selected.option1 | json }},
                                    "option2": {{ variant_selected.option2 | json }},
                                    "option3": {{ variant_selected.option3 | json }},
                                    "inventory_management": {{ variant_selected.inventory_management | json }},
                                    "inventory_policy": {{ variant_selected.inventory_policy | json }},
                                    "inventory_quantity": {{ variant_selected.inventory_quantity | json }},
                                    "requires_selling_plan": {{ variant_selected.requires_selling_plan | json }},
                                    "selling_plan_allocations": {{ variant_selected.selling_plan_allocations | json }},
                                    "quantity_rule": {
                                        "min": {{ variant_selected.quantity_rule.min | json }},
                                        "max": {{ variant_selected.quantity_rule.max | json }},
                                        "increment": {{ variant_selected.quantity_rule.increment | json }}
                                    },
                                    "unit_price": {{ variant_selected.unit_price | json }},
                                    "unit_price_measurement": {{ variant_selected.unit_price_measurement | json }}
                                }
                            </{{tag_name}}>
                        {% endif %}
                        `,preview:""},options:{code:`
                    {%- if product.variants_count > 250 -%}
                    <input type="hidden" name="id" value="{{ variant_selected.id }}"
                        data-product-id="{{product.id}}"
                        data-json-product="product-json-{{product.id}}-${this.element_id}"
                        id="ecom-variant-selector-{{product.id}}-${this.element_id}"
                        ec-variants={{ product.variants_count }}
                    >
                    {%- else -%}
                    <select name="id"
                        class="ecom-product-single-select-id {% if product.has_only_default_variant %} ecom-product-single__picker-default-variant {% endif %}"
                        data-product-id="{{product.id}}"
                        data-json-product="product-json-{{product.id}}-${this.element_id}"
                        id="ecom-variant-selector-{{product.id}}-${this.element_id}"
                    >
                        {% unless product.has_only_default_variant %}
                            ${(P=this.data.settings)!=null&&P.auto_variant_disable?`<option value="" selected="selected">${this.autoVariantPlaceholderText}</option>`:""}
                        {% endunless %}
                        {% for variant in product.variants %}
                            <option value="{{variant.id}}"
                                {% if variant_selected.id == variant.id %}selected="selected"{% endif %}>
                                {{variant.title}}
                            </option>
                        {% endfor %}
                    </select>
                    {%- endif -%}
                    {% unless product.has_only_default_variant %}
                        {%- for option in product.options_with_values -%}
                            {% assign option_index = option.position | minus: 1 %}
                            <div class="selector-wrapper">
                                <label for="ecom-variant-selector-{{product.id}}-${this.element_id}-option-{{option_index}}"><span class="ecom-product-variant--option-label-text">{{option.name}}</span></label>
                                <select class="single-option-selector"
                                        id="ecom-variant-selector-{{product.id}}-${this.element_id}-option-{{option_index}}"
                                        data-option-index="{{option_index}}">
                                    {% for option_value in option.values %}
                                        <option value="{{option_value | escape}}"
                                            {% if option_value.selected %}selected="selected"{% endif %}
                                            ${this.data.settings.hide_unavaiable_variant||this.data.settings.hide_soldout_variant?"{% unless option_value.available %}disabled{% endunless %}":""}
                                            data-option-value-id="{{option_value.id}}"
                                            data-product-url="{{option_value.product_url}}">
                                            {{option_value}}
                                        </option>
                                    {% endfor %}
                                </select>
                            </div>
                        {%- endfor -%}
                    {% endunless %}
                `,preview:`
                        <div class="ecom-skeleton-item">
                                <div class="ecom-skeleton-col-12">
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-12"></div>
                                    <div class="ecom-skeleton-col-2"></div>
                                    <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-8 ecom-skeleton-big"></div>
                                    <div class="ecom-skeleton-col-4 ecom-skeleton-big ecom-skeleton-empty"></div>
                                </div>
                                </div>
                                <div class="ecom-skeleton-col-12">
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-12"></div>
                                    <div class="ecom-skeleton-col-2"></div>
                                    <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-8 ecom-skeleton-big"></div>
                                    <div class="ecom-skeleton-col-4 ecom-skeleton-big ecom-skeleton-empty"></div>
                                </div>
                                </div>
                            </div>
                    `},product_json:{code:`
                        <${n} type="application/json" id="product-json-{{product.id}}-${this.element_id}">
                            {%- render "ecom_product_json", product: product, checkIsHighVariant: ${this.exporting?"checkIsHighVariant":"false"} -%}
                        </${n}>
                    `,preview:`<${n} id="product-json-preview">{}</${n}>`}};return this.swatch_type==="shopify_color"?x.swatch_shopify_colors={code:`
                        {%- capture swatch_option_temp  -%}${this.lang(this.data.settings.option,"product_option_swatch")}{%- endcapture-%}
                        {%- assign swatch_option_temp = swatch_option_temp | downcase | split: ',' -%}
                        {% assign swatch_option = "" %}
                        {% for item in swatch_option_temp %}
                        {% assign normalizedItem = item | strip %}
                        {% assign swatch_option = swatch_option | append: normalizedItem %}
                        {% unless forloop.last %}
                            {% assign swatch_option = swatch_option | append: ',' %}
                        {% endunless %}
                        {% endfor %}
                        {%- assign swatch_option = swatch_option | split: ',' -%}
                        {% unless product.has_only_default_variant %}
                            {%- for option in product.options_with_values -%}
                                {% assign option_name_downcase = option.name | downcase %}
                                {%- if swatch_option contains option_name_downcase -%}
                                    {% assign option_index = option.position | minus: 1 %}
                                    <div class="ecom-product-single__picker-main ecom-product-single__picker-option-{{option.name | handleize }}">
                                        <span class="ecom-product-single__picker-main-label ecom-product-single__picker--option-label" data-option-index="{{option_index}}">
                                            <span class="ecom-product-variant--option-label-text">{{ option.name }}</span>
                                        </span>
                                        <ul class="ecom-product-single__picker-colors-list">
                                            {%- for option_value in option.values -%}
                                                {%- liquid
                                                    assign swatch_focal_point = null
                                                    if option_value.swatch.image
                                                        assign image_url = option_value.swatch.image | image_url: width: 150
                                                        assign swatch_value = 'url(' | append: image_url | append: ')'
                                                        assign swatch_focal_point = option_value.swatch.image.presentation.focal_point
                                                    elsif option_value.swatch.color
                                                        assign swatch_value = 'rgb(' | append: option_value.swatch.color.rgb | append: ')'
                                                    else
                                                        assign swatch_value = null
                                                    endif
                                                -%}
                                                <li data-option-index="{{ option_index }}"
                                                    class="ecom-product-single__swatch-item ecom-product-single__picker-colors-item {% if option_value.selected %}ecom-box-active{% endif %} ${this.data.settings.hide_unavaiable_variant||this.data.settings.hide_soldout_variant?"{% unless option_value.available %}ecom-variant-disable{% endunless %}":""}"
                                                    data-value="{{ option_value | escape }}"
                                                    data-option-value-id="{{ option_value.id }}"
                                                    data-product-url="{{ option_value.product_url }}">
                                                    <span
                                                        {% if swatch_value %}
                                                            class="ec-swatch-shopify-color"
                                                            style="--ec-swatch--background: {{ swatch_value }};{% if swatch_focal_point %} --ec-swatch-focal-point: {{ swatch_focal_point }};{% endif %}"
                                                        {% else %}
                                                            class="ec-swatch-shopify-color ec-swatch--unavailable ecom-product-single__picker-colors--no-color"
                                                        {% endif %}
                                                    ></span>
                                                </li>
                                            {%- endfor -%}
                                        </ul>
                                    </div>
                                {% continue %}
                                {%- endif -%}
                                {% assign option_index = option.position | minus: 1 %}
                                <div class="ecom-product-single__picker-option-{{option.name | handleize }}">
                                    <span class="ecom-product-single__picker-${this.option_layout}-label ecom-product-single__picker--option-label" data-option-index="{{option_index}}">
                                        <span class="ecom-product-variant--option-label-text">{{option.name}}</span>
                                    </span>
                                    ${this.option_layout==="radio"?`
                                        <ul class="ecom-product-single__picker-${this.option_layout}-list">
                                            {% for option_value in option.values %}
                                                <li class="ecom-product-single__swatch-item ecom-product-single__picker-${this.option_layout}-list-item {% if option_value.selected %}ecom-button-active{% endif %} ${this.data.settings.hide_unavaiable_variant||this.data.settings.hide_soldout_variant?"{% unless option_value.available %}ecom-variant-disable{% endunless %}":""}"
                                                    data-option-index="{{ option_index }}"
                                                    data-value="{{ option_value | escape }}"
                                                    data-option-value-id="{{ option_value.id }}"
                                                    data-product-url="{{ option_value.product_url }}">
                                                    {{option_value}}
                                                </li>
                                            {% endfor %}
                                        </ul>
                                    `:`
                                        <select class="ecom-product-single__swatch-select ecom-product-single__picker-${this.option_layout}-list" data-option-index="{{ option_index }}" aria-label="Variants">
                                            {% for option_value in option.values %}
                                                <option value="{{option_value | escape }}"
                                                    {% if option_value.selected %}selected="selected"{% endif %}
                                                    {% unless option_value.available %}disabled{% endunless %}
                                                    data-option-value-id="{{ option_value.id }}"
                                                    data-product-url="{{ option_value.product_url }}">
                                                    {{option_value}}
                                                </option>
                                            {% endfor %}
                                        </select>
                                    `}
                                </div>
                            {%- endfor -%}
                        {% endunless %}
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-col-12">
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-12"></div>
                                <div class="ecom-skeleton-col-2"></div>
                                <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-big"></div>
                                <div class="ecom-skeleton-col-4 ecom-skeleton-big ecom-skeleton-empty"></div>
                            </div>
                            </div>
                            <div class="ecom-skeleton-col-12">
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-12"></div>
                                <div class="ecom-skeleton-col-2"></div>
                                <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-big"></div>
                                <div class="ecom-skeleton-col-4 ecom-skeleton-big ecom-skeleton-empty"></div>
                            </div>
                            </div>
                        </div>
                    `}:this.swatch_type==="image"?x.swatch_images={code:`
                        {%- capture swatch_option_temp  -%}${this.lang(this.data.settings.option,"product_option_swatch")}{%- endcapture-%}
                        {%- assign swatch_option_temp = swatch_option_temp | split: ',' -%}
                        {% assign swatch_option = "" %}
                        {% for item in swatch_option_temp %}
                        {% assign normalizedItem = item | strip %}
                        {% assign swatch_option = swatch_option | append: normalizedItem %}
                        {% unless forloop.last %}
                            {% assign swatch_option = swatch_option | append: ',' %}
                        {% endunless %}
                        {% endfor %}
                        {%- assign swatch_option = swatch_option | split: ',' -%}
                        {% unless product.has_only_default_variant %}
                            {%- for option in product.options_with_values -%}
                                {%- if swatch_option contains option.name  -%}
                                    {% assign option_index = option.position | minus: 1 %}
                                    <div class="ecom-product-single__picker-main ecom-product-single__picker-option-{{option.name | handleize }}">
                                        <span class="ecom-product-single__picker-main-label ecom-product-single__picker--option-label" data-option-index="{{option_index}}">
                                            <span class="ecom-product-variant--option-label-text">{{ option.name }}</span>
                                        </span>
                                        <ul class="ecom-product-single__picker-images-list">
                                            {%- for option_value in option.values -%}
                                                {%- assign option_variant = option_value.variant -%}
                                                <li data-option-index="{{ option_index }}"
                                                    class="ecom-image-default ecom-product-single__swatch-item ecom-product-single__picker-images-item {% if option_value.selected %}ecom-image-active{% endif %} ${this.data.settings.hide_unavaiable_variant||this.data.settings.hide_soldout_variant?"{% unless option_value.available %}ecom-variant-disable{% endunless %}":""}"
                                                    data-value="{{ option_value | escape }}"
                                                    data-option-value-id="{{ option_value.id }}"
                                                    data-product-url="{{ option_value.product_url }}">
                                                    <img src="{{ option_variant.featured_image | default: product.featured_image | image_url: width: 360 ${(A=this.data.settings)!=null&&A.disable_crop?", crop: 'center'":""} }}" alt="{{ option_value }}" />
                                                </li>
                                            {%- endfor -%}
                                        </ul>
                                    </div>
                                {% continue %}
                                {%-endif-%}
                                {% assign option_index = option.position | minus: 1 %}
                                <div class="ecom-product-single__picker-option-{{option.name | handleize }}">
                                    <span class="ecom-product-single__picker-${this.option_layout}-label ecom-product-single__picker--option-label" data-option-index="{{option_index}}">
                                        <span class="ecom-product-variant--option-label-text">{{option.name}}</span>
                                    </span>
                                    ${this.option_layout==="radio"?`
                                        <ul class="ecom-product-single__picker-${this.option_layout}-list">
                                            {% for option_value in option.values %}
                                                <li class="ecom-product-single__swatch-item ecom-product-single__picker-${this.option_layout}-list-item {% if option_value.selected %}ecom-button-active{% endif %} ${this.data.settings.hide_unavaiable_variant||this.data.settings.hide_soldout_variant?"{% unless option_value.available %}ecom-variant-disable{% endunless %}":""}"
                                                    data-option-index="{{ option_index }}"
                                                    data-value="{{ option_value | escape }}"
                                                    data-option-value-id="{{ option_value.id }}"
                                                    data-product-url="{{ option_value.product_url }}">
                                                    {{option_value}}
                                                </li>
                                            {% endfor %}
                                        </ul>
                                    `:`
                                        <select class="ecom-product-single__swatch-select ecom-product-single__picker-${this.option_layout}-list" data-option-index="{{ option_index }}" aria-label="Variants">
                                            {% for option_value in option.values %}
                                                <option value="{{option_value | escape }}"
                                                    {% if option_value.selected %}selected="selected"{% endif %}
                                                    {% unless option_value.available %}disabled{% endunless %}
                                                    data-option-value-id="{{ option_value.id }}"
                                                    data-product-url="{{ option_value.product_url }}">
                                                    {{option_value}}
                                                </option>
                                            {% endfor %}
                                        </select>
                                    `}
                                </div>
                            {%- endfor -%}
                        {% endunless %}
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-col-12">
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-12"></div>
                                <div class="ecom-skeleton-col-2"></div>
                                <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-big"></div>
                                <div class="ecom-skeleton-col-4 ecom-skeleton-big ecom-skeleton-empty"></div>
                            </div>
                            </div>
                            <div class="ecom-skeleton-col-12">
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-12"></div>
                                <div class="ecom-skeleton-col-2"></div>
                                <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-big"></div>
                                <div class="ecom-skeleton-col-4 ecom-skeleton-big ecom-skeleton-empty"></div>
                            </div>
                            </div>
                        </div>
                    `}:this.swatch_type==="color"?x.swatch_colors={code:`
                        {%- capture swatch_option_temp  -%}${this.lang(this.data.settings.option,"product_option_swatch")}{%- endcapture-%}
                        {%- assign swatch_option_temp = swatch_option_temp | split: ',' -%}
                        {% assign swatch_option = "" %}
                        {% for item in swatch_option_temp %}
                        {% assign normalizedItem = item | strip %}
                        {% assign swatch_option = swatch_option | append: normalizedItem %}
                        {% unless forloop.last %}
                            {% assign swatch_option = swatch_option | append: ',' %}
                        {% endunless %}
                        {% endfor %}
                        {%- assign swatch_option = swatch_option | split: ',' -%}
                        {%liquid
                            assign colors = shop.metafields.ecomposer.colors
                        %}
                        {% unless product.has_only_default_variant %}
                            {%- for option in product.options_with_values -%}
                                {%- if swatch_option contains option.name -%}
                                    {% assign option_index = option.position | minus: 1 %}
                                    <div class="ecom-product-single__picker-main ecom-product-single__picker-option-{{option.name | handleize }}">
                                        <span class="ecom-product-single__picker-main-label ecom-product-single__picker--option-label" data-option-index="{{option_index}}">
                                            <span class="ecom-product-variant--option-label-text">{{ option.name }}</span>
                                        </span>
                                        <ul class="ecom-product-single__picker-colors-list">
                                            {%- for option_value in option.values -%}
                                                {% assign option_value_name = option_value %}
                                                {% if option_value.name != blank %}
                                                    {% assign option_value_name = option_value.name %}
                                                {% endif %}
                                                {% assign value_key = ${this.canUseCustomLiquidForCSR?"option_value.name":"option_value"} | downcase | handleize | strip %}
                                                {% assign value_handle_key = option_value_name | downcase | handleize | strip %}
                                                {% assign swatch_color = blank %}
                                                {% if colors and colors.value[value_handle_key] != blank %}
                                                    {% assign swatch_color = colors.value[value_handle_key] %}
                                                {% elsif colors and colors.value[value_key] != blank %}
                                                    {% assign swatch_color = colors.value[value_key] %}
                                                {% endif %}
                                                <li data-option-index="{{ option_index }}"
                                                    class="ecom-product-single__swatch-item ecom-product-single__picker-colors-item {% if option_value.selected %}ecom-box-active{% endif %} ${this.data.settings.hide_unavaiable_variant||this.data.settings.hide_soldout_variant?"{% unless option_value.available %}ecom-variant-disable{% endunless %}":""}"
                                                    data-value="{{ option_value | escape }}"
                                                    data-option-value-id="{{ option_value.id }}"
                                                    data-product-url="{{ option_value.product_url }}">
                                                    <span {% if swatch_color != blank  %} style="{{swatch_color}}"{% else %} class="ecom-product-single__picker-colors--no-color" ${this.exporting===!1?'data-ecom-tooltip="Please set the color in Custom Color Swatches extension"':""} {% endif %}>
                                                    </span>
                                                </li>
                                            {%- endfor -%}
                                        </ul>
                                    </div>
                                {% continue %}
                                {%-endif-%}
                                {% assign option_index = option.position | minus: 1 %}
                                <div class="ecom-product-single__picker-option-{{option.name | handleize }}">
                                    <span class="ecom-product-single__picker-${this.option_layout}-label ecom-product-single__picker--option-label" data-option-index="{{option_index}}">
                                        <span class="ecom-product-variant--option-label-text">{{option.name}}</span>
                                    </span>
                                    ${this.option_layout==="radio"?`
                                        <ul class="ecom-product-single__picker-${this.option_layout}-list">
                                            {% for option_value in option.values %}
                                                <li class="ecom-product-single__swatch-item ecom-product-single__picker-${this.option_layout}-list-item {% if option_value.selected %}ecom-button-active{% endif %} ${this.data.settings.hide_unavaiable_variant||this.data.settings.hide_soldout_variant?"{% unless option_value.available %}ecom-variant-disable{% endunless %}":""}"
                                                    data-option-index="{{ option_index }}"
                                                    data-value="{{ option_value | escape }}"
                                                    data-option-value-id="{{ option_value.id }}"
                                                    data-product-url="{{ option_value.product_url }}">
                                                    {{option_value}}
                                                </li>
                                            {% endfor %}
                                        </ul>
                                    `:`
                                        <select class="ecom-product-single__swatch-select ecom-product-single__picker-${this.option_layout}-list" data-option-index="{{ option_index }}" aria-label="Variants">
                                            {% for option_value in option.values %}
                                                <option value="{{option_value | escape }}"
                                                    {% if option_value.selected %}selected="selected"{% endif %}
                                                    ${this.data.settings.hide_unavaiable_variant||this.data.settings.hide_soldout_variant?"{% unless option_value.available %}disabled{% endunless %}":""}
                                                    data-option-value-id="{{ option_value.id }}"
                                                    data-product-url="{{ option_value.product_url }}">
                                                    {{option_value}}
                                                </option>
                                            {% endfor %}
                                        </select>
                                    `}
                                </div>
                            {%- endfor -%}
                        {% endunless %}
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-col-12">
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-12"></div>
                                <div class="ecom-skeleton-col-2"></div>
                                <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-big"></div>
                                <div class="ecom-skeleton-col-4 ecom-skeleton-big ecom-skeleton-empty"></div>
                            </div>
                            </div>
                            <div class="ecom-skeleton-col-12">
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-12"></div>
                                <div class="ecom-skeleton-col-2"></div>
                                <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-big"></div>
                                <div class="ecom-skeleton-col-4 ecom-skeleton-big ecom-skeleton-empty"></div>
                            </div>
                            </div>
                        </div>
                    `}:this.swatch_type==="radio"&&(x.swatch_radios={code:`
                        {% unless product.has_only_default_variant%}
                            {%- for option in product.options_with_values -%}
                                {% assign option_index = option.position | minus: 1 %}
                                <div class="ecom-product-single__picker-option-{{option.name | handleize }}">
                                    <span class="ecom-product-single__picker-${this.swatch_type}-label ecom-product-single__picker--option-label" data-option-index="{{option_index}}">
                                        <span class="ecom-product-variant--option-label-text">{{option.name}}</span>
                                    </span>
                                    <ul class="ecom-product-single__picker-${this.swatch_type}-list">
                                        {% for option_value in option.values %}
                                            <li class="ecom-product-single__swatch-item ecom-product-single__picker-${this.swatch_type}-list-item {% if option_value.selected %}ecom-button-active{% endif %} ${this.data.settings.hide_unavaiable_variant||this.data.settings.hide_soldout_variant?"{% unless option_value.available %}ecom-variant-disable{% endunless %}":""}"
                                                data-option-index="{{ option_index }}"
                                                data-value="{{ option_value | escape }}"
                                                data-option-value-id="{{ option_value.id }}"
                                                data-product-url="{{ option_value.product_url }}">
                                                {{option_value}}
                                            </li>
                                        {% endfor %}
                                    </ul>
                                </div>
                            {%- endfor -%}
                        {% endunless %}
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-col-12">
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-12"></div>
                                <div class="ecom-skeleton-col-2"></div>
                                <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-big"></div>
                                <div class="ecom-skeleton-col-4 ecom-skeleton-big ecom-skeleton-empty"></div>
                            </div>
                            </div>
                            <div class="ecom-skeleton-col-12">
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-12"></div>
                                <div class="ecom-skeleton-col-2"></div>
                                <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-big"></div>
                                <div class="ecom-skeleton-col-4 ecom-skeleton-big ecom-skeleton-empty"></div>
                            </div>
                            </div>
                        </div>
                    `}),x},settings(){return[{group_title:this.$t("variant"),params:[{type:"popup",label:this.$t("picker_type"),name:"type",value:"dropdown",options:{type:"dropdown",default:!1,preview:"title",values:{dropdown:this.$t("dropdown"),image:this.$t("image_picker"),color:this.$t("color_picker"),radio:this.$t("radio_button"),shopify_color:this.$t("shopify_color")}}},{type:"paragraph",name:"color_description",content:this.$t("set_your_color_here_extensions_3"),options:{visible:function(n){return n.type==="color"}}},{type:"text",label:this.$t("option_show_as_swatch"),name:"option",description:this.$t("note_divide_value_with_eg_option_1_option_2"),value:"Color",placeholder:"Eg: Color",options:{toolbar:!1,visible:function(n){return n&&n.type&&["image","color","shopify_color"].includes(n.type)}}},{type:"popup",label:this.$t("other_options_as"),name:"option_layout",value:"dropdown",options:{type:"dropdown",default:!1,visible:{keep_data:!1,condition:function(n){return n&&n.type&&["image","color","shopify_color"].includes(n.type)}},values:{dropdown:this.$t("dropdown"),radio:this.$t("radio")}}},{type:"toggle",label:this.$t("hide_dropdown_arrow"),name:"hide_dropdown_arrow",options:{oneline:!0,values:{on:{label:this.$t("show"),value:!0},off:{label:this.$t("hide"),value:!1}},visible:{keep_data:!1,condition:function(n){return(n==null?void 0:n.type)==="dropdown"||(n==null?void 0:n.option_layout)==="dropdown"}}}},{type:"toggle",label:this.$t("disable_unavailable_variants"),name:"hide_unavaiable_variant",options:{oneline:!0,values:{on:{label:this.$t("show"),value:!0},off:{label:this.$t("hide"),value:!1}}}},{type:"toggle",label:this.$t("show_all_values_first_option"),name:"show_all_values_first_option",options:{oneline:!0,values:{on:{label:this.$t("show"),value:!0},off:{label:this.$t("hide"),value:!1}},visible:{keep_data:!1,condition:function(n){return n.hide_unavaiable_variant}}}},{type:"toggle",label:this.$t("disable_soldout_variants"),name:"hide_soldout_variant",options:{oneline:!0,values:{on:{label:this.$t("show"),value:!0},off:{label:this.$t("hide"),value:!1}}}},{type:"popup",label:this.$t("disable_style"),name:"disable_style",value:"",options:{type:"dropdown",preview:"title",default:!0,values:{slash:this.$t("slash"),cross:this.$t("cross"),hide:this.$t("hide")},visible:{keep_data:!1,condition:function(n){return n.hide_soldout_variant}}}},{type:"toggle",label:this.$t("disable_auto_select_variant"),name:"auto_variant_disable",options:{oneline:!0,values:{on:{label:this.$t("show"),value:!0},off:{label:this.$t("hide"),value:!1}},visible:{keep_data:!1,condition:function(n){return!n.hide_soldout_variant&&!n.hide_unavaiable_variant}}}},{type:"text",label:this.$t("auto_variant_placeholder_text"),name:"auto_variant_placeholder_text",value:"-",placeholder:this.$t("auto_variant_placeholder_text_placeholder",{option:"{option}"}),description:this.$t("auto_variant_placeholder_text_description",{option:"{option}"}),options:{update:"onchange",visible:{keep_data:!0,condition:function(n){return n.auto_variant_disable}}}},{type:"toggle",label:this.$t("select_first_variant"),name:"select_first_variant",options:{oneline:!0,values:{on:{label:this.$t("show"),value:!0},off:{label:this.$t("hide"),value:!1}},visible:{keep_data:!1,condition:function(n){return(!n.hide_soldout_variant||n.hide_soldout_variant==!1)&&(!n.auto_variant_disable||n.auto_variant_disable==!1)}}}},{type:"toggle",label:this.$t("show_option_selected"),name:"show_option_selected",options:{oneline:!0,values:{on:{label:this.$t("show"),value:!0},off:{label:this.$t("hide"),value:!1}}}},{type:"toggle",label:this.$t("show_option_name"),name:"show_option_name",options:{oneline:!0,responsive:!0,values:{on:{label:this.$t("show"),value:"inline-block"},off:{label:this.$t("hide"),value:"none"}}},css:{selector:" .ecom-product-variant--option-label-text",properties:{display:""}}},{type:"toggle",name:"disable_crop",label:this.$t("disable_crop_image"),value:!0,options:{values:{on:{label:this.$t("yes"),value:!1},off:{label:this.$t("no"),value:!0}},visible:{keep_data:!1,condition:function(n){return n&&n.type&&n.type==="image"}}}},{type:"toggle",label:this.$t("history_state_on_url"),name:"history_state",options:{oneline:!0,values:{on:{label:this.$t("show"),value:!0},off:{label:this.$t("hide"),value:!1}}}},{type:"toggle",label:this.$t("prevents_product_image_changes_when_selecting_variant"),name:"prevents_product_image_changes",options:{oneline:!0,values:{on:{label:this.$t("show"),value:!0},off:{label:this.$t("hide"),value:!1}}}},{name:"column_gap",label:this.$t("horizontal_spacing"),type:"number",options:{min:0,max:100,responsive:!0,visible:{keep_data:!0,condition:n=>n.type!=="dropdown"}},css:{properties:{"column-gap":"%value%px"},selector:" .ecom-product-single__picker-images-list, .ecom-product-single__picker-colors-list, .ecom-product-single__picker-radio-list"}},{name:"row_gap",label:this.$t("vertical_spacing"),type:"number",options:{min:0,max:100,responsive:!0,visible:{keep_data:!0,condition:n=>n.type!=="dropdown"}},css:{properties:{"row-gap":"%value%px"},selector:" .ecom-product-single__picker-images-list, .ecom-product-single__picker-colors-list, .ecom-product-single__picker-radio-list"}}]}]},requestShopifyType(){return{shopify_type:"product"}},swatch_type(){var x;const n=this.data&&this.data.settings&&"type"in this.data.settings?(x=this.data.settings)==null?void 0:x.type:"dropdown";return["image","color","radio","shopify_color"].includes(n)&&this.data&&this.data.settings&&"option"in this.data.settings?n:"dropdown"},option_layout(){var n,x,m;return(m=(x=(n=this.data)==null?void 0:n.settings)==null?void 0:x.option_layout)!=null?m:"dropdown"},css(){return`
                    .ec-swatch-shopify-color {
                        display: block;
                        max-width: 100%;
                        aspect-ratio: 1 / 1;
                        background: var(--ec-swatch--background);
                        background-position: var(--ec-swatch-focal-point, initial);
                        background-size: cover;
                        background-origin: border-box;
                    }
                    .ecom-product-single__variant-picker--options{
                        align-items:flex-start;
                        display:flex;
                        flex-direction:column;
                    }
                    .ecom-product-single__variant-picker-wrapper .ecom-allow-pointer-event .ecom-variant-disable {
                        pointer-events: auto;
                        cursor: pointer;
                    }
                    .ecom-product-single__variant-picker-wrapper .ecom-variant-disable {
                        opacity: .4;
                        pointer-events: none;
                        cursor: not-allowed;
                    }
                    .ecom-product-single__variant-picker [name="id"]{
                        display:none;
                    }


                    .ecom-product-single__variant-picker-container[data-picker-type="dropdown"] .selector-wrapper{
                        display:flex;
                    }

                    .ecom-product-single__variant-picker--only-default .ecom-product-single__variant-picker--options .selector-wrapper {
                        display:none;
                    }

                    .ecom-product-single__variant-picker-container{
                        flex-direction: column;
                    }
                    .ecom-product-single__variant-picker-container.ecom-placeholder-on-builder-mode:empty::before, .ecom-product-single__variant-picker-container.ecom-force-show.ecom-placeholder-on-builder-mode::before{
                        display: flex;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        position: relative;
                        justify-content: center;
                        align-items: center;
                        border-radius: 8px;
                        border: 1px dashed #91D0FF;
                        color: #00527C;
                        font-size: 13px;
                        line-height: 20px;
                        font-weight: 650;
                        opacity: 1;
                        padding: 6px;
                    }
                    .ecom-product-single__picker-radio-list{
                        display:block;
                        position:relative;
                        width:100%;
                    }
                    .ecom-product-single__picker-radio-list .ecom-product-single__picker-radio-list-item{
                        display:flex;
                        flex-direction: row;
                        cursor: pointer;
                    }

                    .ecom-product-single__picker-colors-item {
                        padding: 2px;
                        cursor: pointer;

                    }
                    .ecom-product-single__picker-colors-item span {
                        width:20px;
                        height:20px;
                        display:block;
                    }

                    .ecom-product-single__picker-colors-item {
                        display: inline-flex;
                        padding: 2px;
                        border : 2px solid #9e9e9e;
                    }

                    .ecom-product-single__picker-colors-item.ecom-button-active{
                        border-color:  rgba(5, 150, 105,1);
                    }

                    .ecom-product-single__variant-picker .ecom-product-single__picker-main,
                    .ecom-product-single__variant-picker .selector-wrapper {
                        display:flex;
                        flex-direction: column;
                        align-items:inherit;
                    }
                    .ecom-product-single__variant-picker .selector-wrapper{
                        display:none;
                         overflow:hidden;
                        width: 100%;
                    }
                     .ecom-product-single__variant-picker select{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        text-align: center;
                    }
                    @media (max-width: 767px) {
                        .ecom-product-single__variant-picker select{
                            text-align-last: center;
                            -moz-text-align-last: center;
                        }
                    }

                    .ecom-product-single__picker-colors-list,
                    .ecom-product-single__picker-radio-list,
                    .ecom-product-single__picker-images-list {

                        display: flex;
                        flex-wrap: wrap;
                    }
                    .ecom-product-single__picker-images-list li {
                        cursor: pointer;
                        margin: 0;
                    }

                     .ecom-product-single__variant-picker .selector-wrapper label {
                        display: inline-block;
                        line-height:1
                    }

                    .ecom-product-single__picker-radio-list li {
                        cursor: pointer;
                        text-align: center;
                        justify-content: center;
                    }
                    .ecom-product-single__picker-images-item{
                        overflow: hidden;
                    }
                    .ecom-product-single__picker-images-item img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    [data-ecom-tooltip]:before {
                        position : absolute;
                        content : attr(data-ecom-tooltip);
                        text-transform: none;
                        font-size: .9em;
                        line-height: 1;
                        user-select: none;
                        pointer-events: none;
                        opacity : 0;
                        z-index: 1;
                        width: 50%;
                        /*white-space: nowrap;*/
                        overflow: hidden;
                        text-overflow: ellipsis;
                        padding: 1ch 1.5ch;
                        border-radius: .3ch;
                        box-shadow: 0 1em 2em -.5em rgba(0, 0, 0, 0.35);
                        background: #333;
                        color: #fff;
                    }
                    [data-ecom-tooltip]:hover:before {
                        opacity : 1;
                    }

                    .ecom-product-single__price--prices {
                        display: inline-block;
                    }

                    .ecom-product-single__picker-colors-item span{
                        transition:inherit;
                        border-radius:inherit;
                    }
                    .ecom-product-single__variant-picker--main{
                        flex-direction:column;
                        display:flex;
                    }
                    .ecom-product-single__variant-picker--main > div{
                        display:flex;
                        flex-direction:column;
                        align-items:inherit;
                        justify-content:inherit;
                    }
                    .ecom-block  .ecom_not_hide_dropdown_arrow select {
                        -webkit-appearance: auto;
                        -moz-appearance: auto;
                        appearance: auto;
                    }
                    .ecom-product-single__variant-picker-wrapper.ecom_not_hide_dropdown_arrow .ecom-product-single__variant-picker-container select {
                        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiNiYmIiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==);
                        background-repeat: no-repeat;
                        background-position: right center;
                        background-size: 20px 20px;
                    }
                    .ecom-product-single__variant-picker-wrapper .ecom-product-single__variant-picker-container select {
                        appearance: none;
                        -webkit-appearance: none;
                        background-image: none;
                    }
                    .ecom-product-single__variant-picker-wrapper .ecom-product-single__variant-picker-container .ecom-variant-disable {
                        display: flex;
                        position: relative;
                        overflow: hidden;
                        justify-content: center;
                        align-items: center;
                    }
                    .ecom-product-single__variant-picker-wrapper .ecom-disable-style-slash .ecom-variant-disable:after {
                        content: '';
                        width: 2px;
                        height: 85%;
                        position: absolute;
                        z-index: 10;
                        opacity: inherit;
                        pointer-events: none;
                        transform: rotate(40deg);
                        background-color: #999999;
                    }
                    .ecom-product-single__variant-picker-wrapper .ecom-disable-style-cross .ecom-variant-disable:before {
                        content: '';
                        width: 2px;
                        height: 85%;
                        position: absolute;
                        z-index: 10;
                        opacity: inherit;
                        transform: rotate(45deg);
                        pointer-events: none;
                        background-color: #999999;
                    }
                    .ecom-product-single__variant-picker-wrapper .ecom-disable-style-cross .ecom-variant-disable:after {
                        content: '';
                        width: 2px;
                        height: 85%;
                        position: absolute;
                        z-index: 10;
                        opacity: inherit;
                        pointer-events: none;
                        transform: rotate(135deg);
                        background-color: #999999;
                    }
                    .ecom-product-single__variant-picker-wrapper .ecom-product-single__variant-picker-container.ecom-disable-style-hide .ecom-variant-disable {
                        display: none;
                    }
                `},default(){return{settings:{type:"dropdown",option:"Color",show_option_selected:!0,show_option_name:"inline-block",column_gap:15,row_gap:10},style:{general:{"align-items":"flex-start"},variant_name:{spacing:{margin:{bottom:"5px",top:"10px"}},textTypography:{title:"New Item",value:{},"font-family":{},"font-size":"17px","font-weight":"500"},textColor:"#111"},variant_value:{textTypography:{title:"New Item",value:{},"font-family":{},"font-size":"15px","font-weight":"500"},textColor:"#616161"},dropdown:{"text-align":"left",width:"120px",spacing:{padding:{top:"8px",left:"8px",bottom:"8px",right:"8px"},margin:{right:"0px",bottom:"5px",top:"0px",left:"0px"}},tab:"focus",typo:{"global-typography":"m5lJMKLv"},border:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#8787"},borderRadius:{top:"3px",left:"3px",bottom:"3px",right:"3px"},outline:{outline:{"outline-style":"none"}},boxShadow:{"box-shadow":{blur:"0px",position:"outline",color:"rgba(255, 0, 0, 0)"}},borderFocusMode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#c2c2c2"}},image:{tab:"active",imageWidth:"60px",iamgeBorderactivemode:{"border-style":"solid","border-color":"#0e7490","border-width":{top:"2px",left:"2px",bottom:"2px",right:"2px"}},imageWidth__mobile:"20%",spacing:{margin:{right:"0px",bottom:"0px"},padding:{bottom:"0px",top:"0px"}},imageBorderRadiusnormalmode:{right:"5px",top:"5px",left:"5px",bottom:"5px"},iamgeBordernormalmode:{"border-style":"solid","border-width":{top:"2px",left:"2px",bottom:"2px",right:"2px"},"border-color":"#999999"},imageAnimation:"grow",imageTransition:300,imageHeight:"60px",imageObjectFit:"cover"},button_image_radio:{tab:"active",buttonTypography:{"global-typography":"HH699X"},buttonColornormalmode:"#666666",buttonBordernormalmode:{"border-style":"solid","border-width":{top:"2px",left:"2px",bottom:"2px",right:"2px"},"border-color":"#6e6e6e"},spacing:{margin:{right:"0px",top:"0px",left:"0px",bottom:"0px"},padding:{top:"5px",left:"5px",bottom:"5px",right:"5px"}},buttonBorderhovermode:{"border-style":"solid","border-width":{top:"2px",left:"2px",bottom:"2px",right:"2px"},"border-color":"#0e7490"},transitions:{transitions:{delay:"100ms",duration:"300ms",timing:"ease-in-out"}},buttonBorderactivemode:{"border-style":"solid","border-width":{top:"2px",left:"2px",bottom:"2px",right:"2px"},"border-color":"#0e7490"}},button_radio:{tab:"normal",min_width:"40px"},disable_style:{cross_color:"#999999",border_color:"#999999",disable_opacity:.4,width:"2px",height:"85%"}},advanced:{spacing:{padding:{left:"5px",top:"5px",bottom:"5px",right:"5px"},margin:{right:"0px",top:"0px",left:"0px",bottom:"0px"}}}}}},methods:{quickToolBar(){return["type"]},style(){var x,m,M,P,A,H,V,N,W,U,B;const n=[{group_alias:"box",options:{group_title:this.$t("general"),group_name:"general",selector:" .ecom-product-single__variant-picker-container"},modify:{params:{alias:"align-items",options:{label:this.$t("alignment"),css:{selector:" .ecom-product-single__variant-picker--options, .ecom-product-single__variant-picker--main, .ecom-product-single__picker-radio-list",properties:{"align-items":"","justify-content":""}}}}}},{group_alias:"text:spacing",options:{group_title:this.$t("variant_name"),group_name:"variant_name",selector:" .ecom-product-single__picker-main-label .ecom-product-variant--option-label-text, .ecom-product-single__picker-radio-label .ecom-product-variant--option-label-text, .ecom-product-single__picker-dropdown-label .ecom-product-variant--option-label-text, .selector-wrapper .ecom-product-variant--option-label-text"},modify:{remove:{index:0,length:1}}}];return(x=this.data.settings)!=null&&x.show_option_selected&&n.push({group_alias:"text:spacing",options:{group_title:this.$t("variant_value"),group_name:"variant_value",selector:" .ecom-product-single__variant-picker--selected-value"},modify:{remove:{index:0,length:1}}}),((m=this.data.settings)==null?void 0:m.type)==="image"&&(n.push({group_alias:"image:active",options:{group_title:this.$t("variant_image"),group_name:"image",selector:" .ecom-product-single__picker-images-item"},modify:{params:{position:30,fields:[{type:"line"},{alias:"spacing",options:{css:{selector:"root .ecom-product-single__picker-images-item"}}}]}}}),((M=this.data.settings)==null?void 0:M.option_layout)==="radio"&&n.push({group_alias:"button:active",options:{group_title:this.$t("radio_button"),group_name:"button_image_radio",selector:" .ecom-product-single__picker-radio-list-item"}})),(((P=this.data.settings)==null?void 0:P.type)==="color"||((A=this.data.settings)==null?void 0:A.type)==="shopify_color")&&(n.push({group_alias:"box:active",options:{group_title:this.$t("color_picker"),group_name:"button",selector:" .ecom-product-single__picker-colors-item"},modify:{params:[{position:0,fields:[{name:"width",label:this.$t("width"),type:"number",options:{responsive:!0,units:{px:{min:10,max:100}}},css:{selector:" span",properties:{width:""}}},{name:"height",label:this.$t("height"),type:"number",options:{responsive:!0,units:{px:{min:10,max:100}}},css:{selector:" span",properties:{height:""}}}]},{position:30,fields:[{type:"line"},{alias:"spacing"}]}]}}),((H=this.data.settings)==null?void 0:H.option_layout)==="radio"&&n.push({group_alias:"button:active",options:{group_title:this.$t("radio_button"),group_name:"button_color_radio",selector:" .ecom-product-single__picker-radio-list-item"},modify:{params:[{position:3,fields:[{name:"min_width",label:this.$t("min_width"),type:"number",options:{responsive:!0,units:{px:{min:0,max:200}}},css:{properties:{"min-width":""}}}]}]}})),((V=this.data.settings)==null?void 0:V.type)==="radio"&&n.push({group_alias:"button:active",options:{group_title:this.$t("radio_button"),group_name:"button_radio",selector:" .ecom-product-single__picker-radio-list-item"},modify:{params:[{position:3,fields:[{name:"min_width",label:this.$t("min_width"),type:"number",options:{responsive:!0,units:{px:{min:0,max:200}}},css:{properties:{"min-width":""}}}]}]}}),((N=this.data.settings)==null?void 0:N.hide_soldout_variant)&&((W=this.data.settings)==null?void 0:W.disable_style)!=="hide"&&n.push({group_title:this.$t("disabled_variants"),group_name:"disable_style",selector:" .ecom-product-single__variant-picker-wrapper .ecom-product-single__variant-picker-container",params:[{name:"border_color",label:this.$t("border_color"),type:"color",value:"#999999",options:{oneline:!0,global:{type:"colors"},visible:j=>{var T;return j&&((T=this.data.settings)==null?void 0:T.disable_style)}},css:{selector:" .ecom-variant-disable:not(.ecom-image-active)>img, .ecom-variant-disable:not(.ecom-box-active), .ecom-variant-disable:not(.ecom-button-active), .ecom-variant-disable:not(.ecom-image-active)",properties:{"border-color":""}}},{name:"cross_color",label:this.$t("slash_cross_color"),type:"color",value:"#999999",options:{oneline:!0,global:{type:"colors"},visible:j=>{var T;return j&&((T=this.data.settings)==null?void 0:T.disable_style)}},css:{selector:" .ecom-variant-disable:before,  .ecom-variant-disable:after",properties:{"background-color":""}}},{type:"number",name:"width",label:this.$t("slash_cross_width"),value:"2px",options:{units:{px:{min:1,max:20,step:1}},visible:j=>{var T;return j&&((T=this.data.settings)==null?void 0:T.disable_style)}},css:{properties:{width:"%value%"},selector:" .ecom-variant-disable:before,  .ecom-variant-disable:after"}},{type:"number",name:"height",label:this.$t("slash_cross_height"),value:"85%",options:{units:{"%":{min:0,max:100,step:1}},visible:j=>{var T;return j&&((T=this.data.settings)==null?void 0:T.disable_style)}},css:{properties:{height:"%value%"},selector:" .ecom-variant-disable:before,  .ecom-variant-disable:after"}},{type:"number",name:"disable_opacity",label:this.$t("opacity"),value:.4,options:{step:.01,min:0,max:1,responsive:!0},css:{properties:{opacity:"%value%"},selector:" .ecom-variant-disable"}}]}),(((U=this.data.settings)==null?void 0:U.type)==="dropdown"||((B=this.data.settings)==null?void 0:B.option_layout)==="dropdown")&&n.push({group_alias:"input",options:{group_title:this.$t("dropdown"),group_name:"dropdown",selector:" .ecom-product-single__swatch-select, .single-option-selector"},modify:{remove:{index:4,length:1}}}),n}}},ke={class:"ecom-element ecom-product-single ecom-product-single__variant-picker"},Se=["data-picker-type","data-ecom-placeholder","data-auto-variant-placeholder"],$e=["innerHTML"],qe=["innerHTML"],Le=["innerHTML"];function Ee(n,x,m,M,P,A){var V;const H=be("Liquid");return ye(),we("div",ke,[R("div",{class:ce(["ecom-product-single__variant-picker-wrapper",{ecom_not_hide_dropdown_arrow:!((V=m.data.settings)!=null&&V.hide_dropdown_arrow)}])},[R("div",{class:ce(["ecom-product-single__variant-picker-container",n.liquid("wrapper_classes")]),"data-picker-type":A.swatch_type,"data-ecom-placeholder":n.exporting?"":"This product has only default variant","data-auto-variant-placeholder":A.autoVariantPlaceholderText},[xe(H,{data:A.liquids.assign_variant.code},null,8,["data"]),R("div",{class:"ecom-product-single__variant-picker--main",innerHTML:n.liquid("swatch_"+A.swatch_type+"s")},null,8,$e),R("div",{class:"ecom-product-single__variant-picker--options",innerHTML:n.liquid("options")},null,8,qe),R("div",{class:"ecom-product-single__variant-picker--json",innerHTML:n.liquid("product_json")},null,8,Le)],10,Se)],2)])}const Ce=ve(de,[["render",Ee]]);de.__docgenInfo={exportName:"default",displayName:"productVariantPicker",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/VariantPicker.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{Ce as default};
//# sourceMappingURL=VariantPicker.a2dcd590.js.map
