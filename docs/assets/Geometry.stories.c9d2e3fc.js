import{_ as c}from"./StoryBook.43c0e6fe.js";import"./vue.esm-bundler.b9dec9d9.js";const t={type:"geometry",name:"shape",label:"Shape",options:{line:!0,getNoneBtn:!1},value:{}},g={title:"Fields/Geometry",component:c,tags:["autodocs"],argTypes:{type:{type:{name:"string",required:!0},name:"type",defaultValue:"geometry",control:!1,table:{type:{summary:"string"},defaultValue:{summary:"geometry"}}},name:{type:{name:"string",required:!0},name:"name",table:{type:{summary:"string"},defaultValue:{summary:null}}},value:{type:{name:"object",required:!1},name:"value",description:"Selected shape: { name, type, url, shapeActive } for shapes and lines, or { nameShadow, urlShadow, cssShadow } for box-shadow.",table:{type:{summary:"object"},defaultValue:{summary:null}}},label:{type:{name:"string",required:!0},name:"label",description:"Label for the input.",table:{type:{summary:"string"},defaultValue:{summary:null}}},description:{type:{name:"string",required:!1},name:"description",description:"Additional hint text to display.",table:{type:{summary:"string"},defaultValue:{summary:null}}},options:{control:"object",description:"type: box-shadow shows the box-shadow list instead of shapes. line: false hides the line shapes. getNoneBtn: true adds the none shape to the list. The component always reads options, so keep it an object."}},parameters:{docs:{description:{component:"Shape picker used for section dividers (shapes and lines) and box shadows. Emits an object describing the chosen shape. Self-contained: the shape list is built into the component."}}},args:{...t}},e={args:{...t}},a={args:{...t,name:"shadow",label:"Box shadow",options:{type:"box-shadow"}}},s={args:{...t,options:{line:!1,getNoneBtn:!0}}};var o,n,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...args
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var i,l,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...args,
    name: 'shadow',
    label: 'Box shadow',
    options: {
      type: 'box-shadow'
    }
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,d,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...args,
    options: {
      line: false,
      getNoneBtn: true
    }
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const b=["Primary","BoxShadow","WithNoneButtonNoLines"];export{a as BoxShadow,e as Primary,s as WithNoneButtonNoLines,b as __namedExportsOrder,g as default};
//# sourceMappingURL=Geometry.stories.c9d2e3fc.js.map
