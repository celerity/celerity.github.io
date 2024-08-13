"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65495],{88925:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var t=i(74848),r=i(28453);const s='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="pageADF5A54F33673351"><span>class reduction_descriptor&lt;DataT, Dims, BinaryOperation, false&gt;</span></a></li></ul></nav>\n<main><h1>class reduction_descriptor&lt;DataT, Dims, BinaryOperation, false&gt;</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">template &lt;typename DataT, int Dims, typename BinaryOperation&gt;\nclass reduction_descriptor&lt;DataT, Dims, BinaryOperation, false&gt; { /* full declaration omitted */ };</code></pre><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/handler.h#L230">include/handler.h:230</a></p></aside><section><h2>Template Parameters</h2><dl><dt class="is-family-code"><b> DataT</b></dt><dt class="is-family-code">int<b> Dims</b></dt><dt class="is-family-code"><b> BinaryOperation</b></dt></dl></section><section><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_bid" data-member-name="m_bid">  <a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a> <b>m_bid</b></dt><dt class="is-family-code hdoc-private" id="var_m_op" data-member-name="m_op">  BinaryOperation <b>m_op</b></dt><dt class="is-family-code hdoc-private" id="var_m_include_current_buffer_value" data-member-name="m_include_current_buffer_value">  bool <b>m_include_current_buffer_value</b></dt></dl></section><section><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#176CC24E397A39A7"><b>reduction_descriptor</b></a>(buffer_id bid, BinaryOperation combiner, DataT, bool include_current_buffer_value)</li></ul></section><section><h2>Member Functions</h2><section><h3 id="176CC24E397A39A7" data-function-name="reduction_descriptor"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#176CC24E397A39A7">\xb6</a><code class="hdoc-function-code language-cpp">reduction_descriptor(\n    <a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a> bid,\n    BinaryOperation combiner,\n    DataT,\n    bool include_current_buffer_value)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/handler.h#L232">include/handler.h:232</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a><b> bid</b></dt><dt class="is-family-code">BinaryOperation<b> combiner</b></dt><dt class="is-family-code">DataT<b> </b></dt><dt class="is-family-code">bool<b> include_current_buffer_value</b></dt></dl></section></section><hr class="member-fun-separator"></hr></section></main>',n={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class reduction_descriptor<DataT, Dims, BinaryOperation, false>"},c=void 0,o={id:"api/records/ADF5A54F33673351",title:"class reduction_descriptor<DataT, Dims, BinaryOperation, false>",description:"",source:"@site/celerity-runtime/docs/api/records/ADF5A54F33673351.mdx",sourceDirName:"api/records",slug:"/api/records/ADF5A54F33673351",permalink:"/docs/api/records/ADF5A54F33673351",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class reduction_descriptor<DataT, Dims, BinaryOperation, false>"},sidebar:"api"},d={},l=[];function p(e){const{Head:a}={...(0,r.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,a,i)=>{i.d(a,{R:()=>n,x:()=>c});var t=i(96540);const r={},s=t.createContext(r);function n(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);