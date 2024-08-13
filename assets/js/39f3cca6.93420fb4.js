"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95661],{60183:(e,a,c)=>{c.r(a),c.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var t=c(74848),s=c(28453);const l='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#B7E6D09282CFB3CB"><span>namespace sycl_backend_detail</span></a></li><li class="is-active"><a aria-current="pageBFBF2615F4722B4E"><span>class sycl_event</span></a></li></ul></nav>\n<main><h1>class sycl_event</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class sycl_event : public async_event_impl { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>Abstract base class for <code>async_event</code> implementations.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/backend/sycl_backend.h#L11">include/backend/sycl_backend.h:11</a></p><p>Inherits from: <a href="/docs/api/records/073311E635D32F96/">async_event_impl</a></p><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_first" data-member-name="m_first">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;sycl::event&gt; <b>m_first</b></dt><dt class="is-family-code hdoc-private" id="var_m_last" data-member-name="m_last">  sycl::event <b>m_last</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#42AB0B88ABD8C5A6"><b>get_native_execution_time</b></a>() &rarr; std::optional&lt;std::chrono::nanoseconds&gt;</li><li class="is-family-code"><a href="#2A33B3ACEEA69C35"><b>is_complete</b></a>() &rarr; bool</li><li class="is-family-code"><a href="#51A5CFF7E6BB9072"><b>sycl_event</b></a>()</li><li class="is-family-code"><a href="#5E203E3C39C31481"><b>sycl_event</b></a>(sycl::event last, bool enable_profiling)</li><li class="is-family-code"><a href="#D1CF81BC99E3D6D1"><b>sycl_event</b></a>(std::optional&lt;sycl::event&gt; first, sycl::event last)</li></ul><p>Inherited from <a href="/docs/api/records/073311E635D32F96/">async_event_impl</a>:</p><ul><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#586AC2FBEF390DDA">public <b>get_native_execution_time</b></a></li><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#BBCC63BE793ABAF2">public <b>get_result</b></a></li><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#C0338F7BBBCA1682">public <b>is_complete</b></a></li><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#956FA9230ED98EAA">public <b>operator=</b></a></li><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#0094266AA4523532">public <b>operator=</b></a></li></ul><h2>Member Functions</h2><h3 id="42AB0B88ABD8C5A6" data-function-name="get_native_execution_time"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#42AB0B88ABD8C5A6">\xb6</a><code class="hdoc-function-code language-cpp"><a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;std::chrono::nanoseconds&gt;\nget_native_execution_time()</code></pre></h3><h4>Description</h4><p><p>Returns the time execution time as measured if profiling was enabled in the issuing component. Requires <code>is_complete()</code> to be true.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/backend/sycl_backend.h#L19">include/backend/sycl_backend.h:19</a></p><hr class="member-fun-separator"></hr><h3 id="2A33B3ACEEA69C35" data-function-name="is_complete"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#2A33B3ACEEA69C35">\xb6</a><code class="hdoc-function-code language-cpp">bool is_complete()</code></pre></h3><h4>Description</h4><p><p>If this function returns true once, the implementation must guarantee that it will always do so in the future. The event is expected to be cheap to poll repeatedly, and the operation must proceed in the background even while not being polled.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/backend/sycl_backend.h#L17">include/backend/sycl_backend.h:17</a></p><hr class="member-fun-separator"></hr><h3 id="51A5CFF7E6BB9072" data-function-name="sycl_event"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#51A5CFF7E6BB9072">\xb6</a><code class="hdoc-function-code language-cpp">sycl_event()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/backend/sycl_backend.h#L13">include/backend/sycl_backend.h:13</a></p><hr class="member-fun-separator"></hr><h3 id="5E203E3C39C31481" data-function-name="sycl_event"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#5E203E3C39C31481">\xb6</a><code class="hdoc-function-code language-cpp">sycl_event(sycl::event last,\n           bool enable_profiling)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/backend/sycl_backend.h#L14">include/backend/sycl_backend.h:14</a></p><h4>Parameters</h4><dl><dt class="is-family-code">sycl::event<b> last</b></dt><dt class="is-family-code">bool<b> enable_profiling</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="D1CF81BC99E3D6D1" data-function-name="sycl_event"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#D1CF81BC99E3D6D1">\xb6</a><code class="hdoc-function-code language-cpp">sycl_event(<a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;sycl::event&gt; first,\n           sycl::event last)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/backend/sycl_backend.h#L15">include/backend/sycl_backend.h:15</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;sycl::event&gt;<b> first</b></dt><dt class="is-family-code">sycl::event<b> last</b></dt></dl><hr class="member-fun-separator"></hr></main>',n={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class sycl_event"},i=void 0,r={id:"api/records/BFBF2615F4722B4E",title:"class sycl_event",description:"",source:"@site/celerity-runtime/docs/api/records/BFBF2615F4722B4E.mdx",sourceDirName:"api/records",slug:"/api/records/BFBF2615F4722B4E",permalink:"/docs/api/records/BFBF2615F4722B4E",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class sycl_event"},sidebar:"api"},o={},d=[];function p(e){const{Head:a}={...(0,s.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:l}})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,a,c)=>{c.d(a,{R:()=>n,x:()=>i});var t=c(96540);const s={},l=t.createContext(s);function n(e){const a=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),t.createElement(l.Provider,{value:a},e.children)}}}]);