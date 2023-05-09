import{E as M,J as B,L as A,_ as P}from"./preview.f57244d3.js";import{o as m,a as d,u as f,x as h,y,F as O,t as j,P as I,z as k,U as C,A as z,S as E}from"./vue.esm-bundler.7f444806.js";import"./chunk-2GDW2BFM.5cb4ba43.js";import"./index.e850844b.js";import"./iframe.fc9a9f4a.js";import"../sb-preview/runtime.js";const H={name:"ImageHotSpots",docs:"https://help.ecomposer.io/docs/elements/basic-elements/hotspot/",presets:!0,mixins:[M,B,A],props:{data:{type:Object,default(){return{}}}},data(){return{drag:{currentEl:null,i:-1,started:!1,x:0,y:0},jsreactives:["items","trigger"]}},computed:{hotSpot(){return this.data.settings},cursorBtn(){let t="default";return this.exporting?t=this.imageHotspot.trigger==="click"?"pointer":"default":t="move",{cursor:t}},css(){return`
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
                .element__image-hotspot--content.fade.actived {
                    animation-name: fadeIn;
                }
                .element__image-hotspot--content-bottom.slide.actived {
                    animation-name: slideUp;
                }
                .element__image-hotspot--content-top.slide.actived {
                    animation-name: slideDown;
                }
                .element__image-hotspot--content-right.slide.actived {
                    animation-name: slideLeft;
                }
                .element__image-hotspot--content-left.slide.actived {
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
            `},image(){if(!this.data.settings)return;let{image:t={},size:i,size_custom:a}=this.data.settings;return Object.keys(t).length===0?null:(i==="custom"?i=a:i&&(i={width:i.split("x")[0],height:i.split("x")[1]}),{alt:t.name,...Object.keys(t).filter(p=>p.startsWith("value")).reduce((p,u)=>(p[u]=this.$helpers.resizeImage(t[u],i),p),{})})},isCaption(){var t,i;return((t=this.data.settings)==null?void 0:t.use_caption)&&((i=this.data.settings)==null?void 0:i.caption)},imageHotspot(){return this.data.settings},javascript(){return this.imageHotspot&&this.imageHotspot.items&&this.imageHotspot.items.length?(this.image,function(){function t(o){if(o&&o.length>0){const n=document.createElement("div");return n.innerHTML=o,n.textContent||n.innerText||""}return""}function i(o,n,l){if(!o||!n)return"";let s=o.split(" ");return s.length<n?o:s.slice(0,n).join(" ")+(l||"")}if(!this.$el)return;const a=this.$el,p=a.querySelectorAll(".ecom__element.element__image-hotspot .element__image-hotspot--text");this.isLive||a.querySelectorAll(".element__image-hotspot--content-btn").forEach(o=>{o.addEventListener("click",function(n){n.preventDefault(),n.stopPropagation();let l=this.getAttribute("href");l&&l.indexOf("/product")>=0&&(n.preventDefault(),window.open(window.EComposer.routes.domain+l))})});const u=async function(o){o.querySelector(".element__image-hotspot--content-image").style.opacity=0;const n=o.querySelector(".ecom-hotspots-container-tooltip");if(n&&n.classList.add("ecom-loading-image"),!window.EComposer||!window.EComposer.getProduct)return console.log("EComposer theme helper not enabled"),!1;const l=o.getAttribute("data-handle"),s=o.getAttribute("data-limit");var r;if(o.dataset.product?(r=JSON.parse(o.dataset.product),r.handle!==l&&(r=await window.EComposer.getProduct(l))):r=await window.EComposer.getProduct(l),r&&r.id){const g=o.querySelector(".element__image-hotspot--content-image"),w=o.querySelector(".element__image-hotspot--content-title"),_=o.querySelector(".element__image-hotspot--content-text"),L=o.querySelector(".element__image-hotspot--content-btn"),T=o.querySelector(".element__image-hotspot--content-prices");if(g&&(g.src=r.featured_image),w&&(w.innerText=r.title),_&&(_.innerText=i(t(r.description),parseInt(s!=null?s:20),"...")||""),L&&(L.href=r.url),T){let S=`<span class="element__image-hotspot--content-price">${window.EComposer.formatMoney(r.price)}</span>`;r.price<r.compare_at_price&&(S+=`<span class="element__image-hotspot--content-price--regular">${window.EComposer.formatMoney(r.compare_at_price)}</span>`),T.innerHTML=S}o.dataset.product=JSON.stringify(r),n&&n.classList.remove("ecom-loading-image"),o.querySelector(".element__image-hotspot--content-image").style.opacity=1}},c=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;p.forEach((o,n)=>{const l=o.querySelector(".element__image-hotspot--btn"),s=o.querySelector(".element__image-hotspot--content");let r;l&&s&&(this.settings.trigger==="hover"?(o.addEventListener("mouseover",()=>{if(b(s),s.classList.add("actived"),c<768){var g=window.pageYOffset;window.document.addEventListener("scroll",function(){var _=window.pageYOffset;(g-_>100||_-g>100)&&s.classList.remove("actived")})}o.getAttribute("data-source")==="product"&&u(o)}),o.addEventListener("mouseleave",function(){x(s),s.classList.remove("actived")})):l.addEventListener("click",()=>{if(s.classList.contains("actived"))x(s),s.classList.remove("actived");else{if(b(s),s.classList.add("actived","ecom_current_click"),c<768){var g=window.pageYOffset;window.document.addEventListener("scroll",function(){var _=window.pageYOffset;(g-_>100||_-g>100)&&s.classList.remove("actived")})}o.getAttribute("data-source")==="product"&&(clearTimeout(r),r=setTimeout(()=>u(o),500)),setTimeout(()=>{s.focus(),document.addEventListener("click",e),s.classList.remove("ecom_current_click")},300)}}))});function v(){a.querySelector(".element__image-hotspot--content.actived:not(.ecom_current_click)")&&a.querySelector(".element__image-hotspot--content.actived:not(.ecom_current_click)").classList.remove("actived"),document.removeEventListener("click",e)}function e(o){(o===void 0||!o.target.closest(".ecom-hotspots-container-tooltip"))&&v()}function b(o){let n=o.closest(".ecom-column.ecom-core"),l=o.closest(".ecom-row.ecom-core");n&&(n.style.zIndex=101),l&&(l.style.zIndex=101)}function x(o){let n=o.closest(".ecom-column.ecom-core"),l=o.closest(".ecom-row.ecom-core");n&&(n.style.zIndex=""),l&&(l.style.zIndex="")}}):function(){}},screens(){return this.$store.getters["builder/screens"]},settings(){return[{group_title:"Image",params:[{type:"picker",label:"Choose Image",name:"image",options:{type:"image",output:["value","name"],editAlt:!0}},{type:"popup",label:"Image Size",name:"size",value:"",options:{type:"dropdown",values:{"400x300":"400 x 300px","800x450":"800 x 450px","500x500":"500 x 500px","":"Original",custom:"Custom"}},css:{isCss:!1}},{type:"size",description:"You can crop the original image size to any custom size. You can also set a single value for height or width in order to keep the original size ratio.",name:"size_custom",options:{visible:{keep_data:!1,condition:t=>t.size==="custom"}}},{type:"toggle",name:"use_caption",label:"Use Caption?",options:{oneline:!0,values:{on:{label:"YES",value:!0},off:{label:"NO",value:!1}}},css:{isCss:!1}},{type:"text",name:"caption",options:{placeholder:"Enter your caption",visible:{keep_data:!1,condition:t=>t.use_caption===!0}}}]},{group_title:"Hotspots",params:[{name:"items",type:"group",value:[],options:{add_text:"Add item",is_clear_all:!1},title_unique:!1,params:[{name:"source",type:"popup",label:"Source",options:{type:"dropdown",default:!1,values:{product:"Product",custom:"Custom"}},css:{isCss:!1}},{type:"picker",label:"Choose Product",name:"product",options:{type:"product",output:["value","name","thumbnail"],editAlt:!0,visible:{keep_data:!1,condition:t=>t.source==="product"}}},{type:"checkbox",name:"fields",label:"Select fields to show",options:{visible:function(t){return t.source==="product"},values:{title:"Title",image:"Image",link:"Link",price:"Price",description:"Description"}}},{type:"number",name:"limit_words",label:"How many words to show?",options:{min:5,max:150,visible:function(t){var i;return t.source==="product"&&((i=t.fields)==null?void 0:i.includes("description"))}}},{type:"picker",label:"Choose Image",name:"thumbnailCard",options:{type:"image",output:["value","name"],editAlt:!0,visible:{keep_data:!1,condition:t=>t.source==="custom"}},css:{isCss:!1}},{type:"popup",label:"Image Size",name:"size",value:"",options:{type:"dropdown",values:{"400x300":"400 x 300px","800x450":"800 x 450px","500x500":"500 x 500px","":"Original",custom:"Custom"},visible:{keep_data:!1,condition:t=>t.thumbnailCard&&t.thumbnailCard.value}}},{type:"size",description:"You can crop the original image size to any custom size. You can also set a single value for height or width in order to keep the original size ratio.",name:"size_custom",options:{visible:{keep_data:!1,condition:t=>t.thumbnailCard&&t.thumbnailCard.value&&t.size==="custom"}}},{type:"picker",label:"Icon",name:"hotspotIcon",options:{oneline:!0,type:"icon"}},{type:"toggle",name:"isShowLabel",label:"Custom text?",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},css:{isCss:!1}},{name:"hotspotLabel",type:"text",label:"Label",options:{visible:{keep_data:!1,condition:t=>t.isShowLabel===!0}}},{type:"line"},{type:"choose",label:"<span class='uppercase'>HTML</span> Tag",name:"tag",options:{type:"heading"}},{name:"titleCard",type:"text",label:"Title",options:{visible:{keep_data:!1,condition:t=>t.source==="custom"}}},{type:"textarea",label:"Content",name:"textCard",options:{toolbar:"short",height:100,visible:{keep_data:!1,condition:t=>t.source==="custom"}}},{name:"tooltipSide",type:"popup",label:"Tooltip Side",options:{type:"dropdown",default:!1,values:{top:"Top",bottom:"Bottom",left:"Left",right:"Right"}}},{name:"buttonCard",type:"text",label:"Link Text",options:{visible:{keep_data:!1,condition:t=>t.source==="custom"}}},{name:"linkButtonCard",type:"link",label:"Link Button",options:{visible:{keep_data:!1,condition:t=>t.source==="custom"}}}]},{type:"paragraph",content:'Change "hotspot" position by "drag" action'},{type:"line"},{type:"paragraph",content:"<strong>Tooltip</strong>"},{name:"trigger",type:"popup",label:"Show when",options:{type:"dropdown",default:!1,values:{click:"Click",hover:"Hover"}}},{name:"tooltipAnimation",type:"popup",label:"Animation",options:{type:"dropdown",default:!1,values:{fade:"Fade",slide:"Slide"}}},{type:"number",label:'Animation Duration <span class="lowercase">(ms)</span>',name:"tooltipDuration",options:{min:10,max:3e3,slider:!0,visible:{keep_data:!1,condition:t=>t.tooltipAnimation}},css:{selector:" .element__image-hotspot--content",properties:{"animation-duration":"%value%ms","transition-property":"transform, opacity, visibility"}}},{type:"toggle",name:"isHasArrow",label:"Use Arrow?",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}}]}]},default(){return{settings:{items:[{title:"Item #1",hotspotIcon:{thumbnail:'<svg xmlns="http: //www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',value:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},horizontalPosition:9,verticalPosition:41,tooltipSide:"right",hotspotWidth:250,source:"product",isShowLabel:!1,product:{value:"dance-bag-nylon",name:"Dance Bag Nylon",thumbnail:"https://cdn.shopify.com/s/files/1/0629/7318/2186/products/dance_nylon_main.png?v=1645112412&width=500&height=500&crop=center"},fields:["title","image","price","link"]},{title:"Item #1",hotspotIcon:{thumbnail:'<svg xmlns="http: //www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',value:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},horizontalPosition:40,verticalPosition:35,tooltipSide:"left",hotspotWidth:250,source:"product",isShowLabel:!1,product:{value:"dance-bag-nylon",name:"Dance Bag Nylon",thumbnail:"https://cdn.shopify.com/s/files/1/0629/7318/2186/products/dance_nylon_main.png?v=1645112412&width=500&height=500&crop=center"},fields:["title","image","link","price"]},{title:"Item #1",hotspotIcon:{thumbnail:'<svg xmlns="http: //www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',value:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},horizontalPosition:83,verticalPosition:15,tooltipSide:"left",hotspotWidth:250,source:"product",isShowLabel:!1,product:{value:"dance-bag-nylon",name:"Dance Bag Nylon",thumbnail:"https://cdn.shopify.com/s/files/1/0629/7318/2186/products/dance_nylon_main.png?v=1645112412&width=500&height=500&crop=center"},fields:["title","image","link","price"]}],image:{value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/loobook_4100x_c06278a0-a64a-461f-93d3-fe06f3c8487f.jpg?v=1648018318",name:"loobook_4100x_c06278a0-a64a-461f-93d3-fe06f3c8487f"},trigger:"hover",isHasArrow:!0,tooltipAnimation:"fade",tooltipDuration:300},style:{hotspotImage:{imageOpacitynormalmode:1,imageOpacityhovermode:1,imageAlign:"center",imageObjectFit:"cover",tab:"normal"},hotspotGeneral:{boxBackground:"#ed8a8a",boxBorderRadius:{top:"50%",left:"50%",bottom:"50%",right:"50%"}},hotspotIcon:{iconFontSize:"16px",spacing:{padding:{top:"8px",left:"8px",bottom:"8px",right:"8px"}},iconPrimaryColor:{"global-colors":"primary"}},hotspotTooltipGeneral:{background:{classic:{"background-color":"#ffffff"}},spacing:{padding:{left:"8px",top:"8px",bottom:"8px",right:"8px"}},hotspotWidth:"200px",boxShadow:{"box-shadow":{horizontal:"1px",vertical:"1px",blur:"5px",color:"rgba(125, 125, 125, 0.35)"}},boxBorderRadius:{top:"4px",left:"4px",bottom:"4px",right:"4px"}},hotspotTooltipImage:{imageOpacitynormalmode:1,imageObjectFit:"cover",imageOpacityhovermode:1,tab:"normal"},hotspotTooltipTitle:{textTextAlign:"center",spacing:{margin:{bottom:"5px",top:"10px"}},textTypography:{"global-typography":"m5lJMKLv"},textColor:"#111"},hotspotTooltipContent:{textTextAlign:"center",spacing:{margin:{bottom:"6px"}},textColor:"#333",textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"13px"}},hotspotTooltipButton:{"justify-content":"center",tab:"normal",buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"13px","text-decoration":"none"},buttonColornormalmode:"#de5757"},hotspotTooltipPrice:{textTextAlign:"center",textColor:"#e06565"}}}}},methods:{setEditingElement(t){this.$store.commit("builder/setEditingElement",this),"tabOpened"in this.data.settings.items||Object.defineProperty(this.data.settings.items,"tabOpened",{enumerable:!1,writable:!0}),this.data.settings.items.tabOpened=t},convertImageCard(t){if(!t)return;let{thumbnailCard:i={},product:a,source:p="custom"}=t;return p==="custom"&&Object.keys(i).length===0||p==="product"&&!a?null:{alt:i.name,src:(p==="custom"?i==null?void 0:i.value:a==null?void 0:a.thumbnail)||"images/placeholder.png"}},checkLabelHotspots(){var t;return(t=this.data.settings.items)==null?void 0:t.some(i=>i.isShowLabel&&i.hotspotLabel)},style(){return[{group_alias:"image",options:{group_name:"hotspotImage",group_title:"Image",selector:" .element__image-hotspot--img"},modify:{remove:{index:4,length:1},params:[{position:3,fields:[{type:"choose",label:"Alignment",name:"imageAlign",options:{oneline:!0,responsive:!0,type:"text-align",values:["flex-start","center","flex-end"],visible:{keep_data:!1,condition:i=>i.imageWidth!=="100%"}},css:{selector:"root .ecom-image-align",properties:{"align-items":""}}}]}]}},{group_alias:"box",options:{group_name:"hotspotGeneral",group_title:"Hotspot General",selector:" .ecom__element.element__image-hotspot .element__image-hotspot--btn"},modify:{params:[{position:6,fields:[{type:"number",label:"Width",name:"hotspot_width",options:{units:{px:{min:0,max:200}},reset:!1,responsive:!0},css:{properties:{width:""}}},{type:"number",label:"Height",name:"hotspot_height",options:{units:{px:{min:0,max:200}},reset:!1,responsive:!0},css:{properties:{height:""}}}]}]}},this.checkLabelHotspots()?{group_alias:"text:hover",options:{group_name:"hotspotLabel",group_title:"Hotspot Label",selector:" .ecom__element.element__image-hotspot .element__image-hotspot--text .element__image-hotspot--btn-label"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}],remove:{index:0,length:1}}}:null,{group_alias:"icon",options:{group_name:"hotspotIcon",group_title:"Hotspot Icon",selector:" .ecom__element.element__image-hotspot .element__image-hotspot--text .element__image-hotspot--btn-icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}},{group_alias:"box",options:{group_name:"hotspotTooltipGeneral",group_title:"Tooltip General",selector:" .ecom-hotspots-container-tooltip"},modify:{params:[{fields:{type:"number",label:"Width",name:"hotspotWidth",options:{units:{px:{min:10,max:1e3},"%":{min:1,max:100}},input:!0,responsive:!0},css:{selector:"root .element__image-hotspot--content",properties:{width:""}}}},{position:15,fields:{alias:"spacing"}},{position:2,fields:{alias:"background",options:{css:{selector:",root .element__image-hotspot--content.has-arrow:after"}}}}],remove:{index:1,length:1}}},{group_alias:"image",options:{group_name:"hotspotTooltipImage",group_title:"Tooltip Image",selector:" .ecom__element.element__image-hotspot .element__image-hotspot--content .element__image-hotspot--content-image"},modify:{params:[{position:1,fields:{type:"number",name:"imageWidth",label:"Width",options:{responsive:!0,reset:!0,units:{"%":{min:0,max:100},px:{min:0,max:1e3},vw:{min:0,max:100}}},css:{important:!0,properties:{width:""}}}},{position:4,fields:{type:"number",name:"imageHeight",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3},vh:{min:0,max:100}}},css:{important:!0,properties:{height:""}}}},{position:15,fields:[{type:"line"},{alias:"spacing"}]}],remove:[{index:0,length:1},{index:2,length:1}]}},{group_alias:"text",options:{group_name:"hotspotTooltipTitle",group_title:"Tooltip Title",selector:" .ecom__element.element__image-hotspot .element__image-hotspot--content .element__image-hotspot--content-title"},modify:{params:{position:15,fields:[{alias:"spacing"}]}}},{group_alias:"text",options:{group_name:"hotspotTooltipContent",group_title:"Tooltip Content",selector:" .ecom__element.element__image-hotspot .element__image-hotspot--content .element__image-hotspot--content-text"},modify:{params:{position:15,fields:[{alias:"spacing"}]}}},{group_alias:"text",options:{group_name:"hotspotTooltipPrice",group_title:"Tooltip price",selector:" .element__image-hotspot--content-prices"},modify:{params:{position:15,fields:[{alias:"spacing"}]}}},{group_alias:"text",options:{group_name:"hotspotTooltipPriceRegular",group_title:"Tooltip price regular",selector:" .element__image-hotspot--content-price--regular"},modify:{params:{position:15,fields:[{alias:"spacing"}]}}},{group_alias:"button",options:{group_name:"hotspotTooltipButton",group_title:"Tooltip Button",selector:" .ecom__element.element__image-hotspot .element__image-hotspot--content .element__image-hotspot--content-btn"},modify:{params:[{position:0,fields:[{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-button-default"}}}]}]}},this.isCaption?{group_alias:"text",options:{group_name:"hotspotCation",group_title:"Caption",selector:" .ecom__element.element__image-hotspot .ecom-image__caption"}}:null].filter(i=>i)},mouseDown(t,i){if(this.exporting)return;let a=t.target.closest(".element__image-hotspot--text");this.drag.currentEl=a,this.drag.i=i,this.idoc().onmousemove=this.onMouseMove,this.idoc().onmouseup=this.onMouseUp},onMouseUp(){this.idoc().onmousemove=null,this.idoc().body.style.userSelect="",this.idoc().body.style.cursor="";let{i:t,x:i,y:a}=this.drag;t>-1&&this.drag.started&&(this.hotSpot.items[t].horizontalPosition=i,this.hotSpot.items[t].verticalPosition=a),Object.assign(this.drag,{x:-1,y:-1,i:-1,started:!1})},onMouseMove(t){let i=this.$el,a=i.getBoundingClientRect(),p=Math.round((t.x-a.left)/a.width*100),u=Math.round((t.y-a.top)/a.height*100);(Math.abs(p)>5||Math.abs(u)>5)&&(this.idoc().body.style.userSelect="none",this.idoc().body.style.cursor="move",p=Math.max(0,Math.min(100,p)),u=Math.max(0,Math.min(100,u)),this.drag.started=!0,this.drag.x=p,this.drag.y=u,this.drag.currentEl.style.left=p+"%",this.drag.currentEl.style.top=u+"%")}}},W=["data-trigger"],D=["innerHTML"],q=["innerHTML"],Y=["data-source","data-handle","data-limit","onMouseup","onMousedown"],N=["innerHTML"],J={key:1,class:"element__image-hotspot--btn-icon ecom-flex ecom-fl_center ecom-al_center"},U=h("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",width:"16",height:"16"},[h("g",null,[h("g",null,[h("path",{d:"M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z",fill:"currentColor"})])])],-1),R=[U],F={key:2,class:"element__image-hotspot--btn-label"},G={class:"ecom-hotspots-container-tooltip"},X={key:0},$=["innerHTML"],V={class:"ecom__image-hostpot--content-container ecom-button-default"},K=["innerHTML"],Q=["href"];function Z(t,i,a,p,u,c){var v;return m(),d("div",{class:"ecom__element ecom-element element__image-hotspot","data-trigger":(v=a.data.settings)==null?void 0:v.trigger},[c.image?(m(),d("div",{key:0,class:f(["ecom-element__image-hotspot--wrapper ecom-image-align ecom-flex ecom-column",{"ecom-replace-notice":t.$helpers.isPreviewImage(JSON.stringify(c.image))}])},[h("picture",{class:"element__image-hotspot--img ecom-image-default",innerHTML:t.$helpers.renImageResponsive(c.image,c.screens)},null,8,D),c.isCaption?(m(),d("figcaption",{key:0,class:"ecom-image__caption ecom-w__full",innerHTML:c.imageHotspot.caption},null,8,q)):y("",!0),(m(!0),d(O,null,j(c.imageHotspot.items,(e,b)=>{var x,o,n,l,s,r;return m(),d("div",{key:b,class:f(["element__image-hotspot--text ecom-pa ecom-flex ecom-fl_center ecom-al_center",{"element__image-hotspot--btn-nolabel":!e.hotspotLabel||e.hotspotLabel.length===0}]),style:I({left:e.horizontalPosition+"%",top:e.verticalPosition+"%"}),"data-source":e.source,"data-handle":e.product&&e.product.value,"data-limit":(x=e==null?void 0:e.limit_words)!=null?x:20,"data-stopdrag":"",onMouseup:g=>c.setEditingElement(b),onMousedown:g=>c.mouseDown(g,b)},[h("div",{class:"element__image-hotspot--btn ecom-flex ecom-fl_center ecom-al_center",style:I(c.cursorBtn)},[e.hotspotIcon&&e.hotspotIcon.value?(m(),d("div",{key:0,class:"element__image-hotspot--btn-icon ecom-flex ecom-fl_center ecom-al_center",innerHTML:e.hotspotIcon&&e.hotspotIcon.value},null,8,N)):(m(),d("div",J,R)),e.hotspotLabel?(m(),d("div",F,k(e.hotspotLabel),1)):y("",!0)],4),h("div",{class:f(["element__image-hotspot--content",[`element__image-hotspot--content-${e.tooltipSide}`,c.imageHotspot.isHasArrow?"has-arrow":"",`arrow-${e.tooltipSide}`,c.imageHotspot.tooltipAnimation]]),tabindex:"0"},[h("div",G,[e.source==="product"&&!e.product?(m(),d("div",X," Select a product to preview ")):y("",!0),e.source==="product"?(m(),d("img",C({key:1,class:["element__image-hotspot--content-image",{"ecom-hidden":!((o=e==null?void 0:e.fields)!=null&&o.includes("image"))}]},c.convertImageCard(e),{loading:"lazy"}),null,16)):(m(),d("img",C({key:2,class:"element__image-hotspot--content-image"},c.convertImageCard(e),{loading:"lazy"}),null,16)),e.source==="product"?(m(),z(E(e.tag?e.tag:"h3"),{key:3,class:f(["element__image-hotspot--content-title",{"ecom-hidden":e.source==="product"&&!((n=e==null?void 0:e.fields)!=null&&n.includes("title"))}])},null,8,["class"])):(m(),z(E(e.tag?e.tag:"h3"),{key:4,class:"element__image-hotspot--content-title",textContent:k(e.source==="custom"?e.titleCard:"")},null,8,["textContent"])),e.source==="product"?(m(),d("div",{key:5,class:f(["element__image-hotspot--content-prices",{"ecom-hidden":!((l=e==null?void 0:e.fields)!=null&&l.includes("price"))}])},null,2)):y("",!0),h("div",{class:f(["element__image-hotspot--content-text ecom-html",{"ecom-hidden":e.source==="product"&&!((s=e==null?void 0:e.fields)!=null&&s.includes("description"))}]),innerHTML:e.source==="custom"?e.textCard:""},null,10,$),h("div",V,[e.source!=="custom"&&e.product?(m(),d("a",{key:0,class:f([{"ecom-hidden":!((r=e==null?void 0:e.fields)!=null&&r.includes("link"))},"element__image-hotspot--content-btn element__image-hotspot--content-btn-product"]),href:"#",target:"__blank",innerHTML:t.lang("View Details","view_more_link")},null,10,K)):y("",!0),e.source==="custom"&&e.buttonCard&&e.buttonCard.length>0?(m(),d("a",C({key:1,href:e!=null&&e.linkButtonCard?e.linkButtonCard.href:"#",class:"element__image-hotspot--content-btn element__image-hotspot--content-btn-custom"},e==null?void 0:e.linkButtonCard),k(e==null?void 0:e.buttonCard),17,Q)):y("",!0)])])],2)],46,Y)}),128))],2)):y("",!0)],8,W)}const ae=P(H,[["render",Z]]);H.__docgenInfo={exportName:"default",displayName:"ImageHotSpots",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/ImageHotSpots.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{ae as default};
//# sourceMappingURL=ImageHotSpots.37b152fb.js.map
