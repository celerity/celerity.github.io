"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20528],{84502:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var t=s(74848),n=s(28453);const i='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page6C69C83B0E3AF5B8"><span>alias buffer_access_allocation_map</span></a></li></ul></nav>\n<main><h3 id="6C69C83B0E3AF5B8"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#6C69C83B0E3AF5B8">\xb6</a><code class="hdoc-function-code language-cpp">using buffer_access_allocation_map =\n    std::vector&lt;buffer_access_allocation&gt;;</code></pre></h3><section><h4>Description</h4><p><p>Allocation-equivalent of a buffer_access_map. The runtime hydration and reduction mechanism are keyed by zero-based indices per instruction. We use a std::vector directly instead of a small_vector because entries are &gt; 100 bytes each.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L148">include/instruction_graph.h:148</a></p></aside></main>',c={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"alias buffer_access_allocation_map"},r=void 0,o={id:"api/aliases/6C69C83B0E3AF5B8",title:"alias buffer_access_allocation_map",description:"",source:"@site/celerity-runtime/docs/api/aliases/6C69C83B0E3AF5B8.mdx",sourceDirName:"api/aliases",slug:"/api/aliases/6C69C83B0E3AF5B8",permalink:"/docs/api/aliases/6C69C83B0E3AF5B8",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"alias buffer_access_allocation_map"},sidebar:"api"},l={},p=[];function d(e){const{Head:a}={...(0,n.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:i}})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,a,s)=>{s.d(a,{R:()=>c,x:()=>r});var t=s(96540);const n={},i=t.createContext(n);function c(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);