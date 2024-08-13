"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65355],{9088:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var i=t(74848),r=t(28453);const s='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>struct thread_queue::impl: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/records/62C07277EB594DA2/"><span>class thread_queue</span></a></li><li class="is-active"><a aria-current="page879F5298931752A5"><span>struct thread_queue::impl</span></a></li></ul></nav><main class="content"><h1>struct thread_queue::impl</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct thread_queue::impl { /* full declaration omitted */ };</code></pre><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/thread_queue.h#L111">include/thread_queue.h:111</a></p><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_queue" data-member-name="queue">  <a href="/docs/api/records/0DE118E8B7E22055/">double_buffered_queue</a>&lt;job&gt; <b>queue</b></dt><dt class="is-family-code" id="var_enable_profiling" data-member-name="enable_profiling">  const bool <b>enable_profiling</b></dt><dt class="is-family-code" id="var_thread" data-member-name="thread">  <a href="https://en.cppreference.com/w/cpp/thread/thread">std::thread</a> <b>thread</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#28299213EB95106E"><b>execute</b></a>(job &amp; job) const &rarr; void</li><li class="is-family-code"><a href="#2A9764776E89B087"><b>impl</b></a>(std::string name, bool enable_profiling) &rarr; explicit</li><li class="is-family-code"><a href="#76555E69D403F1D4"><b>loop</b></a>() &rarr; void</li><li class="is-family-code"><a href="#2238D0E6DEC5B9FE"><b>thread_main</b></a>(const std::string &amp; name) &rarr; void</li></ul><h2>Member Functions</h2><h3 id="28299213EB95106E" data-function-name="execute"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#28299213EB95106E">\xb6</a><code class="hdoc-function-code language-cpp">void execute(<a href="/docs/api/records/70F0EF84997DA0B5/">job</a>&amp; job) const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/thread_queue.h#L118">include/thread_queue.h:118</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/70F0EF84997DA0B5/">job</a>&amp;<b> job</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="2A9764776E89B087" data-function-name="impl"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#2A9764776E89B087">\xb6</a><code class="hdoc-function-code language-cpp">explicit impl(<a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a> name,\n              bool enable_profiling)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/thread_queue.h#L116">include/thread_queue.h:116</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a><b> name</b></dt><dt class="is-family-code">bool<b> enable_profiling</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="76555E69D403F1D4" data-function-name="loop"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#76555E69D403F1D4">\xb6</a><code class="hdoc-function-code language-cpp">void loop()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/thread_queue.h#L132">include/thread_queue.h:132</a></p><hr class="member-fun-separator"></hr><h3 id="2238D0E6DEC5B9FE" data-function-name="thread_main"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#2238D0E6DEC5B9FE">\xb6</a><code class="hdoc-function-code language-cpp">void thread_main(const <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a>&amp; name)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/thread_queue.h#L142">include/thread_queue.h:142</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a>&amp;<b> name</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',c={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct thread_queue::impl"},n=void 0,l={id:"api/records/879F5298931752A5",title:"struct thread_queue::impl",description:"",source:"@site/celerity-runtime/docs/api/records/879F5298931752A5.mdx",sourceDirName:"api/records",slug:"/api/records/879F5298931752A5",permalink:"/docs/api/records/879F5298931752A5",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct thread_queue::impl"},sidebar:"api"},o={},d=[];function p(e){const{Head:a}={...(0,r.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a,{children:[(0,i.jsx)("script",{src:"/js/highlight.min.js"}),(0,i.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>c,x:()=>n});var i=t(96540);const r={},s=i.createContext(r);function c(e){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:a},e.children)}}}]);