"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48283],{71481:(e,a,c)=>{c.r(a),c.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>d});var t=c(74848),o=c(28453);const s='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#F04B845B7443865D"><span>namespace instruction_graph_generator_detail</span></a></li><li class="is-active"><a aria-current="page159E2C14F79F36EB"><span>struct buffer_memory_state</span></a></li></ul></nav>\n<main><h1>struct buffer_memory_state</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct buffer_memory_state { /* full declaration omitted */ };</code></pre><section><h2>Description</h2><p><p>Per-memory state for a single buffer. Dependencies and last writers are tracked on the contained allocations.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/instruction_graph_generator.cc#L324">src/instruction_graph_generator.cc:324</a></p></aside><section><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_allocations" data-member-name="allocations">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;buffer_allocation_state&gt; <b>allocations</b></dt></dl></section><section><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#967FA3B15D12BDC3"><b>apply_epoch</b></a>(instruction * epoch) &rarr; void</li><li class="is-family-code"><a href="#FFF2D437D80931A8"><b>find_contiguous_allocation</b></a>(const box&lt;3&gt; &amp; box) const &rarr; const buffer_allocation_state *</li><li class="is-family-code"><a href="#22CDB13E34C6D646"><b>find_contiguous_allocation</b></a>(const box&lt;3&gt; &amp; box) &rarr; buffer_allocation_state *</li><li class="is-family-code"><a href="#8BD34173BD174DF1"><b>get_allocation</b></a>(allocation_id aid) const &rarr; const buffer_allocation_state &amp;</li><li class="is-family-code"><a href="#E44FF75E6AE50794"><b>get_allocation</b></a>(allocation_id aid) &rarr; buffer_allocation_state &amp;</li><li class="is-family-code"><a href="#50BB0C8520082FE7"><b>get_contiguous_allocation</b></a>(const box&lt;3&gt; &amp; box) const &rarr; const buffer_allocation_state &amp;</li><li class="is-family-code"><a href="#FA973316F7D300F5"><b>get_contiguous_allocation</b></a>(const box&lt;3&gt; &amp; box) &rarr; buffer_allocation_state &amp;</li><li class="is-family-code"><a href="#20D02E81C7B8E742"><b>is_allocated_contiguously</b></a>(const box&lt;3&gt; &amp; box) const &rarr; bool</li></ul></section><section><h2>Member Functions</h2><section><h3 id="967FA3B15D12BDC3" data-function-name="apply_epoch"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#967FA3B15D12BDC3">\xb6</a><code class="hdoc-function-code language-cpp">void apply_epoch(<a href="/docs/api/records/406117B5A814B8B4/">instruction</a>* epoch)</code></pre></h3><section><h4>Description</h4><p><p>Replace all tracked instructions that older than <code>epoch</code> with <code>epoch</code>.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/instruction_graph_generator.cc#L361">src/instruction_graph_generator.cc:361</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/406117B5A814B8B4/">instruction</a>*<b> epoch</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="FFF2D437D80931A8" data-function-name="find_contiguous_allocation"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#FFF2D437D80931A8">\xb6</a><code class="hdoc-function-code language-cpp">const <a href="/docs/api/records/A9233FB7C525B6CC/">buffer_allocation_state</a>*\nfind_contiguous_allocation(\n    const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp; box) const</code></pre></h3><section><h4>Description</h4><p><p>Returns the (unique) allocation covering <code>box</code> if such an allocation exists, otherwise nullptr.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/instruction_graph_generator.cc#L338">src/instruction_graph_generator.cc:338</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp;<b> box</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="22CDB13E34C6D646" data-function-name="find_contiguous_allocation"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#22CDB13E34C6D646">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/A9233FB7C525B6CC/">buffer_allocation_state</a>*\nfind_contiguous_allocation(const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp; box)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/instruction_graph_generator.cc#L343">src/instruction_graph_generator.cc:343</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp;<b> box</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="8BD34173BD174DF1" data-function-name="get_allocation"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#8BD34173BD174DF1">\xb6</a><code class="hdoc-function-code language-cpp">const <a href="/docs/api/records/A9233FB7C525B6CC/">buffer_allocation_state</a>&amp; get_allocation(\n    <a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> aid) const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/instruction_graph_generator.cc#L329">src/instruction_graph_generator.cc:329</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a><b> aid</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="E44FF75E6AE50794" data-function-name="get_allocation"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#E44FF75E6AE50794">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/A9233FB7C525B6CC/">buffer_allocation_state</a>&amp; get_allocation(\n    <a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> aid)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/instruction_graph_generator.cc#L335">src/instruction_graph_generator.cc:335</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a><b> aid</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="50BB0C8520082FE7" data-function-name="get_contiguous_allocation"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#50BB0C8520082FE7">\xb6</a><code class="hdoc-function-code language-cpp">const <a href="/docs/api/records/A9233FB7C525B6CC/">buffer_allocation_state</a>&amp;\nget_contiguous_allocation(const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp; box) const</code></pre></h3><section><h4>Description</h4><p><p>Returns the (unique) allocation covering <code>box</code>.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/instruction_graph_generator.cc#L348">src/instruction_graph_generator.cc:348</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp;<b> box</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="FA973316F7D300F5" data-function-name="get_contiguous_allocation"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#FA973316F7D300F5">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/A9233FB7C525B6CC/">buffer_allocation_state</a>&amp;\nget_contiguous_allocation(const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp; box)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/instruction_graph_generator.cc#L354">src/instruction_graph_generator.cc:354</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp;<b> box</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="20D02E81C7B8E742" data-function-name="is_allocated_contiguously"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#20D02E81C7B8E742">\xb6</a><code class="hdoc-function-code language-cpp">bool is_allocated_contiguously(\n    const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp; box) const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/instruction_graph_generator.cc#L358">src/instruction_graph_generator.cc:358</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp;<b> box</b></dt></dl></section></section><hr class="member-fun-separator"></hr></section></main>',r={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct buffer_memory_state"},i=void 0,n={id:"api/records/159E2C14F79F36EB",title:"struct buffer_memory_state",description:"",source:"@site/celerity-runtime/docs/api/records/159E2C14F79F36EB.mdx",sourceDirName:"api/records",slug:"/api/records/159E2C14F79F36EB",permalink:"/docs/api/records/159E2C14F79F36EB",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct buffer_memory_state"},sidebar:"api"},l={},d=[];function p(e){const{Head:a}={...(0,o.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function h(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,a,c)=>{c.d(a,{R:()=>r,x:()=>i});var t=c(96540);const o={},s=t.createContext(o);function r(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);