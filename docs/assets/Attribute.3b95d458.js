import{_ as u,E as m,L as b,J as h}from"./preview.95a7df14.js";import{v as _,o as r,a as g,z as p,E as c,y as l}from"./vue.esm-bundler.b9dec9d9.js";import"./chunk-KSYMO6G6.f719e32d.js";import"./index.e850844b.js";import"./iframe.048ad53f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.f037b798.js";const d={name:"Cart Attributes",mixins:[m,b,h],props:{data:{type:Object,default(){return{}}}},computed:{liquids(){return{attributes:{code:this.attributes.map((e,o)=>{var i,s;let a=(s=(i=e.settings)==null?void 0:i.name)!=null?s:o,t=`
							${e.settings?`<div class="ecom-cart__attributes-list-item">
										<label for="${e.settings.name}" >
										${this.lang(e.settings.label,a+"_label")} ${e.settings.required?'<span style="color: red;">*</span>':""}
									</label>`:""}
							
							`;return["text","number","date","datetime-local","color","email","url","range","tel","time","week"].includes(e.type)&&e.settings?t+=`
									${e.settings?`<div class="ecom-cart__attributes-input ecom-flex">
												<input
													type="${e.type=="datetime-local"?"date":e.type}"
													name="attributes[${e.settings.name}]"
													style="max-width: ${e.settings.width?e.settings.width:"50%"}"
													class="ecom-cart__attribute-${e.type}"
													placeholder="${this.lang(e.settings.placeholder,e.settings.name+"_placeholder")}"
													value="{{cart.attributes['${e.settings.name}']}}"
													${e.settings.required?'required="required"':""}
													${e.settings.enable_limit&&e.settings.min_date?`min="${this.handleDate(e.settings.min_date)}"`:""}
													${e.settings.enable_limit&&e.settings.min_date?`max="${this.handleDate(e.settings.max_date)}"`:""}
												/>
											</div>`:""}
									
								`:e.type==="textarea"&&e.settings?t+=`
								<div class="ecom-cart__attributes-input ecom-flex">
									<textarea
										class="ecom-cart__attribute-${e.type}"
										style="max-width: ${e.settings.width?e.settings.width:"50%"}"
										name="attributes[${e.settings.name}]"
										placeholder="${this.lang(e.settings.placeholder,e.settings.name+"_placeholder")}"
										${e.settings.required?'required="required"':""}
									>{{cart.attributes['${e.settings.name}']}}</textarea>
								</div>`:e.type==="select"&&e.settings&&e.settings.options?t+=`
									{% capture value%}{{-cart.attributes['${e.settings.name}']-}}{%endcapture%}
									<div class="ecom-cart__attributes-input--select ecom-flex">
										<select
											name="attributes[${e.settings.name}]"
											style="max-width: ${e.settings.width?e.settings.width:"50%"}"
											${e.settings.required?'required="required"':""}
											class="ecom-cart__attribute-${e.type}"
											value="{{value}}"
										>
											{% capture options %}${this.lang(e.settings.options.split(`
`).join("[br/]"),e.settings.name+"_values")}{% endcapture%}
											{%- if options-%}
												{% assign options = options | split: '[br/]' %}
												{% for option in options%}
													{% assign tmp = option | split: '|' %}
													{% assign val = tmp | first %}
													<option value="{{val}}" {% if value == val %}selected{% endif %}>{{tmp | last }}</option>
												{% endfor %}
											{%- endif -%}

										</select>
									</div>
									
								`:["checkbox","radio"].includes(e.type)&&e.settings&&(t+=`
									{% capture options %}${this.lang(e.settings.options.split(`
`).join("[br/]"),e.settings.name+"_values")}{% endcapture%}
									{%- if options-%}
										{% assign options = options | split: '[br/]' %}
										{% capture value%}{{-cart.attributes['${e.settings.name}]${e.type==="checkbox"?"[]":""}']-}}{%endcapture%}
										{%- for option in options -%}
											{% assign tmp = option | split: '|' %}
											{% assign val = tmp | first %}
											<label class="ecom-attribute-checkbox ecom-attribute-type__${e.type}">
													<input
														type="${e.type}"
														class="ecom-cart__attribute-${e.type} ${e.type=="checkbox"&&e.settings.required?"ecom-required--checkbox":""}"
														${e.settings.required?'required="required"':""}
														value="{{val}}"
														{% if value == val%}
														checked
														selected
														{% endif %}
														name="attributes[${e.settings.name}]${e.type==="checkbox"?"[]":""}"
														
													/>
												   <span class="ecom-cart-attribute__${e.type}--label">{{ tmp| last }}</span>
												</label>
										{%- endfor -%}

									{%- endif -%}
								`),e.settings&&e.settings.description&&(t+=` <div
									class="ecom-cart__attribute-field-decription"
								>${this.lang(e.settings.description,e.settings.name+"_description")}</div>`),t+="</div>",t}).join(""),preview:""}}},javascript(){return function(){if(!!this.$el&&(this.$el,this.isLive)){let e=this.$el.closest("form");this.$el.addEventListener("change",function(){let o=new FormData(e),a=new FormData;for(var t of o.entries())t[0].includes("attributes")&&a.append(t[0],t[1]);window.fetch(window.Shopify.routes.root+"cart/update.js",{method:"POST",body:a}).then(i=>i.json()).catch(i=>{console.error("Error:",i)})})}}},settings(){return[{group_title:this.$t("cart_attributes"),params:[{type:"paragraph",content:this.$t("cart_attributes_are_used_to_collect_additional_information_about_the_order")},{type:"number",label:this.$t("number_of_fields_per_row"),name:"columns",value:2,options:{min:1,max:3,responsive:!0},css:{selector:"root .ecom-cart__attributes-list",properties:{"grid-template-columns":"repeat(%value%,1fr)"}}},{type:"number",name:"gap",label:this.$t("gap"),options:{responsive:!0,units:{px:{min:0,max:50}}},css:{selector:"root .ecom-cart__attributes-list",properties:{gap:""}}},{type:"group",name:"attributes",label:this.$t("fields"),params:[{type:"text",name:"Text field",settings:[{type:"text",name:"label",options:{toolbar:!0},label:this.$t("field_label")},{type:"text",name:"placeholder",label:this.$t("field_placeholder")},{type:"text",name:"name",label:this.$t("field_name_unique"),placeholder:this.$t("first_name"),description:this.$t("field_name_must_be_unique")},{type:"textarea",name:"description",label:this.$t("field_description"),description:this.$t("description_about_the_field"),options:{toolbar:!0}},{type:"toggle",name:"required",label:this.$t("required_field"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"number",label:this.$t("field_width"),name:"width",options:{units:{"%":{min:0,max:100}},slider:!0,input:!0,min:0,max:100}}],values:{label:this.$t("your_name"),placeholder:this.$t("your_name")}},{type:"textarea",name:"Long text field",settings:[{type:"text",name:"label",options:{toolbar:!0},label:this.$t("field_label")},{type:"text",name:"placeholder",label:this.$t("field_placeholder")},{type:"text",name:"name",label:this.$t("field_name_unique"),placeholder:this.$t("first_name"),description:this.$t("field_name_must_be_unique")},{type:"textarea",name:"description",label:this.$t("field_description"),description:this.$t("description_about_the_field"),options:{toolbar:!0}},{type:"toggle",name:"required",label:this.$t("required_field"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"number",label:this.$t("field_width"),name:"width",options:{units:{"%":{min:0,max:100}},slider:!0,input:!0,min:0,max:100}}],values:{label:this.$t("your_message"),placeholder:this.$t("your_message")}},{type:"checkbox",name:"Checkbox",settings:[{type:"text",name:"label",options:{toolbar:!0},label:this.$t("checkbox_label")},{type:"text",name:"name",label:this.$t("checkbox_name_unique"),description:this.$t("field_name_must_be_unique")},{type:"textarea",name:"description",label:this.$t("checkbox_description"),description:this.$t("description_about_the_field"),options:{toolbar:!0}},{type:"textarea",name:"options",label:this.$t("checkbox_values"),options:{placeholder:this.$t("value_the_title")},description:this.$t("values_separated_by_the_line_break")},{type:"toggle",name:"required",label:this.$t("required_field"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}}],values:{label:this.$t("checkboxes"),options:`checkbox| Checkbox 1
checkbox2|Checkbox 2`}},{type:"radio",name:"Radio button",settings:[{type:"text",name:"label",options:{toolbar:!0},label:this.$t("radio_label")},{type:"text",name:"name",label:this.$t("radio_name_unique"),description:this.$t("radio_name_must_be_unique")},{type:"textarea",name:"description",label:this.$t("radio_description"),description:this.$t("description_about_the_field"),options:{toolbar:!0}},{type:"textarea",name:"options",label:this.$t("radio_values"),opitons:{placeholder:this.$t("value_the_title_value_2_the_title_3")},description:this.$t("values_separated_by_the_line_break")},{type:"toggle",name:"required",label:this.$t("required_field"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}}],values:{label:this.$t("radios"),options:`radio1|Radio 1
radio2|Radio 2`}},{type:"select",name:"Select dropdown field",settings:[{type:"text",name:"label",options:{toolbar:!0},label:this.$t("field_label")},{type:"text",name:"name",label:this.$t("field_name_unique"),description:this.$t("field_name_must_be_unique")},{type:"textarea",name:"description",label:this.$t("field_description"),description:this.$t("description_about_the_field"),options:{toolbar:!0}},{type:"textarea",name:"options",label:this.$t("select_dropdown_values"),options:{placeholder:this.$t("value_the_title_value_2_the_title_3")},description:this.$t("values_separated_by_the_line_break")},{type:"toggle",name:"required",label:this.$t("required_field"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"number",label:this.$t("field_width"),name:"width",options:{units:{"%":{min:0,max:100}},slider:!0,input:!0,min:0,max:100}}],values:{label:this.$t("select"),options:`value|The title 1
value2|The Title 2`,width:"50%"}},{type:"email",name:"Email field",settings:[{type:"text",name:"label",options:{toolbar:!0},label:this.$t("field_label")},{type:"text",name:"placeholder",label:this.$t("field_placeholder")},{type:"text",name:"name",label:this.$t("field_name_unique"),description:this.$t("field_name_must_be_unique"),placeholder:this.$t("email")},{type:"textarea",name:"description",label:this.$t("field_description"),description:this.$t("description_about_the_field"),options:{toolbar:!0}},{type:"toggle",name:"required",label:this.$t("required_field"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"number",label:this.$t("field_width"),name:"width",options:{units:{"%":{min:0,max:100}},slider:!0,input:!0,min:0,max:100}}],values:{label:this.$t("your_email"),placeholder:this.$t("your_email")}},{type:"datetime-local",name:"Datetime local field",settings:[{type:"text",name:"label",options:{toolbar:!0},label:this.$t("field_label")},{type:"text",name:"name",label:this.$t("field_name_unique"),description:this.$t("field_name_must_be_unique"),placeholder:this.$t("date")},{type:"textarea",name:"description",label:this.$t("field_description"),description:this.$t("description_about_the_field"),options:{toolbar:!0}},{type:"toggle",name:"required",label:this.$t("required_field"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{type:"toggle",name:"enable_limit",label:this.$t("enable_limit"),options:{values:{on:{label:this.$t("yes"),value:!0},off:{label:this.$t("no"),value:!1}}}},{name:"min_date",type:"datetime",placeholder:"YYYY/MM/DD",label:this.$t("min_date_limit"),options:{min:"1900/1/1",max:"2100/1/1",type:"datetime",format:"YYYY-MM-DD",visible:function(e){return e.enable_limit}}},{name:"max_date",type:"datetime",placeholder:"YYYY/MM/DD hh:mm",label:this.$t("max_date_limit"),options:{min:"1900/1/1",max:"2100/1/1",type:"datetime",format:"YYYY-MM-DD",visible:function(e){return e.enable_limit}}},{type:"number",label:this.$t("field_width"),name:"width",options:{units:{"%":{min:0,max:100}},slider:!0,input:!0,min:0,max:100}}],values:{label:this.$t("date")}}]}]}]},attributes(){return this.data&&this.data.settings&&this.data.settings.attributes?this.data.settings.attributes:[{type:"text",name:"name",placeholder:this.$t("your_name"),label:this.$t("your_name"),required:!0},{type:"textarea",name:"message",placeholder:this.$t("your_message"),label:this.$t("your_message"),required:!0}]},style(){return[{group_alias:"box",options:{group_title:this.$t("general")}},{group_alias:"text",options:{group_title:this.$t("label"),group_name:"label",selector:"root .ecom-cart__attributes-list-item label:first-child"},modify:{params:{position:10,fields:{alias:"spacing",options:{label:this.$t("spacing")}}}}},{group_alias:"input",options:{group_name:"input_textarea",group_title:this.$t("input"),selector:' .ecom-cart__attributes-list-item input:not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="color"]), .ecom-cart__attributes-list-item textarea'},modify:{remove:[{index:1,length:1}],params:[{position:2,fields:[{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:"root .ecom-cart__attributes-input",properties:{"align-items":"","justify-content":""}}}}]}]}},{group_alias:"input",options:{group_name:"select",group_title:this.$t("select"),selector:"root .ecom-cart__attributes-list-item .ecom-cart__attributes-input--select select"},modify:{remove:[{index:1,length:1},{index:4,length:1}],params:[{position:2,fields:[{alias:"justify-content",options:{label:this.$t("alignment"),css:{selector:"root .ecom-cart__attributes-input--select",properties:{"align-items":"","justify-content":""}}}}]}]}},{group_alias:"text",options:{group_title:this.$t("checkbox"),group_name:"checkbox",selector:" .ecom-cart-attribute__checkbox--label"},modify:{params:[{position:0,fields:{type:"paragraph",content:"** "+this.$t("label")+" **"}},{position:5,fields:{alias:"spacing",options:{name:"spacingLabel",label:this.$t("spacing")}}},{position:20,fields:[{type:"paragraph",content:"** "+this.$t("input")+" **"},{type:"number",name:"checkbox_size",label:this.$t("size"),options:{units:{px:{min:0,max:50}}},css:{selector:"root input.ecom-cart__attribute-checkbox",properties:{width:"",height:""}}},{type:"tab",name:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")},{name:"active",title:this.$t("active")}]},css:!1},{alias:"background",options:{css:{selector:"root .ecom-cart__attribute-checkbox"},options:{visible:e=>e.tab==="normal"}}},{alias:"background",options:{name:"backgroundHover",css:{properties:{background:""},selector:"root .ecom-cart__attribute-checkbox:hover"},options:{visible:e=>e.tab==="hover"}}},{alias:"background",options:{name:"backgroundActive",css:{properties:{background:""},important:!0,selector:"root .ecom-cart__attribute-checkbox:checked"},options:{visible:e=>e.tab==="active"}}},{type:"popup",label:this.$t("border"),name:"popup",options:{type:"border",visible:e=>e.tab==="normal"},css:{selector:"root .ecom-cart__attribute-checkbox"}},{type:"popup",label:this.$t("border"),name:"popupHover",options:{type:"border",visible:e=>e.tab==="hover"},css:{properties:{border:""},selector:"root .ecom-cart__attribute-checkbox:hover"}},{type:"popup",label:this.$t("border"),name:"popupActive",options:{type:"border",visible:e=>e.tab==="active"},css:{properties:{border:""},important:!0,selector:"root .ecom-cart__attribute-checkbox:checked"}},{type:"dimension",label:this.$t("border_radius"),name:"border-radius",options:{type:"radius",units:"default",visible:e=>e.tab==="normal"},css:{important:!0,selector:"root .ecom-cart__attribute-checkbox"}},{type:"dimension",label:this.$t("border_radius"),name:"border-radiusHover",options:{units:"default",type:"radius",visible:e=>e.tab==="hover"},css:{important:!0,properties:{"border-radius":""},selector:"root .ecom-cart__attribute-checkbox:hover"}},{type:"dimension",label:this.$t("border_radius"),name:"border-radiusActive",options:{units:"default",type:"radius",visible:e=>e.tab==="active"},css:{properties:{"border-radius":""},important:!0,selector:"root .ecom-cart__attribute-checkbox:checked"}},{name:"transition",type:"number",label:this.$t("transition_duration_span_class_lowercase_ms_span"),options:{min:0,max:5e3,visible:{keep_data:!0,condition:e=>e.tab==="hover"}},css:{selector:"root .ecom-cart__attribute-checkbox",properties:{transition:"all %value%ms ease"}}},{type:"line"},{alias:"spacing",options:{label:this.$t("spacing"),css:{selector:"root .ecom-cart__attribute-checkbox"}}}]}],remove:{index:1,length:1}}},{group_alias:"text",options:{group_title:this.$t("radio"),group_name:"radio",selector:" .ecom-cart-attribute__radio--label"},modify:{params:[{position:0,fields:{type:"paragraph",content:"** "+this.$t("label")+" **"}},{position:5,fields:{alias:"spacing",options:{name:"spacingLabel"}}},{position:20,fields:[{type:"paragraph",content:"** "+this.$t("input")+" **"},{type:"number",name:"radio_size",label:this.$t("size"),options:{units:{px:{min:0,max:50}}},css:{selector:"root input.ecom-cart__attribute-radio",properties:{width:"",height:""}}},{type:"tab",name:"tab",value:"normal",options:{tabs:[{name:"normal",title:this.$t("normal")},{name:"hover",title:this.$t("hover")},{name:"active",title:this.$t("active")}]},css:!1},{alias:"background",options:{css:{selector:"root .ecom-cart__attribute-radio"},options:{visible:e=>e.tab==="normal"}}},{alias:"background",options:{name:"backgroundHover",css:{properties:{background:""},selector:"root .ecom-cart__attribute-radio:hover"},options:{visible:e=>e.tab==="hover"}}},{alias:"background",options:{name:"backgroundActive",css:{properties:{background:""},important:!0,selector:"root .ecom-cart__attribute-radio:checked"},options:{visible:e=>e.tab==="active"}}},{type:"popup",label:this.$t("border"),name:"popup",options:{type:"border",visible:e=>e.tab==="normal"},css:{selector:"root .ecom-cart__attribute-radio"}},{type:"popup",label:this.$t("border"),name:"popupHover",options:{type:"border",visible:e=>e.tab==="hover"},css:{properties:{border:""},selector:"root .ecom-cart__attribute-radio:hover"}},{type:"popup",label:this.$t("border"),name:"popupActive",options:{type:"border",visible:e=>e.tab==="active"},css:{properties:{border:""},important:!0,selector:"root .ecom-cart__attribute-radio:checked"}},{type:"dimension",label:this.$t("border_radius"),name:"border-radius",options:{units:"default",type:"radius",visible:e=>e.tab==="normal"},css:{important:!0,selector:"root .ecom-cart__attribute-radio"}},{type:"dimension",label:this.$t("border_radius"),name:"border-radiusHover",options:{units:"default",type:"radius",visible:e=>e.tab==="hover"},css:{important:!0,properties:{"border-radius":""},selector:"root .ecom-cart__attribute-radio:hover"}},{type:"dimension",label:this.$t("border_radius"),name:"border-radiusActive",options:{units:"default",type:"radius",visible:e=>e.tab==="active"},css:{properties:{"border-radius":""},important:!0,selector:"root .ecom-cart__attribute-radio:checked"}},{name:"transition",type:"number",label:this.$t("transition_duration_span_class_lowercase_ms_span"),options:{min:0,max:5e3,visible:{keep_data:!0,condition:e=>e.tab==="hover"}},css:{selector:"root .ecom-cart__attribute-radio",properties:{transition:"all %value%ms ease"}}},{type:"line"},{alias:"spacing",options:{css:{selector:"root .ecom-cart__attribute-radio"}}}]}],remove:{index:1,length:1}}}]},css(){return`
				.ecom-cart__attributes-list{
					display:grid;
					grid-template-columns: 100%;
					grid-rows-gap: 30px;
				}
				.ecom-cart__attributes-list-item {
					display: flex;
					flex-direction:column;
				}
				.ecom-cart__attributes-list-item label{
					font-style: normal;
					font-weight: 500;
					font-size: 1.4rem;
					line-height: 20px;
					color: #374151;
					margin-bottom:4px;
				}
				.ecom-cart__attributes-list-item textarea{
					height: 93px;
					width:100% !important;
				}
				.ecom-cart__attributes-list-item select{
					height:40px;
				}
				.ecom-cart__attributes-list-item>.ecom-cart__attributes-input>textarea,
				.ecom-cart__attributes-list-item>.ecom-cart__attributes-input--select>select,
				.ecom-cart__attributes-list-item>.ecom-cart__attributes-input>input{
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
				.ecom-cart__attributes-list-item>.ecom-cart__attributes-input>textarea:focus,
				.ecom-cart__attributes-list-item>.ecom-cart__attributes-input--select>select:focus,
				.ecom-cart__attributes-list-item>.ecom-cart__attributes-input>input:focus{
					border-color: #000;
					box-shadow:rgb(255, 255, 255) 0px 0px 0px 0px, #000 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
				}
				.ecom-attribute-checkbox{
					display:flex;
					align-items:center;
					grid-column-gap: 12px;
				}


				.ecom-cart__attribute-checkbox[type=checkbox]{
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
						border: 1px solid rgba(209,213,219,1);
					}
					.ecom-cart__attribute-checkbox[type=checkbox]:checked {
						border-color: transparent;
						background-color: #059669;
						background-size: 100% 100%;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
					}

					.ecom-cart__attribute-radio[type=radio]{
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
						border: 1px solid rgba(209,213,219,1);
						border-radius:50%;
						position:relative;
					}
					.ecom-cart__attribute-radio[type=radio]:checked {
						border-color: transparent;
						background-color: #059669;
					}
					.ecom-cart__attribute-radio[type=radio]:checked::after{
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
					/*.ecom-cart__attribute-input--file-wrapper {
						height: 40px;
						max-width: 100%;
						font-size: 14px;
						font-weight: 500;
						color: white;
						width: 150px;
						background-color: black;
						cursor: pointer;
						border-radius: 4px;
					}
					.ecom-cart__attribute-input--file {
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
						display: block;
					}*/
			`},default(){return{settings:{columns:2,columns__mobile:1,columns__tablet:2,attributes:[{type:"text",settings:{name:"name",placeholder:"Your name",label:"Your name",required:!0,width:"50%"}},{type:"email",settings:{label:"Your email",placeholder:"Your email",name:"email"}},{type:"checkbox",settings:{name:"checkboxes",placeholder:"Placeholder",label:"Checkboxes",required:!0,options:`checkbox| Checkbox 1
checkbox2|Checkbox 2`,width:"50%"}},{type:"radio",settings:{name:"radio_agrument",label:"Radios",required:!0,options:`radio1|Radio 1
radio2|Radio 2`,width:"50%"}},{type:"select",settings:{name:"select",label:"Select",required:!0,options:`value|The title 1
value2|The Title 2`,width:"50%"}},{type:"datetime-local",settings:{label:"Date",name:"date"}},{type:"textarea",settings:{name:"message",placeholder:"Your message",label:"Your message",required:!0,width:"100%"}}]},style:{label:{textTextAlign:"left",spacing:{margin:{bottom:"5px"}},textColor:"#000000",textTypography:{"font-weight":"500"}},input_textarea:{"text-align":"left",borderRadius:{top:"3px",left:"3px",bottom:"3px",right:"3px"},tab:"normal",width:"100%",spacing:{padding:{top:"10px",bottom:"10px",left:"10px",right:"10px"},margin:{top:"0px",left:"0px",bottom:"0px",right:"0px"}},outline:{outline:{"outline-style":"none"}},border:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#adadad"},boxShadow:{"box-shadow":{color:"rgba(255, 0, 0, 0)",blur:"0px",position:"outline"}}},select:{"text-align":"left",borderRadius:{top:"3px",left:"3px",bottom:"3px",right:"3px"},tab:"normal",width:"100%",spacing:{margin:{},padding:{top:"10px",left:"5px",bottom:"10px",right:"5px"}},outline:{outline:{"outline-style":"none"}},border:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#adadad"}},checkbox:{tab:"normal",spacingLabel:{margin:{},padding:{top:"5px",left:"5px",bottom:"5px",right:"5px"}},popup:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#0a0a0a"},"border-radius":{right:"3px",top:"3px",left:"3px",bottom:"3px"},spacing:{margin:{},padding:{top:"8px",left:"8px",bottom:"8px",right:"8px"}},background:{classic:{"background-color":"#fff"}},popupHover:{"border-style":"solid","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#0e7490"},backgroundHover:{classic:{"background-color":"#155e75"}},backgroundActive:{classic:{"background-color":"#155e75"}},popupActive:{"border-style":"double","border-width":{top:"1px",left:"1px",bottom:"1px",right:"1px"},"border-color":"#155e75"},transition:300},radio:{tab:"normal",textColor:"#141414",background:{classic:{}},backgroundActive:{classic:{"background-color":"#155e75"}},backgroundHover:{classic:{"background-color":"#155e75"}},transition:200,"border-radius":{right:"50%",top:"50%",left:"50%",bottom:"50%"},spacingLabel:{padding:{right:"5px",top:"5px",left:"5px",bottom:"5px"},margin:{}},popup:{"border-style":"solid","border-width":{top:"2px",left:"2px",bottom:"2px",right:"2px"},"border-color":"#155e75"},spacing:{padding:{right:"8px",top:"8px",left:"8px",bottom:"8px"},margin:{}}},input_file:{spacing:{padding:{left:"20px",right:"20px"}}}}}}},methods:{handleDate(e){let o=e.split("-"),a=this.num2Didits(o[0]),t=this.num2Didits(o[1]),i=this.num2Didits(o[2]);return`${a}-${t}-${i}`},num2Didits(e){return(e<10?"0":"")+e}}},x={class:"ecom-element ecom-cart ecom-cart__attributes"},f={class:"ecom-cart__attributes-wrapper"},y={class:"ecom-cart__attributes-container"},$=["innerHTML"];function v(e,o,a,t,i,s){const n=_("Liquid");return r(),g("div",x,[e.exporting?(r(),p(n,{key:0,data:"{%- if cart.item_count > 0 -%}"})):c("",!0),l("div",f,[l("div",y,[l("div",{class:"ecom-cart__attributes-list",innerHTML:e.liquid("attributes")},null,8,$)])]),e.exporting?(r(),p(n,{key:1,data:"{%- endif -%}"})):c("",!0)])}const z=u(d,[["render",v]]);d.__docgenInfo={exportName:"default",displayName:"Cart Attributes",description:"",tags:{},props:[{name:"data",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/components/Builder/Components/Core/Elements/Cart/Attribute.vue","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/element.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/javascript.ts","/Users/daniel/Documents/Workspace/www/ecomposer/resources/ecomposer-builder/src/mixins/liquid.ts"]};export{z as default};
//# sourceMappingURL=Attribute.3b95d458.js.map
