import{_ as m}from"./StoryBook.43c0e6fe.js";import"./vue.esm-bundler.b9dec9d9.js";const a={type:"tab",name:"tab",label:"Tab",options:{tabs:[{name:"content",title:"Content"},{name:"style",title:"Style"},{name:"advanced",title:"Advanced"}]},value:"content"},p={title:"Fields/Tab",component:m,tags:["autodocs"],argTypes:{type:{type:{name:"string",required:!0},name:"type",defaultValue:"tab",control:!1,table:{type:{summary:"string"},defaultValue:{summary:"tab"}}},name:{type:{name:"string",required:!0},name:"name",table:{type:{summary:"string"},defaultValue:{summary:null}}},value:{type:{name:"string",required:!1},name:"value",description:"Name of the selected tab. If empty, the first tab is selected and emitted on mount.",table:{type:{summary:"string"},defaultValue:{summary:null}}},label:{type:{name:"string",required:!0},name:"label",description:"Label for the input.",table:{type:{summary:"string"},defaultValue:{summary:null}}},description:{type:{name:"string",required:!1},name:"description",description:"Additional hint text to display.",table:{type:{summary:"string"},defaultValue:{summary:null}}},options:{control:"object",description:"options.tabs: array of { name, title, icon?, class? }. When icon is set it is shown instead of the title, and the title becomes the tooltip."}},parameters:{docs:{description:{component:"Tab field renders a segmented tab switcher and stores the selected tab name as a string. It only draws the heading; showing or hiding other fields by tab is done by the parent through the stored value (for example with visible conditions). Child fields are not defined here."}}},args:{...a}},e={args:{...a}},t={args:{...a,options:{tabs:[{name:"content",title:"Content",icon:'<svg viewBox="0 0 20 20"><path d="M3 4h14v2H3zm0 5h14v2H3zm0 5h14v2H3z"/></svg>'},{name:"style",title:"Style",icon:'<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="7"/></svg>'}]}}};var s,n,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...args
  }
  //\u{1F447} The \`args\` property on the default export determines the \`args\` in the story
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var o,i,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...args,
    options: {
      tabs: [{
        name: 'content',
        title: 'Content',
        icon: '<svg viewBox="0 0 20 20"><path d="M3 4h14v2H3zm0 5h14v2H3zm0 5h14v2H3z"/></svg>'
      }, {
        name: 'style',
        title: 'Style',
        icon: '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="7"/></svg>'
      }]
    }
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const u=["Primary","Icons"];export{t as Icons,e as Primary,u as __namedExportsOrder,p as default};
//# sourceMappingURL=Tab.stories.0e40a829.js.map
