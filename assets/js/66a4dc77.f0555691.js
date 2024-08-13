"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80721],{24524:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(74848),r=a(28453);const s='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="pageC539287580C458B9"><span>struct command_hash_by_id</span></a></li></ul></nav>\n<main><h1>struct command_hash_by_id</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct command_hash_by_id { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>Hash function for <code>unordered_sets/maps</code> of <code>command *</code> that is deterministic even as allocation addresses change between application runs.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command.h#L156">include/command.h:156</a></p><h2>Member Function Overview</h2><ul><li class="is-family-code"><span class="hdoc-overview-template">template &lt;typename Pointer&gt;</span><br><a href="#8F2ED53E4222276F"><b>operator()</b></a>(Pointer instr) const &rarr; constexpr size_t</li></ul><h2>Member Functions</h2><h3 id="8F2ED53E4222276F" data-function-name="operator()"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#8F2ED53E4222276F">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;typename Pointer&gt;\nconstexpr size_t operator()(Pointer instr) const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command.h#L158">include/command.h:158</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code"><b> Pointer</b></dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">Pointer<b> instr</b></dt></dl><hr class="member-fun-separator"></hr></main>',i={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct command_hash_by_id"},c=void 0,o={id:"api/records/C539287580C458B9",title:"struct command_hash_by_id",description:"",source:"@site/celerity-runtime/docs/api/records/C539287580C458B9.mdx",sourceDirName:"api/records",slug:"/api/records/C539287580C458B9",permalink:"/docs/api/records/C539287580C458B9",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct command_hash_by_id"},sidebar:"api"},d={},l=[];function p(e){const{Head:t}={...(0,r.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t,{children:[(0,n.jsx)("script",{src:"/js/highlight.min.js"}),(0,n.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>c});var n=a(96540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);