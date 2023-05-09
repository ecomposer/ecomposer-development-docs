import{_ as d,L as p,E as u}from"./preview.a124abb8.js";import{o as m,a as _,x as c}from"./vue.esm-bundler.7f444806.js";import"./chunk-2GDW2BFM.5cb4ba43.js";import"./index.e850844b.js";import"./iframe.c85ce8d3.js";import"../sb-preview/runtime.js";const a={name:"ProductAttribute",mixins:[p,u],props:{data:{type:Object,default(){return{}}}},computed:{attributes(){return this.data&&this.data.settings&&this.data.settings.attributes?this.data.settings.attributes:[]},liquids(){return{attributes:{code:`
                    <table>
                        ${this.attributes.map(t=>{var e,o,s,i,l,n,r;switch(t.type){case"product_options":return`
                                    {%- unless product.has_only_default_variant-%}
                                        <tr>
                                            <td class="table-title">${this.lang((e=t.settings)==null?void 0:e.title,t.type+"_title")}</td>
                                            <td>
                                                <ul class="ecom-product-option-table-list">
                                                    {% for product_option in product.options_with_values %}
                                                        <li>
                                                             <span>
                                                                {{ product_option.name }} :
                                                             </span>
                                                            <span>
                                                                {{ product_option.values | join: ', ' }}
                                                            </span>
                                                        </li>
                                                    {% endfor %}
                                                </ul>
                                            </td>
                                        </tr>
                                    {%- endunless -%}
                                    `;case"product_type":return`
                                        {%- if product.type  and product.type != blank-%}
                                        <tr>
                                            <td class="table-title">${this.lang((o=t.settings)==null?void 0:o.title,t.type+"_title")}</td>
                                            <td>
                                                <div class="ecom-product-option-table-list__link">
                                                    {{product.type | link_to_type}}
                                                </div>
                                            </td>
                                        </tr>
                                        {%- endif -%}
                                    `;case"product_vendor":return`
                                    {% if product.vendor and product.vendor != blank %}
                                        <tr>
                                            <td class="table-title">${this.lang((s=t.settings)==null?void 0:s.title,t.type+"_title")}</td>
                                            <td>
                                                <div class="ecom-product-option-table-list__link">
                                                    {{product.vendor | link_to_vendor}}
                                                </div>
                                            </td>

                                        </tr>
                                    {% endif %}
                                    `;case"product_tags":return`
                                        {%- if product.tags.size > 0 -%}
                                        <tr>
                                            <td class="table-title">${this.lang((i=t.settings)==null?void 0:i.title,t.type+"_title")}</td>
                                            <td>
                                                <div class="ecom-product-option-table-list__link">
                                                {%- capture limit -%}${(l=t.settings)==null?void 0:l.limit}{%-endcapture-%}
                                                {%- assign limit = limit | plus: 0 -%}
                                                {% for tag in product.tags %}
                                                    <a href="{{ routes.all_products_collection_url }}/{{tag | handleize }}" title="{{tag | escape }}" >{{tag }}</a>
                                                    {%- if forloop.index >= limit-%}{% break %}{% endif %}
                                                    {%- unless forloop.last -%},{%- endunless -%}
                                                {% endfor %}
                                                </div>
                                            </td>

                                        </tr>
                                        {%- endif -%}
                                    `;case"product_collections":return`
                                        {%- if product.collections.size > 0  -%}
                                        <tr>
                                            <td class="table-title">${this.lang((n=t.settings)==null?void 0:n.title,t.type+"_title")}</td>
                                            <td>
                                            <div class="ecom-product-option-table-list__link">
                                                {%- capture limit -%}${(r=t.settings)==null?void 0:r.limit}{%-endcapture-%}
                                                {%- assign limit = limit | plus: 0 -%}
                                                {% assign has = false %}
                                                {% for c in product.collections %}
                                                    <a href="{{c.url}}" title="{{c.title | escape }}">{{c.title}}</a>
                                                    {%- unless forloop.last -%},{%- endunless -%}
                                                    {%- if forloop.index >= limit -%}{% break %}{% endif %}
                                                {% endfor %}
                                            </div>
                                            </td>
                                        </tr>
                                        {%- endif -%}
                                    `;default:return""}}).join("")}
                    </table>
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
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-10 ecom-skeleton-big"></div>
                                <div class="ecom-skeleton-col-2 ecom-skeleton-empty ecom-skeleton-big"></div>
                                <div class="ecom-skeleton-col-4"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-6"></div>
                                <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-12"></div>
                            </div>
                        </div>
                        <div class="ecom-skeleton-col-12">
                            <div class="ecom-skeleton-row">
                                <div class="ecom-skeleton-col-10 ecom-skeleton-big"></div>
                                <div class="ecom-skeleton-col-2 ecom-skeleton-empty ecom-skeleton-big"></div>
                                <div class="ecom-skeleton-col-4"></div>
                                <div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-6"></div>
                                <div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
                                <div class="ecom-skeleton-col-12"></div>
                            </div>
                        </div>

                    </div>


                `}}},settings(){return[{group_title:"Attributes",params:[{type:"group",name:"attributes",params:[{type:"product_options",name:"Product options",max:1,settings:[{type:"text",name:"title",label:"Attribute title"}]},{type:"product_type",name:"Product type",max:1,settings:[{type:"text",name:"title",label:"Attribute title"}]},{type:"product_vendor",max:1,name:"Product vendor",settings:[{type:"text",name:"title",label:"Attribute title"}]},{type:"product_tags",name:"Product tags",max:1,settings:[{type:"text",name:"title",label:"Attribute title"},{type:"number",name:"limit",label:"Maximum tags to show",options:{min:1,max:100}}]},{type:"product_collections",name:"Product collections",max:1,settings:[{type:"text",name:"title",label:"Attribute title"},{type:"number",name:"limit",label:"Maximum collections to show",options:{min:1,max:100}}]}]}]}]},css(){return`
                .ecom-product-single__attributes-container table {
                    margin: 0;
                }
                .ecom-product-option-table-list{
                    margin:0;
                    padding:0;
                    list-style:none;
                }
            `},style(){return[{group_alias:"box",options:{group_title:"General",selector:" .ecom-product-single__attributes-container"},modify:{remove:{index:1,length:2},params:[{position:3,fields:{type:"popup",label:"Border",name:"boxBorder",options:{type:"border",oneline:!0},css:{selector:" table, td, th"}}},{position:4,fields:{type:"popup",label:"Shadow",name:"boxShadow",options:{type:"box-shadow",oneline:!0},css:{selector:" table, td, th"}}}]}},{group_name:"attributes_spacing",group_title:"Spacing",selector:" .ecom-product-single__attributes-container tr, .ecom-product-single__attributes-container td",params:[{alias:"spacing"}]},{group_alias:"text",options:{group_title:"Label",group_name:"label",selector:" .ecom-product-single__attributes-container .table-title"},modify:{params:[{position:4,fields:{alias:"width"}},{position:30,fields:{type:"dimension",label:"Padding",name:"padding",options:{units:"default",simple:!0}}}]}},{group_alias:"text",options:{group_title:"Attribute text",group_name:"attribute_text",selector:" .ecom-product-option-table-list"}},{group_alias:"text:hover",options:{group_title:"Attribute link",group_name:"attribute_link",selector:" .ecom-product-option-table-list__link, .ecom-product-option-table-list__link a"},modify:{remove:{index:0,length:1},params:[{position:0,fields:[{type:"choose",label:"Alignment",name:"link_align",options:{oneline:!0,responsive:!0,type:"text-align",values:["left","center","right"]},css:{properties:{"text-align":""}}}]}]}}]},requestShopifyType(){return{shopify_type:"product"}},default(){return{settings:{attributes:[{type:"product_options",settings:{title:"Product options"}},{type:"product_vendor",settings:{title:"Product vendor"}},{type:"product_type",settings:{title:"Product type"}},{type:"product_tags",settings:{title:"Product tags",limit:10}},{type:"product_collections",settings:{title:"Product collections",limit:10}}]},style:{box:{boxBorder:{"border-style":"none"}},label:{width:"30%",textTextAlign:"left",padding:{top:"2px",left:"5px",bottom:"2px",right:"5px"}},attribute_link:{tab:"hover",textTypography:{"text-decoration":"none"},textTransition:186,textColornormalmode:"#363030"},attribute_text:{textColor:"#5e5e5e"},attributes_spacing:{spacing:{margin:{bottom:"0px",top:"0px",left:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}}}}}},methods:{}},g={class:"ecom-element ecom-product-single ecom-product-single__attributes"},v={class:"ecom-product-single__attributes-wrapper"},b=["innerHTML"];function y(t,e,o,s,i,l){return m(),_("div",g,[c("div",v,[c("div",{class:"ecom-product-single__attributes-container",innerHTML:t.liquid("attributes")},null,8,b)])])}const P=d(a,[["render",y]]);a.__docgenInfo={exportName:"default",displayName:"ProductAttribute",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/Attribute.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{P as default};
//# sourceMappingURL=Attribute.21c712a5.js.map
