"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69071],{7540:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var s=i(74848),n=i(28453);const a='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>function box_cast: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page6186FA4BC2CD4C48"><span>function box_cast</span></a></li></ul></nav><main class="content"><h3 id="6186FA4BC2CD4C48" data-function-name="box_cast"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#6186FA4BC2CD4C48">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;int DimsOut, int DimsIn&gt;\nbox&lt;DimsOut&gt; box_cast(const box&lt;DimsIn&gt;&amp; in)</code></pre></h3><h4>Description</h4><p><p>Boxes can be cast between dimensionalities as long as no information is lost (i.e. a cast to a higher dimensionality is always round-trip safe).</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/grid.h#L147">include/grid.h:147</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code">int<b> DimsOut</b></dt><dt class="is-family-code">int<b> DimsIn</b></dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">const box&lt;DimsIn&gt;&amp;<b> in</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',c={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function box_cast"},l=void 0,o={id:"api/functions/celerity_detail-box_cast",title:"function box_cast",description:"",source:"@site/celerity-runtime/docs/api/functions/celerity_detail-box_cast.mdx",sourceDirName:"api/functions",slug:"/api/functions/celerity_detail-box_cast",permalink:"/docs/api/functions/celerity_detail-box_cast",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function box_cast"},sidebar:"api"},r={},d=[];function p(e){const{Head:t}={...(0,n.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t,{children:[(0,s.jsx)("script",{src:"/js/highlight.min.js"}),(0,s.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:a}})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>l});var s=i(96540);const n={},a=s.createContext(n);function c(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);