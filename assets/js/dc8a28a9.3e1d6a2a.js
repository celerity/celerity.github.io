"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36761],{30471:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var a=s(74848),i=s(28453);const r='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#0C430652431EAE33"><span>namespace tracy_detail</span></a></li><li class="is-active"><a aria-current="pageA68BE0A470E1E754"><span>enum thread_order</span></a></li></ul></nav>\n<main><h1>enum thread_order</h1><section><h2>Description</h2><p><p>Base for sorting keys for the visual order of threads in Tracy. Higher = further down. Order between duplicate keys is automatic per Tracy terms.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/tracy.h#L60">include/tracy.h:60</a></p></aside><section><h2>Enumerators</h2><table class="table is-narrow is-hoverable"><tr><th>Name</th><th>Value</th><th>Comment</th></tr><tr><td class="is-family-code">scheduler</td><td class="is-family-code">65536</td><td></td></tr><tr><td class="is-family-code">executor</td><td class="is-family-code">65537</td><td></td></tr><tr><td class="is-family-code">thread_queue</td><td class="is-family-code">65538</td><td></td></tr><tr><td class="is-family-code">immediate_lane</td><td class="is-family-code">65539</td><td></td></tr><tr><td class="is-family-code">alloc_lane</td><td class="is-family-code">65540</td><td></td></tr><tr><td class="is-family-code">host_first_lane</td><td class="is-family-code">65792</td><td></td></tr><tr><td class="is-family-code">first_device_first_lane</td><td class="is-family-code">66048</td><td></td></tr><tr><td class="is-family-code">num_lanes_per_device</td><td class="is-family-code">256</td><td></td></tr><tr><td class="is-family-code">send_receive_first_lane</td><td class="is-family-code">135168</td><td></td></tr></table></section></main>',d={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"enum thread_order"},n=void 0,c={id:"api/enums/A68BE0A470E1E754",title:"enum thread_order",description:"",source:"@site/celerity-runtime/docs/api/enums/A68BE0A470E1E754.mdx",sourceDirName:"api/enums",slug:"/api/enums/A68BE0A470E1E754",permalink:"/docs/api/enums/A68BE0A470E1E754",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"enum thread_order"},sidebar:"api"},l={},o=[];function m(e){const{Head:t}={...(0,i.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t,{children:[(0,a.jsx)("script",{src:"/js/highlight.min.js"}),(0,a.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>n});var a=s(96540);const i={},r=a.createContext(i);function d(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);