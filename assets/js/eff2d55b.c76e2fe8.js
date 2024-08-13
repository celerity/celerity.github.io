"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15306],{8293:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=a(74848),s=a(28453);const n='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>struct tracy_integration::async_lane_state: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#71DB0D67F98E1B3A"><span>namespace live_executor_detail</span></a></li><li><a href="/docs/api/records/62084FC930525D36/"><span>struct tracy_integration</span></a></li><li class="is-active"><a aria-current="page5094880EFF491535"><span>struct tracy_integration::async_lane_state</span></a></li></ul></nav><main class="content"><h1>struct tracy_integration::async_lane_state</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct tracy_integration::async_lane_state { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>State for an async (fiber) lane. Keeps the active (suspended) zone as well as the queue of eagerly submitted but not yet begun zones.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/live_executor.cc#L59">src/live_executor.cc:59</a></p><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_id" data-member-name="id">  <a href="/docs/api/records/EE778897157ADE91/">async_lane_id</a> <b>id</b></dt><dt class="is-family-code" id="var_fiber_name" data-member-name="fiber_name">  const char* <b>fiber_name</b> = nullptr</dt><dt class="is-family-code" id="var_fiber_order" data-member-name="fiber_order">  int32_t <b>fiber_order</b> = 0</dt><dt class="is-family-code" id="var_next_submission_idx" data-member-name="next_submission_idx">  size_t <b>next_submission_idx</b> = 0</dt><dt class="is-family-code" id="var_active_zone_ctx" data-member-name="active_zone_ctx">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;TracyCZoneCtx&gt; <b>active_zone_ctx</b></dt><dt class="is-family-code" id="var_zone_queue" data-member-name="zone_queue">  <a href="https://en.cppreference.com/w/cpp/container/deque">std::deque</a>&lt;async_zone&gt; <b>zone_queue</b></dt><dd>front(): currently active zone, front() + 1: zone to start immediately after front() has ended</dd></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#2A54B195254E5F15"><b>async_lane_state</b></a>(const async_lane_id &amp; id) &rarr; explicit</li></ul><h2>Member Functions</h2><h3 id="2A54B195254E5F15" data-function-name="async_lane_state"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#2A54B195254E5F15">\xb6</a><code class="hdoc-function-code language-cpp">explicit async_lane_state(const <a href="/docs/api/records/EE778897157ADE91/">async_lane_id</a>&amp; id)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/live_executor.cc#L67">src/live_executor.cc:67</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/EE778897157ADE91/">async_lane_id</a>&amp;<b> id</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',r={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct tracy_integration::async_lane_state"},c=void 0,l={id:"api/records/5094880EFF491535",title:"struct tracy_integration::async_lane_state",description:"",source:"@site/celerity-runtime/docs/api/records/5094880EFF491535.mdx",sourceDirName:"api/records",slug:"/api/records/5094880EFF491535",permalink:"/docs/api/records/5094880EFF491535",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct tracy_integration::async_lane_state"},sidebar:"api"},o={},d=[];function p(e){const{Head:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t,{children:[(0,i.jsx)("script",{src:"/js/highlight.min.js"}),(0,i.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>c});var i=a(96540);const s={},n=i.createContext(s);function r(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);