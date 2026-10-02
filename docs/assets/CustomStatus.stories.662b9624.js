import{_ as d}from"./StoryBook.43c0e6fe.js";import"./vue.esm-bundler.b9dec9d9.js";const t={type:"custom_status",name:"status",label:"Status",options:{message:"Settings saved successfully.",variant:"success"}},f={title:"Fields/CustomStatus",component:d,tags:["autodocs"],argTypes:{type:{type:{name:"string",required:!0},name:"type",defaultValue:"custom_status",control:!1,table:{type:{summary:"string"},defaultValue:{summary:"custom_status"}}},name:{type:{name:"string",required:!0},name:"name",table:{type:{summary:"string"},defaultValue:{summary:null}}},value:{type:{name:"string",required:!1},name:"value",description:"Not used by this field; the message comes from options.message or fieldValues.",table:{type:{summary:"string"},defaultValue:{summary:null}}},label:{type:{name:"string",required:!0},name:"label",description:"Label for the input.",table:{type:{summary:"string"},defaultValue:{summary:null}}},description:{type:{name:"string",required:!1},name:"description",description:"Additional hint text to display.",table:{type:{summary:"string"},defaultValue:{summary:null}}},options:{control:"object",description:"message: static text. variant: success, error or info (otherwise error if fieldValues[errorKey] is set, else success). statusKey (default _qr_status) and errorKey (default _qr_status_error): keys read from fieldValues."}},parameters:{docs:{description:{component:"Read-only status box (success, error or info). Shows options.message, or else the text in fieldValues[statusKey]. Renders nothing without a message. The standalone wrapper passes no fieldValues, so only the static options.message form shows a box there; the dynamic form is driven by sibling field values."}}},args:{...t}},e={args:{...t}},s={args:{...t,options:{message:"Something went wrong. Please try again.",variant:"error"}}},a={args:{...t,options:{message:"Changes apply after you publish the page.",variant:"info"}}};var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    ...args
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var i,u,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...args,
    options: {
      message: 'Something went wrong. Please try again.',
      variant: 'error'
    }
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var l,p,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...args,
    options: {
      message: 'Changes apply after you publish the page.',
      variant: 'info'
    }
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const h=["Primary","ErrorStatus","InfoStatus"];export{s as ErrorStatus,a as InfoStatus,e as Primary,h as __namedExportsOrder,f as default};
//# sourceMappingURL=CustomStatus.stories.662b9624.js.map
