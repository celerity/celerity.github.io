"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89133],{3280:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>n,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=t(74848),a=t(28453);const c='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="pageCDD53C35CF67CCAE"><span>class side_effect_map</span></a></li></ul></nav>\n<main><h1>class side_effect_map</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class side_effect_map : private std::unordered_map { /* full declaration omitted */ };</code></pre><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task.h#L66">include/task.h:66</a></p></aside><section><p>Inherits from: std::unordered_map</p></section><section></section><section><h2>Member Aliases</h2><ul><li class="is-family-code">using at = std::unordered_map&lt;\n    celerity::detail::host_object_id,\n    celerity::experimental::side_effect_order&gt;::\n    at;</li><li class="is-family-code">using cbegin = std::unordered_map&lt;\n    celerity::detail::host_object_id,\n    celerity::experimental::side_effect_order&gt;::\n    cbegin;</li><li class="is-family-code">using cend = std::unordered_map&lt;\n    celerity::detail::host_object_id,\n    celerity::experimental::side_effect_order&gt;::\n    cend;</li><li class="is-family-code">using const_iterator = std::unordered_map&lt;\n    celerity::detail::host_object_id,\n    celerity::experimental::side_effect_order&gt;::\n    const_iterator;</li><li class="is-family-code">using const_pointer = std::unordered_map&lt;\n    celerity::detail::host_object_id,\n    celerity::experimental::side_effect_order&gt;::\n    const_pointer;</li><li class="is-family-code">using const_reference = std::unordered_map&lt;\n    celerity::detail::host_object_id,\n    celerity::experimental::side_effect_order&gt;::\n    const_reference;</li><li class="is-family-code">using count = std::unordered_map&lt;\n    celerity::detail::host_object_id,\n    celerity::experimental::side_effect_order&gt;::\n    count;</li><li class="is-family-code">using empty = std::unordered_map&lt;\n    celerity::detail::host_object_id,\n    celerity::experimental::side_effect_order&gt;::\n    empty;</li><li class="is-family-code">using iterator = const_iterator;</li><li class="is-family-code">using key_type = std::unordered_map&lt;\n    celerity::detail::host_object_id,\n    celerity::experimental::side_effect_order&gt;::\n    key_type;</li><li class="is-family-code">using mapped_type = std::unordered_map&lt;\n    celerity::detail::host_object_id,\n    celerity::experimental::side_effect_order&gt;::\n    mapped_type;</li><li class="is-family-code">using pointer = const_pointer;</li><li class="is-family-code">using reference = const_reference;</li><li class="is-family-code">using size = std::unordered_map&lt;\n    celerity::detail::host_object_id,\n    celerity::experimental::side_effect_order&gt;::\n    size;</li><li class="is-family-code">using value_type = std::unordered_map&lt;\n    celerity::detail::host_object_id,\n    celerity::experimental::side_effect_order&gt;::\n    value_type;</li><li class="is-family-code hdoc-private">using map_base = std::unordered_map&lt;\n    host_object_id,\n    experimental::side_effect_order&gt;;</li></ul></section><section><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#D856B6A4B28C7983"><b>add_side_effect</b></a>(host_object_id hoid, experimental::side_effect_order order) &rarr; void</li><li class="is-family-code"><a href="#69D1D2BFBEA1FF75"><b>begin</b></a>() const &rarr; iterator</li><li class="is-family-code"><a href="#320CA118E0DE5965"><b>end</b></a>() const &rarr; iterator</li><li class="is-family-code"><a href="#7EB8F15FE3A29E3D"><b>find</b></a>(host_object_id key) const &rarr; iterator</li></ul></section><section><h2>Member Functions</h2><section><h3 id="D856B6A4B28C7983" data-function-name="add_side_effect"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#D856B6A4B28C7983">\xb6</a><code class="hdoc-function-code language-cpp">void add_side_effect(\n    <a href="/docs/api/records/A0E5B68259E332A7/">host_object_id</a> hoid,\n    <a href="/docs/api/enums/B878B875E0290D9D/">experimental::side_effect_order</a> order)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task.h#L83">include/task.h:83</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/A0E5B68259E332A7/">host_object_id</a><b> hoid</b></dt><dt class="is-family-code"><a href="/docs/api/enums/B878B875E0290D9D/">experimental::side_effect_order</a><b> order</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="69D1D2BFBEA1FF75" data-function-name="begin"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#69D1D2BFBEA1FF75">\xb6</a><code class="hdoc-function-code language-cpp">iterator begin() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task.h#L79">include/task.h:79</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="320CA118E0DE5965" data-function-name="end"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#320CA118E0DE5965">\xb6</a><code class="hdoc-function-code language-cpp">iterator end() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task.h#L80">include/task.h:80</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="7EB8F15FE3A29E3D" data-function-name="find"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#7EB8F15FE3A29E3D">\xb6</a><code class="hdoc-function-code language-cpp">iterator find(<a href="/docs/api/records/A0E5B68259E332A7/">host_object_id</a> key) const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task.h#L81">include/task.h:81</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/A0E5B68259E332A7/">host_object_id</a><b> key</b></dt></dl></section></section><hr class="member-fun-separator"></hr></section></main>',r={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class side_effect_map"},n=void 0,d={id:"api/records/CDD53C35CF67CCAE",title:"class side_effect_map",description:"",source:"@site/celerity-runtime/docs/api/records/CDD53C35CF67CCAE.mdx",sourceDirName:"api/records",slug:"/api/records/CDD53C35CF67CCAE",permalink:"/docs/api/records/CDD53C35CF67CCAE",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class side_effect_map"},sidebar:"api"},o={},l=[];function p(e){const{Head:i}={...(0,a.R)(),...e.components};return i||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i,{children:[(0,s.jsx)("script",{src:"/js/highlight.min.js"}),(0,s.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:c}})]})}function m(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>n});var s=t(96540);const a={},c=s.createContext(a);function r(e){const i=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(c.Provider,{value:i},e.children)}}}]);