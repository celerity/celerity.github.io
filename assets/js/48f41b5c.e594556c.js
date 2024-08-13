"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64696],{24166:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(74848),n=t(28453);const a='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>function region_difference: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page7471BF55E4D3DB3B"><span>function region_difference</span></a></li></ul></nav><main class="content"><h3 id="7471BF55E4D3DB3B" data-function-name="region_difference"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#7471BF55E4D3DB3B">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;int Dims&gt;\nregion&lt;Dims&gt; region_difference(\n    const region&lt;Dims&gt;&amp; lhs,\n    const box&lt;Dims&gt;&amp; rhs)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/grid.h#L337">include/grid.h:337</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code">int<b> Dims</b></dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">const region&lt;Dims&gt;&amp;<b> lhs</b></dt><dt class="is-family-code">const box&lt;Dims&gt;&amp;<b> rhs</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="50C5F358D85B4FC3" data-function-name="region_difference"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#50C5F358D85B4FC3">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;int Dims&gt;\nregion&lt;Dims&gt; region_difference(\n    const box&lt;Dims&gt;&amp; lhs,\n    const box&lt;Dims&gt;&amp; rhs)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/grid.h#L347">include/grid.h:347</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code">int<b> Dims</b></dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">const box&lt;Dims&gt;&amp;<b> lhs</b></dt><dt class="is-family-code">const box&lt;Dims&gt;&amp;<b> rhs</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="0615507DD5BD5058" data-function-name="region_difference"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#0615507DD5BD5058">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;int Dims&gt;\nregion&lt;Dims&gt; region_difference(\n    const region&lt;Dims&gt;&amp; lhs,\n    const region&lt;Dims&gt;&amp; rhs)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/grid.h#L334">include/grid.h:334</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code">int<b> Dims</b></dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">const region&lt;Dims&gt;&amp;<b> lhs</b></dt><dt class="is-family-code">const region&lt;Dims&gt;&amp;<b> rhs</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="504C39091057CE4A" data-function-name="region_difference"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#504C39091057CE4A">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;int Dims&gt;\nregion&lt;Dims&gt; region_difference(\n    const box&lt;Dims&gt;&amp; lhs,\n    const region&lt;Dims&gt;&amp; rhs)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/grid.h#L342">include/grid.h:342</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code">int<b> Dims</b></dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">const box&lt;Dims&gt;&amp;<b> lhs</b></dt><dt class="is-family-code">const region&lt;Dims&gt;&amp;<b> rhs</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',r={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function region_difference"},c=void 0,l={id:"api/functions/celerity_detail-region_difference",title:"function region_difference",description:"",source:"@site/celerity-runtime/docs/api/functions/celerity_detail-region_difference.mdx",sourceDirName:"api/functions",slug:"/api/functions/celerity_detail-region_difference",permalink:"/docs/api/functions/celerity_detail-region_difference",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function region_difference"},sidebar:"api"},o={},d=[];function m(e){const{Head:i}={...(0,n.R)(),...e.components};return i||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i,{children:[(0,s.jsx)("script",{src:"/js/highlight.min.js"}),(0,s.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:a}})]})}function p(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>c});var s=t(96540);const n={},a=s.createContext(n);function r(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);