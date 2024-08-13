"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87032],{88530:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var s=i(74848),a=i(28453);const r='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>struct box_coordinate_order: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page19A48EA2DB8C561C"><span>struct box_coordinate_order</span></a></li></ul></nav><main class="content"><h1>struct box_coordinate_order</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct box_coordinate_order { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>Comparison operator (similar to std::less) that orders boxes by their minimum, then their maximum, both starting with the first (&quot;slowest&quot;) dimension. This ordering is somewhat arbitrary but allows equality comparisons between ordered sequences of boxes (i.e., regions)</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/grid.h#L193">include/grid.h:193</a></p><h2>Member Function Overview</h2><ul><li class="is-family-code"><span class="hdoc-overview-template">template &lt;int Dims&gt;</span><br><a href="#A8834DA0FA116EEC"><b>operator()</b></a>(const box&lt;Dims&gt; &amp; lhs, const box&lt;Dims&gt; &amp; rhs) const &rarr; bool</li></ul><h2>Member Functions</h2><h3 id="A8834DA0FA116EEC" data-function-name="operator()"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#A8834DA0FA116EEC">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;int Dims&gt;\nbool operator()(const box&lt;Dims&gt;&amp; lhs,\n                const box&lt;Dims&gt;&amp; rhs) const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/grid.h#L195">include/grid.h:195</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code">int<b> Dims</b></dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">const box&lt;Dims&gt;&amp;<b> lhs</b></dt><dt class="is-family-code">const box&lt;Dims&gt;&amp;<b> rhs</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',n={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct box_coordinate_order"},o=void 0,c={id:"api/records/19A48EA2DB8C561C",title:"struct box_coordinate_order",description:"",source:"@site/celerity-runtime/docs/api/records/19A48EA2DB8C561C.mdx",sourceDirName:"api/records",slug:"/api/records/19A48EA2DB8C561C",permalink:"/docs/api/records/19A48EA2DB8C561C",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct box_coordinate_order"},sidebar:"api"},l={},d=[];function p(e){const{Head:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t,{children:[(0,s.jsx)("script",{src:"/js/highlight.min.js"}),(0,s.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>o});var s=i(96540);const a={},r=s.createContext(a);function n(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);