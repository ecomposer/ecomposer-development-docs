import{_ as O,E as U,J as K}from"./preview.95a7df14.js";import{o as m,a as d,y as p,E as u,x as w,F as S,u as N,I as v,z as J,X as R,J as x,L as k}from"./vue.esm-bundler.b9dec9d9.js";import"./chunk-KSYMO6G6.f719e32d.js";import"./index.e850844b.js";import"./iframe.048ad53f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.f037b798.js";const W={name:"Testimonials",presets:!0,mixins:[U,K],vendors:["slider_js","slider_css"],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["layout","items","imagePos","style","containerHeight","slider_layout"]}},computed:{slider(){return this.data},slider_layout(){var e;return((e=this.data.settings)==null?void 0:e.slider_layout)||"horizontal"},css(){return`
${this.$helpers.autoplayToggleCss()}
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
                    .ecom-testimonials--container .ecom-swiper-pagination:not(.ecom-swiper-pagination-progressbar) {
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
                    .ecom-swiper-navigation-position .ecom-swiper-button {
                      position: var(--ecom-position);
                    }
                    @media (max-width: 1024px) {
                        .ecom-swiper-navigation-position .ecom-swiper-button {
                        position: var(--ecom-position__tablet);
                      }
                    }
                    @media (max-width: 767px) {
                        .ecom-swiper-navigation-position .ecom-swiper-button {
                        position: var(--ecom-position__mobile);
                      }
                    }
                `},optionSwiper(){return this.$helpers.optionSwiper(this.data.settings)},javascript(){return function(){var b,f,E,q,P,j,A,B,I;var e=this.$el&&this.$el.querySelector(".ecom-swiper-autoplay-toggle");if(e&&!e.getAttribute("data-ecom-bound")){e.setAttribute("data-ecom-bound","1");var s=this.$el.querySelector(".ecom-swiper-container");e.addEventListener("click",function(){var l=s&&s.swiper;!l||!l.autoplay||(l.autoplay.running?(l.autoplay.stop(),e.setAttribute("data-state","paused"),e.setAttribute("aria-label",e.getAttribute("data-label-play"))):(l.autoplay.start(),e.setAttribute("data-state","playing"),e.setAttribute("aria-label",e.getAttribute("data-label-pause"))))})}const t=this.$el;if(!t)return!1;const n=t.querySelector(".ecom-swiper-container"),o=window.EComposer&&typeof window.EComposer.normalizeSwiperSettings=="function"?window.EComposer.normalizeSwiperSettings(this.settings):this.settings,i=o.slider_loop,L=o.slider_center,$=(b=o.slider_center__tablet)!=null?b:o.slider_center,r=(E=(f=o.slider_center__mobile)!=null?f:o.slider_center__tablet)!=null?E:o.slider_center,_=o.slider_group,C=o.slider_items,M=(q=o.slider_group__tablet)!=null?q:o.slider_group,H=(P=o.slider_items__tablet)!=null?P:o.slider_items,z=(A=(j=o.slider_group__mobile)!=null?j:o.slider_group__tablet)!=null?A:o.slider_group,T=(I=(B=o.slider_items__mobile)!=null?B:o.slider_items__tablet)!=null?I:o.slider_items;if(!n)return;const g=this,y=function(){if(!(window.EComposer&&typeof window.EComposer.buildSwiperConfig=="function")){let a=0;const c=setInterval(function(){a++,window.EComposer&&typeof window.EComposer.buildSwiperConfig=="function"?(clearInterval(c),y()):a>=20&&clearInterval(c)},200);return}var l=window.EComposer.buildSwiperConfig(o);l.navigation||(l.navigation={}),l.pagination||(l.pagination={});const V=function(a,c={},h=""){return h=="loop"?(a.items&&(window.innerWidth>1024&&(a.items.length<_+C||a.slider_autoplay)||window.innerWidth<=1024&&window.innerWidth>768&&(a.items.length<M+H||a.slider_autoplay)||a.items.length<z+T||a.slider_autoplay)&&(c.loop=!1),c):(window.innerWidth>1024&&a.speed&&(c[`${h}`]=a[0]),window.innerWidth<=1024&&window.innerWidth>768&&a[1]?c[`${h}`]=a[1]:a[0]&&(c[`${h}`]=a[0]),window.innerWidth<768&&a[2]?c[`${h}`]=a[2]:a[1]?c[`${h}`]=a[1]:a[0]&&(c[`${h}`]=a[0]),c)},Z=t.querySelector(`.ecom-swiper-pagination[data-ecnav-id="${g.id}"]`),D=t.querySelector(".ecom-swiper-button-next"),F=t.querySelector(".ecom-swiper-button-prev");l.pagination.el=Z,l.navigation.nextEl=D,l.navigation.prevEl=F,l.pagination.renderBullet=(a,c)=>`<span class="${c}">
                            ${o.items&&o.items[a]&&o.items[a].slider_pagination_image?`<img src="${o.items[a].slider_pagination_image}" loading="lazy">`:""}</span>`,l.on={init:()=>{setTimeout(()=>{n.classList.remove("ecom-d-hide")})}},i&&(l.loop=!0,l=V(o,l,"loop")),l=V([L,$,r],l,"centeredSlides"),g.settings.hasOwnProperty("slider_layout")&&g.settings.slider_layout=="vertical"&&(l.direction="vertical"),new window.EComSwiper(n,Object.assign(l,{allowTouchMove:g.isLive})),window.addEventListener("resize",()=>{n.swiper.update()})};y()}},paginationImages(){var e,s;return(s=(e=this.testimonials.settings)==null?void 0:e.items)==null?void 0:s.map(t=>t.slider_pagination_image)},lazyload(){var e;return((e=this.data.settings)==null?void 0:e.disable_lazyload)!==!0},settings(){return[{group_title:this.$t("general"),params:[{name:"items",label:this.$t("testimonials_items"),type:"group",value:[],options:{add_text:this.$t("add_item"),is_clear_all:!1},params:[{type:"picker",label:this.$t("avatar"),name:"image",options:{type:"image",output:["value","name"],editAlt:!0}},{type:"toggle",name:"useRating",label:this.$t("use_rating"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"choose",name:"rating",label:this.$t("rating"),options:{chooseOne:!0,type:"rating",visible:{keep_data:!0,condition:e=>e.useRating}}},{type:"picker",name:"ratingIcon",label:this.$t("icon"),options:{type:"icon",output:"value",visible:{keep_data:!0,condition:e=>e.useRating}}},{type:"picker",label:this.$t("quote_icon"),name:"quote",options:{type:"icon",output:"value"}},{type:"text",label:this.$t("name"),name:"name"},{type:"text",label:this.$t("title"),name:"title"},{type:"textarea",label:this.$t("text"),name:"text",options:{toolbar:"short",height:180}},{type:"picker",label:this.$t("pagination_image"),name:"slider_pagination_image",options:{type:"image",output:"value",visible:{keep_data:!1,condition:(e,s,t=this.data.settings)=>(t.slider_navigation_layout==="classic_full"||t.slider_navigation_layout==="neo_full"||t.slider_navigation_layout==="pagination")&&t.slider_pagination_style_have_image==="images"}}}]},{type:"line"},{type:"popup",name:"name_tag",label:this.$t("html_tag_for_customer_name"),value:"h3",options:{default:!1,preview:"title",type:"dropdown",values:{h1:"H1",h2:"H2",h3:"H3",h4:"H4",h5:"H5",h6:"H6",div:"DIV",p:"P"}}},{type:"popup",name:"title_tag",label:this.$t("html_tag_for_title"),value:"h4",options:{default:!1,preview:"title",type:"dropdown",values:{h1:"H1",h2:"H2",h3:"H3",h4:"H4",h5:"H5",h6:"H6",div:"DIV",p:"P"}}},{type:"toggle",name:"disable_lazyload",label:this.$t("disable_lazyload"),options:{oneline:!0,values:{off:{label:this.$t("no"),value:!1},on:{label:this.$t("yes"),value:!0}}},css:{isCss:!1}},{label:this.$t("image_position"),name:"imagePos",type:"dropdown",options:{preview:"title",values:{"ecom-row-center":this.$t("aside"),"ecom-column-center":this.$t("top")},default:!1,half:!0}},{type:"dropdown",label:this.$t("view_layout"),name:"layout",value:"slider",options:{half:!0,default:!1,preview:"title",values:{grid:this.$t("grid"),slider:this.$t("slider")}}},{type:"popup",label:this.$t("style_layout"),name:"style",options:{preview:"title",type:"dropdown",default:!1,values:{0:this.$t("horizontal"),1:this.$t("style")+" 1",2:this.$t("style")+" 2",3:this.$t("style")+" 3",4:this.$t("style")+" 4",5:this.$t("style")+" 5",6:this.$t("style")+" 6"}}}]},{group_title:this.$t("grid_settings"),options:{visible:{keep_data:!1,condition:e=>e.layout==="grid"}},params:[{type:"number",label:this.$t("columns"),name:"slider_items",value:3,options:{responsive:!0,min:1,max:8,step:1,slider:!0},css:{selector:" .ecom__testimonials--grid",properties:{"grid-template-columns":"repeat(%value%,1fr)"}}},{type:"number",label:this.$t("space_between"),name:"slider_spacing",options:{responsive:!0,min:0,max:64,slider:!0,input:!0},css:{selector:" .ecom__testimonials--grid",properties:{gap:"%value%px"}}}]},{group_alias:"swiper",options:{group_title:this.$t("slider_settings"),options:{keep_data:!1,visible:e=>e.layout=="slider"}},modify:{params:[{position:0,fields:[{name:"slider_layout",label:this.$t("layout"),type:"popup",value:"horizontal",options:{type:"dropdown",preview:"title",default:!1,values:{horizontal:this.$t("horizontal"),vertical:this.$t("vertical")}}},{name:"containerHeight",label:this.$t("container_height"),type:"number",options:{responsive:!0,units:{px:{min:0,max:1e3},vh:{min:0,max:100}}},css:{selector:" .ecom__testimonials",properties:{height:""}}}]},{position:27,fields:[{type:"popup",label:this.$t("style"),name:"slider_pagination_style_have_image",options:{type:"dropdown",preview:"title",values:{classic:this.$t("classic"),images:this.$t("images"),progress:"Progress"},default:!1,visible:e=>e.slider_navigation_layout==="neo_full"||e.slider_navigation_layout==="classic_full"||e.slider_navigation_layout==="pagination"},css:!1}]}],remove:{name:["slider_pagination_style"]}}}]},styleView(){switch(this.data.settings.style){case"1":return{content:1,rating:2,infor:3};case"2":return{content:1,rating:3,infor:2};case"3":return{content:2,rating:1,infor:3};case"4":return{content:2,rating:3,infor:1};case"5":return{content:3,rating:1,infor:2};case"6":return{content:3,rating:2,infor:1};default:return{content:1,rating:2,infor:3}}},isNavigation(){var e;return((e=this.slider.settings)==null?void 0:e.slider_navigation_layout)&&this.data.settings.layout==="slider"},testimonials(){return this.data},sliderNav(){return this.slider.settings.navigation_position__tablet||(this.slider.settings.navigation_position__tablet=this.slider.settings.navigation_position),this.slider.settings.navigation_position__mobile||(this.slider.settings.navigation_position__mobile=this.slider.settings.navigation_position),{"--ecom-position":this.slider.settings.navigation_position!=="center"?"unset":"absolute","--ecom-position__tablet":this.slider.settings.navigation_position__tablet!=="center"?"unset":"absolute","--ecom-position__mobile":this.slider.settings.navigation_position__mobile!=="center"?"unset":"absolute"}},default(){return{settings:{items:[{image:{value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/test-2.png?v=1646819891",name:"test-2"},name:"Kingsley Chandler",title:"Environmental Economist",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",useRating:!0,rating:4,ratingIcon:`<svg version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve" fill="currentColor">
<path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
	c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"></path>
</svg>`,quote:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 10 8 C 6.699219 8 4 10.699219 4 14 L 4 24 L 14 24 L 14 14 L 6 14 C 6 11.78125 7.78125 10 10 10 Z M 24 8 C 20.699219 8 18 10.699219 18 14 L 18 24 L 28 24 L 28 14 L 20 14 C 20 11.78125 21.78125 10 24 10 Z M 6 16 L 12 16 L 12 22 L 6 22 Z M 20 16 L 26 16 L 26 22 L 20 22 Z"></path></svg>'},{image:{value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/Test-1.png?v=1646819866",name:"Test-1"},name:"Henry Smith",title:"Environmental Economist",text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",useRating:!0,rating:4,ratingIcon:`<svg version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve" fill="currentColor">
<path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
	c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"></path>
</svg>`,quote:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 10 8 C 6.699219 8 4 10.699219 4 14 L 4 24 L 14 24 L 14 14 L 6 14 C 6 11.78125 7.78125 10 10 10 Z M 24 8 C 20.699219 8 18 10.699219 18 14 L 18 24 L 28 24 L 28 14 L 20 14 C 20 11.78125 21.78125 10 24 10 Z M 6 16 L 12 16 L 12 22 L 6 22 Z M 20 16 L 26 16 L 26 22 L 20 22 Z"></path></svg>'},{image:{value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/test-3.png?v=1646819921",name:"test-3"},name:"John Doe",title:"Tech Leader",text:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",useRating:!0,rating:4,ratingIcon:`<svg version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve" fill="currentColor">
<path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
	c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"></path>
</svg>`,quote:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 10 8 C 6.699219 8 4 10.699219 4 14 L 4 24 L 14 24 L 14 14 L 6 14 C 6 11.78125 7.78125 10 10 10 Z M 24 8 C 20.699219 8 18 10.699219 18 14 L 18 24 L 28 24 L 28 14 L 20 14 C 20 11.78125 21.78125 10 24 10 Z M 6 16 L 12 16 L 12 22 L 6 22 Z M 20 16 L 26 16 L 26 22 L 20 22 Z"></path></svg>'}],layout:"slider",slider_items:3,imagePos:"ecom-column-center",slider_spacing:70,slider_navigation_layout:"navigation",slider_loop:!0,slider_autoplay:!1,slider_autoplay_speed:2e3,slider_pause:!0,slider_prev_icon:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>',slider_next_icon:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>',slider_effect:"slide",slider_speed:500,slider_items__tablet:1,slider_items__mobile:1,slider_spacing__mobile:0,navigation_position:"bottom_center",name_tag:"h3",title_tag:"h4"},style:{general:{textAlign:"center",tab:"normal"},ratingIcon:{tab:"normal",iconPrimaryColornormalmode:"#EABF0D",iconFontSize:"14px",spacing:{margin:{right:"2px",left:"2px",top:"5px",bottom:"15px"}}},box_active:{tab:"normal"},image:{tab:"normal",imageWidth:"60px"},name:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"16px","font-weight":"500"},spacing:{margin:{top:"10px"}}},title:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"13px"}},text:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"16px","line-height":"23px"},textColor:"#777",spacing:{margin:{bottom:"10px"}}},swiper_nav:{navtab:"normal",tab:"normal",navigatorBackgroundnormalmode:{classic:{"background-color":"#f0f0f0"}},navigatorSpacing:{margin:{},padding:{top:"9px",left:"9px",bottom:"9px",right:"9px"}},navigatorBorderRadiusnormalmode:{top:"20px",left:"20px",bottom:"20px",right:"20px"},navigatorFontSize:"22px"}}}}},watch:{optionSwiper:{deep:!0,handler:function(){this.testimonials.refresh=this.$helpers.randid()}},paginationImages:{deep:!0,handler(){this.testimonials.refresh=this.$helpers.randid()}},isCombined:function(){this.testimonials.refresh=this.$helpers.randid()}},methods:{quickToolBar(){return["layout","style"]},checkVisible(e){let s=this.data.settings;if(!!s)return s.items&&s.items.some(t=>e=="rating"?(t==null?void 0:t.useRating)&&(t==null?void 0:t.rating)&&(t==null?void 0:t.rating)!=="0"&&(t==null?void 0:t.ratingIcon):t[e])},isArrow(){var e,s,t;return((e=this.data.settings)==null?void 0:e.slider_navigation_layout)==="neo_full"||((s=this.data.settings)==null?void 0:s.slider_navigation_layout)==="classic_full"||((t=this.data.settings)==null?void 0:t.slider_navigation_layout)==="navigation"},isPagination(){var e,s,t;return((e=this.data.settings)==null?void 0:e.slider_navigation_layout)==="neo_full"||((s=this.data.settings)==null?void 0:s.slider_navigation_layout)==="classic_full"||((t=this.data.settings)==null?void 0:t.slider_navigation_layout)==="pagination"},isCombined(){var s,t;return((t=(s=this.data)==null?void 0:s.settings)==null?void 0:t.slider_navigation_layout)==="neo_full"?"combine":"classic"},style(){var t;let e=[];this.isArrow()&&e.push({title:this.$t("navigator"),type:"swiper:nav"}),this.isPagination()&&this.data.settings.slider_pagination_style_have_image!="progress"&&e.push({title:this.$t("pagination"),type:"swiper:pagination"});let s={};return this.data.settings.slider_pagination_style_have_image==="progress"&&this.isPagination()&&(s.params=[{position:50,fields:[{type:"line"},{type:"paragraph",content:this.$t("b_pagination")},{type:"number",name:"widthProgress",label:this.$t("width"),options:{units:{"%":{min:1,max:100}}},css:{selector:" .ecom-swiper-pagination.ecom-swiper-pagination-progressbar.ecom-swiper-pagination-horizontal",important:!0,properties:{width:""}}},{type:"number",name:"sizeProgress",label:this.$t("height"),options:{units:{px:{min:1,max:50}}},css:{selector:" .ecom-swiper-pagination-progressbar",properties:{"--ecom-swiper-pagination-progressbar-size":""}}},{type:"color",name:"progress",label:this.$t("progress"),options:{global:{type:"colors"},oneline:!0},css:{selector:" .ecom-swiper-pagination-progressbar-fill",properties:{"background-color":""}}},{type:"color",name:"track",label:this.$t("track"),options:{global:{type:"colors"},oneline:!0},css:{selector:" .ecom-swiper-pagination-progressbar",properties:{"background-color":""}}},{alias:"spacing",options:{name:"spacingPaginationProgress",css:{selector:" .ecom-swiper-pagination-position.ecom-swiper-pagination-progressbar"}}}]}]),this.isCombined==="combine"&&(s={params:[{alias:"spacing",options:{label:this.$t("spacing"),name:"spacingNavigation",css:{selector:" .ecom-swiper-navigation"}}},{type:"line"}],remove:{name:"justify-content"}}),[{group_name:"general",group_title:this.$t("general"),selector:" .testimonial-content",params:[{name:"textAlign",label:this.$t("alignment"),value:"center",type:"choose",options:{oneline:!0,type:"text-align",values:["left","center","right"]},css:{properties:{"text-align":"","justify-content":`
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
                                    `}}},{type:"tab",name:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")}]},css:!1},{name:"backgroundColor",label:this.$t("background"),type:"color",options:{oneline:!0,global:{type:"colors"},visible:{keep_data:!0,condition:n=>n.tab==="normal"}},css:{properties:{"background-color":""}}},{name:"box-shadow",label:this.$t("box_shadow"),type:"popup",options:{oneline:!0,type:"box-shadow",visible:{keep_data:!0,condition:n=>n.tab==="normal"}}},{type:"popup",label:this.$t("border"),name:"border",options:{type:"border",oneline:!0,visible:{keep_data:!0,condition:n=>n.tab==="normal"}},css:{}},{name:"borderRadius",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:{keep_data:!0,condition:n=>n.tab==="normal"}},css:{properties:{"border-radius":""}}},{name:"backgroundColorHoverMode",label:this.$t("background"),type:"color",options:{oneline:!0,global:{type:"colors"},visible:{keep_data:!0,condition:n=>n.tab==="hover"}},css:{selector:":hover",properties:{"background-color":""}}},{name:"box-shadow-hover",label:this.$t("box_shadow_hover"),type:"popup",options:{oneline:!0,type:"box-shadow",selector:":hover",visible:{keep_data:!0,condition:n=>n.tab==="hover"}},css:{selector:":hover"}},{type:"popup",label:this.$t("border"),name:"borderHoverMode",options:{type:"border",oneline:!0,visible:{keep_data:!0,condition:n=>n.tab==="hover"}},css:{selector:":hover"}},{name:"borderRadiusHoverMode",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:{keep_data:!0,condition:n=>n.tab==="hover"}},css:{selector:":hover",properties:{"border-radius":""}}},{type:"number",label:this.$t("transition_duration_span_class_lowercase_ms_span"),name:"transition",options:{min:0,max:1500,visible:{keep_data:!0,condition:n=>n.tab==="hover"}},css:{properties:{transition:"all %value%ms ease"}}},{type:"line"},{alias:"spacing",options:{label:this.$t("spacing")}}]},{group_alias:"box:active",options:{group_title:this.$t("slide"),selector:" .ecom-swiper-slide"},modify:{params:{position:50,fields:[{type:"line"},{alias:"spacing",options:{label:this.$t("spacing")}}]}}},this.checkVisible("rating")?{group_alias:"icon:active",options:{group_name:"ratingIcon",group_title:this.$t("rating_icon"),selector:" .ecom-icon-list span"},modify:{params:[{position:0,fields:[{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:"root .testimonial-rating.ecom-icon-list"}}}]},{position:25,fields:[{type:"line",css:{isCss:!1}},{alias:"spacing",options:{label:this.$t("spacing"),selector:"root .ecom-icon-list"}}]}]}}:null,this.checkVisible("quote")?{group_alias:"icon",options:{group_name:"quoteIcon",group_title:this.$t("quote_icon"),selector:" .testimonial-quote"},modify:{params:[{position:15,fields:{alias:"spacing",options:{label:this.$t("spacing")}}}]}}:null,this.checkVisible("image")?{group_alias:"image",options:{group_name:"image",group_title:this.$t("image"),selector:" .ecom-base-testimonial-image"},modify:{params:[{position:0,fields:[{name:"imageAlign",label:this.$t("vertical_align"),type:"choose",options:{type:"align-y-full",values:["flex-start","center","flex-end"]},css:{selector:"root  .testimonial-info-avatar",properties:{"align-items":"",display:"flex"}}}]},{position:50,fields:[{alias:"spacing",options:{label:this.$t("spacing"),selector:"root .ecom-image-default"}}]}]}}:null,this.checkVisible("name")?{group_alias:"text",options:{group_name:"name",group_title:this.$t("name"),selector:" .testimonial-content-name"},modify:{params:[{position:50,fields:[{type:"dimension",label:this.$t("spacing"),name:"spacing",options:{responsive:!0,units:"default"},css:{properties:{spacing:""}}}]}]}}:null,this.checkVisible("title")?{group_alias:"text",options:{group_name:"title",group_title:this.$t("title"),selector:" .testimonial-content-title"},modify:{params:[{position:50,fields:[{type:"dimension",label:this.$t("spacing"),name:"spacing",options:{responsive:!0,units:"default"},css:{properties:{spacing:""}}}]}]}}:null,this.checkVisible("text")?{group_alias:"text",options:{group_name:"text",group_title:this.$t("content"),selector:" .testimonial-content-prag"},modify:{params:[{position:5,fields:[{type:"background",name:"background",label:this.$t("background")},{name:"contentWidth",label:this.$t("width"),type:"number",options:{units:{px:{min:100,max:1200},"%":{min:50,max:100}}},css:{properties:{display:"inline-block",width:""}}},{type:"dimension",label:this.$t("border_radius"),name:"border-radius",options:{type:"radius",units:"default"}},{alias:"spacing",options:{label:this.$t("spacing")}}]}]}}:null,e.length?{group_alias:e,options:{group_title:this.$t("navigation"),selector:" .ecom-testimonials--container"},modify:s}:null,this.$helpers.hasAutoplayToggle((t=this.data)==null?void 0:t.settings)?{group_alias:"swiper:autoplay",options:{group_title:this.$t("pause_button"),selector:" .ecom-testimonials--container"}}:null].filter(n=>n)}}},X={class:"ecom__element ecom-element ecom-testimonials"},G={class:"ecom-testimonials--container ecom-swiper-a11y-host"},Q=["data-position"],Y={key:0,class:"testimonial-info-avatar"},ee={key:0,class:"ecom-element ecom-base-testimonial-image ecom-image-default"},te=["src","alt","loading"],ie=["innerHTML"],se=["innerHTML"],oe=["innerHTML"],ae={key:0,class:"testimonial-info-avatar ecom-image-align"},ne={key:0,class:"ecom-element ecom-base-testimonial-image ecom-image-default"},le=["src","alt","loading"],re=["data-navigator-type"],pe={class:"ecom-flex-center"},ce=["innerHTML"],me={class:"ecom-swiper-pagination"},de=["innerHTML"],ue={key:2,class:"ecom-swiper-navigation-position"},ge=["innerHTML"],he=["innerHTML"],_e=["data-ecnav-id"];function ve(e,s,t,n,o,i){var L,$;return m(),d("div",X,[p("div",G,[e.$helpers.hasAutoplayToggle(t.data.settings)?(m(),d("button",{key:0,type:"button",class:"ecom-swiper-autoplay-toggle","data-position":((L=t.data.settings)==null?void 0:L.a11y_autoplay_control_position)||"bottom-right","data-state":"playing","data-label-pause":"Pause automatic slide show","data-label-play":"Start automatic slide show","aria-label":"Pause automatic slide show"},s[0]||(s[0]=[p("svg",{class:"ecom-swiper-autoplay-toggle__pause",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},[p("path",{d:"M8 5h3v14H8zM13 5h3v14h-3z"})],-1),p("svg",{class:"ecom-swiper-autoplay-toggle__play",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},[p("path",{d:"M8 5v14l11-7z"})],-1)]),8,Q)):u("",!0),p("div",{class:w(["ecom__testimonials ecom-html",{"ecom-swiper-container ecom-d-hide":i.testimonials.settings&&i.testimonials.settings.layout!=="grid"}])},[p("div",{class:w(i.testimonials.settings&&i.testimonials.settings.layout=="grid"?"ecom__testimonials--grid":"ecom-swiper-wrapper ecom__testimonials-slider-"+i.slider_layout)},[t.data.settings&&t.data.settings.items?(m(!0),d(S,{key:0},N(t.data.settings.items,(r,_)=>{var C,M,H,z,T,g,y,b;return m(),d("div",{key:_,class:w([i.testimonials.settings.layout=="grid"?"ecom-testimonial-item":"ecom-swiper-slide",((C=t.data.settings)==null?void 0:C.style)==0?"ecom-flex":""])},[((M=t.data.settings)==null?void 0:M.style)==0?(m(),d("div",Y,[r.image?(m(),d("figure",ee,[p("img",{src:r.image.value,alt:r.image.name,loading:i.lazyload?"lazy":"auto"},null,8,te)])):u("",!0)])):u("",!0),p("div",{class:"testimonial-content",style:v(((H=t.data.settings)==null?void 0:H.style)==0?"flex: 1":"")},[r.quote?(m(),d("div",{key:0,class:"testimonial-quote",innerHTML:r.quote},null,8,ie)):u("",!0),p("div",{class:"testimonial-content-prag",innerHTML:e.lang(r.text,"text-"+_),style:v("order:"+i.styleView.content)},null,12,se),(r==null?void 0:r.useRating)&&(r==null?void 0:r.rating)?(m(),d("div",{key:1,class:"testimonial-rating ecom-icon-list",style:v("order:"+i.styleView.rating)},[(m(),d(S,null,N(5,f=>p("span",{key:f,class:w({"ecom-icon-active":f<=parseInt(r.rating)}),innerHTML:r.ratingIcon},null,10,oe)),64))],4)):u("",!0),p("div",{class:w(["testimonial-info",(T=(z=t.data)==null?void 0:z.settings)==null?void 0:T.imagePos]),style:v("order:"+i.styleView.infor)},[((g=t.data.settings)==null?void 0:g.style)!=0?(m(),d("div",ae,[r.image?(m(),d("figure",ne,[p("img",{src:r.image.value,alt:r.image.name,loading:i.lazyload?"lazy":"auto"},null,8,le)])):u("",!0)])):u("",!0),p("div",null,[(m(),J(R((y=t.data.settings)!=null&&y.name_tag?t.data.settings.name_tag:"h3"),{class:"testimonial-content-name",innerHTML:e.lang(r.name,"name-"+_)},null,8,["innerHTML"])),(m(),J(R((b=t.data.settings)!=null&&b.title_tag?t.data.settings.title_tag:"h4"),{class:"testimonial-content-title",innerHTML:e.lang(r.title,"title-"+_)},null,8,["innerHTML"]))])],6)],4)],2)}),128)):u("",!0)],2)],2),i.isNavigation&&i.isCombined()=="combine"?(m(),d("div",{key:1,class:"ecom-swiper-navigation","data-navigator-type":i.isCombined()=="combine"},[p("div",pe,[x(p("button",{class:"ecom-swiper-button ecom-swiper-button-prev",innerHTML:i.slider.settings.slider_prev_icon},null,8,ce),[[k,i.isArrow()]]),x(p("div",me,null,512),[[k,i.isPagination()]]),x(p("button",{class:"ecom-swiper-button ecom-swiper-button-next",innerHTML:i.slider.settings.slider_next_icon},null,8,de),[[k,i.isArrow()]])])],8,re)):u("",!0),i.isNavigation&&i.isCombined()!="combine"?x((m(),d("div",ue,[p("button",{style:v(i.sliderNav),class:"ecom-swiper-button ecom-swiper-button-prev",innerHTML:i.slider.settings.slider_prev_icon},null,12,ge),p("button",{style:v(i.sliderNav),class:"ecom-swiper-button ecom-swiper-button-next",innerHTML:i.slider.settings.slider_next_icon},null,12,he)],512)),[[k,i.isArrow()]]):u("",!0),i.isNavigation&&i.isCombined()!="combine"?x((m(),d("div",{key:3,class:"ecom-swiper-pagination-position ecom-swiper-pagination","data-ecnav-id":($=t.data)==null?void 0:$.id},null,8,_e)),[[k,i.isPagination()]]):u("",!0)])])}const Ce=O(W,[["render",ve]]);W.__docgenInfo={exportName:"default",displayName:"Testimonials",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Testimonials.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};export{Ce as default};
//# sourceMappingURL=Testimonials.db4858d2.js.map
