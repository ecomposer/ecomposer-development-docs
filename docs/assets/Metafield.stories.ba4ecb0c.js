import{_ as d}from"./StoryBook.43c0e6fe.js";import"./vue.esm-bundler.b9dec9d9.js";const a={type:"metafield",name:"metafield",label:"Metafield",options:{owner:"product"},value:{namespace:"custom",key:"material",type:"single_line_text_field",name:"Material"}},p={title:"Fields/Metafield",component:d,tags:["autodocs"],argTypes:{type:{type:{name:"string",required:!0},name:"type",defaultValue:"metafield",control:!1,table:{type:{summary:"string"},defaultValue:{summary:"metafield"}}},name:{type:{name:"string",required:!0},name:"name",table:{type:{summary:"string"},defaultValue:{summary:null}}},value:{type:{name:"object",required:!1},name:"value",description:"Selected definition: { namespace, key, type, name }. Emitted on select; unsupported types are disabled.",table:{type:{summary:"object"},defaultValue:{summary:null}}},label:{type:{name:"string",required:!0},name:"label",description:"Label for the input.",table:{type:{summary:"string"},defaultValue:{summary:null}}},description:{type:{name:"string",required:!1},name:"description",description:"Additional hint text to display.",table:{type:{summary:"string"},defaultValue:{summary:null}}},options:{control:"object",description:"options.owner: Shopify owner type (e.g. product) used to load definitions for that owner. When empty, all loaded metafield definitions are listed."}},parameters:{docs:{description:{component:'Metafield field lists the store metafield definitions grouped by namespace, with a search box when there are more than 8, and lets the merchant pick one. Definitions come from the Vuex module dynamicSources (loaded from the backend API), so standalone in Storybook it will show the loading state or the "no metafield definition found" notice unless the store is provided.'}}},args:{...a}},e={args:{...a}},t={args:{...a,options:{},value:null}};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    ...args
  }
  //\u{1F447} The \`args\` property on the default export determines the \`args\` in the story
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var o,i,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...args,
    options: {},
    value: null
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const c=["Primary","AllOwners"];export{t as AllOwners,e as Primary,c as __namedExportsOrder,p as default};
//# sourceMappingURL=Metafield.stories.ba4ecb0c.js.map
