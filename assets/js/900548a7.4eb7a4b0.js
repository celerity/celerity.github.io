"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84381],{30925:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=i(74848),n=i(28453);const s='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>function reduction_impl: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page950C73806C0CEE0B"><span>function reduction_impl</span></a></li></ul></nav><main class="content"><h3 id="950C73806C0CEE0B" data-function-name="reduction_impl"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#950C73806C0CEE0B">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;typename DataT,\n          int Dims,\n          typename BinaryOperation&gt;\nauto reduction_impl(\n    const buffer&lt;DataT, Dims&gt;&amp; vars,\n    <a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp; cgh,\n    DataT identity,\n    BinaryOperation combiner,\n    const sycl::property_list&amp; prop_list = {})</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/handler.h#L619">include/handler.h:619</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code"><b> DataT</b></dt><dt class="is-family-code">int<b> Dims</b></dt><dt class="is-family-code"><b> BinaryOperation</b></dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">const buffer&lt;DataT, Dims&gt;&amp;<b> vars</b></dt><dt class="is-family-code"><a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp;<b> cgh</b></dt><dt class="is-family-code">DataT<b> identity</b></dt><dt class="is-family-code">BinaryOperation<b> combiner</b></dt><dt class="is-family-code">const sycl::property_list&amp;<b> prop_list</b> = {}</dt></dl><hr class="member-fun-separator"></hr><h3 id="F96BD0C91FDC9D2C" data-function-name="reduction_impl"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#F96BD0C91FDC9D2C">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;typename DataT,\n          int Dims,\n          typename BinaryOperation&gt;\nauto reduction_impl(\n    const buffer&lt;DataT, Dims&gt;&amp; vars,\n    <a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp; cgh,\n    BinaryOperation combiner,\n    const sycl::property_list&amp; prop_list = {})</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/handler.h#L611">include/handler.h:611</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code"><b> DataT</b></dt><dt class="is-family-code">int<b> Dims</b></dt><dt class="is-family-code"><b> BinaryOperation</b></dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">const buffer&lt;DataT, Dims&gt;&amp;<b> vars</b></dt><dt class="is-family-code"><a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp;<b> cgh</b></dt><dt class="is-family-code">BinaryOperation<b> combiner</b></dt><dt class="is-family-code">const sycl::property_list&amp;<b> prop_list</b> = {}</dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',r={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function reduction_impl"},l=void 0,c={id:"api/functions/celerity_detail-reduction_impl",title:"function reduction_impl",description:"",source:"@site/celerity-runtime/docs/api/functions/celerity_detail-reduction_impl.mdx",sourceDirName:"api/functions",slug:"/api/functions/celerity_detail-reduction_impl",permalink:"/docs/api/functions/celerity_detail-reduction_impl",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function reduction_impl"},sidebar:"api"},o={},d=[];function p(e){const{Head:t}={...(0,n.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t,{children:[(0,a.jsx)("script",{src:"/js/highlight.min.js"}),(0,a.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>l});var a=i(96540);const n={},s=a.createContext(n);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);