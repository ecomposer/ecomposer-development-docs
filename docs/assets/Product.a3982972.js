import{_ as q,L as $,E as C,J as S}from"./preview.fd4b835f.js";import{o as j,a as z,x as k}from"./vue.esm-bundler.2eae420a.js";import"./chunk-2GDW2BFM.4967875d.js";import"./index.e850844b.js";import"./iframe.b0e30ece.js";import"../sb-preview/runtime.js";const w={name:"Cartitems",mixins:[$,C,S],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){var c,a,r,o,t,i,s,n,l,p,d,m,u,_,v,g,h,y,f,b,x;let e=`
				<div class="ecom-cart__product-items-heading">
					<div>${this.data.settings.title_column_1}</div>
					<div>${this.data.settings.title_column_2}</div>
					<div>${this.data.settings.title_column_3}</div>
					<div>${this.data.settings.title_column_4}</div>
				</div>
			`;return{items:{code:`
						{% capture icon_discount %}
							<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-discount color-foreground-text" viewBox="0 0 12 12" style="width: 10px;">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M7 0h3a2 2 0 012 2v3a1 1 0 01-.3.7l-6 6a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4l6-6A1 1 0 017 0zm2 2a1 1 0 102 0 1 1 0 00-2 0z" fill="currentColor">
								</path>
							</svg>
						{% endcapture %}
						${this.show_dummy&&this.exporting===!1?`
						{% assign is_dummy = true%}
						{%- if true -%}
							<div class="ecom-cart__product-items"
							>
								${e}
								{% for item in collections.all.products | limit: 6 %}

						`:`
						{% assign is_dummy = false %}
						{%- if cart == empty -%}
							<div class="ecom-cart__product-warnings">
								<h2 class="ecom-cart__product-empty-text">${(a=(c=this.data.settings)==null?void 0:c.title_cart_empty)!=null?a:""}</h2>
								<div class="ecom-cart__product-button--continue ecom-flex">
									<a href="${(t=(o=(r=this.data.settings)==null?void 0:r.link_cart_empty)==null?void 0:o.href)!=null?t:"{{routes.collections_product_url}}"}"
										rel="${(n=(s=(i=this.data.settings)==null?void 0:i.link_cart_empty)==null?void 0:s.rel)!=null?n:""}"
										target="${(d=(p=(l=this.data.settings)==null?void 0:l.link_cart_empty)==null?void 0:p.target)!=null?d:""}"
										title="${(_=(u=(m=this.data.settings)==null?void 0:m.link_cart_empty)==null?void 0:u.title)!=null?_:""}"
										class="link ecom-cart__product-empty-link ecom-flex"
										>
										<span class="ecom-cart__product-empty-icon">${(g=(v=this.data.settings)==null?void 0:v.icon_empty)!=null?g:""}</span>
										<span>${(y=(h=this.data.settings)==null?void 0:h.link_cart_title)!=null?y:""}</span>
									</a>
								</div>
							</div>
						{%- else -%}
							<div class="ecom-cart__product-items"
							>
								${e}
								{% for item in cart.items %}
							`}

								<div class="ecom-cart__product-item" data-line-id="{{item.id}}">
									{% assign image = item.image%}
									{% if is_dummy %}
										{% assign image = item.featured_image %}
									{% endif %}
									<div class="ecom-cart__product-thumbnail {%- unless image -%}ecom-cart__product--no-thumbnail{%- endunless -%}">
										<div class="ecom-cart__product-thumbnail-img">
											{% if image %}
												<img class="ecom-cart__product-image"
													src="{{ image | img_url: '150x' }}"
													alt="{{ image.alt | escape }}"
													loading="lazy"
													width="75"
													height="{{ 75 | divided_by: image.aspect_ratio | ceil }}"
												>
											{% endif %}
										</div>
									</div>
									<div class="ecom-cart__product-informations">
										<div class="ecom-cart__product-information--wrapper ecom-flex">
											<a href="{% if is_dummy == false %}{{ item.product.url }}{% else %}{{item.url}}{% endif %}" class="ecom-cart__product-thumbnail--tablet">
												{% assign image = item.image%}
												{% if is_dummy %}
													{% assign image = item.featured_image %}
												{% endif %}
												{% if image %}
													<img class="ecom-cart__product-image"
														src="{{image | img_url: '150px'}}"
														alt="{{ image.alt | escape }}"
														loading="lazy"
														width="75"
														height="{{ 75 | divided_by: image.aspect_ratio | ceil }}"
													>
												{% endif %}
											</a>
											<div class="ecom-cart__product-infos">
												<a href="{% if is_dummy == false %}{{ item.product.url }}{% else %}{{item.url}}{% endif %}" class="ecom-cart__product-item-name">{% if is_dummy == false %}{{ item.product.title | escape }}{% else %}{{item.title | escape }}{% endif %}</a>
												{% if is_dummy %}
													{% assign has_only_default_variant = item.has_only_default_variant %}
												{% else %}
													{% assign has_only_default_variant = item.product.has_only_default_variant %}
												{% endif %}
												{%- if has_only_default_variant == false or item.properties.size != 0 or item.selling_plan_allocation != nil -%}
												<dl class="ecom-cart__product-options">
													
													${this.show_properties?`	{%- if has_only_default_variant == false -%}
															{%- for option in item.options_with_values -%}
																<div class="ecom-cart__product-product-option">
																	<dt>{{ option.name }}: </dt>
																	<dd>{% if is_dummy%}{{ option.values | first  }}{% else %}{{ option.value }}{% endif %}</dd>
																</div>
															{%- endfor -%}
														{%- endif -%}
														
													`:""}

												</dl>
												<p class="product-option">{{ item.selling_plan_allocation.selling_plan.name }}</p>
												{%- endif -%}

												<ul class="ecom-cart__product-discounts" role="list">
												{% if is_dummy and item.compare_at_price > item.price %}
													${this.show_regular_price?`<li class="ecom-cart__product-product-option">
															{{icon_discount}} <dd style="display: inline-block;">This is demo text</dd>
														</li>`:""}
												{% endif %}
													${this.show_regular_price?`{%- for discount in item.discounts -%}
																<li class="ecom-cart__product-product-option">
																{{ icon_discount }}
																{{ discount.title }}
																</li>
															{%- endfor -%}`:""}
												</ul>
											</div>
										</div>
										<a href="{{ item.url_to_remove }}" class="ecom-cart__product-item-remove-button responsive">
											<svg class="w-6 h-6" x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
											</svg>
										</a>
									</div>
									<div class="ecom-cart__product-prices {% if item.compare_at_price > item.price %}ecom-cart__product-prices--has-discount{% endif %}"
									>	
										${(f=this.data.settings)!=null&&f.show_heading?`<div class="ecom-cart__product-heading--res" data-title="${this.data.settings.title_column_2}">
												</div>`:""}
										
										<div class="ecom-cart__product-item__price-wrapper">
											{%- if item.original_price and item.original_price != item.final_price -%}
												${this.show_regular_price?`
													<dl class="ecom-cart__product-item-discounted-prices">
														<dt class="ecom-cart__product-visually-hidden">
															Regular price
														</dt>
														<dd>
															<s class="ecom-cart__product-item-old-price ecom-cart__product-item-price--end">
															{{ item.original_price | money }}
															</s>
														</dd>
														<dt class="ecom-cart__product-visually-hidden">
															Sale
														</dt>
														<dd class="ecom-cart__product-price--end">
															{{ item.final_price | money }}
														</dd>
													</dl>
													{%- if item.variant.available and item.unit_price_measurement -%}
													<div class="ecom-cart__product-unit-price ">
														<span class="ecom-cart__product-visually-hidden">Unit price</span>
														{{ item.variant.unit_price | money }}
														<span aria-hidden="true">/</span>
														<span class="ecom-cart__product-visually-hidden">&nbsp; per &nbsp;</span>
														{%- if item.variant.unit_price_measurement.reference_value != 1 -%}
														{{- item.variant.unit_price_measurement.reference_value -}}
														{%- endif -%}
														{{ item.variant.unit_price_measurement.reference_unit }}
													</div>
													{%- endif -%}
													`:`<span class="ecom-cart__product-price--end">
															{{ item.price | money }}
															</span>`}
											{% elsif item.compare_at_price > item.price or item.variant.compare_at_price > item.price %}
												{%- if item.compare_at_price -%}
													{%- assign compare_at_price = item.compare_at_price -%}
												{%- else -%}
													{%- assign compare_at_price = item.variant.compare_at_price -%}
												{%- endif -%}
												${this.show_regular_price?`<dl class="ecom-cart__product-item-discounted-prices">
																<dt class="ecom-cart__product-visually-hidden">
																	Regular price
																</dt>
																<dd>
																	<s class="ecom-cart__product-item-old-price ecom-cart__product-item-price--end">
																	{{ compare_at_price | money }}
																	</s>
																</dd>
																<dt class="ecom-cart__product-visually-hidden">
																	Sale
																</dt>
																<dd class="ecom-cart__product-price--end">
																	{{ item.price | money }}
																</dd>
															</dl>`:`<span class="ecom-cart__product-price--end">
															{{ item.price | money }}
															</span>`}
											{%- elsif item.original_price-%}
												<span class="ecom-cart__product-price--end">
												{{ item.original_price | money }}
												</span>
											{% else %}
												<span class="ecom-cart__product-price--end">
												{{ item.price | money }}
												</span>
											{%- endif -%}
											
										</div>
									</div>
									{% if is_dummy %}
										{% assign quantity = 1 %}
									{% else %}
										{% assign quantity = item.quantity %}
									{% endif %}
									<div class="ecom-cart__product-quantity">
										${(b=this.data.settings)!=null&&b.show_heading?`<div class="ecom-cart__product-heading--res" data-title="${this.data.settings.title_column_3}">
												</div>`:""}
										<div class="ecom-cart__product-quantity-wrapper">
											<button class="ecom-cart__product-quantity--button ecom-quantity-minus" name="minus" type="button">

											</button>
											<input class="ecom-cart__product-quantity--input"
												type="number"
												name="updates[]"
												value="{{ quantity }}"
												min="0"
												data-key="{{item.key}}"
												data-index="{{ item.index | plus: 1 }}"
											>
											<button class="ecom-cart__product-quantity--button ecom-quantity-plus" name="plus" type="button">

											</button>
										</div>
									</div>
									<div class="ecom-cart__product-item__totals">
										${(x=this.data.settings)!=null&&x.show_heading?`<div class="ecom-cart__product-heading--res" data-title="${this.data.settings.title_column_4}">
												</div>`:""}
										<div class="ecom-cart__product-item__price-wrapper">
											{%- if item.original_line_price != item.final_line_price -%}
												<dl class="ecom-cart__product-item__discounted-prices">
													<dt class="ecom-cart__product-visually-hidden">
													   Sale
													</dt>
													<dd class="ecom-cart__product-price--end">
														{{ item.final_line_price | money }}
													</dd>
												</dl>
											{%- elsif item.original_line_price -%}
												<span class="ecom-cart__product-price--end">
													{{ item.original_line_price | money }}
												</span>
											{% elsif item.compare_at_price > item.price %}
												 <dl class="ecom-cart__product-item__discounted-prices">
													<dt class="ecom-cart__product-visually-hidden">
													   Sale
													</dt>
													<dd class="ecom-cart__product-price--end">
														{{ item.price | money }}
													</dd>
												</dl>
											{% else %}
												<span class="ecom-cart__product-price--end">
													{{ item.price | money }}
												</span>
											{%- endif -%}
										</div>

										<a href="{{ item.url_to_remove }}" class="ecom-cart__product-item-remove-button desktop">
											<svg class="w-6 h-6" x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
											</svg>
										</a>
									</div>
								</div>
							{% endfor %}
						</div>
					{%- endif -%}

					`,preview:`
						<div class="ecom-skeleton-item">
							<div class="ecom-skeleton-col-2">
								<div class="ecom-skeleton-avatar"></div>
							</div>
							<div>
								<div class="ecom-skeleton-row">
									<div class="ecom-skeleton-col-4 ecom-skeleton-big"></div>
									<div class="ecom-skeleton-col-8 ecom-skeleton-big ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-6"></div>
									<div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-2"></div>
									<div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-4"></div>
									<div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-6"></div>
									<div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-2"></div>
									<div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
								</div>
							</div>
						</div>
						 <div class="ecom-skeleton-item">
							<div class="ecom-skeleton-col-2">
								<div class="ecom-skeleton-avatar"></div>
							</div>
							<div>
								<div class="ecom-skeleton-row">
									<div class="ecom-skeleton-col-4 ecom-skeleton-big"></div>
									<div class="ecom-skeleton-col-8 ecom-skeleton-big ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-6"></div>
									<div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-2"></div>
									<div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-4"></div>
									<div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-6"></div>
									<div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-2"></div>
									<div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
								</div>
							</div>
						</div>
						 <div class="ecom-skeleton-item">
							<div class="ecom-skeleton-col-2">
								<div class="ecom-skeleton-avatar"></div>
							</div>
							<div>
								<div class="ecom-skeleton-row">
									<div class="ecom-skeleton-col-4 ecom-skeleton-big"></div>
									<div class="ecom-skeleton-col-8 ecom-skeleton-big ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-6"></div>
									<div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-2"></div>
									<div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-4"></div>
									<div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-6"></div>
									<div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-2"></div>
									<div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
								</div>
							</div>
						</div>
						 <div class="ecom-skeleton-item">
							<div class="ecom-skeleton-col-2">
								<div class="ecom-skeleton-avatar"></div>
							</div>
							<div>
								<div class="ecom-skeleton-row">
									<div class="ecom-skeleton-col-4 ecom-skeleton-big"></div>
									<div class="ecom-skeleton-col-8 ecom-skeleton-big ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-6"></div>
									<div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-2"></div>
									<div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-4"></div>
									<div class="ecom-skeleton-col-8 ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-6"></div>
									<div class="ecom-skeleton-col-6 ecom-skeleton-empty"></div>
									<div class="ecom-skeleton-col-2"></div>
									<div class="ecom-skeleton-col-10 ecom-skeleton-empty"></div>
								</div>
							</div>
						</div>
					`}}},settings(){return[{group_title:"General",params:[{type:"paragraph",content:"Column heading"},{type:"text",label:"Column 1",name:"title_column_1"},{type:"text",label:"Column 2",name:"title_column_2"},{type:"text",label:"Column 3",name:"title_column_3"},{type:"text",label:"Column 4",name:"title_column_4"},{type:"switch",name:"show_heading",label:"Show heading on tablet and mobile",options:{values:{on:{label:"yes",value:!0},off:{label:"no",value:!1}}}},{type:"line"},{type:"toggle",label:"Show regular price",name:"show_regular_price",options:{values:{off:{label:"Off",value:!1},on:{label:"On",value:!0}}}},{type:"toggle",label:"Show cart item properties",name:"show_properties",description:"Show custom information of the item that has been added to the cart",options:{values:{on:{label:"Show",value:!0},off:{label:"Hidden",value:!1}}}}]},{group_title:"Cart empty",params:[{type:"toggle",label:"Show dummy cart items",name:"show_dummy",description:"Show random products in your cart",options:{values:{off:{label:"Off",value:!1},on:{label:"On",value:!0}}}},{type:"text",name:"title_cart_empty",label:"Title"},{type:"text",name:"link_cart_title",label:"Link text"},{type:"link",name:"link_cart_empty",label:"Link"},{type:"picker",name:"icon_empty",label:"Link icon",options:{type:"icon",layout:"grid",output:"value",multiple:!1,simple:!1}},{type:"number",name:"gap_empty",label:"Gap",options:{units:{px:{min:0,max:50}}},css:{selector:"root .ecom-cart__product-empty-link",properties:{gap:""}}}]}]},show_dummy(){return this.data&&this.data.settings&&"show_dummy"in this.data.settings?this.data.settings.show_dummy:!1},show_properties(){return this.data&&this.data.settings&&"show_properties"in this.data.settings?this.data.settings.show_properties:!1},show_regular_price(){var e;return(e=this.data.settings)==null?void 0:e.show_regular_price},requestShopifyType(){return{shopify_type:"cart"}},javascript(){return function(){let e=this.$el,c=this.isLive;function a(o,t){if(!c)return!0;window.EComposer.cartItemChange(o,t).then(i=>{let s=null;i.items&&(s=i.items.find(n=>n.key===o)),s?window.location.reload():i.errors&&window.EComposer.showToast(i.errors,"error")})}function r(o){o.preventDefault();let t=this.closest("div").querySelector(".ecom-cart__product-quantity--input"),i=t.value;this.name==="plus"?t.stepUp():this.name==="minus"&&t.stepDown(),a(t.dataset.key,t.value),setTimeout(function(){t.value=i},1e3)}e.querySelectorAll(".ecom-cart__product-quantity--button").forEach(o=>{o.addEventListener("click",r)})}},style(){return[{group_alias:"box",options:{group_title:"General",group_name:"general"},modify:{params:[{position:20,fields:{alias:"spacing"}}]}},{group_alias:"text",options:{group_name:"heading",group_title:"Column Heading",selector:"root .ecom-cart__product-items-heading>div, root .ecom-cart__product-heading--res"},modify:{remove:{index:0,length:1}}},{group_title:"Product Image",params:[{type:"number",name:"imageWidth",label:"Width",options:{responsive:!0,reset:!0,units:{px:{min:0,max:100}}},css:{important:!0,selector:" .ecom-cart__product-thumbnail-img, .ecom-cart__product-thumbnail--tablet img",properties:{width:""}}},{type:"number",name:"imageMaxWidth",label:"Max Width",options:{responsive:!0,reset:!0,units:{px:{min:0,max:100}}},css:{selector:" .ecom-cart__product-thumbnail-img, .ecom-cart__product-thumbnail--tablet img",properties:{"max-width":""}}},{type:"number",name:"imageHeight",label:"Height",options:{responsive:!0,reset:!0,units:{px:{min:0,max:100}}},css:{important:!0,selector:"  .ecom-cart__product-thumbnail-img, .ecom-cart__product-thumbnail--tablet img",properties:{height:""}}},{name:"object-fit",label:"Image fit",type:"popup",options:{type:"dropdown",default:!1,values:{none:"None",fill:"Fill",contain:"Contain",cover:"Cover","scale-down":"Scale down"}},css:{selector:" .ecom-cart__product-thumbnail-img img, .ecom-cart__product-thumbnail--tablet img",properties:{"object-fit":""}}},{name:"tab",type:"tab",value:"normal",options:{tabs:[{name:"normal",title:"Normal"},{name:"hover",title:"Hover"}]},css:{isCss:!1}},{name:"image_opacity",type:"number",label:"Opacity",options:{step:.01,min:.1,max:1,visible:function(e){return e.tab==="normal"}},css:{selector:" img.ecom-cart__product-image",properties:{opacity:""}}},{name:"image_opacity_hover",type:"number",label:"Opacity",options:{step:.01,min:.1,max:1,visible:function(e){return e.tab==="hover"}},css:{selector:" img.ecom-cart__product-image:hover ",properties:{opacity:""}}},{name:"image_filter",label:"CSS Filters",type:"popup",options:{oneline:!0,type:"filter",visible:function(e){return e.tab==="normal"}},css:{selector:" img.ecom-cart__product-image"}},{name:"image_filter_hover",label:"CSS Filters",type:"popup",options:{oneline:!0,type:"filter",visible:function(e){return e.tab==="hover"}},css:{selector:" img.ecom-cart__product-image:hover"}},{type:"number",label:'Transition Duration <span class="lowercase">(ms)</span>',name:"transition",options:{min:0,max:1500,visible:{keep_data:!0,condition:e=>e.tab==="hover"}},css:{selector:" img.ecom-cart__product-image",properties:{transition:"all %value%ms ease"}}}]},{group_alias:"text",options:{group_name:"product_name",group_title:"Product Name",selector:"root .ecom-cart__product-item-name"},modify:{remove:{index:0,length:1}}},{group_alias:"text",options:{group_name:"product_properties",group_title:"Product Properties",selector:"root .ecom-cart__product-product-option"},modify:{remove:{index:0,length:1}}},{group_alias:"text",options:{group_name:"price",group_title:"Price",selector:"root .ecom-cart__product-prices .ecom-cart__product-price--end"},modify:{remove:{index:0,length:1}}},{group_alias:"text",options:{group_name:"discount",group_title:"Regular price",selector:"root .ecom-cart__product-prices .ecom-cart__product-item-old-price"},modify:{remove:{index:0,length:1}}},{group_alias:"text",options:{group_name:"total",group_title:"Total",selector:"root .ecom-cart__product-item__totals .ecom-cart__product-price--end"},modify:{remove:{index:0,length:1}}},{group_alias:"text",options:{group_name:"quantity",group_title:"Quantity",selector:"root .ecom-cart__product-quantity--input"},modify:{remove:{index:0,length:1},params:[{position:3,fields:[{name:"inputBackground",label:"Background",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{properties:{"background-color":""}}}]},{position:9,fields:[{type:"popup",label:"Border",name:"inputBorder",options:{type:"border",oneline:!0}}]},{position:10,fields:[{alias:"border-radius"}]},{position:15,fields:[{type:"line"},{type:"paragraph",content:"Operator"},{name:"background_color",label:"Color",type:"color",options:{oneline:!0,global:{type:"colors"}},css:{selector:"root .ecom-cart__product-quantity--button",properties:{"--background-color":""}}},{type:"number",label:"Size",name:"operator_size",options:{units:{px:{min:0,max:50}},responsive:!0},css:{selector:"root .ecom-cart__product-quantity--button",properties:{"--operator-size":""}}}]}]}},{group_alias:"icon:hover",options:{group_title:"Close button",group_name:"close_button",selector:"root .ecom-cart__product-item-remove-button"}},{group_alias:"text",options:{group_name:"title_cart_empty",group_title:"Title when cart empty",selector:"root .ecom-cart__product-empty-text"}},{group_alias:"button",options:{group_name:"link_cart_empty",group_title:"Link when cart empty",selector:"root .ecom-cart__product-empty-link"},modify:{params:[{position:1,fields:[{alias:"justify-content",options:{label:"Alignment",css:{selector:"root .ecom-cart__product-button--continue",properties:{"justify-content":""}}}}]}]}},{group_alias:"icon",options:{group_name:"icon_empty",group_title:"Link icon when cart empty",selector:"root .ecom-cart__product-empty-icon"}}]},css(){return`
			.ecom-cart__product-items{
				border: 1px solid #E5E7EB;
				box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
				border-radius: 8px;
				overflow:hidden;
			}
			input.ecom-cart__product-quantity--input{
				-webkit-appearance: none;
				margin: 0;
				width: 100%;
				max-width:130px;
				border: 1px solid rgba(209, 213, 219,1);
				padding:8px 42px;
				background: white;
				font-style: normal;
				font-weight: 600;
				font-size: 1.4rem;
				line-height: 28px;
				text-align: center;
				color: #001521;
				outline: none !important;
				box-shadow:rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

			}
			input.ecom-cart__product-quantity--input:focus{
				border-color:rgba(5, 150, 105,1);
				box-shadow:rgb(255, 255, 255) 0px 0px 0px 0px, rgba(5, 150, 105,1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
			}
			.ecom-cart__product-empty-icon svg{
				width: 12px;
				height: 12px;
			}
			.ecom-cart__product-empty-icon {
				display: flex;
				justify-content: center;
				align-items: center;
			}
			input.ecom-cart__product-quantity--input::-webkit-outer-spin-button,
			input.ecom-cart__product-quantity--input::-webkit-inner-spin-button {
				-webkit-appearance:none;
				margin:0;
			}
			.ecom-cart__product-heading--res {
				display: none;
			}
			.ecom-cart__product-quantity--button{
				position: absolute;
				top: 0px;
				bottom: 0px;
				width: 45px;
				font-size: 1.6rem;
				z-index: 1;
				transition: all 0.3s ease 0s;
				cursor: pointer;
				color: #111827;
				text-align: center;
				border: 0px;
				background:transparent;
			}
			.ecom-cart__product-quantity--button::before {
						position: absolute;
						content: "";
						top: 50%;
						right: 0px;
						bottom: 0px;
						left: 50%;
						transform: translate(-50%, -50%);
						height: 1px;
                        background-color: #616661;
                        background: var(--background-color);
                        width: var(--operator-size);
					}
			.ecom-cart__product-quantity--button::after{
				position: absolute;
				content: "";
				top: 50%;
				right: 0px;
				bottom: 0px;
				left: 50%;
				transform: translate(-50%, -50%);
				height: 1px;
				background-color: #616661;
                background: var(--background-color);
                width: var(--operator-size);
			}
			.ecom-quantity-minus{
				left:9px;
			}
			.ecom-quantity-plus{
				right:9px;
			}
			.ecom-quantity-plus::before {
				transform: translate(-50%, -50%) rotate(90deg) !important;
			}
			.ecom-cart__product-quantity-wrapper{
				position:relative;
			}
				.ecom-cart__product-items-heading {
					display: grid;
					grid-template-columns: 50% 15% 20% 15%;
					align-content: center;
					justify-content: start;
					align-items: center;
					justify-items: start;
					background:#F9FAFB;
					border-bottom:1px solid rgba(229,231,235,1);
				}
				.ecom-cart__product-items-heading > div{
					padding: 12px 24px;

					font-weight: 500;
					font-size: 1.6rem;
					line-height: 16px;
					letter-spacing: 0.05em;
					color: #6B7280;
				}
				.ecom-cart__product-item > div:not(:last-child){
					padding: 12px 24px;
				}
				.ecom-cart__product-item > div:last-child{
					padding: 12px 15px 12px 24px;
				}
				.ecom-cart__product-item-discounted-prices{
					display:flex;
					gap:10px;
					flex-wrap:wrap;
					align-items:center;
				}
				.ecom-cart__product-item-name{
					margin-bottom:4px;
				}
				.ecom-cart__product-item {
					display: grid;
					grid-template-columns: 10% 40% 15% 20% 15%;
					align-content: center;
					justify-content: start;
					align-items: center;
					justify-items: start;
					border-bottom:1px solid rgba(229,231,235,1);
				}
				.ecom-cart__product-price--end,
				.ecom-cart__product-item-name{
					font-style: normal;
					font-weight: 500;
					font-size: 1.6rem;
					line-height: 20px;
					color: #111827;
					text-decoration: none;
				}
				.ecom-cart__product-item-old-price,
				.ecom-cart__product-options{
					margin:0px;
					font-style: normal;
					font-weight: 400;
					font-size: 1.4rem;
					line-height: 20px;
					color: rgba(107,114,128,1);
				}

				.ecom-cart__product-item__price-wrapper dd{
					margin: 0;
				}
				.ecom-cart__product-visually-hidden{
					display:none;
				}
				.ecom-cart__product-item__totals{
					display: flex;
					width: 100%;
					justify-content: space-between;
					align-items: center;
				}
				.ecom-cart__product-item-remove-button.desktop{
					display:flex;
				}
				.ecom-cart__product-item-remove-button.responsive {
					display: none;
				}
				.ecom-cart__product-product-option > * {
					display: inline-block;
				}
				.ecom-cart__product-item >.ecom-cart__product-thumbnail{
					padding: 6px 0px 6px 12px !important;
				}
				.ecom-cart__product-thumbnail-img{
					max-width: 100px;
					overflow:hidden;
				}
				.ecom-cart__product-thumbnail-img img {
					width: 100% !important;
					height: 100% !important
				}
				.ecom-cart__product-item-remove-button > svg{
					width:2.4rem;
					height:auto;
				}
				.ecom-cart__product-thumbnail--tablet {
					display: none;
					position: absolute;
					left: 0;
				}
				.ecom-cart__product-discounts {
					list-style: none;
				}
				.ecom-cart__product-empty-link {
					justify-content: center;
					align-items: center;
					text-decoration: none;
					display: flex;
					width: 200px;
					height: 40px;
					border-radius: 4px;
					background-color: #000;
					color: #fff;
				}
				@media screen and (max-width: 1024px){
					.ecom-cart__product-heading--res {
						display: block;
					}
					.ecom-cart__product-items {
						border: none;
						box-shadow: none;
					}
					.ecom-cart__product-items-heading {
						display: none;
					}
					.ecom-cart__product-item-remove-button.responsive {
						display: flex;
					}
					.ecom-cart__product-item-remove-button.desktop {
						display: none;
					}
					.product-option { 
						margin: 0;
					}
					.ecom-cart__product-item {
						display: flex;
						position: relative;
						padding: 5px 0px 5px 112px;
						align-items: center;
						flex-flow: wrap;
					}
					.ecom-cart__product-item > div:not(:first-child){
						padding: 8px 0;
						display: flex;
						align-items: center;
						width: 100%;
						justify-content: space-between;
					}
					.ecom-cart__product-item > div:nth-child(2) {
						align-items: flex-start;
					}
					.ecom-cart__product-item > div:not(:last-child) {
						border-bottom: 1px dashed rgba(230, 230, 230 ,.8);
					}
					.ecom-cart__product-heading--res::before {
						content: attr(data-title);
						text-align: left;
						font-weight: 400;
						color: inherit;
						flex: 1 1 auto;
					}
					.ecom-cart__product-thumbnail {
						display: none;
					}
					.ecom-cart__product-thumbnail--tablet {
						display: block;
					}
				}
				@media screen and (max-width: 768px) {
					.ecom-quantity-plus {
						right: 0;
					}
					.ecom-quantity-minus {
						left: 0;
					}
					dl.ecom-cart__product-item-discounted-prices {
						justify-content: flex-end;
					}
					input.ecom-cart__product-quantity--input {
						width: 100px;
						padding: 0;
					}
				}
			`},default(){return{settings:{show_dummy:!0,show_properties:!0,show_regular_price:!0,title_column_1:"Product",title_column_2:"Price",title_column_3:"Quantity",title_column_4:"Total",link_cart_title:"Continue shopping",title_cart_empty:"Your cart is empty",link_cart_empty:"/"},style:{product_properties:{textTypography:{"font-size":"14px",color:"rgba(107,114,128,1)"}},quantity:{operator_size:"12px",background_color:"#616661"}}}}},methods:{}},B={class:"ecom-element ecom-cart ecom-cart__product"},L={class:"ecom-cart__product-wrapper"},T=["innerHTML"];function E(e,c,a,r,o,t){return j(),z("div",B,[k("div",L,[k("div",{class:"ecom-cart__product-container",innerHTML:e.liquid("items")},null,8,T)])])}const F=q(w,[["render",E]]);w.__docgenInfo={exportName:"default",displayName:"Cartitems",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Cart/Product.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{F as default};
//# sourceMappingURL=Product.a3982972.js.map
