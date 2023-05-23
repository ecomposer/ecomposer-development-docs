import{E as T,J as H,L as M,_ as k,a as X,h as ae,P as so,C as ke,m as Ce,f as ao,b as ro,c as lo,d as co,e as po,g as mo,i as uo,j as go,k as _o,l as ho,n as fo,o as ne,p as se,s as ye}from"./preview.fd4b835f.js";import{_ as U}from"./iframe.b0e30ece.js";import{v as N,o as c,a as d,n as R,A as z,H as Q,x as p,U as j,S as W,u as S,P as E,y,z as I,F as D,t as Y,Q as Te,b as ie,B as Z,C as K,M as bo,N as yo,G as Le,q as V}from"./vue.esm-bundler.2eae420a.js";import"./chunk-2GDW2BFM.4967875d.js";import"./index.e850844b.js";import"../sb-preview/runtime.js";const $e={name:"Heading",presets:!0,docs:"https://help.ecomposer.io/docs/elements/basic-elements/heading/",mixins:[T,H,M],props:{data:{type:Object,default(){return{}}}},data(){return{wrapper:null,editing:!1,is:"heading",editingValue:"",metaLang:{},metaLiquid:""}},computed:{tooltip(){var a,l,u,r,g,m;let e=(a=this.data.settings)==null?void 0:a.icon_tooltip,t=(l=this.data.settings)==null?void 0:l.content_tooltip,o=(u=this.data.settings)==null?void 0:u.enable_arrow,n=(r=this.data.settings)==null?void 0:r.position_tooltip,s=(g=this.data.settings)==null?void 0:g.position_tooltip__tablet,i=(m=this.data.settings)==null?void 0:m.position_tooltip__mobile;return`<div class="el__heading--tooltip-wrapper">
                                        ${e.value}
                                        <div class="el__heading--tooltip-content ${o==!0?"tooltip__arrow":""} el__tooltip-desktop el__heading--tooltip-${n||"bottom"}">
                                            ${t}
                                        </div>
                                        <div class="el__heading--tooltip-content ${o==!0?"tooltip__arrow":""} el__tooltip-tablet el__heading--tooltip-${s||"bottom"}">
                                            ${t}
                                        </div>
                                        <div class="el__heading--tooltip-content ${o==!0?"tooltip__arrow":""} el__tooltip-mobile el__heading--tooltip-${i||"bottom"}">
                                            ${t}
                                        </div>
                                    </div>`},content(){var r,g,m,h,_,b,f,v,x;let e=(r=this.data.settings)==null?void 0:r.content,t=(g=this.data.settings)==null?void 0:g.enable_tooltip,o=(m=this.data.settings)==null?void 0:m.icon_tooltip,n=(h=this.data.settings)==null?void 0:h.content_tooltip,s=(_=this.data.settings)==null?void 0:_.position_tooltip,i=(b=this.data.settings)==null?void 0:b.position_tooltip__tablet,a=(f=this.data.settings)==null?void 0:f.position_tooltip__mobile,l=(v=this.data.settings)==null?void 0:v.enable_arrow,u=(x=this.data.settings)==null?void 0:x.position_icon;return t==!0&&o&&n&&(u=="before"?e=`<div class="el__heading--tooltip-wrapper">
                                        ${o.value}
                                        <div class="el__heading--tooltip-content ${l==!0?"tooltip__arrow":""} el__tooltip-desktop el__heading--tooltip-${s||"bottom"}">
                                            ${n}
                                        </div>
                                        <div class="el__heading--tooltip-content ${l==!0?"tooltip__arrow":""} el__tooltip-tablet el__heading--tooltip-${i||"bottom"}">
                                            ${n}
                                        </div>
                                        <div class="el__heading--tooltip-content ${l==!0?"tooltip__arrow":""} el__tooltip-mobile el__heading--tooltip-${a||"bottom"}">
                                            ${n}
                                        </div>
                                    </div>`+e:e+=`<div class="el__heading--tooltip-wrapper">
                                        ${o.value}
                                        <div class="el__heading--tooltip-content ${l==!0?"tooltip__arrow":""} el__tooltip-desktop el__heading--tooltip-${s||"bottom"}">
                                            ${n}
                                        </div>
                                        <div class="el__heading--tooltip-content ${l==!0?"tooltip__arrow":""} el__tooltip-tablet el__heading--tooltip-${i||"bottom"}">
                                            ${n}
                                        </div>
                                        <div class="el__heading--tooltip-content ${l==!0?"tooltip__arrow":""} el__tooltip-mobile el__heading--tooltip-${a||"bottom"}">
                                            ${n}
                                        </div>
                                    </div>`),e},settings(){return[{params:[{type:"textarea",label:"Heading Text",name:"content",options:{toolbar:"short",dynamic:!0,height:80}},{type:"link",label:"Insert Link",name:"link"},{type:"choose",label:'<span class="uppercase">HTML</span> Tag',name:"tag",options:{type:"heading"}},{type:"switch",name:"enable_tooltip",label:"Use Tooltip",value:!1,options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"textarea",name:"content_tooltip",label:"Tooltip content",options:{visible:e=>e.enable_tooltip===!0,toolbar:"short",dynamic:!0,height:80}},{type:"switch",name:"enable_arrow",label:"Use Arrow",value:!1,options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:e=>e.enable_tooltip===!0}},{type:"picker",label:"Tooltip Icon",name:"icon_tooltip",options:{type:"icon",multiple:!1,oneline:!0,visible:e=>e.enable_tooltip===!0}},{type:"popup",name:"position_icon",label:"Icon Position",options:{visible:e=>e.enable_tooltip===!0,type:"dropdown",default:!1,preview:"title",values:{before:"Before the heading",after:"After the heading"}}},{type:"popup",name:"position_tooltip",label:"Tooltip Position",options:{visible:e=>e.enable_tooltip===!0,type:"dropdown",default:!1,preview:"title",responsive:!0,values:{top:"Top",bottom:"Bottom",left:"Left",right:"Right"}}}]}]},style(){var o;let e=[{group_alias:"text",options:{selector:" .element__heading .ecom__heading"},modify:{remove:{index:2,length:1},params:[{position:3,fields:{name:"textColor",label:"Text Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{color:""},selector:"root  .element__heading .ecom__heading,root  .element__heading .ecom__heading a"}}},{position:5,fields:{alias:"border"}},{position:10,fields:{alias:"spacing"}}]}}],t=[{group_alias:"text",options:{group_title:"Tooltip",group_name:"tooltip",selector:" .el__heading--tooltip-content"},modify:{remove:{index:[0,3],length:1},params:[{position:3,fields:{name:"background_color",label:"Background Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{"background-color":""},selector:"root  .el__heading--tooltip-content"}}},{position:8,fields:{type:"dimension",name:"borderRadius",label:"Border radius",options:{type:"radius",units:"default"},css:{properties:{"border-radius":""}}}},{position:10,fields:{alias:"spacing"}}]}},{group_alias:"icon",options:{group_title:"Tooltip Icon",group_name:"icon_tooltip",selector:" .el__heading--tooltip-wrapper"},modify:{}}];return(o=this.data.settings)!=null&&o.enable_tooltip&&(e=e.concat(t)),e},css(){return`
                    
                    .el__heading--tooltip-wrapper{
                        position: relative;
                        display: inline-block;
                    }
                    .el__heading--tooltip-wrapper svg{
                        width: 18px;
                        cursor: pointer;
                    }
                    .el__heading--tooltip-content{
                        max-width: 200px;
                        position: absolute;
                        display: block;
                        width: max-content;
                        opacity: 0;
                        padding: 5px;
                        visibility: hidden;
                        font-size: 14px;
                        background-color: #545454;
                        color: #ffffff;
                        border-radius: 5px;
                        transition: .5s ease all;
                        z-index: 999;
                    }
                    .el__heading--tooltip-content.el__tooltip-tablet, .el__heading--tooltip-content.el__tooltip-mobile {
                        display: none;
                    }
                    .el__heading--tooltip-bottom{
                        left: 50%;
                        transform: translate(-50%, 10px);
                    }
                    
                    .el__heading--tooltip-left{
                        transform: translate(-20px, -50%);
                        right: 100%;
                        top: 50%;
                    }
                    .el__heading--tooltip-top{
                        left: 50%;
                        bottom: 100%;
                        transform: translate(-50%, -10px);
                    }
                    .el__heading--tooltip-right {
                        top: 50%;
                        left: 100%;
                        transform: translate(20px, -50%);
                    }
                    .tooltip__arrow:before{
                        position: absolute;
                        content: '';
                        width: 8px;
                        height: 8px;
                        background: inherit;
                        z-index: -1;
                    }
                    .tooltip__arrow.el__heading--tooltip-bottom:before{
                        top: 0;
                        transform: translate(-50%, -50%) rotate(45deg);
                        left: 50%;
                    }
                    .tooltip__arrow.el__heading--tooltip-top:before{
                        transform: translate(-50%,50%) rotate(45deg);
                        bottom: 0%;
                        left: 50%;
                    }
                    .tooltip__arrow.el__heading--tooltip-right:before{
                        transform: translate(-50%,50%) rotate(45deg);
                        bottom: 50%;
                        left: 0%;
                    }
                    .tooltip__arrow.el__heading--tooltip-left:before{
                        transform: translate(50%,50%) rotate(45deg);
                        bottom: 50%;
                        right: 0%;
                    }
                    .el__heading--tooltip-wrapper svg:hover~.el__heading--tooltip-bottom, .el__heading--tooltip-wrapper svg:hover~.el__heading--tooltip-top {
                        opacity: 1;
                        visibility: visible;
                        transform: translate(-50%, 0);
                    }
                    .el__heading--tooltip-wrapper svg:hover~.el__heading--tooltip-left {
                        opacity: 1;
                        visibility: visible;
                        transform: translate(-15px, -50%);
                    }
                    .el__heading--tooltip-wrapper svg:hover~.el__heading--tooltip-right {
                        opacity: 1;
                        visibility: visible;
                        transform: translate(15px, -50%);
                    }
                    @media screen and (max-width: 1024px) {
                        .el__heading--tooltip-content.el__tooltip-desktop {
                            display: none;
                        }
                        .el__heading--tooltip-content.el__tooltip-tablet {
                            display: block;
                        }
                    }
                    @media screen and (max-width: 768px) {
                        .el__heading--tooltip-content.el__tooltip-tablet {
                            display: none;
                        }
                        .el__heading--tooltip-content.el__tooltip-mobile {
                            display: block;
                        }
                    }
                `},heading(){return this.data},checkTooltip(){return this.data.settings.enable_tooltip},activeMe(){var e,t,o;return((o=(t=(e=this.editingElement)==null?void 0:e.data)==null?void 0:t.id)!=null?o:0)===this.heading.id},getMetaLiquid(){return this.convertText,this.metaLiquid},convertText(){var o;const e=this;let t=(o=this.data.settings)==null?void 0:o.content;if(t){const n=document.createElement("div");n.innerHTML=t;const s=n.querySelectorAll("span[data-meta]");return s&&s.forEach(i=>{let a=i.dataset.metaKey.replaceAll(" ","_"),l=i.dataset.meta,u=document.createTextNode(`{{${a}}}`);l.indexOf("|")==-1?e.metaLang[a]=l:(e.metaLiquid+=`{%- assign ${a} = ${l}-%}`,e.metaLang[a]=a),i.replaceWith(u)}),n.innerHTML}},default(){return{settings:{enable_tooltip:!1,content:"Enter your heading",tag:"h3",icon_width:"30px",content_tooltip:"Tooltip",icon_tooltip:{id:"qSmBN5zG",name:"circle-question",cate:"Duotone",url:"https://local.ecomposer.app/storage/icons/font-awesome/duotone/circle-question.svg",value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-primary" d="M256 336c-18 0-32 14-32 32c0 18 13.1 32 32 32c17.1 0 32-13.1 32-32C288 350 273.1 336 256 336zM289.1 128h-51.1C198.1 128 168 158.1 168 198c0 12.1 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 158.1 328.1 128 289.1 128z"></path><path class="fa-secondary" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"></path></svg>',thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-primary" d="M256 336c-18 0-32 14-32 32c0 18 13.1 32 32 32c17.1 0 32-13.1 32-32C288 350 273.1 336 256 336zM289.1 128h-51.1C198.1 128 168 158.1 168 198c0 12.1 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 158.1 328.1 128 289.1 128z"></path><path class="fa-secondary" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"></path></svg>'},position_icon:"after",position_tooltip:"bottom",position_tooltip__tablet:"bottom",position_tooltip__mobile:"bottom"},style:{text:{textTextAlign:"left",textColor:"#000000",textTypography:{"font-weight":"500","font-size":"30px"}},tooltip:{textColor:"#ffffff",background_color:"#545454",textTypography:{"font-size":"14px"},borderRadius:{right:"5px",top:"5px",left:"5px",bottom:"5px"}},heading:{textTypography:{"font-size":"24px"}},icon_tooltip:{iconFontSize:"18px"}}}}},watch:{activeMe(e){!e&&this.editing===!0&&(this.editing=!1,this.heading.settings.content=this.$refs.content.innerHTML)},checkTooltip(e){this.handleZindex(this.wrapper,e)}},created(){setTimeout(()=>{this.wrapper=this.$refs.wrapper,this.handleZindex(this.wrapper,this.data.settings.enable_tooltip)},1e3)},methods:{handleZindex(e,t){if(!e)return;const o=e.closest(".ecom-block");t&&o?o.style.zIndex=2:o.style.zIndex=1},edit(){this.convertText,this.editing===!1&&(this.editing=!0,this.editingValue=this.data.settings.content)},update(e){this.heading.settings.content=e.target.innerHTML}}},vo={ref:"wrapper",class:"ecom__element element__heading ecom-element ecom-html","data-stopdrag":!0},xo=["contenteditable","innerHTML"];function wo(e,t,o,n,s,i){var l,u,r,g,m,h,_,b;const a=N("Liquid");return c(),d("div",vo,[R(a,{data:i.getMetaLiquid},null,8,["data"]),((l=o.data.settings)==null?void 0:l.link)&&((u=o.data.settings)==null?void 0:u.link.href)?(c(),z(W((m=(g=(r=o.data)==null?void 0:r.settings)==null?void 0:g.tag)!=null?m:"h2"),{key:0,class:"ecom__heading"},{default:Q(()=>{var f;return[p("a",j((f=o.data.settings)==null?void 0:f.link,{ref:"content",contenteditable:e.isFullScreen?null:!0,spellcheck:"false",onClick:t[0]||(t[0]=(...v)=>i.edit&&i.edit(...v)),onKeyup:t[1]||(t[1]=(...v)=>i.update&&i.update(...v)),onBlur:t[2]||(t[2]=v=>s.editing=!1),innerHTML:s.editing?s.editingValue:e.exporting?o.data.settings.enable_tooltip?o.data.settings.position_icon=="before"?i.tooltip+e.lang(this.convertText,"heading-text",s.metaLang):e.lang(this.convertText,"heading-text",s.metaLang)+i.tooltip:e.lang(this.convertText,"heading-text",s.metaLang):i.content}),null,16,xo)]}),_:1})):(c(),z(W((b=(_=(h=o.data)==null?void 0:h.settings)==null?void 0:_.tag)!=null?b:"h2"),{key:1,ref:"content",class:"ecom__heading",contenteditable:e.isFullScreen?null:!0,spellcheck:"false",onClick:i.edit,onKeyup:i.update,onBlur:t[3]||(t[3]=f=>s.editing=!1),innerHTML:s.editing?s.editingValue:e.exporting?o.data.settings.enable_tooltip?o.data.settings.position_icon=="before"?i.tooltip+e.lang(this.convertText,"heading-text",s.metaLang):e.lang(this.convertText,"heading-text",s.metaLang)+i.tooltip:e.lang(this.convertText,"heading-text",s.metaLang):i.content},null,40,["contenteditable","onClick","onKeyup","innerHTML"]))],512)}const ve=k($e,[["render",wo]]);$e.__docgenInfo={exportName:"default",displayName:"Heading",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Heading.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Se={name:"TextEditor",presets:!0,docs:"https://help.ecomposer.io/docs/elements/basic-elements/text/",mixins:[T,M,H],props:{data:{type:Object,default(){return{}}}},data(){return{dropCapView:"default",editing:!1,timmer:null,editingValue:"",metaLang:{},metaLiquid:""}},computed:{settings(){return[{group_title:"General",params:[{type:"textarea",label:"Content",name:"content",options:{toolbar:"full",generator:!0,dynamic:!0,height:250,warnings:{content:'Notice: "Shopify Multiple Languages" will not support too long content. Please use the element "Page content" instead.'}}},{type:"toggle",label:"Drop cap",name:"dropcap",options:{oneline:!0,values:{on:{label:"YES",value:!0},off:{label:"NO",value:!1}}}},{type:"popup",label:"Content type",name:"type",value:"full",options:{type:"dropdown",values:{short:"Short",full:"Full"},default:!1}},{type:"number",label:"Max height",name:"max-height",placeholder:"200",options:{units:{px:{min:0,max:1e3},vh:{min:0,max:100},vw:{min:0,max:100}},visible:function(e){return e.type==="short"}}},{type:"toggle",label:"Show view more",name:"view_more",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:function(e){return e.type==="short"}}},{type:"picker",label:"View more icon",name:"view_more_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:function(e){return e.view_more&&e.type=="short"}}},{type:"picker",label:"View less icon",name:"view_less_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:function(e){return e.view_more&&e.type=="short"}}},{type:"choose",label:"Icon position",name:"icon_position",options:{type:"align-x",values:[-1,1],visible:function(e){return e.view_more&&e.type=="short"}},css:{selector:" .ecom__element--button-icon",properties:{order:""}}},{type:"number",name:"spacing",label:"Spacing",options:{responsive:!0,units:{px:{min:1,max:50,step:1}},visible:function(e){return e.view_more&&e.type=="short"},reset:!1},css:{selector:"root .ecom-text--more-actions button ,root .ecom-text--less-actions button",properties:{gap:""}}},{label:"View more text button",name:"view_more_text",type:"text",options:{visible:function(e){return e.type==="short"&&e.view_more}}},{label:"View less text button",name:"view_less_text",type:"text",options:{visible:function(e){return e.type==="short"&&e.view_more}}}]}]},css(){return`
                .ecom__text--dropcap:first-letter {
                    font-size: 40px;
                    color: #8A2BE2;
                    display:inline-flex;
                    border:1px solid transparent;
                    float:left;
                    line-height:1;
                }
                body[ecom-loaded] .ecom-sections .element__text a {
                    cursor: auto;
                }
                .text-content.ecom-html {
                    overflow: hidden;
                    position: relative;
                }

                .ecom-text--is-mark::after {
                    position: absolute;
                    content: '';
                    left: 0;
                    right: 0;
                    bottom: 0;
                    height: 150px;
                    background: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255));
                    pointer-events: none;
                }

                .ecom-text_view-more-btn,
                .ecom-text_view-less-btn {
                    display: flex;
                    background: none;
                    outline: none;
                    border: none;
                    align-items: center;
                }

                .ecom__element--button-icon {
                    display: flex;
                    align-items: center;
                }
                
                .ecom-text_view-more-btn svg, .ecom-text_view-less-btn svg {
                    width: 16px;
                    color: #fff;
                }
            `},contentType(){var e;return(e=this.data.settings)==null?void 0:e.type},maxHeight(){return this.data.settings.type==="short"?this.data.settings["max-height"]:null},view_more(){return this.data&&this.data.settings&&"view_more"in this.data.settings?this.data.settings.view_more:!1},text(){return this.data},getMetaLiquid(){return this.convertText,this.metaLiquid},convertText(){var o;const e=this;let t=(o=this.data.settings)==null?void 0:o.content;if(t){const n=document.createElement("div");n.innerHTML=t;const s=n.querySelectorAll("span[data-meta]");return s&&s.forEach((i,a)=>{let l=i.dataset.metaKey.replaceAll(" ","_"),u=i.dataset.meta,r=document.createTextNode(`{{${l}}}`);u.indexOf("|")==-1?e.metaLang[l]=u:(e.metaLiquid+=`{%- assign ${l} = ${u}-%}`,e.metaLang[l]=l),i.replaceWith(r)}),n.innerHTML}},activeMe(){var e,t,o;return((o=(t=(e=this.editingElement)==null?void 0:e.data)==null?void 0:t.id)!=null?o:0)===this.text.id},javascript(){return function(){if(!this.$el)return;const e=this.$el,t=e.querySelector(".ecom-text_view-more-btn"),o=e.querySelector(".ecom-text_view-less-btn"),n=e.querySelector(".text-content.ecom-html");!n||(t&&t.addEventListener("click",()=>{n.classList.remove("ecom-text--is-mark"),n.style.maxHeight="",t.style.display="none",o.style.display=""}),o&&o.addEventListener("click",()=>{n.classList.add("ecom-text--is-mark"),n.style.maxHeight="var(--ecom-text-height)",o.style.display="none",t.style.display=""}))}},default(){return{settings:{type:"full",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","max-height":"200px",view_more:!0,view_less_text:"view less",spacing:"6px",view_more_text:"view more"},style:{text:{textTextAlign:"left"},text_dropcap:{dropcapTypography:{"font-size":"40px"},dropcapColor:"#f50c0c",dropcapColorStackedView:"#5eff00",dropcapBackgroundStackedView:"#4800ff",dropcapColorFramedView:"#1aff00",dropcapBackgroundFramedView:"#1100ff",dropcapView:"framed"},collection_view_more:{tab:"normal","align-items":"flex-start",buttonTypography:{"text-decoration":"underline","font-size":"none"},spacing:{padding:{top:"5px",bottom:"5px"}}},collection_view_less:{tab:"normal",buttonTypography:{"text-decoration":"underline"},spacing:{padding:{top:"5px",bottom:"5px"}}},icon:{tab:"normal",iconFontSize:"16px",iconPrimaryColornormalmode:"#000000"}}}}},watch:{activeMe(e){!e&&this.editing&&(this.editing=!1,this.text.settings.content=this.$refs.content.innerHTML)},"data.style":{handler(){var e,t,o,n;this.dropCapView=(n=(o=(t=(e=this.data)==null?void 0:e.style)==null?void 0:t.text_dropcap)==null?void 0:o.dropcapView)!=null?n:"default"},deep:!0}},methods:{style(){var t,o,n;let e=[{group_alias:"text",options:{selector:" .text-content,  .text-content a,  .text-content p,  .text-content span"}}];if((t=this.data.settings)!=null&&t.dropcap&&e.push({group_alias:"text:dropcap",options:{selector:" .ecom__text--dropcap:first-letter"}}),this.data.settings.view_more){e.push({group_alias:"button",options:{group_title:"View more",group_name:"collection_view_more",selector:" .ecom-text_view-more-btn"},modify:{position:0,params:{alias:"align-items",options:{label:"Alignment",css:{properties:{"justify-content":""}}}}}}),e.push({group_alias:"button",options:{group_title:"View less",group_name:"collection_view_less",selector:" .ecom-text_view-less-btn"},modify:{position:0,params:{alias:"align-items",options:{label:"Alignment",css:{properties:{"justify-content":""}}}}}});const s=[{name:"iconPrimaryColor",label:"Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{color:""}}},{name:"iconBackground",label:"Background",type:"background",options:{oneline:!0,responsive:!0},css:{properties:{background:""}}},{type:"popup",label:"Border",name:"iconBorder",options:{oneline:!0,type:"border"},css:{properties:{border:""}}},{name:"iconBoxShadow",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow"},css:{properties:{"box-shadow":""}}},{name:"iconBorderRadius",label:"Border Radius",type:"dimension",options:{responsive:!0,type:"radius",units:{"%":{min:0,max:100},px:{min:0,max:1e3}}},css:{properties:{overflow:"hidden","border-radius":""}}}];(((o=this.data.settings)==null?void 0:o.view_more_icon)||((n=this.data.settings)==null?void 0:n.view_less_icon))&&e.push({group_title:"Icon",group_name:"icon",selector:" .ecom-text_view-more-btn, .ecom-text_view-less-btn",params:[{name:"iconFontSize",label:"Size",type:"number",options:{responsive:!0,units:{px:{min:0,max:300}}},css:{selector:" svg",properties:{height:"",width:""}}},{name:"iconTransform",label:"Rotate",type:"number",options:{responsive:!0,min:0,max:360},css:{selector:" svg",properties:{transform:"rotate(%value%deg)"}}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"}]},css:{isCss:!1}},...X(s,"normal",{selector:"  svg"}),...X(s,"hover",{selector:":hover  svg"})]})}return e},edit(){this.convertText,this.editing===!1&&(this.editing=!0,this.editingValue=this.data.settings.content)},showMore(){var n,s,i;let e=(n=this.$refs)==null?void 0:n.showMore,t=(s=this.$refs)==null?void 0:s.showLess,o=(i=this.$refs)==null?void 0:i.content;o&&e&&(o.classList.remove("ecom-text--is-mark"),o.style.maxHeight="",e.style.display="none",t.style.display="")},showLess(){var n,s,i;let e=(n=this.$refs)==null?void 0:n.showMore,t=(s=this.$refs)==null?void 0:s.showLess,o=(i=this.$refs)==null?void 0:i.content;o&&t&&(o.classList.add("ecom-text--is-mark"),o.style.maxHeight="var(--ecom-text-height)",t.style.display="none",e.style.display="")},update(e){this.text.settings.content=e.target.innerHTML}}},ko={ref:"wrapper",class:"ecom__element ecom-element element__text","data-stopdrag":""},Co=["contenteditable","innerHTML"],To={key:0,class:"ecom-text--more-actions"},Lo=["innerHTML"],$o=["textContent"],So={key:1,class:"ecom-text--less-actions"},Mo=["innerHTML"],Ho=["textContent"];function Bo(e,t,o,n,s,i){var l,u,r,g;const a=N("Liquid");return c(),d("div",ko,[R(a,{data:i.getMetaLiquid},null,8,["data"]),p("div",{ref:"content",class:S(["text-content ecom-html",[`has-drop-cap-view-${s.dropCapView}`,(l=o.data.settings)!=null&&l.dropcap?"ecom__text--dropcap":"",i.contentType=="short"?"ecom-text--is-mark":""]]),style:E([i.maxHeight?`max-height: var(--ecom-text-height); --ecom-text-height: ${i.maxHeight}`:""]),contenteditable:e.isFullScreen?null:!0,spellcheck:"false",onClick:t[0]||(t[0]=(...m)=>i.edit&&i.edit(...m)),onKeyup:t[1]||(t[1]=(...m)=>i.update&&i.update(...m)),onBlur:t[2]||(t[2]=m=>s.editing=!1),innerHTML:s.editing?s.editingValue:e.exporting?e.lang(this.convertText,"text-content",s.metaLang):(u=o.data.settings)==null?void 0:u.content},null,46,Co),i.contentType==="short"&&i.view_more?(c(),d("div",To,[p("button",{type:"button",class:"ecom-text_view-more-btn",ref:"showMore",onClick:t[3]||(t[3]=(...m)=>i.showMore&&i.showMore(...m))},[(r=o.data.settings)!=null&&r.view_more_icon?(c(),d("span",{key:0,class:"ecom__element--button-icon",innerHTML:o.data.settings.view_more_icon},null,8,Lo)):y("",!0),p("span",{textContent:I(e.lang(o.data.settings.view_more_text,"view_more_text"))},null,8,$o)],512)])):y("",!0),i.contentType==="short"&&i.view_more?(c(),d("div",So,[p("button",{type:"button",ref:"showLess",class:"ecom-text_view-less-btn",style:{display:"none"},onClick:t[4]||(t[4]=(...m)=>i.showLess&&i.showLess(...m))},[(g=o.data.settings)!=null&&g.view_less_icon?(c(),d("span",{key:0,class:"ecom__element--button-icon",innerHTML:o.data.settings.view_less_icon},null,8,Mo)):y("",!0),p("span",{textContent:I(e.lang(o.data.settings.view_less_text,"view_less_text"))},null,8,Ho)],512)])):y("",!0)],512)}const qo=k(Se,[["render",Bo]]);Se.__docgenInfo={exportName:"default",displayName:"TextEditor",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Text.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Me={name:"Heading",presets:!0,docs:"https://help.ecomposer.io/",mixins:[T,H,M],props:{data:{type:Object,default(){return{}}}},data(){return{editing:!1,is:"heading",editingValue:"",metaLang:{},metaLiquid:"",jsreactives:["animation","style","heading_highlight","link","line"]}},computed:{heading(){return this.data},content(){var i,a,l,u,r,g,m,h,_,b,f,v,x;let e=(i=this.data.settings)==null?void 0:i.content;const t=this;let o=this.headingHighlight||"",n=((a=this.data.settings)==null?void 0:a.line)||"30%",s="";if(s=o.split("|"),e&&o){if(e=(l=this.data.settings)==null?void 0:l.content.replace("[highlight heading]",`
                            <span class="ecom__heading-highlight" style="background-size: 100% ${n};${this.backgroundHighlight}">${o}</span>`),((u=this.data.settings)==null?void 0:u.animation)&&((r=this.data.settings)==null?void 0:r.animation)==="typing")(g=this.data.settings)!=null&&g.style?e=(h=this.data.settings)==null?void 0:h.content.replace("[highlight heading]",`
                                <span class="ecom__heading-highlight highlight-animation--typing ecom__heaading-linear-gradient" style="background-size: 100% ${n};${this.backgroundHighlight}" data-heading="${o}">${s[0]?s[0]:""}</span>`):e=(m=this.data.settings)==null?void 0:m.content.replace("[highlight heading]",`
                                <span class="ecom__heading-highlight highlight-animation--typing" style="background-size: 100% ${n};${this.backgroundHighlight}" data-heading="${o}">${s[0]?s[0]:""}</span>`);else if(((_=this.data.settings)==null?void 0:_.animation)&&((b=this.data.settings)==null?void 0:b.animation)==="smooth"){let C="";s.forEach(function(L,w){var $;($=t.data.settings)!=null&&$.style?C+=`<span class="heading-animation--smooth-item ${w==0?"is-active":""}" style="background-size: 100% ${n};${t.backgroundHighlight}">${L}</span>`:C+=`<span class="heading-animation--smooth-item ${w==0?"is-active":""}">${L}</span>`}),(f=this.data.settings)!=null&&f.style?e=(x=this.data.settings)==null?void 0:x.content.replace("[highlight heading]",`
                                <span class="ecom__heading-highlight highlight-animation--smooth ecom__heaading-linear-gradient" style="display: inline-flex;">${C}</span>`):e=(v=this.data.settings)==null?void 0:v.content.replace("[highlight heading]",`
                                <span class="ecom__heading-highlight highlight-animation--smooth" style="display: inline-flex;background-size: 100% ${n};${this.backgroundHighlight}">${C}</span>`)}}return e},headingHighlight(){var e;return(e=this.data.settings)==null?void 0:e.heading_highlight},settings(){return[{params:[{type:"textarea",label:"Heading text",description:'Highlight heading text you enter bellow will replace the text "[highlight heading]"',name:"content",options:{toolbar:"short",dynamic:!0,height:80}},{type:"link",label:"Insert Link",name:"link"},{type:"choose",label:'<span class="uppercase">HTML</span> Tag',name:"tag",options:{type:"heading"}},{type:"line"},{type:"text",name:"heading_highlight",label:"Highlight heading",description:'Multiple text: highlight1|highlight2|...|highlight(n). Separate by "|" ([Mutiple texts] only works when the Animation option is turned on)'},{type:"toggle",name:"style",label:"Use text gradient",value:!1,options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"popup",name:"animation",label:"Animation",options:{type:"dropdown",default:!1,preview:"title",values:{off:"Off",typing:"Typing",smooth:"Smooth"}}},{type:"number",name:"line",label:"Height highlight",options:{responsive:!1,units:{"%":{min:0,max:100}},visible:{name:"style",value:!1}},slider:!0,input:!0,min:0,max:100}]}]},style(){let e=[{group_alias:"text",options:{group_name:"heading",group_title:"Heading",selector:" .element__heading .ecom__heading"},modify:{remove:{index:2,length:1},params:[{position:3,fields:{name:"textColor",label:"Text Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{color:""},selector:"root  .element__heading .ecom__heading,root  .element__heading .ecom__heading a"}}},{position:6,fields:{alias:"border"}},{position:10,fields:{alias:"spacing"}}]}},{group_alias:"text",options:{group_name:"heading_highlight",group_title:"Highlight heading",selector:" .ecom__heading-highlight"},modify:{remove:[{index:2,length:1}],params:[{position:3,fields:{name:"textColor",label:"Text Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{"-webkit-text-fill-color":""},selector:"root .ecom__heading-highlight"}}},{position:6,fields:{alias:"border"}},{position:10,fields:{alias:"spacing"}},{position:4,fields:{type:"background",label:"Background",name:"sub_gradient",options:{oneline:!0,reset:!0}}}]}}];return this.data.settings.style?(e[1].modify.params.pop(),e[1].modify.remove.push({index:0,length:1})):(e[1].modify.remove.push({index:4,length:1}),e[1].modify.remove.push({index:0,length:1})),e},backgroundHighlight(){var t,o,n,s,i,a,l,u,r,g,m,h;if(this.data.settings.style==!0){if(!((o=(t=this.data.style)==null?void 0:t.heading_highlight)!=null&&o.text_gradient))return(s=(n=this.data.style)==null?void 0:n.heading_highlight)!=null&&s.textColor?`--background-image: linear-gradient(90deg, ${(a=(i=this.data.style)==null?void 0:i.heading_highlight)==null?void 0:a.textColor} 0%, ${(u=(l=this.data.style)==null?void 0:l.heading_highlight)==null?void 0:u.textColor} 100%)`:"--background-image: linear-gradient(90deg, #000000 0%,#000000 100%)";let _=JSON.parse(JSON.stringify((g=(r=this.data.style)==null?void 0:r.heading_highlight)==null?void 0:g.text_gradient))||"",b=_.gradient.positions||[],f="",v="";b.forEach(function(w,$){$<b.length-1?v+=`${w.color} ${w.index}%,`:v+=`${w.color} ${w.index}%`});let x=_.gradient.type||"linear",C=_.gradient.position||"center center",L=_.gradient.angle||"180";return x==="linear"?(f=`--background-image: linear-gradient(${L}deg, ${v});`,f):x==="radial"?(f=`--background-image: radial-gradient(at ${C}, ${v});`,f):""}let e=(h=(m=this.data.style)==null?void 0:m.heading_highlight)==null?void 0:h.sub_gradient;if(!e)return"";if(e.classic){let _=e.classic||"";if(!JSON.stringify(_).includes("background-image")){let w=_["background-color"];return`background-image: linear-gradient(${w}, ${w});`}let f=_["background-image"],v=_["background-attachment"],x=_["background-position"],C=_["background-repeat"],L=_["background-size"];if(_["image-size"]){let w=_["image-size"].format||"";if(w&&w!="")return`background-image: url(${f});
                            background-attachment: ${v};
                            background-position: ${x};
                            background-repeat: ${C};
                            background-size: ${L};
                            `;{let $=_["image-size"].width||!1,q=_["image-size"].height||!1;if($&&q){let B=_["image-size"].crop||"center";return`background-image: url(${f});
                                        background-size: ${$}px ${q}px;
                                        background-position: ${B};
                                        `}}}return`background-image: url(${f});
                            background-attachment: ${v};
                            background-position: ${x};
                            background-repeat: ${C};
                            background-size: ${L};
                            `}if(e.gradient){let _=JSON.parse(JSON.stringify(e.gradient))||"",b=_.positions||[],f="",v="";b.forEach(function(w,$){$<b.length-1?v+=`${w.color} ${w.index}%,`:v+=`${w.color} ${w.index}%`});let x=_.type||"linear",C=_.position||"center center",L=_.angle||"180";if(x==="linear")return f=`background-image: linear-gradient(${L}deg, ${v});`,f;if(x==="radial")return f=`background-image: radial-gradient(at ${C}, ${v});`,f}return""},css(){return`
                    .ecom__heading-highlight{
                        -webkit-text-fill-color: #000;
                        background-position: 100% 100%;
                        background-repeat: no-repeat;
                        position: relative;
                        max-width: 100%;
                    }
                    .ecom__heading-highlight.highlight-animation--typing::after {
                        content: "|";
                        position: absolute;
                        font-weight: 200;
                        color: #000;
                        display: inline-flex;
                        -webkit-text-fill-color: #000;
                        animation:  blink 1s step-end infinite;
                    }
                    .ecom__heading-highlight.highlight-animation--typing.ecom__heaading-linear-gradient::after{
                       
                    }

                    @keyframes blink {
                        0%, 100% {opacity: 1;}
                        50% {opacity: 0;}
                    }
                    
                    .ecom__heading-highlight.highlight-animation--smooth::after{
                        position: absolute;
                        content: '';
                        width: 2px;
                        height: 100%;
                        background-color: #000;
                        top: 0;
                        right: -5px;
                    }
                    .heading-animation--smooth-item{
                        display: inline-block;
                        position: absolute;
                        top: 0;
                        left: 0;
                        white-space: nowrap;
                        margin: 0;
                        visibility: hidden;
                        opacity:0;
                    }
                    .ecom__heaading-linear-gradient>.heading-animation--smooth-item{
                        background-image: var(--background-image);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                    .heading-animation--smooth-item.is-active{
                        position: relative;
                        visibility: visible;
                        opacity:1;
                        overflow: hidden;
                        -webkit-animation: animateSmooth 3s ease-in-out infinite;
                    }
                    @-webkit-keyframes animateSmooth {
                        0% {
                            max-width: 0;
                        }
                        50% {
                            max-width: 1000px;

                        }
                        100% {
                            max-width: 0;
                        }
                    }
                `},activeMe(){var e,t,o;return((o=(t=(e=this.editingElement)==null?void 0:e.data)==null?void 0:t.id)!=null?o:0)===this.heading.id},getMetaLiquid(){return this.convertText,this.metaLiquid},convertText(){var o;const e=this;let t=(o=this.data.settings)==null?void 0:o.content;if(t){const n=document.createElement("div");n.innerHTML=t;const s=n.querySelectorAll("span[data-meta]");s&&s.forEach(a=>{let l=a.dataset.metaKey.replaceAll(" ","_"),u=a.dataset.meta,r=document.createTextNode(`{{${l}}}`);u.indexOf("|")==-1?e.metaLang[l]=u:(e.metaLiquid+=`{%- assign ${l} = ${u}-%}`,e.metaLang[l]=l),a.replaceWith(r)});let i=n.innerHTML;return i=this.content,i}},javascript(){return function(){if(!this.$el)return!1;const e=this.$el,t=this,o=this.settings.animation,n=new CustomEvent("animation",function(){});let s=e.querySelector(".ecom__heading");s.querySelector("a")&&(s=s.querySelector("a")),s.addEventListener("animation",()=>{i()}),s.addEventListener("blur",function(a){a.target.dispatchEvent(n)});function i(){if(o==="typing"){let a=function(){setTimeout(function(){var b;let _=(b=h.settings)==null?void 0:b.animation;if(l.innerText=u[m].slice(0,r),g)if(r>u[m].length){g=!1,_=="typing"&&setTimeout(function(){a()},2e3);return}else r++;else r===0?(g=!0,m=(m+1)%u.length):r--;a()},g?120:60)},l=e.querySelector(".highlight-animation--typing");if(!l)return!1;let u=l.dataset.heading.split("|")||"",r=0,g=!0,m=0;const h=t;a()}if(o==="smooth"){let a=function(){let u=0,r=setInterval(function(){o!="smooth"&&clearInterval(r),u++,l.forEach((g,m)=>{u==l.length&&(u=0),m==u?g.classList.add("is-active"):g.classList.remove("is-active")})},3e3)},l=e.querySelectorAll(".heading-animation--smooth-item");if(!l)return!1;a()}}i()}},default(){return{settings:{style:!1,animation:"smooth",content:"Ecomposer is [highlight heading]",tag:"h3",heading_highlight:"Creative|Awesome|Beautiful",line:"30%"},style:{text:{textTextAlign:"left",textColor:"#000000",textTypography:{"font-weight":"500","font-size":"30px"}},heading_highlight:{sub_gradient:{classic:{"background-size":"cover","background-repeat":"no-repeat","background-position":"center left","background-attachment":"scroll","background-color":"#f27e7e"}},text_gradient:{gradient:{positions:[{index:0,color:"#e34646"},{index:100,color:"#0033ff"}],type:"linear",angle:90,position:"bottom center"}},textColor:"#000000",textTypography:{"font-weight":"600"}},heading:{textTypography:{"font-size":"50px"},textColor:"#595757"}}}}},watch:{activeMe(e){!e&&this.editing===!0&&(this.editing=!1,this.heading.settings.content=this.$refs.content.innerHTML)}},methods:{edit(){this.convertText,this.editing===!1&&(this.editing=!0,this.editingValue=this.data.settings.content)},update(e){this.heading.settings.content=e.target.innerHTML}}},Eo={ref:"wrapper",class:"ecom__element element__heading ecom-element ecom-html","data-stopdrag":!0},Do=["contenteditable","innerHTML"];function Ao(e,t,o,n,s,i){var l,u,r,g,m,h,_,b;const a=N("Liquid");return c(),d("div",Eo,[R(a,{data:i.getMetaLiquid},null,8,["data"]),((l=o.data.settings)==null?void 0:l.link)&&((u=o.data.settings)==null?void 0:u.link.href)?(c(),z(W((m=(g=(r=o.data)==null?void 0:r.settings)==null?void 0:g.tag)!=null?m:"h2"),{key:0,class:"ecom__heading"},{default:Q(()=>{var f;return[p("a",j((f=o.data.settings)==null?void 0:f.link,{ref:"content",contenteditable:e.isFullScreen?null:!0,spellcheck:"false",onClick:t[0]||(t[0]=(...v)=>i.edit&&i.edit(...v)),onKeyup:t[1]||(t[1]=(...v)=>i.update&&i.update(...v)),onBlur:t[2]||(t[2]=v=>s.editing=!1),innerHTML:s.editing?s.editingValue:e.exporting?e.lang(this.convertText,"heading-text",s.metaLang):i.content}),null,16,Do)]}),_:1})):(c(),z(W((b=(_=(h=o.data)==null?void 0:h.settings)==null?void 0:_.tag)!=null?b:"h2"),{key:1,ref:"content",contenteditable:e.isFullScreen?null:!0,class:"ecom__heading",spellcheck:"false",onClick:i.edit,onKeyup:i.update,onBlur:t[3]||(t[3]=f=>s.editing=!1),innerHTML:s.editing?s.editingValue:e.exporting?e.lang(this.convertText,"heading-text",s.metaLang):i.content},null,40,["contenteditable","onClick","onKeyup","innerHTML"]))],512)}const zo=k(Me,[["render",Ao]]);Me.__docgenInfo={exportName:"default",displayName:"Heading",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/AdvanceHeading.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const He={name:"Store Locator",docs:"https://help.ecomposer.io/docs/elements/basic-elements/google-map/",mixins:[T,H,M],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["api_key","zoom","locations"]}},computed:{locations(){var e;return(e=this.data.settings)==null?void 0:e.locations},settings(){return[{params:[{type:"group",name:"locations",label:"<b> Group Locations </b>",options:{},params:[{type:"text",name:"name",label:"Name"},{type:"text",name:"location",label:"Address"},{type:"textarea",name:"detail",label:"Details",options:{toolbar:"short",dynamic:!0,height:80}},{type:"toggle",label:"Animation marker",name:"animation_marker",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"toggle",label:"Use marker image",name:"use_image_marker",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"picker",name:"image_marker",label:"Marker image",options:{responsive:!1,type:"image",editAlt:!1,visible:{keep_data:!0,condition:e=>e.use_image_marker==!0}}}]},{name:"color_active",label:"Selected location background color",type:"color",options:{global:{type:"colors"},oneline:!0},css:{properties:{"background-color":""},selector:"root .element__address-location-item.active"}},{name:"box_width",label:"Box location width",type:"number",options:{units:{px:{min:0,max:1e3}},responsive:!1},css:{selector:" .element__address-location",properties:{width:""}}},{type:"line"},{type:"paragraph",options:{warnings:{content:"Make sure that the API keys entered is valid"}}},{type:"textarea",name:"api_key",label:"Enter your goolge map API key",description:"[How to get your google map API Keys](https://developers.google.com/maps/documentation/javascript/get-api-key/)"},{type:"toggle",label:"Map show on the left",name:"show_left",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{name:"zoom",label:"Zoom",type:"number",options:{min:1,max:20,step:1}},{name:"gmap_height",label:"Map height",type:"number",options:{units:{px:{min:0,max:2e3},vh:{min:0,max:100}},responsive:!0},css:{selector:" .ecom__element-location",properties:{height:""}}}]}]},style(){return[{group_alias:"text",options:{group_name:"loaction_name",group_title:"Name",selector:" .el__location-name"},modify:{remove:{index:2,length:1},params:[{position:3,fields:{name:"textColor",label:"Text Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{color:""},selector:"root  .el__location-name"}}},{position:10,fields:{alias:"spacing"}}]}},{group_alias:"text",options:{group_name:"loaction_address",group_title:"Address",selector:" .el__location-address"},modify:{remove:{index:2,length:1},params:[{position:3,fields:{name:"textColor",label:"Text Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{color:""},selector:"root  .el__location-address"}}},{position:10,fields:{alias:"spacing"}}]}},{group_alias:"text",options:{group_name:"loaction_detail",group_title:"Details",selector:" .el__location-detail"},modify:{remove:{index:2,length:1},params:[{position:3,fields:{name:"textColor",label:"Text Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{color:""},selector:"root  .el__location-detail"}}},{position:10,fields:{alias:"spacing"}}]}},{group_name:"box_item",group_title:"Location box",selector:"root .element__address-location-item",params:[{alias:"spacing"},{alias:"border"}]}]},javascript(){return function(){if(!this.$el)return!1;const e=this.$el;let t=this.settings.api_key||null,o=this.settings.zoom||15,n=document.createElement("script"),s=e.querySelectorAll(".element__address-location-item"),i=e.querySelector(".ecom__element-location"),a=e.querySelector(".element__address-location-item.active"),l="";a?l=a.dataset.location:l="Ha Noi";let u=null,r=null;if(!a)return;a.dataset.image&&(u=a.dataset.image),a.dataset.animation&&(r=a.dataset.animation),s.forEach(function(m,h){m.addEventListener("click",function(){s.forEach(function(b){b.classList.remove("active")});let _=m.dataset.animation;m.classList.add("active"),window.initialize=g(m.dataset.location,m.dataset.image,_),i.scrollIntoView()})});function g(m,h,_){new google.maps.Geocoder().geocode({address:m},function(f,v){if(v==google.maps.GeocoderStatus.OK){let x=f[0].geometry.location.lat(),C=f[0].geometry.location.lng(),L=new google.maps.LatLng(x,C),w={zoom:o,center:L};const $=new google.maps.Map(e.querySelector(".ecom__element-location"),w);let q=null;h&&(q={url:h,scaledSize:new google.maps.Size(50,50)});const B=new google.maps.Marker({position:f[0].geometry.location,map:$,icon:q});_=="true"&&B.setAnimation(google.maps.Animation.BOUNCE);let A=new google.maps.InfoWindow({content:m,maxWidth:200});B.setMap($),B.addListener("click",()=>{A.open({anchor:B,map:$})}),$.addListener("zoom_changed",()=>{$.setCenter(L),$.panTo(L)})}})}if(setTimeout(()=>window.initialize=g(l,u,r),1e3),t){n.src=`https://maps.googleapis.com/maps/api/js?key=${t}&callback=initialize`,n.id="ecom__location-map--api_key";const m=document.getElementById("ecom__location-map--api_key");m&&document.head.removeChild(m),document.head.appendChild(n)}}},css(){return`
                .ecom__element-location-wrapper{
                    display:flex;
                }
                .element__address-location{
                    height: auto;
                }
                .ecom__element-location{
                    width: 100%;
                }
                .element__address-location-item{
                    cursor: pointer;
                }
                @media screen and (max-width: 767px) {
                    .element__address-location {
                        width: 100% !important;
                        display: flex;
                        flex-wrap: wrap;
                    }
                    .ecom__element-location-wrapper{
                        flex-wrap: wrap;
                    }
                    .ecom__element-location{
                        margin-top: 30px;
                    }
                }
                `},default(){return{settings:{zoom:15,generalHeight:"16/9",color_active:"#f0f0f0",box_width:"550px",locations:[{location:"Legal Department 151 O'Connor Street Ground Floor Ottawa, Ontario K2P 2L8",name:"Ottawa",detail:'<b><font color="#000000">Phone:&nbsp;</font></b><div>0123456789</div><div><font color="#000000"><b>Store hours:&nbsp;</b></font></div><div>10am - 10pm EST, 7 days a week</div>'},{location:"151 O'Connor Street Ground Floor Ottawa, Ontario K2P2L8",name:"Ontario",detail:'<font color="#000000"><b>Phone:&nbsp;</b></font><div>0123456789&nbsp;</div><div><font color="#000000"><b>Store hours:&nbsp;</b></font></div><div>10am - 10pm EST, 7 days a week</div>'}]},style:{box_item:{spacing:{padding:{top:"15.5px",bottom:"15.5px",left:"15.5px",right:"15.5px"},margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}},loaction_name:{textColor:"#000000",textTypography:{"font-size":"24px","font-weight":"500","text-transform":"uppercase"}},loaction_address:{spacing:{padding:{top:"12.5px",bottom:"12.5px"}},textTypography:{"font-size":"14px"}},loaction_detail:{spacing:{padding:{}},textTypography:{"font-size":"14px"}}}}}},watch:{}},jo={ref:"wrapper",class:"ecom__element ecom-element element__location"},Io={class:"element__address-location"},Po=["data-location","data-image","data-animation"],No=["innerHTML"],Vo=["innerHTML"],Wo=["innerHTML"],Oo=p("div",{class:"ecom__element-location"},null,-1);function Fo(e,t,o,n,s,i){return c(),d("div",jo,[p("div",{class:"ecom__element-location-wrapper",style:E([o.data.settings.show_left==!0?{"flex-direction":"row-reverse"}:{"flex-direction":"row"}])},[p("div",Io,[(c(!0),d(D,null,Y(i.locations,(a,l)=>{var u;return c(),d("div",{key:l,class:S(["element__address-location-item ecom-col-lg-12",l==0?"active":""]),"data-location":a.location,"data-image":(u=a==null?void 0:a.image_marker)==null?void 0:u.value,"data-animation":a==null?void 0:a.animation_marker},[p("div",{class:"el__location-name",innerHTML:a.name},null,8,No),p("div",{class:"el__location-address",innerHTML:a.location},null,8,Vo),p("div",{class:"el__location-detail",innerHTML:a.detail},null,8,Wo)],10,Po)}),128))]),Oo],4)],512)}const Uo=k(He,[["render",Fo]]);He.__docgenInfo={exportName:"default",displayName:"Store Locator",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:`{
    
}`}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/StoreLocator.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Be={name:"Progress",presets:!0,mixins:[T,H],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:[]}},methods:{refresh(){this.progress.refresh=this.$helpers.randid()}},computed:{striped(){var e;return(e=this.data.settings)==null?void 0:e.striped},animated(){return this.data.settings.animated},track(){var e;return(e=this.data.settings)==null?void 0:e.track},progressColor(){var e;return(e=this.data.settings)==null?void 0:e.progress},percent(){var e;return(e=this.data.settings)==null?void 0:e.percent},progressStyle(){var e;return(e=this.data.settings)==null?void 0:e.progress_style},getThicknessLine(){var e;return(e=this.data.settings)==null?void 0:e.thickness_line},progress(){return this.data},settings(){return[{params:[{type:"popup",name:"progress_style",label:"Progress style",options:{type:"dropdown",default:!1,values:{circle:"Circle",line:"Line"}}},{type:"toggle",label:"Show striped",name:"striped",value:!0,options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:function(e){return e&&e.progress_style==="line"}}},{type:"toggle",label:"Animation striped",name:"animated",value:!0,options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:function(e){return e&&e.progress_style==="line"&&e.striped===!0}}},{type:"number",name:"percent",label:"Percent",options:{responsive:!1,units:{"%":{min:0,max:100}}},slider:!0,input:!0,min:0,max:100},{type:"color",name:"progress",label:"Progress",options:{global:{type:"colors"},oneline:!0}},{type:"color",name:"track",label:"Track",options:{global:{type:"colors"},oneline:!0}},{type:"number",name:"thickness",label:"Thickness",options:{visible:function(e){return e&&e.progress_style==="circle"},responsive:!0,units:{px:{min:5,max:50}}},slider:!0,input:!0,min:5,max:50,css:{selector:"root .el-progress__percent-chart svg circle, root .el-progress__percent-outner",properties:{"stroke-width":"%value%",padding:"%value%",r:"calc(50% - %value%/2)"}}},{type:"number",name:"thickness_line",label:"Thickness",options:{visible:function(e){return e&&e.progress_style==="line"},responsive:!0,units:{px:{min:5,max:50}}},slider:!0,input:!0,min:5,max:50,css:{selector:"root .el-porgress__line-wrapper",properties:{height:"%value%"}}}]}]},style(){return[{group_alias:"text",options:{group_name:"progress_percent",group_title:"Percent text",selector:"root .el-progress__pie-label"}}]},css(){return`
                    .el-progress__percent-chart svg{
                        transform: rotate(-90deg);
                        width: 100%;
                        height: 100%;
                        position: absolute;
                    }
                    .el-progress__percent-chart svg circle{
                        fill:none;
                        stroke-width: 10px;
                        cx: 50%;
                        cy: 50%;
                        r: calc(50% - 5px);
                        stroke-linecap: round;
                        box-sizing: border-box;
                        stroke-dashoffset: var(--stroke-dasharray);
                        stroke-dasharray: var(--stroke-dasharray);   
                    }
                    .element__progress--percent-circle-animated{
                        -webkit-animation: progress-circle-anim ease 1s forwards;
                        animation: progress-circle-anim ease 1s forwards;
                    }
                    @keyframes progress-circle-anim{
                        0%{
                            stroke: var(--stroke);
                        }
                        100%{
                            stroke: var(--stroke);
                            stroke-dashoffset: var(--stroke-dashoffset);
                            stroke-dasharray: var(--stroke-dasharray);
                        }
                    }
                    @-webkit-keyframes progress-circle-anim{
                        0%{
                            stroke-dashoffset: var(--stroke-dasharray);

                        }
                        100%{
                            stroke-dashoffset: var(--stroke-dashoffset);
                        }
                    }
                    .el-progress__percent-chart{
                        width: 100%;
                        position: relative;
                        height: 100%;
                        padding-bottom: 100%;
                    }
                    .el-progress__percent-outner{
                        background-color: #f2f2f2;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        padding: 10px;
                    }
                    .el-progress__percent-inner{
                        background-color: white;
                        width:100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 50%;
                    }
                    .el-progress__pie-label{
                        width: 100%;
                    }
                    .el-porgress__line-wrapper{
                        background-color: rgba(0 0 0 /.1);
                        width: 100%;
                        height: 20px;
                        border-top-left-radius: 10px;
                        border-top-right-radius: 4px;
                        border-bottom-right-radius: 4px;
                        border-bottom-left-radius: 10px;
                    }
                    .el-progress__line-inner{
                        width: 0%;
                        transition: width ease 1s;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        overflow: hidden;
                        color: #fff;
                        text-align: center;
                        white-space: nowrap;
                        border-top-left-radius: 4px;
                        border-top-right-radius: 4px;
                        border-bottom-right-radius: 4px;
                        border-bottom-left-radius: 4px;
                    }
                    .el-porgress__percent-line{
                        width:100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                    }
                    .el-progress__percent-line-animation{
                        animation: progress-percent-line ease 1s forwards;
                    }
                    @keyframes progress-percent-line{
                        0%{
                            background-color: var(--progress-line);
                            width: 0%;
                        }
                        100%{
                            background-color: var(--progress-line);
                            width: var(--progress-line-width);
                        }
                    }
                    .el-porgress__percent-line--striped{
                        background-image: linear-gradient(
                            -45deg, 
                            rgba(255, 255, 255, .2) 25%, 
                            transparent 25%, 
                            transparent 50%, 
                            rgba(255, 255, 255, .2) 50%, 
                            rgba(255, 255, 255, .2) 75%, 
                            transparent 75%, 
                            transparent
                        );
                        background-size: 20px 20px;
                    }
                    .el-porgress__percent-line--animated{
                        animation: progress-pie-move 2s linear infinite;
                    }
                    .ecom-animation.ecom-visibility--visible{
                        opacity: 1;
                    }
                    @keyframes progress-pie-move {
                        0% {
                            background-position: 0 0;
                        }
                        100% {
                            background-position: 50px 50px;
                        }
                    }
                `},default(){return{settings:{progress_style:"circle",thickness:"20px",thickness__tablet:"15px",thickness__mobile:"10px",thickness_line:"30px",progress:"#ff2400",percent:"34%",track:"#f2f2f2",striped:!0,animated:!0},style:{progress_percent:{textTextAlign:"center",textTypography:{"font-size":"30px","font-weight":"600"},textColor:"#403c3c"}}}},javascript(){return function(){if(!this.$el)return!1;const e=this.$el;function t(){const s=e.querySelector(".el-porgress__line-wrapper"),i=e.querySelector(".el-progress__line-inner");if(!i)return!1;i.classList.remove("el-progress__percent-line-animation");let a=i.querySelector(".el-progress__pie-label");a.innerHTML="",l(i);function l(r){let g={root:null,rootMargin:"0px",threshold:.5};new IntersectionObserver(u,g).observe(r)}function u(r,g){r.forEach(function(m){if(m.intersectionRatio>0){let h=function(_){let b=0,f=parseInt(i.dataset.widthLine)||0;if(f==0)return;function v(){_.innerHTML=`${b}%`,b+=1,b>f&&clearInterval(x)}let x=window.setInterval(v,1e3/parseInt(i.dataset.widthLine))};i.classList.add("el-progress__percent-line-animation"),i.dataset.widthLine=="100%"&&(s.style.borderTopRightRadius="10px",s.style.borderBottomRightRadius="10px"),h(a),g.unobserve(i)}})}}function o(){const s=e.querySelectorAll(".el-progress__percent-wrapper"),i=e.querySelectorAll(".el-progress__circle");if(!s||!i)return!1;i.forEach(function(r){r.classList.remove("element__progress--percent-circle-animated")}),s.forEach(function(r){a(r)});function a(r){let g={root:null,rootMargin:"0px",threshold:.5};new IntersectionObserver(l,g).observe(r)}function l(r,g){r.forEach(m=>{if(m.intersectionRatio>0){let h=function(f){let v=0,x=parseInt(m.target.dataset.percent)||0;if(x==0)return;function C(){f.innerHTML=`${v}%`,v+=1,v>x&&clearInterval(L)}let L=window.setInterval(C,1e3/parseInt(m.target.dataset.percent))},_=m.target.querySelector(".el-progress__circle"),b=m.target.querySelector(".el-progress__pie-label");_.classList.add("element__progress--percent-circle-animated"),h(b),g.unobserve(m.target)}})}let u=[];s.forEach(r=>{r.dataset.percent?u.push(parseInt(r.dataset.percent)):u.push(0)}),u.forEach((r,g)=>{let m=parseFloat(i[g].getBoundingClientRect().width),h=m*Math.PI,_=h;r&&(_=m*Math.PI-m*Math.PI*r/100),i[g].style.setProperty("--stroke-dasharray",h),i[g].style.setProperty("--stroke-dashoffset",_)})}new ResizeObserver(function(s){s.forEach(function(i){i.contentBoxSize&&(setTimeout(o,150),setTimeout(t))})}).observe(e)}}},watch:{"data.settings":{deep:!0,handler:function(e){this.refresh()}}},mounted(){}},Ro={class:"ecom-element ecom__progress ecom-html"},Yo={class:"element__progress-wrapper"},Go={key:0,class:"el-progress__pie-circle"},Jo=["data-percent"],Zo={class:"el-progress__percent-chart"},Ko={class:"el-progress__percent-inner"},Xo={key:0,class:"el-progress__pie-label"},Qo={key:1,class:"el-progress__pie-label"},ei={key:1,class:"el-progress__line"},ti=["data-width-line"],oi={key:0,class:"el-progress__pie-label"},ii={key:1,class:"el-progress__pie-label"};function ni(e,t,o,n,s,i){return c(),d("div",Ro,[p("div",Yo,[i.progressStyle=="circle"?(c(),d("div",Go,[p("div",{class:"el-progress__percent-wrapper","data-percent":i.percent},[p("div",Zo,[p("div",{class:"el-progress__percent-outner",style:E({backgroundColor:i.track})},[p("div",Ko,[i.percent?(c(),d("div",Xo,I(i.percent),1)):(c(),d("div",Qo," 0% "))])],4),(c(),d("svg",null,[p("circle",{class:"el-progress__circle",cx:"50%",cy:"50%",r:"50%",style:E({"--stroke":i.progressColor})},null,4)]))])],8,Jo)])):(c(),d("div",ei,[p("div",{class:"el-porgress__line-wrapper",style:E({backgroundColor:i.track})},[p("div",{class:"el-progress__line-inner",style:E({width:i.percent,"--progress-line":i.progressColor,"--progress-line-width":i.percent}),"data-width-line":i.percent},[p("div",{class:S(["el-porgress__percent-line",[i.striped?"el-porgress__percent-line--striped":"",i.animated?"el-porgress__percent-line--animated":""]])},[i.percent?(c(),d("div",oi,I(i.percent),1)):(c(),d("div",ii," 0% "))],2)],12,ti)],4)]))])])}const si=k(Be,[["render",ni]]);Be.__docgenInfo={exportName:"default",displayName:"Progress",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Progress.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const qe={name:"TextMarqueeElement",presets:!0,docs:"https://help.ecomposer.io/docs/elements/basic-elements/text/",mixins:[T,H],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["items"]}},computed:{textMarqueeData(){return this.data},items(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.items},animSpeed(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.animation_speed},isReverse(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.reverse_direction},iconSeparator(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.icon},javascript(){return function(){let e=document.querySelector('html[dir="rtl"]'),t=this.id,o=this.$el,n=o.querySelector("input[name='speed_animation']"),s=null,i=null;n&&(s=parseFloat(n.value),i=Math.round(10/s));let a=!!o.querySelector(".animation-reverse");function l(u,r){const g=o.querySelector(u),m=g.children[0];setTimeout(()=>{if(m.clientWidth<=g.clientWidth){e&&(g.style.flexDirection="row-reverse"),o.addEventListener("mouseover",function(){m.style.animationPlayState="paused"}),o.addEventListener("mouseout",function(){m.style.animationPlayState="running"}),m.classList.add("ecom-flex_full");const h=g.innerHTML;g.insertAdjacentHTML("beforeend",h),i&&i>0?a?m.style.animation=`marqueeReverse ${i}s linear infinite`:m.style.animation=`marquee ${i}s linear infinite`:m.classList.add("ecom-anim_marquee")}else if(m.clientWidth>g.clientWidth){e&&(g.style.flexDirection="row-reverse");const h=g.innerHTML;g.insertAdjacentHTML("beforeend",h);let _=a?m.clientWidth:0,b=!0,f=setInterval(function(){!b||(document.querySelector(`.${t}`)||clearInterval(f),m.style.marginLeft=`-${_}px`,a?(_<0&&(_=m.clientWidth),_=_-r):(_>m.clientWidth&&(_=0),_=_+r))},0);o.addEventListener("mouseover",function(){b=!1}),o.addEventListener("mouseout",function(){b=!0})}},200)}window.addEventListener("load",l(".ecom-marquee",s!=null?s:0))}},settings(){return[{group_title:"General",params:[{name:"items",type:"group",label:"Group items",value:[],options:{add_text:"Add item"},params:[{name:"text",type:"textarea",label:"Text",options:{toolbar:!0}},{type:"popup",label:"Icon/Image",name:"type_icon",options:{preview:"title",type:"dropdown",values:{icon:"Icon",img:"Image"},default:!1}},{type:"picker",label:"Choose icon",name:"icon",options:{type:"icon",multiple:!1,visible:{name:"type_icon",value:"icon"}}},{type:"picker",label:"Choose Image",name:"image",options:{responsive:!1,type:"image",editAlt:!0,visible:{name:"type_icon",value:"img"}}}]},{type:"choose",label:"Icon/Image position",name:"icon_position",options:{type:"align-x",values:[-1,1],visible:function(e){return e&&(e.items.some(t=>t==null?void 0:t.icon)||e.items.some(t=>{var o;return(o=t==null?void 0:t.image)==null?void 0:o.url}))}},css:{selector:" .ecom-icon-separator, .ecom-marquee-image",properties:{order:""}}},{name:"animation_speed",label:"Animation speed",type:"number",options:{min:0,max:3,step:.1}},{type:"toggle",label:"Reverse direction",name:"reverse_direction",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}}]}]},css(){return`
                .ecom-marquee {
                    overflow: hidden;
                    display: flex;
                }

                .ecom-marquee .ecom-marquee_items {
                    font-size: 1.8em;
                    width: fit-content;
                    white-space: nowrap;
                }

                .ecom-marquee.animation-reverse .ecom-marquee_items {
                    justify-content: end;
                }

                .ecom-marquee_items.ecom-anim_marquee {
                    animation: marquee 10s linear infinite;
                }

                .ecom-marquee.animation-reverse .ecom-marquee_items.ecom-anim_marquee {
                    animation: marqueeReverse 10s linear infinite;
                }

                .element__text-marquee:hover .ecom-marquee_items {
                    animation-play-state: paused;
                }
                .ecom-marquee_items .ecom-marquee_item {
                    display: flex;
                }
                @keyframes marquee {
                    0% { margin-left: 0; }
                    100% { margin-left: -100%; }
                }

                @keyframes marqueeReverse {
                    0% { margin-left: -100%; }
                    100% { margin-left: 0; }
                }

                .ecom-marquee_items h3 {
                    display: flex;
                    align-items: center;
                }

                .ecom-flex_full {
                    flex: 0 0 100%;
                    width: 100%;
                }

                .ecom-icon-separator svg {
                    width: 20px;
                    height: 20px;
                }

                .ecom-icon-separator, .ecom-marquee-image {
                    padding-left: 15px;
                    padding-right: 15px;
                    line-height: normal;
                    align-self: center;
                }
            `},text(){return this.data},default(){return{settings:{items:[{text:"Text content 1",type_icon:"icon",icon:{id:"4hQcXzCH",name:"bolt",cate:"Solid",url:"https://tiep.ecomposer.app/storage/icons/font-awesome/solid/bolt.svg",value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H31.1C18.67 288 6.733 279.7 2.044 267.3C-2.645 254.8 .8944 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224z"></path></svg>',thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H31.1C18.67 288 6.733 279.7 2.044 267.3C-2.645 254.8 .8944 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224z"></path></svg>'}},{text:"Text content 2",type_icon:"icon",icon:{id:"4hQcXzCH",name:"bolt",cate:"Solid",url:"https://tiep.ecomposer.app/storage/icons/font-awesome/solid/bolt.svg",value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H31.1C18.67 288 6.733 279.7 2.044 267.3C-2.645 254.8 .8944 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224z"></path></svg>',thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H31.1C18.67 288 6.733 279.7 2.044 267.3C-2.645 254.8 .8944 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224z"></path></svg>'}},{text:"Text content 3",type_icon:"icon",icon:{id:"4hQcXzCH",name:"bolt",cate:"Solid",url:"https://tiep.ecomposer.app/storage/icons/font-awesome/solid/bolt.svg",value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H31.1C18.67 288 6.733 279.7 2.044 267.3C-2.645 254.8 .8944 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224z"></path></svg>',thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H31.1C18.67 288 6.733 279.7 2.044 267.3C-2.645 254.8 .8944 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224z"></path></svg>'}}],icon_position:1,animation_speed:.3,reverse_direction:!1},style:{text:{textTextAlign:"left"},text_dropcap:{dropcapTypography:{"font-size":"40px"},dropcapColor:"#f50c0c",dropcapColorStackedView:"#5eff00",dropcapBackgroundStackedView:"#4800ff",dropcapColorFramedView:"#1aff00",dropcapBackgroundFramedView:"#1100ff",dropcapView:"framed"},icon:{iconFontSize:"20px",spacing:{padding:{left:"15px",right:"15px"}}},text_item:{textTypography:{"font-size":"35px"},spacing:{padding:{left:"15px",right:"15px"}}}}}}},unmounted(){},watch:{items:{deep:!0,handler:function(e){this.refresh()}},animSpeed:{deep:!0,handler:function(){this.refresh()}},iconSeparator:{deep:!0,handler:function(){this.refresh()}},isReverse:{deep:!0,handler:function(e){this.refresh()}}},methods:{refresh(){this.textMarqueeData.refresh=this.$helpers.randid()},style(){var t,o;let e=[];return this.data.settings.items.length>0&&e.push({group_alias:"text",options:{group_title:"Text",group_name:"text_item",selector:" .ecom-marquee_items h3"},modify:{remove:[{index:0,length:1}],params:{position:10,fields:{alias:"spacing"}}}}),(o=(t=this.data.settings)==null?void 0:t.items)!=null&&o.some(n=>n.icon)&&e.push({group_alias:"icon",options:{group_title:"Icon",group_name:"icon",selector:" .ecom-icon-separator"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}}),this.data.settings.items.some(n=>{var s;return(s=n.image)==null?void 0:s.url})&&e.push({group_alias:"image",options:{selector:" .ecom-marquee-image"},modify:{remove:{index:0,length:2},params:[{position:2,fields:[{type:"number",label:"Width",name:"width",options:{responsive:!0,units:{px:{min:0,max:200},vw:{min:0,max:100}}},css:{important:!0,selector:" img",properties:{width:""}}}]},{position:20,fields:{alias:"spacing"}}]}}),e}}},ai={class:"ecom__element ecom-element element__text-marquee"},ri=["value"],li={class:"ecom-flex ecom-marquee_items"},ci=["innerHTML"],pi=["innerHTML"],mi={key:1,class:"ecom-marquee-image"},di=["src"];function ui(e,t,o,n,s,i){return c(),d("div",ai,[p("input",{type:"hidden",name:"speed_animation",value:i.animSpeed},null,8,ri),p("div",{class:S(["ecom-marquee",i.isReverse?"animation-reverse":""])},[p("div",li,[(c(!0),d(D,null,Y(i.items,(a,l)=>{var u,r;return c(),d("div",{key:l,class:"ecom-marquee_item"},[p("h3",{innerHTML:e.lang(a.text,"marquee_text"+l)},null,8,ci),(a==null?void 0:a.type_icon)!=="img"&&(a==null?void 0:a.icon)?(c(),d("span",{key:0,class:"ecom-icon-separator",innerHTML:a.icon.value},null,8,pi)):y("",!0),(a==null?void 0:a.type_icon)==="img"&&((u=a==null?void 0:a.image)==null?void 0:u.value)?(c(),d("span",mi,[p("img",{src:(r=a==null?void 0:a.image)==null?void 0:r.value,alt:"",style:{"max-width":"unset",width:"40px"}},null,8,di)])):y("",!0)])}),128))])],2)])}const gi=k(qe,[["render",ui]]);qe.__docgenInfo={exportName:"default",displayName:"TextMarqueeElement",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/TextMarquee.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const Ee={name:"Image",presets:!1,docs:"https://help.ecomposer.io/docs/elements/basic-elements/image/",mixins:[T,H],vendors:["modal_js","modal_css"],props:{data:{type:Object,default(){return{}}}},computed:{focalPoint(){var t,o,n,s;const e={};return((t=this.image)==null?void 0:t.left)&&((o=this.image)==null?void 0:o.top)&&(e["object-position"]=`${(n=this.image)==null?void 0:n.left}% ${(s=this.image)==null?void 0:s.top}%`),e},imageComp(){return this.data},screens(){return this.$store.getters["builder/screens"]},lazyload(){var e,t;return(e=this.data.settings)!=null&&e.lazyload?((t=this.data.settings)==null?void 0:t.lazyload)===!1:!0},image(){if(!this.data.settings)return;let{image:e={},size:t,size_custom:o}=this.data.settings;return Object.keys(e).length===0?null:(t==="custom"?t=o:t&&(t={width:t.split("x")[0],height:t.split("x")[1]}),{alt:e.name,top:e.top,left:e.left,...Object.keys(e).filter(n=>n.startsWith("value")).reduce((n,s)=>(n[s]=this.$helpers.resizeImage(e[s],t),n),{})})},link(){var t;let e={};if((t=this.image)!=null&&t.value){let{link:o,"custom-link":n,lightbox:s}=this.data.settings;o==="lightbox"?(s==="yes"&&(e["ecom-modal"]="image",e["ecom-modal-source"]=this.image.value),e.href=this.image.value):o==="custom"&&(n==null?void 0:n.href)&&Object.assign(e,n)}return e},settings(){return[{group_alias:"image:settings",options:{group_name:"",group_title:""}}]},javascript(){return function(){if(this.settings.link==="lightbox"&&this.settings.lightbox==="yes"&&window.EComModal&&this.$el){var e=this.$el.querySelector("[ecom-modal]");new window.EComModal(e,{cssClass:["ecom-container-lightbox-"+this.id]})}}},css(){return`
                    .ecom-base-image.ecom-overlay > .ecom-overlay-text{
                        text-align:center
                    }
                    .ecom-image-align{
                        display:flex;
                    }
                    .ecom-image-picture-link,
                    .ecom-image-picture{
                        overflow:hidden;
                        width:100%;
                        height:100%;
                    }
                    .ecom-base-image picture {
                        flex:1 1 auto;
                        min-height:1px;
                    }
                    .ecom-base-image picture img{
                        display: block;
                        max-width: 100%;
                        height: 100%;
                        width: 100%;
                    }
                    .ecom-base-image figure{
                        display: flex;
                    }
                    .ecom-container-image{
                        display: flex;
                        flex-direction: column;
                        width:100%;
                    }
                    .ecom-image-picture-link,
                    .ecom-image-content-position{
                        position: relative;
                    }
                    .ecom-base-image.ecom-overlay {
                        position: absolute;
                        z-index: 1;
                        opacity: 0.5;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                    }
                    .ecom-image__caption{
                        width:100%;
                    }
                    .ecom-base-image .ecom-image-picture, .ecom-base-image .ecom-image-picture img {
                        width: 100%;
                        max-width: 100%;
                    }
                    .ecom-base-image .ecom-base-image-container-overlay:hover>.ecom-overlay {
                        background-color: rgba(17, 24, 39, 0.3);
                    }
                `},default(){return{settings:{image:{value:"/images/placeholder.png"},link:"lightbox",lightbox:"no",use_caption:!1,caption:"Hello",overlay_use:!1},style:{image:{imageAlign:"center",imageOpacitynormalmode:1,imageOpacityhovermode:1},overlay:{opacity:0,backgroundhovermode:{classic:{"background-color":"rgba(17, 24, 39, 0.3)"}},opacityHover:1}}}}},watch:{image:{deep:!0,handler:function(){this.refresh()}},link:{deep:!0,handler:function(){this.refresh()}}},methods:{refresh(){this.imageComp.refresh=this.$helpers.randid()},isCaption(){var e;return((e=this.data.settings)==null?void 0:e.use_caption)&&this.data.settings.caption},style(){var o,n;let e=[];this.image&&(e=[{group_alias:"image",options:{selector:" .ecom-base-image .ecom-image-picture"},modify:{params:[{position:0,fields:[{type:"choose",label:"Alignment",name:"imageAlign",options:{oneline:!0,responsive:!0,type:"text-align",values:["flex-start","center","flex-end"],visible:{keep_data:!1,condition:s=>s.imageWidth!=="100%"}},css:{selector:"root .ecom-image-align",properties:{"align-items":""}}}]}]}}]),this.isCaption()&&e.push({group_alias:"text",options:{group_name:"caption",group_title:"Caption",selector:" .ecom-base-image .ecom-image__caption"},modify:{params:{position:20,fields:{alias:"spacing"}}}});let t=((o=this.data.settings)==null?void 0:o.overlay_title)&&(this.data.settings.overlay_title=="alt"||this.data.settings.overlay_title_custom);return(n=this.data.settings)!=null&&n.overlay_use&&e.push({group_alias:t?"background:overlaytext":"background:overlay",options:{group_name:"overlay",group_title:"Overlay",selector:" .ecom-base-image .ecom-base-image-container-overlay"}}),e}}},_i={class:"ecom-element ecom-base-image"},hi={key:0},fi={class:"ecom-container-image ecom-image-align"},bi={key:0,class:"ecom-base-image ecom-overlay"},yi=["innerHTML"],vi=["innerHTML"],xi=["innerHTML"],wi={key:0,class:"ecom-base-image ecom-overlay"},ki=["innerHTML"],Ci=["innerHTML"],Ti=["innerHTML"],Li=["innerHTML"];function $i(e,t,o,n,s,i){return c(),d("div",_i,[i.image?(c(),d("figure",hi,[p("div",fi,[p("div",{class:S(["ecom-image-content-position ecom-image-default ecom-base-image-container-overlay",{"ecom-replace-notice":e.$helpers.isPreviewImage(JSON.stringify(i.image))}])},[o.data.settings.overlay_use===!0&&!i.link.href?(c(),d("div",bi,[o.data.settings.overlay_title==="alt"?(c(),d("span",{key:0,class:"ecom-overlay-text",innerHTML:i.image.alt},null,8,yi)):o.data.settings.overlay_title==="custom"?(c(),d("span",{key:1,class:"ecom-overlay-text",innerHTML:o.data.settings.overlay_title_custom},null,8,vi)):y("",!0)])):y("",!0),i.link.href?(c(),d("a",j({key:2},i.link,{class:"ecom-image-picture-link ecom-image-picture ecom-base-image-container-overlay ecom-flex"}),[o.data.settings.overlay_use===!0?(c(),d("div",wi,[o.data.settings.overlay_title==="alt"?(c(),d("span",{key:0,class:"ecom-overlay-text",innerHTML:i.image.alt},null,8,ki)):o.data.settings.overlay_title==="custom"?(c(),d("span",{key:1,class:"ecom-overlay-text",innerHTML:o.data.settings.overlay_title_custom},null,8,Ci)):y("",!0)])):y("",!0),p("picture",{innerHTML:e.$helpers.renImageResponsive(i.image,i.screens,i.lazyload,i.focalPoint)},null,8,Ti)],16)):(c(),d("picture",{key:1,class:"ecom-image-picture",innerHTML:e.$helpers.renImageResponsive(i.image,i.screens,i.lazyload,i.focalPoint)},null,8,xi))],2),i.isCaption()?(c(),d("figcaption",{key:0,class:"ecom-image__caption",innerHTML:o.data.settings.caption},null,8,Li)):y("",!0)])])):y("",!0)])}const Si=k(Ee,[["render",$i]]);Ee.__docgenInfo={exportName:"default",displayName:"Image",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Image.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const De={name:"AdvanceImage",presets:!1,docs:"https://help.ecomposer.io/docs/elements/basic-elements/image/",mixins:[T,H],vendors:["modal_js","modal_css"],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["overlay_title_custom"]}},computed:{imageComp(){return this.data},screens(){return this.$store.getters["builder/screens"]},useOverlay(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.overlay_use},hasButtonOverlay(){var e,t,o,n;return((t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.link)=="custom"&&((n=(o=this.data)==null?void 0:o.settings)==null?void 0:n.use_button)},enableLightBox(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.lightbox},horizontal_style(){var t,o,n,s;let e={};if((o=(t=this.data)==null?void 0:t.settings)!=null&&o.horizontal_btn)switch(this.data.settings.horizontal_btn){case"left":e.left=0;break;case"center":e.left="50%",((s=(n=this.data)==null?void 0:n.settings)==null?void 0:s.vertical_btn)=="center"?e.transform="translate(-50%, -50%)":e.transform="translateX(-50%)",e.margin="unset";break;case"right":e.right=0;break}return e},vertical_style(){var t,o,n,s,i,a;let e={};if((o=(t=this.data)==null?void 0:t.settings)!=null&&o.vertical_btn)switch(e.alignItems=(s=(n=this.data)==null?void 0:n.settings)==null?void 0:s.vertical,this.data.settings.vertical_btn){case"top":e.top=0;break;case"center":e.top="50%",((a=(i=this.data)==null?void 0:i.settings)==null?void 0:a.horizontal_btn)=="center"?e.transform="translate(-50%, -50%)":e.transform="translateY(-50%)",e.margin="unset";break;case"bottom":e.bottom=0;break}return e},image(){if(!this.data.settings)return;let{image:e={},size:t,size_custom:o}=this.data.settings;return Object.keys(e).length===0?null:(t==="custom"?t=o:t&&(t={width:t.split("x")[0],height:t.split("x")[1]}),{alt:e.name,...Object.keys(e).filter(n=>n.startsWith("value")).reduce((n,s)=>(n[s]=this.$helpers.resizeImage(e[s],t),n),{})})},imageHover(){if(!this.data.settings.hover_image)return;let{enable:e,image:t={},size:o,size_custom:n}=this.data.settings.hover_image;return Object.keys(t).length===0?null:(o==="custom"?o=n:o&&(o={width:o.split("x")[0],height:o.split("x")[1]}),{alt:t.name,...Object.keys(t).filter(s=>s.startsWith("value")).reduce((s,i)=>(s[i]=this.$helpers.resizeImage(t[i],o),s),{})})},link(){var t;let e={};if((t=this.image)!=null&&t.value){let{link:o,custom_link:n,lightbox:s}=this.data.settings;o==="lightbox"?(s==="yes"&&(e["ecom-modal"]="image",e["ecom-modal-source"]=this.image.value),e.href=this.image.value):o==="custom"&&(n==null?void 0:n.href)&&Object.assign(e,n)}return e},settings(){return[{group_title:"General",params:[{type:"popup",name:"link",label:"Link",options:{type:"dropdown",default:!1,values:{"":"None",lightbox:"Media File",custom:"Custom URL"}},css:{isCss:!1}},{type:"size",name:"size_custom",options:{visible:e=>e.size==="custom",warnings:{content:"You can crop the original image size to any custom size. You can also set a single value for height or width in order to keep the original size ratio."}}},{type:"link",name:"custom_link",options:{visible:e=>e.link==="custom"}},{type:"toggle",name:"use_button",label:"Show as button",description:"Must turn on overlay required to use this option.",options:{visible:e=>e.link==="custom",oneline:!0,values:{off:{label:"NO",value:!1},on:{label:"YES",value:!0}}},css:{isCss:!1}},{type:"toggle",name:"overlay_use",label:"Enable Overlay",options:{oneline:!0,values:{off:{label:"NO",value:!1},on:{label:"YES",value:!0}}},css:{isCss:!1}},{type:"popup",label:"Title source",name:"overlay_title",options:{default:!1,type:"dropdown",values:{alt:"Alt",custom:"Custom"},visible:e=>e.overlay_use===!0},css:{isCss:!1}},{type:"toggle",name:"use_caption",label:"Use image caption",options:{oneline:!0,values:{on:{label:"YES",value:!0},off:{label:"NO",value:!1}}},css:{isCss:!1}},{name:"line_extra",type:"line",options:{visible:e=>e.use_button===!0&&e.overlay_use==!0&&e.link=="custom"}},{name:"paragraph_extra",type:"paragraph",content:"<strong>Button</strong>",options:{visible:e=>e.use_button===!0&&e.overlay_use==!0&&e.link=="custom"}},{name:"overlay_title_custom",label:"Custom title",type:"text",options:{visible:e=>e.overlay_use===!0&&e.overlay_title=="custom"||e.use_button===!0&&e.overlay_use==!0&&e.link=="custom"}},{type:"toggle",name:"lightbox",label:"Open in lightbox",value:"yes",options:{values:{on:{label:"YES",value:"yes"},off:{label:"NO",value:"no"}},visible:e=>e.link==="lightbox",oneline:!0}},{type:"text",name:"caption",options:{placeholder:"Enter your caption",visible:e=>e.use_caption}},{type:"choose",label:"Content Aligntment",name:"content_alignment",value:"",options:{visible:e=>e.use_button===!0&&e.overlay_use==!0&&e.link=="custom",type:"text-align",values:["left","center","right"]},css:{selector:" .ecom-button-overlay",properties:{"text-align":""}}},{type:"choose",label:"Horizontal Position",name:"horizontal_btn",value:"",options:{visible:e=>e.use_button===!0&&e.overlay_use==!0&&e.link=="custom",type:"align-x-full",values:["left","center","right"]},css:{isCss:!1}},{type:"choose",label:"Vertical Position",name:"vertical_btn",value:"",options:{visible:e=>e.use_button===!0&&e.overlay_use==!0&&e.link=="custom",type:"align-y-full",values:["top","center","bottom"]},css:{isCss:!1}}]},{group_title:"Image",params:[{type:"picker",label:"Choose Image",name:"image",options:{responsive:!0,type:"image",editAlt:!0}},{type:"popup",label:"Crop size",name:"size",value:"",options:{type:"dropdown",default:!1,values:{"":"Original","400x300":"400 x 300px","800x450":"800 x 450px","500x500":"500 x 500px",custom:"Custom"}},css:{isCss:!1}}]},{group_name:"hover_image",group_title:"Hover Image",params:[{type:"toggle",name:"enable",label:"Display Hover Image",options:{oneline:!0,values:{off:{label:"NO",value:!1},on:{label:"YES",value:!0}}}},{type:"picker",label:"Choose Image",name:"image",options:{visible:e=>e.enable===!0,responsive:!0,type:"image",editAlt:!0}},{type:"popup",label:"Crop size",name:"size",value:"",options:{type:"dropdown",default:!1,visible:e=>e.enable===!0,values:{"":"Original","400x300":"400 x 300px","800x450":"800 x 450px","500x500":"500 x 500px",custom:"Custom"}},css:{isCss:!1}},{type:"size",name:"size_custom",options:{visible:e=>e.size==="custom",warnings:{content:"You can crop the original image size to any custom size. You can also set a single value for height or width in order to keep the original size ratio."}}}]}]},javascript(){return function(){if(!this.$el)return;const e=this.$el;if(this.settings.link==="lightbox"&&this.settings.lightbox==="yes"&&window.EComModal&&this.$el){var t=this.$el.querySelectorAll("[ecom-modal]");t.length&&new window.EComModal(t,{cssClass:["ecom-container-lightbox-"+this.id]})}if(this.settings.link!=="lightbox"&&this.settings.link!=="custom"&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){let o=e.querySelector(".ecom-image-picture-hover"),n=e.querySelector(".ecom-image-picture.ecom-image-has-hover");if(!o||!n)return;o.addEventListener("click",function(){n.classList.add("image-active"),o.classList.add("image-hidden")}),n.addEventListener("click",function(){n.classList.remove("image-active"),o.classList.remove("image-hidden")})}}},css(){return`
                .ecom-base-image.ecom-overlay > .ecom-overlay-text{
                    text-align:center
                }
                .ecom-image-align{
                    display:flex;
                }
                .ecom-image-picture-link,
                .ecom-image-picture{
                    overflow:hidden;
                    width:100%;
                    height:100%;
                }

                .ecom-image-pictures-wrapper {
                    position: relative;
                    width: 100%;
                }


                .ecom-base-image picture {
                    flex:1 1 auto;
                    min-height:1px;
                }

                .ecom-image-picture.ecom-image-has-hover,
                .ecom-overlay ~ .ecom-image-pictures-wrapper .ecom-image-picture.ecom-image-has-hover {
                    visibility: visible;
                    opacity: 1;
                    transition: .4s ease-in-out;
                }

                .ecom-image-pictures-wrapper:hover .ecom-image-picture.ecom-image-has-hover,
                .ecom-overlay:hover ~ .ecom-image-pictures-wrapper .ecom-image-picture.ecom-image-has-hover {
                    visibility: hidden;
                    opacity: 0;
                }

                .ecom-image-picture-hover {
                    position: absolute;
                    inset: 0;
                    visibility: hidden;
                    opacity: 0;
                    transition: .4s ease-in-out;
                }
                .ecom-image-picture-hover img {
                    height: 100%;
                }

                .ecom-image-pictures-wrapper:hover .ecom-image-picture-hover,
                .ecom-overlay:hover ~ .ecom-image-pictures-wrapper .ecom-image-picture-hover {
                    visibility: visible;
                    opacity: 1;
                }

                .ecom-base-image picture img{
                    display: block;
                    width:100%;
                }
                .ecom-base-image figure{
                    display: flex;
                }
                .ecom-container-image{
                    display: flex;
                    flex-direction: column;
                    width:100%;
                }
                .ecom-image-picture-link,
                .ecom-image-content-position{
                    position: relative;
                }
                .ecom-base-image.ecom-overlay {
                    position: absolute;
                    z-index: 1;
                    opacity: 0.5;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }

                .ecom-button-overlay {
                    position: absolute;
                    opacity: 0;
                    visibility: hidden;
                    transition: .2s ease-in-out;
                }

                .ecom-base-image.ecom-overlay:hover .ecom-button-overlay {
                    opacity: 1;
                    visibility: visible;
                }

                .ecom-image__caption{
                    width:100%;
                }
                @media screen and (max-width: 768px) {
                    .ecom-image-picture-hover.image-hidden { 
                        visibility: hidden !important;
                        opacity: 0 !important;
                    }
                    .ecom-image-picture.ecom-image-has-hover.image-active {
                        visibility: visible !important;
                        opacity: 1 !important;
                    }
                }
            `},default(){return{settings:{image:{value:"/images/placeholder.png"},link:"lightbox",lightbox:"no",use_caption:!1,caption:"Hello",overlay_use:!1,hover_image:{image:{value:"/images/placeholder.png"}},custom_link:{href:"#"},overlay_title_custom:"Content"},style:{image:{imageOpacitynormalmode:1,imageOpacityhovermode:1},imageAlign:"center",overlay:{opacity:0,backgroundhovermode:{classic:{"background-color":"rgba(17, 24, 39, 0.3)"}},opacityHover:1,tab:"normal",imageOpacity:1}}}}},watch:{imageHover:{deep:!0,handler:function(){this.refresh()}},enableLightBox:{deep:!0,handler:function(){this.refresh()}},useOverlay:{deep:!0,handler:function(){this.refresh()}}},methods:{refresh(){this.imageComp.refresh=this.$helpers.randid()},isCaption(){var e;return((e=this.data.settings)==null?void 0:e.use_caption)&&this.data.settings.caption},style(){var o,n,s,i;let e=[];if(this.image){let a,l=0;this.data.settings.hover_image.enable&&this.imageHover&&(a=2,l=1),e=[{group_alias:"image",options:{selector:" .ecom-base-image .ecom-image-default"},modify:{remove:[{index:7,length:l},{index:16,length:a}],params:[{position:0,fields:[{type:"choose",label:"Alignment",name:"imageAlign",options:{oneline:!0,responsive:!0,type:"text-align",values:["flex-start","center","flex-end"],visible:{keep_data:!1,condition:u=>u.imageWidth!=="100%"}},css:{selector:"root .ecom-image-align",properties:{"align-items":""}}}]},{position:8,fields:[{name:"normal_image_filter",label:"CSS Filters",type:"popup",options:{visible:u=>u.tab=="normal",oneline:!0,type:"filter"},css:{selector:"root .ecom-image-has-hover img"}}]}]}}]}this.imageHover&&this.data.settings.hover_image.enable&&e.push({group_name:"hover_image",group_title:"Hover Image",selector:" .ecom-base-image .ecom-image-picture-hover img",params:[{name:"imageObjectFit",label:"Image fit",type:"popup",options:{type:"dropdown",default:!1,values:{none:"None",fill:"Fill",contain:"Contain",cover:"Cover","scale-down":"Scale down"}},css:{properties:{"object-fit":""}}},{name:"imageOpacity",type:"number",label:"Opacity",options:{step:.01,min:.1,max:1},css:{properties:{opacity:""}}},{name:"imageAnimation",label:"Animation",type:"dropdown",options:{search:!0,type:"animation",size:"small"},css:{selector:"root .ecom-image-pictures-wrapper:hover .ecom-image-picture-hover, root .ecom-overlay:hover + .ecom-image-pictures-wrapper .ecom-image-picture-hover",properties:{animation:""}}},{name:"imageTransition",type:"number",label:'Transition Duration <span class="lowercase">(ms)</span>',options:{min:0,max:1500},css:{properties:{transition:"all %value%ms ease"}}}]}),this.isCaption()&&e.push({group_alias:"text",options:{group_name:"caption",group_title:"Caption",selector:" .ecom-base-image .ecom-image__caption"},modify:{params:{position:20,fields:{alias:"spacing"}}}});let t=((o=this.data.settings)==null?void 0:o.overlay_title)&&(this.data.settings.overlay_title=="alt"||this.data.settings.overlay_title_custom);return(n=this.data.settings)!=null&&n.overlay_use&&e.push({group_alias:t?"background:overlaytext":"background:overlay",options:{group_name:"overlay",group_title:"Overlay",selector:" .ecom-base-image .ecom-base-image-container-overlay"}}),(i=(s=this.data)==null?void 0:s.settings)!=null&&i.use_button&&e.push({group_alias:"button",options:{group_name:"overlay_button",group_title:"Overlay Button",selector:" .ecom-button-overlay"},modify:[{position:20,fields:{alias:"spacing"}}]}),e}}},Mi={class:"ecom-element ecom-base-image"},Hi={key:0},Bi={class:"ecom-container-image ecom-image-align"},qi={key:0,class:"ecom-base-image ecom-overlay"},Ei=["innerHTML"],Di=["innerHTML"],Ai={key:1,class:"ecom-image-pictures-wrapper"},zi=["innerHTML"],ji=["innerHTML"],Ii={key:0,class:"ecom-base-image ecom-overlay"},Pi=["innerHTML"],Ni=["innerHTML"],Vi=["textContent"],Wi={class:"ecom-image-pictures-wrapper"},Oi=["innerHTML"],Fi=["innerHTML"],Ui=["innerHTML"];function Ri(e,t,o,n,s,i){return c(),d("div",Mi,[i.image?(c(),d("figure",Hi,[p("div",Bi,[p("div",{class:S(["ecom-image-content-position ecom-image-default ecom-base-image-container-overlay",{"ecom-replace-notice":e.$helpers.isPreviewImage(JSON.stringify(i.image))}])},[o.data.settings.overlay_use===!0&&!i.link.href?(c(),d("div",qi,[o.data.settings.overlay_title==="alt"?(c(),d("span",{key:0,class:"ecom-overlay-text",innerHTML:i.image.alt},null,8,Ei)):o.data.settings.overlay_title==="custom"?(c(),d("span",{key:1,class:"ecom-overlay-text",innerHTML:o.data.settings.overlay_title_custom},null,8,Di)):y("",!0)])):y("",!0),i.link.href?(c(),z(W(i.hasButtonOverlay?"div":"a"),j({key:2},i.hasButtonOverlay?"":i.link,{class:["ecom-image-picture-link ecom-element-overlay ecom-base-image-container-overlay ecom-flex",i.imageHover?"":"ecom-image-picture"]}),{default:Q(()=>{var a,l;return[o.data.settings.overlay_use===!0?(c(),d("div",Ii,[o.data.settings.overlay_title==="alt"?(c(),d("span",{key:0,innerHTML:i.image.alt,class:"ecom-overlay-text"},null,8,Pi)):o.data.settings.overlay_title==="custom"&&i.hasButtonOverlay==!1?(c(),d("span",{key:1,class:"ecom-overlay-text",innerHTML:o.data.settings.overlay_title_custom},null,8,Ni)):i.hasButtonOverlay==!0?(c(),d("a",j({key:2,class:"ecom-button-overlay"},i.link,{style:[i.horizontal_style,i.vertical_style],textContent:I((l=(a=o.data)==null?void 0:a.settings)==null?void 0:l.overlay_title_custom)}),null,16,Vi)):y("",!0)])):y("",!0),p("div",Wi,[p("picture",{class:S(["ecom-image-picture",i.imageHover&&o.data.settings.hover_image.enable?"ecom-image-has-hover":""]),innerHTML:e.$helpers.renImageResponsive(i.image,i.screens,e.exporting)},null,10,Oi),i.imageHover&&o.data.settings.hover_image.enable?(c(),d("picture",{key:0,class:"ecom-image-picture-hover",innerHTML:e.$helpers.renImageResponsive(i.imageHover,i.screens,e.exporting)},null,8,Fi)):y("",!0)])]}),_:1},16,["class"])):(c(),d("div",Ai,[p("picture",{class:S(["ecom-image-picture",i.imageHover&&o.data.settings.hover_image.enable?"ecom-image-has-hover":""]),innerHTML:e.$helpers.renImageResponsive(i.image,i.screens,e.exporting)},null,10,zi),i.imageHover&&o.data.settings.hover_image.enable?(c(),d("picture",{key:0,class:"ecom-image-picture-hover",innerHTML:e.$helpers.renImageResponsive(i.imageHover,i.screens,e.exporting)},null,8,ji)):y("",!0)]))],2),i.isCaption()?(c(),d("figcaption",{key:0,class:"ecom-image__caption",innerHTML:o.data.settings.caption},null,8,Ui)):y("",!0)])])):y("",!0)])}const Yi=k(De,[["render",Ri]]);De.__docgenInfo={exportName:"default",displayName:"AdvanceImage",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/AdvanceImage.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const Ae={name:"Image",presets:!1,docs:"https://help.ecomposer.io/docs/elements/basic-elements/image/",mixins:[T,H],props:{data:{type:Object,default(){return{}}}},computed:{imageComp(){return this.data},screens(){return this.$store.getters["builder/screens"]},imgBefore(){var t;return this.data.settings?(t=this.data.settings)==null?void 0:t.beforeImage:void 0},imgAfter(){var t;return this.data.settings?(t=this.data.settings)==null?void 0:t.afterImage:void 0},ratioDefault(){var e;return(e=this.data.settings)==null?void 0:e.ratio},hasOverlay(){var e;return(e=this.data.settings)==null?void 0:e.overlay},iconSlide(){var e;return(e=this.data.settings)==null?void 0:e.icon},autoSlideHover(){var e;return(e=this.data.settings)==null?void 0:e.autoSlideHover},settings(){let e=[{group_title:"General",params:[{type:"tab",name:"tab",options:{tabs:[{name:"normal",title:"Before"},{name:"hover",title:"After"}]},css:{isCss:!1}},{type:"picker",name:"beforeImage",label:"Choose Image",options:{responsive:!0,type:"image",editAlt:!0,visible:function(t){return t.tab==="normal"}}},{type:"picker",name:"afterImage",label:"Choose Image",options:{responsive:!0,type:"image",editAlt:!0,visible:function(t){return t.tab==="hover"}}},{type:"number",name:"ratio",label:"Default Ratio",options:{units:{"%":{min:0,max:100}},reset:!1,responsive:!0},css:{selector:" .ecom-image_compare.ecom-image_compare-overlay img",properties:{"clip-path":"polygon(%value% 0%, %value% 100%, 0% 100%, 0% 0%)"}}},{type:"toggle",name:"autoSlideHover",label:"Auto slide on hover",options:{online:!0,values:{off:{label:"NO",value:!1},on:{label:"YES",value:!0}}}},{type:"popup",name:"orientation",label:"Orientation",options:{visible:function(t){return!1},default:!1,type:"dropdown",values:{horizontal:"Horizontal",vertical:"Vertical"}}},{type:"toggle",name:"overlay",label:"Overlay",options:{online:!0,values:{off:{label:"NO",value:!1},on:{label:"YES",value:!0}}}},{type:"picker",label:"Icon",name:"icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}}]}];return this.data.settings.overlay===!0&&e.push({group_title:"Overlay text",params:[{type:"text",name:"beforeText",label:"Before"},{type:"text",name:"afterText",label:"After"}]}),e},hasIcon(){var e;return(e=this.data.settings)==null?void 0:e.icon},javascript(){return function(){const e=this.$el,t=this.settings.autoSlideHover;let o="";var n=!0;if(!e)return;const s=e.querySelector(".ecom-img_comp-slider");if(!s)return;const i=e.querySelector(".ecom-image_compare-overlay img"),a=e.querySelector(".ecom-image_comp-overlay");s.onmouseover=function(){l()},s.onmouseout=function(){n&&u()},s&&i&&r(),window.addEventListener("resize",function(){s&&i&&(o=i.offsetWidth,r())});function l(){a&&a.classList.add("overlay-hidden")}function u(){a&&a.classList.remove("overlay-hidden")}function r(){var g=0,m,h,_;b(),t?e.onmouseover=function(w){f(w)}:(s.onmousedown=function(w){f(w)},e.onmouseup=function(){v()},s.ontouchstart=function(w){f(w)},e.ontouchend=function(){v()});function b(){s.style.left&&(o=i.offsetWidth,h=parseInt(s.style.left))}function f(w){n=!1,w.preventDefault(),w.clientX?m=w.clientX:m=w.touches[0].clientX,g=1,e.onmousemove=function($){x($)},e.ontouchmove=function($){x($)}}function v(){g=0,isNaN(_)||(h=_),n=!0,u()}function x(w){if(g==0)return!1;g==1&&l(),_=C(w),_<0&&(_=0),_>100&&(_=100),L(_)}function C(w){w=w.changedTouches?w.changedTouches[0]:w;var $;return t?$=Math.round(w.offsetX*100/o):$=Math.round(h-(m-w.pageX)*100/o),$}function L(w){s.style.left=w+"%",i.style.clipPath=`polygon(${w}% 0%, ${w}% 100%, 0% 100%, 0% 0%)`}}}},css(){return`
                .ecom-base_image-comparison {
                    overflow: hidden;
                }
                .ecom-image_compare-wrapper {
                    position: relative;
                }

                .ecom-overlay_autoslide-fake {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 15;
                    cursor: ew-resize;
                }

                .ecom-image_compare {
                    height: 100%;
                    width: 100%;
                }

                .ecom-image_compare.ecom-image_compare-overlay {
                    position: absolute;
                    width: auto;
                    height: 100%;
                    overflow: hidden;
                    width: 100%;
                    inset: 0;
                }

                .ecom-image_compare picture {
                    width: 100%;
                }

                .ecom-base_image-comparison .ecom-image_comp-overlay {
                    position: absolute;
                    inset: 0;
                    z-index: 8;
                    opacity: 0;
                    visibility: hidden;
                    transition: .35s all ease-in-out;
                }
                .ecom-base_image-comparison:hover .ecom-image_comp-overlay {
                    opacity: 1;
                    visibility: visible;
                }

                .ecom-base_image-comparison .ecom-image_comp-overlay.overlay-hidden {
                    opacity: 0;
                    visibility: hidden;
                }

                .ecom-image_comp-before,
                .ecom-image_comp-after {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 9;
                    min-height: 38px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255,255,255,.2);
                    padding: 0 20px;
                    -webkit-border-radius: 2px;
                    -moz-border-radius: 2px;
                    border-radius: 2px;
                    color: #fff;
                }

                .ecom-image_comp-before {
                    left: 10px;
                }

                .ecom-image_comp-after {
                    right: 10px;
                }

                .ecom-img_comp-slider {
                    position: absolute;
                    min-width: 45px;
                    min-height: 45px;
                    cursor: ew-resize;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transform: translate(-50%,-50%);
                    background: #fff;
                    border-radius: 100%;
                }

                .pulse {
                   animation: pulse-animation 1s ease-in-out 0s infinite alternate;
                }

                @keyframes pulse-animation {
                    0% {
                        box-shadow: 0px 0px 2px rgba(61, 61, 61, 0.8), 0 0 0 4px rgba(255, 255, 255, 0.15)
                    }
                    100% {
                        box-shadow: 0px 0px 2px rgba(61, 61, 61, 0.8), 0 0 0 12px rgba(255, 255, 255, 0.3)
                    }
                }

                .ecom-img_comp-slider .ecom-slide_icon {
                    display: flex;
                    z-index: 9;
                    padding: 12px;
                }

                .ecom-img_comp-slider::before {
                    content: '';
                    position: absolute;
                    display: block;
                    height: 9999px;
                    width: 4px;
                    left: 50%;
                    top: 100%;
                    background: #fff;
                    transform: translateX(-50%);
                    z-index: 8;
                }

                .ecom-img_comp-slider::after {
                    content: '';
                    position: absolute;
                    display: block;
                    height: 9999px;
                    width: 4px;
                    left: 50%;
                    bottom: 100%;
                    background: #fff;
                    transform: translateX(-50%);
                    transform-origin: top center;
                    z-index: 8;
                }

                .ecom-slide_button {
                    padding: 8px;
                    display: inline-flex;
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                }

                .ecom-slide_button > * + * {
                    margin-left: 8px;
                }

                span.ecom-slide_arrow {
                    width: min-content;
                    height: min-content;
                    display: block;
                }

                .ecom-slide_arrow--left,
                .ecom-slide_arrow--right {
                    border: 6px solid transparent;
                    border-right: 0;
                    border-left-color: currentColor;
                }

                .ecom-slide_arrow--left {
                    transform: rotate(180deg);
                }

                .ecom-image_compare-wrapper .ecom-image_compare img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    vertical-align: middle;
                    object-fit: cover;
                    object-position: center center;
                }

                .ecom-image_ratio-wrapper {
                    width: 100%;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 9;
                }

            `},default(){return{settings:{tab:"normal",beforeImage:{value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/com1com1.jpg?v=1661481717",thumbnail:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/com1com1.jpg?v=1661481717"},afterImage:{value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/com2com2.jpg?v=1661481843",thumbnail:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/com2com2.jpg?v=1661481843"},ratio:"50%",overlay:!0,beforeText:"Before",afterText:"After"},style:{general:{totalHeight:"520px"},icon:{iconFontSize:"22px",color:"#4b00e7"},overlay:{normalBackground:{classic:{"background-color":"rgba(0, 0, 0, 0.35)"}}}}}}},watch:{imgBefore:{deep:!0,handler:function(e){this.refresh()}},imgAfter:{deep:!0,handler:function(e){if(this.$refs.imgCompare)var t=this.$refs.imgCompare.querySelector("img");e?this.refresh():t&&(t.style.clipPath="unset")}},"data.settings.overlay":{deep:!0,handler:function(){this.refresh()}},"data.settings.ratio":{deep:!0,handler:function(e){if(this.$refs.ratioPoint&&(this.$refs.ratioPoint.style.left=e,this.$refs.imgCompare)){var t=this.$refs.imgCompare.querySelector("img");t&&(t.style.clipPath=`polygon(${e} 0%, ${e} 100%, 0% 100%, 0% 0%)`)}}},"data.settings.icon":{deep:!0,handler:function(){this.refresh()}},"data.settings.autoSlideHover":{deep:!0,handler:function(){this.refresh()}}},methods:{refresh(){this.imageComp.refresh=this.$helpers.randid()},style(){let e=[];e.push({group_title:"General",group_name:"general",params:[{type:"popup",name:"iamgeBorder",label:"Border",options:{oneline:!0,type:"border",size:"small"},css:{selector:""}},{type:"dimension",name:"imageBorderRadius",label:"Border Radius",options:{type:"radius",responsive:!0,units:"default"},css:{selector:"",properties:{"border-radius":"",overflow:"hidden"}}},{type:"popup",name:"imageBoxShadow",label:"Box Shadow",options:{oneline:!0,type:"box-shadow"},css:{selector:""}},{name:"spacing",type:"dimension",label:"Spacing",options:{responsive:!0,units:{margin:{px:{min:-1e3,max:1e3},"%":{min:-100,max:100},em:{min:-100,max:100},rem:{min:-100,max:100}},padding:{px:{min:0,max:1e3},"%":{min:0,max:100},em:{min:0,max:100},rem:{min:0,max:100}}}},css:{selector:""}}]}),this.hasOverlay&&e.push({group_title:"Overlay",group_name:"overlay",params:[{type:"background",label:"Background",name:"normalBackground",options:{oneline:!0,responsive:!0},css:{selector:" .ecom-image_comp-overlay",properties:{background:""}}}]},{group_title:"Overlay Text",group_name:"overlayText",selector:" .ecom-image_comp-text",params:[{type:"popup",label:"Typography",name:"textTypography",options:{global:{type:"typography"},oneline:!0,responsive:!0,type:"typography"}},{name:"textColor",label:"Text Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{color:""}}},{name:"textTextShadow",label:"Text Shadow",type:"popup",options:{oneline:!0,type:"text-shadow"}}]}),e.push({group_title:"Spacing bar",group_name:"spacingBar",params:[{name:"color",label:"Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{selector:" .ecom-img_comp-slider, root .ecom-img_comp-slider::before, root .ecom-img_comp-slider::after",properties:{"background-color":""}}},{type:"popup",name:"boxShadow",label:"Box Shadow",options:{oneline:!0,type:"box-shadow"},css:{selector:" .ecom-img_comp-slider, root .ecom-img_comp-slider::before, root .ecom-img_comp-slider::after"}},{type:"number",label:"Size",name:"size",options:{units:{px:{min:0,max:20,step:1}}},css:{selector:" .ecom-img_comp-slider::before, root .ecom-img_comp-slider::after",properties:{width:""}}}]});let t=[...ae("root .ecom-img_comp-slider:hover").params].splice(0,13);return this.hasIcon?e.push({group_title:"Spacing Icon",group_name:"icon",selector:" .ecom-img_comp-slider",params:[...t],modify:{remove:{index:1,length:4}}}):e.push({group_title:"Spacing Icon",group_name:"icon",selector:" .ecom-slide_button svg",params:[{name:"color",label:"Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{fill:""}}},{type:"number",label:"Size",name:"size",options:{units:{px:{min:0,max:150,step:1}}},css:{properties:{width:"",height:""}}}]}),e}}},Gi=["data-auto-slide-hover"],Ji={class:"ecom-image_compare-wrapper"},Zi=["innerHTML"],Ki={key:1,class:"ecom-image_comp-overlay"},Xi={key:0,class:"ecom-image_comp-before"},Qi=["innerHTML"],en={key:1,class:"ecom-image_comp-after"},tn=["innerHTML"],on={key:2,class:"ecom-overlay_autoslide-fake"},nn={class:"ecom-image_ratio-wrapper"},sn=["innerHTML"],an={key:1,class:"ecom-slide_button"},rn=p("svg",{width:"28",height:"28",viewBox:"0 0 44 44",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[p("path",{d:"M16 14L7 22L16 30L16 14Z"}),p("path",{d:"M28 30L37 22L28 14V30Z"})],-1),ln=[rn],cn=["innerHTML"];function pn(e,t,o,n,s,i){var a,l,u,r;return c(),d("div",{"data-stopdrag":"","data-auto-slide-hover":i.autoSlideHover?"true":"false",class:"ecom-element ecom-base_image-comparison"},[p("div",Ji,[i.imgAfter?(c(),d("picture",{key:0,class:"ecom-image_compare",innerHTML:e.$helpers.renImageResponsive(i.imgAfter?i.imgAfter:"",i.screens)},null,8,Zi)):y("",!0),i.hasOverlay?(c(),d("div",Ki,[(a=o.data.settings)!=null&&a.beforeText?(c(),d("div",Xi,[p("span",{class:"ecom-image_comp-text",innerHTML:e.lang((l=o.data.settings)==null?void 0:l.beforeText)},null,8,Qi)])):y("",!0),(u=o.data.settings)!=null&&u.afterText?(c(),d("div",en,[p("span",{class:"ecom-image_comp-text",innerHTML:e.lang((r=o.data.settings)==null?void 0:r.afterText)},null,8,tn)])):y("",!0)])):y("",!0),i.autoSlideHover?(c(),d("div",on)):y("",!0),p("div",nn,[i.imgBefore&&i.imgAfter?(c(),d("div",{key:0,class:"ecom-img_comp-slider pulse",style:E({left:i.ratioDefault}),ref:"ratioPoint"},[i.iconSlide?(c(),d("span",{key:0,class:"ecom-slide_icon",innerHTML:i.iconSlide},null,8,sn)):(c(),d("div",an,ln))],4)):y("",!0)]),i.imgBefore?(c(),d("picture",{key:3,ref:"imgCompare",class:"ecom-image_compare ecom-image_compare-overlay",innerHTML:e.$helpers.renImageResponsive(i.imgBefore?i.imgBefore:"",i.screens)},null,8,cn)):y("",!0)])],8,Gi)}const mn=k(Ae,[["render",pn]]);Ae.__docgenInfo={exportName:"default",displayName:"Image",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/ImageComparison.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const ze={name:"BaseBreadcrumbs",docs:"https://help.ecomposer.io/docs/elements/basic-elements/breadcrumbs/",presets:!0,mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{params(){return this.$store.getters["page/params"]},liquids(){var e,t,o,n,s,i,a,l,u,r,g,m,h,_,b;return{breadcrumbs:{code:`
                      {%- if EComBuilderMode -%}
                        {% capture page_type %}${(e=this.params)==null?void 0:e.page}{% endcapture %}
                      {%- else -%}
                        {%- assign page_type = request.page_type %}
                      {%- endif %}

                      {%- capture icon_parent -%}
                      ${(o=(t=this.data.settings)==null?void 0:t.general)!=null&&o.icon_parent?`<span class="ecom-base__breadcrumbs--icon">
                            ${(s=(n=this.data.settings)==null?void 0:n.general)==null?void 0:s.icon_parent}
                          </span>
                        `:""}
                      {%- endcapture -%}
                      {%- capture icon_breadcrumbs -%}
                      ${(a=(i=this.data.settings)==null?void 0:i.general)!=null&&a.icon_breadcrumbs?`<span class="ecom-base__breadcrumbs--icon">
                            ${(u=(l=this.data.settings)==null?void 0:l.general)==null?void 0:u.icon_breadcrumbs}
                          </span>
                        `:""}
                      {%- endcapture -%}

                      {%- unless page_type == 'index'  or page_type == 'list-collections' or page_type == '404' -%}

                      <nav class="ecom-base__breadcrumbs ecom-flex" role="navigation" aria-label="breadcrumbs">
                        <div class="ecom-base__breadcrumbs__list">
                            {{ icon_parent }}<a class="ecom-base__breadcrumbs__link" href="/">${this.lang((g=(r=this.data.settings)==null?void 0:r.general)!=null&&g.home_text?(h=(m=this.data.settings)==null?void 0:m.general)==null?void 0:h.home_text:"Home","breadcrumbs_home")}</a>
                          {%- case page_type -%}
                            {%- when 'page' -%}
                                {{ icon_breadcrumbs }}
                                {%- if EComBuilderMode -%}
                                  <a class="ecom-base__breadcrumbs__link" href="#" aria-current="page">Untitled</a>
                                {%- else -%}
                                  <a class="ecom-base__breadcrumbs__link" href="{{ page.url }}" aria-current="page">{{ page.title }}</a>
                                {%- endif -%}
                            {%- when 'cart' -%}
                                {{ icon_breadcrumbs }}
                                  <a class="ecom-base__breadcrumbs__link" href="{{ routes.cart_url }}" aria-current="cart">${this.lang((b=(_=this.data.settings)==null?void 0:_.general)==null?void 0:b.cart_page_title,"cart_page_title")}</a>
                            {%- when 'product' -%}
                              {%- if collection.url -%}
                                  {{ icon_breadcrumbs }}{{ collection.title | link_to: collection.url }}
                              {%- endif -%}
                                {{ icon_breadcrumbs }}<a class="ecom-base__breadcrumbs__link" href="{{ product.url }}" aria-current="page">{{ product.title }}</a>
                            {%- when 'collection' and collection.handle -%}
                              {%- if current_tags -%}
                                  {{ icon_breadcrumbs }}{{ collection.title | link_to: collection.url }}
                                  {%- capture tag_url -%}{{ collection.url }}/{{ current_tags | join: "+"}}{%- endcapture -%}
                                  {{ icon_breadcrumbs }}<a class="ecom-base__breadcrumbs__link" href="{{ tag_url }}" aria-current="page">{{ current_tags | join: " + "}}</a>
                              {%- else -%}
                                  {{ icon_breadcrumbs }}<a class="ecom-base__breadcrumbs__link" href="{{ collection.url }}" aria-current="page">{{ collection.title }}</a>
                              {%- endif -%}
                            {%- when 'blog' -%}
                              {%- if current_tags -%}
                                  {{ icon_breadcrumbs }}{{ blog.title | link_to: blog.url }}
                                  {%- capture tag_url -%}{{blog.url}}/tagged/{{ current_tags | join: "+" }}{%- endcapture -%}
                                  {{ icon_breadcrumbs }}<a class="ecom-base__breadcrumbs__link" href="{{ tag_url }}" aria-current="page">{{ current_tags | join: " + " }}</a>
                              {%- else -%}
                                  {{ icon_breadcrumbs }}<a class="ecom-base__breadcrumbs__link" href="{{ blog.url }}" aria-current="page">{{ blog.title }}</a>
                              {%- endif -%}
                            {%- when 'article' -%}
                                {{ icon_breadcrumbs }}{{ blog.title | link_to: blog.url }}
                                {{ icon_breadcrumbs }}<a class="ecom-base__breadcrumbs__link" href="{{ article.url }}" aria-current="page">{{ article.title }}</a>
                            {%- else -%}
                                {{ icon_breadcrumbs }}<a class="ecom-base__breadcrumbs__link" href="{{ request.path }}" aria-current="page">{{ page_title }}</a>
                          {%- endcase -%}
                        </div>
                      </nav>
                      {%- endunless -%}{%- assign page_type = request.page_type %}
                    `,preview:`<div class="ecom-skeleton-item">
                          <div>
                              <div class="ecom-skeleton-row">
                                  <div class="ecom-skeleton-col-4"></div>
                                  <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                  <div class="ecom-skeleton-col-6"></div>
                                  <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                  <div class="ecom-skeleton-col-2"></div>
                                  <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                              </div>
                          </div>
                      </div>`}}},params(){return this.$store.getters["page/params"]},settings(){return[{group_name:"general",group_title:"General",params:[{type:"paragraph",options:{warnings:{content:"Breadcrumbs in Editor is sample data"}}},{type:"text",label:"Home text",name:"home_text",value:"Home"},{type:"text",label:"Cart page title",name:"cart_page_title",value:"Cart"},{type:"picker",label:"First Parent Icon",name:"icon_parent",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"picker",label:"Breadcrumbs Icon",name:"icon_breadcrumbs",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}}]}]},css(){return`

          `},default(){return{settings:{general:{home_text:"Home",cart_page_title:"Cart",icon_parent:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-primary" d="M256 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L370.8 256l-137.4-137.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C272.4 444.9 264.2 448 256 448z"></path><path class="fa-secondary" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>',icon_breadcrumbs:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" fill="currentColor"><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-secondary" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>'}},style:{icon:{iconFontSize:"13px",spacing:{margin:{right:"2px"}}},breadcrumbs_link:{textTextAlign:"right",textTypography:{"font-size":"15px","text-decoration":"none"},textColor:"#1f1b1b"}}}},requestShopifyType(){var o;const e=(o=this.params)==null?void 0:o.page;return["collection","product","blog","article","page"].includes(e)?e:null}},methods:{style(){return[{group_alias:"box",options:{group_title:"Gerenal",group_name:"gerenal",selector:" .ecom-base__breadcrumbs"},modify:{params:[{position:0,fields:[{alias:"justify-content",options:{label:"Alignment"}}]},{position:5,fields:[{alias:"spacing"}]}]}},{group_alias:"text",options:{group_title:"Breadcrumbs Link",group_name:"breadcrumbs_link",selector:" .ecom-base__breadcrumbs__list a"},modify:{remove:{index:0,length:1}}},{group_alias:"icon",options:{group_title:"Icon",group_name:"icon",selector:" .ecom-base__breadcrumbs--icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}}]}}},dn=["innerHTML"];function un(e,t,o,n,s,i){return c(),d("div",{class:"ecom-element ecom-base ecom-base__breadcrumbs--wrapper",innerHTML:e.liquid("breadcrumbs")},null,8,dn)}const gn=k(ze,[["render",un]]);ze.__docgenInfo={exportName:"default",displayName:"BaseBreadcrumbs",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Breadcrumbs.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const je={name:"Table",presets:!0,docs:"https://help.ecomposer.io/docs/elements/basic-elements/table/",mixins:[T],props:{data:{type:Object,default(){return{}}}},data(){return{editing:!1}},computed:{table(){return this.data.settings},table_columns(){return this.data.settings.layout=="horizontal"?this.data.settings.columns:this.data.settings.columns+1},settings(){return[{group_title:"General",params:[{name:"layout",type:"dropdown",label:"Layout",options:{default:!1,values:{horizontal:"Horizontal",vertical:"Vertical"}}},{name:"rows",type:"number",label:"Row",options:{min:1,max:50}},{name:"columns",type:"number",label:"Column",options:{min:1,max:20}},{type:"line"},{type:"popup",name:"border_collapse",label:"Border collapse",options:{type:"dropdown",default:!1,values:{collapse:"Collapse",separate:"Separate",inherit:"Inherit"}},css:{properties:{"border-collapse":""},selector:" .ecom-element-table table"}},{type:"number",name:"border_spacing",label:"Border spacing",options:{visible:e=>e.border_collapse=="separate"||e.border_collapse=="inherit",units:{px:{min:0,max:30}}},css:{properties:{"border-spacing":""},selector:" .ecom-element-table table"}},{name:"table_data",type:"textarea",options:{visible:e=>!1}}]}]},css(){return`
              .ecom-element-table {
                overflow-x: auto;
              }
              .ecom-element-table td {
                font-weight: inherit;
              }
              .ecom-element-table table {
                overflow: hidden;
              }
              .ecom-element-table td, .ecom-element-table tr, .ecom-element-table th {
                white-space: pre;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            `},default(){return{settings:{table_data:{"column-00":"Content","column-01":"Content","column-02":"Content","column-03":"Content","column-04":"Content","column-05":"Content"},table_heading:{"column-0":"Heading 1","column-1":"HEADING 2","column-2":"HEADING 3","column-3":"HEADING 4","column-4":"HEADING 5","column-5":"HEADING 6"},rows:6,columns:6,layout:"horizontal"},style:{heading:{"background-color":"#0691b1",textColor:"#fff",border:{"border-style":"none"},textTypography:{"font-weight":"400","text-transform":"uppercase"},textTextAlign:"center",col_vertical:"middle",th_height:"50px"},gerenal:{boxBorder:{"border-style":"solid","border-width":{bottom:"0.8px",left:"0.8px",right:"0.8px",top:"0.8px"},"border-color":"#0691b1"},spacing:{margin:{top:"30px",left:"0px",bottom:"30px",right:"0px"}},boxShadow:{"box-shadow":{color:"#ffffff",vertical:"0px"}}},table_row:{row_odd_bg:"rgba(255, 255, 255, 0.16)","background-color":"rgba(6, 145, 177, 0.16)",border:{"border-style":"none"},row_height:"50px",color:"#000000",row_odd_color:"#0a0a0a"},table_col:{border:{"border-style":"dotted","border-width":{top:"0.8px",left:"0.8px",bottom:"0.8px",right:"0.8px"},"border-color":"rgba(15, 105, 125, 0.16)"},textTextAlign:"center",col_vertical:"middle"}}}}},watch:{},methods:{changeContent(e){var s;this.editing=!0;let t=e.target.innerText?e.target.innerText:"",o=e.target.dataset.col,n=e.target.dataset.row;if(o&&n)if(((s=this.table)==null?void 0:s.layout)=="vertical")if(o==0){let i="column-"+n;this.table.table_heading[i]=t}else{o-=1;let i="column-"+n+o;this.table.table_data[i]=t}else{let i="column-"+n+o;this.table.table_data[i]=t}},changeHeading(e){this.editing=!0;let t=e.target.innerText,o=e.target.dataset.index;o=o<10?"0"+o:o,t&&o&&(this.table.table_heading?this.table.table_heading[o]=t:(this.table.table_heading=Object,this.table.table_heading[o]=t))},printContent(e,t,o){var n,s,i,a,l;if(o=="data")if(((n=this.table)==null?void 0:n.layout)=="vertical")if(t==0){let u="column-"+e;return(s=this.table)!=null&&s.table_heading[u]?this.table.table_heading[u]:""}else{t-=1;let u="column-"+e+t;return(i=this.table)!=null&&i.table_data[u]?this.table.table_data[u]:""}else{let u="column-"+e+t;return(a=this.table)!=null&&a.table_data[u]?this.table.table_data[u]:""}else{let u="column-"+t;return(l=this.table)!=null&&l.table_heading[u]?this.table.table_heading[u]:""}},style(){return[{group_alias:"box",options:{group_title:"Gerenal",group_name:"gerenal",selector:" .ecom-element-table table"},modify:{params:[{position:0,fields:[{name:"Table Width",label:"Width",type:"number",options:{responsive:!0,units:{px:{min:0,max:1600},"%":{min:0,max:100}}},css:{properties:{width:""}}},{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-element-table"}}}]},{position:6,fields:[{alias:"spacing"}]}]}},{group_alias:"text",options:{group_title:"Heading",group_name:"heading",selector:" .ecom-element-table th"},modify:{params:[{position:1,fields:[{type:"choose",label:"Vertical align",name:"col_vertical",options:{oneline:!0,responsive:!0,type:"align-y-full",values:["top","middle","bottom"]},css:{properties:{"vertical-align":""}}}]},{position:4,fields:[{alias:"background-color"},{alias:"border"},{name:"th_min_width",label:"Width",type:"number",options:{responsive:!0,units:{px:{min:0,max:1e3}}},css:{properties:{"min-width":""}}},{name:"th_height",label:"Min height",type:"number",options:{responsive:!0,units:{px:{min:0,max:300}}},css:{properties:{height:""}}},{alias:"padding"}]}]}},{group_title:"Table row",group_name:"table_row",selector:" .ecom-element-table tbody tr",params:[{alias:"border"},{name:"row_height",label:"Min height",type:"number",options:{responsive:!0,units:{px:{min:0,max:300}}},css:{properties:{height:""}}},{type:"color",label:"Odd Row background",name:"row_odd_bg",selector:"root .ecom-element-table tbody tr:nth-child(odd)",options:{global:{type:"colors"},oneline:!0},css:{properties:{"background-color":""}}},{type:"color",label:"Odd Row color",name:"row_odd_color",selector:"root .ecom-element-table tbody tr:nth-child(odd)",options:{global:{type:"colors"},oneline:!0},css:{properties:{color:""}}},{type:"popup",label:"Odd Row Typography",name:"row_odd_typography",options:{global:{type:"typography"},oneline:!0,type:"typography"},css:{selector:"root .ecom-element-table tbody tr:nth-child(odd)"}},{type:"line"},{alias:"background-color",group_name:"row_even_bg",options:{label:"Even Row background",css:{selector:"root .ecom-element-table tbody tr:nth-child(even)"}}},{alias:"color",group_name:"row_even_color",options:{label:"Even Row Color",css:{selector:"root .ecom-element-table tbody tr:nth-child(even)"}}},{type:"popup",label:"Even Row Typography",name:"row_even_typography",options:{global:{type:"typography"},oneline:!0,type:"typography"},css:{selector:"root .ecom-element-table tbody tr:nth-child(even)"}}]},{group_alias:"text",options:{group_title:"Table col",group_name:"table_col",selector:" .ecom-element-table tbody td"},modify:{params:[{position:1,fields:[{type:"choose",label:"Vertical align",name:"col_vertical",options:{oneline:!0,responsive:!0,type:"align-y-full",values:["top","middle","bottom"]},css:{properties:{"vertical-align":""}}}]},{position:4,fields:[{alias:"background-color"},{alias:"border"},{alias:"padding"}]}]}}]}}},_n=["data-stopdrag"],hn={key:0},fn={key:0},bn=["data-index","innerHTML"],yn=["data-row"];function vn(e,t,o,n,s,i){return c(),d("div",{ref:"wrapper",class:"ecom__element ecom-element-table ecom-flex","data-stopdrag":s.editing?"true":null,"data-disable-inline-editor":""},[i.table.rows&&i.table.columns?(c(),d("table",hn,[i.table.layout=="horizontal"?(c(),d("thead",fn,[p("tr",null,[(c(!0),d(D,null,Y(i.table.columns,(a,l)=>(c(),d("th",{key:l,"data-index":"column-"+l,contenteditable:"true",onBlur:t[0]||(t[0]=(...u)=>i.changeHeading&&i.changeHeading(...u)),innerHTML:i.printContent("0",l,"heading")},null,40,bn))),128))])])):y("",!0),p("tbody",null,[(c(!0),d(D,null,Y(i.table.rows,(a,l)=>(c(),d("tr",{key:"row"+l,"data-row":"row-"+l},[(c(!0),d(D,null,Y(i.table_columns,(u,r)=>(c(),z(W(i.table.layout=="horizontal"||r!=0?"td":"th"),{key:"col-"+r,contenteditable:"true","data-col":r,"data-row":l,"data-index":"column-"+l+r,onBlur:i.changeContent,innerHTML:i.printContent(l,r,"data")},null,40,["data-col","data-row","data-index","onBlur","innerHTML"]))),128))],8,yn))),128))])])):y("",!0)],8,_n)}const xn=k(je,[["render",vn]]);je.__docgenInfo={exportName:"default",displayName:"Table",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Table.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts"]};const Ie={name:"Banner",presets:!0,docs:"",mixins:[T],props:{data:{type:Object,default(){return{}}}},data(){return{}},computed:{image(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.image.image},screens(){return this.$store.getters["builder/screens"]},attrLink(){var e,t,o;return(o=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.button)==null?void 0:o.link},lazyload(){var e;return((e=this.data.settings)==null?void 0:e.disable_lazyload)!==!0},banner_style(){var t,o,n,s,i;let e={};if((o=(t=this.data)==null?void 0:t.settings)!=null&&o.horizontal){let a="";switch(this.data.settings.horizontal){case"left":a="0 auto 0 0";break;case"center":a="0 auto";break;case"right":a="0 0 0 auto";break}e.margin=a}return(s=(n=this.data)==null?void 0:n.settings)!=null&&s.content_alignment&&(e.textAlign=(i=this.data.settings)==null?void 0:i.content_alignment),e},vertical_style(){var t,o,n,s;let e={};return(o=(t=this.data)==null?void 0:t.settings)!=null&&o.vertical&&(e.alignItems=(s=(n=this.data)==null?void 0:n.settings)==null?void 0:s.vertical),e},settings(){return[{group_title:"Image",group_name:"image",params:[{type:"picker",label:"Choose Image",name:"image",options:{responsive:!0,type:"image",editAlt:!0}},{type:"link",label:"Image link",name:"image_link"}]},{group_title:"Content",params:[{type:"textarea",label:"Heading",name:"heading",options:{toolbar:"full",height:150}},{type:"textarea",label:"Sub Heading",name:"subheading",options:{toolbar:"full",height:150}},{type:"textarea",label:"Content",name:"content",options:{toolbar:"full",height:250}}]},{group_alias:"button:settings",options:{group_name:"button",group_title:"Button"},modify:{}},{group_title:"Settings",params:[{type:"choose",label:"Horizontal Position",name:"horizontal",value:"",options:{type:"align-x-full",values:["left","center","right"]},css:{isCss:!1}},{type:"choose",label:"Vertical Position",name:"vertical",value:"",options:{type:"align-y-full",values:["flex-start","center","flex-end"]},css:{isCss:!1}},{type:"line"},{type:"toggle",name:"overlay_use",label:"Enable Overlay",options:{oneline:!0,values:{off:{label:"NO",value:!1},on:{label:"YES",value:!0}}},css:{isCss:!1}},{type:"toggle",name:"disable_lazyload",label:"Disable lazyload",options:{oneline:!0,values:{off:{label:"NO",value:!1},on:{label:"YES",value:!0}}},css:{isCss:!1}},{type:"popup",label:"Hover Animation",name:"animation",options:{type:"dropdown",values:"animation",size:"small"},css:{selector:"root .ecom-banner__hzoom:hover img",properties:{animation:""}}},{type:"popup",label:"Transition",name:"transition",options:{type:"transitions"},css:{selector:"root .ecom-banner__image-picture img"}}]}]},css(){return`
              .ecom-banner__button {
                text-decoration: none;
                pointer-events: auto;
              }
              .ecom-banner__hzoom {
                position: relative;
                overflow: hidden;
              }

              .ecom-masonry__nt_promotion_html {
                position: absolute;
                max-width: 100%;
                z-index: 10;
                pointer-events: none;
              }
              .ecom-banner__overlay {
                position: absolute;
                background-color: #000;
                z-index: 1;
                opacity: 0.3;
                display: flex;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                pointer-events: none;
              }
              .ecom-banner__image-picture {
                display: block;
              }

              .ecom-banner__picture-link,
              .ecom-banner__image-picture {
                width: 100%;
                object-fit: contain;
              }

              .ecom-banner__image-picture img {
                width: 100%;
              }


            `},default(){return{settings:{image:{image:{name:"Deal-Banner",ext:"jpg",value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/Deal-Banner.jpg?v=1652079644",thumbnail:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/Deal-Banner.jpg?v=1652079644&width=250&height=250&crop=center"}},animation:"grow",transition:{transitions:{duration:"1400ms",delay:"0ms"}},heading:"For Selected Brands",subheading:"80% Off",content:"<div>Also credit card user will get 15% cash\xA0</div><div>back on purchase over $300</div>",overlay_use:!0,horizontal:"center",vertical:"center",button:{link:{href:""}}},style:{button:{buttonBackgroundnormalmode:{classic:{"background-color":"rgba(5, 150, 105, 0.8)"}},buttonColornormalmode:"#000",spacing:{padding:{bottom:"10px",top:"10px",left:"24px",right:"24px"}}},heading:{textColor:"#ffffff",textTypography:{"font-weight":"500","font-family":{name:"Be Vietnam Pro",value:"https://fonts.googleapis.com/css?family=Be+Vietnam+Pro:100,200,300,400,500,600,700,800,900",thumbnail:"Be Vietnam Pro"},"font-size":"16px","line-height":"56px"},textTextAlign:"center"},Image:{tab:"normal",imageWidth:"100%"},subheading:{textColor:"#ffffff",textTypography:{"font-family":{name:"Be Vietnam Pro",value:"https://fonts.googleapis.com/css?family=Be+Vietnam+Pro:100,200,300,400,500,600,700,800,900",thumbnail:"Be Vietnam Pro"},"font-size":"68px","line-height":"60px","font-weight":"600"}},content:{textColor:"#ffffff",spacing:{margin:{top:"75px",bottom:"25px"}},textTypography:{"font-family":{name:"Be Vietnam Pro",value:"https://fonts.googleapis.com/css?family=Be+Vietnam+Pro:100,200,300,400,500,600,700,800,900",thumbnail:"Be Vietnam Pro"}}},banner_image:{tab:"normal"},banner_heading:{textTypography:{"font-family":{name:"Be Vietnam Pro",value:"https://fonts.googleapis.com/css?family=Be+Vietnam+Pro:100,200,300,400,500,600,700,800,900",thumbnail:"Be Vietnam Pro"},"font-size":"16px","line-height":"58px","font-weight":"400"},textColor:"#ffffff",textTextAlign:"center"},banner_subheading:{textColor:"#ffffff",textTextAlign:"center",textTypography:{"font-family":{name:"Be Vietnam Pro",value:"https://fonts.googleapis.com/css?family=Be+Vietnam+Pro:100,200,300,400,500,600,700,800,900",thumbnail:"Be Vietnam Pro"},"font-size":"68px"}},banner_content:{textTextAlign:"center",textColor:"#ffffff"},overlay:{tab:"normal",imageOpacity:.15},banner_button:{tab:"normal",buttonColornormalmode:"#ffffff",buttonBackgroundnormalmode:{classic:{"background-color":"#0691b1"}},spacing:{margin:{top:"15px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"10px",left:"10px",bottom:"10px",right:"10px"}},buttonWidthnormalmode:"50%",button_alignment:"center",text_alignment:"center"},icon:{iconFontSize:"24px",spacing:{margin:{left:"0px"}}}}}}},methods:{style(){let e=[{group_alias:"image",options:{group_name:"banner_image",group_title:"Image",selector:" .ecom-image-default"},modify:{remove:{index:15,length:2}}},{group_alias:"box",options:{group_title:"Content Wrapper",group_name:"content_wrapper",selector:" .ecom-banner_wrap_html_block"},modify:{params:[{position:0,fields:[{alias:"width"}]},{position:5,fields:[{alias:"spacing"}]}]}},{group_alias:"text",options:{group_title:"Heading",group_name:"banner_heading",selector:" .ecom-banner__heading"},modify:{params:[{position:5,fields:[{alias:"spacing"}]}]}},{group_alias:"text",options:{group_title:"Sub Heading",group_name:"banner_subheading",selector:" .ecom-banner__subheading"},modify:{params:[{position:5,fields:[{alias:"spacing"}]}]}},{group_alias:"text",options:{group_title:"Content",group_name:"banner_content",selector:" .ecom-banner__content"},modify:{params:[{position:5,fields:[{alias:"spacing"}]}]}},{group_alias:"button",options:{group_title:"Button",group_name:"banner_button",selector:" .ecom-banner__button"},modify:{params:[{position:0,fields:[{alias:"align-items",options:{label:"Alignment",name:"button_alignment",css:{properties:{"align-self":""}}}},{alias:"align-items",options:{label:"Text Alignment",name:"text_alignment",css:{properties:{"justify-content":""}}}}]}]}},{group_alias:"icon:hover",options:{group_title:"Icon",group_name:"icon",selector:" .ecom-elements__banner-button-icon"},modify:{params:{position:20,fields:{alias:"spacing"}}}}];return this.data.settings.overlay_use&&e.push({group_alias:"background:overlay",options:{group_name:"overlay",group_title:"Overlay",selector:" .ecom-banner__hzoom"}}),e}}},wn={class:"ecom__element ecom-element__banner"},kn={class:"ecom-banner__hzoom ecom-masonry__nt_promotion ecom-image-default"},Cn={key:0,class:"ecom-banner__overlay ecom-overlay"},Tn=["innerHTML"],Ln=["href","target"],$n=["innerHTML"],Sn=["innerHTML"],Mn=["innerHTML"],Hn=["innerHTML"],Bn=["href"],qn=["innerHTML"],En=["innerHTML"];function Dn(e,t,o,n,s,i){var a,l,u,r,g,m,h,_,b,f,v,x,C,L,w,$,q,B,A,P,O,J,F,ee,te,re,le,ce,pe,me,de,ue,ge,_e,he,fe,be;return c(),d("div",wn,[p("div",kn,[o.data.settings.overlay_use?(c(),d("div",Cn)):y("",!0),!((r=(u=(l=(a=o.data)==null?void 0:a.settings)==null?void 0:l.image)==null?void 0:u.image_link)!=null&&r.href)&&((_=(h=(m=(g=o.data)==null?void 0:g.settings)==null?void 0:m.image)==null?void 0:h.image)==null?void 0:_.value)?(c(),d("picture",{key:1,class:"ecom-banner__image-picture",innerHTML:e.$helpers.renImageResponsive(i.image,i.screens,i.lazyload)},null,8,Tn)):((x=(v=(f=(b=o.data)==null?void 0:b.settings)==null?void 0:f.image)==null?void 0:v.image_link)==null?void 0:x.href)&&(($=(w=(L=(C=o.data)==null?void 0:C.settings)==null?void 0:L.image)==null?void 0:w.image)==null?void 0:$.value)?(c(),d("a",{key:2,href:(A=(B=(q=o.data)==null?void 0:q.settings)==null?void 0:B.image.image_link)==null?void 0:A.href,target:(J=(O=(P=o.data)==null?void 0:P.settings)==null?void 0:O.image.image_link)==null?void 0:J.target,class:"ecom-banner__picture-link"},[p("picture",{class:"ecom-banner__image-picture",innerHTML:e.$helpers.renImageResponsive(i.image,i.screens,i.lazyload)},null,8,$n)],8,Ln)):y("",!0),p("div",{class:"ecom-masonry__nt_promotion_html ecom-t__0 ecom-l__0 ecom-r__0 ecom-b__0 ecom-flex ecom-w__100",style:E(i.vertical_style)},[p("div",{class:"ecom-banner_wrap_html_block ecom-flex ecom-column",style:E(i.banner_style)},[(ee=(F=o.data)==null?void 0:F.settings)!=null&&ee.heading?(c(),d("h3",{key:0,class:"ecom-banner__heading",innerHTML:e.lang((te=o.data)==null?void 0:te.settings.heading,"banner_heading")},null,8,Sn)):y("",!0),(le=(re=o.data)==null?void 0:re.settings)!=null&&le.subheading?(c(),d("h3",{key:1,class:"ecom-banner__subheading",innerHTML:e.lang((ce=o.data)==null?void 0:ce.settings.subheading,"banner_subheading")},null,8,Mn)):y("",!0),(me=(pe=o.data)==null?void 0:pe.settings)!=null&&me.content?(c(),d("div",{key:2,class:"ecom-banner__content",innerHTML:e.lang((de=o.data)==null?void 0:de.settings.content,"banner_content")},null,8,Hn)):y("",!0),(_e=(ge=(ue=o.data.settings)==null?void 0:ue.button)==null?void 0:ge.link)!=null&&_e.href?(c(),d("a",j({key:3,class:"ecom-banner__button ecom__element--button pe_auto ecom-flex ecom-fl_center ecom-al_center",href:o.data.settings.button.link.href},i.attrLink),[p("span",{class:"ecom-banner__button--text",innerHTML:e.lang((he=o.data.settings.button)==null?void 0:he.content,"banner_button_title")},null,8,qn),(be=(fe=o.data.settings)==null?void 0:fe.button)!=null&&be.icon?(c(),d("span",{key:0,class:"ecom-button-icon ecom-elements__banner-button-icon ecom-flex",innerHTML:o.data.settings.button.icon},null,8,En)):y("",!0)],16,Bn)):y("",!0)],4)],4)])])}const An=k(Ie,[["render",Dn]]);Ie.__docgenInfo={exportName:"default",displayName:"Banner",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Banner.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts"]};const Pe={name:"Gallery",docs:"https://help.ecomposer.io/docs/elements/basic-elements/gallery/",mixins:[T,H],vendors:["slider_js","slider_css","modal_js","modal_css"],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["images"]}},computed:{size(){let{size:e,size_custom:t}=this.data.settings;return e==="custom"?e=t:e&&(e={width:e.split("x")[0],height:e.split("x")[1]}),e},settings(){return[{group_title:"Images",params:[{type:"picker",label:"Choose Images",name:"images",options:{type:"image",multiple:!0,modify:[{name:"name",label:"Alt",type:"text"},{name:"caption",label:"Caption",type:"text"},{type:"popup",name:"link_type",label:"Link",options:{default:!1,values:{none:"None",media_file:"Media File",custom:"Custom URL"},type:"dropdown"},css:{isCss:!1}},{type:"link",name:"custom-link",options:{position:"fixed",visible:e=>e.link_type==="custom"}},{type:"popup",name:"lightbox",label:"Click open in lightbox",options:{type:"dropdown",default:!1,values:{yes:"Yes",no:"No"},visible:{keep_data:!0,condition:e=>e.link_type==="media_file"}}}]}},{type:"popup",label:"Crop size",name:"size",value:"",options:{type:"dropdown",default:!1,values:{"":"Original","400x300":"400 x 300px","800x450":"800 x 450px","500x500":"500 x 500px",custom:"Custom"}},css:{isCss:!1}},{type:"size",name:"size_custom",options:{visible:e=>e.size==="custom",warnings:{content:"You can crop the original image size to any custom size. You can also set a single value for height or width in order to keep the original size ratio."}}},{name:"gridTemplateColumns",label:"Images per row",type:"number",options:{min:1,max:10,responsive:!0,slider:!0},css:{selector:" .ecom-base-gallery .ecom-gallery--container",properties:{"grid-template-columns":"repeat(%value%, 1fr)"}}},{type:"number",name:"ecomGalleryGap",label:"Spacing between",options:{responsive:!0,units:{px:{min:0,max:100}}},css:{selector:" .ecom-base-gallery .ecom-gallery--container",properties:{"--ecom-gallery-gap":""}}},{type:"toggle",name:"show_caption",label:"Show caption",options:{oneline:!0,values:{off:{label:"NO",value:!1},on:{label:"YES",value:!0}}},css:{isCss:!1}}]},{group_title:"Overlay",params:[{type:"toggle",name:"overlay_use",label:"Enable Overlay",value:!0,options:{oneline:!0,values:{off:{label:"NO",value:!1},on:{label:"YES",value:!0}}},css:{isCss:!1}},{type:"popup",label:"Title source",name:"overlay_title",options:{type:"dropdown",default:!1,values:{none:"None",alt:"Alt",caption:"Caption",custom:"Custom"},visible:e=>e.overlay_use===!0},css:{isCss:!1}},{name:"overlay_title_custom",label:"Custom title",type:"text",options:{visible:e=>e.overlay_title=="custom"&&e.overlay_use===!0}}]}]},javascript(){return function(){if(!this.$el||!window.EComModal)return;let e=this.$el.querySelectorAll("[ecom-modal]");e.length&&new window.EComModal(e,{gallery:!0,cssClass:["ecom-container-lightbox-"+this.id]})}},css(){return`
                .ecom-base-gallery-grid {
                    display: grid
                }
                .ecom-base-gallery-block {
                    display: block
                }
                .ecom-gallery--container {
                    grid-gap: var(--ecom-gallery-gap, 30px) var(--ecom-gallery-gap, 30px);
                }
                .ecom-gallery--container{
                    grid-template-columns: repeat(4, 1fr);
                }

                .ecom-gallery--item figure {
                    display: flex;
                    flex-direction:column;
                }
                .ecom-gallery--item a{
                    position: relative;
                }
                .ecom-gallery--item img {
                    width: 100%;
                }
                .ecom-base-gallery-overlay.ecom-overlay {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    align-items: center;
                    justify-content: center;
                    pointer-events: none;
                    display:flex;
                    text-align:center;
                }
                .ecom-gallery--caption, .ecom-image-default{
                    width:100%
                }
                `},default(){return{settings:{images:[{id:1,value:"/images/placeholder.png",name:"Placeholder #1",lightbox:"yes",link_type:"media_file"},{id:2,value:"/images/placeholder.png",name:"Placeholder #2",lightbox:"yes",link_type:"media_file"},{id:3,value:"/images/placeholder.png",name:"Placeholder #3",lightbox:"yes",link_type:"media_file"},{id:4,value:"/images/placeholder.png",name:"Placeholder #4",lightbox:"yes",link_type:"media_file"}]," .ecom-base-gallery .ecom-gallery--container-child":{"--ecom-gallery-gap":"30px","column-count":4,"grid-template-columns":"repeat(4, 1fr)"},size:"",overlay_use:!1,overlay_title:"alt",ecomGalleryGap:"10px",gridTemplateColumns:4},style:{gallery_image:{"align-items":"center",imageOpacitynormalmode:1,imageOpacityhovermode:1},overlay:{opacity:0,opacityHover:1,backgroundhovermode:{classic:{"background-color":"rgba(17, 24, 39, 0.3)"}}}}}}},methods:{images(){var t;let e=this.$helpers.copy((t=this.data.settings)==null?void 0:t.images);return e?(this.$helpers.randid()+"",e.forEach(o=>{var s;o.value=this.$helpers.resizeImage(o.value,this.size);let n=null;o.link_type==="custom"?n=(s=o["custom-link"])!=null?s:{}:o.link_type==="media_file"&&(n={"data-ecom-modal-src":o.value,"ecom-modal":"image",href:o.value},o.lightbox==="yes"&&(n["ecom-modal-source"]=o.value)),o.link=n}),e):[]},isCaption(){var e;return((e=this.data.settings)==null?void 0:e.show_caption)&&this.images().some(t=>t.caption)},style(){var t;let e=[];return this.images().length&&e.push({group_alias:"image",options:{group_name:"gallery_image",group_title:"Image",selector:" .ecom-base-gallery .ecom-gallery--item .ecom-image-default"},modify:{params:{alias:"align-items",options:{css:{selector:"root .ecom-image-align"}}}}}),this.isCaption()&&e.push({group_alias:"text",options:{group_name:"gallery_caption",group_title:"Caption",selector:" .ecom-base-gallery .ecom-gallery--caption"},modify:{params:{position:15,fields:[{alias:"spacing"}]}}}),(t=this.data.settings)!=null&&t.overlay_use&&e.push({group_alias:"background:overlaytext",options:{group_name:"overlay",group_title:"Overlay",selector:" .ecom-base-gallery .ecom-image-default"}}),e},handleLink(e){return e.lightbox=="yes"?e.link:{href:e.link.href}}}},zn={class:"ecom-element ecom-base-gallery"},jn={class:"ecom-gallery--container ecom-base-gallery-grid"},In={class:"ecom-image-align"},Pn=["src","alt"],Nn={key:0,class:"ecom-base-gallery-overlay ecom-overlay"},Vn=["innerHTML"],Wn=["innerHTML"],On=["innerHTML"],Fn={key:1,class:"ecom-relative ecom-image-default",style:{position:"relative"}},Un=["src","alt"],Rn={key:0,class:"ecom-base-gallery-overlay ecom-overlay"},Yn=["innerHTML"],Gn=["innerHTML"],Jn=["innerHTML"],Zn=["innerHTML"];function Kn(e,t,o,n,s,i){return c(),d("div",zn,[p("div",jn,[(c(!0),d(D,null,Y(i.images(),a=>{var l;return c(),d("div",{key:a.id,class:S(["ecom-gallery--item",{"ecom-replace-notice":e.$helpers.isPreviewImage(a.value)}])},[p("figure",In,[a.link?(c(),d("a",j({key:0},i.handleLink(a),{class:"ecom-image-default",style:{position:"relative"}}),[p("img",{src:a.value,alt:a.name,class:"ecom-base-gallery-block",loading:"lazy"},null,8,Pn),o.data.settings.overlay_use===!0?(c(),d("div",Nn,[o.data.settings.overlay_title==="alt"?(c(),d("span",{key:0,class:"ecom-overlay-text",innerHTML:a.name},null,8,Vn)):y("",!0),o.data.settings.overlay_title==="caption"?(c(),d("span",{key:1,class:"ecom-overlay-text",innerHTML:a.caption},null,8,Wn)):y("",!0),o.data.settings.overlay_title==="custom"?(c(),d("span",{key:2,class:"ecom-overlay-text",innerHTML:o.data.settings.overlay_title_custom},null,8,On)):y("",!0)])):y("",!0)],16)):(c(),d("div",Fn,[p("img",{src:a.value,alt:a.name,class:"ecom-base-gallery-block",loading:"lazy"},null,8,Un),o.data.settings.overlay_use===!0?(c(),d("div",Rn,[o.data.settings.overlay_title==="alt"?(c(),d("span",{key:0,class:"ecom-overlay-text",innerHTML:a.name},null,8,Yn)):y("",!0),o.data.settings.overlay_title==="caption"?(c(),d("span",{key:1,class:"ecom-overlay-text",innerHTML:a.caption},null,8,Gn)):y("",!0),o.data.settings.overlay_title==="custom"?(c(),d("span",{key:2,class:"ecom-overlay-text",innerHTML:o.data.settings.overlay_title_custom},null,8,Jn)):y("",!0)])):y("",!0)])),((l=o.data.settings)==null?void 0:l.show_caption)&&a.caption?(c(),d("figcaption",{key:2,class:"ecom-gallery--caption",innerHTML:a.caption},null,8,Zn)):y("",!0)])],2)}),128))])])}const Xn=k(Pe,[["render",Kn]]);Pe.__docgenInfo={exportName:"default",displayName:"Gallery",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Gallery.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const Ne={name:"GroupItem",mixins:[so],inject:["exporting"],props:{data:{type:Object,default(){return{}}},index:{type:Number,default:0},deep:{type:Number,default:0},control:{type:Boolean,default:!0},section_id:{type:String,default:""},isProductBox:{type:Boolean,default:!1}},computed:{}},Qn=["action","onSubmit"];function es(e,t,o,n,s,i){const a=N("Liquid"),l=N("Blocks");return c(),d(D,null,[R(a,{data:e.liquidBefore},null,8,["data"]),(i.exporting===!1||i.exporting==="preview")&&["product","cart"].indexOf(e.shopify_type)>-1?(c(),d("form",{key:0,method:"post",action:e.shopify_type=="product"?"/cart/add":"/cart/update",class:S(e.shopify_type=="product"?"ecom-product-form ecom-product-form--single":"ecom-cart-form"),enctype:"multipart/form-data",onSubmit:Te(u=>!1,["prevent"])},[R(l,{data:e.$parent.gblocks(o.data),deep:o.deep,index:o.index,control:o.control,section_id:o.section_id},null,8,["data","deep","index","control","section_id"])],42,Qn)):(c(),z(l,{key:1,data:e.$parent.gblocks(o.data),deep:o.deep,index:o.index,control:o.control,section_id:o.section_id},null,8,["data","deep","index","control","section_id"])),R(a,{data:e.liquidAfter},null,8,["data"])],64)}const ts=k(Ne,[["render",es]]);Ne.__docgenInfo={exportName:"default",displayName:"GroupItem",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"index",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"deep",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"control",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"section_id",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isProductBox",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Layout/GroupLiquid.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/processLiquid.ts"]};const Ve={name:"Group",mixins:[ke],components:{GroupLiquid:ts},props:{data:{type:Object,default(){return{}}},index:{type:Number,default:0},deep:{type:Number,default:0},control:{type:Boolean,default:!0},gclasses:{type:Object,default(){return{}}},close_all:{type:Boolean,default:!1},gstyles:{type:Object,default(){return{}}},section_id:{type:String,default:""},isProductBox:{type:Boolean,default:!1}},data(){return{is:"group",name:this.data.element,element:this.data.element,over:!1,refresh:"",placeholder:"",validElements:["heading","text","image","divi"]}},computed:{css(){return`
                    .core__group--items {
                        flex: 1;
                    }
                `},stack(){return this.$parent.$parent.$parent.blocks},group(){return this.data},column(){return this.block.$parent},block(){return this.$parent.$parent},blocks(){let e=this.gitems.filter(t=>t.id==this.data.actived);return e.length>0?e[0].blocks:[]},gitems(){var e,t,o;return(o=(t=(e=this==null?void 0:this.group)==null?void 0:e.settings)==null?void 0:t.items)!=null?o:[]},gclass(){return this.gclasses?this.gclasses:{}},gstyle(){return this.gstyles?this.gstyles:{}},styleattr(){return{wrapper:`outline: ${this.isActive?"1px solid rgba(var(--primary-color-light), .5)":""}`,settings:`display: ${this.isActive?"flex":"none"}`}},blockAttrs(){return{ref:"wrapper",class:{"ecom-core ecom-group core__block":!0,"ecom-combined-elements":!this.control,...this.classes},...this.attributes}},haActived(){return this.close_all},isActive(){var e,t,o,n;return!this.isFullScreen&&(this.over||((t=(e=this.activeElement)==null?void 0:e.data)==null?void 0:t.id)===this.data.id||((n=(o=this.editingElement)==null?void 0:o.data)==null?void 0:n.id)===this.data.id)&&(!this.dragCurrent||this.dragCurrent.is!="section")},isEditing(){var e,t;return((t=(e=this.editingElement)==null?void 0:e.data)==null?void 0:t.id)===this.data.id},isDragMe(){return this.dragCurrent===this.$parent.$parent},isDropTo(){return this.dropTo===this.$parent.$parent},sections(){return this.$store.getters["page/sections"]},...Ce("builder",["stacks"])},watch:{gitems:{immediate:!0,deep:!0,handler(e){e.length===0&&this.gitems.push({title:"Untitled",blocks:[]}),this.gitems.forEach(t=>{this.gindex(t),this.gblocks(t)})}}},created(){this.group.control=this.control},methods:{gindex(e){return e.id===void 0&&(e.id=this.$helpers.randid()),e.id},gblocks(e){return(!e.blocks||typeof e.blocks!="object")&&(e.blocks=[]),e.blocks},overGroup(){this.isFullScreen||(this.over=!0,clearTimeout(this.timmer))},outGroup(){this.isFullScreen||(clearTimeout(this.timmer),this.timmer=setTimeout(()=>{this.over=!1},100))},placehover(e){if(!(this.isFullScreen||["section","column"].indexOf(this.dragCurrent.is)>-1)&&(this.dropTo!==this.$parent.$parent&&this.$store.commit("builder/setDropTo",this.$parent.$parent),this.dropTo===this.$parent.$parent)){let t=e.target.classList.contains("placeholder__top")?"top":"bottom";this.$parent.$parent.placeholder=t,this.dropPos=t,this.$store.commit("builder/setDropPos",t)}},activeGroup(e){var o,n;let t=(n=(o=this.$store.getters["builder/dragging"])==null?void 0:o.timmer)!=null?n:null;!this.isFullScreen&&(!t||t<new Date().getTime()-250)&&e.target.classList.contains("core__group--items")&&(this.$store.commit("builder/setActiveElement",this),this.$store.commit("builder/setEditingElement",this.$parent),this.startDrag(e))},editGroup(e){this.$store.commit("builder/setActiveElement",this),this.$store.commit("builder/setEditingElement",this.$parent),this.startDrag(e)},deleteGroup(){var e,t;if(this.section_id){const o=this.sections.find(n=>n.id===this.section_id);o&&this.$store.dispatch("history/addStack",{type:(t=(e=this.$options)==null?void 0:e.name)!=null?t:this==null?void 0:this.name,data:o,section_id:this.section_id,action:"Deleted"})}this.dropOut(),this.$parent.$parent.$parent.refresh=Math.random().toString(36).substr(2,5)},dropOut(){var e,t;return((t=(e=this.editingElement)==null?void 0:e.data)==null?void 0:t.id)===this.$parent.data.id&&(this.$store.commit("builder/setActiveElement",null),this.$store.commit("builder/setEditingElement",null)),this.$parent.$parent.dropOut()}}},os=["data-r"],is=["title"],ns=p("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ecom-icon",viewBox:"0 0 512 512",fill:"currentColor"},[p("path",{d:"M373.2 16.97C395.1-4.901 430.5-4.901 452.4 16.97L495 59.6C516.9 81.47 516.9 116.9 495 138.8L182.3 451.6C170.9 462.9 156.9 471.2 141.5 475.8L20.52 511.3C14.9 512.1 8.827 511.5 4.687 507.3C.5466 503.2-1.002 497.1 .6506 491.5L36.23 370.5C40.76 355.1 49.09 341.1 60.44 329.7L373.2 16.97zM429.8 39.6C420.4 30.22 405.2 30.22 395.8 39.6L341 94.4L417.6 170.1L472.4 116.2C481.8 106.8 481.8 91.6 472.4 82.23L429.8 39.6zM109.6 402.4L173.4 415.2L394.1 193.6L318.4 117L96.84 338.6L109.6 402.4zM70.51 370.2C69.08 373.2 67.88 376.3 66.93 379.5L39.63 472.4L132.4 445.1C135.7 444.1 138.8 442.9 141.8 441.5L92.86 431.7C86.53 430.4 81.58 425.5 80.31 419.1L70.51 370.2z"})],-1),ss=["title"],as=p("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ecom-icon",viewBox:"0 0 448 512",fill:"currentColor"},[p("path",{d:"M144 400C144 408.8 136.8 416 128 416C119.2 416 112 408.8 112 400V176C112 167.2 119.2 160 128 160C136.8 160 144 167.2 144 176V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V176C208 167.2 215.2 160 224 160C232.8 160 240 167.2 240 176V400zM336 400C336 408.8 328.8 416 320 416C311.2 416 304 408.8 304 400V176C304 167.2 311.2 160 320 160C328.8 160 336 167.2 336 176V400zM310.1 22.56L336.9 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V96H16C7.164 96 0 88.84 0 80C0 71.16 7.164 64 16 64H111.1L137 22.56C145.8 8.526 161.2 0 177.7 0H270.3C286.8 0 302.2 8.526 310.1 22.56V22.56zM148.9 64H299.1L283.8 39.52C280.9 34.84 275.8 32 270.3 32H177.7C172.2 32 167.1 34.84 164.2 39.52L148.9 64zM64 432C64 458.5 85.49 480 112 480H336C362.5 480 384 458.5 384 432V96H64V432z"})],-1),rs=[as],ls=["id","data-id"];function cs(e,t,o,n,s,i){var u,r,g;const a=N("Blocks"),l=N("GroupLiquid");return c(),d("div",j(i.blockAttrs,{onMouseenter:t[4]||(t[4]=(...m)=>i.overGroup&&i.overGroup(...m)),onMouseleave:t[5]||(t[5]=(...m)=>i.outGroup&&i.outGroup(...m)),onContextmenu:t[6]||(t[6]=(...m)=>e.rightClickMenu&&e.rightClickMenu(...m))}),[p("div",{class:S(["core__group--wrapper",i.gclass.wrapper]),"data-r":s.refresh,style:E(i.styleattr.wrapper)},[i.isActive?(c(),d("div",{key:0,class:"core__section--settings core__group--settings",style:E(i.styleattr.settings)},[p("span",{class:S(["section__settings--edit istext editicon",i.isEditing?"active":""]),title:"Edit "+o.data.element,onMousedown:t[0]||(t[0]=(...m)=>i.editGroup&&i.editGroup(...m))},[p("text",null,I((g=(r=(u=o.data)==null?void 0:u.title)!=null?r:o.data.name)!=null?g:o.data.element),1),ns],42,is),p("span",{class:"section__settings--delete",title:"Delete "+o.data.element,onClick:t[1]||(t[1]=(...m)=>i.deleteGroup&&i.deleteGroup(...m))},rs,8,ss)],4)):(c(),d(D,{key:1},[],64)),ie(e.$slots,"before",{items:i.gitems,haActived:i.haActived}),ie(e.$slots,"items",{items:i.gitems,haActived:i.haActived},()=>[p("div",{class:S(["core__group--items",i.gclass.items]),style:E(i.gstyle.items)},[(c(!0),d(D,null,Y(i.gitems,(m,h)=>(c(),d("div",{id:m.id?m.id:"",key:h,class:S({"core__group--item":1,[i.gclass.item]:i.gclass.item,"ecom-item-active":!i.haActived&&h===0}),"data-id":m.id},[ie(e.$slots,"title",{item:m,haActived:i.haActived,index:h}),p("div",{class:S({"core__group--body":1,[i.gclass.body]:i.gclass.body})},[o.data.template?(c(),z(a,{key:0,data:i.gblocks(m),deep:o.deep,index:h,control:o.control,section_id:o.section_id},null,8,["data","deep","index","control","section_id"])):(c(),z(l,{key:1,deep:o.deep,index:h,control:o.control,data:m,section_id:o.section_id,isProductBox:o.isProductBox},null,8,["deep","index","control","data","section_id","isProductBox"]))],2)],10,ls))),128))],6)]),ie(e.$slots,"after",{items:i.gitems})],14,os),e.isDragging?(c(),d(D,{key:0},[p("div",{class:"placeholder__top",onMouseover:t[2]||(t[2]=(...m)=>i.placehover&&i.placehover(...m))},null,32),p("div",{class:"placeholder__bottom",onMouseover:t[3]||(t[3]=(...m)=>i.placehover&&i.placehover(...m))},null,32)],64)):(c(),d(D,{key:1},[],64))],16)}const oe=k(Ve,[["render",cs]]);Ve.__docgenInfo={exportName:"default",displayName:"Group",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"index",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"deep",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"control",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"gclasses",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"close_all",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"gstyles",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"section_id",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isProductBox",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"before",scoped:!0,bindings:[{name:"items",title:"binding"},{name:"haActived",title:"binding"}]},{name:"items",scoped:!0,bindings:[{name:"items",title:"binding"},{name:"haActived",title:"binding"}]},{name:"title",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"haActived",title:"binding"},{name:"index",title:"binding"}]},{name:"after",scoped:!0,bindings:[{name:"items",title:"binding"}]}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Layout/Group.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/core.ts"]};const We={name:"slider",presets:!0,docs:"https://help.ecomposer.io/docs/elements/basic-elements/slider/",vendors:["slider_js","slider_css"],components:{GroupElement:oe},mixins:[T,H],props:{data:{type:Object,default(){return{}}},index:{type:Number,default:0},deep:{type:Number,default:0}},data(){return{is:"slider",name:"Slider",watchHeight:{},jsreactives:["slider_navigation_layout","items","autoplay_progress"]}},computed:{section_id(){return(this==null?void 0:this.$parent.section_id)||""},slider(){return this.data},storeScreens(){return this.$store.getters["builder/screens"]},items(){var e,t,o;return(o=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.items)!=null?o:[]},isNavigation(){var e;return(e=this.slider.settings)==null?void 0:e.slider_navigation_layout},optionSwiper(){return this.$helpers.optionSwiper(this.slider.settings)},paginationImages(){return this.items.map(e=>e.slider_pagination_image)},sliderNav(){return this.slider.settings.navigation_position__tablet||(this.slider.settings.navigation_position__tablet=this.slider.settings.navigation_position),this.slider.settings.navigation_position__mobile||(this.slider.settings.navigation_position__mobile=this.slider.settings.navigation_position),{"--ecom-position":this.slider.settings.navigation_position!=="center"?"unset":"absolute","--ecom-position__tablet":this.slider.settings.navigation_position__tablet!=="center"?"unset":"absolute","--ecom-position__mobile":this.slider.settings.navigation_position__mobile!=="center"?"unset":"absolute"}},settings(){return[{group_title:"Slides",params:[{name:"items",type:"group",options:{add_text:"Add new slide",is_clear_all:!1},params:[{type:"text",label:"Heading",name:"title"},{type:"picker",label:"Choose background",name:"image",options:{responsive:!0,type:"image",editAlt:!0}},{type:"popup",name:"img_position",label:"Image position",options:{type:"dropdown",default:!1,values:{"center-center":"Center - Center","center-left":"Center - Left","center-right":"Center - Right","top-center":"Top - Center","top-left":"Top - Left","top-right":"Top - Rigth","bottom-center":"Bottom - Center","bottom-left":"Bottom - Left","bottom-right":"Bottom - Rigth"}},css:{isCss:!1}},{type:"popup",name:"img_size",label:"Image size",value:"cover",options:{type:"dropdown",default:!1,values:{cover:"Cover",contain:"Contain",inherit:"Inherit",revert:"Revert",fill:"Fill",none:"None",unset:"Unset"}},css:{isCss:!1}},{type:"picker",label:"Pagination image",name:"slider_pagination_image",options:{type:"image",output:"value",visible:{keep_data:!1,condition:(e,t,o=this.data.settings)=>(o.slider_navigation_layout==="classic_full"||o.slider_navigation_layout==="neo_full"||o.slider_navigation_layout==="pagination")&&o.slider_pagination_style==="images"}}},{type:"link",label:"Image link",name:"link"},{type:"toggle",name:"overlay",label:"Enable overlay",options:{oneline:!0,values:{on:{label:"YES",value:!0},off:{label:"NO",value:!1}}}}]},{type:"line"},{name:"contentWidth",label:"Content Width",type:"number",options:{units:{"%":{min:10,max:100,step:1}},responsive:!0},css:{selector:" .ecom-slider--container",properties:{"padding-left":"calc((100% - %value%) / 2)","padding-right":"calc((100% - %value%) / 2)"}}},{type:"toggle",name:"isCustomHeight",label:"Custom Height",options:{oneline:!0,values:{on:{label:"YES",value:!0},off:{label:"NO",value:!1}}}},{type:"number",label:"Height",name:"height",placeholder:"300",options:{responsive:!0,units:{px:{min:100,max:1500}},visible:{keep_data:!1,condition:e=>e.isCustomHeight}},css:{selector:" .ecom-slider .ecom-swiper-slide"}},{type:"popup",label:"Vertical align",name:"verticalAlign",options:{preview:"title",type:"dropdown",values:{"flex-start":"Top",center:"Middle","flex-end":"Bottom"},visible:function(e){return e.isCustomHeight}},css:{selector:" .ecom-content-item",properties:{"align-content":"","align-items":"",display:'return value ? "flex" : ""'}}}]},{group_alias:"swiper",modify:{params:[{position:0,fields:[{type:"popup",name:"slider_effect",label:"Transition effect",options:{type:"dropdown",preview:"title",default:!1,values:{fade:"Fade",slide:"Slide",coverflow:"Coverflow",flip:"Flip",cards:"Cards",creative:"Creative",creative2:"Creative style 2",creative3:"Creative style 3",creative4:"Creative style 4",creative5:"Creative style 5",creative6:"Creative style 6"}}}]},{position:4,fields:[{name:"autoplay_progress",label:"Autoplay progress",type:"toggle",options:{visible:function(e){return e&&e.slider_autoplay===!0},online:!0,values:{on:{label:"yes",value:!0},off:{label:"no",value:!1}}}}]},{position:20,fields:[{type:"toggle",name:"paginitionAnimation",label:"Pagination Animation",options:{oneline:!0,values:{on:{label:"YES",value:!0},off:{label:"NO",value:!1}}},css:{selector:" .ecom-swiper-pagination-bullet.ecom-swiper-pagination-bullet-active:after",properties:{height:'return value ? "100%" : "0"'}}}]}]}},{group_title:"Animation",params:[{type:"popup",name:"content_animation",label:"Content Animation",options:{type:"dropdown",default:!1,value:"none",preview:"title",values:{none:"None",Bottom2Top:"Bottom to top",Top2Bottom:"Top to Bottom",Left2Right:"Left to Right",Right2Left:"Right to Left"}}}]}]},javascript(){return function(){var r;const e=this.$el;if(!e)return;(r=this.settings.autoplay_progress)!=null;const t=e.querySelector(".ecom-autoplay-progress svg"),o=e.querySelector(".ecom-autoplay-progress span");let n={};t&&o&&(n={autoplayTimeLeft(g,m,h){t.style.setProperty("--progress",1-h),o.textContent=`${Math.ceil(m/1e3)}s`}});const s=e.querySelector(".ecom-swiper-container"),i=JSON.parse(s.dataset.optionSwiper);i.pagination.el=e.querySelector(".ecom-swiper-pagination"),i.navigation.nextEl=e.querySelector(".ecom-swiper-button-next"),i.navigation.prevEl=e.querySelector(".ecom-swiper-button-prev"),i.pagination.renderBullet=(g,m)=>`<span class="${m}">
                            ${this.settings.items[g]&&this.settings.items[g].slider_pagination_image?`<img src="${this.settings.items[g].slider_pagination_image}">`:""}</span>`;const a={allowTouchMove:this.isLive,on:n};if(this.isLive||(a.loop=!1),window.EComSwiper){let g=function(){const m=new window.EComSwiper(s,Object.assign(i,a));m.on("slideChange",function(){const h=m.activeIndex==0?m.slides.length-1:m.activeIndex-1,_=m.slides[h];if(_){const b=_.querySelectorAll(".ecom-animation.ecom-animated");b.length&&b.forEach(function(f){f.classList.remove("ecom-animated","animated"),f.classList.add("ecom-animated-slider")})}if(m.el){const b=m.slides[m.activeIndex];let f=null;b&&(f=b.querySelectorAll(".ecom-animation.ecom-animated-slider")),f&&f.length&&f.forEach(function(v){v.classList.add("ecom-animated")})}setTimeout(function(){m.pagination.render(),m.pagination.update()},500)})};var l;window.addEventListener("resize",function(){l&&clearTimeout(l),l=setTimeout(g,200)}),g()}let u=null;s.querySelectorAll("img").length&&s.querySelectorAll("img").forEach(function(g,m){m!=0&&g.removeAttribute("loading"),g.addEventListener("load",function(){clearTimeout(u),u=setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)})})}},css(){return`
                    /**
                     * EComposer Element Slider
                     */
                    .ecom-elements-slider {
                      overflow: hidden;
                    }
                    body[ecom-loaded] .ecom-elements-slider {
                      overflow: unset;
                    }
                    .ecom-slider__image--link {
                      position: absolute;
                      inset: 0;
                    }
                    .ecom-slider__has-link .ecom-content-item__container {
                      pointer-events: none;
                    }
                    .ecom-swiper-navigation-position{
                        display:flex;
                    }
                    .ecom-swiper-navigation-position button{
                        margin:0
                    }
                    .ecom-swiper-navigation button{
                        position:unset;
                        margin:0
                    }
                    .ecom-slider--container {
                        position: relative;
                        display: flex;
                        flex-direction: column;
                    }
                    .ecom-swiper-pagination-bullet:only-child {
                        opacity: none
                    }
                    .ecom-swiper-button svg{
                        width:24px;
                        height:24px;
                    }
                    .ecom-flex-center, .ecom-swiper-navigation {
                        display: flex;
                        align-items: center;
                    }
                    .ecom-swiper-navigation{
                        justify-content: center
                    }
                    .ecom-slider img {
                        display: block
                    }
                    .ecom-slider--container .ecom-swiper-pagination-bullet img{
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: cover
                    }
                    .ecom-slider--container .ecom-swiper-button-next:after,
                    .ecom-slider--container .ecom-swiper-button-prev:after {
                        content: none;
                    }
                    .ecom-slider--container .ecom-swiper-navigation[data-navigator-type="combine"] .ecom-swiper-button-next,
                    .ecom-slider--container .ecom-swiper-navigation[data-navigator-type="combine"] .ecom-swiper-button-prev {
                        position: static;
                        margin: 0;
                    }
                    .ecom-slider--container .ecom-swiper-button-next,
                    .ecom-slider--container .ecom-swiper-button-prev {
                        border: 0;
                        background: transparent;
                        width: auto;
                        height: auto;
                        padding: 5px;
                        color: #444;
                        transform: translateY(-50%);
                    }
                    .ecom-slider--container .ecom-swiper-pagination {
                        position: relative;
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center
                    }
                    .ecom-slider--container .ecom-swiper-pagination-bullet {
                        width: 15px;
                        height: 15px;
                        opacity: 1;
                        overflow: hidden;
                    }
                    .ecom-slider--container .ecom-swiper-pagination-bullet,
                    .ecom-slider--container .ecom-swiper-pagination-bullet-active{
                        background-clip: content-box;
                        padding: 1px;
                        box-sizing: content-box !important;
                        background-color: currentColor;
                    }
                     .ecom-swiper-container-horizontal>.ecom-swiper-pagination-bullets{
                        width:auto;
                    }
                    .ecom-slider--container .ecom-swiper-slide{
                        position: relative;
                    }
                    .ecom-swiper-slide div.core__blocks>div.core__blocks--body{
                        display:flex
                    }
                    .ecom-content-item__container {
                        width: 100%;
                        z-index: 99;
                    }
                    .ecom-swiper-slide .ecom-content-item {
                        display: flex;
                        justify-content: center;
                    }
                    .ecom-image-background{
                        position:absolute;
                        top:0;
                        left:0;
                        height: 100% !important;
                        width: 100%;
                    }
                    .ecom-image-background img{
                        position:absolute;
                        top:0;
                        left:0;
                        height: 100% !important;
                        width: 100%;
                        object-fit: cover;
                        object-position: center center;
                    }

                    .ecom-overlay {
                        display: block;
                        position: absolute;
                        inset: 0;
                    }

                    .ecom-overlay span {
                        opacity: 0;
                        visibility: hidden;
                    }

                    .ecom-slider--container .ecom-swiper-pagination-bullets, .ecom-swiper-pagination-custom, .ecom-swiper-pagination-fraction {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        bottom: 0;
                    }

                    .ecom-slider--container .ecom-swiper-pagination-bullets, .ecom-swiper-pagination-custom, .ecom-swiper-pagination-fraction {
                        bottom: 0;
                    }
                    .ecom-content-item {
                        height: 100%;
                    }
                    .ecom-slider--container .ecom-swiper-navigation[data-navigator-type="classic"] .ecom-swiper-pagination,
                    .ecom-slider--container .ecom-swiper-navigation:not([data-navigator-type]) .ecom-swiper-pagination {
                        width:100%
                    }
                    .ecom-transition-Bottom2Top, .ecom-transition-Top2Bottom, .ecom-transition-Left2Right, .ecom-transition-Right2Left {
                        transform: translateY(40px);
                        -webkit-transform: translateY(40px);
                        -moz-transform: translateY(40px);
                        transition: .4s cubic-bezier(.44, .13, .48, .87) .3s;
                        -webkit-transition: .4s cubic-bezier(.44, .13, .48, .87) .3s;
                        opacity: 0;
                    }
                    .ecom-transition-Top2Bottom {
                        transform: translateY(-40px);
                        -webkit-transform: translateY(-40px);
                        -moz-transform: translateY(-40px);
                    }
                    .ecom-transition-Left2Right {
                        transform: translateX(-40px);
                        -webkit-transform: translateX(-40px);
                        -moz-transform: translateX(-40px);
                    }
                    .ecom-transition-Right2Left {
                        transform: translateX(40px);
                        -webkit-transform: translateX(40px);
                        -moz-transform: translateX(40px);
                    }
                    .ecom-swiper-slide.ecom-box-active .ecom-transition-Bottom2Top, .ecom-swiper-slide.ecom-box-active .ecom-transition-Top2Bottom, .ecom-swiper-slide.ecom-box-active .ecom-transition-Left2Right, .ecom-swiper-slide.ecom-box-active .ecom-transition-Right2Left {
                        transform: translateY(0);
                        -webkit-transform: translateY(0);
                        -moz-transform: translateY(0);
                        opacity: 1;
                    }
                    .ecom-swiper-pagination-bullet {
                        position: relative;
                    }
                    .ecom-swiper-pagination-bullet:after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        height: 0;
                        left: 0;
                        width: 100%;
                        box-shadow: 0 0 1px #fff;
                        -webkit-transition: height .3s;
                        transition: height .5s;
                    }
                    .ecom-swiper-button {
                      position: var(--ecom-position);
                    }
                    .ecom-swiper-effect-cube .ecom-image-background img {
                      // visibility: visible;
                    }
                    .ecom-autoplay-progress {
                      position: absolute;
                      right: 16px;
                      bottom: 16px;
                      z-index: 10;
                      width: 48px;
                      height: 48px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-weight: bold;
                      color: #000;
                    }

                    .ecom-autoplay-progress svg {
                      --progress: 0;
                      position: absolute;
                      left: 0;
                      top: 0px;
                      z-index: 10;
                      width: 100%;
                      height: 100%;
                      stroke-width: 4px;
                      stroke: #1ced8f;
                      fill: none;
                      stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
                      stroke-dasharray: 125.6;
                      transform: rotate(-90deg);
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
                `},default(){return{settings:{items:[{title:"Slide 1",blocks:[{settings:{content:"Autum &amp; Winter 2021",tag:"h2"},style:{text:{textTextAlign:"left",textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"52px","font-weight":"600","line-height":"42px"},textTypography__mobile:{"font-size":"27px"}}},advanced:{spacing:{padding:{left:"12%"}}},name:"heading",css:{settings:{style:"",keyframes:[],fonts:[]},style:{style:".ecom-core.ecom-aixk2k3w .element__heading .ecom__heading{text-align: left;}.ecom-core.ecom-aixk2k3w .element__heading .ecom__heading,.ecom-core.ecom-aixk2k3w .element__heading .ecom__heading a{font-family: Jost;font-size: 52px;font-weight: 600;line-height: 42px;}@media screen and (max-width: 767px) {.ecom-core.ecom-aixk2k3w .element__heading .ecom__heading,.ecom-core.ecom-aixk2k3w .element__heading .ecom__heading a{font-size: 27px;}}",keyframes:[[]],fonts:['@import url("https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900");']},advanced:{style:".ecom-core.ecom-aixk2k3w{padding-left: 12%;}",keyframes:[[]],fonts:[]}}},{settings:{content:"New Arrival Collection"},style:{text:{textTextAlign:"left",textTypography:{"global-typography":"AbgUXj49"},textColor:"#919191"},text_dropcap:{dropcapTypography:{"font-size":"40px"},dropcapColor:"#f50c0c",dropcapColorStackedView:"#5eff00",dropcapBackgroundStackedView:"#4800ff",dropcapColorFramedView:"#1aff00",dropcapBackgroundFramedView:"#1100ff",dropcapView:"framed"}},advanced:{spacing:{padding:{left:"12%"}}},name:"text",css:{settings:{style:"",keyframes:[],fonts:[]},style:{style:".ecom-core.ecom-stmvb7zf{text-align: left;color: #919191;}.ecom-core.ecom-stmvb7zf,.ecom-core.ecom-stmvb7zf a{title: var(--ecom-global-typography-AbgUXj49-title);value: var(--ecom-global-typography-AbgUXj49-value);}",keyframes:[[]],fonts:[]},advanced:{style:".ecom-core.ecom-stmvb7zf{padding-left: 12%;}",keyframes:[[]],fonts:[]}}},{settings:{content:"Shop Now",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 12.96875 4.28125 L 11.53125 5.71875 L 21.8125 16 L 11.53125 26.28125 L 12.96875 27.71875 L 23.96875 16.71875 L 24.65625 16 L 23.96875 15.28125 Z"></path></svg>',spacing:"6px"},style:{icon:{tab:"normal",iconFontSize:"14px"},button:{"justify-content":"flex-start",buttonColornormalmode:"#ffffff",buttonBackgroundnormalmode:{classic:{"background-color":"#f76b6a"}},buttonColorhovermode:"#ffffff",buttonBackgroundhovermode:{classic:{"background-color":"#f76b6a"}},spacing:{padding:{bottom:"8px",top:"8px",left:"30px",right:"30px"},margin:{}},tab:"normal",buttonTypography:{"global-typography":"m5lJMKLv"},buttonBorderRadiusnormalmode:{top:"3px",left:"3px",bottom:"3px",right:"3px"},buttonBoxShadow:{"box-shadow":{horizontal:"1px",vertical:"1px",blur:"5px",color:"rgba(51, 51, 51, 0.49)"}},buttonTransition:500}},name:"button",advanced:{spacing:{padding:{left:"12%"}}},css:{settings:{style:".ecom-core.ecom-0yq0nm3u .ecom__element--button{gap: 6px;}",keyframes:[],fonts:[]},style:{style:".ecom-core.ecom-0yq0nm3u .ecom-button-default{justify-content: flex-start;}.ecom-core.ecom-0yq0nm3u .ecom__element--button{title: var(--ecom-global-typography-m5lJMKLv-title);value: var(--ecom-global-typography-m5lJMKLv-value);box-shadow: 1px 1px 5px 0 rgba(51, 51, 51, 0.49);color: #ffffff;background-color: #f76b6a;border-radius: 3px;transition: all 500ms ease;padding: 8px 30px 8px 30px;}.ecom-core.ecom-0yq0nm3u .ecom__element--button:hover{color: #ffffff;background-color: #f76b6a;}.ecom-core.ecom-0yq0nm3u .ecom-button-icon svg{height: 14px;width: 14px;}",keyframes:[[],[],[],[]],fonts:[]},advanced:{style:".ecom-core.ecom-0yq0nm3u{padding-left: 12%;}",keyframes:[[]],fonts:[]}}}],image:{name:"slider01_3350x_dfa9cdf1-bc04-438f-87d5-908a275cb9b0",ext:"jpg",value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/slider01_3350x_dfa9cdf1-bc04-438f-87d5-908a275cb9b0.jpg?v=1647937158",thumbnail:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/slider01_3350x_dfa9cdf1-bc04-438f-87d5-908a275cb9b0.jpg?v=1647937158"}},{title:"Slide 2",blocks:[{settings:{content:"Spring Summer Collection",tag:"h2"},style:{text:{textTextAlign:"left",textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"52px","font-weight":"600","line-height":"42px"},textTypography__mobile:{"font-size":"27px"}}},advanced:{spacing:{padding:{left:"12%"}}},name:"heading",css:{settings:{style:"",keyframes:[],fonts:[]},style:{style:".ecom-core.ecom-u8jmikl6 .element__heading .ecom__heading{text-align: left;}.ecom-core.ecom-u8jmikl6 .element__heading .ecom__heading,.ecom-core.ecom-u8jmikl6 .element__heading .ecom__heading a{font-family: Jost;font-size: 52px;font-weight: 600;line-height: 42px;}@media screen and (max-width: 767px) {.ecom-core.ecom-u8jmikl6 .element__heading .ecom__heading,.ecom-core.ecom-u8jmikl6 .element__heading .ecom__heading a{font-size: 27px;}}",keyframes:[[]],fonts:['@import url("https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900");']},advanced:{style:".ecom-core.ecom-u8jmikl6{padding-left: 12%;}",keyframes:[[]],fonts:[]}}},{settings:{content:"Get the latest trending design of 2023"},style:{text:{textTextAlign:"left",textTypography:{"global-typography":"AbgUXj49"},textColor:"#919191"},text_dropcap:{dropcapTypography:{"font-size":"40px"},dropcapColor:"#f50c0c",dropcapColorStackedView:"#5eff00",dropcapBackgroundStackedView:"#4800ff",dropcapColorFramedView:"#1aff00",dropcapBackgroundFramedView:"#1100ff",dropcapView:"framed"}},advanced:{spacing:{padding:{left:"12%"}}},name:"text",css:{settings:{style:"",keyframes:[],fonts:[]},style:{style:".ecom-core.ecom-0cadkenj{text-align: left;color: #919191;}.ecom-core.ecom-0cadkenj,.ecom-core.ecom-0cadkenj a{title: var(--ecom-global-typography-AbgUXj49-title);value: var(--ecom-global-typography-AbgUXj49-value);}",keyframes:[[]],fonts:[]},advanced:{style:".ecom-core.ecom-0cadkenj{padding-left: 12%;}",keyframes:[[]],fonts:[]}}},{settings:{content:"Shop Now",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 12.96875 4.28125 L 11.53125 5.71875 L 21.8125 16 L 11.53125 26.28125 L 12.96875 27.71875 L 23.96875 16.71875 L 24.65625 16 L 23.96875 15.28125 Z"></path></svg>',spacing:"6px"},style:{icon:{tab:"normal",iconFontSize:"14px"},button:{"justify-content":"flex-start",buttonColornormalmode:"#ffffff",buttonBackgroundnormalmode:{classic:{"background-color":"#f76b6a"}},buttonColorhovermode:"#ffffff",buttonBackgroundhovermode:{classic:{"background-color":"#f76b6a"}},spacing:{padding:{bottom:"8px",top:"8px",left:"30px",right:"30px"},margin:{}},tab:"normal",buttonTypography:{"global-typography":"m5lJMKLv"},buttonBorderRadiusnormalmode:{top:"3px",left:"3px",bottom:"3px",right:"3px"},buttonBoxShadow:{"box-shadow":{horizontal:"1px",vertical:"1px",blur:"5px",color:"rgba(51, 51, 51, 0.49)"}},buttonTransition:500}},name:"button",advanced:{spacing:{padding:{left:"12%"}}},css:{settings:{style:".ecom-core.ecom-1q8qjuu8 .ecom__element--button{gap: 6px;}",keyframes:[],fonts:[]},style:{style:".ecom-core.ecom-1q8qjuu8 .ecom-button-default{justify-content: flex-start;}.ecom-core.ecom-1q8qjuu8 .ecom__element--button{title: var(--ecom-global-typography-m5lJMKLv-title);value: var(--ecom-global-typography-m5lJMKLv-value);box-shadow: 1px 1px 5px 0 rgba(51, 51, 51, 0.49);color: #ffffff;background-color: #f76b6a;border-radius: 3px;transition: all 500ms ease;padding: 8px 30px 8px 30px;}.ecom-core.ecom-1q8qjuu8 .ecom__element--button:hover{color: #ffffff;background-color: #f76b6a;}.ecom-core.ecom-1q8qjuu8 .ecom-button-icon svg{height: 14px;width: 14px;}",keyframes:[[],[],[],[]],fonts:[]},advanced:{style:".ecom-core.ecom-1q8qjuu8{padding-left: 12%;}",keyframes:[[]],fonts:[]}}}],image:{name:"slider02_3000x_16f1f1fb-2d1e-4067-893b-2876b539401b",ext:"jpg",value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/slider02_3000x_16f1f1fb-2d1e-4067-893b-2876b539401b.jpg?v=1647937164",thumbnail:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/slider02_3000x_16f1f1fb-2d1e-4067-893b-2876b539401b.jpg?v=1647937164"}},{title:"Slide 3",blocks:[{settings:{tag:"h2",content:"Looking for the best price"},style:{text:{textTextAlign:"left",textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"52px","font-weight":"600","line-height":"42px"},textTypography__mobile:{"font-size":"27px"}}},advanced:{spacing:{padding:{left:"12%"}}},name:"heading",css:{settings:{style:"",keyframes:[],fonts:[]},style:{style:".ecom-core.ecom-gink8d7y .element__heading .ecom__heading{text-align: left;}.ecom-core.ecom-gink8d7y .element__heading .ecom__heading,.ecom-core.ecom-gink8d7y .element__heading .ecom__heading a{font-family: Jost;font-size: 52px;font-weight: 600;line-height: 42px;}@media screen and (max-width: 767px) {.ecom-core.ecom-gink8d7y .element__heading .ecom__heading,.ecom-core.ecom-gink8d7y .element__heading .ecom__heading a{font-size: 27px;}}",keyframes:[[]],fonts:['@import url("https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900");']},advanced:{style:".ecom-core.ecom-gink8d7y{padding-left: 12%;}",keyframes:[[]],fonts:[]}}},{settings:{content:"New Arrival Collection"},style:{text:{textTextAlign:"left",textTypography:{"global-typography":"AbgUXj49"},textColor:"#919191"},text_dropcap:{dropcapTypography:{"font-size":"40px"},dropcapColor:"#f50c0c",dropcapColorStackedView:"#5eff00",dropcapBackgroundStackedView:"#4800ff",dropcapColorFramedView:"#1aff00",dropcapBackgroundFramedView:"#1100ff",dropcapView:"framed"}},advanced:{spacing:{padding:{left:"12%"}}},name:"text",css:{settings:{style:"",keyframes:[],fonts:[]},style:{style:".ecom-core.ecom-48pay8e0{text-align: left;color: #919191;}.ecom-core.ecom-48pay8e0,.ecom-core.ecom-48pay8e0 a{title: var(--ecom-global-typography-AbgUXj49-title);value: var(--ecom-global-typography-AbgUXj49-value);}",keyframes:[[]],fonts:[]},advanced:{style:".ecom-core.ecom-48pay8e0{padding-left: 12%;}",keyframes:[[]],fonts:[]}}},{settings:{content:"Shop Now",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 12.96875 4.28125 L 11.53125 5.71875 L 21.8125 16 L 11.53125 26.28125 L 12.96875 27.71875 L 23.96875 16.71875 L 24.65625 16 L 23.96875 15.28125 Z"></path></svg>',spacing:"6px"},style:{button:{"justify-content":"flex-start",buttonColornormalmode:"#ffffff",buttonBackgroundnormalmode:{classic:{"background-color":"#f76b6a"}},buttonColorhovermode:"#ffffff",buttonBackgroundhovermode:{classic:{"background-color":"#f76b6a"}},spacing:{padding:{bottom:"8px",top:"8px",left:"30px",right:"30px"},margin:{}},tab:"normal",buttonTypography:{"global-typography":"m5lJMKLv"},buttonBorderRadiusnormalmode:{top:"3px",left:"3px",bottom:"3px",right:"3px"},buttonBoxShadow:{"box-shadow":{horizontal:"1px",vertical:"1px",blur:"5px",color:"rgba(51, 51, 51, 0.49)"}},buttonTransition:500},icon:{tab:"normal",iconFontSize:"14px"}},name:"button",advanced:{spacing:{padding:{left:"12%"}}},css:{settings:{style:".ecom-core.ecom-sur1i2pt .ecom__element--button{gap: 6px;}",keyframes:[],fonts:[]},style:{style:".ecom-core.ecom-sur1i2pt .ecom-button-default{justify-content: flex-start;}.ecom-core.ecom-sur1i2pt .ecom__element--button{title: var(--ecom-global-typography-m5lJMKLv-title);value: var(--ecom-global-typography-m5lJMKLv-value);box-shadow: 1px 1px 5px 0 rgba(51, 51, 51, 0.49);color: #ffffff;background-color: #f76b6a;border-radius: 3px;transition: all 500ms ease;padding: 8px 30px 8px 30px;}.ecom-core.ecom-sur1i2pt .ecom__element--button:hover{color: #ffffff;background-color: #f76b6a;}.ecom-core.ecom-sur1i2pt .ecom-button-icon svg{height: 14px;width: 14px;}",keyframes:[[],[],[],[]],fonts:[]},advanced:{style:".ecom-core.ecom-sur1i2pt{padding-left: 12%;}",keyframes:[[]],fonts:[]}}}],image:{ext:"jpg",name:"slider03_3000x_4a61bf2b-4ef8-4a08-9b00-1c51fdd03da7",value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/slider03_3000x_4a61bf2b-4ef8-4a08-9b00-1c51fdd03da7.jpg?v=1647937167",thumbnail:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/slider03_3000x_4a61bf2b-4ef8-4a08-9b00-1c51fdd03da7.jpg?v=1647937167"}}],contentWidth:"100%",slider_navigation_layout:"classic_full",slider_prev_icon:'<svg xmlns="http: //www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>',slider_next_icon:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>',slider_effect:"slide",slider_speed:500,isCustomHeight:!0,verticalAlign:"center",slider_autoplay:!1,slider_items:1,slider_group:1,slider_loop:!0,height:"509px",slider_autoplay_speed:6e3,pagination_position:"bottom_center",navigation_position:"center"},style:{swiper_nav:{navigatorFontSize:"22px",navigatorPrimaryColornormalmode:"rgba(17, 24, 39, 0.3)",navigatorPrimaryColorhovermode:"rgba(17, 24, 39, 0.5)","justify-content":"center",paginationWidth:"12px",paginationHeight:"12px",panigationColornormalmode:"rgba(17, 24, 39, 0.2)",panigationColorhovermode:"rgba(17, 24, 39, 0.3)",panigationColoractivemode:"#f76b6a",navigatorSpacing__mobile:{padding:{left:"8px",top:"8px",bottom:"8px",right:"8px"},margin:{left:"0px",top:"0px",bottom:"0px",right:"0px"}},navtab:"normal",navigatorBackgroundnormalmode:{classic:{"background-color":"rgba(120, 120, 120, 0.26)"}},navigatorSpacing:{margin:{},padding:{top:"12px",left:"12px",bottom:"12px",right:"12px"}},navigatorBorderRadiusnormalmode:{top:"50%",left:"50%",bottom:"50%",right:"50%"},tab:"active",panigationSpacing:{margin:{left:"4px",right:"4px",bottom:"0px",top:"-30px"}}},box_active:{tab:"active"},swiper_pagination:{tab:"active",paginationWidth:"10px",paginationHeight:"10px",panigationColornormalmode:"rgba(137, 137, 137, 0.39)",panigationSpacing:{margin:{left:"3px",right:"3px",bottom:"6px"}},panigationColoractivemode:"#f76b6a"},size_progress:"48px",size_progress_stroke:"4px",text_progress_color:"#000000",stroke_progress_color:"#1ced8f",position_bottom:"16px",position_right:"16px"}}}},watch:{"data.settings.items.tabOpened":function(e){var t,o,n;e>=0&&this!=null&&this.$el&&((n=(o=(t=this==null?void 0:this.$el)==null?void 0:t.querySelector(".ecom-swiper-container"))==null?void 0:o.swiper)==null||n.slideTo(e))},optionSwiper:{deep:!0,handler:function(){this.slider.refresh=this.$helpers.randid()}},items:{deep:!0,handler:function(){setTimeout(()=>{var e,t,o;this!=null&&this.$el&&((o=(t=(e=this==null?void 0:this.$el)==null?void 0:e.querySelector(".ecom-swiper-container"))==null?void 0:t.swiper)==null||o.update())},100)}},storeScreens:{deep:!0,immediate:!0,handler(e){Object.keys(e).forEach(o=>{if(!(o in this.watchHeight)){let n=this.$watch("data.settings.height"+(o==="desktop"?"":"__"+o),function(){let s=null;clearTimeout(s),s=setTimeout(()=>{var i,a,l;(l=(a=(i=this==null?void 0:this.$el)==null?void 0:i.querySelector(".ecom-swiper-container"))==null?void 0:a.swiper)==null||l.update()},100)});this.watchHeight[o]=n}})}},paginationImages:{deep:!0,handler(){this.slider.refresh=this.$helpers.randid()}}},unmounted(){for(let e in this.watchHeight)this.watchHeight[e]()},methods:{isCombined(){var t,o;return((o=(t=this.data)==null?void 0:t.settings)==null?void 0:o.slider_navigation_layout)==="neo_full"?"combine":"classic"},isArrow(){var e,t,o;return((e=this.data.settings)==null?void 0:e.slider_navigation_layout)==="neo_full"||((t=this.data.settings)==null?void 0:t.slider_navigation_layout)==="navigation"||((o=this.data.settings)==null?void 0:o.slider_navigation_layout)==="classic_full"},isPagination(){var e,t,o;return((e=this.data.settings)==null?void 0:e.slider_navigation_layout)==="neo_full"||((t=this.data.settings)==null?void 0:t.slider_navigation_layout)==="classic_full"||((o=this.data.settings)==null?void 0:o.slider_navigation_layout)==="pagination"},editSlider(e){this.$store.commit("builder/setActiveElement",this),this.$store.commit("builder/setEditingElement",this),!1 in this.data.settings.items&&Object.defineProperty(this.data.settings.items,"tabOpened",{enumerable:!1,writable:!0}),this.data.settings.items.tabOpened=e},img_style(e){const t={};return e!=null&&e.img_position&&(t["object-position"]=e==null?void 0:e.img_position),e!=null&&e.img_size&&(t["object-fit"]=e==null?void 0:e.img_size),t},style(){var s;let e=[];this.isArrow()&&e.push({title:"Navigator",type:"swiper:nav"}),this.isPagination()&&e.push({title:"Pagination",type:"swiper:pagination"});const t=[{group_alias:"box:active",options:{group_title:"Slide",selector:" .ecom-swiper-slide"},modify:{params:[{position:50,fields:[{type:"line"},{alias:"spacing"}]},{position:0,fields:[{type:"popup",label:"Slider Animation",name:"sliderAnimation",selector:" .ecom-swiper-slide",options:{type:"dropdown",values:"animation",size:"small"},css:{selector:".ecom-box-active",properties:{animation:""}}},{type:"number",label:'Slider Transition Duration <span class="lowercase">(ms)</span>',name:"sliderTransition",selector:" .ecom-swiper-slide",options:{min:0,max:5e3,step:100},css:{properties:{"animation-duration":"%value%ms !important"}}}]}],remove:{label:"Box Shadow"}}}];let o={};this.isCombined()==="combine"&&(o={params:[{alias:"spacing",options:{name:"spacingNavigation",css:{selector:" .ecom-swiper-navigation"}}},{type:"line"}],remove:{name:"paginationAlignment"}}),e.length&&t.push({group_alias:e,options:{group_title:"Navigation",selector:" .ecom-slider--container"},modify:o}),this.items&&this.items.some(a=>a.overlay==!0)&&t.push({group_alias:"background:overlay",options:{group_name:"overlay",group_title:"Overlay",selector:" .ecom-slider__image--wrapper, .ecom-slider__image--wrapper .ecom-slider__image--link"}});let n={group_title:"Autoplay progress",params:[{type:"number",name:"size_progress",label:"Size",options:{units:{px:{min:0,max:200}}},css:{properties:{width:"%value%",height:"%value%"},selector:"root .ecom-autoplay-progress"}},{name:"text_progress_color",label:"Text Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{color:""},selector:"root  .ecom-autoplay-progress"}},{type:"number",name:"size_progress_stroke",label:"Stroke width",options:{units:{px:{min:0,max:50}}},css:{properties:{"stroke-width":""},selector:"root .ecom-autoplay-progress svg"}},{name:"stroke_progress_color",label:"Stroke color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{stroke:""},selector:"root  .ecom-autoplay-progress svg"}},{type:"line"},{type:"paragraph",content:"Position"},{type:"number",name:"position_right",label:"Right",options:{units:{"%":{min:0,max:100},px:{min:0,max:1e3}}},css:{properties:{right:""},selector:"root .ecom-autoplay-progress"}},{type:"number",name:"position_bottom",label:"Bottom",options:{units:{"%":{min:0,max:100},px:{min:0,max:1e3}}},css:{properties:{bottom:""},selector:"root .ecom-autoplay-progress"}}]};return(s=this.data.settings)!=null&&s.autoplay_progress&&t.push(n),t}}},ps={class:"ecom-elements ecom-base-element ecom-elements-slider"},ms={class:"ecom-slider--container"},ds=["data-option-swiper"],us={class:"ecom-swiper-wrapper"},gs={class:"ecom-content-item"},_s=["data-id","onClick"],hs=["href"],fs=["innerHTML"],bs={key:0,class:"ecom-overlay"},ys=p("span",null,"overlay",-1),vs=[ys],xs=["innerHTML"],ws={key:0,class:"ecom-overlay"},ks=p("span",null,"overlay",-1),Cs=[ks],Ts=["data-navigator-type"],Ls={class:"ecom-flex-center"},$s=["innerHTML"],Ss={class:"ecom-swiper-pagination"},Ms=["innerHTML"],Hs={key:1,class:"ecom-swiper-navigation-position"},Bs=["innerHTML"],qs=["innerHTML"],Es={key:2,class:"ecom-swiper-pagination-position ecom-swiper-pagination"},Ds={key:3,class:"ecom-autoplay-progress"},As=p("svg",{viewBox:"0 0 48 48"},[p("circle",{cx:"24",cy:"24",r:"20"})],-1),zs=p("span",null,null,-1),js=[As,zs];function Is(e,t,o,n,s,i){const a=N("Blocks"),l=N("GroupElement");return c(),d("div",ps,[(c(),z(l,{key:0,data:o.data,deep:o.deep,index:o.index,section_id:i.section_id},{items:Q(u=>{var r,g;return[p("div",ms,[p("div",{class:S(["ecom-element ecom-slider slider__body ecom-swiper-container",((r=o.data.settings)==null?void 0:r.slider_effect)==="cube"?"ecom-swiper-effect-cube":""]),"data-option-swiper":i.optionSwiper},[p("div",us,[(c(!0),d(D,null,Y(u.items,(m,h)=>{var _,b,f,v,x,C;return c(),d("div",{key:m.id,class:"ecom-swiper-slide"},[p("div",gs,[m.image?(c(),d("div",{key:0,class:S(["ecom-slider__image--wrapper",{"ecom-slider__has-link":((_=m==null?void 0:m.link)==null?void 0:_.href)&&((b=m==null?void 0:m.link)==null?void 0:b.href)!=""}]),"data-id":m.id,onClick:L=>i.editSlider(h)},[((f=m==null?void 0:m.link)==null?void 0:f.href)&&((v=m==null?void 0:m.link)==null?void 0:v.href)!=""?(c(),d("a",j({key:0,href:m.link.href},m.link,{class:"ecom-slider__image--link"}),[p("picture",{class:"ecom-image-background",innerHTML:e.$helpers.renImageResponsive(m.image,i.storeScreens,h==0,i.img_style(m))},null,8,fs),m.overlay?(c(),d("div",bs,vs)):y("",!0)],16,hs)):(c(),d(D,{key:1},[p("picture",{class:"ecom-image-background",innerHTML:e.$helpers.renImageResponsive(m.image,i.storeScreens,h==0,i.img_style(m))},null,8,xs),m.overlay?(c(),d("div",ws,Cs)):y("",!0)],64))],10,_s)):y("",!0),p("div",{class:S(["ecom-content-item__container",["ecom-transition-"+((C=(x=i.slider)==null?void 0:x.settings)==null?void 0:C.content_animation)]])},[R(a,{data:m.blocks,deep:o.deep,index:h,group:m,section_id:i.section_id},null,8,["data","deep","index","group","section_id"])],2)])])}),128))])],10,ds),i.isNavigation&&i.isCombined()=="combine"?(c(),d("div",{key:0,class:"ecom-swiper-navigation","data-navigator-type":i.isCombined()=="combine"},[p("div",Ls,[Z(p("button",{class:"ecom-swiper-button ecom-swiper-button-prev",innerHTML:i.slider.settings.slider_prev_icon},null,8,$s),[[K,i.isArrow()]]),Z(p("div",Ss,null,512),[[K,i.isPagination()]]),Z(p("button",{class:"ecom-swiper-button ecom-swiper-button-next",innerHTML:i.slider.settings.slider_next_icon},null,8,Ms),[[K,i.isArrow()]])])],8,Ts)):y("",!0),i.isNavigation&&i.isCombined()!="combine"?Z((c(),d("div",Hs,[p("button",{class:"ecom-swiper-button ecom-swiper-button-prev",style:E(i.sliderNav),innerHTML:i.slider.settings.slider_prev_icon},null,12,Bs),p("button",{class:"ecom-swiper-button ecom-swiper-button-next",style:E(i.sliderNav),innerHTML:i.slider.settings.slider_next_icon},null,12,qs)],512)),[[K,i.isArrow()]]):y("",!0),i.isNavigation&&i.isCombined()!="combine"?Z((c(),d("div",Es,null,512)),[[K,i.isPagination()]]):y("",!0),(g=o.data.settings)!=null&&g.autoplay_progress?(c(),d("div",Ds,js)):y("",!0)])]}),_:1},8,["data","deep","index","section_id"]))])}const xe=k(We,[["render",Is]]);We.__docgenInfo={exportName:"default",displayName:"slider",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"index",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"deep",type:{name:"number"},defaultValue:{func:!1,value:"0"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Slider.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const Oe={name:"Video",mixins:[T,H,M],vendors:["modal_js","modal_css"],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["link","player_controls","end_time","start_time","image_overlay","play_on_lightbox","aspect_ratio","autoplay","loop","upload","poster_image"]}},mounted(){var e,t,o,n;this.$refs.video&&(((t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.autoplay)||((n=(o=this.data)==null?void 0:o.settings)==null?void 0:n.mute))&&this.$refs.video.setAttribute("muted","")},computed:{linkExtra(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.link_extra},videoData(){return this.data},popupAttr(){let e={};return this.video.play_on_lightbox&&this.video.image_overlay&&(e={"ecom-modal-source":"#ecom-elements__popup-video-"+this.data.id,"ecom-modal":"inline"}),e},popupId(){return"ecom-elements__popup-video-"+this.data.id},posterImage(){var e,t;return(t=(e=this.data.settings)==null?void 0:e.poster_image)==null?void 0:t.value},settings(){return[{params:[{type:"popup",label:"Source",name:"source",options:{type:"dropdown",values:{youtube:"Youtube",vimeo:"Vimeo",hosted:"External URL",uploaded:"Upload"},preview:"title",default:!1},css:{isCss:!1}},{type:"picker",label:"Poster image",name:"poster_image",options:{visible:{keep_data:!0,condition:e=>e.source==="hosted"||e.source==="uploaded"},responsive:!1,type:"image",editAlt:!1}},{name:"link",label:"External URL",description:"Use link video share driver, .mp4, .oog,...",type:"text",options:{visible:{keep_data:!0,condition:e=>e.source==="hosted"}}},{type:"picker",name:"upload",label:`Choose or upload a video
 <i>(maximum 10Mb)</i>`,options:{type:"video",visible:{keep_data:!0,condition:e=>e.source==="uploaded"}}},{name:"srcYoutube",label:"Youtube link",type:"text",options:{visible:{keep_data:!0,condition:e=>e.source==="youtube"}}},{name:"srcVimeo",label:"Vimeo link",type:"text",options:{visible:{keep_data:!0,condition:e=>e.source==="vimeo"}}},{name:"aspect_ratio",label:"Aspect Ratio",type:"popup",options:{type:"dropdown",preview:"title",values:{"1/1":"1:1","3/2":"3:2","4/3":"4:3","16/9":"16:9","21/9":"21:9","9/16":"9:16"},responsive:!0},css:{selector:" .ecom-element_video-iframe iframe, .ecom-element_video-iframe video",properties:{"aspect-ratio":"","max-width":"100%"}}},{name:"start_time",label:"Start time (s)",type:"number",options:{half:!0,slider:!1,min:0,max:1e3,visible:{keep_data:!0,condition:e=>e.source!=="uploaded"}}},{name:"end_time",label:"End time",type:"number",options:{slider:!1,min:0,max:1e3,half:!0,visible:{keep_data:!0,condition:e=>["hosted","youtube"].includes(e.source)}}},{name:"mute",label:"Mute",type:"toggle",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0}},{name:"autoplay",label:"Auto play",type:"toggle",description:"To autoplay you have to enable muted option, Auto play also not work on safari mobile",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0}},{type:"link",label:"Link",name:"link_extra",options:{reset:!0,visible:{keep_data:!1,condition:e=>e.autoplay==!0}}},{name:"loop",label:"Loop",type:"toggle",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0}},{name:"player_controls",label:"Enable player controls",type:"toggle",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0}},{name:"image_overlay",label:"Enable overlay",type:"toggle",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0},css:{isCss:!1}},{name:"play_icon",label:"Play icon",type:"picker",oneline:!0,options:{type:"icon",multiple:!1,visible:{keep_data:!0,condition:e=>e.image_overlay===!0}}},{name:"play_on_lightbox",label:"Open in lightbox",type:"toggle",oneline:!0,options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0,visible:{keep_data:!1,condition:e=>e.image_overlay===!0}}}]},{group_title:"Tracking",params:[{type:"text",name:"tracking_id",label:"Tracking ID",options:{placeholder:"Enter tracking ID"}},{type:"paragraph",content:"You can use this field to add a tracking ID to your button. This ID will be sent to your EC Analytics when the button is clicked."}]}]},javascript(){return function(){if(!this.settings||!this.$el)return;var e=this.$el.querySelector(".ecom-video_overlay-icon");e&&(e.addEventListener("click",()=>{if(this.settings.source=="hosted"||this.settings.source=="uploaded"){let n=this.$el.querySelector(".ecom_video");n.autoplay=!0,n.load(),this.$el.querySelector(".ecom-video_overlay-icon").classList.remove("ecom-overlay"),this.$el.querySelector(".ecom-video-icon-play").style.display="none"}else{let n=this.$el.querySelector(".ecom_iframe"),s=n.getAttribute("src")+"&autoplay=1";n.setAttribute("src",s),this.$el.querySelector(".ecom-video_overlay-icon").classList.remove("ecom-overlay"),this.$el.querySelector(".ecom-video-icon-play").style.display="none"}}),e.dataset.ecTrackingId&&e.addEventListener("click",function(){window.Shopify.analytics&&Shopify.analytics.publish("ec_custom_events",{button_id:e.id,tracking_id:e.dataset.ecTrackingId})},{once:!0}));const t=this.$el.querySelector("[ecom-modal]");if(t&&this.settings.image_overlay&&this.settings.play_on_lightbox&&window.EComModal){var o=this.id;new window.EComModal(t,{cssClass:[o,"ecom-core","ecom-core-simulator"],onOpen:function(){var n=document.querySelector(".ecom-modal."+o);n&&n.querySelector(".ecom-modal-box__content").classList.add("ecom-element_video-iframe")}})}}},css(){return`

            .ecom-element_video-popup{
                display:none;
            }

            .ecom-video_link-extra {
                position: absolute;
                inset: 0;
                z-index: 5;
            }

                .element__video.ecom-element{
                    display: flex;
                    width: 100%;
                }
                .ecom-element_video-iframe{
                    display:inline-flex;
                    width:100%;
                    position:relative;
                    overflow:hidden;
                    justify-content: center;
                }
                .ecom-element_video-iframe iframe,
                .ecom-element_video-iframe video{
                    background:#000;
                }
                .ecom-element_video-iframe .ecom-video_overlay-icon{
                    position:absolute;
                    display:flex;
                    top:0;
                    bottom:0;
                    left:0;
                    right:0;
                    align-items:center;
                    justify-content:center;
                    border:none;
                    outline:none;
                    width: 100%;
                    height: 100%;
                    cursor:pointer;
                    background-color:#3336;
                    z-index:-1;
                    opacity:0;
                    border-radius: 0;

                }
                .ecom-element_video-iframe .ecom-video_overlay-icon:hover {
                    background-color:#3336;
                }
                .ecom-element_video-iframe .ecom-overlay{
                    z-index:1;
                    opacity:1;
                }

                .ecom-element_video-iframe video {
                    width: 100%;
                    /*height: intrinsic;*/
                }

                .ecom-video-icon-play{
                    position:absolute;
                    top:50%;
                    left:50%;
                    transform:translate(-50%,-50%);
                    color:white;
                    fill: currentColor;
                    display: flex;
                    z-index: 2;
                }
                .ecom-video-icon-play svg{
                    width: 50px;
                    height: auto;
                }
                .ecom-element_video-lightbox{
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    z-index: 100;
                    display: none;
                    opacity:0;
                }
                .ecom-light-box-modal{
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background-color: #333333d1;
                    display:block !important;
                }
                .ecom-element_video-lightbox.fadeIn{
                    display:block;
                    opacity:1;
                    -webkit-transition: opacity 3s;
                    -moz-transition: opacity 3s;
                    transition: opacity 3s;
                }
                .ecom-video-wrapper {
                    position: absolute;
                    top: 50%;
                    left: 10%;
                    right:10%;
                    z-index: 10;
                    height:700px;
                    -webkit-transform: translateY(-50%);
                    -moz-transform: translateY(-50%);
                    -ms-transform: translateY(-50%);
                    -o-transform: translateY(-50%);
                    transform: translateY(-50%);
                    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
                }

                .ecom-video-close-btn {
                    width:30px;
                    height:30px;
                    color: grey;
                    font-size: 25px;
                    position: fixed;
                    top: 3%;
                    right: 3%;
                    z-index: 2;
                    -webkit-transform: scale(1, 1);
                    -moz-transform: scale(1, 1);
                    -ms-transform: scale(1, 1);
                    -o-transform: scale(1, 1);
                    transform: scale(1, 1);
                    -webkit-transition: transform .5s ease, color .5s ease;
                    -moz-transition: transform .5s ease, color .5s ease;
                    -ms-transition: transform .5s ease, color .5s ease;
                    -o-transition: transform .5s ease, color .5s ease;
                    transition: transform .5s ease, color .5s ease;
                }

                .ecom-video-close-btn:hover {
                    color: white;
                    cursor: pointer;
                    -webkit-transform: scale(1.2, 1.2);
                    -moz-transform: scale(1.2, 1.2);
                    -ms-transform: scale(1.2, 1.2);
                    -o-transform: scale(1.2, 1.2);
                    transform: scale(1.2, 1.2);
                    -webkit-transition: transform .5s ease, color .5s ease;
                    -moz-transition: transform .5s ease, color .5s ease;
                    -ms-transition: transform .5s ease, color .5s ease;
                    -o-transition: transform .5s ease, color .5s ease;
                    transition: transform .5s ease, color .5s ease;
                }
                @media screen and (max-width : 786px) {
                    .ecom-video-wrapper {
                    height:350px;
                    }
                }
                @media screen and (max-width : 480px) {
                    .ecom-video-wrapper {
                    height:180px;
                    }
                }
            `},video(){return this.data.settings},linkYoutube(){var e,t,o;if((e=this.video)!=null&&e.srcYoutube){const n=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let s=this.video.srcYoutube.match(n),i=s&&s[2].length===11?s[2]:null;return`${location.protocol}//www.youtube.com/embed/${i}?version=3?${this.video.start_time?"&start="+this.video.start_time:""}${this.video.end_time?"&end="+this.video.end_time:""}&controls=${this.video.player_controls?1:0}&mute=${this.video.mute?1:0}&showinfo=0&iv_load_policy=3&playlist=${i}&autoplay=${(t=this.video)!=null&&t.autoplay?1:0}&loop=${(o=this.video)!=null&&o.loop?1:0}`}else return""},linkVimeo(){var e,t,o;if((e=this.video)!=null&&e.srcVimeo){const n=/(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/;let s=this.video.srcVimeo.match(n),i=s?s[1]:null;return`${location.protocol}//player.vimeo.com/video/${i}?rel=0?version=3&controls=${this.video.player_controls?1:0}&muted=${this.video.mute?1:0}${this.video.start_time?"&byline=1#t=00h00m"+this.video.start_time+"ss":""}&showinfo=0&autoplay=${(t=this.video)!=null&&t.autoplay?1:0}&loop=${(o=this.video)!=null&&o.loop?1:0}`}else return""},linkSelfHosted(){var e,t,o,n;if(this.video.source==="hosted")if((e=this.video)!=null&&e.link){let s=this.video.link.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&=]*)/);if(s&&s[0]=="https://drive.google.com"){const i=/\/file\/d\/(.+)\/(.+)/;let a=this.video.link.match(i),l=a?a[1]:null;return`${location.protocol}//drive.google.com/uc?export=download&id=${l}#t=${this.video.start_time?this.video.start_time:""},${this.video.end_time?this.video.end_time:""}`}else return this.video.link+`#t=${this.video.start_time?this.video.start_time:""},${this.video.end_time?this.video.end_time:""}`}else return"";else if(((t=this.video)==null?void 0:t.source)==="uploaded")return(n=(o=this.video)==null?void 0:o.upload)==null?void 0:n.value;return""},attrVideo(){return{controls:this.video.player_controls,autoplay:this.video.autoplay,loop:this.video.loop,playsinline:this.video.autoplay,preload:!!this.video.autoplay}},default(){return{settings:{link:"https://cdn.shopify.com/s/files/1/0629/4392/0358/files/flower.webm?v=1649754044",srcVimeo:"https://vimeo.com/210603721",srcYoutube:"https://www.youtube.com/watch?v=2djJhgfl91s",source:"youtube",player_controls:!0}}}},watch:{"data.settings.mute":{deep:!0,handler:function(e){this.$refs.video&&(this.$refs.video.muted=e,e?this.$refs.video.setAttribute("muted",""):this.$refs.video.removeAttribute("muted"))}}},methods:{handleLoadVideo(){var e,t;this.$refs.video&&(((t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.mute)==!0?(this.$refs.video.muted=!0,this.$refs.video.setAttribute("muted","")):(this.$refs.video.muted=!1,this.$refs.video.removeAttribute("muted")))},style(){var t,o;let e=[];return(t=this.data.settings)!=null&&t.play_icon&&e.push({group_alias:"icon:hover",options:{group_name:"videoPlayIcon",group_title:"Play icon",selector:" .element__video .ecom-video-icon-play"},modify:{params:{position:-1,fields:[{type:"line"},{alias:"spacing"}]}}}),(o=this.data.settings)!=null&&o.image_overlay&&e.push({group_alias:"background:overlay",options:{group_name:"overlay",group_title:"Overlay",selector:" .ecom-element_video-iframe"}}),e.push({group_title:"Popup content",group_name:"popup_content",selector:" .ecom-element_video-iframe",params:[{type:"number",label:"Width",name:"popup_width",options:{units:{"%":{min:0,max:100},px:{min:0,max:2e3},vw:{min:0,max:100}},reset:!1,responsive:!0},css:{properties:{width:""}}},{type:"number",label:"Height",name:"popup_height",options:{units:{px:{min:0,max:2e3},vw:{min:0,max:100}},reset:!1,responsive:!0},css:{properties:{height:""}}},{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .element__video.ecom-element "}}},{alias:"spacing"}]}),e}}},Ps={ref:"wrapper",class:"ecom__element element__video ecom-element"},Ns={class:"ecom-element_video-iframe ecom-element-overlay"},Vs=["data-ec-tracking-id"],Ws=["innerHTML"],Os=["poster","id"],Fs=["src"],Us=["id","src"];function Rs(e,t,o,n,s,i){var a,l,u,r,g,m,h,_,b,f;return c(),d("div",Ps,[p("div",Ns,[((l=(a=o.data)==null?void 0:a.settings)==null?void 0:l.autoplay)&&i.linkExtra&&i.linkExtra.href!=""?(c(),d("a",j({key:0,class:"ecom-video_link-extra"},i.linkExtra),null,16)):y("",!0),(u=i.video)!=null&&u.image_overlay?(c(),d("button",j({key:1,class:["ecom-video_overlay-icon",(r=i.video)!=null&&r.image_overlay?"ecom-overlay":""],"data-ec-tracking-id":(g=i.settings)==null?void 0:g.tracking_id},i.popupAttr),[(m=i.video)!=null&&m.image_overlay?(c(),d("span",{key:0,class:"ecom-video-icon-play",innerHTML:(h=i.video.play_icon)==null?void 0:h.value},null,8,Ws)):y("",!0)],16,Vs)):y("",!0),["hosted","uploaded"].includes((_=i.video)==null?void 0:_.source)?(c(),d("video",j({key:2,poster:(b=i.posterImage)!=null?b:"",style:{display:"flex !important"},id:i.popupId,onLoadeddata:t[0]||(t[0]=(...v)=>i.handleLoadVideo&&i.handleLoadVideo(...v)),class:"ecom_video"},i.attrVideo,{ref:"video"}),[p("source",{src:i.linkSelfHosted},null,8,Fs)],16,Os)):(c(),d("iframe",{key:3,id:i.popupId,class:"ecom_iframe",frameborder:"0",allowfullscreen:"1",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",style:{border:"0",width:"100%",display:"flex !important"},src:((f=i.video)==null?void 0:f.source)=="vimeo"?i.linkVimeo:i.linkYoutube},null,8,Us))])],512)}const Ys=k(Oe,[["render",Rs]]);Oe.__docgenInfo={exportName:"default",displayName:"Video",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:`{
}`}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Video.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Fe={name:"Button",presets:!0,docs:"https://help.ecomposer.io/docs/elements/basic-elements/button/",mixins:[T,H],props:{data:{type:Object,default(){return{}}}},data(){return{editing:!1,jsreactives:["animation_loop_time","animation"]}},computed:{javascript(){return function(){if(!this.$el)return!1;const e=this.$el;this.settings.animation&&function(o){if(!e)return;const n=e.querySelector(".ecom__element--button");if(!n)return;let s=parseInt(o.settings.animation_loop_time)*1e3||6e3,i=1e3;setInterval(function(){n.classList.add("animated"),setTimeout(function(){n.classList.remove("animated")},i)},s)}(this);var t=e.querySelector(".ecom__element--button");this.isLive&&t&&t.dataset.ecTrackingId&&t.addEventListener("click",function(o){if(window.Shopify.analytics){o.preventDefault();let n=document.createElement("div");document.body.appendChild(n),n.click(),Shopify.analytics.publish("ec_custom_events",{button_id:t.id,tracking_id:t.dataset.ecTrackingId}),t.cloneNode(!0).click()}},{once:!0})}},animatedClass(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)!=null&&t.animation?"animated":""},settings(){return[{group_alias:"button:settings",options:{group_name:"",group_title:"Button"},modify:{params:{position:10,fields:[{type:"line"},{type:"toggle",name:"animation",label:"Button animation",options:{values:{on:{label:"Enable",value:!0},off:{label:"Disable",value:!1}}}},{type:"number",label:'Loop time <span class="lowercase">(s)</span>',name:"animation_loop_time",options:{min:2,default:6,max:10,visible:function(e){return e.animation==!0}}}]}}},{group_title:"Tracking",params:[{type:"text",name:"tracking_id",label:"Tracking ID",options:{placeholder:"your-cta-name"}},{type:"paragraph",content:"You can add the tracking ID (for example: your-cta-name) for your button on this section. This ID will be sent to your EComposer Analytics to track the Conversion rate"}]}]},button(){return this.data.settings},attrLink(){var e;return(e=this.button)==null?void 0:e.link},css(){return`
                    .ecom-element-button.ecom-button-default{
                        display:flex;
                    }
                    a.ecom__element--button{
                        display: inline-flex;
                        align-items: center;
                        text-decoration: none;
                        text-align:center
                    }
                    .ecom__element--button-icon{
                        display:inline-flex;
                        color:inherit;
                    }
                    .ecom__element--button-icon svg{
                        width:24px;
                        height:auto
                    }
                `},default(){return{settings:{content:"Shop Now",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 12.96875 4.28125 L 11.53125 5.71875 L 21.8125 16 L 11.53125 26.28125 L 12.96875 27.71875 L 23.96875 16.71875 L 24.65625 16 L 23.96875 15.28125 Z"></path></svg>',spacing:"6px"},style:{button:{"justify-content":"flex-start",buttonColornormalmode:"#ffffff",buttonBackgroundnormalmode:{classic:{"background-color":"#333"}},buttonColorhovermode:"#ffffff",buttonBackgroundhovermode:{classic:{"background-color":"rgba(51, 51, 51, 0.84)"}},spacing:{padding:{bottom:"8px",top:"8px",left:"30px",right:"30px"},margin:{}},tab:"hover",buttonTypography:{"global-typography":"m5lJMKLv"},buttonBorderRadiusnormalmode:{top:"3px",left:"3px",bottom:"3px",right:"3px"},buttonBoxShadow:{"box-shadow":{horizontal:"1px",vertical:"1px",blur:"5px",color:"rgba(51, 51, 51, 0.49)"}},buttonTransition:500},icon:{tab:"normal",iconFontSize:"14px"}}}}},methods:{style(){var t;let e=[{group_alias:"button",options:{selector:" .ecom__element--button"},modify:{params:[{position:0,fields:[{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-button-default"}}},{alias:"text-align",options:{label:"Content alignment",name:"content_alignment",css:{selector:"root .ecom__element--button, root .ecom__element--button span",properties:{"justify-content":"","text-align":"","align-items":""}}}}]}]}},{group_name:"button_animation",group_title:"Animation effect",selector:" .ecom__element--button",params:[{name:"animation",label:"Animation",type:"popup",value:"shake",options:{type:"dropdown",values:"entrance-animation",size:"small"},css:{selector:".animated",properties:{"entrance-animation":""}}}]}];if((t=this.button)!=null&&t.icon){let o=[...ae("root .ecom__element--button:hover .ecom-button-icon").params];o.push({type:"line"},{alias:"spacing"}),e.push({group_title:"Icon",group_name:"icon",selector:" .ecom-button-icon",params:o})}return e}}},Gs={ref:"wrapper",class:"ecom__element ecom-element-button ecom-button-default"},Js=["id","href","data-ec-tracking-id"],Zs=["innerHTML"],Ks=["innerHTML"];function Xs(e,t,o,n,s,i){var a,l,u,r,g;return c(),d("div",Gs,[p("a",j({id:(a=i.button)==null?void 0:a.button_id,class:i.animatedClass,href:(l=i.button)!=null&&l.link?i.button.link.href:"#"},i.attrLink,{"data-ec-tracking-id":(u=i.button)==null?void 0:u.tracking_id,class:"ecom__element--button ecom-flex ecom-fl_center ecom-al_center"}),[p("span",{class:"ecom__element--button-icon-text",innerHTML:e.lang((r=i.button)==null?void 0:r.content,"button-content")},null,8,Zs),p("span",{class:"ecom-button-icon ecom__element--button-icon",innerHTML:(g=i.button)==null?void 0:g.icon},null,8,Ks)],16,Js)],512)}const Qs=k(Fe,[["render",Xs]]);Fe.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Button.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const Ue={name:"Icon",docs:"https://help.ecomposer.io/docs/elements/basic-elements/icon/",presets:!0,mixins:[T,H],props:{data:{type:Object,default(){return{}}}},computed:{settings(){return[{params:[{name:"icon",type:"picker",label:"Icon",options:{oneline:!0,type:"icon",reset:!1,output:["value","cate"]}},{type:"link",label:"Link",name:"link"}]}]},style(){return[{group_alias:"icon:hover",options:{group_name:"iconGeneral",group_title:"General",selector:" .ecom-icon .ecom-icon--container"},modify:{params:[{position:0,fields:{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-icon"}}}},{position:30,fields:{alias:"spacing"}}]}}]},default(){return{settings:{link:{href:"#"}},style:{iconGeneral:{"justify-content":"flex-start",iconFontSize:"48px",iconPrimaryColornormalmode:"#111",iconBordernormalmode:{},iconBorderRadiusnormalmode:{top:"50%",left:"50%",bottom:"50%",right:"50%"},spacing:{padding:{top:"12px",left:"12px",bottom:"12px",right:"12px"},margin:{}},iconPrimaryColorhovermode:"#111",iconBackgroundhovermode:{classic:{"background-color":"rgba(255, 255, 255, 0)"}},tab:"hover"}}}}}},ea={class:"ecom-element ecom-icon ecom-flex"},ta=["innerHTML"],oa=["innerHTML"],ia={key:1,class:"ecom-icon--container ecom-in_flex"},na=p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},[p("path",{d:"M64 416C28.65 416 0 387.3 0 352V64C0 28.65 28.65 0 64 0H352C387.3 0 416 28.65 416 64V96H481.3C495.3 96 508.6 102.1 517.7 112.8L596.4 204.6C603.9 213.3 608 224.4 608 235.8V384H624C632.8 384 640 391.2 640 400C640 408.8 632.8 416 624 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H255.1C255.1 469 213 512 159.1 512C106.1 512 63.1 469 63.1 416H64zM32 64V352C32 369.7 46.33 384 64 384H69.46C82.64 346.7 118.2 320 160 320C201.8 320 237.4 346.7 250.5 384H384V64C384 46.33 369.7 32 352 32H64C46.33 32 32 46.33 32 64zM570.9 224L493.4 133.6C490.4 130 485.1 128 481.3 128H416V224H570.9zM416 256V344.4C432.1 329.2 455.4 320 480 320C521.8 320 557.4 346.7 570.5 384H576V256H416zM160 352C124.7 352 96 380.7 96 416C96 451.3 124.7 480 160 480C195.3 480 224 451.3 224 416C224 380.7 195.3 352 160 352zM480 480C515.3 480 544 451.3 544 416C544 380.7 515.3 352 480 352C444.7 352 416 380.7 416 416C416 451.3 444.7 480 480 480z"})],-1),sa=[na];function aa(e,t,o,n,s,i){var a,l,u,r,g;return c(),d("div",ea,[(a=o.data.settings)!=null&&a.icon?(c(),d(D,{key:0},[(l=o.data.settings.link)!=null&&l.href?(c(),d("a",j({key:0,class:"ecom-icon--container ecom-in_flex"},(u=o.data.settings)==null?void 0:u.link,{innerHTML:(r=o.data.settings)==null?void 0:r.icon.value}),null,16,ta)):(c(),d("span",{key:1,class:"ecom-icon--container ecom-in_flex",innerHTML:(g=o.data.settings)==null?void 0:g.icon.value},null,8,oa))],64)):(c(),d("span",ia,sa))])}const ra=k(Ue,[["render",aa]]);Ue.__docgenInfo={exportName:"default",displayName:"Icon",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Icon.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const Re={name:"Tabs",presets:!0,docs:"https://help.ecomposer.io/docs/elements/basic-elements/tabs/",components:{GroupElement:oe},mixins:[T,H],props:{data:{type:Object,default(){return{}}},index:{type:Number,default:0},deep:{type:Number,default:0}},data(){return{is:"tabs",name:"Tabs",jsreactives:["items"]}},computed:{section_id(){return(this==null?void 0:this.$parent.section_id)||""},css(){return`
                .tabs__wrapper.ecom__element {
                    display: flex;
                    width: 100%;
                }
                .tabs__wrapper .core__group--item {
                    flex: 1;
                }

                .tab__item {
                    visibility: hidden;
                    opacity:0;
                    z-index:1;
                    transition: all 500ms ease;
                    display:none;
                }
                .tab__item.ecom-item-active{
                    visibility: visible;
                    opacity:1;
                    z-index:2;
                    display:block;
                }
                .tabs_nav--content {
                    display: flex;
                }
                .tabs__navs {
                    display: flex;
                }
                .tabs__nav {
                    padding: 16px 30px;
                    cursor: pointer;
                    flex-direction: row;
                }
                .tabs_nav--sub-text {
                    display: flex;
                    width: 100%;
                }
                .tabs_nav--text {
                    margin: 0;
                    white-space: nowrap;
                    width:100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                @media (min-width: 768px) {
                    .tabs__wrapper--horizontal, .tabs__navs--vertical, .tabs__navs--vertical .tabs__navs--items {
                        flex-direction: column;
                    }
                    .tabs__wrapper--vertical,
                    .tabs__navs--horizontal,
                    .tabs__navs--items {
                        flex-direction: row;
                    }
                    .tabs__wrapper--vertical>.core__group--items {
                        width: 100%;
                    }
                    .ecom-position-sticky {
                        position: sticky;
                        top: 0;
                    }
                }
                .tabs__nav {
                    display: flex;
                    align-items: center;
                }
                .tabs__nav.ecom-item-active{
                    pointer-events: none;
                }
                .tabs_nav--icon {
                    display:flex;
                }
                .tabs_nav--icon svg{
                    width:24px;
                    height:auto;
                }
                .tabs__navs--horizontal, .tabs__navs--items{
                    display:flex;
                    overflow-x:auto;
                    overflow: -moz-scrollbars-none;
                    -ms-overflow-style: none;
                }
                .tabs__navs--horizontal::-webkit-scrollbar {
                    width: 0 !important;
                    display: none;
                }
                .tabs__body >div{
                    padding:0 !important;
                }
                .tab__item,
                .tabs__body{
                    height:100%
                }
                .tabs__items{
                    flex:1
                }
                .tabs__navs--vertical {
                  width: var(--ecom-tab-nav-width);
                  max-width: var(--ecom-tab-nav-width);
                }
                .core__group--items {
                  width: var(--ecom-tab-item-width);
                  max-width: var(--ecom-tab-item-width);
                }
                .ecom-items--sub-text {
                    display: block;
                }
                @media (max-width: 1024px) {
                  .tabs__navs--vertical {
                    width: var(--ecom-tab-nav-width__tablet);
                    max-width: var(--ecom-tab-nav-width__tablet);
                  }
                  .core__group--items {
                    width: var(--ecom-tab-item-width__tablet);
                    max-width: var(--ecom-tab-item-width__tablet);
                  }
                }
                @media screen and (max-width: 767px){
                    .tabs__wrapper{
                        flex-direction:column
                    }
                    .tabs__wrapper.ecom__element .tabs__navs {
                      overflow-x: hidden;
                      flex-direction: column;
                    }
                    .tabs__navs--vertical {
                      width: 100%;
                      max-width: 100%;
                    }
                    .core__group--items {
                      width: 100%;
                      max-width: 100%;
                    }
                }
            `},javascript(){return function(){let e=this.$el;if(!e)return;var t=e.querySelectorAll(":scope > .tabs__wrapper > .tabs__navs > .tabs__navs--items > .tabs__nav"),o=e.querySelectorAll(":scope > .tabs__wrapper > .core__group--items > .tab__item");t.forEach((i,a)=>{i.onclick=function(){this.classList&&this.classList.contains("ecom-item-active")?(t.forEach(l=>l.classList.remove("ecom-item-active")),o.forEach(l=>l.classList.remove("ecom-item-active"))):(t.forEach(l=>l.classList.remove("ecom-item-active")),o.forEach(l=>l.classList.remove("ecom-item-active")),i.classList.add("ecom-item-active"),o[a].classList.add("ecom-item-active")),s()}});function n(){let i=window.location.hash;if(i){let a=e.querySelector(`[data-target="${i}"]`);if(a){a.click();let r=a.getBoundingClientRect().top+window.pageYOffset-window.innerHeight/2;window.scrollTo(0,r)}}}setTimeout(()=>{n()},300);function s(){window.dispatchEvent(new window.Event("resize")),setTimeout(()=>{window.dispatchEvent(new window.Event("resize"))},500)}window.addEventListener("hashchange",n,!1)}},settings(){return[{params:[{name:"items",type:"group",value:[],options:{add_text:"Add new tab",is_clear_all:!1},params:[{type:"text",label:"Title",name:"title"},{type:"textarea",label:"Sub Title",name:"sub_title",options:{toolbar:"short",height:80}},{type:"picker",label:"Icon",name:"picker",options:{type:"icon",multiple:!1}},{name:"iconPosition",label:"Icon Position",type:"choose",options:{oneline:!0,type:"align-x",values:[0,1],visible:e=>e.picker}},{type:"choose",label:'<span class="uppercase">HTML</span> Tag',name:"tag",options:{type:"heading"}},{name:"tab_id",label:"Tab ID",type:"text",options:{placeholder:"your-id"}}]},{type:"line"},{name:"position",type:"toggle",label:"Horizontal style",options:{values:{on:{label:"Yes",value:"vertical"},off:{label:"No",value:"horizontal"}}},css:{isCss:!1}},{type:"paragraph",options:{warnings:{content:"Note: Not working on mobile!"}}},{type:"line"},{name:"order_x",label:"Tabs Position",type:"choose",options:{oneline:!0,type:"align-x",values:[0,1],visible:{keep_data:!1,condition:e=>e.position==="vertical"}},css:{selector:" .tabs__navs",properties:{order:""}}},{name:"order_y",label:"Tabs Position",type:"choose",options:{oneline:!0,type:"align-y",values:[0,1],visible:{keep_data:!1,condition:e=>e.position==="horizontal"}},css:{selector:" .tabs__navs",properties:{order:""}}},{name:"tabs_sticky",type:"toggle",label:"Tabs sticky",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:{keep_data:!1,condition:e=>e.position==="vertical"}},css:{isCss:!1}},{type:"line"},{name:"title_overflow",label:"Tab title overflow",type:"popup",value:"no-wrap",options:{type:"dropdown",preview:"title",default:!1,values:{nowrap:"Scroll X",wrap:"Wrap"}},css:{selector:" .tabs__navs--items",properties:{"flex-wrap":""}}},{type:"paragraph",options:{warnings:{content:"Note: For vertical style!"}}},{type:"line"},{type:"number",name:"widthVertical",label:"Width Vertical",value:20,options:{units:{"%":{min:10,max:100,step:1}},responsive:!0,visible:{keep_data:!1,condition:e=>e.position==="vertical"}}},{type:"number",name:"gap",label:"Gap item",options:{units:{px:{min:0,max:1e3}},responsive:!0},css:{selector:" .tabs__navs",properties:{gap:""}}}]}]},tabs(){return this.data},styleVertical(){var n,s,i;if(this.tabs.settings.position!=="vertical")return{};let e=(n=this.tabs.settings)!=null&&n.widthVertical?parseInt(this.tabs.settings.widthVertical):30,t=(s=this.tabs.settings)!=null&&s.widthVertical__tablet?parseInt(this.tabs.settings.widthVertical__tablet):30,o=(i=this.tabs.settings)!=null&&i.widthVertical__mobile?parseInt(this.tabs.settings.widthVertical__mobile):30;return{tabItem:{"--ecom-tab-item-width":100-e+"%","--ecom-tab-item-width__tablet":100-t+"%","--ecom-tab-item-width__mobile":100-o+"%"},tabNav:{"--ecom-tab-nav-width":e+"%","--ecom-tab-nav-width__tablet":t+"%","--ecom-tab-nav-width__mobile":o+"%"}}},default(){return{settings:{items:[{title:"Tab Content 1",tag:"h3",iconPosition:0,blocks:[{name:"heading",settings:{content:'<h2 style="margin: 0px 0px 10px; padding: 0px; font-weight: 400; font-family: DauphinPlain; font-size: 24px; line-height: 24px; color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Why do we use it?</h2>',tag:"h3"},style:{text:{textTextAlign:"left",textColor:"#000000",textTypography:{"font-weight":"600","font-size":"20px"}}},advanced:{},css:{settings:{style:"",keyframes:[],fonts:[]},style:{style:".ecom-core.ecom-zyr8xb6y .element__heading .ecom__heading{text-align: left;color: #000000;}.ecom-core.ecom-zyr8xb6y .element__heading .ecom__heading,.ecom-core.ecom-zyr8xb6y .element__heading .ecom__heading a{font-weight: 600;font-size: 20px;}",keyframes:[],fonts:[]},advanced:{style:"",keyframes:[],fonts:[]}},auto_apply:!0},{settings:{content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},name:"text",style:{text:{textTextAlign:"left",textTypography:{"global-typography":"m5lJMKLv"}},text_dropcap:{dropcapTypography:{"font-size":"40px"},dropcapColor:"#f50c0c",dropcapColorStackedView:"#5eff00",dropcapBackgroundStackedView:"#4800ff",dropcapColorFramedView:"#1aff00",dropcapBackgroundFramedView:"#1100ff",dropcapView:"framed"}},advanced:{},css:{settings:{style:"",keyframes:[],fonts:[]},style:{style:".ecom-core.ecom-jt4wqxqm{text-align: left;}.ecom-core.ecom-jt4wqxqm,.ecom-core.ecom-jt4wqxqm a{title: var(--ecom-global-typography-m5lJMKLv-title);value: var(--ecom-global-typography-m5lJMKLv-value);}",keyframes:[[]],fonts:[]},advanced:{style:"",keyframes:[],fonts:[]}}}],settings:{section:{}}},{title:"Tab Content 2",tag:"h3",iconPosition:0,blocks:[{name:"heading",settings:{content:'<h2 style="margin: 0px 0px 10px; padding: 0px; font-weight: 400; font-family: DauphinPlain; font-size: 24px; line-height: 24px; color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Where does it come from?</h2>',tag:"h3"},style:{text:{textTextAlign:"left",textColor:"#000000",textTypography:{"font-weight":"600","font-size":"20px"}}},advanced:{},css:{settings:{style:"",keyframes:[],fonts:[]},style:{style:".ecom-core.ecom-8gwbtqbs .element__heading .ecom__heading{text-align: left;color: #000000;}.ecom-core.ecom-8gwbtqbs .element__heading .ecom__heading,.ecom-core.ecom-8gwbtqbs .element__heading .ecom__heading a{font-weight: 600;font-size: 20px;}",keyframes:[],fonts:[]},advanced:{style:"",keyframes:[],fonts:[]}},auto_apply:!0},{settings:{content:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'},name:"text",style:{text:{textTextAlign:"left",textTypography:{"global-typography":"m5lJMKLv"}},text_dropcap:{dropcapTypography:{"font-size":"40px"},dropcapColor:"#f50c0c",dropcapColorStackedView:"#5eff00",dropcapBackgroundStackedView:"#4800ff",dropcapColorFramedView:"#1aff00",dropcapBackgroundFramedView:"#1100ff",dropcapView:"framed"}},advanced:{},css:{settings:{style:"",keyframes:[],fonts:[]},style:{style:".ecom-core.ecom-mmu16t36{text-align: left;}.ecom-core.ecom-mmu16t36,.ecom-core.ecom-mmu16t36 a{title: var(--ecom-global-typography-m5lJMKLv-title);value: var(--ecom-global-typography-m5lJMKLv-value);}",keyframes:[[]],fonts:[]},advanced:{style:"",keyframes:[],fonts:[]}}}],settings:{section:{}}},{title:"Tab Content 3",tag:"h3",iconPosition:0,blocks:[{settings:{content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},name:"text",style:{text:{textTextAlign:"left",textTypography:{"global-typography":"m5lJMKLv"}},text_dropcap:{dropcapTypography:{"font-size":"40px"},dropcapColor:"#f50c0c",dropcapColorStackedView:"#5eff00",dropcapBackgroundStackedView:"#4800ff",dropcapColorFramedView:"#1aff00",dropcapBackgroundFramedView:"#1100ff",dropcapView:"framed"}},advanced:{},css:{settings:{style:"",keyframes:[],fonts:[]},style:{style:".ecom-core.ecom-bqkyn7op{text-align: left;}.ecom-core.ecom-bqkyn7op,.ecom-core.ecom-bqkyn7op a{title: var(--ecom-global-typography-m5lJMKLv-title);value: var(--ecom-global-typography-m5lJMKLv-value);}",keyframes:[[]],fonts:[]},advanced:{style:"",keyframes:[],fonts:[]}}}]}],position:"horizontal",gap:"10px"},style:{general:{itemtab:"hover",justifyContent:"center",spacing:{padding:{left:"30px",top:"16px",bottom:"16px",right:"30px"}},spacing__mobile:{padding:{left:"21px",right:"20px"}},boxBorderhovermode:{"border-style":"solid","border-width":{bottom:"2px"},"border-color":"#333"},boxBorderactivemode:{"border-style":"solid","border-width":{bottom:"2px"},"border-color":"#333"}},texticon:{texttab:"active",textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"20px","font-weight":"500"},textColornormalmode:"#b8b8b8",textColorhovermode:"#111",textColoractivemode:"#111"},tabs_content:{spacing:{padding:{left:"15px",top:"10px",bottom:"10px",right:"15px"}},boxBorder:{"border-style":"solid","border-color":"rgba(5, 150, 105, 0.1)"},spacing__mobile:{padding:{left:"20px",top:"20px",bottom:"20px",right:"20px"},margin:{}}}}}}},methods:{setEditingElement(e){this.$store.commit("builder/setEditingElement",this),!1 in this.data.settings.items&&Object.defineProperty(this.data.settings.items,"tabOpened",{enumerable:!1,writable:!0}),this.data.settings.items.tabOpened=e},check(e){var t,o;return(o=(t=this.data.settings)==null?void 0:t.items)==null?void 0:o.filter(n=>n[e]).length},style(){var s;let e=[],t="",o="align-full";return this.check("title")&&this.check("picker")?(t="Title & Icon",e.push({title:"Title",type:"items:text"},{title:"Icon",type:"items:icon"})):(this.check("title")&&(t="Title",e.push({title:"Title",type:"items:text"})),this.check("picker")&&(t="Icon",e.push({title:"Icon",type:"items:icon"}))),((s=this.data.settings)==null?void 0:s.position)=="vertical"&&(o="align-y-full"),[{group_alias:"items",options:{group_name:"general",selector:" .tabs__wrapper.ecom__element .tabs__nav"},modify:{params:[{position:3,fields:{name:"box-shadow",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow",visible:{keep_data:!0,condition:i=>i.itemtab==="normal"}},css:{selector:"root .tabs__nav"}}},{position:8,fields:{name:"box-shadow-hover",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow",visible:{keep_data:!0,condition:i=>i.itemtab==="hover"}},css:{selector:"root .tabs__nav:hover"}}},{position:13,fields:{name:"box-shadow-active",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow",visible:{keep_data:!0,condition:i=>i.itemtab==="active"}},css:{selector:"root .tabs__nav.ecom-item-active"}}},{fields:{name:"justifyContent",label:"Alignment",type:"choose",options:{responsive:!0,type:o,values:["flex-start","center","flex-end","space-between"]},css:{selector:"root .tabs__wrapper.ecom__element .tabs__navs",properties:{"justify-content":""}}}},{position:20,fields:[{type:"line"},{alias:"spacing"}]}]}},{group_alias:e,options:{group_name:"texticon",group_title:t,selector:" .tabs__wrapper.ecom__element"},modify:{params:[{position:1,fields:{alias:"align-items",options:{label:"Alignment",css:{selector:" .tabs__nav"}}}},{position:6,fields:{type:"dimension",label:"Spacing",name:"spacing_title",options:{visible:{keep_data:!0,condition:i=>i.texttab==="normal"},responsive:!0,units:"default"},css:{selector:" .tabs_nav--text",properties:{spacing:""}}}},{position:11,fields:{type:"dimension",label:"Spacing",name:"spacing_title_hover",options:{visible:{keep_data:!0,condition:i=>i.texttab==="hover"},responsive:!0,units:"default"},css:{selector:" .ecom-items:hover .tabs_nav--text",properties:{spacing:""}}}},{position:20,fields:{type:"popup",label:"Transition",name:"transition",options:{visible:{keep_data:!0,condition:i=>i.texttab==="hover"},type:"transitions"},css:{selector:"root .tabs_nav--text.ecom-items--text"}}},{position:12,fields:{type:"dimension",label:"Spacing",name:"spacing_title_active",options:{visible:{keep_data:!0,condition:i=>i.texttab==="active"},responsive:!0,units:"default"},css:{selector:" .ecom-item-active .tabs_nav--text",properties:{spacing:""}}}},{position:20,fields:{alias:"align-items",options:{label:"Icon alignment",name:"icon_alignment",css:{selector:" .tabs_nav--icon",properties:{"align-self":""}}}}},{position:21,fields:[{name:"margin",type:"dimension",label:"Margin",options:{responsive:!0,simple:!0,units:"default",visible:{keep_data:!0,condition:i=>i.tab==="normal"}},css:{selector:" .tabs_nav--icon",properties:{margin:""}}}]}]}},{group_alias:"items:sub",options:{group_name:"sub_title",group_title:"Sub title",selector:" .tabs_nav--sub-text"},modify:{params:[{position:1,fields:{alias:"justify-content",options:{label:"Alignment"}}},{position:2,fields:[{type:"background",label:"Text Gradient",name:"sub_gradient",options:{oneline:!0,reset:!0,types:["gradient"]},css:{properties:{background:""," -webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}}]},{position:6,fields:{type:"dimension",label:"Spacing",name:"spacing_sub",options:{visible:{keep_data:!0,condition:i=>i.subTitleTab==="normal"},responsive:!0,units:"default"},css:{selector:"root .ecom-items--sub-text",properties:{spacing:""}}}},{position:11,fields:{type:"dimension",label:"Spacing",name:"spacing_sub_hover",options:{visible:{keep_data:!0,condition:i=>i.subTitleTab==="hover"},responsive:!0,units:"default"},css:{selector:"root .ecom-items.tabs__nav:hover .ecom-items--sub-text",properties:{spacing:""}}}},{position:12,fields:{type:"dimension",label:"Spacing",name:"spacing_sub_active",options:{visible:{keep_data:!0,condition:i=>i.subTitleTab==="active"},responsive:!0,units:"default"},css:{selector:"root .ecom-item-active .ecom-items--sub-text",properties:{spacing:""}}}}]}},{group_alias:"box",options:{group_name:"tabs_content",group_title:"Content",selector:" .tabs__body"},modify:{params:[{position:15,fields:[{alias:"spacing"}]}]}}]}},watch:{"data.settings.items.tabOpened":function(e){e>=0&&setTimeout(()=>{var o;let t=(o=this==null?void 0:this.$el)==null?void 0:o.querySelector(".tabs__navs > div:nth-of-type("+(e+1)+")");t&&!t.classList.contains("ecom-item-active")&&t.click()},200)}}},la=["id","data-target","onClick","onContextmenu"],ca=["innerHTML"],pa={class:"tabs_nav--content_right"},ma={class:"tabs_nav--content"},da={class:"tabs_nav--sub-text"},ua=["innerHTML"];function ga(e,t,o,n,s,i){var l;const a=N("GroupElement");return c(),z(a,{data:o.data,deep:o.deep,index:o.index,section_id:i.section_id,gclasses:{wrapper:`tabs__wrapper ecom__element ecom__tabs tabs__wrapper--horizontal ${i.tabs.settings&&i.tabs.settings.position&&i.tabs.settings.position==="vertical"?`tabs__wrapper--${i.tabs.settings.position}`:""}`,body:"tabs__body",item:"tab__item"},gstyles:{items:(l=i.styleVertical)==null?void 0:l.tabItem}},{before:Q(u=>{var r;return[p("div",{class:S(["tabs__navs",i.tabs.settings&&i.tabs.settings.position?`tabs__navs--${i.tabs.settings.position}`:""]),style:E((r=i.styleVertical)==null?void 0:r.tabNav)},[p("div",{class:S(["tabs__navs--items",{"ecom-position-sticky":i.tabs.settings.tabs_sticky}])},[(c(!0),d(D,null,Y(u.items,(g,m)=>(c(),d("div",{key:g.id,id:g.tab_id,class:S(["ecom-items tabs__nav",{"ecom-item-active":m===0}]),"data-target":g.tab_id?"#"+g.tab_id:"",onClick:h=>i.setEditingElement(m),onContextmenu:h=>i.tabs.actived=g.id},[g.picker&&g.picker.value?(c(),d("div",{key:0,class:"tabs_nav--icon ecom-items--icon",style:E({order:g.iconPosition}),innerHTML:g.picker&&g.picker.value},null,12,ca)):y("",!0),p("div",pa,[p("div",ma,[(c(),z(W(g.tag?g.tag:"div"),{class:"tabs_nav--text ecom-items--text",innerHTML:e.lang(g.title,"tab-title-"+m)},null,8,["innerHTML"]))]),p("div",da,[g.sub_title?(c(),d("span",{key:0,class:"ecom-items--sub-text",innerHTML:g.sub_title},null,8,ua)):y("",!0)])])],42,la))),128))],2)],6)]}),_:1},8,["data","deep","index","section_id","gclasses","gstyles"])}const _a=k(Re,[["render",ga]]);Re.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"index",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"deep",type:{name:"number"},defaultValue:{func:!1,value:"0"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Tabs.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const Ye={name:"Accordion",presets:!0,components:{GroupElement:oe},mixins:[T,H],props:{data:{type:Object,default(){return{}}}},data(){return{is:"accordion",name:"Accordion",jsreactives:["items"]}},computed:{section_id(){return(this==null?void 0:this.$parent.section_id)||""},accordion(){return this.data},wrapper_class(){var e;return(e=this.data.settings)!=null&&e.close_all?"ecom-accordion__wrapper ecom-flex ecom-column ecom-w__full ecom__element ecom__accordion ecom-accordion-close-all":"ecom-accordion__wrapper ecom-flex ecom-column ecom-w__full ecom__element ecom__accordion"},css(){return`
                    .ecom-accordion__title-text{
                        flex:1
                    }
                    body[ecom-loaded] .core__group--item.ecom-accordion__item.ecom-item-active > .ecom-accordion__body, body[ecom-loaded] .core__group--item.ecom-accordion__item.ecom-item-active .core__blocks--body {
                        overflow: inherit;
                    }
                    .core__group--item.ecom-accordion__item {
                        width: 100%;
                        flex:unset !important;
                        transition: all 500ms ease;
                    }
                    .ecom-accordion__item + .ecom-accordion__item {
                        margin-top: -1px;
                    }
                    .ecom-core .ecom-accordion__item >.ecom-accordion__body {
                        overflow: hidden;
                        margin: 0;
                        border: 0;
                        height:0;
                        transition:height 300ms ease-out;
                    }
                    .core__group--wrapper:not(.ecom-accordion-close-all) .ecom-accordion__item:first-child >.ecom-accordion__body  {
                        display: block;
                    }
                    .ecom-accordion__title {
                        cursor: pointer;
                    }
                    .ecom-accordion_nav--icon {
                        display: flex;
                        align-items: center;
                    }
                    .ecom-accordion_wrapper-info {
                        flex: 1;
                    }
                    .ecom-accordion_wrapper-info svg {
                        width: 20px;
                        height: 20px;
                    }
                    .ecom-accordion_wrapper-info .ecom-accordion_icon-title {
                        display: flex;
                    }

                    .ecom-accordion_nav--icon svg{
                        height:auto;
                    }
                    .ecom-accordion__body > div{
                        padding:0 !important;
                    }
                    .ecom-items-icon-active{
                        display:none;
                    }
                    .ecom-accordion_nav--icon.ecom-items--icon {
                      transition: all .2s ease;
                    }
                    .ecom-item-active.ecom-accordion__item > .ecom-items > .ecom-accordion_nav--icon{
                        display:none
                    }
                    .ecom-item-active.ecom-accordion__item > .ecom-items > .ecom-items-icon-active{
                        display:flex;
                    }
                    .ecom-accordion__wrapper .core__group--items{
                        display:flex;
                        flex-wrap:wrap;
                    }
                    .ecom-core .ecom-item-active > .ecom-accordion__body{
                        height:auto;
                    }
                `},javascript(){return function(){let e=this.$el;if(!e)return;const t=e.querySelectorAll(".ecom-accordion__item > .ecom-accordion__title");function o(s){const i=s.getBoundingClientRect();return i.top>=0&&i.left>=0&&i.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&i.right<=(window.innerWidth||document.documentElement.clientWidth)}t.forEach((s,i)=>{s.onclick=function(a){a.preventDefault();let l=this.parentNode,u=l.parentNode;const r=u.querySelectorAll(".ecom-accordion__item"),g=u.querySelectorAll(".ecom-accordion__title");if(this.classList&&this.classList.contains("ecom-item-active"))r.forEach(_=>n(_)),g.forEach(_=>_.classList.remove("ecom-item-active"));else{r.forEach(f=>n(f)),g.forEach(f=>f.classList.remove("ecom-item-active")),s.classList.add("ecom-item-active"),l.classList.add("ecom-item-active");let _=s.parentNode.querySelector(".ecom-accordion__body");_.style.height="auto";let b=_.clientHeight+"px";_.style.height="0px",setTimeout(()=>{_.style.height=b},10)}window.dispatchEvent(new window.Event("resize")),setTimeout(()=>{window.dispatchEvent(new window.Event("resize")),o(a.target)||h(a.target)},500);function m(_){let b=0;if(_.offsetParent){do b+=_.offsetTop;while(_=_.offsetParent);return[b]}}function h(_){window.scroll(0,m(e)-100)}}});function n(s){s.classList.remove("ecom-item-active"),s.querySelector(".ecom-accordion__body").style.height="0"}}},settings(){return[{group_title:"Items",params:[{name:"items",type:"group",value:[],options:{add_text:"Add item",is_clear_all:!1},params:[{type:"textarea",label:"Title",name:"title",options:{toolbar:!1}},{type:"picker",label:"Icon",name:"icon_title",options:{type:"icon",multiple:!1},css:{isCss:!1}},{type:"popup",label:'<span class="uppercase">HTML</span> Tag',name:"tag",value:"div",options:{type:"dropdown",values:{h1:"H1",h2:"H2",h3:"H3",h4:"H4",h5:"H5",h6:"H6",div:"DIV",p:"P"}}}]}]},{group_title:"General",params:[{type:"toggle",name:"close_all",label:"Default close",value:!1,options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"picker",label:"Icon",name:"icon",options:{type:"icon",multiple:!1},css:{isCss:!1}},{type:"picker",label:"Icon Active",name:"iconActive",options:{type:"icon",multiple:!1},css:{isCss:!1}},{name:"iconPosition",label:"Icon Position",type:"choose",value:"0",options:{oneline:!0,type:"align-x",values:["0","1"],visible:e=>e.icon||e.iconActive}}]}]},style(){return[{group_alias:"items",options:{group_name:"accordion_general",group_title:"Box title",selector:" .ecom-accordion__title"},modify:{params:[{position:0,fields:[{alias:"text-align",options:{label:"Alignment"}},{name:"headingBoxShadow",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow"}}]},{position:20,fields:[{type:"line"},{alias:"spacing"}]}],remove:[{index:7,length:1},{index:10,length:1}]}},{group_alias:"items:icon",options:{group_name:"accordion_icon",group_title:"Tab icon",selector:" .ecom-accordion__title"},modify:{params:{position:35,fields:[{type:"line"},{alias:"spacing",options:{css:{selector:"root .ecom-accordion_nav--icon"}}}]}}},{group_alias:"items:text",options:{group_name:"accordion_title",group_title:"Title",selector:" .ecom-accordion__item .ecom-accordion__title"}},{group_alias:"items:icon",options:{group_name:"accordion_title_icon",group_title:"Title icon",selector:" .ecom-accordion_wrapper-info"},modify:{remove:[{index:2,length:16}],params:[{position:35,fields:[{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"},{name:"active",title:"Active"}]},css:{isCss:!1}},{name:"iconTitleColor",label:"Color",type:"color",options:{visible:e=>e.tab==="normal",oneline:!0,global:{type:"colors"}},css:{selector:" .ecom-accordion_icon-title",properties:{color:""}}},{name:"iconBackground",label:"Background",type:"background",options:{visible:e=>e.tab==="normal",oneline:!0,responsive:!0},css:{selector:" .ecom-accordion_icon-title",properties:{background:""}}},{type:"popup",label:"Border",name:"iconBorder",options:{visible:e=>e.tab==="normal",oneline:!0,type:"border"},css:{selector:" .ecom-accordion_icon-title",properties:{border:""}}},{name:"iconBoxShadow",label:"Box Shadow",type:"popup",options:{visible:e=>e.tab==="normal",oneline:!0,type:"box-shadow"},css:{selector:" .ecom-accordion_icon-title",properties:{"box-shadow":""}}},{name:"iconBorderRadius",label:"Border Radius",type:"dimension",options:{visible:e=>e.tab==="normal",responsive:!0,type:"radius",units:{"%":{min:0,max:100},px:{min:0,max:1e3}}},css:{selector:" .ecom-accordion_icon-title",properties:{"border-radius":""}}},{name:"iconTitleColorHover",label:"Color",type:"color",options:{visible:e=>e.tab==="hover",oneline:!0,global:{type:"colors"}},css:{selector:" .ecom-accordion_icon-title:hover",properties:{color:""}}},{name:"iconBackgroundHover",label:"Background",type:"background",options:{visible:e=>e.tab==="hover",oneline:!0,responsive:!0},css:{selector:" .ecom-accordion_icon-title:hover",properties:{background:""}}},{type:"popup",label:"Border",name:"iconBorderHover",options:{visible:e=>e.tab==="hover",oneline:!0,type:"border"},css:{selector:" .ecom-accordion_icon-title:hover",properties:{border:""}}},{name:"iconBoxShadowHover",label:"Box Shadow",type:"popup",options:{visible:e=>e.tab==="hover",oneline:!0,type:"box-shadow"},css:{selector:" .ecom-accordion_icon-title:hover",properties:{"box-shadow":""}}},{name:"iconBorderRadiusHover",label:"Border Radius",type:"dimension",options:{visible:e=>e.tab==="hover",responsive:!0,type:"radius",units:{"%":{min:0,max:100},px:{min:0,max:1e3}}},css:{selector:" .ecom-accordion_icon-title:hover",properties:{"border-radius":""}}},{name:"iconTitleColorActive",label:"Color",type:"color",options:{visible:e=>e.tab==="active",oneline:!0,global:{type:"colors"}},css:{selector:"root .ecom-item-active .ecom-accordion_wrapper-info .ecom-accordion_icon-title",properties:{color:""}}},{name:"iconBackgroundActive",label:"Background",type:"background",options:{visible:e=>e.tab==="active",oneline:!0,responsive:!0},css:{selector:"root .ecom-item-active .ecom-accordion_wrapper-info .ecom-accordion_icon-title",properties:{background:""}}},{type:"popup",label:"Border",name:"iconBorderActive",options:{visible:e=>e.tab==="active",oneline:!0,type:"border"},css:{selector:"root .ecom-item-active .ecom-accordion_wrapper-info .ecom-accordion_icon-title",properties:{border:""}}},{name:"iconBoxShadowActive",label:"Box Shadow",type:"popup",options:{visible:e=>e.tab==="active",oneline:!0,type:"box-shadow"},css:{selector:"root .ecom-item-active .ecom-accordion_wrapper-info .ecom-accordion_icon-title",properties:{"box-shadow":""}}},{name:"iconBorderRadiusActive",label:"Border Radius",type:"dimension",options:{visible:e=>e.tab==="active",responsive:!0,type:"radius",units:{"%":{min:0,max:100},px:{min:0,max:1e3}}},css:{selector:"root .ecom-item-active .ecom-accordion_wrapper-info .ecom-accordion_icon-title",properties:{"border-radius":""}}},{type:"line"},{alias:"spacing",options:{css:{selector:"root .ecom-accordion_icon-title"}}}]}]}},{group_alias:"box",options:{group_name:"accordion_content",group_title:"Content",selector:" .core__blocks--body"},modify:{params:[{position:15,fields:[{alias:"spacing"}]}]}}]},default(){return{settings:{items:[{title:"Accordion 1",blocks:[{settings:{content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},name:"text",style:{text:{textTextAlign:"left",textTypography:{"global-typography":"m5lJMKLv"}},text_dropcap:{dropcapTypography:{"font-size":"40px"},dropcapColor:"#f50c0c",dropcapColorStackedView:"#5eff00",dropcapBackgroundStackedView:"#4800ff",dropcapColorFramedView:"#1aff00",dropcapBackgroundFramedView:"#1100ff",dropcapView:"framed"}},css:{style:{style:".ecom-core.ecom-8c4xz63h{text-align: left;}.ecom-core.ecom-8c4xz63h,.ecom-core.ecom-8c4xz63h a{}",keyframes:[],fonts:[]},settings:{style:"",keyframes:[],fonts:[]},advanced:{style:"",keyframes:[],fonts:[]}},id:"ecom-8c4xz63h",firstinit:!0,tab_active:"content",advanced:{}}],icon:{name:"plus",thumbnail:'<svg xmlns="http: //www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',value:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},iconActive:{name:"minus",thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>',value:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},iconPosition:"1",tag:"h3",hasElementRequestLiquid:!1,id:"ecom-a0yo5dtp"},{title:"Accordion 2",blocks:[{settings:{content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},name:"text",style:{text:{textTextAlign:"left",textTypography:{"global-typography":"m5lJMKLv"}},text_dropcap:{dropcapTypography:{"font-size":"40px"},dropcapColor:"#f50c0c",dropcapColorStackedView:"#5eff00",dropcapBackgroundStackedView:"#4800ff",dropcapColorFramedView:"#1aff00",dropcapBackgroundFramedView:"#1100ff",dropcapView:"framed"}},css:{style:{style:".ecom-core.ecom-7kh9a1vn{text-align: left;}.ecom-core.ecom-7kh9a1vn,.ecom-core.ecom-7kh9a1vn a{}",keyframes:[],fonts:[]},settings:{style:"",keyframes:[],fonts:[]},advanced:{style:"",keyframes:[],fonts:[]}},id:"ecom-7kh9a1vn",firstinit:!0,tab_active:"content",advanced:{}},{settings:{content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},name:"text",style:{text:{textTextAlign:"left",textTypography:{"global-typography":"m5lJMKLv"}},text_dropcap:{dropcapTypography:{"font-size":"40px"},dropcapColor:"#f50c0c",dropcapColorStackedView:"#5eff00",dropcapBackgroundStackedView:"#4800ff",dropcapColorFramedView:"#1aff00",dropcapBackgroundFramedView:"#1100ff",dropcapView:"framed"}},css:{style:{style:".ecom-core.ecom-oy80b26v{text-align: left;}.ecom-core.ecom-oy80b26v,.ecom-core.ecom-oy80b26v a{}",keyframes:[],fonts:[]},settings:{style:"",keyframes:[],fonts:[]},advanced:{style:"",keyframes:[],fonts:[]}},id:"ecom-oy80b26v",firstinit:!0,advanced:{}}],icon:{thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',value:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},iconActive:{thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>',value:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},iconPosition:"1",tag:"h3",hasElementRequestLiquid:!1,id:"ecom-fal2zhio"},{title:"Accordion 3",blocks:[{settings:{content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},name:"text",style:{text:{textTextAlign:"left",textTypography:{"global-typography":"m5lJMKLv"}},text_dropcap:{dropcapTypography:{"font-size":"40px"},dropcapColor:"#f50c0c",dropcapColorStackedView:"#5eff00",dropcapBackgroundStackedView:"#4800ff",dropcapColorFramedView:"#1aff00",dropcapBackgroundFramedView:"#1100ff",dropcapView:"framed"}},css:{style:{style:".ecom-core.ecom-lzy0mllm{text-align: left;}.ecom-core.ecom-lzy0mllm,.ecom-core.ecom-lzy0mllm a{}",keyframes:[],fonts:[]},settings:{style:"",keyframes:[],fonts:[]},advanced:{style:"",keyframes:[],fonts:[]}},id:"ecom-lzy0mllm",firstinit:!0,advanced:{}}],icon:{thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',value:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},iconActive:{thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>',value:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},iconPosition:"1",tag:"h3",hasElementRequestLiquid:!1,id:"ecom-judo5qg6"}],icon:{name:"plus",cate:"Interface And Sign",value:`<svg version="1.1" id="lni_lni-plus" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve" fill="currentColor">
<path d="M61,30.3H33.8V3c0-1-0.8-1.8-1.8-1.8S30.3,2,30.3,3v27.3H3c-1,0-1.8,0.8-1.8,1.8S2,33.8,3,33.8h27.3V61c0,1,0.8,1.8,1.8,1.8
	s1.8-0.8,1.8-1.8V33.8H61c1,0,1.8-0.8,1.8-1.8S62,30.3,61,30.3z"></path>
</svg>`,thumbnail:`<svg version="1.1" id="lni_lni-plus" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve" fill="currentColor">
<path d="M61,30.3H33.8V3c0-1-0.8-1.8-1.8-1.8S30.3,2,30.3,3v27.3H3c-1,0-1.8,0.8-1.8,1.8S2,33.8,3,33.8h27.3V61c0,1,0.8,1.8,1.8,1.8
	s1.8-0.8,1.8-1.8V33.8H61c1,0,1.8-0.8,1.8-1.8S62,30.3,61,30.3z"></path>
</svg>`},iconActive:{name:"minus",cate:"Interface And Sign",value:`<svg version="1.1" id="lni_lni-minus" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve" fill="currentColor">
<g>
	<path d="M61,33.8H3c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8h58c1,0,1.8,0.8,1.8,1.8C62.8,33,62,33.8,61,33.8z"></path>
</g>
</svg>`,thumbnail:`<svg version="1.1" id="lni_lni-minus" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve" fill="currentColor">
<g>
	<path d="M61,33.8H3c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8h58c1,0,1.8,0.8,1.8,1.8C62.8,33,62,33.8,61,33.8z"></path>
</g>
</svg>`},iconPosition:"1"},style:{accordion_general:{"text-align":"left",boxBackgroundnormalmode:"rgba(17, 24, 39, 0.05)",boxBackgroundhovermode:"rgba(17, 24, 39, 0.1)",boxBackgroundactivemode:"rgba(17, 24, 39, 0.1)",spacing:{padding:{left:"30px",top:"10px",bottom:"10px",right:"30px"}},spacing__mobile:{padding:{left:"20px",right:"20px"}},itemtab:"normal"},accordion_content:{spacing:{padding:{left:"15px",top:"15px",bottom:"15px",right:"15px"}},boxBorder:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"rgba(5, 150, 105, 0.1)"}},accordion_items:{texttab:"hover",tab:"normal",textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"16px","font-weight":"500"},iconFontSize:"14px",textColornormalmode:"#000000",textTextShadownormalmode:{"text-shadow":{color:"#eb6a6a"}}},general:{contentTransition:500},accordion_title:{texttab:"normal",textTypography:{"font-size":"15px","text-transform":"uppercase"}},accordion_title_icon:{spacing:{margin:{right:"7px"}}},accordion_icon:{tab:"normal",iconFontSize:"14px"}}}}},methods:{setEditingElement(e){this.$store.commit("builder/setEditingElement",this),!1 in this.data.settings.items&&Object.defineProperty(this.data.settings.items,"tabOpened",{enumerable:!1,writable:!0}),this.data.settings.items.tabOpened=e}},watch:{}},ha=["onClick"],fa=["innerHTML"],ba=["innerHTML"],ya={class:"ecom-accordion_wrapper-info ecom-flex ecom-al_center"},va=["innerHTML"];function xa(e,t,o,n,s,i){var l;const a=N("GroupElement");return c(),z(a,{data:o.data,close_all:(l=o.data.settings)==null?void 0:l.close_all,section_id:i.section_id,gclasses:{wrapper:i.wrapper_class,body:"ecom-accordion__body",item:"ecom-accordion__item"}},{title:Q(({item:u,index:r})=>{var g,m,h,_,b,f,v,x,C,L,w;return[p("div",{class:S(["ecom-accordion__title ecom-flex ecom-w__full ecom-al_center ecom-items",{"ecom-item-active":r===0&&!((g=o.data.settings)!=null&&g.close_all)}]),onClick:$=>i.setEditingElement(r)},[(h=(m=o.data.settings)==null?void 0:m.icon)!=null&&h.value?(c(),d("div",{key:0,class:"ecom-accordion_nav--icon ecom-items--icon",style:E({order:(_=o.data.settings)==null?void 0:_.iconPosition}),innerHTML:(f=(b=o.data.settings)==null?void 0:b.icon)==null?void 0:f.value},null,12,fa)):y("",!0),(v=o.data.settings.iconActive)!=null&&v.value?(c(),d("div",{key:1,class:"ecom-accordion_nav--icon ecom-items--icon ecom-items-icon-active",style:E({order:(x=o.data.settings)==null?void 0:x.iconPosition}),innerHTML:(L=(C=o.data.settings)==null?void 0:C.iconActive)==null?void 0:L.value},null,12,ba)):y("",!0),p("div",ya,[p("span",{class:"ecom-items--icon ecom-accordion_icon-title",innerHTML:(w=u.icon_title)==null?void 0:w.value},null,8,va),(c(),z(W(u.tag?u.tag:"div"),{class:"ecom-accordion__title-text ecom-items--text",innerHTML:e.lang(u.title,"item-title-"+r)},null,8,["innerHTML"]))])],10,ha)]}),_:1},8,["data","close_all","section_id","gclasses"])}const wa=k(Ye,[["render",xa]]);Ye.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Accordion.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const Ge={name:"Map",docs:"https://help.ecomposer.io/docs/elements/basic-elements/google-map/",mixins:[T,H,M],props:{data:{type:Object,default(){return{}}}},data(){return{}},computed:{settings(){return[{params:[{type:"textarea",label:"Location",name:"location"},{name:"zoom",label:"Zoom",type:"number",options:{min:1,max:20,step:1}},{name:"gmap_height",label:"Height",type:"number",options:{units:{px:{min:0,max:2e3},vh:{min:0,max:100}},responsive:!0},css:{selector:" .ecom__element-map iframe",properties:{height:""}}},{name:"generalHeight",label:"Map Aspect Ratio",type:"popup",options:{type:"dropdown",values:{"16/9":"16:9 Optimize for desktop","4/3":"4:3 Optimize for mobile","1/1":"1:1","3/2":"3:2 Optiomize for tablet"},responsive:!0},css:{selector:" .ecom__element-map iframe",properties:{"aspect-ratio":""}}}]}]},style(){return[{group_name:"gmap_general",selector:" .ecom__element-map iframe",params:[{type:"tab",name:"tab",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"}]},css:{isCss:!1}},{name:"gmapFilter",label:"CSS Filters",type:"popup",options:{oneline:!0,type:"filter",visible:{keep_data:!0,condition:e=>e.tab=="normal"}},css:{}},{name:"gmapFilterHoverMode",label:"CSS Filters",type:"popup",options:{oneline:!0,type:"filter",visible:{keep_data:!0,condition:e=>e.tab=="hover"}},css:{selector:":hover"}}]}]},map(){return this.data.settings},location(){var t;return((t=this.map)!=null&&t.location?this.removeVietnameseTones(this.map.location).toLowerCase():"").replace(/\s/g,"")},css(){return`
                .ecom__element-map{
                    display:flex;
                }
                .ecom__element-map iframe{
                    width:100%;
                }
                `},default(){return{settings:{location:"150 Elgin Street 8th Floor Ottawa, ON K2P 1L4 Canada",zoom:12,generalHeight:"16/9"}}}},methods:{removeVietnameseTones(e){return e&&(e=e.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"),e=e.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"),e=e.replace(/ì|í|ị|ỉ|ĩ/g,"i"),e=e.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"),e=e.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"),e=e.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"),e=e.replace(/đ/g,"d"),e=e.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g,"A"),e=e.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g,"E"),e=e.replace(/Ì|Í|Ị|Ỉ|Ĩ/g,"I"),e=e.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g,"O"),e=e.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g,"U"),e=e.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g,"Y"),e=e.replace(/Đ/g,"D"),e=e.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g,""),e=e.replace(/\u02C6|\u0306|\u031B/g,""),e=e.replace(/ + /g," "),e=e.trim(),e=e.replace(/!|@|%|\^|\*|\(|\)|\+|=|\\<|\\>|\?|\/|,|\.|\\:|\\;|\\'|\\"|\\&|\\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ")),e}}},ka={ref:"wrapper",class:"ecom__element ecom-element element__map"},Ca={class:"ecom__element-map"},Ta=["src"];function La(e,t,o,n,s,i){var a;return c(),d("div",ka,[p("div",Ca,[p("iframe",{frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",src:"https://maps.google.com/maps?q="+i.location+"&t=m&z="+((a=i.map)==null?void 0:a.zoom)+"&output=embed&iwloc=near",title:"%3$s","aria-label":"%3$s"},null,8,Ta)])],512)}const $a=k(Ge,[["render",La]]);Ge.__docgenInfo={exportName:"default",displayName:"Map",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Gmap.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Je={name:"FeaturedBox",docs:"https://help.ecomposer.io/docs/elements/basic-elements/feature/",presets:!0,mixins:[T,H],props:{data:{type:Object,default(){return{}}}},data(){return{}},computed:{listStyle(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.list_style},css(){return`
                .element__featured--wrapper {
                    display: grid;
                    width: 100%;
                }
                .element__featured--box {
                    text-align: center;
                    overflow:hidden;
                }

                .element__featured--box-img img {
                    height: auto;
                    max-width: 100%;
                    border: none;
                    box-shadow: none;
                    transition-duration: 0.3s;
                    vertical-align: middle;
                    pointer-events: none;
                }
                .ecom-button-default{
                    display:flex;
                    justify-content:inherit;
                }
                .element__featured--box-content{
                    justify-content:inherit;
                }

                .element__featured--wrapper-list {
                    display: flex;
                    overflow-x: auto;
                }

                .element__featured--wrapper-list::-webkit-scrollbar {
                    display: block;
                    height: 3px;
                }
                .element__featured--wrapper-list::-webkit-scrollbar-track {
                    background-color: rgba(0,0,0,.15);
                }
                .element__featured--wrapper-list::-webkit-scrollbar-thumb {
                    background-color: rgba(0,0,0,.25)
                }
                .element__featured--box-btn {
                    text-transform: uppercase;
                    text-decoration: none;
                    color: #fff;
                    background-color: #0691b1;
                    border-radius: 4px;
                    margin-top: 6px;
                    margin-bottom: 10px;
                    padding: 5px 20px 5px 20px;
                }
                .ecom-feature-box-icon-link svg {
                    width: 25px;
                    height: 25px;
                }
            `},featured(){return this.data.settings},javascript(){return function(){const e=this.$el;if(!e||!this.isLive)return;const t=e.querySelector(".element__featured--wrapper-list");if(t){let o={top:0,left:0,x:0,y:0};const n=function(a){const l=a.clientX-o.x;t.scrollLeft=o.left-l},s=function(){t.removeEventListener("mousemove",n),t.removeEventListener("mouseup",s),t.style.cursor="default",t.style.removeProperty("user-select")},i=function(a){t.style.cursor="grabbing",t.style.userSelect="none",o={left:t.scrollLeft,top:t.scrollTop,x:a.clientX,y:a.clientY},t.addEventListener("mousemove",n),t.addEventListener("mouseup",s)};t.addEventListener("mousedown",i),t.addEventListener("mouseleave",s)}}},settings(){return[{params:[{type:"popup",name:"list_style",label:"List style",options:{type:"dropdown",default:!1,preview:"title",values:{grid:"Grid",list_scrollx:"List(horizontal scrollable)"}}},{name:"items",type:"group",value:[],options:{add_text:"Add item"},params:[{type:"popup",name:"source",label:"Source",options:{type:"dropdown",values:{image:"Image",icon:"Icon"},default:!1}},{type:"picker",label:"Choose Image",name:"thumbnail",options:{type:"image",output:["value","name"],editAlt:!0,visible:function(e){return e.source!=="icon"}}},{type:"picker",label:"Icon",name:"box_icon",options:{type:"icon",multiple:!1,visible:function(e){return e.source==="icon"}}},{name:"subTitle",type:"text",label:"Subheading"},{name:"title",type:"text",label:"Heading"},{type:"choose",label:'<span class="uppercase">HTML</span> Tag',name:"tag",options:{type:"heading"}},{type:"textarea",label:"Content",name:"text",options:{toolbar:"short",height:80}},{type:"link",label:"Feature link",name:"link",description:"This link will be applied for Feature image and Feature button"},{type:"line"},{type:"text",label:"Button Label",name:"content"},{type:"text",label:'<span class="mr-4">Button ID</span>',name:"button_id",placeholder:"YourID"},{type:"picker",label:"Button icon",name:"icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"choose",label:"Icon position",name:"icon_position",options:{type:"align-x",values:[-1,1],visible:{keep_data:!1,condition:e=>e.icon}},css:{selector:" .ecom-button-icon",properties:{order:""}}},{type:"number",label:"Icon spacing",name:"spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.icon}},css:{selector:" .ecom__element--button",properties:{gap:""}}}]},{type:"popup",label:"Crop size",name:"size",value:"",options:{type:"dropdown",default:!1,values:{"":"Original","400x300":"400 x 300px","800x450":"800 x 450px","500x500":"500 x 500px",custom:"Custom"}},css:{isCss:!1}},{type:"size",name:"size_custom",options:{visible:e=>e.size==="custom",warnings:{content:"You can crop the original image size to any custom size. You can also set a single value for height or width in order to keep the original size ratio."}}},{type:"number",label:"Item width<small>(%)</small>",name:"width_item",options:{visible:e=>e.list_style==="list_scrollx",responsive:!0,units:{"%":{max:100,min:1,step:1}}},css:{selector:" .element__featured--box.item-style--list",properties:{"max-width":"%value%",flex:"0 0 %value%"}}},{type:"number",label:"Items per row",name:"gridTemplateColumns",options:{visible:function(e){return e.list_style=="grid"},responsive:!0,max:12,min:1},css:{selector:" .element__featured--wrapper",properties:{"grid-template-columns":"repeat(%value%, 1fr)"}}},{type:"number",label:"Spacing between",name:"gap",options:{visible:e=>e.list_style!=="list_scrollx",responsive:!0,units:{px:{max:64,min:0,step:1}}},css:{selector:" .element__featured--wrapper",properties:{gap:""}}},{type:"number",label:"Spacing between",name:"gap_list_scrollx",options:{visible:e=>e.list_style==="list_scrollx",responsive:!0,units:{px:{max:64,min:0,step:1}}},css:{selector:" .element__featured--wrapper-list > * + *",properties:{"margin-left":""}}}]}]},default(){return{settings:{list_style:"grid",items:[{subTitle:"Subheading",title:"The heading 1",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",textButton:"Read more",thumbnail:{value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/img_1-3_1.png?v=1648019988",name:"img_1-3_1"},tag:"h2"},{subTitle:"Subheading",title:"The heading 2",text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",textButton:"Read more",thumbnail:{value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/img_2-3_1.png?v=1648019990",name:"img_2-3_1"},tag:"h2"},{subTitle:"Subheading",title:"The heading 3",text:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",textButton:"Read more",thumbnail:{value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/img_3-3_1.png?v=1648019992",name:"img_3-3_1"}}],gap:"30px",gridTemplateColumns:3,gridTemplateColumns__mobile:1,gridTemplateColumns__tablet:1,gap__tablet:"40px",gap__mobile:"30px",width_item:"20%",width_item__tablet:"38%",width_item__mobile:"63%",gap_list_scrollx:"20px",gap_list_scrollx__tablet:"20px",gap_list_scrollx__mobile:"20px"},style:{featureGeneral:{textAlign:"center",tab:"normal"},subtitle:{spacing:{margin:{bottom:"4px"}},tab:"normal",textTypography:{"global-typography":"m5lJMKLv"}},title:{spacing:{margin:{bottom:"8px"}},tab:"normal",textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"24px","font-weight":"500","text-decoration":"none"},textColornormalmode:"#000000"},content:{tab:"normal",textTypography:{"global-typography":"m5lJMKLv"}},featuredImage:{spacing:{margin:{bottom:"20px"}},tab:"normal","justify-content":"center"},button:{tab:"normal",buttonTypography:{"text-transform":"uppercase","text-decoration":"none"},buttonColornormalmode:"#fff",buttonBackgroundnormalmode:{classic:{"background-color":"#0691b1"}},buttonBorderRadiusnormalmode:{top:"4px",left:"4px",bottom:"4px",right:"4px"},spacing:{margin:{top:"6px",bottom:"10px"},padding:{top:"5px",left:"20px",bottom:"5px",right:"20px"}}},icon_button:{iconFontSize:"25px"}}}}},methods:{check(e){var t;return(t=this.data.settings.items)==null?void 0:t.some(o=>o[e])},convertImageThumbnail(e){if(!e)return;let{thumbnail:t={}}=e,{size:o,size_custom:n}=this.data.settings;return Object.keys(t).length===0?null:(o==="custom"?o=n:o&&(o={width:o.split("x")[0],height:o.split("x")[1]}),{alt:t.name,src:this.$helpers.resizeImage(t.value,o)})},style(){const e=[{name:"textTextShadow",label:"Text Shadow",type:"popup",options:{oneline:!0,type:"text-shadow"},css:{selector:" .element__featured--box-text"}},{name:"textColor",label:"Text Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{selector:" .element__featured--box-text",properties:{color:""}}}],t=[{name:"textTextShadow",label:"Text Shadow",type:"popup",options:{oneline:!0,type:"text-shadow"},css:{selector:" .element__featured--box-title"}},{name:"textColor",label:"Text Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{selector:" .element__featured--box-title",properties:{color:""}}}],o=[{name:"textTextShadow",label:"Text Shadow",type:"popup",options:{oneline:!0,type:"text-shadow"},css:{selector:" .element__featured--box-subtitle"}},{name:"textColor",label:"Text Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{selector:" .element__featured--box-subtitle",properties:{color:""}}}];return[{group_name:"featureGeneral",group_title:"General",selector:" .element__featured .element__featured--box",params:[{name:"textAlign",type:"choose",label:"Alignment",options:{oneline:!0,type:"text-align",values:["left","center","right"]},css:{properties:{"text-align":"","justify-content":`
                                        switch(value) {
                                        case 'left':
                                            return 'flex-start';
                                        case 'center':
                                            return 'center';
                                        case 'right':
                                            return 'flex-end';
                                        }
                                    `}}},{type:"tab",name:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"}]},css:{isCss:!1}},{name:"backgroundColor",label:"Background",type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:s=>s.tab==="normal"}},css:{properties:{"background-color":""}}},{type:"popup",label:"Border",name:"border",options:{type:"border",oneline:!0,visible:{condition:s=>s.tab==="normal"}},css:{}},{type:"popup",label:"Box shadow",name:"boxShadow",options:{oneline:!0,type:"box-shadow",visible:{condition:s=>s.tab==="normal"}},css:{}},{name:"borderRadius",label:"Border Radius",type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:{condition:s=>s.tab==="normal"}},css:{properties:{"border-radius":""}}},{name:"backgroundColorHoverMode",label:"Background",type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:s=>s.tab==="hover"}},css:{selector:":hover",properties:{"background-color":""}}},{type:"popup",label:"Border",name:"borderHoverMode",options:{type:"border",oneline:!0,visible:{condition:s=>s.tab==="hover"}},css:{selector:":hover"}},{type:"popup",label:"Box shadow",name:"boxShadowHoverMode",options:{oneline:!0,type:"box-shadow",visible:{condition:s=>s.tab==="hover"}},css:{selector:":hover"}},{name:"borderRadiusHoverMode",label:"Border Radius",type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:{condition:s=>s.tab==="hover"}},css:{selector:":hover",properties:{"border-radius":""}}},{name:"transition",type:"number",label:'Transition Duration <span class="lowercase">(ms)</span>',options:{min:0,max:1500,visible:{keep_data:!0,condition:s=>s.tab==="hover"}},css:{properties:{transition:"all %value%ms ease"}}},{type:"line"},{name:"spacing",type:"dimension",label:"Spacing",options:{responsive:!0,units:"default"},css:{properties:{spacing:""}}}]},this.check("thumbnail")?{group_alias:"image",options:{group_name:"featuredImage",group_title:"Image",selector:" .element__featured .element__featured--box-img"},modify:{params:[{position:4,fields:{name:"thumb_backgroundColor",label:"Background",type:"color",options:{global:{type:"colors"},oneline:!0},css:{properties:{"background-color":""}}}},{position:3,fields:{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-image-align"}}}},{position:20,fields:{alias:"spacing",modify:{css:{selector:"root .ecom-image-align"}}}}]}}:null,this.check("box_icon")?{group_alias:"icon",options:{group_name:"featured_icon",group_title:"Featured icon",selector:" .element__featured .element__featured--box-icon"},modify:{params:[{position:20,fields:{name:"icon_backgroundColor",label:"Background",type:"color",options:{global:{type:"colors"},oneline:!0},css:{selector:"root .element__featured--box-icon svg",properties:{"background-color":""}}}},{position:20,fields:{name:"icon_border_radius",label:"Border Radius",type:"dimension",options:{type:"radius",responsive:!0,units:"default"},css:{selector:"root .element__featured--box-icon svg",properties:{"border-radius":""}}}},{position:4,fields:{alias:"justify-content",options:{label:"Alignment"}}},{position:20,fields:{alias:"spacing",options:{css:{selector:"root .element__featured--box-icon svg"}}}}]}}:null,this.check("subTitle")?{group_name:"subtitle",group_title:"Subheading",selector:" .element__featured",params:[{type:"popup",label:"Typography",name:"textTypography",options:{global:{type:"typography"},oneline:!0,responsive:!0,type:"typography"},css:{selector:" .element__featured--box-subtitle"}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"}]},css:{isCss:!1}},...X(o,"normal"),...X(o,"hover",{selector:"root .element__featured--box:hover",isBefore:!0}),{name:"textTransition",type:"number",label:'Transition Duration <span class="lowercase">(ms)</span>',options:{min:0,max:1500,visible:{keep_data:!0,condition:s=>s.tab==="hover"}},css:{selector:" .element__featured--box-subtitle",properties:{transition:"all %value%ms ease"}}},{type:"line"},{alias:"spacing",options:{css:{selector:" .element__featured--box-subtitle"}}}]}:null,this.check("title")?{group_name:"title",group_title:"Heading",selector:" .element__featured",params:[{type:"popup",label:"Typography",name:"textTypography",options:{global:{type:"typography"},oneline:!0,responsive:!0,type:"typography"},css:{selector:" .element__featured--box-title"}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"}]},css:{isCss:!1}},...X(t,"normal"),...X(t,"hover",{selector:"root .element__featured--box:hover",isBefore:!0}),{name:"textTransition",type:"number",label:'Transition Duration <span class="lowercase">(ms)</span>',options:{min:0,max:1500,visible:{keep_data:!0,condition:s=>s.tab==="hover"}},css:{selector:" .element__featured--box-title",properties:{transition:"all %value%ms ease"}}},{type:"line"},{alias:"spacing",options:{css:{selector:" .element__featured--box-title"}}}]}:null,this.check("text")?{group_name:"content",group_title:"Content",selector:" .element__featured",params:[{type:"popup",label:"Typography",name:"textTypography",options:{global:{type:"typography"},oneline:!0,responsive:!0,type:"typography"},css:{selector:" .element__featured--box-text, a"}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"}]},css:{isCss:!1}},...X(e,"normal"),...X(e,"hover",{selector:"root .element__featured--box:hover",isBefore:!0}),{name:"textTransition",type:"number",label:'Transition Duration <span class="lowercase">(ms)</span>',options:{min:0,max:1500,visible:{keep_data:!0,condition:s=>s.tab==="hover"}},css:{selector:" .element__featured--box-text",properties:{transition:"all %value%ms ease"}}},{type:"line"},{alias:"spacing",options:{css:{selector:" .element__featured--box-text"}}}]}:null,this.check("content")?{group_alias:"button",options:{group_name:"button",group_title:"Button",selector:" .element__featured .element__featured--box-btn"},modify:{params:[{position:0,fields:[{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-button-default"}}}]}]}}:null,this.check("icon")?{group_alias:"icon:hover",options:{group_name:"icon_button",selector:" .ecom-feature-box-icon-link"},modify:{params:[{position:20,fields:{alias:"spacing"}}]}}:null].filter(s=>s)},attrLink(e){return e.link}}},Sa={class:"ecom__element ecom-element element__featured ecom-html"},Ma=["innerHTML"],Ha={class:"element__featured--box-img ecom-image-default"},Ba={class:"element__featured--box-content ecom-w__full"},qa=["innerHTML"],Ea={key:2,class:"element__featured--box-text"},Da=["innerHTML"],Aa={class:"ecom-button-default"},za=["id","href"],ja=["innerHTML"],Ia=["innerHTML"];function Pa(e,t,o,n,s,i){var a;return c(),d("div",Sa,[p("div",{class:S(i.listStyle=="grid"?"element__featured--wrapper":"element__featured--wrapper-list")},[(c(!0),d(D,null,Y((a=i.featured)==null?void 0:a.items,(l,u)=>{var r,g,m,h,_,b,f,v,x,C;return c(),d("div",{key:u,class:S(["element__featured--box",i.listStyle=="list_scrollx"?"item-style--list":""])},[l.source==="icon"?(c(),z(W((r=l.link)!=null&&r.href?"a":"div"),j({key:0,class:"ecom-icon-align"},i.attrLink(l),{href:l.link&&((g=l==null?void 0:l.link)==null?void 0:g.href)!=""?(m=l.link)==null?void 0:m.href:"#"}),{default:Q(()=>{var L;return[l.box_icon?(c(),d("div",{key:0,class:"element__featured--box-icon",innerHTML:(L=l.box_icon)==null?void 0:L.value},null,8,Ma)):y("",!0)]}),_:2},1040,["href"])):i.convertImageThumbnail(l)?(c(),z(W((h=l.link)!=null&&h.href?"a":"div"),j({key:1,class:{"ecom-replace-notice":e.$helpers.isPreviewImage(JSON.stringify(l))},href:l.link?(_=l.link)==null?void 0:_.href:"#"},i.attrLink(l),{class:"ecom-image-align ecom-flex"}),{default:Q(()=>[p("figure",Ha,[p("img",bo(yo(i.convertImageThumbnail(l))),null,16)])]),_:2},1040,["class","href"])):y("",!0),p("div",Ba,[l.subTitle&&l.subTitle.length>0?(c(),d("h5",{key:0,class:"element__featured--box-subtitle",innerHTML:e.lang(l.subTitle,"header-"+u)},null,8,qa)):y("",!0),l.title&&l.title.length>0?(c(),z(W((b=l.tag)!=null?b:"h2"),j({key:1,class:"element__featured--box-title",href:l.tag==="a"&&(l==null?void 0:l.link)&&((f=l==null?void 0:l.link)==null?void 0:f.href)!=""?(v=l.link)==null?void 0:v.href:"#"},i.attrLink(l),{innerHTML:e.lang(l.title,"title-"+u)}),null,16,["href","innerHTML"])):y("",!0),l.text&&l.text.length>0?(c(),d("div",Ea,[p("div",{innerHTML:e.lang(l.text,"text-"+u)},null,8,Da)])):y("",!0),p("div",Aa,[l.content||l.icon?(c(),d("a",j({key:0,id:l.button_id,href:l.link&&((x=l==null?void 0:l.link)==null?void 0:x.href)!=""?(C=l.link)==null?void 0:C.href:"#",class:"element__featured--box-btn ecom-in_flex ecom-tc ecom-al_center acom_fl_center",style:"gap:"+l.spacing},i.attrLink(l)),[l.content?(c(),d("span",{key:0,innerHTML:e.lang(l.content,"featured_box_"+u)},null,8,ja)):y("",!0),l.icon?(c(),d("span",{key:1,style:E("order:"+l.icon_position),class:"ecom-button-icon ecom-feature-box-icon-link ecom-in_flex",innerHTML:l.icon},null,12,Ia)):y("",!0)],16,za)):y("",!0)])])],2)}),128))],2)])}const Na=k(Je,[["render",Pa]]);Je.__docgenInfo={exportName:"default",displayName:"FeaturedBox",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/FeaturedBox.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const Ze={name:"IconList",presets:!0,docs:"https://help.ecomposer.io/docs/elements/basic-elements/icon-list/",mixins:[T,H],props:{data:{type:Object,default(){return{}}}},computed:{css(){return`
                .ecom-iconlist--link{
                    text-decoration:none
                }
                .ecom-iconlist--list{
                    display:grid;
                }
                .ecom-iconlist--item{
                    position: relative
                }
                .ecom-iconlist--list[data-layout='inline'] .ecom-iconlist--item{
                    display: flex;
                    align-items:center;
                }
                .ecom-iconlist-content{
                    flex:1;
                    display:flex;
                    flex-direction:column;
                    gap:10px;
                }
                .ecom-iconlist--title{
                    margin:0;
                }
                .ecom-iconlist--list, .ecom-iconlist--container {
                    margin: 0;
                    padding: 0;
                    list-style-type: none;
                }
                .ecom-iconlist--container{
                    display:flex;
                    align-items:center;
                }
                .ecom-iconlist--list[data-layout='default'] .ecom-iconlist--container {
                    padding-top: calc(var(--ecom-spacing) / 2);
                    padding-bottom: calc(var(--ecom-spacing) / 2);
                }

                .ecom-iconlist--list[data-layout='default'] .ecom-iconlist--item{
                    flex-direction:column;
                    display:flex;
                }
                .ecom-iconlist--list[data-layout='default']{
                    display:grid !important;
                }
                .ecom-iconlist--list[data-layout='inline']{
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                }
                .ecom-iconlist--list[data-layout='inline'] {
                    margin-left: calc(var(--ecom-spacing) / -2);
                    margin-right: calc(var(--ecom-spacing) / -2);
                }
                .ecom-iconlist--list[data-layout='inline'] .ecom-iconlist--container {
                    padding-left: calc(var(--ecom-spacing) / 2);
                    padding-right: calc(var(--ecom-spacing) / 2);
                }
                .ecom-iconlist--icon{
                    display: flex;
                }
                .ecom-iconlist--container{
                    display: inline-flex;
                    align-items: center;
                }
            `},settings(){return[{params:[{name:"items",type:"group",value:[],options:{add_text:"Add item"},params:[{type:"picker",label:"Icon",name:"icon",options:{type:"icon",multiple:!1}},{name:"label",type:"text",label:"Label"},{name:"desc",type:"textarea",label:"Description",options:{toolbar:"short",height:200}},{type:"toggle",label:"Enable custom Link",name:"isCustomLink",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},css:{isCss:!1}},{type:"link",label:"Link",name:"link",options:{visible:{keep_data:!1,condition:e=>e.isCustomLink}}}]},{name:"flexDirection",label:"Icon position",type:"choose",options:{oneline:!0,type:"align-position",values:["row","column","column-reverse","row-reverse"]},css:{selector:" .ecom-iconlist--container",properties:{"flex-direction":""}}},{type:"popup",name:"layout",label:"Layout",options:{default:!1,preview:"title",type:"dropdown",values:{default:"Horizontal",inline:"Vertical"}}},{type:"number",label:"Items per row",name:"gridTemplateColumns",options:{min:1,max:6,responsive:!0,visible:{keep_data:!1,condition:e=>e.layout!=="inline"}},css:{selector:" .ecom-iconlist--list",properties:{display:"grid","grid-template-columns":"repeat(%value%, 1fr)"}}},{type:"number",label:"Space between",name:"iconListGap",options:{responsive:!0,units:{px:{min:0,max:200}}},css:{selector:" .ecom-iconlist--list",properties:{gap:""}}}]}]},default(){return{settings:{items:[{icon:{name:"shipping-fast-solid",cate:"All",value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 0 6 L 0 8 L 19 8 L 19 23 L 12.84375 23 C 12.398438 21.28125 10.851563 20 9 20 C 7.148438 20 5.601563 21.28125 5.15625 23 L 4 23 L 4 18 L 2 18 L 2 25 L 5.15625 25 C 5.601563 26.71875 7.148438 28 9 28 C 10.851563 28 12.398438 26.71875 12.84375 25 L 21.15625 25 C 21.601563 26.71875 23.148438 28 25 28 C 26.851563 28 28.398438 26.71875 28.84375 25 L 32 25 L 32 16.84375 L 31.9375 16.6875 L 29.9375 10.6875 L 29.71875 10 L 21 10 L 21 6 Z M 1 10 L 1 12 L 10 12 L 10 10 Z M 21 12 L 28.28125 12 L 30 17.125 L 30 23 L 28.84375 23 C 28.398438 21.28125 26.851563 20 25 20 C 23.148438 20 21.601563 21.28125 21.15625 23 L 21 23 Z M 2 14 L 2 16 L 8 16 L 8 14 Z M 9 22 C 10.117188 22 11 22.882813 11 24 C 11 25.117188 10.117188 26 9 26 C 7.882813 26 7 25.117188 7 24 C 7 22.882813 7.882813 22 9 22 Z M 25 22 C 26.117188 22 27 22.882813 27 24 C 27 25.117188 26.117188 26 25 26 C 23.882813 26 23 25.117188 23 24 C 23 22.882813 23.882813 22 25 22 Z"></path></svg>',thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 0 6 L 0 8 L 19 8 L 19 23 L 12.84375 23 C 12.398438 21.28125 10.851563 20 9 20 C 7.148438 20 5.601563 21.28125 5.15625 23 L 4 23 L 4 18 L 2 18 L 2 25 L 5.15625 25 C 5.601563 26.71875 7.148438 28 9 28 C 10.851563 28 12.398438 26.71875 12.84375 25 L 21.15625 25 C 21.601563 26.71875 23.148438 28 25 28 C 26.851563 28 28.398438 26.71875 28.84375 25 L 32 25 L 32 16.84375 L 31.9375 16.6875 L 29.9375 10.6875 L 29.71875 10 L 21 10 L 21 6 Z M 1 10 L 1 12 L 10 12 L 10 10 Z M 21 12 L 28.28125 12 L 30 17.125 L 30 23 L 28.84375 23 C 28.398438 21.28125 26.851563 20 25 20 C 23.148438 20 21.601563 21.28125 21.15625 23 L 21 23 Z M 2 14 L 2 16 L 8 16 L 8 14 Z M 9 22 C 10.117188 22 11 22.882813 11 24 C 11 25.117188 10.117188 26 9 26 C 7.882813 26 7 25.117188 7 24 C 7 22.882813 7.882813 22 9 22 Z M 25 22 C 26.117188 22 27 22.882813 27 24 C 27 25.117188 26.117188 26 25 26 C 23.882813 26 23 25.117188 23 24 C 23 22.882813 23.882813 22 25 22 Z"></path></svg>'},label:"Free Shipping and Return",desc:"Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod\xA0"},{icon:{name:"support",cate:"Communication",value:`<svg version="1.1" id="lni_lni-support" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve" fill="currentColor">
<g>
	<path d="M30.6,18.8H13.8c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8h16.8c1,0,1.8-0.8,1.8-1.8S31.5,18.8,30.6,18.8z"></path>
	<path d="M13.8,30.2h7.7c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8h-7.7c-1,0-1.8,0.8-1.8,1.8S12.8,30.2,13.8,30.2z"></path>
	<path d="M26.7,34.6h-13c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8h13c1,0,1.8-0.8,1.8-1.8S27.7,34.6,26.7,34.6z"></path>
	<path d="M48.4,17.3c-2.3-0.3-4.4,0.8-5.5,2.8c-0.5,0.9-0.1,1.9,0.7,2.4c0.9,0.5,1.9,0.1,2.4-0.7c0.4-0.7,1.2-1.1,2-1
		c0.9,0.1,1.6,0.8,1.7,1.6c0.1,0.8-0.3,1.5-1,1.8c-1.5,0.7-2.6,2.5-2.6,4.2v1.3c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8v-1.3
		c0-0.3,0.4-0.9,0.7-1c2-1,3.2-3.1,2.9-5.4C52.9,19.5,50.9,17.6,48.4,17.3z"></path>
	<path d="M47.8,34.9c-1.5,0-2.6,1.2-2.6,2.6c0,1.5,1.2,2.6,2.6,2.6c1.5,0,2.6-1.2,2.6-2.6C50.5,36.1,49.3,34.9,47.8,34.9z"></path>
	<path d="M55.3,9.4H8.7c-4.1,0-7.4,3.3-7.4,7.4v33.3c0,1.6,0.8,3,2.2,3.8c0.7,0.4,1.4,0.6,2.2,0.6c0.8,0,1.5-0.2,2.2-0.6l11.6-6.7
		c0.1-0.1,0.3-0.1,0.4-0.1h35.5c4.1,0,7.4-3.3,7.4-7.4V16.9C62.8,12.8,59.4,9.4,55.3,9.4z M59.3,39.8c0,2.2-1.8,3.9-3.9,3.9H19.8
		c-0.8,0-1.5,0.2-2.2,0.6L6.1,51c-0.4,0.2-0.8,0.1-0.9,0s-0.4-0.3-0.4-0.8V16.9c0-2.2,1.8-3.9,3.9-3.9h46.6c2.2,0,3.9,1.8,3.9,3.9
		V39.8z"></path>
</g>
</svg>`,thumbnail:`<svg version="1.1" id="lni_lni-support" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve" fill="currentColor">
<g>
	<path d="M30.6,18.8H13.8c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8h16.8c1,0,1.8-0.8,1.8-1.8S31.5,18.8,30.6,18.8z"></path>
	<path d="M13.8,30.2h7.7c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8h-7.7c-1,0-1.8,0.8-1.8,1.8S12.8,30.2,13.8,30.2z"></path>
	<path d="M26.7,34.6h-13c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8h13c1,0,1.8-0.8,1.8-1.8S27.7,34.6,26.7,34.6z"></path>
	<path d="M48.4,17.3c-2.3-0.3-4.4,0.8-5.5,2.8c-0.5,0.9-0.1,1.9,0.7,2.4c0.9,0.5,1.9,0.1,2.4-0.7c0.4-0.7,1.2-1.1,2-1
		c0.9,0.1,1.6,0.8,1.7,1.6c0.1,0.8-0.3,1.5-1,1.8c-1.5,0.7-2.6,2.5-2.6,4.2v1.3c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8v-1.3
		c0-0.3,0.4-0.9,0.7-1c2-1,3.2-3.1,2.9-5.4C52.9,19.5,50.9,17.6,48.4,17.3z"></path>
	<path d="M47.8,34.9c-1.5,0-2.6,1.2-2.6,2.6c0,1.5,1.2,2.6,2.6,2.6c1.5,0,2.6-1.2,2.6-2.6C50.5,36.1,49.3,34.9,47.8,34.9z"></path>
	<path d="M55.3,9.4H8.7c-4.1,0-7.4,3.3-7.4,7.4v33.3c0,1.6,0.8,3,2.2,3.8c0.7,0.4,1.4,0.6,2.2,0.6c0.8,0,1.5-0.2,2.2-0.6l11.6-6.7
		c0.1-0.1,0.3-0.1,0.4-0.1h35.5c4.1,0,7.4-3.3,7.4-7.4V16.9C62.8,12.8,59.4,9.4,55.3,9.4z M59.3,39.8c0,2.2-1.8,3.9-3.9,3.9H19.8
		c-0.8,0-1.5,0.2-2.2,0.6L6.1,51c-0.4,0.2-0.8,0.1-0.9,0s-0.4-0.3-0.4-0.8V16.9c0-2.2,1.8-3.9,3.9-3.9h46.6c2.2,0,3.9,1.8,3.9,3.9
		V39.8z"></path>
</g>
</svg>`},label:"Customer Support",desc:"Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod\xA0"},{icon:{name:"money-protection",cate:"Currency",value:`<svg version="1.1" id="lni_lni-money-protection" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve" fill="currentColor">
<g>
	<path d="M54.3,7.2L33.2,1.4c-0.8-0.2-1.5-0.2-2.3,0L9.7,7.2c-1.9,0.5-3.2,2.3-3.2,4.3v15.4c0,15.8,9.4,29.7,23.8,35.6
		c0.5,0.2,1.1,0.3,1.7,0.3s1.1-0.1,1.7-0.3c14.5-5.9,23.8-19.9,23.8-35.7V11.4C57.5,9.5,56.2,7.7,54.3,7.2z M54,26.7
		c0,14.2-8.7,27.2-21.6,32.4c-0.2,0.1-0.5,0.1-0.7,0C18.5,53.9,10,41.2,10,26.8V11.4c0-0.4,0.3-0.8,0.7-0.9l21.1-5.8
		c0.1,0,0.2,0,0.2,0s0.2,0,0.2,0l21.1,5.8c0.4,0.1,0.7,0.5,0.7,0.9V26.7z"></path>
	<path d="M35.6,27.6h-7.3c-1.9,0-3.5-1.6-3.5-3.6s1.6-3.6,3.5-3.6h11.6c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8h-6.2v-2.2
		c0-1-0.8-1.8-1.8-1.8s-1.8,0.8-1.8,1.8v2.2h-1.9c-3.9,0-7,3.2-7,7.1s3.2,7.1,7,7.1h7.3c1.9,0,3.5,1.6,3.5,3.6c0,2-1.6,3.6-3.5,3.6
		H24.1c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8h6.2v2.2c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8v-2.2h1.9c3.9,0,7-3.2,7-7.1
		C42.7,30.8,39.5,27.6,35.6,27.6z"></path>
</g>
</svg>`,thumbnail:`<svg version="1.1" id="lni_lni-money-protection" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve" fill="currentColor">
<g>
	<path d="M54.3,7.2L33.2,1.4c-0.8-0.2-1.5-0.2-2.3,0L9.7,7.2c-1.9,0.5-3.2,2.3-3.2,4.3v15.4c0,15.8,9.4,29.7,23.8,35.6
		c0.5,0.2,1.1,0.3,1.7,0.3s1.1-0.1,1.7-0.3c14.5-5.9,23.8-19.9,23.8-35.7V11.4C57.5,9.5,56.2,7.7,54.3,7.2z M54,26.7
		c0,14.2-8.7,27.2-21.6,32.4c-0.2,0.1-0.5,0.1-0.7,0C18.5,53.9,10,41.2,10,26.8V11.4c0-0.4,0.3-0.8,0.7-0.9l21.1-5.8
		c0.1,0,0.2,0,0.2,0s0.2,0,0.2,0l21.1,5.8c0.4,0.1,0.7,0.5,0.7,0.9V26.7z"></path>
	<path d="M35.6,27.6h-7.3c-1.9,0-3.5-1.6-3.5-3.6s1.6-3.6,3.5-3.6h11.6c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8h-6.2v-2.2
		c0-1-0.8-1.8-1.8-1.8s-1.8,0.8-1.8,1.8v2.2h-1.9c-3.9,0-7,3.2-7,7.1s3.2,7.1,7,7.1h7.3c1.9,0,3.5,1.6,3.5,3.6c0,2-1.6,3.6-3.5,3.6
		H24.1c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8h6.2v2.2c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8v-2.2h1.9c3.9,0,7-3.2,7-7.1
		C42.7,30.8,39.5,27.6,35.6,27.6z"></path>
</g>
</svg>`},desc:"Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod\xA0",label:" Moneyback Guarantee "}],layout:"default",iconListGap:"10px",flexDirection:"column",gridTemplateColumns:3},style:{iconListIcon:{iconFontSize:"37px",tab:"normal",iconBordernormalmode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#bdbdbd"},spacing:{margin:{},padding:{top:"15px",left:"15px",bottom:"15px",right:"15px"}},iconBorderRadiusnormalmode:{top:"63%",left:"63%",bottom:"63%",right:"63%"}},iconListGeneral:{listJustifyContent:"flex-start"},iconListText:{textTypography:{"global-typography":"AbgUXj49"},textTextAlign:"center",spacing:{margin:{top:"10px"}}},iconListDescription:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"16px","line-height":"23px"},textTextAlign:"center",textColor:"#696969"}}}}},methods:{hasTitle(){var e;return(e=this.data.settings.items)==null?void 0:e.some(t=>t.label)},hasDesc(){var e;return(e=this.data.settings.items)==null?void 0:e.some(t=>t.desc)},style(){var t,o,n;let e=[];return(t=this.data.settings)!=null&&t.items&&e.push({group_name:"iconListGeneral",group_title:"General",selector:" .ecom-base-iconlist .ecom-iconlist--list",params:[this.data.settings.layout=="inline"?{type:"choose",label:"Alignment",name:"listJustifyContent",options:{oneline:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{display:"flex","justify-content":""}}}:{type:"choose",label:"Alignment",name:"listJustifyContent",options:{oneline:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{selector:" .ecom-iconlist--item",properties:{display:"flex","align-items":""}}},{alias:"width",options:{css:{selector:"root .ecom-iconlist--item"}}},{type:"background",label:"Background Type",name:"background",options:{responsive:!0,types:["classic","gradient"]},css:{selector:" .ecom-iconlist--item",properties:{background:""}}},{type:"popup",label:"Border",name:"boxBorder",options:{type:"border",oneline:!0},css:{selector:" .ecom-iconlist--item",properties:{border:""}}},{name:"boxBorderRadius",label:"Border Radius",type:"dimension",options:{responsive:!0,type:"radius",units:{px:{min:0,max:1e3},"%":{min:0,max:100}}},css:{selector:" .ecom-iconlist--item",properties:{overflow:"hidden","border-radius":""}}},{alias:"spacing",options:{css:{selector:" .ecom-iconlist--item"}}}]},{group_title:"Icon",group_name:"iconListIcon",selector:" .ecom-base-iconlist .ecom-iconlist--icon",params:[{type:"choose",label:"Alignment",name:"itemAlignSelf",options:{oneline:!0,type:["row","row-reverse"].includes((n=(o=this.data)==null?void 0:o.settings)==null?void 0:n.flexDirection)?"align-y-full":"align-x-full",values:["flex-start","center","flex-end"]},css:{properties:{"align-self":""}}},...this.$helpers.copy(ae("root .ecom-iconlist--container:hover .ecom-iconlist--icon").params),{type:"line"},{alias:"spacing"}]}),this.hasTitle()&&e.push({group_alias:"text:spacing",options:{group_title:"Label",group_name:"iconListText",selector:" .ecom-base-iconlist .ecom-iconlist--title"}}),this.hasDesc()&&e.push({group_alias:"text:spacing",options:{group_title:"Description",group_name:"iconListDescription",selector:" .ecom-base-iconlist .ecom-iconlist--des"}}),e}}},Va={class:"ecom-element ecom-base-iconlist"},Wa=["data-layout"],Oa=["innerHTML"],Fa={class:"ecom-iconlist-content"},Ua=["innerHTML"],Ra=["innerHTML"],Ya={key:1},Ga={class:"ecom-iconlist--container"},Ja=["innerHTML"],Za={class:"ecom-iconlist-content"},Ka=["innerHTML"],Xa=["innerHTML"];function Qa(e,t,o,n,s,i){var a;return c(),d("div",Va,[p("ul",{class:"ecom-iconlist--list","data-layout":(a=o.data.settings)==null?void 0:a.layout},[(c(!0),d(D,null,Y(o.data.settings.items,(l,u)=>{var r,g,m;return c(),d("li",{key:u,class:"ecom-iconlist--item ecom-html"},[(r=l.link)!=null&&r.href?(c(),d("a",j({key:0,class:"ecom-iconlist--container ecom-iconlist--link"},l.link),[p("span",{class:"ecom-iconlist--icon",innerHTML:(g=l.icon)==null?void 0:g.value},null,8,Oa),p("div",Fa,[l.label?(c(),d("p",{key:0,class:"ecom-iconlist--title",innerHTML:e.lang(l.label,"ecom-iconlist-title-"+u+"_"+o.data.id)},null,8,Ua)):y("",!0),l.desc?(c(),d("div",{key:1,class:"ecom-iconlist--des",innerHTML:e.lang(l.desc,"ecom-icon-list--des_"+u+"_"+o.data.id)},null,8,Ra)):y("",!0)])],16)):(c(),d("div",Ya,[p("div",Ga,[p("span",{class:"ecom-iconlist--icon",innerHTML:(m=l.icon)==null?void 0:m.value},null,8,Ja),p("div",Za,[l.label?(c(),d("p",{key:0,class:"ecom-iconlist--title",innerHTML:e.lang(l.label,"ecom-iconlist-title-"+u+"_"+o.data.id)},null,8,Ka)):y("",!0),l.desc?(c(),d("div",{key:1,class:"ecom-iconlist--des",innerHTML:e.lang(l.desc,"ecom-icon-list--des_"+u+"_"+o.data.id)},null,8,Xa)):y("",!0)])])]))])}),128))],8,Wa)])}const er=k(Ze,[["render",Qa]]);Ze.__docgenInfo={exportName:"default",displayName:"IconList",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/IconList.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const Ke={name:"Timeline",presets:!0,docs:"https://help.ecomposer.io/docs/elements/basic-elements",mixins:[T,H],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["items","layout_type","number_column","number_column__tablet","number_column__mobile","appearance_animation","loop_animation","dynamic_line"]}},computed:{items(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.items},numberColumn(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.number_column},numberColumnTablet(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.number_column__tablet},prevBtn(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.prev_icon},nextBtn(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.next_icon},numberColumnMobile(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.number_column__mobile},hasDynamicLine(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.dynamic_line},isLineInside(){var e,t,o;return((o=(t=(e=this.data)==null?void 0:e.style)==null?void 0:t.line)==null?void 0:o.type)=="inside"},isPointDiamond(){var e,t,o;return((o=(t=(e=this.data)==null?void 0:e.style)==null?void 0:t.point)==null?void 0:o.type)=="diamond"},isHorizontal(){var e,t;return["horizontal_alternating","horizontal_standard"].includes((t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.layout_type)},isAlternating(){var e,t;return["horizontal_alternating","vertical_separated"].includes((t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.layout_type)},isVertical(){var e,t;return["vertical_separated","vertical_side"].includes((t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.layout_type)},isThumbnailInside(){var e,t;return this.isVertical&&!this.isAlternating&&((t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.thumbnail_inside)==!0},pointStyle(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.point_style},lastActiveIndex(){let e=null;return this.items&&this.items.forEach((t,o)=>{t.active==!0&&(e=o)}),e},lineBasicColor(){var e,t,o;return(o=(t=(e=this.data)==null?void 0:e.style)==null?void 0:t.line)==null?void 0:o.color},lineActiveColor(){var e,t,o;return(o=(t=(e=this.data)==null?void 0:e.style)==null?void 0:t.line)==null?void 0:o.color_active},appearanceAnimation(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.appearance_animation},loopAnimation(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.loop_animation},css(){return`
                .ecom-base-timeline {
                    overflow: hidden;
                }

                .ecom-timeline_grid {
                    display: flex;
                    flex-wrap: nowrap;
                    transition: .5s ease all;
                }

                .ecom-base-timeline[data-appearance-animation=true].ecom-timeline--vertical .ecom-timeline_grid {
                    position: relative;
                }

                .ecom-timeline_dynamic-line {
                    display: none;    
                    transition: .4s ease all;
                }

                .ecom-timeline--vertical .ecom-timeline_dynamic-line {
                    display: block;
                    position: absolute;
                    height: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 5;
                }

                .ecom-timeline_item {
                    position: relative;
                }
                
                .timeline-item_content-wrapper {
                    position: relative;
                }

                .ecom-timeline_prev,
                .ecom-timeline_next {
                    display: none;
                }

                .timeline-item_line-holder {
                    position: absolute;
                    top: 50%;
                }
                
                .timeline-item_line {
                    display: block;
                    background-color: #ebebeb;
                    height: 100%;
                }

                .timeline-item_image {
                    display: flex;
                    justify-content: center;
                }

                .ecom-image-default {
                    margin: auto;
                }

                .timeline-item_wrapper {
                    display: flex;
                    flex-direction: column;
                }

                .timeline-item_title a {
                    color: inherit;
                }

                /* style 1 item content */
                .timeline-item_wrapper.timeline_content--style-1 .timeline-item_title {
                    order: 1;
                }
                .timeline-item_wrapper.timeline_content--style-1 .timeline-item_text {
                    order: 2;
                }
                .timeline-item_wrapper.timeline_content--style-1 .timeline-item_date {
                    order: 3;
                }

                /* style 2 item content */
                .timeline-item_wrapper.timeline_content--style-2 .timeline-item_date {
                    order: 1;
                }
                .timeline-item_wrapper.timeline_content--style-2 .timeline-item_title {
                    order: 2;
                }
                .timeline-item_wrapper.timeline_content--style-2 .timeline-item_text {
                    order: 3;
                }

                /* style 3 item content */
                .timeline-item_wrapper.timeline_content--style-3 .timeline-item_title {
                    order: 1;
                }
                .timeline-item_wrapper.timeline_content--style-3 .timeline-item_date {
                    order: 2;
                }
                .timeline-item_wrapper.timeline_content--style-3 .timeline-item_text {
                    order: 3;
                }

                /* Point-holder css */
                .timeline-item_point-holder {
                    position: absolute;
                    color: #fff;
                    font-size: 1em;
                    width: 1em;
                    height: 1em;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    transition: .3s ease all;
                    z-index: 5;
                }

                .timeline-item_point-holder.timeline-item_point--rm-size {
                    width: fit-content;
                    height: fit-content;
                }

                .ecom-timeline_item.ecom-line-animated .timeline-item_point {
                    animation: load 1s ease-out;
                }

                @keyframes load {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(2);   
                    }
                    100% {
                        transform: scale(1);
                    }
                }

                .timeline-item_point {
                    background-color: #111;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .timeline-item_icon-holder {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    line-height: 1em;
                    max-height: 100%;
                    width: 70%;
                }

                .timeline-item_point-holder.timeline-item_point-diamond .timeline-item_point {
                    border-radius: 0;
                    transform: rotate(45deg);
                }

                .timeline-item_point-holder.timeline-item_point-diamond .timeline-item_point .timeline-item_icon-holder {
                    transform: rotate(-45deg);
                }

                .timeline-item_point-holder.timeline-item_point-diamond::before {
                    position: absolute;
                    content: '';
                    height: 1px;
                    width: 60px;
                    background: #ebebeb;
                    top: 50%;
                    transform-origin: top center;
                    transform: rotate(90deg);
                }

                .timeline-item_point-holder.timeline-item_point-diamond::after {
                    position: absolute;
                    content: '';
                    height: 1px;
                    width: 60px;
                    background: #ebebeb;
                    top: 50%;
                    left: 100%;
                    transform-origin: top center;
                    transform: rotate(-90deg);
                    z-index: -1;
                }


                .ecom-timeline--horizontal .timeline-item_point-holder.timeline-item_point-diamond::before {
                    top: unset;
                    right: unset;
                    bottom: 100%;
                    transform: rotate(-90deg);
                    left: 50%;
                    transform-origin: center left;
                }

                .ecom-timeline--horizontal .timeline-item_point-holder.timeline-item_point-diamond::after {
                    top: 100%;
                    right: unset;
                    bottom: 100%;
                    transform: rotate(90deg);
                    left: 50%;
                    transform-origin: center left;
                }

                /* Horizontal css */
                    .ecom-timeline--horizontal .timeline-item_content {
                        text-align: center;
                        position: relative;
                    }

                    .ecom-base-timeline[data-appearance-animation=true].ecom-timeline--horizontal.ecom-timeline--alternating .ecom-timeline_item:nth-child(2n) .timeline-item_content--top,
                    .ecom-base-timeline[data-appearance-animation=true].ecom-timeline--horizontal.ecom-timeline--alternating .ecom-timeline_item:nth-child(2n+1) .timeline-item_content,
                    .ecom-base-timeline[data-appearance-animation=true].ecom-timeline--horizontal:not(.ecom-timeline--alternating) .timeline-item_content {
                        transform: translateY(70%);
                    }

                    .ecom-base-timeline[data-appearance-animation=true].ecom-timeline--horizontal.ecom-timeline--alternating .ecom-timeline_item:nth-child(2n+1) .timeline-item_content--top,
                    .ecom-base-timeline[data-appearance-animation=true].ecom-timeline--horizontal.ecom-timeline--alternating .ecom-timeline_item:nth-child(2n) .timeline-item_content,
                    .ecom-base-timeline[data-appearance-animation=true].ecom-timeline--horizontal:not(.ecom-timeline--alternating) .timeline-item_content--top {
                        transform: translateY(-70%);
                    }

                    /* prev and next button css */
                    .ecom-timeline--horizontal .ecom-timeline_prev,
                    .ecom-timeline--horizontal .ecom-timeline_next {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: auto!important;
                        height: auto!important;
                        margin: 0!important;
                        color: #111;
                        font-size: 26px;
                        z-index: 10;
                        cursor: pointer;
                    }

                    .ecom-timeline_prev svg {
                        width: 1em;
                        height: auto;
                    }

                    .ecom-timeline_next svg {
                        width: 1em;
                        height: auto;
                    }

                    .ecom-timeline_prev {
                        left: 0;
                    }

                    .ecom-timeline_next {
                        right: 0;
                    }

                    .ecom-timeline--horizontal .ecom-timeline_item {
                        flex: 1;
                        width: 0px;
                        padding-left: 15px;
                        padding-right: 15px;
                    }

                    /* line-holder css */
                    .ecom-timeline--horizontal .timeline-item_line-holder {
                        left: 0;
                        width: 100%;
                        height: 1px;
                        transform: translateY(-50%);
                    }

                    .ecom-timeline--horizontal.ecom-timeline--alternating .timeline-item_line-holder {
                        transform: translateY(-50%);
                    }

                    .ecom-timeline--vertical.ecom-timeline_line--inside .ecom-timeline_item:first-child .timeline-item_line-holder {
                        transform: translate(-50%, -6%);
                    }
                    
                    .ecom-timeline--vertical.ecom-timeline_line--inside .ecom-timeline_item:last-child .timeline-item_line-holder {
                        transform: translate(-50%, -102%);
                    }

                    /* Horizontal-standard css */
                    .ecom-timeline--horizontal .timeline-item_content--top {
                        display: flex;
                        align-items: end;
                        padding-bottom: 10%;
                        position: relative;
                        justify-content: center;
                    }
                    
                    .ecom-timeline--horizontal .timeline-item_content {
                        padding-top: 10%;
                    }

                    /* Horizontal-alternating css */
                    .ecom-timeline--horizontal.ecom-timeline--alternating .ecom-timeline_item:nth-child(2n) .timeline-item_content--top {
                        display: flex;
                        align-items: start;
                        padding-top: 10%;
                    }

                    
                    .ecom-timeline--horizontal.ecom-timeline--alternating .ecom-timeline_item:nth-child(2n) .timeline-item_wrapper {
                        display: flex;
                        flex-direction: column;
                        justify-content: end;
                        padding-bottom: 10%;
                    } 

                    .ecom-timeline--horizontal.ecom-timeline--alternating .ecom-timeline_item:nth-child(2n) .timeline-item_content-wrapper {
                        display: flex;
                        flex-direction: column-reverse;
                    }
                /* Vertical css */
                    .ecom-timeline--vertical .ecom-timeline_grid {
                        display: flex;
                        flex-direction: column;
                    }

                    .ecom-timeline--vertical .ecom-timeline_item {
                        padding-top: 15px;
                        padding-bottom: 15px;
                    }

                    .ecom-timeline--vertical .timeline-item_content-wrapper {
                        display: flex;
                    }

                    .ecom-base-timeline[data-appearance-animation=true] .timeline-item_content-info,
                    .ecom-base-timeline[data-appearance-animation=true] .timeline-item_content--top,
                    .ecom-base-timeline[data-appearance-animation=true] .timeline-item_content {
                        opacity: 0;
                        transition: .5s ease all;
                    }
                    
                    .ecom-base-timeline[data-appearance-animation=true].ecom-timeline--vertical.ecom-timeline--alternating .ecom-timeline_item:nth-child(2n) .timeline-item_content--top,
                    .ecom-base-timeline[data-appearance-animation=true].ecom-timeline--vertical.ecom-timeline--alternating .ecom-timeline_item:nth-child(2n+1) .timeline-item_content,
                    .ecom-base-timeline[data-appearance-animation=true].ecom-timeline--vertical:not(.ecom-timeline--alternating) .timeline-item_content-info {
                        transform: translateX(70%);
                    }

                    .ecom-base-timeline[data-appearance-animation=true].ecom-timeline--vertical.ecom-timeline--alternating .ecom-timeline_item:nth-child(2n+1) .timeline-item_content--top,
                    .ecom-base-timeline[data-appearance-animation=true].ecom-timeline--vertical.ecom-timeline--alternating .ecom-timeline_item:nth-child(2n) .timeline-item_content,
                    .ecom-base-timeline[data-appearance-animation=true].ecom-timeline--vertical:not(.ecom-timeline--alternating) .ecom-timeline_item:nth-child(2n) .timeline-item_content-info {
                        transform: translateX(-70%);
                    }

                    .ecom-base-timeline[data-appearance-animation=true] .ecom-timeline_item.ecom-line-animated .timeline-item_content--top,
                    .ecom-base-timeline[data-appearance-animation=true] .ecom-timeline_item.ecom-line-animated .timeline-item_content,
                    .ecom-base-timeline[data-appearance-animation=true] .ecom-timeline_item.ecom-line-animated .timeline-item_content-info {
                        opacity: 1;
                        transform: translateX(0) !important;
                    }

                    
                    /* line-holder css */
                    .ecom-timeline--vertical .timeline-item_line-holder {
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 1px;
                        height: 100%;
                    }

                    /* Vertical-side css */
                    .ecom-timeline--vertical:not(.ecom-timeline--alternating) .timeline-item_content-info {
                        display: flex;
                        flex: 0 0 50%;
                        max-width: 50%;
                        padding-right: 3em;
                        align-items: center;
                        flex-wrap: wrap;
                        justify-content: right;
                    }

                    .ecom-timeline--vertical:not(.ecom-timeline--alternating) .ecom-timeline_item:nth-child(2n+1) .timeline-item_content-wrapper {
                        justify-content: end;
                    }

                    .ecom-timeline--vertical:not(.ecom-timeline--alternating) .ecom-timeline_item:nth-child(2n+1) .timeline-item_content-info {
                        flex-direction: row-reverse;
                        padding-left: 3em;
                        justify-content: left;
                    }

                    .ecom-timeline--vertical:not(.ecom-timeline--alternating) .timeline-item_content--top {
                        display: flex;
                        align-items: center;
                        width: 250px;
                        flex-shrink: 0;
                    }

                    .ecom-timeline--vertical:not(.ecom-timeline--alternating) .timeline-item_content {
                        flex: 1;
                        margin: 0 0 0 10%;
                    }

                    .ecom-timeline--vertical:not(.ecom-timeline--alternating) .ecom-timeline_item:nth-child(2n+1) .timeline-item_content {
                        margin: 0 10% 0 0;
                    }

                    .ecom-timeline--vertical:not(.ecom-timeline--alternating) .timeline-item_content-info.thumbnail-inside {
                        flex-direction: row-reverse;
                    }

                    .ecom-timeline--vertical:not(.ecom-timeline--alternating) .ecom-timeline_item:nth-child(2n+1) .timeline-item_content-info.thumbnail-inside {
                        flex-direction: row;
                    }

                    .ecom-timeline--vertical:not(.ecom-timeline--alternating) .timeline-item_content-info.thumbnail-inside .timeline-item_content--top {
                        margin: 0 0 0 10%;
                    }
                    
                    .ecom-timeline--vertical:not(.ecom-timeline--alternating) .ecom-timeline_item:nth-child(2n+1) .timeline-item_content-info.thumbnail-inside .timeline-item_content--top {
                        margin: 0 10% 0 0;
                    }
                    
                    .ecom-timeline--vertical:not(.ecom-timeline--alternating) .timeline-item_content-info.thumbnail-inside .timeline-item_content {
                        margin: 0;
                        text-align: right;
                    }

                    .ecom-timeline--vertical:not(.ecom-timeline--alternating) .ecom-timeline_item:nth-child(2n+1) .timeline-item_content-info.thumbnail-inside .timeline-item_content {
                        margin: 0;
                        text-align: left;
                    }

                    /* Vertical-separate css */
                    .ecom-timeline--vertical.ecom-timeline--alternating .timeline-item_content--top,
                    .ecom-timeline--vertical.ecom-timeline--alternating .timeline-item_content {
                        flex: 0 0 50%;
                        max-width: 50%;
                    }
                    
                    .ecom-timeline--vertical.ecom-timeline--alternating .timeline-item_content {
                        align-self: center;
                        padding-left: 10%;
                        padding-right: 0;
                        text-align: left;
                    }                    

                    .ecom-timeline--vertical.ecom-timeline--alternating .ecom-timeline_item.ecom-line-animated .timeline-item_content--top,
                    .ecom-timeline--vertical.ecom-timeline--alternating .ecom-timeline_item.ecom-line-animated:nth-child(2n) .timeline-item_content {
                        -webkit-animation-duration: .5s;
                        animation-duration: .5s;
                        -webkit-animation-fill-mode: both;
                        animation-fill-mode: both;
                        -webkit-animation-name: fadeInToRight;
                        animation-name: fadeInToRight;
                    }

                    .ecom-timeline--vertical.ecom-timeline--alternating .ecom-timeline_item.ecom-line-animated .timeline-item_content,
                    .ecom-timeline--vertical.ecom-timeline--alternating .ecom-timeline_item.ecom-line-animated:nth-child(2n) .timeline-item_content--top {
                        -webkit-animation-duration: .5s;
                        animation-duration: .5s;
                        -webkit-animation-fill-mode: both;
                        animation-fill-mode: both;
                        -webkit-animation-name: fadeInToLeft;
                        animation-name: fadeInToLeft;
                    }

                    .ecom-timeline--vertical.ecom-timeline--alternating .ecom-timeline_item:nth-child(2n) .timeline-item_content {
                        text-align: right;
                        padding-right: 10%;
                        padding-left: 0;
                    }

                    .ecom-timeline--vertical.ecom-timeline--alternating .timeline-item_content--top {
                        align-self: center;
                        padding-right: 10%;
                        padding-left: 0;
                    }

                    .ecom-timeline--vertical.ecom-timeline--alternating .ecom-timeline_item:nth-child(2n) .timeline-item_content--top {
                        padding-left: 10%;
                        padding-right: 0;
                    }

                    .ecom-timeline--vertical.ecom-timeline--alternating .ecom-timeline_item:nth-child(2n) .timeline-item_content-wrapper {
                        flex-direction: row-reverse;
                    }
                    /* Responsive vertical */
                    @media screen and (max-width: 767px) {
                        .ecom-timeline--vertical .timeline-item_line-holder,
                        .ecom-timeline--vertical .timeline-item_point-holder {
                            display: none;
                        }

                        .ecom-timeline--vertical .timeline-item_content-wrapper,
                        .ecom-timeline--vertical:not(.ecom-timeline--alternating) .ecom-timeline_item:nth-child(2n+1) .timeline-item_content-info,
                        .ecom-timeline--vertical:not(.ecom-timeline--alternating) .timeline-item_content-info {
                            flex-direction: column;
                        }

                        .ecom-timeline--vertical:not(.ecom-timeline--alternating) .ecom-timeline_item:nth-child(2n+1) .timeline-item_content-info,
                        .ecom-timeline--vertical:not(.ecom-timeline--alternating) .timeline-item_content-info {
                            padding: 0;
                        }

                        
                        .ecom-timeline--vertical:not(.ecom-timeline--alternating) .timeline-item_content--top,
                        .ecom-timeline--vertical:not(.ecom-timeline--alternating) .ecom-timeline_item:nth-child(2n+1) .timeline-item_content--top {
                            margin: 0;
                        }

                        .ecom-timeline--vertical .timeline-item_content-wrapper .timeline-item_content--top,
                        .ecom-timeline--vertical .timeline-item_content-wrapper .timeline-item_content,
                        .ecom-timeline--vertical:not(.ecom-timeline--alternating) .timeline-item_content-info {
                            padding: 0;
                            flex: 1;
                            max-width: 100%;
                            width: 100%;
                        }
                        
                        .ecom-timeline--vertical .timeline-item_content-wrapper .timeline-item_content {
                            text-align: center;
                        }

                        .ecom-timeline--vertical.ecom-timeline--alternating .ecom-timeline_item:nth-child(2n) .timeline-item_content-wrapper {
                            flex-direction: column;
                        }
                        
                        .ecom-timeline--vertical.ecom-timeline--alternating .ecom-timeline_item:nth-child(2n) .timeline-item_content {
                            text-align: center;
                            padding: 0;
                        }

                        .ecom-timeline--vertical.ecom-timeline--alternating .ecom-timeline_item:nth-child(2n) .timeline-item_content--top {
                            padding: 0;
                        }

                        .ecom-timeline--vertical .ecom-timeline_dynamic-line {
                            display: none !important;
                        }

                    }

                    @media screen and (min-width: 768px) and (max-width: 1024px) {
                        .ecom-timeline--vertical:not(.ecom-timeline--alternating) .timeline-item_content-info,
                        .ecom-timeline--vertical:not(.ecom-timeline--alternating) .ecom-timeline_item:nth-child(2n+1) .timeline-item_content-info {
                            flex-direction: column;
                        }

                        .ecom-timeline--vertical:not(.ecom-timeline--alternating) .timeline-item_content-info {
                            align-items: flex-end;
                        }

                        .ecom-timeline--vertical:not(.ecom-timeline--alternating) .ecom-timeline_item:nth-child(2n+1) .timeline-item_content-info {
                            align-items: flex-start;
                        }

                        .ecom-timeline--vertical:not(.ecom-timeline--alternating) .ecom-timeline_item:nth-child(2n+1) .timeline-item_content--top,
                        .ecom-timeline--vertical:not(.ecom-timeline--alternating) .timeline-item_content--top {
                            margin: 0;
                        }

                        .ecom-timeline--vertical:not(.ecom-timeline--alternating) .ecom-timeline_item:nth-child(2n) .timeline-item_content {
                            text-align: right;
                        }
                    }

                    /* keyframe css */

                    .ecom-line-animated .ecom-fadeindown-animation {
                        -webkit-animation-duration: 1.1s;
                        animation-duration: 1.1s;
                        -webkit-animation-fill-mode: both;
                        animation-fill-mode: both;
                        animation-iteration-count: infinite;
                    }

                    .ecom-line-animated .ecom-fadeinup-animation {
                        -webkit-animation-duration: 1.1s;
                        animation-duration: 1.1s;
                        -webkit-animation-fill-mode: both;
                        animation-fill-mode: both;
                        animation-iteration-count: infinite;
                    }

                    @keyframes fadeInDown {
                        0% {
                            opacity: 0;
                            transform: translateY(-30px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes fadeInUp {
                        0% {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    } 
            `},settings(){let e=[{label:"Active",name:"active",type:"toggle",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{label:"Image",name:"image",type:"picker",options:{type:"image",output:["value","name"],editAlt:!0}},{type:"popup",name:"content_style",label:"Style",options:{type:"dropdown",default:!1,values:{style_1:"Style 1",style_2:"Style 2",style_3:"Style 3"}}},{label:"Title",name:"title",type:"text"},{label:"Link title",type:"link",name:"link",options:{visible:{keep_data:!1}}},{label:"Date",name:"date",type:"text"},{label:"Text",name:"content",type:"textarea",options:{toolbar:"full",height:100,placeholder:"Write your content here."}}];return this.pointStyle=="icon"&&e.splice(1,0,{label:"Point icon",name:"icon",type:"picker",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}}),[{params:[{type:"popup",name:"layout_type",label:"Layout",options:{type:"dropdown",default:!1,values:{horizontal_alternating:"Horizontal Alternating",horizontal_standard:"Horizontal Standard",vertical_separated:"Vertical Separated",vertical_side:"Vertical Side"}}},{type:"popup",name:"point_style",label:"Point style",options:{type:"dropdown",default:!1,values:{icon:"Icon",date:"Date"}}},{name:"items",type:"group",value:[],options:{add_text:"Add item"},params:e},{type:"number",label:"Number of column",name:"number_column",options:{responsive:!0,slider:!0,min:1,max:8,visible:function(t){return t.layout_type==="horizontal_alternating"||t.layout_type==="horizontal_standard"}}},{label:"Prev icon",name:"prev_icon",type:"picker",options:{visible:function(t){return t.layout_type==="horizontal_alternating"||t.layout_type==="horizontal_standard"},type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{label:"Next icon",name:"next_icon",type:"picker",options:{visible:function(t){return t.layout_type==="horizontal_alternating"||t.layout_type==="horizontal_standard"},type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{label:"Thumbnail inside",name:"thumbnail_inside",type:"toggle",options:{visible:function(t){return t.layout_type==="vertical_side"},values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{label:"Appearance animation",name:"appearance_animation",type:"toggle",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{label:"Dynamic line",name:"dynamic_line",type:"toggle",options:{visible:function(t){return t.appearance_animation===!0&&t.layout_type==="vertical_separated"||t.layout_type==="vertical_side"},values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{label:"Loop animation",name:"loop_animation",type:"toggle",options:{visible:function(t){return t.appearance_animation===!0},values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}}]}]},default(){return{settings:{items:[{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet.",title:"Example Title 1",date:"1990",image:{value:"/images/placeholder.png"},link:{href:""}},{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet.",title:"Example Title 2",date:"2000",image:{value:"/images/placeholder.png"}},{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet.",title:"Example Title 3",date:"2022",image:{value:"/images/placeholder.png"}},{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet.",title:"Example Title 4",date:"2026",image:{value:"/images/placeholder.png"}}],point_style:"icon",layout_type:"horizontal_standard",appear_animation:!0,number_column:3,number_column__tablet:2,prev_icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 13.28125 6.78125 L 4.78125 15.28125 L 4.09375 16 L 4.78125 16.71875 L 13.28125 25.21875 L 14.71875 23.78125 L 7.9375 17 L 28 17 L 28 15 L 7.9375 15 L 14.71875 8.21875 Z"></path></svg>',next_icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 18.71875 6.78125 L 17.28125 8.21875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 17.28125 23.78125 L 18.71875 25.21875 L 27.21875 16.71875 L 27.90625 16 L 27.21875 15.28125 Z"></path></svg>'},style:{image:{tab:"normal",imageWidth:"100%",imageMaxWidth:"100%",imageObjectFit:"cover",imageOpacitynormalmode:1,imageOpacityhovermode:1},dynamic_line:{width:"3px",color:"#eb4269"},point:{type:"standard",color:"#424547",size:"16px",border_radius:{top:"100%",left:"100%",bottom:"100%",right:"100%"}},line:{diamond_line_size:"20px",color:"#ebebeb",type:"outside",thickness:"2px"},date:{color:"#53657a"},title:{textTypography:{"font-size":"24px","font-weight":"600"},textColor:"#505157"},content:{textColor:"#53657a",spacing:{margin:{top:"10px",bottom:"10px"}}},nav_icon:{tab:"normal",iconFontSize:"35px",iconPrimaryColornormalmode:"#545a63"}}}},javascript(){return function(){let e=this.id;if(!!this.$el){var o=document.querySelector(`.${e}`);if(!!o){var n=o.querySelector(".ecom-base-timeline"),s=n.querySelector(".ecom-timeline_grid"),i=n.dataset.numberColumn||3,a=n.dataset.numberColumnTablet||2,l=n.dataset.numberColumnMobile||1,u=n.dataset.itemsLength;if(n&&n.classList.contains("ecom-timeline--horizontal")){let x=function(){if(_=0,!document.querySelector(`.${e}`)){window.removeEventListener("resize",x);return}if(u){window.innerWidth<=767?(h=o.offsetWidth/l,m=u-l):window.innerWidth>=768&&window.innerWidth<=1024?(h=o.offsetWidth/a,m=u-a):window.innerWidth>=1025&&(h=o.offsetWidth/i,m=u-i),b=m;let w=h*u;s&&(s.style.transform="translateX(0px)",s.style.width=w+"px",setTimeout(()=>{C()},500))}},C=function(){let w=null,$=n.classList.contains("ecom-timeline--alternating");if($?w=n.querySelectorAll(".timeline-item_content--top, .timeline-item_content"):w=n.querySelectorAll(".timeline-item_content--top"),w){let q=0;if(w.forEach(B=>{B.style.height=null,q=B.offsetHeight>q?B.offsetHeight:q}),q>0&&(w.forEach(B=>{B.style.height=q+"px"}),!$)){let B=n.querySelectorAll(".timeline-item_line-holder");B&&B.forEach(P=>{P.style.top=q+"px"});let A=n.querySelectorAll(".timeline-item_point-holder");A&&A.forEach(P=>{P.style.top=q+"px"}),r&&(r.style.top=q+"px"),g&&(g.style.top=q+"px")}}},L=function(){if(m>0){let w=function(){_+=h,_>0&&(_=0),b<m&&(b+=1),s.style.transform=`translateX(${_}px)`},$=function(){b-=1,b>=0?(_-=h,s.style.transform=`translateX(${_}px)`):b=0};r&&r.addEventListener("click",w),g&&g.addEventListener("click",$)}};var r=n.querySelector(".ecom-timeline_prev"),g=n.querySelector(".ecom-timeline_next"),m=0,h=0,_=0,b=0;x(),L(),window.addEventListener("resize",x);var f=n.querySelectorAll("img.ecom-image-default");f&&f.forEach(w=>{w.onload=()=>{x()}})}if(n){let x=n.dataset.appearanceAnimation||"false",C=n.dataset.loopAnimation||"false";if(x=="true"){let w=function(B,A){if(i&&A<i){let P=B.querySelector(".timeline-item_content--top"),O=B.querySelector(".timeline-item_content");v=A*250,P&&(P.style.transitionDelay=v+"ms"),O&&(O.style.transitionDelay=v+"ms")}},$=function(B={}){let A=n.querySelectorAll(".ecom-timeline_item");A.length>0&&n&&n.classList.contains("ecom-timeline--horizontal")?A.forEach((P,O)=>{q(P,B),w(P,O)}):A.forEach(P=>{q(P,{rootMargin:"-25% 0% -25% 0%",threshold:0})})},q=function(B,A){new IntersectionObserver((O,J)=>{O.forEach(F=>{F.boundingClientRect.top<0&&F.target.classList.add("ecom-line-animated",F.isIntersecting),C=="true"?F.boundingClientRect.top>0&&F.target.classList.toggle("ecom-line-animated",F.isIntersecting):F.isIntersecting&&(F.target.classList.add("ecom-line-animated"),J.unobserve(F.target))})},A).observe(B)},L={threshold:1};n.classList.contains("ecom-timeline--horizontal")&&(L={threshold:.5});var v=0;setTimeout(()=>{if($(L),n.classList.contains("ecom-timeline--vertical")){let P=function(){let O=window.innerHeight;const J=n.getBoundingClientRect();!B||(J.top<O&&A<=130&&(A=Math.round((O-J.top)*100/J.height)),A>130&&(A=130),B.style.height=`calc(${A}% - 100px)`)};const B=n.querySelector(".ecom-timeline_dynamic-line");let A=0;window.addEventListener("scroll",P),window.addEventListener("resize",P)}},700)}}}}}}},methods:{style(){var t,o,n,s;let e=[];if((o=(t=this.data)==null?void 0:t.settings)!=null&&o.items){((s=(n=this.data)==null?void 0:n.settings)==null?void 0:s.items.length)>0&&e.push({group_name:"item_content",group_title:"Item content",params:[{type:"popup",label:"Border",name:"border",options:{type:"border",oneline:!0},css:{selector:" .timeline-item_wrapper"}},{name:"box-shadow",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow",visible:{keep_data:!0}},css:{selector:" .timeline-item_wrapper"}},{type:"dimension",label:"Border radius",name:"border-radius",options:{type:"radius",units:"default"},css:{selector:" .timeline-item_wrapper"}},{alias:"padding",options:{name:"inner-padding",label:"Inner padding",css:{selector:" .timeline-item_wrapper"}}},{alias:"padding",options:{name:"outer-padding",label:"Outer padding",css:{important:!0,selector:" .timeline-item_content"}}}]}),this.isVertical&&this.hasDynamicLine&&e.push({group_name:"dynamic_line",group_title:"Dynamic line",params:[{label:"Size",type:"number",name:"width",options:{units:{px:{max:20,min:0,step:1}}},css:{selector:" .ecom-timeline_dynamic-line",properties:{width:""}}},{label:"Color",type:"color",name:"color",options:{oneline:!0,global:{type:"colors"}},css:{selector:" .ecom-timeline_dynamic-line",properties:{"background-color":""}}}]}),this.items.some(u=>{var r;return(r=u.image)==null?void 0:r.value})&&e.push({group_alias:"image",options:{group_title:"Thumbnail",selector:" .ecom-image-default"},modify:{params:[{position:19,fields:[{type:"line"},{alias:"spacing",options:{css:{selector:" .ecom-image-default"}}}]}]}}),this.items.some(u=>u.date)&&e.push({group_alias:"text",options:{group_title:"Date",group_name:"date",selector:" .timeline-item_date"},modify:{params:[{position:10,fields:{alias:"spacing"}}]}}),this.items.some(u=>u.title)&&e.push({group_alias:"text",options:{group_title:"Title",group_name:"title",selector:" .timeline-item_title"},modify:{params:[{position:10,fields:{alias:"spacing"}}]}}),this.items.some(u=>u.content)&&e.push({group_alias:"text",options:{group_title:"Content",group_name:"content",selector:" .timeline-item_text"},modify:{params:[{position:10,fields:{alias:"spacing"}}]}});let i=null,a=null,l=[];this.isHorizontal?(i={height:""},a={width:""}):(i={width:""},a={height:""},l.push({label:"Type",type:"popup",name:"type",options:{default:!1,type:"dropdown",values:{inside:"inside",outside:"outside"}}})),l.push({label:"Color nomal",type:"color",name:"color",options:{oneline:!0,global:{type:"colors"}},css:{selector:" .timeline-item_line-holder .timeline-item_line",properties:{"background-color":""}}},{label:"Color active",type:"color",name:"color_active",options:{oneline:!0,global:{type:"colors"}},css:{selector:" .ecom-timeline_item.line-active .timeline-item_line-holder .timeline-item_line",properties:{"background-color":""}}},{label:"Thickness",type:"number",name:"thickness",options:{responsive:!0,units:{px:{max:20,min:0,step:1}}},css:{selector:" .timeline-item_line-holder, .timeline-item_point-holder.timeline-item_point-diamond::after, .timeline-item_point-holder.timeline-item_point-diamond::before",properties:i}}),this.isPointDiamond&&l.push({label:"Diamond line size",type:"number",name:"diamond_line_size",options:{responsive:!0,units:{px:{max:100,min:0,step:1}}},css:{selector:" .timeline-item_point-holder.timeline-item_point-diamond::before, .timeline-item_point-holder.timeline-item_point-diamond::after",properties:a}}),e.push({group_name:"line",group_title:"Line",params:l}),e.push({group_name:"point",group_title:"Point",params:[{label:"Type",type:"popup",name:"type",options:{default:!1,type:"dropdown",preview:"title",values:{standard:"Standard",diamond:"Diamond"}}},{type:"dimension",label:"Border radius",name:"border_radius",options:{type:"radius",units:"default"},css:{properties:{"border-radius":""},selector:" .timeline-item_point"}},{type:"tab",name:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"},{name:"active",title:"Active"}]},css:!1},{label:"Width",type:"number",name:"width",options:{visible:function(u){return u.tab=="normal"},responsive:!0,units:{px:{max:100,min:0,step:1}}},css:{selector:" .timeline-item_point-holder",properties:{width:""}}},{label:"Height",type:"number",name:"height",options:{visible:function(u){return u.tab=="normal"},responsive:!0,units:{px:{max:100,min:0,step:1}}},css:{selector:" .timeline-item_point-holder",properties:{height:""}}},{label:"Color",type:"color",name:"color",options:{visible:function(u){return u.tab=="normal"},oneline:!0,global:{type:"colors"}},css:{selector:" .timeline-item_point",properties:{"background-color":""}}},{label:"Size",type:"number",name:"size_hover",options:{visible:function(u){return u.tab=="hover"},responsive:!0,units:{px:{max:100,min:0,step:1}}},css:{selector:" .ecom-timeline_item:hover .timeline-item_point-holder",properties:{width:"",height:""}}},{label:"Width",type:"number",name:"width_hover",options:{visible:function(u){return u.tab=="hover"},responsive:!0,units:{px:{max:100,min:0,step:1}}},css:{selector:" .ecom-timeline_item:hover .timeline-item_point-holder",properties:{width:""}}},{label:"Height",type:"number",name:"height_hover",options:{visible:function(u){return u.tab=="hover"},responsive:!0,units:{px:{max:100,min:0,step:1}}},css:{selector:" .ecom-timeline_item:hover .timeline-item_point-holder",properties:{height:""}}},{label:"Color",type:"color",name:"color_hover",options:{visible:function(u){return u.tab=="hover"},oneline:!0,global:{type:"colors"}},css:{selector:" .ecom-timeline_item:hover .timeline-item_point",properties:{"background-color":""}}},{label:"Width",type:"number",name:"width_active",options:{visible:function(u){return u.tab=="active"},responsive:!0,units:{px:{max:100,min:0,step:1}}},css:{selector:" .ecom-timeline_item.line-active .timeline-item_point-holder",properties:{width:""}}},{label:"Height",type:"number",name:"height_active",options:{visible:function(u){return u.tab=="active"},responsive:!0,units:{px:{max:100,min:0,step:1}}},css:{selector:" .ecom-timeline_item.line-active .timeline-item_point-holder",properties:{height:""}}},{label:"Color",type:"color",name:"color_active",options:{visible:function(u){return u.tab=="active"},oneline:!0,global:{type:"colors"}},css:{selector:" .ecom-timeline_item.line-active .timeline-item_point",properties:{"background-color":""}}},{type:"popup",label:"Hover Animation",name:"animation",options:{visible:function(u){return u.tab==="hover"},type:"dropdown",values:"animation",size:"small"},css:{selector:"root .ecom-timeline_item:hover .timeline-item_point",properties:{animation:""}}},{type:"popup",label:"Transition",name:"transition",options:{visible:function(u){return u.tab==="hover"},type:"transitions"},css:{selector:"root .timeline-item_point"}}]}),this.items&&this.items.some(u=>u.icon)&&e.push({group_name:"icon",group_title:"Icon",params:[{name:"size",label:"Size",type:"number",options:{responsive:!0,units:{px:{min:0,max:100}}},css:{selector:" .timeline-item_icon-holder svg",properties:{width:""}}},{name:"transform",label:"Rotate",type:"number",options:{responsive:!0,min:0,max:360},css:{selector:" .timeline-item_icon-holder svg",properties:{transform:"rotate(%value%deg)"}}},{name:"color",label:"Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{selector:" .timeline-item_icon-holder svg",properties:{fill:""}}}]}),this.isHorizontal&&(this.prevBtn||this.nextBtn)&&e.push({group_alias:"icon:hover",options:{group_name:"nav_icon",group_title:"Navigation icon",selector:" .ecom-timeline_prev, .ecom-timeline_next"},modify:{params:[{position:30,fields:{alias:"spacing"}}]}})}return e}}},tr=["data-appearance-animation","data-loop-animation","data-number-column","data-number-column-tablet","data-number-column-mobile","data-items-length"],or=["innerHTML"],ir=["innerHTML"],nr={class:"ecom-timeline_grid",ref:"timelineGrid"},sr={key:0,class:"ecom-timeline_dynamic-line"},ar=["data-index"],rr={class:"timeline-item_line-holder"},lr={class:"timeline-item_content-wrapper"},cr={key:0,class:"timeline-item_point"},pr=["innerHTML"],mr={key:1,class:"timeline-item_point"},dr={class:"timeline-item_icon-holder"},ur=["innerHTML"],gr={class:"timeline-item_content--top"},_r={class:"timeline-item_image"},hr={class:"ecom-image-default"},fr=["src"],br={class:"timeline-item_content"},yr=["innerHTML"],vr={class:"timeline-item_title"},xr=["innerHTML"],wr=["innerHTML"],kr=["innerHTML"],Cr={class:"timeline-item_image"},Tr={class:"ecom-image-default"},Lr=["src"],$r={class:"timeline-item_title"},Sr=["innerHTML"],Mr=["innerHTML"],Hr=["innerHTML"],Br=["innerHTML"];function qr(e,t,o,n,s,i){var a,l,u,r;return c(),d("div",{class:S(["ecom-element ecom-base-timeline",[i.isHorizontal?"ecom-timeline--horizontal":"",i.isAlternating?"ecom-timeline--alternating":"",i.isVertical?"ecom-timeline--vertical":"",i.isVertical?i.isLineInside?"ecom-timeline_line--inside":"ecom-timeline_line--outside":""]]),"data-appearance-animation":(a=i.appearanceAnimation)!=null?a:!1,"data-loop-animation":!!(i.loopAnimation&&i.appearanceAnimation),"data-number-column":(l=i.numberColumn)!=null?l:3,"data-number-column-tablet":(u=i.numberColumnTablet)!=null?u:2,"data-number-column-mobile":(r=i.numberColumnMobile)!=null?r:1,"data-items-length":i.items?i.items.length:0},[p("div",{class:"ecom-timeline_prev",innerHTML:i.prevBtn},null,8,or),p("div",{class:"ecom-timeline_next",innerHTML:i.nextBtn},null,8,ir),p("div",nr,[i.isVertical&&i.hasDynamicLine?(c(),d("div",sr)):y("",!0),(c(!0),d(D,null,Y(i.items,(g,m)=>{var h,_,b,f;return c(),d("div",{key:m,class:S(["ecom-timeline_item",g.active==!0?"line-active":""]),"data-index":m},[p("div",rr,[p("span",{class:"timeline-item_line",style:E(i.lastActiveIndex==m?i.isHorizontal?{background:`linear-gradient(to right, ${i.lineActiveColor} 50%, ${i.lineBasicColor} 50%)`}:{background:`linear-gradient(to bottom, ${i.lineActiveColor} 50%, ${i.lineBasicColor} 50%)`}:{})},null,4)]),p("div",lr,[p("div",{class:S(["timeline-item_point-holder",[i.isPointDiamond?"timeline-item_point-diamond":"",i.pointStyle=="date"?"timeline-item_point--rm-size":""]])},[i.pointStyle=="icon"?(c(),d("div",cr,[p("div",{class:"timeline-item_icon-holder",innerHTML:g==null?void 0:g.icon},null,8,pr)])):y("",!0),i.pointStyle=="date"?(c(),d("div",mr,[p("div",dr,[p("div",{class:"timeline-item_date",innerHTML:e.lang(g.date,"timeline_date"+m)},null,8,ur)])])):y("",!0)],2),i.isVertical&&!i.isAlternating?(c(),d("div",{key:0,class:S(["timeline-item_content-info",i.isThumbnailInside?"thumbnail-inside":""])},[p("div",gr,[p("div",_r,[p("picture",hr,[p("img",{src:(_=(h=g.image)==null?void 0:h.value)!=null?_:"",alt:""},null,8,fr)])])]),p("div",br,[p("div",{class:S(["timeline-item_wrapper",g.content_style=="style_1"?"timeline_content--style-1":g.content_style=="style_2"?"timeline_content--style-2":g.content_style=="style_3"?"timeline_content--style-3":""])},[i.pointStyle!="date"?(c(),d("div",{key:0,class:"timeline-item_date",innerHTML:e.lang(g.date,"timeline_date"+m)},null,8,yr)):y("",!0),p("h4",vr,[g.link&&g.link.href.trim()!=""?(c(),d("a",j({key:0},g.link,{innerHTML:e.lang(g.title,"timeline_title"+m)}),null,16,xr)):(c(),d("span",{key:1,innerHTML:e.lang(g.title,"timeline_title"+m)},null,8,wr))]),p("p",{class:"timeline-item_text",innerHTML:e.lang(g.content,"timeline_content"+m)},null,8,kr)],2)])],2)):(c(),d(D,{key:1},[p("div",{class:S(["timeline-item_content--top",[i.isHorizontal?i.isAlternating?m%2==0?"ecom-fadeindown-animation":"ecom-fadeinup-animation":"ecom-fadeindown-animation":""]])},[p("div",Cr,[p("picture",Tr,[p("img",{class:"ecom-image-default",src:(f=(b=g.image)==null?void 0:b.value)!=null?f:"",alt:""},null,8,Lr)])])],2),p("div",{class:S(["timeline-item_content",[i.isHorizontal?i.isAlternating?m%2==0?"ecom-fadeinup-animation":"ecom-fadeindown-animation":"ecom-fadeinup-animation":""]])},[p("div",{class:S(["timeline-item_wrapper",g.content_style=="style_1"?"timeline_content--style-1":g.content_style=="style_2"?"timeline_content--style-2":g.content_style=="style_3"?"timeline_content--style-3":""])},[p("h4",$r,[g.link&&g.link.href.trim()!=""?(c(),d("a",j({key:0},g.link,{innerHTML:e.lang(g.title,"timeline_title"+m)}),null,16,Sr)):(c(),d("span",{key:1,innerHTML:e.lang(g.title,"timeline_title"+m)},null,8,Mr))]),p("p",{class:"timeline-item_text",innerHTML:e.lang(g.content,"timeline_content"+m)},null,8,Hr),i.pointStyle!="date"?(c(),d("div",{key:0,class:"timeline-item_date",innerHTML:e.lang(g.date,"timeline_date"+m)},null,8,Br)):y("",!0)],2)],2)],64))])],10,ar)}),128))],512)],10,tr)}const Er=k(Ke,[["render",qr]]);Ke.__docgenInfo={exportName:"default",displayName:"Timeline",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Timeline.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const Xe={name:"Counter",presets:!0,mixins:[T,H],props:{data:{type:Object,default(){return{}}}},data(){return{counterAlreadyFired:!1,numCounter:0,timer:null,jsreactives:["startingNumber","step","animationDuration","endingNumber"]}},computed:{css(){return`
                .ecom-element.element__counter {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .element__counter--wrapper {
                    display: flex;
                }
                .element__counter--default {
                    display: flex;
                    flex-direction: column;
                    align-items: inherit;
                }
                .element__counter .element__counter--prefix,
                .element__counter .element__counter--suffix {
                    flex-grow: 1;
                    white-space: pre-wrap;
                }
                .element__counter .element__counter--prefix {
                    text-align: right;
                }
                .element__counter .element__counter--suffix {
                    text-align: left;
                }
                .ecom__element-counter--align{
                    display: inline-flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap:12px 20px;
                }
                .element__counter--icon{
                    display:inline-flex;
                }
                .element__counter--icon svg{
                    fill:currentColor;
                    width:24px;
                    height:auto
                }

            `},counter(){var e,t,o,n;return this.updateCounter((e=this.data.settings)==null?void 0:e.startingNumber,(t=this.data.settings)==null?void 0:t.endingNumber,(o=this.data.settings)==null?void 0:o.animationDuration,(n=this.data.settings)==null?void 0:n.step),this.data.settings},displayedCount(){return this.numCounter.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},javascript(){return function(){const e=this.$el;if(!e)return;const t=e.querySelectorAll(".element__counter--number");t.forEach(function(s){s.counterAlreadyFired=!1,s.counterDuration=+s.getAttribute("data-duration"),s.counterInitVal=+s.getAttribute("data-from-value"),s.counterLastVal=+s.getAttribute("data-to-value"),s.counterStep=+s.getAttribute("data-step"),s.updateCounter=function(){if(s.counterInitVal===s.counterLastVal)return!1;let i=s.counterLastVal-s.counterInitVal,a=s.counterInitVal,l=s.counterStep,u=Math.abs(Math.floor(s.counterDuration/i)),r=setInterval(function(){a+=l,a>=s.counterLastVal?(clearInterval(r),s.innerText=s.counterLastVal):s.innerText=a},u)}});function o(s){if(!s)return!1;let i=window.scrollY||window.pageYOffset,a=s.getBoundingClientRect().top+i,l={top:i,bottom:i+window.innerHeight},u={top:a,bottom:a+s.clientHeight};return u.bottom>=l.top&&u.bottom<=l.bottom||u.top<=l.bottom&&u.top>=l.top}function n(){t.forEach(function(s){if(s.counterAlreadyFired===!0||!o(s))return!1;s.updateCounter(),s.counterAlreadyFired=!0,window.removeEventListener("scroll",n)})}window.addEventListener("scroll",n),n()}},settings(){return[{params:[{type:"text",label:"Title",name:"title",options:{toolbar:!1}},{name:"counterOrder",label:"Title Position",type:"choose",options:{oneline:!0,type:"align-y",values:["-1","0"]},css:{selector:" .element__counter--title",properties:{order:""}}},{type:"picker",label:"Icon",name:"icon",options:{type:"icon"},css:{isCss:!1}},{name:"flexDirection",label:"Icon position",type:"choose",options:{oneline:!0,type:"align-position",values:["row","column","column-reverse","row-reverse"]},css:{selector:" .ecom__element-counter--align",properties:{"flex-direction":""}}},{name:"startingNumber",type:"number",label:"Start",value:1,options:{min:0,slider:!1,half:!0}},{name:"endingNumber",type:"number",label:"End",value:100,options:{min:1,slider:!1,half:!0},css:{isCss:!1}},{name:"step",type:"number",label:"Step",value:10,options:{min:1,slider:!1},css:{isCss:!1}},{type:"toggle",label:"Thousand Separator",name:"thousandSeparator",value:!1,options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:{keep_data:!1,condition:e=>e.endingNumber>999}},description:`When ending number is greater than 999 it works <br>
                            e.g:1000 ==> 1,000`},{name:"numberPrefix",type:"text",label:"Number Prefix",options:{half:!0}},{name:"numberSuffix",type:"text",label:"Number Suffix",options:{half:!0}},{name:"animationDuration",type:"number",label:"Duration(ms)",value:2e3,options:{min:1,max:1e4}}]}]},default(){return{settings:{startingNumber:1,endingNumber:9500,animationDuration:2e3,title:"Happy Customers",icon:{name:"happy",cate:"Emoji",value:`<svg version="1.1" id="lni_lni-happy" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve" fill="currentColor">
<g>
	<path d="M32,1.3C15,1.3,1.3,15,1.3,32C1.3,49,15,62.8,32,62.8C49,62.8,62.8,49,62.8,32C62.8,15,49,1.3,32,1.3z M32,59.3
		C17,59.3,4.8,47,4.8,32C4.8,17,17,4.8,32,4.8C47,4.8,59.3,17,59.3,32C59.3,47,47,59.3,32,59.3z"></path>
	<path d="M45.6,35.5H18.4c-0.9,0-1.7,0.4-2.3,1.1c-0.5,0.7-0.8,1.5-0.6,2.4C17,46.8,23.9,52.6,32,52.6c8.1,0,15-5.7,16.5-13.6
		c0.2-0.8-0.1-1.7-0.6-2.4C47.4,35.9,46.5,35.5,45.6,35.5z M32,49.1c-6.1,0-11.4-4.2-12.9-10.1h25.9C43.4,44.9,38.1,49.1,32,49.1z"></path>
	<path d="M20.1,26.7c2.2,0,4-1.8,4-4c0-2.2-1.8-4-4-4c-2.2,0-4,1.8-4,4C16.2,25,18,26.7,20.1,26.7z"></path>
	<circle cx="43.9" cy="22.8" r="4"></circle>
</g>
</svg>`,thumbnail:`<svg version="1.1" id="lni_lni-happy" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve" fill="currentColor">
<g>
	<path d="M32,1.3C15,1.3,1.3,15,1.3,32C1.3,49,15,62.8,32,62.8C49,62.8,62.8,49,62.8,32C62.8,15,49,1.3,32,1.3z M32,59.3
		C17,59.3,4.8,47,4.8,32C4.8,17,17,4.8,32,4.8C47,4.8,59.3,17,59.3,32C59.3,47,47,59.3,32,59.3z"></path>
	<path d="M45.6,35.5H18.4c-0.9,0-1.7,0.4-2.3,1.1c-0.5,0.7-0.8,1.5-0.6,2.4C17,46.8,23.9,52.6,32,52.6c8.1,0,15-5.7,16.5-13.6
		c0.2-0.8-0.1-1.7-0.6-2.4C47.4,35.9,46.5,35.5,45.6,35.5z M32,49.1c-6.1,0-11.4-4.2-12.9-10.1h25.9C43.4,44.9,38.1,49.1,32,49.1z"></path>
	<path d="M20.1,26.7c2.2,0,4-1.8,4-4c0-2.2-1.8-4-4-4c-2.2,0-4,1.8-4,4C16.2,25,18,26.7,20.1,26.7z"></path>
	<circle cx="43.9" cy="22.8" r="4"></circle>
</g>
</svg>`},thousandSeparator:!0,numberSuffix:"+",flexDirection:"column"},style:{counter_general:{alignItems:"flex-start","justify-content":"center"},counter_icon:{iconFontSize:"54px",iconPrimaryColornormalmode:"#333",iconPrimaryColorhovermode:"#047857",tab:"normal"},counter_number:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"38px","font-weight":"600","line-height":"42px"},textColor:"#333"},counter_number_surfix:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"38px","font-weight":"500","line-height":"42px"},textColor:"#333"},counter_title:{textTypography:{"global-typography":"AbgUXj49"}}}}}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){var e,t,o,n;if(this.counterAlreadyFired===!0||!this.isElementVisible(document.querySelector(".element__counter--number")))return!1;this.updateCounter((e=this.data.settings)==null?void 0:e.startingNumber,(t=this.data.settings)==null?void 0:t.endingNumber,(o=this.data.settings)==null?void 0:o.animationDuration,(n=this.data.settings)==null?void 0:n.step),this.counterAlreadyFired=!0},isElementVisible(e){if(!e)return!1;let t=window.scrollY||window.pageYOffset,o=e.getBoundingClientRect().top+t,n={top:t,bottom:t+window.innerHeight},s={top:o,bottom:o+e.clientHeight};return s.bottom>=n.top&&s.bottom<=n.bottom||s.top<=n.bottom&&s.top>=n.top},style(){var t,o,n;let e=[{group_alias:"box",options:{group_name:"counter_general",group_title:"General",selector:" .element__counter"},modify:{params:[{position:0,fields:[{alias:"justify-content",options:{label:"Alignment"}},{alias:"align-items",options:{label:"Content alignment",name:"content_alignment",css:{selector:"root .element__counter--title, root .element__counter--wrapper, root .element__counter--icon",properties:{"align-self":""}}}}]},{position:4,fields:{alias:"spacing",options:{css:{selector:" .ecom__element-counter--align"}}}}]}},{group_alias:"text:spacing",options:{group_name:"counter_number",group_title:"Number",selector:" .element__counter .element__counter--number"},modify:{remove:{index:0,length:1}}},{group_alias:"text:spacing",options:{group_name:"counter_title",group_title:"Title",selector:" .element__counter .element__counter--title"},modify:{remove:{index:0,length:1}}}];return(t=this.counter)!=null&&t.numberSuffix&&e.push({group_alias:"text:spacing",options:{group_name:"counter_number_surfix",group_title:"Number surfix",selector:" .element__counter .element__counter--suffix"},modify:{remove:{index:0,length:1}}}),(o=this.counter)!=null&&o.numberPrefix&&e.push({group_alias:"text:spacing",options:{group_name:"counter_number_prefix",group_title:"Number prefix",selector:" .element__counter .element__counter--prefix"}}),(n=this.counter)!=null&&n.icon&&e.splice(2,0,{group_alias:"icon:hover",options:{group_name:"counter_icon",group_title:"Icon",selector:" .element__counter .element__counter--icon"},modify:{params:[{position:2,fields:[{alias:"spacing"}]}]}}),e},updateCounter(e,t,o,n){if(this.timer&&clearInterval(this.timer),e===t)return!1;isNaN(e)&&(e=0),isNaN(t)&&(t=-1),isNaN(o)&&(o=1e3);let s=t-e,i=e,a=n,l=Math.abs(Math.floor(o/s));this.timer=setInterval(()=>{i+=a,i>=t?(this.numCounter=t,clearInterval(this.timer)):this.numCounter=i},l)}}},Dr={class:"ecom__element ecom-element element__counter"},Ar={class:"ecom__element-counter--align"},zr=["innerHTML"],jr={class:"element__counter--default"},Ir={class:"element__counter--wrapper"},Pr={class:"element__counter--prefix"},Nr=["data-duration","data-to-value","data-from-value","data-step"],Vr={class:"element__counter--suffix"},Wr={class:"element__counter--title","data-ecom-setting-key":"counter-title"};function Or(e,t,o,n,s,i){var a,l,u,r,g,m,h,_,b,f,v,x,C,L;return c(),d("div",Dr,[p("div",Ar,[(a=i.counter)!=null&&a.icon?(c(),d("div",{key:0,class:"element__counter--icon","data-ecom-setting-key":"counter-icon",innerHTML:(l=i.counter)==null?void 0:l.icon.value},null,8,zr)):y("",!0),p("div",jr,[p("div",Ir,[p("span",Pr,I((u=i.counter)==null?void 0:u.numberPrefix),1),p("span",{class:"element__counter--number","data-duration":(r=i.counter)!=null&&r.animationDuration?(g=i.counter)==null?void 0:g.animationDuration:1e3,"data-to-value":(m=i.counter)!=null&&m.endingNumber?(h=i.counter)==null?void 0:h.endingNumber:-1,"data-from-value":(_=i.counter)!=null&&_.startingNumber?(b=i.counter)==null?void 0:b.startingNumber:0,"data-step":(f=i.counter)!=null&&f.step?(v=i.counter)==null?void 0:v.step:1,"data-delimiter":","},I((x=i.counter)!=null&&x.thousandSeparator?i.displayedCount:s.numCounter),9,Nr),p("span",Vr,I((C=i.counter)==null?void 0:C.numberSuffix),1)]),p("div",Wr,I((L=i.counter)==null?void 0:L.title),1)])])])}const Fr=k(Xe,[["render",Or]]);Xe.__docgenInfo={exportName:"default",displayName:"Counter",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Counter.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const Qe={name:"Instagram",docs:"https://help.ecomposer.io/docs/elements/basic-elements/instagram/",presets:!0,mixins:[T,H],vendors:["slider_js","slider_css","modal_js","modal_css"],props:{data:{type:Object,default(){return{}}},index:{type:Number,default:0},deep:{type:Number,default:0}},data(){return{is:"instagram",name:"Instagram",jsreactives:["items","spacing","group","navigator","lightbox","layout","itemsCount","overlay_use","overlay_title","link"]}},computed:{instagram(){return this.data},screens(){let e=this.$store.getters["builder/screens"];return e?Object.entries(e).sort(([,t],[,o])=>t.width-o.width):[]},screenMinW(){let e=[];for(let t in this.screens){let o=this.$helpers.copy(this.screens[t]);o[1].width=t==="0"?0:parseInt(this.screens[t-1][1].width)+1,e.push(o)}return e},isNavigation(){return this.instagram.settings.slider_navigation_layout},optionSwiper(){return this.$helpers.optionSwiper(this.instagram.settings)},sliderNav(){return{position:this.instagram.settings.navigation_position!=="center"?"unset":"absolute"}},settings(){return[{group_title:"General",params:[{type:"paragraph",content:"Connect your Instagram account to get photos. [Connect here](#settings/app_settings/apps)"},{type:"popup",name:"layout",label:"Layout",options:{type:"dropdown",default:!1,values:{grid:"Grid",slider:"Slider"}}},{type:"popup",name:"link",label:"Image Link",options:{type:"dropdown",default:!1,values:{"":"None",media:"Media Link",instagram:"Instagram Post"}},css:{isCss:!1}},{type:"popup",name:"lightbox",label:"Lightbox",value:!1,options:{type:"dropdown",default:!1,values:{true:"Yes",false:"No"},visible:e=>e.link==="media"}},{type:"number",label:"Maximum items to show",name:"itemsCount",options:{min:1,max:30}},{type:"paragraph",content:"** Overlay **"},{type:"toggle",name:"overlay_use",label:"Enable Overlay",value:!0,options:{values:{off:{label:"NO",value:!1},on:{label:"YES",value:!0}}},css:{isCss:!1}},{type:"popup",label:"Title source",name:"overlay_title",options:{type:"dropdown",values:{"":"None",username:"Username",caption:"Caption"},visible:e=>e.overlay_use===!0}}]},{group_alias:"swiper",options:{options:{keep_data:!1,visible:e=>e.layout=="slider"}},modify:{remove:{name:["line_pagination","title_pagination","slider_pagination_style","slider_spacing_row"]}}},{group_title:"Grid settings",options:{visible:{keep_data:!1,condition:e=>e.layout!=="slider"}},params:[{type:"number",label:"Items per row",name:"slider_items",options:{responsive:!0,min:1,max:12},css:{selector:" .ecom-instagram--container.ecom-base-instagram-grid",properties:{"grid-template-columns":"repeat(%value%, 1fr)"}}}]}]},css(){return`
                    /**
                     * EComposer Element Instagram
                     */
                    .ecom-base-instagram-grid {
                        display: grid;
                        gap: 30px 30px;
                        grid-template-columns: repeat(4, 1fr)
                    }
                    .ecom-flex-center, .ecom-swiper-navigation {
                        display: flex;
                        align-items: center;
                    }
                    .ecom-swiper-navigation{
                        justify-content: center
                    }
                    .ecom-swiper-navigation[data-navigator-type="combine"]{
                        justify-content: center
                    }
                    .ecom-instagram--container:not(.ecom-base-instagram-grid) {
                        position: relative;
                        display: flex;
                        flex-direction: column;
                    }
                    .ecom-instagram--item figure{
                        position: relative;
                        overflow: hidden;
                    }
                    .ecom-instagram--container .ecom-instagram--item,
                    .ecom-instagram--container .ecom-instagram--item a{
                        display: block
                    }
                    .ecom-instagram--container .ecom-instagram--item img{
                        position: relative;
                        object-fit: cover;
                    }
                    .ecom-instagram .ecom-swiper-button-next:after,
                    .ecom-instagram .ecom-swiper-button-prev:after {
                        content: none;
                    }
                    .ecom-instagram .ecom-swiper-button-next,
                    .ecom-instagram .ecom-swiper-button-prev {
                        border: 0;
                        background: transparent;
                        width: auto;
                        height: auto;
                        padding: 5px;
                        color: #444;
                        margin-top: 0;
                        transform: translateY(-50%);
                    }
                    .ecom-instagram--container .ecom-swiper-navigation[data-navigator-type="combine"] .ecom-swiper-button-next,
                    .ecom-instagram--container .ecom-swiper-navigation[data-navigator-type="combine"] .ecom-swiper-button-prev {
                        position: static;
                        margin: 0;
                        transform: none;
                    }
                    .ecom-instagram--slider,
                    .ecom-instagram--container .ecom-swiper-navigation[data-navigator-type="classic"] .ecom-swiper-pagination,
                    .ecom-instagram--container .ecom-swiper-navigation:not([data-navigator-type]) .ecom-swiper-pagination {
                        width:100%
                    }
                    .ecom-swiper-pagination-bullet:only-child {
                        opacity: none
                    }
                    .ecom-instagram .ecom-swiper-pagination {
                        position: static;
                        color: rgb(5, 150, 105);
                        display:flex;
                        flex-wrap:wrap;
                        justify-content:center;
                        padding:10px;
                    }
                    .ecom-swiper-navigation-position {
                        display: flex;
                    }
                    .ecom-instagram .ecom-swiper-pagination-bullet{
                       border-radius:unset
                    }
                    .ecom-instagram .ecom-swiper-pagination-bullet,
                    .ecom-instagram .ecom-swiper-pagination-bullet-active{
                        background: currentColor;
                    }
                    .ecom-base-instagram-overlay.ecom-overlay {
                        position: absolute;
                        inset: 0;
                        z-index: 1;
                        color: #ffffff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        pointer-events: none;
                        background: rgba(0,0,0,0.3);
                    }
                    .ecom-base-instagram-overlay.ecom-overlay>span {
                        padding: 0 10%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .ecom-instagram--item{
                        text-align:center;
                    }
                `},javascript(){return function(){let e=this.$el,t=this.settings.itemsCount?this.settings.itemsCount:8;function o(){if(window.EComposer&&window.EComposer.configs&&window.EComposer.configs.instagram)return window.EComposer.configs.instagram;{let l=null;try{window.localStorage.getItem("ecom-instagram")}catch(u){console.log(u)}return l||null}}const n=l=>{let u="",r=this.settings.link,g=r==="media"?this.settings.lightbox:!1;u+=l.map(m=>{var h;return`<div class="ecom-instagram--item ${this.settings.layout==="slider"?" ecom-swiper-slide":""}">
                                ${r?`<a target="_blank" href="${r==="media"?m.media:m.url}" ${g=="true"?'ecom-modal="image"':""}>`:""}
                                    <figure class="ecom-image-default">
                                        <img src="${m.thumb}" alt="${m.username}">
                                        ${this.settings.overlay_use?`<div class="ecom-base-instagram-overlay ecom-overlay">
                                                ${this.settings.overlay_title?`<span class="ecom-overlay-text">${this.settings.overlay_title==="username"?m.username:this.settings.overlay_title==="caption"&&(h=m.caption)!=null?h:""}</span>`:""}
                                            </div>`:""}
                                    </figure>
                                ${r?"</a>":""}
                            </div>`}).join(""),e.querySelector(".ecom-instagram-wrapper").innerHTML=u},s=l=>{let u="ecom-instagram-"+l;return new Promise((r,g)=>{let m=window.localStorage.getItem(u);if(m){let h=JSON.parse(m);if(h.exp>=new Date().getTime()&&h.data.length>=t)return r(h.data.slice(0,t)),!1;window.localStorage.removeItem(u),s(l).then(_=>r(_))}else window.fetch("https://graph.instagram.com/me/media?"+new URLSearchParams({fields:"id,caption,media_url,thumbnail_url,media_type,permalink,username",access_token:l,limit:t}).toString()).then(h=>h.json()).then(h=>{if(h&&h.data){const _=(f,v)=>{var C;let x={image:{thumb:"media_url",media:"media_url",url:"permalink"},video:{thumb:"thumbnail_url",media:"media_url",url:"permalink"},carousel_album:{thumb:"media_url",media:"media_url",url:"permalink"}};return(C=x==null?void 0:x[f])==null?void 0:C[v]};let b=h.data.map(f=>{let v=f.media_type.toLowerCase();return{type:v,thumb:f[_(v,"thumb")],media:f[_(v,"media")],url:f[_(v,"url")],username:f.username,caption:f.caption}});window.localStorage.setItem(u,JSON.stringify({exp:new Date().setDate(new Date().getDate()+7),data:b})),r(b)}}).catch(h=>{g(h)})})},i=()=>{if(!e)return;let l=e.querySelector(".ecom-swiper-container"),u=JSON.parse(l.dataset.optionSwiper);u.pagination.el=e.querySelector(".ecom-swiper-pagination"),u.navigation.nextEl=e.querySelector(".ecom-swiper-button-next"),u.navigation.prevEl=e.querySelector(".ecom-swiper-button-prev"),window.EComSwiper&&new window.EComSwiper(l,Object.assign(u,{allowTouchMove:this.isLive}))};let a=o();if(!a)return!1;s(a).then(l=>{n(l),this.settings.layout==="slider"&&i();let u=e.querySelectorAll("[ecom-modal]");u.length&&new window.EComModal(u,{gallery:!0,cssClass:["ecom-container-lightbox-"+this.id]})}).catch(l=>{console.info(l.message)})}},default(){return{settings:{overlay_use:!0,slider_spacing:"30",itemsCount:8,layout:"slider",slider_items:4,slider_items__tablet:3,slider_items__mobile:2,slider_loop:!0,slider_autoplay:!0,slider_autoplay_speed:2e3,slider_pause:!0,slider_navigation_layout:"classic_full",slider_prev_icon:'<svg xmlns="http: //www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>',slider_next_icon:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>',slider_pagination_position:"static",slider_effect:"slide",slider_speed:200,overlay_title:"username",slider_group:1,slider_spacing_row:10,slider_navigation_position:"bottom_center"},style:{instagramImage:{imageOpacitynormalmode:1,imageOpacityhovermode:1,tab:"normal"},swiper_nav:{navigatorFontSize:"36px",navigatorPrimaryColornormalmode:"rgba(59, 50, 50, 0.98)",navigatorPrimaryColorhovermode:"#000000",navtab:"normal",tab:"normal"},instagramOverlay:{opacity:.28,opacityHover:1,backgroundhovermode:{classic:{"background-color":"rgba(17, 24, 39, 0.3)"}},tab:"hover"}}}}},watch:{optionSwiper:{deep:!0,handler:function(){this.instagram.refresh=this.$helpers.randid()}},isCombined:function(){this.instagram.refresh=this.$helpers.randid()}},methods:{isCombined(){var t,o;return((o=(t=this.data)==null?void 0:t.settings)==null?void 0:o.slider_navigation_layout)==="neo_full"?"combine":"classic"},refresh(){this.instagram.refresh=this.$helpers.randid()},isArrow(){var e,t,o,n;return((e=this.data.settings)==null?void 0:e.slider_navigation_layout)==="neo_full"||((t=this.data.settings)==null?void 0:t.slider_navigation_layout)==="neo_navigator"||((o=this.data.settings)==null?void 0:o.slider_navigation_layout)==="classic_full"||((n=this.data.settings)==null?void 0:n.slider_navigation_layout)==="navigation"},isPagination(){var e,t,o;return((e=this.data.settings)==null?void 0:e.slider_navigation_layout)==="neo_full"||((t=this.data.settings)==null?void 0:t.slider_navigation_layout)==="classic_full"||((o=this.data.settings)==null?void 0:o.slider_navigation_layout)==="pagination"},style(){let e=[];this.isArrow()&&e.push({title:"Navigator",type:"swiper:nav"}),this.isPagination()&&e.push({title:"Pagination",type:"swiper:pagination"});let t={};this.isCombined==="combine"&&(t={params:[{alias:"spacing",options:{name:"spacingNavigation",css:{selector:" .ecom-swiper-navigation"}}},{type:"line"}],remove:{name:"justify-content"}});let o=[{group_alias:"image",options:{group_name:"instagramImage",group_title:"Image",selector:" .ecom-instagram .ecom-instagram--item figure,.ecom-instagram .ecom-instagram--item a"}}];return this.instagram.settings.layout=="grid"&&o.push({group_name:"instagramGridStyle",group_title:"Grid",selector:" .ecom-instagram--container.ecom-base-instagram-grid",params:[{type:"number",name:"slider_spacing",label:"Spacing",options:{responsive:!0,units:{px:{min:0,max:100}}},css:{properties:{gap:"%value%"}}}]}),this.instagram.settings.overlay_use&&o.push({group_alias:"background:overlaytext",options:{group_name:"instagramOverlay",group_title:"Overlay",selector:" .ecom-instagram .ecom-image-default"}}),e.length&&o.push({group_alias:e,options:{group_title:"Navigation",selector:" .ecom-instagram--container"},modify:t}),o}}},Ur={class:"ecom-element ecom-instagram"},Rr={key:0,class:"ecom-instagram--container ecom-instagram-wrapper ecom-base-instagram-grid"},Yr={key:1,class:"ecom-instagram--container"},Gr=["data-option-swiper"],Jr=p("div",{class:"ecom-instagram-wrapper ecom-swiper-wrapper"},null,-1),Zr=[Jr],Kr=["data-navigator-type"],Xr={class:"ecom-flex-center"},Qr=["innerHTML"],el={class:"ecom-swiper-pagination"},tl=["innerHTML"],ol={key:1,class:"ecom-swiper-navigation-position"},il=["innerHTML"],nl=["innerHTML"],sl={key:2,class:"ecom-swiper-pagination-position ecom-swiper-pagination"};function al(e,t,o,n,s,i){var a,l;return c(),d("div",Ur,[i.instagram.settings.layout!=="slider"?(c(),d("div",Rr)):(c(),d("div",Yr,[p("div",{class:"ecom-instagram--slider ecom-swiper-container","data-option-swiper":i.optionSwiper},Zr,8,Gr),i.isNavigation&&i.isCombined()=="combine"?(c(),d("div",{key:0,class:"ecom-swiper-navigation","data-navigator-type":i.isCombined()=="combine"},[p("div",Xr,[Z(p("button",{type:"button",class:"ecom-swiper-button ecom-swiper-button-prev",innerHTML:i.instagram.settings.slider_prev_icon},null,8,Qr),[[K,i.isArrow()]]),Z(p("div",el,null,512),[[K,i.isPagination()]]),Z(p("button",{type:"button",class:"ecom-swiper-button ecom-swiper-button-next",innerHTML:i.instagram.settings.slider_next_icon},null,8,tl),[[K,i.isArrow()]])])],8,Kr)):y("",!0),i.isNavigation&&i.isCombined()!="combine"?Z((c(),d("div",ol,[p("button",{style:E(i.sliderNav),class:"ecom-swiper-button ecom-swiper-button-prev",innerHTML:(a=i.instagram.settings)==null?void 0:a.slider_prev_icon},null,12,il),p("button",{style:E(i.sliderNav),class:"ecom-swiper-button ecom-swiper-button-next",innerHTML:(l=i.instagram.settings)==null?void 0:l.slider_next_icon},null,12,nl)],512)),[[K,i.isArrow()]]):y("",!0),i.isNavigation&&i.isCombined()!="combine"?Z((c(),d("div",sl,null,512)),[[K,i.isPagination()]]):y("",!0)]))])}const rl=k(Qe,[["render",al]]);Qe.__docgenInfo={exportName:"default",displayName:"Instagram",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"index",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"deep",type:{name:"number"},defaultValue:{func:!1,value:"0"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Instagram.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const et={name:"Spacer",docs:"https://help.ecomposer.io/docs/elements/basic-elements/spacer/",presets:!1,mixins:[T,H,M],props:{data:{type:Object,default(){return{}}}},data(){return{}},computed:{settings(){return[{params:[{type:"number",label:"Spacer",name:"height",options:{units:{px:{min:10,max:600,step:1},vh:{min:0,max:100,step:1},em:{min:.1,max:20,step:.1}},responsive:!0},css:{selector:" .ecom__element-spacing"}}]}]},css(){return`
                .ecom__element-spacer{
                    display:flex;
                }
                .ecom__element-spacer div{
                    display: block; /* dont delete me */
                    width:100%;
                }
                `},default(){return{settings:{height:"50px"}}}}},ll={ref:"wrapper",class:"ecom__element element__spacer ecom-element"},cl=p("div",{class:"ecom__element-spacer"},[p("div",{class:"ecom__element-spacing"})],-1),pl=[cl];function ml(e,t,o,n,s,i){return c(),d("div",ll,pl,512)}const dl=k(et,[["render",ml]]);et.__docgenInfo={exportName:"default",displayName:"Spacer",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Spacer.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const tt={name:"Divider",docs:"https://help.ecomposer.io/docs/elements/basic-elements/divider/",mixins:[T],props:{data:{type:Object,default(){return{}}}},computed:{settings(){return[{group_title:"Divider",params:[{type:"popup",label:"Style",name:"borderStyle",options:{type:"dropdown",default:!1,values:{solid:"Solid",dotted:"Dotted",dashed:"Dashed",double:"Double"}},css:{selector:" div.divi-style",properties:{"border-style":""}}},{type:"popup",label:"Select type",name:"type",options:{type:"dropdown",default:!1,values:{none:"None",text:"Text",icon:"Icon"}},css:{isCss:!1}},{type:"picker",label:"Icon",name:"icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,visible:{keep_data:!0,condition:e=>e.type=="icon"}}},{name:"position",label:"Icon position",type:"choose",options:{type:"vertical-align",values:["left","center","right"],oneline:!0,visible:{keep_data:!0,condition:e=>e.type&&e.type!=="none"}}},{alias:"justify-content",options:{name:"justifyContent",label:"Alignment",css:{selector:" .ecom__element-divi, .divi-cont"}}},{type:"text",label:"Text",name:"text",options:{visible:{keep_data:!0,condition:e=>e.type=="text"}}},{name:"gridColumnGap",label:"Spacing",type:"number",options:{units:{px:{min:0,max:50,step:1}},visible:{keep_data:!0,condition:e=>e.type&&e.type!=="none"}},css:{selector:" .divi-cont",properties:{"grid-column-gap":""}}},{type:"number",label:"Width",name:"width",options:{responsive:!0,units:{"%":{min:0,max:100,step:1},px:{min:0,max:1e3,step:1}}},css:{selector:" .divi-line.divi-style",properties:{width:""}}}]}]},divi(){return this.data.settings},unit(){return this.divi.width?this.divi.width.replace(/[0-9]/g,""):"px"},styleDivider(){return{display:this.divi.icon&&this.divi.type=="icon"||this.divi.text&&this.divi.type=="text"?"none":"block"}},styleDivider2(){var e,t,o,n,s;return{"--divider-width":this.divi.width,"--divider-width-tablet":(t=(e=this.divi)==null?void 0:e.width__tablet)!=null?t:this.divi.width,"--divider-width-mobile":(s=(n=(o=this.divi)==null?void 0:o.width__mobile)!=null?n:this.divi.width__tablet)!=null?s:this.divi.width__mobile,display:this.divi.icon&&this.divi.type=="icon"||this.divi.text&&this.divi.type=="text"?"flex":"none"}},diviLeft(){return{display:this.divi.position=="left"?"none":"block"}},diviRight(){return{display:this.divi.position=="right"?"none":"block"}},css(){return`
                .element__divi{
                    padding:10px 0;
                    overflow:hidden;
                }
                .ecom__element-divi{
                    display:flex;
                }
                .divi-line{
                    margin:10px 0;
                    border:0;
                    border-bottom: 1px solid #D1D5DB;
                }
                .divi-cont{
                    position:relative;
                    z-index:1;
                    display:flex;
                    align-items:center;
                    transition: all .3s;
                    color: #818a91;
                    width:100%;
                }
                .divi-cont span{
                    display:flex;
                    white-space:nowrap;
                }
                .divi-cont-before{
                    display:block;
                    border:0;
                }
                .divi-cont-after{
                    display:block;
                    border:0;
                }
                .divi-style{
                    padding:0 !important;
                    border-bottom: 2px solid #D1D5DB;
                }
                .divi-cont>*{
                    margin:0;
                }
                .divi-cont svg{
                    width:36px;
                    height:auto;
                }
                .divi-cont-before.divi-style, .divi-cont-after.divi-style {
                    width: calc(var(--divider-width) / 2);
                }
                @media(max-width: 1024px) {
                    .divi-cont-before.divi-style, .divi-cont-after.divi-style {
                        width: calc(var(--divider-width-tablet) / 2);
                    }
                }
                @media(max-width: 767px) {
                    .divi-cont-before.divi-style, .divi-cont-after.divi-style {
                        width: calc(var(--divider-width-mobile) / 2);
                    }
                }
            `},default(){return{settings:{add_element:"text",gridColumnGap:"7px",width:"100%",text:"+",tag:"h2",position:"center",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor"><!-- Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M248 167.5l64.9 98.8H183.1l64.9-98.8zM496 256c0 136.9-111.1 248-248 248S0 392.9 0 256 111.1 8 248 8s248 111.1 248 248zm-99.8 82.7L248 115.5 99.8 338.7h30.4l33.6-51.7h168.6l33.6 51.7h30.2z"></path></svg>',justifyContent:"center"},style:{divider:{borderBottomWidth:"1px"}}}}},methods:{style(){let e=[{group_name:"divider",group_title:"Divider",selector:" .ecom__element-divi .divi-style",params:[{name:"borderColor",label:"Color",type:"color",options:{global:{type:"colors"},oneline:!0},css:{properties:{"border-color":""}}},{name:"borderBottomWidth",label:"Size",type:"number",options:{units:{px:{min:0,max:100,step:.1}}},css:{properties:{"border-bottom-width":""}}}]},{group_name:"dividerGap",group_title:"Gap",selector:" .ecom__element-divi",params:[{name:"dividerPadding",type:"dimension",label:"Gap",options:{simple:!0,responsive:!0,units:"default"},css:{properties:{padding:""}}}]}];return this.divi.icon&&this.divi.type=="icon"&&e.unshift({group_name:"divider_icon",group_title:"Icon",selector:" .ecom__element-divi .divi-cont svg",params:[{type:"number",label:"Size",name:"dividerIconWidth",options:{units:{px:{min:6,max:300}}},css:{properties:{width:""}}},{name:"dividerIconFill",label:"Color",type:"color",options:{global:{type:"colors"},oneline:!0},css:{properties:{color:""}}},{name:"dividerIconTransform",label:"Rotate",type:"number",options:{min:0,max:360,step:1},css:{properties:{transform:"rotate(%value%deg)"}}}]}),this.divi.text&&this.divi.type=="text"&&e.unshift({group_name:"divider_text",group_title:"Text",selector:" .ecom__element-divi .divi-cont .divi-text",params:[{type:"color",label:"Color",name:"color",options:{global:{type:"colors"},oneline:!0},css:{properties:{color:""}}},{name:"dividerTypography",label:"Typography",type:"popup",options:{oneline:!0,global:{type:"typography"},type:"typography"},css:{properties:{typography:""}}}]}),e}}},ul={class:"ecom__element-divi"},gl=["innerHTML"],_l={key:2,class:"divi-text"};function hl(e,t,o,n,s,i){return c(),d("div",{class:"ecom__element ecom-element element__divi",onClick:t[0]||(t[0]=(...a)=>e.test&&e.test(...a))},[p("div",ul,[p("div",{class:"divi-line divi-style",style:E(i.styleDivider)},null,4),p("div",{class:"divi-cont",style:E(i.styleDivider2)},[i.divi.icon||i.divi.text?(c(),d("div",{key:0,class:"divi-cont-before divi-style",style:E(i.diviLeft)},null,4)):y("",!0),i.divi.icon&&i.divi.type=="icon"?(c(),d("span",{key:1,innerHTML:i.divi.icon},null,8,gl)):y("",!0),i.divi.text&&i.divi.type=="text"?(c(),d("span",_l,I(e.lang(i.divi.text)),1)):y("",!0),i.divi.icon||i.divi.text?(c(),d("div",{key:3,class:"divi-cont-after divi-style",style:E(i.diviRight)},null,4)):y("",!0)],4)])])}const fl=k(tt,[["render",hl]]);tt.__docgenInfo={exportName:"default",displayName:"Divider",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Divider.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts"]};const ot={name:"Code",docs:"https://help.ecomposer.io/docs/elements/shopify-elements/code/",mixins:[T,M],props:{data:{type:Object,default(){return{}}}},computed:{settings(){return[{params:[{label:"Custom code",type:"textarea",description:"Add app snippets or other Liquid code to create advanced customizations. Javascript code only run when publish to your site",name:"code",options:{update:"onchange",height:350}}]}]},code(){return this.data},codevalue(){return this.data.settings.code},codePreiew(){return this.codevalue.match(/{{[\s\S]*|{%[\s\S]*/g)?`
                    <div class="ecom-skeleton-item">
                        <div class="ecom-skeleton-col-12">
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-9 ecom-skeleton-big"></div>
                            </div>
                        </div>
                    </div>
                `:this.codevalue},codeliquid(){var e;return((e=this.codevalue)==null?void 0:e.match(/{{[\s\S]*|{%[\s\S]*/g))===null?"":this.codevalue},liquids(){return{code:{code:this.codeliquid,preview:this.codePreiew}}},style(){return[{group_alias:"text"}]},...Ce("builder",["getLiquids"]),default(){return{settings:{code:"<div>Your custom code is here (HTML, JavaScript, CSS, Shopify Liquid)</div>"},style:{text:{textTextAlign:"left"}}}}},watch:{codevalue(e){var o,n,s;if(this.exporting)return!1;let t=(s=(n=this.getLiquids)==null?void 0:n[(o=this.data)==null?void 0:o.id])!=null?s:{};this.data.id&&(t===void 0||t.content===void 0)&&(this.getLiquids[this.data.id]={content:{}}),this.getLiquids[this.data.id].content.code=e}}},bl={key:0,class:"ecom__element ecom-element element__code exporting"},yl=["innerHTML"];function vl(e,t,o,n,s,i){const a=N("Liquid");return e.exporting?(c(),d("div",bl,[R(a,{data:o.data.settings.code},null,8,["data"])])):(c(),d("div",{key:1,class:"ecom__element ecom-element element__code no-exporting",innerHTML:e.liquid("code")},null,8,yl))}const xl=k(ot,[["render",vl]]);ot.__docgenInfo={exportName:"default",displayName:"Code",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Code.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const it={name:"Countdown",presets:!0,docs:"https://help.ecomposer.io/docs/elements/basic-elements/countdown/",mixins:[T,H],vendors:["countdown_js"],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["week","day","hour","minute","second"].map(e=>"show_"+e).concat(["week","day","hour","minute","second"].map(e=>"text_"+e)).concat(["countdown","countdown_from","typeCountdown","countdown_restart"])}},computed:{css(){return`
                .ecom-element__countdown--time{
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:inherit;
                }
                [class*="ecom-element__countdown-item--"]{
                    display:flex;
                }
                .ecom-element__countdown-container{
                    display:inline-flex;
                    justify-content:inherit;
                    flex-direction: column;
                    align-items:inherit
                }
                .ecom-countdown-progress-bar{
                    display:block;
                    width:100%;
                    background:green;
                    border-radius:5px;
                    overflow:hidden;
                }
                .ecom-countdown-progress-bar .ecom-countdown-progress-bar--timer{
                    width:100%;
                    height:8px;
                    background-color:red;
                    display:block;
                    border-radius:5px;
                }

                .ecom-countdown-progress-bar--timer {
                        background-image: -webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
                        background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,rgba(0,0,0,0) 25%,rgba(0,0,0,0) 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,rgba(0,0,0,0) 75%,rgba(0,0,0,0));
                        -webkit-animation: 2s linear infinite ecom_progress_bar;
                        animation: 2s linear infinite ecom_progress_bar;
                        background-size: 60px 60px;
                        transition: width 1s;
                        -webkit-transition: width 1s;
                }

                @-webkit-keyframes ecom_progress_bar {
                    from {
                        background-position: 0 0
                    }

                    to {
                        background-position: 40px 0
                    }
                }

                @keyframes ecom_progress_bar {
                    from {
                        background-position: 0 0
                    }

                    to {
                        background-position: 40px 0
                    }
                }
            `},javascript(){return function(){const e=this.$el;if(window.EComCountdown){const o=e.querySelector(".ecom-element__countdown--time");let n=e.querySelector(".ecom-countdown-progress-bar"),s=e.querySelector(".ecom-countdown-progress-bar--timer"),i=o?o.dataset.countdownFrom:0,a=o&&o.dataset.countdownType?o.dataset.countdownType:"visit",l=o&&o.dataset.countdownRestart?o.dataset.countdownRestart:!1;if(o&&o.dataset.countdownTo){let m=function(h){if(this.innerHTML=h.strftime(t),n&&i){let _=new Date().getTime(),b=new Date(i),f=b.getTime(),v=h.finalDate.getTime();if(f<_&&v>f){n.style.display="inherit";let x=v-f,C=v-_,L=Math.round(C*100/x);s.style.width=L+"%"}else n.style.display="none"}};const u=o.dataset.showFields?o.dataset.showFields:"",r=o.dataset;var t="";const g=/\[([^\]]+)\]/gm;if(u.includes("week")&&r.transWeek.length>0){let h="",_=r.transWeek.replace(g,(...b)=>(h=b[1],""));t+=`
                                        <div class="ecom-element__countdown-item--weeks">
                                            <span class="ecom-element__countdown-number">${h}</span>
                                            <span class="ecom-element__countdown-text">
                                                 ${_}
                                            </span>
                                        </div>`}if(u.includes("day")&&r.transDay.length>0){let h="",_=r.transDay.replace(g,(...b)=>(h=b[1],""));t+=`
                                        <div class="ecom-element__countdown-item--days">
                                            <span class="ecom-element__countdown-number">
                                                ${h}
                                            </span>
                                            <span class="ecom-element__countdown-text">
                                                ${_}
                                            </span>
                                        </div>`}if(u.includes("hour")&&r.transHour.length>0){let h="",_=r.transHour.replace(g,(...b)=>(h=b[1],""));t+=`
                                        <div class="ecom-element__countdown-item--hours">
                                            <span class="ecom-element__countdown-number">
                                                 ${h}
                                            </span>
                                            <span class="ecom-element__countdown-text">
                                                ${_}
                                            </span>
                                        </div>`}if(u.includes("minute")&&r.transMinute.length>0){let h="",_=r.transMinute.replace(g,(...b)=>(h=b[1],""));t+=`
                                        <div class="ecom-element__countdown-item--minutes">
                                            <span class="ecom-element__countdown-number">
                                                ${h}
                                            </span>
                                            <span class="ecom-element__countdown-text">
                                                ${_}
                                            </span>
                                        </div>`}if(u.includes("second")&&r.transSecond.length>0){let h="",_=r.transSecond.replace(g,(...b)=>(h=b[1],""));t+=`
                                        <div class="ecom-element__countdown-item--seconds">
                                            <span class="ecom-element__countdown-number">
                                                ${h}
                                            </span>
                                            <span class="ecom-element__countdown-text">
                                                ${_}
                                            </span>
                                    </div>`}if(!(i&&new Date().getTime()<new Date(i).getTime()&&a=="time")){let h=new Date(o.dataset.countdownTo);if(window.EComCountdown){let _=new Date(o.dataset.countdownTo).getTime()-new Date(o.dataset.countdownFrom).getTime(),b=new Date(o.dataset.countdownTo).getTime()+_;if(_==0)return;for(;b<new Date().getTime();)b+=_;window.EComCountdown(o,h,{}),o.addEventListener("update.ecom.countdown",m),o.addEventListener("finish.ecom.countdown",function(f){l=="true"&&a=="time"&&window.EComCountdown(o,new Date(b),m)})}}}}}},countdown_to(){return this.data&&this.data.settings&&"countdown"in this.data.settings?this.data.settings.countdown:""},countdown_from(){return this.data&&this.data.settings&&"countdown_from"in this.data.settings?this.data.settings.countdown_from:""},shows(){return["week","day","hour","minute","second"].filter(t=>this.data.settings["show_"+t])},default(){let e=new Date,t=e.getMonth()+1,o=e.getFullYear();return{settings:{title:"Hurry up! The sale will end on",countdown_from:`${o}/${t-1}/29 12:30 GMT+0700`,countdown:`${o}/${t}/20 12:30 GMT+0700`,show_week:!0,show_day:!0,show_hour:!0,show_minute:!0,show_second:!0,text_week:"[%-w] week%!w",text_day:"[%-d] day%!D",text_hour:"[%-H] hour%!H",text_minute:"[%-M] minute%!M",text_second:"[%-S] second%!S",styleCountdown:"column",typeCountdown:"time"},style:{progess_bar:{tab:"normal",maxWidth:"96%",background:{classic:{"background-color":"#deb4b4"}},height:"14px",borderRadius:{top:"8px",left:"8px",bottom:"8px",right:"8px"}},general:{"justify-content":"center"},items:{spacing:{padding:{left:"10px",top:"5px",bottom:"5px",right:"10px"},margin:{top:"5px",left:"10px",bottom:"5px",right:"10px"}},boxBackground:"rgba(255, 255, 255, 0.05)",spacing__mobile:{padding:{left:"10px",top:"10px",bottom:"10px",right:"10px"},margin:{}},boxBorder:{"border-style":"solid","border-color":"#f0f0f0","border-width":{bottom:"1px",top:"1px",left:"1px",right:"1px"}},boxBorderRadius:{top:"3px",left:"3px",bottom:"3px",right:"3px"},boxShadow:{"box-shadow":{color:"rgba(0, 0, 0, 0.06)",horizontal:"1px",vertical:"1px",blur:"5px",spread:"1px"}}},countdown_number:{buttonColor:"#333",spacing:{margin:{right:"8px"}},spacing__mobile:{margin:{bottom:"0px",top:"0px",left:"0px",right:"0px"},padding:{bottom:"0px",top:"0px",left:"0px",right:"0px"}},buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"26px","font-weight":"700","line-height":"42px"},"text-align":"center",buttonWidth:"52px"},countdown_label:{spacing__mobile:{margin:{bottom:"0px",top:"0px",left:"0px",right:"0px"},padding:{bottom:"0px",top:"0px",left:"0px",right:"0px"}},buttonTypography:{"global-typography":"m5lJMKLv"},"text-align":"center"}}}}},methods:{settings(){var e,t,o,n;return[{group_title:"General",params:[{name:"styleCountdown",label:"Layout",type:"popup",options:{type:"dropdown",default:!1,preview:"title",values:{column:"Vertical",row:"Horizontal"}},css:{selector:" .ecom-element__countdown--time > div",properties:{"flex-direction":""}}},{name:"typeCountdown",label:"Countdown Start",type:"popup",options:{type:"dropdown",default:!1,preview:"title",values:{visit:"On the visit page",time:"At specific time"}},css:{isCss:!1}},{name:"countdown_from",type:"datetime",placeholder:"YYYY/MM/DD hh:mm",label:"Countdown start from",options:{type:"datetime",max:((t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.countdown)||"",format:"YYYY/MM/DD hh:mmZ",visible:s=>s.typeCountdown=="time"}},{name:"countdown",type:"datetime",placeholder:"YYYY/MM/DD hh:mmZ",label:"Countdown end at",options:{toolbar:!1,type:"datetime",min:((n=(o=this.data)==null?void 0:o.settings)==null?void 0:n.countdown_from)||"",format:"YYYY/MM/DD hh:mmZ"}},{name:"countdown_restart",label:"Restart on finish",type:"toggle",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:s=>s.typeCountdown=="time"}},{name:"enable_progress_bar",label:"Show progress bar",value:!0,type:"toggle",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},...["week","day","hour","minute","second"].map(s=>({name:"show_"+s,label:"Show "+s,value:!0,type:"toggle",options:{values:{on:{value:!0},off:{value:!1}}}}))]},{group_title:"Change text",options:{visible:s=>s.show_week||s.show_day||s.show_hour||s.show_minute||s.show_second},params:[{type:"text",name:"text_week",value:"[%-w] week%!w",description:"Example: [%-w] week%!w",label:"Week",options:{visible:s=>s.show_week}},{type:"text",name:"text_day",value:"[%-d] day%!D",description:"Example: [%-d] day%!d",label:"Days",options:{visible:s=>s.show_day}},{type:"text",name:"text_hour",value:"[%-H] hour%!H",description:"Example: [%-H] hour%!H",label:"Hours",options:{visible:s=>s.show_hour}},{type:"text",name:"text_minute",value:"[%-M] minute%!M",description:"Example: [%-M] minute%!M",label:"Minutes",options:{visible:s=>s.show_minute}},{type:"text",name:"text_second",value:"[%-S] second%!S",description:"Example: [%-S] second%!S",label:"Seconds",options:{visible:s=>s.show_second}}]}]},style(){let e={};this.data.settings.styleCountdown=="column"&&(e={params:{alias:"text-align",options:{label:"Alignment"}}});let t=[{group_alias:"box",options:{group_title:"General",group_name:"general",selector:" .ecom-element__countdown-container"},modify:{params:[{position:0,fields:{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-element__countdown-wrapper",properties:{"justify-content":"","align-items":""}}}}},{position:10,fields:{alias:"spacing"}}]}},{group_alias:"box",options:{group_title:"Items",group_name:"items",selector:" .ecom-element__countdown--time > div"},modify:{params:[{position:0,fields:[{type:"number",label:"Width",name:"width",options:{units:{px:{min:20,max:200}},reset:!1,responsive:!0},css:{properties:{width:""}}},{type:"number",label:"Height",name:"height",options:{units:{px:{min:20,max:200}},reset:!1,responsive:!0},css:{properties:{height:""}}}]},{position:10,fields:{alias:"spacing"}}]}},{group_alias:"button:label",options:{group_name:"countdown_number",group_title:"Number",selector:" .ecom-element__countdown-number"},modify:e},{group_alias:"button:label",options:{group_name:"countdown_label",group_title:"Label",selector:" .ecom-element__countdown-text"},modify:e}];return this.data.settings.enable_progress_bar&&t.push({group_name:"progess_bar",group_title:"Progress bar",selector:" .ecom-countdown-progress-bar",params:[{type:"number",name:"maxWidth",label:"Width",options:{responsive:!0,reset:!0,units:{"%":{min:0,max:100},px:{min:0,max:1e3},vw:{min:0,max:100}}},css:{properties:{"max-width":""}}},{type:"number",name:"height",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3},vh:{min:0,max:100}}},css:{selector:" .ecom-countdown-progress-bar--timer",properties:{height:"","--ecom-countdown-max-height":""}}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"active",title:"Active"}]},css:{isCss:!1}},{type:"background",label:"Background",name:"background",options:{oneline:!0,visible:{keep_data:!0,condition:o=>o.tab==="normal"}},css:{properties:{background:""}}},{type:"dimension",name:"borderRadius",label:"Border radius",options:{type:"radius",units:"default",visible:{keep_data:!0,condition:o=>o.tab==="normal"}},css:{properties:{"border-radius":""}}},{type:"background",label:"Background",name:"backgroundActive",options:{oneline:!0,visible:{keep_data:!0,condition:o=>o.tab==="active"}},css:{selector:" .ecom-countdown-progress-bar--timer",properties:{background:""}}},{type:"dimension",name:"borderRadiusActive",label:"Border radius",options:{type:"radius",units:"default",visible:{keep_data:!0,condition:o=>o.tab==="active"}},css:{selector:" .ecom-countdown-progress-bar--timer",properties:{"border-radius":""}}},{alias:"spacing"}]}),t}}},wl={class:"ecom-element ecom-base-elements ecom-element__countdown"},kl={class:"ecom-element__countdown-wrapper ecom-flex"},Cl={class:"ecom-element__countdown-container"},Tl=["data-countdown-to","data-countdown-from","data-countdown-restart","data-countdown-type","data-trans-week","data-trans-day","data-trans-hour","data-trans-minute","data-trans-second","data-show-fields"],Ll={key:0,class:"ecom-countdown-progress-bar"},$l=p("div",{class:"ecom-countdown-progress-bar--timer"},null,-1),Sl=[$l];function Ml(e,t,o,n,s,i){var a,l,u,r,g,m,h;return c(),d("div",wl,[p("div",kl,[p("div",Cl,[p("div",{class:"ecom-element__countdown--time","data-countdown-to":i.countdown_to,"data-countdown-from":i.countdown_from,"data-countdown-restart":(a=o.data.settings)==null?void 0:a.countdown_restart,"data-countdown-type":(l=o.data.settings)==null?void 0:l.typeCountdown,"data-trans-week":e.lang((u=o.data.settings)==null?void 0:u.text_week,"text_week"),"data-trans-day":e.lang((r=o.data.settings)==null?void 0:r.text_day,"text_day"),"data-trans-hour":e.lang((g=o.data.settings)==null?void 0:g.text_hour,"text_hour"),"data-trans-minute":e.lang((m=o.data.settings)==null?void 0:m.text_minute,"text_minute"),"data-trans-second":e.lang((h=o.data.settings)==null?void 0:h.text_second,"text_second"),"data-show-fields":i.shows},null,8,Tl),o.data.settings.enable_progress_bar?(c(),d("div",Ll,Sl)):y("",!0)])])])}const Hl=k(it,[["render",Ml]]);it.__docgenInfo={exportName:"default",displayName:"Countdown",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Countdown.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const nt={name:"lightbox",docs:"https://help.ecomposer.io/docs/elements/basic-elements/light-box/",vendors:["modal_js","modal_css"],mixins:[M,T,H],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["source_type","general"]}},computed:{screens(){return this.$store.getters["builder/screens"]},imageHandled(){var t;if(!((t=this.data)!=null&&t.settings))return;let e={...this.data.settings.image_popup};return{alt:e.name,...e}},linkSelfHosted(){var e;if((e=this.data.settings)!=null&&e.link)if(this.data.settings.link.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&=]*)/)[0]=="https://drive.google.com"){const o=/\/file\/d\/(.+)\/(.+)/;let n=this.video.link.match(o),s=n?n[1]:null;return`${location.protocol}//drive.google.com/uc?export=download&id=${s}`}else return this.data.settings.link;else return},linkYoutube(){var e;if((e=this.data.settings)!=null&&e.srcYoutube){const t=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let o=this.data.settings.srcYoutube.match(t),n=o&&o[2].length===11?o[2]:null;return`${location.protocol}//www.youtube.com/embed/${n}?version=3&autoplay=1&mute=1`}else return""},linkVimeo(){var e;if((e=this.data.settings)!=null&&e.srcVimeo){const t=/(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/;let o=this.data.settings.srcVimeo.match(t),n=o?o[1]:null;return`${location.protocol}//player.vimeo.com/video/${n}?rel=0?version=3&autoplay=1&mute=1`}else return""},element_id(){return this.data.id},popupSrc(){return"#ecom-elements__lightbox-content-"+this.element_id},liquids(){var e,t,o,n,s;return this.data.template!=="product"?{content:{code:`
                            ${this.data.settings&&this.data.settings.source_type==="page"?`
                                <div class="ecom-html ecom-elements__lightbox-content" id="ecom-elements__lightbox-content-${this.element_id}" style="display:none">
                                    <div>
                                        {%- capture page_handle -%}${this.data.settings.page?this.data.settings.page.value:""}{%- endcapture-%}
                                        {% assign p = pages[page_handle] %}
                                        {% if p %}{{p.content}}{% endif %}
                                    </div>
                                </div>

                            `:""}
                        `,preview:""}}:{product:{code:`
                            {%- capture show_when -%}${this.data.settings.show_when}{%- endcapture -%}
                            {%- capture value -%}${this.data.settings.value}{%- endcapture -%}
                            {%- assign check = false -%}
                            {%- case show_when-%}
                                {%- when 'all' -%}
                                    {% assign check = true %}
                                {%- when 'option'- %}
                                    {% if value and  product.options contains value %}
                                        {% assign check = true %}
                                    {% endif %}
                                {%- when 'tag'-%}
                                    {%- if value and  product.tags contains value -%}
                                        {% assign check = true %}
                                    {%- endif  -%}
                                {% when 'type' %}
                                    {%- if value and  product.type contains value -%}
                                        {% assign check = true %}
                                    {%- endif  -%}
                                {% when 'vendor' %}
                                    {%- if value and  product.vendor contains value -%}
                                        {% assign check = true %}
                                    {%- endif  -%}
                            {%- endcase -%}
                            {%- if check -%}
                                {%- capture type -%}${this.data.settings.source_type}{%- endcapture -%}
                                    ${this.data.settings.general!=="image"?`
                                        <button ecom-modal="inline" class="ecom__element--button ecom-elements__lightbox-button ecom-flex ecom-fl_cener ecom-al_center" ecom-modal-source="#ecom-elements__lightbox-content-${this.element_id}">
                                            <span class="ecom-elements__lightbox-button-text" >
                                                ${this.lang(this.data.settings.button_title,"lightbox_button_title")}
                                            </span>
                                            <span class="ecom-button-icon ecom-elements__lightbox-button-icon">
                                                ${this.data.settings.icon?this.data.settings.icon:""}
                                            </span>
                                        </button>
                                        `:""}
                                    ${this.data.settings.general=="image"&&((e=this.imageHandled)==null?void 0:e.value)?`
                                            <button ecom-modal="inline"
                                                    class="ecom-elements__lightbox-button-image"
                                                    ecom-modal-source="#ecom-elements__lightbox-content-${this.element_id}"
                                            >
                                                <div class="ecom-image-default">
                                                    <picture class="ecom-lightbox-picture">
                                                        ${this.$helpers.renImageResponsive(this.imageHandled,this.screens)}
                                                    </picture>
                                                </div>
                                            </button>
                                        `:""}

                                    {%- if type != 'page' -%}
                                        <div style="display:none" >
                                            {%- if type == 'custom' -%}
                                                <div class="ecom-html" id="${"ecom-elements__lightbox-content-"+this.element_id}">
                                                    <div class="ecom-elements__lightbox-content-heading">${this.lang(this.data.settings.custom_heading_content)}</div>
                                                    <div class="ecom-elements__lightbox-content-body">${this.lang(this.data.settings.custom_content)}</div>
                                                </div>
                                            {%- elsif type == 'video' -%}

                                                <div id="${"ecom-elements__lightbox-content-"+this.element_id}" style="height:100%">
                                                    ${((t=this.data.settings)==null?void 0:t.source)=="self hosted"?`
                                                            <video
                                                                style="display: flex !important;width: 100%; height:100%;"
                                                                class="ecom_video"
                                                                controls
                                                            >
                                                                <source src="${this.linkSelfHosted}" />
                                                            </video>
                                                        `:`
                                                            <iframe
                                                                class="ecom_iframe"
                                                                frameborder="0"
                                                                allowfullscreen="1"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                style="border: 0; width: 100%; height:100%; display: flex !important"
                                                                src="${((o=this.data.settings)==null?void 0:o.source)=="vimeo"?this.linkVimeo:this.linkYoutube}"
                                                            >
                                                            </iframe>
                                                        `}


                                                </div>
                                            {%- else -%}
                                                <div id="${"ecom-elements__lightbox-content-"+this.element_id}" style="height:100%; width: 100%; display:flex;">
                                                    <img src="${(s=(n=this.data.settings)==null?void 0:n.image_source)==null?void 0:s.value}" alt="" style="object-fit: cover; width: 100%;">
                                                </div>
                                            {%- endif -%}
                                        </div>
                                    {%- else -%}
                                        <div class="ecom-elements__lightbox-content ecom-html" id="ecom-elements__lightbox-content-${this.element_id}" style="display:none">
                                            <div>
                                                {%- capture page_handle -%}
                                                    ${this.data.settings.page?this.data.settings.page.value:""}
                                                {%- endcapture-%}
                                                {% assign p = pages[page_handle] %}
                                                {% if p %}{{p.content}}{% endif %}
                                            </div>
                                        </div>
                                    {%- endif -%}
                            {%- endif -%}
                        `,preview:`
                            <div style="display: block;position: relative;width: 100%;">
                                <div class="ecom-skeleton-item">
                                    <div class="ecom-skeleton-col-12">
                                        <div class="ecom-skeleton-picture ecom-skeleton-big"></div>
                                        <div class="ecom-skeleton-row">
                                            <div class="ecom-skeleton-col-9 ecom-skeleton-big"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `}}},javascript(){return function(){let e=this.$el;var t=this.id;if(e&&window.EComModal){var o=e.querySelector("[ecom-modal]");new window.EComModal(o,{cssClass:["ecom-container-lightbox-"+this.id,"ecom-html","ecom-modal","ecommodal-slide"],onOpen:function(){const n=document.querySelectorAll(".ecom-container-lightbox-"+t);n.length&&n.forEach(function(s){const i=s.querySelector("video");i!=null&&i.play()})},onClose:function(){const n=document.querySelectorAll(".ecom-container-lightbox-"+t);n.length&&n.forEach(function(s){const i=s.querySelector("iframe");i!=null&&(i.src=i.src);const a=s.querySelector("video");a!=null&&a.pause()})}})}}},settings(){const e=[{params:[{type:"popup",label:"General",name:"general",options:{type:"dropdown",default:!1,values:{image:"Image",button:"Button"}}},{type:"picker",name:"image_popup",label:"Select image",options:{type:"image",responsive:!0,multiple:!1,visible:function(t){return t&&t.general==="image"}}},{type:"text",label:"Button label",name:"button_title",options:{visible:{keep_data:!0,condition:t=>t.general==="button"}}},{type:"picker",label:"Icon",name:"icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:{keep_data:!0,condition:t=>t.general==="button"}}},{type:"choose",label:"Icon position",name:"icon_position",options:{type:"align-x",values:[-1,1],visible:{keep_data:!1,condition:t=>t.icon&&t.general==="button"}},css:{selector:" .ecom-button-icon",properties:{order:""}}},{type:"number",label:"Icon spacing",name:"spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:t=>t.icon}},css:{selector:" .ecom__element--button",properties:{gap:""}}},{type:"popup",label:"Content source",name:"source_type",options:{type:"dropdown",default:!1,preview:"title",values:{page:"Page",video:"Video",image:"Image",custom:"Custom content"}}},{type:"picker",label:"Choose Image",name:"image_source",options:{responsive:!0,type:"image",editAlt:!1,visible:function(t){return t&&t.source_type==="image"}}},{type:"textarea",label:"Heading content",name:"custom_heading_content",options:{height:120,visible:function(t){return t&&t.source_type==="custom"}}},{type:"textarea",label:"Content",name:"custom_content",options:{toolbar:"full",height:250,visible:function(t){return t&&t.source_type==="custom"}}},{type:"picker",name:"page",label:"Select page",description:"This page content will appear.",options:{type:"page",layout:"list",multiple:!1,visible:function(t){return t&&t.source_type==="page"}}},{type:"popup",label:"Source",name:"source",options:{type:"dropdown",preview:"title",values:{youtube:"Youtube",vimeo:"Vimeo","self hosted":"External URL"},default:!1,visible:{keep_data:!0,condition:t=>t.source_type==="video"}},css:{isCss:!1}},{name:"link",label:"External URL",description:"Use link video share driver, .mp4, .oog,...",type:"text",options:{visible:{keep_data:!0,condition:t=>t.source==="self hosted"&&t.source_type==="video"}}},{name:"srcYoutube",label:"Youtube link",type:"text",options:{visible:{keep_data:!0,condition:t=>t.source==="youtube"&&t.source_type==="video"}}},{name:"srcVimeo",label:"Vimeo link",type:"text",options:{visible:{keep_data:!0,condition:t=>t.source==="vimeo"&&t.source_type==="video"}}},{type:"toggle",name:"custom_content_popup",label:"Custom content popup",options:{values:{on:{label:"YES",value:!0},off:{label:"NO",value:!1}}}},{type:"number",label:"Width",name:"width",placeholder:"300",options:{responsive:!0,units:{px:{min:100,max:1500}},visible:{keep_data:!1,condition:t=>t.custom_content_popup}},css:{selector:" .ecom-container-lightbox-"+this.data.id+" .ecom-modal-box__content",wrapper:"body"}},{type:"number",label:"Height",name:"height",placeholder:"300",options:{responsive:!0,units:{px:{min:100,max:1500}},visible:{keep_data:!1,condition:t=>t.custom_content_popup}},css:{selector:" .ecom-container-lightbox-"+this.data.id+" .ecom-modal-box__content",wrapper:"body"}}]}];return this.data.template==="product"&&e[0].params.splice(1,0,{type:"popup",label:"Show when match condition",name:"show_when",options:{default:!1,type:"dropdown",values:{all:"All product",tag:"Product tag contains",type:"Product type contains",vendor:"Product vendor contains",option:"Product option contains"}}},{type:"text",label:"Contains value",name:"value",placeholder:"Size",description:"Enter the product option name you want to have a size guide for",options:{visible:function(t){return t&&t.show_when&&t.show_when!=="all"}}}),e},css(){return`
                    .ecom-elements__lightbox-content {
                        background: #fff;
                        padding: 30px;
                        min-height: 100px;
                    }
                    body .ecom-modal-box .ecom-modal-box__content {
                        overflow-y: auto !important;
                    }
                    .ecom-element__lightbox-container > button {
                        cursor: pointer;
                    }
                    .ecom-modal--visible .ecom-elements__lightbox-content {
                        display: block !important;
                    }
                `},requestShopifyType(){return this.data.template==="product"?{shopify_type:"product"}:{}},default(){return{settings:{button_title:"Click here",type:"image",source_type:"custom",general:"button",custom_content:`<h2 style="margin: 0px 0px 10px; padding: 0px; font-weight: 400; font-family: DauphinPlain; font-size: 24px; line-height: 24px; color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);"><strong style="text-align: justify; font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"; font-size: 14px; margin: 0px; padding: 0px;">Lorem Ipsum</strong><span style="text-align: justify; font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"; font-size: 14px;">\xA0is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</span><br></h2>`,custom_content_popup:!0,width:"838px",height:"458px",link:"https://cdn.shopify.com/s/files/1/0629/4392/0358/files/flower.webm?v=1649754044",srcVimeo:"https://vimeo.com/582518956",source:"youtube",show_when:"all",custom_heading_content:"What is Lorem Ipsum?"},style:{box:{boxBackground:"#fcfcfc",spacing:{padding:{left:"13px",top:"13px",bottom:"13px",right:"13px"},margin:{}},boxBorderRadius:{top:"11px",left:"11px",bottom:"11px",right:"11px"}},button:{tab:"normal",buttonBackgroundnormalmode:{classic:{"background-color":"#0691b1"}},buttonBordernormalmode:{"border-style":"none"},buttonColornormalmode:"#fff",buttonBorderRadiusnormalmode:{top:"4px",left:"4px",bottom:"4px",right:"4px"},spacing:{margin:{},padding:{top:"10px",left:"20px",bottom:"10px",right:"20px"}}},icon:{tab:"normal",iconFontSize:"20px"}}}}},methods:{style(){let e=[{group_alias:"box",options:{group_name:"general",group_title:"General",selector:" .ecom-element__lightbox-container"},modify:{params:[{position:0,fields:[{alias:"align-items",options:{label:"Content alignment",name:"content_alignment",css:{selector:"root .ecom-element__lightbox-container",properties:{"justify-content":""}}}}]},{position:20,fields:{alias:"spacing"}}]}},{group_alias:"box",options:{group_title:"Popup",css:{selector:" .ecom-container-lightbox-"+this.data.id+" .ecom-modal-box__content",wrapper:"body"}},modify:{params:[{position:20,fields:{alias:"spacing"}},{position:0,fields:[{type:"popup",label:"Typography",name:"textTypography",options:{global:{type:"typography"},oneline:!0,responsive:!0,type:"typography"}}]}]}},{group_alias:"button",options:{selector:" .ecom-elements__lightbox-button"},modify:{params:{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-element__lightbox-container"}}}}},{group_alias:"image",options:{selector:" .ecom-lightbox-picture"}},{group_alias:"text",options:{group_title:"Heading",css:{selector:" .ecom-container-lightbox-"+this.data.id+" .ecom-elements__lightbox-content-heading",wrapper:"body"}},modify:{params:[{position:20,fields:{alias:"spacing"}}]}}];return this.data.settings.icon&&e.push({group_alias:"icon",options:{group_title:"Icon",group_name:"icon",selector:" .ecom-elements__lightbox-button-icon"},modify:{params:{position:20,fields:{alias:"spacing"}}}}),e}}},Bl={class:"ecom-element ecom-base-elements ecom-element__lightbox"},ql={class:"ecom-element__lightbox-wrapper"},El=["data-ecom-placeholder","innerHTML"],Dl={key:1,class:"ecom-element__lightbox-container ecom-flex"},Al=["ecom-modal-source"],zl=["innerHTML"],jl=["innerHTML"],Il=["ecom-modal-source"],Pl={class:"ecom-image-default"},Nl=["innerHTML"],Vl={key:2,style:{display:"none"}},Wl=["id"],Ol=["innerHTML"],Fl=["innerHTML"],Ul=["id"],Rl={key:0,style:{display:"flex !important",width:"100%",height:"100%"},class:"ecom_video",controls:"",muted:""},Yl=["src"],Gl=["src"],Jl=["id"],Zl=["src"],Kl=["innerHTML"];function Xl(e,t,o,n,s,i){var a,l,u,r,g;return c(),d("div",Bl,[p("div",ql,[o.data.template==="product"?(c(),d("div",{key:0,class:S(["ecom-element__lightbox-container ecom-flex",e.exporting?"":"ecom-placeholder-on-builder-mode"]),"data-ecom-placeholder":e.exporting?"":"This product not match with your condition",innerHTML:e.liquid("product")},null,10,El)):(c(),d("div",Dl,[o.data.settings.general!=="image"?(c(),d("button",{key:0,"ecom-modal":"inline",class:"ecom__element--button ecom-elements__lightbox-button ecom-flex ecom-al_center ecom-fl_center","ecom-modal-source":i.popupSrc},[p("span",{class:"ecom-elements__lightbox-button-text",innerHTML:e.lang(o.data.settings.button_title,"lightbox_button_title")},null,8,zl),p("span",{class:"ecom-button-icon ecom-elements__lightbox-button-icon ecom-flex",innerHTML:o.data.settings.icon},null,8,jl)],8,Al)):y("",!0),o.data.settings.general=="image"&&((a=i.imageHandled)==null?void 0:a.value)?(c(),d("button",{key:1,"ecom-modal":"inline",class:"ecom-elements__lightbox-button-image","ecom-modal-source":i.popupSrc},[p("div",Pl,[p("picture",{class:"ecom-lightbox-picture",innerHTML:e.$helpers.renImageResponsive(i.imageHandled,i.screens)},null,8,Nl)])],8,Il)):y("",!0),o.data.settings.source_type!=="page"?(c(),d("div",Vl,[o.data.settings.source_type==="custom"?(c(),d("div",{key:0,class:"ecom-html",id:"ecom-elements__lightbox-content-"+i.element_id},[p("div",{class:"ecom-elements__lightbox-content-heading",innerHTML:e.lang(o.data.settings.custom_heading_content)},null,8,Ol),p("div",{class:"ecom-elements__lightbox-content-body",innerHTML:e.lang(o.data.settings.custom_content)},null,8,Fl)],8,Wl)):y("",!0),o.data.settings.source_type==="video"?(c(),d("div",{key:1,id:"ecom-elements__lightbox-content-"+i.element_id,style:{height:"100%",width:"100%"}},[((l=o.data.settings)==null?void 0:l.source)=="self hosted"?(c(),d("video",Rl,[p("source",{src:i.linkSelfHosted},null,8,Yl)])):(c(),d("iframe",{key:1,class:"ecom_iframe",frameborder:"0",allowfullscreen:"1",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",style:{border:"0",width:"100%",height:"100%",display:"flex !important"},src:((u=o.data.settings)==null?void 0:u.source)=="vimeo"?i.linkVimeo:i.linkYoutube},`
                        `,8,Gl))],8,Ul)):y("",!0),o.data.settings.source_type=="image"?(c(),d("div",{key:2,id:"ecom-elements__lightbox-content-"+i.element_id,style:{height:"100%",width:"100%",display:"flex"}},[p("img",{src:(g=(r=o.data.settings)==null?void 0:r.image_source)==null?void 0:g.value,style:{"object-fit":"cover",width:"100%"}},null,8,Zl)],8,Jl)):y("",!0)])):(c(),d("div",{key:3,innerHTML:e.liquid("content")},null,8,Kl))]))])])}const Ql=k(nt,[["render",Xl]]);nt.__docgenInfo={exportName:"default",displayName:"lightbox",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:`{

}`}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Lightbox.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const st={name:"ProductTitle",presets:!0,mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{classes(){return this.data&&this.data.settings&&this.data.settings.classes?this.data.settings.classes:""},tag(){return this.data&&this.data.settings&&this.data.settings.tag?this.data.settings.tag:"h3"},liquids(){return{title:{code:"{{ product.title }}",preview:"Loading ...."},url:{code:"{{ product.url }}",preview:"#"}}},requestShopifyType(){return{shopify_type:"product"}},settings(){return[{params:[{type:"choose",label:"<span class='uppercase'>HTML</span> Tag",name:"tag",options:{type:"heading"}},{type:"text",label:"Custom classes",name:"classes",options:{placeholder:"Your Classes"}}]}]},style(){return[{group_alias:"text",options:{group_title:"",group_title:"Text",selector:" .ecom-product__heading"}}]},default(){return{settings:{tag:"h2",classes:""},style:{textSpacing:{textTextAlign:"left"}}}},css(){return`

                a.ecom-product__heading {
                    display: block;
                }
            `}}},ec={class:"ecom-element ecom-product-single ecom-product-single__title"},tc={class:"ecom-product-single__title-wrapper"},oc={class:"ecom-product-single__title-container"};function ic(e,t,o,n,s,i){return c(),d("div",ec,[p("div",tc,[p("div",oc,[(c(),z(W(i.tag),{class:S(["ecom-product__heading",i.classes]),href:e.liquid("url"),title:e.liquid("title"),innerHTML:e.liquid("title")},null,8,["class","href","title","innerHTML"]))])])])}const nc=k(st,[["render",ic]]);st.__docgenInfo={exportName:"default",displayName:"ProductTitle",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/Title.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const at={name:"ProductDeliveryTime",presets:!0,mixins:[T,H],props:{data:{type:Object,default(){return{}}}},methods:{},computed:{textFilter(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.delivery_text},renderIcon(){var t,o,n,s,i,a,l,u,r;let e=(t=this.data)==null?void 0:t.settings.type_icon;if(e==="icon"){if((n=(o=this.data)==null?void 0:o.settings)!=null&&n.icon_shipping)return(i=(s=this.data)==null?void 0:s.settings)==null?void 0:i.icon_shipping.value}else if(e==="img"&&(l=(a=this.data)==null?void 0:a.settings)!=null&&l.thumbnail_shipping)return(r=(u=this.data)==null?void 0:u.settings)==null?void 0:r.thumbnail_shipping.value;return""},requestShopifyType(){return{shopify_type:"product"}},settings(){return[{group_title:"",params:[{type:"popup",label:"Icon/Image",name:"type_icon",options:{preview:"title",type:"dropdown",values:{icon:"Icon",img:"Image"},default:!1}},{type:"picker",label:"Icon",name:"icon_shipping",options:{type:"icon",oneline:!0,reset:!0,visible:function(e){return e&&e.type_icon==="icon"}}},{type:"picker",label:"Choose Image",name:"thumbnail_shipping",options:{type:"image",output:["value","name"],editAlt:!0,visible:function(e){return e&&e.type_icon==="img"}}},{type:"popup",label:"Position",name:"position_icon",options:{type:"dropdown",default:!1,preview:"title",values:{after:"After",before:"Before"}}},{name:"icon_animation",label:"Animation",type:"dropdown",options:{search:!0,type:"animation",size:"small"},css:{selector:" .ecom-delivery-icon",properties:{animation:""}}},{type:"textarea",name:"delivery_text",label:"Delivery text",description:"Order in the next [hour] to get this to you between [date_start] and [date_end], Order in the next [hour] to get it by [date_end], Order in the next [hour] to get it soon"},{type:"number",label:"Delivery Start Date",name:"delivery_start_date",options:{units:{days:{min:0,max:99}},reset:!1},css:{selector:" ."}},{type:"number",label:"Delivery End Date",name:"delivery_end_date",options:{units:{days:{min:0,max:99}},reset:!1}},{type:"popup",label:"Exclude Days From",name:"exclude_days_from",options:{type:"dropdown",values:{only_delivery:"Only delivery",delivery_shipping:"Delivery + shipping"},default:!1}},{type:"text",name:"exclude_days",label:"Exclude days",description:"Use the 'mon','tue','wed','thu','fri','sat' and 'sun'. Separate exclude days with a comma (,)."},{type:"popup",label:"Date delivery format",name:"delivery_format_date",options:{preview:"title",type:"dropdown",values:{DoW_dd_mm_style_1:"Friday, 29th December",DoW_dd_mm_style_2:"Friday, 29 December",DoW_mm_dd_style_1:"Friday, December 29",DoW_mm_dd_style_2:"Friday, December 29th",DoW_dd_mm_yyyy_style_1:"Friday, 29th December 2022",DoW_dd_mm_yyyy_style_2:"Friday, 29th December, 2022",DoW_mm_dd_yyyy_style_1:"Friday, December 29th, 2022",DoW_mm_dd_yyyy_style_2:"Friday, December 29, 2022",DoW_dd_mm_yyyy_style_3:"Friday, 29/12/2022",DoW_mm_dd_yyyy_style_3:"Friday, 12/29/2022",DoW_yyyy_mm_dd:"Friday, 2022/12/29"},default:!1}},{type:"switch",label:"Hide days of the week",name:"hide_day_of_the_week",options:{values:{on:{label:"yes",value:!0},off:{label:"no",value:!1}}}},{type:"text",name:"delivery_cut_off",label:"Delivery cut off (UTC Time)",description:"Number Only(24 Hours Format - 16:00:00 Means 4PM). [see local time](https://www.timeanddate.com/worldclock/timezone/utc)"},{type:"text",name:"delivery_text_hours",label:"Text hour(s)"},{type:"text",name:"delivery_text_minutes",label:"Text minute(s)"},{type:"line"},{type:"paragraph",content:"### Translation"},{type:"textarea",name:"delivery_custom_dow",label:"Days of Week",description:"Ex: Monday,Tuesday,...,Sunday (order: Monday to Sunday in your language). Separate by (,)"},{type:"textarea",name:"delivery_custom_month",label:"Months of Year",description:"Ex: January,February,...,December (order: January to February in your language). Separate by (,)"}]}]},style(){var n;let e=[{group_alias:"text",options:{group_name:"text_delivery",group_title:"General",selector:" .ecom-delivery-time-wrapper"}},{group_alias:"text",options:{group_name:"text_delivery_date",group_title:"Date",selector:" .ecom-delivery-time__date"},modify:{remove:{index:0,length:1}}}],t={group_title:"Image",params:[{type:"number",name:"img_width",label:"Width",options:{units:{px:{min:0,max:200}}},css:{selector:" .ecom-delivery-icon",properties:{width:""}}},{alias:"spacing",options:{css:{selector:" .ecom-delivery-icon"}}}]},o={group_title:"Icon",params:[{name:"icon_color",label:"Color",type:"color",options:{global:{type:"colors"},oneline:!0},css:{selector:" .ecom-delivery-icon",properties:{color:""}}},{type:"number",name:"icon_size",label:"Size",options:{units:{px:{min:0,max:200}}},css:{selector:" .ecom-delivery-icon",properties:{width:""}}},{alias:"spacing",options:{css:{selector:" .ecom-delivery-icon"}}}]};return((n=this.data.settings)==null?void 0:n.type_icon)==="icon"?e.push(o):e.push(t),e},css(){return`
                    .ecom-delivery-time-wrapper{
                        display: block;
                        font-size: 16px;
                    }
                    .ecom-delivery-time,
                    .ecom-delivery-time-text{
                        display: inline;
                    }
                    .ecom-delivery-icon{
                        display: inline-block;
                        margin-right: 5px;
                    }
                    .ecom-delivery-icon svg{
                        width: inherit;
                    }

                `},default(){return{settings:{delivery_end_date:"5days",delivery_start_date:"2days",exclude_days:"sat,sun",delivery_text:"Order in the next [hour] to get it between [date_start] and [date_end]",exclude_days_from:"only_delivery",delivery_cut_off:"16:00:00",delivery_text_hours:"hour(s)",delivery_text_minutes:"minute(s)",delivery_format_date:"DoW_dd_mm_style_1",type_icon:"icon",icon_animation:"pulse",icon_shipping:{value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M64 416C28.65 416 0 387.3 0 352V64C0 28.65 28.65 0 64 0H352C387.3 0 416 28.65 416 64V96H481.3C495.3 96 508.6 102.1 517.7 112.8L596.4 204.6C603.9 213.3 608 224.4 608 235.8V384H624C632.8 384 640 391.2 640 400C640 408.8 632.8 416 624 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H255.1C255.1 469 213 512 159.1 512C106.1 512 63.1 469 63.1 416H64zM32 64V352C32 369.7 46.33 384 64 384H69.46C82.64 346.7 118.2 320 160 320C201.8 320 237.4 346.7 250.5 384H384V64C384 46.33 369.7 32 352 32H64C46.33 32 32 46.33 32 64zM570.9 224L493.4 133.6C490.4 130 485.1 128 481.3 128H416V224H570.9zM416 256V344.4C432.1 329.2 455.4 320 480 320C521.8 320 557.4 346.7 570.5 384H576V256H416zM160 352C124.7 352 96 380.7 96 416C96 451.3 124.7 480 160 480C195.3 480 224 451.3 224 416C224 380.7 195.3 352 160 352zM480 480C515.3 480 544 451.3 544 416C544 380.7 515.3 352 480 352C444.7 352 416 380.7 416 416C416 451.3 444.7 480 480 480z"></path></svg>'},position_icon:"before"},style:{icon_size:"20px",img_width:"20px",text_delivery_date:{textTypography:{"font-weight":"600","letter-spacing":"1.5px","font-style":"normal","text-decoration":"underline"}},text_delivery:{"font-size":"16px","font-weight":"400"}}}},animatedClass(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)!=null&&t.icon_animation?"animated":""},javascript(){return function(){if(!this.$el)return!1;let t=this.$el.querySelector(".ecom-delivery-time-text");if(!t)return!1;window.addEventListener("DOMContentLoaded",function(){let r=t.dataset.content;if(!r||r==="")return!1;l()});function o(r,g){return!r.includes(g)}function n(r,g){if(!r)return;let m=t.dataset.dateDow||"",h=t.dataset.dateMonth||"",_=m.split(","),b=h.split(","),f=r.split(",")[0],v=r.split(" ")[2];switch(f){case"Mon":r=_[0]?r.replace("Mon",_[0]):r.replace("Mon","Monday");break;case"Tue":r=_[1]?r.replace("Tue",_[1]):r=r.replace("Tue","Tuesday");break;case"Wed":r=_[2]?r.replace("Wed",_[2]):r=r.replace("Wed","Wednesday");break;case"Thu":r=_[3]?r.replace("Thu",_[3]):r=r.replace("Thu","Thursday");break;case"Fri":r=_[4]?r.replace("Fri",_[4]):r=r.replace("Fri","Friday");break;case"Sat":r=_[5]?r.replace("Sat",_[5]):r=r.replace("Sat","Saturday");break;case"Sun":r=_[6]?r.replace("Sun",_[6]):r=r.replace("Sun","Sunday");break}if(g==="DoW_dd_mm_yyyy_style_3"||g==="DoW_mm_dd_yyyy_style_3"||g==="DoW_yyyy_mm_dd"){switch(v){case"Jan":r=r.replace("Jan","01,");break;case"Feb":r=r.replace("Feb","02,");break;case"Mar":r=r.replace("Mar","03,");break;case"Apr":r=r.replace("Apr","04,");break;case"May":r=r.replace("May","05,");break;case"Jun":r=r.replace("Jun","06,");break;case"Jul":r=r.replace("Jul","07,");break;case"Aug":r=r.replace("Aug","08,");break;case"Sep":r=r.replace("Sep","09,");break;case"Oct":r=r.replace("Oct","10,");break;case"Nov":r=r.replace("Nov","11,");break;case"Dec":r=r.replace("Dec","12,");break}return r}switch(v){case"Jan":r=b[0]?r.replace("Jan",`,${b[0]},`):r.replace("Jan",",January,");break;case"Feb":r=b[1]?r.replace("Feb",`,${b[1]},`):r.replace("Feb",",February,");break;case"Mar":r=b[2]?r.replace("Mar",`,${b[2]},`):r.replace("Mar",",March,");break;case"Apr":r=b[3]?r.replace("Apr",`,${b[3]},`):r.replace("Apr",",April,");break;case"May":r=b[4]?r.replace("May",`,${b[4]},`):r.replace("May",",May,");break;case"Jun":r=b[5]?r.replace("Jun",`,${b[5]},`):r.replace("Jun",",June,");break;case"Jul":r=b[6]?r.replace("Jul",`,${b[6]},`):r.replace("Jul",",July,");break;case"Aug":r=b[7]?r.replace("Aug",`,${b[7]},`):r.replace("Aug",",August,");break;case"Sep":r=b[8]?r.replace("Sep",`,${b[8]},`):r.replace("Sep",",September,");break;case"Oct":r=b[9]?r.replace("Oct",`,${b[9]},`):r.replace("Oct",",October,");break;case"Nov":r=b[10]?r.replace("Nov",`,${b[10]},`):r.replace("Nov",",November,");break;case"Dec":r=b[11]?r.replace("Dec",`,${b[11]},`):r.replace("Dec",",December,");break}return r}function s(r){if(!r)return;let g=t.dataset.format||"DoW_dd_mm_style_1",m=t.dataset.hide_day_of_the_week||!1;m=m==="true";let h=r.split(",")[0];m?h="":h+=", ";let _=parseInt(r.split(",")[1]),b=r.split(",")[2];r=r.split(",")[3];let f=r.split(" ")[1];switch(g){case"DoW_dd_mm_style_1":switch(_){case 31:return`${h}${_}st ${b}`;case 22:return`${h}${_}nd ${b}`;case 23:return`${h}${_}rd ${b}`;default:return`${h}${_}th ${b}`}case"DoW_dd_mm_style_2":return`${h}${_} ${b}`;case"DoW_mm_dd_style_1":return`${h}${b} ${_}`;case"DoW_mm_dd_style_2":switch(_){case 31:return`${h}${b} ${_}st`;case 22:return`${h}${b} ${_}nd`;case 23:return`${h}${b} ${_}rd`;default:return`${h}${b} ${_}th`}case"DoW_dd_mm_yyyy_style_1":return`${h}${_}th ${b} ${f}`;case"DoW_dd_mm_yyyy_style_2":switch(_){case 31:return`${h}${_}st ${b}, ${f}`;case 22:return`${h}${_}nd ${b}, ${f}`;case 23:return`${h}${_}rd ${b}, ${f}`;default:return`${h}${_}th ${b}, ${f}`}case"DoW_mm_dd_yyyy_style_1":switch(_){case 31:return`${h}${b} ${_}st, ${f}`;case 22:return`${h}${b} ${_}nd, ${f}`;case 23:return`${h}${b} ${_}rd, ${f}`;default:return`${h}${b} ${_}th, ${f}`}case"DoW_mm_dd_yyyy_style_2":return`${h}${b} ${_}, ${f}`;case"DoW_dd_mm_yyyy_style_3":return`${h}${_}/${b}/${f}`;case"DoW_mm_dd_yyyy_style_3":return`${h}${b}/${_}/${f}`;case"DoW_yyyy_mm_dd":return`${h}${f}/${b}/${_}`;default:switch(_){case 31:return`${h}${_}st ${b}`;case 22:return`${h}${_}nd ${b}`;case 23:return`${h}${_}rd ${b}`;default:return`${h}${_}th ${b}`}}}function i(){let r=t.dataset.time||"dontHave",g=null,m=null,h=null,_=new Date;if(r==="dontHave")return"NaN";{let $=/^([\d]{1,2})\:$/g,q=/^([\d]{1,2})\:([\d]{1,2})\:$/g,B=/^([\d]{1,2})\:([\d]{1,2})\:([\d]{1,2})$/g;if(r.match($)||r.match(q)||r.match(B)){if(g=parseInt(r.split(":")[0]),m=parseInt(r.split(":")[1]),h=parseInt(r.split(":")[2]),m||(m=0),h||(h=0),g>=24||m>=60||h>=60)return"NaN"}else return"NaN"}let b=new Date().toUTCString().split(" ")[4],f=parseInt(b.split(":")[0]),v=parseInt(b.split(":")[1]),x=parseInt(b.split(":")[2]),C=null,L=null,w=null;return x>h?(w=h+60-x,m--):w=h-x,v>m?(L=m+60-v,g--):L=m-v,f>g?(C=24+g-f,_=new Date(_.setDate(_.getDate()+1))):C=g-f,_.setSeconds(w),_.setMinutes(L),_.setHours(C),_}function a(){let r=t.dataset.ds||"2days",g=t.dataset.de||"5days",m=0,h=0,_=["mon","tue","wed","thu","fri","sat","sun"];r&&(m=parseInt(r.replace("days",""))),g&&(h=parseInt(g.replace("days","")));let b=t.dataset.mode||"only_delivery",f=t.dataset.cut||"",v=t.dataset.format||"DoW_dd_mm_style_1",x=new Date,C=new Date;f=f.split(",");let L=[],w=f.map(function($){return $.toLowerCase()});for(let $=0;$<w.length;$++)_.includes(w[$])&&!L.includes(w[$])&&L.push(w[$]);if(L.length>=7)return x="Invalid";if(b&&b==="only_delivery"){let $=i();for($==="NaN"&&($=new Date),x=new Date(x.setDate($.getDate()+m));!o(L,x.toUTCString().split(",")[0].toLowerCase());)x=new Date(x.setDate(x.getDate()+1));for(C=new Date(C.setDate($.getDate()+h));!o(L,C.toUTCString().split(",")[0].toLowerCase());)C=new Date(C.setDate(C.getDate()+1))}else if(b&&b==="delivery_shipping"){let $=i();$==="NaN"&&($=new Date);for(let q=0;q<=m;q++){let B=new Date;B=new Date(B.setDate($.getDate()+q)),o(L,B.toUTCString().split(",")[0].toLowerCase())||(m+=1)}for(x=new Date(x.setDate($.getDate()+m));!o(L,x.toUTCString().split(",")[0].toLowerCase());)x=new Date(x.setDate(x.getDate()+1));for(let q=0;q<=h;q++){let B=new Date;B=new Date(B.setDate($.getDate()+q)),o(L,B.toUTCString().split(",")[0].toLowerCase())||(h+=1)}for(C=new Date(C.setDate($.getDate()+h));!o(L,C.toUTCString().split(",")[0].toLowerCase());)C=new Date(C.setDate(C.getDate()+1))}return[s(n(x.toUTCString(),v)),s(n(C.toUTCString(),v))]}function l(){let r=t.dataset.content;if(!r||r==="")return!1;r=r.replace("[date_start]",`<span class="ecom-delivery-time__date">${a()[0]}</span>`),r=r.replace("[date_end]",`<span class="ecom-delivery-time__date">${a()[1]}</span>`),t.innerHTML=r;let g=new Date(i()),m=null,h=null;g==="NaN"?(m="NaN",h="NaN"):(m=g.getHours(),h=g.getMinutes());let _=t.dataset.textHour||"hour(s)",b=t.dataset.textMin||"minute(s)",f=t.dataset.timeReplace;return f?(r=r.replace(`[${f}]`,`${m} ${_} ${h} ${b}`),t.innerHTML=r,!0):(r=r.replace("[hour]",""),t.innerHTML=r,!1)}l();const u=setInterval(function(){l()||clearInterval(u)},1e3)}}},watch:{},mounted(){}},sc={class:"ecom-element ecom-product-single ecom-product-single__delivery-time"},ac={class:"ecom-product-single__delivery-time-wrapper"},rc={class:"ecom-delivery-time-wrapper"},lc={class:"ecom-delivery-time"},cc=["innerHTML"],pc=["src"],mc=["innerHTML","data-ds","data-de","data-time-replace","data-date-dow","data-date-month","data-mode","data-format","data-cut","data-time","data-hide_day_of_the_week","data-text-min","data-text-hour","data-content"],dc=["innerHTML"],uc=["src"];function gc(e,t,o,n,s,i){var a,l,u,r,g,m,h,_,b,f,v,x,C,L,w,$,q,B,A,P,O,J,F;return c(),d("div",sc,[p("div",ac,[p("div",rc,[p("div",lc,[((a=o.data.settings)==null?void 0:a.type_icon)=="icon"&&((l=o.data.settings)==null?void 0:l.icon_shipping)&&((u=o.data.settings)==null?void 0:u.position_icon)!=="after"?(c(),d("span",{key:0,innerHTML:i.renderIcon,class:S(["ecom-delivery-icon",i.animatedClass])},null,10,cc)):y("",!0),o.data.settings.type_icon=="img"&&((r=o.data.settings)==null?void 0:r.thumbnail_shipping)&&((g=o.data.settings)==null?void 0:g.position_icon)!=="after"?(c(),d("span",{key:1,class:S(["ecom-delivery-icon",i.animatedClass])},[p("img",{src:i.renderIcon,alt:""},null,8,pc)],2)):y("",!0),p("div",{ref:"textFilter",innerHTML:e.lang(i.textFilter,"delivery_text"),class:"ecom-delivery-time-text","data-ds":(m=o.data.settings)==null?void 0:m.delivery_start_date,"data-de":(h=o.data.settings)==null?void 0:h.delivery_end_date,"data-time-replace":e.lang("hour"),"data-date-dow":(_=o.data.settings)==null?void 0:_.delivery_custom_dow,"data-date-month":(b=o.data.settings)==null?void 0:b.delivery_custom_month,"data-mode":(f=o.data.settings)==null?void 0:f.exclude_days_from,"data-format":(v=o.data.settings)==null?void 0:v.delivery_format_date,"data-cut":(x=o.data.settings)==null?void 0:x.exclude_days,"data-time":(C=o.data.settings)==null?void 0:C.delivery_cut_off,"data-hide_day_of_the_week":(w=(L=o.data.settings)==null?void 0:L.hide_day_of_the_week)!=null?w:!1,"data-text-min":e.lang(($=o.data.settings)==null?void 0:$.delivery_text_minutes,"delivery_minute"),"data-text-hour":e.lang((q=o.data.settings)==null?void 0:q.delivery_text_hours,"delivery_hours"),"data-content":e.lang((B=o.data.settings)==null?void 0:B.delivery_text,"delivery_text")},null,8,mc),((A=o.data.settings)==null?void 0:A.type_icon)=="icon"&&((P=o.data.settings)==null?void 0:P.icon_shipping)&&((O=o.data.settings)==null?void 0:O.position_icon)=="after"?(c(),d("span",{key:2,innerHTML:i.renderIcon,class:S(["ecom-delivery-icon",i.animatedClass])},null,10,dc)):y("",!0),o.data.settings.type_icon=="img"&&((J=o.data.settings)==null?void 0:J.thumbnail_shipping)&&((F=o.data.settings)==null?void 0:F.position_icon)=="after"?(c(),d("span",{key:3,class:S(["ecom-delivery-icon",i.animatedClass])},[p("img",{src:i.renderIcon,alt:""},null,8,uc)],2)):y("",!0)])])])])}const we=k(at,[["render",gc]]);at.__docgenInfo={exportName:"default",displayName:"ProductDeliveryTime",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/DeliveryTime.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const rt={name:"ProductPrice",presets:!0,mixins:[M,T,H],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["sale_text","show_badges","sold_text"]}},computed:{liquids(){var e,t,o,n,s,i;return{prices:{code:`
                    {%- liquid
                        if product.has_only_default_variant
                            assign target = product
                        else
                            assign target = product.selected_or_first_available_variant
                        endif
                    -%}

                    <div class="ecom-product-single__price--sale" data-price="{{target.price}}">
                        {%- if settings.currency_code_enabled -%}
                            {{target.price | money_with_currency}}
                        {%- else -%}
                            {{target.price| money }}
                        {%- endif -%}
                    </div>
                    ${(e=this.data.settings)!=null&&e.show_total_price?"":`
                        <div class="ecom-product-single__price--regular" {%- if product.compare_at_price == nil or product.compare_at_price <  product.price -%}  style="display:none" {% endif %}>
                            {%- if settings.currency_code_enabled -%}
                                {{target.compare_at_price | money_with_currency}}
                            {%- else -%}
                                {{target.compare_at_price | money }}
                            {%- endif -%}
                        </div>
                        `}
                    {%- capture taxes_text -%}${this.lang(this.data.settings.include_taxes,"include_taxes")}{%- endcapture -%}
                    {%- if cart.taxes_included or shop.shipping_policy.body != blank -%}
                        {% if taxes_text%}
                            <div class="ec-product__tax caption rte">
                                {%- if shop.taxes_included -%}
                                    ${this.lang(this.data.settings.include_taxes,"include_taxes")}
                                {%- endif -%}
                                {%- if shop.shipping_policy.body != blank -%}
                                    ${this.lang(this.data.settings.shipping_policy,"shipping_policy",{link:"shop.shipping_policy.url"})}
                                {%- endif -%}
                            </div>
                            ${(t=this.data.settings)!=null&&t.show_payment_terms?`
                                <div class="ec-form-payment_terms">
                                    {{ form | payment_terms}}
                                </div>
                                `:""}
                        {%- endif -%}
                    {%- endif -%}

                `,preview:`
                    <div class="ecom-skeleton-item" style="min-width: 180px">
                        <div class="ecom-skeleton-col-12">
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-8"></div>
                            </div>
                        </div>
                        <div class="ecom-skeleton-col-12">
                        <div class="ecom-skeleton-row">
                            <div class="ecom-skeleton-col-10"></div>
                        </div>
                        </div>
                    </div>
                `},badge:{code:`
                    <div class="ecom-product-single__price--badges">
                        {%- assign savings = product.compare_at_price | minus: product.price | times: 100.0 | divided_by: product.compare_at_price | round -%}
                        <span class="ecom-product-single__price--badges-sale" data-text=" ${this.lang(this.sale_text,"product_single_sale_text")}" data-sale="{{savings}}" {%- if product.compare_at_price == nil or product.compare_at_price <=  product.price -%}  style="display:none" {% endif %}>
                           ${this.lang(this.sale_text,"product_single_sale_text")}
                        </span>
                        <span class="ecom-product-single__price--badges-sold-out" {% unless target.avaiable %} style="display:none" {% endunless %}>
                            ${this.lang(this.sold_text,"product_single_sold_text")}
                        </span>
                    </div>
                    `,preview:""},badge_pecent:{code:`
                    <div class="ecom-product-single__price--badges_pecent">
                        <span class="ecom-product-single__price--badges-sale-pecent" {%- if product.compare_at_price == nil or product.compare_at_price <=  product.price -%}  style="display:none" {% endif %}>
                            {%- assign savings = product.compare_at_price | minus: product.price | times: 100.0 | divided_by: product.compare_at_price | round | append: '%' | prepend: '-' -%}
                            {{ savings }}
                        </span>
                    </div>
                    `,preview:""},ground_price:{code:`
                        <small class="ecom-unit-price" {% if product.selected_or_first_available_variant.unit_price_measurement == nil %}style="display: none;" {% endif %}">
                            <span class="visually-hidden">{{ 'products.product.price.unit_price' | t }}</span>
                            <span class="price-item price-item--last">
                                <span class="ecom-ground-price_unit-price">{{- product.selected_or_first_available_variant.unit_price | money -}}</span>
                                <span aria-hidden="true">/</span>
                                <span class="visually-hidden">&nbsp;{{ 'accessibility.unit_price_separator' | t }}&nbsp;</span>
                                <span class="ecom-ground-price_unit-price-measurement">
                                {%- if product.selected_or_first_available_variant.unit_price_measurement.reference_value != 1 -%}
                                    {{- product.selected_or_first_available_variant.unit_price_measurement.reference_value -}}
                                {%- endif -%}
                                {{ product.selected_or_first_available_variant.unit_price_measurement.reference_unit }}
                                </span>
                            </span>
                        </small>
                    `,preview:`
                        <div class="ecom-skeleton-item" style="max-width: 100px; width: 100%">
                            <div class="ecom-skeleton-col-12">
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-12"></div>
                                </div>
                            </div>
                        </div>
                    `},afterpay:{code:`
                    ${this.enable_afterpay?`
                         <afterpay-placement class="ecom-afterpay-integrate"
                            data-show-interest-free="true"
                            ${this.afterpay_theme!=="none"?`data-badge-theme="${this.afterpay_theme}"`:""}
                            data-modal-theme="${this.modal_theme}"
                            data-locale="{{country.iso_code}}"
                            data-currency="{{shop.currency}}"
                            data-prefix=""
                            data-logo-type="${this.afterpay_logo_type}"
                            data-lockup-theme="${this.afterpay_logo_color}"
                            data-show-lower-limit="${(n=(o=this.data.settings)==null?void 0:o.show_lower_limit)!=null?n:"false"}"
                            data-show-upper-limit="${(i=(s=this.data.settings)==null?void 0:s.show_upper_limit)!=null?i:"false"}"
                            data-amount="{{product.price | divided_by: 100}}">
                        </afterpay-placement>
                    `:""}
                    `,preview:""}}},settings(){return[{group_title:"General",params:[{type:"text",label:"Badge sale text",placeholder:"Sale {price}%",value:"Sale",name:"sale_text",description:"Badge sale off percent will replace in block {price}"},{type:"text",label:"Badge sold out text",value:"Sold out",name:"sold_text"},{type:"text",label:"Tax included text",value:"",name:"include_taxes"},{type:"text",label:"Shipping policy",value:"",name:"shipping_policy"},{type:"toggle",name:"show_groundprice",label:"Enable ground price",description:"See detailed [guide](https://help.shopify.com/en/manual/intro-to-shopify/initial-setup/sell-in-germany/price-per-unit) to enable ground price.",options:{values:{on:{label:"Show",value:!0},off:{label:"Hide",value:!1}}}},{type:"toggle",name:"show_total_price",label:"Enable total price",description:"Total price when customer change quantity (product price * quantity)",options:{values:{on:{label:"Show",value:!0},off:{label:"Hide",value:!1}}}},{type:"toggle",name:"show_payment_terms",label:"Show payment terms",options:{values:{on:{label:"Show",value:!0},off:{label:"Hide",value:!1}}}},{type:"toggle",name:"show_badges",value:!0,label:"Show sale/sold out badge",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"toggle",name:"show_sale_pecent",value:!0,label:"Show sale percent badge",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}}]},{group_title:"AfterPay settings",params:[{type:"paragraph",content:"Afterpay is fully integrated with all of your favorite stores. Shop as usual, then choose Afterpay as your payment method at checkout. **To integrate Afterpay to your theme, you can follow these [instruction](https://developers.afterpay.com/afterpay-online/docs/shopify-getting-started)**"},{type:"toggle",name:"enable_afterpay",label:"Show afterpay?",options:{values:{on:{label:"Show",value:!0},off:{label:"Hide",value:!1}}}},{type:"toggle",label:"Show minimum price",name:"show_lower_limit",description:`Determines whether to show the minimum amount e.g) $1.00 \u2013 $1,000 for products outside of the provided minimum/maximum threshold. 

                                Learn more [here](https://developers.afterpay.com/afterpay-online/docs/advanced-configuration#data-show-lower-limit)`,options:{visible(e){return e.enable_afterpay},values:{on:{label:"Yes",value:"true"},off:{label:"No",value:"false"}}}},{type:"number",name:"lower_limit",label:"Minimum price",options:{min:1,slider:!1,visible(e){return e.enable_afterpay}}},{type:"toggle",label:"Show maximum price",name:"show_upper_limit",description:`Determines whether to show the lower amount e.g) $1.00 \u2013 $1,000 for products outside of the provided minimum/maximum threshold. 

                                 Learn more [here](https://developers.afterpay.com/afterpay-online/docs/advanced-configuration#data-show-lower-limit)`,options:{visible(e){return e.enable_afterpay},values:{on:{label:"Yes",value:"true"},off:{label:"No",value:"false"}}}},{type:"number",name:"upper_limit",label:"Maximum price",options:{min:1,slider:!1,visible(e){return e.enable_afterpay}}},{type:"popup",label:"Logo type",name:"afterpay_logo_type",description:"Learn more [here](https://developers.afterpay.com/afterpay-online/docs/afterpayjs-glossary#logo-type)",options:{type:"dropdown",values:{badge:"Badge",lockup:"Lockup","compact-badge":"Compact Badge"},visible(e){return e.enable_afterpay}}},{type:"popup",label:"Lockup theme",name:"afterpay_logo_color",options:{type:"dropdown",visible(e){return e.enable_afterpay&&e.afterpay_logo_type==="lockup"},values:{black:"Black",white:"White",mint:"Mint"}}},{type:"popup",label:"Afterpay badge theme",description:"Learn more about [badge theme](https://developers.afterpay.com/afterpay-online/docs/afterpayjs-glossary#badge-theme)",name:"afterpay_theme",options:{type:"dropdown",visible(e){return e.enable_afterpay&&e.afterpay_logo_type==="badge"},values:{none:"None","black-on-mint":"Black on Mint","mint-on-black":"Mint on Black","white-on-black":"White on Black"}}},{type:"popup",label:"Modal Themes",name:"modal_theme",options:{type:"dropdown",visible(e){return e.enable_afterpay},values:{mint:"Mint",white:"White"}}}]}]},show_badges(){return this.data&&this.data.settings&&"show_badges"in this.data.settings?this.data.settings.show_badges:!1},show_sale_pecent(){return this.data&&this.data.settings&&"show_sale_pecent"in this.data.settings?this.data.settings.show_sale_pecent:!1},show_groundprice(){return this.data&&this.data.settings&&"show_groundprice"in this.data.settings?this.data.settings.show_groundprice:!1},sale_text(){return this.data&&this.data.settings&&"sale_text"in this.data.settings?this.data.settings.sale_text:""},sold_text(){return this.data&&this.data.settings&&"sold_text"in this.data.settings?this.data.settings.sold_text:""},enable_afterpay(){var e,t,o;return(o=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.enable_afterpay)!=null?o:!1},afterpay_theme(){var e,t,o;return(o=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.afterpay_theme)!=null?o:"none"},modal_theme(){var e,t,o;return(o=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.modal_theme)!=null?o:"white"},afterpay_logo_type(){var e,t,o;return(o=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.afterpay_logo_type)!=null?o:"badge"},afterpay_logo_color(){var e,t,o;return(o=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.afterpay_logo_color)!=null?o:"black"},css(){return`
                    .ecom-product-single__price-container-grid {
                        display: flex;
                    }
                    .ecom-product-single__price--sale{
                        font-size: 30px;
                        color: rgb(26, 27, 24);
                        display:inline-flex;
                    }
                    .ecom-product-single__price--regular{
                        text-decoration: line-through;
                        color: #6B7280;
                        display:inline-flex;
                    }
                    .ecom-product-single__price--badges-sale{
                        display: block;
                        color:red;
                    }
                    .ecom-product-single__price--badges-sale-pecent{
                        display: block;
                    }
                    .ecom-product-single__price-container .ecom-product-single__price--prices{
                        display:inline-flex;
                        align-items:center;
                        justify-content:center;
                        gap:10px;
                    }
                    .ecom-product-single__price-container {
                        display: flex;
                        flex-direction: column;
                        gap: 5px;
                    }
                    .ecom-product-single-afterpay afterpay-placement{
                        margin:0;
                        padding: 0;
                    }
                `},javascript(){return function(){var s,i;let e=this.$el;if(!e)return;let t=e.querySelector("afterpay-placement.ecom-afterpay-integrate"),o=this.$el.closest(".ecom-product-form--single");if(o){let a=o.querySelector('[name="id"]');if(a&&a.dispatchEvent(new window.Event("ecomUpdate")),this.settings.show_total_price){const l=o.querySelector(".ecom-product-single__quantity-input"),u=e.querySelector(".ecom-product-single__price--sale");if(e.querySelector(".ecom-product-single__price--regular"),!u)return;l&&l.addEventListener("change",function(){u.innerHTML=window.EComposer.formatMoney(parseInt(u.getAttribute("data-price"))*parseInt(this.value))}),o.addEventListener("ecomVariantChange",function(r){if(r.detail.variant){const g=r.detail.variant,m=l?parseInt(l.value):1;u.setAttribute("data-price",g.price),m>1&&(u.innerHTML=window.EComposer.formatMoney(g.price*parseInt(m)))}})}}if(this.settings.enable_afterpay){let a=window.document.querySelector("#ecom-after-pay-script");if(window.afterpay_min=this.settings.lower_limit||1,a)a.dataset.analyticsEnabled=!0,a.dataset.min=(s=this.settings.lower_limit)!=null?s:1,a.dataset.max=(i=this.settings.upper_limit)!=null?i:1e3;else{let l=window.document.createElement("script");l.id="ecom-after-pay-script",l.dataset.analyticsEnabled=!0,l.dataset.min=this.settings.lower_limit||1,l.dataset.max=this.settings.upper_limit||1e3,l.src="https://js.afterpay.com/afterpay-1.x.js",window.document.head.appendChild(l)}t&&this.isLive&&window.jQuery&&window.Afterpay&&window.Afterpay.initProductPage(window.jQuery)}let n=e.querySelector(".ecom-product-single__price--badges-sale");if(n){let a=n.dataset.sale,l=n.dataset.text;l=l.replace(/\{.*\}/g,a),n.innerHTML=l}}},requestShopifyType(){return{shopify_type:"product"}},default(){return{settings:{sale_text:"Sale",sold_text:"Sold out",show_badges:!0,shipping_policy:'<a href="{{ link }}">Shipping</a> calculated at checkout.',include_taxes:"Tax included.",show_badges_pecent:!0,enable_afterpay:!1,show_lower_limit:"true",show_upper_limit:"true",upper_limit:"600",lower_limit:"100",show_sale_pecent:!1},style:{price_general:{"text-align":"left"},price_regular_price:{spacing:{margin:{right:"10px"}}},price_badge:{textColor:"#ffffff",boxBackground:"#dc2626",spacing:{padding:{left:"8px",right:"8px"},margin:{top:"12px"}}},price_out_badge:{textColor:"#ffffff",boxBackground:"#111827",spacing:{padding:{left:"8px",right:"8px"}}},price_pecent_badge:{boxBackground:"#ed1f1f",textColor:"#fff",spacing:{margin:{left:"10px",top:"12px",right:"10px"},padding:{left:"8px",right:"8px"}}}}}}},methods:{style(){var t,o;let e=[{group_alias:"box",options:{group_title:"General",group_name:"price_general",selector:" .ecom-product-single__price--prices"},modify:{params:{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-product-single__price-container-grid"}}}}},{group_alias:"text:spacing",options:{group_title:"Price",group_name:"price_price",selector:" .ecom-product-single__price--sale"},modify:{remove:{index:0,length:1}}},{group_alias:"text:spacing",options:{group_title:"Compare at price",group_name:"price_regular_price",selector:" .ecom-product-single__price--regular"},modify:{remove:{index:0,length:1}}},{group_alias:["text:spacing","box"],options:{group_title:"Sale badge",group_name:"price_badge",selector:" .ecom-product-single__price--badges-sale"},modify:{remove:[{index:0,length:1},{index:3,length:1}]}},{group_alias:["text:spacing","box"],options:{group_title:"Sold out badge",group_name:"price_out_badge",selector:" .ecom-product-single__price--badges-sold-out"},modify:{remove:[{index:0,length:1},{index:3,length:1}]}},{group_alias:["text:spacing","box"],options:{group_title:"Sale percent badge",group_name:"price_pecent_badge",selector:" .ecom-product-single__price--badges-sale-pecent"},modify:{remove:[{index:0,length:1},{index:3,length:1}]}}];return(o=(t=this.data)==null?void 0:t.settings)!=null&&o.show_groundprice&&e.push({group_alias:"text",options:{group_title:"",group_title:"Ground price",selector:" .ecom-product_ground-price"}}),e}}},_c={class:"ecom-element ecom-product-single ecom-product-single__price"},hc={class:"ecom-product-single__price-wrapper"},fc={class:"ecom-product-single__price-container"},bc={class:"ecom-product-single__price-container-grid"},yc=["innerHTML"],vc=["innerHTML"],xc=["innerHTML"],wc=["innerHTML"],kc=["innerHTML"];function Cc(e,t,o,n,s,i){return c(),d("div",_c,[p("div",hc,[p("div",fc,[p("div",bc,[p("div",{class:"ecom-product-single ecom-product-single__price--prices",innerHTML:e.liquid("prices")},null,8,yc),i.show_badges?(c(),d("div",{key:0,class:"ecom-product-single__price--badges-wrapper",innerHTML:e.liquid("badge")},null,8,vc)):y("",!0),i.show_sale_pecent?(c(),d("div",{key:1,class:"ecom-product-single__price--badges-pecent-wrapper",innerHTML:e.liquid("badge_pecent")},null,8,xc)):y("",!0)]),i.show_groundprice?(c(),d("div",{key:0,class:"ecom-product_ground-price",innerHTML:e.liquid("ground_price")},null,8,wc)):y("",!0),p("div",{class:"ecom-product-single-afterpay",innerHTML:e.liquid("afterpay")},null,8,kc)])])])}const Tc=k(rt,[["render",Cc]]);rt.__docgenInfo={exportName:"default",displayName:"ProductPrice",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/Price.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const lt={name:"ProductQuantity",presets:!0,mixins:[T,H],props:{data:{type:Object,default(){return{}}}},computed:{icons(){return{faPlus:ao,faMinus:ro}},css(){return`
              .ecom-product-single__quantity-wrapper{
                display:flex;
            }
            .ecom-product-single__quantity-container{
                display:flex;

            }
            .ecom-product-single__quantity-controls {
                display: flex;
                align-items: center;
            }
            .ecom-product-single__quantity-controls-button {
                outline: none;
                cursor: pointer;
                border: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0;
                transition: background-color .1s cubic-bezier(.4,0,.6,1);
            }
            .ecom-product-single__quantity-input:focus-visible {
                box-shadow: none;
            }
            .ecom-product-single__quantity-input {
                cursor: text;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background-color .1s cubic-bezier(.4,0,.6,1);
            }
            .ecom-product-single__quantity-input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
            .ecom-product-single__quantity-container {
                width: 100%
            }

                `},settings(){return[{params:[{name:"title",label:"Title",type:"text"},{type:"picker",label:"Icon plus",name:"icon_plus",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"picker",label:"Icon minus",name:"icon_minus",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"popup",label:"Layout",name:"layout",options:{oneline:!0,responsive:!0,preview:"title",default:!1,type:"dropdown",values:{column:"Vertical",row:"Horizontal"},visible:function(e){return e.title}},css:{properties:{"flex-direction":""},selector:" .ecom-product-single__quantity-container"}},{type:"number",name:"spacing",label:"Spacing",options:{responsive:!0,units:{px:{min:0,max:50}}},css:{selector:" .ecom-product-single__quantity-container",properties:{gap:""}}},{type:"choose",label:"Alignment",name:"justify-content",options:{oneline:!0,responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{selector:" .ecom-product-single__quantity-wrapper"}}]}]},javascript(){return function(){const e=this.$el;if(!e)return;const t=e.querySelector(".ecom-product-single__quantity-controls-plus"),o=e.querySelector(".ecom-product-single__quantity-controls-minus"),n=e.querySelector(".ecom-product-single__quantity-input");n.value===""&&(n.value="1"),t.addEventListener("click",function(){n.stepUp(),n.dispatchEvent(new Event("change"))}),o.addEventListener("click",function(){n.stepDown(),n.dispatchEvent(new Event("change"))}),n.addEventListener("change",function(s){s.target.max&&parseInt(s.target.max)<s.target.value&&(s.target.value=s.target.max)})}},requestShopifyType(){return{shopify_type:"product"}},title(){return this.data&&this.data.settings&&this.data.settings.title?this.data.settings.title:""},default(){return{settings:{"justify-content":"flex-start",spacing:"0px",layout:"column"},style:{quanity_title:{textTextAlign:"left",spacing:{margin:{bottom:"0px"}},textColor:"#2e2c2c",textTypography:{"font-weight":"500"}},quanity_quanity:{border:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"rgba(17, 24, 39, 0.2)"},tab:"normal",borderRadius:{right:"0px",top:"0px",left:"0px",bottom:"0px"},outline:{outline:{"outline-style":"none"}},"text-align":"center",color:"#404040",spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}},quanity_plus:{iconBordernormalmode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"0px"},"border-color":"rgba(17, 24, 39, 0.2)"},tab:"normal",iconFontSize:"12px",iconBackgroundnormalmode:{classic:{"background-color":"#f5f5f5"}},iconPrimaryColornormalmode:"#2b2b2b",iconBackgroundhovermode:{classic:{"background-color":"#d1d1d1"}},padding:{top:"0px",left:"15px",bottom:"0px",right:"15px"}},quanity_minus:{iconBordernormalmode:{"border-style":"solid","border-width":{top:"1px",left:"0px",bottom:"1px",right:"1px"},"border-color":"rgba(17, 24, 39, 0.2)"},tab:"normal",iconFontSize:"12px",iconPrimaryColornormalmode:"#000000",iconBackgroundnormalmode:{classic:{"background-color":"#f5f5f5"}},iconBackgroundhovermode:{classic:{"background-color":"#cfcfcf"}},padding:{top:"0px",left:"15px",bottom:"0px",right:"15px"}},general:{height:"40px"}},advanced:{"width-max":"unset",spacing:{margin:{top:"15px"}}}}}},methods:{style(){return[{group_name:"general",group_title:"General",selector:" .ecom-product-single__quantity-container .ecom-product-single__quantity-controls input, .ecom-product-single__quantity-controls-button",params:[{type:"number",label:"Height",name:"height",options:{responsive:!0,reset:!0,units:{px:{min:0,max:100}}},css:{properties:{height:""}}}]},{group_alias:"text:spacing",options:{group_title:"Title",group_name:"quanity_title",selector:" .ecom-product-single__quantity-container label"}},{group_alias:"input",options:{group_title:"Quantity input",group_name:"quanity_quanity",selector:" .ecom-product-single__quantity-container .ecom-product-single__quantity-controls input"}},{group_alias:"icon:hover",options:{group_title:"Minus",group_name:"quanity_plus",selector:" .ecom-product-single__quantity-container .ecom-product-single__quantity-controls-minus"},modify:{params:[{position:10,fields:{type:"dimension",label:"Padding",name:"padding",options:{units:"default",simple:!0}}}]}},{group_alias:"icon:hover",options:{group_title:"Plus",group_name:"quanity_minus",selector:" .ecom-product-single__quantity-container .ecom-product-single__quantity-controls-plus"},modify:{params:[{position:10,fields:{type:"dimension",label:"Padding",name:"padding",options:{units:"default",simple:!0}}}]}}]}}},Lc={class:"ecom-element ecom-product-single ecom-product-single__quantity"},$c={class:"ecom-product-single__quantity-wrapper"},Sc={class:"ecom-product-single__quantity-container"},Mc=["textContent"],Hc={class:"ecom-product-single__quantity-controls"},Bc={type:"button",class:"ecom-product-single__quantity-controls-button ecom-product-single__quantity-controls-minus"},qc=["innerHTML"],Ec=p("input",{name:"quantity",type:"number",value:"1",max:"9999",min:"1",class:"ecom-product-single__quantity-input",required:""},null,-1),Dc={type:"button",class:"ecom-product-single__quantity-controls-button ecom-product-single__quantity-controls-plus"},Ac=["innerHTML"];function zc(e,t,o,n,s,i){var l,u,r,g;const a=N("ecom-icon");return c(),d("div",Lc,[p("div",$c,[p("div",Sc,[p("label",{class:"ecom-product-single__quantity-container-label",for:"quantity",textContent:I(e.lang(i.title,"quanity_label"))},null,8,Mc),p("div",Hc,[p("button",Bc,[(l=o.data.settings)!=null&&l.icon_minus?(c(),d("div",{key:1,innerHTML:(u=o.data.settings)==null?void 0:u.icon_minus,class:"ecom-flex ecom-fl_center .ecom-al_center"},null,8,qc)):(c(),z(a,{key:0,icon:i.icons.faMinus,class:"ecom-product-single__quantity-controls-icon"},null,8,["icon"]))]),Ec,p("button",Dc,[(r=o.data.settings)!=null&&r.icon_plus?(c(),d("div",{key:1,innerHTML:(g=o.data.settings)==null?void 0:g.icon_plus,class:"ecom-flex ecom-fl_center .ecom-al_center"},null,8,Ac)):(c(),z(a,{key:0,icon:i.icons.faPlus,class:"ecom-product-single__quantity-controls-icon"},null,8,["icon"]))])])])])])}const jc=k(lt,[["render",zc]]);lt.__docgenInfo={exportName:"default",displayName:"ProductQuantity",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/Quantity.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const ct={name:"AddToCart",presets:!0,mixins:[M,H,T],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["add_to_cart","product_unavailable","product_outstock","animation","animation_loop_time"]}},computed:{javascript(){return function(){if(!this.$el)return!1;const e=this.$el,t=e.closest(".ecom-product-form--single");if(!t)return!1;const o=t.querySelector('[name="id"]');if(!this.isLive)t&&o&&o.dispatchEvent(new window.Event("ecomUpdate"));else{const s=e.querySelector(".ecom-product-single__add-to-cart--submit"),i=e.closest("form");if(!i)return;if(!i.querySelector("select[name=id]")){let a=null;const l=i.dataset.product_id;if(!l)return;const u=i.querySelector("[id^=product-json-"+l+"]");if(!u)return;try{a=JSON.parse(u.innerHTML)}catch{return}let r=a.variants[0];if(r){const g=s.querySelector(".ecom-add-to-cart-text");if(!g)return;r.available==!1?(s.setAttribute("disabled","disabled"),g.innerText=s.dataset.textOutstock):r.inventory_quantity<=0&&r.inventory_policy=="continue"&&(g.innerText=s.dataset.textPreOrder)}}if(!o&&s&&s.dataset.variant_id){const a=document.createElement("input");a.type="hidden",a.value=s.dataset.variant_id,e.appendChild(a)}}const n=function(s){if(!e)return;const i=e.querySelector(".ecom-product-single__add-to-cart--submit");if(!i)return;let a=parseInt(s.settings.animation_loop_time)*1e3||6e3,l=1e3;setInterval(function(){i.classList.add("animated"),setTimeout(function(){i.classList.remove("animated")},l)},a)};this.settings.animation&&n(this)}},liquids(){return{variant_id:{code:"{{product.first_available_variant.id}}",preview:"0"},payment_terms:{code:`
                        {% comment %}
                            this.data.settings.payment_terms
                        {% endcomment %}
                        {{ form | payment_terms }}

                        `,preview:""}}},attrLink(){var t,o,n;const e=(t=this.data)==null?void 0:t.settings.link;return{"data-href":(o=e==null?void 0:e.href)!=null?o:"#","data-target":(n=e==null?void 0:e.target)!=null?n:""}},settings(){return[{params:[{type:"text",label:"Add to cart text",name:"add_to_cart"},{type:"text",label:"Pre order text",name:"pre_order",value:"Pre Order"},{type:"text",name:"product_unavailable",label:"Product is not available text"},{type:"text",name:"product_outstock",label:"Product is out of stock text"},{type:"line"},{type:"toggle",name:"payment_terms",label:"Show payment terms",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"popup",name:"action",label:"Added to cart then",options:{type:"dropdown",default:!1,values:{popup:"Show cart popup",reload:"Reload page",message:"Show a message",cart:"Redirect to cart page",checkout:"Go to checkout page",link:"Go to Special url"}},description:"To enable this feature you must go to the **Extensions** > ** Ajax cart** > ** Settings ** > ** Enable ajax cart ** [Ajax cart](#extensions/1)"},{type:"link",label:"Target url",name:"link",options:{visible:function(e){return e.action==="link"}}},{type:"text",label:"Added to cart message",name:"added_cart_message",placeholder:"Added to to your cart",options:{visible:function(e){return e.action==="message"}}},{type:"text",label:"Added to cart text",name:"added_cart_text",options:{placeholder:"Added to cart"}},{type:"picker",label:"Icon",name:"icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"choose",label:"Icon position",name:"icon_position",options:{type:"align-x",values:[-1,1],visible:{keep_data:!1,condition:e=>e.icon}},css:{selector:" .ecom__element--button-icon",properties:{order:""}}},{type:"number",label:"Icon spacing",name:"spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.icon}},css:{selector:" .ecom-product-single__add-to-cart--submit",properties:{gap:""}}},{type:"line"},{type:"toggle",name:"animation",label:"Button animation",options:{values:{on:{label:"Enable",value:!0},off:{label:"Disable",value:!1}}}},{type:"number",label:'Loop time <span class="lowercase">(s)</span>',name:"animation_loop_time",options:{min:2,default:6,max:10,visible:function(e){return e.animation==!0}}},{type:"line"},{type:"paragraph",content:"Integrated with: [Omega Facebook Pixel](https://apps.shopify.com/facebook-multi-pixels?surface_detail=ECatc&surface_type=partner)"}]}]},css(){return`
                    .ecom-builder .shopify-payment-button__button--hidden{
                        visibility: visible
                    }
                    .ecom-product-single__add-to-cart-payment-terms:empty{
                        display:none;
                    }

                    .ecom-product-single__add-to-cart--submit {
                        display: flex;
                        align-items: center;
                    }
                    .ecom-product-single__add-to-cart--submit[disable] {
                        cursor: not-allowed;
                    }
                    .ecom-product-single__add-to-cart-buttons-wrapper {display: flex;align-items: center;}
                `},requestShopifyType(){return{shopify_type:"product"}},default(){return{settings:{add_to_cart:"Add to cart",product_unavailable:"Unavailable",product_outstock:"Out stock",show_dynamic_checkout:!0,added_cart_text:"Added to cart",added_cart_message:"Added to cart",action:"popup",payment_terms:!1,icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z"></path></svg>',icon_position:-1,spacing:"10px",animation:!0,animation_loop_time:3},style:{add_to_cart_button:{tab:"normal",spacing:{padding:{top:"12.5px",left:"50px",bottom:"12.5px",right:"50px"}},buttonColorhovermode:"#fff",buttonBackgroundhovermode:{classic:{"background-color":"#16b9de"}},buttonBackgroundnormalmode:{classic:{"background-color":"#0691b1"}},buttonColornormalmode:"#fff",buttonBordernormalmode:{"border-style":"none"},buttonTypography:{"font-weight":"500","text-transform":"uppercase","letter-spacing":"1.5px","font-style":"normal"},transition:{transition:{duration:"300ms",timing:"ease"}},buttonBorderRadiusnormalmode:{right:"5px",top:"5px",left:"5px",bottom:"5px"},atc_animation:"shake"},sold_out_or_unavailable_button:{tab:"normal",buttonColornormalmode:"#fff",buttonBackgroundnormalmode:{classic:{"background-color":"#bdb9b9"}},buttonBordernormalmode:{"border-style":"none"},spacing:{padding:{right:"50px",left:"50px",top:"12.5px",bottom:"12.5px"}}},icon:{iconFontSize:"20px"}}}},animatedClass(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)!=null&&t.animation?"animated":""}},methods:{style(){var t;const e=[{group_alias:"button",options:{group_title:"Add to cart",group_name:"add_to_cart_button",selector:" .ecom-product-single__add-to-cart--submit"},modify:{params:[{position:0,fields:[{alias:"align-items",options:{label:"Alignment",name:"button_alignment",css:{selector:"root .ecom-product-single__add-to-cart-buttons-wrapper",properties:{"align-items":"","justify-content":""}}}},{alias:"align-items",options:{label:"Text Alignment",name:"text_alignment",css:{selector:"root .ecom-product-single__add-to-cart--submit",properties:{"justify-content":""}}}}]},{position:30,fields:[{type:"line"},{name:"atc_animation",label:"Animation effect",type:"popup",options:{type:"dropdown",values:"entrance-animation",size:"small"},css:{selector:".animated",properties:{"entrance-animation":""}}}]}]}},{group_alias:"button",options:{group_title:"Sold out or Unavailable",group_name:"sold_out_or_unavailable_button",selector:" .ecom-product-single__add-to-cart--submit:disabled"}}];return(t=this.data.settings)!=null&&t.icon&&e.push({group_alias:"icon",options:{group_name:"icon",group_title:"Icon",selector:" .ecom__element--button-icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}}),e}}},Ic={class:"ecom-element ecom-product-single ecom-product-single__add-to-cart"},Pc={class:"ecom-product-single__add-to-cart-wrapper"},Nc={class:"ecom-product-single__add-to-cart-container"},Vc=["innerHTML"],Wc={class:"ecom-product-single__add-to-cart-buttons"},Oc={class:"ecom-product-single__add-to-cart-buttons-wrapper"},Fc=["data-text-add-cart","data-text-pre-order","data-text-unavailable","data-text-outstock","data-text-added-cart","data-message-added-cart","data-action","data-variant-id"],Uc=["innerHTML"],Rc=["innerHTML"];function Yc(e,t,o,n,s,i){var a,l,u,r,g,m,h,_,b,f,v;return c(),d("div",Ic,[p("div",Pc,[p("div",Nc,[(a=o.data.settings)!=null&&a.payment_terms?(c(),d("div",{key:0,class:"ecom-product-single__add-to-cart-payment-terms",innerHTML:e.liquid("payment_terms")},null,8,Vc)):y("",!0),p("div",Wc,[p("div",Oc,[p("button",j({type:"submit",class:["ecom-product-single__add-to-cart--submit ecom-flex",i.animatedClass],"data-text-add-cart":e.lang((l=o.data.settings)==null?void 0:l.add_to_cart,"add_to_cart"),"data-text-pre-order":e.lang((u=o.data.settings)==null?void 0:u.pre_order,"pre_order"),"data-text-unavailable":e.lang((r=o.data.settings)==null?void 0:r.product_unavailable,"product_unavailable"),"data-text-outstock":e.lang((g=o.data.settings)==null?void 0:g.product_outstock,"out_stock"),"data-text-added-cart":e.lang((m=o.data.settings)==null?void 0:m.added_cart_text,"added_cart_text"),"data-message-added-cart":e.lang((h=o.data.settings)==null?void 0:h.added_cart_message,"added_cart_message")},i.attrLink,{"data-action":(f=(b=(_=o.data)==null?void 0:_.settings)==null?void 0:b.action)!=null?f:"popup","data-variant-id":e.liquid("variant_id")}),[p("span",{class:"ecom-add-to-cart-text",innerHTML:e.lang(o.data.settings.add_to_cart,"add_to_cart")},null,8,Uc),p("span",{class:"ecom__element--button-icon",innerHTML:(v=o.data.settings)==null?void 0:v.icon},null,8,Rc)],16,Fc)])])])])])}const Gc=k(ct,[["render",Yc]]);ct.__docgenInfo={exportName:"default",displayName:"AddToCart",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:`{

}`}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/AddToCart.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const pt={name:"BuyNowButton",mixins:[M,H,T],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["animation_loop_time","animation"]}},computed:{javascript(){return function(){if(!this.$el)return!1;const e=this.$el,t=e.closest(".ecom-product-form--single");if(!t)return!1;if(!this.isLive||t.dataset.previewMode==="preview"||window.EComposer.hasOwnProperty("DEMO")){const a=e.querySelector(".shopify-payment-button__button");a&&(a.innerText="Buy it now",a.classList.remove("shopify-payment-button__button--hidden"),a.removeAttribute("disabled"))}const o=t.dataset.product_id;if(!o)return;let n=null;const s=t.querySelector("[id^=product-json-"+o+"]");if(!s)return;try{n=JSON.parse(s.innerHTML)}catch{}if(this.isLive){const a=e.querySelector(".ecom-product-single__buy_now_btn--dynamic-checkout .shopify-payment-button");a&&a.addEventListener("click",function(){let l=1;t.querySelector("[name=quantity]")&&(l=t.querySelector("[name=quantity]").value);let u=t.querySelector("[name=id]").value,r=n.variants.find(g=>g.id==u);!r||r.available===!1||(window.omegaCallBackCheckout&&typeof window.omegaCallBackCheckout=="function"&&window.omegaCallBackCheckout(),window.Shopify.analytics&&Shopify.analytics.publish("ec_buy_now",{cartLine:{cost:{totalAmount:{amount:r.price*l,currencyCode:window.Shopify.currency.active}},merchandise:{id:r.id,image:r.image,price:{amount:r.price,currencyCode:window.Shopify.currency.active},product:{id:n.id,title:n.title,vendor:n.vendor},sku:r.sku,title:r.title},quantity:l}}))})}const i=function(a){if(!e)return;const l=e.querySelector(".ecom-product-single__buy_now_btn--dynamic-checkout");if(!l)return;let u=parseInt(a.settings.animation_loop_time)*1e3||6e3,r=1e3;setInterval(function(){l.classList.add("animated"),setTimeout(function(){l.classList.remove("animated")},r)},u)};this.settings.animation&&i(this)}},animatedClass(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)!=null&&t.animation?"animated":""},liquids(){return{dynamic_checkout:{code:`
                            {{ form | payment_button }}
                        `,preview:`
                        <div data-shopify="payment-button" class="shopify-payment-button">
                            <button class="shopify-payment-button__button shopify-payment-button__button--unbranded shopify-payment-button__button--hidden" aria-hidden="true">Buy it now</button>
                            <button class="shopify-payment-button__more-options shopify-payment-button__button--hidden" disabled="disabled" aria-hidden="true">&nbsp;</button>
                        </div>
                        `}}},requestShopifyType(){return{shopify_type:"product"}},css(){return`
            .ecom-product-single__buy_now_btn .shopify-payment-button__button--unbranded:after,
            .shopify-payment-button__more-options.shopify-payment-button__button--hidden {
              display: none;
            }
            .shopify-payment-button > button {
                width: 100%;
            }
            .ecom-product-single__buy_now_btn--dynamic-checkout {
                display: flex;
            }
          `},settings(){return[{params:[{type:"toggle",name:"animation",label:"Button animation",options:{values:{on:{label:"Enable",value:!0},off:{label:"Disable",value:!1}}}},{type:"number",label:'Loop time <span class="lowercase">(s)</span>',name:"animation_loop_time",options:{min:2,default:6,max:10,visible:function(e){return e.animation==!0}}},{type:"line"},{type:"paragraph",content:"Integrated with: [Omega Facebook Pixel](https://apps.shopify.com/facebook-multi-pixels?surface_detail=ECatc&surface_type=partner)"}]}]},default(){return{settings:{animation:!0,animation_loop_time:3},style:{dynamic_checkout_button:{tab:"normal",spacing:{padding:{top:"12.5px",left:"50px",bottom:"12.5px",right:"50px"}},buttonTypography:{"text-transform":"uppercase"},buttonColornormalmode:"#FFF",buttonBackgroundnormalmode:{classic:{"background-color":"#0691b1"}},buttonBordernormalmode:{"border-style":"none"},buttonBackgroundhovermode:{classic:{"background-color":"#12bbe0"}},transition:{transition:{duration:"300ms",timing:"ease"}},"align-items":"center",buttonBorderRadiushovermode:{top:"3px",left:"3px",bottom:"3px",right:"3px"},buttonBorderRadiusnormalmode:{right:"3px",top:"3px",left:"3px",bottom:"3px"}},button_animation:{animation:"shake"}}}}},methods:{style(){return[{group_alias:"button",options:{group_title:"Button",group_name:"dynamic_checkout_button",selector:" .ecom-product-single__buy_now_btn .shopify-payment-button .shopify-payment-button__button, .ecom-product-single__buy_now_btn .shopify-payment-button .shopify-payment-button__button--unbranded"},modify:{remove:[{index:6,length:1},{index:11,length:1}],params:[{position:0,fields:[{alias:"width",options:{css:{selector:"root .shopify-payment-button"}}},{alias:"align-items",options:{label:"Alignment",css:{selector:"root .ecom-product-single__buy_now_btn--dynamic-checkout",properties:{"align-items":"","justify-content":""}}}}]}]}},{group_name:"button_animation",group_title:"Animation effect",selector:" .ecom-product-single__buy_now_btn--dynamic-checkout",params:[{name:"animation",label:"Animation",type:"popup",options:{type:"dropdown",values:"entrance-animation",size:"small"},css:{selector:".animated",properties:{"entrance-animation":""}}}]}]}}},Jc=["data-preview-mode"],Zc={class:"ecom-product-single__buy_now_btn-wrapper"},Kc={class:"ecom-product-single__buy_now_btn-container"},Xc={class:"ecom-product-single__buy_now_btn-buttons"},Qc={class:"ecom-product-single__buy_now_btn-buttons-wrapper"},ep=["innerHTML"];function tp(e,t,o,n,s,i){return c(),d("div",{class:"ecom-element ecom-product-single ecom-product-single__buy_now_btn","data-preview-mode":e.exporting.toString()},[p("div",Zc,[p("div",Kc,[p("div",Xc,[p("div",Qc,[p("div",{class:S(["ecom-product-single__buy_now_btn--dynamic-checkout",i.animatedClass]),innerHTML:e.liquid("dynamic_checkout")},null,10,ep)])])])])],8,Jc)}const op=k(pt,[["render",tp]]);pt.__docgenInfo={exportName:"default",displayName:"BuyNowButton",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:`{
}`}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/DynamicCheckout.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const mt={name:"BuyNowButton",mixins:[M,H,T],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["animation_loop_time","animation"]}},computed:{javascript(){return function(){if(!this.$el)return!1;const e=this.$el;let t=e.closest(".ecom-product-form--single");if(!t){const n=e.closest(".ecom-builder");n&&(t=n.querySelector(".ecom-product-form--single"))}if(!t)return!1;if(this.isLive){let n=t.querySelector("select[name=id]");const s=e.querySelector(".ecom-product-single__buy_it_now_btn--checkout"),i=t.dataset.product_id;if(!i)return;let a=null;const l=t.querySelector("[id^=product-json-"+i+"]");if(!l)return;try{a=JSON.parse(l.innerHTML)}catch{return}s&&s.addEventListener("click",function(u){u.preventDefault();let r=1;t.querySelector("[name=quantity]")&&(r=t.querySelector("[name=quantity]").value);let g=t.querySelector("[name=id]").value,m=a.variants.find(_=>_.id==g);if(!m||m.available===!1)return;window.Shopify.analytics&&Shopify.analytics.publish("ec_buy_now",{cartLine:{cost:{totalAmount:{amount:m.price*r,currencyCode:window.Shopify.currency.active}},merchandise:{id:m.id,image:m.image,price:{amount:m.price,currencyCode:window.Shopify.currency.active},product:{id:a.id,title:a.title,vendor:a.vendor},sku:m.sku,title:m.title},quantity:r}});const h=`${window.EComposer.routes.cart_url}/${g}:${r}`;location.href=h}),a.available||(s.classList.add("ecom-disable-buy"),s.disabled=!0),n&&n.addEventListener("change",function(){let u=this.value;if(!u)return;a.variants.find(g=>g.id==u).available===!1?(s.classList.add("ecom-disable-buy"),s.disabled=!0):(s.classList.remove("ecom-disable-buy"),s.disabled=!1)})}const o=function(n){if(!e)return;const s=e.querySelector(".ecom-product-single__buy_it_now_btn--checkout");if(!s)return;let i=parseInt(n.settings.animation_loop_time)*1e3||6e3,a=1e3;setInterval(function(){s.classList.add("animated"),setTimeout(function(){s.classList.remove("animated")},a)},i)};this.settings.animation&&o(this)}},animatedClass(){var e,t;return(t=(e=this.data)==null?void 0:e.settings)!=null&&t.animation?"animated":""},liquids(){},requestShopifyType(){return{shopify_type:"product"}},css(){return`
            .ecom-product-single__buy_it_now_btn--checkout {
                display: flex;
                justify-content: center;
                cursor: pointer;
                align-items: center;
            }
            .ecom-product-single__buy_it_now_btn-buttons-wrapper{
                display: flex;
                width: 100%;
            }
            .ecom-product-single__buy_it_now-icon-link svg{
                width: 20px;
                height: 20px;
            }
            .ecom-product-single__buy_it_now_btn--checkout.ecom-disable-buy{
                opacity: 0.6;
            }
          `},settings(){return[{params:[{type:"paragraph",options:{warnings:{content:"Not working with Subscription Product"}}},{type:"text",name:"label",label:"Button label"},{type:"picker",label:"Icon",name:"icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"choose",label:"Icon position",name:"icon_position",options:{type:"align-x",values:[-1,1],visible:function(e){return e&&e.icon}},css:{selector:" .ecom-button-icon",properties:{order:""}}},{type:"number",label:"Icon spacing",name:"spacing",options:{units:{px:{min:0,max:200}},visible:function(e){return e&&e.icon}},css:{selector:" .ecom-product-single__buy_it_now_btn--checkout",properties:{gap:""}}},{type:"toggle",name:"animation",label:"Button animation",options:{values:{on:{label:"Enable",value:!0},off:{label:"Disable",value:!1}}}},{type:"number",label:'Loop time <span class="lowercase">(s)</span>',name:"animation_loop_time",options:{min:2,default:6,max:10,visible:function(e){return e.animation==!0}}},{type:"line"},{type:"paragraph",content:"Integrated with: [Omega Facebook Pixel](https://apps.shopify.com/facebook-multi-pixels?surface_detail=ECatc&surface_type=partner)"}]}]},default(){return{settings:{animation:!0,animation_loop_time:3,label:"Buy it now",icon:'<svg version="1.1" id="lni_lni-angle-double-right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve" fill="currentColor"><g><path d="M36.2,28.1L11.3,1.8c-0.7-0.7-1.8-0.7-2.5-0.1C8.1,2.4,8.1,3.5,8.8,4.2l24.9,26.3c0.7,0.7,0.7,1.9,0,2.6L8.8,59.7c-0.7,0.7-0.6,1.8,0.1,2.5c0.3,0.3,0.8,0.5,1.2,0.5c0.5,0,0.9-0.2,1.3-0.6l24.9-26.6C38.2,33.5,38.2,30.2,36.2,28.1z"></path><path d="M54.3,28.2L29.3,1.9c-0.7-0.7-1.8-0.7-2.5-0.1c-0.7,0.7-0.7,1.8-0.1,2.5l24.9,26.3c0.7,0.7,0.7,1.9,0,2.6L26.8,59.8c-0.7,0.7-0.6,1.8,0.1,2.5c0.3,0.3,0.8,0.5,1.2,0.5c0.5,0,0.9-0.2,1.3-0.6l24.9-26.6C56.2,33.6,56.2,30.3,54.3,28.2z"></path></g></svg>',icon_position:1,spacing:"10px"},style:{checkout_button:{tab:"normal",spacing:{padding:{top:"12.5px",left:"50px",bottom:"12.5px",right:"50px"}},buttonTypography:{"text-transform":"uppercase","font-size":"16px"},buttonColornormalmode:"#FFF",buttonBackgroundnormalmode:{classic:{"background-color":"#0691b1"}},buttonBordernormalmode:{"border-style":"none"},buttonBackgroundhovermode:{classic:{"background-color":"#12bbe0"}},transition:{transition:{duration:"300ms",timing:"ease"}},"align-items":"center",buttonBorderRadiushovermode:{top:"3px",left:"3px",bottom:"3px",right:"3px"},buttonBorderRadiusnormalmode:{right:"3px",top:"3px",left:"3px",bottom:"3px"},buttonHeightnormalmode:"45px",width:"225px"},button_animation:{animation:"shake"},icon_button:{tab:"normal",iconFontSize:"20px"}}}}},methods:{style(){return[{group_alias:"button",options:{group_title:"Button",group_name:"checkout_button",selector:" .ecom-product-single__buy_it_now_btn .ecom-product-single__buy_it_now_btn--checkout"},modify:{remove:[{index:6,length:1},{index:11,length:1}],params:[{position:0,fields:[{alias:"width",options:{css:{selector:"root .ecom-product-single__buy_it_now_btn--checkout"}}},{alias:"align-items",options:{label:"Alignment",css:{selector:"root .ecom-product-single__buy_it_now_btn-buttons-wrapper",properties:{"align-items":"","justify-content":""}}}}]}]}},{group_alias:"icon:hover",options:{group_name:"icon_button",selector:" .ecom-product-single__buy_it_now-icon-link"}},{group_name:"button_animation",group_title:"Animation effect",selector:" .ecom-product-single__buy_it_now_btn--checkout",params:[{name:"animation",label:"Animation",type:"popup",options:{type:"dropdown",values:"entrance-animation",size:"small"},css:{selector:".animated",properties:{"entrance-animation":""}}}]}]}}},ip=["data-preview-mode"],np={class:"ecom-product-single__buy_it_now_btn-buttons-wrapper"},sp=["innerHTML"],ap=["innerHTML"];function rp(e,t,o,n,s,i){var a,l,u,r;return c(),d("div",{class:"ecom-element ecom-product-single ecom-product-single__buy_it_now_btn","data-preview-mode":e.exporting.toString()},[p("div",np,[p("button",{type:"button",class:S(["ecom-product-single__buy_it_now_btn--checkout",i.animatedClass])},[p("span",{innerHTML:e.lang((a=o.data.settings)==null?void 0:a.label,"button_label")},null,8,sp),(l=o.data.settings)!=null&&l.icon?(c(),d("span",{key:0,style:E("order:"+((u=o.data.settings)==null?void 0:u.icon_position)),class:"ecom-button-icon ecom-product-single__buy_it_now-icon-link ecom-in_flex",innerHTML:(r=o.data.settings)==null?void 0:r.icon},null,12,ap)):y("",!0)],2)])],8,ip)}const lp=k(mt,[["render",rp]]);mt.__docgenInfo={exportName:"default",displayName:"BuyNowButton",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:`{
}`}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/BuyItNow.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const dt={name:"ProductSold",mixins:[H,T],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["animation_loop_time","animation","min","max","min_time","max_time","text"]}},computed:{settings(){return[{params:[{type:"paragraph",content:"Display a fake the number of product sold on your product page."},{type:"number",label:"Minimum number of product sold",name:"min",value:1,placeholder:1,options:{min:1,max:200},description:"Minimum product sold number must be less than maximum product sold"},{type:"number",label:"Maximum number of product sold",name:"max",value:100,placeholder:100,options:{min:1,max:200},decription:"Maximum product sold number must be greater than minimum product sold"},{type:"number",label:"Minimum number of time",name:"min_time",value:1,placeholder:1,options:{min:1,max:200},description:"Minimum time number must be less than maximum time"},{type:"number",label:"Maximum number of time",name:"max_time",value:5,placeholder:5,options:{min:1,max:24},decription:"Maximum time number must be greater than minimum time"},{type:"textarea",label:"Text",name:"text",options:{toolbar:!0},value:"",description:"The text shows the number of product sold. Example: {sold} sold in last {hour} hours"},{type:"picker",name:"icon",label:"Icon",options:{oneline:!0,type:"icon",layout:"grid",output:"value",multiple:!1}},{type:"toggle",name:"animation",label:"Icon animation",options:{visible:function(e){return e.icon!=""},values:{on:{label:"Enable",value:!0},off:{label:"Disable",value:!1}}}},{type:"number",label:'Loop time <span class="lowercase">(s)</span>',name:"animation_loop_time",options:{min:2,default:6,max:10,visible:function(e){return e.icon!=""}}}]}]},text(){return this.data&&this.data.settings&&this.data.settings.text?this.data.settings.text:""},javascript(){return function(){const e=this.$el;if(!e)return;let t=e.querySelector(".ecom-product-single__product-sold-content");function o(n,s){return Math.floor(Math.random()*(s-n))+n}if(t&&t.dataset.text){let n=parseInt(this.settings.max),s=parseInt(this.settings.min),i=parseInt(this.settings.max_time),a=parseInt(this.settings.min_time);n=isNaN(n)?30:n,s=isNaN(s)?2:s,s=s>n?n:s,i=isNaN(i)?24:i,a=isNaN(a)?2:a,a=a>i?i:a,function(){let r=o(s,n),g=o(a,i),m=t.dataset.text.replace(/{\s*sold\s*}/g,r);m=m.replace(/{\s*hour\s*}/g,g),t.innerHTML=m}();const u=function(r){if(!e)return;const g=e.querySelector(".ecom-product-single__product-sold-icon");if(!g)return;let m=parseInt(r.settings.animation_loop_time)*1e3||6e3,h=1e3;setInterval(function(){g.classList.add("animated"),setTimeout(function(){g.classList.remove("animated")},h)},m)};this.settings.animation&&u(this)}}},css(){return`
                .ecom-product-single__product-sold-container {
                    display: flex;
                    align-items:center;
                    column-gap: 10px;

                }
            `},default(){return{settings:{min:1,max:100,min_time:1,max_time:6,text:"{sold} sold in last {hour} hours",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 14.375 3 L 14.1875 3.78125 C 13.886719 5.128906 11.953125 7.347656 9.96875 10.0625 C 7.984375 12.777344 6 16.160156 6 20.40625 C 6 22.410156 6.613281 24.550781 8.125 26.21875 C 9.636719 27.886719 12.046875 29 15.3125 29 C 15.457031 29 15.578125 28.972656 15.71875 28.96875 C 15.8125 28.972656 15.902344 29 16 29 C 16.304688 29 16.589844 28.964844 16.875 28.9375 C 16.960938 28.929688 17.039063 28.914063 17.125 28.90625 C 20.472656 28.628906 22.695313 27.597656 24.0625 26.0625 C 25.667969 24.261719 26 21.976563 26 20 C 26 15.535156 23.429688 11.382813 20.9375 8.3125 C 18.445313 5.242188 15.9375 3.21875 15.9375 3.21875 L 15.65625 3 Z M 15.5 5.5 C 16.308594 6.210938 17.671875 7.496094 19.375 9.59375 C 21.726563 12.492188 24 16.332031 24 20 C 24 21.753906 23.691406 23.453125 22.5625 24.71875 C 22.320313 24.992188 22.027344 25.257813 21.6875 25.5 C 22.226563 23.941406 22.109375 22.167969 21.75 20.40625 C 21.339844 18.394531 20.5625 16.375 19.8125 14.75 C 19.0625 13.125 18.421875 11.976563 17.875 11.34375 L 17.59375 11 L 15.65625 11 L 16.03125 12.28125 C 17.078125 15.683594 16.527344 18 15.9375 18.6875 C 15.644531 19.03125 15.515625 19.0625 15.21875 18.96875 C 14.921875 18.875 14.386719 18.488281 13.875 17.53125 L 13.125 16.125 L 12.1875 17.40625 C 10.316406 19.925781 9.597656 22.6875 10.21875 25 C 10.273438 25.203125 10.359375 25.402344 10.4375 25.59375 C 10.140625 25.367188 9.863281 25.136719 9.625 24.875 C 8.507813 23.644531 8 22 8 20.40625 C 8 16.785156 9.703125 13.835938 11.59375 11.25 C 13.132813 9.144531 14.632813 7.367188 15.5 5.5 Z M 18.5625 17.21875 C 19.027344 18.394531 19.53125 19.582031 19.78125 20.8125 C 20.144531 22.601563 20.136719 24.238281 19.625 25.28125 C 19.242188 26.0625 18.648438 26.636719 17.4375 26.875 C 17.304688 26.902344 17.148438 26.917969 17 26.9375 C 16.6875 26.964844 16.34375 26.988281 16 27 C 15.910156 27 15.835938 27.003906 15.75 27 C 13.585938 26.929688 12.546875 25.964844 12.15625 24.5 C 11.832031 23.292969 12.253906 21.609375 13.15625 19.90625 C 13.601563 20.367188 14.074219 20.703125 14.625 20.875 C 15.644531 21.195313 16.78125 20.804688 17.46875 20 C 18.058594 19.308594 18.40625 18.351563 18.5625 17.21875 Z"></path></svg>',animation:!0,textTextAlign:"flex-start",animation_loop_time:2},style:{icon_animation:{animation:"heart-beat"},icon:{spacing:{margin:{right:"-5px"}},iconFontSize:"24px"}}}}},methods:{style(){let e=[{group_title:"General",group_name:"general",selector:" .ecom-product-single__product-sold-container",params:[{alias:"justify-content"},{alias:"spacing"}]},{group_alias:"text",options:{group_title:"Text",group_name:"text",selector:" .ecom-product-single__product-sold-content"},modify:{remove:{index:0,length:1}}}];return this.data.settings.icon&&e.push({group_alias:"icon",options:{group_title:"Icon",group_name:"icon",selector:" .ecom-product-single__product-sold-icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}},{group_name:"icon_animation",group_title:"Animation effect",selector:" .ecom-product-single__product-sold-icon",params:[{name:"animation",label:"Animation",type:"popup",options:{type:"dropdown",values:"entrance-animation",size:"small"},css:{selector:".animated",properties:{"entrance-animation":""}}}]}),e}}},cp={class:"ecom-element ecom-product-single ecom-product-single__product-sold"},pp={class:"ecom-product-single__product-sold-wrapper"},mp={class:"ecom-product-single__product-sold-container"},dp=["innerHTML"],up=["data-text"];function gp(e,t,o,n,s,i){return c(),d("div",cp,[p("div",pp,[p("div",mp,[o.data.settings.icon?(c(),d("div",{key:0,class:"ecom-product-single__product-sold-icon ecom-in_flex",innerHTML:o.data.settings.icon},null,8,dp)):y("",!0),p("div",{class:"ecom-product-single__product-sold-content","data-text":e.lang(i.text,"product_sold_text")},null,8,up)])])])}const _p=k(dt,[["render",gp]]);dt.__docgenInfo={exportName:"default",displayName:"ProductSold",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/ProductSold.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const ut={name:"ProductSellingPlan",presets:!0,mixins:[M,T,H],props:{data:{type:Object,default(){return{}}}},computed:{css(){return`
                .ecom-product-single__selling-plan-fieldset{
                    display: block;
                    margin-inline-start: 2px;
                    margin-inline-end: 2px;
                    padding-block-start: 0.35em;
                    padding-inline-start: 0.75em;
                    padding-inline-end: 0.75em;
                    padding-block-end: 0.625em;
                    min-inline-size: min-content;
                    border-width: 2px;
                    border-style: groove;
                    border-color: threedface;
                    border-image: initial;
                }
                .ec-purchase-options{
                    margin-left:15px;
                }
                .ecom-product-single__selling-plan-fieldset--input {
                    display: block
                }
                .ecom-product-single__selling-plan-fieldset--input input[type="radio"]{
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        padding: 0;
                        -webkit-print-color-adjust: exact;
                        color-adjust: exact;
                        display: inline-block;
                        vertical-align: middle;
                        background-origin: border-box;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        flex-shrink: 0;
                        position:relative;
                    }
                .ecom-product-single__selling-plan-fieldset--input input[type="radio"]:checked::after{
                        position:absolute;
                        content:'';
                        left:50%;
                        top:50%;
                        transform:translate(-50%,-50%)
                    }
            `},heading(){return this.data&&this.data.settings&&this.data.settings.tag?this.data.settings.tag:"h3"},liquids(){var e,t,o,n,s;return{selling_plans:{code:`
                        {%- liquid
                            assign current_variant = product.selected_or_first_available_variant | default: product.variants.first
                            assign current_selling_plan_allocation = current_variant.selected_selling_plan_allocation
                            if current_selling_plan_allocation == nil and current_variant.requires_selling_plan
                            assign current_selling_plan_allocation = current_variant.selling_plan_allocations | first
                            endif
                            assign offer = current_selling_plan_allocation | default: current_variant
                        -%}
                         {% comment %}
                            {{ offer.price | money }}
                            {% if offer.compare_at_price > offer.price %}
                            <s>{{ offer.compare_at_price | money }}</s>
                            <span>{% if offer.selling_plan %}Subscription{% else %}Sale{% endif %}</span>
                        {% endif %}
                        {% endcomment %}
                        <fieldset class="ecom-product-single__selling-plan-fieldset">
                            <legend class="ecom-product-single__selling-plan-fieldset-header">${this.lang((t=(e=this.data.settings)==null?void 0:e.title)!=null?t:"","selling_plan_title")}</legend>
                            <input type="hidden" name="selling_plan" value="{{ current_selling_plan_allocation.selling_plan.id | default: '' }}">
                            {% unless product.requires_selling_plan %}
                                <label class="ecom-product-single__selling-plan-fieldset--input">
                                    <input type="radio" name="purchase_option" value="onetime"> 
                                    ${this.lang((o=this.data.settings)==null?void 0:o.one_time_text,"one_time_text")}
                                </label>
                            {% endunless %}
                            {% for group in product.selling_plan_groups %}
                                <div  class="ecom-product-single__selling-plan-fieldset--input">
                                    <label class="ecom-product-single__selling-plan-fieldset-frequency-header" for="purchase_option">
                                    <input type="radio"  {% if product.requires_selling_plan %} required {% endif %} name="purchase_option" value="{{group.id}}">  
                                        {%- capture ec_text -%}${this.lang((n=this.data.settings)==null?void 0:n.subscription_text,"subscription_text")}{% endcapture%}
                                        {%- if ec_text != "" -%}{{- ec_text -}}{%- else -%}{{ group.name}}{%- endif -%}
                                    </label>
                                </div>
                                <div class="ec-purchase-options">
                                    {% for option in group.options %}
                                        <label class="ec-selling-plan-frequency-label">
                                            {%- capture ec_text -%}${this.lang((s=this.data.settings)==null?void 0:s.frequency_header,"frequency_header")}{% endcapture%}
                                            {%- if ec_text != "" -%}{{- ec_text -}}{%- else -%}{{ option.name  }}{%- endif -%}
                                        </label>
                                        <select class="ecom-product-single__selling-plan-select" name="group-option-{{group.id}}" data-group-id="{{group.id}}"  data-position="{{ option.position }}">
                                        {% for value in option.values %}
                                            <option value="{{value}}">{{ value }}</option>
                                        {% endfor %}
                                        </select>
                                    {% endfor %}
                                </div>
                               
                            {% endfor %}
                                
                        </fieldset>
                    `,preview:""}}},javascript(){return function(){let e=this.$el;var t=e.querySelector(".ecom-product-single__selling-plan-fieldset"),o=e.closest("form.ecom-product-form--single");if(!o||!t)return;let n=o.querySelector('[name="id"]');if(!n)return;let s=o.querySelector("#"+n.dataset.jsonProduct);if(!s)return;let i=null;try{i=JSON.parse(s.innerHTML)}catch(l){console.warn(l.message);return}var a=function(){for(var l=parseInt(n.value),u,r=0;r<i.variants.length;r++)if(i.variants[r].id===l){u=i.variants[r];break}return u};o.addEventListener("change",function(){var l=a();l.selling_plan_allocations}),t.querySelectorAll("select").forEach(function(l){l.addEventListener("change",function(u){for(var r=a(),g=r.selling_plan_allocations,m,h=0;h<g.length;h++){var _=g[h].selling_plan,b=u.target.value===_.name;b&&(m=_.id)}m=typeof m>"u"?"":m,o.querySelector('[name="selling_plan"]').value=m;let f=u.target.dataset.groupId;o.querySelector('[name="purchase_option"][value="'+f+'"]').checked=!0})}),t.querySelectorAll('[name="purchase_option"]').forEach(function(l){l.addEventListener("change",function(u){if(u.target.value=="onetime")o.querySelector('[name="selling_plan"]').value="";else{let r=o.querySelector('[name="group-option-'+u.target.value+'"]');r&&r.dispatchEvent(new Event("change"))}})})}},requestShopifyType(){return{shopify_type:"product"}},settings(){return[{params:[{type:"text",name:"title",label:"Title",options:{placeholder:"Purchase options"}},{type:"text",name:"one_time_text",label:"One time title",options:{placeholder:"One-time purchase"}},{type:"text",name:"subscription_text",label:"Subscription Text",options:{placeholder:"Subscribe and Save"}},{type:"text",name:"frequency_header",label:"Frequency Header",options:{placeholder:"Delivery Frequency"}},{type:"paragraph",content:"To see information about your subscriptions, you must be using a [subscription app from the Shopify App Store](https://apps.shopify.com/collections/checkout-subscription)."}]}]},style(){return[{group_alias:"text:spacing",options:{group_title:"Header text",group_name:"title",selector:" .ecom-product-single__selling-plan-fieldset-header"},modify:{params:{position:4,fields:{alias:"border",options:{css:{selector:"root .ecom-product-single__selling-plan-fieldset"}}}}}},{group_alias:"text:spacing",options:{group_title:"Frequency header",group_name:"frequency_header",selector:" .ecom-product-single__selling-plan-fieldset-frequency-header"}},{group_alias:"text:spacing",options:{group_title:"Frequency text",group_name:"frequency_text",selector:" .ec-selling-plan-frequency-label"}},{group_title:"Radio",group_name:"radio",selector:' .ecom-product-single__selling-plan-fieldset--input input[type="radio"]',params:[{alias:"spacing",options:{name:"spacingLabel"}},{type:"tab",name:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"},{name:"active",title:"Active"}]},css:!1},{alias:"background",options:{css:{},options:{visible:e=>e.tab==="normal"}}},{alias:"background",options:{name:"backgroundHover",css:{selector:":hover",properties:{background:""}},options:{visible:e=>e.tab==="hover"}}},{alias:"background",options:{name:"backgroundActive",css:{properties:{background:""},selector:":checked",important:!0},options:{visible:e=>e.tab==="active"}}},{type:"popup",label:"Border",name:"popup",options:{type:"border",visible:e=>e.tab==="normal"},css:{}},{type:"popup",label:"Border",name:"popupHover",options:{type:"border",visible:e=>e.tab==="hover"},css:{selector:":hover",properties:{border:""}}},{type:"popup",label:"Border",name:"popupActive",options:{type:"border",visible:e=>e.tab==="active"},css:{properties:{border:""},selector:":checked",important:!0}},{type:"dimension",label:"Border radius",name:"border-radius",options:{units:"default",type:"radius",visible:e=>e.tab==="normal"},css:{important:!0}},{type:"dimension",label:"Border radius",name:"border-radiusHover",options:{units:"default",type:"radius",visible:e=>e.tab==="hover"},css:{important:!0,selector:":hover",properties:{"border-radius":""}}},{type:"dimension",label:"Border radius",name:"border-radiusActive",options:{units:"default",type:"radius",visible:e=>e.tab==="active"},css:{selector:":checked",properties:{"border-radius":""},important:!0}},{name:"transition",type:"number",label:'Transition Duration <span class="lowercase">(ms)</span>',options:{min:0,max:5e3,visible:{keep_data:!0,condition:e=>e.tab==="hover"}},css:{properties:{transition:"all %value%ms ease"}}},{type:"line"},{alias:"spacing",options:{css:{}}}]}]},default(){return{settings:{title:"Purchase options",one_time_text:"One-time purchase"},style:{radio:{tab:"hover",popup:{"border-style":"solid","border-width":{top:"2px",left:"2px",bottom:"2px",right:"2px"},"border-color":"#8c8c8c"},"border-radius":{right:"50%",top:"50%",left:"50%",bottom:"50%"},spacing:{margin:{right:"5px",top:"5px",left:"5px",bottom:"5px"},padding:{top:"6px",left:"6px",bottom:"6px",right:"6px"}},popupHover:{"border-style":"solid","border-width":{right:"2px",top:"2px",left:"2px",bottom:"2px"},"border-color":"#0e7490"},backgroundActive:{classic:{"background-color":"#0e7490"}},transition:300},title:{textTextAlign:"left"},Radio:{textTextAlign:"left"}}}}}},hp={class:"ecom-element ecom-product-single ecom-product-single__selling-plan"},fp={class:"ecom-product-single__selling-plan-wrapper"},bp=["data-ecom-placeholder","innerHTML"];function yp(e,t,o,n,s,i){return c(),d("div",hp,[p("div",fp,[p("div",{class:S(["ecom-product-single__selling-plan-container",e.exporting?"":"ecom-placeholder-on-builder-mode"]),"data-ecom-placeholder":e.exporting?"":"This product don't have selling plans",innerHTML:e.liquid("selling_plans")},null,10,bp)])])}const vp=k(ut,[["render",yp]]);ut.__docgenInfo={exportName:"default",displayName:"ProductSellingPlan",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/SellingPlan.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const gt={name:"Product Description",mixins:[M,T,H],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["view_more_text","view_more","type","content_type"]}},computed:{css(){return`
                .ecom-product-single__description--paragraph, .ecom-product-single__description-view-more-btn {
                    overflow: hidden;
                }
                .ecom-product-single__description--paragraph[style*="max-height"] {
                    position: relative;
                }
                .ecom-product-single__description-container[data-show-type="short"] .ecom-product-single__description--paragraph[style*="max-height"]:after {
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    height: 150px;
                    background: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255))
                }
                .ecom-product-single__description-view-more-btn{
                    cursor:pointer;
                    display:block;
                }
                .ecom-product-single__description-container span {
                    display: inline;
                }
                .ecom-product-single__description--more-actions, .ecom-product-single__description--less-actions{
                    display: flex;
                    position: relative;
                    width: 100%;
                }
                .ecom-product-single__description--more-actions button, .ecom-product-single__description--less-actions button{
                    display: flex;
                    align-items: center;
                    align-content: center;
                }
            `},description_short(){return this.contentType==="text"?this.type==="short"?"short_description":"description_text":"description"},maxHeight(){var e,t;return this.contentType==="html"&&((t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.type)==="short"?this.data.settings["max-height"]:null},javascript(){return function(){if(!this.$el)return;const e=this.$el.querySelector(".ecom-product-single__description-view-more-btn"),t=this.settings.content_type,o=this.$el.querySelector(".ecom-product-single__description--full"),n=this.$el.querySelector(".ecom-product-single__description-view-less-btn"),s=this.$el.querySelector(".ecom-product-single__description--paragraph");e&&(e&&e.addEventListener("click",function(){t==="text"&&o?(o.style.display="block",s.style.display="none"):s.style.maxHeight=null,this.style.display="none",n&&(n.style.display="flex")}),n&&n.addEventListener("click",function(){e.style.display="flex",this.style.display="none",t==="text"&&o?(o&&(o.style.display="none"),s.style.display="block"):s.style.maxHeight="var(--ecom-description-height)"}))}},limit(){var e,t;return((t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.limit)&&parseInt(this.data.settings.limit)>0?parseInt(this.data.settings.limit):50},liquids(){return{description:{code:"{{product.description}}",preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-4"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-6"></div>
                                <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-2"></div>
                                <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                            </div>
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-10 big"></div>
                                <div class="ecom-skeleton-col-2 ecom-skeleton-empty big"></div>
                                <div class="ecom-skeleton-col-4"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-6"></div>
                                <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-12"></div>
                            </div>
                        </div>
                    `},description_text:{code:"{{product.description | strip_html }}",preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-4"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-6"></div>
                                <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-2"></div>
                                <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                            </div>
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-10 big"></div>
                                <div class="ecom-skeleton-col-2 ecom-skeleton-empty big"></div>
                                <div class="ecom-skeleton-col-4"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-6"></div>
                                <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-12"></div>
                            </div>
                        </div>
                    `},short_description:{code:`
                        <div>{{ product.description | strip_html | truncatewords: ${this.limit} }}</div>
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div>
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-4"></div>
                                    <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-6"></div>
                                    <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-2"></div>
                                    <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                </div>
                            </div>
                        </div>

                    `}}},settings(){return[{group_title:"Description",params:[{type:"popup",label:"Content Type",name:"content_type",options:{type:"dropdown",values:{text:"Text",html:"HTML"},default:!1}},{type:"popup",label:"Description type",name:"type",value:"short",options:{type:"dropdown",values:{short:"Short",full:"Full"},default:!1}},{type:"number",label:"Maximum words to show",name:"limit",value:"50",placeholder:"50",options:{control_width:"40%",input:!0,slider:!1,min:0,visible:function(e){return e&&e.type==="short"&&e.content_type==="text"}}},{type:"number",label:"Max height",name:"max-height",placeholder:"200",options:{units:{px:{min:0,max:1e3},vh:{min:0,max:100},vw:{min:0,max:100}},visible:function(e){return e&&e.type==="short"&&e.content_type=="html"}}},{type:"toggle",label:"Show view more",name:"view_more",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:function(e){return e.type==="short"}}},{type:"picker",label:"View more icon",name:"view_more_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:function(e){return e.view_more}}},{type:"picker",label:"View less icon",name:"view_less_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:function(e){return e.view_more}}},{type:"choose",label:"Icon position",name:"icon_position",options:{type:"align-x",values:[-1,1],visible:function(e){return e.view_more}},css:{selector:" .ecom__element--button-icon",properties:{order:""}}},{type:"number",name:"spacing",label:"Spacing",options:{responsive:!0,units:{px:{min:1,max:50,step:1}},visible:function(e){return e.view_more},reset:!1},css:{selector:"root .ecom-product-single__description--less-actions button ,root .ecom-product-single__description--more-actions button",properties:{gap:""}}},{label:"View more text button",name:"view_more_text",type:"text",options:{visible:function(e){return e.type==="short"&&e.view_more}}},{label:"View less text button",name:"view_less_text",type:"text",options:{visible:function(e){return e.type==="short"&&e.view_more}}}]}]},requestShopifyType(){return{shopify_type:"product"}},type(){var e,t,o;return(o=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.type)!=null?o:"short"},contentType(){var e,t,o;return(o=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.content_type)!=null?o:"text"},view_more(){return this.data&&this.data.settings&&"view_more"in this.data.settings?this.data.settings.view_more:!1},default(){return{settings:{type:"short",content_type:"html",limit:"50",view_more:!0,view_more_text:"View more",view_less_text:"View less","max-height":"137px",spacing:"5px",icon_position:1},style:{icon:{tab:"normal",iconFontSize:"20px"},collection_description:{textTextAlign:"left",textColor:"#6D7175",textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"14px","font-weight":"300"}},collection_view_more:{tab:"normal","align-items":"flex-start",buttonBoxShadow:{"box-shadow":{color:"rgba(255, 255, 255, 0)"}},buttonBordernormalmode:{"border-style":"none"},buttonBackgroundnormalmode:{classic:{"background-color":"rgba(255, 255, 255, 0)"}},buttonColornormalmode:"#333",buttonBackgroundhovermode:{classic:{"background-color":"rgba(255, 255, 255, 0)"}},buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"14px","text-decoration":"underline"},spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},buttonColorhovermode:"#333",transitions:{transitions:{duration:"300ms"}}},collection_view_less:{tab:"normal","align-items":"flex-start",buttonColornormalmode:"#0a0808",buttonBackgroundnormalmode:{classic:{"background-color":"rgba(250, 250, 250, 0)"}},spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},buttonBordernormalmode:{"border-style":"none"},buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"text-decoration":"underline"}}},advanced:{spacing:{margin:{top:"50px"},padding:{bottom:0}}},advanced:{"custom-css":`li {
margin-left: 20px; list-style-type: disc;
}`}}}},methods:{style(){var t,o;var e=[{group_alias:"text",options:{group_title:"Description",group_name:"collection_description",selector:" .ecom-product-single__description--paragraph, .ecom-product-single__description--full"}}];if(this.data.settings.view_more){e.push({group_alias:"button",options:{group_title:"View more",group_name:"collection_view_more",selector:" .ecom-product-single__description-view-more-btn"},modify:{position:0,params:{alias:"align-items",options:{label:"Alignment",css:{selector:"root .ecom-product-single__description--more-actions",properties:{"align-items":"","justify-content":""}}}}}}),e.push({group_alias:"button",options:{group_title:"View less",group_name:"collection_view_less",selector:" .ecom-product-single__description-view-less-btn"},modify:{position:0,params:{alias:"align-items",options:{label:"Alignment",css:{selector:"root .ecom-product-single__description--less-actions",properties:{"align-items":"","justify-content":""}}}}}});const n=[{name:"iconPrimaryColor",label:"Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{color:""}}},{name:"iconBackground",label:"Background",type:"background",options:{oneline:!0,responsive:!0},css:{properties:{background:""}}},{type:"popup",label:"Border",name:"iconBorder",options:{oneline:!0,type:"border"},css:{properties:{border:""}}},{name:"iconBoxShadow",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow"},css:{properties:{"box-shadow":""}}},{name:"iconBorderRadius",label:"Border Radius",type:"dimension",options:{responsive:!0,type:"radius",units:{"%":{min:0,max:100},px:{min:0,max:1e3}}},css:{properties:{overflow:"hidden","border-radius":""}}}];(((t=this.data.settings)==null?void 0:t.view_more_icon)||((o=this.data.settings)==null?void 0:o.view_less_icon))&&e.push({group_title:"Icon",group_name:"icon",selector:" .ecom-product-single__description-view-less-btn, .ecom-product-single__description-view-more-btn ",params:[{name:"iconFontSize",label:"Size",type:"number",options:{responsive:!0,units:{px:{min:0,max:300}}},css:{selector:" svg",properties:{height:"",width:""}}},{name:"iconTransform",label:"Rotate",type:"number",options:{responsive:!0,min:0,max:360},css:{selector:" svg",properties:{transform:"rotate(%value%deg)"}}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"}]},css:{isCss:!1}},...X(n,"normal",{selector:"  svg"}),...X(n,"hover",{selector:":hover  svg"})]})}return e}}},xp={class:"ecom-element ecom-product-single ecom-product-single__description"},wp={class:"ecom-product-single__description-wrapper"},kp=["data-show-type"],Cp={class:"ecom-product-single__description--paragraph"},Tp=["innerHTML"],Lp={key:0,class:"ecom-product-single__description--more-actions"},$p={type:"button",class:"ecom-product-single__description-view-more-btn"},Sp=["innerHTML"],Mp=["textContent"],Hp={key:0,style:{display:"none"},class:"ecom-product-single__description--full"},Bp=["innerHTML"],qp={key:0,class:"ecom-product-single__description--less-actions"},Ep={type:"button",class:"ecom-product-single__description-view-less-btn"},Dp=["innerHTML"],Ap=["textContent"],zp=["innerHTML"],jp={key:0,class:"ecom-product-single__description--more-actions"},Ip={type:"button",class:"ecom-product-single__description-view-more-btn"},Pp=["innerHTML"],Np=["textContent"],Vp={key:1,class:"ecom-product-single__description--less-actions"},Wp={type:"button",class:"ecom-product-single__description-view-less-btn",style:{display:"none"}},Op=["innerHTML"],Fp=["textContent"];function Up(e,t,o,n,s,i){var a,l,u,r;return c(),d("div",xp,[p("div",wp,[p("div",{class:"ecom-product-single__description-container","data-show-type":i.type},[i.contentType==="text"?(c(),d(D,{key:0},[p("div",Cp,[p("div",{innerHTML:e.liquid(i.description_short)},null,8,Tp),i.type==="short"&&i.view_more?(c(),d("div",Lp,[p("button",$p,[(a=o.data.settings)!=null&&a.view_more_icon?(c(),d("span",{key:0,class:"ecom__element--button-icon",innerHTML:o.data.settings.view_more_icon},null,8,Sp)):y("",!0),p("span",{textContent:I(e.lang(o.data.settings.view_more_text,"view_more_text"))},null,8,Mp)])])):y("",!0)]),i.type==="short"&&i.view_more?(c(),d("div",Hp,[p("div",{class:"ecom-product-single__description--full-content",innerHTML:e.liquid("description_text")},null,8,Bp),i.type==="short"&&i.view_more?(c(),d("div",qp,[p("button",Ep,[(l=o.data.settings)!=null&&l.view_less_icon?(c(),d("span",{key:0,class:"ecom__element--button-icon",innerHTML:o.data.settings.view_less_icon},null,8,Dp)):y("",!0),p("span",{textContent:I(e.lang(o.data.settings.view_less_text,"view_less_text"))},null,8,Ap)])])):y("",!0)])):y("",!0)],64)):(c(),d(D,{key:1},[p("div",{class:"ecom-product-single__description--paragraph",style:E({"max-height":"var(--ecom-description-height)","--ecom-description-height":i.maxHeight}),innerHTML:e.liquid(i.description_short)},null,12,zp),i.type==="short"&&i.view_more?(c(),d("div",jp,[p("button",Ip,[(u=o.data.settings)!=null&&u.view_more_icon?(c(),d("span",{key:0,class:"ecom__element--button-icon",innerHTML:o.data.settings.view_more_icon},null,8,Pp)):y("",!0),p("span",{textContent:I(e.lang(o.data.settings.view_more_text,"view_more_text"))},null,8,Np)])])):y("",!0),i.type==="short"&&i.view_more?(c(),d("div",Vp,[p("button",Wp,[(r=o.data.settings)!=null&&r.view_less_icon?(c(),d("span",{key:0,class:"ecom__element--button-icon",innerHTML:o.data.settings.view_less_icon},null,8,Op)):y("",!0),p("span",{textContent:I(e.lang(o.data.settings.view_less_text,"view_less_text"))},null,8,Fp)])])):y("",!0)],64))],8,kp)])])}const Rp=k(gt,[["render",Up]]);gt.__docgenInfo={exportName:"default",displayName:"Product Description",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/Description.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const _t={name:"ProductCountdown",docs:"https://help.ecomposer.io/docs/elements/product-elements/countdown/",presets:!0,mixins:[M,T,H],vendors:["countdown_js"],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["text_week","text_day","text_hour","text_minute","text_second","enable_progress_bar","show_countdown_on_sale","show_week","show_day","show_hour","show_minute","show_second"]}},computed:{_data(){return this.data},liquids(){var t,o;let e=new Date;return e.setDate(new Date().getDate()+3),e=`${e.getFullYear()}/${e.getMonth()+1}/${e.getDate()}`,{countdown:{code:`
                    {% if product != empty %}
                        ${this.type==="metafields"||this.type==="metafield_or_custom"?`
                        {%- assign countdown = product.metafields.ecomposer.countdown -%}
                        {%- assign countdown_from = product.metafields.ecomposer.countdown_from -%}
                        ${this.type==="metafield_or_custom"?`
                                    {%- unless countdown -%}
                                        {% capture countdown%}${this.countdown}{% endcapture %}
                                    {%- endunless -%}
                                    {%- unless countdown_from -%}
                                        {% capture countdown_from%}${this.countdown_from}{% endcapture %}
                                    {%- endunless -%}
                                `:""}
                            `:`
                            {%- assign countdown = '${this.countdown}' -%}
                            {%- assign countdown_from = '${this.countdown_from}' -%}
                            `}
                        <div data-product-id="{{product.id}}" class="ecom-product-single__countdown-time"  data-ecom-countdown="{{countdown}}"  data-ecom-countdown-from="{{countdown_from}}" data-countdown-restart="${(t=this.data.settings)!=null&&t.countdown_restart?(o=this.data.settings)==null?void 0:o.countdown_restart:"false"}"></div>
                    {% endif%}
                `,preview:`<div data-product-id="0" class="ecom-product-single__countdown-time" data-ecom-countdown="${e}"></div>`}}},settings(){return[{group_title:"General",params:[{type:"text",label:"Title",name:"title",value:"Hurry up! Sale ends in",options:{toolbar:!0},placeholder:"Hurry up! Sale ends in"},{type:"popup",label:"Type",name:"type",options:{type:"dropdown",default:!1,values:{metafields:"Metafields",custom:"Custom",metafield_or_custom:"Metafield & custom"},preview:"title"}},{name:"styleCountdown",label:"Layout",type:"popup",options:{type:"dropdown",preview:"title",default:!1,values:{column:"Vertical",row:"Horizontal"}},css:{selector:' [class*="ecom-product-single__countdown-time--"]',properties:{"flex-direction":""}}},{name:"countdown_from",type:"datetime",placeholder:"YYYY/MM/DD hh:mm",label:"Countdown start from",options:{type:"datetime",format:"YYYY/MM/DD hh:mmZ",visible:function(e){return e.type!=="metafields"}}},{name:"countdown",options:{toolbar:!1,type:"datetime",format:"YYYY/MM/DD hh:mmZ",visible:function(e){return e&&e.type==="custom"||e.type==="metafield_or_custom"}},type:"datetime",placeholder:"YYYY/MM/DD hh:mmZ",label:"Countdown end at"},{type:"toggle",name:"show_countdown_on_sale",label:"Only show when on Sale",value:!1,options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{name:"countdown_restart",label:"Restart on finish",type:"toggle",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{name:"enable_progress_bar",label:"Show progress bar",value:!0,type:"toggle",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},...["week","day","hour","minute","second"].map(e=>({name:"show_"+e,label:"Show "+e,value:!0,type:"toggle",options:{values:{on:{value:!0},off:{value:!1}}}}))]},{group_title:"Change text",options:{visible:e=>e.show_week||e.show_day||e.show_hour||e.show_minute||e.show_second},params:[{type:"text",name:"text_week",value:"[%-W] week%!W",description:"Example: [%-W] week%!W",label:"Week",options:{visible:e=>e.show_week}},{type:"text",name:"text_day",value:"[%d] day%!d",description:"Example: [%-d] day%!d",label:"Days",options:{visible:e=>e.show_day}},{type:"text",name:"text_hour",value:"[%-H] hour%!H",description:"Example:  [%-H] hour%!H",label:"Hours",options:{visible:e=>e.show_hour}},{type:"text",name:"text_minute",value:"[%-M] minute%!M",description:"Example: [%-M] minute%!M",label:"Minutes",options:{visible:e=>e.show_minute}},{type:"text",name:"text_second",value:"[%-S] second%!S",description:"Example: [%-S] second%!S",label:"Seconds",options:{visible:e=>e.show_second}}]}]},title(){return this.data&&this.data.settings&&this.data.settings.title?this.data.settings.title:""},countdown(){return this.data&&this.data.settings&&"countdown"in this.data.settings?this.data.settings.countdown:""},countdown_from(){return this.data&&this.data.settings&&"countdown_from"in this.data.settings?this.data.settings.countdown_from:""},show_countdown_on_sale(){return this.data&&this.data.settings&&"show_countdown_on_sale"in this.data.settings?this.data.settings.show_countdown_on_sale:!1},enable_progress_bar(){return this.data&&this.data.settings&&"enable_progress_bar"in this.data.settings?this.data.settings.enable_progress_bar:!1},type(){var e,t,o;return(o=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.type)!=null?o:""},shows(){return["week","day","hour","minute","second"].filter(t=>{var o,n;return(n=(o=this.data)==null?void 0:o.settings)==null?void 0:n["show_"+t]})},javascript(){return function(){var e=this.$el,t=this.isLive,o=e.querySelector(".ecom-product-single__countdown-time"),n=e.querySelector(".ecom-product-single__countdown-progress-bar"),s=e.querySelector(".ecom-product-single__countdown-progress-bar--timer"),i=o?o.getAttribute("data-ecom-countdown-from"):0,a=o&&o.dataset.countdownRestart?o.dataset.countdownRestart:!1,l=e.querySelector(".ecom-product-single__countdown-container");let u=o?l.dataset:{},r=l.dataset.shows.split(",");const g=/\[([^\]]+)\]/gm;var m="";if(r.indexOf("week")>=0&&u.week){let f="",v=u.week.replace(g,(...x)=>(f=x[1],""));m+=`<div class="ecom-product-single__countdown-time--week"><span class="ecom-product-single__countdown-number">
                            ${f}
                        </span>
                        <span class="ecom-product-single__countdown-text">
                            ${v}
                        </span>
                    </div>`}if(r.indexOf("day")>=0&&u.day){let f="",v=u.day.replace(g,(...x)=>(f=x[1],""));m+=`<div class="ecom-product-single__countdown-time--day">
                                    <span class="ecom-product-single__countdown-number">${f}</span>
                                    <span class="ecom-product-single__countdown-text">
                                        ${v}
                                    </span>
                                </div> `}if(r.indexOf("hour")>=0&&u.hour){let f="",v=u.hour.replace(g,(...x)=>(f=x[1],""));m+=`<div class="ecom-product-single__countdown-time--hour">
                                    <span class="ecom-product-single__countdown-number">
                                        ${f}
                                    </span>
                                    <span class="ecom-product-single__countdown-text">
                                        ${v}
                                    </span>
                            </div>  `}if(r.indexOf("minute")>=0&&u.minute){let f="",v=u.minute.replace(g,(...x)=>(f=x[1],""));m+=`<div class="ecom-product-single__countdown-time--minute">
                                    <span class="ecom-product-single__countdown-number">
                                        ${f}
                                    </span>
                                    <span class="ecom-product-single__countdown-text">
                                        ${v}
                                    </span>
                                </div>`}if(r.indexOf("second")>=0&&u.second){let f="",v=u.second.replace(g,(...x)=>(f=x[1],""));m+=`<div class="ecom-product-single__countdown-time--second">
                                    <span class="ecom-product-single__countdown-number">
                                        ${f}
                                    </span>
                                    <span class="ecom-product-single__countdown-text">
                                        ${v}
                                    </span>
                                </div>`}function h(f){if(this.innerHTML=f.strftime(m),n&&i){let v=new Date().getTime(),x=new Date(i),C=x.getTime(),L=f.finalDate.getTime();if(C<v&&L>C){n.style.display="inherit";let w=L-C,$=L-v,q=Math.round($*100/w);s.style.width=q+"%"}else n.style.display="none"}f.type==="finish"&&a!="true"&&_()}function _(){o&&t&&(o.closest(".ecom-block.ecom-core").style.display="none")}if(o&&o.getAttribute("data-ecom-countdown")){let f=o.getAttribute("data-ecom-countdown-from");if(!(f&&new Date().getTime()<new Date(parseInt(f)).getTime())){let v=new Date(o.getAttribute("data-ecom-countdown"));if(window.EComCountdown){let x=new Date(o.dataset.ecomCountdown).getTime()-new Date(o.dataset.ecomCountdownFrom).getTime(),C=new Date(o.dataset.ecomCountdown).getTime()+x;if(x==0)return;window.EComCountdown(o,v,{}),o.addEventListener("update.ecom.countdown",h),o.addEventListener("finish.ecom.countdown",function(L){if(a=="true"){for(;C<new Date().getTime();)C+=x;window.EComCountdown(o,new Date(C),h)}})}}}let b=this.$el.closest(".ecom-product-form--single");if(b&&!t){let f=b.querySelector('[name="id"]');f&&f.dispatchEvent(new window.Event("ecomUpdate"))}}},css(){return`
                    .ecom-product-single__countdown-container{
                        display:flex;
                    }
                    .ecom-product-single__countdown-progress-bar{
                        display:block;
                        width:100%;
                    }
                    .ecom-product-single__countdown-progress-bar .ecom-product-single__countdown-progress-bar--timer{
                        width:100%;
                        display:block;
                    }
                    .ecom-product-single__countdown-time{
                        display: inline-flex;
                        flex-wrap: wrap;
                        justify-content:inherit;
                    }
                    .ecom-product-single__countdown-time > div{
                        display:inline-flex;
                        gap:6px;
                        padding:10px;
                        border:1px solid #eee;
                        justify-content: center;
                        align-items: center;
                    }
                    .ecom-product-single__countdown-block .ecom-product-single__countdown-time > div span{
                        width:100%;
                    }

                    .ecom-product-single__countdown-progress-bar--timer {
                            background-image: -webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
                            background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,rgba(0,0,0,0) 25%,rgba(0,0,0,0) 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,rgba(0,0,0,0) 75%,rgba(0,0,0,0));
                            -webkit-animation: 2s linear infinite ecom_progress_bar;
                            animation: 2s linear infinite ecom_progress_bar;
                            background-size: 60px 60px;
                            transition: width 1s;
                            -webkit-transition: width 1s;
                    }

                    @-webkit-keyframes ecom_progress_bar {
                        from {
                            background-position: 0 0
                        }

                        to {
                            background-position: 40px 0
                        }
                    }

                    @keyframes ecom_progress_bar {
                        from {
                            background-position: 0 0
                        }

                        to {
                            background-position: 40px 0
                        }
                    }

                `},requestShopifyType(){return{shopify_type:"product"}},default(){let e=new Date;e.setDate(e.getDate()+6);let t=e.getMonth(),o=e.getFullYear(),n=e.getDate();return{settings:{title:"Hurry up! Sale ends in",show_countdown_on_sale:!1,enable_progress_bar:!0,show_week:!0,show_day:!0,show_hour:!0,show_minute:!0,show_second:!0,text_week:"[%-W] week%!W",text_day:"[%d] day%!d",text_hour:"[%-H] hour%!H",text_minute:"[%-M] minute%!M",text_second:"[%-S] second%!S",type:"custom",countdown_from:`${o}/${t}/01 12:30+0700`,countdown:`${o}/${t+1}/${n} 12:30+0700`,styleCountdown:"column"},style:{progess_bar:{background:{classic:{"background-color":"rgba(17, 24, 39, 0.1)"}},backgroundActive:{classic:{"background-color":"rgba(166, 0, 11, 0.97)"}},tab:"active",maxWidth:"100%",height:"20px",borderRadius:{top:"5px",left:"5px",bottom:"5px",right:"5px"},spacing:{margin:{right:"2px",top:"2px",left:"2px",bottom:"2px"},padding:{}},borderRadiusActive:{right:"0px",top:"5px",left:"5px",bottom:"0px"}},title:{textTextAlign:"center",spacing:{margin:{bottom:"8px"}}},countdown_number:{buttonColor:"#dc2626","text-align":"center"},items:{spacing:{margin:{right:"8px",bottom:"8px"}},width:"95px","justify-content":"center"},countdown_label:{"text-align":"center"}}}}},watch:{shows:{deep:!0,handler(){this._data.refresh=this.$helpers.randid()}}},methods:{style(){let e=[{group_alias:"text:spacing",options:{group_name:"title",group_title:"Title",selector:" .ecom-product-single__countdown-title"}},{group_alias:"box",options:{group_title:"Items",group_name:"items",selector:' [class*="ecom-product-single__countdown-time--"]'},modify:{params:[{position:0,fields:[{type:"number",label:"Width",name:"width",options:{units:{px:{min:20,max:200}},reset:!1,responsive:!0},css:{properties:{width:""}}},{type:"number",label:"Height",name:"height",options:{units:{px:{min:20,max:200}},reset:!1,responsive:!0},css:{properties:{height:""}}}]},{position:2,fields:{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-product-single__countdown-container"}}}},{position:10,fields:{alias:"spacing"}}]}},{group_alias:"button:label",options:{group_name:"countdown_number",group_title:"Number",selector:" .ecom-product-single__countdown-number"},modify:this.data.settings.styleCountdown=="column"?{params:{alias:"text-align",options:{label:"Alignment"}}}:{}},{group_alias:"button:label",options:{group_name:"countdown_label",group_title:"Label",selector:" .ecom-product-single__countdown-text"},modify:this.data.settings.styleCountdown=="column"?{params:{alias:"text-align",options:{label:"Alignment"}}}:{}}];return this.data.settings.enable_progress_bar&&e.push({group_name:"progess_bar",group_title:"Progress bar",selector:" .ecom-product-single__countdown-progress-bar",params:[{type:"number",name:"maxWidth",label:"Width",options:{responsive:!0,reset:!0,units:{"%":{min:0,max:100},px:{min:0,max:1e3},vw:{min:0,max:100}}},css:{properties:{"max-width":""}}},{type:"number",name:"height",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3},vh:{min:0,max:100}}},css:{selector:" .ecom-product-single__countdown-progress-bar--timer",properties:{height:"","--ecom-countdown-max-height":""}}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"active",title:"Active"}]},css:{isCss:!1}},{type:"background",label:"Background",name:"background",options:{oneline:!0,visible:{keep_data:!0,condition:t=>t.tab==="normal"}},css:{properties:{background:""}}},{type:"dimension",name:"borderRadius",label:"Border radius",options:{type:"radius",units:"default",visible:{keep_data:!0,condition:t=>t.tab==="normal"}},css:{properties:{"border-radius":""}}},{type:"background",label:"Background",name:"backgroundActive",options:{oneline:!0,visible:{keep_data:!0,condition:t=>t.tab==="active"}},css:{selector:" .ecom-product-single__countdown-progress-bar--timer",properties:{background:""}}},{type:"dimension",name:"borderRadiusActive",label:"Border radius",options:{type:"radius",units:"default",visible:{keep_data:!0,condition:t=>t.tab==="active"}},css:{selector:" .ecom-product-single__countdown-progress-bar--timer",properties:{"border-radius":""}}},{alias:"spacing"}]}),e}}},Yp=["data-show-on-sale"],Gp={class:"ecom-product-single__countdown-wrapper"},Jp=["innerHTML"],Zp=["data-week","data-day","data-hour","data-minute","data-second","data-shows","innerHTML"],Kp={key:1,class:"ecom-product-single__countdown-progress-bar"},Xp=p("div",{class:"ecom-product-single__countdown-progress-bar--timer"},null,-1),Qp=[Xp];function em(e,t,o,n,s,i){return c(),d("div",{class:"ecom-element ecom-product-single ecom-product-single__countdown","data-show-on-sale":i.show_countdown_on_sale},[p("div",Gp,[i.title?(c(),d("div",{key:0,class:"ecom-product-single__countdown-title ecom-html",innerHTML:e.lang(i.title,"countdown_title")},null,8,Jp)):y("",!0),p("div",{class:S(["ecom-product-single__countdown-container",o.data.settings.styleCountdown=="column"?"ecom-product-single__countdown-block":""]),"data-week":e.lang(o.data.settings.text_week,"text_week"),"data-day":e.lang(o.data.settings.text_day,"text_day"),"data-hour":e.lang(o.data.settings.text_hour,"text_hour"),"data-minute":e.lang(o.data.settings.text_minute,"text_minute"),"data-second":e.lang(o.data.settings.text_second,"text_second"),"data-shows":i.shows,innerHTML:e.liquid("countdown")},null,10,Zp),i.enable_progress_bar?(c(),d("div",Kp,Qp)):y("",!0)])],8,Yp)}const tm=k(_t,[["render",em]]);_t.__docgenInfo={exportName:"default",displayName:"ProductCountdown",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/Countdown.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const ht={name:"ProductRating",mixins:[T,M,H],data(){return{faStars:lo}},props:{data:{type:Object,default(){return{}}}},computed:{review_platform(){var t,o,n;const e=this.$store.getters["settings/appSettings"];return((t=e.apps)==null?void 0:t.app_review)&&((o=e.apps)==null?void 0:o.app_review)!="none"?(n=e.apps)==null?void 0:n.app_review.replace("-"," "):""},liquids(){return{review_platform:{code:`
                            {%- assign review_platform = shop.metafields.ecomposer.app_review.value -%}
                            {{review_platform | replace: '-', ' '}}
                        `,preview:""},rating:{code:`
                        {%- if review_platform -%}
                            {%- case review_platform -%}
                                {%- when 'none' -%}
                                    <div class="ecom-theme-app-extensions-skeleton">
                                        <p>Please select the rating platform in settings</p>
                                    </div>
                                {%- when 'ali-reviews' -%}
                                    <div product-id="{{ product.id }}" class="alr-display-review-badge"></div>
                                {%- when 'opinew-reviews' -%}
                                    <div id='opinew-stars-plugin-product'>{% render 'opinew_review_stars_product' product:product %}</div>
                                {%- when 'judgeme' -%}
                                    {% render 'judgeme_widgets', widget_type: 'judgeme_preview_badge', jm_style: '', concierge_install: true,  product: product -%}
                                {%- when 'product-reviews-addon' -%}
                                    <span class="stamped-product-reviews-badge stamped-main-badge" data-id="{{ product.id }}" data-product-sku="{{ product.handle }}" style="display: inline-block;">{{- product.metafields.stamped.badge -}}</span>
                                {%- when 'areviews-aliexpress'-%}
                                    <div class="areviews_header_stars"></div>
                                {%- when 'loox'-%}
                                    <a href="#looxReviews">
                                        <div class="loox-rating" data-id="{{ product.id }}" data-rating="{{ product.metafields.loox.avg_rating }}" data-raters="{{ product.metafields.loox.num_reviews }}"></div>
                                    </a>
                                {% when 'ryviu'%}
                                    {%- if EComBuilderMode == true -%}
                                        <div class="ecom-theme-app-extensions-skeleton">
                                            <div class="ecom-app-extension-info">
                                                <span class="ecom-theme-app-extension-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M364.2 267.2l-104.8-15.28L212.6 156.7C208.7 148.8 200.7 143.9 191.9 143.9C183.2 143.8 175.1 148.8 171.4 156.7L124.5 251.1L19.71 267.2C.9566 269.9-6.618 293.1 7.007 306.5l75.87 74l-17.1 104.6c-1.25 6.75 .5878 13.51 4.963 18.63C74.22 509 80.64 512 87.52 512c3.625 0 7.436-.9554 10.69-2.705l93.79-49.38l93.74 49.38c3.25 1.625 6.991 2.675 10.62 2.675c6.75 0 13.23-2.97 17.61-8.22c4.25-5.125 6.273-11.98 5.148-18.61L301.2 380.5l75.92-74C390.6 293 383.1 269.1 364.2 267.2zM266.7 369.3l17.62 103.1l-92.5-48.75l-92.5 48.75l17.62-103.1L42.22 296.1l103.4-15l46.38-93.88l46.13 93.88l103.5 15L266.7 369.3zM256 112h64v64C320 184.8 327.2 192 336 192S352 184.8 352 176v-64h64c8.844 0 16-7.156 16-16s-7.154-15.1-15.1-15.1L352 80v-64C352 7.156 344.8 0 336 0S320 7.156 320 16v64l-63.99 .0022C247.2 80 240 87.16 240 96S247.2 112 256 112zM496 208h-32v-32c0-8.844-7.155-15.1-15.1-15.1S432 167.2 432 176v32h-32c-8.844 0-15.1 7.162-15.1 16.01S391.2 240 400 240h32v32c0 8.844 7.158 16.01 16 16.01S464 280.8 464 272v-32h32c8.844 0 16-7.151 16-15.99S504.8 208 496 208z"/></svg>
                                                </span>
                                                <span class="ecom-theme-app-extension-title" style="margin-left: 5px">Ryviu</span>
                                            </div>
                                            <div class="ecom-placeholder-on-builder-mode" data-ecom-placeholder="The rating element will display when published to Online store"></div>
                                        </div>
                                    {%- else -%}
                                        <div class="review-widget">
                                            <ryviu-widget-total
                                                reviews_data="{{product.metafields.ryviu.product_reviews_info  | escape  }}"
                                                product_id="{{product.id}}" handle="{{product.handle}}">
                                            </ryviu-widget-total>
                                        </div>
                                    {%- endif -%}
                                {%- when 'yotpo-social-reviews' -%}
                                    <div class="yotpo bottomLine" style="display:inline-block" data-product-id="{{ product.id }}"> </div>
                                {%- when 'aliexpress-reviews-importer'-%}
                                    <div id="shop_booster_rate_6" product-id="{{ product.id }}"></div>
                                {%- when 'rivyo-product-review'-%}
                                    <div class="wc_product_review_badge" data-handle="{{ product.handle }}" data-product_id="{{ product.id }}"></div>
                                {%-when 'growave' -%}
                                    {% capture the_snippet_review_avg %}{% render 'ssw-widget-avg-rate-profile', product: product %}{% endcapture %}
                                        {% unless the_snippet_review_avg contains 'Liquid error' %}
                                        {{ the_snippet_review_avg }}
                                    {% endunless %}
                                {%- when 'smart-aliexpress-reviews'-%}
                                    <a href="#scm-reviews-importer">
                                        <div id="scm-product-detail-rate" class="scm-reviews-rate" data-rate-version2= {{ product.metafields.scm_review_importer.reviewsData.reviewCountInfo | json}}>
                                        </div>
                                    </a>
                                {%- when 'photo-reviews' -%}
                                    <div id='opinew-stars-plugin-product'>{% render 'opinew_review_stars_product' product:product %}</div>
                                {%- when 'product-reviews' -%}
                                    <span class="shopify-product-reviews-badge" data-id="{{ product.id }}"></span>
                                {%- when 'rivyo' -%}
                                    <div class="wc_product_review_badge" data-handle="{{ product.handle }}" data-product_id="{{ product.id }}"></div>
                                {%- when 'trustoo' -%}
                                    <div class="custom-vstar-rating-widget" product-id="{{ product.id }}"></div>
                                {%- when 'ali-product-review' -%}
                                    <div product-id="{{ product.id }}" class="alr-display-review-badge"></div>
                                {% else %}
                                <p>The rating platform not supported</p>
                            {%-endcase-%}
                        {%- else -%}
                             <div class="ecom-theme-app-extensions-skeleton">
                                <p>Please select the rating platform in settings</p>
                            </div>
                        {%- endif -%}
                        `,preview:`
                            <div class="ecom-skeleton-item">
                                <div>
                                    <div class="ecom-skeleton-row">
                                        <div class="ecom-skeleton-col-4"></div>
                                        <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                        <div class="ecom-skeleton-col-6"></div>
                                        <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                        <div class="ecom-skeleton-col-2"></div>
                                        <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                    </div>
                                </div>
                            </div>
                        `}}},settings(){return[{params:[{type:"paragraph",content:"Show rating for currrent product. Select the rating platform [here](#settings/app_settings/apps)"}]}]},style(){return[{group_name:"rating_align",group_title:"Alignment",selector:" .ecom-product-single__rating .ecom-product-single__rating-container",params:[{type:"choose",label:"Alignment",name:"rating_align",options:{oneline:!0,responsive:!0,type:"text-align",values:["left","center","right"]},css:{properties:{"text-align":""}}}]}]},javascript(){return window.exporting?function(){}:function(){let e=this.$el;if(!!e&&(!this.isLive||e.closest(".ecom-quickview"))){let t=e.querySelector(".ecom-product-single__rating-wrapper");if(t&&t.dataset.reviewPlatform)switch(t.dataset.reviewPlatform){case"product-reviews":if(window.SPR)try{window.SPR.$=window.jQuery,window.SPR.initDomEls(),window.SPR.loadBadges()}catch(o){console.info(o.message)}break;case"judgeme":if(window.jdgm){try{window.jdgm.batchRenderBadges()}catch(o){console.info(o.message)}e.querySelectorAll('[data-average-rating="0.00"]').forEach(function(o){o.style.display="block !important"})}break;case"product-reviews-addon":window.StampedFn&&window.StampedFn.loadBadges();break}}}},css(){return`

                `},requestShopifyType(){return{shopify_type:"product"}},default(){return{settings:{},style:{}}}},methods:{}},om={class:"ecom-element ecom-product-single ecom-product-single__rating"},im=["data-review-platform"],nm={key:0,class:"ecom-theme-app-extensions-skeleton"},sm={class:"ecom-app-extension-info"},am={class:"ecom-theme-app-extension-icon"},rm=["textContent"],lm=p("div",{class:"ecom-placeholder-on-builder-mode","data-ecom-placeholder":"The rating element will display when published to Online store"},null,-1),cm=["innerHTML"];function pm(e,t,o,n,s,i){const a=N("ecom-icon");return c(),d("div",om,[p("div",{class:"ecom-product-single__rating-wrapper","data-review-platform":e.liquid("review_platform")},[e.exporting!==!0&&i.review_platform?(c(),d("div",nm,[p("div",sm,[p("span",am,[R(a,{class:"w-5 h-5",icon:s.faStars},null,8,["icon"])]),p("span",{class:"ecom-theme-app-extension-title",style:{"margin-left":"5px"},textContent:I(i.review_platform)},null,8,rm)]),lm])):(c(),d("div",{key:1,class:"ecom-product-single__rating-container",innerHTML:e.liquid("rating")},null,8,cm))],8,im)])}const mm=k(ht,[["render",pm]]);ht.__docgenInfo={exportName:"default",displayName:"ProductRating",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/Rating.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const ft={name:"ProductReviewForm",mixins:[M,T,H],data(){return{faComments:co}},props:{data:{type:Object,default(){return{}}}},computed:{review_platform(){var t,o,n;const e=this.$store.getters["settings/appSettings"];return((t=e.apps)==null?void 0:t.app_review)&&((o=e.apps)==null?void 0:o.app_review)!="none"?(n=e.apps)==null?void 0:n.app_review.replace("-"," "):""},liquids(){return{review_platform:{code:"{%- assign review_platform = shop.metafields.ecomposer.app_review.value -%}{{review_platform}}",preview:""},review:{code:`
                        {%- if review_platform and review_platform != 'none' -%}
                            {%- if EComBuilderMode == true -%}
                                <div class="ecom-theme-app-extensions-skeleton">
                                    <div class="ecom-app-extension-info">
                                        <span class="ecom-theme-app-extension-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M416 176C416 78.8 322.9 0 208 0S0 78.8 0 176c0 41.48 17.07 79.54 45.44 109.6c-15.17 32.34-38.65 58.07-38.95 58.38c-6.514 6.836-8.309 16.91-4.568 25.67C5.754 378.4 14.26 384 23.66 384c54.19 0 97.76-20.73 125.9-39.17C168.1 349.4 187.7 352 208 352C322.9 352 416 273.2 416 176zM208 320c-16.96 0-34.04-2.098-50.75-6.232L143.7 310.4L132 318.1c-20.43 13.38-51.58 28.99-89.85 32.97c9.377-12.11 22.3-30.63 32.24-51.82l9.242-19.71L68.72 263.7C44.7 238.2 32 207.9 32 176C32 96.6 110.1 32 208 32S384 96.6 384 176S305 320 208 320zM606.4 435.4C627.6 407.1 640 372.9 640 336C640 238.8 554 160 448 160c-.3145 0-.6191 .041-.9336 .043C447.5 165.3 448 170.6 448 176c0 5.43-.4668 10.76-.9414 16.09C447.4 192.1 447.7 192 448 192c88.22 0 160 64.6 160 144c0 28.69-9.424 56.45-27.25 80.26l-13.08 17.47l11.49 18.55c6.568 10.61 13.18 19.74 18.61 26.74c-18.26-1.91-36.45-6.625-54.3-14.09l-12.69-5.305l-12.58 5.557C495.9 475 472.3 480 448 480c-75.05 0-137.7-46.91-154.9-109.7c-10.1 3.336-20.5 6.132-31.2 8.271C282.7 455.1 357.1 512 448 512c29.82 0 57.94-6.414 83.12-17.54C555 504.5 583.7 512 616.3 512c9.398 0 17.91-5.57 21.73-14.32c3.74-8.758 1.945-18.84-4.568-25.67C633.3 471.8 619.6 456.8 606.4 435.4z"/></svg>
                                        </span>
                                        <span class="ecom-theme-app-extension-title" style="margin-left: 5px">{{review_platform | replace: '_', ' ' | replace: '-', ' '}}</span>
                                    </div>
                                    {%- if review_platform != 'ali-reviews' -%}
                                        <div class="ecom-placeholder-on-builder-mode" data-ecom-placeholder="The review element will display when published to Online store"></div>
                                    {%- else -%}
                                        <div class="ecom-placeholder-on-builder-mode" data-ecom-placeholder="The review platform not supported"></div>
                                    {%- endif -%}
                                </div>
                            {%- else -%}
                                {%- case review_platform -%}
                                    {%- when 'none' -%}
                                        <div class="ecom-theme-app-extensions-skeleton">
                                            <p>Please select the integrated review app platform in settings</p>
                                        </div>
                                    {%- when 'ali-reviews' -%}
                                        <div id="shopify-ali-review" product-id="{{ product.id }}"> {{- shop.metafields.review_collector.review_code -}}</div>
                                    {%- when 'opinew-reviews' -%}
                                    <div style="clear:both;"></div><div id="opinew-reviews-product-page-code" class="opw-widget-wrapper-default">
                                        <span id="opinew-plugin" data-server-address="https://api.opinew.com"
                                            data-opw-prodreviews="{{ product.metafields.opinew_metafields['product_plugin'] }}"
                                            data-opinew-shop-id="{{ shop.id }}" data-shop-url="{{shop.domain}}"
                                            data-platform-product-id="{{product.id}}">
                                         <span id="opinew_product_plugin_app"></span>
                                        </span>
                                    </div>
                                    {%- when 'judgeme' -%}
                                        {%- render 'judgeme_widgets', widget_type: 'judgeme_review_widget', concierge_install: true, product: product -%}
                                    {%- when 'product-reviews-addon' -%}
                                    <div id="stamped-main-widget"
                                        data-widget-style="standard"
                                        data-product-id="{{ product.id }}"
                                        data-name="{{ product.title | escape }}"
                                        data-url="{{ shop.url }}{{ product.url }}"
                                        data-image-url="{{ product.featured_image | product_img_url: "large" |replace: '?', '%3F' | replace: '&','%26'}}"
                                        data-description="{{ product.description | escape }}"
                                        data-product-sku="{{product.handle}}"
                                        data-widget-language="{{ language }}">
                                    </div>

                                    {%- when 'areviews-aliexpress'-%}
                                        <div class="page-full">{%- render 'aliexpress_reviews',  product: product-%}</div>
                                    {%- when 'loox'-%}
                                        <div id="looxReviews" data-product-id="{{product.id}}" >{{- product.metafields.loox.reviews -}}</div>
                                    {% when 'ryviu'%}
                                        <div class="lt-block-reviews">
                                            <ryviu-widget product_id="{{product.id}}" handle="{{product.handle}}" title_product="{{product.title}}" image_product="{{ product.featured_image.src | img_url: '100x' }}"></ryviu-widget>
                                        </div>
                                    {%- when 'yotpo-social-reviews' -%}
                                        <div class="yotpo yotpo-main-widget" data-product-id="{{ product.id }}" data-name="{{ product.title | escape }}" data-url="{{ shop.url }}{{ product.url }}" data-image-url="{{ product.featured_image | product_img_url: "large" |replace: '?', '%3F' | replace: '&','%26'}}" data-description="{{ product.description | escape }}"></div>
                                    {%- when 'aliexpress-reviews-importer'-%}
                                        <div id="shopbooster-ali" product-id="{{ product.id }}" ></div>
                                    {%- when 'rivyo-product-review'-%}
                                        <div id="wc_review_section" class="wc_review_main_content" data-url="{{ shop.url }}" data-handle="{{ product.handle }}" data-product_id="{{ product.id }}" data-limit="0"></div>
                                    {%- when 'ali-reviews' -%}
                                        <div class="ecom-theme-app-extensions-skeleton">
                                            <p>The review platform not supported</p>
                                        </div>
                                    {%-when 'growave' -%}
                                        {% capture the_snippet_reviews %}{% render 'socialshopwave-widget-recommends' with 1, product: product %}{% endcapture %}
                                            {% unless the_snippet_reviews contains 'Liquid error' %}
                                            {{ the_snippet_reviews }}
                                        {% endunless %}
                                    {%- when 'smart-aliexpress-reviews'-%}
                                        {% render "reviews-importer"  product: product%}
                                    {%- when 'photo-reviews' -%}
                                        <div style="clear:both;"></div>
                                            <div id="opinew-reviews-product-page-code" class="">
                                                <span id="opinew-plugin" data-server-address="https://www.opinew.com" data-opw-prodreviews="{{ product.metafields.opinew_metafields['product_plugin'] }}" data-opinew-shop-id="{{ shop.id }}" data-shop-url="{{shop.domain}}" data-platform-product-id="{{product.id}}">
                                                <span id="opinew_product_plugin_app"></span>
                                                </span>
                                            </div>
                                    {%- when 'product-reviews' -%}
                                        <div id="shopify-product-reviews" data-id="{{product.id}}">{{- product.metafields.spr.reviews -}}</div>
                                    {%- when 'lai-reviews' -%}
                                        {%- if EComBuilderMode -%}
                                            <div class="ecom-placeholder-on-builder-mode" data-ecom-placeholder="Lai review form will display when published to Online store"></div>
                                        {%- endif -%}
                                        <div class="scm-container custom" style="display: none;">
                                            <div id="scm-reviews-importer" class="scm-reviews-importer">
                                                <iframe id="scm-reviews-importer-iframe" width="100%">
                                            </iframe>
                                            </div>
                                            </div>
                                        {% render "reviews-importer",product : product %}
                                    {%- when 'rivyo' -%}
                                        <div id="wc_review_section" class="wc_review_main_content" data-url="{{ shop.url }}" data-handle="{{ product.handle }}" data-product_id="{{ product.id }}" data-limit="0"></div>
                                    {%- when 'trustoo' -%}
                                        <div class="custom-vstar-review-widget" style="width:100%"></div>
                                    {% else %}
                                    <div class="ecom-theme-app-extensions-skeleton">
                                        <p>The reivew platform not supported</p>
                                    </div>
                                {%-endcase-%}
                            {%- endif -%}
                        {%- else -%}
                            <div class="ecom-theme-app-extensions-skeleton">
                                <p>Please select the integrated review app platform in settings</p>
                            </div>
                        {%- endif -%}
                        `,preview:`
                            <div class="ecom-skeleton-item">
                                <div class="ecom-skeleton-col-2">
                                    <div class="ecom-skeleton-avatar"></div>
                                </div>

                                <div>
                                    <div class="ecom-skeleton-row">
                                        <div class="ecom-skeleton-col-4"></div>
                                        <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                        <div class="ecom-skeleton-col-6"></div>
                                        <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                        <div class="ecom-skeleton-col-2"></div>
                                        <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                    </div>
                                </div>

                                <div class="ecom-skeleton-col-12">
                                    <div class="ecom-skeleton-picture"></div>
                                    <div class="ecom-skeleton-row">
                                        <div class="ecom-skeleton-col-10 ecom-skeleton-big"></div>
                                        <div class="ecom-skeleton-col-2 ecom-skeleton-empty ecom-skeleton-big"></div>
                                        <div class="ecom-skeleton-col-4"></div>
                                        <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                        <div class="ecom-skeleton-col-6"></div>
                                        <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                        <div class="ecom-skeleton-col-12"></div>
                                    </div>
                                </div>

                            </div>
                        `}}},settings(){return[{params:[{type:"paragraph",content:"Display product reviews and review forms for current products. You can select a integrated review app platform [here](#settings/app_settings/apps)"}]}]},javascript(){return function(){let e=this.$el,t=e.querySelector(".ecom-product-single__review-wrapper");if(t&&t.dataset.reviewPlatform&&!this.isLive)switch(t.dataset.reviewPlatform){case"product-reviews":if(window.SPR)try{window.SPR.$=window.jQuery,window.SPR.initDomEls(),window.SPR.loadProducts()}catch(o){console.info(o.message)}break;case"judgeme":window.jdgm&&typeof window.jdgm.initializeWidgets=="function"&&window.jdgm.initializeWidgets();break;case"product-reviews-addon":window.StampedFn&&window.StampedFn.init();break;case"yotpo-social-reviews":break;case"lai-reviews":typeof SMARTIFYAPPS<"u"&&window.SMARTIFYAPPS.rv.installed&&window.SMARTIFYAPPS.rv.scmReviewsRate.actionCreateReviews();break}}},style(){return[{group_alias:"text",options:{group_title:"Typography",group_name:"review_typo",selector:" .ecom-product-single__review-container"}}]},css(){return`

                        .ecom-product-single__review-container .spr-summary.rte{
                            display: inline-flex;
                            gap: 10px;

                        }
                        .ecom-product-single__review-container  #shopify-product-reviews{
                            margin: 0;
                        }
                `},requestShopifyType(){return{shopify_type:"product"}}},methods:{}},dm={class:"ecom-element ecom-product-single ecom-product-single__review"},um=["data-review-platform"],gm={key:0,class:"ecom-theme-app-extensions-skeleton"},_m={class:"ecom-app-extension-info"},hm={class:"ecom-theme-app-extension-icon"},fm=["textContent"],bm=p("div",{class:"ecom-placeholder-on-builder-mode","data-ecom-placeholder":"The review element will display when published to Online store"},null,-1),ym=["innerHTML"];function vm(e,t,o,n,s,i){const a=N("ecom-icon");return c(),d("div",dm,[p("div",{class:"ecom-product-single__review-wrapper","data-review-platform":e.liquid("review_platform")},[e.exporting!==!0&&i.review_platform?(c(),d("div",gm,[p("div",_m,[p("span",hm,[R(a,{class:"w-5 h-5",icon:s.faComments},null,8,["icon"])]),p("span",{class:"ecom-theme-app-extension-title",style:{"margin-left":"5px"},textContent:I(i.review_platform)},null,8,fm)]),bm])):(c(),d("div",{key:1,class:"ecom-product-single__review-container",innerHTML:e.liquid("review")},null,8,ym))],8,um)])}const xm=k(ft,[["render",vm]]);ft.__docgenInfo={exportName:"default",displayName:"ProductReviewForm",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/Review.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const bt={name:"ProductWishlist",mixins:[M,T,H],props:{data:{type:Object,default(){return{}}}},computed:{classes(){return this.data&&this.data.settings&&this.data.settings.classes?this.data.settings.classes:""},heading(){return this.data&&this.data.settings&&this.data.settings.tag?this.data.settings.tag:"h3"},liquids(){return{wishlist_app:{code:"{%- assign wishlist_app = shop.metafields.ecomposer.app_wishlist.value -%}{{wishlist_app}}",preview:""},wishlist:{code:`{%- if wishlist_app -%}
                            {%- assign variant_selected = product.selected_or_first_available_variant -%}
                            {%- case wishlist_app -%}
                                {% when 'growave'%}
                                    {% capture the_snippet_fave %}{% render 'socialshopwave-widget-fave' with product:product %}{% endcapture %}
                                    {% unless the_snippet_fave contains 'Liquid error' %}
                                        {{ the_snippet_fave }}
                                    {% else %}
                                        {% capture the_snippet_fave_icon %}{% include 'ssw-widget-faveicon' with product.id, product:product%}{% endcapture %}
                                        {% unless the_snippet_fave_icon contains 'Liquid error' %}
                                            {{ the_snippet_fave_icon }}
                                        {% endunless %}
                                    {% endunless %}
                                {%- when 'swym-relay' -%}
                                    <div class="swym-wishlist-button-bar"></div>
                                    <button class="${this.exporting?"swym-loaded":""} swym-button swym-add-to-wishlist-view-product product_{{product.id}}" data-swaction="addToWishlist" data-product-id="{{product.id | json}}" ></button>
                                {%- when 'wishlist-wishify' -%}
                                    {% if EComBuilderMode %}
                                        <div id="ZlistWishlist" data-product-id="{{product.id}}" data-handle = "{{product.handle}}"
                                        data-image="{{product.featured_image | img_url: "360x"}}"  data-variantname="{{product.selected_or_first_available_variant.title}}" data-title="{{product.title}}" data-variant="{{product.selected_or_first_available_variant.id}}" data-price="{{product.selected_or_first_available_variant.price | remove: "." | remove: "," | divided_by: 100.0 }}"></div>
                                        <script type="text/ecom-custom-js"  src="https://zooomyapps.com/wishlist/ListWishlistProduct.js" data-product-id="{{product.id}}" data-shop-id="{{shop.permanent_domain}}" data-customer-id="{{customer.id}}" ><\/script>
                                    {% else %}
                                        {% capture ZooomyListWishlistProduct%}
                                            {% render 'ZooomyListWishlistProduct', product: product %}
                                        {% endcapture %}
                                        {% unless ZooomyListWishlistProduct contains 'Liquid error' %}
                                            {{ ZooomyListWishlistProduct }}
                                        {% endunless %}
                                    {% endif %}
                                {%- when 'wishlist-hero' -%}
                                    {% capture wishlisthero %}
                                        {% render 'wishlisthero-custom-button' product: product %}
                                     {% endcapture %}
                                     {% unless wishlisthero contains 'Liquid error' %}
                                            {{ wishlisthero }}
                                    {% endunless %}
                                {%- else -%}
                            {%- endcase -%}
                        {%- endif -%}`,preview:`
                            <div class="ecom-skeleton-item">
                                <div>
                                    <div class="ecom-skeleton-row">
                                        <div class="ecom-skeleton-col-4"></div>
                                        <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                        <div class="ecom-skeleton-col-6"></div>
                                        <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                        <div class="ecom-skeleton-col-2"></div>
                                        <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                    </div>
                                </div>
                            </div>
                        `}}},settings(){return[{params:[{type:"paragraph",content:"Show add to wishlist button you must install the app first and after that select the wishlist app [here](#settings/app_settings/apps)"}]}]},javascript(){return this.exporting?function(){}:function(){let e=this.$el,t=e.querySelector(".ecom-product-single__wishlist-container");if(t)switch(t.dataset.wishlistApp){case"swym-relay":window._swat&&window._swat.initializeActionButtons(".swym-add-to-wishlist-view-product");break;case"wishlist-wishify":var o=document.createElement("script");o.src="https://zooomyapps.com/wishlist/ListWishlistProduct.js",window.document.head.appendChild(o);break;case"wishlist-hero":var n=e.querySelector(".ecom-product-single-wishlist"),s=new CustomEvent("wishlist-hero-add-to-custom-element",{detail:n});document.dispatchEvent(s);break}}},requestShopifyType(){return{shopify_type:"product"}},css(){return""}}},wm={class:"ecom-element ecom-product-single ecom-product-single__wishlist"},km={class:"ecom-product-single__wishlist-wrapper"},Cm=["data-wishlist-app","data-ecom-placeholder","innerHTML"];function Tm(e,t,o,n,s,i){return c(),d("div",wm,[p("div",km,[p("div",{class:S(["ecom-product-single__wishlist-container",e.exporting?"":"ecom-placeholder-on-builder-mode"]),"data-wishlist-app":e.liquid("wishlist_app"),"data-ecom-placeholder":e.exporting?"":"Please select wishlist app in settings",innerHTML:e.liquid("wishlist")},null,10,Cm)])])}const Lm=k(bt,[["render",Tm]]);bt.__docgenInfo={exportName:"default",displayName:"ProductWishlist",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/Wishlist.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const yt={name:"ProductPaymentMethod",mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){return{payment_methods:{code:`
                        {%- for type in shop.enabled_payment_types -%}
                            <li class="ecom-product-single__payment-method-item">
                            {{ type | payment_type_svg_tag: class: 'ecom-product-single__payment-method-svg' }}
                            </li>
                        {%- endfor -%}
                    `,preview:`
                    <div class="ecom-skeleton-item">
                        <div>
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-4"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-6"></div>
                                <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-2"></div>
                                <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                            </div>
                        </div>
                    </div>
                `}}},settings(){return[{params:[{type:"number",name:"spacing",label:"Spacing",options:{responsive:!0,units:{px:{min:0,max:50}}},css:{selector:" .ecom-product-single__payment-method-list",properties:{gap:""}}},{type:"textarea",name:"message",label:"Message",value:"Guarantee safe & secure checkout",options:{height:80,toolbar:"short"}}]}]},message(){return this.data&&this.data.settings&&this.data.settings.message?this.data.settings.message:""},style(){return[{group_title:"Payment",group_name:"payment_group",selector:" .ecom-product-single__playment-method-wrapper .ecom-product-single__payment-method-list",params:[{type:"choose",label:"Alignment",name:"justify-content",value:"left",options:{oneline:!0,responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]}},{name:"spacing",type:"dimension",label:"Spacing",options:{responsive:!0,units:"default"}}]},{group_alias:"text:spacing",options:{group_title:"Label",group_name:"payment_text",selector:" .ecom-product-single__playment-method-wrapper .ecom-product-single-payment-method-content"}}]},css(){return`
                .ecom-product-single__payment-method-list{
                    padding:0;
                    display:flex;
                    flex-wrap:wrap;
                }
                .ecom-product-single__payment-method-list li{
                    display:inline-flex;
                }
                 
            `},default(){return{settings:{message:"Guarantee safe & secure checkout"},style:{payment_group:{"justify-content":"flex-start"}}}}},methods:{}},$m={class:"ecom-element ecom-product-single ecom-product-single__payment-method"},Sm={class:"ecom-product-single__playment-method-wrapper"},Mm={class:"ecom-product-single-payment-method-container"},Hm=["data-ecom-placeholder","innerHTML"],Bm=["innerHTML"];function qm(e,t,o,n,s,i){return c(),d("div",$m,[p("div",Sm,[p("div",Mm,[p("div",null,[p("ul",{class:S(["ecom-product-single__payment-method-list",e.exporting?"":"ecom-placeholder-on-builder-mode"]),role:"list","data-ecom-placeholder":e.exporting?"":"Your site don't have any payment methods",innerHTML:e.liquid("payment_methods")},null,10,Hm)]),p("p",{class:"ecom-product-single-payment-method-content",innerHTML:e.lang(i.message,"payment_methods_message")},null,8,Bm)])])])}const Em=k(yt,[["render",qm]]);yt.__docgenInfo={exportName:"default",displayName:"ProductPaymentMethod",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/PaymentMethod.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const vt={name:"Product Inventory",mixins:[T,H,M],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["inventory_text","unavailable_text","incoming_date_text","show_next_incoming_date","when_less_than"]}},computed:{element_id(){return this.data.id},liquids(){var t;let e="script";return{inventory:{code:`
                                {%-liquid
                                    if use_variant
                                        assign target = product.selected_or_first_available_variant
                                    else
                                        assign target = product
                                    endif

                                     assign stock_class = 'ecom-product-single-status--instock'
                                    if target.available == false
                                        assign stock_class = 'ecom-product-single-status--outstock'
                                    endif
                                -%}
                                <p
                                    class="ecom-product-single__inventory-status {{stock_class}}"
                                    data-product_id = "{{product.id}}"
                                    data-instock-text="${this.lang(this.data.settings.instock_text,"instock_text")}"
                                    data-outstock-text="${this.lang(this.data.settings.outstock_text,"outstock_text")}"
                                    data-inventory-text="${this.lang(this.data.settings.inventory_text,"inventory_text")}"
                                    data-show-less-than="${this.data.settings.when_less_than}"
                                    data-preorder-text="${this.lang((t=this.data.settings)==null?void 0:t.preorder_text,"preorder_text")}"
                                    data-show-next-incoming-date="${this.data.settings.show_next_incoming_date}"
                                    data-unavailable-text="${this.data.settings.unavailable_text}"
                                    data-incoming-date-text="${this.data.settings.incoming_date_text}"
                                >
                                    ${this.lang(this.data.settings.instock_text,"instock_text")}
                                </p>
                        `,preview:`<div class="ecom-skeleton-item ecom__row">
                                <div class="ecom-skeleton-col-12 ecom-col-12">
                                    <div class="ecom-skeleton-row">
                                        <div class="ecom-skeleton-col-8 ecom-skeleton-big"></div>
                                    </div>
                                </div>
                            </div>`},product_json:{code:`
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
                        <${e} type="application/json" id="inventory-product-json-{{product.id}}-${this.element_id}">
                            {{ ecom_product_json }}
                        </${e}>
                        `,preview:`<${e} id="product-json-preview">{}</${e}>`}}},settings(){return[{params:[{type:"text",label:"Instock label",name:"instock_text",value:"",placeholder:"Instock"},{type:"text",label:"Outstock label",name:"outstock_text",value:"",placeholder:"Outstock"},{type:"text",name:"unavailable_text",label:"Unavailable text"},{type:"text",name:"preorder_text",label:"PreOrder text"},{type:"text",label:"Inventory label",name:"inventory_text",placeholder:"{quantity} in stock"},{type:"number",label:"Show product inventory when less than",name:"when_less_than",description:"Set 0 to disable",options:{min:0,max:9999}},{type:"toggle",name:"show_next_incoming_date",label:"Show next incoming date",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"textarea",label:"Next incoming date text",name:"incoming_date_text",placeholder:"Variant is out of stock. The product will available at: {next_incoming_date}",options:{height:80}},{name:"enable_progress_bar",label:"Show progress bar",value:!0,type:"toggle",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}}]}]},style(){let e=[{group_alias:"box",options:{group_title:"General",group_name:"genetal",selector:" .ecom-product-single__inventory-container"},modify:{params:{alias:"justify-content",options:{label:"Alignment"}},remove:{index:1,length:1}}},{group_alias:"button:label",options:{group_title:"Instock text",group_name:"instock",selector:" .ecom-product-single-status--instock"}},{group_alias:"button:label",options:{group_title:"Outstock text",group_name:"outstock",selector:" .ecom-product-single-status--outstock"}},{group_alias:"button:label",options:{group_title:"Unavailable text",group_name:"unavailable",selector:" .ecom-product-single-status--unavailable"}},{group_alias:"button:label",options:{group_title:"Preorder text",group_name:"preorder",selector:" .ecom-product-single-status--preorder"}}];return this.data.settings.enable_progress_bar&&e.push({group_name:"progess_bar",group_title:"Progress bar",selector:" .ecom-product-single__inventory-progress-bar",params:[{type:"number",name:"maxWidth",label:"Width",options:{responsive:!0,reset:!0,units:{"%":{min:0,max:100},px:{min:0,max:1e3},vw:{min:0,max:100}}},css:{properties:{"max-width":""}}},{type:"number",name:"height",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3},vh:{min:0,max:100}}},css:{selector:" .ecom-product-single__inventory-progress-bar--timer",properties:{height:"","--ecom-inventory-max-height":""}}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"active",title:"Active"}]},css:{isCss:!1}},{type:"background",label:"Background",name:"background",options:{oneline:!0,visible:{keep_data:!0,condition:t=>t.tab==="normal"}},css:{properties:{background:""}}},{type:"dimension",name:"borderRadius",label:"Border radius",options:{type:"radius",units:"default",visible:{keep_data:!0,condition:t=>t.tab==="normal"}},css:{properties:{"border-radius":""}}},{type:"background",label:"Background",name:"backgroundActive",options:{oneline:!0,visible:{keep_data:!0,condition:t=>t.tab==="active"}},css:{selector:" .ecom-product-single__inventory-progress-bar--timer",properties:{background:""}}},{type:"dimension",name:"borderRadiusActive",label:"Border radius",options:{type:"radius",units:"default",visible:{keep_data:!0,condition:t=>t.tab==="active"}},css:{selector:" .ecom-product-single__inventory-progress-bar--timer",properties:{"border-radius":""}}},{alias:"spacing"}]}),e},requestShopifyType(){return{shopify_type:"product"}},css(){return`
                    .ecom-product-single__inventory-status{
                        display:inline-block;
                        overflow:hidden;
                    }
                    .ecom-product-single__inventory-container{
                        display:flex;
                        flex-wrap:wrap;
                    }
                    .ecom-product-single__inventory-container .ecom-product-single__inventory-status {
                        margin:0;
                        padding:0;
                    }
                    .ecom-product-single__inventory-progress-bar {
                        display:none;
                        width:100%;
                    }
                     .ecom-builder .ecom-product-single__inventory-progress-bar{
                        display: block;
                    }
                    .ecom-product-single__inventory-progress-bar .ecom-product-single__inventory-progress-bar--timer{
                        width:30%;
                        display:block;
                    }
                    .ecom-product-single__inventory-progress-bar--timer {
                            background-image: -webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
                            background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,rgba(0,0,0,0) 25%,rgba(0,0,0,0) 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,rgba(0,0,0,0) 75%,rgba(0,0,0,0));
                            -webkit-animation: 2s linear infinite ecom_progress_bar;
                            animation: 2s linear infinite ecom_progress_bar;
                            background-size: 60px 60px;
                            transition: width 1s;
                            -webkit-transition: width 1s;
                    }

                    @-webkit-keyframes ecom_progress_bar {
                        from {
                            background-position: 0 0
                        }

                        to {
                            background-position: 40px 0
                        }
                    }

                    @keyframes ecom_progress_bar {
                        from {
                            background-position: 0 0
                        }

                        to {
                            background-position: 40px 0
                        }
                    }
                `},javascript(){return this.exporting?function(){}:function(){const e=this.$el;if(!e)return;let t=e.closest(".ecom-product-form--single"),o=e.querySelector(".ecom-product-single__inventory-progress-bar"),n=e.querySelector(".ecom-product-single__inventory-progress-bar--timer");function s(h){if(o){const _=e.querySelector(".ecom-product-single__inventory-status");if(_)if(_.dataset.showLessThan&&h.inventory_management){const b=parseInt(_.dataset.showLessThan);if(h.inventory_quantity>0&&b&&h.inventory_quantity<=b){o.style.display="block";let f=Math.round(h.inventory_quantity/b*100);n.style.width=f+"%"}else o.style.display="none"}else o.style.display="none"}}function i(h){const _=e.querySelector(".ecom-product-single__inventory-status");if(_)if(!h)_.innerHTML=_.dataset.unavailableText,_.classList.add("ecom-product-single-status--unavailable"),_.classList.remove("ecom-product-single-status--outstock","ecom-product-single-status--instock","ecom-product-single-status--preorder");else if(!h.available)h.next_incoming_date&&_.dataset.showNextIncomingDate&&_.dataset.showNextIncomingDate==="true"&&_.dataset.incomingDateText?_.innerHTML=_.dataset.incomingDateText.replace(/\{.*\}/g,h.next_incoming_date):_.innerHTML=_.dataset.outstockText,_.classList.add("ecom-product-single-status--outstock"),_.classList.remove("ecom-product-single-status--instock","ecom-product-single-status--unavailable","ecom-product-single-status--preorder");else if(h.inventory_policy==="continue"&&h.inventory_quantity<1){if(_.innerHTML=_.dataset.preorderText,_.classList.add("ecom-product-single-status--preorder"),_.classList.remove("ecom-product-single-status--outstock","ecom-product-single-status--unavailable","ecom-product-single-status--instock"),h.next_incoming_date&&_.dataset.showNextIncomingDate&&_.dataset.showNextIncomingDate==="true"&&_.dataset.incomingDateText){const b=document.createElement("p"),f=document.createElement("p");f.innerHTML=h.next_incoming_date;const x=(f.querySelector("time")?f.querySelector("time").innerHTML:"").split("at")[0];b.innerHTML=_.dataset.incomingDateText.replace(/\{.*\}/g,x),_.appendChild(b)}}else{if(_.dataset.showLessThan&&h.inventory_management){const b=parseInt(_.dataset.showLessThan);b&&h.inventory_quantity<=b?_.innerHTML=_.dataset.inventoryText.replace(/\{.*\}/g,h.inventory_quantity):_.innerHTML=_.dataset.instockText}else _.innerHTML=_.dataset.instockText;_.classList.add("ecom-product-single-status--instock"),_.classList.remove("ecom-product-single-status--outstock","ecom-product-single-status--unavailable","ecom-product-single-status--preorder")}}if(!t)return;let a=t.querySelector("select[name=id]");const l=e.querySelector(".ecom-product-single__inventory-status");if(!l)return;const u=l.dataset.product_id;if(!u)return;let r=null,g=t.querySelector("[id^=product-json-"+u+"]");if(g||(g=t.querySelector("[id^=inventory-product-json-"+u+"]")),!g)return;try{r=JSON.parse(g.innerHTML)}catch{return}let m=r.variants[0];i(m),s(m),a&&a.addEventListener("change",function(){let h=this.value;if(!h)return;let _=r.variants.find(b=>b.id==h);_&&(i(_),s(_))})}},default(){return{settings:{enable_progress_bar:!0,instock_text:"Instock",outstock_text:"Outstock",inventory_text:"{quantity} in stock",when_less_than:100,show_next_incoming_date:!0,preorder_text:"Preorder text",unavailable_text:"Unavailable",incoming_date_text:"Variant is out of stock. The product will available at: {next_incoming_date}"},style:{progess_bar:{tab:"normal",height:"15px",background:{classic:{"background-color":"#c7b1b1"}},backgroundActive:{classic:{"background-color":"#e34949"}}},genetal:{"justify-content":"flex-start"}}}}}},Dm={class:"ecom-element ecom-product-single ecom-product-single__inventory"},Am={class:"ecom-product-single__inventory-wrapper"},zm=["innerHTML"],jm={key:0,class:"ecom-product-single__inventory-progress-bar"},Im=p("div",{class:"ecom-product-single__inventory-progress-bar--timer"},null,-1),Pm=[Im],Nm=["innerHTML"];function Vm(e,t,o,n,s,i){var a;return c(),d("div",Dm,[p("div",Am,[p("div",{class:"ecom-product-single__inventory-container",innerHTML:e.liquid("inventory")},null,8,zm),(a=o.data.settings)!=null&&a.enable_progress_bar?(c(),d("div",jm,Pm)):y("",!0),e.exporting?y("",!0):(c(),d("div",{key:1,class:"ecom-product-single_inventory-variant",innerHTML:e.liquid("product_json")},null,8,Nm))])])}const Wm=k(vt,[["render",Vm]]);vt.__docgenInfo={exportName:"default",displayName:"Product Inventory",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/Inventory.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const xt={name:"ProductVisitor",presets:!0,mixins:[H,T],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["text","interval","min","max"]}},computed:{settings(){return[{params:[{type:"paragraph",content:"Display a fake the number of people viewing your product page."},{type:"number",label:"Minimum number of visitors",name:"min",value:100,placeholder:100,options:{min:1,max:200},description:"Minimum visitors number must be less than maximum visitors"},{type:"number",label:"Maximum number of visitors",name:"max",value:100,placeholder:100,options:{min:1,max:200},decription:"Maximum visitors number must be greater than minimum visitors"},{type:"number",label:"Change count number every(second)",name:"interval",value:5,options:{min:1,max:120},description:"Set the time to set new visitor counter"},{type:"textarea",label:"Text",name:"text",value:"",description:"The text shows the number of visitors online. Example: {people} are viewing this right now",options:{toolbar:"full"}},{type:"picker",name:"icon",label:"Icon",options:{oneline:!0,type:"icon",layout:"grid",output:"value",multiple:!1}},{type:"choose",label:"Alignment",name:"textTextAlign",options:{oneline:!0,responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{selector:" .ecom-product-single__visitor-container",properties:{"justify-content":""}}}]}]},text(){return this.data&&this.data.settings&&this.data.settings.text?this.data.settings.text:""},interval(){return this.data&&this.data.settings&&this.data.settings.interval?this.data.settings.interval:""},javascript(){return function(){let e=this.$el.querySelector(".ecom-product-single__visitor-content");console.log(e);function t(o,n){return Math.floor(Math.random()*(n-o))+o}if(e&&e.dataset.text){let o=parseInt(this.settings.max),n=parseInt(this.settings.min),s=parseInt(this.settings.interval);o=isNaN(o)?120:o,n=isNaN(n)?2:n,n=n>o?0:n,s=isNaN(s)?5:s,s=s*1e3;const i=function(){let a=t(n,o),l=e.dataset.text.replace(/\{.*\}/g,a);e.innerHTML=l};i(),setInterval(i,s)}}},css(){return`
                .ecom-product-single__visitor-container {
                    display: flex;
                    align-items:center;
                    column-gap: 10px;

                }
                .ecom-product-single__visitor-icon{
                    display:inline-flex;
                }
                .ecom-product-single__visitor-icon svg{
                    width:28px;
                    height:auto
                }
            `},default(){return{settings:{min:76,max:137,interval:5,text:"{people} are viewing this right now",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"></path></svg>'}}}},methods:{style(){let e=[{group_alias:"text:spacing",options:{group_title:"Text",group_name:"text",selector:" .ecom-product-single__visitor-content"}}];return this.data.settings.icon&&e.unshift({group_alias:"icon:hover",options:{group_name:"iconGeneral",group_title:"Icon",selector:" .ecom-product-single__visitor-icon"},modify:{params:[{position:0,fields:{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-icon"}}}},{position:30,fields:{alias:"spacing"}}]}}),e}}},Om={class:"ecom-element ecom-product-single ecom-product-single__visitor"},Fm={class:"ecom-product-single__visitor-wrapper"},Um={class:"ecom-product-single__visitor-container"},Rm=["innerHTML"],Ym=["data-text"];function Gm(e,t,o,n,s,i){return c(),d("div",Om,[p("div",Fm,[p("div",Um,[o.data.settings.icon?(c(),d("div",{key:0,class:"ecom-product-single__visitor-icon",innerHTML:o.data.settings.icon},null,8,Rm)):y("",!0),p("div",{class:"ecom-product-single__visitor-content","data-text":e.lang(i.text,"visitor_text")},null,8,Ym)])])])}const Jm=k(xt,[["render",Gm]]);xt.__docgenInfo={exportName:"default",displayName:"ProductVisitor",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:`{
    
}`}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/Visitor.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const wt={name:"ProductVariantAttribute",mixins:[M,T,H],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["sku_text","barcode_text"]}},computed:{css(){return`

                .ecom-product-single__variant-attributes-container span {
                    display: inline-block
                }
            `},liquids(){return{sku:{code:"{% if variant_selected.sku %}{{variant_selected.sku}}{% else %}N/A{%endif%}",preview:"SKU-123"},barcode:{code:"{% if variant_selected.barcode %}{{variant_selected.barcode}}{% else %}N/A{%endif%}",preview:"123-456-789"}}},requestShopifyType(){return{shopify_type:"product"}},javascript(){return function(){if(!this.isLive){let e=this.$el.closest(".ecom-product-form--single");if(e){let t=e.querySelector('[name="id"]');t&&t.dispatchEvent(new window.Event("ecomUpdate"))}}}},settings(){return[{params:[{type:"text",label:"Sku text",name:"sku_text"},{type:"text",label:"Barcode text",name:"barcode_text"}]}]},style(){return[{group_alias:"box",options:{group_title:"General",group_name:"general"},modify:{params:{type:"choose",label:"Alignment",name:"text-align",options:{oneline:!0,responsive:!0,type:"text-align",values:["left","center","right"]},css:{selector:" .ecom-product-single__variant-attributes-container"}}}},{group_alias:"text:spacing",options:{group_title:"Label",group_name:"Label",selector:" .ecom-product-single__variant-attributes--label"},modify:{remove:{index:0,length:1}}},{group_alias:"text:spacing",options:{group_title:"Text",group_name:"Text",selector:" .ecom-product-single__variant-attributes--text"},modify:{remove:{index:0,length:1}}}]},default(){return{settings:{sku_text:"Sku:",barcode_text:"Barcode:"},style:{general:{"text-align":"left"},Label:{spacing:{margin:{right:"10px",bottom:"4px"}}},Text:{spacing:{margin:{bottom:"4px"}}}}}}},methods:{}},Zm={class:"ecom-element ecom-product-single ecom-product-single__variant-attributes"},Km={class:"ecom-product-single__variant-attributes-wrapper"},Xm={class:"ecom-product-single__variant-attributes-container"},Qm=["data-text"],ed=["innerHTML"],td=["innerHTML"],od=["data-text"],id=["innerHTML"],nd=["innerHTML"];function sd(e,t,o,n,s,i){var a;return c(),d("div",Zm,[p("div",Km,[p("div",Xm,[p("div",{class:"ecom-product-single__variant-attributes--sku","data-text":e.lang(o.data.settings.sku_text,"sku_text")},[p("span",{class:"ecom-product-single__variant-attributes--label",innerHTML:e.lang(o.data.settings.sku_text,"sku_text")},null,8,ed),p("span",{class:"ecom-product-single__variant-attributes--text",innerHTML:e.liquid("sku")},null,8,td)],8,Qm),(a=o.data.settings)!=null&&a.barcode_text?(c(),d("div",{key:0,class:"ecom-product-single__variant-attributes--barcode","data-text":e.lang(o.data.settings.barcode_text,"barcode_text")},[p("span",{class:"ecom-product-single__variant-attributes--label",innerHTML:e.lang(o.data.settings.barcode_text,"barcode_text")},null,8,id),p("span",{class:"ecom-product-single__variant-attributes--text",innerHTML:e.liquid("barcode")},null,8,nd)],8,od)):y("",!0)])])])}const ad=k(wt,[["render",sd]]);wt.__docgenInfo={exportName:"default",displayName:"ProductVariantAttribute",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/VariantAttribute.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const kt={name:"ProductMetafield",mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){return{metafields:{code:`${this.code}`,preview:`
                            <div class="ecom-skeleton-item">
                                <div>
                                    <div class="ecom-skeleton-row">
                                        <div class="ecom-skeleton-col-4"></div>
                                        <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                        <div class="ecom-skeleton-col-6"></div>
                                        <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                        <div class="ecom-skeleton-col-2"></div>
                                        <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                    </div>
                                </div>
                            </div>
                        `}}},settings(){return[{params:[{type:"textarea",label:"Metafield namespace and key",name:"code",value:"{{ product.metafields.ecomposer.countdown }}",options:{toolbar:!1},placeholder:"{{ product.metafields.ecomposer.countdown }}"}]}]},code(){return this.data&&this.data.settings&&this.data.settings.code?this.data.settings.code:""},requestShopifyType(){return{shopify_type:"product"}},style(){return[{group_alias:"text:spacing",options:{group_title:"",selector:" .ecom-product-single__metafield-container"},modify:{params:{type:"paragraph",content:"** Text **"}}}]},default(){return{settings:{code:"{{ product.metafields.ecomposer.countdown }}"},style:{textSpacing:{textTextAlign:"left"}}}}},methods:{}},rd={class:"ecom-element ecom-product-single ecom-product-single__metafield"},ld={class:"ecom-product-single__metafield-wrapper"},cd=["innerHTML"];function pd(e,t,o,n,s,i){return c(),d("div",rd,[p("div",ld,[p("div",{class:"ecom-product-single__metafield-container",innerHTML:e.liquid("metafields")},null,8,cd)])])}const md=k(kt,[["render",pd]]);kt.__docgenInfo={exportName:"default",displayName:"ProductMetafield",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/Metafield.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Ct={name:"ProductPickupAvailability",mixins:[M,H,T],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){var e;return{product_available:{code:"{% unless product.available%} ecom-force-show {% endunless%}",preview:""},pickup_availabilities:{code:`
                    {%- unless product_variant -%}
                        {%- assign product_variant = product.selected_or_first_available_variant -%}
                    {%- endunless -%}
                    {%- if product.available-%}
                    <!--EComposer-custom-liquid-pickup-->
                    {%- capture pickup_icon -%}<span class="ecom-icon-pickup-available">${this.data.settings.icon?this.data.settings.icon.value:""}</span>{%- endcapture -%}
                    {%- capture unavailable_icon -%}<span class="ecom-icon-pickup-unavailable">${(e=this.data.settings)!=null&&e.unavailable_icon?this.data.settings.unavailable_icon.value:""}</span>{%-endcapture -%}

                    <div class="ecom-product-single__pickup-availability-items">
                            {% if product_variant.available %}
                                {%- assign pick_up_availabilities = product_variant.store_availabilities | where: 'pick_up_enabled', true -%}
                                {%- if pick_up_availabilities.size > 0 -%}
                                    <div class="ecom-product-single__pickup-availability-item" data-variant_id="{{product_variant.id}}">
                                    <div class="ecom-product-single__pickup-availability-info">
                                        {%- assign closest_location = pick_up_availabilities.first -%}
                                        {%- if closest_location.available -%}
                                            <div class="ecom-product-single__pickup-availability-content">
                                                <div class="ecom-product-single__pickup-availability--icon">
                                                    {%- liquid
                                                        if closest_location.available
                                                                echo pickup_icon
                                                        else
                                                            echo unavailable_icon
                                                        endif
                                                    -%}
                                                </div>
                                                <p class="ecom-product-single__pickup-availability-info--caption-large">
                                                    ${this.lang(this.data.settings.pick_up_available_at_html,"pick_up_available_at_html",{location_name:"closest_location.location.name"})}
                                                </p>
                                                <p class="ecom-product-single__pickup-availability-info--caption">{{ closest_location.pick_up_time }}</p>
                                            </div>

                                            <div class="ecom-product-single__pickup-availability-container-button ecom-button-default">
                                                <button type="button" class="ecom-product-single__pickup-availability--button">
                                                    {%- if pick_up_availabilities.size == 1 -%}
                                                        ${this.lang(this.data.settings.view_store_info,"view_store_info")}
                                                    {%- else -%}
                                                        ${this.lang(this.data.settings.check_other_stores,"check_other_stores")}
                                                    {%- endif -%}
                                                </button>
                                            </div>

                                        {%- else -%}
                                        <div class="ecom-product-single__pickup-availability-content">
                                                <div class="ecom-product-single__pickup-availability--icon">
                                                    {%- liquid
                                                        assign closest_location = pick_up_availabilities.first
                                                        if closest_location.available
                                                                echo pickup_icon
                                                        else
                                                            echo unavailable_icon
                                                        endif
                                                    -%}
                                                </div>
                                                <p class="ecom-product-single__pickup-availability-info--caption-large">
                                                    ${this.lang(this.data.settings.pick_up_unavailable_at_html,"pick_up_unavailable_at_html",{location_name:"closest_location.location.name"})}
                                                </p>
                                        </div>

                                            <div class="ecom-product-single__pickup-availability-container-button ecom-button-default">
                                                <button type="button" class="ecom-product-single__pickup-availability--button" >
                                                    {%- if pick_up_availabilities.size == 1 -%}
                                                        ${this.lang(this.data.settings.view_store_info,"view_store_info")}
                                                    {%- else -%}
                                                        ${this.lang(this.data.settings.check_other_stores,"check_other_stores")}
                                                    {%- endif -%}
                                                </button>
                                            </div>
                                        {%- endif -%}
                                    </div>
                                    <div class="ecom-product-single__pickup-availability--detail">
                                        <div class="ecom-product-single__pickup-modal__content" style="${this.styleAnimation}">
                                            <div class="ecom-product-single__pickup-close-modal" title="Close">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                                </svg>
                                            </div>

                                                <div class="pickup-availability-header">
                                                    <h2 class="ecom-product-single__pickup-availability--title">{{ product_variant.product.title | escape }}</h2>
                                                    {%- unless product_variant.product.has_only_default_variant -%}
                                                        <p class="ecom-product-single__pickup-availability--variant">
                                                            {%- for product_option in product_variant.product.options_with_values -%}
                                                            {{ product_option.name | escape }}:&nbsp;
                                                            {%- for value in product_option.values -%}
                                                                {%- if product_option.selected_value == value -%}
                                                                <span>{{ value | escape }}</span>
                                                                {%- endif -%}
                                                            {%- endfor -%}
                                                            {%- unless forloop.last -%},&nbsp;{%- endunless forloop.last -%}
                                                            {%- endfor -%}
                                                        </p>
                                                        {%- endunless -%}
                                                </div>
                                                <div class="ecom-product-single__pickup-availability--content">
                                                        <ul class="ecom-product-single__pickup-availability--list" role="list">
                                                            {%- for availability in pick_up_availabilities -%}
                                                                <li class="ecom-product-single__pickup-availability--list-item">
                                                                <h3 class="ecom-product-single__pickup-availability--list-item-heading">{{ availability.location.name | escape }}</h3>

                                                                <p class="ecom-product-single__pickup-availability--list-item-caption-large">
                                                                    {%- if availability.available -%}
                                                                        {{ pickup_icon }} ${this.lang(this.data.settings.pick_up_available,"pick_up_available")}, {{ availability.pick_up_time | downcase }}
                                                                    {% else %}
                                                                        {{ unavailable_icon }} ${this.lang(this.data.settings.pick_up_unavailable_at_html,"pick_up_unavailable_at_html",{location_name:"availability.location.name"})}
                                                                    {%- endif -%}
                                                                </p>

                                                                {%- assign address = availability.location.address -%}
                                                                <address class="ecom-product-single__pickup-availability--list-item-address">
                                                                    {{ address | format_address }}
                                                                    {%- if address.phone.size > 0 -%}
                                                                    <p>{{ address.phone }}</p>
                                                                    {%- endif -%}
                                                                </address>
                                                                </li>
                                                            {%- endfor -%}
                                                            </ul>
                                                    </div>
                                        </div>

                                        </div>
                                    </div>
                                {%- endif -%}
                            {% endif %}
                    </div>
                    <!--/ECom-custom-liquid-pickup-->
                    {%- endif -%}
                `,preview:`
                    <div class="ecom-skeleton-item">
                        <div>
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-4"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-6"></div>
                                <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-2"></div>
                                <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                            </div>
                        </div>

                        <div class="ecom-skeleton-col-12">
                            <div class="ecom-skeleton-picture"></div>
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-10 ecom-skeleton-big"></div>
                                <div class="ecom-skeleton-col-2 ecom-skeleton-empty ecom-skeleton-big"></div>
                                <div class="ecom-skeleton-col-4"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-6"></div>
                                <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-12"></div>
                            </div>
                        </div>
                    </div>
                `}}},settings(){return[{group_title:"General",params:[{type:"paragraph",content:"**Notice**: This feature only work properly when published"},{type:"picker",name:"icon",label:"Location available icon",options:{type:"icon",oneline:!0,multiple:!1}},{type:"picker",name:"unavailable_icon",label:"Location unavailable icon",options:{oneline:!0,type:"icon",multiple:!1}},{name:"position",label:"Popup position",type:"choose",options:{oneline:!0,type:"align-x",values:["left","right"]}},{type:"paragraph",content:"You can set up the option for customers to pick up their online orders at your retail store, curbside, or any location that you choose.[Learn more](https://help.shopify.com/en/manual/shipping/setting-up-and-managing-your-shipping/local-methods/local-pickup)"}]},{group_title:"Change text",params:[{type:"text",name:"view_store_info",label:"View store information"},{type:"text",name:"check_other_stores",label:"Check availability at other stores"},{type:"text",name:"pick_up_available",label:"Pickup available"},{type:"text",name:"pick_up_available_at_html",label:"Pickup available at",description:'Pickup available at <span class="ecom-color-foreground">{{ location_name }}</span>'},{type:"text",name:"pick_up_unavailable_at_html",label:"Pickup unavailable at",description:'Pickup unavailable at <span class="ecom-color-foreground">{{ location_name }}</span>'}]}]},css(){return`
                .ecom-pickup-availability-popup {
                z-index: 999 !important;
            }
                .ecom-product-single__pickup-availability--detail{
                    position:fixed;
                    top:0px;
                    left:0px;
                    bottom:0px;
                    right:0px;
                    z-index:1000;
                }
                .ecom-product-single__pickup-availability-content{
                    display:flex;
                    align-items:center;
                    gap:10px;
                    margin-bottom:10px;
                }
                .ecom-product-single__pickup-modal__content{
                    max-width:450px;
                    position:absolute;
                    width:100%;
                    top:0;
                    bottom:0;
                    padding:35px 25px;
                    transition:all linear .3s;
                    overflow:auto;
                }
                .ecom-product-single__pickup-close-modal{
                    display:flex;
                    position:absolute;
                    top:0px;
                    right:0;
                    cursor:pointer;

                    align-items: center;
                    justify-content: center;
                }
                .ecom-product-single__pickup-close-modal svg{
                    width:100%;
                    height:100%;
                }

                .ecom-product-single__pickup-availability--icon> span,
                .ecom-product-single__pickup-availability--icon{
                    display:inline-flex;
                }
                .ecom-icon-pickup-available{
                    display:inline-flex;
                }
                .ecom-icon-pickup-unavailable{
                    display:inline-flex;
                }
                .ecom-product-single__pickup-availability-item,
                .ecom-product-single__pickup-availability-container-button{
                    display:flex;
                }



                .ecom-product-single__pickup-availability--detail{
                    display:none;
                }
                .ecom-product-single__pickup-availability--detail.show-modal{
                    display:block;
                }

                @keyframes leftright {
                    from  {opacity: 0; transform:translateX(-100%)}
                    to  {opacity: 1; transform:translateX(0)}
                }
                @keyframes rightleft {
                    from  {opacity: 0; transform:translateX(100%)}
                    to  {opacity: 1; transform:translateX(0)}
                }
                .ecom-pickup-availability-popup >div{
                    display:none
                }

                .ecom-product-single__pickup-availability--list-item-caption-large {
                    display: flex;
                    align-items: center;
                    align-self: center;
                    gap:5px;
                }
            `},styleAnimation(){return`
                left: ${this.data.settings.position?this.data.settings.position=="left"?"0":"auto":"0"};
                right:${this.data.settings.position?this.data.settings.position=="left"?"auto":"0":"auto"};
                animation: linear .3s ${this.data.settings.position?this.data.settings.position=="left"?"leftright":"rightleft":"leftright"};
            `},requestShopifyType(){return{shopify_type:"product"}},javascript(){return function(){let e=this.$el,t=this.isLive,o=this.id;if(!e)return;let n=e.closest(".ecom-product-form--single");if(n&&!t){let m=n.querySelector('[name="id"]');m&&m.dispatchEvent(new window.Event("ecomUpdate"))}function s(){let m=e.querySelector(".ecom-product-single__pickup-availability--detail");if(m){document.querySelectorAll(".ecom-pickup-availability-popup").forEach(function(f){f.remove()});let h=document.createElement("div");h.classList.add("ecom-pickup-availability-popup"),h.classList.add(o),h.classList.add("ecom-core"),h.innerHTML=m.outerHTML,document.body.appendChild(h);const _=h.querySelector(".ecom-product-single__pickup-availability--detail");_.classList.add("show-modal"),h.querySelector(".ecom-product-single__pickup-close-modal").addEventListener("click",function(){_.classList.remove("show-modal")}),window.addEventListener("click",f=>{f.target==_&&_.classList.remove("show-modal")})}}e.addEventListener("click",function(m){(m.target.classList.contains("ecom-product-single__pickup-availability--button")||m.target.closest(".ecom-product-single__pickup-availability--button"))&&s()});function i(m){if(!e)return;let h=e.querySelector(".ecom-product-single__pickup-availability-item");h&&(h.style.display="none");const _=e.querySelector(".ecom-product-single__pickup-availability-container");if(_&&_.dispatchEvent(new window.CustomEvent("ecomVariantChange",{detail:{variant_id:m==null?void 0:m.id}})),m&&m.available){const b=e.querySelector(`.ecom-product-single__pickup-availability-item[data-variant_id="${m.id}"]`);b&&(b.style.display="flex"),t||e.querySelector(".ecom-product-single__pickup-availability .ecom-placeholder-on-builder-mode").classList.add("ecom-force-show")}else t||e.querySelector.classList(".ecom-product-single__pickup-availability .ecom-placeholder-on-builder-mode").add("ecom-force-show")}if(this.isLive){var a=e.closest(".ecom-product-form--single");if(!n&&!e)return;var l=a.querySelector("select[name=id]"),u=a.dataset.product_id;if(!u)return;var r=null,g=a.querySelector("[id^=product-json-"+u+"]");if(!g)return;try{r=JSON.parse(g.innerHTML)}catch{return}if(l)l.addEventListener("change",function(){let m=this.value;if(!m)return;let h=r.variants.find(_=>_.id==m);h&&i(h)});else{let m=r.variants[0];i(m)}}}},default(){return{settings:{view_store_info:"View store information",check_other_stores:"Check availability at other stores",pick_up_available:"Pickup available",pick_up_available_at_html:'Pickup available at <span class="ecom-color-foreground">{{ location_name }}</span>',pick_up_unavailable_at_html:'Pickup currently unavailable at <span class="ecom-color-foreground">{{ location_name }}</span>',icon:{name:"check",cate:"Duotone",value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-primary" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>',thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-primary" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>'},unavailable_icon:{name:"close",value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"></path></svg>',thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"></path></svg>'}},style:{general:{"justify-content":"flex-start"},pickup_icon:{iconFontSize:"20px"},pickup_button:{spacing:{padding:{bottom:"12px",top:"12px",left:"20px",right:"20px"}},tab:"normal",buttonColornormalmode:"#ffffff",buttonBackgroundnormalmode:{classic:{"background-color":"#0e7490"}},buttonBordernormalmode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#155e75"},buttonBorderRadiusnormalmode:{top:"3px",left:"3px",bottom:"3px",right:"3px"}},pickup_content:{background:{classic:{"background-color":"#fff"}},spacing:{margin:{},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},location_spacing:{margin:{top:"10px",left:"0px",bottom:"8px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},popup_content_spacing:{margin:{left:"5px",top:"5px",bottom:"5px",right:"5px"},padding:{top:"15px",left:"15px",bottom:"15px",right:"15px"}},icon_width:"15px",icon_height:"15px",unavailable_icon_width:"15px",_unavailableicon_height:"15px",text_typo:{"font-weight":"400","font-style":"normal"},boxShadow:{"box-shadow":{spread:"2px",position:"outline",color:"#b8b6b6",blur:"3px"}}},pickup_close_popup_icon:{tab:"normal",iconFontSize:"40px",iconPrimaryColornormalmode:"#333"}}}}},methods:{style(){let e=[{group_alias:"box",options:{group_title:"General",group_name:"general",selector:" .ecom-product-single__pickup-availability-info"},modify:{params:[{position:0,fields:{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-product-single__pickup-availability-item"}}}},{position:20,fields:{alias:"spacing"}}]}},{group_alias:"text:spacing",options:{group_name:"pickup_label",group_title:"Label",selector:" .ecom-product-single__pickup-availability .ecom-product-single__pickup-availability-info--caption-large"},modify:{remove:{index:0,length:1}}},{group_alias:"button",options:{group_title:"Button",group_name:"pickup_button",selector:" .ecom-product-single__pickup-availability .ecom-product-single__pickup-availability--button"},modify:{params:{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-button-default",properties:{display:"flex","justify-content":""}}}}}}];return e.splice(1,0,{group_alias:"icon:hover",options:{group_title:"Close icon",group_name:"pickup_close_popup_icon",selector:"root .ecom-product-single__pickup-close-modal"},modify:{params:{position:20,fields:{alias:"spacing"}}}}),(this.data.settings.icon||this.data.settings.unavailable_icon)&&e.splice(1,0,{group_alias:"icon",options:{group_title:"Icon",group_name:"pickup_icon",selector:"root .ecom-product-single__pickup-availability .ecom-product-single__pickup-availability--icon"},modify:{params:{position:20,fields:{alias:"spacing"}}}}),e.push({group_name:"pickup_content",group_title:"Popup content",selector:"root .ecom-product-single__pickup-modal__content",params:[{alias:"background"},{name:"border",label:"Border",type:"popup",options:{oneline:!0,responsive:!0,type:"border",size:"small"},css:{}},{type:"dimension",label:"Border Radius",name:"borderRadius",options:{type:"radius",units:"default"},css:{properties:{"border-radius":""}}},{type:"popup",label:"Box Shadow",name:"boxShadow",options:{type:"box-shadow",oneline:!0},css:{}},{alias:"spacing",options:{name:"popup_content_spacing"}},{type:"line"},{type:"paragraph",content:"### Spacing between locations"},{alias:"spacing",options:{name:"location_spacing",css:{selector:" .ecom-product-single__pickup-availability--list-item"}}},{type:"line"},{type:"paragraph",content:"### Popup title"},{type:"popup",label:"Typography",name:"title_typo",options:{oneline:!0,type:"typography"},css:{selector:" .ecom-product-single__pickup-availability--title"}},{type:"color",label:"Color",name:"title_color",options:{oneline:!0,global:{type:"colors"}},css:{selector:" .ecom-product-single__pickup-availability--title",properties:{color:""}}},{alias:"spacing",options:{css:{selector:" .ecom-product-single__pickup-availability--title"}}},{type:"line"},{type:"paragraph",content:"### Location title"},{type:"popup",label:"Typography",name:"location_title_typo",options:{oneline:!0,type:"typography"},css:{selector:" .ecom-product-single__pickup-availability--list-item-heading"}},{type:"color",label:"Color",name:"location_title_color",options:{oneline:!0,global:{type:"colors"}},css:{selector:" .ecom-product-single__pickup-availability--list-item-heading",properties:{color:""}}},{alias:"spacing",options:{name:"popup_heading_spacing",css:{selector:" .ecom-product-single__pickup-availability--list-item-heading"}}},{type:"line"},{type:"paragraph",content:"### Text"},{type:"popup",label:"Typography",name:"text_typo",options:{oneline:!0,type:"typography"},css:{selector:" *"}},{type:"color",label:"Color",name:"text_color",options:{oneline:!0,global:{type:"colors"}},css:{selector:" *",properties:{color:""}}},{type:"line"},{type:"paragraph",content:"### Icon available"},{type:"color",label:"Color",name:"icon_color",options:{oneline:!0,global:{type:"colors"}},css:{selector:" .ecom-icon-pickup-available",properties:{color:""}}},{type:"number",name:"icon_width",label:"Width",options:{responsive:!0,reset:!0,units:{px:{min:1,max:100}}},css:{selector:" .ecom-icon-pickup-available",properties:{width:""}}},{type:"number",name:"icon_height",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:1,max:100}}},css:{selector:" .ecom-icon-pickup-available",properties:{height:""}}},{type:"line"},{type:"paragraph",content:"### Icon unavailable"},{type:"color",label:"Color",name:"unavailable_icon_color",options:{oneline:!0,global:{type:"colors"}},css:{selector:" .ecom-icon-pickup-unavailable",properties:{color:""}}},{type:"number",name:"unavailable_icon_width",label:"Width",options:{responsive:!0,reset:!0,units:{px:{min:1,max:100}}},css:{selector:" .ecom-icon-pickup-unavailable",properties:{width:""}}},{type:"number",name:"_unavailableicon_height",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:1,max:100}}},css:{selector:" .ecom-icon-pickup-unavailable",properties:{height:""}}},{type:"line"},{type:"choose",label:"Text Align",name:"textAlign",options:{type:"text-align",values:["left","center","right"]},css:{properties:{"text-align":""}}}]}),e}}},dd={class:"ecom-element ecom-product-single ecom-product-single__pickup-availability"},ud={class:"ecom-product-single__pickup-availability-wrapper"},gd=["data-section-id","data-ecom-placeholder","innerHTML"];function _d(e,t,o,n,s,i){return c(),d("div",dd,[p("div",ud,[p("div",{class:S(["ecom-product-single__pickup-availability-container",[e.exporting?"":"ecom-placeholder-on-builder-mode",e.exporting?"":e.liquid("product_available")]]),"data-section-id":e.exporting?"{{section.id}}":"","data-ecom-placeholder":e.exporting?"":"This feature will show when product available on one store",innerHTML:e.liquid("pickup_availabilities")},null,10,gd)])])}const hd=k(Ct,[["render",_d]]);Ct.__docgenInfo={exportName:"default",displayName:"ProductPickupAvailability",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/PickupAvailability.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Tt={name:"CollectionBanner",presets:!0,docs:"https://help.ecomposer.io/docs/elements/collection-elements/banner/",mixins:[M,T],props:{data:{type:Object,default(){}}},computed:{liquids(){var e,t,o;return{image:{code:`
                        ${(e=this.data.settings)!=null&&e.default_banner?`{%- capture default_img -%}${(o=(t=this.data.settings)==null?void 0:t.default_banner)==null?void 0:o.value}{%- endcapture -%}`:""}
                    {%- assign banner = 'https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/backpack.svg?7273' -%}
                    {%- if collection.featured_image -%}
                        {%- assign banner = collection.featured_image | img_url: 'master' -%}
                    {%- elsif default_img -%}
                    {%- assign banner = default_img -%}
                    {%- endif -%}
                    {{ banner }}`,preview:"https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/backpack.svg?7273"},title:{code:"{{ collection.title }}",preview:"The sample collection title"},description:{code:"{{ collection.description }}",preview:"The sample collection description"}}},settings(){return[{params:[{type:"popup",label:"Image source",name:"source",value:"collection",options:{type:"dropdown",default:!1,values:{collection:"Collection",file:"File upload"}}},{type:"picker",label:"Custom banner",name:"banner",options:{type:"image",multiple:!1,visible:function(e){return e.source==="file"}},value:{value:"https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/backpack.svg?7273"}},{type:"picker",label:"Default banner",name:"default_banner",description:"Default image will display if collection not have image",options:{type:"image",multiple:!1,visible:function(e){return e.source==="collection"}},value:{value:"https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/backpack.svg?7273"}},{type:"toggle",label:"Show title",value:!0,name:"show_title",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0}},{type:"toggle",label:"Show description",value:!0,name:"show_description",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0}},{type:"toggle",label:"Enable Parallax background",name:"background_parallax",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0}},{type:"toggle",label:"Enable overlay",name:"overlay",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0}},{name:"position",label:"Content position",type:"popup",value:"center center",options:{default:!1,values:{"center center":"Center center","center right":"Center right","center left":"Center left","top left":"Top left","top center":"Top center","top right":"Top right","bottom right":"Bottom right","bottom left":"Bottom left","bottom center":"Bottom center"},type:"dropdown",oneline:!0},css:{selector:" .ecom-collection__banner-wrapper",properties:{"align-items":`
                                        switch(value) {
                                            case 'center center':
                                            case 'top center':
                                            case 'bottom center':
                                                return 'center';
                                            case 'top left':
                                            case 'bottom left':
                                            case 'center left':
                                                return 'flex-start';
                                            case 'top right':
                                            case 'bottom right':
                                            case 'center right':
                                                return 'flex-end';
                                        }
                                    `,"justify-content":`
                                        switch(value) {
                                            case 'center center':
                                            case 'center right':
                                            case 'center left':
                                                return 'center';
                                            case 'top center':
                                            case 'top left':
                                            case 'top right':
                                                return 'flex-start';
                                            case 'bottom center':
                                            case 'bottom left':
                                            case 'bottom right':
                                                return 'flex-end';
                                        }
                                    `}}},{label:"Custom Height",name:"min-height",type:"number",options:{responsive:!0,slider:!0,units:{px:{min:100,max:1e3}}},css:{selector:" .ecom-collection__banner-wrapper"}}]}]},source(){return this.data&&this.data.settings&&"source"in this.data.settings?this.data.settings.source:"collection"},banner(){return this.data&&this.data.settings&&"banner"in this.data.settings?this.data.settings.banner:"https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/backpack.svg?7273"},show_title(){return this.data&&this.data.settings&&"show_title"in this.data.settings?this.data.settings.show_title:!1},show_description(){return this.data&&this.data.settings&&"show_description"in this.data.settings?this.data.settings.show_description:!1},styleWraper(){let e={backgroundImage:'url("'+(this.source==="collection"?this.liquid("image"):this.banner.value)+'")'};return this.data.settings.background_parallax&&(e.backgroundAttachment="fixed"),e},requestShopifyType(){return{shopify_type:"collection"}},css(){return`
                .ecom-collection__banner-wrapper{
                    display:flex;
                    flex-direction: column;
                    justify-content:center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    position:relative;
                }
                .ecom-collection__banner .ecom-collection__banner-wrapper {
                    display: block !important;
                }
                .ecom-collection__banner-wrapper .ecom-collection__banner-heading{
                    position:relative;
                    z-index:1;
                }
                .ecom-collection__banner-wrapper .ecom-collection__banner-paragraph{
                    position:relative;
                    z-index:1;

                }
                .ecom-collection__banner-wrapper .ecom-overlay{
                    position:absolute;
                    top:0;
                    left:0;
                    right:0;
                    bottom:0;
                    display:block;
                }
            `},default(){return{settings:{source:"collection",show_title:!0,show_description:!0,position:"center center",overlay:!1,banner:{value:"/images/placeholder.png"},"min-height":"300px","justify-content":"center"},style:{overlay:{tab:"normal",imageOpacity:.35,backgroundnormalmode:{classic:{"background-color":"#f78b8b"}}}}}}},methods:{style(){let e=[{group_alias:"text:spacing",options:{group_title:"Title",group_name:"title",selector:" .ecom-collection__banner-heading"},modify:{remove:{index:0,length:1}}},{group_alias:"text:spacing",options:{group_title:"Description",group_name:"description",selector:" .ecom-collection__banner-paragraph"},modify:{remove:{index:0,length:1}}},{group_title:"Background",group_name:"background",selector:" .ecom-collection__banner-wrapper",params:[{type:"background",label:"Style",name:"background",options:{responsive:!0,types:["classic"],image:!1,color:!1},css:{properties:{background:""}}}]}];return"overlay"in this.data.settings&&e.push({group_alias:"background:overlay",options:{group_title:"Overlay",group_name:"overlay",selector:" .ecom-collection__banner-wrapper"}}),e}}},fd={class:"ecom-element ecom-collection ecom-collection__banner"},bd=["innerHTML"],yd=["innerHTML"],vd={key:2,class:"ecom-overlay"};function xd(e,t,o,n,s,i){return c(),d("div",fd,[p("div",{class:"ecom-collection__banner-wrapper",style:E(i.styleWraper)},[i.show_title?(c(),d("h1",{key:0,class:"ecom-collection__banner-heading",innerHTML:e.liquid("title")},null,8,bd)):y("",!0),i.show_description?(c(),d("div",{key:1,class:"ecom-collection__banner-paragraph",innerHTML:e.liquid("description")},null,8,yd)):y("",!0),o.data.settings.overlay?(c(),d("div",vd)):y("",!0)],4)])}const wd=k(Tt,[["render",xd]]);Tt.__docgenInfo={exportName:"default",displayName:"CollectionBanner",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!0,value:"function() {}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Collection/Banner.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Lt={name:"CollectionTitle",docs:"https://help.ecomposer.io/docs/elements/collection-elements/title/",presets:!0,mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){return{title:{code:"{{collection.title}}",preview:"The preview title"},url:{code:"{{ collection.url }}",preview:"#"}}},settings(){return[{group_alias:"title:settings",options:{group_name:"",group_title:""}}]},classes(){var e,t,o;return(o=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.classes)!=null?o:""},tag(){return this.data&&this.data.settings&&this.data.settings.tag?this.data.settings.tag:"h3"},requestShopifyType(){return{shopify_type:"collection"}},default(){return{settings:{tag:"h2"},style:{textSpacing:{textTextAlign:"left"}}}}},methods:{style(){return[{group_alias:"text:spacing",options:{group_title:"",selector:" .ecom-collection__title--headline"}}]}}},kd={class:"ecom-element ecom-collection ecom-collection__title"},Cd={class:"ecom-element ecom-collection ecom-collection__title-wrapper"},Td={class:"ecom-element ecom-collection ecom-collection__title-container"};function Ld(e,t,o,n,s,i){return c(),d("div",kd,[p("div",Cd,[p("div",Td,[(c(),z(W(i.tag),{class:S(["ecom-collection__title--headline ecom__heading",i.classes]),href:i.tag==="a"?e.liquid("url"):null,innerHTML:e.liquid("title")},null,8,["class","href","innerHTML"]))])])])}const $d=k(Lt,[["render",Ld]]);Lt.__docgenInfo={exportName:"default",displayName:"CollectionTitle",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Collection/Title.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const $t={name:"CollectionDescription",docs:"https://help.ecomposer.io/docs/elements/collection-elements/description/",mixins:[M,T,H],props:{data:{type:Object,default(){return{}}}},computed:{contentType(){var e,t,o;return(o=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.content_type)!=null?o:"text"},css(){return`
                .ecom-collection__description--paragraph, .ecom-collection__description-view-more-btn {
                    overflow: hidden
                }
                .ecom-collection__description--paragraph[style*="max-height"] {
                    position: relative;
                }
                .ecom-collection__description--paragraph[style*="max-height"]:after {
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    height: 150px;
                    background: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255))
                }
                .ecom-collection__description-view-more-btn{
                    cursor:pointer;
                }
            `},description_type(){return this.type==="short"?"short_description":"description"},description_short(){return this.contentType==="text"?this.type==="short"?"short_description":"description_text":"description"},javascript(){return function(){let e=this.$el.querySelector(".ecom-collection__description-view-more-btn"),t=this.settings.content_type,o=this.$el.querySelector(".ecom-collection__description--full"),n=this.$el.querySelector(".ecom-collection__description--paragraph");e&&e.addEventListener("click",function(){t==="text"&&o?(o.style.display="inherit",n.style.display="none"):n.style.maxHeight=null,this.style.display="none"})}},limit(){return this.data&&this.data.settings&&this.data.settings.limit&&parseInt(this.data.settings.limit)>0?parseInt(this.data.settings.limit):50},liquids(){return{description:{code:`
                        {%- if collection != empty -%}
                            {%- if collection.description != empty -%}
                                {{collection.description}}
                            {%- else -%}
                                <div>Collection without description</div>
                            {%- endif -%}
                        {%- else -%}
                            <div>Please select the collection in settings</div>
                        {%- endif -%}
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-4"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-6"></div>
                                <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-2"></div>
                                <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                            </div>
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-10 big"></div>
                                <div class="ecom-skeleton-col-2 ecom-skeleton-empty big"></div>
                                <div class="ecom-skeleton-col-4"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-6"></div>
                                <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-12"></div>
                            </div>
                        </div>
                    `},description_text:{code:"{{collection.description | strip_html }}",preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-4"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-6"></div>
                                <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-2"></div>
                                <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                            </div>
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-10 big"></div>
                                <div class="ecom-skeleton-col-2 ecom-skeleton-empty big"></div>
                                <div class="ecom-skeleton-col-4"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-6"></div>
                                <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-12"></div>
                            </div>
                        </div>
                    `},short_description:{code:`
                        {%- if collection != empty -%}
                            {%- if collection.description != empty -%}
                                {{ collection.description | strip_html | truncatewords: ${this.limit} }}
                            {%- elsif EComposerBuilderMode -%}
                                <div>Collection without description</div>
                            {%- endif -%}
                        {%- elsif EComposerBuilderMode -%}
                            <div>Please select the collection in settings</div>
                        {%- endif -%}
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div>
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-6"></div>
                                    <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-8"></div>
                                    <div class="ecom-skeleton-col-4 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-4"></div>
                                    <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                </div>
                            </div>
                        </div>

                    `}}},maxHeight(){var e,t;return this.contentType==="html"&&((t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.type)==="short"?this.data.settings["max-height"]:null},requestShopifyType(){return{shopify_type:"collection"}},settings(){return[{params:[{type:"popup",label:"Content Type",name:"content_type",options:{type:"dropdown",values:{text:"Text",html:"HTML"},default:!1}},{type:"popup",label:"Description type",name:"type",value:"short",options:{type:"dropdown",values:{short:"Short",full:"Full"},default:!1}},{type:"number",label:"Maximum words to show",name:"limit",value:"50",placeholder:"50",options:{control_width:"40%",input:!0,slider:!1,min:0,visible:function(e){return e&&e.type==="short"&&e.content_type==="text"}}},{type:"number",label:"Max height",name:"max-height",placeholder:"200",options:{units:{px:{min:0,max:1e3},vh:{min:0,max:100},vw:{min:0,max:100}},visible:function(e){return e&&e.type==="short"&&e.content_type=="html"}}},{type:"toggle",label:"Show view more",name:"view_more",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:function(e){return e.type==="short"}}},{label:"View more text button",name:"view_more_text",type:"text",options:{visible:function(e){return e.type==="short"&&e.view_more}}}]}]},type(){return this.data&&this.data.settings&&this.data.settings.type?this.data.settings.type:"short"},view_more(){return this.data&&this.data.settings&&this.data.settings.view_more?this.data.settings.view_more:!1},default(){return{settings:{content_type:"text",type:"short",limit:"50",view_more:!1,view_more_text:"View more","max-height":"200px"},style:{collection_description:{textTextAlign:"left"}}}}},methods:{style(){let e=[{group_alias:"text",options:{group_title:"Description",group_name:"collection_description",selector:" .ecom-collection__description--paragraph, .ecom-collection__description--full"}}];return this.data.settings.view_more&&e.push({group_alias:"button",options:{group_title:"View more",group_name:"collection_view_more",selector:" .ecom-collection__description-view-more-btn"},modify:{params:[{position:0,fields:[{type:"choose",label:"Alignment",name:"alignment",options:{oneline:!0,responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"justify-content":""},selector:"root .ecom-collection__description--view-more"}}]}]}}),e}}},Sd={class:"ecom-element ecom-collection ecom-collection__description"},Md={class:"ecom-collection__description-wrapper"},Hd=["content_type"],Bd={class:"ecom-collection__description--paragraph"},qd=["innerHTML"],Ed={key:0,class:"ecom-collection__description--view-more ecom-w__full ecom-flex"},Dd=["textContent"],Ad=["innerHTML"],zd=["innerHTML"],jd={key:0},Id=["textContent"];function Pd(e,t,o,n,s,i){return c(),d("div",Sd,[p("div",Md,[p("div",{class:"ecom-collection__description-container",content_type:i.contentType},[i.contentType==="text"?(c(),d(D,{key:0},[p("div",Bd,[p("span",{innerHTML:e.liquid(i.description_short)},null,8,qd),i.type==="short"&&i.view_more?(c(),d("span",Ed,[p("button",{type:"button",class:"ecom-collection__description-view-more-btn",textContent:I(e.lang(o.data.settings.view_more_text,"view_more_text"))},null,8,Dd)])):y("",!0)]),i.type==="short"&&i.view_more?(c(),d("span",{key:0,style:{display:"none"},class:"ecom-collection__description--full",innerHTML:e.liquid("description_text")},null,8,Ad)):y("",!0)],64)):(c(),d(D,{key:1},[p("div",{class:"ecom-collection__description--paragraph",style:E({"max-height":i.maxHeight}),innerHTML:e.liquid(i.description_short)},null,12,zd),i.type==="short"&&i.view_more?(c(),d("span",jd,[p("button",{type:"button",class:"ecom-collection__description-view-more-btn",textContent:I(e.lang(o.data.settings.view_more_text,"view_more_text"))},null,8,Id)])):y("",!0)],64))],8,Hd)])])}const Nd=k($t,[["render",Pd]]);$t.__docgenInfo={exportName:"default",displayName:"CollectionDescription",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Collection/Description.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const St={name:"CollectionSort",docs:"https://help.ecomposer.io/docs/elements/collection-elements/sorting/",presets:!0,mixins:[M,H,T],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){return{sorting:{code:`
                        {%- assign sort_by = collection.sort_by | default: collection.default_sort_by -%}
                        {%- for option in collection.sort_options -%}
                            <option value="{{ option.value | escape }}"{% if option.value == sort_by %} selected="selected"{% endif %}>{{ option.name | escape }}</option>
                        {%- endfor -%}
                    `,preview:""}}},settings(){return[{params:[{type:"text",name:"title",label:"Label",value:"Sort by",options:{placeholder:"Sort by"}},{name:"sortStyle",label:"Layout",type:"popup",options:{type:"dropdown",values:{column:"Vertical",row:"Horizontal"}},css:{selector:" .ecom-collection__sorting-container",properties:{"flex-direction":""}}}]}]},javascript(){return function(){this.isLive&&this.$el.querySelector('[name="sort_by"]').addEventListener("change",function(e){window.EComposer.queryParams.sort_by=e.target.value,window.location.search=new URLSearchParams(window.EComposer.queryParams).toString()})}},requestShopifyType(){return{shopify_type:"collection"}},css(){return`
            .ecom-collection__sorting-wrapper{
                display:flex
            }
                .ecom-collection__filters-heading {
                    display: block;
                    white-space:nowrap;
                }
                .ecom-collection__sorting-select {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    outline:none;
                }
                .ecom-collection__sorting-container{
                    display:inline-flex;
                    flex-direction:column
                }
            `},default(){return{settings:{title:"Sort by",sortStyle:"column"}}}},methods:{style(){let e={};return this.data.settings.sortStyle=="row"&&(e={remove:{index:0,length:1},params:[{position:1,fields:{alias:"align-items",options:{label:"Alignment",options:{values:["start","center","end"]},css:{properties:{display:"flex","align-items":""}}}}}]}),[{group_alias:"box",options:{group_name:"general",group_title:"General",selector:" .ecom-collection__sorting-wrapper"},modify:{params:[{fields:{name:"alignment",label:"Alignment",type:"choose",options:{type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{display:"flex","justify-content":""}}}},{position:20,fields:{alias:"spacing"}}]}},{group_alias:"text:spacing",options:{group_name:"label",group_title:"Label",selector:" .ecom-collection__filters-heading"},modify:e},{group_alias:"input",options:{group_name:"sorting",group_title:"Sorting",selector:" .ecom-collection__sorting-select"},modify:{remove:{index:3,length:1}}}]}}},Vd={class:"ecom-element ecom-collection ecom-collection__sorting"},Wd={class:"ecom-collection__sorting-wrapper"},Od={class:"ecom-collection__sorting-container"},Fd=["innerHTML"],Ud=["innerHTML"];function Rd(e,t,o,n,s,i){return c(),d("div",Vd,[p("div",Wd,[p("div",Od,[o.data.settings.title?(c(),d("h3",{key:0,class:"ecom-collection__filters-heading",innerHTML:e.lang(o.data.settings.title,"sortting_title")},null,8,Fd)):y("",!0),p("select",{name:"sort_by",class:"ecom-collection__sorting-select","aria-describedby":"a11y-refresh-page-message",innerHTML:e.liquid("sorting")},null,8,Ud)])])])}const Yd=k(St,[["render",Rd]]);St.__docgenInfo={exportName:"default",displayName:"CollectionSort",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Collection/Sort.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Mt={name:"CollectionBanner",docs:"https://help.ecomposer.io/docs/elements/collection-elements/collection-tags/",mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){var e;return{tags:{code:`
                        {% capture limit %}${((e=this.data.settings)==null?void 0:e.type)==="current"?this.limit:100}{% endcapture %}
                        {% assign limit  = limit | plus: 0 %}
                        {% if collection.all_tags %}

                            <ul class="ecom-collection__tags-list" role="list">
                                ${this.type==="current"?"{% for tag in collection.all_tags limit: limit %}":`
                                    {% capture custom_tags %}${this.tags.join(",")}{% endcapture %}
                                    {% assign custom_tags = custom_tags | split: ','%}
                                    {% for tag in custom_tags  limit: limit %}
                                    ${this.hide_on_not_exists?"{% unless collection.all_tags contains tag %}{% continue %}{% endunless%}":""}
                                `}

                                       <li class="ecom-collection__tags-list-item
                                            {% if current_tags contains tag %}
                                                ecom-collection__tags-list-item-to-remove
                                                ">
                                                {{ tag | link_to_remove_tag: tag }}
                                            {% else %}
                                                 ecom-collection__tags-list-item-to-add
                                                 ">
                                                 {{ tag | link_to_tag: tag }}
                                            {% endif %}

                                       </li>
                                {% endfor %}
                            </li>
                        {% endif %}
                        `,preview:`
                            <div class="ecom-skeleton-item">
                                <div>
                                    <div class="ecom-skeleton-row">
                                        <div class="ecom-skeleton-col-4"></div>
                                        <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                        <div class="ecom-skeleton-col-6"></div>
                                        <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                        <div class="ecom-skeleton-col-2"></div>
                                        <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                    </div>
                                </div>
                            </div>
                        `}}},limit(){var e,t,o;return(o=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.limit)!=null?o:12},settings(){return[{params:[{type:"popup",label:"Layout",name:"flexDirection",value:"column",options:{type:"dropdown",default:!1,values:{column:"Vertical",row:"Horizontal"}},css:{selector:" .ecom-collection__tags-list",properties:{"flex-direction":""}}},{type:"popup",name:"type",label:"Tags type",options:{type:"dropdown",values:{current:"Tags of current collection",custom:"Manual fill tags"}},css:!1},{type:"number",label:"Maximum tags to show",name:"limit",options:{min:1,max:100,visible:function(e){return!e.type||e.type==="current"}}},{type:"textarea",name:"tags",label:"Enter the tags to filter in the collection",description:"Enter tags for each line (Note: divide value with linebreaks (Enter).",placeholder:"Summer,Winter",options:{visible:function(e){return e.type&&e.type==="custom"}}},{type:"toggle",label:"Hide tags that don't exist",name:"hide_on_not_exists",options:{visible:function(e){return e.type&&e.type==="custom"},values:{on:{label:"Yes",value:!0},off:{label:"no",value:!1}}}},{name:"column-gap",type:"number",label:"Column gap",value:"12px",options:{units:{px:{min:1,max:64,step:1}},responsive:!0,visible:{keep_data:!1,condition:e=>e.flexDirection==="row"}},css:{selector:" .ecom-collection__tags-list"}},{name:"row-gap",type:"number",label:"Row gap",value:"12px",options:{units:{px:{min:1,max:64,step:1}},responsive:!0},css:{selector:" .ecom-collection__tags-list"}}]}]},hide_on_not_exists(){var e,t,o;return(o=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.hide_on_not_exists)!=null?o:!1},type(){var e,t,o;return(o=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.type)!=null?o:"current"},tags(){var t,o,n;return((n=(o=(t=this.data)==null?void 0:t.settings)==null?void 0:o.tags)!=null?n:"").split(`
`)},requestShopifyType(){return{shopify_type:"collection"}},css(){return`
                .ecom-collection__tags-container,
                .ecom-collection__tags-list{
                    list-style: none;
                    padding: 0;
                    display:flex;
                    flex-wrap:wrap;
                }
                .ecom-collection__tags-list-item a{
                    text-decoration:none;
                    display:inline-flex;
                }
            `},default(){return{settings:{limit:10,type:"current",tags:`Shoes
Bag`,hide_on_not_exists:!0,"row-gap":"10px",flexDirection:"row","column-gap":"10px"},style:{general:{blogTagsAlignment:"flex-start"},tag:{spacing:{padding:{left:"16px",top:"8px",bottom:"8px",right:"16px"}},buttonColornormalmode:"#111827",buttonBackgroundnormalmode:{classic:{"background-color":"rgba(17, 24, 39, 0.05)"}},buttonColorhovermode:"#111827",buttonBackgroundhovermode:{classic:{"background-color":"rgba(17, 24, 39, 0.1)"}}}}}}},methods:{style(){return[{group_alias:"box",options:{group_title:"General",group_name:"general",selector:" .ecom-collection__tags-list"},modify:{params:[{type:"choose",label:"Alignment",name:"blogTagsAlignment",options:{oneline:!0,responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{selector:"root .ecom-collection__tags-container",properties:{display:"flex","justify-content":""}}}]}},{group_alias:"button",options:{group_title:"Tag",group_name:"tag",selector:" .ecom-collection__tags-list-item a"}}]}}},Gd={class:"ecom-element ecom-collection ecom-collection__tags"},Jd={class:"ecom-collection__tags-wrapper"},Zd=["innerHTML"];function Kd(e,t,o,n,s,i){return c(),d("div",Gd,[p("div",Jd,[p("div",{class:"ecom-collection__tags-container",innerHTML:e.liquid("tags")},null,8,Zd)])])}const Xd=k(Mt,[["render",Kd]]);Mt.__docgenInfo={exportName:"default",displayName:"CollectionBanner",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Collection/Tag.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Ht={name:"CollectionFilterValue",docs:"https://help.ecomposer.io/docs/elements/collection-elements/applied-filters/",presets:!0,mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){var e,t,o,n;return{filter_values:{code:`
                    <!--EComposer-custom-liquid-filters-${this.data.id.split("-").pop()}-->
                      {% capture close_icon %}
                      ${(t=(e=this.data.settings)==null?void 0:e.general)!=null&&t.icon?`<span class="ecom-colletion-filter-value--close-icon ecom-flex">
                            ${(n=(o=this.data.settings)==null?void 0:o.general)==null?void 0:n.icon}
                          </span>
                        `:""}
                       {% endcapture %}

                      <ul class="ecom-collection-filter-values-list" role="list">
                        {%- if EComBuilderMode -%}
                          {% for filter in collection.filters %}
                              {% if filter.type == 'list' %}
                                  {% for value in filter.values  %}
                                      <li class="ecom-collection-filter-values-list__item ecom-al_center">
                                          <a
                                            href="{{value.url_to_remove}}" title="{{value.label}}"
                                            class="ecom-w__full ecom-flex ecom-al_center"
                                          >
                                              {{ value.label | escape }} {{close_icon}}
                                          </a>
                                      </li>
                                  {% endfor %}
                                  {% break %}
                              {% endif %}
                          {% endfor %}
                        {%- else -%}
                          {%- for filter in collection.filters -%}
                              {%- if filter.active_values.size > 0 or filter.min_value.value != nil or filter.max_value.value != nil -%}
                                  {% for value in filter.active_values  %}
                                      <li class="ecom-collection-filter-values-list__item ecom-al_center">
                                          <a
                                            href="{{value.url_to_remove}}" title="{{value.label}}"
                                            class="ecom-w__full ecom-flex ecom-al_center"
                                          >
                                              {{ value.label | escape }} {{close_icon}}
                                          </a>
                                      </li>
                                  {% endfor %}
                                  {% if filter.type == "price_range" %}
                                      {%- if filter.min_value.value != nil or filter.max_value.value != nil -%}
                                          <li class="ecom-collection-filter-values-list__item ecom-al_center">
                                              <a class="ecom-w__full ecom-flex ecom-al_center" href="{{filter.url_to_remove}}">
                                                  {%- if filter.min_value.value -%}{{ filter.min_value.value | money }}{%- else -%}{{ 0 | money }}{%- endif -%}-{%- if filter.max_value.value -%}{{ filter.max_value.value | money }}{%- else -%}{{ filter.range_max | money }}{%- endif -%}
                                                  {{close_icon}}
                                              </a>
                                          </li>
                                      {%- endif -%}
                                  {% endif %}
                              {% endif %}
                          {% endfor %}
                        {%- endif -%}
                      </ul>
                    <!--/EComposer-custom-liquid-filters-${this.data.id.split("-").pop()}-->
                    `,preview:`<div class="ecom-skeleton-item">
                          <div>
                              <div class="ecom-skeleton-row">
                                  <div class="ecom-skeleton-col-4"></div>
                                  <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                  <div class="ecom-skeleton-col-6"></div>
                                  <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                  <div class="ecom-skeleton-col-2"></div>
                                  <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                              </div>
                          </div>
                      </div>`}}},settings(){return[{group_name:"general",group_title:"General",params:[{type:"popup",label:"Layout",values:"",name:"layout_type",options:{type:"dropdown",default:!1,icon_type:"alignment",preview:"title",values:{"inline-flex":"Horizontal",block:"Vertical"}},css:{selector:" .ecom-collection-filter-values-list",properties:{display:""}}},{type:"picker",label:"Icon",name:"icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}}]}]},requestShopifyType(){return{shopify_type:"collection"}},default(){return{settings:{general:{layout_type:"inline-flex",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-secondary" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>'}},style:{filter_value:{tab:"hover",buttonColornormalmode:"#737070",buttonTypography:{"text-transform":"uppercase","text-decoration":"none","font-size":"14px"},spacing:{margin:{right:"20px"}},buttonBackgroundnormalmode:{classic:{"background-color":"#cfcccc"}},margin_item:{top:"0px",left:"0px",bottom:"12.5px",right:"12.5px"},padding:{right:"5px",top:"5px",left:"5px",bottom:"5px"}},filter_icon:{iconFontSize:"12px",iconPrimaryColor:"#858383",spacing:{margin:{right:"0px",left:"6px"}}}}}},css(){return`
            .ecom-collection-filter-values-list,
            .ecom-collection-filter-values-list li {
              list-style: none;
            }
            .ecom-collection-filter-values-list {
              flex-wrap: wrap;
            }
          `}},methods:{style(){return[{group_alias:"box",options:{group_title:"Gerenal",group_name:"gerenal",selector:" .ecom-collection-filter-values-list"}},{group_alias:"button",options:{group_title:"Filter value",group_name:"filter_value",selector:" .ecom-collection-filter-values-list__item a"},modify:{remove:{index:18,length:1},params:[{position:19,fields:[{alias:"padding"},{alias:"margin",options:{name:"margin_item",css:{selector:"root .ecom-collection-filter-values-list__item"}}}]}]}},{group_alias:"icon",options:{group_title:"Icon",group_name:"filter_icon",selector:"root .ecom-colletion-filter-value--close-icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}}]}}},Qd=["innerHTML"];function eu(e,t,o,n,s,i){return c(),d("div",{class:"ecom-element ecom-collection ecom-collection__filter-values",innerHTML:e.liquid("filter_values")},null,8,Qd)}const tu=k(Ht,[["render",eu]]);Ht.__docgenInfo={exportName:"default",displayName:"CollectionFilterValue",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Collection/FilterValue.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Bt={name:"NewsletterForm",presets:!0,mixins:[M,T,H],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){var e,t,o,n,s,i,a,l;return{newsletter:{code:`
                    {% form 'customer', action:'/contact',  class: 'ecom-shopify__newsletter-form' ${(e=this.data.settings)!=null&&e.tracking_id?`,data-ec-tracking-id:'${(t=this.data.settings)==null?void 0:t.tracking_id}'`:""},id:'newsletter-form-${this.data.id}' %}
                        <input type="hidden" name="contact[tags]" value="${((o=this.data.settings)==null?void 0:o.customer_tag)||"newsletter"}" />
                        <div class="ecom-newsletter-form-content">
                            <input
                            id="ECom-NewsletterForm-${this.data.id}"
                            type="email"
                            name="contact[email]"
                            class="ecom-shopify__newsletter-form-field--input"
                            value="{{ form.email }}"
                            aria-required="true"
                            autocorrect="off"
                            autocapitalize="off"
                            autocomplete="email"
                            {% if form.errors  %}
                                autofocus
                                aria-invalid="true"
                            {% endif %}
                            placeholder="${(n=this.data.settings)==null?void 0:n.email_placeholder}"
                            required
                            >
                        <button type="submit" class="ecome-shopify__newsletter__button" name="commit">
                        <span> ${this.lang((s=this.data.settings)==null?void 0:s.button_title,"submit_title")} </span>
                        <span class="ecom-shopify__newsletter__button-icon">${this.lang((i=this.data.settings)==null?void 0:i.icon)} </span>
                        </button>
                        </div>



                        {%- if form.posted_successfully? or EComBuilderMode == true ${this.data.settings.show_preview?"":" and false "} -%}
                        <div class="ecom-shopify__newsletter-form-success" {% unless EComBuilderMode %}tabindex="-1"  autofocus{% endunless %}>
                            ${this.lang((a=this.data.settings)==null?void 0:a.success_message,"success_message")}
                        </div>
                        {%- endif -%}
                        {%- if form.errors or EComBuilderMode == true  ${this.data.settings.show_preview?"":" and false "}  -%}
                        <div class="ecom-shopify__newsletter-form-message">
                            <h2 class="ecom-shopify__newsletter-form-status-error" role="alert" {% unless EComBuilderMode %}tabindex="-1"  autofocus{% endunless %}>
                              ${this.lang((l=this.data.settings)==null?void 0:l.error_title,"error_title")}
                            </h2>
                            <p class="ecom-shopify__newsletter-form-detail-error">
                                {% if EComBuilderMode %}
                                    This is example error text when missing email field
                                {% endif %}
                                {{ form.errors.translated_fields['email'] | capitalize }} {{ form.errors.messages['email'] }}
                            </p>
                        </div>
                        {%- endif -%}
                        <div class="ecom-shopify__newsletter-form-message ecom-dn">
                            <p class="ecom-shopify__newsletter-form-detail-error">
                                ${this.lang("Email have already subscribed!","error_already")}
                            </p>
                        </div>
                    {% endform %}

                    `,preview:""}}},javascript(){return function(){const e=this.$el;if(!e)return;const t=e.querySelector("form");let o=this.settings.link_redirect;this.isLive&&(function(){if(!o)return!1;let s=o.href;if(s=="")return!1;let i=o.target;window.location.href.includes("customer_posted=true")&&(i==="_blank"?window.open(s):window.location.href=s)}(),window.location.pathname.includes("challenge")&&this.settings.scroll_in_view&&setTimeout(function(){var s=document.querySelector(".shopify-challenge__container");s.scrollIntoView()},100),location.search==="?contact%5Btags%5D=newsletter&form_type=customer"&&t&&t.querySelector(".ecom-shopify__newsletter-form-message.ecom-dn")&&t.querySelector(".ecom-shopify__newsletter-form-message.ecom-dn").classList.remove("ecom-dn"),t.dataset.ecTrackingId&&t.addEventListener("submit",function(){window.Shopify&&window.Shopify.analytics&&Shopify.analytics.publish("ec_custom_events",{button_id:t.id,tracking_id:t.dataset.ecTrackingId})},{once:!0}))}},settings(){return[{group_title:"General",params:[{type:"text",label:"Placeholder text",name:"email_placeholder",value:"example@gmail.com",placeholder:"example@gmail.com"},{type:"text",label:"Submit button label",name:"button_title",value:"Subscribe",placeholder:"Subscribe"},{type:"picker",label:"Icon",name:"icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"choose",label:"Icon position",name:"icon_position",options:{type:"align-x",values:[-1,1],visible:{keep_data:!1,condition:e=>e.icon}},css:{selector:" .ecom-shopify__newsletter__button-icon",properties:{order:""}}},{type:"number",label:"Icon spacing",name:"spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.icon}},css:{selector:" .ecome-shopify__newsletter__button",properties:{gap:""}}},{type:"line"},{type:"text",label:"Customer tag",name:"customer_tag",value:"newsletter",placeholder:"newsletter"},{type:"line"},{type:"popup",label:"Layout",name:"layout",options:{type:"dropdown",default:!1,values:{row:"Horizontal",column:"Vertical"},preview:"title"},css:{selector:" .ecom-newsletter-form-content",properties:{"flex-direction":""}}},{type:"toggle",name:"show_preview",label:"Show preview messages",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"toggle",name:"scroll_in_view",value:!0,label:"Scroll to form after submit",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"text",label:"Success message",name:"success_message",value:"Subscribed successfully!",placeholder:"Subscribed successfully!"},{type:"text",label:"Error message",name:"error_title",placeholder:"Oops! An error has occured"},{type:"line"},{type:"link",name:"link_redirect",label:"Link redirect after successful form submit"}]},{group_title:"Tracking",params:[{type:"text",name:"tracking_id",label:"Tracking ID",options:{placeholder:"newsletter_form"}},{type:"paragraph",content:`You can use this field to add a tracking ID to your form. This ID will be sent to your EC Analytics when the form is submited. 
 Example: *newsletter_form*`}]}]},fields(){var e;return this.data&&this.data.settings&&"fields"in this.data.settings?(e=this.data.settings)==null?void 0:e.fields:[]},style(){var t;const e=[{group_alias:"box",options:{group_title:"General",group_name:"general"},modify:{params:[{alias:"width",options:{css:{selector:"root .ecom-newsletter-form-content"}}},{alias:"align-items",options:{label:"Alignment",css:{selector:" .ecom-shopify__newsletter-form-container form",properties:{"justify-content":"","text-align":`if(value === 'flex-start') return 'left';
                                                            else if(value === 'flex-end') return 'right';
                                                            return 'center';`}}}},{alias:"align-items",options:{label:"Content alignment",name:"content_alignment",css:{selector:"root .ecom-newsletter-form-content",properties:{"justify-content":"","align-items":""}}}}]}},{group_alias:"input",options:{group_name:"input",group_title:"Input",selector:" .ecom-shopify__newsletter-form-field--input"},modify:{params:[{position:5,fields:[{alias:"height"}]}]}},{group_alias:"button",options:{group_title:"Button",group_name:"button",selector:" .ecome-shopify__newsletter__button"},modify:{params:[{position:7,fields:[{alias:"align-items",options:{label:"Content alignment",name:"btn_text_alignment",css:{properties:{"justify-content":"","align-items":""}}}}]}]}},{group_alias:"text:spacing",options:{group_name:"noticeSuccess",group_title:"Success message",selector:" .ecom-shopify__newsletter-form-success"}},{group_alias:"text:spacing",options:{group_name:"noticeError",group_title:"Error message",selector:" .ecom-shopify__newsletter-form-status-error"},modify:{params:[{position:20,fields:[{type:"line"},{type:"paragraph",content:"### Error detail text"},{type:"choose",label:"Alignment",name:"error_text_align",options:{oneline:!0,responsive:!0,type:"text-align",values:["left","center","right"]},css:{selector:"root .ecom-shopify__newsletter-form-detail-error:not(empty)",properties:{"text-align":""}}},{type:"popup",label:"Typography",name:"error_typo",options:{global:{type:"typography"},oneline:!0,responsive:!0,type:"typography"},css:{selector:"root  .ecom-shopify__newsletter-form-detail-error:not(empty)"}},{name:"error_color",label:"Text Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{selector:"root .ecom-shopify__newsletter-form-detail-error:not(empty)",properties:{color:""}}},{name:"error_text_shadow",label:"Text Shadow",type:"popup",options:{oneline:!0,type:"text-shadow"},css:{selector:"root .ecom-shopify__newsletter-form-detail-error:not(empty)",properties:{"text-shadow":""}}},{alias:"spacing",options:{name:"error_line_spacing",css:{selector:"root .ecom-shopify__newsletter-form-detail-error:not(empty)"}}}]}]}}];return(t=this.data.settings)!=null&&t.icon&&e.push({group_alias:"icon",options:{group_name:"icon",group_title:"Icon",selector:" .ecom-shopify__newsletter__button-icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}}),e},css(){return`
                .ecom-shopify__newsletter-form-heading,.ecom-shopify__newsletter-form-paragraph
                {
                    text-align:center;
                }

                .ecom-shopify__newsletter-form {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    margin: 0px auto;
                    gap: 5px;
                }
                .ecom-shopify__newsletter-form-field label {
                    display: none;
                }
                .ecom-shopify__newsletter-form-field--input {
                    background: #FFFFFF;
                    border: 1px solid #D1D5DB;
                    outline:none;
                    padding: 9px 13px;
                    border-radius:0;
                }
                .ecom-shopify__newsletter-form-field--input:focus{
                    border-color:rgba(5, 150, 105,1);
                    /*box-shadow:rgb(255, 255, 255) 0px 0px 0px 0px, rgba(5, 150, 105,1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;*/
                }
                .ecom-shopify__newsletter-form-field--input:focus-visible {
                    /*border : none;*/
                    outline : none;
                    box-shadow: none
                }
                    .ecom-shopify__newsletter-form-heading {
                        margin: 0;
                    }
                    .ecom-shopify__newsletter-form-paragraph {
                        margin-top : 12px;
                        font-size: 1.6rem;
                        line-height: 24px;
                    }
                     .ecome-shopify__newsletter__button {
                        border-radius:0;
                        background : rgba(5, 150, 105,1);
                        padding : 9px 17px;
                        color: #FFFFFF;
                        border: none;
                        cursor: pointer;
                        flex-direction: row;
                        display: flex;
                        align-items: center;
                    }
                    .ecome-shopify__newsletter__button:hover {
                       background-color: rgb(97 188 160);
                    }
                    .ecom-newsletter-form-content{
                        display:flex;
                        align-items:center;
                        justify-content: space-between;
                    }
                    .ecom-shopify__newsletter-form-success,
                    .ecom-shopify__newsletter-form-message{
                        width: 100%
                    }
                    .ecom-shopify__newsletter__button-icon svg {
                        width: 24px;
                        height: 24px;
                    }
                    @media screen and (max-width : 640px) {
                        .ecom-newsletter-form-content{
                            flex-wrap:wrap;
                        }
                    }
            `},default(){return{settings:{email_placeholder:"example@gmail.com",button_title:"Subscribe",success_message:"Subscribed successfully!",error_title:"Opps!. An error has occurred",link_redirect:{href:"",target:""}},style:{general:{alignItems:"center","align-items":"center"},input:{"text-align":"left",spacing:{margin:{right:"10px",top:"0px",left:"0px",bottom:"0px"},padding:{top:"10px",left:"10px",bottom:"10px",right:"10px"}},borderRadius:{top:"0px",left:"0px",bottom:"0px",right:"0px"},tab:"normal"},button:{buttonColornormalmode:"#ffffff",buttonBackgroundnormalmode:{classic:{"background-color":"#047857"}},buttonColorhovermode:"#ffffff",buttonBackgroundhovermode:{classic:{"background-color":"#047857"}},spacing:{padding:{top:"10px",left:"10px",bottom:"10px",right:"10px"}},tab:"hover",transition:{transition:{duration:"300ms",delay:"200ms",timing:"ease-in"}}},noticeSuccess:{textTextAlign:"center",spacing:{margin:{top:"0px",bottom:"0px",right:"0px"}}},noticeError:{textTextAlign:"center",spacing:{padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"},margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}}},advanced:{spacing:{margin:{top:"0px"},padding:{top:"20px"}}}}}},methods:{}},ou={class:"ecom-element ecom-shopify-elements ecom-shopify__newsletter-form"},iu={class:"ecom-shopify__newsletter-form-wrapper ecom-w__full"},nu={class:"ecom-shopify__newsletter-form-container"},su=["innerHTML"];function au(e,t,o,n,s,i){return c(),d("div",ou,[p("div",iu,[p("div",nu,[p("div",{innerHTML:e.liquid("newsletter")},null,8,su)])])])}const ru=k(Bt,[["render",au]]);Bt.__docgenInfo={exportName:"default",displayName:"NewsletterForm",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Shopify/Newsletter.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const qt={name:"ProductTitle",mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){return{define_page:{code:`
                    {%- capture page_handle -%}${this.selected_page}{%- endcapture -%}
                    {%- if page_handle != empty -%}
                        {% assign page = pages[page_handle] %}
                    {%- endif -%}
                    `,preview:""},title:{code:`
                        {%- if page != empty %}{{page.title}}{%- endif -%}
                    `,preview:"The preview title"},url:{code:"{{page.url}}",preview:"#"},content:{code:`
                        {% if page %}
                            {{ page.content }}
                        {% elsif page_handle == empty %}
                            Please select the page to show content
                        {% endif %}
                    `,preview:"The preview content"},description:{code:"{{page.metafields.global.description_tag}}",preview:"The preview page description"},published_at:{code:"{{ page.published_at | time_tag }}",preview:""},author:{code:"{{ page.author }}",preview:"Admin"},liquid:{code:`
                            ${this.data.settings&&this.data.settings.attributes?this.data.settings.attributes.map(e=>e.type==="liquid"?e.settings.code:"").join(""):""}
                        `,preview:""}}},settings(){return[{params:[{type:"picker",label:"Select a page",name:"page",options:{type:"page",layout:"list",multiple:!1}},{type:"group",name:"attributes",label:"Select attributes to show",params:[{type:"title",name:"Page title",max:1,settings:[{type:"paragraph",content:"The title of selected page"},{type:"choose",label:"Heading Tag",name:"tag",options:{type:"heading"}},{type:"toggle",name:"show_as_link",label:"Show title as link",value:!1,options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}}]},{type:"content",name:"Page content",max:1,settings:[{type:"paragraph",content:"The content of selected page"}]},{type:"author",name:"Page author",max:1,settings:[{type:"paragraph",content:"The author of selected page"}]},{type:"published_at",name:"Page published at",max:1,settings:[{type:"paragraph",content:"The published date of selected page"}]},{type:"description",name:"Page description",max:1,settings:[{type:"paragraph",content:"The description of page"}]},{type:"liquid",name:"Custom liquid code",max:1,settings:[{type:"textarea",label:"Custom liquid code",name:"code",placeholder:"{{page.metafields.ecomposer.description_tag}}",description:"Learn more about [Liquid](https://shopify.dev/api/liquid/objects/page)",options:{toolbar:!0}}]}]}]}]},selected_page(){return this.data&&this.data.settings&&this.data.settings.page?this.data.settings.page.value:""},show_page_title(){return this.data&&this.data.settings&&"show_page_title"in this.data.settings?this.data.settings.show_page_title:!1},css(){return`
                .ecom-shopify__page-container{
                    display:flex;
                    flex-direction:column
                }
                .ecom-shopify__page-container > div > *{
                    width:100%
                }
                .ecom-shopify__page--headline-link{
                    text-decoration:none;
                }
            `},default(){return{settings:{attributes:[{type:"title",settings:{show_as_link:!0,tag:"h2"}},{type:"content"},{type:"author"},{type:"published_at"},{type:"description"}]},style:{page_title:{textTextAlign:"left",spacing:{margin:{bottom:"10px"}}},page_content:{textTextAlign:"left",spacing:{margin:{bottom:"20px"}}},page_author:{textTextAlign:"left",textColor:"#000"},page_publish_at:{textTextAlign:"left"},page_description:{textTextAlign:"left"}}}}},methods:{check(e){return this.data.settings.attributes&&this.data.settings.attributes.some(t=>t.type==e)},style(){return[{group_alias:"box",options:{selector:" .ecom-shopify__page-container",group_name:"general",group_title:"General"},modify:{params:{position:20,fields:{alias:"spacing"}}}},this.check("title")?{group_alias:"text",options:{group_name:"page_title",group_title:"Page title",selector:" .ecom-shopify__page--headline"},modify:{params:{fields:{alias:"spacing"},position:20}}}:null,this.check("content")?{group_alias:"text",options:{group_name:"page_content",group_title:"Page content",selector:" .ecom-shopify__page-content"},modify:{params:{fields:{alias:"spacing"},position:20}}}:null,this.check("author")?{group_alias:"text",options:{group_name:"page_author",group_title:"Page author",selector:" .ecom-shopify__page-author"},modify:{params:{fields:{alias:"spacing"},position:20}}}:null,this.check("published_at")?{group_alias:"text",options:{group_name:"page_publish_at",group_title:"Page publish at",selector:" .ecom-shopify__page-published_at"},modify:{params:{fields:{alias:"spacing"},position:20}}}:null,this.check("description")?{group_alias:"text",options:{group_name:"page_description",group_title:"Page description",selector:" .ecom-shopify__page-description"},modify:{params:{fields:{alias:"spacing"},position:20}}}:null].filter(e=>e)}}},lu={class:"ecom-element ecom-shopify-elements ecom-shopify__page"},cu={class:"ecom-shopify__page-wrapper"},pu={class:"ecom-shopify__page-container ecom-html"},mu=["href","title"],du=["innerHTML"],uu=["innerHTML"],gu=["innerHTML"],_u=["innerHTML"],hu=["innerHTML"];function fu(e,t,o,n,s,i){const a=N("Liquid");return c(),d("div",lu,[p("div",cu,[p("div",pu,[R(a,{data:i.liquids.define_page.code},null,8,["data"]),(c(!0),d(D,null,Y(o.data.settings.attributes,(l,u)=>(c(),d("div",{key:u},[l.type==="title"?(c(),d(D,{key:0},[l.settings.show_as_link?(c(),d("a",{key:0,href:e.liquid("url"),title:e.liquid("title"),class:"ecom-shopify__page--headline-link"},[(c(),z(W(l.settings.tag?l.settings.tag:"h3"),{class:"ecom-shopify__page--headline",innerHTML:e.liquid("title")},null,8,["innerHTML"]))],8,mu)):(c(),z(W(l.settings.tag?l.settings.tag:"h3"),{key:1,class:"ecom-shopify__page--headline",innerHTML:e.liquid("title")},null,8,["innerHTML"]))],64)):l.type==="content"?(c(),d("div",{key:1,class:"ecom-shopify__page-content",innerHTML:e.liquid("content")},null,8,du)):l.type==="author"?(c(),d("div",{key:2,class:"ecom-shopify__page-author",innerHTML:e.liquid("author")},null,8,uu)):l.type==="published_at"?(c(),d("div",{key:3,class:"ecom-shopify__page-published_at",innerHTML:e.liquid("published_at")},null,8,gu)):l.type==="description"?(c(),d("div",{key:4,class:"ecom-shopify__page-description",innerHTML:e.liquid("description")},null,8,_u)):l.type==="liquid"?(c(),d("div",{key:5,class:"ecom-shopify__page-description",innerHTML:e.liquid("liquid")},null,8,hu)):y("",!0)]))),128))])])])}const bu=k(qt,[["render",fu]]);qt.__docgenInfo={exportName:"default",displayName:"ProductTitle",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Shopify/PageContent.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Et={name:"ShopifyGlobalBlock",mixins:[M,T,H],docs:"https://help.ecomposer.io/docs/pages-templates/extra-builder/global-block/",props:{data:{type:Object,default(){return{}}}},computed:{liquids(){var e,t,o;return{block:{code:`
                        ${(t=(e=this.data.settings)==null?void 0:e.block)!=null&&t.value?`
                                {%- render 'ecom-${(o=this.data.settings)==null?void 0:o.block.value}-block' -%}
                            `:`
                            {%- if EComBuilderMode -%}
                                <p>Please select block in Settings, if you don't have block, create a block first</p>
                            {%- endif -%}
                            `}
                        `,preview:`
                            <div class="ecom-skeleton-item">
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-12 ecom-skeleton-big"></div>
                                </div>
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-12 ecom-skeleton-big"></div>
                                </div>
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-12 ecom-skeleton-big"></div>
                                </div>
                            </div>
                        `}}},javascript(){return function(){if(!this.settings||!this.$el||this.isLive)return;const e=this.$el;let t=e.querySelectorAll('script:not([type="application/json"])');t.length>0&&t.forEach(function(o){let n=document.createElement("script");n.type="text/javascript",n.innerText=o.innerText,o.src&&(n.src=o.src),e.appendChild(n),o.remove()})}},settings(){return[{params:[{type:"picker",name:"block",label:"Picker a block",options:{type:"block",layout:"list",multiple:!1},description:"Select a block to render or create a [new block]("+route("builder",{page:"block",layout:"ecom"})+")"}]}]},style(){return[{group_alias:"box",options:{group_title:"General"}}]},default(){return{}}},methods:{}},yu={class:"ecom-element ecom-shopify ecom-shopify__global-block"},vu=["innerHTML"];function xu(e,t,o,n,s,i){return c(),d("div",yu,[p("div",{class:"ecom-element ecom-shopify ecom-shopify__global-block__wrapper",innerHTML:e.liquid("block")},null,8,vu)])}const wu=k(Et,[["render",xu]]);Et.__docgenInfo={exportName:"default",displayName:"ShopifyGlobalBlock",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Shopify/GlobalBlock.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Dt={name:"ShopifyProductBox",presets:!0,docs:"https://help.ecomposer.io/docs/elements/shopify/product",components:{GroupElement:oe},mixins:[T],props:{data:{type:Object,default(){return{}}},index:{type:Number,default:0},deep:{type:Number,default:0}},data(){return{is:"product",name:"Product Box",hasElementRequestLiquid:!0,shopify_type:"product"}},computed:{section_id(){return(this==null?void 0:this.$parent.section_id)||""},settings(){return[{params:[{type:"paragraph",content:"This element is used to display product block. You can drag and drop product element from the left panel."},{name:"items",type:"group",value:[],options:{is_clear_all:!1,visible(){return!1}},params:[{type:"text",label:"Title",name:"title"}]}]}]},style(){return[{group_title:"Product container",selector:" .ecom-shopify__product-box > .ecom-group .core__group--body",group_name:"product_container",params:[{name:"padding",type:"dimension",label:"Padding",options:{responsive:!0,simple:!0,units:{px:{min:0,max:100}}},css:{properties:{padding:""}}},{name:"justify_content",alias:"justify-content",options:{label:"Items alignment",css:{selector:" .core__blocks--body"}}}]}]},css(){return`
                #ecom-builder .ecom-shopify__product-box .core__blocks.core__blocks--empty {
                    background-color: #e5e5f7;
                    opacity: 0.8;
                    background-image: radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
                    background-size: 10px 10px;
                }
                #ecom-builderx .ecom-shopify__product-box .core__group--items .core__group--body{
                    background-color: #e5e5f7;
                    opacity: 0.7;
                    background-image:  radial-gradient(#444cf7 0.65px, transparent 0.65px), radial-gradient(#444cf7 0.65px, #e5e5f7 0.65px);
                    background-size: 26px 26px;
                    background-position: 0 0,13px 13px;
                }
                .ecom-shopify__product-box div.core__group--body > div.core__blocks  {
                    padding: 0
                }
            `},default(){return{settings:{items:[{title:"Product container",blocks:[{title:"Product image",name:"productImage",settings:{image_action:"nothing",layout:"single",show_pagination:!1,show_thumbnails:!0,thumbnail_position:"column",slidesPerView:4,thumbnail_position__tablet:"column",slidesPerView__tablet:4,slidesPerView__mobile:4,thumbnail_position__mobile:"column",sliderControls:!0,zoom_height:"500px",zoom_width:"500px"},style:{product_thumb:{tabs:"normal",tab:"normal",imageAnimation:"grow",imageTransition:300,imageOpacitynormalmode:.8,imageOpacityhovermode:1,imageOpacityactivemode:1},product_image:{tab:"normal"},slider_controls:{navtab:"hover",navigatorPrimaryColornormalmode:"#e0dcdc",navigatorFontSize:"32px",navigatorPrimaryColorhovermode:"#240e0e"}},advanced:{},firstinit:!0,css:{settings:{style:".ecom-core.ecom-91a8asr6wbv .ecom-product-single__media--slider{flex-flow: column;}@media screen and (max-width: 1024px) and (min-width: 768px){.ecom-core.ecom-91a8asr6wbv .ecom-product-single__media--slider{flex-flow: column;}}@media screen and (max-width: 767px) and (min-width: 101px){.ecom-core.ecom-91a8asr6wbv .ecom-product-single__media--slider{flex-flow: column;}}",keyframes:[],fonts:[]},style:{style:"",keyframes:[],fonts:[]},advanced:{style:"",keyframes:[],fonts:[]}},hasRequestLiquid:!0},{title:"Product title",name:"productTitle",settings:{tag:"h2",classes:""},style:{textSpacing:{textTextAlign:"left"}},advanced:{},firstinit:!0,css:{settings:{style:"",keyframes:[],fonts:[]},style:{style:"",keyframes:[],fonts:[]},advanced:{style:"",keyframes:[],fonts:[]}},hasRequestLiquid:!0},{name:"text",settings:{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},style:{text:{textTextAlign:"left"},text_dropcap:{dropcapTypography:{"font-size":"40px"},dropcapColor:"#f50c0c",dropcapColorStackedView:"#5eff00",dropcapBackgroundStackedView:"#4800ff",dropcapColorFramedView:"#1aff00",dropcapBackgroundFramedView:"#1100ff",dropcapView:"framed"}},advanced:{},firstinit:!0,css:{settings:{style:"",keyframes:[],fonts:[]},style:{style:".ecom-core.ecom-l8xzgqefg5 .text-content,.ecom-core.ecom-l8xzgqefg5  .text-content a,.ecom-core.ecom-l8xzgqefg5  .text-content p,.ecom-core.ecom-l8xzgqefg5  .text-content span{text-align: left;}",keyframes:[],fonts:[]},advanced:{style:"",keyframes:[],fonts:[]}}},{title:"Add to cart",name:"productAddToCart",settings:{pre_order:"Pre Order",add_to_cart:"Add to cart",product_unavailable:"Unavailable",product_outstock:"Out stock",show_dynamic_checkout:!0,added_cart_text:"Added to cart",added_cart_message:"Added to cart",action:"popup",payment_terms:!1,icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z"></path></svg>',icon_position:-1,spacing:"10px",animation:!0,animation_loop_time:3},style:{add_to_cart_button:{tab:"normal",spacing:{padding:{top:"12.5px",left:"50px",bottom:"12.5px",right:"50px"}},buttonColorhovermode:"#fff",buttonBackgroundhovermode:{classic:{"background-color":"#16b9de"}},buttonBackgroundnormalmode:{classic:{"background-color":"#0691b1"}},buttonColornormalmode:"#fff",buttonBordernormalmode:{"border-style":"none"},buttonTypography:{"font-weight":"500","text-transform":"uppercase","letter-spacing":"1.5px","font-style":"normal"},transition:{transition:{duration:"300ms",timing:"ease"}},buttonBorderRadiusnormalmode:{right:"5px",top:"5px",left:"5px",bottom:"5px"},atc_animation:"shake"},sold_out_or_unavailable_button:{tab:"normal",buttonColornormalmode:"#fff",buttonBackgroundnormalmode:{classic:{"background-color":"#bdb9b9"}},buttonBordernormalmode:{"border-style":"none"},spacing:{padding:{right:"50px",left:"50px",top:"12.5px",bottom:"12.5px"}}},icon:{iconFontSize:"20px"}},advanced:{},firstinit:!0,css:{settings:{style:".ecom-core.ecom-hvik5par0im .ecom__element--button-icon{order: -1;}.ecom-core.ecom-hvik5par0im .ecom-product-single__add-to-cart--submit{gap: 10px;}",keyframes:[],fonts:[]},style:{style:".ecom-core.ecom-hvik5par0im .ecom-product-single__add-to-cart--submit{font-weight: 500;text-transform: uppercase;letter-spacing: 1.5px;font-style: normal;color: #fff;background-color: #0691b1;border-style: none;border-radius: 5px;padding: 12.5px 50px 12.5px 50px;}.ecom-core.ecom-hvik5par0im .ecom-product-single__add-to-cart--submit:hover{color: #fff;background-color: #16b9de;}.ecom-core.ecom-hvik5par0im .ecom-product-single__add-to-cart--submit.animated{animation-name: shake;;animation-duration: .75s;;}.ecom-core.ecom-hvik5par0im .ecom-product-single__add-to-cart--submit:disabled{color: #fff;background-color: #bdb9b9;border-style: none;padding: 12.5px 50px 12.5px 50px;}.ecom-core.ecom-hvik5par0im .ecom__element--button-icon svg{height: 20px;width: 20px;}",keyframes:[[],[],[],"@keyframes shake{from,to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}",[],[]],fonts:[]},advanced:{style:"",keyframes:[],fonts:[]}},hasRequestLiquid:!0}],hasElementRequestLiquid:!0,shopify_type:"product"}]},style:{},advanced:{"custom-css":"& .ecom-shopify__product-box .core__group--items .ecom-product-form > .core__blocks > .core__blocks--body{min-height:200px;margin:10px auto;}"}}}}},ku={class:"ecom-element ecom-shopify ecom-shopify__product-box"};function Cu(e,t,o,n,s,i){const a=N("GroupElement");return c(),d("div",ku,[R(a,{isProductBox:!0,data:o.data,deep:o.deep,index:o.index,section_id:i.section_id},null,8,["data","deep","index","section_id"])])}const Tu=k(Dt,[["render",Cu]]);Dt.__docgenInfo={exportName:"default",displayName:"ShopifyProductBox",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"index",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"deep",type:{name:"number"},defaultValue:{func:!1,value:"0"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Shopify/Product.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts"]};const At={name:"ShopifyArticleBox",presets:!0,docs:"https://help.ecomposer.io/docs/elements/shopify/article",components:{GroupElement:oe},mixins:[T],props:{data:{type:Object,default(){return{}}},index:{type:Number,default:0},deep:{type:Number,default:0}},data(){return{is:"article",name:"Article Box",hasElementRequestLiquid:!0,shopify_type:"article"}},computed:{section_id(){return(this==null?void 0:this.$parent.section_id)||""},settings(){return[{params:[{type:"paragraph",content:"This element is used to display article block. You can drag and drop article element from the left panel."},{name:"items",type:"group",value:[],options:{is_clear_all:!1,visible(){return!1}},params:[{type:"text",label:"Title",name:"title"}]}]}]},style(){return[{group_title:"Article container",selector:" .ecom-shopify__article-box > .ecom-group .core__group--body",group_name:"article_container",params:[{name:"padding",type:"dimension",label:"Padding",options:{responsive:!0,simple:!0,units:{px:{min:0,max:100}}},css:{properties:{padding:""}}},{name:"justify_content",alias:"justify-content",options:{label:"Items alignment",css:{selector:" .core__blocks--body"}}}]}]},css(){return`
                #ecom-builder .ecom-shopify__article-box .core__blocks.core__blocks--empty {
                    background-color: #e5e5f7;
                    opacity: 0.8;
                    background-image: radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
                    background-size: 10px 10px;
                }
                #ecom-builderx .ecom-shopify__article-box .core__group--items .core__group--body{
                    background-color: #e5e5f7;
                    opacity: 0.7;
                    background-image:  radial-gradient(#444cf7 0.65px, transparent 0.65px), radial-gradient(#444cf7 0.65px, #e5e5f7 0.65px);
                    background-size: 26px 26px;
                    background-position: 0 0,13px 13px;
                }
                .ecom-shopify__article-box div.core__group--body > div.core__blocks  {
                    padding: 0
                }
            `},default(){return{settings:{items:[{title:"Article container",blocks:[{title:"Article image",name:"articleImage",settings:{},style:{},advanced:{},firstinit:!0,css:{settings:{style:".ecom-core.ecom-91a8asr6wbv .ecom-article-single__media--slider{flex-flow: column;}@media screen and (max-width: 1024px) and (min-width: 768px){.ecom-core.ecom-91a8asr6wbv .ecom-article-single__media--slider{flex-flow: column;}}@media screen and (max-width: 767px) and (min-width: 101px){.ecom-core.ecom-91a8asr6wbv .ecom-article-single__media--slider{flex-flow: column;}}",keyframes:[],fonts:[]},style:{style:"",keyframes:[],fonts:[]},advanced:{style:"",keyframes:[],fonts:[]}},hasRequestLiquid:!0},{title:"Article title",name:"articleTitle",settings:{tag:"h2",classes:""},style:{textSpacing:{textTextAlign:"left"}},advanced:{},firstinit:!0,css:{settings:{style:"",keyframes:[],fonts:[]},style:{style:"",keyframes:[],fonts:[]},advanced:{style:"",keyframes:[],fonts:[]}},hasRequestLiquid:!0},{name:"text",settings:{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},style:{text:{textTextAlign:"left"},text_dropcap:{dropcapTypography:{"font-size":"40px"},dropcapColor:"#f50c0c",dropcapColorStackedView:"#5eff00",dropcapBackgroundStackedView:"#4800ff",dropcapColorFramedView:"#1aff00",dropcapBackgroundFramedView:"#1100ff",dropcapView:"framed"}},advanced:{},firstinit:!0,css:{settings:{style:"",keyframes:[],fonts:[]},style:{style:".ecom-core.ecom-l8xzgqefg5 .text-content,.ecom-core.ecom-l8xzgqefg5  .text-content a,.ecom-core.ecom-l8xzgqefg5  .text-content p,.ecom-core.ecom-l8xzgqefg5  .text-content span{text-align: left;}",keyframes:[],fonts:[]},advanced:{style:"",keyframes:[],fonts:[]}}},{title:"Add to cart",name:"articleAddToCart",settings:{pre_order:"Pre Order",add_to_cart:"Add to cart",article_unavailable:"Unavailable",article_outstock:"Out stock",show_dynamic_checkout:!0,added_cart_text:"Added to cart",added_cart_message:"Added to cart",action:"popup",payment_terms:!1,icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z"></path></svg>',icon_position:-1,spacing:"10px",animation:!0,animation_loop_time:3},style:{add_to_cart_button:{tab:"normal",spacing:{padding:{top:"12.5px",left:"50px",bottom:"12.5px",right:"50px"}},buttonColorhovermode:"#fff",buttonBackgroundhovermode:{classic:{"background-color":"#16b9de"}},buttonBackgroundnormalmode:{classic:{"background-color":"#0691b1"}},buttonColornormalmode:"#fff",buttonBordernormalmode:{"border-style":"none"},buttonTypography:{"font-weight":"500","text-transform":"uppercase","letter-spacing":"1.5px","font-style":"normal"},transition:{transition:{duration:"300ms",timing:"ease"}},buttonBorderRadiusnormalmode:{right:"5px",top:"5px",left:"5px",bottom:"5px"},atc_animation:"shake"},sold_out_or_unavailable_button:{tab:"normal",buttonColornormalmode:"#fff",buttonBackgroundnormalmode:{classic:{"background-color":"#bdb9b9"}},buttonBordernormalmode:{"border-style":"none"},spacing:{padding:{right:"50px",left:"50px",top:"12.5px",bottom:"12.5px"}}},icon:{iconFontSize:"20px"}},advanced:{},firstinit:!0,css:{settings:{style:".ecom-core.ecom-hvik5par0im .ecom__element--button-icon{order: -1;}.ecom-core.ecom-hvik5par0im .ecom-article-single__add-to-cart--submit{gap: 10px;}",keyframes:[],fonts:[]},style:{style:".ecom-core.ecom-hvik5par0im .ecom-article-single__add-to-cart--submit{font-weight: 500;text-transform: uppercase;letter-spacing: 1.5px;font-style: normal;color: #fff;background-color: #0691b1;border-style: none;border-radius: 5px;padding: 12.5px 50px 12.5px 50px;}.ecom-core.ecom-hvik5par0im .ecom-article-single__add-to-cart--submit:hover{color: #fff;background-color: #16b9de;}.ecom-core.ecom-hvik5par0im .ecom-article-single__add-to-cart--submit.animated{animation-name: shake;;animation-duration: .75s;;}.ecom-core.ecom-hvik5par0im .ecom-article-single__add-to-cart--submit:disabled{color: #fff;background-color: #bdb9b9;border-style: none;padding: 12.5px 50px 12.5px 50px;}.ecom-core.ecom-hvik5par0im .ecom__element--button-icon svg{height: 20px;width: 20px;}",keyframes:[[],[],[],"@keyframes shake{from,to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}",[],[]],fonts:[]},advanced:{style:"",keyframes:[],fonts:[]}},hasRequestLiquid:!0}],hasElementRequestLiquid:!0,shopify_type:"article"}]},style:{},advanced:{"custom-css":"& .ecom-shopify__article-box .core__group--items .ecom-article-form > .core__blocks > .core__blocks--body{min-height:200px;margin:10px auto;}"}}}}},Lu={class:"ecom-element ecom-shopify ecom-shopify__article-box"};function $u(e,t,o,n,s,i){const a=N("GroupElement");return c(),d("div",Lu,[R(a,{data:o.data,deep:o.deep,index:o.index,section_id:i.section_id},null,8,["data","deep","index","section_id"])])}const Su=k(At,[["render",$u]]);At.__docgenInfo={exportName:"default",displayName:"ShopifyArticleBox",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"index",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"deep",type:{name:"number"},defaultValue:{func:!1,value:"0"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Shopify/Article.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts"]};const zt={name:"ShopifySearch",mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){var e,t,o,n;return{search_form:{code:`
                            <form action="{{ routes.search_url }}" method="GET" class="ecom-shopify__search-form ecom-flex ecom-al_center">
                                <input type="text"
                                    class="ecom-shopify__search-input"
                                    placeholder="${this.lang(this.data.settings.placeholder,"search_placeholder")}"
                                    name="q"
                                    value="{{ search.terms | escape }}"
                                />
                                <input type="hidden" name="type" value="${this.types}" />
                                <input type="hidden" name="options[unavailable_products]" value="${this.unavailable_products}" />
                                <input type="hidden" name="options[prefix]" value="${this.prefix}" />
                                <input type="hidden" name="options[sort_by]" value="${this.sort_by}" />
                                ${((e=this.data.settings)==null?void 0:e.search_button_title)||((t=this.data.settings)==null?void 0:t.icon)?`
                                    <button type="submit" class="ecom-flex ecom-al_center ecom-fl_center ecom-search-btn-submit">
                                        ${this.lang(this.data.settings.search_button_title,"search_button_title")}
                                        ${(o=this.data.settings)!=null&&o.icon?`<span class="ecom__element--button-icon ecom-flex ecom-al_center ecom-fl_center">${(n=this.data.settings)==null?void 0:n.icon}</span>`:""}
                                    </button>
                                 `:""}

                            </form>
                        `,preview:`<div class="ecom-skeleton-item ecom__row">
                                <div class="ecom-skeleton-col-12 ecom-col-12">
                                    <div class="ecom-skeleton-row">
                                        <div class="ecom-skeleton-col-8 ecom-skeleton-big"></div>
                                    </div>
                                </div>
                            </div>`}}},settings(){return[{params:[{type:"text",name:"placeholder",label:"Placeholder text",options:{toolbar:!1}},{type:"text",name:"search_button_title",label:"Button text",options:{toolbar:!1}},{type:"choose",label:"Button position",name:"btn_position",options:{type:"align-x",values:[-1,1],visible:{keep_data:!1,condition:e=>e.icon}},css:{selector:" .ecom-search-btn-submit",properties:{order:""}}},{type:"picker",label:"Icon",name:"icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"choose",label:"Icon position",name:"icon_position",options:{type:"align-x",values:[-1,1],visible:{keep_data:!1,condition:e=>e.icon}},css:{selector:" .ecom__element--button-icon",properties:{order:""}}},{type:"number",label:"Icon spacing",name:"spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.icon}},css:{selector:" .ecom-search-btn-submit",properties:{gap:""}}},{type:"line"},{type:"checkbox",name:"types",label:"Specifies the type of results requested",options:{values:{product:"Product",page:"Page",article:"Article"}}},{type:"dropdown",name:"prefix",label:"Prefix",options:{preview:"title",default:!1,values:{none:"None",show:"Show"}},description:'For example, if "winter snow" is used as a search query, a search will find all applicable resources that contain both "winter" and any term that starts with "snow". This could be terms like "snow", "snowshoe", or "snowboard".'},{type:"dropdown",name:"unavailable_products",label:"Unavailable products display.",options:{preview:"title",default:!1,values:{last:"Order last",hide:"Hide",show:"Show"},visible:{condition:e=>e.types&&e.types.includes("product")}}},{type:"dropdown",name:"sort_by",label:"Sort by",options:{preview:"title",default:!1,values:{relevance:"Relevance","price-ascending":"Price ascending","price-descending":"Price descending"},visible:{condition:e=>e.types&&e.types.includes("product")}},description:'Specifies the sort order of the <results className=""></results>'}]}]},layout(){return this.data&&this.data.settings&&this.data.settings.layout?this.data.settings.layout:"horizontal"},types(){return this.data&&this.data.settings&&this.data.settings.types?this.data.settings.types:"all"},unavailable_products(){return this.data&&this.data.settings&&this.data.settings.unavailable_products?this.data.settings.unavailable_products:"hide"},prefix(){return this.data&&this.data.settings&&this.data.settings.prefix?this.data.settings.prefix:"none"},sort_by(){return this.data&&this.data.settings&&this.data.settings.sort_by?this.data.settings.sort_by:"relevance"},css(){return`
                .ecom-shopify__search-form input:focus-visible {
                    border : none;
                    outline : none;
                }
                .ecom-shopify__search-form input {
                    outline:none;
                }
                .ecom-shopify__search-form button {
                    cursor: pointer;
                }
                `},default(){return{settings:{search_button_title:"Search",placeholder:"Type some thing to search on store...",prefix:"none",unavailable_products:"last",types:["page","article"],icon:`<svg version="1.1" id="lni_lni-search-alt" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve" fill="currentColor">
<path d="M62.1,57L44.6,42.8c3.2-4.2,5-9.3,5-14.7c0-6.5-2.5-12.5-7.1-17.1v0c-9.4-9.4-24.7-9.4-34.2,0C3.8,15.5,1.3,21.6,1.3,28
	c0,6.5,2.5,12.5,7.1,17.1c4.7,4.7,10.9,7.1,17.1,7.1c6.1,0,12.1-2.3,16.8-6.8l17.7,14.3c0.3,0.3,0.7,0.4,1.1,0.4
	c0.5,0,1-0.2,1.4-0.6C63,58.7,62.9,57.6,62.1,57z M10.8,42.7C6.9,38.8,4.8,33.6,4.8,28s2.1-10.7,6.1-14.6c4-4,9.3-6,14.6-6
	c5.3,0,10.6,2,14.6,6c3.9,3.9,6.1,9.1,6.1,14.6S43.9,38.8,40,42.7C32,50.7,18.9,50.7,10.8,42.7z"></path>
</svg>`,spacing:"10px"},style:{input:{tab:"focus","text-align":"left",border:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#ccc"},outline:{outline:{"outline-style":"none"}},borderRadius:{top:"0px",left:"0px",bottom:"0px",right:"0px"},outline_focus:{outline:{"outline-style":"none"}}},button:{tab:"normal",spacing:{margin:{left:"13px"}},buttonBorderRadiusnormalmode:{top:"0px",left:"0px",bottom:"0px",right:"0px"},buttonBordernormalmode:{"border-style":"none"},buttonBackgroundnormalmode:{classic:{"background-color":"#07a2bc"}},buttonColornormalmode:"#fff",buttonHeightnormalmode:"40px",buttonWidthnormalmode:"100px"},icon:{iconFontSize:"19px"}}}}},methods:{style(){return[{group_alias:"box",options:{group_title:"General",selector:" .ecom-shopify__search"}},{group_alias:"input",options:{group_name:"input",group_title:"Input",selector:" .ecom-shopify__search-input"},modify:{params:[{position:6,fields:[{type:"number",name:"height_input",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:0,max:300}}},css:{properties:{height:""}}}]}]}},{group_alias:"button",options:{group_title:"Submit button",group_name:"button",selector:" .ecom-search-btn-submit"},modify:{remove:{label:["Width","Height"]},params:[{position:6,fields:[{name:"button_width",label:"Set width",type:"number",options:{visible:{keep_data:!1,condition:t=>t.tab=="normal"},responsive:!0,units:{px:{min:0,max:500},"%":{min:0,max:100}}},css:{properties:{width:""}}},{name:"button_height",label:"Set height",type:"number",options:{visible:{keep_data:!1,condition:t=>t.tab=="normal"},responsive:!0,units:{px:{min:0,max:500},"%":{min:0,max:100}}},css:{properties:{height:"","min-height":""}}},{name:"button_width_hover",label:"Set width",type:"number",options:{visible:{keep_data:!1,condition:t=>t.tab=="hover"},responsive:!0,units:{px:{min:0,max:500},"%":{min:0,max:100}}},css:{selector:"root .ecom-search-btn-submit:hover",properties:{width:""}}},{name:"button_height_hover",label:"Set height",type:"number",options:{visible:{keep_data:!1,condition:t=>t.tab=="hover"},responsive:!0,units:{px:{min:0,max:500},"%":{min:0,max:100}}},css:{selector:"root .ecom-search-btn-submit:hover",properties:{height:"","min-height":""}}}]}]}},{group_alias:"icon",options:{group_name:"icon",group_title:"Icon",selector:" .ecom__element--button-icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}}]}}},Mu={class:"ecom-element ecom-shopify ecom-shopify__search"},Hu={class:"ecom-element ecom-shopify ecom-shopify__search-wrapper"},Bu=["innerHTML"];function qu(e,t,o,n,s,i){return c(),d("div",Mu,[p("div",Hu,[p("div",{class:"ecom-element ecom-shopify ecom-shopify__search-container",innerHTML:e.liquid("search_form")},null,8,Bu)])])}const Eu=k(zt,[["render",qu]]);zt.__docgenInfo={exportName:"default",displayName:"ShopifySearch",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Shopify/Search.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const jt={name:"Cart Note",mixins:[M,T,H],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){return{cart_note:{code:"{{ cart.note }}",preview:""}}},settings(){return[{group_title:"General",params:[{type:"paragraph",content:`You can use the "Order Note" element to collect the customers' special request about order preparation and delivery`},{type:"text",label:"Order note label",name:"label",placeholder:"Order Note (optional)"},{type:"text",label:"Order note placeholder",name:"placeholder",placeholder:"Note about your order ..."}]}]},javascript(){return function(){}},css(){return`
                .ecom-cart__note-container{
                    display:flex;
                    flex-direction: column;
                }
                .ecom-cart__note-container label{
                    font-style: normal;
                    font-weight: 500;
                    font-size: 1.4rem;
                    line-height: 20px;
                    color: #374151;
                    margin-bottom:4px;
                }
                .ecom-cart__note-container textarea{
                    background: #FFFFFF;
                    border: 1px solid #D1D5DB;
                    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
                    height: 93px;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 1.4rem;
                    line-height: 20px;
                    color: #6B7280;
                    outline:none;
                }
            `},style(){return[{group_alias:"box",options:{group_title:"General"}},{group_alias:"text",options:{group_title:"Label",group_name:"label",selector:"root .ecom-cart__note-container label"},modify:{params:{position:10,fields:{alias:"spacing"}}}},{group_alias:"input",options:{group_name:"input_textarea",group_title:"Input",selector:" root .ecom-cart__note-container textarea"},modify:{remove:{index:1,length:1},params:[{position:2,fields:[{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-cart__attributes-input",properties:{"align-items":"","justify-content":""}}}}]}]}}]},default(){return{settings:{label:"Order Note (optional)",placeholder:"Note about your order ..."},style:{input:{"border-radius":{right:"4px",top:"4px",left:"4px",bottom:"4px"}}}}}},methods:{}},Du={class:"ecom-element ecom-cart ecom-cart__note"},Au={class:"ecom-cart__note-wrapper"},zu={class:"ecom-cart__note-container"},ju={htmlFor:"note",value:"note"};function Iu(e,t,o,n,s,i){return c(),d("div",Du,[p("div",Au,[p("div",zu,[p("label",ju,I(e.lang(o.data.settings.label,"cart_note_label")),1),(c(),z(W("textarea"),{name:"note",class:"ecom-cart ecom-cart__note--input",rows:"3",placeholder:e.lang(o.data.settings.placeholder,"cart_note_placeholder")},{default:Q(()=>[Le(I(e.liquid("cart_note")),1)]),_:1},8,["placeholder"]))])])])}const Pu=k(jt,[["render",Iu]]);jt.__docgenInfo={exportName:"default",displayName:"Cart Note",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Cart/Note.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const It={name:"Cart Gift Wrap",mixins:[M,T,H],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){var t,o,n,s,i,a;let e=this.exporting&&this.data.settings.product?"a":"div";return{button:{code:`
                        {%- capture product_handle -%} ${(t=this.data.settings.product)==null?void 0:t.value} {%- endcapture -%}
                        {%- assign product = all_products[product_handle] -%}
                        <${e} {% if product.selected_or_first_available_variant.id %} href="/cart/add/{{product.selected_or_first_available_variant.id}}" {% endif %}
                            class="ecom-gift-wrap-cart__button">
                            <span class="ecom-gift-wrap-cart__button-icon">
                                ${(n=(o=this.data.settings)==null?void 0:o.icon_button)!=null?n:""}
                            </span>
                            <span class="ecom-gift-wrap-cart__button-text">
                                ${(s=this.data.settings)!=null&&s.button_label?this.lang((i=this.data.settings)==null?void 0:i.button_label,"button_gift_label"):""}
                            </span>
                        </${e}>
                    `,preview:""},checkbox:{code:`
                        {%- capture product_handle -%} ${(a=this.data.settings.product)==null?void 0:a.value} {%- endcapture -%}
                        {%- assign product = all_products[product_handle] -%}
                        <input type="checkbox" {% if product.selected_or_first_available_variant.id %} data-href="/cart/add/{{product.selected_or_first_available_variant.id}}" {% endif %}
                            class="ecom-gift-wrap-cart__checkbox">
                    `,preview:""}}},settings(){return[{group_title:"General",params:[{type:"paragraph",content:`You can use the "Order Note" element to collect the customers' special request about order preparation and delivery`},{type:"picker",name:"product",label:"Choose product",options:{type:"product",output:["value","name","thumbnail"],editAlt:!0,visible:{keep_data:!1}}},{type:"textarea",label:"Order note label",name:"label",options:{toolbar:!0,height:80}},{type:"picker",label:"Icon",name:"icon_text",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:{keep_data:!1}}},{type:"choose",label:"Icon position",name:"icon_position",options:{type:"align-x",values:[-1,1]},css:{selector:" .ecom-gift-wrap-cart__content-icon",properties:{order:""}}},{name:"icon_animation",label:"Animation",type:"dropdown",options:{search:!0,type:"animation",size:"small"},css:{selector:" .ecom-gift-wrap-cart__content-icon",properties:{animation:""}}},{type:"number",name:"gap_text",label:"Gap",options:{units:{px:{min:0,max:50}}},css:{selector:" .ecom-gift-wrap-cart__content",properties:{gap:""}}},{type:"line"},{type:"switch",name:"enable_checkbox",label:"Use checkbox",options:{values:{on:{label:"yes",value:!0},off:{label:"no",value:!1}}}},{type:"text",name:"button_label",label:"Button label",options:{visible:e=>e.enable_checkbox!==!0}},{type:"picker",label:"Icon",name:"icon_button",options:{visible:e=>e.enable_checkbox!==!0,type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"choose",label:"Icon position",name:"icon_button_position",options:{visible:e=>e.enable_checkbox!==!0,type:"align-x",values:[-1,1]},css:{selector:" .ecom-gift-wrap-cart__button-icon",properties:{order:""}}},{type:"number",name:"gap_button",label:"Gap",options:{visible:e=>e.enable_checkbox!==!0,units:{px:{min:0,max:50}}},css:{selector:" .ecom-gift-wrap-cart__button",properties:{gap:""}}}]}]},javascript(){return function(){if(!this.$el)return;let e=this.$el;if(this.isLive){let o=e.querySelector(".ecom-gift-wrap-cart__checkbox");o&&o.addEventListener("click",function(){o.dataset.href&&(window.location=o.dataset.href)})}}},css(){return`
                .ecom-gift-wrap-cart__content-icon, .ecom-gift-wrap-cart__button-icon {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .ecom-gift-wrap-cart__content-icon svg, .ecom-gift-wrap-cart__button-icon svg {
                    width: 12px;
                    height: 12px;
                }
                .ecom-gift-wrap-cart__button {
                    text-decoration: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .ecom-gift-wrap-cart__action-checkbox {
                    height: 100%;
                    jutify-content: center;
                    align-items: center;
                }
                .ecom-gift-wrap-cart__checkbox[type=checkbox]{
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    padding: 0;
                    -webkit-print-color-adjust: exact;
                    color-adjust: exact;
                    display: inline-block;
                    vertical-align: middle;
                    background-origin: border-box;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    flex-shrink: 0;
                    height: 1.6rem;
                    width: 1.6rem;
                    background-color: #fff;
                    border: 1px solid rgba(209,213,219,1);
                }
                .ecom-gift-wrap-cart__checkbox[type=checkbox]:checked {
                    border-color: transparent;
                    background-color: #059669;
                    background-size: 100% 100%;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
                }
            `},style(){var n;let e=[{group_alias:"box",options:{group_title:"General"}},{group_alias:"text",options:{group_name:"text",group_title:"Text",selector:" .ecom-gift-wrap-cart__content-text"},modify:{remove:{index:0,length:1}}},{group_alias:"icon",options:{group_name:"icon_text",group_title:"Text icon",selector:"root .ecom-gift-wrap-cart__content-icon"}}],t=[{group_alias:"button",options:{group_name:"button",group_title:"Button",selector:" .ecom-gift-wrap-cart__button"}},{group_alias:"icon",options:{group_name:"icon_button",group_title:"Button icon",selector:"root .ecom-gift-wrap-cart__button-icon"}}],o={group_title:"Checkbox",params:[{type:"tab",name:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"},{name:"active",title:"Active"}]},css:!1},{alias:"background",options:{css:{selector:"root .ecom-gift-wrap-cart__checkbox"},options:{visible:s=>s.tab==="normal"}}},{alias:"background",options:{name:"backgroundHover",css:{properties:{background:""},selector:"root .ecom-gift-wrap-cart__checkbox:hover"},options:{visible:s=>s.tab==="hover"}}},{alias:"background",options:{name:"backgroundActive",css:{properties:{background:""},important:!0,selector:"root .ecom-gift-wrap-cart__checkbox:checked"},options:{visible:s=>s.tab==="active"}}},{type:"popup",label:"Border",name:"popup",options:{type:"border",visible:s=>s.tab==="normal"},css:{selector:"root .ecom-gift-wrap-cart__checkbox"}},{type:"popup",label:"Border",name:"popupHover",options:{type:"border",visible:s=>s.tab==="hover"},css:{properties:{border:""},selector:"root .ecom-gift-wrap-cart__checkbox:hover"}},{type:"popup",label:"Border",name:"popupActive",options:{type:"border",visible:s=>s.tab==="active"},css:{properties:{border:""},important:!0,selector:"root .ecom-gift-wrap-cart__checkbox:checked"}},{type:"dimension",label:"Border radius",name:"border-radius",options:{type:"radius",units:"default",visible:s=>s.tab==="normal"},css:{important:!0,selector:"root .ecom-gift-wrap-cart__checkbox"}},{type:"dimension",label:"Border radius",name:"border-radiusHover",options:{units:"default",type:"radius",visible:s=>s.tab==="hover"},css:{important:!0,properties:{"border-radius":""},selector:"root .ecom-gift-wrap-cart__checkbox:hover"}},{type:"dimension",label:"Border radius",name:"border-radiusActive",options:{units:"default",type:"radius",visible:s=>s.tab==="active"},css:{properties:{"border-radius":""},important:!0,selector:"root .ecom-gift-wrap-cart__checkbox:checked"}},{name:"transition",type:"number",label:'Transition Duration <span class="lowercase">(ms)</span>',options:{min:0,max:5e3,visible:{keep_data:!0,condition:s=>s.tab==="hover"}},css:{selector:"root .ecom-gift-wrap-cart__checkbox",properties:{transition:"all %value%ms ease"}}},{type:"line"},{alias:"spacing",options:{css:{selector:"root .ecom-gift-wrap-cart__checkbox"}}}]};return(n=this.data.settings)!=null&&n.enable_checkbox?e.push(o):e.push(...t),e},default(){return{settings:{icon_text:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M256 85.46L280.1 44.45C296.3 16.91 325.9 0 357.8 0H360C408.6 0 448 39.4 448 88C448 102.4 444.5 115.1 438.4 128H464C490.5 128 512 149.5 512 176V240C512 260.9 498.6 278.7 480 285.3V448C480 483.3 451.3 512 416 512H96C60.65 512 32 483.3 32 448V285.3C13.36 278.7 0 260.9 0 240V176C0 149.5 21.49 128 48 128H73.6C67.46 115.1 64 102.4 64 88C64 39.4 103.4 0 152 0H154.2C186.1 0 215.7 16.91 231.9 44.45L256 85.46zM288 176V240H464V176H288zM224 176H48V240H224V176zM224 288H80V448C80 456.8 87.16 464 96 464H224V288zM288 464H416C424.8 464 432 456.8 432 448V288H288V464zM360 128C382.1 128 400 110.1 400 88C400 65.91 382.1 48 360 48H357.8C342.9 48 329.1 55.91 321.5 68.78L286.7 128H360zM225.3 128L190.5 68.78C182.9 55.91 169.1 48 154.2 48H152C129.9 48 112 65.91 112 88C112 110.1 129.9 128 152 128H225.3z"></path></svg>',gap_text:"5px",gap_button:"0px",icon_button_position:1,icon_position:-1,label:'Do you want a gift wrap? <font color="#9e9595">Only 120.000\u0111</font>',button_label:"Add A Gift Wrap"},style:{text:{textColor:"#000000",textTypography:{"font-size":"14px"}},icon_text:{iconFontSize:"20px",iconPrimaryColor:"#000000"},button:{tab:"normal",buttonWidthnormalmode:"150px",buttonHeightnormalmode:"30px",buttonColornormalmode:"#000000",buttonBackgroundnormalmode:{classic:{"background-color":"#ffffff"}},buttonColorhovermode:"#ffffff",buttonBackgroundhovermode:{classic:{"background-color":"#000000"}},buttonBorderRadiusnormalmode:{top:"20px",left:"20px",bottom:"20px",right:"20px"},buttonBordernormalmode:{"border-style":"solid","border-color":"#000000","border-width":{top:"0.8px",left:"0.8px",bottom:"0.8px",right:"0.8px"}},buttonCursor:"pointer",transitions:{transitions:{duration:"300ms"}},spacing:{margin:{left:"37.5px"}},buttonTypography:{"font-size":"12px"}}}}}},methods:{}},Nu={class:"ecom-element ecom-cart ecom-gift-wrap-cart"},Vu={class:"ecom-gift-cart-wrapper"},Wu={class:"ecom-gift-wrap-cart__container"},Ou={class:"ecom-gift-wrap-cart__wrapper ecom-flex"},Fu={class:"ecom-gift-wrap-cart__content ecom-flex ecom-fl_center ecom-al_center"},Uu=["innerHTML"],Ru=["innerHTML"],Yu=["innerHTML"],Gu=["innerHTML"];function Ju(e,t,o,n,s,i){var a,l,u,r;return c(),d("div",Nu,[p("div",Vu,[p("div",Wu,[p("div",Ou,[p("div",Fu,[p("span",{innerHTML:(a=o.data.settings)==null?void 0:a.icon_text,class:"ecom-gift-wrap-cart__content-icon"},null,8,Uu),(l=o.data.settings)!=null&&l.enable_checkbox?(c(),d("div",{key:0,class:"ecom-gift-wrap-cart__action-checkbox ecom-flex",innerHTML:e.liquid("checkbox")},null,8,Ru)):y("",!0),p("span",{innerHTML:e.lang((u=o.data.settings)==null?void 0:u.label,"gift_label"),class:"ecom-gift-wrap-cart__content-text"},null,8,Yu)]),(r=o.data.settings)!=null&&r.enable_checkbox?y("",!0):(c(),d("div",{key:0,class:"ecom-gift-wrap-cart__action-button ecom-flex",innerHTML:e.liquid("button")},null,8,Gu))])])])])}const Zu=k(It,[["render",Ju]]);It.__docgenInfo={exportName:"default",displayName:"Cart Gift Wrap",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Cart/GiftWrap.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Pt={name:"Cart informations",mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){return{properties:{code:this.properties.map(e=>{switch(e.type){case"discounts":return`

                                    {% if cart.discount_applications.size > 0 %}
                                    <dl class="ecom-cart__informations-discount_application">
                                        <dt class="ecom-cart__information-title">${this.lang(e.settings.title,"discounts_title")}</dt>
                                        <dd class="ecom-cart__information-text">
                                            {% for discount_application in cart.discount_applications %}
                                                {%- assign tmp = discount_application.total_allocated_amount | money -%}
                                                <span class="ecom-cart__informations-discount_application-value">
                                                    ${this.lang(e.settings.message,"discount_text",{title:"discount_application.title",amount:"tmp"})}
                                                </span><br>
                                            {% endfor %}
                                        </dd>
                                    </dl>
                                    {% else %}
                                        ${this.exporting?"":` <dl class="ecom-cart__informations-discount_application">
                                                    <dt class="ecom-cart__information-title">${this.lang(e.settings.title,"discounts_title")}</dt>
                                                    <dd class="ecom-cart__information-text">
                                                        <span>This is demo text</span>
                                                    </dd>
                                                </dl> `}
                                    {% endif %}
                                    `;case"item_count":return`
                                        <dl class="ecom-cart__informations-item_count">
                                            <dt class="ecom-cart__information-title">
                                                ${this.lang(e.settings.title,"item_count_title")}
                                            </dt>
                                            <dd class="ecom-cart__information-text">
                                                ${this.lang(e.settings.text,"item_count_text",{count:"cart.item_count"})}
                                            </dd>
                                        </dl>
                                    `;case"items_subtotal_price":return`
                                        <dl class="ecom-cart__informations-items_subtotal_price">
                                            <dt class="ecom-cart__information-title">
                                                ${this.lang(e.settings.title,"item_subtotal_title")}
                                            </dt>
                                            <dd class="ecom-cart__information-text">
                                                {{ cart.items_subtotal_price | money }}
                                            </dd>
                                        </dl>
                                    `;case"original_total_price":return`
                                        <dl class="ecom-cart__informations-original_total_price">
                                            <dt class="ecom-cart__information-title">
                                                ${this.lang(e.settings.title,"original_total_price")}
                                            </dt>
                                            <dd class="ecom-cart__information-text">
                                                {{ cart.original_total_price | money }}
                                            </dd>
                                        </dl>
                                    `;case"taxes_included":return`
                                        <dl class="ecom-cart__informations-taxes_included">
                                            <dt class="ecom-cart__information-title">
                                                ${this.lang(e.settings.title,"taxes_included_title")}
                                            </dt>
                                            <dd class="ecom-cart__information-text">
                                                {%- if cart.taxes_included-%}
                                                    ${this.lang(e.settings.included,"taxt_included_text")}
                                                {% else %}
                                                    ${this.lang(e.settings.included,"taxt_excluding_text")}
                                                {% endif %}
                                            </dd>
                                        </dl>
                                    `;case"total_discount":return`
                                    <dl class="ecom-cart__informations-total_discount">
                                            <dt class="ecom-cart__information-title">
                                                ${this.lang(e.settings.title,"total_discount_title")}
                                            </dt>
                                            <dd class="ecom-cart__information-text">
                                                {%- assign tmp = cart.total_discount | money -%}
                                                ${this.lang(e.settings.text,"total_discount_text",{amount:"tmp"})}
                                            </dd>
                                    </dl>
                                    `;case"total_price":return`
                                    <dl class="ecom-cart__informations-total_price">
                                        <dt class="ecom-cart__information-title">
                                            ${this.lang(e.settings.title,"total_price_title")}
                                        </dt>
                                        <dd class="ecom-cart__information-text">
                                            {%- assign tmp = cart.total_price | money -%}
                                            ${this.lang(e.settings.text,"total_price_text",{amount:"tmp"})}
                                        </dd>
                                    </dl>
                                    `;case"total_weight":return`
                                    <dl class="ecom-cart__informations-total_weight">
                                        <dt class="ecom-cart__information-title">
                                            ${this.lang(e.settings.title,"total_weight_title")}
                                        </dt>
                                        <dd class="ecom-cart__information-text">
                                            ${this.lang(e.settings.text,"total_weight_text",{amount:"cart.total_weight  "})}
                                        </dd>
                                    </dl>
                                    `;default:return""}}).join(""),preview:`
                        <div class="ecom-skeleton-item">
                            <div>
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-4 ecom-skeleton-big"></div>
                                    <div class="ecom-skeleton-col-8 ecom-skeleton-big ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-6"></div>
                                    <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-2"></div>
                                    <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-4"></div>
                                    <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-6"></div>
                                    <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-2"></div>
                                    <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                </div>
                            </div>
                        </div>
                        `}}},settings(){return[{group_title:"General",params:[{type:"paragraph",content:"Show all the information of cart."},{type:"group",name:"properties",label:"Select type of cart information to show",params:[{type:"discounts",name:"Application discounts",settings:[{type:"text",label:"Title",name:"title",placeholder:"Block title"},{type:"textarea",label:"Discount message",name:"message",description:"Show the information of discount application. Use {{title}} to display the title, {{amount}} to display the discount's value",placeholder:"Discount name: {{title}} Saving: - {{amount}}"}],max:1},{type:"item_count",name:"Item Quantity",settings:[{type:"paragraph",content:"Show the item's quantity inside the cart"},{type:"text",label:"Title",name:"title",placeholder:"Block title"},{type:"textarea",label:"Item Quantity Text",name:"text",description:"Use {{count}} to present the items' quantity",placeholder:"{{count}} item(s)"}],max:1,values:{title:"Total",text:"{{count}} item(s)"}},{type:"items_subtotal_price",name:"Subtotal price",settings:[{type:"paragraph",content:`Show subtotal price of the selected items, covering the item discount.
This price doesn't include some fees like taxes, cart discounts, shipping costs, etc.`},{type:"text",label:"Title",name:"title",placeholder:"Block title"}],max:1,values:{title:"Subtotal"}},{type:"original_total_price",name:"Subtotal of the cart",settings:[{type:"paragraph",content:"Show price before discounts of the whole cart"},{type:"text",label:"Title",name:"title",placeholder:"Block title"}],max:1,values:{title:"Subtotal"}},{type:"taxes_included",name:"Taxes",settings:[{type:"paragraph",content:"To make the taxes be included in your products' prices, you need to go to [Tax settings](https://www.shopify.com/admin/settings/taxes?shpxid=c3bb5c24-0574-4D27-06AB-E96B10C9EB73). Once you finish, the product price will reflect the tax value based on your customer's country."},{type:"text",label:"Title",name:"title",placeholder:"Block title"},{type:"text",label:"The text when taxes included",name:"included",placeholder:"Taxes included"},{type:"text",label:"The text when taxes excluding",name:"excluding",placeholder:"Taxes excluded"}],max:1,values:{title:"Taxes:",included:"Tax included",excluding:"Taxes excluded"}},{type:"total_discount",name:"Total discounts",settings:[{type:"paragraph",content:"Show the total value of all discounts"},{type:"text",label:"Title",name:"title",placeholder:"Block title"},{type:"textarea",label:"Total discount text",name:"text",description:"The text with discount amount. Use {{amount}} to show discount value",placeholder:"Saving {{amount}} "}],max:1,values:{title:"Total discount:",text:"Saving {{amount}}"}},{type:"total_price",name:"Total price",settings:[{type:"paragraph",content:"Show the total price of all of the items in the cart after discounts have been applied."},{type:"text",label:"Title",name:"title",placeholder:"Block title"},{type:"textarea",label:"Total price text",name:"text",description:"Use {{amount}} to show the total price value",placeholder:" {{amount}} "}],max:1,values:{title:"Total price:",text:"{{amount}}"}},{type:"total_weight",name:"Total weight",settings:[{type:"paragraph",content:"Show the total weight of all of the items in the cart."},{type:"text",label:"Title",name:"title",placeholder:"Block title"},{type:"textarea",label:"Total weight text",name:"text",description:"Use {{amount}} to show total item weight value",placeholder:" {{amount}} "}],max:1,values:{title:"Total weight:",text:"{{amount}} gram"}}]}]}]},properties(){return this.data&&this.data.settings&&this.data.settings.properties?this.data.settings.properties:[]},css(){return`
                    .ecom-cart__informations-container dl{
                        display:flex;
                    }
                    .ecom-cart__informations-container dt{
                        font-style: normal;
                        font-weight: 500;
                        font-size: 1.4rem;
                        line-height: 20px;
                        color: #374151;
                        text-decoration: none;
                    }
                    .ecom-cart__informations-container dd{
                        margin-left:12px;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 1.4rem;
                        line-height: 20px;
                        color: rgba(107,114,128,1);
                    }
                    .ecom-cart__informations-wrapper {
                        display: flex;
                    }
                `},style(){return[{group_alias:"box",options:{group_name:"general",group_title:"General",selector:" .ecom-cart__informations-wrapper"},modify:{params:{alias:"justify-content",options:{label:"Alignment"}}}},{group_alias:"text",options:{group_name:"title",group_title:"Title",selector:"root dt.ecom-cart__information-title"},modify:{remove:{index:0,length:1},params:[{position:10,fields:[{alias:"spacing"}]}]}},{group_alias:"text",options:{group_name:"text_content",group_title:"Text content",selector:"root dd.ecom-cart__information-text"},modify:{remove:{index:0,length:1},params:[{position:10,fields:[{alias:"spacing"}]}]}}]},default(){return{settings:{properties:[{type:"discounts",settings:{title:"Discounts: ",message:"Discount name: {{title}} Saving: - {{amount}}"}},{type:"item_count",settings:{title:"Total: ",text:"{{count}} item(s)"}},{type:"items_subtotal_price",settings:{title:"Subtotal:"}},{type:"original_total_price",settings:{title:"Subtotal:"}},{type:"taxes_included",settings:{title:"Taxes:",included:"Tax included",excluding:"Taxes excluding"}},{type:"total_discount",settings:{title:"Total discount:",text:"Saving {{amount}}"}},{type:"total_price",settings:{title:"Total price:",text:"{{amount}}"}},{type:"total_weight",settings:{title:"Total weight:",text:"{{amount}} gram"}}]}}}},methods:{}},Ku={class:"ecom-element ecom-cart ecom-cart__informations"},Xu={class:"ecom-cart__informations-wrapper"},Qu=["innerHTML"];function eg(e,t,o,n,s,i){return c(),d("div",Ku,[p("div",Xu,[p("div",{class:"ecom-cart__informations-container",innerHTML:e.liquid("properties")},null,8,Qu)])])}const tg=k(Pt,[["render",eg]]);Pt.__docgenInfo={exportName:"default",displayName:"Cart informations",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Cart/Information.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Nt={name:"Cart Consent",mixins:[T],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){return{cart_note:{code:"{{ cart.note }}",preview:""}}},colorChecked(){var e;return(e=this.data.style)==null?void 0:e.checked_color},settings(){return[{group_title:"General",params:[{type:"paragraph",content:"Ask the customers' agreement with your store's terms and conditions before checking out."},{type:"textarea",label:"Cart consent text",name:"text",placeholder:"I agree with the terms and conditions.",options:{toolbar:!0,height:80}},{type:"textarea",label:"Notice when users does not tick to agree",name:"notice_message",placeholder:"Please check and accept our Terms & Conditions, Private Policy",options:{toolbar:!0,height:80}},{type:"switch",name:"show_notice",label:"Show notice demo",options:{values:{on:{label:"yes",value:!0},off:{label:"no",value:!1}}}}]}]},style(){return[{group_alias:"box",options:{group_title:"General"},modify:{params:[{position:2,fields:[{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-cart__agree-wrapper "}}}]}]}},{group_alias:"text",options:{group_name:"content",group_title:"Content",selector:"root .ecom-cart__agree-text"},modify:{remove:{index:0,length:1}}},{group_alias:"text",options:{group_name:"notice_message",group_title:"Notice message",selector:"root .ecom-cart__agree-notice-message"}},{group_alias:"box",options:{group_name:"notice_message_box",group_title:"Notice message box",selector:"root .ecom-cart__agree-notice-message"},modify:{params:[{position:10,fields:[{alias:"spacing"}]}]}},{group_title:"Checkbox",options:{group_name:"checkbox"},params:[{type:"paragraph",content:"** Input **"},{type:"tab",name:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"},{name:"active",title:"Active"}]},css:!1},{alias:"background",options:{css:{selector:"root .ecom-cart__agree--input"},options:{visible:e=>e.tab==="normal"}}},{alias:"background",options:{name:"backgroundHover",css:{properties:{background:""},selector:"root .ecom-cart__agree--input:hover"},options:{visible:e=>e.tab==="hover"}}},{alias:"background",options:{name:"backgroundActive",css:{properties:{background:""},important:!0,selector:"root .ecom-cart__agree--input:checked"},options:{visible:e=>e.tab==="active"}}},{type:"popup",label:"Border",name:"popup",options:{type:"border",visible:e=>e.tab==="normal"},css:{selector:"root .ecom-cart__agree--input"}},{type:"popup",label:"Border",name:"popupHover",options:{type:"border",visible:e=>e.tab==="hover"},css:{properties:{border:""},selector:"root .ecom-cart__agree--input:hover"}},{type:"popup",label:"Border",name:"popupActive",options:{type:"border",visible:e=>e.tab==="active"},css:{properties:{border:""},important:!0,selector:"root .ecom-cart__agree--input:checked"}},{type:"dimension",label:"Border radius",name:"border-radius",options:{type:"radius",units:"default",visible:e=>e.tab==="normal"},css:{important:!0,selector:"root .ecom-cart__agree--input"}},{type:"dimension",label:"Border radius",name:"border-radiusHover",options:{units:"default",type:"radius",visible:e=>e.tab==="hover"},css:{important:!0,properties:{"border-radius":""},selector:"root .ecom-cart__agree--input:hover"}},{type:"dimension",label:"Border radius",name:"border-radiusActive",options:{units:"default",type:"radius",visible:e=>e.tab==="active"},css:{properties:{"border-radius":""},important:!0,selector:"root .ecom-cart__agree--input:checked"}},{name:"transition",type:"number",label:'Transition Duration <span class="lowercase">(ms)</span>',options:{min:0,max:5e3,visible:{keep_data:!0,condition:e=>e.tab==="hover"}},css:{selector:"root .ecom-cart__agree--input",properties:{transition:"all %value%ms ease"}}},{type:"line"},{alias:"spacing",options:{css:{selector:"root .ecom-cart__agree--input"}}}]}]},css(){return`
					.ecom-cart__agree-wrapper {
						display: flex;
					}
					.ecom-cart__agree-container-content{
						display:flex;
						align-items: center;
						grid-column-gap: 12px;
					}
					.ecom-cart__agree-text{
						font-style: normal;
						font-weight: 500;
						font-size: 1.4rem;
						line-height: 20px;
						color: #374151;
					}
					.ecom-cart__agree--input[type=checkbox]{
						-webkit-appearance: none;
						-moz-appearance: none;
						appearance: none;
						padding: 0;
						-webkit-print-color-adjust: exact;
						color-adjust: exact;
						display: inline-block;
						vertical-align: middle;
						background-origin: border-box;
						-webkit-user-select: none;
						-moz-user-select: none;
						-ms-user-select: none;
						user-select: none;
						flex-shrink: 0;
						height: 1.6rem;
						width: 1.6rem;
						background-color: #fff;
						border: 1px solid rgba(209,213,219,1);
					}
					.ecom-cart__agree--input[type=checkbox]:checked {
						border-color: transparent;
						background-color: #059669;
						background-size: 100% 100%;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
					}
				`},default(){return{settings:{text:"I agree with the terms and conditions.",notice_message:"Please check and accept our Terms & Conditions, Private Policy"},style:{tab:"hover",size:"16px",checked_radius:{right:"4px",top:"4px",left:"4px",bottom:"4px"},checked_color:"#059669",checkbox_border:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"rgba(209,213,219,1)"},input:{"border-radius":{right:"4px",top:"4px",left:"4px",bottom:"4px"}},notice_message:{textColor:"#ff0000",textTypography:{"font-size":"12px"}},notice_message_box:{spacing:{margin:{left:"36px"}}},"border-radius":{right:"3px",top:"3px",left:"3px",bottom:"3px"},spacing:{padding:{right:"8px",top:"8px",left:"8px",bottom:"8px"},margin:{}},backgroundHover:{classic:{"background-color":"#155e75"}},background:{classic:{"background-color":"#ffffff"}},backgroundActive:{classic:{"background-color":"#155e75"}},transition:300,popupHover:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#155e75"}}}}},methods:{}},og={class:"ecom-element ecom-cart ecom-cart__agree"},ig={class:"ecom-cart__agree-wrapper"},ng={class:"ecom-cart__agree-container"},sg={class:"ecom-cart__agree-container-content"},ag=p("input",{type:"checkbox",name:"agree",class:"ecom-cart__agree--input",value:"agree"},null,-1),rg=["innerHTML"],lg=["innerHTML"];function cg(e,t,o,n,s,i){var a;return c(),d("div",og,[p("div",ig,[p("div",ng,[p("div",sg,[ag,p("span",{class:"ecom-cart__agree-text",innerHTML:e.lang(o.data.settings.text,"cart_arguments_text")},null,8,rg)]),p("p",{class:"ecom-cart__agree-notice-message",style:E(((a=o.data.settings)==null?void 0:a.show_notice)&&!e.exporting?"":"display:none"),innerHTML:e.lang(o.data.settings.notice_message,"cart_arguments_notice")},null,12,lg)])])])}const pg=k(Nt,[["render",cg]]);Nt.__docgenInfo={exportName:"default",displayName:"Cart Consent",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Cart/Agree.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts"]};const Vt={name:"Cart Coupon",mixins:[T,H],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){return{cart_note:{code:"{{ cart.note }}",preview:""}}},settings(){return[{group_title:"General",params:[{type:"paragraph",content:"Allow customers enter discount code on cart page"},{type:"text",label:"Label title",name:"label",placeholder:"Coupon code:",options:{toolbar:!0}},{type:"text",label:"Coupon placeholder",name:"placeholder",placeholder:"How can we help you?"}]}]},javascript(){return function(){function e(o,n,s){const i=new Date;i.setTime(i.getTime()+s*24*60*60*1e3);let a="expires="+i.toUTCString();document.cookie=o+"="+n+";"+a+";path=/"}function t(o){let n=o+"=",s=document.cookie.split(";");for(let i=0;i<s.length;i++){let a=s[i];for(;a.charAt(0)==" ";)a=a.substring(1);if(a.indexOf(n)==0)return a.substring(n.length,a.length)}return""}if(this.isLive){let o=this.$el.querySelector('[name="coupon"]'),n=t("discount_code");o&&(n&&(o.value=n),o.addEventListener("change",function(){e("discount_code",this.value,100)}))}}},css(){return`
                    .ecom-cart__coupon-container{
                        display:flex;
                        flex-direction: column;
                    }
                    .ecom-cart__coupon-text{
                        font-style: normal;
                        font-weight: 500;
                        font-size: 1.4rem;
                        line-height: 20px;
                        color: #374151;
                        margin-bottom:4px;
                    }
                    .ecom-cart__coupon--input{
                        background: #FFFFFF;
                        border: 1px solid #D1D5DB;
                        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
                        width: 30%;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 1.4rem;
                        line-height: 20px;
                        color: #6B7280;
                        outline:none;
                        padding: 9px 13px;
                    }
                `},style(){return[{group_alias:"box",options:{group_title:"General"}},{group_alias:"text",options:{group_title:"Label",group_name:"label",selector:"root .ecom-cart__coupon-container label"},modify:{params:{position:10,fields:{alias:"spacing"}}}},{group_alias:"input",options:{group_name:"input",group_title:"Input",selector:"root .ecom-cart__coupon-container input"},modify:{remove:{index:1,length:1}}}]},default(){return{settings:{label:"Coupon: ",placeholder:"Enter your coupon code"},style:{input:{width:"30%","border-radius":{right:"4px",top:"4px",left:"4px",bottom:"4px"}}}}}},methods:{}},mg={class:"ecom-element ecom-cart ecom-cart__coupon"},dg={class:"ecom-cart__coupon-wrapper"},ug={class:"ecom-cart__coupon-container"},gg=["innerHTML"],_g=["placeholder"];function hg(e,t,o,n,s,i){return c(),d("div",mg,[p("div",dg,[p("div",ug,[p("label",{class:"ecom-cart__coupon-text",innerHTML:e.lang(o.data.settings.label,"cart_coupon_label")},null,8,gg),p("input",{type:"text",name:"coupon",class:"ecom-cart__coupon--input",placeholder:e.lang(o.data.settings.placeholder,"coupon_placeholder"),value:""},null,8,_g)])])])}const fg=k(Vt,[["render",hg]]);Vt.__docgenInfo={exportName:"default",displayName:"Cart Coupon",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Cart/Coupon.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const Wt={name:"Cart Checkout",mixins:[M,T,H],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["label"]}},computed:{liquids(){var e;return{additional_checkout_buttons:{code:`
                        {% if additional_checkout_buttons %}
                            <div class="additional-checkout-buttons ${((e=this.data.settings)==null?void 0:e.accelerated_checkout_style)=="horizontal"?"":"additional-checkout-buttons--vertical"}">
                                {{ content_for_additional_checkout_buttons }}
                            </div>
                        {% endif %}`,preview:""}}},settings(){return[{group_title:"General",params:[{type:"text",label:"Checkout label",name:"label",placeholder:"Checkout",options:{toolbar:!0}},{type:"picker",label:"Icon",name:"icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"choose",label:"Icon position",name:"icon_position",options:{type:"align-x",values:[-1,1],visible:{keep_data:!1,condition:e=>e.icon}},css:{selector:" .ecom__element--button-icon",properties:{order:""}}},{type:"number",label:"Icon spacing",name:"spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.icon}},css:{selector:" .ecom-cart__checkout-button--submit",properties:{gap:""}}},{type:"line"},{type:"switch",name:"accelerated_checkout",label:"Use accelerated checkout",options:{values:{on:{label:"yes",value:!0},off:{label:"no",value:!1}}}},{type:"paragraph",content:"<b>Accelerated checkout buttons</b>",options:{warnings:{content:"The Accelerated checkout button only works when one or more Offline Payment methods are enabled on your store"}}},{type:"popup",name:"accelerated_checkout_style",label:"Style",value:"horizontal",options:{visible:e=>e.accelerated_checkout===!0,type:"dropdown",default:!1,preview:"title",values:{horizontal:"Horizontal",vertical:"Vertical"}}},{type:"popup",name:"accelerated_checkout_alignment",label:"Alignment",value:"center",options:{visible:e=>e.accelerated_checkout===!0,type:"dropdown",default:!1,preview:"title",values:{"flex-start":"Flex start",center:"Center","flex-end":"Flex end"}},css:{selector:" [data-shopify-buttoncontainer]",properties:{"justify-content":""}}}]}]},javascript(){return function(){let e=this.$el.closest("form"),t=this.isLive,o=this.settings.label;if(o=document.createTextNode(o),e){let a=function(){if(i.length>1){let u=!1;i.forEach(function(r){r.checked&&(u=!0)}),u?i.forEach(function(r){r.required=!1}):i.forEach(function(r){r.required=!0})}},l=function(){e.addEventListener("submit",function(u){return u.preventDefault(),s&&this.agree&&!this.agree.checked?(s.style.display="inherit",!1):(t&&this.submit(),!1)})},n=e.querySelector(".ecom-cart__checkout-button--submit"),s=e.querySelector(".ecom-cart__agree-notice-message"),i=e.querySelectorAll(".ecom-required--checkbox");if(!n)return;window.hulkapps&&n.setAttribute("name","ecom_cart_checkout"),n.addEventListener("click",function(){if(!e.querySelector(".ecom-cart__product-items")){n.setAttribute("disabled","disabled");return}a(),l()})}}},css(){return`
                    .ecom-cart__checkout-button--submit{
                        display: flex;
                        padding: 10px 15px;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 16px;
                        align-items: center;
                        background-color: #000000;
                        color: #FFFFFF;
                        border: none;
                        text-decoration: none;
                    }
                    .ecom__element--button-icon {
                        height: 20px;
                    }
                    .ecom-cart__checkout-button-container {
                        display: flex;
                        flex-direction: column;
                    }
                `},style(){const e=[{group_alias:"button",options:{group_title:"Button",group_name:"button",selector:" .ecom-cart__checkout-button--submit"},modify:{params:[{position:0,fields:[{alias:"align-items",options:{label:"Alignment",name:"button_alignment",css:{selector:"root .ecom-cart__checkout-button-container",properties:{"align-items":"","justify-content":""}}}},{alias:"align-items",options:{label:"Text Alignment",name:"text_alignment",css:{selector:"root .ecom-cart__checkout-button--submit",properties:{"justify-content":""}}}}]}]}},{group_alias:"icon",options:{group_name:"icon",group_title:"Icon",selector:" .ecom__element--button-icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}}];return this.data.settings.accelerated_checkout&&e.push({group_alias:"box",options:{group_name:"accelerated_checkout",group_title:"Accelerated checkout",selector:"root .ecom-cart__additional-checkout-buttons"},modify:{params:[{position:20,fields:{alias:"spacing"}}]}}),e},default(){return{settings:{label:"Checkout",spacing:"10px",accelerated_checkout_style:"horizontal"},style:{button:{tab:"normal",buttonWidthnormalmode:"300px",text_alignment:"center",button_alignment:"center",buttonHeightnormalmode:"50px",buttonBackgroundnormalmode:{classic:{"background-color":"#000000"}},buttonColornormalmode:"#ffffff",buttonBorderRadiusnormalmode:{right:"4px",top:"4px",left:"4px",bottom:"4px"}},icon:{iconFontSize:"20px"}}}}},methods:{}},bg={class:"ecom-element ecom-cart ecom-cart__checkout-button"},yg=p("input",{type:"hidden",name:"checkout",value:"ec"},null,-1),vg={class:"ecom-cart__checkout-button-wrapper"},xg={class:"ecom-cart__checkout-button-container"},wg={type:"submit",name:"checkout",class:"ecom-cart__checkout-button--submit"},kg=["innerHTML"],Cg=["innerHTML"],Tg=["innerHTML"];function Lg(e,t,o,n,s,i){var a,l;return c(),d("div",bg,[yg,p("div",vg,[p("div",xg,[p("button",wg,[p("span",{class:"ecom-cart-checkout-text",innerHTML:e.lang(o.data.settings.label,"checkout_label")},null,8,kg),p("span",{class:"ecom__element--button-icon",innerHTML:(a=o.data.settings)==null?void 0:a.icon},null,8,Cg)]),(l=o.data.settings)!=null&&l.accelerated_checkout?(c(),d("div",{key:0,innerHTML:e.liquid("additional_checkout_buttons"),class:"ecom-cart__additional-checkout-buttons"},null,8,Tg)):y("",!0)])])])}const $g=k(Wt,[["render",Lg]]);Wt.__docgenInfo={exportName:"default",displayName:"Cart Checkout",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Cart/Checkout.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Ot={name:"ArticleImage",mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{captionText(){return this.data&&this.data.settings&&this.data.settings.caption?this.data.settings.caption:""},css(){return`
                .ecom-shopify__article--image-wrapper .ecom-image-default{
                    position:relative;
                }
                .ecom-shopify__article--image-wrapper .ecom-shopify__article-hero-portrait img,
                .ecom-shopify__article--image-wrapper .ecom-shopify__article-hero-square img {
                    height: 100%;
                    object-fit: cover;
                }
            `},isHasCaption(){return this.data&&this.data.settings&&this.data.settings.useCaption&&this.data.settings.caption},liquids(){return{articleImage:{code:`
                        {% if article != empty %}
                            {% if article.image %}
                                <div class="ecom-shopify__article-hero-container ecom-image-align">
                                    <div class="ecom-shopify__article-hero-image ecom-image-default"
                                    itemprop="image"
                                    >
                                    <img srcset="
                                        {% if article.image.width >= 350 %}{{ article.image | img_url: '350x' }} 350w,{% endif %}
                                        {% if article.image.width >= 700 %}{{ article.image | img_url: '700x' }} 700w,{% endif %}
                                        {% if article.image.width >= 749 %}{{ article.image | img_url: '749x' }} 749w,{% endif %}
                                        {% if article.image.width >= 1498 %}{{ article.image | img_url: '1498x' }} 1498w,{% endif %}
                                        {% if article.image.width >= 1100 %}{{ article.image | img_url: '1100x' }} 1100w,{% endif %}
                                        {% if article.image.width >= 2200 %}{{ article.image | img_url: '2200x' }} 2200w,{% endif %}"
                                        sizes="(min-width: 1200px) 1100px, (min-width: 750px) calc(100vw - 10rem), 100vw"
                                        src="{{ article.image | img_url: '1100x' }}"
                                        loading="lazy"
                                        width="{{ article.image.width }}"
                                        height="{{ article.image.height }}"
                                        alt="{{ article.image.alt | escape }}">
                                    </div>
                                </div>
                            {% endif %}
                        {% else %}
                            <div>Please select the article in settings</div>
                        {% endif %}
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div>
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-4"></div>
                                    <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-6"></div>
                                    <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-2"></div>
                                    <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                </div>
                            </div>
                        </div>
                    `}}},requestShopifyType(){return{shopify_type:"article"}},settings(){return[{params:[{type:"toggle",name:"useCaption",label:"Caption",options:{oneline:!0,values:{on:{label:"YES",value:!0},off:{label:"NO",value:!1}}},css:!1},{type:"text",name:"caption",options:{placeholder:"Enter your caption",visible:e=>e.useCaption}}]}]},default(){return{}}},methods:{style(){let e=[{group_alias:"image",options:{group_title:"Image",group_name:"Image",selector:" .ecom-shopify__article-hero-container"}}];return this.data.settings.useCaption&&this.data.settings.caption&&e.push({group_alias:"text:spacing",options:{group_title:"Caption",group_name:"caption",selector:" .ecom-image__caption"}}),e}}},Sg={class:"ecom-element ecom-shopify-elements ecom-shopify__article--image"},Mg=["innerHTML"],Hg=["innerHTML"];function Bg(e,t,o,n,s,i){return c(),d("div",Sg,[p("div",{class:"ecom-shopify__article--image-wrapper",innerHTML:e.liquid("articleImage")},null,8,Mg),i.isHasCaption?(c(),d("figcaption",{key:0,class:"ecom-image__caption",innerHTML:i.captionText},null,8,Hg)):y("",!0)])}const qg=k(Ot,[["render",Bg]]);Ot.__docgenInfo={exportName:"default",displayName:"ArticleImage",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Article/Image.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Ft={name:"ArticleTags",mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{css(){return`
                .ecom-shopify__article--tags-item {
                    display: inline-block;
                    list-style: none;
                }
            `},liquids(){var e;return{articleTags:{code:`
                        {%- capture limit -%}${(e=this.data.settings)!=null&&e.limit?this.data.settings.limit:3}{%-endcapture-%}
                        {% assign limit = limit | plus: 0 %}
                        {% assign tmpl =  '' %}
                        {% if  template.suffix  %}
                            {% assign tmpl = '?view=' | append: template.suffix %}
                        {% endif %}

                        {% if article  and article.tags  %}
                            <ul class="ecom-shopify__article--tags-items ecom-flex ecom-wrap">
                                {% for tag in article.tags limit: limit %}
                                    <li class="ecom-shopify__article--tags-item">
                                        <a href="/blogs/{{blog.handle}}/tagged/{{tag | handleize }}{{tmpl}}">{{ tag }}</a>
                                    </li>
                                {% endfor %}
                            </ul>
                        {% else %}
                            <div>Please select the article in settings</div>
                        {% endif %}
                    `,preview:`
                        <div>Loading...</div>
                    `}}},requestShopifyType(){return{shopify_type:"article"}},settings(){return[{params:[{type:"popup",label:"Layout",name:"flexDirection",options:{type:"dropdown",default:!1,values:{column:"Vertical",row:"Horizontal"}},css:{selector:" .ecom-shopify__article--tags-items",properties:{"flex-direction":""}}},{type:"number",name:"limit",label:"Maximum tags to show",options:{min:1,max:20}},{name:"column-gap",type:"number",label:"Column gap",value:"12px",options:{units:{px:{min:1,max:64,step:1}},responsive:!0,visible:{keep_data:!1,condition:e=>e.flexDirection==="row"}},css:{selector:" .ecom-shopify__article--tags-items"}},{name:"row-gap",type:"number",label:"Row gap",value:"12px",options:{units:{px:{min:1,max:64,step:1}},responsive:!0},css:{selector:" .ecom-shopify__article--tags-items"}}]}]},style(){return[{group_alias:"box",options:{group_title:"General",group_name:"general"},modify:{params:[{type:"choose",label:"Alignment",name:"alignItems",value:"left",options:{oneline:!0,responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{selector:" .ecom-shopify__article--tags-wrapper",properties:{"align-items":""}}}]}},{group_alias:"button",options:{group_title:"Tag",group_name:"tag",selector:" .ecom-shopify__article--tags-item a"}}]},default(){return{settings:{flexDirection:"row","row-gap":"12px",limit:10,isShowTitle:!0,textTitle:"Article Tags","column-gap":"15px"},style:{general:{alignItems:"flex-start"},tag:{tab:"normal",buttonBorderRadiusnormalmode:{top:"0px",left:"0px",bottom:"0px",right:"0px"},buttonBackgroundnormalmode:{classic:{"background-color":"rgba(17, 24, 39, 0.05)"}},buttonBordernormalmode:{"border-style":"none"},buttonBackgroundhovermode:{classic:{"background-color":"rgba(17, 24, 39, 0.1)"}},spacing:{padding:{left:"16px",top:"8px",bottom:"8px",right:"16px"}},buttonTypography:{"text-decoration":"none"},buttonColornormalmode:"#000000"}}}}}},Eg={class:"ecom-element ecom-shopify-elements ecom-shopify__article--tags"},Dg={class:"ecom-shopify__article--tags-wrapper ecom-flex ecom-column"},Ag=["innerHTML"];function zg(e,t,o,n,s,i){return c(),d("div",Eg,[p("div",Dg,[p("div",{class:"ecom-shopify__article--tags-inner",innerHTML:e.liquid("articleTags")},null,8,Ag)])])}const jg=k(Ft,[["render",zg]]);Ft.__docgenInfo={exportName:"default",displayName:"ArticleTags",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Article/Tags.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Ut={name:"ArticleTitle",mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{classes(){return this.data&&this.data.settings&&this.data.settings.classes?this.data.settings.classes:""},tag(){return this.data&&this.data.settings&&this.data.settings.tag?this.data.settings.tag:"h3"},liquids(){return{articleTitle:{code:`
                        {% if article != empty %}
                            <${this.tag} itemprop="headline" class="ecom-shopify__article--title-text" href="{{article.url}}" title="{{article.title | escape }}">{{article.title  | escape }}</${this.tag}>
                        {% else %}
                            <div>Please select the article in settings</div>
                        {% endif %}
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-col-12">
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-9 ecom-skeleton-big"></div>
                                </div>
                            </div>
                        </div>
                    `}}},requestShopifyType(){return{shopify_type:"article"}},settings(){return[{group_alias:"title:settings",options:{group_name:"",group_title:""}}]},style(){return[{group_alias:"text:spacing",options:{group_title:"",selector:" .ecom-shopify__article--title-text"}}]},default(){return{settings:{tag:"h2"},style:{textSpacing:{textTextAlign:"left"}}}}}},Ig={class:"ecom-element ecom-shopify-elements ecom-shopify__article-title"},Pg=["innerHTML"];function Ng(e,t,o,n,s,i){return c(),d("div",Ig,[p("div",{class:S([i.classes,"ecom-shopify__article--title-wrapper"])},[p("div",{class:S([i.classes,"ecom-shopify__article--title-container"]),innerHTML:e.liquid("articleTitle")},null,10,Pg)],2)])}const Vg=k(Ut,[["render",Ng]]);Ut.__docgenInfo={exportName:"default",displayName:"ArticleTitle",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Article/Title.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Rt={name:"ArticleAuthor",mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{css(){return`
                    .ecom-shopify__article-author--icon svg {
                        width: 16px;
                        height: 16px;
                    }
                    .ecom-shopify__article-author--avatar {
                        width: 50px;
                        height: 50px;
                    }
                `},liquids(){var e,t,o,n,s;return{articleAuthor:{code:`
                            {% if article != empty %}
                            {{article.author}}
                            {% else %}
                                <div>Please select the article in settings</div>
                            {% endif %}
                        `,preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-col-12">
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-9 ecom-skeleton-big"></div>
                                </div>
                            </div>
                        </div>
                    `},articleAuthorBio:{code:`
                            {% if article.user.bio %}
                                {{ article.user.bio }}
                            {% endif %}
                        `,preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-col-12">
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-9 ecom-skeleton-big"></div>
                                </div>
                            </div>
                        </div>
                    `},articleAvatar:{code:`
                            ${((e=this.data.settings)==null?void 0:e.avatar_type)=="shopify"?`
                                    {%- if article.user.image -%}
                                        <div class="ecom-image-default">
                                            <img src="{{ article.user.image | img_url: 'master' }}" alt="{{ article.author }}">
                                        </div>
                                    {%- else -%}
                                        <div class="ecom-image-default">
                                            ${(o=(t=this.data.settings)==null?void 0:t.image_author)!=null&&o.url?`
                                                    <img src="${(s=(n=this.data.settings)==null?void 0:n.image_author)==null?void 0:s.url}" alt="{{ article.author }}"/>
                                                `:""}

                                        </div>
                                    {%- endif -%}
                                `:`
                                    {%- if article.user.email -%}
                                        <div class="ecom-image-default">
                                            <img src="https://www.gravatar.com/avatar/{{ article.user.email | downcase | md5 }}" alt="{{ article.author }}">
                                        </div>
                                    {%- endif -%}
                                `}
                        `,preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-col-12">
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-9 ecom-skeleton-big"></div>
                                </div>
                            </div>
                        </div>
                    `}}},requestShopifyType(){return{shopify_type:"article"}},settings(){return[{group_title:"General",params:[{type:"picker",label:"Icon Author",name:"icon_author",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"choose",label:"Icon position",name:"icon_position",options:{type:"align-x",values:[-1,1]},css:{selector:" .ecom-shopify__article-author--icon",properties:{order:""}}},{type:"popup",name:"avatar_type",label:"Avatar Type",options:{type:"dropdown",default:!1,preview:"title",values:{off:"Off",shopify:"Shopify avatar",gavatar:"G-Avatar"}}},{type:"picker",label:"Avatar Author default",name:"image_author",description:"Image default will display if user not avatar",options:{responsive:!1,type:"image",editAlt:!1,visible:{keep_data:!0,condition:e=>e.avatar_type=="shopify"}}},{type:"number",label:"Spacing",name:"spacing",options:{units:{px:{min:0,max:200}}},css:{selector:" .ecom-shopify__article-author--container",properties:{gap:""}}},{type:"toggle",label:"Show author bio",name:"show_bio",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}}]}]},style(){return[{group_alias:"text:spacing",options:{group_title:"General",group_name:"author_text",selector:" .ecom-shopify__article-author--text"}},{group_alias:"icon",options:{group_name:"icon",group_title:"Icon",selector:" .ecom-shopify__article-author--icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}},{group_alias:"image",options:{selector:" .ecom-shopify__article-author--avatar",group_name:"blog_meta_img",group_title:"Avatar"},modify:{remove:{label:"Width",length:1},params:{position:1,fields:[{type:"number",name:"imageWidth",label:"Image Width",options:{responsive:!0,reset:!0,units:{"%":{min:0,max:100},px:{min:0,max:1e3},vw:{min:0,max:100}}},css:{important:!0,properties:{width:""}}}]}}},{group_alias:"text:spacing",options:{group_title:"Author bio",group_name:"author_bio",selector:" .ecom-shopify__article-author--bjo"}}]},default(){return{style:{author_text:{textTextAlign:"left",textColor:{"global-colors":"primary"}}}}}}},Wg={class:"ecom-element ecom-shopify-elements ecom-shopify__article-author"},Og={class:"ecom-shopify__article-author--wrapper"},Fg={class:"ecom-shopify__article-author--container ecom-flex"},Ug=["innerHTML"],Rg=["innerHTML"],Yg={class:"ecom-shopify__article-author-information ecom-flex ecom-column"},Gg=["innerHTML"],Jg=["innerHTML"];function Zg(e,t,o,n,s,i){var a,l,u,r,g;return c(),d("div",Wg,[p("div",Og,[p("div",Fg,[((a=o.data.settings)==null?void 0:a.avatar_type)==="shopify"||((l=o.data.settings)==null?void 0:l.avatar_type)==="gavatar"?(c(),d("div",{key:0,class:"ecom-shopify__article-author--avatar",innerHTML:e.liquid("articleAvatar")},null,8,Ug)):y("",!0),(u=o.data.settings)!=null&&u.icon_author?(c(),d("div",{key:1,class:"ecom-shopify__article-author--icon ecom-flex ecom-al_center",innerHTML:(r=o.data.settings)==null?void 0:r.icon_author},null,8,Rg)):y("",!0),p("div",Yg,[p("div",{class:"ecom-shopify__article-author--text",innerHTML:e.liquid("articleAuthor")},null,8,Gg),(g=o.data.settings)!=null&&g.show_bio?(c(),d("div",{key:0,class:"ecom-shopify__article-author--bjo",innerHTML:e.liquid("articleAuthorBio")},null,8,Jg)):y("",!0)])])])])}const Kg=k(Rt,[["render",Zg]]);Rt.__docgenInfo={exportName:"default",displayName:"ArticleAuthor",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Article/Author.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Yt={name:"ArticleAuthor",mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{css(){return`
                    .ecom-shopify__article-date-icon svg {
                        width: 16px;
                        height: 16px;
                    }
                `},liquids(){var t;const e=(t=this.data.settings)!=null&&t.date_format?this.data.settings.date_format:"date";return{date:{code:`
                        {% if article != empty %}
                            <div class="ecom-shopify__article-date-text">
                                {{article.${this.type} | time_tag: format: '${e}'  }}
                            </div>
                        {% else %}
                            <div>Please select the article in settings</div>
                        {% endif %}
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-col-12">
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-9 ecom-skeleton-big"></div>
                                </div>
                            </div>
                        </div>
                    `}}},requestShopifyType(){return{shopify_type:"article"}},type(){var e,t,o;return(o=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.type)!=null?o:"created_at"},settings(){return[{params:[{type:"popup",label:"Date type",name:"type",options:{type:"dropdown",default:!1,values:{updated_at:"Updated at",created_at:"Created at",published_at:"Published at"}}},{type:"popup",name:"date_format",label:"Date format",options:{type:"dropdown",values:{default:"Monday, December 31, 2018 at 1:00 pm -0500",abbreviated_date:"Aug 08, 1994",basic:"12/31/2021",date:"December 31, 2018",date_at_time:"December 31, 2018 at 1:00 pm",on_date:"on Dec 31, 2018"}}},{type:"picker",label:"Icon",name:"icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"choose",label:"Icon position",name:"icon_position",options:{type:"align-x",values:[-1,1],visible:{keep_data:!1,condition:e=>e.icon}},css:{selector:" .ecom-shopify__article-date-icon",properties:{order:""}}},{type:"number",label:"Spacing",name:"spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.icon}},css:{selector:" .ecom-shopify__article-date--container",properties:{gap:""}}}]}]},style(){return[{group_alias:"text:spacing",options:{group_name:"date_text",group_title:"General",selector:" .ecom-shopify__article-date-text"}},{group_alias:"icon",options:{group_name:"icon",group_title:"Icon",selector:" .ecom-shopify__article-date-icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}}]},default(){return{settings:{type:"created_at",date_format:"date"},style:{date_text:{textTextAlign:"left"}}}}}},Xg={class:"ecom-element ecom-shopify-elements ecom-shopify__article-date"},Qg={class:"ecom-shopify__article-date--wrapper"},e_={class:"ecom-shopify__article-date--container ecom-flex ecom-al_center"},t_=["innerHTML"],o_=["innerHTML"];function i_(e,t,o,n,s,i){var a,l;return c(),d("div",Xg,[p("div",Qg,[p("div",e_,[(a=o.data.settings)!=null&&a.icon?(c(),d("div",{key:0,class:"ecom-shopify__article-date-icon ecom-flex ecom-al_center",innerHTML:(l=o.data.settings)==null?void 0:l.icon},null,8,t_)):y("",!0),p("div",{class:"ecom-shopify__article-date--date",innerHTML:e.liquid("date")},null,8,o_)])])])}const n_=k(Yt,[["render",i_]]);Yt.__docgenInfo={exportName:"default",displayName:"ArticleAuthor",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Article/Date.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Gt={name:"ArticleExcerpt",mixins:[M,T,H],props:{data:{type:Object,default(){return{}}}},computed:{excerptType(){var e,t,o;return(o=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.excerpt_type)!=null?o:"text"},css(){return`
                .ecom-shopify__article__excerpt--paragraph {
                    position: relative;
                    overflow: hidden
                }
                .ecom-shopify__article__excerpt--paragraph[style*="max-height"]:after {
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    height: 150px;
                    background: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255))
                }
                .ecom-shopify__article__excerpt-view-more-btn{
                    border:none;
                    background:transparent;
                    cursor:pointer;
                }
            `},excerpt_short(){return this.excerptType==="text"?this.type==="short"?"short_excerpt":"excerpt_text":"excerpt"},javascript(){return function(){let e=this.$el.querySelector(".ecom-shopify__article__excerpt-view-more-btn"),t=this.settings.excerpt_type,o=this.$el.querySelector(".ecom-shopify__article__excerpt--full"),n=this.$el.querySelector(".ecom-shopify__article__excerpt--paragraph");e&&e.addEventListener("click",function(){t==="text"&&o?(o.style.display="inherit",n.style.display="none"):n.style.maxHeight=null,this.style.display="none"})}},limit(){return this.data&&this.data.settings&&this.data.settings.limit&&parseInt(this.data.settings.limit)>0?parseInt(this.data.settings.limit):50},liquids(){return{excerpt:{code:`
                        {%- if article.excerpt != empty -%}
                            {{article.excerpt}}
                        {%- endif -%}
                        {%- if EComBuilderMode and article.excerpt == empty -%}
                            <div>This Article don't have Excerpt</div>
                        {%- endif -%}
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div>
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-4"></div>
                                    <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-6"></div>
                                    <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-2"></div>
                                    <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                </div>
                            </div>
                        </div>
                    `},excerpt_text:{code:`
                            {%- if article.excerpt != empty -%}
                                {{ article.excerpt | strip_html }}
                            {%- endif -%}
                            {%- if EComBuilderMode and article.excerpt == empty -%}
                                <div>This Article don't have Excerpt</div>
                            {%- endif -%}
                        `,preview:`
                        <div class="ecom-skeleton-item">
                            <div>
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-4"></div>
                                    <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-6"></div>
                                    <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-2"></div>
                                    <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                </div>
                            </div>
                        </div>
                    `},short_excerpt:{code:`
                        {%- if article.excerpt != empty -%}
                        {{ article.excerpt | strip_html | truncatewords: ${this.limit} }}
                        {%- endif -%}
                        {%- if EComBuilderMode and article.excerpt == empty -%}
                            <div>This Article don't have Excerpt</div>
                        {%- endif -%}
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div>
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-4"></div>
                                    <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-6"></div>
                                    <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-2"></div>
                                    <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                                </div>
                            </div>
                        </div>

                    `}}},maxHeight(){return this.excerptType==="html"&&this.data.settings.type==="short"?this.data.settings["max-height"]:null},requestShopifyType(){return{shopify_type:"article"}},settings(){return[{params:[{type:"popup",label:"Excerpt Type",name:"excerpt_type",options:{type:"dropdown",values:{text:"Text",html:"HTML"},default:!1},css:!1},{type:"popup",label:"Display mode",name:"type",options:{type:"dropdown",values:{full:"Full",short:"Short"},default:!1},css:!1},{type:"number",label:"Maximum words to show",name:"limit",value:"50",placeholder:"50",options:{input:!0,slider:!1,min:0,visible:function(e){return e&&e.type==="short"&&e.excerpt_type==="text"}}},{type:"number",label:"Max height",name:"max-height",placeholder:"200",options:{units:{px:{min:0,max:1e3},vh:{min:0,max:100},vw:{min:0,max:100}},visible:function(e){return e&&e.type==="short"&&e.excerpt_type=="html"}}},{type:"toggle",label:"Show view more button?",name:"viewMore",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:function(e){return e.type==="short"}}},{label:"View more text button",name:"viewMoreText",type:"text",options:{visible:function(e){return e.type==="short"&&e.viewMore}}}]}]},type(){return this.data.settings&&this.data.settings.type?this.data.settings.type:"full"},viewMore(){return this.data&&this.data.settings&&"viewMore"in this.data.settings?this.data.settings.viewMore:!1},viewMoreText(){return this.data&&this.data.settings&&"viewMoreText"in this.data.settings?this.data.settings.viewMoreText:"view more"},default(){return{settings:{excerpt_type:"text",type:"full",limit:"50",view_more:!1,view_more_text:"View more","max-height":"200px"},style:{article_excerpt:{textTextAlign:"left"}}}}},methods:{style(){let e=[{group_alias:"text:spacing",options:{group_title:"Excerpt",group_name:"article_excerpt",selector:" .ecom-shopify__article__excerpt-container"}}];return this.data.settings.viewMore&&e.push({group_alias:"button",options:{group_title:"Button",group_name:"article_button",selector:" .ecom-shopify__article__excerpt-view-more-btn"}}),e}}},s_={class:"ecom-element ecom-shopify-elements ecom-shopify__article--excerpt"},a_={class:"ecom-shopify__article__excerpt-wrapper"},r_=["excerpt_type"],l_={class:"ecom-shopify__article__excerpt--paragraph"},c_=["innerHTML"],p_={key:0},m_=["textContent"],d_=["innerHTML"],u_=["innerHTML"],g_={key:0},__=["textContent"];function h_(e,t,o,n,s,i){return c(),d("div",s_,[p("div",a_,[p("div",{class:"ecom-shopify__article__excerpt-container",excerpt_type:i.excerptType},[i.excerptType==="text"?(c(),d(D,{key:0},[p("div",l_,[p("span",{innerHTML:e.liquid(i.excerpt_short)},null,8,c_),i.type==="short"&&i.viewMore?(c(),d("span",p_,[p("button",{type:"button",class:"ecom-shopify__article__excerpt-view-more-btn",textContent:I(e.lang(i.viewMoreText,"viewMoreText"))},null,8,m_)])):y("",!0)]),i.type==="short"&&i.viewMore?(c(),d("span",{key:0,style:{display:"none"},class:"ecom-shopify__article__excerpt--full",innerHTML:e.liquid("excerpt_text")},null,8,d_)):y("",!0)],64)):(c(),d(D,{key:1},[p("div",{class:"ecom-shopify__article__excerpt--paragraph",style:E({"max-height":i.maxHeight}),innerHTML:e.liquid(i.excerpt_short)},null,12,u_),i.type==="short"&&i.viewMore?(c(),d("span",g_,[p("button",{type:"button",class:"ecom-shopify__article__excerpt-view-more-btn",textContent:I(e.lang(i.viewMoreText,"viewMoreText"))},null,8,__)])):y("",!0)],64))],8,r_)])])}const f_=k(Gt,[["render",h_]]);Gt.__docgenInfo={exportName:"default",displayName:"ArticleExcerpt",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Article/Excerpt.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Jt={name:"ArticleTitle",mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){var e,t,o,n;return{comments_count:{code:`
                        {% if article != empty %}
                             {% if article.comments_enabled? %}
                                {% if article.comments_count == 1%}
                                    <p class="ecom-shopify__article-comments-count--container-counter">
                                        ${this.lang((t=(e=this.data)==null?void 0:e.settings)!=null&&t.comment_count_text?this.data.settings.comment_count_text:"","comment_count_text",{comment_count:"article.comments_count"})}
                                        </p>
                                    {% else %}
                                        <p class="ecom-shopify__article-comments-count--container-counter">
                                            ${this.lang((n=(o=this.data)==null?void 0:o.settings)!=null&&n.comments_count_text?this.data.settings.comments_count_text:"","comments_count_text",{comments_count:"article.comments_count"})}
                                    </p>
                                {% endif %}
                            {% endif %}
                        {% else %}
                            <div>Please select the article in settings</div>
                        {% endif %}
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-col-12">
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-9 ecom-skeleton-big"></div>
                                </div>
                            </div>
                        </div>
                    `}}},requestShopifyType(){return{shopify_type:"article"}},css(){return`
                .ecom-shopify__article-comments-count-icon svg {
                    width: 16px;
                    height: 16px;
                }
            `},settings(){return[{params:[{type:"paragraph",content:"Show the number of published comments for the article."},{type:"text",name:"comment_count_text",label:"Comment text count",placeholder:"{{comment_count}} comment",description:"Use {{comment_count}} to show comment count"},{type:"text",name:"comments_count_text",label:"Many comments text count",placeholder:"{{comments_count}} comments",description:"Use {{comments_count}} to show comments count"},{type:"picker",label:"Icon",name:"icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"choose",label:"Icon position",name:"icon_position",options:{type:"align-x",values:[-1,1],visible:{keep_data:!1,condition:e=>e.icon}},css:{selector:" .ecom-shopify__article-comments-count-icon",properties:{order:""}}},{type:"number",label:"Spacing",name:"spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.icon}},css:{selector:" .ecom-shopify__article-comments-count--container",properties:{gap:""}}}]}]},style(){return[{group_alias:"text:spacing",options:{group_name:"comments_count_text",group_title:"General",selector:" .ecom-shopify__article-comments-count--container .ecom-shopify__article-comments-count--container-counter"}},{group_alias:"icon",options:{group_name:"icon",group_title:"Icon",selector:" .ecom-shopify__article-comments-count-icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}}]},default(){return{settings:{comment_count_text:"{{comment_count}} comment",comments_count_text:"{{comments_count}} comments"},style:{comments_count_text:{textTextAlign:"left"}}}}}},b_={class:"ecom-element ecom-shopify-elements ecom-shopify__article-comments-count"},y_={class:"ecom-shopify__article-comments-count--wrapper"},v_={class:"ecom-shopify__article-comments-count--container ecom-flex ecom-al_center"},x_=["innerHTML"],w_=["innerHTML"];function k_(e,t,o,n,s,i){var a,l;return c(),d("div",b_,[p("div",y_,[p("div",v_,[(a=o.data.settings)!=null&&a.icon?(c(),d("div",{key:0,class:"ecom-shopify__article-comments-count-icon ecom-flex ecom-al_center",innerHTML:(l=o.data.settings)==null?void 0:l.icon},null,8,x_)):y("",!0),p("div",{class:"ecom-shopify__article-comments-count--count",innerHTML:e.liquid("comments_count")},null,8,w_)])])])}const C_=k(Jt,[["render",k_]]);Jt.__docgenInfo={exportName:"default",displayName:"ArticleTitle",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Article/CommentCount.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Zt={name:"ArticlePrevNext",mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){var e,t,o,n,s,i,a,l,u,r,g,m,h,_,b,f,v,x,C,L,w,$;return{prevArticle:{code:`
                    {%- liquid
                        assign prev_article = blog.previous_article
                      if EComBuilderMode
                        assign prev_article = blog.articles.first
                      endif
                    -%}
                    {%- if prev_article -%}
                      <div class="ecom-shopify__article--prev-content ecom-flex ecom-column">
                        ${(e=this.data.settings)!=null&&e.prev_title?`
                              <div class="ecom-shopify__article--item-heading ecom-shopify__article--item-heading-prev ecom-flex ecom-al_center">
                                ${(t=this.data.settings)!=null&&t.icon_prev?`
                                        <span class="ecom-shopify__article--item-icon ecom-flex ecom-al_center">${(o=this.data.settings)==null?void 0:o.icon_prev}</span>
                                    `:""}
                                <a href="{{prev_article.url}}" alt="{{prev_article.title}}">${this.lang(this.data.settings.prev_title,"prev_title")}</a>
                              </div>
                            `:""}
                        <div class="ecom-shopify__article--item-body ecom-flex">
                          ${(n=this.data.settings)!=null&&n.show_featured_image?`
                                {%- if prev_article.image -%}
                                  <div class="ecom-shopify__article--item-image ecom-col-auto">
                                    <div class="ecom-image-default">
                                      <img src="{{ prev_article.image | img_url: '360x'}}" alt="{{ prev_article.image.src.alt | escape }}" />
                                    </div>
                                  </div>
                                {%- endif -%}
                              `:""}
                          ${((s=this.data.settings)==null?void 0:s.show_title)||((i=this.data.settings)==null?void 0:i.show_time)?`
                                <div class="ecom-shopify__article--item-content ecom-flex ecom-column ecom-col">
                                  ${(a=this.data.settings)!=null&&a.show_title?`
                                      <div class="ecom-shopify__article--item-title ecom-shopify__article--item-title-prev">
                                        <a href="{{prev_article.url}}" alt="{{prev_article.title}}">{{ prev_article.title }}</a>
                                      </div>
                                      `:""}
                                  ${(l=this.data.settings)!=null&&l.show_time?`
                                      <div class="ecom-shopify__article--item-time ecom-flex ecom-al_center">
                                          ${(u=this.data.settings)!=null&&u.icon_time?`
                                                  <span class="ecom-shopify__article--item-icon ecom-flex ecom-al_center">${(r=this.data.settings)==null?void 0:r.icon_time}</span>
                                              `:""}
                                          <span>{{ prev_article.published_at | time_tag: format: '${((g=this.data.settings)==null?void 0:g.date_format)||"basic"}' }}</span>
                                      </div>
                                      `:""}
                                </div>

                              `:""}
                        </div>
                      </div>
                    {%- endif -%}
                  `,preview:`
                    <div class="ecom-skeleton-item">
                          <div>
                              <div class="ecom-skeleton-row">
                                  <div class="ecom-skeleton-col-4"></div>
                                  <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                  <div class="ecom-skeleton-col-6"></div>
                                  <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                  <div class="ecom-skeleton-col-2"></div>
                                  <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                              </div>
                          </div>
                      </div>
                  `},nextArticle:{code:`
                    {%- liquid
                        assign next_article = blog.next_article
                      if EComBuilderMode
                        assign next_article = blog.articles.last
                      endif
                    -%}
                    {%- if next_article -%}
                      <div class="ecom-shopify__article--next-content ecom-flex ecom-column">
                        ${(m=this.data.settings)!=null&&m.next_title?`
                              <div class="ecom-shopify__article--item-heading ecom-shopify__article--item-heading-next ecom-flex ecom-al_center ecom-fl_right">
                                ${(h=this.data.settings)!=null&&h.icon_next?`
                                        <span class="ecom-shopify__article--item-icon ecom-flex ecom-al_center">${(_=this.data.settings)==null?void 0:_.icon_next}</span>
                                    `:""}
                                <a href="{{next_article.url}}" alt="{{next_article.title}}">${this.lang(this.data.settings.next_title,"next_title")}</a>
                              </div>
                            `:""}
                        <div class="ecom-shopify__article--item-body ecom-flex">
                          ${(b=this.data.settings)!=null&&b.show_featured_image?`
                                {%- if next_article.image -%}
                                  <div class="ecom-image-default">
                                    <img src="{{ next_article.image | img_url: '360x'}}" alt="{{ next_article.image.src.alt | escape }}" />
                                  </div>
                                {%- endif -%}
                              `:""}
                          ${((f=this.data.settings)==null?void 0:f.show_title)||((v=this.data.settings)==null?void 0:v.show_time)?`
                                <div class="ecom-shopify__article--item-content ecom-flex ecom-column ecom-col">
                                  ${(x=this.data.settings)!=null&&x.show_title?`
                                      <div class="ecom-shopify__article--item-title ecom-shopify__article--item-title-next">
                                        <a href="{{next_article.url}}" alt="{{next_article.title}}">{{ next_article.title }}</a>
                                      </div>
                                      `:""}
                                  ${(C=this.data.settings)!=null&&C.show_time?`
                                      <div class="ecom-shopify__article--item-time ecom-flex ecom-al_center ecom-fl_right">
                                          ${(L=this.data.settings)!=null&&L.icon_time?`
                                                  <span class="ecom-shopify__article--item-icon ecom-flex ecom-al_center">${(w=this.data.settings)==null?void 0:w.icon_time}</span>
                                              `:""}
                                          <span>{{ next_article.published_at | time_tag: format: '${(($=this.data.settings)==null?void 0:$.date_format)||"basic"}' }}</span>
                                      </div>
                                      `:""}
                                </div>

                              `:""}
                        </div>
                      </div>
                    {%- endif -%}
                  `,preview:`
                    <div class="ecom-skeleton-item">
                          <div>
                              <div class="ecom-skeleton-row">
                                  <div class="ecom-skeleton-col-4"></div>
                                  <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                  <div class="ecom-skeleton-col-6"></div>
                                  <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                  <div class="ecom-skeleton-col-2"></div>
                                  <div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
                              </div>
                          </div>
                      </div>
                  `}}},requestShopifyType(){return{shopify_type:"article"}},settings(){return[{group_title:"General",params:[{type:"paragraph",options:{warnings:{content:"Note: Posts in Editor are for preview only !!!"}}},{type:"line"},{type:"popup",label:"Type",name:"type",options:{type:"dropdown",default:!1,values:{all:"Prev/Next article",prev:"Prev article",next:"Next article"},default:!1}},{type:"text",label:"Prev Heading",name:"prev_title",value:"Previous Post"},{type:"picker",label:"Icon",name:"icon_prev",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:{keep_data:!1}}},{type:"choose",label:"Icon position",name:"icon_prev_position",options:{type:"align-x",values:[-1,1],visible:{keep_data:!1,condition:e=>e.icon_prev}},css:{selector:" .ecom-shopify__article--item-heading-prev .ecom-shopify__article--item-icon",properties:{order:""}}},{type:"number",label:"Icon spacing",name:"icon_prev_spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.icon_prev}},css:{selector:" .ecom-shopify__article--item-heading-prev",properties:{gap:""}}},{type:"text",label:"Next Heading",name:"next_title",value:"Next Post"},{type:"picker",label:"Icon",name:"icon_next",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:{keep_data:!1}}},{type:"choose",label:"Icon position",name:"icon_next_position",options:{type:"align-x",values:[-1,1],visible:{keep_data:!1,condition:e=>e.icon_next}},css:{selector:" .ecom-shopify__article--item-heading-next .ecom-shopify__article--item-icon",properties:{order:""}}},{type:"number",label:"Icon spacing",name:"icon_next_spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.icon_next}},css:{selector:" .ecom-shopify__article--item-heading-next",properties:{gap:""}}},{type:"toggle",label:"Show article featured image",name:"show_featured_image",value:!0,options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"toggle",label:"Show article title",name:"show_title",value:!0,options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"toggle",label:"Show article date",name:"show_time",value:!0,options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"popup",name:"date_format",label:"Date format?",options:{type:"dropdown",default:!1,values:{default:"Monday, December 31, 2018 at 1:00 pm -0500",abbreviated_date:"Aug 08, 1994",basic:"12/31/2021",date:"December 31, 2018",date_at_time:"December 31, 2018 at 1:00 pm",on_date:"on Dec 31, 2018"}}},{type:"picker",label:"Icon Time",name:"icon_time",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:{keep_data:!1,condition:e=>e.show_time}}},{type:"choose",label:"Icon position",name:"icon_position",options:{type:"align-x",values:[-1,1],visible:{keep_data:!1,condition:e=>e.icon_time}},css:{selector:" .ecom-shopify__article--item-time .ecom-shopify__article--item-icon",properties:{order:""}}},{type:"number",label:"Icon spacing",name:"spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.icon_time}},css:{selector:" .ecom-shopify__article--item-time",properties:{gap:""}}}]}]},style(){return[{group_alias:"box",options:{group_name:"general",group_title:"General"}},{group_alias:"box",options:{group_name:"prev_article",group_title:"Prev Article",selector:" .ecom-shopify__article--prev"},modify:{params:{position:0,fields:{name:"boxWidth",label:"Width",type:"number",options:{responsive:!0,units:{px:{min:0,max:1e3},"%":{min:0,max:100}}},css:{properties:{width:""}}}}}},{group_alias:"box",options:{group_name:"next_article",group_title:"Next Article",selector:" .ecom-shopify__article--next"},modify:{params:{position:0,fields:{name:"boxWidth",label:"Width",type:"number",options:{responsive:!0,units:{px:{min:0,max:1e3},"%":{min:0,max:100}}},css:{properties:{width:""}}}}}},{group_alias:"text:spacing",options:{group_title:"Heading",group_name:"heading",selector:" .ecom-shopify__article--item-heading a"},modify:{remove:{index:0,length:1}}},{group_alias:"text",options:{group_title:"Article Title",group_name:"title",selector:" .ecom-shopify__article--item-title a"},modify:{remove:{index:0,length:1}}},{group_alias:"text",options:{group_title:"Article Date",group_name:"date",selector:" .ecom-shopify__article--item-time time"},modify:{remove:{index:0,length:1}}},{group_alias:"image",options:{group_title:"Image",group_name:"Image",selector:" .ecom-shopify__article--item-image"}},{group_alias:"icon",options:{group_name:"icon_heading",group_title:"Icon Heading",selector:" .ecom-shopify__article--item-heading .ecom-shopify__article--item-icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}},{group_alias:"icon",options:{group_name:"icon_time",group_title:"Icon Time",selector:" .ecom-shopify__article--item-time .ecom-shopify__article--item-icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}}]},css(){return`
          .ecom-shopify__article--item-icon svg {
            width: 16px;
            height: 16px;
          }
          .ecom-shopify__article--next .ecom-shopify__article--item-body {
            flex-direction: row-reverse;
          }
          .ecom-shopify__article--item-title-next {
            text-align: right;
          }
          .ecom-shopify__article--prev_next-container {
            flex-wrap: wrap;
          }
        `},default(){return{settings:{prev_title:"Previous Post",next_title:"Next Post",show_featured_image:!0,show_title:!0,show_time:!0,type:"all"},style:{Image:{tab:"normal",imageWidth:"100px"},icon_heading:{iconFontSize:"16px"},icon_time:{iconFontSize:"16px"}}}}}},T_={class:"ecom-element ecom-shopify-elements ecom-shopify__article-prev_next"},L_={class:"ecom-shopify__article--prev_next-wrapper"},$_=["innerHTML"],S_=["innerHTML"];function M_(e,t,o,n,s,i){var a,l,u,r,g;return c(),d("div",T_,[p("div",L_,[p("div",{class:S(["ecom-shopify__article--prev_next-container",{"ecom-flex ecom-fl_between":((a=o.data.settings)==null?void 0:a.type)=="all"}])},[((l=o.data.settings)==null?void 0:l.type)=="prev"||((u=o.data.settings)==null?void 0:u.type)=="all"?(c(),d("div",{key:0,class:"ecom-shopify__article--prev",innerHTML:e.liquid("prevArticle")},null,8,$_)):y("",!0),((r=o.data.settings)==null?void 0:r.type)=="next"||((g=o.data.settings)==null?void 0:g.type)=="all"?(c(),d("div",{key:1,class:"ecom-shopify__article--next",innerHTML:e.liquid("nextArticle")},null,8,S_)):y("",!0)],2)])])}const H_=k(Zt,[["render",M_]]);Zt.__docgenInfo={exportName:"default",displayName:"ArticlePrevNext",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Article/PrevNext.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Kt={name:"ArticleCommentForm",mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{css(){return`
                .ecom-shopify__article-comment-fields {
                    display: flex;
                    flex-wrap: wrap;
                }
                .ecom-shopify__article-comment-field.ecom-w-full {
                    width: 100%;
                    flex: none
                }
                .ecom-shopify__article-comments-fields, .ecom-shopify__article-comment-field {
                    display: flex;
                    flex-direction: column;
                }

                .ecom-shopify__article-comment-fields {
                    gap: inherit;
                }

                .ecom-shopify__article-comment-field {
                    flex: 1;
                }

                .ecom-shopify__article-comment-field__input.ecom-shopify__article-comment-field-text-area{
                    min-height:100px;
                    font-family:inherit;
                }

                .ecom-shopify__article-comment-field__input{
                    font-family:inherit;
                    min-height:30px;
                }
                .ecom-shopify__article-comment-horizontial .ecom-shopify__article-comment-field {
                    order: -1;
                }
                .ecom-shopify__article-comment-horizontial .ecom-shopify__article-comment-fields-horizontial {
                    gap: 15px;
                }
            `},liquids(){var e,t,o,n,s,i,a,l,u,r,g,m,h,_,b,f,v,x,C,L;return{comments_form:{code:`
                        {%- if article != empty -%}
                                {% capture layout %}${((e=this.data.settings)==null?void 0:e.layout)||"verticle"}{% endcapture %}
                             {%- if article.comments_enabled? -%}
                                    {% capture icon_success %}
                                        <svg aria-hidden="true" focusable="false" role="presentation" class="icon ecom-shopify__article--icon-success" viewBox="0 0 13 13">
                                            <path d="M6.5 12.35C9.73087 12.35 12.35 9.73086 12.35 6.5C12.35 3.26913 9.73087 0.65 6.5 0.65C3.26913 0.65 0.65 3.26913 0.65 6.5C0.65 9.73086 3.26913 12.35 6.5 12.35Z" fill="#428445" stroke="white" stroke-width="0.7"/>
                                            <path d="M5.53271 8.66357L9.25213 4.68197" stroke="white"/>
                                            <path d="M4.10645 6.7688L6.13766 8.62553" stroke="white">
                                        </svg>
                                    {% endcapture %}
                                    {% capture icon_error%}
                                        <svg aria-hidden="true" focusable="false" role="presentation" class="icon ecom-shopify__article--icon-error" viewBox="0 0 13 13">
                                            <circle cx="6.5" cy="6.50049" r="5.5" stroke="white" stroke-width="2"/>
                                            <circle cx="6.5" cy="6.5" r="5.5" fill="#EB001B" stroke="#EB001B" stroke-width="0.7"/>
                                            <path d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z" fill="white"/>
                                            <path d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z" fill="white" stroke="#EB001B" stroke-width="0.7">
                                        </svg>
                                    {% endcapture %}
                                {% if article != empty and article.id %}
                                <div>
                                    {% form 'new_comment', article %}
                                        {% capture post_message %}
                                            ${this.lang((t=this.data.settings)==null?void 0:t.success_message,"success_message")}
                                        {% endcapture %}
                                        {%- if article.moderated? and comment.status == 'unapproved' -%}
                                            {% capture post_message %}
                                                ${this.lang((o=this.data.settings)==null?void 0:o.success_moderated,"success_moderated")}
                                            {% endcapture %}
                                        {% endif %}

                                        {%- if form.errors or EComBuilderMode == true -%}
                                            <div class="ecom-shopify__article-form__message ecom-shopify__article-form__message--error" role="alert">
                                            <h3 class="ecom-shopify__article-form-status ecom-shopify__article-caption-large" tabindex="-1" autofocus>
                                                ${this.lang((n=this.data.settings)==null?void 0:n.error_heading,"error_heading")}
                                            </h3>

                                                <ul class="ecom-shopify__article-form-status-list ecom-shopify__article-caption-large">
                                                {%- for field in form.errors -%}
                                                    <li>
                                                    <a href="#CommentForm-{{ field }}" class="link">
                                                        {%- if form.errors.translated_fields[field] contains 'author' -%}
                                                        ${this.lang((s=this.data.settings)==null?void 0:s.name_label,"name_label")}
                                                        {%- elsif form.errors.translated_fields[field] contains 'body'-%}
                                                        ${this.lang((i=this.data.settings)==null?void 0:i.message_label,"message_label")}
                                                        {%- else -%}
                                                        {{ form.errors.translated_fields[field] }}
                                                        {%- endif -%}
                                                        {{ form.errors.messages[field] }}
                                                    </a>
                                                    </li>
                                                {%- endfor -%}
                                                </ul>
                                            </div>
                                        {%- endif -%}
                                        {%- if form.posted_successfully? or EComBuilderMode == true -%}
                                            <div class="ecom-shopify__article-form__message ecom-shopify__article-form__message--success" role="status">
                                                <h3 class="ecom-shopify__article-form-status" tabindex="-1" autofocus>{{ post_message }}</h3>
                                            </div>
                                        {%- endif -%}

                                        <div class="ecom-shopify__article-comment-fields ecom-shopify__article-comment-{{layout}} {% if article.moderated? == false %}ecom-shopify__article-comments-fields{% endif %}">
                                                {%- if layout contains 'horizontial' -%}
                                                    <div class="ecom-flex ecom-shopify__article-comment-fields-horizontial">
                                                {%- endif -%}
                                                <div class="ecom-shopify__article-comment-field ecom-shopify__article-field--with-error">
                                                    ${(a=this.data.settings)!=null&&a.name_label?`
                                                            <label class="ecom-shopify__article-comment-field-label" for="CommentForm-author">${this.lang((l=this.data.settings)==null?void 0:l.name_label,"name_label")}<span aria-hidden="true">*</span></label>
                                                        `:""}
                                                    <input
                                                    type="text"
                                                    name="comment[author]"
                                                    id="CommentForm-author"
                                                    class="ecom-shopify__article-comment-field__input"
                                                    autocomplete="name"
                                                    value="{{ form.author }}"
                                                    aria-required="true"
                                                    {% if form.errors contains 'author' %}
                                                        aria-invalid="true"
                                                        aria-describedby="CommentForm-author-error"
                                                    {% endif %}
                                                    placeholder="${this.lang((u=this.data.settings)==null?void 0:u.name_placeholder,"name_placeholder")}"
                                                    >
                                                    {%- if form.errors contains 'author' -%}
                                                    <small id="CommentForm-author-error">
                                                        <span class="ecom-shopify__article-comment-form-message">{{ icon_error}}${this.lang((r=this.data.settings)==null?void 0:r.name_label,"name_label")} {{ form.errors.messages['author'] }}.</span>
                                                    </small>
                                                    {%- endif -%}
                                                </div>
                                                <div class="ecom-shopify__article-comment-field ecom-shopify__article-comment-field--with-error">
                                                    ${(g=this.data.settings)!=null&&g.email_label?`
                                                            <label class="ecom-shopify__article-comment-field-label" for="CommentForm-email">${this.lang((m=this.data.settings)==null?void 0:m.email_label,"email_label")} <span aria-hidden="true">*</span></label>
                                                        `:""}
                                                    <input
                                                    type="email"
                                                    name="comment[email]"
                                                    id="CommentForm-email"
                                                    autocomplete="email"
                                                    class="ecom-shopify__article-comment-field__input"
                                                    value="{{ form.email }}"
                                                    autocorrect="off"
                                                    autocapitalize="off"
                                                    aria-required="true"
                                                    {% if form.errors contains 'email' %}
                                                        aria-invalid="true"
                                                        aria-describedby="CommentForm-email-error"
                                                    {% endif %}
                                                    placeholder="${this.lang((h=this.data.settings)==null?void 0:h.email_placeholder,"email_placeholder")}"
                                                    >
                                                    {%- if form.errors contains 'email' -%}
                                                    <small id="CommentForm-email-error">
                                                        <span class="ecom-shopify__article-comment-form-message">{{ icon_error}}${this.lang((_=this.data.settings)==null?void 0:_.email_label,"email_label")} {{ form.errors.messages['email'] }}.</span>
                                                    </small>
                                                    {%- endif -%}
                                                </div>
                                                {%- if layout contains 'horizontial' -%}
                                                    </div>
                                                {%- endif -%}
                                            <div class="ecom-w-full ecom-shopify__article-comment-field ecom-shopify__article-comment-field--with-error">
                                                ${(b=this.data.settings)!=null&&b.message_label?`
                                                    <label class="ecom-shopify__article-comment-field-label" for="CommentForm-body">${this.lang((f=this.data.settings)==null?void 0:f.message_label,"message_label")} <span aria-hidden="true">*</span></label>
                                                    `:""}
                                                <textarea
                                                rows="5"
                                                name="comment[body]"
                                                id="CommentForm-body"
                                                class="ecom-shopify__article-comment-field-text-area ecom-shopify__article-comment-field__input"
                                                aria-required="true"
                                                {% if form.errors contains 'body' %}
                                                aria-invalid="true"
                                                aria-describedby="CommentForm-body-error"
                                                {% endif %}
                                                placeholder="${this.lang((v=this.data.settings)==null?void 0:v.message_placeholder,"message_placeholder")}"
                                            >{{ form.body }}</textarea>

                                            </div>
                                            <div class="element__button ecom-button-default">
                                                <button type="submit" class="ecom-shopify__article-comment-field-button">
                                                    ${this.lang((x=this.data.settings)==null?void 0:x.submit_label,"submit_label")}
                                                </button>
                                            </div>
                                            {%- if form.errors contains 'body' -%}
                                            <small id="CommentForm-body-error">
                                                <span class="ecom-shopify__article-comment-form--message">{{ icon_error}}${this.lang((C=this.data.settings)==null?void 0:C.message_label,"message_label")} {{ form.errors.messages['body'] }}.</span>
                                            </small>
                                            {%- endif -%}

                                        </div>
                                        {%- if article.moderated? -%}
                                            <p class="ecom-shopify__article-comment-warning ecom-shopify__article-comment-caption">${this.lang((L=this.data.settings)==null?void 0:L.moderated,"moderated")}</p>
                                        {%- endif -%}

                                        {% endform %}
                                    </div>
                                {% endif %}
                            {%- endif -%}
                        {% else %}
                            <div>Please select the article in settings</div>
                        {% endif %}
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-col-12">
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-9 ecom-skeleton-big"></div>
                                </div>
                            </div>
                        </div>
                    `}}},requestShopifyType(){return{shopify_type:"article"}},settings(){return[{group_title:"General",params:[{type:"popup",label:"Type",name:"layout",options:{type:"dropdown",default:!1,values:{verticle:"Verticle",horizontial:"Horizontial"},default:!1}},{type:"text",label:"Field name label",name:"name_label",placeholder:"Name"},{type:"text",label:"Field name placeholder",name:"name_placeholder",placeholder:"Name"},{type:"text",label:"Message field label",name:"message_label",placeholder:"Message"},{type:"text",label:"Message field placeholder",name:"message_placeholder",placeholder:"Message"},{type:"text",label:"Field Email label",name:"email_label",placeholder:"Email"},{type:"text",label:"Field Email placeholder",name:"email_placeholder",placeholder:"Email"},{type:"text",label:"Submit button label",name:"submit_label",placeholder:"Post comment"},{name:"column-gap",type:"number",label:"Column gap",value:"12px",options:{units:{px:{min:1,max:64,step:1}},responsive:!0},css:{selector:" .ecom-shopify__article-comment-fields"}},{name:"row-gap",type:"number",label:"Row gap",value:"12px",options:{units:{px:{min:1,max:64,step:1}},responsive:!0},css:{selector:" .ecom-shopify__article-comment-fields"}}]},{group_title:"Notification",params:[{type:"text",label:"Success message",name:"success_message",placeholder:"Your comment was posted successfully! Thank you!"},{type:"text",label:"Success message approve by moderator",name:"success_moderated",placeholder:"Your comment was posted successfully. We will publish it in a little while, as our blog is moderated."},{type:"textarea",label:"Moderated notice",name:"moderated",options:{placeholder:"Please note, comments need to be approved before they are published."}},{type:"text",label:"Error message",name:"error_heading",placeholder:"Please adjust the following:"}]}]},style(){return[{group_alias:"box",options:{group_title:"General"},modify:{params:{alias:"text-align",options:{label:"Alignment"}}}},{group_alias:"text",options:{group_title:"Label",group_name:"label",selector:" .ecom-shopify__article-comment-field-label"},modify:{params:{position:10,fields:{alias:"spacing"}}}},{group_alias:"input",options:{group_name:"input_textarea",group_title:"Input",selector:" .ecom-shopify__article-comment-field input, .ecom-shopify__article-comment-field textarea"}},{group_alias:"button",options:{group_name:"button",group_title:"Button",selector:" .ecom-shopify__article-comment-field-button"},modify:{params:[{position:0,fields:{alias:"align-self",options:{label:"Alignment"}}}]}},{group_alias:"text:spacing",options:{group_name:"noticeSuccess",group_title:"Success message",selector:" .ecom-shopify__article-form__message--success .ecom-shopify__article-form-status"}},{group_alias:"text:spacing",options:{group_name:"noticeError",group_title:"Error message",selector:" .ecom-shopify__article-form__message--error .ecom-shopify__article-form-status, .ecom-shopify__article-form__message--error .ecom-shopify__article-form-status-list"}}]},default(){return{settings:{"column-gap":"12px","row-gap":"12px",comment_form_title:"Leave a comment",success_message:"Your comment was posted successfully! Thank you!",success_moderated:"Your comment was posted successfully. We will publish it in a little while, as our blog is moderated.",error_heading:"Please adjust the following:",name_label:"Name",message_label:"Message",email_label:"Email",submit_label:"Post comment"},style:{box:{"text-align":"left"},label:{textTextAlign:"left",spacing:{margin:{bottom:"4px"}}},input_textarea:{"text-align":"left",spacing:{padding:{left:"8px",top:"8px",bottom:"8px",right:"8px"}},borderRadius:{top:"0px",left:"0px",bottom:"0px",right:"0px"},tab:"normal",border:{"border-style":"solid","border-width":{top:"0.8px",left:"0.8px",bottom:"0.8px",right:"0.8px"}}},button:{"align-self":"flex-start",buttonColornormalmode:"#ffffff",buttonBackgroundnormalmode:{classic:{"background-color":{"global-colors":"primary"}}},buttonColorhovermode:"#ffffff",buttonBackgroundhovermode:{classic:{"background-color":"#047857"}},buttonBordernormalmode:{"border-style":"none"},buttonBorderRadiusnormalmode:{top:"0px",left:"0px",bottom:"0px",right:"0px"},spacing:{padding:{left:"20px",top:"12px",bottom:"12px",right:"20px"}}},noticeSuccess:{textTextAlign:"left",spacing:{margin:{bottom:"24px"}}},noticeError:{textTextAlign:"left",spacing:{margin:{bottom:"8px"}}}}}}}},B_={class:"ecom-element ecom-shopify-elements ecom-shopify__article-comments-count"},q_={class:"ecom-shopify__article-comments-count--wrapper"},E_=["data-ecom-placeholder","innerHTML"];function D_(e,t,o,n,s,i){return c(),d("div",B_,[p("div",q_,[p("div",{class:S(["ecom-shopify__article-comments-count--container",e.exporting?"":"ecom-placeholder-on-builder-mode"]),"data-ecom-placeholder":e.exporting?"":"This article disabled comments",innerHTML:e.liquid("comments_form")},null,10,E_)])])}const A_=k(Kt,[["render",D_]]);Kt.__docgenInfo={exportName:"default",displayName:"ArticleCommentForm",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Article/CommentForm.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Xt={name:"BlogArticlesCount",mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){var e,t,o,n,s,i;return{blogArticlesCount:{code:`
                        {%- if  blog != blank -%}
                            {% if blog.articles_count == 1 %}
                            ${this.lang((o=(t=(e=this.data)==null?void 0:e.settings)==null?void 0:t.articleCountText)!=null?o:"","article_count_text",{article_count:"blog.articles_count"})}
                            {% else %}
                                ${this.lang((i=(s=(n=this.data)==null?void 0:n.settings)==null?void 0:s.articlesCountText)!=null?i:"","articles_count_text",{articles_count:"blog.articles_count"})}
                            {% endif %}
                        {%- else -%}
                            <div>Please select the blog in settings</div>
                        {%- endif -%}
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-col-12">
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-9 ecom-skeleton-big"></div>
                                </div>
                            </div>
                        </div>
                    `}}},requestShopifyType(){return{shopify_type:"blog"}},settings(){return[{group_title:"",params:[{type:"text",name:"articleCountText",label:"Article text count",placeholder:"{{article_count}}",description:"Use {{article_count}} to show article count"},{type:"text",name:"articlesCountText",label:"Articles text count",placeholder:"{{articles_count}}",description:"Use {{articles_count}} to show articles count"}]}]},style(){return[{group_alias:"text:spacing",options:{group_title:"",selector:" .ecom-shopify__blog--count-inner",group_name:"blog_artilces_count"}}]},default(){return{settings:{articleCountText:"{{ article_count }} article",articlesCountText:"{{ articles_count }} articles"},style:{blog_artilces_count:{textTextAlign:"left"}}}}}},z_={class:"ecom-element ecom-shopify-elements ecom-shopify__blog--count"},j_={class:"ecom-shopify__blog--count-wrapper"},I_=["innerHTML"];function P_(e,t,o,n,s,i){return c(),d("div",z_,[p("div",j_,[p("div",{class:"ecom-shopify__blog--count-inner",innerHTML:e.liquid("blogArticlesCount")},null,8,I_)])])}const N_=k(Xt,[["render",P_]]);Xt.__docgenInfo={exportName:"default",displayName:"BlogArticlesCount",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Blog/ArticlesCount.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const Qt={name:"BlogCategories",docs:"https://help.ecomposer.io/docs/elements/shopify-elements/blog-categories/",mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{articlesCountText(){return this.data&&this.data.settings&&this.data.settings.articlesCountText?this.data.settings.articlesCountText:""},isShowArticlesCount(){return this.data&&this.data.settings&&this.data.settings.isShowArticlesCount?this.data.settings.isShowArticlesCount:!1},liquids(){return{blogCategories:{code:`
                        {%- capture blogs_selected -%}
                            ${this.data.settings&&this.data.settings.blogs?this.data.settings.blogs.map(e=>e.value).join(","):"{{ blog.handle }}, "}
                            
                        {%-  endcapture-%}                        

                        {%- if blogs_selected -%}
                            {%- assign blogs_handle = blogs_selected | split: ',' -%}
                        {%- endif -%}

                        {% if blogs_handle != empty %}
                            <ul class="ecom-shopify__blog--categories-items">
                                
                                {% for blog_handle in blogs_handle %}
                                    {%- assign blog_item = blogs[blog_handle] -%}
                                    {%- if blog_item == blank -%}
                                    {%- continue -%}

                                    {%- endif -%}
                                    <li class="ecom-shopify__blog--categories-item">
                                        <a href="/blogs/{{ blog_item.handle }}" class="ecom-shopify__blog--categories-item-link">

                                            ${this.data.settings.show_thumbnail?`
                                                {%- if blog_item.articles_count > 0 -%}
                                                    {% assign first_article = blog_item.articles.first %}
                                                    {% if first_article.image %}
                                                        <div class="ecom-shopify__blog--categories-item-thumbnail">
                                                            {{ first_article.image.src | image_url: width: 500 | img_tag: blog_item.title, 'ecom-image-default'  }}
                                                        </div>
                                                    {% endif %}
                                                {%- endif -%}
                                                <div class="ecom-shopify__blog--categories-item-information">
                                                    <span class="ecom-shopify__blog--categories-item-title">{{ blog_item.title }}</span>
                                                    ${this.lang(this.isShowArticlesCount&&this.articlesCountText?`<span class="ecom-shopify__blog--categories-item-count">${this.articlesCountText}</span>`:"","articlesCountText",{articles_count:"blog_item.articles_count"})}
                                                </div>
                                            `:`
                                                 ${this.data.settings.icon?`
                                                            <span class="ecom-shopify__blog--categories--icon">${this.data.settings.icon}</span>
                                                `:""}
                                                    <div class="ecom-shopify__blog--categories-item-information">

                                                        <span class="ecom-shopify__blog--categories-item-title">{{ blog_item.title }}</span>
                                                        ${this.lang(this.isShowArticlesCount&&this.articlesCountText?`<span class="ecom-shopify__blog--categories-item-count">${this.articlesCountText}</span>`:"","articlesCountText",{articles_count:"blog_item.articles_count"})}
                                                    </div>
                                                `}

                                        </a>
                                    </li>
                                {% endfor %}
                            </ul>
                        {% else %}
                            ${this.exporting?"<div>No blogs yet!</div>":"<div>Please select the blogs in settings</div>"}
                        {% endif %}
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-col-12">
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-9 ecom-skeleton-big"></div>
                                </div>
                            </div>
                        </div>
                    `}}},settings(){return[{params:[{type:"paragraph",content:"To apply the current template to some or all blogs you can configure it in [Page settings](#settings/page_settings/general)"},{type:"line"},{type:"picker",name:"blogs",label:"Pick blogs to preview",description:"Leave this field blank to show the current category of article(available on live page)",options:{type:"blog",layout:"list",multiple:!0}},{type:"popup",label:"Layout",name:"blogCategoriesDirection",options:{type:"dropdown",preview:"title",values:{column:"Vertical",row:"Horizontal"},default:!1},css:{selector:" .ecom-shopify__blog--categories-items",properties:{display:"flex","flex-direction":""}}},{name:"column-gap",type:"number",label:"Column gap",value:"12px",options:{units:{px:{min:1,max:120,step:1}},responsive:!0,visible:{keep_data:!1,condition:e=>e.blogCategoriesDirection==="row"}},css:{selector:" .ecom-shopify__blog--categories-items"}},{name:"row-gap",type:"number",label:"Row gap",value:"12px",options:{units:{px:{min:1,max:120,step:1}},responsive:!0},css:{selector:" .ecom-shopify__blog--categories-items"}},{type:"toggle",name:"isShowArticlesCount",label:"Show Articles Count",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0},css:{isCss:!1}},{type:"text",name:"articlesCountText",label:"Articles text count",placeholder:"{{articles_count}}",description:"Use {{articles_count}} to show articles count",options:{visible:{keep_data:!1,condition:e=>e.isShowArticlesCount}}},{type:"toggle",label:"Show thumbnail",name:"show_thumbnail",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0},description:"Show the first article's thumbnail of blog"},{type:"picker",label:"Icon",name:"icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:function(e){return!e.show_thumbnail}}}]}]},css(){return`
                .ecom-shopify__blog--categories-items{
                    flex-wrap:wrap
                }

                li.ecom-shopify__blog--categories-item {
                    list-style: none;
                    // width: 100%;
                }
                .ecom-shopify__blog--categories-item-link {
                    width: 100%;
                }
                .ecom-shopify__blog--categories-item-information {
                    display: flex;
                    flex: 1;
                }
                .ecom-shopify__blog--categories-items .ecom-shopify__blog--categories-item-link{
                    text-decoration:none;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                .ecom-shopify__blog--categories--icon{
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                `},default(){return{settings:{"row-gap":"12px",blogCategoriesDirection:"column",blogs:[],isShowArticlesCount:!0,articlesCountText:"({{ articles_count }})",show_thumbnail:!0},style:{blog_categories_title:{textTextAlign:"left",spacing:{margin:{bottom:"16px"}}},general:{blogCategoriesAlignment:"flex-start"},icon:{iconFontSize:"23px",iconTransform:16,iconPrimaryColor:"#f73b3b"},title:{tab:"normal",textColornormalmode:{"global-colors":"primary"},textTypography:{"font-weight":"500"}},count_text:{tab:"normal",textColornormalmode:{"global-colors":"primary"},textTypography:{"font-weight":"500"}},image:{tab:"normal",imageBorderRadiusnormalmode:{right:"5px",top:"5px",left:"5px",bottom:"5px"}}}}}},methods:{style(){var t,o,n,s;let e=[{group_alias:"box",options:{group_title:"General",group_name:"general"},modify:{params:{type:"choose",label:"Alignment",name:"blogCategoriesAlignment",options:{oneline:!0,responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{selector:"root .ecom-shopify__blog--categories-items",properties:{"align-items":"","justify-content":""}}}}},{group_alias:"text:hover",options:{group_title:"Title",selector:" .ecom-shopify__blog--categories-item-title",group_name:"title"}}];return((o=(t=this.data.settings)==null?void 0:t.blogs)==null?void 0:o.length)>0&&e.push({group_alias:"box",options:{group_title:"Category item",selector:" .ecom-shopify__blog--categories-item",group_name:"category_item"},modify:{params:[{position:0,fields:[{name:"cat_item_width",label:"Width",type:"number",options:{responsive:!0,units:{px:{min:0,max:500},"%":{min:0,max:100}}},css:{properties:{width:""}}}]},{position:6,fields:[{alias:"spacing"}]}]}}),this.isShowArticlesCount&&e.push({group_alias:"text:hover",options:{group_title:"Count text",selector:" .ecom-shopify__blog--categories-item-count",group_name:"count_text"}}),(n=this.data.settings)!=null&&n.show_thumbnail&&e.push({group_alias:"image",options:{option_title:"Thumnmail",option_name:"thumbnail",selector:" .ecom-shopify__blog--categories-item-thumbnail"}}),(s=this.data.settings)!=null&&s.icon&&e.push({group_alias:"icon",options:{group_name:"icon",group_title:"Icon",selector:" .ecom-shopify__blog--categories--icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}}),e}}},V_={class:"ecom-element ecom-shopify-elements ecom-shopify__blog--categories"},W_={class:"ecom-shopify__blog--categories-wrapper"},O_=["innerHTML"];function F_(e,t,o,n,s,i){return c(),d("div",V_,[p("div",W_,[p("div",{class:"ecom-shopify__blog--categories-inner",innerHTML:e.liquid("blogCategories")},null,8,O_)])])}const U_=k(Qt,[["render",F_]]);Qt.__docgenInfo={exportName:"default",displayName:"BlogCategories",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Blog/Categories.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const eo={name:"BlogTags",mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){var e;return{blogTags:{code:`
                        {%- capture limit -%}${(e=this.data.settings)!=null&&e.limit?this.data.settings.limit:3}{%-endcapture-%}
                        {% assign limit = limit | plus: 0 %}

                        {% if blog != empty %}
                            {% assign tmpl =  '' %}
                            {% if  template.suffix %}
                                {% assign tmpl = '?view=' | append: template.suffix %}
                            {% endif %}
                            <ul class="ecom-shopify__blog--tags-items">
                                {% for tag in blog.all_tags limit: limit %}
                                    <li class="ecom-shopify__blog--tags-item">
                                    <a href="/blogs/{{blog.handle}}/tagged/{{tag | handleize }}{{tmpl}}">{{ tag }}</a>
                                    </li>
                                {% endfor %}
                            </ul>
                        {% else %}
                            ${this.exporting?"<div>No tags yet!</div>":"<div>Please select the blog in settings</div>"}
                        {% endif %}
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-col-12">
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-9 ecom-skeleton-big"></div>
                                </div>
                            </div>
                        </div>
                    `}}},requestShopifyType(){return{shopify_type:"blog"}},settings(){return[{params:[{type:"popup",label:"Layout",name:"flexDirection",value:"column",options:{type:"dropdown",default:!1,values:{column:"Vertical",row:"Horizontal"}},css:{selector:" .ecom-shopify__blog--tags-items",properties:{"flex-direction":""}}},{type:"number",name:"limit",label:"Maximum tags to show",options:{min:1,max:20}},{name:"column-gap",type:"number",label:"Column gap",value:"12px",options:{units:{px:{min:1,max:64,step:1}},responsive:!0,visible:{keep_data:!1,condition:e=>e.flexDirection==="row"}},css:{selector:" .ecom-shopify__blog--tags-items"}},{name:"row-gap",type:"number",label:"Row gap",value:"12px",options:{units:{px:{min:1,max:64,step:1}},responsive:!0},css:{selector:" .ecom-shopify__blog--tags-items"}}]}]},style(){return[{group_alias:"box",options:{group_title:"General",group_name:"blog_tags_general",selector:" .ecom-shopify__blog--tags-wrapper"},modify:{params:[{position:0,fields:{type:"choose",label:"Alignment",name:"blogTagsAlignment",options:{oneline:!0,responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{selector:" .ecom-shopify__blog--tags-inner",properties:{display:"flex","justify-content":""}}}},{position:20,fields:{alias:"spacing"}}]}},{group_alias:"button",options:{group_title:"Tag",selector:" .ecom-shopify__blog--tags-item a",group_name:"blog_tags_item"}}]},css(){return`
            .ecom-shopify__blog--tags-items {
                display: flex;
                flex-wrap: wrap;
                list-style: none;
            }
            .ecom-shopify__blog--tags-items li {
                list-style: none;
            }
            .ecom-shopify__blog--tags-item a {
                display: block;
            }
            `},default(){return{settings:{limit:10,isShowTitle:!0,textTitle:"Blog Tags",flexDirection:"row","column-gap":"10px","row-gap":"10px"},style:{blog_tags_general:{blogTagsAlignment:"flex-start"},blog_tags_item:{spacing:{padding:{left:"16px",top:"8px",bottom:"8px",right:"16px"}},buttonColornormalmode:"#111827",buttonBackgroundnormalmode:{classic:{"background-color":"rgba(17, 24, 39, 0.05)"}},buttonColorhovermode:"#111827"}}}}}},R_={class:"ecom-element ecom-shopify-elements ecom-shopify__blog--tags"},Y_={class:"ecom-shopify__blog--tags-wrapper"},G_=["innerHTML"];function J_(e,t,o,n,s,i){return c(),d("div",R_,[p("div",Y_,[p("div",{class:"ecom-shopify__blog--tags-inner",innerHTML:e.liquid("blogTags")},null,8,G_)])])}const Z_=k(eo,[["render",J_]]);eo.__docgenInfo={exportName:"default",displayName:"BlogTags",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Blog/Tags.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const to={name:"BlogTitle",mixins:[M,T],props:{data:{type:Object,default(){return{}}}},computed:{classes(){return this.data&&this.data.settings&&this.data.settings.classes?this.data.settings.classes:""},heading(){return this.data&&this.data.settings&&this.data.settings.tag?this.data.settings.tag:"h3"},liquids(){return{title:{code:`
                        {%- if  blog != blank -%}
                            {{blog.title}}
                        {%- else -%}
                            ${this.exporting?"<div>No blog yet!</div>":"<div>Please select the blog in settings</div>"}
                        {%- endif -%}
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-col-12">
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-9 ecom-skeleton-big"></div>
                                </div>
                            </div>
                        </div>
                    `},url:{code:"{{ blog.url }}",preview:"#"}}},settings(){return[{group_alias:"title:settings",options:{group_name:"",group_title:""}}]},requestShopifyType(){return{shopify_type:"blog"}},style(){return[{group_alias:"text:spacing",options:{group_title:"",selector:" .ecom-shopify__blog--title-text"}}]},default(){return{settings:{tag:"h2",classes:""},style:{textSpacing:{textTextAlign:"left"}}}}}},K_={class:"ecom-element ecom-blog ecom-shopify__blog--title"},X_={class:"ecom-shopify__blog--title-text-wrapper"};function Q_(e,t,o,n,s,i){return c(),d("div",K_,[p("div",X_,[(c(),z(W(i.heading),{class:S(["ecom-shopify__blog--title-text",i.classes]),href:e.liquid("url"),innerHTML:e.liquid("title")},null,8,["class","href","innerHTML"]))])])}const eh=k(to,[["render",Q_]]);to.__docgenInfo={exportName:"default",displayName:"BlogTitle",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Blog/Title.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const oo={name:"Megamenu",presets:!0,mixins:[M,H,T],props:{data:{type:Object,default(){return{}}}},methods:{megamenu_width(e){return(e==null?void 0:e.megamenu_type)=="fullwidth"?{width:"100vw"}:{width:e==null?void 0:e.custom_width}}},watch:{"data.settings.items":{deep:!0,handler:function(){this.data.refresh=this.$helpers.randid()}}},computed:{javascript(){return function(){if(!this.$el)return!1;if(!this.isLive){const e=function(t){if(!(window.innerWidth<=767)){var o=document.querySelector("html"),n=o.getAttribute("dir")=="rtl",s=window.innerWidth,i=s,a=t.querySelector(".ecom-submenu");if(!!a){var l=a.getBoundingClientRect(),u={top:l.top+window.scrollY,left:l.left+window.scrollX},r=a.offsetWidth,g=u,m=a.classList.contains("fullwidth")?0:10;if(!(!r||!g)){var h=s-g.left-r;if(r>=0&&a.classList.contains("ecom-position-center")){var _=g.left+r/2-s/2;n?a.style.right=_+"px":a.style.left=-_+"px"}else if(n&&(h+r>=i||a.classList.contains("fullwidth"))){var _=h+r-i;a.style.right=-_-m+"px"}else if(g.left+r>=i||a.classList.contains("fullwidth")){var b=g.left+r-i;a.style.left=-b-m+"px"}}}}};document.querySelectorAll(".ecom-megamenu__item.ecom-has-submenu").length&&document.querySelectorAll(".ecom-megamenu__item.ecom-has-submenu").forEach(function(t){e(t)})}}},default(){return{settings:{items:[{title:"Menu #1",custom_width:"700px",sub_type:"section",megamenu_type:"custom",link:{href:"#"},label:"Hot",label_background:"#e81313"},{title:"Menu #2",custom_width:"700px",sub_type:"section",megamenu_type:"custom",link:{href:"#"},label_background:"#e81313"},{title:"Menu #3",custom_width:"700px",sub_type:"section",megamenu_type:"custom",link:{href:"#"},label_background:"#137de8",label:"Sale"}],menu_type:"horizontal"},style:{title:{titleAlignment:"center",textDecoration:"none",spacing:{padding:{top:"5px",bottom:"5px",left:"12px",right:"12px"}}},submenu:{textDecoration:"none",spacing:{padding:{top:"5px",bottom:"5px",left:"12px",right:"12px"}}},mobile_menu:{textDecoration:"none"},main_menu_item:{tab:"normal",buttonTypography:{"text-decoration":"none"},spacing:{padding:{left:"12.5px",right:"12.5px"}}}}}},settings(){return[{group_title:"Menu desktop",params:[{name:"menu_type",type:"dropdown",label:"Menu type",options:{oneline:!1,default:!1,values:{horizontal:"Horizontal",vertical:"Vertical"}}},{name:"items",type:"group",label:"Menu items",value:[],options:{add_text:"Add item",is_clear_all:!1},params:[{type:"text",label:"Title",name:"title"},{name:"link",type:"link",label:"Menu link",options:{}},{type:"picker",label:"Icon",name:"icon",options:{type:"icon",multiple:!1},css:{isCss:!1}},{name:"iconPosition",label:"Icon Position",type:"choose",value:"0",options:{oneline:!0,type:"align-x",values:["0","1"],visible:e=>e.icon}},{type:"text",label:"Label",name:"label"},{type:"color",label:"Label background",name:"label_background",oneline:!0,options:{global:{type:"colors"}}},{type:"line"},{name:"sub_type",type:"dropdown",label:"Megamenu type",options:{oneline:!1,default:!1,values:{section:"Section",menu:"Shopify menu"}}},{type:"picker",label:"Shopify menu",name:"shopify_menu",options:{type:"menu",visible:function(e){return e.sub_type=="menu"},multiple:!1}},{type:"picker",label:"Section",name:"section",options:{type:"section",layout:"list",visible:function(e){return e.sub_type=="section"},multiple:!1}},{name:"megamenu_type",type:"dropdown",label:"Submenu Width",options:{oneline:!1,default:!1,visible:function(e){return e.section!=""},values:{custom:"Custom width",fullwidth:"Full width"}}},{type:"number",label:"Custom width",name:"custom_width",options:{visible:function(e){return e.megamenu_type=="custom"&&e.section!=""},units:{px:{min:250,max:1200}},slider:!0,input:!0}},{type:"line"}]}]},{group_title:"Menu Moblie",params:[{name:"items_mobile",type:"group",label:"Menu items",value:[],options:{add_text:"Add item",is_clear_all:!1},params:[{name:"menu_type",type:"dropdown",label:"Menu type",value:"link",options:{oneline:!1,default:!1,values:{link:"Link",menu:"Shopify menu"}}},{type:"picker",label:"Shopify menu",name:"shopify_menu",options:{type:"menu",visible:function(e){return e.menu_type=="menu"},multiple:!1,layout:"list"}},{type:"text",label:"Title",name:"title",options:{visible:function(e){return e.menu_type=="link"}}},{name:"link",type:"link",label:"Link Menu",options:{visible:function(e){return e.menu_type=="link"}}},{type:"picker",label:"Icon",name:"icon",options:{type:"icon",multiple:!1,visible:function(e){return e.menu_type=="link"}},css:{isCss:!1}},{name:"iconPosition",label:"Icon Position",type:"choose",value:"0",options:{oneline:!0,type:"align-x",values:["0","1"],visible:e=>e.icon&&e.menu_type=="link"}},{type:"text",label:"Label",name:"label",options:{visible:function(e){return e.menu_type=="link"}}},{type:"color",label:"Label background",name:"label_background",oneline:!0,options:{global:{type:"colors"},visible:function(e){return e.menu_type=="link"}}}]}]}]},style(){return[{group_alias:"box",options:{group_title:"Main menu",group_name:"main_menu",selector:" .ecom-megamenu-desktop .ecom-megamenu"},modify:{params:[{position:0,fields:[{alias:"width"},{type:"choose",label:"Content alignment",name:"content_alignment",options:{type:"align-x-full",values:["flex-start","center","flex-end"]},css:{selector:"root .ecom-megamenu-wrapper",properties:{"justify-content":""}}}]},{position:5,fields:[{alias:"spacing"}]}]}},{group_alias:"button",options:{group_title:"Main menu item",group_name:"main_menu_item",selector:" .ecom-megamenu__link"},modify:{params:[{position:3,fields:[{type:"choose",label:"Alignment",name:"titleAlignment",options:{oneline:!0,responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"justify-content":""}}}]}]}},{group_alias:"button",options:{group_title:"Sub Shopify menu",group_name:"submenu",selector:" .ecom-submenu__item-link"},modify:{remove:[{index:5,length:1},{index:8,length:1},{label:"Width",length:1},{label:"Height",length:1}]}},{group_alias:"box",options:{group_name:"mobile_menu",group_title:"Mobile menu",selector:" .ecom-mobile-menu__wrapper"}},{group_alias:"button",options:{group_title:"Mobile menu item",group_name:"mobile_menu_item",selector:" .ecom-moblie-menu-link"},modify:{remove:[{index:5,length:1},{index:7,length:1},{label:"Width",length:1},{label:"Height",length:1}]}},{group_alias:"icon",options:{group_title:"Icon",group_name:"icon",selector:" .ecom-megamenu__item--icon"},modify:{params:[{position:3,fields:[{name:"iconSpacing",label:"Spacing",type:"number",options:{responsive:!1,units:{px:{min:0,max:50}}},css:{properties:{margin:"0 %value%"}}}]}]}}]},liquids(){var t,o,n,s,i,a;const e={};if((o=(t=this.data)==null?void 0:t.settings)!=null&&o.items&&((s=(n=this.data)==null?void 0:n.settings)==null?void 0:s.items).forEach((u,r)=>{var g,m;if((u==null?void 0:u.sub_type)=="section")(g=u==null?void 0:u.section)!=null&&g.value&&(e["item-"+r]={code:`{%- capture ecomMegamenu -%}
                                            {%- section 'ecom-${u.section.value}-section' -%}
                                        {%- endcapture -%}
                                        {%- unless ecomMegamenu contains 'Liquid error' -%}
                                            {{ ecomMegamenu }}
                                        {%- endunless -%}`,preview:""});else if((u==null?void 0:u.sub_type)=="menu"&&(m=u==null?void 0:u.shopify_menu)!=null&&m.value){let h=u.shopify_menu.value;e["item-"+r]={code:`	<ul class="ecom-menu ecom-dropdown-menu">
                                        {%- for link in linklists['${h}'].links -%}
                                            <li class="ecom-submenu__item ecom-submenu__item--level_1 ecom-pr">
                                            <a class="ecom-submenu__item-link" href="{{ link.url }}" alt="{{ link.title }}">{{ link.title }}</a>

                                            {% if link.links.size > 0 %}
                                                <ul class="ecom-menu ecom-dropdown-child">
                                                {% for child_link in link.links %}
                                                    <li class="ecom-submenu__item ecom-submenu__item--level_2 ecom-pr">
                                                    <a class="ecom-submenu__item-link" href="{{ child_link.url }}" alt="{{ child_link.title }}">{{ child_link.title }}</a>

                                                    {% if child_link.links.size > 0 %}
                                                        <ul class="ecom-menu ecom-dropdown-grandchild">
                                                        {% for grandchild_link in child_link.links %}
                                                            <li class="ecom-submenu__item ecom-submenu__item--level_3 ecom-pr">
                                                            <a class="ecom-submenu__item-link" href="{{ grandchild_link.url }}" alt="{{ grandchild_link.title }}">{{ grandchild_link.title }}</a>
                                                            </li>
                                                        {% endfor %}
                                                        </ul>
                                                    {% endif %}
                                                    </li>
                                                {% endfor %}
                                                </ul>
                                            {% endif %}
                                            </li>
                                        {%- endfor -%}
                                        </ul>`,preview:""}}}),(a=(i=this.data)==null?void 0:i.settings)!=null&&a.menu_mobile){let l=this.data.settings.menu_mobile.value;e.mobile_menu={code:`	<ul class="ecom-moblie-menu-shopify">
                                {%- for link in linklists['${l}'].links -%}
                                    {%- if link.links.size > 0 -%}
                                        <li class="ecom-moblie-menu__item ecom-mobile-menu__has-children ecom-moblie-menu--level_1 ecom-pr">
                                            <a class="ecom-moblie-menu-link" href="{{ link.url }}" alt="{{ link.title }}">
                                                {{ link.title }}
                                                <span class="ecom-nav_link_icon ecom-ml__5"></span>
                                            </a>
                                            <ul class="ecom-mobile-sub-menu ecom-moblie-dropdown-child">
                                            {% for child_link in link.links %}
                                                {% if child_link.links.size > 0 %}
                                                <li class="ecom-moblie-menu ecom-moblie-menu--level_2 ecom-mobile-menu__has-children ecom-pr">
                                                    <a class="ecom-moblie-menu-link" href="{{ child_link.url }}" alt="{{ child_link.title }}">
                                                        {{ child_link.title }}
                                                        <span class="ecom-nav_link_icon ecom-ml__5"></span>
                                                    </a>
                                                    <ul class="ecom-mobile-sub-menu ecom-moblie-dropdown-grandchild">
                                                    {% for grandchild_link in child_link.links %}
                                                        <li class="ecom-moblie-menu ecom-moblie-menu--level_3 ecom-pr">
                                                        <a class="ecom-moblie-menu-link" href="{{ grandchild_link.url }}" alt="{{ grandchild_link.title }}">{{ grandchild_link.title }}</a>
                                                        </li>
                                                    {% endfor %}
                                                    </ul>
                                                </li>
                                                {%- else -%}
                                                    <li class="ecom-moblie-menu ecom-moblie-menu--level_2 ecom-pr">
                                                        <a class="ecom-moblie-menu-link" href="{{ child_link.url }}" alt="{{ child_link.title }}">{{ child_link.title }}</a>
                                                    </li>
                                                {%- endif -%}
                                            {% endfor %}
                                            </ul>
                                        </li>
                                    {%- else -%}
                                        <li class="ecom-moblie-menu__item ecom-moblie-menu--level_1 ecom-pr">
                                            <a class="ecom-moblie-menu-link" href="{{ link.url }}" alt="{{ link.title }}">{{ link.title }}</a>
                                        </li>
                                    {%- endif -%}
                            {%- endfor -%}
                            </ul>`,preview:""},e.is_editor={code:"{%-if request.path contains 'ecomposer-visual-page-builder'-%}is_editor{%- endif -%}",preview:""}}return e},css(){return`
                @media(max-width: 1024px){
                    .ecom-megamenu-desktop {
                        display:none;
                    }
                }
                @media(min-width: 1025px){
                    .ecom-mobile-menu__wrapper {
                        display:none;
                    }
                }
                .ecom-builder .ecom-megamenu-wrapper {
                    display: flex;
                    position: relative;
                    z-index: 999
                }
                .ecom-megamenu ul, .ecom-megamenu li {
                    list-style: none
                }
                .ecom-megamenu .ecom-megamenu__item {
                    display: inline-flex;
                }
                .ecom-megamenu .ecom-submenu__full-width {
                    width: 100vw;
                }
                .ecom-megamenu__link--label {
                    z-index: 1;
                    position: absolute;
                    color: #fff;
                    font-size: 9px;
                    padding: 1px 7px 0;
                    border-radius: 50px;
                    top: 50%;
                    line-height: 16px;
                    background: #01bad4;
                    transform: translateY(-50%);
                    -moz-transform: translateY(-50%);
                    -o-transform: translateY(-50%);
                    -webkit-transform: translateY(-50%);
                    -ms-transform: translateY(-50%);
                    right: -5px;
                    margin-top: -14px;
                    -webkit-transition: opacity .3s ease-in-out;
                    -moz-transition: opacity .3s ease-in-out;
                    -o-transition: opacity .3s ease-in-out;
                    transition: opacity .3s ease-in-out;
                    opacity: 1;
                }
                .ecom-megamenu>li .ecom-submenu {
                    text-align: left;
                    position: absolute;
                    min-width: 250px;
                    background: #fff;
                    top: 100%;
                    z-index: 10;
                    padding: 0;
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                    overflow: visible;
                    box-shadow: 0 0 3px rgb(0 0 0 / 15%);
                    -webkit-box-shadow: inset 0 0 0 1px #eaeaea, 0 5px 20px rgb(0 0 0 / 15%);
                    box-shadow: inset 0 0 0 1px #eaeaea, 0 5px 20px rgb(0 0 0 / 15%);
                    overflow-y: inherit;
                    -webkit-transform: translateY(15px) translateZ(0);
                    transform: translateY(15px) translateZ(0);
                    transition: opacity .2s,visibility .2s,transform .2s,-webkit-transform .2s;
                }
                .ecom-megamenu>li:hover>.ecom-submenu {
                    opacity: 1;
                    visibility: visible;
                    pointer-events: auto;
                    -webkit-transform: none;
                    transform: none;
                }
                .ecom-megamenu__item--icon svg {
                    width: 20px;
                    height: 20px;
                    align-items: center;
                }
                .ecom-megamenu__item--icon {
                    align-items: center;
                }

                .ecom-submenu__item--level_1 ul {
                    text-align: left;
                    position: absolute;
                    left: 100%;
                    top: 0px;
                    width: 100%;
                    background: #fff;
                    transform: translateY(15px) translateZ(0);
                    transition: opacity .2s,visibility .2s,transform .2s,-webkit-transform .2s;
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                    z-index: 99
                }
                .ecom-submenu a {
                    width: 100%;
                }
                .ecom-submenu.custom.ecom-position-center {
                    left: 100%;
                    transform: translateX(-50%) translateY(15px) translateZ(0);
                }
                .ecom-submenu .ecom-submenu__item:hover > .ecom-menu {
                    opacity: 1;
                    visibility: visible;
                    pointer-events: auto;
                    -webkit-transform: none;
                    transform: none;
                }
                .ecom-megamenu>li:hover>.ecom-submenu.custom.ecom-position-center {
                    -webkit-transform: translateX(-50%) translateY(0) translateZ(0);
                    transform: translateX(-50%) translateY(0) translateZ(0);

                }
                .ecom-moblie-menu a {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    -webkit-flex-direction: row;
                    -ms-flex-direction: row;
                    -webkit-box-orient: horizontal;
                    -webkit-box-direction: normal;
                    flex-direction: row;
                    min-height: 40px;
                    text-align: left;
                }
                .ecom-moblie-menu .ecom-megamenu__link--title {
                    position: relative;
                }
                .ecom-moblie-menu .ecom-megamenu__link--label {
                    right: -20px;
                }
                .ecom-moblie-menu {
                    min-width: 300px;
                }
                .ecom-moblie-menu .ecom-moblie-dropdown-child li>a {
                    padding-left: 30px;
                }
                .ecom-moblie-menu .ecom-moblie-dropdown-grandchild li>a {
                    padding-left: 40px;
                }
                .ecom-moblie-menu .ecom-mobile-menu__has-children>a {
                    -webkit-justify-content: space-between;
                    -ms-flex-pack: justify;
                    -webkit-box-pack: justify;
                    justify-content: space-between;
                }
                .ecom-nav_link_icon {
                    width: 12px;
                    height: 12px;
                    padding: 10px;
                    position: relative;
                    display: block;
                    ms-flex: 0 0 auto;
                    flex: 0 0 auto;
                }
                .ecom-nav_link_icon:after, .ecom-nav_link_icon:before {
                    position: absolute;
                    content: '';
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translate(-50%,-50%) rotate(-90deg);
                    transform: translate(-50%,-50%) rotate(-90deg);
                    background-color: currentColor;
                    transition: transform .35s ease-in-out,opacity .35s ease-in-out,-webkit-transform .35s ease-in-out;
                }
                .ecom-nav_link_icon:before {
                    width: 12px;
                    height: 1px;
                    opacity: 1;
                }
                .ecom-nav_link_icon:after {
                    width: 1px;
                    height: 12px;
                }
                .ecom-mobile-menu__has-children .ecom-mobile-sub-menu {
                    display: none;
                }
                .ecom-submenu-open>a>.ecom-nav_link_icon:before,
                .ecom-submenu-open>a>.ecom-nav_link_icon:after {
                    -webkit-transform: translate(-50%,-50%) rotate(90deg);
                    transform: translate(-50%,-50%) rotate(90deg);
                }
                .ecom-submenu-open>a>.ecom-nav_link_icon:before {
                    opacity: 0;
                }
                ul.ecom-megamenu.vertical {
                    flex-direction: column;
                    -webkit-flex-direction: column;
                    -ms-flex-direction: column;
                    -webkit-box-orient: vertical;
                }
                .ecom-megamenu.vertical>li .ecom-submenu {
                    top: 0;
                    left: 100%;
                }
                .ecom-moblie-menu__item, .ecom-moblie-menu {
                    list-style: none;
                }
                .ecom-submenu__item-link {
                    display: block;
                }
            `}}},th={class:"ecom-megamenu-wrapper"},oh={key:0,class:"ecom-megamenu-desktop"},ih=["innerHTML"],nh=["innerHTML"],sh=["innerHTML"],ah=["innerHTML"],rh={key:1,class:"ecom-mobile-menu__wrapper"},lh={class:"ecom-moblie-menu"},ch=["innerHTML"],ph={class:"ecom-megamenu__link--title"},mh=["innerHTML"],dh=["innerHTML"],uh=p("div",{id:"MENUSETTING"},null,-1);function gh(e,t,o,n,s,i){var a,l,u,r,g,m,h,_,b;return c(),d("div",th,[((l=(a=o.data.settings)==null?void 0:a.items)==null?void 0:l.length)>0?(c(),d("nav",oh,[p("ul",{class:S(["ecom-megamenu ecom-in_flex ecom-wrap ecom-al_center",(r=(u=o.data)==null?void 0:u.settings)==null?void 0:r.menu_type])},[(c(!0),d(D,null,Y((g=o.data.settings)==null?void 0:g.items,(f,v)=>{var x,C,L,w,$,q;return c(),d("li",{key:v,class:S(["ecom-megamenu__item ecom-megamenu__parent ecom-pr",["ecom-megamenu__item-"+v,((x=f==null?void 0:f.section)==null?void 0:x.value)||((C=f==null?void 0:f.shopify_menu)==null?void 0:C.value)?"ecom-has-submenu":""]])},[p("a",j(f==null?void 0:f.link,{class:"ecom-megamenu__link ecom-flex ecom-al_center ecom-pr"}),[(L=f.icon)!=null&&L.value?(c(),d("span",{key:0,class:"ecom-megamenu__item--icon ecom-items--icon ecom-flex",style:E({order:f.iconPosition}),innerHTML:(w=f.icon)==null?void 0:w.value},null,12,ih)):y("",!0),p("span",{class:"ecom-megamenu__link--title",innerHTML:f==null?void 0:f.title},null,8,nh),f.label&&(f==null?void 0:f.title)?(c(),d("span",{key:1,class:"ecom-megamenu__link--label",style:E({backgroundColor:f==null?void 0:f.label_background}),innerHTML:f==null?void 0:f.label},null,12,sh)):y("",!0)],16),(($=f==null?void 0:f.section)==null?void 0:$.value)||((q=f==null?void 0:f.shopify_menu)==null?void 0:q.value)?(c(),d("div",{key:0,class:S(["ecom-submenu",[f==null?void 0:f.megamenu_type]]),style:E(i.megamenu_width(f)),innerHTML:e.liquid("item-"+v)},null,14,ah)):y("",!0)],2)}),128))],2)])):y("",!0),(_=(h=(m=o.data)==null?void 0:m.settings)==null?void 0:h.items_mobile)!=null&&_.length?(c(),d("div",rh,[p("div",lh,[(c(!0),d(D,null,Y((b=o.data.settings)==null?void 0:b.items_mobile,(f,v)=>{var x,C;return c(),d("div",{key:v,class:S(["ecom-moblie-menu__item",["ecom-megamenu__item-mobile-"+v]])},[(f==null?void 0:f.menu_type)==="link"?(c(),d("a",j({key:0},f==null?void 0:f.link,{class:"ecom-moblie-menu-link"}),[(x=f.icon)!=null&&x.value?(c(),d("span",{key:0,class:"ecom-megamenu__item--icon ecom-items--icon ecom-flex",style:E({order:f.iconPosition}),innerHTML:(C=f.icon)==null?void 0:C.value},null,12,ch)):y("",!0),p("span",ph,[Le(I(f.title)+" ",1),f.label?(c(),d("span",{key:0,class:"ecom-megamenu__link--label",style:E({backgroundColor:f==null?void 0:f.label_background}),innerHTML:f.label},null,12,mh)):y("",!0)])],16)):(c(),d("div",{key:1,innerHTML:e.liquid("mobile_menu")},null,8,dh))],2)}),128))])])):y("",!0),uh])}const _h=k(oo,[["render",gh]]);oo.__docgenInfo={exportName:"default",displayName:"Megamenu",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Megamenu/Megamenu.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};const io={name:"Masonry",vendors:["packery_js"],docs:"https://help.ecomposer.io/docs/elements/basic-elements/masonry-layout/",mixins:[T,H],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["items"]}},computed:{javascript(){return function(){const e=this.$el;if(!e)return;let t=e.querySelector(".ecom-masonry-layout");if(!t)return;t.addEventListener("itemChange",function(){setTimeout(function(){t.masonry.layout()},500)});var o=t.getAttribute("data-ecom-packery-params")||"{}";let n=Object.assign({itemSelector:".ecom-masonry-layout__item",layoutMode:"masonry",percentPosition:!0,resize:!0},JSON.parse(o));var s=new window.EComPackery(t,n);t.masonry=s,t.querySelectorAll("img").forEach(function(i){i.addEventListener("load",function(){s.layout()})})}},default(){return{settings:{items:[{name:"Banner",banner_width:"6",image:{image:{name:"Category-01_0e8c7f14-56e3-4a49-a72c-326be5bb66f0",ext:"jpg",value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/Category-01_0e8c7f14-56e3-4a49-a72c-326be5bb66f0.jpg?v=1651564114",thumbnail:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/Category-01_0e8c7f14-56e3-4a49-a72c-326be5bb66f0.jpg?v=1651564114&width=250&height=250&crop=center"}},content:{heading:"Bluetooth Speaker"},vertical:"flex-end",button:{link:{href:""},spacing:"96px",icon_position:1}},{name:"Banner",banner_width:"6",image:{image:{name:"Category-02_3be1906d-178a-4317-bdbc-c9a82ceda6a8",ext:"jpg",value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/Category-02_3be1906d-178a-4317-bdbc-c9a82ceda6a8.jpg?v=1651564542",thumbnail:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/Category-02_3be1906d-178a-4317-bdbc-c9a82ceda6a8.jpg?v=1651564542&width=250&height=250&crop=center"}},content:{heading:"<div>Nootebook Pro</div><div>Systems</div>"},vertical:"flex-end"},{name:"Banner",banner_width:"3",image:{image:{name:"Category-03_7383820e-941c-473f-8632-a67ba797799d",ext:"jpg",value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/Category-03_7383820e-941c-473f-8632-a67ba797799d.jpg?v=1651564778",thumbnail:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/Category-03_7383820e-941c-473f-8632-a67ba797799d.jpg?v=1651564778&width=250&height=250&crop=center"}},content:{heading:"<div>Music</div><div>Mouster</div>"},vertical:"flex-end"},{name:"Banner",banner_width:"3",image:{image:{name:"Category-04_3f07a133-a6c9-4b7e-8607-9f4cfa7d3593",ext:"jpg",value:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/Category-04_3f07a133-a6c9-4b7e-8607-9f4cfa7d3593.jpg?v=1651564801",thumbnail:"https://cdn.shopify.com/s/files/1/0629/7318/2186/files/Category-04_3f07a133-a6c9-4b7e-8607-9f4cfa7d3593.jpg?v=1651564801&width=250&height=250&crop=center"}},content:{heading:"Accessories<br>"},vertical:"flex-end"}],image_hover_zoom:!0},style:{button:{buttonBackgroundnormalmode:{classic:{"background-color":"rgba(5, 150, 105, 0.8)"}},buttonColornormalmode:"#000",spacing:{padding:{bottom:"10px",top:"10px",left:"24px",right:"24px"}},tab:"normal"},general:{spacing:{padding:{left:"12.5px",bottom:"25px",right:"12.5px"}}},heading:{textColor:"#ffffff",textTypography:{"font-weight":"500"},spacing:{padding:{top:"25px",left:"25px",bottom:"25px",right:"25px"}}},Image:{tab:"normal",imageWidth:"100%"},icon:{iconFontSize:"24px",icon_position:1,spacing:{margin:{left:"10px"}}}}}},settings(){return[{group_title:"Banner items",params:[{name:"items",type:"group",value:[],options:{add_text:"Add banner",is_clear_all:!1},params:[{type:"text",label:"Banner name",name:"name"},{name:"banner_width",type:"dropdown",label:"Banner Width",value:6,options:{default:!1,responsive:!0,values:{12:"100%",8:"66.6%",7:"58.3%",6:"50%",5:"41.6%",4:"33.3%",3:"25%",2:"20%",1:"16.6%"}}},{type:"choose",label:"Content Aligntment",name:"content_alignment",value:"",options:{type:"text-align",values:["left","center","right"]},css:{selector:"",properties:{"text-align":""}}},{type:"choose",label:"Horizontal Position",name:"horizontal",value:"",options:{type:"align-x-full",values:["left","center","right"]},css:{isCss:!1}},{type:"choose",label:"Vertical Position",name:"vertical",value:"",options:{type:"align-y-full",values:["flex-start","center","flex-end"]},css:{isCss:!1}},{group_name:"image",group_title:"Image",params:[{type:"picker",label:"Choose Image",name:"image",options:{responsive:!1,type:"image",editAlt:!0}},{type:"link",label:"Image link",name:"image_link"}]},{group_name:"content",group_title:"Content",params:[{type:"textarea",label:"Heading",name:"heading",options:{toolbar:!0}},{type:"textarea",label:"Sub Heading",name:"subheading",options:{toolbar:!0}},{type:"textarea",label:"Content",name:"content",options:{toolbar:!0}}]},{group_alias:"button:settings",options:{group_name:"button",group_title:"Button"},modify:{remove:{index:4,length:2}}}]}]},{group_title:"Settings",params:[{type:"toggle",name:"hidden_content",label:"Display content when hover image",options:{oneline:!0,values:{off:{label:"NO",value:!1},on:{label:"YES",value:!0}}},css:{isCss:!1}},{type:"toggle",name:"overlay_use",label:"Enable Overlay",options:{oneline:!0,values:{off:{label:"NO",value:!1},on:{label:"YES",value:!0}}},css:{isCss:!1}},{type:"popup",label:"Hover Animation",name:"animation",options:{type:"dropdown",values:"animation",size:"small"},css:{selector:"root .ecom-masonry__banner_hzoom:hover img",properties:{animation:""}}},{type:"popup",label:"Transition",name:"transition",options:{type:"transitions"},css:{selector:"root .ecom-masonry-layout__image-picture"}}]}]},liquids(){return{}},css(){return`
        .ecom-masonry-layout{
            overflow: hidden;
            display:block;
        }
        .ecom-masonry-layout__button {
          text-decoration: none;
          pointer-events: auto;
        }
        .ecom-masonry__banner_hzoom {
          position: relative;
          overflow: hidden;
        }
        .ecom-masonry__nt_promotion_html {
          position: absolute;
          max-width: 100%;
          z-index: 10;
          pointer-events: none;
        }
        .ecom-masonry__banner_overlay {
          pointer-events: none;
          position: absolute;
          background-color: #000;
          z-index: 1;
          opacity: 0.3;
          display: flex;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .ecom-masonry-layout__picture-link,
        .ecom-masonry-layout__picture,
        .ecom-masonry-layout__image-picture {
          width: 100%;
          object-fit: contain;
        }
        .ecom-content-hidden.ecom-masonry__nt_promotion .ecom-masonry__nt_promotion_html {
          opacity: 0;
          transition: all .3s ease;
        }
        .ecom-content-hidden.ecom-masonry__nt_promotion:hover .ecom-masonry__nt_promotion_html {
          opacity: 1;
        }
        .ecom-masonry-layout .ecom-image-default:hover {
            z-index: 10;
        }
        `}},mounted(){var e;(e=this.data)!=null&&e.settings||(this.data.settings={button:{titleAlignment:"center",spacing:{padding:{top:"5px",bottom:"5px",left:"12px",right:"12px"}}}})},methods:{banner_width(e){return[e.banner_width?e.banner_width==2?"ecom-col-lg-15":e.banner_width==1?"ecom-col-lg-2":"ecom-col-lg-"+e.banner_width:"ecom-col-12",e.banner_width__tablet?e.banner_width__tablet==2?"ecom-col-md-15":e.banner_width__tablet==1?"ecom-col-md-2":"ecom-col-md-"+e.banner_width__tablet:"",e.banner_width__mobile?e.banner_width__mobile==2?"ecom-col-15":e.banner_width__mobile==1?"ecom-col-2":"ecom-col-"+e.banner_width__mobile:"ecom-col-12"]},attrLink(e){var t;return(t=e.button)==null?void 0:t.link},banner_style(e){let t={};if(e.horizontal){let o="";switch(e.horizontal){case"left":o="0 auto 0 0";break;case"center":o="0 auto";break;case"right":o="0 0 0 auto";break}t.margin=o}return e.content_alignment&&(t.textAlign=e.content_alignment),t},vertical_style(e){let t={};return e.vertical&&(t.alignItems=e.vertical),t},style(){let e=[{group_title:"General",group_name:"general",selector:" .ecom-masonry-layout__item",params:[{alias:"spacing"}]},{group_alias:"image",options:{group_name:"Image",selector:" .ecom-image-default"},modify:{remove:{index:15,length:2},params:[{position:12,fields:[{type:"popup",label:"Hover Animation",name:"animation",options:{visible:t=>t.tab==="hover",type:"dropdown",values:"animation",size:"small"},css:{selector:"root .ecom-masonry-layout .ecom-image-default:hover",properties:{animation:""}}}]}]}},{group_alias:"text",options:{group_title:"Heading",group_name:"heading",selector:" .ecom-masonry-layout__heading"},modify:{params:[{position:5,fields:[{alias:"spacing"}]}]}},{group_alias:"text",options:{group_title:"Sub Heading",group_name:"subheading",selector:" .ecom-masonry-layout__subheading"},modify:{params:[{position:5,fields:[{alias:"spacing"}]}]}},{group_alias:"text",options:{group_title:"Content",group_name:"content",selector:" .ecom-masonry-layout__content"},modify:{params:[{position:5,fields:[{alias:"spacing"}]}]}},{group_alias:"button",options:{group_title:"Button",group_name:"button",selector:" .ecom-masonry-layout__button"},modify:{params:[{position:0,fields:[{alias:"align-items",options:{label:"Alignment",name:"button_alignment",css:{properties:{"align-self":""}}}},{alias:"align-items",options:{label:"Text Alignment",name:"text_alignment",css:{properties:{"justify-content":""}}}}]}]}},{group_alias:"icon",options:{group_title:"Icon",group_name:"icon",selector:" .ecom-elements__masonry-button-icon"},modify:{params:[{position:0,fields:{type:"choose",label:"Icon position",name:"icon_position",options:{type:"align-x",values:[-1,1]},css:{properties:{order:""}}}},{position:20,fields:{alias:"spacing"}}]}}];return this.data.settings.overlay_use&&e.push({group_alias:"background:overlay",options:{group_name:"overlay",group_title:"Overlay",selector:" .ecom-masonry__banner_hzoom"}}),e}},watch:{"data.settings.items":{deep:!0,immediate:!0,handler:function(){let e=this.$refs["ecom-masonry-layout"];e&&e.dispatchEvent(new Event("itemChange"))}}}},hh=["v-key"],fh={key:0,class:"ecom-masonry__banner_overlay ecom-overlay"},bh=["src","alt"],yh=["href","target"],vh=["src","alt"],xh=["innerHTML"],wh=["innerHTML"],kh=["innerHTML"],Ch=["href"],Th=["innerHTML"],Lh=["innerHTML"];function $h(e,t,o,n,s,i){var a,l,u,r,g;return c(),d("div",null,[((u=(l=(a=o.data)==null?void 0:a.settings)==null?void 0:l.items)==null?void 0:u.length)>0?(c(),d("div",{key:0,class:S(["ecom-masonry-layout ecom-row ecom-no-gutters",{hoverz_true:(g=(r=o.data)==null?void 0:r.settings)==null?void 0:g.image_hover_zoom}]),ref:"ecom-masonry-layout","data-ecom-packery-params":'{ "itemSelector": ".ecom-masonry-layout__item", "layoutMode": "packery", "percentPosition" : true}'},[(c(!0),d(D,null,Y(o.data.settings.items,(m,h)=>{var _,b,f,v,x,C,L,w,$,q,B,A,P,O,J,F,ee,te;return c(),d("div",{"v-key":h,class:S(["ecom-masonry-layout__item",i.banner_width(m)])},[p("div",{class:S(["ecom-masonry__banner_hzoom ecom-masonry__nt_promotion ecom-image-default",{"ecom-content-hidden":(_=o.data.settings)==null?void 0:_.hidden_content}])},[o.data.settings.overlay_use?(c(),d("div",fh)):y("",!0),!((f=(b=m==null?void 0:m.image)==null?void 0:b.image_link)!=null&&f.href)&&((x=(v=m==null?void 0:m.image)==null?void 0:v.image)==null?void 0:x.value)?(c(),d("img",{key:1,src:m==null?void 0:m.image.image.value,alt:(C=m.image.image)==null?void 0:C.name,class:"ecom-masonry-layout__image-picture"},null,8,bh)):((w=(L=m==null?void 0:m.image)==null?void 0:L.image_link)==null?void 0:w.href)&&((q=($=m==null?void 0:m.image)==null?void 0:$.image)==null?void 0:q.value)?(c(),d("a",{key:2,href:m.image.image_link.href,target:(B=m.image.image_link)==null?void 0:B.target,class:"ecom-masonry-layout__picture-link"},[p("img",{src:m.image.image.value,alt:(A=m.image.image)==null?void 0:A.name,class:"ecom-masonry-layout__picture ecom-masonry-layout__image-picture"},null,8,vh)],8,yh)):y("",!0),p("div",{class:"ecom-masonry__nt_promotion_html ecom-t__0 ecom-l__0 ecom-r__0 ecom-b__0 ecom-flex ecom-w__100",style:E(i.vertical_style(m))},[p("div",{class:"ecom-masonry-layout_wrap_html_block ecom-flex ecom-column",style:E(i.banner_style(m))},[(P=m==null?void 0:m.content)!=null&&P.heading?(c(),d("h3",{key:0,class:"ecom-masonry-layout__heading",innerHTML:e.lang(m.content.heading,"masonry-heading-"+h)},null,8,xh)):y("",!0),(O=m==null?void 0:m.content)!=null&&O.subheading?(c(),d("h3",{key:1,class:"ecom-masonry-layout__subheading",innerHTML:e.lang(m.content.subheading,"masonry-subheading-"+h)},null,8,wh)):y("",!0),(J=m==null?void 0:m.content)!=null&&J.content?(c(),d("div",{key:2,class:"ecom-masonry-layout__content",innerHTML:e.lang(m.content.content,"masonry-content-"+h)},null,8,kh)):y("",!0),(ee=(F=m==null?void 0:m.button)==null?void 0:F.link)!=null&&ee.href?(c(),d("a",j({key:3,class:"ecom-masonry-layout__button ecom__element--button pe_auto ecom-flex ecom-fl_center ecom-al_center",href:m.button.link.href},i.attrLink(m)),[p("span",{class:"ecom-masonry__button--text",innerHTML:e.lang(m.button.content,"masonry_button_title_"+h)},null,8,Th),(te=m.button)!=null&&te.icon?(c(),d("span",{key:0,class:"ecom-button-icon ecom-elements__masonry-button-icon ecom-flex",innerHTML:m.button.icon},null,8,Lh)):y("",!0)],16,Ch)):y("",!0)],4)],4)],2)],10,hh)}),256))],2)):y("",!0)])}const Sh=k(io,[["render",$h]]);io.__docgenInfo={exportName:"default",displayName:"Masonry",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Masonry.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts"]};const G={loadingComponent:po,errorComponent:mo,delay:0,timeout:6e4,suspensible:!0},Mh=V({...G,loader:()=>U(()=>import("./ImageHotSpots.22570a15.js"),["./ImageHotSpots.22570a15.js","./preview.fd4b835f.js","./chunk-2GDW2BFM.4967875d.js","./vue.esm-bundler.2eae420a.js","./index.e850844b.js","./iframe.b0e30ece.js","./preview.72d226c8.css"],import.meta.url)}),Hh=V({...G,loader:()=>U(()=>import("./Testimonials.add87a01.js"),["./Testimonials.add87a01.js","./preview.fd4b835f.js","./chunk-2GDW2BFM.4967875d.js","./vue.esm-bundler.2eae420a.js","./index.e850844b.js","./iframe.b0e30ece.js","./preview.72d226c8.css"],import.meta.url)}),Bh=V({...G,loader:()=>U(()=>import("./Social.bb8afe64.js"),["./Social.bb8afe64.js","./preview.fd4b835f.js","./chunk-2GDW2BFM.4967875d.js","./vue.esm-bundler.2eae420a.js","./index.e850844b.js","./iframe.b0e30ece.js","./preview.72d226c8.css"],import.meta.url)}),qh=V({...G,loader:()=>U(()=>import("./Image.1b2e4da1.js"),["./Image.1b2e4da1.js","./preview.fd4b835f.js","./chunk-2GDW2BFM.4967875d.js","./vue.esm-bundler.2eae420a.js","./index.e850844b.js","./iframe.b0e30ece.js","./preview.72d226c8.css"],import.meta.url)}),Eh=V({...G,loader:()=>U(()=>import("./VariantPicker.c2b0a80c.js"),["./VariantPicker.c2b0a80c.js","./preview.fd4b835f.js","./chunk-2GDW2BFM.4967875d.js","./vue.esm-bundler.2eae420a.js","./index.e850844b.js","./iframe.b0e30ece.js","./preview.72d226c8.css"],import.meta.url)}),Dh=V({...G,loader:()=>U(()=>import("./Property.12cd60d6.js"),["./Property.12cd60d6.js","./preview.fd4b835f.js","./chunk-2GDW2BFM.4967875d.js","./vue.esm-bundler.2eae420a.js","./index.e850844b.js","./iframe.b0e30ece.js","./preview.72d226c8.css"],import.meta.url)}),Ah=V({...G,loader:()=>U(()=>import("./Attribute.e64d1842.js"),["./Attribute.e64d1842.js","./preview.fd4b835f.js","./chunk-2GDW2BFM.4967875d.js","./vue.esm-bundler.2eae420a.js","./index.e850844b.js","./iframe.b0e30ece.js","./preview.72d226c8.css"],import.meta.url)}),zh=V({...G,loader:()=>U(()=>import("./Product.57a41192.js"),["./Product.57a41192.js","./preview.fd4b835f.js","./chunk-2GDW2BFM.4967875d.js","./vue.esm-bundler.2eae420a.js","./index.e850844b.js","./iframe.b0e30ece.js","./preview.72d226c8.css"],import.meta.url)}),jh=V({...G,loader:()=>U(()=>import("./Filter.00046415.js"),["./Filter.00046415.js","./preview.fd4b835f.js","./chunk-2GDW2BFM.4967875d.js","./vue.esm-bundler.2eae420a.js","./index.e850844b.js","./iframe.b0e30ece.js","./preview.72d226c8.css"],import.meta.url)}),Ih=V({...G,loader:()=>U(()=>import("./Contact.293532e0.js"),["./Contact.293532e0.js","./preview.fd4b835f.js","./chunk-2GDW2BFM.4967875d.js","./vue.esm-bundler.2eae420a.js","./index.e850844b.js","./iframe.b0e30ece.js","./preview.72d226c8.css"],import.meta.url)}),Ph=V({...G,loader:()=>U(()=>import("./Menu.38af4c5a.js"),["./Menu.38af4c5a.js","./preview.fd4b835f.js","./chunk-2GDW2BFM.4967875d.js","./vue.esm-bundler.2eae420a.js","./index.e850844b.js","./iframe.b0e30ece.js","./preview.72d226c8.css"],import.meta.url)}),Nh=V({...G,loader:()=>U(()=>import("./Collection.233b9780.js"),["./Collection.233b9780.js","./preview.fd4b835f.js","./chunk-2GDW2BFM.4967875d.js","./vue.esm-bundler.2eae420a.js","./index.e850844b.js","./iframe.b0e30ece.js","./preview.72d226c8.css"],import.meta.url)}),Vh=V({...G,loader:()=>U(()=>import("./Attribute.e1435e80.js"),["./Attribute.e1435e80.js","./preview.fd4b835f.js","./chunk-2GDW2BFM.4967875d.js","./vue.esm-bundler.2eae420a.js","./index.e850844b.js","./iframe.b0e30ece.js","./preview.72d226c8.css"],import.meta.url)}),Wh=V({...G,loader:()=>U(()=>import("./Product.a3982972.js"),["./Product.a3982972.js","./preview.fd4b835f.js","./chunk-2GDW2BFM.4967875d.js","./vue.esm-bundler.2eae420a.js","./index.e850844b.js","./iframe.b0e30ece.js","./preview.72d226c8.css"],import.meta.url)}),Oh=V({...G,loader:()=>U(()=>import("./EstimateShipping.afdf5732.js"),["./EstimateShipping.afdf5732.js","./preview.fd4b835f.js","./chunk-2GDW2BFM.4967875d.js","./vue.esm-bundler.2eae420a.js","./index.e850844b.js","./iframe.b0e30ece.js","./preview.72d226c8.css"],import.meta.url)}),Fh=V({...G,loader:()=>U(()=>import("./Content.0a1060bf.js"),["./Content.0a1060bf.js","./preview.fd4b835f.js","./chunk-2GDW2BFM.4967875d.js","./vue.esm-bundler.2eae420a.js","./index.e850844b.js","./iframe.b0e30ece.js","./preview.72d226c8.css"],import.meta.url)}),Uh=V({...V,loader:()=>U(()=>import("./Comment.f69083a2.js"),["./Comment.f69083a2.js","./preview.fd4b835f.js","./chunk-2GDW2BFM.4967875d.js","./vue.esm-bundler.2eae420a.js","./index.e850844b.js","./iframe.b0e30ece.js","./preview.72d226c8.css"],import.meta.url)}),Rh=V({...V,loader:()=>U(()=>import("./Articles.5f08fe8d.js"),["./Articles.5f08fe8d.js","./preview.fd4b835f.js","./chunk-2GDW2BFM.4967875d.js","./vue.esm-bundler.2eae420a.js","./index.e850844b.js","./iframe.b0e30ece.js","./preview.72d226c8.css"],import.meta.url)}),Yh=Object.freeze(Object.defineProperty({__proto__:null,ImageHotSpotsElement:Mh,TestimonialsElement:Hh,SocialElement:Bh,ProductImageElement:qh,ProductVariantPickerElement:Eh,ProductPropertyElement:Dh,ProductAttributeElement:Ah,CollectionProductElement:zh,CollectionFilterElement:jh,ShopifyContactFormElement:Ih,ShopifyMenuElement:Ph,ShopifyCollectionElement:Nh,CartAttributeElement:Vh,CartProductElement:Wh,CartEstimateShippingElement:Oh,ArticleContentElement:Fh,ArticleCommentElement:Uh,BlogArticlesElement:Rh,HeadlineElement:ve,HeadingElement:ve,TextElement:qo,AdvanceHeadingElement:zo,StoreLocatorElement:Uo,ProgressElement:si,TextMarqueeElement:gi,ImageElement:Si,AdvanceImageElement:Yi,ImageComparisonElement:mn,BreadcrumbsElement:gn,TableElement:xn,BannerElement:An,GalleryElement:Xn,CarouselElement:xe,SliderElement:xe,VideoElement:Ys,ButtonElement:Qs,IconElement:ra,TabsElement:_a,AccordionElement:wa,GmapElement:$a,FeaturedBoxElement:Na,IconlistElement:er,TimelineElement:Er,CounterElement:Fr,InstagramElement:rl,SpacerElement:dl,DividerElement:fl,CodeElement:xl,CountdownElement:Hl,LightboxElement:Ql,ProductTitleElement:nc,ProductDeliveryTimeElement:we,ProductPriceElement:Tc,ProductQuantityElement:jc,ProductAddToCartElement:Gc,ProductBuyNowElement:op,ProductBuyItNowElement:lp,DeliveryTimeElement:we,ProductProductSoldElement:_p,ProductSellingPlanElement:vp,ProductDescriptionElement:Rp,ProductCountdownElement:tm,ProductRatingElement:mm,ProductReviewElement:xm,ProductWishlistElement:Lm,ProductPaymentMethodElement:Em,ProductInventoryElement:Wm,ProductVisitorElement:Jm,ProductVariantAttributeElement:ad,ProductMetafieldElement:md,ProductPickupAvailabilityElement:hd,CollectionBannerElement:wd,CollectionTitleElement:$d,CollectionDescriptionElement:Nd,CollectionSortElement:Yd,CollectionTagElement:Xd,CollectionFilterValueElement:tu,ShopifyNewsletterElement:ru,ShopifyPageContentElement:bu,ShopifyGlobalBlockElement:wu,ShopifyProductBoxElement:Tu,ShopifyArticleBoxElement:Su,SearchElement:Eu,CartNoteElement:Pu,CartGiftWrapElement:Zu,CartInformationElement:tg,CartAgreeElement:pg,CartCouponElement:fg,CartCheckoutElement:$g,ArticleImageElement:qg,ArticleTagsElement:jg,ArticleTitleElement:Vg,ArticleAuthorElement:Kg,ArticleDateElement:n_,ArticleExcerptElement:f_,ArticleCommentCountElement:C_,ArticlePrevNextElement:H_,ArticleCommentFormElement:A_,BlogArticlesCountElement:N_,BlogCategoriesElement:U_,BlogTagsElement:Z_,BlogTitleElement:eh,MegamenuElement:_h,MasonryElement:Sh},Symbol.toStringTag,{value:"Module"})),Gh=function(){let e=ye.getters["page/extension_elements"],t=ye.getters["page/ecosystem_apps"],o={...Yh};return e&&e.elements&&e.path&&Object.keys(e.elements).forEach(s=>{let i=ne(s)+"Element";o[i]=se(e.elements[s].file.indexOf("https://")===0?e.elements[s].file:`${e.path}${e.elements[s].file}?${e.query}`,[])}),t&&t.forEach(n=>{const s=ne(n.slug)+"Element";o[s]=se(n.data_url,[])}),o},no={name:"Block",mixins:[ke],props:{data:{type:Object,default(){return{name:"empty"}}},deep:{type:Number,default:0},index:{type:Number,default:0},control:{type:Boolean,default:!0},gindex:{type:Number,default:0},section_id:{type:String,default:""}},components:Gh(),data(){return{is:"block",name:this.data.row?"inner row":this.data.group?this.data.group.element:"block",over:!1,dragging:!1,placeholder:"top",refreshKey:"",isMounted:!1,isDrag:!1,space:0,position:0,paddingCurrentVal:0,paddingPosition:""}},computed:{icons(){return{faClone:uo,faCopy:go,faPen:_o,faArrowsUpDownLeftRight:ho,faTrashCan:fo}},stack(){return this.$parent.$parent.blocks},block(){return this.data},ingroup(){return this.$parent.$parent.group!==void 0},editing(){return this.editingElement},editingData(){return this.editing&&this.editing.data?this.editing.data:{}},styleattr(){return{wrapper:{outline:this.isActive&&!this.isDragging&&!this.block.group?"1px solid rgb(var(--primary-color-light))":"",display:!this.isDragging||!(this.dropTo!==this&&this.dragCurrent===this)},settings:`display: ${this.over&&!this.isDragging?"inline-block":"none"}`}},currentDrag(){return this.dropTo!==this&&this.dragCurrent===this},isFirst(){return this.index==0},isLast(){return this.index==this.$parent.$parent.blocks.length-1},type(){return this.data.row?"row":this.data.group?"group":"block"},canDrop(){return this.$helpers.canDrop(this.dragCurrent,this)&&this.control},blockAttrs(){var t,o,n,s,i,a;const e={ref:"wrapper",class:{"ecom-animated":!this.exporting,"ecom-animation":(o=(t=this.data)==null?void 0:t.advanced)==null?void 0:o.animation_type,"ecom-block ecom-core core__block":!0,"ecom-block-active":this.isActive,"ecom-block-isDragPadding":this.isActive&&!this.isDragging&&!this.block.group,elmspace:!((a=(i=(s=(n=this.data)==null?void 0:n.advanced)==null?void 0:s.spacing)==null?void 0:i.margin)!=null&&a.top),...this.classes},"data-core-is":this.block.row?this.deep===2?"block":"row":this.block.group?"group":"block",style:this.block.row?"":this.styleattr.wrapper,...this.attributes};return this.scrollingAnimation&&(e["ecom-scrolling-animation"]=this.scrollingAnimation),e},placeholderTop(){return this.control&&this.placeholder!="bottom"&&this.dragCurrent&&!this.placeholderBottom&&(this.dropTo===this&&this.dragCurrent!==this&&this.dragCurrent.$parent.$parent!==this||!this.dropTo&&(this.dragCurrent===this||this.dragCurrent.$parent.$parent===this))},placeholderBottom(){return this.control&&this.placeholder=="bottom"&&this.dropTo===this&&this.dragCurrent!==this&&this.dragCurrent.$parent.$parent!==this},refreshId(){return this.block.group?this.block.group.refresh:this.block.refresh},screen(){return this.$store.getters["builder/screen"]},sections(){return this.$store.getters["page/sections"]},ecosystem_apps(){return this.$store.getters["page/ecosystem_apps"]},appsLength(){return this.ecosystem_apps.length}},updated(){var e,t,o,n,s,i;this.block.hasRequestLiquid!==!0&&Object.keys((o=(t=(e=this.$refs)==null?void 0:e.blockElement)==null?void 0:t.requestShopifyType)!=null?o:{}).length>0&&Object.keys((i=(s=(n=this.$refs)==null?void 0:n.blockElement)==null?void 0:s.liquids)!=null?i:{}).length>0&&(this.block.hasRequestLiquid=!0),this.data.editOnMounted&&this.$refs.blockElement&&(delete this.data.editOnMounted,this.openPresetLibrary())},mounted(){var e,t,o,n,s,i;this.data.editOnMounted&&this.$refs.blockElement&&(delete this.data.editOnMounted,this.openPresetLibrary()),Object.keys((o=(t=(e=this.$refs)==null?void 0:e.blockElement)==null?void 0:t.requestShopifyType)!=null?o:{}).length>0&&Object.keys((i=(s=(n=this.$refs)==null?void 0:n.blockElement)==null?void 0:s.liquids)!=null?i:{}).length>0&&(this.block.hasRequestLiquid=!0),this.block.group&&!this.block.id&&(this.block.id=this.$helpers.randid()),this.stacks[this.data.id]=this,this.isMounted=!0},watch:{refreshId(e){this.isMounted&&(this.refreshKey=e)},appsLength(e){this.ecosystem_apps.forEach(t=>{var n;const o=ne(t.slug)+"Element";(n=this.$options)!=null&&n.components[o]||(this.$options.components[o]=se(t.data_url))})}},methods:{processMenu(e){typeof this.ctx[e]=="function"?this.ctx[e](clipboard):typeof this[e]=="function"&&this[e](this.ctx)},startDragPadding(e,t){this.position=e.clientY,this.paddingPosition=t,this.idoc().onmouseup=this.onMouseUp,this.idoc().onmousemove=this.onMouseMove},onMouseMove(e){var u,r,g,m,h,_,b,f,v;this.$store.commit("builder/setIsDragPadding",this.data.id);const t=(u=this.$refs)==null?void 0:u.blockElement,o=(r=t==null?void 0:t.$el)==null?void 0:r.parentElement,n=Object.assign({},(h=(m=(g=this.$refs)==null?void 0:g.blockElement)==null?void 0:m.data)==null?void 0:h.advanced);if(!o)return!1;let s=this.paddingPosition=="bottom"?(b=(_=n==null?void 0:n.spacing)==null?void 0:_.padding)==null?void 0:b.bottom:(v=(f=n==null?void 0:n.spacing)==null?void 0:f.padding)==null?void 0:v.top,i=0,a="";if(s=s?parseInt(s.replace(/[^0-9.]/g,"")):0,this.idoc().body.style.cursor="ns-resize",i=e.clientY-this.position,Math.abs(i)>3){this.isDrag=!0,this.paddingCurrentVal=s;let x=i+s>=0?i+s:0;this.paddingPosition=="bottom"?o.style.setProperty("padding-bottom",x+"px","important"):o.style.setProperty("padding-top",Math.abs(x)+"px","important"),this.paddingCurrentVal=a=Math.abs(x)}this.space=a==0||a==""?0:a+"px"},onMouseUp(){var l,u,r,g,m,h;const e=this.currentScreen(),t=e.name=="desktop"?"":e.name,o=t?"spacing__"+t:"spacing",n=(l=this.$refs)==null?void 0:l.blockElement,s=(u=n==null?void 0:n.$el)==null?void 0:u.parentElement,i=Object.assign({},(m=(g=(r=this.$refs)==null?void 0:r.blockElement)==null?void 0:g.data)==null?void 0:m.advanced);if(!s)return!1;i.hasOwnProperty(o)?i[o].hasOwnProperty("padding")||(i[o].padding={}):i[o]={padding:{}};const a=this.space;this.space=0,this.paddingPosition=="bottom"?i[o].padding.bottom=a:i[o].padding.top=a,Object.assign((h=this.$refs)==null?void 0:h.blockElement.data.advanced,i),setTimeout(()=>{s.style.paddingBottom=null,s.style.paddingTop=null},1e3),this.paddingPosition="",this.paddingCurrentVal=0,this.isDrag=!1,this.idoc().body.style.cursor="default",this.idoc().onmouseup=null,this.idoc().onmousemove=null,this.$store.commit("builder/setIsDragPadding","")},currentScreen(){return this.$store.getters["builder/currentScreen"]},editOrDrag(e){var t,o;(t=this.$refs.blockElement)!=null&&t.$el&&((o=this.$refs.blockElement)==null||o.$el.dispatchEvent(new CustomEvent("setactive",{detail:!0})))},overBlock(){this.isFullScreen||(this.over=!0,clearTimeout(this.timmer))},outBlock(){this.isFullScreen||(this._group?this._group.over=!0:this._column&&(this._column.over=!0,this._row?this._row.over=!0:this._section&&(this._section.over=!0)),clearTimeout(this.timmer),this.timmer=setTimeout(()=>{this.over=!1},100))},placehover(e){this.canDrop&&(this.section_id&&this.$store.commit("builder/sectionDrag",this.section_id),this.$store.commit("builder/setDropTo",this),this.$store.commit("builder/setDropPos",e),this.placeholder=e)},dragBlock(e){!this.isFullScreen&&(this.type=="block"||this.deep==4&&this.type=="row")&&this.control&&this.startDrag(e)},activeBlock(){this.isFullScreen||this.type!="block"||(this.$store.commit("builder/setDragging",{timmer:new Date().getTime()}),this.$store.commit("builder/setActiveElement",this),this.editBlock())},editBlock(){var e,t,o,n;(((t=(e=this.$refs)==null?void 0:e.blockElement)==null?void 0:t.settings)||((n=(o=this.$refs)==null?void 0:o.blockElement)==null?void 0:n.style))&&this.$store.commit("builder/setEditingElement",this.$refs.blockElement)},edit(){this.editBlock()},openPresetLibrary(){var e,t,o,n;(((t=(e=this.$refs)==null?void 0:e.blockElement)==null?void 0:t.settings)||((n=(o=this.$refs)==null?void 0:o.blockElement)==null?void 0:n.style))&&this.$store.commit("builder/setEditingElement",this.$refs.blockElement)},deleteEl(){var e,t;if(this.section_id){const o=this.sections.find(n=>n.id==this.section_id);o&&this.$store.dispatch("history/addStack",{type:(t=(e=this.$options)==null?void 0:e.name)!=null?t:this==null?void 0:this.name,data:o,section_id:this.section_id,action:"Deleted"})}this.dropOut()},duplicate(){var o,n,s;let e=(s=(n=(o=this.$refs)==null?void 0:o.wrapper)==null?void 0:n.offsetHeight)!=null?s:0,t=this.cloneData();t.title&&(t.title=t.title.replace(/\(([\d]*)\)|$/,(...i)=>i[1]?"("+(parseInt(i[1])+1)+")":"(1)")),this.stack.splice(this.index+1,0,t),this.scroll(e)},paste(e){var s,i,a,l,u,r;if(!e)return;let t=this.$helpers.copy(e.data),o,n;switch(t!=null&&t.group&&(t.group.id=this.$helpers.randid(),t.group.settings.items.map(g=>{g.blocks.map(m=>{m.id=this.$helpers.randid()})})),e.is){case"section":o=this.parent("section"),o.stack.splice(o.index+1,0,t),this.scroll((a=(i=(s=o.$refs)==null?void 0:s.wrapper)==null?void 0:i.offsetHeight)!=null?a:0);break;case"column":n=this.parent("section"),n.stack.length>=10?this.notice("Can not insert more than 10 columns in a "+n.$parent.is,"error"):(n.stack.splice(n.index+1,0,t),n.$parent.refreshCols());break;case"block":t.id=this.$helpers.randid(),this.stack.splice(this.index+1,0,t),this.scroll(((r=(u=(l=this.$refs)==null?void 0:l.wrapper)==null?void 0:u.offsetHeight)!=null?r:0)/2);break}},insertCol(){this.columns.length>=10?this.notice("Can not insert more than 10 columns in a row","error"):(this.columns.push({width:Math.round(100/(this.columns.length+1)),blocks:[]}),this.refreshCols())},dropOut(){var o,n;this.data.id==((n=(o=this.editingElement)==null?void 0:o.data)==null?void 0:n.id)&&setTimeout(()=>{this.$store.dispatch("builder/setEditingElement",null)},50);let e=this.data.id,t=this.stack.findIndex(s=>s.id===e);return isNaN(t)&&(t=this.index),this.stack&&this.stack.splice(t,1)[0]},dropIn(e,t){var s;e._column===this._column&&e.index<t&&e.index>0&&t--;let o=this.data.id,n=this.stack.findIndex(i=>i.id===o);if(isNaN(n)&&(n=this.index),e.index<n&&e._column===this._column&&(n-=1),this.section_id){const i=this.section_id==e.section_id?"add":"move";let l={type:"block",data:this.sections.find(u=>u.id==this.section_id),section_id:this.section_id,action:i};i=="move"&&(l.section_from=e.section_id,l.section_from_data=this.sections.find(u=>u.id==e.section_id)),this.$store.dispatch("history/addStack",l)}(s=this.stack)==null||s.splice(n+t,0,e.dropOut())}}},Jh=p("div",{class:"drop__block--placeholder-body"},null,-1),Zh=[Jh],Kh={key:0},Xh=["title"],Qh=p("span",null,[p("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ecom-icon",viewBox:"0 0 512 512",fill:"curerntColor"},[p("path",{d:"M240 352V272H160C151.2 272 144 264.8 144 256C144 247.2 151.2 240 160 240H240V160C240 151.2 247.2 144 256 144C264.8 144 272 151.2 272 160V240H352C360.8 240 368 247.2 368 256C368 264.8 360.8 272 352 272H272V352C272 360.8 264.8 368 256 368C247.2 368 240 360.8 240 352zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z"})])],-1),ef=[Qh],tf={key:0,class:"core__block--settings"},of={class:"core__block--settings__left"},nf={class:"core__block--settings__title"},sf={class:"core__block--settings__action"},af=["innerHTML"],rf=p("div",{class:"drop__block--placeholder-body"},null,-1),lf=[rf];function cf(e,t,o,n,s,i){var u,r;const a=N("Row"),l=N("ecom-icon");return c(),d(D,null,[e.exporting?y("",!0):(c(),d("div",{key:0,class:S(["drop__block--placeholder",["drop__block_"+o.index,{"ecom-current-block-drag":i.placeholderTop,"ecom-drag-current":i.currentDrag}]]),onMouseenter:t[0]||(t[0]=(...g)=>i.overBlock&&i.overBlock(...g))},Zh,34)),p("div",j(i.blockAttrs,{onMouseenter:t[8]||(t[8]=(...g)=>i.overBlock&&i.overBlock(...g)),onMouseleave:t[9]||(t[9]=(...g)=>i.outBlock&&i.outBlock(...g)),onMousedown:t[10]||(t[10]=(...g)=>i.dragBlock&&i.dragBlock(...g)),onClick:t[11]||(t[11]=(...g)=>i.activeBlock&&i.activeBlock(...g)),onContextmenu:t[12]||(t[12]=(...g)=>e.rightClickMenu&&e.rightClickMenu(...g))}),[i.block.row?(c(),z(a,{key:0,section_id:o.section_id,ref:"blockElement",data:i.block.row,deep:o.deep+1,index:o.index},null,8,["section_id","data","deep","index"])):i.block.group?(c(),z(W(i.block.group.element+"Element"),{ref:"blockElement",data:i.block.group,key:s.refreshKey,deep:o.deep,index:o.index},null,8,["data","deep","index"])):(c(),d(D,{key:2},[(c(),z(W(i.block.name+"Element"),{ref:"blockElement",key:s.refreshKey,data:i.block,deep:o.deep},null,8,["data","deep"])),e.exporting?y("",!0):Z((c(),d("div",Kh,[p("div",{class:"core__block--settings",style:E(i.styleattr.settings),title:"Edit "+i.block.name,onMousedown:t[1]||(t[1]=(...g)=>i.editOrDrag&&i.editOrDrag(...g))},ef,44,Xh),e.exporting?y("",!0):Z((c(),d("div",tf,[p("div",of,[p("span",{class:"core__block--settings__move",onMousedown:t[2]||(t[2]=(...g)=>i.editOrDrag&&i.editOrDrag(...g))},[R(l,{icon:i.icons.faArrowsUpDownLeftRight},null,8,["icon"])],32),p("span",nf,I((r=(u=i.block)==null?void 0:u.title)!=null?r:i.block.name),1)]),p("div",sf,[p("span",null,[R(l,{icon:i.icons.faPen},null,8,["icon"])]),p("span",{onClick:t[3]||(t[3]=g=>i.duplicate())},[R(l,{icon:i.icons.faClone},null,8,["icon"])]),p("span",{onClick:t[4]||(t[4]=g=>i.deleteEl())},[R(l,{icon:i.icons.faTrashCan},null,8,["icon"])])])],512)),[[K,!e.isDragging]])],512)),[[K,e.isActive&&o.control]])],64)),i.canDrop?(c(),d(D,{key:3},[p("div",{class:S(["placeholder__top",{block__placeholder:!i.block.row&&!i.block.group}]),onMouseenter:t[5]||(t[5]=g=>i.placehover("top"))},null,34),p("div",{class:S(["placeholder__bottom",{block__placeholder:!i.block.row&&!i.block.group}]),onMouseenter:t[6]||(t[6]=g=>i.placehover("bottom"))},null,34)],64)):(c(),d(D,{key:4},[],64)),!i.block.row&&!e.exporting?(c(),d("div",{key:5,class:"core__block--padding-bottom core__block--padding bottom-0",onMousedown:t[7]||(t[7]=Te(g=>i.startDragPadding(g,"bottom"),["stop"]))},[s.paddingPosition=="bottom"&&s.isDrag?(c(),d("span",{key:0,class:"core__block--padding-value",innerHTML:s.paddingCurrentVal+"px"},null,8,af)):y("",!0),s.isDrag?(c(),d("span",{key:1,class:"core__block--padding-markup",style:E({height:s.paddingCurrentVal+"px"})},null,4)):y("",!0)],32)):y("",!0)],16),e.exporting?y("",!0):(c(),d("div",{key:1,class:S([{"ecom-current-block-drag":i.placeholderBottom,"ecom-drag-current":i.currentDrag},"drop__block--placeholder"]),onMouseenter:t[13]||(t[13]=(...g)=>i.overBlock&&i.overBlock(...g))},lf,34))],64)}const hf=k(no,[["render",cf]]);no.__docgenInfo={exportName:"default",displayName:"Block",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:`{
    name: 'empty'
}`}},{name:"deep",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"index",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"control",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"gindex",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"section_id",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Layout/Block.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/core.ts"]};export{hf as default};
//# sourceMappingURL=Block.d2f4c0f5.js.map
