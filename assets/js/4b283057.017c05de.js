"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78914],{88181:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(74848),s=t(28453);const n='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>function reduction: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li class="is-active"><a aria-current="page5056FCE09FF8C4F1"><span>function reduction</span></a></li></ul></nav><main class="content"><h3 id="5056FCE09FF8C4F1" data-function-name="reduction"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#5056FCE09FF8C4F1">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;typename DataT,\n          int Dims,\n          typename BinaryOperation&gt;\nauto reduction(\n    const buffer&lt;DataT, Dims&gt;&amp; vars,\n    <a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp; cgh,\n    DataT identity,\n    BinaryOperation combiner,\n    const sycl::property_list&amp; prop_list = {})</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/handler.h#L644">include/handler.h:644</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code"><b> DataT</b></dt><dt class="is-family-code">int<b> Dims</b></dt><dt class="is-family-code"><b> BinaryOperation</b></dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">const buffer&lt;DataT, Dims&gt;&amp;<b> vars</b></dt><dt class="is-family-code"><a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp;<b> cgh</b></dt><dt class="is-family-code">DataT<b> identity</b></dt><dt class="is-family-code">BinaryOperation<b> combiner</b></dt><dt class="is-family-code">const sycl::property_list&amp;<b> prop_list</b> = {}</dt></dl><hr class="member-fun-separator"></hr><h3 id="981C608FF79930A5" data-function-name="reduction"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#981C608FF79930A5">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;typename DataT,\n          int Dims,\n          typename BinaryOperation&gt;\nauto reduction(\n    buffer&lt;DataT, Dims&gt;&amp; vars,\n    <a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp; cgh,\n    DataT identity,\n    BinaryOperation combiner,\n    const sycl::property_list&amp; prop_list = {})</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/handler.h#L633">include/handler.h:633</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code"><b> DataT</b></dt><dt class="is-family-code">int<b> Dims</b></dt><dt class="is-family-code"><b> BinaryOperation</b></dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">buffer&lt;DataT, Dims&gt;&amp;<b> vars</b></dt><dt class="is-family-code"><a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp;<b> cgh</b></dt><dt class="is-family-code">DataT<b> identity</b></dt><dt class="is-family-code">BinaryOperation<b> combiner</b></dt><dt class="is-family-code">const sycl::property_list&amp;<b> prop_list</b> = {}</dt></dl><hr class="member-fun-separator"></hr><h3 id="CEFCF368C1095F04" data-function-name="reduction"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#CEFCF368C1095F04">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;typename DataT,\n          int Dims,\n          typename BinaryOperation&gt;\nauto reduction(\n    buffer&lt;DataT, Dims&gt;&amp; vars,\n    <a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp; cgh,\n    BinaryOperation combiner,\n    const sycl::property_list&amp; prop_list = {})</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/handler.h#L628">include/handler.h:628</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code"><b> DataT</b></dt><dt class="is-family-code">int<b> Dims</b></dt><dt class="is-family-code"><b> BinaryOperation</b></dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">buffer&lt;DataT, Dims&gt;&amp;<b> vars</b></dt><dt class="is-family-code"><a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp;<b> cgh</b></dt><dt class="is-family-code">BinaryOperation<b> combiner</b></dt><dt class="is-family-code">const sycl::property_list&amp;<b> prop_list</b> = {}</dt></dl><hr class="member-fun-separator"></hr><h3 id="5E2E5D626C51CF1B" data-function-name="reduction"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#5E2E5D626C51CF1B">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;typename DataT,\n          int Dims,\n          typename BinaryOperation&gt;\nauto reduction(\n    const buffer&lt;DataT, Dims&gt;&amp; vars,\n    <a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp; cgh,\n    BinaryOperation combiner,\n    const sycl::property_list&amp; prop_list = {})</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/handler.h#L638">include/handler.h:638</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code"><b> DataT</b></dt><dt class="is-family-code">int<b> Dims</b></dt><dt class="is-family-code"><b> BinaryOperation</b></dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">const buffer&lt;DataT, Dims&gt;&amp;<b> vars</b></dt><dt class="is-family-code"><a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp;<b> cgh</b></dt><dt class="is-family-code">BinaryOperation<b> combiner</b></dt><dt class="is-family-code">const sycl::property_list&amp;<b> prop_list</b> = {}</dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',r={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function reduction"},c=void 0,l={id:"api/functions/celerity-reduction",title:"function reduction",description:"",source:"@site/celerity-runtime/docs/api/functions/celerity-reduction.mdx",sourceDirName:"api/functions",slug:"/api/functions/celerity-reduction",permalink:"/docs/api/functions/celerity-reduction",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function reduction"},sidebar:"api"},o={},d=[];function p(e){const{Head:a}={...(0,s.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a,{children:[(0,i.jsx)("script",{src:"/js/highlight.min.js"}),(0,i.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})]})}function m(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>c});var i=t(96540);const s={},n=i.createContext(s);function r(e){const a=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:a},e.children)}}}]);