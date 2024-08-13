"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66425],{78991:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var s=a(74848),i=a(28453);const n='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#A16ACF3ACAFB4303"><span>namespace utils</span></a></li><li class="is-active"><a aria-current="page5B852B8A142FED20"><span>alias type_switch_t</span></a></li></ul></nav>\n<main><h3 id="5B852B8A142FED20"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#5B852B8A142FED20">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;typename Lookup, typename... KVs&gt;\nusing type_switch_t =\n    typename type_switch&lt;Lookup, KVs...&gt;::type;</code></pre></h3><section><h4>Description</h4><p><p><code>switch</code> equivalent of <code>std::conditional_t</code>. Use as <code>utils::type_switch_t &lt;lookup -type, key-type-1(result-type-1), key-type-2(result-type-2), ...&gt;</code></p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/utils.h#L105">include/utils.h:105</a></p></aside><h2>Template Parameters</h2><dl><dt class="is-family-code"><b> Lookup</b></dt><dt class="is-family-code"><b> KVs</b></dt></dl></main>',c={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"alias type_switch_t"},l=void 0,o={id:"api/aliases/5B852B8A142FED20",title:"alias type_switch_t",description:"",source:"@site/celerity-runtime/docs/api/aliases/5B852B8A142FED20.mdx",sourceDirName:"api/aliases",slug:"/api/aliases/5B852B8A142FED20",permalink:"/docs/api/aliases/5B852B8A142FED20",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"alias type_switch_t"},sidebar:"api"},r={},p=[];function d(e){const{Head:t}={...(0,i.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t,{children:[(0,s.jsx)("script",{src:"/js/highlight.min.js"}),(0,s.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>c,x:()=>l});var s=a(96540);const i={},n=s.createContext(i);function c(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);