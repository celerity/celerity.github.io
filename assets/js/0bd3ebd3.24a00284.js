"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20628],{89166:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=t(74848),i=t(28453);const s='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>class filter_iterator: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="pageD5D8A02E761474E8"><span>class filter_iterator</span></a></li></ul></nav><main class="content"><h1>class filter_iterator</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">template &lt;typename Iterator, typename PredicateFn&gt;\nclass filter_iterator { /* full declaration omitted */ };</code></pre><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph.h#L20">include/command_graph.h:20</a></p><h2>Template Parameters</h2><dl><dt class="is-family-code"><b> Iterator</b></dt><dt class="is-family-code"><b> PredicateFn</b></dt></dl><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_it" data-member-name="m_it">  Iterator <b>m_it</b></dt><dt class="is-family-code hdoc-private" id="var_m_end" data-member-name="m_end">  const Iterator <b>m_end</b></dt><dt class="is-family-code hdoc-private" id="var_m_fn" data-member-name="m_fn">  PredicateFn <b>m_fn</b></dt></dl><h2>Member Aliases</h2><ul><li class="is-family-code">using difference_type =\n    typename std::iterator_traits&lt;\n        Iterator&gt;::difference_type;</li><li class="is-family-code">using iterator_category =\n    std::forward_iterator_tag;</li><li class="is-family-code">using pointer = typename std::iterator_traits&lt;\n    Iterator&gt;::pointer;</li><li class="is-family-code">using reference = typename std::iterator_traits&lt;\n    Iterator&gt;::reference;</li><li class="is-family-code">using value_type = typename std::iterator_traits&lt;\n    Iterator&gt;::value_type;</li></ul><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#CEF8A68CD20A9447"><b>filter_iterator</b></a>(Iterator begin, Iterator end, PredicateFn fn)</li><li class="is-family-code"><a href="#245AB565A3F7B96E"><b>operator!=</b></a>(const filter_iterator&lt;Iterator, PredicateFn&gt; &amp; rhs) &rarr; bool</li><li class="is-family-code"><a href="#8297576394FF3EBF"><b>operator*</b></a>() &rarr; reference</li><li class="is-family-code"><a href="#96159B1081BD4D9E"><b>operator++</b></a>() &rarr; filter_iterator&lt;Iterator, PredicateFn&gt; &amp;</li><li class="is-family-code"><a href="#8BFE17D6E41E280B"><b>operator-&gt;</b></a>() &rarr; reference</li><li class="is-family-code hdoc-private"><a href="#7BA077BEB4963CC7"><b>advance</b></a>() &rarr; void</li></ul><h2>Member Functions</h2><h3 id="CEF8A68CD20A9447" data-function-name="filter_iterator"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#CEF8A68CD20A9447">\xb6</a><code class="hdoc-function-code language-cpp">filter_iterator(Iterator begin,\n                Iterator end,\n                PredicateFn fn)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph.h#L28">include/command_graph.h:28</a></p><h4>Parameters</h4><dl><dt class="is-family-code">Iterator<b> begin</b></dt><dt class="is-family-code">Iterator<b> end</b></dt><dt class="is-family-code">PredicateFn<b> fn</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="245AB565A3F7B96E" data-function-name="operator!="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#245AB565A3F7B96E">\xb6</a><code class="hdoc-function-code language-cpp">bool operator!=(\n    const <a href="/docs/api/records/D5D8A02E761474E8/">filter_iterator</a>&lt;Iterator, PredicateFn&gt;&amp;\n        rhs)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph.h#L30">include/command_graph.h:30</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/D5D8A02E761474E8/">filter_iterator</a>&lt;Iterator, PredicateFn&gt;&amp;<b> rhs</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="8297576394FF3EBF" data-function-name="operator*"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#8297576394FF3EBF">\xb6</a><code class="hdoc-function-code language-cpp">reference operator*()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph.h#L32">include/command_graph.h:32</a></p><hr class="member-fun-separator"></hr><h3 id="96159B1081BD4D9E" data-function-name="operator++"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#96159B1081BD4D9E">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/D5D8A02E761474E8/">filter_iterator</a>&lt;Iterator, PredicateFn&gt;&amp;\noperator++()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph.h#L35">include/command_graph.h:35</a></p><hr class="member-fun-separator"></hr><h3 id="8BFE17D6E41E280B" data-function-name="operator-&gt;"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#8BFE17D6E41E280B">\xb6</a><code class="hdoc-function-code language-cpp">reference operator-&gt;()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph.h#L33">include/command_graph.h:33</a></p><hr class="member-fun-separator"></hr><h3 id="7BA077BEB4963CC7" data-function-name="advance"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#7BA077BEB4963CC7">\xb6</a><code class="hdoc-function-code language-cpp">void advance()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph.h#L48">include/command_graph.h:48</a></p><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',c={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class filter_iterator"},n=void 0,l={id:"api/records/D5D8A02E761474E8",title:"class filter_iterator",description:"",source:"@site/celerity-runtime/docs/api/records/D5D8A02E761474E8.mdx",sourceDirName:"api/records",slug:"/api/records/D5D8A02E761474E8",permalink:"/docs/api/records/D5D8A02E761474E8",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class filter_iterator"},sidebar:"api"},o={},d=[];function p(e){const{Head:a}={...(0,i.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a,{children:[(0,r.jsx)("script",{src:"/js/highlight.min.js"}),(0,r.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function m(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>c,x:()=>n});var r=t(96540);const i={},s=r.createContext(i);function c(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);