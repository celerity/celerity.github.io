"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34840],{61163:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>l});var t=a(74848),c=a(28453);const i='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>class dry_run_executor: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="pageA6B49C04843C52B2"><span>class dry_run_executor</span></a></li></ul></nav><main class="content"><h1>class dry_run_executor</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class dry_run_executor : public executor { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>Executor implementation selected when Celerity performs a dry run, that is, graph generation for debugging purposes without actually allocating memory, launching kernels or issuing data transfers. <code>dry_run_executor</code> still executes horizon-, epoch- and fence instructions to guarantee forward progress in the user application.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/dry_run_executor.h#L15">include/dry_run_executor.h:15</a></p><p>Inherits from: <a href="/docs/api/records/EB0FEA27227B2B5D/">executor</a></p><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_submission_queue" data-member-name="m_submission_queue">  <a href="/docs/api/records/0DE118E8B7E22055/">double_buffered_queue</a>&lt;submission&gt; <b>m_submission_queue</b></dt><dt class="is-family-code hdoc-private" id="var_m_thread" data-member-name="m_thread">  <a href="https://en.cppreference.com/w/cpp/thread/thread">std::thread</a> <b>m_thread</b></dt></dl><h2>Member Aliases</h2><ul><li class="is-family-code hdoc-private">using host_object_transfer = std::pair&lt;\n    host_object_id,\n    std::unique_ptr&lt;host_object_instance&gt;&gt;;</li><li class="is-family-code hdoc-private">using submission =\n    std::variant&lt;std::vector&lt;const instruction*&gt;,\n                 host_object_transfer&gt;;</li></ul><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#586B13794852E04B"><b>dry_run_executor</b></a>(delegate * dlg) &rarr; explicit</li><li class="is-family-code"><a href="#18D032548E47318D"><b>dry_run_executor</b></a>(const dry_run_executor &amp;)</li><li class="is-family-code"><a href="#85767826BBFEA7BF"><b>dry_run_executor</b></a>(dry_run_executor &amp;&amp;)</li><li class="is-family-code"><a href="#6422BDFA6C5D9C9D"><b>operator=</b></a>(const dry_run_executor &amp;) &rarr; dry_run_executor &amp;</li><li class="is-family-code"><a href="#0AD39C9E8ACCCF53"><b>operator=</b></a>(dry_run_executor &amp;&amp;) &rarr; dry_run_executor &amp;</li><li class="is-family-code"><a href="#768122D9D5D37BEE"><b>submit</b></a>(std::vector&lt;const instruction *&gt; instructions, std::vector&lt;outbound_pilot&gt; pilots) &rarr; void</li><li class="is-family-code"><a href="#9E437DCD8307BC9A"><b>track_host_object_instance</b></a>(host_object_id hoid, std::unique_ptr&lt;host_object_instance&gt; instance) &rarr; void</li><li class="is-family-code"><a href="#6DA535847AAB0524"><b>track_reducer</b></a>(reduction_id rid, std::unique_ptr&lt;reducer&gt; reducer) &rarr; void</li><li class="is-family-code"><a href="#59BACCFBA093C503"><b>track_user_allocation</b></a>(allocation_id aid, void * ptr) &rarr; void</li><li class="is-family-code"><a href="#A1AD8BA75B2849BD"><b>~dry_run_executor</b></a>()</li><li class="is-family-code hdoc-private"><a href="#D3E2D6DA56EF6A5A"><b>thread_main</b></a>(delegate * dlg) &rarr; void</li></ul><p>Inherited from <a href="/docs/api/records/EB0FEA27227B2B5D/">executor</a>:</p><ul><li class="is-family-code"><a href="/docs/api/records/EB0FEA27227B2B5D/#DAC0AC18DC068BF0">public <b>operator=</b></a></li><li class="is-family-code"><a href="/docs/api/records/EB0FEA27227B2B5D/#02599DDE66CA0195">public <b>operator=</b></a></li><li class="is-family-code"><a href="/docs/api/records/EB0FEA27227B2B5D/#6E84EF1B500B9C84">public <b>submit</b></a></li><li class="is-family-code"><a href="/docs/api/records/EB0FEA27227B2B5D/#A75BA94004BEDE3D">public <b>track_host_object_instance</b></a></li><li class="is-family-code"><a href="/docs/api/records/EB0FEA27227B2B5D/#0C95C28BEE0BAF97">public <b>track_reducer</b></a></li><li class="is-family-code"><a href="/docs/api/records/EB0FEA27227B2B5D/#32194B9D8B9F4D4B">public <b>track_user_allocation</b></a></li></ul><h2>Member Functions</h2><h3 id="586B13794852E04B" data-function-name="dry_run_executor"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#586B13794852E04B">\xb6</a><code class="hdoc-function-code language-cpp">explicit dry_run_executor(<a href="/docs/api/records/AFF9009734443E53/">delegate</a>* dlg)</code></pre></h3><h4>Description</h4><p><p><code>dlg</code> (optional) receives notifications about reached horizons and epochs from the executor thread.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/dry_run_executor.h#L18">include/dry_run_executor.h:18</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/AFF9009734443E53/">delegate</a>*<b> dlg</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="18D032548E47318D" data-function-name="dry_run_executor"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#18D032548E47318D">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/A6B49C04843C52B2/">dry_run_executor</a>(const dry_run_executor&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/dry_run_executor.h#L20">include/dry_run_executor.h:20</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A6B49C04843C52B2/">dry_run_executor</a>&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="85767826BBFEA7BF" data-function-name="dry_run_executor"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#85767826BBFEA7BF">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/A6B49C04843C52B2/">dry_run_executor</a>(dry_run_executor&amp;&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/dry_run_executor.h#L21">include/dry_run_executor.h:21</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/A6B49C04843C52B2/">dry_run_executor</a>&amp;&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="6422BDFA6C5D9C9D" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#6422BDFA6C5D9C9D">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/A6B49C04843C52B2/">dry_run_executor</a>&amp; operator=(\n    const <a href="/docs/api/records/A6B49C04843C52B2/">dry_run_executor</a>&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/dry_run_executor.h#L22">include/dry_run_executor.h:22</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A6B49C04843C52B2/">dry_run_executor</a>&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="0AD39C9E8ACCCF53" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#0AD39C9E8ACCCF53">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/A6B49C04843C52B2/">dry_run_executor</a>&amp; operator=(<a href="/docs/api/records/A6B49C04843C52B2/">dry_run_executor</a>&amp;&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/dry_run_executor.h#L23">include/dry_run_executor.h:23</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/A6B49C04843C52B2/">dry_run_executor</a>&amp;&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="768122D9D5D37BEE" data-function-name="submit"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#768122D9D5D37BEE">\xb6</a><code class="hdoc-function-code language-cpp">void submit(\n    <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;const instruction*&gt; instructions,\n    <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;outbound_pilot&gt; pilots)</code></pre></h3><h4>Description</h4><p><p>Submits a list of instructions to execute once their dependencies have been fulfilled, and a list of outbound pilots to be transmitted to their recipients as soon as possible. Instructions must be in topological order of dependencies, as must be the concatenation of all vectors passed to subsequent invocations of this function.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/dry_run_executor.h#L31">include/dry_run_executor.h:31</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;const instruction*&gt;<b> instructions</b></dt><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;outbound_pilot&gt;<b> pilots</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="9E437DCD8307BC9A" data-function-name="track_host_object_instance"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#9E437DCD8307BC9A">\xb6</a><code class="hdoc-function-code language-cpp">void track_host_object_instance(\n    <a href="/docs/api/records/A0E5B68259E332A7/">host_object_id</a> hoid,\n    <a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;host_object_instance&gt;\n        instance)</code></pre></h3><h4>Description</h4><p><p>Transfer ownership of a host object instance to the executor. The executor will later destroy this instance when executing a matching destroy_host_object_instruction.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/dry_run_executor.h#L28">include/dry_run_executor.h:28</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/A0E5B68259E332A7/">host_object_id</a><b> hoid</b></dt><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;host_object_instance&gt;<b> instance</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="6DA535847AAB0524" data-function-name="track_reducer"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#6DA535847AAB0524">\xb6</a><code class="hdoc-function-code language-cpp">void track_reducer(\n    <a href="/docs/api/records/6DD6FF2C7DDED129/">reduction_id</a> rid,\n    <a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;reducer&gt; reducer)</code></pre></h3><h4>Description</h4><p><p>Informs the executor about the runtime behavior of a reduction. Will be used by any fill_identity_instruction and reduce_instruction later submitted on the same reduction_id. Reducer instances are removed from executor tracking and destroyed when they later appear in an instruction_garbage list attached to a horizon or epoch instruction.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/dry_run_executor.h#L29">include/dry_run_executor.h:29</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/6DD6FF2C7DDED129/">reduction_id</a><b> rid</b></dt><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;reducer&gt;<b> reducer</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="59BACCFBA093C503" data-function-name="track_user_allocation"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#59BACCFBA093C503">\xb6</a><code class="hdoc-function-code language-cpp">void track_user_allocation(<a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> aid,\n                           void* ptr)</code></pre></h3><h4>Description</h4><p><p>Informs the executor about the runtime address of an allocation on user_memory_id. Must be called before submitting any instruction referring to the allocation id in question. User allocations are later removed from executor tracking as they appear in an instruction_garbage list attached to a horizon or epoch instruction.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/dry_run_executor.h#L27">include/dry_run_executor.h:27</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a><b> aid</b></dt><dt class="is-family-code">void*<b> ptr</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="A1AD8BA75B2849BD" data-function-name="~dry_run_executor"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#A1AD8BA75B2849BD">\xb6</a><code class="hdoc-function-code language-cpp">~dry_run_executor()</code></pre></h3><h4>Description</h4><p><p>Waits until an epoch with <code>epoch_action::shutdown</code> has executed and the executor thread has exited.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/dry_run_executor.h#L25">include/dry_run_executor.h:25</a></p><hr class="member-fun-separator"></hr><h3 id="D3E2D6DA56EF6A5A" data-function-name="thread_main"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#D3E2D6DA56EF6A5A">\xb6</a><code class="hdoc-function-code language-cpp">void thread_main(<a href="/docs/api/records/AFF9009734443E53/">delegate</a>* dlg)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/dry_run_executor.h#L40">include/dry_run_executor.h:40</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/AFF9009734443E53/">delegate</a>*<b> dlg</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',s={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class dry_run_executor"},o=void 0,n={id:"api/records/A6B49C04843C52B2",title:"class dry_run_executor",description:"",source:"@site/celerity-runtime/docs/api/records/A6B49C04843C52B2.mdx",sourceDirName:"api/records",slug:"/api/records/A6B49C04843C52B2",permalink:"/docs/api/records/A6B49C04843C52B2",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class dry_run_executor"},sidebar:"api"},d={},l=[];function p(e){const{Head:r}={...(0,c.R)(),...e.components};return r||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:i}})]})}function u(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>s,x:()=>o});var t=a(96540);const c={},i=t.createContext(c);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);