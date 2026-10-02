import{j as e}from"./jsx-runtime.d12bd5aa.js";import{M as o}from"./index.3eb81c2b.js";import{u as r}from"./index.49c47493.js";import"./iframe.048ad53f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.f037b798.js";import"./index.e850844b.js";import"./index.96d42533.js";import"./index.bd85bc98.js";import"./index.67736049.js";function n(s){const t=Object.assign({h1:"h1",p:"p",strong:"strong",ul:"ul",li:"li",h2:"h2",ol:"ol",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",pre:"pre",h3:"h3"},r(),s.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(o,{title:"Theme Development"}),`
`,e.exports.jsx(t.h1,{id:"theme-development",children:"Theme Development"}),`
`,e.exports.jsxs(t.p,{children:["EComposer lets you build web pages quickly and flexibly. It also lets developers create ",e.exports.jsx(t.strong,{children:"custom elements"})," and plug them into the builder, where they work just like the built-in elements."]}),`
`,e.exports.jsx(t.p,{children:"With custom elements you can:"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"Build elements that fit the exact needs of your theme or store."}),`
`,e.exports.jsx(t.li,{children:"Keep your pages unique and consistent with your brand."}),`
`,e.exports.jsx(t.li,{children:"Ship your elements together with your theme."}),`
`]}),`
`,e.exports.jsx(t.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,e.exports.jsx(t.p,{children:"To develop custom elements, you need basic knowledge of:"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"HTML, CSS and JavaScript"}),`
`,e.exports.jsx(t.li,{children:"Vue"}),`
`,e.exports.jsx(t.li,{children:"Liquid"}),`
`]}),`
`,e.exports.jsx(t.h2,{id:"set-up-your-theme",children:"Set up your theme"}),`
`,e.exports.jsxs(t.p,{children:["The Shopify theme code editor only allows certain file types in each folder, so custom element files go in the ",e.exports.jsx(t.strong,{children:"assets"})," folder."]}),`
`,e.exports.jsxs(t.ol,{children:[`
`,e.exports.jsxs(t.li,{children:[`
`,e.exports.jsxs(t.p,{children:["In your Shopify admin, go to ",e.exports.jsx(t.strong,{children:"Online Store"}),", click the three dots (",e.exports.jsx(t.strong,{children:"..."}),") and select ",e.exports.jsx(t.strong,{children:"Edit code"}),"."]}),`
`,e.exports.jsx("img",{src:"/theme-editor.png",alt:"Open the theme code editor"}),`
`]}),`
`,e.exports.jsxs(t.li,{children:[`
`,e.exports.jsxs(t.p,{children:["Expand the ",e.exports.jsx(t.strong,{children:"assets"})," folder and click ",e.exports.jsx(t.strong,{children:"Add a new asset"}),"."]}),`
`]}),`
`,e.exports.jsxs(t.li,{children:[`
`,e.exports.jsx(t.p,{children:"Extract the zip file below and upload all its files to your theme."}),`
`,e.exports.jsx("img",{src:"/upload-assets.png",alt:"Upload files to the assets folder"}),`
`]}),`
`]}),`
`,e.exports.jsxs("a",{href:"/elements.zip",target:"_blank",className:"inline-flex items-center gap-x-1.5 rounded-md bg-primary-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",children:[e.exports.jsx("span",{className:"text-white",children:"Download elements.zip"}),e.exports.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"-mr-0.5 h-5 w-5 text-white",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:e.exports.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})})]}),`
`,e.exports.jsx(t.h2,{id:"file-structure",children:"File structure"}),`
`,e.exports.jsxs(t.p,{children:["A custom element needs two files in your theme's ",e.exports.jsx(t.strong,{children:"assets"})," folder:"]}),`
`,e.exports.jsxs(t.table,{children:[e.exports.jsx(t.thead,{children:e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.th,{children:"File"}),e.exports.jsx(t.th,{children:"Purpose"})]})}),e.exports.jsxs(t.tbody,{children:[e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"ecomposer.json"})}),e.exports.jsx(t.td,{children:"Lists all the elements you have built."})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"MyComponent.ecom.liquid"})}),e.exports.jsx(t.td,{children:"The code of one element (template + script)."})]})]})]}),`
`,e.exports.jsxs(t.h2,{id:"1-register-elements-ecomposerjson",children:["1. Register elements: ",e.exports.jsx(t.code,{children:"ecomposer.json"})]}),`
`,e.exports.jsx(t.p,{children:"Define every element you build in this file."}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-json",children:`{
  "author": "Kalles",
  "logo": "https://cdn.shopify.com/s/files/1/0332/6420/5963/files/kalles.svg",
  "website": "https://ecomposer.io?utm_source=ecomposer",
  "elements": {
    "MyComponent": {
      "types": ["home", "product", "page", "section", "quickview"],
      "name": "my-ecomponent",
      "title": "My Component",
      "file": "MyComponent.ecom.liquid",
      "icon": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke=\\"currentColor\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\\" /></svg>",
      "category": ["theme"],
      "data": {
        "title": "Test element",
        "settings": {
          "title": "Hello"
        }
      }
    }
  }
}
`})}),`
`,e.exports.jsx(t.h3,{id:"element-fields",children:"Element fields"}),`
`,e.exports.jsxs(t.table,{children:[e.exports.jsx(t.thead,{children:e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.th,{children:"Field"}),e.exports.jsx(t.th,{children:"Description"})]})}),e.exports.jsxs(t.tbody,{children:[e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"author"})}),e.exports.jsx(t.td,{children:"Your name or brand name."})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"logo"})}),e.exports.jsx(t.td,{children:"URL of your logo."})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"website"})}),e.exports.jsx(t.td,{children:"URL of your website."})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"types"})}),e.exports.jsxs(t.td,{children:["Page types where the element is available (",e.exports.jsx(t.code,{children:"home"}),", ",e.exports.jsx(t.code,{children:"product"}),", ",e.exports.jsx(t.code,{children:"page"}),", ...)."]})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"name"})}),e.exports.jsx(t.td,{children:"Unique element name (lowercase, no spaces)."})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"title"})}),e.exports.jsx(t.td,{children:"Name shown in the builder."})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"file"})}),e.exports.jsx(t.td,{children:"The element file in the assets folder."})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"icon"})}),e.exports.jsx(t.td,{children:"SVG icon shown in the builder."})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"category"})}),e.exports.jsx(t.td,{children:"Group of the element in the builder."})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"data"})}),e.exports.jsx(t.td,{children:"Default content and settings used when the element is added to a page."})]})]})]}),`
`,e.exports.jsxs(t.h2,{id:"2-write-the-element-mycomponentecomliquid",children:["2. Write the element: ",e.exports.jsx(t.code,{children:"MyComponent.ecom.liquid"})]}),`
`,e.exports.jsxs(t.p,{children:["An element file has two parts: a Vue ",e.exports.jsx(t.code,{children:"<template>"})," for the markup and a ",e.exports.jsx(t.code,{children:"<script>"})," for the logic."]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-html",children:`<template>
  <div>
    <h3 v-html="data?.settings?.title"></h3>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus molestiae
      ea neque, a alias dicta beatae reprehenderit necessitatibus asperiores
      ipsa nesciunt optio qui tempore animi enim sint! Quos, placeat similique!
    </p>
    <h3 v-html="liquid('setting_title')"></h3>
    <component
      :is="'script'"
      class="ecomposer-data"
      type="application/json"
      v-html="liquid('settings')"
    />
  </div>
</template>

<script>
export default {
  name: "My app",
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    // Fields shown in the element settings panel
    settings() {
      return [
        {
          type: "text",
          name: "title",
          label: "Title",
        },
      ];
    },
    // Liquid code that runs on the storefront
    liquids() {
      return {
        settings: {
          code: \`{{shop.metafields.ecomposer.my-app.value | json}}\`,
          preview: "",
        },
        setting_title: {
          code: \`{{shop.metafields.ecomposer.my-app.value.title}}\`,
          preview: "",
        },
      };
    },
    // JavaScript that runs on the storefront
    javascript() {
      return function () {
        const $el = this.$el;
        const app_settings = $el.querySelector(".ecomposer-data");
        console.log(app_settings.innerHTML);
      };
    },
  },
  mounted() {
    // Set default settings when the element is added
    if (!this.data?.settings) {
      this.data.settings = {
        title: "Hello",
      };
    }
  },
};
<\/script>
`})}),`
`,e.exports.jsx(t.h3,{id:"what-each-part-does",children:"What each part does"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:e.exports.jsx(t.code,{children:"props.data"})}),": the element's saved content and settings."]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:e.exports.jsx(t.code,{children:"computed.settings"})}),": the list of fields merchants can edit in the builder."]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:e.exports.jsx(t.code,{children:"computed.liquids"})}),": Liquid snippets rendered by Shopify. Read the result in the template with ",e.exports.jsx(t.code,{children:"liquid('key')"}),". Use ",e.exports.jsx(t.code,{children:"preview"})," for the text shown inside the builder."]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:e.exports.jsx(t.code,{children:"computed.javascript"})}),": a function that runs on the storefront. Use ",e.exports.jsx(t.code,{children:"this.$el"})," to access the element's root node."]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:e.exports.jsx(t.code,{children:"mounted"})}),": runs when the element loads. Use it to set default values."]}),`
`]})]})}function u(s={}){const{wrapper:t}=Object.assign({},r(),s.components);return t?e.exports.jsx(t,Object.assign({},s,{children:e.exports.jsx(n,s)})):n(s)}export{u as default};
//# sourceMappingURL=ThemeDevelopment.55bd5ed6.js.map
