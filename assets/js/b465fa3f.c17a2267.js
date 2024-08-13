"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45662],{85340:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(74848),r=t(28453);const c='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>class buffer_snapshot: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li class="is-active"><a aria-current="page068E2E97B10131A6"><span>class buffer_snapshot</span></a></li></ul></nav><main class="content"><h1>class buffer_snapshot</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">template &lt;typename T, int Dims&gt;\nclass buffer_snapshot { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>Owned representation of buffer contents as captured by celerity::distr_queue::fence.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/fence.h#L26">include/fence.h:26</a></p><h2>Template Parameters</h2><dl><dt class="is-family-code"><b> T</b></dt><dt class="is-family-code">int<b> Dims</b></dt></dl><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_subrange" data-member-name="m_subrange">  subrange&lt;Dims&gt; <b>m_subrange</b></dt><dt class="is-family-code hdoc-private" id="var_m_data" data-member-name="m_data">  <a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;T[]&gt; <b>m_data</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#7897DB48CB38F7E6"><b>buffer_snapshot</b></a>()</li><li class="is-family-code"><a href="#721DA3333D47EB3D"><b>buffer_snapshot</b></a>(buffer_snapshot&lt;T, Dims&gt; &amp;&amp; other) noexcept</li><li class="is-family-code"><a href="#661EA6D037D3CABC"><b>get_data</b></a>() const &rarr; const T *</li><li class="is-family-code"><a href="#B1917A4993FF9527"><b>get_offset</b></a>() const &rarr; id&lt;Dims&gt;</li><li class="is-family-code"><a href="#0A5B9ED987E8A6A0"><b>get_range</b></a>() const &rarr; range&lt;Dims&gt;</li><li class="is-family-code"><a href="#65DB3B75366B4608"><b>get_subrange</b></a>() const &rarr; subrange&lt;Dims&gt;</li><li class="is-family-code"><span class="hdoc-overview-template">template &lt;int D = Dims, std::enable_if_t&lt;D == 0, int&gt;  = 0&gt;</span><br><a href="#B473B642CA71BF02"><b>operator*</b></a>() const &rarr; const T &amp;</li><li class="is-family-code"><a href="#34FE1CFA5B2D149E"><b>operator=</b></a>(buffer_snapshot&lt;T, Dims&gt; &amp;&amp; other) noexcept &rarr; buffer_snapshot&lt;T, Dims&gt; &amp;</li><li class="is-family-code"><a href="#F1F161D82EAD0F99"><b>operator[]</b></a>(id&lt;Dims&gt; index) const &rarr; const T &amp;</li><li class="is-family-code"><span class="hdoc-overview-template">template &lt;int D = Dims, std::enable_if_t&lt;(D &gt; 0), int&gt;  = 0&gt;</span><br><a href="#53BF585444687757"><b>operator[]</b></a>(size_t index) const &rarr; decltype(auto)</li><li class="is-family-code hdoc-private"><a href="#03B76313450DB5E6"><b>buffer_snapshot</b></a>(subrange&lt;Dims&gt; sr, std::unique_ptr&lt;T[]&gt; data) &rarr; explicit</li></ul><h2>Member Functions</h2><h3 id="7897DB48CB38F7E6" data-function-name="buffer_snapshot"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#7897DB48CB38F7E6">\xb6</a><code class="hdoc-function-code language-cpp">buffer_snapshot()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/fence.h#L28">include/fence.h:28</a></p><hr class="member-fun-separator"></hr><h3 id="721DA3333D47EB3D" data-function-name="buffer_snapshot"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#721DA3333D47EB3D">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/068E2E97B10131A6/">buffer_snapshot</a>(\n    buffer_snapshot&lt;T, Dims&gt;&amp;&amp; other) noexcept</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/fence.h#L30">include/fence.h:30</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/068E2E97B10131A6/">buffer_snapshot</a>&lt;T, Dims&gt;&amp;&amp;<b> other</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="661EA6D037D3CABC" data-function-name="get_data"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#661EA6D037D3CABC">\xb6</a><code class="hdoc-function-code language-cpp">const T* get_data() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/fence.h#L43">include/fence.h:43</a></p><hr class="member-fun-separator"></hr><h3 id="B1917A4993FF9527" data-function-name="get_offset"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#B1917A4993FF9527">\xb6</a><code class="hdoc-function-code language-cpp">id&lt;Dims&gt; get_offset() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/fence.h#L37">include/fence.h:37</a></p><hr class="member-fun-separator"></hr><h3 id="0A5B9ED987E8A6A0" data-function-name="get_range"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#0A5B9ED987E8A6A0">\xb6</a><code class="hdoc-function-code language-cpp">range&lt;Dims&gt; get_range() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/fence.h#L39">include/fence.h:39</a></p><hr class="member-fun-separator"></hr><h3 id="65DB3B75366B4608" data-function-name="get_subrange"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#65DB3B75366B4608">\xb6</a><code class="hdoc-function-code language-cpp">subrange&lt;Dims&gt; get_subrange() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/fence.h#L41">include/fence.h:41</a></p><hr class="member-fun-separator"></hr><h3 id="B473B642CA71BF02" data-function-name="operator*"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#B473B642CA71BF02">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;int D = Dims,\n          std::enable_if_t&lt;D == 0, int&gt; = 0&gt;\ninline const T&amp; operator*() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/fence.h#L53">include/fence.h:53</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code">int<b> D</b> = Dims</dt><dt class="is-family-code">std::enable_if_t&lt;D == 0, int&gt;<b> </b> = 0</dt></dl><hr class="member-fun-separator"></hr><h3 id="34FE1CFA5B2D149E" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#34FE1CFA5B2D149E">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/068E2E97B10131A6/">buffer_snapshot</a>&lt;T, Dims&gt;&amp; operator=(\n    <a href="/docs/api/records/068E2E97B10131A6/">buffer_snapshot</a>&lt;T, Dims&gt;&amp;&amp; other) noexcept</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/fence.h#L32">include/fence.h:32</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/068E2E97B10131A6/">buffer_snapshot</a>&lt;T, Dims&gt;&amp;&amp;<b> other</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="F1F161D82EAD0F99" data-function-name="operator[]"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#F1F161D82EAD0F99">\xb6</a><code class="hdoc-function-code language-cpp">inline const T&amp; operator[](id&lt;Dims&gt; index) const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/fence.h#L45">include/fence.h:45</a></p><h4>Parameters</h4><dl><dt class="is-family-code">id&lt;Dims&gt;<b> index</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="53BF585444687757" data-function-name="operator[]"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#53BF585444687757">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;int D = Dims,\n          std::enable_if_t&lt;(D &gt; 0), int&gt; = 0&gt;\ninline decltype(auto) operator[](\n    size_t index) const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/fence.h#L48">include/fence.h:48</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code">int<b> D</b> = Dims</dt><dt class="is-family-code">std::enable_if_t&lt;(D &gt; 0), int&gt;<b> </b> = 0</dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">size_t<b> index</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="03B76313450DB5E6" data-function-name="buffer_snapshot"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#03B76313450DB5E6">\xb6</a><code class="hdoc-function-code language-cpp">explicit buffer_snapshot(\n    subrange&lt;Dims&gt; sr,\n    <a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;T[]&gt; data)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/fence.h#L64">include/fence.h:64</a></p><h4>Parameters</h4><dl><dt class="is-family-code">subrange&lt;Dims&gt;<b> sr</b></dt><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;T[]&gt;<b> data</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',i={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class buffer_snapshot"},n=void 0,l={id:"api/records/068E2E97B10131A6",title:"class buffer_snapshot",description:"",source:"@site/celerity-runtime/docs/api/records/068E2E97B10131A6.mdx",sourceDirName:"api/records",slug:"/api/records/068E2E97B10131A6",permalink:"/docs/api/records/068E2E97B10131A6",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class buffer_snapshot"},sidebar:"api"},o={},d=[];function p(e){const{Head:a}={...(0,r.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a,{children:[(0,s.jsx)("script",{src:"/js/highlight.min.js"}),(0,s.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:c}})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>n});var s=t(96540);const r={},c=s.createContext(r);function i(e){const a=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:a},e.children)}}}]);