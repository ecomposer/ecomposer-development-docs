import{E as B,J as A,L as P,_ as O}from"./preview.a7f47650.js";import{o as m,a as d,u as y,v as g,y as b,F as j,t as W,E,z as L,P as T,A as z,V as H}from"./vue.esm-bundler.09fbef75.js";import"./chunk-2GDW2BFM.eab564c8.js";import"./index.e850844b.js";import"./iframe.0ad70ec4.js";import"../sb-preview/runtime.js";const M={name:"ImageHotSpots",docs:"https://help.ecomposer.io/docs/elements/basic-elements/hotspot/",presets:!0,mixins:[B,A,P],props:{data:{type:Object,default(){return{}}}},data(){return{drag:{currentEl:null,i:-1,started:!1,x:0,y:0},jsreactives:["items","trigger"]}},computed:{hotSpot(){return this.data.settings},cursorBtn(){let e="default";return this.exporting?e=this.imageHotspot.trigger==="click"?"pointer":"default":e="move",{cursor:e}},css(){return`
                .ecom-hidden{
                    display:none !important;
                }
                .element__image-hotspot--btn{
                    transition: opacity .3s ease ;
                }
                .element__image-hotspot .element__image-hotspot--content {
                    outline: none;
                }
                .element__image-hotspot--text.element__image-hotspot--btn-nolabel {
                    margin-top: -10px;
                    margin-left: -10px;
                    min-width: 20px;
                    min-height: 20px;
                }
                .element__image-hotspot--btn-nolabel .element__image-hotspot--sonar {
                    border-radius: 50%;
                    backface-visibility: hidden;
                    perspective: 800px;
                    position: absolute;
                    top: -8px;
                    right: -8px;
                    bottom: -8px;
                    left: -8px;
                    display: block;
                    animation: ecom_aimation-pulse 2s ease infinite;
                    background-color: rgba(255,255,255,.5);
                }
                .element__image-hotspot--btn-nolabel .element__image-hotspot--btn {
                    position: relative;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    backface-visibility: hidden;
                    perspective: 800px;
                    z-index: 1;
                    transition: all .3s ease;
                }
                .element__image-hotspot--btn-label {
                    margin-left: 4px;
                    font-size: 14px;
                }
                .element__image-hotspot--content {
                    position: absolute;
                    z-index: 100;
                    width: 250px;
                }
                .element__image-hotspot:not([data-trigger="always"]) .element__image-hotspot--content:not(.actived) {
                    opacity: 0;
                    visibility: hidden;
                }
                .element__image-hotspot--content.ecom-fade.actived {
                    animation-name: fadeIn;
                }
                .element__image-hotspot--content-bottom.ecom-slide.actived {
                    animation-name: slideUp;
                }
                .element__image-hotspot--content-top.ecom-slide.actived {
                    animation-name: slideDown;
                }
                .element__image-hotspot--content-right.ecom-slide.actived {
                    animation-name: slideLeft;
                }
                .element__image-hotspot--content-left.ecom-slide.actived {
                    animation-name: slideRight;
                }
                .element__image-hotspot--content.has-arrow:after {
                    position: absolute;
                    content: '';
                    width: 8px;
                    height: 16px;
                    background: #ffffff
                }
                .element__image-hotspot--content.arrow-left.has-arrow:after {
                    clip-path: polygon(0 0, 100% 50%, 0 100%);
                    top: 50%;
                    right: 12px;
                    transform: translateY(-50%);
                }
                .element__image-hotspot--content.arrow-right.has-arrow:after {
                    clip-path: polygon(0 50%, 100% 0 , 100% 100%);
                    top: 50%;
                    left: 12px;
                    transform: translateY(-50%);
                }
                .element__image-hotspot--content.arrow-bottom.has-arrow:after,
                .element__image-hotspot--content.arrow-top.has-arrow:after {
                    width: 16px;
                    height: 8px
                }
                .element__image-hotspot--content.arrow-bottom.has-arrow:after {
                    clip-path: polygon(50% 0, 100% 100%, 0 100%);
                    transform: translateX(-50%);
                    top: 13px;
                    left: 50%;
                }
                .element__image-hotspot--content.arrow-top.has-arrow:after {
                    clip-path: polygon(0 0 , 100% 0 , 50% 100%);
                    transform: translateX(-50%);
                    bottom: 12px;
                    left: 50%;
                }
                .element__image-hotspot--content-left, .element__image-hotspot--content-right {
                    top: 50%;
                    transform: translateY(-50%)
                }
                .element__image-hotspot--content-top, .element__image-hotspot--content-bottom {
                    left: 50%;
                    transform: translateX(-50%);
                }
                .element__image-hotspot--content-left {
                    right: 100%;
                    padding-right: 20px;
                }
                .element__image-hotspot--content-right {
                    left: 100%;
                    padding-left: 20px;
                }
                .element__image-hotspot--content-top {
                    bottom: 100%;
                    padding-bottom: 20px;

                }
                .element__image-hotspot--content-bottom {
                    top: 100%;
                    padding-top: 20px
                }
                .element__image-hotspot--content .element__image-hotspot--content-image {
                    object-fit: cover;
                }
                .element__image-hotspot--content .element__image-hotspot--content-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow .25s ease,opacity .25s ease;
                }
                .ecom-hotspots-container-tooltip.ecom-loading-image:before {
                    position: absolute;
                    content: '';
                    inset: 0;
                    background: rgba(0,0,0,0.6)
                }
                @keyframes ecom_aimation-pulse {
                    0%,100% {
                        transform: scale(1)
                    }

                    50% {
                        transform: scale(1.2)
                    }
                }
                @keyframes fadeIn {
                    from { opacity: 0; visibility: hidden; }
                    to   { opacity: 1; visibility: visible; }
                }
                @keyframes slideUp {
                    from { opacity: 0; visibility: hidden; transform: translate(-50%, 30px) }
                    to { opacity: 1; visibility: visible; transform: translateX(-50%) }
                }
                @keyframes slideDown {
                    from { opacity: 0; visibility: hidden; transform: translate(-50%, -30px) }
                    to { opacity: 1; visibility: visible; transform: translateX(-50%) }
                }
                @keyframes slideLeft {
                    from { opacity: 0; visibility: hidden; transform: translate(30px,-50%); }
                    to { opacity: 1; visibility: visible; transform: translateY(-50%) }
                }
                @keyframes slideRight {
                    from { opacity: 0; visibility: hidden; transform: translate(-30px,-50%); }
                    to { opacity: 1; visibility: visible; transform: translateY(-50%) }
                }
                .ecom__image-hostpot--content-container{
                    display:flex;
                }
                .element__image-hotspot--img img {
                    width: 100%;
                }
                .ecom-image-picture * {
                    transition:inherit;
                }
                @media only screen and (max-width: 480px) {
                    .element__image-hotspot--content{
                        top:50% !important;
                        left:50% !important;
                        transform: translate(-50%,-50%) !important;
                        position: fixed;
                        padding: 0 !important;
                    }
                    .ecom-slider .element__image-hotspot--content{
                        position: absolute;
                        top: 0;
                        transform: translate(-50%,-60%) !important;
                    }
                }
                @media only screen and (max-width: 767px) {
                    .element__image-hotspot--content.has-arrow:after {
                        display: none !important;
                    }
                }
            `},image(){if(!this.data.settings)return;let{image:e={},size:i,size_custom:a}=this.data.settings;return Object.keys(e).length===0?null:(i==="custom"?i=a:i&&(i={width:i.split("x")[0],height:i.split("x")[1]}),{alt:e.name,...Object.keys(e).filter(p=>p.startsWith("value")).reduce((p,u)=>(p[u]=this.$helpers.resizeImage(e[u],i),p),{})})},isCaption(){var e,i;return((e=this.data.settings)==null?void 0:e.use_caption)&&((i=this.data.settings)==null?void 0:i.caption)},imageHotspot(){return this.data.settings},javascript(){return this.imageHotspot&&this.imageHotspot.items&&this.imageHotspot.items.length?(this.image,function(){function e(o){if(o&&o.length>0){const n=document.createElement("div");return n.innerHTML=o,n.textContent||n.innerText||""}return""}function i(o,n,l){if(!o||!n)return"";let s=o.split(" ");return s.length<n?o:s.slice(0,n).join(" ")+(l||"")}if(!this.$el)return;const a=this.$el,p=this.isLive,u=a.querySelectorAll(".ecom__element.element__image-hotspot .element__image-hotspot--text");this.isLive||a.querySelectorAll(".element__image-hotspot--content-btn").forEach(o=>{o.addEventListener("click",function(n){n.preventDefault(),n.stopPropagation();let l=this.getAttribute("href");l&&l.indexOf("/product")>=0&&(n.preventDefault(),window.open(window.EComposer.routes.domain+l))})});const c=async function(o){o.querySelector(".element__image-hotspot--content-image").style.opacity=0;const n=o.querySelector(".ecom-hotspots-container-tooltip");if(n&&n.classList.add("ecom-loading-image"),!window.EComposer||!window.EComposer.getProduct)return console.log("EComposer theme helper not enabled"),!1;const l=o.getAttribute("data-handle"),s=o.getAttribute("data-limit");var r;if(o.dataset.product?(r=JSON.parse(o.dataset.product),r.handle!==l&&(r=await window.EComposer.getProduct(l))):r=await window.EComposer.getProduct(l),r&&r.id){const k=o.querySelector(".element__image-hotspot--content-image"),_=o.querySelector(".element__image-hotspot--content-title"),C=o.querySelector(".element__image-hotspot--content-text"),f=o.querySelector(".element__image-hotspot--content-btn"),S=o.querySelector(".element__image-hotspot--content-prices");if(k&&(k.src=r.featured_image),_&&(_.innerText=r.title),C&&(C.innerText=i(e(r.description),parseInt(s!=null?s:20),"...")||""),f&&(f.href=r.url),S){let I=`<span class="element__image-hotspot--content-price">${window.EComposer.formatMoney(r.price)}</span>`;r.price<r.compare_at_price&&(I+=`<span class="element__image-hotspot--content-price--regular">${window.EComposer.formatMoney(r.compare_at_price)}</span>`),S.innerHTML=I}o.dataset.product=JSON.stringify(r),n&&n.classList.remove("ecom-loading-image"),o.querySelector(".element__image-hotspot--content-image").style.opacity=1}},x=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;u.forEach((o,n)=>{const l=o.querySelector(".element__image-hotspot--btn"),s=o.querySelector(".element__image-hotspot--content");function r(){l.addEventListener("click",()=>{if(s.classList.contains("actived"))w(s),s.classList.remove("actived");else{if(v(s),s.classList.add("actived","ecom_current_click"),x<768){var _=window.pageYOffset;window.document.addEventListener("scroll",function(){var f=window.pageYOffset;(_-f>100||f-_>100)&&s.classList.remove("actived")})}o.getAttribute("data-source")==="product"&&p&&(clearTimeout(k),k=setTimeout(()=>c(o),500)),setTimeout(()=>{s.focus(),document.addEventListener("click",h),s.classList.remove("ecom_current_click")},300)}})}let k;l&&s&&(this.settings.trigger==="hover"?window.innerWidth<=767?r():(o.addEventListener("mouseover",()=>{if(v(s),s.classList.add("actived"),x<768){var _=window.pageYOffset;window.document.addEventListener("scroll",function(){var f=window.pageYOffset;(_-f>100||f-_>100)&&s.classList.remove("actived")})}o.getAttribute("data-source")==="product"&&p&&c(o)}),o.addEventListener("mouseleave",function(){w(s),s.classList.remove("actived")})):r())});function t(){a.querySelector(".element__image-hotspot--content.actived:not(.ecom_current_click)")&&a.querySelector(".element__image-hotspot--content.actived:not(.ecom_current_click)").classList.remove("actived"),document.removeEventListener("click",h)}function h(o){(o===void 0||!o.target.closest(".ecom-hotspots-container-tooltip"))&&t()}function v(o){let n=o.closest(".ecom-column.ecom-core"),l=o.closest(".ecom-row.ecom-core");n&&(n.style.zIndex=101),l&&(l.style.zIndex=101)}function w(o){let n=o.closest(".ecom-column.ecom-core"),l=o.closest(".ecom-row.ecom-core");n&&(n.style.zIndex=""),l&&(l.style.zIndex="")}}):function(){}},screens(){return this.$store.getters["builder/screens"]},settings(){return[{group_title:"Image",params:[{type:"picker",label:"Choose Image",name:"image",options:{type:"image",output:["value","name"],editAlt:!0}},{type:"popup",label:"Image Size",name:"size",value:"",options:{type:"dropdown",values:{"400x300":"400 x 300px","800x450":"800 x 450px","500x500":"500 x 500px","":"Original",custom:"Custom"}},css:{isCss:!1}},{type:"size",description:"You can crop the original image size to any custom size. You can also set a single value for height or width in order to keep the original size ratio.",name:"size_custom",options:{visible:{keep_data:!1,condition:e=>e.size==="custom"}}},{type:"toggle",name:"use_caption",label:"Use Caption?",options:{oneline:!0,values:{on:{label:"YES",value:!0},off:{label:"NO",value:!1}}},css:{isCss:!1}},{type:"text",name:"caption",options:{placeholder:"Enter your caption",visible:{keep_data:!1,condition:e=>e.use_caption===!0}}}]},{group_title:"Hotspots",params:[{name:"items",type:"group",value:[],options:{add_text:"Add item",is_clear_all:!1},title_unique:!1,params:[{name:"source",type:"popup",label:"Source",options:{type:"dropdown",default:!1,values:{product:"Product",custom:"Custom"}},css:{isCss:!1}},{type:"picker",label:"Choose Product",name:"product",options:{type:"product",output:["value","name","thumbnail"],editAlt:!0,visible:{keep_data:!1,condition:e=>e.source==="product"}}},{type:"checkbox",name:"fields",label:"Select fields to show",options:{visible:function(e){return e.source==="product"},values:{title:"Title",image:"Image",link:"Link",price:"Price",description:"Description"}}},{type:"number",name:"limit_words",label:"How many words to show?",options:{min:5,max:150,visible:function(e){var i;return e.source==="product"&&((i=e.fields)==null?void 0:i.includes("description"))}}},{type:"picker",label:"Choose Image",name:"thumbnailCard",options:{type:"image",output:["value","name"],editAlt:!0,visible:{keep_data:!1,condition:e=>e.source==="custom"}},css:{isCss:!1}},{type:"popup",label:"Image Size",name:"size",value:"",options:{type:"dropdown",values:{"400x300":"400 x 300px","800x450":"800 x 450px","500x500":"500 x 500px","":"Original",custom:"Custom"},visible:{keep_data:!1,condition:e=>e.thumbnailCard&&e.thumbnailCard.value}}},{type:"size",description:"You can crop the original image size to any custom size. You can also set a single value for height or width in order to keep the original size ratio.",name:"size_custom",options:{visible:{keep_data:!1,condition:e=>e.thumbnailCard&&e.thumbnailCard.value&&e.size==="custom"}}},{type:"picker",label:"Icon",name:"hotspotIcon",options:{oneline:!0,type:"icon"}},{type:"toggle",name:"isShowLabel",label:"Custom text?",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},css:{isCss:!1}},{name:"hotspotLabel",type:"text",label:"Label",options:{visible:{keep_data:!1,condition:e=>e.isShowLabel===!0}}},{type:"line"},{type:"choose",label:"<span class='uppercase'>HTML</span> Tag",name:"tag",options:{type:"heading"}},{name:"titleCard",type:"text",label:"Title",options:{visible:{keep_data:!1,condition:e=>e.source==="custom"}}},{type:"textarea",label:"Content",name:"textCard",options:{toolbar:"short",height:100,visible:{keep_data:!1,condition:e=>e.source==="custom"}}},{name:"tooltipSide",type:"popup",label:"Tooltip Side",options:{type:"dropdown",default:!1,values:{top:"Top",bottom:"Bottom",left:"Left",right:"Right"}}},{name:"buttonCard",type:"text",label:"Link Text",options:{visible:{keep_data:!1,condition:e=>e.source==="custom"}}},{name:"linkButtonCard",type:"link",label:"Link Button",options:{visible:{keep_data:!1,condition:e=>e.source==="custom"}}}]},{type:"paragraph",content:'Change "hotspot" position by "drag" action'},{type:"line"},{type:"paragraph",content:"<strong>Tooltip</strong>"},{name:"trigger",type:"popup",label:"Show when",options:{type:"dropdown",default:!1,values:{click:"Click",hover:"Hover"}}},{name:"tooltipAnimation",type:"popup",label:"Animation",options:{type:"dropdown",default:!1,values:{"ecom-fade":"Fade","ecom-slide":"Slide"}}},{type:"number",label:'Animation Duration <span class="lowercase">(ms)</span>',name:"tooltipDuration",options:{min:10,max:3e3,slider:!0,visible:{keep_data:!1,condition:e=>e.tooltipAnimation}},css:{selector:" .element__image-hotspot--content",properties:{"animation-duration":"%value%ms","transition-property":"transform, opacity, visibility"}}},{type:"toggle",name:"isHasArrow",label:"Use Arrow?",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}}]}]},default(){return{settings:{items:[{title:"Item #1",hotspotIcon:{thumbnail:'<svg xmlns="http: //www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',value:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},horizontalPosition:9,verticalPosition:41,tooltipSide:"right",hotspotWidth:250,source:"product",isShowLabel:!1,product:{value:"dance-bag-nylon",name:"Dance Bag Nylon",thumbnail:"https://cdn.shopify.com/s/files/1/0629/7318/2186/products/dance_nylon_main.png?v=1645112412&width=500&height=500&crop=center"},fields:["title","image","price","link"]},{title:"Item #1",hotspotIcon:{thumbnail:'<svg xmlns="http: //www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',value:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},horizontalPosition:40,verticalPosition:35,tooltipSide:"left",hotspotWidth:250,source:"product",isShowLabel:!1,product:{value:"dance-bag-nylon",name:"Dance Bag Nylon",thumbnail:"https://cdn.shopify.com/s/files/1/0629/7318/2186/products/dance_nylon_main.png?v=1645112412&width=500&height=500&crop=center"},fields:["title","image","link","price"]},{title:"Item #1",hotspotIcon:{thumbnail:'<svg xmlns="http: //www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',value:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},horizontalPosition:83,verticalPosition:15,tooltipSide:"left",hotspotWidth:250,source:"product",isShowLabel:!1,product:{value:"dance-bag-nylon",name:"Dance Bag Nylon",thumbnail:"https://cdn.shopify.com/s/files/1/0629/7318/2186/products/dance_nylon_main.png?v=1645112412&width=500&height=500&crop=center"},fields:["title","image","link","price"]}],image:{value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/loobook_4100x_c06278a0-a64a-461f-93d3-fe06f3c8487f.jpg?v=1648018318",name:"loobook_4100x_c06278a0-a64a-461f-93d3-fe06f3c8487f"},trigger:"hover",isHasArrow:!0,tooltipAnimation:"ecom-fade",tooltipDuration:300},style:{hotspotImage:{imageOpacitynormalmode:1,imageOpacityhovermode:1,imageAlign:"center",imageObjectFit:"cover",tab:"normal"},hotspotGeneral:{boxBackground:"#ed8a8a",boxBorderRadius:{top:"50%",left:"50%",bottom:"50%",right:"50%"}},hotspotIcon:{iconFontSize:"16px",spacing:{padding:{top:"8px",left:"8px",bottom:"8px",right:"8px"}},iconPrimaryColor:{"global-colors":"primary"}},hotspotTooltipGeneral:{background:{classic:{"background-color":"#ffffff"}},spacing:{padding:{left:"8px",top:"8px",bottom:"8px",right:"8px"}},hotspotWidth:"200px",boxShadow:{"box-shadow":{horizontal:"1px",vertical:"1px",blur:"5px",color:"rgba(125, 125, 125, 0.35)"}},boxBorderRadius:{top:"4px",left:"4px",bottom:"4px",right:"4px"}},hotspotTooltipImage:{imageOpacitynormalmode:1,imageObjectFit:"cover",imageOpacityhovermode:1,tab:"normal"},hotspotTooltipTitle:{textTextAlign:"center",spacing:{margin:{bottom:"5px",top:"10px"}},textTypography:{"global-typography":"m5lJMKLv"},textColor:"#111"},hotspotTooltipContent:{textTextAlign:"center",spacing:{margin:{bottom:"6px"}},textColor:"#333",textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"13px"}},hotspotTooltipButton:{"justify-content":"center",tab:"normal",buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"13px","text-decoration":"none"},buttonColornormalmode:"#de5757"},hotspotTooltipPrice:{textTextAlign:"center",textColor:"#e06565"}}}}},methods:{setEditingElement(e){this.$store.commit("builder/setEditingElement",this),"tabOpened"in this.data.settings.items||Object.defineProperty(this.data.settings.items,"tabOpened",{enumerable:!1,writable:!0}),this.data.settings.items.tabOpened=e},convertImageCard(e){if(!e)return;let{thumbnailCard:i={},product:a,source:p="custom"}=e;return p==="custom"&&Object.keys(i).length===0||p==="product"&&!a?null:{alt:i.name,src:(p==="custom"?i==null?void 0:i.value:a==null?void 0:a.thumbnail)||"images/placeholder.png"}},checkLabelHotspots(){var e;return(e=this.data.settings.items)==null?void 0:e.some(i=>i.isShowLabel&&i.hotspotLabel)},style(){return[{group_alias:"image",options:{group_name:"hotspotImage",group_title:"Image",selector:" .element__image-hotspot--img"},modify:{remove:{index:4,length:1},params:[{position:3,fields:[{type:"choose",label:"Alignment",name:"imageAlign",options:{oneline:!0,responsive:!0,type:"text-align",values:["flex-start","center","flex-end"],visible:{keep_data:!1,condition:i=>i.imageWidth!=="100%"}},css:{selector:"root .ecom-image-align",properties:{"align-items":""}}}]}]}},{group_alias:"box",options:{group_name:"hotspotGeneral",group_title:"Hotspot General",selector:" .ecom__element.element__image-hotspot .element__image-hotspot--btn"},modify:{params:[{position:6,fields:[{type:"number",label:"Width",name:"hotspot_width",options:{units:{px:{min:0,max:200}},reset:!1,responsive:!0},css:{properties:{width:""}}},{type:"number",label:"Height",name:"hotspot_height",options:{units:{px:{min:0,max:200}},reset:!1,responsive:!0},css:{properties:{height:""}}}]}]}},this.checkLabelHotspots()?{group_alias:"text:hover",options:{group_name:"hotspotLabel",group_title:"Hotspot Label",selector:" .ecom__element.element__image-hotspot .element__image-hotspot--text .element__image-hotspot--btn-label"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}],remove:{index:0,length:1}}}:null,{group_alias:"icon",options:{group_name:"hotspotIcon",group_title:"Hotspot Icon",selector:" .ecom__element.element__image-hotspot .element__image-hotspot--text .element__image-hotspot--btn-icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}},{group_alias:"box",options:{group_name:"hotspotTooltipGeneral",group_title:"Tooltip General",selector:" .ecom-hotspots-container-tooltip"},modify:{params:[{fields:{type:"number",label:"Width",name:"hotspotWidth",options:{units:{px:{min:10,max:1e3},"%":{min:1,max:100}},input:!0,responsive:!0},css:{selector:"root .element__image-hotspot--content",properties:{width:""}}}},{position:15,fields:{alias:"spacing"}},{position:2,fields:{alias:"background",options:{css:{selector:",root .element__image-hotspot--content.has-arrow:after"}}}}],remove:{index:1,length:1}}},{group_alias:"image",options:{group_name:"hotspotTooltipImage",group_title:"Tooltip Image",selector:" .ecom__element.element__image-hotspot .element__image-hotspot--content .element__image-hotspot--content-image"},modify:{params:[{position:1,fields:{type:"number",name:"imageWidth",label:"Width",options:{responsive:!0,reset:!0,units:{"%":{min:0,max:100},px:{min:0,max:1e3},vw:{min:0,max:100}}},css:{important:!0,properties:{width:""}}}},{position:4,fields:{type:"number",name:"imageHeight",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3},vh:{min:0,max:100}}},css:{important:!0,properties:{height:""}}}},{position:15,fields:[{type:"line"},{alias:"spacing"}]}],remove:[{index:0,length:1},{index:2,length:1}]}},{group_alias:"text",options:{group_name:"hotspotTooltipTitle",group_title:"Tooltip Title",selector:" .ecom__element.element__image-hotspot .element__image-hotspot--content .element__image-hotspot--content-title"},modify:{params:{position:15,fields:[{alias:"spacing"}]}}},{group_alias:"text",options:{group_name:"hotspotTooltipContent",group_title:"Tooltip Content",selector:" .ecom__element.element__image-hotspot .element__image-hotspot--content .element__image-hotspot--content-text"},modify:{params:{position:15,fields:[{alias:"spacing"}]}}},{group_alias:"text",options:{group_name:"hotspotTooltipPrice",group_title:"Tooltip price",selector:" .element__image-hotspot--content-prices"},modify:{params:{position:15,fields:[{alias:"spacing"}]}}},{group_alias:"text",options:{group_name:"hotspotTooltipPriceRegular",group_title:"Tooltip price regular",selector:" .element__image-hotspot--content-price--regular"},modify:{params:{position:15,fields:[{alias:"spacing"}]}}},{group_alias:"button",options:{group_name:"hotspotTooltipButton",group_title:"Tooltip Button",selector:" .ecom__element.element__image-hotspot .element__image-hotspot--content .element__image-hotspot--content-btn"},modify:{params:[{position:0,fields:[{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-button-default"}}}]}]}},this.isCaption?{group_alias:"text",options:{group_name:"hotspotCation",group_title:"Caption",selector:" .ecom__element.element__image-hotspot .ecom-image__caption"}}:null].filter(i=>i)},mouseDown(e,i){if(this.exporting)return;let a=e.target.closest(".element__image-hotspot--text");this.drag.currentEl=a,this.drag.i=i,this.idoc().onmousemove=this.onMouseMove,this.idoc().onmouseup=this.onMouseUp},onMouseUp(){this.idoc().onmousemove=null,this.idoc().body.style.userSelect="",this.idoc().body.style.cursor="";let{i:e,x:i,y:a}=this.drag;e>-1&&this.drag.started&&(this.hotSpot.items[e].horizontalPosition=i,this.hotSpot.items[e].verticalPosition=a),Object.assign(this.drag,{x:-1,y:-1,i:-1,started:!1})},onMouseMove(e){let i=this.$el,a=i.getBoundingClientRect(),p=Math.round((e.x-a.left)/a.width*100),u=Math.round((e.y-a.top)/a.height*100);(Math.abs(p)>5||Math.abs(u)>5)&&(this.idoc().body.style.userSelect="none",this.idoc().body.style.cursor="move",p=Math.max(0,Math.min(100,p)),u=Math.max(0,Math.min(100,u)),this.drag.started=!0,this.drag.x=p,this.drag.y=u,this.drag.currentEl.style.left=p+"%",this.drag.currentEl.style.top=u+"%")}}},D=["data-trigger"],q=["innerHTML"],Y=["innerHTML"],N=["data-source","data-handle","data-limit","onMouseup","onMousedown"],J=["innerHTML"],U={key:1,class:"element__image-hotspot--btn-icon ecom-flex ecom-fl_center ecom-al_center"},R=g("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",width:"16",height:"16"},[g("g",null,[g("g",null,[g("path",{d:"M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z",fill:"currentColor"})])])],-1),F=[R],G={key:2,class:"element__image-hotspot--btn-label"},V={class:"ecom-hotspots-container-tooltip"},X={key:0},$=["innerHTML"],K={class:"ecom__image-hostpot--content-container ecom-button-default"},Q=["innerHTML"],Z=["href"];function ee(e,i,a,p,u,c){var x;return m(),d("div",{class:"ecom__element ecom-element element__image-hotspot","data-trigger":(x=a.data.settings)==null?void 0:x.trigger},[c.image?(m(),d("div",{key:0,class:y(["ecom-element__image-hotspot--wrapper ecom-image-align ecom-flex ecom-column",{"ecom-replace-notice":e.$helpers.isPreviewImage(JSON.stringify(c.image))}])},[g("picture",{class:"element__image-hotspot--img ecom-image-default",innerHTML:e.$helpers.renImageResponsive(c.image,c.screens)},null,8,q),c.isCaption?(m(),d("figcaption",{key:0,class:"ecom-image__caption ecom-w__full",innerHTML:c.imageHotspot.caption},null,8,Y)):b("",!0),(m(!0),d(j,null,W(c.imageHotspot.items,(t,h)=>{var v,w,o,n,l,s;return m(),d("div",{key:h,class:y(["element__image-hotspot--text ecom-pa ecom-flex ecom-fl_center ecom-al_center",{"element__image-hotspot--btn-nolabel":!t.hotspotLabel||t.hotspotLabel.length===0}]),style:E({left:t.horizontalPosition+"%",top:t.verticalPosition+"%"}),"data-source":t.source,"data-handle":t.product&&t.product.value,"data-limit":(v=t==null?void 0:t.limit_words)!=null?v:20,"data-stopdrag":"",onMouseup:r=>c.setEditingElement(h),onMousedown:r=>c.mouseDown(r,h)},[g("div",{class:"element__image-hotspot--btn ecom-flex ecom-fl_center ecom-al_center",style:E(c.cursorBtn)},[t.hotspotIcon&&t.hotspotIcon.value?(m(),d("div",{key:0,class:"element__image-hotspot--btn-icon ecom-flex ecom-fl_center ecom-al_center",innerHTML:t.hotspotIcon&&t.hotspotIcon.value},null,8,J)):(m(),d("div",U,F)),t.hotspotLabel?(m(),d("div",G,L(t.hotspotLabel),1)):b("",!0)],4),g("div",{class:y(["element__image-hotspot--content",[`element__image-hotspot--content-${t.tooltipSide}`,c.imageHotspot.isHasArrow?"has-arrow":"",`arrow-${t.tooltipSide}`,c.imageHotspot.tooltipAnimation]]),tabindex:"0"},[g("div",V,[t.source==="product"&&!t.product?(m(),d("div",X," Select a product to preview ")):b("",!0),t.source==="product"?(m(),d("img",T({key:1,class:["element__image-hotspot--content-image",{"ecom-hidden":!((w=t==null?void 0:t.fields)!=null&&w.includes("image"))}]},c.convertImageCard(t),{loading:"lazy"}),null,16)):(m(),d("img",T({key:2,class:"element__image-hotspot--content-image"},c.convertImageCard(t),{loading:"lazy"}),null,16)),t.source==="product"?(m(),z(H(t.tag?t.tag:"h3"),{key:3,class:y(["element__image-hotspot--content-title",{"ecom-hidden":t.source==="product"&&!((o=t==null?void 0:t.fields)!=null&&o.includes("title"))}])},null,8,["class"])):(m(),z(H(t.tag?t.tag:"h3"),{key:4,class:"element__image-hotspot--content-title",textContent:L(t.source==="custom"?e.lang(t.titleCard,"titleCard"+h):"")},null,8,["textContent"])),t.source==="product"?(m(),d("div",{key:5,class:y(["element__image-hotspot--content-prices",{"ecom-hidden":!((n=t==null?void 0:t.fields)!=null&&n.includes("price"))}])},null,2)):b("",!0),g("div",{class:y(["element__image-hotspot--content-text ecom-html",{"ecom-hidden":t.source==="product"&&!((l=t==null?void 0:t.fields)!=null&&l.includes("description"))}]),innerHTML:t.source==="custom"?e.lang(t.textCard,"textCard"+h):""},null,10,$),g("div",K,[t.source!=="custom"&&t.product?(m(),d("a",{key:0,class:y([{"ecom-hidden":!((s=t==null?void 0:t.fields)!=null&&s.includes("link"))},"element__image-hotspot--content-btn element__image-hotspot--content-btn-product"]),href:"#",target:"__blank",innerHTML:e.lang("View Details","view_more_link")},null,10,Q)):b("",!0),t.source==="custom"&&t.buttonCard&&t.buttonCard.length>0?(m(),d("a",T({key:1,href:t!=null&&t.linkButtonCard?t.linkButtonCard.href:"#",class:"element__image-hotspot--content-btn element__image-hotspot--content-btn-custom"},t==null?void 0:t.linkButtonCard),L(t==null?void 0:t.buttonCard),17,Z)):b("",!0)])])],2)],46,N)}),128))],2)):b("",!0)],8,D)}const le=O(M,[["render",ee]]);M.__docgenInfo={exportName:"default",displayName:"ImageHotSpots",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/ImageHotSpots.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{le as default};
//# sourceMappingURL=ImageHotSpots.cec848c4.js.map
