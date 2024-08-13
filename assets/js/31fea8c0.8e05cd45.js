"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23342],{39945:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var t=a(74848),s=a(28453);const c='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>class alloc_instruction: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page257C21129DAD63BF"><span>class alloc_instruction</span></a></li></ul></nav><main class="content"><h1>class alloc_instruction</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class alloc_instruction : public implement_acceptor { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>Allocates a contiguous range of memory, either for use as a backing allocation for a buffer or for other purposes i.e. staging for transfer operations.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L78">include/instruction_graph.h:78</a></p><p>Inherits from: implement_acceptor</p><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_aid" data-member-name="m_aid">  <a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> <b>m_aid</b></dt><dt class="is-family-code hdoc-private" id="var_m_size" data-member-name="m_size">  size_t <b>m_size</b></dt><dt class="is-family-code hdoc-private" id="var_m_alignment" data-member-name="m_alignment">  size_t <b>m_alignment</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#8C4966CCC7C65BFC"><b>alloc_instruction</b></a>(instruction_id iid, int priority, allocation_id aid, size_t size, size_t alignment) &rarr; explicit</li><li class="is-family-code"><a href="#853A2168DD0F8103"><b>get_alignment_bytes</b></a>() const &rarr; size_t</li><li class="is-family-code"><a href="#E7B0691B62FE776B"><b>get_allocation_id</b></a>() const &rarr; allocation_id</li><li class="is-family-code"><a href="#89AC0EC0AEC1DB8F"><b>get_size_bytes</b></a>() const &rarr; size_t</li></ul><h2>Member Functions</h2><h3 id="8C4966CCC7C65BFC" data-function-name="alloc_instruction"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#8C4966CCC7C65BFC">\xb6</a><code class="hdoc-function-code language-cpp">explicit alloc_instruction(<a href="/docs/api/records/A10FDF2DB5485BE8/">instruction_id</a> iid,\n                           int priority,\n                           <a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> aid,\n                           size_t size,\n                           size_t alignment)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L80">include/instruction_graph.h:80</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/A10FDF2DB5485BE8/">instruction_id</a><b> iid</b></dt><dt class="is-family-code">int<b> priority</b></dt><dt class="is-family-code"><a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a><b> aid</b></dt><dt class="is-family-code">size_t<b> size</b></dt><dt class="is-family-code">size_t<b> alignment</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="853A2168DD0F8103" data-function-name="get_alignment_bytes"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#853A2168DD0F8103">\xb6</a><code class="hdoc-function-code language-cpp">size_t get_alignment_bytes() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L85">include/instruction_graph.h:85</a></p><hr class="member-fun-separator"></hr><h3 id="E7B0691B62FE776B" data-function-name="get_allocation_id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#E7B0691B62FE776B">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> get_allocation_id() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L83">include/instruction_graph.h:83</a></p><hr class="member-fun-separator"></hr><h3 id="89AC0EC0AEC1DB8F" data-function-name="get_size_bytes"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#89AC0EC0AEC1DB8F">\xb6</a><code class="hdoc-function-code language-cpp">size_t get_size_bytes() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L84">include/instruction_graph.h:84</a></p><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',n={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class alloc_instruction"},r=void 0,l={id:"api/records/257C21129DAD63BF",title:"class alloc_instruction",description:"",source:"@site/celerity-runtime/docs/api/records/257C21129DAD63BF.mdx",sourceDirName:"api/records",slug:"/api/records/257C21129DAD63BF",permalink:"/docs/api/records/257C21129DAD63BF",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class alloc_instruction"},sidebar:"api"},o={},d=[];function p(e){const{Head:i}={...(0,s.R)(),...e.components};return i||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:c}})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,i,a)=>{a.d(i,{R:()=>n,x:()=>r});var t=a(96540);const s={},c=t.createContext(s);function n(e){const i=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),t.createElement(c.Provider,{value:i},e.children)}}}]);