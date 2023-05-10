import{_ as M,L as P,E as S}from"./preview.9eace46c.js";import{o as U,a as W,x as G,u as F}from"./vue.esm-bundler.2eae420a.js";import"./chunk-2GDW2BFM.4967875d.js";import"./index.e850844b.js";import"./iframe.596cd581.js";import"../sb-preview/runtime.js";const L={name:"ArticleTitle",mixins:[P,S],props:{data:{type:Object,default(){return{}}}},computed:{css(){return`
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
        `},liquids(){var e,t,i,a,o,n,s,c,m,l,p,r,g,_,d,u,f,h,y,v,x,b,w,$,k,C,A,D,T,B,I,N,j,q,z,E;return{comments:{code:`
                        {%- if article != empty -%}
                            {% if article.comments_enabled? %}
                                <div class="ecom-shopify__article-comment-wrapper">
                                    <div id="comments" class="ecom-shopify__article-comments">
                                        {%- if article.comments_count == 0 -%}
                                            <p>${this.lang("No comments","no_comment")}</p>
                                        {%- endif -%}
                                        {%- if article.comments_count > 0 -%}
                                            {%- assign anchorId = '#comments-' | append: article.id -%}
                                            {% paginate article.comments by ${(e=this.data.settings)!=null&&e.limit_comments?(t=this.data.settings)==null?void 0:t.limit_comments:5} %}
                                                <div class="ecom-shopify__article-comments">
                                                {%- if comment.status == 'pending' and comment.content -%}
                                                    <article id="{{ comment.id }}" class="ecom-shopify__article-comments-comment ecom-flex ecom-column">
                                                        ${(i=this.data.settings)!=null&&i.show_gavatar?`
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

                                                                    ${(a=this.data.settings)!=null&&a.icon_name?`
                                                                            <span class="ecom-shopify__article-comments-icon ecom-flex ecom-al_center">${(o=this.data.settings)==null?void 0:o.icon_name}</span>
                                                                        `:""}
                                                                    <span class="ecom-shopify__article-circle-divider ecom-shopify__article-caption-with-letter-spacing">{{ comment.author }}</span>
                                                                </div>
                                                            </footer>
                                                        </div>
                                                    </article>
                                                {%- endif -%}

                                                {%- for comment in article.comments -%}
                                                    <article id="{{ comment.id }}" class="ecom-shopify__article-comments-comment ecom-flex">
                                                        ${(n=this.data.settings)!=null&&n.show_gavatar?`
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
                                                                    ${(s=this.data.settings)!=null&&s.icon_name?`
                                                                            <span class="ecom-shopify__article-comments-icon ecom-flex ecom-al_center">${(c=this.data.settings)==null?void 0:c.icon_name}</span>
                                                                        `:""}
                                                                    <span class="ecom-shopify__article-circle-divider ecom-shopify__article-caption-with-letter-spacing">{{ comment.author }}</span>
                                                                </div>
                                                                <div class="ecom-flex ecom-al_center ecom-shopify__article-comments-meta">

                                                                    ${(m=this.data.settings)!=null&&m.icon_time?`
                                                                                <span class="ecom-shopify__article-comments-icon ecom-flex ecom-al_center">${(l=this.data.settings)==null?void 0:l.icon_time}</span>
                                                                            `:""}
                                                                    <span class="caption-with-letter-spacing">{{ comment.created_at | time_tag: format:  "${(r=(p=this.data.settings)==null?void 0:p.date_format)!=null?r:"basic"}" }}</span>
                                                                </div>
                                                            </footer>
                                                        </div>
                                                    </article>
                                                {%- endfor -%}
                                                {%- if paginate.pages > 1 -%}
                                    <nav role="navigation">
                                    <ol class="ecom-pagination-navigation ecom-collection__pagination-navigation">
                                        {%- if paginate.previous -%}
                                            <li class="ecom-pagination-item ecom-prev" style="${((g=this.data.settings)==null?void 0:g.pagination_style)==="block"?"margin-right:auto":""}">
                                                <a class="ecom-paginate-action ecom-button-default" href="{{ paginate.previous.url }}">
                                                ${((_=this.data.settings)==null?void 0:_.number_type)==="icon"||((d=this.data.settings)==null?void 0:d.number_type)==="text_icon"?`<span class="ecom-paginate-action--icon">${((u=this.data.settings)==null?void 0:u.icon_prev_page)||""}</span>`:""}
                                                ${((f=this.data.settings)==null?void 0:f.number_type)!=="icon"?this.lang((h=this.data.settings)==null?void 0:h.text_prev_page,"prev_page"):""}
                                                </a>
                                            </li>
                                            {%- else -%}
                                            <li class="ecom-pagination-item ecom-prev ecom-paginate-action ecom-disabled"
                                            style="${((y=this.data.settings)==null?void 0:y.pagination_style)=="block"?"margin-right:auto":""}"
                                            >
                                                ${((v=this.data.settings)==null?void 0:v.number_type)==="icon"||((x=this.data.settings)==null?void 0:x.number_type)==="text_icon"?`<span class="ecom-paginate-action--icon">${((b=this.data.settings)==null?void 0:b.icon_prev_page)||""}</span>`:""}
                                                ${((w=this.data.settings)==null?void 0:w.number_type)!=="icon"?this.lang(($=this.data.settings)==null?void 0:$.text_prev_page,"prev_page"):""}
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
                                            <li class="ecom-pagination-item ecom-next" style="${((k=this.data.settings)==null?void 0:k.pagination_style)==="block"?"margin-left:auto":""}">
                                                <a class="ecom-paginate-action" href="{{ paginate.next.url }}">
                                                    ${((C=this.data.settings)==null?void 0:C.number_type)!=="icon"?this.lang((A=this.data.settings)==null?void 0:A.text_next_page,"next_page"):""}

                                                    ${((D=this.data.settings)==null?void 0:D.number_type)=="icon"||((T=this.data.settings)==null?void 0:T.number_type)==="text_icon"?`<span class="ecom-paginate-action--icon">${((B=this.data.settings)==null?void 0:B.icon_next_page)||""}</span>`:""}
                                                </a>
                                            </li>
                                            {%- else -%}
                                            <li class="ecom-pagination-item ecom-next ecom-paginate-action ecom-collection__pagination--disabled"
                                            style="${((I=this.data.settings)==null?void 0:I.pagination_style)==="block"?"margin-left:auto":""}">
                                                ${((N=this.data.settings)==null?void 0:N.number_type)!=="icon"?this.lang((j=this.data.settings)==null?void 0:j.text_next_page,"next_page"):""}
                                                ${((q=this.data.settings)==null?void 0:q.number_type)=="icon"||((z=this.data.settings)==null?void 0:z.number_type)=="text_icon"?`<span class="ecom-paginate-action--icon">${((E=this.data.settings)==null?void 0:E.icon_next_page)||""}</span>`:""}
                                            </li>
                                        {%- endif -%}
                                    </ol>
                                    </nav>
                                {%- endif -%}
                                                </div>
                                            {% endpaginate %}
                                        {%- endif -%}
                                    </div>
                                </div>
                            {% endif %}

                        {%- else -%}
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
                    `}}},requestShopifyType(){return{shopify_type:"article"}},settings(){return[{group_title:"General",params:[{type:"popup",name:"date_format",label:"Date format",options:{type:"dropdown",values:{default:"Monday, December 31, 2018 at 1:00 pm -0500",abbreviated_date:"Aug 08, 1994",basic:"12/31/2021",date:"December 31, 2018",date_at_time:"December 31, 2018 at 1:00 pm",on_date:"on Dec 31, 2018"}}},{type:"number",label:"Comments per page",name:"limit_comments",options:{min:1,max:20}},{type:"number",label:"Comment gap",name:"gap_comments",options:{reset:!1,units:{px:{min:0,max:50}}},css:{selector:" .ecom-shopify__article-comments",properties:{gap:""}}},{type:"choose",label:"Comment position",name:"comment_position",options:{type:"align-y",values:[1,-1]},css:{selector:" .ecom-shopify__article-comments-comment footer",properties:{order:""}}},{type:"line"},{type:"toggle",label:"Show G-Avatar",name:"show_gavatar",value:!0,options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"picker",label:"Icon name",name:"icon_name",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:{keep_data:!1}}},{type:"picker",label:"Icon time",name:"icon_time",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:{keep_data:!1}}},{type:"choose",label:"Icon position",name:"icon_position",options:{type:"align-x",values:[-1,1],visible:{keep_data:!1,condition:e=>e.icon_name||e.icon_time}},css:{selector:" .ecom-shopify__article-comments-icon",properties:{order:""}}},{type:"number",label:"Icon spacing",name:"icon_spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.icon_name||e.icon_time}},css:{selector:" footer > div",properties:{gap:""}}}]},{group_alias:"pagination:settings"}]},default(){return{settings:{text_prev_page:"Previous",text_next_page:"Next",number_type:"text",limit_comments:5,enable_pagination:!0,pagination_style:"inline","grid-column-gap":"10px",gap_comments:"16px"},style:{general:{"text-align":"left"},comments:{spacing:{margin:{bottom:"4px"}},textTypography:{"font-style":"italic"}},author:{spacing:{margin:{right:"8px"}},textTypography:{"font-size":"18px","text-transform":"capitalize"},textColor:"#050000"},panigation_button:{buttonAlignment:"center",buttonBackgroundnormalmode:{classic:{"background-color":"rgba(17, 24, 39, 0.1)"}},buttonColornormalmode:"#111827",buttonColorhovermode:"#111827",buttonBackgroundhovermode:{classic:{"background-color":"rgba(17, 24, 39, 0.2)"}},buttonColoractivemode:"#ffffff",buttonBackgroundactivemode:{classic:{"background-color":"#111827"}},padding:{left:"12.5px",top:"4px",bottom:"4px",right:"12.5px"},spacing:{margin:{top:"30px"}},tab:"normal",iconFontSize:"30px"}}}}},methods:{style(){var e;return[{group_alias:"box",options:{group_name:"general",group_title:"General"},modify:{params:{alias:"text-align",options:{label:"Alignment"}}}},{group_alias:"text:spacing",options:{group_name:"comments",group_title:"Comments",selector:" .ecom-shopify__article-comments-comment p"},modify:{remove:{index:0,length:1}}},{group_alias:"text:spacing",options:{group_name:"author",group_title:"Author",selector:" .ecom-shopify__article-comments-comment span.ecom-shopify__article-caption-with-letter-spacing"},modify:{remove:{index:0,length:1}}},{group_alias:"text:spacing",options:{group_name:"datetime",group_title:"Date",selector:" .ecom-shopify__article-comments-comment time"},modify:{remove:{index:0,length:1}}},{group_alias:"pagination",options:{group_title:"Pagination",group_name:"panigation_button",selector:" .ecom-pagination-navigation"},modify:{params:((e=this.data.settings)==null?void 0:e.pagination_style)!=="block"?{type:"choose",name:"buttonAlignment",label:"Alignment",options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{display:"flex","justify-content":""}}}:null}},{group_alias:"image",options:{group_title:"G Avatar",group_name:"gavatar",selector:" .ecom-shopify__comment-author-image"}},{group_alias:"icon",options:{group_name:"icon_time",group_title:"Icon",selector:" .ecom-shopify__article-comments-icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}}]}}},H={class:"ecom-element ecom-shopify-elements ecom-shopify__article-comments"},V={class:"ecom-shopify__article-comments--wrapper"},O=["data-ecom-placeholder","innerHTML"];function Y(e,t,i,a,o,n){return U(),W("div",H,[G("div",V,[G("div",{class:F(["ecom-shopify__article--comments--container",e.exporting?"":"ecom-placeholder-on-builder-mode"]),"data-ecom-placeholder":e.exporting?"":"This article disabled comments",innerHTML:e.liquid("comments")},null,10,O)])])}const ee=M(L,[["render",Y]]);L.__docgenInfo={exportName:"default",displayName:"ArticleTitle",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Article/Comment.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{ee as default};
//# sourceMappingURL=Comment.b6085677.js.map
