import{_ as m,L as _,E as h,J as u}from"./preview.95a7df14.js";import{o,a as n,y as i,F as a,B as p,E as c,I as v}from"./vue.esm-bundler.b9dec9d9.js";import"./chunk-KSYMO6G6.f719e32d.js";import"./index.e850844b.js";import"./iframe.048ad53f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.f037b798.js";const d={name:"ArticleContent",mixins:[_,h,u],props:{data:{type:Object,default(){return{}}}},computed:{contentType(){var e,r,s;return(s=(r=(e=this.data)==null?void 0:e.settings)==null?void 0:r.content_type)!=null?s:"text"},css(){return`
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
            `},description_short(){return this.contentType==="text"?this.type==="short"?"short_description":"description_text":"description"},javascript(){return function(){let e=this.$el.querySelector(".ecom-shopify__article__description-view-more-btn"),r=this.settings.content_type,s=this.$el.querySelector(".ecom-shopify__article__description--full"),l=this.$el.querySelector(".ecom-shopify__article__description--paragraph");e&&e.addEventListener("click",function(){r==="text"&&s?(s.style.display="inherit",l.style.display="none"):l.style.maxHeight=null,this.style.display="none"})}},limit(){return this.data&&this.data.settings&&this.data.settings.limit&&parseInt(this.data.settings.limit)>0?parseInt(this.data.settings.limit):50},page_type(){return this.$store.getters["page/params"].page},liquids(){return{description:{code:`
                        {%- if article != blank -%}
                            {{article.content}}
                        {%- else -%}
                             <div>${this.page_type==="post"?"Publish this article first then select it for this element to be shown":"Please select the article in settings"}</div>
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
                            ${this.exporting===!1?`<div>${this.page_type==="post"?this.$t("publish_article_first"):this.$t("select_article_in_setting")}</div>`:""}
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

                    `}}},maxHeight(){return this.contentType==="html"&&this.data.settings.type==="short"?this.data.settings["max-height"]:null},requestShopifyType(){return{shopify_type:"article"}},settings(){return[{params:[{type:"popup",label:this.$t("content_type"),name:"content_type",options:{type:"dropdown",preview:"title",values:{text:this.$t("text"),html:"HTML"},default:!1},css:!1},{type:"popup",label:this.$t("display_mode"),name:"type",options:{type:"dropdown",preview:"title",values:{full:this.$t("full"),short:this.$t("short")},default:!1},css:!1},{type:"number",label:this.$t("maximum_words_to_show"),name:"limit",value:"50",placeholder:"50",options:{input:!0,slider:!1,min:0,visible:function(e){return e&&e.type==="short"&&e.content_type==="text"}}},{type:"number",label:this.$t("max_height"),name:"max-height",placeholder:"200",options:{units:{px:{min:0,max:1e3},vh:{min:0,max:100},vw:{min:0,max:100}},visible:function(e){return e&&e.type==="short"&&e.content_type=="html"}}},{type:"toggle",label:this.$t("show_view_more_button"),name:"viewMore",options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},visible:function(e){return e.type==="short"}}},{label:this.$t("view_more_text_button"),name:"viewMoreText",type:"text",options:{visible:function(e){return e.type==="short"&&e.viewMore}}}]}]},type(){return this.data.settings&&this.data.settings.type?this.data.settings.type:"full"},viewMore(){return this.data&&this.data.settings&&"viewMore"in this.data.settings?this.data.settings.viewMore:!1},viewMoreText(){return this.data&&this.data.settings&&"viewMoreText"in this.data.settings?this.data.settings.viewMoreText:"view more"},default(){return{settings:{content_type:"text",type:"full",limit:"50",view_more:!1,view_more_text:"View more","max-height":"200px"},style:{article_content:{textTextAlign:"left"}}}}},methods:{style(){let e=[{group_alias:"text:spacing",options:{group_title:this.$t("content"),group_name:"article_content",selector:" .ecom-shopify__article__description-container"}}];return this.contentType==="html"&&e.push({group_alias:"text:spacing",options:{group_title:this.$t("heading"),group_name:"article_content_heading",selector:" .ecom-shopify__article__description-container h1,  .ecom-shopify__article__description-container h2, .ecom-shopify__article__description-container h3, .ecom-shopify__article__description-container h4,  .ecom-shopify__article__description-container h5, .ecom-shopify__article__description-container h6"}}),this.data.settings.viewMore&&e.push({group_alias:"button",options:{group_title:this.$t("button"),group_name:"article_button",selector:" .ecom-shopify__article__description-view-more-btn"}}),e}}},y={class:"ecom-element ecom-shopify-elements ecom-shopify__article--description"},f={class:"ecom-shopify__article__description-wrapper"},g=["content_type"],w={class:"ecom-shopify__article__description--paragraph"},x=["innerHTML"],k={key:0},b=["textContent"],M=["innerHTML"],T=["innerHTML"],$={key:0},C=["textContent"];function q(e,r,s,l,H,t){return o(),n("div",y,[i("div",f,[i("div",{class:"ecom-shopify__article__description-container",content_type:t.contentType},[t.contentType==="text"?(o(),n(a,{key:0},[i("div",w,[i("span",{innerHTML:e.liquid(t.description_short)},null,8,x),t.type==="short"&&t.viewMore?(o(),n("span",k,[i("button",{type:"button",class:"ecom-shopify__article__description-view-more-btn",textContent:p(e.lang(t.viewMoreText,"viewMoreText"))},null,8,b)])):c("",!0)]),t.type==="short"&&t.viewMore?(o(),n("span",{key:0,style:{display:"none"},class:"ecom-shopify__article__description--full",innerHTML:e.liquid("description_text")},null,8,M)):c("",!0)],64)):(o(),n(a,{key:1},[i("div",{class:"ecom-shopify__article__description--paragraph",style:v({"max-height":t.maxHeight}),innerHTML:e.liquid(t.description_short)},null,12,T),t.type==="short"&&t.viewMore?(o(),n("span",$,[i("button",{type:"button",class:"ecom-shopify__article__description-view-more-btn",textContent:p(e.lang(t.viewMoreText,"viewMoreText"))},null,8,C)])):c("",!0)],64))],8,g)])])}const I=m(d,[["render",q]]);d.__docgenInfo={exportName:"default",displayName:"ArticleContent",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Article/Content.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{I as default};
//# sourceMappingURL=Content.e24108ad.js.map
