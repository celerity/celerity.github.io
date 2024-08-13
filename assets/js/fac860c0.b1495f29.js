"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75954],{47623:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>d});var a=s(74848),c=s(28453);const i='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#F04B845B7443865D"><span>namespace instruction_graph_generator_detail</span></a></li><li class="is-active"><a aria-current="page33B5815FD48F5C64"><span>struct host_object_state</span></a></li></ul></nav>\n<main><h1>struct host_object_state</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct host_object_state { /* full declaration omitted */ };</code></pre><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/instruction_graph_generator.cc#L442">src/instruction_graph_generator.cc:442</a></p></aside><section><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_owns_instance" data-member-name="owns_instance">  bool <b>owns_instance</b></dt><dd>If true, `destroy_host_object_instruction` will be emitted when `destroy_host_object` is called (false for `host_object &lt;T &amp; /void&gt;`)</dd><dt class="is-family-code" id="var_last_side_effect" data-member-name="last_side_effect">  <a href="/docs/api/records/406117B5A814B8B4/">instruction</a>* <b>last_side_effect</b></dt><dd>Host tasks with side effects will be serialized wrt/ the host object.</dd></dl></section><section><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#3C69B2ACE63F7B7B"><b>apply_epoch</b></a>(instruction * epoch) &rarr; void</li><li class="is-family-code"><a href="#409264393ADC4B26"><b>host_object_state</b></a>(bool owns_instance, instruction * last_epoch) &rarr; explicit</li></ul></section><section><h2>Member Functions</h2><section><h3 id="3C69B2ACE63F7B7B" data-function-name="apply_epoch"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#3C69B2ACE63F7B7B">\xb6</a><code class="hdoc-function-code language-cpp">void apply_epoch(<a href="/docs/api/records/406117B5A814B8B4/">instruction</a>* epoch)</code></pre></h3><section><h4>Description</h4><p><p>If the last side-effect instruction was older than <code>epoch</code>, replaces it with <code>epoch</code>.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/instruction_graph_generator.cc#L449">src/instruction_graph_generator.cc:449</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/406117B5A814B8B4/">instruction</a>*<b> epoch</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="409264393ADC4B26" data-function-name="host_object_state"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#409264393ADC4B26">\xb6</a><code class="hdoc-function-code language-cpp">explicit host_object_state(\n    bool owns_instance,\n    <a href="/docs/api/records/406117B5A814B8B4/">instruction</a>* last_epoch)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/src/instruction_graph_generator.cc#L446">src/instruction_graph_generator.cc:446</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">bool<b> owns_instance</b></dt><dt class="is-family-code"><a href="/docs/api/records/406117B5A814B8B4/">instruction</a>*<b> last_epoch</b></dt></dl></section></section><hr class="member-fun-separator"></hr></section></main>',o={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct host_object_state"},r=void 0,n={id:"api/records/33B5815FD48F5C64",title:"struct host_object_state",description:"",source:"@site/celerity-runtime/docs/api/records/33B5815FD48F5C64.mdx",sourceDirName:"api/records",slug:"/api/records/33B5815FD48F5C64",permalink:"/docs/api/records/33B5815FD48F5C64",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct host_object_state"},sidebar:"api"},l={},d=[];function p(e){const{Head:t}={...(0,c.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t,{children:[(0,a.jsx)("script",{src:"/js/highlight.min.js"}),(0,a.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:i}})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>r});var a=s(96540);const c={},i=a.createContext(c);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);