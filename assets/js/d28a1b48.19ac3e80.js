"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66021],{10906:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>d});var t=r(74848),s=r(28453);const i='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>class task_ring_buffer: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page2A72265DCF1483F1"><span>class task_ring_buffer</span></a></li></ul></nav><main class="content"><h1>class task_ring_buffer</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class task_ring_buffer { /* full declaration omitted */ };</code></pre><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L15">include/task_ring_buffer.h:15</a></p><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_next_task_id" data-member-name="m_next_task_id">  <a href="/docs/api/records/322167BB21F2212B/">task_id</a> <b>m_next_task_id</b> = 0</dt><dt class="is-family-code hdoc-private" id="var_m_next_active_tid" data-member-name="m_next_active_tid">  <a href="https://en.cppreference.com/w/cpp/atomic/atomic">std::atomic</a>&lt;task_id&gt; <b>m_next_active_tid</b> = celerity::detail::task_id(0)</dt><dt class="is-family-code hdoc-private" id="var_m_number_of_deleted_tasks" data-member-name="m_number_of_deleted_tasks">  <a href="https://en.cppreference.com/w/cpp/atomic/atomic">std::atomic</a>&lt;size_t&gt; <b>m_number_of_deleted_tasks</b> = 0</dt><dt class="is-family-code hdoc-private" id="var_m_data" data-member-name="m_data">  <a href="https://en.cppreference.com/w/cpp/container/array">std::array</a>&lt;std::unique_ptr&lt;task&gt;,\n           task_ringbuffer_size&gt; <b>m_data</b></dt></dl><h2>Member Aliases</h2><ul><li class="is-family-code">using wait_callback =\n    std::function&lt;void(task_id)&gt;;</li></ul><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#D048747203C1E9DB"><b>begin</b></a>() const &rarr; task_buffer_iterator</li><li class="is-family-code"><a href="#F97F2B85584FF4B6"><b>clear</b></a>() &rarr; void</li><li class="is-family-code"><a href="#6DB1352EA854BA0A"><b>delete_up_to</b></a>(task_id target_tid) &rarr; void</li><li class="is-family-code"><a href="#D45C1309E0827D72"><b>end</b></a>() const &rarr; task_buffer_iterator</li><li class="is-family-code"><a href="#64F33F0253D955C9"><b>find_task</b></a>(task_id tid) const &rarr; task *</li><li class="is-family-code"><a href="#C8D23E967C8AA472"><b>get_current_task_count</b></a>() const &rarr; size_t</li><li class="is-family-code"><a href="#5552A6BA253D6802"><b>get_task</b></a>(task_id tid) const &rarr; task *</li><li class="is-family-code"><a href="#5446C03E38BAA787"><b>get_total_task_count</b></a>() const &rarr; size_t</li><li class="is-family-code"><a href="#2AE916501848D1CA"><b>has_task</b></a>(task_id tid) const &rarr; bool</li><li class="is-family-code"><a href="#FA453475D087DDC6"><b>put</b></a>(reservation &amp;&amp; reserve, std::unique_ptr&lt;task&gt; task) &rarr; void</li><li class="is-family-code"><a href="#6B6ECE461645C004"><b>reserve_task_entry</b></a>(const wait_callback &amp; wc) &rarr; reservation</li><li class="is-family-code"><a href="#6CD77640964C89B1"><b>revoke_reservation</b></a>(reservation &amp;&amp; reserve) &rarr; void</li><li class="is-family-code hdoc-private"><a href="#A85B89EF0729210D"><b>wait_for_available_slot</b></a>(const wait_callback &amp; wc) const &rarr; void</li></ul><h2>Member Functions</h2><h3 id="D048747203C1E9DB" data-function-name="begin"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#D048747203C1E9DB">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/9D544E50B2F18599/">task_buffer_iterator</a> begin() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L119">include/task_ring_buffer.h:119</a></p><hr class="member-fun-separator"></hr><h3 id="F97F2B85584FF4B6" data-function-name="clear"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#F97F2B85584FF4B6">\xb6</a><code class="hdoc-function-code language-cpp">void clear()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L100">include/task_ring_buffer.h:100</a></p><hr class="member-fun-separator"></hr><h3 id="6DB1352EA854BA0A" data-function-name="delete_up_to"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#6DB1352EA854BA0A">\xb6</a><code class="hdoc-function-code language-cpp">void delete_up_to(<a href="/docs/api/records/322167BB21F2212B/">task_id</a> target_tid)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L92">include/task_ring_buffer.h:92</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/322167BB21F2212B/">task_id</a><b> target_tid</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="D45C1309E0827D72" data-function-name="end"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#D45C1309E0827D72">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/9D544E50B2F18599/">task_buffer_iterator</a> end() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L122">include/task_ring_buffer.h:122</a></p><hr class="member-fun-separator"></hr><h3 id="64F33F0253D955C9" data-function-name="find_task"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#64F33F0253D955C9">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/A42A04C270A2D231/">task</a>* find_task(<a href="/docs/api/records/322167BB21F2212B/">task_id</a> tid) const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L56">include/task_ring_buffer.h:56</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/322167BB21F2212B/">task_id</a><b> tid</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="C8D23E967C8AA472" data-function-name="get_current_task_count"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#C8D23E967C8AA472">\xb6</a><code class="hdoc-function-code language-cpp">size_t get_current_task_count() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L65">include/task_ring_buffer.h:65</a></p><hr class="member-fun-separator"></hr><h3 id="5552A6BA253D6802" data-function-name="get_task"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#5552A6BA253D6802">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/A42A04C270A2D231/">task</a>* get_task(<a href="/docs/api/records/322167BB21F2212B/">task_id</a> tid) const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L58">include/task_ring_buffer.h:58</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/322167BB21F2212B/">task_id</a><b> tid</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="5446C03E38BAA787" data-function-name="get_total_task_count"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#5446C03E38BAA787">\xb6</a><code class="hdoc-function-code language-cpp">size_t get_total_task_count() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L54">include/task_ring_buffer.h:54</a></p><hr class="member-fun-separator"></hr><h3 id="2AE916501848D1CA" data-function-name="has_task"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#2AE916501848D1CA">\xb6</a><code class="hdoc-function-code language-cpp">bool has_task(<a href="/docs/api/records/322167BB21F2212B/">task_id</a> tid) const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L49">include/task_ring_buffer.h:49</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/322167BB21F2212B/">task_id</a><b> tid</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="FA453475D087DDC6" data-function-name="put"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#FA453475D087DDC6">\xb6</a><code class="hdoc-function-code language-cpp">void put(<a href="/docs/api/records/65C8A4D249162EF9/">reservation</a>&amp;&amp; reserve,\n         <a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;task&gt; task)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L85">include/task_ring_buffer.h:85</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/65C8A4D249162EF9/">reservation</a>&amp;&amp;<b> reserve</b></dt><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;task&gt;<b> task</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="6B6ECE461645C004" data-function-name="reserve_task_entry"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#6B6ECE461645C004">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/65C8A4D249162EF9/">reservation</a> reserve_task_entry(\n    const wait_callback&amp; wc)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L72">include/task_ring_buffer.h:72</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const wait_callback&amp;<b> wc</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="6CD77640964C89B1" data-function-name="revoke_reservation"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#6CD77640964C89B1">\xb6</a><code class="hdoc-function-code language-cpp">void revoke_<a href="/docs/api/records/65C8A4D249162EF9/">reservation</a>(reservation&amp;&amp; reserve)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L79">include/task_ring_buffer.h:79</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/65C8A4D249162EF9/">reservation</a>&amp;&amp;<b> reserve</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="A85B89EF0729210D" data-function-name="wait_for_available_slot"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#A85B89EF0729210D">\xb6</a><code class="hdoc-function-code language-cpp">void wait_for_available_slot(\n    const wait_callback&amp; wc) const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L133">include/task_ring_buffer.h:133</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const wait_callback&amp;<b> wc</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',c={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class task_ring_buffer"},l=void 0,n={id:"api/records/2A72265DCF1483F1",title:"class task_ring_buffer",description:"",source:"@site/celerity-runtime/docs/api/records/2A72265DCF1483F1.mdx",sourceDirName:"api/records",slug:"/api/records/2A72265DCF1483F1",permalink:"/docs/api/records/2A72265DCF1483F1",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class task_ring_buffer"},sidebar:"api"},o={},d=[];function p(e){const{Head:a}={...(0,s.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:i}})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>c,x:()=>l});var t=r(96540);const s={},i=t.createContext(s);function c(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);