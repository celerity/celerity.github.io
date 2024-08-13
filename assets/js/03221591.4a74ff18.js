"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77120],{94114:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=i(74848),a=i(28453);const n='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>struct nd_copy_layout::stride_dimension: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/records/C9E3AB03F37EB04A/"><span>struct nd_copy_layout</span></a></li><li class="is-active"><a aria-current="pageD6B17A8F7B03FFD6"><span>struct nd_copy_layout::stride_dimension</span></a></li></ul></nav><main class="content"><h1>struct nd_copy_layout::stride_dimension</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct nd_copy_layout::stride_dimension { /* full declaration omitted */ };</code></pre><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/nd_memory.h#L12">include/nd_memory.h:12</a></p><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_source_stride" data-member-name="source_stride">  size_t <b>source_stride</b> = 1</dt><dd>by how many bytes to advance the source pointer after one step in this dimension.</dd><dt class="is-family-code" id="var_dest_stride" data-member-name="dest_stride">  size_t <b>dest_stride</b> = 1</dt><dd>by how many bytes to advance the destination pointer after one step in this dimension.</dd><dt class="is-family-code" id="var_count" data-member-name="count">  size_t <b>count</b> = 1</dt><dd>how many iterations to perform in this dimension.</dd></dl><h2>Friend Function Overview</h2><ul><li class="is-family-code"><a href="#6ED1AF5875BD3D39"><b>operator!=</b></a>(const stride_dimension &amp; lhs, const stride_dimension &amp; rhs) &rarr; friend bool</li><li class="is-family-code"><a href="#0BCC3AD9B75672D6"><b>operator==</b></a>(const stride_dimension &amp; lhs, const stride_dimension &amp; rhs) &rarr; friend bool</li></ul><h2>Friend Functions</h2><h3 id="6ED1AF5875BD3D39" data-function-name="operator!="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#6ED1AF5875BD3D39">\xb6</a><code class="hdoc-function-code language-cpp">friend bool operator!=(\n    const <a href="/docs/api/records/D6B17A8F7B03FFD6/">stride_dimension</a>&amp; lhs,\n    const <a href="/docs/api/records/D6B17A8F7B03FFD6/">stride_dimension</a>&amp; rhs)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/nd_memory.h#L21">include/nd_memory.h:21</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/D6B17A8F7B03FFD6/">stride_dimension</a>&amp;<b> lhs</b></dt><dt class="is-family-code">const <a href="/docs/api/records/D6B17A8F7B03FFD6/">stride_dimension</a>&amp;<b> rhs</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="0BCC3AD9B75672D6" data-function-name="operator=="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#0BCC3AD9B75672D6">\xb6</a><code class="hdoc-function-code language-cpp">friend bool operator==(\n    const <a href="/docs/api/records/D6B17A8F7B03FFD6/">stride_dimension</a>&amp; lhs,\n    const <a href="/docs/api/records/D6B17A8F7B03FFD6/">stride_dimension</a>&amp; rhs)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/nd_memory.h#L17">include/nd_memory.h:17</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/D6B17A8F7B03FFD6/">stride_dimension</a>&amp;<b> lhs</b></dt><dt class="is-family-code">const <a href="/docs/api/records/D6B17A8F7B03FFD6/">stride_dimension</a>&amp;<b> rhs</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',r={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct nd_copy_layout::stride_dimension"},o=void 0,c={id:"api/records/D6B17A8F7B03FFD6",title:"struct nd_copy_layout::stride_dimension",description:"",source:"@site/celerity-runtime/docs/api/records/D6B17A8F7B03FFD6.mdx",sourceDirName:"api/records",slug:"/api/records/D6B17A8F7B03FFD6",permalink:"/docs/api/records/D6B17A8F7B03FFD6",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct nd_copy_layout::stride_dimension"},sidebar:"api"},d={},l=[];function p(e){const{Head:s}={...(0,a.R)(),...e.components};return s||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})]})}function m(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>o});var t=i(96540);const a={},n=t.createContext(a);function r(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);