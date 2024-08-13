"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4032],{75889:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var t=r(74848),i=r(28453);const c='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#1BF0FAA9C863A6A8"><span>namespace receive_arbiter_detail</span></a></li><li class="is-active"><a aria-current="page8917056E6758EE69"><span>class gather_receive_event</span></a></li></ul></nav>\n<main><h1>class gather_receive_event</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class gather_receive_event : public async_event_impl { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>Event for <code>receive_arbiter::gather_receive</code>, which waits for incoming messages (or empty-box pilots) from all peers.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/receive_arbiter.cc#L43">src/receive_arbiter.cc:43</a></p><p>Inherits from: <a href="/docs/api/records/073311E635D32F96/">async_event_impl</a></p><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_request" data-member-name="m_request">  weak_gather_request <b>m_request</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#1F5F9C189B06C4BA"><b>gather_receive_event</b></a>(const stable_gather_request &amp; gr) &rarr; explicit</li><li class="is-family-code"><a href="#F28AEBF149B54155"><b>is_complete</b></a>() &rarr; bool</li></ul><p>Inherited from <a href="/docs/api/records/073311E635D32F96/">async_event_impl</a>:</p><ul><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#586AC2FBEF390DDA">public <b>get_native_execution_time</b></a></li><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#BBCC63BE793ABAF2">public <b>get_result</b></a></li><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#C0338F7BBBCA1682">public <b>is_complete</b></a></li><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#956FA9230ED98EAA">public <b>operator=</b></a></li><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#0094266AA4523532">public <b>operator=</b></a></li></ul><h2>Member Functions</h2><h3 id="1F5F9C189B06C4BA" data-function-name="gather_receive_event"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#1F5F9C189B06C4BA">\xb6</a><code class="hdoc-function-code language-cpp">explicit gather_receive_event(\n    const stable_gather_request&amp; gr)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/receive_arbiter.cc#L45">src/receive_arbiter.cc:45</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const stable_gather_request&amp;<b> gr</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="F28AEBF149B54155" data-function-name="is_complete"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#F28AEBF149B54155">\xb6</a><code class="hdoc-function-code language-cpp">bool is_complete()</code></pre></h3><h4>Description</h4><p><p>If this function returns true once, the implementation must guarantee that it will always do so in the future. The event is expected to be cheap to poll repeatedly, and the operation must proceed in the background even while not being polled.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/receive_arbiter.cc#L47">src/receive_arbiter.cc:47</a></p><hr class="member-fun-separator"></hr></main>',s={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class gather_receive_event"},n=void 0,l={id:"api/records/8917056E6758EE69",title:"class gather_receive_event",description:"",source:"@site/celerity-runtime/docs/api/records/8917056E6758EE69.mdx",sourceDirName:"api/records",slug:"/api/records/8917056E6758EE69",permalink:"/docs/api/records/8917056E6758EE69",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class gather_receive_event"},sidebar:"api"},o={},p=[];function d(e){const{Head:a}={...(0,i.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:c}})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>s,x:()=>n});var t=r(96540);const i={},c=t.createContext(i);function s(e){const a=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(c.Provider,{value:a},e.children)}}}]);