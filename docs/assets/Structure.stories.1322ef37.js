import{_ as l}from"./StoryBook.43c0e6fe.js";import"./vue.esm-bundler.b9dec9d9.js";const r={type:"structure",name:"structure",label:"Column structure",structure:[{width:50},{width:50}],options:{}},c={title:"Fields/Structure",component:l,tags:["autodocs"],argTypes:{type:{type:{name:"string",required:!0},name:"type",defaultValue:"structure",control:!1,table:{type:{summary:"string"},defaultValue:{summary:"structure"}}},name:{type:{name:"string",required:!0},name:"name",table:{type:{summary:"string"},defaultValue:{summary:null}}},value:{type:{name:"object",required:!1},name:"value",description:"Not used. The field reads and mutates field.structure (array of columns with width) instead of data.",table:{type:{summary:"object"},defaultValue:{summary:null}}},label:{type:{name:"string",required:!0},name:"label",description:"Label for the input.",table:{type:{summary:"string"},defaultValue:{summary:null}}},description:{type:{name:"string",required:!1},name:"description",description:"Additional hint text to display.",table:{type:{summary:"string"},defaultValue:{summary:null}}},structure:{type:{name:"array",required:!0},name:"structure",description:"Array of columns of the row, each { width } in percent. The preset list is chosen by the number of columns (2 to 5, otherwise equal widths). Supplied on the field itself, not in options.",table:{type:{summary:"array"},defaultValue:{summary:null}}},isFlexContainer:{type:{name:"boolean",required:!1},name:"isFlexContainer",description:'When true, widths are written to each column advanced["custom-width"] (or settings.width for flexContainer) instead of column.width. Requires field.data.settings.',table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},options:{control:"object",description:"Not read by this field. It works from field.structure and field.isFlexContainer."}},parameters:{docs:{description:{component:'Structure field shows preset column-width layouts for a row and an "Add column" button. It edits the row columns directly (field.structure) rather than a data value, and calls the editing element from the Vuex builder store plus window.EComposerBuilder, so it only partly works standalone: presets render and highlight, but add column and the resize event need the real builder.'}}},args:{...r}},e={args:{...r}},t={args:{...r,structure:[{width:33.33},{width:33.33},{width:33.33}]}};var a,s,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...args
  }
  //\u{1F447} The \`args\` property on the default export determines the \`args\` in the story
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var u,o,i;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...args,
    structure: [{
      width: 33.33
    }, {
      width: 33.33
    }, {
      width: 33.33
    }]
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const p=["Primary","ThreeColumns"];export{e as Primary,t as ThreeColumns,p as __namedExportsOrder,c as default};
//# sourceMappingURL=Structure.stories.1322ef37.js.map
