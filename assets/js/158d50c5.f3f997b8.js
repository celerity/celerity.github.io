"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38438],{94319:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=a(74848),c=a(28453);const s='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>class reduce_instruction: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="pageE79FBF3BF45FB464"><span>class reduce_instruction</span></a></li></ul></nav><main class="content"><h1>class reduce_instruction</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class reduce_instruction : public implement_acceptor { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>Performs an out-of-memory reduction by reading from a gather allocation and writing to a single (buffer) allocation.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L349">include/instruction_graph.h:349</a></p><p>Inherits from: implement_acceptor</p><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_rid" data-member-name="m_rid">  <a href="/docs/api/records/6DD6FF2C7DDED129/">reduction_id</a> <b>m_rid</b></dt><dt class="is-family-code hdoc-private" id="var_m_source_aid" data-member-name="m_source_aid">  <a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> <b>m_source_aid</b></dt><dt class="is-family-code hdoc-private" id="var_m_num_source_values" data-member-name="m_num_source_values">  size_t <b>m_num_source_values</b></dt><dt class="is-family-code hdoc-private" id="var_m_dest_aid" data-member-name="m_dest_aid">  <a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> <b>m_dest_aid</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#9BADEAD69C66AB2A"><b>get_dest_allocation_id</b></a>() const &rarr; allocation_id</li><li class="is-family-code"><a href="#7CC963ADD741468F"><b>get_num_source_values</b></a>() const &rarr; size_t</li><li class="is-family-code"><a href="#183DCC6C168BEC2D"><b>get_reduction_id</b></a>() const &rarr; reduction_id</li><li class="is-family-code"><a href="#D0C92F41ACDE4A80"><b>get_source_allocation_id</b></a>() const &rarr; allocation_id</li><li class="is-family-code"><a href="#4E92194131E11E78"><b>reduce_instruction</b></a>(instruction_id iid, int priority, reduction_id rid, allocation_id source_allocation_id, size_t num_source_values, allocation_id dest_allocation_id) &rarr; explicit</li></ul><h2>Member Functions</h2><h3 id="9BADEAD69C66AB2A" data-function-name="get_dest_allocation_id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#9BADEAD69C66AB2A">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> get_dest_allocation_id() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L359">include/instruction_graph.h:359</a></p><hr class="member-fun-separator"></hr><h3 id="7CC963ADD741468F" data-function-name="get_num_source_values"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#7CC963ADD741468F">\xb6</a><code class="hdoc-function-code language-cpp">size_t get_num_source_values() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L358">include/instruction_graph.h:358</a></p><hr class="member-fun-separator"></hr><h3 id="183DCC6C168BEC2D" data-function-name="get_reduction_id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#183DCC6C168BEC2D">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/6DD6FF2C7DDED129/">reduction_id</a> get_reduction_id() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L356">include/instruction_graph.h:356</a></p><hr class="member-fun-separator"></hr><h3 id="D0C92F41ACDE4A80" data-function-name="get_source_allocation_id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#D0C92F41ACDE4A80">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> get_source_allocation_id() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L357">include/instruction_graph.h:357</a></p><hr class="member-fun-separator"></hr><h3 id="4E92194131E11E78" data-function-name="reduce_instruction"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#4E92194131E11E78">\xb6</a><code class="hdoc-function-code language-cpp">explicit reduce_instruction(\n    <a href="/docs/api/records/A10FDF2DB5485BE8/">instruction_id</a> iid,\n    int priority,\n    <a href="/docs/api/records/6DD6FF2C7DDED129/">reduction_id</a> rid,\n    <a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> source_<a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a>,\n    size_t num_source_values,\n    allocation_id dest_allocation_id)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L351">include/instruction_graph.h:351</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/A10FDF2DB5485BE8/">instruction_id</a><b> iid</b></dt><dt class="is-family-code">int<b> priority</b></dt><dt class="is-family-code"><a href="/docs/api/records/6DD6FF2C7DDED129/">reduction_id</a><b> rid</b></dt><dt class="is-family-code"><a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a><b> source_allocation_id</b></dt><dt class="is-family-code">size_t<b> num_source_values</b></dt><dt class="is-family-code"><a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a><b> dest_allocation_id</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',r={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class reduce_instruction"},n=void 0,o={id:"api/records/E79FBF3BF45FB464",title:"class reduce_instruction",description:"",source:"@site/celerity-runtime/docs/api/records/E79FBF3BF45FB464.mdx",sourceDirName:"api/records",slug:"/api/records/E79FBF3BF45FB464",permalink:"/docs/api/records/E79FBF3BF45FB464",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class reduce_instruction"},sidebar:"api"},l={},d=[];function p(e){const{Head:i}={...(0,c.R)(),...e.components};return i||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function u(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,i,a)=>{a.d(i,{R:()=>r,x:()=>n});var t=a(96540);const c={},s=t.createContext(c);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);