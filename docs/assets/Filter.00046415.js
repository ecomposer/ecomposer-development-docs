import{_ as U,L as G,J as K,E as W}from"./preview.fd4b835f.js";import{o as f,a as h,x as r,y as g,u as z}from"./vue.esm-bundler.2eae420a.js";import"./chunk-2GDW2BFM.4967875d.js";import"./index.e850844b.js";import"./iframe.b0e30ece.js";import"../sb-preview/runtime.js";const Y={name:"CollectionFilter",presets:!0,docs:"https://help.ecomposer.io/docs/elements/collection-elements/filter/",mixins:[G,K,W],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["filter_type","show_all_items_menu","collapse_mobile"]}},computed:{liquids(){var e,s,l,V,N,b,I,_,k,v,y,H,S,q,L,E,x,C,w,F,T,A,B,P,$,D,t,o,i,a,n,p,u,m,c,d,M,j,R;return{linklists:{code:`
                        <${((e=this.data.settings)==null?void 0:e.use_accordion)&&this.data.settings.filter_type!=="dropdown"&&((s=this.data.settings)==null?void 0:s.filter_type)!=="push_down"?"details":"div"}
                                    ${(l=this.data.settings)!=null&&l.accordion_open?" open ":""}
                                    class="${this.data.settings&&this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"&&((V=this.data.settings)==null?void 0:V.filter_type)!=="push_down"?" ecom-collection__filters-group-not__dropdown":" ecom-collection__filters-group-dropdown"} ecom-collection__filters-group ecom-collection__filters-group-lists" data-attrs-max="${this.data.settings&&this.data.settings.number_max?this.data.settings.number_max:5}">
                            <summary class="ecom-collection__filters-group-summary">
                                <div class="ecom-collection__filters-group-header">
                                    <span class="ecom-collection__filters-group-summary--title">${(b=(N=this.data.settings)==null?void 0:N.menu_label)!=null?b:""}</span>
                                    ${this.show_dropdown_arrow?`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ecom-icon-filter-close" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ecom-icon-filter-open" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>`:""}
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
                                                    <div class="ecom-menu_item ecom-items">
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
                                                        <ul class="ecom-shopify__menu-sub-menu" data-menu-size="{{child_link.size}}" data-menu-level="{{child_link.level}}">
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
                        </${((I=this.data.settings)==null?void 0:I.use_accordion)&&this.data.settings.filter_type!=="dropdown"&&((_=this.data.settings)==null?void 0:_.filter_type)!=="push_down"?"details":"div"}>
                        `,preview:"The sample text for menu"},filters:{code:`
                        <!--EComposer-custom-liquid-filters-${this.data.id.split("-").pop()}-->
                        {% if template contains '.' %}
                            <input type="hidden" name="view" value="{{template | split: '.' | last }}" />
                        {% endif %}
                        {%- assign sort_by = collection.sort_by | default: collection.default_sort_by -%}
                        {% assign color_option_name = '${this.data.settings&&this.data.settings.option_name?this.data.settings.option_name:""}' | handleize %}
                        {% liquid
                            assign colors = shop.metafields.ecomposer.colors
                        %}
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
                        ${(v=(k=this.data)==null?void 0:k.settings)!=null&&v.show_applied_filters?`
                                {% if EComBuilderMode %}
                                    <div class="ecom-collection__filters-applied-block">
                                        <h3 class="ecom-collection__filters-applied-heading">
                                            ${this.lang(this.data.settings.applied_title,"applied_title")}
                                        </h3>
                                        <div class="ecom-collection-filters--active_values">
                                            <ul class="ecom-collection-filters--active_values-list" role="list">
                                                {% for filter in collection.filters %}
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
                                {% endif %}

                                {%- for filter in collection.filters -%}
                                    {%- if  filter.active_values.size > 0 or filter.min_value.value != nil or filter.max_value.value != nil -%}
                                        {%- assign has_filter = true -%}
                                        {%- break -%}
                                    {%- endif -%}
                                {%- endfor -%}
                                {%- if has_filter -%}
                                <div class="ecom-collection__filters-applied-block">
                                    <h3 class="ecom-collection__filters-applied-heading">
                                        ${this.lang(this.data.settings.applied_title,"applied_title")}
                                    </h3>
                                    <div class="ecom-collection-filters--active_values">
                                        <ul class="ecom-collection-filters--active_values-list" role="list">
                                            {%- for filter in collection.filters -%}
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
                                                <a href="{{collection.url}}" title="${this.lang((y=this.data.settings)!=null&&y.clear_text?this.data.settings.clear_text:"Clear all","clear_all_title")}" class="ecom-collection__filters-group-list-item-clear">${this.lang((H=this.data.settings)!=null&&H.clear_text?this.data.settings.clear_text:"Clear all","clear_all_title")}{{close_icon}}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {%- endif -%}
                        `:""}
                        <div class="ecom-container-filter-list--wrapper ${((S=this.data.settings)==null?void 0:S.filter_type)=="push_down"?"ecom-show--filter":""}" ${((q=this.data.settings)==null?void 0:q.filter_type)=="push_down"?"data-type='push_down'":""}>
                            <div class="ecom-container-filter-list-wrapper">
                                ${((L=this.data.settings)==null?void 0:L.filter_type)==="push_down"?`<h3
                                            class="ecom-collection__filters-heading"
                                        >
                                        ${this.lang((E=this.data.settings)==null?void 0:E.title,"filter_title")}
                                        </h3>`:""}
                                <div class="ecom-container-filter-list" ${((x=this.data.settings)==null?void 0:x.filter_type)=="push_down"?"data-type='push_down'":""}>
                                {%- for filter in collection.filters -%}
                                    {%- assign total_active_values = total_active_values | plus: filter.active_values.size -%}
                                    {% case filter.type %}
                                    {% when 'list' %}
                                        {% assign size = filter.values | size %}
                                        {% assign settings_size = ${(C=this.data.settings)==null?void 0:C.number_max} %}
                                        {%- if size > 0 -%}
                                        <${((w=this.data.settings)==null?void 0:w.use_accordion)&&this.data.settings.filter_type!=="dropdown"&&((F=this.data.settings)==null?void 0:F.filter_type)!=="push_down"?"details":"div"}
                                        data-name="{{filter.param_name}}"
                                        ${(T=this.data.settings)!=null&&T.accordion_open?" open ":""}
                                        class="ecom-js-filter${this.data.settings&&this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"&&((A=this.data.settings)==null?void 0:A.filter_type)!=="push_down"?" ecom-collection__filters-group-not__dropdown":" ecom-collection__filters-group-dropdown"} ecom-collection__filters-group ecom-collection__filters-group-lists ecom-d-none" data-index="{{ forloop.index }}" data-attrs-max="${this.data.settings&&this.data.settings.number_max?this.data.settings.number_max:5}">

                                            <summary class="ecom-collection__filters-group-summary">
                                                <div class="ecom-collection__filters-group-header">
                                                    <span class="ecom-collection__filters-group-summary--title">{{ filter.label | escape }}</span>
                                                    ${this.show_dropdown_arrow?`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ecom-icon-filter-close" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ecom-icon-filter-open" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                        </svg>`:""}
                                                </div>
                                            </summary>
                                            <div class="ecom-collection__filters-group--display ${((B=this.data.settings)==null?void 0:B.filter_type)=="push_down"?"ecom-scroll_bar":""}">
                                                ${(P=this.data.settings)!=null&&P.show_selected?`
                                                    <div class="ecom-collection__filters-group--header">
                                                        <span class="ecom-collection__filters-group--selected no-js-hidden">
                                                            {% assign count = filter.active_values.size %}
                                                            {% if count == 1%}
                                                                ${this.lang(($=this.data.settings)==null?void 0:$.filter_selected_text,"filter_selected_text",{count:"count"})}
                                                            {% else %}
                                                                ${this.lang((D=this.data.settings)==null?void 0:D.filters_selected_text,"filters_selected_text",{count:"count"})}
                                                            {% endif %}
                                                        </span>
                                                        <a href="{{ filter.url_to_remove }}" class="ecom-collection__filters-group-reset-filter" >${this.lang((t=this.data.settings)==null?void 0:t.reset_filter,"reset_filter")}</a>
                                                    </div>`:""}

                                                {% assign check_is_filter_color = false %}
                                                ${this.data.settings&&this.data.settings.show_color&&this.data.settings.option_name?`
                                                        {% assign current_option_name = filter.param_name  | split: '.' | last %}
                                                        {% if  color_option_name  ==  current_option_name %}
                                                            {% assign check_is_filter_color = true %}
                                                        {% endif %}
                                                    `:""}
                                                <ul
                                                    class="ecom-collection__filters-group-list  ecom-scroll_bar{% if check_is_filter_color %} ecom-collection__filters-enable-colors{% endif %}" data-param-name="{{filter.param_name}}" role="list" data-index="{{ forloop.index }}"
                                                >
                                                {%- for value in filter.values -%}
                                                    {%- if ${this.hide_zero} == false or value.count > 0 and ${this.hide_zero} == true -%}
                                                    <li class="ecom-collection__filters-group-list-item ${this.dropdown_max?"ecom-collection__filters-group-list-item-max":""}${(o=this.data.settings)!=null&&o.hide_color_checkbox?" ecom-filter-hide-checkbox":""}" >
                                                        <label for="ecom-filter-{{ filter.label | escape  | strip }}-{{ forloop.index }}" class="ecom-collection__filters-group-checkbox{% if value.count == 0 and value.active == false %} ecom-collection__filters-group-checkbox--disabled{% endif %}">

                                                            <input type="checkbox"
                                                            class="ecom-collection__filters-group-checkbox--input ${this.data.settings.hide_checkbox?"ecom-filter--hide-checkbox":""}"
                                                            name="{{ value.param_name }}"
                                                            value="{{ value.value }}"
                                                            id="ecom-filter-{{ filter.label | escape | strip }}-{{ forloop.index }}"
                                                            {% if value.active %}checked{% endif %}
                                                            {% if value.count == 0 and value.active == false %}disabled{% endif %}
                                                            >

                                                            <span class="ecom-collection__filters-group-checkbox-label ecom-flex ecom-al_center${(i=this.data.settings)!=null&&i.color_show_count?" ecom-filter-hide-color-count":""}">
                                                                {% if check_is_filter_color %}
                                                                    {% assign value_key = value.value | downcase %}
                                                                    {% if colors and colors.value[value_key]  != blank %}
                                                                        <span class="ecom-collection__filters--color" style="{{colors.value[value_key]}}" data-ecom-tooltip="{{value.label}}"></span>
                                                                    {% else %}
                                                                        <span class="ecom-collection__filters--color ecom-collection__filters--no-color" data-ecom-tooltip="{{value.label}}"></span>
                                                                    {% endif %}
                                                                {% endif%}
                                                                {{ value.label | escape }}
                                                                ${(a=this.data.settings)!=null&&a.show_count?'<span class="ecom-collection__filters--count">({{ value.count }})</span>':""}
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
                                            </${this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"&&((n=this.data.settings)==null?void 0:n.filter_type)!=="push_down"?"details":"div"}>
                                        {%- endif -%}
                                    {% when 'price_range' %}
                                        {% liquid
                                            assign currencies_using_comma_decimals = 'ANG,ARS,BRL,BYN,BYR,CLF,CLP,COP,CRC,CZK,DKK,EUR,HRK,HUF,IDR,ISK,MZN,NOK,PLN,RON,RUB,SEK,TRY,UYU,VES,VND' | split: ','
                                            assign uses_comma_decimals = false
                                            if currencies_using_comma_decimals contains cart.currency.iso_code
                                                assign uses_comma_decimals = true
                                            endif
                                            %}

                                            <${this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"&&((p=this.data.settings)==null?void 0:p.filter_type)!=="push_down"?"details":"div"}
                                            ${(u=this.data.settings)!=null&&u.accordion_open?" open ":""}
                                            class="ecom-collection__filters-group ${this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"&&((m=this.data.settings)==null?void 0:m.filter_type)!=="push_down"?"ecom-collection__filters-group-not__dropdown":"ecom-collection__filters-group-dropdown"} ecom-collection__filters-group-price-range" data-index="{{ forloop.index }}">
                                                <summary class="ecom-collection__filters-group-summary">
                                                    <div class="ecom-collection__filters-group-header">
                                                        <span class="ecom-collection__filters-group-summary--title">{{ filter.label | escape }}</span>
                                                        <span class="ecom-collection__filters-group-count-bubble{%- if filter.min_value.value or filter.max_value.value -%}{{ filter.active_values.size }} count-bubble--dot{% endif %}"></span>
                                                        ${this.show_dropdown_arrow?`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ecom-icon-filter-close" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ecom-icon-filter-open" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                            </svg>`:""}
                                                    </div>
                                                </summary>
                                                <div class="ecom-collection__filters-group--display ${((c=this.data.settings)==null?void 0:c.filter_type)=="push_down"?"ecom-scroll_bar":""}">
                                                    {%- comment -%}
                                                    ${(d=this.data.settings)!=null&&d.show_selected?`<div class="ecom-collection__filters-group--header">
                                                            {%- assign max_price_amount = filter.range_max | money -%}
                                                            <span class="ecom-collection__filters-group--selected">${this.lang((M=this.data.settings)==null?void 0:M.max_price_text,"max_price_text")} {{max_price_amount}}</span>
                                                            <a href="{{ filter.url_to_remove }}" class="ecom-collection__filters-group-reset-filter" >${this.lang((j=this.data.settings)==null?void 0:j.reset_filter,"reset_filter")}</a>
                                                        </div>`:""}
                                                    {%- endcomment -%}
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
                                                            <span id="ecom-collection-filters--price-from" class="ecom-collection-filters--price">{{ min_price  | money }}</span>
                                                            <span class="ecom-collection-filters--seperate">-</span>
                                                            <span id="ecom-collection-filters--price-to" class="ecom-collection-filters--price">{{max_price | money }}</span>
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
                                                            <input id="ecom-collection-filters--input-min" type="range" min="0" max="100" value="{{per_min}}" step="0.01" />
                                                            <input id="ecom-collection-filters--input-max" type="range" min="0" max="100" value="{{per_max}}" step="0.01" />
                                                        </div>
                                                    </div>
                                                </div>


                                            </${this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"&&((R=this.data.settings)==null?void 0:R.filter_type)!=="push_down"?"details":"div"}>
                                        {% endcase %}
                                    {%- endfor -%}
                                </div>
                            </div>
                        </div>
                        <!--/EComposer-custom-liquid-filters-${this.data.id.split("-").pop()}-->
                    `,preview:""}}},settings(){return[{group_title:"General",params:[{type:"text",name:"title",label:"Filter title",value:"Filter by",options:{warnings:{content:"Notice: the filter only works in the collection page and after template's published"}}},{type:"popup",name:"filter_type",label:"Filter type",options:{default:!1,type:"dropdown",values:{block:"Block",collapse:"Collapse",dropdown:"Dropdown",push_down:"Push down"}},css:!1},{type:"number",name:"number_item_in_row",label:"Items per row",options:{responsive:!0,max:6,min:1,step:1,visible:function(e){return e.filter_type==="push_down"}},css:{selector:' .ecom-container-filter-list[data-type="push_down"]',properties:{"grid-template-columns":"repeat(%value%, 1fr)"}}},{type:"toggle",label:"Show applied filters",name:"show_applied_filters",options:{values:{on:{label:"Show",value:!0},off:{label:"Hide",value:!1}}},css:!1},{type:"text",name:"applied_title",label:"Applied Filter title",placeholder:"Applied filters",options:{visible:function(e){return e.show_applied_filters}}},{type:"line"},{name:"icon",type:"picker",label:"Open filter button Icon",options:{oneline:!0,type:"icon",reset:!1,output:["value","cate"],visible:{keep_data:!0,condition:e=>e.filter_type=="collapse"||e.collapse_mobile}}},{type:"toggle",label:"Enable Ajax filter",name:"enable_ajax",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0}},{type:"toggle",label:"Display as accordion",name:"use_accordion",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:{keep_data:!1,condition:e=>e.filter_type!=="dropdown"&&e.filter_type!=="push_down"},oneline:!0}},{type:"toggle",label:"Accordion default open",name:"accordion_open",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:function(e){return e.filter_type!=="dropdown"&&e.filter_type!=="push_down"&&e.use_accordion},oneline:!0}},{type:"toggle",label:"Show selected/reset",name:"show_selected",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0}},{type:"toggle",label:"Hide checkbox",name:"hide_checkbox",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0}},{type:"toggle",label:"Show number count",name:"show_count",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:function(e){return e.filter_type!=="collapse"&&e.filter_type!=="dropdown"},oneline:!0}},{name:"dropdown_show",label:"Show option values",type:"popup",options:{values:{full:"Full",short:"Short"},type:"dropdown",visible:function(e){return e.filter_type=="dropdown"}},css:!1},{name:"number_max",label:"Maximum values to show",type:"number",options:{min:0,max:20,visible:function(e){return e.filter_type=="dropdown"&&e.dropdown_show=="short"}}},{name:"number_button",label:'Show button "more values"',type:"toggle",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0,visible:function(e){return e.filter_type=="dropdown"&&e.dropdown_show=="short"}},css:!1},{name:"button_text",label:"More values label",type:"text",options:{visible:function(e){return e.filter_type=="dropdown"&&e.dropdown_show=="short"&&e.number_button==!0}}},{type:"toggle",label:"Collapse on mobile and tablet",name:"collapse_mobile",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:function(e){return e.filter_type!=="collapse"},oneline:!0}},{type:"toggle",label:"Hide zero count",name:"hide_zero",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0}},{type:"popup",label:"Content Aligntment",name:"items_alignment",value:"",options:{preview:"title",type:"dropdown",default:!1,icon_type:"alignment",values:{"inline-flex":"Horizontal",block:"Vertical"}},css:{selector:" .ecom-collection__filters-group-list ",properties:{display:""}}},{type:"line"},{type:"paragraph",content:`To setup your filtering you can going to **Online Store** > **Navigation** > **Collection and search filters**.

                            

                            **This element only work on collection page**

                            [Learn more](https://help.shopify.com/en/manual/online-store/themes/os20/customize/filters)

                            `}]},{group_title:"Color filter",params:[{type:"toggle",label:"Show options as color",name:"show_color",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},css:!1},{type:"text",label:"",name:"option_name",placeholder:"Color",description:"Set your color [Here](#extensions)",options:{visible:function(e){return e.show_color}}},{type:"toggle",label:"Hide checkbox",name:"hide_color_checkbox",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0}},{type:"toggle",label:"Hide label",name:"hide_color_label",options:{values:{on:{label:"Yes",value:"0px"},off:{label:"No",value:"inherit"}},oneline:!0},css:{selector:" .ecom-collection__filters-enable-colors .ecom-collection__filters-group-checkbox-label",properties:{"font-size":""}}},{type:"toggle",label:"Hide number count",name:"color_show_count",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:function(e){return e.filter_type!=="collapse"&&e.filter_type!=="dropdown"},oneline:!0}},{type:"popup",label:"Content Aligntment",name:"items_color_alignment",value:"",options:{type:"dropdown",default:!1,icon_type:"alignment",values:{"inline-flex":"Horizontal",block:"Vertical"}},css:{selector:" .ecom-collection__filters-group-list.ecom-collection__filters-enable-colors",properties:{display:""}}}]},{group_title:"Change text",params:[{name:"filter_selected_text",label:"Filter selected",type:"text",options:{placeholder:"{{ count }} selected"}},{name:"filters_selected_text",label:"Filters selected",type:"text",options:{placeholder:"{{ count }} selected"}},{type:"text",name:"clear_text",label:"Clear filter",value:"Clear all"},{name:"reset_filter",label:"Filter reset",type:"text",options:{placeholder:"Reset"}},{type:"text",name:"max_price_text",label:"Max price",value:"Max price"}]},{group_title:"Menu",params:[{type:"toggle",label:"Show menu",name:"show_sub_menu",options:{values:{on:{label:"Show",value:!0},off:{label:"Hide",value:!1}}},css:!1},{type:"text",name:"menu_label",label:"Menu label",options:{visible:e=>e.show_sub_menu===!0}},{type:"toggle",label:"Show all item(by default)",name:"show_all_items_menu",options:{visible:e=>e.show_sub_menu===!0&&e.filter_type!=="dropdown"&&e.filter_type!=="push_down",values:{on:{label:"Show",value:!0},off:{label:"Hide",value:!1}}},css:!1},{type:"picker",name:"link_list",label:"Menu",options:{visible:e=>e.show_sub_menu===!0,type:"menu",layout:"list",multiple:!1}},{name:"tab",type:"tab",value:"normal",options:{visible:e=>e.show_sub_menu===!0,tabs:[{name:"normal",title:"Normal"},{name:"active",title:"Active"}]},css:{isCss:!1}},{type:"picker",label:"Icon",name:"icon_menu",options:{visible:e=>e.tab==="normal"&&e.show_sub_menu===!0,reset:!1,type:"icon",multiple:!1},css:{isCss:!1}},{type:"picker",label:"Icon",name:"icon_menu_active",options:{visible:e=>e.tab==="active"&&e.show_sub_menu===!0,reset:!1,type:"icon",multiple:!1},css:{isCss:!1}}]}]},link_list(){return this.data&&this.data.settings&&this.data.settings.link_list&&this.data.settings.link_list.value?this.data.settings.link_list.value:null},icon_menu(){var e,s;return(s=(e=this.data)==null?void 0:e.settings)==null?void 0:s.icon_menu},icon_menu_active(){var e,s;return(s=(e=this.data)==null?void 0:e.settings)==null?void 0:s.icon_menu_active},show_dropdown_arrow(){var e;return this.data.settings.filter_type==="dropdown"||((e=this.data.settings)==null?void 0:e.use_accordion)},show_count(){return!!(this.data.settings&&this.data.settings.show_count)},hide_zero(){return!!(this.data.settings&&this.data.settings.hide_zero)},dropdown_max(){return this.data.settings.filter_type==="dropdown"&&this.data.settings.number_max>=0},show_sub_menu(){var e,s;return(s=(e=this.data)==null?void 0:e.settings)==null?void 0:s.show_sub_menu},show_all_items_menu(){var e,s;return(s=(e=this.data)==null?void 0:e.settings)==null?void 0:s.show_all_items_menu},javascript(){return function(){let e=this.$el,s=this.isLive;s||setTimeout(function(){e.closest(".ecom-block").style.zIndex=2,e.style.zIndex=7},500);const l=this;e.querySelectorAll(".ecom-collection__filters-group-list").forEach(t=>{t.childNodes.length&&t.closest(".ecom-collection__filters-group").classList.remove("ecom-d-none")});function N(){e.querySelector(".ecom-collection__filters-dropdown").classList.add("ecom-filter-dropdown-desktop");let t=e.querySelectorAll(".ecom-filter-dropdown-desktop .ecom-collection__filters-group .ecom-collection__filters-group-summary");!t||t.forEach(o=>{let i=o.closest(".ecom-collection__filters-group"),a=i.dataset.attrsMax,n=i.querySelectorAll(".ecom-collection__filters-group-list-item-max"),p=i.querySelector(".ecom-more-filter");p&&p.addEventListener("click",()=>{b(n),p.style.display="none"}),n.length>0&&a&&(a=parseInt(a),b(n,a)),o.closest(".ecom-collection__filters-group").classList.contains("active")&&o.closest(".ecom-collection__filters-group").classList.remove("active"),o.addEventListener("click",()=>{let u=o.closest(".ecom-collection__filters-group");u.classList.contains("active")?u.classList.remove("active"):(t.forEach(m=>m.closest(".ecom-collection__filters-group").classList.contains("active")&&m.closest(".ecom-collection__filters-group").classList.remove("active")),u.classList.add("active"))})})}function b(t,o){t.forEach((i,a)=>{o===void 0||a<o?i.style.display="block":i.style.display="none"})}const I=this.settings.collapse_mobile;this.settings.filter_type=="dropdown"&&N();const _=e.querySelector("#ecom-modal-block"),k=e.querySelector("#button_menu_block"),v=_?_.closest("div.ecom-core.core__block"):"",y=_?_.closest("div.ecom-column.ecom-core"):"",H=e.querySelector("#ecom-modal-close"),S=window.matchMedia("only screen and (max-width: 911px)");S.addEventListener("change",E),I&&S.matches&&E(S);function q(){_.style.display="block",v&&(v.style.zIndex="99"),y&&(y.style.zIndex="99"),document.querySelector("body").classList.add("ecom-filter-opened")}function L(){_.style.display="none",v&&(v.style.zIndex="1"),y&&(y.style.zIndex="1"),document.querySelector("body").classList.remove("ecom-filter-opened")}function E(t){let o=e.querySelectorAll(".ecom-collection__filters-group--display");t.matches?l.settings.collapse_mobile&&_&&k&&H&&(_&&(_.style.display="none"),l.settings.filter_type=="dropdown"&&o.forEach(i=>{i.style.position="relative"}),k.addEventListener("click",()=>{q()}),H.addEventListener("click",()=>{L()}),window.addEventListener("click",()=>{event.target==_&&L()}),v&&(v.style.zIndex="99"),y&&(y.style.zIndex="99")):(_&&(_.style.display="block"),v&&(v.style.zIndex="1"),y&&(y.style.zIndex="1"),l.settings.filter_type=="dropdown"&&o&&o.forEach(i=>{i.style.position="absolute"}))}(this.settings.filter_type=="collapse"||this.settings.filter_type=="push_down"&&this.settings.collapse_mobile)&&(k.addEventListener("click",()=>{q()}),H.addEventListener("click",()=>{L()}),window.addEventListener("click",()=>{event.target==_&&L()}));let x=0,C=0,w=0,F=15;function T(t){x===0&&(t.style.maxHeight="100%"),x=t.offsetHeight,w=x,t.classList.remove("ecom-show--filter");var o=x/10;t.style.overflow="hidden",C=setInterval(function(){w-=o,w>0?t.style.maxHeight=w+"px":(t.style.maxHeight=0,clearInterval(C))},F)}function A(t){var o=x/10;t.classList.add("ecom-show--filter"),C=setInterval(function(){w+=o,w<x?t.style.maxHeight=w+"px":(t.style.maxHeight=x+"px",clearInterval(C))},F)}function B(){const t=e.querySelector('.ecom-container-filter-list--wrapper[data-type="push_down"]');t&&(T(t),t.style.display="none",t.style.opacity="1",k.addEventListener("click",()=>{t.classList.contains("ecom-show--filter")?T(t):(t.style.display="grid",A(t))}))}B();function P(){let t=1,o=15e3;if(!e.querySelector(".ecom-collection__filters-group-price"))return!0;let i=e.querySelector(".ecom-collection__filters-price-range-max"),a=e.querySelector(".ecom-collection__filters-price-range-min"),n=e.querySelector("#ecom-collection-filters--input-min"),p=e.querySelector("#ecom-collection-filters--input-max");t=parseFloat(a.getAttribute("min")),o=parseFloat(i.getAttribute("max"));function u(c){return window.EComposer.formatMoney(c)}function m(){let c=(o-t)*n.value/100+t,d=(o-t)*p.value/100+t;a.value=Math.floor(c),i.value=Math.floor(d),e.querySelector("#ecom-collection-filters--price-from").innerHTML=`${u(Math.floor(c*100))}`,e.querySelector("#ecom-collection-filters--price-to").innerHTML=`${u(Math.floor(d*100))}`}p.addEventListener("input",()=>{let c=parseInt(n.value),d=parseInt(p.value);d<c+10&&(n.value=d-10,c===parseInt(n.min)&&(p.value=10)),m()}),n.addEventListener("input",()=>{let c=parseInt(n.value),d=parseInt(p.value);c>d-10&&(p.value=c+10,d===parseInt(p.max)&&(n.value=parseInt(p.max)-10)),m()})}function $(){var t=e.querySelectorAll(".ecom-shopify__menu-item--has-children > .ecom-menu_item, .ecom-shopify__menu-child-link-item--has-children > .ecom-menu_item");if(!!t){var o,i="false",a=e.querySelector(".ecom-shopify_menu");if(a&&a.dataset.showAll)var i=a.dataset.showAll;for(o=0;o<t.length;o++){let n=function(p){let u=p.nextElementSibling,m=null;if(p.classList.contains("ecom-item-active")){if(p.classList.remove("ecom-item-active"),u){u.style.maxHeight=null;var c=u.querySelectorAll(".ecom-menu_item");c&&c.forEach(d=>{var M=d.nextElementSibling;M&&(M.style.maxHeight=null),d.classList.remove("ecom-item-active")}),m=p.closest(".ecom-shopify__menu-sub-menu"),m&&(m.style.maxHeight=parseInt(m.style.maxHeight)-u.scrollHeight+"px")}}else p.classList.add("ecom-item-active"),u&&(m=p.closest(".ecom-shopify__menu-sub-menu"),m&&(m.style.maxHeight=parseInt(m.style.maxHeight)+u.scrollHeight+"px"),u.style.maxHeight=u.scrollHeight+"px")};i&&i=="true"&&n(t[o]),t[o].addEventListener("click",function(p){p.preventDefault(),n(this)})}}}$();const D=function(){return{searchParamsInitial:window.location.search.slice(1),searchParamsPrev:window.location.search.slice(1),init(){const t=e.querySelectorAll(".ecom-collection__filters-form");if(t.length==0)return;const o=t[0].closest(".ecom-sections[data-section-id]"),i=t[0].closest(".ecom-row.ecom-section");!o||!o.dataset.sectionId||(this.facetForms=t,this.wrapper=o,this.sectionId=o.dataset.sectionId,this.wrapper_product=i,this.debouncedOnSubmit=this.debounce(a=>{this.onSubmitHandler(a)},100),this.facetForms.forEach(a=>a.addEventListener("input",this.debouncedOnSubmit.bind(this))),this.handleRemoveFilter(),this.setListeners())},setListeners(){const t=o=>{const i=o.state?o.state.searchParams:this.searchParamsInitial;if(i===this.searchParamsPrev)return;const a=`${window.location.pathname}?section_id=${this.sectionId}&${i}`;this.handleLoadProduct(a,i,o,!1)};window.addEventListener("popstate",t)},debounce(t,o){let i;return(...a)=>{clearTimeout(i),i=setTimeout(()=>t.apply(this,a),o)}},onSubmitHandler(t){t.preventDefault();const o=[];this.facetForms.forEach(p=>{o.push(this.createSearchParams(p))});const i=o.join("&"),a=`${window.location.pathname}?section_id=${this.sectionId}&${i}`;this.handleLoadProduct(a,i,t);let n=e.querySelector('.ecom-container-filter-list--wrapper[data-type="push_down"]');n&&T(n)},createSearchParams(t){const o=new FormData(t);return new URLSearchParams(o).toString()},handleLoadProduct(t,o,i,a=!0){const n=this;this.searchParamsPrev=o;const p=async function(u){return(await fetch(u,{method:"GET",headers:{"Content-Type":"text/html"}})).text()};n.wrapper_product.classList.add("ecom-doing-filter"),p(t).then(function(u){const m=document.createElement("div");m.innerHTML=u;const c=n.wrapper_product.querySelector(".ecom-collection__product-main.ecom-collection_product_template_collection");!c||(c.innerHTML=m.querySelector(".ecom-collection__product-main.ecom-collection_product_template_collection").innerHTML,a&&n.updateURLHash(o),n.renderFilters(m,i),n.renderActiveFacets(m),c.querySelector(".ecom-collection__product--wrapper-items")&&c.dispatchEvent(new CustomEvent("ecom-products-init",{detail:{wrapper:c}})))}).finally(function(){n.wrapper_product.classList.remove("ecom-doing-filter"),N()})},updateURLHash(t){history.pushState({searchParams:t},"",`${window.location.pathname}${t&&"?".concat(t)}`)},renderActiveFacets(t){const o=t.querySelector(".ecom-collection__filters-applied-block"),i=this.wrapper_product.querySelector(".ecom-collection__filters-applied-block"),a=this.wrapper_product.querySelectorAll(".ecom-collection__filter-values");!i&&o?this.facetForms.forEach(n=>{n.prepend(o)}):i&&o?i.innerHTML=o.innerHTML:i&&!o&&this.facetForms.forEach(n=>{n.querySelector(".ecom-collection__filters-applied-block")&&n.querySelector(".ecom-collection__filters-applied-block").remove()}),a.length>0&&a.forEach(n=>{o?n.innerHTML=o.querySelector(".ecom-collection-filters--active_values").innerHTML:n.innerHTML=""})},renderFilters(t,o){const i=t.querySelectorAll(".ecom-js-filter"),a=c=>{if(o.target===window)return!1;const d=o?o.target.closest(".ecom-js-filter"):void 0;return d?c.dataset.index===d.dataset.index:!1},n=Array.from(i),p=Array.from(i).find(a);n.forEach(c=>{this.wrapper_product.querySelector(`.ecom-js-filter[data-index="${c.dataset.index}"]`).innerHTML=c.innerHTML}),u(t,this.wrapper_product),p&&m(p,o.target.closest(".ecom-js-filter"));function u(c,d){const M=c.querySelector(".ecom-collection-filters--active_values-list"),j=d.querySelector(".ecom-collection-filters--active_values-list");!M||!j||(j.innerHTML=M.innerHTML)}function m(c,d){if(!d)return;const M=d.querySelector(".ecom-collection__filters-group--selected"),j=c.querySelector(".ecom-collection__filters-group--selected"),R=d.querySelector(".ecom-collection__filters-group-summary"),O=c.querySelector(".ecom-collection__filters-group-summary");j&&M&&(d.querySelector(".ecom-collection__filters-group--selected").outerHTML=c.querySelector(".ecom-collection__filters-group--selected").outerHTML),R&&O&&(d.querySelector(".ecom-collection__filters-group-summary").outerHTML=c.querySelector(".ecom-collection__filters-group-summary").outerHTML)}},handleRemoveFilter(){this.facetForms.forEach(o=>{o.addEventListener("click",t.bind(this))});function t(o){if(o.target.closest(".ecom-collection__filters-group-list-item-clear")||o.target.closest(".ecom-collection__filters-group-reset-filter")){o.preventDefault();const i=o.target.closest(".ecom-collection__filters-group-list-item-clear")||o.target.closest(".ecom-collection__filters-group-reset-filter");if(!i.href)return;const a=i.href.indexOf("?")==-1?"":i.href.slice(i.href.indexOf("?")+1),n=`${window.location.pathname}?section_id=${this.sectionId}&${a}`;this.handleLoadProduct(n,a,o)}}}}}();s&&(P(),this.settings.enable_ajax?D.init():this.$el.querySelector(".ecom-collection__filters-form").addEventListener("change",function(){this.submit()}))}},requestShopifyType(){return{shopify_type:"collection"}},css(){return`
                .ecom-scroll_bar::-webkit-scrollbar {
                    display: block;
                    width: 3px;
                }
                .ecom-collection__filters-group-checkbox--input[disabled] {
                    pointer-events: none;
                }
                .ecom-collection__filters-group-checkbox--disabled span {
                    opacity: .8;
                    pointer-events: none;
                }
                .ecom-collection__filters-enable-colors .ecom-filter-hide-checkbox .ecom-collection__filters-group-checkbox--input{
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
                    transform:rotate(180deg)
                }
                .ecom-collection__filters-group-checkbox:hover {
                    cursor: pointer;
                }
                .ecom-collection__filters-group-dropdown:focus {
                    border: none;
                }
                .ecom-collection__filters-group-dropdown.active .ecom-icon-filter-open,
                details[open] .ecom-icon-filter-open{
                    display:block !important
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
                    -webkit-animation-name: zoomIn;
                    animation-name: zoomIn;
                    -webkit-animation-duration: .3s;
                    animation-duration: .3s;
                    -webkit-animation-fill-mode: both;
                    animation-fill-mode: both;
                    transition:all .3s linear;
                    /* overflow-y: auto; */
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
                    height:auto;
                }
                @keyframes zoomIn {
                    from {
                        opacity: 0;
                        transform: translateX(-100%);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .ecom-collection__filters-group-header{
                    display:flex;
                    align-items:center;
                }
                .ecom-collection__filters-group-header svg{
                    width:20px;
                    height:auto;
                    margin-left: auto;
                    margin-right: 10px;
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
                details.ecom-collection__filters-group .ecom-collection__filters-group-summary{
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
                            transition: all ease-in-out .3s;
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
                            display:block
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
                            .ecom-collection__filters-dropdown .ecom-container-filter-list, .ecom-collection__filters-push_down[data-mobile="mobile"] .ecom-container-filter-list{
                                display:block !important;
                                height: 100% !important;
                            }
                            .ecom-container-filter-list-wrapper {
                                overflow: auto;
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
                                width:100%;
                                max-width:350px;
                                background:white;
                                -webkit-animation-name: zoomIn;
                                animation-name: zoomIn;
                                -webkit-animation-duration: .3s;
                                animation-duration: .3s;
                                -webkit-animation-fill-mode: both;
                                animation-fill-mode: both;
                                transition: all .3s linear;
                                overflow-y: auto;
                            }
                            .ecom-modal-content--mobile.ecom-modal-content .ecom-collection__filters-form{
                                height:100%;
                                overflow:auto
                            }
                        }
                        #button_menu_block{
                            align-items:center;
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


            `},default(){return{settings:{title:"Filter by",show_count:!0,show_applied_filters:!0,applied_title:"Applied filters",show_color:!1,option_name:"Color",filter_type:"block",filter_selected_text:"{{count}} selected",filters_selected_text:"{{count}} selected",reset_filter:"Reset",collapse_mobile:!0,items_color_alignment:"inline-flex",icon:{value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M96 0C104.8 0 112 7.164 112 16V81.6C148.5 89.01 176 121.3 176 160C176 198.7 148.5 230.1 112 238.4V496C112 504.8 104.8 512 96 512C87.16 512 80 504.8 80 496V238.4C43.48 230.1 16 198.7 16 160C16 121.3 43.48 89.01 80 81.6V16C80 7.164 87.16 0 96 0zM96 208C122.5 208 144 186.5 144 160C144 133.5 122.5 112 96 112C69.49 112 48 133.5 48 160C48 186.5 69.49 208 96 208zM336 352C336 390.7 308.5 422.1 272 430.4V496C272 504.8 264.8 512 256 512C247.2 512 240 504.8 240 496V430.4C203.5 422.1 176 390.7 176 352C176 313.3 203.5 281 240 273.6V16C240 7.164 247.2 0 256 0C264.8 0 272 7.164 272 16V273.6C308.5 281 336 313.3 336 352zM256 400C282.5 400 304 378.5 304 352C304 325.5 282.5 304 256 304C229.5 304 208 325.5 208 352C208 378.5 229.5 400 256 400zM432 496C432 504.8 424.8 512 416 512C407.2 512 400 504.8 400 496V270.4C363.5 262.1 336 230.7 336 192C336 153.3 363.5 121 400 113.6V16C400 7.164 407.2 0 416 0C424.8 0 432 7.164 432 16V113.6C468.5 121 496 153.3 496 192C496 230.7 468.5 262.1 432 270.4V496zM416 144C389.5 144 368 165.5 368 192C368 218.5 389.5 240 416 240C442.5 240 464 218.5 464 192C464 165.5 442.5 144 416 144z"></path></svg>',cate:"Light"},icon_menu:{id:"B9FJda3u",name:"angle-down",cate:"Solid",url:"",value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path></svg>',thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path></svg>'},icon_menu_active:{id:"EWUwgzJy",name:"angle-up",cate:"Solid",url:"",value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"></path></svg>',thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"></path></svg>'},show_sub_menu:!1,menu_label:"Menu",show_all_items_menu:!1},style:{filter_title:{textTextAlign:"left",spacing:{margin:{bottom:"30px"}},textTypography:{"text-transform":"uppercase"}},applied_filters:{textTextAlign:"left",spacingTitle:{margin:{bottom:"10px"}},iconFontSize:"10px",iconPrimaryColor:"#0d0c0c",spacing:{margin:{bottom:"10px",right:"10px",top:"0px",left:"0px"},padding:{top:"6px",left:"15px",bottom:"6px",right:"15px"}},tab:"normal",textTypography:{"font-size":"18px","font-weight":"300"},buttonBackgroundnormalmode:{classic:{"background-color":"#cccccc"}},buttonBackgroundhovermode:{classic:{"background-color":"#e6e3e3"}}},filter_type_title:{textTextAlign:"left",spacing:{margin:{top:"10px",bottom:"4px"},padding:{bottom:"3px"}},textColor:"#080707",textTypography:{"text-transform":"uppercase","font-size":"16px"},border:{"border-style":"solid","border-width":{bottom:"1.5px"}}},filter_count:{textTextAlign:"left"},filter_selected:{textTextAlign:"left",spacing:{margin:{bottom:"8px"}}},checkbox:{textTextAlign:"left",tab:"active",popup:{"border-style":"solid","border-width":{top:"0.8px",left:"0.8px",bottom:"0.8px",right:"0.8px"}},"border-radius":{top:"4px",left:"4px",bottom:"4px",right:"4px"},backgroundHover:{classic:{"background-color":"#0691b1"}},popupHover:{"border-style":"none"},transition:300,backgroundActive:{classic:{"background-color":"#0691b1"}},popupActive:{"border-style":"none"},textTypography:{"font-size":"14px"},checkbox_spacing:{margin:{left:"0px"}},items_gap:"10px",width:"20px",height:"20px"},filter_button_reset:{spacing:{margin:{bottom:"8px"}}},filter_slide_price:{colorSlidenormal:"#111827",colorSlide:"rgba(17, 24, 39, 0.2)"},filter_general:{spacing:{padding:{top:"15px",left:"15px",bottom:"15px",right:"15px"}}},filter_value_content:{spacing:{margin:{right:"0px"},padding:{}}},filter_button_collapse:{tab:"normal",buttonTypography:{"font-size":"14px","text-transform":"uppercase"},buttonBackgroundnormalmode:{classic:{"background-color":"#0691b1"}},buttonColornormalmode:"#fff",buttonBordernormalmode:{"border-style":"none"},buttonBorderRadiusnormalmode:{top:"4px",left:"4px",bottom:"4px",right:"4px"},spacing:{margin:{right:"0px"},padding:{top:"10px",left:"20px",bottom:"10px",right:"20px"}}},filter_icon_collapse:{iconFontSize:"14px",iconPrimaryColor:"#fff",icon_position:-1,spacing:"4px"},dropdown_heading:{tab:"normal",buttonBorderhovermode:{"border-style":"none"},spacing:{margin:{right:"26px"}},buttonTypography:{"font-size":"16px"},buttonBordernormalmode:{"border-style":"none"}},option_color:{width:"24px",height:"24px","border-radius":{top:"50%",left:"50%",bottom:"50%",right:"50%"},spacing:{margin:{right:"6px",left:"6px"}},border:{"border-style":"solid","border-width":{top:"0.8px",left:"0.8px",bottom:"0.8px",right:"0.8px"},"border-color":"#dbd3d3"}},menu:{spacing:{padding:{bottom:"20px"}},spacing__mobile:{padding:{top:"40px"}},spacing__tablet:{padding:{top:"30px"}},width__tablet:"52%",width__mobile:"56%"}}}}},methods:{style(){let e=[{group_alias:"text:spacing",options:{group_title:"Title",group_name:"filter_title",selector:" .ecom-collection__filters-heading"}},{group_alias:"box",options:{group_title:"Option value content",group_name:"filter_value_content",selector:" .ecom-collection__filters-group-list"},modify:{params:[{position:10,fields:{alias:"spacing"}},{position:3,fields:[{alias:"width"},{alias:"height"},{name:"max_height",label:"Max Height",type:"number",options:{responsive:!0,units:{px:{min:0,max:1e3}}},css:{properties:{"max-height":""}}}]}]}},{group_alias:"text:spacing",options:{group_name:"filter_type_title",group_title:"Option name",selector:" .ecom-collection__filters-group-summary--title"},modify:{params:{position:4,fields:{alias:"border"}}}},{group_alias:"text:spacing",options:{group_name:"filter_selected",group_title:"Option selected",selector:" .ecom-collection__filters-group--selected"}},this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"&&this.data.settings.filter_type!=="push_down"?{group_alias:"box",options:{group_title:"Items",group_name:"box-item-conlapse",selector:" details.ecom-collection__filters-group-not__dropdown"},modify:{params:{position:30,fields:{alias:"spacing"}}}}:null,this.data.settings.number_button&&this.data.settings.filter_type==="dropdown"?{group_alias:[{title:"Label",type:"text:spacing",selector:"root .ecom-collection__filters-group-list-item .ecom-collection__filters-group-checkbox-label"},{title:"Button",type:"button"}],options:{group_name:"filter_value_label",group_title:"Option values",selector:" .ecom-more-filter"}}:{group_alias:["text","box"],options:{group_title:"Option values",group_name:"checkbox",selector:" .ecom-collection__filters-group-list-item"},modify:{params:[{position:0,fields:[{type:"paragraph",content:"** Label **"}]},{position:5,fields:[{name:"items_gap",label:"Items Gap",type:"number",options:{responsive:!0,units:{px:{min:0,max:100}}},css:{selector:"root .ecom-collection__filters-group-list",properties:{gap:""}}},{alias:"spacing",options:{name:"items_gap_spacing"}}]},{position:20,fields:[{type:"line"},{type:"paragraph",content:"** Checkbox **"},{alias:"width",options:{css:{selector:"root .ecom-collection__filters-group-checkbox--input"}}},{alias:"height",options:{css:{selector:"root .ecom-collection__filters-group-checkbox--input"}}},{alias:"spacing",options:{name:"checkbox_spacing",css:{selector:"root .ecom-collection__filters-group-checkbox--input"}}},{type:"line"},{type:"tab",name:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"},{name:"active",title:"Active"}]},css:!1},{alias:"background",options:{css:{selector:"root .ecom-collection__filters-group-checkbox > input"},options:{visible:s=>s.tab==="normal"}}},{alias:"background",options:{name:"backgroundHover",css:{properties:{background:""},selector:"root .ecom-collection__filters-group-checkbox > input:hover"},options:{visible:s=>s.tab==="hover"}}},{alias:"background",options:{name:"backgroundActive",css:{properties:{background:""},important:!0,selector:"root .ecom-collection__filters-group-checkbox > input:checked"},options:{visible:s=>s.tab==="active"}}},{type:"popup",label:"Border",name:"popup",options:{type:"border",visible:s=>s.tab==="normal"},css:{selector:"root .ecom-collection__filters-group-checkbox > input"}},{type:"popup",label:"Border",name:"popupHover",options:{type:"border",visible:s=>s.tab==="hover"},css:{properties:{border:""},selector:"root .ecom-collection__filters-group-checkbox > input:hover"}},{name:"transition",type:"number",label:'Transition Duration <span class="lowercase">(ms)</span>',options:{min:0,max:5e3,visible:{keep_data:!0,condition:s=>s.tab==="hover"}},css:{selector:"root .ecom-collection__filters-group-checkbox--input",properties:{transition:"all %value%ms ease"}}},{type:"popup",label:"Border",name:"popupActive",options:{type:"border",visible:s=>s.tab==="active"},css:{properties:{border:""},important:!0,selector:"root .ecom-collection__filters-group-checkbox > input:checked"}},{type:"dimension",label:"Border radius",name:"border-radius",options:{type:"radius",units:"default",visible:s=>s.tab==="normal"},css:{selector:"root .ecom-collection__filters-group-checkbox > input"}},{type:"dimension",label:"Border radius",name:"border-radiusHover",options:{units:"default",type:"radius",visible:s=>s.tab==="hover"},css:{properties:{"border-radius":""},selector:"root .ecom-collection__filters-group-checkbox > input:hover"}},{type:"dimension",label:"Border radius",name:"border-radiusActive",options:{units:"default",type:"radius",visible:s=>s.tab==="active"},css:{properties:{"border-radius":""},important:!0,selector:"root .ecom-collection__filters-group-checkbox > input:checked"}}]}]}},{group_alias:"button",options:{group_name:"filter_button_reset",group_title:"Reset button",selector:" .ecom-collection__filters-group-reset-filter"}},{group_name:"filter_slide_price",group_title:"Price range",selector:" .ecom-collection-filters--price-range input[type=range]",params:[{type:"paragraph",content:"** Price value **"},{type:"popup",label:"Typography",name:"filters_price_typography",options:{global:{type:"typography"},oneline:!0,responsive:!0,type:"typography"},css:{selector:"root .ecom-collection-filters--price"}},{label:"Text Color",name:"filters_price_color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{color:""},selector:"root .ecom-collection-filters--price"}},{name:"filter_price_text_shadow",label:"Text Shadow",type:"popup",options:{oneline:!0,type:"text-shadow"},css:{selector:"root .ecom-collection-filters--price"}},{type:"paragraph",content:"** Price seperate **"},{type:"popup",label:"Typography",name:"filter_price_seperate_typo",options:{global:{type:"typography"},oneline:!0,responsive:!0,type:"typography"},css:{selector:"root .ecom-collection-filters--seperate"}},{name:"filter_price_seperate_color",label:"Text Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{color:""},selector:"root .ecom-collection-filters--seperate"}},{name:"filter_price_text_shadown",label:"Text Shadow",type:"popup",options:{oneline:!0,type:"text-shadow"},css:{selector:"root .ecom-collection-filters--seperate"}},{alias:"spacing",options:{name:"filter_price_seperate_spacing",css:{selector:"root .ecom-collection-filters--seperate"}}},{type:"paragraph",content:"** Slider **"},{alias:"width",options:{css:{selector:"root  .ecom-collection-filters--price-range input[type=range],root .ecom-collection-filters--multi-range"}}},{type:"number",name:"height",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:1,max:20}}},css:{properties:{"--ecom-size-custom":""}}},{name:"colorSlide",label:"Color slider",type:"color",options:{global:{type:"colors"}},css:{properties:{"--ecom-color-custom":""}}},{type:"popup",label:"Border",name:"popupActive",options:{type:"border"},css:{properties:{border:""},important:!0}},{type:"dimension",label:"Border radius",name:"border-radius",options:{type:"radius",units:"default"},css:{properties:{"border-radius":""}}},{type:"line"},{type:"paragraph",content:"** Thumb **"},{alias:"width",options:{name:"widththumb",options:{units:{px:{min:1,max:100}}},css:{properties:{"--width-thumb-custom":""}}}},{type:"number",name:"heightthumb",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:1,max:100}}},css:{properties:{"--height-thumb-custom":""}}},{name:"colorSlidenormal",label:"Color thumb",type:"color",options:{global:{type:"colors"}},css:{properties:{"--bg-thumb-custom":""}}}]}].filter(s=>s);return this.data.settings.show_applied_filters&&e.splice(1,0,{options:{group_name:"applied_filters",group_title:"Applied filters",selector:" .ecom-collection__filters-group-list-item a"},group_alias:[{title:"General",type:"box",selector:"root .ecom-collection__filters-applied-block"},{title:"Title",type:"text",selector:"root .ecom-collection__filters-applied-heading"},{title:"Button",type:"button"},{title:"Remove",type:"icon",selector:"root .ecom-colletion-filters--close-icon"}],modify:{params:[{position:1,fields:{alias:"align-items",options:{label:"Alignment",css:{selector:" root .ecom-collection__filters-applied-block"}}}},{position:6,fields:[{type:"line"},{alias:"spacing",options:{name:"spacingGeneral",css:{selector:" root .ecom-collection__filters-applied-block"}}}]},{position:14,fields:{alias:"spacing",options:{name:"spacingTitle",css:{selector:" root .ecom-collection__filters-applied-heading"}}}},{position:50,fields:{name:"icon_spacing",label:"icon spacing",type:"number",options:{responsive:!0,units:{px:{min:0,max:50}}},css:{selector:" .ecom-colletion-filters--close-icon",properties:{"margin-left":""}}}}]}}),(this.data.settings.filter_type=="collapse"||this.data.settings.collapse_mobile||this.data.settings.filter_type=="push_down")&&(e.splice(0,0,{group_alias:"button",options:{group_name:"filter_button_collapse",group_title:"Filter button",selector:" .ecom-collection__filters-container > button"}}),this.data.settings.icon&&e.splice(1,0,{group_alias:"icon",options:{group_name:"filter_icon_collapse",group_title:"Filter button icon",selector:" .ecom-collection__filters-container .ecom-filter-collapse-icon"},modify:{params:[{position:4,fields:[{type:"choose",label:"Icon position",name:"icon_position",options:{type:"align-x",values:[-1,1]},css:{properties:{order:""}}},{type:"number",label:"Icon spacing",name:"spacing",options:{units:{px:{min:0,max:200}}},css:{selector:"root #button_menu_block",properties:{gap:""}}}]}]}})),this.data.settings.filter_type=="dropdown"?e.splice(2,0,{group_alias:"button",options:{group_name:"dropdown_heading",group_title:"Dropdown heading",selector:" .ecom-collection__filters-group-dropdown"}}):e.splice(0,0,{group_alias:"box",options:{group_name:"box_filter",group_title:"Filter box",selector:" .ecom-collection__filters-group"},modify:{params:{position:4,fields:{alias:"spacing"}}}}),this.data.settings.show_count&&e.splice(4,0,{group_alias:"text:spacing",options:{group_title:"Option count",group_name:"filter_count",selector:" .ecom-collection__filters--count"}}),this.data.settings.show_color&&e.splice(5,0,{group_title:"Option Color",group_name:"option_color",selector:" .ecom-collection__filters--color",params:[{alias:"width"},{alias:"height"},{alias:"border"},{alias:"border-radius"},{alias:"spacing"}]}),this.data.settings.filter_type==="push_down"&&e.splice(1,0,{group_alias:"box",options:{group_name:"box_push_down",group_title:"Push down box",selector:" .ecom-container-filter-list-wrapper"},modify:{params:[{position:20,fields:{alias:"spacing"}}]}}),this.data&&e.unshift({group_alias:"box",options:{group_title:"General",group_name:"filter_general",selector:" .ecom-modal-content--mobile, .ecom-modal-content, .ecom-collection__filters-push_down"},modify:{params:[{position:10,fields:{alias:"spacing"}},{position:3,fields:{alias:"width",options:{css:{selector:"root .ecom-modal-content, .ecom-collection__filters-push_down"}}}}]}}),this.link_list&&(e.push({group_title:"Menu",group_name:"menu",selector:" .ecom-shopify_menu",params:[{alias:"width"},{alias:"spacing"},{type:"line"},{type:"paragraph",content:"<strong>Menu items<strong>"},{alias:"spacing",options:{name:"menu_item",css:{selector:" .ecom-menu_item"}}}]}),e.push({group_alias:"items:text",options:{group_name:"menu_title",group_title:"Menu title",selector:"root .ecom-menu_item"},modify:{params:[{position:9,fields:[{type:"line"},{alias:"spacing",options:{css:{selector:" .ecom-menu_title"}}}]}]}}),e.push({group_alias:"items:icon",options:{group_name:"accordion_icon",group_title:"Menu icon",selector:" .ecom-menu_icon"},modify:{params:{position:35,fields:[{type:"line"},{alias:"spacing",options:{css:{selector:"root .ecom-menu_icon"}}}]}}})),e}}},J={class:"ecom-element ecom-collection ecom-collection__filters"},X={class:"ecom-collection__filters-wrapper"},Z={key:0,class:"ecom-collection__filters-container ecom-collection__filters-collapse"},Q={id:"button_menu_block",type:"button"},ee=["innerHTML"],te=["innerHTML"],oe={id:"ecom-modal-block"},ie={class:"ecom-modal-content ecom-scroll_bar"},le=r("div",{class:"modal-header"},[r("span",{id:"ecom-modal-close"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})])])],-1),se=["innerHTML","data-show-all"],ne=["innerHTML"],re=["innerHTML"],ae={key:1,class:"ecom-collection__filters-container ecom-collection__filters-block"},ce=["innerHTML"],pe=["innerHTML"],me=["id"],de={key:0,class:"modal-header"},ue=r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),_e=[ue],fe=["innerHTML","data-show-all"],he=["innerHTML"],ge=["innerHTML"],be={key:2,class:"ecom-collection__filters-container ecom-collection__filters-dropdown"},ve=["innerHTML"],ye=["innerHTML"],xe=["id"],we={key:0,class:"modal-header"},ke=r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),Le=[ke],Ce=["innerHTML","data-show-all"],Me=["innerHTML"],He=["innerHTML"],Se=["data-mobile"],Te=["innerHTML"],ze=["innerHTML"],qe=["id"],Ee={key:0,class:"modal-header"},Fe=r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),Ie=[Fe],Ae=["innerHTML","data-show-all"],Be=["innerHTML"];function Pe(e,s,l,V,N,b){var I,_,k,v,y,H,S,q,L,E,x,C,w,F,T,A,B,P,$,D,t,o,i;return f(),h("div",J,[r("div",X,[l.data.settings.filter_type=="collapse"?(f(),h("div",Z,[r("button",Q,[(I=l.data.settings)!=null&&I.icon?(f(),h("span",{key:0,class:"ecom-filter-collapse-icon",innerHTML:(_=l.data.settings.icon)==null?void 0:_.value},null,8,ee)):g("",!0),r("span",{innerHTML:l.data.settings.title},null,8,te)]),r("div",oe,[r("div",ie,[le,b.show_sub_menu?(f(),h("div",{key:0,class:"ecom-shopify_menu",innerHTML:e.liquid("linklists"),"data-show-all":(k=b.show_all_items_menu)!=null?k:!1},null,8,se)):g("",!0),r("h3",{class:"ecom-collection__filters-heading",innerHTML:e.lang(l.data.settings.title,"filter_title")},null,8,ne),r("form",{class:"ecom-collection__filters-form ecom-collection__filters-form-collapse ecom-click ecom-scroll_bar","data-stopdrag":"true",innerHTML:e.liquid("filters")},null,8,re)])])])):g("",!0),l.data.settings.filter_type!=="collapse"&&l.data.settings.filter_type!=="dropdown"&&l.data.settings.filter_type!=="push_down"?(f(),h("div",ae,[r("button",{id:"button_menu_block",class:z(["ecom-button-filter-collapse",(v=l.data.settings)!=null&&v.collapse_mobile?"button_menu_block--mobile":""]),type:"button"},[(y=l.data.settings)!=null&&y.icon?(f(),h("span",{key:0,class:"ecom-filter-collapse-icon",innerHTML:l.data.settings.icon.value},null,8,ce)):g("",!0),r("span",{innerHTML:(H=l.data.settings)==null?void 0:H.title},null,8,pe)],2),r("div",{id:(S=l.data.settings)!=null&&S.collapse_mobile?"ecom-modal-block":"",class:"ecom-modal-block--mobile"},[r("div",{class:z(["ecom-modal-content--mobile",(L=(q=l.data)==null?void 0:q.settings)!=null&&L.collapse_mobile?"ecom-modal-content":""])},[l.data.settings.collapse_mobile?(f(),h("div",de,[r("span",{id:"ecom-modal-close",class:z(["ecom-collapse-close",l.data.settings.collapse_mobile?"ecom-collapse-close--mobile":""])},_e,2)])):g("",!0),b.show_sub_menu?(f(),h("div",{key:1,class:"ecom-shopify_menu",innerHTML:e.liquid("linklists"),"data-show-all":(E=b.show_all_items_menu)!=null?E:!1},null,8,fe)):g("",!0),r("h3",{class:"ecom-collection__filters-heading",innerHTML:e.lang(l.data.settings.title,"filter_title")},null,8,he),r("form",{class:"ecom-collection__filters-form ecom-click","data-stopdrag":"true",innerHTML:e.liquid("filters")},null,8,ge)],2)],8,me)])):g("",!0),l.data.settings.filter_type=="dropdown"?(f(),h("div",be,[r("button",{id:"button_menu_block",class:z(["ecom-button-filter-collapse",l.data.settings.collapse_mobile?"button_menu_block--mobile":""]),type:"button"},[(x=l.data.settings)!=null&&x.icon?(f(),h("span",{key:0,class:"ecom-filter-collapse-icon",innerHTML:(w=(C=l.data.settings)==null?void 0:C.icon)==null?void 0:w.value},null,8,ve)):g("",!0),r("span",{innerHTML:(F=l.data.settings)==null?void 0:F.title},null,8,ye)],2),r("div",{id:(T=l.data.settings)!=null&&T.collapse_mobile?"ecom-modal-block":"",class:"ecom-modal-block--mobile"},[r("div",{class:z(["ecom-modal-content--mobile",l.data.settings.collapse_mobile?"ecom-modal-content":""])},[l.data.settings.collapse_mobile?(f(),h("div",we,[r("span",{id:"ecom-modal-close",class:z(["ecom-collapse-close",(A=l.data.settings)!=null&&A.collapse_mobile?"ecom-collapse-close--mobile":""])},Le,2)])):g("",!0),b.show_sub_menu?(f(),h("div",{key:1,class:"ecom-shopify_menu",innerHTML:e.liquid("linklists"),"data-show-all":(B=b.show_all_items_menu)!=null?B:!1},null,8,Ce)):g("",!0),r("h3",{class:"ecom-collection__filters-heading",innerHTML:e.lang(l.data.settings.title,"filter_title")},null,8,Me),r("form",{method:"GET",class:"ecom-collection__filters-form ecom-click","data-stopdrag":"true",innerHTML:e.liquid("filters")},null,8,He)],2)],8,xe)])):g("",!0),((P=l.data.settings)==null?void 0:P.filter_type)=="push_down"?(f(),h("div",{key:3,class:"ecom-collection__filters-container ecom-collection__filters-push_down","data-mobile":($=l.data.settings)!=null&&$.collapse_mobile?"mobile":""},[r("button",{id:"button_menu_block",type:"button",class:z([l.data.settings.collapse_mobile?"button_menu_block--mobile":"","ecom-flex"])},[(D=l.data.settings)!=null&&D.icon?(f(),h("span",{key:0,class:"ecom-filter-collapse-icon",innerHTML:(t=l.data.settings.icon)==null?void 0:t.value},null,8,Te)):g("",!0),r("span",{innerHTML:l.data.settings.title},null,8,ze)],2),r("div",{id:(o=l.data.settings)!=null&&o.collapse_mobile?"ecom-modal-block":"",class:"ecom-modal-block--mobile"},[r("div",{class:z(["ecom-modal-content--mobile ecom-scroll_bar",l.data.settings.collapse_mobile?"ecom-modal-content":""])},[l.data.settings.collapse_mobile?(f(),h("div",Ee,[r("span",{id:"ecom-modal-close",class:z(["ecom-collapse-close",l.data.settings.collapse_mobile?"ecom-collapse-close--mobile":""])},Ie,2)])):g("",!0),b.show_sub_menu?(f(),h("div",{key:1,class:"ecom-shopify_menu",innerHTML:e.liquid("linklists"),"data-show-all":(i=b.show_all_items_menu)!=null?i:!1},null,8,Ae)):g("",!0),r("form",{class:"ecom-collection__filters-form ecom-collection__filters-form-collapse ecom-click ecom-scroll_bar","data-stopdrag":"true",innerHTML:e.liquid("filters")},null,8,Be)],2)],8,qe)],8,Se)):g("",!0)])])}const Ye=U(Y,[["render",Pe]]);Y.__docgenInfo={exportName:"default",displayName:"CollectionFilter",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Collection/Filter.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{Ye as default};
//# sourceMappingURL=Filter.00046415.js.map
