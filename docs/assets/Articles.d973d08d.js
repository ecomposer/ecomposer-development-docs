import{_ as ye,L as ve,E as xe,J as we}from"./preview.6f05951d.js";import{o as h,a as f,x as p,F as ke,B as x,C as w,y as $e}from"./vue.esm-bundler.7f444806.js";import"./chunk-2GDW2BFM.5cb4ba43.js";import"./index.e850844b.js";import"./iframe.7dba7240.js";import"../sb-preview/runtime.js";const be={name:"BlogFeatured",mixins:[ve,xe,we],vendors:["slider_js","slider_css"],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["layout"]}},computed:{articles(){return this.data},attributes(){return this.data.settings&&this.data.settings.attributes?this.data.settings.attributes:[]},isNavigation(){var t,i;return((t=this.data.settings)==null?void 0:t.layout)==="slider"&&((i=this.data.settings)==null?void 0:i.slider_navigation_layout)},isCombined(){var i,o;let t=(o=(i=this.data)==null?void 0:i.settings)==null?void 0:o.slider_navigation_layout;return t==="neo_full"||t==="neo_navigator"||t==="pagination"?"combine":"classic"},css(){return`
                    .ecom-shopify__blog--post-informations {
                        display: inline-flex;
                        align-items: center;
                        gap: 5px;
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
                        color: #444
                    }
                    .ecom-shopify__blog-wrapper .ecom-swiper-pagination {
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
                    @media (max-width: 767px) {
                        .ecom-shopify__blog--post.ecom-shopify__blog-vertical {
                            flex-direction: column;
                        }
                        .ecom-shopify__blog--post .ecom-shopify__blog--post-thumbnail--img {
                            order: 0 !important;
                        }
                    }
                    .ecom-doing-load-blog .ecom-shopify__blog-container{
                        display: none;
                    }
                    .ecom-doing-load-blog .ecom-collection__product-loading{
                        display: block;
                    }
                    `},javascript(){return function(){if(this.settings.layout==="slider"){let t=this.$el;if(!t)return;let i=t.querySelector(".ecom-shopify__blog-container"),o=i&&i.dataset.optionSwiper;o=JSON.parse(o),o.pagination={el:t.querySelector(".ecom-swiper-pagination"),type:"bullets",clickable:!0},o.navigation={nextEl:t.querySelector(".ecom-swiper-button-next"),prevEl:t.querySelector(".ecom-swiper-button-prev")},new window.EComSwiper(i,o)}if(this.settings.use_ajax&&this.isLive){const t=this.$el;if(!t)return;const i=t.querySelector(".ecom-shopify__blog-wrapper"),o=function(e){e.preventDefault();const l=this.dataset.get,c=this.closest(".ecom-sections[data-section-id]");if(!l||!c||!c.dataset.sectionId)return;const r=c.dataset.sectionId,s=`${l}&section_id=${r}`;g(s,c),i.scrollIntoView()};t.querySelectorAll(".ecom-pagination-item").forEach(e=>{e.addEventListener("click",o)});const g=function(e,l){const c=async function(r){return(await fetch(r,{method:"GET",cache:"no-cache",headers:{"Content-Type":"text/html"}})).text()};l.classList.add("ecom-doing-load-blog"),c(e).then(function(r){t.querySelectorAll(".ecom-shopify__blog--post").forEach(function(_){_.remove()});const n=document.createElement("div");n.innerHTML=r;const m=n.querySelector(".ecom-shopify__blog--posts");if(!m)return;const b=l.querySelector(".ecom-shopify__blog--posts"),v=l.querySelector(".ecom-pagination-navigation.ecom-collection__pagination-navigation");for(;m.firstChild;)b.appendChild(m.firstChild);m.parentNode.removeChild(m);const d=n.querySelector(".ecom-pagination-navigation.ecom-collection__pagination-navigation");d&&(v.innerHTML=d.innerHTML,t.querySelectorAll(".ecom-pagination-item").forEach(y=>{y.addEventListener("click",o)}))}).finally(function(){l.classList.remove("ecom-doing-load-blog")})}}}},items_on_row(){return this.data.settings&&this.data.settings.items_on_row?this.data.settings.items_on_row:4},layout(){return this.data.settings&&this.data.settings.layout?this.data.settings.layout:"grid"},liquids(){var t,i,o,a,g;return{blog:{code:`
                        {% assign tmp_block = blog %}
                        {%- capture blog_handle -%}${this.selected_blog}{%-  endcapture-%}
                        {%- if blog_handle -%}
                            ${this.data.template==="featured"?"{%- assign blog = blogs[blog_handle]-%}":""}
                        {%- endif -%}
                        {% if blog != null %}
                            {%- capture limit -%}${(t=this.data.settings)!=null&&t.limit?this.data.settings.limit:20}{%-endcapture-%}

                            {% assign limit = limit | plus: 0 %}
                            {% assign tmp_article = article %}
                            ${this.data.template==="related"?"{% assign limit = limit | plus: 1 %}":""}
                            {% assign count = 1 %}
                            {%- paginate blog.articles by limit -%}


                                <div class="${this.layout==="slider"?"ecom-swiper-wrapper":"ecom-grid"} ecom-shopify__blog--posts" style="${this.layout==="slider"?"":"display:grid"}">
                                {% for article in blog.articles %}
                                {% if count > limit %}{% break%}{% endif %}
                                {% assign count =  count | plus: 1%}
                                ${this.data.template==="related"?"{% if tmp_article  and article.id == tmp_article.id %}{% continue %}{% endif %}":""}
                                    <div class="ecom-shopify__blog--post${this.layout==="slider"?" ecom-swiper-slide":""}${this.is_horizontal_content?" ecom-shopify__blog-vertical":""}">
                                        ${this.is_horizontal_content?`
                                                    <div class="ecom-shopify__blog--post-thumbnail--img">
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
                                                                        {%- if article.image.src.width >= 165 -%}{{ article.image.src | img_url: '165x' }} 165w,{%- endif -%}
                                                                        {%- if article.image.src.width >= 360 -%}{{ article.image.src | img_url: '360x' }} 360w,{%- endif -%}
                                                                        {%- if article.image.src.width >= 533 -%}{{ article.image.src | img_url: '533x' }} 533w,{%- endif -%}
                                                                        {%- if article.image.src.width >= 720 -%}{{ article.image.src | img_url: '720x' }} 720w,{%- endif -%}
                                                                        {%- if article.image.src.width >= 940 -%}{{ article.image.src | img_url: '940x' }} 940w,{%- endif -%}
                                                                        {%- if article.image.src.width >= 1066 -%}{{ article.image.src | img_url: '1066x' }} 1066w{%- endif -%}"
                                                                        src="{{ article.image.src | img_url: '533x' }}"
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
                                                    <div class="ecom-shopify__blog--posts-details">
                                                `:""}
                                ${this.attributes.map(e=>{var d,_,y,k,$,C,T,A,S,j,N,L,z,H,B,I,M,q,D,E,P,F,R,U,W,Y,O,G,V,J,K,Q,X,Z,ee,te,ie,oe,ae,se,ne,le,pe,ce,re,me,ge,de,_e,ue,he,fe;switch(e.type){case"title":var l=(d=e.settings)!=null&&d.tag?(_=e.settings)==null?void 0:_.tag:"h2";return`<a href="{{article.url }}" class="ecom-shopify__blog--post-link"  data-blog-handle="{{article.handle}}"><${l} class="ecom-shopify__blog--post-title">{{article.title}}</${l}></a>`;case"thumbnail":return this.is_horizontal_content?"":`
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
                                                                            {%- if article.image.src.width >= 165 -%}{{ article.image.src | img_url: '165x' }} 165w,{%- endif -%}
                                                                            {%- if article.image.src.width >= 360 -%}{{ article.image.src | img_url: '360x' }} 360w,{%- endif -%}
                                                                            {%- if article.image.src.width >= 533 -%}{{ article.image.src | img_url: '533x' }} 533w,{%- endif -%}
                                                                            {%- if article.image.src.width >= 720 -%}{{ article.image.src | img_url: '720x' }} 720w,{%- endif -%}
                                                                            {%- if article.image.src.width >= 940 -%}{{ article.image.src | img_url: '940x' }} 940w,{%- endif -%}
                                                                            {%- if article.image.src.width >= 1066 -%}{{ article.image.src | img_url: '1066x' }} 1066w{%- endif -%}"
                                                                            src="{{ article.image.src | img_url: '533x' }}"
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
                                                    `;case"excerpt":var c=(k=(y=e.settings)==null?void 0:y.limit_words)!=null?k:12;return`
                                                <div class="ecom-shopify__blog--post-excerpt">
                                                    {{ article.excerpt_or_content | strip_html | escape | truncatewords: ${c}}}
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
                                                    {% assign tmpl =  '' %}
                                                    {% if  template.suffix  %}
                                                        {% assign tmpl = '?view=' | append: template.suffix %}
                                                    {% endif %}
                                                    {% if article.tags.size %}
                                                        <ul>
                                                            {% for tag in article.tags %}
                                                                <li>
                                                                    <a href="/blogs/{{blog.handle}}/tagged/{{tag | handleize }}{{tmpl}}">{{ tag }}</a>
                                                                </li>
                                                            {% endfor %}
                                                        </ul>
                                                    {% endif %}
                                                </div>
                                            `;case"meta":var r=(C=($=e==null?void 0:e.settings)==null?void 0:$.date_format)!=null?C:"date",s=(A=(T=e==null?void 0:e.settings)==null?void 0:T.meta_layout)!=null?A:"one",n={one:["author","published_at","comments_count"],two:["published_at","author","comments_count"],three:["comments_count","author","published_at"],four:["group_meta_4","comments_count"],five:["comments_count"]};(S=e==null?void 0:e.settings)!=null&&S.hide_author&&(n[s]=n[s].filter(u=>u!="author")),(j=e==null?void 0:e.settings)!=null&&j.hide_time&&(n[s]=n[s].filter(u=>u!="published_at")),(N=e==null?void 0:e.settings)!=null&&N.hide_comment_count&&(n[s]=n[s].filter(u=>u!="comments_count"));var m={author:`<div class="ecom-shopify__blog--post-author ecom-shopify__blog--post-informations">
                                                        {% assign article_author = article.author %}
                                                        ${(L=e==null?void 0:e.settings)!=null&&L.icon_author?`
                                                                <span class="ecom-shopify__blog--post-informations-icon">${(z=e==null?void 0:e.settings)==null?void 0:z.icon_author}</span>
                                                            `:""}
                                                        ${!((H=e==null?void 0:e.settings)!=null&&H.icon_author)&&((B=e==null?void 0:e.settings)==null?void 0:B.avatar_type)!="off"?`
                                                                ${((I=e==null?void 0:e.settings)==null?void 0:I.avatar_type)=="shopify"?`
                                                                        {%- if article.user.image -%}
                                                                            <div class="ecom-shopify__blog--post-informations-author-avatar">
                                                                                <div class="ecom-image-default">
                                                                                    <img src="{{ article.user.image | img_url: 'master' }}" alt="{{ article.author }}">
                                                                                </div>
                                                                            </div>
                                                                        {%- else -%}
                                                                            <div class="ecom-shopify__blog--post-informations-author-avatar">
                                                                                <div class="ecom-image-default">
                                                                                    ${(q=(M=e==null?void 0:e.settings)==null?void 0:M.image_author)!=null&&q.url?`
                                                                                            <img src="${(E=(D=e==null?void 0:e.settings)==null?void 0:D.image_author)==null?void 0:E.url}" alt="{{ article.author }}"/>
                                                                                        `:""}
                                                                                </div>
                                                                            </div>
                                                                        {%- endif -%}
                                                                    `:""}
                                                                ${((P=e==null?void 0:e.settings)==null?void 0:P.avatar_type)=="gavatar"?`
                                                                        {%- if article.user.email -%}
                                                                            <div class="ecom-shopify__blog--post-informations-author-avatar">
                                                                                <div class="ecom-image-default">
                                                                                    <img src="https://www.gravatar.com/avatar/{{ article.user.email | downcase | md5 }}" alt="{{ article.author }}">
                                                                                </div>
                                                                            </div>
                                                                        {%- endif -%}
                                                                    `:""}
                                                            `:""}
                                                        ${this.lang(`${(F=e==null?void 0:e.settings)!=null&&F.hide_by_text?"":"By "}{{article_author}}`,"post_by_author",{article_author:"article_author"})}
                                                    </div>`,published_at:`<div class="ecom-shopify__blog--post-published-at ecom-shopify__blog--post-informations">
                                                        {% assign published_at = article.published_at | time_tag: format: '${r}'  %}
                                                        ${(R=e==null?void 0:e.settings)!=null&&R.icon_time?`
                                                                <span class="ecom-shopify__blog--post-informations-icon">${(U=e==null?void 0:e.settings)==null?void 0:U.icon_time}</span>
                                                            `:""}
                                                        <span>${this.lang(`${(W=e==null?void 0:e.settings)!=null&&W.hide_in_text?"":" in "}{{published_at}}`,"post_published_at",{published_at:"published_at"})}</span>
                                                    </div>`,comments_count:`
                                                            <div class="ecom-shopify__blog--post-comments_count ecom-shopify__blog--post-informations">
                                                                {% if article.comments_enabled? %}
                                                                    ${(Y=e==null?void 0:e.settings)!=null&&Y.icon_comment?`
                                                                            <span class="ecom-shopify__blog--post-informations-icon">${(O=e==null?void 0:e.settings)==null?void 0:O.icon_comment}</span>
                                                                        `:""}
                                                                    {% if article.comments_count == 1%}
                                                                        <span>
                                                                            ${this.lang((V=(G=e==null?void 0:e.settings)==null?void 0:G.comment_count_text)!=null?V:"","comment_count_text",{comment_count:"article.comments_count"})}
                                                                        </span>
                                                                    {% else %}
                                                                        <span>
                                                                            ${this.lang((K=(J=e==null?void 0:e.settings)==null?void 0:J.comments_count_text)!=null?K:"","comments_count_text",{comments_count:"article.comments_count"})}
                                                                        </span>
                                                                            {% endif %}
                                                                    {% endif %}
                                                                    </div>`,group_meta_4:`
                                                        <div class="ecom-shopify__blog--post-group-4 ecom-flex ecom-al_center ${(Q=e==null?void 0:e.settings)==null?void 0:Q.layout4_meta_aligment}">
                                                            ${(X=e==null?void 0:e.settings)!=null&&X.hide_author?"":`<div class="ecom-shopify__blog--post-author ecom-shopify__blog--post-informations">
                                                                    {% assign article_author = article.author %}
                                                                    ${(Z=e==null?void 0:e.settings)!=null&&Z.icon_author?`
                                                                            <span class="ecom-shopify__blog--post-informations-icon">${(ee=e==null?void 0:e.settings)==null?void 0:ee.icon_author}</span>
                                                                        `:""}
                                                                    ${!((te=e==null?void 0:e.settings)!=null&&te.icon_author)&&((ie=e==null?void 0:e.settings)==null?void 0:ie.avatar_type)!="off"?`
                                                                            ${((oe=e==null?void 0:e.settings)==null?void 0:oe.avatar_type)=="shopify"?`
                                                                                    {%- if article.user.image -%}
                                                                                        <div class="ecom-shopify__blog--post-informations-author-avatar">
                                                                                            <div class="ecom-image-default">
                                                                                                <img src="{{ article.user.image | img_url: 'master' }}" alt="{{ article.author }}">
                                                                                            </div>
                                                                                        </div>
                                                                                    {%- else -%}
                                                                                        <div class="ecom-shopify__blog--post-informations-author-avatar">
                                                                                            <div class="ecom-image-default">
                                                                                                ${(se=(ae=e==null?void 0:e.settings)==null?void 0:ae.image_author)!=null&&se.url?`
                                                                                                        <img src="${(le=(ne=e==null?void 0:e.settings)==null?void 0:ne.image_author)==null?void 0:le.url}" alt="{{ article.author }}"/>
                                                                                                    `:""}
                                                                                            </div>
                                                                                        </div>
                                                                                    {%- endif -%}
                                                                                `:""}
                                                                            ${((pe=e==null?void 0:e.settings)==null?void 0:pe.avatar_type)=="gavatar"?`
                                                                                    {%- if article.user.email -%}
                                                                                        <div class="ecom-shopify__blog--post-informations-author-avatar">
                                                                                            <div class="ecom-shopify__blog--post-informations-author-avatar">
                                                                                                <div class="ecom-image-default">
                                                                                                    <img src="https://www.gravatar.com/avatar/{{ article.user.email | downcase | md5 }}" alt="{{ article.author }}">
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    {%- endif -%}
                                                                                `:""}
                                                                        `:""}
                                                                    ${this.lang(`${(ce=e==null?void 0:e.settings)!=null&&ce.hide_by_text?"":"By "}{{article_author}}`,"post_by_author",{article_author:"article_author"})}
                                                                </div>`}
                                                             ${(re=e==null?void 0:e.settings)!=null&&re.hide_time?"":`<div class="ecom-shopify__blog--post-published-at ecom-shopify__blog--post-informations">
                                                                    {% assign published_at = article.published_at | time_tag: format: '${r}'  %}
                                                                    ${(me=e==null?void 0:e.settings)!=null&&me.icon_time?`
                                                                            <span class="ecom-shopify__blog--post-informations-icon">${(ge=e==null?void 0:e.settings)==null?void 0:ge.icon_time}</span>
                                                                        `:""}
                                                                    <span>${this.lang(`${(de=e==null?void 0:e.settings)!=null&&de.hide_in_text?"":" in "}{{published_at}}`,"post_published_at",{published_at:"published_at"})}</span>
                                                                </div>`}
                                                        </div>
                                                    `},b="";for(var v of n[s])b+=m[v];return b;case"link":return`
                                                    <div class="ecom-shopify__blog--post-link-wrapper">
                                                        <a href="{{article.url }}" class="ecom-shopify__blog--post-link-btn ecom-flex ecom-al_center ecom-fl_center"  data-blog-handle="{{article.handle}}">
                                                            ${(_e=e==null?void 0:e.settings)!=null&&_e.text?`<span>${(ue=e==null?void 0:e.settings)==null?void 0:ue.text}</span>`:""}
                                                            ${(he=e==null?void 0:e.settings)!=null&&he.icon?`<span class="ecom__element--button-icon ecom-flex ecom-al_center ecom-fl_center">${(fe=e==null?void 0:e.settings)==null?void 0:fe.icon}</span>`:""}
                                                        </a>
                                                    </div>
                                                `;default:return""}}).join("")}
                                        ${this.is_horizontal_content?"</div>":""}
                                    </div>
                                    {% endfor %}
                                </div>
                                ${this.data.template!=="featured"&&((o=(i=this.data)==null?void 0:i.settings)==null?void 0:o.enable_pagination)&&((a=this.data.settings)==null?void 0:a.layout)==="grid"?`
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

                                                        ${this.data.settings.number_type!=="icon"?this.lang((g=this.data.settings)==null?void 0:g.text_next_page,"next_page"):""}

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
                                `:""}
                            {%- endpaginate -%}
                        {% else %}
                            ${this.exporting?"<div>No posts yet!</div>":"<div>Please select the blog in settings</div>"}
                        {% endif %}
                        {% assign blog = tmp_block %}
                        {% assign article = tmp_article %}
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
                    `}}},requestShopifyType(){return this.data.template==="featured"?{}:this.data.template==="featured"||this.data.template==="related"?{shopify_type:"article"}:{shopify_type:"blog"}},selected_blog(){return this.data&&this.data.settings&&this.data.settings.blog?this.data.settings.blog.value:""},is_horizontal_content(){return this.data&&this.data.settings&&this.data.settings.content_layout=="horizontal"},settings(){let t=[{group_title:"General",params:[{type:"popup",label:"Layout",name:"layout",options:{type:"dropdown",values:{grid:"Grid",slider:"Slider"},default:!1}},{type:"popup",label:"Content layout",name:"content_layout",options:{type:"dropdown",values:{vertical:"Vertical",horizontal:"Horizontal"},default:!1}},{type:"choose",label:"Image thumbnail position",name:"image_thumbnail_position",options:{type:"align-x",values:[-1,1],visible:{keep_data:!1,condition:i=>i.content_layout=="horizontal"}},css:{selector:" .ecom-shopify__blog--post-thumbnail--img",properties:{order:""}}},{type:"number",name:"limit",label:"Maximum articles to show",options:{min:1,max:30}},{type:"group",label:"Select Attributes to show",name:"attributes",params:[{type:"title",name:"Title",max:1,settings:[{type:"popup",label:"Heading Tag",name:"tag",options:{type:"dropdown",values:{h1:"Heading h1",h2:"Heading h2",h3:"Heading h3",h4:"Heading h4",h5:"Heading h5",h6:"Heading h6"}}}]},{type:"thumbnail",name:"Featured image",max:1,settings:[]},{type:"excerpt",name:"Post excerpt",max:1,settings:[{type:"number",name:"limit_words",label:"Maximum words to show",options:{min:5,max:200}}]},{type:"tags",name:"Post tags",max:1,settings:[{type:"paragraph",content:"Display all the tags for the article"}]},{type:"category",name:"Category",max:1,settings:[{type:"paragraph",content:"Display category for the article"}]},{type:"meta",name:"Post meta",max:1,settings:[{type:"toggle",label:"Hide Author",name:"hide_author",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"toggle",label:"Hide 'by' text",name:"hide_by_text",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"toggle",label:"Hide Time",name:"hide_time",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"toggle",label:"Hide 'in' text",name:"hide_in_text",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"toggle",label:"Hide Comment Count",name:"hide_comment_count",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"line"},{type:"picker",label:"Icon Time",name:"icon_time",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"picker",label:"Icon Comment",name:"icon_comment",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"picker",label:"Icon Author",name:"icon_author",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"paragraph",content:"Or"},{type:"popup",name:"avatar_type",label:"Avatar",options:{type:"dropdown",default:!1,preview:"title",values:{off:"Off",shopify:"Shopify avatar",gavatar:"G-Avatar"}}},{type:"picker",label:"Image Author default",name:"image_author",description:"Image default will display if user not avatar",options:{responsive:!1,type:"image",editAlt:!1,visible:{keep_data:!0,condition:i=>i.avatar_type=="shopify"}}},{type:"choose",label:"Icon, Image position",name:"icon_position",options:{type:"align-x",values:[-1,1]},css:{selector:" .ecom-shopify__blog--post-informations-icon",properties:{order:""}}},{type:"number",label:"Icon, Image spacing",name:"spacing",options:{units:{px:{min:0,max:200}}},css:{selector:" .ecom-shopify__blog--post-informations",properties:{gap:""}}},{type:"line"},{type:"popup",name:"meta_layout",label:"Meta layout",options:{type:"dropdown",default:!1,values:{one:"Layout 1",two:"Layout 2",three:"Layout 3",four:"Layout 4",five:"Layout 5"}}},{name:"layout4_meta_aligment",label:"Meta layout 4 alignment",type:"choose",options:{type:"text-align",values:["ecom-fl_left","ecom-fl_center","ecom-fl_right"],visible:{keep_data:!1,condition:i=>i.meta_layout=="four"}},css:{selector:" .ecom-shopify__blog--post-group-4",properties:{"text-align":""}}},{type:"text",name:"comment_count_text",label:"Comment text count",placeholder:"{{comment_count}} comment",description:"Use {{comment_count}} to show comment count"},{type:"text",name:"comments_count_text",label:"Many comments text count",placeholder:"{{comments_count}} comments",description:"Use {{comments_count}} to show comments count"},{type:"popup",name:"date_format",label:"Date format?",options:{type:"dropdown",values:{default:"Monday, December 31, 2018 at 1:00 pm -0500",abbreviated_date:"Aug 08, 1994",basic:"12/31/2021",date:"December 31, 2018",date_at_time:"December 31, 2018 at 1:00 pm",on_date:"on Dec 31, 2018"}}}]},{type:"link",name:"Read more link",max:1,settings:[{type:"text",label:"Read more text",name:"text",options:{placeholder:"Read more"}},{type:"picker",label:"Icon",name:"icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}}]}]}]},{group_title:"Grid settings",options:{visible:{keep_data:!1,condition:i=>i.layout==="grid"}},params:[{type:"number",label:"Items on row",name:"slider_items",value:3,options:{responsive:!0,min:1,max:6,step:1,slider:!0},css:{selector:" .ecom-shopify__blog--posts.ecom-grid",properties:{"grid-template-columns":"repeat(%value%,1fr)"}}},{type:"number",label:"Space between",name:"slider_spacing",options:{responsive:!0,min:0,max:64,slider:!0,input:!0},css:{selector:" .ecom-shopify__blog--posts.ecom-grid",properties:{gap:"%value%px"}}}]},{group_alias:"swiper",options:{options:{keep_data:!1,visible:i=>i.layout=="slider"}},modify:{remove:{name:["line_pagination","title_pagination","slider_pagination_style","slider_spacing_row"]}}}];return this.data.template==="blog"&&t.push({group_alias:"pagination:settings",options:{group_name:"",options:{visible:{keep_data:!1,condition:i=>i.layout!="slider"}}},modify:{params:[{position:10,fields:[{type:"toggle",label:"Use ajax pagination",name:"use_ajax",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}}]}]}}),this.data.template==="featured"&&t[0].params.splice(0,0,{type:"picker",name:"blog",label:"Select a blog",options:{type:"blog",layout:"list",multiple:!1}}),t},optionSwiper(){return this.$helpers.optionSwiper(this.data.settings)},default(){return{settings:{slider_items:3,limit:3,show_title:!0,slider_items__mobile:1,slider_items__tablet:2,slider_spacing:30,slider_navigation_layout:"classic_full",slider_prev_icon:'<svg xmlns="http: //www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>',slider_next_icon:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>',slider_effect:"slide",slider_speed:500,layout:"grid",attributes:[{type:"thumbnail"},{type:"title",settings:{tag:"h2"}},{type:"excerpt",settings:{limit_words:12}},{type:"meta",settings:{meta_layout:"four",comments_count_text:"{{comments_count}} comments",comment_count_text:"{{comment_count}} comment",date_format:"abbreviated_date"}},{type:"tags",settings:{}},{type:"link",settings:{text:"Read more"}}],text_prev_page:"Prev",text_next_page:"Next",enable_pagination:!0,pagination_style:"inline","grid-column-gap":"10px",number_type:"icon",icon_prev_page:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',icon_next_page:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>'},style:{blog_articles_img:{"justify-content":"center",imageOpacitynormalmode:1,imageOpacityhovermode:1,spacing:{margin:{bottom:"24px"}},tab:"normal"},blog_articles_title:{textTextAlign:"left",spacing:{margin:{bottom:"6px",top:"0px",left:"0px",right:"0px"},padding:{bottom:"0px",top:"0px",left:"0px",right:"0px"}},tab:"normal",textTypography:{"font-size":"18px"}},blog_articles_description:{textTextAlign:"left",spacing:{margin:{bottom:"8px",top:"0px",left:"0px",right:"0px"},padding:{bottom:"0px",top:"0px",left:"0px",right:"0px"}}},blog_articles_datetime:{textTextAlign:"left",spacing:{margin:{bottom:"0px",top:"0px",left:"0px",right:"0px"},padding:{bottom:"0px",top:"0px",left:"0px",right:"0px"}},textTypography:{"font-style":"italic"}},blog_articles_author:{spacing:{padding:{bottom:"0px",top:"0px",left:"0px",right:"0px"},margin:{top:"0px",left:"0px",bottom:"0px",right:"8px"}},textTextAlign:"left",textTypography:{"font-weight":"300","font-style":"italic"}},blog_articles_comment_count:{textTextAlign:"left",spacing:{margin:{bottom:"0px",top:"0px",left:"0px",right:"0px"},padding:{bottom:"0px",top:"0px",left:"0px",right:"0px"}}},blog_articles_pagination:{buttonAlignment:"center",spacing:{margin:{top:"20px"}},buttonColornormalmode:"#111827",buttonBackgroundnormalmode:{classic:{"background-color":"rgba(17, 24, 39, 0.1)"}},buttonColorhovermode:"#111827",buttonBackgroundhovermode:{classic:{"background-color":"rgba(17, 24, 39, 0.2)"}},buttonColoractivemode:"#ffffff",buttonBackgroundactivemode:{classic:{"background-color":"#111827"}},padding:{left:"20px",top:"8px",bottom:"8px",right:"20px"},tab:"normal"},blog_articles_tags:{tab:"normal",spacing:{margin:{top:"0px"}}},slider_arrow:{navtab:"normal",tab:"normal",panigationSpacing:{margin:{top:"10px",right:"6px",left:"0px",bottom:"0px"},padding:{top:"6px",left:"6px",bottom:"6px",right:"6px"}},panigationColornormalmode:"#948f8f",panigationColoractivemode:"#d43b3b",navigatorFontSize:"30px",iconTransform:0},blog_articles_link_btn:{iconFontSize:"16px",icon_spacing:"10px",content_alignment:"flex-start"}}}}},watch:{optionSwiper:{deep:!0,handler:function(){this.articles.refresh=this.$helpers.randid()}}},methods:{check(t){var o;let i=!1;for(let a=0;a<((o=this.data.settings.attributes)==null?void 0:o.length);a++)this.data.settings.attributes[a].type==t&&(i=!0);return i},isArrow(){var t,i,o,a;return((t=this.data.settings)==null?void 0:t.slider_navigation_layout)==="neo_full"||((i=this.data.settings)==null?void 0:i.slider_navigation_layout)==="neo_navigator"||((o=this.data.settings)==null?void 0:o.slider_navigation_layout)==="classic_full"||((a=this.data.settings)==null?void 0:a.slider_navigation_layout)==="navigator"},isPagination(){var t,i,o;return((t=this.data.settings)==null?void 0:t.slider_navigation_layout)==="neo_full"||((i=this.data.settings)==null?void 0:i.slider_navigation_layout)==="classic_full"||((o=this.data.settings)==null?void 0:o.slider_navigation_layout)==="pagination"},style(){let t=[this.check("thumbnail")?{group_alias:"image",options:{selector:" .ecom-shopify__blog--post-thumbnail--img .ecom-image-default",group_name:"blog_articles_img",group_title:"Image"},modify:{params:[{position:0,fields:{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-image-align"}}}},{position:20,fields:{alias:"spacing",options:{css:{selector:"root .ecom-image-align"}}}}]}}:null,this.check("title")?{group_alias:"text:hover",options:{selector:" .ecom-shopify__blog--post-link:not(.ecom-image-default) > .ecom-shopify__blog--post-title",group_name:"blog_articles_title",group_title:"Title"},modify:{params:{position:30,fields:{alias:"spacing"}}}}:null,this.check("excerpt")?{group_alias:"text:spacing",options:{selector:" .ecom-shopify__blog--post-excerpt",group_name:"blog_articles_description",group_title:"Description"}}:null,this.check("tags")?{group_alias:"button",options:{selector:" .ecom-shopify__blog--post-tags li a",group_name:"blog_articles_tags",group_title:"Tags"},modify:{params:[{position:0,fields:{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-image-align"}}}}]}}:null].filter(a=>a);this.check("meta")&&t.push({group_alias:"text:spacing",options:{selector:" .ecom-shopify__blog--post-published-at",group_name:"blog_articles_datetime",group_title:"Datetime"}},{group_alias:"text:spacing",options:{selector:" .ecom-shopify__blog--post-author",group_name:"blog_articles_author",group_title:"Author"}},{group_alias:"text:spacing",options:{selector:" .ecom-shopify__blog--post-category a",group_name:"blog_articles_category",group_title:"Category"}},{group_alias:"text:spacing",options:{selector:" .ecom-shopify__blog--post-comments_count span",group_name:"blog_articles_comment_count",group_title:"Comment Count"}},{group_alias:"icon",options:{group_name:"icon",group_title:"Meta Icon",selector:" .ecom-shopify__blog--post-informations-icon"},modify:{params:[{position:15,fields:[{type:"line"},{alias:"spacing"}]}]}},{group_alias:"image",options:{selector:" .ecom-shopify__blog--post-informations-author-avatar",group_name:"blog_meta_img",group_title:"Meta Avatar"},modify:{remove:{label:"Width",length:1},params:{position:1,fields:[{type:"number",name:"imageWidth",label:"Image Width",options:{responsive:!0,reset:!0,units:{"%":{min:0,max:100},px:{min:0,max:1e3},vw:{min:0,max:100}}},css:{important:!0,properties:{width:""}}}]}}}),this.check("link")&&t.push({group_alias:"button",options:{selector:" .ecom-shopify__blog--post-link-btn",group_name:"blog_articles_link_btn",group_title:"Read more link"},modify:{params:[{position:0,fields:[{type:"paragraph",content:"** Icon **",name:"title_icon"},{name:"iconFontSize",label:"Size",type:"number",options:{responsive:!0,units:{px:{min:0,max:300}}},css:{selector:" svg",properties:{height:"",width:""}}},{name:"iconTransform",label:"Rotate",type:"number",options:{responsive:!0,min:0,max:360},css:{selector:" svg",properties:{transform:"rotate(%value%deg)"}}},{type:"choose",label:"Icon position",name:"icon_position",options:{type:"align-x",values:[-1,1]},css:{selector:" .ecom__element--button-icon",properties:{order:""}}},{type:"number",label:"Icon spacing",name:"icon_spacing",options:{units:{px:{min:0,max:200}}},css:{properties:{gap:""}}},{type:"line"},{type:"paragraph",content:"** Link **",name:"title_link"},{alias:"align-items",options:{label:"Content alignment",name:"content_alignment",css:{properties:{"justify-content":""}}}}]}]}}),this.data.template!=="featured"&&this.data.settings.enable_pagination&&this.data.settings.layout!=="slider"&&t.push({group_alias:"pagination",options:{selector:" .ecom-pagination-navigation",group_name:"blog_articles_pagination"},modify:this.data.settings.pagination_style!=="block"?{params:[{position:1,fields:{type:"choose",name:"buttonAlignment",label:"Alignment",options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{display:"flex","justify-content":""}}}},{position:4,fields:{type:"choose",name:"page_txt_alignment_horizontal",label:"Text alignment<small>(horizontal)</small>",options:{responsive:!0,type:"align-x-full",values:["left","center","right"]},css:{selector:" .ecom-pagination-item",properties:{"text-align":"","justify-content":""}}}},{position:4,fields:{type:"choose",name:"page_txt_alignment_vertical",label:"Text alignment<small>(vertical)</small>",options:{responsive:!0,type:"align-y-full",values:["start","center","end"]},css:{selector:" .ecom-pagination-item",properties:{"align-items":""}}}}]}:null});let i=[];this.isArrow()&&i.push({title:"Navigator",type:"swiper:nav"}),this.isPagination()&&i.push({title:"Pagination",type:"swiper:pagination"});let o={};return this.isCombined==="combine"&&(o={params:[{alias:"spacing",options:{name:"spacingNavigation",css:{selector:" .ecom-swiper-navigation"}}},{type:"line"}],remove:{name:"justify-content"}}),i.length&&t.push({group_alias:i,options:{group_title:"Navigation",group_name:"slider_arrow",selector:" .ecom-shopify__blog-wrapper"},modify:o}),t}}},Ce={class:"ecom-element ecom-shopify-elements ecom-shopify__blog"},Te={class:"ecom-shopify__blog-wrapper"},Ae=["data-items-on-row","data-option-swiper","innerHTML"],Se=["data-navigator-type"],je={class:"ecom-flex-center"},Ne=["innerHTML"],Le={class:"ecom-swiper-pagination"},ze=["innerHTML"],He=["data-items-on-row","innerHTML"],Be={class:"ecom-collection__product-loading ecom-dn"},Ie={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"none",display:"block","shape-rendering":"auto"},width:"48px",height:"48px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},Me=p("path",{d:"M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50",fill:"#0a0a0a",stroke:"none"},[p("animateTransform",{attributeName:"transform",type:"rotate",dur:"0.5434782608695652s",repeatCount:"indefinite",keyTimes:"0;1",values:"0 50 51;360 50 51"})],-1),qe=[Me];function De(t,i,o,a,g,e){return h(),f("div",Ce,[p("div",Te,[e.layout==="slider"?(h(),f(ke,{key:0},[p("div",{class:"ecom-shopify__blog-container ecom-swiper-container","data-items-on-row":e.items_on_row,"data-option-swiper":e.optionSwiper,innerHTML:t.liquid("blog")},null,8,Ae),e.isNavigation?(h(),f("div",{key:0,class:"ecom-swiper-navigation","data-navigator-type":e.isCombined},[p("div",je,[x(p("button",{class:"ecom-swiper-button ecom-swiper-button-prev",innerHTML:e.articles.settings.slider_prev_icon},null,8,Ne),[[w,e.isArrow()]]),x(p("div",Le,null,512),[[w,e.isPagination()]]),x(p("button",{class:"ecom-swiper-button ecom-swiper-button-next",innerHTML:e.articles.settings.slider_next_icon},null,8,ze),[[w,e.isArrow()]])])],8,Se)):$e("",!0)],64)):(h(),f("div",{key:1,class:"ecom-shopify__blog-container","data-items-on-row":e.items_on_row,innerHTML:t.liquid("blog")},null,8,He)),p("div",Be,[(h(),f("svg",Ie,qe))])])])}const Ye=ye(be,[["render",De]]);be.__docgenInfo={exportName:"default",displayName:"BlogFeatured",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Blog/Articles.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{Ye as default};
//# sourceMappingURL=Articles.d973d08d.js.map
