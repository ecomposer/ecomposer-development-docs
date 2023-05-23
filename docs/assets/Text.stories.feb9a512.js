import{_ as u}from"./StoryBook.190580d7.js";import"./vue.esm-bundler.2eae420a.js";const d={title:"Fields/Text",component:u,tags:["autodocs"],argTypes:{type:{type:{name:"string",required:!0},defaultValue:"Hello",name:"type",control:!1,table:{type:{summary:"string"},defaultValue:{summary:"text"}}},name:{type:{name:"string",required:!0},name:"name",table:{type:{summary:"string"},defaultValue:{summary:null}}},value:{type:{name:"string",required:!0},name:"value",description:"Initial value for the input.",table:{type:{summary:"string"},defaultValue:{summary:null}}},label:{type:{name:"string",required:!0},name:"label",description:"Label for the input.",table:{type:{summary:"string"},defaultValue:{summary:null}}},placeholder:{type:{name:"string",required:!0},name:"placeholder",description:"Hint text to display.",table:{type:{summary:"string"},defaultValue:{summary:null}}},description:{type:{name:"string",required:!1},name:"description",description:"Additional hint text to display.",table:{type:{summary:"string"},defaultValue:{summary:null}}},options:{control:"object",description:"Custom parameters for the field. For example, you can use this to set the visibility of the field based on the value of another field.",table:{type:{summary:"object"},defaultValue:{summary:null}}}},parameters:{docs:{description:{component:"A text field is an input field that merchants can type into. It has a range of options and supports several text formats including numbers."}}},args:{type:"text",name:"text",value:"yy",description:"Additional hint text to display.",placeholder:"Placeholder text"}},o={type:"text",name:"text",value:"hello",label:"Text field",description:"Additional hint text to display.",placeholder:"Placeholder text",options:{dynamic:!0,generator:!1,height:150,toolbar:!0}},e={args:o},t={args:{...o,options:{visible:{name:"text",value:"hello"}}}};var a,r,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{\n  args\n  //\u{1F447} The `args` property on the default export determines the `args` in the story\n}",...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const y=["Primary","Visible"];export{e as Primary,t as Visible,y as __namedExportsOrder,d as default};
//# sourceMappingURL=Text.stories.feb9a512.js.map