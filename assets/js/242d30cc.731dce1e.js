"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55052],{94545:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>d});var i=r(74848),t=r(28453);const c='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>class receive_arbiter: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page216933A41B17F052"><span>class receive_arbiter</span></a></li></ul></nav><main class="content"><h1>class receive_arbiter</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class receive_arbiter { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>Matches receive instructions to inbound pilots and triggers in-place payload receives on the communicator. For scalability reasons, distributed command graph generation only yields exact destinations and buffer sub-ranges for push commands, while await-pushes do not carry such information - they just denote the full region to be received. Sender nodes later communicate the exact ranges to the receiver during execution time via pilot messages that are generated alongside the instruction graph. The receive_arbiter\'s job is to match these inbound pilots to receive instructions generated from await-push commands to issue in-place receives (i.e. <code>MPI_Recv</code>) of the data into an appropriate host allocation. Since these inputs may arrive in arbitrary order, it maintains a separate state machine for each <code>transfer_id</code> to drive all operations that eventually result in completing an <code>async_event</code> for each receive instruction.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L92">include/receive_arbiter.h:92</a></p><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_comm" data-member-name="m_comm">  <a href="/docs/api/records/5445ADDDC225FF35/">communicator</a>* <b>m_comm</b></dt><dt class="is-family-code hdoc-private" id="var_m_num_nodes" data-member-name="m_num_nodes">  size_t <b>m_num_nodes</b></dt><dt class="is-family-code hdoc-private" id="var_m_transfers" data-member-name="m_transfers">  <a href="https://en.cppreference.com/w/cpp/container/unordered_map">std::unordered_map</a>&lt;\n    transfer_id,\n    receive_arbiter_detail::transfer&gt; <b>m_transfers</b></dt><dd>State machines for all `transfer_id`s that were mentioned in an inbound pilot or call to one of the receive functions. Once a transfer is complete, it is cleared from `m_transfers`, but `multi_region_transfer`s can be re-created if there later appears another pair of inbound pilots and `receive`s for the same transfer id that did not temporally overlap with the original ones.</dd></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#BA45DFE21B3C5425"><b>await_split_receive_subregion</b></a>(const transfer_id &amp; trid, const region&lt;3&gt; &amp; subregion) &rarr; [[nodiscard]] async_event</li><li class="is-family-code"><a href="#3EE62C27B7131BC5"><b>begin_split_receive</b></a>(const transfer_id &amp; trid, const region&lt;3&gt; &amp; request, void * allocation, const box&lt;3&gt; &amp; allocated_box, size_t elem_size) &rarr; void</li><li class="is-family-code"><a href="#E9CE2AD73E7977C7"><b>gather_receive</b></a>(const transfer_id &amp; trid, void * allocation, size_t node_chunk_size) &rarr; [[nodiscard]] async_event</li><li class="is-family-code"><a href="#406527BAD8C68180"><b>operator=</b></a>(const receive_arbiter &amp;) &rarr; receive_arbiter &amp;</li><li class="is-family-code"><a href="#57BD323D3B92F3FD"><b>operator=</b></a>(receive_arbiter &amp;&amp;) &rarr; receive_arbiter &amp;</li><li class="is-family-code"><a href="#1B92F57BC08D10FE"><b>poll_communicator</b></a>() &rarr; void</li><li class="is-family-code"><a href="#0D4F0762CD7C69E5"><b>receive</b></a>(const transfer_id &amp; trid, const region&lt;3&gt; &amp; request, void * allocation, const box&lt;3&gt; &amp; allocated_box, size_t elem_size) &rarr; [[nodiscard]] async_event</li><li class="is-family-code"><a href="#0DF6077C98F81706"><b>receive_arbiter</b></a>(communicator &amp; comm) &rarr; explicit</li><li class="is-family-code"><a href="#528B692AF8CBEDE5"><b>receive_arbiter</b></a>(const receive_arbiter &amp;)</li><li class="is-family-code"><a href="#5C41C9FF283167DE"><b>receive_arbiter</b></a>(receive_arbiter &amp;&amp;)</li><li class="is-family-code"><a href="#C6E1614A2BCC0864"><b>~receive_arbiter</b></a>()</li><li class="is-family-code hdoc-private"><a href="#44557AF9E4195493"><b>handle_gather_request_pilot</b></a>(receive_arbiter_detail::gather_request &amp; gr, const inbound_pilot &amp; pilot) &rarr; void</li><li class="is-family-code hdoc-private"><a href="#0AC461E90967B8BC"><b>handle_region_request_pilot</b></a>(receive_arbiter_detail::region_request &amp; rr, const inbound_pilot &amp; pilot, size_t elem_size) &rarr; void</li><li class="is-family-code hdoc-private"><a href="#9D9CD95C98053AC5"><b>initiate_region_request</b></a>(const transfer_id &amp; trid, const region&lt;3&gt; &amp; request, void * allocation, const box&lt;3&gt; &amp; allocated_box, size_t elem_size) &rarr; receive_arbiter_detail::stable_region_request &amp;</li></ul><h2>Member Functions</h2><h3 id="BA45DFE21B3C5425" data-function-name="await_split_receive_subregion"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#BA45DFE21B3C5425">\xb6</a><code class="hdoc-function-code language-cpp">[[nodiscard]] <a href="/docs/api/records/75C01CF859B866AB/">async_event</a>\nawait_split_receive_subregion(\n    const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp; trid,\n    const <a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt;&amp; subregion)</code></pre></h3><h4>Description</h4><p><p>To be called after <code>begin_split_receive</code> to await receiving a <code>subregion</code> of the original request. Subregions passed to different invocations of this function may overlap, but must not exceed the original request. If the entire split-receive has finished already, this will return an instantly complete event.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L116">include/receive_arbiter.h:116</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp;<b> trid</b></dt><dt class="is-family-code">const <a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt;&amp;<b> subregion</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="3EE62C27B7131BC5" data-function-name="begin_split_receive"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#3EE62C27B7131BC5">\xb6</a><code class="hdoc-function-code language-cpp">void begin_split_receive(\n    const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp; trid,\n    const <a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt;&amp; request,\n    void* allocation,\n    const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp; allocated_box,\n    size_t elem_size)</code></pre></h3><h4>Description</h4><p><p>Begin the reception of a buffer region into an existing allocation similar to <code>receive</code>, but do not await its completion with a single <code>async_event</code>. Instead, the caller must follow up with calls to <code>await_split_receive_subregion</code> to the same <code>transfer_id</code> whose request regions do not necessarily have to be disjoint, but whose union must be equal to the original <code>request</code>.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L111">include/receive_arbiter.h:111</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp;<b> trid</b></dt><dt class="is-family-code">const <a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt;&amp;<b> request</b></dt><dt class="is-family-code">void*<b> allocation</b></dt><dt class="is-family-code">const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp;<b> allocated_box</b></dt><dt class="is-family-code">size_t<b> elem_size</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="E9CE2AD73E7977C7" data-function-name="gather_receive"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#E9CE2AD73E7977C7">\xb6</a><code class="hdoc-function-code language-cpp">[[nodiscard]] <a href="/docs/api/records/75C01CF859B866AB/">async_event</a> gather_receive(\n    const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp; trid,\n    void* allocation,\n    size_t node_chunk_size)</code></pre></h3><h4>Description</h4><p><p>Receive a contiguous chunk of data from every peer node, placing the results in <code>allocation[node_chunk_size * node_id]</code>. The location reserved for the local node is not written to and may be concurrently accessed while this operation is in progress. If a peer node announces that it will not contribute to this transfer by sending an empty-box pilot, its location will also remain unmodified. This feature is a temporary solution until we implement inter-node reductions through inter-node collectives.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L123">include/receive_arbiter.h:123</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp;<b> trid</b></dt><dt class="is-family-code">void*<b> allocation</b></dt><dt class="is-family-code">size_t<b> node_chunk_size</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="406527BAD8C68180" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#406527BAD8C68180">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/216933A41B17F052/">receive_arbiter</a>&amp; operator=(const <a href="/docs/api/records/216933A41B17F052/">receive_arbiter</a>&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L99">include/receive_arbiter.h:99</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/216933A41B17F052/">receive_arbiter</a>&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="57BD323D3B92F3FD" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#57BD323D3B92F3FD">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/216933A41B17F052/">receive_arbiter</a>&amp; operator=(<a href="/docs/api/records/216933A41B17F052/">receive_arbiter</a>&amp;&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L100">include/receive_arbiter.h:100</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/216933A41B17F052/">receive_arbiter</a>&amp;&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="1B92F57BC08D10FE" data-function-name="poll_communicator"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#1B92F57BC08D10FE">\xb6</a><code class="hdoc-function-code language-cpp">void poll_communicator()</code></pre></h3><h4>Description</h4><p><p>Polls the communicator for inbound pilots and advances the state of all ongoing receive operations. This is expected to be called in a loop unconditionally.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L127">include/receive_arbiter.h:127</a></p><hr class="member-fun-separator"></hr><h3 id="0D4F0762CD7C69E5" data-function-name="receive"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#0D4F0762CD7C69E5">\xb6</a><code class="hdoc-function-code language-cpp">[[nodiscard]] <a href="/docs/api/records/75C01CF859B866AB/">async_event</a> receive(\n    const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp; trid,\n    const <a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt;&amp; request,\n    void* allocation,\n    const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp; allocated_box,\n    size_t elem_size)</code></pre></h3><h4>Description</h4><p><p>Receive a buffer region associated with a single transfer id <code>trid</code> into an existing <code>allocation</code> with size <code>allocated_box.size() * elem_size</code>. The <code>request</code> region must be fully contained in <code>allocated_box</code>, and the caller must ensure that it the communicator will not receive an inbound pilot that intersects <code>request</code> without being fully contained in it. The returned <code>async_event</code> will complete once the receive is complete.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L106">include/receive_arbiter.h:106</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp;<b> trid</b></dt><dt class="is-family-code">const <a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt;&amp;<b> request</b></dt><dt class="is-family-code">void*<b> allocation</b></dt><dt class="is-family-code">const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp;<b> allocated_box</b></dt><dt class="is-family-code">size_t<b> elem_size</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="0DF6077C98F81706" data-function-name="receive_arbiter"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#0DF6077C98F81706">\xb6</a><code class="hdoc-function-code language-cpp">explicit receive_arbiter(<a href="/docs/api/records/5445ADDDC225FF35/">communicator</a>&amp; comm)</code></pre></h3><h4>Description</h4><p><p><code>receive_arbiter</code> will use <code>comm</code> to poll for inbound pilots and issue payload-receives.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L95">include/receive_arbiter.h:95</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/5445ADDDC225FF35/">communicator</a>&amp;<b> comm</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="528B692AF8CBEDE5" data-function-name="receive_arbiter"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#528B692AF8CBEDE5">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/216933A41B17F052/">receive_arbiter</a>(const receive_arbiter&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L97">include/receive_arbiter.h:97</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/216933A41B17F052/">receive_arbiter</a>&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="5C41C9FF283167DE" data-function-name="receive_arbiter"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#5C41C9FF283167DE">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/216933A41B17F052/">receive_arbiter</a>(receive_arbiter&amp;&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L98">include/receive_arbiter.h:98</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/216933A41B17F052/">receive_arbiter</a>&amp;&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="C6E1614A2BCC0864" data-function-name="~receive_arbiter"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#C6E1614A2BCC0864">\xb6</a><code class="hdoc-function-code language-cpp">~receive_arbiter()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L101">include/receive_arbiter.h:101</a></p><hr class="member-fun-separator"></hr><h3 id="44557AF9E4195493" data-function-name="handle_gather_request_pilot"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#44557AF9E4195493">\xb6</a><code class="hdoc-function-code language-cpp">void handle_gather_request_pilot(\n    <a href="/docs/api/records/E37F713BAC9F4587/">receive_arbiter_detail::gather_request</a>&amp; gr,\n    const <a href="/docs/api/records/D8F223F6196D9823/">inbound_pilot</a>&amp; pilot)</code></pre></h3><h4>Description</h4><p><p>Updates the state of an active <code>gather_request</code> from receiving an inbound pilot.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L146">include/receive_arbiter.h:146</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/E37F713BAC9F4587/">receive_arbiter_detail::gather_request</a>&amp;<b> gr</b></dt><dt class="is-family-code">const <a href="/docs/api/records/D8F223F6196D9823/">inbound_pilot</a>&amp;<b> pilot</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="0AC461E90967B8BC" data-function-name="handle_region_request_pilot"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#0AC461E90967B8BC">\xb6</a><code class="hdoc-function-code language-cpp">void handle_region_request_pilot(\n    <a href="/docs/api/records/6BE2837F29BA2FC7/">receive_arbiter_detail::region_request</a>&amp; rr,\n    const <a href="/docs/api/records/D8F223F6196D9823/">inbound_pilot</a>&amp; pilot,\n    size_t elem_size)</code></pre></h3><h4>Description</h4><p><p>Updates the state of an active <code>region_request</code> from receiving an inbound pilot.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L143">include/receive_arbiter.h:143</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/6BE2837F29BA2FC7/">receive_arbiter_detail::region_request</a>&amp;<b> rr</b></dt><dt class="is-family-code">const <a href="/docs/api/records/D8F223F6196D9823/">inbound_pilot</a>&amp;<b> pilot</b></dt><dt class="is-family-code">size_t<b> elem_size</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="9D9CD95C98053AC5" data-function-name="initiate_region_request"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#9D9CD95C98053AC5">\xb6</a><code class="hdoc-function-code language-cpp">receive_arbiter_detail::stable_region_request&amp;\ninitiate_region_request(\n    const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp; trid,\n    const <a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt;&amp; request,\n    void* allocation,\n    const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp; allocated_box,\n    size_t elem_size)</code></pre></h3><h4>Description</h4><p><p>Initiates a new <code>region_request</code> for which the caller can construct events to await either the entire region or sub-regions.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/receive_arbiter.h#L139">include/receive_arbiter.h:139</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp;<b> trid</b></dt><dt class="is-family-code">const <a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt;&amp;<b> request</b></dt><dt class="is-family-code">void*<b> allocation</b></dt><dt class="is-family-code">const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp;<b> allocated_box</b></dt><dt class="is-family-code">size_t<b> elem_size</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',s={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class receive_arbiter"},o=void 0,n={id:"api/records/216933A41B17F052",title:"class receive_arbiter",description:"",source:"@site/celerity-runtime/docs/api/records/216933A41B17F052.mdx",sourceDirName:"api/records",slug:"/api/records/216933A41B17F052",permalink:"/docs/api/records/216933A41B17F052",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class receive_arbiter"},sidebar:"api"},l={},d=[];function p(e){const{Head:a}={...(0,t.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a,{children:[(0,i.jsx)("script",{src:"/js/highlight.min.js"}),(0,i.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:c}})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>s,x:()=>o});var i=r(96540);const t={},c=i.createContext(t);function s(e){const a=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(c.Provider,{value:a},e.children)}}}]);