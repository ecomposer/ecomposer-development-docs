import{_ as m}from"./StoryBook.43c0e6fe.js";import"./vue.esm-bundler.b9dec9d9.js";const t={type:"preset_picker",name:"preset",label:"Style preset",options:{values:{default:"Default",tiles:"Tiles",midnight:"Midnight",contrast:"High contrast",soft:"Soft pill",minimal:"Minimal"}},value:"midnight"},p={title:"Fields/PresetPicker",component:m,tags:["autodocs"],argTypes:{type:{type:{name:"string",required:!0},name:"type",defaultValue:"preset_picker",control:!1,table:{type:{summary:"string"},defaultValue:{summary:"preset_picker"}}},name:{type:{name:"string",required:!0},name:"name",table:{type:{summary:"string"},defaultValue:{summary:null}}},value:{type:{name:"string",required:!1},name:"value",description:"Key of the selected preset. Empty, __delete__ or an unknown key falls back to field.value or field.default, then to the first card.",table:{type:{summary:"string"},defaultValue:{summary:null}}},label:{type:{name:"string",required:!0},name:"label",description:"Label for the input.",table:{type:{summary:"string"},defaultValue:{summary:null}}},description:{type:{name:"string",required:!1},name:"description",description:"Additional hint text to display.",table:{type:{summary:"string"},defaultValue:{summary:null}}},options:{control:"object",description:"values: the cards, as { key: label }, [{ value, label }] or an array of strings."}},parameters:{docs:{description:{component:"Grid of style preset cards (3 columns) with arrow-key navigation. Standalone friendly. Thumbnails have dedicated looks for the keys tiles, midnight, contrast, soft and minimal; other keys use the default look. Legacy keys dark and rounded are aliased to midnight and soft."}}},args:{...t}},e={args:{...t}},a={args:{...t,options:{values:[{value:"soft",label:"Soft pill"},{value:"minimal",label:"Minimal"},{value:"contrast",label:"High contrast"}]},value:"minimal"}};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    ...args
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var l,i,o;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...args,
    options: {
      values: [{
        value: 'soft',
        label: 'Soft pill'
      }, {
        value: 'minimal',
        label: 'Minimal'
      }, {
        value: 'contrast',
        label: 'High contrast'
      }]
    },
    value: 'minimal'
  }
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const c=["Primary","ArrayOptions"];export{a as ArrayOptions,e as Primary,c as __namedExportsOrder,p as default};
//# sourceMappingURL=PresetPicker.stories.36572eba.js.map
