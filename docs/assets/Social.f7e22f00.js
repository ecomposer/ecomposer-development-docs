import{_ as d,E as h,J as g,L as v}from"./preview.38fa24a1.js";import{o as s,a as c,F as b,t as C,u as a,P as _,x as k,y as p,z as f}from"./vue.esm-bundler.2eae420a.js";import"./chunk-2GDW2BFM.4967875d.js";import"./index.e850844b.js";import"./iframe.e40f5881.js";import"../sb-preview/runtime.js";const m={name:"Social",docs:"https://help.ecomposer.io/docs/elements/basic-elements/social/",mixins:[h,g,v],props:{data:{type:Object,default(){return{}}}},data(){return{}},computed:{javascript(){return function(){var e=this.$el;if(e&&this.isLive){var t=e.querySelectorAll(".element-social-link:not(.element-social-link__custom)");t.length&&t.forEach(function(n){var r=n.getAttribute("href")||"#",i=r.replace("{current-link}",location.href);n.setAttribute("href",i)})}}},settings(){return[{params:[{name:"group_social",type:"group",options:{add_text:"Add new item",max:18},params:[{name:"social_network",label:"Social",type:"popup",options:{type:"dropdown",values:{facebook:"Facebook",twitter:"Twitter",linkedIn:"LinkedIn",pinterest:"Pinterest",reddit:"Reddit",vk:"VK",ok:"OK",tumblr:"Tumblr",digg:"Digg",skype:"Skype",stumbleUpon:"StumbleUpon",mix:"Mix",telegram:"Telegram",pocket:"Pocket",xing:"Xing",whatsApp:"WhatsApp",email:"Email",custom:"Custom"}},css:{isCss:!1}},{type:"picker",label:"Icon",name:"icon_custom",options:{type:"icon",layout:"grid",output:"value",multiple:!1,visible:{keep_data:!0,condition:e=>e.social_network=="custom"}}},{name:"link_custom",label:"Link sharing",type:"text",options:{visible:{keep_data:!0,condition:e=>e.social_network=="custom"}}},{name:"bg_custom",label:"Background color",type:"color",options:{oneline:!0,global:{type:"colors"},visible:{keep_data:!0,condition:e=>e.social_network=="custom"}}},{name:"view",label:"View",type:"popup",options:{type:"dropdown",values:{icon_label:"Icon & Label",icon:"Icon",label:"Label"}},css:{isCss:!1}},{name:"icon_position",label:"Icon position",type:"popup",options:{type:"dropdown",values:{left:"Left",right:"Right"},visible:{keep_data:!0,condition:e=>e.view=="icon_label"}}},{name:"label",label:"Custom Label",type:"text",options:{visible:{keep_data:!0,condition:e=>e.view&&e.view!=="icon"}}}]},{name:"grid_columns",label:"Items per row",type:"number",options:{min:1,max:6,step:1,responsive:!0},css:{selector:" .ecom-element.element__social",properties:{display:"if(value){return 'grid';} else return 'flex'","grid-template-columns":"repeat(%value%, 1fr)"}}},{name:"selected_link",label:"Target URL",type:"popup",options:{type:"dropdown",values:{current_page:"Current Page",custom:"Custom"}},css:{isCss:!1}},{name:"custom_link",label:"Custom Link",type:"text",options:{visible:{keep_data:!0,condition:e=>e.selected_link=="custom"}}}]}]},social(){return this.data.settings},css(){return`
                .element__social.ecom-element{
                    display:flex;
                    flex-wrap:wrap;
                }
                .ecom__element-social{
                    display:flex;
                    width:auto;
                    border-radius:4px;
                    border-width:0px;
                    border-style:solid;
                }
                .ecom__element-social .element-social-link{
                    display:flex;
                    align-items:center;
                    text-decoration: none;
                    width:100%;
                    justify-content:center;
                }
                .icon-border .element-social-link{
                    justify-content:flex-start;
                }
                .element-social-link.left{
                    flex-direction:row;
                }
                .element-social-link.right{
                    flex-direction:row-reverse;
                }
                .element-social-link span{
                    display:inline-flex;
                }
                .social-icon{
                    display:inline-flex;
                    color:white;
                    padding:10px;
                    border:0;
                    border-style:solid;
                    border-color:white;
                    height:100%;
                }
                .social-icon svg{
                    width:24px;
                    height:auto;
                    fill: currentColor;
                }
                .element-social-label{
                    flex:1;
                    justify-content:center;
                    text-align:center;
                    padding:7px 10px;
                    color:white;
                }
                .ecom__element-social a {

                }
                .ecom__element-social.facebook{
                    border-color:#3b5998;
                    background-color:#3b5998;
                }
                .ecom__element-social.twitter{
                    border-color:#1da1f2;
                    background-color:#1da1f2;
                }

                .ecom__element-social.linkedIn{
                    border-color:#0077b5;
                    background-color:#0077b5;
                }
                .ecom__element-social.pinterest{
                    border-color:#bd081c;
                    background-color:#bd081c;
                }
                .ecom__element-social.reddit{
                    border-color:#ff4500;
                    background-color:#ff4500;
                }
                .ecom__element-social.vk{
                    border-color:#45668e;
                    background-color:#45668e;
                }
                .ecom__element-social.ok{
                    border-color:#f4731c;
                    background-color:#f4731c;
                }
                .ecom__element-social.tumblr{
                    border-color:#476475;
                    background-color:#476475;
                }
                .ecom__element-social.digg{
                    border-color:#005be2;
                    background-color:#005be2
                }
                .ecom__element-social.skype{
                    border-color:#00aff0;
                    background-color:#00aff0;
                }
                .ecom__element-social.stumbleUpon{
                    border-color:#eb4924;
                    background-color:#eb4924;
                }
                .ecom__element-social.mix{
                    border-color:#f3782b;
                    background-color:#f3782b;
                }
                .ecom__element-social.telegram{
                    border-color:#2ca5e0;
                    background-color:#2ca5e0
                }
                .ecom__element-social.pocket{
                    border-color:#ef3f56;
                    background-color:#ef3f56
                }
                .ecom__element-social.xing{
                    border-color:#026466;
                    background-color:#026466
                }
                .ecom__element-social.whatsApp{
                    border-color:#25d366;
                    background-color:#25d366
                }
                .ecom__element-social.email{
                    border-color:#ea4335;
                    background-color:#ea4335
                }
                .ecom__element-social.custom{
                    border-color:rgba(5, 150, 105);
                    background-color:rgba(5, 150, 105)
                }

            `},customLink(){return this.social.selected_link=="custom"?this.social.custom_link:location.href},default(){return{settings:{group_social:[{social_network:"facebook"},{social_network:"twitter"},{social_network:"linkedIn"}],gridColumnGap:"10px"}}}},methods:{hasLabel(){var e;return(e=this.data.settings.group_social)==null?void 0:e.some(t=>t.view&&t.view!=="icon")},hasIcon(){var e;return(e=this.data.settings.group_social)==null?void 0:e.some(t=>t.view!=="label")},style(){let e=[{group_alias:"box",options:{group_name:"general",group_title:"General",selector:" .ecom__element-social"},modify:{params:[{position:0,fields:[{alias:"align-items",options:{label:"Content alignment",name:"content_alignment",css:{selector:"root .ecom-element.element__social",properties:{"justify-content":""}}}},{name:"gridColumnGap",label:"Spacing between icon",type:"number",options:{responsive:!0,units:{px:{min:1,max:100,step:1}}},css:{properties:{gap:""},selector:"root .ecom-element.element__social"}}]},{position:20,fields:{alias:"spacing"}}]}}];return this.hasLabel()&&e.push({group_alias:"text",options:{group_name:"label",group_title:"Label",selector:" .element__social .element-social-label"},modify:{params:[{position:1,fields:{alias:"justify-content",options:{label:"Alignment"}}},{position:10,fields:{alias:"spacing"}}],remove:{index:0,length:1}}}),this.hasIcon()&&e.push({group_alias:"icon:hover",options:{group_name:"icon",group_title:"Icon",selector:" .element__social .social-icon"}}),e},socialNetwork(e){switch(e.social_network){case"facebook":return{link:"https://www.facebook.com/sharer/sharer.php?u=",icon:`<svg version="1.1" id="lni_lni-facebook-filled" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
                            <path d="M47.4,25.8L47.4,25.8h-5.6h-2v-2v-6.2v-2h2H46c1.1,0,2-0.8,2-2V3c0-1.1-0.8-2-2-2h-7.3c-7.9,0-13.4,5.6-13.4,13.9v8.7v2h-2
                                h-6.8c-1.4,0-2.7,1.1-2.7,2.7v7.2c0,1.4,1.1,2.7,2.7,2.7h6.6h2v2v20.1c0,1.4,1.1,2.7,2.7,2.7h9.4c0.6,0,1.1-0.3,1.5-0.7
                                s0.7-1.1,0.7-1.7l0,0l0,0V40.3v-2h2.1H46c1.3,0,2.3-0.8,2.5-2v-0.1v-0.1l1.4-6.9c0.1-0.7,0-1.5-0.6-2.3
                                C49.1,26.4,48.2,25.9,47.4,25.8z"></path>
                            </svg>`};case"twitter":return{link:"https://twitter.com/intent/tweet?url=",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>'};case"linkedIn":return{link:"https://www.linkedin.com/shareArticle?mini=true&url=",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>'};case"pinterest":return{link:"https://pinterest.com/pin/create/button/?url=",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 16.09375 4 C 11.01675 4 6 7.3833281 6 12.861328 C 6 16.344328 7.9584844 18.324219 9.1464844 18.324219 C 9.6364844 18.324219 9.9199219 16.958266 9.9199219 16.572266 C 9.9199219 16.112266 8.7460938 15.131797 8.7460938 13.216797 C 8.7460938 9.2387969 11.774359 6.4199219 15.693359 6.4199219 C 19.063359 6.4199219 21.556641 8.3335625 21.556641 11.851562 C 21.556641 14.478563 20.501891 19.40625 17.087891 19.40625 C 15.855891 19.40625 14.802734 18.516234 14.802734 17.240234 C 14.802734 15.370234 16 13.558906 16 11.628906 C 16 8.3529063 11.462891 8.94725 11.462891 12.90625 C 11.462891 13.73725 11.5665 14.657063 11.9375 15.414062 C 11.2555 18.353063 10 23.037406 10 26.066406 C 10 27.001406 10.133656 27.921422 10.222656 28.857422 C 10.390656 29.045422 10.307453 29.025641 10.564453 28.931641 C 13.058453 25.517641 12.827078 24.544172 13.955078 20.076172 C 14.564078 21.234172 16.137766 21.857422 17.384766 21.857422 C 22.639766 21.857422 25 16.736141 25 12.119141 C 25 7.2061406 20.75475 4 16.09375 4 z"></path></svg>'};case"reddit":return{link:"https://reddit.com/submit?url=",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"></path></svg>'};case"vk":return{link:"http://vk.com/share.php?url=",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!-- Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"></path></svg>'};case"ok":return{link:"https://connect.ok.ru/offer?url=",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M184.2 177.1c0-22.1 17.9-40 39.8-40s39.8 17.9 39.8 40c0 22-17.9 39.8-39.8 39.8s-39.8-17.9-39.8-39.8zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-305.1 97.1c0 44.6 36.4 80.9 81.1 80.9s81.1-36.2 81.1-80.9c0-44.8-36.4-81.1-81.1-81.1s-81.1 36.2-81.1 81.1zm174.5 90.7c-4.6-9.1-17.3-16.8-34.1-3.6 0 0-22.7 18-59.3 18s-59.3-18-59.3-18c-16.8-13.2-29.5-5.5-34.1 3.6-7.9 16.1 1.1 23.7 21.4 37 17.3 11.1 41.2 15.2 56.6 16.8l-12.9 12.9c-18.2 18-35.5 35.5-47.7 47.7-17.6 17.6 10.7 45.8 28.4 28.6l47.7-47.9c18.2 18.2 35.7 35.7 47.7 47.9 17.6 17.2 46-10.7 28.6-28.6l-47.7-47.7-13-12.9c15.5-1.6 39.1-5.9 56.2-16.8 20.4-13.3 29.3-21 21.5-37z"></path></svg>'};case"tumblr":return{link:"https://www.tumblr.com/share/link?url=",icon:`<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50.1 59.1C48.4 60.8 44.1 63 38.3 63C23.7 63 20.4 52.3 20.4 46V28.5H14.6C13.9 28.5 13.3 27.9 13.3 27.2V19C13.3 18.2 13.9 17.3 14.7 17C22.4 14.4 24.7 7.9 25 3C25.1 1.6 25.7 1 27 1H35.6C36.3 1 36.9001 1.6 36.9001 2.3V16.2H47C47.7 16.2 48.3 16.6 48.3 17.3V27.1C48.3 27.8 47.7 28.4 47 28.4H36.8V44.4C36.8 48.6 39.8 50.9 45 48.8C45.6 48.7 46.1 48.4 46.5 48.5C46.9 48.6 47.2 48.9 47.3 49.5L50 57.2C50.3 57.8 50.6 58.6 50.1 59.1Z"></path>
                            </svg>`};case"digg":return{link:"http://digg.com/submit?phase=2&amp;url=",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M81.7 172.3H0v174.4h132.7V96h-51v76.3zm0 133.4H50.9v-92.3h30.8v92.3zm297.2-133.4v174.4h81.8v28.5h-81.8V416H512V172.3H378.9zm81.8 133.4h-30.8v-92.3h30.8v92.3zm-235.6 41h82.1v28.5h-82.1V416h133.3V172.3H225.1v174.4zm51.2-133.3h30.8v92.3h-30.8v-92.3zM153.3 96h51.3v51h-51.3V96zm0 76.3h51.3v174.4h-51.3V172.3z"></path></svg>'};case"skype":return{link:"https://web.skype.com/share?url=",icon:`<svg version="1.1" id="lni_lni-skype" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
                            <path d="M3.1,32.3c0.1-1.4,0.1-2.7,0.4-3.9c0.1-0.6,0-1-0.3-1.6c-2.3-3.9-2.7-8.2-1.7-12.5c1.1-4.9,3.9-8.7,8.5-11
                                c5.6-3,11.3-3,16.9,0.1c0.4,0.1,0.8,0.3,1.4,0.1c7.2-0.8,13.8,0.6,19.9,4.7c6.3,4.2,10.3,10.1,12,17.6c0.8,3.2,0.8,6.6,0.4,9.9
                                c-0.1,0.4-0.1,0.8,0.1,1.3c2.3,3.9,3,8.2,1.7,12.7c-1.3,4.9-4.1,8.7-8.6,11.1c-5.6,3-11.4,3-16.9-0.1c-0.4-0.1-0.8-0.3-1.3-0.1
                                c-4.5,0.6-8.9,0.1-13.2-1.4c-5.6-1.8-10.3-5.4-13.8-10.1C5.9,45.2,4,41.2,3.5,36.7C3.2,35.1,3.2,33.7,3.1,32.3z M32.1,50.7
                                c1.7-0.1,3.2-0.4,4.9-0.6c2.4-0.4,4.5-1.4,6.3-2.7c3.1-2.5,4.4-5.8,3.9-9.7c-0.3-2.7-1.5-4.8-3.8-6.3c-1.1-0.8-2.5-1.4-3.8-1.8
                                c-3-1-6.1-1.7-9.2-2.5c-1.5-0.3-3-0.8-4.4-1.7c-1.6-1-2-2.7-1.1-4.1c0.6-1,1.6-1.6,2.5-2c1.7-0.7,3.4-0.7,5.1-0.6
                                c2.1,0.1,3.8,1.1,4.8,3c0.4,0.8,0.8,1.6,1.4,2.3c0.4,0.6,0.8,1.1,1.5,1.4c1.8,0.8,4.2-0.1,4.8-2c0.6-1.5,0.1-3-0.7-4.2
                                c-1.4-2.3-3.4-3.7-5.8-4.5c-2.3-0.8-4.5-1.1-7-1.1c-3.2,0-6.3,0.4-9.4,1.7c-3.2,1.6-5.2,3.9-5.6,7.6c-0.3,3.4,1.1,6.1,3.8,7.9
                                c1.7,1.3,3.7,2,5.8,2.5c2.1,0.6,4.2,1.1,6.5,1.5c1.4,0.4,3,0.8,4.2,1.5c2.5,1.5,2.7,4.8,0.4,6.6c-1.1,1-2.5,1.5-4.1,1.7
                                c-1.7,0.3-3.5,0.3-5.4-0.1c-2-0.6-3.2-2-4.2-3.7c-0.4-1.1-1-2-1.7-3c-0.8-1.3-2.1-1.5-3.5-1.3c-1.4,0.3-2.4,1.1-2.7,2.5
                                c-0.1,1.1,0,2.3,0.4,3.2c1.1,3,3.2,4.9,5.9,6.3C25.6,50.5,28.8,50.7,32.1,50.7z"></path>
                            </svg>`};case"stumbleUpon":return{link:"https://www.stumbleupon.com/submit?url=",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M502.9 266v69.7c0 62.1-50.3 112.4-112.4 112.4-61.8 0-112.4-49.8-112.4-111.3v-70.2l34.3 16 51.1-15.2V338c0 14.7 12 26.5 26.7 26.5S417 352.7 417 338v-72h85.9zm-224.7-58.2l34.3 16 51.1-15.2V173c0-60.5-51.1-109-112.1-109-60.8 0-112.1 48.2-112.1 108.2v162.4c0 14.9-12 26.7-26.7 26.7S86 349.5 86 334.6V266H0v69.7C0 397.7 50.3 448 112.4 448c61.6 0 112.4-49.5 112.4-110.8V176.9c0-14.7 12-26.7 26.7-26.7s26.7 12 26.7 26.7v30.9z"></path></svg>'};case"mix":return{link:"https://mix.com/add?url=",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 5 5 L 5 25 C 5 26.654 6.346 28 8 28 C 9.654 28 11 26.654 11 25 L 11 13 C 11 12.448 11.448 12 12 12 C 12.552 12 13 12.448 13 13 L 13 21 C 13 22.654 14.346 24 16 24 C 17.654 24 19 22.654 19 21 L 19 15 C 19 14.448 19.448 14 20 14 C 20.552 14 21 14.448 21 15 L 21 17 C 21 18.654 22.346 20 24 20 C 25.654 20 27 18.654 27 17 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 17 C 25 17.552 24.552 18 24 18 C 23.448 18 23 17.552 23 17 L 23 15 C 23 13.346 21.654 12 20 12 C 18.346 12 17 13.346 17 15 L 17 21 C 17 21.552 16.552 22 16 22 C 15.448 22 15 21.552 15 21 L 15 13 C 15 11.346 13.654 10 12 10 C 10.346 10 9 11.346 9 13 L 9 25 C 9 25.552 8.552 26 8 26 C 7.448 26 7 25.552 7 25 L 7 7 z"></path></svg>'};case"telegram":return{link:"https://t.me/share/url?url=",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>'};case"pocket":return{link:"https://getpocket.com/save?url=",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M407.6 64h-367C18.5 64 0 82.5 0 104.6v135.2C0 364.5 99.7 464 224.2 464c124 0 223.8-99.5 223.8-224.2V104.6c0-22.4-17.7-40.6-40.4-40.6zm-162 268.5c-12.4 11.8-31.4 11.1-42.4 0C89.5 223.6 88.3 227.4 88.3 209.3c0-16.9 13.8-30.7 30.7-30.7 17 0 16.1 3.8 105.2 89.3 90.6-86.9 88.6-89.3 105.5-89.3 16.9 0 30.7 13.8 30.7 30.7 0 17.8-2.9 15.7-114.8 123.2z"/></svg>'};case"xing":return{link:"https://www.xing.com/spi/shares/new?url=",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 21.40625 5 C 20.980469 5 20.527344 5.167969 20.25 5.40625 C 19.972656 5.644531 19.84375 5.894531 19.75 6.0625 C 19.75 6.0625 17.339844 10.34375 15.4375 13.71875 C 15.414063 13.609375 15.371094 13.503906 15.3125 13.40625 C 15.300781 13.386719 13.34375 10 13.34375 10 C 13.246094 9.824219 13.09375 9.570313 12.8125 9.34375 C 12.53125 9.117188 12.125 8.9375 11.6875 8.9375 L 8.78125 8.9375 C 8.371094 8.9375 7.867188 9.109375 7.5625 9.59375 C 7.550781 9.59375 7.542969 9.59375 7.53125 9.59375 C 7.238281 10.078125 7.339844 10.660156 7.53125 11.03125 C 7.542969 11.042969 7.550781 11.050781 7.5625 11.0625 L 9.21875 13.96875 L 6.4375 18.875 C 6.425781 18.886719 6.417969 18.894531 6.40625 18.90625 C 6.191406 19.324219 6.160156 19.898438 6.4375 20.34375 C 6.683594 20.738281 7.207031 21 7.6875 21 L 10.5625 21 C 11.003906 21 11.445313 20.828125 11.71875 20.59375 C 11.992188 20.359375 12.125 20.109375 12.21875 19.9375 C 12.21875 19.9375 12.792969 18.910156 13.21875 18.15625 C 13.242188 18.234375 13.273438 18.304688 13.3125 18.375 C 13.324219 18.394531 17.4375 25.9375 17.4375 25.9375 C 17.539063 26.117188 17.691406 26.363281 17.96875 26.59375 C 18.246094 26.824219 18.683594 27 19.125 27 L 22 27 C 22.425781 27 22.945313 26.78125 23.21875 26.34375 C 23.511719 25.878906 23.480469 25.300781 23.28125 24.90625 C 23.269531 24.894531 23.261719 24.886719 23.25 24.875 L 19.4375 17.9375 L 25.5625 7.125 C 25.574219 7.105469 25.585938 7.082031 25.59375 7.0625 C 25.792969 6.664063 25.855469 6.125 25.5625 5.65625 C 25.28125 5.199219 24.734375 5 24.3125 5 Z M 21.53125 7 L 23.3125 7 L 17.4375 17.4375 C 17.324219 17.640625 17.339844 18.121094 17.46875 18.40625 L 17.4375 18.40625 L 17.46875 18.46875 L 17.46875 18.5 L 21.03125 25 L 19.21875 25 C 19.207031 24.984375 19.203125 25 19.1875 24.96875 C 19.1875 24.96875 15.828125 18.773438 15.375 17.9375 C 16.058594 16.726563 21.5 7.03125 21.5 7.03125 C 21.523438 6.988281 21.519531 7.019531 21.53125 7 Z M 9.78125 10.9375 L 11.5625 10.9375 C 11.570313 10.945313 11.566406 10.921875 11.59375 10.96875 C 11.605469 10.980469 11.613281 10.988281 11.625 11 C 11.625 11 12.867188 13.160156 13.3125 13.9375 C 12.800781 14.839844 10.46875 18.96875 10.46875 18.96875 C 10.449219 19.003906 10.449219 18.980469 10.4375 19 L 8.65625 19 L 11.25 14.46875 C 11.261719 14.429688 11.273438 14.386719 11.28125 14.34375 C 11.304688 14.292969 11.375 14.171875 11.375 13.96875 C 11.375 13.765625 11.304688 13.613281 11.28125 13.5625 C 11.261719 13.519531 11.242188 13.476563 11.21875 13.4375 Z"></path></svg>'};case"whatsApp":return{link:"https://api.whatsapp.com/send/?phone&text=",icon:`<svg version="1.1" id="lni_lni-whatsapp" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
                            <g id="WA_Logo">
                                <g>
                                    <path d="M54,9.9c-5.8-5.8-13.7-9-21.8-9C15.2,0.9,1.3,14.7,1.3,31.7c0,5.5,1.4,10.7,4.1,15.5L1,63.1l16.5-4.2
                                        c4.5,2.4,9.6,3.8,14.8,3.8l0,0l0,0C49.2,62.6,63,48.8,63,31.7C63,23.5,59.8,15.8,54,9.9z M32.1,57.4L32.1,57.4
                                        c-4.5,0-9.2-1.3-13.1-3.7l-1-0.6l-9.7,2.5l2.7-9.4l-0.6-1c-2.5-4.1-3.9-8.9-3.9-13.7c0-14.1,11.4-25.5,25.6-25.5
                                        c6.8,0,13.2,2.7,18,7.5s7.5,11.3,7.5,18.2C57.8,46,46.2,57.4,32.1,57.4z M46.2,38.2c-0.8-0.4-4.5-2.3-5.4-2.4
                                        c-0.7-0.3-1.3-0.4-1.7,0.4c-0.4,0.8-2,2.4-2.4,3c-0.4,0.4-0.8,0.6-1.7,0.1c-0.8-0.4-3.2-1.1-6.2-3.9c-2.3-2-3.9-4.5-4.2-5.4
                                        c-0.4-0.8-0.1-1.1,0.4-1.6c0.4-0.4,0.8-0.8,1.1-1.4c0.4-0.4,0.4-0.8,0.8-1.3c0.4-0.4,0.1-1-0.1-1.4c-0.3-0.4-1.7-4.2-2.4-5.8
                                        c-0.6-1.6-1.3-1.3-1.7-1.3c-0.4,0-1,0-1.4,0s-1.4,0.1-2,1c-0.7,0.8-2.7,2.7-2.7,6.5s2.7,7.3,3.2,8c0.4,0.4,5.5,8.3,13.1,11.7
                                        c1.8,0.8,3.2,1.3,4.4,1.7c1.8,0.6,3.5,0.4,4.8,0.3c1.5-0.1,4.5-1.8,5.2-3.7c0.6-1.7,0.6-3.4,0.4-3.7
                                        C47.5,38.8,46.9,38.5,46.2,38.2z"></path>
                                </g>
                            </g>
                            </svg>`};case"email":return{link:"mailto:?&subject=&cc=&bcc=&body=",icon:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <g>
                                <path d="M485.743,85.333H26.257C11.815,85.333,0,97.148,0,111.589V400.41c0,14.44,11.815,26.257,26.257,26.257h459.487    c14.44,0,26.257-11.815,26.257-26.257V111.589C512,97.148,500.185,85.333,485.743,85.333z M475.89,105.024L271.104,258.626    c-3.682,2.802-9.334,4.555-15.105,4.529c-5.77,0.026-11.421-1.727-15.104-4.529L36.109,105.024H475.89z M366.5,268.761    l111.59,137.847c0.112,0.138,0.249,0.243,0.368,0.368H33.542c0.118-0.131,0.256-0.23,0.368-0.368L145.5,268.761    c3.419-4.227,2.771-10.424-1.464-13.851c-4.227-3.419-10.424-2.771-13.844,1.457l-110.5,136.501V117.332l209.394,157.046    c7.871,5.862,17.447,8.442,26.912,8.468c9.452-0.02,19.036-2.6,26.912-8.468l209.394-157.046v275.534L381.807,256.367    c-3.42-4.227-9.623-4.877-13.844-1.457C363.729,258.329,363.079,264.534,366.5,268.761z"/>
                            </g>

                        </svg>`};default:return{link:"#",icon:""}}}}},x={class:"ecom__element ecom-element element__social"},L=["href","alt"],y={key:0,class:"social-icon"},M=["innerHTML"],z=["innerHTML"],I=["textContent"];function F(e,t,n,r,i,l){return s(),c("div",x,[(s(!0),c(b,null,C(l.social.group_social,(o,w)=>(s(),c("div",{key:w,class:a(["ecom__element-social",o.social_network+(o.view=="icon_label"?" icon-border":"")]),style:_(o.social_network==="custom"?`background-color: ${o==null?void 0:o.bg_custom};`:"")},[k("a",{href:o.social_network!=="custom"?l.socialNetwork(o).link+"{current-link}":o.link_custom,alt:o.social_network||"social share",class:a(["element-social-link",[o.icon_position,{"element-social-link__custom":o.social_network==="custom"}]]),target:"_blank"},[o.view!=="label"?(s(),c("div",y,[o.social_network=="custom"?(s(),c("span",{key:0,innerHTML:o.icon_custom},null,8,M)):(s(),c("span",{key:1,innerHTML:l.socialNetwork(o).icon},null,8,z))])):p("",!0),o.view=="label"||o.view=="icon_label"?(s(),c("span",{key:1,class:"element-social-label",textContent:f(o.label?o.label:o.social_network.replace(/(^\w{1})|(\s{1}\w{1})/g,u=>u.toUpperCase()))},null,8,I)):p("",!0)],10,L)],6))),128))])}const O=d(m,[["render",F]]);m.__docgenInfo={exportName:"default",displayName:"Social",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Base/Social.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{O as default};
//# sourceMappingURL=Social.f7e22f00.js.map
