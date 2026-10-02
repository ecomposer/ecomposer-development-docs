import{_ as O,L as A,E as N,J as U}from"./preview.95a7df14.js";import{v as V,o as y,a as J,z,E as F,y as B}from"./vue.esm-bundler.b9dec9d9.js";import"./chunk-KSYMO6G6.f719e32d.js";import"./index.e850844b.js";import"./iframe.048ad53f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.f037b798.js";const L={name:"EstimateShipping",mixins:[A,N,U],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){var c,p;return{estimate_shipping:{code:`
                        <script src="//{{shop.domain}}/services/javascripts/countries.js"><\/script>
                        <div id="ecom-cart__estimate-shipping-calculator">
                            <div class="ecom-cart__estimate-shipping-wrapper">
                                <div class="ecom-cart__estimate-shipping-fields">
                                    <div class="ecom-cart__estimate-shipping-field">
                                        <label for="ecom-cart__estimate-shipping-address_country">${this.lang(this.data.settings.country_text,"estimate_shipping_country_text")}</label>
                                        <select id="ecom-cart__estimate-shipping-address_country" name="address[country]" data-default="{% if shop.customer_accounts_enabled and customer %}{{ customer.default_address.country }}{% elsif settings.shipping_calculator_default_country != '' %}{{ settings.shipping_calculator_default_country }}{% endif %}">{{ country_option_tags }}</select>
                                    </div>
                                    <div class="ecom-cart__estimate-shipping-field" id="ecom-cart__estimate-shipping-address_province_container" style="display:none;">
                                        <label for="ecom-cart__estimate-shipping-address_province" id="ecom-cart__estimate-shipping-address_province_label">${this.lang(this.data.settings.province_text,"estimate_shipping_province_text")}</label>
                                        <select id="ecom-cart__estimate-shipping-address_province" name="address[province]" data-default="{% if shop.customer_accounts_enabled and customer and customer.default_address.province != '' %}{{ customer.default_address.province }}{% endif %}"></select>
                                    </div>
                                    <div class="ecom-cart__estimate-shipping-field">
                                    <label for="ecom-cart__estimate-shipping-address_zip">${this.lang(this.data.settings.zip_postal_text,"zip_postal_text")}</label>
                                        <input type="text" id="ecom-cart__estimate-shipping-address_zip" name="address[zip]"{% if shop.customer_accounts_enabled and customer %} value="{{ customer.default_address.zip }}"{% endif %} />
                                    </div>
                                    <div class="ecom-cart__estimate-shipping-field ecom-cart__estimate-shipping-field--button">
                                        <button type="button" class="ecom-cart__estimate-shipping-get-rates btn button" value="${this.lang(this.data.settings.submit_label,"cart_shipping_submit_label")}" >
                                            ${this.lang(this.data.settings.submit_label,"cart_shipping_submit_label")}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            ${!this.exporting&&((c=this.data.settings)==null?void 0:c.show_success)?'<p id="ecom-cart__estimate-shipping-rates-feedback" class="ecom-cart__estimate-shipping-success">Shipping rate starts at: <span class="ecom-cart__estimate-shipping-price">$30.00</span></p>':""}
                            ${!this.exporting&&((p=this.data.settings)==null?void 0:p.show_error)?'<p id="ecom-cart__estimate-shipping-rates-feedback" class="ecom-cart__estimate-shipping-error">Invalid Zip/postal code</p>':""}
                            <div id="ecom-cart__estimate-shipping-wrapper-response"></div>

                            </div>


                    `,preview:`
                            <div class="ecom-skeleton-item">
                                <div class="ecom-skeleton-col-12">
                                    <div class="ecom-skeleton-row">
                                        <div class="ecom-skeleton-col-3 ecom-skeleton-big"></div>
                                        <div class="ecom-skeleton-col-1 ecom-skeleton-big ecom-skeleton-empty"></div>
                                        <div class="ecom-skeleton-col-3 ecom-skeleton-big"></div>
                                        <div class="ecom-skeleton-col-1 ecom-skeleton-big ecom-skeleton-empty"></div>
                                        <div class="ecom-skeleton-col-3 ecom-skeleton-big"></div>
                                    </div>
                                    <div class="ecom-skeleton-row">
                                        <div class="ecom-skeleton-col-6 ecom-skeleton-big"></div>
                                        <div class="ecom-skeleton-col-1 ecom-skeleton-big ecom-skeleton-empty"></div>
                                        <div class="ecom-skeleton-col-4 ecom-skeleton-big"></div>
                                        <div class="ecom-skeleton-col-1 ecom-skeleton-big ecom-skeleton-empty"></div>
                                    </div>
                                </div>
                            </div>
                        `}}},settings(){return[{group_title:this.$t("general"),params:[{type:"text",label:this.$t("submit_button_label"),name:"submit_label",placeholder:this.$t("calculate_shipping")},{type:"text",label:this.$t("calculating_button_label"),name:"submit_label_calculating",placeholder:this.$t("calculating")},{type:"text",label:this.$t("country_text"),name:"country_text",placeholder:this.$t("country")},{type:"text",label:this.$t("province_text"),name:"province_text",placeholder:this.$t("province"),description:this.$t("only_show_for_certain_countries")},{type:"text",label:this.$t("zip_postal_code_text"),name:"zip_postal_text",placeholder:this.$t("zip_postal_code")},{type:"toggle",label:this.$t("preview_invalid_zip_postal_code"),name:"show_error",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"text",label:this.$t("shipping_rate_text_after_calculated"),name:"rate_price_text",placeholder:this.$t("shipping_rate_starts_at_price"),description:this.$t("real_shipping_rate_will_replace_price_after_calculated")},{type:"toggle",label:this.$t("preview_shipping_rate_after_calculated"),name:"show_success",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"text",label:this.$t("text_when_do_not_ship_to_a_location"),name:"do_not_ship_text",placeholder:this.$t("we_do_now_ship_to_this_destination")},{type:"number",name:"gap",label:this.$t("gap"),options:{responsive:!0,units:{px:{min:0,max:100}}},css:{selector:" .ecom-cart__estimate-shipping-fields",properties:{gap:""}}}]}]},javascript(){return function(){if(!this.$el||!this.settings)return;var c=this.isLive;const p={have:this.settings.rate_price_text||"",dontHave:this.settings.do_not_ship_text||""};(typeof window.Shopify>"u"||!window.Shopify)&&(window.Shopify=window.Shopify||{}),window.Shopify.CountryProvinceSelector||(window.Shopify.CountryProvinceSelector=function(e,t,i){this.countryEl=document.getElementById(e),this.provinceEl=document.getElementById(t),this.provinceContainer=document.getElementById(i.hideElement||t),window.Shopify.addListener(this.countryEl,"change",Shopify.bind(this.countryHandler,this)),this.initCountry(),this.initProvince()},window.Shopify.CountryProvinceSelector.prototype={initCountry:function(){var e=this.countryEl.getAttribute("data-default");window.Shopify.setSelectorByValue(this.countryEl,e),this.countryHandler()},initProvince:function(){var e=this.provinceEl.getAttribute("data-default");e&&this.provinceEl.options.length>0&&window.Shopify.setSelectorByValue(this.provinceEl,e)},countryHandler:function(e){var t=this.countryEl.options[this.countryEl.selectedIndex],i=t.getAttribute("data-provinces"),s=JSON.parse(i);if(this.clearOptions(this.provinceEl),s&&s.length==0)this.provinceContainer.style.display="none";else{for(var o=0;o<s.length;o++){var t=document.createElement("option");t.value=s[o][0],t.innerHTML=s[o][1],this.provinceEl.appendChild(t)}this.provinceContainer.style.display=""}},clearOptions:function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},setOptions:function(e,t){for(var i=0,s=t.length;i<t.length;i++){var o=document.createElement("option");o.value=t[i],o.innerHTML=t[i],e.appendChild(o)}}},window.Shopify.bind=function(e,t){return function(){return e.apply(t,arguments)}},window.Shopify.addListener=function(e,t,i){e.addEventListener?e.addEventListener(t,i,!1):e.attachEvent("on"+t,i)},window.Shopify.setSelectorByValue=function(e,t){for(var i=0,s=e.options.length;i<s;i++){var o=e.options[i];if(t==o.value||t==o.innerHTML)return e.selectedIndex=i,i}});let _=function(e){let t="";if(e.rates[0]){let i=new Intl.NumberFormat("en-US",{style:"currency",currency:e.rates[0].currency}).format(e.rates[0].price),s=p.have.replace("{{price}}",`<span class="ecom-cart__estimate-shipping-price">${i}</span>`);t=`
                              <p id="ecom-cart__estimate-shipping-rates-feedback"  class="${e.success?"ecom-cart__estimate-shipping-success":"ecom-cart__estimate-shipping-error"}">
                                  ${e.success&&e.rates&&e.rates[0].price&&e.rates[0].currency?s:p.dontHave}
                                  </p>`}else t=`<p id="ecom-cart__estimate-shipping-rates-feedback" class="ecom-cart__estimate-shipping-success">${p.dontHave}</p>`;return t};(typeof window.EComposer>"u"||!window.EComposer)&&(window.EComposer=window.EComposer||{}),typeof window.EComposer.Cart>"u"&&(window.EComposer.Cart={});let n=this.$el.querySelector(".ecom-cart__estimate-shipping-container");if(!n)return;var a={submitButton:n.dataset.submitButtonText||"Calculate shipping",submitButtonDisabled:n.dataset.submitDisableButtonText||"Calculating...",wrapperId:"ecom-cart__estimate-shipping-wrapper-response",customerIsLoggedIn:!!window.EComposer.customer,moneyFormat:window.EComposer.money_format};let v=function(e){var t=n.querySelectorAll("#"+a.wrapperId);t.length&&(t[0].innerHTML=_(e))},l=function(){let e=n.querySelector(".ecom-cart__estimate-shipping-get-rates");!e||(e.classList.remove("disabled"),e.removeAttribute("disabled"),e.innerHTML=a.submitButton)},j=function(){let e=n.querySelector(".ecom-cart__estimate-shipping-get-rates");!e||(e.classList.add("disabled"),e.setAttribute("disabled","disabled"),e.innerHTML=a.submitButtonDisabled)},q=function(e){window.fetch("/cart/prepare_shipping_rates.json",{method:"POST",body:JSON.stringify({shipping_address:e}),headers:{"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(t){t==null?I():u(t)}).catch(function(t){u(t)})},I=function(e){window.fetch("/cart/async_shipping_rates.json",{method:"GET"}).then(function(t){return t.json()}).then(function(t){let i=Object.assign({},t.shipping_rates);D(i)}).catch(function(t){u(t)})},u=function(e,t){if(t==="error"&&c)return window.alert("This feature only work on live site"),l(),1;let i=n.querySelector("#"+a.wrapperId);!i||(e.zip&&e.zip[0]&&(i.innerHTML=`<p id="ecom-cart__estimate-shipping-rates-feedback" class="ecom-cart__estimate-shipping-error">${e.zip[0]}</p>`),l(),i.style.display="block")},D=function(e,t){l(),v({rates:e,success:!0});let i=n.querySelector("#"+a.wrapperId);!i||(i.style.display="block")},H=function(e){function t(r,m){return typeof r>"u"?m:r}function i(r,m,g,f){if(m=t(m,2),g=t(g,","),f=t(f,"."),isNaN(r)||r==null)return 0;r=(r/100).toFixed(m);var b=r.split("."),P=b[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+g),M=b[1]?f+b[1]:"";return P+M}if(typeof window.EComposer.formatMoney=="function")return window.EComposer.formatMoney(e,a.moneyFormat);typeof e=="string"&&(e=e.replace(".",""));var s="",o=/\{\{\s*(\w+)\s*\}\}/,d=a.moneyFormat;switch(d.match(o)[1]){case"amount":s=i(e,2);break;case"amount_no_decimals":s=i(e,0);break;case"amount_with_comma_separator":s=i(e,2,".",",");break;case"amount_no_decimals_with_comma_separator":s=i(e,0,".",",")}return d.replace(o,s)},T=document.querySelectorAll(".ecom-cart__estimate-shipping-container"),w=Array.from(T).indexOf(n),h=w>0?"_"+w:"",x="ecom-cart__estimate-shipping-address_country"+h,$="ecom-cart__estimate-shipping-address_province"+h,S="ecom-cart__estimate-shipping-address_province_container"+h,k=n.querySelector('[name="address[country]"]'),E=n.querySelector('[name="address[province]"]'),C=n.querySelector('[id*="address_province_container"]');k&&(k.id=x),E&&(E.id=$),C&&(C.id=S);try{if(window.Shopify&&window.Shopify.CountryProvinceSelector){let t=function(i,s){if(typeof s=="string"&&typeof i[s]=="function")i[s]();else{const o=typeof s=="string"?new Event(s,{bubbles:!0}):s;i.dispatchEvent(o)}};new window.Shopify.CountryProvinceSelector(x,$,{hideElement:S});let e=n.querySelector(".ecom-cart__estimate-shipping-get-rates");if(!e)return;e.addEventListener("click",function(){j();let i=n.querySelector("#"+a.wrapperId);if(!i)return;i.innerHTML="",i.style.display="none";let s={},o=n.querySelector("#ecom-cart__estimate-shipping-address_zip"),d=n.querySelector('[name="address[country]"]'),r=n.querySelector('[name="address[province]"]');s.zip=o?o.value:"",s.country=d?d.value:"",s.province=r?r.value:"",q(s)}),a.customerIsLoggedIn&&t(e,"click"),t(e,new PointerEvent("pointerover"))}}catch(e){console.warn(e.message)}window.EComposer.Cart.ShippingCalculator={getConfig:function(){return a},formatRate:function(e){return H(e)}}}},requestShopifyType(){return{shopify_type:"cart"}},style(){return[{group_alias:"box",options:{group_title:this.$t("general")},modify:{params:[{position:0,fields:[{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:"root .ecom-cart__estimate-shipping-wrapper",properties:{"justify-content":"","align-items":""}}}}]}]}},{group_alias:"text",options:{group_name:"label",group_title:this.$t("label"),selector:" .ecom-cart__estimate-shipping-field label"},modify:{remove:{index:0,length:1}}},{group_alias:"input",options:{group_name:"select",group_title:this.$t("location_select"),selector:"root .ecom-cart__estimate-shipping-field select"},modify:{remove:[{index:6,length:2},{index:3,length:1}],params:[{position:0,fields:[{type:"number",name:"width",label:this.$t("width"),options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3}}},css:{properties:{width:""}}},{type:"number",name:"height",label:this.$t("height"),options:{responsive:!0,reset:!0,units:{px:{min:0,max:100}}},css:{properties:{height:""}}}]}]}},{group_alias:"input",options:{group_name:"input",group_title:this.$t("input_box"),selector:"root #ecom-cart__estimate-shipping-address_zip"},modify:{remove:[{index:3,length:1},{index:5,length:2}],params:[{position:0,fields:[{type:"number",name:"width",label:this.$t("width"),options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3}}},css:{properties:{width:""}}},{type:"number",name:"height",label:this.$t("height"),options:{responsive:!0,reset:!0,units:{px:{min:0,max:100}}},css:{properties:{height:""}}}]}]}},{group_alias:"button",options:{selector:" .ecom-cart__estimate-shipping-get-rates.button"},modify:{params:[{position:1,fields:[{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:"root .ecom-cart__estimate-shipping-field.ecom-cart__estimate-shipping-field--button",properties:{"justify-content":""}}}}]}]}},{group_alias:"text",options:{group_name:"price",group_title:this.$t("price_text"),selector:" .ecom-cart__estimate-shipping-price"},modify:{remove:{index:0,length:1}}},{group_alias:"text",options:{group_name:"error",group_title:this.$t("invalid_zip_postal_text"),selector:" p.ecom-cart__estimate-shipping-error"},modify:{params:[{position:20,fields:{alias:"spacing",options:{label:this.$t("spacing")}}}]}},{group_alias:"text",options:{group_name:"success",group_title:this.$t("calculated_shipping_rate_text"),selector:" p.ecom-cart__estimate-shipping-success"},modify:{params:[{position:20,fields:{alias:"spacing",options:{label:this.$t("spacing")}}}]}}]},css(){return`
                    .ecom-cart__estimate-shipping-calculator-heading{
                        font-style: normal;
                        font-weight: 500;
                        font-size: 1.8rem;
                        line-height: 24px;
                        color: #111827;
                        margin: 0 0 16px;
                    }
                    .ecom-cart__estimate-shipping-wrapper {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                    }
                    .ecom-cart__estimate-shipping-fields{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        gap: 30px;
                        flex-direction: row;
                        flex-flow: wrap;
                    }
                    .ecom-cart__estimate-shipping-field{
                        display:flex;
                        width: fit-content;
                        align-items:center;
                    }
                    .ecom-cart__estimate-shipping-field label{
                        font-style: normal;
                        font-weight: 500;
                        font-size: 1.4rem;
                        line-height: 20px;
                        color: #374151;
                        margin-right:12px;
                    }
                    .ecom-cart__estimate-shipping-field select{
                        background: #FFFFFF;
                        border: 1px solid #D1D5DB;
                        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
                        border-radius: 6px;
                        width: 150px;
                        height:40px;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 1.4rem;
                        line-height: 20px;
                        color: #6B7280;
                        outline:none;
                        text-align: center;
                        /*appearance: listbox !important;
                        -webkit-appearance: listbox !important;*/
                    }
                    .ecom-cart__estimate-shipping-field #ecom-cart__estimate-shipping-address_zip{
                        background: #FFFFFF;
                        border: 1px solid #D1D5DB;
                        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
                        border-radius: 6px;
                        width: 150px;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 1.4rem;
                        line-height: 20px;
                        color: #6B7280;
                        outline:none;
                        padding: 9px 13px;
                    }
                    .ecom-cart__estimate-shipping-get-rates.button{
                        padding: 9px 13px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 16px;
                        align-items: center;
                        background: #00a2bc;
                        color: #FFFFFF;
                        border: none;
                        text-decoration: none;
                        border-radius: 4px;
                    }
                    .ecom-cart__estimate-shipping-get-rates.button::after, .ecom-cart__estimate-shipping-get-rates.button::before {
                        content: unset;
                    }
                    .ecom-cart__estimate-shipping-get-rates.button:hover{
                        box-shadow:unset;
                    }
                    .ecom-cart__estimate-shipping-success, .ecom-cart__estimate-shipping-error {
                        margin: 0;
                        font-size: 14px;
                    }
                    .ecom-cart__estimate-shipping-error {
                        color: #dc3545;
                    }
                    @media(max-width: 767px) {
                        .ecom-cart__estimate-shipping-field{
                            width: 100%;
                            justify-content: space-between;
                        }
                    }
                    .ecom-cart__estimate-shipping-container, .ecom-cart__estimate-shipping-fields, .ecom-cart__estimate-shipping-field--button{
                        max-width: 100%;
                    }
                    .ecom-cart__estimate-shipping-field--button {
                        width: 100%;
                    }
                `},default(){return{settings:{country_text:"Country",province_text:"Province",zip_postal_text:"Zip/Postal code",rate_price_text:"Shipping rate starts at: {{price}}",do_not_ship_text:"Sorry, we do not ship to this destination.",submit_label:this.$t("calculate_shipping"),submit_label_calculating:"Calculating..."},style:{select:{tab:"normal",width:"250px","text-align":"center",width__mobile:"150px"},input:{tab:"normal"},button:{tab:"normal",buttonHeightnormalmode:"40px"}},advanced:{spacing:{padding:{top:"10px",bottom:"10px"}}}}}},methods:{}},R={class:"ecom-element ecom-cart ecom-cart__estimate-shipping"},W={class:"ecom-cart__estimate-shipping-wrapper"},G=["data-submit-button-text","data-submit-disable-button-text","innerHTML"];function Z(c,p,_,n,a,v){const l=V("Liquid");return y(),J("div",R,[c.exporting?(y(),z(l,{key:0,data:"{%- if cart.item_count > 0 -%}"})):F("",!0),B("div",W,[B("div",{class:"ecom-cart__estimate-shipping-container","data-submit-button-text":c.lang(_.data.settings.submit_label,"cart_shipping_submit_label"),"data-submit-disable-button-text":c.lang(_.data.settings.submit_label_calculating,"cart_shipping_submit_label_calculating"),innerHTML:c.liquid("estimate_shipping")},null,8,G)]),c.exporting?(y(),z(l,{key:1,data:"{%- endif -%}"})):F("",!0)])}const se=O(L,[["render",Z]]);L.__docgenInfo={exportName:"default",displayName:"EstimateShipping",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Cart/EstimateShipping.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{se as default};
//# sourceMappingURL=EstimateShipping.d2df1f4e.js.map
