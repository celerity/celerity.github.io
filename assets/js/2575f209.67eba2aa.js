"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18209],{86426:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=i(74848),s=i(28453);const a='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>function init: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#2B11B4E5D5B7143E"><span>namespace runtime</span></a></li><li class="is-active"><a aria-current="page4945C30DF8F4FAF3"><span>function init</span></a></li></ul></nav><main class="content"><h3 id="4945C30DF8F4FAF3" data-function-name="init"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#4945C30DF8F4FAF3">\xb6</a><code class="hdoc-function-code language-cpp">inline void init(\n    int* argc,\n    char*** argv,\n    const <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;sycl::device&gt;&amp; devices)</code></pre></h3><h4>Description</h4><p><p>Initializes the Celerity runtime and instructs it to use a particular set of devices.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/celerity.h#L27">include/celerity.h:27</a></p><h4>Parameters</h4><dl><dt class="is-family-code">int*<b> argc</b></dt><dt class="is-family-code">char***<b> argv</b></dt><dt class="is-family-code">const <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;sycl::device&gt;&amp;<b> devices</b></dt><dd>The devices to be used on the current node. This can vary between nodes. If there are multiple nodes running on the same host, the list of devices must be the same across nodes on the same host.</dd></dl><hr class="member-fun-separator"></hr><h3 id="4F39CA4B2A396AE6" data-function-name="init"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#4F39CA4B2A396AE6">\xb6</a><code class="hdoc-function-code language-cpp">inline void init(int* argc,\n                 char*** argv,\n                 const detail::device_selector&amp;\n                     device_selector)</code></pre></h3><h4>Description</h4><p><p>Initializes the Celerity runtime and instructs it to use a particular set of devices.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/celerity.h#L35">include/celerity.h:35</a></p><h4>Parameters</h4><dl><dt class="is-family-code">int*<b> argc</b></dt><dt class="is-family-code">char***<b> argv</b></dt><dt class="is-family-code">const detail::device_selector&amp;<b> device_selector</b></dt><dd>The device selector to be used on the current node. This can vary between nodes. If there are multiple nodes running on the same host, the selector must be the same across nodes on the same host.</dd></dl><hr class="member-fun-separator"></hr><h3 id="6ED832C14F26B6A4" data-function-name="init"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#6ED832C14F26B6A4">\xb6</a><code class="hdoc-function-code language-cpp">inline void init(int* argc, char*** argv)</code></pre></h3><h4>Description</h4><p><p>Initializes the Celerity runtime.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/celerity.h#L19">include/celerity.h:19</a></p><h4>Parameters</h4><dl><dt class="is-family-code">int*<b> argc</b></dt><dt class="is-family-code">char***<b> argv</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',c={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function init"},r=void 0,l={id:"api/functions/celerity_runtime-init",title:"function init",description:"",source:"@site/celerity-runtime/docs/api/functions/celerity_runtime-init.mdx",sourceDirName:"api/functions",slug:"/api/functions/celerity_runtime-init",permalink:"/docs/api/functions/celerity_runtime-init",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function init"},sidebar:"api"},o={},d=[];function p(e){const{Head:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t,{children:[(0,n.jsx)("script",{src:"/js/highlight.min.js"}),(0,n.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:a}})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>r});var n=i(96540);const s={},a=n.createContext(s);function c(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);