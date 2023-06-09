import{_ as P,L as V,J as I,E as D}from"./preview.a7f47650.js";import{o as W,a as R,v as x,u as E,n as U,x as F}from"./vue.esm-bundler.09fbef75.js";import"./chunk-2GDW2BFM.eab564c8.js";import"./index.e850844b.js";import"./iframe.0ad70ec4.js";import"../sb-preview/runtime.js";const L={name:"VariantPicker",presets:!0,mixins:[V,I,D],vendors:["shopify_option_selection_js"],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["show_option_selected","hide_unavaiable_variant"]}},computed:{element_id(){return this.data.id},javascript(){return function(){const s=this.$el;if(!s)return;const p=this.isLive,_=this.settings.show_option_selected?this.settings.show_option_selected:!1,h=this.settings.history_state?this.settings.history_state:!1,m=s.querySelector('[name="id"]'),r=s.closest(".ecom-product-form--single");if(!r)return;const d=s.querySelector(".ecom-product-single__variant-picker-container");let g=null;if(!m)return;const y=this.$el.querySelector("#"+m.dataset.jsonProduct);if(!y)return;let k=null;try{k=JSON.parse(y.innerHTML)}catch{return}function j(e){const t=r.querySelector(".ecom-product-single__price--badges");if(t&&t.querySelectorAll("span").forEach(function(o){o.style.display="none"}),e)if(e.available&&e.price<e.compare_at_price){if(t){const o=t.querySelector(".ecom-product-single__price--badges-sale");o.style.display="block";let a=0;a=Math.ceil((e.compare_at_price-e.price)*100/e.compare_at_price),o.dataset.type==="amount"&&(a=window.EComposer.formatMoney(e.compare_at_price-e.price));let n=o.dataset.text;n=n.replace(/\{.*\}/g,a),o.innerHTML=n}}else e.available||t&&(t.querySelector(".ecom-product-single__price--badges-sold-out").style.display="block")}function C(e){const t=r.querySelector(".ecom-product-single__quantity-input");if(t){if(e)e.available?t.removeAttribute("disabled","disabled"):t.setAttribute("disabled","disabled");else{t.value=1,t.setAttribute("disabled","disabled");return}const o=e.inventory_quantity,a=e.inventory_policy;let n=9999;e.inventory_management&&a==="deny"&&(n=o),o<1&&a=="continue"&&(n=999999);let i=parseInt(t.value);i>n&&(i=n),i=isNaN(i)||!i?1:i,e!=null&&e.available||(i=0),i=i>=0?i:1,t.value=i,t.setAttribute("max",n)}}function M(e){const t=r.querySelectorAll(".ecom-product-single__media--slider");if(t.length&&e)t.forEach(function(o){var u,l;const a=o.querySelector(".ecom-product-single__media--featured"),n=a.querySelector('.ecom-product-single__media--image[data-variant_id*="'+e.id+'"]');if(!n||a.getAttribute("data-priority")==="featured"&&!window.location.search.includes("variant="))return;const i=n.dataset.index,c=(l=(u=a==null?void 0:a.swiper)==null?void 0:u.realIndex)!=null?l:0;i!=c&&a&&a.swiper&&a.swiper.slideTo(i,200)});else if(e&&e.featured_image){const o=r.querySelector(".ecom-product-single__media--single");o&&o.querySelector("img").setAttribute("src",e.featured_image.src)}}function A(e){const t=r.querySelectorAll(".ecom-product-single__add-to-cart--submit");t.length&&t.forEach(function(o){e?e.available?(o.removeAttribute("disabled"),o.querySelector(".ecom-add-to-cart-text")&&(e.inventory_quantity<=0&&e.inventory_policy=="continue"?o.querySelector(".ecom-add-to-cart-text").innerHTML=o.dataset.textPreOrder:o.querySelector(".ecom-add-to-cart-text").innerHTML=o.dataset.textAddCart)):(o.setAttribute("disabled","disabled"),o.querySelector(".ecom-add-to-cart-text")&&(o.querySelector(".ecom-add-to-cart-text").innerHTML=o.dataset.textOutstock)):(o.setAttribute("disabled","disabled"),o.querySelector(".ecom-add-to-cart-text")&&(o.querySelector(".ecom-add-to-cart-text").innerHTML=o.dataset.textUnavailable))})}function T(e){if(e&&e.options.length)for(let t=0;t<e.options.length;t++)r.querySelectorAll(`.ecom-product-single__swatch-item[data-option-index="${t}"][data-value="${e.options[t].replace(/'/g,"'").replace(/"/g,'\\"')}"]`).forEach(o=>{o.parentNode.childNodes.forEach(function(a){a.classList&&(a.classList.remove("ecom-box-active"),a.classList.remove("ecom-button-active"),a.classList.remove("ecom-image-active"))}),o.classList.add("ecom-box-active"),o.classList.add("ecom-button-active"),o.classList.add("ecom-image-active")}),r.querySelectorAll(`select.ecom-product-single__swatch-select[data-option-index="${t}"]`).forEach(function(o){o.value=e.options[t]})}function H(e){const t=r.querySelector(".ecom-product-single__countdown");t&&(p||(t.firstElementChild.style.display=""),t.dataset.showOnSale==="true"?e.compare_at_price>e.price&&e.available?(t.style.display="inherit",t.classList.remove("ecom-placeholder-on-builder-mode")):(p&&(t.style.display="none"),t.classList.add("ecom-placeholder-on-builder-mode"),t.classList.add("ecom-force-show"),t.dataset.ecomPlaceholder="This feature not match with your condition",p||(t.firstElementChild.style.display="none")):(t.classList.remove("ecom-placeholder-on-builder-mode"),t.style.display="inherit"))}function $(e){const t=r.querySelectorAll(".ecom-product-single__media-label");e&&t.length&&t.forEach(function(o){const a=o.querySelector("span.ecom-product-single__media-label-sale");a&&(a.style.display=e.compare_at_price&&e.compare_at_price>e.price?"block":"none");const n=o.querySelector(".ecom-product-single__media-label-sold-out");n&&(n.style.display=e.available?"none":"block");const i=o.querySelector(".ecom-product-single__media-label--bage-sale");if(i){const c=i.dataset.labelType;if(e.compare_at_price>e.price){let u=i.dataset.sale,l="";c==="amount"?(l=e.compare_at_price-e.price,i.style.display="inherit",i.innerHTML=u.replace(/\[.*\]/g,window.EComposer.formatMoney(l))):(l=Math.ceil((e.compare_at_price-e.price)*100/e.compare_at_price),i.style.display="inherit",i.innerHTML=u.replace(/\[.*\]/g,Math.floor(l)))}else i.style.display="none"}})}function z(e){const t=r.querySelectorAll(".ecom-product-single__price--regular"),o=r.querySelectorAll(".ecom-product-single__price--sale"),a=r.querySelectorAll(".ecom-product-single__price--badges-pecent-wrapper"),n=r.querySelectorAll(".ecom-product_ground-price"),i=r.querySelector(".ecom-unit-price");r.querySelector(".ecom-ground-price_unit-price");const c=r.querySelectorAll(".ecom-ground-price_unit-price-measurement");e?(r.querySelector("shopify-payment-terms")&&r.querySelector("shopify-payment-terms").setAttribute("variant-id",e.id),o.length&&u(o,e.price),a.length&&a.forEach(function(l){const v=l.dataset.labelType;if(e.compare_at_price&&e.compare_at_price>e.price){let f=Math.round((e.compare_at_price-e.price)/e.compare_at_price*100);v==="amount"&&(f=window.EComposer.formatMoney(e.compare_at_price-e.price)),l.querySelector("span")&&(l.style.display="block",l.querySelector("span").innerText=`-${f}%`)}else l.style.display="none"}),t.length&&t.forEach(function(l){l.innerHTML=window.EComposer.formatMoney(e.compare_at_price),e.compare_at_price>e.price?l.style.display="inherit":l.style.display="none"}),n.length&&(n.forEach(function(l){e.unit_price?(l.style.display="block",i&&(i.style.display="block")):(l.style.display="none",i&&(i.style.display="none")),l&&(l.innerHTML=window.EComposer.formatMoney(e.unit_price))}),c.length&&c.forEach(function(l){e.unit_price_measurement.reference_value!=1?l.innerHTML=e.unit_price_measurement.reference_value+e.unit_price_measurement.reference_unit:l.innerHTML=e.unit_price_measurement.reference_unit}))):(o.length&&u(o,0),t.length&&u(t,0));function u(l,v){l.forEach(function(f){f.innerHTML=window.EComposer.formatMoney(v)})}}function O(e){const t=r.querySelector(".ecom-product-single__variant-attributes--barcode"),o=r.querySelector(".ecom-product-single__variant-attributes--sku");e?(t&&(t.style.removeProperty("display"),t.querySelector(".ecom-product-single__variant-attributes--text").innerHTML=`${e.barcode?e.barcode:"N/A"}`),o&&(o.style.removeProperty("display"),o.querySelector(".ecom-product-single__variant-attributes--text").innerHTML=`${e.sku?e.sku:"N/A"}`)):(t&&(t.style.display="none"),o&&(o.style.display="none"))}function N(e){if(!d||!e)return!1;if(m.dispatchEvent(new Event("change")),d.querySelectorAll(".ecom-product-single__variant-picker--selected-value").forEach(function(n){n.remove()}),!_)return 1;const t=s.querySelectorAll('.selector-wrapper label[for*="ecom-variant-selector"');t.length>0&&t.forEach(n=>{const i=n.textContent;n.childNodes.length&&n.childNodes[0].remove();const c=document.createElement("span");c.className="ecom-product-variant--option-label-text",c.innerText=`${i}${i.endsWith(":")?"":":"}`,n.prepend(c)});const o=e.options.length,a=d.querySelectorAll(".selector-wrapper");for(let n=0;n<o;n++)a[n]&&a[n].querySelectorAll("label").forEach(i=>{const c=document.createElement("span");c.className="ecom-product-single__variant-picker--selected-value",c.innerHTML=e.options[n],i.appendChild(c)}),d.querySelectorAll(`.ecom-product-single__picker--option-label[data-option-index="${n}"]`).forEach(function(i){let c=document.createElement("span");c.classList.add("ecom-product-single__variant-picker--selected-value"),c.innerHTML=e.options[n],i.appendChild(c)})}function S(e){j(e),M(e),A(e),C(e),T(e),z(e),H(e),O(e),N(e),$(e);const t=new CustomEvent("ecomVariantChange",{detail:{variant:e}});r.dispatchEvent(t)}if((!m||!m.classList.contains("ecom-product-single__picker-default-variant"))&&window.EComposer.OptionSelectors){let e=function(){const o=t.product.getVariantById(m.value);o&&S(o)};const t=new window.EComposer.OptionSelectors(m.id,{product:k,onVariantSelected:S,enableHistoryState:h});if(m.addEventListener("swatch",function(o){t.selectVariant(o.target.value)}),m.addEventListener("ecomUpdate",function(){clearTimeout(g),g=setTimeout(e,1e3)}),EComposer.optionsMap={},EComposer.updateOptionsInSelector=function(o){switch(o){case 0:var a="root",n=d.querySelectorAll(".single-option-selector")[0];break;case 1:var a=d.querySelectorAll(".single-option-selector")[0].value,n=d.querySelectorAll(".single-option-selector")[1];break;case 2:var a=d.querySelectorAll(".single-option-selector")[0].value;a+=" / "+d.querySelectorAll(".single-option-selector")[1].value;var n=d.querySelectorAll(".single-option-selector")[2];break}if(!!n){var i=n.value;n.innerHTML="";var c=EComposer.optionsMap[a];if(!!c){for(var u=0;u<c.length;u++){var l=c[u],v=document.createElement("option");v.value=l,v.innerHTML=l,n.append(v)}var f=r.querySelector('.ecom-product-single__swatch-select[data-option-index="'+o+'"]');f&&(f.innerHTML=n.innerHTML),r.querySelectorAll('.ecom-product-single__swatch-item[data-option-index="'+o+'"]').forEach(w=>{var q=w.dataset.value;q&&c.indexOf(q)!==-1?w.classList.remove("ecom-variant-disable"):w.classList.add("ecom-variant-disable")}),c.indexOf(i)!==-1&&(n.value=i),n.dispatchEvent(new Event("change"))}}},EComposer.linkOptionSelectors=function(o){for(var a=0;a<o.variants.length;a++){var n=o.variants[a];if(n.available){if(EComposer.optionsMap.root=EComposer.optionsMap.root||[],EComposer.optionsMap.root.push(n.option1),EComposer.optionsMap.root=EComposer.uniq(EComposer.optionsMap.root),o.options.length>1){var i=n.option1;EComposer.optionsMap[i]=EComposer.optionsMap[i]||[],EComposer.optionsMap[i].push(n.option2),EComposer.optionsMap[i]=EComposer.uniq(EComposer.optionsMap[i])}if(o.options.length===3){var i=n.option1+" / "+n.option2;EComposer.optionsMap[i]=EComposer.optionsMap[i]||[],EComposer.optionsMap[i].push(n.option3),EComposer.optionsMap[i]=EComposer.uniq(EComposer.optionsMap[i])}}}EComposer.updateOptionsInSelector(0),o.options.length>1&&EComposer.updateOptionsInSelector(1),o.options.length===3&&EComposer.updateOptionsInSelector(2);var c=d.querySelectorAll(".single-option-selector")[0];c&&c.addEventListener("change",function(l){return o.options.length>1&&EComposer.updateOptionsInSelector(1),o.options.length===3&&EComposer.updateOptionsInSelector(2),!0});var u=d.querySelectorAll(".single-option-selector")[1];u&&u.addEventListener("change",function(l){return o.options.length===3&&EComposer.updateOptionsInSelector(2),!0})},window.MutationObserver&&r&&this.settings.hasOwnProperty("hide_unavaiable_variant")&&this.settings.hide_unavaiable_variant){typeof b=="object"&&typeof b.disconnect=="function"&&b.disconnect();var B={childList:!0,subtree:!0},b=new MutationObserver(function(){EComposer.linkOptionSelectors(k),b.disconnect()});b.observe(r,B)}}if(!this.settings.hasOwnProperty("show_option_selected")&&!this.settings.show_option_selected){const e=s.querySelectorAll('.selector-wrapper label[for*="ecom-variant-selector"');e.length>0&&e.forEach(t=>{const o=t.textContent;t.childNodes.length&&t.childNodes[0].remove();const a=document.createElement("span");a.className="ecom-product-variant--option-label-text",a.innerText=`${o}:`,t.prepend(a)})}r.querySelectorAll(".ecom-product-single__swatch-item[data-option-index]").forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const o=r.querySelector(".ecom-product-single__media--featured");o&&o.removeAttribute("data-priority");const a=this;if(this.classList.contains("ecom-button-active")&&this.classList.contains("ecom-image-button"))return;this.parentNode.childNodes.forEach(function(i){i.classList&&(i.classList.remove("ecom-button-active"),i.classList.remove("ecom-image-button"))}),this.classList.add("ecom-button-active"),this.classList.add("ecom-image-button");const n=this.dataset.optionIndex;r.querySelectorAll("select#"+m.id+"-option-"+n).forEach(function(i){i.value=a.dataset.value,i.dispatchEvent(new Event("change"))})})}),r.querySelectorAll(".ecom-product-single__swatch-select").forEach(function(e){e.addEventListener("change",function(t){const o=r.querySelector(".ecom-product-single__media--featured");o&&o.removeAttribute("data-priority");let a=t.target.getAttribute("data-option-index"),n=t.target.value;r.querySelectorAll("select#"+m.id+"-option-"+a).forEach(function(i){i.value=n,i.dispatchEvent(new Event("change"))})})})}},liquids(){const s="script",p={wrapper_classes:{code:`{% if product.has_only_default_variant%}${this.exporting?"":" ecom-placeholder-on-builder-mode ecom-force-show"} ecom-product-single__variant-picker--only-default{% endif%}`,preview:""},assign_variant:{code:`
                        {% assign ecom_has_variant_picker = true%}
                        {% assign variant_selected = product.selected_or_first_available_variant%}
                        `,preview:""},options:{code:`
                        <select name="id" class="ecom-product-single-select-id{%-if product.has_only_default_variant-%}ecom-product-single__picker-default-variant{% endif %}" data-product-id="{{product.id}}" data-json-product="product-json-{{product.id}}-${this.element_id}" id="ecom-variant-selector-{{product.id}}-${this.element_id}">
                            {% for variant in product.variants%}
                                <option value="{{variant.id}}" {% if variant_selected.id == variant.id %} selected="selected" {% endif %}>{{variant.title}}</option>
                            {% endfor %}
                        </select>
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
                        {%- capture ecom_product_json -%}
                        {
                            "id":  {{ product.id }},
                            "title":  {{ product.title | json }},
                            "handle":  {{ product.handle | json }},
                            "price":  {{ product.price| json }},
                            "price_min":  {{ product.price_min| json }},
                            "price_max":  {{ product.price_max| json }},
                            "available":  {{ product.available | json }},
                            "price_varies":  {{ product.price_varies| json }},
                            "compare_at_price":  {{ product.compare_at_price| json }},
                            "compare_at_price_min":  {{ product.compare_at_price_min| json }},
                            "compare_at_price_max":  {{ product.compare_at_price_max| json }},
                            "compare_at_price_varies":  {{ product.compare_at_price_varies| json }},
                            "variants": [
                                {%- for variant in product.variants -%}
                                {
                                    "id":  {{ variant.id }},
                                    "title": " {{ variant.option1 | handleize }}{%- if product.options.size == 2 -%} / {%- endif -%} {{ variant.option2 | handleize }}{%- if product.options.size == 3 -%} / {%- endif -%} {{ variant.option3 | handleize }}",
                                    "option1":  {{ variant.option1  | json }},
                                    "option2": {%- if product.options.size == 1 -%}null{%-else-%} {{ variant.option2  | json }}{%-endif-%},
                                    "option3": {%- if product.options.size == 1 or product.options.size == 2 -%}null{%-else-%} {{ variant.option3  | json }}{%-endif-%},
                                    "sku":  {{ variant.sku | json }},
                                    "requires_shipping":  {{ variant.requires_shipping }},
                                    "taxable":  {{ variant.taxable |json }},
                                    "selling_plan_allocations":{%- if variant.selling_plan_allocations and variant.selling_plan_allocations.size > 0 -%}[{% for allocation in variant.selling_plan_allocations %}{"price":{{allocation.price}},"selling_plan":{"id":{{allocation.selling_plan.id}}, "name":{{allocation.selling_plan.name | json }} } }{%unless forloop.last%},{% endunless%}{%- endfor -%}]{%- else -%}null{%- endif -%},
                                    "featured_image": {%- if variant.image.id != blank -%}{
                                        "id":  {{ variant.image.id | json }},
                                        "product_id":  {{ product.id | json }},
                                        "width":  {{ variant.image.width | json }},
                                        "height":  {{ variant.image.height | json }},
                                        "src":  {{ variant.image.src | json }},
                                        "position": {{ variant.image.position }}
                                    }{%- else-%}null{%-endif-%},
                                    "available":  {{ variant.available }},
                                    "public_title": " {{ variant.option1 | handleize }}{%- if product.options.size == 2 -%} / {%- endif -%} {{ variant.option2 | handleize }}{%- if product.options.size == 3 -%} / {%- endif -%} {{ variant.option3 | handleize }}",
                                    "options":   {{ variant.options | json }},
                                    "price":  {{ variant.price| json }},
                                    "weight":  {{ variant.weight| json }},
                                    "unit_price": {{ variant.unit_price | json }},
                                    "unit_price_measurement": {
                                        "measured_type": {{ variant.unit_price_measurement.measured_type | json }},
                                        "quantity_value": {{ variant.unit_price_measurement.quantity_value | json }},
                                        "quantity_unit": {{ variant.unit_price_measurement.quantity_unit | json }},
                                        "reference_value": {{ variant.unit_price_measurement.reference_value | json }},
                                        "reference_unit": {{ variant.unit_price_measurement.reference_unit | json }}
                                    },
                                    "compare_at_price":  {{ variant.compare_at_price | json }},
                                    "inventory_quantity":  {{ variant.inventory_quantity | json }},
                                    "inventory_management":  {{ variant.inventory_management | json }},
                                    "inventory_policy":  {{ variant.inventory_policy | json }},
                                    "next_incoming_date": {% if variant.next_incoming_date %}{{variant.next_incoming_date | time_tag | json }}{% else%}null{% endif %},
                                    "barcode":  {{ variant.barcode | json }}
                                }{%- if forloop.last == false -%},{%- endif -%}
                                {%- endfor -%}
                            ],
                            "featured_image":  {{ product.featured_image | json }},
                            "options": [
                                {%- for option in product.options -%}
                                {{ option | json }}{%- if forloop.last == false -%},{%- endif -%}
                                {%-endfor -%}
                            ]
                        }
                        {%- endcapture -%}
                        <${s} type="application/json" id="product-json-{{product.id}}-${this.element_id}">
                                {{ ecom_product_json}}
                            </${s}>`,preview:`<${s} id="product-json-preview">{}</${s}>`}};return this.swatch_type==="image"?p.swatch_images={code:`
                        {%- capture swatch_option  -%}${this.lang(this.data.settings.option,"product_option_swatch")}{%- endcapture-%}
                        {% unless product.has_only_default_variant %}
                            {%- for option in product.options_with_values -%}
                                {%- if option.name == swatch_option -%}

                                    {% assign current_option = option %}
                                    {% assign option_index = current_option.position | minus: 1 %}
                                    <div class="ecom-product-single__picker-main ecom-product-single__picker-option-{{current_option.name | handleize }}">
                                        <span class="ecom-product-single__picker-main-label ecom-product-single__picker--option-label" data-option-index="{{current_option.position | minus: 1}}">
                                            <span class="ecom-product-variant--option-label-text">{{ current_option.name }}</span>
                                        </span>
                                        <ul class="ecom-product-single__picker-images-list">
                                            {%- assign values = ""  -%}
                                            {%- assign index = current_option.position | prepend:  'option' -%}
                                            {%- for variant in product.variants -%}
                                                {%- assign option_value = variant[index] -%}
                                                {%- assign option_value_downcase = variant[index] | downcase -%}
                                                {%- if values != ""%}
                                                    {%- assign tmp = values | split: '|' -%}
                                                    {%- if tmp contains option_value_downcase  -%} {%- continue-%}{%- endif -%}
                                                    {%- assign values = values  | append:   '|' | append: option_value_downcase -%}
                                                {%- else -%}
                                                    {%- assign values = option_value_downcase -%}
                                                {%- endif -%}
                                                <li data-option-index="{{ option_index }}" class="ecom-image-default ecom-product-single__swatch-item ecom-product-single__picker-images-item  {% if option_value == variant_selected[index] %}ecom-image-active{% endif %}" data-value="{{ option_value | escape }}">
                                                    <img src="{{ variant | img_url: "120x120", crop: 'center' }}" alt="{{ option_value }}" />
                                                </li>
                                            {%- endfor -%}
                                        </ul>
                                    </div>

                                {% continue%}
                                {%-endif-%}
                                {%- assign index = option.position | prepend:  'option' -%}
                                {% assign option_index = option.position | minus: 1 %}
                                    <div class="ecom-product-single__picker-option-{{option.name | handleize }}">
                                        <span class="ecom-product-single__picker-${this.option_layout}-label ecom-product-single__picker--option-label" data-option-index="{{option_index}}">
                                            <span class="ecom-product-variant--option-label-text">{{option.name}}</span>
                                        </span>
                                        ${this.option_layout==="radio"?`
                                            <ul class="ecom-product-single__picker-${this.option_layout}-list">
                                                {% for value in option.values %}
                                                    <li class="ecom-product-single__swatch-item ecom-product-single__picker-${this.option_layout}-list-item {% if value == variant_selected[index] %}ecom-button-active{% endif %}" data-option-index="{{ option_index }}" data-value="{{ value | escape }}">
                                                        {{value}}
                                                    </li>
                                                {% endfor %}
                                            </ul>
                                        `:`
                                            <select class="ecom-product-single__swatch-select ecom-product-single__picker-${this.option_layout}-list" data-option-index="{{ option_index }}">
                                                {% for value in option.values %}
                                                    <option value="{{value | escape }}" {% if value == variant_selected[index] %}selected="selected"{% endif %}>
                                                        {{value}}
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
                        `}:this.swatch_type==="color"?p.swatch_colors={code:`
                        {%- capture swatch_option  -%}${this.lang(this.data.settings.option,"product_option_swatch")}{% endcapture%}
                        {%liquid
                            assign colors = shop.metafields.ecomposer.colors
                        %}
                        {% unless product.has_only_default_variant %}

                            {%- for option in product.options_with_values -%}
                                {%- if option.name == swatch_option -%}
                                    {% assign variant_selected = product.selected_or_first_available_variant %}
                                    {% assign current_option =  option %}
                                    {% assign option_index = current_option.position | minus: 1 %}
                                    <div class="ecom-product-single__picker-main ecom-product-single__picker-option-{{option.name | handleize }}">
                                        <span class="ecom-product-single__picker-main-label ecom-product-single__picker--option-label" data-option-index="{{current_option.position | minus: 1}}">
                                            <span class="ecom-product-variant--option-label-text">{{ current_option.name }}</span>
                                        </span>
                                        <ul class="ecom-product-single__picker-colors-list">
                                            {%- assign index = current_option.position | prepend:  'option' -%}
                                            {% assign value_key_selected = variant_selected[index] | downcase %}
                                            {%- for value in current_option.values -%}
                                                {% assign value_key = value | downcase | strip %}
                                                <li data-option-index="{{ option_index }}" class="ecom-product-single__swatch-item ecom-product-single__picker-colors-item  {% if value_key == value_key_selected %}ecom-box-active{% endif %}" data-value="{{ value | escape }}">
                                                    <span {% if colors and colors.value[value_key] != blank  %} style="{{colors.value[value_key]}}"{% else %} class="ecom-product-single__picker-colors--no-color" ${this.exporting===!1?'data-ecom-tooltip="Please set the color in Custom Color Swatches extension"':""} {% endif %}>
                                                    </span>
                                                </li>
                                            {%- endfor -%}
                                        </ul>
                                    </div>
                                {% continue%}
                                {%-endif-%}
                                {%- assign index = option.position | prepend:  'option' -%}
                                {% assign option_index = option.position | minus: 1 %}
                                    <div class="ecom-product-single__picker-option-{{option.name | handleize }}">
                                        <span class="ecom-product-single__picker-${this.option_layout}-label ecom-product-single__picker--option-label" data-option-index="{{option_index}}">
                                            <span class="ecom-product-variant--option-label-text">{{option.name}}</span>
                                        </span>
                                        ${this.option_layout==="radio"?`
                                            <ul class="ecom-product-single__picker-${this.option_layout}-list">
                                                {% for value in option.values %}
                                                    <li class="ecom-product-single__swatch-item ecom-product-single__picker-${this.option_layout}-list-item {% if value == variant_selected[index] %}ecom-button-active{% endif %}" data-option-index="{{ option_index }}" data-value="{{ value | escape }}">
                                                        {{value}}
                                                    </li>
                                                {% endfor %}
                                            </ul>
                                        `:`
                                            <select class="ecom-product-single__swatch-select ecom-product-single__picker-${this.option_layout}-list" data-option-index="{{ option_index }}">
                                                {% for value in option.values %}
                                                    <option value="{{value | escape }}" {% if value == variant_selected[index] %}selected="selected"{% endif %}>
                                                        {{value}}
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
                        `}:this.swatch_type==="radio"&&(p.swatch_radios={code:`
                        {% unless product.has_only_default_variant%}
                            {%- for option in product.options_with_values -%}
                                {%- assign index = option.position | prepend:  'option' -%}
                                {% assign option_index = option.position | minus: 1 %}
                                    <div class="ecom-product-single__picker-option-{{option.name | handleize }}">
                                        <span class="ecom-product-single__picker-${this.swatch_type}-label ecom-product-single__picker--option-label" data-option-index="{{option_index}}">
                                            <span class="ecom-product-variant--option-label-text">{{option.name}}</span>
                                        </span>
                                            <ul class="ecom-product-single__picker-${this.swatch_type}-list">
                                                {% for value in option.values %}
                                                    <li class="ecom-product-single__swatch-item ecom-product-single__picker-${this.swatch_type}-list-item {% if value == variant_selected[index] %}ecom-button-active{% endif %}" data-option-index="{{ option_index }}" data-value="{{ value | escape }}">
                                                        {{value}}
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
                        `}),p},settings(){return[{params:[{type:"popup",label:"Picker type",name:"type",value:"dropdown",options:{type:"dropdown",default:!1,values:{dropdown:"Dropdown",image:"Image picker",color:"Color picker",radio:"Radio button"}}},{type:"paragraph",name:"color_description",content:"Set your color [Here](#extensions/3)",options:{visible:function(s){return s.type==="color"}}},{type:"text",label:"Option show as swatch",name:"option",value:"Color",placeholder:"Eg: Color",options:{toolbar:!1,visible:function(s){return s&&s.type&&["image","color"].includes(s.type)}}},{type:"popup",label:"Other options as",name:"option_layout",value:"dropdown",options:{type:"dropdown",default:!1,visible:{keep_data:!1,condition:function(s){return s&&s.type&&["image","color"].includes(s.type)}},values:{dropdown:"Dropdown",radio:"Radio"}}},{type:"toggle",label:"Hide dropdown arrow",name:"hide_dropdown_arrow",options:{oneline:!0,values:{on:{label:"Show",value:!0},off:{label:"Hide",value:!1}},visible:{keep_data:!1,condition:function(s){return(s==null?void 0:s.type)==="dropdown"||(s==null?void 0:s.option_layout)==="dropdown"}}}},{type:"toggle",label:"Disable unavailable and sold out variants",name:"hide_unavaiable_variant",options:{oneline:!0,values:{on:{label:"Show",value:!0},off:{label:"Hide",value:!1}}}},{type:"toggle",label:"Show option selected",name:"show_option_selected",options:{oneline:!0,values:{on:{label:"Show",value:!0},off:{label:"Hide",value:!1}}}},{type:"toggle",label:"Show option name",name:"show_option_name",options:{oneline:!0,responsive:!0,values:{on:{label:"Show",value:"inline-block"},off:{label:"Hide",value:"none"}}},css:{selector:" .ecom-product-variant--option-label-text",properties:{display:""}}},{type:"toggle",label:"History state on URL",name:"history_state",options:{oneline:!0,values:{on:{label:"Show",value:!0},off:{label:"Hide",value:!1}}}},{name:"column_gap",label:"Horizontal spacing",type:"number",options:{min:0,max:100,responsive:!0,visible:{keep_data:!0,condition:s=>s.type!=="dropdown"}},css:{properties:{"column-gap":"%value%px"},selector:" .ecom-product-single__picker-images-list, .ecom-product-single__picker-colors-list, .ecom-product-single__picker-radio-list"}},{name:"row_gap",label:"Vertical spacing",type:"number",options:{min:0,max:100,responsive:!0,visible:{keep_data:!0,condition:s=>s.type!=="dropdown"}},css:{properties:{"row-gap":"%value%px"},selector:" .ecom-product-single__picker-images-list, .ecom-product-single__picker-colors-list, .ecom-product-single__picker-radio-list"}}]}]},requestShopifyType(){return{shopify_type:"product"}},swatch_type(){var p;const s=this.data&&this.data.settings&&"type"in this.data.settings?(p=this.data.settings)==null?void 0:p.type:"dropdown";return["image","color","radio"].includes(s)&&this.data&&this.data.settings&&"option"in this.data.settings?s:"dropdown"},option_layout(){var s,p,_;return(_=(p=(s=this.data)==null?void 0:s.settings)==null?void 0:p.option_layout)!=null?_:"dropdown"},css(){return`
                    .ecom-product-single__variant-picker--options{
                        align-items:flex-start;
                        display:flex;
                        flex-direction:column;
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
                        // white-space: nowrap;
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
                `},default(){return{settings:{type:"dropdown",option:"Color",show_option_selected:!0,show_option_name:"inline-block",column_gap:15,row_gap:10},style:{general:{"align-items":"flex-start"},variant_name:{spacing:{margin:{bottom:"5px",top:"10px"}},textTypography:{title:"New Item",value:{},"font-family":{},"font-size":"17px","font-weight":"500"},textColor:"#111"},variant_value:{textTypography:{title:"New Item",value:{},"font-family":{},"font-size":"15px","font-weight":"500"},textColor:"#616161"},dropdown:{"text-align":"left",width:"120px",spacing:{padding:{top:"8px",left:"8px",bottom:"8px",right:"8px"},margin:{right:"0px",bottom:"5px",top:"0px",left:"0px"}},tab:"focus",typo:{"global-typography":"m5lJMKLv"},border:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#8787"},borderRadius:{top:"3px",left:"3px",bottom:"3px",right:"3px"},outline:{outline:{"outline-style":"none"}},boxShadow:{"box-shadow":{blur:"0px",position:"outline",color:"rgba(255, 0, 0, 0)"}},borderFocusMode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#c2c2c2"}},image:{tab:"active",imageWidth:"60px",iamgeBorderactivemode:{"border-style":"solid","border-color":"#0e7490","border-width":{top:"2px",left:"2px",bottom:"2px",right:"2px"}},imageWidth__mobile:"20%",spacing:{margin:{right:"0px",bottom:"0px"},padding:{bottom:"0px",top:"0px"}},imageBorderRadiusnormalmode:{right:"5px",top:"5px",left:"5px",bottom:"5px"},iamgeBordernormalmode:{"border-style":"solid","border-width":{top:"2px",left:"2px",bottom:"2px",right:"2px"},"border-color":"#999999"},imageAnimation:"grow",imageTransition:300,imageHeight:"60px",imageObjectFit:"cover"},button_image_radio:{tab:"active",buttonTypography:{"global-typography":"HH699X"},buttonColornormalmode:"#666666",buttonBordernormalmode:{"border-style":"solid","border-width":{top:"2px",left:"2px",bottom:"2px",right:"2px"},"border-color":"#6e6e6e"},spacing:{margin:{right:"0px",top:"0px",left:"0px",bottom:"0px"},padding:{top:"5px",left:"5px",bottom:"5px",right:"5px"}},buttonBorderhovermode:{"border-style":"solid","border-width":{top:"2px",left:"2px",bottom:"2px",right:"2px"},"border-color":"#0e7490"},transitions:{transitions:{delay:"100ms",duration:"300ms",timing:"ease-in-out"}},buttonBorderactivemode:{"border-style":"solid","border-width":{top:"2px",left:"2px",bottom:"2px",right:"2px"},"border-color":"#0e7490"}},button_radio:{tab:"normal",min_width:"40px"}},advanced:{spacing:{padding:{left:"5px",top:"5px",bottom:"5px",right:"5px"},margin:{right:"0px",top:"0px",left:"0px",bottom:"0px"}}}}}},methods:{style(){var p,_,h,m,r,d,g,y;const s=[{group_alias:"box",options:{group_title:"General",group_name:"general",selector:" .ecom-product-single__variant-picker-container"},modify:{params:{alias:"align-items",options:{label:"Alignment",css:{selector:" .ecom-product-single__variant-picker--options, .ecom-product-single__variant-picker--main, .ecom-product-single__picker-radio-list",properties:{"align-items":"","justify-content":""}}}}}},{group_alias:"text:spacing",options:{group_title:"Variant name",group_name:"variant_name",selector:" .ecom-product-single__picker-main-label .ecom-product-variant--option-label-text, .ecom-product-single__picker-radio-label .ecom-product-variant--option-label-text, .ecom-product-single__picker-dropdown-label .ecom-product-variant--option-label-text, .selector-wrapper .ecom-product-variant--option-label-text"},modify:{remove:{index:0,length:1}}}];return(p=this.data.settings)!=null&&p.show_option_selected&&s.push({group_alias:"text:spacing",options:{group_title:"Variant value",group_name:"variant_value",selector:" .ecom-product-single__variant-picker--selected-value"},modify:{remove:{index:0,length:1}}}),((_=this.data.settings)==null?void 0:_.type)==="image"&&(s.push({group_alias:"image:active",options:{group_title:"Variant Image",group_name:"image",selector:" .ecom-product-single__picker-images-item"},modify:{params:{position:30,fields:[{type:"line"},{alias:"spacing",options:{css:{selector:"root .ecom-product-single__picker-images-item"}}}]}}}),((h=this.data.settings)==null?void 0:h.option_layout)==="radio"&&s.push({group_alias:"button:active",options:{group_title:"Radio Button",group_name:"button_image_radio",selector:" .ecom-product-single__picker-radio-list-item"}})),((m=this.data.settings)==null?void 0:m.type)==="color"&&(s.push({group_alias:"box:active",options:{group_title:"Color picker",group_name:"button",selector:" .ecom-product-single__picker-colors-item"},modify:{params:[{position:0,fields:[{name:"width",label:"Width",type:"number",options:{responsive:!0,units:{px:{min:10,max:100}}},css:{selector:" span",properties:{width:""}}},{name:"height",label:"Height",type:"number",options:{responsive:!0,units:{px:{min:10,max:100}}},css:{selector:" span",properties:{height:""}}}]},{position:30,fields:[{type:"line"},{alias:"spacing"}]}]}}),((r=this.data.settings)==null?void 0:r.option_layout)==="radio"&&s.push({group_alias:"button:active",options:{group_title:"Radio Button",group_name:"button_color_radio",selector:" .ecom-product-single__picker-radio-list-item"},modify:{params:[{position:3,fields:[{name:"min_width",label:"Min Width",type:"number",options:{responsive:!0,units:{px:{min:0,max:200}}},css:{properties:{"min-width":""}}}]}]}})),((d=this.data.settings)==null?void 0:d.type)==="radio"&&s.push({group_alias:"button:active",options:{group_title:"Radio button",group_name:"button_radio",selector:" .ecom-product-single__picker-radio-list-item"},modify:{params:[{position:3,fields:[{name:"min_width",label:"Min Width",type:"number",options:{responsive:!0,units:{px:{min:0,max:200}}},css:{properties:{"min-width":""}}}]}]}}),(((g=this.data.settings)==null?void 0:g.type)==="dropdown"||((y=this.data.settings)==null?void 0:y.option_layout)==="dropdown")&&s.push({group_alias:"input",options:{group_title:"Dropdown",group_name:"dropdown",selector:" .ecom-product-single__swatch-select, .single-option-selector"},modify:{remove:{index:3,length:1}}}),s}}},J={class:"ecom-element ecom-product-single ecom-product-single__variant-picker"},G=["data-picker-type","data-ecom-placeholder"],K=["innerHTML"],Q=["innerHTML"],X=["innerHTML"];function Y(s,p,_,h,m,r){var g;const d=F("Liquid");return W(),R("div",J,[x("div",{class:E(["ecom-product-single__variant-picker-wrapper",{ecom_not_hide_dropdown_arrow:!((g=_.data.settings)!=null&&g.hide_dropdown_arrow)}])},[x("div",{class:E(["ecom-product-single__variant-picker-container",s.liquid("wrapper_classes")]),"data-picker-type":r.swatch_type,"data-ecom-placeholder":s.exporting?"":"This product has only default variant"},[U(d,{data:r.liquids.assign_variant.code},null,8,["data"]),x("div",{class:"ecom-product-single__variant-picker--main",innerHTML:s.liquid("swatch_"+r.swatch_type+"s")},null,8,K),x("div",{class:"ecom-product-single__variant-picker--options",innerHTML:s.liquid("options")},null,8,Q),x("div",{class:"ecom-product-single__variant-picker--json",innerHTML:s.liquid("product_json")},null,8,X)],10,G)],2)])}const se=P(L,[["render",Y]]);L.__docgenInfo={exportName:"default",displayName:"VariantPicker",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/VariantPicker.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{se as default};
//# sourceMappingURL=VariantPicker.7ddea252.js.map
