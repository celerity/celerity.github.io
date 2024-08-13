"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14093],{15594:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var c=i(74848),t=i(28453);const s='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page35C6ABFE6EA33C09"><span>class execution_command</span></a></li></ul></nav>\n<main><h1>class execution_command</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class execution_command : public implement_acceptor { /* full declaration omitted */ };</code></pre><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command.h#L128">include/command.h:128</a></p></aside><section><p>Inherits from: implement_acceptor</p></section><section><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_execution_range" data-member-name="m_execution_range">  <a href="/docs/api/records/F64EF4DD57D1CC57/">subrange</a>&lt;3&gt; <b>m_execution_range</b></dt><dt class="is-family-code hdoc-private" id="var_m_initialize_reductions" data-member-name="m_initialize_reductions">  bool <b>m_initialize_reductions</b> = false</dt></dl></section><section><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#53A24912945A2D8E"><b>get_execution_range</b></a>() const &rarr; const subrange&lt;3&gt; &amp;</li><li class="is-family-code"><a href="#676F54E0C8B80D9A"><b>get_type</b></a>() const &rarr; command_type</li><li class="is-family-code"><a href="#5B8959B7B0945CFF"><b>is_reduction_initializer</b></a>() const &rarr; bool</li><li class="is-family-code"><a href="#BD638AE691FF4428"><b>set_is_reduction_initializer</b></a>(bool is_initializer) &rarr; void</li><li class="is-family-code hdoc-protected"><a href="#C7FD5DB2742980AF"><b>execution_command</b></a>(command_id cid, task_id tid, subrange&lt;3&gt; execution_range)</li></ul></section><section><h2>Member Functions</h2><section><h3 id="53A24912945A2D8E" data-function-name="get_execution_range"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#53A24912945A2D8E">\xb6</a><code class="hdoc-function-code language-cpp">const <a href="/docs/api/records/F64EF4DD57D1CC57/">subrange</a>&lt;3&gt;&amp; get_execution_range() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command.h#L137">include/command.h:137</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="676F54E0C8B80D9A" data-function-name="get_type"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#676F54E0C8B80D9A">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/enums/B430173D907BF013/">command_type</a> get_type() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command.h#L135">include/command.h:135</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="5B8959B7B0945CFF" data-function-name="is_reduction_initializer"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#5B8959B7B0945CFF">\xb6</a><code class="hdoc-function-code language-cpp">bool is_reduction_initializer() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command.h#L141">include/command.h:141</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="BD638AE691FF4428" data-function-name="set_is_reduction_initializer"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#BD638AE691FF4428">\xb6</a><code class="hdoc-function-code language-cpp">void set_is_reduction_initializer(\n    bool is_initializer)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command.h#L139">include/command.h:139</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">bool<b> is_initializer</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="C7FD5DB2742980AF" data-function-name="execution_command"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#C7FD5DB2742980AF">\xb6</a><code class="hdoc-function-code language-cpp">execution_command(<a href="/docs/api/records/2D98D7CFB741116F/">command_id</a> cid,\n                  <a href="/docs/api/records/322167BB21F2212B/">task_id</a> tid,\n                  <a href="/docs/api/records/F64EF4DD57D1CC57/">subrange</a>&lt;3&gt; execution_range)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command.h#L132">include/command.h:132</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/2D98D7CFB741116F/">command_id</a><b> cid</b></dt><dt class="is-family-code"><a href="/docs/api/records/322167BB21F2212B/">task_id</a><b> tid</b></dt><dt class="is-family-code"><a href="/docs/api/records/F64EF4DD57D1CC57/">subrange</a>&lt;3&gt;<b> execution_range</b></dt></dl></section></section><hr class="member-fun-separator"></hr></section></main>',n={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class execution_command"},o=void 0,r={id:"api/records/35C6ABFE6EA33C09",title:"class execution_command",description:"",source:"@site/celerity-runtime/docs/api/records/35C6ABFE6EA33C09.mdx",sourceDirName:"api/records",slug:"/api/records/35C6ABFE6EA33C09",permalink:"/docs/api/records/35C6ABFE6EA33C09",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class execution_command"},sidebar:"api"},d={},l=[];function m(e){const{Head:a}={...(0,t.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(a,{children:[(0,c.jsx)("script",{src:"/js/highlight.min.js"}),(0,c.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function p(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,c.jsx)(a,{...e,children:(0,c.jsx)(m,{...e})}):m(e)}},28453:(e,a,i)=>{i.d(a,{R:()=>n,x:()=>o});var c=i(96540);const t={},s=c.createContext(t);function n(e){const a=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),c.createElement(s.Provider,{value:a},e.children)}}}]);