"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59725],{73962:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>d});var c=r(74848),s=r(28453);const a='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#36211E2D24C9AB8E"><span>namespace experimental</span></a></li><li><a href="/docs/api/records/C43F4543C4CB5F7E/"><span>class host_object&lt;void&gt;</span></a></li><li class="is-active"><a aria-current="page9C31D107A9CC71C4"><span>struct host_object::tracker</span></a></li></ul></nav>\n<main><h1>struct host_object::tracker</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct host_object::tracker : public host_object_tracker { /* full declaration omitted */ };</code></pre><section><h2>Description</h2><p><p>A <code>tacker</code> instance is shared by all copies of any <code>host_object</code> via a <code>std::shared_ptr</code> to implement (SYCL) reference semantics. It notifies the runtime of host object creation and destruction.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/host_object.h#L164">include/host_object.h:164</a></p></aside><section><p>Inherits from: <a href="/docs/api/records/4A2C27B62DB6E5C3/">host_object_tracker</a></p></section><section><h2>Member Variables</h2><p>Inherited from <a href="/docs/api/records/4A2C27B62DB6E5C3/">host_object_tracker</a>:</p><dl><dt class="is-family-code"><a href="/docs/api/records/4A2C27B62DB6E5C3/#var_id"> <b>id</b></a> = {}</dt></dl></section><section><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#E065E5AB61BA5732"><b>tracker</b></a>()</li></ul><p>Inherited from <a href="/docs/api/records/4A2C27B62DB6E5C3/">host_object_tracker</a>:</p><ul><li class="is-family-code"><a href="/docs/api/records/4A2C27B62DB6E5C3/#255A28C89B2AA3E3">public <b>operator=</b></a></li><li class="is-family-code"><a href="/docs/api/records/4A2C27B62DB6E5C3/#8E59253F7C633E02">public <b>operator=</b></a></li></ul></section><section><h2>Member Functions</h2><section><h3 id="E065E5AB61BA5732" data-function-name="tracker"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#E065E5AB61BA5732">\xb6</a><code class="hdoc-function-code language-cpp">tracker()</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/host_object.h#L165">include/host_object.h:165</a></p></aside></section><hr class="member-fun-separator"></hr></section></main>',o={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct host_object::tracker"},i=void 0,n={id:"api/records/9C31D107A9CC71C4",title:"struct host_object::tracker",description:"",source:"@site/celerity-runtime/docs/api/records/9C31D107A9CC71C4.mdx",sourceDirName:"api/records",slug:"/api/records/9C31D107A9CC71C4",permalink:"/docs/api/records/9C31D107A9CC71C4",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct host_object::tracker"},sidebar:"api"},l={},d=[];function p(e){const{Head:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t,{children:[(0,c.jsx)("script",{src:"/js/highlight.min.js"}),(0,c.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:a}})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var c=r(96540);const s={},a=c.createContext(s);function o(e){const t=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),c.createElement(a.Provider,{value:t},e.children)}}}]);