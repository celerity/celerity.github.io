"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91573],{15544:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=s(74848),i=s(28453);const n='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>struct unassigned_state: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#F619A510E58C18DF"><span>namespace out_of_order_engine_detail</span></a></li><li class="is-active"><a aria-current="page9B0467C131AC6F2C"><span>struct unassigned_state</span></a></li></ul></nav><main class="content"><h1>struct unassigned_state</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct unassigned_state { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>Instruction is not eligible for assignment yet. Implies <code>num_incomplete_predecessors &gt; 0</code>.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/out_of_order_engine.cc#L27">src/out_of_order_engine.cc:27</a></p><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_probe_for_eager_assignment" data-member-name="probe_for_eager_assignment">  bool <b>probe_for_eager_assignment</b> = true</dt><dd>Flag allowing us to shortcut the eager-assignment check if we know that it cannot succeed (anymore). Set to false statically for the immediate and alloc_queue target, and also set to false if the instruction was in `conditional_eagerly_assignable_state` but eager assignment had to be aborted because the lane was not in the expected state anymore.</dd></dl></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',r={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct unassigned_state"},o=void 0,c={id:"api/records/9B0467C131AC6F2C",title:"struct unassigned_state",description:"",source:"@site/celerity-runtime/docs/api/records/9B0467C131AC6F2C.mdx",sourceDirName:"api/records",slug:"/api/records/9B0467C131AC6F2C",permalink:"/docs/api/records/9B0467C131AC6F2C",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct unassigned_state"},sidebar:"api"},l={},d=[];function p(e){const{Head:t}={...(0,i.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t,{children:[(0,a.jsx)("script",{src:"/js/highlight.min.js"}),(0,a.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var a=s(96540);const i={},n=a.createContext(i);function r(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);