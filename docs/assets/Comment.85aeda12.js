import{_ as z,L as P,E as U}from"./preview.95a7df14.js";import{o as F,a as M,y as E,x as S}from"./vue.esm-bundler.b9dec9d9.js";import"./chunk-KSYMO6G6.f719e32d.js";import"./index.e850844b.js";import"./iframe.048ad53f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.f037b798.js";const L={name:"ArticleTitle",mixins:[P,U],props:{data:{type:Object,default(){return{}}}},computed:{css(){return`
            .ecom-shopify__comment-content footer {
                opacity: 1;
                flex-wrap: wrap;
            }
            .ecom-shopify__article-comments{
                display:flex;
                flex-direction:column;
            }
            .ecom-shopify__article-pagination{
                margin: auto;
                text-align:center;
            }
            .ecom-shopify__article-pagination li {
                display: inline-flex;
            }

            .ecom-shopify__article-pagination .ecom-shopify__article-pagination--visuallyhidden {
                display: none;
            }
            .ecom-paginate-action span{
                display:flex;
            }
            .ecom-paginate-action{
                display:inline-flex !important;
                grid-column-gap:12px;
                align-items:center;
            }
            .ecom-shopify__article-pagination-navigation{
                display: flex;
                justify-content: center;
                align-items:center;
                list-style:none;
            }
            .ecom-paginate-action,
            .ecom-pagination-item a{
                text-decoration: none;
                color:inherit;
            }
            .ecom-paginate-action.ecom-disabled {
                opacity: 0.5;
            }
            .ecom-collection__pagination-navigation{
                display:none;
                align-items: center;
                justify-content:center;
            }
            .ecom-collection__pagination-navigation li{
                display:flex;
            }
            .ecom-paginate-action span{
                display:flex;
            }
            .ecom-shopify__article-comments-icon svg {
                width: 16px;
                height: 16px;
            }
        `},limitComment(){var e,t;return(t=Number((e=this.data.settings)==null?void 0:e.limit_comments))!=null?t:5},commentPagination(){var t,i,a,o,n,s,c,l,m,r,g,_,d,u,h,f,y,v,x,b,$,w,k,C,T,q,B,D,j,A,N;const e=`
                {%- if paginate.pages > 1 -%}
                    <nav role="navigation">
                        <ol class="ecom-pagination-navigation ecom-collection__pagination-navigation">
                            {%- if paginate.previous -%}
                                <li class="ecom-pagination-item ecom-prev" style="${((t=this.data.settings)==null?void 0:t.pagination_style)==="block"?"margin-right:auto":""}">
                                    <a class="ecom-paginate-action ecom-button-default" href="{{ paginate.previous.url }}">
                                        ${["icon","text_icon"].includes((i=this.data.settings)==null?void 0:i.number_type)?`<span class="ecom-paginate-action--icon">${((a=this.data.settings)==null?void 0:a.icon_prev_page)||""}</span>`:""}
                                        ${((o=this.data.settings)==null?void 0:o.number_type)!=="icon"?this.lang((n=this.data.settings)==null?void 0:n.text_prev_page,"prev_page"):""}
                                    </a>
                                </li>
                            {%- else -%}
                                <li class="ecom-pagination-item ecom-prev ecom-paginate-action ecom-disabled" style="${((s=this.data.settings)==null?void 0:s.pagination_style)=="block"?"margin-right:auto":""}" >
                                    ${["icon","text_icon"].includes((c=this.data.settings)==null?void 0:c.number_type)?`<span class="ecom-paginate-action--icon">${((l=this.data.settings)==null?void 0:l.icon_prev_page)||""}</span>`:""}
                                    ${((m=this.data.settings)==null?void 0:m.number_type)!=="icon"?this.lang((r=this.data.settings)==null?void 0:r.text_prev_page,"prev_page"):""}
                                </li>
                            {%- endif -%}
                                {%- for part in paginate.parts -%}
                                    {%- if part.is_link -%}
                                        <li class="ecom-pagination-item">
                                            <a href="{{ part.url }}" title="{{ part.title }}">
                                                {{ part.title }}
                                            </a>
                                        </li>
                                    {%- else -%}
                                        {%- if part.title == paginate.current_page -%}
                                            <li class="ecom-pagination-item ecom-button-active" aria-current="page">
                                                {{ part.title }}
                                            </li>
                                        {%- else -%}
                                            <li class="ecom-pagination-item">
                                                {{ part.title }}
                                            </li>
                                        {%- endif -%}
                                    {%- endif -%}
                                {%- endfor -%}

                                {%- if paginate.next -%}
                                    <li class="ecom-pagination-item ecom-next" style="${((g=this.data.settings)==null?void 0:g.pagination_style)==="block"?"margin-left:auto":""}">
                                        <a class="ecom-paginate-action" href="{{ paginate.next.url }}">
                                            ${((_=this.data.settings)==null?void 0:_.number_type)!=="icon"?this.lang((d=this.data.settings)==null?void 0:d.text_next_page,"next_page"):""}
                                            ${["icon","text_icon"].includes((u=this.data.settings)==null?void 0:u.number_type)?`<span class="ecom-paginate-action--icon">${((h=this.data.settings)==null?void 0:h.icon_next_page)||""}</span>`:""}
                                        </a>
                                    </li>
                                {%- else -%}
                                <li class="ecom-pagination-item ecom-next ecom-paginate-action ecom-collection__pagination--disabled"
                                    style="${((f=this.data.settings)==null?void 0:f.pagination_style)==="block"?"margin-left:auto":""}">
                                        ${((y=this.data.settings)==null?void 0:y.number_type)!=="icon"?this.lang((v=this.data.settings)==null?void 0:v.text_next_page,"next_page"):""}
                                        ${["icon","text_icon"].includes((x=this.data.settings)==null?void 0:x.number_type)?`<span class="ecom-paginate-action--icon">${((b=this.data.settings)==null?void 0:b.icon_next_page)||""}</span>`:""}
                                    </li>
                            {%- endif -%}
                        </ol>
                    </nav>
                {%- endif -%}
            `;return this.exporting?e:`
                    {%- if EComClientRender -%}
                    ${($=this.data.settings)!=null&&$.show_preview_pagination?` <nav role="navigation">
                                <ol class="ecom-pagination-navigation ecom-collection__pagination-navigation">
                                    <li class="ecom-pagination-item ecom-prev ecom-paginate-action ecom-disabled" style="${((w=this.data.settings)==null?void 0:w.pagination_style)=="block"?"margin-right:auto":""}" >
                                        ${["icon","text_icon"].includes((k=this.data.settings)==null?void 0:k.number_type)?`<span class="ecom-paginate-action--icon">${((C=this.data.settings)==null?void 0:C.icon_prev_page)||""}</span>`:""}
                                        ${((T=this.data.settings)==null?void 0:T.number_type)!=="icon"?this.lang((q=this.data.settings)==null?void 0:q.text_prev_page,"prev_page"):""}
                                    </li>
                                    ${[1,2,3].map(p=>`
                                        <li class="ecom-pagination-item ${p===1?"ecom-button-active":""}">
                                            <a href="/" title="${p}">
                                                ${p}
                                            </a>
                                        </li>
                                    `).join("")}
                                    <li class="ecom-pagination-item ecom-next" style="${((B=this.data.settings)==null?void 0:B.pagination_style)==="block"?"margin-left:auto":""}">
                                        <a class="ecom-paginate-action" href="/">
                                            ${((D=this.data.settings)==null?void 0:D.number_type)!=="icon"?this.lang((j=this.data.settings)==null?void 0:j.text_next_page,"next_page"):""}
                                            ${["icon","text_icon"].includes((A=this.data.settings)==null?void 0:A.number_type)?`<span class="ecom-paginate-action--icon">${((N=this.data.settings)==null?void 0:N.icon_next_page)||""}</span>`:""}
                                        </a>
                                    </li>
                                </ol>
                            </nav>`:""}
                    {%- else -%}
                        ${e}
                    {%- endif -%}
                `},liquids(){var e,t,i,a,o,n,s,c,l,m;return{comments:{code:`
                        {%- if article != blank -%}
                            {% if article.comments_enabled? %}
                                <div class="ecom-shopify__article-comment-wrapper">
                                    <div id="comments" class="ecom-shopify__article-comments">
                                        {%- if article.comments_count == 0 -%}<p>${this.lang("No comments","no_comment")}</p>{%- endif -%}
                                        {%- if article.comments_count > 0 -%}
                                            {%- assign anchorId = '#comments-' | append: article.id -%}
                                            {% paginate article.comments by ${this.limitComment} %}
                                                <div class="ecom-shopify__article-comments">
                                                    {%- if comment.status == 'pending' and comment.content -%}
                                                        <article id="{{ comment.id }}" class="ecom-shopify__article-comments-comment ecom-flex ecom-column">
                                                            ${(e=this.data.settings)!=null&&e.show_gavatar?`
                                                                    {%- if comment.email -%}
                                                                        <div class="ecom-shopify__comment-author-image ecom-col-auto">
                                                                            <div class="ecom-image-default">
                                                                                <img alt="{{ comment.author }}" src="https://www.gravatar.com/avatar/{{ comment.email | downcase | md5 }}" />
                                                                            </div>
                                                                        </div>
                                                                    {%- endif -%}
                                                                `:""}
                                                            <div class="ecom-shopify__comment-content ecom-col">
                                                                {{ comment.content }}
                                                                <footer class="right">
                                                                    <div class="ecom-flex ecom-al_center ecom-shopify__article-comments-meta">
                                                                        ${(t=this.data.settings)!=null&&t.icon_name?`
                                                                                <span class="ecom-shopify__article-comments-icon ecom-flex ecom-al_center">${(i=this.data.settings)==null?void 0:i.icon_name}</span>
                                                                            `:""}
                                                                        <span class="ecom-shopify__article-circle-divider ecom-shopify__article-caption-with-letter-spacing">{{ comment.author }}</span>
                                                                    </div>
                                                                </footer>
                                                            </div>
                                                        </article>
                                                    {%- endif -%}

                                                    {%- for comment in article.comments -%}
                                                        <article id="{{ comment.id }}" class="ecom-shopify__article-comments-comment ecom-flex">
                                                            ${(a=this.data.settings)!=null&&a.show_gavatar?`
                                                                    {%- if comment.email -%}
                                                                        <div class="ecom-shopify__comment-author-image ecom-col-auto">
                                                                            <div class="ecom-image-default">
                                                                                <img alt="{{ comment.author }}" src="https://www.gravatar.com/avatar/{{ comment.email | downcase | md5 }}" />
                                                                            </div>
                                                                        </div>
                                                                    {%- endif -%}
                                                                `:""}
                                                            <div class="ecom-shopify__comment-content ecom-col">
                                                                {{ comment.content }}
                                                                <footer class="ecom-flex">
                                                                    <div class="ecom-flex ecom-al_center">
                                                                        ${(o=this.data.settings)!=null&&o.icon_name?` <span class="ecom-shopify__article-comments-icon ecom-flex ecom-al_center">${(n=this.data.settings)==null?void 0:n.icon_name}</span> `:""}
                                                                        <span class="ecom-shopify__article-circle-divider ecom-shopify__article-caption-with-letter-spacing">{{ comment.author }}</span>
                                                                    </div>
                                                                    <div class="ecom-flex ecom-al_center ecom-shopify__article-comments-meta">
                                                                        ${(s=this.data.settings)!=null&&s.icon_time?` <span class="ecom-shopify__article-comments-icon ecom-flex ecom-al_center">${(c=this.data.settings)==null?void 0:c.icon_time}</span> `:""}
                                                                        <span class="caption-with-letter-spacing">{{ comment.created_at | time_tag: format:  "${(m=(l=this.data.settings)==null?void 0:l.date_format)!=null?m:"basic"}" }}</span>
                                                                    </div>
                                                                </footer>
                                                            </div>
                                                        </article>
                                                    {%- endfor -%}
                                                ${this.commentPagination}  
                                                </div>
                                            {% endpaginate %}
                                        {%- endif -%}
                                    </div>
                                </div>
                            {% endif %}
                        {%- else -%}
                             ${this.exporting===!1?`<div>${this.page_type==="post"?this.$t("publish_article_first"):this.$t("select_article_in_setting")}</div>`:""}
                        {% endif %}
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-col-12">
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-9 ecom-skeleton-big"></div>
                                </div>
                            </div>
                        </div>
                    `}}},requestShopifyType(){return{shopify_type:"article"}},settings(){return[{group_title:this.$t("general"),params:[{type:"popup",name:"date_format",label:this.$t("date_format"),options:{type:"dropdown",values:{default:"Monday, December 31, 2018 at 1:00 pm -0500",abbreviated_date:"Aug 08, 1994",basic:"12/31/2021",date:"December 31, 2018",date_at_time:"December 31, 2018 at 1:00 pm",on_date:"on Dec 31, 2018"}}},{type:"number",label:this.$t("comments_per_page"),name:"limit_comments",options:{min:1,max:50}},{type:"number",label:this.$t("comment_gap"),name:"gap_comments",options:{reset:!1,units:{px:{min:0,max:50}}},css:{selector:" .ecom-shopify__article-comments",properties:{gap:""}}},{type:"choose",label:this.$t("comment_position"),name:"comment_position",options:{type:"align-y",values:[1,-1]},css:{selector:" .ecom-shopify__article-comments-comment footer",properties:{order:""}}},{type:"line"},{type:"toggle",label:this.$t("show_g_avatar"),name:"show_gavatar",value:!0,options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"picker",label:this.$t("icon_name"),name:"icon_name",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:{keep_data:!1}}},{type:"picker",label:this.$t("icon_time"),name:"icon_time",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:{keep_data:!1}}},{type:"choose",label:this.$t("icon_position"),name:"icon_position",options:{type:"align-x",values:[-1,1],visible:{keep_data:!1,condition:e=>e.icon_name||e.icon_time}},css:{selector:" .ecom-shopify__article-comments-icon",properties:{order:""}}},{type:"number",label:this.$t("icon_spacing"),name:"icon_spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.icon_name||e.icon_time}},css:{selector:" footer > div",properties:{gap:""}}}]},{group_alias:"pagination:settings",options:{group_title:this.$t("pagination")},...this.canUseCustomLiquidForCSR?{modify:{params:[{position:0,fields:[{type:"paragraph",content:"",options:{warnings:{content:this.$t("note_pagination_only_work_on_live_page")}}}]},{position:2,fields:[{type:"toggle",name:"show_preview_pagination",label:this.$t("show_preview_pagination"),value:!0,options:{oneline:!0,values:{on:{label:this.$t("enable"),value:!0},off:{label:this.$t("disable"),value:!1}},visible:{condition:e=>!!e.enable_pagination}}}]}]}}:{}}]},default(){return{settings:{text_prev_page:"Previous",text_next_page:"Next",number_type:"text",limit_comments:5,enable_pagination:!0,pagination_style:"inline","grid-column-gap":"10px",gap_comments:"16px"},style:{general:{"text-align":"left"},comments:{spacing:{margin:{bottom:"4px"}},textTypography:{"font-style":"italic"}},author:{spacing:{margin:{right:"8px"}},textTypography:{"font-size":"18px","text-transform":"capitalize"},textColor:"#050000"},panigation_button:{buttonAlignment:"center",buttonBackgroundnormalmode:{classic:{"background-color":"rgba(17, 24, 39, 0.1)"}},buttonColornormalmode:"#111827",buttonColorhovermode:"#111827",buttonBackgroundhovermode:{classic:{"background-color":"rgba(17, 24, 39, 0.2)"}},buttonColoractivemode:"#ffffff",buttonBackgroundactivemode:{classic:{"background-color":"#111827"}},padding:{left:"12.5px",top:"4px",bottom:"4px",right:"12.5px"},spacing:{margin:{top:"30px"}},tab:"normal",iconFontSize:"30px"}}}}},methods:{style(){var e;return[{group_alias:"box",options:{group_name:"general",group_title:this.$t("general")},modify:{params:{alias:"text-align",options:{label:this.$t("alignment")}}}},{group_alias:"text:spacing",options:{group_name:"comments",group_title:this.$t("comments"),selector:" .ecom-shopify__article-comments-comment p"},modify:{remove:{index:0,length:1}}},{group_alias:"text:spacing",options:{group_name:"author",group_title:this.$t("author"),selector:" .ecom-shopify__article-comments-comment span.ecom-shopify__article-caption-with-letter-spacing"},modify:{remove:{index:0,length:1}}},{group_alias:"text:spacing",options:{group_name:"datetime",group_title:this.$t("date"),selector:" .ecom-shopify__article-comments-comment time"},modify:{remove:{index:0,length:1}}},{group_alias:"pagination",options:{group_title:this.$t("pagination"),group_name:"panigation_button",selector:" .ecom-pagination-navigation"},modify:{params:((e=this.data.settings)==null?void 0:e.pagination_style)!=="block"?{type:"choose",name:"buttonAlignment",label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{display:"flex","justify-content":""}}}:null}},{group_alias:"image",options:{group_title:this.$t("g_avatar"),group_name:"gavatar",selector:" .ecom-shopify__comment-author-image"}},{group_alias:"icon",options:{group_name:"icon_time",group_title:this.$t("icon"),selector:" .ecom-shopify__article-comments-icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}}]}}},W={class:"ecom-element ecom-shopify-elements ecom-shopify__article-comments"},H={class:"ecom-shopify__article-comments--wrapper"},I=["data-ecom-placeholder","innerHTML"];function R(e,t,i,a,o,n){return F(),M("div",W,[E("div",H,[E("div",{class:S(["ecom-shopify__article--comments--container",e.exporting?"":"ecom-placeholder-on-builder-mode"]),"data-ecom-placeholder":e.exporting?"":"This article disabled comments",innerHTML:e.liquid("comments")},null,10,I)])])}const Y=z(L,[["render",R]]);L.__docgenInfo={exportName:"default",displayName:"ArticleTitle",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Article/Comment.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{Y as default};
//# sourceMappingURL=Comment.85aeda12.js.map
