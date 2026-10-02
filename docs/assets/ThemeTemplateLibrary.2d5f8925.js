import{j as e}from"./jsx-runtime.d12bd5aa.js";import{M as n}from"./index.3eb81c2b.js";import{u as r}from"./index.49c47493.js";import"./iframe.048ad53f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.f037b798.js";import"./index.e850844b.js";import"./index.96d42533.js";import"./index.bd85bc98.js";import"./index.67736049.js";function o(t){const s=Object.assign({h1:"h1",p:"p",strong:"strong",ul:"ul",li:"li",h2:"h2",ol:"ol",code:"code",blockquote:"blockquote",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},r(),t.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(n,{title:"Theme Template Library"}),`
`,e.exports.jsx(s.h1,{id:"theme-template-library",children:"Theme Template Library"}),`
`,e.exports.jsx(s.p,{children:"Welcome to the EComposer development documentation!"}),`
`,e.exports.jsxs(s.p,{children:["EComposer lets theme developers build pages and sections visually, then ship them as a ",e.exports.jsx(s.strong,{children:"template library"})," inside their theme. Merchants who use your theme can pick these templates directly in the EComposer app."]}),`
`,e.exports.jsx(s.p,{children:"With a template library you can:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"Build polished, responsive pages and sections without advanced coding."}),`
`,e.exports.jsx(s.li,{children:"Update your library at any time, so your theme stays up to date."}),`
`,e.exports.jsx(s.li,{children:"Give merchants a ready-made starting point that matches your theme."}),`
`]}),`
`,e.exports.jsx(s.h2,{id:"5-steps-to-build-a-theme-library",children:"5 steps to build a theme library"}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsx(s.li,{children:"Install the EComposer app on your Shopify store."}),`
`,e.exports.jsx(s.li,{children:"Build your first page or section."}),`
`,e.exports.jsxs(s.li,{children:["Export it as a file (",e.exports.jsx(s.strong,{children:"Save as file"})," in the top bar)."]}),`
`,e.exports.jsxs(s.li,{children:["Create an ",e.exports.jsx(s.code,{children:"ecomposer.json"})," file in your theme's ",e.exports.jsx(s.strong,{children:"assets"})," folder (structure below)."]}),`
`,e.exports.jsxs(s.li,{children:["Upload your exported files to the same ",e.exports.jsx(s.strong,{children:"assets"})," folder."]}),`
`]}),`
`,e.exports.jsx(s.h2,{id:"set-up-your-theme",children:"Set up your theme"}),`
`,e.exports.jsxs(s.p,{children:["The Shopify theme code editor only allows certain file types in each folder, so library files go in the ",e.exports.jsx(s.strong,{children:"assets"})," folder."]}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["In your Shopify admin, go to ",e.exports.jsx(s.strong,{children:"Online Store"}),", click the three dots (",e.exports.jsx(s.strong,{children:"..."}),") and select ",e.exports.jsx(s.strong,{children:"Edit code"}),"."]}),`
`,e.exports.jsx("img",{src:"/theme-editor.png",alt:"Open the theme code editor"}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Expand the ",e.exports.jsx(s.strong,{children:"assets"})," folder and click ",e.exports.jsx(s.strong,{children:"Add a new asset"}),"."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsx(s.p,{children:"Extract the zip file below and upload all its files to your theme."}),`
`,e.exports.jsx("img",{src:"/upload-assets.png",alt:"Upload files to the assets folder"}),`
`]}),`
`]}),`
`,e.exports.jsxs("a",{href:"/library.zip",target:"_blank",className:"inline-flex items-center gap-x-1.5 rounded-md bg-primary-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",children:[e.exports.jsx("span",{className:"text-white",children:"Download library.zip"}),e.exports.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"-mr-0.5 h-5 w-5 text-white",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:e.exports.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})})]}),`
`,e.exports.jsxs(s.h2,{id:"ecomposerjson-structure",children:[e.exports.jsx(s.code,{children:"ecomposer.json"})," structure"]}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsx(s.p,{children:"The comments below are for explanation only. Remove them in your real file, because JSON does not allow comments."}),`
`]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-jsonc",children:`{
  "author": "Kalles",
  "logo": "https://cdn.shopify.com/s/files/1/0332/6420/5963/files/kalles.svg",
  "website": "https://your-site.com?utm_source=ecomposer",
  "library": {
    // Categories used to group pages and sections
    "categories": [
      { "id": "landing", "title": "Landing" },
      { "id": "home", "title": "Home" }
    ],

    "pages": [
      {
        "title": "The first page",
        // File name in the assets folder, or a full URL
        // e.g. "https://domain.com/folder/CqpElqxn3v.jpg"
        "thumbnail": "CqpElqxn3v.jpg",
        "categories": ["home"],
        // Your file exported from EComposer, uploaded to the assets folder
        // You can also use a full URL
        // e.g. "https://domain.com/folder/MyTemplate.ecom"
        "source": "MyTemplate.ecom"
      }
      // ...more pages
    ],

    "sections": [
      {
        "title": "The first section",
        "thumbnail": "https://dev.ecompoer.app/storage/elements-public/posts/pages/thumbnails/1011/2021/11/17/CqpElqxn3v.jpg",
        "categories": ["landing", "home"],
        // Your file exported from EComposer, uploaded to the assets folder
        // You can also use a full URL
        // e.g. "https://domain.com/folder/MySection.ecom"
        "source": "MySection.ecom"
      }
      // ...more sections
    ]
  }
}
`})}),`
`,e.exports.jsx(s.h3,{id:"fields",children:"Fields"}),`
`,e.exports.jsxs(s.table,{children:[e.exports.jsx(s.thead,{children:e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.th,{children:"Field"}),e.exports.jsx(s.th,{children:"Description"})]})}),e.exports.jsxs(s.tbody,{children:[e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"author"})}),e.exports.jsx(s.td,{children:"Your name or brand name."})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"logo"})}),e.exports.jsx(s.td,{children:"URL of your logo."})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"website"})}),e.exports.jsx(s.td,{children:"URL of your website."})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"categories"})}),e.exports.jsxs(s.td,{children:["List of categories (",e.exports.jsx(s.code,{children:"id"})," + ",e.exports.jsx(s.code,{children:"title"}),"). Pages and sections refer to the ",e.exports.jsx(s.code,{children:"id"}),"."]})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"title"})}),e.exports.jsx(s.td,{children:"Name of the page or section."})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"thumbnail"})}),e.exports.jsx(s.td,{children:"Preview image. Use a file name in the assets folder or a full URL."})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"source"})}),e.exports.jsxs(s.td,{children:["The ",e.exports.jsx(s.code,{children:".ecom"})," file you exported. Use a file name in the assets folder or a URL."]})]})]})]})]})}function u(t={}){const{wrapper:s}=Object.assign({},r(),t.components);return s?e.exports.jsx(s,Object.assign({},t,{children:e.exports.jsx(o,t)})):o(t)}export{u as default};
//# sourceMappingURL=ThemeTemplateLibrary.2d5f8925.js.map
