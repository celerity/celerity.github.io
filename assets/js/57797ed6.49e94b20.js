"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71457],{85500:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=i(74848),s=i(28453);const r='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>struct gather_request: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#1BF0FAA9C863A6A8"><span>namespace receive_arbiter_detail</span></a></li><li class="is-active"><a aria-current="pageE37F713BAC9F4587"><span>struct gather_request</span></a></li></ul></nav><main class="content"><h1>struct gather_request</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct gather_request { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>State for a single incomplete <code>gather_receive</code> operation.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L35">include/receive_arbiter.h:35</a></p><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_allocation" data-member-name="allocation">  void* <b>allocation</b></dt><dt class="is-family-code" id="var_chunk_size" data-member-name="chunk_size">  size_t <b>chunk_size</b></dt><dd>in bytes</dd><dt class="is-family-code" id="var_num_incomplete_chunks" data-member-name="num_incomplete_chunks">  size_t <b>num_incomplete_chunks</b></dt><dd>number of chunks that are currently being received or for which we have not seen a pilot yet</dd><dt class="is-family-code" id="var_incoming_chunks" data-member-name="incoming_chunks">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;incoming_gather_chunk&gt; <b>incoming_chunks</b></dt><dd>chunks that are currently being received</dd></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#9E3697581C0D9BD5"><b>do_complete</b></a>() &rarr; bool</li><li class="is-family-code"><a href="#203D98CFDB6203E5"><b>gather_request</b></a>(void * allocation, size_t chunk_size, size_t num_total_chunks)</li></ul><h2>Member Functions</h2><h3 id="9E3697581C0D9BD5" data-function-name="do_complete"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#9E3697581C0D9BD5">\xb6</a><code class="hdoc-function-code language-cpp">bool do_complete()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L43">include/receive_arbiter.h:43</a></p><hr class="member-fun-separator"></hr><h3 id="203D98CFDB6203E5" data-function-name="gather_request"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#203D98CFDB6203E5">\xb6</a><code class="hdoc-function-code language-cpp">gather_request(void* allocation,\n               size_t chunk_size,\n               size_t num_total_chunks)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L41">include/receive_arbiter.h:41</a></p><h4>Parameters</h4><dl><dt class="is-family-code">void*<b> allocation</b></dt><dt class="is-family-code">size_t<b> chunk_size</b></dt><dt class="is-family-code">size_t<b> num_total_chunks</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',n={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct gather_request"},c=void 0,l={id:"api/records/E37F713BAC9F4587",title:"struct gather_request",description:"",source:"@site/celerity-runtime/docs/api/records/E37F713BAC9F4587.mdx",sourceDirName:"api/records",slug:"/api/records/E37F713BAC9F4587",permalink:"/docs/api/records/E37F713BAC9F4587",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct gather_request"},sidebar:"api"},o={},d=[];function p(e){const{Head:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t,{children:[(0,a.jsx)("script",{src:"/js/highlight.min.js"}),(0,a.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>c});var a=i(96540);const s={},r=a.createContext(s);function n(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);