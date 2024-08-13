"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84444],{32036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(74848),a=n(28453);const i='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="pageE3E1A5853FB6BA4C"><span>struct instruction_garbage</span></a></li></ul></nav>\n<main><h1>struct instruction_garbage</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct instruction_garbage { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>The executor will maintain runtime state about entities that the instruction graph generator references through ids. When the entity goes out of scope or is otherwise not needed for further instructions, we can delete that state from the executor. We attach the list of these ids to horizon and epoch commands because they conveniently depend on the entire previous execution front and are thus scheduled to run after the last instruction using each entity.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L395">include/instruction_graph.h:395</a></p><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_reductions" data-member-name="reductions">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;reduction_id&gt; <b>reductions</b></dt><dt class="is-family-code" id="var_user_allocations" data-member-name="user_allocations">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;allocation_id&gt; <b>user_allocations</b></dt></dl></main>',s={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct instruction_garbage"},o=void 0,c={id:"api/records/E3E1A5853FB6BA4C",title:"struct instruction_garbage",description:"",source:"@site/celerity-runtime/docs/api/records/E3E1A5853FB6BA4C.mdx",sourceDirName:"api/records",slug:"/api/records/E3E1A5853FB6BA4C",permalink:"/docs/api/records/E3E1A5853FB6BA4C",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct instruction_garbage"},sidebar:"api"},l={},d=[];function u(e){const{Head:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t,{children:[(0,r.jsx)("script",{src:"/js/highlight.min.js"}),(0,r.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:i}})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);