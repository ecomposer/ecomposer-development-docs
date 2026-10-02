import{_ as q,L as j,E as A,J as H}from"./preview.95a7df14.js";import{o as B,a as D,y as C}from"./vue.esm-bundler.b9dec9d9.js";import"./chunk-KSYMO6G6.f719e32d.js";import"./index.e850844b.js";import"./iframe.048ad53f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.f037b798.js";const S={name:"ShopifyMenu",mixins:[j,A,H],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["show_all_items_menu"]}},computed:{liquids(){var e,i,m,l,o,c,r,s,u,d,v,f,y;return{linklists:{code:`
                        {%- capture link_handle -%}${this.link_list?this.link_list:""}{%- endcapture -%}
                            {%- unless link_handle == empty -%}
                            {%- assign menu = linklists[link_handle] -%}
                            {% if menu == blank %}
                                {%- assign menu = linklists['main-menu'] -%}
                            {% endif %}
                            {%- capture show_humber -%}${(e=this.data.settings)!=null&&e.show_humber?(i=this.data.settings)==null?void 0:i.show_humber:!1}{%- endcapture -%}
                            {%- capture icon_menu -%}${(m=this.data.settings)!=null&&m.icon_menu?(o=(l=this.data.settings)==null?void 0:l.icon_menu)==null?void 0:o.value:""}{%- endcapture -%}
                            {%- capture icon_menu_active -%}${(c=this.data.settings)!=null&&c.icon_menu_active?(s=(r=this.data.settings)==null?void 0:r.icon_menu_active)==null?void 0:s.value:""}{%- endcapture -%}
                            {%- if show_humber == 'true' -%}
                                <div class="ecom-menu__icon-humber--wrapper">
                                <div class="ecom-menu__icon-humber">
                                    ${(d=(u=this.data.settings)==null?void 0:u.icon_humber)!=null&&d.value?(f=(v=this.data.settings)==null?void 0:v.icon_humber)==null?void 0:f.value:""}
                                </div>
                                </div>
                                <div class="ecom-shopify__menu-list--mobile--wrapper">
                                <ul class="ecom-shopify__menu-list--mobile" data-show-humber="${(y=this.data.settings)==null?void 0:y.show_humber}">
                                    <div class="modal-header">
                                    <span class="ecom-menu-collapse-close--mobile">
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </span>
                                    </div>
                                    {% if menu and menu.links.size %}
                                    {% for link in menu.links %}
                                        {% assign child_link = link.links %}
                                        <li class="ecom-shopify__menu-item ecom-shopify__menu-item-type--{{link.type}} {% if child_link.size > 0 %}ecom-shopify__menu-item--has-children {% else %} ecom-shopify__menu-item--link {% endif %} ">
                                        <div class="ecom-menu_item ecom-items">
                                            <a
                                            class="ecom-menu_title ecom-element--menu_title {% if link.active or link.child_active %} ecom-shopify__menu-item--active ecom-text-active {% endif %}"
                                            href="{{link.url}}"
                                            title="{{link.title | strip_html | escape }}"
                                            target="${this.link_target}"
                                            >
                                            {{ link.title }}
                                            {%- if link.levels > 0 -%}
                                                <div class="ecom-element--menu_icon">
                                                <div class="ecom-items--icon ecom-element--menu_icon--normal">
                                                    {{ icon_menu }}
                                                </div>
                                                <div class="ecom-items--icon ecom-element--menu_icon--active">
                                                    {{ icon_menu_active }}
                                                </div>
                                                </div>
                                            {%- endif -%}
                                            </a>
                                        </div>
                                        {% if child_link.size > 0 %}
                                            <ul
                                            class="ecom-shopify__menu-sub-menu"
                                            data-menu-size="{{child_link.size}}"
                                            data-menu-level="{{child_link.level}}"
                                            >
                                            {% for child in child_link %}
                                                {% assign grand_link = child.links %}
                                                <li class="ecom-shopify__menu-child-link-item ecom-shopify__menu-child-link-item-type--{{child.type}} {% if grand_link.size > 0 %}ecom-shopify__menu-child-link-item--has-children {% else %} ecom-shopify__menu-item--link {% endif %} {% if child.active or child.child_active%} ecom-shopify__menu-child-link-item--active ecom-text-active{% endif %}">
                                                <div class="ecom-menu_item ecom-items">
                                                    <a
                                                    class="ecom-menu_title ecom-element--menu_title"
                                                    href="{{child.url}}"
                                                    title="{{child.title | escape }}"
                                                    target="${this.link_target}"
                                                    >
                                                    {{ child.title }}
                                                    {%- if child.levels > 0 -%}
                                                        <div class="ecom-element--menu_icon">
                                                        <div class="ecom-items--icon ecom-element--menu_icon--normal">
                                                            {{ icon_menu }}
                                                        </div>
                                                        <div class="ecom-items--icon ecom-element--menu_icon--active">
                                                            {{ icon_menu_active }}
                                                        </div>
                                                        </div>
                                                    {%- endif -%}
                                                    </a>
                                                </div>
                                                {% if grand_link.size > 0 %}
                                                    <ul
                                                    class="ecom-shopify__menu-sub-menu"
                                                    data-menu-size="{{grand_link.size}}"
                                                    data-menu-level="{{child_link.level}}"
                                                    >
                                                    {% for grand in grand_link %}
                                                        <li class="ecom-shopify__menu-grand-link-item ecom-menu_item ecom-items ecom-shopify__menu-grand-link-item-type--{{grand.type}} {% if grand.active or grand.child_active %}ecom-shopify__menu-grand-link-item--active ecom-text-active{% endif %}">
                                                        <a
                                                            class="ecom-menu_title ecom-element--menu_title"
                                                            href="{{grand.url}}"
                                                            title="{{grand.title | escape }}"
                                                            target="${this.link_target}"
                                                        >
                                                            {{ grand.title }}
                                                        </a>
                                                        </li>
                                                    {% endfor %}
                                                    </ul>
                                                {%- endif -%}
                                                </li>
                                            {% endfor %}
                                            </ul>
                                        {% endif %}
                                        </li>
                                    {% endfor %}
                                    {% endif %}
                                </ul>
                                </div>
                            {%- endif -%}
                            <div class="ecom-shopify__menu-list--wrapper ecom-flex">
                                <ul class="ecom-shopify__menu-list" data-menu-layout="${this.layout}">
                                {% if menu and menu.links.size %}
                                    {% for link in menu.links %}
                                    {% assign child_link = link.links %}
                                    <li class="ecom-shopify__menu-item ecom-shopify__menu-item-type--{{link.type}} {% if child_link.size > 0 %}ecom-shopify__menu-item--has-children {% else %} ecom-shopify__menu-item--link {% endif %}">
                                        <div class="ecom-menu_item ecom-items">
                                        <a
                                            class="ecom-menu_title ecom-element--menu_title {% if link.active or link.child_active %} ecom-shopify__menu-item--active ecom-text-active {% endif %}"
                                            href="{{link.url}}"
                                            title="{{link.title | strip_html | escape }}"
                                            target="${this.link_target}"
                                        >
                                            {{ link.title }}
                                            {%- if link.levels > 0 -%}
                                            <div class="ecom-element--menu_icon">
                                                <div class="ecom-items--icon ecom-element--menu_icon--normal">
                                                {{ icon_menu }}
                                                </div>
                                                <div class="ecom-items--icon ecom-element--menu_icon--active">
                                                {{ icon_menu_active }}
                                                </div>
                                            </div>
                                            {%- endif -%}
                                        </a>
                                        </div>
                                        {% if child_link.size > 0 %}
                                        {%- capture layout -%}
                                                    ${this.data.settings.layout}
                                                    {%- endcapture -%}
                                        <ul
                                            class="ecom-shopify__menu-sub-menu"
                                            data-menu-size="{{child_link.size}}"
                                            data-menu-level="{{child_link.level}}"
                                        >
                                            {% for child in child_link %}
                                            {% assign grand_link = child.links %}
                                            <li class="ecom-shopify__menu-child-link-item ecom-shopify__menu-child-link-item-type--{{child.type}} {% if grand_link.size > 0 %}ecom-shopify__menu-child-link-item--has-children {% else %} ecom-shopify__menu-item--link {% endif %}">
                                                <div class="ecom-menu_item ecom-items">
                                                <a
                                                    class="ecom-menu_title ecom-element--menu_title"
                                                    href="{{child.url}}"
                                                    title="{{child.title | escape }}"
                                                    target="${this.link_target}"
                                                >
                                                    {{ child.title }}
                                                    {%- if child.levels > 0 -%}
                                                    <div class="ecom-element--menu_icon">
                                                        <div class="ecom-items--icon ecom-element--menu_icon--normal">
                                                        {{ icon_menu }}
                                                        </div>
                                                        <div class="ecom-items--icon ecom-element--menu_icon--active">
                                                        {{ icon_menu_active }}
                                                        </div>
                                                    </div>
                                                    {%- endif -%}
                                                </a>
                                                {% if grand_link.size > 0 and layout == 'horizontal' %}
                                                    {% for grand in grand_link %}
                                                    <a
                                                        class="ecom-menu_title ecom-element--menu_title {% if grand.active %} ecom-shopify__menu-child-link-item--active ecom-text-active{% endif %}"
                                                        href="{{grand.url}}"
                                                        title="{{grand.title | strip_html | escape }}"
                                                        target="${this.link_target}"
                                                    >
                                                        {{ grand.title }}
                                                    </a>
                                                    {% endfor %}
                                                {% endif %}
                                                </div>
                                                {% if grand_link.size > 0 and layout == 'vertical' %}
                                                <ul
                                                    class="ecom-shopify__menu-sub-menu"
                                                    data-menu-size="{{grand_link.size}}"
                                                    data-menu-level="{{child_link.level}}"
                                                >
                                                    {% for grand in grand_link %}
                                                    <li class="ecom-shopify__menu-grand-link-item ecom-menu_item ecom-items ecom-shopify__menu-grand-link-item-type--{{grand.type}} {% if grand.active or grand.child_active %}ecom-shopify__menu-grand-link-item--active ecom-text-active{% endif %}">
                                                        <a
                                                        class="ecom-menu_title ecom-element--menu_title"
                                                        href="{{grand.url}}"
                                                        title="{{grand.title | escape }}"
                                                        target="${this.link_target}"
                                                        >
                                                        {{ grand.title }}
                                                        </a>
                                                    </li>
                                                    {% endfor %}
                                                </ul>
                                                {%- endif -%}
                                            </li>
                                            {% endfor %}
                                        </ul>
                                        {% endif %}
                                    </li>
                                    {% endfor %}
                                {% endif %}
                                </ul>
                            </div>
                            {% else %}
                            <p>Select a menu to show</p>
                            {%- endunless -%}
                        `,preview:"The sample text for menu"}}},csrContext(){var m,l;const e=(l=(m=this.data)==null?void 0:m.settings)==null?void 0:l.link_list;return{type:"menu",handle:e?typeof e=="object"?e.value:e:null,name:e==null?void 0:e.name}},settings(){return[{params:[{type:"picker",name:"link_list",label:this.$t("pick_a_menu"),options:{type:"menu",layout:"list",multiple:!1}},{type:"dropdown",name:"layout",label:this.$t("menu_layout"),options:{default:!1,preview:"title",values:{horizontal:this.$t("horizontal"),vertical:this.$t("vertical")}}},{type:"toggle",label:this.$t("show_all_items_by_default"),name:"show_all_items_menu",options:{visible:e=>e.layout==="vertical",values:{on:{label:this.$t("show"),value:!0},off:{label:this.$t("hide"),value:!1}}},css:!1},{type:"toggle",label:this.$t("open_item_in_new_tab"),name:"open_in_new_tab",options:{values:{on:{label:this.$t("show"),value:!0},off:{label:this.$t("hide"),value:!1}}},css:!1},{type:"toggle",label:this.$t("toggle_submenu_on_arrow_only"),name:"toggle_submenu_on_arrow",options:{visible:e=>e.layout==="vertical",values:{on:{label:this.$t("show"),value:!0},off:{label:this.$t("hide"),value:!1}}},css:!1},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"active",title:this.$t("active")}]},css:{isCss:!1}},{type:"picker",label:this.$t("icon"),name:"icon_menu",options:{reset:!0,type:"icon",multiple:!1,visible:e=>e&&e.tab==="normal"},css:{isCss:!1}},{type:"picker",label:this.$t("icon"),name:"icon_menu_active",options:{visible:e=>e&&e.tab==="active",reset:!0,type:"icon",multiple:!1},css:{isCss:!1}},{type:"line"},{type:"switch",name:"show_humber",label:this.$t("show_menu_icon_on_tablet_and_mobile"),options:{values:{on:{label:this.$t("show"),value:!0},off:{label:this.$t("hide"),value:!1}}}},{type:"picker",label:this.$t("icon"),name:"icon_humber",options:{visible:e=>e.show_humber===!0,reset:!1,type:"icon",multiple:!1},css:{isCss:!1}}]}]},link_target(){var e,i;return(i=(e=this.data)==null?void 0:e.settings)!=null&&i.open_in_new_tab?"_blank":"_self"},layout(){return this.data&&this.data.settings&&this.data.settings.layout?this.data.settings.layout:"horizontal"},icon_menu(){var e,i;return(i=(e=this.data)==null?void 0:e.settings)==null?void 0:i.icon_menu},icon_menu_active(){var e,i;return(i=(e=this.data)==null?void 0:e.settings)==null?void 0:i.icon_menu_active},style(){var c,r;let e=[{group_alias:"box",options:{group_title:this.$t("general")},modify:{params:[{position:2,fields:[{alias:"justify-content",options:{css:{selector:"root .ecom-element.ecom-shopify.ecom-shopify__menu-container .ecom-shopify__menu-list[data-menu-layout='horizontal'], .ecom-shopify__menu-list--wrapper"},label:this.$t("alignment")}}]}]}},{group_alias:"text:active",options:{group_title:this.$t("link"),css:{selector:" .ecom-shopify__menu-item a"}},modify:{remove:{index:0,length:1},params:[{position:1,fields:[{alias:"justify-content",options:{label:this.$t("alignment")}}]},{position:20,fields:["normal","hover","active"].map(s=>{const u={hover:":hover",active:".ecom-text-active"}[s];return{type:"popup",label:this.$t("border"),name:`linkBorder_${s}`,options:{type:"border",visible:d=>d.tab===s},css:{properties:{border:""},...u?{selector:u}:{}}}})},{position:21,fields:[{type:"line"},{alias:"spacing"}]}]}}],i={group_alias:"icon",options:{group_title:this.$t("menu_icon_on_tablet_mobile"),selector:" .ecom-menu__icon-humber"},modify:{params:[{position:0,fields:[{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:"root .ecom-menu__icon-humber--wrapper"}}}]}]}},m={group_alias:"box",options:{group_title:this.$t("menu_box_on_tablet_mobile"),group_name:"box_responsive",selector:" .ecom-shopify__menu-list--mobile--wrapper .ecom-shopify__menu-list--mobile"},modify:{params:[{position:0,fields:[{type:"number",label:this.$t("width"),name:"width",options:{units:{"%":{min:0,max:100}}},css:{important:!0}}]},{position:20,fields:{alias:"spacing"}}]}},l={group_alias:"icon",options:{group_title:this.$t("icon"),group_name:"icon__",selector:" .ecom-element--menu_icon .ecom-items--icon"},modify:{params:[{position:20,fields:{alias:"spacing"}}]}};e.push(l);let o={group_alias:"box",options:{group_name:"sub_menu",group_title:this.$t("sub_menu"),selector:' .ecom-shopify__menu-list[data-menu-layout="horizontal"] .ecom-shopify__menu-item ul.ecom-shopify__menu-sub-menu'},modify:{remove:{},params:[{position:20,fields:[{alias:"spacing"}]}]}};return((c=this.data.settings)==null?void 0:c.layout)=="horizontal"&&e.push(o),(r=this.data.settings)!=null&&r.show_humber&&(e.push(m),e.push(i)),e},javascript(){return function(){if(!this.$el)return;const e=this.$el,i=this,m=this.settings.layout;let l=e.closest(".core__row--columns");const o=e.querySelector(".ecom-shopify__menu-list--mobile"),c=e.querySelector(".ecom-menu__icon-humber"),r=e.querySelector(".ecom-menu-collapse-close--mobile");let s=e.closest("div.ecom-core.core__block")||"",u=e.closest("div.ecom-column.ecom-core")||"",d=e.querySelectorAll(".ecom-shopify__menu-item--link");for(s&&(s.style.overflow="visible"),d&&o&&d.forEach(function(t){t.addEventListener("click",function(){g()})}),c&&(c.addEventListener("click",v),r.addEventListener("click",g));l;)l.style.zIndex="100",l=l.parentElement.closest(".core__row--columns");function v(){!o||(o.parentNode.style.display="block",o.classList.add("ecom-show"),s&&(s.style.zIndex="100"),u&&(u.style.zIndex="100"),document.querySelector("body").classList.add("ecom-menu-opened"),setTimeout(function(){document.addEventListener("click",f),document.addEventListener("keydown",y)},500))}function f(t){let _=t.target;do{if(_==o)return;_=_.parentNode}while(_);_!=o&&(g(),document.removeEventListener("click",f),document.removeEventListener("keydown",y))}function y(t){(t.isComposing||t.keyCode===27)&&(g(),document.removeEventListener("keydown",y),document.removeEventListener("click",f))}function g(){o.parentNode.style.display="none",o.classList.remove("ecom-show"),e.querySelectorAll("ecom-menu_item.ecom-item-active").forEach(function(t){t.classList.remove("ecom-item-active")}),s&&(s.style.zIndex="1"),u&&(u.style.zIndex="1"),document.querySelector("body").classList.remove("ecom-menu-opened"),document.removeEventListener("keydown",y),document.removeEventListener("click",f)}let $=e.querySelector('.ecom-shopify__menu-list[data-menu-layout="horizontal"]'),k=null;$&&(k=$.querySelectorAll(".ecom-shopify__menu-item--has-children>.ecom-menu_item>.ecom-element--menu_title")),k&&k.forEach(function(t){t.addEventListener("click",function(_){_.preventDefault()})});function M(){var t=e.querySelectorAll(".ecom-shopify__menu-list .ecom-shopify__menu-item--has-children > .ecom-menu_item, .ecom-shopify__menu-list .ecom-shopify__menu-child-link-item--has-children > .ecom-menu_item"),_=e.querySelectorAll(".ecom-shopify__menu-list--mobile .ecom-shopify__menu-item--has-children > .ecom-menu_item, .ecom-shopify__menu-list--mobile .ecom-shopify__menu-child-link-item--has-children > .ecom-menu_item");if(!!t){var a,w="false",x=e.querySelector(".ecom-shopify__menu-wrapper");if(x&&x.dataset.showAll)var w=x.dataset.showAll;for(a=0;a<t.length;a++){let b=function(n){let h=n.nextElementSibling,p=null;if(n.classList.contains("ecom-item-active")){if(n.classList.remove("ecom-item-active"),h){h.style.maxHeight=null;var z=h.querySelectorAll(".ecom-menu_item");z&&z.forEach(L=>{var E=L.nextElementSibling;E&&(E.style.maxHeight=null),L.classList.remove("ecom-item-active")}),p=n.closest(".ecom-shopify__menu-sub-menu"),p&&(p.style.maxHeight=parseInt(p.style.maxHeight)-h.scrollHeight+"px")}}else n.classList.add("ecom-item-active"),h&&(p=n.closest(".ecom-shopify__menu-sub-menu"),p&&(p.style.maxHeight=parseInt(p.style.maxHeight)+h.scrollHeight+"px"),h.style.maxHeight=h.scrollHeight+"px")};if(m==="horizontal"&&!i.isLive)t[a].addEventListener("click",function(n){n.preventDefault()});else if(m==="horizontal"&&i.isLive)t[a].addEventListener("click",function(n){n.stopPropagation()});else if((m==="vertical"||!i.isLive)&&(w&&w=="true"&&b(t[a]),t[a].addEventListener("click",function(n){i.settings.toggle_submenu_on_arrow||(n.preventDefault(),b(this))}),i.settings.toggle_submenu_on_arrow)){let n=t[a].querySelector(".ecom-element--menu_icon");if(n){let h=t[a];n.addEventListener("click",function(p){p.preventDefault(),b(h)})}}_[a]&&_[a].addEventListener("click",function(n){n.preventDefault(),b(this)})}}}M()}},show_all_items_menu(){var e,i;return(i=(e=this.data)==null?void 0:e.settings)==null?void 0:i.show_all_items_menu},link_list(){return this.data&&this.data.settings&&this.data.settings.link_list&&this.data.settings.link_list.value?this.data.settings.link_list.value:null},css(){return`
 .ecom-element.ecom-shopify.ecom-shopify__menu-container .ecom-shopify__menu-list--mobile--wrapper {
 display: none;
 position: fixed;
 z-index: 100;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 background:rgb(116,119,121,.6);
 }
.ecom-shopify__menu-list--mobile--wrapper .ecom-shopify__menu-list--mobile {
position:fixed;
 width: 350px;
 max-width: 90%;
padding: 40px 20px;
 background:white;
 top:0;
 bottom:0;
 left:0;
z-index: 100;
 -webkit-animation-name: ecom-animation-menu__left-to-right;
 animation-name: ecom-animation-menu__left-to-right;
 -webkit-animation-duration: .3s;
 animation-duration: .3s;
 -webkit-animation-fill-mode: both;
 animation-fill-mode: both;
 transition:all .3s linear;
}
@keyframes ecom-animation-menu__left-to-right {
 from {
 opacity: 0;
 transform: translateX(-100%);
 }
 to {
 opacity: 1;
 transform: translateX(0);
 }
 }
 .ecom-element.ecom-shopify.ecom-shopify__menu-container .ecom-shopify__menu-list[data-menu-layout="horizontal"] {
display: flex;
flex-flow: wrap;
align-content: center;
justify-content: center;
align-items: center;
list-style: none;
position:relative;
}

.ecom-shopify__menu-container .ecom-shopify__menu-list[data-menu-layout="horizontal"] .ecom-shopify__menu-item{
position:relative;
display:block;
}
.ecom-shopify__menu-list[data-menu-layout="horizontal"] .ecom-shopify__menu-item--has-children:hover>ul.ecom-shopify__menu-sub-menu  {
opacity:1;
z-index: 9;
visibility:visible;
 transform: translate(-50%, 0);
}
 .ecom-shopify__menu-list[data-menu-layout="horizontal"] .ecom-shopify__menu-item--has-children:hover  .ecom-menu_item .ecom-element--menu_icon .ecom-element--menu_icon--active {
 display: flex;
 }
 .ecom-shopify__menu-list[data-menu-layout="horizontal"] .ecom-shopify__menu-item--has-children:hover  .ecom-menu_item .ecom-element--menu_icon .ecom-element--menu_icon--normal {
 display: none;
 }
.ecom-shopify__menu-list[data-menu-layout="horizontal"] .ecom-shopify__menu-item ul.ecom-shopify__menu-sub-menu {
display: flex;
flex-direction: column;
opacity: 0;
visibility: hidden;
position:absolute;
list-style: none;
 transform: translate(-50%, 10px);
 transition: .5s ease all;
left: 50%;
background-color: #fff;
border: 1px solid #eee;
width: max-content;
}
 .ecom-shopify__menu-container .ecom-shopify__menu-list[data-menu-layout="horizontal"] .ecom-shopify__menu-sub-menu .ecom-element--menu_icon {
 display: none;
 }
 .ecom-shopify__menu-container .ecom-shopify__menu-list[data-menu-layout="horizontal"] .ecom-shopify__menu-sub-menu .ecom-menu_item.ecom-items {
 padding: 10px;
 }
 .ecom-shopify__menu-container .ecom-shopify__menu-list[data-menu-layout="horizontal"] .ecom-shopify__menu-child-link-item--has-children .ecom-element--menu_title:first-child {
 margin-bottom: 10px;
 position: relative;
 font-weight: 500;
 text-transform: uppercase;
 pointer-events: none;
 cursor: inherit;
 }
 .ecom-shopify__menu-container .ecom-shopify__menu-list[data-menu-layout="horizontal"] .ecom-shopify__menu-child-link-item--has-children .ecom-element--menu_title:first-child::before {
 content: "";
 position: absolute;
 width: 30px;
 height: 1px;
 background-color: rgba(0 0 0 /.3);
 bottom: 0;
 left: 10px;
 }
.ecom-shopify__menu-container .ecom-shopify__menu-list[data-menu-layout="vertical"] ul.ecom-shopify__menu-sub-menu, .ecom-shopify__menu-container .ecom-shopify__menu-list--mobile ul.ecom-shopify__menu-sub-menu {
max-height: 0;
overflow: hidden;
margin-left: 8px;
transition: .25s ease all;
}
.ecom-shopify__menu-list .ecom-shopify__menu-item .ecom-menu_item .ecom-element--menu_title
 , .ecom-shopify__menu-list--mobile .ecom-shopify__menu-item .ecom-menu_item .ecom-element--menu_title{
display: flex;
}
.ecom-shopify__menu-list, .ecom-shopify__menu-list--mobile {
list-style: none;
}
.ecom-menu_item:not(.ecom-menu_item.ecom-item-active) .ecom-element--menu_icon .ecom-element--menu_icon--normal {
display: flex;
}

.ecom-menu_item:not(.ecom-menu_item.ecom-item-active) .ecom-element--menu_icon .ecom-element--menu_icon--active {
display: none;
}

.ecom-menu_item.ecom-item-active .ecom-element--menu_icon .ecom-element--menu_icon--normal {
display: none;
}

.ecom-menu_item.ecom-item-active .ecom-element--menu_icon .ecom-element--menu_icon--active {
display: flex;
}
.ecom-element--menu_icon {
display: flex;
align-items: center;
}

.ecom-element--menu_icon--normal svg,
.ecom-element--menu_icon--active svg {
height: 12px;
width: 12px;
display: flex;
}
.ecom-menu__icon-humber {
visibility: hidden;
opacity: 0;
position: relative;
top: 0;
left: 0;
display: none;
cursor: pointer;
}
.ecom-menu__icon-humber svg {
width: 30px;
 height: 30px;
}
.ecom-menu-collapse-close--mobile {
display: none;
position: absolute;
right: 10px;
top: 10px;
width: 20px;
height: 20px;
cursor: pointer;
z-index: 100;
}
 .ecom-menu__icon-humber--wrapper {
 display: flex;
 }
 @media screen and (max-width: 1024px) {
 .ecom-element.ecom-shopify.ecom-shopify__menu-container .ecom-shopify__menu-list--mobile.ecom-show {
 display: block;
transform: translateX(0);
visibility: visible;
opacity: 1;
 }
.ecom-menu-collapse-close--mobile {
display: flex;
}
.ecom-menu__icon-humber {
display: flex;
visibility: visible;
opacity: 1;
}
 .ecom-element.ecom-shopify.ecom-shopify__menu-container .ecom-shopify__menu-list--mobile--wrapper~.ecom-shopify__menu-list--wrapper {
 display: none !important;
 }
 }
`},default(){return{settings:{layout:"horizontal",link_list:{name:"Main menu",value:"main-menu"},icon_humber:{id:"OkrkyhrV",name:"menu",cate:"All",url:"https://dev.ecomposer.app/storage/icons/feather/all/menu.svg",value:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>'},icon_menu:{id:"WrEvA9R3",name:"angle-down",cate:"Solid",url:"https://tiep.ecomposer.app/storage/icons/font-awesome/solid/angle-down.svg",value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path></svg>',thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path></svg>'},icon_menu_active:{id:"LAltV6nu",name:"angle-up",cate:"Solid",url:"https://tiep.ecomposer.app/storage/icons/font-awesome/solid/angle-up.svg",value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"></path></svg>',thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"></path></svg>'}},style:{text_active:{tab:"active",textColornormalmode:{"global-colors":"primary"},textTypography:{"text-decoration":"none","font-weight":"400"},textColorhovermode:"#009471",textColoractivemode:"#009471",spacing:{padding:{right:"10px",left:"10px"},margin:{right:"0px"}}}}}}},methods:{}},I={class:"ecom-element ecom-shopify ecom-shopify__menu"},N=["data-show-all"],T=["innerHTML"];function W(e,i,m,l,o,c){var r;return B(),D("div",I,[C("div",{class:"ecom-element ecom-shopify ecom-shopify__menu-wrapper","data-show-all":(r=c.show_all_items_menu)!=null?r:!1},[C("div",{class:"ecom-element ecom-shopify ecom-shopify__menu-container",innerHTML:e.liquid("linklists")},null,8,T)],8,N)])}const P=q(S,[["render",W]]);S.__docgenInfo={exportName:"default",displayName:"ShopifyMenu",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Shopify/Menu.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{P as default};
//# sourceMappingURL=Menu.23f6cbab.js.map
