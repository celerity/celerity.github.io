"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87331],{82769:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>l});var c=a(74848),r=a(28453);const s='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="pageBF74BDC1B9F20E89"><span>struct host_task_instruction_record</span></a></li></ul></nav>\n<main><h1>struct host_task_instruction_record</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct host_task_instruction_record : public implement_acceptor { /* full declaration omitted */ };</code></pre><section><h2>Description</h2><p><p>IDAG record type for a <code>host_task_instruction</code>.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L272">include/recorders.h:272</a></p></aside><section><p>Inherits from: implement_acceptor</p></section><section><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_collective_group_id" data-member-name="collective_group_id">  <a href="/docs/api/records/82BFAD3A3BD6412E/">detail::collective_group_id</a> <b>collective_group_id</b></dt><dt class="is-family-code" id="var_execution_range" data-member-name="execution_range">  <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt; <b>execution_range</b></dt><dt class="is-family-code" id="var_access_map" data-member-name="access_map">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;buffer_access_allocation_record&gt; <b>access_map</b></dt><dt class="is-family-code" id="var_command_group_task_id" data-member-name="command_group_task_id">  <a href="/docs/api/records/322167BB21F2212B/">task_id</a> <b>command_group_task_id</b></dt><dt class="is-family-code" id="var_execution_command_id" data-member-name="execution_command_id">  <a href="/docs/api/records/2D98D7CFB741116F/">command_id</a> <b>execution_command_id</b></dt><dt class="is-family-code" id="var_debug_name" data-member-name="debug_name">  <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a> <b>debug_name</b></dt></dl></section><section><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#67F1ABDE82F0A70C"><b>host_task_instruction_record</b></a>(const host_task_instruction &amp; htinstr, task_id cg_tid, command_id execution_cid, const std::string &amp; debug_name, const std::vector&lt;buffer_memory_record&gt; &amp; buffer_memory_allocation_map)</li></ul></section><section><h2>Member Functions</h2><section><h3 id="67F1ABDE82F0A70C" data-function-name="host_task_instruction_record"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#67F1ABDE82F0A70C">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/DEE1B172AC0242F8/">host_task_instruction</a>_record(\n    const host_task_instruction&amp; htinstr,\n    <a href="/docs/api/records/322167BB21F2212B/">task_id</a> cg_tid,\n    <a href="/docs/api/records/2D98D7CFB741116F/">command_id</a> execution_cid,\n    const <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a>&amp; debug_name,\n    const <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;buffer_memory_record&gt;&amp;\n        buffer_memory_allocation_map)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L280">include/recorders.h:280</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/DEE1B172AC0242F8/">host_task_instruction</a>&amp;<b> htinstr</b></dt><dt class="is-family-code"><a href="/docs/api/records/322167BB21F2212B/">task_id</a><b> cg_tid</b></dt><dt class="is-family-code"><a href="/docs/api/records/2D98D7CFB741116F/">command_id</a><b> execution_cid</b></dt><dt class="is-family-code">const <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a>&amp;<b> debug_name</b></dt><dt class="is-family-code">const <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;buffer_memory_record&gt;&amp;<b> buffer_memory_allocation_map</b></dt></dl></section></section><hr class="member-fun-separator"></hr></section></main>',i={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct host_task_instruction_record"},o=void 0,n={id:"api/records/BF74BDC1B9F20E89",title:"struct host_task_instruction_record",description:"",source:"@site/celerity-runtime/docs/api/records/BF74BDC1B9F20E89.mdx",sourceDirName:"api/records",slug:"/api/records/BF74BDC1B9F20E89",permalink:"/docs/api/records/BF74BDC1B9F20E89",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct host_task_instruction_record"},sidebar:"api"},d={},l=[];function p(e){const{Head:t}={...(0,r.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t,{children:[(0,c.jsx)("script",{src:"/js/highlight.min.js"}),(0,c.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var c=a(96540);const r={},s=c.createContext(r);function i(e){const t=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(s.Provider,{value:t},e.children)}}}]);