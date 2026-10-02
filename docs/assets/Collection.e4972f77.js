import{_ as C,L as z,E as S,J as H}from"./preview.95a7df14.js";import{o as h,a as f,y as a,E as w,x as B,J as y,L as v,I as $}from"./vue.esm-bundler.b9dec9d9.js";import"./chunk-KSYMO6G6.f719e32d.js";import"./index.e850844b.js";import"./iframe.048ad53f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.f037b798.js";const k={name:"ShopifyCollection",presets:!1,vendors:["slider_js","slider_css"],mixins:[z,S,H],props:{data:{type:Object,default(){return{}}}},data(){var t,e;return{_debouncedCollectionsTimmer:null,collectionHandles:(((e=(t=this.data)==null?void 0:t.settings)==null?void 0:e.collections)||[]).map(i=>i==null?void 0:i.value).filter(Boolean),jsreactives:["style","slider_pagination_style","slider_items","slider_items__tablet","slider_items__mobile","slider_spacing","slider_spacing__tablet","slider_spacing__mobile","slider_group","slider_group__tablet","slider_group__mobile","slider_autoplay","slider_loop","lazyload"]}},computed:{assign_collections(){var t,e,i,s,l;return this.data.template==="list-collections"&&this.data.settings.source!=="menu"?`
                    {% capture limit%}${this.limit}{%endcapture%}
                    {%- assign limit = limit | plus: 0 -%}
                    {%- paginate collections by limit -%}
                    <div class="ecom-shopify__list-collections" role="list">
                        {%- for collection_item in collections -%}
                `:this.canUseCustomLiquidForCSR?`
                    <div class="ecom-shopify__list-collections ${((t=this.data.settings)==null?void 0:t.style)==="slider"?"ecom-swiper-wrapper":""}" role="list">
                        {% assign check = false %}
                        {% for collection_item in collections %}
                            {%- if collection_item == empty -%}{% continue %}{%- endif -%}
                            {% assign check = true %}
                            ${this.data.settings.hide_collection_empty?"{%- if collection_item.all_products_count < 1 -%}{% continue %}{%- endif -%}":""}
                `:`
                <div class="ecom-shopify__list-collections ${((e=this.data.settings)==null?void 0:e.style)==="slider"?"ecom-swiper-wrapper":""}" role="list">
                    ${((s=(i=this.data)==null?void 0:i.settings)==null?void 0:s.source)==="collections"&&this.collectionHandles.length?` {% capture handles %}${this.collectionHandles.join(",")}{% endcapture %}
                                {% assign handles = handles | split: ','%}
                                ${this.exporting?"":"{% assign check = false %}"}
                                {% for handle in handles %}
                                    {% assign collection_item = collections[handle] %}
                                    {%- if collection_item == empty -%}{% continue %}{%- endif -%}
                                        ${this.exporting?"":"{% assign check = true %}"}
                                        ${this.data.settings.hide_collection_empty?"{%- if collection_item.products.size == 0 -%}{% continue %}{%- endif -%}":""}
                            `:`
                            ${this.data.settings.source==="metafield"?`
                                {% assign handles = ''%}
                                {% assign collection_reference = false %}
                                {% if collection and  request.page_type == 'collection' and collection.metafields.ecomposer.collections %}
                                    {% assign handles = collection.metafields.ecomposer.collections  %}
                                    {% if handles.type == 'list.collection_reference'%}
                                        {% assign  collection_reference = true %}
                                        {% assign handles  = handles.value %}
                                    {% endif %}
                                {% endif %}

                                {% if EComBuilderMode and handles == '' %}
                                    {% assign handles = ''%}
                                    {%- for collection_item in collections  limit: limit  -%}
                                        {% unless forloop.first%}{% assign handles = handles | append: ',' %}{% endunless %}
                                        {% assign handles = handles | append: collection_item.handle  %}
                                    {% endfor %}
                                {% endif %}
                                {% unless collection_reference %}
                                    {% assign handles = handles | split: ','%}
                                {% endunless %}
                                {% for handle in handles %}
                                    {% if collection_reference %}
                                        {% assign collection_item = handle %}
                                    {% else %}
                                        {% assign collection_item = collections[handle] %}
                                    {% endif %}

                                    {%- if collection_item == empty -%}{% continue %}{%- endif -%}
                                    ${this.data.settings.hide_collection_empty?"{%- if collection_item.products.size == 0 -%}{% continue %}{%- endif -%}":""}



                            `:`
                            ${(l=this.data.settings)!=null&&l.menu?`
                                {%- capture menu-%}${this.data.settings.menu.value}{%- endcapture -%}
                                        {%- liquid
                                            assign handles = ''
                                            for link in linklists[menu].links
                                                assign handle = link.url | split: '/' | last
                                                assign handles = handles | append: handle | append: ','
                                            endfor
                                        -%}
                                        {% assign handles = handles | split: ','%}

                                        {% for handle in handles %}
                                            {% assign collection_item = collections[handle] %}
                                            {%- if collection_item == empty -%}{% continue %}{%- endif -%}
                                            ${this.data.settings.hide_collection_empty?"{%- if collection_item.products.size == 0 -%}{% continue %}{%- endif -%}":""}
                                    `:`
                                {% comment %} not metafield{% endcomment %}
                                        {%- for collection_item in collections  limit: 0  -%}
                            `}

                            `}

                    `}

            `},csrContext(){var s,l,o,n,c,r,p,d,m,_,u,g,b,x;const t=(l=(s=this.data)==null?void 0:s.settings)==null?void 0:l.source,i={type:t==="menu"?"collection-items":this.data.template||"list-collections",id:(o=this.data)==null?void 0:o.id,dataSource:t,menu:(r=(c=(n=this.data)==null?void 0:n.settings)==null?void 0:c.menu)==null?void 0:r.value,menuName:(m=(d=(p=this.data)==null?void 0:p.settings)==null?void 0:d.menu)==null?void 0:m.name,collectionHandles:this.collectionHandles};return t==="metafield"&&(i.handle=(x=(b=(g=(u=(_=this.shopifyWrapper)==null?void 0:_.data)==null?void 0:u.settings)==null?void 0:g.collection)==null?void 0:b.value)!=null?x:null),i},liquids(){var t,e,i,s,l,o,n,c,r,p,d,m,_,u,g;return{collections:{code:`
                            {% capture limit%}${this.limit}{%endcapture%}
                            {% assign limit = limit | plus: 0 %}
                            {% assign count = 0 %}
                            {% capture image_ratio%}${this.image_ratio}{% endcapture %}
                            {% capture description_length %}${this.description_length}{% endcapture %}
                            {% assign description_length = description_length | plus: 0 %}
                                ${this.assign_collections}
                                {% assign count = count | plus: 1 %}
                                {% if count > limit %} {% break %} {% endif %}
                                {% assign collection_image = collection_item.image %}
                                {% unless  collection_image   %}
                                    {% if collection_item.all_products_count > 0 %}
                                        {% assign collection_image = collection_item.products.first.featured_image %}
                                    {% endif %}
                                {% endunless %}
                                <div class="ecom-shopify__list-collections--item ${((t=this.data.settings)==null?void 0:t.style)==="slider"?"ecom-swiper-slide":""} {% unless  collection_image  %}ecom-shopify__list-collections__empty{% endunless %} ">
                                    <a href="{{ collection_item.url }}" class="ecom-shopify__collection-card{% if collection_image != blank %} ecom-shopify__collection-card--media{% else %}{% if image_ratio != 'adapt' %} ecom-card--stretch{% endif %}{% endif %}{% unless section.settings.image_padding %} ecom-card--light-border{% endunless %}"
                                    >
                                    <div class="ecom-shopify__collection-card ">
                                        {%- if collection_image != blank -%}
                                        <div class="ecom-shopify__list-collections-media-wrapper" ${this.data.settings.show_image==="flex"?"":'style="display: none"'}>
                                            <div class="ecom-image-default ecom-shopify__list-collections-media ecom-shopify__list-collections-media--{{ image_ratio }} ecom-shopify__list-collections-media--hover-effect ecom-shopify__list-collections-overflow-hidden"
                                                {% if image_ratio == 'adapt' %}style="padding-bottom: {{ 1 | divided_by: collection_image.aspect_ratio | times: 100 }}%;"{% endif %}>
                                                {%- assign img_alt = collection.title | default: collection_image.alt -%}
                                                <img srcset="
                                                    {%- if collection_image.width >= 535 -%}{{ collection_image | image_url: width: 535 }} 535w,{%- endif -%}
                                                    {%- if collection_image.width >= 720 -%}{{ collection_image | image_url: width: 720 }} 720w,{%- endif -%}
                                                    {%- if collection_image.width >= 940 -%}{{ collection_image | image_url: width: 940 }} 940w,{%- endif -%}
                                                    {%- if collection_image.width >= 1070 -%}{{ collection_image | image_url: width: 1070 }} 1070w{%- endif -%}"
                                                    src="{{ collection_image | image_url: width: 533 }}"
                                                    sizes="(min-width: 1100px) 358px, (min-width: 750px) calc((100vw - 130px) / 3), calc(100vw - 30px)"
                                                    alt="{{ img_alt | escape }}"
                                                    height="{{collection_image.height }}"
                                                    width="{{ collection_image.width }}"
                                                    loading="${this.data.settings.lazyload?"auto":"lazy"}"
                                                >
                                            </div>
                                            </div>

                                            <div class="ecom-shopify__collection-card-title">
                                                 ${this.show_title?`<${(i=(e=this.data.settings)==null?void 0:e.title_tag)!=null?i:"h2"} class="ecom-shopify__collection-heading-title">{{- collection_item.title -}}</${(l=(s=this.data.settings)==null?void 0:s.title_tag)!=null?l:"h2"}>`:""}
                                                 ${(o=this.data.settings)!=null&&o.show_counter?`<span class="ecom-shopify__collection-card-counter">
                                                    {% assign products_count = collection_item.all_products_count%}
                                                    {% if products_count == 1%}
                                                        ${this.lang((n=this.data.settings)==null?void 0:n.text_counter,"text_counter",{products_count:"products_count"})}
                                                    {% else %}
                                                        ${this.lang((c=this.data.settings)==null?void 0:c.text_counter_other,"text_counter_other",{products_count:"products_count"})}
                                                    {% endif %}

                                                    </span>`:""}
                                            </div>


                                        ${this.show_description?`
                                                {%- if collection_item.description != blank and description_length > 0 -%}
                                                    <p class="ecom-shopify__collection-card-description">
                                                        {{- collection_item.description | strip_html | truncatewords: description_length -}}</span>
                                                    </p>
                                                {%- endif -%}
                                            `:""}

                                        {%- else -%}
                                             <div class="ecom-shopify__collection-overlay-card"></div>
                                            <div class="ecom-shopify__collection-card__text-spacing">
                                             <div class="ecom-shopify__collection-card-title">
                                                ${this.show_title?`
                                                    <${(p=(r=this.data.settings)==null?void 0:r.title_tag)!=null?p:"h2"} class="ecom-shopify__collection-heading-title">
                                                            {{- collection_item.title -}}
                                                        </${(m=(d=this.data.settings)==null?void 0:d.title_tag)!=null?m:"h2"}>
                                                `:""}
                                                ${(_=this.data.settings)!=null&&_.show_counter?`<span class="ecom-shopify__collection-card-counter">
                                                    {% assign products_count = collection_item.all_products_count%}
                                                    {% if products_count == 1%}
                                                        ${this.lang((u=this.data.settings)==null?void 0:u.text_counter,"text_counter",{products_count:"products_count"})}
                                                    {% else %}
                                                        ${this.lang((g=this.data.settings)==null?void 0:g.text_counter_other,"text_counter_other",{products_count:"products_count"})}
                                                    {% endif %}
                                                    </span>`:""}
                                                </div>
                                                ${this.show_description?`
                                                    {%- if collection_item.description != blank and description_length > 0 -%}
                                                        <p class="ecom-shopify__collection-card-description">
                                                            {{- collection_item.description | strip_html | truncatewords: description_length -}}</span>
                                                        </p>
                                                    {%- endif -%}
                                                `:""}

                                            </div>
                                        {%- endif -%}
                                    </div>
                                    </a>
                                </div>
                                {%- endfor -%}
                                ${this.exporting?"":"{% if check == false %} Please select collections in the settings to display {% endif %}"}
                            </div>
                            ${this.data.template==="list-collections"?`
                                {%- if paginate.pages > 1 -%}
                                    <nav role="navigation">
                                    <ol class="ecom-collection__pagination-navigation">
                                        {%- if paginate.previous -%}
                                            <li class="ecom-prev">
                                                <a class="ecom-paginate-action" href="{{ paginate.previous.url }}">
                                                ${this.data.settings.number_type=="icon"||this.data.settings.number_type=="text_icon"?`
                                                    <span aria-hidden="true">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                                        </svg>
                                                    </span>`:""}
                                                ${this.data.settings.number_type!=="icon"?this.lang(this.data.settings.text_prev_page,"prev_page"):""}
                                                </a>
                                            </li>
                                            {%- else -%}
                                            <li class="ecom-prev ecom-paginate-action ecom-disabled">
                                                ${this.data.settings.number_type=="icon"||this.data.settings.number_type=="text_icon"?`<span aria-hidden="true">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                                        </svg>
                                                    </span>`:""}
                                                ${this.data.settings.number_type!=="icon"?this.lang(this.data.settings.text_prev_page,"prev_page"):""}
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
                                            <li class="ecom-next" >
                                                <a class="ecom-paginate-action" href="{{ paginate.next.url }}">

                                                    ${this.data.settings.number_type!=="icon"?this.lang(this.data.settings.text_next_page,"next_page"):""}

                                                    ${this.data.settings.number_type=="icon"||this.data.settings.number_type=="text_icon"?`<span aria-hidden="true">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                            </svg>
                                                        </span>`:""}
                                                </a>
                                            </li>
                                            {%- else -%}
                                            <li class="ecom-next ecom-paginate-action ecom-collection__pagination--disabled">
                                                ${this.data.settings.number_type!=="icon"?this.lang(this.data.settings.text_next_page,"next_page"):""}
                                                ${this.data.settings.number_type=="icon"||this.data.settings.number_type=="text_icon"?`<span aria-hidden="true">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                            </svg>
                                                        </span>`:""}
                                            </li>
                                        {%- endif -%}
                                    </ol>
                                    </nav>
                                {%- endif -%}
                            {% endpaginate%}`:""}
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
                                    <div class="ecom-skeleton-col-10 big"></div>
                                    <div class="ecom-skeleton-col-2 ecom-skeleton-empty big"></div>
                                    <div class="ecom-skeleton-col-4"></div>
                                    <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-6"></div>
                                    <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                    <div class="ecom-skeleton-col-12"></div>
                                </div>
                            </div>
                        </div>
                    `}}},settings(){let t=[{type:"popup",label:this.$t("image_ratio"),name:"image_ratio",value:"adapt",options:{type:"dropdown",icon_type:"percent",preview:"title",values:{adapt:this.$t("adapt_to_image"),portrait:this.$t("portrait"),square:this.$t("square"),custom:this.$t("custom_width_height")}}},{type:"toggle",name:"show_image",label:this.$t("show_image"),options:{values:{on:{label:this.$t("yes"),value:"flex"},off:{label:this.$t("no"),value:"none"}}},css:{selector:" .ecom-shopify__list-collections-media-wrapper",properties:{display:""}}},{type:"toggle",label:this.$t("disable_lazy_load"),name:"lazyload",value:!1,options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},css:{isCss:!1}},{type:"toggle",name:"show_title",label:this.$t("show_title"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"popup",name:"title_tag",label:this.$t("span_class_uppercase_html_span_tag"),value:"h2",options:{default:!1,preview:"title",type:"dropdown",values:{h1:"H1",h2:"H2",h3:"H3",h4:"H4",h5:"H5",h6:"H6",div:"DIV",p:"P"},visible:function(e){return e.show_title===!0}}},{type:"toggle",name:"show_description",label:this.$t("show_description"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},css:!1},{type:"number",name:"description_length",label:this.$t("maximum_words_to_show"),options:{min:5,max:200,slider:!1,visible:function(e){return e.show_description}}},{type:"toggle",name:"show_counter",label:this.$t("show_counter"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},css:!1},{name:"text_counter",type:"text",label:this.$t("counter"),placeholder:this.$t("products_count_item"),description:this.$t("example_products_count_item"),options:{visible:function(e){return e.show_counter===!0}}},{name:"text_counter_other",type:"text",label:this.$t("counter_many_items"),placeholder:this.$t("products_count_items"),description:this.$t("example_products_count_items"),options:{visible:function(e){return e.show_counter===!0}}},{type:"number",name:"item_row",label:this.$t("items_per_row"),options:{min:1,max:6,responsive:!0,visible:function(e){return e&&e.style!=="slider"}},css:{selector:" .ecom-shopify__collection-style-grid .ecom-shopify__list-collections",properties:{"grid-template-columns":"repeat(%value%,minmax(0,1fr))"}}},{name:"column_gap",label:this.$t("column_gap"),type:"number",options:{min:0,max:100,responsive:!0,visible:function(e){return e&&e.style!=="slider"}},css:{properties:{"column-gap":"%value%px"},selector:" .ecom-shopify__collection-style-grid .ecom-shopify__list-collections"}},{name:"row_gap",label:this.$t("row_gap"),type:"number",options:{min:0,max:100,responsive:!0,visible:function(e){return e&&e.style!=="slider"}},css:{properties:{"row-gap":"%value%px"},selector:" .ecom-shopify__collection-style-grid .ecom-shopify__list-collections"}}];return this.data.template==="list-collections"?(t.push({type:"number",name:"limit",label:this.$t("maximum_items_per_page"),options:{min:1,max:50}}),t=t.concat([{type:"line"},{type:"paragraph",content:"** "+this.$t("pagination")+" **"},{type:"popup",label:this.$t("pagination_layout"),name:"number_type",value:"dropdown",options:{type:"dropdown",default:!1,preview:"title",values:{text:this.$t("button_next_previous"),text_icon:this.$t("button_next_previous_with_icon"),icon:this.$t("icon")}},css:{isCss:!1}},{type:"text",name:"text_prev_page",label:this.$t("prev_page_text"),options:{visible:function(e){return e.number_type!=="icon"}}},{type:"text",name:"text_next_page",label:this.$t("next_page_text"),options:{visible:function(e){return e.number_type!=="icon"}}},{type:"number",name:"grid-column-gap",label:this.$t("spacing_between_page_number_span_class_lowercase_px_span"),options:{units:{px:{min:0,max:100}}},css:{selector:" .ecom-collection__pagination-navigation",properties:{"grid-column-gap":""}}}])):t.splice(0,0,{type:"dropdown",name:"source",label:this.$t("collection_source"),value:"collections",options:{default:!1,preview:"title",values:{collections:this.$t("specific_collections"),metafield:this.$t("from_metafield_of_current_collection"),menu:this.$t("from_shopify_menu")}}},{type:"toggle",name:"hide_collection_empty",label:this.$t("hide_empty_collections"),value:!1,options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"picker",name:"menu",label:this.$t("select_the_menu"),options:{type:"menu",multiple:!1,layout:"list",visible:function(e){return e.source==="menu"}}},{type:"picker",name:"collections",label:this.$t("select_the_collections_to_show"),options:{type:"collection",multiple:!0,visible:function(e){return e.source==="collections"}}},{type:"paragraph",name:"source_metafield",content:this.$t("this_feature_only_work_in_collection_page_learn_more_how_to_select_sub_collection"),options:{visible:function(e){return e.source==="metafield"}}},{type:"popup",label:this.$t("layout"),name:"style",value:"grid",options:{type:"dropdown",preview:"title",default:!1,values:{grid:this.$t("grid"),slider:this.$t("slider")}}},{type:"popup",name:"layout",label:this.$t("style"),value:"1",options:{type:"dropdown",preview:"title",default:!1,values:{1:this.$t("style")+" 1",2:this.$t("style")+" 2"}}},{type:"number",name:"limit",label:this.$t("how_many_items_to_show"),value:6,options:{min:1,max:50}}),[{group_title:this.$t("general"),params:t},{group_alias:"swiper",options:{options:{keep_data:!1,visible:e=>e.style=="slider"}},modify:{remove:{}}}]},image_ratio(){return this.data&&this.data.settings&&this.data.settings.image_ratio?this.data.settings.image_ratio:"adapt"},show_description(){return this.data&&this.data.settings&&"show_description"in this.data.settings?this.data.settings.show_description:!1},show_title(){return this.data&&this.data.settings&&"show_title"in this.data.settings?this.data.settings.show_title:!1},description_length(){return this.data&&this.data.settings&&this.data.settings.description_length?this.data.settings.description_length:12},limit(){return this.data&&this.data.settings&&"limit"in this.data.settings?this.data.settings.limit:12},styleLayout(){var t,e;return(t=this.data.settings)!=null&&t.style?(e=this.data.settings)==null?void 0:e.style:"grid"},optionSwiper(){return this.$helpers.optionSwiper(this.data.settings)},isNavigation(){var t,e;return((t=this.data.settings)==null?void 0:t.style)==="slider"&&((e=this.data.settings)==null?void 0:e.slider_navigation_layout)},sliderNav(){var t;return{position:((t=this.data.settings)==null?void 0:t.navigation_position)!=="center"?"unset":"absolute"}},isCombined(){var e,i;return((i=(e=this.data)==null?void 0:e.settings)==null?void 0:i.slider_navigation_layout)==="neo_full"?"combine":"classic"},javascript(){return function(){var t=this.$el&&this.$el.querySelector(".ecom-swiper-autoplay-toggle");if(t&&!t.getAttribute("data-ecom-bound")){t.setAttribute("data-ecom-bound","1");var e=this.$el.querySelector(".ecom-swiper-container");t.addEventListener("click",function(){var s=e&&e.swiper;!s||!s.autoplay||(s.autoplay.running?(s.autoplay.stop(),t.setAttribute("data-state","paused"),t.setAttribute("aria-label",t.getAttribute("data-label-play"))):(s.autoplay.start(),t.setAttribute("data-state","playing"),t.setAttribute("aria-label",t.getAttribute("data-label-pause"))))})}if(!this.$el)return;const i=this.$el;if(this.settings.style==="slider"){let s=i.querySelector(".ecom-swiper-container");if(!s)return;let l=window.EComposer&&typeof window.EComposer.normalizeSwiperSettings=="function"?window.EComposer.normalizeSwiperSettings(this.settings,{slider_spacing:25}):this.settings;const o=function(){var r;if(!(window.EComposer&&typeof window.EComposer.buildSwiperConfig=="function")){let p=0;const d=setInterval(function(){p++,window.EComposer&&typeof window.EComposer.buildSwiperConfig=="function"?(clearInterval(d),o()):p>=20&&clearInterval(d)},200);return}let n=window.EComposer.buildSwiperConfig(l,{slider_spacing:25}),c="bullets";l.slider_pagination_style==="progress"&&(c="progressbar"),n.pagination={el:i.querySelector(".ecom-swiper-pagination"),type:c,clickable:!0},n.navigation={nextEl:i.querySelector(".ecom-swiper-button-next"),prevEl:i.querySelector(".ecom-swiper-button-prev")},n.autoHeight=!1,n.spaceBetween=(r=l.slider_spacing)!=null?r:25,window.EComSwiper&&new window.EComSwiper(s,n)};o()}}},css(){return`
${this.$helpers.autoplayToggleCss()}
                .ecom-shopify__collection-container.ecom-shopify__collection-style-slider {
                    opacity: 0;
                    height: 0;
                    visibility: hidden;
                }
                .ecom-shopify__collection-container.ecom-shopify__collection-style-slider.ecom-swiper-initialized {
                    height: inherit;
                    opacity: 1;
                    visibility: visible;
                }
                .ecom-shopify__collection-wrapper .ecom-swiper-pagination:not(.ecom-swiper-pagination-progressbar) {
                    position: relative;
                }
                .ecom-element.ecom-shopify.ecom-shopify__collection-wrapper {
                    display: flex;
                    flex-direction: column;
                }
                .ecom-shopify__collection-wrapper .ecom-swiper-button:after {
                   content: '';
                }
                .ecom-shopify__collection-wrapper .ecom-swiper-button-prev, .ecom-shopify__collection-wrapper .ecom-swiper-button-next {
                    border: 0;
                    background: transparent;
                    width: auto;
                    height: auto;
                    padding: 5px;
                    color: #444;
                }
                .ecom-shopify__list-collections__empty {
                    display: flex;
                    align-items: center;
                }
                .ecom-shopify__collection-card {
                    width: 100%;
                    position: relative
                }

                .ecom-shopify__list-collections-media {
                    position: relative
                }

                .ecom-shopify__list-collections-media:not(.ecom-shopify__list-collections-media--custom) img {
                    position: absolute;
                    width: 100%;
                    height: 100% !important;
                    object-fit: cover;
                }

                .ecom-shopify__list-collections-media--portrait {
                    padding-bottom: 125%
                }

                .ecom-shopify__list-collections-media--square {
                    padding-bottom: 100%
                }

                .ecom-disabled {
                    pointer-events: none
                }

                .ecom-shopify__collection-card {
                    text-decoration: none;
                }

                .ecom-shopify__collection-card-title {
                    display: flex;
                    flex-flow: row;
                    vertical-align: middle;
                    align-items: center;
                    align-content: center;
                    text-align: center;
                    align-self: center;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .ecom-shopify__collection-style-grid .ecom-shopify__list-collections {
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    display: grid;
                    gap: 1rem;
                    list-style: none;
                }

                .ecom-shopify__collection-heading-title {
                    width: 100%;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    color: #111827;
                }

                .ecom-shopify__list-collections-media {
                    border-radius: 6px;
                    overflow: hidden;
                }

                .ecom-collection__pagination {
                    margin: auto;
                    text-align: center;
                }

                .ecom-collection__pagination li {
                    display: inline-flex;
                }

                .ecom-collection__pagination .ecom-collection__pagination--visuallyhidden {
                    display: none;
                }

                .ecom-collection__pagination-navigation svg {
                    width: 20px;
                    height: auto;
                    fill: rgb(156, 163, 175);
                }

                .ecom-paginate-action span {
                    display: flex;
                }

                .ecom-paginate-action {
                    display: inline-flex !important;
                    grid-column-gap: 12px;
                    align-items: center;
                    text-decoration: none;
                    color: inherit;
                }

                .ecom-collection__pagination-navigation {
                    display: flex;
                    justify-content: center;
                    padding-left: 0;
                    list-style: none;
                }
                .ecom-shopify__list-collections--item {
                    list-style: none;
                    overflow: hidden;
                }
                .ecom-collection__pagination-navigation li {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 1.4rem;
                    line-height: 20px;
                    text-align: center;
                    color: #6B7280;
                }

                .ecom-pagination-item a {
                    text-decoration: none;
                    color: unset;
                }

                .ecom-collection__pagination li .ecom-paginate-action {
                    padding: 16px 0 0
                }

                .ecom-pagination-item.ecom-button-active {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 1.4rem;
                    line-height: 20px;
                    text-align: center;
                    color: rgb(5, 150, 105);
                }

                .ecom-shopify__list-collections-media-wrapper {
                    display: flex;
                }

                .ecom-shopify__list-collections-media-wrapper .ecom-image-default {
                    width: 100%
                }
                .ecom-shopify__collection-layout-2 .ecom-shopify__collection-card-title {
                    position: absolute;
                    text-align: center;
                    width: 100%;
                    top: 50%;
                    padding: 0 5px;
                    -ms-transform: translateY(-50%);
                    -webkit-transform: translateY(-50%);
                    transform: translateY(-50%);
                    transition: .3s;
                    hyphens: auto;
                    z-index: 10;
                    -webkit-transition: .3s;
                    -moz-transition: .3s;
                    -o-transition: .3s;
                }
                .ecom-shopify__collection-layout-2 .ecom-shopify__collection-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background-color: #000;
                    opacity: .2;
                    pointer-events: none;
                    z-index: 5;
                    -webkit-transition: .6s ease-in-out;
                    -moz-transition: .6s ease-in-out;
                    -o-transition: .6s ease-in-out;
                    transition: .6s ease-in-out;
                }
                .ecom-shopify__collection-layout-2 .ecom-shopify__list-collections--item:hover .ecom-shopify__collection-card::before {
                    opacity: .5;
                }
                .ecom-shopify__collection-layout-2 .ecom-shopify__list-collections--item:hover .ecom-shopify__collection-card-title {
                    -webkit-transform: translateY(-15px);
                    -moz-transform: translateY(-15px);
                    -o-transform: translateY(-15px);
                    transform: translateY(-15px);
                }
                .ecom-shopify__collection-card-counter {
                    display: block;
                    width: 100%;
                }
                .ecom-shopify__collection-card-description {
                    margin: 0;
                }
            `},default(){return{settings:{image_ratio:"square",show_image:"flex",show_title:!0,show_description:!1,text_counter:" ({{products_count}} item)",text_counter_other:" ({{products_count}} items)",description_length:20,limit:12,text_prev_page:"Prev",text_next_page:"Next",item_row:4,column_gap:10,row_gap:30,number_type:"icon","grid-column-gap":"10px",show_counter:!0,slider_navigation_layout:"navigation",slider_items:4,slider_items__tablet:2,slider_items__mobile:1,navigation_position:"top_right",slider_prev_icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M176.1 103C181.7 107.7 184 113.8 184 120S181.7 132.3 176.1 136.1L81.94 232H488C501.3 232 512 242.8 512 256s-10.75 24-24 24H81.94l95.03 95.03c9.375 9.375 9.375 24.56 0 33.94s-24.56 9.375-33.94 0l-136-136c-9.375-9.375-9.375-24.56 0-33.94l136-136C152.4 93.66 167.6 93.66 176.1 103z"></path></svg>',slider_next_icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M335 408.1C330.3 404.3 328 398.2 328 392s2.344-12.28 7.031-16.97L430.1 280H24C10.75 280 0 269.2 0 255.1C0 242.7 10.75 232 24 232h406.1l-95.03-95.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l136 136c9.375 9.375 9.375 24.56 0 33.94l-136 136C359.6 418.3 344.4 418.3 335 408.1z"></path></svg>',lazyload:!1,title_tag:"h2"},style:{collection_image:{imageBorderRadiusnormalmode:{top:"0px",left:"0px",bottom:"0px",right:"0px"},imageOpacitynormalmode:1,imageOpacityhovermode:1,tab:"normal"},title:{textTextAlign:"center",spacing:{margin:{top:"10px"}},tab:"normal",textColornormalmode:"#000000",textTypography:{"font-weight":"600","font-size":"14px"}},pagination:{"justify-content":"center",buttonColornormalmode:"#111827",buttonBackgroundnormalmode:{classic:{"background-color":"rgba(17, 24, 39, 0.1)"}},buttonColorhovermode:"#111827",buttonBackgroundhovermode:{classic:{"background-color":"rgba(17, 24, 39, 0.2)"}},buttonColoractivemode:"#ffffff",buttonBackgroundactivemode:{classic:{"background-color":"#111827"}},spacing:{padding:{left:"20px",top:"10px",bottom:"10px",right:"20px"},margin:{top:"30px",left:"0px",bottom:"0px",right:"0px"}}},counter:{spacing:{margin:{top:"10px",left:"5px"}},textColor:"#8c8888"},collection_card:{boxShadow:{"box-shadow":{blur:"2px",position:"outline",color:"#ebebeb",spread:"1px"}},boxBorderRadius:{right:"5px",top:"5px",left:"5px",bottom:"5px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"},flow:"column-reverse"},slider_arrow:{navtab:"normal",tab:"normal",navigatorFontSize:"20px",navigatorPrimaryColornormalmode:"#292424",navigatorBackgroundnormalmode:{classic:{"background-color":"rgba(255, 255, 255, 0.63)"}},navigatorPrimaryColorhovermode:"#000000",navigatorBackgroundhovermode:{classic:{"background-color":"rgba(255, 255, 255, 0.65)"}},navigatorBorderRadiushovermode:{right:"0px",top:"0px",left:"0px",bottom:"0px"},navigatorBorderRadiusnormalmode:{top:"0px",left:"0px",bottom:"0px",right:"0px"},navigatorBordernormalmode:{"border-style":"none"},paginationWidth:"20px",paginationHeight:"20px",panigationSpacing:{margin:{right:"5px"}},panigationColornormalmode:"#575757",panigationColorhovermode:"#852222",panigationColoractivemode:"#8f3b3b",navigatorSpacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}},description:{textTypography:{"font-size":"12px"},textColor:"#333",textTextAlign:"center",spacing:{margin:{bottom:"0px"}}}}}}},methods:{isArrow(){var t;return["neo_full","navigation","classic_full"].includes((t=this.data.settings)==null?void 0:t.slider_navigation_layout)},isPagination(){var t,e,i;return((t=this.data.settings)==null?void 0:t.slider_navigation_layout)==="neo_full"||((e=this.data.settings)==null?void 0:e.slider_navigation_layout)==="classic_full"||((i=this.data.settings)==null?void 0:i.slider_navigation_layout)==="pagination"},style(){var e;let t=[{group_alias:"box",options:{group_title:this.$t("items"),group_name:"collection_card",selector:" .ecom-shopify__list-collections--item"},modify:{params:{position:20,fields:[{type:"dimension",label:this.$t("padding"),name:"padding",options:{units:"default",simple:!0}},{type:"line",liteMode:!0},{type:"paragraph",content:"#### "+this.$t("collection_information"),liteMode:!0},{type:"popup",label:this.$t("layout_flow"),name:"flow",liteMode:!0,options:{type:"dropdown",preview:"title",values:{row:this.$t("row"),column:this.$t("column"),"column-reverse":this.$t("column_reverse"),"row-reverse":this.$t("row_reverse")}},css:{selector:" .ecom-shopify__collection-card-title",properties:{"flex-flow":""}}}]}}},{group_alias:"image",options:{group_name:"collection_image",group_title:this.$t("image"),selector:" .ecom-image-default"},modify:{params:{position:3,fields:{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:"root .ecom-shopify__list-collections-media-wrapper"}}}}}},this.data.settings.show_title?{group_alias:"text:hover",options:{group_name:"title",group_title:this.$t("title"),selector:" .ecom-shopify__collection-heading-title"},modify:{params:[{position:20,fields:{alias:"spacing",options:{label:this.$t("spacing")}}}]}}:null,this.data.settings.show_description?{group_alias:"text",options:{group_name:"description",group_title:this.$t("description"),selector:" .ecom-shopify__collection-card-description"},modify:{params:{position:20,fields:{alias:"spacing",options:{label:this.$t("spacing")}}}}}:null,this.data.settings.show_counter&&this.data.settings.text_counter?{group_alias:"text",options:{group_name:"counter",group_title:this.$t("counter"),selector:" .ecom-shopify__collection-card-counter"},modify:{params:{position:20,fields:{alias:"spacing",options:{label:this.$t("spacing")}}}}}:null].filter(i=>i);if(this.data.settings.style==="slider"){let i=[];this.isArrow()&&i.push({title:this.$t("navigator"),type:"swiper:nav"}),this.isPagination()&&this.data.settings.slider_pagination_style!="progress"&&i.push({title:this.$t("pagination"),type:"swiper:pagination"});let s={};this.isCombined==="combine"&&(s={visible:[!0,null].includes(this.active_child_elenent),params:[{alias:"spacing",options:{label:this.$t("spacing"),name:"spacingNavigation",css:{selector:" .ecom-swiper-navigation"}}},{type:"line"}],remove:{name:"justify-content"}}),this.$helpers.hasAutoplayToggle((e=this.data)==null?void 0:e.settings)&&t.push({group_alias:"swiper:autoplay",options:{group_title:this.$t("pause_button"),selector:" .ecom-shopify__collection"}}),i.length&&(this.data.settings.slider_pagination_style==="progress"&&this.isPagination()&&(s.params=[{position:50,fields:[{type:"line"},{type:"paragraph",content:this.$t("b_pagination")},{type:"number",name:"widthProgress",label:this.$t("width"),options:{units:{"%":{min:1,max:100}}},css:{selector:" .ecom-swiper-pagination.ecom-swiper-pagination-progressbar.ecom-swiper-pagination-horizontal",important:!0,properties:{width:""}}},{type:"number",name:"sizeProgress",label:this.$t("height"),options:{units:{px:{min:1,max:50}}},css:{selector:" .ecom-swiper-pagination-progressbar",properties:{"--ecom-swiper-pagination-progressbar-size":""}}},{type:"color",name:"progress",label:this.$t("progress"),options:{global:{type:"colors"},oneline:!0},css:{selector:" .ecom-swiper-pagination-progressbar-fill",properties:{"background-color":""}}},{type:"color",name:"track",label:this.$t("track"),options:{global:{type:"colors"},oneline:!0},css:{selector:" .ecom-swiper-pagination-progressbar",properties:{"background-color":""}}},{alias:"spacing",options:{name:"spacingPaginationProgress",css:{selector:" .ecom-swiper-pagination-position.ecom-swiper-pagination-progressbar"}}}]}]),t.push({group_alias:i,visible:[!0,null].includes(this.active_child_elenent),options:{group_title:this.$t("navigation"),group_name:"slider_arrow",selector:" .ecom-shopify__collection"},modify:s}))}return this.data.template==="list-collections"&&t.push({group_alias:"button:active",options:{group_title:this.$t("pagination"),group_name:"pagination",selector:" .ecom-collection__pagination-navigation li"},modify:{params:{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:"root .ecom-collection__pagination-navigation"}}}}}),t}},watch:{"data.settings.collections":{handler(t){this._debouncedCollectionsTimmer&&clearTimeout(this._debouncedCollectionsTimmer),this._debouncedCollectionsTimmer=setTimeout(()=>{this.collectionHandles=(t||[]).map(e=>e==null?void 0:e.value).filter(Boolean)},500)},deep:!0}},mounted(){}},M={class:"ecom-element ecom-shopify ecom-shopify__collection ecom-swiper-a11y-host"},T=["data-position"],E={class:"ecom-element ecom-shopify ecom-shopify__collection-wrapper"},L=["innerHTML"],j=["data-navigator-type"],q={class:"ecom-flex-center"},A=["innerHTML"],P={class:"ecom-swiper-pagination"},N=["innerHTML"],Y={key:1,class:"ecom-swiper-navigation-position"},D=["innerHTML"],I=["innerHTML"],W={key:2,class:"ecom-swiper-pagination-position ecom-swiper-pagination",style:{"--ecom-swiper-pagination-bullet-inactive-opacity":"1"}};function R(t,e,i,s,l,o){var n,c,r,p,d;return h(),f("div",M,[t.$helpers.hasAutoplayToggle(i.data.settings)?(h(),f("button",{key:0,type:"button",class:"ecom-swiper-autoplay-toggle","data-position":((n=i.data.settings)==null?void 0:n.a11y_autoplay_control_position)||"bottom-right","data-state":"playing","data-label-pause":"Pause automatic slide show","data-label-play":"Start automatic slide show","aria-label":"Pause automatic slide show"},e[0]||(e[0]=[a("svg",{class:"ecom-swiper-autoplay-toggle__pause",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},[a("path",{d:"M8 5h3v14H8zM13 5h3v14h-3z"})],-1),a("svg",{class:"ecom-swiper-autoplay-toggle__play",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},[a("path",{d:"M8 5v14l11-7z"})],-1)]),8,T)):w("",!0),a("div",E,[a("div",{class:B(["ecom-element ecom-shopify ecom-shopify__collection-container",[{"ecom-swiper-container":i.data.settings.style==="slider"},"ecom-shopify__collection-style-"+o.styleLayout,"ecom-shopify__collection-layout-"+((c=i.data.settings)==null?void 0:c.layout)]]),innerHTML:t.liquid("collections")},null,10,L),o.isNavigation&&o.isCombined=="combine"?(h(),f("div",{key:0,class:"ecom-swiper-navigation","data-navigator-type":o.isCombined=="combine"},[a("div",q,[y(a("button",{class:"ecom-swiper-button ecom-swiper-button-prev",innerHTML:i.data.settings.slider_prev_icon},null,8,A),[[v,o.isArrow()]]),y(a("div",P,null,512),[[v,o.isPagination()]]),y(a("button",{class:"ecom-swiper-button ecom-swiper-button-next",innerHTML:(r=i.data.settings)==null?void 0:r.slider_next_icon},null,8,N),[[v,o.isArrow()]])])],8,j)):w("",!0),o.isNavigation&&o.isCombined!="combine"?y((h(),f("div",Y,[a("button",{style:$(o.sliderNav),class:"ecom-swiper-button ecom-swiper-button-prev",innerHTML:(p=i.data.settings)==null?void 0:p.slider_prev_icon},null,12,D),a("button",{style:$(o.sliderNav),class:"ecom-swiper-button ecom-swiper-button-next",innerHTML:(d=i.data.settings)==null?void 0:d.slider_next_icon},null,12,I)],512)),[[v,o.isArrow()]]):w("",!0),o.isNavigation&&o.isCombined!="combine"?y((h(),f("div",W,null,512)),[[v,o.isPagination()]]):w("",!0)])])}const Q=C(k,[["render",R]]);k.__docgenInfo={exportName:"default",displayName:"ShopifyCollection",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Shopify/Collection.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{Q as default};
//# sourceMappingURL=Collection.e4972f77.js.map
