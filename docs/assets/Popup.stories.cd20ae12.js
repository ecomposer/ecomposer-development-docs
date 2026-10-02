import{_ as y}from"./StoryBook.43c0e6fe.js";import"./vue.esm-bundler.b9dec9d9.js";const o={type:"popup",name:"shadow",label:"Box shadow",options:{type:"box-shadow"},value:{}},f={title:"Fields/Popup",component:y,tags:["autodocs"],argTypes:{type:{type:{name:"string",required:!0},name:"type",defaultValue:"popup",control:!1,table:{type:{summary:"string"},defaultValue:{summary:"popup"}}},name:{type:{name:"string",required:!0},name:"name",table:{type:{summary:"string"},defaultValue:{summary:null}}},value:{type:{name:"object",required:!1},name:"value",description:'Initial value: object of the child fields. With a preset options.type it is wrapped under that type key (e.g. { "box-shadow": {...} }); for dropdown mode it is the selected value.',table:{type:{summary:"object"},defaultValue:{summary:null}}},label:{type:{name:"string",required:!0},name:"label",description:"Label for the input.",table:{type:{summary:"string"},defaultValue:{summary:null}}},description:{type:{name:"string",required:!1},name:"description",description:"Additional hint text to display.",table:{type:{summary:"string"},defaultValue:{summary:null}}},options:{control:"object",description:'options.type: preset from constants/popup.ts (typography, box-shadow, text-shadow, filter, transform-origin, transform-advanced, border, outline, transitions, border-offset) or "dropdown". options.fields: custom child params when no preset is used. options.values: for type "dropdown", an object {value: title}, an array, or a preset key from constants/dropdown.ts. options.default: false hides the "Default" reset entry. options.global: { type } enables global style selection (colors, typography). options.icon_type: overrides the icon.'}},parameters:{docs:{description:{component:'Popup field shows a trigger that opens a floating panel with child fields (from a preset `options.type` or custom `options.fields`) or, with `options.type = "dropdown"`, a list of choices. Uses the Vuex store (global styles, settings) and the teleport target provided by StoryBook, so global-style features may not work standalone.'}}},args:{...o}},e={args:{...o}},t={args:{...o,label:"Spacing popup",name:"spacing",options:{fields:[{type:"text",name:"title",label:"Title"},{type:"number",name:"gap",label:"Gap",options:{units:{px:{min:0,max:100}}}}]},value:{}}},a={args:{...o,label:"Blend",name:"blend",options:{type:"dropdown",values:{multiply:"Multiply",screen:"Screen",overlay:"Overlay"}},value:"multiply"}};var n,s,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ...args
  }
  //\u{1F447} The \`args\` property on the default export determines the \`args\` in the story
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var p,l,i;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...args,
    label: 'Spacing popup',
    name: 'spacing',
    options: {
      fields: [{
        type: 'text',
        name: 'title',
        label: 'Title'
      }, {
        type: 'number',
        name: 'gap',
        label: 'Gap',
        options: {
          units: {
            px: {
              min: 0,
              max: 100
            }
          }
        }
      }]
    },
    value: {}
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...args,
    label: 'Blend',
    name: 'blend',
    options: {
      type: 'dropdown',
      values: {
        multiply: 'Multiply',
        screen: 'Screen',
        overlay: 'Overlay'
      }
    },
    value: 'multiply'
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const b=["Primary","CustomFields","PopupDropdown"];export{t as CustomFields,a as PopupDropdown,e as Primary,b as __namedExportsOrder,f as default};
//# sourceMappingURL=Popup.stories.cd20ae12.js.map
