"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22532],{46652:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var t=r(74848),s=r(28453);const i='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>class transform_iterator: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page96F6C97E96A011EF"><span>class transform_iterator</span></a></li></ul></nav><main class="content"><h1>class transform_iterator</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">template &lt;typename Iterator, typename TransformFn&gt;\nclass transform_iterator { /* full declaration omitted */ };</code></pre><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph.h#L62">include/command_graph.h:62</a></p><h2>Template Parameters</h2><dl><dt class="is-family-code"><b> Iterator</b></dt><dt class="is-family-code"><b> TransformFn</b></dt></dl><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_it" data-member-name="m_it">  Iterator <b>m_it</b></dt><dt class="is-family-code hdoc-private" id="var_m_fn" data-member-name="m_fn">  TransformFn <b>m_fn</b></dt></dl><h2>Member Aliases</h2><ul><li class="is-family-code">using difference_type =\n    typename std::iterator_traits&lt;\n        Iterator&gt;::difference_type;</li><li class="is-family-code">using iterator_category =\n    std::forward_iterator_tag;</li><li class="is-family-code">using pointer = value_type*;</li><li class="is-family-code">using reference = value_type;</li><li class="is-family-code">using value_type = decltype(std::declval&lt;\n                            TransformFn&gt;()(\n    std::declval&lt;typename std::iterator_traits&lt;\n        Iterator&gt;::reference&gt;()));</li></ul><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#39EA80DBCF1FF843"><b>operator!=</b></a>(const transform_iterator&lt;Iterator, TransformFn&gt; &amp; rhs) &rarr; bool</li><li class="is-family-code"><a href="#C60B668DE561D6E5"><b>operator*</b></a>() &rarr; reference</li><li class="is-family-code"><a href="#F348079EABE67709"><b>operator++</b></a>() &rarr; transform_iterator&lt;Iterator, TransformFn&gt; &amp;</li><li class="is-family-code"><a href="#0CB5789A48DE440B"><b>operator-&gt;</b></a>() &rarr; reference</li><li class="is-family-code"><a href="#97BCE47702B67A79"><b>transform_iterator</b></a>(Iterator it, TransformFn fn)</li></ul><h2>Member Functions</h2><h3 id="39EA80DBCF1FF843" data-function-name="operator!="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#39EA80DBCF1FF843">\xb6</a><code class="hdoc-function-code language-cpp">bool operator!=(\n    const <a href="/docs/api/records/96F6C97E96A011EF/">transform_iterator</a>&lt;Iterator,\n                             TransformFn&gt;&amp; rhs)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph.h#L72">include/command_graph.h:72</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/96F6C97E96A011EF/">transform_iterator</a>&lt;Iterator, TransformFn&gt;&amp;<b> rhs</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="C60B668DE561D6E5" data-function-name="operator*"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#C60B668DE561D6E5">\xb6</a><code class="hdoc-function-code language-cpp">reference operator*()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph.h#L74">include/command_graph.h:74</a></p><hr class="member-fun-separator"></hr><h3 id="F348079EABE67709" data-function-name="operator++"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#F348079EABE67709">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/96F6C97E96A011EF/">transform_iterator</a>&lt;Iterator, TransformFn&gt;&amp;\noperator++()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph.h#L77">include/command_graph.h:77</a></p><hr class="member-fun-separator"></hr><h3 id="0CB5789A48DE440B" data-function-name="operator-&gt;"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#0CB5789A48DE440B">\xb6</a><code class="hdoc-function-code language-cpp">reference operator-&gt;()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph.h#L75">include/command_graph.h:75</a></p><hr class="member-fun-separator"></hr><h3 id="97BCE47702B67A79" data-function-name="transform_iterator"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#97BCE47702B67A79">\xb6</a><code class="hdoc-function-code language-cpp">transform_iterator(Iterator it, TransformFn fn)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph.h#L70">include/command_graph.h:70</a></p><h4>Parameters</h4><dl><dt class="is-family-code">Iterator<b> it</b></dt><dt class="is-family-code">TransformFn<b> fn</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',n={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class transform_iterator"},c=void 0,o={id:"api/records/96F6C97E96A011EF",title:"class transform_iterator",description:"",source:"@site/celerity-runtime/docs/api/records/96F6C97E96A011EF.mdx",sourceDirName:"api/records",slug:"/api/records/96F6C97E96A011EF",permalink:"/docs/api/records/96F6C97E96A011EF",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class transform_iterator"},sidebar:"api"},l={},d=[];function p(e){const{Head:a}={...(0,s.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:i}})]})}function m(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>n,x:()=>c});var t=r(96540);const s={},i=t.createContext(s);function n(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);