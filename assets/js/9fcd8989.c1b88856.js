"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52923],{36261:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(74848),n=t(28453);const s='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#1BF0FAA9C863A6A8"><span>namespace receive_arbiter_detail</span></a></li><li class="is-active"><a aria-current="pageEB24604D1B3AEF5C"><span>struct unassigned_transfer</span></a></li></ul></nav>\n<main><h1>struct unassigned_transfer</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct unassigned_transfer { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>A transfer that is only known through inbound pilots so far, but no <code>receive</code> / <code>begin_split_receive</code> has been issued so far.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L51">include/receive_arbiter.h:51</a></p><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_pilots" data-member-name="pilots">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;inbound_pilot&gt; <b>pilots</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#E9BC60A8DE8F33A3"><b>do_complete</b></a>() &rarr; bool</li></ul><h2>Member Functions</h2><h3 id="E9BC60A8DE8F33A3" data-function-name="do_complete"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#E9BC60A8DE8F33A3">\xb6</a><code class="hdoc-function-code language-cpp">bool do_complete()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L53">include/receive_arbiter.h:53</a></p><hr class="member-fun-separator"></hr></main>',i={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct unassigned_transfer"},c=void 0,o={id:"api/records/EB24604D1B3AEF5C",title:"struct unassigned_transfer",description:"",source:"@site/celerity-runtime/docs/api/records/EB24604D1B3AEF5C.mdx",sourceDirName:"api/records",slug:"/api/records/EB24604D1B3AEF5C",permalink:"/docs/api/records/EB24604D1B3AEF5C",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct unassigned_transfer"},sidebar:"api"},l={},d=[];function p(e){const{Head:r}={...(0,n.R)(),...e.components};return r||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r,{children:[(0,a.jsx)("script",{src:"/js/highlight.min.js"}),(0,a.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var a=t(96540);const n={},s=a.createContext(n);function i(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);