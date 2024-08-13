"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27457],{92322:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>n,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var s=t(74848),i=t(28453);const l='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>class id: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li class="is-active"><a aria-current="page9A5CC4DFBBD48E5E"><span>class id</span></a></li></ul></nav><main class="content"><h1>class id</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">template &lt;int Dims = 1&gt;\nclass id { /* full declaration omitted */ };</code></pre><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/ranges.h#L294">include/ranges.h:294</a></p><h2>Template Parameters</h2><dl><dt class="is-family-code">int<b> Dims</b> = 1</dt></dl><h2>Member Aliases</h2><ul><li class="is-family-code hdoc-private">using coordinate =\n    detail::coordinate&lt;id&lt;Dims&gt;, Dims&gt;;</li></ul><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#F62BBF8614C319D1"><b>id</b></a>() noexcept</li><li class="is-family-code"><a href="#D136C787A30D515A"><b>id</b></a>(const range&lt;Dims&gt; &amp; range) &rarr; constexpr</li><li class="is-family-code"><a href="#25F10DD3F133CD45"><b>id</b></a>(detail::zeros_t) &rarr; constexpr</li><li class="is-family-code"><a href="#FE27D06A845E171D"><b>id</b></a>(detail::ones_t) &rarr; constexpr</li><li class="is-family-code"><span class="hdoc-overview-template">template &lt;typename... Values, typename  = std::enable_if_t&lt;sizeof...(Values) + 1 == Dims&gt;&gt;</span><br><a href="#92E6F4F319C9F464"><b>id</b></a>(size_t dim_0, const Values... dim_n) &rarr; constexpr</li><li class="is-family-code"><span class="hdoc-overview-template">template &lt;int D = Dims, typename  = std::enable_if_t&lt;D &gt;= 1 &amp;&amp; D &lt;= 3&gt;&gt;</span><br><a href="#234C0898A73C1C31"><b>id</b></a>(const sycl::id&lt;Dims&gt; &amp; sycl_id)</li><li class="is-family-code"><span class="hdoc-overview-template">template &lt;int D = Dims, typename  = std::enable_if_t&lt;D &gt;= 1 &amp;&amp; D &lt;= 3&gt;&gt;</span><br><a href="#81E0E7CF2B91B652"><b>operator id&lt;Dimensions&gt;</b></a>() const</li><li class="is-family-code hdoc-private"><span class="hdoc-overview-template">template &lt;typename InterfaceIn, int DimsIn&gt;</span><br><a href="#4372A9E0D14DD939"><b>id</b></a>(detail::make_from_t, const detail::coordinate&lt;InterfaceIn, DimsIn&gt; &amp; in) &rarr; constexpr</li></ul><h2>Member Functions</h2><h3 id="F62BBF8614C319D1" data-function-name="id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#F62BBF8614C319D1">\xb6</a><code class="hdoc-function-code language-cpp">id() noexcept</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/ranges.h#L299">include/ranges.h:299</a></p><hr class="member-fun-separator"></hr><h3 id="D136C787A30D515A" data-function-name="id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#D136C787A30D515A">\xb6</a><code class="hdoc-function-code language-cpp">constexpr id(const range&lt;Dims&gt;&amp; range)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/ranges.h#L304">include/ranges.h:304</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const range&lt;Dims&gt;&amp;<b> range</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="25F10DD3F133CD45" data-function-name="id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#25F10DD3F133CD45">\xb6</a><code class="hdoc-function-code language-cpp">constexpr id(<a href="/docs/api/records/3BE4671277B3C6EE/">detail::zeros_t</a>)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/ranges.h#L306">include/ranges.h:306</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/3BE4671277B3C6EE/">detail::zeros_t</a><b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="FE27D06A845E171D" data-function-name="id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#FE27D06A845E171D">\xb6</a><code class="hdoc-function-code language-cpp">constexpr id(<a href="/docs/api/records/D9FE7BF5EB1236F8/">detail::ones_t</a>)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/ranges.h#L308">include/ranges.h:308</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/D9FE7BF5EB1236F8/">detail::ones_t</a><b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="92E6F4F319C9F464" data-function-name="id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#92E6F4F319C9F464">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;typename... Values,\n          typename = std::enable_if_t&lt;\n              sizeof...(Values) + 1 == Dims&gt;&gt;\nconstexpr id(size_t dim_0, const Values... dim_n)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/ranges.h#L302">include/ranges.h:302</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code"><b> Values</b></dt><dt class="is-family-code"><b> </b> = std::enable_if_t&lt;sizeof...(Values) + 1 == Dims&gt;</dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">size_t<b> dim_0</b></dt><dt class="is-family-code">const Values...<b> dim_n</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="234C0898A73C1C31" data-function-name="id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#234C0898A73C1C31">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;\n    int D = Dims,\n    typename = std::enable_if_t&lt;D &gt;= 1 &amp;&amp; D &lt;= 3&gt;&gt;\nid(const sycl::id&lt;Dims&gt;&amp; sycl_id)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/ranges.h#L315">include/ranges.h:315</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code">int<b> D</b> = Dims</dt><dt class="is-family-code"><b> </b> = std::enable_if_t&lt;D &gt;= 1 &amp;&amp; D &lt;= 3&gt;</dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">const sycl::id&lt;Dims&gt;&amp;<b> sycl_id</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="81E0E7CF2B91B652" data-function-name="operator id&lt;Dimensions&gt;"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#81E0E7CF2B91B652">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;\n    int D = Dims,\n    typename = std::enable_if_t&lt;D &gt;= 1 &amp;&amp; D &lt;= 3&gt;&gt;\noperator id&lt;Dimensions&gt;() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/ranges.h#L322">include/ranges.h:322</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code">int<b> D</b> = Dims</dt><dt class="is-family-code"><b> </b> = std::enable_if_t&lt;D &gt;= 1 &amp;&amp; D &lt;= 3&gt;</dt></dl><hr class="member-fun-separator"></hr><h3 id="4372A9E0D14DD939" data-function-name="id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#4372A9E0D14DD939">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;typename InterfaceIn, int DimsIn&gt;\nconstexpr id(<a href="/docs/api/records/871ACFC24FEBE3F8/">detail::make_from_t</a>,\n             const detail::coordinate&lt;InterfaceIn,\n                                      DimsIn&gt;&amp; in)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/ranges.h#L337">include/ranges.h:337</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code"><b> InterfaceIn</b></dt><dt class="is-family-code">int<b> DimsIn</b></dt></dl><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/871ACFC24FEBE3F8/">detail::make_from_t</a><b> </b></dt><dt class="is-family-code">const detail::coordinate&lt;InterfaceIn, DimsIn&gt;&amp;<b> in</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',c={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class id"},n=void 0,r={id:"api/records/9A5CC4DFBBD48E5E",title:"class id",description:"",source:"@site/celerity-runtime/docs/api/records/9A5CC4DFBBD48E5E.mdx",sourceDirName:"api/records",slug:"/api/records/9A5CC4DFBBD48E5E",permalink:"/docs/api/records/9A5CC4DFBBD48E5E",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class id"},sidebar:"api"},d={},o=[];function p(e){const{Head:a}={...(0,i.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a,{children:[(0,s.jsx)("script",{src:"/js/highlight.min.js"}),(0,s.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:l}})]})}function m(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>c,x:()=>n});var s=t(96540);const i={},l=s.createContext(i);function c(e){const a=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(l.Provider,{value:a},e.children)}}}]);