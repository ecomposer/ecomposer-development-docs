import{_ as b}from"./StoryBook.43c0e6fe.js";import"./vue.esm-bundler.b9dec9d9.js";const r={type:"editor",name:"fields",label:"Content",options:{toolbar:"full",height:150},value:"<p>Hello <b>world</b></p>"},g={title:"Fields/Editor",component:b,tags:["autodocs"],argTypes:{type:{type:{name:"string",required:!0},name:"type",defaultValue:"editor",control:!1,table:{type:{summary:"string"},defaultValue:{summary:"editor"}}},name:{type:{name:"string",required:!0},name:"name",table:{type:{summary:"string"},defaultValue:{summary:null}}},value:{type:{name:"string",required:!1},name:"value",description:"Initial HTML content.",table:{type:{summary:"string"},defaultValue:{summary:null}}},label:{type:{name:"string",required:!0},name:"label",description:"Label for the input.",table:{type:{summary:"string"},defaultValue:{summary:null}}},description:{type:{name:"string",required:!1},name:"description",description:"Additional hint text to display.",table:{type:{summary:"string"},defaultValue:{summary:null}}},options:{control:"object",description:"Custom parameters. toolbar: false hides the toolbar toggle, 'short' | 'full' keeps the toolbar always visible. initHidden: true starts with the toolbar hidden (only with an always-visible toolbar). height: min height of the editing area. dynamic: enables inserting dynamic sources (needs builder store data). generator: enables the AI text generator (needs the AI API). autop: auto-wrap lines in paragraphs."},placeholder:{type:{name:"string",required:!1},name:"placeholder",description:"Placeholder HTML shown while the editor is empty (read from the field itself, not options).",table:{type:{summary:"string"},defaultValue:{summary:null}}}},parameters:{docs:{description:{component:"Rich text (WYSIWYG) editor rendered in an iframe, with a toolbar toggle. The value is an HTML string. Options dynamic and generator rely on builder store/API data and will not work standalone in Storybook; the plain editor with a toolbar works. The field-level (not options) placeholder key is shown when the editor is empty."}}},args:{...r}},e={args:{...r}},a={args:{...r,label:"Short toolbar",options:{toolbar:"short",height:100},value:"<p>Short toolbar</p>"}},t={args:{...r,label:"No toolbar",options:{toolbar:!1},value:"<p>Toolbar disabled</p>"}};var o,s,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...args
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var n,i,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ...args,
    label: 'Short toolbar',
    options: {
      toolbar: 'short',
      height: 100
    },
    value: '<p>Short toolbar</p>'
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...args,
    label: 'No toolbar',
    options: {
      toolbar: false
    },
    value: '<p>Toolbar disabled</p>'
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const y=["Primary","ShortToolbar","NoToolbar"];export{t as NoToolbar,e as Primary,a as ShortToolbar,y as __namedExportsOrder,g as default};
//# sourceMappingURL=Editor.stories.088adc21.js.map
