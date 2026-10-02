import{_ as f}from"./StoryBook.43c0e6fe.js";import"./vue.esm-bundler.b9dec9d9.js";const l={type:"switch",name:"fields",label:"Enable autoplay",options:{values:{on:{label:"ON",value:!0},off:{label:"OFF",value:!1}}},value:!0},b={title:"Fields/Switch",component:f,tags:["autodocs"],argTypes:{type:{type:{name:"string",required:!0},name:"type",defaultValue:"switch",control:!1,table:{type:{summary:"string"},defaultValue:{summary:"switch"}}},name:{type:{name:"string",required:!0},name:"name",table:{type:{summary:"string"},defaultValue:{summary:null}}},value:{type:{name:"boolean",required:!1},name:"value",description:"Initial value. Must equal options.values.on.value or options.values.off.value to select that state.",table:{type:{summary:"boolean"},defaultValue:{summary:null}}},label:{type:{name:"string",required:!0},name:"label",description:"Label for the input.",table:{type:{summary:"string"},defaultValue:{summary:null}}},description:{type:{name:"string",required:!1},name:"description",description:"Additional hint text to display.",table:{type:{summary:"string"},defaultValue:{summary:null}}},options:{control:"object",description:"Custom parameters for the field. options.values.on / options.values.off are objects like { label, value }; the field emits the value of the active entry (falls back to false). options.default (boolean) is the state used when the incoming value matches neither entry."}},parameters:{docs:{description:{component:"A switch (pill-shaped on/off control). Reads options.values.on/off ({ label, value }) to map the state to the stored value, and options.default for the fallback state. The incoming value is matched against the values of the on/off entries to decide the initial state."}}},args:{...l}},e={args:{...l}},a={args:{...l,label:"Image fit",options:{values:{on:{label:"Cover",value:"cover"},off:{label:"Contain",value:"contain"}}},value:"cover"}},t={args:{...l,label:"Unmatched value falls back to options.default",options:{default:!0,values:{on:{label:"ON",value:"yes"},off:{label:"OFF",value:"no"}}},value:""}};var n,s,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ...args
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var r,u,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    ...args,
    label: 'Image fit',
    options: {
      values: {
        on: {
          label: 'Cover',
          value: 'cover'
        },
        off: {
          label: 'Contain',
          value: 'contain'
        }
      }
    },
    value: 'cover'
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var m,c,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...args,
    label: 'Unmatched value falls back to options.default',
    options: {
      default: true,
      values: {
        on: {
          label: 'ON',
          value: 'yes'
        },
        off: {
          label: 'OFF',
          value: 'no'
        }
      }
    },
    value: ''
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const y=["Primary","CustomValues","DefaultOn"];export{a as CustomValues,t as DefaultOn,e as Primary,y as __namedExportsOrder,b as default};
//# sourceMappingURL=Switch.stories.b278ac89.js.map
