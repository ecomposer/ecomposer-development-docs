import{j as e}from"./jsx-runtime.4b694156.js";import{M as r}from"./index.a40bd58f.js";import{u as i}from"./index.4bdedcdb.js";import"./iframe.7dba7240.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.b8add541.js";import"./index.e850844b.js";import"./index.f1e20297.js";import"./index.ad7de49b.js";import"./index.67736049.js";function j(n={}){const{wrapper:s}=Object.assign({},i(),n.components);return s?e.exports.jsx(s,Object.assign({},n,{children:e.exports.jsx(o,{})})):o();function o(){const t=Object.assign({h1:"h1",p:"p",h3:"h3",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},i(),n.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(r,{title:"Theme Development"}),`
`,e.exports.jsx(t.h1,{id:"theme-development",children:"Theme Development"}),`
`,e.exports.jsx(t.p,{children:"EComposer is a powerful tool that allows users to create web pages easily and flexibly. One of its notable features is that it supports developers to build their own custom elements and integrate them into the application, enabling these elements to be used as built-in elements. This brings many benefits to developers, allowing them to create custom elements that fit the specific needs of the application and ensure the flexibility and uniqueness of the web pages created. With the ability to integrate custom elements, EComposer becomes an excellent tool to support web developers and make building professional and high-quality web pages easier than ever before."}),`
`,e.exports.jsx(t.h3,{id:"to-get-start-theme-development-must-have-coding-skills",children:"To get start theme development must have coding skills:"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"HTML + CSS + JS"}),`
`,e.exports.jsx(t.li,{children:"Vue"}),`
`,e.exports.jsx(t.li,{children:"Liquid"}),`
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
`,e.exports.jsxs("a",{hredf:"/elements.zip",target:"_blank",className:"inline-flex items-center gap-x-1.5 rounded-md bg-primary-600 px-2.5 py-1.5 text-sm font-semibold text-white  shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",children:[e.exports.jsx("span",{className:"text-white",children:"Download elements.zip"}),e.exports.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"-mr-0.5 h-5 w-5 text-white",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:e.exports.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})})]}),`
`,e.exports.jsx(t.h3,{id:"structure",children:"Structure"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"ecomposer.json"}),`
`,e.exports.jsx(t.li,{children:"MyComponent.ecom.liquid"}),`
`]}),`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.strong,{children:"elements.json"})}),`
`,e.exports.jsx(t.p,{children:"You can define all your elements will build in this file."}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-json",children:`{
    "author": "Kalles",
    "logo": "https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0332\\/6420\\/5963\\/files\\/kalles.svg",
    "website": "https:\\/\\/ecomposer.io?utm_source=ecomposer",
    "elements": {
      "MyComponent": {
        "types": [
          "home",
          "product",
          "page",
          "section",
          "quickview"
        ],
        "name": "my-ecomponent",
        "title": "My Component",
        "file": "MyComponent.ecom.liquid",
        "icon": "<svg xmlns=\\"http:\\/\\/www.w3.org\\/2000\\/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke=\\"currentColor\\"> <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\\" \\/> <\\/svg>",
        "category": [
          "theme"
        ],
        "data": {
          "title": "Test element",
          "settings": {
            "title": "Hello"
          }
        }
      },
      
    }
  }
`})}),`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.strong,{children:"MyComponent.ecom.liquid"})}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-html",children:`
<template>
    <div>
        <h3 v-html="data?.settings?.title"></h3>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus molestiae ea neque, a alias dicta beatae reprehenderit necessitatibus asperiores ipsa nesciunt optio qui tempore animi enim sint! Quos, placeat similique!
        </p>
        <h3 v-html="liquid('setting_title')"></h3>
        <component :is="'script'" class="ecomposer-data" type="application/json"  v-html="liquid('settings')" /> 
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
            }
        }
    },
    computed: {
        settings(){
            return [
                {
                    type: 'text',
                    name:'title',
                    label: 'title'
                }
            ]
        },
        liquids(){
            return {
                settings: {
                    code: \`{{shop.metafields.ecomposer.my-app.value | json}}\`,
                    preview:''
                },
                setting_title:{
                    code: \`{{shop.metafields.ecomposer.my-app.value.title}}\`,
                    preview: ''
                }
            }
        },
        javascript(){
            return function(){
                const $el = this.$el;
                const app_settings  = $el.querySelector('.ecomposer-data');
                console.log(app_settings.innerHTML);


            }
        }
    },
    mounted() {
        if(!this.data?.settings)
        {
            this.data.settings = {
                title: 'Ai cha cha'
            }
        }
    },
}
<\/script>

`})})]})}}export{j as default};
//# sourceMappingURL=ThemeDevelopment.a3f67aab.js.map
