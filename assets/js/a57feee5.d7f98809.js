"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82838],{47778:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var a=s(74848),i=s(28453);const n='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="pageF6AD2626519414E0"><span>enum class task_type</span></a></li></ul></nav>\n<main><h1>enum class task_type</h1><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/types.h#L180">include/types.h:180</a></p><h2>Enumerators</h2><table class="table is-narrow is-hoverable"><tr><th>Name</th><th>Value</th><th>Comment</th></tr><tr><td class="is-family-code">epoch</td><td class="is-family-code">0</td><td>task epoch (graph-level serialization point)</td></tr><tr><td class="is-family-code">host_compute</td><td class="is-family-code">1</td><td>host task with explicit global size and celerity-defined split</td></tr><tr><td class="is-family-code">device_compute</td><td class="is-family-code">2</td><td>device compute task</td></tr><tr><td class="is-family-code">collective</td><td class="is-family-code">3</td><td>host task with implicit 1d global size = #ranks and fixed split</td></tr><tr><td class="is-family-code">master_node</td><td class="is-family-code">4</td><td>zero-dimensional host task</td></tr><tr><td class="is-family-code">horizon</td><td class="is-family-code">5</td><td>task horizon</td></tr><tr><td class="is-family-code">fence</td><td class="is-family-code">6</td><td>promise-side of an async experimental::fence</td></tr></table></main>',l={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"enum class task_type"},c=void 0,d={id:"api/enums/F6AD2626519414E0",title:"enum class task_type",description:"",source:"@site/celerity-runtime/docs/api/enums/F6AD2626519414E0.mdx",sourceDirName:"api/enums",slug:"/api/enums/F6AD2626519414E0",permalink:"/docs/api/enums/F6AD2626519414E0",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"enum class task_type"},sidebar:"api"},r={},o=[];function p(t){const{Head:e}={...(0,i.R)(),...t.components};return e||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e,{children:[(0,a.jsx)("script",{src:"/js/highlight.min.js"}),(0,a.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})]})}function m(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(p,{...t})}):p(t)}},28453:(t,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var a=s(96540);const i={},n=a.createContext(i);function l(t){const e=a.useContext(n);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:l(t.components),a.createElement(n.Provider,{value:e},t.children)}}}]);