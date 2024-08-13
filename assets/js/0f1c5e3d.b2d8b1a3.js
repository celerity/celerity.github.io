"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77306],{33734:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var t=s(74848),i=s(28453);const r='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>struct chunk: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li class="is-active"><a aria-current="page5911309998BAB26F"><span>struct chunk</span></a></li></ul></nav><main class="content"><h1>struct chunk</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">template &lt;int Dims = 1&gt;\nstruct chunk { /* full declaration omitted */ };</code></pre><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/ranges.h#L470">include/ranges.h:470</a></p><h2>Template Parameters</h2><dl><dt class="is-family-code">int<b> Dims</b> = 1</dt></dl><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_offset" data-member-name="offset">  id&lt;Dims&gt; <b>offset</b></dt><dt class="is-family-code" id="var_range" data-member-name="range">  celerity::range&lt;Dims&gt; <b>range</b> = detail::zeros</dt><dt class="is-family-code" id="var_global_size" data-member-name="global_size">  celerity::range&lt;Dims&gt; <b>global_size</b> = detail::zeros</dt><dt class="is-family-code" id="var_dimensions" data-member-name="dimensions"> static  const int <b>dimensions</b> = Dims</dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#B8A14293DEB48051"><b>chunk</b></a>()</li><li class="is-family-code"><a href="#2CE9D485A9D37C8E"><b>chunk</b></a>(const id&lt;Dims&gt; &amp; offset, const celerity::range&lt;Dims&gt; &amp; range, const celerity::range&lt;Dims&gt; &amp; global_size) &rarr; constexpr</li></ul><h2>Friend Function Overview</h2><ul><li class="is-family-code"><a href="#149CF464962E925E"><b>operator!=</b></a>(const chunk&lt;Dims&gt; &amp; lhs, const chunk&lt;Dims&gt; &amp; rhs) &rarr; friend bool</li><li class="is-family-code"><a href="#52428D46E8CAEF37"><b>operator==</b></a>(const chunk&lt;Dims&gt; &amp; lhs, const chunk&lt;Dims&gt; &amp; rhs) &rarr; friend bool</li></ul><h2>Member Functions</h2><h3 id="B8A14293DEB48051" data-function-name="chunk"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#B8A14293DEB48051">\xb6</a><code class="hdoc-function-code language-cpp">chunk()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/ranges.h#L477">include/ranges.h:477</a></p><hr class="member-fun-separator"></hr><h3 id="2CE9D485A9D37C8E" data-function-name="chunk"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#2CE9D485A9D37C8E">\xb6</a><code class="hdoc-function-code language-cpp">constexpr chunk(\n    const id&lt;Dims&gt;&amp; offset,\n    const celerity::range&lt;Dims&gt;&amp; range,\n    const celerity::range&lt;Dims&gt;&amp; global_size)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/ranges.h#L479">include/ranges.h:479</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const id&lt;Dims&gt;&amp;<b> offset</b></dt><dt class="is-family-code">const celerity::range&lt;Dims&gt;&amp;<b> range</b></dt><dt class="is-family-code">const celerity::range&lt;Dims&gt;&amp;<b> global_size</b></dt></dl><hr class="member-fun-separator"></hr><h2>Friend Functions</h2><h3 id="149CF464962E925E" data-function-name="operator!="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#149CF464962E925E">\xb6</a><code class="hdoc-function-code language-cpp">friend bool operator!=(const <a href="/docs/api/records/5911309998BAB26F/">chunk</a>&lt;Dims&gt;&amp; lhs,\n                       const <a href="/docs/api/records/5911309998BAB26F/">chunk</a>&lt;Dims&gt;&amp; rhs)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/ranges.h#L485">include/ranges.h:485</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/5911309998BAB26F/">chunk</a>&lt;Dims&gt;&amp;<b> lhs</b></dt><dt class="is-family-code">const <a href="/docs/api/records/5911309998BAB26F/">chunk</a>&lt;Dims&gt;&amp;<b> rhs</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="52428D46E8CAEF37" data-function-name="operator=="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#52428D46E8CAEF37">\xb6</a><code class="hdoc-function-code language-cpp">friend bool operator==(const <a href="/docs/api/records/5911309998BAB26F/">chunk</a>&lt;Dims&gt;&amp; lhs,\n                       const <a href="/docs/api/records/5911309998BAB26F/">chunk</a>&lt;Dims&gt;&amp; rhs)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/ranges.h#L482">include/ranges.h:482</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/5911309998BAB26F/">chunk</a>&lt;Dims&gt;&amp;<b> lhs</b></dt><dt class="is-family-code">const <a href="/docs/api/records/5911309998BAB26F/">chunk</a>&lt;Dims&gt;&amp;<b> rhs</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',c={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct chunk"},n=void 0,l={id:"api/records/5911309998BAB26F",title:"struct chunk",description:"",source:"@site/celerity-runtime/docs/api/records/5911309998BAB26F.mdx",sourceDirName:"api/records",slug:"/api/records/5911309998BAB26F",permalink:"/docs/api/records/5911309998BAB26F",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct chunk"},sidebar:"api"},o={},d=[];function h(e){const{Head:a}={...(0,i.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]})}function m(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,a,s)=>{s.d(a,{R:()=>c,x:()=>n});var t=s(96540);const i={},r=t.createContext(i);function c(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);