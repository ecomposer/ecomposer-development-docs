import{_ as L,L as j,E as $,J as B}from"./preview.fd4b835f.js";import{o as q,a as D,x}from"./vue.esm-bundler.2eae420a.js";import"./chunk-2GDW2BFM.4967875d.js";import"./index.e850844b.js";import"./iframe.b0e30ece.js";import"../sb-preview/runtime.js";const w={name:"EstimateShipping",mixins:[j,$,B],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){var p,l;return{estimate_shipping:{code:`
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
                            ${!this.exporting&&((p=this.data.settings)==null?void 0:p.show_success)?'<p id="ecom-cart__estimate-shipping-rates-feedback" class="ecom-cart__estimate-shipping-success">Rates start at <span class="ecom-cart__estimate-shipping-price">$30.00</span></p>':""}
                            ${!this.exporting&&((l=this.data.settings)==null?void 0:l.show_error)?'<p id="ecom-cart__estimate-shipping-rates-feedback" class="ecom-cart__estimate-shipping-error">This is demo invalid value text</p>':""}
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
                        `}}},settings(){return[{group_title:"General",params:[{type:"text",label:"Submit button label",name:"submit_label",placeholder:"Calculate shipping"},{type:"text",label:"Calculating buttom label",name:"submit_label_calculating",placeholder:"Calculating..."},{type:"text",label:"Country text",name:"country_text",placeholder:"Country"},{type:"text",label:"Province text",name:"province_text",placeholder:"Province",description:"Only show for certain countries"},{type:"text",label:"Zip/Postal Code text",name:"zip_postal_text",placeholder:"Zip/Postal Code"},{type:"toggle",label:"Preview invalid zip/postal code",name:"show_error",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"text",label:"Shipping rate text after calculated",name:"rate_price_text",placeholder:"Shipping rate starts at {{price}}",description:"Real shipping rate will replace {{price}} after calculated"},{type:"toggle",label:"Preview shipping rate after calculated",name:"show_success",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"text",label:"Text when do not ship to a location",name:"do_not_ship_text",placeholder:"We do now ship to this destination."},{type:"number",name:"gap",label:"Gap",options:{responsive:!0,units:{px:{min:0,max:100}}},css:{selector:" .ecom-cart__estimate-shipping-fields",properties:{gap:""}}}]}]},javascript(){return function(){var p=this.isLive;const l={have:this.settings.rate_price_text||"",dontHave:this.settings.do_not_ship_text||""};let g=function(t){let n="";if(t.rates[0]){let m=new Intl.NumberFormat("en-US",{style:"currency",currency:t.rates[0].currency}).format(t.rates[0].price),u=l.have.replace("{{price}}",`<span class="ecom-cart__estimate-shipping-price">${m}</span>`);n=`
                              <p id="ecom-cart__estimate-shipping-rates-feedback"  class="${t.success?"ecom-cart__estimate-shipping-success":"ecom-cart__estimate-shipping-error"}">
                                  ${t.success&&t.rates&&t.rates[0].price&&t.rates[0].currency?u:l.dontHave}
                                  </p>`}else n=`<p id="ecom-cart__estimate-shipping-rates-feedback" class="ecom-cart__estimate-shipping-success">${l.dontHave}</p>`;return n};typeof window.Countries=="object"&&(window.Countries.updateProvinceLabel=function(t,n){if(typeof t=="string"&&window.Countries[t]&&window.Countries[t].provinces){if(typeof n!="object"&&(n=document.getElementById("ecom-cart__estimate-shipping-address_province_label"),n===null))return;n.innerHTML=window.Countries[t].label;var m=n.parentElement;m.querySelectorAll("select").forEach(function(u){u.querySelectorAll(".custom-style-select-box-inner").forEach(function(f){f.innerHTML(window.Countries[t].provinces[0])})})}}),typeof window.EComposer.Cart>"u"&&(window.EComposer.Cart={}),window.EComposer.Cart={},window.EComposer.Cart.ShippingCalculator=function(){var t={submitButton:"Calculate shipping",submitButtonDisabled:"Calculating...",wrapperId:"ecom-cart__estimate-shipping-wrapper-response",customerIsLoggedIn:!!window.EComposer.customer,moneyFormat:window.EComposer.money_format,templateId:"ecom-cart__estimate-shipping-calculator-response-template"};let n=function(e){var i=document.querySelectorAll("#"+t.wrapperId);if(i.length){let r=g(e);var s=document.createElement("div");s.innerHTML=r,i[0].innerHTML=r}},m=function(){let e=document.querySelector(".ecom-cart__estimate-shipping-get-rates");!e||(e.classList.remove("disabled"),e.removeAttribute("disabled"),e.innerHTML=t.submitButton)},u=function(){let e=document.querySelector(".ecom-cart__estimate-shipping-get-rates");!e||(e.classList.add("disabled"),e.setAttribute("disabled","disabled"),e.innerHTML=t.submitButtonDisabled)},f=function(e){window.fetch("/cart/prepare_shipping_rates.json",{method:"POST",body:JSON.stringify({shipping_address:e}),headers:{"Content-Type":"application/json"}}).then(function(i){return i.json()}).then(function(i){i==null?k():b(i)}).catch(function(i){b(i)})},k=function(e){window.fetch("/cart/async_shipping_rates.json",{method:"GET"}).then(function(i){return i.json()}).then(function(i){let s=Object.assign({},i.shipping_rates);C(s)}).catch(function(i){b(i)})},b=function(e,i){if(i==="error"&&p)return l("This feature only work on live site"),m(),1;let s=document.querySelector("#"+t.wrapperId);!s||(e.zip&&e.zip[0]&&(s.innerHTML=`<p id="ecom-cart__estimate-shipping-rates-feedback" class="ecom-cart__estimate-shipping-error">${e.zip[0]}</p>`),m(),s.style.display="block")},C=function(e,i){m(),n({rates:e,success:!0});let s=document.querySelector("#"+t.wrapperId+", #estimated-shipping");!s||(s.style.display="block")},S=function(e){function i(a,d){return typeof a>"u"?d:a}function s(a,d,_,v){if(d=i(d,2),_=i(_,","),v=i(v,"."),isNaN(a)||a==null)return 0;a=(a/100).toFixed(d);var y=a.split("."),F=y[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+_),z=y[1]?v+y[1]:"";return F+z}if(typeof window.EComposer.formatMoney=="function")return window.EComposer.formatMoney(e,t.moneyFormat);typeof e=="string"&&(e=e.replace(".",""));var r="",c=/\{\{\s*(\w+)\s*\}\}/,o=t.moneyFormat;switch(o.match(c)[1]){case"amount":r=s(e,2);break;case"amount_no_decimals":r=s(e,0);break;case"amount_with_comma_separator":r=s(e,2,".",",");break;case"amount_no_decimals_with_comma_separator":r=s(e,0,".",",")}return o.replace(c,r)};function E(){new window.Shopify.CountryProvinceSelector("ecom-cart__estimate-shipping-address_country","ecom-cart__estimate-shipping-address_province",{hideElement:"ecom-cart__estimate-shipping-address_province_container"});var e=document.querySelector("#ecom-cart__estimate-shipping-address_country"),i=document.querySelector("#ecom-cart__estimate-shipping-address_province_label");typeof Countries<"u"&&(window.Countries.updateProvinceLabel(e.value,i),e.addEventListener("change",function(){window.Countries.updateProvinceLabel(e.value,i)}));let s=document.querySelector(".ecom-cart__estimate-shipping-get-rates");if(!s)return;s.addEventListener("click",function(){u();let c=document.querySelector("#"+t.wrapperId);if(!c)return;c.innerHTML="",c.display="none";let o={},a=document.querySelector("#ecom-cart__estimate-shipping-address_zip"),d=document.querySelector("#ecom-cart__estimate-shipping-address_country"),_=document.querySelector("#ecom-cart__estimate-shipping-address_province");o.zip=a.value||"",o.country=d.value||"",o.province=_.value||"",f(o)});function r(c,o){if(typeof o=="string"&&typeof c[o]=="function")c[o]();else{const a=typeof o=="string"?new Event(o,{bubbles:!0}):o;c.dispatchEvent(a)}}t.customerIsLoggedIn&&r(s,"click"),r(s,new PointerEvent("pointerover"))}return{show:function(e){e=e||{},Object.assign(t,e),function(){try{E()}catch(i){console.warn(i.message)}}()},getConfig:function(){return t},formatRate:function(e){return S(e)}}}();let h=this.$el.querySelector(".ecom-cart__estimate-shipping-container");h&&window.EComposer.Cart.ShippingCalculator.show({submitButton:h.dataset.submitButtonText,submitButtonDisabled:h.dataset.submitDisableButtonText,customerIsLoggedIn:!!window.EComposer.customer,moneyFormat:window.EComposer.money_format})}},requestShopifyType(){return{shopify_type:"cart"}},style(){return[{group_alias:"box",options:{group_title:"General"},modify:{params:[{position:0,fields:[{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-cart__estimate-shipping-wrapper",properties:{"justify-content":"","align-items":""}}}}]}]}},{group_alias:"text",options:{group_name:"label",group_title:"Label",selector:" .ecom-cart__estimate-shipping-field label"},modify:{remove:{index:0,length:1}}},{group_alias:"input",options:{group_name:"select",group_title:"Location select",selector:"root .ecom-cart__estimate-shipping-field select"},modify:{remove:[{index:6,length:2},{index:3,length:1}],params:[{position:0,fields:[{type:"number",name:"width",label:"Width",options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3}}},css:{properties:{width:""}}},{type:"number",name:"height",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:0,max:100}}},css:{properties:{height:""}}}]}]}},{group_alias:"input",options:{group_name:"input",group_title:"Input box",selector:"root #ecom-cart__estimate-shipping-address_zip"},modify:{remove:[{index:3,length:1},{index:5,length:2}],params:[{position:0,fields:[{type:"number",name:"width",label:"Width",options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3}}},css:{properties:{width:""}}},{type:"number",name:"height",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:0,max:100}}},css:{properties:{height:""}}}]}]}},{group_alias:"button",options:{selector:" .ecom-cart__estimate-shipping-get-rates.button"},modify:{params:[{position:1,fields:[{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-cart__estimate-shipping-field.ecom-cart__estimate-shipping-field--button",properties:{"justify-content":""}}}}]}]}},{group_alias:"text",options:{group_name:"price",group_title:"Price text",selector:" .ecom-cart__estimate-shipping-price"},modify:{remove:{index:0,length:1}}},{group_alias:"text",options:{group_name:"error",group_title:"Invalid zip/postal text",selector:" p.ecom-cart__estimate-shipping-error"},modify:{params:[{position:20,fields:{alias:"spacing"}}]}},{group_alias:"text",options:{group_name:"success",group_title:"Calculated shipping rate text",selector:" p.ecom-cart__estimate-shipping-success"},modify:{params:[{position:20,fields:{alias:"spacing"}}]}}]},css(){return`
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
                        appearance: listbox !important;
                        -webkit-appearance: listbox !important;
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
                `},default(){return{settings:{country_text:"Country",province_text:"Province",zip_postal_text:"Zip/Postal code",rate_price_text:"Rates start at: {{price}}",do_not_ship_text:"Sorry, we do not ship to this destination.",submit_label:"Calculate shipping",submit_label_calculating:"Calculating..."},style:{select:{tab:"normal",width:"250px","text-align":"center",width__mobile:"150px"},input:{tab:"normal"},button:{tab:"normal",buttonHeightnormalmode:"40px"}},advanced:{spacing:{padding:{top:"10px",bottom:"10px"}}}}}},methods:{}},I={class:"ecom-element ecom-cart ecom-cart__estimate-shipping"},P={class:"ecom-cart__estimate-shipping-wrapper"},H=["data-submit-button-text","data-submit-disable-button-text","innerHTML"];function T(p,l,g,h,t,n){return q(),D("div",I,[x("div",P,[x("div",{class:"ecom-cart__estimate-shipping-container","data-submit-button-text":p.lang(g.data.settings.submit_label,"cart_shipping_submit_label"),"data-submit-disable-button-text":p.lang(g.data.settings.submit_label_calculating,"cart_shipping_submit_label_calculating"),innerHTML:p.liquid("estimate_shipping")},null,8,H)])])}const U=L(w,[["render",T]]);w.__docgenInfo={exportName:"default",displayName:"EstimateShipping",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Cart/EstimateShipping.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{U as default};
//# sourceMappingURL=EstimateShipping.afdf5732.js.map
