import{d as tt,E as et,J as ot,L as it,p as nt,g as q,_ as st}from"./preview.95a7df14.js";import{o as b,a as k,x as $,y as C,E as T,F as at,u as lt,I as F,A as w,S as z,z as V,X as U}from"./vue.esm-bundler.b9dec9d9.js";import"./chunk-KSYMO6G6.f719e32d.js";import"./index.e850844b.js";import"./iframe.048ad53f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.f037b798.js";const rt="${{amount}}",ct=/\{\{\s*(\w+)\s*\}\}/g;function pt(t){if(t==null||t==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function M(t,e,o,n){const a=Math.abs(t).toFixed(e),[i,d]=a.split("."),g=i.replace(/\B(?=(\d{3})+(?!\d))/g,o);return(t<0?"-":"")+g+(d?n+d:"")}const mt={amount:t=>M(t,2,",","."),amount_no_decimals:t=>M(t,0,",","."),amount_with_comma_separator:t=>M(t,2,".",","),amount_no_decimals_with_comma_separator:t=>M(t,0,".",","),amount_with_apostrophe_separator:t=>M(t,2,"'","."),amount_with_space_separator:t=>M(t,2," ",","),amount_no_decimals_with_space_separator:t=>M(t,0," ",".")},dt={amount:"amount_no_decimals",amount_with_comma_separator:"amount_no_decimals_with_comma_separator",amount_with_space_separator:"amount_no_decimals_with_space_separator",amount_with_apostrophe_separator:"amount_no_decimals"};function ht(t){return tt((t==null?void 0:t.money_format)||(t==null?void 0:t.moneyFormat)||rt)}function ut(t,e,o=!1){const n=pt(t);if(n===null)return"";const a=n/100;return e.replace(ct,(i,d)=>{var c;const g=o&&(c=dt[d])!=null?c:d,s=mt[g];return s?s(a):i})}function J(t,e){return ut(t,ht(e))}const gt="Product title",_t="$30",ft="Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit",N=10,Z=new Map;let G=null;const K={name:"ImageHotSpots",docs:"https://help.ecomposer.io/docs/elements/basic-elements/hotspot/",linkVideo:"https://www.youtube.com/watch?v=4Wqo9BW_mU8",presets:!0,mixins:[et,ot,it],props:{data:{type:Object,default(){return{}}}},data(){return{drag:{currentEl:null,i:-1,started:!1,x:0,y:0,rafId:null,offsetX:0,offsetY:0,coordRect:null,grabOffsetX:0,grabOffsetY:0},hotspotCoordStyle:{left:"0px",top:"0px",width:"100%",height:"100%"},jsreactives:["items","trigger","image"],csrProducts:{},editingValue:"",isBlur:!1,inlineItemIndex:null,inlineEditField:null,currentEditEl:null}},mounted(){this.$nextTick(()=>{var e;this._updateHotspotCoord(),this._coordObserver=new ResizeObserver(()=>this._updateHotspotCoord());const t=(e=this.$el)==null?void 0:e.querySelector(".ecom-element__image-hotspot--wrapper");t&&this._coordObserver.observe(t)})},beforeUnmount(){var t;(t=this._coordObserver)==null||t.disconnect(),this._csrTimer&&clearTimeout(this._csrTimer)},computed:{hotSpot(){return this.data.settings},lazyload(){var t;return!((t=this.data.settings)!=null&&t.disable_lazy)},cursorBtn(){let t="default";return this.exporting?t=this.imageHotspot.trigger==="click"?"pointer":"default":t="move",{cursor:t}},css(){return`
                .ecom-hidden{
                    display:none !important;
                }
                .ecom-element__image-hotspot--wrapper {
                    opacity: 0;
                    visibility: hidden;
                    position: relative;
                }
                .ecom-element__image-hotspot--wrapper.ecom-image-hotspot-loaded {
                    opacity: 1;
                    visibility: visible;
                }
                .element__image-hotspot--btn{
                    transition: opacity .3s ease ;
                }
                .element__image-hotspot--btn[class*="ecom-"] {
                    animation-fill-mode: both;
                }
                .element__image-hotspot--btn.ecom-fade {
                    animation-name: fadeIn;
                }
                .element__image-hotspot--btn.ecom-slide {
                    animation-name: slideUp;
                }
                .element__image-hotspot--btn.ecom-zoom-in {
                    animation-name: ecomZoomIn;
                }
                .element__image-hotspot--btn.ecom-bounce-in {
                    animation-name: ecomBounceIn;
                }
                .element__image-hotspot--btn.ecom-flash {
                    animation-name: ecomFlash;
                }
                .element__image-hotspot--btn.ecom-pulse {
                    animation-name: ecom-animation-pulse;
                }
                .element__image-hotspot--btn.ecom-rubber-band {
                    animation-name: ecomRubberBand;
                }
                .element__image-hotspot--btn.ecom-shake {
                    animation-name: ecomShake;
                }
                .element__image-hotspot--btn.ecom-heart-beat {
                    animation-name: ecomHeartBeat;
                }
                .element__image-hotspot--btn.ecom-swing {
                    animation-name: ecomSwing;
                }
                .element__image-hotspot--btn.ecom-tada {
                    animation-name: ecomTada;
                }
                .element__image-hotspot--btn.ecom-wobble {
                    animation-name: ecomWobble;
                }
                .element__image-hotspot--btn.ecom-jello {
                    animation-name: ecomJello;
                }
                .element__image-hotspot--btn.ecom-flip {
                    animation-name: ecomFlip;
                }
                .element__image-hotspot--btn.ecom-roll {
                    animation-name: ecomRoll;
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
                    white-space: pre-wrap;
                }
                .element__image-hotspot--content-title.ecom-html,
                .element__image-hotspot--content-btn.element__image-hotspot--content-btn-product,
                .element__image-hotspot--content-btn-custom .ecom-html {
                    white-space: pre-wrap;
                }
                .element__image-hotspot--content {
                    position: absolute;
                    z-index: 102;
                    width: 250px;
                }
                .element__image-hotspot:not([data-trigger="always"]) .element__image-hotspot--content:not(.ecom-hotspot-actived) {
                    opacity: 0;
                    visibility: hidden;
                }
                .element__image-hotspot--content.ecom-hotspot-actived.ecom-animation-none {
                    opacity: 1;
                    visibility: visible;
                }
                .element__image-hotspot--content.ecom-fade.ecom-hotspot-actived {
                    animation-name: fadeIn;
                }
                .element__image-hotspot--content.ecom-zoom-in.ecom-hotspot-actived {
                    animation-name: ecomZoomIn;
                }
                .element__image-hotspot--content.ecom-bounce-in.ecom-hotspot-actived {
                    animation-name: ecomBounceIn;
                }
                .element__image-hotspot--content.ecom-flash.ecom-hotspot-actived {
                    animation-name: ecomFlash;
                }
                .element__image-hotspot--content.ecom-pulse.ecom-hotspot-actived {
                    animation-name: ecom-animation-pulse;
                }
                .element__image-hotspot--content.ecom-rubber-band.ecom-hotspot-actived {
                    animation-name: ecomRubberBand;
                }
                .element__image-hotspot--content.ecom-shake.ecom-hotspot-actived {
                    animation-name: ecomShake;
                }
                .element__image-hotspot--content.ecom-heart-beat.ecom-hotspot-actived {
                    animation-name: ecomHeartBeat;
                }
                .element__image-hotspot--content.ecom-swing.ecom-hotspot-actived {
                    animation-name: ecomSwing;
                }
                .element__image-hotspot--content.ecom-tada.ecom-hotspot-actived {
                    animation-name: ecomTada;
                }
                .element__image-hotspot--content.ecom-wobble.ecom-hotspot-actived {
                    animation-name: ecomWobble;
                }
                .element__image-hotspot--content.ecom-jello.ecom-hotspot-actived {
                    animation-name: ecomJello;
                }
                .element__image-hotspot--content.ecom-flip.ecom-hotspot-actived {
                    animation-name: ecomFlip;
                }
                .element__image-hotspot--content.ecom-roll.ecom-hotspot-actived {
                    animation-name: ecomRoll;
                }
                .element__image-hotspot--content-bottom.ecom-slide.ecom-hotspot-actived {
                    animation-name: slideUp;
                }
                .element__image-hotspot--content-top.ecom-slide.ecom-hotspot-actived {
                    animation-name: slideDown;
                }
                .element__image-hotspot--content-right.ecom-slide.ecom-hotspot-actived {
                    animation-name: slideLeft;
                }
                .element__image-hotspot--content-left.ecom-slide.ecom-hotspot-actived {
                    animation-name: slideRight;
                }
                /*
                    .element__image-hotspot--content.has-arrow:not(.element__image-hotspot--content-undefined):after {
                        position: absolute;
                        content: '';
                        width: 8px;
                        height: 16px;
                        background: #ffffff
                    }
                */
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
                    transform: none;
                    translate: 0 -50%;
                }
                .element__image-hotspot--content-top, .element__image-hotspot--content-bottom {
                    left: 50%;
                    transform: none;
                    translate: -50% 0;
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
                    from { opacity: 0; visibility: hidden; transform: translateY(30px) }
                    to { opacity: 1; visibility: visible; transform: translateY(0) }
                }
                @keyframes slideDown {
                    from { opacity: 0; visibility: hidden; transform: translateY(-30px) }
                    to { opacity: 1; visibility: visible; transform: translateY(0) }
                }
                @keyframes slideLeft {
                    from { opacity: 0; visibility: hidden; transform: translateX(30px); }
                    to { opacity: 1; visibility: visible; transform: translateX(0) }
                }
                @keyframes slideRight {
                    from { opacity: 0; visibility: hidden; transform: translateX(-30px); }
                    to { opacity: 1; visibility: visible; transform: translateX(0) }
                }
                @keyframes ecomZoomIn {
                    from { opacity: 0; visibility: hidden; transform: scale3d(.8,.8,.8); }
                    to { opacity: 1; visibility: visible; transform: scale3d(1,1,1); }
                }

                @keyframes ecomBounceIn {
                    0% { opacity: 0; visibility: hidden; transform: scale3d(.3,.3,.3); }
                    20% { transform: scale3d(1.1,1.1,1.1); }
                    40% { transform: scale3d(.9,.9,.9); }
                    60% { opacity: 1; visibility: visible; transform: scale3d(1.03,1.03,1.03); }
                    80% { transform: scale3d(.97,.97,.97); }
                    to { opacity: 1; visibility: visible; transform: scale3d(1,1,1); }
                }
                @keyframes ecomFlash {
                    25%,75% { opacity: 0; }
                    0%,50%,100% { opacity: 1; visibility: visible; }
                }
                @keyframes ecom-animation-pulse {
                    25% { transform: scale(1.1); }
                    75% { transform: scale(.9); }
                }
                @keyframes ecomRubberBand {
                    0% { transform: scaleX(1); }
                    30% { transform: scale3d(1.12,.92,1); }
                    40% { transform: scale3d(.96,1.08,1); }
                    50% { transform: scale3d(1.04,.96,1); }
                    65% { transform: scale3d(.98,1.02,1); }
                    100% { transform: scaleX(1); }
                }
                @keyframes ecomShake {
                    0%,100% { transform: translate3d(0,0,0); }
                    10%,30%,50%,70%,90% { transform: translate3d(-10px,0,0); }
                    20%,40%,60%,80% { transform: translate3d(10px,0,0); }
                }
                @keyframes ecomHeartBeat {
                    0% { transform: scale(1); }
                    14% { transform: scale(1.3); }
                    28% { transform: scale(1); }
                    42% { transform: scale(1.3); }
                    70% { transform: scale(1); }
                    100% { transform: scale(1); }
                }
                @keyframes ecomSwing {
                    20% { transform: rotate3d(0,0,1,15deg); }
                    40% { transform: rotate3d(0,0,1,-10deg); }
                    60% { transform: rotate3d(0,0,1,5deg); }
                    80% { transform: rotate3d(0,0,1,-5deg); }
                    to { transform: rotate3d(0,0,1,0deg); }
                }
                @keyframes ecomTada {
                    from { transform: scale3d(1,1,1); }
                    10%,20% { transform: scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg); }
                    30%,50%,70%,90% { transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg); }
                    40%,60%,80% { transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg); }
                    to { transform: scale3d(1,1,1); }
                }
                @keyframes ecomWobble {
                    0% { transform: translate3d(0,0,0); }
                    15% { transform: translate3d(-15%,0,0) rotate(-3deg); }
                    30% { transform: translate3d(12%,0,0) rotate(2deg); }
                    45% { transform: translate3d(-8%,0,0) rotate(-2deg); }
                    60% { transform: translate3d(5%,0,0) rotate(1deg); }
                    75% { transform: translate3d(-3%,0,0) rotate(-0.5deg); }
                    to { transform: translate3d(0,0,0); }
                }
                @keyframes ecomJello {
                    0%,11.1%,to { transform: translate3d(0,0,0); }
                    22.2% { transform: skewX(-8deg) skewY(-8deg); }
                    33.3% { transform: skewX(4deg) skewY(4deg); }
                    44.4% { transform: skewX(-2deg) skewY(-2deg); }
                    55.5% { transform: skewX(1deg) skewY(1deg); }
                    66.6% { transform: skewX(-0.5deg) skewY(-0.5deg); }
                    77.7% { transform: skewX(0.25deg) skewY(0.25deg); }
                    88.8% { transform: skewX(-0.125deg) skewY(-0.125deg); }
                }

                @keyframes ecomFlip {
                    0% {
                        transform: perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);
                        animation-timing-function: ease-out;
                    }
                    40% {
                        transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);
                        animation-timing-function: ease-out;
                    }
                    50% {
                        transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);
                        animation-timing-function: ease-in;
                    }
                    80% {
                        transform: perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);
                        animation-timing-function: ease-in;
                    }
                    to {
                        transform: perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);
                        animation-timing-function: ease-in;
                    }
                }
                @keyframes ecomRoll {
                    0% { opacity: 0; visibility: hidden; transform: translate3d(-40px,0,0) rotate(-45deg) scale(.8); }
                    100% { opacity: 1; visibility: visible; transform: translate3d(0,0,0) rotate(0deg) scale(1); }
                }
                .ecom__image-hostpot--content-container{
                    display:flex;
                }
                .element__image-hotspot--img, .element__image-hotspot--img img {
                    width: 100%;
                }
                .ecom-image-picture * {
                    transition:inherit;
                }
                @media screen and (max-width: 767px) {
                    .element__image-hotspot--content-centerMobile {
                        /* position & coords are overridden by JS at runtime.
                           position:fixed cannot be used here because any ancestor
                           with CSS transform (hotspotPosition adds translate(-50%,-50%)
                           on positionV2 items) traps fixed-positioned descendants
                           relative to itself instead of the viewport. */
                        z-index: 9999 !important;
                        padding: 0 !important;
                    }
                }
                @media only screen and (max-width: 480px) {
                    /*
                    .element__image-hotspot--content{
                        top:50% !important;
                        left:50% !important;
                        transform: translate(-50%,-50%) !important;
                        position: fixed;
                        padding: 0 !important;
                    }
                    .element__image-hotspot--content {
                        top: 50% !important;
                        left: 50% !important;
                        transform: translate(0%, -50%) !important;
                        position: absolute;
                    }
                    */
                    .ecom-slider .element__image-hotspot--content:not(.element__image-hotspot--content-centerMobile){
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
                .ecom-ingrid-full-height.ecom-element__image-hotspot--wrapper .element__image-hotspot--img img {
                    max-height: 100%;
                }
                /* Coord overlay: sized by JS to match picture bounds.
                   Default full-wrapper coverage works when image fills 100% width. */
                .ecom-element__hotspot-coord {
                    pointer-events: none;
                    z-index: 1;
                }
                .ecom-element__hotspot-coord .element__image-hotspot--text {
                    pointer-events: auto;
                }
            `},image(){if(!this.data.settings)return;let{image:t={},size:e,size_custom:o}=this.data.settings;return Object.keys(t).length===0?null:(e==="custom"?e=o:e&&(e={width:e.split("x")[0],height:e.split("x")[1]}),{alt:t.alt||t.name,...Object.keys(t).filter(n=>n.startsWith("value")).reduce((n,a)=>(n[a]=this.$helpers.resizeImage(t[a],e),n),{})})},isCaption(){var t,e;return((t=this.data.settings)==null?void 0:t.use_caption)&&((e=this.data.settings)==null?void 0:e.caption)},imageHotspot(){return this.data.settings},activeMe(){var t,e,o;return((o=(e=(t=this.editingElement)==null?void 0:t.data)==null?void 0:e.id)!=null?o:0)===this.data.id},isContentEditable(){return this.$store.getters["builder/isContentEditable"]},editingElementId(){return this.$store.getters["builder/editingElementId"]},isEditingThisElement(){return this.exporting?!1:this.editingElementId===this.data.id&&this.isContentEditable},isEditingAnyHotspotInline(){return this.inlineItemIndex!==null&&this.isEditingThisElement},shouldUseProductCSR(){return this.exporting!==!0&&!!this.$shopifyData},hotspotProductHandles(){var e;return(((e=this.data.settings)==null?void 0:e.items)||[]).reduce((o,n)=>{var i;const a=(n==null?void 0:n.source)==="product"?(i=n==null?void 0:n.product)==null?void 0:i.value:null;return a&&typeof a=="string"&&!o.includes(a)&&o.push(a),o},[])},hotspotProductHandlesKey(){return this.hotspotProductHandles.join(",")},javascript(){return this.imageHotspot&&this.imageHotspot.items&&this.imageHotspot.items.length?(this.image,function(){function t(l){if(l&&l.length>0){const h=document.createElement("div");return h.innerHTML=l,h.textContent||h.innerText||""}return""}function e(l,h,u){if(!l||!h)return"";let _=l.split(" ");return _.length<h?l:_.slice(0,h).join(" ")+(u||"")}if(!this.$el)return;const o=this.$el,n=this.isLive,a=o.querySelectorAll(".ecom__element.element__image-hotspot .element__image-hotspot--text");this.isLive||o.querySelectorAll(".element__image-hotspot--content-btn").forEach(l=>{l.addEventListener("click",function(h){h.preventDefault(),h.stopPropagation();let u=this.getAttribute("href");u&&u.indexOf("/product")>=0&&(h.preventDefault(),window.open(window.EComposer.routes.domain+u))})});const i=async function(l){if(!window.EComposer||!window.EComposer.getProduct)return console.log("EComposer theme helper not enabled"),!1;l.querySelector(".element__image-hotspot--content-image").style.opacity=0;const h=l.querySelector(".ecom-hotspots-container-tooltip");h&&h.classList.add("ecom-loading-image");const u=l.getAttribute("data-handle"),_=l.getAttribute("data-limit");var m;try{l.dataset.product?(m=JSON.parse(l.dataset.product),m.handle!==u&&(m=await window.EComposer.getProduct(u))):m=await window.EComposer.getProduct(u)}catch{m=null}const y=l.querySelector(".element__image-hotspot--content-image"),p=l.querySelector(".element__image-hotspot--content-title"),r=l.querySelector(".element__image-hotspot--content-text"),O=l.querySelectorAll(".element__image-hotspot--content-btn");if(m&&m.id){const A=l.querySelector(".element__image-hotspot--content-prices");if(y&&(y.src=m.featured_image),p&&(p.innerText=m.title),r&&(r.innerText=e(t(m.description),parseInt(_!=null?_:20),"...")||""),O.forEach(function(H){H.href=m.url}),A){let H=`<span class="element__image-hotspot--content-price">${window.EComposer.formatMoney(m.price)}</span>`;m.price<m.compare_at_price&&(H+=`<span class="element__image-hotspot--content-price--regular">${window.EComposer.formatMoney(m.compare_at_price)}</span>`),A.innerHTML=H}l.dataset.product=JSON.stringify(m)}h&&h.classList.remove("ecom-loading-image"),l.querySelector(".element__image-hotspot--content-image").style.opacity=1},d=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,g=o.querySelectorAll(".element__image-hotspot--content");a.forEach((l,h)=>{const u=l.querySelector(".element__image-hotspot--btn"),_=l.closest(".ecom-block.ecom-core"),m=l.closest(".core__column--wrapper"),y=l.closest(".ecom-row.ecom-core"),p=l.querySelector(".element__image-hotspot--content");function r(){!(p!=null&&p.classList.contains("element__image-hotspot--content-centerMobile"))||(p.style.position="",p.style.left="",p.style.top="",p.style.bottom="",p.style.right="",p.style.translate="",p.style.transform="")}if(l.getAttribute("data-source")==="link"){let v=l.getAttribute("data-redirect-link")?JSON.parse(l.getAttribute("data-redirect-link")):null;u.addEventListener("click",()=>{this.isLive==!0&&(v!=null&&v.href?v.target?window.open(v.href,"_blank"):window.location.href=v.href:window.location.reload())})}else{let v=function(){a.forEach(function(f){f.style.zIndex=""}),l.style.zIndex="103"},P=function(){l.style.zIndex=""},D=function(){const f=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(f>=768||!p.classList.contains("element__image-hotspot--content-centerMobile"))return;const I=l.getBoundingClientRect(),x=window.visualViewport;let E,L;x?(E=x.offsetLeft+x.width/2,L=x.offsetTop+x.height/2):(E=f/2,L=window.innerHeight/2),p.style.position="absolute",p.style.left=E-I.left+"px",p.style.top=L-I.top+"px",p.style.bottom="unset",p.style.right="unset",p.style.translate="none",p.style.transform="translate(-50%, -50%)"},R=function(){u.addEventListener("click",f=>{if(!n){f.stopPropagation();return}if(p.classList.contains("ecom-hotspot-actived"))c(p),p.classList.remove("ecom-hotspot-actived"),P(),r(),_&&(_.style.zIndex="unset"),m&&(m.style.zIndex="unset"),y&&(y.style.zIndex="unset");else{if(p.dataset.side=="auto"&&j(),s(p),g.forEach(function(E){E.classList.remove("ecom-hotspot-actived")}),p.classList.add("ecom-hotspot-actived","ecom_current_click"),v(),D(),d<768){var I=window.pageYOffset;window.document.addEventListener("scroll",function(){var E=window.pageYOffset;(I-E>100||E-I>100)&&(p.classList.remove("ecom-hotspot-actived"),document.removeEventListener("click",H,!0),c(p),P(),r())})}l.getAttribute("data-source")==="product"&&n==!0&&(clearTimeout(W),W=setTimeout(()=>i(l),500)),setTimeout(()=>{document.removeEventListener("click",H,!0),document.addEventListener("click",H,!0),p.classList.remove("ecom_current_click")},300),_&&(_.style.zIndex="99"),m&&(m.style.zIndex="99"),y&&(y.style.zIndex="99")}})},j=function(){const{width:f,height:I}=p.getBoundingClientRect(),{top:x,right:E,left:L,bottom:Y}=p.closest(".ecom__element.element__image-hotspot .element__image-hotspot--text").getBoundingClientRect();let B="left";(window.innerWidth-E<f||L<f||x<I||Y<I)&&(window.innerWidth-E<f&&L>f&&(B="left"),L<f&&window.innerWidth-E>f&&(B="right"),window.innerWidth-E<f&&L<f&&x>I&&(B="top"),window.innerWidth-E<f&&L<f&&x<I&&Y+I<innerHeight&&(B="bottom"));const Q=/^element__image-hotspot--content-(top|left|right|bottom|auto)$/;p.classList.forEach(X=>{Q.test(X)&&p.classList.remove(X)}),p.classList.add("arrow-"+B),p.classList.add("element__image-hotspot--content-"+B)},W;u&&p&&(this.settings.trigger==="hover"?window.innerWidth<=767?R():(l.addEventListener("mouseover",()=>{if(p.dataset.side=="auto"&&j(),s(p),g.forEach(function(x){x.classList.remove("ecom-hotspot-actived")}),p.classList.add("ecom-hotspot-actived"),v(),D(),d<768){var f=window.pageYOffset;window.document.addEventListener("scroll",function(){var x=window.pageYOffset;(f-x>100||x-f>100)&&(p.classList.remove("ecom-hotspot-actived"),document.removeEventListener("click",H,!0),c(p),P(),r())})}l.getAttribute("data-source")==="product"&&n==!0&&i(l),_&&(_.style.zIndex="99"),m&&(m.style.zIndex="99"),y&&(y.style.zIndex="99")}),l.addEventListener("mouseleave",function(){c(p),p.classList.remove("ecom-hotspot-actived"),P(),r(),_&&(_.style.zIndex="unset"),m&&(m.style.zIndex="unset"),y&&(y.style.zIndex="unset")})):R())}function A(){o.querySelector(".element__image-hotspot--content.ecom-hotspot-actived:not(.ecom_current_click)")&&o.querySelector(".element__image-hotspot--content.ecom-hotspot-actived:not(.ecom_current_click)").classList.remove("ecom-hotspot-actived"),c(p),document.removeEventListener("click",H,!0),a.forEach(function(v){v.style.zIndex=""}),r(),_&&(_.style.zIndex="unset"),m&&(m.style.zIndex="unset"),y&&(y.style.zIndex="unset")}function H(v){const P=v.target.closest(".element__image-hotspot--text");(v==null||!v.target.closest(".ecom-hotspots-container-tooltip")&&!P)&&A()}});function s(l){let h=l.closest(".ecom-column.ecom-core"),u=l.closest(".ecom-row.ecom-core");h&&(h.style.zIndex=101),u&&(u.style.zIndex=101)}function c(l){let h=l.closest(".ecom-column.ecom-core"),u=l.closest(".ecom-row.ecom-core");h&&(h.style.zIndex=""),u&&(u.style.zIndex="")}const S=o.querySelector(".element__image-hotspot--img > img");if(S){const l=()=>{o.querySelector(".ecom-element__image-hotspot--wrapper").classList.add("ecom-image-hotspot-loaded"),S.removeEventListener("load",l)};S.complete?l():S.addEventListener("load",l)}}):function(){}},screens(){return this.$store.getters["builder/screens"]},focalPoint(){let t={},{image:e={}}=this.data.settings;return Object.keys(e).length===0?null:((e==null?void 0:e.left)&&(e==null?void 0:e.top)&&(t["object-position"]=`${e==null?void 0:e.left}% ${e==null?void 0:e.top}%`),t)},settings(){return[{group_title:this.$t("image"),params:[{type:"picker",label:this.$t("choose_image"),name:"image",options:{type:"image",editAlt:!0}},{type:"popup",label:this.$t("image_size"),name:"size",value:"",options:{type:"dropdown",preview:"title",values:{"400x300":"400 x 300px","800x450":"800 x 450px","500x500":"500 x 500px","":this.$t("original")}},css:{isCss:!1}},{type:"popup",label:this.$t("fetch_priority"),name:"fetch_priority",value:"",options:{type:"dropdown",default:!1,preview:"title",values:{auto:this.$t("auto"),low:this.$t("low"),high:this.$t("high")}},css:{isCss:!1}},{type:"size",description:this.$t("you_can_crop_the_original_image_size_to_any_custom_size_you_can_also_set_a_single_value_for_height_or_width_in_order_to_keep_the_original_size_ratio"),name:"size_custom",options:{visible:{keep_data:!1,condition:t=>t.size==="custom"}}},{type:"toggle",name:"disable_lazy",value:!1,label:this.$t("disable_lazyload"),options:{values:{on:{label:"yes",value:!0},off:{label:"no",value:!1}}}},{type:"toggle",name:"use_caption",label:this.$t("use_caption"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},css:{isCss:!1}},{type:"text",name:"caption",options:{placeholder:this.$t("enter_your_caption"),visible:{keep_data:!1,condition:t=>t.use_caption===!0}}}]},{group_title:this.$t("hotspots"),params:[{name:"items",type:"group",value:[],options:{add_text:this.$t("add_item"),is_clear_all:!1},title_unique:!1,params:[{name:"source",type:"popup",label:this.$t("type"),options:{type:"dropdown",default:!1,preview:"title",values:{product:this.$t("product"),custom:this.$t("custom"),link:this.$t("link")}},css:{isCss:!1}},{type:"link",label:this.$t("redirect_to"),name:"redirect_link",description:"This option only works after template's published",options:{visible:{keep_data:!0,condition:t=>t.source==="link"}}},{type:"picker",label:this.$t("choose_product"),name:"product",options:{type:"product",output:["value","name","thumbnail"],editAlt:!0,visible:{keep_data:!1,condition:t=>t.source==="product"}}},{type:"checkbox",name:"fields",label:this.$t("select_fields_to_show"),options:{visible:function(t){return t.source==="product"},values:{title:this.$t("title"),image:this.$t("image"),link:this.$t("link"),price:this.$t("price"),description:this.$t("description")}}},{type:"number",name:"limit_words",label:this.$t("how_many_words_to_show"),options:{min:5,max:150,visible:function(t){var e;return t.source==="product"&&((e=t.fields)==null?void 0:e.includes("description"))}}},{type:"picker",label:this.$t("choose_image"),name:"thumbnailCard",options:{type:"image",output:["value","name"],editAlt:!0,visible:{keep_data:!1,condition:t=>t.source==="custom"}},css:{isCss:!1}},{type:"popup",label:this.$t("image_size"),name:"size",value:"",options:{type:"dropdown",preview:"title",values:{"400x300":"400 x 300px","800x450":"800 x 450px","500x500":"500 x 500px","":this.$t("original")},visible:{keep_data:!1,condition:t=>t.thumbnailCard&&t.thumbnailCard.value}}},{type:"size",description:this.$t("you_can_crop_the_original_image_size_to_any_custom_size_you_can_also_set_a_single_value_for_height_or_width_in_order_to_keep_the_original_size_ratio"),name:"size_custom",options:{visible:{keep_data:!1,condition:t=>t.thumbnailCard&&t.thumbnailCard.value&&t.size==="custom"}}},{type:"text",name:"button_label",label:this.$t("button_label"),options:{visible:{keep_data:!1,condition:t=>t.source!=="link"}}},{type:"picker",label:this.$t("icon"),name:"hotspotIcon",options:{oneline:!0,type:"icon"}},{type:"toggle",name:"isShowLabel",label:this.$t("custom_text"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},css:{isCss:!1}},{name:"hotspotLabel",type:"text",label:this.$t("label"),options:{visible:{keep_data:!1,condition:t=>t.isShowLabel===!0}}},{type:"line",name:"line",options:{visible:function(t){return t.source!=="link"}}},{type:"choose",label:this.$t("span_class_uppercase_html_span_tag"),name:"tag",options:{chooseOne:!0,type:"heading",modify:{add:[{text:"P",value:"p"}]},visible:{keep_data:!1,condition:t=>t.source!=="link"}}},{name:"titleCard",type:"text",label:this.$t("title"),options:{visible:{keep_data:!1,condition:t=>t.source==="custom"}}},{type:"textarea",label:this.$t("content"),name:"textCard",options:{toolbar:"short",height:100,visible:{keep_data:!1,condition:t=>t.source==="custom"}}},{name:"hotspotsAnimation",type:"popup",value:"none",label:this.$t("animation"),options:{type:"dropdown",default:!1,preview:"title",values:{none:this.$t("none"),"ecom-fade":this.$t("fade"),"ecom-slide":this.$t("slide"),"ecom-zoom-in":this.$t("zoom_in"),"ecom-bounce-in":this.$t("bounce_in"),"ecom-flash":this.$t("flash"),"ecom-pulse":this.$t("pulse"),"ecom-rubber-band":this.$t("rubber_band"),"ecom-shake":this.$t("shake"),"ecom-heart-beat":this.$t("heart_beat"),"ecom-swing":this.$t("swing"),"ecom-tada":this.$t("tada"),"ecom-wobble":this.$t("wobble"),"ecom-jello":this.$t("jello"),"ecom-flip":this.$t("flip"),"ecom-roll":this.$t("roll")}}},{type:"number",label:this.$t("animation_duration_span_class_lowercase_ms_span"),name:"hotspotsAnimationDuration",value:300,options:{default:300,min:10,max:3e3,slider:!0,visible:{keep_data:!1,condition:t=>t.hotspotsAnimation&&t.hotspotsAnimation!=="none"}},css:{selector:" .element__image-hotspot--btn",properties:{"animation-duration":"%value%ms","transition-property":"transform, opacity, visibility"}}},{type:"checkbox",name:"hotspotAnimationLoop",options:{values:{true:this.$t("loop")},visible:{keep_data:!1,condition:t=>t.hotspotsAnimation&&t.hotspotsAnimation!=="none"}}},{name:"tooltipSide",type:"popup",label:this.$t("tooltip_side"),options:{type:"dropdown",default:!1,preview:"title",reset:!0,values:{auto:this.$t("auto"),top:this.$t("top"),bottom:this.$t("bottom"),left:this.$t("left"),right:this.$t("right")},visible:{keep_data:!0,condition:t=>t.source!=="link"}}},{name:"buttonCard",type:"text",label:this.$t("link_text"),options:{visible:{keep_data:!1,condition:t=>t.source==="custom"}}},{name:"linkButtonCard",type:"link",label:this.$t("link_button"),options:{visible:{keep_data:!1,condition:t=>t.source==="custom"}}}]},{type:"paragraph",content:this.$t("change_hotspot_position_by_drag_action")},{type:"line"},{type:"paragraph",content:this.$t("strong_tooltip_strong")},{name:"trigger",type:"popup",label:this.$t("show_when"),options:{type:"dropdown",default:!1,preview:"title",values:{click:this.$t("click"),hover:this.$t("hover")}}},{name:"tooltipAnimation",type:"popup",value:"none",label:this.$t("animation"),options:{type:"dropdown",default:!1,preview:"title",values:{none:this.$t("none"),"ecom-fade":this.$t("fade"),"ecom-slide":this.$t("slide"),"ecom-zoom-in":this.$t("zoom_in"),"ecom-bounce-in":this.$t("bounce_in"),"ecom-flash":this.$t("flash"),"ecom-pulse":this.$t("pulse"),"ecom-rubber-band":this.$t("rubber_band"),"ecom-shake":this.$t("shake"),"ecom-heart-beat":this.$t("heart_beat"),"ecom-swing":this.$t("swing"),"ecom-tada":this.$t("tada"),"ecom-wobble":this.$t("wobble"),"ecom-jello":this.$t("jello"),"ecom-flip":this.$t("flip"),"ecom-roll":this.$t("roll")}}},{type:"number",label:this.$t("animation_duration_span_class_lowercase_ms_span"),name:"tooltipDuration",options:{min:10,max:3e3,slider:!0,visible:{keep_data:!1,condition:t=>t.tooltipAnimation&&t.tooltipAnimation!=="none"}},css:{selector:" .element__image-hotspot--content",properties:{"animation-duration":"%value%ms","transition-property":"transform, opacity, visibility"}}},{type:"toggle",name:"isHasArrow",label:this.$t("use_arrow"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"toggle",name:"centerMobile",label:this.$t("center_on_mobile"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"toggle",name:"openthistab",label:this.$t("open_link_in_this_tab"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}}]}]},default(){return{settings:{items:[{title:"Item #1111",hotspotIcon:{thumbnail:'<svg xmlns="http: //www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',value:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},horizontalPosition:9,verticalPosition:41,tooltipSide:"right",hotspotWidth:250,hotspotsAnimation:"ecom-fade",hotspotsAnimationDuration:300,source:"product",isShowLabel:!1,product:{value:"dance-bag-nylon",name:"Dance Bag Nylon",thumbnail:"https://cdn.shopify.com/s/files/1/0629/7318/2186/products/dance_nylon_main.png?v=1645112412&width=500&height=500&crop=center"},fields:["title","image","price","link"]},{title:"Item #1",hotspotIcon:{thumbnail:'<svg xmlns="http: //www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',value:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},horizontalPosition:40,verticalPosition:35,tooltipSide:"left",hotspotWidth:250,hotspotsAnimation:"ecom-fade",hotspotsAnimationDuration:300,source:"product",isShowLabel:!1,product:{value:"dance-bag-nylon",name:"Dance Bag Nylon",thumbnail:"https://cdn.shopify.com/s/files/1/0629/7318/2186/products/dance_nylon_main.png?v=1645112412&width=500&height=500&crop=center"},fields:["title","image","link","price"]},{title:"Item #1",hotspotIcon:{thumbnail:'<svg xmlns="http: //www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',value:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},horizontalPosition:83,verticalPosition:15,tooltipSide:"left",hotspotWidth:250,hotspotsAnimation:"ecom-fade",hotspotsAnimationDuration:300,source:"product",isShowLabel:!1,product:{value:"dance-bag-nylon",name:"Dance Bag Nylon",thumbnail:"https://cdn.shopify.com/s/files/1/0629/7318/2186/products/dance_nylon_main.png?v=1645112412&width=500&height=500&crop=center"},fields:["title","image","link","price"]}],image:{value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/loobook_4100x_c06278a0-a64a-461f-93d3-fe06f3c8487f.jpg?v=1648018318",name:"loobook_4100x_c06278a0-a64a-461f-93d3-fe06f3c8487f"},trigger:"hover",isHasArrow:!0,tooltipAnimation:"ecom-fade",tooltipDuration:300},style:{hotspotImage:{imageOpacitynormalmode:1,imageOpacityhovermode:1,imageAlign:"center",imageObjectFit:"cover",tab:"normal"},hotspotGeneral:{boxBackground:"#ed8a8a",boxBorderRadius:{top:"50%",left:"50%",bottom:"50%",right:"50%"}},hotspotIcon:{iconFontSize:"16px",spacing:{padding:{top:"8px",left:"8px",bottom:"8px",right:"8px"}},iconPrimaryColor:{"global-colors":"primary"}},hotspotTooltipGeneral:{background:{classic:{"background-color":"#ffffff"}},spacing:{padding:{left:"8px",top:"8px",bottom:"8px",right:"8px"}},hotspotWidth:"200px",boxShadow:{"box-shadow":{horizontal:"1px",vertical:"1px",blur:"5px",color:"rgba(125, 125, 125, 0.35)"}},boxBorderRadius:{top:"4px",left:"4px",bottom:"4px",right:"4px"}},hotspotTooltipImage:{imageOpacitynormalmode:1,imageObjectFit:"cover",imageOpacityhovermode:1,tab:"normal"},hotspotTooltipTitle:{textTextAlign:"center",spacing:{margin:{bottom:"5px",top:"10px"}},textTypography:{"global-typography":"m5lJMKLv"},textColor:"#111"},hotspotTooltipContent:{textTextAlign:"center",spacing:{margin:{bottom:"6px"}},textColor:"#333",textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"13px"}},hotspotTooltipButton:{"justify-content":"center",tab:"normal",buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"13px","text-decoration":"none"},buttonColornormalmode:"#de5757"},hotspotTooltipPrice:{textTextAlign:"center",textColor:"#e06565"}}}}},methods:{_updateHotspotCoord(){var a,i;const t=(a=this.$el)==null?void 0:a.querySelector(".ecom-element__image-hotspot--wrapper"),e=(i=this.$el)==null?void 0:i.querySelector(".element__image-hotspot--img");if(!t||!e)return;const o=t.getBoundingClientRect(),n=e.getBoundingClientRect();!o.width||!o.height||(this.hotspotCoordStyle={left:n.left-o.left+"px",top:n.top-o.top+"px",width:n.width+"px",height:n.height+"px"})},hotspotPosition(t){var e,o,n,a;return t.positionV2?{left:((e=t.horizontalPosition)!=null?e:0)+"%",top:((o=t.verticalPosition)!=null?o:0)+"%",transform:"translate(-50%, -50%)"}:{left:((n=t.horizontalPosition)!=null?n:0)+"%",top:((a=t.verticalPosition)!=null?a:0)+"%"}},applyAnimationDefaultsIfMissing(){var n;const t=(n=this.data)==null?void 0:n.settings;if(!t||typeof t!="object")return;const e=a=>a==null||a==="";e(t.tooltipAnimation)&&(t.tooltipAnimation="none");const o=t.items;if(!!Array.isArray(o))for(let a=0;a<o.length;a++){const i=o[a];!i||typeof i!="object"||e(i.hotspotsAnimation)&&(i.hotspotsAnimation="none")}},quickToolBar(){return["image","size"]},isBuilderHotspotPopupOpen(t){var o,n;return this.exporting?!1:((n=(o=this.data.settings)==null?void 0:o.items)==null?void 0:n.tabOpened)===t||this.inlineItemIndex===t&&this.isEditingThisElement},showHotspotBtnLabel(t){return t?this.exporting?!!(t.hotspotLabel&&t.hotspotLabel.length):t.isShowLabel===!0||!!(t.hotspotLabel&&t.hotspotLabel.length):!1},isEditingHotspotField(t,e){return this.inlineItemIndex===t&&this.inlineEditField===e&&this.isEditingThisElement},getHotspotFieldRaw(t,e){var n,a;const o=(a=(n=this.data.settings)==null?void 0:n.items)==null?void 0:a[t];return o?e==="button_label"?o.button_label:e==="hotspotLabel"?o.hotspotLabel:e==="titleCard"?o.titleCard:e==="textCard"?o.textCard:e==="buttonCard"?o.buttonCard:"":""},hotspotInlineValueMode(t){return["hotspotLabel","titleCard","button_label","buttonCard"].includes(t)?"text":"html"},textLooksDynamic(t){const e=String(t||"");return e.includes("{{")||e.includes("{%")},onHotspotInlineMouseDown(t,e,o){this.exporting||this.inlineItemIndex!==null&&(this.inlineItemIndex!==t||this.inlineEditField!==e)&&this.isContentEditable&&o.preventDefault()},editHotspotField(t,e,o){var g,s,c;if(this.exporting)return;const n=(s=(g=this.data.settings)==null?void 0:g.items)==null?void 0:s[t];if(!n)return;if(e==="hotspotLabel"){if(!this.showHotspotBtnLabel(n)&&!n.isShowLabel)return;n.isShowLabel||(n.isShowLabel=!0)}else if(e==="button_label"){if(n.source!=="product")return}else if(e==="titleCard"||e==="textCard"||e==="buttonCard"){if(n.source!=="custom")return}else return;const a=this.getHotspotFieldRaw(t,e),i=e==="button_label"?"View Details":"",d=a||i;d&&this.textLooksDynamic(String(d))||(this.isContentEditable&&!this.isEditingThisElement&&this.$store.commit("builder/setIsContentEditable",!1),this.inlineItemIndex!==null&&(this.inlineItemIndex!==t||this.inlineEditField!==e)&&this.syncHotspotInlineToModel(),this.inlineItemIndex=t,this.inlineEditField=e,this.editingValue=String((c=a!=null?a:i)!=null?c:""),this.currentEditEl=o.currentTarget,this.setEditingElement(t,{forceOpen:!0}),this.$store.commit("builder/setEditingElementId",this.data.id),this.$store.commit("builder/setIsContentEditable",!0),this.focusHotspotInlineField())},focusHotspotInlineField(){var o;if(this.exporting||this.inlineItemIndex===null||!this.inlineEditField||!this.isEditingThisElement)return;const t=this.getHotspotFieldRaw(this.inlineItemIndex,this.inlineEditField),e=this.inlineEditField==="button_label"?"View Details":"";this.editingValue=String((o=t!=null?t:e)!=null?o:""),this.$nextTick(()=>{!this.isEditingHotspotField(this.inlineItemIndex,this.inlineEditField)||nt(this.currentEditEl,this.idoc())})},onHotspotInlineInput(t,e){var d,g;if(this.exporting||this.inlineItemIndex!==t||!this.inlineEditField||!this.isEditingThisElement)return;const o=(g=(d=this.data.settings)==null?void 0:d.items)==null?void 0:g[t];if(!o)return;const n=this.getHotspotFieldRaw(t,this.inlineEditField);if(n&&this.textLooksDynamic(String(n)))return;const a=e==null?void 0:e.target;if(!a)return;const i=q(a,this.hotspotInlineValueMode(this.inlineEditField));this.inlineEditField==="button_label"?o.button_label!==i&&(o.button_label=i):this.inlineEditField==="hotspotLabel"?o.hotspotLabel!==i&&(o.hotspotLabel=i):this.inlineEditField==="titleCard"?o.titleCard!==i&&(o.titleCard=i):this.inlineEditField==="textCard"?o.textCard!==i&&(o.textCard=i):this.inlineEditField==="buttonCard"&&o.buttonCard!==i&&(o.buttonCard=i)},handleHotspotInlineBlur(){this.exporting||setTimeout(()=>{var o,n;const t=document.activeElement,e=this.$el;t&&(e==null?void 0:e.contains(t))&&(((o=t.classList)==null?void 0:o.contains("ecom-html"))||((n=t.closest)==null?void 0:n.call(t,".element__image-hotspot--btn-label, .element__image-hotspot--content-title, .element__image-hotspot--content-text, .element__image-hotspot--content-btn")))||(this.syncHotspotInlineToModel(),this.isBlur&&setTimeout(()=>{this.$store.commit("builder/setIsContentEditable",!1),this.inlineItemIndex=null,this.inlineEditField=null,this.currentEditEl=null},200))},0)},syncHotspotInlineToModel(){if(this.inlineItemIndex===null||!this.inlineEditField||!this.currentEditEl)return;const t=this.data.settings.items[this.inlineItemIndex];if(!t)return;const e=this.currentEditEl,o=this.inlineEditField,n=q(e,this.hotspotInlineValueMode(o));o==="button_label"&&t.button_label!==n?t.button_label=n:o==="hotspotLabel"&&t.hotspotLabel!==n?t.hotspotLabel=n:o==="titleCard"&&t.titleCard!==n?t.titleCard=n:o==="textCard"&&t.textCard!==n?t.textCard=n:o==="buttonCard"&&t.buttonCard!==n&&(t.buttonCard=n)},stripContent(t){if(t&&t.length>0){const e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText||""}return""},truncateWords(t,e,o){if(!t||!e)return"";let n=t.split(" ");return n.length<e?t:n.slice(0,e).join(" ")+(o||"")},async loadHotspotProducts(){if(!this.shouldUseProductCSR)return;this._csrFetchedHandles||(this._csrFetchedHandles=new Set);const t=this.hotspotProductHandles.filter(o=>!this._csrFetchedHandles.has(o));if(!t.length)return;t.forEach(o=>this._csrFetchedHandles.add(o));const e=[];for(let o=0;o<t.length;o+=N)e.push(t.slice(o,o+N));try{const o=await Promise.all(e.map(a=>this.$shopifyData.getProducts({type:"products_batch",handles:a,limit:a.length}).catch(()=>[]))),n={};o.flat().forEach(a=>{a!=null&&a.handle&&(n[a.handle]=a,Z.set(a.handle,a))}),Object.keys(n).length&&(this.csrProducts={...this.csrProducts,...n})}catch{}},debouncedLoadHotspotProducts(){this._csrTimer&&clearTimeout(this._csrTimer),this._csrTimer=setTimeout(()=>this.loadHotspotProducts(),300)},hotspotProduct(t){var o;if(this.exporting===!0||(t==null?void 0:t.source)!=="product")return null;const e=(o=t==null?void 0:t.product)==null?void 0:o.value;return e&&(this.csrProducts[e]||Z.get(e))||null},hotspotShopData(){var e,o;const t=((o=(e=this.$liquidEngine)==null?void 0:e.getShopData)==null?void 0:o.call(e))||null;return t&&(G=t),t||G},hotspotProductTitle(t){var o,n;if(this.exporting===!0)return"";const e=((o=this.hotspotProduct(t))==null?void 0:o.title)||((n=t==null?void 0:t.product)==null?void 0:n.name);return this.escapeHtmlText(e||gt)},hotspotProductPrice(t){if(this.exporting===!0)return"";const e=this.hotspotProduct(t);if(!e)return`<span class="element__image-hotspot--content-price">${_t}</span>`;const o=this.hotspotShopData();let n=`<span class="element__image-hotspot--content-price">${J(e.price,o)}</span>`;return e.compare_at_price&&e.price<e.compare_at_price&&(n+=`<span class="element__image-hotspot--content-price--regular">${J(e.compare_at_price,o)}</span>`),n},hotspotProductDescription(t){var o,n;if(this.exporting===!0)return"";const e=((o=this.hotspotProduct(t))==null?void 0:o.description)||ft;return this.escapeHtmlText(this.truncateWords(this.stripContent(e),parseInt((n=t==null?void 0:t.limit_words)!=null?n:20),"..."))},escapeHtmlText(t){return t?String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""},hotspotBtnAnimationClass(t){const e=t==null?void 0:t.hotspotsAnimation;return!e||e==="none"?"":e},tooltipContentAnimationClass(){var e;const t=(e=this.imageHotspot)==null?void 0:e.tooltipAnimation;return!t||t==="none"?"ecom-animation-none":t},hotspotBtnStyle(t){const e=t.source==="link"&&this.exporting?{cursor:"pointer"}:{...this.cursorBtn},o=t.hotspotsAnimation,n=t.hotspotsAnimationDuration,a=t.hotspotAnimationLoop===!0||t.hotspotAnimationLoop==="true"||Array.isArray(t.hotspotAnimationLoop)&&(t.hotspotAnimationLoop.includes(!0)||t.hotspotAnimationLoop.includes("true"));return o&&o!=="none"&&(e.animationDuration=`${n||300}ms`,e.transitionProperty="transform, opacity, visibility",e.animationIterationCount=a?"infinite":"1"),e},onBuilderHotspotBtnClick(t,e){var a,i,d;if(this.exporting||this.isLive||this.isEditingHotspotField(t,"hotspotLabel")&&((i=(a=e==null?void 0:e.target)==null?void 0:a.closest)==null?void 0:i.call(a,".element__image-hotspot--btn-label")))return;const o=((d=this.data.settings)==null?void 0:d.trigger)==="hover";if(this.$store.commit("builder/setEditingElement",this),this.$store.commit("builder/setEditingElementId",this.data.id),o)return;if("tabOpened"in this.data.settings.items||Object.defineProperty(this.data.settings.items,"tabOpened",{enumerable:!1,writable:!0}),this.data.settings.items.tabOpened===t){this.syncHotspotInlineToModel(),this.$store.commit("builder/setIsContentEditable",!1),this.inlineItemIndex=null,this.inlineEditField=null,this.currentEditEl=null,this.data.settings.items.tabOpened=-1;return}this.data.settings.items.tabOpened=t},setEditingElement(t,e={}){var n;if(this.exporting)return;this.$store.commit("builder/setEditingElement",this),this.$store.commit("builder/setEditingElementId",this.data.id);const o=((n=this.data.settings)==null?void 0:n.trigger)==="hover"&&!(e!=null&&e.forceOpen)&&!this.isContentEditable;"tabOpened"in this.data.settings.items||Object.defineProperty(this.data.settings.items,"tabOpened",{enumerable:!1,writable:!0}),!o&&(this.data.settings.items.tabOpened=t)},convertImageCard(t){var i;if(!t)return;let{thumbnailCard:e={},product:o,source:n="custom"}=t;if(n==="custom"&&Object.keys(e).length===0||n==="product"&&!o)return null;const a=(i=this.hotspotProduct(t))==null?void 0:i.featured_image;return{alt:e.alt||e.name,src:(n==="custom"?e==null?void 0:e.value:(o==null?void 0:o.thumbnail)||(a==null?void 0:a.src)||(a==null?void 0:a.url))||"images/placeholder.png"}},checkLabelHotspots(){var t;return(t=this.data.settings.items)==null?void 0:t.some(e=>e.isShowLabel&&e.hotspotLabel)},style(){return[{group_alias:"image",options:{group_name:"hotspotImage",group_title:this.$t("image"),selector:" .element__image-hotspot--img"},modify:{params:[{position:3,fields:[{type:"choose",label:this.$t("alignment"),name:"imageAlign",options:{oneline:!0,responsive:!0,type:"text-align",values:["flex-start","center","flex-end"],visible:{keep_data:!1,condition:e=>e.imageWidth!=="100%"}},css:{selector:"root .ecom-image-align",properties:{"justify-content":""}}}]}]}},{group_alias:"box",options:{group_name:"hotspotGeneral",group_title:this.$t("hotspot_general"),selector:" .ecom__element.element__image-hotspot .element__image-hotspot--btn"},modify:{params:[{position:6,fields:[{type:"number",label:this.$t("width"),name:"hotspot_width",options:{units:{px:{min:0,max:200}},reset:!1,responsive:!0},css:{properties:{width:""}}},{type:"number",label:this.$t("height"),name:"hotspot_height",options:{units:{px:{min:0,max:200}},reset:!1,responsive:!0},css:{properties:{height:""}}}]}]}},this.checkLabelHotspots()?{group_alias:"text:hover",options:{group_name:"hotspotLabel",group_title:this.$t("hotspot_label"),selector:" .ecom__element.element__image-hotspot .element__image-hotspot--text .element__image-hotspot--btn-label"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing",options:{label:this.$t("spacing")}}]}],remove:{index:0,length:1}}}:null,{group_alias:"icon",options:{group_name:"hotspotIcon",group_title:this.$t("hotspot_icon"),selector:" .ecom__element.element__image-hotspot .element__image-hotspot--text .element__image-hotspot--btn-icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing",options:{label:this.$t("spacing")}}]}]}},{group_alias:"box",options:{group_name:"hotspotTooltipGeneral",group_title:this.$t("tooltip_general"),selector:" .ecom-hotspots-container-tooltip"},modify:{params:[{fields:{type:"number",label:this.$t("width"),name:"hotspotWidth",options:{units:{px:{min:10,max:1e3},"%":{min:1,max:100}},input:!0,responsive:!0},css:{selector:"root .element__image-hotspot--content",properties:{width:""}}}},{position:15,fields:{alias:"spacing",options:{label:this.$t("spacing")}}},{position:2,fields:{alias:"background",options:{label:this.$t("background"),css:{selector:",root .element__image-hotspot--content.has-arrow:after"}}}}],remove:{index:1,length:1}}},{group_alias:"image",options:{group_name:"hotspotTooltipImage",group_title:this.$t("tooltip_image"),selector:" .ecom__element.element__image-hotspot .element__image-hotspot--content .element__image-hotspot--content-image"},modify:{params:[{position:1,fields:{type:"number",name:"imageWidth",label:this.$t("width"),options:{responsive:!0,reset:!0,units:{"%":{min:0,max:100},px:{min:0,max:1e3},vw:{min:0,max:100}}},css:{important:!0,properties:{width:""}}}},{position:4,fields:{type:"number",name:"imageHeight",label:this.$t("height"),options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3},vh:{min:0,max:100}}},css:{important:!0,properties:{height:""}}}},{position:15,fields:[{type:"line"},{alias:"spacing",options:{label:this.$t("spacing")}}]}],remove:[{index:0,length:1},{index:2,length:1}]}},{group_alias:"text",options:{group_name:"hotspotTooltipTitle",group_title:this.$t("tooltip_title"),selector:" .ecom__element.element__image-hotspot .element__image-hotspot--content .element__image-hotspot--content-title"},modify:{params:{position:15,fields:[{alias:"spacing",options:{label:this.$t("spacing")}}]}}},{group_alias:"text",options:{group_name:"hotspotTooltipContent",group_title:this.$t("tooltip_content"),selector:" .ecom__element.element__image-hotspot .element__image-hotspot--content .element__image-hotspot--content-text"},modify:{params:{position:15,fields:[{alias:"spacing",options:{label:this.$t("spacing")}}]}}},{group_alias:"text",options:{group_name:"hotspotTooltipPrice",group_title:this.$t("tooltip_price"),selector:" .element__image-hotspot--content-price"},modify:{remove:{length:1,index:0},params:[{position:1,fields:{type:"choose",label:this.$t("alignment"),name:"textTextAlign",options:{oneline:!0,responsive:!0,type:"align-full",values:["left","center","right","justify"]},css:{properties:{"text-align":""},selector:"root .element__image-hotspot--content-prices"}}},{position:15,fields:[{alias:"spacing",options:{label:this.$t("spacing")}}]}]}},{group_alias:"text",options:{group_name:"hotspotTooltipPriceRegular",group_title:this.$t("tooltip_price_regular"),selector:" .element__image-hotspot--content-price--regular"},modify:{params:{position:15,fields:[{alias:"spacing",options:{label:this.$t("spacing")}}]}}},{group_alias:"button",options:{group_name:"hotspotTooltipButton",group_title:this.$t("tooltip_button"),selector:" .ecom__element.element__image-hotspot .ecom__image-hostpot--content-container .element__image-hotspot--content-btn"},modify:{params:[{position:0,fields:[{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:"root .ecom-button-default"}}}]}]}},this.isCaption?{group_alias:"text",options:{group_name:"hotspotCation",group_title:this.$t("caption"),selector:" .ecom__element.element__image-hotspot .ecom-image__caption"}}:null].filter(e=>e)},mouseDown(t,e){if(this.exporting||t.target.closest(".ecom-hotspots-container-tooltip")||this.isContentEditable)return;const o=t.target.closest(".element__image-hotspot--text"),a=(this.$el.querySelector(".ecom-element__hotspot-coord")||this.$el).getBoundingClientRect(),i=o.getBoundingClientRect(),d=i.left+i.width/2,g=i.top+i.height/2,s=(d-a.left)/a.width*100,c=(g-a.top)/a.height*100;this.drag.grabOffsetCenterX=(t.clientX-d)/a.width*100,this.drag.grabOffsetCenterY=(t.clientY-g)/a.height*100,this.drag.coordRect=a,this.drag.x=s,this.drag.y=c,this.drag.currentEl=o,this.drag.i=e,this.idoc().onmousemove=this.onMouseMove,this.idoc().onmouseup=this.onMouseUp},onHotspotMouseUp(t,e){var o,n;this.exporting||(n=(o=t==null?void 0:t.target)==null?void 0:o.closest)!=null&&n.call(o,".element__image-hotspot--btn")||this.setEditingElement(e)},onMouseUp(){const t=this.idoc();t&&(t.onmousemove=null,t.body&&(t.body.style.userSelect="",t.body.style.cursor="")),this.drag.rafId&&cancelAnimationFrame(this.drag.rafId);let{i:e,x:o,y:n}=this.drag;e>-1&&this.drag.started&&o>=0&&n>=0&&this.hotSpot&&this.hotSpot.items&&this.hotSpot.items[e]&&(this.hotSpot.items[e].horizontalPosition=o,this.hotSpot.items[e].verticalPosition=n,this.hotSpot.items[e].positionV2=!0),Object.assign(this.drag,{x:-1,y:-1,i:-1,started:!1,coordRect:null,rafId:null})},onMouseMove(t){if(typeof(t==null?void 0:t.buttons)=="number"&&(t.buttons&1)!==1)return;const e=this.drag.coordRect||this.$el.getBoundingClientRect(),o=(t.clientX-e.left)/e.width*100,n=(t.clientY-e.top)/e.height*100,a=o-this.drag.grabOffsetCenterX,i=n-this.drag.grabOffsetCenterY,d=Math.max(0,Math.min(100,a)),g=Math.max(0,Math.min(100,i));this.idoc&&this.idoc().body&&(this.idoc().body.style.userSelect="none",this.idoc().body.style.cursor="move"),!this.drag.started&&(Math.abs(d-this.drag.x)>.5||Math.abs(g-this.drag.y)>.5)&&(this.drag.started=!0),this.drag.started&&(this.drag.x=d,this.drag.y=g,this.drag.rafId||(this.drag.rafId=requestAnimationFrame(()=>{this.drag.currentEl&&(this.drag.currentEl.style.left=`${this.drag.x}%`,this.drag.currentEl.style.top=`${this.drag.y}%`,this.drag.currentEl.style.transform="translate(-50%, -50%)"),this.drag.rafId=null})))}},watch:{activeMe(t){!t&&this.isContentEditable&&(this.$store.commit("builder/setIsContentEditable",!1),this.$store.commit("builder/setEditingElementId",""),this.syncHotspotInlineToModel(),this.inlineItemIndex=null,this.inlineEditField=null,this.currentEditEl=null),t&&this.$store.commit("builder/setEditingElementId",this.data.id)},isContentEditable(){this.isBlur=!1},isEditingThisElement(t){t&&this.inlineItemIndex!==null&&this.inlineEditField&&this.focusHotspotInlineField()},"data.settings":{handler(){this.applyAnimationDefaultsIfMissing()},immediate:!0,deep:!0},hotspotProductHandlesKey:{handler(){this.debouncedLoadHotspotProducts()},immediate:!0}}},bt=["data-trigger","data-stopdrag"],yt=["data-notice-content"],wt=["innerHTML"],vt=["innerHTML"],xt=["data-index","data-source","data-redirect-link","data-handle","data-limit","onMouseup","onMousedown"],kt=["onClick"],Et=["innerHTML"],It={key:1,class:"element__image-hotspot--btn-icon ecom-flex ecom-fl_center ecom-al_center"},Ct=["contenteditable","onMousedown","onDblclick","onInput","innerHTML"],Ht=["data-side"],Lt={class:"ecom-hotspots-container-tooltip"},$t={key:0},Tt=["target"],St=["innerHTML"],Mt=["data-exporting","contenteditable","onMousedown","onDblclick","onInput","innerHTML"],Pt={class:"ecom__image-hostpot--content-container ecom-button-default"},Bt=["target","contenteditable","onMousedown","onDblclick","onInput","innerHTML"],At=["href"],Ft=["contenteditable","onMousedown","onDblclick","onInput","innerHTML"];function zt(t,e,o,n,a,i){var d,g;return b(),k("div",{class:$(["ecom__element ecom-element element__image-hotspot",{"ecom-ingrid-full-height":o.data.inGrid}]),"data-trigger":(d=o.data.settings)==null?void 0:d.trigger,"data-stopdrag":i.isEditingAnyHotspotInline?!0:null},[i.image?(b(),k("div",{key:0,class:$(["ecom-element__image-hotspot--wrapper ecom-image-align ecom-flex",{"ecom-replace-notice":t.$helpers.isPreviewImage(JSON.stringify(i.image)),"ecom-ingrid-full-height":o.data.inGrid}]),"data-notice-content":t.exporting?null:t.$t("this_image_is_for_preview_only")},[C("picture",{class:"element__image-hotspot--img ecom-image-default",innerHTML:t.$helpers.renImageResponsive(i.image,i.screens,i.lazyload,i.focalPoint,null,((g=o.data.settings)==null?void 0:g.fetch_priority)||"")},null,8,wt),i.isCaption?(b(),k("figcaption",{key:0,class:"ecom-image__caption ecom-w__full",innerHTML:i.imageHotspot.caption},null,8,vt)):T("",!0),C("div",{class:"ecom-element__hotspot-coord ecom-pa",style:F(a.hotspotCoordStyle)},[(b(!0),k(at,null,lt(i.imageHotspot.items,(s,c)=>{var S,l,h,u,_,m,y,p;return b(),k("div",{key:c,"data-index":c,class:$(["element__image-hotspot--text ecom-pa ecom-flex ecom-fl_center ecom-al_center",{"element__image-hotspot--btn-nolabel":!i.showHotspotBtnLabel(s)}]),style:F(i.hotspotPosition(s)),"data-source":s.source,"data-redirect-link":JSON.stringify(s.redirect_link),"data-handle":s.product&&s.product.value,"data-limit":(S=s==null?void 0:s.limit_words)!=null?S:20,"data-stopdrag":"",onMouseup:r=>i.onHotspotMouseUp(r,c),onMousedown:r=>i.mouseDown(r,c)},[C("div",{class:$(["element__image-hotspot--btn ecom-flex ecom-fl_center ecom-al_center",i.hotspotBtnAnimationClass(s)]),style:F(i.hotspotBtnStyle(s)),onClick:w(r=>i.onBuilderHotspotBtnClick(c,r),["stop"])},[s.hotspotIcon&&s.hotspotIcon.value?(b(),k("div",{key:0,class:"element__image-hotspot--btn-icon ecom-flex ecom-fl_center ecom-al_center",innerHTML:s.hotspotIcon&&s.hotspotIcon.value},null,8,Et)):(b(),k("div",It,e[4]||(e[4]=[C("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",width:"16",height:"16"},[C("g",null,[C("g",null,[C("path",{d:"M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z",fill:"currentColor"})])])],-1)]))),i.showHotspotBtnLabel(s)?(b(),k("div",{key:2,class:"element__image-hotspot--btn-label ecom-html",contenteditable:!!(!t.isFullScreen&&i.isEditingHotspotField(c,"hotspotLabel")),spellcheck:"false",onMousedown:w(r=>i.onHotspotInlineMouseDown(c,"hotspotLabel",r),["stop"]),onDblclick:w(r=>i.editHotspotField(c,"hotspotLabel",r),["stop","prevent"]),onInput:w(r=>i.onHotspotInlineInput(c,r),["stop"]),onBlur:e[0]||(e[0]=(...r)=>i.handleHotspotInlineBlur&&i.handleHotspotInlineBlur(...r)),innerHTML:i.isEditingHotspotField(c,"hotspotLabel")?a.editingValue:t.lang(s.hotspotLabel,"hotspot_label"+c)},null,40,Ct)):T("",!0)],14,kt),s.source!=="link"?(b(),k("div",{key:0,class:$(["element__image-hotspot--content",[`element__image-hotspot--content-${s.tooltipSide}`,i.imageHotspot.isHasArrow?"has-arrow":"",i.tooltipContentAnimationClass(),i.imageHotspot.centerMobile?"element__image-hotspot--content-centerMobile":"",s.tooltipSide?`arrow-${s.tooltipSide}`:"",{"ecom-hotspot-actived":i.isBuilderHotspotPopupOpen(c)}]]),tabindex:"0","data-side":s.tooltipSide},[C("div",Lt,[s.source==="product"&&!s.product?(b(),k("div",$t," Select a product to preview ")):T("",!0),s.source==="product"?(b(),k("a",{key:1,href:"",class:"element__image-hotspot--content-btn",target:(l=i.imageHotspot)!=null&&l.openthistab?"_self":"_blank"},[C("img",z({class:["element__image-hotspot--content-image",{"ecom-hidden":!((h=s==null?void 0:s.fields)!=null&&h.includes("image"))}],ref_for:!0},i.convertImageCard(s),{loading:"lazy"}),null,16)],8,Tt)):(b(),k("img",z({key:2,class:"element__image-hotspot--content-image",ref_for:!0},i.convertImageCard(s),{loading:"lazy"}),null,16)),s.source==="product"?(b(),V(U(s.tag?s.tag:"h3"),{key:3,class:$(["element__image-hotspot--content-title",{"ecom-hidden":s.source==="product"&&!((u=s==null?void 0:s.fields)!=null&&u.includes("title"))}]),innerHTML:i.hotspotProductTitle(s)},null,8,["class","innerHTML"])):s.source==="custom"?(b(),V(U(s.tag?s.tag:"h3"),{key:4,class:"element__image-hotspot--content-title ecom-html",contenteditable:!!(!t.isFullScreen&&i.isEditingHotspotField(c,"titleCard")),spellcheck:"false",onMousedown:w(r=>i.onHotspotInlineMouseDown(c,"titleCard",r),["stop"]),onDblclick:w(r=>i.editHotspotField(c,"titleCard",r),["stop","prevent"]),onInput:w(r=>i.onHotspotInlineInput(c,r),["stop"]),onBlur:i.handleHotspotInlineBlur,innerHTML:i.isEditingHotspotField(c,"titleCard")?a.editingValue:t.lang(s.titleCard,"titleCard"+c)},null,40,["contenteditable","onMousedown","onDblclick","onInput","onBlur","innerHTML"])):T("",!0),s.source==="product"?(b(),k("div",{key:5,class:$(["element__image-hotspot--content-prices",{"ecom-hidden":!((_=s==null?void 0:s.fields)!=null&&_.includes("price"))}]),innerHTML:i.hotspotProductPrice(s)},null,10,St)):T("",!0),C("div",{class:$(["element__image-hotspot--content-text ecom-html",{"ecom-hidden":s.source==="product"&&!((m=s==null?void 0:s.fields)!=null&&m.includes("description"))}]),"data-exporting":t.exporting,contenteditable:!!(s.source==="custom"&&!t.isFullScreen&&i.isEditingHotspotField(c,"textCard")),spellcheck:"false",onMousedown:w(r=>i.onHotspotInlineMouseDown(c,"textCard",r),["stop"]),onDblclick:w(r=>i.editHotspotField(c,"textCard",r),["stop","prevent"]),onInput:w(r=>i.onHotspotInlineInput(c,r),["stop"]),onBlur:e[1]||(e[1]=(...r)=>i.handleHotspotInlineBlur&&i.handleHotspotInlineBlur(...r)),innerHTML:s.source==="custom"?i.isEditingHotspotField(c,"textCard")?a.editingValue:t.lang(s.textCard,"textCard"+c):i.hotspotProductDescription(s)},null,42,Mt),C("div",Pt,[s.source==="product"&&(s.product||!t.exporting)?(b(),k("a",{key:0,class:$([{"ecom-hidden":!((y=s==null?void 0:s.fields)!=null&&y.includes("link"))},"element__image-hotspot--content-btn element__image-hotspot--content-btn-product"]),href:"#",target:(p=i.imageHotspot)!=null&&p.openthistab?"_self":"_blank",contenteditable:!!(!t.isFullScreen&&i.isEditingHotspotField(c,"button_label")),spellcheck:"false",onMousedown:w(r=>i.onHotspotInlineMouseDown(c,"button_label",r),["stop"]),onDblclick:w(r=>i.editHotspotField(c,"button_label",r),["stop","prevent"]),onInput:w(r=>i.onHotspotInlineInput(c,r),["stop"]),onBlur:e[2]||(e[2]=(...r)=>i.handleHotspotInlineBlur&&i.handleHotspotInlineBlur(...r)),innerHTML:i.isEditingHotspotField(c,"button_label")?a.editingValue:t.lang(s.button_label?s.button_label:"View Details","view_more_link"+c)},null,42,Bt)):T("",!0),s.source==="custom"&&(t.exporting?s.buttonCard&&s.buttonCard.length>0:!0)?(b(),k("a",z({key:1,href:s!=null&&s.linkButtonCard?s.linkButtonCard.href:"#",class:"element__image-hotspot--content-btn element__image-hotspot--content-btn-custom",ref_for:!0},s==null?void 0:s.linkButtonCard),[C("span",{class:"ecom-html",contenteditable:!!(!t.isFullScreen&&i.isEditingHotspotField(c,"buttonCard")),spellcheck:"false",onMousedown:w(r=>i.onHotspotInlineMouseDown(c,"buttonCard",r),["stop"]),onDblclick:w(r=>i.editHotspotField(c,"buttonCard",r),["stop","prevent"]),onInput:w(r=>i.onHotspotInlineInput(c,r),["stop"]),onBlur:e[3]||(e[3]=(...r)=>i.handleHotspotInlineBlur&&i.handleHotspotInlineBlur(...r)),innerHTML:i.isEditingHotspotField(c,"buttonCard")?a.editingValue:(s==null?void 0:s.buttonCard)||""},null,40,Ft)],16,At)):T("",!0)])])],10,Ht)):T("",!0)],46,xt)}),128))],4)],10,yt)):T("",!0)],10,bt)}const qt=st(K,[["render",zt]]);K.__docgenInfo={exportName:"default",displayName:"ImageHotSpots",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/ImageHotSpots.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{qt as default};
//# sourceMappingURL=ImageHotSpots.391aa03b.js.map
