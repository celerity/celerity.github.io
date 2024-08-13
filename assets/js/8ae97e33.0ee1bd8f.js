"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88422],{3823:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>n,toc:()=>d});var s=r(74848),t=r(28453);const i='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/records/2A72265DCF1483F1/"><span>class task_ring_buffer</span></a></li><li class="is-active"><a aria-current="page9D544E50B2F18599"><span>class task_ring_buffer::task_buffer_iterator</span></a></li></ul></nav>\n<main><h1>class task_ring_buffer::task_buffer_iterator</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class task_ring_buffer::task_buffer_iterator { /* full declaration omitted */ };</code></pre><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L107">include/task_ring_buffer.h:107</a></p></aside><section><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_id" data-member-name="m_id">  unsigned long <b>m_id</b></dt><dt class="is-family-code hdoc-private" id="var_m_buffer" data-member-name="m_buffer">  const <a href="/docs/api/records/2A72265DCF1483F1/">task_ring_buffer</a>&amp; <b>m_buffer</b></dt></dl></section><section><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#2C8A35CE55830F99"><b>operator!=</b></a>(task_buffer_iterator other) &rarr; bool</li><li class="is-family-code"><a href="#9F1427283267C62C"><b>operator*</b></a>() &rarr; task *</li><li class="is-family-code"><a href="#26D5CB321CBABB85"><b>operator++</b></a>() &rarr; void</li><li class="is-family-code"><a href="#86A7A6AB3913B06F"><b>operator&lt;</b></a>(task_buffer_iterator other) &rarr; bool</li><li class="is-family-code"><a href="#4B6BCEC71921889E"><b>task_buffer_iterator</b></a>(unsigned long id, const task_ring_buffer &amp; buffer)</li></ul></section><section><h2>Member Functions</h2><section><h3 id="2C8A35CE55830F99" data-function-name="operator!="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#2C8A35CE55830F99">\xb6</a><code class="hdoc-function-code language-cpp">bool operator!=(<a href="/docs/api/records/9D544E50B2F18599/">task_buffer_iterator</a> other)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L116">include/task_ring_buffer.h:116</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/9D544E50B2F18599/">task_buffer_iterator</a><b> other</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="9F1427283267C62C" data-function-name="operator*"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#9F1427283267C62C">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/A42A04C270A2D231/">task</a>* operator*()</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L113">include/task_ring_buffer.h:113</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="26D5CB321CBABB85" data-function-name="operator++"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#26D5CB321CBABB85">\xb6</a><code class="hdoc-function-code language-cpp">void operator++()</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L114">include/task_ring_buffer.h:114</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="86A7A6AB3913B06F" data-function-name="operator&lt;"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#86A7A6AB3913B06F">\xb6</a><code class="hdoc-function-code language-cpp">bool operator&lt;(<a href="/docs/api/records/9D544E50B2F18599/">task_buffer_iterator</a> other)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L115">include/task_ring_buffer.h:115</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/9D544E50B2F18599/">task_buffer_iterator</a><b> other</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="4B6BCEC71921889E" data-function-name="task_buffer_iterator"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#4B6BCEC71921889E">\xb6</a><code class="hdoc-function-code language-cpp">task_buffer_iterator(\n    unsigned long id,\n    const <a href="/docs/api/records/2A72265DCF1483F1/">task_ring_buffer</a>&amp; buffer)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_ring_buffer.h#L112">include/task_ring_buffer.h:112</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">unsigned long<b> id</b></dt><dt class="is-family-code">const <a href="/docs/api/records/2A72265DCF1483F1/">task_ring_buffer</a>&amp;<b> buffer</b></dt></dl></section></section><hr class="member-fun-separator"></hr></section></main>',c={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class task_ring_buffer::task_buffer_iterator"},o=void 0,n={id:"api/records/9D544E50B2F18599",title:"class task_ring_buffer::task_buffer_iterator",description:"",source:"@site/celerity-runtime/docs/api/records/9D544E50B2F18599.mdx",sourceDirName:"api/records",slug:"/api/records/9D544E50B2F18599",permalink:"/docs/api/records/9D544E50B2F18599",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class task_ring_buffer::task_buffer_iterator"},sidebar:"api"},l={},d=[];function f(e){const{Head:a}={...(0,t.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a,{children:[(0,s.jsx)("script",{src:"/js/highlight.min.js"}),(0,s.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:i}})]})}function p(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>c,x:()=>o});var s=r(96540);const t={},i=s.createContext(t);function c(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);