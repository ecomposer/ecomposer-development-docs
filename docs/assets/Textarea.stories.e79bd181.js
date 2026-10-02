import{_ as b}from"./StoryBook.43c0e6fe.js";import"./vue.esm-bundler.b9dec9d9.js";const e={type:"textarea",name:"fields",label:"Description",options:{placeholder:"Type something...",height:120},value:""},v={title:"Fields/Textarea",component:b,tags:["autodocs"],argTypes:{type:{type:{name:"string",required:!0},name:"type",defaultValue:"textarea",control:!1,table:{type:{summary:"string"},defaultValue:{summary:"textarea"}}},name:{type:{name:"string",required:!0},name:"name",table:{type:{summary:"string"},defaultValue:{summary:null}}},value:{type:{name:"string",required:!1},name:"value",description:"Initial text. The empty-state marker '__empty__' is treated as an empty string.",table:{type:{summary:"string"},defaultValue:{summary:null}}},label:{type:{name:"string",required:!0},name:"label",description:"Label for the input.",table:{type:{summary:"string"},defaultValue:{summary:null}}},description:{type:{name:"string",required:!1},name:"description",description:"Additional hint text to display.",table:{type:{summary:"string"},defaultValue:{summary:null}}},options:{control:"object",description:"Custom parameters. placeholder (string) and height (number, px, default 100 min-height) apply to the plain textarea. update: 'onchange' emits only on blur/change instead of every keystroke. toolbar: 'short' | 'full' | true switches to the rich-text editor. editor: true together with language (e.g. 'css', 'html', 'javascript') switches to a CodeMirror code editor (height in px, default 150) with a popup for full-screen editing."}},parameters:{docs:{description:{component:"Multi-line text input. Three modes depending on options: plain textarea (default), rich-text editor when options.toolbar is 'short', 'full' or true, and a CodeMirror code editor when options.editor and options.language are both set (loaded lazily, with a full-screen popup that is teleported to body). The code editor mode and the rich-text mode depend on builder components and may look different from the real builder inside Storybook."}}},args:{...e}},t={args:{...e}},r={args:{...e,label:"Emit on blur only",options:{update:"onchange",placeholder:"Value is emitted when the field loses focus"},value:"Hello"}},a={args:{...e,label:"Custom CSS",options:{editor:!0,language:"css",height:200},value:`.selector {
  color: red;
}`}},o={args:{...e,label:"Rich text (short toolbar)",options:{toolbar:"short"},value:"<p>Hello <b>world</b></p>"}};var n,s,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ...args
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var i,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...args,
    label: 'Emit on blur only',
    options: {
      update: 'onchange',
      placeholder: 'Value is emitted when the field loses focus'
    },
    value: 'Hello'
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...args,
    label: 'Custom CSS',
    options: {
      editor: true,
      language: 'css',
      height: 200
    },
    value: '.selector {\\n  color: red;\\n}'
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var h,g,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...args,
    label: 'Rich text (short toolbar)',
    options: {
      toolbar: 'short'
    },
    value: '<p>Hello <b>world</b></p>'
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const w=["Primary","OnChangeUpdate","CodeEditor","RichText"];export{a as CodeEditor,r as OnChangeUpdate,t as Primary,o as RichText,w as __namedExportsOrder,v as default};
//# sourceMappingURL=Textarea.stories.e79bd181.js.map
