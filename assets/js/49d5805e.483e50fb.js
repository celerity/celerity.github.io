"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65777],{72982:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var s=i(74848),t=i(28453);const c='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>function nd_copy_device_cuda: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#B7E6D09282CFB3CB"><span>namespace sycl_backend_detail</span></a></li><li class="is-active"><a aria-current="page05264EA09C85104C"><span>function nd_copy_device_cuda</span></a></li></ul></nav><main class="content"><h3 id="05264EA09C85104C" data-function-name="nd_copy_device_cuda"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#05264EA09C85104C">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/75C01CF859B866AB/">async_event</a> nd_copy_device_cuda(\n    sycl::queue&amp; queue,\n    const void* source_base,\n    void* dest_base,\n    const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp; source_<a href="/docs/api/records/A87962C2586A4E24/">box</a>,\n    const box&lt;3&gt;&amp; dest_box,\n    const <a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt;&amp; copy_region,\n    size_t elem_size,\n    bool enable_profiling)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/backend/sycl_cuda_backend.cc#L150">src/backend/sycl_cuda_backend.cc:150</a></p><h4>Parameters</h4><dl><dt class="is-family-code">sycl::queue&amp;<b> queue</b></dt><dt class="is-family-code">const void*<b> source_base</b></dt><dt class="is-family-code">void*<b> dest_base</b></dt><dt class="is-family-code">const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp;<b> source_box</b></dt><dt class="is-family-code">const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp;<b> dest_box</b></dt><dt class="is-family-code">const <a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt;&amp;<b> copy_region</b></dt><dt class="is-family-code">size_t<b> elem_size</b></dt><dt class="is-family-code">bool<b> enable_profiling</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',n={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function nd_copy_device_cuda"},o=void 0,l={id:"api/functions/celerity_detail_sycl_backend_detail-nd_copy_device_cuda",title:"function nd_copy_device_cuda",description:"",source:"@site/celerity-runtime/docs/api/functions/celerity_detail_sycl_backend_detail-nd_copy_device_cuda.mdx",sourceDirName:"api/functions",slug:"/api/functions/celerity_detail_sycl_backend_detail-nd_copy_device_cuda",permalink:"/docs/api/functions/celerity_detail_sycl_backend_detail-nd_copy_device_cuda",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function nd_copy_device_cuda"},sidebar:"api"},r={},d=[];function p(e){const{Head:a}={...(0,t.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a,{children:[(0,s.jsx)("script",{src:"/js/highlight.min.js"}),(0,s.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:c}})]})}function u(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,a,i)=>{i.d(a,{R:()=>n,x:()=>o});var s=i(96540);const t={},c=s.createContext(t);function n(e){const a=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),s.createElement(c.Provider,{value:a},e.children)}}}]);