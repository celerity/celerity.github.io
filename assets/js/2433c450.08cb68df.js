"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61593],{89444:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=i(74848),a=i(28453);const s='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>struct out_of_order_engine::assignment: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/records/8FC483A7BDEF22CC/"><span>class out_of_order_engine</span></a></li><li class="is-active"><a aria-current="pageCDCAACA586C31316"><span>struct out_of_order_engine::assignment</span></a></li></ul></nav><main class="content"><h1>struct out_of_order_engine::assignment</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct out_of_order_engine::assignment { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>Directions on how a single (ready) instruction is to be dispatched by the executor.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/out_of_order_engine.h#L46">include/out_of_order_engine.h:46</a></p><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_instruction" data-member-name="instruction">  const <a href="/docs/api/records/406117B5A814B8B4/">detail::instruction</a>* <b>instruction</b> = nullptr</dt><dt class="is-family-code" id="var_target" data-member-name="target">  <a href="/docs/api/enums/8F429199F4665530/">out_of_order_engine::target</a> <b>target</b> = out_of_order_engine::target::immediate</dt><dt class="is-family-code" id="var_device" data-member-name="device">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;device_id&gt; <b>device</b></dt><dd>Identifies the device to submit to (if target == device_queue) or to allocate on (if target == alloc_queue).</dd><dt class="is-family-code" id="var_lane" data-member-name="lane">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;lane_id&gt; <b>lane</b></dt><dd>Identifies the thread queue (target == host_queue) or the in-order queue for the given device (target == alloc_queue).</dd></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#B6D74E02C74A1611"><b>assignment</b></a>(const detail::instruction * instruction, out_of_order_engine::target target, std::optional&lt;device_id&gt; device = std::nullopt, std::optional&lt;lane_id&gt; lane = std::nullopt)</li></ul><h2>Member Functions</h2><h3 id="B6D74E02C74A1611" data-function-name="assignment"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#B6D74E02C74A1611">\xb6</a><code class="hdoc-function-code language-cpp">assignment(\n    const <a href="/docs/api/records/406117B5A814B8B4/">detail::instruction</a>* instruction,\n    <a href="/docs/api/enums/8F429199F4665530/">out_of_order_engine::target</a> target,\n    <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;device_id&gt; device =\n        std::nullopt,\n    <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;lane_id&gt; lane = std::nullopt)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/out_of_order_engine.h#L52">include/out_of_order_engine.h:52</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/406117B5A814B8B4/">detail::instruction</a>*<b> instruction</b></dt><dt class="is-family-code"><a href="/docs/api/enums/8F429199F4665530/">out_of_order_engine::target</a><b> target</b></dt><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;device_id&gt;<b> device</b> = std::nullopt</dt><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;lane_id&gt;<b> lane</b> = std::nullopt</dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',r={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct out_of_order_engine::assignment"},o=void 0,c={id:"api/records/CDCAACA586C31316",title:"struct out_of_order_engine::assignment",description:"",source:"@site/celerity-runtime/docs/api/records/CDCAACA586C31316.mdx",sourceDirName:"api/records",slug:"/api/records/CDCAACA586C31316",permalink:"/docs/api/records/CDCAACA586C31316",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct out_of_order_engine::assignment"},sidebar:"api"},l={},d=[];function p(e){const{Head:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t,{children:[(0,n.jsx)("script",{src:"/js/highlight.min.js"}),(0,n.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(96540);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);