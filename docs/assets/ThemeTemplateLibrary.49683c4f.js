import{j as e}from"./jsx-runtime.d0e00008.js";import{M as i}from"./index.5ab169ae.js";import{u as r}from"./index.9e932e01.js";import"./iframe.c56a2ddc.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.b8add541.js";import"./index.e850844b.js";import"./index.f1e20297.js";import"./index.ad7de49b.js";import"./index.67736049.js";function g(o={}){const{wrapper:s}=Object.assign({},r(),o.components);return s?e.exports.jsx(s,Object.assign({},o,{children:e.exports.jsx(n,{})})):n();function n(){const t=Object.assign({h1:"h1",p:"p",h3:"h3",ul:"ul",li:"li",pre:"pre",code:"code"},r(),o.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(i,{title:"Theme Template Library"}),`
`,e.exports.jsx(t.h1,{id:"welcome-to-ecomposer-development-documentation",children:"Welcome to EComposer development documentation!"}),`
`,e.exports.jsx(t.p,{children:"EComposer is a versatile tool that supports developers to create and manage web pages easily. Another noteworthy feature of EComposer is that it also supports theme developers to use EComposer as a platform to build interfaces and construct a library of user interface components for their themes, which can then be run on the EComposer app."}),`
`,e.exports.jsx(t.p,{children:"This is a significant benefit for theme developers, as it enables them to leverage the power and flexibility of EComposer to build high-quality, customizable interfaces for their themes. With EComposer, theme developers can create visually stunning and responsive interfaces quickly, without needing advanced coding skills. They can also easily manage and update their component library, ensuring that their themes stay up-to-date and relevant in a fast-moving digital landscape."}),`
`,e.exports.jsx(t.p,{children:"Overall, EComposer is an excellent choice for theme developers who want to create exceptional interfaces that provide a seamless user experience. Its flexibility, scalability, and ease-of-use make it a valuable asset in the development of modern, high-quality themes."}),`
`,e.exports.jsx(t.h3,{id:"5-step-to-build-a-theme-library",children:"5 step to build a theme library"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"Install Ecomposer app on Shopify store"}),`
`,e.exports.jsx(t.li,{children:"Start build the first page or section"}),`
`,e.exports.jsx(t.li,{children:"Export your page or section as file ( Save as file at top bar)"}),`
`,e.exports.jsx(t.li,{children:"Create ecomposer.json in assets folder in theme with structure below"}),`
`,e.exports.jsx(t.li,{children:"Upload your export files to assets folder"}),`
`]}),`
`,e.exports.jsx(t.h3,{id:"what-you-need",children:"What you need?"}),`
`,e.exports.jsx(t.p,{children:"Due to Theme code editor only allow to create specific types of file for each Directory from Shopify dashboard"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:["Go to Shopify admin / Online store / Click on three dots and select Edit code",`
`,e.exports.jsx("img",{src:"/theme-editor.png"}),`
`]}),`
`]}),`
`,e.exports.jsx("p",{}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"Click to expand the assets folder and click on Add a new Asset"}),`
`,e.exports.jsxs(t.li,{children:["Extrass the zip file below and upload all the files to your theme",`
`,e.exports.jsx("img",{src:"/upload-assets.png"}),`
`]}),`
`]}),`
`,e.exports.jsxs("a",{hredf:"/library.zip",target:"_blank",className:"inline-flex items-center gap-x-1.5 rounded-md bg-primary-600 px-2.5 py-1.5 text-sm font-semibold text-white  shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",children:[e.exports.jsx("span",{className:"text-white",children:"Download library.zip"}),e.exports.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"-mr-0.5 h-5 w-5 text-white",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:e.exports.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})})]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-json",children:`
{
  "author": "Kalles",
  "logo": "https://cdn.shopify.com/s/files/1/0332/6420/5963/files/kalles.svg",
  "website": "https://your-site.com?utm_source=ecomposer",
  "library": {
    "categories": [
        {
          "id": "landing",
          "title": "Landing"
        },
        {
          "id": "home",
          "title": "Home"
        }
    ],

    "pages": [
      {
        "title": "The first page",
        "thumbnail": "CqpElqxn3v.jpg",
        //You also add the link. Eg: "thumbnail": "https://domain.com/folder/CqpElqxn3v.jpg",
        "categories": [
          "home"
        ]
        "source": "MyTemplate.ecom" 
        // Your export file from ecomposer Page Builder
        //Add your export file to assets folder
        // You also can add the link instead. Eg: "source": "https://domain.com/folder/MyTemplate.ecom"
      
      },
      ...// More pages below
    ],
    "sections": [
      {
        "title": "The first section",
        "thumbnail": "https://dev.ecompoer.app/storage/elements-public/posts/pages/thumbnails/1011/2021/11/17/CqpElqxn3v.jpg",
        "source": "MySection.ecom",
         // Your export file from EComposer Page Builder
         //Add your export file to assets folder
         // You also can add the link instead. Eg: "source": "https://domain.com/folder/MySection.ecom"
        
        "categories": [
          "landing",
          "home"
        ]
      },
      ... //More sections below
    ]
  }
}


`})})]})}}export{g as default};
//# sourceMappingURL=ThemeTemplateLibrary.49683c4f.js.map
