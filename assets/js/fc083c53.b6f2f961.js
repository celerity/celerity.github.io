"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8960],{42489:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var a=t(74848),s=t(28453);const c='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>class collective_group: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#36211E2D24C9AB8E"><span>namespace experimental</span></a></li><li class="is-active"><a aria-current="pageA179F2F7149F575E"><span>class collective_group</span></a></li></ul></nav><main class="content"><h1>class collective_group</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class collective_group { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>Each collective host task is executed within a collective group. If multiple host tasks are scheduled within the same collective group, they are guaranteed to execute in the same order on every node and within a single thread per node. Each group has its own MPI communicator spanning all participating nodes, so MPI operations the user invokes from different collective groups do not race.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/handler.h#L112">include/handler.h:112</a></p><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_cgid" data-member-name="m_cgid">  <a href="/docs/api/records/82BFAD3A3BD6412E/">detail::collective_group_id</a> <b>m_cgid</b></dt><dt class="is-family-code hdoc-private" id="var_s_next_cgid" data-member-name="s_next_cgid"> static  <a href="/docs/api/records/82BFAD3A3BD6412E/">detail::collective_group_id</a> <b>s_next_cgid</b> = detail::root_collective_group_id + 1</dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#462BE1553920553A"><b>collective_group</b></a>() noexcept</li></ul><h2>Member Functions</h2><h3 id="462BE1553920553A" data-function-name="collective_group"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#462BE1553920553A">\xb6</a><code class="hdoc-function-code language-cpp">collective_group() noexcept</code></pre></h3><h4>Description</h4><p><p>Creates a new collective group with a globally unique id. This must only be called from the main thread.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/handler.h#L115">include/handler.h:115</a></p><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',n={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class collective_group"},l=void 0,r={id:"api/records/A179F2F7149F575E",title:"class collective_group",description:"",source:"@site/celerity-runtime/docs/api/records/A179F2F7149F575E.mdx",sourceDirName:"api/records",slug:"/api/records/A179F2F7149F575E",permalink:"/docs/api/records/A179F2F7149F575E",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class collective_group"},sidebar:"api"},o={},d=[];function p(e){const{Head:i}={...(0,s.R)(),...e.components};return i||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i,{children:[(0,a.jsx)("script",{src:"/js/highlight.min.js"}),(0,a.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:c}})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>n,x:()=>l});var a=t(96540);const s={},c=a.createContext(s);function n(e){const i=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),a.createElement(c.Provider,{value:i},e.children)}}}]);