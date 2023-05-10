import{_ as m,L as _,E as u,J as h}from"./preview.7e991c37.js";import{o,a as n,x as s,F as a,z as p,y as c,P as v}from"./vue.esm-bundler.2eae420a.js";import"./chunk-2GDW2BFM.4967875d.js";import"./index.e850844b.js";import"./iframe.1e0a5089.js";import"../sb-preview/runtime.js";const d={name:"ArticleContent",mixins:[_,u,h],props:{data:{type:Object,default(){return{}}}},computed:{contentType(){var e,r,i;return(i=(r=(e=this.data)==null?void 0:e.settings)==null?void 0:r.content_type)!=null?i:"text"},css(){return`
                .ecom-shopify__article__description--paragraph {
                    position: relative;
                    overflow: hidden
                }
                .ecom-shopify__article__description--paragraph[style*="max-height"]:after {
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    height: 150px;
                    background: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255))
                }
                .ecom-shopify__article__description-view-more-btn{
                    border:none;
                    background:transparent;
                    cursor:pointer;
                }
            `},description_short(){return this.contentType==="text"?this.type==="short"?"short_description":"description_text":"description"},javascript(){return function(){let e=this.$el.querySelector(".ecom-shopify__article__description-view-more-btn"),r=this.settings.content_type,i=this.$el.querySelector(".ecom-shopify__article__description--full"),l=this.$el.querySelector(".ecom-shopify__article__description--paragraph");e&&e.addEventListener("click",function(){r==="text"&&i?(i.style.display="inherit",l.style.display="none"):l.style.maxHeight=null,this.style.display="none"})}},limit(){return this.data&&this.data.settings&&this.data.settings.limit&&parseInt(this.data.settings.limit)>0?parseInt(this.data.settings.limit):50},liquids(){return{description:{code:`
                        {%- if article != empty -%}
                            {{article.content}}
                        {%- else -%}
                            <div>Please select the article in settings</div>
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
                    `},description_text:{code:"{{ article.content | strip_html }}",preview:`
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
                    `},short_description:{code:`
                        {%- if article != empty -%}
                            {{ article.content | strip_html | truncatewords: ${this.limit} }}
                        {%- else -%}
                            <div>Please select the article in settings</div>
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

                    `}}},maxHeight(){return this.contentType==="html"&&this.data.settings.type==="short"?this.data.settings["max-height"]:null},requestShopifyType(){return{shopify_type:"article"}},settings(){return[{params:[{type:"popup",label:"Content Type",name:"content_type",options:{type:"dropdown",values:{text:"Text",html:"HTML"},default:!1},css:!1},{type:"popup",label:"Display mode",name:"type",options:{type:"dropdown",values:{full:"Full",short:"Short"},default:!1},css:!1},{type:"number",label:"Maximum words to show",name:"limit",value:"50",placeholder:"50",options:{input:!0,slider:!1,min:0,visible:function(e){return e&&e.type==="short"&&e.content_type==="text"}}},{type:"number",label:"Max height",name:"max-height",placeholder:"200",options:{units:{px:{min:0,max:1e3},vh:{min:0,max:100},vw:{min:0,max:100}},visible:function(e){return e&&e.type==="short"&&e.content_type=="html"}}},{type:"toggle",label:"Show view more button?",name:"viewMore",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:function(e){return e.type==="short"}}},{label:"View more text button",name:"viewMoreText",type:"text",options:{visible:function(e){return e.type==="short"&&e.viewMore}}}]}]},type(){return this.data.settings&&this.data.settings.type?this.data.settings.type:"full"},viewMore(){return this.data&&this.data.settings&&"viewMore"in this.data.settings?this.data.settings.viewMore:!1},viewMoreText(){return this.data&&this.data.settings&&"viewMoreText"in this.data.settings?this.data.settings.viewMoreText:"view more"},default(){return{settings:{content_type:"text",type:"full",limit:"50",view_more:!1,view_more_text:"View more","max-height":"200px"},style:{article_content:{textTextAlign:"left"}}}}},methods:{style(){let e=[{group_alias:"text:spacing",options:{group_title:"Content",group_name:"article_content",selector:" .ecom-shopify__article__description-container"}}];return this.data.settings.viewMore&&e.push({group_alias:"button",options:{group_title:"Button",group_name:"article_button",selector:" .ecom-shopify__article__description-view-more-btn"}}),e}}},y={class:"ecom-element ecom-shopify-elements ecom-shopify__article--description"},f={class:"ecom-shopify__article__description-wrapper"},g=["content_type"],w={class:"ecom-shopify__article__description--paragraph"},x=["innerHTML"],k={key:0},b=["textContent"],M=["innerHTML"],T=["innerHTML"],C={key:0},q=["textContent"];function H(e,r,i,l,L,t){return o(),n("div",y,[s("div",f,[s("div",{class:"ecom-shopify__article__description-container",content_type:t.contentType},[t.contentType==="text"?(o(),n(a,{key:0},[s("div",w,[s("span",{innerHTML:e.liquid(t.description_short)},null,8,x),t.type==="short"&&t.viewMore?(o(),n("span",k,[s("button",{type:"button",class:"ecom-shopify__article__description-view-more-btn",textContent:p(e.lang(t.viewMoreText,"viewMoreText"))},null,8,b)])):c("",!0)]),t.type==="short"&&t.viewMore?(o(),n("span",{key:0,style:{display:"none"},class:"ecom-shopify__article__description--full",innerHTML:e.liquid("description_text")},null,8,M)):c("",!0)],64)):(o(),n(a,{key:1},[s("div",{class:"ecom-shopify__article__description--paragraph",style:v({"max-height":t.maxHeight}),innerHTML:e.liquid(t.description_short)},null,12,T),t.type==="short"&&t.viewMore?(o(),n("span",C,[s("button",{type:"button",class:"ecom-shopify__article__description-view-more-btn",textContent:p(e.lang(t.viewMoreText,"viewMoreText"))},null,8,q)])):c("",!0)],64))],8,g)])])}const j=m(d,[["render",H]]);d.__docgenInfo={exportName:"default",displayName:"ArticleContent",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Article/Content.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{j as default};
//# sourceMappingURL=Content.1df40c79.js.map
