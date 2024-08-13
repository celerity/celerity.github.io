"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57283],{6957:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=c(74848),a=c(28453);const s='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#36211E2D24C9AB8E"><span>namespace experimental</span></a></li><li><a href="/docs/api/records/EFCC0F2026173774/"><span>class host_object</span></a></li><li class="is-active"><a aria-current="pageCA896439FEA67B2D"><span>struct host_object::tracker</span></a></li></ul></nav>\n<main><h1>struct host_object::tracker</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct host_object::tracker : public host_object_tracker { /* full declaration omitted */ };</code></pre><section><h2>Description</h2><p><p>A <code>tacker</code> instance is shared by all copies of any <code>host_object</code> via a <code>std::shared_ptr</code> to implement (SYCL) reference semantics. It notifies the runtime of host object creation and destruction.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/host_object.h#L117">include/host_object.h:117</a></p></aside><section><p>Inherits from: <a href="/docs/api/records/4A2C27B62DB6E5C3/">host_object_tracker</a></p></section><section><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_instance" data-member-name="instance">  instance_type* <b>instance</b> = nullptr</dt></dl><p>Inherited from <a href="/docs/api/records/4A2C27B62DB6E5C3/">host_object_tracker</a>:</p><dl><dt class="is-family-code"><a href="/docs/api/records/4A2C27B62DB6E5C3/#var_id"> <b>id</b></a> = {}</dt></dl></section><section><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#3DE87147BEC8046F"><b>tracker</b></a>(std::unique_ptr&lt;struct instance&gt; instance) &rarr; explicit</li><li class="is-family-code"><a href="#968CFA48C037EB7B"><b>tracker</b></a>(instance_type * ref, std::unique_ptr&lt;struct instance&gt; &amp; owned) &rarr; explicit</li></ul><p>Inherited from <a href="/docs/api/records/4A2C27B62DB6E5C3/">host_object_tracker</a>:</p><ul><li class="is-family-code"><a href="/docs/api/records/4A2C27B62DB6E5C3/#255A28C89B2AA3E3">public <b>operator=</b></a></li><li class="is-family-code"><a href="/docs/api/records/4A2C27B62DB6E5C3/#8E59253F7C633E02">public <b>operator=</b></a></li></ul></section><section><h2>Member Functions</h2><section><h3 id="3DE87147BEC8046F" data-function-name="tracker"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#3DE87147BEC8046F">\xb6</a><code class="hdoc-function-code language-cpp">explicit tracker(\n    <a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;struct instance&gt; instance)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/host_object.h#L120">include/host_object.h:120</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;struct instance&gt;<b> instance</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="968CFA48C037EB7B" data-function-name="tracker"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#968CFA48C037EB7B">\xb6</a><code class="hdoc-function-code language-cpp">explicit tracker(\n    instance_type* ref,\n    <a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;struct instance&gt;&amp; owned)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/host_object.h#L121">include/host_object.h:121</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">instance_type*<b> ref</b></dt><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;struct instance&gt;&amp;<b> owned</b></dt></dl></section></section><hr class="member-fun-separator"></hr></section></main>',i={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct host_object::tracker"},n=void 0,o={id:"api/records/CA896439FEA67B2D",title:"struct host_object::tracker",description:"",source:"@site/celerity-runtime/docs/api/records/CA896439FEA67B2D.mdx",sourceDirName:"api/records",slug:"/api/records/CA896439FEA67B2D",permalink:"/docs/api/records/CA896439FEA67B2D",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct host_object::tracker"},sidebar:"api"},l={},d=[];function p(e){const{Head:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t,{children:[(0,r.jsx)("script",{src:"/js/highlight.min.js"}),(0,r.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,t,c)=>{c.d(t,{R:()=>i,x:()=>n});var r=c(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);