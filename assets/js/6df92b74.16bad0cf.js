"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29379],{59425:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var t=i(74848),a=i(28453);const r='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>function invoke_range_mapper_for_kernel: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="pageEF8EF8223FA487F7"><span>function invoke_range_mapper_for_kernel</span></a></li></ul></nav><main class="content"><h3 id="EF8EF8223FA487F7" data-function-name="invoke_range_mapper_for_kernel"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#EF8EF8223FA487F7">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;int KernelDims,\n          int BufferDims,\n          typename Functor&gt;\nsubrange&lt;BufferDims&gt;\ninvoke_range_mapper_for_kernel(\n    Functor&amp;&amp; fn,\n    const celerity::chunk&lt;KernelDims&gt;&amp; chunk,\n    const range&lt;BufferDims&gt;&amp; buffer_size)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/range_mapper.h#L45">include/range_mapper.h:45</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code">int<b> KernelDims</b></dt><dt class="is-family-code">int<b> BufferDims</b></dt><dt class="is-family-code"><b> Functor</b></dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">Functor&amp;&amp;<b> fn</b></dt><dt class="is-family-code">const celerity::chunk&lt;KernelDims&gt;&amp;<b> chunk</b></dt><dt class="is-family-code">const range&lt;BufferDims&gt;&amp;<b> buffer_size</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',s={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function invoke_range_mapper_for_kernel"},l=void 0,c={id:"api/functions/celerity_detail-invoke_range_mapper_for_kernel",title:"function invoke_range_mapper_for_kernel",description:"",source:"@site/celerity-runtime/docs/api/functions/celerity_detail-invoke_range_mapper_for_kernel.mdx",sourceDirName:"api/functions",slug:"/api/functions/celerity_detail-invoke_range_mapper_for_kernel",permalink:"/docs/api/functions/celerity_detail-invoke_range_mapper_for_kernel",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function invoke_range_mapper_for_kernel"},sidebar:"api"},o={},p=[];function d(e){const{Head:n}={...(0,a.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(96540);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);