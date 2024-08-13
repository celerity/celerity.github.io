"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71457],{85500:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=a(74848),c=a(28453);const s='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#1BF0FAA9C863A6A8"><span>namespace receive_arbiter_detail</span></a></li><li class="is-active"><a aria-current="pageE37F713BAC9F4587"><span>struct gather_request</span></a></li></ul></nav>\n<main><h1>struct gather_request</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct gather_request { /* full declaration omitted */ };</code></pre><section><h2>Description</h2><p><p>State for a single incomplete <code>gather_receive</code> operation.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L35">include/receive_arbiter.h:35</a></p></aside><section><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_allocation" data-member-name="allocation">  void* <b>allocation</b></dt><dt class="is-family-code" id="var_chunk_size" data-member-name="chunk_size">  size_t <b>chunk_size</b></dt><dd>in bytes</dd><dt class="is-family-code" id="var_num_incomplete_chunks" data-member-name="num_incomplete_chunks">  size_t <b>num_incomplete_chunks</b></dt><dd>number of chunks that are currently being received or for which we have not seen a pilot yet</dd><dt class="is-family-code" id="var_incoming_chunks" data-member-name="incoming_chunks">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;incoming_gather_chunk&gt; <b>incoming_chunks</b></dt><dd>chunks that are currently being received</dd></dl></section><section><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#9E3697581C0D9BD5"><b>do_complete</b></a>() &rarr; bool</li><li class="is-family-code"><a href="#203D98CFDB6203E5"><b>gather_request</b></a>(void * allocation, size_t chunk_size, size_t num_total_chunks)</li></ul></section><section><h2>Member Functions</h2><section><h3 id="9E3697581C0D9BD5" data-function-name="do_complete"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#9E3697581C0D9BD5">\xb6</a><code class="hdoc-function-code language-cpp">bool do_complete()</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L43">include/receive_arbiter.h:43</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="203D98CFDB6203E5" data-function-name="gather_request"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#203D98CFDB6203E5">\xb6</a><code class="hdoc-function-code language-cpp">gather_request(void* allocation,\n               size_t chunk_size,\n               size_t num_total_chunks)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L41">include/receive_arbiter.h:41</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">void*<b> allocation</b></dt><dt class="is-family-code">size_t<b> chunk_size</b></dt><dt class="is-family-code">size_t<b> num_total_chunks</b></dt></dl></section></section><hr class="member-fun-separator"></hr></section></main>',r={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct gather_request"},n=void 0,o={id:"api/records/E37F713BAC9F4587",title:"struct gather_request",description:"",source:"@site/celerity-runtime/docs/api/records/E37F713BAC9F4587.mdx",sourceDirName:"api/records",slug:"/api/records/E37F713BAC9F4587",permalink:"/docs/api/records/E37F713BAC9F4587",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct gather_request"},sidebar:"api"},l={},d=[];function u(e){const{Head:t}={...(0,c.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t,{children:[(0,i.jsx)("script",{src:"/js/highlight.min.js"}),(0,i.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>n});var i=a(96540);const c={},s=i.createContext(c);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);