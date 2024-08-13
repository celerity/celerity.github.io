"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9854],{44870:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=a(74848),i=a(28453);const n='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>struct thread_queue::job: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/records/62C07277EB594DA2/"><span>class thread_queue</span></a></li><li class="is-active"><a aria-current="page70F0EF84997DA0B5"><span>struct thread_queue::job</span></a></li></ul></nav><main class="content"><h1>struct thread_queue::job</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct thread_queue::job { /* full declaration omitted */ };</code></pre><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/thread_queue.h#L63">include/thread_queue.h:63</a></p><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_fn" data-member-name="fn">  <a href="https://en.cppreference.com/w/cpp/utility/functional/function">std::function</a>&lt;void*()&gt; <b>fn</b></dt><dt class="is-family-code" id="var_promise" data-member-name="promise">  <a href="https://en.cppreference.com/w/cpp/thread/promise">std::promise</a>&lt;completion&gt; <b>promise</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#AB5608237EE26299"><b>job</b></a>()</li><li class="is-family-code"><span class="hdoc-overview-template">template &lt;typename Fn, std::enable_if_t&lt;std::is_void_v&lt;std::invoke_result_t&lt;std::decay_t&lt;Fn&gt;&gt;&gt;, int&gt;  = 0&gt;</span><br><a href="#420ACFE81C229C1F"><b>job</b></a>(Fn &amp;&amp; fn)</li><li class="is-family-code"><span class="hdoc-overview-template">template &lt;typename Fn, std::enable_if_t&lt;std::is_convertible_v&lt;std::invoke_result_t&lt;std::decay_t&lt;Fn&gt;&gt;, void *&gt;, int&gt;  = 0&gt;</span><br><a href="#C7263B3EA4160F88"><b>job</b></a>(Fn &amp;&amp; fn)</li></ul><h2>Member Functions</h2><h3 id="AB5608237EE26299" data-function-name="job"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#AB5608237EE26299">\xb6</a><code class="hdoc-function-code language-cpp">job()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/thread_queue.h#L67">include/thread_queue.h:67</a></p><hr class="member-fun-separator"></hr><h3 id="420ACFE81C229C1F" data-function-name="job"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#420ACFE81C229C1F">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;typename Fn,\n          std::enable_if_t&lt;\n              std::is_void_v&lt;std::invoke_result_t&lt;\n                  std::decay_t&lt;Fn&gt;&gt;&gt;,\n              int&gt; = 0&gt;\njob(Fn&amp;&amp; fn)</code></pre></h3><h4>Description</h4><p><p>Constructor overload for <code>fn</code> returning <code>void</code>.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/thread_queue.h#L71">include/thread_queue.h:71</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code"><b> Fn</b></dt><dt class="is-family-code">std::enable_if_t&lt;std::is_void_v&lt;std::invoke_result_t&lt;std::decay_t&lt;Fn&gt;&gt;&gt;, int&gt;<b> </b> = 0</dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">Fn&amp;&amp;<b> fn</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="C7263B3EA4160F88" data-function-name="job"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#C7263B3EA4160F88">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;\n    typename Fn,\n    std::enable_if_t&lt;std::is_convertible_v&lt;\n                         std::invoke_result_t&lt;\n                             std::decay_t&lt;Fn&gt;&gt;,\n                         void*&gt;,\n                     int&gt; = 0&gt;\njob(Fn&amp;&amp; fn)</code></pre></h3><h4>Description</h4><p><p>Constructor overload for <code>fn</code> returning <code>void*</code>.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/thread_queue.h#L75">include/thread_queue.h:75</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code"><b> Fn</b></dt><dt class="is-family-code">std::enable_if_t&lt;std::is_convertible_v&lt;std::invoke_result_t&lt;std::decay_t&lt;Fn&gt;&gt;, void *&gt;, int&gt;<b> </b> = 0</dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">Fn&amp;&amp;<b> fn</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',l={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct thread_queue::job"},r=void 0,c={id:"api/records/70F0EF84997DA0B5",title:"struct thread_queue::job",description:"",source:"@site/celerity-runtime/docs/api/records/70F0EF84997DA0B5.mdx",sourceDirName:"api/records",slug:"/api/records/70F0EF84997DA0B5",permalink:"/docs/api/records/70F0EF84997DA0B5",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct thread_queue::job"},sidebar:"api"},o={},d=[];function p(e){const{Head:t}={...(0,i.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t,{children:[(0,s.jsx)("script",{src:"/js/highlight.min.js"}),(0,s.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>r});var s=a(96540);const i={},n=s.createContext(i);function l(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);