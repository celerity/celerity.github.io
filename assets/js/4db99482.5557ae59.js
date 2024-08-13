"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85561],{79591:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=i(74848),s=i(28453);const a='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>enum class instruction_dependency_origin: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page2F4CF17AC1378A4E"><span>enum class instruction_dependency_origin</span></a></li></ul></nav><main class="content"><h1>enum class instruction_dependency_origin</h1><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L139">include/recorders.h:139</a></p><h2>Enumerators</h2><table class="table is-narrow is-hoverable"><tr><th>Name</th><th>Value</th><th>Comment</th></tr><tr><td class="is-family-code">allocation_lifetime</td><td class="is-family-code">0</td><td>Dependency between an alloc / free instruction and the first / last access front on that allocation</td></tr><tr><td class="is-family-code">write_to_allocation</td><td class="is-family-code">1</td><td>An anti- or output dependency on data present in an allocation</td></tr><tr><td class="is-family-code">read_from_allocation</td><td class="is-family-code">2</td><td>True dataflow dependency on data present in an allocation</td></tr><tr><td class="is-family-code">side_effect</td><td class="is-family-code">3</td><td>Dependency between two host tasks that affect the same host object, or between such a host task and `destroy_host_object_instruction`</td></tr><tr><td class="is-family-code">collective_group_order</td><td class="is-family-code">4</td><td>Serializing dependency between two host tasks that participate in the same `collective_group`</td></tr><tr><td class="is-family-code">last_epoch</td><td class="is-family-code">5</td><td>Fall-back dependency to the effective epoch for instructions that have no other dependency</td></tr><tr><td class="is-family-code">execution_front</td><td class="is-family-code">6</td><td>Dependency from a new epoch- or horizon instruction to the previous execution front</td></tr><tr><td class="is-family-code">split_receive</td><td class="is-family-code">7</td><td>Ordering dependency between a `split_receive_instruction` and its `await_receive_instruction`s</td></tr></table></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',c={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"enum class instruction_dependency_origin"},r=void 0,o={id:"api/enums/2F4CF17AC1378A4E",title:"enum class instruction_dependency_origin",description:"",source:"@site/celerity-runtime/docs/api/enums/2F4CF17AC1378A4E.mdx",sourceDirName:"api/enums",slug:"/api/enums/2F4CF17AC1378A4E",permalink:"/docs/api/enums/2F4CF17AC1378A4E",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"enum class instruction_dependency_origin"},sidebar:"api"},l={},d=[];function p(e){const{Head:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t,{children:[(0,n.jsx)("script",{src:"/js/highlight.min.js"}),(0,n.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:a}})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>r});var n=i(96540);const s={},a=n.createContext(s);function c(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);