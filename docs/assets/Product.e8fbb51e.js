import{L as Uo,E as Jo,J as Qo,C as Yo,b as oe,_ as Zo}from"./preview.95a7df14.js";import{o as ie,a as ne,y as j,x as Vo,E as ve,J as we,L as ye,I as No}from"./vue.esm-bundler.b9dec9d9.js";import"./chunk-KSYMO6G6.f719e32d.js";import"./index.e850844b.js";import"./iframe.048ad53f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.f037b798.js";const Oo={name:"Collectionproducts",linkVideo:"https://www.youtube.com/watch?v=je7LhiKtSZA",presets:!0,vendors:["shopify_option_selection_js","countdown_js","slider_js","slider_css"],hasChild:!0,mixins:[Uo,Jo,Qo,Yo],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["layout","pagination_style","slidesPerView","slidesPerView__tablet","slidesPerView__mobile","slidesPerGroup","slidesPerGroup__tablet","slidesPerGroup__mobile","spaceBetween","spaceBetween__tablet","spaceBetween__mobile","text_minute","text_hour","text_week","text_second","shows_countdown","show_featured_media","show_ground_price","slider_speed","slider_speed__tablet","slider_speed__mobile","slider_center","slider_center__tablet","slider_center__mobile","price_type","show_product_quickview","type","option_layout"]}},computed:{getPermission(){return this.$store.getters["global/getPermission"]},canMultipleLanguages(){return this.getPermission("translates",!1)},productItemsHtml(){const t=this.liquid("product_items");return this.csrProductsPending&&!this.hasRenderedProductCards?this.productSkeletonHtml:t},hasRenderedProductCards(){const t=this.liquid("product_items");return typeof t=="string"&&t.indexOf("data-product-handle")!==-1},csrProductsPending(){return this.shouldUseCSR?!this.csrInitialized||this.csrLoading?!0:this.isClientRendering||!!this.renderLiquidsTimer:!1},productSkeletonHtml(){var t,s,n;return(n=(s=(t=this.liquids)==null?void 0:t.product_items)==null?void 0:s.preview)!=null?n:""},limitProductNumber(){var e;if(!this.canUseCustomLiquidForCSR)return 0;const t=(e=this.data)==null?void 0:e.template,n=Object.entries({10:["product","cart"],20:["featured","shopify","collection"]}).find(([,b])=>b.includes(t));return n?Number(n[0]):0},settings(){var n;const t=[{group_title:this.$t("general"),params:[{type:"popup",label:this.$t("layout"),name:"layout",value:"grid",options:{type:"dropdown",default:!1,preview:"title",values:{list:this.$t("list"),grid:this.$t("grid"),slider:this.$t("slider")}},css:{isCss:!1}},{label:this.$t("style"),name:"style",type:"popup",options:{preview:"title",type:"dropdown",values:{vertical:this.$t("style")+" 1",horizontal:this.$t("style")+" 2",absolute:this.$t("style")+" 3"},default:!1,visible:{keep_data:!1,condition:e=>["grid","slider"].includes(e.layout)}}},{type:"popup",label:this.$t("image_ratio"),name:"image_ratio",value:"adapt",options:{type:"dropdown",default:!1,icon_type:"percent",preview:"title",values:{adapt:this.$t("adapt_to_image"),portrait:this.$t("portrait"),square:this.$t("square")}}},{type:"number",label:this.$t("maximum_products_to_show"),description:this.limitProductNumber?this.$t("maximum_products_to_show_des",{max:this.limitProductNumber}):"",name:"limit",options:{min:1,max:this.data.template=="collection"?100:((n=this.data)==null?void 0:n.element_name)==="productRelated"?20:50,visible:{condition:e=>!(this.data.template=="product"&&e.show_product_by==="recommendations")}}},{type:"number",label:this.$t("items_per_row"),name:"slider_items",options:{responsive:!0,min:1,max:9,step:1,slider:!0,visible:{condition:e=>e.layout==="grid"||e.layout==="list"}},css:{selector:" .ecom-collection__product--wrapper-items",properties:{"grid-template-columns":"repeat(%value%,minmax(0, 1fr))"}}},{name:"column_gap",label:this.$t("column_gap"),type:"number",options:{min:0,max:100,responsive:!0,visible:{keep_data:!1,condition:e=>e.layout=="grid"}},css:{properties:{"column-gap":"%value%px"},selector:"root .ecom-collection__product--wrapper-items "}},{type:"number",label:this.$t("image_width"),name:"image_grid_template_column",options:{responsive:!0,units:{"%":{min:0,max:100}},visible:e=>e.layout==="list"},css:{selector:" .ecom-collection__product-item--wrapper",properties:{"grid-template-columns":"%value% auto"}}},{type:"number",label:this.$t("spacing"),name:"product_list_spacing",options:{responsive:!0,units:{px:{min:0,max:100}},visible:e=>e.layout==="list"},css:{selector:" .ecom-collection__product-item--wrapper",properties:{"grid-gap":"%value%"}}},{name:"row_gap",label:this.$t("row_gap"),type:"number",options:{min:0,max:100,responsive:!0,visible:{keep_data:!1,condition:e=>e.layout!=="slider"}},css:{properties:{"row-gap":"%value%px"},selector:"root .ecom-collection__product--wrapper-items "}},{type:"line",name:"lineGeneral",options:{visible:function(e){return e&&e.layout==="list"}}}]},{group_title:this.$t("product_card"),params:[{type:"toggle",name:"open_new_tab",label:this.$t("open_the_product_detail_page_in_a_new_tab"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"toggle",label:this.$t("product_link_with_collection_handle"),name:"link_with_collection",value:!0,options:{values:{on:{label:this.$t("show"),value:!0},off:{label:this.$t("hide"),value:!1}}},css:!1},{type:"toggle",name:"show_secondary_image",value:!0,label:this.$t("show_second_image_on_hover"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"toggle",name:"hover_show_image_mobile",value:!0,label:this.$t("show_second_image_on_hover_mobile"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"toggle",name:"show_description",label:this.$t("show_short_description"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},css:{isCss:!1}},{type:"number",name:"limit_short_description",value:50,options:{min:1,max:1e3,visible:function(e){return e&&e.show_description===!0}},label:this.$t("maximum_words_to_show")},{type:"toggle",name:"show_vendor",options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},label:this.$t("show_vendor")},{type:"toggle",name:"show_sku",options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},label:this.$t("show_sku")},{type:"text",name:"sku_title",label:this.$t("sku_label"),options:{visible:function(e){return e&&e.show_sku===!0}}},{type:"toggle",name:"show_type",options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},label:this.$t("show_type")},{type:"line"},{type:"toggle",name:"show_input_quantity",options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},label:this.$t("show_input_quantity"),css:{}},{type:"toggle",name:"show_plus_minus_button",label:this.$t("show_plus_and_minus_button"),options:{visible:e=>e.show_input_quantity===!0,values:{on:{value:!0,label:this.$t("yes")},off:{value:!1,label:this.$t("no")}}}},{type:"toggle",name:"quantity_inline",label:this.$t("inline_with_button_add_to_cart"),description:this.$t("this_option_only_works_when_the_position_of_add_to_cart_button_is_default_or_relative"),options:{visible:e=>e.show_input_quantity===!0,values:{on:{value:!0,label:this.$t("yes")},off:{value:!1,label:this.$t("no")}}}},{type:"line"},{type:"toggle",name:"show_sale_badge",value:!0,options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},label:this.$t("show_sale_badge")},{name:"sale_badge_type",type:"popup",label:this.$t("sale_badge_type"),value:"percent",options:{default:!1,type:"dropdown",preview:"title",values:{percent:this.$t("percent"),amount:this.$t("amount_label")},visible:function(e){return e&&e.show_sale_badge===!0}}},{name:"bage_sale",label:this.$t("sale"),type:"text",placeholder:this.$t("_sale"),description:this.$t("badge_sale_off_value_will_replace_in_block_sale"),options:{visible:function(e){return e&&e.show_sale_badge}}},{type:"toggle",name:"show_product_rating",label:this.$t("use_rating_3_rd_party_app"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},description:this.$t("select_the_review_app_in_settings_settings_app_settings_apps")},{type:"toggle",name:"show_product_quickview",label:this.$t("use_quickview_3_rd_party_app"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},description:this.$t("select_the_quickview_app_in_settings_settings_app_settings_apps")},{type:"text",name:"quickview_text",label:this.$t("quickview_text"),options:{visible:function(e){return e&&e.show_product_quickview},placeholder:this.$t("quickview")}},{type:"picker",label:this.$t("quickview_icon"),name:"quickview_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:function(e){return e.show_product_quickview}}},{type:"toggle",name:"show_badges",value:!0,label:this.$t("show_badges"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},css:{isCss:!1},description:this.$t("renders_sale_or_sold_out_and_tags_if_the_product_matches_the_condition")},{type:"textarea",label:this.$t("show_when_product_contains_tags"),name:"badge_tags",description:this.$t("note_divide_value_with_br_eg_hot_new_clothing"),options:{height:1,visible:function(e){return e.show_badges}}},{type:"text",label:`${this.$t("display_badge_based_on_metafield_value")} ${this.canUseCustomLiquidForCSR?this.$t("live_page_only"):""}`,name:"metafield_tag",description:this.$t("note_divide_value_with_br_eg_hot_new_clothing_link"),options:{height:1,visible:function(e){return e.show_badges}}}]},{group_title:this.$t("price"),params:[{type:"toggle",name:"show_price",options:{oneline:!0,values:{on:{label:this.$t("yes"),value:"block"},off:{label:this.$t("no"),value:"none"}}},label:this.$t("show_price"),css:{}},{type:"toggle",name:"hide_price_if_not_logged_in",label:this.$t("hide_price_if_not_logged_in"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},visible:e=>e&&e.show_price==="block"},css:{}},{type:"toggle",name:"show_login_to_see_price_text",label:this.$t("show_notice_login_to_see_price"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},visible:e=>e&&e.show_price==="block"&&e.hide_price_if_not_logged_in===!0},css:{}},{type:"text",name:"login_to_see_price_text",value:this.$t("login_to_see_price"),label:this.$t("text_for_login_to_see_price_feature"),options:{visible:e=>e&&e.hide_price_if_not_logged_in===!0&&e.show_login_to_see_price_text===!0}},{type:"link",name:"login_redirect_to",label:this.$t("redirect_to"),options:{visible:e=>e&&e.hide_price_if_not_logged_in===!0&&e.show_login_to_see_price_text===!0}},{type:"toggle",name:"show_ground_price",options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},label:this.$t("show_ground_price"),description:this.$t("see_detailed_guide_https_help_shopify_com_en_manual_intro_to_shopify_initial_setup_sell_in_germany_price_per_unit_to_enable_ground_price"),css:{}},{type:"toggle",name:"show_bss_b2b_wholesale",value:!1,label:this.$t("show_bss_b2b_wholesale"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{name:"price_type",type:"popup",label:this.$t("price_display"),value:"first_price",options:{default:!1,type:"dropdown",preview:"title",values:{first_variant:this.$t("first_variant"),first_price:this.$t("first_available_variant"),min_price:this.$t("price_min"),min_to_max:this.$t("price_min_max")},visible:function(e){return e&&e.show_price==="block"}}},{type:"text",label:this.$t("price_from_text"),name:"price_from_text",value:"From",placeholder:this.$t("from"),description:this.$t("price_from_text_des"),options:{visible:function(e){return e&&e.price_type==="min_price"}}}]},{group_alias:"swiper",options:{group_title:this.$t("slider_settings"),options:{keep_data:!1,visible:e=>e.layout=="slider"}},modify:{remove:{}}},{group_title:this.$t("product_title"),params:[{type:"popup",name:"title_tag",label:this.$t("span_class_uppercase_html_span_tag"),value:"h3",options:{default:!1,preview:"title",type:"dropdown",values:{h1:"H1",h2:"H2",h3:"H3",h4:"H4",h5:"H5",h6:"H6",div:"DIV",p:"P"}}},{type:"toggle",name:"title_one_row",label:this.$t("show_title_on_one_row"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}}]},{group_title:this.$t("product_variant"),params:[{type:"popup",name:"show_picker",options:{type:"dropdown",default:!1,preview:"title",values:{show:this.$t("yes"),hide:this.$t("no")}},css:{isCss:""},label:this.$t("show_variant_picker")},{type:"toggle",name:"show_actions",value:!0,options:{oneline:!0,preview:"title",visible:function(e){return e.show_picker==="hide"},values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},label:this.$t("show_button")},{type:"popup",label:this.$t("layout"),name:"type",value:"dropdown",options:{type:"dropdown",preview:"title",values:{dropdown:this.$t("dropdown"),image:this.$t("swatch_image_picker"),color:this.$t("swatch_color_picker"),shopify_color:this.$t("shopify_color"),radio:this.$t("radio")},default:!1,visible:function(e){return e&&e.show_picker==="show"}},css:{isCss:!1}},{type:"text",label:this.$t("product_option_to_show_as_swatch"),name:"option",value:"Color",placeholder:this.$t("color"),description:this.$t("note_divide_value_with_eg_option_1_option_2"),options:{toolbar:!1,visible:function(e){return e&&e.show_picker==="show"&&e.type&&["image","color"].includes(e.type)}}},{type:"paragraph",name:"color_description",content:this.$t("set_your_color_here_extensions_3"),options:{visible:function(e){return e.type==="color"}}},{type:"popup",label:this.$t("shown_other_options_as"),name:"option_layout",value:"dropdown",options:{type:"dropdown",default:!1,visible:function(e){return e&&e.show_picker==="show"&&e.type&&["image","color"].includes(e.type)},preview:"title",values:{dropdown:this.$t("dropdown"),radio:this.$t("radio"),hide:this.$t("hide")}}},{type:"popup",name:"show_option_name",value:!0,options:{oneline:!0,type:"dropdown",preview:"title",default:!1,values:{block:this.$t("yes"),none:this.$t("no")},visible:function(e){return e&&e.show_picker==="show"}},label:this.$t("show_option_name"),css:{selector:" .ecom-collection__product-picker-selection .selector-wrapper label",properties:{display:""}}},{type:"popup",name:"quickshop_layout",label:this.$t("quick_shop_layout"),options:{type:"dropdown",preview:"title",visible:function(e){return e&&e.show_picker==="show"&&e.type!=="dropdown"},default:!1,values:{lite:this.$t("show_main_option_only"),full:this.$t("show_all_product_options")}}},{type:"line"},{type:"toggle",label:this.$t("show_view_more_button_only"),name:"view_more_only",default:!1,options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},oneline:!0}},{type:"text",label:this.$t("view_more_text"),name:"view_more_text",options:{}},{type:"picker",label:this.$t("view_more_icon"),name:"view_more_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"popup",label:this.$t("icon_position"),name:"view_more_icon_position",options:{type:"dropdown",preview:"title",values:{before:this.$t("before"),after:this.$t("after")},visible:{keep_data:!1,condition:e=>e.view_more_icon}}},{type:"number",label:this.$t("view_more_icon_spacing"),name:"viewmore_icon_spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.view_more_icon}},css:{selector:" .ecom-collection__product-form__actions--view-more",properties:{gap:""}}},{type:"toggle",label:this.$t("hide_atc_mobile"),name:"hide_atc_mobile",default:!1,options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},oneline:!0}},{type:"line",name:"line_under_viewmore",options:{visible:e=>e&&!e.view_more_only}},{type:"text",label:this.$t("add_to_cart_text"),name:"add_to_cart",options:{visible:function(e){return e&&!e.view_more_only}}},{type:"text",label:this.$t("pre_order_text"),name:"pre_order",options:{visible:function(e){return e&&!e.view_more_only}}},{type:"picker",label:this.$t("add_to_cart_icon"),name:"add_cart_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:function(e){return e&&!e.view_more_only}}},{type:"popup",label:this.$t("add_to_cart_icon_position"),name:"add_cart_icon_position",options:{type:"dropdown",preview:"title",values:{before:this.$t("before"),after:this.$t("after")},visible:{keep_data:!1,condition:e=>e.add_cart_icon&&!e.view_more_only}}},{type:"number",label:this.$t("add_to_cart_icon_spacing"),name:"atc_icon_spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.add_cart_icon&&!e.view_more_only}},css:{selector:" .ecom-collection__product-simple-add-to-cart",properties:{gap:""}}},{type:"line",name:"line_under_add",options:{visible:e=>e&&!e.view_more_only}},{type:"text",label:this.$t("sold_out_text"),name:"sold_out_text",options:{visible:function(e){return e&&!e.view_more_only}}},{type:"picker",label:this.$t("icon"),name:"sold_out_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:function(e){return e&&!e.view_more_only}}},{type:"popup",label:this.$t("icon_position"),name:"sold_out_icon_position",options:{type:"dropdown",preview:"title",values:{before:this.$t("before"),after:this.$t("after")},visible:{keep_data:!1,condition:e=>e.sold_out_icon&&!e.view_more_only}}},{type:"number",label:this.$t("ion_spacing"),name:"sold_out_icon_spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.sold_out_icon&&!e.view_more_only}},css:{selector:" .ecom-collection__product-form__actions--soldout",properties:{gap:""}}},{type:"line",name:"line_under_sold",options:{visible:function(e){return e&&!e.view_more_only}}},{type:"text",label:this.$t("quick_shop_text"),name:"quick_shop_text",value:"Quick shop",options:{visible:function(e){return e.show_picker==="show"&&["image","color"].includes(e.type)&&e.quickshop_layout!=="full"&&!e.view_more_only}}},{type:"picker",label:this.$t("quick_shop_icon"),name:"quick_shop_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:function(e){return e.show_picker==="show"&&["image","color"].includes(e.type)&&e.quickshop_layout!=="full"&&!e.view_more_only}}},{type:"popup",label:this.$t("quick_shop_icon_position"),name:"quick_shop_icon_position",options:{type:"dropdown",preview:"title",values:{before:this.$t("before"),after:this.$t("after")},visible:{keep_data:!1,condition:e=>e.show_picker==="show"&&e.quick_shop_icon&&!e.view_more_only}}},{type:"number",label:this.$t("quick_shop_ion_spacing"),name:"quickshop_icon_spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.quick_shop_icon&&!e.view_more_only}},css:{selector:" .ecom-collection__product-form__actions--quickshop",properties:{gap:""}}},{type:"line",name:"line_sprate_cart_action",options:{visible:function(e){return e&&e.show_picker==="show"&&e.view_more_only}}},{type:"popup",name:"action",label:this.$t("after_added_to_cart"),description:this.$t("to_enable_this_feature_you_must_go_to_the_extensions_ajax_cart_settings_tick_on_enable_ajax_cart_extensions_1"),options:{type:"dropdown",default:!1,preview:"title",values:{popup:this.$t("show_cart_popup"),reload:this.$t("reload_page"),message:this.$t("show_a_message"),cart:this.$t("redirect_to_cart_page"),checkout:this.$t("go_to_checkout_page"),link:this.$t("go_to_special_url")}}},{type:"text",name:"added_cart_message",label:this.$t("added_item_to_cart_message"),options:{placeholder:this.$t("added_item_to_your_cart"),visible:function(e){return e&&e.show_picker==="show"&&e.action==="message"}}},{type:"link",label:this.$t("target_url"),name:"link",options:{visible:function(e){return e.action==="link"}}}]},{group_title:this.$t("wishlist_button"),params:[{type:"toggle",name:"show_product_wishlist",label:this.$t("use_wishlist_3_rd_party_app"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},description:this.$t("select_wishlist_app_in_settings_settings_app_settings_apps")},{type:"line"},{type:"toggle",name:"show_wishlist",label:this.$t("use_wishlist_extension_by_ecomposer"),options:{oneline:!0,values:{on:{label:"Yes",value:!0},off:{label:"No",value:!1}}},description:this.$t("to_use_this_wishlist_option_you_need_to_make_sure_you_installed_the_product_wishlist_extension_before")},{type:"popup",name:"wishlist_visibility",label:this.$t("visibility"),options:{default:!1,preview:"title",type:"dropdown",values:{always:this.$t("always"),hover:this.$t("when_hover"),hover_active:this.$t("when_hover_and_when_active")},visible:{name:"show_wishlist",value:!0}}},{type:"tab",name:"wishlist_tab",options:{visible:{keep_data:!0,condition:e=>e.show_wishlist===!0},tabs:[{name:"normal",title:this.$t("normal")},{name:"added",title:this.$t("added_to_wishlist")}]}},{type:"text",name:"wishlist_label",label:this.$t("wishlist_label"),options:{visible:{keep_data:!0,condition:e=>e.show_wishlist===!0&&e.wishlist_tab==="normal"}}},{type:"picker",name:"wishlist_icon",label:this.$t("wishlist_icon"),options:{online:!0,type:"icon",reset:!0,visible:{keep_data:!0,condition:e=>e.show_wishlist===!0&&e.wishlist_tab==="normal"}}},{type:"text",name:"wishlist_label_added",label:this.$t("wishlist_label"),options:{visible:{keep_data:!0,condition:e=>e.show_wishlist===!0&&e.wishlist_tab==="added"}}},{type:"picker",name:"wishlist_icon_added",label:this.$t("wishlist_icon"),options:{online:!0,type:"icon",reset:!0,visible:{keep_data:!0,condition:e=>e.show_wishlist===!0&&e.wishlist_tab==="added"}}},{type:"textarea",name:"content_tooltip_wishlist",label:this.$t("tooltip_content"),options:{visible:{keep_data:!0,condition:e=>e.show_wishlist===!0&&e.wishlist_tab==="normal"},toolbar:"short",dynamic:!0,height:80}},{type:"textarea",name:"content_tooltip_wishlist_added",label:this.$t("tooltip_content"),options:{visible:{keep_data:!0,condition:e=>e.show_wishlist===!0&&e.wishlist_tab==="added"},toolbar:"short",dynamic:!0,height:80}},{type:"line",options:{visible:{keep_data:!1,condition:e=>e.show_wishlist==!0&&(e.wishlist_icon&&e.wishlist_label||e.wishlist_icon_added&&e.wishlist_label_added)}}},{type:"choose",label:this.$t("horizontal_align"),name:"group_btn_hor_pos1",options:{oneline:!0,responsive:!1,reset:!0,type:"align-x-full",values:["start","center","end"],visible:{keep_data:!1,condition:e=>e.show_wishlist==!0}},css:{selector:" .ecom-product__wishlist",properties:{"justify-content":""}}},{type:"choose",label:this.$t("vertical_align"),name:"group_btn_ver_pos1",options:{oneline:!0,responsive:!1,reset:!0,type:"align-y-full",values:["start","center","end"],visible:{keep_data:!1,condition:e=>e.show_wishlist==!0}},css:{selector:" .ecom-product__wishlist",properties:{"align-items":""}}},{type:"number",label:this.$t("icon_spacing"),name:"icon_spacing_wishlist",options:{units:{px:{min:0,max:100}},visible:{keep_data:!1,condition:e=>e.show_wishlist==!0&&(e.wishlist_icon&&e.wishlist_label||e.wishlist_icon_added&&e.wishlist_label_added)}},css:{selector:" .ecom-product__wishlist-link",properties:{gap:""}}},{type:"toggle",label:this.$t("hide_wishlist_button_on_mobile"),name:"hide_wishlist_mobile",default:!1,options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},oneline:!0,visible:{keep_data:!1,condition:e=>e.show_wishlist==!0}}}]},{group_title:this.$t("compare_button"),params:[{type:"toggle",name:"show_compare",label:this.$t("show_compare_button"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},description:this.$t("to_use_this_compare_option_you_need_to_make_sure_you_installed_the_product_compare_extension_before")},{type:"popup",name:"compare_visibility",label:this.$t("visibility"),options:{default:!1,preview:"title",type:"dropdown",values:{always:this.$t("always"),hover:this.$t("when_hover"),hover_active:this.$t("when_hover_and_when_active")},visible:{name:"show_compare",value:!0}}},{type:"tab",name:"compare_tab",options:{visible:{keep_data:!0,condition:e=>e.show_compare===!0},tabs:[{name:"normal",title:this.$t("normal")},{name:"added",title:this.$t("added_to_compare")}]}},{type:"text",name:"compare_label",label:this.$t("compare_label"),options:{visible:{keep_data:!0,condition:e=>e.show_compare===!0&&e.compare_tab==="normal"}}},{type:"picker",name:"compare_icon",label:this.$t("compare_icon"),options:{online:!0,type:"icon",reset:!0,visible:{keep_data:!0,condition:e=>e.show_compare===!0&&e.compare_tab==="normal"}}},{type:"text",name:"compare_label_added",label:this.$t("compare_label"),options:{visible:{keep_data:!0,condition:e=>e.show_compare===!0&&e.compare_tab==="added"}}},{type:"picker",name:"compare_icon_added",label:this.$t("compare_icon"),options:{online:!0,type:"icon",reset:!0,visible:{keep_data:!0,condition:e=>e.show_compare===!0&&e.compare_tab==="added"}}},{type:"textarea",name:"content_tooltip_compare",label:this.$t("tooltip_content"),options:{visible:{keep_data:!0,condition:e=>e.show_compare===!0&&e.compare_tab==="normal"},toolbar:"short",dynamic:!0,height:80}},{type:"textarea",name:"content_tooltip_compare_added",label:this.$t("tooltip_content"),options:{visible:{keep_data:!0,condition:e=>e.show_compare===!0&&e.compare_tab==="added"},toolbar:"short",dynamic:!0,height:80}},{type:"choose",label:this.$t("horizontal_align"),name:"group_btn_hor_pos",options:{oneline:!0,responsive:!1,reset:!0,type:"align-x-full",values:["start","center","end"],visible:{keep_data:!1,condition:e=>e.show_compare==!0}},css:{selector:" .ecom-product__compare",properties:{"justify-content":""}}},{type:"choose",label:this.$t("vertical_align"),name:"group_btn_ver_pos",options:{oneline:!0,responsive:!1,reset:!0,type:"align-y-full",values:["start","center","end"],visible:{keep_data:!1,condition:e=>e.show_compare==!0}},css:{selector:" .ecom-product__compare",properties:{"align-items":""}}},{type:"line",name:"compare_line",options:{visible:{keep_data:!1,condition:e=>e.show_compare==!0&&(e.compare_icon&&e.compare_label||e.compare_icon_added&&e.compare_label_added)}}},{type:"number",label:this.$t("icon_spacing"),name:"icon_spacing",options:{units:{px:{min:0,max:100}},visible:{keep_data:!1,condition:e=>e.show_compare==!0&&(e.compare_icon&&e.compare_label||e.compare_icon_added&&e.compare_label_added)}},css:{selector:" .ecom-product__compare-link",properties:{gap:""}}},{type:"toggle",label:this.$t("hide_compare_button_on_mobile"),name:"hide_compare_mobile",default:!1,options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},oneline:!0,visible:{keep_data:!1,condition:e=>e.show_compare==!0}}}]},{group_title:this.$t("countdown_promo"),params:[{name:"enable_countdown",value:!0,label:this.$t("enable_countdown"),type:"toggle",options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},css:{isCss:!1}},{name:"enable_progress_bar",label:this.$t("enable_progress_bar"),value:!0,options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},visible:function(e){return e&&e.enable_countdown===!0}},css:{isCss:!1},type:"toggle"},{name:"styleCountdown",label:this.$t("layout"),type:"popup",options:{type:"dropdown",default:!1,preview:"title",values:{column:this.$t("vertical"),row:this.$t("horizontal")},visible:function(e){return e&&e.enable_countdown===!0}},css:{selector:" .ecom-collection__product-time--item",properties:{display:"inline-flex","flex-direction":""}}},{type:"text",label:this.$t("title"),name:"countdown_title",value:"Hurry up! The sale will end on",placeholder:this.$t("hurry_up_the_sale_will_end_on"),options:{visible:function(e){return e&&e.enable_countdown===!0}}},{type:"line"},{type:"checkbox",name:"shows_countdown",label:this.$t("time_labels_to_show"),options:{values:{week:this.$t("week"),day:this.$t("day"),hour:this.$t("hour"),minute:this.$t("minute"),second:this.$t("second")},visible:function(e){return e&&e.enable_countdown===!0}}},{type:"paragraph",content:this.$t("see_detailed_https_help_ecomposer_io_docs_elements_shopify_elements_product_grid_1_4_20_countdown_20_promo_guide")}]},{group_title:this.$t("edit_labels"),params:[{name:"trans_no_item",label:this.$t("title_when_no_products_found"),type:"text"},{type:"text",name:"vendor_title",value:"Vendor",description:this.$t("this_is_visual_hidden_text"),label:this.$t("product_vendor_title"),placeholder:this.$t("vendor"),options:{visible:function(e){return e.show_vendor}}},{type:"text",name:"type_title",value:"Type",description:this.$t("this_is_visual_hidden_text"),label:this.$t("product_type_title"),placeholder:this.$t("type"),options:{visible:function(e){return e.show_type}}},{type:"text",name:"sale_text",value:"Sale",label:this.$t("sale_badge")},{type:"text",name:"sold_text",value:"Sold out",label:this.$t("sold_out_badge")},{type:"text",name:"added_cart_text",label:this.$t("added_to_cart_text"),options:{placeholder:this.$t("added_item_to_cart")}},{type:"text",name:"text_week",value:"[%-W] week%!W",description:this.$t("example_w_week_w"),label:this.$t("week"),options:{visible:e=>{var b;return(b=e==null?void 0:e.shows_countdown)==null?void 0:b.includes("week")}}},{type:"text",name:"text_day",value:"[%d] day%!D",description:this.$t("example_d_day_d"),label:this.$t("days"),options:{visible:e=>{var b;return(b=e==null?void 0:e.shows_countdown)==null?void 0:b.includes("day")}}},{type:"text",name:"text_hour",value:"[%-H] hour%!H",description:this.$t("example_h_hour_h"),label:this.$t("hours"),options:{visible:e=>{var b;return(b=e==null?void 0:e.shows_countdown)==null?void 0:b.includes("hour")}}},{type:"text",name:"text_minute",value:"[%-M] minute%!M",decription:"Example: [%-M] minute%!M",label:this.$t("minutes"),options:{visible:e=>{var b;return(b=e==null?void 0:e.shows_countdown)==null?void 0:b.includes("minute")}}},{type:"text",name:"text_second",value:"[%-S] second%!S",description:this.$t("example_s_second_s"),label:this.$t("seconds"),options:{visible:e=>{var b;return(b=e==null?void 0:e.shows_countdown)==null?void 0:b.includes("second")}}}]},{group_title:this.$t("product_card_items_ordering"),params:[{type:"number",label:this.$t("title"),name:"order_title",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-title-tag",properties:{order:""}}},{type:"number",label:this.$t("description"),name:"order_description",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-description",properties:{order:""}}},{type:"number",label:this.$t("vendor"),name:"order_vendor",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-item-vendor-element",properties:{order:""}}},{type:"number",label:this.$t("sku"),name:"order_sku",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-item-sku-element",properties:{order:""}}},{type:"number",label:this.$t("type"),name:"order_type",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-item-type-element",properties:{order:""}}},{type:"number",label:this.$t("price"),name:"order_price",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-prices",properties:{order:""}}},{type:"number",label:this.$t("button_action"),name:"order_button",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product--actions",properties:{order:""}}},{type:"number",label:this.$t("review"),name:"order_reivew",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-rating-wrapper",properties:{order:""}}},{type:"number",label:this.$t("variant_form"),name:"order_variant",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-variants",properties:{order:""}}},{type:"number",label:this.$t("count_down"),name:"order_countdown",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-countdown",properties:{order:""}}},{type:"number",label:this.$t("login_to_see_price"),name:"order_login_to_see_price",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-login-to-see",properties:{order:""}}},{type:"paragraph",content:this.$t("the_blocks_are_arranged_in_order_from_lowest_to_highest_for_example_block_with_value_1_will_be_displayed_first_and_block_with_value_6_will_appear_at_the_bottom")}]}];return["featured","shopify"].includes(this.data.template)&&t[0].params.unshift({type:"popup",name:"product_source",label:this.$t("product_source"),options:{type:"dropdown",default:!1,preview:"title",values:this.page_type==="collection"?{collection:this.$t("from_collection"),products:this.$t("specific_products")}:{collection:this.$t("from_collection"),products:this.$t("specific_products"),vendor:this.$t("product_vendor"),type:this.$t("product_type")}}},{type:"picker",label:this.$t("select_collection_to_show"),name:"collection",options:{type:"collection",multiple:!1,visible:e=>!e.product_source||e.product_source=="collection"}},{type:"picker",label:this.$t("select_product_type_to_show"),name:"product_type",options:{type:"product_type",multiple:!1,layout:"list",visible:e=>e.product_source==="type"&&this.page_type!=="collection"}},{type:"picker",label:this.$t("select_product_vendor_to_show"),name:"product_vendor",options:{type:"product_vendor",layout:"list",multiple:!1,visible:e=>e.product_source==="vendor"&&this.page_type!=="collection"}},{type:"picker",label:this.$t("select_products_to_show"),name:"products",options:{type:"product",layout:"grid",multiple:!0,visible:e=>e.product_source==="products"},description:this.$t("notice_specific_products_has_a_limit_of_20_unique_products_to_show_per_page_if_you_want_more_than_20_products_then_consider_using_a_collection_instead")},{type:"popup",label:`${this.$t("sort_by")} ${this.canUseCustomLiquidForCSR?this.$t("live_page_only"):""}`,name:"sort_by",options:{type:"dropdown",icon_type:"sorting",preview:"title",visible:function(e){return e.product_source!=="products"},values:{title_asc:this.$t("title_a_z"),title_desc:this.$t("title_z_a"),price_desc:this.$t("hightest_price"),price_asc:this.$t("lowest_price"),created_at_asc:this.$t("oldest"),created_at_desc:this.$t("newest")}}}),this.data.template==="collection"&&this.data.settings.layout!=="slider"?t.splice(5,0,{group_title:this.$t("pagination"),group_name:"",params:[...this.canUseCustomLiquidForCSR?[{type:"toggle",name:"show_preview_pagination",label:this.$t("show_preview_pagination"),value:!0,options:{oneline:!0,values:{on:{label:this.$t("enable"),value:!0},off:{label:this.$t("disable"),value:!1}},warnings:{content:this.$t("note_pagination_only_work_on_live_page")}}}]:[],{type:"popup",name:"pagination_type",label:this.$t("pagination"),value:"default",options:{default:!1,type:"dropdown",preview:"title",values:{off:this.$t("off"),default:this.$t("default"),loadmore:this.$t("load_more_button"),infinit:this.$t("infinite_scrolling")}},css:{selector:" .ecom-pagination-navigation",properties:{display:"if(value !== 'off'){return 'flex' }else{ return 'none' }"}}},{type:"text",label:this.$t("load_more_text"),name:"loadmore_text",value:"Load more",options:{placeholder:this.$t("load_more"),visible:function(e){return e.pagination_type==="loadmore"}}},{type:"picker",label:this.$t("icon"),name:"loadmore_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:function(e){return e.pagination_type==="loadmore"}}},{type:"choose",label:this.$t("icon_position"),name:"loadmore_icon_position",options:{type:"align-x",values:[-1,1],visible:{keep_data:!1,condition:e=>e.loadmore_icon&&e.pagination_type==="loadmore"}},css:{selector:" .ecom-paginate-action--icon",properties:{order:""}}},{type:"number",label:this.$t("icon_spacing"),name:"loadmore_icon_spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:e=>e.loadmore_icon&&e.pagination_type==="loadmore"}},css:{selector:" .ecom-paginate-loadmore--content",properties:{gap:""}}},{name:"pagination_style",label:this.$t("pagination_style"),type:"popup",options:{type:"dropdown",default:!1,preview:"title",values:{block:this.$t("block"),inline:this.$t("inline")},visible:function(e){return e.pagination_type==="default"}}},{type:"popup",label:this.$t("pagination_layout"),name:"number_type",value:"dropdown",options:{type:"dropdown",default:!1,values:{text:this.$t("button_next_previous"),text_icon:this.$t("button_next_previous_with_icon"),icon:this.$t("icon")},visible:function(e){return e.pagination_type==="default"}},css:{isCss:!1}},{type:"picker",name:"icon_prev_page",label:this.$t("prev_page_icon"),options:{type:"icon",output:"value",visible:{keep_data:!1,condition:e=>(e.number_type==="icon"||e.number_type==="text_icon")&&e.pagination_type==="default"}}},{type:"picker",name:"icon_next_page",label:this.$t("next_page_icon"),options:{type:"icon",output:"value",visible:{keep_data:!1,condition:e=>(e.number_type==="icon"||e.number_type==="text_icon")&&e.pagination_type==="default"}}},{type:"text",name:"text_prev_page",label:this.$t("prev_page_text"),options:{visible:function(e){return e.number_type!=="icon"&&e.pagination_type==="default"}}},{type:"text",name:"text_next_page",label:this.$t("next_page_text"),options:{visible:function(e){return e.number_type!=="icon"&&e.pagination_type==="default"}}},{type:"number",name:"grid-column-gap",label:this.$t("spacing_between_page_number_span_class_lowercase_px_span"),options:{units:{px:{min:0,max:100}},visible:function(e){return e.pagination_type==="default"}},css:{selector:" .ecom-pagination-navigation",properties:{"grid-column-gap":""}}},{type:"switch",name:"enable_progress_pagination",label:this.$t("show_progress_pagination_bar"),options:{values:{on:{label:"yes",value:!0},off:{label:"no",value:!1}},visible:function(e){return e.pagination_type==="default"||e.pagination_type==="loadmore"}}},{label:this.$t("text"),name:"text_progress_pagination",type:"text",description:"Ex: Viewing {_start} - {_end} of {_total}",value:"Viewing {_start} - {_end} of {_total}",options:{visible:function(e){return e&&e.enable_progress_pagination&&(e.pagination_type==="default"||e.pagination_type==="loadmore")}}},{type:"toggle",name:"show_text_first",value:"column",label:this.$t("display_text_above_the_progress"),options:{values:{on:{label:"yes",value:"column-reverse"},off:{label:"no",value:"column"}},visible:function(e){return e&&e.enable_progress_pagination&&(e.pagination_type==="default"||e.pagination_type==="loadmore")}}},{type:"paragraph",name:"para_wraning",options:{warnings:{content:this.$t("notice_numbers_showing_in_the_editor_are_only_demo_data")},visible:function(e){return e&&e.enable_progress_pagination&&(e.pagination_type==="default"||e.pagination_type==="loadmore")}}}]}):this.data.template==="product"?(t[0].params.splice(0,0,{type:"popup",label:this.$t("show_product_by"),name:"show_product_by",value:"condition",options:{type:"dropdown",default:!1,values:{condition:this.$t("condition"),recommendations:this.$t("product_recommendations")}}},{type:"group",name:"related_conditions",label:this.$t("select_conditions"),params:[{type:"type",name:this.$t("product_type"),max:1,settings:[]},{type:"vendor",name:this.$t("product_vendor"),max:1,settings:[]},{type:"collection",name:this.$t("product_collection"),max:1,settings:[]}],options:{warnings:{content:`${this.data.template==="product"?this.$t("show_the_products_related_with_current_product_watching_products_in_editor_is_sample_data"):this.$t("show_products_related_to_the_lastest_item_in_cart")}`}}},{type:"number",label:this.$t("maximum_recommended_products_to_show"),name:"limit_recommended_products",options:{min:1,max:10,visible:{condition:e=>this.data.template==="product"&&e.show_product_by==="recommendations"}}},{type:"toggle",name:"allow_auto_collection",value:!1,label:this.$t("allow_auto_collection"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},visible:{condition:e=>e.show_product_by!=="recommendations"}}}),t[0].params.splice(4,0,{type:"line"})):this.data.template==="cart"&&(t[0].params.splice(0,0,{type:"group",name:"related_conditions",label:this.$t("select_conditions"),params:[{type:"type",name:this.$t("product_type"),max:1,settings:[]},{type:"vendor",name:this.$t("product_vendor"),max:1,settings:[{type:"paragraph",name:"vendor_condition_warning",options:{warnings:{content:"Heads up: matching by vendor scans up to 250 products per lookup and falls back to a live-only /search re-render if that misses. On stores with more than 250 products per vendor, or where search indexing lags, some matches may be missing or slow to appear. For a more reliable result, create a Shopify Automated collection with the condition 'Vendor is equal to [vendor]' and use it directly."}}}]},{type:"collection",name:this.$t("product_collection"),max:1,settings:[]}],options:{warnings:{content:`${this.data.template==="product"?this.$t("show_the_products_related_with_current_product_watching_products_in_editor_is_sample_data"):this.$t("show_products_related_to_the_lastest_item_in_cart")}`}}}),t[0].params.splice(1,0,{type:"line"})),this.data.template!="collection"&&t[0].params.splice(14,0,{type:"toggle",name:"show_product_available",value:!1,label:`${this.$t("show_product_available_only")} ${this.canUseCustomLiquidForCSR?this.$t("live_page_only"):""}`,description:this.$t("show_only_products_that_are_in_stock"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}}),t[0].params.splice(15,0,{type:"toggle",name:"show_featured_media",value:!1,label:this.$t("show_the_featured_image_first"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}}),t[0].params.splice(16,0,{type:"toggle",name:"disable_lazyload",value:!1,label:this.$t("disable_lazyload_image"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}}),t[0].params.splice(17,0,{type:"toggle",name:"enable_preload",value:!1,label:this.$t("enable_preload"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}}),[{type:"line"},{type:"paragraph",content:this.$t("b_placeholder_image_b"),description:this.$t("display_placeholder_image_if_product_does_not_have_an_image")},{label:this.$t("shopify_image"),name:"placeholder_image_shopify",type:"popup",value:"product-1",options:{preview:"title",type:"dropdown",values:{"product-1":this.$t("style")+" 1","product-2":this.$t("style")+" 2","product-3":this.$t("style")+" 3","product-4":this.$t("style")+" 4","product-5":this.$t("style")+" 5","product-6":this.$t("style")+" 6"},default:!1,reset:!1,visible:function(e){return e&&e.placeholder_image!==!0}}},{type:"switch",label:this.$t("upload_custom_image"),name:"placeholder_image",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"picker",label:this.$t("custom_image"),name:"placeholder_image_custom",options:{visible:function(e){return e.placeholder_image===!0},responsive:!1,type:"image",editAlt:!1}}].forEach(e=>{t[0].params.push(e)}),t.push({group_title:this.$t("scroll_reveal"),params:[{type:"paragraph",content:this.$t("scroll_reveal_items_description")},{type:"toggle",name:"scroll_reveal_items",label:this.$t("enable_scroll_reveal"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},oneline:!0}},{type:"paragraph",options:{visible:e=>e.scroll_reveal_items===!0,warnings:{content:this.$t("scroll_reveal_items_warning")}}},{type:"popup",name:"scroll_reveal_items_type",label:this.$t("scroll_reveal_animation_style"),options:{type:"dropdown",preview:"title",values:{"fade-up":"Fade Up","fade-in":"Fade In","slide-left":"Slide Left","zoom-in":"Zoom In"},visible:{condition:e=>e.scroll_reveal_items===!0}}},{type:"number",name:"scroll_reveal_items_delay",label:this.$t("scroll_reveal_delay_between_items"),options:{min:50,max:300,step:50,slider:!0,visible:{condition:e=>e.scroll_reveal_items===!0}}}]}),t},javascript(){return function(){var he,ge,be;var t=this.$el&&this.$el.querySelector(".ecom-swiper-autoplay-toggle");if(t&&!t.getAttribute("data-ecom-bound")){t.setAttribute("data-ecom-bound","1");var s=this.$el.querySelector(".ecom-swiper-container");t.addEventListener("click",function(){var o=s&&s.swiper;!o||!o.autoplay||(o.autoplay.running?(o.autoplay.stop(),t.setAttribute("data-state","paused"),t.setAttribute("aria-label",t.getAttribute("data-label-play"))):(o.autoplay.start(),t.setAttribute("data-state","playing"),t.setAttribute("aria-label",t.getAttribute("data-label-pause"))))})}let n=this.$el;if(!n||!this.settings)return;var e=[200,260,320,400,480,560,720,940,1066];function b(o,c){if(!(!o||!c||!c.src)){var a=parseInt(c.width,10)||0;if(!a){o.setAttribute("src",c.src),o.removeAttribute("srcset");return}var l=function(r){return c.src+(c.src.indexOf("?")===-1?"?":"&")+"width="+r},p=e.filter(function(r){return a>r});p.push(a),o.setAttribute("src",l(Math.min(533,a))),o.setAttribute("srcset",p.map(function(r){return l(r)+" "+r+"w"}).join(","))}}let S=!0;const C=this.id;let M=n.querySelectorAll(".ecom-collection__product-variants"),y=this.isLive,i=(he=this.settings.show_featured_media)!=null?he:!1,I=(ge=this.settings.bage_sale)!=null?ge:"",D=(be=this.settings.enable_progress_pagination)!=null?be:!1,L=this.settings.price_type,B="bullets";const N=this.settings.slider_center,O=this.settings.slider_center__tablet,Z=this.settings.slider_center__mobile;this.settings.slider_pagination_style==="progress"&&(B="progressbar");const te=this.settings.sale_badge_type;let E=this.settings.slider_speed,H=this.settings.slider_speed__tablet,F=this.settings.slider_speed__mobile;var G=this.settings;function K(o){return window.EComposer&&typeof window.EComposer.buildSwiperConfig=="function"?window.EComposer.buildSwiperConfig(o):null}const R=function(o,c={},a=""){return window.innerWidth>1024&&o[0]&&(c[`${a}`]=o[0]),window.innerWidth<=1024&&window.innerWidth>768&&o[1]?c[`${a}`]=o[1]:o[0]&&(c[`${a}`]=o[0]),window.innerWidth<768&&o[2]?c[`${a}`]=o[2]:o[1]?c[`${a}`]=o[1]:o[0]&&(c[`${a}`]=o[0]),c};let U=n.querySelectorAll(".ecom-collection__product-item");U.length&&J(U);function J(o){o.forEach(function(c){c.setAttribute("data-init-quantity","true");let a=c.querySelector(".ecom-collection__product-quantity-input"),l=c.querySelector(".ecom-collection__quantity-controls-plus"),p=c.querySelector(".ecom-collection__quantity-controls-minus");p&&p.addEventListener("click",function(){a.stepDown(),a.dispatchEvent(new Event("change"))}),l&&l.addEventListener("click",function(){a.stepUp(),a.dispatchEvent(new Event("change"))}),a&&a.addEventListener("change",function(r){let d=c.querySelector("a.ecom-collection__product-submit");if(r.target.value>parseInt(r.target.max)&&(r.target.value=parseInt(r.target.max)),d){let u=d.getAttribute("href");d.setAttribute("href",u.replace(/quantity=(\d*)/gm,`quantity=${r.target.value}`))}})})}function W(o=!1,c){const a=n.querySelector(".ecom-paginate__progress-bar--outner"),l=n.querySelector(".ecom-paginate__progress-bar--inner"),p=n.querySelector(".ecom-paginate__progress-text");if(!D||!y||!a||!l||!p)return;let{total:r,initProduct:d}=a&&a.dataset,u=p&&p.dataset.text,m=0,_=1,g=0,$=0;d=parseInt(d),o?(_=1,g=d*c):(window.location.href.match(/page=\d*/gm)&&(m=new URL(window.location.href).searchParams.get("page"),m===1?_=1:_=d*(m-1)+1),g=_+d-1),g>r&&(g=r),$=Math.round(g/r*100),l.style.width=`${$}%`,u=u.replace("{_start}",_),u=u.replace("{_end}",g),u=u.replace("{_total}",r),p.innerText=u}W(!1,1);function X(o,c){var a=c.variantIdField.closest(".ecom-collection__product-item");let l=a.querySelector(".ecom-collection__product-submit"),p=a.querySelector(".ecom-collection__product-quantity-input"),r=a.querySelector(".ecom-collection__product-price"),d=a.querySelector(".ecom-collection__product-price--regular"),u=a.querySelector(".ecom-unit-price");d&&d.classList.add("ecom-collection__product--compare-at-price");let m=a.querySelector(".ecom-collection__product-price--bage-sale"),_=a.querySelector(".ecom-collection__product-badge--sale"),g=a.querySelector(".ecom-collection__product-badge--sold-out"),$=a.querySelector(".ecom-collection__product-item-sku-element"),q="";if(o===null||a.hasAttribute("ec-variant-init")&&L==="first_price"){let h=a.querySelector('select[name="variant_id"]'),x=a.querySelector(".product-json"),T=null;try{T=JSON.parse(x.innerHTML)}catch{return 1}if(a.hasAttribute("ec-variant-init")&&L==="first_price")a.removeAttribute("ec-variant-init"),o=T.variants.find(Y=>Y.available),o==null&&(o=T.variants[0]);else{let Y=a.querySelector("select#"+h.id+"-option-0");if(!Y)return;const V=Y.value;V&&T.variants.forEach(function(fe){if(fe.options.includes(V)){o=fe;return}})}}if(o){if(r&&(r.innerHTML=window.EComposer.formatMoney(o.price)),d&&(d.innerHTML=window.EComposer.formatMoney(o.compare_at_price)),u){o.unit_price?u.style.display="block":u.style.display="none";const h=u.querySelector(".ecom-ground-price_unit-price");h&&(h.innerHTML=window.EComposer.formatMoney(o.unit_price))}if(o.compare_at_price>o.price){d&&(d.style.display="inherit");let h="";h=n.querySelector(".ecom-collection__product-main").dataset.sale,n.querySelector(".ecom-collection__product-main").dataset.translate=="false"&&(h=I),_&&g&&(_.style.display="block",g.style.display="none");const x=/\{{.*\}}/g,T=/\(\(.*\)\)/g;te==="amount"?(q=o.compare_at_price-o.price,m&&(m.style.display="inherit",x.test(h)?m.innerHTML=h.replace(x,window.EComposer.formatMoney(q)):T.test(h)&&(m.innerHTML=h.replace(T,window.EComposer.formatMoney(q))))):(q=(o.compare_at_price-o.price)*100/o.compare_at_price,m&&(m.style.display="inherit",x.test(h)?m.innerHTML=h.replace(x,Math.round(q)):T.test(h)&&(m.innerHTML=h.replace(T,Math.round(q)))))}else d&&(d.style.display="none"),_&&g&&(_.style.display="none",g.style.display="none"),m&&(m.style.display="none",m.innerHTML="");if($&&(o.sku?($.querySelector(".ecom-collection__product-item-sku").innerHTML=o.sku,$.style.display="flex"):$.style.display="none"),o.featured_image){let h=a.querySelector(".ecom-collection__product-media img");if(!i&&h){let x=h.closest("div");x&&x.classList.add("ecom-product-image-loading"),b(h,o.featured_image),h.addEventListener("load",function(){x&&x.classList.remove("ecom-product-image-loading")})}}if(o.options.length,a.querySelector(".ecom-collection__product-submit"))if(o.available){const h=l.closest(".ecom-collection__product--wrapper-items");if(h.dataset.iconAdd&&l.querySelector(".ecom-collection__product-add-cart-icon")&&(l.querySelector(".ecom-collection__product-add-cart-icon").innerHTML=h.dataset.iconAdd),!o.inventory_management||o.inventory_management&&o.inventory_quantity>0){if(l.removeAttribute("disabled"),p){let x=p.closest(".ecom-collection__product-quantity--wrapper");x&&(x.style.display="flex"),p.style.display="flex",o.inventory_management?p.max=o.inventory_quantity:p.max=9999}l.classList.add("ecom-collection__product-form__actions--add"),l.classList.remove("ecom-collection__product-form__actions--soldout"),l.classList.remove("ecom-collection__product-form__actions--unavailable"),l.querySelector(".ecom-add-to-cart-text").innerHTML=l.getAttribute("data-text-add-cart")}else if(o.inventory_policy=="continue"&&o.inventory_quantity<=0){if(l.removeAttribute("disabled"),p){let x=p.closest(".ecom-collection__product-quantity--wrapper");x&&(x.style.display="flex"),p.max=9999,p.style.display="flex"}l.classList.add("ecom-collection__product-form__actions--add"),l.classList.remove("ecom-collection__product-form__actions--soldout"),l.classList.remove("ecom-collection__product-form__actions--unavailable"),l.querySelector(".ecom-add-to-cart-text").innerHTML=l.getAttribute("data-text-pre-order")}l.dataset.childName="add_to_cart_button",l.dataset.childTitle="Add to cart button"}else{if(_&&g&&(_.style.display="none",g.style.display="block"),y&&l.setAttribute("disabled","disabled"),p){let x=p.closest(".ecom-collection__product-quantity--wrapper");x&&(x.style.display="none"),p.style.display="none"}const h=l.closest(".ecom-collection__product--wrapper-items");h.dataset.iconSoldout&&l.querySelector(".ecom-collection__product-add-cart-icon")&&(l.querySelector(".ecom-collection__product-add-cart-icon").innerHTML=h.dataset.iconSoldout),l.classList.add("ecom-collection__product-form__actions--soldout"),l.classList.remove("ecom-collection__product-form__actions--add"),l.classList.remove("ecom-collection__product-form__actions--unavailable"),l.querySelector(".ecom-add-to-cart-text").innerHTML=l.getAttribute("data-text-sold-out"),l.dataset.childName="sold_out_button",l.dataset.childTitle="Sold out button"}}else r.html=window.EComposer.formatMoney(0),d&&(d.innerHTML=window.EComposer.formatMoney(0),d.style.display="none"),l&&(l.setAttribute("disabled","disabled"),l.classList.add("ecom-collection__product-form__actions--unavailable"),l.classList.remove("ecom-collection__product-form__actions--add"),l.classList.remove("ecom-collection__product-form__actions--soldout"),l.querySelector(".ecom-add-to-cart-text").innerHTML=l.getAttribute("data-text-unavailable"))}function P(o){if(o.classList.contains("ecom-swatch-init"))return;o.classList.add("ecom-swatch-init");let c=o.querySelector(".ecom-collection__product-form");if(!c)return;let a=c.querySelector('select[name="variant_id"]'),l=o.querySelector(".product-json");if(!a||!l)return;let p=null;try{p=JSON.parse(l.innerHTML)}catch{return 1}if(window.EComposer&&window.EComposer.OptionSelectors&&!a.dataset.ecomOptionInit)try{a.dataset.ecomOptionInit="true",new window.EComposer.OptionSelectors(a.id,{product:p,onVariantSelected:X,enableHistoryState:!1})}catch{return 1}o.querySelectorAll(".ecom-collection__product-swatch-item").forEach(function(r){r.addEventListener("click",function(){i=!1;var d=this.closest("li");if(d.classList.contains("ecom-product-swatch-item--active"))return!1;d==null||d.parentNode.querySelectorAll(".ecom-product-swatch-item--active").forEach(function(g){g.classList.remove("ecom-product-swatch-item--active")}),d.classList.add("ecom-product-swatch-item--active");var u=d.getAttribute("data-option-index"),m=d.getAttribute("data-value");let _=o.querySelector("select#"+a.id+"-option-"+u);_.value=m,_.dispatchEvent(new Event("change"))})}),o.querySelectorAll("select.ecom-collection__product-swatch-select").forEach(function(r){r.addEventListener("change",function(){var d=this,u=d.getAttribute("data-option-index"),m=d.value;o.querySelectorAll("select#"+a.id+"-option-"+u).forEach(function(_){_.value=m,_.dispatchEvent(new Event("change"))})})})}if(this.settings.layout==="slider"){let a=function(l){var p=l.querySelector(".ecom-swiper-container");if(!p)return;if(!(window.EComposer&&typeof window.EComposer.buildSwiperConfig=="function")){let u=0;const m=setInterval(function(){u++,window.EComposer&&typeof window.EComposer.buildSwiperConfig=="function"?(clearInterval(m),a(l)):u>=20&&clearInterval(m)},200);return}var r=K(G);if(!r)return;r.pagination={el:l.querySelector(".ecom-swiper-pagination"),type:B,clickable:!0},r.navigation={nextEl:l.querySelector(".ecom-swiper-button-next"),prevEl:l.querySelector(".ecom-swiper-button-prev")},r.allowTouchMove=y,r.autoHeight=!1,r.on={init:function(){this.el.classList.add("ecom-swiper-initialized")}};let d=[E,H,F];if(!y)setTimeout(function(){r=R(d,r,"speed"),r=R([N,O,Z],r,"centeredSlides"),p.swiper&&typeof p.swiper.destroy=="function"&&p.swiper.destroy(!0,!0),new window.EComSwiper(p,r)},200);else{r=R(d,r,"speed"),r=R([N,O,Z],r,"centeredSlides"),p.swiper&&typeof p.swiper.destroy=="function"&&p.swiper.destroy(!0,!0);const m=new window.EComSwiper(p,r);r.autoplay.enabled&&(m.on("touchStart",function(_,g){_.params.speed=300,_.autoplay.stop()}),m.on("touchEnd",function(_,g){window.innerWidth>1024&&E&&(_.params.speed=E),window.innerWidth<=1024&&window.innerWidth>768&&H?_.params.speed=H:E&&(_.params.speed=E),window.innerWidth<768&&F?_.params.speed=F:H?_.params.speed=H:E&&(_.params.speed=E),_.autoplay.start()}))}},o=this.$el,c=o.querySelector(".ecom-collection__product-container");a(o),c.addEventListener("ecom-products-init-slider",function(l){a(l.detail.wrapper)})}M.forEach(P);const f=function(o){o.querySelectorAll(".ecom-collection__product-form__actions--quickshop").forEach(function(c){c.addEventListener("click",function(a){this.style.display="none";let l=this.closest(".ecom-collection__product-item");l.querySelectorAll(".ecom-collection__product-variants").forEach(function(p){p.classList.add("ecom-active")}),l.querySelectorAll(".ecom-collection__product-quick-shop-wrapper").forEach(function(p){p.style.display="inherit"})})}),o.querySelectorAll(".ecom-collection__product-close").forEach(function(c){c.addEventListener("click",function(a){let l=this.closest(".ecom-collection__product-item");l.querySelectorAll(".ecom-collection__product-variants").forEach(function(p){p.classList.remove("ecom-active")}),l.querySelectorAll(".ecom-collection__product-quick-shop-wrapper").forEach(function(p){p.style.display="none"}),l.querySelectorAll(".ecom-collection__product-form__actions--quickshop").forEach(function(p){p.style.display="inherit"})})})};f(n);const k=n.querySelector(".ecom-collection__product-main");let v=k.dataset,w=k.dataset.countdownShows;const A=/\[([^\]]+)\]/gm;var z="";if(w.indexOf("week")>=0&&v.week){let o="",c=v.week.replace(A,(...a)=>(o=a[1],""));z+=`
                            <div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--week">
                                <span class="ecom-collection__product-time--number">
                                    ${o}
                                </span>
                                <span class="ecom-collection__product-time--label">
                                    ${c}
                                </span>
                            </div>`}if(w.indexOf("day")>=0&&v.day){let o="",c=v.day.replace(A,(...a)=>(o=a[1],""));z+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--day">
                                    <span class="ecom-collection__product-time--number">
                                        ${o}
                                    </span>
                                    <span class="ecom-collection__product-time--label">
                                        ${c}
                                    </span>
                                </div> `}if(w.indexOf("hour")>=0&&v.hour){let o="",c=v.hour.replace(A,(...a)=>(o=a[1],""));z+=`
                            <div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--hour">
                                <span class="ecom-collection__product-time--number">
                                    ${o}
                                </span>
                                <span class="ecom-collection__product-time--label">
                                    ${c}
                                </span>
                            </div>
                        `}if(w.indexOf("minute")>=0&&v.minute){let o="",c=v.minute.replace(A,(...a)=>(o=a[1],""));z+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--minute">
                                    <span class="ecom-collection__product-time--number">
                                        ${o}
                                    </span>
                                    <span class="ecom-collection__product-time--label">
                                        ${c}
                                    </span>
                                </div>
                            `}if(w.indexOf("second")>=0&&v.second){let o="",c=v.second.replace(A,(...a)=>(o=a[1],""));z+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--second">
                                    <span class="ecom-collection__product-time--number">
                                        ${o}
                                    </span>
                                    <span class="ecom-collection__product-time--label">
                                        ${c}
                                    </span>
                                </div>`}function Q(o){let c=this.closest(".ecom-collection__product-countdown-wrapper"),a=c.querySelector(".ecom-collection__product-countdown-progress-bar"),l=c.querySelector(".ecom-collection__product-countdown-progress-bar--timer"),p=this.getAttribute("data-ecom-countdown-from")||0;if(this.innerHTML=o.strftime(z),a&&p){let r=new Date().getTime(),d=new Date(p),u=d.getTime(),m=o.finalDate.getTime();if(u<r&&m>u){a.style.removeProperty("display");let _=m-u,g=m-r,$=Math.round(g*100/_)+"%";l.style.width=$}else a.style.display="none"}}function ee(o){if(o.dataset.ecomCountdown){if(o.dataset.ecomCountdownFrom&&new Date().getTime()>new Date(o.dataset.ecomCountdown).getTime()&&y)return o.closest(".ecom-collection__product-countdown-wrapper").style.display="none",!1;window.EComCountdown&&window.EComCountdown(o,new Date(o.dataset.ecomCountdown),Q),o.addEventListener("stoped.ecom.countdown",()=>{o.closest(".ecom-collection__product-countdown-wrapper").style.display="none"})}}if(n.querySelectorAll(".ecom-collection__product-countdown-time").forEach(function(o){ee(o)}),y){const o=n.querySelector(".ecom-collection__product-main");let c=1;const a=function(r){r.preventDefault();const d=this.dataset.get,u=this.closest(".ecom-sections[data-section-id]"),m=n.closest(".ecom-row.ecom-section");if(!d||!u||!u.dataset.sectionId)return;const _=u.dataset.sectionId,g=`${d}&section_id=${_}`;c++,W(!0,c),this.classList.add("ecom-loading"),p(g,u,this,"loadmore",m)},l=function(r){function d(m,_){new IntersectionObserver(($,q)=>{$.forEach(h=>{h.isIntersecting&&(_.cb?_.cb(m):u(h.target),q.unobserve(h.target))})},_).observe(m)}function u(m){const _=m.dataset.get,g=m.closest(".ecom-sections[data-section-id]"),$=m.closest(".ecom-row.ecom-section");if(!_||!g||!g.dataset.sectionId)return;const q=g.dataset.sectionId,h=`${_}&section_id=${q}`;S&&(n.classList.add("ecom-doing-scroll"),p(h,g,m,"infinite",$))}d(r,{})},p=function(r,d,u,m,_){S=!1,async function($){return(await fetch($,{method:"GET",cache:"no-cache",headers:{"Content-Type":"text/html"}})).text()}(r).then(function($){var Y;const q=document.createElement("div");q.innerHTML=$;const h=q.querySelector(".ecom-collection__product-main.ecom-collection_product_template_collection .ecom-collection__product--wrapper-items");if(!h)return;const x=_.querySelector(".ecom-collection__product--wrapper-items"),T=_.querySelector(".ecom-products-pagination-loadmore");for(;h.firstChild;)x.appendChild(h.firstChild);if((Y=h==null?void 0:h.parentNode)==null||Y.removeChild(h),m==="loadmore"){const V=q.querySelector(".ecom-products-pagination-loadmore");V?T.innerHTML=V.innerHTML:T.remove()}else{u.remove();const V=q.querySelector(".ecom-products-pagination-infinite");V&&(x.after(V),l(V))}o.dispatchEvent(new CustomEvent("ecom-products-init",{detail:{wrapper:o}}))}).finally(function(){window.EComposer&&window.EComposer.initQuickview&&typeof window.EComposer.initQuickview=="function"&&window.EComposer.initQuickview(),S=!0,n.classList.remove("ecom-doing-scroll"),u.classList.remove("ecom-loading")})};if(o&&o.dataset.pagination){const r=o.dataset.pagination;if(r==="loadmore")n.querySelector(".ecom-products-pagination-loadmore-btn")&&n.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",a);else if(r==="infinit"){const d=n.querySelector(".ecom-products-pagination-infinite");d&&l(d)}}o.addEventListener("ecom-products-init",function(r){const d=r.detail.wrapper;if(!d)return;if(o&&o.dataset.pagination){const _=o.dataset.pagination;if(_==="loadmore")n.querySelector(".ecom-products-pagination-loadmore-btn")&&n.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",a);else if(_==="infinit"){const g=n.querySelector(".ecom-products-pagination-infinite");g&&l(g)}}d.querySelectorAll(".ecom-collection__product-variants:not(.ecom-swatch-init)").length&&d.querySelectorAll(".ecom-collection__product-variants:not(.ecom-swatch-init)").forEach(P),d.querySelectorAll(".ecom-collection__product-countdown-time").length&&d.querySelectorAll(".ecom-collection__product-countdown-time").forEach(function(_){ee(_)}),f(d);let u=d.querySelectorAll(".ecom-collection__product-item:not([data-init-quantity='true'])");u.length&&J(u),d.querySelector(".ecom-products-pagination-loadmore-btn")&&d.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",a),window.EComposer&&typeof window.EComposer.init=="function"&&window.EComposer.init(),se(d);const m=d.querySelector(".ecom-collection__product--wishlist-wrapper");ae(m),W(!0,c),window.EComposer&&typeof window.EComposer.initButtonWishlist=="function"&&window.EComposer.initButtonWishlist(),re(d)})}function se(o){if(o&&o.dataset.reviewPlatform)switch(o.dataset.reviewPlatform){case"product-reviews":if(window.SPR)try{window.SPR.$=window.jQuery,window.SPR.initDomEls(),window.SPR.loadBadges()}catch(c){console.info(c.message)}break;case"judgeme":if(window.jdgm){try{window.jdgm.batchRenderBadges()}catch(c){console.info(c.message)}n.querySelectorAll('[data-average-rating="0.00"]').forEach(function(c){c.style.display="block !important"})}break;case"product-reviews-addon":window.StampedFn&&window.StampedFn.loadBadges();break;case"lai-reviews":typeof window.SMARTIFYAPPS<"u"&&window.SMARTIFYAPPS.rv.installed&&window.SMARTIFYAPPS.rv.scmReviewsRate.actionCreateReviews();break;case"air-reviews":typeof window.avadaAirReviewRerender=="function"&&window.avadaAirReviewRerender();break}}function ae(o){if(o)switch(o.dataset.wishlistApp){case"swym-relay":window._swat&&window._swat.initializeActionButtons(".ecom-collection__product-wishlist-button");break;case"wishlist-hero":n.querySelectorAll(".wishlist-hero-custom-button").forEach(function(c){var a=new CustomEvent("wishlist-hero-add-to-custom-element",{detail:c});document.dispatchEvent(a)});break}}function re(o){if(!o)return;const c=o.querySelectorAll(".ecom-collection__product-media-wrapper:not([data-hover-media-init])");if(!c.length)return;const a=!window.matchMedia||window.matchMedia("(hover: hover)").matches,l=function(p){const r=function(){typeof window.requestIdleCallback=="function"?window.requestIdleCallback(p,{timeout:2e3}):window.requestAnimationFrame(p)};document.readyState==="complete"?r():window.addEventListener("load",r,{once:!0})};c.forEach(function(p){p.setAttribute("data-hover-media-init","true");const r=p.querySelector("img.ecom-collection__product-secondary-media");if(!r)return;const d=function(){const m=r.getAttribute("data-srcset"),_=r.getAttribute("data-src");if(!m&&!_)return;const g=function(){p.classList.add("ecom-hover-ready")};r.addEventListener("load",g,{once:!0}),m&&(r.setAttribute("srcset",m),r.removeAttribute("data-srcset")),_&&(r.setAttribute("src",_),r.removeAttribute("data-src")),r.complete&&r.naturalWidth&&g()};if(!y){d();return}if(!a&&!p.classList.contains("ecom-enable-hover--mobile"))return;if(p.addEventListener("pointerenter",d,{once:!0}),p.addEventListener("touchstart",d,{once:!0,passive:!0}),p.addEventListener("focusin",d,{once:!0}),typeof window.IntersectionObserver!="function"){l(d);return}const u=new window.IntersectionObserver(function(m){!m[0]||!m[0].isIntersecting||(u.disconnect(),l(d))},{rootMargin:"200px"});u.observe(p)})}if(re(n),y&&window.Shopify&&window.Shopify.routes){var le=n.querySelector("[data-ecom-vendor-fallback]"),ce=n.querySelector("[data-ecom-type-fallback]"),pe=le&&le.getAttribute("data-ecom-vendor-fallback"),de=ce&&ce.getAttribute("data-ecom-type-fallback"),_e=n.closest(".ecom-sections[data-section-id]"),ue=_e&&_e.dataset.sectionId;if(ue){var xe=pe?'vendor:"'+pe.replace(/"/g,'\\"')+'"':"",$e=de?'product_type:"'+de.replace(/"/g,'\\"')+'"':"",me=xe||$e;me&&fetch(`${window.Shopify.routes.root}search?q=${encodeURIComponent(me)}&type=product&section_id=${ue}`).then(function(o){return o.text()}).then(function(o){var c=document.createElement("div");c.innerHTML=o;var a=c.querySelector(`.ecom-block.${C}`),l=a&&a.querySelector(".ecom-collection__product-main"),p=n.querySelector(".ecom-collection__product-main");if(!(!l||!p)){var r=l.querySelectorAll(".ecom-collection__product-item[data-product-handle]").length,d=p.querySelectorAll(".ecom-collection__product-item[data-product-handle]").length;if(!(!r||r<=d)){p.innerHTML=l.innerHTML,p.dispatchEvent(new CustomEvent("ecom-products-init",{detail:{wrapper:p}}));var u=n.querySelector(".ecom-collection__product-container");u&&u.dispatchEvent(new CustomEvent("ecom-products-init-slider",{detail:{wrapper:u}})),window.EComposer&&typeof window.EComposer.initQuickview=="function"&&window.EComposer.initQuickview()}}}).catch(function(o){console.error(o)})}}if(!y){const o=n.querySelector(".ecom-collection__product-main");se(o);const c=n.querySelector(".ecom-collection__product--wishlist-wrapper");ae(c)}if(this.settings.enable_preload){var ke=n.querySelectorAll(".ecom-collection__product-item");ke.forEach(function(o){o.addEventListener("mouseenter",function(){let c=document.createElement("link");c.rel="prefetch",document.head.appendChild(c);var a=this.querySelector("a.ecom-collection__product-item-information-title");!a||(c.href=a.getAttribute("href"))},{once:!0})})}if(this.settings.show_compare&&!y){var qe=n.querySelectorAll(".ecom-product__compare-link");qe.forEach(function(o){o.addEventListener("click",function(){this.classList.contains("ecom-product__compare-link-added")?this.classList.remove("ecom-product__compare-link-added","ecom-button-active"):this.classList.add("ecom-product__compare-link-added","ecom-button-active")})})}if(this.settings.show_wishlist&&!y){var Se=n.querySelectorAll(".ecom-product__wishlist-link");Se.forEach(function(o){o.addEventListener("click",function(){this.classList.contains("ecom-product__wishlist-link-added")?this.classList.remove("ecom-product__wishlist-link-added","ecom-button-active"):this.classList.add("ecom-product__wishlist-link-added","ecom-button-active")})})}if(this.settings.show_product_by==="recommendations"&&y){let o=n.closest(".ecom-builder");if(o){let c=o.querySelector(".ecom-sections").dataset.sectionId,a=o.querySelector('input[name="product-id"]')?o.querySelector('input[name="product-id"]').value:"",l=8,p=n.querySelector(".ecom-collection__product-container"),r=n.querySelector(".ecom-collection__product-main");r.classList.contains("ecom-collection_product_template_product")&&this.settings.show_product_by==="recommendations"&&(l=this.settings.limit_recommended_products),fetch(`${window.Shopify.routes.root}recommendations/products?product_id=${a}&limit=${l}&section_id=${c}`).then(u=>u.text()).then(u=>{const m=document.createElement("div");m.innerHTML=u;const _=m.querySelector(`[data-section-id="${c}"]`),g=_.querySelector(`.ecom-block.${C}`);if(!g){console.warn(`Block with ID ${C} not found in recommendations.`);return}const $=g.querySelector(".ecom-collection__product-main");_.innerHTML.trim().length&&r&&(r.innerHTML=$.innerHTML,r.querySelector(".ecom-collection__product--wrapper-items")&&r.dispatchEvent(new CustomEvent("ecom-products-init",{detail:{wrapper:r}})),window.EComposer&&typeof window.EComposer.initQuickview=="function"&&window.EComposer.initQuickview(),p.dispatchEvent(new CustomEvent("ecom-products-init-slider",{detail:{wrapper:p}})))}).catch(u=>{console.error(u)})}}}},default(){return{settings:{show_preview_pagination:!0,show_product_by:"condition",limit_recommended_products:8,order_login_to_see_price:8,show_login_to_see_price_text:!1,login_to_see_price_text:this.$t("login_to_see_price"),show_text_first:"column",text_progress_pagination:"Viewing {_start} - {_end} of {_total}",layout:"slider",image_ratio:"adapt",show_featured_media:!1,disable_lazyload:!0,enable_preload:!1,placeholder_image_shopify:"product-1",link_with_collection:!0,show_secondary_image:!0,price_from_text:"From",show_sale_badge:!0,sale_badge_type:"amount",show_badges:!0,title_tag:"h3",enable_countdown:!0,enable_progress_bar:!1,countdown_title:" ",sale_text:"Sale",sold_text:"Sold",product_unavailable:"Unavailable",product_outstock:"Outstock",show_product_available:!1,show_variant_label:"block",show_option_name:"none",slider_items:4,show_vendor:!1,show_sku:!1,show_description:!1,show_type:!1,show_price:"block",hide_price_if_not_logged_in:!1,show_product_rating:!1,show_product_quickview:!1,show_product_wishlist:!1,vendor_title:"Vendor",type_title:"Type",limit:8,badge_tags:"Hot,Best Selling,Trending Item",trans_no_item:"There are no product yet!",show_picker:"show",show_actions:!0,type:"image",option:"Color",option_layout:"radio",quickshop_layout:"full",shows_countdown:["day","hour","minute","second"],text_week:"[%-W] week%!W",text_day:"[%-d] day%!D",text_hour:"[%-H] hr%!H",text_minute:"[%-M] min%!M",text_second:"[%-S] sec%!S",text_prev_page:"Previous",text_next_page:"Next",number_type:"icon","grid-column-gap":"10px",action:"popup",added_cart_text:"Added to cart",added_cart_message:"Added to cart",slidesPerView__tablet:3,spaceBetween__tablet:30,slidesPerView__mobile:1,spaceBetween__mobile:15,enable_pagination:!0,row_items:4,imagePos:"ecom-flex-column","grid-template-columns":3,show_countdown_on_sale:!1,countdown_from:"2021/11/01 12:00",navigation:!0,slidesPerView:4,slidesPerGroup:1,spaceBetween:30,order_title:1,order_description:9,order_vendor:3,order_sku:4,order_type:5,order_price:7,order_button:10,order_variant:9,icon_prev_page:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',icon_next_page:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',slider_items__tablet:3,slider_items__mobile:1,slider_speed:200,slider_navigation_layout:"navigation",slider_prev_icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" fill="currentColor"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"></path></svg>',slider_next_icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" fill="currentColor"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>',slider_spacing:20,price_type:"first_price",styleCountdown:"column",sku_title:"SKU: ",quickview_text:"Quick view",quickview_icon:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zoom-in"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>',order_reivew:2,quick_shop_text:"Quick Shop",order_countdown:0,placeholder_image:!1,placeholder_image_custom:{value:"/images/placeholder.png"},slider_spacing__mobile:15,slider_spacing__tablet:15,slider_loop:!0,bage_sale:"Save {{sale}}",style:"vertical",add_to_cart:"Add to cart ",pre_order:"Pre order",view_more_text:"View more",sold_out_text:"Sold out",quantity_inline:!1,compare_tab:"compare_tab_normal",tab_tooltip_compare:"tab_tooltip_compare_normal",navigation_position:"center",navigation_position__tablet:"center",navigation_position__mobile:"center",show_wishlist:!1,wishlist_icon:{value:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>'},wishlist_icon_added:{value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M22.5,5c-2.892,0-5.327,1.804-6.5,2.854C14.827,6.804,12.392,5,9.5,5C5.364,5,2,8.364,2,12.5c0,2.59,2.365,4.947,2.46,5.041 L16,29.081l11.534-11.534C27.635,17.447,30,15.09,30,12.5C30,8.364,26.636,5,22.5,5z"></path></svg>'},show_compare:!1,compare_icon:{value:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>'},compare_icon_added:{value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 16 3 C 8.800781 3 3 8.800781 3 16 C 3 23.199219 8.800781 29 16 29 C 23.199219 29 29 23.199219 29 16 C 29 14.601563 28.8125 13.207031 28.3125 11.90625 L 26.6875 13.5 C 26.886719 14.300781 27 15.101563 27 16 C 27 22.101563 22.101563 27 16 27 C 9.898438 27 5 22.101563 5 16 C 5 9.898438 9.898438 5 16 5 C 19 5 21.695313 6.195313 23.59375 8.09375 L 25 6.6875 C 22.699219 4.386719 19.5 3 16 3 Z M 27.28125 7.28125 L 16 18.5625 L 11.71875 14.28125 L 10.28125 15.71875 L 15.28125 20.71875 L 16 21.40625 L 16.71875 20.71875 L 28.71875 8.71875 Z"></path></svg>'},content_tooltip_wishlist:"Add to Wishlist",content_tooltip_wishlist_added:"Browse Wishlist",content_tooltip_compare_added:"Compare products",content_tooltip_compare:"Compare",group_btn_hor_pos:"start",group_btn_ver_pos:"start",group_btn_ver_pos1:"start",group_btn_hor_pos1:"start"},style:{general:{tab:"normal"},login_to_see_price:{"justify-content":"center",text_hover_color:"#007aff"},products_item:{tab:"normal",borderRadius:{top:"0px",left:"0px",bottom:"0px",right:"0px"},border:{"border-style":"none"},backgroundColor:"rgba(255, 255, 255, 0)"},product_image:{imageOpacitynormalmode:1,imageOpacityhovermode:1,spacing:{margin:{bottom:"0px"}},tab:"normal",imageWidth:"100%",border_radius:{top:"24px",left:"24px",bottom:"24px",right:"24px"},spacing__tablet:{margin:{}},border_radius__mobile:{top:"12px",left:"12px",bottom:"12px",right:"12px"}},product_actions:{tab:"normal",background_color:"rgba(182, 150, 113, 0)",background_color_hover:"rgba(182, 150, 113, 0)",spacing:{padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"},margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}},quickshop_close_button:{tab:"normal",background_color:"#000",background_color_hover:"#31452c"},variant_swatch:{tab:"normal",width:"32px",height:"32px",borderRadius:{top:"6px",left:"6px",bottom:"6px",right:"6px"},spacing:{margin:{right:"4px",top:"4px",left:"4px",bottom:"4px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},spacingWraper:{margin:{top:"8px",bottom:"5px"}},border:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#DBDBDB"},borderHoverMode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#C1272D"},borderActiveMode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#C1272D"},justifyContent:"center"},progress_bar:{tab:"normal",spacing:{margin:{top:"10px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},height:"7px",borderRadius:{top:"4px",left:"4px",bottom:"4px",right:"4px"}},product_wishlist:{"horizontal-orientation":"left","verical-orientation":"top"},pagination:{buttonAlignment:"center",buttonColornormalmode:"#111827",buttonBackgroundnormalmode:{classic:{"background-color":"rgba(17, 24, 39, 0.1)"}},buttonColorhovermode:"#111827",buttonBackgroundhovermode:{classic:{"background-color":"rgba(17, 24, 39, 0.2)"}},padding:{left:"20px",top:"8px",bottom:"8px",right:"20px"},spacing:{margin:{top:"30px"}}},sold_out_button:{buttonAlignment:"center",buttonColornormalmode:"#fff",buttonBackgroundnormalmode:{classic:{"background-color":"#555"}},tab:"normal",buttonTypography:{"font-size":"14px","font-weight":"700","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"line-height":"1.25em","letter-spacing":"0px","text-decoration":"none","text-transform":"uppercase"},spacing:{padding:{left:"30px",right:"30px",top:"10px",bottom:"10px"},margin:{top:"15px"}},buttonColorhovermode:"#fff",buttonBackgroundhovermode:{classic:{"background-color":"rgba(49, 69, 44, 0.8)"}},buttonBordernormalmode:{"border-style":"none"},spacing__mobile:{padding:{left:"20px",right:"20px"},margin:{top:"20px"}},buttonTypography__mobile:{"font-size":"12px"},buttonHeightnormalmode__mobile:"40px",buttonTypography__tablet:{"font-size":"13px"},buttonHeightnormalmode__tablet:"40px",spacing__tablet:{padding:{left:"20px",right:"20px"}},buttonBorderRadiusnormalmode:{top:"12px",left:"12px",bottom:"12px",right:"12px"},buttonBorderhovermode:{"border-style":"none"},buttonAlignment__tablet:"center"},add_to_cart_button:{buttonAlignment:"center",buttonColornormalmode:"#fff",buttonBackgroundnormalmode:{classic:{"background-color":"#008F86"}},buttonBordernormalmode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#008F86"},buttonColorhovermode:"#008F86",buttonBackgroundhovermode:{classic:{"background-color":"#fff"}},tab:"normal",buttonTypography:{"font-size":"14px","font-weight":"700","text-decoration":"none","font-style":"normal","text-transform":"uppercase","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"letter-spacing":"0px","line-height":"1.25em"},spacing:{padding:{left:"30px",right:"30px",top:"10px",bottom:"10px"},margin:{top:"15px"}},buttonBorderhovermode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#fff"},add_cart_icon_width:"19px",buttonTypography__tablet:{"font-size":"13px"},spacing__tablet:{padding:{left:"20px",right:"20px"},margin:{top:"15px"}},spacing__mobile:{padding:{left:"20px",right:"20px"},margin:{top:"20px"}},buttonTypography__mobile:{"font-size":"12px"},buttonHeightnormalmode__mobile:"40px",transitions:{transitions:{duration:"400ms"}},buttonBorderRadiusnormalmode:{top:"12px",left:"12px",bottom:"12px",right:"12px"},buttonAlignment__tablet:"center"},unavailable_button:{buttonAlignment:"center",buttonColornormalmode:"#fff",buttonBackgroundnormalmode:{classic:{"background-color":"#000"}},tab:"normal",buttonTypography:{"font-size":"16px","font-weight":"700","font-family":{name:"Cormorant",value:"https://fonts.googleapis.com/css?family=Cormorant:100,200,300,400,500,600,700,800,900",thumbnail:"Cormorant"},"line-height":"1.25em","text-transform":"capitalize","letter-spacing":"0px","text-decoration":"none"},buttonColorhovermode:"#fff",spacing:{padding:{left:"40px",right:"40px",top:"9px",bottom:"9px"},margin:{top:"24px"}},buttonBackgroundhovermode:{classic:{"background-color":"rgba(49, 69, 44, 0.8)"}},spacing__mobile:{padding:{left:"15px",right:"15px"},margin:{top:"20px"}},buttonHeightnormalmode__mobile:"40px",buttonTypography__mobile:{"font-size":"14px"},buttonHeightnormalmode__tablet:"40px",buttonTypography__tablet:{"font-size":"14px"},spacing__tablet:{padding:{left:"20px",right:"20px"}},buttonBorderRadiusnormalmode:{top:"40px",left:"40px",bottom:"40px",right:"40px"}},quickshop_button:{buttonAlignment:"flex-start",buttonColornormalmode:"#ffffff",buttonBackgroundnormalmode:{classic:{"background-color":"#000"}},buttonColorhovermode:"#ffffff",spacing:{padding:{top:"8px",left:"16px",bottom:"8px",right:"16px"},margin:{top:"5px",bottom:"5px"}},tab:"normal",buttonBordernormalmode:{"border-style":"none"},buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px"},buttonWidthnormalmode:"100%"},quickview_button:{buttonAlignment:"center",buttonColornormalmode:"#ffffff",buttonBackgroundnormalmode:{classic:{"background-color":"#000"}},buttonColorhovermode:"#ffffff",spacing:{padding:{top:"5px",left:"0px",bottom:"5px",right:"0px"},margin:{top:"5px",bottom:"5px"}},tab:"normal",quickview_icon_width:"12px",buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"300","text-decoration":"none"},buttonWidthnormalmode:"100%",buttonBorderRadiusnormalmode:{top:"0px",left:"0px",bottom:"0px",right:"0px"},quickview_icon_spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}},view_more_button:{buttonAlignment:"center",tab:"normal",buttonTypography:{"text-transform":"uppercase","text-decoration":"none","font-size":"14px","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"font-weight":"700","line-height":"1.25em","letter-spacing":"0px"},buttonBackgroundnormalmode:{classic:{"background-color":"#31452c"}},buttonColornormalmode:"#fff",buttonBackgroundhovermode:{classic:{"background-color":"rgba(49, 69, 44, 0.8)"}},buttonBordernormalmode:{"border-style":"none"},buttonBorderhovermode:{"border-style":"none"},buttonColorhovermode:"#fff",viewmore_icon_width:"19px",spacing__mobile:{padding:{left:"20px",right:"20px"}},buttonHeightnormalmode__mobile:"40px",buttonTypography__mobile:{"font-size":"12px"},spacing__tablet:{padding:{left:"20px",right:"20px"},margin:{}},buttonHeightnormalmode__tablet:"40px",buttonTypography__tablet:{"font-size":"14px"},spacing:{margin:{top:"15px"},padding:{left:"30px",right:"30px",top:"10px",bottom:"10px"}},buttonAlignment__tablet:"center"},sale_price_badge:{"align-self":"flex-end",buttonColor:"#fff",buttonBackground:{classic:{"background-color":"#C1272D"}},spacing:{padding:{left:"6px",right:"6px",bottom:"3px",top:"3px"}},buttonTypography:{"font-size":"10px","font-weight":"500","line-height":"1.3em","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"letter-spacing":"0px"},buttonBorderRadius:{top:"30px",left:"30px",bottom:"30px",right:"30px"}},sale_badge:{"align-self":"flex-end",buttonColor:"#fff",buttonBackground:{classic:{"background-color":"#d1793e"}},spacing:{padding:{left:"15px",right:"15px",top:"3px",bottom:"3px"},margin:{top:"0px",bottom:"5px",left:"0px",right:"0px"}},buttonTypography:{"font-size":"10px","font-weight":"500","font-family":{id:"cY0FRb6y",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"line-height":"1.3em","letter-spacing":"0px"},buttonBorderRadius:{top:"40px",left:"40px",bottom:"40px",right:"40px"},spacing__tablet:{margin:{},padding:{}},spacing__mobile:{margin:{},padding:{}}},sold_out_badge:{"align-self":"flex-end",buttonColor:"#ffffff",buttonBackground:{classic:{"background-color":"#111827"}},spacing:{margin:{bottom:"5px"},padding:{top:"3px",left:"10px",bottom:"3px",right:"10px"}},buttonTypography:{"font-size":"10px","font-weight":"500","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"line-height":"1.3em","letter-spacing":"0px"},buttonBorderRadius:{top:"40px",left:"40px",bottom:"40px",right:"40px"}},custom_badge:{"align-self":"flex-end",buttonColor:"#ffffff",buttonBackground:{classic:{"background-color":"#3c1100"}},spacing:{margin:{bottom:"5px"},padding:{left:"10px",top:"3px",bottom:"3px",right:"10px"}},buttonTypography:{"font-size":"10px","font-family":{id:"2z6NMHM0",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"font-weight":"700","line-height":"1.3em","letter-spacing":"0px","text-transform":"uppercase"},buttonBorderRadius:{top:"30px",left:"30px",bottom:"30px",right:"30px"}},show_vendor:{textColor:"#df5641",textTypography:{"font-size":"12px","font-weight":"400","text-decoration":"none"}},product_price:{"text-align":"left",textColor:"#000",textTypography:{"font-weight":"700","font-size":"20px","text-transform":"none","font-style":"normal","text-decoration":"none","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"line-height":"1.2em","letter-spacing":"0px"},"justify-content":"center",textTypography__tablet:{"line-height":"40px"},spacing:{margin:{top:"10px"}},spacing__tablet:{margin:{top:"5px"}}},product_title:{tab:"normal",textTypography:{"font-size":"16px","text-decoration":"none","font-weight":"700","font-style":"normal","line-height":"1.3em","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"letter-spacing":"0px"},textColornormalmode:"#000",spacingNormal:{margin:{top:"16px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},textColorhovermode:"#008F86",textTextAlign:"center",textTypography__tablet:{"font-size":"14px"},textTypography__mobile:{"font-size":"15px"}},variant_select:{tab:"normal",spacing:{margin:{bottom:"10px"},padding:{top:"5px",left:"10px",bottom:"5px",right:"5px"}},typo:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px"},width:"100%",outline:{outline:{"outline-style":"none"}},border:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#d5d5d5"},borderRadius:{top:"3px",left:"3px",bottom:"3px",right:"3px"},colorPlaceholder:"#d5d5d5"},slider_arrow:{navtab:"normal",tab:"normal",navigatorFontSize:"15px",navigatorPrimaryColornormalmode:"#fff",navigatorBackgroundnormalmode:{classic:{"background-color":"#008F86"}},navigatorPrimaryColorhovermode:"#fff",navigatorBackgroundhovermode:{classic:{"background-color":"rgba(0, 143, 134, 0.8)"}},navigatorBorderRadiusnormalmode:{top:"50%",left:"50%",bottom:"50%",right:"50%"},paginationWidth:"8px",paginationHeight:"8px",panigationSpacing:{margin:{right:"5px",top:"20px",left:"5px"}},panigationColornormalmode:"rgba(87, 87, 87, 0.37)",panigationColorhovermode:"#B69671",panigationColoractivemode:"#B69671",navigatorSpacing:{margin:{top:"-75px",left:"-35px",bottom:"-75px",right:"-35px"},padding:{right:"16px",top:"16px",left:"16px",bottom:"16px"}},navigatorBordernormalmode:{"border-style":"none"},navigatorBorderhovermode:{"border-style":"none"},navigationTransition:400,navigatorSpacing__tablet:{margin:{left:"-25px",right:"-25px"},padding:{top:"10px",left:"10px",right:"10px",bottom:"10px"}},navigatorSpacing__mobile:{margin:{left:"-25px",right:"-25px"},padding:{left:"10px",top:"10px",right:"10px",bottom:"10px"}}},product_regular_sale:{buttonTypography:{"font-size":"20px","font-weight":"700","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"line-height":"1.2em","letter-spacing":"0px"},buttonColor:"#000",buttonTypography__tablet:{"line-height":"40px"}},product_regular:{textColor:"#545454",textTypography:{"font-size":"14px","font-weight":"400","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"line-height":"1.2em","letter-spacing":"0px"},spacing:{margin:{left:"-3px"}},textTypography__tablet:{"line-height":"40px"}},countdown_title:{textTypography:{"font-size":"13px","font-weight":"400"}},countdown_items:{boxBackground:"rgba(0, 0, 0, 0)",width:"40px",spacing:{margin:{left:"5px",right:"5px"}},spacing__tablet:{margin:{}},width__tablet:"30px",width__mobile:"45px"},countdown_number:{buttonTypography:{"font-size":"24px","font-weight":"700","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"line-height":"1.25em"},spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},"text-align":"center",buttonColor:"#ED2A1E",buttonTypography__tablet:{"font-size":"20px"}},countdown_label:{buttonTypography:{"font-size":"10px","font-weight":"500","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"text-transform":"capitalize","line-height":"1.25em"},buttonColor:"#000","text-align":"center"},progress_bar_text:{textTypography:{"font-family":{name:"Inter",value:"https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900",thumbnail:"Inter"},"font-size":"13px","font-weight":"300"}},countdown_general:{spacing:{margin:{top:"16px",left:"16px",bottom:"16px",right:"16px"},padding:{top:"16px",left:"16px",bottom:"16px",right:"16px"}},"justify-content":"center",position:"absolute","horizontal-orientation":"left","verical-orientation":"bottom",bottom:"100%","z-index":2,boxBackground:"#fff",boxBorderRadius:{top:"16px",left:"16px",bottom:"16px",right:"16px"},boxShadow:{"box-shadow":{horizontal:"0px",vertical:"4px",blur:"24px",color:"rgba(0, 0, 0, 0.06)"}},left:"0px",spacing__tablet:{padding:{left:"12px",right:"12px",bottom:"12px",top:"12px"},margin:{}}},product_description:{textTypography:{"font-family":{name:"Inter",value:"https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900",thumbnail:"Inter"},"font-size":"12px","font-weight":"400"},textColor:"#333",spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}},show_sku:{textTypography:{"font-size":"12px","font-weight":"400","text-decoration":"none"},textColor:"#df5641",spacing:{margin:{bottom:"10px",top:"10px"}}},show_sku_title:{textColor:"#333",spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}},show_type:{textTypography:{"font-size":"12px","font-weight":"500","text-decoration":"none","font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"line-height":"1.25em","text-transform":"uppercase","letter-spacing":"1px"},textColor:"#a6a6a6",alignment:"flex-start",spacing:{margin:{top:"5px"},padding:{left:"0px",bottom:"5px"}}},product_rating:{textTypography:{"font-size":"12px","font-family":{name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"}},spacing:{margin:{top:"5px",bottom:"8px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},alignment:"flex-start"},quick_shop_button:{tab:"normal",buttonTypography:{"font-size":"12px","font-weight":"400","line-height":"1.25em","text-decoration":"none","font-style":"normal","text-transform":"uppercase","font-family":{name:"Tenor Sans",value:"https://fonts.googleapis.com/css?family=Tenor+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"Tenor Sans"},"letter-spacing":"0px"},buttonBackgroundnormalmode:{classic:{"background-color":"rgba(0, 0, 0, 0)"}},buttonBackgroundhovermode:{classic:{"background-color":"rgba(63, 65, 55, 0.1)"}},buttonBordernormalmode:{"border-style":"solid","border-color":"#3F4137"},buttonColornormalmode:"#3F4137",buttonColorhovermode:"#3F4137",add_cart_icon_width:"19px",spacing:{padding:{left:"24px",right:"24px",top:"9px",bottom:"8px"},margin:{top:"15px"}},buttonAlignment:"center",spacing__mobile:{padding:{left:"20px",right:"20px"},margin:{top:"20px"}},buttonHeightnormalmode__mobile:"40px",buttonTypography__mobile:{"font-size":"12px"},spacing__tablet:{padding:{left:"20px",right:"20px"}},buttonHeightnormalmode__tablet:"40px",buttonTypography__tablet:{"font-size":"13px"},buttonBorderRadiusnormalmode:{top:"40px",left:"40px",bottom:"40px",right:"40px"},buttonAlignment__tablet:"center"},variant_swatch_title:{textTypography:{"font-size":"12px","font-weight":"400","font-family":{name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"}},spacing:{margin:{top:"10px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},textTextAlign:"left"},variant_radio_title:{textTypography:{"font-size":"12px","font-weight":"300","font-family":{name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"}},spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},textTextAlign:"left"},variant_radio:{tab:"normal",buttonTypography:{"font-size":"13px","font-weight":"500","font-family":{id:"cY0FRb6y",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"line-height":"1.25em"},buttonBordernormalmode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#d5d5d5"},buttonColornormalmode:"#6D7175",spacing:{margin:{top:"8px",left:"4px",bottom:"0px",right:"4px"},padding:{top:"4px",left:"8px",bottom:"3.5px",right:"8px"}},itemAlignment:"center",alignment:"center",buttonColorhovermode:"#fff",buttonBackgroundhovermode:{classic:{"background-color":"#000"}},buttonBorderhovermode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#000"},buttonColoractivemode:"#fff",buttonBackgroundactivemode:{classic:{"background-color":"#000"}},buttonBorderactivemode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#000"},buttonBackgroundnormalmode:{classic:{"background-color":"#fff"}},"text-align":"center",buttonBorderRadiusnormalmode:{top:"20px",left:"20px",bottom:"20px",right:"20px"}},variant_select_title:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"500"},textTextAlign:"left",spacing:{margin:{bottom:"0px"},padding:{bottom:"0px"}},textColor:"#000"},quanity_plus:{tab:"normal",iconBackgroundnormalmode:{classic:{"background-color":"#ffffff"}},padding:{right:"10px",left:"10px"},iconBordernormalmode:{"border-style":"solid","border-width":{top:"0.8px",left:"0px",bottom:"0.8px",right:"0.8px"},"border-color":"#c2bcbc"}},quanity_minus:{tab:"normal",iconBackgroundnormalmode:{classic:{"background-color":"#ffffff"}},padding:{right:"10px",left:"10px"},iconBordernormalmode:{"border-style":"solid","border-width":{top:"0.8px",left:"0.8px",bottom:"0.8px",right:"0px"},"border-color":"#c2bcbc"}},input_quantity:{tab:"normal",width_input_quantity:"100%",height_input_quantity:"40px",border:{"border-style":"solid","border-width":{top:"0.8px",left:"0.8px",bottom:"0.8px",right:"0.8px"},"border-color":"#c2bcbc"},outline_focus:{outline:{"outline-style":"none"}},outline:{outline:{"outline-style":"none"}},"text-align":"center"},wishlist:{spacing:{margin:{top:"10px",left:"15px"},padding:{top:"2.5px",left:"2.5px",bottom:"2.5px",right:"2.5px"}},iconFontSize:"18px",buttonColoractivemode:"#e81e63"},compare:{iconFontSize:"18px",spacing:{margin:{left:"15px"},padding:{top:"2.5px",right:"2.5px",left:"2.5px",bottom:"2.5px"}}}},advanced:{"custom-css":"",scolling_horizontal:{"scrolling-animation-px":[]},spacing:{margin:{top:"55px"},padding:{bottom:"0px"}},spacing__tablet:{margin:{top:"35px"}},spacing__mobile:{margin:{top:"35px"}},animation_type:"fade-in",animation_duration:"600ms",animation_delay:"600ms"}}},getUser(){return this.$store.getters["global/user"]},show_option_name(){var t;return((t=this.data.settings)==null?void 0:t.show_option_name)=="block"},canAjaxProductFallback(){var t,s,n,e;return this.canUseCustomLiquidForCSR?!1:["product","cart"].includes((t=this.data)==null?void 0:t.template)?!0:["featured","shopify"].includes((s=this.data)==null?void 0:s.template)&&["type","vendor"].includes((e=(n=this.data)==null?void 0:n.settings)==null?void 0:e.product_source)},assignItems(){var s,n,e,b,S,C,M,y,i,I,D,L,B,N,O,Z,te,E,H,F,G,K,R,U,J,W,X;if(this.shouldUseCSR)return`{% assign limit = ${Number(((s=this.data.settings)==null?void 0:s.limit)||10)} %}`;const t=`
                    {%- capture limit-%}${(n=this.data.settings)!=null&&n.limit?this.data.settings.limit:10}{% endcapture %}
                    {%- if limit == blank -%}
                        {% assign limit = 12 %}
                    {% else %}
                        {% assign limit = limit | plus: 0 %}
                    {%- endif-%}
                `;if(((e=this.data)==null?void 0:e.template)==="product"||((b=this.data)==null?void 0:b.template)==="cart"){const P=(((S=this.data.settings)==null?void 0:S.related_conditions)||[]).map(w=>w&&w.type),f=P.length>0&&P.every(w=>w==="vendor"||w==="type"),k=P.includes("vendor")?"vendor":"type",v=(C=this.data.settings)!=null&&C.show_product_available?' | where: "available" ':"";return`
                            {% assign ecom_more_pages = false %}
                            {% assign ecom_related_type = '' %}
                            {% assign is_collection = false%}
                            {% assign current_product = blank %}
                            ${((M=this.data)==null?void 0:M.template)==="product"&&this.exporting?"{% assign current_product = product %}":""}
                            ${((y=this.data)==null?void 0:y.template)==="cart"&&this.exporting?"{%- if cart.item_count > 0 -%}{% assign current_product = cart.items.first.product %} {% assign product = cart.items.first.product %}{%- endif -%}":""}
                            ${this.exporting?"":`
                                ${t}
                                {% paginate collections.all.products by 250 %}
                                    {% assign products = collections.all.products ${(i=this.data.settings)!=null&&i.show_product_available?' | where: "available" ':""} | map: 'handle' %}
                                {% endpaginate %}
                                {% assign ecom_related_type = 'ecom-product-related-shopify-type' %}
                            `}
                                {% if current_product != blank %}
                                    {%- assign products = '' | split: '' -%}
                                    ${t}
                                    {%- comment -%} Rendered via Section Rendering API (/search?q=vendor:...) to bypass the collections.all 250-item cap with full fidelity {%- endcomment -%}
                                    {% assign ecom_is_fallback_search = false %}
                                    {% if search.terms contains 'vendor:' or search.terms contains 'product_type:' %}
                                        {% assign ecom_is_fallback_search = true %}
                                    {% endif %}
                                    {% if search.performed and ecom_is_fallback_search %}
                                        {%- paginate search.results by 250 -%}
                                            {% assign products = search.results ${v} | map: 'handle' %}
                                        {%- endpaginate -%}
                                        {% assign ecom_related_type = 'ecom-product-related-shopify-vendor' %}
                                    {% else %}
                                    ${(D=(I=this.data.settings)==null?void 0:I.related_conditions)!=null&&D.length?this.data.settings.related_conditions.map(w=>{var A,z,Q,ee;return w.type==="type"?`{% if product.type and product.type != blank  %}
                                                    {% paginate collections.all.products by 250 %}
                                                        {% assign products_type = collections.all.products | where: 'type', product.type  ${(A=this.data.settings)!=null&&A.show_product_available?' | where: "available" ':""} | map: 'handle' %}
                                                        {% if paginate.pages > 1 %}{% assign ecom_more_pages = true %}{% endif %}
                                                        {% endpaginate %}
                                                        {% if products_type.size == 0 %}
                                                            {% assign ecom_type_ajax_fallback = product.type %}
                                                        {% endif %}
                                                        {% assign products = products | concat: products_type | uniq %}
                                                        {% assign ecom_related_type = 'ecom-product-related-shopify-type' %}
                                                    {% endif %}
                                                    `:w.type==="vendor"?`
                                                    {% if product.vendor and product.vendor != blank %}
                                                        {% paginate collections.all.products by 250 %}
                                                            {% assign products_vendor = collections.all.products | where: 'vendor', product.vendor  ${(z=this.data.settings)!=null&&z.show_product_available?' | where: "available" ':""} | map: 'handle' %}
                                                            {% if paginate.pages > 1 %}{% assign ecom_more_pages = true %}{% endif %}
                                                        {% endpaginate %}
                                                        {% if products_vendor.size == 0 %}
                                                            {% assign vendor_handle = product.vendor | handleize %}
                                                            {% assign vendor_auto_collection = collections[vendor_handle] %}
                                                            {% if vendor_auto_collection and vendor_auto_collection.products.size > 0 %}
                                                                {% assign products_vendor = vendor_auto_collection.products ${(Q=this.data.settings)!=null&&Q.show_product_available?' | where: "available" ':""} | map: 'handle' %}
                                                            {% endif %}
                                                        {% endif %}
                                                        {% assign products = products | concat: products_vendor | uniq %}
                                                        {% assign ecom_related_type = 'ecom-product-related-shopify-vendor' %}
                                                        {% if products_vendor.size == 0 %}
                                                            {% assign ecom_vendor_ajax_fallback = product.vendor %}
                                                        {% endif %}
                                                    {% endif %}
                                            `:w.type==="collection"?`
                                                    {% if product.collections.size > 0 %}
                                                        {% assign valid_collection_handles = "" %}
                                                        {% for c in product.collections %}
                                                            ${(ee=this.data.settings)!=null&&ee.allow_auto_collection?"":"{% if c.handle == 'all' or c.handle == 'frontpage'  or c.products_count < 1 %}{% continue%}{% endif%}"}
                                                            {% if forloop.first == false %}
                                                                {% assign collection_handle = "," | append: c.handle %}
                                                            {% else %}
                                                                {% assign collection_handle = c.handle %}
                                                            {% endif %}
                                                            {% assign valid_collection_handles = valid_collection_handles | append: collection_handle %}

                                                            {% assign ecom_related_type = 'ecom-product-related-shopify-collection' %}
                                                            {% assign is_collection = true%}
                                                            {% assign collection = c %}
                                                        {% endfor %}
                                                        {% assign collection_handles = valid_collection_handles | split: ',' | uniq%}
                                                        {% for handle in collection_handles %}

                                                        {% assign product_collection = collections[handle].products | map: 'handle' %}
                                                        {% assign products = products | concat: product_collection | uniq %}

                                                        {% endfor %}
                                                    {% endif %}
                                                `:""}).join(""):`
                                        {% if product.type and product.type != blank and products.size < 2 or products == blank %}
                                            {% paginate collections.all.products by 250 %}
                                            {% assign products = collection.all.products  | where: 'type', product.type  ${(L=this.data.settings)!=null&&L.show_product_available?' | where: "available" ':""} %}
                                            {% endpaginate %}
                                            {% assign ecom_related_type = 'ecom-product-related-shopify-type' %}
                                            {% if products.size < 2 %}
                                                {% assign ecom_type_ajax_fallback = product.type %}
                                            {% endif %}
                                        {% endif %}
                                        {% if product.vendor and product.vendor != blank and products == blank or products.size < 2%}
                                            {% paginate collections.all.products by 250 %}
                                                {% assign products = collection.all.products | where: 'vendor', product.vendor ${(B=this.data.settings)!=null&&B.show_product_available?' | where: "available" ':""}  %}
                                            {% endpaginate %}
                                            {% assign ecom_related_type = 'ecom-product-related-shopify-vendor' %}
                                            {% if products.size < 2 %}
                                                {% assign vendor_handle = product.vendor | handleize %}
                                                {% assign vendor_auto_collection = collections[vendor_handle] %}
                                                {% if vendor_auto_collection and vendor_auto_collection.products.size > 0 %}
                                                    {% assign products = vendor_auto_collection.products ${(N=this.data.settings)!=null&&N.show_product_available?' | where: "available" ':""} %}
                                                {% else %}
                                                    {% assign ecom_vendor_ajax_fallback = product.vendor %}
                                                {% endif %}
                                            {% endif %}
                                        {% endif %}
                                        {% if product.collections.size > 0 and   products.size < 2 or products == blank %}
                                            {% for c in product.collections %}
                                                {% if c.handle == 'all' or c.handle == 'frontpage'  or c.products_count < 1 %}{% continue%}{% endif%}
                                                {% assign products = c.products  ${(O=this.data.settings)!=null&&O.show_product_available?' | where: "available" ':""} %}
                                                {% assign ecom_related_type = 'ecom-product-related-shopify-collection' %}
                                                {% assign is_collection = true%}
                                                {% assign collection = c %}
                                                {%- break -%}
                                            {% endfor %}
                                        {% endif %}
                                    `}
                                {% if products.size == 0 and product.type != blank and ecom_type_ajax_fallback == blank %}
                                    {% assign ecom_type_ajax_fallback = product.type %}
                                {% endif %}
                                {% if products.size == 0 and product.vendor != blank and ecom_vendor_ajax_fallback == blank %}
                                    {% assign ecom_vendor_ajax_fallback = product.vendor %}
                                {% endif %}
                                ${f?`
                                {% if products.size < limit and ecom_more_pages and product.${k} != blank %}
                                    {% assign ecom_${k}_topup_fallback = product.${k} %}
                                {% endif %}
                                `:""}
                                {% endif %}
                                {% endif %}
                        `}else{if(((Z=this.data)==null?void 0:Z.template)==="collection")return`
                        ${t}

                        {%- if collection != blank -%}
                        {%- paginate collection.products by limit -%}
                            {% assign products = collection.products %}
                            {% assign is_collection = true %}

                    `;{let P=(E=(te=this.data.settings)==null?void 0:te.sort_by)!=null?E:"",f="";switch(P){case"title_asc":f=' | sort: "title" ';break;case"title_desc":f=' | sort: "title" | reverse ';break;case"price_asc":f=' | sort: "price"  ';break;case"price_desc":f=' | sort: "price" | reverse ';break;case"created_at_asc":f=' | sort: "created_at"  ';break;case"created_at_desc":f=' | sort: "created_at" | reverse ';break}if(((H=this.data.settings)==null?void 0:H.product_source)&&this.data.settings.product_source==="products"){const v=((G=(F=this.data.settings)==null?void 0:F.products)!=null?G:[]).map(w=>w.value).join(",");return`
                        ${t}
                        {%- capture handle_products -%}${v}{% endcapture%}
                        {% assign products = handle_products | strip | split: ',' %}
                        {% if products.size < 1 and EComBuilderMode %}
                            {% assign products = collections.all.products  | map: 'handle' | limit: 5 %}
                        {% endif %}
                    `}else if(((K=this.data.settings)==null?void 0:K.product_source)&&["type","vendor"].includes(this.data.settings.product_source)){let k="product_"+this.data.settings.product_source;const v=this.data.settings.product_source,w=v==="type"?"product_type":"vendor",A=v==="type"?"ecom_type":"ecom_vendor",z=(R=this.data.settings)!=null&&R.show_product_available?' | where: "available" ':"";return`
                            ${t}
                            {%- capture value -%}${(U=this.data.settings[k])==null?void 0:U.value}{% endcapture%}
                            {%- comment -%} Re-rendered under /search by the Section Rendering API (see javascript()): search.results has no 250-item cap, so it tops up a grid that the collections.all lookup left short of the limit. {%- endcomment -%}
                            {% if search.performed and search.terms contains '${w}:' and search.terms contains value %}
                                {%- paginate search.results by 250 -%}
                                    {% assign products = search.results | where: '${v}', value ${z} ${f} | limit: limit %}
                                {%- endpaginate -%}
                            {% else %}
                                {% assign ecom_more_pages = false %}
                                {%- assign c = collections.all  -%}
                                {%- paginate c.products by 250 -%}
                                    {% assign products =  collections.all.products | where: '${v}', value ${z} ${f} | limit: limit %}
                                    {% if paginate.pages > 1 %}{% assign ecom_more_pages = true %}{% endif %}
                                {%- endpaginate -%}
                                {%- comment -%} Short of the limit while more products exist past the 250-item window: ask javascript() for the /search re-render {%- endcomment -%}
                                {% if products.size < limit and ecom_more_pages %}
                                    {% assign ${A}_ajax_fallback = value %}
                                    {% assign ${A}_topup_fallback = value %}
                                {% endif %}
                            {% endif %}
                            {% if products.size < 1 and EComBuilderMode %}
                                {% assign products = collections.all.products | limit:12 %}
                            {% endif %}
                        `}else if(this.data.settings&&((J=this.data.settings)==null?void 0:J.collection))return`
                            ${t}
                            {%- capture handle_collection -%}${this.data.settings.collection.value}{% endcapture%}
                            {% assign collection = collections[handle_collection] %}
                            {%- if handle_collection  and collection.handle != blank  -%}
                                {% assign products = collection.products  ${(W=this.data.settings)!=null&&W.show_product_available?' | where: "available" ':""} ${f}%}
                            {% else %}
                                {% assign products = collections.all.products  ${(X=this.data.settings)!=null&&X.show_product_available?' | where: "available" ':""} ${f}%}
                                {% assign collection = collections.all%}
                            {%- endif -%}
                            {% assign is_collection = true %}
                        `;return`
                        ${t}
                        {% assign products = collections.last.products %}
                        {% assign collection = collections.last %}
                        {% assign is_collection = true %}
                    `}}},liquids(){var t,s,n,e,b,S,C,M,y,i,I,D,L,B,N,O,Z,te,E,H,F,G,K,R,U,J,W,X,P,f,k,v,w,A,z,Q,ee,se,ae,re,le,ce,pe,de,_e,ue,xe,$e,me,ke,qe,Se,he,ge,be,o,c,a,l,p,r,d,u,m,_,g,$,q,h,x,T,Y,V,fe,Ce,Me,ze,Le,Ae,Ee,Te,je,Be,He,Pe,Ie,De,Re,Fe,We,Ve,Ne,Oe,Ue,Je,Qe,Ye,Ze,Ge,Ke,Xe,et,tt,ot,it,nt,st,at,rt,lt,ct,pt,dt,_t,ut,mt,ht,gt,bt,ft,vt,wt,yt,xt,$t,kt,qt,St,Ct,Mt,zt,Lt,At,Et,Tt,jt,Bt,Ht,Pt,It,Dt,Rt,Ft,Wt,Vt,Nt,Ot,Ut,Jt,Qt,Yt,Zt,Gt,Kt,Xt,eo,to,oo,io,no,so,ao,ro,lo,co,po,_o,uo,mo,ho,go,bo,fo,vo,wo,yo,xo,$o,ko,qo,So,Co,Mo,zo,Lo,Ao,Eo,To,jo,Bo,Ho,Po,Io,Do,Ro,Fo,Wo;return{review_platform:{code:"{%- assign review_platform = shop.metafields.ecomposer.app_review.value -%}{{-review_platform-}}",preview:""},product_items:{code:`

                        {%- capture badge_tags -%}${this.lang(this.badge_tags,"badge_tags")}{%- endcapture -%}

                        {%- liquid
                            assign colors = shop.metafields.ecomposer.colors
                            assign badge_tags = badge_tags | strip | split: ','
                            assign tmp_collection = collection
                            assign tmp_product = product
                            assign enable_hook = shop.metafields.ecomposer.enable_hook.value
                        -%}
                        ${this.assignItems}
                        {% if  ${this.data.settings.show_product_by==="recommendations"} and  ${this.data.template} == product %}
                                {% if ${this.exporting} %}
                                {% assign products = blank %}
                                {% endif %}
                            {%- if recommendations.performed? and recommendations.products_count > 0 -%}
                                {% assign products = recommendations.products %}
                            {%- endif -%}
                        {% endif %}

                        {% capture quickshop_layout%}${this.quickshop_layout}{% endcapture %}
                        {% capture product_style%}${this.data.settings.style}{% endcapture%}
                        {%- assign view_more_only = ${this.data.settings.view_more_only}  -%}
                        {% capture product_layout %}${this.layout}{% endcapture %}
                        ${this.data.template==="product"||this.data.template==="cart"?this.data.settings.show_product_by==="recommendations"?"{% assign check_min = 0 %}":"{% assign check_min = 1%}":"{% assign check_min = 0%}"}
                        {% if products and products.size > check_min  and products != blank %}
                            <div class="${this.layout==="slider"?"ecom-swiper-wrapper":""}
                                ecom-collection__product--wrapper-items ecom-collection-product__layout-${this.layout}
                                ${this.data.template==="product"||this.data.template==="cart"?"{{ecom_related_type}}":""}"
                                data-grid-column="${this.data.settings.slider_items}"
                                data-grid-column-tablet="${this.data.settings.slider_items__tablet}"
                                data-grid-column-mobile="${this.data.settings.slider_items__mobile}"
                                ${this.data.settings.sold_out_icon?`data-icon-soldout='${this.data.settings.sold_out_icon}'`:""}
                                ${this.data.settings.add_cart_icon?`data-icon-add='${this.data.settings.add_cart_icon}'`:""}
                                ${this.canAjaxProductFallback?'data-ecom-vendor-fallback="{{ ecom_vendor_topup_fallback }}" data-ecom-type-fallback="{{ ecom_type_topup_fallback }}"':""}
                                ${this.exporting===!0&&((t=this.data.settings)==null?void 0:t.scroll_reveal_items)&&this.layout!=="slider"?`data-ec-sr-items="${this.data.settings.scroll_reveal_items_type||"fade-up"}" data-ec-sr-delay="${this.data.settings.scroll_reveal_items_delay||100}"`:""}
                            >
                            {% assign ecom_count = 0 %}

                            {% for p in products %}
                                ${["featured","shopify"].includes((s=this.data)==null?void 0:s.template)&&((n=this.data.settings)==null?void 0:n.product_source)==="products"&&!this.canUseCustomLiquidForCSR?`
                                    {% assign product = all_products[p] %}
                                    {% if product.handle == blank %}{%- continue -%}{% endif %}
                                    `:"{% assign product = p %}"}
                                {% if p.handle %}
                                    {% assign product = p %}
                                {% else %}
                                    {% assign product = all_products[p] %}
                                {% endif %}
                                {% if product.url == blank %} {% continue %} {% endif %}
                                {% if ecom_count >= limit %}{% break %}{% endif %}
                                ${this.data.template==="product"||this.data.template==="cart"?"{%- if product.handle == current_product.handle -%}{% continue %}{%-endif -%}":""}
                                ${!this.canUseCustomLiquidForCSR&&this.data.settings.product_source&&this.data.settings.product_source=="products"&&this.data.settings.show_product_available?`
                                    {% unless product.available %} {% continue %} {% endunless %}
                                `:""}
                                {% assign ecom_count = ecom_count | plus: 1 %}
                                {%- capture swatch_option  -%}${this.lang((e=this.data.settings)==null?void 0:e.option,"product_option_swatch")}{%- endcapture -%}
                                {% assign hide_quickshop = true %}
                                {% assign other_option_layout = '${this.option_layout}' %}

                                {% capture product_picker%}
                                    ${this.show_picker?`
                                        {%- if product.has_only_default_variant == false-%}

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
                                                <form class="ecom-collection__product-form ecom-product-form" product_id="{{product.id}}" data-product_id="{{product.id}}" data-product-id="{{product.id}}" data-handle="{{product.handle}}">
                                                    <div class="ecom-child-element" ${this.exporting?"":'data-child-name="variant" data-child-title="Variant picker"'}>
                                                    {% assign variant_selected = product.first_available_variant%}

                                                    ${["color","image","shopify_color"].includes(this.swatch_type)?`
                                                            {%- capture swatch_option_temp  -%}${this.lang((b=this.data.settings)==null?void 0:b.option,"product_option_swatch")}{%- endcapture -%}
                                                            {%- assign swatch_option_temp = swatch_option_temp | split: ',' -%}
                                                            {% assign swatch_option = "" %}
                                                            {% for item in swatch_option_temp %}
                                                            {% assign normalizedItem = item | strip %}
                                                            {% assign swatch_option = swatch_option | append: normalizedItem %}
                                                            {% unless forloop.last %}
                                                                {% assign swatch_option = swatch_option | append: ',' %}
                                                            {% endunless %}
                                                            {% endfor %}
                                                            {% assign swatch_option = swatch_option | split: ',' %}
                                                            {% assign option_index = current_option.position | minus: 1 %}
                                                            {%- for option in product.options_with_values -%}
                                                            {%- if swatch_option contains option.name -%}
                                                            {% assign variant_selected = product.selected_or_first_available_variant %}
                                                            {% assign current_option =  option %}
                                                            {% assign option_index = current_option.position | minus: 1 %}
                                                            <div class="ecom-collection__product-picker-main ecom-collection__product-picker-option-{{current_option.name | handleize }}">
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
                                                                                    <img src="{{ variant | img_url: "120x120", crop: 'center' }}" alt=" {{ option_value }}" ${(S=this.data.settings)!=null&&S.disable_lazyload?"":"loading='lazy'"}/>
                                                                                </li>
                                                                            {%- endfor -%}
                                                                        </ul>
                                                                    `:this.swatch_type==="color"?`
                                                                        <ul class="ecom-collection__product-picker-colors-list">
                                                                            {%- assign index = current_option.position | prepend:  'option' -%}
                                                                            {% assign value_key_selected = variant_selected[index] | downcase %}
                                                                            {%- for value in current_option.values -%}
                                                                                {%- if EComClientRender -%}
                                                                                    {%- assign target_value = value.name -%}
                                                                                {%- else -%}
                                                                                    {%- assign target_value = value -%}
                                                                                {%- endif -%}
                                                                                {% assign value_key = target_value | downcase | handleize | strip %}
                                                                                <li data-option-index="{{ option_index }}" class="ecom-collection__product-swatch-item ecom-collection__product-picker-colors-item {% if value_key == value_key_selected  %}ecom-product-swatch-item--active ecom-button-active{% endif %}" data-value="{{ value | escape }}">
                                                                                    <span class="ecom-collection__product-swatch-item--wrapper"></span>
                                                                                    <span class="ecom-collection__product-picker-colors-item--preview {% if colors and colors.value[value_key] == blank  %}ecom-collection__product-picker-colors--no-color{%- endif -%}"
                                                                                        {% if colors and colors.value[value_key] != blank  %}
                                                                                            style="{{colors.value[value_key]}}"
                                                                                        {% else %}
                                                                                             ${this.exporting?"":'data-ecom-tooltip="Please set the color in Custom Color Swatches extension"'}
                                                                                        {% endif %}
                                                                                    >
                                                                                    </span>
                                                                                </li>
                                                                            {%endfor%}
                                                                        </ul>
                                                                    `:`
                                                                        <ul class="ecom-collection__product-picker-colors-list">
                                                                            {%- assign index = current_option.position | prepend:  'option' -%}
                                                                            {% assign value_key_selected = variant_selected[index] | downcase %}
                                                                            {%- for value in current_option.values -%}
                                                                                {%- if EComClientRender -%}
                                                                                    {%- assign target_value = value.name -%}
                                                                                {%- else -%}
                                                                                    {%- assign target_value = value -%}
                                                                                {%- endif -%}
                                                                                {% assign value_key = target_value | downcase | strip %}
                                                                                {%- liquid
                                                                                    assign swatch_focal_point = null
                                                                                    if value.swatch.image
                                                                                    assign image_url = value.swatch.image | image_url: width: 50
                                                                                    assign swatch_value = 'url(' | append: image_url | append: ')'
                                                                                    assign swatch_focal_point = value.swatch.image.presentation.focal_point
                                                                                    elsif value.swatch.color
                                                                                    assign swatch_value = 'rgb(' | append: value.swatch.color.rgb | append: ')'
                                                                                    else
                                                                                    assign swatch_value = null
                                                                                    endif

                                                                                    assign option_disabled = true
                                                                                    if value.available
                                                                                    assign option_disabled = false
                                                                                    endif
                                                                                -%}
                                                                                <li data-option-index="{{ option_index }}" class="ecom-collection__product-swatch-item ecom-collection__product-picker-colors-item  {% if value_key == value_key_selected  %}ecom-product-swatch-item--active ecom-button-active{% endif %}" data-value="{{ value | escape }}">
                                                                                <span class="ecom-collection__product-swatch-item--wrapper"></span>
                                                                                    <span
                                                                                        {% if swatch_value %}
                                                                                            class="ec-swatch-shopify-color ecom-collection__product-picker-colors-item--preview"
                                                                                            style="--ec-swatch--background: {{ swatch_value }};{% if swatch_focal_point %} --ec-swatch-focal-point: {{ swatch_focal_point }};{% endif %}"
                                                                                        {% else %}
                                                                                            class="ec-swatch-shopify-color ec-swatch--unavailable ecom-collection_product__picker-shopify_color--no-color ecom-collection__product-picker-colors-item--preview"
                                                                                        {% endif %}
                                                                                    ></span>
                                                                                </li>
                                                                            {%- endfor -%}
                                                                        </ul>
                                                                    `}
                                                            </div>
                                                            {% endif %}
                                                            {% endfor %}
                                                            {%- if other_option_layout != 'hide' -%}
                                                            <div class="ecom-collection__product-quick-shop-wrapper {% if hide_quickshop %} ecom-collection__product-quick-shop--force-show{% endif %}">
                                                                {% assign variant_selected = product.selected_or_first_available_variant %}
                                                                {%- for option in product.options_with_values -%}
                                                                    {%- if swatch_option contains option.name -%}{% continue%}{%-endif-%}
                                                                    {%- assign index = option.position | prepend:  'option' -%}
                                                                    {% assign option_index = option.position | minus: 1 %}
                                                                        <div class="ecom-collection__product-picker-other ecom-collection__product-picker-option-{{option.name | handleize }}">
                                                                            ${this.show_option_name?`<span class="ecom-collection__product-picker-${this.option_layout}-label">{{option.name}}</span>`:""}

                                                                            ${this.option_layout==="radio"?`
                                                                                    <ul class="ecom-collection__product-picker-${this.option_layout}-list ecom-d-flex">
                                                                                        {% for value in option.values %}
                                                                                            {%- if EComClientRender -%}
                                                                                                {%- assign target_value = value.name -%}
                                                                                            {%- else -%}
                                                                                                {%- assign target_value = value -%}
                                                                                            {%- endif -%}
                                                                                            <li class="ecom-collection__product-swatch-item ecom-collection__product-picker-${this.option_layout}-list-item {% if target_value == variant_selected[index] %}ecom-product-swatch-item--active ecom-button-active{% endif %}" data-option-index="{{ option_index }}" data-value="{{ value | escape }}">
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
                                                            <div class="ecom-collection__product-quick-shop-wrapper {% if hide_quickshop %} ecom-collection__product-quick-shop--force-show{% endif %}">
                                                            {% assign variant_selected = product.selected_or_first_available_variant %}
                                                                {%- for option in product.options_with_values -%}
                                                                    {%- assign index = option.position | prepend:  'option' -%}
                                                                    {% assign option_index = option.position | minus: 1 %}
                                                                        <div class="ecom-collection__product-picker-option-{{option.name | handleize }}">
                                                                            ${this.show_option_name?`<span class="ecom-collection__product-picker-${this.swatch_type}-label">{{option.name}}</span>`:""}

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
                                                    `:""}
                                                    <div class="ecom-collection__product-quick-shop-wrapper {% if hide_quickshop %} ecom-collection__product-quick-shop--force-show{% endif %}">
                                                        <div class="ecom-collection__product-picker-selection" style="${this.swatch_type!=="dropdown"?"display:none;":""}">
                                                            <select name="variant_id" data-product-id="{{product.id}}"  id="ecom-variant-selector-{{product.id}}-${this.data.id}">
                                                                {% for variant in product.variants %}
                                                                    <option value="{{variant.id}}" {% if product.first_available_variant.id == variant.id%} selected {% endif %}>{{variant.title}}</option>
                                                                {% endfor %}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    </div>

                                                    {%- if product.requires_selling_plan == true and view_more_only != true -%}
                                                        ${((C=this.data.settings)==null?void 0:C.view_more_text)||((M=this.data.settings)==null?void 0:M.view_more_icon)?`
                                                        <div
                                                            class="ecom-button-default ecom-collection__product-form__actions ${(y=this.data.settings)!=null&&y.hide_atc_mobile?"ecom-collection__product-form__actions-hide-mobile":""}">
                                                            <a  class="ecom-collection__product-form__actions--view-more ecom-collection__product-view-more-${(I=(i=this.data.settings)==null?void 0:i.view_more_icon_position)!=null?I:"before"} ecom-child-element"
                                                                    ${this.exporting?"":'data-child-name="view_more_button" data-child-title="View more button"'}
                                                                    target="${(D=this.data.settings)!=null&&D.open_new_tab?"_blank":""}"
                                                                    href="${(L=this.data.settings)!=null&&L.link_with_collection?"{%- if is_collection-%}{%- if request.locale.root_url.size > 1 -%}{%- assign clean_product_url = product.url | remove_first: request.locale.root_url -%}{%- else -%}{%- assign clean_product_url = product.url -%}{%- endif -%}{%- assign collection_aware_url = clean_product_url | within: collection -%}{{- collection_aware_url -}}{% else %}{{- product.url -}}{%-endif-%}":"{{- product.url -}}"}"
                                                                    title="{{ product.title | escape }}">
                                                                    ${(B=this.data.settings)!=null&&B.view_more_icon?`
                                                                            <span class="ecom-collection__product-view-more-icon">${(N=this.data.settings)==null?void 0:N.view_more_icon}</span>`:""}
                                                                    <span class="ecom-collection__product-view-more-text">
                                                                        ${this.lang((O=this.data.settings)==null?void 0:O.view_more_text,"view_more_text")}
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        `:""}
                                                    {%- else -%}
                                                    <div class="ecom-collection__product-quick-shop-add-to-cart-wrapper {% if hide_quickshop or view_more_only %} ecom-collection__product-quick-shop--force-show{% endif %} ${(Z=this.data.settings)!=null&&Z.hide_atc_mobile?"ecom-collection__product-form__actions-hide-mobile":""}">
                                                        ${(((te=this.data.settings)==null?void 0:te.add_to_cart)||((E=this.data.settings)==null?void 0:E.add_cart_icon))&&!((H=this.data.settings)!=null&&H.view_more_only)?`<div class="ecom-collection__product-form__actions ${(F=this.data.settings)!=null&&F.quantity_inline?"ecom-collection__product-quantity--inline":""}">
                                                                ${(G=this.data.settings)!=null&&G.show_input_quantity?`
                                                                        ${this.data.settings.show_plus_minus_button?`<div class="ecom-collection__product-quantity--wrapper ecom-flex">
                                                                                <button
                                                                                    type="button"
                                                                                    class=" ecom-collection__quantity-controls-button ecom-collection__quantity-controls-minus"
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M432 256c0 8.8-7.2 16-16 16L32 272c-8.8 0-16-7.2-16-16s7.2-16 16-16l384 0c8.8 0 16 7.2 16 16z"/></svg>
                                                                                    </button>`:""}
                                                                            <input class="ecom-collection__product-quantity-input ecom-child-element" min="1" type="number"  ${this.exporting?"":'data-child-name="quantity" data-child-title="Quantity input"'}
                                                                            max="{%- if product.variants.first.inventory_management == null -%}
                                                                                9999
                                                                            {%- elsif product.variants.first.inventory_management and product.variants.first.inventory_quantity > 0 -%}
                                                                                {{product.variants.first.inventory_quantity}}
                                                                            {%- elsif product.variants.first.inventory_policy == 'continue' and product.variants.first.inventory_quantity <= 0 -%}
                                                                                9999
                                                                            {%- endif -%}
                                                                            "
                                                                            value="1"/>
                                                                            ${this.data.settings.show_plus_minus_button?`<button
                                                                                type="button"
                                                                                class=" ecom-collection__quantity-controls-button ecom-collection__quantity-controls-plus"
                                                                                >
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z"/></svg>
                                                                                </button>
                                                                            </div>`:""}
                                                                    `:""}
                                                                <button type="button" class="ecom-child-element ecom-collection__product-submit ecom-ajax-cart-submit ecom-collection__product-simple-add-to-cart
                                                                ecom-collection__product-add-cart-icon-${(K=this.data.settings)!=null&&K.add_cart_icon_position?this.data.settings.add_cart_icon_position:"before"}"
                                                                    data-text-add-cart="${this.lang(this.data.settings.add_to_cart,"add_to_cart")}"
                                                                    data-text-unavailable="${this.lang(this.data.settings.product_unavailable,"product_unavailable")}"
                                                                    data-text-sold-out="${this.lang(this.data.settings.sold_out_text||"outstock","product_soldout")}"
                                                                    data-action="${(U=(R=this.data.settings)==null?void 0:R.action)!=null?U:"popup"}"
                                                                    data-text-added-cart="${this.lang((J=this.data.settings)==null?void 0:J.added_cart_text,"added_cart_text")}"
                                                                    data-message-added-cart="${this.lang((W=this.data.settings)==null?void 0:W.added_cart_message,"added_cart_message")}"
                                                                    data-href="${(f=(P=(X=this.data.settings)==null?void 0:X.link)==null?void 0:P.href)!=null?f:"#"}"
                                                                    data-target="${(w=(v=(k=this.data.settings)==null?void 0:k.link)==null?void 0:v.target)!=null?w:"_blank"}"
                                                                    data-text-pre-order="${this.lang((A=this.data.settings)==null?void 0:A.pre_order,"pre_order")}"
                                                                    ${this.exporting?"":'data-child-name="add_to_cart_button" data-child-title="Add to cart button"'}
                                                                    >
                                                                    ${(z=this.data.settings)!=null&&z.add_cart_icon?`<span class="ecom-collection__product-add-cart-icon">${(Q=this.data.settings)==null?void 0:Q.add_cart_icon}</span>`:""}
                                                                    <span class="ecom-add-to-cart-text">
                                                                        ${this.lang((ee=this.data.settings)==null?void 0:ee.add_to_cart,"add_to_cart")}
                                                                    </span>
                                                                </button>
                                                            </div>
                                                            `:""}
                                                    </div>
                                                    {%- endif -%}
                                                </form> {% comment %} End form {% endcomment %}
                                                <script class="product-json" type="application/json">
                                                    {%- ${this.page_type==="block","render"} "ecom_product_json", product: product  -%}
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
                                    <div
                                        class="ecom-button-default ecom-collection__product-form__actions ${(se=this.data.settings)!=null&&se.quantity_inline?"ecom-collection__product-quantity--inline":""} ${(ae=this.data.settings)!=null&&ae.hide_atc_mobile?"ecom-collection__product-form__actions-hide-mobile":""}"
                                        ${this.exporting?"":'data-child-name="button" data-child-title="button"'}
                                        ${!((re=this.data.settings)!=null&&re.show_actions)&&!this.show_picker?'style="display:none;"':""}>
                                            {%- if enable_hook -%}
                                                {% capture the_ecom_hook %}
                                                    {% render 'ecom_product_loop_before_cart_button', product: product %}
                                                {% endcapture %}
                                                {% unless the_ecom_hook contains 'Liquid error' %}
                                                    {{ the_ecom_hook }}
                                                {% endunless %}
                                            {%- endif -%}
                                            {% if view_more_only %}
                                            ${((le=this.data.settings)==null?void 0:le.view_more_text)||((ce=this.data.settings)==null?void 0:ce.view_more_icon)?`
                                                    <a  class="ecom-collection__product-form__actions--view-more ecom-collection__product-view-more-${(de=(pe=this.data.settings)==null?void 0:pe.view_more_icon_position)!=null?de:"before"} ecom-child-element"
                                                            ${this.exporting?"":'data-child-name="view_more_button" data-child-title="View more button"'}
                                                            target="${(_e=this.data.settings)!=null&&_e.open_new_tab?"_blank":""}"
                                                            href="${(ue=this.data.settings)!=null&&ue.link_with_collection?"{%- if is_collection-%}{%- if request.locale.root_url.size > 1 -%}{%- assign clean_product_url = product.url | remove_first: request.locale.root_url -%}{%- else -%}{%- assign clean_product_url = product.url -%}{%- endif -%}{%- assign collection_aware_url = clean_product_url | within: collection -%}{{- collection_aware_url -}}{% else %}{{- product.url -}}{%-endif-%}":"{{- product.url -}}"}"
                                                            title="{{ product.title | escape }}">
                                                            ${(xe=this.data.settings)!=null&&xe.view_more_icon?`
                                                                    <span class="ecom-collection__product-view-more-icon">${($e=this.data.settings)==null?void 0:$e.view_more_icon}</span>`:""}
                                                            <span class="ecom-collection__product-view-more-text">
                                                                ${this.lang((me=this.data.settings)==null?void 0:me.view_more_text,"view_more_text")}
                                                            </span>
                                                        </a>

                                            `:""}
                                            {% elsif product.has_only_default_variant == true and product.available == false %}
                                            ${((ke=this.data.settings)==null?void 0:ke.sold_out_text)||((qe=this.data.settings)==null?void 0:qe.sold_out_icon)?`
                                                ${(Se=this.data.settings)!=null&&Se.show_input_quantity?`<div class="ecom-collection__product-quantity--wrapper ecom-flex">
                                                            ${this.data.settings.show_plus_minus_button?`
                                                                    <button
                                                                        type="button"
                                                                        class=" ecom-collection__quantity-controls-button ecom-collection__quantity-controls-minus"
                                                                        >
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M432 256c0 8.8-7.2 16-16 16L32 272c-8.8 0-16-7.2-16-16s7.2-16 16-16l384 0c8.8 0 16 7.2 16 16z"/></svg>
                                                                        </button>`:""}
                                                                    <input class="ecom-collection__product-quantity-input  ecom-child-element" min="1" type="number"  ${this.exporting?"":'data-child-name="quantity" data-child-title="Quantity input"'}
                                                                    max="{%- if product.variants.first.inventory_management == null -%}
                                                                        9999
                                                                    {%- elsif product.variants.first.inventory_management and product.variants.first.inventory_quantity > 0 -%}
                                                                        {{product.variants.first.inventory_quantity}}
                                                                    {%- elsif product.variants.first.inventory_policy == 'continue' and product.variants.first.inventory_quantity <= 0 -%}
                                                                        9999
                                                                    {%- endif -%}
                                                                    "
                                                                    value="1"/>
                                                                ${this.data.settings.show_plus_minus_button?`<button
                                                                    type="button"
                                                                    class=" ecom-collection__quantity-controls-button ecom-collection__quantity-controls-plus"
                                                                    >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z"/></svg>
                                                                    </button>
                                                                `:""}
                                                            </div>
                                                            `:""}
                                                    <div  class="ecom-collection__product-form__actions--soldout ecom-collection__product-sold-out-${(ge=(he=this.data.settings)==null?void 0:he.sold_out_icon_position)!=null?ge:"before"} ecom-child-element"
                                                            ${this.exporting?"":'data-child-name="sold_out_button" data-child-title="Sold out button"'}
                                                            title="{{ product.title | escape }}">
                                                            ${(be=this.data.settings)!=null&&be.sold_out_icon?`
                                                                    <span class="ecom-collection__product-sold-out-icon">${(o=this.data.settings)==null?void 0:o.sold_out_icon}</span>`:""}
                                                            <span class="ecom-collection__product-sold-out-text">
                                                                ${this.lang((c=this.data.settings)==null?void 0:c.sold_out_text,"sold_out_text")}
                                                            </span>
                                                        </div>

                                            `:""}

                                            {% elsif product.has_only_default_variant %}
                                                {%- if product.requires_selling_plan == true and view_more_only != true -%}
                                                    ${((a=this.data.settings)==null?void 0:a.view_more_text)||((l=this.data.settings)==null?void 0:l.view_more_icon)?`
                                                    <div
                                                        class="ecom-button-default ecom-collection__product-form__actions">
                                                        <a  class="ecom-collection__product-form__actions--view-more ecom-collection__product-view-more-${(r=(p=this.data.settings)==null?void 0:p.view_more_icon_position)!=null?r:"before"} ecom-child-element"
                                                                ${this.exporting?"":'data-child-name="view_more_button" data-child-title="View more button"'}
                                                                target="${(d=this.data.settings)!=null&&d.open_new_tab?"_blank":""}"
                                                                href="${(u=this.data.settings)!=null&&u.link_with_collection?"{%- if is_collection-%}{%- if request.locale.root_url.size > 1 -%}{%- assign clean_product_url = product.url | remove_first: request.locale.root_url -%}{%- else -%}{%- assign clean_product_url = product.url -%}{%- endif -%}{%- assign collection_aware_url = clean_product_url | within: collection -%}{{- collection_aware_url -}}{% else %}{{- product.url -}}{%-endif-%}":"{{- product.url -}}"}"
                                                                title="{{ product.title | escape }}">
                                                                ${(m=this.data.settings)!=null&&m.view_more_icon?`
                                                                        <span class="ecom-collection__product-view-more-icon">${(_=this.data.settings)==null?void 0:_.view_more_icon}</span>`:""}
                                                                <span class="ecom-collection__product-view-more-text">
                                                                    ${this.lang((g=this.data.settings)==null?void 0:g.view_more_text,"view_more_text")}
                                                                </span>
                                                            </a>
                                                        </div>
                                                        `:""}
                                                {%- else -%}
                                                ${(($=this.data.settings)==null?void 0:$.add_to_cart)||((q=this.data.settings)==null?void 0:q.add_cart_icon)?`
                                                    ${(h=this.data.settings)!=null&&h.show_input_quantity?`<div class="ecom-collection__product-quantity--wrapper ecom-flex">
                                                            ${this.data.settings.show_plus_minus_button?`
                                                                    <button
                                                                        type="button"
                                                                        class=" ecom-collection__quantity-controls-button ecom-collection__quantity-controls-minus"
                                                                        >
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M432 256c0 8.8-7.2 16-16 16L32 272c-8.8 0-16-7.2-16-16s7.2-16 16-16l384 0c8.8 0 16 7.2 16 16z"/></svg>
                                                                        </button>`:""}
                                                                    <input class="ecom-collection__product-quantity-input  ecom-child-element" min="1" type="number"  ${this.exporting?"":'data-child-name="quantity" data-child-title="Quantity input"'}
                                                                    max="{%- if product.variants.first.inventory_management == null -%}
                                                                        9999
                                                                    {%- elsif product.variants.first.inventory_management and product.variants.first.inventory_quantity > 0 -%}
                                                                        {{product.variants.first.inventory_quantity}}
                                                                    {%- elsif product.variants.first.inventory_policy == 'continue' and product.variants.first.inventory_quantity <= 0 -%}
                                                                        9999
                                                                    {%- endif -%}
                                                                    "
                                                                    value="1"/>
                                                                ${this.data.settings.show_plus_minus_button?`<button
                                                                    type="button"
                                                                    class=" ecom-collection__quantity-controls-button ecom-collection__quantity-controls-plus"
                                                                    >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z"/></svg>
                                                                    </button>
                                                                `:""}
                                                            </div>
                                                            `:""}
                                                    <a data-no-instant href="/cart/add?id={{ product.variants.first.id }}&quantity=1"
                                                    data-action="${(T=(x=this.data.settings)==null?void 0:x.action)!=null?T:"popup"}"
                                                    data-text-added-cart="${this.lang((Y=this.data.settings)==null?void 0:Y.added_cart_text,"added_cart_text")}"
                                                    data-message-added-cart="${this.lang((V=this.data.settings)==null?void 0:V.added_cart_message,"added_cart_message")}"
                                                    data-href="${(Me=(Ce=(fe=this.data.settings)==null?void 0:fe.link)==null?void 0:Ce.href)!=null?Me:"#"}"
                                                    data-target="${(Ae=(Le=(ze=this.data.settings)==null?void 0:ze.link)==null?void 0:Le.target)!=null?Ae:"_blank"}"
                                                    class="ecom-collection__product-submit ecom-collection__product-form__actions--add ecom-collection__product-simple-add-to-cart ecom-ajax-cart-simple ecom-collection__product-add-cart-icon-${(Te=(Ee=this.data.settings)==null?void 0:Ee.add_cart_icon_position)!=null?Te:"before"} ecom-child-element" ${this.exporting?"":'data-child-name="add_to_cart_button" data-child-title="Add to cart button"'}
                                                    data-id="{{ product.variants.first.id  }}"
                                                    data-handle="{{ product.handle }}" data-pid="{{ product.id }}" title="{{ product.title | escape }}">
                                                        ${(je=this.data.settings)!=null&&je.add_cart_icon?`<span class="ecom-collection__product-add-cart-icon">${(Be=this.data.settings)==null?void 0:Be.add_cart_icon}</span>`:""}
                                                        <span class="ecom-add-to-cart-text">
                                                        {%- if product.variants.first.inventory_management and product.variants.first.inventory_quantity <= 0 and product.variants.first.inventory_policy == 'continue' -%}
                                                            ${this.lang((He=this.data.settings)==null?void 0:He.pre_order,"pre_order")}
                                                        {%-else-%}
                                                            ${this.lang((Pe=this.data.settings)==null?void 0:Pe.add_to_cart,"add_to_cart")}
                                                        {%- endif -%}
                                                        </span>
                                                    </a>
                                                `:""}
                                                {%- endif -%}


                                            {% else  %}
                                                ${this.show_picker?`
                                                    ${((Ie=this.data.settings)==null?void 0:Ie.quick_shop_text)||((De=this.data.settings)==null?void 0:De.add_cart_icon)?`
                                                        <button class="ecom-collection__product-form__actions--quickshop ecom-collection__product-quickshop-icon-${(We=(Fe=(Re=this.data)==null?void 0:Re.settings)==null?void 0:Fe.quick_shop_icon_position)!=null?We:"before"}
                                                        {% if hide_quickshop %} ecom-collection__product-quick-shop--force-hide{% endif %} ecom-child-element" ${this.exporting?"":'data-child-name="quick_shop_button" data-child-title="Quick shop button"'} type="button">
                                                            ${(Ne=(Ve=this.data)==null?void 0:Ve.settings)!=null&&Ne.quick_shop_icon?`
                                                                <span class="ecom-collection__product-quickshop-icon">${(Ue=(Oe=this.data)==null?void 0:Oe.settings)==null?void 0:Ue.quick_shop_icon}</span>
                                                                `:""}
                                                            <span class="ecom-collection__product-form__actions--quickshop-text">
                                                                ${this.lang(this.data.settings.quick_shop_text,"quick_shop_text")}
                                                            </span>
                                                        </button>
                                                        `:""}
                                                    `:`
                                                     ${((Je=this.data.settings)==null?void 0:Je.view_more_text)||((Qe=this.data.settings)==null?void 0:Qe.view_more_icon)?`
                                                        <a href="${(Ye=this.data.settings)!=null&&Ye.link_with_collection?"{%- if is_collection-%}{%- if request.locale.root_url.size > 1 -%}{%- assign clean_product_url = product.url | remove_first: request.locale.root_url -%}{%- else -%}{%- assign clean_product_url = product.url -%}{%- endif -%}{%- assign collection_aware_url = clean_product_url | within: collection -%}{{- collection_aware_url -}}{% else %}{{- product.url -}}{%-endif-%}":"{{- product.url -}}"}" class="ecom-collection__product-form__actions--view-more ecom-collection__product-view-more-${(Ge=(Ze=this.data.settings)==null?void 0:Ze.view_more_icon_position)!=null?Ge:"before"}
                                                            ecom-child-element" title="{{ product.title | escape }}" target="${(Ke=this.data.settings)!=null&&Ke.open_new_tab?"_blank":""}" ${this.exporting?"":'data-child-name="button" data-child-title="View more button"'}>
                                                            ${(Xe=this.data.settings)!=null&&Xe.view_more_icon?`
                                                                <span class="ecom-collection__product-view-more-icon">${(et=this.data.settings)==null?void 0:et.view_more_icon}</span>
                                                                `:""}
                                                            <span class="ecom-collection__product-view-more-text">
                                                                ${this.lang((tt=this.data.settings)==null?void 0:tt.view_more_text,"view_more_text")}
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
                                <div class="ecom-collection__product-item ${this.layout==="slider"?"ecom-swiper-slide":""}" data-product-handle="{{product.handle}}" data-style="{{product_style}}"{% unless product.has_only_default_variant %} ec-variant-init{% endunless %}${this.exporting===!0&&((ot=this.data.settings)==null?void 0:ot.scroll_reveal_items)&&this.layout!=="slider"?" data-ec-sr-item":""}>
                                    <div
                                        class="ecom-collection__product-item--wrapper {% if product_style == 'horizontal'%} ecom-d-flex {% else %} ecom-flex-column {% endif %}">
                                        <div class="ecom-collection__product-media-wrapper ${this.data.settings.hover_show_image_mobile?"ecom-enable-hover--mobile":""} {% if product_style == 'horizontal'%} ecom-d-flex{% endif %} "
                                    >
                                            {%- if enable_hook -%}
                                                {% capture the_ecom_hook %}
                                                    {% render 'ecom_product_loop_before', product: product %}
                                                {% endcapture %}
                                                {% unless the_ecom_hook contains 'Liquid error' %}
                                                    {{ the_ecom_hook }}
                                                {% endunless %}
                                            {%- endif -%}
                                            <a  href="${(it=this.data.settings)!=null&&it.link_with_collection?"{%- if is_collection-%}{%- if request.locale.root_url.size > 1 -%}{%- assign clean_product_url = product.url | remove_first: request.locale.root_url -%}{%- else -%}{%- assign clean_product_url = product.url -%}{%- endif -%}{%- assign collection_aware_url = clean_product_url | within: collection -%}{{- collection_aware_url -}}{% else %}{{- product.url -}}{%-endif-%}":"{{- product.url -}}"}" target="${(nt=this.data.settings)!=null&&nt.open_new_tab?"_blank":""}" title="{{product.title | escape }}" class="ecom-collection__product-item--inner ecom-image-default">
                                            {%- if product.featured_media -%}
                                                {%- liquid
                                                    assign featured_media_aspect_ratio = product.featured_media.aspect_ratio
                                                    if product.featured_media.aspect_ratio == nil
                                                        assign featured_media_aspect_ratio = 1
                                                    endif
                                                    assign ecom_media_widths = '200,260,320,400,480,560,720,940,1066,1280,1500,1800' | split: ','
                                                -%}
                                                    <div class="ecom-collection__product-media--container">
                                                        <div
                                                            class="ecom-child-element ecom-collection__product-media ecom-collection__product-media--${this.data.settings.image_ratio}
                                                        ${this.data.settings.show_secondary_image?"{% if product.media[1] != nil %}ecom-collection__product-media--hover-effect{% endif %}":""}"
                                                        ${this.data.settings.image_ratio==="adapt"?' style="padding-bottom: {{ 1 | divided_by: featured_media_aspect_ratio | times: 100 }}%;"':""}
                                                        ${this.exporting?"":'data-child-name="image" data-child-title="image"'}
                                                        >
                                                            <img srcset="{%- for ecom_w in ecom_media_widths -%}{%- assign ecom_wi = ecom_w | times: 1 -%}{%- if product.featured_media.width > ecom_wi -%}{{ product.featured_media | image_url: width: ecom_wi }} {{ ecom_wi }}w,{%- endif -%}{%- endfor -%}{{ product.featured_media | image_url }} {{ product.featured_media.width }}w"
                                                                src="{{ product.featured_media | image_url: width: 533 }}"
                                                                sizes="${this.mediaSizes}"
                                                                alt="{{ product.featured_media.alt | escape }}"
                                                            ${(st=this.data.settings)!=null&&st.disable_lazyload?"":"loading='lazy'"}
                                                                class="ecom-collection__product-media-image"
                                                                width="{{ product.featured_media.width }}"
                                                                height="{{ product.featured_media.height }}"
                                                            />
                                                            ${this.data.settings.show_secondary_image?`
                                                                {%- if product.media[1] != nil -%}
                                                                    <img data-srcset="{%- for ecom_w in ecom_media_widths -%}{%- assign ecom_wi = ecom_w | times: 1 -%}{%- if product.media[1].width > ecom_wi -%}{{ product.media[1] | image_url: width: ecom_wi }} {{ ecom_wi }}w,{%- endif -%}{%- endfor -%}{{ product.media[1] | image_url }} {{ product.media[1].width }}w"
                                                                    data-src="{{ product.media[1] | image_url: width: 533 }}"
                                                                    sizes="${this.mediaSizes}"
                                                                    alt="{{ product.media[1].alt | escape }}"
                                                                ${(at=this.data.settings)!=null&&at.disable_lazyload?"":"loading='lazy'"}
                                                                    class="ecom-collection__product-secondary-media"
                                                                    width="{{ product.media[1].width }}"
                                                                    height="{{ product.media[1].height }}"
                                                                    />
                                                                {%- endif -%}
                                                                `:""}
                                                            </div>
                                                        </div>
                                                {% else %}
                                                ${((rt=this.data.settings)==null?void 0:rt.placeholder_image)==!0?`<div class="ecom-collection__product-media--container">
                                                    <div class="ecom-child-element ecom-collection__product-media ecom-collection__product-media--${this.data.settings.image_ratio}"
                                                    ${this.exporting?"":'data-child-name="image" data-child-title="image"'}
                                                    ${this.data.settings.image_ratio==="adapt"?'style="padding-bottom: 85%;"':""}

                                                    >
                                                        <img src="${((ct=(lt=this.data.settings)==null?void 0:lt.placeholder_image_custom)==null?void 0:ct.value)=="/images/placeholder.png"?"https://"+this.getDomain()+((dt=(pt=this.data.settings)==null?void 0:pt.placeholder_image_custom)==null?void 0:dt.value):(ut=(_t=this.data.settings)==null?void 0:_t.placeholder_image_custom)==null?void 0:ut.value}"
                                                        ${(mt=this.data.settings)!=null&&mt.disable_lazyload?"":"loading='lazy'"}
                                                            class="ecom-collection__product-media-image"
                                                        >
                                                    </div>

                                                </div>`:`<div class="ecom-collection__product-media--container">
                                                <div class="ecom-child-element ecom-collection__product-media ecom-collection__product-media--${this.data.settings.image_ratio}"
                                                ${this.exporting?"":'data-child-name="image" data-child-title="image"'}
                                                ${this.data.settings.image_ratio==="adapt"?'style="padding-bottom: 85%;"':""}
                                                >
                                                    {{ '${(ht=this.data.settings)==null?void 0:ht.placeholder_image_shopify}' | placeholder_svg_tag: 'ecom-colection__product-svg-placeholder' }}
                                                </div>

                                                </div>`}

                                                {% endif %}

                                            ${this.data.settings.show_badges||((gt=this.data.settings)==null?void 0:gt.show_sale_badge)?`
                                                    <div class="ecom-collection__product-badge">
                                                `:""}
                                             ${this.data.settings.show_badges?`
                                                        <span class="ecom-collection__product-badge--sold-out" aria-hidden="true" style="{%- if product.available == true -%}display: none; {%- endif -%}">
                                                            ${this.lang(this.data.settings.sold_text,"sold_text")}
                                                        </span>
                                                        <span class="ecom-collection__product-badge--sale" aria-hidden="true" style="{%- unless product.compare_at_price > product.price and product.available -%}display: none;{%- endunless -%}">
                                                            ${this.lang(this.data.settings.sale_text,"sale_text")}
                                                        </span>
                                                    ${this.data.settings.metafield_tag?`
                                                            {%- assign metafield_tag_value = ${this.data.settings.metafield_tag} -%}

                                                            {% if metafield_tag_value%}
                                                                {% if metafield_tag_value contains "," %}
                                                                    {% assign metafield_tags = metafield_tag_value | strip | split: ',' %}
                                                                    {% for badge in metafield_tags %}
                                                                        <span class="ecom-collection__product-badge--custom ecom-collection__product-badge--{{ badge | handleize}}" aria-hidden="true">
                                                                            {{ badge }}
                                                                        </span>
                                                                    {% endfor %}
                                                                {% else %}
                                                                    <span class="ecom-collection__product-badge--custom ecom-collection__product-badge--{{ metafield_tag_value | handleize}}" aria-hidden="true">
                                                                        {{ metafield_tag_value }}
                                                                    </span>
                                                                {% endif %}
                                                            {% endif %}

                                                        `:""}
                                                    {% if badge_tags %}
                                                        {% for badge in badge_tags %}
                                                            {% for original_tag in product.tags %}
                                                                {% assign tag = original_tag | replace: '\xA0', ' ' %}
                                                                {% if tag == badge %}
                                                                    <span class="ecom-collection__product-badge--custom ecom-collection__product-badge--{{ badge | handleize}}" aria-hidden="true">
                                                                         {{ badge }}
                                                                    </span>
                                                                {% endif %}
                                                            {% endfor %}
                                                            {%- assign bad = badge | strip -%}
                                                        {% endfor %}
                                                    {% endif %}`:""}
                                            ${(bt=this.data.settings)!=null&&bt.show_sale_badge?`
                                                    {%- if product.has_only_default_variant -%}
                                                        {%- if product.compare_at_price != null and product.compare_at_price > product.price -%}
                                                            ${((ft=this.data.settings)==null?void 0:ft.sale_badge_type)=="amount"?"{%- assign sale = product.compare_at_price | minus: product.price | money -%}":"{%- assign sale = product.compare_at_price | minus: product.price | times: 100.0 | divided_by: product.compare_at_price | round -%}"}
                                                            <span class="ecom-collection__product-price--bage-sale">
                                                                ${this.lang((vt=this.data.settings)==null?void 0:vt.bage_sale,"sale_badge",{sale:"sale"})}
                                                            </span>
                                                        {%- endif -%}
                                                    {%- else -%}
                                                        {%- if product.selected_or_first_available_variant.compare_at_price != null and product.selected_or_first_available_variant.compare_at_price > product.selected_or_first_available_variant.price -%}
                                                            ${((wt=this.data.settings)==null?void 0:wt.sale_badge_type)=="amount"?"{%- assign sale = product.selected_or_first_available_variant.compare_at_price | minus: product.selected_or_first_available_variant.price | money -%}":"{%- assign sale = product.selected_or_first_available_variant.compare_at_price | minus: product.selected_or_first_available_variant.price | times: 100.0 | divided_by: product.selected_or_first_available_variant.compare_at_price | round -%}"}
                                                        {%else%}
                                                            {%- assign sale = null %}
                                                        {%- endif -%}

                                                            <span class="ecom-collection__product-price--bage-sale" style="{% unless sale %}display:none{% endunless %}">
                                                                ${this.lang((yt=this.data.settings)==null?void 0:yt.bage_sale,"sale_badge",{sale:"sale"})}
                                                            </span>

                                                    {%- endif -%}
                                                    {%- assign sale = null -%}
                                                    `:""}
                                             ${this.data.settings.show_badges||((xt=this.data.settings)==null?void 0:xt.show_sale_badge)?"</div>":""}
                                            </a>
                                            ${this.show_product_wishlist?this.wishlist_snippet:""}

                                                <div class="ecom-collection__product-group-button-action ${(($t=this.data.settings)==null?void 0:$t.show_wishlist)&&((kt=this.data.settings)==null?void 0:kt.show_compare)&&((qt=this.data.settings)==null?void 0:qt.group_btn_ver_pos)==((St=this.data.settings)==null?void 0:St.group_btn_ver_pos1)&&((Ct=this.data.settings)==null?void 0:Ct.group_btn_hor_pos)==((Mt=this.data.settings)==null?void 0:Mt.group_btn_hor_pos1)?"ecom-collection__product-group-button-action-wrapper":""}" style="justify-content: ${(Lt=(zt=this.data.settings)==null?void 0:zt.group_btn_ver_pos)!=null?Lt:"start"}">
                                                ${((At=this.data.settings)==null?void 0:At.show_wishlist)==!0?`
                                                        <div class="ecom-collection__action ecom-product__wishlist ecom-collection__action-hor-${(Tt=(Et=this.data.settings)==null?void 0:Et.group_btn_hor_pos1)!=null?Tt:"start"} ecom-collection__action-ver-${(Bt=(jt=this.data.settings)==null?void 0:jt.group_btn_ver_pos1)!=null?Bt:"start"} ${(Ht=this.data.settings)!=null&&Ht.hide_wishlist_mobile?"ecom-collection__product-form__actions-hide-mobile":""}">
                                                            <a href="#" class="ecom-product__wishlist-link ecom-product__wishlist-visibility-${(Pt=this.data.settings)!=null&&Pt.wishlist_visibility?this.data.settings.wishlist_visibility:""}" data-product-handle="{{product.handle}}" data-product-id="{{product.id}}">
                                                                ${this.data.settings.wishlist_label?`<span class="ecom-product__wishlist-normal ecom-product__wishlist-label-normal">${this.data.settings.wishlist_label}</span>`:""}
                                                                ${this.data.settings.wishlist_label_added?`<span class="ecom-product__wishlist-added ecom-product__wishlist-label-added">${this.data.settings.wishlist_label_added}</span>`:""}
                                                                <span class="ecom-product__wishlist-icon">
                                                                    <span class="ecom-product__wishlist-normal ecom-product__wishlist-icon-normal">${(Dt=(It=this.data.settings)==null?void 0:It.wishlist_icon)!=null&&Dt.value?this.data.settings.wishlist_icon.value:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>'}</span>
                                                                    <span class="ecom-product__wishlist-added ecom-product__wishlist-icon-added">${(Ft=(Rt=this.data.settings)==null?void 0:Rt.wishlist_icon_added)!=null&&Ft.value?(Wt=this.data.settings.wishlist_icon_added)==null?void 0:Wt.value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M22.5,5c-2.892,0-5.327,1.804-6.5,2.854C14.827,6.804,12.392,5,9.5,5C5.364,5,2,8.364,2,12.5c0,2.59,2.365,4.947,2.46,5.041 L16,29.081l11.534-11.534C27.635,17.447,30,15.09,30,12.5C30,8.364,26.636,5,22.5,5z"></path></svg>'}</span>
                                                                </span>
                                                                <span class="ecom-product__wishlist-tooltip ecom-product__wishlist-normal">${(Vt=this.data.settings)!=null&&Vt.content_tooltip_wishlist?this.data.settings.content_tooltip_wishlist:""}</span>
                                                                <span class="ecom-product__wishlist-tooltip ecom-product__wishlist-added">${(Nt=this.data.settings)!=null&&Nt.content_tooltip_wishlist_added?this.data.settings.content_tooltip_wishlist_added:""}</span>
                                                            </a>
                                                        </div>
                                                    `:""}

                                                ${((Ot=this.data.settings)==null?void 0:Ot.show_compare)===!0?`
                                                        <div class="ecom-collection__action ecom-product__compare ecom-collection__action-hor-${(Jt=(Ut=this.data.settings)==null?void 0:Ut.group_btn_hor_pos)!=null?Jt:"start"} ecom-collection__action-ver-${(Yt=(Qt=this.data.settings)==null?void 0:Qt.group_btn_ver_pos)!=null?Yt:"start"} ${(Zt=this.data.settings)!=null&&Zt.hide_compare_mobile?"ecom-collection__product-form__actions-hide-mobile":""}">
                                                            <div class="ecom-product__compare-link ecom-product__wishlist-visibility-${(Gt=this.data.settings)!=null&&Gt.compare_visibility?this.data.settings.compare_visibility:""}" data-product-handle="{{product.handle}}">
                                                                ${(Kt=this.data.settings)!=null&&Kt.compare_label?`<span class="ecom-product__compare-normal ecom-product__compare-label-normal">${this.data.settings.compare_label}</span>`:""}
                                                                ${(Xt=this.data.settings)!=null&&Xt.compare_label_added?`<span class="ecom-product__compare-added ecom-product__compare-label-added">${this.data.settings.compare_label_added}</span>`:""}
                                                                <span class="ecom-product__compare-icon">
                                                                    <span class="ecom-product__compare-normal ecom-product__compare-icon-normal">${(to=(eo=this.data.settings)==null?void 0:eo.compare_icon)!=null&&to.value?this.data.settings.compare_icon.value:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>'}</span>
                                                                    <span class="ecom-product__compare-added ecom-product__compare-icon-added">${(io=(oo=this.data.settings)==null?void 0:oo.compare_icon_added)!=null&&io.value?(no=this.data.settings.compare_icon_added)==null?void 0:no.value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 16 3 C 8.800781 3 3 8.800781 3 16 C 3 23.199219 8.800781 29 16 29 C 23.199219 29 29 23.199219 29 16 C 29 14.601563 28.8125 13.207031 28.3125 11.90625 L 26.6875 13.5 C 26.886719 14.300781 27 15.101563 27 16 C 27 22.101563 22.101563 27 16 27 C 9.898438 27 5 22.101563 5 16 C 5 9.898438 9.898438 5 16 5 C 19 5 21.695313 6.195313 23.59375 8.09375 L 25 6.6875 C 22.699219 4.386719 19.5 3 16 3 Z M 27.28125 7.28125 L 16 18.5625 L 11.71875 14.28125 L 10.28125 15.71875 L 15.28125 20.71875 L 16 21.40625 L 16.71875 20.71875 L 28.71875 8.71875 Z"></path></svg>'}</span>
                                                                </span>
                                                                <span class="ecom-product__compare-tooltip ecom-product__compare-normal">${(so=this.data.settings)!=null&&so.content_tooltip_compare?this.data.settings.content_tooltip_compare:""}</span>
                                                                <span class="ecom-product__compare-tooltip ecom-product__compare-added">${(ao=this.data.settings)!=null&&ao.content_tooltip_compare_added?this.data.settings.content_tooltip_compare_added:""}</span>
                                                            </div>
                                                        </div>
                                                    `:""}
                                                </div>
                                        </div>
                                        <div class="ecom-collection__product-item--information">
                                            <div class="ecom-collection__product-item--information-wrapper ecom-flex ecom-column">
                                                {% if product_style == 'absolute' %}
                                                    {{product_actions}}
                                                    {{ product_picker}}
                                                {% endif %}

                                                ${this.data.settings.show_vendor?`
                                                    {% if product.vendor and product.vendor != blank %}
                                                    <div class="ecom-child-element ecom-collection__product-item-vendor-element" ${this.exporting?"":'data-child-name="vendor" data-child-title="Product vendor"'}>
                                                        <span class="ecom-visually-hidden">${this.lang(this.data.settings.vendor_title,"vendor")}</span>
                                                        <div class="ecom-collection__product-item-vendor">{{  product.vendor | link_to_vendor}}</div>
                                                    </div>
                                                    {% endif %}
                                                `:""}
                                                ${this.data.settings.show_sku?`
                                                    {% assign current_variant = product.selected_or_first_available_variant %}
                                                    {% if current_variant.sku and current_variant.sku != blank %}
                                                    <div class="ecom-child-element ecom-collection__product-item-sku-element ecom-flex" ${this.exporting?"":'data-child-name="meta" data-child-title="Product sku"'}>
                                                        <span class="ecom-collection__product-item-sku-title">${this.lang(this.data.settings.sku_title,"sku")}</span>
                                                        <div class="ecom-collection__product-item-sku">{{  current_variant.sku }}</div>
                                                    </div>
                                                    {% endif %}
                                                `:""}
                                                ${this.data.settings.show_type?`
                                                    {% if product.type and product.type != blank%}
                                                        <div class="ecom-child-element ecom-collection__product-item-type-element" ${this.exporting?"":'data-child-name="show_type" data-child-title="Product type"'}>
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
                                                <${(lo=(ro=this.data.settings)==null?void 0:ro.title_tag)!=null?lo:"h3"}
                                                    class="ecom-collection__product-title-tag ${this.show_product_rating?"{% if review_platform and review_platform == 'vital-reviews' %}card__heading{% endif %}":""}  ecom-child-element"
                                                    ${this.exporting?"":`data-child-name="title"
                                                    data-child-title="Title"`}
                                                >
                                                    <a
                                                        href="${(co=this.data.settings)!=null&&co.link_with_collection?"{%- if is_collection-%}{%- if request.locale.root_url.size > 1 -%}{%- assign clean_product_url = product.url | remove_first: request.locale.root_url -%}{%- else -%}{%- assign clean_product_url = product.url -%}{%- endif -%}{%- assign collection_aware_url = clean_product_url | within: collection -%}{{- collection_aware_url -}}{% else %}{{- product.url -}}{%-endif-%}":"{{- product.url -}}"}"
                                                        title="{{product.title | escape }}"
                                                        target="${(po=this.data.settings)!=null&&po.open_new_tab?"_blank":""}"
                                                        class="ecom-collection__product-item-information-title ${(_o=this.data.settings)!=null&&_o.title_one_row?"ecom-title-one-row":""}"
                                                    >
                                                        {{ product.title | strip_html}}
                                                    </a>
                                                </${(mo=(uo=this.data.settings)==null?void 0:uo.title_tag)!=null?mo:"h3"}>
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
                                                    <div class="ecom-collection__product-description ecom-child-element" ${this.exporting?"":'data-child-name="description" data-child-title="Description"'}>
                                                        {{ product.description | strip_html | replace: '\xA0', ' ' | truncatewords: ${this.short_limit} }}
                                                    </div>
                                                `:""}

                                                {% assign showPriceWhenNotLogin = true %}
                                                {% if ${((ho=this.data.settings)==null?void 0:ho.hide_price_if_not_logged_in)&&this.exporting} and customer == blank%}
                                                    {% assign showPriceWhenNotLogin = false %}
                                                {% endif %}
                                                {% if showPriceWhenNotLogin == false and ${((go=this.data.settings)==null?void 0:go.show_login_to_see_price_text)&&((bo=this.data.settings)==null?void 0:bo.login_to_see_price_text.length)} %}
                                                    {% assign showOnLive = true %}
                                                {% else %}
                                                    {% assign showOnLive = false %}
                                                {% endif %}
                                                    {% assign showPreview = ${!this.exporting&&((fo=this.data.settings)==null?void 0:fo.hide_price_if_not_logged_in)&&((vo=this.data.settings)==null?void 0:vo.show_login_to_see_price_text)} %}
                                                {% if  showOnLive or showPreview %}
                                                    <div class="ecom-collection__product-login-to-see">
                                                    ${((wo=this.data.settings)==null?void 0:wo.login_redirect_to)&&((yo=this.data.settings)==null?void 0:yo.login_redirect_to.href)?`<a href="${(xo=this.data.settings)==null?void 0:xo.login_redirect_to.href}" ${($o=this.data.settings)!=null&&$o.login_redirect_to.target?`target="${(ko=this.data.settings)==null?void 0:ko.login_redirect_to.target}"`:'target="_self"'}>${(qo=this.data.settings)==null?void 0:qo.login_to_see_price_text}</a>`:`${(So=this.data.settings)==null?void 0:So.login_to_see_price_text}`}
                                                    </div>
                                                {% endif %}
                                                {% if ${((Co=this.data.settings)==null?void 0:Co.show_price)=="block"} and showPriceWhenNotLogin %}
                                                <div class="ecom-collection__product-prices ecom-child-element" ${this.exporting?"":'data-child-name="price" data-child-title="Price"'}>
                                                {% capture ground_price %}
                                                    ${this.data.settings.show_ground_price?`
                                                        {% assign selected_available_variant = product.selected_or_first_available_variant%}
                                                        <small class="ecom-unit-price" {% if selected_available_variant.unit_price_measurement == nil %}style="display: none;" {% endif %}">
                                                            <span class="price-item price-item--last">
                                                                <span class="ecom-ground-price_unit-price">{{- selected_available_variant.unit_price | money -}}</span>
                                                                <span aria-hidden="true">/</span>
                                                                <span class="ecom-ground-price_unit-price-measurement">
                                                                {%- if selected_available_variant.unit_price_measurement.reference_value != 1 -%}
                                                                    {{- selected_available_variant.unit_price_measurement.reference_value -}}
                                                                {%- endif -%}
                                                                {{ selected_available_variant.unit_price_measurement.reference_unit }}
                                                                </span>
                                                            </span>
                                                        </small>`:""}
                                                {% endcapture %}
                                                {%- assign target = ${this.data.settings.price_type==="first_variant"?"product.variants[0]":"product.selected_or_first_available_variant"} -%}
                                                ${this.show_picker?`
                                                     {%- assign target = product.selected_or_first_available_variant -%}
                                                        <div class="ecom-collection__product-price-wrapper">
                                                            <span
                                                                    class="ecom-collection__product-price--regular ecom-collection__product--compare-at-price"
                                                                    {%- if product.compare_at_price == nil or product.compare_at_price <=  product.price -%}  style="display:none" {% endif %}
                                                            >
                                                            {% if settings.currency_code_enabled == true %} {{ target.compare_at_price | money_with_currency }} {% else %} {{ target.compare_at_price | money }} {% endif %}
                                                            </span>
                                                            <span class="ecom-collection__product-price{% if target.compare_at_price > target.price %} ecom-collection__product-price--sale{% endif %}"
                                                            {% if ${this.show_bss_b2b_wholesale} %} bss-b2b-product-price bss-b2b-variant-price {% endif %}
                                                            {% if ${this.show_bss_b2b_wholesale} %}
                                                                bss-b2b-product-id="{{ product.id }}"
                                                                bss-b2b-variant-id="{{ product.selected_or_first_available_variant.id }}"
                                                            {% endif %}
                                                            >{% if settings.currency_code_enabled == true %} {{target.price | money_with_currency }} {% else %} {{target.price | money }} {% endif %}</span>

                                                        </div>
                                                        {{ ground_price }}
                                                `:`
                                                {% if product.has_only_default_variant %}
                                                    <div class="ecom-collection__product-price-wrapper">

                                                        <span class="ecom-collection__product-price--regular ecom-collection__product--compare-at-price"{%- if product.compare_at_price == nil or product.compare_at_price <=  product.price -%} style="display:none; content:'1'" {%- endif -%}>{% if settings.currency_code_enabled == true %} {{ product.compare_at_price_max | money_with_currency }} {% else %} {{ product.compare_at_price_max | money }} {% endif %}</span>
                                                        <span class="ecom-collection__product-price{% if product.compare_at_price > product.price %} ecom-collection__product-price--sale{% endif %}">{% if settings.currency_code_enabled == true %} {{product.price_min | money_with_currency }} {% else %} {{product.price_min | money }} {% endif %}</span>
                                                        {%- comment -%}
                                                            <span class="ecom-collection__product-price--bage-sale">
                                                            {% assign sale = product.compare_at_price_max | minus: product.price | times: 100 | divided_by: product.compare_at_price_max  | times: 100 | money  %}
                                                            ${this.lang((Mo=this.data.settings)==null?void 0:Mo.bage_sale,"sale_badge",{sale:"sale"})}
                                                            </span>
                                                        {%- endcomment -%}
                                                    </div>
                                                     {{ ground_price }}
                                                {% else %}
                                                    {% if ${((zo=this.data.settings)==null?void 0:zo.price_type)=="min_price"} %}
                                                        <div class="ecom-collection__product-price-wrapper">
                                                            ${(Lo=this.data.settings)!=null&&Lo.price_from_text?`<span class="ecom-collection__product-price--from">
                                                                    ${this.lang((Ao=this.data.settings)==null?void 0:Ao.price_from_text,"price_from")}
                                                                </span>`:""}
                                                                <span
                                                                    class="ecom-collection__product-price--regular ecom-collection__product--compare-at-price"
                                                                    {%- if product.compare_at_price == nil or product.compare_at_price <=  product.price -%}  style="display:none" {% endif %}
                                                                >
                                                                    {% if settings.currency_code_enabled == true %} {{ product.compare_at_price_min | money_with_currency }} {% else %} {{ product.compare_at_price_min | money }} {% endif %}
                                                                </span>
                                                                <span class="ecom-collection__product-price{% if product.compare_at_price_min > product.price_min %} ecom-collection__product-price--sale{% endif %}">
                                                                    {% if settings.currency_code_enabled == true %} {{product.price_min | money_with_currency }} {% else %} {{product.price_min | money }} {% endif %}
                                                                </span>

                                                        </div>
                                                         {{ ground_price }}
                                                {%elsif ${((Eo=this.data.settings)==null?void 0:Eo.price_type)=="min_to_max"} %}
                                                        <div class="ecom-collection__product-price-wrapper">
                                                        {% if product.price_max > product.price_min %}
                                                            <span class="ecom-collection__product-price ecom-collection__product-price-range">
                                                                    {% if settings.currency_code_enabled == true %} {{product.price_min | money_with_currency }} - {{product.price_max | money_with_currency}} {% else %} {{product.price_min | money }} - {{product.price_max | money }}{% endif %}
                                                            </span>
                                                        {% else %}
                                                            <span class="ecom-collection__product-price">
                                                            {% if settings.currency_code_enabled == true %} {{product.price_min | money_with_currency }} {% else %} {{product.price_min | money }} {% endif %}
                                                            </span>
                                                        {%endif %}
                                                        </div>
                                                         {{ ground_price }}
                                                {%else%}

                                                        <div class="ecom-collection__product-price-wrapper">
                                                            <span
                                                                class="ecom-collection__product-price--regular ecom-collection__product--compare-at-price"
                                                                {%- if product.compare_at_price == nil or product.compare_at_price <=  product.price -%}  style="display:none" {% endif %}
                                                            >
                                                                {% if settings.currency_code_enabled == true %} {{ target.compare_at_price | money_with_currency }} {% else %} {{ target.compare_at_price | money }} {% endif %}
                                                            </span>
                                                            <span class="ecom-collection__product-price{% if target.compare_at_price > target.price %} ecom-collection__product-price--sale{% endif %}">{% if settings.currency_code_enabled == true %} {{ target.price | money_with_currency }} {% else %} {{ target.price | money }} {% endif %}</span>

                                                        </div>
                                                         {{ ground_price }}
                                                    {% endif %}
                                                {% endif %}
                                                `}

                                            </div>

                                                {% endif %}


                                                ${this.show_description&&this.data.settings.layout=="list"?`
                                                    <div class="ecom-collection__product-description ecom-child-element" ${this.exporting?"":'data-child-name="description" data-child-title="Description"'}>
                                                        {{ product.description | strip_html | replace: '\xA0', ' ' | truncatewords: ${this.short_limit} }}
                                                    </div>
                                                `:""}
                                                {% if product_style != 'absolute'%}
                                                    {{ product_picker }}
                                                {% endif %}
                                                {% if product_style == 'horizontal' or product_style == 'vertical' or product_layout == 'list' %}
                                                    {{product_actions}}
                                                {% endif %}
                                                ${this.enable_countdown?` {%- assign countdown_to = product.metafields.ecomposer.countdown -%}
                                                        {% if product.available and countdown_to %}
                                                            <div class="ecom-collection__product-countdown ecom-child-element" ${this.exporting?"":'data-child-name="countdown" data-child-title="Countdown"'} >
                                                                <div class="ecom-collection__product-countdown-wrapper" >
                                                                    <div class="ecom-collection__product-countdown-wrapper--title">${this.lang((To=this.data.settings)==null?void 0:To.countdown_title,"countdown_title")}</div>
                                                                    <div class="ecom-product-single__countdown-container" >
                                                                        {%- assign countdown_from = product.metafields.ecomposer.countdown_from -%}
                                                                        <div
                                                                            data-product-id="{{product.id}}"
                                                                            class="ecom-collection__product-countdown-time ecom-collection__product-countdown-time--metafields"
                                                                            data-ecom-countdown-from="{{ countdown_from }}"
                                                                            data-ecom-countdown="{{countdown_to}}"
                                                                        ></div>
                                                                    </div>
                                                                    ${this.data.settings.enable_progress_bar?` {% if countdown_from %}
                                                                                <div class="ecom-collection__product-countdown-progress-bar">
                                                                                    <div class="ecom-collection__product-countdown-progress-bar--wrap">
                                                                                        <div class="ecom-collection__product-countdown-progress-bar--timer ecom-product-single__countdown-progress-bar--timer"></div>
                                                                                    </div>
                                                                                </div>
                                                                            {% endif %}
                                                                        `:""}
                                                                </div>
                                                            </div>
                                                        {% endif %}`:""}

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
                             <div class="ecom-collection__product--wrapper-items ecom-collection__product--no-item ecom-collection-product__layout-${this.layout}"
                                ${this.canAjaxProductFallback?'data-ecom-vendor-fallback="{{ ecom_vendor_ajax_fallback }}" data-ecom-type-fallback="{{ ecom_type_ajax_fallback }}"':""}
                             >
                                <div class="ecom-collection__product-item" >
                                    ${this.lang((jo=this.data.settings)==null?void 0:jo.trans_no_item,"no_product_item")}
                                </div>
                             </div>
                        {% endif %}
                        ${this.data.template==="product"||this.data.template==="cart"?`
                            {% if current_product %}
                                {% assign product = current_product %}
                            {% endif %}
                        `:""}
                        ${this.data.template==="collection"&&!this.canUseCustomLiquidForCSR?`${((Ho=(Bo=this.data)==null?void 0:Bo.settings)==null?void 0:Ho.pagination_type)&&((Io=(Po=this.data)==null?void 0:Po.settings)==null?void 0:Io.pagination_type)!=="off"&&this.data.settings.layout!=="slider"?`
                                {%- if paginate.pages > 1 -%}
                                ${this.data.settings.enable_progress_pagination&&this.data.settings.pagination_type!=="infinit"?`
                                        <div class="ecom-pagination-progress-bar--wrapper ecom-child-element" data-child-name="progress_pagination" data-child-title="Progress pagination">
                                            <div class="ecom-pagination-progress-bar" style="--ecom-flex-direction: ${this.data.settings.show_text_first?this.data.settings.show_text_first:"column"}">
                                            <div class="ecom-pagination-progress-bar__container">
                                                <div class="ecom-paginate__progress-bar--outner" data-total="{% if productCount %} {{productCount}} {% else %} {{collection.products_count}} {% endif %}" data-init-product="${this.data.settings.limit}">
                                                    <div class="ecom-paginate__progress-bar--inner"></div>
                                                </div>
                                            </div>
                                            <p class="ecom-paginate__progress-text" data-text="${this.data.settings.text_progress_pagination?this.data.settings.text_progress_pagination:"Viewing {_start} - {_end} of {_total}"}">${this.data.settings.text_progress_pagination?this.data.settings.text_progress_pagination.replace("{_start}",1).replace("{_end}",20).replace("{_total}",100):"Viewing 1 - 20 of 100"}</p>
                                            </div>
                                        </div>
                                    `:""}
                                ${this.data.settings.pagination_type==="default"?`
                                    <nav role="navigation" ecom-child-element" ${this.exporting?"":'data-child-name="pagination" data-child-title="Pagination"'}
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
                                                    ${(Do=this.data.settings)!=null&&Do.loadmore_text?`<span class="ecom-paginate-loadmore--text">${this.lang(this.data.settings.loadmore_text||"","loadmore_text")}</span>`:""}
                                                    ${(Ro=this.data.settings)!=null&&Ro.loadmore_icon?`<span class="ecom-paginate-action--icon ecom-flex ecom-al_center">${this.data.settings.loadmore_icon||""}</span>`:""}
                                                    </span>
                                                </a>
                                            </div>
                                        {%- endif -%}`:`
                                        {%- if paginate.next.url -%}
                                        <div data-get='{{ paginate.next.url }}' href="{{ paginate.next.url }}" class="ecom-products-pagination-infinite ecom-w__full ecom-fl_center ecom-al_center">
                                            <!--<button class="ecom-loading"></button> -->
                                        </div>
                                        {%- endif -%}
                                        `}
                                    `}

                                {%- endif -%}`:""}

                            {% endpaginate %}
                        {% endif %}

                        `:""}

                        ${this.canUseCustomLiquidForCSR&&((Wo=(Fo=this.data)==null?void 0:Fo.settings)==null?void 0:Wo.show_preview_pagination)?`{% if products.size > 0 %} ${this.renderBuilderPagination()} {% endif %} `:""}

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
                                </div>`).join("")+"</div>"}}},products(){return this.data},page_type(){return this.$store.getters["page/params"].page},isNavigation(){var t,s;return((t=this.data.settings)==null?void 0:t.layout)==="slider"&&((s=this.data.settings)==null?void 0:s.slider_navigation_layout)},isCombined(){var s,n;return((n=(s=this.data)==null?void 0:s.settings)==null?void 0:n.slider_navigation_layout)==="neo_full"?"combine":"classic"},icon(){var t;return(t=this.data.settings)==null?void 0:t.icon},mediaSizes(){var E,H,F,G,K,R,U,J,W,X,P;const t=((E=this.data)==null?void 0:E.settings)||{},s=this.layout==="slider",n=["slider_items","slider_items__tablet","slider_items__mobile"],e=s?["slider_spacing","slider_spacing__tablet","slider_spacing__mobile"]:["column_gap","column_gap__tablet","column_gap__mobile"],b=(f,k,v)=>{const w=[];return f.forEach((A,z)=>{const Q=parseFloat(t[A]),ee=Number.isFinite(Q)&&Q>=v;w.push(ee?Q:z===0?k:w[z-1])}),w},S=b(n,4,.1),C=b(e,0,0);let M=1;if(this.layout==="list"){const f=parseFloat((F=(H=t.image_grid_template_column)==null?void 0:H.value)!=null?F:t.image_grid_template_column);M=f>0?f/100:.4}const y=((R=(K=(G=this.$store)==null?void 0:G.getters)==null?void 0:K["page/activePreset"])==null?void 0:R.theme_settings)||{},i=parseFloat(y.layoutPadding),I=Number.isFinite(i)?i:40,D=M===1?"":` * ${Math.round(M*1e3)/1e3}`,L=(f,k)=>{const v=Math.round(C[f]*(S[f]-1)+I),w=S[f]===1?"":` / ${S[f]}`;return!w&&!D?v>0?`calc(${k} - ${v}px)`:k:`calc(${v>0?`(${k} - ${v}px)`:k}${w}${D})`},B=((U=this.section)==null?void 0:U.settings)||{};if(B["content-width"]==="full")return`(min-width: 1025px) ${L(0,"100vw")}, (min-width: 768px) ${L(1,"100vw")}, ${L(2,"100vw")}`;const N=parseFloat((W=(J=B["max-width"])==null?void 0:J.value)!=null?W:B["max-width"]),O=parseFloat((P=(X=y["max-width"])==null?void 0:X.value)!=null?P:y["max-width"]),Z=Number.isFinite(N)?N:Number.isFinite(O)?O:1200;return`(min-width: 1025px) ${(()=>{const f=C[0]*(S[0]-1),k=(Z-I-f)/S[0]*M;return`${Math.max(1,Math.round(k))}px`})()}, (min-width: 768px) ${L(1,"100vw")}, ${L(2,"100vw")}`},layout(){return this.data&&this.data.settings&&"layout"in this.data.settings?this.data.settings.layout:"grid"},show_description(){return this.data&&this.data.settings&&"show_description"in this.data.settings&&this.data.settings.show_description===!0},short_limit(){return this.data&&this.data.settings&&"limit_short_description"in this.data.settings?this.data.settings.limit_short_description:10},show_picker(){return this.data&&this.data.settings&&"show_picker"in this.data.settings?this.data.settings.show_picker==="show":!1},swatch_type(){let t=this.data&&this.data.settings&&"type"in this.data.settings?this.data.settings.type:"dropdown";return["image","color","radio","shopify_color"].includes(t)&&this.data&&this.data.settings&&"option"in this.data.settings&&this.data.settings.option?t:"dropdown"},option_layout(){return this.data&&this.data.settings&&"option_layout"in this.data.settings&&this.data.settings.option_layout?this.data.settings.option_layout:"dropdown"},show_product_rating(){var t,s;return(s=(t=this.data)==null?void 0:t.settings)==null?void 0:s.show_product_rating},show_product_quickview(){var t,s;return(s=(t=this.data)==null?void 0:t.settings)==null?void 0:s.show_product_quickview},show_product_wishlist(){var t,s,n;return(n=(s=(t=this.data)==null?void 0:t.settings)==null?void 0:s.show_product_wishlist)!=null?n:!1},shows_countdown(){var t,s,n;return(n=(s=(t=this.data)==null?void 0:t.settings)==null?void 0:s.shows_countdown)!=null?n:[]},requestShopifyType(){let t=["collection"];return this.data.template&&t.includes(this.data.template)?{shopify_type:this.data.template}:{}},badge_tags(){var t,s,n;return(n=(s=(t=this.data)==null?void 0:t.settings)==null?void 0:s.badge_tags)!=null?n:"".split(`
`).join(",")},metafield_tag(){var t,s,n;return(n=(s=(t=this.data)==null?void 0:t.settings)==null?void 0:s.metafield_tag)!=null?n:"".split(`
`).join(",")},quickshop_layout(){var t,s,n;return(n=(s=(t=this.data)==null?void 0:t.settings)==null?void 0:s.quickshop_layout)!=null?n:"lite"},quickview_snippet(){var t,s,n,e,b;return`
                {%- assign quickview_app = shop.metafields.ecomposer.app_quickview.value -%}
                <div
                        class="ecom-collection__product--quickview-wrapper"
                        ${this.exporting?"":`data-child-name="quickview_button"
                        data-child-title="Button"`}
                        data-quickview-app="{{quickview_app}}"
                    >
                        {%- if quickview_app -%}
                            {% case quickview_app %}
                                {% when 'intergrated' %}
                                    <a  href="{{ product.url }}" title="{{ product.title }}" class="ecom-product-quickview" data-handle="{{product.handle}}" data-id="{{product.id}}">
                                    ${(n=(s=(t=this.data)==null?void 0:t.settings)==null?void 0:s.quickview_icon)!=null?n:""}
                                    <span class="ecom-product-quickview--text">
                                        ${this.lang((b=(e=this.data)==null?void 0:e.settings)==null?void 0:b.quickview_text,"quickview")}
                                    </span>
                                    </a>
                            {% endcase %}
                        {% endif %}

                    </div>
            `},wishlist_snippet(){return`
                    {%- assign wishlist_app = shop.metafields.ecomposer.app_wishlist.value -%}
                    <div
                        class="ecom-collection__product--wishlist-wrapper"
                        ${this.exporting?"":`data-child-name="wishlist"
                        data-child-title="Wishlist"`}
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
                                        {% render 'wishlisthero-collection-product', product: product %}
                                    {% endcapture %}
                                    {% unless the_hero_wishlist_snippet contains 'Liquid error' %}
                                        {{ the_hero_wishlist_snippet }}
                                    {% endunless %}
                                {% when 'wishlist-wishify' %}
                                    {% capture the_wishify_wishlist_snippet %}
                                        {% render 'ZooomyListWishlistColl', product: product %}
                                    {% endcapture %}
                                    {% unless the_wishify_wishlist_snippet contains 'Liquid error' %}
                                        {{ the_wishify_wishlist_snippet }}
                                    {% endunless %}
                                {% when 'growave' %}
                                    <div
                                        class="gw-add-to-wishlist-product-card-placeholder"
                                        data-gw-product-id="{{product.id}}"
                                        data-gw-variant-id="{{product.id}}"
                                        data-gw-wishlist-counter-position="left-top"
                                        style="display: block"
                                    ></div>
                                {% else %}
                            {% endcase %}
                        {% endif%}

                    </div>
                `},review_snippet(){return`
                    <div
                        class="ecom-collection__product-rating-wrapper ecom-child-element"
                        ${this.exporting?"":`data-child-name="rating"
                        data-child-title="Rating"`}
                        data-rating-platform="{{review_platform}}"
                    >
                        {%- if review_platform -%}
                            {%- case review_platform -%}
                                {%- when 'none' -%}
                                {%- when 'ali-reviews' -%}
                                    <div product-id="{{ product.id }}" product-handle="{{ product.handle }}" class="alireviews-review-star-rating"></div>
                                {%- when 'okendo' -%}
                                    <div data-oke-star-rating="" data-oke-reviews-product-id="shopify-{{product.id}}"></div>
                                {%- when 'opinew-reviews' -%}
                                    <div class='opinew-stars-plugin-product-list'>{% render 'opinew_review_stars_lists' product:product %}</div>
                                {%- when 'judgeme' -%}
                                    <div style='{{ jm_style }}' class='jdgm-widget jdgm-preview-badge'  data-id='{{ product.id }}'>
                                        {{ product.metafields.judgeme.badge }}
                                    </div>
                                {%- when 'product-reviews-addon' -%}
                                    <span class=" stamped-product-reviews-badge" data-product-sku="{{ product.handle }}" data-id="{{ product.id }}" style="display:block;">{{- product.metafields.stamped.badge -}}</span>
                                {%- when 'areviews-aliexpress'-%}
                                    <div class="areviews_product_item areviews_stars{{ product.id }}"  data-product-id="{{ product.id }}"></div>
                                {%- when 'loox'-%}
                                    <div class="loox-rating" data-id="{{ product.id }}" data-rating="{{ product.metafields.loox.avg_rating }}" data-raters="{{ product.metafields.loox.num_reviews }}"></div>
                                {% when 'ryviu'%}
                                    <div class="ryviu-collection">
                                        <ryviu-widget-total collection=1 reviews_data="{{product.metafields.ryviu.product_reviews_info  | escape  }}" product_id="{{product.id}}" handle="{{product.handle}}">
                                        </ryviu-widget-total>
                                    </div>
                                {%- when 'yotpo-social-reviews' -%}
                                    <div class="yotpo bottomLine" style="display:inline-block" data-product-id="{{ product.id }}"> </div>
                                {%- when 'vital-reviews' -%}
                                    <div></div>
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
                                    <div class="scm-reviews-rate" data-rate-version2="{{ product.metafields.scm_review_importer.reviewsData.reviewCountInfo | json | escape }}" data-product-id="{{ product.id }}"></div>
                                {%- when 'sealapps-product-review' -%}
                                    <div class="ecom-star-rating-sealapp" product-id="{{ product.id }}"></div>
                                {%- when 'rivyo' -%}
                                    <div class="wc_product_review_badge" data-handle="{{ product.handle }}" data-product_id="{{ product.id }}"></div>
                                {%- when 'klaviyo-reviews' -%}
                                    <div class="klaviyo-star-rating-widget" data-id="{{product.id}}" data-product-title="{{product.title}}" data-product-type="{{product.type}}"></div>
                                {%- when 'air-reviews' -%}
                                    <div class="AirReviews-Widget AirReviews-Widget--Stars" data-review-avg="{{ product.metafields.air_reviews_product.review_avg }}" data-review-count="{{ product.metafields.air_reviews_product.review_count }}"></div>
                                {%- when 'ait-product-reviews' -%}
                                    <span class="egg-product-reviews-rating" data-id="{{ product.id }}" id="{{ product.id }}"></span>
                                {%- when 'trustify-reviews' -%}
                                    <div
                                        class="trustify-review-stars-collection"
                                        data-review-type="collection"
                                        data-review-avg="{{ product.metafields.tr_reviews_product.review_avg }}"
                                        data-review-count="{{ product.metafields.tr_reviews_product.review_count }}"
                                    >
                                    </div>
                                    {% else %}
                                <p>The rating platform not supported</p>
                            {%-endcase-%}
                        {%- else -%}
                            <p>Please select the rating platform in settings</p>
                        {%- endif -%}

                    </div>
                `},css(){return`
${this.$helpers.autoplayToggleCss()}
            .ec-swatch-shopify-color {
                display: block;
                max-width: 100%;
                aspect-ratio: 1 / 1;
                background: var(--ec-swatch--background);
                background-position: var(--ec-swatch-focal-point, initial);
                background-size: cover;
                background-origin: border-box;
            }

            .ecom-collection__product-countdown {
                position: relative
            }

            /** progress bar pagination **/
                .ecom-pagination-progress-bar--wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }
                .ecom-pagination-progress-bar {
                    display: flex;
                    justify-content: center;
                    flex-direction: var(--ecom-flex-direction, column);
                    align-items: center;
                }
                .ecom-paginate__progress-bar--outner {
                    width: 250px;
                    border-radius: 4px;
                    position: relative;
                    height: 10px;
                    background-color: rgba(0 0 0 /.3);
                }
                .ecom-paginate__progress-bar--inner {
                    border-radius: inherit;
                    position: absolute;
                    height: 100%;
                    width: 20%;
                    background-color: rgba(0 0 0 /1);
                    top: 0;
                    left: 0;
                }
                .ecom-paginate__progress-text {
                    margin: 0;
                    width: 100%;
                }
                .ecom-unit-price {
                    display: block;
                }
                /** Swiper css **/
                .ecom-swiper-navigation-position .ecom-swiper-button {
                    position: var(--ecom-position);
                }
                @media (max-width: 1024px) {
                    .ecom-swiper-navigation-position .ecom-swiper-button {
                        position: var(--ecom-position__tablet);
                    }
                }
                @media (max-width: 767px) {
                    .ecom-swiper-navigation-position .ecom-swiper-button {
                        position: var(--ecom-position__mobile);
                    }
                    .ecom-collection__product--wrapper-items.ecom-collection__product--no-item {grid-template-columns: repeat(1, 1fr);}
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
                .ecom-swiper-navigation[data-navigator-type="combine"]{
                    justify-content: center
                }
                .ecom-swiper-pagination:not(.ecom-swiper-pagination-lock){
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
                .ecom-collection__product-main.ecom-swiper-container {
                    opacity: 0;
                    visibility: hidden;
                }
                .ecom-collection__product-main.ecom-swiper-container.ecom-swiper-initialized {
                    opacity: 1;
                    visibility: visible;
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

                .ecom-collection__pagination-navigation .ecom-pagination-item svg {
                    width: 12px;
                    height: 12px;
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

                .ecom-collection__product-media--hover-effect img.ecom-collection__product-secondary-media {
                    opacity: 0;
                    -webkit-transition: .4s ease-in-out;
                    transition: .4s ease-in-out;
                }
                /* .ecom-hover-ready is added once the deferred secondary image has
                   decoded, so the primary never fades out to an empty frame. */
                @media(min-width: 1025px) {
                    .ecom-collection__product-media-wrapper.ecom-hover-ready:hover .ecom-collection__product-media--hover-effect .ecom-collection__product-media-image {
                        opacity: 0;
                        transition: opacity .4s cubic-bezier(.25, .46, .45, .94);
                    }

                    .ecom-collection__product-media-wrapper.ecom-hover-ready:hover .ecom-collection__product-media--hover-effect .ecom-collection__product-secondary-media {
                        opacity: 1;
                    }
                }
                @media(max-width: 1024px) {
                    .ecom-collection__product-media-wrapper.ecom-enable-hover--mobile.ecom-hover-ready:hover .ecom-collection__product-media--hover-effect .ecom-collection__product-media-image {
                        opacity: 0;
                        transition: opacity .4s cubic-bezier(.25, .46, .45, .94);
                    }

                    .ecom-collection__product-media-wrapper.ecom-enable-hover--mobile.ecom-hover-ready:hover .ecom-collection__product-media--hover-effect .ecom-collection__product-secondary-media {
                        opacity: 1;
                    }
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
                    min-height: unset;
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
                /* Quantity input */
                .ecom-collection__product-form__actions.ecom-collection__product-quantity--inline {
                    flex-direction: row;
                }
                input.ecom-collection__product-quantity-input::-webkit-outer-spin-button,
                input.ecom-collection__product-quantity-input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                }
                .ecom-collection__product-quantity-input {
                    text-align: center;
                    align-self: center;
                    box-shadow: none;
                    outline: none;
                    width: 100%;
                    height: 100%;
                    position: relative;
                }
                .ecom-collection__product-quantity--wrapper {
                    overflow: hidden;
                    width: 100%;
                    align-self: center;
                }
                button.ecom-collection__quantity-controls-button {
                    color: #000000;
                    border-style: solid;
                    border-color: #c2bcbc;
                    background: transparent;
                    display: flex;
                    align-items: center;
                }
                .ecom-collection__quantity-controls-minus {
                    border-top-width: 0.8px;
                    border-left-width: 0.8px;
                    border-bottom-width: 0.8px;
                    border-right-width: 0;
                }
                .ecom-collection__quantity-controls-plus {
                    border-top-width: 0.8px;
                    border-left-width: 0px;
                    border-bottom-width: 0.8px;
                    border-right-width: 0.8px;
                }
                .ecom-collection__quantity-controls-button svg {
                    width: 12px;
                    height: 12px;
                }
                /* Quantity input */
                .ecom-collection__product-item:hover .ecom-product-image-loading::before {
                    visibility: visible;
                }
                .ecom-collection__product-form__actions--soldout,
                .ecom-collection__product-form__actions--view-more,
                .ecom-collection__product-form__actions--add {
                    cursor: pointer;
                    display: flex;
                    flex-direction: row;
                    align-content: center;
                    justify-content: center;
                    align-items: center;
                }
                /*.ecom-collection__product-item svg{
                    width:40px;
                    height: 40px;
                }*/
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
            .ecom-collection__product-login-to-see{
                display: flex;
            }
            .ecom-collection__product-login-to-see>a{
                color: inherit;
                text-decoration: inherit;
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
                -webkit-line-clamp: var(--ecom-webkit-line-clamp);
                text-overflow: ellipsis;
                overflow: hidden;
            }
            /*.ecom-collection__product-item-information-title,
            .ecom-collection__product-item-information-title a {
                display: block;
            }*/
            .ecom-collection__product-item-information-title.ecom-title-one-row{
                display: block;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .ecom-collection__product-price-wrapper{
                display:flex;
                gap:10px;
                flex-wrap: wrap;
                align-items: baseline;
            }
            .ecom-collection__product-price-range{
                word-break: break-word;
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
                color: #444;
            }
            .ecom-collection__product-container .ecom-swiper-pagination:not(.ecom-swiper-pagination-progressbar, .ecom-swiper-pagination-lock) {
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
            .ecom-doing-filter .ecom-collection__product-loading, .ecom-doing-scroll .ecom-collection__product-loading {
                display: block;
            }
            .ecom-doing-filter .ecom-collection__product-container_collection {
                display: none;
            }
            /**  Quick view **/
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

        .ecom-collection__product-item .ecom-product__compare-link {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            line-height: 1.2;
            width: fit-content;
            font-size: 14px;
            pointer-events: auto;
            color: #000;
            padding: 2.5px;
            margin-left: 15px;
        }
        .ecom-product__compare-icon span {
            display: flex;
        }
        .ecom-collection__product-item .ecom-product__compare-icon svg {
            width: 18px;
            height: auto;
        }
        span.ecom-product__compare-added {
            display: none;
        }
        .ecom-product__compare-link-added span.ecom-product__compare-added {
            display: flex;
            justify-content: center;
        }
        .ecom-product__compare-link-added span.ecom-product__compare-normal {
            display: none;
        }
        .ecom-collection__action .ecom-product__compare-tooltip {
            position: absolute;
            top: 50%;
            bottom: auto;
            left: calc(100% + 4px);
            transform: translate(0, -50%);
            background: #383838;
            color: #ffffff;
            padding: 4px 10px;
            opacity: 0;
            visibility: hidden;
            transition: 0.25s;
            z-index: 10;
            text-wrap: nowrap;
            font-size: 12px;
        }
        .ecom-collection__action .ecom-product__compare-link:hover .ecom-product__compare-tooltip {
            opacity: 1;
            visibility: visible;
            transform: translate(4px, -50%);
        }
        .ecom-product__wishlist, .ecom-product__compare {
            width: 100%;
            display: flex;
        }
        .ecom-collection__product-item .ecom-product__wishlist-link {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            position: relative;
            line-height: 1.2;
            font-size: 14px;
            text-decoration: none;
            color: #000;
            pointer-events: auto;
            padding: 2.5px;
            margin-top: 10px;
            margin-left: 15px;
        }
        .ecom-product__wishlist-icon span {
            display: flex;
        }
        .ecom-collection__product-item .ecom-product__wishlist-icon svg {
            width: 18px;
            height: auto;
        }
        span.ecom-product__wishlist-added {
            display: none;
        }
        .ecom-product__wishlist-link-added span.ecom-product__wishlist-added {
            display: flex;
            justify-content: center;
        }
        .ecom-product__wishlist-link-added span.ecom-product__wishlist-normal {
            display: none;
        }
        .ecom-collection__action .ecom-product__wishlist-tooltip {
            position: absolute;
            top: 50%;
            bottom: auto;
            left: calc(100% + 4px);
            transform: translate(0, -50%);
            background: #383838;
            color: #ffffff;
            padding: 5px 10px;
            opacity: 0;
            visibility: hidden;
            transition: 0.25s;
            z-index: 10;
            text-wrap: nowrap;
            font-size: 12px;
            min-width: 100%;
            text-align: center;
            pointer-events: none;
        }
        .ecom-product__wishlist-tooltip:empty, .ecom-product__compare-tooltip:empty {
            display: none !important;
        }
        .ecom-collection__action .ecom-product__wishlist-link:hover .ecom-product__wishlist-tooltip {
            opacity: 1;
            visibility: visible;
            transform: translate(4px, -50%);
        }
        .ecom-collection__product-group-button-action {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
        }
        .ecom-collection__product-group-button-action-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
        }
        .ecom-product__wishlist-visibility-hover, .ecom-product__wishlist-visibility-hover_active {
            visibility: hidden;
            opacity: 0;
            transition: 0.25s;
        }
        .ecom-collection__product-item:hover .ecom-product__wishlist-visibility-hover, .ecom-collection__product-item:hover .ecom-product__wishlist-visibility-hover_active, .ecom-product__wishlist-visibility-hover_active.ecom-button-active {
            visibility: visible;
            opacity: 1;
        }


        .ecom-collection__action.ecom-product__wishlist,
        .ecom-collection__action.ecom-product__compare {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: start;
            pointer-events: none;
        }
        .ecom-collection__product-group-button-action-wrapper .ecom-collection__action {
            position: relative;
        }
        .ecom-collection__action-hor-end .ecom-product__wishlist-tooltip,
        .ecom-collection__action-hor-end .ecom-product__compare-tooltip {
            right: calc(100% + 4px);
            left: auto;
            transform: translate(0, -50%);
        }
        .ecom-collection__action-hor-center.ecom-collection__action-ver-start .ecom-product__wishlist-tooltip,
        .ecom-collection__action-hor-center.ecom-collection__action-ver-start .ecom-product__compare-tooltip {
            top: 100%;
            left: 50%;
            right: auto;
            transform: translate(-50%, 0);
        }
        .ecom-collection__action-hor-center.ecom-collection__action-ver-start .ecom-product__wishlist-link:hover .ecom-product__wishlist-tooltip,
        .ecom-collection__action-hor-center.ecom-collection__action-ver-start .ecom-product__compare-link:hover .ecom-product__compare-tooltip {
            transform: translate(-50%, 4px);
        }
        .ecom-collection__action-hor-center.ecom-collection__action-ver-center .ecom-product__wishlist-tooltip,
        .ecom-collection__action-hor-center.ecom-collection__action-ver-end .ecom-product__wishlist-tooltip,
        .ecom-collection__action-hor-center.ecom-collection__action-ver-center .ecom-product__compare-tooltip,
        .ecom-collection__action-hor-center.ecom-collection__action-ver-end .ecom-product__compare-tooltip {
            top: auto;
            bottom: 100%;
            left: 50%;
            right: auto;
            transform: translate(-50%, 0);
        }
        .ecom-collection__action-hor-center.ecom-collection__action-ver-center .ecom-product__wishlist-link:hover .ecom-product__wishlist-tooltip,
        .ecom-collection__action-hor-center.ecom-collection__action-ver-end .ecom-product__wishlist-link:hover .ecom-product__wishlist-tooltip,
        .ecom-collection__action-hor-center.ecom-collection__action-ver-center .ecom-product__compare-link:hover .ecom-product__compare-tooltip,
        .ecom-collection__action-hor-center.ecom-collection__action-ver-end .ecom-product__compare-link:hover .ecom-product__compare-tooltip {
            transform: translate(-50%, -4px);
        }
        .ecom-ext-wishlist-icon-loading * {
            opacity: 0;
        }
        .ecom-product__wishlist-link.ecom-ext-wishlist-icon-loading:before {
            content: "";
            position: absolute;
            transform: translate(-50%, -50%);
            border: 1.5px solid #f3f3f3;
            border-radius: 50%;
            border-top: 1.5px solid #000;
            width: 20px;
            height: 20px;
            -webkit-animation: spin 0.5s linear infinite; /* Safari */
            animation: spin .5s linear infinite;
        }
        @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        @media screen and (max-width: 1024px) {
            .ecom-product__wishlist-visibility-hover, .ecom-product__wishlist-visibility-hover_active {
                visibility: visible;
                opacity: 1;
            }
            .ecom-product__compare-tooltip {
                display: none !important;
            }
            .ecom-product__wishlist-tooltip {
                display: none !important;
            }
        }
        @media screen and (max-width: 767px) {
            .ecom-collection__product-form__actions-hide-mobile {
                display: none !important;
            }
        }
        .ecom-add-to-cart-text, .ecom-collection__product-view-more-text {
            text-align: center;
        }
        `},sliderNav(){return this.data.settings.navigation_position__tablet||(this.data.settings.navigation_position__tablet=this.data.settings.navigation_position),this.data.settings.navigation_position__mobile||(this.data.settings.navigation_position__mobile=this.data.settings.navigation_position),{"--ecom-position":this.data.settings.navigation_position!=="center"?"unset":"absolute","--ecom-position__tablet":this.data.settings.navigation_position__tablet!=="center"?"unset":"absolute","--ecom-position__mobile":this.data.settings.navigation_position__mobile!=="center"?"unset":"absolute"}},enable_countdown(){var t,s,n;return(n=(s=(t=this.data)==null?void 0:t.settings)==null?void 0:s.enable_countdown)!=null?n:!1},show_bss_b2b_wholesale(){var t;return this.data&&this.data.settings&&"show_bss_b2b_wholesale"in this.data.settings?(t=this.data.settings)==null?void 0:t.show_bss_b2b_wholesale:!1},optionSwiper(){return this.$helpers.optionSwiper(this.data.settings)},show_all(){return this.active_child_elenent===!0}},watch:{optionSwiper:{deep:!0,handler:function(){this.products.refresh=this.$helpers.randid()}},screen:{handler:function(){this.products.refresh=this.$helpers.randid()}}},methods:{getDomain(){return window.location.hostname},isArrow(){var t;return["neo_full","navigation","classic_full"].includes((t=this.data.settings)==null?void 0:t.slider_navigation_layout)},isPagination(){var t;return["neo_full","classic_full","pagination"].includes((t=this.data.settings)==null?void 0:t.slider_navigation_layout)},renderBuilderPagination(){var e,b;if(this.data.settings.layout==="slider"||!((b=(e=this.data)==null?void 0:e.settings)!=null&&b.pagination_type)||this.data.settings.pagination_type==="off")return"";const t=this.data.settings;let s="";t.enable_progress_pagination&&t.pagination_type!=="infinit"&&(s=`
                    <div class="ecom-pagination-progress-bar--wrapper ecom-child-element" data-child-name="progress_pagination" data-child-title="Progress pagination">
                        <div class="ecom-pagination-progress-bar" style="--ecom-flex-direction: ${t.show_text_first?t.show_text_first:"column"}">
                        <div class="ecom-pagination-progress-bar__container">
                            <div class="ecom-paginate__progress-bar--outner" data-total="100" data-init-product="${t.limit}">
                                <div class="ecom-paginate__progress-bar--inner" style="width: 20%"></div>
                            </div>
                        </div>
                        <p class="ecom-paginate__progress-text" data-text="${t.text_progress_pagination?t.text_progress_pagination:"Viewing {_start} - {_end} of {_total}"}">
                            ${t.text_progress_pagination?t.text_progress_pagination.replace("{_start}",1).replace("{_end}",20).replace("{_total}",100):"Viewing 1 - 20 of 100"}
                        </p>
                        </div>
                    </div>
                `);let n="";return t.pagination_type==="default"?n=`
                    <nav role="navigation" class="ecom-child-element" data-child-name="pagination" data-child-title="Pagination">
                        <ol class="ecom-pagination-navigation ecom-collection__pagination-navigation">
                            <li class="ecom-pagination-item ecom-prev ecom-paginate-action disabled" style="${t.pagination_style==="block"?"margin-right:auto":""}">
                                ${t.number_type==="icon"||t.number_type==="text_icon"?`<span class="ecom-paginate-action--icon">${t.icon_prev_page||""}</span>`:""}
                                ${t.number_type!=="icon"?this.lang(t.text_prev_page,"prev_page"):""}
                            </li>

                            <li class="ecom-pagination-item ecom-button-active" aria-current="page">1</li>
                            <li class="ecom-pagination-item">2</li>
                            <li class="ecom-pagination-item">3</li>

                            <li class="ecom-next" style="${t.pagination_style=="block"?"margin-left:auto":""}">
                                <a class="ecom-pagination-item ecom-paginate-action" href="#">
                                ${t.number_type!=="icon"?this.lang(t.text_next_page,"next_page"):""}
                                ${t.number_type==="icon"||t.number_type==="text_icon"?`<span class="ecom-paginate-action--icon">${t.icon_next_page||""}</span>`:""}
                                </a>
                            </li>
                        </ol>
                    </nav>
                 `:["loadmore","infinit"].includes(t.pagination_type)&&(t.pagination_type==="loadmore"?n=`
                        <div class="ecom-products-pagination-loadmore ecom-collection__pagination-navigation ecom-w__full ecom-fl_center ecom-al_center ecom-child-element" data-child-name="pagination" data-child-title="Pagination">
                            <a href="#" class="ecom-products-pagination-loadmore-btn ecom-pagination-item">
                                <span class="ecom-paginate-loadmore--content ecom-flex ecom-al_center">
                                    ${t.loadmore_text&&t.loadmore_text!=""?`<span class="ecom-paginate-loadmore--text">${this.lang(t.loadmore_text||"","loadmore_text")}</span>`:""}
                                    ${t.loadmore_icon&&t.loadmore_icon!=""?`<span class="ecom-paginate-action--icon ecom-flex ecom-al_center">${t.loadmore_icon||""}</span>`:""}
                                </span>
                                <div class="ecom-paginate-loadmore--icon ecom-animation-spin ecom-hidden">
                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
                                </div>
                            </a>
                        </div>
                     `:n=`
                        <div class="ecom-products-pagination-infinite ecom-w__full ecom-fl_center ecom-al_center ecom-child-element" data-child-name="pagination" data-child-title="Pagination">
                            <div class="ecom-paginate-loadmore--icon ecom-animation-spin">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
                            </div>
                        </div>
                     `),s+n},style(){var b,S,C,M,y;let t={};this.data.settings.styleCountdown=="column"&&(t={params:{alias:"text-align",options:{label:this.$t("alignment")}}});let s=[{group_name:"general",group_title:this.$t("general"),visible:[!0,null].includes(this.active_child_elenent),selector:" .ecom-collection.ecom-collection__product",params:[{type:"tab",name:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")}]},css:{isCss:!1}},{name:"backgroundColor",label:this.$t("background"),type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:i=>i.tab==="normal"}},css:{properties:{"background-color":""}}},{type:"popup",label:this.$t("box_shadow"),name:"boxShadow",options:{oneline:!0,type:"box-shadow",visible:{condition:i=>i.tab==="normal"}},css:{}},{type:"popup",label:this.$t("border"),name:"border",options:{type:"border",oneline:!0,visible:{condition:i=>i.tab==="normal"}},css:{}},{name:"borderRadius",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:{condition:i=>i.tab==="normal"}},css:{properties:{"border-radius":""}}},{name:"backgroundColorHoverMode",label:this.$t("background"),type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:i=>i.tab==="hover"}},css:{selector:":hover",properties:{"background-color":""}}},{type:"popup",label:this.$t("box_shadow"),name:"boxShadowHoverMode",options:{oneline:!0,type:"box-shadow",visible:{condition:i=>i.tab==="hover"}},css:{selector:":hover"}},{type:"popup",label:this.$t("border"),name:"borderHoverMode",options:{type:"border",oneline:!0,visible:{condition:i=>i.tab==="hover"}},css:{selector:":hover"}},{name:"borderRadiusHoverMode",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:{condition:i=>i.tab==="hover"}},css:{selector:":hover",properties:{"border-radius":""}}},{type:"line"},{name:"padding",type:"dimension",label:this.$t("padding"),options:{responsive:!0,simple:!0,units:"default"},css:{properties:{padding:""}}}]},{group_name:"products_item",group_title:this.$t("product_items"),visible:[!0,null].includes(this.active_child_elenent),selector:" .ecom-collection__product-item",params:[{type:"tab",name:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")}]},css:{isCss:!1}},{name:"backgroundColor",label:this.$t("background"),type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:i=>i.tab==="normal"}},css:{properties:{"background-color":""}}},{type:"popup",label:this.$t("border"),name:"border",options:{type:"border",oneline:!0,visible:{condition:i=>i.tab==="normal"}},css:{}},{type:"popup",label:this.$t("box_shadow"),name:"boxShadow",options:{oneline:!0,type:"box-shadow",visible:{condition:i=>i.tab==="normal"}},css:{}},{name:"borderRadius",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:{condition:i=>i.tab==="normal"}},css:{properties:{"border-radius":""}}},{name:"backgroundColorHoverMode",label:this.$t("background"),type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:i=>i.tab==="hover"}},css:{selector:":hover",properties:{"background-color":""}}},{type:"popup",label:this.$t("border"),name:"borderHoverMode",options:{type:"border",oneline:!0,visible:{condition:i=>i.tab==="hover"}},css:{selector:":hover"}},{type:"popup",label:this.$t("box_shadow"),name:"boxShadowHoverMode",options:{oneline:!0,type:"box-shadow",visible:{condition:i=>i.tab==="hover"}},css:{selector:":hover"}},{name:"borderRadiusHoverMode",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:{condition:i=>i.tab==="hover"}},css:{selector:":hover",properties:{"border-radius":""}}},{alias:"spacing",options:{label:this.$t("spacing")}},{type:"popup",label:this.$t("hover_animation"),name:"ImageHoverAnimation",options:{liteMode:!0,type:"dropdown",values:"animation",size:"small",icon_type:"animation",visible:{keep_data:!0,condition:i=>i&&i.tab=="hover"}},css:{selector:":hover",properties:{animation:""}}},{alias:"transitions",options:{label:this.$t("transitions")}}]},{group_title:this.$t("product_image"),group_name:"product_image",selector:" .ecom-collection__product-item",visible:[!0,null,"image"].includes(this.active_child_elenent),params:[{type:"number",name:"imageWidth",liteMode:!0,label:this.$t("width"),options:{responsive:!0,reset:!0,units:{"%":{min:0,max:100},px:{min:0,max:1e3},vw:{min:0,max:100}}},css:{important:!0,selector:" .ecom-collection__product-media--container",properties:{width:""}}},{type:"number",name:"imageMaxWidth",liteMode:!0,label:this.$t("max_width"),options:{responsive:!0,reset:!0,units:{"%":{min:0,max:100},px:{min:0,max:1e3},vw:{min:0,max:100}}},css:{selector:" .ecom-collection__product-media--container",properties:{"max-width":""}}},{type:"number",name:"imageHeight",liteMode:!0,label:this.$t("height"),options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3},vh:{min:0,max:100}}},css:{important:!0,selector:"  .ecom-collection__product-media--container",properties:{height:""}}},{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:" .ecom-collection__product-item--inner "}}},{name:"object-fit",liteMode:!0,label:this.$t("image_fit"),type:"popup",options:{type:"dropdown",default:!1,preview:"title",values:{none:this.$t("none"),fill:this.$t("fill"),contain:this.$t("contain"),cover:this.$t("cover"),"scale-down":this.$t("scale_down")}},css:{selector:" .ecom-collection__product-media img",properties:{"object-fit":""}}},{name:"tab",liteMode:!0,type:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")}]},css:{isCss:!1}},{name:"image_opacity",liteMode:!0,type:"number",label:this.$t("opacity"),options:{step:.01,min:.1,max:1,visible:function(i){return i.tab==="normal"}},css:{selector:" .ecom-collection__product-media img:not(.ecom-collection__product-secondary-media)",properties:{opacity:""}}},{name:"image_opacity_hover",liteMode:!0,type:"number",label:this.$t("opacity"),options:{step:.01,min:.1,max:1,visible:function(i){return i.tab==="hover"}},css:{selector:":hover .ecom-collection__product-media img:not(.ecom-collection__product-secondary-media)",properties:{opacity:""}}},{name:"image_filter",liteMode:!0,label:this.$t("css_filters"),type:"popup",options:{oneline:!0,type:"filter",visible:function(i){return i.tab==="normal"}},css:{selector:" .ecom-collection__product-media img"}},{name:"image_filter_hover",liteMode:!0,label:this.$t("css_filters"),type:"popup",options:{oneline:!0,type:"filter",visible:function(i){return i.tab==="hover"}},css:{selector:":hover .ecom-collection__product-media img"}},{name:"box_shadow",liteMode:!0,label:this.$t("box_shadow"),type:"popup",options:{oneline:!0,type:"box-shadow",visible:function(i){return i.tab==="normal"}},css:{selector:" .ecom-collection__product-media img"}},{name:"box_shadow_hover",liteMode:!0,label:this.$t("box_shadow"),type:"popup",options:{oneline:!0,type:"box-shadow",visible:function(i){return i.tab==="hover"}},css:{selector:":hover .ecom-collection__product-media img"}},{name:"border",label:this.$t("border"),type:"popup",options:{oneline:!0,type:"border",size:"small",visible:function(i){return i.tab==="normal"}},css:{selector:" .ecom-collection__product-media img"}},{name:"border_hover",label:this.$t("border"),type:"popup",options:{oneline:!0,type:"border",size:"small",visible:function(i){return i.tab==="hover"}},css:{selector:":hover .ecom-collection__product-media img"}},{name:"border_radius",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:function(i){return i.tab==="normal"}},css:{selector:" .ecom-collection__product-media img, .ecom-collection__product-media svg.ecom-colection__product-svg-placeholder",properties:{"border-radius":"",overflow:"hidden"}}},{name:"border_radius_hover",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:function(i){return i.tab==="hover"}},css:{selector:":hover .ecom-collection__product-media",properties:{"border-radius":"",overflow:"hidden"}}},{type:"popup",label:this.$t("hover_animation"),name:"ImageHoverAnimation",liteMode:!0,options:{type:"dropdown",values:"animation",size:"small",icon_type:"animation",visible:{keep_data:!0,condition:i=>i&&i.tab=="hover"}},css:{selector:" .ecom-collection__product-media img:hover",properties:{animation:""}}},{alias:"transitions",liteMode:!0,options:{label:this.$t("transitions"),css:{selector:" .ecom-collection__product-media img"}}},{type:"line",liteMode:!0,css:{isCss:!1}},{type:"dimension",label:this.$t("spacing"),name:"spacing",options:{responsive:!0,units:"default"},css:{selector:" .ecom-collection__product-media--container",properties:{spacing:""}}}]},{group_alias:"text:hover",visible:[!0,null,"title"].includes(this.active_child_elenent),options:{group_name:"product_title",group_title:this.$t("title"),selector:" .ecom-collection__product-item-information-title"},modify:{params:[{position:10,fields:[{type:"number",name:"lines_clamp",liteMode:!0,label:this.$t("fixed_number_of_lines"),value:2,options:{reset:!0,min:1,max:5},css:{properties:{"--ecom-webkit-line-clamp":""}}},{alias:"spacing",options:{name:"spacingNormal",options:{visible:i=>i.tab==="normal"}}},{alias:"spacing",options:{name:"spacingHover",options:{visible:i=>i.tab==="hover"},css:{selector:":hover"}}}]}]}},this.data.settings.show_price=="block"?{group_alias:"text:spacing",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"product_price",group_title:this.$t("price"),selector:" .ecom-collection__product-price"},modify:{remove:{index:0,length:1},params:{position:1,fields:{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:"root .ecom-collection__product-price-wrapper"}}}}}}:null,this.data.settings.show_price=="block"?{group_alias:"text:spacing",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"product_regular",group_title:this.$t("compare_at_price"),selector:" .ecom-collection__product-price--regular, .ecom-collection__product-price--from"},modify:{remove:{index:0,length:1}}}:null,this.data.settings.show_login_to_see_price_text==!0?{group_alias:"text:spacing",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"login_to_see_price",group_title:this.$t("login_to_see_price"),selector:" .ecom-collection__product-login-to-see"},modify:{remove:{index:0,length:1},params:[{position:1,fields:{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:"root .ecom-collection__product-login-to-see"}}}},{position:4,fields:{name:"text_hover_color",label:this.$t("text_hover_color"),type:"color",options:{oneline:!0,global:{type:"colors"}},css:{selector:"root .ecom-collection__product-login-to-see:hover",properties:{color:""}}}}]}}:null,this.data.settings.show_ground_price==!0?{group_alias:"text:spacing",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"product_ground_price",group_title:this.$t("ground_price"),selector:" .ecom-unit-price"}}:null,this.data.settings.show_price=="block"?{group_alias:"button:label",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"product_regular_sale",group_title:this.$t("sale_price"),selector:" .ecom-collection__product-price--sale"}}:null,this.data.template==="collection"&&this.data.settings.layout!=="slider"?{group_alias:"pagination",visible:[!0,null,"pagination"].includes(this.active_child_elenent),options:{group_title:this.$t("pagination"),selector:" .ecom-collection__pagination-navigation"},modify:this.data.settings.pagination_style!=="block"?{params:[{position:10,fields:{type:"choose",name:"page_txt_alignment_horizontal",label:this.$t("text_alignment_small_horizontal_small"),options:{responsive:!0,type:"align-x-full",values:["left","center","right"]},css:{selector:" .ecom-pagination-item",properties:{"text-align":"","justify-content":""}}}},{position:10,fields:{type:"choose",name:"page_txt_alignment_vertical",label:this.$t("text_alignment_small_vertical_small"),options:{responsive:!0,type:"align-y-full",values:["start","center","end"]},css:{selector:" .ecom-pagination-item",properties:{"align-items":""}}}},{position:1,fields:{type:"choose",name:"buttonAlignment",label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{display:"flex","justify-content":""}}}}]}:null}:null,this.data.template==="collection"&&this.data.settings.layout!=="slider"&&this.data.settings.enable_progress_pagination?{group_alias:"box",visible:[!0,null,"progress_pagination"].includes(this.active_child_elenent),options:{group_name:"box_progress_pagination",group_title:this.$t("progress_pagination"),selector:" .ecom-pagination-progress-bar"},modify:{params:[{position:0,fields:[{type:"paragraph",content:`**${this.$t("box")}**`},{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:"root .ecom-pagination-progress-bar--wrapper",properties:{"justify-content":""}}}}]},{position:6,fields:[{alias:"spacing"},{type:"line"},{type:"paragraph",content:`**${this.$t("progress")}**`},{type:"number",label:this.$t("width"),name:"width_progress_pagination",options:{responsive:!0,units:{px:{min:0,max:1e3}}},css:{selector:" .ecom-paginate__progress-bar--outner",properties:{width:""}}},{type:"number",label:this.$t("height"),name:"height_progress_pagination",options:{responsive:!0,units:{px:{min:0,max:1e3}}},css:{selector:" .ecom-paginate__progress-bar--outner",properties:{height:""}}},{type:"color",name:"progress",label:this.$t("progress"),options:{global:{type:"colors"},oneline:!0},css:{selector:" .ecom-paginate__progress-bar--inner",properties:{"background-color":""}}},{type:"color",name:"track",label:this.$t("track"),options:{global:{type:"colors"},oneline:!0},css:{selector:" .ecom-paginate__progress-bar--outner",properties:{"background-color":""}}},{name:"boxBorderRadius",label:this.$t("border_radius"),type:"dimension",options:{responsive:!0,type:"radius",units:{px:{min:0,max:1e3},"%":{min:0,max:100}}},css:{selector:" .ecom-paginate__progress-bar--outner",properties:{"border-radius":"",overflow:"hidden"}}},{alias:"spacing",options:{name:"spacingPaginationProgress",css:{selector:" .ecom-pagination-progress-bar__container"}}},{type:"line"},{type:"paragraph",content:`**${this.$t("text")}**`},{type:"choose",label:this.$t("alignment"),name:"textTextAlign",options:{oneline:!0,responsive:!0,type:"align-full",values:["left","center","right","justify"]},css:{selector:" .ecom-paginate__progress-text",properties:{"text-align":""}}},{type:"popup",label:this.$t("typography"),name:"textTypography",options:{global:{type:"typography"},oneline:!0,responsive:!0,type:"typography"},css:{selector:" .ecom-paginate__progress-text"}},{name:"textColor",label:this.$t("text_color"),type:"color",options:{oneline:!0,global:{type:"colors"}},css:{selector:" .ecom-paginate__progress-text",properties:{color:""}}},{type:"background",label:this.$t("text_gradient"),name:"text_gradient",options:{oneline:!0,reset:!0,types:["gradient"]},css:{selector:" .ecom-paginate__progress-text",properties:{background:""," -webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}},{name:"textTextShadow",label:this.$t("text_shadow"),type:"popup",options:{oneline:!0,type:"text-shadow"},css:{selector:" .ecom-paginate__progress-text"}},{alias:"spacing",options:{name:"text_spacing",css:{selector:" .ecom-paginate__progress-text"}}}]}]}}:null,this.data.settings.show_wishlist===!0?{group_alias:"button:active",options:{group_name:"wishlist",group_title:this.$t("wishlist_button"),selector:" .ecom-product__wishlist-link"},modify:{params:{name:"iconFontSize",label:this.$t("icon_size"),type:"number",options:{responsive:!0,position:12,units:{px:{min:10,max:100}}},css:{selector:" svg",properties:{width:""}}}}}:null,this.data.settings.show_compare===!0?{group_alias:"button:active",options:{group_name:"compare",group_title:this.$t("compare_button"),selector:" .ecom-product__compare-link"},modify:{params:{name:"iconFontSize",label:this.$t("icon_size"),type:"number",options:{responsive:!0,position:12,units:{px:{min:10,max:100}}},css:{selector:" svg",properties:{width:""}}}}}:null].filter(i=>i);if(((b=this.data.settings)==null?void 0:b.style)==="absolute"&&(s.push({group_name:"product_actions",group_title:this.$t("button_actions"),visible:[!0,null,"button"].includes(this.active_child_elenent),selector:' .ecom-collection__product-item[data-style="absolute"]  .ecom-collection__product--actions',params:[{name:"flow_direction",label:this.$t("direction"),type:"popup",options:{type:"dropdown",preview:"title",default:!1,values:{column:this.$t("vertical"),row:this.$t("horizontal")}},css:{properties:{"flex-direction":""}}},...oe(),{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")}]},css:{isCss:!1}},{name:"opacity",type:"number",label:this.$t("opacity"),options:{step:.01,min:0,max:1,visible:{keep_data:!0,condition:i=>i.tab==="normal"}},css:{properties:{opacity:""}}},{name:"opacity_hover",type:"number",label:this.$t("opacity"),options:{step:.01,min:.5,max:1,visible:{keep_data:!0,condition:i=>i.tab==="hover"}},css:{selector:" root .ecom-collection__product-item:hover  .ecom-collection__product--actions",properties:{opacity:""}}},{name:"background_color",label:this.$t("background"),type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:i=>i.tab==="normal"}},css:{properties:{"background-color":""}}},{name:"background_color_hover",label:this.$t("background"),type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:i=>i.tab==="hover"}},css:{selector:" root .ecom-collection__product-item:hover  .ecom-collection__product--actions",properties:{"background-color":""}}},{name:"boxShadow",label:this.$t("box_shadow"),type:"popup",options:{oneline:!0,type:"box-shadow",visible:i=>i.tab==="normal"},css:{}},{name:"boxShadowHoverMode",label:this.$t("box_shadow"),type:"popup",options:{oneline:!0,type:"box-shadow",visible:i=>i.tab==="hover"},css:{selector:" root .ecom-collection__product-item:hover  .ecom-collection__product--actions"}},{name:"border",label:this.$t("border"),type:"popup",options:{oneline:!0,type:"border",visible:i=>i.tab==="normal"},css:{}},{name:"borderHoverMode",label:this.$t("border"),type:"popup",options:{oneline:!0,type:"border-offset",visible:i=>i.tab==="hover"},css:{selector:" root .ecom-collection__product-item:hover  .ecom-collection__product--actions"}},{name:"borderRadius",label:this.$t("border_radius"),type:"dimension",options:{units:"default",type:"radius",responsive:!0,visible:i=>i.tab==="normal"},css:{properties:{"border-radius":"",overflow:"hidden"}}},{name:"borderRadiusHoverMode",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",units:"default",responsive:!0,visible:i=>i.tab==="hover"},css:{selector:" root .ecom-collection__product-item:hover  .ecom-collection__product--actions",properties:{"border-radius":""}}},{type:"number",label:this.$t("transition_duration_span_class_lowercase_ms_span"),name:"transition",options:{min:0,max:1500,visible:{keep_data:!0,condition:i=>i.tab==="hover"}},css:{properties:{transition:"all %value%ms ease"}}},{type:"line"},{type:"dimension",label:this.$t("spacing"),name:"spacing",options:{responsive:!0,units:"default"},css:{properties:{spacing:""}}}]}),s.push({group_title:this.$t("quick_shop_close_button"),group_name:"quickshop_close_button",selector:" .ecom-collection__product-close",visible:[!0,null,"button"].includes(this.active_child_elenent),params:[{type:"number",label:this.$t("width"),name:"width",options:{units:{px:{min:1,max:200}},reset:!1,responsive:!0},css:{properties:{width:"",height:""}}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")}]},css:{isCss:!1}},{name:"background_color",label:this.$t("color"),type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:i=>i.tab==="normal"}},css:{selector:"::before,::after",properties:{"background-color":""}}},{name:"background_color_hover",label:this.$t("color"),type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:i=>i.tab==="hover"}},css:{selector:":hover::before,:hover::after",properties:{"background-color":""}}}]})),s.push({group_alias:"button",visible:[!0,null,"add_to_cart_button"].includes(this.active_child_elenent),options:{group_title:this.$t("add_to_cart_button"),group_name:"add_to_cart_button",selector:" .ecom-collection__product-submit"},modify:{params:[{position:0,fields:[...oe(),{type:"choose",name:"buttonAlignment",liteMode:!0,label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"align-self":""}}}]},{position:30,fields:[{type:"line",liteMode:!0},{type:"paragraph",content:"### "+this.$t("icon"),liteMode:!0},{type:"number",label:this.$t("size"),name:"add_cart_icon_width",liteMode:!0,options:{units:{px:{min:1,max:200}},reset:!1,responsive:!0},css:{properties:{width:"",height:""},selector:" .ecom-collection__product-add-cart-icon svg"}}]}]}},{group_alias:"button",visible:[!0,null,"quick_shop_button"].includes(this.active_child_elenent),options:{group_title:this.$t("quick_shop_button"),group_name:"quick_shop_button",selector:" .ecom-collection__product-form__actions--quickshop"},modify:{params:[{position:0,fields:[...oe(),{type:"choose",name:"buttonAlignment",label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"align-self":""}}}]},{position:30,fields:[{type:"line",liteMode:!0},{type:"paragraph",content:"### "+this.$t("icon"),liteMode:!0},{type:"number",label:this.$t("size"),name:"add_cart_icon_width",liteMode:!0,options:{units:{px:{min:1,max:200}},reset:!1,responsive:!0},css:{properties:{width:"",height:""},selector:" .ecom-collection__product-add-cart-icon svg"}}]}]}}),this.data.settings.show_description&&s.push({group_alias:"text:spacing",visible:[!0,null,"description"].includes(this.active_child_elenent),options:{group_title:this.$t("product_description"),group_name:"product_description",selector:" .ecom-collection__product-description"}}),s.push({group_alias:"button",visible:[!0,null,"sold_out_button"].includes(this.active_child_elenent),options:{group_name:"sold_out_button",group_title:this.$t("sold_out_button"),selector:" .ecom-collection__product-form__actions--soldout"},modify:{params:[{position:0,fields:[...oe(),{type:"choose",name:"buttonAlignment",label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"align-self":""}}}]}]}}),this.data.settings.show_product_quickview&&s.push({group_alias:"button",visible:[!0,null,"quickview_button"].includes(this.active_child_elenent),options:{group_title:this.$t("quickview_button"),group_name:"quickview_button",selector:" .ecom-collection__product--quickview-wrapper > a"},modify:{params:[{position:0,fields:[...oe(),{type:"choose",name:"buttonAlignment",label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"justify-content":""},selector:"root .ecom-collection__product--quickview-wrapper"}}]},{position:30,fields:[{type:"line"},{type:"paragraph",content:"### "+this.$t("icon")},{type:"number",label:this.$t("size"),name:"quickview_icon_width",options:{units:{px:{min:1,max:200}},reset:!1,responsive:!0},css:{properties:{width:"",height:""},selector:"  svg"}},{alias:"spacing",options:{css:{selector:" svg"},name:"quickview_icon_spacing"}}]}]}}),s.push({group_alias:"button",visible:[!0,null,"view_more_button"].includes(this.active_child_elenent),options:{group_title:this.$t("view_more_button"),group_name:"view_more_button",selector:" .ecom-collection__product-form__actions--view-more"},modify:{params:[{position:0,fields:[...oe(),{type:"choose",name:"buttonAlignment",label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"align-self":""}}}]},{position:30,fields:[{type:"line"},{type:"paragraph",content:"### "+this.$t("icon")},{type:"number",label:this.$t("size"),name:"viewmore_icon_width",options:{units:{px:{min:1,max:200}},reset:!1,responsive:!0},css:{properties:{width:"",height:""},selector:" svg"}},{alias:"spacing",options:{css:{selector:" .ecom-collection__product-view-more-icon"},name:"viewmore_icon_spacing"}}]}]}}),this.data.settings.show_badges||((S=this.data.settings)==null?void 0:S.show_sale_badge)){let i={params:[{position:0,fields:[{alias:"align-self",options:{label:this.$t("alignment")}}]}]};s.push({group_alias:"button:label",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"sale_price_badge",group_title:this.$t("sale_price_badge"),selector:" .ecom-collection__product-badge .ecom-collection__product-price--bage-sale"},modify:i},{group_alias:"button:label",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"sale_badge",group_title:this.$t("sale_badge"),selector:" .ecom-collection__product-badge .ecom-collection__product-badge--sale"},modify:i},{group_alias:"button:label",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"sold_out_badge",group_title:this.$t("sold_out_badge"),selector:" .ecom-collection__product-badge .ecom-collection__product-badge--sold-out"},modify:i}),(this.badge_tags.length||((C=this.metafield_tag)==null?void 0:C.length))&&s.push({group_alias:"button:label",visible:[!0,null,"button"].includes(this.active_child_elenent),options:{group_name:"custom_badge",group_title:this.$t("custom_badge"),selector:" .ecom-collection__product-badge .ecom-collection__product-badge--custom"},modify:i})}(this.data.settings.show_vendor||this.data.settings.show_type||this.data.settings.show_sku)&&(this.data.settings.show_vendor&&s.push({group_alias:"text:spacing",visible:[!0,null,"vendor"].includes(this.active_child_elenent),options:{group_name:"show_vendor",group_title:this.$t("vendor"),selector:" .ecom-collection__product-item-vendor a"},modify:{remove:{index:1,length:1},params:[{name:"alignment",label:this.$t("alignment"),type:"choose",options:{type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{display:"flex","justify-content":""}}}]}}),this.data.settings.show_sku&&(s.push({group_alias:"text:spacing",visible:[!0,null,"meta"].includes(this.active_child_elenent),options:{group_name:"show_sku",group_title:this.$t("sku"),selector:" .ecom-collection__product-item-sku-element"},modify:{remove:{index:1,length:1},params:[{name:"alignment",label:this.$t("alignment"),type:"choose",options:{type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{display:"flex","justify-content":""}}}]}}),s.push({group_alias:"text:spacing",visible:[!0,null,"meta"].includes(this.active_child_elenent),options:{group_name:"show_sku_title",group_title:this.$t("sku_title"),selector:" .ecom-collection__product-item-sku-title"},modify:{remove:{index:1,length:1}}})),this.data.settings.show_type&&s.push({group_alias:"text:spacing",visible:[!0,null,"show_type"].includes(this.active_child_elenent),options:{group_name:"show_type",group_title:this.$t("product_type"),selector:" .ecom-collection__product-item-type a"},modify:{remove:{index:1,length:1},params:[{name:"alignment",label:this.$t("alignment"),type:"choose",options:{type:"text-align",values:["flex-start","center","flex-end"]},css:{selector:"root  .ecom-collection__product-item-type",properties:{"justify-content":""}}}]}})),this.data.settings.show_product_rating&&s.push({group_alias:"text:spacing",visible:[!0,null,"rating"].includes(this.active_child_elenent),options:{group_title:this.$t("rating"),group_name:"product_rating",selector:" .ecom-collection__product-rating-wrapper"},modify:{remove:{index:1,length:1},params:[{name:"alignment",label:this.$t("alignment"),type:"choose",options:{type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{display:"flex","justify-content":""}}}]}}),this.data.settings.enable_countdown&&(s.push({group_alias:"box",visible:[!0,null,"countdown"].includes(this.active_child_elenent),options:{group_name:"countdown_general",group_title:this.$t("countdown_general"),selector:" .ecom-collection__product-countdown-wrapper"},modify:{params:[{position:0,fields:[...oe()]},{position:1,fields:{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:" .ecom-product-single__countdown-container, .ecom-collection__product-countdown-wrapper--title"}}}},{position:30,fields:{alias:"spacing"}}]}},{group_alias:"text:spacing",visible:[!0,null,"countdown"].includes(this.active_child_elenent),options:{group_name:"countdown_title",group_title:this.$t("countdown_title"),selector:" .ecom-collection__product-countdown-wrapper--title"}},{group_alias:"box",visible:[!0,null,"countdown"].includes(this.active_child_elenent),options:{group_title:this.$t("countdown_items"),group_name:"countdown_items",selector:" .ecom-collection__product-time--item"},modify:{params:[{position:0,fields:[{type:"number",label:this.$t("width"),name:"width",options:{units:{px:{min:20,max:200}},reset:!1,responsive:!0},css:{properties:{width:""}}},{type:"number",label:this.$t("height"),name:"height",options:{units:{px:{min:20,max:200}},reset:!1,responsive:!0},css:{properties:{height:""}}}]},{position:30,fields:{alias:"spacing"}}]}},{group_alias:"button:label",visible:[!0,null,"countdown"].includes(this.active_child_elenent),options:{group_name:"countdown_number",group_title:this.$t("countdown_number"),selector:" .ecom-collection__product-time--number"},modify:t},{group_alias:"button:label",visible:[!0,null,"countdown"].includes(this.active_child_elenent),options:{group_name:"countdown_label",group_title:this.$t("countdown_label"),selector:" .ecom-collection__product-time--label"},modify:t}),this.data.settings.enable_progress_bar&&(s.push({group_name:"progress_bar",group_title:this.$t("progress_bar"),visible:[!0,null,"countdown"].includes(this.active_child_elenent),selector:" .ecom-collection__product-countdown-progress-bar--wrap",params:[{type:"number",name:"maxWidth",label:this.$t("width"),options:{responsive:!0,reset:!0,units:{"%":{min:0,max:100},px:{min:0,max:500},vw:{min:0,max:100}}},css:{properties:{"max-width":""}}},{type:"number",name:"height",label:this.$t("height"),options:{responsive:!0,reset:!0,units:{px:{min:0,max:50},vh:{min:0,max:100}}},css:{selector:" .ecom-product-single__countdown-progress-bar--timer",properties:{height:"","--ecom-countdown-max-height":""}}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"active",title:this.$t("active")}]},css:{isCss:!1}},{type:"background",label:this.$t("background"),name:"background",options:{oneline:!0,visible:{keep_data:!0,condition:i=>i.tab==="normal"}},css:{properties:{background:""}}},{type:"dimension",name:"borderRadius",label:this.$t("border_radius"),options:{type:"radius",units:"default",visible:{keep_data:!0,condition:i=>i.tab==="normal"}},css:{properties:{"border-radius":""}}},{type:"background",label:this.$t("background_active"),name:"backgroundActive",options:{oneline:!0,visible:{keep_data:!0,condition:i=>i.tab==="active"}},css:{selector:" .ecom-product-single__countdown-progress-bar--timer",properties:{background:""}}},{type:"dimension",name:"borderRadiusActive",label:this.$t("border_radius_active"),options:{type:"radius",units:"default",visible:{keep_data:!0,condition:i=>i.tab==="active"}},css:{selector:" .ecom-product-single__countdown-progress-bar--timer",properties:{"border-radius":""}}},{type:"line"},{type:"dimension",label:this.$t("spacing"),name:"spacing",options:{responsive:!0,units:"default"},css:{properties:{spacing:""}}}],position:8}),s.push({group_alias:"text:spacing",visible:[!0,null,"countdown"].includes(this.active_child_elenent),options:{group_name:"progress_bar_text",group_title:this.$t("progress_bar_text"),selector:" .ecom-collection__product-countdown-progress-bar--value"}}))),this.show_picker&&((this.data.settings.type==="radio"||this.data.settings.option_layout!=="dropdown")&&s.push({group_alias:"text:spacing",visible:[!0,null,"variant"].includes(this.active_child_elenent),options:{group_title:this.$t("variant_radio_name"),group_name:"variant_radio_title",selector:" .ecom-collection__product-picker-radio-label"}},{group_alias:"button:productSwatch",visible:[!0,null,"variant"].includes(this.active_child_elenent),options:{group_title:this.$t("variant_radio"),group_name:"variant_radio",selector:" .ecom-collection__product-swatch-item"},modify:{params:{position:0,fields:[{type:"choose",name:"alignment",label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["start","center","end"]},css:{selector:"root .ecom-collection__product-picker-radio-list,root .ecom-collection__product-picker-images-list",properties:{"justify-content":""}}},{alias:"text-align",options:{label:this.$t("text_alignment")},css:{selector:" .ecom-collection__product-swatch-item"}}]}}}),(this.data.settings.type==="dropdown"||this.data.settings.option_layout==="dropdown")&&s.push({group_alias:"text:spacing",visible:[!0,null,"variant"].includes(this.active_child_elenent),options:{group_title:this.$t("variant_select_title"),group_name:"variant_select_title",selector:" .selector-wrapper label, .ecom-collection__product-picker-dropdown-label"}},{group_alias:"input",visible:[!0,null,"variant"].includes(this.active_child_elenent),options:{group_title:this.$t("variant_dropdown"),group_name:"variant_select",selector:" .selector-wrapper select, .ecom-collection__product-picker-dropdown-list, .ecom-collection__product-picker-selection select"},modify:{params:{position:1,fields:{type:"choose",name:"alignment",label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["start","center","end"]},css:{properties:{"align-self":""}}}},remove:[{index:1,length:1},{index:4,length:1}]}}),(this.data.settings.type==="color"||this.data.settings.type==="image"||this.data.settings.type==="shopify_color")&&s.push({group_alias:"text:spacing",visible:[!0,null,"variant"].includes(this.active_child_elenent),options:{group_title:this.$t("variant_swatch_name"),group_name:"variant_swatch_title",selector:" .ecom-collection__product-picker-main-label"}},{group_title:this.$t("variant_swatch"),visible:[!0,null,"variant"].includes(this.active_child_elenent),group_name:"variant_swatch",selector:" .ecom-collection__product-picker-colors-list, .ecom-collection__product-picker-images-list",params:[{type:"choose",name:"justifyContent",label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"justify-content":""}}},{type:"background",name:"backgroundWraper",label:this.$t("background"),css:{properties:{background:""}}},{type:"popup",name:"borderWraper",label:this.$t("border"),options:{type:"border"},css:{properties:{border:""}}},{type:"dimension",label:this.$t("border_radius"),name:"border-radiusWraper",options:{type:"radius",units:"default"},css:{properties:{"border-radius":""}}},{type:"dimension",name:"spacingWraper",label:this.$t("spacing"),options:{units:"default",responsive:!0},css:{properties:{spacing:""}}},{type:"line"},{type:"paragraph",content:"### "+this.$t("item")},{type:"number",name:"width",label:this.$t("width"),options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3}}},css:{properties:{width:""},selector:" li"}},{type:"number",name:"height",label:this.$t("height"),options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3}}},css:{properties:{height:""},selector:" li"}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")},{name:"active",title:this.$t("active")}]},css:{isCss:!1}},{name:"boxShadow",label:this.$t("box_shadow"),type:"popup",options:{oneline:!0,type:"box-shadow",visible:i=>i.tab==="normal"},css:{selector:" li"}},{name:"boxShadowHoverMode",label:this.$t("box_shadow"),type:"popup",options:{oneline:!0,type:"box-shadow",visible:i=>i.tab==="hover"},css:{selector:" li:not(.ecom-product-swatch-item--active):hover"}},{name:"boxShadowActiveMode",liteMode:!0,label:this.$t("box_shadow"),type:"popup",options:{oneline:!0,type:"box-shadow",visible:i=>i.tab==="active"},css:{selector:" li.ecom-product-swatch-item--active"}},{name:"border",label:this.$t("border"),type:"popup",options:{oneline:!0,type:"border",visible:i=>i.tab==="normal"},css:{selector:" li"}},{name:"borderHoverMode",label:this.$t("border"),type:"popup",options:{oneline:!0,type:"border-offset",visible:i=>i.tab==="hover"},css:{selector:" li:not(.ecom-product-swatch-item--active):hover"}},{name:"borderActiveMode",label:this.$t("border"),type:"popup",options:{oneline:!0,type:"border-offset",visible:i=>i.tab==="active"},css:{selector:" li.ecom-product-swatch-item--active"}},{name:"borderRadius",label:this.$t("border_radius"),type:"dimension",options:{units:"default",type:"radius",responsive:!0,visible:i=>i.tab==="normal"},css:{selector:" li, li img, li .ecom-collection__product-picker-colors-item--preview",properties:{"border-radius":"",overflow:"hidden"}}},{name:"borderRadiusHoverMode",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",units:"default",responsive:!0,visible:i=>i.tab==="hover"},css:{selector:" li:not(.ecom-product-swatch-item--active):hover, li:not(.ecom-product-swatch-item--active):hover img, li:not(.ecom-product-swatch-item--active):hover .ecom-collection__product-picker-colors-item--preview",properties:{"border-radius":""}}},{name:"borderRadiusActiveMode",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:i=>i.tab==="active"},css:{selector:" li.ecom-product-swatch-item--active, li.ecom-product-swatch-item--active img, li.ecom-product-swatch-item--active .ecom-collection__product-picker-colors-item--preview",properties:{"border-radius":""}}},{type:"number",label:this.$t("transition_duration_span_class_lowercase_ms_span"),name:"transition",liteMode:!0,options:{min:0,max:1500,visible:{keep_data:!0,condition:i=>i.tab==="hover"}},css:{selector:" li",properties:{transition:"all %value%ms ease"}}},{type:"line"},{type:"dimension",label:this.$t("spacing"),name:"spacing",options:{responsive:!0,units:"default"},css:{selector:" li",properties:{spacing:""}}}]})),this.data.settings.show_input_quantity&&(s.push({group_alias:"input",visible:[!0,null,"quantity"].includes(this.active_child_elenent),options:{group_title:this.$t("quantity"),group_name:"input_quantity",selector:"root .ecom-collection__product-quantity-input"},modify:{remove:[{index:7,length:1},{index:9,length:2}],params:[{position:0,fields:[{type:"paragraph",content:this.$t("b_quantity_box_b")},{type:"number",name:"width_input_quantity",label:this.$t("width"),options:{units:{"%":{min:0,max:100},px:{min:0,max:1e3},vw:{min:0,max:100}}},css:{selector:`${this.data.settings.show_plus_minus_button?"root .ecom-collection__product-quantity--wrapper":"root .ecom-collection__product-quantity-input"}`,properties:{width:""}}},{type:"number",name:"height_input_quantity",label:this.$t("height"),options:{units:{px:{min:0,max:200}}},css:{selector:`${this.data.settings.show_plus_minus_button?"root .ecom-collection__product-quantity--wrapper":"root .ecom-collection__product-quantity-input"}`,properties:{height:""}}},{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:`${this.data.settings.show_plus_minus_button?"root .ecom-collection__product-quantity--wrapper":"root .ecom-collection__product-quantity-input"}`,properties:{"justify-content":"","align-self":`${this.data.settings.quantity_inline?"center":""}`}}}},{alias:"spacing",options:{label:this.$t("spacing_quantity_box"),name:"spacing_box",css:{selector:"root .ecom-collection__product-quantity--wrapper"},simple:!0}},{type:"paragraph",content:this.$t("b_quantity_input_b")}]}]}}),s.push({group_alias:"icon:hover",visible:[!0,null,"quantity"].includes(this.active_child_elenent),options:{group_title:this.$t("minus"),group_name:"quanity_minus",selector:" .ecom-collection__quantity-controls-minus"},modify:{params:[{position:10,fields:{type:"dimension",label:this.$t("padding"),name:"padding",options:{units:"default",simple:!0}}}]}}),s.push({group_alias:"icon:hover",visible:[!0,null,"quantity"].includes(this.active_child_elenent),options:{group_title:this.$t("plus"),group_name:"quanity_plus",selector:" .ecom-collection__quantity-controls-plus"},modify:{params:[{position:10,fields:{type:"dimension",label:this.$t("padding"),name:"padding",options:{units:"default",simple:!0}}}]}})),this.data.settings.show_product_wishlist&&s.push({group_name:"product_wishlist",visible:[!0,null,"wishlist"].includes(this.active_child_elenent),group_title:this.$t("wishlist"),selector:" .ecom-collection__product--wishlist-wrapper",params:[...oe(),{alias:"spacing"}]});let n=[];this.isArrow()&&n.push({title:this.$t("navigator"),type:"swiper:nav"}),this.isPagination()&&n.push({title:this.$t("pagination"),type:"swiper:pagination"});let e={};return this.isCombined==="combine"&&(e={visible:[!0,null].includes(this.active_child_elenent),params:[{alias:"spacing",options:{name:"spacingNavigation",css:{selector:" .ecom-swiper-navigation"}}},{type:"line"}],remove:{name:"justify-content"}}),this.$helpers.hasAutoplayToggle((M=this.data)==null?void 0:M.settings)&&s.push({group_alias:"swiper:autoplay",options:{group_title:this.$t("pause_button"),selector:" .ecom-collection__product-container"}}),n.length&&((y=this.data)==null?void 0:y.settings.layout)==="slider"&&(this.data.settings.slider_pagination_style==="progress"&&this.isPagination()&&(e.params=[{position:50,fields:[{type:"line"},{type:"paragraph",content:`<b>=== ${this.$t("progress_bar")} ===</b>`},{type:"number",name:"widthProgress",label:this.$t("width"),options:{units:{"%":{min:1,max:100}}},css:{selector:" .ecom-swiper-pagination.ecom-swiper-pagination-progressbar.ecom-swiper-pagination-horizontal",important:!0,properties:{width:""}}},{type:"number",name:"sizeProgress",label:this.$t("height"),options:{units:{px:{min:1,max:50}}},css:{selector:" .ecom-swiper-pagination-progressbar",properties:{"--ecom-swiper-pagination-progressbar-size":""}}},{type:"color",name:"progress",label:this.$t("progress"),options:{global:{type:"colors"},oneline:!0},css:{selector:" .ecom-swiper-pagination-progressbar-fill",properties:{"background-color":""}}},{type:"color",name:"track",label:this.$t("track"),options:{global:{type:"colors"},oneline:!0},css:{selector:" .ecom-swiper-pagination-progressbar",properties:{"background-color":""}}},{alias:"spacing",options:{name:"spacingPaginationProgress",css:{selector:" .ecom-swiper-pagination-position.ecom-swiper-pagination-progressbar"}}}]}]),s.push({group_alias:n,visible:[!0,null].includes(this.active_child_elenent),options:{group_title:this.$t("navigation"),group_name:"slider_arrow",selector:" .ecom-collection__product-container"},modify:e})),s.filter(i=>i)}}},Go={class:"ecom-collection__product-wrapper"},Ko=["data-position"],Xo=["data-pagination","data-week","data-day","data-hour","data-minute","data-second","data-sale","data-review-platform","innerHTML","data-countdown-shows","data-translate"],ei=["data-navigator-type"],ti={class:"ecom-flex-center"},oi=["innerHTML"],ii={class:"ecom-swiper-pagination"},ni=["innerHTML"],si={key:2,class:"ecom-swiper-navigation-position"},ai=["innerHTML"],ri=["innerHTML"],li={key:3,class:"ecom-swiper-pagination-position ecom-swiper-pagination"},ci={key:0,class:"ecom-collection__product-loading ecom-dn"},pi={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"none",display:"block","shape-rendering":"auto"},width:"48px",height:"48px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"};function di(t,s,n,e,b,S){var C,M,y,i,I,D,L;return ie(),ne("div",{class:"ecom-element ecom-collection ecom-collection__product",onSetactive:s[0]||(s[0]=(...B)=>t.setActiveElement&&t.setActiveElement(...B))},[j("div",Go,[j("div",{class:Vo(["ecom-collection__product-container ecom-swiper-a11y-host",["ecom-collection__product-container_"+((C=t.data)==null?void 0:C.template)]])},[t.$helpers.hasAutoplayToggle(t.data.settings)?(ie(),ne("button",{key:0,type:"button",class:"ecom-swiper-autoplay-toggle","data-position":((M=t.data.settings)==null?void 0:M.a11y_autoplay_control_position)||"bottom-right","data-state":"playing","data-label-pause":"Pause automatic slide show","data-label-play":"Start automatic slide show","aria-label":"Pause automatic slide show"},s[1]||(s[1]=[j("svg",{class:"ecom-swiper-autoplay-toggle__pause",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},[j("path",{d:"M8 5h3v14H8zM13 5h3v14h-3z"})],-1),j("svg",{class:"ecom-swiper-autoplay-toggle__play",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},[j("path",{d:"M8 5v14l11-7z"})],-1)]),8,Ko)):ve("",!0),j("div",{class:Vo(["ecom-collection__product-main",[{"ecom-swiper-container":t.layout==="slider"},"ecom-collection_product_template_"+((y=t.data)==null?void 0:y.template)]]),"data-pagination":t.data.settings.pagination_type,"data-week":t.lang(t.data.settings.text_week,"text_week"),"data-day":t.lang(t.data.settings.text_day,"text_day"),"data-hour":t.lang(t.data.settings.text_hour,"text_hour"),"data-minute":t.lang(t.data.settings.text_minute,"text_minute"),"data-second":t.lang(t.data.settings.text_second,"text_second"),"data-sale":t.lang(t.data.settings.bage_sale),"data-review-platform":t.liquid("review_platform"),innerHTML:t.productItemsHtml,"data-countdown-shows":t.shows_countdown,"data-translate":t.canMultipleLanguages},null,10,Xo),t.isNavigation&&t.isCombined=="combine"?(ie(),ne("div",{key:1,class:"ecom-swiper-navigation","data-navigator-type":t.isCombined=="combine"},[j("div",ti,[we(j("button",{class:"ecom-swiper-button ecom-swiper-button-prev",innerHTML:t.data.settings.slider_prev_icon},null,8,oi),[[ye,t.isArrow()]]),we(j("div",ii,null,512),[[ye,t.isPagination()]]),we(j("button",{class:"ecom-swiper-button ecom-swiper-button-next",innerHTML:(i=t.data.settings)==null?void 0:i.slider_next_icon},null,8,ni),[[ye,t.isArrow()]])])],8,ei)):ve("",!0),t.isNavigation&&t.isCombined!="combine"?we((ie(),ne("div",si,[j("button",{style:No(t.sliderNav),class:"ecom-swiper-button ecom-swiper-button-prev",innerHTML:(I=t.data.settings)==null?void 0:I.slider_prev_icon},null,12,ai),j("button",{style:No(t.sliderNav),class:"ecom-swiper-button ecom-swiper-button-next",innerHTML:(D=t.data.settings)==null?void 0:D.slider_next_icon},null,12,ri)],512)),[[ye,t.isArrow()]]):ve("",!0),t.isNavigation&&t.isCombined!="combine"?we((ie(),ne("div",li,null,512)),[[ye,t.isPagination()]]):ve("",!0)],2),((L=t.data)==null?void 0:L.template)==="collection"?(ie(),ne("div",ci,[(ie(),ne("svg",pi,s[2]||(s[2]=[j("path",{d:"M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50",fill:"#0a0a0a",stroke:"none"},[j("animateTransform",{attributeName:"transform",type:"rotate",dur:"0.5434782608695652s",repeatCount:"indefinite",keyTimes:"0;1",values:"0 50 51;360 50 51"})],-1)])))])):ve("",!0)])],32)}const vi=Zo(Oo,[["render",di]]);Oo.__docgenInfo={exportName:"default",displayName:"Collectionproducts",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Collection/Product/Product.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Collection/Product/script.js","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/collectionProductCSR.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{vi as default};
//# sourceMappingURL=Product.e8fbb51e.js.map
