import{L as Lo,E as zo,J as Ao,C as Do,b as et,_ as To}from"./preview.95a7df14.js";import{v as Eo,o as G,a as ot,z as qo,E as it,y as L,x as So,J as ct,L as pt,I as Co}from"./vue.esm-bundler.b9dec9d9.js";import"./chunk-KSYMO6G6.f719e32d.js";import"./index.e850844b.js";import"./iframe.048ad53f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.f037b798.js";const Mo={name:"Collectionproducts",presets:!0,vendors:["shopify_option_selection_js","countdown_js","slider_js","slider_css"],hasChild:!0,mixins:[Lo,zo,Ao,Do],props:{data:{type:Object,default(){return{}}}},data(){return{jsreactives:["pagination_style","slidesPerView","slidesPerView__tablet","slidesPerView__mobile","slidesPerGroup","slidesPerGroup__tablet","slidesPerGroup__mobile","spaceBetween","spaceBetween__tablet","spaceBetween__mobile","text_minute","text_hour","text_week","text_second","shows_countdown","show_featured_media","show_ground_price","slider_speed","slider_speed__tablet","slider_speed__mobile","format_date","hide_day_of_the_week","show_product_quickview","type","option_layout"]}},computed:{getPermission(){return this.$store.getters["global/getPermission"]},canMultipleLanguages(){return this.getPermission("translates",!1)},settings(){const o=[{group_title:this.$t("general"),params:[{type:"paragraph",options:{warnings:{content:this.$t("results_in_editor_is_sample_data")}}},{type:"popup",label:this.$t("layout"),name:"layout",value:"grid",options:{type:"dropdown",default:!1,preview:"title",values:{list:this.$t("list"),grid:this.$t("grid"),slider:this.$t("slider")}},css:{isCss:!1}},{label:this.$t("style"),name:"style",type:"popup",options:{preview:"title",type:"dropdown",values:{vertical:this.$t("style")+" 1",horizontal:this.$t("style")+" 2",absolute:this.$t("style")+" 3"},default:!1,visible:{keep_data:!1,condition:t=>["grid","slider"].includes(t.layout)}}},{type:"popup",label:this.$t("image_ratio"),name:"image_ratio",value:"adapt",options:{type:"dropdown",default:!1,icon_type:"percent",preview:"title",values:{adapt:this.$t("adapt_to_image"),portrait:this.$t("portrait"),square:this.$t("square")}}},{type:"number",label:this.$t("maximum_results_to_show"),description:this.canUseCustomLiquidForCSR?this.$t("maximum_results_to_show_des",{max:12}):"",name:"limit",options:{min:1,max:100}},{type:"number",label:this.$t("items_per_row"),name:"slider_items",options:{responsive:!0,min:1,max:9,step:1,slider:!0,visible:{condition:t=>t.layout==="grid"||t.layout==="list"}},css:{selector:" .ecom-collection__product--wrapper-items",properties:{"grid-template-columns":"repeat(%value%,1fr)"}}},{name:"column_gap",label:this.$t("column_gap"),type:"number",options:{min:0,max:100,responsive:!0,visible:{keep_data:!1,condition:t=>t.layout=="grid"}},css:{properties:{"column-gap":"%value%px"},selector:"root .ecom-collection__product--wrapper-items "}},{type:"number",label:this.$t("image_width"),name:"image_grid_template_column",options:{responsive:!0,units:{"%":{min:0,max:100}},visible:t=>t.layout==="list"},css:{selector:" .ecom-collection__product-item--wrapper",properties:{"grid-template-columns":"%value% auto"}}},{type:"number",label:this.$t("spacing"),name:"product_list_spacing",options:{responsive:!0,units:{px:{min:0,max:100}},visible:t=>t.layout==="list"},css:{selector:" .ecom-collection__product-item--wrapper",properties:{"grid-gap":"%value%"}}},{name:"row_gap",label:this.$t("row_gap"),type:"number",options:{min:0,max:100,responsive:!0,visible:{keep_data:!1,condition:t=>t.layout!=="slider"}},css:{properties:{"row-gap":"%value%px"},selector:"root .ecom-collection__product--wrapper-items "}},{type:"line",name:"lineGeneral",options:{visible:function(t){return t&&t.layout==="list"}}}]},{group_title:this.$t("product_card"),params:[{type:"toggle",name:"open_new_tab",label:this.$t("open_the_product_detail_page_in_a_new_tab"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"toggle",label:this.$t("product_link_with_collection_handle"),name:"link_with_collection",value:!0,options:{values:{on:{label:this.$t("show"),value:!0},off:{label:this.$t("hide"),value:!1}}},css:!1},{type:"toggle",name:"show_secondary_image",value:!0,label:this.$t("show_second_image_on_hover"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"toggle",name:"show_description",label:this.$t("show_short_description"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},css:{isCss:!1}},{type:"number",name:"limit_short_description",value:50,options:{min:10,max:1e3,visible:function(t){return t&&t.show_description===!0}},label:this.$t("maximum_words_to_show")},{type:"toggle",name:"show_vendor",options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},label:this.$t("show_vendor")},{type:"toggle",name:"show_sku",options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},label:this.$t("show_sku")},{type:"text",name:"sku_title",label:this.$t("sku_label"),options:{visible:function(t){return t&&t.show_sku===!0}}},{type:"toggle",name:"show_type",options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},label:this.$t("show_type")},{type:"toggle",name:"show_price",options:{oneline:!0,values:{on:{label:this.$t("yes"),value:"block"},off:{label:this.$t("no"),value:"none"}}},label:this.$t("show_price"),css:{}},{type:"toggle",name:"show_ground_price",options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},label:this.$t("show_ground_price"),description:this.$t("see_detailed_guide_https_help_shopify_com_en_manual_intro_to_shopify_initial_setup_sell_in_germany_price_per_unit_to_enable_ground_price"),css:{}},{name:"price_type",type:"popup",label:this.$t("price_display"),value:"first_price",options:{default:!1,type:"dropdown",preview:"title",values:{first_price:this.$t("first_available_variant"),min_price:this.$t("price_min")},visible:function(t){return t&&t.show_price==="block"}}},{type:"text",label:this.$t("price_from_text"),name:"price_from_text",value:"From",placeholder:this.$t("from")},{type:"line"},{type:"toggle",name:"show_input_quantity",options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},label:this.$t("show_input_quantity"),css:{}},{type:"toggle",name:"show_plus_minus_button",label:this.$t("show_plus_and_minus_button"),options:{visible:t=>t.show_input_quantity===!0,values:{on:{value:!0,label:this.$t("yes")},off:{value:!1,label:this.$t("no")}}}},{type:"toggle",name:"quantity_inline",label:this.$t("inline_with_button_add_to_cart"),description:this.$t("this_option_only_works_when_the_position_of_add_to_cart_button_is_default_or_relative"),options:{visible:t=>t.show_input_quantity===!0,values:{on:{value:!0,label:this.$t("yes")},off:{value:!1,label:this.$t("no")}}}},{type:"line"},{type:"toggle",name:"show_sale_badge",value:!0,options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},label:this.$t("show_sale_badge")},{name:"sale_badge_type",type:"popup",label:this.$t("sale_badge_type"),value:"percent",options:{default:!1,type:"dropdown",preview:"title",values:{percent:this.$t("percent"),amount:this.$t("amount_label")},visible:function(t){return t&&t.show_sale_badge===!0}}},{name:"bage_sale",label:this.$t("sale"),type:"text",placeholder:this.$t("_sale"),description:this.$t("badge_sale_off_value_will_replace_in_block_sale"),options:{visible:function(t){return t&&t.show_sale_badge}}},{type:"toggle",name:"show_product_rating",label:this.$t("use_rating_3_rd_party_app"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},description:this.$t("select_the_review_app_in_settings_settings_app_settings_apps")},{type:"toggle",name:"show_product_quickview",label:this.$t("use_quickview_3_rd_party_app"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},description:this.$t("select_the_quickview_app_in_settings_settings_app_settings_apps")},{type:"text",name:"quickview_text",label:this.$t("quickview_text"),options:{visible:function(t){return t&&t.show_product_quickview},placeholder:this.$t("quickview")}},{type:"picker",label:this.$t("quickview_icon"),name:"quickview_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:function(t){return t.show_product_quickview}}},{type:"toggle",name:"show_badges",value:!0,label:this.$t("show_badges"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},css:{isCss:!1},description:this.$t("renders_sale_or_sold_out_and_tags_if_the_product_matches_the_condition")},{type:"textarea",label:this.$t("show_when_product_contains_tags"),name:"badge_tags",description:this.$t("note_divide_value_with_br_eg_hot_new_clothing"),options:{height:1,visible:function(t){return t.show_badges}}}]},{group_alias:"swiper",options:{group_title:this.$t("slider_settings"),options:{keep_data:!1,visible:t=>t.layout=="slider"}},modify:{remove:{name:["line_pagination","title_pagination","slider_pagination_style","slider_spacing_row"]}}},{group_title:this.$t("result_title"),params:[{type:"popup",name:"title_tag",label:this.$t("span_class_uppercase_html_span_tag"),value:"h3",options:{default:!1,preview:"title",type:"dropdown",values:{h1:"H1",h2:"H2",h3:"H3",h4:"H4",h5:"H5",h6:"H6"}}},{type:"toggle",name:"title_one_row",label:this.$t("show_title_on_one_row"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}}]},{group_title:this.$t("product_variant"),params:[{type:"popup",name:"show_picker",options:{type:"dropdown",default:!1,preview:"title",values:{show:this.$t("yes"),hide:this.$t("no")}},css:{isCss:""},label:this.$t("show_variant_picker")},{type:"toggle",name:"show_actions",value:!0,options:{oneline:!0,preview:"title",visible:function(t){return t.show_picker==="hide"},values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},label:this.$t("show_button")},{type:"popup",label:this.$t("layout"),name:"type",value:"dropdown",options:{type:"dropdown",preview:"title",values:{dropdown:this.$t("dropdown"),image:this.$t("swatch_image_picker"),color:this.$t("swatch_color_picker"),radio:this.$t("radio")},default:!1,visible:function(t){return t&&t.show_picker==="show"}},css:{isCss:!1}},{type:"text",label:this.$t("product_option_to_show_as_swatch"),name:"option",value:"Color",placeholder:this.$t("color"),description:this.$t("note_divide_value_with_eg_option_1_option_2"),options:{toolbar:!1,visible:function(t){return t&&t.show_picker==="show"&&t.type&&["image","color"].includes(t.type)}}},{type:"paragraph",name:"color_description",content:this.$t("set_your_color_here_extensions_3"),options:{visible:function(t){return t.type==="color"}}},{type:"popup",label:this.$t("shown_other_options_as"),name:"option_layout",value:"dropdown",options:{type:"dropdown",default:!1,visible:function(t){return t&&t.show_picker==="show"&&t.type&&["image","color"].includes(t.type)},preview:"title",values:{dropdown:this.$t("dropdown"),radio:this.$t("radio"),hide:this.$t("hide")}}},{type:"popup",name:"show_option_name",value:!0,options:{oneline:!0,type:"dropdown",preview:"title",default:!1,values:{block:this.$t("yes"),none:this.$t("no")},visible:function(t){return t&&t.show_picker==="show"}},label:this.$t("show_option_name"),css:{selector:" .ecom-collection__product-picker-selection .selector-wrapper label",properties:{display:""}}},{type:"popup",name:"quickshop_layout",label:this.$t("quick_shop_layout"),options:{type:"dropdown",preview:"title",visible:function(t){return t&&t.show_picker==="show"&&t.type!=="dropdown"},default:!1,values:{lite:this.$t("show_main_option_only"),full:this.$t("show_all_product_options")}}},{type:"line"},{type:"toggle",label:this.$t("show_view_more_button_only"),name:"view_more_only",default:!1,options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},oneline:!0}},{type:"text",label:this.$t("view_more_text"),name:"view_more_text",options:{}},{type:"picker",label:this.$t("view_more_icon"),name:"view_more_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"popup",label:this.$t("icon_position"),name:"view_more_icon_position",options:{type:"dropdown",preview:"title",values:{before:this.$t("before"),after:this.$t("after")},visible:{keep_data:!1,condition:t=>t.view_more_icon}}},{type:"number",label:this.$t("view_more_icon_spacing"),name:"viewmore_icon_spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:t=>t.view_more_icon}},css:{selector:" .ecom-collection__product-form__actions--view-more",properties:{gap:""}}},{type:"line",name:"line_under_viewmore",options:{visible:t=>t&&!t.view_more_only}},{type:"text",label:this.$t("add_to_cart_text"),name:"add_to_cart",options:{visible:function(t){return t&&!t.view_more_only}}},{type:"text",label:this.$t("pre_order_text"),name:"pre_order",options:{visible:function(t){return t&&!t.view_more_only}}},{type:"picker",label:this.$t("add_to_cart_icon"),name:"add_cart_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:function(t){return t&&!t.view_more_only}}},{type:"popup",label:this.$t("add_to_cart_icon_position"),name:"add_cart_icon_position",options:{type:"dropdown",preview:"title",values:{before:this.$t("before"),after:this.$t("after")},visible:{keep_data:!1,condition:t=>t.add_cart_icon&&!t.view_more_only}}},{type:"number",label:this.$t("add_to_cart_icon_spacing"),name:"atc_icon_spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:t=>t.add_cart_icon&&!t.view_more_only}},css:{selector:" .ecom-collection__product-simple-add-to-cart",properties:{gap:""}}},{type:"line",name:"line_under_add",options:{visible:t=>t&&!t.view_more_only}},{type:"text",label:this.$t("sold_out_text"),name:"sold_out_text",options:{visible:function(t){return t&&!t.view_more_only}}},{type:"picker",label:this.$t("icon"),name:"sold_out_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:function(t){return t&&!t.view_more_only}}},{type:"popup",label:this.$t("icon_position"),name:"sold_out_icon_position",options:{type:"dropdown",preview:"title",values:{before:this.$t("before"),after:this.$t("after")},visible:{keep_data:!1,condition:t=>t.sold_out_icon&&!t.view_more_only}}},{type:"number",label:this.$t("ion_spacing"),name:"sold_out_icon_spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:t=>t.sold_out_icon&&!t.view_more_only}},css:{selector:" .ecom-collection__product-form__actions--soldout",properties:{gap:""}}},{type:"line",name:"line_under_sold",options:{visible:function(t){return t&&!t.view_more_only}}},{type:"text",label:this.$t("quick_shop_text"),name:"quick_shop_text",value:"Quick shop",options:{visible:function(t){return t.show_picker==="show"&&["image","color"].includes(t.type)&&t.quickshop_layout!=="full"&&!t.view_more_only}}},{type:"picker",label:this.$t("quick_shop_icon"),name:"quick_shop_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:function(t){return t.show_picker==="show"&&["image","color"].includes(t.type)&&t.quickshop_layout!=="full"&&!t.view_more_only}}},{type:"popup",label:this.$t("quick_shop_icon_position"),name:"quick_shop_icon_position",options:{type:"dropdown",preview:"title",values:{before:this.$t("before"),after:this.$t("after")},visible:{keep_data:!1,condition:t=>t.show_picker==="show"&&t.quick_shop_icon&&!t.view_more_only}}},{type:"number",label:this.$t("quick_shop_ion_spacing"),name:"quickshop_icon_spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:t=>t.quick_shop_icon&&!t.view_more_only}},css:{selector:" .ecom-collection__product-form__actions--quickshop",properties:{gap:""}}},{type:"line",name:"line_sprate_cart_action",options:{visible:function(t){return t&&t.show_picker==="show"&&t.view_more_only}}},{type:"popup",name:"action",label:this.$t("after_added_to_cart"),description:this.$t("to_enable_this_feature_you_must_go_to_the_extensions_ajax_cart_settings_tick_on_enable_ajax_cart_extensions_1"),options:{type:"dropdown",default:!1,preview:"title",values:{popup:this.$t("show_cart_popup"),reload:this.$t("reload_page"),message:this.$t("show_a_message"),cart:this.$t("redirect_to_cart_page"),checkout:this.$t("go_to_checkout_page"),link:this.$t("go_to_special_url")}}},{type:"text",name:"added_cart_message",label:this.$t("added_item_to_cart_message"),options:{placeholder:this.$t("added_item_to_your_cart"),visible:function(t){return t&&t.show_picker==="show"&&t.action==="message"}}},{type:"link",label:this.$t("target_url"),name:"link",options:{visible:function(t){return t.action==="link"}}}]},{group_title:this.$t("wishlist_button"),params:[{type:"toggle",name:"show_product_wishlist",label:this.$t("use_wishlist_3_rd_party_app"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},description:this.$t("select_wishlist_app_in_settings_settings_app_settings_apps")},{type:"line"},{type:"toggle",name:"show_wishlist",label:this.$t("use_wishlist_extension_by_ecomposer"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},css:{selector:" .ecom-product__wishlist",properties:{display:""}},description:this.$t("to_use_this_wishlist_option_you_need_to_make_sure_you_installed_the_product_wishlist_extension_before")},{type:"popup",name:"wishlist_visibility",label:this.$t("visibility"),options:{default:!1,preview:"title",type:"dropdown",values:{always:this.$t("always"),hover:this.$t("when_hover"),hover_active:this.$t("when_hover_and_when_active")},visible:{name:"show_wishlist",value:!0}}},{type:"tab",name:"wishlist_tab",options:{visible:{keep_data:!0,condition:t=>t.show_wishlist===!0},tabs:[{name:"normal",title:this.$t("normal")},{name:"added",title:this.$t("added_to_wishlist")}]}},{type:"text",name:"wishlist_label",label:this.$t("wishlist_label"),options:{visible:{keep_data:!0,condition:t=>t.show_wishlist===!0&&t.wishlist_tab==="normal"}}},{type:"picker",name:"wishlist_icon",label:this.$t("wishlist_icon"),options:{online:!0,type:"icon",reset:!0,visible:{keep_data:!0,condition:t=>t.show_wishlist===!0&&t.wishlist_tab==="normal"}}},{type:"text",name:"wishlist_label_added",label:this.$t("wishlist_label"),options:{visible:{keep_data:!0,condition:t=>t.show_wishlist===!0&&t.wishlist_tab==="added"}}},{type:"picker",name:"wishlist_icon_added",label:this.$t("wishlist_icon"),options:{online:!0,type:"icon",reset:!0,visible:{keep_data:!0,condition:t=>t.show_wishlist===!0&&t.wishlist_tab==="added"}}},{type:"textarea",name:"content_tooltip_wishlist",label:this.$t("tooltip_content"),options:{visible:{keep_data:!0,condition:t=>t.show_wishlist===!0&&t.wishlist_tab==="normal"},toolbar:"short",dynamic:!0,height:80}},{type:"textarea",name:"content_tooltip_wishlist_added",label:this.$t("tooltip_content"),options:{visible:{keep_data:!0,condition:t=>t.show_wishlist===!0&&t.wishlist_tab==="added"},toolbar:"short",dynamic:!0,height:80}},{type:"line",options:{visible:{keep_data:!1,condition:t=>t.show_wishlist==!0&&(t.wishlist_icon&&t.wishlist_label||t.wishlist_icon_added&&t.wishlist_label_added)}}},{type:"choose",label:this.$t("horizontal_align"),name:"group_btn_hor_pos1",options:{oneline:!0,responsive:!1,reset:!0,type:"align-x-full",values:["start","center","end"],visible:{keep_data:!1,condition:t=>t.show_wishlist==!0}},css:{selector:" .ecom-product__wishlist",properties:{"justify-content":""}}},{type:"choose",label:this.$t("vertical_align"),name:"group_btn_ver_pos1",options:{oneline:!0,responsive:!1,reset:!0,type:"align-y-full",values:["start","center","end"],visible:{keep_data:!1,condition:t=>t.show_wishlist==!0}},css:{selector:" .ecom-product__wishlist",properties:{"align-items":""}}},{type:"number",label:this.$t("icon_spacing"),name:"icon_spacing_wishlist",options:{units:{px:{min:0,max:100}},visible:{keep_data:!1,condition:t=>t.show_wishlist==!0&&(t.wishlist_icon&&t.wishlist_label||t.wishlist_icon_added&&t.wishlist_label_added)}},css:{selector:" .ecom-product__wishlist-link",properties:{gap:""}}}]},{group_title:this.$t("compare_button"),params:[{type:"toggle",name:"show_compare",label:this.$t("show_compare_button"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:"none"}}},css:{selector:" .ecom-product__compare",properties:{display:""}},description:this.$t("to_use_this_compare_option_you_need_to_make_sure_you_installed_the_product_compare_extension_before")},{type:"popup",name:"compare_visibility",label:this.$t("visibility"),options:{default:!1,preview:"title",type:"dropdown",values:{always:this.$t("always"),hover:this.$t("when_hover"),hover_active:this.$t("when_hover_and_when_active")},visible:{name:"show_compare",value:!0}}},{type:"tab",name:"compare_tab",options:{visible:{keep_data:!0,condition:t=>t.show_compare===!0},tabs:[{name:"normal",title:this.$t("normal")},{name:"added",title:this.$t("added_to_compare")}]}},{type:"text",name:"compare_label",label:this.$t("compare_label"),options:{visible:{keep_data:!0,condition:t=>t.show_compare===!0&&t.compare_tab==="normal"}}},{type:"picker",name:"compare_icon",label:this.$t("compare_icon"),options:{online:!0,type:"icon",reset:!0,visible:{keep_data:!0,condition:t=>t.show_compare===!0&&t.compare_tab==="normal"}}},{type:"text",name:"compare_label_added",label:this.$t("compare_label"),options:{visible:{keep_data:!0,condition:t=>t.show_compare===!0&&t.compare_tab==="added"}}},{type:"picker",name:"compare_icon_added",label:this.$t("compare_icon"),options:{online:!0,type:"icon",reset:!0,visible:{keep_data:!0,condition:t=>t.show_compare===!0&&t.compare_tab==="added"}}},{type:"textarea",name:"content_tooltip_compare",label:this.$t("tooltip_content"),options:{visible:{keep_data:!0,condition:t=>t.show_compare===!0&&t.compare_tab==="normal"},toolbar:"short",dynamic:!0,height:80}},{type:"textarea",name:"content_tooltip_compare_added",label:this.$t("tooltip_content"),options:{visible:{keep_data:!0,condition:t=>t.show_compare===!0&&t.compare_tab==="added"},toolbar:"short",dynamic:!0,height:80}},{type:"choose",label:this.$t("horizontal_align"),name:"group_btn_hor_pos",options:{oneline:!0,responsive:!1,reset:!0,type:"align-x-full",values:["start","center","end"],visible:{keep_data:!1,condition:t=>t.show_compare==!0}},css:{selector:" .ecom-product__compare",properties:{"justify-content":""}}},{type:"choose",label:this.$t("vertical_align"),name:"group_btn_ver_pos",options:{oneline:!0,responsive:!1,reset:!0,type:"align-y-full",values:["start","center","end"],visible:{keep_data:!1,condition:t=>t.show_compare==!0}},css:{selector:" .ecom-product__compare",properties:{"align-items":""}}},{type:"line",name:"compare_line",options:{visible:{keep_data:!1,condition:t=>t.show_compare==!0&&(t.compare_icon&&t.compare_label||t.compare_icon_added&&t.compare_label_added)}}},{type:"number",label:this.$t("icon_spacing"),name:"icon_spacing",options:{units:{px:{min:0,max:100}},visible:{keep_data:!1,condition:t=>t.show_compare==!0&&(t.compare_icon&&t.compare_label||t.compare_icon_added&&t.compare_label_added)}},css:{selector:" .ecom-product__compare-link",properties:{gap:""}}}]},{group_title:this.$t("countdown_promo"),params:[{name:"enable_countdown",value:!0,label:this.$t("enable_countdown"),type:"toggle",options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},css:{isCss:!1}},{name:"enable_progress_bar",label:this.$t("enable_progress_bar"),value:!0,options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},visible:function(t){return t&&t.enable_countdown===!0}},css:{isCss:!1},type:"toggle"},{name:"styleCountdown",label:this.$t("layout"),type:"popup",options:{type:"dropdown",default:!1,preview:"title",values:{column:this.$t("vertical"),row:this.$t("horizontal")}},css:{selector:" .ecom-collection__product-time--item",properties:{display:"inline-flex","flex-direction":""}}},{type:"text",label:this.$t("title"),name:"countdown_title",value:this.$t("hurry_up_the_sale_will_end_on"),placeholder:this.$t("hurry_up_the_sale_will_end_on"),options:{visible:function(t){return t&&t.enable_countdown===!0}}},{type:"line"},{type:"checkbox",name:"shows_countdown",label:this.$t("time_labels_to_show"),options:{values:{week:this.$t("week"),day:this.$t("day"),hour:this.$t("hour"),minute:this.$t("minute"),second:this.$t("second")}}},{type:"paragraph",content:this.$t("see_detailed_https_help_ecomposer_io_docs_elements_shopify_elements_search_result_1_4_20_countdown_20_promo_guide")}]},{group_title:this.$t("edit_labels"),params:[{name:"trans_no_item",label:this.$t("title_when_no_results_found"),type:"text"},{type:"text",name:"vendor_title",value:"Vendor",description:this.$t("this_is_visual_hidden_text"),label:this.$t("product_vendor_title"),placeholder:this.$t("vendor"),options:{visible:function(t){return t.show_vendor}}},{type:"text",name:"type_title",value:"Type",description:this.$t("this_is_visual_hidden_text"),label:this.$t("product_type_title"),placeholder:this.$t("type"),options:{visible:function(t){return t.show_type}}},{type:"text",name:"sale_text",value:"Sale",label:this.$t("sale_badge")},{type:"text",name:"sold_text",value:"Sold out",label:this.$t("sold_out_badge")},{type:"text",name:"added_cart_text",label:this.$t("added_to_cart_text"),options:{placeholder:this.$t("added_item_to_cart")}},{type:"text",name:"text_week",value:"[%-W] week%!W",description:this.$t("example_w_week_w"),label:this.$t("week"),options:{visible:t=>{var h;return(h=t==null?void 0:t.shows_countdown)==null?void 0:h.includes("week")}}},{type:"text",name:"text_day",value:"[%d] day%!D",description:this.$t("example_d_day_d"),label:this.$t("days"),options:{visible:t=>{var h;return(h=t==null?void 0:t.shows_countdown)==null?void 0:h.includes("day")}}},{type:"text",name:"text_hour",value:"[%-H] hour%!H",description:this.$t("example_h_hour_h"),label:this.$t("hours"),options:{visible:t=>{var h;return(h=t==null?void 0:t.shows_countdown)==null?void 0:h.includes("hour")}}},{type:"text",name:"text_minute",value:"[%-M] minute%!M",decription:"Example: [%-M] minute%!M",label:this.$t("minutes"),options:{visible:t=>{var h;return(h=t==null?void 0:t.shows_countdown)==null?void 0:h.includes("minute")}}},{type:"text",name:"text_second",value:"[%-S] second%!S",description:this.$t("example_s_second_s"),label:this.$t("seconds"),options:{visible:t=>{var h;return(h=t==null?void 0:t.shows_countdown)==null?void 0:h.includes("second")}}}]},{group_title:this.$t("product_card_items_ordering"),params:[{type:"number",label:this.$t("title"),name:"order_title",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-title-tag",properties:{order:""}}},{type:"number",label:this.$t("description"),name:"order_description",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-description",properties:{order:""}}},{type:"number",label:this.$t("vendor"),name:"order_vendor",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-item-vendor-element",properties:{order:""}}},{type:"number",label:this.$t("sku"),name:"order_sku",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-item-sku-element",properties:{order:""}}},{type:"number",label:this.$t("type"),name:"order_type",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-item-type-element",properties:{order:""}}},{type:"number",label:this.$t("price"),name:"order_price",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-prices",properties:{order:""}}},{type:"number",label:this.$t("button_action"),name:"order_button",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product--actions",properties:{order:""}}},{type:"number",label:this.$t("review"),name:"order_reivew",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-rating-wrapper",properties:{order:""}}},{type:"number",label:this.$t("variant_form"),name:"order_variant",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-variants",properties:{order:""}}},{type:"number",label:this.$t("count_down"),name:"order_countdown",options:{slider:!0,input:!0,min:-1,max:10,responsive:!0},css:{selector:" .ecom-collection__product-countdown",properties:{order:""}}},{type:"paragraph",content:this.$t("the_blocks_are_arranged_in_order_from_lowest_to_highest_for_example_block_with_value_1_will_be_displayed_first_and_block_with_value_6_will_appear_at_the_bottom")}]}];return o.splice(1,0,{group_title:this.$t("article"),group_name:"",params:[{type:"toggle",name:"show_tag_blog",label:this.$t("show_tag"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"popup",name:"position_tag_blog",label:this.$t("position"),value:"bottomLeft",options:{type:"dropdown",preview:"title",default:!1,values:{topLeft:this.$t("top_left"),topRight:this.$t("top_right"),bottomLeft:this.$t("bottom_left"),bottomRight:this.$t("bottom_right")},visible:t=>t.show_tag_blog}},{type:"toggle",name:"show_date",label:this.$t("show_date"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"popup",label:this.$t("date_format"),name:"format_date",value:"DoW_dd_mm_style_1",options:{preview:"title",type:"dropdown",values:{DoW_dd_mm_style_1:this.$t("dow_dd_mm_style_1"),DoW_dd_mm_style_2:this.$t("dow_dd_mm_style_2"),DoW_mm_dd_style_1:this.$t("dow_mm_dd_style_1"),DoW_mm_dd_style_2:this.$t("dow_mm_dd_style_2"),DoW_dd_mm_yyyy_style_1:this.$t("dow_dd_mm_yyyy_style_1"),DoW_dd_mm_yyyy_style_2:this.$t("dow_dd_mm_yyyy_style_2"),DoW_mm_dd_yyyy_style_1:this.$t("dow_mm_dd_yyyy_style_1"),DoW_mm_dd_yyyy_style_2:this.$t("dow_mm_dd_yyyy_style_2"),DoW_dd_mm_yyyy_style_3:this.$t("dow_dd_mm_yyyy_style_3"),DoW_mm_dd_yyyy_style_3:this.$t("dow_mm_dd_yyyy_style_3"),DoW_yyyy_mm_dd:this.$t("dow_yyyy_mm_dd")},default:!1,visible:function(t){return t.show_date==!0}}},{type:"switch",label:this.$t("hide_days_of_the_week"),name:"hide_day_of_the_week",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},visible:function(t){return t.show_date==!0}}}]}),o.splice(1,0,{group_title:this.$t("page"),group_name:"",params:[{type:"toggle",name:"show_tag_page",label:this.$t("show_tag"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"popup",name:"position_tag_page",label:this.$t("position"),value:"bottomLeft",options:{type:"dropdown",preview:"title",default:!1,values:{topLeft:this.$t("top_left"),topRight:this.$t("top_right"),bottomLeft:this.$t("bottom_left"),bottomRight:this.$t("bottom_right")},visible:t=>t.show_tag_page}}]}),this.data.settings.layout!=="slider"&&o.splice(5,0,{group_title:this.$t("pagination"),group_name:"",params:[...this.canUseCustomLiquidForCSR?[{type:"toggle",name:"show_preview_pagination",label:this.$t("show_preview_pagination"),value:!0,options:{oneline:!0,values:{on:{label:this.$t("enable"),value:!0},off:{label:this.$t("disable"),value:!1}},warnings:{content:this.$t("note_pagination_only_work_on_live_page")}}}]:[],{type:"popup",name:"pagination_type",label:this.$t("pagination"),value:"default",options:{default:!1,type:"dropdown",preview:"title",values:{off:this.$t("off"),default:this.$t("default"),loadmore:this.$t("load_more_button"),infinit:this.$t("infinite_scrolling")}},css:{selector:" .ecom-pagination-navigation",properties:{display:"if(value !== 'off'){return 'flex' }else{ return 'none' }"}}},{type:"text",label:this.$t("load_more_text"),name:"loadmore_text",value:"Load more",options:{placeholder:this.$t("load_more"),visible:function(t){return t.pagination_type==="loadmore"}}},{type:"picker",label:this.$t("icon"),name:"loadmore_icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1,visible:function(t){return t.pagination_type==="loadmore"}}},{type:"choose",label:this.$t("icon_position"),name:"loadmore_icon_position",options:{type:"align-x",values:[-1,1],visible:{keep_data:!1,condition:t=>t.loadmore_icon&&t.pagination_type==="loadmore"}},css:{selector:" .ecom-paginate-action--icon",properties:{order:""}}},{type:"number",label:this.$t("icon_spacing"),name:"loadmore_icon_spacing",options:{units:{px:{min:0,max:200}},visible:{keep_data:!1,condition:t=>t.loadmore_icon&&t.pagination_type==="loadmore"}},css:{selector:" .ecom-paginate-loadmore--content",properties:{gap:""}}},{name:"pagination_style",label:this.$t("pagination_style"),type:"popup",options:{type:"dropdown",default:!1,preview:"title",values:{block:this.$t("block"),inline:this.$t("inline")},visible:function(t){return t.pagination_type==="default"}}},{type:"popup",label:this.$t("pagination_layout"),name:"number_type",value:"dropdown",options:{type:"dropdown",default:!1,values:{text:this.$t("button_next_previous"),text_icon:this.$t("button_next_previous_with_icon"),icon:this.$t("icon")},visible:function(t){return t.pagination_type==="default"}},css:{isCss:!1}},{type:"picker",name:"icon_prev_page",label:this.$t("prev_page_icon"),options:{type:"icon",output:"value",visible:{keep_data:!1,condition:t=>(t.number_type==="icon"||t.number_type==="text_icon")&&t.pagination_type==="default"}}},{type:"picker",name:"icon_next_page",label:this.$t("next_page_icon"),options:{type:"icon",output:"value",visible:{keep_data:!1,condition:t=>(t.number_type==="icon"||t.number_type==="text_icon")&&t.pagination_type==="default"}}},{type:"text",name:"text_prev_page",label:this.$t("prev_page_text"),options:{visible:function(t){return t.number_type!=="icon"&&t.pagination_type==="default"}}},{type:"text",name:"text_next_page",label:this.$t("next_page_text"),options:{visible:function(t){return t.number_type!=="icon"&&t.pagination_type==="default"}}},{type:"number",name:"grid-column-gap",label:this.$t("spacing_between_page_number_span_class_lowercase_px_span"),options:{units:{px:{min:0,max:100}},visible:function(t){return t.pagination_type==="default"}},css:{selector:" .ecom-pagination-navigation",properties:{"grid-column-gap":""}}},{type:"switch",name:"enable_progress_pagination",label:this.$t("show_progress_pagination_bar"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}},visible:function(t){return t.pagination_type==="default"||t.pagination_type==="loadmore"}}},{label:this.$t("text"),name:"text_progress_pagination",type:"text",description:this.$t("ex_viewing_start_end_total"),value:"Viewing {_start} - {_end} of {_total}",options:{visible:function(t){return t&&t.enable_progress_pagination&&(t.pagination_type==="default"||t.pagination_type==="loadmore")}}},{type:"toggle",name:"show_text_first",value:"column",label:this.$t("display_text_above_the_progress"),options:{values:{on:{label:this.$t("yes"),value:"column-reverse"},off:{label:this.$t("no"),value:"column"}},visible:function(t){return t&&t.enable_progress_pagination&&(t.pagination_type==="default"||t.pagination_type==="loadmore")}}},{type:"paragraph",name:"para_wraning",options:{warnings:{content:this.$t("notice_numbers_showing_in_the_editor_are_only_demo_data")},visible:function(t){return t&&t.enable_progress_pagination&&(t.pagination_type==="default"||t.pagination_type==="loadmore")}}}]}),o[0].params.splice(15,0,{type:"toggle",name:"show_featured_media",value:!1,label:this.$t("show_the_featured_image_first"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}}),o[0].params.splice(16,0,{type:"toggle",name:"disable_lazyload",value:!1,label:this.$t("disable_lazyload_image"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}}),o[0].params.splice(17,0,{type:"toggle",name:"enable_preload",value:!1,label:this.$t("enable_preload"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}}),[{type:"line"},{type:"paragraph",content:this.$t("b_placeholder_image_b"),description:this.$t("display_placeholder_image_if_result_does_not_have_an_image")},{label:this.$t("shopify_image"),name:"placeholder_image_shopify",type:"popup",value:"product-1",options:{preview:"title",type:"dropdown",values:{"product-1":this.$t("style")+" 1","product-2":this.$t("style")+" 2","product-3":this.$t("style")+" 3","product-4":this.$t("style")+" 4","product-5":this.$t("style")+" 5","product-6":this.$t("style")+" 6"},default:!1,reset:!1,visible:function(t){return t&&t.placeholder_image!==!0}}},{type:"switch",label:this.$t("upload_custom_image"),name:"placeholder_image",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"picker",label:this.$t("custom_image"),name:"placeholder_image_custom",options:{visible:{keep_data:!1,condition:function(t){return t.placeholder_image===!0}},responsive:!1,type:"image",editAlt:!1}}].forEach(t=>{o[0].params.push(t)}),o},javascript(){return function(){var st,rt,lt;var o=this.$el&&this.$el.querySelector(".ecom-swiper-autoplay-toggle");if(o&&!o.getAttribute("data-ecom-bound")){o.setAttribute("data-ecom-bound","1");var l=this.$el.querySelector(".ecom-swiper-container");o.addEventListener("click",function(){var e=l&&l.swiper;!e||!e.autoplay||(e.autoplay.running?(e.autoplay.stop(),o.setAttribute("data-state","paused"),o.setAttribute("aria-label",o.getAttribute("data-label-play"))):(e.autoplay.start(),o.setAttribute("data-state","playing"),o.setAttribute("aria-label",o.getAttribute("data-label-pause"))))})}let t=this.$el;if(!t||!this.settings)return;var h=[200,260,320,400,480,560,720,940,1066];function b(e,c){if(!(!e||!c||!c.src)){var p=parseInt(c.width,10)||0;if(!p){e.setAttribute("src",c.src),e.removeAttribute("srcset");return}var n=function(s){return c.src+(c.src.indexOf("?")===-1?"?":"&")+"width="+s},a=h.filter(function(s){return p>s});a.push(p),e.setAttribute("src",n(Math.min(533,p))),e.setAttribute("srcset",a.map(function(s){return n(s)+" "+s+"w"}).join(","))}}let k=!0,q=t.querySelectorAll(".ecom-collection__product-variants"),i=this.isLive,S=(st=this.settings.show_featured_media)!=null?st:!1,z=(rt=this.settings.bage_sale)!=null?rt:"",A=(lt=this.settings.enable_progress_pagination)!=null?lt:!1;const D=this.settings.sale_badge_type;let v=this.settings.slider_speed,x=this.settings.slider_speed__tablet,M=this.settings.slider_speed__mobile;var T=this.settings;function Y(e){return window.EComposer&&typeof window.EComposer.buildSwiperConfig=="function"?window.EComposer.buildSwiperConfig(e):null}const E=t.querySelector(".ecom-collection__product-main"),W=t.querySelectorAll(".ecom-search-blog-date");W.length>0&&W.forEach(function(e){let c=new Date(e.dataset.date);const p=E.dataset.format,n=O(V(c.toUTCString(),p));e.innerHTML=n});function V(e,c){if(!e)return;let p=e.split(",")[0],n=e.split(" ")[2];switch(p){case"Mon":e=e.replace("Mon","Monday");break;case"Tue":e=e.replace("Tue","Tuesday");break;case"Wed":e=e.replace("Wed","Wednesday");break;case"Thu":e=e.replace("Thu","Thursday");break;case"Fri":e=e.replace("Fri","Friday");break;case"Sat":e=e.replace("Sat","Saturday");break;case"Sun":e=e.replace("Sun","Sunday");break}if(c==="DoW_dd_mm_yyyy_style_3"||c==="DoW_mm_dd_yyyy_style_3"||c==="DoW_yyyy_mm_dd"){switch(n){case"Jan":e=e.replace(/\sJan\s/g,",01,");break;case"Feb":e=e.replace(/\sFeb\s/g,",02,");break;case"Mar":e=e.replace(/\sMar\s/g,",03,");break;case"Apr":e=e.replace(/\sApr\s/g,",04,");break;case"May":e=e.replace(/\sMay\s/g,",05,");break;case"Jun":e=e.replace(/\sJun\s/g,",06,");break;case"Jul":e=e.replace(/\sJul\s/g,",07,");break;case"Aug":e=e.replace(/\sAug\s/g,",08,");break;case"Sep":e=e.replace(/\sSep\s/g,",09,");break;case"Oct":e=e.replace(/\sOct\s/g,",10,");break;case"Nov":e=e.replace(/\sNov\s/g,",11,");break;case"Dec":e=e.replace(/\sDec\s/g,",12,");break}return e}switch(n){case"Jan":e=e.replace(/\sJan\s/g,",January,");break;case"Feb":e=e.replace(/\sFeb\s/g,",February,");break;case"Mar":e=e.replace(/\sMar\s/g,",March,");break;case"Apr":e=e.replace(/\sApr\s/g,",April,");break;case"May":e=e.replace(/\sMay\s/g,",May,");break;case"Jun":e=e.replace(/\sJun\s/g,",June,");break;case"Jul":e=e.replace(/\sJul\s/g,",July,");break;case"Aug":e=e.replace(/\sAug\s/g,",August,");break;case"Sep":e=e.replace(/\sSep\s/g,",September,");break;case"Oct":e=e.replace(/\sOct\s/g,",October,");break;case"Nov":e=e.replace(/\sNov\s/g,",November,");break;case"Dec":e=e.replace(/\Dec\s/g,",December,");break}return e}function O(e){if(!e)return;let c=E.dataset.format||"DoW_dd_mm_style_1",p=E.dataset.hide_day_of_the_week||!1;p=p==="true";let n=e.split(",")[0];p?n="":n+=", ";let a=e.split(",")[1],s=e.split(",")[2];e=e.split(",")[3];let r=e.split(" ")[0];switch(c){case"DoW_dd_mm_style_1":switch(a){case 1:case 21:case 31:return`${n}${a}st ${s}`;case 2:case 22:return`${n}${a}nd ${s}`;case 3:case 23:return`${n}${a}rd ${s}`;default:return`${n}${a}th ${s}`}case"DoW_dd_mm_style_2":return`${n}${a} ${s}`;case"DoW_mm_dd_style_1":return`${n}${s} ${a}`;case"DoW_mm_dd_style_2":switch(a){case 1:case 21:case 31:return`${n}${s} ${a}st`;case 2:case 22:return`${n}${s} ${a}nd`;case 3:case 23:return`${n}${s} ${a}rd`;default:return`${n}${s} ${a}th`}case"DoW_dd_mm_yyyy_style_1":switch(a){case 1:case 21:case 31:return`${n}${a}st ${s} ${r}`;case 2:case 22:return`${n}${a}nd ${s} ${r}`;case 3:case 23:return`${n}${a}rd ${s} ${r}`;default:return`${n}${a}th ${s} ${r}`}case"DoW_dd_mm_yyyy_style_2":switch(a){case 1:case 21:case 31:return`${n}${a}st ${s}, ${r}`;case 2:case 22:return`${n}${a}nd ${s}, ${r}`;case 3:case 23:return`${n}${a}rd ${s}, ${r}`;default:return`${n}${a}th ${s}, ${r}`}case"DoW_mm_dd_yyyy_style_1":switch(a){case 1:case 21:case 31:return`${n}${s} ${a}st, ${r}`;case 2:case 22:return`${n}${s} ${a}nd, ${r}`;case 3:case 23:return`${n}${s} ${a}rd, ${r}`;default:return`${n}${s} ${a}th, ${r}`}case"DoW_mm_dd_yyyy_style_2":return`${n}${s} ${a}, ${r}`;case"DoW_dd_mm_yyyy_style_3":return`${n}${a}/${s}/${r}`;case"DoW_mm_dd_yyyy_style_3":return`${n}${s}/${a}/${r}`;case"DoW_yyyy_mm_dd":return`${n}${r}/${s}/${a}`;default:switch(a){case 1:case 21:case 31:return`${n}${a}st ${s}`;case 2:case 22:return`${n}${a}nd ${s}`;case 3:case 23:return`${n}${a}rd ${s}`;default:return`${n}${a}th ${s}`}}}const P=function(e,c={},p=""){return window.innerWidth>1024&&e[0]&&(c[`${p}`]=e[0]),window.innerWidth<=1024&&window.innerWidth>768&&e[1]?c[`${p}`]=e[1]:e[0]&&(c[`${p}`]=e[0]),window.innerWidth<768&&e[2]?c[`${p}`]=e[2]:e[1]?c[`${p}`]=e[1]:e[0]&&(c[`${p}`]=e[0]),c};let I=t.querySelectorAll(".ecom-collection__product-item");I&&I.forEach(function(e){let c=e.querySelector(".ecom-collection__product-quantity-input"),p=e.querySelector(".ecom-collection__quantity-controls-plus"),n=e.querySelector(".ecom-collection__quantity-controls-minus");n&&n.addEventListener("click",function(){c.stepDown(),c.dispatchEvent(new Event("change"))}),p&&p.addEventListener("click",function(){c.stepUp(),c.dispatchEvent(new Event("change"))}),c&&c.addEventListener("change",function(a){let s=e.querySelector("a.ecom-collection__product-submit");if(a.target.value>parseInt(a.target.max)&&(a.target.value=parseInt(a.target.max)),s){let r=s.getAttribute("href");s.setAttribute("href",r.replace(/quantity=(\d*)/gm,`quantity=${a.target.value}`))}})});function R(e=!1,c){const p=t.querySelector(".ecom-paginate__progress-bar--outner"),n=t.querySelector(".ecom-paginate__progress-bar--inner"),a=t.querySelector(".ecom-paginate__progress-text");if(!A||!i||!p||!n||!a)return;let{total:s,initProduct:r}=p&&p.dataset,u=a&&a.dataset.text,d=0,m=1,g=0,y=0;r=parseInt(r),e?(m=1,g=r*c):(window.location.href.match(/page=\d*/gm)&&(d=new URL(window.location.href).searchParams.get("page"),d===1?m=1:m=r*(d-1)+1),g=m+r-1),g>s&&(g=s),y=Math.round(g/s*100),n.style.width=`${y}%`,u=u.replace("{_start}",m),u=u.replace("{_end}",g),u=u.replace("{_total}",s),a.innerText=u}R(!1,1);function U(e,c){var p=c.variantIdField.closest(".ecom-collection__product-item");let n=p.querySelector(".ecom-collection__product-submit"),a=p.querySelector(".ecom-collection__product-quantity-input"),s=p.querySelector(".ecom-collection__product-price"),r=p.querySelector(".ecom-collection__product-price--regular"),u=p.querySelector(".ecom-unit-price");r&&r.classList.add("ecom-collection__product--compare-at-price");let d=p.querySelector(".ecom-collection__product-price--bage-sale"),m=p.querySelector(".ecom-collection__product-item-sku-element"),g="";if(e===null){let _=p.querySelector('select[name="variant_id"]'),f=p.querySelector(".product-json"),j=null;try{j=JSON.parse(f.innerHTML)}catch{return 1}let tt=p.querySelector("select#"+_.id+"-option-0");if(!tt)return;const H=tt.value;H&&j.variants.forEach(function(at){if(at.options.includes(H)){e=at;return}})}if(e){if(s&&(s.innerHTML=window.EComposer.formatMoney(e.price)),r&&(r.innerHTML=window.EComposer.formatMoney(e.compare_at_price)),u){e.unit_price?u.style.display="block":u.style.display="none";const _=u.querySelector(".ecom-ground-price_unit-price");_&&(_.innerHTML=window.EComposer.formatMoney(e.unit_price))}if(e.compare_at_price>e.price){r&&(r.style.display="inherit");let _="";_=t.querySelector(".ecom-collection__product-main").dataset.sale,t.querySelector(".ecom-collection__product-main").dataset.translate=="false"&&(_=z),D==="amount"?(g=e.compare_at_price-e.price,d&&(d.style.display="inherit",d.innerHTML=_.replace(/\{{.*\}}/g,window.EComposer.formatMoney(g)))):(g=(e.compare_at_price-e.price)*100/e.compare_at_price,d&&(d.style.display="inherit",d.innerHTML=_.replace(/\{{.*\}}/g,Math.round(g))))}else r&&(r.style.display="none"),d&&(d.style.display="none",d.innerHTML="");if(m&&(e.sku?(m.querySelector(".ecom-collection__product-item-sku").innerHTML=e.sku,m.style.display="flex"):m.style.display="none"),e.featured_image){let _=p.querySelector(".ecom-collection__product-media img");if(!S&&_){let f=_.closest("div");f&&f.classList.add("ecom-product-image-loading"),b(_,e.featured_image),_.addEventListener("load",function(){f&&f.classList.remove("ecom-product-image-loading")})}}if(e.options.length&&!S)for(var y=0;y<e.options.length;y++)p.querySelectorAll(`.ecom-collection__product-swatch-item[data-option-index="${y}"][data-value="${encodeURI(e.options[y])}"]`).forEach(function(_){let f=_.parentNode.children;for(let j=0;j<f.length;j++)f[j].classList.remove("ecom-product-swatch-item--active");_.classList.add("ecom-product-swatch-item--active")}),p.querySelectorAll(`select.ecom-collection__product-swatch-select[data-option-index="${y}"]`).forEach(function(_){_.value&&(_.value=e.options[y])});if(n)if(e.available){if(!e.inventory_management||e.inventory_management&&e.inventory_quantity>0){if(n.removeAttribute("disabled"),a){let _=a.closest(".ecom-collection__product-quantity--wrapper");_&&(_.style.display="flex"),a.style.display="flex",e.inventory_management?a.max=e.inventory_quantity:a.max=9999}n.classList.add("ecom-collection__product-form__actions--add"),n.classList.remove("ecom-collection__product-form__actions--soldout"),n.classList.remove("ecom-collection__product-form__actions--unavailable"),n.querySelector(".ecom-add-to-cart-text").innerHTML=n.getAttribute("data-text-add-cart")}else if(e.inventory_policy=="continue"&&e.inventory_quantity<=0){if(n.removeAttribute("disabled"),a){let _=a.closest(".ecom-collection__product-quantity--wrapper");_&&(_.style.display="flex"),a.max=9999,a.style.display="flex"}n.classList.add("ecom-collection__product-form__actions--add"),n.classList.remove("ecom-collection__product-form__actions--soldout"),n.classList.remove("ecom-collection__product-form__actions--unavailable"),n.querySelector(".ecom-add-to-cart-text").innerHTML=n.getAttribute("data-text-pre-order")}}else{if(n.setAttribute("disabled","disabled"),a){let _=a.closest(".ecom-collection__product-quantity--wrapper");_&&(_.style.display="none"),a.style.display="none"}n.classList.add("ecom-collection__product-form__actions--soldout"),n.classList.remove("ecom-collection__product-form__actions--add"),n.classList.remove("ecom-collection__product-form__actions--unavailable"),n.querySelector(".ecom-add-to-cart-text").innerHTML=n.getAttribute("data-text-sold-out")}}else s.html=window.EComposer.formatMoney(0),r&&(r.innerHTML=window.EComposer.formatMoney(0),r.style.display="none"),n&&(n.setAttribute("disabled","disabled"),n.classList.add("ecom-collection__product-form__actions--unavailable"),n.classList.remove("ecom-collection__product-form__actions--add"),n.classList.remove("ecom-collection__product-form__actions--soldout"),n.querySelector(".ecom-add-to-cart-text").innerHTML=n.getAttribute("data-text-unavailable"))}function F(e){e.classList.add("ecom-swatch-init");let c=e.querySelector(".ecom-collection__product-form");if(!c)return;let p=c.querySelector('select[name="variant_id"]'),n=e.querySelector(".product-json"),a=null;try{a=JSON.parse(n.innerHTML)}catch{return 1}if(window.EComposer&&window.EComposer.OptionSelectors&&!p.dataset.ecomOptionInit)try{p.dataset.ecomOptionInit="true",new window.EComposer.OptionSelectors(p.id,{product:a,onVariantSelected:U,enableHistoryState:!1})}catch{return 1}e.querySelectorAll(".ecom-collection__product-swatch-item").forEach(function(s){s.addEventListener("click",function(){S=!1;var r=this.closest("li");if(r.classList.contains("ecom-product-swatch-item--active"))return!1;r.parentNode.querySelectorAll(".ecom-product-swatch-item--active").forEach(function(g){g.classList.remove("ecom-product-swatch-item--active")}),r.classList.add("ecom-product-swatch-item--active");var u=r.getAttribute("data-option-index"),d=r.getAttribute("data-value");let m=e.querySelector("select#"+p.id+"-option-"+u);m.value=d,m.dispatchEvent(new Event("change"))})}),e.querySelectorAll("select.ecom-collection__product-swatch-select").forEach(function(s){s.addEventListener("change",function(){var r=this,u=r.getAttribute("data-option-index"),d=r.value;e.querySelectorAll("select#"+p.id+"-option-"+u).forEach(function(m){m.value=d,m.dispatchEvent(new Event("change"))})})})}if(this.settings.layout==="slider"){let e=this.$el,c=e.querySelector(".ecom-swiper-container");const p=function(){if(!(window.EComposer&&typeof window.EComposer.buildSwiperConfig=="function")){let s=0;const r=setInterval(function(){s++,window.EComposer&&typeof window.EComposer.buildSwiperConfig=="function"?(clearInterval(r),p()):s>=20&&clearInterval(r)},200);return}var n=Y(T);if(!n)return;n.pagination={el:e.querySelector(".ecom-swiper-pagination"),type:"bullets",clickable:!0},n.navigation={nextEl:e.querySelector(".ecom-swiper-button-next"),prevEl:e.querySelector(".ecom-swiper-button-prev")},n.autoHeight=!1,n.on={init:function(){this.el.classList.add("ecom-swiper-initialized")}};let a=[v,x,M];if(!i)setTimeout(function(){n=P(a,n,"speed"),new window.EComSwiper(c,n)},200);else{n=P(a,n,"speed");const s=new window.EComSwiper(c,n);n.autoplay.enabled&&(s.on("touchStart",function(r,u){r.params.speed=300,r.autoplay.stop()}),s.on("touchEnd",function(r,u){window.innerWidth>1024&&v&&(r.params.speed=v),window.innerWidth<=1024&&window.innerWidth>768&&x?r.params.speed=x:v&&(r.params.speed=v),window.innerWidth<768&&M?r.params.speed=M:x?r.params.speed=x:v&&(r.params.speed=v),r.autoplay.start()}))}};p()}q.forEach(F);const K=function(e){e.querySelectorAll(".ecom-collection__product-form__actions--quickshop").forEach(function(c){c.addEventListener("click",function(p){this.style.display="none";let n=this.closest(".ecom-collection__product-item");n.querySelectorAll(".ecom-collection__product-variants").forEach(function(a){a.classList.add("ecom-active")}),n.querySelectorAll(".ecom-collection__product-quick-shop-wrapper").forEach(function(a){a.style.display="inherit"})})}),e.querySelectorAll(".ecom-collection__product-close").forEach(function(c){c.addEventListener("click",function(p){let n=this.closest(".ecom-collection__product-item");n.querySelectorAll(".ecom-collection__product-variants").forEach(function(a){a.classList.remove("ecom-active")}),n.querySelectorAll(".ecom-collection__product-quick-shop-wrapper").forEach(function(a){a.style.display="none"}),n.querySelectorAll(".ecom-collection__product-form__actions--quickshop").forEach(function(a){a.style.display="inherit"})})})};K(t);let C=E.dataset,N=E.dataset.countdownShows;const w=/\[([^\]]+)\]/gm;var $="";if(N.indexOf("week")>=0&&C.week){let e="",c=C.week.replace(w,(...p)=>(e=p[1],""));$+=`
                            <div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--week">
                                <span class="ecom-collection__product-time--number">
                                    ${e}
                                </span>
                                <span class="ecom-collection__product-time--label">
                                    ${c}
                                </span>
                            </div>`}if(N.indexOf("day")>=0&&C.day){let e="",c=C.day.replace(w,(...p)=>(e=p[1],""));$+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--day">
                                    <span class="ecom-collection__product-time--number">
                                        ${e}
                                    </span>
                                    <span class="ecom-collection__product-time--label">
                                        ${c}
                                    </span>
                                </div> `}if(N.indexOf("hour")>=0&&C.hour){let e="",c=C.hour.replace(w,(...p)=>(e=p[1],""));$+=`
                            <div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--hour">
                                <span class="ecom-collection__product-time--number">
                                    ${e}
                                </span>
                                <span class="ecom-collection__product-time--label">
                                    ${c}
                                </span>
                            </div>
                        `}if(N.indexOf("minute")>=0&&C.minute){let e="",c=C.minute.replace(w,(...p)=>(e=p[1],""));$+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--minute">
                                    <span class="ecom-collection__product-time--number">
                                        ${e}
                                    </span>
                                    <span class="ecom-collection__product-time--label">
                                        ${c}
                                    </span>
                                </div>
                            `}if(N.indexOf("second")>=0&&C.second){let e="",c=C.second.replace(w,(...p)=>(e=p[1],""));$+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--second">
                                    <span class="ecom-collection__product-time--number">
                                        ${e}
                                    </span>
                                    <span class="ecom-collection__product-time--label">
                                        ${c}
                                    </span>
                                </div>`}function J(e){let c=this.closest(".ecom-collection__product-countdown-wrapper"),p=c.querySelector(".ecom-collection__product-countdown-progress-bar"),n=c.querySelector(".ecom-collection__product-countdown-progress-bar--timer"),a=this.getAttribute("data-ecom-countdown-from")||0;if(this.innerHTML=e.strftime($),p&&a){let s=new Date().getTime(),r=new Date(a),u=r.getTime(),d=e.finalDate.getTime();if(u<s&&d>u){p.style.removeProperty("display");let m=d-u,g=d-s,y=Math.round(g*100/m)+"%";n.style.width=y}else p.style.display="none"}}function B(e){if(e.dataset.ecomCountdown){if(e.dataset.ecomCountdownFrom&&new Date().getTime()>new Date(e.dataset.ecomCountdown).getTime()&&i)return e.closest(".ecom-collection__product-countdown-wrapper").style.display="none",!1;window.EComCountdown&&window.EComCountdown(e,new Date(e.dataset.ecomCountdown),J),e.addEventListener("stoped.ecom.countdown",()=>{e.closest(".ecom-collection__product-countdown-wrapper").style.display="none"})}}if(t.querySelectorAll(".ecom-collection__product-countdown-time").forEach(function(e){B(e)}),i){const e=t.querySelector(".ecom-collection__product-main");let c=1;const p=function(s){s.preventDefault();const r=this.dataset.get,u=this.closest(".ecom-sections[data-section-id]"),d=t.closest(".ecom-row.ecom-section");if(!r||!u||!u.dataset.sectionId)return;const m=u.dataset.sectionId,g=`${r}&section_id=${m}`;c++,R(!0,c),this.classList.add("ecom-loading"),a(g,u,this,"loadmore",d)},n=function(s){function r(d,m){new IntersectionObserver((y,_)=>{y.forEach(f=>{f.isIntersecting&&(m.cb?m.cb(d):u(f.target),_.unobserve(f.target))})},m).observe(d)}function u(d){const m=d.dataset.get,g=d.closest(".ecom-sections[data-section-id]"),y=d.closest(".ecom-row.ecom-section");if(!m||!g||!g.dataset.sectionId)return;const _=g.dataset.sectionId,f=`${m}&section_id=${_}`;k&&(t.classList.add("ecom-doing-scroll"),a(f,g,d,"infinite",y))}r(s,{})},a=function(s,r,u,d,m){k=!1,async function(y){return(await fetch(y,{method:"GET",cache:"no-cache",headers:{"Content-Type":"text/html"}})).text()}(s).then(function(y){const _=document.createElement("div");_.innerHTML=y;const f=_.querySelector(".ecom-collection__product-main.ecom-collection_product_template_search .ecom-collection__product--wrapper-items");if(!f)return;const j=m.querySelector(".ecom-collection__product--wrapper-items"),tt=m.querySelector(".ecom-products-pagination-loadmore");for(;f.firstChild;)j.appendChild(f.firstChild);if(f.parentNode.removeChild(f),d==="loadmore"){const H=_.querySelector(".ecom-products-pagination-loadmore");H?tt.innerHTML=H.innerHTML:tt.remove()}else{u.remove();const H=_.querySelector(".ecom-products-pagination-infinite");H&&(j.after(H),n(H))}e.dispatchEvent(new CustomEvent("ecom-products-init",{detail:{wrapper:e}}))}).finally(function(){window.EComposer&&window.EComposer.initQuickview&&typeof window.EComposer.initQuickview=="function"&&window.EComposer.initQuickview(),k=!0,t.classList.remove("ecom-doing-scroll"),u.classList.remove("ecom-loading")})};if(e&&e.dataset.pagination){const s=e.dataset.pagination;if(s==="loadmore")t.querySelector(".ecom-products-pagination-loadmore-btn")&&t.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",p);else if(s==="infinit"){const r=t.querySelector(".ecom-products-pagination-infinite");if(!r)return;n(r)}}e.addEventListener("ecom-products-init",function(s){const r=s.detail.wrapper;if(!r)return;if(e&&e.dataset.pagination){const d=e.dataset.pagination;if(d==="loadmore")t.querySelector(".ecom-products-pagination-loadmore-btn")&&t.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",p);else if(d==="infinit"){const m=t.querySelector(".ecom-products-pagination-infinite");m&&n(m)}}r.querySelectorAll(".ecom-collection__product-variants:not(.ecom-swatch-init)").length&&r.querySelectorAll(".ecom-collection__product-variants:not(.ecom-swatch-init)").forEach(F),r.querySelectorAll(".ecom-collection__product-countdown-time").length&&r.querySelectorAll(".ecom-collection__product-countdown-time").forEach(function(d){B(d)}),K(r),r.querySelector(".ecom-products-pagination-loadmore-btn")&&r.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",p),window.EComposer&&typeof window.EComposer.init=="function"&&window.EComposer.init(),Z(r);const u=r.querySelector(".ecom-collection__product--wishlist-wrapper");X(u),window.EComposer&&typeof window.EComposer.initButtonWishlist=="function"&&window.EComposer.initButtonWishlist(),Q(r)})}function Z(e){if(e&&e.dataset.reviewPlatform)switch(e.dataset.reviewPlatform){case"product-reviews":if(window.SPR)try{window.SPR.$=window.jQuery,window.SPR.initDomEls(),window.SPR.loadBadges()}catch(c){console.info(c.message)}break;case"judgeme":if(window.jdgm){try{window.jdgm.batchRenderBadges()}catch(c){console.info(c.message)}t.querySelectorAll('[data-average-rating="0.00"]').forEach(function(c){c.style.display="block !important"})}break;case"product-reviews-addon":window.StampedFn&&window.StampedFn.loadBadges();break;case"lai-reviews":typeof window.SMARTIFYAPPS<"u"&&window.SMARTIFYAPPS.rv.installed&&window.SMARTIFYAPPS.rv.scmReviewsRate.actionCreateReviews();break}}function X(e){if(e)switch(e.dataset.wishlistApp){case"swym-relay":window._swat&&window._swat.initializeActionButtons(".ecom-collection__product-wishlist-button");break;case"wishlist-hero":t.querySelectorAll(".wishlist-hero-custom-button").forEach(function(c){var p=new CustomEvent("wishlist-hero-add-to-custom-element",{detail:c});document.dispatchEvent(p)});break}}function Q(e){if(!e)return;const c=e.querySelectorAll(".ecom-collection__product-media-wrapper:not([data-hover-media-init])");if(!c.length)return;const p=!window.matchMedia||window.matchMedia("(hover: hover)").matches,n=function(a){const s=function(){typeof window.requestIdleCallback=="function"?window.requestIdleCallback(a,{timeout:2e3}):window.requestAnimationFrame(a)};document.readyState==="complete"?s():window.addEventListener("load",s,{once:!0})};c.forEach(function(a){a.setAttribute("data-hover-media-init","true");const s=a.querySelector("img.ecom-collection__product-secondary-media");if(!s)return;const r=function(){const d=s.getAttribute("data-srcset"),m=s.getAttribute("data-src");if(!d&&!m)return;const g=function(){a.classList.add("ecom-hover-ready")};s.addEventListener("load",g,{once:!0}),d&&(s.setAttribute("srcset",d),s.removeAttribute("data-srcset")),m&&(s.setAttribute("src",m),s.removeAttribute("data-src")),s.complete&&s.naturalWidth&&g()};if(!i){r();return}if(!p&&!a.classList.contains("ecom-enable-hover--mobile"))return;if(a.addEventListener("pointerenter",r,{once:!0}),a.addEventListener("touchstart",r,{once:!0,passive:!0}),a.addEventListener("focusin",r,{once:!0}),typeof window.IntersectionObserver!="function"){n(r);return}const u=new window.IntersectionObserver(function(d){!d[0]||!d[0].isIntersecting||(u.disconnect(),n(r))},{rootMargin:"200px"});u.observe(a)})}if(Q(t),!i){const e=t.querySelector(".ecom-collection__product-main");Z(e);const c=t.querySelector(".ecom-collection__product--wishlist-wrapper");X(c)}if(this.settings.enable_preload){var nt=t.querySelectorAll(".ecom-collection__product-item");nt.forEach(function(e){e.addEventListener("mouseenter",function(){let c=document.createElement("link");c.rel="prefetch",document.head.appendChild(c);var p=this.querySelector("a.ecom-collection__product-item-information-title");!p||(c.href=p.getAttribute("href"))},{once:!0})})}if(this.settings.show_compare&&!i){var dt=t.querySelectorAll(".ecom-product__compare-link");dt.forEach(function(e){e.addEventListener("click",function(){this.classList.contains("ecom-product__compare-link-added")?this.classList.remove("ecom-product__compare-link-added","ecom-button-active"):this.classList.add("ecom-product__compare-link-added","ecom-button-active")})})}if(this.settings.show_wishlist&&!i){var _t=t.querySelectorAll(".ecom-product__wishlist-link");_t.forEach(function(e){e.addEventListener("click",function(){this.classList.contains("ecom-product__wishlist-link-added")?this.classList.remove("ecom-product__wishlist-link-added","ecom-button-active"):this.classList.add("ecom-product__wishlist-link-added","ecom-button-active")})})}}},default(){return{settings:{show_text_first:"column",text_progress_pagination:"Viewing {_start} - {_end} of {_total}",layout:"slider",image_ratio:"adapt",show_featured_media:!1,disable_lazyload:!0,enable_preload:!1,placeholder_image_shopify:"product-1",link_with_collection:!0,show_secondary_image:!0,price_from_text:"From",show_sale_badge:!0,sale_badge_type:"amount",show_badges:!0,title_tag:"h3",enable_countdown:!0,enable_progress_bar:!1,countdown_title:" ",sale_text:"Sale",sold_text:"Sold",product_unavailable:"Unavailable",product_outstock:"Outstock",show_product_available:!1,show_variant_label:"block",show_option_name:"none",slider_items:4,show_vendor:!1,show_sku:!1,show_description:!1,show_type:!1,show_price:"block",show_product_rating:!1,show_product_quickview:!1,show_product_wishlist:!1,vendor_title:"Vendor",type_title:"Type",limit:8,badge_tags:"Hot,Best Selling,Trending Item",trans_no_item:"No results found",show_picker:"show",show_actions:!0,type:"image",option:"Color",option_layout:"radio",quickshop_layout:"full",shows_countdown:["day","hour","minute","second"],text_week:"[%-W] week%!W",text_day:"[%-d] day%!D",text_hour:"[%-H] hr%!H",text_minute:"[%-M] min%!M",text_second:"[%-S] sec%!S",text_prev_page:"Previous",text_next_page:"Next",number_type:"icon","grid-column-gap":"10px",action:"popup",added_cart_text:"Added to cart",added_cart_message:"Added to cart",slidesPerView__tablet:3,spaceBetween__tablet:30,slidesPerView__mobile:1,spaceBetween__mobile:15,enable_pagination:!0,row_items:4,imagePos:"ecom-flex-column","grid-template-columns":3,show_countdown_on_sale:!1,countdown_from:"2021/11/01 12:00",navigation:!0,slidesPerView:4,slidesPerGroup:1,spaceBetween:30,order_title:1,order_description:9,order_vendor:3,order_sku:4,order_type:5,order_price:7,order_button:10,order_variant:9,icon_prev_page:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',icon_next_page:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',slider_items__tablet:3,slider_items__mobile:1,slider_speed:200,slider_navigation_layout:"navigation",slider_prev_icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" fill="currentColor"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"></path></svg>',slider_next_icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" fill="currentColor"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>',slider_spacing:20,price_type:"first_price",styleCountdown:"column",sku_title:"SKU: ",quickview_text:"Quick view",quickview_icon:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zoom-in"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>',order_reivew:2,quick_shop_text:"Quick Shop",order_countdown:0,placeholder_image:!1,placeholder_image_custom:{value:"/images/placeholder.png"},slider_spacing__mobile:15,slider_spacing__tablet:15,slider_loop:!0,bage_sale:"Save {{sale}}",style:"vertical",add_to_cart:"Add to cart ",pre_order:"Pre order",view_more_text:"View more",sold_out_text:"Sold out",quantity_inline:!1,compare_tab:"compare_tab_normal",tab_tooltip_compare:"tab_tooltip_compare_normal",navigation_position:"center",navigation_position__tablet:"center",navigation_position__mobile:"center",show_wishlist:!0,wishlist_icon:{value:'<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>'},wishlist_icon_added:{value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M22.5,5c-2.892,0-5.327,1.804-6.5,2.854C14.827,6.804,12.392,5,9.5,5C5.364,5,2,8.364,2,12.5c0,2.59,2.365,4.947,2.46,5.041 L16,29.081l11.534-11.534C27.635,17.447,30,15.09,30,12.5C30,8.364,26.636,5,22.5,5z"></path></svg>'},show_compare:!0,compare_icon:{value:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>'},compare_icon_added:{value:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 16 3 C 8.800781 3 3 8.800781 3 16 C 3 23.199219 8.800781 29 16 29 C 23.199219 29 29 23.199219 29 16 C 29 14.601563 28.8125 13.207031 28.3125 11.90625 L 26.6875 13.5 C 26.886719 14.300781 27 15.101563 27 16 C 27 22.101563 22.101563 27 16 27 C 9.898438 27 5 22.101563 5 16 C 5 9.898438 9.898438 5 16 5 C 19 5 21.695313 6.195313 23.59375 8.09375 L 25 6.6875 C 22.699219 4.386719 19.5 3 16 3 Z M 27.28125 7.28125 L 16 18.5625 L 11.71875 14.28125 L 10.28125 15.71875 L 15.28125 20.71875 L 16 21.40625 L 16.71875 20.71875 L 28.71875 8.71875 Z"></path></svg>'},content_tooltip_wishlist:"Add to Wishlist",content_tooltip_wishlist_added:"Browse Wishlist",content_tooltip_compare_added:"Compare products",content_tooltip_compare:"Compare",group_btn_hor_pos:"start",group_btn_ver_pos:"start",group_btn_ver_pos1:"start",group_btn_hor_pos1:"start"},style:{general:{tab:"normal"},products_item:{tab:"normal",borderRadius:{top:"0px",left:"0px",bottom:"0px",right:"0px"},border:{"border-style":"none"},backgroundColor:"#ffffff"},product_image:{imageOpacitynormalmode:1,imageOpacityhovermode:1,spacing:{margin:{bottom:"0px"}},tab:"normal",imageWidth:"100%",border_radius:{top:"24px",left:"24px",bottom:"24px",right:"24px"},spacing__tablet:{margin:{}},border_radius__mobile:{top:"12px",left:"12px",bottom:"12px",right:"12px"}},product_actions:{tab:"normal",background_color:"rgba(182, 150, 113, 0)",background_color_hover:"rgba(182, 150, 113, 0)",spacing:{padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"},margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}},quickshop_close_button:{tab:"normal",background_color:"#000",background_color_hover:"#31452c"},variant_swatch:{tab:"normal",width:"32px",height:"32px",borderRadius:{top:"6px",left:"6px",bottom:"6px",right:"6px"},spacing:{margin:{right:"4px",top:"4px",left:"4px",bottom:"4px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},spacingWraper:{margin:{top:"8px",bottom:"5px"}},border:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#DBDBDB"},borderHoverMode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#C1272D"},borderActiveMode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#C1272D"},justifyContent:"center"},progress_bar:{tab:"normal",spacing:{margin:{top:"10px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},height:"7px",borderRadius:{top:"4px",left:"4px",bottom:"4px",right:"4px"}},product_wishlist:{"horizontal-orientation":"left","verical-orientation":"top"},pagination:{buttonAlignment:"center",buttonColornormalmode:"#111827",buttonBackgroundnormalmode:{classic:{"background-color":"rgba(17, 24, 39, 0.1)"}},buttonColorhovermode:"#111827",buttonBackgroundhovermode:{classic:{"background-color":"rgba(17, 24, 39, 0.2)"}},padding:{left:"20px",top:"8px",bottom:"8px",right:"20px"},spacing:{margin:{top:"30px"}},buttonBackgroundactivemode:{classic:{"background-color":"#ccc"}}},sold_out_button:{buttonAlignment:"center",buttonColornormalmode:"#fff",buttonBackgroundnormalmode:{classic:{"background-color":"#555"}},tab:"normal",buttonTypography:{"font-size":"14px","font-weight":"700","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"line-height":"1.25em","letter-spacing":"0px","text-decoration":"none","text-transform":"uppercase"},spacing:{padding:{left:"30px",right:"30px",top:"10px",bottom:"10px"},margin:{top:"15px"}},buttonColorhovermode:"#fff",buttonBackgroundhovermode:{classic:{"background-color":"rgba(49, 69, 44, 0.8)"}},buttonBordernormalmode:{"border-style":"none"},spacing__mobile:{padding:{left:"20px",right:"20px"},margin:{top:"20px"}},buttonTypography__mobile:{"font-size":"12px"},buttonHeightnormalmode__mobile:"40px",buttonTypography__tablet:{"font-size":"13px"},buttonHeightnormalmode__tablet:"40px",spacing__tablet:{padding:{left:"20px",right:"20px"}},buttonBorderRadiusnormalmode:{top:"12px",left:"12px",bottom:"12px",right:"12px"},buttonBorderhovermode:{"border-style":"none"},buttonAlignment__tablet:"center"},add_to_cart_button:{buttonAlignment:"center",buttonColornormalmode:"#fff",buttonBackgroundnormalmode:{classic:{"background-color":"#008F86"}},buttonBordernormalmode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#008F86"},buttonColorhovermode:"#008F86",buttonBackgroundhovermode:{classic:{"background-color":"#fff"}},tab:"normal",buttonTypography:{"font-size":"14px","font-weight":"700","text-decoration":"none","font-style":"normal","text-transform":"uppercase","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"letter-spacing":"0px","line-height":"1.25em"},spacing:{padding:{left:"30px",right:"30px",top:"10px",bottom:"10px"},margin:{top:"15px"}},buttonBorderhovermode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#fff"},add_cart_icon_width:"19px",buttonTypography__tablet:{"font-size":"13px"},spacing__tablet:{padding:{left:"20px",right:"20px"},margin:{top:"15px"}},spacing__mobile:{padding:{left:"20px",right:"20px"},margin:{top:"20px"}},buttonTypography__mobile:{"font-size":"12px"},buttonHeightnormalmode__mobile:"40px",transitions:{transitions:{duration:"400ms"}},buttonBorderRadiusnormalmode:{top:"12px",left:"12px",bottom:"12px",right:"12px"},buttonAlignment__tablet:"center"},unavailable_button:{buttonAlignment:"center",buttonColornormalmode:"#fff",buttonBackgroundnormalmode:{classic:{"background-color":"#000"}},tab:"normal",buttonTypography:{"font-size":"16px","font-weight":"700","font-family":{name:"Cormorant",value:"https://fonts.googleapis.com/css?family=Cormorant:100,200,300,400,500,600,700,800,900",thumbnail:"Cormorant"},"line-height":"1.25em","text-transform":"capitalize","letter-spacing":"0px","text-decoration":"none"},buttonColorhovermode:"#fff",spacing:{padding:{left:"40px",right:"40px",top:"9px",bottom:"9px"},margin:{top:"24px"}},buttonBackgroundhovermode:{classic:{"background-color":"rgba(49, 69, 44, 0.8)"}},spacing__mobile:{padding:{left:"15px",right:"15px"},margin:{top:"20px"}},buttonHeightnormalmode__mobile:"40px",buttonTypography__mobile:{"font-size":"14px"},buttonHeightnormalmode__tablet:"40px",buttonTypography__tablet:{"font-size":"14px"},spacing__tablet:{padding:{left:"20px",right:"20px"}},buttonBorderRadiusnormalmode:{top:"40px",left:"40px",bottom:"40px",right:"40px"}},quickshop_button:{buttonAlignment:"flex-start",buttonColornormalmode:"#ffffff",buttonBackgroundnormalmode:{classic:{"background-color":"#000"}},buttonColorhovermode:"#ffffff",spacing:{padding:{top:"8px",left:"16px",bottom:"8px",right:"16px"},margin:{top:"5px",bottom:"5px"}},tab:"normal",buttonBordernormalmode:{"border-style":"none"},buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px"},buttonWidthnormalmode:"100%"},quickview_button:{buttonAlignment:"center",buttonColornormalmode:"#ffffff",buttonBackgroundnormalmode:{classic:{"background-color":"#000"}},buttonColorhovermode:"#ffffff",spacing:{padding:{top:"5px",left:"0px",bottom:"5px",right:"0px"},margin:{top:"5px",bottom:"5px"}},tab:"normal",quickview_icon_width:"12px",buttonTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"300","text-decoration":"none"},buttonWidthnormalmode:"100%",buttonBorderRadiusnormalmode:{top:"0px",left:"0px",bottom:"0px",right:"0px"},quickview_icon_spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}},view_more_button:{buttonAlignment:"center",tab:"normal",buttonTypography:{"text-transform":"uppercase","text-decoration":"none","font-size":"14px","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"font-weight":"700","line-height":"1.25em","letter-spacing":"0px"},buttonBackgroundnormalmode:{classic:{"background-color":"#31452c"}},buttonColornormalmode:"#fff",buttonBackgroundhovermode:{classic:{"background-color":"rgba(49, 69, 44, 0.8)"}},buttonBordernormalmode:{"border-style":"none"},buttonBorderhovermode:{"border-style":"none"},buttonColorhovermode:"#fff",viewmore_icon_width:"19px",spacing__mobile:{padding:{left:"20px",right:"20px"}},buttonHeightnormalmode__mobile:"40px",buttonTypography__mobile:{"font-size":"12px"},spacing__tablet:{padding:{left:"20px",right:"20px"},margin:{}},buttonHeightnormalmode__tablet:"40px",buttonTypography__tablet:{"font-size":"14px"},spacing:{margin:{top:"15px"},padding:{left:"30px",right:"30px",top:"10px",bottom:"10px"}},buttonAlignment__tablet:"center"},sale_price_badge:{"align-self":"flex-end",buttonColor:"#fff",buttonBackground:{classic:{"background-color":"#C1272D"}},spacing:{padding:{left:"6px",right:"6px",bottom:"3px",top:"3px"}},buttonTypography:{"font-size":"10px","font-weight":"500","line-height":"1.3em","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"letter-spacing":"0px"},buttonBorderRadius:{top:"30px",left:"30px",bottom:"30px",right:"30px"}},sale_badge:{"align-self":"flex-end",buttonColor:"#fff",buttonBackground:{classic:{"background-color":"#d1793e"}},spacing:{padding:{left:"15px",right:"15px",top:"3px",bottom:"3px"},margin:{top:"0px",bottom:"5px",left:"0px",right:"0px"}},buttonTypography:{"font-size":"10px","font-weight":"500","font-family":{id:"cY0FRb6y",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"line-height":"1.3em","letter-spacing":"0px"},buttonBorderRadius:{top:"40px",left:"40px",bottom:"40px",right:"40px"},spacing__tablet:{margin:{},padding:{}},spacing__mobile:{margin:{},padding:{}}},sold_out_badge:{"align-self":"flex-end",buttonColor:"#ffffff",buttonBackground:{classic:{"background-color":"#111827"}},spacing:{margin:{bottom:"5px"},padding:{top:"3px",left:"10px",bottom:"3px",right:"10px"}},buttonTypography:{"font-size":"10px","font-weight":"500","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"line-height":"1.3em","letter-spacing":"0px"},buttonBorderRadius:{top:"40px",left:"40px",bottom:"40px",right:"40px"}},custom_badge:{"align-self":"flex-end",buttonColor:"#ffffff",buttonBackground:{classic:{"background-color":"#3c1100"}},spacing:{margin:{bottom:"5px"},padding:{left:"10px",top:"3px",bottom:"3px",right:"10px"}},buttonTypography:{"font-size":"10px","font-family":{id:"2z6NMHM0",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"font-weight":"700","line-height":"1.3em","letter-spacing":"0px","text-transform":"uppercase"},buttonBorderRadius:{top:"30px",left:"30px",bottom:"30px",right:"30px"}},show_vendor:{textColor:"#df5641",textTypography:{"font-size":"12px","font-weight":"400","text-decoration":"none"}},product_price:{"text-align":"left",textColor:"#000",textTypography:{"font-weight":"700","font-size":"20px","text-transform":"none","font-style":"normal","text-decoration":"none","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"line-height":"1.2em","letter-spacing":"0px"},"justify-content":"center",textTypography__tablet:{"line-height":"40px"},spacing:{margin:{top:"10px"}},spacing__tablet:{margin:{top:"5px"}}},product_title:{tab:"normal",textTypography:{"font-size":"16px","text-decoration":"none","font-weight":"700","font-style":"normal","line-height":"1.3em","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"letter-spacing":"0px"},textColornormalmode:"#000",spacingNormal:{margin:{top:"16px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},textColorhovermode:"#008F86",textTextAlign:"center",textTypography__tablet:{"font-size":"14px"},textTypography__mobile:{"font-size":"15px"}},variant_select:{tab:"normal",spacing:{margin:{bottom:"10px"},padding:{top:"5px",left:"10px",bottom:"5px",right:"5px"}},typo:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px"},width:"100%",outline:{outline:{"outline-style":"none"}},border:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#d5d5d5"},borderRadius:{top:"3px",left:"3px",bottom:"3px",right:"3px"},colorPlaceholder:"#d5d5d5"},slider_arrow:{navtab:"normal",tab:"normal",navigatorFontSize:"15px",navigatorPrimaryColornormalmode:"#fff",navigatorBackgroundnormalmode:{classic:{"background-color":"#008F86"}},navigatorPrimaryColorhovermode:"#fff",navigatorBackgroundhovermode:{classic:{"background-color":"rgba(0, 143, 134, 0.8)"}},navigatorBorderRadiusnormalmode:{top:"50%",left:"50%",bottom:"50%",right:"50%"},paginationWidth:"8px",paginationHeight:"8px",panigationSpacing:{margin:{right:"5px",top:"20px",left:"5px"}},panigationColornormalmode:"rgba(87, 87, 87, 0.37)",panigationColorhovermode:"#B69671",panigationColoractivemode:"#B69671",navigatorSpacing:{margin:{top:"-75px",left:"-35px",bottom:"-75px",right:"-35px"},padding:{right:"16px",top:"16px",left:"16px",bottom:"16px"}},navigatorBordernormalmode:{"border-style":"none"},navigatorBorderhovermode:{"border-style":"none"},navigationTransition:400,navigatorSpacing__tablet:{margin:{left:"-25px",right:"-25px"},padding:{top:"10px",left:"10px",right:"10px",bottom:"10px"}},navigatorSpacing__mobile:{margin:{left:"-25px",right:"-25px"},padding:{left:"10px",top:"10px",right:"10px",bottom:"10px"}}},product_regular_sale:{buttonTypography:{"font-size":"20px","font-weight":"700","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"line-height":"1.2em","letter-spacing":"0px"},buttonColor:"#000",buttonTypography__tablet:{"line-height":"40px"}},product_regular:{textColor:"#545454",textTypography:{"font-size":"14px","font-weight":"400","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"line-height":"1.2em","letter-spacing":"0px"},spacing:{margin:{left:"-3px"}},textTypography__tablet:{"line-height":"40px"}},countdown_title:{textTypography:{"font-size":"13px","font-weight":"400"}},countdown_items:{boxBackground:"rgba(0, 0, 0, 0)",width:"40px",spacing:{margin:{left:"5px",right:"5px"}},spacing__tablet:{margin:{}},width__tablet:"30px",width__mobile:"45px"},countdown_number:{buttonTypography:{"font-size":"24px","font-weight":"700","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"line-height":"1.25em"},spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},"text-align":"center",buttonColor:"#ED2A1E",buttonTypography__tablet:{"font-size":"20px"}},countdown_label:{buttonTypography:{"font-size":"10px","font-weight":"500","font-family":{id:"gyY5ItqI",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"text-transform":"capitalize","line-height":"1.25em"},buttonColor:"#000","text-align":"center"},progress_bar_text:{textTypography:{"font-family":{name:"Inter",value:"https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900",thumbnail:"Inter"},"font-size":"13px","font-weight":"300"}},countdown_general:{spacing:{margin:{top:"16px",left:"16px",bottom:"16px",right:"16px"},padding:{top:"16px",left:"16px",bottom:"16px",right:"16px"}},"justify-content":"center",position:"absolute","horizontal-orientation":"left","verical-orientation":"bottom",bottom:"100%","z-index":2,boxBackground:"#fff",boxBorderRadius:{top:"16px",left:"16px",bottom:"16px",right:"16px"},boxShadow:{"box-shadow":{horizontal:"0px",vertical:"4px",blur:"24px",color:"rgba(0, 0, 0, 0.06)"}},left:"0px",spacing__tablet:{padding:{left:"12px",right:"12px",bottom:"12px",top:"12px"},margin:{}}},product_description:{textTypography:{"font-family":{name:"Inter",value:"https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900",thumbnail:"Inter"},"font-size":"12px","font-weight":"400"},textColor:"#333",spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}},show_sku:{textTypography:{"font-size":"12px","font-weight":"400","text-decoration":"none"},textColor:"#df5641",spacing:{margin:{bottom:"10px",top:"10px"}}},show_sku_title:{textColor:"#333",spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}}},show_type:{textTypography:{"font-size":"12px","font-weight":"500","text-decoration":"none","font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"line-height":"1.25em","text-transform":"uppercase","letter-spacing":"1px"},textColor:"#a6a6a6",alignment:"flex-start",spacing:{margin:{top:"5px"},padding:{left:"0px",bottom:"5px"}}},product_rating:{textTypography:{"font-size":"12px","font-family":{name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"}},spacing:{margin:{top:"5px",bottom:"8px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},alignment:"flex-start"},quick_shop_button:{tab:"normal",buttonTypography:{"font-size":"12px","font-weight":"400","line-height":"1.25em","text-decoration":"none","font-style":"normal","text-transform":"uppercase","font-family":{name:"Tenor Sans",value:"https://fonts.googleapis.com/css?family=Tenor+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"Tenor Sans"},"letter-spacing":"0px"},buttonBackgroundnormalmode:{classic:{"background-color":"rgba(0, 0, 0, 0)"}},buttonBackgroundhovermode:{classic:{"background-color":"rgba(63, 65, 55, 0.1)"}},buttonBordernormalmode:{"border-style":"solid","border-color":"#3F4137"},buttonColornormalmode:"#3F4137",buttonColorhovermode:"#3F4137",add_cart_icon_width:"19px",spacing:{padding:{left:"24px",right:"24px",top:"9px",bottom:"8px"},margin:{top:"15px"}},buttonAlignment:"center",spacing__mobile:{padding:{left:"20px",right:"20px"},margin:{top:"20px"}},buttonHeightnormalmode__mobile:"40px",buttonTypography__mobile:{"font-size":"12px"},spacing__tablet:{padding:{left:"20px",right:"20px"}},buttonHeightnormalmode__tablet:"40px",buttonTypography__tablet:{"font-size":"13px"},buttonBorderRadiusnormalmode:{top:"40px",left:"40px",bottom:"40px",right:"40px"},buttonAlignment__tablet:"center"},variant_swatch_title:{textTypography:{"font-size":"12px","font-weight":"400","font-family":{name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"}},spacing:{margin:{top:"10px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},textTextAlign:"left"},variant_radio_title:{textTypography:{"font-size":"12px","font-weight":"300","font-family":{name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"}},spacing:{margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"},padding:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},textTextAlign:"left"},variant_radio:{tab:"normal",buttonTypography:{"font-size":"13px","font-weight":"500","font-family":{id:"cY0FRb6y",name:"DM Sans",value:"https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,400,500,600,700,800,900",thumbnail:"DM Sans"},"line-height":"1.25em"},buttonBordernormalmode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#d5d5d5"},buttonColornormalmode:"#6D7175",spacing:{margin:{top:"8px",left:"4px",bottom:"0px",right:"4px"},padding:{top:"4px",left:"8px",bottom:"3.5px",right:"8px"}},itemAlignment:"center",alignment:"center",buttonColorhovermode:"#fff",buttonBackgroundhovermode:{classic:{"background-color":"#000"}},buttonBorderhovermode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#000"},buttonColoractivemode:"#fff",buttonBackgroundactivemode:{classic:{"background-color":"#000"}},buttonBorderactivemode:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#000"},buttonBackgroundnormalmode:{classic:{"background-color":"#fff"}},"text-align":"center",buttonBorderRadiusnormalmode:{top:"20px",left:"20px",bottom:"20px",right:"20px"}},variant_select_title:{textTypography:{"font-family":{name:"Jost",value:"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900",thumbnail:"Jost"},"font-size":"12px","font-weight":"500"},textTextAlign:"left",spacing:{margin:{bottom:"0px"},padding:{bottom:"0px"}},textColor:"#000"},quanity_plus:{tab:"normal",iconBackgroundnormalmode:{classic:{"background-color":"#ffffff"}},padding:{right:"10px",left:"10px"},iconBordernormalmode:{"border-style":"solid","border-width":{top:"0.8px",left:"0px",bottom:"0.8px",right:"0.8px"},"border-color":"#c2bcbc"}},quanity_minus:{tab:"normal",iconBackgroundnormalmode:{classic:{"background-color":"#ffffff"}},padding:{right:"10px",left:"10px"},iconBordernormalmode:{"border-style":"solid","border-width":{top:"0.8px",left:"0.8px",bottom:"0.8px",right:"0px"},"border-color":"#c2bcbc"}},input_quantity:{tab:"normal",width_input_quantity:"100%",height_input_quantity:"40px",border:{"border-style":"solid","border-width":{top:"0.8px",left:"0.8px",bottom:"0.8px",right:"0.8px"},"border-color":"#c2bcbc"},outline_focus:{outline:{"outline-style":"none"}},outline:{outline:{"outline-style":"none"}},"text-align":"center"},wishlist:{spacing:{margin:{top:"10px",left:"15px"},padding:{top:"2.5px",left:"2.5px",bottom:"2.5px",right:"2.5px"}},iconFontSize:"18px",buttonColoractivemode:"#e81e63"},compare:{iconFontSize:"18px",spacing:{margin:{left:"15px"},padding:{top:"2.5px",right:"2.5px",left:"2.5px",bottom:"2.5px"}}}},advanced:{"custom-css":`.ecom-collection__product-countdown-wrapper {
    width: -webkit-fill-available;
    width: -moz-available;
}
.ecom-collection__product-badge {
    right: 16px;
    left: 16px;
    top: 16px;
}
.ecom-collection__product-submit.ecom-ajax-loading {
    position: relative;
}
.ecom-child-element:before, .ecom-child-element::after {
   display: none ! important;
}
.ecom-ajax-loading::after {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -9px;
    margin-left: -9px;
    opacity: 0;
    padding: 0;
    transition: opacity .2s;
    content: "";
    display: inline-block !important;
    width: 18px;
    height: 18px;
    border: 1px solid rgba(255,255,255,.3);
    border-left-color: #fff;
    border-radius: 50%;
    vertical-align: middle;
    border-left-color: currentColor;
    opacity: 1;
    -webkit-animation: 450ms linear infinite ecom-spin;
    animation: 450ms linear infinite ecom-spin;
    background: transparent;
    min-width: inherit;
    bottom: auto;
    transform: none;
}
.ecom-ajax-loading span.ecom-collection__product-add-cart-icon,
.ecom-ajax-loading .ecom-add-to-cart-text{opacity: 0;}
span.ecom-collection__product-badge--sale:first-child:not(:last-child) {
    display: none;
}
.ecom-collection__product .ecom-collection__product-picker-main, .ecom-collection__product .ecom-collection__product-picker-other, .ecom-collection__product .selector-wrapper {
    text-align: center;
}
.ecom-collection__product-swatch-item:not(.ecom-collection__product-picker-radio-list-item).ecom-product-swatch-item--active,.ecom-collection__product-swatch-item:not(.ecom-collection__product-picker-radio-list-item):hover {
    background: transparent;
}
.ecom-collection.ecom-collection__product {
    overflow: visible;
}
.ecom-collection__product-item-type-element {
    position: relative;
    z-index: 1;
}
@media (min-width:1025px){
.ecom-collection__product-item--wrapper:hover .ecom-collection__product-form__actions {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}
.ecom-collection__product-form__actions {
    transition: 0.4s;
    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;
}
.ecom-swiper-navigation-position button{
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
}
div:has(>.ecom-swiper-container):hover .ecom-swiper-navigation-position button {
    opacity: 1;
    visibility: visible;
}
}`,scolling_horizontal:{"scrolling-animation-px":[]},spacing:{margin:{top:"55px"},padding:{bottom:"0px"}},spacing__tablet:{margin:{top:"35px"}},spacing__mobile:{margin:{top:"35px"}},animation_type:"fade-in",animation_duration:"600ms",animation_delay:"600ms"}}},getUser(){return this.$store.getters["global/user"]},show_option_name(){var o;return((o=this.data.settings)==null?void 0:o.show_option_name)=="block"},preview(){var t,h;const o=[{type:"article",title:"Article title",date:"February 28, 2023",tag:"Article"}];((h=(t=this==null?void 0:this.data)==null?void 0:t.settings)==null?void 0:h.limit)>1&&o.push({type:"page",title:"Page title",tag:"Page"});let l="";return o.forEach((b,k)=>{var q,i,S,z,A,D,v,x,M,T,Y,E,W,V,O,P,I,R,U,F;l+=` <div class="ecom-collection__product-item  ${this.layout==="slider"?"ecom-swiper-slide":""} ecom-search-${b.type}-item" >
                                <div class="ecom-collection__product-item--wrapper ecom-flex-column">
                                    <div class="ecom-collection__product-media-wrapper">
                                        <div class="ecom-collection__product-item--inner ecom-image-default">
                                            <div class="ecom-collection__product-media--container">
                                                <div class="ecom-child-element ecom-collection__product-media ecom-collection__product-media--${this.data.settings.image_ratio}" style="padding-bottom: 100%">

                                                    ${((q=this.data.settings)==null?void 0:q.placeholder_image_custom)&&this.data.settings.placeholder_image?`<img src="${(S=(i=this.data.settings)==null?void 0:i.placeholder_image_custom)==null?void 0:S.value}"/>`:b.image?`<img src="${b.image}"/>`:this.data.settings.placeholder_image?`<img src="${((A=(z=this.data.settings)==null?void 0:z.placeholder_image_custom)==null?void 0:A.value)||((D=this.data.settings.placeholder_image_custom)==null?void 0:D.value)=="/images/placeholder.png"?(x=(v=this.data.settings)==null?void 0:v.placeholder_image_custom)==null?void 0:x.value:(T=(M=this.data.settings)==null?void 0:M.placeholder_image_custom)==null?void 0:T.value}"
                                                    ${(Y=this.data.settings)!=null&&Y.disable_lazyload?"":"loading='lazy'"}
                                                        class="ecom-collection__product-media-image"
                                                    />`:`{{ '${(E=this.data.settings)==null?void 0:E.placeholder_image_shopify}' | placeholder_svg_tag: 'ecom-colection__product-svg-placeholder ecom-collection__product-media-image' }}`}
                                                </div>

                                            </div>
                                            ${((W=this.data.settings)==null?void 0:W.show_tag_blog)&&b.type=="article"?`<div class="ecom-search-tag ecom-search-tag-article ecom-search-tag_position-${this.data.settings.position_tag_blog}">${b.tag}</div>`:""}
                                            ${((V=this.data.settings)==null?void 0:V.show_tag_page)&&b.type=="page"?`<div class="ecom-search-tag ecom-search-tag-page ecom-search-tag_position-${this.data.settings.position_tag_page}">${b.tag}</div>`:""}
                                        </div>
                                    </div>
                                    <div class="ecom-collection__product-item--information">
                                        <div class="ecom-collection__product-item--information-wrapper">
                                            <${(P=(O=this.data.settings)==null?void 0:O.title_tag)!=null?P:"h3"}
                                                class="ecom-collection__product-title-tag ${this.show_product_rating?"{% if review_platform and review_platform == 'vital-reviews' %}card__heading{% endif %}":""}  ecom-child-element"
                                                ${this.exporting?"":`data-child-name="title"
                                                data-child-title="Title"`}
                                            >
                                                <a
                                                    href="{{- product.url -}}"
                                                    title="{{product.title | escape }}"
                                                    target="${(I=this.data.settings)!=null&&I.open_new_tab?"_blank":""}"
                                                    class="ecom-collection__product-item-information-title ${(R=this.data.settings)!=null&&R.title_one_row?"ecom-title-one-row":""}"
                                                >
                                                    ${b.title}
                                                </a>
                                            </${(F=(U=this.data.settings)==null?void 0:U.title_tag)!=null?F:"h3"}>
                                            ${this.data.settings.show_date&&b.type=="article"?`<div class="ecom-search-blog-date" data-date="2023-02-28 20:21:53 -0500">
                                                        February 28, 2023
                                                    </div>`:""}
                                        </div>
                                    </div>
                                </div>
                            </div>`}),l},assignItems(){var t,h;if(this.canUseCustomLiquidForCSR)return`
                    {%- if true -%}
                        {% assign limit = ${Math.max(0,Number(((t=this.data.settings)==null?void 0:t.limit)||10)-2)} %}
                `;const o=`
                    {%- capture limit-%}${(h=this.data.settings)!=null&&h.limit?this.data.settings.limit:10}{% endcapture %}
                    {%- if limit == blank -%}
                        {% assign limit = 12 %}
                    {% else %}
                        {% assign limit = limit | plus: 0 %}
                    {%- endif-%}

                `;let l=6;return this.exporting?`
                        ${o}
                        {% liquid
                            assign has_products = false

                            for item in search.results
                                if item.object_type == 'product'
                                    assign has_products = true
                                    break
                                endif
                            endfor
                        %}
                        {% if search.results %}
                        {%- paginate search.results by limit -%}
                            {% assign products = search.results %}


                    `:`
                        {% assign limit = ${l} %}
                        {% if EComBuilderMode %}
                        {%- paginate collections.all.products by limit -%}
                            {% assign products = collections.all.products %}
                    `},conditionLiquid(){return{start:`
                    {% assign checkSearch = search.terms %}
                    {% if checkSearch != blank and checkSearch != ''%}
                    `,end:`
                        {% endif %}
                    `}},liquids(){var o,l,t,h,b,k,q,i,S,z,A,D,v,x,M,T,Y,E,W,V,O,P,I,R,U,F,K,C,N,w,$,J,B,Z,X,Q,nt,dt,_t,st,rt,lt,e,c,p,n,a,s,r,u,d,m,g,y,_,f,j,tt,H,at,ut,mt,ht,gt,bt,ft,vt,yt,wt,xt,$t,kt,qt,St,Ct,Mt,Lt,zt,At,Dt,Tt,Et,Bt,jt,Ht,Wt,Pt,It,Rt,Ft,Nt,Jt,Vt,Ot,Ut,Yt,Qt,Gt,Kt,Zt,Xt,te,ee,oe,ie,ne,ae,se,re,le,ce,pe,de,_e,ue,me,he,ge,be,fe,ve,ye,we,xe,$e,ke,qe,Se,Ce,Me,Le,ze,Ae,De,Te,Ee,Be,je,He,We,Pe,Ie,Re,Fe,Ne,Je,Ve,Oe,Ue,Ye,Qe,Ge,Ke,Ze,Xe,to,eo,oo,io,no,ao,so,ro,lo,co,po,_o,uo,mo,ho,go,bo,fo,vo,yo,wo,xo,$o,ko;return{review_platform:{code:"{%- assign review_platform = shop.metafields.ecomposer.app_review.value -%}{{-review_platform-}}",preview:""},product_items:{code:`
                        {%- capture badge_tags -%}${this.badge_tags}{%- endcapture -%}

                        {%- liquid
                            assign colors = shop.metafields.ecomposer.colors
                            assign badge_tags = badge_tags | strip | split: ','
                            assign enable_hook = shop.metafields.ecomposer.enable_hook.value
                        -%}
                        ${this.assignItems}
                        {% capture quickshop_layout%}${this.quickshop_layout}{% endcapture %}
                        {% capture product_style%}${this.data.settings.style}{% endcapture%}
                        {%- assign view_more_only = ${this.data.settings.view_more_only}  -%}
                        {% capture product_layout %}${this.layout}{% endcapture %}
                        ${this.data.template==="product"||this.data.template==="cart"?"{% assign check_min = 1 %}":"{% assign check_min = 0%}"}
                        {% if products and products.size > check_min  and products != blank %}
                            <div class="${this.layout==="slider"?"ecom-swiper-wrapper":""}
                                ecom-collection__product--wrapper-items ecom-collection-product__layout-${this.layout}
                                ${this.data.template==="product"||this.data.template==="cart"?"{{ecom_related_type}}":""}"
                                data-grid-column="${this.data.settings.slider_items}"
                                data-grid-column-tablet="${this.data.settings.slider_items__tablet}"
                                data-grid-column-mobile="${this.data.settings.slider_items__mobile}"
                            >
                            {% assign ecom_count = 0 %}
                            ${this.exporting?"":this.preview}
                            {% for p in products  %}
                                {% if p.handle %}
                                    {% assign product = p %}
                                {% else %}
                                    {% assign product = all_products[p] %}
                                {% endif %}
                                {% if product.url == blank %} {% continue %} {% endif %}
                                {% if ecom_count >= limit %}{% break %}{% endif %}
                                ${this.data.template==="product"||this.data.template==="cart"?"{%- if product.handle == current_product.handle -%}{% continue %}{%-endif -%}":""}
                                {% assign ecom_count = ecom_count | plus: 1 %}

                                {%- capture swatch_option  -%}${this.lang((o=this.data.settings)==null?void 0:o.option,"product_option_swatch")}{%- endcapture -%}
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
                                                <form class="ecom-collection__product-form ecom-product-form" product_id="{{product.id}}" data-product_id="{{product.id}}" data-product-id="{{product.id}}" data-handle="{{product.handle}}">
                                                    <div class="ecom-child-element" ${this.exporting?"":'data-child-name="variant" data-child-title="Variant picker"'}>
                                                    {% assign variant_selected = product.first_available_variant%}

                                                    ${["color","image"].includes(this.swatch_type)?`
                                                            {%- capture swatch_option_temp  -%}${this.lang((l=this.data.settings)==null?void 0:l.option,"product_option_swatch")}{%- endcapture -%}
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
                                                                                <li data-option-index="{{ option_index }}" class="ecom-collection__product-swatch-item ecom-collection__product-picker-images-item  {%comment%}{% if option_value == variant_selected[index] %}ecom-product-swatch-item--active ecom-button-active{% endif %}{%endcomment%}" data-value="{{ option_value | escape }}">
                                                                                    <span class="ecom-collection__product-swatch-item--wrapper"></span>
                                                                                    <img src="{{ variant | image_url: width: 120, crop: 'center' }}" alt=" {{ option_value }}"     ${(t=this.data.settings)!=null&&t.disable_lazyload?"":"loading='lazy'"}/>
                                                                                </li>
                                                                            {%- endfor -%}
                                                                        </ul>
                                                                    `:`
                                                                        <ul class="ecom-collection__product-picker-colors-list">
                                                                            {%- assign index = current_option.position | prepend:  'option' -%}
                                                                            {% assign value_key_selected = variant_selected[index] | downcase %}
                                                                            {%- for value in current_option.values -%}
                                                                                {% assign value_key = ${this.canUseCustomLiquidForCSR?"value.name":"value"} | downcase | strip %}
                                                                                <li data-option-index="{{ option_index }}" class="ecom-collection__product-swatch-item ecom-collection__product-picker-colors-item  {%comment%}{% if value_key == value_key_selected  %}ecom-product-swatch-item--active ecom-button-active{% endif %}{%endcomment%}" data-value="{{ value | escape }}">
                                                                                    <span class="ecom-collection__product-swatch-item--wrapper"></span>
                                                                                    <span class="ecom-collection__product-picker-colors-item--preview {% if colors and colors.value[value_key] == blank  %}ecom-collection__product-picker-colors--no-color{%- endif -%}" {% if colors and colors.value[value_key] != blank  %} style="{{colors.value[value_key]}}"{% endif %}>
                                                                                    </span>
                                                                                </li>
                                                                            {%endfor%}
                                                                        </ul>
                                                                    `}
                                                            </div>
                                                            {% endif %}
                                                            {% endfor %}
                                                            {%- if other_option_layout != 'hide' -%}
                                                            <div class="ecom-collection__product-quick-shop-wrapper {% if hide_quickshop %} ecom-collection__product-quick-shop--force-show{% endif %}">
                                                                {%- for option in product.options_with_values -%}
                                                                    {%- if swatch_option contains option.name -%}{% continue%}{%-endif-%}
                                                                    {%- assign index = option.position | prepend:  'option' -%}
                                                                    {% assign option_index = option.position | minus: 1 %}
                                                                        <div class="ecom-collection__product-picker-other ecom-collection__product-picker-option-{{option.name | handleize }}">
                                                                            ${this.show_option_name?`<span class="ecom-collection__product-picker-${this.option_layout}-label">{{option.name}}</span>`:""}

                                                                            ${this.option_layout==="radio"?`
                                                                                    <ul class="ecom-collection__product-picker-${this.option_layout}-list ecom-d-flex">
                                                                                        {% for value in option.values %}
                                                                                            <li class="ecom-collection__product-swatch-item ecom-collection__product-picker-${this.option_layout}-list-item {%comment%}{% if value == variant_selected[index] %}ecom-product-swatch-item--active ecom-button-active{% endif %}{%endcomment%}" data-option-index="{{ option_index }}" data-value="{{ value | escape }}">
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
                                                                            ${this.show_option_name?`<span class="ecom-collection__product-picker-${this.swatch_type}-label">{{option.name}}</span>`:""}
                                                                            <ul class="ecom-collection__product-picker-${this.swatch_type}-list ecom-d-flex">
                                                                                {% for value in option.values %}
                                                                                    <li class="ecom-collection__product-swatch-item ecom-collection__product-picker-${this.swatch_type}-list-item {%comment%}{% if forloop.first %}ecom-product-swatch-item--active ecom-button-active{% endif %}{%endcomment%}" data-option-index="{{ option_index }}" data-value="{{ value | escape }}">
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
                                                    </div>

                                                    {%- if product.requires_selling_plan == true and view_more_only != true -%}
                                                        ${((h=this.data.settings)==null?void 0:h.view_more_text)||((b=this.data.settings)==null?void 0:b.view_more_icon)?`
                                                        <div
                                                            class="ecom-button-default ecom-collection__product-form__actions">
                                                            <a  class="ecom-collection__product-form__actions--view-more ecom-collection__product-view-more-${(q=(k=this.data.settings)==null?void 0:k.view_more_icon_position)!=null?q:"before"} ecom-child-element"
                                                                    ${this.exporting?"":'data-child-name="view_more_button" data-child-title="View more button"'}
                                                                    target="${(i=this.data.settings)!=null&&i.open_new_tab?"_blank":""}"
                                                                    href="${(S=this.data.settings)!=null&&S.link_with_collection?"{{- product.url | within: collection -}}":"{{- product.url -}}"}"
                                                                    title="{{ product.title | escape }}">
                                                                    ${(z=this.data.settings)!=null&&z.view_more_icon?`
                                                                            <span class="ecom-collection__product-view-more-icon">${(A=this.data.settings)==null?void 0:A.view_more_icon}</span>`:""}
                                                                    <span class="ecom-collection__product-view-more-text">
                                                                        ${this.lang((D=this.data.settings)==null?void 0:D.view_more_text,"view_more_text")}
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        `:""}
                                                    {%- else -%}
                                                    <div class="ecom-collection__product-quick-shop-add-to-cart-wrapper {% if hide_quickshop or view_more_only %} ecom-collection__product-quick-shop--force-show{% endif %}">
                                                        ${(((v=this.data.settings)==null?void 0:v.add_to_cart)||((x=this.data.settings)==null?void 0:x.add_cart_icon))&&!((M=this.data.settings)!=null&&M.view_more_only)?`<div class="ecom-collection__product-form__actions ${(T=this.data.settings)!=null&&T.quantity_inline?"ecom-collection__product-quantity--inline":""}">
                                                                ${(Y=this.data.settings)!=null&&Y.show_input_quantity?`
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
                                                                ecom-collection__product-add-cart-icon-${(E=this.data.settings)!=null&&E.add_cart_icon_position?this.data.settings.add_cart_icon_position:"before"}"
                                                                    data-text-add-cart="${this.lang(this.data.settings.add_to_cart,"add_to_cart")}"
                                                                    data-text-unavailable="${this.lang(this.data.settings.product_unavailable,"product_unavailable")}"
                                                                    data-text-sold-out="${this.lang(this.data.settings.sold_out_text||"outstock","product_soldout")}"
                                                                    data-action="${(V=(W=this.data.settings)==null?void 0:W.action)!=null?V:"popup"}"
                                                                    data-text-added-cart="${this.lang((O=this.data.settings)==null?void 0:O.added_cart_text,"added_cart_text")}"
                                                                    data-message-added-cart="${this.lang((P=this.data.settings)==null?void 0:P.added_cart_message,"added_cart_message")}"
                                                                    data-href="${(U=(R=(I=this.data.settings)==null?void 0:I.link)==null?void 0:R.href)!=null?U:"#"}"
                                                                    data-target="${(C=(K=(F=this.data.settings)==null?void 0:F.link)==null?void 0:K.target)!=null?C:"_blank"}"
                                                                    data-text-pre-order="${this.lang((N=this.data.settings)==null?void 0:N.pre_order,"pre_order")}"
                                                                    ${this.exporting?"":'data-child-name="add_to_cart_button" data-child-title="Add to cart button"'}
                                                                    >
                                                                    ${(w=this.data.settings)!=null&&w.add_cart_icon?`<span class="ecom-collection__product-add-cart-icon">${($=this.data.settings)==null?void 0:$.add_cart_icon}</span>`:""}
                                                                    <span class="ecom-add-to-cart-text">
                                                                        ${this.lang((J=this.data.settings)==null?void 0:J.add_to_cart,"add_to_cart")}
                                                                    </span>
                                                                </button>
                                                            </div>
                                                            `:""}
                                                    </div>
                                                    {%- endif -%}
                                                </form> {% comment %} End form {% endcomment %}
                                                <script class="product-json" type="application/json">
                                                     ${this.canUseCustomLiquidForCSR?"{{ product | json }}":`{%- ${this.page_type==="block","render"} "ecom_product_json", product: product  -%}`}
                                                <\/script>
                                            </div>
                                            ${this.canUseCustomLiquidForCSR?"":`{%- if enable_hook -%}
                                                {% capture the_ecom_hook %}
                                                    {% render 'ecom_product_loop_after_variant', product: product %}
                                                {% endcapture %}
                                                {% unless the_ecom_hook contains 'Liquid error' %}
                                                    {{ the_ecom_hook }}
                                                {% endunless %}
                                            {%- endif -%}`}
                                        {% endif %}
                                    `:""}
                                {% endcapture%}
                                {% capture product_actions%}
                                    <div class="ecom-collection__product--actions" data-layout="{{quickshop_layout}}">
                                    ${this.show_product_quickview?this.quickview_snippet:""}
                                    <div
                                        class="ecom-button-default ecom-collection__product-form__actions ${(B=this.data.settings)!=null&&B.quantity_inline?"ecom-collection__product-quantity--inline":""}"
                                        ${this.exporting?"":'data-child-name="button" data-child-title="button"'}
                                        ${!((Z=this.data.settings)!=null&&Z.show_actions)&&!this.show_picker?'style="display:none;"':""}>
                                            {%- if enable_hook -%}
                                                {% capture the_ecom_hook %}
                                                    {% render 'ecom_product_loop_before_cart_button', product: product %}
                                                {% endcapture %}
                                                {% unless the_ecom_hook contains 'Liquid error' %}
                                                    {{ the_ecom_hook }}
                                                {% endunless %}
                                            {%- endif -%}
                                            {% if view_more_only %}
                                            ${((X=this.data.settings)==null?void 0:X.view_more_text)||((Q=this.data.settings)==null?void 0:Q.view_more_icon)?`
                                                    <a  class="ecom-collection__product-form__actions--view-more ecom-collection__product-view-more-${(dt=(nt=this.data.settings)==null?void 0:nt.view_more_icon_position)!=null?dt:"before"} ecom-child-element"
                                                            ${this.exporting?"":'data-child-name="view_more_button" data-child-title="View more button"'}
                                                            target="${(_t=this.data.settings)!=null&&_t.open_new_tab?"_blank":""}"
                                                            href="${(st=this.data.settings)!=null&&st.link_with_collection?"{{- product.url | within: collection -}}":"{{- product.url -}}"}"
                                                            title="{{ product.title | escape }}">
                                                            ${(rt=this.data.settings)!=null&&rt.view_more_icon?`
                                                                    <span class="ecom-collection__product-view-more-icon">${(lt=this.data.settings)==null?void 0:lt.view_more_icon}</span>`:""}
                                                            <span class="ecom-collection__product-view-more-text">
                                                                ${this.lang((e=this.data.settings)==null?void 0:e.view_more_text,"view_more_text")}
                                                            </span>
                                                        </a>

                                            `:""}

                                            {% elsif product.available == false %}
                                            ${((c=this.data.settings)==null?void 0:c.sold_out_text)||((p=this.data.settings)==null?void 0:p.sold_out_icon)?`
                                                    <a  class="ecom-collection__product-form__actions--soldout ecom-collection__product-sold-out-${(a=(n=this.data.settings)==null?void 0:n.sold_out_icon_position)!=null?a:"before"} ecom-child-element"
                                                            ${this.exporting?"":'data-child-name="sold_out_button" data-child-title="Sold out button"'}
                                                            href="${(s=this.data.settings)!=null&&s.link_with_collection?"{{- product.url | within: collection -}}":"{{- product.url -}}"}"
                                                            title="{{ product.title | escape }}">
                                                            ${(r=this.data.settings)!=null&&r.sold_out_icon?`
                                                                    <span class="ecom-collection__product-sold-out-icon">${(u=this.data.settings)==null?void 0:u.sold_out_icon}</span>`:""}
                                                            <span class="ecom-collection__product-sold-out-text">
                                                                ${this.lang((d=this.data.settings)==null?void 0:d.sold_out_text,"sold_out_text")}
                                                            </span>
                                                        </a>

                                            `:""}


                                            {% elsif product.has_only_default_variant %}
                                                {%- if product.requires_selling_plan == true and view_more_only != true -%}
                                                    ${((m=this.data.settings)==null?void 0:m.view_more_text)||((g=this.data.settings)==null?void 0:g.view_more_icon)?`
                                                    <div
                                                        class="ecom-button-default ecom-collection__product-form__actions">
                                                        <a  class="ecom-collection__product-form__actions--view-more ecom-collection__product-view-more-${(_=(y=this.data.settings)==null?void 0:y.view_more_icon_position)!=null?_:"before"} ecom-child-element"
                                                                ${this.exporting?"":'data-child-name="view_more_button" data-child-title="View more button"'}
                                                                target="${(f=this.data.settings)!=null&&f.open_new_tab?"_blank":""}"
                                                                href="${(j=this.data.settings)!=null&&j.link_with_collection?"{{- product.url | within: collection -}}":"{{- product.url -}}"}"
                                                                title="{{ product.title | escape }}">
                                                                ${(tt=this.data.settings)!=null&&tt.view_more_icon?`
                                                                        <span class="ecom-collection__product-view-more-icon">${(H=this.data.settings)==null?void 0:H.view_more_icon}</span>`:""}
                                                                <span class="ecom-collection__product-view-more-text">
                                                                    ${this.lang((at=this.data.settings)==null?void 0:at.view_more_text,"view_more_text")}
                                                                </span>
                                                            </a>
                                                        </div>
                                                        `:""}
                                                {%- else -%}
                                                ${((ut=this.data.settings)==null?void 0:ut.add_to_cart)||((mt=this.data.settings)==null?void 0:mt.add_cart_icon)?`
                                                    ${(ht=this.data.settings)!=null&&ht.show_input_quantity?`<div class="ecom-collection__product-quantity--wrapper ecom-flex">
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
                                                    data-action="${(bt=(gt=this.data.settings)==null?void 0:gt.action)!=null?bt:"popup"}"
                                                    data-text-added-cart="${this.lang((ft=this.data.settings)==null?void 0:ft.added_cart_text,"added_cart_text")}"
                                                    data-message-added-cart="${this.lang((vt=this.data.settings)==null?void 0:vt.added_cart_message,"added_cart_message")}"
                                                    data-href="${(xt=(wt=(yt=this.data.settings)==null?void 0:yt.link)==null?void 0:wt.href)!=null?xt:"#"}"
                                                    data-target="${(qt=(kt=($t=this.data.settings)==null?void 0:$t.link)==null?void 0:kt.target)!=null?qt:"_blank"}"
                                                    class="ecom-collection__product-submit ecom-collection__product-form__actions--add ecom-collection__product-simple-add-to-cart ecom-ajax-cart-simple ecom-collection__product-add-cart-icon-${(Ct=(St=this.data.settings)==null?void 0:St.add_cart_icon_position)!=null?Ct:"before"} ecom-child-element" ${this.exporting?"":'data-child-name="add_to_cart_button" data-child-title="Add to cart button"'}
                                                    data-id="{{ product.variants.first.id  }}"
                                                    data-handle="{{ product.handle }}" data-pid="{{ product.id }}" title="{{ product.title | escape }}">
                                                        ${(Mt=this.data.settings)!=null&&Mt.add_cart_icon?`<span class="ecom-collection__product-add-cart-icon">${(Lt=this.data.settings)==null?void 0:Lt.add_cart_icon}</span>`:""}
                                                        <span class="ecom-add-to-cart-text">
                                                        {%- if product.variants.first.inventory_management and product.variants.first.inventory_quantity <= 0 and product.variants.first.inventory_policy == 'continue' -%}
                                                            ${this.lang((zt=this.data.settings)==null?void 0:zt.pre_order,"pre_order")}
                                                        {%-else-%}
                                                            ${this.lang((At=this.data.settings)==null?void 0:At.add_to_cart,"add_to_cart")}
                                                        {%- endif -%}
                                                        </span>
                                                    </a>
                                                `:""}
                                                {%- endif -%}


                                            {% else  %}
                                                ${this.show_picker?`
                                                    ${((Dt=this.data.settings)==null?void 0:Dt.quick_shop_text)||((Tt=this.data.settings)==null?void 0:Tt.add_cart_icon)?`
                                                        <button class="ecom-collection__product-form__actions--quickshop ecom-collection__product-quickshop-icon-${(jt=(Bt=(Et=this.data)==null?void 0:Et.settings)==null?void 0:Bt.quick_shop_icon_position)!=null?jt:"before"}
                                                        {% if hide_quickshop %} ecom-collection__product-quick-shop--force-hide{% endif %} ecom-child-element" ${this.exporting?"":'data-child-name="quick_shop_button" data-child-title="Quick shop button"'} type="button">
                                                            ${(Wt=(Ht=this.data)==null?void 0:Ht.settings)!=null&&Wt.quick_shop_icon?`
                                                                <span class="ecom-collection__product-quickshop-icon">${(It=(Pt=this.data)==null?void 0:Pt.settings)==null?void 0:It.quick_shop_icon}</span>
                                                                `:""}
                                                            <span class="ecom-collection__product-form__actions--quickshop-text">
                                                                ${this.lang(this.data.settings.quick_shop_text,"quick_shop_text")}
                                                            </span>
                                                        </button>
                                                        `:""}
                                                    `:`
                                                     ${((Rt=this.data.settings)==null?void 0:Rt.view_more_text)||((Ft=this.data.settings)==null?void 0:Ft.view_more_icon)?`
                                                        <a href="${(Nt=this.data.settings)!=null&&Nt.link_with_collection?"{{- product.url | within: collection -}}":"{{- product.url -}}"}" class="ecom-collection__product-form__actions--view-more ecom-collection__product-view-more-${(Vt=(Jt=this.data.settings)==null?void 0:Jt.view_more_icon_position)!=null?Vt:"before"}
                                                            ecom-child-element" title="{{ product.title | escape }}" target="${(Ot=this.data.settings)!=null&&Ot.open_new_tab?"_blank":""}" ${this.exporting?"":'data-child-name="button" data-child-title="View more button"'}>
                                                            ${(Ut=this.data.settings)!=null&&Ut.view_more_icon?`
                                                                <span class="ecom-collection__product-view-more-icon">${(Yt=this.data.settings)==null?void 0:Yt.view_more_icon}</span>
                                                                `:""}
                                                            <span class="ecom-collection__product-view-more-text">
                                                                ${this.lang((Qt=this.data.settings)==null?void 0:Qt.view_more_text,"view_more_text")}
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
                                            <a {% if product.price %} href="${(Gt=this.data.settings)!=null&&Gt.link_with_collection?"{{- product.url | within: collection -}}":"{{- product.url -}}"}" {% else %} href="{{- product.url -}}" {% endif %} target="${(Kt=this.data.settings)!=null&&Kt.open_new_tab?"_blank":""}" title="{{product.title | escape }}" class="ecom-collection__product-item--inner ecom-image-default">
                                            {%- if product.featured_media or product.image -%}
                                                {%- liquid
                                                    assign featured_media_aspect_ratio = product.featured_media.aspect_ratio
                                                    if product.featured_media.aspect_ratio == nil
                                                        assign featured_media_aspect_ratio = 1
                                                    endif
                                                    assign ecom_media_widths = '200,260,320,400,480,560,720,940,1066,1280,1500,1800' | split: ','
                                                -%}
                                                    {% if ${this.canUseCustomLiquidForCSR?"true":"product.object_type == 'product'"} %}
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
                                                                ${(Zt=this.data.settings)!=null&&Zt.disable_lazyload?"":"loading='lazy'"}
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
                                                                    ${(Xt=this.data.settings)!=null&&Xt.disable_lazyload?"":"loading='lazy'"}
                                                                        class="ecom-collection__product-secondary-media"
                                                                        width="{{ product.media[1].width }}"
                                                                        height="{{ product.media[1].height }}"
                                                                        />
                                                                    {%- endif -%}
                                                                    `:""}
                                                                </div>
                                                            </div>
                                                        {% else %}
                                                            <img srcset="{%- for ecom_w in ecom_media_widths -%}{%- assign ecom_wi = ecom_w | times: 1 -%}{%- if product.image.width > ecom_wi -%}{{ product.image | image_url: width: ecom_wi }} {{ ecom_wi }}w,{%- endif -%}{%- endfor -%}{{ product.image | image_url }} {{ product.image.width }}w"
                                                                src="{{ product.image | image_url: width: 533 }}"
                                                                sizes="${this.mediaSizes}"
                                                                alt="{{ product.image.alt | escape }}"
                                                            ${(te=this.data.settings)!=null&&te.disable_lazyload?"":"loading='lazy'"}
                                                                class="ecom-collection__product-media-image"
                                                                width="{{ product.image.width }}"
                                                                height="{{ product.image.height }}"
                                                            />
                                                    {% endif %}
                                                {% else %}
                                                ${((ee=this.data.settings)==null?void 0:ee.placeholder_image)==!0?`
                                                    <div class="ecom-collection__product-media--container">
                                                        <div class="ecom-child-element ecom-collection__product-media ecom-collection__product-media--${this.data.settings.image_ratio}"
                                                        ${this.exporting?"":'data-child-name="image" data-child-title="image"'}
                                                        ${this.data.settings.image_ratio==="adapt"?'style="padding-bottom: 85%;"':""}

                                                        >
                                                            <img src="${((ie=(oe=this.data.settings)==null?void 0:oe.placeholder_image_custom)==null?void 0:ie.value)=="/images/placeholder.png"?"https://"+this.getDomain()+((ae=(ne=this.data.settings)==null?void 0:ne.placeholder_image_custom)==null?void 0:ae.value):(re=(se=this.data.settings)==null?void 0:se.placeholder_image_custom)==null?void 0:re.value}"
                                                            ${(le=this.data.settings)!=null&&le.disable_lazyload?"":"loading='lazy'"}
                                                                class="ecom-collection__product-media-image"
                                                            >
                                                        </div>

                                                    </div>`:`<div class="ecom-collection__product-media--container">
                                                <div class="ecom-child-element ecom-collection__product-media ecom-collection__product-media--${this.data.settings.image_ratio}"
                                                ${this.exporting?"":'data-child-name="image" data-child-title="image"'}
                                                ${this.data.settings.image_ratio==="adapt"?'style="padding-bottom: 85%;"':""}
                                                >
                                                    {{ '${(ce=this.data.settings)==null?void 0:ce.placeholder_image_shopify}' | placeholder_svg_tag: 'ecom-colection__product-svg-placeholder' }}
                                                </div>

                                                </div>`}

                                                {% endif %}
                                                {% if product.object_type == 'article' %}
                                                    ${(pe=this.data.settings)!=null&&pe.show_tag_blog?`<div class="ecom-search-tag ecom-search-tag-article ecom-search-tag_position-${this.data.settings.position_tag_blog}">Article</div>`:""}
                                                {% endif %}
                                                {% if product.object_type == 'page' %}
                                                    ${(de=this.data.settings)!=null&&de.show_tag_page?`<div class="ecom-search-tag ecom-search-tag-page ecom-search-tag_position-${this.data.settings.position_tag_page}">Page</div>`:""}
                                                {% endif %}
                                            ${this.data.settings.show_badges||((_e=this.data.settings)==null?void 0:_e.show_sale_badge)?`
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
                                            ${(ue=this.data.settings)!=null&&ue.show_sale_badge?`
                                                    {%- if product.has_only_default_variant -%}
                                                        {%- if product.compare_at_price != null and product.compare_at_price > product.price -%}
                                                            ${((me=this.data.settings)==null?void 0:me.sale_badge_type)=="amount"?"{%- assign sale = product.compare_at_price | minus: product.price | money -%}":"{%- assign sale = product.compare_at_price | minus: product.price | times: 100.0 | divided_by: product.compare_at_price | round -%}"}
                                                            <span class="ecom-collection__product-price--bage-sale">
                                                                ${this.lang((he=this.data.settings)==null?void 0:he.bage_sale,"sale_badge",{sale:"sale"})}
                                                            </span>
                                                        {%- endif -%}
                                                    {%- else -%}
                                                        {%- if product.selected_or_first_available_variant.compare_at_price != null and product.selected_or_first_available_variant.compare_at_price > product.selected_or_first_available_variant.price -%}
                                                            ${((ge=this.data.settings)==null?void 0:ge.sale_badge_type)=="amount"?"{%- assign sale = product.selected_or_first_available_variant.compare_at_price | minus: product.selected_or_first_available_variant.price | money -%}":"{%- assign sale = product.selected_or_first_available_variant.compare_at_price | minus: product.selected_or_first_available_variant.price | times: 100.0 | divided_by: product.selected_or_first_available_variant.compare_at_price | round -%}"}
                                                            <span class="ecom-collection__product-price--bage-sale">
                                                                ${this.lang((be=this.data.settings)==null?void 0:be.bage_sale,"sale_badge",{sale:"sale"})}
                                                            </span>
                                                        {%- endif -%}
                                                    {%- endif -%}
                                                    {%- assign sale = null -%}
                                                    `:""}
                                             ${this.data.settings.show_badges||((fe=this.data.settings)==null?void 0:fe.show_sale_badge)?"</div>":""}
                                            </a>
                                            {% if ${this.canUseCustomLiquidForCSR?"true":"product.object_type == 'product'"} %}
                                                 ${this.show_product_wishlist?this.wishlist_snippet:""}
                                                ${((ve=this.data.settings)==null?void 0:ve.show_wishlist)&&((ye=this.data.settings)==null?void 0:ye.show_compare)&&((we=this.data.settings)==null?void 0:we.group_btn_ver_pos)==((xe=this.data.settings)==null?void 0:xe.group_btn_ver_pos1)&&(($e=this.data.settings)==null?void 0:$e.group_btn_hor_pos)==((ke=this.data.settings)==null?void 0:ke.group_btn_hor_pos1)?`<div class="ecom-collection__product-group-button-action" style="justify-content: ${(qe=this.data.settings)==null?void 0:qe.group_btn_ver_pos}">`:""}
                                                    ${((Se=this.data.settings)==null?void 0:Se.show_wishlist)==!0?`
                                                            <div class="ecom-collection__action ecom-product__wishlist ecom-collection__action-hor-${(Ce=this.data.settings)==null?void 0:Ce.group_btn_hor_pos1} ecom-collection__action-ver-${(Me=this.data.settings)==null?void 0:Me.group_btn_ver_pos1}">
                                                                <a href="#" class="ecom-product__wishlist-link ecom-product__wishlist-visibility-${(Le=this.data.settings)!=null&&Le.wishlist_visibility?this.data.settings.wishlist_visibility:""}" data-product-handle="{{product.handle}}" data-product-id="{{product.id}}">
                                                                    ${this.data.settings.wishlist_label?`<span class="ecom-product__wishlist-normal ecom-product__wishlist-label-normal">${this.data.settings.wishlist_label}</span>`:""}
                                                                    ${this.data.settings.wishlist_label_added?`<span class="ecom-product__wishlist-added ecom-product__wishlist-label-added">${this.data.settings.wishlist_label_added}</span>`:""}
                                                                    <span class="ecom-product__wishlist-icon">
                                                                        <span class="ecom-product__wishlist-normal ecom-product__wishlist-icon-normal">${(Ae=(ze=this.data.settings)==null?void 0:ze.wishlist_icon)!=null&&Ae.value?this.data.settings.wishlist_icon.value:""}</span>
                                                                        <span class="ecom-product__wishlist-added ecom-product__wishlist-icon-added">${(Te=(De=this.data.settings)==null?void 0:De.wishlist_icon_added)!=null&&Te.value?(Ee=this.data.settings.wishlist_icon_added)==null?void 0:Ee.value:""}</span>
                                                                    </span>
                                                                    <span class="ecom-product__wishlist-tooltip ecom-product__wishlist-normal">${(Be=this.data.settings)!=null&&Be.content_tooltip_wishlist?this.data.settings.content_tooltip_wishlist:""}</span>
                                                                    <span class="ecom-product__wishlist-tooltip ecom-product__wishlist-added">${(je=this.data.settings)!=null&&je.content_tooltip_wishlist_added?this.data.settings.content_tooltip_wishlist_added:""}</span>
                                                                </a>
                                                            </div>
                                                        `:""}

                                                    ${((He=this.data.settings)==null?void 0:He.show_compare)===!0?`
                                                            <div class="ecom-collection__action ecom-product__compare ecom-collection__action-hor-${(We=this.data.settings)==null?void 0:We.group_btn_hor_pos} ecom-collection__action-ver-${(Pe=this.data.settings)==null?void 0:Pe.group_btn_ver_pos}">
                                                                <div class="ecom-product__compare-link ecom-product__wishlist-visibility-${(Ie=this.data.settings)!=null&&Ie.compare_visibility?this.data.settings.compare_visibility:""}" data-product-handle="{{product.handle}}">
                                                                    ${(Re=this.data.settings)!=null&&Re.compare_label?`<span class="ecom-product__compare-normal ecom-product__compare-label-normal">${this.data.settings.compare_label}</span>`:""}
                                                                    ${(Fe=this.data.settings)!=null&&Fe.compare_label_added?`<span class="ecom-product__compare-added ecom-product__compare-label-added">${this.data.settings.compare_label_added}</span>`:""}
                                                                    <span class="ecom-product__compare-icon">
                                                                        <span class="ecom-product__compare-normal ecom-product__compare-icon-normal">${(Je=(Ne=this.data.settings)==null?void 0:Ne.compare_icon)!=null&&Je.value?this.data.settings.compare_icon.value:""}</span>
                                                                        <span class="ecom-product__compare-added ecom-product__compare-icon-added">${(Oe=(Ve=this.data.settings)==null?void 0:Ve.compare_icon_added)!=null&&Oe.value?(Ue=this.data.settings.compare_icon_added)==null?void 0:Ue.value:""}</span>
                                                                    </span>
                                                                    <span class="ecom-product__compare-tooltip ecom-product__compare-normal">${(Ye=this.data.settings)!=null&&Ye.content_tooltip_compare?this.data.settings.content_tooltip_compare:""}</span>
                                                                    <span class="ecom-product__compare-tooltip ecom-product__compare-added">${(Qe=this.data.settings)!=null&&Qe.content_tooltip_compare_added?this.data.settings.content_tooltip_compare_added:""}</span>
                                                                </div>
                                                            </div>
                                                        `:""}
                                                ${((Ge=this.data.settings)==null?void 0:Ge.show_wishlist)&&((Ke=this.data.settings)==null?void 0:Ke.show_compare)&&((Ze=this.data.settings)==null?void 0:Ze.group_btn_ver_pos)==((Xe=this.data.settings)==null?void 0:Xe.group_btn_ver_pos1)&&((to=this.data.settings)==null?void 0:to.group_btn_hor_pos)==((eo=this.data.settings)==null?void 0:eo.group_btn_hor_pos1)?"</div>":""}
                                            {% endif %}
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
                                                <${(io=(oo=this.data.settings)==null?void 0:oo.title_tag)!=null?io:"h3"}
                                                    class="ecom-collection__product-title-tag ${this.show_product_rating?"{% if review_platform and review_platform == 'vital-reviews' %}card__heading{% endif %}":""}  ecom-child-element"
                                                    ${this.exporting?"":`data-child-name="title"
                                                    data-child-title="Title"`}
                                                >
                                                    <a
                                                        href="{% if product.object_type == 'product' %}${(no=this.data.settings)!=null&&no.link_with_collection?"{{- product.url | within: collection -}}":"{{- product.url -}}"}{% else %} {{- product.url -}} {% endif %}"
                                                        title="{{product.title | escape }}"
                                                        target="${(ao=this.data.settings)!=null&&ao.open_new_tab?"_blank":""}"
                                                        class="ecom-collection__product-item-information-title ${(so=this.data.settings)!=null&&so.title_one_row?"ecom-title-one-row":""}"
                                                    >
                                                        {{ product.title }}
                                                    </a>
                                                </${(lo=(ro=this.data.settings)==null?void 0:ro.title_tag)!=null?lo:"h3"}>
                                                    ${this.data.settings.show_date?`
                                                            {% if product.object_type == 'article' %}
                                                                <div class="ecom-search-blog-date" data-date="{{product.created_at}}">
                                                                </div>
                                                            {% endif %}
                                                            `:""}
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
                                                ${((co=this.data.settings)==null?void 0:co.show_price)=="block"?`<div class="ecom-collection__product-prices ecom-child-element" ${this.exporting?"":'data-child-name="price" data-child-title="Price"'}>
                                                    ${this.show_picker?`
                                                        {%- assign target = product.selected_or_first_available_variant -%}
                                                        <div class="ecom-collection__product-price-wrapper">
                                                            <span class="ecom-collection__product-price{% if product.compare_at_price > product.price %} ecom-collection__product-price--sale{% endif %}">{% if settings.currency_code_enabled == true %} {{target.price | money_with_currency }} {% else %} {{target.price | money }} {% endif %}</span>
                                                            <span
                                                                    class="ecom-collection__product-price--regular ecom-collection__product--compare-at-price"
                                                                    {%- if product.compare_at_price == nil or product.compare_at_price <=  product.price -%}  style="display:none" {% endif %}
                                                            >
                                                            {% if settings.currency_code_enabled == true %} {{ target.compare_at_price | money_with_currency }} {% else %} {{ target.compare_at_price | money }} {% endif %}
                                                            </span>
                                                        </div>
                                                        ${this.data.settings.show_ground_price?`
                                                            <small class="ecom-unit-price" {% if product.selected_or_first_available_variant.unit_price_measurement == nil %}style="display: none;" {% endif %}">
                                                                <span class="price-item price-item--last">
                                                                    <span class="ecom-ground-price_unit-price">{{- product.selected_or_first_available_variant.unit_price | money -}}</span>
                                                                    <span aria-hidden="true">/</span>
                                                                    <span class="ecom-ground-price_unit-price-measurement">
                                                                    {%- if product.selected_or_first_available_variant.unit_price_measurement.reference_value != 1 -%}
                                                                        {{- product.selected_or_first_available_variant.unit_price_measurement.reference_value -}}
                                                                    {%- endif -%}
                                                                    {{ product.selected_or_first_available_variant.unit_price_measurement.reference_unit }}
                                                                    </span>
                                                                </span>
                                                            </small>`:""}
                                                    `:`
                                                    {% if product.has_only_default_variant %}
                                                        <div class="ecom-collection__product-price-wrapper">
                                                            <span class="ecom-collection__product-price{% if product.compare_at_price > product.price %} ecom-collection__product-price--sale{% endif %}">{% if settings.currency_code_enabled == true %} {{product.price_min | money_with_currency }} {% else %} {{product.price_min | money }} {% endif %}</span>
                                                            <span class="ecom-collection__product-price--regular ecom-collection__product--compare-at-price"{%- if product.compare_at_price == nil or product.compare_at_price <=  product.price -%} style="display:none; content:'1'" {%- endif -%}>{% if settings.currency_code_enabled == true %} {{ product.compare_at_price_max | money_with_currency }} {% else %} {{ product.compare_at_price_max | money }} {% endif %}</span>
                                                            {%- comment -%}
                                                                <span class="ecom-collection__product-price--bage-sale">
                                                                {% assign sale = product.compare_at_price_max | minus: product.price | times: 100 | divided_by: product.compare_at_price_max  | times: 100 | money  %}
                                                                ${this.lang((po=this.data.settings)==null?void 0:po.bage_sale,"sale_badge",{sale:"sale"})}
                                                                </span>
                                                            {%- endcomment -%}
                                                        </div>
                                                        ${this.data.settings.show_ground_price?`
                                                            <small class="ecom-unit-price" {% if product.selected_or_first_available_variant.unit_price_measurement == nil %}style="display: none;" {% endif %}">

                                                                <span class="price-item price-item--last">
                                                                    <span class="ecom-ground-price_unit-price">{{- product.selected_or_first_available_variant.unit_price | money -}}</span>
                                                                    <span aria-hidden="true">/</span>

                                                                    <span class="ecom-ground-price_unit-price-measurement">
                                                                    {%- if product.selected_or_first_available_variant.unit_price_measurement.reference_value != 1 -%}
                                                                        {{- product.selected_or_first_available_variant.unit_price_measurement.reference_value -}}
                                                                    {%- endif -%}
                                                                    {{ product.selected_or_first_available_variant.unit_price_measurement.reference_unit }}
                                                                    </span>
                                                                </span>
                                                            </small>`:""}
                                                    {% else %}
                                                    ${((_o=this.data.settings)==null?void 0:_o.price_type)=="min_price"?`
                                                            <div class="ecom-collection__product-price-wrapper">
                                                                ${(uo=this.data.settings)!=null&&uo.price_from_text?`<span class="ecom-collection__product-price--from">
                                                                        ${this.lang((mo=this.data.settings)==null?void 0:mo.price_from_text,"price_from")}
                                                                    </span>`:""}
                                                                <span class="ecom-collection__product-price{% if product.compare_at_price_min > product.price_min %} ecom-collection__product-price--sale{% endif %}">
                                                                        {% if settings.currency_code_enabled == true %} {{product.price_min | money_with_currency }} {% else %} {{product.price_min | money }} {% endif %}
                                                                    </span>
                                                                    <span
                                                                        class="ecom-collection__product-price--regular ecom-collection__product--compare-at-price"
                                                                        {%- if product.compare_at_price == nil or product.compare_at_price <=  product.price -%}  style="display:none" {% endif %}
                                                                    >
                                                                        {% if settings.currency_code_enabled == true %} {{ product.compare_at_price_min | money_with_currency }} {% else %} {{ product.compare_at_price_min | money }} {% endif %}
                                                                </span>
                                                            </div>
                                                            ${this.data.settings.show_ground_price?`
                                                                <small class="ecom-unit-price" {% if product.selected_or_first_available_variant.unit_price_measurement == nil %}style="display: none;" {% endif %}">

                                                                    <span class="price-item price-item--last">
                                                                        <span class="ecom-ground-price_unit-price">{{- product.selected_or_first_available_variant.unit_price | money -}}</span>
                                                                        <span aria-hidden="true">/</span>

                                                                        <span class="ecom-ground-price_unit-price-measurement">
                                                                        {%- if product.selected_or_first_available_variant.unit_price_measurement.reference_value != 1 -%}
                                                                            {{- product.selected_or_first_available_variant.unit_price_measurement.reference_value -}}
                                                                        {%- endif -%}
                                                                        {{ product.selected_or_first_available_variant.unit_price_measurement.reference_unit }}
                                                                        </span>
                                                                    </span>
                                                                </small>`:""}
                                                        `:`
                                                            <div class="ecom-collection__product-price-wrapper">
                                                                {%- assign target = product.selected_or_first_available_variant -%}
                                                                <span class="ecom-collection__product-price{% if target.compare_at_price > target.price %} ecom-collection__product-price--sale{% endif %}">{% if settings.currency_code_enabled == true %} {{ target.price | money_with_currency }} {% else %} {{ target.price | money }} {% endif %}</span>
                                                                <span
                                                                    class="ecom-collection__product-price--regular ecom-collection__product--compare-at-price"
                                                                    {%- if product.compare_at_price == nil or product.compare_at_price <=  product.price -%}  style="display:none" {% endif %}
                                                                >
                                                                    {% if settings.currency_code_enabled == true %} {{ target.compare_at_price | money_with_currency }} {% else %} {{ target.compare_at_price | money }} {% endif %}
                                                                </span>
                                                            </div>
                                                            ${this.data.settings.show_ground_price?`
                                                                <small class="ecom-unit-price" {% if product.selected_or_first_available_variant.unit_price_measurement == nil %}style="display: none;" {% endif %}">

                                                                    <span class="price-item price-item--last">
                                                                        <span class="ecom-ground-price_unit-price">{{- product.selected_or_first_available_variant.unit_price | money -}}</span>
                                                                        <span aria-hidden="true">/</span>

                                                                        <span class="ecom-ground-price_unit-price-measurement">
                                                                        {%- if product.selected_or_first_available_variant.unit_price_measurement.reference_value != 1 -%}
                                                                            {{- product.selected_or_first_available_variant.unit_price_measurement.reference_value -}}
                                                                        {%- endif -%}
                                                                        {{ product.selected_or_first_available_variant.unit_price_measurement.reference_unit }}
                                                                        </span>
                                                                    </span>
                                                                </small>`:""}
                                                        `}
                                                        {% endif %}
                                                    `}

                                                </div>`:""}

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

                                                ${this.enable_countdown?`
                                                    {% if product.available and product.metafields.ecomposer.countdown  %}
                                                    <div
                                                        class="ecom-collection__product-countdown ecom-child-element" ${this.exporting?"":'data-child-name="countdown" data-child-title="Countdown"'}
                                                        >
                                                            <div
                                                                class="ecom-collection__product-countdown-wrapper"
                                                            >
                                                                <div class="ecom-collection__product-countdown-wrapper--title">${this.lang((ho=this.data.settings)==null?void 0:ho.countdown_title,"countdown_title")}</div>
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
                                    ${this.lang((go=this.data.settings)==null?void 0:go.trans_no_item,"no_product_item")}
                                </div>
                             </div>
                        {% endif %}
                        ${this.data.template==="product"||this.data.template==="cart"?`
                            {% if current_product %}
                                {% assign product = current_product %}
                            {% endif %}
                        `:""}

                            ${((fo=(bo=this.data)==null?void 0:bo.settings)==null?void 0:fo.pagination_type)&&((yo=(vo=this.data)==null?void 0:vo.settings)==null?void 0:yo.pagination_type)!=="off"&&this.data.settings.layout!=="slider"?`
                                {%- if paginate.pages > 1 -%}
                                ${this.data.settings.enable_progress_pagination&&this.data.settings.pagination_type!=="infinit"?`
                                        <div class="ecom-pagination-progress-bar--wrapper ecom-child-element" data-child-name="progress_pagination" data-child-title="Progress pagination">
                                            <div class="ecom-pagination-progress-bar" style="--ecom-flex-direction: ${this.data.settings.show_text_first?this.data.settings.show_text_first:"column"}">
                                            <div class="ecom-pagination-progress-bar__container">
                                                <div class="ecom-paginate__progress-bar--outner" data-total="{% if productCount %} {{productCount}} {% else %} {{search.results_count}} {% endif %}" data-init-product="${this.data.settings.limit}">
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
                                                    ${(wo=this.data.settings)!=null&&wo.loadmore_text?`<span class="ecom-paginate-loadmore--text">${this.data.settings.loadmore_text||""}</span>`:""}
                                                    ${(xo=this.data.settings)!=null&&xo.loadmore_icon?`<span class="ecom-paginate-action--icon ecom-flex ecom-al_center">${this.data.settings.loadmore_icon||""}</span>`:""}
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
                            ${this.canUseCustomLiquidForCSR?(ko=($o=this.data)==null?void 0:$o.settings)!=null&&ko.show_preview_pagination?`{% if products.size > 0 %} ${this.renderBuilderPagination()} {% endif %} `:"":"{% endpaginate %}"}
                            {% endif %}
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
                                </div>`).join("")+"</div>"}}},products(){return this.data},page_type(){return this.$store.getters["page/params"].page},isNavigation(){var o,l;return((o=this.data.settings)==null?void 0:o.layout)==="slider"&&((l=this.data.settings)==null?void 0:l.slider_navigation_layout)},isCombined(){var l,t;return((t=(l=this.data)==null?void 0:l.settings)==null?void 0:t.slider_navigation_layout)==="neo_full"?"combine":"classic"},icon(){var o;return(o=this.data.settings)==null?void 0:o.icon},mediaSizes(){var W,V,O,P,I,R,U,F,K,C,N;const o=((W=this.data)==null?void 0:W.settings)||{},l=this.layout==="slider",t=["slider_items","slider_items__tablet","slider_items__mobile"],h=l?["slider_spacing","slider_spacing__tablet","slider_spacing__mobile"]:["column_gap","column_gap__tablet","column_gap__mobile"],b=(w,$,J)=>{const B=[];return w.forEach((Z,X)=>{const Q=parseFloat(o[Z]),nt=Number.isFinite(Q)&&Q>=J;B.push(nt?Q:X===0?$:B[X-1])}),B},k=b(t,4,.1),q=b(h,0,0);let i=1;if(this.layout==="list"){const w=parseFloat((O=(V=o.image_grid_template_column)==null?void 0:V.value)!=null?O:o.image_grid_template_column);i=w>0?w/100:.4}const S=((R=(I=(P=this.$store)==null?void 0:P.getters)==null?void 0:I["page/activePreset"])==null?void 0:R.theme_settings)||{},z=parseFloat(S.layoutPadding),A=Number.isFinite(z)?z:40,D=i===1?"":` * ${Math.round(i*1e3)/1e3}`,v=(w,$)=>{const J=Math.round(q[w]*(k[w]-1)+A),B=k[w]===1?"":` / ${k[w]}`;return!B&&!D?J>0?`calc(${$} - ${J}px)`:$:`calc(${J>0?`(${$} - ${J}px)`:$}${B}${D})`},x=((U=this.section)==null?void 0:U.settings)||{};if(x["content-width"]==="full")return`(min-width: 1025px) ${v(0,"100vw")}, (min-width: 768px) ${v(1,"100vw")}, ${v(2,"100vw")}`;const M=parseFloat((K=(F=x["max-width"])==null?void 0:F.value)!=null?K:x["max-width"]),T=parseFloat((N=(C=S["max-width"])==null?void 0:C.value)!=null?N:S["max-width"]),Y=Number.isFinite(M)?M:Number.isFinite(T)?T:1200;return`(min-width: 1025px) ${(()=>{const w=q[0]*(k[0]-1),$=(Y-A-w)/k[0]*i;return`${Math.max(1,Math.round($))}px`})()}, (min-width: 768px) ${v(1,"100vw")}, ${v(2,"100vw")}`},layout(){return this.data&&this.data.settings&&"layout"in this.data.settings?this.data.settings.layout:"grid"},show_description(){return this.data&&this.data.settings&&"show_description"in this.data.settings&&this.data.settings.show_description===!0},short_limit(){return this.data&&this.data.settings&&"limit_short_description"in this.data.settings?this.data.settings.limit_short_description:10},show_picker(){return this.data&&this.data.settings&&"show_picker"in this.data.settings?this.data.settings.show_picker==="show":!1},swatch_type(){let o=this.data&&this.data.settings&&"type"in this.data.settings?this.data.settings.type:"dropdown";return["image","color","radio"].includes(o)&&this.data&&this.data.settings&&"option"in this.data.settings&&this.data.settings.option?o:"dropdown"},option_layout(){return this.data&&this.data.settings&&"option_layout"in this.data.settings&&this.data.settings.option_layout?this.data.settings.option_layout:"dropdown"},show_product_rating(){var o,l;return(l=(o=this.data)==null?void 0:o.settings)==null?void 0:l.show_product_rating},show_product_quickview(){var o,l;return(l=(o=this.data)==null?void 0:o.settings)==null?void 0:l.show_product_quickview},show_product_wishlist(){var o,l,t;return(t=(l=(o=this.data)==null?void 0:o.settings)==null?void 0:l.show_product_wishlist)!=null?t:!1},shows_countdown(){var o,l,t;return(t=(l=(o=this.data)==null?void 0:o.settings)==null?void 0:l.shows_countdown)!=null?t:[]},badge_tags(){var o,l,t;return(t=(l=(o=this.data)==null?void 0:o.settings)==null?void 0:l.badge_tags)!=null?t:"".split(`
`).join(",")},quickshop_layout(){var o,l,t;return(t=(l=(o=this.data)==null?void 0:o.settings)==null?void 0:l.quickshop_layout)!=null?t:"lite"},quickview_snippet(){var o,l,t,h,b;return`
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
                                    ${(t=(l=(o=this.data)==null?void 0:o.settings)==null?void 0:l.quickview_icon)!=null?t:""}
                                    <span class="ecom-product-quickview--text">
                                        ${this.lang((b=(h=this.data)==null?void 0:h.settings)==null?void 0:b.quickview_text,"quickview")}
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
                                        <ryviu-widget-total collection=1
                                            reviews_data="{{product.metafields.ryviu.product_reviews_info  | escape  }}"
                                            product_id="{{product.id}}" handle="{{product.handle}}">
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
                                {% else %}
                                <p>The rating platform not supported</p>
                            {%-endcase-%}
                        {%- else -%}
                            <p>Please select the rating platform in settings</p>
                        {%- endif -%}

                    </div>
                `},css(){return`
${this.$helpers.autoplayToggleCss()}
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

                .ecom-search-tag, .ecom-collection__product-badge {
                    z-index: 3;
                    position: absolute;
                    right: unset;
                    left: 16px;
                    top: 16px;
                    display: flex;
                    flex-direction: column;
                    pointer-events: none
                }
                .ecom-search-tag {
                    color: #000;
                    text-align: center;
                    align-items: center;
                    justify-content: center;
                }
                .ecom-search-tag.ecom-search-tag_position-topRight {
                    top: 16px;
                    bottom: unset;
                    left: unset;
                    right: 16px;
                }
                .ecom-search-tag.ecom-search-tag_position-bottomRight {
                    top: unset;
                    bottom: 16px;
                    left: unset;
                    right: 16px;
                }
                .ecom-search-tag.ecom-search-tag_position-bottomLeft {
                    top: unset;
                    bottom: 16px;
                    left: 16px;
                    right: unset;
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
            .ecom-doing-filter .ecom-collection__product-loading, .ecom-doing-scroll .ecom-collection__product-loading {
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
            pointer-events: none;
        }
        .ecom-collection__product-group-button-action .ecom-collection__action {
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
        `},sliderNav(){return this.data.settings.navigation_position__tablet||(this.data.settings.navigation_position__tablet=this.data.settings.navigation_position),this.data.settings.navigation_position__mobile||(this.data.settings.navigation_position__mobile=this.data.settings.navigation_position),{"--ecom-position":this.data.settings.navigation_position!=="center"?"unset":"absolute","--ecom-position__tablet":this.data.settings.navigation_position__tablet!=="center"?"unset":"absolute","--ecom-position__mobile":this.data.settings.navigation_position__mobile!=="center"?"unset":"absolute"}},enable_countdown(){var o,l,t;return(t=(l=(o=this.data)==null?void 0:o.settings)==null?void 0:l.enable_countdown)!=null?t:!1},optionSwiper(){return this.$helpers.optionSwiper(this.data.settings)},show_all(){return this.active_child_elenent===!0}},watch:{optionSwiper:{deep:!0,handler:function(){this.products.refresh=this.$helpers.randid()}},screen:{handler:function(){this.products.refresh=this.$helpers.randid()}}},methods:{renderBuilderPagination(){var h,b;if(this.data.settings.layout==="slider"||!((b=(h=this.data)==null?void 0:h.settings)!=null&&b.pagination_type)||this.data.settings.pagination_type==="off")return"";const o=this.data.settings;let l="";o.enable_progress_pagination&&o.pagination_type!=="infinit"&&(l=`
                    <div class="ecom-pagination-progress-bar--wrapper ecom-child-element" data-child-name="progress_pagination" data-child-title="Progress pagination">
                        <div class="ecom-pagination-progress-bar" style="--ecom-flex-direction: ${o.show_text_first?o.show_text_first:"column"}">
                        <div class="ecom-pagination-progress-bar__container">
                            <div class="ecom-paginate__progress-bar--outner" data-total="100" data-init-product="${o.limit}">
                                <div class="ecom-paginate__progress-bar--inner" style="width: 20%"></div>
                            </div>
                        </div>
                        <p class="ecom-paginate__progress-text" data-text="${o.text_progress_pagination?o.text_progress_pagination:"Viewing {_start} - {_end} of {_total}"}">
                            ${o.text_progress_pagination?o.text_progress_pagination.replace("{_start}",1).replace("{_end}",20).replace("{_total}",100):"Viewing 1 - 20 of 100"}
                        </p>
                        </div>
                    </div>
                `);let t="";return o.pagination_type==="default"?t=`
                    <nav role="navigation" class="ecom-child-element" data-child-name="pagination" data-child-title="Pagination">
                        <ol class="ecom-pagination-navigation ecom-collection__pagination-navigation">
                            <li class="ecom-pagination-item ecom-prev ecom-paginate-action disabled" style="${o.pagination_style==="block"?"margin-right:auto":""}">
                                ${o.number_type==="icon"||o.number_type==="text_icon"?`<span class="ecom-paginate-action--icon">${o.icon_prev_page||""}</span>`:""}
                                ${o.number_type!=="icon"?this.lang(o.text_prev_page,"prev_page"):""}
                            </li>

                            <li class="ecom-pagination-item ecom-button-active" aria-current="page">1</li>
                            <li class="ecom-pagination-item">2</li>
                            <li class="ecom-pagination-item">3</li>

                            <li class="ecom-next" style="${o.pagination_style=="block"?"margin-left:auto":""}">
                                <a class="ecom-pagination-item ecom-paginate-action" href="#">
                                ${o.number_type!=="icon"?this.lang(o.text_next_page,"next_page"):""}
                                ${o.number_type==="icon"||o.number_type==="text_icon"?`<span class="ecom-paginate-action--icon">${o.icon_next_page||""}</span>`:""}
                                </a>
                            </li>
                        </ol>
                    </nav>
                 `:["loadmore","infinit"].includes(o.pagination_type)&&(o.pagination_type==="loadmore"?t=`
                        <div class="ecom-products-pagination-loadmore ecom-w__full ecom-fl_center ecom-al_center ecom-child-element" data-child-name="pagination" data-child-title="Pagination">
                            <a href="#" class="ecom-products-pagination-loadmore-btn ecom-pagination-item">
                                <span class="ecom-paginate-loadmore--content ecom-flex ecom-al_center">
                                    ${o.loadmore_text&&o.loadmore_text!=""?`<span class="ecom-paginate-loadmore--text">${this.lang(o.loadmore_text||"","loadmore_text")}</span>`:""}
                                    ${o.loadmore_icon&&o.loadmore_icon!=""?`<span class="ecom-paginate-action--icon ecom-flex ecom-al_center">${o.loadmore_icon||""}</span>`:""}
                                </span>
                                <div class="ecom-paginate-loadmore--icon ecom-animation-spin ecom-hidden">
                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
                                </div>
                            </a>
                        </div>
                     `:t=`
                        <div class="ecom-products-pagination-infinite ecom-w__full ecom-fl_center ecom-al_center ecom-child-element" data-child-name="pagination" data-child-title="Pagination">
                            <div class="ecom-paginate-loadmore--icon ecom-animation-spin">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
                            </div>
                        </div>
                     `),l+t},getDomain(){return window.location.hostname},isArrow(){var o;return["neo_full","navigation","classic_full"].includes((o=this.data.settings)==null?void 0:o.slider_navigation_layout)},isPagination(){var o;return["neo_full","classic_full","pagination"].includes((o=this.data.settings)==null?void 0:o.slider_navigation_layout)},style(){var b,k,q;let o={};this.data.settings.styleCountdown=="column"&&(o={params:{alias:"text-align",options:{label:this.$t("alignment")}}});let l=[{group_name:"general",group_title:this.$t("general"),visible:[!0,null].includes(this.active_child_elenent),selector:" .ecom-collection__product-wrapper",params:[{type:"tab",name:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")}]},css:{isCss:!1}},{name:"backgroundColor",label:this.$t("background"),type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:i=>i.tab==="normal"}},css:{properties:{"background-color":""}}},{type:"popup",label:this.$t("box_shadow"),name:"boxShadow",options:{oneline:!0,type:"box-shadow",visible:{condition:i=>i.tab==="normal"}},css:{}},{type:"popup",label:this.$t("border"),name:"border",options:{type:"border",oneline:!0,visible:{condition:i=>i.tab==="normal"}},css:{}},{name:"borderRadius",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:{condition:i=>i.tab==="normal"}},css:{properties:{"border-radius":""}}},{name:"backgroundColorHoverMode",label:this.$t("background"),type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:i=>i.tab==="hover"}},css:{selector:":hover",properties:{"background-color":""}}},{type:"popup",label:this.$t("box_shadow"),name:"boxShadowHoverMode",options:{oneline:!0,type:"box-shadow",visible:{condition:i=>i.tab==="hover"}},css:{selector:":hover"}},{type:"popup",label:this.$t("border"),name:"borderHoverMode",options:{type:"border",oneline:!0,visible:{condition:i=>i.tab==="hover"}},css:{selector:":hover"}},{name:"borderRadiusHoverMode",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:{condition:i=>i.tab==="hover"}},css:{selector:":hover",properties:{"border-radius":""}}},{type:"line"},{name:"padding",type:"dimension",label:this.$t("padding"),options:{responsive:!0,simple:!0,units:"default"},css:{properties:{padding:""}}}]},{group_name:"products_item",group_title:this.$t("items"),visible:[!0,null].includes(this.active_child_elenent),selector:" .ecom-collection__product-item",params:[{type:"tab",name:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")}]},css:{isCss:!1}},{name:"backgroundColor",label:this.$t("background"),type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:i=>i.tab==="normal"}},css:{properties:{"background-color":""}}},{type:"popup",label:this.$t("border"),name:"border",options:{type:"border",oneline:!0,visible:{condition:i=>i.tab==="normal"}},css:{}},{type:"popup",label:this.$t("box_shadow"),name:"boxShadow",options:{oneline:!0,type:"box-shadow",visible:{condition:i=>i.tab==="normal"}},css:{}},{name:"borderRadius",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:{condition:i=>i.tab==="normal"}},css:{properties:{"border-radius":""}}},{name:"backgroundColorHoverMode",label:this.$t("background"),type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:i=>i.tab==="hover"}},css:{selector:":hover",properties:{"background-color":""}}},{type:"popup",label:this.$t("border"),name:"borderHoverMode",options:{type:"border",oneline:!0,visible:{condition:i=>i.tab==="hover"}},css:{selector:":hover"}},{type:"popup",label:this.$t("box_shadow"),name:"boxShadowHoverMode",options:{oneline:!0,type:"box-shadow",visible:{condition:i=>i.tab==="hover"}},css:{selector:":hover"}},{name:"borderRadiusHoverMode",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:{condition:i=>i.tab==="hover"}},css:{selector:":hover",properties:{"border-radius":""}}},{alias:"spacing",options:{label:this.$t("spacing")}},{type:"popup",label:this.$t("hover_animation"),name:"ImageHoverAnimation",options:{liteMode:!0,type:"dropdown",values:"animation",size:"small",icon_type:"animation",visible:{keep_data:!0,condition:i=>i&&i.tab=="hover"}},css:{selector:":hover",properties:{animation:""}}},{alias:"transitions",options:{label:this.$t("transitions")}}]},{group_title:this.$t("image"),group_name:"product_image",selector:" .ecom-collection__product-item",visible:[!0,null,"image"].includes(this.active_child_elenent),params:[{type:"number",name:"imageWidth",liteMode:!0,label:this.$t("width"),options:{responsive:!0,reset:!0,units:{"%":{min:0,max:100},px:{min:0,max:1e3},vw:{min:0,max:100}}},css:{important:!0,selector:" .ecom-collection__product-media--container",properties:{width:""}}},{type:"number",name:"imageMaxWidth",liteMode:!0,label:this.$t("max_width"),options:{responsive:!0,reset:!0,units:{"%":{min:0,max:100},px:{min:0,max:1e3},vw:{min:0,max:100}}},css:{selector:" .ecom-collection__product-media--container",properties:{"max-width":""}}},{type:"number",name:"imageHeight",liteMode:!0,label:this.$t("height"),options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3},vh:{min:0,max:100}}},css:{important:!0,selector:"  .ecom-collection__product-media--container",properties:{height:""}}},{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:" .ecom-collection__product-item--inner "}}},{name:"object-fit",liteMode:!0,label:this.$t("image_fit"),type:"popup",options:{type:"dropdown",default:!1,preview:"title",values:{none:this.$t("none"),fill:this.$t("fill"),contain:this.$t("contain"),cover:this.$t("cover"),"scale-down":this.$t("scale_down")}},css:{selector:" .ecom-collection__product-media img",properties:{"object-fit":""}}},{name:"tab",liteMode:!0,type:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")}]},css:{isCss:!1}},{name:"image_opacity",liteMode:!0,type:"number",label:this.$t("opacity"),options:{step:.01,min:.1,max:1,visible:function(i){return i.tab==="normal"}},css:{selector:" .ecom-collection__product-media img:not(.ecom-collection__product-secondary-media)",properties:{opacity:""}}},{name:"image_opacity_hover",liteMode:!0,type:"number",label:this.$t("opacity"),options:{step:.01,min:.1,max:1,visible:function(i){return i.tab==="hover"}},css:{selector:":hover .ecom-collection__product-media img:not(.ecom-collection__product-secondary-media)",properties:{opacity:""}}},{name:"image_filter",liteMode:!0,label:this.$t("css_filters"),type:"popup",options:{oneline:!0,type:"filter",visible:function(i){return i.tab==="normal"}},css:{selector:" .ecom-collection__product-media img"}},{name:"image_filter_hover",liteMode:!0,label:this.$t("css_filters"),type:"popup",options:{oneline:!0,type:"filter",visible:function(i){return i.tab==="hover"}},css:{selector:":hover .ecom-collection__product-media img"}},{name:"box_shadow",liteMode:!0,label:this.$t("box_shadow"),type:"popup",options:{oneline:!0,type:"box-shadow",visible:function(i){return i.tab==="normal"}},css:{selector:" .ecom-collection__product-media img"}},{name:"box_shadow_hover",liteMode:!0,label:this.$t("box_shadow"),type:"popup",options:{oneline:!0,type:"box-shadow",visible:function(i){return i.tab==="hover"}},css:{selector:":hover .ecom-collection__product-media img"}},{name:"border",label:this.$t("border"),type:"popup",options:{oneline:!0,type:"border",size:"small",visible:function(i){return i.tab==="normal"}},css:{selector:" .ecom-collection__product-media img"}},{name:"border_hover",label:this.$t("border"),type:"popup",options:{oneline:!0,type:"border",size:"small",visible:function(i){return i.tab==="hover"}},css:{selector:":hover .ecom-collection__product-media img"}},{name:"border_radius",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:function(i){return i.tab==="normal"}},css:{selector:" .ecom-collection__product-media img, .ecom-collection__product-media svg",properties:{"border-radius":"",overflow:"hidden"}}},{name:"border_radius_hover",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:function(i){return i.tab==="hover"}},css:{selector:":hover .ecom-collection__product-media, .ecom-collection__product-media svg",properties:{"border-radius":"",overflow:"hidden"}}},{type:"popup",label:this.$t("hover_animation"),name:"ImageHoverAnimation",liteMode:!0,options:{type:"dropdown",values:"animation",size:"small",icon_type:"animation",visible:{keep_data:!0,condition:i=>i&&i.tab=="hover"}},css:{selector:" .ecom-collection__product-media img:hover",properties:{animation:""}}},{alias:"transitions",liteMode:!0,options:{label:this.$t("transitions"),css:{selector:" .ecom-collection__product-media img"}}},{type:"line",liteMode:!0,css:{isCss:!1}},{type:"dimension",label:this.$t("spacing"),name:"spacing",options:{responsive:!0,units:"default"},css:{selector:" .ecom-collection__product-media--container",properties:{spacing:""}}}]},{group_alias:"text:hover",visible:[!0,null,"title"].includes(this.active_child_elenent),options:{group_name:"product_title",group_title:this.$t("title"),selector:" .ecom-collection__product-item-information-title"},modify:{params:[{position:10,fields:[{type:"number",name:"lines_clamp",liteMode:!0,label:this.$t("fixed_number_of_lines"),value:2,options:{min:1,max:5},css:{properties:{"--ecom-webkit-line-clamp":""}}},{alias:"spacing",options:{name:"spacingNormal",options:{visible:i=>i.tab==="normal"}}},{alias:"spacing",options:{name:"spacingHover",options:{visible:i=>i.tab==="hover"},css:{selector:":hover"}}}]}]}},this.data.settings.show_tag_blog||this.data.settings.show_tag_page?{group_alias:"button:label",options:{group_name:"tag_result",group_title:this.$t("tag_result_page_and_article"),selector:" .ecom-search-tag"}}:null,this.data.settings.show_date?{group_alias:"text",options:{group_name:"text_date_result",group_title:this.$t("date_article"),selector:" .ecom-search-blog-date"}}:null,this.data.settings.show_price=="block"?{group_alias:"text:spacing",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"product_price",group_title:this.$t("price"),selector:" .ecom-collection__product-price"},modify:{remove:{index:0,length:1},params:{position:1,fields:{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:"root .ecom-collection__product-price-wrapper"}}}}}}:null,this.data.settings.show_price=="block"?{group_alias:"text:spacing",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"product_regular",group_title:this.$t("compare_at_price"),selector:" .ecom-collection__product-price--regular, .ecom-collection__product-price--from"},modify:{remove:{index:0,length:1}}}:null,this.data.settings.show_ground_price==!0?{group_alias:"text:spacing",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"product_ground_price",group_title:this.$t("ground_price"),selector:" .ecom-unit-price"}}:null,this.data.settings.bage_sale&&this.data.settings.show_price=="block"?{group_alias:"button:label",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"product_regular_sale",group_title:this.$t("sale_price"),selector:" .ecom-collection__product-price--sale"}}:null,this.data.settings.layout!=="slider"?{group_alias:"pagination",visible:[!0,null,"pagination"].includes(this.active_child_elenent),options:{group_title:this.$t("pagination"),selector:" .ecom-collection__pagination-navigation"},modify:this.data.settings.pagination_style!=="block"?{params:[{position:10,fields:{type:"choose",name:"page_txt_alignment_horizontal",label:this.$t("text_alignment_small_horizontal_small"),options:{responsive:!0,type:"align-x-full",values:["left","center","right"]},css:{selector:" .ecom-pagination-item",properties:{"text-align":"","justify-content":""}}}},{position:10,fields:{type:"choose",name:"page_txt_alignment_vertical",label:this.$t("text_alignment_small_vertical_small"),options:{responsive:!0,type:"align-y-full",values:["start","center","end"]},css:{selector:" .ecom-pagination-item",properties:{"align-items":""}}}},{position:1,fields:{type:"choose",name:"buttonAlignment",label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{display:"flex","justify-content":""}}}}]}:null}:null,this.data.settings.layout!=="slider"&&this.data.settings.enable_progress_pagination?{group_alias:"box",visible:[!0,null,"progress_pagination"].includes(this.active_child_elenent),options:{group_name:"box_progress_pagination",group_title:this.$t("progress_pagination"),selector:" .ecom-pagination-progress-bar"},modify:{params:[{position:0,fields:[{type:"paragraph",content:`**${this.$t("box")}**`},{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:"root .ecom-pagination-progress-bar--wrapper",properties:{"justify-content":""}}}}]},{position:6,fields:[{alias:"spacing"},{type:"line"},{type:"paragraph",content:`**${this.$t("progress")}**`},{type:"number",label:this.$t("width"),name:"width_progress_pagination",options:{responsive:!0,units:{px:{min:0,max:1e3}}},css:{selector:" .ecom-paginate__progress-bar--outner",properties:{width:""}}},{type:"number",label:this.$t("height"),name:"height_progress_pagination",options:{responsive:!0,units:{px:{min:0,max:1e3}}},css:{selector:" .ecom-paginate__progress-bar--outner",properties:{height:""}}},{type:"color",name:"progress",label:this.$t("progress"),options:{global:{type:"colors"},oneline:!0},css:{selector:" .ecom-paginate__progress-bar--inner",properties:{"background-color":""}}},{type:"color",name:"track",label:this.$t("track"),options:{global:{type:"colors"},oneline:!0},css:{selector:" .ecom-paginate__progress-bar--outner",properties:{"background-color":""}}},{name:"boxBorderRadius",label:this.$t("border_radius"),type:"dimension",options:{responsive:!0,type:"radius",units:{px:{min:0,max:1e3},"%":{min:0,max:100}}},css:{selector:" .ecom-paginate__progress-bar--outner",properties:{"border-radius":"",overflow:"hidden"}}},{alias:"spacing",options:{name:"spacingPaginationProgress",css:{selector:" .ecom-pagination-progress-bar__container"}}},{type:"line"},{type:"paragraph",content:`**${this.$t("text")}**`},{type:"choose",label:this.$t("text_alignment"),name:"textTextAlign",options:{oneline:!0,responsive:!0,type:"align-full",values:["left","center","right","justify"]},css:{selector:" .ecom-paginate__progress-text",properties:{"text-align":""}}},{type:"popup",label:this.$t("typography"),name:"textTypography",options:{global:{type:"typography"},oneline:!0,responsive:!0,type:"typography"},css:{selector:" .ecom-paginate__progress-text"}},{name:"textColor",label:this.$t("text_color"),type:"color",options:{oneline:!0,global:{type:"colors"}},css:{selector:" .ecom-paginate__progress-text",properties:{color:""}}},{type:"background",label:this.$t("text_gradient"),name:"text_gradient",options:{oneline:!0,reset:!0,types:["gradient"]},css:{selector:" .ecom-paginate__progress-text",properties:{background:""," -webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}},{name:"textTextShadow",label:this.$t("text_shadow"),type:"popup",options:{oneline:!0,type:"text-shadow"},css:{selector:" .ecom-paginate__progress-text"}},{alias:"spacing",options:{name:"text_spacing",css:{selector:" .ecom-paginate__progress-text"}}}]}]}}:null,this.data.settings.show_wishlist===!0?{group_alias:"button:active",options:{group_name:"wishlist",group_title:this.$t("wishlist_button"),selector:" .ecom-product__wishlist-link"},modify:{params:{name:"iconFontSize",label:this.$t("icon_size"),type:"number",options:{responsive:!0,position:12,units:{px:{min:10,max:100}}},css:{selector:" svg",properties:{width:""}}}}}:null,this.data.settings.show_compare===!0?{group_alias:"button:active",options:{group_name:"compare",group_title:this.$t("compare_button"),selector:" .ecom-product__compare-link"},modify:{params:{name:"iconFontSize",label:this.$t("icon_size"),type:"number",options:{responsive:!0,position:12,units:{px:{min:10,max:100}}},css:{selector:" svg",properties:{width:""}}}}}:null].filter(i=>i);if(((b=this.data.settings)==null?void 0:b.style)==="absolute"&&(l.push({group_name:"product_actions",group_title:this.$t("button_actions"),visible:[!0,null,"button"].includes(this.active_child_elenent),selector:' .ecom-collection__product-item[data-style="absolute"]  .ecom-collection__product--actions',params:[{name:"flow_direction",label:this.$t("direction"),type:"popup",options:{type:"dropdown",preview:"title",default:!1,values:{column:this.$t("vertical"),row:this.$t("horizontal")}},css:{properties:{"flex-direction":""}}},...et(),{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")}]},css:{isCss:!1}},{name:"opacity",type:"number",label:this.$t("opacity"),options:{step:.01,min:0,max:1,visible:{keep_data:!0,condition:i=>i.tab==="normal"}},css:{properties:{opacity:""}}},{name:"opacity_hover",type:"number",label:this.$t("opacity"),options:{step:.01,min:.5,max:1,visible:{keep_data:!0,condition:i=>i.tab==="hover"}},css:{selector:" root .ecom-collection__product-item:hover  .ecom-collection__product--actions",properties:{opacity:""}}},{name:"background_color",label:this.$t("background"),type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:i=>i.tab==="normal"}},css:{properties:{"background-color":""}}},{name:"background_color_hover",label:this.$t("background"),type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:i=>i.tab==="hover"}},css:{selector:" root .ecom-collection__product-item:hover  .ecom-collection__product--actions",properties:{"background-color":""}}},{name:"boxShadow",label:this.$t("box_shadow"),type:"popup",options:{oneline:!0,type:"box-shadow",visible:i=>i.tab==="normal"},css:{}},{name:"boxShadowHoverMode",label:this.$t("box_shadow"),type:"popup",options:{oneline:!0,type:"box-shadow",visible:i=>i.tab==="hover"},css:{selector:" root .ecom-collection__product-item:hover  .ecom-collection__product--actions"}},{name:"border",label:this.$t("border"),type:"popup",options:{oneline:!0,type:"border",visible:i=>i.tab==="normal"},css:{}},{name:"borderHoverMode",label:this.$t("border"),type:"popup",options:{oneline:!0,type:"border-offset",visible:i=>i.tab==="hover"},css:{selector:" root .ecom-collection__product-item:hover  .ecom-collection__product--actions"}},{name:"borderRadius",label:this.$t("border_radius"),type:"dimension",options:{units:"default",type:"radius",responsive:!0,visible:i=>i.tab==="normal"},css:{properties:{"border-radius":"",overflow:"hidden"}}},{name:"borderRadiusHoverMode",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",units:"default",responsive:!0,visible:i=>i.tab==="hover"},css:{selector:" root .ecom-collection__product-item:hover  .ecom-collection__product--actions",properties:{"border-radius":""}}},{type:"number",label:this.$t("transition_duration_span_class_lowercase_ms_span"),name:"transition",options:{min:0,max:1500,visible:{keep_data:!0,condition:i=>i.tab==="hover"}},css:{properties:{transition:"all %value%ms ease"}}},{type:"line"},{type:"dimension",label:this.$t("spacing"),name:"spacing",options:{responsive:!0,units:"default"},css:{properties:{spacing:""}}}]}),l.push({group_title:this.$t("quick_shop_close_button"),group_name:"quickshop_close_button",selector:" .ecom-collection__product-close",visible:[!0,null,"button"].includes(this.active_child_elenent),params:[{type:"number",label:this.$t("width"),name:"width",options:{units:{px:{min:1,max:200}},reset:!1,responsive:!0},css:{properties:{width:"",height:""}}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")}]},css:{isCss:!1}},{name:"background_color",label:this.$t("color"),type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:i=>i.tab==="normal"}},css:{selector:"::before,::after",properties:{"background-color":""}}},{name:"background_color_hover",label:this.$t("color"),type:"color",options:{global:{type:"colors"},oneline:!0,visible:{condition:i=>i.tab==="hover"}},css:{selector:":hover::before,:hover::after",properties:{"background-color":""}}}]})),l.push({group_alias:"button",visible:[!0,null,"add_to_cart_button"].includes(this.active_child_elenent),options:{group_title:this.$t("add_to_cart_button"),group_name:"add_to_cart_button",selector:" .ecom-collection__product-submit"},modify:{params:[{position:0,fields:[...et(),{type:"choose",name:"buttonAlignment",liteMode:!0,label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"align-self":""}}}]},{position:30,fields:[{type:"line",liteMode:!0},{type:"paragraph",content:"### "+this.$t("icon"),liteMode:!0},{type:"number",label:this.$t("size"),name:"add_cart_icon_width",liteMode:!0,options:{units:{px:{min:1,max:200}},reset:!1,responsive:!0},css:{properties:{width:"",height:""},selector:" .ecom-collection__product-add-cart-icon svg"}}]}]}},{group_alias:"button",visible:[!0,null,"quick_shop_button"].includes(this.active_child_elenent),options:{group_title:this.$t("quick_shop_button"),group_name:"quick_shop_button",selector:" .ecom-collection__product-form__actions--quickshop"},modify:{params:[{position:0,fields:[...et(),{type:"choose",name:"buttonAlignment",label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"align-self":""}}}]},{position:30,fields:[{type:"line",liteMode:!0},{type:"paragraph",content:"### "+this.$t("icon"),liteMode:!0},{type:"number",label:this.$t("size"),name:"add_cart_icon_width",liteMode:!0,options:{units:{px:{min:1,max:200}},reset:!1,responsive:!0},css:{properties:{width:"",height:""},selector:" .ecom-collection__product-add-cart-icon svg"}}]}]}}),this.data.settings.show_description&&l.push({group_alias:"text:spacing",visible:[!0,null,"description"].includes(this.active_child_elenent),options:{group_title:this.$t("product_description"),group_name:"product_description",selector:" .ecom-collection__product-description"}}),l.push({group_alias:"button",visible:[!0,null,"sold_out_button"].includes(this.active_child_elenent),options:{group_name:"sold_out_button",group_title:this.$t("sold_out_button"),selector:" .ecom-collection__product-form__actions--soldout"},modify:{params:[{position:0,fields:[...et(),{type:"choose",name:"buttonAlignment",label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"align-self":""}}}]}]}}),this.data.settings.show_product_quickview&&l.push({group_alias:"button",visible:[!0,null,"quickview_button"].includes(this.active_child_elenent),options:{group_title:this.$t("quickview_button"),group_name:"quickview_button",selector:" .ecom-collection__product--quickview-wrapper > a"},modify:{params:[{position:0,fields:[...et(),{type:"choose",name:"buttonAlignment",label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"justify-content":""},selector:"root .ecom-collection__product--quickview-wrapper"}}]},{position:30,fields:[{type:"line"},{type:"paragraph",content:"### "+this.$t("icon")},{type:"number",label:this.$t("size"),name:"quickview_icon_width",options:{units:{px:{min:1,max:200}},reset:!1,responsive:!0},css:{properties:{width:"",height:""},selector:"  svg"}},{alias:"spacing",options:{css:{selector:" svg"},name:"quickview_icon_spacing"}}]}]}}),l.push({group_alias:"button",visible:[!0,null,"view_more_button"].includes(this.active_child_elenent),options:{group_title:this.$t("view_more_button"),group_name:"view_more_button",selector:" .ecom-collection__product-form__actions--view-more"},modify:{params:[{position:0,fields:[...et(),{type:"choose",name:"buttonAlignment",label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"align-self":""}}}]},{position:30,fields:[{type:"line"},{type:"paragraph",content:"### "+this.$t("icon")},{type:"number",label:this.$t("size"),name:"viewmore_icon_width",options:{units:{px:{min:1,max:200}},reset:!1,responsive:!0},css:{properties:{width:"",height:""},selector:" svg"}},{alias:"spacing",options:{css:{selector:" .ecom-collection__product-view-more-icon"},name:"viewmore_icon_spacing"}}]}]}}),this.data.settings.show_badges||((k=this.data.settings)==null?void 0:k.show_sale_badge)){let i={params:[{position:0,fields:[{alias:"align-self",options:{label:this.$t("alignment")}}]}]};l.push({group_alias:"button:label",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"sale_price_badge",group_title:this.$t("sale_price_badge"),selector:" .ecom-collection__product-badge .ecom-collection__product-price--bage-sale"},modify:i},{group_alias:"button:label",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"sale_badge",group_title:this.$t("sale_badge"),selector:" .ecom-collection__product-badge .ecom-collection__product-badge--sale"},modify:i},{group_alias:"button:label",visible:[!0,null,"price"].includes(this.active_child_elenent),options:{group_name:"sold_out_badge",group_title:this.$t("sold_out_badge"),selector:" .ecom-collection__product-badge .ecom-collection__product-badge--sold-out"},modify:i}),this.badge_tags.length&&l.push({group_alias:"button:label",visible:[!0,null,"button"].includes(this.active_child_elenent),options:{group_name:"custom_badge",group_title:this.$t("custom_badge"),selector:" .ecom-collection__product-badge .ecom-collection__product-badge--custom"},modify:i})}(this.data.settings.show_vendor||this.data.settings.show_type||this.data.settings.show_sku)&&(this.data.settings.show_vendor&&l.push({group_alias:"text:spacing",visible:[!0,null,"vendor"].includes(this.active_child_elenent),options:{group_name:"show_vendor",group_title:this.$t("vendor"),selector:" .ecom-collection__product-item-vendor a"},modify:{remove:{index:1,length:1},params:[{name:"alignment",label:this.$t("alignment"),type:"choose",options:{type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{display:"flex","justify-content":""}}}]}}),this.data.settings.show_sku&&(l.push({group_alias:"text:spacing",visible:[!0,null,"meta"].includes(this.active_child_elenent),options:{group_name:"show_sku",group_title:this.$t("sku"),selector:" .ecom-collection__product-item-sku-element"},modify:{remove:{index:1,length:1},params:[{name:"alignment",label:this.$t("alignment"),type:"choose",options:{type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{display:"flex","justify-content":""}}}]}}),l.push({group_alias:"text:spacing",visible:[!0,null,"meta"].includes(this.active_child_elenent),options:{group_name:"show_sku_title",group_title:this.$t("sku_title"),selector:" .ecom-collection__product-item-sku-title"},modify:{remove:{index:1,length:1}}})),this.data.settings.show_type&&l.push({group_alias:"text:spacing",visible:[!0,null,"show_type"].includes(this.active_child_elenent),options:{group_name:"show_type",group_title:this.$t("product_type"),selector:" .ecom-collection__product-item-type a"},modify:{remove:{index:1,length:1},params:[{name:"alignment",label:this.$t("alignment"),type:"choose",options:{type:"text-align",values:["flex-start","center","flex-end"]},css:{selector:"root  .ecom-collection__product-item-type",properties:{"justify-content":""}}}]}})),this.data.settings.show_product_rating&&l.push({group_alias:"text:spacing",visible:[!0,null,"rating"].includes(this.active_child_elenent),options:{group_title:this.$t("rating"),group_name:"product_rating",selector:" .ecom-collection__product-rating-wrapper"},modify:{remove:{index:1,length:1},params:[{name:"alignment",label:this.$t("alignment"),type:"choose",options:{type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{display:"flex","justify-content":""}}}]}}),this.data.settings.enable_countdown&&(l.push({group_alias:"box",visible:[!0,null,"countdown"].includes(this.active_child_elenent),options:{group_name:"countdown_general",group_title:this.$t("countdown_general"),selector:" .ecom-collection__product-countdown-wrapper"},modify:{params:[{position:0,fields:[...et()]},{position:1,fields:{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:" .ecom-product-single__countdown-container, .ecom-collection__product-countdown-wrapper--title"}}}},{position:30,fields:{alias:"spacing"}}]}},{group_alias:"text:spacing",visible:[!0,null,"countdown"].includes(this.active_child_elenent),options:{group_name:"countdown_title",group_title:this.$t("countdown_title"),selector:" .ecom-collection__product-countdown-wrapper--title"}},{group_alias:"box",visible:[!0,null,"countdown"].includes(this.active_child_elenent),options:{group_title:this.$t("countdown_items"),group_name:"countdown_items",selector:" .ecom-collection__product-time--item"},modify:{params:[{position:0,fields:[{type:"number",label:this.$t("width"),name:"width",options:{units:{px:{min:20,max:200}},reset:!1,responsive:!0},css:{properties:{width:""}}},{type:"number",label:this.$t("height"),name:"height",options:{units:{px:{min:20,max:200}},reset:!1,responsive:!0},css:{properties:{height:""}}}]},{position:30,fields:{alias:"spacing"}}]}},{group_alias:"button:label",visible:[!0,null,"countdown"].includes(this.active_child_elenent),options:{group_name:"countdown_number",group_title:this.$t("countdown_number"),selector:" .ecom-collection__product-time--number"},modify:o},{group_alias:"button:label",visible:[!0,null,"countdown"].includes(this.active_child_elenent),options:{group_name:"countdown_label",group_title:this.$t("countdown_label"),selector:" .ecom-collection__product-time--label"},modify:o}),this.data.settings.enable_progress_bar&&(l.push({group_name:"progress_bar",group_title:this.$t("progress_bar"),visible:[!0,null,"countdown"].includes(this.active_child_elenent),selector:" .ecom-collection__product-countdown-progress-bar--wrap",params:[{type:"number",name:"maxWidth",label:this.$t("width"),options:{responsive:!0,reset:!0,units:{"%":{min:0,max:100},px:{min:0,max:500},vw:{min:0,max:100}}},css:{properties:{"max-width":""}}},{type:"number",name:"height",label:this.$t("height"),options:{responsive:!0,reset:!0,units:{px:{min:0,max:50},vh:{min:0,max:100}}},css:{selector:" .ecom-product-single__countdown-progress-bar--timer",properties:{height:"","--ecom-countdown-max-height":""}}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"active",title:this.$t("active")}]},css:{isCss:!1}},{type:"background",label:this.$t("background"),name:"background",options:{oneline:!0,visible:{keep_data:!0,condition:i=>i.tab==="normal"}},css:{properties:{background:""}}},{type:"dimension",name:"borderRadius",label:this.$t("border_radius"),options:{type:"radius",units:"default",visible:{keep_data:!0,condition:i=>i.tab==="normal"}},css:{properties:{"border-radius":""}}},{type:"background",label:this.$t("background_active"),name:"backgroundActive",options:{oneline:!0,visible:{keep_data:!0,condition:i=>i.tab==="active"}},css:{selector:" .ecom-product-single__countdown-progress-bar--timer",properties:{background:""}}},{type:"dimension",name:"borderRadiusActive",label:this.$t("border_radius_active"),options:{type:"radius",units:"default",visible:{keep_data:!0,condition:i=>i.tab==="active"}},css:{selector:" .ecom-product-single__countdown-progress-bar--timer",properties:{"border-radius":""}}},{type:"line"},{type:"dimension",label:this.$t("spacing"),name:"spacing",options:{responsive:!0,units:"default"},css:{properties:{spacing:""}}}],position:8}),l.push({group_alias:"text:spacing",visible:[!0,null,"countdown"].includes(this.active_child_elenent),options:{group_name:"progress_bar_text",group_title:this.$t("progress_bar_text"),selector:" .ecom-collection__product-countdown-progress-bar--value"}}))),this.show_picker&&((this.data.settings.type==="radio"||this.data.settings.option_layout!=="dropdown")&&l.push({group_alias:"text:spacing",visible:[!0,null,"variant"].includes(this.active_child_elenent),options:{group_title:this.$t("variant_radio_title"),group_name:"variant_radio_title",selector:" .ecom-collection__product-picker-radio-label"}},{group_alias:"button:productSwatch",visible:[!0,null,"variant"].includes(this.active_child_elenent),options:{group_title:this.$t("variant_radio"),group_name:"variant_radio",selector:" .ecom-collection__product-swatch-item"},modify:{params:{position:0,fields:[{type:"choose",name:"alignment",label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["start","center","end"]},css:{selector:"root .ecom-collection__product-picker-radio-list,root .ecom-collection__product-picker-images-list",properties:{"justify-content":""}}},{alias:"text-align",options:{label:this.$t("text_alignment")},css:{selector:" .ecom-collection__product-swatch-item"}}]}}}),(this.data.settings.type==="dropdown"||this.data.settings.option_layout==="dropdown")&&l.push({group_alias:"text:spacing",visible:[!0,null,"variant"].includes(this.active_child_elenent),options:{group_title:this.$t("variant_select_title"),group_name:"variant_select_title",selector:" .selector-wrapper label, .ecom-collection__product-picker-dropdown-label"}},{group_alias:"input",visible:[!0,null,"variant"].includes(this.active_child_elenent),options:{group_title:this.$t("variant_dropdown"),group_name:"variant_select",selector:" .selector-wrapper select, .ecom-collection__product-picker-dropdown-list, .ecom-collection__product-picker-selection select"},modify:{params:{position:1,fields:{type:"choose",name:"alignment",label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["start","center","end"]},css:{properties:{"align-self":""}}}},remove:[{index:1,length:1},{index:4,length:1}]}}),(this.data.settings.type==="color"||this.data.settings.type==="image")&&l.push({group_alias:"text:spacing",visible:[!0,null,"variant"].includes(this.active_child_elenent),options:{group_title:this.$t("variant_swatch_title"),group_name:"variant_swatch_title",selector:" .ecom-collection__product-picker-main-label"}},{group_title:this.$t("variant_swatch"),visible:[!0,null,"variant"].includes(this.active_child_elenent),group_name:"variant_swatch",selector:" .ecom-collection__product-picker-colors-list, .ecom-collection__product-picker-images-list",params:[{type:"choose",name:"justifyContent",label:this.$t("alignment"),options:{responsive:!0,type:"text-align",values:["flex-start","center","flex-end"]},css:{properties:{"justify-content":""}}},{type:"background",name:"backgroundWraper",label:this.$t("background"),css:{properties:{background:""}}},{type:"popup",name:"borderWraper",label:this.$t("border"),options:{type:"border"},css:{properties:{border:""}}},{type:"dimension",label:this.$t("border_radius"),name:"border-radiusWraper",options:{type:"radius",units:"default"},css:{properties:{"border-radius":""}}},{type:"dimension",name:"spacingWraper",label:this.$t("spacing"),options:{units:"default"},css:{properties:{spacing:""}}},{type:"line"},{type:"paragraph",content:"### "+this.$t("item")},{type:"number",name:"width",label:this.$t("width"),options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3}}},css:{properties:{width:""},selector:" li"}},{type:"number",name:"height",label:this.$t("height"),options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3}}},css:{properties:{height:""},selector:" li"}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")},{name:"active",title:this.$t("active")}]},css:{isCss:!1}},{name:"boxShadow",label:this.$t("box_shadow"),type:"popup",options:{oneline:!0,type:"box-shadow",visible:i=>i.tab==="normal"},css:{selector:" li"}},{name:"boxShadowHoverMode",label:this.$t("box_shadow"),type:"popup",options:{oneline:!0,type:"box-shadow",visible:i=>i.tab==="hover"},css:{selector:" li:not(.ecom-product-swatch-item--active):hover"}},{name:"boxShadowActiveMode",liteMode:!0,label:this.$t("box_shadow"),type:"popup",options:{oneline:!0,type:"box-shadow",visible:i=>i.tab==="active"},css:{selector:" li.ecom-product-swatch-item--active"}},{name:"border",label:this.$t("border"),type:"popup",options:{oneline:!0,type:"border",visible:i=>i.tab==="normal"},css:{selector:" li"}},{name:"borderHoverMode",label:this.$t("border"),type:"popup",options:{oneline:!0,type:"border-offset",visible:i=>i.tab==="hover"},css:{selector:" li:not(.ecom-product-swatch-item--active):hover"}},{name:"borderActiveMode",label:this.$t("border"),type:"popup",options:{oneline:!0,type:"border-offset",visible:i=>i.tab==="active"},css:{selector:" li.ecom-product-swatch-item--active"}},{name:"borderRadius",label:this.$t("border_radius"),type:"dimension",options:{units:"default",type:"radius",responsive:!0,visible:i=>i.tab==="normal"},css:{selector:" li, li img, li .ecom-collection__product-picker-colors-item--preview",properties:{"border-radius":"",overflow:"hidden"}}},{name:"borderRadiusHoverMode",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",units:"default",responsive:!0,visible:i=>i.tab==="hover"},css:{selector:" li:not(.ecom-product-swatch-item--active):hover, li:not(.ecom-product-swatch-item--active):hover img, li:not(.ecom-product-swatch-item--active):hover .ecom-collection__product-picker-colors-item--preview",properties:{"border-radius":""}}},{name:"borderRadiusActiveMode",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",responsive:!0,units:"default",visible:i=>i.tab==="active"},css:{selector:" li.ecom-product-swatch-item--active, li.ecom-product-swatch-item--active img, li.ecom-product-swatch-item--active .ecom-collection__product-picker-colors-item--preview",properties:{"border-radius":""}}},{type:"number",label:this.$t("transition_duration_span_class_lowercase_ms_span"),name:"transition",liteMode:!0,options:{min:0,max:1500,visible:{keep_data:!0,condition:i=>i.tab==="hover"}},css:{selector:" li",properties:{transition:"all %value%ms ease"}}},{type:"line"},{type:"dimension",label:this.$t("spacing"),name:"spacing",options:{responsive:!0,units:"default"},css:{selector:" li",properties:{spacing:""}}}]})),this.data.settings.show_input_quantity&&(l.push({group_alias:"input",visible:[!0,null,"quantity"].includes(this.active_child_elenent),options:{group_title:this.$t("quantity"),group_name:"input_quantity",selector:"root .ecom-collection__product-quantity-input"},modify:{remove:[{index:7,length:1},{index:9,length:2}],params:[{position:0,fields:[{type:"paragraph",content:this.$t("b_quantity_box_b")},{type:"number",name:"width_input_quantity",label:this.$t("width"),options:{units:{"%":{min:0,max:100},px:{min:0,max:1e3},vw:{min:0,max:100}}},css:{selector:`${this.data.settings.show_plus_minus_button?"root .ecom-collection__product-quantity--wrapper":"root .ecom-collection__product-quantity-input"}`,properties:{width:""}}},{type:"number",name:"height_input_quantity",label:this.$t("height"),options:{units:{px:{min:0,max:200}}},css:{selector:`${this.data.settings.show_plus_minus_button?"root .ecom-collection__product-quantity--wrapper":"root .ecom-collection__product-quantity-input"}`,properties:{height:""}}},{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:`${this.data.settings.show_plus_minus_button?"root .ecom-collection__product-quantity--wrapper":"root .ecom-collection__product-quantity-input"}`,properties:{"justify-content":"","align-self":`${this.data.settings.quantity_inline?"center":""}`}}}},{alias:"spacing",options:{label:this.$t("spacing_quantity_box"),name:"spacing_box",css:{selector:"root .ecom-collection__product-quantity--wrapper"},simple:!0}},{type:"paragraph",content:this.$t("b_quantity_input_b")}]}]}}),l.push({group_alias:"icon:hover",visible:[!0,null,"quantity"].includes(this.active_child_elenent),options:{group_title:this.$t("minus"),group_name:"quanity_minus",selector:" .ecom-collection__quantity-controls-minus"},modify:{params:[{position:10,fields:{type:"dimension",label:this.$t("padding"),name:"padding",options:{units:"default",simple:!0}}}]}}),l.push({group_alias:"icon:hover",visible:[!0,null,"quantity"].includes(this.active_child_elenent),options:{group_title:this.$t("plus"),group_name:"quanity_plus",selector:" .ecom-collection__quantity-controls-plus"},modify:{params:[{position:10,fields:{type:"dimension",label:this.$t("padding"),name:"padding",options:{units:"default",simple:!0}}}]}})),this.data.settings.show_product_wishlist&&l.push({group_name:"product_wishlist",visible:[!0,null,"wishlist"].includes(this.active_child_elenent),group_title:this.$t("wishlist"),selector:" .ecom-collection__product--wishlist-wrapper",params:[...et(),{alias:"spacing"}]});let t=[];this.isArrow()&&t.push({title:this.$t("navigator"),type:"swiper:nav"}),this.isPagination()&&t.push({title:this.$t("pagination"),type:"swiper:pagination"});let h={};return this.isCombined==="combine"&&(h={visible:[!0,null].includes(this.active_child_elenent),params:[{alias:"spacing",options:{name:"spacingNavigation",css:{selector:" .ecom-swiper-navigation"}}},{type:"line"}],remove:{name:"justify-content"}}),this.$helpers.hasAutoplayToggle((q=this.data)==null?void 0:q.settings)&&l.push({group_alias:"swiper:autoplay",options:{group_title:this.$t("pause_button"),selector:" .ecom-collection__product-container"}}),t.length&&l.push({group_alias:t,visible:[!0,null].includes(this.active_child_elenent),options:{group_title:this.$t("navigation"),group_name:"slider_arrow",selector:" .ecom-collection__product-container"},modify:h}),l.filter(i=>i)}}},Bo={class:"ecom-collection__product-wrapper"},jo=["data-position"],Ho=["data-pagination","data-week","data-day","data-hour","data-minute","data-second","data-sale","data-review-platform","innerHTML","data-countdown-shows","data-translate","data-hide_day_of_the_week","data-format"],Wo=["data-navigator-type"],Po={class:"ecom-flex-center"},Io=["innerHTML"],Ro={class:"ecom-swiper-pagination"},Fo=["innerHTML"],No={key:2,class:"ecom-swiper-navigation-position"},Jo=["innerHTML"],Vo=["innerHTML"],Oo={key:3,class:"ecom-swiper-pagination-position ecom-swiper-pagination"},Uo={key:0,class:"ecom-collection__product-loading ecom-dn"},Yo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"none",display:"block","shape-rendering":"auto"},width:"48px",height:"48px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"};function Qo(o,l,t,h,b,k){var i,S,z,A,D,v,x,M;const q=Eo("Liquid");return G(),ot("div",{class:"ecom-element ecom-collection ecom-collection__product",onSetactive:l[0]||(l[0]=(...T)=>o.setActiveElement&&o.setActiveElement(...T))},[o.exporting?(G(),qo(q,{key:0,data:o.conditionLiquid.start},null,8,["data"])):it("",!0),L("div",Bo,[L("div",{class:So(["ecom-collection__product-container ecom-swiper-a11y-host",["ecom-collection__product-container_"+((i=o.data)==null?void 0:i.template)]])},[o.$helpers.hasAutoplayToggle(o.data.settings)?(G(),ot("button",{key:0,type:"button",class:"ecom-swiper-autoplay-toggle","data-position":((S=o.data.settings)==null?void 0:S.a11y_autoplay_control_position)||"bottom-right","data-state":"playing","data-label-pause":"Pause automatic slide show","data-label-play":"Start automatic slide show","aria-label":"Pause automatic slide show"},l[1]||(l[1]=[L("svg",{class:"ecom-swiper-autoplay-toggle__pause",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},[L("path",{d:"M8 5h3v14H8zM13 5h3v14h-3z"})],-1),L("svg",{class:"ecom-swiper-autoplay-toggle__play",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},[L("path",{d:"M8 5v14l11-7z"})],-1)]),8,jo)):it("",!0),L("div",{class:So(["ecom-collection__product-main",[{"ecom-swiper-container":o.layout==="slider"},"ecom-collection_product_template_"+((z=o.data)==null?void 0:z.template)]]),"data-pagination":o.data.settings.pagination_type,"data-week":o.lang(o.data.settings.text_week,"text_week"),"data-day":o.lang(o.data.settings.text_day,"text_day"),"data-hour":o.lang(o.data.settings.text_hour,"text_hour"),"data-minute":o.lang(o.data.settings.text_minute,"text_minute"),"data-second":o.lang(o.data.settings.text_second,"text_second"),"data-sale":o.lang(o.data.settings.bage_sale),"data-review-platform":o.liquid("review_platform"),innerHTML:o.liquid("product_items"),"data-countdown-shows":o.shows_countdown,"data-translate":o.canMultipleLanguages,"data-hide_day_of_the_week":o.data.settings.hide_day_of_the_week,"data-format":o.data.settings.format_date},null,10,Ho),o.isNavigation&&o.isCombined=="combine"?(G(),ot("div",{key:1,class:"ecom-swiper-navigation","data-navigator-type":o.isCombined=="combine"},[L("div",Po,[ct(L("button",{class:"ecom-swiper-button ecom-swiper-button-prev",innerHTML:o.data.settings.slider_prev_icon},null,8,Io),[[pt,o.isArrow()]]),ct(L("div",Ro,null,512),[[pt,o.isPagination()]]),ct(L("button",{class:"ecom-swiper-button ecom-swiper-button-next",innerHTML:(A=o.data.settings)==null?void 0:A.slider_next_icon},null,8,Fo),[[pt,o.isArrow()]])])],8,Wo)):it("",!0),o.isNavigation&&o.isCombined!="combine"?ct((G(),ot("div",No,[L("button",{style:Co(o.sliderNav),class:"ecom-swiper-button ecom-swiper-button-prev",innerHTML:(D=o.data.settings)==null?void 0:D.slider_prev_icon},null,12,Jo),L("button",{style:Co(o.sliderNav),class:"ecom-swiper-button ecom-swiper-button-next",innerHTML:(v=o.data.settings)==null?void 0:v.slider_next_icon},null,12,Vo)],512)),[[pt,o.isArrow()]]):it("",!0),o.isNavigation&&o.isCombined!="combine"?ct((G(),ot("div",Oo,null,512)),[[pt,o.isPagination()]]):it("",!0)],2),((x=o.data)==null?void 0:x.template)==="collection"||((M=o.data)==null?void 0:M.template)==="search"?(G(),ot("div",Uo,[(G(),ot("svg",Yo,l[2]||(l[2]=[L("path",{d:"M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50",fill:"#0a0a0a",stroke:"none"},[L("animateTransform",{attributeName:"transform",type:"rotate",dur:"0.5434782608695652s",repeatCount:"indefinite",keyTimes:"0;1",values:"0 50 51;360 50 51"})],-1)])))])):it("",!0)]),o.exporting?(G(),qo(q,{key:1,data:o.conditionLiquid.end},null,8,["data"])):it("",!0)],32)}const ii=To(Mo,[["render",Qo]]);Mo.__docgenInfo={exportName:"default",displayName:"Collectionproducts",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Search/Result/Result.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Search/Result/results.js","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/collectionProductCSR.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{ii as default};
//# sourceMappingURL=Result.ac884016.js.map
