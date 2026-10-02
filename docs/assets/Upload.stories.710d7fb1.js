import{_ as m}from"./StoryBook.43c0e6fe.js";import"./vue.esm-bundler.b9dec9d9.js";const t={type:"upload",name:"fields",label:"Import file",options:{accept:".json"}},d={title:"Fields/Upload",component:m,tags:["autodocs"],argTypes:{type:{type:{name:"string",required:!0},name:"type",defaultValue:"upload",control:!1,table:{type:{summary:"string"},defaultValue:{summary:"upload"}}},name:{type:{name:"string",required:!0},name:"name",table:{type:{summary:"string"},defaultValue:{summary:null}}},value:{type:{name:"object",required:!1},name:"value",description:"Not used: the field starts empty and emits the chosen File.",table:{type:{summary:"object"},defaultValue:{summary:null}}},label:{type:{name:"string",required:!0},name:"label",description:"Label for the input.",table:{type:{summary:"string"},defaultValue:{summary:null}}},description:{type:{name:"string",required:!1},name:"description",description:"Additional hint text to display.",table:{type:{summary:"string"},defaultValue:{summary:null}}},options:{control:"object",description:"Custom parameters. accept (string) is passed to the file input accept attribute, for example '.json' or 'image/*'."}},parameters:{docs:{description:{component:"File picker with drag and drop. Emits the selected File object (or null) through update:data; it does not read an incoming value, so the value arg is ignored. Only options.accept is read. The upload itself is not performed by the field (the parent handles the File), so nothing is sent anywhere in Storybook."}}},args:{...t}},e={args:{...t}},a={args:{...t,label:"Image upload",options:{accept:"image/*"}}};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    ...args
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var o,i,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...args,
    label: 'Image upload',
    options: {
      accept: 'image/*'
    }
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const c=["Primary","ImagesOnly"];export{a as ImagesOnly,e as Primary,c as __namedExportsOrder,d as default};
//# sourceMappingURL=Upload.stories.710d7fb1.js.map
