import{_ as O}from"./StoryBook.43c0e6fe.js";import"./vue.esm-bundler.b9dec9d9.js";const e={type:"custom_button",name:"run_action",label:"Action",options:{text:"Run action",variant:"primary",outline:!1,disabled:!1,loading:!1}},w={title:"Fields/CustomButton",component:O,tags:["autodocs"],argTypes:{type:{type:{name:"string",required:!0},name:"type",defaultValue:"custom_button",control:!1,table:{type:{summary:"string"},defaultValue:{summary:"custom_button"}}},name:{type:{name:"string",required:!0},name:"name",table:{type:{summary:"string"},defaultValue:{summary:null}}},value:{type:{name:"string",required:!1},name:"value",description:"Not used by this field (a button has no value).",table:{type:{summary:"string"},defaultValue:{summary:null}}},label:{type:{name:"string",required:!0},name:"label",description:"Label for the input.",table:{type:{summary:"string"},defaultValue:{summary:null}}},description:{type:{name:"string",required:!1},name:"description",description:"Additional hint text to display.",table:{type:{summary:"string"},defaultValue:{summary:null}}},options:{control:"object",description:"text (string or fn, default Button), variant (default primary), outline, disabled (bool or fn), loading (bool or fn, shows a spinner), icon, tone, accessibilityLabel, class (extra classes on the button), wrapperClass (string or fn)."}},parameters:{docs:{description:{component:"Action button inside the settings panel. Emits update:clicked with the field name on click, so a parent must listen to it (clicking does nothing in the standalone wrapper). Options text, disabled, loading and wrapperClass may be functions of fieldValues; the wrapper passes no fieldValues, so they receive an empty object."}}},args:{...e}},t={args:{...e}},a={args:{...e,options:{text:"Outline button",variant:"secondary",outline:!0}}},n={args:{...e,options:{text:"Working...",loading:!0}}},s={args:{...e,options:{text:"Not available",disabled:!0}}},r={args:{...e,options:{text:_=>"Fields: "+Object.keys(_||{}).length}}};var o,i,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...args
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...args,
    options: {
      text: 'Outline button',
      variant: 'secondary',
      outline: true
    }
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...args,
    options: {
      text: 'Working...',
      loading: true
    }
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,b,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...args,
    options: {
      text: 'Not available',
      disabled: true
    }
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,h,v;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...args,
    options: {
      text: (values: any) => 'Fields: ' + Object.keys(values || {}).length
    }
  }
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const q=["Primary","Outline","Loading","Disabled","DynamicText"];export{s as Disabled,r as DynamicText,n as Loading,a as Outline,t as Primary,q as __namedExportsOrder,w as default};
//# sourceMappingURL=CustomButton.stories.75ebbe69.js.map
