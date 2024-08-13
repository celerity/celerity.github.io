"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73462],{64975:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=t(74848),s=t(28453);const n='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#A16ACF3ACAFB4303"><span>namespace utils</span></a></li><li class="is-active"><a aria-current="page628E59368B8EE9E5"><span>function report_error</span></a></li></ul></nav>\n<main><h3 id="628E59368B8EE9E5" data-function-name="report_error"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#628E59368B8EE9E5">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;\n    typename... FmtParams,\n    std::enable_if_t&lt;sizeof...(FmtParams) &gt;= 1,\n                     int&gt; = 0&gt;\nvoid report_error(\n    <a href="/docs/api/enums/74E8F59E81C0B2E4/">error_policy</a> policy,\n    fmt::format_string&lt;FmtParams...&gt; fmt_string,\n    FmtParams&amp;&amp;... fmt_args)</code></pre></h3><h4>Description</h4><p><p>Ignores, logs, or panics on an error depending on the <code>error_policy</code>.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/utils.h#L170">include/utils.h:170</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code"><b> FmtParams</b></dt><dt class="is-family-code">std::enable_if_t&lt;sizeof...(FmtParams) &gt;= 1, int&gt;<b> </b> = 0</dt></dl><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/enums/74E8F59E81C0B2E4/">error_policy</a><b> policy</b></dt><dt class="is-family-code">fmt::format_string&lt;FmtParams...&gt;<b> fmt_string</b></dt><dt class="is-family-code">FmtParams&amp;&amp;...<b> fmt_args</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="1622FD63E4681B6F" data-function-name="report_error"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#1622FD63E4681B6F">\xb6</a><code class="hdoc-function-code language-cpp">void report_error(<a href="/docs/api/enums/74E8F59E81C0B2E4/">error_policy</a> policy,\n                  const <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a>&amp; msg)</code></pre></h3><h4>Description</h4><p><p>Ignores, logs, or panics on an error depending on the <code>error_policy</code>.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/utils.h#L166">include/utils.h:166</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/enums/74E8F59E81C0B2E4/">error_policy</a><b> policy</b></dt><dt class="is-family-code">const <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a>&amp;<b> msg</b></dt></dl><hr class="member-fun-separator"></hr></main>',i={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function report_error"},o=void 0,c={id:"api/functions/celerity_detail_utils-report_error",title:"function report_error",description:"",source:"@site/celerity-runtime/docs/api/functions/celerity_detail_utils-report_error.mdx",sourceDirName:"api/functions",slug:"/api/functions/celerity_detail_utils-report_error",permalink:"/docs/api/functions/celerity_detail_utils-report_error",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function report_error"},sidebar:"api"},l={},p=[];function d(e){const{Head:r}={...(0,s.R)(),...e.components};return r||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r,{children:[(0,a.jsx)("script",{src:"/js/highlight.min.js"}),(0,a.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})]})}function m(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var a=t(96540);const s={},n=a.createContext(s);function i(e){const r=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(n.Provider,{value:r},e.children)}}}]);