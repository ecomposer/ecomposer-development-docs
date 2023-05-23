import{L as et,E as tt,J as ot,aF as A,_ as it}from"./preview.fd4b835f.js";import{o as P,a as J,x as q,u as Ke,B as H,C as E,y as M,P as Ze}from"./vue.esm-bundler.2eae420a.js";import"./chunk-2GDW2BFM.4967875d.js";import"./index.e850844b.js";import"./iframe.b0e30ece.js";import"../sb-preview/runtime.js";const Xe={name:"Collectionproducts",presets:!0,vendors:["shopify_option_selection_js","countdown_js","slider_js","slider_css"],hasChild:!0,mixins:[et,tt,ot],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["pagination_style","slidesPerView","slidesPerView__tablet","slidesPerView__mobile","slidesPerGroup","slidesPerGroup__tablet","slidesPerGroup__mobile","spaceBetween","spaceBetween__tablet","spaceBetween__mobile","text_minute","text_hour","text_week","text_second","shows_countdown"]}},computed:{settings(){const o=[{group_title:"General",params:[{type:"popup",label:"Layout",name:"layout",value:"grid",options:{type:"dropdown",default:!1,preview:"title",values:{grid:"Grid",list:"List",slider:"Slider"}},css:{isCss:!1}},{label:"Style",name:"style",type:"popup",options:{preview:"title",type:"dropdown",values:{vertical:"Style 1",horizontal:"Style 2",absolute:"Style 3"},default:!1,visible:{keep_data:!1,condition:e=>["grid","slider"].includes(e.layout)}}},{type:"popup",label:"Image ratio",name:"image_ratio",value:"adapt",options:{type:"dropdown",default:!1,icon_type:"percent",values:{adapt:"Adapt to image",portrait:"Portrait",square:"Square"}}},{type:"number",label:"Maximum products to show",name:"limit",options:{min:1,max:50}},{type:"number",label:"Items per row",name:"slider_items",options:{responsive:!0,min:1,max:9,step:1,slider:!0,visible:{condition:e=>e.layout==="grid"||e.layout==="list"}},css:{selector:" .ecom-collection__product--wrapper-items",properties:{"grid-template-columns":"repeat(%value%,1fr)"}}},{name:"column_gap",label:"Column gap",type:"number",options:{min:0,max:100,responsive:!0,visible:{keep_data:!1,condition:e=>e.layout=="grid"}},css:{properties:{"column-gap":"%value%px"},selector:"root .ecom-collection__product--wrapper-items "}},{type:"number",label:"Image width",name:"image_grid_template_column",options:{responsive:!0,units:{"%":{min:0,max:100}},visible:e=>e.layout==="list"},css:{selector:" .ecom-collection__product-item--wrapper",properties:{"grid-template-columns":"%value% auto"}}},{type:"number",label:"Spacing",name:"product_list_spacing",options:{responsive:!0,units:{px:{min:0,max:100}},visible:e=>e.layout==="list"},css:{selector:" .ecom-collection__product-item--wrapper",properties:{"grid-gap":"%value%"}}},{name:"row_gap",label:"Row gap",type:"number",options:{min:0,max:100,responsive:!0,visible:{keep_data:!1,condition:e=>e.layout!=="slider"}},css:{properties:{"row-gap":"%value%px"},selector:"root .ecom-collection__product--wrapper-items "}},{type:"line",name:"lineGeneral",options:{visible:function(e){return e&&e.layout==="list"}}}]},{group_title:"Product card",params:[{type:"toggle",label:"Product link with collection handle",name:"link_with_collection",value:!0,options:{values:{on:{label:"Show",value:!0},off:{label:"Hide",value:!1}}},css:!1},{type:"toggle",name:"show_secondary_image",value:!0,label:"Show second image on hover",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"toggle",name:"show_description",label:"Show short description",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},css:{isCss:!1}},{type:"number",name:"limit_short_description",value:50,options:{min:10,max:1e3,visible:function(e){return e&&e.show_description===!0}},label:"Maximum words to show"},{type:"toggle",name:"show_vendor",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},label:"Show vendor"},{type:"toggle",name:"show_sku",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},label:"Show SKU"},{type:"text",name:"sku_title",label:"SKU label",options:{visible:function(e){return e&&e.show_sku===!0}}},{type:"toggle",name:"show_type",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},label:"Show type"},{type:"toggle",name:"show_price",options:{oneline:!0,values:{on:{label:"Yes",value:"block"},off:{label:"No",value:"none"}}},label:"Show price",css:{}},{name:"price_type",type:"popup",label:"Price display",value:"first_price",options:{default:!1,type:"dropdown",preview:"title",values:{first_price:"First available variant",min_price:"Price min"},visible:function(e){return e&&e.show_price==="block"}}},{type:"text",label:"Price from text",name:"price_from_text",value:"From",placeholder:"From"},{type:"toggle",name:"show_sale_badge",value:!0,options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},label:"Show sale badge"},{name:"sale_badge_type",type:"popup",label:"Sale badge type",value:"percent",options:{default:!1,type:"dropdown",preview:"title",values:{percent:"Percent",amount:"Amount"},visible:function(e){return e&&e.show_sale_badge===!0}}},{name:"bage_sale",label:"Sale",type:"text",placeholder:"-{{sale}}%%",options:{visible:function(e){return e&&e.show_sale_badge}}},{type:"toggle",name:"show_product_rating",label:"Use rating 3rd party app",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},description:"Select the review app in [settings](#settings/app_settings/apps)"},{type:"toggle",name:"show_product_quickview",label:"Use quickview 3rd party app",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},description:"Select the quickview app in [settings](#settings/app_settings/apps)"},{type:"text",name:"quickview_text",label:"Quickview text",options:{visible:function(e){return e&&e.show_product_quickview},placeholder:"Quickview"}},{type:"picker",label:"Quickview icon",name:"quickview_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:function(e){return e.show_product_quickview}}},{type:"toggle",name:"show_product_wishlist",label:"Use wishlist 3rd party app",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},description:"Select wishlist app in [settings](#settings/app_settings/apps)"},{type:"toggle",name:"show_badges",value:!0,label:"Show badges",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},css:{isCss:!1},description:"Renders 'Sale' or 'Sold Out' and tags if the product matches the condition"},{type:"textarea",label:"Show when product contains tags",name:"badge_tags",description:"Note: divide value with (,).<br>eg:Hot,new,clothing",options:{height:1,visible:function(e){return e.show_badges}}}]},{group_alias:"swiper",options:{options:{keep_data:!1,visible:e=>e.layout=="slider"}},modify:{remove:{name:["line_pagination","title_pagination","slider_pagination_style","slider_spacing_row"]}}},{group_title:"Product variant",params:[{type:"popup",name:"show_picker",options:{type:"dropdown",default:!1,values:{show:"Yes",hide:"No"}},css:{isCss:""},label:"Show variant picker"},{type:"toggle",name:"show_actions",value:!0,options:{oneline:!0,visible:function(e){return e.show_picker==="hide"},values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},label:"Show button"},{type:"popup",label:"Layout",name:"type",value:"dropdown",options:{type:"dropdown",values:{dropdown:"Dropdown",image:"Swatch image picker",color:"Swatch color picker",radio:"Radio"},default:!1,visible:function(e){return e&&e.show_picker==="show"}},css:{isCss:!1}},{type:"paragraph",name:"color_description",content:"Set your color [Here](#extensions/3)",options:{visible:function(e){return e.type==="color"}}},{type:"popup",label:"Shown other options as",name:"option_layout",value:"dropdown",options:{type:"dropdown",default:"false",visible:function(e){return e&&e.show_picker==="show"&&e.type&&["image","color"].includes(e.type)},values:{dropdown:"Dropdown",radio:"Radio",hide:"Hide"}}},{type:"popup",name:"show_option_name",value:!0,options:{oneline:!0,type:"dropdown",preview:"title",default:!1,values:{block:"Yes",none:"No"},visible:function(e){return e&&e.show_picker==="show"}},label:"Show option name",css:{isCss:!1}},{type:"popup",name:"quickshop_layout",label:"Quick shop layout",options:{type:"dropdown",visible:function(e){return e&&e.show_picker==="show"&&e.type!=="dropdown"},default:!1,values:{lite:"Show main option only",full:"Show all product options"}}},{type:"text",label:"Product option to show as swatch",name:"option",value:"Color",placeholder:"Color",description:"Eg: Color or Material",options:{toolbar:!1,visible:function(e){return e&&e.show_picker==="show"&&e.type&&["image","color"].includes(e.type)}}},{type:"line"},{type:"toggle",label:"Show view more button only?",name:"view_more_only",default:!1,options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},oneline:!0}},{type:"text",label:"Add to cart text",name:"add_to_cart",options:{visible:function(e){return e&&!e.view_more_only}}},{type:"text",label:"Pre order text",name:"pre_order",options:{visible:function(e){return e&&!e.view_more_only}}},{type:"picker",label:"Add to cart icon",name:"add_cart_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,options:{visible:function(e){return e&&!e.view_more_only}}}},{type:"popup",label:"Add to cart icon position",name:"add_cart_icon_position",options:{type:"dropdown",values:{before:"Before",after:"After"},visible:{keep_data:!1,condition:e=>e.add_cart_icon&&!e.view_more_only}}},{type:"number",label:"Add to cart icon spacing",name:"atc_icon_spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.add_cart_icon&&!e.view_more_only}},css:{selector:" .ecom-collection__product-simple-add-to-cart",properties:{gap:""}}},{type:"line"},{type:"text",label:"View more text",name:"view_more_text",options:{}},{type:"picker",label:"Icon",name:"view_more_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"popup",label:"Icon position",name:"view_more_icon_position",options:{type:"dropdown",values:{before:"Before",after:"After"},visible:{keep_data:!1,condition:e=>e.view_more_icon}}},{type:"number",label:"View more icon spacing",name:"viewmore_icon_spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.view_more_icon}},css:{selector:" .ecom-collection__product-form__actions--view-more",properties:{gap:""}}},{type:"line"},{type:"text",label:"Sold out text",name:"sold_out_text",options:{}},{type:"picker",label:"Icon",name:"sold_out_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"popup",label:"Icon position",name:"sold_out_icon_position",options:{type:"dropdown",values:{before:"Before",after:"After"},visible:{keep_data:!1,condition:e=>e.sold_out_icon}}},{type:"number",label:"Ion spacing",name:"sold_out_icon_spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.sold_out_icon}},css:{selector:" .ecom-collection__product-form__actions--soldout",properties:{gap:""}}},{type:"line"},{type:"text",label:"Quick shop text",name:"quick_shop_text",value:"Quick shop",options:{visible:function(e){return e.show_picker==="show"&&["image","color"].includes(e.type)&&e.quickshop_layout!=="full"&&!e.view_more_only}}},{type:"picker",label:"Quick shop icon",name:"quick_shop_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:function(e){return e.show_picker==="show"&&["image","color"].includes(e.type)&&e.quickshop_layout!=="full"&&!e.view_more_only}}},{type:"popup",label:"Quick shop icon position",name:"quick_shop_icon_position",options:{type:"dropdown",values:{before:"Before",after:"After"},visible:{keep_data:!1,condition:e=>e.show_picker==="show"&&e.quick_shop_icon&&!e.view_more_only}}},{type:"number",label:"Quick shop ion spacing",name:"quickshop_icon_spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.quick_shop_icon&&!e.view_more_only}},css:{selector:" .ecom-collection__product-form__actions--quickshop",properties:{gap:""}}},{type:"line",name:"line_sprate_cart_action",options:{visible:function(e){return e&&e.show_picker==="show"}}},{type:"popup",name:"action",label:"After added to cart",description:"To enable this feature you must go to the **Extensions** > **Ajax cart** > **Settings** > **Tick on ** [Enable Ajax cart](#extensions/1)",options:{type:"dropdown",default:!1,values:{popup:"Show cart popup",reload:"Reload page",message:"Show a message",cart:"Redirect to cart page",checkout:"Go to checkout page",link:"Go to Special url"}}},{type:"text",name:"added_cart_message",label:"Added item to cart message",options:{placeholder:"Added item to your cart",visible:function(e){return e&&e.show_picker==="show"&&e.action==="message"}}},{type:"link",label:"Target url",name:"link",options:{visible:function(e){return e.show_picker==="show"&&e.action==="link"}}}]},{group_title:"Countdown Promo",params:[{name:"enable_countdown",value:!0,label:"Enable countdown",type:"toggle",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},css:{isCss:!1}},{name:"enable_progress_bar",label:"Enable progress bar",value:!0,options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}},visible:function(e){return e&&e.enable_countdown===!0}},css:{isCss:!1},type:"toggle"},{name:"styleCountdown",label:"Layout",type:"popup",options:{type:"dropdown",default:!1,preview:"title",values:{column:"Vertical",row:"Horizontal"}},css:{selector:" .ecom-collection__product-time--item",properties:{display:"inline-flex","flex-direction":""}}},{type:"text",label:"Title",name:"countdown_title",value:"Hurry up! The sale will end on",placeholder:"Hurry up! The sale will end on",options:{visible:function(e){return e&&e.enable_countdown===!0}}},{type:"line"},{type:"checkbox",name:"shows_countdown",label:"Time labels to show",options:{values:{week:"Week",day:"Day",hour:"Hour",minute:"Minute",second:"Second"}}},{type:"paragraph",content:"See [detailed](https://help.ecomposer.io/docs/elements/shopify-elements/product-grid/#1.4.%20Countdown%20Promo) guide."}]},{group_title:"Change text",params:[{name:"trans_no_item",label:"Title when no product",type:"text"},{type:"text",name:"vendor_title",value:"Vendor",description:"This is visual hidden text",label:"Product Vendor title",placeholder:"Vendor",options:{visible:function(e){return e.show_vendor}}},{type:"text",name:"type_title",value:"Type",description:"This is visual hidden text",label:"Product type title",placeholder:"Type",options:{visible:function(e){return e.show_type}}},{type:"text",name:"sale_text",value:"Sale",label:"Sale badge"},{type:"text",name:"sold_text",value:"Sold",label:"Sold badge"},{type:"text",name:"product_unavailable",label:"Product unavailable",value:"Unavailable"},{type:"text",name:"added_cart_text",label:"Added to cart text",options:{placeholder:"Added item to cart"}},{type:"text",name:"text_week",value:"[%-W] week%!W",description:"Example: [%-W] week%!W",label:"Week",options:{visible:e=>{var m;return(m=e==null?void 0:e.shows_countdown)==null?void 0:m.includes("week")}}},{type:"text",name:"text_day",value:"[%d] day%!D",description:"Example: [%-d] day%!D",label:"Days",options:{visible:e=>{var m;return(m=e==null?void 0:e.shows_countdown)==null?void 0:m.includes("day")}}},{type:"text",name:"text_hour",value:"[%-H] hour%!H",description:"Example:  [%-H] hour%!H",label:"Hours",options:{visible:e=>{var m;return(m=e==null?void 0:e.shows_countdown)==null?void 0:m.includes("hour")}}},{type:"text",name:"text_minute",value:"[%-M] minute%!M",decription:"Example: [%-M] minute%!M",label:"Minutes",options:{visible:e=>{var m;return(m=e==null?void 0:e.shows_countdown)==null?void 0:m.includes("minute")}}},{type:"text",name:"text_second",value:"[%-S] second%!S",description:"Example: [%-S] second%!S",label:"Seconds",options:{visible:e=>{var m;return(m=e==null?void 0:e.shows_countdown)==null?void 0:m.includes("second")}}}]},{group_title:"Product card items ordering",params:[{type:"number",label:"Title",name:"order_title",options:{slider:!0,input:!0,min:1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-item-information-title",properties:{order:""}}},{type:"number",label:"Description",name:"order_description",options:{slider:!0,input:!0,min:1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-description",properties:{order:""}}},{type:"number",label:"Vendor",name:"order_vendor",options:{slider:!0,input:!0,min:1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-item-vendor-element",properties:{order:""}}},{type:"number",label:"SKU",name:"order_sku",options:{slider:!0,input:!0,min:1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-item-sku-element",properties:{order:""}}},{type:"number",label:"Type",name:"order_type",options:{slider:!0,input:!0,min:1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-item-type-element",properties:{order:""}}},{type:"number",label:"Price",name:"order_price",options:{slider:!0,input:!0,min:1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-prices",properties:{order:""}}},{type:"number",label:"Button action",name:"order_button",options:{slider:!0,input:!0,min:1,max:10,responsive:!0},css:{selector:" .ecom-collection__product--actions",properties:{order:""}}},{type:"number",label:"Review",name:"order_reivew",options:{slider:!0,input:!0,min:1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-rating-wrapper",properties:{order:""}}},{type:"number",label:"Variant form",name:"order_variant",options:{slider:!0,input:!0,min:1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-variants",properties:{order:""}}},{type:"number",label:"Count down",name:"order_countdown",options:{slider:!0,input:!0,min:1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-countdown",properties:{order:""}}},{type:"paragraph",content:"The blocks are arranged in order from lowest to highest. For example, block with value 1 will be displayed first and block with value 6 will appear at the bottom."}]}];return["featured","shopify"].includes(this.data.template)&&o[0].params.unshift({type:"popup",name:"product_source",label:"Product source",options:{type:"dropdown",default:!1,values:{collection:"From collection",products:"Specific products",vendor:"Product Vendor",type:"Product Type"}}},{type:"picker",label:"Select collection to show",name:"collection",options:{type:"collection",multiple:!1,visible:e=>!e.product_source||e.product_source=="collection"}},{type:"picker",label:"Select product type to show",name:"product_type",options:{type:"product_type",multiple:!1,layout:"list",visible:e=>e.product_source==="type"}},{type:"picker",label:"Select product vendor to show",name:"product_vendor",options:{type:"product_vendor",layout:"list",multiple:!1,visible:e=>e.product_source==="vendor"}},{type:"picker",label:"Select products to show",name:"products",options:{type:"product",layout:"grid",multiple:!0,visible:e=>e.product_source==="products"},description:"**Notice: ** Specific products has a limit of 20 unique products to show per page. If you want more than 20 products, then consider using a collection instead."},{type:"popup",label:"Sort by",name:"sort_by",options:{type:"dropdown",icon_type:"sorting",preview:"title",visible:function(e){return e.product_source!=="products"},values:{title_asc:"Title A-Z",title_desc:"Title Z-A",price_desc:"Hightest price",price_asc:"Lowest price",created_at_asc:"Oldest",created_at_desc:"Newest"}}}),this.data.template==="collection"&&this.data.settings.layout!=="slider"?o.splice(5,0,{group_title:"Pagination",group_name:"",params:[{type:"popup",name:"pagination_type",label:"Pagination",value:"default",options:{default:!1,type:"dropdown",preview:"title",values:{off:"Off",default:"Default",loadmore:"Load more button",infinit:"Infinite scrolling"},warnings:{content:"Note: Pagination only work on live page !!!"}},css:{selector:" .ecom-pagination-navigation",properties:{display:"if(value !== 'off'){return 'flex' }else{ return 'none' }"}}},{type:"text",label:"Load more text",name:"loadmore_text",value:"Load more",options:{placeholder:"Load more",visible:function(e){return e.pagination_type==="loadmore"}}},{type:"picker",label:"Icon",name:"loadmore_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:function(e){return e.pagination_type==="loadmore"}}},{type:"choose",label:"Icon position",name:"loadmore_icon_position",options:{type:"align-x",values:[-1,1],visible:{keep_data:!1,condition:e=>e.loadmore_icon&&e.pagination_type==="loadmore"}},css:{selector:" .ecom-paginate-action--icon",properties:{order:""}}},{type:"number",label:"Icon spacing",name:"loadmore_icon_spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.loadmore_icon&&e.pagination_type==="loadmore"}},css:{selector:" .ecom-paginate-loadmore--content",properties:{gap:""}}},{name:"pagination_style",label:"Pagination style",type:"popup",options:{type:"dropdown",default:!1,values:{block:"Block",inline:"Inline"},visible:function(e){return e.pagination_type==="default"}}},{type:"popup",label:"Pagination layout",name:"number_type",value:"dropdown",options:{type:"dropdown",default:!1,values:{text:"Button next & previous",text_icon:"Button Next & Previous with icon",icon:"Icon"},visible:function(e){return e.pagination_type==="default"}},css:{isCss:!1}},{type:"picker",name:"icon_prev_page",label:"Prev page icon",options:{type:"icon",output:"value",visible:{keep_data:!1,condition:e=>(e.number_type==="icon"||e.number_type==="text_icon")&&e.pagination_type==="default"}}},{type:"picker",name:"icon_next_page",label:"Next page icon",options:{type:"icon",output:"value",visible:{keep_data:!1,condition:e=>(e.number_type==="icon"||e.number_type==="text_icon")&&e.pagination_type==="default"}}},{type:"text",name:"text_prev_page",label:"Prev page text",options:{visible:function(e){return e.number_type!=="icon"&&e.pagination_type==="default"}}},{type:"text",name:"text_next_page",label:"Next page text",options:{visible:function(e){return e.number_type!=="icon"&&e.pagination_type==="default"}}},{type:"number",name:"grid-column-gap",label:'Spacing between page number **<span class="lowercase">(px)</span>**',options:{units:{px:{min:0,max:100}},visible:function(e){return e.pagination_type==="default"}},css:{selector:" .ecom-pagination-navigation",properties:{"grid-column-gap":""}}}]}):this.data.template==="product"&&(o[0].params.splice(0,0,{type:"group",name:"related_conditions",label:"Select conditions",params:[{type:"type",name:"Product type",max:1,settings:[]},{type:"vendor",name:"Product Vendor",max:1,settings:[]},{type:"collection",name:"Product Collection",max:1,settings:[]}],options:{warnings:{content:"Show the products related with current product watching, Products in Editor is sample data"}}}),o[0].params.splice(1,0,{type:"line"}),o[0].params.splice(14,0,{type:"toggle",name:"show_product_available",value:!0,label:"Show product available only",options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}})),[{type:"line"},{type:"paragraph",content:"<b>Placeholder image</b>",description:"Default image will be displayed if product does not have an image"},{type:"switch",label:"Use custom image",name:"placeholder_image",options:{values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}}},{type:"picker",label:"Custom image",name:"placeholder_image_custom",options:{visible:function(e){return e.placeholder_image===!0},responsive:!1,type:"image",editAlt:!1}},{label:"Shopify image",name:"placeholder_image_shopify",type:"popup",options:{preview:"title",type:"dropdown",values:{"product-1":"Style 1","product-2":"Style 2","product-3":"Style 3","product-4":"Style 4","product-5":"Style 5","product-6":"Style 6"},default:!1,reset:!1,visible:function(e){return e&&e.placeholder_image!==!0}}}].forEach(e=>{o[0].params.push(e)}),o},javascript(){return function(){let o=this.$el;if(!o)return;let n=o.querySelectorAll(".ecom-collection__product-variants"),e=this.isLive;const m=this.settings.sale_badge_type;function y(i,l){var a=l.variantIdField.closest(".ecom-collection__product-item");let s=a.querySelector(".ecom-collection__product-submit"),r=a.querySelector(".ecom-collection__product-price"),c=a.querySelector(".ecom-collection__product-price--regular");c&&c.classList.add("ecom-collection__product--compare-at-price");let p=a.querySelector(".ecom-collection__product-price--bage-sale"),d=a.querySelector(".ecom-collection__product-item-sku-element"),_="";if(i===null){let u=a.querySelector('select[name="variant_id"]'),h=a.querySelector(".product-json"),f=null;try{f=JSON.parse(h.innerHTML)}catch{return 1}let L=a.querySelector("select#"+u.id+"-option-0");if(!L)return;const T=L.value;T&&f.variants.forEach(function($){if($.options.includes(T)){i=$;return}})}if(i){if(r&&(r.innerHTML=window.EComposer.formatMoney(i.price)),c&&(c.innerHTML=window.EComposer.formatMoney(i.compare_at_price)),i.compare_at_price>i.price){c&&(c.style.display="inherit");let u=o.querySelector(".ecom-collection__product-main").dataset.sale;m==="amount"?(_=i.compare_at_price-i.price,p&&(p.style.display="inherit",p.innerHTML=u.replace(/\{{.*\}}/g,window.EComposer.formatMoney(_)))):(_=(i.compare_at_price-i.price)*100/i.compare_at_price,p&&(p.style.display="inherit",p.innerHTML=u.replace(/\{{.*\}}/g,Math.floor(_))))}else c&&(c.style.display="none"),p&&(p.style.display="none",p.innerHTML="");if(d&&(i.sku?(d.querySelector(".ecom-collection__product-item-sku").innerHTML=i.sku,d.style.display="flex"):d.style.display="none"),i.featured_image){let u=a.querySelector(".ecom-collection__product-media img"),h=u.closest("div");h.classList.add("ecom-product-image-loading"),u.setAttribute("src",i.featured_image.src),u.removeAttribute("srcset"),u.addEventListener("load",function(){h.classList.remove("ecom-product-image-loading")})}if(i.options.length)for(var g=0;g<i.options.length;g++)a.querySelectorAll(`.ecom-collection__product-swatch-item[data-option-index="${g}"][data-value="${encodeURI(i.options[g])}"]`).forEach(function(u){let h=u.parentNode.children;for(let f=0;f<h.length;f++)h[f].classList.remove("ecom-product-swatch-item--active");u.classList.add("ecom-product-swatch-item--active")}),a.querySelectorAll(`select.ecom-collection__product-swatch-select[data-option-index="${g}"]`).forEach(function(u){u.value&&(u.value=i.options[g])});s&&(i.available?!i.inventory_management||i.inventory_management&&i.inventory_quantity>0?(s.removeAttribute("disabled"),s.classList.add("ecom-collection__product-form__actions--add"),s.classList.remove("ecom-collection__product-form__actions--soldout"),s.classList.remove("ecom-collection__product-form__actions--unavailable"),s.querySelector(".ecom-add-to-cart-text").innerHTML=s.getAttribute("data-text-add-cart")):i.inventory_policy=="continue"&&i.inventory_quantity<=0&&(s.removeAttribute("disabled"),s.classList.add("ecom-collection__product-form__actions--add"),s.classList.remove("ecom-collection__product-form__actions--soldout"),s.classList.remove("ecom-collection__product-form__actions--unavailable"),s.querySelector(".ecom-add-to-cart-text").innerHTML=s.getAttribute("data-text-pre-order")):(s.setAttribute("disabled","disabled"),s.classList.add("ecom-collection__product-form__actions--soldout"),s.classList.remove("ecom-collection__product-form__actions--add"),s.classList.remove("ecom-collection__product-form__actions--unavailable"),s.querySelector(".ecom-add-to-cart-text").innerHTML=s.getAttribute("data-text-sold-out")))}else r.html=window.EComposer.formatMoney(0),c&&(c.innerHTML=window.EComposer.formatMoney(0),c.style.display="none"),s&&(s.setAttribute("disabled","disabled"),s.classList.add("ecom-collection__product-form__actions--unavailable"),s.classList.remove("ecom-collection__product-form__actions--add"),s.classList.remove("ecom-collection__product-form__actions--soldout"),s.querySelector(".ecom-add-to-cart-text").innerHTML=s.getAttribute("data-text-unavailable"))}function v(i){let l=i.querySelector(".ecom-collection__product-form");if(!l)return;let a=l.querySelector('select[name="variant_id"]'),s=i.querySelector(".product-json"),r=null;try{r=JSON.parse(s.innerHTML)}catch{return 1}new window.EComposer.OptionSelectors(a.id,{product:r,onVariantSelected:y,enableHistoryState:!1}),i.querySelectorAll(".ecom-collection__product-swatch-item").forEach(function(c){c.addEventListener("click",function(){var p=this.closest("li");if(p.classList.contains("ecom-product-swatch-item--active"))return!1;p.parentNode.querySelectorAll(".ecom-product-swatch-item--active").forEach(function(u){u.classList.remove("ecom-product-swatch-item--active")}),p.classList.add("ecom-product-swatch-item--active");var d=p.getAttribute("data-option-index"),_=p.getAttribute("data-value");let g=i.querySelector("select#"+a.id+"-option-"+d);g.value=_,g.dispatchEvent(new Event("change"))})}),i.querySelectorAll("select.ecom-collection__product-swatch-select").forEach(function(c){c.addEventListener("change",function(){var p=this,d=p.getAttribute("data-option-index"),_=p.value;i.querySelectorAll("select#"+a.id+"-option-"+d).forEach(function(g){g.value=_,g.dispatchEvent(new Event("change"))})})})}if(this.settings.layout==="slider"){let i=this.$el,l=i.querySelector(".ecom-swiper-container"),a=l&&l.dataset.optionSwiper;if(!a)return;a=JSON.parse(a),a.pagination={el:i.querySelector(".ecom-swiper-pagination"),type:"bullets",clickable:!0},a.navigation={nextEl:i.querySelector(".ecom-swiper-button-next"),prevEl:i.querySelector(".ecom-swiper-button-prev")},a.autoHeight=!1,new window.EComSwiper(l,a)}n.forEach(v);const t=function(i){i.querySelectorAll(".ecom-collection__product-form__actions--quickshop").forEach(function(l){l.addEventListener("click",function(a){this.style.display="none";let s=this.closest(".ecom-collection__product-item");s.querySelectorAll(".ecom-collection__product-variants").forEach(function(r){r.classList.add("ecom-active")}),s.querySelectorAll(".ecom-collection__product-quick-shop-wrapper").forEach(function(r){r.style.display="inherit"})})}),i.querySelectorAll(".ecom-collection__product-close").forEach(function(l){l.addEventListener("click",function(a){let s=this.closest(".ecom-collection__product-item");s.querySelectorAll(".ecom-collection__product-variants").forEach(function(r){r.classList.remove("ecom-active")}),s.querySelectorAll(".ecom-collection__product-quick-shop-wrapper").forEach(function(r){r.style.display="none"}),s.querySelectorAll(".ecom-collection__product-form__actions--quickshop").forEach(function(r){r.style.display="inherit"})})})};t(o);const S=o.querySelector(".ecom-collection__product-main");let b=S.dataset,x=S.dataset.countdownShows;const k=/\[([^\]]+)\]/gm;var w="";if(x.indexOf("week")>=0&&b.week){let i="",l=b.week.replace(k,(...a)=>(i=a[1],""));w+=`
                            <div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--week">
                                <span class="ecom-collection__product-time--number">
                                    ${i}
                                </span>
                                <span class="ecom-collection__product-time--label">
                                    ${l}
                                </span>
                            </div>`}if(x.indexOf("day")>=0&&b.day){let i="",l=b.day.replace(k,(...a)=>(i=a[1],""));w+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--day">
                                    <span class="ecom-collection__product-time--number">
                                        ${i}
                                    </span>
                                    <span class="ecom-collection__product-time--label">
                                        ${l}
                                    </span>
                                </div> `}if(x.indexOf("hour")>=0&&b.hour){let i="",l=b.hour.replace(k,(...a)=>(i=a[1],""));w+=`
                            <div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--hour">
                                <span class="ecom-collection__product-time--number">
                                    ${i}
                                </span>
                                <span class="ecom-collection__product-time--label">
                                    ${l}
                                </span>
                            </div>
                        `}if(x.indexOf("minute")>=0&&b.minute){let i="",l=b.minute.replace(k,(...a)=>(i=a[1],""));w+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--minute">
                                    <span class="ecom-collection__product-time--number">
                                        ${i}
                                    </span>
                                    <span class="ecom-collection__product-time--label">
                                        ${l}
                                    </span>
                                </div>
                            `}if(x.indexOf("second")>=0&&b.second){let i="",l=b.second.replace(k,(...a)=>(i=a[1],""));w+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--second">
                                    <span class="ecom-collection__product-time--number">
                                        ${i}
                                    </span>
                                    <span class="ecom-collection__product-time--label">
                                        ${l}
                                    </span>
                                </div>`}function C(i){let l=this.closest(".ecom-collection__product-countdown-wrapper"),a=l.querySelector(".ecom-collection__product-countdown-progress-bar"),s=l.querySelector(".ecom-collection__product-countdown-progress-bar--timer"),r=this.getAttribute("data-ecom-countdown-from")||0;if(this.innerHTML=i.strftime(w),a&&r){let c=new Date().getTime(),p=new Date(r),d=p.getTime(),_=i.finalDate.getTime();if(d<c&&_>d){a.style.removeProperty("display");let g=_-d,u=_-c,h=Math.round(u*100/g)+"%";s.style.width=h}else a.style.display="none"}}function B(i){if(i.dataset.ecomCountdown){if(i.dataset.ecomCountdownFrom&&new Date().getTime()>new Date(i.dataset.ecomCountdown).getTime()&&e)return i.closest(".ecom-collection__product-countdown-wrapper").style.display="none",!1;window.EComCountdown&&window.EComCountdown(i,new Date(i.dataset.ecomCountdown),C),i.addEventListener("stoped.ecom.countdown",()=>{i.closest(".ecom-collection__product-countdown-wrapper").style.display="none"})}}if(o.querySelectorAll(".ecom-collection__product-countdown-time").forEach(function(i){B(i)}),e){const i=o.querySelector(".ecom-collection__product-main"),l=function(r){r.preventDefault();const c=this.dataset.get,p=this.closest(".ecom-sections[data-section-id]"),d=o.closest(".ecom-row.ecom-section");if(!c||!p||!p.dataset.sectionId)return;const _=p.dataset.sectionId,g=`${c}&section_id=${_}`;this.classList.add("ecom-loading"),s(g,p,this,"loadmore",d)},a=function(r){function c(d,_){new IntersectionObserver((u,h)=>{u.forEach(f=>{f.isIntersecting&&(_.cb?_.cb(d):p(f.target),h.unobserve(f.target))})},_).observe(d)}function p(d){const _=d.dataset.get,g=d.closest(".ecom-sections[data-section-id]"),u=d.closest(".ecom-row.ecom-section");if(!_||!g||!g.dataset.sectionId)return;const h=g.dataset.sectionId,f=`${_}&section_id=${h}`;s(f,g,d,"infinite",u)}c(r,{})},s=function(r,c,p,d,_){(async function(u){return(await fetch(u,{method:"GET",cache:"no-cache",headers:{"Content-Type":"text/html"}})).text()})(r).then(function(u){const h=document.createElement("div");h.innerHTML=u;const f=h.querySelector(".ecom-collection__product--wrapper-items");if(!f)return;const L=_.querySelector(".ecom-collection__product--wrapper-items"),T=_.querySelector(".ecom-products-pagination-loadmore");for(;f.firstChild;)L.appendChild(f.firstChild);if(f.parentNode.removeChild(f),d==="loadmore"){const $=h.querySelector(".ecom-products-pagination-loadmore");$?T.innerHTML=$.innerHTML:T.remove()}else{p.remove();const $=h.querySelector(".ecom-products-pagination-infinite");$&&(L.after($),a($))}i.dispatchEvent(new CustomEvent("ecom-products-init",{detail:{wrapper:i}}))}).finally(function(){p.classList.remove("ecom-loading")})};if(i&&i.dataset.pagination){const r=i.dataset.pagination;if(r==="loadmore")o.querySelector(".ecom-products-pagination-loadmore-btn")&&o.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",l);else if(r==="infinit"){const c=o.querySelector(".ecom-products-pagination-infinite");if(!c)return;a(c)}}i.addEventListener("ecom-products-init",function(r){const c=r.detail.wrapper;if(!c)return;c.querySelectorAll(".ecom-collection__product-variants").length&&c.querySelectorAll(".ecom-collection__product-variants").forEach(v),c.querySelectorAll(".ecom-collection__product-countdown-time").length&&c.querySelectorAll(".ecom-collection__product-countdown-time").forEach(function(d){B(d)}),t(c),c.querySelector(".ecom-products-pagination-loadmore-btn")&&c.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",l),window.EComposer&&typeof window.EComposer.init=="function"&&window.EComposer.init(),j(c);const p=c.querySelector(".ecom-collection__product--wishlist-wrapper");z(p)})}function j(i){if(i&&i.dataset.reviewPlatform)switch(i.dataset.reviewPlatform){case"product-reviews":if(window.SPR)try{window.SPR.$=window.jQuery,window.SPR.initDomEls(),window.SPR.loadBadges()}catch(l){console.info(l.message)}break;case"judgeme":if(window.jdgm){try{window.jdgm.batchRenderBadges()}catch(l){console.info(l.message)}o.querySelectorAll('[data-average-rating="0.00"]').forEach(function(l){l.style.display="block !important"})}break;case"product-reviews-addon":window.StampedFn&&window.StampedFn.loadBadges();break}}function z(i){if(i)switch(i.dataset.wishlistApp){case"swym-relay":window._swat&&window._swat.initializeActionButtons(".ecom-collection__product-wishlist-button");break;case"wishlist-hero":o.querySelectorAll(".wishlist-hero-custom-button").forEach(function(l){var a=new CustomEvent("wishlist-hero-add-to-custom-element",{detail:l});document.dispatchEvent(a)});break}}if(!e){const i=o.querySelector(".ecom-collection__product-main");j(i);const l=o.querySelector(".ecom-collection__product--wishlist-wrapper");z(l)}}},default(){return{settings:{placeholder_image_shopify:"product-1",placeholder_image:!1,placeholder_image_custom:{value:"/images/placeholder.png"},placeholder_image_shopify:"product-1",layout:"grid",image_ratio:"adapt",show_product_available:!1,show_secondary_image:!0,show_sale_badge:!0,sale_badge_type:"percent",show_badges:!0,enable_countdown:!0,enable_progress_bar:!0,countdown_title:"Hurry up! The sale will end on",sale_text:"Sale",sold_text:"Sold Out",add_to_cart:"Add to cart",pre_order:"Pre order",product_unavailable:"Unavailable",show_variant_label:"block",show_option_name:"none",slider_items:4,show_vendor:!1,show_sku:!1,show_description:!1,show_type:!1,show_price:"block",bage_sale:"-{{sale}}%",show_product_rating:!0,show_product_quickview:!1,show_product_wishlist:!1,vendor_title:"Vendor",type_title:"Type",limit:4,badge_tags:"Hot",trans_no_item:"There are no product yet!",show_picker:"show",show_actions:!0,type:"color",option:"Color",option_layout:"dropdown",quickshop_layout:"lite",shows_countdown:["day","hour","minute","second"],text_week:"[%-W] week%!W",text_day:"[%-d] day%!D",text_hour:"[%-H] hr%!H",text_minute:"[%-M] min%!M",text_second:"[%-S] sec%!S",text_prev_page:"Previous",text_next_page:"Next",number_type:"icon","grid-column-gap":"10px",action:"popup",added_cart_text:"Added to cart",added_cart_message:"Added to cart",slidesPerView__tablet:3,spaceBetween__tablet:30,slidesPerView__mobile:1,spaceBetween__mobile:15,enable_pagination:!0,row_items:4,imagePos:"ecom-flex-column","grid-template-columns":3,show_countdown_on_sale:!1,countdown_from:"2021/11/01 12:00",navigation:!0,slidesPerView:4,slidesPerGroup:1,spaceBetween:30,order_title:1,order_description:2,order_vendor:3,order_sku:4,order_type:5,order_price:4,order_button:9,order_variant:5,icon_prev_page:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',icon_next_page:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',slider_items__tablet:2,slider_items__mobile:1,slider_speed:200,slider_navigation_layout:"classic_full",navigation_position:"center",pagination_position:"bottom_center",slider_prev_icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-secondary" d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"></path></svg>',slider_next_icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-secondary" d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>',slider_spacing:10,price_type:"first_price",styleCountdown:"column",sku_title:"SKU: ",quickview_text:"Quick view",quickview_icon:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zoom-in"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>',order_reivew:2,style:"vertical",column_gap:20},style:{general:{tab:"normal"},products_item:{tab:"normal"},product_image:{imageOpacitynormalmode:1,imageOpacityhovermode:1,spacing:{margin:{bottom:"20px"}},tab:"normal",imageWidth:"100%"},progress_bar:{tab:"normal",spacing:{margin:{top:"10px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}},variant_swatch:{tab:"normal",width:"20px",height:"20px",borderRadius:{top:"50%",left:"50%",bottom:"50%",right:"50%"},spacing:{margin:{right:"5px",top:"0px",left:"0px",bottom:"0px"},padding:{top:"1px",left:"1px",bottom:"1px",right:"1px"}},spacingWraper:{margin:{top:"5px",bottom:"10px"}},border:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#0000001a"},borderHoverMode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#333"},borderActiveMode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#333"}},product_actions:{tab:"normal"},quickshop_close_button:{tab:"normal"},product_wishlist:{"horizontal-orientation":"left","verical-orientation":"top"},pagination:{buttonAlignment:"center",buttonColornormalmode:"#111827",buttonBackgroundnormalmode:{classic:{"background-color":"rgba(17, 24, 39, 0.1)"}},buttonColorhovermode:"#111827",buttonBackgroundhovermode:{classic:{"background-color":"rgba(17, 24, 39, 0.2)"}},padding:{left:"20px",top:"8px",bottom:"8px",right:"20px"},spacing:{margin:{top:"30px"}}},sold_out_button:{buttonAlignment:"flex-start",buttonColornormalmode:"#ffffff",buttonBackgroundnormalmode:{classic:{"background-color":"#111827"}},tab:"normal",buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"300"},buttonWidthnormalmode:"100%",spacing:{margin:{top:"5px",left:"0px",bottom:"5px",right:"0px"},padding:{top:"5px",left:"0px",bottom:"5px",right:"0px"}}},add_to_cart_button:{buttonAlignment:"center",buttonColornormalmode:"#ffffff",buttonBackgroundnormalmode:{classic:{"background-color":"#000"}},buttonBordernormalmode:{"border-style":"none"},buttonColorhovermode:"#ffffff",buttonBackgroundhovermode:{classic:{}},tab:"hover",buttonWidthnormalmode:"100%",buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"300","text-decoration":"none"},spacing:{padding:{top:"8px",bottom:"8px",left:"0px",right:"0px"},margin:{top:"5px",bottom:"5px",left:"0px",right:"0px"}}},unavailable_button:{buttonAlignment:"flex-start",buttonColornormalmode:"#ffffff",buttonBackgroundnormalmode:{classic:{"background-color":"#111827"}},spacing:{padding:{top:"8px",left:"20px",bottom:"8px",right:"20px"},margin:{top:"16px"}},tab:"normal",buttonWidthnormalmode:"100%",buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"300"}},quickshop_button:{buttonAlignment:"flex-start",buttonColornormalmode:"#ffffff",buttonBackgroundnormalmode:{classic:{"background-color":"#000"}},buttonColorhovermode:"#ffffff",buttonBackgroundhovermode:{classic:{}},spacing:{padding:{top:"8px",left:"16px",bottom:"8px",right:"16px"},margin:{top:"5px",bottom:"5px"}},tab:"normal",buttonBordernormalmode:{"border-style":"none"},buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px"},buttonWidthnormalmode:"100%"},quickview_button:{buttonAlignment:"center",buttonColornormalmode:"#ffffff",buttonBackgroundnormalmode:{classic:{"background-color":"#000"}},buttonColorhovermode:"#ffffff",spacing:{padding:{top:"5px",left:"0px",bottom:"5px",right:"0px"},margin:{top:"5px",bottom:"5px"}},tab:"normal",quickview_icon_width:"12px",buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"300","text-decoration":"none"},buttonWidthnormalmode:"100%",buttonBorderRadiusnormalmode:{top:"0px",left:"0px",bottom:"0px",right:"0px"},quickview_icon_spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}},view_more_button:{buttonAlignment:"flex-start",tab:"normal",buttonTypography:{"text-transform":"uppercase","text-decoration":"none"},buttonBackgroundnormalmode:{classic:{"background-color":"#0691b1"}},buttonColornormalmode:"#fff",spacing:{padding:{right:"30px",left:"30px",top:"8px",bottom:"8px"}},buttonBackgroundhovermode:{classic:{"background-color":"#08aacf"}}},sale_price_badge:{"align-self":"flex-start",buttonColor:"#ffffff",buttonBackground:{classic:{"background-color":"#333"}},spacing:{padding:{left:"8px",right:"8px"}},buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"300"}},sale_badge:{"align-self":"flex-start",buttonColor:"#dc2626",buttonBackground:{classic:{"background-color":"#fff"}},spacing:{padding:{left:"11px",right:"11px"},margin:{top:"0px",bottom:"5px"}},buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"300"}},sold_out_badge:{"align-self":"flex-start",buttonColor:"#ffffff",buttonBackground:{classic:{"background-color":"#111827"}},spacing:{padding:{left:"8px",right:"8px"}},buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"300"}},custom_badge:{"align-self":"flex-start",buttonColor:"#ffffff",buttonBackground:{classic:{"background-color":"#111827"}}},show_vendor:{textColor:"#df5641",textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"300"}},product_price:{"text-align":"left",textColor:"#6D7175",textTypography:{"font-weight":"300","font-size":"15px","font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"}}},product_title:{tab:"normal",textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"14px","text-decoration":"none","font-weight":"300"},textColornormalmode:"#6D7175",spacingNormal:{margin:{top:"10px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}},variant_select:{tab:"normal",spacing:{margin:{bottom:"10px",top:"5px"},padding:{top:"5px",bottom:"5px",right:"12.5px"}},typo:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px"},width:"100%",outline:{outline:{"outline-style":"none"}},border:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#6D7175"},borderRadius:{top:"2px",left:"2px",bottom:"2px",right:"2px"}},slider_arrow:{navtab:"normal",tab:"normal",navigatorFontSize:"13px",navigatorPrimaryColornormalmode:"#292424",navigatorBackgroundnormalmode:{classic:{"background-color":"rgba(255, 255, 255, 0.63)"}},navigatorPrimaryColorhovermode:"#000000",navigatorBackgroundhovermode:{classic:{"background-color":"rgba(41, 40, 40, 0.65)"}},navigatorBorderRadiushovermode:{right:"3px",top:"3px",left:"3px",bottom:"3px"},navigatorBorderRadiusnormalmode:{top:"3px",left:"3px",bottom:"3px",right:"3px"},paginationWidth:"20px",paginationHeight:"20px",panigationSpacing:{margin:{right:"5px"}},panigationColornormalmode:"#575757",panigationColorhovermode:"#852222",panigationColoractivemode:"#8f3b3b",navigatorSpacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"8px",left:"8px",bottom:"8px",right:"8px"}}},product_regular_sale:{buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"13px"}},product_regular:{textColor:"#6D7175",textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"13px","font-weight":"300"}},countdown_title:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"13px","font-weight":"300"}},countdown_items:{boxBackground:"#000000",spacing:{margin:{left:"0px",top:"0px",bottom:"0px",right:"10px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},width:"43px",boxBorderRadius:{top:"2px",left:"2px",bottom:"2px",right:"2px"}},countdown_number:{buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"14px","font-weight":"300"},spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},"text-align":"center",buttonColor:"#fff",buttonHeight:"18px"},countdown_label:{buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"13px","font-weight":"400"},spacing:{margin:{left:"3px",right:"5px"}},buttonColor:"#fff","text-align":"center"},progress_bar_text:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"13px","font-weight":"300"}},countdown_general:{spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"10px",left:"0px",bottom:"0px",right:"0px"}}},product_description:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"300"},textColor:"#333",spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}},show_sku:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"300"},textColor:"#df5641"},show_sku_title:{textColor:"#333",spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}},show_type:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"300"},textColor:"#df5641"},product_rating:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px"},spacing:{margin:{top:"5px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}},quick_shop_button:{tab:"normal",buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"300"}},variant_swatch_title:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"300"},spacing:{margin:{top:"10px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}},variant_radio_title:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"300"},spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}},variant_radio:{tab:"active",buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"300"},buttonBordernormalmode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#6D7175"},buttonColornormalmode:"#6D7175",spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"5px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},buttonWidthnormalmode:"25px",itemAlignment:"center",alignment:"center",buttonColorhovermode:"#fff",buttonBackgroundhovermode:{classic:{"background-color":"#000"}},buttonBorderhovermode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#000"},buttonColoractivemode:"#fff",buttonBackgroundactivemode:{classic:{"background-color":"#000"}},buttonBorderactivemode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#000"}},variant_select_title:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"300"}}}}},getUser(){return this.$store.getters["global/user"]},show_option_name(){var o;return((o=this.data.settings)==null?void 0:o.show_option_name)=="block"},assignItems(){var n,e,m,y,v,t,S,b,x,k,w,C,B,j,z,i,l,a;const o=`
                    {%- capture limit-%}${(n=this.data.settings)!=null&&n.limit?this.data.settings.limit:10}{% endcapture %}
                    {%- if limit == blank -%}
                        {% assign limit = 12 %}
                    {% else %}
                        {% assign limit = limit | plus: 0 %}
                    {%- endif-%}
                `;if(((e=this.data)==null?void 0:e.template)==="product")return`
                        {% assign ecom_related_type = '' %}
                        {% assign is_collection = false%}
                        {% assign current_product = product %}
                            {% if current_product %}
                                ${o}
                                ${(y=(m=this.data.settings)==null?void 0:m.related_conditions)!=null&&y.length?this.data.settings.related_conditions.map(s=>{var r,c,p;return s.type==="type"?`{% if product.type and product.type != blank and products.size < 2 or products == blank %}
                                                {% paginate collections.all.products by 1000 %}
                                                    {% assign products = collections.all.products  | where: 'type', product.type  ${(r=this.data.settings)!=null&&r.show_product_available?' | where: "available" ':""} %}
                                                    {% endpaginate %}
                                                    {% assign ecom_related_type = 'ecom-product-related-shopify-type' %}
                                                {% endif %}
                                                `:s.type==="vendor"?`
                                                {% if product.vendor and product.vendor != blank and products == blank or products.size < 2%}
                                                    {% paginate collections.all.products by 1000 %}
                                                        {% assign products = collections.all.products | where: 'vendor', product.vendor ${(c=this.data.settings)!=null&&c.show_product_available?' | where: "available" ':""}  %}
                                                    {% endpaginate %}
                                                    {% assign ecom_related_type = 'ecom-product-related-shopify-vendor' %}
                                                {% endif %}
                                        `:s.type==="collection"?`
                                                {% if product.collections.size > 0 and   products.size < 2 or products == blank %}
                                                    {% for c in product.collections %}
                                                        {% if c.handle == 'all' or c.handle == 'frontpage'  or c.products_count < 1 %}{% continue%}{% endif%}
                                                        {% assign products = c.products  ${(p=this.data.settings)!=null&&p.show_product_available?' | where: "available" ':""} %}
                                                        {% assign ecom_related_type = 'ecom-product-related-shopify-collection' %}
                                                        {% assign is_collection = true%}
                                                        {% assign collection = c %}
                                                        {%- break -%}
                                                    {% endfor %}
                                                {% endif %}
                                            `:""}).join(""):`
                                    {% if product.type and product.type != blank and products.size < 2 or products == blank %}
                                        {% paginate collections.all.products by 1000 %}
                                        {% assign products = collection.all.products  | where: 'type', product.type  ${(v=this.data.settings)!=null&&v.show_product_available?' | where: "available" ':""} %}
                                        {% endpaginate %}
                                        {% assign ecom_related_type = 'ecom-product-related-shopify-type' %}
                                    {% endif %}
                                    {% if product.vendor and product.vendor != blank and products == blank or products.size < 2%}
                                        {% paginate collections.all.products by 1000 %}
                                            {% assign products = collection.all.products | where: 'vendor', product.vendor ${(t=this.data.settings)!=null&&t.show_product_available?' | where: "available" ':""}  %}
                                        {% endpaginate %}
                                        {% assign ecom_related_type = 'ecom-product-related-shopify-vendor' %}
                                    {% endif %}
                                    {% if product.collections.size > 0 and   products.size < 2 or products == blank %}
                                        {% for c in product.collections %}
                                            {% if c.handle == 'all' or c.handle == 'frontpage'  or c.products_count < 1 %}{% continue%}{% endif%}
                                            {% assign products = c.products  ${(S=this.data.settings)!=null&&S.show_product_available?' | where: "available" ':""} %}
                                            {% assign ecom_related_type = 'ecom-product-related-shopify-collection' %}
                                            {% assign is_collection = true%}
                                            {% assign collection = c %}
                                            {%- break -%}
                                        {% endfor %}
                                    {% endif %}
                                `}
                            {% endif %}
                    `;if(((b=this.data)==null?void 0:b.template)==="collection")return`
                        ${o}

                        {%- if collection != blank -%}
                            {%- paginate  collection.products by  limit -%}
                            {% assign products = collection.products  %}
                            {% assign is_collection = true %}

                    `;{let s=(k=(x=this.data.settings)==null?void 0:x.sort_by)!=null?k:"",r="";switch(s){case"title_asc":r=' | sort: "title" ';break;case"title_desc":r=' | sort: "title" | reverse ';break;case"price_asc":r=' | sort: "price"  ';break;case"price_desc":r=' | sort: "price" | reverse ';break;case"created_at_asc":r=' | sort: "created_at"  ';break;case"updated_at_desc":r=' | sort: "created_at" | reverse ';break}if(((w=this.data.settings)==null?void 0:w.product_source)&&this.data.settings.product_source==="products"){const p=((B=(C=this.data.settings)==null?void 0:C.products)!=null?B:[]).map(d=>d.value).join(",");return`
                        ${o}
                        {%- capture handle_products -%}${p}{% endcapture%}
                        {% assign products = handle_products | strip | split: ',' %}
                        {% if products.size < 1 and EComBuilderMode %}
                            {% assign products = collections.all.products  | map: 'handle' | limit: 5 %}
                        {% endif %}
                    `}else if(((j=this.data.settings)==null?void 0:j.product_source)&&["type","vendor"].includes(this.data.settings.product_source)){let c="product_"+this.data.settings.product_source;return`
                            ${o}
                            {%- capture value -%}${(z=this.data.settings[c])==null?void 0:z.value}{% endcapture%}
                            {%- assign c = collections.all  -%}
                            {%- paginate c.products by 500 -%}
                                {% assign products =  collections.all.products | where: '${this.data.settings.product_source}', value ${r} | limit: limit %}
                            {%- endpaginate -%}
                            {% if products.size < 1 and EComBuilderMode %}
                                {% assign products = collections.all.products | limit:12 %}
                            {% endif %}
                        `}else if(this.data.settings&&((i=this.data.settings)==null?void 0:i.collection))return`
                            ${o}
                            {%- capture handle_collection -%}${this.data.settings.collection.value}{% endcapture%}
                            {% assign collection = collections[handle_collection] %}
                            {%- if handle_collection  and collection.handle != blank  -%}
                                {% assign products = collection.products  ${(l=this.data.settings)!=null&&l.show_product_available?' | where: "available" ':""} ${r}%}
                            {% else %}
                                {% assign products = collections.all.products  ${(a=this.data.settings)!=null&&a.show_product_available?' | where: "available" ':""} ${r}%}
                                {% assign collection = collections.all%}
                            {%- endif -%}
                            {% assign is_collection = true %}
                        `;return`
                        ${o}
                        {% assign products = collections.last.products %}
                        {% assign collection = collections.last %}
                        {% assign is_collection = true %}
                    `}},liquids(){var o,n,e,m,y,v,t,S,b,x,k,w,C,B,j,z,i,l,a,s,r,c,p,d,_,g,u,h,f,L,T,$,N,W,D,R,I,V,O,F,U,Y,Q,G,K,Z,X,ee,te,oe,ie,ne,ae,se,ce,re,le,pe,de,ue,me,_e,ge,he,fe,be,ve,we,ye,xe,ke,$e,Se,qe,Ce,Ae,Be,je,ze,Le,Te,Pe,Je,He,Ee,Me,Ne,We,De,Re,Ie,Ve,Oe,Fe,Ue,Ye,Qe,Ge;return{review_platform:{code:"{%- assign review_platform = shop.metafields.ecomposer.app_review.value -%}{{-review_platform-}}",preview:""},product_items:{code:`
                        {% capture badge_tags %}${this.badge_tags}{% endcapture%}

                        {% liquid
                            assign colors = shop.metafields.ecomposer.colors
                            assign badge_tags = badge_tags | strip | split: ','
                            assign tmp_collection = collection
                            assign tmp_product = product
                            assign enable_hook = shop.metafields.ecomposer.enable_hook.value
                        %}
                        ${this.assignItems}
                        {% capture quickshop_layout%}${this.quickshop_layout}{% endcapture %}
                        {% capture product_style%}${this.data.settings.style}{% endcapture%}
                        {%- assign view_more_only = ${this.data.settings.view_more_only}  -%}
                        {% capture product_layout %}${this.layout}{% endcapture %}
                        ${this.data.template==="product"?"{% assign check_min = 1 %}":"{% assign check_min = 0%}"}
                        {% if products and products.size > check_min  and products != blank %}
                            <div class="${this.layout==="slider"?"ecom-swiper-wrapper":""}
                                ecom-collection__product--wrapper-items ecom-collection-product__layout-${this.layout}
                                ${this.data.template==="product"?"{{ecom_related_type}}":""}"
                            >
                            {% assign ecom_count = 0 %}

                            {% for p in products  %}
                                ${["featured","shopify"].includes((o=this.data)==null?void 0:o.template)&&((n=this.data.settings)==null?void 0:n.product_source)==="products"?`
                                    {% assign product = all_products[p] %}
                                    {% if product.handle == blank %}{%- continue -%}{% endif %}
                                    `:"{% assign product = p %}"}
                                {% if ecom_count >= limit %}{% break %}{% endif %}
                                ${this.data.template==="product"?"{%- if product.handle == current_product.handle -%}{% continue %}{%-endif -%}":""}
                                {% assign ecom_count = ecom_count | plus: 1 %}

                                {%- capture swatch_option  -%}${this.lang((e=this.data.settings)==null?void 0:e.option,"product_option_swatch")}{%- endcapture -%}
                                {% assign hide_quickshop = true %}
                                {% assign other_option_layout = '${this.option_layout}' %}

                                {% capture product_picker%}
                                    ${this.show_picker?`
                                        {%- if product.available and product.has_only_default_variant == false-%}

                                            {% if quickshop_layout != 'full' and product.options.size > 1%}
                                                {% assign hide_quickshop = false %}
                                            {% endif %}
                                            ${this.swatch_type==="dropdown"?"{% assign hide_quickshop = true %}":""}
                                            {%- if enable_hook -%}
                                                {% capture the_ecom_hook %}
                                                    {% render 'ecom_product_loop_before_variant', product: product %}
                                                {% endcapture %}
                                                {% unless the_ecom_hook contains 'Liquid error' %}
                                                    {{ the_ecom_hook }}
                                                {% endunless %}
                                            {%- endif -%}
                                            <div class="ecom-collection__product-variants" data-picker-type="${this.swatch_type}">
                                                <button class="ecom-collection__product-close"></button>
                                                <form class="ecom-collection__product-form ecom-product-form" product_id="{{product.id}}"  data-product_id="{{product.id}}" data-product-id="{{product.id}}" data-handle="{{product.handle}}">
                                                    {% assign variant_selected = product.first_available_variant%}

                                                    ${["color","image"].includes(this.swatch_type)?`
                                                            {% if product.options contains swatch_option %}
                                                                {% assign current_option = product.options_by_name[swatch_option] %}
                                                                {%- comment -%}
                                                                {% if product.options.size > 2%}
                                                                    {% assign hide_quickshop = true %}
                                                                {% endif %}
                                                                {%- endcomment -%}
                                                            {% assign option_index = current_option.position | minus: 1 %}
                                                            <div class="ecom-collection__product-picker-main ecom-collection__product-picker-option-{{current_option.name | handleize }} ecom-child-element" data-child-name="variant" data-child-title="Variant picker">
                                                                ${this.show_option_name?`<span class="ecom-collection__product-picker-main-label">
                                                                    {{ current_option.name }}
                                                                </span>`:""}
                                                                ${this.swatch_type==="image"?`
                                                                        <ul class="ecom-collection__product-picker-images-list">
                                                                            {%- assign values = ""  -%}
                                                                            {%- assign index = current_option.position | prepend:  'option' -%}
                                                                            {%- for variant in product.variants -%}
                                                                                {%- assign option_value = variant[index] -%}
                                                                                {%- assign option_value_downcase = variant[index] | downcase -%}
                                                                                {%- if values != ""%}
                                                                                    {%- assign tmp = values | split: '|' -%}
                                                                                    {%- if tmp contains option_value_downcase  -%} {%- continue-%}{%- endif -%}
                                                                                    {%- assign values = values  | append:   '|' | append: option_value_downcase -%}
                                                                                {%- else -%}
                                                                                    {%- assign values = option_value_downcase -%}
                                                                                {%- endif -%}
                                                                                <li data-option-index="{{ option_index }}" class="ecom-collection__product-swatch-item ecom-collection__product-picker-images-item  {% if option_value == variant_selected[index] %}ecom-product-swatch-item--active ecom-button-active{% endif %}" data-value="{{ option_value | escape }}">
                                                                                    <span class="ecom-collection__product-swatch-item--wrapper"></span>
                                                                                    <img src="{{ variant | img_url: "120x120", crop: 'center' }}" alt=" {{ option_value }}" loading="lazy"/>
                                                                                </li>
                                                                            {%- endfor -%}
                                                                        </ul>
                                                                    `:`
                                                                        <ul class="ecom-collection__product-picker-colors-list">
                                                                            {%- assign index = current_option.position | prepend:  'option' -%}
                                                                            {% assign value_key_selected = variant_selected[index] | downcase %}
                                                                            {%- for value in current_option.values -%}
                                                                                {% assign value_key = value | downcase %}
                                                                                <li data-option-index="{{ option_index }}" class="ecom-collection__product-swatch-item ecom-collection__product-picker-colors-item  {% if value_key == value_key_selected  %}ecom-product-swatch-item--active ecom-button-active{% endif %}" data-value="{{ value | escape }}">
                                                                                    <span class="ecom-collection__product-swatch-item--wrapper"></span>
                                                                                    <span class="ecom-collection__product-picker-colors-item--preview {% if colors and colors.value[value_key] == blank  %}ecom-collection__product-picker-colors--no-color{%- endif -%}" {% if colors and colors.value[value_key] != blank  %} style="{{colors.value[value_key]}}"{% endif %}>
                                                                                    </span>
                                                                                </li>
                                                                            {%- endfor -%}
                                                                        </ul>
                                                                    `}
                                                            </div>
                                                            {% endif %}
                                                            {%- if other_option_layout != 'hide' -%}
                                                            <div class="ecom-collection__product-quick-shop-wrapper {% if hide_quickshop %} ecom-collection__product-quick-shop--force-show{% endif %}">
                                                                {%- for option in product.options_with_values -%}
                                                                    {%- if option.name == swatch_option -%}{% continue%}{%-endif-%}
                                                                    {%- assign index = option.position | prepend:  'option' -%}
                                                                    {% assign option_index = option.position | minus: 1 %}
                                                                        <div class="ecom-collection__product-picker-other ecom-collection__product-picker-option-{{option.name | handleize }}">
                                                                            ${this.show_option_name?`<span class="ecom-collection__product-picker-${this.option_layout}-label">{{option.name}}</span>`:""}

                                                                            ${this.option_layout==="radio"?`
                                                                                    <ul class="ecom-collection__product-picker-${this.option_layout}-list ecom-d-flex">
                                                                                        {% for value in option.values %}
                                                                                            <li class="ecom-collection__product-swatch-item ecom-collection__product-picker-${this.option_layout}-list-item {% if value == variant_selected[index] %}ecom-product-swatch-item--active ecom-button-active{% endif %}" data-option-index="{{ option_index }}" data-value="{{ value | escape }}">
                                                                                                {{value}}
                                                                                            </li>
                                                                                        {% endfor %}
                                                                                    </ul>
                                                                                `:`
                                                                                <select class="ecom-collection__product-swatch-select ecom-collection__product-picker-${this.option_layout}-list" data-option-index="{{ option_index }}">
                                                                                    {% for value in option.values %}
                                                                                        <option value="{{value | escape }}" {% if value == variant_selected[index] %}selected="selected"{% endif %}>
                                                                                            {{value}}
                                                                                        </option>
                                                                                    {% endfor %}
                                                                                </select>
                                                                            `}
                                                                        </div>
                                                                {%- endfor -%}
                                                            </div>
                                                            {%- endif -%}
                                                        `:""}
                                                    ${this.swatch_type==="radio"?`
                                                            {%- if other_option_layout != 'hide' -%}
                                                            <div class="ecom-collection__product-quick-shop-wrapper {% if hide_quickshop %} ecom-collection__product-quick-shop--force-show{% endif %}">
                                                                {%- for option in product.options_with_values -%}
                                                                    {%- assign index = option.position | prepend:  'option' -%}
                                                                    {% assign option_index = option.position | minus: 1 %}
                                                                        <div class="ecom-collection__product-picker-option-{{option.name | handleize }}">
                                                                            <span class="ecom-collection__product-picker-${this.swatch_type}-label">{{option.name}}</span>
                                                                                <ul class="ecom-collection__product-picker-${this.swatch_type}-list ecom-d-flex">
                                                                                    {% for value in option.values %}
                                                                                        <li class="ecom-collection__product-swatch-item ecom-collection__product-picker-${this.swatch_type}-list-item {% if value == variant_selected[index] %}ecom-product-swatch-item--active ecom-button-active{% endif %}" data-option-index="{{ option_index }}" data-value="{{ value | escape }}">
                                                                                            {{value}}
                                                                                        </li>
                                                                                    {% endfor %}
                                                                                </ul>
                                                                        </div>
                                                                {%- endfor -%}
                                                            </div>
                                                            {%- endif -%}
                                                    `:""}
                                                    <div class="ecom-collection__product-quick-shop-wrapper {% if hide_quickshop %} ecom-collection__product-quick-shop--force-show{% endif %}">
                                                        <div class="ecom-collection__product-picker-selection" style="${this.swatch_type!=="dropdown"?"display:none;":""}">
                                                            <select name="variant_id" data-product-id="{{product.id}}"  id="ecom-variant-selector-{{product.id}}-${this.data.id}">
                                                                {% for variant in product.variants %}
                                                                    <option value="{{variant.id}}">{{variant.title}}</option>
                                                                {% endfor %}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="ecom-collection__product-quick-shop-add-to-cart-wrapper {% if hide_quickshop or view_more_only %} ecom-collection__product-quick-shop--force-show{% endif %}">
                                                        ${(((m=this.data.settings)==null?void 0:m.add_to_cart)||((y=this.data.settings)==null?void 0:y.add_cart_icon))&&!((v=this.data.settings)!=null&&v.view_more_only)?`
                                                            <div class="ecom-collection__product-form__actions">
                                                                <button type="button" class="ecom-child-element ecom-collection__product-submit ecom-ajax-cart-submit ecom-collection__product-simple-add-to-cart
                                                                ecom-collection__product-add-cart-icon-${(t=this.data.settings)!=null&&t.add_cart_icon_position?this.data.settings.add_cart_icon_position:"before"}"
                                                                    data-text-add-cart="${this.lang(this.data.settings.add_to_cart,"add_to_cart")}"
                                                                    data-text-unavailable="${this.lang(this.data.settings.product_unavailable,"product_unavailable")}"
                                                                    data-text-sold-out="${this.lang(this.data.settings.sold_out_text||"outstock","product_soldout")}"
                                                                    data-action="${(b=(S=this.data.settings)==null?void 0:S.action)!=null?b:"popup"}"
                                                                    data-text-added-cart="${this.lang((x=this.data.settings)==null?void 0:x.added_cart_text,"added_cart_text")}"
                                                                    data-message-added-cart="${this.lang((k=this.data.settings)==null?void 0:k.added_cart_message,"added_cart_message")}"
                                                                    data-href="${(B=(C=(w=this.data.settings)==null?void 0:w.link)==null?void 0:C.href)!=null?B:"#"}"
                                                                    data-target="${(i=(z=(j=this.data.settings)==null?void 0:j.link)==null?void 0:z.target)!=null?i:"_blank"}"
                                                                    data-text-pre-order="${this.lang((l=this.data.settings)==null?void 0:l.pre_order,"pre_order")}"
                                                                    data-child-name="button" data-child-title="Add to cart button"
                                                                    >
                                                                    ${(a=this.data.settings)!=null&&a.add_cart_icon?`<span class="ecom-collection__product-add-cart-icon">${(s=this.data.settings)==null?void 0:s.add_cart_icon}</span>`:""}
                                                                    <span class="ecom-add-to-cart-text">
                                                                        ${this.lang((r=this.data.settings)==null?void 0:r.add_to_cart,"add_to_cart")}
                                                                    </span>
                                                                </button>
                                                            </div>
                                                            `:""}
                                                    </div>
                                                </form> {% comment %} End form {% endcomment %}
                                                <script class="product-json" type="application/json">
                                                    {
                                                        "id":  {{ product.id }},
                                                        "title":  {{ product.title | json }},
                                                        "handle":  {{ product.handle | json }},
                                                        "price":  {{ product.price| json }},
                                                        "price_min":  {{ product.price_min| json }},
                                                        "price_max":  {{ product.price_max| json }},
                                                        "available":  {{ product.available | json }},
                                                        "price_varies":  {{ product.price_varies| json }},
                                                        "compare_at_price":  {{ product.compare_at_price| json }},
                                                        "compare_at_price_min":  {{ product.compare_at_price_min| json }},
                                                        "compare_at_price_max":  {{ product.compare_at_price_max| json }},
                                                        "compare_at_price_varies":  {{ product.compare_at_price_varies| json }},
                                                        "variants": [
                                                            {%- for variant in product.variants -%}
                                                            {
                                                                "id":  {{ variant.id }},
                                                                "title": " {{ variant.option1 | handleize }}{%- if product.options.size == 2 -%} / {%- endif -%} {{ variant.option2 | handleize }}{%- if product.options.size == 3 -%} / {%- endif -%} {{ variant.option3 | handleize }}",
                                                                "option1":  {{ variant.option1  | json }},
                                                                "option2": {%- if product.options.size == 1 -%}null{%-else-%} {{ variant.option2  | json }}{%-endif-%},
                                                                "option3": {%- if product.options.size == 1 or product.options.size == 2 -%}null{%-else-%} {{ variant.option3  | json }}{%-endif-%},
                                                                "sku":  {{ variant.sku | json }},
                                                                "requires_shipping":  {{ variant.requires_shipping }},
                                                                "taxable":  {{ variant.taxable |json }},
                                                                "selling_plan_allocations":{%- if variant.selling_plan_allocations and variant.selling_plan_allocations.size > 0 -%}[{% for allocation in variant.selling_plan_allocations %}{"price":{{allocation.price}},"selling_plan":{"id":{{allocation.selling_plan.id}}, "name":{{allocation.selling_plan.name | json }} } }{%unless forloop.last%},{% endunless%}{%- endfor -%}]{%- else -%}null{%- endif -%},
                                                                "featured_image": {%- if variant.image.id != blank -%}{
                                                                    "id":  {{ variant.image.id | json }},
                                                                    "product_id":  {{ product.id | json }},
                                                                    "width":  {{ variant.image.width | json }},
                                                                    "height":  {{ variant.image.height | json }},
                                                                    "src":  {{ variant.image.src | json }},
                                                                    "position": {{ variant.image.position }}
                                                                }{%- else-%}null{%-endif-%},
                                                                "available":  {{ variant.available }},
                                                                "public_title": " {{ variant.option1 | handleize }}{%- if product.options.size == 2 -%} / {%- endif -%} {{ variant.option2 | handleize }}{%- if product.options.size == 3 -%} / {%- endif -%} {{ variant.option3 | handleize }}",
                                                                "options":   {{ variant.options | json }},
                                                                "price":  {{ variant.price| json }},
                                                                "weight":  {{ variant.weight| json }},
                                                                "unit_price": {{ variant.unit_price | json }},
                                                                "unit_price_measurement": {
                                                                    "measured_type": {{ variant.unit_price_measurement.measured_type | json }},
                                                                    "quantity_value": {{ variant.unit_price_measurement.quantity_value | json }},
                                                                    "quantity_unit": {{ variant.unit_price_measurement.quantity_unit | json }},
                                                                    "reference_value": {{ variant.unit_price_measurement.reference_value | json }},
                                                                    "reference_unit": {{ variant.unit_price_measurement.reference_unit | json }}
                                                                },
                                                                "compare_at_price":  {{ variant.compare_at_price | json }},
                                                                "inventory_quantity":  {{ variant.inventory_quantity | json }},
                                                                "inventory_management":  {{ variant.inventory_management | json }},
                                                                "inventory_policy":  {{ variant.inventory_policy | json }},
                                                                "next_incoming_date": {% if variant.next_incoming_date %}{{variant.next_incoming_date | time_tag | json }}{% else%}null{% endif %},
                                                                "barcode":  {{ variant.barcode | json }}
                                                            }{%- if forloop.last == false -%},{%- endif -%}
                                                            {%- endfor -%}
                                                        ],
                                                        "featured_image":  {{ product.featured_image | json }},
                                                        "options": [
                                                            {%- for option in product.options -%}
                                                            {{ option | json }}{%- if forloop.last == false -%},{%- endif -%}
                                                            {%-endfor -%}
                                                        ]
                                                    }
                                                <\/script>
                                            </div>
                                            {%- if enable_hook -%}
                                                {% capture the_ecom_hook %}
                                                    {% render 'ecom_product_loop_after_variant', product: product %}
                                                {% endcapture %}
                                                {% unless the_ecom_hook contains 'Liquid error' %}
                                                    {{ the_ecom_hook }}
                                                {% endunless %}
                                            {%- endif -%}
                                        {% endif %}
                                    `:""}
                                {% endcapture%}
                                {% capture product_actions%}
                                    <div class="ecom-collection__product--actions" data-layout="{{quickshop_layout}}">
                                    ${this.show_product_quickview?this.quickview_snippet:""}
                                    ${this.show_product_wishlist?this.wishlist_snippet:""}
                                    <div
                                        class="ecom-button-default ecom-collection__product-form__actions"
                                        data-child-name="button" data-child-title="button"
                                        ${!((c=this.data.settings)!=null&&c.show_actions)&&!this.show_picker?'style="display:none;"':""}>
                                            {%- if enable_hook -%}
                                                {% capture the_ecom_hook %}
                                                    {% render 'ecom_product_loop_before_cart_button', product: product %}
                                                {% endcapture %}
                                                {% unless the_ecom_hook contains 'Liquid error' %}
                                                    {{ the_ecom_hook }}
                                                {% endunless %}
                                            {%- endif -%}
                                            {% if view_more_only %}
                                            ${((p=this.data.settings)==null?void 0:p.view_more_text)||((d=this.data.settings)==null?void 0:d.view_more_icon)?`
                                                    <a  class="ecom-collection__product-form__actions--view-more ecom-collection__product-view-more-${(g=(_=this.data.settings)==null?void 0:_.view_more_icon_position)!=null?g:"before"} ecom-child-element"
                                                            data-child-name="button" data-child-title="View more button"
                                                            href="${(u=this.data.settings)!=null&&u.link_with_collection?"{%- if is_collection-%}{{- product.url | within: collection -}}{% else %}{{- product.url -}}{%-endif-%}":"{{- product.url -}}"}"
                                                            title="{{ product.title | escape }}">
                                                            ${(h=this.data.settings)!=null&&h.view_more_icon?`
                                                                    <span class="ecom-collection__product-view-more-icon">${(f=this.data.settings)==null?void 0:f.view_more_icon}</span>`:""}
                                                            <span class="ecom-collection__product-view-more-text">
                                                                ${this.lang((L=this.data.settings)==null?void 0:L.view_more_text,"view_more_text")}
                                                            </span>
                                                        </a>

                                            `:""}

                                            {% elsif product.available == false %}
                                            ${((T=this.data.settings)==null?void 0:T.sold_out_text)||(($=this.data.settings)==null?void 0:$.sold_out_icon)?`
                                                    <a  class="ecom-collection__product-form__actions--soldout ecom-collection__product-sold-out-${(W=(N=this.data.settings)==null?void 0:N.sold_out_icon_position)!=null?W:"before"} ecom-child-element"
                                                            data-child-name="button" data-child-title="Sold out button"
                                                            href="${(D=this.data.settings)!=null&&D.link_with_collection?"{%- if is_collection-%}{{- product.url | within: collection -}}{% else %}{{- product.url -}}{%-endif-%}":"{{- product.url -}}"}"
                                                            title="{{ product.title | escape }}">
                                                            ${(R=this.data.settings)!=null&&R.sold_out_icon?`
                                                                    <span class="ecom-collection__product-sold-out-icon">${(I=this.data.settings)==null?void 0:I.sold_out_icon}</span>`:""}
                                                            <span class="ecom-collection__product-sold-out-text">
                                                                ${this.lang((V=this.data.settings)==null?void 0:V.sold_out_text,"sold_out_text")}
                                                            </span>
                                                        </a>

                                            `:""}


                                            {% elsif product.has_only_default_variant %}
                                                ${((O=this.data.settings)==null?void 0:O.add_to_cart)||((F=this.data.settings)==null?void 0:F.add_cart_icon)?`
                                                    <a data-no-instant href="/cart/add/{{ product.variants.first.id }}"
                                                    data-action="${(Y=(U=this.data.settings)==null?void 0:U.action)!=null?Y:"popup"}"
                                                    data-text-added-cart="${this.lang((Q=this.data.settings)==null?void 0:Q.added_cart_text,"added_cart_text")}"
                                                    data-message-added-cart="${this.lang((G=this.data.settings)==null?void 0:G.added_cart_message,"added_cart_message")}"
                                                    data-href="${(X=(Z=(K=this.data.settings)==null?void 0:K.link)==null?void 0:Z.href)!=null?X:"#"}"
                                                    data-target="${(oe=(te=(ee=this.data.settings)==null?void 0:ee.link)==null?void 0:te.target)!=null?oe:"_blank"}"
                                                    class="ecom-collection__product-submit ecom-collection__product-form__actions--add ecom-collection__product-simple-add-to-cart ecom-ajax-cart-simple ecom-collection__product-add-cart-icon-${(ne=(ie=this.data.settings)==null?void 0:ie.add_cart_icon_position)!=null?ne:"before"} ecom-child-element" data-child-name="button" data-child-title="Add to cart button"
                                                    data-id="{{ product.variants.first.id  }}"
                                                    data-handle="{{ product.handle }}" data-pid="{{ product.id }}" title="{{ product.title | escape }}">
                                                        ${(ae=this.data.settings)!=null&&ae.add_cart_icon?`<span class="ecom-collection__product-add-cart-icon">${(se=this.data.settings)==null?void 0:se.add_cart_icon}</span>`:""}
                                                        <span class="ecom-add-to-cart-text">
                                                        {%- if  product.variants.first.inventory_quantity <= 0 and product.variants.first.inventory_policy == 'continue' -%}
                                                            ${this.lang((ce=this.data.settings)==null?void 0:ce.pre_order,"pre_order")}
                                                        {%-else-%}
                                                            ${this.lang((re=this.data.settings)==null?void 0:re.add_to_cart,"add_to_cart")}
                                                        {%- endif -%}
                                                        </span>
                                                    </a>
                                                `:""}

                                            {% else  %}
                                                ${this.show_picker?`
                                                    ${((le=this.data.settings)==null?void 0:le.quick_shop_text)||((pe=this.data.settings)==null?void 0:pe.add_cart_icon)?`
                                                        <button class="ecom-collection__product-form__actions--quickshop ecom-collection__product-quickshop-icon-${(me=(ue=(de=this.data)==null?void 0:de.settings)==null?void 0:ue.quick_shop_icon_position)!=null?me:"before"}
                                                        {% if hide_quickshop %} ecom-collection__product-quick-shop--force-hide{% endif %} ecom-child-element" data-child-name="button" data-child-title="Quick shop button" type="button">
                                                            ${(ge=(_e=this.data)==null?void 0:_e.settings)!=null&&ge.quick_shop_icon?`
                                                                <span class="ecom-collection__product-quickshop-icon">${(fe=(he=this.data)==null?void 0:he.settings)==null?void 0:fe.quick_shop_icon}</span>
                                                                `:""}
                                                            <span class="ecom-collection__product-form__actions--quickshop-text">
                                                                ${this.lang(this.data.settings.quick_shop_text,"quick_shop_text")}
                                                            </span>
                                                        </button>
                                                        `:""}
                                                    `:`
                                                     ${((be=this.data.settings)==null?void 0:be.view_more_text)||((ve=this.data.settings)==null?void 0:ve.view_more_icon)?`
                                                        <a href="${(we=this.data.settings)!=null&&we.link_with_collection?"{%- if is_collection-%}{{- product.url | within: collection -}}{% else %}{{- product.url -}}{%-endif-%}":"{{- product.url -}}"}" class="ecom-collection__product-form__actions--view-more ecom-collection__product-view-more-${(xe=(ye=this.data.settings)==null?void 0:ye.view_more_icon_position)!=null?xe:"before"}
                                                            ecom-child-element" title="{{ product.title | escape }}" data-child-name="button" data-child-title="View more button">
                                                            ${(ke=this.data.settings)!=null&&ke.view_more_icon?`
                                                                <span class="ecom-collection__product-view-more-icon">${($e=this.data.settings)==null?void 0:$e.view_more_icon}</span>
                                                                `:""}
                                                            <span class="ecom-collection__product-view-more-text">
                                                                ${this.lang((Se=this.data.settings)==null?void 0:Se.view_more_text,"view_more_text")}
                                                            </span>
                                                        </a>
                                                        `:""}
                                                    `}
                                            {% endif %}
                                            {%- if enable_hook -%}
                                                {% capture the_ecom_hook %}
                                                    {% render 'ecom_product_loop_after_cart_button', product: product %}
                                                {% endcapture %}
                                                {% unless the_ecom_hook contains 'Liquid error' %}
                                                    {{ the_ecom_hook }}
                                                {% endunless %}
                                            {%- endif -%}
                                        </div>
                                    </div>
                                {% endcapture %}

                                <div class="ecom-collection__product-item ${this.layout==="slider"?"ecom-swiper-slide":""}" data-product-handle="{{product.handle}}" data-style="{{product_style}}">
                                    <div
                                        class="ecom-collection__product-item--wrapper {% if product_style == 'horizontal'%} ecom-d-flex {% else %} ecom-flex-column {% endif %}">
                                        <div class="ecom-collection__product-media-wrapper {% if product_style == 'horizontal'%} ecom-d-flex{% endif %} "
                                    >
                                    {%- if enable_hook -%}
                                        {% capture the_ecom_hook %}
                                            {% render 'ecom_product_loop_before', product: product %}
                                        {% endcapture %}
                                        {% unless the_ecom_hook contains 'Liquid error' %}
                                            {{ the_ecom_hook }}
                                        {% endunless %}
                                    {%- endif -%}
                                            <a  href="${(qe=this.data.settings)!=null&&qe.link_with_collection?"{%- if is_collection-%}{{- product.url | within: collection -}}{% else %}{{- product.url -}}{%-endif-%}":"{{- product.url -}}"}" title="{{product.title | escape }}" class="ecom-collection__product-item--inner ecom-image-default">
                                            {%- if product.featured_media -%}
                                                {%- liquid
                                                    assign featured_media_aspect_ratio = product.featured_media.aspect_ratio
                                                    if product.featured_media.aspect_ratio == nil
                                                        assign featured_media_aspect_ratio = 1
                                                    endif
                                                -%}
                                                    <div class="ecom-collection__product-media--container">
                                                        <div
                                                            class="ecom-child-element ecom-collection__product-media ecom-collection__product-media--${this.data.settings.image_ratio}
                                                        ${this.data.settings.show_secondary_image?"{% if product.media[1] != nil %}ecom-collection__product-media--hover-effect{% endif %}":""}"
                                                        ${this.data.settings.image_ratio==="adapt"?' style="padding-bottom: {{ 1 | divided_by: featured_media_aspect_ratio | times: 100 }}%;"':""}
                                                        data-child-name="image" data-child-title="image"
                                                        >
                                                            <img srcset="{%- if product.featured_media.width >= 165 -%}{{ product.featured_media | img_url: '165x' }} 165w,{%- endif -%}
                                                                {%- if product.featured_media.width >= 360 -%}{{ product.featured_media | img_url: '360x' }} 360w,{%- endif -%}
                                                                {%- if product.featured_media.width >= 533 -%}{{ product.featured_media | img_url: '533x' }} 533w,{%- endif -%}
                                                                {%- if product.featured_media.width >= 720 -%}{{ product.featured_media | img_url: '720x' }} 720w,{%- endif -%}
                                                                {%- if product.featured_media.width >= 940 -%}{{ product.featured_media | img_url: '940x' }} 940w,{%- endif -%}
                                                                {%- if product.featured_media.width >= 1066 -%}{{ product.featured_media | img_url: '1066x' }} 1066w{%- endif -%}"
                                                                src="{{ product.featured_media | img_url: '533x' }}"
                                                                sizes="(min-width: 1100px) 535px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                                                                alt="{{ product.featured_media.alt | escape }}"
                                                                loading="lazy"
                                                                class="ecom-collection__product-media-image"
                                                                width="{{ product.featured_media.width }}"
                                                                height="{{ product.featured_media.height }}"
                                                            />
                                                            ${this.data.settings.show_secondary_image?`
                                                                {%- if product.media[1] != nil -%}
                                                                    <img srcset="{%- if product.media[1].width >= 165 -%}{{ product.media[1] | img_url: '165x' }} 165w,{%- endif -%}
                                                                    {%- if product.media[1].width >= 360 -%}{{ product.media[1] | img_url: '360x' }} 360w,{%- endif -%}
                                                                    {%- if product.media[1].width >= 533 -%}{{ product.media[1] | img_url: '533x' }} 533w,{%- endif -%}
                                                                    {%- if product.media[1].width >= 720 -%}{{ product.media[1] | img_url: '720x' }} 720w,{%- endif -%}
                                                                    {%- if product.media[1].width >= 940 -%}{{ product.media[1] | img_url: '940x' }} 940w,{%- endif -%}
                                                                    {%- if product.media[1].width >= 1066 -%}{{ product.media[1] | img_url: '1066x' }} 1066w{%- endif -%}"
                                                                    src="{{ product.media[1] | img_url: '533x' }}"
                                                                    sizes="(min-width: 1100px) 535px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                                                                    alt="{{ product.media[1].alt | escape }}"
                                                                    loading="lazy"
                                                                    class="ecom-collection__product-secondary-media"
                                                                    width="{{ product.media[1].width }}"
                                                                    height="{{ product.media[1].height }}"
                                                                    />
                                                                {%- endif -%}
                                                                `:""}
                                                            </div>
                                                        </div>
                                                {% else %}
                                                ${((Ce=this.data.settings)==null?void 0:Ce.placeholder_image)==!0?`<div class="ecom-collection__product-media--container">
                                                    <div class="ecom-child-element ecom-collection__product-media ecom-collection__product-media--${this.data.settings.image_ratio}"
                                                    data-child-name="image" data-child-title="image"
                                                    ${this.data.settings.image_ratio==="adapt"?'style="padding-bottom: 85%;"':""}

                                                    >
                                                        <img src="${((Ae=this.data.settings)==null?void 0:Ae.placeholder_image_custom.value)=="/images/placeholder.png"?"https://"+this.getDomain()+((Be=this.data.settings)==null?void 0:Be.placeholder_image_custom.value):(je=this.data.settings)==null?void 0:je.placeholder_image_custom.value}"
                                                            class="ecom-collection__product-media-image"
                                                        >
                                                    </div>

                                                </div>`:`<div class="ecom-collection__product-media--container">
                                                <div class="ecom-child-element ecom-collection__product-media ecom-collection__product-media--${this.data.settings.image_ratio}"
                                                data-child-name="image" data-child-title="image"
                                                ${this.data.settings.image_ratio==="adapt"?'style="padding-bottom: 85%;"':""}
                                                >
                                                    {{ '${(ze=this.data.settings)==null?void 0:ze.placeholder_image_shopify}' | placeholder_svg_tag: 'ecom-colection__product-svg-placeholder' }}
                                                </div>

                                                </div>`}

                                                {% endif %}

                                            ${this.data.settings.show_badges||((Le=this.data.settings)==null?void 0:Le.show_sale_badge)?`
                                                    <div class="ecom-collection__product-badge">
                                                `:""}
                                             ${this.data.settings.show_badges?`{%- if product.available == false -%}
                                                        <span class="ecom-collection__product-badge--sold-out" aria-hidden="true">
                                                        ${this.lang(this.data.settings.sold_text,"sold_text")}
                                                        </span>
                                                    {%- elsif product.compare_at_price > product.price and product.available -%}
                                                        <span class="ecom-collection__product-badge--sale" aria-hidden="true">
                                                        ${this.lang(this.data.settings.sale_text,"sale_text")}
                                                        </span>
                                                    {%- endif -%}
                                                    {% if badge_tags %}
                                                        {% for badge in badge_tags %}
                                                            {% if product.tags contains badge %}
                                                                <span class="ecom-collection__product-badge--custom ecom-collection__product-badge--{{ badge | handleize}}" aria-hidden="true">
                                                                     {{ badge }}
                                                                </span>
                                                            {% endif %}
                                                        {% endfor %}
                                                    {% endif %}`:""}
                                            ${(Te=this.data.settings)!=null&&Te.show_sale_badge?`
                                                    {%- if product.compare_at_price != null and product.compare_at_price > product.price -%}
                                                        ${((Pe=this.data.settings)==null?void 0:Pe.sale_badge_type)=="amount"?"{%- assign sale = product.compare_at_price | minus: product.price | money -%}":"{%- assign sale = product.compare_at_price | minus: product.price | times: 100 | divided_by: product.compare_at_price | round -%}"}
                                                        <span class="ecom-collection__product-price--bage-sale">
                                                            ${this.lang((Je=this.data.settings)==null?void 0:Je.bage_sale,"sale_badge",{sale:"sale"})}
                                                        </span>
                                                    {%- endif -%}`:""}
                                             ${this.data.settings.show_badges||((He=this.data.settings)==null?void 0:He.show_sale_badge)?"</div>":""}
                                            </a>
                                        </div>
                                        <div class="ecom-collection__product-item--information">
                                            <div class="ecom-collection__product-item--information-wrapper ecom-flex ecom-column">
                                                {% if product_style == 'absolute' %}
                                                    {{product_actions}}
                                                    {{ product_picker}}
                                                {% endif %}

                                                ${this.data.settings.show_vendor?`
                                                    {% if product.vendor and product.vendor != blank %}
                                                    <div class="ecom-child-element ecom-collection__product-item-vendor-element" data-child-name="meta" data-child-title="Product vendor">
                                                        <span class="ecom-visually-hidden">${this.lang(this.data.settings.vendor_title,"vendor")}</span>
                                                        <div class="ecom-collection__product-item-vendor">{{  product.vendor | link_to_vendor}}</div>
                                                    </div>
                                                    {% endif %}
                                                `:""}
                                                ${this.data.settings.show_sku?`
                                                    {% assign current_variant = product.selected_or_first_available_variant %}
                                                    {% if current_variant.sku and current_variant.sku != blank %}
                                                    <div class="ecom-child-element ecom-collection__product-item-sku-element ecom-flex" data-child-name="meta" data-child-title="Product sku">
                                                        <span class="ecom-collection__product-item-sku-title">${this.lang(this.data.settings.sku_title,"sku")}</span>
                                                        <div class="ecom-collection__product-item-sku">{{  current_variant.sku }}</div>
                                                    </div>
                                                    {% endif %}
                                                `:""}
                                                ${this.data.settings.show_type?`
                                                    {% if product.type and product.type != blank%}
                                                        <div class="ecom-child-element ecom-collection__product-item-type-element" data-child-name="meta" data-child-title="Product type">
                                                            <span class="ecom-visually-hidden">${this.lang(this.data.settings.type_title,"product_type")}</span>
                                                            <div class="ecom-collection__product-item-type ecom-flex">{{ product.type | link_to_type }}</div>
                                                        </div>
                                                    {% endif %}
                                                `:""}
                                                {%- if enable_hook -%}
                                                    {% capture the_ecom_hook %}
                                                        {% render 'ecom_product_loop_before_title', product: product %}
                                                    {% endcapture %}
                                                    {% unless the_ecom_hook contains 'Liquid error' %}
                                                        {{ the_ecom_hook }}
                                                    {% endunless %}
                                                {%- endif -%}
                                                <a
                                                    href="${(Ee=this.data.settings)!=null&&Ee.link_with_collection?"{%- if is_collection-%}{{- product.url | within: collection -}}{% else %}{{- product.url -}}{%-endif-%}":"{{- product.url -}}"}"
                                                    title="{{product.title | escape }}"
                                                    class="ecom-collection__product-item-information-title ecom-child-element"
                                                    data-child-name="title"
                                                    data-child-title="Title"
                                                >
                                                    {{ product.title }}
                                                </a>
                                                {%- if enable_hook -%}
                                                    {% capture the_ecom_hook %}
                                                        {% render 'ecom_product_loop_after_title', product: product %}
                                                    {% endcapture %}
                                                    {% unless the_ecom_hook contains 'Liquid error' %}
                                                        {{ the_ecom_hook }}
                                                    {% endunless %}
                                                {%- endif -%}
                                                ${this.show_product_rating?this.review_snippet:""}
                                                ${this.show_description&&this.data.settings.layout!="list"?`
                                                    <div class="ecom-collection__product-description ecom-child-element" data-child-name="description" data-child-title="Description">
                                                        {{ product.description | strip_html | replace: '\xA0', ' ' | truncatewords: ${this.short_limit} }}
                                                    </div>
                                                `:""}
                                                ${((Me=this.data.settings)==null?void 0:Me.show_price)=="block"?`<div class="ecom-collection__product-prices ecom-child-element" data-child-name="price" data-child-title="Price">
                                                    ${this.show_picker?`
                                                        {%- assign target = product.selected_or_first_available_variant -%}
                                                        <span class="ecom-collection__product-price{% if product.compare_at_price > product.price %} ecom-collection__product-price--sale{% endif %}">{{product.price_min| money }}</span>
                                                        <span
                                                                class="ecom-collection__product-price--regular ecom-collection__product--compare-at-price"
                                                                {%- if product.compare_at_price == nil or product.compare_at_price <=  product.price -%}  style="display:none" {% endif %}
                                                        >
                                                                {{ target.compare_at_price | money }}
                                                        </span>
                                                    `:`
                                                    {% if product.has_only_default_variant %}
                                                            <span class="ecom-collection__product-price{% if product.compare_at_price > product.price %} ecom-collection__product-price--sale{% endif %}">{{product.price_min| money }}</span>
                                                            <span class="ecom-collection__product-price--regular ecom-collection__product--compare-at-price"{% unless product.compare_at_price >= product.price%} style="display:none; content:'1'" {% endunless %}>{{ product.compare_at_price_max | money }}</span>
                                                            {%- comment -%}
                                                                <span class="ecom-collection__product-price--bage-sale">
                                                                {% assign sale = product.compare_at_price_max | minus: product.price | times: 100 | divided_by: product.compare_at_price_max  | times: 100 | money  %}
                                                                ${this.lang((Ne=this.data.settings)==null?void 0:Ne.bage_sale,"sale_badge",{sale:"sale"})}
                                                                </span>
                                                            {%- endcomment -%}
                                                    {% else %}
                                                    ${((We=this.data.settings)==null?void 0:We.price_type)=="min_price"?`
                                                            ${(De=this.data.settings)!=null&&De.price_from_text?`<span class="ecom-collection__product-price--from">
                                                                    ${this.lang((Re=this.data.settings)==null?void 0:Re.price_from_text,"price_from")}
                                                                </span>`:""}
                                                            <span class="ecom-collection__product-price{% if product.compare_at_price_min > product.price_min %} ecom-collection__product-price--sale{% endif %}">
                                                                    {{ product.price_min| money }}
                                                                </span>
                                                                <span
                                                                    class="ecom-collection__product-price--regular"
                                                                    {%- if product.compare_at_price == nil or product.compare_at_price <=  product.price -%}  style="display:none" {% endif %}
                                                                >
                                                                    {{ product.compare_at_price_min | money }}
                                                            </span>
                                                        `:`
                                                            {%- assign target = product.selected_or_first_available_variant -%}
                                                            <span class="ecom-collection__product-price{% if target.compare_at_price > target.price %} ecom-collection__product-price--sale{% endif %}">{{ target.price| money }}</span>
                                                            <span
                                                                class="ecom-collection__product-price--regular"
                                                                {%- if product.compare_at_price == nil or product.compare_at_price <=  product.price -%}  style="display:none" {% endif %}
                                                            >
                                                                {{ target.compare_at_price | money }}
                                                            </span>
                                                        `}
                                                        {% endif %}
                                                    `}

                                                </div>`:""}

                                                ${this.show_description&&this.data.settings.layout=="list"?`
                                                    <div class="ecom-collection__product-description ecom-child-element" data-child-name="description" data-child-title="Description">
                                                        {{ product.description | strip_html | replace: '\xA0', ' ' | truncatewords: ${this.short_limit} }}
                                                    </div>
                                                `:""}
                                                {% if product_style != 'absolute'%}
                                                    {{ product_picker }}
                                                {% endif %}
                                                {% if product_style == 'horizontal' or product_style == 'vertical' or product_layout == 'list' %}
                                                    {{product_actions}}
                                                {% endif %}

                                                ${this.enable_countdown?`
                                                    {% if product.available and product.metafields.ecomposer.countdown  %}
                                                    <div
                                                        class="ecom-collection__product-countdown ecom-child-element" data-child-name="countdown" data-child-title="Countdown"
                                                        >
                                                            <div
                                                                class="ecom-collection__product-countdown-wrapper"
                                                            >
                                                                <div class="ecom-collection__product-countdown-wrapper--title">${this.lang((Ie=this.data.settings)==null?void 0:Ie.countdown_title,"countdown_title")}</div>
                                                                <div class="ecom-product-single__countdown-container" >
                                                                    {%- assign countdown_from = product.metafields.ecomposer.countdown_from -%}
                                                                    <div data-product-id="{{product.id}}" class="ecom-collection__product-countdown-time ecom-collection__product-countdown-time--metafields" data-ecom-countdown-from="{{ countdown_from }}"  data-ecom-countdown="{{product.metafields.ecomposer.countdown}}"></div>
                                                                </div>
                                                                ${this.data.settings.enable_progress_bar?`
                                                                    {% if countdown_from%}
                                                                    <div class="ecom-collection__product-countdown-progress-bar">
                                                                        <div class="ecom-collection__product-countdown-progress-bar--wrap">
                                                                            <div class="ecom-collection__product-countdown-progress-bar--timer ecom-product-single__countdown-progress-bar--timer"></div>
                                                                        </div>
                                                                    </div>
                                                                    {% endif %}
                                                                `:""}

                                                            </div>
                                                        </div>
                                                    {% endif %}
                                                `:""}

                                            </div>
                                        </div>
                                    </div>
                                    {%- if enable_hook -%}
                                        {% capture the_ecom_hook %}
                                        {% render 'ecom_product_loop_after', product: product %}
                                        {% endcapture %}
                                        {% unless the_ecom_hook contains 'Liquid error' %}
                                            {{ the_ecom_hook }}
                                        {% endunless %}
                                    {%- endif -%}
                                </div>

                            {% endfor %}
                            </div>
                        {% else %}
                             <div class="ecom-collection__product--wrapper-items ecom-collection-product__layout-${this.layout}" >
                                <div class="ecom-collection__product-item ecom-collection__product--no-item" >
                                    ${this.lang((Ve=this.data.settings)==null?void 0:Ve.trans_no_item,"no_product_item")}
                                </div>
                             </div>
                        {% endif %}
                        ${this.data.template==="product"?`
                            {% if current_product %}
                                {% assign product = current_product %}
                            {% endif %}
                        `:""}
                        ${this.data.template==="collection"?`
                            ${((Fe=(Oe=this.data)==null?void 0:Oe.settings)==null?void 0:Fe.pagination_type)&&((Ye=(Ue=this.data)==null?void 0:Ue.settings)==null?void 0:Ye.pagination_type)!=="off"&&this.data.settings.layout!=="slider"?`
                                {%- if paginate.pages > 1 -%}
                                ${this.data.settings.pagination_type==="default"?`
                                    <nav role="navigation" ecom-child-element" data-child-name="pagination" data-child-title="Pagination"
                                        <ol class="ecom-pagination-navigation ecom-collection__pagination-navigation">
                                            {%- if paginate.previous -%}
                                                <li class="ecom-prev" style="${this.data.settings.pagination_style=="block"?"margin-right:auto":""}">
                                                    <a class="ecom-pagination-item ecom-paginate-action" href="{{ paginate.previous.url }}">
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
                                                            <a class="ecom-pagination-item" href="{{ part.url }}" title="{{ part.title }}">
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
                                                    <a class="ecom-paginate-action ecom-pagination-item" href="{{ paginate.next.url }}">
                                                        ${this.data.settings.number_type!=="icon"?this.lang(this.data.settings.text_next_page,"next_page"):""}
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
                                    `:`
                                        ${this.data.settings.pagination_type==="loadmore"?`
                                        {%- if paginate.next.url -%}
                                            <div class="ecom-products-pagination-loadmore ecom-collection__pagination-navigation">
                                                <a data-get='{{ paginate.next.url }}' href="{{ paginate.next.url }}" class="ecom-products-pagination-loadmore-btn ecom-pagination-item">
                                                    <span class="ecom-paginate-loadmore--content ecom-flex ecom-al_center">
                                                    ${(Qe=this.data.settings)!=null&&Qe.loadmore_text?`<span class="ecom-paginate-loadmore--text">${this.data.settings.loadmore_text||""}</span>`:""}
                                                    ${(Ge=this.data.settings)!=null&&Ge.loadmore_icon?`<span class="ecom-paginate-action--icon ecom-flex ecom-al_center">${this.data.settings.loadmore_icon||""}</span>`:""}
                                                    </span>
                                                </a>
                                            </div>
                                        {%- endif -%}`:`
                                        {%- if paginate.next.url -%}
                                        <div data-get='{{ paginate.next.url }}' href="{{ paginate.next.url }}" class="ecom-products-pagination-infinite ecom-w__full ecom-fl_center ecom-al_center">
                                            <button class="ecom-loading"></button>
                                        </div>
                                        {%- endif -%}
                                        `}
                                    `}

                                {%- endif -%}

                            `:""}

                            {% endpaginate %}
                        {% endif %}

                        `:""}
                        {% assign collection = tmp_collection %}
                        {% assign product = tmp_product %}
                    `,preview:`<div class="ecom-collection__product--wrapper-items ecom-collection-product__layout-${this.layout}" >`+[1,2,3,4].map(()=>`
                                    <div class="ecom-collection__product-item">
                                        <div class="ecom-collection__product-card ecom-collection__product-card-loading">
                                            <div class="ecom-collection__product-card-image">
                                            </div>
                                            <div class="ecom-collection__product-card-content">
                                                <h4></h4>
                                                <div class="ecom-collection__product-card-description">
                                                </div>
                                            </div>
                                        </div>
                                </div>`).join("")+"</div>"}}},products(){return this.data},isNavigation(){var o,n;return((o=this.data.settings)==null?void 0:o.layout)==="slider"&&((n=this.data.settings)==null?void 0:n.slider_navigation_layout)},isCombined(){var n,e;return((e=(n=this.data)==null?void 0:n.settings)==null?void 0:e.slider_navigation_layout)==="neo_full"?"combine":"classic"},icon(){var o;return(o=this.data.settings)==null?void 0:o.icon},layout(){return this.data&&this.data.settings&&"layout"in this.data.settings?this.data.settings.layout:"grid"},show_description(){return this.data&&this.data.settings&&"show_description"in this.data.settings&&this.data.settings.show_description===!0},short_limit(){return this.data&&this.data.settings&&"limit_short_description"in this.data.settings?this.data.settings.limit_short_description:10},show_picker(){return this.data&&this.data.settings&&"show_picker"in this.data.settings?this.data.settings.show_picker==="show":!1},swatch_type(){let o=this.data&&this.data.settings&&"type"in this.data.settings?this.data.settings.type:"dropdown";return["image","color","radio"].includes(o)&&this.data&&this.data.settings&&"option"in this.data.settings&&this.data.settings.option?o:"dropdown"},option_layout(){return this.data&&this.data.settings&&"option_layout"in this.data.settings&&this.data.settings.option_layout?this.data.settings.option_layout:"dropdown"},show_product_rating(){var o,n;return(n=(o=this.data)==null?void 0:o.settings)==null?void 0:n.show_product_rating},show_product_quickview(){var o,n;return(n=(o=this.data)==null?void 0:o.settings)==null?void 0:n.show_product_quickview},show_product_wishlist(){var o,n,e;return(e=(n=(o=this.data)==null?void 0:o.settings)==null?void 0:n.show_product_wishlist)!=null?e:!1},shows_countdown(){var o,n,e;return(e=(n=(o=this.data)==null?void 0:o.settings)==null?void 0:n.shows_countdown)!=null?e:[]},requestShopifyType(){let o=["collection"];return this.data.template&&o.includes(this.data.template)?{shopify_type:this.data.template}:{}},badge_tags(){var o,n,e;return(e=(n=(o=this.data)==null?void 0:o.settings)==null?void 0:n.badge_tags)!=null?e:"".split(`
`).join(",")},quickshop_layout(){var o,n,e;return(e=(n=(o=this.data)==null?void 0:o.settings)==null?void 0:n.quickshop_layout)!=null?e:"lite"},quickview_snippet(){var o,n,e,m,y,v;return`
                {%- assign quickview_app = shop.metafields.ecomposer.app_quickview.value -%}
                <div
                        class="ecom-collection__product--quickview-wrapper"
                        data-child-name="button"
                        data-child-title="Button"
                        data-quickview-app="{{quickview_app}}"
                    >
                        {%- if quickview_app -%}
                            {% case quickview_app %}
                                {% when 'intergrated' %}
                                    <a  href="{{ product.url }}" title="{{ product.title }}" class="ecom-product-quickview" data-handle="{{product.handle}}" data-id="{{product.id}}">
                                    ${(e=(n=(o=this.data)==null?void 0:o.settings)==null?void 0:n.quickview_icon)!=null?e:""}
                                    <span class="ecom-product-quickview--text">
                                        ${(v=(y=(m=this.data)==null?void 0:m.settings)==null?void 0:y.quickview_text)!=null?v:""}
                                    </span>
                                    </a>
                            {% endcase %}
                        {% endif %}

                    </div>
            `},wishlist_snippet(){return`
                    {%- assign wishlist_app = shop.metafields.ecomposer.app_wishlist.value -%}
                    <div
                        class="ecom-collection__product--wishlist-wrapper ecom-child-element"
                        data-child-name="wishlist"
                        data-child-title="Wishlist"
                        data-wishlist-app="{{wishlist_app}}"
                    >
                        {%- if wishlist_app -%}
                            {% case wishlist_app %}
                                {%- when 'swym-relay'-%}
                                    {% capture  ecom_swym_snippet%}{% include 'swym-product-view', product: product %}{% endcapture%}
                                    {% unless ecom_swym_snippet contains 'Liquid error' %}
                                        {{ ecom_swym_snippet }}
                                    {% else %}
                                        ${this.exporting?"":`<a onClick="window.open('https://swym.it/help/adding-the-swym-product-view-snippet-to-your-shopify-theme/')" target="_blank" title="Documentation">Wishlit not integrated. Please follow this document to integrate</a>`}
                                    {% endunless%}
                                    <button class="swym-button swym-add-to-wishlist-view-product product_{{product.id}} ecom-collection__product-wishlist-button" ${this.exporting?"":'style="display:block;"'} data-swaction="addToWishlist" data-product-id="{{product.id | json}}"></button>
                                {% when 'wishlist-hero' %}
                                    {% capture the_hero_wishlist_snippet %}
                                        {% render 'wishlisthero-collection-product' with product: product %}
                                    {% endcapture %}
                                    {% unless the_hero_wishlist_snippet contains 'Liquid error' %}
                                        {{ the_hero_wishlist_snippet }}
                                    {% endunless %}
                                {% when 'wishlist-wishify'%}
                                    {% render 'ZooomyListWishlistColl' with product: product %}
                                {% when 'growave' %}
                                    {% capture the_snippet_fave_icon %}{% include 'ssw-widget-faveicon' with product.id %}{% endcapture %}
                                    {% unless the_snippet_fave_icon contains 'Liquid error' %}
                                        {{ the_snippet_fave_icon }}
                                    {% endunless %}
                                {% else %}
                            {% endcase %}
                        {% endif%}

                    </div>
                `},review_snippet(){return`
                    <div
                        class="ecom-collection__product-rating-wrapper ecom-child-element"
                        data-child-name="rating"
                        data-child-title="Rating"
                        data-rating-platform="{{review_platform}}"
                    >
                        {%- if review_platform -%}
                            {%- case review_platform -%}
                                {%- when 'none' -%}
                                {%- when 'ali-reviews' -%}
                                    <div product-id="{{ product.id }}" class="arv-collection arv-collection--{{ product.id }}"></div>
                                {%- when 'opinew-reviews' -%}
                                    <div class='opinew-stars-plugin-product-list'>{% render 'opinew_review_stars_lists' product:product %}</div>
                                {%- when 'judgeme' -%}
                                    {%- render 'judgeme_widgets', widget_type: 'judgeme_preview_badge', jm_style: '', concierge_install: true ,  product: product-%}
                                {%- when 'product-reviews-addon' -%}
                                    <span class=" stamped-product-reviews-badge" data-product-sku="{{ product.handle }}" data-id="{{ product.id }}" style="display:block;">{{- product.metafields.stamped.badge -}}</span>
                                {%- when 'areviews-aliexpress'-%}
                                    <div class="areviews_product_item areviews_stars{{ product.id }}"  data-product-id="{{ product.id }}"></div>
                                {%- when 'loox'-%}
                                    <div class="loox-rating" data-id="{{ product.id }}" data-rating="{{ product.metafields.loox.avg_rating }}" data-raters="{{ product.metafields.loox.num_reviews }}"></div>
                                {% when 'ryviu'%}
                                    <div class="ryviu-collection">
                                        <ryviu-widget-total collection=1
                                            reviews_data="{{product.metafields.ryviu.product_reviews_info  | escape  }}"
                                            product_id="{{product.id}}" handle="{{product.handle}}">
                                        </ryviu-widget-total>
                                    </div>
                                {%- when 'yotpo-social-reviews' -%}
                                    <div class="yotpo bottomLine" style="display:inline-block" data-product-id="{{ product.id }}"> </div>
                                {%- when 'aliexpress-reviews-importer'-%}
                                    <div class="shop-booster-content shop-booster-col-rat" id="shop-booster-pid-d-{{ product.id }}" ></div>
                                {%- when 'rivyo-product-review'-%}
                                    <div class="wc_product_review_badge" data-handle="{{ product.handle }}" data-product_id="{{ product.id }}"></div>
                                {%-when 'growave' -%}
                                    {% capture the_snippet_review_avg %}{% render 'ssw-widget-avg-rate-listing', product: product %}{% endcapture %}
                                        {% unless the_snippet_review_avg contains 'Liquid error' %}
                                        {{ the_snippet_review_avg }}
                                    {% endunless %}
                                {%- when 'smart-aliexpress-reviews'-%}
                                    <div class="scm-reviews-rate" data-rate-version2= {{ product.metafields.scm_review_importer.reviewsData.reviewCountInfo | json}}>
                                    </div>
                                {%- when 'photo-reviews' -%}
                                    <div class='opinew-stars-plugin-product-list'>{% render 'opinew_review_stars_lists' product:product %}</div>
                                {%- when 'product-reviews' -%}
                                    <span class="shopify-product-reviews-badge" data-id="{{ product.id }}"></span>
                                {%- when 'lai-reviews' -%}
                                    {%- if EComBuilderMode -%}
                                        <div class="ecom-placeholder-on-builder-mode" data-ecom-placeholder="Lai star rating"></div>
                                    {%- endif -%}
                                    <div class="scm-reviews-rate" data-rate-version2={{ product.metafields.scm_review_importer.reviewsData.reviewCountInfo | json }} data-product-id= {{ product.id }}></div>
                                {%- when 'trustoo' -%}
                                    <div class="ecom-star-rating-sealapp" product-id="{{ product.id }}"></div>
                                {%- when 'rivyo' -%}
                                    <div class="wc_product_review_badge" data-handle="{{ product.handle }}" data-product_id="{{ product.id }}"></div>
                                {% else %}
                                <p>The rating platform not supported</p>
                            {%-endcase-%}
                        {%- else -%}
                            <p>Please select the rating platform in settings</p>
                        {%- endif -%}

                    </div>
                `},css(){return`

                /** Swiper css **/
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
                .ecom-swiper-navigation[data-navigator-type="combine"]{
                    justify-content: center
                }
                .ecom-swiper-pagination{
                    display:flex;
                }


                /** Core **/

                .ecom-flex-column {
                    display: flex;
                    flex-direction: column
                }

                .ecom-collection__product-item--information{
                    flex: 1
                }
                .ecom-collection.ecom-collection__product {
                    width: 100%;
                    overflow: hidden;
                }
                .ecom-d-flex {
                    display: flex;
                    flex-wrap:wrap;
                }

                .ecom-collection__product--rating-wrapper {
                    position: relative
                }
                .ecom-collection__product-item[data-style="absolute"] .ecom-collection__product--actions[data-layout="lite"] {
                    display: none;
                }
                .ecom-collection__product .ecom-collection__product-media a {
                    text-decoration: none;
                    color: inherit;
                    width: 100%
                }

                .ecom-collection__product--wrapper-items {
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    display: grid;
                    gap: 1rem;
                }
                /*
                .ecom-collection__product--wrapper-items.ecom-collection-product__layout-list {
                    grid-template-columns: repeat(1, minmax(0, 1fr));
                    grid-gap: 10px;
                }
                */
                .ecom-swiper-wrapper.ecom-collection__product--wrapper-items{
                    display:flex;
                    gap:0
                }
                .ecom-collection__product-main.ecom-swiper-container:not(.ecom-swiper-initialized) .ecom-collection__product-item{
                    max-width: 200px;
                }
                .ecom-collection__product-quick-shop--force-hide {
                    display: none !important;
                }


                .ecom-collection__product-countdown-progress-bar {
                    display: flex;
                    align-items: center;
                    width: 100%;
                }

                .ecom-collection__product-countdown-progress-bar--wrap {
                    flex: 1;
                    background: #BABFC3;
                    border-radius: 2px;
                    overflow:hidden;
                }

                .ecom-collection__product-countdown-progress-bar--timer {
                    position: relative;
                    width: 100%;
                    height: 5px;
                    background: #111827;
                    display: block;
                    border-radius: 2px;
                    z-index: 1
                }



                .ecom-collection__product-media {
                    display: block;
                    position: relative;
                }

                .ecom-collection__product-media--portrait {
                    padding-bottom: 125% !important;
                }

                .ecom-collection__product-media--square {
                    padding-bottom: 100% !important;
                }
                .ecom-collection__product-item svg.ecom-colection__product-svg-placeholder{
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0 0 0 /.1);
                    position: absolute;
                    top: 0;
                    left: 0;
                }

                body[ecom-loaded] .ecom-products-pagination-infinite {
                    display: none;
                }
                .ecom-products-pagination-infinite button.ecom-loading {
                    display: block;
                    margin: 25px auto;
                    border: none;
                    background: none;
                }
                .ecom-core .ecom-collection__product-media img {
                    max-width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    object-position: center center;
                    /*transition: opacity .4s cubic-bezier(.25, .46, .45, .94);*/
                }

                .ecom-collection__product--text-only {
                    background: rgb(26 27 24 / 8%);
                }

                .ecom-collection__product-item {
                    overflow: hidden;
                }
                .ecom-collection__product-media-wrapper {
                    position:relative;
                }
                .ecom-collection__product-item[data-style="horizontal"] .ecom-collection__product-media-wrapper{
                    flex-basis:30%;
                }
                .ecom-collection__product-item[data-style="absolute"] .ecom-collection__product--actions:not([data-layout="full"]){
                    position: absolute;
                    opacity: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    align-self: center;
                    justify-content: center;
                    inset: 0;
                    margin: auto;
                    text-align: center;
                }

                .ecom-collection__product-prices .ecom-collection__product-price--from {
                    text-decoration: none !important;
                }
                .ecom-collection__product-item .ecom-collection__product-item--inner {
                    display: flex;
                    width:100%;
                    height:100%;
                    overflow:hidden;
                }
                .ecom-product-single__countdown-container {
                    display: flex;
                }
                .ecom-collection__product--text-only .ecom-collection__product-item--content {
                    grid-row: 2;
                    justify-self: center;
                    margin-bottom: 6rem;
                    margin-top: 5rem;
                }

                .ecom-collection__product--text-only .ecom-collection__product-item--inner {
                    display: grid;
                    grid-template-rows: 1fr auto 1fr;
                    width: 100%;
                }

                .ecom-collection__product-badge {
                    z-index: 3;
                    position: absolute;
                    right: 8px;
                    left: 8px;
                    top: 8px;
                    display: flex;
                    flex-direction: column;
                    pointer-events: none
                }

                .ecom-paginate-loadmore--icon {
                    width: 16px;
                }
                .ecom-collection__product-badge>span {
                    pointer-events: auto
                }

                .ecom-visually-hidden {
                    display: none;
                }

                .ecom-collection__product-quick-shop-wrapper {
                    display: none;
                }
                .ecom-collection__product-variants[data-picker-type="dropdown"] .ecom-collection__product-quick-shop-wrapper,
                .ecom-collection__product-variants[data-picker-type="radio"] .ecom-collection__product-quick-shop-wrapper{
                    display: block;
                }
                .ecom-collection__product-media-image {
                    display: block;
                }

                .ecom-collection__product-secondary-media {
                    opacity: 0;
                    -webkit-transition: .4s ease-in-out;
                    transition: .4s ease-in-out;
                }

                .ecom-collection__product-media-wrapper:hover .ecom-collection__product-media--hover-effect .ecom-collection__product-media-image {
                    opacity: 0;
                    transition: opacity .4s cubic-bezier(.25, .46, .45, .94);
                }

                .ecom-collection__product-media-wrapper:hover .ecom-collection__product-media--hover-effect .ecom-collection__product-secondary-media {
                    opacity: 1;
                }

                .ecom-collection__product .selector-wrapper,
                .ecom-collection__product .ecom-collection__product-picker-main,
                .ecom-collection__product .ecom-collection__product-picker-other {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                .ecom-collection__product .selector-wrapper label{
                    width:100%;
                }
                .ecom-collection__product-picker-colors-item .ecom-collection__product-picker-colors-item--preview {
                    display: block;
                    width: 100%;
                    height: 100%;
                }

                .ecom-collection__product-picker-images-list,
                .ecom-collection__product-picker-colors-list,
                .ecom-collection__product-picker-radio-list {
                    display: flex;
                    width: 100%;
                    flex-wrap: wrap;
                    overflow:hidden;
                    list-style: none;
                }
                .ecom-collection__product-picker-radio-list {
                    list-style: none;
                }
                .ecom-collection__product-picker-colors-item,
                .ecom-collection__product-picker-images-item {
                    overflow: hidden;
                }
                .ecom-collection__product-picker-radio-list li,
                .ecom-collection__product-picker-images-list li,
                .ecom-collection__product-picker-colors-list li {
                    position: relative;
                    cursor: pointer;
                    list-style: none;
                }

                .ecom-collection__product-picker-radio-label,
                .ecom-collection__product-swatch-item--wrapper {
                    display: inline-block
                }
                .ecom-collection__product-swatch-item img{
                    display:block
                }
                .ecom-collection__product-swatch-item--wrapper {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                }
                .ecom-collection__product-variants{
                    transition: all 300ms ease;
                }
                .ecom-collection__product-item[data-style="absolute"] .ecom-collection__product-variants.ecom-active {
                    position: absolute;
                    background:rgb(238 238 238 / 70%);
                    inset: 0;
                    z-index:999;


                }
                .ecom-collection__product-item[data-style="absolute"] .ecom-collection__product-variants.ecom-active .ecom-collection__product-form{
                    display:flex;
                    align-items: center;
                    justify-content:center;
                    align-self: center;
                    position:relative;
                    height:100%;
                    flex-direction: column;
                    align-items:center;


                }
                .ecom-collection__product-item .ecom-collection__product-close{
                    display:none;
                }
                .ecom-collection__product-item[data-style="absolute"] .ecom-collection__product-variants.ecom-active .ecom-collection__product-close{
                    display:flex;
                    justify-content: center;
                    align-items: center;
                }
                .ecom-collection__product-item[data-style="absolute"]  .ecom-collection__product-close {
                    position: absolute;
                    right: 5px;
                    top: 5px;
                    z-index:999;
                    border:none;
                    box-shadow: none;
                    padding: 0;
                    width: 24px;
                    height: 24px;
                    min-height: 24px;
                    overflow: hidden;
                    border-radius: 50%;
                  }
                  .ecom-collection__product-media {
                    display: block;
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                  .ecom-collection__product-item[data-style="absolute"]  .ecom-collection__product-close:hover {
                    opacity: 1;
                    transition: width 1s;
                     -webkit-transition: width 1s;
                  }
                  .ecom-collection__product-item[data-style="absolute"]  .ecom-collection__product-close:before,  .ecom-collection__product-item[data-style="absolute"]  .ecom-collection__product-close:after {
                    position: absolute;
                    content: ' ';
                    width: 2px;
                    height: 14px;
                    background-color: #222;
                  }
                  .ecom-collection__product-item[data-style="absolute"]  .ecom-collection__product-close:before {
                    transform: rotate(45deg);
                  }
                  .ecom-collection__product-item[data-style="absolute"]  .ecom-collection__product-close:after {
                    transform: rotate(-45deg);
                  }

                .ecom-collection__product-countdown-time {
                    display: inline-flex;
                    flex-wrap: wrap;
                    align-items:center;
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

                .ecom-paginate-action span {
                    display: flex;
                }

                .ecom-paginate-action {
                    display: inline-flex !important;
                    grid-column-gap: 12px;
                    align-items: center;
                    color:currentColor;
                    text-decoration:none;
                }

                .ecom-collection__pagination-navigation {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    list-style: none;
                }

                .ecom-collection__pagination-navigation li {
                    display:flex;
                }
                a.ecom-pagination-item {
                    display: flex;
                    text-decoration: none;
                    color: unset;
                }
                .ecom-collection__product--compare-at-price {
                    text-decoration: line-through;
                }

                .ecom-collection__product-quick-shop--force-show {
                    display: block !important;
                }

                .ecom-collection__product-item-vendor a {
                    display: block;
                }
                /** Skeleton **/

                .ecom-collection__product-card {
                    background-color: #fff;
                    border-radius: 6px;
                    overflow: hidden;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
                }

                .ecom-collection__product-card .ecom-collection__product-card-image {
                    height: 200px;
                }

                .ecom-collection__product-card .ecom-collection__product-card-image img {
                    display: block;
                    width: 100%;
                    height: inherit;
                    object-fit: cover;
                }

                .ecom-collection__product-card .ecom-collection__product-card-content {
                    padding: 2rem 1.8rem;
                }

                .ecom-collection__product-card h4 {
                    margin: 0 0 1rem;
                    font-size: 1.5rem;
                    line-height: 1.5rem;
                }

                .ecom-collection__product-card .ecom-collection__product-card-description {
                    font-size: 1rem;
                    line-height: 1.4rem;
                }

                .ecom-collection__product-card.ecom-collection__product-card-loading .ecom-collection__product-card-image,
                .ecom-collection__product-card.ecom-collection__product-card-loading h4,
                .ecom-collection__product-card.ecom-collection__product-card-loading .ecom-collection__product-card-description {
                    background-color: #ededed;
                    background: linear-gradient(100deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 60%) #ededed;
                    background-size: 200% 100%;
                    background-position-x: 180%;
                    animation: 1s loading ease-in-out infinite;
                }

                @keyframes loading {
                    to {
                        background-position-x: -20%;
                    }
                }

                .ecom-collection__product-card.ecom-collection__product-card-loading h4 {
                    min-height: 1.6rem;
                    border-radius: 4px;
                    animation-delay: 0.05s;
                }

                .ecom-collection__product-card.ecom-collection__product-card-loading .ecom-collection__product-card-description {
                    min-height: 4rem;
                    border-radius: 4px;
                    animation-delay: 0.06s;
                }

                .ecom-collection__product-item {
                    position: relative;
                }

                .ecom-collection__product-form__actions {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }



                .ecom-collection__product-item:hover .ecom-product-image-loading img:last-child {
                    min-height: 150px;
                }

                .ecom-collection__product-item:hover .ecom-product-image-loading::before {
                    visibility: visible;
                }
                .ecom-collection__product-form__actions--soldout,
                .ecom-collection__product-form__actions--view-more,
                .ecom-collection__product-form__actions--add {
                    display: flex;
                    flex-direction: row;
                    align-content: center;
                    justify-content: center;
                    align-items: center;
                }
                .ecom-collection__product-item svg{
                    width:40px;
                    height: 40px;
                }
                .ecom-collection__product-view-more-after .ecom-collection__product-view-more-icon,
                .ecom-collection__product-quickshop-icon-after .ecom-collection__product-quickshop-icon,
                .ecom-collection__product-add-cart-icon-after .ecom-collection__product-add-cart-icon,
                .ecom-collection__product-sold-out-after .ecom-collection__product-sold-out-icon {
                    order: 1;
                }
                .ecom-collection__product-add-cart-icon {
                    display: flex;
                }
                .ecom-collection__product-submit:not(.ecom-collection__product-quick-shop--force-hide),
                .ecom-collection__product-form__actions--quickshop:not(.ecom-collection__product-quick-shop--force-hide) {
                    display: inline-flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    align-content: center;
                    justify-content: center;
                    align-items: center;
                }
                .ecom-product-image-loading::before {
                    content: ' ';
                    position: absolute;
                    width: 40px;
                    height: 40px;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    z-index: 4;
                    border: 4px solid #343232;
                    opacity: 1;
                    visibility: hidden;
                    border-radius: 50%;
                    animation: ecom-loading .5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
                    vertical-align: middle;
                    margin: auto;
                }

                @keyframes ecom-loading {
                    0% {
                        top: 0px;
                        left: 0px;
                        width: 0;
                        height: 0;
                        opacity: 1;
                    }
                    100% {
                        top: 0px;
                        left: 0px;
                        width: 72px;
                        height: 72px;
                        opacity: 0;
                    }
                }
            .ecom-collection__product .ecom-swiper-controls:after
            {
                content:'';
            }
            .ecom-collection__product .ecom-swiper-controls svg{
                width:40px;
                height:40px;
            }
            .ecom-collection__product .ecom-swiper-button-next,.ecom-collection__product  .ecom-swiper-button-prev{
                width:auto;
                height:auto
            }
            .ecom-collection__product-picker-main-label{
                width:100%;
            }
            .ecom-collection__product-picker-dropdown-label,
            .ecom-collection__product-picker-radio-label,
            .ecom-collection__product-item-information-title{
                width:100%;
            }
            .ecom-collection__product-item-information-title{
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: var(--ecom-webkit-line-clamp,2);
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .ecom-collection__product-prices{
                display:flex;
                gap:10px;
                flex-wrap: wrap;
                align-items: baseline;
            }


            .ecom-collection__product-container {
                display: flex;
                flex-direction: column;
            }
            .ecom-collection__product-container .ecom-swiper-container {
                width: 100%
            }
            .ecom-collection__product-container .ecom-swiper-button-next:after,
            .ecom-collection__product-container .ecom-swiper-button-prev:after {
                content: none;
            }
            .ecom-collection__product-container .ecom-swiper-navigation[data-navigator-type="combine"] .ecom-swiper-button-next,
            .ecom-collection__product-container .ecom-swiper-navigation[data-navigator-type="combine"] .ecom-swiper-button-prev {
                position: static;
                margin: 0;
            }
            .ecom-collection__product-container .ecom-swiper-button-next,
            .ecom-collection__product-container .ecom-swiper-button-prev {
                border: 0;
                background: transparent;
                width: auto;
                height: auto;
                padding: 5px;
                color: #444
            }
            .ecom-collection__product-container .ecom-swiper-pagination {
                position: relative;
                display: flex;
                flex-wrap: wrap;
                align-items: center
            }
            .ecom-collection__product-container .ecom-swiper-pagination-bullet {
                width: 15px;
                height: 15px;
                opacity: 1;
                overflow: hidden;
            }
            .ecom-collection__product-container .ecom-swiper-pagination-bullet,
            .ecom-collection__product-container .ecom-swiper-pagination-bullet-active{
                background-clip: content-box;
                padding: 1px;
                box-sizing: content-box !important;
                background-color: currentColor;
            }
            .ecom-collection__product-media-wrapper.ecom-image-align{
                display: flex;
                overflow: hidden;
                flex-direction: column;
                justify-content: center;
            }
            .ecom-collection__product-countdown-wrapper{
                display:flex;
                flex-direction:column;
            }
            .ecom-collection__product-badge > span{
                display:flex;
                align-items: center;
                text-align: center;
                justify-content: center;
            }
            .ecom-flex-row,
            .ecom-collection-product__layout-list .ecom-collection__product-item--wrapper {
                display:grid;
                grid-template-columns: 40% auto;
            }
            .ecom-collection__product-loading {
                margin-top: 50px;
            }
            .ecom-doing-filter .ecom-collection__product-loading {
                display: block;
            }
            .ecom-doing-filter .ecom-collection__product-container_collection {
                display: none;
            }
            /**
             *
             * Quick view
             * **/
            .ecom-product-quickview{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 3px;
            }
            .ecom-collection__product--quickview-wrapper {
                display: flex;
            }

        /* Progressbar **/

        .ecom-collection__product-countdown-progress-bar--wrap >div {
            background-image: -webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
            background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,rgba(0,0,0,0) 25%,rgba(0,0,0,0) 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,rgba(0,0,0,0) 75%,rgba(0,0,0,0));
            -webkit-animation: 2s linear infinite ecom_progress_bar;
            animation: 2s linear infinite ecom_progress_bar;
            background-size: 60px 60px;
            transition: width 1s;
            -webkit-transition: width 1s;
        }

        @-webkit-keyframes ecom_progress_bar {
            from {
                background-position: 0 0
            }

            to {
                background-position: 40px 0
            }
        }

        @keyframes ecom_progress_bar {
            from {
                background-position: 0 0
            }

            to {
                background-position: 40px 0
            }
        }


        `},sliderNav(){var o;return{position:((o=this.data.settings)==null?void 0:o.navigation_position)!=="center"?"unset":"absolute"}},enable_countdown(){var o,n,e;return(e=(n=(o=this.data)==null?void 0:o.settings)==null?void 0:n.enable_countdown)!=null?e:!1},optionSwiper(){return this.$helpers.optionSwiper(this.data.settings)},show_all(){return this.active_child_elenent===!0}},watch:{optionSwiper:{deep:!0,handler:function(){this.products.refresh=this.$helpers.randid()}}},methods:{getDomain(){return window.location.hostname},isArrow(){var o;return["neo_full","navigation","classic_full"].includes((o=this.data.settings)==null?void 0:o.slider_navigation_layout)},isPagination(){var o;return["neo_full","classic_full","pagination"].includes((o=this.data.settings)==null?void 0:o.slider_navigation_layout)},style(){var y,v;let o={};this.data.settings.styleCountdown=="column"&&(o={params:{alias:"text-align",options:{label:"Alignment"}}});let n=[{group_name:"general",group_title:"General",visible:[!0,null].includes(this.active_child_elenent),selector:" .ecom-collection__product-item",params:[{type:"tab",name:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"}]},css:{isCss:!1}},{name:"backgroundColor",label:"Background",type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:t=>t.tab==="normal"}},css:{properties:{"background-color":""}}},{type:"popup",label:"Box shadow",name:"boxShadow",options:{oneline:!0,type:"box-shadow",visible:{condition:t=>t.tab==="normal"}},css:{}},{type:"popup",label:"Border",name:"border",options:{type:"border",oneline:!0,visible:{condition:t=>t.tab==="normal"}},css:{}},{name:"borderRadius",label:"Border Radius",type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:{condition:t=>t.tab==="normal"}},css:{properties:{"border-radius":""}}},{name:"backgroundColorHoverMode",label:"Background",type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:t=>t.tab==="hover"}},css:{selector:":hover",properties:{"background-color":""}}},{type:"popup",label:"Box shadow",name:"boxShadowHoverMode",options:{oneline:!0,type:"box-shadow",visible:{condition:t=>t.tab==="hover"}},css:{selector:":hover"}},{type:"popup",label:"Border",name:"borderHoverMode",options:{type:"border",oneline:!0,visible:{condition:t=>t.tab==="hover"}},css:{selector:":hover"}},{name:"borderRadiusHoverMode",label:"Border Radius",type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:{condition:t=>t.tab==="hover"}},css:{selector:":hover",properties:{"border-radius":""}}},{type:"line"},{name:"padding",type:"dimension",label:"Padding",options:{responsive:!0,simple:!0,units:"default"},css:{properties:{padding:""}}}]},{group_name:"products_item",group_title:"Product items",selector:" .ecom-collection__product-item",params:[{type:"tab",name:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"}]},css:{isCss:!1}},{name:"backgroundColor",label:"Background",type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:t=>t.tab==="normal"}},css:{properties:{"background-color":""}}},{type:"popup",label:"Border",name:"border",options:{type:"border",oneline:!0,visible:{condition:t=>t.tab==="normal"}},css:{}},{type:"popup",label:"Box shadow",name:"boxShadow",options:{oneline:!0,type:"box-shadow",visible:{condition:t=>t.tab==="normal"}},css:{}},{alias:"spacing"},{name:"borderRadius",label:"Border Radius",type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:{condition:t=>t.tab==="normal"}},css:{properties:{"border-radius":""}}},{name:"backgroundColorHoverMode",label:"Background",type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:t=>t.tab==="hover"}},css:{selector:":hover",properties:{"background-color":""}}},{type:"popup",label:"Border",name:"borderHoverMode",options:{type:"border",oneline:!0,visible:{condition:t=>t.tab==="hover"}},css:{selector:":hover"}},{type:"popup",label:"Box shadow",name:"boxShadowHoverMode",options:{oneline:!0,type:"box-shadow",visible:{condition:t=>t.tab==="hover"}},css:{selector:":hover"}},{name:"borderRadiusHoverMode",label:"Border Radius",type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:{condition:t=>t.tab==="hover"}},css:{selector:":hover",properties:{"border-radius":""}}},{type:"popup",label:"Hover Animation",name:"ImageHoverAnimation",options:{type:"dropdown",values:"animation",size:"small",icon_type:"animation",visible:{keep_data:!0,condition:t=>t&&t.tab=="hover"}},css:{selector:":hover",properties:{animation:""}}},{alias:"transitions"}]},{group_title:"Product image",group_name:"product_image",selector:" .ecom-collection__product-item",visible:[!0,null,"image"].includes(this.active_child_elenent),params:[{type:"number",name:"imageWidth",label:"Width",options:{responsive:!0,reset:!0,units:{"%":{min:0,max:100},px:{min:0,max:1e3},vw:{min:0,max:100}}},css:{important:!0,selector:" .ecom-collection__product-media--container",properties:{width:""}}},{type:"number",name:"imageMaxWidth",label:"Max Width",options:{responsive:!0,reset:!0,units:{"%":{min:0,max:100},px:{min:0,max:1e3},vw:{min:0,max:100}}},css:{selector:" .ecom-collection__product-media--container",properties:{"max-width":""}}},{type:"number",name:"imageHeight",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3},vh:{min:0,max:100}}},css:{important:!0,selector:"  .ecom-collection__product-media--container",properties:{height:""}}},{alias:"justify-content",options:{label:"Alignment",css:{selector:" .ecom-collection__product-item--inner "}}},{name:"object-fit",label:"Image fit",type:"popup",options:{type:"dropdown",default:!1,values:{none:"None",fill:"Fill",contain:"Contain",cover:"Cover","scale-down":"Scale down"}},css:{selector:" .ecom-collection__product-media img",properties:{"object-fit":""}}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"}]},css:{isCss:!1}},{name:"image_opacity",type:"number",label:"Opacity",options:{step:.01,min:.1,max:1,visible:function(t){return t.tab==="normal"}},css:{selector:" .ecom-collection__product-media img",properties:{opacity:""}}},{name:"image_opacity_hover",type:"number",label:"Opacity",options:{step:.01,min:.1,max:1,visible:function(t){return t.tab==="hover"}},css:{selector:":hover .ecom-collection__product-media img",properties:{opacity:""}}},{name:"image_filter",label:"CSS Filters",type:"popup",options:{oneline:!0,type:"filter",visible:function(t){return t.tab==="normal"}},css:{selector:" .ecom-collection__product-media img"}},{name:"image_filter_hover",label:"CSS Filters",type:"popup",options:{oneline:!0,type:"filter",visible:function(t){return t.tab==="hover"}},css:{selector:":hover .ecom-collection__product-media img"}},{name:"box_shadow",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow",visible:function(t){return t.tab==="normal"}},css:{selector:" .ecom-collection__product-media img"}},{name:"box_shadow_hover",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow",visible:function(t){return t.tab==="hover"}},css:{selector:":hover .ecom-collection__product-media img"}},{name:"border",label:"Border",type:"popup",options:{oneline:!0,type:"border",size:"small",visible:function(t){return t.tab==="normal"}},css:{selector:" .ecom-collection__product-media img"}},{name:"border_hover",label:"Border",type:"popup",options:{oneline:!0,type:"border",size:"small",visible:function(t){return t.tab==="hover"}},css:{selector:":hover .ecom-collection__product-media img"}},{name:"border_radius",label:"Border Radius",type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:function(t){return t.tab==="normal"}},css:{selector:" .ecom-collection__product-media img",properties:{"border-radius":"",overflow:"hidden"}}},{name:"border_radius_hover",label:"Border Radius",type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:function(t){return t.tab==="hover"}},css:{selector:":hover .ecom-collection__product-media",properties:{"border-radius":"",overflow:"hidden"}}},{type:"popup",label:"Hover Animation",name:"ImageHoverAnimation",options:{type:"dropdown",values:"animation",size:"small",icon_type:"animation",visible:{keep_data:!0,condition:t=>t&&t.tab=="hover"}},css:{selector:" .ecom-collection__product-media img:hover",properties:{animation:""}}},{alias:"transitions"},{type:"line",css:{isCss:!1}},{type:"dimension",label:"Spacing",name:"spacing",options:{responsive:!0,units:"default"},css:{selector:" .ecom-collection__product-media",properties:{spacing:""}}}]},{group_alias:"text:hover",visible:[!0,null,"title"].includes(this.active_child_elenent),options:{group_name:"product_title",group_title:"Title",selector:" .ecom-collection__product-item-information-title"},modify:{params:[{position:10,fields:[{type:"number",name:"lines_clamp",label:"Fixed number of lines",value:2,options:{min:1,max:5},css:{properties:{"--ecom-webkit-line-clamp":""}}},{alias:"spacing",options:{name:"spacingNormal",options:{visible:t=>t.tab==="normal"}}},{alias:"spacing",options:{name:"spacingHover",options:{visible:t=>t.tab==="hover"},css:{selector:":hover"}}}]}]}},this.data.settings.show_price=="block"?{group_alias:"text:spacing",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"product_price",group_title:"Price",selector:" .ecom-collection__product-price"},modify:{remove:{index:0,length:1},params:{position:1,fields:{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-collection__product-prices"}}}}}}:null,this.data.settings.show_price=="block"?{group_alias:"text:spacing",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"product_regular",group_title:"Compare at price",selector:" .ecom-collection__product-price--regular, .ecom-collection__product-price--from"},modify:{remove:{index:0,length:1}}}:null,this.data.settings.bage_sale&&this.data.settings.show_price=="block"?{group_alias:"button:label",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"product_regular_sale",group_title:"Sale price",selector:" .ecom-collection__product-price--sale"}}:null,this.data.template==="collection"&&this.data.settings.layout!=="slider"?{group_alias:"pagination",visible:[!0,null,"pagination"].includes(this.active_child_elenent),options:{selector:" .ecom-collection__pagination-navigation"},modify:this.data.settings.pagination_style!=="block"?{params:[{position:10,fields:{type:"choose",name:"page_txt_alignment_horizontal",label:"Text alignment<small>(horizontal)</small>",options:{responsive:!0,type:"align-x-full",values:["left","center","right"]},css:{selector:" .ecom-pagination-item",properties:{"text-align":"","justify-content":""}}}},{position:10,fields:{type:"choose",name:"page_txt_alignment_vertical",label:"Text alignment<small>(vertical)</small>",options:{responsive:!0,type:"align-y-full",values:["start","center","end"]},css:{selector:" .ecom-pagination-item",properties:{"align-items":""}}}},{position:1,fields:{type:"choose",name:"buttonAlignment",label:"Alignment",options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{display:"flex","justify-content":""}}}}]}:null}:null].filter(t=>t);if(((y=this.data.settings)==null?void 0:y.style)==="absolute"&&(n.push({group_name:"product_actions",group_title:"Button actions",visible:[!0,null,"button"].includes(this.active_child_elenent),selector:' .ecom-collection__product-item[data-style="absolute"]  .ecom-collection__product--actions',params:[{name:"flow_direction",label:"Direction",type:"popup",options:{type:"dropdown",preview:"title",default:!1,values:{column:"Vertical",row:"Horizontal"}},css:{properties:{"flex-direction":""}}},...A(),{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"}]},css:{isCss:!1}},{name:"opacity",type:"number",label:"Opacity",options:{step:.01,min:0,max:1,visible:{keep_data:!0,condition:t=>t.tab==="normal"}},css:{properties:{opacity:""}}},{name:"opacity_hover",type:"number",label:"Opacity",options:{step:.01,min:.5,max:1,visible:{keep_data:!0,condition:t=>t.tab==="hover"}},css:{selector:" root .ecom-collection__product-item:hover  .ecom-collection__product--actions",properties:{opacity:""}}},{name:"background_color",label:"Background",type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:t=>t.tab==="normal"}},css:{properties:{"background-color":""}}},{name:"background_color_hover",label:"Background",type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:t=>t.tab==="hover"}},css:{selector:" root .ecom-collection__product-item:hover  .ecom-collection__product--actions",properties:{"background-color":""}}},{name:"boxShadow",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow",visible:t=>t.tab==="normal"},css:{}},{name:"boxShadowHoverMode",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow",visible:t=>t.tab==="hover"},css:{selector:" root .ecom-collection__product-item:hover  .ecom-collection__product--actions"}},{name:"border",label:"Border",type:"popup",options:{oneline:!0,type:"border",visible:t=>t.tab==="normal"},css:{}},{name:"borderHoverMode",label:"Border",type:"popup",options:{oneline:!0,type:"border-offset",visible:t=>t.tab==="hover"},css:{selector:" root .ecom-collection__product-item:hover  .ecom-collection__product--actions"}},{name:"borderRadius",label:"Border radius",type:"dimension",options:{units:"default",type:"radius",responsive:!0,visible:t=>t.tab==="normal"},css:{properties:{"border-radius":"",overflow:"hidden"}}},{name:"borderRadiusHoverMode",label:"Border radius",type:"dimension",options:{type:"radius",units:"default",responsive:!0,visible:t=>t.tab==="hover"},css:{selector:" root .ecom-collection__product-item:hover  .ecom-collection__product--actions",properties:{"border-radius":""}}},{type:"number",label:'Transition Duration <span class="lowercase">(ms)</span>',name:"transition",options:{min:0,max:1500,visible:{keep_data:!0,condition:t=>t.tab==="hover"}},css:{properties:{transition:"all %value%ms ease"}}},{type:"line"},{type:"dimension",label:"Spacing",name:"spacing",options:{responsive:!0,units:"default"},css:{properties:{spacing:""}}}]}),n.push({group_title:"Quick shop close button",group_name:"quickshop_close_button",selector:" .ecom-collection__product-close",visible:[!0,null,"button"].includes(this.active_child_elenent),params:[{type:"number",label:"Width",name:"width",options:{units:{px:{min:1,max:200}},reset:!1,responsive:!0},css:{properties:{width:"",height:""}}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"}]},css:{isCss:!1}},{name:"background_color",label:"Color",type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:t=>t.tab==="normal"}},css:{selector:"::before,::after",properties:{"background-color":""}}},{name:"background_color_hover",label:"Color",type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:t=>t.tab==="hover"}},css:{selector:":hover::before,:hover::after",properties:{"background-color":""}}}]})),n.push({group_alias:"button",visible:[!0,null,"button"].includes(this.active_child_elenent),options:{group_title:"Add to cart button",group_name:"add_to_cart_button",selector:" .ecom-collection__product-submit"},modify:{params:[{position:0,fields:[...A(),{type:"choose",name:"buttonAlignment",label:"Alignment",options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"align-self":""}}}]},{position:30,fields:[{type:"line"},{type:"paragraph",content:"### Icon"},{type:"number",label:"Size",name:"add_cart_icon_width",options:{units:{px:{min:1,max:200}},reset:!1,responsive:!0},css:{properties:{width:"",height:""},selector:" .ecom-collection__product-add-cart-icon svg"}}]}]}},{group_alias:"button",visible:[!0,null,"button"].includes(this.active_child_elenent),options:{group_title:"Quick shop button",group_name:"quick_shop_button",selector:" .ecom-collection__product-form__actions--quickshop"},modify:{params:[{position:0,fields:[...A(),{type:"choose",name:"buttonAlignment",label:"Alignment",options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"align-self":""}}}]},{position:30,fields:[{type:"line"},{type:"paragraph",content:"### Icon"},{type:"number",label:"Size",name:"add_cart_icon_width",options:{units:{px:{min:1,max:200}},reset:!1,responsive:!0},css:{properties:{width:"",height:""},selector:" .ecom-collection__product-add-cart-icon svg"}}]}]}},{group_alias:"button",visible:[!0,null,"button"].includes(this.active_child_elenent),options:{group_title:"Unavailable button",group_name:"unavailable_button",selector:" .ecom-collection__product-form__actions--unavailable"},modify:{params:[{position:0,fields:[...A(),{type:"choose",name:"buttonAlignment",label:"Alignment",options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"align-self":""}}}]}]}}),this.data.settings.show_description&&n.push({group_alias:"text:spacing",visible:[!0,null,"description"].includes(this.active_child_elenent),options:{group_title:"Product description",group_name:"product_description",selector:" .ecom-collection__product-description"}}),n.push({group_alias:"button",visible:[!0,null,"button"].includes(this.active_child_elenent),options:{group_name:"sold_out_button",group_title:"Sold out button",selector:" .ecom-collection__product-form__actions--soldout"},modify:{params:[{position:0,fields:[...A(),{type:"choose",name:"buttonAlignment",label:"Alignment",options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"align-self":""}}}]}]}}),this.data.settings.show_product_quickview&&n.push({group_alias:"button",visible:[!0,null,"button"].includes(this.active_child_elenent),options:{group_title:"Quickview button",group_name:"quickview_button",selector:" .ecom-collection__product--quickview-wrapper > a"},modify:{params:[{position:0,fields:[...A(),{type:"choose",name:"buttonAlignment",label:"Alignment",options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"justify-content":""},selector:"root .ecom-collection__product--quickview-wrapper"}}]},{position:30,fields:[{type:"line"},{type:"paragraph",content:"### Icon"},{type:"number",label:"Size",name:"quickview_icon_width",options:{units:{px:{min:1,max:200}},reset:!1,responsive:!0},css:{properties:{width:"",height:""},selector:"  svg"}},{alias:"spacing",options:{css:{selector:" svg"},name:"quickview_icon_spacing"}}]}]}}),n.push({group_alias:"button",visible:[!0,null,"button"].includes(this.active_child_elenent),options:{group_title:"View more button",group_name:"view_more_button",selector:" .ecom-collection__product-form__actions--view-more"},modify:{params:[{position:0,fields:[...A(),{type:"choose",name:"buttonAlignment",label:"Alignment",options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"align-self":""}}}]},{position:30,fields:[{type:"line"},{type:"paragraph",content:"### Icon"},{type:"number",label:"Size",name:"viewmore_icon_width",options:{units:{px:{min:1,max:200}},reset:!1,responsive:!0},css:{properties:{width:"",height:""},selector:" svg"}},{alias:"spacing",options:{css:{selector:" .ecom-collection__product-view-more-icon"},name:"viewmore_icon_spacing"}}]}]}}),this.data.settings.show_badges||((v=this.data.settings)==null?void 0:v.show_sale_badge)){let t={params:[{position:0,fields:[{alias:"align-self",options:{label:"Alignment"}}]}]};n.push({group_alias:"button:label",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"sale_price_badge",group_title:"Sale price badge",selector:" .ecom-collection__product-badge .ecom-collection__product-price--bage-sale"},modify:t},{group_alias:"button:label",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"sale_badge",group_title:"Sale badge",selector:" .ecom-collection__product-badge .ecom-collection__product-badge--sale"},modify:t},{group_alias:"button:label",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"sold_out_badge",group_title:"Sold out badge",selector:" .ecom-collection__product-badge .ecom-collection__product-badge--sold-out"},modify:t}),this.badge_tags.length&&n.push({group_alias:"button:label",visible:[!0,null,"button"].includes(this.active_child_elenent),options:{group_name:"custom_badge",group_title:"Custom badge",selector:" .ecom-collection__product-badge .ecom-collection__product-badge--custom"},modify:t})}(this.data.settings.show_vendor||this.data.settings.show_type||this.data.settings.show_sku)&&(this.data.settings.show_vendor&&n.push({group_alias:"text:spacing",visible:[!0,null,"meta"].includes(this.active_child_elenent),options:{group_name:"show_vendor",group_title:"Vendor",selector:" .ecom-collection__product-item-vendor a"},modify:{remove:{index:1,length:1},params:[{name:"alignment",label:"Alignment",type:"choose",options:{type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{display:"flex","justify-content":""}}}]}}),this.data.settings.show_sku&&(n.push({group_alias:"text:spacing",visible:[!0,null,"meta"].includes(this.active_child_elenent),options:{group_name:"show_sku",group_title:"SKU",selector:" .ecom-collection__product-item-sku-element"},modify:{remove:{index:1,length:1},params:[{name:"alignment",label:"Alignment",type:"choose",options:{type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{display:"flex","justify-content":""}}}]}}),n.push({group_alias:"text:spacing",visible:[!0,null,"meta"].includes(this.active_child_elenent),options:{group_name:"show_sku_title",group_title:"SKU Title",selector:" .ecom-collection__product-item-sku-title"},modify:{remove:{index:1,length:1}}})),this.data.settings.show_type&&n.push({group_alias:"text:spacing",visible:[!0,null,"meta"].includes(this.active_child_elenent),options:{group_name:"show_type",group_title:"Product type",selector:" .ecom-collection__product-item-type a"},modify:{remove:{index:1,length:1},params:[{name:"alignment",label:"Alignment",type:"choose",options:{type:"text-align",values:["flex-start","center","flex-end"]},css:{selector:"root  .ecom-collection__product-item-type",properties:{"justify-content":""}}}]}})),this.data.settings.show_product_rating&&n.push({group_alias:"text:spacing",visible:[!0,null,"rating"].includes(this.active_child_elenent),options:{group_title:"Rating",group_name:"product_rating",selector:" .ecom-collection__product-rating-wrapper"},modify:{remove:{index:1,length:1},params:[{name:"alignment",label:"Alignment",type:"choose",options:{type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{display:"flex","justify-content":""}}}]}}),this.data.settings.enable_countdown&&(n.push({group_alias:"box",visible:[!0,null,"countdown"].includes(this.active_child_elenent),options:{group_name:"countdown_general",group_title:"Countdown general",selector:" .ecom-collection__product-countdown-wrapper"},modify:{params:[{position:0,fields:[...A()]},{position:1,fields:{alias:"justify-content",options:{label:"Alignment",css:{selector:" .ecom-product-single__countdown-container, .ecom-collection__product-countdown-wrapper--title"}}}},{position:30,fields:{alias:"spacing"}}]}},{group_alias:"text:spacing",visible:[!0,null,"countdown"].includes(this.active_child_elenent),options:{group_name:"countdown_title",group_title:"Countdown title",selector:" .ecom-collection__product-countdown-wrapper--title"}},{group_alias:"box",visible:[!0,null,"countdown"].includes(this.active_child_elenent),options:{group_title:"Countdown items",group_name:"countdown_items",selector:" .ecom-collection__product-time--item"},modify:{params:[{position:0,fields:[{type:"number",label:"Width",name:"width",options:{units:{px:{min:20,max:200}},reset:!1,responsive:!0},css:{properties:{width:""}}},{type:"number",label:"Height",name:"height",options:{units:{px:{min:20,max:200}},reset:!1,responsive:!0},css:{properties:{height:""}}}]},{position:30,fields:{alias:"spacing"}}]}},{group_alias:"button:label",visible:[!0,null,"countdown"].includes(this.active_child_elenent),options:{group_name:"countdown_number",group_title:"Countdown number",selector:" .ecom-collection__product-time--number"},modify:o},{group_alias:"button:label",visible:[!0,null,"countdown"].includes(this.active_child_elenent),options:{group_name:"countdown_label",group_title:"Countdown label",selector:" .ecom-collection__product-time--label"},modify:o}),this.data.settings.enable_progress_bar&&(n.push({group_name:"progress_bar",group_title:"Progress bar",visible:[!0,null,"countdown"].includes(this.active_child_elenent),selector:" .ecom-collection__product-countdown-progress-bar--wrap",params:[{type:"number",name:"maxWidth",label:"Width",options:{responsive:!0,reset:!0,units:{"%":{min:0,max:100},px:{min:0,max:500},vw:{min:0,max:100}}},css:{properties:{"max-width":""}}},{type:"number",name:"height",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:0,max:50},vh:{min:0,max:100}}},css:{selector:" .ecom-product-single__countdown-progress-bar--timer",properties:{height:"","--ecom-countdown-max-height":""}}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"active",title:"Active"}]},css:{isCss:!1}},{type:"background",label:"Background",name:"background",options:{oneline:!0,visible:{keep_data:!0,condition:t=>t.tab==="normal"}},css:{properties:{background:""}}},{type:"dimension",name:"borderRadius",label:"Border radius",options:{type:"radius",units:"default",visible:{keep_data:!0,condition:t=>t.tab==="normal"}},css:{properties:{"border-radius":""}}},{type:"background",label:"Background active",name:"backgroundActive",options:{oneline:!0,visible:{keep_data:!0,condition:t=>t.tab==="active"}},css:{selector:" .ecom-product-single__countdown-progress-bar--timer",properties:{background:""}}},{type:"dimension",name:"borderRadiusActive",label:"Border radius active",options:{type:"radius",units:"default",visible:{keep_data:!0,condition:t=>t.tab==="active"}},css:{selector:" .ecom-product-single__countdown-progress-bar--timer",properties:{"border-radius":""}}},{type:"line"},{type:"dimension",label:"Spacing",name:"spacing",options:{responsive:!0,units:"default"},css:{properties:{spacing:""}}}],position:8}),n.push({group_alias:"text:spacing",visible:this.active_child_elenent==="countdown",options:{group_name:"progress_bar_text",group_title:"Progress bar text",selector:" .ecom-collection__product-countdown-progress-bar--value"}}))),this.show_picker&&((this.data.settings.type==="radio"||this.data.settings.option_layout!=="dropdown")&&n.push({group_alias:"text:spacing",visible:[!0,null,"variant"].includes(this.active_child_elenent),options:{group_title:"Variant radio title",group_name:"variant_radio_title",selector:" .ecom-collection__product-picker-radio-label"}},{group_alias:"button:productSwatch",visible:[!0,null,"variant"].includes(this.active_child_elenent),options:{group_title:"Variant radio",group_name:"variant_radio",selector:" .ecom-collection__product-swatch-item"},modify:{params:{position:0,fields:[{type:"choose",name:"alignment",label:"Alignment",options:{responsive:!0,type:"text-align",values:["start","center","end"]},css:{selector:"root .ecom-collection__product-picker-radio-list,root .ecom-collection__product-picker-images-list",properties:{"justify-content":""}}},{alias:"text-align",options:{label:"Text alignment"},css:{selector:" .ecom-collection__product-swatch-item"}}]}}}),(this.data.settings.type==="dropdown"||this.data.settings.option_layout==="dropdown")&&n.push({group_alias:"text:spacing",visible:[!0,null,"variant"].includes(this.active_child_elenent),options:{group_title:"Variant select title",group_name:"variant_select_title",selector:" .selector-wrapper label, .ecom-collection__product-picker-dropdown-label"}},{group_alias:"input",visible:[!0,null,"variant"].includes(this.active_child_elenent),options:{group_title:"Variant select",group_name:"variant_select",selector:" .selector-wrapper select, .ecom-collection__product-picker-dropdown-list"},modify:{params:{position:1,fields:{type:"choose",name:"alignment",label:"Alignment",options:{responsive:!0,type:"text-align",values:["start","center","end"]},css:{properties:{"align-self":""}}}},remove:[{index:0,length:1},{index:3,length:1}]}}),(this.data.settings.type==="color"||this.data.settings.type==="image")&&n.push({group_alias:"text:spacing",visible:[!0,null,"variant"].includes(this.active_child_elenent),options:{group_title:"Variant swatch title",group_name:"variant_swatch_title",selector:" .ecom-collection__product-picker-main-label"}},{group_title:"Variant swatch",visible:[!0,null,"variant"].includes(this.active_child_elenent),group_name:"variant_swatch",selector:" .ecom-collection__product-picker-colors-list, .ecom-collection__product-picker-images-list",params:[{type:"choose",name:"justifyContent",label:"Alignment",options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"justify-content":""}}},{type:"background",name:"backgroundWraper",label:"Background",css:{properties:{background:""}}},{type:"popup",name:"borderWraper",label:"Border",options:{type:"border"},css:{properties:{border:""}}},{type:"dimension",label:"Border radius",name:"border-radiusWraper",options:{type:"radius",units:"default"},css:{properties:{"border-radius":""}}},{type:"dimension",name:"spacingWraper",label:"Spacing",options:{units:"default"},css:{properties:{spacing:""}}},{type:"line"},{type:"paragraph",content:"### Item"},{type:"number",name:"width",label:"Width",options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3}}},css:{properties:{width:""},selector:" li"}},{type:"number",name:"height",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3}}},css:{properties:{height:""},selector:" li"}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"},{name:"active",title:"Active"}]},css:{isCss:!1}},{name:"boxShadow",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow",visible:t=>t.tab==="normal"},css:{selector:" li"}},{name:"boxShadowHoverMode",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow",visible:t=>t.tab==="hover"},css:{selector:" li:not(.ecom-product-swatch-item--active):hover"}},{name:"boxShadowActiveMode",label:"Box Shadow",type:"popup",options:{oneline:!0,type:"box-shadow",visible:t=>t.tab==="active"},css:{selector:" li.ecom-product-swatch-item--active"}},{name:"border",label:"Border",type:"popup",options:{oneline:!0,type:"border",visible:t=>t.tab==="normal"},css:{selector:" li"}},{name:"borderHoverMode",label:"Border",type:"popup",options:{oneline:!0,type:"border-offset",visible:t=>t.tab==="hover"},css:{selector:" li:not(.ecom-product-swatch-item--active):hover"}},{name:"borderActiveMode",label:"Border",type:"popup",options:{oneline:!0,type:"border-offset",visible:t=>t.tab==="active"},css:{selector:" li.ecom-product-swatch-item--active"}},{name:"borderRadius",label:"Border radius",type:"dimension",options:{units:"default",type:"radius",responsive:!0,visible:t=>t.tab==="normal"},css:{selector:" li, li img, li .ecom-collection__product-picker-colors-item--preview",properties:{"border-radius":"",overflow:"hidden"}}},{name:"borderRadiusHoverMode",label:"Border radius",type:"dimension",options:{type:"radius",units:"default",responsive:!0,visible:t=>t.tab==="hover"},css:{selector:" li:not(.ecom-product-swatch-item--active):hover, li:not(.ecom-product-swatch-item--active):hover img, li:not(.ecom-product-swatch-item--active):hover .ecom-collection__product-picker-colors-item--preview",properties:{"border-radius":""}}},{name:"borderRadiusActiveMode",label:"Border radius",type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:t=>t.tab==="active"},css:{selector:" li.ecom-product-swatch-item--active, li.ecom-product-swatch-item--active img, li.ecom-product-swatch-item--active .ecom-collection__product-picker-colors-item--preview",properties:{"border-radius":""}}},{type:"number",label:'Transition Duration <span class="lowercase">(ms)</span>',name:"transition",options:{min:0,max:1500,visible:{keep_data:!0,condition:t=>t.tab==="hover"}},css:{selector:" li",properties:{transition:"all %value%ms ease"}}},{type:"line"},{type:"dimension",label:"Spacing",name:"spacing",options:{responsive:!0,units:"default"},css:{selector:" li",properties:{spacing:""}}}]})),this.data.settings.show_product_wishlist&&n.push({group_name:"product_wishlist",visible:[!0,null,"wishlist"].includes(this.active_child_elenent),group_title:"Wishlist",selector:" .ecom-collection__product--rating-wrapper",params:[...A(),{alias:"spacing"}]});let e=[];this.isArrow()&&e.push({title:"Navigator",type:"swiper:nav"}),this.isPagination()&&e.push({title:"Pagination",type:"swiper:pagination"});let m={};return this.isCombined==="combine"&&(m={visible:[!0,null].includes(this.active_child_elenent),params:[{alias:"spacing",options:{name:"spacingNavigation",css:{selector:" .ecom-swiper-navigation"}}},{type:"line"}],remove:{name:"justify-content"}}),e.length&&n.push({group_alias:e,visible:[!0,null].includes(this.active_child_elenent),options:{group_title:"Navigation",group_name:"slider_arrow",selector:" .ecom-collection__product-container"},modify:m}),n.filter(t=>t)}}},nt={class:"ecom-collection__product-wrapper"},at=["data-option-swiper","data-pagination","data-week","data-day","data-hour","data-minute","data-second","data-sale","data-review-platform","innerHTML","data-countdown-shows"],st=["data-navigator-type"],ct={class:"ecom-flex-center"},rt=["innerHTML"],lt={class:"ecom-swiper-pagination"},pt=["innerHTML"],dt={key:1,class:"ecom-swiper-navigation-position"},ut=["innerHTML"],mt=["innerHTML"],_t={key:2,class:"ecom-swiper-pagination-position ecom-swiper-pagination"},gt={key:0,class:"ecom-collection__product-loading ecom-dn"},ht={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"none",display:"block","shape-rendering":"auto"},width:"48px",height:"48px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},ft=q("path",{d:"M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50",fill:"#0a0a0a",stroke:"none"},[q("animateTransform",{attributeName:"transform",type:"rotate",dur:"0.5434782608695652s",repeatCount:"indefinite",keyTimes:"0;1",values:"0 50 51;360 50 51"})],-1),bt=[ft];function vt(o,n,e,m,y,v){var t,S,b,x,k,w;return P(),J("div",{class:"ecom-element ecom-collection ecom-collection__product",onSetactive:n[0]||(n[0]=(...C)=>o.setActiveElement&&o.setActiveElement(...C))},[q("div",nt,[q("div",{class:Ke(["ecom-collection__product-container",["ecom-collection__product-container_"+((t=o.data)==null?void 0:t.template)]])},[q("div",{class:Ke(["ecom-collection__product-main",[{"ecom-swiper-container":o.layout==="slider"},"ecom-collection_product_template_"+((S=o.data)==null?void 0:S.template)]]),"data-option-swiper":o.optionSwiper,"data-pagination":o.data.settings.pagination_type,"data-week":o.lang(o.data.settings.text_week,"text_week"),"data-day":o.lang(o.data.settings.text_day,"text_day"),"data-hour":o.lang(o.data.settings.text_hour,"text_hour"),"data-minute":o.lang(o.data.settings.text_minute,"text_minute"),"data-second":o.lang(o.data.settings.text_second,"text_second"),"data-sale":o.lang(o.data.settings.bage_sale),"data-review-platform":o.liquid("review_platform"),innerHTML:o.liquid("product_items"),"data-countdown-shows":o.shows_countdown},null,10,at),o.isNavigation&&o.isCombined=="combine"?(P(),J("div",{key:0,class:"ecom-swiper-navigation","data-navigator-type":o.isCombined=="combine"},[q("div",ct,[H(q("button",{class:"ecom-swiper-button ecom-swiper-button-prev",innerHTML:o.data.settings.slider_prev_icon},null,8,rt),[[E,o.isArrow()]]),H(q("div",lt,null,512),[[E,o.isPagination()]]),H(q("button",{class:"ecom-swiper-button ecom-swiper-button-next",innerHTML:(b=o.data.settings)==null?void 0:b.slider_next_icon},null,8,pt),[[E,o.isArrow()]])])],8,st)):M("",!0),o.isNavigation&&o.isCombined!="combine"?H((P(),J("div",dt,[q("button",{style:Ze(o.sliderNav),class:"ecom-swiper-button ecom-swiper-button-prev",innerHTML:(x=o.data.settings)==null?void 0:x.slider_prev_icon},null,12,ut),q("button",{style:Ze(o.sliderNav),class:"ecom-swiper-button ecom-swiper-button-next",innerHTML:(k=o.data.settings)==null?void 0:k.slider_next_icon},null,12,mt)],512)),[[E,o.isArrow()]]):M("",!0),o.isNavigation&&o.isCombined!="combine"?H((P(),J("div",_t,null,512)),[[E,o.isPagination()]]):M("",!0)],2),((w=o.data)==null?void 0:w.template)==="collection"?(P(),J("div",gt,[(P(),J("svg",ht,bt))])):M("",!0)])],32)}const qt=it(Xe,[["render",vt]]);Xe.__docgenInfo={exportName:"default",displayName:"Collectionproducts",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Collection/Product/Product.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Collection/Product/script.js","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{qt as default};
//# sourceMappingURL=Product.57a41192.js.map
