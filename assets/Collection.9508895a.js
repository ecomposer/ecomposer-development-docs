import{_ as c,L as r,E as p}from"./preview.a124abb8.js";import{o as m,a as d,x as l,u}from"./vue.esm-bundler.7f444806.js";import"./chunk-2GDW2BFM.5cb4ba43.js";import"./index.e850844b.js";import"./iframe.c85ce8d3.js";import"../sb-preview/runtime.js";const a={name:"ShopifyCollection",presets:!0,mixins:[r,p],props:{data:{type:Object,default(){return{}}}},computed:{assign_collections(){var t;return this.data.template==="list-collections"&&this.data.settings.source!=="menu"?`
                        {% capture limit%}${this.limit}{%endcapture%}
                        {%- assign limit = limit | plus: 0 -%}
                        {%- paginate collections by limit -%}
                        <ul class="ecom-shopify__list-collections" role="list">
                            {%- for collection_item in collections -%}

                    `:`
                    <ul class="ecom-shopify__list-collections" role="list">
                        ${this.data.settings&&this.data.settings.source==="collections"&&this.collections.length?`
                            {% capture handles  %}${this.collections.map(e=>e.value).join(",")}{% endcapture %}
                            {% assign handles = handles | split: ','%}
                            {% for handle in handles %}
                                {% assign collection_item = collections[handle] %}
                                {%- if collection_item == empty -%}{% continue %}{%- endif -%}
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


                            `:`
                            ${(t=this.data.settings)!=null&&t.menu?`
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
                            `:`
                                {% comment %} not metafield{% endcomment %}
                                {%- for collection_item in collections  limit: limit  -%}
                            `}

                            `}

                        `}

                `},liquids(){var t,e,o,i,n;return{collections:{code:`
                            {% capture limit%}${this.limit}{%endcapture%}
                            {% assign limit = limit | plus: 0 %}
                            {% capture image_ratio%}${this.image_ratio}{% endcapture %}
                            {% capture description_length %}${this.description_length}{% endcapture %}
                            {% assign description_length = description_length | plus: 0 %}
                                ${this.assign_collections}
                                {% assign collection_image = collection_item.image %}
                                {% unless  collection_image   %}
                                    {% if collection_item.all_products_count > 0 %}
                                        {% assign collection_image = collection_item.products.first.featured_image %}
                                    {% endif %}
                                {% endunless %}
                                <li class="ecom-shopify__list-collections--item {% unless  collection_image  %}ecom-shopify__list-collections__empty{% endunless %} ">
                                    <a href="{{ collection_item.url }}" class="ecom-shopify__collection-card{% if collection_image != blank %} ecom-shopify__collection-card--media{% else %}{% if image_ratio != 'adapt' %} ecom-card--stretch{% endif %}{% endif %}{% unless section.settings.image_padding %} ecom-card--light-border{% endunless %}"
                                    >
                                    <div class="ecom-shopify__collection-card ">
                                        {%- if collection_image != blank -%}
                                        <div class="ecom-shopify__list-collections-media-wrapper">
                                            <div class="ecom-image-default ecom-shopify__list-collections-media ecom-shopify__list-collections-media--{{ image_ratio }} ecom-shopify__list-collections-media--hover-effect ecom-shopify__list-collections-overflow-hidden"
                                                {% if image_ratio == 'adapt' %}style="padding-bottom: {{ 1 | divided_by: collection_image.aspect_ratio | times: 100 }}%;"{% endif %}>
                                                <img srcset="{%- if collection_image.width >= 165 -%}{{collection_image| img_url: '165x' }} 165w,{%- endif -%}
                                                    {%- if collection_image.width >= 360 -%}{{ collection_image | img_url: '360x' }} 360w,{%- endif -%}
                                                    {%- if collection_image.width >= 535 -%}{{ collection_image | img_url: '535x' }} 535w,{%- endif -%}
                                                    {%- if collection_image.width >= 720 -%}{{ collection_image | img_url: '720x' }} 720w,{%- endif -%}
                                                    {%- if collection_image.width >= 940 -%}{{ collection_image | img_url: '940x' }} 940w,{%- endif -%}
                                                    {%- if collection_image.width >= 1070 -%}{{ collection_image | img_url: '1070x' }} 1070w{%- endif -%}"
                                                    src="{{ collection_image | img_url: '533x' }}"
                                                    sizes="(min-width: 1100px) 358px, (min-width: 750px) calc((100vw - 130px) / 3), calc(100vw - 30px)"
                                                    alt="{{ collection.title | escape }}"
                                                    height="{{collection_image.height }}"
                                                    width="{{ collection_image.width }}"
                                                    loading="lazy"
                                                >
                                            </div>
                                            </div>

                                            <div class="ecom-shopify__collection-card-title">
                                                 ${this.show_title?'<h2 class="ecom-shopify__collection-heading-title">{{- collection_item.title -}}</h2>  ':""}
                                                 ${(t=this.data.settings)!=null&&t.show_counter?`<span class="ecom-shopify__collection-card-counter">
                                                    {% assign products_count = collection_item.all_products_count%}
                                                    {% if products_count == 1%}
                                                        ${this.lang((e=this.data.settings)==null?void 0:e.text_counter,"text_counter",{products_count:"products_count"})}
                                                    {% else %}
                                                        ${this.lang((o=this.data.settings)==null?void 0:o.text_counter_other,"text_counter_other",{products_count:"products_count"})}
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
                                                    <h2 class="ecom-shopify__collection-heading-title">
                                                            {{- collection_item.title -}}
                                                        </h2>
                                                `:""}
                                                ${(i=this.data.settings)!=null&&i.show_counter?`<span class="ecom-shopify__collection-card-counter">
                                                    {% assign products_count = collection_item.all_products_count%}
                                                    ${this.lang((n=this.data.settings)==null?void 0:n.text_counter,"text_counter",{products_count:"products_count"})}
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
                                </li>
                                {%- endfor -%}
                            </ul>
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
                        `}}},settings(){let t=[{type:"popup",label:"Image ratio",name:"image_ratio",value:"adapt",options:{type:"dropdown",icon_type:"percent",values:{adapt:"Adapt to image",portrait:"Portrait",square:"Square",custom:"Custom width & height"}}},{type:"toggle",name:"show_image",label:"Show image",options:{values:{on:{label:"Yes",value:"flex"},off:{label:"No",value:"none"}}},css:{selector:" .ecom-shopify__list-collections-media-wrapper",properties:{display:""}}},{type:"toggle",name:"show_title",label:"Show title",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"toggle",name:"show_description",label:"Show description",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},css:!1},{type:"toggle",name:"show_counter",label:"Show counter",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},css:!1},{name:"text_counter",type:"text",label:"Counter",placeholder:"{{products_count}} item",description:"Example: {{products_count}} item"},{name:"text_counter_other",type:"text",label:"Counter many items",placeholder:"{{products_count}} items",description:"Example: {{products_count}} items"},{type:"number",name:"description_length",label:"Maximum words to show",options:{min:5,max:200,slider:!1,visible:function(e){return e.show_description}}},{type:"number",name:"item_row",label:"Items per row",options:{min:1,max:6,responsive:!0},css:{selector:" ul.ecom-shopify__list-collections",properties:{"grid-template-columns":"repeat(%value%,minmax(0,1fr))"}}},{name:"column_gap",label:"Column gap",type:"number",options:{min:0,max:100,responsive:!0},css:{properties:{"column-gap":"%value%px"},selector:" .ecom-shopify__list-collections"}},{name:"row_gap",label:"Row gap",type:"number",options:{min:0,max:100,responsive:!0},css:{properties:{"row-gap":"%value%px"},selector:" .ecom-shopify__list-collections"}}];return this.data.template==="list-collections"?(t.push({type:"number",name:"limit",label:"Maximum items per page",options:{min:1,max:50}}),t=t.concat([{type:"line"},{type:"paragraph",content:"** Pagination **"},{type:"popup",label:"Pagination layout",name:"number_type",value:"dropdown",options:{type:"dropdown",default:!1,values:{text:"Button next & previous",text_icon:"Button Next & Previous with icon",icon:"Icon"}},css:{isCss:!1}},{type:"text",name:"text_prev_page",label:"Prev page text",options:{visible:function(e){return e.number_type!=="icon"}}},{type:"text",name:"text_next_page",label:"Next page text",options:{visible:function(e){return e.number_type!=="icon"}}},{type:"number",name:"grid-column-gap",label:'Spacing between page number **<span class="lowercase">(px)</span>**',options:{units:{px:{min:0,max:100}}},css:{selector:" .ecom-collection__pagination-navigation",properties:{"grid-column-gap":""}}}])):t.splice(0,0,{type:"dropdown",name:"source",label:"Collection source",value:"collections",options:{default:!1,values:{collections:"Specific collections",metafield:"From metafield of current collection",menu:"From Shopify menu"}}},{type:"picker",name:"menu",label:"Select the menu",options:{type:"menu",multiple:!1,layout:"list",visible:function(e){return e.source==="menu"}}},{type:"picker",name:"collections",label:"Select the collections to show",options:{type:"collection",multiple:!0,visible:function(e){return e.source==="collections"}}},{type:"paragraph",name:"source_metafield",content:"This feature only work in collection page. Learn more how to select sub collection [here](https://help.ecomposer.io/docs/elements/shopify-elements/collections/)",options:{visible:function(e){return e.source==="metafield"}}},{type:"popup",name:"layout",label:"Layout",value:"1",options:{type:"dropdown",preview:"title",default:!1,values:{1:"Layout 1",2:"Layout 2"}}},{type:"number",name:"limit",label:"How many items to show",value:6,options:{min:1,max:20}}),[{params:t}]},image_ratio(){return this.data&&this.data.settings&&this.data.settings.image_ratio?this.data.settings.image_ratio:"adapt"},show_description(){return this.data&&this.data.settings&&"show_description"in this.data.settings?this.data.settings.show_description:!1},show_title(){return this.data&&this.data.settings&&"show_title"in this.data.settings?this.data.settings.show_title:!1},description_length(){return this.data&&this.data.settings&&this.data.settings.description_length?this.data.settings.description_length:12},limit(){return this.data&&this.data.settings&&"limit"in this.data.settings?this.data.settings.limit:12},collections(){return this.data.settings&&this.data.settings.collections?this.data.settings.collections:[]},css(){return`
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

                ul.ecom-shopify__list-collections {
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    display: grid;
                    gap: 1rem;
                    list-style: none;
                }

                .ecom-shopify__collection-heading-title {
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
            `},default(){return{settings:{image_ratio:"square",show_image:"flex",show_title:!0,show_description:!1,text_counter:" ({{products_count}} item)",text_counter_other:" ({{products_count}} items)",description_length:20,limit:12,text_prev_page:"Prev",text_next_page:"Next",item_row:4,column_gap:10,row_gap:30,number_type:"icon","grid-column-gap":"10px",show_counter:!0},style:{collection_image:{imageBorderRadiusnormalmode:{top:"0px",left:"0px",bottom:"0px",right:"0px"},imageOpacitynormalmode:1,imageOpacityhovermode:1,tab:"normal"},title:{textTextAlign:"center",spacing:{margin:{top:"10px"}},tab:"normal",textColornormalmode:"#000000",textTypography:{"font-weight":"600","font-size":"14px"}},pagination:{"justify-content":"center",buttonColornormalmode:"#111827",buttonBackgroundnormalmode:{classic:{"background-color":"rgba(17, 24, 39, 0.1)"}},buttonColorhovermode:"#111827",buttonBackgroundhovermode:{classic:{"background-color":"rgba(17, 24, 39, 0.2)"}},buttonColoractivemode:"#ffffff",buttonBackgroundactivemode:{classic:{"background-color":"#111827"}},spacing:{padding:{left:"20px",top:"10px",bottom:"10px",right:"20px"},margin:{top:"30px",left:"0px",bottom:"0px",right:"0px"}}},counter:{spacing:{margin:{top:"10px",left:"5px"}},textColor:"#8c8888"},collection_card:{boxShadow:{"box-shadow":{blur:"2px",position:"outline",color:"#ebebeb",spread:"1px"}},boxBorderRadius:{right:"5px",top:"5px",left:"5px",bottom:"5px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"},flow:"column-reverse"}}}}},methods:{style(){let t=[{group_alias:"box",options:{group_title:"Items",group_name:"collection_card",selector:" .ecom-shopify__list-collections--item"},modify:{params:{position:20,fields:[{type:"dimension",label:"Padding",name:"padding",options:{units:"default",simple:!0}},{type:"line"},{type:"paragraph",content:"#### Collection information"},{type:"popup",label:"Layout flow",name:"flow",options:{type:"dropdown",values:{row:"Row",column:"Column","column-reverse":"Column reverse","row-reverse":"Row reverse"}},css:{selector:" .ecom-shopify__collection-card-title",properties:{"flex-flow":""}}}]}}},{group_alias:"image",options:{group_name:"collection_image",group_title:"Image",selector:" .ecom-image-default"},modify:{params:{position:3,fields:{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-shopify__list-collections-media-wrapper"}}}}}},this.data.settings.show_title?{group_alias:"text:hover",options:{group_name:"title",group_title:"Title",selector:" .ecom-shopify__collection-heading-title"},modify:{params:[{position:20,fields:{alias:"spacing"}}]}}:null,this.data.settings.show_description?{group_alias:"text",options:{group_name:"description",group_title:"Description",selector:" .ecom-shopify__collection-card-description"},modify:{params:{position:20,fields:{alias:"spacing"}}}}:null,this.data.settings.show_counter&&this.data.settings.text_counter?{group_alias:"text",options:{group_name:"counter",group_title:"Counter",selector:" .ecom-shopify__collection-card-counter"},modify:{params:{position:20,fields:{alias:"spacing"}}}}:null].filter(e=>e);return this.data.template==="list-collections"&&t.push({group_alias:"button:active",options:{group_title:"Pagination",group_name:"pagination",selector:" .ecom-collection__pagination-navigation li"},modify:{params:{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-collection__pagination-navigation"}}}}}),t}},mounted(){}},_={class:"ecom-element ecom-shopify ecom-shopify__collection"},g={class:"ecom-element ecom-shopify ecom-shopify__collection-wrapper"},h=["innerHTML"];function f(t,e,o,i,n,y){var s;return m(),d("div",_,[l("div",g,[l("div",{class:u(["ecom-element ecom-shopify ecom-shopify__collection-container","ecom-shopify__collection-layout-"+((s=o.data.settings)==null?void 0:s.layout)]),innerHTML:t.liquid("collections")},null,10,h)])])}const C=c(a,[["render",f]]);a.__docgenInfo={exportName:"default",displayName:"ShopifyCollection",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Shopify/Collection.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{C as default};
//# sourceMappingURL=Collection.9508895a.js.map
