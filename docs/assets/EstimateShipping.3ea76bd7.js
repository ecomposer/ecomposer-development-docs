import{_ as j,L as $,E as q,J as H}from"./preview.a7f47650.js";import{o as w,a as P,A as x,y as C,v as S,x as D}from"./vue.esm-bundler.09fbef75.js";import"./chunk-2GDW2BFM.eab564c8.js";import"./index.e850844b.js";import"./iframe.0ad70ec4.js";import"../sb-preview/runtime.js";const k={name:"EstimateShipping",mixins:[$,q,H],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){var p,m;return{estimate_shipping:{code:`
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
                            ${!this.exporting&&((p=this.data.settings)==null?void 0:p.show_success)?'<p id="ecom-cart__estimate-shipping-rates-feedback" class="ecom-cart__estimate-shipping-success">Shipping rate starts at: <span class="ecom-cart__estimate-shipping-price">$30.00</span></p>':""}
                            ${!this.exporting&&((m=this.data.settings)==null?void 0:m.show_error)?'<p id="ecom-cart__estimate-shipping-rates-feedback" class="ecom-cart__estimate-shipping-error">Invalid Zip/postal code</p>':""}
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
                        `}}},settings(){return[{group_title:"General",params:[{type:"text",label:"Submit button label",name:"submit_label",placeholder:"Calculate shipping"},{type:"text",label:"Calculating button label",name:"submit_label_calculating",placeholder:"Calculating..."},{type:"text",label:"Country text",name:"country_text",placeholder:"Country"},{type:"text",label:"Province text",name:"province_text",placeholder:"Province",description:"Only show for certain countries"},{type:"text",label:"Zip/Postal Code text",name:"zip_postal_text",placeholder:"Zip/Postal Code"},{type:"toggle",label:"Preview invalid zip/postal code",name:"show_error",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"text",label:"Shipping rate text after calculated",name:"rate_price_text",placeholder:"Shipping rate starts at {{price}}",description:"Real shipping rate will replace {{price}} after calculated"},{type:"toggle",label:"Preview shipping rate after calculated",name:"show_success",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"text",label:"Text when do not ship to a location",name:"do_not_ship_text",placeholder:"We do now ship to this destination."},{type:"number",name:"gap",label:"Gap",options:{responsive:!0,units:{px:{min:0,max:100}}},css:{selector:" .ecom-cart__estimate-shipping-fields",properties:{gap:""}}}]}]},javascript(){return function(){var p=this.isLive;const m={have:this.settings.rate_price_text||"",dontHave:this.settings.do_not_ship_text||""};window.Shopify.CountryProvinceSelector||(window.Shopify.CountryProvinceSelector=function(e,i,o){this.countryEl=document.getElementById(e),this.provinceEl=document.getElementById(i),this.provinceContainer=document.getElementById(o.hideElement||i),window.Shopify.addListener(this.countryEl,"change",Shopify.bind(this.countryHandler,this)),this.initCountry(),this.initProvince()},window.Shopify.CountryProvinceSelector.prototype={initCountry:function(){var e=this.countryEl.getAttribute("data-default");window.Shopify.setSelectorByValue(this.countryEl,e),this.countryHandler()},initProvince:function(){var e=this.provinceEl.getAttribute("data-default");e&&this.provinceEl.options.length>0&&window.Shopify.setSelectorByValue(this.provinceEl,e)},countryHandler:function(e){var i=this.countryEl.options[this.countryEl.selectedIndex],o=i.getAttribute("data-provinces"),c=JSON.parse(o);if(this.clearOptions(this.provinceEl),c&&c.length==0)this.provinceContainer.style.display="none";else{for(var r=0;r<c.length;r++){var i=document.createElement("option");i.value=c[r][0],i.innerHTML=c[r][1],this.provinceEl.appendChild(i)}this.provinceContainer.style.display=""}},clearOptions:function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},setOptions:function(e,i){for(var o=0,c=i.length;o<i.length;o++){var r=document.createElement("option");r.value=i[o],r.innerHTML=i[o],e.appendChild(r)}}},window.Shopify.bind=function(e,i){return function(){return e.apply(i,arguments)}},window.Shopify.addListener=function(e,i,o){e.addEventListener?e.addEventListener(i,o,!1):e.attachEvent("on"+i,o)},window.Shopify.setSelectorByValue=function(e,i){for(var o=0,c=e.options.length;o<c;o++){var r=e.options[o];if(i==r.value||i==r.innerHTML)return e.selectedIndex=o,o}});let _=function(e){let i="";if(e.rates[0]){let o=new Intl.NumberFormat("en-US",{style:"currency",currency:e.rates[0].currency}).format(e.rates[0].price),c=m.have.replace("{{price}}",`<span class="ecom-cart__estimate-shipping-price">${o}</span>`);i=`
                              <p id="ecom-cart__estimate-shipping-rates-feedback"  class="${e.success?"ecom-cart__estimate-shipping-success":"ecom-cart__estimate-shipping-error"}">
                                  ${e.success&&e.rates&&e.rates[0].price&&e.rates[0].currency?c:m.dontHave}
                                  </p>`}else i=`<p id="ecom-cart__estimate-shipping-rates-feedback" class="ecom-cart__estimate-shipping-success">${m.dontHave}</p>`;return i};typeof window.EComposer.Cart>"u"&&(window.EComposer.Cart={}),window.EComposer.Cart={},window.EComposer.Cart.ShippingCalculator=function(){var e={submitButton:"Calculate shipping",submitButtonDisabled:"Calculating...",wrapperId:"ecom-cart__estimate-shipping-wrapper-response",customerIsLoggedIn:!!window.EComposer.customer,moneyFormat:window.EComposer.money_format,templateId:"ecom-cart__estimate-shipping-calculator-response-template"};let i=function(t){var s=document.querySelectorAll("#"+e.wrapperId);if(s.length){let a=_(t);var n=document.createElement("div");n.innerHTML=a,s[0].innerHTML=a}},o=function(){let t=document.querySelector(".ecom-cart__estimate-shipping-get-rates");!t||(t.classList.remove("disabled"),t.removeAttribute("disabled"),t.innerHTML=e.submitButton)},c=function(){let t=document.querySelector(".ecom-cart__estimate-shipping-get-rates");!t||(t.classList.add("disabled"),t.setAttribute("disabled","disabled"),t.innerHTML=e.submitButtonDisabled)},r=function(t){window.fetch("/cart/prepare_shipping_rates.json",{method:"POST",body:JSON.stringify({shipping_address:t}),headers:{"Content-Type":"application/json"}}).then(function(s){return s.json()}).then(function(s){s==null?E():f(s)}).catch(function(s){f(s)})},E=function(t){window.fetch("/cart/async_shipping_rates.json",{method:"GET"}).then(function(s){return s.json()}).then(function(s){let n=Object.assign({},s.shipping_rates);F(n)}).catch(function(s){f(s)})},f=function(t,s){if(s==="error"&&p)return m("This feature only work on live site"),o(),1;let n=document.querySelector("#"+e.wrapperId);!n||(t.zip&&t.zip[0]&&(n.innerHTML=`<p id="ecom-cart__estimate-shipping-rates-feedback" class="ecom-cart__estimate-shipping-error">${t.zip[0]}</p>`),o(),n.style.display="block")},F=function(t,s){o(),i({rates:t,success:!0});let n=document.querySelector("#"+e.wrapperId+", #estimated-shipping");!n||(n.style.display="block")},L=function(t){function s(l,u){return typeof l>"u"?u:l}function n(l,u,b,y){if(u=s(u,2),b=s(b,","),y=s(y,"."),isNaN(l)||l==null)return 0;l=(l/100).toFixed(u);var v=l.split("."),z=v[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+b),I=v[1]?y+v[1]:"";return z+I}if(typeof window.EComposer.formatMoney=="function")return window.EComposer.formatMoney(t,e.moneyFormat);typeof t=="string"&&(t=t.replace(".",""));var a="",d=/\{\{\s*(\w+)\s*\}\}/,g=e.moneyFormat;switch(g.match(d)[1]){case"amount":a=n(t,2);break;case"amount_no_decimals":a=n(t,0);break;case"amount_with_comma_separator":a=n(t,2,".",",");break;case"amount_no_decimals_with_comma_separator":a=n(t,0,".",",")}return g.replace(d,a)};function B(){if(window.Shopify&&window.Shopify.CountryProvinceSelector){let s=function(n,a){if(typeof a=="string"&&typeof n[a]=="function")n[a]();else{const d=typeof a=="string"?new Event(a,{bubbles:!0}):a;n.dispatchEvent(d)}};new window.Shopify.CountryProvinceSelector("ecom-cart__estimate-shipping-address_country","ecom-cart__estimate-shipping-address_province",{hideElement:"ecom-cart__estimate-shipping-address_province_container"}),document.querySelector("#ecom-cart__estimate-shipping-address_country"),document.querySelector("#ecom-cart__estimate-shipping-address_province_label");let t=document.querySelector(".ecom-cart__estimate-shipping-get-rates");if(!t)return;t.addEventListener("click",function(){c();let n=document.querySelector("#"+e.wrapperId);if(!n)return;n.innerHTML="",n.display="none";let a={},d=document.querySelector("#ecom-cart__estimate-shipping-address_zip"),g=document.querySelector("#ecom-cart__estimate-shipping-address_country"),l=document.querySelector("#ecom-cart__estimate-shipping-address_province");a.zip=d.value||"",a.country=g.value||"",a.province=l.value||"",r(a)}),e.customerIsLoggedIn&&s(t,"click"),s(t,new PointerEvent("pointerover"))}}return{show:function(t){t=t||{},Object.assign(e,t),function(){try{B()}catch(s){console.warn(s.message)}}()},getConfig:function(){return e},formatRate:function(t){return L(t)}}}();let h=this.$el.querySelector(".ecom-cart__estimate-shipping-container");h&&window.EComposer.Cart.ShippingCalculator.show({submitButton:h.dataset.submitButtonText,submitButtonDisabled:h.dataset.submitDisableButtonText,customerIsLoggedIn:!!window.EComposer.customer,moneyFormat:window.EComposer.money_format})}},requestShopifyType(){return{shopify_type:"cart"}},style(){return[{group_alias:"box",options:{group_title:"General"},modify:{params:[{position:0,fields:[{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-cart__estimate-shipping-wrapper",properties:{"justify-content":"","align-items":""}}}}]}]}},{group_alias:"text",options:{group_name:"label",group_title:"Label",selector:" .ecom-cart__estimate-shipping-field label"},modify:{remove:{index:0,length:1}}},{group_alias:"input",options:{group_name:"select",group_title:"Location select",selector:"root .ecom-cart__estimate-shipping-field select"},modify:{remove:[{index:6,length:2},{index:3,length:1}],params:[{position:0,fields:[{type:"number",name:"width",label:"Width",options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3}}},css:{properties:{width:""}}},{type:"number",name:"height",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:0,max:100}}},css:{properties:{height:""}}}]}]}},{group_alias:"input",options:{group_name:"input",group_title:"Input box",selector:"root #ecom-cart__estimate-shipping-address_zip"},modify:{remove:[{index:3,length:1},{index:5,length:2}],params:[{position:0,fields:[{type:"number",name:"width",label:"Width",options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3}}},css:{properties:{width:""}}},{type:"number",name:"height",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:0,max:100}}},css:{properties:{height:""}}}]}]}},{group_alias:"button",options:{selector:" .ecom-cart__estimate-shipping-get-rates.button"},modify:{params:[{position:1,fields:[{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-cart__estimate-shipping-field.ecom-cart__estimate-shipping-field--button",properties:{"justify-content":""}}}}]}]}},{group_alias:"text",options:{group_name:"price",group_title:"Price text",selector:" .ecom-cart__estimate-shipping-price"},modify:{remove:{index:0,length:1}}},{group_alias:"text",options:{group_name:"error",group_title:"Invalid zip/postal text",selector:" p.ecom-cart__estimate-shipping-error"},modify:{params:[{position:20,fields:{alias:"spacing"}}]}},{group_alias:"text",options:{group_name:"success",group_title:"Calculated shipping rate text",selector:" p.ecom-cart__estimate-shipping-success"},modify:{params:[{position:20,fields:{alias:"spacing"}}]}}]},css(){return`
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
                `},default(){return{settings:{country_text:"Country",province_text:"Province",zip_postal_text:"Zip/Postal code",rate_price_text:"Shipping rate starts at: {{price}}",do_not_ship_text:"Sorry, we do not ship to this destination.",submit_label:"Calculate shipping",submit_label_calculating:"Calculating..."},style:{select:{tab:"normal",width:"250px","text-align":"center",width__mobile:"150px"},input:{tab:"normal"},button:{tab:"normal",buttonHeightnormalmode:"40px"}},advanced:{spacing:{padding:{top:"10px",bottom:"10px"}}}}}},methods:{}},T={class:"ecom-element ecom-cart ecom-cart__estimate-shipping"},M={class:"ecom-cart__estimate-shipping-wrapper"},N=["data-submit-button-text","data-submit-disable-button-text","innerHTML"];function O(p,m,_,h,e,i){const o=D("Liquid");return w(),P("div",T,[p.exporting?(w(),x(o,{key:0,data:"{%- if cart.item_count > 0 -%}"})):C("",!0),S("div",M,[S("div",{class:"ecom-cart__estimate-shipping-container","data-submit-button-text":p.lang(_.data.settings.submit_label,"cart_shipping_submit_label"),"data-submit-disable-button-text":p.lang(_.data.settings.submit_label_calculating,"cart_shipping_submit_label_calculating"),innerHTML:p.liquid("estimate_shipping")},null,8,N)]),p.exporting?(w(),x(o,{key:1,data:"{%- endif -%}"})):C("",!0)])}const J=j(k,[["render",O]]);k.__docgenInfo={exportName:"default",displayName:"EstimateShipping",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Cart/EstimateShipping.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{J as default};
//# sourceMappingURL=EstimateShipping.3ea76bd7.js.map
