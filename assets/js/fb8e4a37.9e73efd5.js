"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72361],{70082:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(74848),n=s(28453);const a='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>struct incomplete_instruction_state: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#F619A510E58C18DF"><span>namespace out_of_order_engine_detail</span></a></li><li class="is-active"><a aria-current="page3F9D4E07110E5FFD"><span>struct incomplete_instruction_state</span></a></li></ul></nav><main class="content"><h1>struct incomplete_instruction_state</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct incomplete_instruction_state { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>State maintained for every instruction between its submission and completion.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/out_of_order_engine.cc#L54">src/out_of_order_engine.cc:54</a></p><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_instr" data-member-name="instr">  const <a href="/docs/api/records/406117B5A814B8B4/">instruction</a>* <b>instr</b> = nullptr</dt><dt class="is-family-code" id="var_target" data-member-name="target">  <a href="/docs/api/enums/8F429199F4665530/">out_of_order_engine::target</a> <b>target</b> = out_of_order_engine::target::immediate</dt><dt class="is-family-code" id="var_eligible_devices" data-member-name="eligible_devices">  gch::small_vector&lt;device_id, 2&gt; <b>eligible_devices</b></dt><dd>device-to-device copies can be submitted to host or destination device.</dd><dt class="is-family-code" id="var_successors" data-member-name="successors">  gch::small_vector&lt;instruction_id&gt; <b>successors</b></dt><dd>we collect successors as they are submitted</dd><dt class="is-family-code" id="var_num_incomplete_predecessors" data-member-name="num_incomplete_predecessors">  size_t <b>num_incomplete_predecessors</b> = 0</dt><dd>An instruction with no incomplete predecessors is ready for immediate assignment.</dd><dt class="is-family-code" id="var_num_unassigned_predecessors" data-member-name="num_unassigned_predecessors">  size_t <b>num_unassigned_predecessors</b> = 0</dt><dd>An instruction with no unassigned (but some incomplete) predecessors may be eligible for eager assignment (see try_mark_for_assignment).</dd><dt class="is-family-code" id="var_assignment" data-member-name="assignment">  <a href="https://en.cppreference.com/w/cpp/utility/variant">std::variant</a>&lt;unassigned_state,\n             conditional_eagerly_assignable_state,\n             unconditional_assignable_state,\n             assigned_state&gt; <b>assignment</b></dt><dd>Data that only exist in specific assignment states.</dd></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#CDC2B0FB41C0AD92"><b>incomplete_instruction_state</b></a>(const instruction * instr) &rarr; explicit</li></ul><h2>Member Functions</h2><h3 id="CDC2B0FB41C0AD92" data-function-name="incomplete_instruction_state"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#CDC2B0FB41C0AD92">\xb6</a><code class="hdoc-function-code language-cpp">explicit incomplete_<a href="/docs/api/records/406117B5A814B8B4/">instruction</a>_state(\n    const instruction* instr)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/out_of_order_engine.cc#L69">src/out_of_order_engine.cc:69</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/406117B5A814B8B4/">instruction</a>*<b> instr</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',r={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct incomplete_instruction_state"},c=void 0,o={id:"api/records/3F9D4E07110E5FFD",title:"struct incomplete_instruction_state",description:"",source:"@site/celerity-runtime/docs/api/records/3F9D4E07110E5FFD.mdx",sourceDirName:"api/records",slug:"/api/records/3F9D4E07110E5FFD",permalink:"/docs/api/records/3F9D4E07110E5FFD",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct incomplete_instruction_state"},sidebar:"api"},l={},d=[];function p(e){const{Head:t}={...(0,n.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t,{children:[(0,i.jsx)("script",{src:"/js/highlight.min.js"}),(0,i.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:a}})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var i=s(96540);const n={},a=i.createContext(n);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);