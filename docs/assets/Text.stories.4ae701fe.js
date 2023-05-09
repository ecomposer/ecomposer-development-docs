import{_ as p}from"./StoryBook.a045e444.js";import"./vue.esm-bundler.7f444806.js";const m={title:"Fields/Text",component:p,tags:["autodocs"],argTypes:{type:{type:{name:"string",required:!0},defaultValue:"Hello",name:"type",control:!1},name:{type:{name:"string",required:!0},name:"name"},value:{type:{name:"string",required:!0},name:"value",description:"Initial value for the input."},label:{type:{name:"string",required:!0},name:"label",description:"Label for the input."},placeholder:{type:{name:"string",required:!0},name:"placeholder",description:"Hint text to display."},description:{type:{name:"string",required:!1},name:"description",description:"Additional hint text to display."},options:{control:"object",description:"Custom parameters for the field. For example, you can use this to set the visibility of the field based on the value of another field."}},parameters:{docs:{description:{component:"A text field is an input field that merchants can type into. It has a range of options and supports several text formats including numbers."}}},args:{type:"text",name:"text",value:"yy",description:"Additional hint text to display.",placeholder:"Placeholder text"}},l={type:"text",name:"text",value:"hello",label:"Text field",description:"Additional hint text to display.",placeholder:"Placeholder text",options:{dynamic:!0,generator:!1,height:150,toolbar:!0}},e={args:l},t={args:{...l,options:{visible:{name:"text",value:"hello"}}}};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"{\n  args\n  //\u{1F447} The `args` property on the default export determines the `args` in the story\n}",...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var o,i,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...args,
    options: {
      visible: {
        name: 'text',
        value: 'hello'
      }
    }
  }
  //\u{1F447} The \`args\` property on the default export determines the \`args\` in the story
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const u=["Primary","Visible"];export{e as Primary,t as Visible,u as __namedExportsOrder,m as default};
//# sourceMappingURL=Text.stories.4ae701fe.js.map
