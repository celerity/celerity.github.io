"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81370],{22838:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=t(74848),s=t(28453);const r='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li class="is-active"><a aria-current="pageF34B9FD4A8B9E890"><span>class partition</span></a></li></ul></nav>\n<main><h1>class partition</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">template &lt;int Dims&gt;\nclass partition { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>Represents the sub-range of the iteration space handled by each host in a host_task.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/partition.h#L35">include/partition.h:35</a></p><h2>Template Parameters</h2><dl><dt class="is-family-code">int<b> Dims</b></dt></dl><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_global_size" data-member-name="m_global_size">  range&lt;Dims&gt; <b>m_global_size</b></dt><dt class="is-family-code hdoc-private" id="var_m_range" data-member-name="m_range">  subrange&lt;Dims&gt; <b>m_range</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#9FFB3EB8F18DBC44"><b>get_global_size</b></a>() const &rarr; const range&lt;Dims&gt; &amp;</li><li class="is-family-code"><a href="#8794AF5A0D8357A6"><b>get_subrange</b></a>() const &rarr; const subrange&lt;Dims&gt; &amp;</li><li class="is-family-code hdoc-protected"><a href="#5C799B0B74C9405A"><b>partition</b></a>(const range&lt;Dims&gt; &amp; global_size, const subrange&lt;Dims&gt; &amp; range) &rarr; explicit</li></ul><h2>Member Functions</h2><h3 id="9FFB3EB8F18DBC44" data-function-name="get_global_size"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#9FFB3EB8F18DBC44">\xb6</a><code class="hdoc-function-code language-cpp">const range&lt;Dims&gt;&amp; get_global_size() const</code></pre></h3><h4>Description</h4><p><p>The size of the entire iteration space</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/partition.h#L41">include/partition.h:41</a></p><hr class="member-fun-separator"></hr><h3 id="8794AF5A0D8357A6" data-function-name="get_subrange"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#8794AF5A0D8357A6">\xb6</a><code class="hdoc-function-code language-cpp">const subrange&lt;Dims&gt;&amp; get_subrange() const</code></pre></h3><h4>Description</h4><p><p>The subrange handled by this host.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/partition.h#L38">include/partition.h:38</a></p><hr class="member-fun-separator"></hr><h3 id="5C799B0B74C9405A" data-function-name="partition"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#5C799B0B74C9405A">\xb6</a><code class="hdoc-function-code language-cpp">explicit partition(const range&lt;Dims&gt;&amp; global_size,\n                   const subrange&lt;Dims&gt;&amp; range)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/partition.h#L50">include/partition.h:50</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const range&lt;Dims&gt;&amp;<b> global_size</b></dt><dt class="is-family-code">const subrange&lt;Dims&gt;&amp;<b> range</b></dt></dl><hr class="member-fun-separator"></hr></main>',n={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class partition"},c=void 0,l={id:"api/records/F34B9FD4A8B9E890",title:"class partition",description:"",source:"@site/celerity-runtime/docs/api/records/F34B9FD4A8B9E890.mdx",sourceDirName:"api/records",slug:"/api/records/F34B9FD4A8B9E890",permalink:"/docs/api/records/F34B9FD4A8B9E890",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class partition"},sidebar:"api"},o={},p=[];function d(e){const{Head:a}={...(0,s.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a,{children:[(0,i.jsx)("script",{src:"/js/highlight.min.js"}),(0,i.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]})}function m(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>n,x:()=>c});var i=t(96540);const s={},r=i.createContext(s);function n(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);