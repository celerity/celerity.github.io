"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33375],{75170:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>d});var r=a(74848),c=a(28453);const i='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>class executor: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="pageEB0FEA27227B2B5D"><span>class executor</span></a></li></ul></nav><main class="content"><h1>class executor</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class executor { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>An executor processes receives and processes an instruction stream to process in a background thread.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L15">include/executor.h:15</a></p><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#C0E42E870FE068A6"><b>executor</b></a>()</li><li class="is-family-code"><a href="#3882645966ACACCC"><b>executor</b></a>(const executor &amp;)</li><li class="is-family-code"><a href="#60621933E23BB50D"><b>executor</b></a>(executor &amp;&amp;)</li><li class="is-family-code"><a href="#DAC0AC18DC068BF0"><b>operator=</b></a>(const executor &amp;) &rarr; executor &amp;</li><li class="is-family-code"><a href="#02599DDE66CA0195"><b>operator=</b></a>(executor &amp;&amp;) &rarr; executor &amp;</li><li class="is-family-code"><a href="#6E84EF1B500B9C84"><b>submit</b></a>(std::vector&lt;const instruction *&gt; instructions, std::vector&lt;outbound_pilot&gt; pilots) &rarr; virtual void</li><li class="is-family-code"><a href="#A75BA94004BEDE3D"><b>track_host_object_instance</b></a>(host_object_id hoid, std::unique_ptr&lt;host_object_instance&gt; instance) &rarr; virtual void</li><li class="is-family-code"><a href="#0C95C28BEE0BAF97"><b>track_reducer</b></a>(reduction_id rid, std::unique_ptr&lt;reducer&gt; reducer) &rarr; virtual void</li><li class="is-family-code"><a href="#32194B9D8B9F4D4B"><b>track_user_allocation</b></a>(allocation_id aid, void * ptr) &rarr; virtual void</li><li class="is-family-code"><a href="#9A23EC0137189E73"><b>~executor</b></a>() &rarr; virtual</li></ul><h2>Member Functions</h2><h3 id="C0E42E870FE068A6" data-function-name="executor"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#C0E42E870FE068A6">\xb6</a><code class="hdoc-function-code language-cpp">executor()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L35">include/executor.h:35</a></p><hr class="member-fun-separator"></hr><h3 id="3882645966ACACCC" data-function-name="executor"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#3882645966ACACCC">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/EB0FEA27227B2B5D/">executor</a>(const executor&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L36">include/executor.h:36</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/EB0FEA27227B2B5D/">executor</a>&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="60621933E23BB50D" data-function-name="executor"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#60621933E23BB50D">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/EB0FEA27227B2B5D/">executor</a>(executor&amp;&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L37">include/executor.h:37</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/EB0FEA27227B2B5D/">executor</a>&amp;&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="DAC0AC18DC068BF0" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#DAC0AC18DC068BF0">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/EB0FEA27227B2B5D/">executor</a>&amp; operator=(const <a href="/docs/api/records/EB0FEA27227B2B5D/">executor</a>&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L38">include/executor.h:38</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/EB0FEA27227B2B5D/">executor</a>&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="02599DDE66CA0195" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#02599DDE66CA0195">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/EB0FEA27227B2B5D/">executor</a>&amp; operator=(<a href="/docs/api/records/EB0FEA27227B2B5D/">executor</a>&amp;&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L39">include/executor.h:39</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/EB0FEA27227B2B5D/">executor</a>&amp;&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="6E84EF1B500B9C84" data-function-name="submit"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#6E84EF1B500B9C84">\xb6</a><code class="hdoc-function-code language-cpp">virtual void submit(\n    <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;const instruction*&gt; instructions,\n    <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;outbound_pilot&gt; pilots)</code></pre></h3><h4>Description</h4><p><p>Submits a list of instructions to execute once their dependencies have been fulfilled, and a list of outbound pilots to be transmitted to their recipients as soon as possible. Instructions must be in topological order of dependencies, as must be the concatenation of all vectors passed to subsequent invocations of this function.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L61">include/executor.h:61</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;const instruction*&gt;<b> instructions</b></dt><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;outbound_pilot&gt;<b> pilots</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="A75BA94004BEDE3D" data-function-name="track_host_object_instance"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#A75BA94004BEDE3D">\xb6</a><code class="hdoc-function-code language-cpp">virtual void track_host_object_instance(\n    <a href="/docs/api/records/A0E5B68259E332A7/">host_object_id</a> hoid,\n    <a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;host_object_instance&gt;\n        instance)</code></pre></h3><h4>Description</h4><p><p>Transfer ownership of a host object instance to the executor. The executor will later destroy this instance when executing a matching destroy_host_object_instruction.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L51">include/executor.h:51</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/A0E5B68259E332A7/">host_object_id</a><b> hoid</b></dt><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;host_object_instance&gt;<b> instance</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="0C95C28BEE0BAF97" data-function-name="track_reducer"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#0C95C28BEE0BAF97">\xb6</a><code class="hdoc-function-code language-cpp">virtual void track_reducer(\n    <a href="/docs/api/records/6DD6FF2C7DDED129/">reduction_id</a> rid,\n    <a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;reducer&gt; reducer)</code></pre></h3><h4>Description</h4><p><p>Informs the executor about the runtime behavior of a reduction. Will be used by any fill_identity_instruction and reduce_instruction later submitted on the same reduction_id. Reducer instances are removed from executor tracking and destroyed when they later appear in an instruction_garbage list attached to a horizon or epoch instruction.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L56">include/executor.h:56</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/6DD6FF2C7DDED129/">reduction_id</a><b> rid</b></dt><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;reducer&gt;<b> reducer</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="32194B9D8B9F4D4B" data-function-name="track_user_allocation"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#32194B9D8B9F4D4B">\xb6</a><code class="hdoc-function-code language-cpp">virtual void track_user_allocation(\n    <a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> aid,\n    void* ptr)</code></pre></h3><h4>Description</h4><p><p>Informs the executor about the runtime address of an allocation on user_memory_id. Must be called before submitting any instruction referring to the allocation id in question. User allocations are later removed from executor tracking as they appear in an instruction_garbage list attached to a horizon or epoch instruction.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L47">include/executor.h:47</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a><b> aid</b></dt><dt class="is-family-code">void*<b> ptr</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="9A23EC0137189E73" data-function-name="~executor"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#9A23EC0137189E73">\xb6</a><code class="hdoc-function-code language-cpp">virtual ~executor()</code></pre></h3><h4>Description</h4><p><p>Waits until an epoch with <code>epoch_action::shutdown</code> has executed and the executor thread has exited.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L42">include/executor.h:42</a></p><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',s={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class executor"},o=void 0,n={id:"api/records/EB0FEA27227B2B5D",title:"class executor",description:"",source:"@site/celerity-runtime/docs/api/records/EB0FEA27227B2B5D.mdx",sourceDirName:"api/records",slug:"/api/records/EB0FEA27227B2B5D",permalink:"/docs/api/records/EB0FEA27227B2B5D",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class executor"},sidebar:"api"},l={},d=[];function p(e){const{Head:t}={...(0,c.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t,{children:[(0,r.jsx)("script",{src:"/js/highlight.min.js"}),(0,r.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:i}})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var r=a(96540);const c={},i=r.createContext(c);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);