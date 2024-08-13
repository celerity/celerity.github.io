"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81974],{69606:(e,r,c)=>{c.r(r),c.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>l});var a=c(74848),t=c(28453);const o='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="pageE8FA12264299E0BA"><span>class instruction_recorder</span></a></li></ul></nav>\n<main><h1>class instruction_recorder</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class instruction_recorder { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>Records instructions and outbound pilots on instruction-graph generation.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L421">include/recorders.h:421</a></p><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_recorded_instructions" data-member-name="m_recorded_instructions">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;std::unique_ptr&lt;instruction_record&gt;&gt; <b>m_recorded_instructions</b></dt><dt class="is-family-code hdoc-private" id="var_m_recorded_dependencies" data-member-name="m_recorded_dependencies">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;instruction_dependency_record&gt; <b>m_recorded_dependencies</b></dt><dt class="is-family-code hdoc-private" id="var_m_recorded_pilots" data-member-name="m_recorded_pilots">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;outbound_pilot&gt; <b>m_recorded_pilots</b></dt><dt class="is-family-code hdoc-private" id="var_m_await_push_cids" data-member-name="m_await_push_cids">  <a href="https://en.cppreference.com/w/cpp/container/unordered_map">std::unordered_map</a>&lt;transfer_id, command_id&gt; <b>m_await_push_cids</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#4A6ADA49467162A3"><b>get_await_push_command_id</b></a>(const transfer_id &amp; trid) const &rarr; command_id</li><li class="is-family-code"><a href="#955EDF4D8BB573ED"><b>get_dependencies</b></a>() const &rarr; const std::vector&lt;instruction_dependency_record&gt; &amp;</li><li class="is-family-code"><a href="#DDA09AE24879CAB7"><b>get_instruction</b></a>(instruction_id iid) const &rarr; const instruction_record &amp;</li><li class="is-family-code"><a href="#6D4E7B66AD700627"><b>get_instructions</b></a>() const &rarr; const std::vector&lt;std::unique_ptr&lt;instruction_record&gt;&gt; &amp;</li><li class="is-family-code"><a href="#048213C34AD97CEB"><b>get_outbound_pilots</b></a>() const &rarr; const std::vector&lt;outbound_pilot&gt; &amp;</li><li class="is-family-code"><a href="#78E18AC002E767DD"><b>record_await_push_command_id</b></a>(const transfer_id &amp; trid, command_id cid) &rarr; void</li><li class="is-family-code"><a href="#B91B6C9110D35A4A"><b>record_dependency</b></a>(const instruction_dependency_record &amp; dependency) &rarr; void</li><li class="is-family-code"><a href="#9122975B565B3AFF"><b>record_instruction</b></a>(std::unique_ptr&lt;instruction_record&gt; record) &rarr; void</li><li class="is-family-code"><a href="#D2EE19D2EA499999"><b>record_outbound_pilot</b></a>(const outbound_pilot &amp; pilot) &rarr; void</li></ul><h2>Member Functions</h2><h3 id="4A6ADA49467162A3" data-function-name="get_await_push_command_id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#4A6ADA49467162A3">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/2D98D7CFB741116F/">command_id</a> get_await_push_command_id(\n    const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp; trid) const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L444">include/recorders.h:444</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp;<b> trid</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="955EDF4D8BB573ED" data-function-name="get_dependencies"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#955EDF4D8BB573ED">\xb6</a><code class="hdoc-function-code language-cpp">const <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;instruction_dependency_record&gt;&amp;\nget_dependencies() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L433">include/recorders.h:433</a></p><hr class="member-fun-separator"></hr><h3 id="DDA09AE24879CAB7" data-function-name="get_instruction"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#DDA09AE24879CAB7">\xb6</a><code class="hdoc-function-code language-cpp">const <a href="/docs/api/records/D4688A86A749D792/">instruction_record</a>&amp; get_instruction(\n    <a href="/docs/api/records/A10FDF2DB5485BE8/">instruction_id</a> iid) const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L435">include/recorders.h:435</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/A10FDF2DB5485BE8/">instruction_id</a><b> iid</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="6D4E7B66AD700627" data-function-name="get_instructions"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#6D4E7B66AD700627">\xb6</a><code class="hdoc-function-code language-cpp">const <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;\n    std::unique_ptr&lt;instruction_record&gt;&gt;&amp;\nget_instructions() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L431">include/recorders.h:431</a></p><hr class="member-fun-separator"></hr><h3 id="048213C34AD97CEB" data-function-name="get_outbound_pilots"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#048213C34AD97CEB">\xb6</a><code class="hdoc-function-code language-cpp">const <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;outbound_pilot&gt;&amp;\nget_outbound_pilots() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L442">include/recorders.h:442</a></p><hr class="member-fun-separator"></hr><h3 id="78E18AC002E767DD" data-function-name="record_await_push_command_id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#78E18AC002E767DD">\xb6</a><code class="hdoc-function-code language-cpp">void record_await_push_command_id(\n    const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp; trid,\n    <a href="/docs/api/records/2D98D7CFB741116F/">command_id</a> cid)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L423">include/recorders.h:423</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp;<b> trid</b></dt><dt class="is-family-code"><a href="/docs/api/records/2D98D7CFB741116F/">command_id</a><b> cid</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="B91B6C9110D35A4A" data-function-name="record_dependency"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#B91B6C9110D35A4A">\xb6</a><code class="hdoc-function-code language-cpp">void record_dependency(\n    const <a href="/docs/api/records/909457E08B3EF333/">instruction_dependency_record</a>&amp;\n        dependency)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L429">include/recorders.h:429</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/909457E08B3EF333/">instruction_dependency_record</a>&amp;<b> dependency</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="9122975B565B3AFF" data-function-name="record_instruction"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#9122975B565B3AFF">\xb6</a><code class="hdoc-function-code language-cpp">void record_instruction(\n    <a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;instruction_record&gt; record)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L425">include/recorders.h:425</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;instruction_record&gt;<b> record</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="D2EE19D2EA499999" data-function-name="record_outbound_pilot"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#D2EE19D2EA499999">\xb6</a><code class="hdoc-function-code language-cpp">void record_<a href="/docs/api/records/346CE9659132E3D3/">outbound_pilot</a>(\n    const outbound_pilot&amp; pilot)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L427">include/recorders.h:427</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/346CE9659132E3D3/">outbound_pilot</a>&amp;<b> pilot</b></dt></dl><hr class="member-fun-separator"></hr></main>',s={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class instruction_recorder"},i=void 0,n={id:"api/records/E8FA12264299E0BA",title:"class instruction_recorder",description:"",source:"@site/celerity-runtime/docs/api/records/E8FA12264299E0BA.mdx",sourceDirName:"api/records",slug:"/api/records/E8FA12264299E0BA",permalink:"/docs/api/records/E8FA12264299E0BA",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class instruction_recorder"},sidebar:"api"},d={},l=[];function p(e){const{Head:r}={...(0,t.R)(),...e.components};return r||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r,{children:[(0,a.jsx)("script",{src:"/js/highlight.min.js"}),(0,a.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:o}})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,r,c)=>{c.d(r,{R:()=>s,x:()=>i});var a=c(96540);const t={},o=a.createContext(t);function s(e){const r=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(o.Provider,{value:r},e.children)}}}]);