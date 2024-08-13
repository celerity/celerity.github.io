"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77154],{27795:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=n(74848),i=n(28453);const s='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#0C430652431EAE33"><span>namespace tracy_detail</span></a></li><li class="is-active"><a aria-current="page96BFEE4C30083F69"><span>function leak_name</span></a></li></ul></nav>\n<main><section><h3 id="96BFEE4C30083F69" data-function-name="leak_name"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#96BFEE4C30083F69">\xb6</a><code class="hdoc-function-code language-cpp">inline const char* leak_name(\n    const <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a>&amp; name)</code></pre></h3><section><h4>Description</h4><p><p>Tracy requires thread and fiber names to be live for the duration of the program, so if they are formatted dynamically, we need to leak them.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/tracy.h#L73">include/tracy.h:73</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a>&amp;<b> name</b></dt></dl></section></section><hr class="member-fun-separator"></hr></main>',r={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function leak_name"},c=void 0,o={id:"api/functions/celerity_detail_tracy_detail-leak_name",title:"function leak_name",description:"",source:"@site/celerity-runtime/docs/api/functions/celerity_detail_tracy_detail-leak_name.mdx",sourceDirName:"api/functions",slug:"/api/functions/celerity_detail_tracy_detail-leak_name",permalink:"/docs/api/functions/celerity_detail_tracy_detail-leak_name",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function leak_name"},sidebar:"api"},l={},d=[];function p(e){const{Head:a}={...(0,i.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function u(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>c});var t=n(96540);const i={},s=t.createContext(i);function r(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);