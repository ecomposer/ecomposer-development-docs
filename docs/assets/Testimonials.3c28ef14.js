import{_ as M,E as T,J as S}from"./preview.8d4b9688.js";import{o as a,a as l,x as s,u as m,F as k,t as L,y as r,P as c,B as u,C as d}from"./vue.esm-bundler.2eae420a.js";import"./chunk-2GDW2BFM.4967875d.js";import"./index.e850844b.js";import"./iframe.c56a2ddc.js";import"../sb-preview/runtime.js";const C={name:"Testimonials",presets:!0,mixins:[T,S],vendors:["slider_js","slider_css"],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["layout","items","imagePos","style","containerHeight","slider_layout"]}},computed:{slider(){return this.data},slider_layout(){var t;return((t=this.data.settings)==null?void 0:t.slider_layout)||"horizontal"},css(){return`
                    .ecom-flex-center, .ecom-swiper-navigation {
                        display: flex;
                        align-items: center;
                    }
                    .ecom-swiper-navigation-position{
                        display:flex;
                    }
                    .ecom-swiper-navigation-position button{
                        margin:0
                    }
                    .ecom-swiper-navigation{
                        justify-content: center
                    }
                    .ecom-testimonials--container {
                        position: relative;
                        display: flex;
                        flex-direction: column;
                    }
                    .ecom-swiper-navigation[data-navigator-type="combine"]{
                        justify-content: center
                    }
                    .ecom-testimonials--container .ecom-swiper-button-next:after,
                    .ecom-testimonials--container .ecom-swiper-button-prev:after {
                        content: none;
                    }
                    .ecom-testimonials--container .ecom-swiper-button-next,
                    .ecom-testimonials--container .ecom-swiper-button-prev {
                        border: 0;
                        background: transparent;
                        width: auto;
                        height: auto;
                        padding: 5px;
                        color: #444
                    }
                    .ecom-testimonials--container .ecom-swiper-navigation[data-navigator-type="combine"] .ecom-swiper-button-next,
                    .ecom-testimonials--container .ecom-swiper-navigation[data-navigator-type="combine"] .ecom-swiper-button-prev {
                        position: static;
                        margin: 0;
                    }
                    .ecom-testimonials--container .ecom-swiper-navigation[data-navigator-type="classic"] .ecom-swiper-pagination,
                    .ecom-testimonials--container .ecom-swiper-navigation:not([data-navigator-type]) .ecom-swiper-pagination {
                        width:100%
                    }
                    .ecom-testimonials--container .ecom-swiper-pagination {
                        position: relative;
                    }
                    .ecom-swiper-pagination-bullet:only-child {
                        opacity: none
                    }
                    .ecom-testimonials--container .ecom-swiper-pagination-bullet {
                        width: 15px;
                        height: 15px;
                        opacity: 1
                    }
                    .ecom-testimonials--container .ecom-swiper-pagination-bullet,
                    .ecom-testimonials--container .ecom-swiper-pagination-bullet-active{
                        background-clip: content-box;
                        padding: 1px;
                        box-sizing: content-box !important;
                        background-color: currentColor;
                    }
                    .ecom-testimonials--container .ecom-swiper-pagination-bullets{
                        width:auto;
                    }
                    .ecom-testimonials--container .ecom-swiper-pagination-bullet img{
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: cover
                    }
                    .ecom-testimonials--container .ecom-swiper-pagination-bullets, .ecom-swiper-pagination-custom, .ecom-swiper-pagination-fraction {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        bottom: 0;
                    }
                    .ecom-d-hide {
                        opacity: 0;
                    }
                    .ecom__testimonials {
                        width: 100%;
                    }
                    .ecom__testimonials .testimonial-content {
                        position: relative;
                        display:flex;
                        flex-direction:column
                    }
                    .ecom__testimonials .ecom__testimonials--grid {
                        display: grid;
                    }
                    .ecom-text-left {
                        text-align: left
                    }
                    .ecom-text-center {
                        text-align: center
                    }
                    .ecom-text-right {
                        text-align: right
                    }
                    .ecom__testimonials .ecom-base-testimonial-image figure {
                        display: block;
                    }
                    .testimonial-rating {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content:inherit;
                    }
                    .ecom-row-center{
                        display: inline-flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content:center
                    }
                    .ecom-column-center{
                        display: flex;
                        flex-direction: column;
                        justify-content:inherit;
                    }
                    .ecom-column-center > .testimonial-info-avatar{
                        justify-content:inherit;
                        display:flex;
                    }
                    .ecom-icon-list span svg{
                        width:24px;
                        height:auto;
                    }
                     .testimonial-content .ecom-base-testimonial-image{
                         overflow:hidden;
                         display:flex;
                     }
                     .testimonial-content .ecom-base-testimonial-image img{
                         width:100%;
                     }

                     .testimonial-quote svg{
                        width:24px;
                        height:auto
                     }
                     .ecom-swiper-pagination{
                         display:flex;
                         flex-wrap:wrap;
                     }
                     .ecom-testimonial-rating-position{
                         display:flex;
                         flex-direction:column
                     }
                     .testimonial-content-prag ul {
                        list-style-type: disc;
                        list-style-position: inside;
                    }
                    .testimonial-content-prag ol {
                        list-style-type: decimal;
                        list-style-position: inside;
                    }
                    .testimonial-content-prag ul ul,
                    .testimonial-content-prag ol ul {
                        list-style-type: circle;
                        list-style-position: inside;
                        margin-left: 15px;
                    }
                    .testimonial-content-prag ol ol,
                    .testimonial-content-prag ul ol {
                        list-style-type: lower-latin;
                        list-style-position: inside;
                        margin-left: 15px;
                    }
                    .ecom-swiper-button > svg{
                        width:36px;
                        height:36px;
                    }
                    .testimonial-rating >span{
                        display:flex
                    }
                    .ecom__testimonials-slider-vertical {
                        flex-direction: column
                    }
                    .ecom__testimonials-slider-vertical .ecom-swiper-slide {
                        height: 100%;
                    }
                    .ecom-swiper-button {
                      position: var(--ecom-position);
                    }
                    @media (max-width: 1024px) {
                      .ecom-swiper-button {
                        position: var(--ecom-position__tablet);
                      }
                    }
                    @media (max-width: 768px) {
                      .ecom-swiper-button {
                        position: var(--ecom-position__mobile);
                      }
                    }
                `},optionSwiper(){return this.$helpers.optionSwiper(this.data.settings)},javascript(){return function(){const t=this.$el;if(!t)return!1;const n=t.querySelector(".ecom-swiper-container");if(!!n){var e=n.dataset.optionSwiper;try{e=e?JSON.parse(e):{}}catch{e={}}e.navigation||(e.navigation={}),e.pagination||(e.pagination={}),e.pagination.el=t.querySelector(".ecom-swiper-pagination"),e.navigation.nextEl=t.querySelector(".ecom-swiper-button-next"),e.navigation.prevEl=t.querySelector(".ecom-swiper-button-prev"),e.pagination.renderBullet=(p,v)=>`<span class="${v}">
                            ${this.settings.items[p]&&this.settings.items[p].slider_pagination_image?`<img src="${this.settings.items[p].slider_pagination_image}" loading="lazy">`:""}</span>`,e.on={init:()=>{setTimeout(()=>{n.classList.remove("ecom-d-hide")})}},this.settings.hasOwnProperty("slider_layout")&&this.settings.slider_layout=="vertical"&&(e.direction="vertical"),new window.EComSwiper(n,Object.assign(e,{allowTouchMove:this.isLive})),window.addEventListener("resize",()=>{n.swiper.update()})}}},paginationImages(){var t,n;return(n=(t=this.testimonials.settings)==null?void 0:t.items)==null?void 0:n.map(e=>e.slider_pagination_image)},settings(){return[{group_title:"General",params:[{name:"items",label:"Testimonials Items",type:"group",value:[],options:{add_text:"Add item",is_clear_all:!1},params:[{type:"picker",label:"Avatar",name:"image",options:{type:"image",output:["value","name"],editAlt:!0}},{type:"toggle",name:"useRating",label:"Use rating",options:{values:{on:{label:"YES",value:!0},off:{label:"NO",value:!1}}}},{type:"choose",name:"rating",label:"Rating",options:{type:"rating",visible:{keep_data:!0,condition:t=>t.useRating}}},{type:"picker",name:"ratingIcon",label:"Icon",options:{type:"icon",output:"value",visible:{keep_data:!0,condition:t=>t.useRating}}},{type:"picker",label:"Quote icon",name:"quote",options:{type:"icon",output:"value"}},{type:"text",label:"Name",name:"name"},{type:"text",label:"Title",name:"title"},{type:"textarea",label:"Text",name:"text",options:{toolbar:"short",height:180}},{type:"picker",label:"Pagination image",name:"slider_pagination_image",options:{type:"image",output:"value",visible:{keep_data:!1,condition:(t,n,e=this.data.settings)=>(e.slider_navigation_layout==="classic_full"||e.slider_navigation_layout==="neo_full"||e.slider_navigation_layout==="pagination")&&e.slider_pagination_style==="images"}}}]},{label:"Image position",name:"imagePos",type:"dropdown",options:{values:{"ecom-row-center":"Aside","ecom-column-center":"Top"},default:!1,half:!0}},{type:"dropdown",label:"View Layout",name:"layout",value:"slider",options:{half:!0,default:!1,values:{grid:"Grid",slider:"Slider"}}},{type:"popup",label:"Style Layout",name:"style",options:{preview:"title",type:"dropdown",default:!1,values:{0:"Image horizontal",1:"Style 1",2:"Style 2",3:"Style 3",4:"Style 4",5:"Style 5",6:"Style 6"}}}]},{group_title:"Grid settings",options:{visible:{keep_data:!1,condition:t=>t.layout==="grid"}},params:[{type:"number",label:"Columns",name:"slider_items",value:3,options:{responsive:!0,min:1,max:8,step:1,slider:!0},css:{selector:" .ecom__testimonials--grid",properties:{"grid-template-columns":"repeat(%value%,1fr)"}}},{type:"number",label:"Space between",name:"slider_spacing",options:{responsive:!0,min:0,max:64,slider:!0,input:!0},css:{selector:" .ecom__testimonials--grid",properties:{gap:"%value%px"}}}]},{group_alias:"swiper",options:{options:{keep_data:!1,visible:t=>t.layout=="slider"}},modify:{params:{position:0,fields:[{name:"slider_layout",label:"Layout",type:"popup",value:"horizontal",options:{type:"dropdown",preview:"title",default:!1,values:{horizontal:"Horizontal",vertical:"Vertical"}}},{name:"containerHeight",label:"Container Height",type:"number",options:{responsive:!0,units:{px:{min:0,max:1e3},vh:{min:0,max:100}}},css:{selector:" .ecom__testimonials",properties:{height:""}}}]}}}]},styleView(){switch(this.data.settings.style){case"1":return{content:1,rating:2,infor:3};case"2":return{content:1,rating:3,infor:2};case"3":return{content:2,rating:1,infor:3};case"4":return{content:2,rating:3,infor:1};case"5":return{content:3,rating:1,infor:2};case"6":return{content:3,rating:2,infor:1};default:return{content:1,rating:2,infor:3}}},isNavigation(){var t;return((t=this.slider.settings)==null?void 0:t.slider_navigation_layout)&&this.data.settings.layout==="slider"},testimonials(){return this.data},sliderNav(){return{"--ecom-position":this.slider.settings.navigation_position!=="center"?"unset":"absolute","--ecom-position__tablet":this.slider.settings.navigation_position__tablet!=="center"?"unset":"absolute","--ecom-position__mobile":this.slider.settings.navigation_position__mobile!=="center"?"unset":"absolute"}},default(){return{settings:{items:[{image:{value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/test-2.png?v=1646819891",name:"test-2"},name:"Kingsley Chandler",title:"Environmental Economist",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",useRating:!0,rating:4,ratingIcon:`<svg version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve" fill="currentColor">
<path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
	c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"></path>
</svg>`,quote:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 10 8 C 6.699219 8 4 10.699219 4 14 L 4 24 L 14 24 L 14 14 L 6 14 C 6 11.78125 7.78125 10 10 10 Z M 24 8 C 20.699219 8 18 10.699219 18 14 L 18 24 L 28 24 L 28 14 L 20 14 C 20 11.78125 21.78125 10 24 10 Z M 6 16 L 12 16 L 12 22 L 6 22 Z M 20 16 L 26 16 L 26 22 L 20 22 Z"></path></svg>'},{image:{value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/Test-1.png?v=1646819866",name:"Test-1"},name:"Henry Smith",title:"Environmental Economist",text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",useRating:!0,rating:4,ratingIcon:`<svg version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve" fill="currentColor">
<path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
	c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"></path>
</svg>`,quote:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 10 8 C 6.699219 8 4 10.699219 4 14 L 4 24 L 14 24 L 14 14 L 6 14 C 6 11.78125 7.78125 10 10 10 Z M 24 8 C 20.699219 8 18 10.699219 18 14 L 18 24 L 28 24 L 28 14 L 20 14 C 20 11.78125 21.78125 10 24 10 Z M 6 16 L 12 16 L 12 22 L 6 22 Z M 20 16 L 26 16 L 26 22 L 20 22 Z"></path></svg>'},{image:{value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/test-3.png?v=1646819921",name:"test-3"},name:"John Doe",title:"Tech Leader",text:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",useRating:!0,rating:4,ratingIcon:`<svg version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve" fill="currentColor">
<path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
	c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"></path>
</svg>`,quote:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 10 8 C 6.699219 8 4 10.699219 4 14 L 4 24 L 14 24 L 14 14 L 6 14 C 6 11.78125 7.78125 10 10 10 Z M 24 8 C 20.699219 8 18 10.699219 18 14 L 18 24 L 28 24 L 28 14 L 20 14 C 20 11.78125 21.78125 10 24 10 Z M 6 16 L 12 16 L 12 22 L 6 22 Z M 20 16 L 26 16 L 26 22 L 20 22 Z"></path></svg>'}],layout:"slider",slider_items:3,imagePos:"ecom-column-center",slider_spacing:70,slider_navigation_layout:"navigation",slider_loop:!0,slider_autoplay:!1,slider_autoplay_speed:2e3,slider_pause:!0,slider_prev_icon:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>',slider_next_icon:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>',slider_effect:"slide",slider_speed:500,slider_items__tablet:1,slider_items__mobile:1,slider_spacing__mobile:0,navigation_position:"bottom_center"},style:{general:{textAlign:"center",tab:"normal"},ratingIcon:{tab:"normal",iconPrimaryColornormalmode:"#EABF0D",iconFontSize:"14px",spacing:{margin:{right:"2px",left:"2px",top:"5px",bottom:"15px"}}},box_active:{tab:"normal"},image:{tab:"normal",imageWidth:"60px"},name:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"16px","font-weight":"500"},spacing:{margin:{top:"10px"}}},title:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"13px"}},text:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"16px","line-height":"23px"},textColor:"#777",spacing:{margin:{bottom:"10px"}}},swiper_nav:{navtab:"normal",tab:"normal",navigatorBackgroundnormalmode:{classic:{"background-color":"#f0f0f0"}},navigatorSpacing:{margin:{},padding:{top:"9px",left:"9px",bottom:"9px",right:"9px"}},navigatorBorderRadiusnormalmode:{top:"20px",left:"20px",bottom:"20px",right:"20px"},navigatorFontSize:"22px"}}}}},watch:{optionSwiper:{deep:!0,handler:function(){this.testimonials.refresh=this.$helpers.randid()}},paginationImages:{deep:!0,handler(){this.testimonials.refresh=this.$helpers.randid()}},isCombined:function(){this.testimonials.refresh=this.$helpers.randid()}},methods:{checkVisible(t){let n=this.data.settings;if(!!n)return n.items&&n.items.some(e=>t=="rating"?(e==null?void 0:e.useRating)&&(e==null?void 0:e.rating)&&(e==null?void 0:e.rating)!=="0"&&(e==null?void 0:e.ratingIcon):e[t])},isArrow(){var t,n,e;return((t=this.data.settings)==null?void 0:t.slider_navigation_layout)==="neo_full"||((n=this.data.settings)==null?void 0:n.slider_navigation_layout)==="classic_full"||((e=this.data.settings)==null?void 0:e.slider_navigation_layout)==="navigation"},isPagination(){var t,n,e;return((t=this.data.settings)==null?void 0:t.slider_navigation_layout)==="neo_full"||((n=this.data.settings)==null?void 0:n.slider_navigation_layout)==="classic_full"||((e=this.data.settings)==null?void 0:e.slider_navigation_layout)==="pagination"},isCombined(){var n,e;return((e=(n=this.data)==null?void 0:n.settings)==null?void 0:e.slider_navigation_layout)==="neo_full"?"combine":"classic"},style(){let t=[];this.isArrow()&&t.push({title:"Navigator",type:"swiper:nav"}),this.isPagination()&&t.push({title:"Pagination",type:"swiper:pagination"});let n={};return this.isCombined==="combine"&&(n={params:[{alias:"spacing",options:{name:"spacingNavigation",css:{selector:" .ecom-swiper-navigation"}}},{type:"line"}],remove:{name:"justify-content"}}),[{group_name:"general",group_title:"General",selector:" .testimonial-content",params:[{name:"textAlign",label:"Alignment",value:"center",type:"choose",options:{oneline:!0,type:"text-align",values:["left","center","right"]},css:{properties:{"text-align":"","justify-content":`
                                        switch(value) {
                                            case 'left':
                                                return 'flex-start';
                                            case 'center':
                                                return 'center';
                                            case 'right':
                                                return 'flex-end';
                                            default:
                                                return 'center';
                                        }
                                    `}}},{type:"tab",name:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"}]},css:!1},{name:"backgroundColor",label:"Background",type:"color",options:{oneline:!0,global:{type:"colors"},visible:{keep_data:!0,condition:e=>e.tab==="normal"}},css:{properties:{"background-color":""}}},{name:"box-shadow",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow",visible:{keep_data:!0,condition:e=>e.tab==="normal"}}},{type:"popup",label:"Border",name:"border",options:{type:"border",oneline:!0,visible:{keep_data:!0,condition:e=>e.tab==="normal"}},css:{}},{name:"borderRadius",label:"Border Radius",type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:{keep_data:!0,condition:e=>e.tab==="normal"}},css:{properties:{"border-radius":""}}},{name:"backgroundColorHoverMode",label:"Background",type:"color",options:{oneline:!0,global:{type:"colors"},visible:{keep_data:!0,condition:e=>e.tab==="hover"}},css:{selector:":hover",properties:{"background-color":""}}},{name:"box-shadow-hover",label:"Box Shadow hover",type:"popup",options:{oneline:!0,type:"box-shadow",selector:":hover",visible:{keep_data:!0,condition:e=>e.tab==="hover"}},css:{selector:":hover"}},{type:"popup",label:"Border",name:"borderHoverMode",options:{type:"border",oneline:!0,visible:{keep_data:!0,condition:e=>e.tab==="hover"}},css:{selector:":hover"}},{name:"borderRadiusHoverMode",label:"Border Radius",type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:{keep_data:!0,condition:e=>e.tab==="hover"}},css:{selector:":hover",properties:{"border-radius":""}}},{type:"number",label:'Transition Duration <span class="lowercase">(ms)</span>',name:"transition",options:{min:0,max:1500,visible:{keep_data:!0,condition:e=>e.tab==="hover"}},css:{properties:{transition:"all %value%ms ease"}}},{type:"line"},{alias:"spacing"}]},{group_alias:"box:active",options:{group_title:"Slide",selector:" .ecom-swiper-slide"},modify:{params:{position:50,fields:[{type:"line"},{alias:"spacing"}]}}},this.checkVisible("rating")?{group_alias:"icon:active",options:{group_name:"ratingIcon",group_title:"Rating icon",selector:" .ecom-icon-list span"},modify:{params:[{position:25,fields:[{type:"line",css:{isCss:!1}},{alias:"spacing",options:{selector:"root .ecom-icon-list"}}]}]}}:null,this.checkVisible("quote")?{group_alias:"icon",options:{group_name:"quoteIcon",group_title:"Quote icon",selector:" .testimonial-quote"},modify:{params:[{position:15,fields:{alias:"spacing"}}]}}:null,this.checkVisible("image")?{group_alias:"image",options:{group_name:"image",group_title:"Image",selector:" .testimonial-content .ecom-base-testimonial-image"},modify:{params:[{position:0,fields:[{name:"imageAlign",label:"Vertical align",type:"choose",options:{type:"align-y-full",values:["flex-start","center","flex-end"]},css:{selector:"root  .testimonial-info-avatar",properties:{"align-items":"",display:"flex"}}}]},{position:50,fields:[{alias:"spacing",options:{selector:"root .ecom-image-default"}}]}]}}:null,this.checkVisible("name")?{group_alias:"text",options:{group_name:"name",group_title:"Name",selector:" .testimonial-content-name"},modify:{params:[{position:50,fields:[{type:"dimension",label:"Spacing",name:"spacing",options:{responsive:!0,units:"default"},css:{properties:{spacing:""}}}]}]}}:null,this.checkVisible("title")?{group_alias:"text",options:{group_name:"title",group_title:"Title",selector:" .testimonial-content-title"},modify:{params:[{position:50,fields:[{type:"dimension",label:"Spacing",name:"spacing",options:{responsive:!0,units:"default"},css:{properties:{spacing:""}}}]}]}}:null,this.checkVisible("text")?{group_alias:"text",options:{group_name:"text",group_title:"Content",selector:" .testimonial-content-prag"},modify:{params:[{position:5,fields:[{type:"background",name:"background",label:"Background"},{name:"contentWidth",label:"Width",type:"number",options:{units:{px:{min:100,max:1200},"%":{min:50,max:100}}},css:{properties:{display:"inline-block",width:""}}},{type:"dimension",label:"Border radius",name:"border-radius",options:{type:"radius",units:"default"}},{alias:"spacing"}]}]}}:null,t.length?{group_alias:t,options:{group_title:"Navigation",selector:" .ecom-testimonials--container"},modify:n}:null].filter(e=>e)}}},B={class:"ecom__element ecom-element ecom-testimonials"},H={class:"ecom-testimonials--container"},N=["data-option-swiper"],z={key:0,class:"testimonial-info-avatar"},j={key:0,class:"ecom-element ecom-base-testimonial-image ecom-image-default"},q=["src","alt"],I=["innerHTML"],V=["innerHTML"],E=["innerHTML"],R={key:0,class:"testimonial-info-avatar ecom-image-align"},A={key:0,class:"ecom-element ecom-base-testimonial-image ecom-image-default"},P=["src","alt"],J=["innerHTML"],Z=["innerHTML"],D=["data-navigator-type"],F={class:"ecom-flex-center"},W=["innerHTML"],O={class:"ecom-swiper-pagination"},U=["innerHTML"],G={key:1,class:"ecom-swiper-navigation-position"},Q=["innerHTML"],K=["innerHTML"],Y={key:2,class:"ecom-swiper-pagination-position ecom-swiper-pagination"};function X(t,n,e,p,v,i){return a(),l("div",B,[s("div",H,[s("div",{class:m(["ecom__testimonials ecom-html",{"ecom-swiper-container ecom-d-hide":i.testimonials.settings&&i.testimonials.settings.layout!=="grid"}]),"data-option-swiper":i.testimonials.settings.layout=="slider"?i.optionSwiper:null},[s("div",{class:m(i.testimonials.settings&&i.testimonials.settings.layout=="grid"?"ecom__testimonials--grid":"ecom-swiper-wrapper ecom__testimonials-slider-"+i.slider_layout)},[e.data.settings&&e.data.settings.items?(a(!0),l(k,{key:0},L(e.data.settings.items,(o,g)=>{var h,y,_,f,b,w;return a(),l("div",{key:g,class:m([i.testimonials.settings.layout=="grid"?"testimonial-item":"ecom-swiper-slide",((h=e.data.settings)==null?void 0:h.style)==0?"ecom-flex":""])},[((y=e.data.settings)==null?void 0:y.style)==0?(a(),l("div",z,[o.image?(a(),l("figure",j,[s("img",{src:o.image.value,alt:o.image.name,loading:"lazy"},null,8,q)])):r("",!0)])):r("",!0),s("div",{class:"testimonial-content",style:c(((_=e.data.settings)==null?void 0:_.style)==0?"flex: 1":"")},[o.quote?(a(),l("div",{key:0,class:"testimonial-quote",innerHTML:o.quote},null,8,I)):r("",!0),s("div",{class:"testimonial-content-prag",innerHTML:t.lang(o.text,"text-"+g),style:c("order:"+i.styleView.content)},null,12,V),(o==null?void 0:o.useRating)&&(o==null?void 0:o.rating)?(a(),l("div",{key:1,class:"testimonial-rating ecom-icon-list",style:c("order:"+i.styleView.rating)},[(a(),l(k,null,L(5,x=>s("span",{key:x,class:m({"ecom-icon-active":x<=parseInt(o.rating)}),innerHTML:o.ratingIcon},null,10,E)),64))],4)):r("",!0),s("div",{class:m(["testimonial-info",(b=(f=e.data)==null?void 0:f.settings)==null?void 0:b.imagePos]),style:c("order:"+i.styleView.infor)},[((w=e.data.settings)==null?void 0:w.style)!=0?(a(),l("div",R,[o.image?(a(),l("figure",A,[s("img",{src:o.image.value,alt:o.image.name,loading:"lazy"},null,8,P)])):r("",!0)])):r("",!0),s("div",null,[s("h3",{class:"testimonial-content-name",innerHTML:t.lang(o.name,"name-"+g)},null,8,J),s("h4",{class:"testimonial-content-title",innerHTML:t.lang(o.title,"title-"+g)},null,8,Z)])],6)],4)],2)}),128)):r("",!0)],2)],10,N),i.isNavigation&&i.isCombined()=="combine"?(a(),l("div",{key:0,class:"ecom-swiper-navigation","data-navigator-type":i.isCombined()=="combine"},[s("div",F,[u(s("button",{class:"ecom-swiper-button ecom-swiper-button-prev",innerHTML:i.slider.settings.slider_prev_icon},null,8,W),[[d,i.isArrow()]]),u(s("div",O,null,512),[[d,i.isPagination()]]),u(s("button",{class:"ecom-swiper-button ecom-swiper-button-next",innerHTML:i.slider.settings.slider_next_icon},null,8,U),[[d,i.isArrow()]])])],8,D)):r("",!0),i.isNavigation&&i.isCombined()!="combine"?u((a(),l("div",G,[s("button",{style:c(i.sliderNav),class:"ecom-swiper-button ecom-swiper-button-prev",innerHTML:i.slider.settings.slider_prev_icon},null,12,Q),s("button",{style:c(i.sliderNav),class:"ecom-swiper-button ecom-swiper-button-next",innerHTML:i.slider.settings.slider_next_icon},null,12,K)],512)),[[d,i.isArrow()]]):r("",!0),i.isNavigation&&i.isCombined()!="combine"?u((a(),l("div",Y,null,512)),[[d,i.isPagination()]]):r("",!0)])])}const se=M(C,[["render",X]]);C.__docgenInfo={exportName:"default",displayName:"Testimonials",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Testimonials.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};export{se as default};
//# sourceMappingURL=Testimonials.3c28ef14.js.map
