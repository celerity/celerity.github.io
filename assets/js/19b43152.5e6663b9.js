"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23930],{97959:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>n,toc:()=>d});var t=i(74848),s=i(28453);const c='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="pageFFBBC15F613CBC0C"><span>class receive_instruction_impl</span></a></li></ul></nav>\n<main><h1>class receive_instruction_impl</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class receive_instruction_impl { /* full declaration omitted */ };</code></pre><section><h2>Description</h2><p><p>Common implementation mixin for receive_instruction and split_receive_instruction.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L256">include/instruction_graph.h:256</a></p></aside><section><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_trid" data-member-name="m_trid">  <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a> <b>m_trid</b></dt><dt class="is-family-code hdoc-private" id="var_m_request" data-member-name="m_request">  <a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt; <b>m_request</b></dt><dt class="is-family-code hdoc-private" id="var_m_dest_aid" data-member-name="m_dest_aid">  <a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> <b>m_dest_aid</b></dt><dt class="is-family-code hdoc-private" id="var_m_allocated_box" data-member-name="m_allocated_box">  <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt; <b>m_allocated_box</b></dt><dt class="is-family-code hdoc-private" id="var_m_elem_size" data-member-name="m_elem_size">  size_t <b>m_elem_size</b></dt></dl></section><section><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#C159BB70889FD23B"><b>get_allocated_box</b></a>() const &rarr; const box&lt;3&gt; &amp;</li><li class="is-family-code"><a href="#25A9CF182276606E"><b>get_dest_allocation_id</b></a>() const &rarr; allocation_id</li><li class="is-family-code"><a href="#59E873CD7D4FDB2C"><b>get_element_size</b></a>() const &rarr; size_t</li><li class="is-family-code"><a href="#4042C4D90EFBB191"><b>get_requested_region</b></a>() const &rarr; const region&lt;3&gt; &amp;</li><li class="is-family-code"><a href="#BC260EE9AC6F9504"><b>get_transfer_id</b></a>() const &rarr; const transfer_id &amp;</li><li class="is-family-code"><a href="#C295A5A2C53D3A31"><b>receive_instruction_impl</b></a>(const transfer_id &amp; trid, region&lt;3&gt; request, allocation_id dest_allocation, const box&lt;3&gt; &amp; allocated_box, size_t elem_size) &rarr; explicit</li></ul></section><section><h2>Member Functions</h2><section><h3 id="C159BB70889FD23B" data-function-name="get_allocated_box"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#C159BB70889FD23B">\xb6</a><code class="hdoc-function-code language-cpp">const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp; get_allocated_box() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L265">include/instruction_graph.h:265</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="25A9CF182276606E" data-function-name="get_dest_allocation_id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#25A9CF182276606E">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> get_dest_allocation_id() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L264">include/instruction_graph.h:264</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="59E873CD7D4FDB2C" data-function-name="get_element_size"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#59E873CD7D4FDB2C">\xb6</a><code class="hdoc-function-code language-cpp">size_t get_element_size() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L266">include/instruction_graph.h:266</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="4042C4D90EFBB191" data-function-name="get_requested_region"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#4042C4D90EFBB191">\xb6</a><code class="hdoc-function-code language-cpp">const <a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt;&amp; get_requested_region() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L263">include/instruction_graph.h:263</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="BC260EE9AC6F9504" data-function-name="get_transfer_id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#BC260EE9AC6F9504">\xb6</a><code class="hdoc-function-code language-cpp">const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp; get_transfer_id() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L262">include/instruction_graph.h:262</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="C295A5A2C53D3A31" data-function-name="receive_instruction_impl"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#C295A5A2C53D3A31">\xb6</a><code class="hdoc-function-code language-cpp">explicit receive_instruction_impl(\n    const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp; trid,\n    <a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt; request,\n    <a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> dest_allocation,\n    const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp; allocated_box,\n    size_t elem_size)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L258">include/instruction_graph.h:258</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp;<b> trid</b></dt><dt class="is-family-code"><a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt;<b> request</b></dt><dt class="is-family-code"><a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a><b> dest_allocation</b></dt><dt class="is-family-code">const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp;<b> allocated_box</b></dt><dt class="is-family-code">size_t<b> elem_size</b></dt></dl></section></section><hr class="member-fun-separator"></hr></section></main>',r={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class receive_instruction_impl"},o=void 0,n={id:"api/records/FFBBC15F613CBC0C",title:"class receive_instruction_impl",description:"",source:"@site/celerity-runtime/docs/api/records/FFBBC15F613CBC0C.mdx",sourceDirName:"api/records",slug:"/api/records/FFBBC15F613CBC0C",permalink:"/docs/api/records/FFBBC15F613CBC0C",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class receive_instruction_impl"},sidebar:"api"},l={},d=[];function p(e){const{Head:a}={...(0,s.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:c}})]})}function m(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,a,i)=>{i.d(a,{R:()=>r,x:()=>o});var t=i(96540);const s={},c=t.createContext(s);function r(e){const a=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(c.Provider,{value:a},e.children)}}}]);