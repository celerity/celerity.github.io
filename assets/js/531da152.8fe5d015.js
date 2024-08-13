"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14711],{54367:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>_,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var c=t(74848),i=t(28453);const s='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>class device_kernel_instruction: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page884AB6A9D2C68314"><span>class device_kernel_instruction</span></a></li></ul></nav><main class="content"><h1>class device_kernel_instruction</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class device_kernel_instruction : public implement_acceptor { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>Launches a SYCL device kernel on a single device. Bound accessors and reductions are hydrated through buffer_access_allocation_maps.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L151">include/instruction_graph.h:151</a></p><p>Inherits from: implement_acceptor</p><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_device_id" data-member-name="m_device_id">  <a href="/docs/api/records/7D949A34B7A05510/">device_id</a> <b>m_device_id</b></dt><dt class="is-family-code hdoc-private" id="var_m_launcher" data-member-name="m_launcher">  device_kernel_launcher <b>m_launcher</b></dt><dt class="is-family-code hdoc-private" id="var_m_execution_range" data-member-name="m_execution_range">  <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt; <b>m_execution_range</b></dt><dt class="is-family-code hdoc-private" id="var_m_access_allocations" data-member-name="m_access_allocations">  buffer_access_allocation_map <b>m_access_allocations</b></dt><dt class="is-family-code hdoc-private" id="var_m_reduction_allocations" data-member-name="m_reduction_allocations">  buffer_access_allocation_map <b>m_reduction_allocations</b></dt><dt class="is-family-code hdoc-private" id="var_m_estimated_global_memory_traffic_bytes" data-member-name="m_estimated_global_memory_traffic_bytes">  size_t <b>m_estimated_global_memory_traffic_bytes</b></dt><dt class="is-family-code hdoc-private" id="var_m_oob_task_type" data-member-name="m_oob_task_type">  <a href="/docs/api/enums/F6AD2626519414E0/">task_type</a> <b>m_oob_task_type</b></dt><dt class="is-family-code hdoc-private" id="var_m_oob_task_id" data-member-name="m_oob_task_id">  <a href="/docs/api/records/322167BB21F2212B/">task_id</a> <b>m_oob_task_id</b></dt><dt class="is-family-code hdoc-private" id="var_m_oob_task_name" data-member-name="m_oob_task_name">  <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a> <b>m_oob_task_name</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#1152B90BE8DB0900"><b>device_kernel_instruction</b></a>(instruction_id iid, int priority, device_id did, device_kernel_launcher launcher, const box&lt;3&gt; &amp; execution_range, buffer_access_allocation_map access_allocations, buffer_access_allocation_map reduction_allocations, size_t global_memory_traffic_estimate_bytes, task_type oob_task_type, task_id oob_task_id, std::string oob_task_name) &rarr; explicit</li><li class="is-family-code"><a href="#9B1F4643D8B2CE7E"><b>get_access_allocations</b></a>() const &rarr; const buffer_access_allocation_map &amp;</li><li class="is-family-code"><a href="#B8BF80CB6152DC08"><b>get_device_id</b></a>() const &rarr; device_id</li><li class="is-family-code"><a href="#D6A9A4FD48361A9C"><b>get_estimated_global_memory_traffic_bytes</b></a>() const &rarr; size_t</li><li class="is-family-code"><a href="#045D903AC8B9EE5B"><b>get_execution_range</b></a>() const &rarr; const box&lt;3&gt; &amp;</li><li class="is-family-code"><a href="#A958585E15C41F79"><b>get_launcher</b></a>() const &rarr; const device_kernel_launcher &amp;</li><li class="is-family-code"><a href="#1E94B5268CF51997"><b>get_oob_task_id</b></a>() const &rarr; task_id</li><li class="is-family-code"><a href="#FE925FEAABFA1702"><b>get_oob_task_name</b></a>() const &rarr; const std::string &amp;</li><li class="is-family-code"><a href="#6958F2D62CDED2BE"><b>get_oob_task_type</b></a>() const &rarr; task_type</li><li class="is-family-code"><a href="#22691AC96811E8CA"><b>get_reduction_allocations</b></a>() const &rarr; const buffer_access_allocation_map &amp;</li></ul><h2>Member Functions</h2><h3 id="1152B90BE8DB0900" data-function-name="device_kernel_instruction"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#1152B90BE8DB0900">\xb6</a><code class="hdoc-function-code language-cpp">explicit device_kernel_instruction(\n    <a href="/docs/api/records/A10FDF2DB5485BE8/">instruction_id</a> iid,\n    int priority,\n    <a href="/docs/api/records/7D949A34B7A05510/">device_id</a> did,\n    device_kernel_launcher launcher,\n    const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp; execution_range,\n    buffer_access_allocation_map\n        access_allocations,\n    buffer_access_allocation_map\n        reduction_allocations,\n    size_t global_memory_traffic_estimate_bytes,\n    <a href="/docs/api/enums/F6AD2626519414E0/">task_type</a> oob_task_type,\n    <a href="/docs/api/records/322167BB21F2212B/">task_id</a> oob_task_id,\n    <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a> oob_task_name)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L153">include/instruction_graph.h:153</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/A10FDF2DB5485BE8/">instruction_id</a><b> iid</b></dt><dt class="is-family-code">int<b> priority</b></dt><dt class="is-family-code"><a href="/docs/api/records/7D949A34B7A05510/">device_id</a><b> did</b></dt><dt class="is-family-code">device_kernel_launcher<b> launcher</b></dt><dt class="is-family-code">const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp;<b> execution_range</b></dt><dt class="is-family-code">buffer_access_allocation_map<b> access_allocations</b></dt><dt class="is-family-code">buffer_access_allocation_map<b> reduction_allocations</b></dt><dt class="is-family-code">size_t<b> global_memory_traffic_estimate_bytes</b></dt><dt class="is-family-code"><a href="/docs/api/enums/F6AD2626519414E0/">task_type</a><b> oob_task_type</b></dt><dt class="is-family-code"><a href="/docs/api/records/322167BB21F2212B/">task_id</a><b> oob_task_id</b></dt><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a><b> oob_task_name</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="9B1F4643D8B2CE7E" data-function-name="get_access_allocations"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#9B1F4643D8B2CE7E">\xb6</a><code class="hdoc-function-code language-cpp">const buffer_access_allocation_map&amp;\nget_access_allocations() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L166">include/instruction_graph.h:166</a></p><hr class="member-fun-separator"></hr><h3 id="B8BF80CB6152DC08" data-function-name="get_device_id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#B8BF80CB6152DC08">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/7D949A34B7A05510/">device_id</a> get_device_id() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L163">include/instruction_graph.h:163</a></p><hr class="member-fun-separator"></hr><h3 id="D6A9A4FD48361A9C" data-function-name="get_estimated_global_memory_traffic_bytes"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#D6A9A4FD48361A9C">\xb6</a><code class="hdoc-function-code language-cpp">size_t get_estimated_global_memory_traffic_bytes()\n    const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L168">include/instruction_graph.h:168</a></p><hr class="member-fun-separator"></hr><h3 id="045D903AC8B9EE5B" data-function-name="get_execution_range"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#045D903AC8B9EE5B">\xb6</a><code class="hdoc-function-code language-cpp">const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp; get_execution_range() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L165">include/instruction_graph.h:165</a></p><hr class="member-fun-separator"></hr><h3 id="A958585E15C41F79" data-function-name="get_launcher"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#A958585E15C41F79">\xb6</a><code class="hdoc-function-code language-cpp">const device_kernel_launcher&amp; get_launcher() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L164">include/instruction_graph.h:164</a></p><hr class="member-fun-separator"></hr><h3 id="1E94B5268CF51997" data-function-name="get_oob_task_id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#1E94B5268CF51997">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/322167BB21F2212B/">task_id</a> get_oob_task_id() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L172">include/instruction_graph.h:172</a></p><hr class="member-fun-separator"></hr><h3 id="FE925FEAABFA1702" data-function-name="get_oob_task_name"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#FE925FEAABFA1702">\xb6</a><code class="hdoc-function-code language-cpp">const <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a>&amp; get_oob_task_name() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L173">include/instruction_graph.h:173</a></p><hr class="member-fun-separator"></hr><h3 id="6958F2D62CDED2BE" data-function-name="get_oob_task_type"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#6958F2D62CDED2BE">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/enums/F6AD2626519414E0/">task_type</a> get_oob_task_type() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L171">include/instruction_graph.h:171</a></p><hr class="member-fun-separator"></hr><h3 id="22691AC96811E8CA" data-function-name="get_reduction_allocations"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#22691AC96811E8CA">\xb6</a><code class="hdoc-function-code language-cpp">const buffer_access_allocation_map&amp;\nget_reduction_allocations() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L167">include/instruction_graph.h:167</a></p><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',r={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class device_kernel_instruction"},n=void 0,o={id:"api/records/884AB6A9D2C68314",title:"class device_kernel_instruction",description:"",source:"@site/celerity-runtime/docs/api/records/884AB6A9D2C68314.mdx",sourceDirName:"api/records",slug:"/api/records/884AB6A9D2C68314",permalink:"/docs/api/records/884AB6A9D2C68314",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class device_kernel_instruction"},sidebar:"api"},l={},d=[];function p(e){const{Head:a}={...(0,i.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(a,{children:[(0,c.jsx)("script",{src:"/js/highlight.min.js"}),(0,c.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function _(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,c.jsx)(a,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>n});var c=t(96540);const i={},s=c.createContext(i);function r(e){const a=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),c.createElement(s.Provider,{value:a},e.children)}}}]);