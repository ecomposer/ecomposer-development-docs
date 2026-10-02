import{_ as ae,L as ce,J as pe,E as de}from"./preview.95a7df14.js";import{v as me,o as L,a as M,z as se,E as S,y as m,x as A}from"./vue.esm-bundler.b9dec9d9.js";import"./chunk-KSYMO6G6.f719e32d.js";import"./index.e850844b.js";import"./iframe.048ad53f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.f037b798.js";const re={name:"CollectionFilter",presets:!1,docs:"https://help.ecomposer.io/docs/elements/collection-elements/filter/",mixins:[ce,pe,de],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["filter_type","show_all_items_menu","collapse_mobile","accordion_close","link_list","hide_zero"]}},computed:{csrContext(){var b,y,f,i,C;const e=this.shopifyWrapper,d=e==null?void 0:e.shopify_type;if(!d)return null;const s={type:d,handle:((f=(y=(b=e==null?void 0:e.data)==null?void 0:b.settings)==null?void 0:y[d])==null?void 0:f.value)||null,withFilters:!0};return this.show_sub_menu&&(s.linklistData=(C=(i=this.data)==null?void 0:i.settings)==null?void 0:C.link_list),s},canMultipleLanguages(){return this.getPermission("translates",!1)},isRightSide(){var e,d,s,b;return((d=(e=this.data)==null?void 0:e.settings)==null?void 0:d.filter_type)==="collapse"&&((b=(s=this.data)==null?void 0:s.settings)==null?void 0:b.collapse_filter_position)&&this.data.settings.collapse_filter_position==="right"?!0:""},page_type(){return this.$store.getters["page/params"].page},listMenu(){var e,d,s,b,y,f,i,C,B;return`
                    <${((e=this.data.settings)==null?void 0:e.use_accordion)&&this.data.settings.filter_type!=="dropdown"&&((d=this.data.settings)==null?void 0:d.filter_type)!=="push_down"?"details":"div"}
                                ${(s=this.data.settings)!=null&&s.accordion_open?" open ":""}
                                class="${this.data.settings&&this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"&&((b=this.data.settings)==null?void 0:b.filter_type)!=="push_down"?" ecom-collection__filters-group-not__dropdown":" ecom-collection__filters-group-dropdown"} ecom-collection__filters-group ecom-collection__filters-group-lists" data-attrs-max="${this.data.settings&&this.data.settings.number_max?this.data.settings.number_max:5}">
                        <summary class="ecom-collection__filters-group-summary">
                            <div class="ecom-collection__filters-group-header">
                                <span class="ecom-collection__filters-group-summary--title">${this.lang((y=this.data.settings)==null?void 0:y.menu_label,"menu_label")}</span>
                                ${this.show_dropdown_arrow?`<div class="ecom-icon-filter-close">${(f=this.data.settings)!=null&&f.collapse_icon?this.data.settings.collapse_icon.value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M362.7 203.9l-159.1 144c-6.125 5.469-15.31 5.469-21.44 0L21.29 203.9C14.73 197.1 14.2 187.9 20.1 181.3C26.38 174.4 36.5 174.5 42.73 180.1L192 314.5l149.3-134.4c6.594-5.877 16.69-5.361 22.62 1.188C369.8 187.9 369.3 197.1 362.7 203.9z"></path></svg>'}</div>
                                     <div class="ecom-icon-filter-open">${(i=this.data.settings)!=null&&i.expand_icon?this.data.settings.expand_icon.value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M363.9 330.7c-6.271 6.918-16.39 6.783-22.62 1.188L192 197.5l-149.3 134.4c-6.594 5.877-16.69 5.361-22.62-1.188C14.2 324.1 14.73 314 21.29 308.1l159.1-144c6.125-5.469 15.31-5.469 21.44 0l159.1 144C369.3 314 369.8 324.1 363.9 330.7z"></path></svg>'}</div>`:""}
                            </div>
                        </summary>
                        <div class="ecom-collection__filters-group--display">
                            {%- capture link_handle -%}${this.link_list?this.link_list:""}{%- endcapture -%}
                            {%- unless link_handle == empty -%}
                                {%- assign menu = linklists[link_handle] -%}
                                <ul class="ecom-shopify__menu-list">
                                    {% if menu and menu.links.size %}
                                        {% for link in menu.links %}
                                            {% assign child_link = link.links %}
                                            <li class="ecom-shopify__menu-item ecom-shopify__menu-item-type--{{link.type}} {% if child_link.size > 0 %}ecom-shopify__menu-item--has-children{% endif %} {% if link.active or link.child_active %} ecom-shopify__menu-item--active ecom-text-active {% endif %}">
                                                <div class="ecom-menu_item ecom-items {% if link.active or link.child_active %} ecom-item-active {% endif %}">
                                                    <a class="ecom-menu_title ecom-items--text" href="{{link.url}}" title="{{link.title | escape }}">
                                                        {{link.title}}
                                                    </a>
                                                    {%- if link.levels > 0 -%}
                                                        <div class="ecom-menu_icon">
                                                            <div class="ecom-items--icon ecom-menu_icon--normal">
                                                                ${this.icon_menu?this.icon_menu.value:""}
                                                            </div>
                                                            <div class="ecom-items--icon ecom-menu_icon--active">
                                                                ${this.icon_menu_active?this.icon_menu_active.value:""}
                                                            </div>
                                                        </div>
                                                    {%- endif -%}
                                                </div>
                                                {% if child_link.size > 0 %}
                                                    <ul class="ecom-shopify__menu-sub-menu" data-menu-size="{{child_link.size}}" data-menu-level="{{child_link.level}}"  style="{% if link.child_active %} max-height: 100%; {% endif %}">
                                                        {% for child in child_link %}
                                                            {% assign grand_link = child.links %}
                                                            <li class="ecom-shopify__menu-child-link-item ecom-shopify__menu-child-link-item-type--{{child.type}} {% if grand_link.size > 0 %}ecom-shopify__menu-child-link-item--has-children{% endif %} {% if child.active or child.child_active%} ecom-shopify__menu-child-link-item--active ecom-text-active{% endif %}" >
                                                                <div class="ecom-menu_item ecom-items">
                                                                    <a class="ecom-menu_title ecom-items--text" href="{{child.url}}" title="{{child.title | escape }}">
                                                                        {{child.title}}
                                                                    </a>
                                                                    {%- if child.levels > 0 -%}
                                                                        <div class="ecom-menu_icon">
                                                                            <div class="ecom-items--icon ecom-menu_icon--normal">
                                                                                ${this.icon_menu?this.icon_menu.value:""}
                                                                            </div>
                                                                            <div class="ecom-items--icon ecom-menu_icon--active">
                                                                                ${this.icon_menu_active?this.icon_menu_active.value:""}
                                                                            </div>
                                                                        </div>
                                                                    {%- endif -%}
                                                                </div>
                                                                {% if grand_link.size > 0 %}
                                                                    <ul class="ecom-shopify__menu-sub-menu" data-menu-size="{{grand_link.size}}" data-menu-level="{{child_link.level}}">
                                                                        {% for grand in grand_link %}
                                                                            <li class="ecom-shopify__menu-grand-link-item ecom-menu_item ecom-items ecom-shopify__menu-grand-link-item-type--{{grand.type}} {% if grand.active or grand.child_active %}ecom-shopify__menu-grand-link-item--active ecom-text-active{% endif %}">
                                                                                <a class="ecom-menu_title ecom-items--text" href="{{grand.url}}" title="{{grand.title | escape }}">
                                                                                    {{grand.title}}
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
                            {% else %}
                                <p>Select a menu to show</p>
                            {%- endunless -%}
                        </div>
                    </${((C=this.data.settings)==null?void 0:C.use_accordion)&&this.data.settings.filter_type!=="dropdown"&&((B=this.data.settings)==null?void 0:B.filter_type)!=="push_down"?"details":"div"}>
                `},conditionSearchPage(){return{start:`{% if request.page_type == 'search' %}
                                {% liquid
                                    assign has_products = false

                                    for item in search.results
                                        if item.object_type == 'product'
                                            assign has_products = true
                                            break
                                        endif
                                    endfor
                                %}
                                {% if has_products %}
                    `,end:"{% endif %} {% endif %}"}},liquids(){var e,d,s,b,y,f,i,C,B,N,F,P,R,D,h,z,w,k,H,I,V,q,j,U,$,E,T,Y,O,Q,ee,K,te,oe,G,J,X,t,o,l,r,a;return{filters:{code:`
                        <!--EComposer-custom-liquid-filters-${this.data.id.split("-").pop()}-->
                        {% if template contains '.' %}
                            <input type="hidden" name="view" value="{{template | split: '.' | last }}" />
                        {% endif %}
                        {% if request.page_type == 'search' %}
                            {% assign results = search %}
                        {% else %}
                            {% assign results = collection %}
                        {% endif %}
                        {%- assign sort_by = results.sort_by | default: results.default_sort_by -%}
                        {%- if results.results_count != blank -%}
                            {%- assign ecom_filter_count = results.results_count -%}
                        {%- else -%}
                            {%- assign ecom_filter_count = results.products_count -%}
                        {%- endif -%}
                        <span class="ecom-filter-total-count" data-total="{{ ecom_filter_count }}" style="display:none;"></span>
                        {% assign color_option_name = '${this.data.settings&&this.data.settings.option_name?this.data.settings.option_name:""}' | handleize %}
                        {% assign colors = shop.metafields.ecomposer.colors %}
                        {% capture icon_caret%}
                            <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
                            </svg>
                        {% endcapture%}
                        {% capture close_icon %}
                            <span class="ecom-colletion-filters--close-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" fill="currentColor" viewBox="0 0 18 17">
                                    <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor"/>
                                </svg>
                            </span>
                        {% endcapture %}
                        ${(d=(e=this.data)==null?void 0:e.settings)!=null&&d.show_applied_filters?`
                                ${this.exporting?"":`{% if EComBuilderMode %}
                                    <div class="ecom-collection__filters-applied-block" data-filter-id="${this.data.id}">
                                        <div class="ecom-collection__filters-applied-heading">
                                            ${this.lang(this.data.settings.applied_title,"applied_title")}
                                        </div>
                                        <div class="ecom-collection-filters--active_values">
                                            <ul class="ecom-collection-filters--active_values-list" role="list">
                                                ${this.data.settings.show_filter_result_count?`
                                                            <li class="ecom-collection__filters-group-result-count ecom-filter-count ecom-al_center">
                                                                <div class="ecom-collection__filters-group-list-item-result" href="#">${this.data.settings.result_count_text?this.data.settings.result_count_text.replace("{{count}}",10):"10 Results Found"}</div>
                                                            </li>
                                                        `:""}
                                                {% for filter in results.filters %}
                                                    {% if filter.type == 'list' %}
                                                        {% for value in filter.values  %}
                                                            <li class="ecom-collection__filters-group-list-item ecom-al_center">
                                                                <a href="{{value.url_to_remove}}" title="{{value.label}}">{{ value.label | escape }} {{close_icon}}</a>
                                                            </li>
                                                        {% endfor %}
                                                        {% break %}
                                                    {% endif %}
                                                {% endfor %}
                                            </ul>
                                        </div>
                                    </div>
                                {% endif %}`}

                                {%- for filter in results.filters -%}
                                    {%- if  filter.active_values.size > 0 or filter.min_value.value != nil or filter.max_value.value != nil -%}
                                        {%- assign has_filter = true -%}
                                        {%- break -%}
                                    {%- endif -%}
                                {%- endfor -%}
                                {%- if has_filter -%}
                                <div class="ecom-collection__filters-applied-block" data-filter-id="${this.data.id}">
                                    <div class="ecom-collection__filters-applied-heading">
                                        ${this.lang(this.data.settings.applied_title,"applied_title")}
                                    </div>
                                    <div class="ecom-collection-filters--active_values">
                                        <ul class="ecom-collection-filters--active_values-list" role="list">

                                            ${this.data.settings.show_filter_result_count?`
                                                    <li class="ecom-collection__filters-group-result-count ecom-filter-count ecom-al_center" data-count="{{results.results_count}}">
                                                        {%- liquid
                                                            if results.results_count != blank
                                                                assign count = results.results_count
                                                            else
                                                                 assign count = results.products_count
                                                            endif
                                                        -%}
                                                        <div class="ecom-collection__filters-group-list-item-result">
                                                            ${this.canMultipleLanguages?`${this.lang(this.data.settings.result_count_text,"result_count_text",{count:"count"})}`:this.data.settings.result_count_text}
                                                        </div>
                                                    </li>
                                                    `:""}
                                            {%- for filter in results.filters -%}
                                                {%- if filter.active_values.size > 0 -%}
                                                    {% for value in filter.active_values  %}
                                                        <li class="ecom-collection__filters-group-list-item ecom-al_center">
                                                            <a class="ecom-collection__filters-group-list-item-clear" href="{{value.url_to_remove}}" title="{{value.label}}">{{ value.label | escape }} {{close_icon}}</a>
                                                        </li>
                                                    {% endfor %}
                                                {% endif %}

                                                {% if filter.type == "price_range" %}
                                                {%- if filter.min_value.value != nil or filter.max_value.value != nil -%}
                                                    <li class="ecom-collection__filters-group-list-item ecom-al_center">
                                                        <a class="ecom-collection__filters-group-list-item-clear" href="{{filter.url_to_remove}}">
                                                            {%- if filter.min_value.value -%}{{ filter.min_value.value | money }}{%- else -%}{{ 0 | money }}{%- endif -%}-{%- if filter.max_value.value -%}{{ filter.max_value.value | money }}{%- else -%}{{ filter.range_max | money }}{%- endif -%}
                                                            {{close_icon}}
                                                        </a>
                                                    </li>

                                                {%- endif -%}
                                            {% endif %}
                                            {% endfor %}
                                            <li class="ecom-collection__filters-group-list-item ecom-al_center">
                                                <a href="{% if results.url %}{{results.url}}{% else %}/search?q={{results.terms}}&sort_by={{results.sort_by}}{% endif %}" title="${this.lang((s=this.data.settings)!=null&&s.clear_text?this.data.settings.clear_text:"Clear all","clear_all_title")}" class="ecom-collection__filters-group-list-item-clear">${this.lang((b=this.data.settings)!=null&&b.clear_text?this.data.settings.clear_text:"Clear all","clear_all_title")}{{close_icon}}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {%- endif -%}
                        `:""}
                        <div class="ecom-container-filter-list--wrapper ${((y=this.data.settings)==null?void 0:y.filter_type)=="push_down"?"ecom-show--filter":""}" ${((f=this.data.settings)==null?void 0:f.filter_type)=="push_down"?"data-type='push_down'":""}>
                            <div class="ecom-container-filter-list-wrapper">
                                ${((i=this.data.settings)==null?void 0:i.filter_type)==="push_down"?`<span
                                            class="ecom-collection__filters-heading"
                                        >
                                        ${this.lang((C=this.data.settings)==null?void 0:C.title,"filter_title")}
                                        </span>`:""}
                                <div class="ecom-container-filter-list" ${((B=this.data.settings)==null?void 0:B.filter_type)=="push_down"?"data-type='push_down'":""}>
                                    ${this.show_sub_menu?`<div class="ecom-shopify_menu" data-show-all="${(N=this.show_all_items_menu)!=null?N:!1}">${this.listMenu}</div>`:""}
                                {%- for filter in results.filters -%}
                                    {%- assign total_active_values = total_active_values | plus: filter.active_values.size -%}
                                    {% assign presentation = filter.presentation | default: "text" %}
                                    {% case filter.type %}
                                    {% when 'list' %}
                                        {% assign size = filter.values | size %}
                                        {% assign settings_size = ${(F=this.data.settings)==null?void 0:F.number_max} %}
                                        {%- if size > 0 -%}
                                        <${((P=this.data.settings)==null?void 0:P.use_accordion)&&this.data.settings.filter_type!=="dropdown"&&((R=this.data.settings)==null?void 0:R.filter_type)!=="push_down"?"details":"div"}
                                        data-name="{{filter.param_name}}"
                                        ${(D=this.data.settings)!=null&&D.accordion_open?" open ":""}
                                        class="ecom-js-filter${this.data.settings&&this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"&&((h=this.data.settings)==null?void 0:h.filter_type)!=="push_down"?" ecom-collection__filters-group-not__dropdown":" ecom-collection__filters-group-dropdown"} ecom-collection__filters-group ecom-collection__filters-group-lists ecom-d-none" data-index="{{ forloop.index }}" data-filter-id="${this.data.id}" data-attrs-max="${this.data.settings&&this.data.settings.number_max?this.data.settings.number_max:5}">

                                            <summary class="ecom-collection__filters-group-summary">
                                                <div class="ecom-collection__filters-group-header">
                                                    <span class="ecom-collection__filters-group-summary--title">{{ filter.label | escape }}</span>
                                                    ${this.show_dropdown_arrow?`<div class="ecom-icon-filter-close">${(z=this.data.settings)!=null&&z.collapse_icon?this.data.settings.collapse_icon.value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M362.7 203.9l-159.1 144c-6.125 5.469-15.31 5.469-21.44 0L21.29 203.9C14.73 197.1 14.2 187.9 20.1 181.3C26.38 174.4 36.5 174.5 42.73 180.1L192 314.5l149.3-134.4c6.594-5.877 16.69-5.361 22.62 1.188C369.8 187.9 369.3 197.1 362.7 203.9z"></path></svg>'}</div>
                                                        <div class="ecom-icon-filter-open">${(w=this.data.settings)!=null&&w.expand_icon?this.data.settings.expand_icon.value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M363.9 330.7c-6.271 6.918-16.39 6.783-22.62 1.188L192 197.5l-149.3 134.4c-6.594 5.877-16.69 5.361-22.62-1.188C14.2 324.1 14.73 314 21.29 308.1l159.1-144c6.125-5.469 15.31-5.469 21.44 0l159.1 144C369.3 314 369.8 324.1 363.9 330.7z"></path></svg>'}</div>`:""}
                                                </div>
                                            </summary>
                                            <div class="ecom-collection__filters-group--display ${((k=this.data.settings)==null?void 0:k.filter_type)=="push_down"?"ecom-scroll_bar":""}">
                                                ${(H=this.data.settings)!=null&&H.show_selected?`
                                                    <div class="ecom-collection__filters-group--header">
                                                        <span class="ecom-collection__filters-group--selected no-js-hidden">
                                                            {% assign count = filter.active_values.size %}
                                                            {% if count == 1%}
                                                                ${this.lang((I=this.data.settings)==null?void 0:I.filter_selected_text,"filter_selected_text",{count:"count"})}
                                                            {% else %}
                                                                ${this.lang((V=this.data.settings)==null?void 0:V.filters_selected_text,"filters_selected_text",{count:"count"})}
                                                            {% endif %}
                                                        </span>
                                                        <a href="{{ filter.url_to_remove }}" class="ecom-collection__filters-group-reset-filter" >${this.lang((q=this.data.settings)==null?void 0:q.reset_filter,"reset_filter")}</a>
                                                    </div>`:""}

                                                {% assign check_is_filter_color = false %}
                                                ${this.data.settings&&this.data.settings.show_color&&this.data.settings.option_name?`
                                                        {% assign current_option_name = filter.param_name  | split: '.' | last | handleize %}
                                                        {% if  color_option_name  ==  current_option_name %}
                                                            {% assign check_is_filter_color = true %}
                                                        {% endif %}
                                                    `:""}
                                                <ul
                                                    class="ecom-collection__filters-group-list  ecom-scroll_bar{% if check_is_filter_color %} ecom-collection__filters-enable-colors{% endif %}" data-param-name="{{filter.param_name}}" role="list" data-index="{{ forloop.index }}"
                                                >
                                                {%- for value in filter.values -%}
                                                    {%- if ${this.hide_zero} == false or value.count > 0 and ${this.hide_zero} == true -%}
                                                    <li class="ecom-collection__filters-group-list-item ${this.dropdown_max?"ecom-collection__filters-group-list-item-max":""}${(j=this.data.settings)!=null&&j.hide_color_checkbox?" ecom-filter-hide-checkbox":""}" >

                                                        <label for="ecom-filter-{{ filter.label | escape  | strip }}-{{ forloop.index }}" class="ecom-collection__filters-group-checkbox{% if value.count == 0 and value.active == false %} ecom-collection__filters-group-checkbox--disabled{% endif %}">

                                                            <input type="checkbox"
                                                            class="ecom-collection__filters-group-checkbox--input ${this.data.settings.hide_checkbox?"ecom-filter--hide-checkbox":""}"
                                                            name="{{ value.param_name }}"
                                                            value="{{ value.value }}"
                                                            id="ecom-filter-{{ filter.label | escape | strip }}-{{ forloop.index }}"
                                                            {% if value.active %}checked{% endif %}
                                                            {% if value.count == 0 and value.active == false %}disabled{% endif %}
                                                            >

                                                            <span class="ecom-collection__filters-group-checkbox-label ecom-flex ecom-al_center${(U=this.data.settings)!=null&&U.color_show_count?" ecom-filter-hide-color-count":""}">
                                                                {% if check_is_filter_color %}
                                                                    {% assign value_key = value.value | downcase | handleize | strip %}
                                                                    {% if colors and colors.value[value_key]  == blank %}
                                                                        {% assign value_key = value.label | downcase | handleize | strip %}
                                                                    {% endif %}
                                                                    {% if colors and colors.value[value_key]  != blank %}
                                                                        <span class="ecom-collection__filters--color-wrapper">
                                                                            <span class="ecom-collection__filters--color" style="{{colors.value[value_key]}}" data-ecom-tooltip="{{value.label}}"></span>
                                                                        </span>
                                                                    {% else %}
                                                                        <span class="ecom-collection__filters--color-wrapper">
                                                                            <span class="ecom-collection__filters--color ecom-collection__filters--no-color" data-ecom-tooltip="{{value.label}}"></span>
                                                                        </span>
                                                                    {% endif %}
                                                                {% endif%}
                                                                {% if presentation == 'swatch' %}
                                                                    {% assign swatch = value.swatch %}
                                                                    {%- liquid
                                                                        assign swatch_value = null
                                                                        if swatch.image
                                                                            assign image_url = ${this.canFallbackToLiquidSSR?"swatch.image.image":"swatch.image"} | image_url: width: 50
                                                                            assign swatch_value = 'url(' | append: image_url | append: ')'
                                                                            assign swatch_focal_point = swatch.image.presentation.focal_point
                                                                        elsif swatch.color
                                                                            assign swatch_value = ${this.canFallbackToLiquidSSR?"swatch.color":"'rgb(' | append: swatch.color | append: ')'"}
                                                                        endif
                                                                    -%}
                                                                    {% if swatch_value %}
                                                                        <span class="ecom-collection__filters--color-wrapper">
                                                                            <span class="ecom-collection__filters--color" style="background:{{ swatch_value }};{% if swatch_focal_point %} --swatch-focal-point: {{ swatch_focal_point }};{% endif %}" data-ecom-tooltip="{{value.label}}"></span>
                                                                        </span>
                                                                    {% else %}
                                                                        <span class="ecom-collection__filters--color-wrapper">
                                                                            <span class="ecom-collection__filters--color ecom-shopify-color-unavailable"></span>
                                                                        </span>
                                                                    {% endif %}
                                                                {% endif %}
                                                                {{ value.label | escape }}
                                                                ${($=this.data.settings)!=null&&$.show_count?'<span class="ecom-collection__filters--count">({{ value.count }})</span>':""}
                                                            </span>
                                                        </label>
                                                    </li>
                                                    {%- endif -%}
                                                {%- endfor -%}
                                                    ${this.data.settings.filter_type==="dropdown"&&this.data.settings.number_button?`
                                                        {%- if settings_size < size -%}
                                                            <button type="button" class="ecom-more-filter">${this.lang(this.data.settings.button_text,"button_text")}</button>
                                                        {%- endif -%}
                                                        `:""}
                                                </ul>
                                            </div>
                                            </${this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"&&((E=this.data.settings)==null?void 0:E.filter_type)!=="push_down"?"details":"div"}>
                                        {%- endif -%}
                                    {% when 'price_range' %}
                                        {% liquid
                                            assign currencies_using_comma_decimals = 'ANG,ARS,BRL,BYN,BYR,CLF,CLP,COP,CRC,CZK,DKK,EUR,HRK,HUF,IDR,ISK,MZN,NOK,PLN,RON,RUB,SEK,TRY,UYU,VES,VND' | split: ','
                                            assign uses_comma_decimals = false
                                            if currencies_using_comma_decimals contains cart.currency.iso_code
                                                assign uses_comma_decimals = true
                                            endif
                                            %}

                                            <${this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"&&((T=this.data.settings)==null?void 0:T.filter_type)!=="push_down"?"details":"div"}
                                            ${(Y=this.data.settings)!=null&&Y.accordion_open?" open ":""}
                                            class="ecom-collection__filters-group ${this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"&&((O=this.data.settings)==null?void 0:O.filter_type)!=="push_down"?"ecom-collection__filters-group-not__dropdown":"ecom-collection__filters-group-dropdown"} ecom-collection__filters-group-price-range" data-index="{{ forloop.index }}">
                                                <summary class="ecom-collection__filters-group-summary">
                                                    <div class="ecom-collection__filters-group-header">
                                                        <span class="ecom-collection__filters-group-summary--title">{{ filter.label | escape }}</span>
                                                        <span class="ecom-collection__filters-group-count-bubble{%- if filter.min_value.value or filter.max_value.value -%}{{ filter.active_values.size }} count-bubble--dot{% endif %}"></span>
                                                        ${this.show_dropdown_arrow?`<div class="ecom-icon-filter-close">${(Q=this.data.settings)!=null&&Q.collapse_icon?this.data.settings.collapse_icon.value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M362.7 203.9l-159.1 144c-6.125 5.469-15.31 5.469-21.44 0L21.29 203.9C14.73 197.1 14.2 187.9 20.1 181.3C26.38 174.4 36.5 174.5 42.73 180.1L192 314.5l149.3-134.4c6.594-5.877 16.69-5.361 22.62 1.188C369.8 187.9 369.3 197.1 362.7 203.9z"></path></svg>'}</div>
                                                            <div class="ecom-icon-filter-open">${(ee=this.data.settings)!=null&&ee.expand_icon?this.data.settings.expand_icon.value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M363.9 330.7c-6.271 6.918-16.39 6.783-22.62 1.188L192 197.5l-149.3 134.4c-6.594 5.877-16.69 5.361-22.62-1.188C14.2 324.1 14.73 314 21.29 308.1l159.1-144c6.125-5.469 15.31-5.469 21.44 0l159.1 144C369.3 314 369.8 324.1 363.9 330.7z"></path></svg>'}</div>`:""}
                                                    </div>
                                                </summary>
                                                <div class="ecom-collection__filters-group--display ${((K=this.data.settings)==null?void 0:K.filter_type)=="push_down"?"ecom-scroll_bar":""}">
                                                    {%- comment -%}
                                                    ${(te=this.data.settings)!=null&&te.show_selected?`<div class="ecom-collection__filters-group--header">
                                                            {%- assign max_price_amount = filter.range_max | money -%}
                                                            <span class="ecom-collection__filters-group--selected">${this.lang((oe=this.data.settings)==null?void 0:oe.max_price_text,"max_price_text")} {{max_price_amount}}</span>
                                                            <a href="{{ filter.url_to_remove }}" class="ecom-collection__filters-group-reset-filter" >${this.lang((G=this.data.settings)==null?void 0:G.reset_filter,"reset_filter")}</a>
                                                        </div>`:""}
                                                    {%- endcomment -%}
                                                    {%- if ${((J=this.data.settings)==null?void 0:J.price_filter_type)=="custom_price"&&((X=this.data.settings)==null?void 0:X.price_for_segment)>0}-%}
                                                        {%- assign max_price_for_step = filter.range_max -%}
                                                        {% assign price_step = ${(t=this.data.settings)!=null&&t.price_for_segment?this.data.settings.price_for_segment:0} | times: 100 %}
                                                        {%- assign checked = "" -%}
                                                        {%- assign filter_max_value = filter.max_value.value -%}
                                                        {% assign loop_time = max_price_for_step | divided_by: price_step %}
                                                        {% if loop_time < 1 %}
                                                        {%- assign loop_time = 1 -%}
                                                        {%- endif -%}
                                                        {% if loop_time > 50 %}
                                                            {% if EComBuilderMode %}<span class="ecom-collection__filters-notice-label">Notice: Too many options, please enter a value greater than.</span>{%- endif -%}
                                                        {%- else -%}
                                                            <div class="ecom-collection-filters--price-step">
                                                                <ul class ="ecom-collection__filters-group-list ecom-scroll_bar">

                                                                    {% for i in (0..loop_time) %}
                                                                        {% if i < loop_time %}
                                                                        {% assign price_range = i | times: price_step %}
                                                                        {% assign price_range_step = price_range | plus: price_step %}

                                                                        <li class="ecom-collection__filters-group-list-item">

                                                                            <label class = "ecom-collection__filters-group-radio  ecom-flex ecom-al_center" >

                                                                                {% if price_range_step < max_price_for_step %}
                                                                                    <input class="ecom-collection__filters-group-radio--input" type="radio" name="{{ filter.min_value.param_name}}" value="{{price_range | money_without_currency}}" {% if price_range_step == filter_max_value %}checked{% endif %}>
                                                                                    <input class="ecom-collection__filters-radio--input-hidden" type="radio" name="{{ filter.max_value.param_name}}" value="{{price_range_step | money_without_currency}}">
                                                                                    <span class="ecom-collection__filters-group-radio-label" ecom-flex ecom-al_center>{{price_range| money}}  <span class="ecom-collection-filters--seperate">-</span> {{price_range_step| money}}</span>
                                                                                {%- else -%}
                                                                                    {%- assign price_range_step = max_price_for_step %}
                                                                                    <input class="ecom-collection__filters-group-radio--input" type="radio" name="{{ filter.min_value.param_name}}" value="{{price_range | money_without_currency}}" {% if price_range_step == filter_max_value %}checked{% endif %}>
                                                                                    <input class="ecom-collection__filters-radio--input-hidden" type="radio" name="{{ filter.max_value.param_name}}" value="{{price_range_step | money_without_currency}}">
                                                                                    <span class="ecom-collection__filters-group-radio-label" ecom-flex ecom-al_center>{{price_range| money}}  <span class="ecom-collection-filters--seperate">-</span> {{price_range_step| money}}</span>
                                                                                {% endif %}
                                                                            </label>
                                                                        </li>
                                                                        {% endif %}
                                                                        {% if i == loop_time and price_range < max_price_for_step %}
                                                                        {% assign price_range = i | times: price_step %}
                                                                            {% if  price_range < max_price_for_step %}
                                                                                <li class="ecom-collection__filters-group-list-item">
                                                                                    <label class = "ecom-collection__filters-group-radio  ecom-flex ecom-al_center" >
                                                                                        <input class="ecom-collection__filters-group-radio--input" type="radio" name="{{filter.min_value.param_name}}" value="{{price_range | money_without_currency}}" {% if max_price_for_step == filter_max_value %}checked{% endif %}>
                                                                                        <input class="ecom-collection__filters-radio--input-hidden" type="radio" name="{{ filter.max_value.param_name}}" value="{{max_price_for_step | money_without_currency}}">
                                                                                    <span class="ecom-collection__filters-group-radio-label" ecom-flex ecom-al_center>{{price_range | money}} <span class="ecom-collection-filters--seperate">-</span> {{max_price_for_step | money}}</span>
                                                                                    </label>
                                                                                </li>
                                                                            {% endif %}
                                                                        {% endif %}
                                                                    {% endfor %}
                                                                </ul>
                                                            </div>
                                                        {%- endif -%}
                                                    {%- elsif ${((o=this.data.settings)==null?void 0:o.price_filter_type)=="segment"&&((l=this.data.settings)==null?void 0:l.segment_steps)>0} -%}
                                                        {%- assign max_price_for_step = filter.range_max -%}
                                                        {% assign segment_step = ${(r=this.data.settings)!=null&&r.segment_steps?this.data.settings.segment_steps:0} | floor
                                                        %}
                                                        {%- assign price_step = max_price_for_step |times: 1.00 | divided_by: segment_step -%}
                                                        {%- assign checked = "" -%}
                                                        {%- assign filter_max_value = filter.max_value.value -%}
                                                        {% assign loop_time = segment_step %}
                                                        <div class="ecom-collection-filters--price-step">
                                                            <ul class ="ecom-collection__filters-group-list ecom-scroll_bar">
                                                                {% for i in (0..loop_time) %}
                                                                    {% if i < loop_time %}
                                                                    {% assign price_range = i | times: price_step %}
                                                                    {% assign price_range_step = price_range | plus: price_step | round %}
                                                                    <li class="ecom-collection__filters-group-list-item">
                                                                        <label class = "ecom-collection__filters-group-radio  ecom-flex ecom-al_center" >
                                                                            <input class="ecom-collection__filters-group-radio--input" type="radio" name="{{ filter.min_value.param_name}}" value="{{price_range | money_without_currency}}" {% if price_range_step == filter_max_value %}checked{% endif %}>
                                                                            <input class="ecom-collection__filters-radio--input-hidden" type="radio" name="{{ filter.max_value.param_name}}" value="{{price_range_step | money_without_currency}}">
                                                                            <span class="ecom-collection__filters-group-radio-label" ecom-flex ecom-al_center>{{price_range| money}}  <span class="ecom-collection-filters--seperate">-</span> {{price_range_step| money}}</span>
                                                                        </label>
                                                                    </li>
                                                                    {% endif %}
                                                                {% endfor %}
                                                            </ul>
                                                        </div>
                                                    {%- else -%}
                                                        <price-range class="ecom-collection__filters-group-price">
                                                                <div class="ecom-collection__filters-group-field">
                                                                    <label class="ecom-collection__filters-group-field--label" for="Search-In-Modal">From</label>
                                                                    <span class="ecom-collection__filters-group-field--currency">{{ cart.currency.symbol }}</span>
                                                                    <input class="ecom-collection__filters-group-field--input ecom-collection__filters-price-range-min"
                                                                    name="{{ filter.min_value.param_name }}"
                                                                    id="ecom-filter-{{ filter.label | escape | strip  }}-{{ forloop.index }}"
                                                                    {%- if filter.min_value.value -%}
                                                                        {%- if uses_comma_decimals -%}
                                                                        value="{{ filter.min_value.value | money_without_currency | replace: '.', '' | replace: ',', '.' }}"
                                                                        {%- else -%}
                                                                        value="{{ filter.min_value.value | money_without_currency | replace: ',', '' }}"
                                                                        {% endif %}
                                                                    {%- endif -%}
                                                                    type="number"
                                                                    placeholder="0"
                                                                    min="0"
                                                                    max="{{ filter.range_max | divided_by: 100.00}}">
                                                                    </input>
                                                                </div>
                                                                <div class="ecom-collection__filters-group-field">
                                                                <label class="ecom-collection__filters-group-field--label" for="Search-In-Modal">To</label>
                                                                    <span class="ecom-collection__filters-group-field--currency">{{ cart.currency.symbol }}</span>
                                                                    <input class="ecom-collection__filters-group-field--input ecom-collection__filters-price-range-max"
                                                                    name="{{ filter.max_value.param_name }}"
                                                                    id="ecom-Filter-{{ filter.label | escape }}-{{ forloop.index }}"
                                                                    {%- if filter.max_value.value -%}
                                                                        {%- if uses_comma_decimals -%}
                                                                        value="{{ filter.max_value.value | money_without_currency | replace: '.', '' | replace: ',', '.' }}"
                                                                        {%- else -%}
                                                                        value="{{ filter.max_value.value | money_without_currency | replace: ',', '' }}"
                                                                        {% endif %}
                                                                    {%- endif -%}
                                                                    type="number"
                                                                    placeholder="{{ filter.range_max | money_without_currency | replace: ',', '' }}"
                                                                    min="0"
                                                                    max="{{ filter.range_max | divided_by: 100.00 }}">
                                                                    </input>

                                                                </div>
                                                        </price-range>
                                                        <div class="ecom-collection-filters--price-range">
                                                            <div class="ecom-collection-filters--prices">
                                                                {%- assign max_price = filter.max_value.value -%}
                                                                {%- unless max_price -%}
                                                                    {%- assign max_price = filter.range_max -%}
                                                                {%- endunless -%}
                                                                {%- assign min_price = filter.min_value.value -%}
                                                                {%- unless min_price -%}
                                                                    {%- assign min_price = 0 -%}
                                                                {%- endunless -%}
                                                                <span id="ecom-collection-filters--price-from" class="ecom-collection-filters--price ecom-filter-price-from">{{ min_price  | money }}</span>
                                                                <span class="ecom-collection-filters--seperate">-</span>
                                                                <span id="ecom-collection-filters--price-to" class="ecom-collection-filters--price ecom-filter-price-to">{{max_price | money }}</span>
                                                            </div>
                                                            {%- assign per_min = 0 -%}
                                                            {%- assign per_max = 100 -%}
                                                            {%- if filter.min_value.value -%}
                                                                {%- assign per_min = filter.min_value.value | times: 1.00 | divided_by: filter.range_max | times: 100 -%}
                                                            {%- endif -%}
                                                            {%- if filter.max_value.value -%}
                                                                {%- assign per_max = filter.max_value.value | times: 1.00 | divided_by: filter.range_max | times: 100 -%}
                                                            {%- endif -%}
                                                            <div class="ecom-collection-filters--multi-range">
                                                                <input id="ecom-collection-filters--input-min" class="ecom-filter-input-min" type="range" min="0" max="100" value="{{per_min}}" step="0.01" />
                                                                <input id="ecom-collection-filters--input-max" class="ecom-filter-input-max" type="range" min="0" max="100" value="{{per_max}}" step="0.01" />
                                                            </div>
                                                        </div>
                                                    {%- endif -%}
                                                </div>


                                            </${this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"&&((a=this.data.settings)==null?void 0:a.filter_type)!=="push_down"?"details":"div"}>
                                        {% endcase %}
                                    {%- endfor -%}
                                </div>
                            </div>
                        </div>
                        <!--/EComposer-custom-liquid-filters-${this.data.id.split("-").pop()}-->
                    `,preview:""}}},settings(){return[{group_title:this.$t("general"),params:[{type:"text",name:"title",label:this.$t("filter_title"),value:"Filter by",options:{warnings:{content:this.$t("notice_the_filter_only_works_in_the_collection_page_and_after_template_s_published")}}},{type:"popup",name:"filter_type",label:this.$t("filter_type"),options:{default:!1,type:"dropdown",values:{block:"Block",collapse:"Collapse",dropdown:"Dropdown",push_down:"Push down"}},css:!1},{type:"popup",name:"collapse_filter_position",label:this.$t("filter_position"),options:{default:!1,type:"dropdown",values:{left:this.$t("left"),right:this.$t("right")},visible:function(e){return e.filter_type==="collapse"}},css:!1},{type:"number",name:"number_item_in_row",label:this.$t("items_per_row"),options:{responsive:!0,max:6,min:1,step:1,visible:function(e){return e.filter_type==="push_down"}},css:{selector:' .ecom-container-filter-list[data-type="push_down"]',properties:{"grid-template-columns":"repeat(%value%, 1fr)"}}},{type:"toggle",label:this.$t("show_applied_filters"),name:"show_applied_filters",options:{values:{on:{label:this.$t("show"),value:!0},off:{label:this.$t("hide"),value:!1}}},css:!1},{type:"text",name:"applied_title",label:this.$t("applied_filter_title"),placeholder:"Applied filters",options:{visible:function(e){return e.show_applied_filters}}},{type:"toggle",label:this.$t("show_filter_result_count"),name:"show_filter_result_count",options:{values:{on:{label:this.$t("show"),value:!0},off:{label:this.$t("hide"),value:!1}},visible:function(e){return e.show_applied_filters}},css:!1},{type:"text",name:"result_count_text",label:this.$t("result_count_text"),options:{visible:function(e){return e.show_applied_filters&&e.show_filter_result_count}}},{type:"paragraph",content:this.$t("des_count_text"),name:"paragraph_des",options:{visible:function(e){return e.show_applied_filters&&e.show_filter_result_count}}},{type:"line"},{name:"icon",type:"picker",label:this.$t("open_filter_button_icon"),options:{oneline:!0,type:"icon",reset:!1,output:["value","cate"],visible:{keep_data:!0,condition:e=>e.filter_type=="collapse"||e.collapse_mobile}}},{type:"toggle",label:this.$t("enable_ajax_filter"),name:"enable_ajax",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},oneline:!0}},{type:"toggle",label:"Close filter after click option",name:"close_filter",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:{keep_data:!1,condition:e=>e.enable_ajax},oneline:!0}},{type:"toggle",label:this.$t("display_as_accordion"),name:"use_accordion",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},visible:{keep_data:!1,condition:e=>e.filter_type!=="dropdown"&&e.filter_type!=="push_down"},oneline:!0}},{type:"toggle",label:this.$t("accordion_default_open"),name:"accordion_open",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},visible:function(e){return e.filter_type!=="dropdown"&&e.filter_type!=="push_down"&&e.use_accordion},oneline:!0}},{type:"toggle",label:this.$t("open_only_one_accordion_at_a_time"),name:"accordion_close",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},visible:function(e){return e.filter_type!=="dropdown"&&e.filter_type!=="push_down"&&e.use_accordion},oneline:!0}},{type:"toggle",label:this.$t("show_selected_reset"),name:"show_selected",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},oneline:!0}},{type:"toggle",label:this.$t("hide_checkbox"),name:"hide_checkbox",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},oneline:!0}},{type:"toggle",label:this.$t("show_number_count"),name:"show_count",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},visible:function(e){return e.filter_type!=="collapse"&&e.filter_type!=="dropdown"},oneline:!0}},{name:"dropdown_show",label:this.$t("show_option_values"),type:"popup",options:{preview:"title",values:{full:this.$t("full"),short:this.$t("short")},type:"dropdown",visible:function(e){return e.filter_type=="dropdown"}},css:!1},{name:"number_max",label:this.$t("maximum_values_to_show"),type:"number",options:{min:0,max:20,visible:function(e){return e.filter_type=="dropdown"&&e.dropdown_show=="short"}}},{name:"number_button",label:this.$t("show_button_more_values"),type:"toggle",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},oneline:!0,visible:function(e){return e.filter_type=="dropdown"&&e.dropdown_show=="short"}},css:!1},{name:"button_text",label:this.$t("more_values_label"),type:"text",options:{visible:function(e){return e.filter_type=="dropdown"&&e.dropdown_show=="short"&&e.number_button==!0}}},{type:"toggle",label:this.$t("collapse_on_mobile_and_tablet"),name:"collapse_mobile",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},visible:function(e){return e.filter_type!=="collapse"},oneline:!0}},{type:"toggle",label:this.$t("default_open_collapse_on_mobile_and_tablet"),name:"open_collapse_mobile",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},visible:function(e){return e.filter_type!=="collapse"&&e.collapse_mobile},oneline:!0}},{type:"toggle",label:this.$t("hide_zero_count"),name:"hide_zero",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},oneline:!0}},{type:"popup",label:this.$t("content_alignment"),name:"items_alignment",value:"",options:{preview:"title",type:"dropdown",default:!1,icon_type:"alignment",values:{"inline-flex":this.$t("horizontal"),block:this.$t("vertical")}},css:{selector:" .ecom-collection__filters-group-list ",properties:{display:""}}},{name:"collapse_icon",type:"picker",label:"Collapse icon",options:{oneline:!0,type:"icon",reset:!1,output:["value","cate"],visible:{keep_data:!0,condition:e=>(e.filter_type=="block"||e.filter_type=="collapse")&&e.use_accordion||e.filter_type=="dropdown"}}},{name:"expand_icon",type:"picker",label:"Expand icon",options:{oneline:!0,type:"icon",reset:!1,output:["value","cate"],visible:{keep_data:!0,condition:e=>(e.filter_type=="block"||e.filter_type=="collapse")&&e.use_accordion||e.filter_type=="dropdown"}}},{type:"line"},{type:"paragraph",content:this.$t("to_setup_your_filtering_you_can_going")}]},{group_title:this.$t("price_filter"),params:[{type:"popup",name:"price_filter_type",label:this.$t("price_filter_type"),value:"slider",options:{default:!1,type:"dropdown",values:{slider:"Slider",segment:"Custom segment steps",custom_price:"Custom price for segment"}},css:!1},{type:"number",name:"segment_steps",label:this.$t("segment_steps"),options:{units:{"":{min:1,max:100,step:1}},visible:e=>e.price_filter_type=="segment"}},{type:"number",name:"price_for_segment",label:this.$t("price_for_segment"),description:this.$t("the_currency_will_be_based_on_the_store_currency"),options:{units:{"":{min:1,max:1e7,step:1}},visible:e=>e.price_filter_type=="custom_price"}}]},{group_title:this.$t("color_filter"),params:[{type:"toggle",label:this.$t("show_options_as_color"),name:"show_color",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},css:!1},{type:"text",label:this.$t(""),name:"option_name",placeholder:"Color",description:this.$t("set_your_color_here_extensions_3"),options:{visible:function(e){return e.show_color}}},{type:"toggle",label:this.$t("hide_checkbox"),name:"hide_color_checkbox",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},oneline:!0}},{type:"toggle",label:this.$t("hide_label"),name:"hide_color_label",options:{values:{on:{label:this.$t("yes"),value:"0px"},off:{label:this.$t("no"),value:"inherit"}},oneline:!0},css:{selector:" .ecom-collection__filters-enable-colors .ecom-collection__filters-group-checkbox-label",properties:{"font-size":""}}},{type:"toggle",label:this.$t("hide_number_count"),name:"color_show_count",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},visible:function(e){return e.filter_type!=="collapse"&&e.filter_type!=="dropdown"},oneline:!0}},{type:"popup",label:this.$t("content_alignment"),name:"items_color_alignment",value:"",options:{type:"dropdown",default:!1,icon_type:"alignment",values:{"inline-flex":this.$t("horizontal"),block:this.$t("vertical")}},css:{selector:" .ecom-collection__filters-group-list.ecom-collection__filters-enable-colors",properties:{display:""}}}]},{group_title:this.$t("change_text"),params:[{name:"filter_selected_text",label:this.$t("filter_selected"),type:"text",options:{placeholder:"{{ count }} selected"}},{name:"filters_selected_text",label:this.$t("filters_selected"),type:"text",options:{placeholder:"{{ count }} selected"}},{type:"text",name:"clear_text",label:this.$t("clear_filter"),value:"Clear all"},{name:"reset_filter",label:this.$t("filter_reset"),type:"text",options:{placeholder:"Reset"}},{type:"text",name:"max_price_text",label:this.$t("max_price"),value:"Max price"}]},{group_title:this.$t("menu"),params:[{type:"toggle",label:this.$t("show_menu"),name:"show_sub_menu",options:{values:{on:{label:this.$t("show"),value:!0},off:{label:this.$t("hide"),value:!1}}},css:!1},{type:"text",name:"menu_label",label:this.$t("menu_label"),options:{visible:e=>e.show_sub_menu===!0}},{type:"toggle",label:this.$t("show_all_item_by_default"),name:"show_all_items_menu",options:{visible:{keep_data:!1,condition:e=>e.show_sub_menu===!0&&e.filter_type!=="dropdown"&&e.filter_type!=="push_down"},values:{on:{label:this.$t("show"),value:!0},off:{label:this.$t("hide"),value:!1}}},css:!1},{type:"picker",name:"link_list",label:this.$t("menu"),options:{visible:e=>e.show_sub_menu===!0,type:"menu",layout:"list",multiple:!1}},{name:"tab",type:"tab",value:"normal",options:{visible:e=>e.show_sub_menu===!0,tabs:[{name:"normal",title:this.$t("normal")},{name:"active",title:this.$t("active")}]},css:{isCss:!1}},{type:"picker",label:this.$t("icon"),name:"icon_menu",options:{visible:e=>e.tab==="normal"&&e.show_sub_menu===!0,reset:!1,type:"icon",multiple:!1},css:{isCss:!1}},{type:"picker",label:this.$t("icon"),name:"icon_menu_active",options:{visible:e=>e.tab==="active"&&e.show_sub_menu===!0,reset:!1,type:"icon",multiple:!1},css:{isCss:!1}}]}]},link_list(){return this.data&&this.data.settings&&this.data.settings.link_list&&this.data.settings.link_list.value?this.data.settings.link_list.value:null},icon_menu(){var e,d;return(d=(e=this.data)==null?void 0:e.settings)==null?void 0:d.icon_menu},icon_menu_active(){var e,d;return(d=(e=this.data)==null?void 0:e.settings)==null?void 0:d.icon_menu_active},show_dropdown_arrow(){var e;return this.data.settings.filter_type==="dropdown"||((e=this.data.settings)==null?void 0:e.use_accordion)},show_count(){return!!(this.data.settings&&this.data.settings.show_count)},hide_zero(){return!!(this.data.settings&&this.data.settings.hide_zero)},dropdown_max(){return this.data.settings.filter_type==="dropdown"&&this.data.settings.number_max>=0},show_sub_menu(){var e,d;return(d=(e=this.data)==null?void 0:e.settings)==null?void 0:d.show_sub_menu},show_all_items_menu(){var e,d;return(d=(e=this.data)==null?void 0:e.settings)==null?void 0:d.show_all_items_menu},javascript(){return function(){var G,J,X;let e=this.$el,d=this.isLive,s=(G=this.settings.close_filter)!=null?G:!1;if(!e||(d||setTimeout(function(){e.closest(".ecom-block")&&(e.closest(".ecom-block").style.zIndex=11,e.style.zIndex=7)},500),!e.querySelector(".ecom-collection__filters-wrapper")))return;const b=this,y=(J=e.querySelector(".ecom-collection__filters-wrapper").dataset.page)!=null?J:"collection",f=this.settings.filter_type;e.querySelectorAll(".ecom-collection__filters-group-list").forEach(t=>{t.childNodes.length&&t.closest(".ecom-collection__filters-group").classList.remove("ecom-d-none")});function C(){this.querySelector(".ecom-collection__filters-radio--input-hidden").checked=!0}if(e.querySelectorAll(".ecom-collection__filters-group-radio").forEach(t=>{t.addEventListener("click",C)}),((X=this.settings.accordion_close)!=null?X:!1)&&(this.settings.filter_type=="collapse"||this.settings.filter_type=="block"&&this.settings.use_accordion)){const t=e.querySelectorAll(".ecom-collection__filters-group");if(t.length===0)return;t.forEach(function(o,l){l!==0&&o.removeAttribute("open"),o.addEventListener("click",function(){t.forEach(function(r){r!==o&&r.removeAttribute("open")})})})}function F(t){let o=t.target;do{if(o&&o.classList&&o.classList.contains("ecom-collection__filters-group--display"))return;o=o.parentNode}while(o);if(!o||!o.classList.contains("ecom-collection__filters-group--display")){let l=e.querySelectorAll(".ecom-filter-dropdown-desktop .ecom-collection__filters-group .ecom-collection__filters-group-summary");l.length>0&&l.forEach(r=>r.closest(".ecom-collection__filters-group").classList.contains("active")&&r.closest(".ecom-collection__filters-group").classList.remove("active")),document.removeEventListener("click",F)}}function P(){e.querySelector(".ecom-collection__filters-dropdown")&&e.querySelector(".ecom-collection__filters-dropdown").classList.add("ecom-filter-dropdown-desktop");let t=e.querySelectorAll(".ecom-filter-dropdown-desktop .ecom-collection__filters-group .ecom-collection__filters-group-summary");!t||t.forEach(o=>{let l=o.closest(".ecom-collection__filters-group"),r=l.dataset.attrsMax,a=l.querySelectorAll(".ecom-collection__filters-group-list-item-max"),n=l.querySelector(".ecom-collection__filters-group--display "),c=l.querySelector(".ecom-more-filter");c&&c.addEventListener("click",()=>{R(a),c.style.display="none"}),a.length>0&&r&&(r=parseInt(r),R(a,r)),s&&l.classList.contains("active")&&l.classList.remove("active"),o.addEventListener("click",()=>{if(l.classList.contains("active"))l.classList.remove("active");else if(document.removeEventListener("click",F),t.forEach(p=>p.closest(".ecom-collection__filters-group").classList.contains("active")&&p.closest(".ecom-collection__filters-group").classList.remove("active")),n){setTimeout(function(){document.addEventListener("click",F)},200),l.classList.add("active");const{left:p,right:u}=l.getBoundingClientRect();window.innerWidth-p<300&&(n.style.left=`-${300-(window.innerWidth-p-10)}px`)}})})}function R(t,o){t.forEach((l,r)=>{o===void 0||r<o?l.style.display="block":l.style.display="none"})}const D=this.settings.collapse_mobile;this.settings.filter_type=="dropdown"&&P();const h=e.querySelector(".ecom-filter-modal"),z=e.querySelector(".ecom-filter-btn-toggle"),w=h?h.closest("div.ecom-core.core__block"):"",k=h?h.closest("div.ecom-column.ecom-core"):"",H=e.querySelector(".ecom-filter-modal-close"),I=window.matchMedia("only screen and (max-width: 1024px)");D&&I.matches&&U(I);function V(){!h||(h.style.display="block",w&&(w.style.zIndex="99"),k&&(k.style.zIndex="99"),document.querySelector("body").classList.add("ecom-filter-opened"))}function q(){!h||(h.style.display="none",document.querySelector("html").style.overflow="inherit",document.body.style.overflow="inherit",w&&(w.style.zIndex="1"),k&&(k.style.zIndex="1"),setTimeout(function(){document.querySelector("body").classList.remove("ecom-filter-opened")},500))}function j(t){t.target===h&&q()}function U(t){let o=e.querySelectorAll(".ecom-collection__filters-group--display");t.matches?b.settings.collapse_mobile&&h&&z&&H&&(h&&(h.style.display="none"),b.settings.filter_type=="dropdown"&&o.forEach(l=>{l.style.position="relative"}),z.addEventListener("click",()=>{document.querySelector("html").style.overflow="hidden",document.body.style.overflow="hidden",V()}),H.addEventListener("click",()=>{q()}),h.addEventListener("click",j),w&&(w.style.zIndex="99"),k&&(k.style.zIndex="99")):(h&&(h.style.display="block"),w&&(w.style.zIndex="1"),k&&(k.style.zIndex="1"),b.settings.filter_type=="dropdown"&&o&&o.forEach(l=>{l.style.position="absolute"}))}(this.settings.filter_type=="collapse"||this.settings.filter_type=="push_down"&&this.settings.collapse_mobile)&&(z&&z.addEventListener("click",()=>{this.settings.filter_type=="collapse"&&(document.querySelector("html").style.overflow="hidden",document.body.style.overflow="hidden"),V()}),H&&H.addEventListener("click",()=>{q()}),h&&h.addEventListener("click",j)),this.settings.collapse_mobile&&this.settings.open_collapse_mobile&&I.matches&&e.querySelectorAll(".ecom-collection__filters-group").forEach(function(t){t.classList.add("active")});let $=0,E=0,T=0,Y=15;function O(t){$===0&&(t.style.maxHeight="100%"),T=$,t.classList.remove("ecom-show--filter");var o=$/10;t.style.overflow="hidden",E=setInterval(function(){T-=o,T>0?t.style.maxHeight=T+"px":(t.style.maxHeight=0,clearInterval(E))},Y)}function Q(t){var o=$/10;t.classList.add("ecom-show--filter"),E=setInterval(function(){T+=o,T<$?t.style.maxHeight=T+"px":(t.style.maxHeight=$+"px",clearInterval(E))},Y)}function ee(){const t=e.querySelector('.ecom-container-filter-list--wrapper[data-type="push_down"]');t&&($===0&&(t.style.maxHeight="100%"),$=t.offsetHeight,O(t),t.style.display="none",t.style.opacity="1",z.addEventListener("click",()=>{t.classList.contains("ecom-show--filter")?O(t):(t.style.display="grid",Q(t))}))}ee();function K(t=!1){let o=1,l=15e3;if(!e.querySelector(".ecom-collection__filters-group-price"))return!0;let r=e.querySelector(".ecom-collection__filters-price-range-max"),a=e.querySelector(".ecom-collection__filters-price-range-min"),n=e.querySelector(".ecom-filter-input-min"),c=e.querySelector(".ecom-filter-input-max");if(!n||!c||!a||!r)return;if(o=parseFloat(a.getAttribute("min")),l=parseFloat(r.getAttribute("max")),t===!0){n.value=n.getAttribute("min"),c.value=c.getAttribute("max"),v();return}function p(g){return window.EComposer.formatMoney(g)}const u=e.querySelector(".ecom-filter-price-from"),_=e.querySelector(".ecom-filter-price-to");function v(){let g=(l-o)*n.value/100+o,x=(l-o)*c.value/100+o;a.value=g.toFixed(2),r.value=x.toFixed(2),u&&(u.innerHTML=`${p(Math.floor(g*100))}`),_&&(_.innerHTML=`${p(Math.floor(x*100))}`)}c.addEventListener("input",()=>{let g=parseInt(n.value),x=parseInt(c.value);x<g+1&&(n.value=x-1,g===parseInt(n.min)&&(c.value=1)),v()}),n.addEventListener("input",()=>{let g=parseInt(n.value),x=parseInt(c.value);g>x-1&&(c.value=g+1,x===parseInt(c.max)&&(n.value=parseInt(c.max)-1)),v()})}function te(){var t=e.querySelectorAll(".ecom-shopify__menu-item--has-children > .ecom-menu_item, .ecom-shopify__menu-child-link-item--has-children > .ecom-menu_item");if(!!t){var o,l="false",r=e.querySelector(".ecom-shopify_menu");if(r&&r.dataset.showAll)var l=r.dataset.showAll;for(o=0;o<t.length;o++){let a=function(n){let c=n.nextElementSibling,p=null;if(n.classList.contains("ecom-item-active")){if(n.classList.remove("ecom-item-active"),c){c.style.maxHeight=null;var u=c.querySelectorAll(".ecom-menu_item");u&&u.forEach(_=>{var v=_.nextElementSibling;v&&(v.style.maxHeight=null),_.classList.remove("ecom-item-active")}),p=n.closest(".ecom-shopify__menu-sub-menu"),p&&(p.style.maxHeight=parseInt(p.style.maxHeight)-c.scrollHeight+"px")}}else n.classList.add("ecom-item-active"),c&&(p=n.closest(".ecom-shopify__menu-sub-menu"),p&&(p.style.maxHeight=parseInt(p.style.maxHeight)+c.scrollHeight+"px"),c.style.maxHeight=c.scrollHeight+"px")};l&&l=="true"&&(t[o].classList.contains("ecom-item-active")||a(t[o])),t[o].addEventListener("click",function(n){n.preventDefault(),a(this)})}}}te();const oe=function(){return{searchParamsInitial:window.location.search.slice(1),searchParamsPrev:window.location.search.slice(1),init(){const t=e.querySelectorAll(".ecom-collection__filters-form");if(t.length==0)return;const o=t[0].closest(".ecom-sections[data-section-id]"),l=t[0].closest(".ecom-row.ecom-section");!o||!o.dataset.sectionId||(this.facetForms=t,this.wrapper=o,this.sectionId=o.dataset.sectionId,this.wrapper_product=l,this.filterId=b.id,this.debouncedOnSubmit=this.debounce(r=>{this.onSubmitHandler(r)},800),this.facetForms.forEach(r=>r.addEventListener("input",this.debouncedOnSubmit.bind(this))),this.handleRemoveFilter(),this.setListeners())},setListeners(){const t=this,o=r=>{const a=r.state?r.state.searchParams:t.searchParamsInitial;if(a===t.searchParamsPrev)return;const n=`${window.location.pathname}?section_id=${t.sectionId}&${a}`;t.handleLoadProduct(n,a,r,!1)};window.__ecomFilterPopstateHandlers||(window.__ecomFilterPopstateHandlers=new Map);const l=window.__ecomFilterPopstateHandlers.get(this.filterId);l&&window.removeEventListener("popstate",l),window.__ecomFilterPopstateHandlers.set(this.filterId,o),window.addEventListener("popstate",o)},debounce(t,o){let l;return(...r)=>{clearTimeout(l),l=setTimeout(()=>t.apply(this,r),o)}},onSubmitHandler(t){t.preventDefault();const o=[];this.facetForms.forEach(v=>{o.push(this.createSearchParams(v))});let l=o.join("&");const r=new URLSearchParams(new URL(window.location).search),a=["q","type","options","sort_by"],n={};for(const[v,g]of r)a.includes(v)&&(n[v]=g);const p=`&${new URLSearchParams(n).toString()}`;p&&p!=""&&(l+=p);const u=`${window.location.pathname}?section_id=${this.sectionId}&${l}`;this.handleLoadProduct(u,l,t);let _=e.querySelector('.ecom-container-filter-list--wrapper[data-type="push_down"]');_&&s&&O(_)},createSearchParams(t){const o=new FormData(t),l={},r=new URLSearchParams;for(const[a,n]of o.entries()){const c=t.querySelector(`[name="${a}"]`);if(c&&(c.classList.contains("ecom-collection__filters-price-range-min")||c.classList.contains("ecom-collection__filters-price-range-max"))&&(!n||parseFloat(n)==0||parseFloat(n)==parseFloat(c.getAttribute("placeholder"))||parseFloat(n)==parseFloat(c.getAttribute("min"))||parseFloat(n)==parseFloat(c.getAttribute("max"))))continue;const p=`${a}:${n}`;l[p]||(r.append(a,n),l[p]=!0)}return r.toString()},handleLoadProduct(t,o,l,r=!0){const a=this;this.searchParamsPrev=o;const n=async function(p){return(await fetch(p,{method:"GET",headers:{"Content-Type":"text/html"}})).text()};document.querySelectorAll(".ecom-collection__product-wrapper").forEach(p=>{const u=p.closest(".ecom-row.ecom-section");u&&(window.screen.width>1024&&u.classList.contains("hide-on-desktop")||window.screen.width>767&&window.screen.width<=1024&&u.classList.contains("hide-on-tablet")||window.screen.width<=767&&u.classList.contains("hide-on-mobile")||p.classList.add("ecom-doing-filter"))}),a.wrapper_product.classList.add("ecom-doing-filter"),n(t).then(function(p){const u=document.createElement("div");u.innerHTML=p;let _=null,v=0;const g=`.ecom-collection__product-main.ecom-collection_product_template_${y}`,x=document.querySelectorAll(g);if(x.length>1?x.forEach(function(le,ne){_||(window.screen.width>1024&&!le.closest(".hide-on-desktop")||window.screen.width>767&&window.screen.width<=1024&&!le.closest(".hide-on-tablet")||window.screen.width<=767&&!le.closest(".hide-on-mobile"))&&(_=le,v=ne)}):_=x[0],!_)return;let W=u.querySelectorAll(g);_.innerHTML=W&&W[v].innerHTML,r&&a.updateURLHash(o),a.renderActiveFacets(u),a.renderFilters(u,l),_.querySelector(".ecom-collection__product--wrapper-items")&&_.dispatchEvent(new CustomEvent("ecom-products-init",{detail:{wrapper:_}}));const Z=u.querySelector(".ecom-filter-total-count"),ie=Z&&parseInt(Z.dataset.total)||0;document.dispatchEvent(new CustomEvent("ecom-filter-updated",{bubbles:!0,detail:{count:ie,searchParams:o}}))}).finally(function(){(f==="collapse"||(f==="block"||f==="dropdown")&&window.screen.width<1025&&D)&&s&&q(),window.EComposer&&window.EComposer.initButtonWishlist&&window.EComposer.initButtonWishlist(),document.querySelectorAll(".ecom-collection__product-wrapper").forEach(p=>{p.classList.remove("ecom-doing-filter")}),a.wrapper_product.classList.remove("ecom-doing-filter"),P()})},updateURLHash(t){history.pushState({searchParams:t},"",`${window.location.pathname}${t&&"?".concat(t)}`)},renderActiveFacets(t){const o=t.querySelectorAll(".ecom-collection__filters-applied-block[data-filter-id]"),l=new Set;o.forEach(n=>l.add(n.dataset.filterId)),this.wrapper.querySelectorAll(".ecom-collection__filters-form[data-filter-id]").forEach(n=>l.add(n.dataset.filterId)),l.forEach(n=>{const c=t.querySelector(`.ecom-collection__filters-applied-block[data-filter-id="${n}"]`),p=this.wrapper.querySelector(`.ecom-collection__filters-applied-block[data-filter-id="${n}"]`),u=this.wrapper.querySelectorAll(`.ecom-collection__filters-form[data-filter-id="${n}"]`);!p&&c?u.forEach(_=>{_.prepend(c.cloneNode(!0))}):p&&c?p.innerHTML=c.innerHTML:p&&!c&&p.remove()});const a=this.wrapper.querySelectorAll(".ecom-collection__filter-values");if(a.length>0){const n=o[0],c=n?n.querySelector(".ecom-collection-filters--active_values"):null;a.forEach(p=>{c?p.innerHTML=c.innerHTML:p.innerHTML=""})}},renderFilters(t,o){const l=t.querySelectorAll(".ecom-js-filter[data-filter-id][data-index]"),r=u=>{if(o.target===window)return!1;const _=o?o.target.closest(".ecom-js-filter"):void 0;return _?u.dataset.index===_.dataset.index&&u.dataset.filterId===_.dataset.filterId:!1},a=Array.from(l),n=a.find(r);a.forEach(u=>{const _=`.ecom-js-filter[data-filter-id="${u.dataset.filterId}"][data-index="${u.dataset.index}"]`;this.wrapper.querySelectorAll(_).forEach(g=>{g.innerHTML=u.innerHTML})}),c(t,this.wrapper),n&&p(n,o.target.closest(".ecom-js-filter"));function c(u,_){u.querySelectorAll(".ecom-collection__filters-applied-block[data-filter-id]").forEach(g=>{const W=`.ecom-collection__filters-applied-block[data-filter-id="${g.dataset.filterId}"] .ecom-collection-filters--active_values-list`,Z=g.querySelector(".ecom-collection-filters--active_values-list"),ie=_.querySelector(W);Z&&ie&&(ie.innerHTML=Z.innerHTML)})}function p(u,_){if(!_)return;const v=_.querySelector(".ecom-collection__filters-group--selected"),g=u.querySelector(".ecom-collection__filters-group--selected"),x=_.querySelector(".ecom-collection__filters-group-summary"),W=u.querySelector(".ecom-collection__filters-group-summary");g&&v&&(_.querySelector(".ecom-collection__filters-group--selected").outerHTML=u.querySelector(".ecom-collection__filters-group--selected").outerHTML),x&&W&&(_.querySelector(".ecom-collection__filters-group-summary").outerHTML=u.querySelector(".ecom-collection__filters-group-summary").outerHTML)}},handleRemoveFilter(){this.facetForms.forEach(o=>{o.addEventListener("click",t.bind(this))});function t(o){if(o.target.closest(".ecom-collection__filters-group-list-item-clear")||o.target.closest(".ecom-collection__filters-group-reset-filter")){o.preventDefault();const l=o.target.closest(".ecom-collection__filters-group-list-item-clear")||o.target.closest(".ecom-collection__filters-group-reset-filter");if(!l.href)return;let r=l.href.indexOf("?")==-1?"":l.href.slice(l.href.indexOf("?")+1),a=window.location.search.match(/&sort_by=\S*/gm)&&window.location.search.match(/&sort_by=\S*/gm).length&&window.location.search.match(/&sort_by=\S*/gm)[0];a&&(r+=a);const n=`${window.location.pathname}?section_id=${this.sectionId}&${r}`;this.handleLoadProduct(n,r,o),K(!0)}}}}}();d&&(K(),this.settings.enable_ajax?oe.init():this.$el.querySelector(".ecom-collection__filters-form").addEventListener("change",function(){if(y=="search"){const t=new URLSearchParams(new URL(window.location).search),o=["q","type","options","sort_by"],l={};for(const[r,a]of t)o.includes(r)&&(l[r]=a);for(const r in l)if(l.hasOwnProperty(r)){const a=document.createElement("input");a.type="hidden",a.name=r,a.value=l[r],this.appendChild(a)}this.submit()}else this.submit()}))}},requestShopifyType(){return{shopify_type:"collection"}},css(){return`
                .ecom-collection__filters--color.ecom-shopify-color-unavailable {
                    border: 1px dashed rgba(14, 30, 47, .5) !important;
                }
                .ecom-collection__filters-group-checkbox-label {
                    pointer-events: none;
                }
                .ecom-collection__filters-notice-label{
                    color: rgb(32 34 35);
                    opacity: 1;
                    font-weight: 400;
                    font-size: 1.4rem;
                    line-height: 1.8rem;
                    padding: 1.25rem;
                    background-color: rgb(255 245 234);
                    border: 1px solid rgb(225 184 120);
                    border-radius: 0.25rem;
                    width: 100%;
                    display: flex;
                    margin: 1rem auto;
                }
				.ecom-collection__filters-group-radio--input{
					background-color: #FFFFFF;
					border: 1px solid #D1D5DB;
					box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
					border-radius: 6px;
					font-style: normal;
					font-weight: normal;
					font-size: 1.4rem;
					line-height: 20px;
					color: #6B7280;
					outline:none;
					padding: 9px 13px;
				}
                    .ecom-collection__filters-group-radio--input[type=radio]{
						-webkit-appearance: none;
						-moz-appearance: none;
						appearance: none;
						padding: 0;
						-webkit-print-color-adjust: exact;
						color-adjust: exact;
						display: inline-block;
						vertical-align: middle;
						background-origin: border-box;
						-webkit-user-select: none;
						-moz-user-select: none;
						-ms-user-select: none;
						user-select: none;
						flex-shrink: 0;
						height: 1.6rem;
						width: 1.6rem;
						background-color: #fff;
						border: initial;
						border-radius:50%;
						position:relative;
					}
					.ecom-collection__filters-group-radio--input[type=radio]:checked {
						border-color: transparent;
						background-color: #059669;
					}
					.ecom-collection__filters-group-radio--input[type=radio]:checked::after{
						position:absolute;
						content:'';
						width:6px;
						height:6px;
						background-color:white;
						border-radius:50%;
						left:50%;
						top:50%;
						transform:translate(-50%,-50%)
					}

                .ecom-collection__filters-radio--input-hidden{
                    display: none;
                }
                .ecom-collection__filters--color-wrapper {
                    width: 24px;
                    height: 24px;
                    border-style: solid;
                    border-width: 1px;
                    border-color: #0000001a;
                    margin: 0 5px 0 0;
                    padding: 1px;
                }
                .ecom-collection__filters-group-list-item.ecom-filter-hide-checkbox input:checked~.ecom-collection__filters-group-checkbox-label .ecom-collection__filters--color-wrapper{
                    border-style: solid;
                    border-width: 1px;
                    border-color: #000000;
                }
                .ecom-collection__filters--color {
                    width: 100%;
                    height: 100%;
                    display: block;
                    border-radius: 50%;
                }

                .ecom-scroll_bar::-webkit-scrollbar {
                    display: block;
                    width: 3px;
                }
                .ecom-collection__filters-group-checkbox--input[disabled] {
                    pointer-events: none;
                }
                .ecom-collection__filters-group-radio--input[disabled] {
                    pointer-events: none;
                }
                .ecom-collection__filters-group-checkbox--disabled span {
                    opacity: .8;
                    pointer-events: none;
                }
                .ecom-collection__filters-group-radio--disabled span {
                    opacity: .8;
                    pointer-events: none;
                }
                .ecom-collection__filters-enable-colors .ecom-filter-hide-checkbox .ecom-collection__filters-group-checkbox--input{
                    display: none;
                }
                .ecom-collection__filters-enable-colors .ecom-filter-hide-radio .ecom-collection__filters-group-radio--input{
                    display: none;
                }
                .ecom-scroll_bar::-webkit-scrollbar-track {
                    background-color: rgba(0,0,0,.15);
                }
                .ecom-scroll_bar::-webkit-scrollbar-thumb {
                    background-color: rgba(0,0,0,.25)
                }
                .ecom-icon-filter-open{
                    display:none;
                }
                .ecom-collection__filters-group-checkbox:hover {
                    cursor: pointer;
                }
                .ecom-collection__filters-group-radio:hover {
                    cursor: pointer;
                }
                .ecom-collection__filters-group-dropdown:focus {
                    border: none;
                }
                .ecom-collection__filters-group-count-bubble:empty {
                    display: none;
                }
                .ecom-icon-filter-close {
                    display: flex;
                }
                .ecom-collection__filters-group-dropdown.active .ecom-icon-filter-open,
                details[open] .ecom-icon-filter-open{
                    display:flex !important
                }
                .ecom-collection__filters-group-dropdown.active .ecom-icon-filter-close,
                details[open] .ecom-icon-filter-close{
                    display:none !important
                }
                .ecom-d-none {
                    display: none
                }
                .ecom-collection__filters-group-list-item-max{
                    display:none;
                }
                .ecom-collection__filters-block div.ecom-collection__filters-group .ecom-icon-filter-open,
                .ecom-collection__filters-block div.ecom-collection__filters-group .ecom-icon-filter-close{
                    display:none !important
                }
                .ecom-icon-filter-close svg {
                    width: 16px;
                    height: 16px;
                }
                /*Modal-Box*/
                #ecom-modal-block {
                    display: none;
                    position: fixed;
                    z-index: 1;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background:rgb(116,119,121,.6)
                }
                .ecom-modal-content{
                    position:fixed;
                    width: 350px;
                    max-width: 90%;
                    background:white;
                    top:0;
                    bottom:0;
                    left:0;
                    -webkit-animation-name: leftSide;
                    animation-name: leftSide;
                    -webkit-animation-duration: .3s;
                    animation-duration: .3s;
                    -webkit-animation-fill-mode: both;
                    animation-fill-mode: both;
                    transition:all .3s linear;
                    /*overflow-y: auto;*/
                }
                .ecom-collection__filters .ecom-modal-content.ecom-modal-right-side{
                    left: auto;
                    right: 0;
                    -webkit-animation-name: rightSide;
                    animation-name: rightSide;
                }
                .ecom-collection__filters .ecom-modal-content.ecom-modal-left-side{
                    left:0;
                    right: auto;
                    -webkit-animation-name: leftSide;
                    animation-name: leftSide;
                }

                #ecom-modal-close{
                    position:absolute;
                    right: 10px;
                    top:10px;
                    display:flex;
                    cursor:pointer;
                    z-index: 100;
                }
                #ecom-modal-close svg{
                    width:24px;
                    height:24px;
                }
                @keyframes leftSide {
                    from {
                        opacity: 0;
                        transform: translateX(-100%);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes rightSide {
                    from {
                        opacity: 0;
                        transform: translateX(200%);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .ecom-collection__filters-group-header{
                    display:flex;
                    align-items:center;
                    gap: 5px;
                }
                .ecom-collection__filters-group-header svg{
                    width:16px;
                    height:auto;
                }

            .ecom-collection__filters-group-price{
                display:none;
                grid-column-gap:20px;
                margin-top:6px;
            }
            .ecom-collection__filters-group-field{
                display:inline-flex;
                grid-column-gap:6px;
                font-style: normal;
            }
            .ecom-collection__filters-group-field--input{
                -webkit-appearance: none;
                appearance: none;
                background: white;
                border: 1px solid #D1D5DB;
                box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
                border-radius: 6px;
                width: 80px;
                font-style: normal;
                font-weight: normal;
                font-size: 1.4rem;
                color: #6B7280;
                outline:none;
                padding: 0px 8px;
            }
            .ecom-collection__filters-group-field--input::-webkit-outer-spin-button,
            .ecom-collection__filters-group-field--input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                appearance: none;
                margin: 0;
            }
            .ecom-collection__filters-group-field--input:focus{
                border-color:rgba(5, 150, 105,1);
                box-shadow:rgb(255, 255, 255) 0px 0px 0px 0px, rgba(5, 150, 105,1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
            }
            .ecom-collection__filters-group-checkbox{
                display:flex;
                align-items:center;
            }
            .ecom-collection__filters-group-checkbox input{
                cursor: pointer;
            }
            .ecom-collection__filters-group-radio input{
                cursor: pointer;
            }
            .ecom-collection__filters-group-checkbox input[type=checkbox]{
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    -webkit-print-color-adjust: exact;
                    color-adjust: exact;
                    display: inline-block;
                    vertical-align: middle;
                    background-origin: border-box;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    flex-shrink: 0;
                }
                .ecom-collection__filters-group-checkbox input[type=checkbox]:focus {
                    box-shadow:rgb(255, 255, 255) 0px 0px 0px 2px, #059669 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                }
                .ecom-collection__filters-group-checkbox input[type=checkbox]:checked {
                    background-size: 100% 100%;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
                }

                .ecom-collection__filters-group-summary--title{
                    display: block;
                    width: 100%;
                }
                details.ecom-collection__filters-group .ecom-collection__filters-group-summary, .ecom-collection__filters-dropdown .ecom-collection__filters-group-summary{
                    cursor:pointer;
                }
                .ecom-collection__filters-group--header{
                    display: flex;
                    align-items: center;
                    grid-column-gap: 12px;
                }
                ul.ecom-collection__filters-group-list{
                    list-style: none;
                    flex-wrap: wrap;
                    overflow-y: auto;
                }
                .ecom-collection__filters-enable-colors .ecom-filter-hide-color-count .ecom-collection__filters--count {
                    display: none;
                }
                 .ecom-collection__filters-form:empty {
                    margin: auto;
                    width: 100%;
                    min-height: 600px; /* change height to see repeat-y behavior */

                    background-image: linear-gradient(
                        100deg,
                        rgba(255, 255, 255, 0),
                        rgba(255, 255, 255, 0.5) 50%,
                        rgba(255, 255, 255, 0) 90%
                        ),
                        linear-gradient(lightgray 20px, transparent 0),
                        linear-gradient(lightgray 20px, transparent 0),
                        linear-gradient(lightgray 20px, transparent 0),
                        linear-gradient(lightgray 20px, transparent 0);

                        background-repeat: repeat-y;

                        background-size: 50px 200px, /* highlight */ 150px 200px, 350px 200px,
                            300px 200px, 250px 200px;

                        background-position: 0 0, /* highlight */ 1px 0, 1px 40px, 1px 80px, 1px 120px;

                        animation: shine 1s infinite;
                    }

                    @keyframes shine {
                        to {
                            background-position: 100% 0, /* move highlight to right */ 1px 0, 1px 40px,
                            1px 80px, 1px 120px;
                        }
                    }
                    .ecom-collection-filters--price-range {
                        max-width: 400px;
                        margin-top:10px;
                        }
                        .ecom-collection-filters--multi-range {
                            position: relative;
                            display: flex;
                            margin: 10px 0;
                        }
                        .ecom-collection-filters--multi-range input[type=range]:nth-child(1)::-webkit-slider-thumb::before {
                            background-color: var(--ecom-color-thumb);
                        }
                        .ecom-collection-filters--multi-range input[type=range]:nth-child(2) {
                            background: none;
                            height:100%;
                        }
                        .ecom-collection-filters--multi-range input[type=range]:nth-child(2)::-webkit-slider-thumb::before {
                            background-color: var(--ecom-color-thumb);
                        }
                        .ecom-collection-filters--multi-range input[type=range]::-moz-range-track {
                            background: none;
                        }
                        #ecom-collection-filters--input-min{
                            position:relative !important;
                            height: var(--ecom-size-custom,4px);
                        }
                        .ecom-collection-filters--price-range input[type=range] {
                            position: absolute;
                            width: 100%;
                            padding: 0;
                            margin: 0;
                            border: 0;
                            outline: none;
                            background: var(--ecom-color-custom,red);
                            -webkit-appearance: none;
                                -moz-appearance: none;
                                    appearance: none;
                            pointer-events: none;
                        }
                        .ecom-collection-filters--price-range input[type=range]:active,
                        .ecom-collection-filters--price-range input[type=range]:focus,
                        .ecom-collection-filters--price-range input[type=range]::-moz-focus-outer {
                            border: none;
                            outline: none;
                        }
                        .ecom-collection-filters--price-range input[type=range]::-moz-range-thumb {
                            position: relative;
                            height: var(--height-thumb-custom,16px);
                            width: var(--width-thumb-custom,16px);
                            margin: 5px 0;
                            border-radius:9999px;
                            border:var(--border-thumb-custom);
                            background-color: var(--bg-thumb-custom,#fff);
                            box-shadow: 0 1px 4px 0.5px rgba(0,0,0,0.3);
                            -moz-appearance: none;
                                appearance: none;
                            pointer-events: all;
                        }
                        .ecom-collection-filters--price-range input[type=range]::-moz-range-thumb:hover {
                            cursor: grab;
                        }
                        .ecom-collection-filters--price-range input[type=range]::-moz-range-thumb:active {
                            cursor: grabbing;
                        }
                        .ecom-collection-filters--price-range input[type=range]::-webkit-slider-thumb {
                            position: relative;
                            height: var(--height-thumb-custom,16px);
                            width: var(--width-thumb-custom,16px);
                            margin: 5px 0;
                            border-radius:9999px;
                            border:var(--border-thumb-custom);
                            background-color: var(--bg-thumb-custom,#fff);
                            box-shadow: 0 1px 4px 0.5px rgba(0,0,0,0.3);
                            -webkit-appearance: none;
                                    appearance: none;
                            pointer-events: all;
                        }
                        .ecom-collection-filters--price-range input[type=range]::-webkit-slider-thumb:hover {

                        cursor: grab;
                        }
                        .ecom-collection-filters--price-range input[type=range]::-webkit-slider-thumb:active {

                        cursor: grabbing;
                        }
                        .ecom-collection__filters-dropdown .ecom-container-filter-list{
                            display:flex;
                            flex-wrap:wrap;
                        }
                        .ecom-collection__filters-dropdown.ecom-filter-dropdown-desktop
                        .ecom-collection__filters-group{
                            position:relative;
                            border:1px solid transparent
                        }
                        .ecom-collection__filters-dropdown.ecom-filter-dropdown-desktop
                        .ecom-collection__filters-group .ecom-collection__filters-group--display{
                            display:none;
                            position:absolute;
                            top:100%;
                            left:0;
                            animation: growDown 300ms ease-in-out forwards;
                            transform-origin: top center;
                            /*transition: all ease-in-out .3s;*/
                            padding:15px;
                            background-color:white;
                            z-index:10;
                            min-width:300px;
                            max-height: 300px;
                            overflow-y: auto;
                        }
                        @keyframes growDown {
                            0% {
                                transform: scaleY(0)
                            }
                            80% {
                                transform: scaleY(1.1)
                            }
                            100% {
                                transform: scaleY(1)
                            }
                        }
                        .ecom-collection__filters-dropdown.ecom-filter-dropdown-desktop
                        .ecom-collection__filters-group.active{
                            /* border:1px solid #333; */
                        }
                        .ecom-collection__filters-dropdown.ecom-filter-dropdown-desktop
                        .ecom-collection__filters-group.active .ecom-collection__filters-group--display{
                            display:block;
                            /* position: relative;*/
                        }



                        .ecom-button-filter-collapse{
                            display:none;
                        }
                        .ecom-modal-block--mobile{
                            overflow:unset
                        }
                        #ecom-modal-block.ecom-modal-block--mobile{
                            display: block;
                            position: unset;
                            background:transparent;
                        }
                        .ecom-modal-content--mobile.ecom-modal-content{
                            position:unset;
                            animation: unset;
                            width:100%;
                            max-width:unset;
                            background:transparent;

                        }
                        #ecom-modal-close.ecom-collapse-close{
                            display:none;
                        }
                        .ecom-collection-filters--active_values-list{
                            display:flex;
                            flex-wrap:wrap;
                            list-style: none;
                        }
                        .ecom-collection-filters--active_values-list li {
                            list-style: none;
                        }
                        .ecom-collection__filters-group-list-item a{
                            display:inline-flex;
                            text-decoration:none;
                            gap:10px;
                            align-items:center;
                            color:#333
                        }
                        .ecom-collection__filters-group-list-item .ecom-colletion-filters--close-icon{
                            color:#333;
                            display:flex;
                        }
                        .ecom-filter-collapse-icon{
                            display:flex;
                        }
                        .ecom-colletion-filters--close-icon svg{
                            width:auto;
                            height:auto;
                        }
                        .ecom-collection__filters-collapse button{
                            display:flex
                        }
                        @media screen and (max-width: 1024px) {
                            .ecom-collection__filters-dropdown.ecom-filter-dropdown-desktop
                            .ecom-collection__filters-group.active .ecom-collection__filters-group--display{
                                position: relative;
                            }
                            .ecom-collection__filters-dropdown .ecom-container-filter-list, .ecom-collection__filters-push_down[data-mobile="mobile"] .ecom-container-filter-list{
                                display:block !important;
                                height: 100% !important;
                            }
                            .ecom-container-filter-list-wrapper {
                                overflow: hidden;
                            }
                            .ecom-collection__filters-push_down[data-mobile="mobile"] .ecom-container-filter-list--wrapper[data-type="push_down"],
                            .ecom-collection__filters-push_down[data-mobile="mobile"] .ecom-container-filter-list--wrapper[data-type="push_down"] .ecom-collection__filters-group--display {
                                max-height: 100% !important;
                                overflow: unset !important;
                            }
                            #ecom-modal-close.ecom-collapse-close.ecom-collapse-close--mobile{
                                display:flex;
                            }
                             .ecom-button-filter-collapse.button_menu_block--mobile{
                                display:flex;
                                gap:10px;
                            }
                            #ecom-modal-block.ecom-modal-block--mobile {
                                display: none;
                                position: fixed;
                                z-index: 99;
                                left: 0;
                                top: 0;
                                width: 100%;
                                height: 100%;
                                background:rgb(116,119,121,.6)
                            }
                            .ecom-modal-content--mobile.ecom-modal-content{
                                position:fixed;
                                width: 100%;
                                max-width: 100%;
                                background:white;
                                -webkit-animation-name: leftSide;
                                animation-name: leftSide;
                                -webkit-animation-duration: .3s;
                                animation-duration: .3s;
                                -webkit-animation-fill-mode: both;
                                animation-fill-mode: both;
                                transition: all .3s linear;
                                overflow-y: auto;
                            }
                            .ecom-modal-content--mobile.ecom-modal-content .ecom-collection__filters-form{
                                height:100%;
                                /*overflow:auto*/
                            }
                        }
                        #button_menu_block{
                            align-items:center;
                            max-width: 100%;
                        }
                        .ecom-collection__filters-heading {
                            display: block;
                        }
                        .ecom-filter-collapse-icon{
                            color:#333;
                        }
                        .ecom-filter-collapse-icon svg{
                            width:auto;
                            height:auto;
                        }
                        .ecom-collection__filters-group-checkbox > input:focus{
                            outline: none !important;
                            box-shadow: none !important;
                        }
                        .ecom-collection__filters-applied-block{
                            display:flex;
                            flex-direction:column;
                        }
                        .ecom-collection__filters-form-collapse{
                            height:100%;
                                overflow:auto
                        }

                        .ecom-shopify__menu-list {
                            list-style: none;
                        }

                        .ecom-menu_title {
                            text-decoration: none;
                            font-size: 14px;
                            color: #878787;
                            display: block;
                        }

                        .ecom-collection__filters .ecom-shopify__menu-sub-menu {
                            max-height: 0;
                            overflow: hidden;
                            margin-left: 5px;
                            transition: .25s ease all;
                        }

                        .ecom-menu_item {
                            position: relative;
                        }

                        .ecom-menu_item:not(.ecom-menu_item.ecom-item-active) .ecom-menu_icon .ecom-menu_icon--normal {
                            display: flex;
                        }

                        .ecom-menu_item:not(.ecom-menu_item.ecom-item-active) .ecom-menu_icon .ecom-menu_icon--active {
                            display: none;
                        }

                        .ecom-menu_item.ecom-item-active .ecom-menu_icon .ecom-menu_icon--normal {
                            display: none;
                        }

                        .ecom-menu_item.ecom-item-active .ecom-menu_icon .ecom-menu_icon--active {
                            display: flex;
                        }

                        .ecom-menu_icon {
                            position: absolute;
                            right: 0;
                            top: 50%;
                            transform: translateY(-50%);
                            cursor: pointer;
                        }

                        .ecom-menu_icon--normal svg,
                        .ecom-menu_icon--active svg {
                            height: 12px;
                            width: 12px;
                            display: flex;
                        }
                        .ecom-filter--hide-checkbox {
                            opacity: 0;
                            visibility: hidden;
                            display: none !important;
                        }
                        .ecom-container-filter-list--wrapper[data-type='push_down'] {
                            height: 100%;
                            opacity: 0;
                            transition: ease all .5s;
                            overflow: hidden;
                        }
                        .ecom-container-filter-list[data-type='push_down'] {
                            display: grid;
                            grid-template-columns: repeat(4, 1fr);
                            gap: 10px 15px;
                        }
                        .ecom-collection__filters-push_down .ecom-collection__filters-group--display {
                            max-height: 250px;
                            height: 100%;
                            overflow-y: auto;
                        }


            `},default(){return{settings:{show_filter_result_count:!1,result_count_text:"{{count}} Results Found",title:"Filter by",show_count:!0,show_applied_filters:!0,applied_title:"Applied filters",show_color:!1,option_name:"Color",filter_type:"block",filter_selected_text:"{{count}} selected",filters_selected_text:"{{count}} selected",reset_filter:"Reset",collapse_mobile:!0,items_color_alignment:"inline-flex",icon:{value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M96 0C104.8 0 112 7.164 112 16V81.6C148.5 89.01 176 121.3 176 160C176 198.7 148.5 230.1 112 238.4V496C112 504.8 104.8 512 96 512C87.16 512 80 504.8 80 496V238.4C43.48 230.1 16 198.7 16 160C16 121.3 43.48 89.01 80 81.6V16C80 7.164 87.16 0 96 0zM96 208C122.5 208 144 186.5 144 160C144 133.5 122.5 112 96 112C69.49 112 48 133.5 48 160C48 186.5 69.49 208 96 208zM336 352C336 390.7 308.5 422.1 272 430.4V496C272 504.8 264.8 512 256 512C247.2 512 240 504.8 240 496V430.4C203.5 422.1 176 390.7 176 352C176 313.3 203.5 281 240 273.6V16C240 7.164 247.2 0 256 0C264.8 0 272 7.164 272 16V273.6C308.5 281 336 313.3 336 352zM256 400C282.5 400 304 378.5 304 352C304 325.5 282.5 304 256 304C229.5 304 208 325.5 208 352C208 378.5 229.5 400 256 400zM432 496C432 504.8 424.8 512 416 512C407.2 512 400 504.8 400 496V270.4C363.5 262.1 336 230.7 336 192C336 153.3 363.5 121 400 113.6V16C400 7.164 407.2 0 416 0C424.8 0 432 7.164 432 16V113.6C468.5 121 496 153.3 496 192C496 230.7 468.5 262.1 432 270.4V496zM416 144C389.5 144 368 165.5 368 192C368 218.5 389.5 240 416 240C442.5 240 464 218.5 464 192C464 165.5 442.5 144 416 144z"></path></svg>',cate:"Light"},icon_menu:{id:"B9FJda3u",name:"angle-down",cate:"Solid",url:"",value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path></svg>',thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path></svg>'},icon_menu_active:{id:"EWUwgzJy",name:"angle-up",cate:"Solid",url:"",value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"></path></svg>',thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"></path></svg>'},collapse_icon:{value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M362.7 203.9l-159.1 144c-6.125 5.469-15.31 5.469-21.44 0L21.29 203.9C14.73 197.1 14.2 187.9 20.1 181.3C26.38 174.4 36.5 174.5 42.73 180.1L192 314.5l149.3-134.4c6.594-5.877 16.69-5.361 22.62 1.188C369.8 187.9 369.3 197.1 362.7 203.9z"></path></svg>'},expand_icon:{value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M363.9 330.7c-6.271 6.918-16.39 6.783-22.62 1.188L192 197.5l-149.3 134.4c-6.594 5.877-16.69 5.361-22.62-1.188C14.2 324.1 14.73 314 21.29 308.1l159.1-144c6.125-5.469 15.31-5.469 21.44 0l159.1 144C369.3 314 369.8 324.1 363.9 330.7z"></path></svg>'},show_sub_menu:!1,menu_label:"Menu",show_all_items_menu:!1,price_filter_type:"slider",segment_steps:3,price_for_segment:100},style:{filter_title:{textTextAlign:"left",spacing:{margin:{bottom:"30px"}},textTypography:{"text-transform":"uppercase"}},applied_filters:{textTextAlign:"left",spacingTitle:{margin:{bottom:"10px"}},iconFontSize:"10px",iconPrimaryColor:"#0d0c0c",spacing:{margin:{bottom:"10px",right:"10px",top:"0px",left:"0px"},padding:{top:"6px",left:"15px",bottom:"6px",right:"15px"}},tab:"normal",textTypography:{"font-size":"18px","font-weight":"300"},buttonBackgroundnormalmode:{classic:{"background-color":"#cccccc"}},buttonBackgroundhovermode:{classic:{"background-color":"#e6e3e3"}}},filter_type_title:{textTextAlign:"left",spacing:{margin:{top:"10px",bottom:"4px"},padding:{bottom:"3px"}},textColor:"#080707",textTypography:{"text-transform":"uppercase","font-size":"16px"},border:{"border-style":"solid","border-width":{bottom:"1.5px"}}},filter_count:{textTextAlign:"left"},filter_selected:{textTextAlign:"left",spacing:{margin:{bottom:"8px"}}},checkbox:{textTextAlign:"left",tab:"active",popup:{"border-style":"solid","border-width":{top:"0.8px",left:"0.8px",bottom:"0.8px",right:"0.8px"}},"border-radius":{top:"4px",left:"4px",bottom:"4px",right:"4px"},backgroundHover:{classic:{"background-color":"#0691b1"}},popupHover:{"border-style":"none"},transition:300,backgroundActive:{classic:{"background-color":"#0691b1"}},popupActive:{"border-style":"none"},textTypography:{"font-size":"14px"},checkbox_spacing:{margin:{left:"0px"}},items_gap:"10px",width:"20px",height:"20px"},filter_button_reset:{spacing:{margin:{bottom:"8px"}}},price_filter_slider:{colorSlidenormal:"#111827",colorSlide:"rgba(17, 24, 39, 0.2)"},filter_general:{spacing:{padding:{top:"15px",left:"15px",bottom:"15px",right:"15px"}}},filter_value_content:{spacing:{margin:{right:"0px"},padding:{}}},filter_button_collapse:{tab:"normal",buttonTypography:{"font-size":"14px","text-transform":"uppercase"},buttonBackgroundnormalmode:{classic:{"background-color":"#0691b1"}},buttonColornormalmode:"#fff",buttonBordernormalmode:{"border-style":"none"},buttonBorderRadiusnormalmode:{top:"4px",left:"4px",bottom:"4px",right:"4px"},spacing:{margin:{right:"0px"},padding:{top:"10px",left:"20px",bottom:"10px",right:"20px"}}},filter_icon_collapse:{iconFontSize:"14px",iconPrimaryColor:"#fff",icon_position:-1,spacing:"4px"},dropdown_heading:{tab:"normal",buttonBorderhovermode:{"border-style":"none"},spacing:{margin:{right:"26px"}},buttonTypography:{"font-size":"16px"},buttonBordernormalmode:{"border-style":"none"}},option_color:{width:"24px",height:"24px","border-radius":{top:"50%",left:"50%",bottom:"50%",right:"50%"},spacing:{margin:{right:"6px",left:"6px"}},border:{"border-style":"solid","border-width":{top:"0.8px",left:"0.8px",bottom:"0.8px",right:"0.8px"},"border-color":"#dbd3d3"}},menu:{spacing:{padding:{bottom:"20px"}},spacing__mobile:{padding:{top:"40px"}},spacing__tablet:{padding:{top:"30px"}},width__tablet:"52%",width__mobile:"56%"},applied_filters_result_count:{textColor:"#000000",spacing:{margin:{right:"10px",bottom:"10px",top:"0px"},padding:{bottom:"6px",top:"6px",right:"15px",left:"15px"}},textTypography:{"font-size":"14px"}},price_filter_segment:{radio_size:"14px",tab:"normal",background:{classic:{}},backgroundActive:{classic:{"background-color":"#0691b1"}},backgroundHover:{classic:{"background-color":"#0691b1"}},transition:200,"border-radius":{right:"50%",top:"50%",left:"50%",bottom:"50%"},spacingLabel:{padding:{right:"5px",top:"5px",left:"5px",bottom:"5px"},margin:{}},radioBorder:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"}},radioBorderHover:{"border-style":"none"},spacing:{padding:{right:"8px",top:"8px",left:"8px",bottom:"8px"},margin:{}}}}}}},methods:{style(){var s,b,y,f;let e=[{group_alias:"text:spacing",options:{group_title:this.$t("title"),group_name:"filter_title",selector:" .ecom-collection__filters-heading"}},{group_alias:"box",options:{group_title:this.$t("option_value_content"),group_name:"filter_value_content",selector:" .ecom-collection__filters-group-list"},modify:{params:[{position:10,fields:{alias:"spacing",options:{label:this.$t("spacing")}}},{position:3,fields:[{alias:"width"},{alias:"height"},{name:"max_height",label:this.$t("max_height"),type:"number",options:{responsive:!0,units:{px:{min:0,max:1e3}}},css:{properties:{"max-height":""}}}]}]}},{group_alias:"text:spacing",options:{group_name:"filter_type_title",group_title:this.$t("option_name"),selector:" .ecom-collection__filters-group-summary--title"},modify:{params:{position:4,fields:{alias:"border"}}}},{group_alias:"text:spacing",options:{group_name:"filter_selected",group_title:this.$t("option_selected"),selector:" .ecom-collection__filters-group--selected"}},this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"&&this.data.settings.filter_type!=="push_down"?{group_alias:"box",options:{group_title:this.$t("items"),group_name:"box-item-conlapse",selector:" details.ecom-collection__filters-group-not__dropdown"},modify:{params:{position:30,fields:{alias:"spacing"}}}}:null,this.data.settings.number_button&&this.data.settings.filter_type==="dropdown"?{group_alias:[{title:"Label",type:"text:spacing",selector:"root .ecom-collection__filters-group-list-item .ecom-collection__filters-group-checkbox-label"},{title:"Button",type:"button"}],options:{group_name:"filter_value_label",group_title:this.$t("option_values"),selector:" .ecom-more-filter"}}:{group_alias:["text","box"],options:{group_title:this.$t("option_values"),group_name:"checkbox",selector:" .ecom-collection__filters-group-list-item"},modify:{params:[{position:0,fields:[{type:"paragraph",content:"** "+this.$t("label")+" **"}]},{position:5,fields:[{name:"items_gap",label:this.$t("items_gap"),type:"number",options:{responsive:!0,units:{px:{min:0,max:100}}},css:{selector:"root .ecom-collection__filters-group-list",properties:{gap:""}}},{alias:"spacing",options:{name:"items_gap_spacing"}}]},{position:20,fields:[{type:"line"},{type:"paragraph",content:"** "+this.$t("checkbox")+" **"},{alias:"width",options:{css:{selector:"root .ecom-collection__filters-group-checkbox--input"}}},{alias:"height",options:{css:{selector:"root .ecom-collection__filters-group-checkbox--input"}}},{alias:"spacing",options:{name:"checkbox_spacing",css:{selector:"root .ecom-collection__filters-group-checkbox--input"}}},{type:"line"},{type:"tab",name:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")},{name:"active",title:this.$t("active")}]},css:!1},{alias:"background",options:{css:{selector:"root .ecom-collection__filters-group-checkbox > input"},options:{visible:i=>i.tab==="normal"}}},{alias:"background",options:{name:"backgroundHover",css:{properties:{background:""},selector:"root .ecom-collection__filters-group-checkbox > input:hover"},options:{visible:i=>i.tab==="hover"}}},{alias:"background",options:{name:"backgroundActive",css:{properties:{background:""},important:!0,selector:"root .ecom-collection__filters-group-checkbox > input:checked"},options:{visible:i=>i.tab==="active"}}},{type:"popup",label:this.$t("border"),name:"popup",options:{type:"border",visible:i=>i.tab==="normal"},css:{selector:"root .ecom-collection__filters-group-checkbox > input"}},{type:"popup",label:this.$t("border"),name:"popupHover",options:{type:"border",visible:i=>i.tab==="hover"},css:{properties:{border:""},selector:"root .ecom-collection__filters-group-checkbox > input:hover"}},{name:"transition",type:"number",label:this.$t("transition_duration_span_class_lowercase_ms_span"),options:{min:0,max:5e3,visible:{keep_data:!0,condition:i=>i.tab==="hover"}},css:{selector:"root .ecom-collection__filters-group-checkbox--input",properties:{transition:"all %value%ms ease"}}},{type:"popup",label:this.$t("border"),name:"popupActive",options:{type:"border",visible:i=>i.tab==="active"},css:{properties:{border:""},important:!0,selector:"root .ecom-collection__filters-group-checkbox > input:checked"}},{type:"dimension",label:this.$t("border_radius"),name:"border-radius",options:{type:"radius",units:"default",visible:i=>i.tab==="normal"},css:{selector:"root .ecom-collection__filters-group-checkbox > input"}},{type:"dimension",label:this.$t("border_radius"),name:"border-radiusHover",options:{units:"default",type:"radius",visible:i=>i.tab==="hover"},css:{properties:{"border-radius":""},selector:"root .ecom-collection__filters-group-checkbox > input:hover"}},{type:"dimension",label:this.$t("border_radius"),name:"border-radiusActive",options:{units:"default",type:"radius",visible:i=>i.tab==="active"},css:{properties:{"border-radius":""},important:!0,selector:"root .ecom-collection__filters-group-checkbox > input:checked"}}]}]}},{group_alias:"button",options:{group_name:"filter_button_reset",group_title:this.$t("reset_button"),selector:" .ecom-collection__filters-group-reset-filter"}}].filter(i=>i);this.data.settings.show_applied_filters&&e.splice(1,0,{options:{group_name:"applied_filters",group_title:this.$t("applied_filters"),selector:" .ecom-collection__filters-group-list-item a"},group_alias:[{title:"General",type:"box",selector:"root .ecom-collection__filters-applied-block"},{title:"Title",type:"text",selector:"root .ecom-collection__filters-applied-heading"},{title:"Button",type:"button",selector:"root .ecom-collection-filters--active_values .ecom-collection__filters-group-list-item a"},{title:"Remove",type:"icon",selector:"root .ecom-colletion-filters--close-icon"}],modify:{params:[{position:1,fields:{alias:"align-items",options:{label:this.$t("alignment"),css:{selector:" root .ecom-collection__filters-applied-block"}}}},{position:6,fields:[{type:"line"},{alias:"spacing",options:{name:"spacingGeneral",css:{selector:" root .ecom-collection__filters-applied-block"}}}]},{position:14,fields:{alias:"spacing",options:{name:"spacingTitle",css:{selector:" root .ecom-collection__filters-applied-heading"}}}},{position:50,fields:{name:"icon_spacing",label:this.$t("icon_spacing"),type:"number",options:{responsive:!0,units:{px:{min:0,max:50}}},css:{selector:" .ecom-colletion-filters--close-icon",properties:{"margin-left":""}}}}]}}),this.data.settings.show_applied_filters&&this.data.settings.show_filter_result_count&&e.splice(1,0,{options:{group_name:"applied_filters_result_count",group_title:this.$t("applied_filters_result_count"),selector:" .ecom-collection__filters-group-result-count div"},group_alias:"text",modify:{remove:{index:0,length:1},params:[{position:10,fields:[{alias:"spacing"}]}]}}),(this.data.settings.filter_type=="collapse"||this.data.settings.collapse_mobile||this.data.settings.filter_type=="push_down")&&(e.splice(0,0,{group_alias:"button",options:{group_name:"filter_button_collapse",group_title:this.$t("filter_button"),selector:" .ecom-collection__filters-container > button"}}),this.data.settings.icon&&e.splice(1,0,{group_alias:"icon",options:{group_name:"filter_icon_collapse",group_title:this.$t("filter_button_icon"),selector:" .ecom-collection__filters-container .ecom-filter-collapse-icon"},modify:{params:[{position:4,fields:[{type:"choose",label:this.$t("icon_position"),name:"icon_position",options:{type:"align-x",values:[-1,1]},css:{properties:{order:""}}},{type:"number",label:this.$t("icon_spacing"),name:"spacing",options:{units:{px:{min:0,max:200}}},css:{selector:"root #button_menu_block",properties:{gap:""}}}]}]}})),this.data.settings.filter_type=="dropdown"?e.splice(2,0,{group_alias:"button",options:{group_name:"dropdown_heading",group_title:this.$t("dropdown_heading"),selector:" .ecom-collection__filters-group-dropdown"}}):e.splice(0,0,{group_alias:"box",options:{group_name:"box_filter",group_title:this.$t("filter_box"),selector:" .ecom-collection__filters-group"},modify:{params:{position:4,fields:{alias:"spacing",options:{label:this.$t("spacing")}}}}}),this.data.settings.show_count&&e.splice(4,0,{group_alias:"text:spacing",options:{group_title:this.$t("option_count"),group_name:"filter_count",selector:" .ecom-collection__filters--count"}});let d={group_title:this.$t("option_color"),group_name:"option_color",selector:" .ecom-collection__filters--color-wrapper",params:[{type:"number",name:"width",label:"Width",options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3}}},css:{properties:{width:""}}},{type:"number",name:"height",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3}}},css:{properties:{height:""}}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")},{name:"active",title:this.$t("active")}]},css:{isCss:!1}},{name:"boxShadow",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow",visible:i=>i.tab==="normal"}},{name:"boxShadowHoverMode",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow",visible:i=>i.tab==="hover"},css:{selector:"root .ecom-collection__filters--color-wrapper:hover"}},{name:"boxShadowActiveMode",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow",visible:i=>i.tab==="active"},css:{selector:"root .ecom-collection__filters-group-list-item.ecom-filter-hide-checkbox input:checked~.ecom-collection__filters-group-checkbox-label .ecom-collection__filters--color-wrapper"}},{name:"border",label:"Border",type:"popup",options:{oneline:!0,type:"border",visible:i=>i.tab==="normal"}},{name:"borderHoverMode",label:"Border",type:"popup",options:{oneline:!0,type:"border-offset",visible:i=>i.tab==="hover"},css:{selector:"root .ecom-collection__filters--color-wrapper:hover"}},{name:"borderActiveMode",label:"Border",type:"popup",options:{oneline:!0,type:"border-offset",visible:i=>i.tab==="active"},css:{selector:"root .ecom-collection__filters-group-list-item.ecom-filter-hide-checkbox input:checked~.ecom-collection__filters-group-checkbox-label .ecom-collection__filters--color-wrapper"}},{name:"border-radius",label:"Border radius",type:"dimension",options:{units:"default",type:"radius",responsive:!0,visible:i=>i.tab==="normal"},css:{selector:" , .ecom-collection__filters--color",properties:{"border-radius":"",overflow:"hidden"}}},{name:"borderRadiusHoverMode",label:"Border radius",type:"dimension",options:{type:"radius",units:"default",responsive:!0,visible:i=>i.tab==="hover"},css:{selector:" :hover, :hover .ecom-collection__filters--color",properties:{"border-radius":""}}},{name:"borderRadiusActiveMode",label:"Border radius",type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:i=>i.tab==="active"},css:{selector:" .ecom-collection__filters--color,root .ecom-collection__filters-group-list-item.ecom-filter-hide-checkbox input:checked~.ecom-collection__filters-group-checkbox-label .ecom-collection__filters--color-wrapper",properties:{"border-radius":""}}},{type:"number",label:'Transition Duration <span class="lowercase">(ms)</span>',name:"transition",options:{min:0,max:1500,visible:{keep_data:!0,condition:i=>i.tab==="hover"}},css:{selector:" :hover",properties:{transition:"all %value%ms ease"}}},{type:"line"},{alias:"spacing",options:{label:this.$t("spacing")}}]};return e.splice(5,0,d),this.$t("spacing"),this.data.settings.filter_type==="push_down"&&e.splice(1,0,{group_alias:"box",options:{group_name:"box_push_down",group_title:this.$t("push_down_box"),selector:" .ecom-container-filter-list-wrapper"},modify:{params:[{position:20,fields:{alias:"spacing",options:{label:this.$t("spacing")}}}]}}),this.data&&e.unshift({group_alias:"box",options:{group_title:this.$t("general"),group_name:"filter_general",selector:" .ecom-modal-content--mobile, .ecom-modal-content, .ecom-collection__filters-push_down"},modify:{params:[{position:10,fields:{alias:"spacing"}},{position:3,fields:{alias:"width",options:{css:{selector:"root .ecom-modal-content, .ecom-collection__filters-push_down"}}}}]}}),this.link_list&&(e.push({group_title:this.$t("menu"),group_name:"menu",selector:" .ecom-shopify_menu",params:[{alias:"width"},{alias:"spacing",options:{label:this.$t("spacing")}},{type:"line"},{type:"paragraph",content:"<strong>"+this.$t("menu_items")+"<strong>"},{alias:"spacing",options:{label:this.$t("spacing"),name:"menu_item",css:{selector:" .ecom-menu_item"}}}]}),e.push({group_alias:"items:text",options:{group_name:"menu_title",group_title:this.$t("menu_title"),selector:"root .ecom-menu_item"},modify:{params:[{position:9,fields:[{type:"line"},{alias:"spacing",options:{label:this.$t("spacing"),css:{selector:" .ecom-menu_title"}}}]}]}}),e.push({group_alias:"items:icon",options:{group_name:"accordion_icon",group_title:this.$t("menu_icon"),selector:" .ecom-menu_icon"},modify:{params:{position:35,fields:[{type:"line"},{alias:"spacing",options:{css:{selector:"root .ecom-menu_icon"}}}]}}})),(((s=this.data.settings)==null?void 0:s.price_filter_type)=="segment"&&((b=this.data.settings)==null?void 0:b.segment_steps)>0)|(((y=this.data.settings)==null?void 0:y.price_filter_type)=="custom_price"&&((f=this.data.settings)==null?void 0:f.price_for_segment)>0)?e.push({group_name:"price_filter_segment",group_title:this.$t("price_filter_segment"),selector:" .ecom-collection-filters--price-step input[type=radio]",params:[{type:"paragraph",content:"** "+this.$t("price_value")+" **"},{type:"popup",label:this.$t("typography"),name:"filters_price_typography",options:{global:{type:"typography"},oneline:!0,responsive:!0,type:"typography"},css:{selector:"root .ecom-collection__filters-group-radio-label"}},{label:this.$t("text_color"),name:"filters_price_color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{color:""},selector:"root .ecom-collection__filters-group-radio-label"}},{name:"filter_price_text_shadow",label:this.$t("text_shadow"),type:"popup",options:{oneline:!0,type:"text-shadow"},css:{selector:"root .ecom-collection__filters-group-radio-label"}},{type:"line"},{type:"paragraph",content:"** "+this.$t("radio")+" **"},{type:"number",name:"radio_size",label:this.$t("size"),options:{units:{px:{min:0,max:50}}},css:{selector:"root input.ecom-collection__filters-group-radio--input",properties:{width:"",height:""}}},{type:"tab",name:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")},{name:"active",title:this.$t("active")}]},css:!1},{alias:"background",options:{css:{selector:"root .ecom-collection__filters-group-radio--input"},options:{visible:i=>i.tab==="normal"}}},{alias:"background",options:{name:"backgroundHover",css:{properties:{background:""},selector:"root .ecom-collection__filters-group-radio--input:hover"},options:{visible:i=>i.tab==="hover"}}},{alias:"background",options:{name:"backgroundActive",css:{properties:{background:""},important:!0,selector:"root .ecom-collection__filters-group-radio--input:checked"},options:{visible:i=>i.tab==="active"}}},{type:"popup",label:this.$t("border"),name:"radioBorder",options:{type:"border",visible:i=>i.tab==="normal"},css:{selector:"root .ecom-collection__filters-group-radio--input"}},{type:"popup",label:this.$t("border"),name:"radioBorderHover",options:{type:"border",visible:i=>i.tab==="hover"},css:{properties:{border:""},selector:"root .ecom-collection__filters-group-radio--input:hover"}},{type:"popup",label:this.$t("border"),name:"radioBorderActive",options:{type:"border",visible:i=>i.tab==="active"},css:{properties:{border:""},important:!0,selector:"root .ecom-collection__filters-group-radio--input:checked"}},{type:"dimension",label:this.$t("border_radius"),name:"border-radius",options:{units:"default",type:"radius",visible:i=>i.tab==="normal"},css:{important:!0,selector:"root .ecom-collection__filters-group-radio--input"}},{type:"dimension",label:this.$t("border_radius"),name:"border-radiusHover",options:{units:"default",type:"radius",visible:i=>i.tab==="hover"},css:{important:!0,properties:{"border-radius":""},selector:"root .ecom-collection__filters-group-radio--input:hover"}},{type:"dimension",label:this.$t("border_radius"),name:"border-radiusActive",options:{units:"default",type:"radius",visible:i=>i.tab==="active"},css:{properties:{"border-radius":""},important:!0,selector:"root .ecom-collection__filters-group-radio--input:checked"}},{name:"transition",type:"number",label:this.$t("transition_duration_span_class_lowercase_ms_span"),options:{min:0,max:5e3,visible:{keep_data:!0,condition:i=>i.tab==="hover"}},css:{selector:"root .ecom-collection__filters-group-radio--input",properties:{transition:"all %value%ms ease"}}},{type:"line"},{alias:"spacing",options:{name:"radioSpacing",css:{selector:"root .ecom-collection__filters-group-radio--input"}}}]}):e.push({group_name:"price_filter_slider",group_title:this.$t("price_filter_slider"),selector:" .ecom-collection-filters--price-range input[type=range]",params:[{type:"paragraph",content:"** "+this.$t("price_value")+" **"},{type:"popup",label:this.$t("typography"),name:"filters_price_typography",options:{global:{type:"typography"},oneline:!0,responsive:!0,type:"typography"},css:{selector:"root .ecom-collection-filters--price"}},{label:this.$t("text_color"),name:"filters_price_color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{color:""},selector:"root .ecom-collection-filters--price"}},{name:"filter_price_text_shadow",label:this.$t("text_shadow"),type:"popup",options:{oneline:!0,type:"text-shadow"},css:{selector:"root .ecom-collection-filters--price"}},{type:"paragraph",content:"** "+this.$t("price_seperate")+" **"},{type:"popup",label:this.$t("typography"),name:"filter_price_seperate_typo",options:{global:{type:"typography"},oneline:!0,responsive:!0,type:"typography"},css:{selector:"root .ecom-collection-filters--seperate"}},{name:"filter_price_seperate_color",label:this.$t("text_color"),type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{color:""},selector:"root .ecom-collection-filters--seperate"}},{name:"filter_price_text_shadown",label:this.$t("text_shadow"),type:"popup",options:{oneline:!0,type:"text-shadow"},css:{selector:"root .ecom-collection-filters--seperate"}},{alias:"spacing",options:{name:"filter_price_seperate_spacing",css:{selector:"root .ecom-collection-filters--seperate"}}},{type:"paragraph",content:"** "+this.$t("slider")+" **"},{alias:"width",options:{css:{selector:"root  .ecom-collection-filters--price-range input[type=range],root .ecom-collection-filters--multi-range"}}},{type:"number",name:"height",label:this.$t("height"),options:{responsive:!0,reset:!0,units:{px:{min:1,max:20}}},css:{properties:{"--ecom-size-custom":""}}},{name:"colorSlide",label:this.$t("color_slider"),type:"color",options:{global:{type:"colors"}},css:{properties:{"--ecom-color-custom":""}}},{type:"popup",label:this.$t("border"),name:"popupActive",options:{type:"border"},css:{properties:{border:""},important:!0}},{type:"dimension",label:this.$t("border_radius"),name:"border-radius",options:{type:"radius",units:"default"},css:{properties:{"border-radius":""}}},{type:"line"},{type:"paragraph",content:"** "+this.$t("thumb")+" **"},{alias:"width",options:{name:"widththumb",options:{units:{px:{min:1,max:100}}},css:{properties:{"--width-thumb-custom":""}}}},{type:"number",name:"heightthumb",label:this.$t("height"),options:{responsive:!0,reset:!0,units:{px:{min:1,max:100}}},css:{properties:{"--height-thumb-custom":""}}},{name:"colorSlidenormal",label:this.$t("color_thumb"),type:"color",options:{global:{type:"colors"}},css:{properties:{"--bg-thumb-custom":""}}}]}),e}}},ue={class:"ecom-element ecom-collection ecom-collection__filters"},_e=["data-page"],fe={key:0,class:"ecom-collection__filters-container ecom-collection__filters-collapse"},he={id:"button_menu_block",class:"ecom-filter-btn-toggle",type:"button"},ge=["innerHTML"],be=["innerHTML"],ve={id:"ecom-modal-block",class:"ecom-filter-modal"},ye=["innerHTML"],xe=["data-filter-id","innerHTML"],we={key:1,class:"ecom-collection__filters-container ecom-collection__filters-block"},ke=["innerHTML"],$e=["innerHTML"],Le=["id"],Ce={key:0,class:"modal-header"},Se=["innerHTML"],Me=["data-filter-id","innerHTML"],ze={key:2,class:"ecom-collection__filters-container ecom-collection__filters-dropdown"},He=["innerHTML"],qe=["innerHTML"],Ee=["id"],Te={key:0,class:"modal-header"},Ae=["innerHTML"],Be=["data-filter-id","innerHTML"],Fe=["data-mobile"],Ie=["innerHTML"],Pe=["innerHTML"],Re=["id"],De={key:0,class:"modal-header"},Ve=["data-filter-id","innerHTML"];function je(e,d,s,b,y,f){var C,B,N,F,P,R,D,h,z,w,k,H,I,V,q,j,U,$,E;const i=me("Liquid");return L(),M("div",ue,[e.exporting&&f.page_type=="search"?(L(),se(i,{key:0,data:f.conditionSearchPage.start},null,8,["data"])):S("",!0),m("div",{class:"ecom-collection__filters-wrapper","data-page":f.page_type},[s.data.settings.filter_type=="collapse"?(L(),M("div",fe,[m("button",he,[(C=s.data.settings)!=null&&C.icon?(L(),M("span",{key:0,class:"ecom-filter-collapse-icon",innerHTML:(B=s.data.settings.icon)==null?void 0:B.value},null,8,ge)):S("",!0),m("span",{innerHTML:s.data.settings.title},null,8,be)]),m("div",ve,[m("div",{class:A(["ecom-modal-content ecom-scroll_bar",{"ecom-modal-right-side":f.isRightSide,"ecom-modal-left-side":s.data.settings.filter_type==="collapse"&&!f.isRightSide?!0:""}])},[d[0]||(d[0]=m("div",{class:"modal-header"},[m("span",{id:"ecom-modal-close",class:"ecom-filter-modal-close"},[m("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[m("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})])])],-1)),m("span",{class:"ecom-collection__filters-heading",innerHTML:e.lang(s.data.settings.title,"filter_title")},null,8,ye),m("form",{class:"ecom-collection__filters-form ecom-collection__filters-form-collapse ecom-click ecom-scroll_bar","data-filter-id":s.data.id,"data-stopdrag":"true",innerHTML:e.liquid("filters")},null,8,xe)],2)])])):S("",!0),s.data.settings.filter_type!=="collapse"&&s.data.settings.filter_type!=="dropdown"&&s.data.settings.filter_type!=="push_down"?(L(),M("div",we,[m("button",{id:"button_menu_block",class:A(["ecom-button-filter-collapse ecom-filter-btn-toggle",(N=s.data.settings)!=null&&N.collapse_mobile?"button_menu_block--mobile":""]),type:"button"},[(F=s.data.settings)!=null&&F.icon?(L(),M("span",{key:0,class:"ecom-filter-collapse-icon",innerHTML:s.data.settings.icon.value},null,8,ke)):S("",!0),m("span",{innerHTML:e.lang((P=s.data.settings)==null?void 0:P.title,"filter_title")},null,8,$e)],2),m("div",{id:(R=s.data.settings)!=null&&R.collapse_mobile?"ecom-modal-block":"",class:"ecom-modal-block--mobile ecom-filter-modal"},[m("div",{class:A(["ecom-modal-content--mobile ecom-scroll_bar",(h=(D=s.data)==null?void 0:D.settings)!=null&&h.collapse_mobile?"ecom-modal-content":""])},[s.data.settings.collapse_mobile?(L(),M("div",Ce,[m("span",{id:"ecom-modal-close",class:A(["ecom-collapse-close ecom-filter-modal-close",s.data.settings.collapse_mobile?"ecom-collapse-close--mobile":""])},d[1]||(d[1]=[m("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[m("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]),2)])):S("",!0),m("span",{class:"ecom-collection__filters-heading",innerHTML:e.lang(s.data.settings.title,"filter_title")},null,8,Se),m("form",{class:"ecom-collection__filters-form ecom-click","data-filter-id":s.data.id,"data-stopdrag":"true",innerHTML:e.liquid("filters")},null,8,Me)],2)],8,Le)])):S("",!0),s.data.settings.filter_type=="dropdown"?(L(),M("div",ze,[m("button",{id:"button_menu_block",class:A(["ecom-button-filter-collapse ecom-filter-btn-toggle",s.data.settings.collapse_mobile?"button_menu_block--mobile":""]),type:"button"},[(z=s.data.settings)!=null&&z.icon?(L(),M("span",{key:0,class:"ecom-filter-collapse-icon",innerHTML:(k=(w=s.data.settings)==null?void 0:w.icon)==null?void 0:k.value},null,8,He)):S("",!0),m("span",{innerHTML:e.lang((H=s.data.settings)==null?void 0:H.title,"filter_title")},null,8,qe)],2),m("div",{id:(I=s.data.settings)!=null&&I.collapse_mobile?"ecom-modal-block":"",class:"ecom-modal-block--mobile ecom-filter-modal"},[m("div",{class:A(["ecom-modal-content--mobile ecom-scroll_bar",s.data.settings.collapse_mobile?"ecom-modal-content":""])},[s.data.settings.collapse_mobile?(L(),M("div",Te,[m("span",{id:"ecom-modal-close",class:A(["ecom-collapse-close ecom-filter-modal-close",(V=s.data.settings)!=null&&V.collapse_mobile?"ecom-collapse-close--mobile":""])},d[2]||(d[2]=[m("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[m("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]),2)])):S("",!0),m("span",{class:"ecom-collection__filters-heading",innerHTML:e.lang(s.data.settings.title,"filter_title")},null,8,Ae),m("form",{method:"GET",class:"ecom-collection__filters-form ecom-click","data-filter-id":s.data.id,"data-stopdrag":"true",innerHTML:e.liquid("filters")},null,8,Be)],2)],8,Ee)])):S("",!0),((q=s.data.settings)==null?void 0:q.filter_type)=="push_down"?(L(),M("div",{key:3,class:"ecom-collection__filters-container ecom-collection__filters-push_down","data-mobile":(j=s.data.settings)!=null&&j.collapse_mobile?"mobile":""},[m("button",{id:"button_menu_block",type:"button",class:A([s.data.settings.collapse_mobile?"button_menu_block--mobile":"","ecom-flex ecom-filter-btn-toggle"])},[(U=s.data.settings)!=null&&U.icon?(L(),M("span",{key:0,class:"ecom-filter-collapse-icon",innerHTML:($=s.data.settings.icon)==null?void 0:$.value},null,8,Ie)):S("",!0),m("span",{innerHTML:s.data.settings.title},null,8,Pe)],2),m("div",{id:(E=s.data.settings)!=null&&E.collapse_mobile?"ecom-modal-block":"",class:"ecom-modal-block--mobile ecom-filter-modal"},[m("div",{class:A(["ecom-modal-content--mobile ecom-scroll_bar",s.data.settings.collapse_mobile?"ecom-modal-content":""])},[s.data.settings.collapse_mobile?(L(),M("div",De,[m("span",{id:"ecom-modal-close",class:A(["ecom-collapse-close ecom-filter-modal-close",s.data.settings.collapse_mobile?"ecom-collapse-close--mobile":""])},d[3]||(d[3]=[m("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[m("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]),2)])):S("",!0),m("form",{class:"ecom-collection__filters-form ecom-collection__filters-form-collapse ecom-click ecom-scroll_bar","data-filter-id":s.data.id,"data-stopdrag":"true",innerHTML:e.liquid("filters")},null,8,Ve)],2)],8,Re)],8,Fe)):S("",!0)],8,_e),e.exporting&&f.page_type=="search"?(L(),se(i,{key:1,data:f.conditionSearchPage.end},null,8,["data"])):S("",!0)])}const Je=ae(re,[["render",je]]);re.__docgenInfo={exportName:"default",displayName:"CollectionFilter",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Collection/Filter.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{Je as default};
//# sourceMappingURL=Filter.ccec9f1d.js.map
