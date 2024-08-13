"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73797],{49401:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=i(74848),s=i(28453);const c='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>struct receive_instruction_record: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="pageFD9B9451F4BE7A8C"><span>struct receive_instruction_record</span></a></li></ul></nav><main class="content"><h1>struct receive_instruction_record</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct receive_instruction_record\n    : public implement_acceptor,\n      public receive_instruction_record_impl { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>IDAG record type for a <code>receive_instruction</code>.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L315">include/recorders.h:315</a></p><p>Inherits from: implement_acceptor, <a href="/docs/api/records/7A6592C4CD0A7732/">receive_instruction_record_impl</a></p><h2>Member Variables</h2><p>Inherited from <a href="/docs/api/records/7A6592C4CD0A7732/">receive_instruction_record_impl</a>:</p><dl><dt class="is-family-code"><a href="/docs/api/records/7A6592C4CD0A7732/#var_transfer_id"> <b>transfer_id</b></a></dt><dt class="is-family-code"><a href="/docs/api/records/7A6592C4CD0A7732/#var_buffer_name"> <b>buffer_name</b></a></dt><dt class="is-family-code"><a href="/docs/api/records/7A6592C4CD0A7732/#var_requested_region"> <b>requested_region</b></a></dt><dt class="is-family-code"><a href="/docs/api/records/7A6592C4CD0A7732/#var_dest_allocation_id"> <b>dest_allocation_id</b></a></dt><dt class="is-family-code"><a href="/docs/api/records/7A6592C4CD0A7732/#var_allocated_box"> <b>allocated_box</b></a></dt><dt class="is-family-code"><a href="/docs/api/records/7A6592C4CD0A7732/#var_element_size"> <b>element_size</b></a></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#3CC44312D089A7FC"><b>receive_instruction_record</b></a>(const receive_instruction &amp; rinstr, std::string buffer_name)</li></ul><p>Inherited from <a href="/docs/api/records/7A6592C4CD0A7732/">receive_instruction_record_impl</a>:</p><ul></ul><h2>Member Functions</h2><h3 id="3CC44312D089A7FC" data-function-name="receive_instruction_record"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#3CC44312D089A7FC">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/61269A051E1AE450/">receive_instruction</a>_record(\n    const receive_instruction&amp; rinstr,\n    <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a> buffer_name)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L316">include/recorders.h:316</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/61269A051E1AE450/">receive_instruction</a>&amp;<b> rinstr</b></dt><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a><b> buffer_name</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',a={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct receive_instruction_record"},n=void 0,o={id:"api/records/FD9B9451F4BE7A8C",title:"struct receive_instruction_record",description:"",source:"@site/celerity-runtime/docs/api/records/FD9B9451F4BE7A8C.mdx",sourceDirName:"api/records",slug:"/api/records/FD9B9451F4BE7A8C",permalink:"/docs/api/records/FD9B9451F4BE7A8C",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct receive_instruction_record"},sidebar:"api"},l={},d=[];function p(e){const{Head:r}={...(0,s.R)(),...e.components};return r||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:c}})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>a,x:()=>n});var t=i(96540);const s={},c=t.createContext(s);function a(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);