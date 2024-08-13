"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61593],{89444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(74848),i=n(28453);const r='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/records/8FC483A7BDEF22CC/"><span>class out_of_order_engine</span></a></li><li class="is-active"><a aria-current="pageCDCAACA586C31316"><span>struct out_of_order_engine::assignment</span></a></li></ul></nav>\n<main><h1>struct out_of_order_engine::assignment</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct out_of_order_engine::assignment { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>Directions on how a single (ready) instruction is to be dispatched by the executor.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/out_of_order_engine.h#L46">include/out_of_order_engine.h:46</a></p><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_instruction" data-member-name="instruction">  const <a href="/docs/api/records/406117B5A814B8B4/">detail::instruction</a>* <b>instruction</b> = nullptr</dt><dt class="is-family-code" id="var_target" data-member-name="target">  <a href="/docs/api/enums/8F429199F4665530/">out_of_order_engine::target</a> <b>target</b> = out_of_order_engine::target::immediate</dt><dt class="is-family-code" id="var_device" data-member-name="device">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;device_id&gt; <b>device</b></dt><dd>Identifies the device to submit to (if target == device_queue) or to allocate on (if target == alloc_queue).</dd><dt class="is-family-code" id="var_lane" data-member-name="lane">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;lane_id&gt; <b>lane</b></dt><dd>Identifies the thread queue (target == host_queue) or the in-order queue for the given device (target == alloc_queue).</dd></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#B6D74E02C74A1611"><b>assignment</b></a>(const detail::instruction * instruction, out_of_order_engine::target target, std::optional&lt;device_id&gt; device = std::nullopt, std::optional&lt;lane_id&gt; lane = std::nullopt)</li></ul><h2>Member Functions</h2><h3 id="B6D74E02C74A1611" data-function-name="assignment"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#B6D74E02C74A1611">\xb6</a><code class="hdoc-function-code language-cpp">assignment(\n    const <a href="/docs/api/records/406117B5A814B8B4/">detail::instruction</a>* instruction,\n    <a href="/docs/api/enums/8F429199F4665530/">out_of_order_engine::target</a> target,\n    <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;device_id&gt; device =\n        std::nullopt,\n    <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;lane_id&gt; lane = std::nullopt)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/out_of_order_engine.h#L52">include/out_of_order_engine.h:52</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/406117B5A814B8B4/">detail::instruction</a>*<b> instruction</b></dt><dt class="is-family-code"><a href="/docs/api/enums/8F429199F4665530/">out_of_order_engine::target</a><b> target</b></dt><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;device_id&gt;<b> device</b> = std::nullopt</dt><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;lane_id&gt;<b> lane</b> = std::nullopt</dt></dl><hr class="member-fun-separator"></hr></main>',o={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct out_of_order_engine::assignment"},s=void 0,c={id:"api/records/CDCAACA586C31316",title:"struct out_of_order_engine::assignment",description:"",source:"@site/celerity-runtime/docs/api/records/CDCAACA586C31316.mdx",sourceDirName:"api/records",slug:"/api/records/CDCAACA586C31316",permalink:"/docs/api/records/CDCAACA586C31316",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct out_of_order_engine::assignment"},sidebar:"api"},d={},l=[];function p(e){const{Head:t}={...(0,i.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t,{children:[(0,a.jsx)("script",{src:"/js/highlight.min.js"}),(0,a.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var a=n(96540);const i={},r=a.createContext(i);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);