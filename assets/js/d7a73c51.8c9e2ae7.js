"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93008],{58427:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>n,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=r(74848),c=r(28453);const i='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>struct buffer_access_allocation_record: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page44D6A6397C4670F5"><span>struct buffer_access_allocation_record</span></a></li></ul></nav><main class="content"><h1>struct buffer_access_allocation_record</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct buffer_access_allocation_record\n    : public buffer_access_allocation,\n      public buffer_memory_record { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>IDAG combined record for a device-kernel / host-task buffer access via a single allocation.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L245">include/recorders.h:245</a></p><p>Inherits from: <a href="/docs/api/records/4F943B08D2BAAD37/">buffer_access_allocation</a>, <a href="/docs/api/records/4BCDD4EA3F79E690/">buffer_memory_record</a></p><h2>Member Variables</h2><p>Inherited from <a href="/docs/api/records/4BCDD4EA3F79E690/">buffer_memory_record</a>:</p><dl><dt class="is-family-code"><a href="/docs/api/records/4BCDD4EA3F79E690/#var_buffer_id"> <b>buffer_id</b></a></dt><dt class="is-family-code"><a href="/docs/api/records/4BCDD4EA3F79E690/#var_buffer_name"> <b>buffer_name</b></a></dt></dl><p>Inherited from <a href="/docs/api/records/4F943B08D2BAAD37/">buffer_access_allocation</a>:</p><dl><dt class="is-family-code"><a href="/docs/api/records/4F943B08D2BAAD37/#var_allocation_id"> <b>allocation_id</b></a> = null_allocation_id</dt><dt class="is-family-code"><a href="/docs/api/records/4F943B08D2BAAD37/#var_allocated_box_in_buffer"> <b>allocated_box_in_buffer</b></a></dt><dt class="is-family-code"><a href="/docs/api/records/4F943B08D2BAAD37/#var_accessed_box_in_buffer"> <b>accessed_box_in_buffer</b></a></dt><dt class="is-family-code"><a href="/docs/api/records/4F943B08D2BAAD37/#var_oob_buffer_id"> <b>oob_buffer_id</b></a></dt><dt class="is-family-code"><a href="/docs/api/records/4F943B08D2BAAD37/#var_oob_buffer_name"> <b>oob_buffer_name</b></a></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#9BC384F928EFD5BA"><b>buffer_access_allocation_record</b></a>(const buffer_access_allocation &amp; aa, buffer_memory_record mr)</li></ul><h2>Member Functions</h2><h3 id="9BC384F928EFD5BA" data-function-name="buffer_access_allocation_record"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#9BC384F928EFD5BA">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/4F943B08D2BAAD37/">buffer_access_allocation</a>_record(\n    const buffer_access_allocation&amp; aa,\n    <a href="/docs/api/records/4BCDD4EA3F79E690/">buffer_memory_record</a> mr)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L246">include/recorders.h:246</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/4F943B08D2BAAD37/">buffer_access_allocation</a>&amp;<b> aa</b></dt><dt class="is-family-code"><a href="/docs/api/records/4BCDD4EA3F79E690/">buffer_memory_record</a><b> mr</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',o={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct buffer_access_allocation_record"},t=void 0,l={id:"api/records/44D6A6397C4670F5",title:"struct buffer_access_allocation_record",description:"",source:"@site/celerity-runtime/docs/api/records/44D6A6397C4670F5.mdx",sourceDirName:"api/records",slug:"/api/records/44D6A6397C4670F5",permalink:"/docs/api/records/44D6A6397C4670F5",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct buffer_access_allocation_record"},sidebar:"api"},n={},d=[];function f(e){const{Head:a}={...(0,c.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a,{children:[(0,s.jsx)("script",{src:"/js/highlight.min.js"}),(0,s.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:i}})]})}function p(e={}){const{wrapper:a}={...(0,c.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>o,x:()=>t});var s=r(96540);const c={},i=s.createContext(c);function o(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);