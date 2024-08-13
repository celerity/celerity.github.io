"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20784],{29433:(e,a,c)=>{c.r(a),c.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>n});var t=c(74848),s=c(28453);const r='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/records/EB0FEA27227B2B5D/"><span>class executor</span></a></li><li class="is-active"><a aria-current="pageAFF9009734443E53"><span>class executor::delegate</span></a></li></ul></nav>\n<main><h1>class executor::delegate</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class executor::delegate { /* full declaration omitted */ };</code></pre><section><h2>Description</h2><p><p>Implement this as the owner of an executor to receive callbacks on completed horizons and epochs.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L18">include/executor.h:18</a></p></aside><section></section><section><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#448760EA00D7459A"><b>epoch_reached</b></a>(task_id tid) &rarr; virtual void</li><li class="is-family-code"><a href="#B59E3A24B34F3CF0"><b>horizon_reached</b></a>(task_id tid) &rarr; virtual void</li><li class="is-family-code hdoc-protected"><a href="#597AE782E3222BFC"><b>delegate</b></a>()</li><li class="is-family-code hdoc-protected"><a href="#5BB6436A33399590"><b>delegate</b></a>(const delegate &amp;)</li><li class="is-family-code hdoc-protected"><a href="#56CFDE6E69DEC689"><b>delegate</b></a>(delegate &amp;&amp;)</li><li class="is-family-code hdoc-protected"><a href="#A5896AC932F18BE0"><b>operator=</b></a>(const delegate &amp;) &rarr; delegate &amp;</li><li class="is-family-code hdoc-protected"><a href="#4DE4C48CABD2B858"><b>operator=</b></a>(delegate &amp;&amp;) &rarr; delegate &amp;</li><li class="is-family-code hdoc-protected"><a href="#E8D56E24D1FB7D29"><b>~delegate</b></a>()</li></ul></section><section><h2>Member Functions</h2><section><h3 id="448760EA00D7459A" data-function-name="epoch_reached"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#448760EA00D7459A">\xb6</a><code class="hdoc-function-code language-cpp">virtual void epoch_reached(<a href="/docs/api/records/322167BB21F2212B/">task_id</a> tid)</code></pre></h3><section><h4>Description</h4><p><p>Called from the executor thread as soon as an epoch_instruction has finished executing.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L32">include/executor.h:32</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/322167BB21F2212B/">task_id</a><b> tid</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="B59E3A24B34F3CF0" data-function-name="horizon_reached"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#B59E3A24B34F3CF0">\xb6</a><code class="hdoc-function-code language-cpp">virtual void horizon_reached(<a href="/docs/api/records/322167BB21F2212B/">task_id</a> tid)</code></pre></h3><section><h4>Description</h4><p><p>Called from the executor thread as soon as a horizon_instruction has finished executing.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L29">include/executor.h:29</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/322167BB21F2212B/">task_id</a><b> tid</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="597AE782E3222BFC" data-function-name="delegate"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#597AE782E3222BFC">\xb6</a><code class="hdoc-function-code language-cpp">delegate()</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L20">include/executor.h:20</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="5BB6436A33399590" data-function-name="delegate"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#5BB6436A33399590">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/AFF9009734443E53/">delegate</a>(const delegate&amp;)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L21">include/executor.h:21</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/AFF9009734443E53/">delegate</a>&amp;<b> </b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="56CFDE6E69DEC689" data-function-name="delegate"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#56CFDE6E69DEC689">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/AFF9009734443E53/">delegate</a>(delegate&amp;&amp;)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L22">include/executor.h:22</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/AFF9009734443E53/">delegate</a>&amp;&amp;<b> </b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="A5896AC932F18BE0" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#A5896AC932F18BE0">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/AFF9009734443E53/">delegate</a>&amp; operator=(const <a href="/docs/api/records/AFF9009734443E53/">delegate</a>&amp;)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L23">include/executor.h:23</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/AFF9009734443E53/">delegate</a>&amp;<b> </b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="4DE4C48CABD2B858" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#4DE4C48CABD2B858">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/AFF9009734443E53/">delegate</a>&amp; operator=(<a href="/docs/api/records/AFF9009734443E53/">delegate</a>&amp;&amp;)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L24">include/executor.h:24</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/AFF9009734443E53/">delegate</a>&amp;&amp;<b> </b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="E8D56E24D1FB7D29" data-function-name="~delegate"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#E8D56E24D1FB7D29">\xb6</a><code class="hdoc-function-code language-cpp">~delegate()</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/executor.h#L25">include/executor.h:25</a></p></aside></section><hr class="member-fun-separator"></hr></section></main>',o={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class executor::delegate"},i=void 0,d={id:"api/records/AFF9009734443E53",title:"class executor::delegate",description:"",source:"@site/celerity-runtime/docs/api/records/AFF9009734443E53.mdx",sourceDirName:"api/records",slug:"/api/records/AFF9009734443E53",permalink:"/docs/api/records/AFF9009734443E53",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class executor::delegate"},sidebar:"api"},l={},n=[];function p(e){const{Head:a}={...(0,s.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,a,c)=>{c.d(a,{R:()=>o,x:()=>i});var t=c(96540);const s={},r=t.createContext(s);function o(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);