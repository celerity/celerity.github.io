"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57106],{19854:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var t=a(74848),c=a(28453);const s='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="pageEE61652242BE214D"><span>class fill_identity_instruction</span></a></li></ul></nav>\n<main><h1>class fill_identity_instruction</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class fill_identity_instruction : public implement_acceptor { /* full declaration omitted */ };</code></pre><section><h2>Description</h2><p><p>Fills an allocation with the identity value of a reduction. Used as a predecessor to gather_receive_instruction to ensure that peer nodes that do not contribute a partial reduction result leave the identity value in their gather slot.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L332">include/instruction_graph.h:332</a></p></aside><section><p>Inherits from: implement_acceptor</p></section><section><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_rid" data-member-name="m_rid">  <a href="/docs/api/records/6DD6FF2C7DDED129/">reduction_id</a> <b>m_rid</b></dt><dt class="is-family-code hdoc-private" id="var_m_aid" data-member-name="m_aid">  <a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> <b>m_aid</b></dt><dt class="is-family-code hdoc-private" id="var_m_num_values" data-member-name="m_num_values">  size_t <b>m_num_values</b></dt></dl></section><section><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#0876943954D73C31"><b>fill_identity_instruction</b></a>(instruction_id iid, int priority, reduction_id rid, allocation_id allocation_id, size_t num_values) &rarr; explicit</li><li class="is-family-code"><a href="#62601CCDA2E455F7"><b>get_allocation_id</b></a>() const &rarr; allocation_id</li><li class="is-family-code"><a href="#540C1B2842A1B07F"><b>get_num_values</b></a>() const &rarr; size_t</li><li class="is-family-code"><a href="#63B47F15A4AD3DE1"><b>get_reduction_id</b></a>() const &rarr; reduction_id</li></ul></section><section><h2>Member Functions</h2><section><h3 id="0876943954D73C31" data-function-name="fill_identity_instruction"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#0876943954D73C31">\xb6</a><code class="hdoc-function-code language-cpp">explicit fill_identity_instruction(\n    <a href="/docs/api/records/A10FDF2DB5485BE8/">instruction_id</a> iid,\n    int priority,\n    <a href="/docs/api/records/6DD6FF2C7DDED129/">reduction_id</a> rid,\n    <a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> allocation_id,\n    size_t num_values)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L334">include/instruction_graph.h:334</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/A10FDF2DB5485BE8/">instruction_id</a><b> iid</b></dt><dt class="is-family-code">int<b> priority</b></dt><dt class="is-family-code"><a href="/docs/api/records/6DD6FF2C7DDED129/">reduction_id</a><b> rid</b></dt><dt class="is-family-code"><a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a><b> allocation_id</b></dt><dt class="is-family-code">size_t<b> num_values</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="62601CCDA2E455F7" data-function-name="get_allocation_id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#62601CCDA2E455F7">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> get_allocation_id() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L339">include/instruction_graph.h:339</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="540C1B2842A1B07F" data-function-name="get_num_values"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#540C1B2842A1B07F">\xb6</a><code class="hdoc-function-code language-cpp">size_t get_num_values() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L340">include/instruction_graph.h:340</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="63B47F15A4AD3DE1" data-function-name="get_reduction_id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#63B47F15A4AD3DE1">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/6DD6FF2C7DDED129/">reduction_id</a> get_reduction_id() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/instruction_graph.h#L338">include/instruction_graph.h:338</a></p></aside></section><hr class="member-fun-separator"></hr></section></main>',n={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class fill_identity_instruction"},r=void 0,o={id:"api/records/EE61652242BE214D",title:"class fill_identity_instruction",description:"",source:"@site/celerity-runtime/docs/api/records/EE61652242BE214D.mdx",sourceDirName:"api/records",slug:"/api/records/EE61652242BE214D",permalink:"/docs/api/records/EE61652242BE214D",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class fill_identity_instruction"},sidebar:"api"},d={},l=[];function p(e){const{Head:i}={...(0,c.R)(),...e.components};return i||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function u(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,i,a)=>{a.d(i,{R:()=>n,x:()=>r});var t=a(96540);const c={},s=t.createContext(c);function n(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:n(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);