"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69861],{27170:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var n=a(74848),i=a(28453);const s='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#A16ACF3ACAFB4303"><span>namespace utils</span></a></li><li class="is-active"><a aria-current="page5507F71A49CC1D3D"><span>function panic</span></a></li></ul></nav>\n<main><section><h3 id="5507F71A49CC1D3D" data-function-name="panic"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#5507F71A49CC1D3D">\xb6</a><code class="hdoc-function-code language-cpp">[[noreturn]] void panic(const <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a>&amp; msg)</code></pre></h3><section><h4>Description</h4><p><p>Either throws or aborts with a message, depending on the global <code>panic_solution</code> setting.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/utils.h#L156">include/utils.h:156</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a>&amp;<b> msg</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="4283FDAEC7721C28" data-function-name="panic"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#4283FDAEC7721C28">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;typename... FmtParams&gt;\n[[noreturn]] void panic(\n    fmt::format_string&lt;FmtParams...&gt; fmt_string,\n    FmtParams&amp;&amp;... fmt_args)</code></pre></h3><section><h4>Description</h4><p><p>Either throws or aborts with a message, depending on the global <code>panic_solution</code> setting.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/utils.h#L160">include/utils.h:160</a></p></aside><section><h4>Template Parameters</h4><dl><dt class="is-family-code"><b> FmtParams</b></dt></dl></section><section><h4>Parameters</h4><dl><dt class="is-family-code">fmt::format_string&lt;FmtParams...&gt;<b> fmt_string</b></dt><dt class="is-family-code">FmtParams&amp;&amp;...<b> fmt_args</b></dt></dl></section></section><hr class="member-fun-separator"></hr></main>',c={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function panic"},r=void 0,o={id:"api/functions/celerity_detail_utils-panic",title:"function panic",description:"",source:"@site/celerity-runtime/docs/api/functions/celerity_detail_utils-panic.mdx",sourceDirName:"api/functions",slug:"/api/functions/celerity_detail_utils-panic",permalink:"/docs/api/functions/celerity_detail_utils-panic",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function panic"},sidebar:"api"},l={},p=[];function d(e){const{Head:t}={...(0,i.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t,{children:[(0,n.jsx)("script",{src:"/js/highlight.min.js"}),(0,n.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>c,x:()=>r});var n=a(96540);const i={},s=n.createContext(i);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);