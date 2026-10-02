import{_ as De,L as We,J as Ze,E as Ue,s as Fe,c as Xe,a as xe}from"./preview.95a7df14.js";import{o as de,a as me,y as ce,x as He,E as je,F as Je}from"./vue.esm-bundler.b9dec9d9.js";import"./chunk-KSYMO6G6.f719e32d.js";import"./index.e850844b.js";import"./iframe.048ad53f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.f037b798.js";const Ge={name:"productImage",presets:!0,vendors:["simple_slider_js","simple_slider_css","modal_js","modal_css","zoom_js","light_galerry"],mixins:[We,Ze,Ue],props:{data:{type:Object,default(){return{}}}},data(){var e,o;return{_debouncedMetafieldCodeTimer:null,validMetafieldCode:Fe((o=(e=this.data)==null?void 0:e.settings)==null?void 0:o.metafield_label),debouncedResetPagination:null,jsreactives:["slidesPerView","slidesPerView__tablet","slidesPerView__mobile","position_zoom","spaceBetween","spaceBetween__tablet","spaceBetween__mobile","spacing_slider","featured_image_priority","itemsPerView","itemsSpace","itemsSpace__tablet","itemsSpace__mobile","show_pagination","thumbnail_position","thumbnail_position__tablet","thumbnail_position__mobile","position_sticky","disable_auto_height","enable_gallery","gallery_name","grid_advance_number_images","centeredSlides","slide_loop","enable_product_link","sliderControls","sliderControlsThumb","focus_center_thumb"]}},computed:{csrContext(){var o,i,t,l,r,d,E;return{type:"product",handle:((t=(i=(o=this.data)==null?void 0:o.settings)==null?void 0:i.product)==null?void 0:t.value)||((E=(d=(r=(l=this.shopifyWrapper)==null?void 0:l.data)==null?void 0:r.settings)==null?void 0:d.product)==null?void 0:E.value)||null,metafieldCode:this.validMetafieldCode}},prevIcon(){var e,o,i;return((i=(o=(e=this.data)==null?void 0:e.settings)==null?void 0:o.prevIcon)==null?void 0:i.value)||`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>`},nextIcon(){var e,o,i;return((i=(o=(e=this.data)==null?void 0:e.settings)==null?void 0:o.nextIcon)==null?void 0:i.value)||`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>`},prevIconThumb(){var e,o,i;return((i=(o=(e=this.data)==null?void 0:e.settings)==null?void 0:o.prevIconThumb)==null?void 0:i.value)||`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>`},nextIconThumb(){var e,o,i;return((i=(o=(e=this.data)==null?void 0:e.settings)==null?void 0:o.nextIconThumb)==null?void 0:i.value)||`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>`},settings(){return[{group_title:this.$t("general"),params:[{type:"popup",label:this.$t("image_layout"),name:"layout",options:{type:"dropdown",default:!1,preview:"title",values:{slider:this.$t("slider"),grid_default:this.$t("grid"),grid:this.$t("grid_advance"),single:this.$t("single_image")}}},{name:"grid_items",label:this.$t("grid_items_per_row"),type:"popup",value:12,options:{type:"dropdown",responsive:!0,preview:"title",default:!1,visible:function(e){return e.layout=="grid_default"},values:{12:"1",6:"2",4:"3",3:"4",15:"5",2:"6"}}},{type:"toggle",name:"enable_product_link",label:this.$t("enable_product_link"),description:this.$t("dont_work_with_zoom_option"),options:{oneline:!0,values:{off:{label:this.$t("no"),value:!1},on:{label:this.$t("yes"),value:!0}}}},{type:"toggle",name:"open_in_new_window",label:this.$t("open_in_new_window"),options:{oneline:!0,values:{off:{label:this.$t("no"),value:!1},on:{label:this.$t("yes"),value:!0}},visible:function(e){return e.enable_product_link}}},{type:"toggle",name:"use_limit_images",label:this.$t("limit_number_of_images"),description:this.$t("if_you_limit_the_displaying_images_the_variant_images_grouped_feature_will_not_work"),options:{oneline:!0,values:{off:{label:this.$t("no"),value:!1},on:{label:this.$t("yes"),value:!0}},visible:{keep_data:!1,condition:e=>e.layout==="grid"||e.layout==="grid_default"}},css:{isCss:!1}},{name:"grid_advance_number_images",label:this.$t("number_of_images"),type:"number",options:{units:{"":{min:1,max:50,step:1}},visible:{keep_data:!1,condition:e=>(e.layout==="grid"||e.layout==="grid_default")&&e.use_limit_images===!0}},css:!1},{type:"line",name:"line1",options:{visible:function(e){return e&&e.image_action==="lightbox"||(e.layout==="grid"||e.layout==="grid_default")&&e.use_limit_images===!0}}},{type:"toggle",value:"nothing",name:"image_action",label:this.$t("zoom_image_in_lightbox"),description:this.$t("option_work_on_the_live_page_only"),options:{values:{on:{label:this.$t("yes"),value:"lightbox"},off:{label:this.$t("no"),value:"nothing"}}}},{type:"picker",name:"zoom_icon",label:this.$t("zoom_icon"),options:{type:"icon",layout:"grid",keep_data:!1,output:"value",multiple:!1,simple:!1,visible:function(e){return e&&e.image_action==="lightbox"}}},{name:"zoom_position",label:this.$t("zoom_icon_position"),type:"popup",value:"bottomright",options:{type:"dropdown",default:!1,preview:"title",keep_data:!1,values:{topleft:this.$t("top_left"),topright:this.$t("top_right"),bottomleft:this.$t("bottom_left"),bottomright:this.$t("bottom_right")},visible:function(e){return e&&e.image_action==="lightbox"&&e.zoom_icon},control_width:"50%"}},{type:"line",name:"line2",options:{visible:function(e){return e&&e.image_action==="lightbox"}}},{type:"toggle",value:!1,name:"disable_lazyload",label:this.$t("disable_lazyload_image"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"toggle",name:"featured_image_priority",label:this.$t("show_the_featured_image_first"),options:{visible:function(e){return e.layout!=="grid"},values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"toggle",label:this.$t("enable_hover_to_zoom_image"),name:"enable_zoom",description:this.$t("i_hover_to_zoom_not_working_on_touch_based_devices_tablet_mobile_i"),options:{oneline:!0,values:{on:{label:this.$t("on"),value:!0},off:{label:this.$t("off"),value:!1}}}},{name:"zoom_type",label:this.$t("hover_to_zoom_type"),type:"popup",value:"inner",options:{type:"dropdown",responsive:!1,preview:"title",default:!1,visible:function(e){return e.enable_zoom},values:{inner:this.$t("inner"),outer:this.$t("outer")}}},{type:"paragraph",content:this.$t("zoom_image_in_lightbox_not_working_if_hover_to_zoom_type_is_inner"),name:"paragraph__",options:{visible:function(e){return e&&e.zoom_type==="inner"}}},{name:"zoom_width",label:this.$t("zoom_window_width"),type:"number",value:50,options:{units:{px:{min:100,max:800}},visible:function(e){return e.enable_zoom&&e.zoom_type=="outer"}}},{name:"zoom_height",label:this.$t("zoom_window_height"),type:"number",value:500,options:{units:{px:{min:100,max:800}},visible:function(e){return e.enable_zoom&&e.zoom_type=="outer"}}},{type:"line",options:{visible:function(e){return e.enable_zoom}}},{type:"choose",label:this.$t("image_alignment"),name:"imageAlign",options:{oneline:!0,responsive:!0,type:"text-align",values:["left","center","right"]}},{type:"toggle",label:this.$t("enable_position_sticky"),description:this.$t("i_only_work_on_desktop_i"),name:"position_sticky",options:{oneline:!0,values:{on:{label:this.$t("on"),value:!0},off:{label:this.$t("off"),value:!1}}}},{type:"line"},{type:"picker",label:this.$t("video_icon"),name:"video_icon",options:{type:"icon",multiple:!1}},{type:"line"},{type:"paragraph",content:this.$t("video_setting_i_only_work_with_shopify_video_i")},{type:"toggle",label:this.$t("auto_play"),name:"video_auto_play",options:{oneline:!0,values:{on:{label:this.$t("on"),value:!0},off:{label:this.$t("off"),value:!1}}}},{type:"toggle",label:this.$t("loop"),name:"video_loop",options:{oneline:!0,values:{on:{label:this.$t("on"),value:!0},off:{label:this.$t("off"),value:!1}}}},{type:"toggle",label:this.$t("enable_control"),name:"video_control",options:{oneline:!0,values:{on:{label:this.$t("on"),value:!0},off:{label:this.$t("off"),value:!1}}}},{type:"toggle",label:this.$t("mute"),name:"video_mute",options:{oneline:!0,values:{on:{label:this.$t("on"),value:!0},off:{label:this.$t("off"),value:!1}}}}]},{group_title:this.$t("slider_settings"),options:{visible:function(e,o){return o.layout==="slider"}},params:[{type:"paragraph",content:"## "+this.$t("slider")},{name:"itemsPerView",label:this.$t("number_slides_per_view"),type:"number",description:this.$t("the_value_must_be_an_integer"),options:{reset:!1,responsive:!0,min:1,max:6,visible:function(e){return e.layout=="slider"}}},{name:"itemsSpace",label:this.$t("spacing_between_slides"),type:"number",options:{reset:!1,responsive:!0,min:0,max:100,unit:"px",visible:function(e){return e.layout=="slider"}}},{name:"centeredSlides",label:this.$t("centered_slides"),description:this.$t("if_enable_you_should_enable_infinite_loop_option"),type:"toggle",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{label:this.$t("infinite_loop"),name:"slide_loop",type:"toggle",options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{name:"disable_auto_height",label:this.$t("disable_auto_height"),type:"toggle",value:!0,options:{values:{on:{label:this.$t("yes"),value:!1},off:{label:this.$t("no"),value:!0}}}},{type:"number",label:this.$t("height"),name:"height",placeholder:"300",options:{responsive:!0,units:{px:{min:100,max:1500}},visible:{keep_data:!1,condition:e=>e.disable_auto_height===!1}},css:{important:!0,selector:" .ecom-swiper-wrapper.ecom-product-single__media--images"}},{type:"line",name:"thumbnail_line",options:{oneline:!0,visible:function(e){return e.layout=="slider"}}},{type:"paragraph",content:"## "+this.$t("thumbnail"),name:"thumbnail_desc",options:{oneline:!0,visible:function(e){return e.layout=="slider"}}},{type:"toggle",label:this.$t("show_thumbnails"),name:"show_thumbnails",options:{oneline:!0,visible:function(e){return e.layout=="slider"},values:{on:{label:this.$t("on"),value:!0},off:{label:this.$t("off"),value:!1}}}},{name:"thumbnail_position",label:this.$t("thumbnail_position"),type:"popup",options:{type:"dropdown",responsive:!0,preview:"title",default:!1,visible:function(e){return e.layout=="slider"&&e.show_thumbnails},values:{"row-reverse":this.$t("left"),row:this.$t("right"),column:this.$t("bottom"),"column-reverse":this.$t("top")}},css:{selector:" .ecom-product-single__media--slider",properties:{"flex-flow":""}}},{name:"focus_center_thumb",label:this.$t("focus_center"),type:"toggle",options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"number",name:"spacing_slider",label:this.$t("spacing_between"),options:{responsive:!0,units:{px:{min:2,max:100,step:1}},visible:function(e){return e.layout=="slider"&&e.show_thumbnails},reset:!1},css:{selector:" .ecom-product-single__media .ecom-product-single__media-container",properties:{gap:""}}},{type:"number",name:"slidesPerView",label:this.$t("number_thumbnails_per_slide"),description:this.$t("only_work_when_thumbnail_position_is_top_or_bottom"),options:{reset:!1,responsive:!0,min:1,max:9,visible:function(e){return e.layout=="slider"&&e.show_thumbnails}}},{type:"number",name:"spaceBetween",label:this.$t("thumbnails_spacing"),options:{reset:!1,responsive:!0,min:0,unit:"px",max:80,visible:function(e){return e.layout=="slider"&&e.show_thumbnails}}},{type:"number",name:"thumbnailMaxWidth",label:this.$t("thumbnail_max_width"),options:{responsive:!0,units:{px:{min:50,max:400}},visible:function(e){return e.layout=="slider"&&e.show_thumbnails}},css:{selector:"root .ecom-product-single__media--thumbs",properties:{"max-width":""}}},{type:"paragraph",content:this.$t("thumbnail_crop_size_px"),name:"thumbnail_group",options:{visible:function(e){return e.layout=="slider"&&e.show_thumbnails}}},{type:"number",label:this.$t("width"),name:"thumbnail_width",options:{reset:!1,visible:function(e){return e.layout=="slider"&&e.show_thumbnails},slider:!1,half:!0,max:900}},{type:"number",label:this.$t("height"),placeholder:"100",name:"thumbnail_height",options:{max:900,slider:!1,half:!0,reset:!1,visible:function(e){return e.layout=="slider"&&e.show_thumbnails}}},{type:"popup",label:this.$t("crop_position"),name:"thumbnail_crop",options:{type:"dropdown",default:!1,preview:"title",values:{none:this.$t("none"),top:this.$t("top"),bottom:this.$t("bottom"),center:this.$t("center"),left:this.$t("left"),right:this.$t("right")},visible:function(e){return e.layout=="slider"&&e.show_thumbnails}}},{type:"picker",label:this.$t("3_d_model_icon"),name:"thumbnail_model_icon",options:{type:"icon",multiple:!1,visible:function(e){return e.layout=="slider"&&e.show_thumbnails}}},{type:"picker",label:this.$t("video_icon"),name:"thumbnail_video_icon",options:{type:"icon",multiple:!1,visible:function(e){return e.layout=="slider"&&e.show_thumbnails}}},{name:"line",type:"line",options:{visible:function(e){return e.show_thumbnails&&e.enable_zoom!==!0}}},{type:"paragraph",content:this.$t("nav_pagination"),name:"thumbnail_nav",options:{oneline:!0,visible:function(e){return e.layout=="slider"}}},{name:"show_pagination",label:this.$t("enable_pagination"),type:"toggle",options:{reset:!1,responsive:!1,visible:function(e){return e.layout=="slider"},values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"toggle",label:this.$t("enable_navigation"),name:"sliderControls",options:{oneline:!0,values:{on:{label:this.$t("on"),value:!0},off:{label:this.$t("off"),value:!1}}}},{type:"picker",label:this.$t("prev_icon"),name:"prevIcon",options:{type:"icon",multiple:!1,visible:{keep_data:!1,condition:e=>e.sliderControls}}},{type:"picker",label:this.$t("next_icon"),name:"nextIcon",options:{type:"icon",multiple:!1,visible:{keep_data:!1,condition:e=>e.sliderControls}}},{type:"toggle",label:this.$t("enable_navigation_thumb"),name:"sliderControlsThumb",options:{oneline:!0,values:{on:{label:this.$t("on"),value:!0},off:{label:this.$t("off"),value:!1}},visible:function(e){return e.show_thumbnails}}},{type:"picker",label:this.$t("prev_icon"),name:"prevIconThumb",options:{type:"icon",multiple:!1,visible:{keep_data:!1,condition:e=>e.sliderControlsThumb&&e.show_thumbnails}}},{type:"picker",label:this.$t("next_icon"),name:"nextIconThumb",options:{type:"icon",multiple:!1,visible:{keep_data:!1,condition:e=>e.sliderControlsThumb&&e.show_thumbnails}}}]},{group_title:this.$t("badge"),params:[{type:"toggle",name:"show_sale_sold_text",value:!1,label:this.$t("show_sale_sold_out_text_badge"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"text",label:this.$t("badge_sale_text"),placeholder:"Sale {price}%",value:"Sale",name:"sale_text",options:{visible:function(e){return e&&e.show_sale_sold_text===!0}}},{type:"text",label:this.$t("badge_sold_out_text"),value:"Sold out",name:"sold_text",options:{visible:function(e){return e&&e.show_sale_sold_text===!0}}},{type:"toggle",name:"show_sale_badge",value:!1,label:this.$t("show_sale_value_badge"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{name:"sale_badge_type",type:"popup",label:this.$t("sale_value_badge_type"),value:"percent",options:{default:!1,type:"dropdown",preview:"title",values:{percent:this.$t("percent"),amount:this.$t("amount_label")},visible:function(e){return e&&e.show_sale_badge===!0}}},{name:"bage_sale",label:this.$t("sale_value_badge_text"),type:"text",value:"{{sale}}%",placeholder:"-{{sale}}%",description:this.$t("badge_sale_off_value_will_replace_in_block_sale"),options:{visible:function(e){return e&&e.show_sale_badge}}},{type:"line"},{type:"paragraph",content:this.$t("elevate_your_sales_with_premium_badges_&_labels",{link:"https://apps.shopify.com/product-badges-label-design?utm_source=co_marketing&utm_medium=ecomposer&utm_campaign=inapp_settings"})},{type:"paragraph",content:this.$t("b_i_custom_badge_i_b")},{name:"metafield_label",label:this.$t("metafield_badge"),type:"text",value:"",placeholder:"product.metafields...",description:this.$t("renders_badge_from_metafields_example_br_i_product_metafields_custom_example_value_i")},{type:"toggle",name:"show_badges_tags",value:!1,label:this.$t("custom_tags_badge"),options:{oneline:!0,values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}},css:{isCss:!1},description:this.$t("renders_sale_or_sold_out_and_tags_if_the_product_matches_the_condition")},{type:"textarea",label:this.$t("show_when_product_contains_tags"),name:"label_badge_tags",description:this.$t("note_divide_value_with_br_eg_hot_new_clothing"),options:{height:1,visible:function(e){return e.show_badges_tags}}},{type:"textarea",label:this.$t("custom_badge_code"),name:"label_badge_code",options:{placeholder:"<span>{{ custom.badge }}</span>",editor:!0,language:"html"}},{type:"line"},{name:"label_position",label:this.$t("badge_position"),type:"popup",value:"topleft",options:{type:"dropdown",default:!1,preview:"title",values:{topleft:this.$t("top_left"),topright:this.$t("top_right"),bottomleft:this.$t("bottom_left"),bottomright:this.$t("bottom_right")},control_width:"50%"}}]},{group_title:this.$t("variant_images_grouped"),params:[{type:"switch",name:"enable_gallery",label:this.$t("on_off"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"text",label:this.$t("option_name"),name:"gallery_name",description:this.$t("enter_the_option_name_which_you_want_to_group_images_br_ex_size"),options:{visible:function(e){return e&&e.enable_gallery}}},{type:"paragraph",content:this.$t("guide_detail_https_help_ecomposer_io_docs_editor_elements_product_elements_image_variant_image_grouped")}]}]},sale_text(){return this.data&&this.data.settings&&"sale_text"in this.data.settings?this.data.settings.sale_text:""},sold_text(){return this.data&&this.data.settings&&"sold_text"in this.data.settings?this.data.settings.sold_text:""},label_badge_tags(){var e,o,i;return(i=(o=(e=this.data)==null?void 0:e.settings)==null?void 0:o.label_badge_tags)!=null?i:"".split(`
`).trim().join(",")},screens(){let e=this.$store.getters["builder/screens"];return e?Object.entries(e).sort(([,o],[,i])=>o.width-i.width):[]},screen(){return this.$store.getters["builder/screen"]},screenMinW(){let e=[];for(let o in this.screens){let i=this.$helpers.copy(this.screens[o]);i[1].width=o==="0"?0:parseInt(this.screens[o-1][1].width)+1,e.push(i)}return e},breakpoints(){let e={},o=this.data.settings,i={perPage:"itemsPerView",gap:"itemsSpace"};return this.screenMinW.forEach(([,t])=>{e[t.width]={},Object.keys(i).forEach(l=>{let r=t.name==="desktop"?i[l]:i[l]+"__"+t.name;e[t.width][l]=o[r]})}),e},thumbsBreakpoints(){let e={},o=this.data.settings,i=["perPage","gap","thumbnail_position"];return this.screenMinW.forEach(([,t])=>{e[t.width]={},i.forEach(l=>{let r=t.name==="desktop"?l:l+"__"+t.name,d=t.name==="desktop"?"thumbnail_position":"thumbnail_position__"+t.name;if(l==="perPage"){let E=t.name==="desktop"?"slidesPerView":"slidesPerView__"+t.name;["row","row-reverse"].includes(o[d])?e[t.width][l]=1:e[t.width][l]=o[E]}else if(l==="gap"){let E=t.name==="desktop"?"spaceBetween":"spaceBetween__"+t.name;e[t.width][l]=o[E]}else e[t.width][l]=o[r]})}),e},thumbClass(){let e=this.data.settings;return{"ecom-swiper-tablet-vertical":["row","row-reverse"].includes(e==null?void 0:e.thumbnail_position__tablet),"ecom-swiper-mobile-vertical":["row","row-reverse"].includes(e==null?void 0:e.thumbnail_position__mobile)}},isRTL(){return Xe(this.idoc())},javascript(){return function(){var Ce,Te,Ee,qe,Ve,Ae;if(!this.$el)return!1;function e(){var k,R,P,J,H,K,Q,n;const s=window.document||document;if(!s)return!1;const p=["ar","arc","dv","fa","ha","he","khw","ks","ku","ps","ur"];if((((k=s.documentElement)==null?void 0:k.dir)||((R=s.documentElement)==null?void 0:R.getAttribute("dir"))||((P=s.querySelector("html"))==null?void 0:P.getAttribute("dir")))==="rtl"||(((J=s.body)==null?void 0:J.dir)||((H=s.body)==null?void 0:H.getAttribute("dir")))==="rtl"||s.documentElement&&window.getComputedStyle(s.documentElement).direction==="rtl"||s.body&&window.getComputedStyle(s.body).direction==="rtl")return!0;const X=((K=s.documentElement)==null?void 0:K.lang)||((Q=s.documentElement)==null?void 0:Q.getAttribute("lang"))||((n=s.querySelector("html"))==null?void 0:n.getAttribute("lang"));return!!(X&&p.includes(X.toLowerCase()))}const o=this,i=this.id,t=this.$el,l=this.isLive,r={width:this.settings.zoom_width,height:this.settings.zoom_height},d=t.closest(".ecom-product-form--single"),E=this.settings.show_thumbnails?this.settings.show_thumbnails:!1,G=this.settings.layout?this.settings.layout:"slider",O=this.settings.enable_zoom?this.settings.enable_zoom:!1,Z=this.settings.image_action&&this.settings.image_action==="lightbox";var c,a,te=this.settings.thumbnail_position,ie=this.settings.thumbnail_position__tablet,oe=this.settings.thumbnail_position__mobile,ae=!!this.settings.show_pagination,se=!!this.settings.sliderControls,ne=!!this.settings.sliderControlsThumb,U=(Ce=this.settings.enable_gallery)!=null?Ce:!1,N=(Te=this.settings.gallery_name)!=null?Te:!1,q=(Ee=this.settings.centeredSlides)!=null?Ee:!1,le=(qe=this.settings.slide_loop)!=null?qe:!1,ue=this.settings.disable_auto_height,fe=(Ve=this.settings.video_auto_play)!=null?Ve:!1,ve=(Ae=this.settings.focus_center_thumb)!=null?Ae:!1;function ke(){var ge,X;if(G==="slider")try{let J=function(){!P||(P.dataset.ecomProgrammaticMove="1",clearTimeout(p),p=setTimeout(K,1500))},H=function(){return!!(P&&P.dataset.ecomProgrammaticMove==="1")},K=function(){clearTimeout(p),P&&P.dataset.ecomProgrammaticMove&&delete P.dataset.ecomProgrammaticMove};if(!l){const n=o.$el.querySelector(".ecom-product-single__media--featured");if(!n||!n.querySelector(".ec_splide__list"))return}if(E){const n=o.$el.querySelector(".ecom-product-single__media--thumbs");let x=((ge=n.dataset)==null?void 0:ge.direction)==="rtl";l&&e&&(x=e());let V=JSON.parse(n.dataset.breakpoints);if(Object.keys(V).forEach(S=>{let y="thumbnail_position";V[S].direction=["row","row-reverse"].includes(V[S][y])?"ttb":x?"rtl":"ltr"}),l?n.hasChildNodes():n.querySelector(".ec_splide__list")){const S=window.matchMedia("(max-width: 767px)").matches,y=window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches,u=window.matchMedia("(min-width: 1025px)").matches,M=["row","row-reverse"].includes(te)&&u||["row","row-reverse"].includes(ie)&&y||["row","row-reverse"].includes(oe)&&S,F={rewind:le,isNavigation:!0,arrows:ne,pagination:!1,autoHeight:!!M,drag:!!l,mediaQuery:"min",isThumb:!0,rewind:!0,breakpoints:V,direction:x?"rtl":"ltr",noSwiperCustom:!1,trimSpace:!0,perPage:4};M&&(F.height="auto"),c=new EcSplide(n,F),c.on("updated",function(A){(A.direction==="rtl"||A.direction==="ltr")&&(c.options.height=void 0,c.options.autoHeight=!1),setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)}),c.on("mounted",function(){setTimeout(()=>{n&&n.classList.remove("ecom-product-single__init-thumb-hidden")},500)})}let z=null;n.querySelectorAll("img").forEach(function(S){S.dataset._lh||(S.dataset._lh="1",S.addEventListener("load",function(){clearTimeout(z),z=setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)},{once:!0}))})}const k=t.querySelector(".ecom-product-single__media--featured");let R=((X=k.dataset)==null?void 0:X.direction)==="rtl";l&&e&&(R=e());var s=k.dataset.breakpoints;s=s?JSON.parse(s):{0:{perPage:1,gap:20}},a=new EcSplide(k,{type:"slide",autoHeight:!!ue,lazyload:!0,pagination:ae,arrows:se,drag:!!l,flickPower:600,type:le?"loop":"slide",focus:q?"center":"",rewind:!0,mediaQuery:"min",trimSpace:!0,breakpoints:s,dynamicBullets:!0,direction:R?"rtl":"ltr",paginationDirection:R?"rtl":"ltr",noSwiperCustom:!1}),a.on("ready",function(){var V,z,S;const n=(S=(z=(V=a.Components)==null?void 0:V.Slides)==null?void 0:z.getAt(a.index))==null?void 0:S.slide;if(!n)return;ue||a.Components.Elements.root.classList.add("ec_splide--disable-autoheight");const x=n.querySelector("video");x&&x.hasAttribute("autoplay")&&x.play(),n&&O&&ye(n)});const P=a.root||k;var p=null,v=!1;a.on("updated",function(n){if(v)return;v=!0,a.refresh();let x=a.index;J(),a.go(0),a.go(x),setTimeout(()=>{v=!1},200)}),a.on("move",function(n,x,V){var S;if(U)return;n!==x&&(a.lastIndex=n+"");const z=d&&d.querySelector('[name="id"]');if(z&&!H()){let y=null;const u=a.Components.Slides.getAt(n);if(!u)return;if(y=(S=u.slide.dataset)==null?void 0:S.variant_id,y){y=y+"";const M=z.value;(!M||!y.includes(M.toString()))&&(z.value=y.split(",")[0],z.dispatchEvent(new Event("swatch")))}}if(O){const y=a.Components.Slides.getAt(n);y&&ye(y.slide)}}),a.on("moved",function(n,x,V){var F,A,j,Y,we,he,_e,w,D;if(K(),!a.Components.Slides)return;const z=(j=(A=(F=a.Components)==null?void 0:F.Slides)==null?void 0:A.getAt(n))==null?void 0:j.slide,S=(he=(we=(Y=a.Components)==null?void 0:Y.Slides)==null?void 0:we.getAt(x))==null?void 0:he.slide;if(!z||!S)return;const y=S.querySelector("iframe, video");y&&(y.nodeName==="IFRAME"?y.src=y.src:y.pause());const u=z.querySelector("video");if(u&&u.hasAttribute("autoplay")&&u.play(),c&&setTimeout(()=>{var L=c.options&&c.options.direction,I=!["ltr","rtl"].includes(L);if(I){var re=a.root.clientHeight;c.options={height:re>0?re:void 0},c.refresh()}},0),l){const L=(D=(w=(_e=a.Components)==null?void 0:_e.Slides)==null?void 0:w.getAt(n))==null?void 0:D.slide;if(L){var M=!L.classList.contains("ecom-swiper-no-swiping");a.options.drag!==M&&(a.options.drag=M)}}}),a.on("ready moved",function(n,x,V){const z=[],S=a.options.perPage,y=V!==void 0&&V!==x?V:a.index,u=a.Components.Slides.getLength(!0);let M=y,F=y+S;F>u&&(M=Math.max(0,u-S),F=u);for(let A=M;A<F;A++){const j=a.Components.Slides.getAt(A);j&&z.push(j.slide)}z.forEach(A=>{const j=A.querySelector("video");if(j)try{j.pause(),fe&&j.play()}catch{}})}),a.on("mounted",()=>{!c||setTimeout(()=>{var n=c.options&&c.options.direction,x=!["ltr","rtl"].includes(n),V=a.root.clientHeight,z={focus:ve?"center":void 0};x&&(z.height=V>0?V:void 0),c.options=z,c.refresh()},300)});try{if(c&&a.sync(c),k.ec_splide)if(l)a.refresh(),c&&c.refresh();else{try{k.ec_splide.destroy(!0)}catch{}k.ec_splide=null;const n=o.$el.querySelector(".ecom-product-single__media--thumbs");if(n&&n.ec_splide){try{n.ec_splide.destroy(!0)}catch{}n.ec_splide=null}k.ec_splide=a,a.mount(),c&&(n&&(n.ec_splide=c),c.mount())}else if(k.ec_splide=a,a.mount(),c){if(!l){const n=o.$el.querySelector(".ecom-product-single__media--thumbs");n&&(n.ec_splide=c)}c.mount()}}catch(n){console.log(n)}let Q=null;k.querySelectorAll("img").forEach(function(n){n.dataset._lh||(n.dataset._lh="1",n.addEventListener("load",function(){clearTimeout(Q),Q=setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)},{once:!0}))}),l||setTimeout(()=>{k.classList.remove("ecom-before-init")},200)}catch(k){console.info(k.message)}}ke();async function ze(s){const p=await window.fetch(s,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});if(p.ok){const v=await p.json();if(v)return v.product}return!1}t._ecGalleryCallCount=(t._ecGalleryCallCount||0)+1;async function Se(){t._ecGalleryCallCount;function s(){if(l||typeof MutationObserver>"u"||t._ecGalleryRetryObs)return;var w=d||t;if(!w)return;var D=setTimeout(L,6e3);function L(){try{t._ecGalleryRetryObs&&t._ecGalleryRetryObs.disconnect()}catch{}t._ecGalleryRetryObs=null,clearTimeout(D)}t._ecGalleryRetryObs=new MutationObserver(function(){var I=t.querySelectorAll(".ecom-product-single__media--image:not(.ec_splide__slide--clone) img"),re=Array.prototype.some.call(I,function(W){return W&&W.alt&&W.alt.includes("ecomposer-")}),ee=d&&d.querySelector(".ecom-product-single-select-id[name=id]"),pe=ee&&d.querySelector("#"+ee.dataset.jsonProduct);!re||!ee||!pe||(L(),d&&t._ecGalleryFbHandler&&(d.removeEventListener("ecomVariantChange",t._ecGalleryFbHandler),t._ecGalleryFbHandler=null),Se())}),t._ecGalleryRetryObs.observe(w,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["alt"]})}const p=t.querySelectorAll(".ecom-product-single__media--image:not(.ec_splide__slide--clone) img"),v=t&&t.querySelector(".ecom-product-single__media--featured .ec_splide__track .ec_splide__list"),ge=t&&t.querySelector(".ecom-product-single__media--featured .ec_splide__track"),X=t&&t.querySelector(".ecom-product-single__media--thumbs .ec_splide__track"),k=t&&t.querySelector(".ecom-product-single__media--slider .ecom-product-single__media--thumbs .ec_splide__track .ec_splide__list"),R=t&&t.querySelector(".ecom-product-single__media--grid .ecom-product-single__media--images-layout__grid"),P=R&&R.querySelectorAll(".ecom-product-single__media--image:not(.ec_splide__slide--clone)");if(P&&P.length>0&&!t._ecGridDivisors){var J=P[0],H=parseFloat(J.dataset.fullWidth),K=parseFloat(J.style.getPropertyValue("--img_padding")),Q=parseFloat(J.style.getPropertyValue("--img_padding__tablet")),n=parseFloat(J.style.getPropertyValue("--img_padding__mobile"));t._ecGridDivisors={desktop:H&&K>0&&!isNaN(H/K)?H/K:1,tablet:H&&Q>0&&!isNaN(H/Q)?H/Q:1,mobile:H&&n>0&&!isNaN(H/n)?H/n:1}}const x=v?Array.from(v.querySelectorAll(".ecom-product-single__media--image:not(.ec_splide__slide--clone)")):[],V=X?Array.from(X.querySelectorAll(".ecom-product-single__media--thumbnail:not(.ec_splide__slide--clone)")):[];(!t._ecAllImages||x.length>t._ecAllImages.length)&&(t._ecAllImages=x),(!t._ecAllThumbs||V.length>t._ecAllThumbs.length)&&(t._ecAllThumbs=V);const z=t._ecAllImages,S=t._ecAllThumbs;let y=!0;if(p&&p.forEach(function(w,D){if(w&&w.alt&&w.alt.includes("ecomposer-")){y=!1;return}}),y){let w=function(D){if(!D.detail.variant||!a)return;const L=String(D.detail.variant.id),I=t&&t.querySelector(".ecom-product-single__media--featured .ec_splide__track .ec_splide__list");if(!I)return;const ee=Array.from(I.querySelectorAll(".ecom-product-single__media--image:not(.ec_splide__slide--clone)")).findIndex(function(pe){const W=pe.dataset.variant_id;return W&&W.split(",").includes(L)});ee>=0&&a.go(ee)};s(),d&&t._ecGalleryFbHandler&&d.removeEventListener("ecomVariantChange",t._ecGalleryFbHandler),t._ecGalleryFbHandler=w,d&&d.addEventListener("ecomVariantChange",w);return}let u=null,M=d&&d.querySelector(".ecom-product-single-select-id[name=id]");if(!M){s();return}const F=d&&d.querySelector("#"+M.dataset.jsonProduct);if(!F){s();return}try{u=JSON.parse(F.innerHTML)}catch{return}let A=null;if(l&&window.Shopify&&window.Shopify.routes.root!="/"){let w=window.location.origin+"/products/"+u.handle+".json";A=await ze(w),A||(w=window.location.origin+window.Shopify.routes.root+"products/"+u.handle+".json",A=await ze(w)),u.options_with_values=A.options,u.variants=A.variants}let j={detail:{variant:null}};j.detail.variant=u.variants.find(function(w){if(w.id==M.value)return w});let Y=t.querySelector("#ecom-single-product-default-variant"),we=Y&&Y.innerText,he=Y&&Y.dataset.dontSetAlt;if(he&&he=="true")return;function _e(w){if(w.detail.variant&&(w.target&&w.target.querySelector(".ecom-product-single__variant-picker-container"),U&&N)){let I=function(C){let _=C.options_with_values,g=[];N.includes(",")?(N.split(",").forEach((f,$)=>{_&&_.forEach(function(h){h.name.trim().toLowerCase()===f.trim().toLowerCase()&&(g=g.concat({key:h.name.trim(),value:h.values}))})}),g=g.filter(function(f,$,h){return $===h.findIndex(function(T){return T.key.toLowerCase()===f.key.toLowerCase()})})):_&&_.forEach(function(m){if(m.name.trim().toLowerCase()===N.toLowerCase()){g=g.concat({key:m.name.trim(),value:m.values});return}});let b=[];return g&&g.forEach(function(m,f){m.value.forEach($=>{const h=$&&typeof $=="object"&&$.name!=null?$.name:$;L.option1==h&&b.push(`ecomposer-${m.key.toLowerCase()}-${L.option1.replaceAll(" ","-").toLowerCase()}`),L.option2==h&&b.push(`ecomposer-${m.key.toLowerCase()}-${L.option2.replaceAll(" ","-").toLowerCase()}`),L.option3==h&&b.push(`ecomposer-${m.key.toLowerCase()}-${L.option3.replaceAll(" ","-").toLowerCase()}`)})}),b=[...new Set(b)],b},pe=function(C,_,g,b,m){b&&_&&u&&g.length&&(_.innerHTML="",g.forEach(function(f,$){let h=f.querySelector("img")&&f.querySelector("img").alt;if(h)if(!h.includes(","))I(u).includes(h.toLowerCase())&&(f.querySelector("img").removeAttribute("loading"),_.appendChild(f));else{h=h.split(","),h=h.map(function(be){return be.trim().toLowerCase()});let T=I(u).filter(be=>h.indexOf(be)!==-1);(W(T,h)||T.length===$e(h))&&(f.querySelector("img").removeAttribute("loading"),_.appendChild(f))}}),_.style=m,C.prepend(_))},W=function(C,_){return C.sort().join()===_.sort().join()},$e=function(C){const _=new Set;let g=0;for(const b of C){const m=b.indexOf("-"),f=m!==-1?b.indexOf("-",m+1):-1;if(m!==-1&&f!==-1){const $=b.substring(m+1,f);_.has($)||(_.add($),g++)}}return g},Oe=function(C){const _=t&&t.querySelector(".ecom-product-single__media--grid_default");if(!_||!C||!u)return;let g=_&&_.querySelectorAll(".ecom-product-single__media--image");g.length&&(N&&U?g.forEach(function(b){b.style.display="none";let m=b.querySelector("img").alt;if(!m.includes(","))I(u).includes(m.toLowerCase())&&(b.style.display="block");else{m=m.split(","),m=m.map(function($){return $.trim().toLowerCase()});let f=I(u).filter($=>m.indexOf($)!==-1);(W(f,m)||f.length===$e(m))&&(b.style.display="block")}}):g.forEach(function(b){b.style.display="flex"}))},Be=function(C){if(C&&R&&u){var _=t._ecGridDivisors||{desktop:1,tablet:1,mobile:1},g=_.desktop,b=_.tablet,m=_.mobile;R.innerHTML="";let h=[];P.forEach(function(T){let B=T.querySelector("img").alt;if(!B.includes(","))I(u).includes(B.toLowerCase())&&h.push(T);else{B=B.split(","),B=B.map(function(Ie){return Ie.trim().toLowerCase()});let be=I(u).filter(Ie=>B.indexOf(Ie)!==-1);(W(be,B)||be.length===$e(B))&&h.push(T)}});var f=h.length,$=(f-1)%2===1;h.forEach(function(T,B){var be=B===0,Ie=B===f-1,Ne=be||Ie&&$,Re=parseFloat(Ne?T.dataset.fullWidth:T.dataset.halfWidth);T.style.setProperty("--img_padding",`${Re/g}%`),T.style.setProperty("--img_padding__tablet",`${Re/b}%`),T.style.setProperty("--img_padding__mobile",`${Re/m}%`),T.style.paddingTop="",R.appendChild(T)})}},Pe=function(C,_){_.style.transform="",_.style.transition="",_.querySelectorAll(".ecom-product-single__media--image, .ecom-product-single__media--thumbnail").forEach(function(g){g.classList.remove("is-active","is-visible"),g.removeAttribute("aria-current"),g.removeAttribute("aria-hidden"),g.removeAttribute("id")})},L=w.detail.variant;l&&window.Shopify&&window.Shopify.routes.root!="/"&&(L=u.variants.find(function(C){if(C.id==d.querySelector(".ecom-product-single-select-id[name=id]").value)return C}));const re=k&&k.style,ee=v&&v.style;if(v&&a){const C=I(u),_=z.filter(function(b){const m=b.querySelector("img");if(!m||!m.alt)return!1;const f=m.alt;if(f.includes(",")){const $=f.split(",").map(function(T){return T.trim().toLowerCase()}),h=C.filter(function(T){return $.indexOf(T)!==-1});return W(h,$)||h.length===$e($)}else return C.includes(f.toLowerCase())});if(_.length===0){const m=Array.from(v.querySelectorAll(".ecom-product-single__media--image:not(.ec_splide__slide--clone)")).findIndex(function(f){const $=f.dataset.variant_id;return $&&$.split(",").map(String).includes(String(L.id))});m>=0&&a.go(m);return}const g=Array.from(v.querySelectorAll(".ecom-product-single__media--image:not(.ec_splide__slide--clone)"));if(_.length>0&&_.length===g.length&&_.every(function(b,m){return b===g[m]}))return}var D=t.querySelector(".ecom-product-single__media--thumbs");D&&D.classList.add("ecom-product-single__init-thumb-hidden"),a&&a.destroy(!0),c&&c.destroy(!0),pe(ge,v,z,L,ee),pe(X,k,S,L,re),Oe(L),Be(L),v&&Pe("mainList",v),k&&Pe("thumbList",k);const Me=t.querySelector(".ecom-product-single__media--featured");if(Me&&(Me.ec_splide=null),ke(),setTimeout(function(){},100),setTimeout(function(){},350),Le(),O){let C=t.querySelectorAll(".ecom-image-zoom");if(C.length==0)return;ye(C),l&&C.forEach(function(_){_.querySelector("a")&&_.querySelector("a").addEventListener("click",function(g){g.preventDefault()})})}}}j&&we==="false"&&(j._source="initial",_e(j),d&&t._ecGalleryHandler&&d.removeEventListener("ecomVariantChange",t._ecGalleryHandler),t._ecGalleryHandler=_e,d&&d.addEventListener("ecomVariantChange",_e))}if(U&&Se(),t.querySelectorAll(".ecom-product-single__media--play-control").forEach(function(s){s.addEventListener("click",function(p){this.style.display="none",this.parentNode.querySelector("video").play()})}),!this.isLive)try{o.$el.querySelectorAll("model-viewer").forEach(function(s){const p=element.outerHTML;s.replaceWith(p)})}catch(s){console.info(s.message)}if(document.querySelector("model-viewer")&&!document.getElementById("ModelViewerStyle")){let s=document.createElement("link");s.id="ModelViewerStyle",s.rel="stylesheet",s.href="https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui.css",s.media="print",s.onload=function(){this.media="all"},document.head.appendChild(s)}function Le(){if(!Z||!l||!window.EComModal)return;t._ecLightbox&&(typeof t._ecLightbox.destroy=="function"&&t._ecLightbox.destroy(),t._ecLightbox=null);const s=Array.prototype.filter.call(t.querySelectorAll("[ecom-modal]"),function(p){return!p.isConnected||p.closest(".ec_splide__slide--clone")?!1:(p.closest(".ecom-product-single__media--image, .ecom-product-single__media--video, .ecom-product-single__media---external-video")||p).style.display!=="none"});!s.length||(t._ecLightbox=new window.EComModal(s,{gallery:!0,cssClass:["ecom-container-lightbox-"+i]}))}if(Le(),this.settings.position_sticky&&window.innerWidth>1024&&t.parentElement){const s=this.isLive?t:t.parentElement,p=this.isLive?t.parentElement:t.parentElement.parentElement;if(!p)return;const v=p.classList.contains("ecom-inner")||p.classList.contains("ec-flex-wp");s.style.height=v?"auto":"100%"}if(O){let s=t.querySelectorAll(".ecom-image-zoom");if(s.length==0)return;G!=="slider"&&ye(s),l&&s.forEach(function(p){p.querySelector("a")&&p.querySelector("a").addEventListener("click",function(v){v.preventDefault()})})}function ye(s){if(!(!l||window.innerWidth<768)&&window.EcomImgZoom)if(s.length>0)for(var p=0,v=s.length;p<v;p++)new window.EcomImgZoom(s[p],r);else new window.EcomImgZoom(s,r)}}},liquids(){var l,r,d,E,G,O,Z,c,a,te,ie,oe,ae,se,ne,U,N,q,le,ue,fe,ve,ke,ze,Se,Le,ye,Ce,Te,Ee,qe,Ve,Ae,s,p,v,ge,X,k,R,P,J,H,K,Q,n,x,V,z,S,y,u,M,F,A,j,Y,we,he,_e,w,D,L,I,re,ee,pe,W,$e,Oe,Be,Pe,Me,C,_,g,b,m,f,$,h,T,B;const e=`ec_splide__slide ecom-product-single__media--image ecom-splide-slide ecom-flex ecom-image-align-${(l=this.data.settings)!=null&&l.imageAlign?(r=this.data.settings)==null?void 0:r.imageAlign:""} ecom-image-align-${(d=this.data.settings)!=null&&d.imageAlign__tablet?(E=this.data.settings)==null?void 0:E.imageAlign__tablet:""}--tablet ecom-image-align-${(G=this.data.settings)!=null&&G.imageAlign__mobile?(O=this.data.settings)==null?void 0:O.imageAlign__mobile:""}--mobile`,o="script",i=`
                    {%- liquid
                        if product.has_only_default_variant
                            assign target = product
                        else
                            assign target = product.selected_or_first_available_variant
                        endif
                    -%}

                    ${((Z=this.data.settings)==null?void 0:Z.show_sale_sold_text)||((c=this.data.settings)==null?void 0:c.show_sale_badge)||this.validMetafieldCode||((a=this.data.settings)==null?void 0:a.label_badge_code)||this.data.settings.show_badges_tags?`
                        <div class="ecom-product-single__media-label ecom-pa ecom-flex ecom-label-position__${((te=this.data.settings)==null?void 0:te.label_position)||"topleft"}">
                        ${(ie=this.data.settings)!=null&&ie.show_sale_sold_text?`
                            {%- assign savings = product.compare_at_price | minus: product.price | times: 100.0 | divided_by: product.compare_at_price | round -%}
                            <span class="ecom-product-single__media-label-sale" data-text=" ${this.lang(this.sale_text,"product_single_sale_text")}" data-sale="{{savings}}" {%- if product.compare_at_price == nil or product.compare_at_price <=  product.price -%}  style="display:none" {% endif %}>
                            ${this.lang(this.sale_text,"product_single_media_sale_text")}
                            </span>
                            <span class="ecom-product-single__media-label-sold-out" {% if target.available %} style="display:none" {% endif %}>
                                ${this.lang(this.sold_text,"product_single_media_sold_text")}
                            </span>
                            `:""}

                        ${(oe=this.data.settings)!=null&&oe.show_sale_badge?`
                            {%- if product.compare_at_price != null and product.compare_at_price > product.price -%}
                                ${((ae=this.data.settings)==null?void 0:ae.sale_badge_type)=="amount"?"{%- assign sale = product.compare_at_price | minus: product.price | money -%}":"{%- assign sale = product.compare_at_price | minus: product.price | times: 100.0 | divided_by: product.compare_at_price | round -%}"}
                                <span class="ecom-product-single__media-label--bage-sale" data-sale="${this.lang((se=this.data.settings)!=null&&se.bage_sale?(ne=this.data.settings)==null?void 0:ne.bage_sale.replace("{{","[").replace("}}","]"):"")}" data-label-type="${(U=this.data.settings)==null?void 0:U.sale_badge_type}">
                                    ${this.lang((N=this.data.settings)==null?void 0:N.bage_sale,"sale_badge",{sale:"sale"})}
                                </span>
                            {%- endif -%}`:""}

                        ${this.validMetafieldCode?`
                            {%- capture meta_label-%}{{${this.validMetafieldCode}}}{%- endcapture -%}
                                {%- if meta_label != blank -%}
                                    <span class="ecom-product-single__media-label--metafield">
                                        {{meta_label}}
                                    </span>
                                {%- endif -%}
                                `:""}

                        ${(q=this.data.settings)!=null&&q.label_badge_code?`
                            {%- capture meta_label_code -%}${this.data.settings.label_badge_code}{%- endcapture -%}
                                {%- if meta_label_code != blank -%}
                                    <div class="ecom-product-single__media-label--code">
                                        {{meta_label_code}}
                                    </div>
                                {%- endif -%}
                                `:""}

                        ${((le=this.data.settings)==null?void 0:le.show_badges_tags)&&((ue=this.data.settings)==null?void 0:ue.label_badge_tags)?`
                                {% capture badge_tags %}${this.label_badge_tags}{% endcapture%}
                                {%- assign badge_tags = badge_tags | strip | split: ',' -%}
                                {% if badge_tags %}
                                    {% for badge in badge_tags %}
                                        {%- assign bad = badge | strip -%}
                                        {% if product.tags contains bad %}
                                            <span class="ecom-product-single__media-label--tags ecom-product-single__media-label--tags-{{ bad | handleize}}">
                                                {{ bad }}
                                            </span>
                                        {% endif %}
                                    {% endfor %}
                                {% endif %}

                                `:""}
                        </div>
                        `:""}
                    ${((fe=this.data.settings)==null?void 0:fe.zoom_icon)&&((ve=this.data.settings)==null?void 0:ve.image_action)==="lightbox"?`
                        <div class="ecom-product-single__zoom-icon-wrapper ecom-pa ecom-flex ecom-zoom-position__${((ke=this.data.settings)==null?void 0:ke.zoom_position)||"topleft"}">
                            <div class="ecom-product-single__zoom-icon ecom-flex">
                                ${(ze=this.data.settings)==null?void 0:ze.zoom_icon}
                            </div>
                        </div>
                    `:""}
               `,t={checkProduct:{code:`
                        {% assign check_dont_set_alt = true %}
                        {% for image in product.images %}
                            {% if image.alt contains 'ecomposer-' %}
                                {% assign check_dont_set_alt = false %}
                                {% break %}
                            {% endif%}
                        {% endfor %}
                        ${this.data.settings.enable_gallery?'<div id="ecom-single-product-default-variant" data-dont-set-alt="{{check_dont_set_alt}}">{%- if product.has_only_default_variant -%} true {%- else -%} false {%- endif -%}</div>':""}
                    `},product_grid:{code:`
                    {% comment %}
                        Reactivity
                        *this.data.settings.image_action
                        *this.data.settings.enable_zoom
                    {% endcomment %}
                    ${i}
                    {% assign img_padding = ${(Se=this.data.settings)!=null&&Se.grid_items?this.get_row_items((Le=this.data.settings)==null?void 0:Le.grid_items):1} | times: 1 %}
                    {% assign img_padding__tablet = ${(ye=this.data.settings)!=null&&ye.grid_items__tablet?this.get_row_items((Ce=this.data.settings)==null?void 0:Ce.grid_items__tablet):1} | times: 1 %}
                    {% assign img_padding__mobile = ${(Te=this.data.settings)!=null&&Te.grid_items__mobile?this.get_row_items((Ee=this.data.settings)==null?void 0:Ee.grid_items__mobile):1} | times: 1 %}
                    <div class="ecom-swiper-wrapper ecom-product-single__media--images ecom-swiper-wrapper ecom-product-single__media--images-grid ecom-flex fl_wrap{% if product.images.size == 1 %} ecom-product-single__only{% endif %}">
                        {% assign use_limit = ${this.data.settings.use_limit_images}  %}
                        {% assign limit_images = ${this.data.settings.grid_advance_number_images}  %}
                        {% for image in product.images %}
                            {%if use_limit and forloop.index > limit_images%}{% break %}{% endif %}
                            {% assign loading = ${(qe=this.data.settings)!=null&&qe.disable_lazyload?'"auto"':'"lazy"'} %}
                            {% assign fetchpriority = 'auto'%}
                            {% if forloop.index  < 3 %}
                                {% assign fetchpriority = 'high'%}
                                {% assign loading =  "eager" %}
                            {% endif %}
                            {% assign img_ration = 1 | divided_by: image.aspect_ratio | times: 100 %}
                            <div
                                class="${e} ${(Ve=this.data.settings)!=null&&Ve.grid_items?" ecom-col-lg-"+((Ae=this.data.settings)==null?void 0:Ae.grid_items):""}${(s=this.data.settings)!=null&&s.grid_items__tablet?" ecom-col-md-"+((p=this.data.settings)==null?void 0:p.grid_items__tablet):""}${(v=this.data.settings)!=null&&v.grid_items__mobile?" ecom-col-"+((ge=this.data.settings)==null?void 0:ge.grid_items__mobile):""}${this.enable_zoom?" ecom-image-zoom":""}" ${this.outerZoom?'data-ecom-zoom-layout="outer"':""} data-index="{{forloop.index0}}"  data-variant_id="{{ image.variants | map:'id' | join: ','  }}" style="--img_padding: ${this.heightValue("desktop")?this.heightValue("desktop"):"{{ img_ration | divided_by:  img_padding }}%"};--img_padding__tablet: ${this.heightValue("tablet")?this.heightValue("tablet"):"{{ img_ration | divided_by:  img_padding__tablet }}%"};--img_padding__mobile: ${this.heightValue("mobile")?this.heightValue("mobile"):"{{ img_ration | divided_by:  img_padding__mobile }}%"}"
                            >

                                ${this.data.settings.enable_product_link&&!this.enable_zoom&&this.data.settings.image_action!="lightbox"?`<a href="/products/{{product.handle}}" class="ecom-image-link-product" target="${this.data.settings.open_in_new_window?"_blank":"_self"}">`:""}
                                ${this.enable_zoom?'<a href="{{ image | image_url: width: 2048}}" class="ecom-img-zoom-a" data-ecom-role="zoom-target">':""}
                                    {%- assign img_master = image | image_url: width: 2048 -%}
                                    {{ image | image_url: width: 1946 | image_tag:
                                        sizes: sizes,
                                        widths: '246, 493, 600, 713, 823, 990, 1100, 1206, 1346, 1426, 1646, 1946',
                                        class: 'ecom-image-default'
                                        ${this.image_action==="lightbox"?",ecom-modal-source:img_master , ecom-modal:'image'":""}
                                        ,loading: loading
                                        ,fetchpriority: fetchpriority
                                        ,alt: image.alt | escape
                                    }}
                                ${this.enable_zoom?"</a>":""}
                                ${this.data.settings.enable_product_link&&!this.enable_zoom&&this.data.settings.image_action!="lightbox"?"</a>":""}
                            </div>
                        {% endfor %}
                        {%- for media in product.media -%}
                            {% assign media_ration = 1 | divided_by: media.aspect_ratio | times: 100 %}
                            {% case media.media_type %}
                                {% when 'image' %}
                                    {% continue %}
                                {% when 'external_video'%}
                                    <div class="${e} ${(X=this.data.settings)!=null&&X.grid_items?" ecom-col-lg-"+((k=this.data.settings)==null?void 0:k.grid_items):""}${(R=this.data.settings)!=null&&R.grid_items__tablet?" ecom-col-md-"+((P=this.data.settings)==null?void 0:P.grid_items__tablet):""}${(J=this.data.settings)!=null&&J.grid_items__mobile?" ecom-col-"+((H=this.data.settings)==null?void 0:H.grid_items__mobile):""} ecom-product-single__media---external-video ecom-product-single__media--full" data-position="{{media.position}}" style="padding-top: 56%;" ${this.image_action==="lightbox"?" ecom-modal='iframe'":""}>
                                        {{ media | external_video_tag: image_size:'master' }}
                                    </div>
                                {% when 'video' %}
                                    {% assign videoUrl = '' %}
                                    {% for source in media.sources %}
                                        {% if source.format == "mp4" %}
                                            {% assign videoUrl = source.url %}
                                            {% break %}
                                        {% endif %}
                                    {% endfor %}
                                    <div data-stopdrag="true" class="${e} ${(K=this.data.settings)!=null&&K.grid_items?" ecom-col-lg-"+((Q=this.data.settings)==null?void 0:Q.grid_items):""}${(n=this.data.settings)!=null&&n.grid_items__tablet?" ecom-col-md-"+((x=this.data.settings)==null?void 0:x.grid_items__tablet):""}${(V=this.data.settings)!=null&&V.grid_items__mobile?" ecom-col-"+((z=this.data.settings)==null?void 0:z.grid_items__mobile):""} ecom-product-single__media--video ecom-product-single__media--full ecom-swiper-no-swiping" data-position="{{media.position}}" style="--img_padding: ${this.heightValue("desktop")?this.heightValue("desktop"):"{{ media_ration | divided_by:  img_padding }}%"};--img_padding__tablet: ${this.heightValue("tablet")?this.heightValue("tablet"):"{{ media_ration | divided_by:  img_padding__tablet }}%"};--img_padding__mobile: ${this.heightValue("mobile")?this.heightValue("mobile"):"{{ media_ration | divided_by: img_padding__mobile }}%"}" ${this.image_action==="lightbox"?`ecom-modal-source="{{videoUrl}}"  ecom-modal='video'`:""}>
                                        {{ media | video_tag: image_size:'master', class: 'ecom-media-video', controls: ${(S=this.data.settings)==null?void 0:S.video_control}, autoplay: ${(y=this.data.settings)==null?void 0:y.video_auto_play}, muted: ${(u=this.data.settings)==null?void 0:u.video_mute},loop: ${(M=this.data.settings)==null?void 0:M.video_loop} }}
                                        <button  class="ecom-product-single__media--play-control"
                                        type="button"
                                        >
                                            <span class="ecom-product-single__media--play-control-wrapper">
                                                <span class="visually-hidden">Play video</span>
                                                ${(F=this.data.settings)!=null&&F.video_icon?this.data.settings.video_icon.value:""}
                                            </span>
                                        </button>
                                    </div>
                                {% when 'model' %}
                                    <div class="${e} ${(A=this.data.settings)!=null&&A.grid_items?" ecom-col-lg-"+((j=this.data.settings)==null?void 0:j.grid_items):""}${(Y=this.data.settings)!=null&&Y.grid_items__tablet?" ecom-col-md-"+((we=this.data.settings)==null?void 0:we.grid_items__tablet):""}${(he=this.data.settings)!=null&&he.grid_items__mobile?" ecom-col-"+((_e=this.data.settings)==null?void 0:_e.grid_items__mobile):""} ecom-swiper-no-swiping  ecom-product-single__media--model ecom-product-single__media--full" data-stopdrag="true" data-position="{{media.position}}">
                                        <div class="ecom-product-single__media--model-wrapper">
                                            {{ media | model_viewer_tag: image_size:'master', reveal: 'interaction', toggleable: true, data-model-id: media.id }}
                                        </div>
                                    </div>
                                {% else %}
                                    <div data-media-type="{{media.media_type}}" class="${e} ${(w=this.data.settings)!=null&&w.grid_items?" ecom-col-lg-"+((D=this.data.settings)==null?void 0:D.grid_items):""}${(L=this.data.settings)!=null&&L.grid_items__tablet?" ecom-col-md-"+((I=this.data.settings)==null?void 0:I.grid_items__tablet):""}${(re=this.data.settings)!=null&&re.grid_items__mobile?" ecom-col-"+((ee=this.data.settings)==null?void 0:ee.grid_items__mobile):""} ecom-swiper-no-swiping ecom-product-single__media--full" data-position="{{media.position}}">
                                        <div class="ecom-product-single__media" style="--img_padding: {{ media_ration | divided_by:  img_padding }}%;--img_padding__tablet: {{ media_ration | divided_by: img_padding__tablet }}%;--img_padding__mobile: {{ media_ration | divided_by: img_padding__mobile }}%;">
                                            {{ media | media_tag: image_size:'master', class: 'ecom-product-single__media--item' }}
                                        </div>
                                    </div>
                                {% endcase %}
                            {%- endfor -%}
                        </div>
                    `,preview:`
                            <div class="ecom-swiper-wrapper ecom-product-single__media-images">
                                <div class="${e}">
                                    <img src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/backpack.svg?7273" />
                                </div>
                                <div class="${e}">
                                    <img loading="lazy" src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/shoe.svg?7273" />
                                </div>
                                <div class="${e}">
                                    <img loading="lazy" src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/shoe.svg?7273" />
                                </div>
                            </div>
                    `},product_media:{code:`
                    {% comment %}
                        Reactivity
                        *this.data.settings.image_action
                        *this.data.settings.enable_zoom
                        *this.data.settings.grid_advance_number_images
                    {% endcomment %}

                    ${i}

                    {% assign img_padding = ${(pe=this.data.settings)!=null&&pe.itemsPerView?(W=this.data.settings)==null?void 0:W.itemsPerView:1} | times: 1 %}
                    {% assign img_padding__tablet = ${($e=this.data.settings)!=null&&$e.itemsPerView__tablet?(Oe=this.data.settings)==null?void 0:Oe.itemsPerView__tablet:1} | times: 1 %}
                    {% assign img_padding__mobile = ${(Be=this.data.settings)!=null&&Be.itemsPerView__mobile?(Pe=this.data.settings)==null?void 0:Pe.itemsPerView__mobile:1} | times: 1 %}

                    <div class="ec_splide__list ecom-swiper-wrapper ecom-product-single__media--images ecom-swiper-wrapper ecom-product-single__media--images-layout__${this.layout}{% if product.images.size == 1 %} ecom-product-single__only{% endif %}">
                        {% assign use_limit = ${this.data.settings.use_limit_images}  %}
                        {% assign limit_images = ${this.data.settings.grid_advance_number_images}  %}
                        {% assign variant_images = product.images | where: 'attached_to_variant?', true | map: 'src' %}
                        {% for media in product.media %}
                            {% assign media_ration = 1 | divided_by: media.aspect_ratio | times: 100 %}
                            {% assign img_ration = 1 | divided_by: media.aspect_ratio | times: 100 %}
                            ${this.layout==="grid"?`
                            {%- liquid
                                assign check = forloop.index | modulo: 2
                                assign total_after_first = product.media.size | minus: 1
                                assign is_odd_remaining = total_after_first | modulo: 2

                                if forloop.first
                                    assign img_ration = 1 | divided_by: media.aspect_ratio | times: 100
                                elsif forloop.last and is_odd_remaining == 1
                                    assign img_ration = 1 | divided_by: media.aspect_ratio | times: 100
                                else
                                    assign img_ration = 1 | divided_by: media.aspect_ratio | times: 50
                                endif
                            -%}
                            `:""}
                            {% assign image = media.preview_image %}
                            {% case media.media_type %}
                                {% when 'image' %}
                                    {%if use_limit and forloop.index > limit_images%}{% break %}{% endif %}
                                    {% assign fetchpriority = 'low'%}
                                    {% assign lazyload = 'lazy'%}
                                    {% if forloop.first %}
                                        {% assign fetchpriority = 'high'%}
                                        {% assign lazyload = 'eager'%}
                                    {% endif %}
                                    <div class="ec_splide__slide ${e} ${this.enable_zoom?" ecom-image-zoom":""}" ${this.outerZoom?'data-ecom-zoom-layout="outer"':""}  data-index="{{forloop.index0}}"  {% if variant_images contains media.src %} data-variant_id="{{ product.images | where: 'src', image.src | map: 'variants' | map: 'id' | join: ',' }}"{% endif %}  style="--img_padding: ${this.heightValue("desktop")?this.heightValue("desktop"):"{{ img_ration | divided_by:  img_padding }}%"};--img_padding__tablet: ${this.heightValue("tablet")?this.heightValue("tablet"):"{{ img_ration | divided_by:  img_padding__tablet }}%"};--img_padding__mobile: ${this.heightValue("mobile")?this.heightValue("mobile"):"{{ img_ration | divided_by:  img_padding__mobile }}%"}" data-half-width="{% assign img_ration_half = 1 | divided_by: image.aspect_ratio | times: 50 %}{{img_ration_half}}" data-full-width="{% assign img_ration_full = 1 | divided_by: media.aspect_ratio | times: 100 %}{{img_ration_full}}">
                                        ${this.data.settings.enable_product_link&&!this.enable_zoom&&this.data.settings.image_action!="lightbox"?`<a href="/products/{{product.handle}}" class="ecom-image-link-product" target="${this.data.settings.open_in_new_window?"_blank":"_self"}">`:""}
                                            ${this.enable_zoom?'<a href="{{ media | image_url: width: 2048}}" class="ecom-img-zoom-a" data-ecom-role="zoom-target">':""}
                                                {%- assign img_master = media | image_url: width: 2048 -%}
                                                {{ media | image_url: width: 1946 | image_tag:
                                                    sizes: sizes,
                                                    widths: '246, 493, 600, 713, 823, 990, 1100, 1206, 1346, 1426, 1646, 1946',
                                                    class: 'ecom-image-default'
                                                    ${this.image_action==="lightbox"?",ecom-modal-source:img_master , ecom-modal:'image'":""}
                                                    ${(Me=this.data.settings)!=null&&Me.disable_lazyload?",loading: 'eager'":",loading: lazyload"}
                                                    ,fetchpriority: fetchpriority
                                                    ,alt: media.alt | escape
                                                }}
                                            ${this.enable_zoom?"</a>":""}
                                        ${this.data.settings.enable_product_link&&!this.enable_zoom&&this.data.settings.image_action!="lightbox"?"</a>":""}
                                    </div>
                                {% when 'external_video'%}
                                    <div class="${e} ecom-product-single__media---external-video ecom-product-single__media--full" data-position="{{media.position}}" style="--img_padding: {{ media_ration | divided_by:  img_padding }}%;--img_padding__tablet: {{ media_ration | divided_by: img_padding__tablet }}%;--img_padding__mobile: {{ media_ration | divided_by: img_padding__mobile }}%;"  ${this.image_action==="lightbox"?" ecom-modal='iframe'":""}>
                                        {{ media | external_video_tag: image_size:'master' }}
                                    </div>
                                {% when 'video' %}
                                    {% assign videoUrl = '' %}
                                    {% for source in media.sources %}
                                        {% if source.format == "mp4" %}
                                            {% assign videoUrl = source.url %}
                                            {% break %}
                                        {% endif %}
                                    {% endfor %}
                                    <div data-stopdrag="true" class="${e} ecom-product-single__media--video ecom-product-single__media--full ecom-swiper-no-swiping" data-position="{{media.position}}" style="--img_padding: ${this.heightValue("desktop")?this.heightValue("desktop"):"{{ img_ration | divided_by:  img_padding }}%"};--img_padding__tablet: ${this.heightValue("tablet")?this.heightValue("tablet"):"{{ img_ration | divided_by:  img_padding__tablet }}%"};--img_padding__mobile: ${this.heightValue("mobile")?this.heightValue("mobile"):"{{ img_ration | divided_by:  img_padding__mobile }}%"}"  ${this.image_action==="lightbox"?`ecom-modal-source="{{videoUrl}}"  ecom-modal='video'`:""}>
                                        {{ media | video_tag: image_size:'master', class: 'ecom-media-video', controls: ${(C=this.data.settings)==null?void 0:C.video_control}, autoplay: ${(_=this.data.settings)==null?void 0:_.video_auto_play}, muted: ${(g=this.data.settings)==null?void 0:g.video_mute},loop: ${(b=this.data.settings)==null?void 0:b.video_loop} }}
                                        ${(m=this.data.settings)!=null&&m.video_auto_play?"":`
                                                <button  class="ecom-product-single__media--play-control" type="button">
                                                    <span class="ecom-product-single__media--play-control-wrapper">
                                                        <span class="visually-hidden">Play video</span>
                                                        ${(f=this.data.settings)!=null&&f.video_icon?this.data.settings.video_icon.value:""}
                                                    </span>
                                                </button>
                                            `}
                                    </div>
                                {% when 'model' %}
                                    <div class="${e} ecom-swiper-no-swiping  ecom-product-single__media--model ecom-product-single__media--full" data-stopdrag="true" data-position="{{media.position}}">
                                        <div class="ecom-product-single__media--model-wrapper">
                                            {{ media | model_viewer_tag: image_size:'master', reveal: 'interaction', toggleable: true, data-model-id: media.id }}
                                        </div>
                                    </div>
                                {% else %}
                                    <div data-media-type="{{media.media_type}}" class="${e} ecom-swiper-no-swiping ecom-product-single__media--full" data-position="{{media.position}}">
                                        <div class="ecom-product-single__media" style="--img_padding: ${this.heightValue("desktop")?this.heightValue("desktop"):"{{ img_ration | divided_by:  img_padding }}%"};--img_padding__tablet: ${this.heightValue("tablet")?this.heightValue("tablet"):"{{ img_ration | divided_by:  img_padding__tablet }}%"};--img_padding__mobile: ${this.heightValue("mobile")?this.heightValue("mobile"):"{{ img_ration | divided_by:  img_padding__mobile }}%"}">
                                            {{ media | media_tag: image_size:'master', class: 'ecom-product-single__media--item' }}
                                        </div>
                                    </div>
                            {% endcase %}
                        {% endfor %}
                    </div>
                    `,preview:`
                            <div class="ecom-swiper-wrapper ecom-product-single__media-images">
                                <div class="${e}">
                                    <img src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/backpack.svg?7273" />
                                </div>
                                <div class="${e}">
                                    <img loading="lazy" src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/shoe.svg?7273" />
                                </div>
                                <div class="${e}">
                                    <img loading="lazy" src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/shoe.svg?7273" />
                                </div>
                            </div>
                    `},product_media_thumbs:{code:`
                    {%- if product.media.size > 1 -%}
                    <div class="ec_splide__list ecom-swiper-wrapper{% if product.images.size == 1 %} ecom-product-single__only{% endif %}">
                        {% assign variant_images = product.images | where: 'attached_to_variant?', true | map: 'src' %}
                        {% for media in product.media %}
                            {% if media.media_type == 'image' %}
                                {% assign image = media.preview_image %}
                                {% assign fetchpriority = 'low'%}
                                    {% if forloop.first %}
                                        {% assign fetchpriority = 'high'%}
                                    {% endif %}
                                    <div class="ec_splide__slide ecom-product-single__media--thumbnail ecom-splide-slide"  {% if variant_images contains media.src %} data-variant_id="{{ product.images | where: 'src', image.src | map: 'variants' | map: 'id' | join: ',' }}"{% endif %}>
                                        <img
                                            class="ecom-product-thumbnail"
                                            src="{{ media | image_url: ${this.thumbnail_size.width?`width: ${this.thumbnail_size.width}`:"width: 300"} ${this.thumbnail_size.height?`,height: ${this.thumbnail_size.height}`:""} ${this.thumbnail_crop!=="none"?`, crop: '${this.thumbnail_crop}'`:""} }}"
                                            alt="{{ media.alt | escape  }}",
                                            fetchpriority="{{ fetchpriority }}"
                                            style="max-width: 100%; height: auto;"
                                            ${($=this.data.settings)!=null&&$.disable_lazyload?"":',loading="lazy"'}
                                        />
                                    </div>
                            {% else %}
                                <div class="ec_splide__slide ecom-product-single__media--thumbnail ecom-splide-slide">
                                    <div class="ecom-product-single__media--thumbnail--icon">
                                        {% if media.media_type == 'model' %}
                                            ${(h=this.data.settings)!=null&&h.thumbnail_model_icon?this.data.settings.thumbnail_model_icon.value:""}
                                        {% else %}
                                            ${(T=this.data.settings)!=null&&T.thumbnail_video_icon?this.data.settings.thumbnail_video_icon.value:""}
                                        {% endif %}
                                    </div>
                                    <img src="{{ media | image_url: ${this.thumbnail_size.width?`width: ${this.thumbnail_size.width}`:"width: 300"} ${this.thumbnail_size.height?`,height: ${this.thumbnail_size.height}`:""} ${this.thumbnail_crop!=="none"?`, crop: '${this.thumbnail_crop}'`:""} }}" style="max-width: 100%; height: auto;"  alt="{{ media.alt | escape }}" ${(B=this.data.settings)!=null&&B.disable_lazyload?"":'loading="lazy"'}/>
                                </div>
                            {% endif %}
                        {% endfor %}
                    </div>
                    {%- endif -%}
                    `,preview:`
                        <div class="ecom-swiper-wrapper">
                        <div class="ecom-product-single__media--thumbnail ecom-splide-slide">
                            <img class="ecom-product-thumbnail" width="100"  src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/backpack.svg?7273" />
                        </div>
                        <div class="ecom-product-single__media--thumbnail ecom-splide-slide">
                            <img class="ecom-product-thumbnail"  width="100" src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/shoe.svg?7273" />
                        </div>
                        <div class="ecom-product-single__media--thumbnail ecom-splide-slide">
                            <img class="ecom-product-thumbnail" width="100"  src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/shoe.svg?7273" />
                        </div>
                    </div>
                    `},thumb_count_class:{code:`
                        {% if product.media.size == 1 %}
                            ecom-dont-has-many-images
                         {% endif %}
                    `,preview:""},product_model:{code:`
                        <${o} type="application/json" id="Product-model-{{ product.id }}">
                            {{ product.media | where: 'media_type', 'model' | json }}
                        </${o}>
                    `,preview:""},featured_image:{code:`
                            ${i}
                            <div class="${e} ${this.enable_zoom?" ecom-image-zoom":""}" ${this.outerZoom?'data-ecom-zoom-layout="outer"':""}" style="--img_padding: ${this.heightValue("desktop")?this.heightValue("desktop"):"{{ 1 | divided_by: product.featured_image.aspect_ratio | times: 100 }}%"};--img_padding__tablet: ${this.heightValue("tablet")?this.heightValue("tablet"):"{{ 1 | divided_by: product.featured_image.aspect_ratio | times: 100 }}%"};--img_padding__mobile: ${this.heightValue("mobile")?this.heightValue("mobile"):"{{ 1 | divided_by: product.featured_image.aspect_ratio | times: 100 }}%"}" data-variant_id="{{ product.featured_image.variants | map:'id' | join: ','  }}">
                                ${this.data.settings.enable_product_link&&!this.enable_zoom&&this.data.settings.image_action!="lightbox"?`<a href="/products/{{product.handle}}" class="ecom-image-link-product" target="${this.data.settings.open_in_new_window?"_blank":"_self"}">`:""}
                                ${this.enable_zoom?'<a href="{{ product.featured_image | image_url: width: 2048 }}" class="ecom-img-zoom-a" data-ecom-role="zoom-target">':""}
                                    {% if product.featured_image %}
                                        {%- assign img_master = product.featured_image | image_url: width: 2048 -%}
                                        {{ product.featured_image | image_url: width: 1946 | image_tag:
                                            loading: eager,
                                            fetchpriority: 'high',
                                            sizes: sizes,
                                            widths: '246, 493, 600, 713, 823, 990, 1100, 1206, 1346, 1426, 1646, 1946',
                                            class: 'ecom-image-default'
                                            ${this.image_action==="lightbox"?",ecom-modal-source:img_master , ecom-modal:'image'":""}
                                            ,alt: product.featured_image.alt | escape
                                        }}
                                    {% else %}
                                        <img src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/backpack.svg?7273" />
                                    {% endif %}
                                ${this.enable_zoom?"</a>":""}
                                ${this.data.settings.enable_product_link&&!this.enable_zoom&&this.data.settings.image_action!="lightbox"?"</a>":""}
                            </div>
                        `,preview:`
                        <div class="${e}">
                                <img src="https://cdn2.shopify.com/s/files/1/0121/5945/1236/files/backpack.svg?7273" />
                        </div>
                        `}};return this.layout==="slider"&&this.show_thumbnails?{product_media:t.product_media,product_media_thumbs:t.product_media_thumbs,product_model:t.product_model,thumb_count_class:t.thumb_count_class,checkProduct:t.checkProduct}:this.layout==="single"?{featured_image:t.featured_image,checkProduct:t.checkProduct}:{product_media:t.product_media,product_model:t.product_model,product_grid:t.product_grid,checkProduct:t.checkProduct}},css(){return`
                .ecom-product-single__media-container .ecom-swiper-container.ecom-product-single__media--featured {
                    overflow-y: unset !important;
                    overflow-x: clip !important;
                }
                .ecom-product-single .ecom-swiper-button-lock {
                    display: none !important;
                }
                .ecom-modal-gallery-item iframe {
                    width: 100%;
                    height: 100%;
                }
                .ecom-element.ecom-product-single .ecom-image-link-product {
                    cursor: inherit;
                }
                .ecom-product-single__media--image img {
                    display: block;
                    max-width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    -webkit-user-select: none;
                    -khtml-user-select: none;
                    -moz-user-select: none;
                    -o-user-select: none;
                    user-select: none;
                }

                .ecom-media-video, .shopify-model-viewer-ui, .ecom-img-zoom-a, .ecom-product-single__media--model-wrapper {
                    position: absolute;
                    inset: 0
                }

                .ecom-product-single .ec_splide__pagination__page.ec_splide__pagination__page.is-active {
                    transform: none;
                }

                .ecom-product-single__media--thumbs:empty {
                    display: none !important;
                }
                .ecom-product-single__media {
                    display: block;
                    position: relative;
                    width: 100%;
                }
                .ecom-product-single__media--grid .ecom-product-single__media--images img {
                    max-width: 100%;
                }

                .ecom-product-single__media--grid .ecom-product-single__media--images {
                    display: flex;
                    flex-wrap: wrap;
                    margin-bottom: 2rem;
                    padding: 0;
                    gap: 10px;
                    list-style: none;
                }

                .ecom-product-single__media--images {
                    transition: height 0.3s;
                }

                .ecom-product-single__media--grid .ecom-product-single__media--image {
                    width: calc(50% - 1rem / 2);
                    max-width: 100%;
                    flex-grow: 1;
                }
                /** Set the media image and the first image 100% width **/
                /*
                .ecom-product-single__media--grid .ecom-product-single__media--image:nth-child(5n+1) {
                    width: 100%;
                }*/

                .ecom-product-single__media--grid .ecom-product-single__media--image.ecom-product-single__media--full {
                    width: 100%;
                }
                .ecom-product-single__media-label, .ecom-product-single__zoom-icon-wrapper {
                    align-items: center;
                }
                .ecom-product-single__zoom-icon-wrapper {
                    color: #000000;
                    background-color: #f7f7f7;
                    border-style: solid;
                    border-width: 0.8px;
                    overflow: hidden;
                    border-radius: 50%;
                }
                .ecom-product-single__zoom-icon {
                    width: 25px;
                    height: 25px;
                    padding: 6px;
                }
                .ecom-product-single__zoom-icon-wrapper .ecom-product-single__zoom-icon svg{
                    width: 100%;
                    height: 100%;
                    display: flex;
                }
                .ecom-product-single__media-label > span {
                    height: fit-content;
                }

                .ecom-swiper-controls::after {
                    display: none
                }

                .ecom-product-single__media--grid .ecom-swiper-controls {
                    display: none;
                }

                .ecom-product-single__media--grid .ecom-product-single__media--images img,
                .ecom-product-single__media--video video {
                    max-width: 100%;
                }

                .ecom-product-single__media--video video {
                    width: 100%;
                }

                .ecom-product-single__media--grid .ecom-product-single__media--image:first-child {
                    width: 100%;
                }

                .ecom-product-single__media--grid .ecom-product-single__media--image.ecom-product-single__media--full {
                    width: 100%;
                }

                .ecom-product-single__media---external-video {
                    position: relative;
                    padding-top: var(--img_padding, 100%);
                }

                .ecom-product-single__media--image {
                    padding-top: var(--img_padding, 100%);
                }

                .ec_splide__slide.ecom-product-single__media--image img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .ecom-product-single__media--model {
                    position: relative;
                }
                .ecom-modal .ecom-swiper-wrapper .ecom-splide-slide img {
                    margin: auto !important;
                    height: auto !important;
                }
                .ecom-product-single__media---external-video iframe,
                .ecom-product-single__media--model-wrapper model-viewer {
                    display: block;
                    max-width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                }

                .ecom-product-single__media .shopify-model-viewer-ui.shopify-model-viewer-ui--desktop {
                    display: block;
                    max-width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                }

                .ecom-product-single__media--image {
                    height: 0;
                }

                .ecom-swiper-wrapper {
                    align-items: stretch;
                }

                /* Height 100% will break the thumbs slider height */
                .ecom-swiper-wrapper .ecom-splide-slide {
                    text-align: center;
                }

                .ecom-product-single__media--slider .ecom-splide-slide img {
                    object-fit: contain;
                }

                .ecom-product-single__media--thumbnail {
                    border: 2px solid transparent;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                }
                /* Fix filter CSS on Safari */
                .ecom-product-single__media--featured img {
                    transform: translate3d(0, 0, 0);
                }
                .ecom-product-single__media--featured.ecom-before-init{
                    opacity: 0;
                }

                .ecom-product-single__media--thumbnail img {
                    -webkit-user-select: none;
                    -khtml-user-select: none;
                    -moz-user-select: none;
                    -o-user-select: none;
                    user-select: none;
                    width: 100%;
                    max-width: 100%;
                    height: auto;
                    border: 0;
                    vertical-align: middle;
                    position: relative;
                    z-index: 1;
                }

                .ecom-swiper-controls svg {
                    height: 16px;
                    width: 16px;
                    color: inherit;
                }

                .ecom-product-single__media-wrapper .ecom-swiper-controls {
                    cursor: pointer;
                    width: auto;
                    height: auto;
                    transition: .2s ease-in-out;
                }

                .ecom-product-single .ec_splide__arrow.ecom-swiper-button,
                .ecom-product-single .ec_splide__arrow.ecom-swiper-controls-thumb {
                    padding: 8px;
                }

                .ecom-swiper-controls-thumb svg {
                    height: 100%;
                    width: 100%;
                    color: inherit;
                }
                .ecom-product-single__media--thumbs{
                    position:relative
                }

                .ecom-product-single__media--thumbs.ec_splide--ttb {
                    top: 0;
                    bottom: 0;
                }

                .ecom-product-single .ec_splide__track--ttb.ec_splide__track--nav {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                }

                .ecom-swiper-button-thumb-prev{
                    left:0
                }

                .ecom-product-single__media-container button.ec_splide__arrow.ecom-swiper-controls {
                    transform: inherit;
                }

                .ecom-swiper-controls-thumb > svg{
                    width:24px;
                    height:24px;
                }

                .ecom-swiper-controls-thumb {
                    z-index:10;
                    display:flex;
                    cursor: pointer;
                    width:auto;
                    height:auto;
                    transition: .2s ease-in-out;
                    text-align: center;
                }
                .ecom-swiper-controls-thumb::after{
                    display:none
                }

                .ecom-swiper-controls:after {
                    margin-left: -3px;
                }

                .ecom-product-single__media--thumbnail:hover {
                    z-index: 10;
                }

                button.ecom-product-single__media--play-control {
                    display: block;
                    max-width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    border: none;
                    cursor: pointer;
                    margin: 0;
                    padding: 0;
                    background-color:rgb(238 238 238 / 40%);
                }

                .ecom-product-single__media--play-control-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%) scale(1);
                    z-index: 1;
                }
                .ecom-product-single__media--thumbnail {
                    position: relative;
                }

                .ecom-product-single__media--thumbnail--icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 3;
                    display: flex;
                }

                .ecom-product-single__media--thumbnail--icon svg {
                    display: flex;
                }
                .ecom-product-single__media--horizontal .ecom-swiper-controls-thumb,
                .ecom-product-single__media-tablet--horizontal .ecom-swiper-controls-thumb,
                .ecom-product-single__media-mobile--horizontal .ecom-swiper-controls-thumb{
                    transform:translateY(-50%);
                    top: 50%;
                    margin-top: 0px;
                    width: auto;
                    height: auto;
                }
                .ecom-dont-has-many-images .ecom-product-single__media--thumbs,
                .ecom-dont-has-many-images .ec_splide__pagination {
                    display: none;
                }

                .ecom-product-single__media--image.ecom-image-align-left img {
                    left: 0;
                    right: unset;
                    transform: none;
                }
                .ecom-product-single__media--image.ecom-image-align-right img {
                    left: unset;
                    right: 0;
                    transform: none;
                }

                .ecom-product-single__media--image.ecom-image-align-center img {
                    left: 50%;
                    transform: translateX(-50%);
                }

                .ecom-product-single__media .ecom-product-single__media-container {
                    display: flex;
                    flex-direction: column;
                    gap: 10px
                }

                .ecom-swiper-container {
                    width: 100%;
                }
                .ecom-product-single__media--thumbnail > * {
                    transition:inherit;
                }

                /* Image Zoom */
                .ecom-image-zoom {
                    position: relative;
                    display: inline-block;
                    overflow: hidden;
                }

                .ecom-image-zoom > a {
                    cursor: zoom-in;
                }

                .ecom-image-zoom.is-error > a {
                    cursor: not-allowed;
                }

                .ecom-image-zoom.is-loading > a {
                    cursor: progress;
                }

                .ecom-image-zoom > a > img {
                    display: block;
                }

                .ecom-image-zoom-notice {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    z-index: 150;
                    width: 10em;
                    margin: -1em 0 0 -5em;
                    line-height: 2em;
                    text-align: center;
                    background: #FFF;
                    box-shadow: 0 0 10px #888;
                }

                .ecom-image-zoom-flyout {
                    position:absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 200;
                    overflow: hidden;
                    background: #FFF;
                    cursor: crosshair;
                }
                .ecom-image-zoom-window.ecom-image-zoom-flyout {
                    opacity: 0;
                    box-shadow: 0 1px 5px rgba(127,127,127,0.02), 0 5px 18px rgba(127,127,127,0.2);
                }
                .ecom-image-zoom-flyout.ecom-open {
                    animation: fadeZoomIn 200ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
                    -webkit-animation: fadeZoomIn 200ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }

                .ecom-image-zoom-flyout.ecom-close {
                    animation: fadeZoomOut 150ms cubic-bezier(0, 0, 0.2, 1)
                }

                .ecom-product-single__media .ecom-product-single__media-container .ecom-product-single__media--image .ecom-image-zoom-flyout img {
                    width: auto;
                    max-width: none !important;
                    height: auto !important;
                    object-fit: unset !important;
                    transform: none;
                }
                .ecom-product-single__media .ecom-image-align {
                    justify-content: center;
                }
                .ecom-product-single__media-label, .ecom-product-single__zoom-icon-wrapper {
                    z-index: 99;
                    pointer-events: none;
                }
                .ecom-label-position__topleft, .ecom-zoom-position__topleft {
                    top: 20px;
                    left: 20px;
                }
                .ecom-label-position__topright, .ecom-zoom-position__topright {
                    top: 20px;
                    right: 20px;
                }
                .ecom-label-position__bottomleft, .ecom-zoom-position__bottomleft {
                    bottom: 20px;
                    left: 20px;
                }
                .ecom-label-position__bottomright, .ecom-zoom-position__bottomright {
                    bottom: 20px;
                    right: 20px;
                }
                .ecom-product-single__media--thumbs.ecom-product-single__init-thumb-hidden .ecom-product-single__media--thumbnail{
                    opacity: 0;
                    visibility: hidden;
                    width: 100px;
                }

                .ecom-product-single__only .ec_splide__arrows {
                    display: none;
                }
                .ecom-product-single .ec_splide__track--ttb.ec_splide__track--nav {position: absolute;top: 0;bottom: 0;width: 100%;}
                @media screen and (min-width: 1025px) {
                    .ecom-product-single__media.ecom-position-sticky {
                        position: sticky;
                        top: 0
                    }
                    .ecom-product-single__media .ecom-product-single__media--vertical .ecom-product-single__media--thumbs {
                        width: 120px;
                    }
                    .ecom-product-single__media--vertical .ecom-product-single__media--thumbs .ecom-swiper-button-next{
                        right:auto;
                        left:50%;
                        transform:translateX(-50%);
                        top:auto;
                        bottom:10px;
                    }
                    .ecom-product-single__media--vertical .ecom-product-single__media--thumbs .ecom-swiper-controls-thumb svg{
                        transform: rotate(90deg);
                    }
                    .ecom-product-single__media--vertical .ecom-product-single__media--thumbs .ecom-swiper-button-prev{
                        right:auto;
                        left:50%;
                        transform:translateX(-50%);
                        top:10px;
                        bottom:auto;
                    }
                    /*.ecom-product-single__media .ecom-product-single__media--horizontal .ecom-product-single__media--thumbs {
                        min-height: 100px;
                        height: auto;
                    }*/
                }
                @media (min-width: 768px) and (max-width: 1024px) {
                    .ecom-product-single__media--image.ecom-image-align-center--tablet img {
                        left: 50%;
                        right: unset;
                        transform: translateX(-50%);
                    }
                    .ecom-product-single__media--image.ecom-image-align-left--tablet img {
                        left: 0;
                        right: unset;
                        transform: none;
                    }
                    .ecom-product-single__media--image.ecom-image-align-right--tablet img {
                        left: unset;
                        right: 0;
                        transform: none;
                    }
                    .ecom-product-single__media--image, .ecom-product-single__media--full {
                        padding-top: var(--img_padding__tablet, 100%)
                    }
                    .ecom-product-single__media--thumbs.ecom-swiper-tablet-vertical {
                        min-width: 50px;
                        width: auto;
                    }
                    .ecom-product-single__media-tablet--vertical .ecom-product-single__media--thumbs .ecom-swiper-button-next{
                        right:auto;
                        left:50%;
                        transform:translateX(-50%);
                        top:auto;
                        bottom:10px;
                    }
                    .ecom-product-single__media-tablet--vertical .ecom-product-single__media--thumbs .ecom-swiper-controls-thumb svg{
                        transform: rotate(90deg);
                    }
                    .ecom-product-single__media-tablet--vertical .ecom-product-single__media--thumbs .ecom-swiper-button-prev{
                        right:auto;
                        left:50%;
                        transform:translateX(-50%);
                        top:10px;
                        bottom:auto;
                    }
                }
                @media (max-width: 767px) {
                    .ecom-product-single__media--image.ecom-image-align-center--mobile img {
                        left: 50%;
                        right: unset;
                        transform: translateX(-50%);
                    }
                    .ecom-product-single__media--image.ecom-image-align-left--mobile img {
                        left: 0;
                        right: unset;
                        transform: none;
                    }
                    .ecom-product-single__media--image.ecom-image-align-right--mobile img {
                        left: unset;
                        right: 0;
                        transform: none;
                    }
                    .ecom-product-single__media--image, .ecom-product-single__media--full {
                        padding-top: var(--img_padding__mobile, 100%)
                    }
                    .ecom-product-single__media--vertical-mobile .ecom-product-single__media--featured {
                        width: auto;
                    }
                    .ecom-product-single__media--thumbs.ecom-swiper-mobile-vertical {
                       /* min-width: 50px;*/
                        width: auto;
                    }
                    .ecom-product-single__media-mobile--vertical .ecom-product-single__media--thumbs .ecom-swiper-button-next{
                        right:auto;
                        left:50%;
                        transform:translateX(-50%);
                        top:auto;
                        bottom:10px;
                    }
                    .ecom-product-single__media-mobile--vertical .ecom-product-single__media--thumbs .ecom-swiper-controls-thumb svg{
                        transform: rotate(90deg);
                    }
                    .ecom-product-single__media-mobile--vertical .ecom-product-single__media--thumbs .ecom-swiper-button-prev{
                        right:auto;
                        left:50%;
                        transform:translateX(-50%);
                        top:10px;
                        bottom:auto;
                    }
                }

                .ecom-product-single .ec_splide__arrows:not(.ec_splide__arrows--ttb) .ec_splide__arrow.ec_splide__arrow--prev svg {
                    transform: none;
                }

                @keyframes fadeZoomIn {
                0% {
                    transform: scale(0.8);
                    opacity: 0; }

                100% {
                    transform: scale(1);
                    opacity: 1; } }

                @keyframes fadeZoomOut {
                0% {
                    opacity: 1; }

                100% {
                    opacity: 0; } }

                /* iOS Safari GPU memory fix:
                   EcSplide CSS sets backface-visibility:hidden and will-change:transform
                   on every slide, forcing each into its own GPU compositing layer.
                   With many product images this causes ~50MB per layer \u2192 OOM crash.
                   Override to collapse all slides into a single compositing layer. */
                .ecom-product-single__media--featured .ec_splide__slide,
                .ecom-product-single__media--thumbs .ec_splide__slide {
                    -webkit-backface-visibility: unset !important;
                    backface-visibility: unset !important;
                    will-change: unset !important;
                }
                /* iOS 15: address bar interferes with horizontal swipe events on the track */
                .ecom-product-single__media--featured .ec_splide__track {
                    touch-action: pan-y;
                }

            `},layout(){var e,o;return(o=(e=this.data)==null?void 0:e.settings)!=null&&o.layout?this.data.settings.layout:"slider"},image_action(){var e,o,i;return(i=(o=(e=this.data)==null?void 0:e.settings)==null?void 0:o.image_action)!=null?i:"nothing"},enable_zoom(){return this.data&&this.data.settings&&"enable_zoom"in this.data.settings?this.data.settings.enable_zoom:!1},outerZoom(){var e;return this.data&&this.data.settings&&"enable_zoom"in this.data.settings&&this.data.settings.enable_zoom?((e=this.data.settings)==null?void 0:e.zoom_type)=="outer":!1},show_thumbnails(){var e,o,i;return(i=(o=(e=this.data)==null?void 0:e.settings)==null?void 0:o.show_thumbnails)!=null?i:!1},sliderControls(){return this.data&&this.data.settings&&this.data.settings.sliderControls},requestShopifyType(){return{shopify_type:"product"}},thumbnail_size(){var e,o,i,t,l,r;return{width:(i=(o=(e=this.data)==null?void 0:e.settings)==null?void 0:o.thumbnail_width)!=null?i:"",height:(r=(l=(t=this.data)==null?void 0:t.settings)==null?void 0:l.thumbnail_height)!=null?r:""}},thumbnail_crop(){var e,o,i;return(i=(o=(e=this.data)==null?void 0:e.settings)==null?void 0:o.thumbnail_crop)!=null?i:"none"},watcherSliderPagination(){var e,o,i,t,l,r;return[(i=(o=(e=this.data)==null?void 0:e.style)==null?void 0:o.slider_pagination)==null?void 0:i.paginationWidth,(r=(l=(t=this.data)==null?void 0:t.style)==null?void 0:l.slider_pagination)==null?void 0:r.panigationSpacing]},default(){return{settings:{layout:"slider",show_pagination:!1,show_thumbnails:!0,thumbnail_position:"column",slidesPerView:4,thumbnail_position__tablet:"column",slidesPerView__tablet:4,slidesPerView__mobile:4,thumbnail_position__mobile:"column",sliderControls:!0,zoom_height:"500px",zoom_width:"500px",sale_text:"Sale",sold_text:"Sold out",bage_sale:"-{{sale}}%",label_badge_tags:"hot, new",zoom_position:"bottomright",zoom_icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 4 4 L 4 13 L 6 13 L 6 7.4375 L 14.5625 16 L 6 24.5625 L 6 19 L 4 19 L 4 28 L 13 28 L 13 26 L 7.4375 26 L 16 17.4375 L 24.5625 26 L 19 26 L 19 28 L 28 28 L 28 19 L 26 19 L 26 24.5625 L 17.4375 16 L 26 7.4375 L 26 13 L 28 13 L 28 4 L 19 4 L 19 6 L 24.5625 6 L 16 14.5625 L 7.4375 6 L 13 6 L 13 4 Z"></path></svg>',grid_advance_number_images:1},style:{product_image:{tab:"normal"},slider_controls:{navtab:"hover",navigatorPrimaryColornormalmode:"#e0dcdc",navigatorFontSize:"32px",navigatorPrimaryColorhovermode:"#240e0e"},zoom_icon:{spacing:{padding:{top:"12px",left:"12px",bottom:"12px",right:"12px"}},iconFontSize:"44px",iconPrimaryColor:"#222",iconBorder:{"border-style":"none"},iconBorderRadius:{right:"50%",top:"50%",left:"50%",bottom:"50%"},iconBackground:{classic:{"background-color":"#ffffff"}},iconBoxShadow:{"box-shadow":{color:"#00000017",blur:"5px"}}},product_thumb:{tabs:"active",tab:"normal",imageTransition:300,imageOpacitynormalmode:.8,imageOpacityhovermode:1,imageOpacityactivemode:1}}}},style(){var r,d,E,G,O,Z,c,a,te,ie,oe,ae,se,ne,U,N;const e=[{name:"imageOpacity",type:"number",label:this.$t("opacity"),options:{step:.01,min:.1,max:1},css:{properties:{opacity:""}}},{name:"imageFilter",label:this.$t("css_filters"),type:"popup",options:{oneline:!0,type:"filter"},css:{}},{name:"imageBoxShadow",label:this.$t("box_shadow"),type:"popup",options:{oneline:!0,type:"box-shadow"},css:{}},{name:"iamgeBorder",label:this.$t("border"),type:"popup",options:{oneline:!0,type:"border",size:"small"},css:{}},{name:"imageBorderRadius",label:this.$t("border_radius"),type:"dimension",options:{type:"radius",responsive:!0,units:"default"},css:{selector:" , img",properties:{"border-radius":""}}}],o=[{name:"iconPrimaryColor",label:this.$t("color"),type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{color:""}}},{name:"iconBackground",label:this.$t("background"),type:"background",options:{oneline:!0,responsive:!0},css:{properties:{background:""}}},{type:"popup",label:this.$t("border"),name:"iconBorder",options:{oneline:!0,type:"border"},css:{properties:{border:""}}},{name:"iconBoxShadow",label:this.$t("box_shadow"),type:"popup",options:{oneline:!0,type:"box-shadow"},css:{properties:{"box-shadow":""}}},{name:"iconBorderRadius",label:this.$t("border_radius"),type:"dimension",options:{responsive:!0,type:"radius",units:{"%":{min:0,max:100},px:{min:0,max:1e3}}},css:{properties:{overflow:"hidden","border-radius":""}}}],i=[{group_alias:"image",options:{group_title:this.$t("featured_image"),group_name:"product_image",selector:" .ecom-product-single__media--featured"},modify:{remove:{index:17,length:1},params:[{position:15,fields:[{alias:"spacing",options:{label:this.$t("spacing"),name:"spacing",css:{selector:"root .ecom-product-single__media--featured .ecom-product-single__media--image img"}}},{name:"imageAnimation",label:this.$t("animation"),liteMode:!0,type:"dropdown",options:{search:!0,type:"animation",size:"small",visible:{keep_data:!0,condition:q=>q&&q.tab=="hover"}},css:{selector:"root .ecom-product-single__media--image img:hover",properties:{animation:""}}}]}]}}];((r=this.data.settings)==null?void 0:r.zoom_icon)&&((d=this.data.settings)==null?void 0:d.image_action)==="lightbox"&&i.push({group_title:this.$t("zoom_icon"),group_name:"zoom_icon",selector:" .ecom-product-single__zoom-icon-wrapper ",params:[{name:"iconFontSize",label:this.$t("size"),type:"number",options:{responsive:!0,units:{px:{min:0,max:300}}},css:{selector:" .ecom-product-single__zoom-icon",properties:{height:"",width:""}}},{name:"iconTransform",label:this.$t("rotate"),type:"number",options:{responsive:!0,min:0,max:360},css:{selector:" .ecom-product-single__zoom-icon",properties:{transform:"rotate(%value%deg)"}}},{name:"iconPrimaryColor",label:this.$t("color"),type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{color:""}}},{name:"iconBackground",label:this.$t("background"),type:"background",options:{oneline:!0,responsive:!0},css:{properties:{background:""}}},{type:"popup",label:this.$t("border"),name:"iconBorder",options:{oneline:!0,type:"border"},css:{properties:{border:""}}},{name:"iconBoxShadow",label:this.$t("box_shadow"),type:"popup",options:{oneline:!0,type:"box-shadow"},css:{properties:{"box-shadow":""}}},{name:"iconBorderRadius",label:this.$t("border_radius"),type:"dimension",options:{responsive:!0,type:"radius",units:{"%":{min:0,max:100},px:{min:0,max:1e3}}},css:{properties:{overflow:"hidden","border-radius":""}}},{alias:"spacing",options:{name:"spacing",label:this.$t("spacing"),css:{selector:"root .ecom-product-single__zoom-icon"}}}]}),(E=this.data.settings)!=null&&E.video_icon&&i.push({group_title:this.$t("video_icon"),group_name:"video_icon",selector:" .ecom-product-single__media--video ",params:[{name:"iconFontSize",label:this.$t("size"),type:"number",options:{responsive:!0,units:{px:{min:0,max:300}}},css:{selector:" svg",properties:{height:"",width:""}}},{name:"iconTransform",label:this.$t("rotate"),type:"number",options:{responsive:!0,min:0,max:360},css:{selector:" svg",properties:{transform:"rotate(%value%deg)"}}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")}]},css:{isCss:!1}},...xe(o,"normal",{selector:" .ecom-product-single__media--play-control-wrapper svg"}),...xe(o,"hover",{selector:":hover  .ecom-product-single__media--play-control-wrapper svg"}),{alias:"spacing",options:{name:"spacing",label:this.$t("spacing"),css:{selector:" .ecom-product-single__media--play-control-wrapper svg"}}}]}),this.layout==="slider"&&((O=(G=this.data)==null?void 0:G.settings)!=null&&O.show_thumbnails&&i.push({group_title:this.$t("thumbnails"),group_name:"product_thumb",selector:" .ecom-product-single__media--thumbnail",params:[{name:"imageObjectFit",label:this.$t("type"),type:"popup",options:{type:"dropdown",default:!1,preview:"title",values:{none:this.$t("none"),fill:this.$t("fill"),contain:this.$t("contain"),cover:this.$t("cover"),"scale-down":this.$t("scale_down")},control_width:"50%"},css:{selector:" img",properties:{"object-fit":""}}},{type:"number",name:"imageHeight",label:this.$t("height"),options:{responsive:!0,reset:!0,units:{px:{min:0,max:1e3},vh:{min:0,max:100}}},css:{properties:{height:""}}},{name:"tabs",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")},{name:"active",title:this.$t("active")}]},css:{isCss:!1}},...xe(e,{relation:"tabs",status:"normal"}),...xe(e,{relation:"tabs",status:"hover"},":hover"),...xe(e,{relation:"tabs",status:"active"},".ec_splide__slide.is-active"),{name:"imageAnimation",label:this.$t("hover_animation"),type:"popup",options:{type:"dropdown",values:"animation",size:"small",visible:{keep_data:!0,condition:q=>q.tabs==="hover"}},css:{selector:":hover",properties:{animation:""}}},{name:"imageTransition",type:"number",label:this.$t("transition_duration_span_class_lowercase_ms_span"),options:{min:0,max:1500,visible:{keep_data:!0,condition:q=>q.tabs==="hover"}},css:{properties:{transition:"all %value%ms ease"}}},{alias:"spacing",options:{label:this.$t("spacing"),name:"thumbSpacing"}},{type:"line"},{type:"paragraph",content:this.$t("media_icon"),name:"thumbnail_group"},{name:"iconFontSize",label:this.$t("size"),type:"number",options:{responsive:!0,units:{px:{min:0,max:300}}},css:{selector:" svg",properties:{height:"",width:""}}},{name:"iconTransform",label:this.$t("rotate"),type:"number",options:{responsive:!0,min:0,max:360},css:{selector:" svg",properties:{transform:"rotate(%value%deg)"}}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")}]},css:{isCss:!1}},...xe(o,"normal",{selector:" .ecom-product-single__media--thumbnail--icon svg"}),...xe(o,"hover",{selector:":hover .ecom-product-single__media--thumbnail--icon svg"}),{alias:"spacing",options:{name:"iconSpacing",label:this.$t("spacing"),css:{selector:" svg"}}}]}),(c=(Z=this.data)==null?void 0:Z.settings)!=null&&c.sliderControls&&i.push({group_alias:"swiper:nav",options:{group_title:this.$t("navigation"),group_name:"slider_controls",selector:" .ecom-product-single__media--featured.ecom-swiper-container"}}),(te=(a=this.data)==null?void 0:a.settings)!=null&&te.sliderControlsThumb&&i.push({group_alias:"swiper:nav",options:{group_title:this.$t("navigation_thumb"),group_name:"slider_controls_thumb",selector:" .ecom-product-single__media--thumbs"}}),(oe=(ie=this.data)==null?void 0:ie.settings)!=null&&oe.show_pagination&&i.push({group_alias:"swiper:pagination",options:{group_title:this.$t("slider_pagination"),group_name:"slider_pagination",selector:" .ecom-product-single__media--featured"}}));const t={group_alias:"box",options:{group_title:this.$t("badge_box"),group_name:"label_wrapper",selector:" .ecom-product-single__media-label"},modify:{params:[{position:10,fields:{alias:"spacing",options:{label:this.$t("spacing")}}},{position:0,fields:{type:"number",label:this.$t("gap"),name:"label_gap",liteMode:!0,options:{units:{px:{min:0,max:200}}},css:{properties:{gap:""}}}}]}},l={group_alias:["text:spacing","box"],options:{group_title:this.$t("badge_general"),group_name:"label_general",selector:" .ecom-product-single__media-label > span"},modify:{remove:[{index:0,length:1},{index:3,length:1}]}};if(i.push(t,l),(ae=this.data.settings)!=null&&ae.show_sale_sold_text){const q={group_alias:["text:spacing","box"],options:{group_title:this.$t("badge_sale"),group_name:"label_sale_text",selector:" .ecom-product-single__media-label > span.ecom-product-single__media-label-sale"},modify:{remove:[{index:0,length:1},{index:3,length:1}]}},le={group_alias:["text:spacing","box"],options:{group_title:this.$t("badge_soldout"),group_name:"label_soldout",selector:" .ecom-product-single__media-label > span.ecom-product-single__media-label-sold-out"},modify:{remove:[{index:0,length:1},{index:3,length:1}]}};i.push(q,le)}if((se=this.data.settings)!=null&&se.show_sale_badge){const q={group_alias:["text:spacing","box"],options:{group_title:this.$t("badge_sale_value"),group_name:"label_badge",selector:" .ecom-product-single__media-label > span.ecom-product-single__media-label--bage-sale"},modify:{remove:[{index:0,length:1},{index:3,length:1}]}};i.push(q)}if((ne=this.data.settings)!=null&&ne.metafield_label){const q={group_alias:["text:spacing","box"],options:{group_title:this.$t("badge_metafields"),group_name:"label_metafields",selector:" .ecom-product-single__media-label > span.ecom-product-single__media-label--metafield"},modify:{remove:[{index:0,length:1},{index:3,length:1}]}};i.push(q)}if(((U=this.data.settings)==null?void 0:U.show_badges_tags)&&((N=this.data.settings)==null?void 0:N.label_badge_tags)){const q={group_alias:["text:spacing","box"],options:{group_title:this.$t("badge_tags"),group_name:"label_tags",selector:" .ecom-product-single__media-label > span.ecom-product-single__media-label--tags"},modify:{remove:[{index:0,length:1},{index:3,length:1}]}};i.push(q)}return i}},watch:{"data.settings.thumbnail_position":{immediate:!0,handler(){this.$helpers.dispatchResize()}},"data.settings.thumbnail_position__tablet":{immediate:!0,handler(){this.$helpers.dispatchResize()}},"data.settings.thumbnail_position__mobile":{immediate:!0,handler(){this.$helpers.dispatchResize()}},"data.settings.slidesPerView":function(){this.$helpers.dispatchResize()},watcherSliderPagination:{immediate:!0,handler(){this.debounce(()=>{var e,o;if(this.$el){let t=this.$el.querySelector(".ecom-product-single__media--featured").ec_splide;t&&((o=(e=t.Components)==null?void 0:e.Pagination)==null||o.resetPagination())}},500)},deep:!0},screen(e,o){var t,l;const i=this.$el;if(!(!i||!(i instanceof HTMLElement))&&(l=(t=this.data)==null?void 0:t.settings)!=null&&l.position_sticky&&i.parentElement){const r=i.parentElement,d=i.parentElement.parentElement;if(!d)return;const E=d.classList.contains("ecom-inner")||d.classList.contains("ec-flex-wp");e==="desktop"?r.style.height=E?"auto":"100%":r.style.height="auto"}},"data.settings.metafield_label":{handler(e){this._debouncedMetafieldCodeTimer&&clearTimeout(this._debouncedMetafieldCodeTimer),this._debouncedMetafieldCodeTimer=setTimeout(()=>{this.validMetafieldCode=Fe(e)},500)}}},methods:{heightValue(e){var o,i,t,l,r,d,E,G,O,Z,c,a;switch(e){case"desktop":return((i=(o=this.data.style)==null?void 0:o.product_image)==null?void 0:i.imageHeight)&&((l=(t=this.data.style)==null?void 0:t.product_image)==null?void 0:l.imageHeight)!="none"?this.data.style.product_image.imageHeight:!1;case"tablet":return((d=(r=this.data.style)==null?void 0:r.product_image)==null?void 0:d.imageHeight__tablet)&&((G=(E=this.data.style)==null?void 0:E.product_image)==null?void 0:G.imageHeight__tablet)!="none"?this.data.style.product_image.imageHeight__tablet:!1;case"mobile":return((Z=(O=this.data.style)==null?void 0:O.product_image)==null?void 0:Z.imageHeight__mobile)&&((a=(c=this.data.style)==null?void 0:c.product_image)==null?void 0:a.imageHeight__mobile)!="none"?this.data.style.product_image.imageHeight__mobile:!1}},get_row_items(e){switch(parseInt(e)){case 12:return 1;case 6:return 2;case 4:return 3;case 3:return 4;case 15:return 5;case 2:return 6;default:return 1}},debounce(e,o){clearTimeout(this.debouncedResetPagination),this.debouncedResetPagination=setTimeout(e,o)}}},Ke=["innerHTML"],Qe=["data-direction","data-breakpoints","data-priority"],Ye=["innerHTML"],et={key:0,class:"ec_splide__arrows"},tt=["innerHTML"],it=["innerHTML"],ot={key:1,class:"ec_splide__pagination ecom-swiper-pagination"},at=["data-direction","data-breakpoints"],st=["innerHTML"],nt={key:0,class:"ec_splide__arrows"},lt=["innerHTML"],rt=["innerHTML"],dt=["data-priority","innerHTML"],mt=["data-priority","innerHTML"],ct=["innerHTML"],_t=["innerHTML"];function pt(e,o,i,t,l,r){var d,E,G,O,Z,c,a,te,ie,oe,ae,se,ne,U,N,q,le,ue,fe,ve;return de(),me("div",{class:He(["ecom-element ecom-product-single ecom-product-single__media",{"ecom-position-sticky":(E=(d=i.data)==null?void 0:d.settings)==null?void 0:E.position_sticky}])},[ce("div",{class:He(["ecom-product-single__media-wrapper",e.liquid("thumb_count_class")])},[ce("div",{class:He(["ecom-product-single__media-container",["ecom-product-single__media--"+r.layout,"ecom-product-single__media--"+(["row","row-reverse"].includes((O=(G=i.data)==null?void 0:G.settings)==null?void 0:O.thumbnail_position)?"vertical":"horizontal"),"ecom-product-single__media-tablet--"+(["row","row-reverse"].includes((c=(Z=i.data)==null?void 0:Z.settings)==null?void 0:c.thumbnail_position__tablet)?"vertical":"horizontal"),"ecom-product-single__media-mobile--"+(["row","row-reverse"].includes((te=(a=i.data)==null?void 0:a.settings)==null?void 0:te.thumbnail_position__mobile)?"vertical":"horizontal")]])},[i.data.settings.enable_gallery?(de(),me("div",{key:0,style:{display:"none"},innerHTML:e.liquid("checkProduct")},null,8,Ke)):je("",!0),r.layout==="slider"?(de(),me(Je,{key:1},[ce("div",{class:He(["ec_splide ecom-product-single__media--featured ecom-swiper-container",{"ecom-before-init":!e.exporting}]),"data-direction":r.isRTL?"rtl":"ltr","data-breakpoints":JSON.stringify(r.breakpoints),"data-priority":(oe=(ie=i.data)==null?void 0:ie.settings)!=null&&oe.featured_image_priority?"featured":"variant"},[ce("div",{class:"ec_splide__track",innerHTML:e.liquid("product_media")},null,8,Ye),(se=(ae=i.data)==null?void 0:ae.settings)!=null&&se.sliderControls?(de(),me("div",et,[ce("button",{type:"button",class:"ec_splide__arrow ec_splide__arrow--next ecom-swiper-button ecom-swiper-button-next ecom-swiper-controls",innerHTML:r.isRTL?r.prevIcon:r.nextIcon},null,8,tt),ce("button",{type:"button",class:"ec_splide__arrow ec_splide__arrow--prev ecom-swiper-button ecom-swiper-button-prev ecom-swiper-controls",innerHTML:r.isRTL?r.nextIcon:r.prevIcon},null,8,it)])):je("",!0),(U=(ne=i.data)==null?void 0:ne.settings)!=null&&U.show_pagination?(de(),me("ul",ot)):je("",!0)],10,Qe),r.show_thumbnails?(de(),me("div",{key:0,class:He(["ec_splide ecom-product-single__media--thumbs ecom-product-single__init-thumb-hidden ecom-swiper-container",r.thumbClass]),"data-direction":r.isRTL?"rtl":"ltr","data-breakpoints":JSON.stringify(r.thumbsBreakpoints)},[ce("div",{class:"ec_splide__track",innerHTML:e.liquid("product_media_thumbs")},null,8,st),(q=(N=i.data)==null?void 0:N.settings)!=null&&q.sliderControlsThumb?(de(),me("div",nt,[ce("button",{type:"button",class:"ec_splide__arrow ec_splide__arrow--next ecom-swiper-button-next ecom-swiper-controls-thumb",innerHTML:r.isRTL?r.prevIconThumb:r.nextIconThumb},null,8,lt),ce("button",{type:"button",class:"ec_splide__arrow ec_splide__arrow--prev ecom-swiper-button-prev ecom-swiper-controls-thumb",innerHTML:r.isRTL?r.nextIconThumb:r.prevIconThumb},null,8,rt)])):je("",!0)],10,at)):je("",!0)],64)):r.layout==="single"?(de(),me("div",{key:2,class:"ecom-product-single__media--featured","data-priority":(ue=(le=i.data)==null?void 0:le.settings)!=null&&ue.featured_image_priority?"featured":"variant",innerHTML:e.liquid("featured_image")},null,8,dt)):r.layout==="grid_default"?(de(),me("div",{key:3,class:"ecom-product-single__media--featured","data-priority":(ve=(fe=i.data)==null?void 0:fe.settings)!=null&&ve.featured_image_priority?"featured":"variant",innerHTML:e.liquid("product_grid")},null,8,mt)):(de(),me("div",{key:4,class:"ecom-product-single__media--featured",innerHTML:e.liquid("product_media")},null,8,ct))],2)],2),ce("div",{class:"ecom-hidden-content",innerHTML:e.liquid("product_model")},null,8,_t)],2)}const wt=De(Ge,[["render",pt]]);Ge.__docgenInfo={exportName:"default",displayName:"productImage",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Product/Image.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{wt as default};
//# sourceMappingURL=Image.54f9c2fb.js.map
