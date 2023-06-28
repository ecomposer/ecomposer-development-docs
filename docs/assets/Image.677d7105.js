import{_ as we,L as ye,J as xe,E as ze,a as $}from"./preview.a7f47650.js";import{o as k,a as S,v as C,u as T,F as $e,y as ke}from"./vue.esm-bundler.09fbef75.js";import"./chunk-2GDW2BFM.eab564c8.js";import"./index.e850844b.js";import"./iframe.0ad70ec4.js";import"../sb-preview/runtime.js";const ve={name:"ProductMedia",presets:!0,vendors:["slider_js","slider_css","modal_js","modal_css","zoom_js"],mixins:[ye,xe,ze],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["slidesPerView","slidesPerView__tablet","slidesPerView__mobile","position_zoom","spaceBetween","spaceBetween__tablet","spaceBetween__mobile","spacing_slider","featured_image_priority","itemsPerView","itemsSpace","show_pagination","thumbnail_position","thumbnail_position__tablet","thumbnail_position__mobile","position_sticky"]}},computed:{settings(){return[{group_title:"General",params:[{type:"popup",label:"Image layout",name:"layout",options:{type:"dropdown",default:!1,preview:"title",values:{slider:"Slider",grid_default:"Grid",grid:"Grid Advance",single:"Single image"}}},{type:"toggle",value:"nothing",name:"image_action",label:"Open image in lightbox",options:{values:{on:{label:"Yes",value:"lightbox"},off:{label:"No",value:"nothing"}}}},{type:"toggle",value:!1,name:"disable_lazyload",label:"Disable lazyload image",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"toggle",name:"featured_image_priority",label:"Show the featured image first",options:{visible:function(e){return e.layout!=="grid"},values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"toggle",label:"Enable zoom image",name:"enable_zoom",options:{oneline:!0,values:{on:{label:"On",value:!0},off:{label:"Off",value:!1}}}},{name:"zoom_type",label:"Zoom type",type:"popup",value:"inner",description:"*** Lightbox option not working when zoom type is innner ***",options:{type:"dropdown",responsive:!1,preview:"title",default:!1,visible:function(e){return e.enable_zoom},values:{inner:"Inner",outer:"Outer"}}},{name:"zoom_width",label:"Zoom window width",type:"number",value:50,options:{units:{px:{min:100,max:800}},visible:function(e){return e.enable_zoom&&e.zoom_type=="outer"}}},{type:"choose",label:"Image alignment",name:"imageAlign",options:{oneline:!0,responsive:!0,type:"text-align",values:["left","center","right"]}},{type:"line",options:{visible:function(e){return e.enable_zoom}}},{name:"zoom_height",label:"Zoom window height",type:"number",value:500,options:{units:{px:{min:100,max:800}},visible:function(e){return e.enable_zoom&&e.zoom_type=="outer"}}},{type:"toggle",label:"Enable position sticky",description:"<i>Only work on Desktop</i>",name:"position_sticky",options:{oneline:!0,values:{on:{label:"On",value:!0},off:{label:"Off",value:!1}}}},{type:"line"},{type:"picker",label:"Video icon",name:"video_icon",options:{type:"icon",multiple:!1}},{type:"line"},{type:"paragraph",content:"Video setting <i>(Only work with Shopify video)</i>"},{type:"toggle",label:"Auto play",name:"video_auto_play",options:{oneline:!0,values:{on:{label:"On",value:!0},off:{label:"Off",value:!1}}}},{type:"toggle",label:"Enable control",name:"video_control",options:{oneline:!0,values:{on:{label:"On",value:!0},off:{label:"Off",value:!1}}}},{type:"toggle",label:"Mute",name:"video_mute",options:{oneline:!0,values:{on:{label:"On",value:!0},off:{label:"Off",value:!1}}}},{name:"grid_items",label:"Grid items per row",type:"popup",options:{type:"dropdown",responsive:!0,preview:"title",default:!1,visible:function(e){return e.layout=="grid_default"},values:{12:"1",6:"2",4:"3",3:"4",15:"5",2:"6"}}}]},{group_title:"Slider settings",options:{visible:function(e,t){return t.layout==="slider"}},params:[{type:"paragraph",content:"### Slider"},{name:"itemsPerView",label:"Number slides per view",type:"number",options:{reset:!1,responsive:!0,min:1,max:6,visible:function(e){return e.layout=="slider"}}},{name:"itemsSpace",label:"Spacing between slides",type:"number",options:{reset:!1,responsive:!0,min:0,max:100,unit:"px",visible:function(e){return e.layout=="slider"}}},{type:"line",name:"thumbnail_line",options:{oneline:!0,visible:function(e){return e.layout=="slider"}}},{type:"paragraph",content:"### Thumbnail",name:"thumbnail_desc",options:{oneline:!0,visible:function(e){return e.layout=="slider"}}},{type:"toggle",label:"Show thumbnails",name:"show_thumbnails",options:{oneline:!0,visible:function(e){return e.layout=="slider"},values:{on:{label:"On",value:!0},off:{label:"Off",value:!1}}}},{name:"thumbnail_position",label:"Thumbnail position",type:"popup",options:{type:"dropdown",responsive:!0,preview:"title",default:!1,visible:function(e){return e.layout=="slider"&&e.show_thumbnails},values:{"row-reverse":"Left",row:"Right",column:"Bottom","column-reverse":"Top"}},css:{selector:" .ecom-product-single__media--slider",properties:{"flex-flow":""}}},{type:"number",name:"spacing_slider",label:"Spacing between",options:{responsive:!0,units:{px:{min:2,max:100,step:1}},visible:function(e){return e.layout=="slider"&&e.show_thumbnails},reset:!1},css:{selector:" .ecom-product-single__media .ecom-product-single__media-container",properties:{gap:""}}},{type:"number",name:"slidesPerView",label:"Number thumbnails per slide",description:"***** only work when thumbnail position is top or bottom *****",options:{reset:!1,responsive:!0,min:2,max:9,visible:function(e){return e.layout=="slider"&&e.show_thumbnails}}},{type:"number",name:"spaceBetween",label:"Thumbnails spacing",options:{reset:!1,responsive:!0,min:0,unit:"px",max:80,visible:function(e){return e.layout=="slider"&&e.show_thumbnails}}},{type:"number",name:"thumbnailMaxWidth",label:"Thumbnail max width",options:{responsive:!0,units:{px:{min:50,max:400}},visible:function(e){return e.layout=="slider"&&e.show_thumbnails}},css:{selector:"root .ecom-product-single__media--thumbs",properties:{"max-width":""}}},{type:"paragraph",content:"**Thumbnail crop size (px)**",name:"thumbnail_group",options:{visible:function(e){return e.layout=="slider"&&e.show_thumbnails}}},{type:"number",label:"Width",name:"thumbnail_width",options:{reset:!1,visible:function(e){return e.layout=="slider"&&e.show_thumbnails},slider:!1,half:!0,max:900}},{type:"number",label:"Height",placeholder:"100",name:"thumbnail_height",options:{max:900,slider:!1,half:!0,reset:!1,visible:function(e){return e.layout=="slider"&&e.show_thumbnails}}},{type:"popup",label:"Crop position",name:"thumbnail_crop",options:{type:"dropdown",default:!1,values:{none:"None",top:"Top",bottom:"Bottom",center:"Center",left:"Left",right:"Right"},visible:function(e){return e.layout=="slider"&&e.show_thumbnails}}},{type:"picker",label:"3D Model icon",name:"thumbnail_model_icon",options:{type:"icon",multiple:!1,visible:function(e){return e.layout=="slider"&&e.show_thumbnails}}},{type:"picker",label:"Video icon",name:"thumbnail_video_icon",options:{type:"icon",multiple:!1,visible:function(e){return e.layout=="slider"&&e.show_thumbnails}}},{name:"line",type:"line",options:{visible:function(e){return e.show_thumbnails&&e.enable_zoom!==!0}}},{type:"paragraph",content:"### Nav & pagination",name:"thumbnail_nav",options:{oneline:!0,visible:function(e){return e.layout=="slider"}}},{name:"show_pagination",label:"Enable pagination",type:"toggle",options:{reset:!1,responsive:!1,visible:function(e){return e.layout=="slider"},values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"toggle",label:"Enable navigation",name:"sliderControls",options:{oneline:!0,values:{on:{label:"On",value:!0},off:{label:"Off",value:!1}}}},{type:"picker",label:"Prev Icon",name:"prevIcon",options:{type:"icon",multiple:!1,visible:{keep_data:!1,condition:e=>e.sliderControls}}},{type:"picker",label:"Next Icon",name:"nextIcon",options:{type:"icon",multiple:!1,visible:{keep_data:!1,condition:e=>e.sliderControls}}},{type:"toggle",label:"Enable navigation thumb",name:"sliderControlsThumb",options:{oneline:!0,values:{on:{label:"On",value:!0},off:{label:"Off",value:!1}},visible:function(e){return e.show_thumbnails}}},{type:"picker",label:"Prev Icon",name:"prevIconThumb",options:{type:"icon",multiple:!1,visible:{keep_data:!1,condition:e=>e.sliderControlsThumb&&e.show_thumbnails}}},{type:"picker",label:"Next Icon",name:"nextIconThumb",options:{type:"icon",multiple:!1,visible:{keep_data:!1,condition:e=>e.sliderControlsThumb&&e.show_thumbnails}}}]},{group_title:"Badge",params:[{type:"toggle",name:"show_sale_sold_text",value:!1,label:"Show sale/sold out text badge",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"text",label:"Badge sale text",placeholder:"Sale {price}%",value:"Sale",name:"sale_text",options:{visible:function(e){return e&&e.show_sale_sold_text===!0}}},{type:"text",label:"Badge sold out text",value:"Sold out",name:"sold_text",options:{visible:function(e){return e&&e.show_sale_sold_text===!0}}},{type:"toggle",name:"show_sale_badge",value:!1,label:"Show sale value badge",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{name:"sale_badge_type",type:"popup",label:"Sale value badge type",value:"percent",options:{default:!1,type:"dropdown",preview:"title",values:{percent:"Percent",amount:"Amount"},visible:function(e){return e&&e.show_sale_badge===!0}}},{name:"bage_sale",label:"Sale value badge text",type:"text",value:"{{sale}}%",placeholder:"-{{sale}}%",options:{visible:function(e){return e&&e.show_sale_badge}}},{type:"line"},{type:"paragraph",content:"** <b><i>Custom badge</i></b> **"},{name:"metafield_label",label:"Metafield badge",type:"text",value:"",placeholder:"product.metafields...",description:"Renders badge from metafields, example:<br/> <i>product.metafields.custom.example.value</i>"},{type:"toggle",name:"show_badges_tags",value:!1,label:"Custom tags badge",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},css:{isCss:!1},description:"Renders 'Sale' or 'Sold Out' and tags if the product matches the condition"},{type:"textarea",label:"Show when product contains tags",name:"label_badge_tags",description:"Note: divide value with (,).<br>eg:Hot,new,clothing",options:{height:1,visible:function(e){return e.show_badges_tags}}},{type:"line"},{name:"label_position",label:"Badge position",type:"popup",value:"topleft",options:{type:"dropdown",default:!1,preview:"title",values:{topleft:"Top left",topright:"Top right",bottomleft:"Bottom left",bottomright:"Bottom right"},control_width:"50%"}}]}]},sale_text(){return this.data&&this.data.settings&&"sale_text"in this.data.settings?this.data.settings.sale_text:""},sold_text(){return this.data&&this.data.settings&&"sold_text"in this.data.settings?this.data.settings.sold_text:""},label_badge_tags(){var e,t,i;return(i=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.label_badge_tags)!=null?i:"".split(`
`).trim().join(",")},screens(){let e=this.$store.getters["builder/screens"];return e?Object.entries(e).sort(([,t],[,i])=>t.width-i.width):[]},screen(){return this.$store.getters["builder/screen"]},screenMinW(){let e=[];for(let t in this.screens){let i=this.$helpers.copy(this.screens[t]);i[1].width=t==="0"?0:parseInt(this.screens[t-1][1].width)+1,e.push(i)}return e},breakpoints(){let e={},t=this.data.settings,i={itemsPerView:"slidesPerView",itemsSpace:"spaceBetween"};return this.screenMinW.forEach(([,l])=>{e[l.width]={__screen_name:l.name},Object.keys(i).forEach(r=>{let n=l.name==="desktop"?r:r+"__"+l.name;e[l.width][i[r]]=t[n]})}),e},thumbsBreakpoints(){let e={},t=this.data.settings,i=["slidesPerView","spaceBetween","thumbnail_position"];return this.screenMinW.forEach(([,l])=>{e[l.width]={__screen_name:l.name},i.forEach(r=>{let n=l.name==="desktop"?r:r+"__"+l.name,u=l.name==="desktop"?"thumbnail_position":"thumbnail_position__"+l.name;r=="slidesPerView"&&["row","row-reverse"].includes(t[u])?e[l.width][r]="auto":e[l.width][r]=t[n]})}),e},thumbClass(){let e=this.data.settings;return{"ecom-swiper-tablet-vertical":["row","row-reverse"].includes(e==null?void 0:e.thumbnail_position__tablet),"ecom-swiper-mobile-vertical":["row","row-reverse"].includes(e==null?void 0:e.thumbnail_position__mobile)}},javascript(){return function(){if(!this.$el)return!1;const e=this,t=this.$el,i=this.isLive,l=this.settings.position_zoom?this.settings.position_zoom:1,r={width:this.settings.zoom_width,height:this.settings.zoom_height},n=t.closest(".ecom-product-form--single");window.innerWidth>768,window.innerWidth<768,t.closest(".ecom-row"),window.matchMedia("only screen and (max-width: 768px)");const u=this.settings.show_thumbnails?this.settings.show_thumbnails:!1,v=this.settings.layout?this.settings.layout:"slider",b=this.settings.enable_zoom?this.settings.enable_zoom:!1;if(v==="slider")try{var w;if(u){const a=this.$el.querySelector(".ecom-product-single__media--thumbs");let s=JSON.parse(a.dataset.breakpoints);Object.keys(s).forEach(p=>{let c=s[p].__screen_name,z="thumbnail_position";s[p].direction=["row","row-reverse"].includes(s[p][z])?"vertical":"horizontal"}),w=new window.EComSwiper(a,{freeMode:!1,centeredSlides:!1,loop:!1,centeredSlidesBounds:!0,slideToClickedSlide:!0,autoHeight:!!["row","row-reverse"].includes(this.settings.thumbnail_position),navigation:{nextEl:this.$el.querySelector(".ecom-product-single__media--thumbs .ecom-swiper-button-next"),prevEl:this.$el.querySelector(".ecom-product-single__media--thumbs .ecom-swiper-button-prev")},allowTouchMove:this.isLive,watchSlidesProgress:!0,grabCursor:!0,centerInsufficientSlides:!1,breakpoints:s,direction:["row","row-reverse"].includes(this.settings.thumbnail_position)?"vertical":"horizontal",on:{slideChangeTransitionEnd:function(){},breakpoint:function(){setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)}}});let h=null;a.querySelectorAll("img").forEach(function(p){p.addEventListener("load",function(){clearTimeout(h),h=setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)})})}const o=this.$el.querySelector(".ecom-product-single__media--featured");var g=o.dataset.breakpoints;g=g?JSON.parse(g):{0:{slidesPerView:1,spaceBetween:20}};let m=!!(this.settings&&this.settings.show_pagination);const d=new window.EComSwiper(o,{autoHeight:!0,lazy:!0,allowTouchMove:this.isLive,pagination:m?{el:o.querySelector(".ecom-swiper-pagination"),dynamicBullets:!0,clickable:!0}:!1,navigation:{nextEl:this.$el.querySelector(".ecom-product-single__media--featured .ecom-swiper-button-next"),prevEl:this.$el.querySelector(".ecom-product-single__media--featured .ecom-swiper-button-prev")},thumbs:u?{swiper:w}:void 0,noSwiping:!0,longSwipes:!0,touchStartPreventDefault:!0,noSwipingSelector:"model-viewer",noSwipingClass:"ecom-product-single__media--model",grabCursor:!0,preloadImages:!0,breakpoints:g,on:{breakpoint:function(){setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)},slideChange:function(a){var h,p;a.activeIndex!==a.lastIndex&&(a.lastIndex=a.activeIndex+"");const s=n.querySelector('[name="id"]');if(s){let c=null;if(!d||!d.slides[d.activeIndex])return;if(c=(p=(h=d.slides[d.activeIndex])==null?void 0:h.dataset)==null?void 0:p.variant_id,c){c=c+"";const z=s.value;(!z||!c.includes(z.toString()))&&(s.value=c.split(",")[0],s.dispatchEvent(new Event("swatch")))}}a.slides[a.activeIndex]&&b&&f(a.slides[a.activeIndex])},slideChangeTransitionEnd:function(a){var s,h;window.dispatchEvent(new window.Event("resize")),a.slides.forEach(p=>{if(p.classList.contains("ecom-swiper-slide-active")){let c=p.querySelector("video");c&&c.hasAttribute("autoplay")&&c.play()}else{let c=p.querySelector("iframe,video");c&&(c.nodeName==="IFRAME"?c.src=c.src:c.pause())}}),i&&(a.allowTouchMove=!((h=(s=a.slides[d.activeIndex])==null?void 0:s.classList)!=null&&h.contains("ecom-swiper-no-swiping")))},init:function(a){a.slides[a.activeIndex]&&b&&f(a.slides[a.activeIndex])}}});let _=null;o.querySelectorAll("img").forEach(function(a){a.addEventListener("load",function(){clearTimeout(_),_=setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)})})}catch(o){console.info(o.message)}if(t.querySelectorAll(".ecom-product-single__media--play-control").forEach(function(o){o.addEventListener("click",function(m){this.style.display="none",this.parentNode.querySelector("video").play()})}),!this.isLive)try{e.$el.querySelectorAll("model-viewer").forEach(function(o){const m=element.outerHTML;o.replaceWith(m)})}catch(o){console.info(o.message)}function x(o){if(o)return;const m=t.querySelectorAll("model-viewer");m&&m.forEach(d=>{if(d)try{new window.Shopify.ModelViewerUI(d)}catch(_){console.warn(_.message)}}),t.querySelectorAll("button").forEach(function(d){d.setAttribute("type","button")})}function y(){if(!window.ShopifyXR)document.addEventListener("shopify_xr_initialized",function(){y()});else{try{const o=e.$el.querySelector('[id^="Product-model-"]');o&&(window.ShopifyXR.addModels(JSON.parse(o.textContent)),o.remove())}catch(o){console.log(o.message)}window.ShopifyXR.setupXRElements()}}if(document.querySelector("model-viewer")&&!document.getElementById("ModelViewerStyle")){let o=document.createElement("link");o.id="ModelViewerStyle",o.rel="stylesheet",o.href="https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui.css",o.media="print",o.onload=function(){this.media="all"},document.head.appendChild(o)}if(window.Shopify&&window.Shopify.loadFeatures([{name:"shopify-xr",version:"1.0",onLoad:y},{name:"model-viewer-ui",version:"1.0",onLoad:x}]),this.settings.image_action&&this.settings.image_action==="lightbox"&&i){let o=this.$el.querySelectorAll("[ecom-modal]");o.length&&window.EComModal&&new window.EComModal(o,{gallery:!0,cssClass:["ecom-container-lightbox-"+this.id]})}if(this.settings.position_sticky&&window.innerWidth>1024&&t.parentElement&&(this.isLive?t.style.height="100%":t.parentElement.style.height="100%"),v!=="slider"&&b){let o=t.querySelectorAll(".ecom-image-zoom");if(o.length==0)return;f(o)}function f(o){if(!(!i||window.innerWidth<768)&&window.EcomImgZoom)if(o.length>0)for(var m=0,d=o.length;m<d;m++)new window.EcomImgZoom(o[m],r);else new window.EcomImgZoom(o,r)}}},liquids(){var u,v,b,w,g,x,y,f,o,m,d,_,a,s,h,p,c,z,E,B,I,M,O,P,q,N,L,V,j,A,H,R,F,Z,W,X,D,Y,J,G,U,K,Q,ee,ie,te,oe,ae,se,ne,le,re,de,me,ce,pe,ue,ge,_e,he,be,fe;const e=`ecom-product-single__media--image ecom-swiper-slide ecom-flex ecom-image-align-${(u=this.data.settings)!=null&&u.imageAlign?(v=this.data.settings)==null?void 0:v.imageAlign:""} ecom-image-align-${(b=this.data.settings)!=null&&b.imageAlign__tablet?(w=this.data.settings)==null?void 0:w.imageAlign__tablet:""}--tablet ecom-image-align-${(g=this.data.settings)!=null&&g.imageAlign__mobile?(x=this.data.settings)==null?void 0:x.imageAlign__mobile:""}--mobile`,t="script",i=this.layout==="slider"?`
                <div class="ecom-swiper-pagination"></div>
                <div class="ecom-swiper-button-next ecom-swiper-controls" style="display: ${this.sliderControls?"flex":"none"}">
                    ${(o=(f=(y=this.data.settings)==null?void 0:y.nextIcon)==null?void 0:f.value)!=null?o:`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>`}
                </div>
                <div class="ecom-swiper-button-prev ecom-swiper-controls" style="display: ${this.sliderControls?"flex":"none"}">
                    ${(a=(_=(d=(m=this.data)==null?void 0:m.settings)==null?void 0:d.prevIcon)==null?void 0:_.value)!=null?a:`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>`}
                </div>
                `:"",l=this.layout==="slider"?`
                <div class="ecom-swiper-button-next ecom-swiper-controls-thumb" style="display: ${this.data.settings.sliderControlsThumb?"flex":"none"}">
                    ${(p=(h=(s=this.data.settings)==null?void 0:s.nextIconThumb)==null?void 0:h.value)!=null?p:`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>`}
                </div>
                <div class="ecom-swiper-button-prev ecom-swiper-controls-thumb" style="display: ${this.data.settings.sliderControlsThumb?"flex":"none"}">
                    ${(B=(E=(z=(c=this.data)==null?void 0:c.settings)==null?void 0:z.prevIconThumb)==null?void 0:E.value)!=null?B:`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>`}
                </div>
                `:"",r=`
                    {%- liquid
                        if product.has_only_default_variant
                            assign target = product
                        else
                            assign target = product.selected_or_first_available_variant
                        endif
                    -%}

                    ${((I=this.data.settings)==null?void 0:I.show_sale_sold_text)||((M=this.data.settings)==null?void 0:M.show_sale_badge)?`
                        <div class="ecom-product-single__media-label ecom-pa ecom-flex ecom-label-position__${((O=this.data.settings)==null?void 0:O.label_position)||"topleft"}">
                        ${(P=this.data.settings)!=null&&P.show_sale_sold_text?`
                            {%- assign savings = product.compare_at_price | minus: product.price | times: 100.0 | divided_by: product.compare_at_price | round -%}
                            <span class="ecom-product-single__media-label-sale" data-text=" ${this.lang(this.sale_text,"product_single_sale_text")}" data-sale="{{savings}}" {%- if product.compare_at_price == nil or product.compare_at_price <=  product.price -%}  style="display:none" {% endif %}>
                            ${this.lang(this.sale_text,"product_single_media_sale_text")}
                            </span>
                            <span class="ecom-product-single__media-label-sold-out" {% if target.available %} style="display:none" {% endif %}>
                                ${this.lang(this.sold_text,"product_single_media_sold_text")}
                            </span>
                            `:""}

                        ${(q=this.data.settings)!=null&&q.show_sale_badge?`
                            {%- if product.compare_at_price != null and product.compare_at_price > product.price -%}
                                ${((N=this.data.settings)==null?void 0:N.sale_badge_type)=="amount"?"{%- assign sale = product.compare_at_price | minus: product.price | money -%}":"{%- assign sale = product.compare_at_price | minus: product.price | times: 100.0 | divided_by: product.compare_at_price | round -%}"}
                                <span class="ecom-product-single__media-label--bage-sale" data-sale="${this.lang((L=this.data.settings)==null?void 0:L.bage_sale.replace("{{","[").replace("}}","]"))}" data-label-type="${(V=this.data.settings)==null?void 0:V.sale_badge_type}">
                                    ${this.lang((j=this.data.settings)==null?void 0:j.bage_sale,"sale_badge",{sale:"sale"})}
                                </span>
                            {%- endif -%}`:""}

                        ${(A=this.data.settings)!=null&&A.metafield_label?`
                            {%- capture meta_label-%}{{${this.data.settings.metafield_label}}}{%- endcapture -%}
                                {%- if meta_label != blank -%}
                                    <span class="ecom-product-single__media-label--metafield">
                                        {{meta_label}}
                                    </span>
                                {%- endif -%}
                                `:""}

                        ${((H=this.data.settings)==null?void 0:H.show_badges_tags)&&((R=this.data.settings)==null?void 0:R.label_badge_tags)?`
                                {% capture badge_tags %}${this.label_badge_tags}{% endcapture%}
                                {%- assign badge_tags = badge_tags | strip | split: ',' -%}
                                {% if badge_tags %}
                                    {% for badge in badge_tags %}
                                        {%- assign bad = badge | strip -%}
                                        {% if product.tags contains bad %}
                                            <span class="ecom-product-single__media-label--tags ecom-product-single__media-label--tags-{{ bad | handleize}}">
                                                {{ bad }}
                                            </span>
                                        {% endif %}
                                    {% endfor %}
                                {% endif %}

                                `:""}
                        </div>
                        `:""}
               `,n={product_grid:{code:`
                    {% comment %}
                        Reactivity
                        *this.data.settings.image_action
                        *this.data.settings.enable_zoom
                    {% endcomment %}
                    ${r}
                    {% assign img_padding = ${(F=this.data.settings)!=null&&F.grid_items?this.get_row_items((Z=this.data.settings)==null?void 0:Z.grid_items):1} | times: 1 %}
                    {% assign img_padding__tablet = ${(W=this.data.settings)!=null&&W.grid_items__tablet?this.get_row_items((X=this.data.settings)==null?void 0:X.grid_items__tablet):1} | times: 1 %}
                    {% assign img_padding__mobile = ${(D=this.data.settings)!=null&&D.grid_items__mobile?this.get_row_items((Y=this.data.settings)==null?void 0:Y.grid_items__mobile):1} | times: 1 %}
                    <div class="ecom-swiper-wrapper ecom-product-single__media--images ecom-swiper-wrapper ecom-product-single__media--images-grid ecom-flex fl_wrap" >
                        {% for image in product.images %}
                            {% assign img_ration = 1 | divided_by: image.aspect_ratio | times: 100 %}
                            <div
                                class="${e} ecom-product-single__media--image${(J=this.data.settings)!=null&&J.grid_items?" ecom-col-lg-"+((G=this.data.settings)==null?void 0:G.grid_items):""}${(U=this.data.settings)!=null&&U.grid_items__tablet?" ecom-col-md-"+((K=this.data.settings)==null?void 0:K.grid_items__tablet):""}${(Q=this.data.settings)!=null&&Q.grid_items__mobile?" ecom-col-"+((ee=this.data.settings)==null?void 0:ee.grid_items__mobile):""}${this.enable_zoom?" ecom-image-zoom":""}" ${this.outerZoom?'data-ecom-zoom-layout="outer"':""} data-index="{{forloop.index0}}"  data-variant_id="{{ image.variants | map:'id' | join: ','  }}" style="--img_padding: {{ img_ration | divided_by:  img_padding }}%;--img_padding__tablet: {{ img_ration | divided_by: img_padding__tablet }}%;--img_padding__mobile: {{ img_ration | divided_by: img_padding__mobile }}%;"
                            >
                                ${this.enable_zoom?'<a href="{{ image | img_url: "2048x2048"}}" class="ecom-img-zoom-a" data-ecom-role="zoom-target">':""}
                                    {%- assign img_master = image | img_url: 'master' -%}
                                    {{ image | image_url: width: 1946 | image_tag:
                                        sizes: sizes,
                                        widths: '246, 493, 600, 713, 823, 990, 1100, 1206, 1346, 1426, 1646, 1946',
                                        class: 'ecom-image-default'
                                        ${this.image_action==="lightbox"?",ecom-modal-source:img_master , ecom-modal:'image'":""}
                                        ${(ie=this.data.settings)!=null&&ie.disable_lazyload?"":",loading: 'lazy'"}
                                        ,alt: image.alt | escape
                                    }}
                                ${this.enable_zoom?"</a>":""}
                            </div>
                        {% endfor %}
                        {%- for media in product.media -%}
                            {% assign media_ration = 1 | divided_by: media.aspect_ratio | times: 100 %}
                            {% case media.media_type %}
                                {% when 'image' %}
                                    {% continue %}
                                {% when 'external_video'%}
                                    <div class="${e} ecom-product-single__media---external-video ecom-product-single__media--full" data-position="{{media.position}}" style="padding-top: 56%;">
                                        {{ media | external_video_tag: image_size:'master' }}
                                    </div>
                                {% when 'video' %}
                                    <div data-stopdrag="true" class="${e} ecom-product-single__media--video ecom-product-single__media--full ecom-swiper-no-swiping" data-position="{{media.position}}" style="--img_padding: {{ media_ration | divided_by:  img_padding }}%;--img_padding__tablet: {{ media_ration | divided_by: img_padding__tablet }}%;--img_padding__mobile: {{ media_ration | divided_by: img_padding__mobile }}%;">
                                        {{ media | video_tag: image_size:'master', class: 'ecom-media-video', controls: true }}
                                        <button  class="ecom-product-single__media--play-control"
                                        type="button"
                                        >
                                            <span class="ecom-product-single__media--play-control-wrapper">
                                                <span class="visually-hidden">Play video</span>
                                                ${(te=this.data.settings)!=null&&te.video_icon?this.data.settings.video_icon.value:""}
                                            </span>
                                        </button>
                                    </div>
                                {% when 'model' %}
                                    <div class="${e} ecom-swiper-no-swiping  ecom-product-single__media--model ecom-product-single__media--full" data-stopdrag="true" data-position="{{media.position}}">
                                        <div class="ecom-product-single__media--model-wrapper" style="padding-top: 100%">
                                            {{ media | model_viewer_tag: image_size:'master', reveal: 'interaction', toggleable: true, data-model-id: media.id }}
                                        </div>
                                    </div>
                                {% else %}
                                    <div data-media-type="{{media.media_type}}" class="${e} ecom-swiper-no-swiping ecom-product-single__media--full" data-position="{{media.position}}">
                                        <div class="ecom-product-single__media" style="--img_padding: {{ media_ration | divided_by:  img_padding }}%;--img_padding__tablet: {{ media_ration | divided_by: img_padding__tablet }}%;--img_padding__mobile: {{ media_ration | divided_by: img_padding__mobile }}%;">
                                            {{ media | media_tag: image_size:'master', class: 'ecom-product-single__media--item' }}
                                        </div>
                                    </div>
                                {% endcase %}
                            {%- endfor -%}
                        </div>

                        ${i}
                    `,preview:`
                            <div class="ecom-swiper-wrapper ecom-product-single__media-images">
                                <div class="${e}">
                                    <img src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/backpack.svg?7273" />
                                </div>
                                <div class="${e}">
                                    <img loading="lazy" src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/shoe.svg?7273" />
                                </div>
                                <div class="${e}">
                                    <img loading="lazy" src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/shoe.svg?7273" />
                                </div>
                            </div>
                    `},product_media:{code:`
                    {% comment %}
                        Reactivity
                        *this.data.settings.image_action
                        *this.data.settings.enable_zoom
                    {% endcomment %}

                    ${r}

                    {% assign img_padding = ${(oe=this.data.settings)!=null&&oe.itemsPerView?(ae=this.data.settings)==null?void 0:ae.itemsPerView:1} | times: 1 %}
                    {% assign img_padding__tablet = ${(se=this.data.settings)!=null&&se.itemsPerView__tablet?(ne=this.data.settings)==null?void 0:ne.itemsPerView__tablet:1} | times: 1 %}
                    {% assign img_padding__mobile = ${(le=this.data.settings)!=null&&le.itemsPerView__mobile?(re=this.data.settings)==null?void 0:re.itemsPerView__mobile:1} | times: 1 %}

                    <div class="ecom-swiper-wrapper ecom-product-single__media--images ecom-swiper-wrapper ecom-product-single__media--images-layout__${this.layout}">
                        {% for image in product.images%}
                            {% assign img_ration = 1 | divided_by: image.aspect_ratio | times: 100 %}
                            <div class="${e} ecom-product-single__media--image${this.enable_zoom?" ecom-image-zoom":""}" ${this.outerZoom?'data-ecom-zoom-layout="outer"':""}  data-index="{{forloop.index0}}"  data-variant_id="{{ image.variants | map:'id' | join: ','  }}"  style="${this.layout==="grid"?"padding-top: {% if forloop.first %}{{ 1 | divided_by: image.aspect_ratio | times: 100 }}{% else %}{{ 1 | divided_by: image.aspect_ratio | times: 50 }}%{% endif %}":"--img_padding: {{ img_ration | divided_by:  img_padding }}%;--img_padding__tablet: {{ img_ration | divided_by: img_padding__tablet }}%;--img_padding__mobile: {{ img_ration | divided_by: img_padding__mobile }}%;"}">
                                ${this.enable_zoom?'<a href="{{ image | img_url: "2048x2048"}}" class="ecom-img-zoom-a" data-ecom-role="zoom-target">':""}
                                {%- assign img_master = image | img_url: 'master' -%}
                                {{ image | image_url: width: 1946 | image_tag:
                                    sizes: sizes,
                                    widths: '246, 493, 600, 713, 823, 990, 1100, 1206, 1346, 1426, 1646, 1946',
                                    class: 'ecom-image-default'
                                    ${this.image_action==="lightbox"?",ecom-modal-source:img_master , ecom-modal:'image'":""}
                                    ${(de=this.data.settings)!=null&&de.disable_lazyload?"":",loading: 'lazy'"}
                                    ,alt: image.alt | escape
                                    }}
                                ${this.enable_zoom?"</a>":""}
                            </div>
                        {% endfor %}
                        {%- for media in product.media -%}
                            {% assign media_ration = 1 | divided_by: media.aspect_ratio | times: 100 %}
                            {% case media.media_type %}
                                {% when 'image' %}
                                    {% continue %}
                                {% when 'external_video'%}
                                    <div class="${e} ecom-product-single__media---external-video ecom-product-single__media--full" data-position="{{media.position}}" style="--img_padding: {{ media_ration | divided_by:  img_padding }}%;--img_padding__tablet: {{ media_ration | divided_by: img_padding__tablet }}%;--img_padding__mobile: {{ media_ration | divided_by: img_padding__mobile }}%;">
                                        {{ media | external_video_tag: image_size:'master' }}
                                    </div>
                                {% when 'video' %}
                                    <div data-stopdrag="true" class="${e} ecom-product-single__media--video ecom-product-single__media--full ecom-swiper-no-swiping" data-position="{{media.position}}" style="--img_padding: {{ media_ration | divided_by:  img_padding }}%;--img_padding__tablet: {{ media_ration | divided_by: img_padding__tablet }}%;--img_padding__mobile: {{ media_ration | divided_by: img_padding__mobile }}%;">
                                        {{ media | video_tag: image_size:'master', class: 'ecom-media-video', controls: ${(me=this.data.settings)==null?void 0:me.video_control}, autoplay: ${(ce=this.data.settings)==null?void 0:ce.video_auto_play}, mute: ${(pe=this.data.settings)==null?void 0:pe.video_mute} }}
                                        ${(ue=this.data.settings)!=null&&ue.video_auto_play?"":`
                                                <button  class="ecom-product-single__media--play-control" type="button">
                                                    <span class="ecom-product-single__media--play-control-wrapper">
                                                        <span class="visually-hidden">Play video</span>
                                                        ${(ge=this.data.settings)!=null&&ge.video_icon?this.data.settings.video_icon.value:""}
                                                    </span>
                                                </button>
                                            `}
                                    </div>
                                {% when 'model' %}
                                    <div class="${e} ecom-swiper-no-swiping  ecom-product-single__media--model ecom-product-single__media--full" data-stopdrag="true" data-position="{{media.position}}">
                                        <div class="ecom-product-single__media--model-wrapper" style="padding-top: 100%">
                                            {{ media | model_viewer_tag: image_size:'master', reveal: 'interaction', toggleable: true, data-model-id: media.id }}
                                        </div>
                                    </div>
                                {% else %}
                                    <div data-media-type="{{media.media_type}}" class="${e} ecom-swiper-no-swiping ecom-product-single__media--full" data-position="{{media.position}}">
                                        <div class="ecom-product-single__media" style="--img_padding: {{ media_ration | divided_by:  img_padding }}%;--img_padding__tablet: {{ media_ration | divided_by: img_padding__tablet }}%;--img_padding__mobile: {{ media_ration | divided_by: img_padding__mobile }}%;">
                                            {{ media | media_tag: image_size:'master', class: 'ecom-product-single__media--item' }}
                                        </div>
                                    </div>
                                {% endcase %}
                            {%- endfor -%}
                        </div>

                        ${i}
                    `,preview:`
                            <div class="ecom-swiper-wrapper ecom-product-single__media-images">
                                <div class="${e}">
                                    <img src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/backpack.svg?7273" />
                                </div>
                                <div class="${e}">
                                    <img loading="lazy" src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/shoe.svg?7273" />
                                </div>
                                <div class="${e}">
                                    <img loading="lazy" src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/shoe.svg?7273" />
                                </div>
                            </div>
                    `},product_media_thumbs:{code:`
                    {%- if product.media.size > 1 -%}
                    <div class="ecom-swiper-wrapper">
                        {% for image in product.images%}
                            <div class="ecom-product-single__media--thumbnail ecom-swiper-slide"  data-variant_id="{{ image.variants | map:'id' | join:','  }}">
                                <img
                                    class="ecom-product-thumbnail"
                                    src="{{ image | img_url: '${this.thumbnail_size}' ${this.thumbnail_crop!=="none"?`, crop: '${this.thumbnail_crop}'`:""} }}"
                                    alt="{{ image.alt  }}"
                                    ${(_e=this.data.settings)!=null&&_e.disable_lazyload?"":'loading="lazy"'}
                                />
                            </div>
                        {% endfor %}
                        {%- for media in product.media -%}
                            {% if media.media_type != 'image' %}
                                <div class="ecom-product-single__media--thumbnail ecom-swiper-slide">
                                    <div class="ecom-product-single__media--thumbnail--icon">
                                        {% if media.media_type == 'model' %}
                                             ${(he=this.data.settings)!=null&&he.thumbnail_model_icon?this.data.settings.thumbnail_model_icon.value:""}
                                        {% else %}
                                            ${(be=this.data.settings)!=null&&be.thumbnail_video_icon?this.data.settings.thumbnail_video_icon.value:""}
                                        {% endif %}
                                    </div>
                                    <img src="{{ media.preview_image | img_url: '${this.thumbnail_size}' ${this.thumbnail_crop!=="none"?`, crop: '${this.thumbnail_crop}'`:""} }}"   alt="{{ media.alt }}" ${(fe=this.data.settings)!=null&&fe.disable_lazyload?"":'loading="lazy"'}/>
                                </div>
                            {% endif %}
                        {%- endfor -%}
                        </div>
                        ${l}
                        {%- endif -%}
                    `,preview:`
                        <div class="ecom-swiper-wrapper">
                        <div class="ecom-product-single__media--thumbnail ecom-swiper-slide">
                            <img class="ecom-product-thumbnail" width="100"  src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/backpack.svg?7273" />
                        </div>
                        <div class="ecom-product-single__media--thumbnail ecom-swiper-slide">
                            <img class="ecom-product-thumbnail"  width="100" src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/shoe.svg?7273" />
                        </div>
                        <div class="ecom-product-single__media--thumbnail ecom-swiper-slide">
                            <img class="ecom-product-thumbnail" width="100"  src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/shoe.svg?7273" />
                        </div>
                    </div>
                    `},thumb_count_class:{code:`
                        {% if product.media.size == 1 %}
                            ecom-dont-has-many-images
                         {% endif %}
                    `,preview:""},product_model:{code:`
                        <${t} type="application/json" id="Product-model-{{ product.id }}">
                            {{ product.media | where: 'media_type', 'model' | json }}
                        </${t}>
                    `,preview:""},featured_image:{code:`
                            ${r}
                            <div class="${e} ecom-product-single__media--image${this.enable_zoom?" ecom-image-zoom":""}" ${this.outerZoom?'data-ecom-zoom-layout="outer"':""}" style="padding-top: {{ 1 | divided_by: product.featured_image.aspect_ratio | times: 100 }}%;">
                                ${this.enable_zoom?'<a href="{{ product.featured_image | img_url: "2048x2048"}}" class="ecom-img-zoom-a" data-ecom-role="zoom-target">':""}
                                    {%- assign img_master = product.featured_image | img_url: 'master' -%}
                                    {{ product.featured_image | image_url: width: 1946 | image_tag:
                                        loading: lazy,
                                        sizes: sizes,
                                        widths: '246, 493, 600, 713, 823, 990, 1100, 1206, 1346, 1426, 1646, 1946',
                                        class: 'ecom-image-default'
                                        ${this.image_action==="lightbox"?",ecom-modal-source:img_master , ecom-modal:'image'":""}
                                        ,alt: product.featured_image.alt | escape
                                    }}
                                ${this.enable_zoom?"</a>":""}
                            </div>
                        `,preview:`
                        <div class="${e}">
                                <img src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/backpack.svg?7273" />
                        </div>
                        `}};return this.layout==="slider"&&this.show_thumbnails?{product_media:n.product_media,product_media_thumbs:n.product_media_thumbs,product_model:n.product_model,thumb_count_class:n.thumb_count_class}:this.layout==="single"?{featured_image:n.featured_image}:{product_media:n.product_media,product_model:n.product_model,product_grid:n.product_grid}},css(){return`
                .ecom-product-single__media--image img {
                    display: block;
                    max-width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                }
                .ecom-media-video, .shopify-model-viewer-ui {
                    position: absolute;
                    inset: 0
                }
                .ecom-product-single__media--thumbs:empty {
                    display: none !important;
                }
                .ecom-product-single__media {
                    display: block;
                    position: relative;
                    width: 100%;
                }
                .ecom-product-single__media--grid .ecom-product-single__media--images img {
                    max-width: 100%;
                }

                .ecom-product-single__media--grid .ecom-product-single__media--images {
                    display: flex;
                    flex-wrap: wrap;
                    margin-bottom: 2rem;
                    padding: 0;
                    gap: 10px;
                    list-style: none;
                }

                .ecom-product-single__media--grid .ecom-product-single__media--image {
                    width: calc(50% - 1rem / 2);
                    max-width: 100%;
                    flex-grow: 1;
                }
                /** Set the media image and the first image 100% width **/

                .ecom-product-single__media--grid .ecom-product-single__media--image:first-child {
                    width: 100%;
                }

                .ecom-product-single__media--grid .ecom-product-single__media--image.ecom-product-single__media--full {
                    width: 100%;
                }
                .ecom-product-single__media-label {
                    align-items: center;
                }
                .ecom-product-single__media-label > span {
                    height: fit-content;
                }

                .ecom-swiper-controls::after {
                    display: none
                }

                .ecom-product-single__media--grid .ecom-swiper-controls {
                    display: none;
                }

                .ecom-product-single__media--grid .ecom-product-single__media--images img,
                .ecom-product-single__media--video video {
                    max-width: 100%;
                }

                .ecom-product-single__media--video video {
                    width: 100%;
                }

                .ecom-product-single__media--grid .ecom-product-single__media--image:first-child {
                    width: 100%;
                }

                .ecom-product-single__media--grid .ecom-product-single__media--image.ecom-product-single__media--full {
                    width: 100%;
                }

                .ecom-product-single__media---external-video {
                    position: relative;
                }

                .ecom-product-single__media--model {
                    position: relative;
                }
                .ecom-modal .ecom-swiper-wrapper .ecom-swiper-slide img {
                    margin: auto !important;
                }
                .ecom-product-single__media---external-video iframe,
                .ecom-product-single__media--model-wrapper model-viewer {
                    display: block;
                    max-width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                }

                .ecom-product-single__media .shopify-model-viewer-ui.shopify-model-viewer-ui--desktop {
                    display: block;
                    max-width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                }
                .ecom-product-single__media--image {
                    min-height: 100px;
                }
                .ecom-swiper-wrapper {
                    align-items: stretch;
                }

                .ecom-swiper-wrapper .ecom-swiper-slide {
                    text-align: center;
                }

                .ecom-swiper-wrapper .ecom-swiper-slide img {
                    height: 100%;
                    object-fit: contain;
                }

                .ecom-product-single__media--thumbnail {
                    border: 2px solid transparent;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                }

                .ecom-product-single__media--thumbnail img {
                    width: 100%;
                    max-width: 100%;
                    height: auto;
                    border: 0;
                    vertical-align: middle;
                    position: relative;
                    z-index: 1;
                }

                .ecom-swiper-controls svg {
                    height: 16px;
                    width: 16px;
                    color: inherit;
                }

                .ecom-product-single__media-wrapper .ecom-swiper-controls {
                    cursor: pointer;
                    width: auto;
                    height: auto;
                    transition: .2s ease-in-out;
                }
                .ecom-swiper-controls-thumb svg {
                    height: 100%;
                    width: 100%;
                    color: inherit;
                }
                .ecom-product-single__media--thumbs{
                    position:relative
                }
                .ecom-swiper-button-thumb-prev{
                    left:0
                }
                .ecom-swiper-controls-thumb > svg{
                    width:24px;
                    height:24px;
                }

                .ecom-swiper-controls-thumb {
                    z-index:10;
                    display:flex;
                    cursor: pointer;
                    width:auto;
                    height:auto;
                    transition: .2s ease-in-out;
                    text-align: center;
                }
                .ecom-swiper-controls-thumb::after{
                    display:none
                }

                .ecom-swiper-controls:after {
                    margin-left: -3px;
                }


                .ecom-product-single__media--thumbnail {
                    border-radius: 6px;
                }

                .ecom-product-single__media--thumbnail:hover {
                    z-index: 10;
                }

                button.ecom-product-single__media--play-control {
                    display: block;
                    max-width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    border: none;
                    cursor: pointer;
                    margin: 0;
                    padding: 0;
                    background-color:rgb(238 238 238 / 40%);
                }

                .ecom-product-single__media--play-control-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%) scale(1);
                    z-index: 1;
                }
                .ecom-product-single__media--thumbnail {
                    position: relative;
                }

                .ecom-product-single__media--thumbnail--icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 3;
                    display: flex;
                }

                .ecom-product-single__media--thumbnail--icon svg {
                    display: flex;
                }
                .ecom-product-single__media--horizontal .ecom-swiper-controls-thumb,
                .ecom-product-single__media-tablet--horizontal .ecom-swiper-controls-thumb,
                ecom-product-single__media-mobile--horizontal .ecom-swiper-controls-thumb{
                    transform:translateY(-50%);
                    top: 50%;
                    margin-top: 0px;
                    width: auto;
                    height: auto;
                }
                .ecom-dont-has-many-images .ecom-product-single__media--thumbs {
                    display: none;
                }

                .ecom-product-single__media--image.ecom-image-align-center img {
                    left: 50%;
                    right: unset;
                    transform: translateX(-50%);
                }
                .ecom-product-single__media--image.ecom-image-align-left img {
                    left: 0;
                    right: unset;
                    transform: none;
                }
                .ecom-product-single__media--image.ecom-image-align-right img {
                    left: unset;
                    right: 0;
                    transform: none;
                }

                .ecom-product-single__media .ecom-product-single__media-container {
                    display: flex;
                    flex-direction: column;
                    gap: 10px
                }

                .ecom-swiper-container {
                    width: 100%;
                }
                .ecom-product-single__media--thumbnail > * {
                    transition:inherit;
                }

                /* Image Zoom */
                .ecom-image-zoom {
                    position: relative;
                    display: inline-block;
                    overflow: hidden;
                }

                .ecom-image-zoom > a {
                    cursor: zoom-in;
                }

                .ecom-image-zoom.is-error > a {
                    cursor: not-allowed;
                }

                .ecom-image-zoom.is-loading > a {
                    cursor: progress;
                }

                .ecom-image-zoom > a > img {
                    display: block;
                }

                .ecom-image-zoom-notice {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    z-index: 150;
                    width: 10em;
                    margin: -1em 0 0 -5em;
                    line-height: 2em;
                    text-align: center;
                    background: #FFF;
                    box-shadow: 0 0 10px #888;
                }

                .ecom-image-zoom-flyout {
                    position:absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 200;
                    overflow: hidden;
                    background: #FFF;
                    cursor: crosshair;
                }
                .ecom-image-zoom-window.ecom-image-zoom-flyout {
                    opacity: 0;
                    box-shadow: 0 1px 5px rgba(127,127,127,0.02), 0 5px 18px rgba(127,127,127,0.2);
                }
                .ecom-image-zoom-flyout.ecom-open {
                    animation: fadeZoomIn 200ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
                    -webkit-animation: fadeZoomIn 200ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }

                .ecom-image-zoom-flyout.ecom-close {
                    animation: fadeZoomOut 150ms cubic-bezier(0, 0, 0.2, 1)
                }

                .ecom-image-zoom-flyout img {
                    width: auto;
                    max-width: none !important;
                    height: auto !important;
                    object-fit: unset important;

                }
                .ecom-product-single__media .ecom-image-align {
                    justify-content: center;
                }
                .ecom-product-single__media-label {
                    z-index: 99;
                    pointer-events: none;
                }
                .ecom-label-position__topleft {
                    top: 20px;
                    left: 20px;
                }
                .ecom-label-position__topright {
                    top: 20px;
                    right: 20px;
                }
                .ecom-label-position__bottomleft {
                    bottom: 20px;
                    left: 20px;
                }
                .ecom-label-position__bottomright {
                    bottom: 20px;
                    right: 20px;
                }
                .ecom-product-single__media--image, .ecom-product-single__media--full {
                    padding-top: var(--img_padding, 100%)
                }
                @media screen and (min-width: 1025px) {
                    .ecom-product-single__media.ecom-position-sticky {
                        position: sticky;
                        top: 0
                    }
                    .ecom-product-single__media .ecom-product-single__media--vertical .ecom-product-single__media--thumbs {
                        width: 120px;
                    }
                    .ecom-product-single__media--vertical .ecom-product-single__media--thumbs .ecom-swiper-button-next{
                        right:auto;
                        left:50%;
                        transform:translateX(-50%);
                        top:auto;
                        bottom:10px;
                    }
                    .ecom-product-single__media--vertical .ecom-product-single__media--thumbs .ecom-swiper-controls-thumb svg{
                        transform: rotate(90deg);
                    }
                    .ecom-product-single__media--vertical .ecom-product-single__media--thumbs .ecom-swiper-button-prev{
                        right:auto;
                        left:50%;
                        transform:translateX(-50%);
                        top:10px;
                        bottom:auto;
                    }
                    .ecom-product-single__media .ecom-product-single__media--horizontal .ecom-product-single__media--thumbs {
                        min-height: 100px;
                        height: auto;
                    }
                }
                @media (min-width: 768px) and (max-width: 1024px) {
                    .ecom-product-single__media--image.ecom-image-align-center--tablet img {
                        left: 50%;
                        right: unset;
                        transform: translateX(-50%);
                    }
                    .ecom-product-single__media--image.ecom-image-align-left--tablet img {
                        left: 0;
                        right: unset;
                        transform: none;
                    }
                    .ecom-product-single__media--image.ecom-image-align-right--tablet img {
                        left: unset;
                        right: 0;
                        transform: none;
                    }
                    .ecom-product-single__media--image, .ecom-product-single__media--full {
                        padding-top: var(--img_padding__tablet, 100%)
                    }
                    .ecom-product-single__media--thumbs.ecom-swiper-tablet-vertical {
                        min-width: 100px;
                        width: auto;
                    }
                    .ecom-product-single__media-tablet--vertical .ecom-product-single__media--thumbs .ecom-swiper-button-next{
                        right:auto;
                        left:50%;
                        transform:translateX(-50%);
                        top:auto;
                        bottom:10px;
                    }
                    .ecom-product-single__media-tablet--vertical .ecom-product-single__media--thumbs .ecom-swiper-controls-thumb svg{
                        transform: rotate(90deg);
                    }
                    .ecom-product-single__media-tablet--vertical .ecom-product-single__media--thumbs .ecom-swiper-button-prev{
                        right:auto;
                        left:50%;
                        transform:translateX(-50%);
                        top:10px;
                        bottom:auto;
                    }
                }
                @media (max-width: 767px) {
                    .ecom-product-single__media--image.ecom-image-align-center--mobile img {
                        left: 50%;
                        right: unset;
                        transform: translateX(-50%);
                    }
                    .ecom-product-single__media--image.ecom-image-align-left--mobile img {
                        left: 0;
                        right: unset;
                        transform: none;
                    }
                    .ecom-product-single__media--image.ecom-image-align-right--mobile img {
                        left: unset;
                        right: 0;
                        transform: none;
                    }
                    .ecom-product-single__media--image, .ecom-product-single__media--full {
                        padding-top: var(--img_padding__mobile, 100%)
                    }
                    .ecom-product-single__media--vertical-mobile .ecom-product-single__media--featured {
                        width: auto;
                    }
                    .ecom-product-single__media--thumbs.ecom-swiper-mobile-vertical {
                        min-width: 100px;
                        width: auto;
                    }
                    .ecom-product-single__media-mobile--vertical .ecom-product-single__media--thumbs .ecom-swiper-button-next{
                        right:auto;
                        left:50%;
                        transform:translateX(-50%);
                        top:auto;
                        bottom:10px;
                    }
                    .ecom-product-single__media-mobile--vertical .ecom-product-single__media--thumbs .ecom-swiper-controls-thumb svg{
                        transform: rotate(90deg);
                    }
                    .ecom-product-single__media-mobile--vertical .ecom-product-single__media--thumbs .ecom-swiper-button-prev{
                        right:auto;
                        left:50%;
                        transform:translateX(-50%);
                        top:10px;
                        bottom:auto;
                    }
                }
                @keyframes fadeZoomIn {
                0% {
                    transform: scale(0.8);
                    opacity: 0; }

                100% {
                    transform: scale(1);
                    opacity: 1; } }

                @keyframes fadeZoomOut {
                0% {
                    opacity: 1; }

                100% {
                    opacity: 0; } }

            `},layout(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)!=null&&t.layout?this.data.settings.layout:"slider"},image_action(){var e,t,i;return(i=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.image_action)!=null?i:"nothing"},enable_zoom(){return this.data&&this.data.settings&&"enable_zoom"in this.data.settings?this.data.settings.enable_zoom:!1},outerZoom(){var e;return this.data&&this.data.settings&&"enable_zoom"in this.data.settings&&this.data.settings.enable_zoom?((e=this.data.settings)==null?void 0:e.zoom_type)=="outer":!1},show_thumbnails(){var e,t,i;return(i=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.show_thumbnails)!=null?i:!1},sliderControls(){return this.data&&this.data.settings&&this.data.settings.sliderControls},requestShopifyType(){return{shopify_type:"product"}},thumbnail_size(){var e,t,i,l,r,n;return((i=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.thumbnail_width)!=null?i:"")+"x"+((n=(r=(l=this.data)==null?void 0:l.settings)==null?void 0:r.thumbnail_height)!=null?n:"")},thumbnail_crop(){var e,t,i;return(i=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.thumbnail_crop)!=null?i:"none"},default(){return{settings:{layout:"slider",show_pagination:!1,show_thumbnails:!0,thumbnail_position:"column",slidesPerView:4,thumbnail_position__tablet:"column",slidesPerView__tablet:4,slidesPerView__mobile:4,thumbnail_position__mobile:"column",sliderControls:!0,zoom_height:"500px",zoom_width:"500px",sale_text:"Sale",sold_text:"Sold out",bage_sale:"-{{sale}}%",label_badge_tags:"hot, new"},style:{product_image:{tab:"normal"},slider_controls:{navtab:"hover",navigatorPrimaryColornormalmode:"#e0dcdc",navigatorFontSize:"32px",navigatorPrimaryColorhovermode:"#240e0e"},product_thumb:{tabs:"active",tab:"normal",imageTransition:300,imageOpacitynormalmode:.8,imageOpacityhovermode:1,imageOpacityactivemode:1}}}},style(){var n,u,v,b,w,g,x,y,f,o,m,d,_,a;const e=[{name:"imageOpacity",type:"number",label:"Opacity",options:{step:.01,min:.1,max:1},css:{properties:{opacity:""}}},{name:"imageFilter",label:"CSS Filters",type:"popup",options:{oneline:!0,type:"filter"},css:{}},{name:"imageBoxShadow",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow"},css:{}},{name:"iamgeBorder",label:"Border",type:"popup",options:{oneline:!0,type:"border",size:"small"},css:{}},{name:"imageBorderRadius",label:"Border Radius",type:"dimension",options:{type:"radius",responsive:!0,units:"default"},css:{selector:" , img",properties:{"border-radius":""}}}],t=[{name:"iconPrimaryColor",label:"Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{color:""}}},{name:"iconBackground",label:"Background",type:"background",options:{oneline:!0,responsive:!0},css:{properties:{background:""}}},{type:"popup",label:"Border",name:"iconBorder",options:{oneline:!0,type:"border"},css:{properties:{border:""}}},{name:"iconBoxShadow",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow"},css:{properties:{"box-shadow":""}}},{name:"iconBorderRadius",label:"Border Radius",type:"dimension",options:{responsive:!0,type:"radius",units:{"%":{min:0,max:100},px:{min:0,max:1e3}}},css:{properties:{overflow:"hidden","border-radius":""}}}],i=[{group_alias:"image",options:{group_title:"Featured image",group_name:"product_image",selector:" .ecom-product-single__media--featured"},modify:{params:[{position:15,fields:[{alias:"spacing",options:{name:"spacing",css:{selector:"root .ecom-product-single__media--featured .ecom-product-single__media--image"}}}]}]}}];(n=this.data.settings)!=null&&n.video_icon&&i.push({group_title:"Icon",group_name:"video_icon",selector:" .ecom-product-single__media--video ",params:[{name:"iconFontSize",label:"Size",type:"number",options:{responsive:!0,units:{px:{min:0,max:300}}},css:{selector:" svg",properties:{height:"",width:""}}},{name:"iconTransform",label:"Rotate",type:"number",options:{responsive:!0,min:0,max:360},css:{selector:" svg",properties:{transform:"rotate(%value%deg)"}}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"}]},css:{isCss:!1}},...$(t,"normal",{selector:" .ecom-product-single__media--play-control-wrapper svg"}),...$(t,"hover",{selector:":hover  .ecom-product-single__media--play-control-wrapper svg"}),{alias:"spacing",options:{name:"spacing",css:{selector:" .ecom-product-single__media--play-control-wrapper svg"}}}]}),this.layout==="slider"&&((v=(u=this.data)==null?void 0:u.settings)!=null&&v.show_thumbnails&&i.push({group_title:"Thumbnails",group_name:"product_thumb",selector:" .ecom-product-single__media--thumbnail",params:[{name:"imageObjectFit",label:"Type",type:"popup",options:{type:"dropdown",default:!1,values:{none:"None",fill:"Fill",contain:"Contain",cover:"Cover","scale-down":"Scale down"},control_width:"50%"},css:{selector:" img",properties:{"object-fit":""}}},{type:"number",name:"imageHeight",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3},vh:{min:0,max:100}}},css:{properties:{height:""}}},{name:"tabs",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"},{name:"active",title:"Active"}]},css:{isCss:!1}},...$(e,{relation:"tabs",status:"normal"}),...$(e,{relation:"tabs",status:"hover"},":hover"),...$(e,{relation:"tabs",status:"active"},".ecom-swiper-slide-thumb-active"),{name:"imageAnimation",label:"Hover Animation",type:"popup",options:{type:"dropdown",values:"animation",size:"small",visible:{keep_data:!0,condition:s=>s.tabs==="hover"}},css:{selector:":hover",properties:{animation:""}}},{name:"imageTransition",type:"number",label:'Transition Duration <span class="lowercase">(ms)</span>',options:{min:0,max:1500,visible:{keep_data:!0,condition:s=>s.tabs==="hover"}},css:{properties:{transition:"all %value%ms ease"}}},{alias:"spacing",options:{name:"thumbSpacing"}},{type:"line"},{type:"paragraph",content:"**Media icon**",name:"thumbnail_group"},{name:"iconFontSize",label:"Size",type:"number",options:{responsive:!0,units:{px:{min:0,max:300}}},css:{selector:" svg",properties:{height:"",width:""}}},{name:"iconTransform",label:"Rotate",type:"number",options:{responsive:!0,min:0,max:360},css:{selector:" svg",properties:{transform:"rotate(%value%deg)"}}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"}]},css:{isCss:!1}},...$(t,"normal",{selector:" .ecom-product-single__media--thumbnail--icon svg"}),...$(t,"hover",{selector:":hover .ecom-product-single__media--thumbnail--icon svg"}),{alias:"spacing",options:{name:"iconSpacing",css:{selector:" svg"}}}]}),(w=(b=this.data)==null?void 0:b.settings)!=null&&w.sliderControls&&i.push({group_alias:"swiper:nav",options:{group_title:"Navigation",group_name:"slider_controls",selector:" .ecom-product-single__media--featured.ecom-swiper-container"}}),(x=(g=this.data)==null?void 0:g.settings)!=null&&x.sliderControlsThumb&&i.push({group_alias:"swiper:nav",options:{group_title:"Navigation thumb",group_name:"slider_controls_thumb",selector:" .ecom-product-single__media--thumbs"}}),(f=(y=this.data)==null?void 0:y.settings)!=null&&f.show_pagination&&i.push({group_alias:"swiper:pagination",options:{group_title:"Slider pagination",group_name:"slider_pagination",selector:" .ecom-product-single__media--featured"}}));const l={group_alias:"box",options:{group_title:"Badge box",group_name:"label_wrapper",selector:" .ecom-product-single__media-label"},modify:{params:[{position:10,fields:{alias:"spacing"}},{position:0,fields:{type:"number",label:"Gap",name:"label_gap",options:{units:{px:{min:0,max:200}}},css:{properties:{gap:""}}}}]}},r={group_alias:["text:spacing","box"],options:{group_title:"Badge general",group_name:"label_general",selector:" .ecom-product-single__media-label > span"},modify:{remove:[{index:0,length:1},{index:3,length:1}]}};if(i.push(l,r),(o=this.data.settings)!=null&&o.show_sale_sold_text){const s={group_alias:["text:spacing","box"],options:{group_title:"Badge sale",group_name:"label_sale_text",selector:" .ecom-product-single__media-label > span.ecom-product-single__media-label-sale"},modify:{remove:[{index:0,length:1},{index:3,length:1}]}},h={group_alias:["text:spacing","box"],options:{group_title:"Badge soldout",group_name:"label_soldout",selector:" .ecom-product-single__media-label > span.ecom-product-single__media-label-sold-out"},modify:{remove:[{index:0,length:1},{index:3,length:1}]}};i.push(s,h)}if((m=this.data.settings)!=null&&m.show_sale_badge){const s={group_alias:["text:spacing","box"],options:{group_title:"Badge sale value",group_name:"label_badge",selector:" .ecom-product-single__media-label > span.ecom-product-single__media-label--bage-sale"},modify:{remove:[{index:0,length:1},{index:3,length:1}]}};i.push(s)}if((d=this.data.settings)!=null&&d.metafield_label){const s={group_alias:["text:spacing","box"],options:{group_title:"Badge metafields",group_name:"label_metafields",selector:" .ecom-product-single__media-label > span.ecom-product-single__media-label--metafield"},modify:{remove:[{index:0,length:1},{index:3,length:1}]}};i.push(s)}if(((_=this.data.settings)==null?void 0:_.show_badges_tags)&&((a=this.data.settings)==null?void 0:a.label_badge_tags)){const s={group_alias:["text:spacing","box"],options:{group_title:"Badge Tags",group_name:"label_tags",selector:" .ecom-product-single__media-label > span.ecom-product-single__media-label--tags"},modify:{remove:[{index:0,length:1},{index:3,length:1}]}};i.push(s)}return i}},watch:{"data.settings.thumbnail_position":{immediate:!0,handler(){this.$helpers.dispatchResize()}},"data.settings.thumbnail_position__tablet":{immediate:!0,handler(){this.$helpers.dispatchResize()}},"data.settings.thumbnail_position__mobile":{immediate:!0,handler(){this.$helpers.dispatchResize()}},"data.settings.slidesPerView":function(){this.$helpers.dispatchResize()}},methods:{get_row_items(e){switch(parseInt(e)){case 12:return 1;case 6:return 2;case 4:return 3;case 3:return 4;case 15:return 5;case 2:return 6;default:return 1}}}},Se=["data-breakpoints","data-priority","innerHTML"],Ce=["data-breakpoints","innerHTML"],Te=["data-priority","innerHTML"],Ee=["data-priority","innerHTML"],Be=["innerHTML"],Ie=["innerHTML"];function Me(e,t,i,l,r,n){var u,v,b,w,g,x,y,f,o,m,d,_,a,s;return k(),S("div",{class:T(["ecom-element ecom-product-single ecom-product-single__media",{"ecom-position-sticky":(v=(u=i.data)==null?void 0:u.settings)==null?void 0:v.position_sticky}])},[C("div",{class:T(["ecom-product-single__media-wrapper",e.liquid("thumb_count_class")])},[C("div",{class:T(["ecom-product-single__media-container",["ecom-product-single__media--"+n.layout,"ecom-product-single__media--"+(["row","row-reverse"].includes((w=(b=i.data)==null?void 0:b.settings)==null?void 0:w.thumbnail_position)?"vertical":"horizontal"),"ecom-product-single__media-tablet--"+(["row","row-reverse"].includes((x=(g=i.data)==null?void 0:g.settings)==null?void 0:x.thumbnail_position__tablet)?"vertical":"horizontal"),"ecom-product-single__media-mobile--"+(["row","row-reverse"].includes((f=(y=i.data)==null?void 0:y.settings)==null?void 0:f.thumbnail_position__mobile)?"vertical":"horizontal")]])},[n.layout==="slider"?(k(),S($e,{key:0},[C("div",{class:"ecom-product-single__media--featured ecom-swiper-container","data-breakpoints":JSON.stringify(n.breakpoints),"data-priority":(m=(o=i.data)==null?void 0:o.settings)!=null&&m.featured_image_priority?"featured":"variant",innerHTML:e.liquid("product_media")},null,8,Se),n.show_thumbnails?(k(),S("div",{key:0,class:T(["ecom-product-single__media--thumbs ecom-swiper-container",n.thumbClass]),"data-breakpoints":JSON.stringify(n.thumbsBreakpoints),innerHTML:e.liquid("product_media_thumbs")},null,10,Ce)):ke("",!0)],64)):n.layout==="single"?(k(),S("div",{key:1,class:"ecom-product-single__media--featured","data-priority":(_=(d=i.data)==null?void 0:d.settings)!=null&&_.featured_image_priority?"featured":"variant",innerHTML:e.liquid("featured_image")},null,8,Te)):n.layout==="grid_default"?(k(),S("div",{key:2,class:"ecom-product-single__media--featured","data-priority":(s=(a=i.data)==null?void 0:a.settings)!=null&&s.featured_image_priority?"featured":"variant",innerHTML:e.liquid("product_grid")},null,8,Ee)):(k(),S("div",{key:3,class:"ecom-product-single__media--featured",innerHTML:e.liquid("product_media")},null,8,Be))],2)],2),C("div",{class:"ecom-hidden-content",innerHTML:e.liquid("product_model")},null,8,Ie)],2)}const je=we(ve,[["render",Me]]);ve.__docgenInfo={exportName:"default",displayName:"ProductMedia",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/Image.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{je as default};
//# sourceMappingURL=Image.677d7105.js.map
