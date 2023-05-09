import{_ as N,L as D,J as j,E as V}from"./preview.8d4b9688.js";import{o as h,a as b,x as a,y as x,u as F}from"./vue.esm-bundler.2eae420a.js";import"./chunk-2GDW2BFM.4967875d.js";import"./index.e850844b.js";import"./iframe.c56a2ddc.js";import"../sb-preview/runtime.js";const B={name:"CollectionFilter",presets:!0,docs:"https://help.ecomposer.io/docs/elements/collection-elements/filter/",mixins:[D,j,V],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["filter_type","show_all_items_menu"]}},computed:{liquids(){var e,l,n,q,E,v,S,_,w,f,g,k,L,C,y,M,z,H;return{linklists:{code:`
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
                                    <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
                                </svg>
                            </span>
                        {% endcapture %}
                        ${(l=(e=this.data)==null?void 0:e.settings)!=null&&l.show_applied_filters?`
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
                                    {%- if  filter.active_values.size > 0 -%}
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
                                            {% endfor %}
                                            <li class="ecom-collection__filters-group-list-item ecom-al_center">
                                                <a href="{{collection.url}}" title="${this.lang((n=this.data.settings)!=null&&n.clear_text?this.data.settings.clear_text:"Clear all","clear_all_title")}" class="ecom-collection__filters-group-list-item-clear">${this.lang((q=this.data.settings)!=null&&q.clear_text?this.data.settings.clear_text:"Clear all","clear_all_title")}{{close_icon}}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {%- endif -%}
                        `:""}
                        <div class="ecom-container-filter-list">
                        {%- for filter in collection.filters -%}
                            {%- assign total_active_values = total_active_values | plus: filter.active_values.size -%}
                            {% case filter.type %}
                            {% when 'list' %}
                                {% assign size = filter.values | size %}
                                {% assign settings_size = ${(E=this.data.settings)==null?void 0:E.number_max} %}
                                {%- if size > 0 -%}
                                <${((v=this.data.settings)==null?void 0:v.use_accordion)&&this.data.settings.filter_type!=="dropdown"?"details":"div"}
                                data-name="{{filter.param_name}}"
                                ${(S=this.data.settings)!=null&&S.accordion_open?" open ":""}
                                class="ecom-js-filter${this.data.settings&&this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"?" ecom-collection__filters-group-not__dropdown":" ecom-collection__filters-group-dropdown"} ecom-collection__filters-group ecom-collection__filters-group-lists ecom-d-none" data-index="{{ forloop.index }}" data-attrs-max="${this.data.settings&&this.data.settings.number_max?this.data.settings.number_max:5}">

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
                                    <div class="ecom-collection__filters-group--display">
                                        ${(_=this.data.settings)!=null&&_.show_selected?`
                                            <div class="ecom-collection__filters-group--header">
                                                <span class="ecom-collection__filters-group--selected no-js-hidden">
                                                    {% assign count = filter.active_values.size %}
                                                    {% if count == 1%}
                                                        ${this.lang((w=this.data.settings)==null?void 0:w.filter_selected_text,"filter_selected_text",{count:"count"})}
                                                    {% else %}
                                                        ${this.lang((f=this.data.settings)==null?void 0:f.filters_selected_text,"filters_selected_text",{count:"count"})}
                                                    {% endif %}
                                                </span>
                                                <a href="{{ filter.url_to_remove }}" class="ecom-collection__filters-group-reset-filter" >${this.lang((g=this.data.settings)==null?void 0:g.reset_filter,"reset_filter")}</a>
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
                                            <li class="ecom-collection__filters-group-list-item ${this.dropdown_max?"ecom-collection__filters-group-list-item-max":""}${(k=this.data.settings)!=null&&k.hide_color_checkbox?" ecom-filter-hide-checkbox":""}" >
                                                <label for="ecom-filter-{{ filter.label | escape  | strip }}-{{ forloop.index }}" class="ecom-collection__filters-group-checkbox{% if value.count == 0 and value.active == false %} ecom-collection__filters-group-checkbox--disabled{% endif %}">

                                                    <input type="checkbox"
                                                    class="ecom-collection__filters-group-checkbox--input ${this.data.settings.hide_checkbox?"ecom-filter--hide-checkbox":""}"
                                                    name="{{ value.param_name }}"
                                                    value="{{ value.value }}"
                                                    id="ecom-filter-{{ filter.label | escape | strip }}-{{ forloop.index }}"
                                                    {% if value.active %}checked{% endif %}
                                                    {% if value.count == 0 and value.active == false %}disabled{% endif %}
                                                    >

                                                    <span class="ecom-collection__filters-group-checkbox-label ecom-flex ecom-al_center${(L=this.data.settings)!=null&&L.color_show_count?" ecom-filter-hide-color-count":""}">
                                                        {% if check_is_filter_color %}
                                                            {% assign value_key = value.value | downcase %}
                                                            {% if colors and colors.value[value_key]  != blank %}
                                                                <span class="ecom-collection__filters--color" style="{{colors.value[value_key]}}" data-ecom-tooltip="{{value.label}}"></span>
                                                            {% else %}
                                                                <span class="ecom-collection__filters--color ecom-collection__filters--no-color" data-ecom-tooltip="{{value.label}}"></span>
                                                            {% endif %}
                                                        {% endif%}
                                                        {{ value.label | escape }}
                                                        ${(C=this.data.settings)!=null&&C.show_count?'<span class="ecom-collection__filters--count">({{ value.count }})</span>':""}
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
                                    </${this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"?"details":"div"}>
                                {%- endif -%}
                            {% when 'price_range' %}
                                {% liquid
                                    assign currencies_using_comma_decimals = 'ANG,ARS,BRL,BYN,BYR,CLF,CLP,COP,CRC,CZK,DKK,EUR,HRK,HUF,IDR,ISK,MZN,NOK,PLN,RON,RUB,SEK,TRY,UYU,VES,VND' | split: ','
                                    assign uses_comma_decimals = false
                                    if currencies_using_comma_decimals contains cart.currency.iso_code
                                        assign uses_comma_decimals = true
                                    endif
                                    %}

                                    <${this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"?"details":"div"}
                                    ${(y=this.data.settings)!=null&&y.accordion_open?" open ":""}
                                    class="ecom-collection__filters-group ${this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"?"ecom-collection__filters-group-not__dropdown":"ecom-collection__filters-group-dropdown"} ecom-collection__filters-group-price-range" data-index="{{ forloop.index }}">
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
                                        <div class="ecom-collection__filters-group--display">
                                            {%- comment -%}
                                            ${(M=this.data.settings)!=null&&M.show_selected?`<div class="ecom-collection__filters-group--header">
                                                    {%- assign max_price_amount = filter.range_max | money -%}
                                                    <span class="ecom-collection__filters-group--selected">${this.lang((z=this.data.settings)==null?void 0:z.max_price_text,"max_price_text")} {{max_price_amount}}</span>
                                                    <a href="{{ filter.url_to_remove }}" class="ecom-collection__filters-group-reset-filter" >${this.lang((H=this.data.settings)==null?void 0:H.reset_filter,"reset_filter")}</a>
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


                                    </${this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"?"details":"div"}>
                                {% endcase %}
                            {%- endfor -%}
                            </div>
                            <!--/EComposer-custom-liquid-filters-${this.data.id.split("-").pop()}-->
                    `,preview:""}}},settings(){return[{group_title:"General",params:[{type:"text",name:"title",label:"Filter title",value:"Filter by",options:{warnings:{content:"Notice: the filter only works in the collection page and after template's published"}}},{type:"popup",name:"filter_type",label:"Filter type",options:{default:!1,type:"dropdown",values:{block:"Block",collapse:"Collapse",dropdown:"Dropdown"}},css:!1},{type:"toggle",label:"Show applied filters",name:"show_applied_filters",options:{values:{on:{label:"Show",value:!0},off:{label:"Hide",value:!1}}},css:!1},{type:"text",name:"applied_title",label:"Applied Filter title",placeholder:"Applied filters",options:{visible:function(e){return e.show_applied_filters}}},{type:"line"},{name:"icon",type:"picker",label:"Open filter button Icon",options:{oneline:!0,type:"icon",reset:!1,output:["value","cate"],visible:{keep_data:!0,condition:e=>e.filter_type=="collapse"||e.collapse_mobile}}},{type:"toggle",label:"Enable Ajax filter",name:"enable_ajax",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0}},{type:"toggle",label:"Display as accordion",name:"use_accordion",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:function(e){return e.filter_type!=="dropdown"},oneline:!0}},{type:"toggle",label:"Accordion default open",name:"accordion_open",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:function(e){return e.filter_type!=="dropdown"&&e.use_accordion},oneline:!0}},{type:"toggle",label:"Show selected/reset",name:"show_selected",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0}},{type:"toggle",label:"Hide checkbox",name:"hide_checkbox",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0}},{type:"toggle",label:"Show number count",name:"show_count",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:function(e){return e.filter_type!=="collapse"&&e.filter_type!=="dropdown"},oneline:!0}},{name:"dropdown_show",label:"Show option values",type:"popup",options:{values:{full:"Full",short:"Short"},type:"dropdown",visible:function(e){return e.filter_type=="dropdown"}},css:!1},{name:"number_max",label:"Maximum values to show",type:"number",options:{min:0,max:20,visible:function(e){return e.filter_type=="dropdown"&&e.dropdown_show=="short"}}},{name:"number_button",label:'Show button "more values"',type:"toggle",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0,visible:function(e){return e.filter_type=="dropdown"&&e.dropdown_show=="short"}},css:!1},{name:"button_text",label:"More values label",type:"text",options:{visible:function(e){return e.filter_type=="dropdown"&&e.dropdown_show=="short"&&e.number_button==!0}}},{type:"toggle",label:"Collapse on mobile and tablet",name:"collapse_mobile",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:function(e){return e.filter_type!=="collapse"},oneline:!0}},{type:"toggle",label:"Hide zero count",name:"hide_zero",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0}},{type:"popup",label:"Content Aligntment",name:"items_alignment",value:"",options:{type:"dropdown",default:!1,icon_type:"alignment",values:{"inline-flex":"Horizontal",block:"Vertical"}},css:{selector:" .ecom-collection__filters-group-list ",properties:{display:""}}},{type:"line"},{type:"paragraph",content:`To setup your filtering you can going to **Online Store** > **Navigation** > **Collection and search filters**.

                            

                            **This element only work on collection page**

                            [Learn more](https://help.shopify.com/en/manual/online-store/themes/os20/customize/filters)

                            `}]},{group_title:"Color filter",params:[{type:"toggle",label:"Show options as color",name:"show_color",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},css:!1},{type:"text",label:"",name:"option_name",placeholder:"Color",description:"Set your color [Here](#extensions)",options:{visible:function(e){return e.show_color}}},{type:"toggle",label:"Hide checkbox",name:"hide_color_checkbox",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0}},{type:"toggle",label:"Hide label",name:"hide_color_label",options:{values:{on:{label:"Yes",value:"0px"},off:{label:"No",value:"inherit"}},oneline:!0},css:{selector:" .ecom-collection__filters-enable-colors .ecom-collection__filters-group-checkbox-label",properties:{"font-size":""}}},{type:"toggle",label:"Hide number count",name:"color_show_count",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:function(e){return e.filter_type!=="collapse"&&e.filter_type!=="dropdown"},oneline:!0}},{type:"popup",label:"Content Aligntment",name:"items_color_alignment",value:"",options:{type:"dropdown",default:!1,icon_type:"alignment",values:{"inline-flex":"Horizontal",block:"Vertical"}},css:{selector:" .ecom-collection__filters-group-list.ecom-collection__filters-enable-colors",properties:{display:""}}}]},{group_title:"Change text",params:[{name:"filter_selected_text",label:"Filter selected",type:"text",options:{placeholder:"{{ count }} selected"}},{name:"filters_selected_text",label:"Filters selected",type:"text",options:{placeholder:"{{ count }} selected"}},{type:"text",name:"clear_text",label:"Clear filter",value:"Clear all"},{name:"reset_filter",label:"Filter reset",type:"text",options:{placeholder:"Reset"}},{type:"text",name:"max_price_text",label:"Max price",value:"Max price"}]},{group_title:"Menu",params:[{type:"toggle",label:"Show menu",name:"show_sub_menu",options:{values:{on:{label:"Show",value:!0},off:{label:"Hide",value:!1}}},css:!1},{type:"toggle",label:"Show all item(by default)",name:"show_all_items_menu",options:{visible:e=>e.show_sub_menu===!0,values:{on:{label:"Show",value:!0},off:{label:"Hide",value:!1}}},css:!1},{type:"picker",name:"link_list",label:"Menu",options:{visible:e=>e.show_sub_menu===!0,type:"menu",layout:"list",multiple:!1}},{name:"tab",type:"tab",value:"normal",options:{visible:e=>e.show_sub_menu===!0,tabs:[{name:"normal",title:"Normal"},{name:"active",title:"Active"}]},css:{isCss:!1}},{type:"picker",label:"Icon",name:"icon_menu",options:{visible:e=>e.tab==="normal"&&e.show_sub_menu===!0,reset:!1,type:"icon",multiple:!1},css:{isCss:!1}},{type:"picker",label:"Icon",name:"icon_menu_active",options:{visible:e=>e.tab==="active"&&e.show_sub_menu===!0,reset:!1,type:"icon",multiple:!1},css:{isCss:!1}}]}]},link_list(){return this.data&&this.data.settings&&this.data.settings.link_list&&this.data.settings.link_list.value?this.data.settings.link_list.value:null},icon_menu(){var e,l;return(l=(e=this.data)==null?void 0:e.settings)==null?void 0:l.icon_menu},icon_menu_active(){var e,l;return(l=(e=this.data)==null?void 0:e.settings)==null?void 0:l.icon_menu_active},show_dropdown_arrow(){var e;return this.data.settings.filter_type==="dropdown"||((e=this.data.settings)==null?void 0:e.use_accordion)},show_count(){return!!(this.data.settings&&this.data.settings.show_count)},hide_zero(){return!!(this.data.settings&&this.data.settings.hide_zero)},dropdown_max(){return this.data.settings.filter_type==="dropdown"&&this.data.settings.number_max>=0},show_sub_menu(){var e,l;return(l=(e=this.data)==null?void 0:e.settings)==null?void 0:l.show_sub_menu},show_all_items_menu(){var e,l;return(l=(e=this.data)==null?void 0:e.settings)==null?void 0:l.show_all_items_menu},javascript(){return function(){let e=this.$el,l=this.isLive;const n=this;e.querySelectorAll(".ecom-collection__filters-group-list").forEach(o=>{o.childNodes.length&&o.closest(".ecom-collection__filters-group").classList.remove("ecom-d-none")});function E(){e.querySelector(".ecom-collection__filters-dropdown").classList.add("ecom-filter-dropdown-desktop");let o=e.querySelectorAll(".ecom-filter-dropdown-desktop .ecom-collection__filters-group .ecom-collection__filters-group-summary");!o||o.forEach(t=>{let i=t.closest(".ecom-collection__filters-group"),r=i.dataset.attrsMax,s=i.querySelectorAll(".ecom-collection__filters-group-list-item-max"),p=i.querySelector(".ecom-more-filter");p&&p.addEventListener("click",()=>{v(s),p.style.display="none"}),s.length>0&&r&&(r=parseInt(r),v(s,r)),t.addEventListener("click",()=>{let d=t.closest(".ecom-collection__filters-group");d.classList.contains("active")?d.classList.remove("active"):(o.forEach(m=>m.closest(".ecom-collection__filters-group").classList.contains("active")&&m.closest(".ecom-collection__filters-group").classList.remove("active")),d.classList.add("active"))})})}function v(o,t){o.forEach((i,r)=>{t===void 0||r<t?i.style.display="block":i.style.display="none"})}const S=this.settings.collapse_mobile;this.settings.filter_type=="dropdown"&&E();const _=e.querySelector("#ecom-modal-block"),w=e.querySelector("#button_menu_block"),f=_?_.closest("div.ecom-core.core__block"):"",g=_?_.closest("div.ecom-column.ecom-core"):"",k=e.querySelector("#ecom-modal-close"),L=window.matchMedia("only screen and (max-width: 911px)");L.addEventListener("change",M),S&&L.matches&&M(L);function C(){_.style.display="block",f&&(f.style.zIndex="99"),g&&(g.style.zIndex="99"),document.querySelector("body").classList.add("ecom-filter-opened")}function y(){_.style.display="none",f&&(f.style.zIndex="1"),g&&(g.style.zIndex="1"),document.querySelector("body").classList.remove("ecom-filter-opened")}function M(o){let t=e.querySelectorAll(".ecom-collection__filters-group--display");o.matches?n.settings.collapse_mobile&&_&&w&&k&&(_&&(_.style.display="none"),n.settings.filter_type=="dropdown"&&t.forEach(i=>{i.style.position="relative"}),w.addEventListener("click",()=>{C()}),k.addEventListener("click",()=>{y()}),window.addEventListener("click",()=>{event.target==_&&y()}),f&&(f.style.zIndex="99"),g&&(g.style.zIndex="99")):(_&&(_.style.display="block"),f&&(f.style.zIndex="1"),g&&(g.style.zIndex="1"),n.settings.filter_type=="dropdown"&&t&&t.forEach(i=>{i.style.position="absolute"}))}this.settings.filter_type=="collapse"&&(w.addEventListener("click",()=>{C()}),k.addEventListener("click",()=>{y()}),window.addEventListener("click",()=>{event.target==_&&y()}));function z(){let o=1,t=15e3;if(!e.querySelector(".ecom-collection__filters-group-price"))return!0;let i=e.querySelector(".ecom-collection__filters-price-range-max"),r=e.querySelector(".ecom-collection__filters-price-range-min"),s=e.querySelector("#ecom-collection-filters--input-min"),p=e.querySelector("#ecom-collection-filters--input-max");o=parseFloat(r.getAttribute("min")),t=parseFloat(i.getAttribute("max"));function d(c){return window.EComposer.formatMoney(c)}function m(){let c=(t-o)*s.value/100+o,u=(t-o)*p.value/100+o;r.value=Math.floor(c),i.value=Math.floor(u),e.querySelector("#ecom-collection-filters--price-from").innerHTML=`${d(Math.floor(c*100))}`,e.querySelector("#ecom-collection-filters--price-to").innerHTML=`${d(Math.floor(u*100))}`}p.addEventListener("input",()=>{let c=parseInt(s.value),u=parseInt(p.value);u<c+10&&(s.value=u-10,c===parseInt(s.min)&&(p.value=10)),m()}),s.addEventListener("input",()=>{let c=parseInt(s.value),u=parseInt(p.value);c>u-10&&(p.value=c+10,u===parseInt(p.max)&&(s.value=parseInt(p.max)-10)),m()})}function H(){var o=e.querySelectorAll(".ecom-shopify__menu-item--has-children > .ecom-menu_item, .ecom-shopify__menu-child-link-item--has-children > .ecom-menu_item");if(!!o){var t,i="false",r=e.querySelector(".ecom-shopify_menu");if(r&&r.dataset.showAll)var i=r.dataset.showAll;for(t=0;t<o.length;t++){let s=function(p){let d=p.nextElementSibling,m=null;if(p.classList.contains("ecom-item-active")){if(p.classList.remove("ecom-item-active"),d){d.style.maxHeight=null;var c=d.querySelectorAll(".ecom-menu_item");c&&c.forEach(u=>{var T=u.nextElementSibling;T&&(T.style.maxHeight=null),u.classList.remove("ecom-item-active")}),m=p.closest(".ecom-shopify__menu-sub-menu"),m&&(m.style.maxHeight=parseInt(m.style.maxHeight)-d.scrollHeight+"px")}}else p.classList.add("ecom-item-active"),d&&(m=p.closest(".ecom-shopify__menu-sub-menu"),m&&(m.style.maxHeight=parseInt(m.style.maxHeight)+d.scrollHeight+"px"),d.style.maxHeight=d.scrollHeight+"px")};i&&i=="true"&&s(o[t]),o[t].addEventListener("click",function(p){p.preventDefault(),s(this)})}}}H();const A=function(){return{searchParamsInitial:window.location.search.slice(1),searchParamsPrev:window.location.search.slice(1),init(){const o=e.querySelectorAll(".ecom-collection__filters-form");if(o.length==0)return;const t=o[0].closest(".ecom-sections[data-section-id]"),i=o[0].closest(".ecom-row.ecom-section");!t||!t.dataset.sectionId||(this.facetForms=o,this.wrapper=t,this.sectionId=t.dataset.sectionId,this.wrapper_product=i,this.debouncedOnSubmit=this.debounce(r=>{this.onSubmitHandler(r)},100),this.facetForms.forEach(r=>r.addEventListener("input",this.debouncedOnSubmit.bind(this))),this.handleRemoveFilter(),this.setListeners())},setListeners(){const o=t=>{const i=t.state?t.state.searchParams:this.searchParamsInitial;if(i===this.searchParamsPrev)return;const r=`${window.location.pathname}?section_id=${this.sectionId}&${i}`;this.handleLoadProduct(r,i,t,!1)};window.addEventListener("popstate",o)},debounce(o,t){let i;return(...r)=>{clearTimeout(i),i=setTimeout(()=>o.apply(this,r),t)}},onSubmitHandler(o){o.preventDefault();const t=[];this.facetForms.forEach(s=>{t.push(this.createSearchParams(s))});const i=t.join("&"),r=`${window.location.pathname}?section_id=${this.sectionId}&${i}`;this.handleLoadProduct(r,i,o)},createSearchParams(o){const t=new FormData(o);return new URLSearchParams(t).toString()},handleLoadProduct(o,t,i,r=!0){const s=this;this.searchParamsPrev=t;const p=async function(d){return(await fetch(d,{method:"GET",headers:{"Content-Type":"text/html"}})).text()};s.wrapper_product.classList.add("ecom-doing-filter"),p(o).then(function(d){const m=document.createElement("div");m.innerHTML=d;const c=s.wrapper_product.querySelector(".ecom-collection__product-main.ecom-collection_product_template_collection");!c||(c.innerHTML=m.querySelector(".ecom-collection__product-main.ecom-collection_product_template_collection").innerHTML,r&&s.updateURLHash(t),s.renderFilters(m,i),s.renderActiveFacets(m),c.querySelector(".ecom-collection__product--wrapper-items")&&c.dispatchEvent(new CustomEvent("ecom-products-init",{detail:{wrapper:c}})))}).finally(function(){s.wrapper_product.classList.remove("ecom-doing-filter")})},updateURLHash(o){history.pushState({searchParams:o},"",`${window.location.pathname}${o&&"?".concat(o)}`)},renderActiveFacets(o){const t=o.querySelector(".ecom-collection__filters-applied-block"),i=this.wrapper_product.querySelector(".ecom-collection__filters-applied-block"),r=this.wrapper_product.querySelectorAll(".ecom-collection__filter-values");!i&&t?this.facetForms.forEach(s=>{s.prepend(t)}):i&&t?i.innerHTML=t.innerHTML:i&&!t&&this.facetForms.forEach(s=>{s.querySelector(".ecom-collection__filters-applied-block")&&s.querySelector(".ecom-collection__filters-applied-block").remove()}),r.length>0&&r.forEach(s=>{t?s.innerHTML=t.querySelector(".ecom-collection-filters--active_values").innerHTML:s.innerHTML=""})},renderFilters(o,t){const i=o.querySelectorAll(".ecom-js-filter"),r=c=>{if(t.target===window)return!1;const u=t?t.target.closest(".ecom-js-filter"):void 0;return u?c.dataset.index===u.dataset.index:!1},s=Array.from(i),p=Array.from(i).find(r);s.forEach(c=>{this.wrapper_product.querySelector(`.ecom-js-filter[data-index="${c.dataset.index}"]`).innerHTML=c.innerHTML}),d(o,this.wrapper_product),p&&m(p,t.target.closest(".ecom-js-filter"));function d(c,u){const T=c.querySelector(".ecom-collection-filters--active_values-list"),I=u.querySelector(".ecom-collection-filters--active_values-list");!T||!I||(I.innerHTML=T.innerHTML)}function m(c,u){if(!u)return;const T=u.querySelector(".ecom-collection__filters-group--selected"),I=c.querySelector(".ecom-collection__filters-group--selected"),$=u.querySelector(".ecom-collection__filters-group-summary"),P=c.querySelector(".ecom-collection__filters-group-summary");I&&T&&(u.querySelector(".ecom-collection__filters-group--selected").outerHTML=c.querySelector(".ecom-collection__filters-group--selected").outerHTML),$&&P&&(u.querySelector(".ecom-collection__filters-group-summary").outerHTML=c.querySelector(".ecom-collection__filters-group-summary").outerHTML)}},handleRemoveFilter(){this.facetForms.forEach(t=>{t.addEventListener("click",o.bind(this))});function o(t){if(t.target.closest(".ecom-collection__filters-group-list-item-clear")||t.target.closest(".ecom-collection__filters-group-reset-filter")){t.preventDefault();const i=t.target.closest(".ecom-collection__filters-group-list-item-clear")||t.target.closest(".ecom-collection__filters-group-reset-filter");if(!i.href)return;const r=i.href.indexOf("?")==-1?"":i.href.slice(i.href.indexOf("?")+1),s=`${window.location.pathname}?section_id=${this.sectionId}&${r}`;this.handleLoadProduct(s,r,t)}}}}}();l&&(z(),this.settings.enable_ajax?A.init():this.$el.querySelector(".ecom-collection__filters-form").addEventListener("change",function(){this.submit()}))}},requestShopifyType(){return{shopify_type:"collection"}},css(){return`
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
                    border-none;
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
                }

                #ecom-modal-close{
                    position:absolute;
                    right: 20px;
                    top:20px;
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
                            min-width:300px
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
                            border:1px solid #333;
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
                        @media screen and (max-width: 911px) {
                            .ecom-collection__filters-dropdown .ecom-container-filter-list{
                                display:block;
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


            `},default(){return{settings:{title:"Filter by",show_count:!0,show_applied_filters:!0,applied_title:"Applied filters",show_color:!1,option_name:"Color",filter_type:"block",filter_selected_text:"{{count}} selected",filters_selected_text:"{{count}} selected",reset_filter:"Reset",collapse_mobile:!0,items_color_alignment:"inline-flex",icon:{value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M96 0C104.8 0 112 7.164 112 16V81.6C148.5 89.01 176 121.3 176 160C176 198.7 148.5 230.1 112 238.4V496C112 504.8 104.8 512 96 512C87.16 512 80 504.8 80 496V238.4C43.48 230.1 16 198.7 16 160C16 121.3 43.48 89.01 80 81.6V16C80 7.164 87.16 0 96 0zM96 208C122.5 208 144 186.5 144 160C144 133.5 122.5 112 96 112C69.49 112 48 133.5 48 160C48 186.5 69.49 208 96 208zM336 352C336 390.7 308.5 422.1 272 430.4V496C272 504.8 264.8 512 256 512C247.2 512 240 504.8 240 496V430.4C203.5 422.1 176 390.7 176 352C176 313.3 203.5 281 240 273.6V16C240 7.164 247.2 0 256 0C264.8 0 272 7.164 272 16V273.6C308.5 281 336 313.3 336 352zM256 400C282.5 400 304 378.5 304 352C304 325.5 282.5 304 256 304C229.5 304 208 325.5 208 352C208 378.5 229.5 400 256 400zM432 496C432 504.8 424.8 512 416 512C407.2 512 400 504.8 400 496V270.4C363.5 262.1 336 230.7 336 192C336 153.3 363.5 121 400 113.6V16C400 7.164 407.2 0 416 0C424.8 0 432 7.164 432 16V113.6C468.5 121 496 153.3 496 192C496 230.7 468.5 262.1 432 270.4V496zM416 144C389.5 144 368 165.5 368 192C368 218.5 389.5 240 416 240C442.5 240 464 218.5 464 192C464 165.5 442.5 144 416 144z"></path></svg>',cate:"Light"},icon_menu:{id:"B9FJda3u",name:"angle-down",cate:"Solid",url:"",value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path></svg>',thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path></svg>'},icon_menu_active:{id:"EWUwgzJy",name:"angle-up",cate:"Solid",url:"",value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"></path></svg>',thumbnail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"></path></svg>'},show_sub_menu:!0,show_all_items_menu:!1},style:{filter_title:{textTextAlign:"left",spacing:{margin:{bottom:"30px"}},textTypography:{"text-transform":"uppercase"}},applied_filters:{textTextAlign:"left",spacingTitle:{margin:{bottom:"10px"}},iconFontSize:"10px",iconPrimaryColor:"#0d0c0c",spacing:{margin:{bottom:"10px",right:"10px",top:"0px",left:"0px"},padding:{top:"6px",left:"15px",bottom:"6px",right:"15px"}},tab:"normal",textTypography:{"font-size":"18px","font-weight":"300"},buttonBackgroundnormalmode:{classic:{"background-color":"#cccccc"}},buttonBackgroundhovermode:{classic:{"background-color":"#e6e3e3"}}},filter_type_title:{textTextAlign:"left",spacing:{margin:{top:"10px",bottom:"4px"},padding:{bottom:"3px"}},textColor:"#080707",textTypography:{"text-transform":"uppercase","font-size":"16px"},border:{"border-style":"solid","border-width":{bottom:"1.5px"}}},filter_count:{textTextAlign:"left"},filter_selected:{textTextAlign:"left",spacing:{margin:{bottom:"8px"}}},checkbox:{textTextAlign:"left",tab:"active",popup:{"border-style":"solid","border-width":{top:"0.8px",left:"0.8px",bottom:"0.8px",right:"0.8px"}},"border-radius":{top:"4px",left:"4px",bottom:"4px",right:"4px"},backgroundHover:{classic:{"background-color":"#0691b1"}},popupHover:{"border-style":"none"},transition:300,backgroundActive:{classic:{"background-color":"#0691b1"}},popupActive:{"border-style":"none"},textTypography:{"font-size":"14px"},items_gap:"10px",width:"20px",height:"20px"},filter_button_reset:{spacing:{margin:{bottom:"8px"}}},filter_slide_price:{colorSlidenormal:"#111827",colorSlide:"rgba(17, 24, 39, 0.2)"},filter_general:{spacing:{padding:{top:"15px",left:"15px",bottom:"15px",right:"15px"}}},filter_value_content:{spacing:{margin:{right:"0px"},padding:{top:"10px",left:"10px",bottom:"10px",right:"10px"}}},filter_button_collapse:{tab:"normal",buttonTypography:{"font-size":"14px","text-transform":"uppercase"},buttonBackgroundnormalmode:{classic:{"background-color":"#0691b1"}},buttonColornormalmode:"#fff",buttonBordernormalmode:{"border-style":"none"},buttonBorderRadiusnormalmode:{top:"4px",left:"4px",bottom:"4px",right:"4px"},spacing:{margin:{right:"0px"},padding:{top:"10px",left:"20px",bottom:"10px",right:"20px"}}},filter_icon_collapse:{iconFontSize:"14px",iconPrimaryColor:"#fff",icon_position:-1,spacing:"4px"},dropdown_heading:{tab:"normal",buttonBorderhovermode:{"border-style":"none"},spacing:{margin:{right:"26px"}},buttonTypography:{"font-size":"16px"},buttonBordernormalmode:{"border-style":"none"}},option_color:{width:"24px",height:"24px","border-radius":{top:"50%",left:"50%",bottom:"50%",right:"50%"},spacing:{margin:{right:"6px",left:"6px"}},border:{"border-style":"solid","border-width":{top:"0.8px",left:"0.8px",bottom:"0.8px",right:"0.8px"},"border-color":"#dbd3d3"}},menu:{spacing:{padding:{bottom:"20px"}},spacing__mobile:{padding:{top:"40px"}},spacing__tablet:{padding:{top:"30px"}},width__tablet:"52%",width__mobile:"56%"}}}}},methods:{style(){let e=[{group_alias:"text:spacing",options:{group_title:"Title",group_name:"filter_title",selector:" .ecom-collection__filters-heading"}},{group_alias:"box",options:{group_title:"Option value content",group_name:"filter_value_content",selector:" .ecom-collection__filters-group-list"},modify:{params:[{position:10,fields:{alias:"spacing"}},{position:3,fields:[{alias:"width"},{alias:"height"},{name:"max_height",label:"Max Height",type:"number",options:{responsive:!0,units:{px:{min:0,max:1e3}}},css:{properties:{"max-height":""}}}]}]}},{group_alias:"text:spacing",options:{group_name:"filter_type_title",group_title:"Option name",selector:" .ecom-collection__filters-group-summary--title"},modify:{params:{position:4,fields:{alias:"border"}}}},{group_alias:"text:spacing",options:{group_name:"filter_selected",group_title:"Option selected",selector:" .ecom-collection__filters-group--selected"}},this.data.settings.use_accordion&&this.data.settings.filter_type!=="dropdown"?{group_alias:"box",options:{group_title:"Items",group_name:"box-item-conlapse",selector:" details.ecom-collection__filters-group-not__dropdown"},modify:{params:{position:30,fields:{alias:"spacing"}}}}:null,this.data.settings.number_button&&this.data.settings.filter_type==="dropdown"?{group_alias:[{title:"Label",type:"text:spacing",selector:"root .ecom-collection__filters-group-list-item .ecom-collection__filters-group-checkbox-label"},{title:"Button",type:"button"}],options:{group_name:"filter_value_label",group_title:"Option values",selector:" .ecom-more-filter"}}:{group_alias:["text","box"],options:{group_title:"Option values",group_name:"checkbox",selector:" .ecom-collection__filters-group-list-item"},modify:{params:[{position:0,fields:[{type:"paragraph",content:"** Label **"}]},{position:5,fields:[{name:"items_gap",label:"Items Gap",type:"number",options:{responsive:!0,units:{px:{min:0,max:100}}},css:{selector:"root .ecom-collection__filters-group-list",properties:{gap:""}}},{alias:"spacing",options:{name:"items_gap_spacing"}}]},{position:20,fields:[{type:"line"},{type:"paragraph",content:"** Checkbox **"},{alias:"width",options:{css:{selector:"root .ecom-collection__filters-group-checkbox--input"}}},{alias:"height",options:{css:{selector:"root .ecom-collection__filters-group-checkbox--input"}}},{alias:"spacing",options:{name:"checkbox_spacing",css:{selector:"root .ecom-collection__filters-group-checkbox--input"}}},{type:"line"},{type:"tab",name:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"},{name:"active",title:"Active"}]},css:!1},{alias:"background",options:{css:{selector:"root .ecom-collection__filters-group-checkbox > input"},options:{visible:l=>l.tab==="normal"}}},{alias:"background",options:{name:"backgroundHover",css:{properties:{background:""},selector:"root .ecom-collection__filters-group-checkbox > input:hover"},options:{visible:l=>l.tab==="hover"}}},{alias:"background",options:{name:"backgroundActive",css:{properties:{background:""},important:!0,selector:"root .ecom-collection__filters-group-checkbox > input:checked"},options:{visible:l=>l.tab==="active"}}},{type:"popup",label:"Border",name:"popup",options:{type:"border",visible:l=>l.tab==="normal"},css:{selector:"root .ecom-collection__filters-group-checkbox > input"}},{type:"popup",label:"Border",name:"popupHover",options:{type:"border",visible:l=>l.tab==="hover"},css:{properties:{border:""},selector:"root .ecom-collection__filters-group-checkbox > input:hover"}},{name:"transition",type:"number",label:'Transition Duration <span class="lowercase">(ms)</span>',options:{min:0,max:5e3,visible:{keep_data:!0,condition:l=>l.tab==="hover"}},css:{selector:"root .ecom-collection__filters-group-checkbox--input",properties:{transition:"all %value%ms ease"}}},{type:"popup",label:"Border",name:"popupActive",options:{type:"border",visible:l=>l.tab==="active"},css:{properties:{border:""},important:!0,selector:"root .ecom-collection__filters-group-checkbox > input:checked"}},{type:"dimension",label:"Border radius",name:"border-radius",options:{type:"radius",units:"default",visible:l=>l.tab==="normal"},css:{selector:"root .ecom-collection__filters-group-checkbox > input"}},{type:"dimension",label:"Border radius",name:"border-radiusHover",options:{units:"default",type:"radius",visible:l=>l.tab==="hover"},css:{properties:{"border-radius":""},selector:"root .ecom-collection__filters-group-checkbox > input:hover"}},{type:"dimension",label:"Border radius",name:"border-radiusActive",options:{units:"default",type:"radius",visible:l=>l.tab==="active"},css:{properties:{"border-radius":""},important:!0,selector:"root .ecom-collection__filters-group-checkbox > input:checked"}}]}]}},{group_alias:"button",options:{group_name:"filter_button_reset",group_title:"Reset button",selector:" .ecom-collection__filters-group-reset-filter"}},{group_name:"filter_slide_price",group_title:"Price range",selector:" .ecom-collection-filters--price-range input[type=range]",params:[{type:"paragraph",content:"** Price value **"},{type:"popup",label:"Typography",name:"filters_price_typography",options:{global:{type:"typography"},oneline:!0,responsive:!0,type:"typography"},css:{selector:"root .ecom-collection-filters--price"}},{label:"Text Color",name:"filters_price_color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{color:""},selector:"root .ecom-collection-filters--price"}},{name:"filter_price_text_shadow",label:"Text Shadow",type:"popup",options:{oneline:!0,type:"text-shadow"},css:{selector:"root .ecom-collection-filters--price"}},{type:"paragraph",content:"** Price seperate **"},{type:"popup",label:"Typography",name:"filter_price_seperate_typo",options:{global:{type:"typography"},oneline:!0,responsive:!0,type:"typography"},css:{selector:"root .ecom-collection-filters--seperate"}},{name:"filter_price_seperate_color",label:"Text Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{color:""},selector:"root .ecom-collection-filters--seperate"}},{name:"filter_price_text_shadown",label:"Text Shadow",type:"popup",options:{oneline:!0,type:"text-shadow"},css:{selector:"root .ecom-collection-filters--seperate"}},{alias:"spacing",options:{name:"filter_price_seperate_spacing",css:{selector:"root .ecom-collection-filters--seperate"}}},{type:"paragraph",content:"** Slider **"},{alias:"width",options:{css:{selector:"root  .ecom-collection-filters--price-range input[type=range],root .ecom-collection-filters--multi-range"}}},{type:"number",name:"height",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:1,max:20}}},css:{properties:{"--ecom-size-custom":""}}},{name:"colorSlide",label:"Color slider",type:"color",options:{global:{type:"colors"}},css:{properties:{"--ecom-color-custom":""}}},{type:"popup",label:"Border",name:"popupActive",options:{type:"border"},css:{properties:{border:""},important:!0}},{type:"dimension",label:"Border radius",name:"border-radius",options:{type:"radius",units:"default"},css:{properties:{"border-radius":""}}},{type:"line"},{type:"paragraph",content:"** Thumb **"},{alias:"width",options:{name:"widththumb",options:{units:{px:{min:1,max:100}}},css:{properties:{"--width-thumb-custom":""}}}},{type:"number",name:"heightthumb",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:1,max:100}}},css:{properties:{"--height-thumb-custom":""}}},{name:"colorSlidenormal",label:"Color thumb",type:"color",options:{global:{type:"colors"}},css:{properties:{"--bg-thumb-custom":""}}}]}].filter(l=>l);return this.data.settings.show_applied_filters&&e.splice(1,0,{options:{group_name:"applied_filters",group_title:"Applied filters",selector:" .ecom-collection__filters-group-list-item a"},group_alias:[{title:"General",type:"box",selector:"root .ecom-collection__filters-applied-block"},{title:"Title",type:"text",selector:"root .ecom-collection__filters-applied-heading"},{title:"Button",type:"button"},{title:"Remove",type:"icon",selector:"root .ecom-colletion-filters--close-icon"}],modify:{params:[{position:1,fields:{alias:"align-items",options:{label:"Alignment",css:{selector:" root .ecom-collection__filters-applied-block"}}}},{position:6,fields:[{type:"line"},{alias:"spacing",options:{name:"spacingGeneral",css:{selector:" root .ecom-collection__filters-applied-block"}}}]},{position:14,fields:{alias:"spacing",options:{name:"spacingTitle",css:{selector:" root .ecom-collection__filters-applied-heading"}}}},{position:50,fields:{name:"icon_spacing",label:"icon spacing",type:"number",options:{responsive:!0,units:{px:{min:0,max:50}}},css:{selector:" .ecom-colletion-filters--close-icon",properties:{"margin-left":""}}}}]}}),(this.data.settings.filter_type=="collapse"||this.data.settings.collapse_mobile)&&(e.splice(0,0,{group_alias:"button",options:{group_name:"filter_button_collapse",group_title:"Filter button",selector:" .ecom-collection__filters-container > button"}}),this.data.settings.icon&&e.splice(1,0,{group_alias:"icon",options:{group_name:"filter_icon_collapse",group_title:"Filter button icon",selector:" .ecom-collection__filters-container .ecom-filter-collapse-icon"},modify:{params:[{position:4,fields:[{type:"choose",label:"Icon position",name:"icon_position",options:{type:"align-x",values:[-1,1]},css:{properties:{order:""}}},{type:"number",label:"Icon spacing",name:"spacing",options:{units:{px:{min:0,max:200}}},css:{selector:"root #button_menu_block",properties:{gap:""}}}]}]}})),this.data.settings.filter_type=="dropdown"?e.splice(2,0,{group_alias:"button",options:{group_name:"dropdown_heading",group_title:"Dropdown heading",selector:" .ecom-collection__filters-group-dropdown"}}):e.splice(0,0,{group_alias:"box",options:{group_name:"box_filter",group_title:"Filter box",selector:" .ecom-collection__filters-group"},modify:{params:{position:4,fields:{alias:"spacing"}}}}),this.data.settings.show_count&&e.splice(4,0,{group_alias:"text:spacing",options:{group_title:"Option count",group_name:"filter_count",selector:" .ecom-collection__filters--count"}}),this.data.settings.show_color&&e.splice(5,0,{group_title:"Option Color",group_name:"option_color",selector:" .ecom-collection__filters--color",params:[{alias:"width"},{alias:"height"},{alias:"border"},{alias:"border-radius"},{alias:"spacing"}]}),this.data&&e.unshift({group_alias:"box",options:{group_title:"General",group_name:"filter_general",selector:" .ecom-modal-content--mobile, .ecom-modal-content"},modify:{params:[{position:10,fields:{alias:"spacing"}},{position:3,fields:{alias:"width",options:{css:{selector:"root .ecom-modal-content"}}}}]}}),this.link_list&&(e.push({group_title:"Menu",group_name:"menu",selector:" .ecom-shopify_menu",params:[{alias:"width"},{alias:"spacing"},{type:"line"},{type:"paragraph",content:"<strong>Menu items<strong>"},{alias:"spacing",options:{name:"menu_item",css:{selector:" .ecom-menu_item"}}}]}),e.push({group_alias:"items:text",options:{group_name:"menu_title",group_title:"Menu title",selector:"root .ecom-menu_item"},modify:{params:[{position:9,fields:[{type:"line"},{alias:"spacing",options:{css:{selector:" .ecom-menu_title"}}}]}]}}),e.push({group_alias:"items:icon",options:{group_name:"accordion_icon",group_title:"Menu icon",selector:" .ecom-menu_icon"},modify:{params:{position:35,fields:[{type:"line"},{alias:"spacing",options:{css:{selector:"root .ecom-menu_icon"}}}]}}})),e}}},R={class:"ecom-element ecom-collection ecom-collection__filters"},Y={class:"ecom-collection__filters-wrapper"},O={key:0,class:"ecom-collection__filters-container ecom-collection__filters-collapse"},U={id:"button_menu_block",type:"button"},G=["innerHTML"],K=["innerHTML"],W={id:"ecom-modal-block"},J={class:"ecom-modal-content ecom-scroll_bar"},X=a("div",{class:"modal-header"},[a("span",{id:"ecom-modal-close"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})])])],-1),Z=["innerHTML","data-show-all"],Q=["innerHTML"],ee=["innerHTML"],te={key:1,class:"ecom-collection__filters-container ecom-collection__filters-block"},oe=["innerHTML"],ie=["innerHTML"],le=["id"],se={key:0,class:"modal-header"},ne=a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),re=[ne],ce=["innerHTML","data-show-all"],ae=["innerHTML"],pe=["innerHTML"],me={key:2,class:"ecom-collection__filters-container ecom-collection__filters-dropdown"},ue=["innerHTML"],de=["innerHTML"],_e=["id"],fe={key:0,class:"modal-header"},ge=a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),he=[ge],be=["innerHTML"],ve=["innerHTML"];function ye(e,l,n,q,E,v){var S,_,w,f,g,k,L,C,y,M,z,H,A,o,t,i;return h(),b("div",R,[a("div",Y,[n.data.settings.filter_type=="collapse"?(h(),b("div",O,[a("button",U,[(S=n.data.settings)!=null&&S.icon?(h(),b("span",{key:0,class:"ecom-filter-collapse-icon",innerHTML:(_=n.data.settings.icon)==null?void 0:_.value},null,8,G)):x("",!0),a("span",{innerHTML:n.data.settings.title},null,8,K)]),a("div",W,[a("div",J,[X,v.show_sub_menu?(h(),b("div",{key:0,class:"ecom-shopify_menu",innerHTML:e.liquid("linklists"),"data-show-all":(w=v.show_all_items_menu)!=null?w:!1},null,8,Z)):x("",!0),a("h3",{class:"ecom-collection__filters-heading",innerHTML:e.lang(n.data.settings.title,"filter_title")},null,8,Q),a("form",{class:"ecom-collection__filters-form ecom-collection__filters-form-collapse ecom-click","data-stopdrag":"true",innerHTML:e.liquid("filters")},null,8,ee)])])])):x("",!0),n.data.settings.filter_type!=="collapse"&&n.data.settings.filter_type!=="dropdown"?(h(),b("div",te,[a("button",{id:"button_menu_block",class:F(["ecom-button-filter-collapse",(f=n.data.settings)!=null&&f.collapse_mobile?"button_menu_block--mobile":""]),type:"button"},[(g=n.data.settings)!=null&&g.icon?(h(),b("span",{key:0,class:"ecom-filter-collapse-icon",innerHTML:n.data.settings.icon.value},null,8,oe)):x("",!0),a("span",{innerHTML:(k=n.data.settings)==null?void 0:k.title},null,8,ie)],2),a("div",{id:(L=n.data.settings)!=null&&L.collapse_mobile?"ecom-modal-block":"",class:"ecom-modal-block--mobile"},[a("div",{class:F(["ecom-modal-content--mobile",(y=(C=n.data)==null?void 0:C.settings)!=null&&y.collapse_mobile?"ecom-modal-content":""])},[n.data.settings.collapse_mobile?(h(),b("div",se,[a("span",{id:"ecom-modal-close",class:F(["ecom-collapse-close",n.data.settings.collapse_mobile?"ecom-collapse-close--mobile":""])},re,2)])):x("",!0),v.show_sub_menu?(h(),b("div",{key:1,class:"ecom-shopify_menu",innerHTML:e.liquid("linklists"),"data-show-all":(M=v.show_all_items_menu)!=null?M:!1},null,8,ce)):x("",!0),a("h3",{class:"ecom-collection__filters-heading",innerHTML:e.lang(n.data.settings.title,"filter_title")},null,8,ae),a("form",{class:"ecom-collection__filters-form ecom-click","data-stopdrag":"true",innerHTML:e.liquid("filters")},null,8,pe)],2)],8,le)])):x("",!0),n.data.settings.filter_type=="dropdown"?(h(),b("div",me,[a("button",{id:"button_menu_block",class:F(["ecom-button-filter-collapse",n.data.settings.collapse_mobile?"button_menu_block--mobile":""]),type:"button"},[(z=n.data.settings)!=null&&z.icon?(h(),b("span",{key:0,class:"ecom-filter-collapse-icon",innerHTML:(A=(H=n.data.settings)==null?void 0:H.icon)==null?void 0:A.value},null,8,ue)):x("",!0),a("span",{innerHTML:(o=n.data.settings)==null?void 0:o.title},null,8,de)],2),a("div",{id:(t=n.data.settings)!=null&&t.collapse_mobile?"ecom-modal-block":"",class:"ecom-modal-block--mobile"},[a("div",{class:F(["ecom-modal-content--mobile",n.data.settings.collapse_mobile?"ecom-modal-content":""])},[n.data.settings.collapse_mobile?(h(),b("div",fe,[a("span",{id:"ecom-modal-close",class:F(["ecom-collapse-close",(i=n.data.settings)!=null&&i.collapse_mobile?"ecom-collapse-close--mobile":""])},he,2)])):x("",!0),a("h3",{class:"ecom-collection__filters-heading",innerHTML:e.lang(n.data.settings.title,"filter_title")},null,8,be),a("form",{method:"GET",class:"ecom-collection__filters-form ecom-click","data-stopdrag":"true",innerHTML:e.liquid("filters")},null,8,ve)],2)],8,_e)])):x("",!0)])])}const Se=N(B,[["render",ye]]);B.__docgenInfo={exportName:"default",displayName:"CollectionFilter",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Collection/Filter.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{Se as default};
//# sourceMappingURL=Filter.99d9a51f.js.map
