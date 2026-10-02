import{_ as i}from"./StoryBook.43c0e6fe.js";import"./vue.esm-bundler.b9dec9d9.js";const t={type:"toggle",name:"fields",label:"Open in new tab",options:{values:{on:{label:"ON",value:!0},off:{label:"OFF",value:!1}}},value:!1},c={title:"Fields/Toggle",component:i,tags:["autodocs"],argTypes:{type:{type:{name:"string",required:!0},name:"type",defaultValue:"toggle",control:!1,table:{type:{summary:"string"},defaultValue:{summary:"toggle"}}},name:{type:{name:"string",required:!0},name:"name",table:{type:{summary:"string"},defaultValue:{summary:null}}},value:{type:{name:"boolean",required:!1},name:"value",description:"Initial value. Must equal options.values.on.value or options.values.off.value to select that state.",table:{type:{summary:"boolean"},defaultValue:{summary:null}}},label:{type:{name:"string",required:!0},name:"label",description:"Label for the input.",table:{type:{summary:"string"},defaultValue:{summary:null}}},description:{type:{name:"string",required:!1},name:"description",description:"Additional hint text to display.",table:{type:{summary:"string"},defaultValue:{summary:null}}},options:{control:"object",description:"Custom parameters for the field. options.values.on / options.values.off are objects like { label, value }; the field emits the value of the active entry (falls back to false). options.default (boolean) is the state used when the incoming value matches neither entry."}},parameters:{docs:{description:{component:"A checkbox-style toggle (small square with a tick). Same data contract as Switch: options.values.on/off ({ label, value }) map the checked state to the stored value, and options.default is the fallback state."}}},args:{...t}},e={args:{...t}},a={args:{...t,label:"Lazy load",options:{values:{on:{label:"Lazy",value:"lazy"},off:{label:"Eager",value:"eager"}}},value:"lazy"}};var l,s,o;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...args
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var n,r,u;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ...args,
    label: 'Lazy load',
    options: {
      values: {
        on: {
          label: 'Lazy',
          value: 'lazy'
        },
        off: {
          label: 'Eager',
          value: 'eager'
        }
      }
    },
    value: 'lazy'
  }
}`,...(u=(r=a.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};const d=["Primary","CustomValues"];export{a as CustomValues,e as Primary,d as __namedExportsOrder,c as default};
//# sourceMappingURL=Toggle.stories.eaa12921.js.map
