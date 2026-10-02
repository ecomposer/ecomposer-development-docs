import{_ as Ee,L as Ne,E as Pe,J as Fe}from"./preview.95a7df14.js";import{o as h,a as u,y as c,E as C,F as He,J as y,L as v,I as qe}from"./vue.esm-bundler.b9dec9d9.js";import"./chunk-KSYMO6G6.f719e32d.js";import"./index.e850844b.js";import"./iframe.048ad53f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.f037b798.js";const Me={name:"BlogFeatured",mixins:[Ne,Pe,Fe],vendors:["slider_js","slider_css"],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["layout"]}},computed:{csrContext(){var t,a;if(!this.canUseCustomLiquidForCSR||((t=this==null?void 0:this.data)==null?void 0:t.template)!=="featured")return;const i=(a=this.data.settings)==null?void 0:a.blog;return{type:"blogs",handles:typeof(i==null?void 0:i.value)=="string"&&i.value.trim()!==""?[i.value]:Array.isArray(i)?i.map(l=>l.value).filter(Boolean):null}},articles(){return this.data},attributes(){return this.data.settings&&this.data.settings.attributes?this.data.settings.attributes:[]},isNavigation(){var i,o;return((i=this.data.settings)==null?void 0:i.layout)==="slider"&&((o=this.data.settings)==null?void 0:o.slider_navigation_layout)},isCombined(){var o,t;return((t=(o=this.data)==null?void 0:o.settings)==null?void 0:t.slider_navigation_layout)==="neo_full"?"combine":"classic"},sliderNav(){return this.data.settings.navigation_position__tablet||(this.data.settings.navigation_position__tablet=this.data.settings.navigation_position),this.data.settings.navigation_position__mobile||(this.data.settings.navigation_position__mobile=this.data.settings.navigation_position),{"--ecom-position":this.data.settings.navigation_position!=="center"?"unset":"absolute","--ecom-position__tablet":this.data.settings.navigation_position__tablet!=="center"?"unset":"absolute","--ecom-position__mobile":this.data.settings.navigation_position__mobile!=="center"?"unset":"absolute"}},css(){return`
${this.$helpers.autoplayToggleCss()}

                    .ecom-shopify__blog--post-informations {
                        display: inline-flex;
                        align-items: center;
                        gap: 5px;
                    }
                    .ecom-shopify__blog--post-informations-icon {
                        display: flex;
                    }
                    .ecom-shopify__blog--post-informations-icon svg {
                        width: 16px;
                        height: 16px;
                    }
                    .ecom-swiper-pagination-bullet:only-child {
                        opacity: none
                    }
                    .ecom-flex-center, .ecom-swiper-navigation {
                        display: flex;
                        align-items: center;
                    }
                    .ecom-swiper-navigation{
                        justify-content: center
                    }
                    .ecom-shopify__blog--post-informations-author-avatar {
                        width: 50px;
                    }
                    .ecom-swiper-navigation[data-navigator-type="combine"]{
                        justify-content: center
                    }
                    .ecom-shopify__blog--post-thumbnail {
                        display: flex;
                        position: relative;
                        overflow: hidden;
                    }

                    .ecom-shopify__blog--post-thumbnail img{
                            object-fit: cover;
                            display: block;
                            max-width: 100%;
                            top: 0;
                            left: 0;
                            height: 100% !important;
                            width: 100%;
                    }
                    .ecom-shopify__blog--post-tags ul li{
                        display:inline-flex;
                    }
                    .ecom-shopify__blog--post-tags ul {
                        display: flex;
                        flex-wrap:wrap;
                        gap: 12px;
                        margin: 0;
                        padding: 0;
                    }
                    /*.ecom-shoify__blog-pagination {
                        margin: 0;
                        padding: 0;
                        text-align: center;
                        list-style-type: none;
                        display: flex;
                        justify-content: center;
                        gap: 24px;
                        align-items: center;
                        margin-top: 32px;
                        color: #000;
                    }*/

                    .ecom-collection__pagination-navigation{
                        list-style: none;
                        display: flex;
                        gap: 10px;
                        justify-content: center;
                    }
                    .ecom-collection__pagination-navigation li a {
                        color: inherit;
                    }
                    .ecom-paginate-action {
                        display:flex;
                        gap:5px;
                    }
                    .ecom-prev,
                    .ecom-next,
                    .ecom-prev span,
                    .ecom-next span{
                        display:flex;
                    }
                    .ecom-paginate-action svg{
                        width:24px;
                        height:24px;
                    }
                    .ecom-shopify__blog--post-link{
                        text-decoration:none;
                        width:100%;
                        display:flex;
                    }
                    .ecom-pagination-item {
                        display: flex;
                    }
                    a.ecom-pagination-item:not(.ecom-paginate-action) {
                        text-decoration:inherit
                    }
                    .ecom-paginate-action{
                        text-decoration:none
                    }
                    .ecom-pagination-item.ecom-button-active{
                        pointer-events:none;
                    }
                    .ecom-swiper-controls:after
                    {
                        content:'';
                        display:none
                    }
                    .ecom-shopify__blog-wrapper {
                        display: flex;
                        flex-direction: column;
                    }
                    .ecom-shopify__blog-wrapper .ecom-shopify__blog-container{
                        width: 100%
                    }
                    .ecom-shopify__blog--posts.ecom-swiper-wrapper {
                        display: flex;
                        gap: 0;
                    }
                    .ecom-shopify__blog-wrapper .ecom-swiper-button-next:after,
                    .ecom-shopify__blog-wrapper .ecom-swiper-button-prev:after {
                        content: none;
                    }
                    .ecom-shopify__blog-wrapper .ecom-swiper-navigation[data-navigator-type="combine"] .ecom-swiper-button-next,
                    .ecom-shopify__blog-wrapper .ecom-swiper-navigation[data-navigator-type="combine"] .ecom-swiper-button-prev {
                        position: static;
                        margin: 0;
                    }
                    .ecom-shopify__blog-wrapper .ecom-swiper-button-next,
                    .ecom-shopify__blog-wrapper .ecom-swiper-button-prev {
                        border: 0;
                        background: transparent;
                        width: auto;
                        height: auto;
                        padding: 5px;
                        color: #444;
                    }
                    .ecom-swiper-navigation-position .ecom-swiper-button {
                        position: var(--ecom-position);
                    }
                    .ecom-swiper-navigation-position {
                        display: flex;
                    }
                    .ecom-swiper-navigation-position button {
                        margin: 0;
                    }
                    .ecom-shopify__blog-wrapper .ecom-swiper-pagination:not(.ecom-swiper-pagination-progressbar) {
                        position: relative;
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center
                    }
                    .ecom-swiper-container-horizontal>.ecom-swiper-pagination-bullets{
                        width:auto;
                    }
                    .ecom-shopify__blog--post-title {
                        font-size: inherit;
                    }

                    .ecom-shopify__blog--post-link img{
                        object-fit: cover;
                        max-width: 100%;
                        object-position: center center;
                        transition: opacity .4s cubic-bezier(.25, .46, .45, .94);
                    }
                    .ecom-shopify__blog--post-group-4 {
                        flex-wrap: wrap;
                    }
                    .ecom-shopify__blog--post-group-4 > *{
                        display: inline-flex;
                        align-items: center;
                    }
                    .ecom-swiper-pagination-bullet{
                        opacity:1 !important;
                    }
                    .ecom-swiper-pagination-bullets.ecom-swiper-pagination{
                        display:flex;
                        width:100%;
                    }
                    .ecom-shopify__blog--post-link h2{
                        width:100%;
                    }
                    .ecom-shopify__blog--post.ecom-shopify__blog-vertical {
                        display: flex;
                        gap: 15px;
                    }
                    @media (max-width: 1023px) and (min-width: 768px) {
                        .ecom-swiper-navigation-position .ecom-swiper-button {
                            position: var(--ecom-position__tablet);
                        }
                    }
                    @media (max-width: 767px) {
                        .ecom-shopify__blog--post.ecom-shopify__blog-vertical {
                            flex-direction: column;
                        }
                        .ecom-shopify__blog--post .ecom-shopify__blog--post-thumbnail--img {
                            order: 0 !important;
                        }
                        .ecom-swiper-navigation-position .ecom-swiper-button {
                            position: var(--ecom-position__mobile);
                        }
                    }
                    .ecom-doing-load-blog .ecom-shopify__blog-container{
                        display: none;
                    }
                    .ecom-doing-load-blog .ecom-collection__product-loading{
                        display: block;
                    }
                    .ecom-shopify__blog--empty-text {
                        width: 100%;
                        padding: 20px;
                    }
                    .ecom-shopify__blog--posts.ecom-grid > .code-placeholder,
                    .ecom-shopify__blog--posts.ecom-grid > .ecom-shopify__blog--empty-text {
                        grid-column: 1 / -1;
                        width: 100%;
                    }
                    `},javascript(){return function(){var i=this.$el&&this.$el.querySelector(".ecom-swiper-autoplay-toggle");if(i&&!i.getAttribute("data-ecom-bound")){i.setAttribute("data-ecom-bound","1");var o=this.$el.querySelector(".ecom-swiper-container");i.addEventListener("click",function(){var t=o&&o.swiper;!t||!t.autoplay||(t.autoplay.running?(t.autoplay.stop(),i.setAttribute("data-state","paused"),i.setAttribute("aria-label",i.getAttribute("data-label-play"))):(t.autoplay.start(),i.setAttribute("data-state","playing"),i.setAttribute("aria-label",i.getAttribute("data-label-pause"))))})}if(this.settings.layout==="slider"){let t=this.$el,a=this.isLive,l="bullets";if(this.settings.slider_pagination_style==="progress"&&(l="progressbar"),!t)return;let s=t.querySelector(".ecom-shopify__blog-container");if(!s)return;const g=this.settings,e=function(){if(!(window.EComposer&&typeof window.EComposer.buildSwiperConfig=="function")){let p=0;const r=setInterval(function(){p++,window.EComposer&&typeof window.EComposer.buildSwiperConfig=="function"?(clearInterval(r),e()):p>=75&&clearInterval(r)},200);return}let n=window.EComposer.buildSwiperConfig(g);n.pagination={el:t.querySelector(".ecom-swiper-pagination"),type:l,clickable:!0},n.allowTouchMove=a,n.navigation={nextEl:t.querySelector(".ecom-swiper-button-next"),prevEl:t.querySelector(".ecom-swiper-button-prev")},new window.EComSwiper(s,n)};e()}if(this.settings.use_ajax&&this.isLive){const t=this.$el;if(!t)return;const a=t.querySelector(".ecom-shopify__blog-wrapper"),l=function(e){e.preventDefault();const n=this.dataset.get,p=this.closest(".ecom-sections[data-section-id]");if(!n||!p||!p.dataset.sectionId)return;const r=p.dataset.sectionId,_=`${n}&section_id=${r}`;g(_,p),a.scrollIntoView()};t.querySelectorAll(".ecom-pagination-item").forEach(e=>{e.addEventListener("click",l)});const g=function(e,n){const p=async function(r){return(await fetch(r,{method:"GET",cache:"no-cache",headers:{"Content-Type":"text/html"}})).text()};n.classList.add("ecom-doing-load-blog"),p(e).then(function(r){t.querySelectorAll(".ecom-shopify__blog--post").forEach(function(b){b.remove()});const d=document.createElement("div");d.innerHTML=r;const m=d.querySelector(".ecom-shopify__blog--posts");if(!m)return;const x=n.querySelector(".ecom-shopify__blog--posts"),S=n.querySelector(".ecom-pagination-navigation.ecom-collection__pagination-navigation");for(;m.firstChild;)x.appendChild(m.firstChild);m.parentNode.removeChild(m);const f=d.querySelector(".ecom-pagination-navigation.ecom-collection__pagination-navigation");f&&(S.innerHTML=f.innerHTML,t.querySelectorAll(".ecom-pagination-item").forEach(w=>{w.addEventListener("click",l)}))}).finally(function(){n.classList.remove("ecom-doing-load-blog")})}}}},items_on_row(){return this.data.settings&&this.data.settings.items_on_row?this.data.settings.items_on_row:4},layout(){return this.data.settings&&this.data.settings.layout?this.data.settings.layout:"grid"},articlePagination(){var i,o,t,a,l,s,g,e,n,p,r,_,d;return["featured","related"].includes(this.data.template)||!((o=(i=this.data)==null?void 0:i.settings)!=null&&o.enable_pagination)||((a=(t=this.data)==null?void 0:t.settings)==null?void 0:a.layout)!=="grid"?"":this.canUseCustomLiquidForCSR?(s=(l=this.data)==null?void 0:l.settings)!=null&&s.show_preview_pagination?`
                    {%- if blog.articles_count > 0 -%}
                        <nav role="navigation">
                            <ol class="ecom-pagination-navigation ecom-collection__pagination-navigation">
                                <li class="ecom-prev" style="${this.data.settings.pagination_style==="block"?"margin-right:auto":""}">
                                    <a class="ecom-pagination-item ecom-paginate-action" data-get="{{ paginate.previous.url }}" href="{{ paginate.previous.url }}">
                                        ${["icon","text_icon"].includes((g=this.data.settings)==null?void 0:g.number_type)?`<span class="ecom-paginate-action--icon">${this.data.settings.icon_prev_page||""}</span>`:""}
                                        ${this.data.settings.number_type!=="icon"?this.lang(this.data.settings.text_prev_page,"prev_page"):""}
                                    </a>
                                </li>
                                ${[1,2,3].map(m=>`
                                    <li class="ecom-pagination-item ${m===1?"ecom-button-active":""}">
                                        <a href="/" title="${m}">
                                            ${m}
                                        </a>
                                    </li>
                                `).join("")}
                                <li class="ecom-pagination-item ecom-next" style="${((e=this.data.settings)==null?void 0:e.pagination_style)==="block"?"margin-left:auto":""}">
                                    <a class="ecom-paginate-action" href="/">
                                        ${((n=this.data.settings)==null?void 0:n.number_type)!=="icon"?this.lang((p=this.data.settings)==null?void 0:p.text_next_page,"next_page"):""}
                                        ${["icon","text_icon"].includes((r=this.data.settings)==null?void 0:r.number_type)?`<span class="ecom-paginate-action--icon">${((_=this.data.settings)==null?void 0:_.icon_next_page)||""}</span>`:""}
                                    </a>
                                </li>
                             </ol>
                        </nav>
                    {%- endif -%}
                `:"":`
             {%- if blog -%}
                {%- paginate blog.articles by limit -%}
                    {%- if paginate.pages > 1 -%}
                        <nav role="navigation">
                            <ol class="ecom-pagination-navigation ecom-collection__pagination-navigation">
                                {%- if paginate.previous -%}
                                    <li class="ecom-prev" style="${this.data.settings.pagination_style==="block"?"margin-right:auto":""}">
                                        <a class="ecom-pagination-item ecom-paginate-action" data-get="{{ paginate.previous.url }}" href="{{ paginate.previous.url }}">
                                        ${this.data.settings.number_type==="icon"||this.data.settings.number_type==="text_icon"?`<span class="ecom-paginate-action--icon">${this.data.settings.icon_prev_page||""}</span>`:""}
                                        ${this.data.settings.number_type!=="icon"?this.lang(this.data.settings.text_prev_page,"prev_page"):""}
                                        </a>
                                    </li>
                                {%- else -%}
                                    <li class="ecom-pagination-item ecom-prev ecom-paginate-action disabled" style="${this.data.settings.pagination_style==="block"?"margin-right:auto":""}">
                                        ${this.data.settings.number_type==="icon"||this.data.settings.number_type==="text_icon"?`<span class="ecom-paginate-action--icon">${this.data.settings.icon_prev_page||""}</span>`:""}
                                        ${this.data.settings.number_type!=="icon"?this.lang(this.data.settings.text_prev_page,"prev_page"):""}
                                    </li>
                                {%- endif -%}

                                {%- for part in paginate.parts -%}
                                    {%- if part.is_link -%}
                                        <li>
                                            <a class="ecom-pagination-item" data-get="{{part.url}}" href="{{ part.url }}" title="{{ part.title }}">
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
                                    <li class="ecom-next" style="${this.data.settings.pagination_style==="block"?"margin-left:auto":""}">
                                        <a class="ecom-pagination-item ecom-paginate-action" data-get="{{ paginate.next.url }}" href="{{ paginate.next.url }}">

                                            ${this.data.settings.number_type!=="icon"?this.lang((d=this.data.settings)==null?void 0:d.text_next_page,"next_page"):""}

                                            ${this.data.settings.number_type==="icon"||this.data.settings.number_type==="text_icon"?`<span class="ecom-paginate-action--icon">${this.data.settings.icon_next_page||""}</span>`:""}
                                        </a>
                                    </li>
                                    {%- else -%}
                                    <li class="ecom-pagination-item ecom-next ecom-paginate-action ecom-collection__pagination--disabled" style="${this.data.settings.pagination_style==="block"?"margin-left:auto":""}">
                                        ${this.data.settings.number_type!=="icon"?this.lang(this.data.settings.text_next_page,"next_page"):""}
                                        ${this.data.settings.number_type==="icon"||this.data.settings.number_type==="text_icon"?`<span class="ecom-paginate-action--icon">${this.data.settings.icon_next_page||""}</span>`:""}
                                    </li>
                                {%- endif -%}
                            </ol>
                        </nav>
                    {%- endif -%}
                {%- endpaginate -%}
            {%- endif -%}
            `},blogIterationTemplate(){var i;return this.canUseCustomLiquidForCSR&&((i=this==null?void 0:this.data)==null?void 0:i.template)==="featured"?"{% for blog in blogs %}":this.selected_blog!==""?` {%- capture stringBlog -%}${this.selected_blog}{%-  endcapture-%}
                    {% assign blog_handles = stringBlog | split: ',' %}
                    {% for blogItem in blog_handles %}
                    {%- assign blog = blogs[blogItem] -%}
                    {% if blog == null %}{% continue %}{% endif %}
                    {% if blog.articles.size == 0 %}{% continue %}{% endif %}`:""},liquids(){var o,t,a,l,s,g;const i=(o=this.data.settings)!=null&&o.empty_articles_text?`div class="ecom-shopify__blog--empty-text">${this.data.settings.empty_articles_text}</div>`:this.exporting?"":` <div class="code-placeholder" style="width:100%">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                            <span>Blog has no articles. Please add articles or select a different blog in settings.</span>
                        </div>`;return{blog:{code:`
                        {% if tmp_block == nil or tmp_block == blank %}
                            {% assign tmp_block = blog %}
                        {% endif %}
                        {%- capture stringBlog -%}${this.selected_blog}{%- endcapture -%}
                        {% assign blog_handles = stringBlog | split: ',' %}
                        ${this.data.template==="featured"&&!this.selected_blog?"{% assign blog = nil %}":""}
                        <div class="${this.layout==="slider"?"ecom-swiper-wrapper":"ecom-grid"} ecom-shopify__blog--posts" style="${this.layout==="slider"?"":"display:grid"}"${this.exporting===!0&&((t=this.data.settings)==null?void 0:t.scroll_reveal_items)&&this.layout!=="slider"?` data-ec-sr-items="${this.data.settings.scroll_reveal_items_type||"fade-up"}" data-ec-sr-delay="${this.data.settings.scroll_reveal_items_delay||100}"`:""}>
                            {% assign count = 1 %}
                            ${this.canUseCustomLiquidForCSR&&this.data.template==="featured"?`{% if blogs == blank %}${i}{% else %}`:""}
                            ${this.blogIterationTemplate}
                                {% if blog != null %}
                                    {%- capture limit -%}${(a=this.data.settings)!=null&&a.limit?this.data.settings.limit:20}{%-endcapture-%}
                                    {% assign limit = limit | plus: 0 %}
                                    {% assign tmp_article = article %}
                                    ${this.data.template==="related"?"{% assign limit = limit %}":""}
                                    {% assign ecom_articles_count = blog.articles.size %}
                                    ${this.data.template==="blog"?"{%- paginate blog.articles by limit -%}":""}
                                    {% for article in blog.articles %}
                                        {% if count > limit %}{% break%}{% endif %}
                                        {% assign count =  count | plus: 1%}
                                        ${this.data.template==="related"?"{% if tmp_article  and article.id == tmp_article.id %}{% assign limit = limit | plus: 1 %}{% continue %}{% endif %}":""}
                                        <div class="ecom-shopify__blog--post${this.layout==="slider"?" ecom-swiper-slide":""}${this.is_horizontal_content?" ecom-shopify__blog-vertical":""}"${this.exporting===!0&&((l=this.data.settings)==null?void 0:l.scroll_reveal_items)&&this.layout!=="slider"?" data-ec-sr-item":""}>
                                            ${this.is_horizontal_content?`${this.check("thumbnail")?` <div class="ecom-shopify__blog--post-thumbnail--img">
                                                            <div class="ecom-shopify__blog--post-thumbnail ecom-image-align {% if article.image == blank %} ecom-shopify__blog--post-no-thumbnail{% endif %}">
                                                                {%- if article.image -%}
                                                                {%- liquid
                                                                    assign featured_media_aspect_ratio = article.featured_media.aspect_ratio

                                                                    if article.featured_media.aspect_ratio == nil
                                                                        assign featured_media_aspect_ratio = 1
                                                                    endif
                                                                -%}
                                                                        <a style="text-decoration:none" href="{{article.url}}" class="ecom-shopify__blog--post-link ecom-image-default"  data-blog-handle="{{article.handle}}">
                                                                        <img srcset="
                                                                            {%- if article.image.src.width >= 533 -%}{{ article.image.src | image_url: width: 533 }} 533w,{%- endif -%}
                                                                            {%- if article.image.src.width >= 720 -%}{{ article.image.src | image_url: width: 720 }} 720w,{%- endif -%}
                                                                            {%- if article.image.src.width >= 940 -%}{{ article.image.src | image_url: width: 940 }} 940w,{%- endif -%}
                                                                            {%- if article.image.src.width >= 1066 -%}{{ article.image.src | image_url: width: 1066 }} 1066w{%- endif -%}"
                                                                            src="{{ article.image.src | image_url: width: 533 }}"
                                                                            sizes="(min-width: 1100px) 535px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                                                                            alt="{{ article.image.src.alt | escape }}"
                                                                            width="{{ article.image.width }}"
                                                                            height="{{ article.image.height }}"
                                                                            loading="lazy"
                                                                        >
                                                                    </a>
                                                                    {%- endif -%}
                                                            </div>
                                                        </div>
                                                `:""}
                                                <div class="ecom-shopify__blog--posts-details">
                                            `:""}
                                            ${this.attributes.map(e=>{var f,b,w,z,B,L,A,j,q,M,E,N,P,F,H,I,U,R,W,D,V,J,O,Y,G,Z,K,Q,X,ee,te,ie,oe,se,ae,ne,le,pe,ce,re,ge,me,_e,de,he,ue,fe,be,ye,ve,xe,we,$e,ke,Ce,Se,Te,ze,Be,Le,Ae,je;switch(e.type){case"title":var n=(f=e.settings)!=null&&f.tag?(b=e.settings)==null?void 0:b.tag:"h2";return`<a href="{{article.url }}" class="ecom-shopify__blog--post-link"  data-blog-handle="{{article.handle}}"><${n} class="ecom-shopify__blog--post-title">{{article.title}}</${n}></a>`;case"thumbnail":return this.is_horizontal_content?"":`
                                                                <div class="ecom-shopify__blog--post-thumbnail--img">
                                                                    <div class="ecom-shopify__blog--post-thumbnail ecom-image-align {% if article.image == blank %} ecom-shopify__blog--post-no-thumbnail{% endif %}">
                                                                        {%- if article.image -%}
                                                                        {%- liquid
                                                                            assign featured_media_aspect_ratio = article.featured_media.aspect_ratio

                                                                            if article.featured_media.aspect_ratio == nil
                                                                                assign featured_media_aspect_ratio = 1
                                                                            endif
                                                                        -%}
                                                                                <a style="text-decoration:none" href="{{article.url }}" class="ecom-shopify__blog--post-link ecom-image-default"  data-blog-handle="{{article.handle}}">
                                                                                <img srcset="
                                                                                    {%- if article.image.src.width >= 533 -%}{{ article.image.src | image_url: width: 533 }} 533w,{%- endif -%}
                                                                                    {%- if article.image.src.width >= 720 -%}{{ article.image.src | image_url: width: 720 }} 720w,{%- endif -%}
                                                                                    {%- if article.image.src.width >= 940 -%}{{ article.image.src | image_url: width: 940 }} 940w,{%- endif -%}
                                                                                    {%- if article.image.src.width >= 1066 -%}{{ article.image.src | image_url: width: 1066 }} 1066w{%- endif -%}"
                                                                                    src="{{ article.image.src | image_url: width: 533 }}"
                                                                                    sizes="(min-width: 1100px) 535px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                                                                                    alt="{{ article.image.src.alt | escape }}"
                                                                                    width="{{ article.image.width }}"
                                                                                    height="{{ article.image.height }}"
                                                                                    loading="lazy"
                                                                                >
                                                                            </a>
                                                                            {%- endif -%}
                                                                    </div>
                                                                </div>
                                                            `;case"excerpt":var p=(z=(w=e.settings)==null?void 0:w.limit_words)!=null?z:12;return`
                                                        <div class="ecom-shopify__blog--post-excerpt">
                                                            {{ article.excerpt_or_content | strip_html | truncatewords: ${p}}}
                                                        </div>
                                                    `;case"author":return`
                                                        <div class="ecom-shopify__blog--post-author">
                                                            {% assign article_author = article.author %}
                                                        ${this.lang("By {{article_author}}","post_by_author",{article_author:"article_author"})}
                                                        </div>
                                                    `;case"category":return`
                                                            <div class="ecom-shopify__blog--post-category">
                                                                <a href="{{blog.url}}" alt="{{blog.title}}">{{blog.title}}</a>
                                                            </div>
                                                        `;case"tags":return`
                                                        <div class="ecom-shopify__blog--post-tags ecom-shopify__blog--post-informations">
                                                            {% if article.tags.size %}
                                                                <ul>
                                                                    {% for tag in article.tags %}
                                                                        <li>
                                                                            <a href="/blogs/{{blog.handle}}/tagged/{{tag | handleize }}">{{ tag }}</a>
                                                                        </li>
                                                                    {% endfor %}
                                                                </ul>
                                                            {% endif %}
                                                        </div>
                                                    `;case"meta":var r=((B=e==null?void 0:e.settings)==null?void 0:B.date_format)&&((L=e==null?void 0:e.settings)==null?void 0:L.date_format)!=="day_first"?`format: '${(A=e==null?void 0:e.settings)==null?void 0:A.date_format}'`:((j=e==null?void 0:e.settings)==null?void 0:j.date_format)&&((q=e==null?void 0:e.settings)==null?void 0:q.date_format)==="day_first"?"'%e/%-m/%Y'":"format: 'date'",_=(E=(M=e==null?void 0:e.settings)==null?void 0:M.meta_layout)!=null?E:"one",d={one:["group_meta_1"],two:["group_meta_2"],three:["group_meta_3"],four:["group_meta_4","comments_count"],five:["comments_count"]};let $=`<div class="ecom-shopify__blog--post-author ecom-shopify__blog--post-informations">
                                                                {% assign article_author = article.author %}
                                                                ${(N=e==null?void 0:e.settings)!=null&&N.icon_author?`
                                                                        <span class="ecom-shopify__blog--post-informations-icon">${(P=e==null?void 0:e.settings)==null?void 0:P.icon_author}</span>
                                                                    `:""}
                                                                ${!((F=e==null?void 0:e.settings)!=null&&F.icon_author)&&((H=e==null?void 0:e.settings)==null?void 0:H.avatar_type)!="off"?`
                                                                        ${((I=e==null?void 0:e.settings)==null?void 0:I.avatar_type)=="shopify"?`
                                                                                {%- if article.user.image -%}
                                                                                    <div class="ecom-shopify__blog--post-informations-author-avatar">
                                                                                        <div class="ecom-image-default">
                                                                                            <img src="{{ article.user.image | image_url: width: 2048 }}" alt="{{ article.author }}">
                                                                                        </div>
                                                                                    </div>
                                                                                {%- else -%}
                                                                                    <div class="ecom-shopify__blog--post-informations-author-avatar">
                                                                                        <div class="ecom-image-default">
                                                                                            ${(R=(U=e==null?void 0:e.settings)==null?void 0:U.image_author)!=null&&R.url?`
                                                                                                    <img src="${(D=(W=e==null?void 0:e.settings)==null?void 0:W.image_author)==null?void 0:D.url}" alt="{{ article.author }}"/>
                                                                                                `:""}
                                                                                        </div>
                                                                                    </div>
                                                                                {%- endif -%}
                                                                            `:""}
                                                                        ${((V=e==null?void 0:e.settings)==null?void 0:V.avatar_type)=="gavatar"?`
                                                                                {%- if article.user.email -%}
                                                                                    <div class="ecom-shopify__blog--post-informations-author-avatar">
                                                                                        <div class="ecom-image-default">
                                                                                            <img src="https://www.gravatar.com/avatar/{{ article.user.email | downcase | md5 }}" alt="{{ article.author }}">
                                                                                        </div>
                                                                                    </div>
                                                                                {%- endif -%}
                                                                            `:""}
                                                                    `:""}
                                                                ${this.lang(`${(J=e==null?void 0:e.settings)!=null&&J.hide_by_text?"":(O=e==null?void 0:e.settings)!=null&&O.by_text?e.settings.by_text+" ":"By "}{{article_author}}`,"post_by_author",{article_author:"article_author"})}${(Y=e==null?void 0:e.settings)!=null&&Y.hide_in_text?"":" "}
                                                            </div>`,T=(G=e==null?void 0:e.settings)!=null&&G.hide_comment_count?"":`
                                                                <div class="ecom-shopify__blog--post-comments_count ecom-shopify__blog--post-informations">
                                                                    {% if article.comments_enabled? %}
                                                                        ${(Z=e==null?void 0:e.settings)!=null&&Z.icon_comment?`<span class="ecom-shopify__blog--post-informations-icon">${(K=e==null?void 0:e.settings)==null?void 0:K.icon_comment}</span> `:""}
                                                                        {% assign comments_count = article.comments_count %}
                                                                        {% assign comment_count = article.comments_count %}
                                                                        {% if article.comments_count == 1%}
                                                                            <span>
                                                                                ${this.lang((X=(Q=e==null?void 0:e.settings)==null?void 0:Q.comment_count_text)!=null?X:"","comment_count_text",{comment_count:"article.comments_count"})}
                                                                            </span>
                                                                    {% else %}
                                                                            <span>
                                                                                ${this.lang((te=(ee=e==null?void 0:e.settings)==null?void 0:ee.comments_count_text)!=null?te:"","comments_count_text",{comments_count:"article.comments_count"})}
                                                                            </span>
                                                                                {% endif %}
                                                                    {% endif %}
                                                                </div>`,k=`
                                                                <div class="ecom-shopify__blog--post-published-at ecom-shopify__blog--post-informations">
                                                                    {% assign published_at = ${((ie=e==null?void 0:e.settings)==null?void 0:ie.date_type)==="updated_at"?"article.updated_at":"article.published_at"} | time_tag: ${r}  %}
                                                                    ${(oe=e==null?void 0:e.settings)!=null&&oe.icon_time?`
                                                                            <span class="ecom-shopify__blog--post-informations-icon">${(se=e==null?void 0:e.settings)==null?void 0:se.icon_time}</span>
                                                                        `:""}
                                                                    <span>${this.lang(`${(ae=e==null?void 0:e.settings)!=null&&ae.hide_in_text?"":(ne=e==null?void 0:e.settings)!=null&&ne.in_text?e.settings.in_text+" ":"in "}{{published_at}}`,"post_published_at",{published_at:"published_at"})}</span>
                                                                </div>`;var m={comments_count:(le=e==null?void 0:e.settings)!=null&&le.hide_comment_count?"":`
                                                                    <div class="ecom-shopify__blog--post-comments_count ecom-shopify__blog--post-informations">
                                                                        {% if article.comments_enabled? %}
                                                                            ${(pe=e==null?void 0:e.settings)!=null&&pe.icon_comment?`
                                                                                    <span class="ecom-shopify__blog--post-informations-icon">${(ce=e==null?void 0:e.settings)==null?void 0:ce.icon_comment}</span>
                                                                                `:""}
                                                                            {% assign comments_count = article.comments_count %}
                                                                            {% assign comment_count = article.comments_count %}
                                                                            {% if article.comments_count == 1%}
                                                                                <span>
                                                                                    ${this.lang((ge=(re=e==null?void 0:e.settings)==null?void 0:re.comment_count_text)!=null?ge:"","comment_count_text",{comment_count:"article.comments_count"})}
                                                                                </span>
                                                                            {% else %}
                                                                                <span>
                                                                                    ${this.lang((_e=(me=e==null?void 0:e.settings)==null?void 0:me.comments_count_text)!=null?_e:"","comments_count_text",{comments_count:"article.comments_count"})}
                                                                                </span>
                                                                                    {% endif %}
                                                                            {% endif %}
                                                                            </div>`,group_meta_4:`
                                                                <div class="ecom-shopify__blog--post-group-4 ecom-flex ecom-al_center ${(de=e==null?void 0:e.settings)==null?void 0:de.layout4_meta_aligment}">
                                                                    ${(he=e==null?void 0:e.settings)!=null&&he.hide_author?"":$}
                                                                    ${(ue=e==null?void 0:e.settings)!=null&&ue.hide_time?"":k}
                                                                </div>
                                                            `,group_meta_1:`
                                                                <div class="ecom-shopify__blog--post-group-1 ecom-flex ecom-al_center ${(fe=e==null?void 0:e.settings)==null?void 0:fe.layout4_meta_aligment}">
                                                                    ${(be=e==null?void 0:e.settings)!=null&&be.hide_author?"":$}
                                                                    ${(ye=e==null?void 0:e.settings)!=null&&ye.hide_time?"":k}
                                                                    ${(ve=e==null?void 0:e.settings)!=null&&ve.hide_comment_count?"":T}
                                                                </div>
                                                            `,group_meta_2:`
                                                                <div class="ecom-shopify__blog--post-group-2 ecom-flex ecom-al_center ${(xe=e==null?void 0:e.settings)==null?void 0:xe.layout4_meta_aligment}">
                                                                    ${(we=e==null?void 0:e.settings)!=null&&we.hide_time?"":k}
                                                                    ${($e=e==null?void 0:e.settings)!=null&&$e.hide_author?"":$}
                                                                    ${(ke=e==null?void 0:e.settings)!=null&&ke.hide_comment_count?"":T}
                                                                </div>
                                                            `,group_meta_3:`
                                                                <div class="ecom-shopify__blog--post-group-3 ecom-flex ecom-al_center ${(Ce=e==null?void 0:e.settings)==null?void 0:Ce.layout4_meta_aligment}">
                                                                    ${(Se=e==null?void 0:e.settings)!=null&&Se.hide_comment_count?"":T}
                                                                    ${(Te=e==null?void 0:e.settings)!=null&&Te.hide_author?"":$}
                                                                    ${(ze=e==null?void 0:e.settings)!=null&&ze.hide_time?"":k}
                                                                </div>
                                                            `},x="";for(var S of d[_])x+=m[S];return x;case"link":return`
                                                            <div class="ecom-shopify__blog--post-link-wrapper">
                                                                <a href="{{article.url }}" class="ecom-shopify__blog--post-link-btn ecom-flex ecom-al_center ecom-fl_center"  data-blog-handle="{{article.handle}}">
                                                                    ${(Be=e==null?void 0:e.settings)!=null&&Be.text?`<span>${this.lang((Le=e==null?void 0:e.settings)==null?void 0:Le.text,"link_text")}</span>`:""}
                                                                    ${(Ae=e==null?void 0:e.settings)!=null&&Ae.icon?`<span class="ecom__element--button-icon ecom-flex ecom-al_center ecom-fl_center">${(je=e==null?void 0:e.settings)==null?void 0:je.icon}</span>`:""}
                                                                </a>
                                                            </div>
                                                        `;default:return""}}).join("")}
                                            ${this.is_horizontal_content?"</div>":""}
                                        </div>
                                    {% endfor %}
                                ${this.data.template==="blog"?"{%- endpaginate -%}":""}
                                ${this.selected_blog===""?`
                                {% if ecom_articles_count == 0 %}
                                    ${(s=this.data.settings)!=null&&s.empty_articles_text?`<div class="ecom-shopify__blog--empty-text">${this.data.settings.empty_articles_text}</div>`:this.exporting?"":`<div class="code-placeholder" style="width:100%">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <polyline points="16 18 22 12 16 6"></polyline>
                                                    <polyline points="8 6 2 12 8 18"></polyline>
                                                </svg>
                                                <span>Blog has no articles. Please add articles or select a different blog in settings.</span>
                                            </div>`}
                                {% endif %}
                                `:""}
                            {% else %}
                                ${this.selected_blog===""?(g=this.data.settings)!=null&&g.empty_articles_text?`<div class="ecom-shopify__blog--empty-text">${this.data.settings.empty_articles_text}</div>`:this.exporting?"":`<div class="code-placeholder" style="width:100%">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="16 18 22 12 16 6"></polyline>
                                                <polyline points="8 6 2 12 8 18"></polyline>
                                            </svg>
                                            <span>Please select the Blog in the settings on the right sidebar to display it</span>
                                        </div>`:""}
                            {% endif %}
                            ${this.blogIterationTemplate?"{% endfor %}":""}
                            ${this.selected_blog!==""?`{% if count == 1 %} ${i} {% endif %}`:""}
                            ${this.canUseCustomLiquidForCSR&&this.data.template==="featured"?"{% endif %}":""}
                        </div>
                        ${this.articlePagination}
                        {% unless tmp_block == nil and tmp_block == blank %}
                            {% assign blog = tmp_block %}
                        {% endunless %}
                        {% unless tmp_article == nil and tmp_article == blank %}
                            {% assign article = tmp_article %}
                        {% endunless %}
                    `,preview:`
                        <div class="ecom-skeleton-item">
                            <div class="ecom-skeleton-col-4">
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-10 ecom-skeleton-big"></div>
                                    <div class="ecom-skeleton-col-8 ecom-skeleton-big"></div>
                                </div>
                            </div>
                            <div class="ecom-skeleton-col-4">
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-10 ecom-skeleton-big"></div>
                                    <div class="ecom-skeleton-col-8 ecom-skeleton-big"></div>
                                </div>
                            </div>
                            <div class="ecom-skeleton-col-4">
                                <div class="ecom-skeleton-row">
                                    <div class="ecom-skeleton-col-10 ecom-skeleton-big"></div>
                                    <div class="ecom-skeleton-col-8 ecom-skeleton-big"></div>
                                </div>
                            </div>
                        </div>
                    `}}},requestShopifyType(){return this.data.template==="featured"?{}:this.data.template==="featured"||this.data.template==="related"?{shopify_type:"article"}:{shopify_type:"blog"}},selected_blog(){var t;const i=(t=this.data.settings.blog)!=null?t:[];let o="";return i.length?(i.forEach(function(a,l){o+=a.value,l!=i.length-1&&(o+=",")}),o):""},is_horizontal_content(){return this.data&&this.data.settings&&this.data.settings.content_layout=="horizontal"},settings(){var o;let i=[{group_title:this.$t("general"),params:[{type:"popup",label:this.$t("layout"),name:"layout",options:{type:"dropdown",preview:"title",values:{grid:this.$t("grid"),slider:this.$t("slider")},default:!1}},{type:"popup",label:this.$t("content_layout"),name:"content_layout",options:{type:"dropdown",preview:"title",values:{horizontal:this.$t("horizontal"),vertical:this.$t("vertical")},default:!1}},{type:"choose",label:this.$t("image_thumbnail_position"),name:"image_thumbnail_position",options:{type:"align-x",values:[-1,1],visible:{keep_data:!1,condition:t=>t.content_layout=="horizontal"}},css:{selector:" .ecom-shopify__blog--post-thumbnail--img",properties:{order:""}}},{type:"number",name:"limit",label:this.$t("maximum_blog_posts_to_show"),options:{min:1,max:["blog","article","post"].includes((o=this.params)==null?void 0:o.page)?200:50}},{type:"text",name:"empty_articles_text",label:this.$t("empty_articles_text"),options:{placeholder:this.$t("no_posts_found")}},{type:"group",label:this.$t("select_attributes_to_show"),name:"attributes",params:[{type:"title",name:this.$t("title"),max:1,settings:[{type:"popup",label:this.$t("heading_tag"),name:"tag",options:{type:"dropdown",preview:"title",values:{h1:this.$t("heading")+" h1",h2:this.$t("heading")+" h2",h3:this.$t("heading")+" h3",h4:this.$t("heading")+" h4",h5:this.$t("heading")+" h5",h6:this.$t("heading")+" h6"}}}]},{type:"thumbnail",name:this.$t("thumbnail"),max:1,settings:[]},{type:"excerpt",name:this.$t("post_excerpt"),max:1,settings:[{type:"number",name:"limit_words",label:this.$t("maximum_words_to_show"),options:{min:5,max:200}}]},{type:"tags",name:this.$t("post_tags"),max:1,settings:[{type:"paragraph",content:this.$t("display_all_the_tags_for_the_article")}]},{type:"category",name:this.$t("category"),max:1,settings:[{type:"paragraph",content:this.$t("display_category_for_the_article")}]},{type:"meta",name:this.$t("post_meta"),max:1,settings:[{type:"toggle",label:this.$t("hide_author"),name:"hide_author",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"toggle",label:this.$t("hide_by_text"),name:"hide_by_text",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"toggle",label:this.$t("hide_time"),name:"hide_time",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"toggle",label:this.$t("hide_in_text"),name:"hide_in_text",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"toggle",label:this.$t("hide_comment_count"),name:"hide_comment_count",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"text",label:this.$t("by_text"),name:"by_text",default:"By"},{type:"text",label:this.$t("in_text"),name:"in_text",default:"in"},{type:"line"},{type:"picker",label:this.$t("icon_time"),name:"icon_time",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"picker",label:this.$t("icon_comment"),name:"icon_comment",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"picker",label:this.$t("icon_author"),name:"icon_author",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"paragraph",content:this.$t("or")},{type:"popup",name:"avatar_type",label:this.$t("avatar"),options:{type:"dropdown",default:!1,preview:"title",values:{off:this.$t("off"),shopify:this.$t("shopify_avatar"),gavatar:this.$t("gavatar")}}},{type:"picker",label:this.$t("image_author_default"),name:"image_author",description:this.$t("image_default_will_display_if_user_not_avatar"),options:{responsive:!1,type:"image",editAlt:!1,visible:{keep_data:!0,condition:t=>t.avatar_type=="shopify"}}},{type:"choose",label:this.$t("icon_image_position"),name:"icon_position",options:{type:"align-x",values:[-1,1]},css:{selector:" .ecom-shopify__blog--post-informations-icon",properties:{order:""}}},{type:"number",label:this.$t("icon_image_spacing"),name:"spacing",options:{units:{px:{min:0,max:200}}},css:{selector:" .ecom-shopify__blog--post-informations",properties:{gap:""}}},{type:"line"},{type:"popup",name:"meta_layout",label:this.$t("meta_layout"),options:{type:"dropdown",default:!1,values:{one:this.$t("layout")+" 1",two:this.$t("layout")+" 2",three:this.$t("layout")+" 3",four:this.$t("layout")+" 4",five:this.$t("layout")+" 5"}}},{name:"layout4_meta_aligment",label:this.$t("meta_layout_4_alignment"),type:"choose",options:{type:"text-align",values:["ecom-fl_left","ecom-fl_center","ecom-fl_right"],visible:{keep_data:!1,condition:t=>t.meta_layout=="four"}},css:{selector:" .ecom-shopify__blog--post-group-4",properties:{"text-align":""}}},{type:"text",name:"comment_count_text",label:this.$t("comment_text_count"),placeholder:"{{comment_count}} comment",description:this.$t("use_comment_count_to_show_comment_count")},{type:"text",name:"comments_count_text",label:this.$t("many_comments_text_count"),placeholder:"{{comments_count}} comments",description:this.$t("use_comments_count_to_show_comments_count")},{type:"popup",name:"date_type",label:this.$t("date_type"),value:"published_at",options:{type:"dropdown",values:{published_at:this.$t("published_at"),updated_at:this.$t("updated_at")},default:!1}},{type:"popup",name:"date_format",label:this.$t("date_format"),options:{type:"dropdown",values:{default:this.$t("default_date"),abbreviated_date:this.$t("abbreviated_date"),basic:this.$t("basic_date"),date:this.$t("full_date"),date_at_time:this.$t("date_with_time"),on_date:this.$t("date_with_preposition"),day_first:this.$t("day_first")}}}]},{type:"link",name:this.$t("read_more_link"),max:1,settings:[{type:"text",label:this.$t("read_more_text"),name:"text",options:{placeholder:this.$t("read_more")}},{type:"picker",label:this.$t("icon"),name:"icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}}]}]}]},{group_title:this.$t("grid_settings"),options:{visible:{keep_data:!1,condition:t=>t.layout==="grid"}},params:[{type:"number",label:this.$t("items_on_row"),name:"slider_items",value:3,options:{responsive:!0,min:1,max:6,step:1,slider:!0},css:{selector:" .ecom-shopify__blog--posts.ecom-grid",properties:{"grid-template-columns":"repeat(%value%,1fr)"}}},{type:"number",label:this.$t("space_between"),name:"slider_spacing",options:{responsive:!0,min:0,max:64,slider:!0,input:!0},css:{selector:" .ecom-shopify__blog--posts.ecom-grid",properties:{gap:"%value%px"}}}]},{group_alias:"swiper",options:{group_title:this.$t("slider_settings"),options:{keep_data:!1,visible:t=>t.layout=="slider"}},modify:{remove:{}}}];return i.push({group_title:this.$t("scroll_reveal"),params:[{type:"paragraph",content:this.$t("scroll_reveal_items_description")},{type:"toggle",name:"scroll_reveal_items",label:this.$t("enable_scroll_reveal"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},oneline:!0}},{type:"paragraph",options:{visible:t=>t.scroll_reveal_items===!0,warnings:{content:this.$t("scroll_reveal_items_warning")}}},{type:"popup",name:"scroll_reveal_items_type",label:this.$t("scroll_reveal_animation_style"),options:{type:"dropdown",preview:"title",values:{"fade-up":"Fade Up","fade-in":"Fade In","slide-left":"Slide Left","zoom-in":"Zoom In"},visible:{condition:t=>t.scroll_reveal_items===!0}}},{type:"number",name:"scroll_reveal_items_delay",label:this.$t("scroll_reveal_delay_between_items"),options:{min:50,max:300,step:50,slider:!0,visible:{condition:t=>t.scroll_reveal_items===!0}}}]}),this.data.template==="blog"&&i.push({group_alias:"pagination:settings",options:{group_name:"",group_title:this.$t("pagination"),options:{visible:{keep_data:!1,condition:t=>t.layout!="slider"}}},modify:{params:[...this.canUseCustomLiquidForCSR?[{position:0,fields:[{type:"paragraph",content:"",options:{warnings:{content:this.$t("note_pagination_only_work_on_live_page")}}}]},{position:2,fields:[{type:"toggle",name:"show_preview_pagination",label:this.$t("show_preview_pagination"),value:!0,options:{oneline:!0,values:{on:{label:this.$t("enable"),value:!0},off:{label:this.$t("disable"),value:!1}},visible:{condition:t=>!!t.enable_pagination}}}]}]:[],{position:10,fields:[{type:"toggle",label:this.$t("use_ajax_pagination"),name:"use_ajax",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}}]}]}}),this.data.template==="featured"&&i[0].params.splice(0,0,{type:"picker",name:"blog",label:this.$t("select_a_blog"),options:{type:"blog",layout:"list",multiple:!0}}),i},optionSwiper(){return this.$helpers.optionSwiper(this.data.settings)},default(){return{settings:{slider_items:3,limit:3,show_title:!0,slider_items__mobile:1,slider_items__tablet:2,slider_spacing:30,slider_navigation_layout:"classic_full",slider_prev_icon:'<svg xmlns="http: //www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>',slider_next_icon:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>',slider_effect:"slide",slider_speed:500,layout:"grid",attributes:[{type:"thumbnail",settings:{}},{type:"title",settings:{tag:"h2"}},{type:"excerpt",settings:{limit_words:12}},{type:"meta",settings:{meta_layout:"four",comments_count_text:"{{comments_count}} comments",comment_count_text:"{{comment_count}} comment",date_format:"abbreviated_date"}},{type:"tags",settings:{}},{type:"link",settings:{text:"Read more"}}],text_prev_page:"Prev",text_next_page:"Next",enable_pagination:!0,show_preview_pagination:!0,pagination_style:"inline","grid-column-gap":"10px",number_type:"icon",icon_prev_page:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',icon_next_page:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>'},style:{blog_articles_img:{"justify-content":"center",imageOpacitynormalmode:1,imageOpacityhovermode:1,spacing:{margin:{bottom:"24px"}},imageWidth:"100%",imageMaxWidth:"100%",tab:"normal"},blog_articles_title:{textTextAlign:"left",spacing:{margin:{bottom:"6px",top:"0px",left:"0px",right:"0px"},padding:{bottom:"0px",top:"0px",left:"0px",right:"0px"}},tab:"normal",textTypography:{"font-size":"18px"}},blog_articles_description:{textTextAlign:"left",spacing:{margin:{bottom:"8px",top:"0px",left:"0px",right:"0px"},padding:{bottom:"0px",top:"0px",left:"0px",right:"0px"}}},blog_articles_datetime:{textTextAlign:"left",spacing:{margin:{bottom:"0px",top:"0px",left:"0px",right:"15px"},padding:{bottom:"0px",top:"0px",left:"0px",right:"0px"}},textTypography:{"font-style":"italic"}},blog_articles_author:{spacing:{padding:{bottom:"0px",top:"0px",left:"0px",right:"0px"},margin:{top:"0px",left:"0px",bottom:"0px",right:"15px"}},textTextAlign:"left",textTypography:{"font-weight":"300","font-style":"italic"}},blog_articles_comment_count:{textTextAlign:"left",spacing:{margin:{bottom:"0px",top:"0px",left:"0px",right:"15px"},padding:{bottom:"0px",top:"0px",left:"0px",right:"0px"}}},blog_articles_pagination:{buttonAlignment:"center",spacing:{margin:{top:"20px"}},buttonColornormalmode:"#111827",buttonBackgroundnormalmode:{classic:{"background-color":"rgba(17, 24, 39, 0.1)"}},buttonColorhovermode:"#111827",buttonBackgroundhovermode:{classic:{"background-color":"rgba(17, 24, 39, 0.2)"}},buttonColoractivemode:"#ffffff",buttonBackgroundactivemode:{classic:{"background-color":"#111827"}},padding:{left:"20px",top:"8px",bottom:"8px",right:"20px"},tab:"normal"},blog_articles_tags:{tab:"normal",spacing:{margin:{top:"0px"}}},slider_arrow:{navtab:"normal",tab:"normal",panigationSpacing:{margin:{top:"10px",right:"6px",left:"0px",bottom:"0px"},padding:{top:"6px",left:"6px",bottom:"6px",right:"6px"}},panigationColornormalmode:"#948f8f",panigationColoractivemode:"#d43b3b",navigatorFontSize:"30px",iconTransform:0},blog_articles_link_btn:{iconFontSize:"16px",icon_spacing:"10px",content_alignment:"flex-start"}}}}},watch:{optionSwiper:{deep:!0,handler:function(){this.articles.refresh=this.$helpers.randid()}}},methods:{check(i){var t;let o=!1;for(let a=0;a<((t=this.data.settings.attributes)==null?void 0:t.length);a++)this.data.settings.attributes[a].type==i&&(o=!0);return o},isArrow(){var i,o,t,a;return((i=this.data.settings)==null?void 0:i.slider_navigation_layout)==="neo_full"||((o=this.data.settings)==null?void 0:o.slider_navigation_layout)==="neo_navigator"||((t=this.data.settings)==null?void 0:t.slider_navigation_layout)==="classic_full"||((a=this.data.settings)==null?void 0:a.slider_navigation_layout)==="navigation"},isPagination(){var i,o,t;return((i=this.data.settings)==null?void 0:i.slider_navigation_layout)==="neo_full"||((o=this.data.settings)==null?void 0:o.slider_navigation_layout)==="classic_full"||((t=this.data.settings)==null?void 0:t.slider_navigation_layout)==="pagination"},style(){var a;let i=[this.check("thumbnail")?{group_alias:"image",options:{selector:" .ecom-shopify__blog--post-thumbnail--img .ecom-image-default",group_name:"blog_articles_img",group_title:this.$t("image")},modify:{params:[{position:0,fields:{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:"root .ecom-image-align"}}}},{position:20,fields:{alias:"spacing",options:{css:{selector:"root .ecom-image-align"}}}}]}}:null,this.check("title")?{group_alias:"text:hover",options:{selector:" .ecom-shopify__blog--post-link:not(.ecom-image-default) > .ecom-shopify__blog--post-title",group_name:"blog_articles_title",group_title:this.$t("title")},modify:{params:{position:30,fields:{alias:"spacing"}}}}:null,this.check("excerpt")?{group_alias:"text:spacing",options:{selector:" .ecom-shopify__blog--post-excerpt",group_name:"blog_articles_description",group_title:this.$t("description")}}:null,this.check("tags")?{group_alias:"button",options:{selector:" .ecom-shopify__blog--post-tags li a",group_name:"blog_articles_tags",group_title:this.$t("tags")},modify:{params:[{position:0,fields:{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:"root .ecom-image-align"}}}}]}}:null].filter(l=>l);this.check("meta")&&i.push({group_alias:"text:spacing",options:{selector:" .ecom-shopify__blog--post-published-at",group_name:"blog_articles_datetime",group_title:this.$t("datetime")}},{group_alias:"text:spacing",options:{selector:" .ecom-shopify__blog--post-author",group_name:"blog_articles_author",group_title:this.$t("author")}},{group_alias:"text:spacing",options:{selector:" .ecom-shopify__blog--post-category a",group_name:"blog_articles_category",group_title:this.$t("category")}},{group_alias:"text:spacing",options:{selector:" .ecom-shopify__blog--post-comments_count",group_name:"blog_articles_comment_count",group_title:this.$t("comment_count")}},{group_alias:"icon",options:{group_name:"icon",group_title:this.$t("meta_icon"),selector:" .ecom-shopify__blog--post-informations-icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}},{group_alias:"image",options:{selector:" .ecom-shopify__blog--post-informations-author-avatar",liteMode:!0,group_name:"blog_meta_img",group_title:this.$t("meta_avatar")},modify:{remove:{label:this.$t("width"),length:1},params:{position:1,fields:[{type:"number",name:"imageWidth",label:this.$t("image_width"),options:{responsive:!0,reset:!0,units:{"%":{min:0,max:100},px:{min:0,max:1e3},vw:{min:0,max:100}}},css:{important:!0,properties:{width:""}}}]}}}),this.check("link")&&i.push({group_alias:"button",options:{selector:" .ecom-shopify__blog--post-link-btn",group_name:"blog_articles_link_btn",group_title:this.$t("read_more_link")},modify:{params:[{position:0,fields:[{type:"paragraph",content:"** "+this.$t("icon")+" **",name:"title_icon"},{name:"iconFontSize",label:this.$t("size"),type:"number",options:{responsive:!0,units:{px:{min:0,max:300}}},css:{selector:" svg",properties:{height:"",width:""}}},{name:"iconTransform",label:this.$t("rotate"),type:"number",options:{responsive:!0,min:0,max:360},css:{selector:" svg",properties:{transform:"rotate(%value%deg)"}}},{type:"choose",label:this.$t("icon_position"),name:"icon_position",options:{type:"align-x",values:[-1,1]},css:{selector:" .ecom__element--button-icon",properties:{order:""}}},{type:"number",label:this.$t("icon_spacing"),name:"icon_spacing",options:{units:{px:{min:0,max:200}}},css:{properties:{gap:""}}},{type:"line"},{type:"paragraph",content:"** "+this.$t("link")+" **",name:"title_link"},{alias:"align-items",options:{label:this.$t("content_alignment"),name:"content_alignment",css:{properties:{"justify-content":""}}}}]}]}}),this.data.template!=="featured"&&this.data.template!=="related"&&this.data.settings.enable_pagination&&this.data.settings.layout!=="slider"&&i.push({group_alias:"pagination",options:{group_title:this.$t("pagination"),selector:" .ecom-pagination-navigation",group_name:"blog_articles_pagination"},modify:this.data.settings.pagination_style!=="block"?{params:[{position:1,fields:{type:"choose",name:"buttonAlignment",label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{display:"flex","justify-content":""}}}},{position:4,fields:{type:"choose",name:"page_txt_alignment_horizontal",label:this.$t("text_alignment_small_horizontal_small"),options:{responsive:!0,type:"align-x-full",values:["left","center","right"]},css:{selector:" .ecom-pagination-item",properties:{"text-align":"","justify-content":""}}}},{position:4,fields:{type:"choose",name:"page_txt_alignment_vertical",label:this.$t("text_alignment_small_vertical_small"),options:{responsive:!0,type:"align-y-full",values:["start","center","end"]},css:{selector:" .ecom-pagination-item",properties:{"align-items":""}}}}]}:null});let o=[];this.isArrow()&&o.push({title:this.$t("navigator"),type:"swiper:nav"}),this.isPagination()&&this.data.settings.slider_pagination_style!="progress"&&o.push({title:this.$t("pagination"),type:"swiper:pagination"});let t={};return this.isCombined==="combine"&&(t={params:[{alias:"spacing",options:{name:"spacingNavigation",css:{selector:" .ecom-swiper-navigation"}}},{type:"line"}],remove:{name:"justify-content"}}),this.$helpers.hasAutoplayToggle((a=this.data)==null?void 0:a.settings)&&i.push({group_alias:"swiper:autoplay",options:{group_title:this.$t("pause_button"),selector:" .ecom-shopify__blog-wrapper"}}),o.length&&(this.data.settings.slider_pagination_style==="progress"&&this.isPagination()&&(t.params=[{position:50,fields:[{type:"line"},{type:"paragraph",content:this.$t("b_pagination")},{type:"number",name:"widthProgress",label:this.$t("width"),options:{units:{"%":{min:1,max:100}}},css:{selector:" .ecom-swiper-pagination.ecom-swiper-pagination-progressbar.ecom-swiper-pagination-horizontal",important:!0,properties:{width:""}}},{type:"number",name:"sizeProgress",label:this.$t("height"),options:{units:{px:{min:1,max:50}}},css:{selector:" .ecom-swiper-pagination-progressbar",properties:{"--ecom-swiper-pagination-progressbar-size":""}}},{type:"color",name:"progress",label:this.$t("progress"),options:{global:{type:"colors"},oneline:!0},css:{selector:" .ecom-swiper-pagination-progressbar-fill",properties:{"background-color":""}}},{type:"color",name:"track",label:this.$t("track"),options:{global:{type:"colors"},oneline:!0},css:{selector:" .ecom-swiper-pagination-progressbar",properties:{"background-color":""}}},{alias:"spacing",options:{name:"spacingPaginationProgress",css:{selector:" .ecom-swiper-pagination-position.ecom-swiper-pagination-progressbar"}}}]}]),i.push({group_alias:o,options:{group_title:this.$t("navigation"),group_name:"slider_arrow",selector:" .ecom-shopify__blog-wrapper"},modify:t})),i.push({group_alias:"text:spacing",options:{selector:" .ecom-shopify__blog--empty-text",group_name:"blog_articles_empty_text",group_title:this.$t("empty_articles_text")}}),i}}},Ie={class:"ecom-element ecom-shopify-elements ecom-shopify__blog"},Ue={class:"ecom-shopify__blog-wrapper ecom-swiper-a11y-host"},Re=["data-position"],We=["data-items-on-row","innerHTML"],De=["data-navigator-type"],Ve={class:"ecom-flex-center"},Je=["innerHTML"],Oe={class:"ecom-swiper-pagination"},Ye=["innerHTML"],Ge=["data-position"],Ze=["innerHTML"],Ke=["innerHTML"],Qe=["data-position","data-position-tablet","data-position-mobile"],Xe=["data-items-on-row","innerHTML"],et={class:"ecom-collection__product-loading ecom-dn"},tt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"none",display:"block","shape-rendering":"auto"},width:"48px",height:"48px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"};function it(i,o,t,a,l,s){var g,e,n,p;return h(),u("div",Ie,[c("div",Ue,[i.$helpers.hasAutoplayToggle(t.data.settings)?(h(),u("button",{key:0,type:"button",class:"ecom-swiper-autoplay-toggle","data-position":((g=t.data.settings)==null?void 0:g.a11y_autoplay_control_position)||"bottom-right","data-state":"playing","data-label-pause":"Pause automatic slide show","data-label-play":"Start automatic slide show","aria-label":"Pause automatic slide show"},o[0]||(o[0]=[c("svg",{class:"ecom-swiper-autoplay-toggle__pause",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},[c("path",{d:"M8 5h3v14H8zM13 5h3v14h-3z"})],-1),c("svg",{class:"ecom-swiper-autoplay-toggle__play",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},[c("path",{d:"M8 5v14l11-7z"})],-1)]),8,Re)):C("",!0),s.layout==="slider"?(h(),u(He,{key:1},[c("div",{class:"ecom-shopify__blog-container ecom-swiper-container","data-items-on-row":s.items_on_row,innerHTML:i.liquid("blog")},null,8,We),s.isNavigation&&s.isCombined=="combine"?(h(),u("div",{key:0,class:"ecom-swiper-navigation","data-navigator-type":s.isCombined=="combine"},[c("div",Ve,[y(c("button",{class:"ecom-swiper-button ecom-swiper-button-prev",innerHTML:t.data.settings.slider_prev_icon},null,8,Je),[[v,s.isArrow()]]),y(c("div",Oe,null,512),[[v,s.isPagination()]]),y(c("button",{class:"ecom-swiper-button ecom-swiper-button-next",innerHTML:t.data.settings.slider_next_icon},null,8,Ye),[[v,s.isArrow()]])])],8,De)):C("",!0),s.isNavigation&&s.isCombined!="combine"?y((h(),u("div",{key:1,class:"ecom-swiper-navigation-position","data-position":t.data.settings.navigation_position},[c("button",{class:"ecom-swiper-button ecom-swiper-button-prev",style:qe(s.sliderNav),innerHTML:t.data.settings.slider_prev_icon},null,12,Ze),c("button",{class:"ecom-swiper-button ecom-swiper-button-next",style:qe(s.sliderNav),innerHTML:t.data.settings.slider_next_icon},null,12,Ke)],8,Ge)),[[v,s.isArrow()]]):C("",!0),s.isNavigation&&s.isCombined!="combine"?y((h(),u("div",{key:2,"data-position":(e=t.data.settings)==null?void 0:e.pagination_position,"data-position-tablet":(n=t.data.settings)==null?void 0:n.pagination_position__tablet,"data-position-mobile":(p=t.data.settings)==null?void 0:p.pagination_position__mobile,class:"ecom-swiper-pagination-position ecom-swiper-pagination"},null,8,Qe)),[[v,s.isPagination()]]):C("",!0)],64)):(h(),u("div",{key:2,class:"ecom-shopify__blog-container","data-items-on-row":s.items_on_row,innerHTML:i.liquid("blog")},null,8,Xe)),c("div",et,[(h(),u("svg",tt,o[1]||(o[1]=[c("path",{d:"M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50",fill:"#0a0a0a",stroke:"none"},[c("animateTransform",{attributeName:"transform",type:"rotate",dur:"0.5434782608695652s",repeatCount:"indefinite",keyTimes:"0;1",values:"0 50 51;360 50 51"})],-1)])))])])])}const rt=Ee(Me,[["render",it]]);Me.__docgenInfo={exportName:"default",displayName:"BlogFeatured",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Blog/Articles.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{rt as default};
//# sourceMappingURL=Articles.309c6043.js.map
