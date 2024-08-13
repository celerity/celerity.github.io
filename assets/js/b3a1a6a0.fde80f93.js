"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45650],{72182:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>p});var i=s(74848),c=s(28453);const r='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>class fence_promise: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="pageA6A7A0BC6CEB734B"><span>class fence_promise</span></a></li></ul></nav><main class="content"><h1>class fence_promise</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class fence_promise { /* full declaration omitted */ };</code></pre><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task.h#L86">include/task.h:86</a></p><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#E38931D1031C3CA8"><b>fence_promise</b></a>()</li><li class="is-family-code"><a href="#08BB653056C43970"><b>fence_promise</b></a>(const fence_promise &amp;)</li><li class="is-family-code"><a href="#DF0038B9BF6F1C44"><b>fulfill</b></a>() &rarr; virtual void</li><li class="is-family-code"><a href="#72A8C8A169F10CFE"><b>get_user_allocation_id</b></a>() &rarr; virtual allocation_id</li><li class="is-family-code"><a href="#AC942A04DB20EA0A"><b>operator=</b></a>(const fence_promise &amp;) &rarr; fence_promise &amp;</li><li class="is-family-code"><a href="#4CC5AF3C61F19762"><b>~fence_promise</b></a>() &rarr; virtual</li></ul><h2>Member Functions</h2><h3 id="E38931D1031C3CA8" data-function-name="fence_promise"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#E38931D1031C3CA8">\xb6</a><code class="hdoc-function-code language-cpp">fence_promise()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task.h#L88">include/task.h:88</a></p><hr class="member-fun-separator"></hr><h3 id="08BB653056C43970" data-function-name="fence_promise"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#08BB653056C43970">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/A6A7A0BC6CEB734B/">fence_promise</a>(const fence_promise&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task.h#L89">include/task.h:89</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A6A7A0BC6CEB734B/">fence_promise</a>&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="DF0038B9BF6F1C44" data-function-name="fulfill"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#DF0038B9BF6F1C44">\xb6</a><code class="hdoc-function-code language-cpp">virtual void fulfill()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task.h#L93">include/task.h:93</a></p><hr class="member-fun-separator"></hr><h3 id="72A8C8A169F10CFE" data-function-name="get_user_allocation_id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#72A8C8A169F10CFE">\xb6</a><code class="hdoc-function-code language-cpp">virtual <a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> get_user_allocation_id()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task.h#L94">include/task.h:94</a></p><hr class="member-fun-separator"></hr><h3 id="AC942A04DB20EA0A" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#AC942A04DB20EA0A">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/A6A7A0BC6CEB734B/">fence_promise</a>&amp; operator=(const <a href="/docs/api/records/A6A7A0BC6CEB734B/">fence_promise</a>&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task.h#L90">include/task.h:90</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A6A7A0BC6CEB734B/">fence_promise</a>&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="4CC5AF3C61F19762" data-function-name="~fence_promise"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#4CC5AF3C61F19762">\xb6</a><code class="hdoc-function-code language-cpp">virtual ~fence_promise()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task.h#L91">include/task.h:91</a></p><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',t={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class fence_promise"},n=void 0,l={id:"api/records/A6A7A0BC6CEB734B",title:"class fence_promise",description:"",source:"@site/celerity-runtime/docs/api/records/A6A7A0BC6CEB734B.mdx",sourceDirName:"api/records",slug:"/api/records/A6A7A0BC6CEB734B",permalink:"/docs/api/records/A6A7A0BC6CEB734B",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class fence_promise"},sidebar:"api"},o={},p=[];function d(e){const{Head:a}={...(0,c.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a,{children:[(0,i.jsx)("script",{src:"/js/highlight.min.js"}),(0,i.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]})}function h(e={}){const{wrapper:a}={...(0,c.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,a,s)=>{s.d(a,{R:()=>t,x:()=>n});var i=s(96540);const c={},r=i.createContext(c);function t(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);