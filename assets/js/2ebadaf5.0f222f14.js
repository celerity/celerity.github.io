"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18829],{12804:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=a(74848),s=a(28453);const c='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>struct command_record: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page8C59FEF959DD0C50"><span>struct command_record</span></a></li></ul></nav><main class="content"><h1>struct command_record</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct command_record { /* full declaration omitted */ };</code></pre><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L81">include/recorders.h:81</a></p><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_cid" data-member-name="cid">  <a href="/docs/api/records/2D98D7CFB741116F/">command_id</a> <b>cid</b></dt><dt class="is-family-code" id="var_type" data-member-name="type">  <a href="/docs/api/enums/B430173D907BF013/">command_type</a> <b>type</b></dt><dt class="is-family-code" id="var_epoch_action" data-member-name="epoch_action">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;detail::epoch_action&gt; <b>epoch_action</b></dt><dt class="is-family-code" id="var_execution_range" data-member-name="execution_range">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;subrange&lt;3&gt;&gt; <b>execution_range</b></dt><dt class="is-family-code" id="var_reduction_id" data-member-name="reduction_id">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;detail::reduction_id&gt; <b>reduction_id</b></dt><dt class="is-family-code" id="var_buffer_id" data-member-name="buffer_id">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;detail::buffer_id&gt; <b>buffer_id</b></dt><dt class="is-family-code" id="var_buffer_name" data-member-name="buffer_name">  <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a> <b>buffer_name</b></dt><dt class="is-family-code" id="var_target" data-member-name="target">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;node_id&gt; <b>target</b></dt><dt class="is-family-code" id="var_await_region" data-member-name="await_region">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;region&lt;3&gt;&gt; <b>await_region</b></dt><dt class="is-family-code" id="var_push_range" data-member-name="push_range">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;subrange&lt;3&gt;&gt; <b>push_range</b></dt><dt class="is-family-code" id="var_transfer_id" data-member-name="transfer_id">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;detail::transfer_id&gt; <b>transfer_id</b></dt><dt class="is-family-code" id="var_task_id" data-member-name="task_id">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;detail::task_id&gt; <b>task_id</b></dt><dt class="is-family-code" id="var_task_geometry" data-member-name="task_geometry">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;detail::task_geometry&gt; <b>task_geometry</b></dt><dt class="is-family-code" id="var_is_reduction_initializer" data-member-name="is_reduction_initializer">  bool <b>is_reduction_initializer</b></dt><dt class="is-family-code" id="var_has_local_contribution" data-member-name="has_local_contribution">  bool <b>has_local_contribution</b></dt><dt class="is-family-code" id="var_accesses" data-member-name="accesses">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;access_list&gt; <b>accesses</b></dt><dt class="is-family-code" id="var_reductions" data-member-name="reductions">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;reduction_list&gt; <b>reductions</b></dt><dt class="is-family-code" id="var_side_effects" data-member-name="side_effects">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;side_effect_map&gt; <b>side_effects</b></dt><dt class="is-family-code" id="var_dependencies" data-member-name="dependencies">  command_dependency_list <b>dependencies</b></dt><dt class="is-family-code" id="var_task_name" data-member-name="task_name">  <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a> <b>task_name</b></dt><dt class="is-family-code" id="var_task_type" data-member-name="task_type">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;detail::task_type&gt; <b>task_type</b></dt><dt class="is-family-code" id="var_collective_group_id" data-member-name="collective_group_id">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;detail::collective_group_id&gt; <b>collective_group_id</b></dt><dt class="is-family-code" id="var_completed_reductions" data-member-name="completed_reductions">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;detail::reduction_id&gt; <b>completed_reductions</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#58E25BF29B4B0334"><b>command_record</b></a>(const abstract_command &amp; cmd, const task &amp; tsk, const buffer_name_map &amp; get_buffer_debug_name)</li></ul><h2>Member Functions</h2><h3 id="58E25BF29B4B0334" data-function-name="command_record"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#58E25BF29B4B0334">\xb6</a><code class="hdoc-function-code language-cpp">command_record(\n    const <a href="/docs/api/records/45953E750EDED50D/">abstract_command</a>&amp; cmd,\n    const <a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp; tsk,\n    const buffer_name_map&amp; get_buffer_debug_name)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L107">include/recorders.h:107</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/45953E750EDED50D/">abstract_command</a>&amp;<b> cmd</b></dt><dt class="is-family-code">const <a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp;<b> tsk</b></dt><dt class="is-family-code">const buffer_name_map&amp;<b> get_buffer_debug_name</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',r={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct command_record"},n=void 0,o={id:"api/records/8C59FEF959DD0C50",title:"struct command_record",description:"",source:"@site/celerity-runtime/docs/api/records/8C59FEF959DD0C50.mdx",sourceDirName:"api/records",slug:"/api/records/8C59FEF959DD0C50",permalink:"/docs/api/records/8C59FEF959DD0C50",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct command_record"},sidebar:"api"},d={},l=[];function p(e){const{Head:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t,{children:[(0,i.jsx)("script",{src:"/js/highlight.min.js"}),(0,i.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:c}})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>n});var i=a(96540);const s={},c=i.createContext(s);function r(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);