"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74174],{14734:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var n=i(74848),r=i(28453);const s='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>alias record_type_for_t: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#F04B845B7443865D"><span>namespace instruction_graph_generator_detail</span></a></li><li class="is-active"><a aria-current="page6168C8DBA82E87FC"><span>alias record_type_for_t</span></a></li></ul></nav><main class="content"><h3 id="6168C8DBA82E87FC"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#6168C8DBA82E87FC">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;typename Instruction&gt;\nusing record_type_for_t = utils::type_switch_t&lt;\n    Instruction,\n    clone_collective_group_instruction(\n        clone_collective_group_instruction_record),\n    alloc_instruction(alloc_instruction_record),\n    free_instruction(free_instruction_record),\n    copy_instruction(copy_instruction_record),\n    device_kernel_instruction(\n        device_kernel_instruction_record),\n    host_task_instruction(\n        host_task_instruction_record),\n    send_instruction(send_instruction_record),\n    receive_instruction(\n        receive_instruction_record),\n    split_receive_instruction(\n        split_receive_instruction_record),\n    await_receive_instruction(\n        await_receive_instruction_record),\n    gather_receive_instruction(\n        gather_receive_instruction_record),\n    fill_identity_instruction(\n        fill_identity_instruction_record),\n    reduce_instruction(reduce_instruction_record),\n    fence_instruction(fence_instruction_record),\n    destroy_host_object_instruction(\n        destroy_host_object_instruction_record),\n    horizon_instruction(\n        horizon_instruction_record),\n    epoch_instruction(epoch_instruction_record)&gt;;</code></pre></h3><h4>Description</h4><p><p>Maps instruction DAG types to their record type.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/instruction_graph_generator.cc#L522">src/instruction_graph_generator.cc:522</a></p><h2>Template Parameters</h2><dl><dt class="is-family-code"><b> Instruction</b></dt></dl></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',c={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"alias record_type_for_t"},a=void 0,o={id:"api/aliases/6168C8DBA82E87FC",title:"alias record_type_for_t",description:"",source:"@site/celerity-runtime/docs/api/aliases/6168C8DBA82E87FC.mdx",sourceDirName:"api/aliases",slug:"/api/aliases/6168C8DBA82E87FC",permalink:"/docs/api/aliases/6168C8DBA82E87FC",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"alias record_type_for_t"},sidebar:"api"},l={},p=[];function d(e){const{Head:t}={...(0,r.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t,{children:[(0,n.jsx)("script",{src:"/js/highlight.min.js"}),(0,n.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>a});var n=i(96540);const r={},s=n.createContext(r);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);