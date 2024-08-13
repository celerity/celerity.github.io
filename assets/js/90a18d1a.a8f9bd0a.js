"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7068],{57034:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>p});var i=a(74848),s=a(28453);const c='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>class complete_event: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page602A1902672330A6"><span>class complete_event</span></a></li></ul></nav><main class="content"><h1>class complete_event</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class complete_event : public async_event_impl { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p><code>async_event</code> implementation that is immediately complete. Used to report synchronous completion of some operations within an otherwise asynchronous context.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/async_event.h#L35">include/async_event.h:35</a></p><p>Inherits from: <a href="/docs/api/records/073311E635D32F96/">async_event_impl</a></p><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_result" data-member-name="m_result">  void* <b>m_result</b> = nullptr</dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#9C2C1EAF9FAFD5EE"><b>complete_event</b></a>()</li><li class="is-family-code"><a href="#7256431B4DA8DA3B"><b>complete_event</b></a>(void * result) &rarr; explicit</li><li class="is-family-code"><a href="#8590D49FDA6C253C"><b>get_result</b></a>() &rarr; void *</li><li class="is-family-code"><a href="#5999A20C98FF9C35"><b>is_complete</b></a>() &rarr; bool</li></ul><p>Inherited from <a href="/docs/api/records/073311E635D32F96/">async_event_impl</a>:</p><ul><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#586AC2FBEF390DDA">public <b>get_native_execution_time</b></a></li><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#BBCC63BE793ABAF2">public <b>get_result</b></a></li><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#C0338F7BBBCA1682">public <b>is_complete</b></a></li><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#956FA9230ED98EAA">public <b>operator=</b></a></li><li class="is-family-code"><a href="/docs/api/records/073311E635D32F96/#0094266AA4523532">public <b>operator=</b></a></li></ul><h2>Member Functions</h2><h3 id="9C2C1EAF9FAFD5EE" data-function-name="complete_event"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#9C2C1EAF9FAFD5EE">\xb6</a><code class="hdoc-function-code language-cpp">complete_event()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/async_event.h#L37">include/async_event.h:37</a></p><hr class="member-fun-separator"></hr><h3 id="7256431B4DA8DA3B" data-function-name="complete_event"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#7256431B4DA8DA3B">\xb6</a><code class="hdoc-function-code language-cpp">explicit complete_event(void* result)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/async_event.h#L38">include/async_event.h:38</a></p><h4>Parameters</h4><dl><dt class="is-family-code">void*<b> result</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="8590D49FDA6C253C" data-function-name="get_result"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#8590D49FDA6C253C">\xb6</a><code class="hdoc-function-code language-cpp">void* get_result()</code></pre></h3><h4>Description</h4><p><p>There is only one instruction type which returns a result, namely alloc_instruction returning a pointer to the allocated memory, i.e. a void*. Having a void* return type on async_event_impl is somewhat leaky, but we don\'t gain much by wrapping it in a std::any.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/async_event.h#L40">include/async_event.h:40</a></p><hr class="member-fun-separator"></hr><h3 id="5999A20C98FF9C35" data-function-name="is_complete"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#5999A20C98FF9C35">\xb6</a><code class="hdoc-function-code language-cpp">bool is_complete()</code></pre></h3><h4>Description</h4><p><p>If this function returns true once, the implementation must guarantee that it will always do so in the future. The event is expected to be cheap to poll repeatedly, and the operation must proceed in the background even while not being polled.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/async_event.h#L39">include/async_event.h:39</a></p><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',n={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class complete_event"},l=void 0,r={id:"api/records/602A1902672330A6",title:"class complete_event",description:"",source:"@site/celerity-runtime/docs/api/records/602A1902672330A6.mdx",sourceDirName:"api/records",slug:"/api/records/602A1902672330A6",permalink:"/docs/api/records/602A1902672330A6",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class complete_event"},sidebar:"api"},o={},p=[];function d(e){const{Head:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t,{children:[(0,i.jsx)("script",{src:"/js/highlight.min.js"}),(0,i.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:c}})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>l});var i=a(96540);const s={},c=i.createContext(s);function n(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);