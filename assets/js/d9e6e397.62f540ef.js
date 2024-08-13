"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61823],{52488:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var i=a(74848),c=a(28453);const t='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#1BF0FAA9C863A6A8"><span>namespace receive_arbiter_detail</span></a></li><li class="is-active"><a aria-current="pageAD1A356B204A7D9D"><span>class region_receive_event</span></a></li></ul></nav>\n<main><h1>class region_receive_event</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class region_receive_event : public async_event_impl { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>Event for <code>receive_arbiter::receive</code>, which immediately awaits the entire receive-region.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/receive_arbiter.cc#L16">src/receive_arbiter.cc:16</a></p><p>Inherits from: <a href="/docs/api/records/073311E635D32F96/">async_event_impl</a></p><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_request" data-member-name="m_request">  weak_region_request <b>m_request</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#EEA017BBB9E19959"><b>is_complete</b></a>() &rarr; bool</li><li class="is-family-code"><a href="#7443FDEB3537F76E"><b>region_receive_event</b></a>(const stable_region_request &amp; rr) &rarr; explicit</li></ul><p>Inherited from <a href="/docs/api/records/073311E635D32F96/">async_event_impl</a>:</p><ul><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#586AC2FBEF390DDA">public <b>get_native_execution_time</b></a></li><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#BBCC63BE793ABAF2">public <b>get_result</b></a></li><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#C0338F7BBBCA1682">public <b>is_complete</b></a></li><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#956FA9230ED98EAA">public <b>operator=</b></a></li><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#0094266AA4523532">public <b>operator=</b></a></li></ul><h2>Member Functions</h2><h3 id="EEA017BBB9E19959" data-function-name="is_complete"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#EEA017BBB9E19959">\xb6</a><code class="hdoc-function-code language-cpp">bool is_complete()</code></pre></h3><h4>Description</h4><p><p>If this function returns true once, the implementation must guarantee that it will always do so in the future. The event is expected to be cheap to poll repeatedly, and the operation must proceed in the background even while not being polled.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/receive_arbiter.cc#L20">src/receive_arbiter.cc:20</a></p><hr class="member-fun-separator"></hr><h3 id="7443FDEB3537F76E" data-function-name="region_receive_event"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#7443FDEB3537F76E">\xb6</a><code class="hdoc-function-code language-cpp">explicit region_receive_event(\n    const stable_region_request&amp; rr)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/receive_arbiter.cc#L18">src/receive_arbiter.cc:18</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const stable_region_request&amp;<b> rr</b></dt></dl><hr class="member-fun-separator"></hr></main>',s={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class region_receive_event"},n=void 0,o={id:"api/records/AD1A356B204A7D9D",title:"class region_receive_event",description:"",source:"@site/celerity-runtime/docs/api/records/AD1A356B204A7D9D.mdx",sourceDirName:"api/records",slug:"/api/records/AD1A356B204A7D9D",permalink:"/docs/api/records/AD1A356B204A7D9D",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class region_receive_event"},sidebar:"api"},l={},p=[];function d(e){const{Head:r}={...(0,c.R)(),...e.components};return r||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r,{children:[(0,i.jsx)("script",{src:"/js/highlight.min.js"}),(0,i.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})]})}function m(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>s,x:()=>n});var i=a(96540);const c={},t=i.createContext(c);function s(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);