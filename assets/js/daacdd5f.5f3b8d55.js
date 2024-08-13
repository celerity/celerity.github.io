"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94747],{8139:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=a(74848),o=a(28453);const n='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>class out_of_order_engine: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page8FC483A7BDEF22CC"><span>class out_of_order_engine</span></a></li></ul></nav><main class="content"><h1>class out_of_order_engine</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class out_of_order_engine { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>State machine controlling when and in what manner instructions are assigned to execution resources in adherence to the dependency graph. Based on their type, instructions can either be assigned to begin executing immediately as soon as all their predecessors are complete, or they can be enqueued eagerly in one of the backend\'s thread queues or in-order device queues to hide launch latencies where possible.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/out_of_order_engine.h#L19">include/out_of_order_engine.h:19</a></p><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_impl" data-member-name="m_impl">  <a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;\n    out_of_order_engine_detail::engine_impl&gt; <b>m_impl</b></dt></dl><h2>Member Aliases</h2><ul><li class="is-family-code">using lane_id = size_t;</li></ul><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#8E2523B2E3067BB4"><b>assign_one</b></a>() &rarr; [[nodiscard]] std::optional&lt;assignment&gt;</li><li class="is-family-code"><a href="#5289A8957B67E897"><b>complete_assigned</b></a>(instruction_id iid) &rarr; void</li><li class="is-family-code"><a href="#EC3C522A12A7D987"><b>get_assignment_queue_length</b></a>() const &rarr; size_t</li><li class="is-family-code"><a href="#EBC116B0028912EB"><b>is_idle</b></a>() const &rarr; bool</li><li class="is-family-code"><a href="#0D0502EE5BCA6B13"><b>operator=</b></a>(const out_of_order_engine &amp;) &rarr; out_of_order_engine &amp;</li><li class="is-family-code"><a href="#B1D280F3979D5D31"><b>operator=</b></a>(out_of_order_engine &amp;&amp;) &rarr; out_of_order_engine &amp;</li><li class="is-family-code"><a href="#3F8A8564A38CBDF2"><b>out_of_order_engine</b></a>(const system_info &amp; system) &rarr; explicit</li><li class="is-family-code"><a href="#2FE172A0D3941FE1"><b>out_of_order_engine</b></a>(const out_of_order_engine &amp;)</li><li class="is-family-code"><a href="#65AFC810B5CF3590"><b>out_of_order_engine</b></a>(out_of_order_engine &amp;&amp;)</li><li class="is-family-code"><a href="#F981FD26E90861E8"><b>submit</b></a>(const instruction * instr) &rarr; void</li><li class="is-family-code"><a href="#AB9B94CEE578928C"><b>~out_of_order_engine</b></a>()</li></ul><h2>Member Functions</h2><h3 id="8E2523B2E3067BB4" data-function-name="assign_one"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#8E2523B2E3067BB4">\xb6</a><code class="hdoc-function-code language-cpp">[[nodiscard]] <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;assignment&gt;\nassign_one()</code></pre></h3><h4>Description</h4><p><p>Produce an assignment for one instruction for which either all predecessors have completed, or for which all incomplete predecessors can be implicitly fulfilled by submitting to the same backend queue. If multiple instructions are eligible, assign the one with the highest priority.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/out_of_order_engine.h#L79">include/out_of_order_engine.h:79</a></p><hr class="member-fun-separator"></hr><h3 id="5289A8957B67E897" data-function-name="complete_assigned"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#5289A8957B67E897">\xb6</a><code class="hdoc-function-code language-cpp">void complete_assigned(<a href="/docs/api/records/A10FDF2DB5485BE8/">instruction_id</a> iid)</code></pre></h3><h4>Description</h4><p><p>Call once an instruction that was previously returned from <code>assign_one</code> has completed synchronously or asynchronously. For simplicity it is permitted to mark assigned instructions as completed in any order, even if that would violate internal dependency order.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/out_of_order_engine.h#L83">include/out_of_order_engine.h:83</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/A10FDF2DB5485BE8/">instruction_id</a><b> iid</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="EC3C522A12A7D987" data-function-name="get_assignment_queue_length"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#EC3C522A12A7D987">\xb6</a><code class="hdoc-function-code language-cpp">size_t get_assignment_queue_length() const</code></pre></h3><h4>Description</h4><p><p>Returns the number of instructions currently awaiting normal or eager assignment (diagnostic use only).</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/out_of_order_engine.h#L71">include/out_of_order_engine.h:71</a></p><hr class="member-fun-separator"></hr><h3 id="EBC116B0028912EB" data-function-name="is_idle"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#EBC116B0028912EB">\xb6</a><code class="hdoc-function-code language-cpp">bool is_idle() const</code></pre></h3><h4>Description</h4><p><p>True when all submitted instructions have completed.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/out_of_order_engine.h#L68">include/out_of_order_engine.h:68</a></p><hr class="member-fun-separator"></hr><h3 id="0D0502EE5BCA6B13" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#0D0502EE5BCA6B13">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/8FC483A7BDEF22CC/">out_of_order_engine</a>&amp; operator=(\n    const <a href="/docs/api/records/8FC483A7BDEF22CC/">out_of_order_engine</a>&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/out_of_order_engine.h#L62">include/out_of_order_engine.h:62</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/8FC483A7BDEF22CC/">out_of_order_engine</a>&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="B1D280F3979D5D31" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#B1D280F3979D5D31">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/8FC483A7BDEF22CC/">out_of_order_engine</a>&amp; operator=(\n    <a href="/docs/api/records/8FC483A7BDEF22CC/">out_of_order_engine</a>&amp;&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/out_of_order_engine.h#L63">include/out_of_order_engine.h:63</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/8FC483A7BDEF22CC/">out_of_order_engine</a>&amp;&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="3F8A8564A38CBDF2" data-function-name="out_of_order_engine"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#3F8A8564A38CBDF2">\xb6</a><code class="hdoc-function-code language-cpp">explicit out_of_order_engine(\n    const <a href="/docs/api/records/8B87A955194B6925/">system_info</a>&amp; system)</code></pre></h3><h4>Description</h4><p><p>Constructor requires a <code>system_info</code> to enumerate devices and perform <code>memory_id -&gt; device_id</code> mapping.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/out_of_order_engine.h#L58">include/out_of_order_engine.h:58</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/8B87A955194B6925/">system_info</a>&amp;<b> system</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="2FE172A0D3941FE1" data-function-name="out_of_order_engine"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#2FE172A0D3941FE1">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/8FC483A7BDEF22CC/">out_of_order_engine</a>(const out_of_order_engine&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/out_of_order_engine.h#L60">include/out_of_order_engine.h:60</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/8FC483A7BDEF22CC/">out_of_order_engine</a>&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="65AFC810B5CF3590" data-function-name="out_of_order_engine"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#65AFC810B5CF3590">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/8FC483A7BDEF22CC/">out_of_order_engine</a>(out_of_order_engine&amp;&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/out_of_order_engine.h#L61">include/out_of_order_engine.h:61</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/8FC483A7BDEF22CC/">out_of_order_engine</a>&amp;&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="F981FD26E90861E8" data-function-name="submit"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#F981FD26E90861E8">\xb6</a><code class="hdoc-function-code language-cpp">void submit(const <a href="/docs/api/records/406117B5A814B8B4/">instruction</a>* instr)</code></pre></h3><h4>Description</h4><p><p>Begin tracking an instruction so that it is eventually returned through <code>assign_one</code>. Must be called in topological order of dependencies, i.e. no instruction must be submitted before one of its predecessors in the graph.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/out_of_order_engine.h#L75">include/out_of_order_engine.h:75</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/406117B5A814B8B4/">instruction</a>*<b> instr</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="AB9B94CEE578928C" data-function-name="~out_of_order_engine"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#AB9B94CEE578928C">\xb6</a><code class="hdoc-function-code language-cpp">~out_of_order_engine()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/out_of_order_engine.h#L65">include/out_of_order_engine.h:65</a></p><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',s={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class out_of_order_engine"},t=void 0,c={id:"api/records/8FC483A7BDEF22CC",title:"class out_of_order_engine",description:"",source:"@site/celerity-runtime/docs/api/records/8FC483A7BDEF22CC.mdx",sourceDirName:"api/records",slug:"/api/records/8FC483A7BDEF22CC",permalink:"/docs/api/records/8FC483A7BDEF22CC",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class out_of_order_engine"},sidebar:"api"},l={},d=[];function p(e){const{Head:r}={...(0,o.R)(),...e.components};return r||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r,{children:[(0,i.jsx)("script",{src:"/js/highlight.min.js"}),(0,i.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>s,x:()=>t});var i=a(96540);const o={},n=i.createContext(o);function s(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);