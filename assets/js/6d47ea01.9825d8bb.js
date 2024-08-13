"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72821],{67051:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=r(74848),c=r(28453);const s='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>struct buffer::tracker: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/records/C0A7D0CE69BB24F9/"><span>class buffer</span></a></li><li class="is-active"><a aria-current="pageDED6A38BDFB2A125"><span>struct buffer::tracker</span></a></li></ul></nav><main class="content"><h1>struct buffer::tracker</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct buffer::tracker { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>A <code>tacker</code> instance is shared by all shallow copies of this <code>buffer</code> via a <code>std::shared_ptr</code> to implement (SYCL) reference semantics. It notifies the runtime of buffer creation and destruction and also persists changes of the buffer debug name.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/buffer.h#L101">include/buffer.h:101</a></p><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_id" data-member-name="id">  <a href="/docs/api/records/72F1B234CCBF2E73/">detail::buffer_id</a> <b>id</b></dt><dt class="is-family-code" id="var_range" data-member-name="range">  celerity::range&lt;Dims&gt; <b>range</b></dt><dt class="is-family-code" id="var_debug_name" data-member-name="debug_name">  <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a> <b>debug_name</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#12D6B162A25A6644"><b>operator=</b></a>(const tracker &amp;) &rarr; tracker &amp;</li><li class="is-family-code"><a href="#27B4CC7E3E0E3212"><b>operator=</b></a>(tracker &amp;&amp;) &rarr; tracker &amp;</li><li class="is-family-code"><a href="#FAEBC7C9D7E879D1"><b>tracker</b></a>(const celerity::range&lt;Dims&gt; &amp; range, const void * host_init_ptr)</li><li class="is-family-code"><a href="#8BCDE75EFB2C3BDF"><b>tracker</b></a>(const tracker &amp;)</li><li class="is-family-code"><a href="#52D58A6454BF5019"><b>tracker</b></a>(tracker &amp;&amp;)</li><li class="is-family-code"><a href="#C8D253CB8582F2D4"><b>~tracker</b></a>()</li></ul><h2>Member Functions</h2><h3 id="12D6B162A25A6644" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#12D6B162A25A6644">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/DED6A38BDFB2A125/">tracker</a>&amp; operator=(const <a href="/docs/api/records/DED6A38BDFB2A125/">tracker</a>&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/buffer.h#L116">include/buffer.h:116</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/DED6A38BDFB2A125/">tracker</a>&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="27B4CC7E3E0E3212" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#27B4CC7E3E0E3212">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/DED6A38BDFB2A125/">tracker</a>&amp; operator=(<a href="/docs/api/records/DED6A38BDFB2A125/">tracker</a>&amp;&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/buffer.h#L117">include/buffer.h:117</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/DED6A38BDFB2A125/">tracker</a>&amp;&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="FAEBC7C9D7E879D1" data-function-name="tracker"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#FAEBC7C9D7E879D1">\xb6</a><code class="hdoc-function-code language-cpp">tracker(const celerity::range&lt;Dims&gt;&amp; range,\n        const void* host_init_ptr)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/buffer.h#L102">include/buffer.h:102</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const celerity::range&lt;Dims&gt;&amp;<b> range</b></dt><dt class="is-family-code">const void*<b> host_init_ptr</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="8BCDE75EFB2C3BDF" data-function-name="tracker"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#8BCDE75EFB2C3BDF">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/DED6A38BDFB2A125/">tracker</a>(const tracker&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/buffer.h#L114">include/buffer.h:114</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/DED6A38BDFB2A125/">tracker</a>&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="52D58A6454BF5019" data-function-name="tracker"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#52D58A6454BF5019">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/DED6A38BDFB2A125/">tracker</a>(tracker&amp;&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/buffer.h#L115">include/buffer.h:115</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/DED6A38BDFB2A125/">tracker</a>&amp;&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="C8D253CB8582F2D4" data-function-name="~tracker"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#C8D253CB8582F2D4">\xb6</a><code class="hdoc-function-code language-cpp">~tracker()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/buffer.h#L119">include/buffer.h:119</a></p><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',i={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct buffer::tracker"},n=void 0,l={id:"api/records/DED6A38BDFB2A125",title:"struct buffer::tracker",description:"",source:"@site/celerity-runtime/docs/api/records/DED6A38BDFB2A125.mdx",sourceDirName:"api/records",slug:"/api/records/DED6A38BDFB2A125",permalink:"/docs/api/records/DED6A38BDFB2A125",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct buffer::tracker"},sidebar:"api"},o={},d=[];function p(e){const{Head:a}={...(0,c.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function h(e={}){const{wrapper:a}={...(0,c.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>i,x:()=>n});var t=r(96540);const c={},s=t.createContext(c);function i(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);