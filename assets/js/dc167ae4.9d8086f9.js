"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25550],{77195:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var s=t(74848),c=t(28453);const n='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>class async_event_impl: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page073311E635D32F96"><span>class async_event_impl</span></a></li></ul></nav><main class="content"><h1>class async_event_impl</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class async_event_impl { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>Abstract base class for <code>async_event</code> implementations.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/async_event.h#L12">include/async_event.h:12</a></p><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#18382DC62DEBA31D"><b>async_event_impl</b></a>()</li><li class="is-family-code"><a href="#549A8BE53BD390DA"><b>async_event_impl</b></a>(const async_event_impl &amp;)</li><li class="is-family-code"><a href="#6714417D2C6D8DBC"><b>async_event_impl</b></a>(async_event_impl &amp;&amp;)</li><li class="is-family-code"><a href="#586AC2FBEF390DDA"><b>get_native_execution_time</b></a>() &rarr; virtual std::optional&lt;std::chrono::nanoseconds&gt;</li><li class="is-family-code"><a href="#BBCC63BE793ABAF2"><b>get_result</b></a>() &rarr; virtual void *</li><li class="is-family-code"><a href="#C0338F7BBBCA1682"><b>is_complete</b></a>() &rarr; virtual bool</li><li class="is-family-code"><a href="#956FA9230ED98EAA"><b>operator=</b></a>(const async_event_impl &amp;) &rarr; async_event_impl &amp;</li><li class="is-family-code"><a href="#0094266AA4523532"><b>operator=</b></a>(async_event_impl &amp;&amp;) &rarr; async_event_impl &amp;</li><li class="is-family-code"><a href="#8F63EE20D9979948"><b>~async_event_impl</b></a>() &rarr; virtual</li></ul><h2>Member Functions</h2><h3 id="18382DC62DEBA31D" data-function-name="async_event_impl"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#18382DC62DEBA31D">\xb6</a><code class="hdoc-function-code language-cpp">async_event_impl()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/async_event.h#L14">include/async_event.h:14</a></p><hr class="member-fun-separator"></hr><h3 id="549A8BE53BD390DA" data-function-name="async_event_impl"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#549A8BE53BD390DA">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/073311E635D32F96/">async_event_impl</a>(const async_event_impl&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/async_event.h#L15">include/async_event.h:15</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/073311E635D32F96/">async_event_impl</a>&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="6714417D2C6D8DBC" data-function-name="async_event_impl"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#6714417D2C6D8DBC">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/073311E635D32F96/">async_event_impl</a>(async_event_impl&amp;&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/async_event.h#L16">include/async_event.h:16</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/073311E635D32F96/">async_event_impl</a>&amp;&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="586AC2FBEF390DDA" data-function-name="get_native_execution_time"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#586AC2FBEF390DDA">\xb6</a><code class="hdoc-function-code language-cpp">virtual <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;std::chrono::nanoseconds&gt;\nget_native_execution_time()</code></pre></h3><h4>Description</h4><p><p>Returns the time execution time as measured if profiling was enabled in the issuing component. Requires <code>is_complete()</code> to be true.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/async_event.h#L30">include/async_event.h:30</a></p><hr class="member-fun-separator"></hr><h3 id="BBCC63BE793ABAF2" data-function-name="get_result"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#BBCC63BE793ABAF2">\xb6</a><code class="hdoc-function-code language-cpp">virtual void* get_result()</code></pre></h3><h4>Description</h4><p><p>There is only one instruction type which returns a result, namely alloc_instruction returning a pointer to the allocated memory, i.e. a void*. Having a void* return type on async_event_impl is somewhat leaky, but we don\'t gain much by wrapping it in a std::any.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/async_event.h#L27">include/async_event.h:27</a></p><hr class="member-fun-separator"></hr><h3 id="C0338F7BBBCA1682" data-function-name="is_complete"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#C0338F7BBBCA1682">\xb6</a><code class="hdoc-function-code language-cpp">virtual bool is_complete()</code></pre></h3><h4>Description</h4><p><p>If this function returns true once, the implementation must guarantee that it will always do so in the future. The event is expected to be cheap to poll repeatedly, and the operation must proceed in the background even while not being polled.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/async_event.h#L23">include/async_event.h:23</a></p><hr class="member-fun-separator"></hr><h3 id="956FA9230ED98EAA" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#956FA9230ED98EAA">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/073311E635D32F96/">async_event_impl</a>&amp; operator=(\n    const <a href="/docs/api/records/073311E635D32F96/">async_event_impl</a>&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/async_event.h#L17">include/async_event.h:17</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/073311E635D32F96/">async_event_impl</a>&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="0094266AA4523532" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#0094266AA4523532">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/073311E635D32F96/">async_event_impl</a>&amp; operator=(<a href="/docs/api/records/073311E635D32F96/">async_event_impl</a>&amp;&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/async_event.h#L18">include/async_event.h:18</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/073311E635D32F96/">async_event_impl</a>&amp;&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="8F63EE20D9979948" data-function-name="~async_event_impl"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#8F63EE20D9979948">\xb6</a><code class="hdoc-function-code language-cpp">virtual ~async_event_impl()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/async_event.h#L19">include/async_event.h:19</a></p><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',i={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class async_event_impl"},r=void 0,l={id:"api/records/073311E635D32F96",title:"class async_event_impl",description:"",source:"@site/celerity-runtime/docs/api/records/073311E635D32F96.mdx",sourceDirName:"api/records",slug:"/api/records/073311E635D32F96",permalink:"/docs/api/records/073311E635D32F96",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class async_event_impl"},sidebar:"api"},o={},p=[];function d(e){const{Head:a}={...(0,c.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a,{children:[(0,s.jsx)("script",{src:"/js/highlight.min.js"}),(0,s.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})]})}function h(e={}){const{wrapper:a}={...(0,c.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>r});var s=t(96540);const c={},n=s.createContext(c);function i(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);