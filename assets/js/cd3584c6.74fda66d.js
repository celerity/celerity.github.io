"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95481],{47805:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>l});var s=r(74848),t=r(28453);const i='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page3330F4171361EBD0"><span>struct transfer_id</span></a></li></ul></nav>\n<main><h1>struct transfer_id</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct transfer_id { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>Uniquely identifies one version of a buffer\'s (distributed) data at task granularity. The structure is used to tie together the sending and receiving ends of peer-to-peer data transfers.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/types.h#L111">include/types.h:111</a></p><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_consumer_tid" data-member-name="consumer_tid">  <a href="/docs/api/records/322167BB21F2212B/">task_id</a> <b>consumer_tid</b> = -1</dt><dd>The first task (by order of task id) to require this version of the buffer.</dd><dt class="is-family-code" id="var_bid" data-member-name="bid">  <a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a> <b>bid</b> = -1</dt><dd>The buffer&apos;s id.</dd><dt class="is-family-code" id="var_rid" data-member-name="rid">  <a href="/docs/api/records/6DD6FF2C7DDED129/">reduction_id</a> <b>rid</b> = no_reduction_id</dt><dd>Since a task cannot require data both as part of a reduction and with its final value at the same time, this field is not necessary to identify the transfer version, but is used for sanity checks. It might become additionally valuable once we allow the user to specify the buffer subrange each reduction is targeting.</dd></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#6C22BB9FC6A87A81"><b>transfer_id</b></a>()</li><li class="is-family-code"><a href="#F7C0AED5AFF79D62"><b>transfer_id</b></a>(task_id consumer_tid, buffer_id bid, reduction_id rid = no_reduction_id)</li></ul><h2>Friend Function Overview</h2><ul><li class="is-family-code"><a href="#A609B2D343CDE15A"><b>operator!=</b></a>(const transfer_id &amp; lhs, const transfer_id &amp; rhs) &rarr; friend bool</li><li class="is-family-code"><a href="#194453F12450511E"><b>operator==</b></a>(const transfer_id &amp; lhs, const transfer_id &amp; rhs) &rarr; friend bool</li></ul><h2>Member Functions</h2><h3 id="6C22BB9FC6A87A81" data-function-name="transfer_id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#6C22BB9FC6A87A81">\xb6</a><code class="hdoc-function-code language-cpp">transfer_id()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/types.h#L126">include/types.h:126</a></p><hr class="member-fun-separator"></hr><h3 id="F7C0AED5AFF79D62" data-function-name="transfer_id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#F7C0AED5AFF79D62">\xb6</a><code class="hdoc-function-code language-cpp">transfer_id(<a href="/docs/api/records/322167BB21F2212B/">task_id</a> consumer_tid,\n            <a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a> bid,\n            <a href="/docs/api/records/6DD6FF2C7DDED129/">reduction_id</a> rid = no_reduction_id)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/types.h#L127">include/types.h:127</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/322167BB21F2212B/">task_id</a><b> consumer_tid</b></dt><dt class="is-family-code"><a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a><b> bid</b></dt><dt class="is-family-code"><a href="/docs/api/records/6DD6FF2C7DDED129/">reduction_id</a><b> rid</b> = no_reduction_id</dt></dl><hr class="member-fun-separator"></hr><h2>Friend Functions</h2><h3 id="A609B2D343CDE15A" data-function-name="operator!="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#A609B2D343CDE15A">\xb6</a><code class="hdoc-function-code language-cpp">friend bool operator!=(const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp; lhs,\n                       const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp; rhs)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/types.h#L132">include/types.h:132</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp;<b> lhs</b></dt><dt class="is-family-code">const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp;<b> rhs</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="194453F12450511E" data-function-name="operator=="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#194453F12450511E">\xb6</a><code class="hdoc-function-code language-cpp">friend bool operator==(const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp; lhs,\n                       const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp; rhs)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/types.h#L129">include/types.h:129</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp;<b> lhs</b></dt><dt class="is-family-code">const <a href="/docs/api/records/3330F4171361EBD0/">transfer_id</a>&amp;<b> rhs</b></dt></dl><hr class="member-fun-separator"></hr></main>',d={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct transfer_id"},c=void 0,n={id:"api/records/3330F4171361EBD0",title:"struct transfer_id",description:"",source:"@site/celerity-runtime/docs/api/records/3330F4171361EBD0.mdx",sourceDirName:"api/records",slug:"/api/records/3330F4171361EBD0",permalink:"/docs/api/records/3330F4171361EBD0",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct transfer_id"},sidebar:"api"},o={},l=[];function p(e){const{Head:a}={...(0,t.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a,{children:[(0,s.jsx)("script",{src:"/js/highlight.min.js"}),(0,s.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:i}})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>d,x:()=>c});var s=r(96540);const t={},i=s.createContext(t);function d(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);