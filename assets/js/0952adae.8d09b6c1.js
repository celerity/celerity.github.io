"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51614],{67673:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var s=t(74848),r=t(28453);const i='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#FA5662130C777A6E"><span>namespace access</span></a></li><li class="is-active"><a aria-current="pageAA0549008B588208"><span>struct slice</span></a></li></ul></nav>\n<main><h1>struct slice</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">template &lt;int Dims&gt;\nstruct slice { /* full declaration omitted */ };</code></pre><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/range_mapper.h#L171">include/range_mapper.h:171</a></p><h2>Template Parameters</h2><dl><dt class="is-family-code">int<b> Dims</b></dt></dl><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_dim_idx" data-member-name="m_dim_idx">  size_t <b>m_dim_idx</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#93D545CFA42D1257"><b>operator()</b></a>(const chunk&lt;Dims&gt; &amp; chnk, const range&lt;Dims&gt; &amp; buffer_size) const &rarr; subrange&lt;Dims&gt;</li><li class="is-family-code"><a href="#ACDDE101A70B42F3"><b>slice</b></a>(size_t dim_idx) &rarr; explicit</li></ul><h2>Member Functions</h2><h3 id="93D545CFA42D1257" data-function-name="operator()"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#93D545CFA42D1257">\xb6</a><code class="hdoc-function-code language-cpp">subrange&lt;Dims&gt; operator()(\n    const chunk&lt;Dims&gt;&amp; chnk,\n    const range&lt;Dims&gt;&amp; buffer_size) const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/range_mapper.h#L174">include/range_mapper.h:174</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const chunk&lt;Dims&gt;&amp;<b> chnk</b></dt><dt class="is-family-code">const range&lt;Dims&gt;&amp;<b> buffer_size</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="ACDDE101A70B42F3" data-function-name="slice"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#ACDDE101A70B42F3">\xb6</a><code class="hdoc-function-code language-cpp">explicit slice(size_t dim_idx)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/range_mapper.h#L172">include/range_mapper.h:172</a></p><h4>Parameters</h4><dl><dt class="is-family-code">size_t<b> dim_idx</b></dt></dl><hr class="member-fun-separator"></hr></main>',c={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct slice"},n=void 0,l={id:"api/records/AA0549008B588208",title:"struct slice",description:"",source:"@site/celerity-runtime/docs/api/records/AA0549008B588208.mdx",sourceDirName:"api/records",slug:"/api/records/AA0549008B588208",permalink:"/docs/api/records/AA0549008B588208",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct slice"},sidebar:"api"},o={},d=[];function p(e){const{Head:a}={...(0,r.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a,{children:[(0,s.jsx)("script",{src:"/js/highlight.min.js"}),(0,s.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:i}})]})}function m(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>c,x:()=>n});var s=t(96540);const r={},i=s.createContext(r);function c(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);