import{_ as I,L as V,E as R,J as Y}from"./preview.95a7df14.js";import{o as H,a as W,y as a,x as E,I as S,F as Z,u as j,B as A}from"./vue.esm-bundler.b9dec9d9.js";import"./chunk-KSYMO6G6.f719e32d.js";import"./index.e850844b.js";import"./iframe.048ad53f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.f037b798.js";const q={name:"WheelSpin",presets:!1,docs:"https://help.ecomposer.io/docs/elements/shopify-elements/wheel-spin/",mixins:[V,R,Y],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["enable_fireworks","spin_duration","heading_win","heading_lose","action"],spinResult:null,currentRotation:0,iconValues:[{label:"Marker",handle:"marker",value:"<svg width='63' height='93' viewBox='0 0 63 93' stroke='none' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M31.5 0C14.1312 0 0 13.907 0 31.0001C0 36.1314 1.30362 41.2192 3.78184 45.7318L29.7774 92.001C30.1235 92.6178 30.7829 93 31.5 93C32.2171 93 32.8765 92.6178 33.2226 92.001L59.2278 45.7166C61.6964 41.2192 63 36.1312 63 30.9999C63 13.907 48.8688 0 31.5 0ZM31.5 46.5C22.8156 46.5 15.7501 39.5466 15.7501 31.0001C15.7501 22.4535 22.8156 15.5001 31.5 15.5001C40.1844 15.5001 47.2499 22.4535 47.2499 31.0001C47.2499 39.5466 40.1844 46.5 31.5 46.5Z' fill='currentColor'/><path d='M48.1113 31.0605C48.1113 40.0891 40.6742 47.4082 31.5 47.4082C22.3258 47.4082 14.8887 40.0891 14.8887 31.0605C14.8887 22.032 22.3258 14.7129 31.5 14.7129C40.6742 14.7129 48.1113 22.032 48.1113 31.0605Z' fill='white'/><circle cx='31.5' cy='30.5' r='6.5' fill='currentColor'/></svg>"},{label:"Triangle rounded",handle:"triangle-rounded",value:"<svg viewBox='0 0 100 100'><path d='M5 20 Q5 17 9 15 L91 15 Q95 17 95 20 L55 95 Q53 97 50 97 Q47 97 45 95 L5 20 Z'/></svg>"},{label:"Chevron V",handle:"chevron-v",value:"<svg viewBox='0 0 120 100'><path d='M5 18 L60 0 L115 18 L60 100 Z'/></svg>"},{label:"Needle",handle:"needle",value:"<svg viewBox='0 0 40 120'><rect x='16' y='0' width='8' height='82' rx='3'/><polygon points='20,120 35,82 5,82'/></svg>"},{label:"Notched",handle:"notched",value:"<svg viewBox='0 0 120 100'><path d='M60 100 L118 16 H76 L60 40 L44 16 H2 Z'/></svg>"},{label:"Teardrop",handle:"teardrop",value:"<svg viewBox='0 0 90 120'><path d='M45 0 C64 0 79 15 79 34 C79 46 71 61 58 79 L45 97 L32 79 C19 61 11 46 11 34 C11 15 26 0 45 0 Z'/><polygon points='45,120 65,92 25,92'/></svg>"},{label:"Circle cap",handle:"circle-cap",value:"<svg viewBox='0 0 100 120'><circle cx='50' cy='26' r='22'/><polygon points='50,120 85,66 15,66'/></svg>"},{label:"Diamond",handle:"diamond",value:"<svg viewBox='0 0 90 110'><path d='M45 0 L85 40 L45 80 L5 40 Z'/><polygon points='45,110 68,80 22,80'/></svg>"},{label:"Double",handle:"double",value:"<svg viewBox='0 0 110 120'><polygon points='55,68 90,20 20,20'/><polygon points='55,120 95,72 15,72'/></svg>"},{label:"Hollow",handle:"hollow",value:"<svg viewBox='0 0 110 100'><path fill='currentColor' d='M55 96 L104 14 H6 Z'/><path fill='currentColor' style='color:transparent' fill-rule='evenodd' d='M55 96 L104 14 H6 Z M55 76 L84 24 H26 Z'/></svg>"},{label:"Curved",handle:"curved",value:"<svg viewBox='0 0 120 110'><path d='M10 22 C38 6 82 6 110 22 L74 106 H46 Z'/></svg>"},{label:"Flag",handle:"flag",value:"<svg viewBox='0 0 140 100'><rect x='22' y='6' width='96' height='58' rx='8'/><polygon points='70,100 92,64 48,64'/></svg>"},{label:"Compass",handle:"compass",value:"<svg viewBox='0 0 120 120'><circle cx='60' cy='22' r='12'/><rect x='54' y='34' width='12' height='40' rx='3'/><polygon points='60,120 88,86 32,86'/></svg>"},{label:"Inset (inward)",handle:"inset-inward",value:"<svg viewBox='0 0 120 80'><path d='M10 8 H110 V32 L74 32 L60 54 L46 32 H10 Z'/></svg>"},{label:"Tick marker",handle:"tick-marker",value:"<svg viewBox='0 0 40 90'><rect x='16' y='0' width='8' height='70' rx='3'/><rect x='10' y='70' width='20' height='20' rx='3'/></svg>"},{label:"Capsule tip",handle:"capsule-tip",value:"<svg viewBox='0 0 100 110'><rect x='30' y='0' width='40' height='70' rx='20'/><polygon points='50,110 80,70 20,70'/></svg>"},{label:"Leaf spear",handle:"leaf-spear",value:"<svg viewBox='0 0 120 110'><path d='M60 0 C96 0 116 20 116 40 C116 60 96 80 60 80 C24 80 4 60 4 40 C4 20 24 0 60 0 Z'/><polygon points='60,110 84,80 36,80'/></svg>"},{label:"Ribbon",handle:"ribbon",value:"<svg viewBox='0 0 140 110'><path d='M20 8 H120 L104 44 L82 44 L70 72 L58 44 L36 44 Z'/></svg>"}]}},computed:{options(){var i;return this.data&&this.data.settings&&"options"in this.data.settings?(i=this.data.settings)==null?void 0:i.options:[]},wheelStyle(){return{transform:`rotate(${this.currentRotation}deg)`}},showPreviewWinPrize(){return this.data.settings.show_preview_win_prize||!1},showPreviewLosePrize(){return this.data.settings.show_preview_lose_prize||!1},shouldShowPreview(){return!this.exporting&&(this.showPreviewWinPrize||this.showPreviewLosePrize)},previewContent(){return this.shouldShowPreview?this.showPreviewWinPrize?{type:"win",heading:this.data.settings.heading_win||"Congrats! You've hit [discount_name]",hasCode:!0,code:"PREVIEW10"}:this.showPreviewLosePrize?{type:"lose",heading:this.data.settings.heading_lose||"Better Luck Next Time !!",hasCode:!1,code:null}:null:null},iconArrow(){let i=this.data.settings.icon_arrow;if(i){let n=this.iconValues.find(e=>e.handle===i);if(n)return n.value}return null},settings(){let i={group_title:this.$t("general"),params:[{type:"group",name:"options",options:{limit:20,add_text:this.$t("add_prize"),prefix_item:"Prize"},params:[{type:"textarea",name:"title",label:this.$t("discount_name"),title_unique:!0,value:this.$t("new_customer_exclusive_sale"),options:{toolbar:!0,initHidden:!0}},{type:"text",name:"code",label:this.$t("discount_code")},{type:"number",name:"probability",label:this.$t("probability"),options:{units:{"%":{min:0,max:100,step:1}}}}]},{type:"popup",name:"action",label:this.$t("spin_action"),options:{type:"dropdown",default:!1,values:{click_center:this.$t("click_center"),form_submit:this.$t("after_form_submit")}}},{type:"paragraph",name:"action_paragraph",content:this.$t("spin_action_paragraph"),options:{visible:o=>o.action==="form_submit"}},{type:"toggle",name:"enable_fireworks",label:this.$t("enable_fireworks"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"number",name:"spin_duration",label:this.$t("spin_duration"),options:{units:{ms:{min:0,max:1e4,step:100}}}}]},n={group_title:this.$t("arrow"),params:[{type:"popup",label:this.$t("icon"),name:"icon_arrow",options:{type:"dropdown",default:!1,preview:"title",values:{"triangle-rounded":"Triangle rounded",marker:"Marker","chevron-v":"Chevron V",needle:"Needle",notched:"Notched",teardrop:"Teardrop","circle-cap":"Circle cap",diamond:"Diamond",double:"Double",hollow:"Hollow",curved:"Curved",flag:"Flag",compass:"Compass","capsule-tip":"Capsule tip","leaf-spear":"Leaf spear",ribbon:"Ribbon"}}},{type:"popup",label:this.$t("icon_position"),name:"icon_arrow_position",value:"top",options:{type:"dropdown",default:!1,preview:"title",values:{top:this.$t("top"),bottom:this.$t("bottom"),left:this.$t("left"),right:this.$t("right")}}},{}]},e={group_title:this.$t("win_prize"),params:[{type:"text",name:"heading_win",label:this.$t("heading"),description:"[discount_name] shows the name of the reward won."},{type:"picker",name:"icon_copy",label:this.$t("icon_copy"),options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"picker",name:"icon_copied",label:this.$t("icon_copied"),options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"toggle",name:"show_preview_win_prize",label:this.$t("show_preview_win_prize"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}}]},l={group_title:this.$t("lose_prize"),params:[{type:"text",name:"heading_lose",label:this.$t("heading")},{type:"toggle",name:"show_preview_lose_prize",label:this.$t("show_preview_lose_prize"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}}]},p={group_title:this.$t("center"),params:[{type:"text",name:"heading_center",label:this.$t("label")},{type:"picker",name:"icon_center",label:this.$t("icon"),options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"choose",label:this.$t("icon_position"),name:"icon_center_position",options:{type:"align-y",values:[-1,1],visible:{keep_data:!1,condition:o=>o.icon_center}},css:{selector:" .ecom-ws-center-content-icon",properties:{order:""}}},{type:"number",name:"spacing_center",label:this.$t("gap"),options:{units:{px:{min:0,max:100}}},css:{selector:" .ecom-wheel-spin-center-content",properties:{gap:""}}}]};return i.params=i.params.filter(o=>o),i.params.push(p),[i,n,e,l,p]},javascript(){return function(){var D;const i=this.$el,n=this.isLive;if(!i)return;const e=i.querySelector(".ecom-wheel-spin-wrapper"),l=this.settings.options,p=this.settings.icon_arrow_position||"top",o=parseInt(this.settings.spin_duration)||5e3;this.settings.heading_win,this.settings.heading_lose;const d=(D=this.settings.enable_fireworks)!=null?D:!0,g=this.settings.action||"click_center",w=l.map(s=>s.title),k=l.map(s=>({title:s.title,probability:s.probability,code:s.code}));function y(s){const t=s.map(r=>parseFloat(r.probability)/100),u=t.reduce((r,c)=>r+c,0);let x=Math.random()*u;for(let r=0;r<s.length;r++){if(x<t[r])return s[r];x-=t[r]}return s[s.length-1]}function m(s){let t=document.getElementById("fireworks-canvas");t||(t=document.createElement("canvas"),t.id="fireworks-canvas",t.style.cssText=`
                                position: fixed;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                pointer-events: none;
                                z-index: 10000;
                            `,document.body.appendChild(t));const u=t.getContext("2d");t.width=window.innerWidth,t.height=window.innerHeight;class x{constructor(v,z,M){this.x=v,this.y=z,this.color=M,this.velocity={x:(Math.random()-.5)*8,y:(Math.random()-.5)*8},this.life=60,this.maxLife=60,this.size=Math.random()*3+1}update(){this.x+=this.velocity.x,this.y+=this.velocity.y,this.velocity.y+=.1,this.life--,this.size*=.98}draw(){u.save();const v=this.life/this.maxLife;u.globalAlpha=v,u.fillStyle=this.color,u.beginPath(),u.arc(this.x,this.y,this.size,0,Math.PI*2),u.fill(),u.restore()}}let r=[];const c=["#ff6b6b","#feca57","#48dbfb","#ff9ff3","#54a0ff","#5f27cd","#00d2d3","#ff9f43","#10ac84","#ee5a6f","#c44569","#f8b500"];function T(h,v){const z=30+Math.random()*20,M=c[Math.floor(Math.random()*c.length)];for(let P=0;P<z;P++)r.push(new x(h,v,M))}function f(){u.clearRect(0,0,t.width,t.height),r.forEach((h,v)=>{h.update(),h.draw(),(h.life<=0||h.size<=.1)&&r.splice(v,1)}),r.length>0?requestAnimationFrame(f):t&&t.parentNode&&t.parentNode.removeChild(t)}const C=s.getBoundingClientRect(),$=C.left+C.width/2,_=C.top+C.height/2,B=10+Math.floor(Math.random()*3);for(let h=0;h<B;h++)setTimeout(()=>{const v=(Math.random()-.5)*200,z=(Math.random()-.5)*200,M=$+v,P=_+z;T(M,P),h===0&&f()},h*150)}function b(s){const t=e.querySelector(".ecom-wheel-spin-result-popup"),u=t.querySelector(".ecom-ws-popup-heading"),x=t.querySelector(".ecom-popup-code-section"),r=t.querySelector(".ecom-wheel-spin-copy-icon"),c=t.querySelector(".ecom-wheel-spin-copied-icon"),T=t.querySelector(".ecom-wheel-spin-code-text"),f=t.querySelector(".ecom-ws-popup-close-btn"),C=t.dataset.headingWin||"Congrats! You've hit [discount_name]",$=t.dataset.headingLose||"Better Luck Next Time !!";if(s.code){u.textContent=C.replace("[discount_name]",s.title),T.textContent=s.code,x.style.display="block",r&&(r.style.display=""),c&&(c.style.display="none");const _=t.querySelector(".ecom-copy-code-btn");_.onclick=async()=>{try{await navigator.clipboard.writeText(s.code),r&&(r.style.display="none"),c&&(c.style.display=""),_.classList.add("copied"),setTimeout(()=>{r&&(r.style.display=""),c&&(c.style.display="none"),_.classList.remove("copied")},2e3)}catch{const h=document.createElement("textarea");h.value=s.code,document.body.appendChild(h),h.select(),document.execCommand("copy"),document.body.removeChild(h),r&&(r.style.display="none"),c&&(c.style.display=""),_.classList.add("copied"),setTimeout(()=>{r&&(r.style.display=""),c&&(c.style.display="none"),_.classList.remove("copied")},2e3)}}}else u.textContent=$,x.style.display="none";f&&(f.onclick=()=>{t.style.display="none"}),t.onclick=_=>{_.target===t&&(t.style.display="none")},t.style.display="flex",setTimeout(()=>{s.code&&d!==!1&&m(t)},100)}let L=0;function F(){const s=e.querySelector(".ecom-wheel-spin-result-popup");s&&(s.style.display="none");const t=y(k),u=e.querySelector(".ecom-wheel-spin-container");if(!u)return;const x=w.findIndex(h=>h===t.title);if(x===-1){alert("You cheat");return}const r=360/w.length;let c=0;switch(p){case"top":c=0;break;case"right":c=90;break;case"bottom":c=180;break;case"left":c=270;break}let f=-(x*r+r/2-c);for(;f<0;)f+=360;for(;f>=360;)f-=360;const C=L%360;let $=f-C;$<=0&&($+=360);const B=6*360+$;L+=B,u.style.transition=`transform ${o}ms cubic-bezier(0.25, 1, 0.5, 1)`,u.style.transform=`rotate(${L}deg)`,setTimeout(()=>{u.style.transition="none",setTimeout(()=>{b(t)},800)},o)}if(g=="click_center"){const s=i.querySelector(".ecom-wheel-spin-center-content");s&&s.addEventListener("click",F)}else e.addEventListener("ecom-wheel-spin:init"+e.dataset.id,s=>{F()});if(!n&&d!==!1){const s=e.querySelector(".ecom-wheel-spin-result-popup");if(s&&s.style.display==="flex"){const t=e.querySelector(".ecom-popup-code-section");t&&t.style.display!=="none"&&setTimeout(()=>{m(s)},100)}}}},style(){var p;const i=this.data.inGrid||!1;let n={params:[{position:0,fields:[{name:"boxWidth",label:this.$t("width"),type:"number",options:{units:{px:{min:0,max:2e3,step:1},"%":{min:0,max:100,step:1}}},css:{selector:"root .ecom__wheel-spin",properties:{width:""}}}]},{position:20,fields:[{alias:"spacing"}]}]},e=[{group_alias:"box",options:{group_name:"general",group_title:this.$t("general"),selector:" .ecom-wheel-spin-wrapper"},modify:i?null:n},{group_title:this.$t("arrow"),group_name:"arrow",selector:" .ecom-wheel-spin-pointer",params:[{type:"number",name:"size",label:this.$t("Size"),options:{responsive:!0,units:{px:{min:0,max:200,step:1}}},css:{properties:{width:""}}},{type:"color",name:"fill",label:this.$t("fill"),css:{properties:{"--fill-color":""}}},{type:"color",name:"stroke",label:this.$t("stroke"),css:{properties:{"--stroke-color":""}}}]}];e.splice(1,0,{group_alias:"box",options:{group_name:"center",group_title:this.$t("center"),selector:" .ecom-wheel-spin-center"},modify:{params:[{position:0,fields:[{name:"boxWidth",label:this.$t("width"),type:"number",options:{responsive:!0,units:{px:{min:0,max:2e3,step:1},"%":{min:0,max:100,step:1}}},css:{properties:{width:""}}}]},{position:20,fields:[{type:"line"},{type:"paragraph",content:"## "+this.$t("center_text")},{type:"popup",label:this.$t("typography"),name:"textTypography",options:{global:{type:"typography"},oneline:!0,responsive:!0,type:"typography"},css:{selector:" .ecom-ws-center-content-text,  .ecom-ws-center-content-text a"}},{name:"textColor",label:this.$t("text_color"),type:"color",options:{oneline:!0,global:{type:"colors"}},css:{selector:" .ecom-ws-center-content-text",properties:{color:""}}},{type:"background",label:this.$t("text_gradient"),name:"text_gradient",liteMode:!0,options:{oneline:!0,reset:!0,types:["gradient"]},css:{selector:" .ecom-ws-center-content-text",properties:{background:""," -webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}},{name:"textTextShadow",liteMode:!0,label:this.$t("text_shadow"),type:"popup",options:{oneline:!0,type:"text-shadow"},css:{selector:" .ecom-ws-center-content-text"}}]},{position:26,fields:[{type:"line"},{type:"paragraph",content:"## "+this.$t("center_icon")},{name:"iconPrimaryColor",label:this.$t("color"),type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{selector:".ecom-ws-center-content-icon",color:""}}},{name:"iconFontSize",liteMode:!0,label:this.$t("size"),type:"number",options:{responsive:!0,units:{px:{min:0,max:300}}},css:{selector:" .ecom-ws-center-content-icon svg",properties:{height:"",width:""}}},{name:"iconTransform",liteMode:!0,label:this.$t("rotate"),type:"number",options:{responsive:!0,min:0,max:360},css:{selector:" .ecom-ws-center-content-icon svg",properties:{transform:"rotate(%value%deg)"}}}]}]}});const l=o=>({group_title:this.$t("prize")+" "+(o+1),group_name:"segment_"+(o+1),selector:" .ecom-wheel-spin-segment-"+o,params:[{name:"background",label:this.$t("background_color"),type:"background",options:{global:{type:"colors"},oneline:!0,types:["classic","gradient"]},css:{properties:{background:""}}},{name:"color",label:this.$t("color"),type:"color",options:{global:{type:"colors"},oneline:!0},css:{selector:" .ecom-wheel-spin-segment-name",properties:{color:""}}},{type:"toggle",name:"custom_typo",label:this.$t("custom_typo"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("off"),value:!1}}}},{name:"textTypography",label:this.$t("typography"),type:"popup",options:{responsive:!0,oneline:!0,global:{type:"typography"},type:"typography",visible:{keep_data:!1,condition:d=>d.custom_typo===!0}},css:{selector:" .ecom-wheel-spin-segment-name"}}]});return e.push({group_alias:"box",options:{group_title:this.$t("result_popup"),group_name:"popup_result",selector:" .ecom-wheel-spin-popup-content"},modify:{params:[{position:0,fields:[{name:"boxMaxWidthPopup",label:this.$t("max_width"),type:"number",options:{responsive:!0,units:{px:{min:0,max:2e3,step:1},"%":{min:0,max:100,step:1}}},css:{properties:{"max-width":""}}}]},{position:20,fields:{alias:"spacing",options:{label:this.$t("spacing")}}},{position:21,fields:[{type:"line"},{type:"paragraph",content:"## "+this.$t("result_heading")},{type:"choose",label:this.$t("alignment"),name:"textTextAlign",options:{oneline:!0,responsive:!0,type:"align-full",values:["left","center","right","justify"]},css:{selector:" .ecom-ws-popup-heading",properties:{"text-align":""}}},{type:"popup",label:this.$t("typography"),name:"textTypography",options:{global:{type:"typography"},oneline:!0,responsive:!0,type:"typography"},css:{selector:" .ecom-ws-popup-heading,  .ecom-ws-popup-heading a"}},{name:"textColor",label:this.$t("text_color"),type:"color",options:{oneline:!0,global:{type:"colors"}},css:{selector:" .ecom-ws-popup-heading",properties:{color:""}}},{type:"background",label:this.$t("text_gradient"),name:"text_gradient",liteMode:!0,options:{oneline:!0,reset:!0,types:["gradient"]},css:{selector:" .ecom-ws-popup-heading",properties:{background:""," -webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}},{name:"textTextShadow",liteMode:!0,label:this.$t("text_shadow"),type:"popup",options:{oneline:!0,type:"text-shadow"},css:{selector:" .ecom-ws-popup-heading"}}]}]}}),e.push({group_title:this.$t("discount_code_button"),group_alias:"button",options:{group_title:this.$t("discount_code_button"),group_name:"button_code",selector:" .ecom-copy-code-btn"}}),e.push({group_alias:"icon",options:{group_title:this.$t("copy_code_icon"),group_name:"icon_style",selector:" .ecom-wheel-spin-copied-icon, .ecom-wheel-spin-copy-icon"}}),e.push({group_alias:"text",group_name:"segment",options:{group_title:this.$t("all_prize"),selector:" .ecom-wheel-spin-segment-name"}}),(p=this==null?void 0:this.options)==null||p.forEach((o,d)=>{e.push(l(d))}),e},css(){return`
                /* Wheel Spin Styles */
                .ecom__wheel-spin {
                    position: relative;
                    max-width: 100%;
                }
                
                /* Popup Styles */
                 .ecom-wheel-spin-result-popup {
                     position: absolute;
                     top: 0;
                     left: 0;
                     width: 100%;
                     height: 100%;
                     background: transparent;
                     display: none;
                     align-items: center;
                     justify-content: center;
                     z-index: 10001;
                     opacity: 0;
                     animation: fadeIn 0.3s ease forwards;
                 }
                 
                 .ecom-wheel-spin-result-popup[style*="display: flex"],
                 .ecom-wheel-spin-result-popup[style*="display:flex"] {
                     opacity: 1;
                 }
                 
                 .ecom-wheel-spin-popup-content {
                     background: white;
                     padding: 40px;
                     border-radius: 20px;
                     text-align: center;
                     box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                     width: 90%;
                     transform: translateY(50px);
                     opacity: 0;
                     animation: slideUpCenter 0.5s ease 0.1s forwards;
                 }
                .ecom-wheel-spin-copy-icon, .ecom-wheel-spin-copied-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .ecom-wheel-spin-copy-icon svg, .ecom-wheel-spin-copied-icon svg{
                    width: 100%;
                    height: 100%;
                }
                .ecom-ws-popup-heading {
                    color: #28a745;
                    margin: 0 0 20px 0;
                    font-size: 24px;
                    font-weight: bold;
                }
                
                .ecom-ws-popup-heading-lose {
                    color: #dc3545;
                    margin: 0 0 20px 0;
                    font-size: 24px;
                    font-weight: bold;
                }
                
                
                .ecom-copy-code-btn {
                    background-color: #20c997;
                    color: white;
                    border: none;
                    padding: 15px 30px;
                    font-size: 16px;
                    font-weight: bold;
                    border-radius: 8px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin: 0 auto;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                
                
                .ecom-wheel-spin-result-popup .ecom-ws-popup-close-btn {
                    background: transparent;
                    color: #000000;
                    border: none;
                    padding: 5px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    position: absolute;
                    top: 5px;
                    right: 5px;
                }
                
                .ecom-wheel-spin-result-popup .ecom-ws-popup-close-btn:hover {
                    transform: translateY(-1px);
                }
                .ecom-wheel-spin-center {
                    cursor: pointer;
                    position: absolute;
                    width: 100px;
                    aspect-ratio: 1 / 1;
                    background: #fff;
                    border-radius: 50%;
                    overflow: hidden;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .ecom-wheel-spin-center-content {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    gap: 5px;
                }
                .ecom-ws-center-content-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .ecom-wheel-spin-container {
                    position: relative;
                    width: 100%;
                    max-width: 100%;
                    aspect-ratio: 1 / 1; /* Height = Width */
                    overflow: hidden;
                    background: transparent;
                }
                .ecom-wheel-spin-segment {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    transform-origin: center;
                }

                .ecom-wheel-spin-segment-content {
                    width: 40%;
                    pointer-events: none;
                }
                
                .wheel-spin-text-wrapper {
                    white-space: nowrap;
                    transform-origin: center;
                }

                .ecom-wheel-spin-segment-name {
                    font-size: 14px;
                    margin-bottom: 3px;
                    line-height: 1.2;
                    font-weight: 600;
                }

                .ecom-wheel-spin-segment-value {
                    font-size: 16px;
                    font-weight: 900;
                }

                /* Segment Colors - Based on actual design */
                .ecom-wheel-spin-segment-0 { background-color: #FFD700; } /* Yellow/Gold */
                .ecom-wheel-spin-segment-1 { background-color: #00CED1; } /* Cyan/Teal */
                .ecom-wheel-spin-segment-2 { background-color: #90EE90; } /* Light Green */
                .ecom-wheel-spin-segment-3 { background-color: #FF6347; } /* Red */
                .ecom-wheel-spin-segment-4 { background-color: #4169E1; } /* Blue */
                .ecom-wheel-spin-segment-5 { background-color: #DDA0DD; } /* Plum */
                .ecom-wheel-spin-segment-6 { background-color: #F0E68C; } /* Khaki/Yellow */
                .ecom-wheel-spin-segment-7 { background-color: #FF69B4; } /* Pink */
                .ecom-wheel-spin-segment-8 { background-color: #32CD32; } /* Lime Green */ 
                .ecom-wheel-spin-segment-9 { background-color: #9370DB; } /* Purple */

                .ecom-wheel-spin-pointer {
                    position: absolute;
                    width: 0;
                    height: 0;
                    z-index: 10;
                }
                .ecom-wheel-spin-pointer.ecom-wheel-spin-pointer-top {
                    top: -20px;
                    left: 50%;
                    transform: translateX(-50%);
                }
                .ecom-wheel-spin-pointer.ecom-wheel-spin-pointer-bottom {
                    bottom: -20px;
                    left: 50%;
                    transform: rotate(180deg) translateX(50%);
                }
                .ecom-wheel-spin-pointer.ecom-wheel-spin-pointer-left {
                    left: -40px;
                    top: 50%;
                    transform: rotate(270deg) translateY(-50%);
                }
                .ecom-wheel-spin-pointer.ecom-wheel-spin-pointer-right {
                    right: -40px;
                    top: 50%;
                    transform: rotate(90deg) translateY(-50%);
                }
                .ecom-wheel-spin-pointer svg {
                    width: 100%;
                    height: auto;
                    stroke: var(--stroke-color, red);
                    stroke-width: 3;
                    stroke-linejoin: round;
                    stroke-linecap: round;
                    fill: var(--fill-color, red);
                    color: var(--fill-color, red);
                }

                /* Animations */
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideUp {
                    from { 
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideUpCenter {
                    from {
                        transform: translateY(50px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
            `},default(){return{settings:{icon_arrow_position:"top",icon_arrow:"marker",options:[{title:"\u2728 5% OFF",probability:"20%"},{title:"\u{1F4B8} 10% OFF $50+",probability:"20%"},{title:"\u{1F39F}\uFE0F $5 Voucher",probability:"20%"},{title:"\u{1F6CD}\uFE0F Buy 1 Get 1",probability:"20%"},{title:"\u{1F48E} $10 Voucher",probability:"20%"},{title:"\u{1F525} 20% OFF $100+",probability:"20%"},{title:"\u{1F381} Free Gift",probability:"20%"},{title:"\u{1F340} Extra Spin",probability:"20%"},{title:"\u{1F6D2} $15 OFF $80+",probability:"20%"},{title:"\u274C Try Again",probability:"20%"}],icon_copy:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',icon_copied:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"></path></svg>',enable_fireworks:!0,spin_duration:"5000ms",heading_win:"\u2728Congrats! You've hit [discount_name]",heading_lose:"Better Luck Next Time !!",show_preview_win_prize:!1,action:"click_center",heading_center:"SPIN",icon_center:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M208 288C199.2 288 192 295.2 192 304v96C192 408.8 199.2 416 208 416s16-7.164 16-16v-96C224 295.2 216.8 288 208 288zM272 288C263.2 288 256 295.2 256 304v96c0 8.836 7.162 16 15.1 16S288 408.8 288 400l-.0013-96C287.1 295.2 280.8 288 272 288zM376.9 201.2c-13.74-17.12-34.8-27.45-56.92-27.45h-13.72c-3.713 0-7.412 .291-11.07 .8652C282.7 165.1 267.4 160 251.4 160h-11.44V72c0-39.7-32.31-72-72.01-72c-39.7 0-71.98 32.3-71.98 72v168.5C84.85 235.1 75.19 235.4 69.83 235.4c-44.35 0-69.83 37.23-69.83 69.85c0 14.99 4.821 29.51 13.99 41.69l78.14 104.2C120.7 489.3 166.2 512 213.7 512h109.7c6.309 0 12.83-.957 18.14-2.645c28.59-5.447 53.87-19.41 73.17-40.44C436.1 446.3 448 416.2 448 384.2V274.3C448 234.6 416.3 202.3 376.9 201.2zM400 384.2c0 19.62-7.219 38.06-20.44 52.06c-12.53 13.66-29.03 22.67-49.69 26.56C327.4 463.6 325.3 464 323.4 464H213.7c-32.56 0-63.65-15.55-83.18-41.59L52.36 318.2C49.52 314.4 48.02 309.8 48.02 305.2c0-16.32 14.5-21.75 21.72-21.75c4.454 0 12.01 1.55 17.34 8.703l28.12 37.5c3.093 4.105 7.865 6.419 12.8 6.419c11.94 0 16.01-10.7 16.01-16.01V72c0-13.23 10.78-24 23.1-24c13.22 0 24 10.77 24 24v130.7c0 6.938 5.451 16.01 16.03 16.01C219.5 218.7 220.1 208 237.7 208h13.72c21.5 0 18.56 19.21 34.7 19.21c8.063 0 9.805-5.487 20.15-5.487h13.72c26.96 0 17.37 27.43 40.77 27.43l14.07-.0037c13.88 0 25.16 11.28 25.16 25.14V384.2zM336 288C327.2 288 320 295.2 320 304v96c0 8.836 7.164 16 16 16s16-7.164 16-16v-96C352 295.2 344.8 288 336 288z"></path></svg>',icon_center_position:1,spacing_center:"0px"},style:{size_grid:{width_grid:"400px",rotate_grid:0,height_grid:"400px"},text:{textColor:"#ffffff",textTextAlign:"center",textTypography:{"font-size":"16px","text-transform":"uppercase"},textTypography__mobile:{"font-size":"10px"},textTypography__tablet:{"font-size":"12px"}},general:{boxBorder:{"border-style":"solid","border-width":{top:"8px",left:"8px",bottom:"8px",right:"8px"},"border-color":"rgba(46, 28, 89, 0.8)"},boxBorderRadius:{right:"50%",top:"50%",left:"50%",bottom:"50%"},boxWidth:"600px",boxHeight:"600px",spacing:{padding:{top:"8px",left:"8px",bottom:"8px",right:"8px"}},boxBackground:"rgba(105, 105, 105, 0.14)"},center:{boxBackground:"#2e1c59",boxWidth:"100px",boxBorder:{"border-style":"solid","border-width":{top:"2px",left:"2px",bottom:"2px",right:"2px"},"border-color":"#ffffff"},textColor:"#ffffff",iconPrimaryColor:"#ffffff",iconFontSize:"30px",textTypography:{"font-size":"20px","font-weight":"600"},textTypography__mobile:{"font-size":"10px"},iconFontSize__mobile:"12px",iconFontSize__tablet:"15px",textTypography__tablet:{"font-size":"12px"},boxWidth__tablet:"50px",boxWidth__mobile:"50px"},arrow:{size:"40px",fill:"#2e1c59",stroke:"rgba(46, 28, 89, 0)",size__mobile:"30px",size__tablet:"30px"},icon_style:{iconFontSize:"26px",iconPrimaryColor:"#2e1c59",iconFontSize__tablet:"16px",iconFontSize__mobile:"14px"},segment_10:{background:{gradient:{positions:[{index:13,color:"#ad96dd"},{index:87,color:"#82759f"}],type:"linear",angle:134.85,position:"center center"}}},segment_9:{background:{gradient:{positions:[{index:81,color:"#F2D3FD"},{index:15,color:"#907D96"}],type:"linear",angle:80.7,position:"center center"}}},segment_8:{background:{gradient:{positions:[{index:22,color:"#E15C42"},{index:88,color:"#732F22"}],type:"linear",angle:45.3,position:"center center"}}},segment_7:{background:{gradient:{positions:[{index:12,color:"#F8825B"},{index:86,color:"#8C4933"}],type:"linear",angle:7.38,position:"center center"}}},segment_6:{background:{gradient:{positions:[{index:13,color:"#F8C16F"},{index:85,color:"#8E6F40"}],type:"linear",angle:351.95,position:"center center"}}},segment_5:{background:{gradient:{positions:[{index:21,color:"#0389BA"},{index:86,color:"#0A3C52"}],type:"linear",angle:314.94,position:"center center"}}},segment_4:{background:{gradient:{positions:[{index:13,color:"#93CBDC"},{index:85,color:"#4E6C75"}],type:"linear",angle:277.38,position:"center center"}}},segment_3:{background:{gradient:{positions:[{index:22,color:"#D2E7EC"},{index:68,color:"#778385"}],type:"linear",angle:268,position:"center center"}}},segment_2:{background:{gradient:{positions:[{index:22,color:"#579E00"},{index:97,color:"#1E3700"}],type:"linear",angle:293,position:"center center"}}},segment_1:{background:{gradient:{positions:[{index:5,color:"#B1E043"},{index:87,color:"#64831A"}],type:"linear",angle:186.3,position:"center center"}}},heading_popup:{textColor:"#2e1c59",textTypography:{"font-size":"24px","font-weight":"600"},textTypography__tablet:{"font-size":"16px"},textTypography__mobile:{"font-size":"14px","letter-spacing":".6px"}},button_code:{tab:"normal",buttonWidthnormalmode:"100%",spacing:{padding:{right:"0px",left:"0px"},margin:{bottom:"20px"}},buttonHeightnormalmode:"60px",buttonBordernormalmode:{"border-style":"dotted","border-color":"#2e1c59"},buttonBackgroundnormalmode:{classic:{"background-color":"#ffffff"}},buttonColornormalmode:"#2e1c59",buttonTypography:{"font-size":"26px"},buttonWidthnormalmode__tablet:"100%",buttonTypography__tablet:{"font-size":"16px"},buttonHeightnormalmode__tablet:"50px",spacing__tablet:{margin:{bottom:"0px"}},spacing__mobile:{margin:{bottom:"0px"}},buttonWidthnormalmode__mobile:"100%",buttonHeightnormalmode__mobile:"40px",buttonTypography__mobile:{"font-size":"14px"},buttonBorderRadiusnormalmode:{top:"12px",left:"12px",bottom:"12px",right:"12px"}},popup_result:{boxMaxWidthPopup:"80%",spacing:{padding:{bottom:"20px"}},spacing__tablet:{padding:{right:"20px",top:"12.5px",left:"20px",bottom:"15px"},margin:{left:"0px"}},spacing__mobile:{padding:{right:"12.5px",top:"12.5px",left:"12.5px",bottom:"15px"},margin:{}},boxMaxWidthPopup__tablet:"80%",boxMaxWidthPopup__mobile:"80%"}}}}},methods:{formWidth(i){var n,e,l,p,o,d,g,w;return{width:(n=i.settings)!=null&&n.width?`calc(${((e=i.settings)==null?void 0:e.width)!=="100%"?(l=i.settings)==null?void 0:l.width:((p=i.settings)==null?void 0:p.width)+` + ${(o=this.data.settings)!=null&&o.column_gap?((d=this.data.settings)==null?void 0:d.column_gap)/2+"px":"5px"}`} - ${(g=this.data.settings)!=null&&g.column_gap?((w=this.data.settings)==null?void 0:w.column_gap)/2+"px":"5px"})`:"100%"}},format_accept_type(i){return i?"."+i.replaceAll(" ","").replaceAll(",",",."):""},getSegmentStyle(i){const e=360/this.options.length,l=i*e,p=["50% 50%"],o=Math.max(20,Math.ceil(e/5));for(let g=0;g<=o;g++){const k=(l+e*g/o-90)*Math.PI/180;let y=50+50*Math.cos(k),m=50+50*Math.sin(k);const b=p.length,L=o+1;b>2&&b<L-1&&Math.sqrt(Math.pow(y-50,2)+Math.pow(m-50,2))<49&&(y<50?y=y-.5:y>50&&(y=y+.5),m<50?m=m-.5:m>50&&(m=m+.5)),p.push(`${y}% ${m}%`)}return{clipPath:`polygon(${p.join(", ")})`}},getTextPositionStyle(i){const e=360/this.options.length,l=i*e+e/2-90,p=l*Math.PI/180,o=30,d=50+o*Math.cos(p),g=50+o*Math.sin(p);let w=(l+360)%360;return{position:"absolute",left:`${d}%`,top:`${g}%`,transform:`translate(-50%, -50%) rotate(${w}deg)`,textAlign:"center"}},getValueUnit(i){var n,e,l;return((n=i.settings)==null?void 0:n.type)==="discount_percentage"?"%":((e=i.settings)==null?void 0:e.type)==="discount_fixed"?"\u20AC":(((l=i.settings)==null?void 0:l.type)==="free_shipping","")},copyPreviewCode(i){var p;if(!((p=this.previewContent)!=null&&p.code))return;const n=this.$el.querySelector(".ecom-copy-code-btn"),e=this.$el.querySelector(".ecom-wheel-spin-copy-icon"),l=this.$el.querySelector(".ecom-wheel-spin-copied-icon");navigator.clipboard.writeText(this.previewContent.code).then(()=>{e&&(e.style.display="none"),l&&(l.style.display=""),n&&n.classList.add("copied"),setTimeout(()=>{e&&(e.style.display=""),l&&(l.style.display="none"),n&&n.classList.remove("copied")},1e4),console.log("Code copied to clipboard")}).catch(o=>{const d=document.createElement("textarea");d.value=this.previewContent.code,document.body.appendChild(d),d.select(),document.execCommand("copy"),document.body.removeChild(d),e&&(e.style.display="none"),l&&(l.style.display=""),n&&n.classList.add("copied"),setTimeout(()=>{e&&(e.style.display=""),l&&(l.style.display="none"),n&&n.classList.remove("copied")},1e4),console.log("Code copied to clipboard (fallback)")})},closePreview(){this.$set(this.data.settings,"show_preview_win_prize",!1),this.$set(this.data.settings,"show_preview_lose_prize",!1)}}},N=["innerHTML"],G=["data-id"],O={class:"wheel-spin-text-wrapper"},U=["innerHTML"],Q={class:"ecom-wheel-spin-center"},X={class:"ecom-wheel-spin-center-content"},J=["innerHTML"],K={class:"ecom-ws-center-content-text"},ee=["data-heading-win","data-heading-lose"],te={class:"ecom-wheel-spin-popup-content"},oe={class:"ecom-wheel-spin-popup-head"},ie={class:"ecom-ws-popup-heading"},ne=["innerHTML"],se=["innerHTML"],re={class:"ecom-wheel-spin-code-text"};function le(i,n,e,l,p,o){var d,g,w,k,y;return H(),W("div",{class:E(["ecom-element ecom-shopify-elements ecom__wheel-spin",[e.data.inGrid?"ecom-ingrid-full-height":""]])},[a("div",{class:E(["ecom-wheel-spin-pointer","ecom-wheel-spin-pointer-"+e.data.settings.icon_arrow_position]),innerHTML:o.iconArrow},null,10,N),a("div",{class:"ecom-wheel-spin-wrapper","data-id":e.data.id},[a("div",{class:"ecom-wheel-spin-container",style:S(o.wheelStyle)},[(H(!0),W(Z,null,j(o.options,(m,b)=>(H(),W("div",{key:b,class:E(["ecom-wheel-spin-segment",`ecom-wheel-spin-segment-${b}`]),style:S(o.getSegmentStyle(b))},[a("div",{class:"ecom-wheel-spin-segment-content",style:S(o.getTextPositionStyle(b))},[a("div",O,[a("div",{class:"ecom-wheel-spin-segment-name",innerHTML:m.title||`Option ${b+1}`},null,8,U)])],4)],6))),128))],4),a("div",Q,[a("div",X,[a("div",{class:"ecom-ws-center-content-icon",innerHTML:e.data.settings.icon_center},null,8,J),a("div",K,A(e.data.settings.heading_center),1)])]),a("div",{class:"ecom-wheel-spin-result-popup","data-heading-win":this.lang(e.data.settings.heading_win,"heading_win"),"data-heading-lose":this.lang(e.data.settings.heading_lose,"heading_lose"),style:S({display:o.shouldShowPreview?"flex":"none"})},[a("div",te,[a("div",oe,[a("h3",ie,A(((d=o.previewContent)==null?void 0:d.heading)||""),1),n[1]||(n[1]=a("div",{class:"ecom-ws-popup-prize"},null,-1))]),a("div",{class:"ecom-popup-code-section",style:S({display:(g=o.previewContent)!=null&&g.hasCode?"block":"none"})},[a("button",{class:"ecom-copy-code-btn",onClick:n[0]||(n[0]=(...m)=>o.copyPreviewCode&&o.copyPreviewCode(...m))},[a("span",{class:"ecom-wheel-spin-copy-icon",innerHTML:(w=e.data.settings)==null?void 0:w.icon_copy},null,8,ne),a("span",{class:"ecom-wheel-spin-copied-icon",style:{display:"none"},innerHTML:(k=e.data.settings)==null?void 0:k.icon_copied},null,8,se),a("span",re,A(((y=o.previewContent)==null?void 0:y.code)||""),1)])],4),n[2]||(n[2]=a("button",{class:"ecom-ws-popup-close-btn"},[a("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"curentColor",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M13.9697 15.0303C14.2626 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2626 15.0303 13.9697L11.0607 10L15.0303 6.03033C15.3232 5.73744 15.3232 5.26256 15.0303 4.96967C14.7374 4.67678 14.2626 4.67678 13.9697 4.96967L10 8.93934L6.03033 4.96967C5.73744 4.67678 5.26256 4.67678 4.96967 4.96967C4.67678 5.26256 4.67678 5.73744 4.96967 6.03033L8.93934 10L4.96967 13.9697C4.67678 14.2626 4.67678 14.7374 4.96967 15.0303C5.26256 15.3232 5.73744 15.3232 6.03033 15.0303L10 11.0607L13.9697 15.0303Z",fill:"curentColor"})])],-1))])],12,ee)],8,G)],2)}const ge=I(q,[["render",le]]);q.__docgenInfo={exportName:"default",displayName:"WheelSpin",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Shopify/WheelSpin.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{ge as default};
//# sourceMappingURL=WheelSpin.df3571c0.js.map
