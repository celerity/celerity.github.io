"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55159],{30952:(e,c,s)=>{s.r(c),s.d(c,{assets:()=>t,contentTitle:()=>r,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>n});var a=s(74848),i=s(28453);const o='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page6FE6C629E7818DE7"><span>class sycl_cuda_backend</span></a></li></ul></nav>\n<main><h1>class sycl_cuda_backend</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class sycl_cuda_backend : public sycl_backend { /* full declaration omitted */ };</code></pre><section><h2>Description</h2><p><p>CUDA specialized implementation of <code>sycl_backend</code> that uses native CUDA operations for 2D / 3D copies.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/backend/sycl_backend.h#L99">include/backend/sycl_backend.h:99</a></p></aside><section><p>Inherits from: <a href="/docs/api/records/6AA200E81C0E2212/">sycl_backend</a></p></section><section><h2>Member Variables</h2></section><section><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#7B7491830A4AF7BF"><b>enqueue_device_copy</b></a>(device_id device, size_t device_lane, const void * source_base, void * dest_base, const box&lt;3&gt; &amp; source_box, const box&lt;3&gt; &amp; dest_box, const region&lt;3&gt; &amp; copy_region, size_t elem_size) &rarr; async_event</li><li class="is-family-code"><a href="#375EC28376D5A942"><b>sycl_cuda_backend</b></a>(const std::vector&lt;sycl::device&gt; &amp; devices, bool enable_profiling)</li></ul><p>Inherited from <a href="/docs/api/records/6AA200E81C0E2212/">sycl_backend</a>:</p><ul><li class="is-family-code"><a href="/docs/api/records/6AA200E81C0E2212/#BA7AC279F85BC7EF">public <b>check_async_errors</b></a></li><li class="is-family-code"><a href="/docs/api/records/6AA200E81C0E2212/#7C19575861E8FE10">public <b>debug_alloc</b></a></li><li class="is-family-code"><a href="/docs/api/records/6AA200E81C0E2212/#3DD39FC76EF305CA">public <b>debug_free</b></a></li><li class="is-family-code"><a href="/docs/api/records/6AA200E81C0E2212/#2DEFFB8CB83D1B15">public <b>enqueue_device_alloc</b></a></li><li class="is-family-code"><a href="/docs/api/records/6AA200E81C0E2212/#2362E0A37ED19293">public <b>enqueue_device_free</b></a></li><li class="is-family-code"><a href="/docs/api/records/6AA200E81C0E2212/#F82BE05FE011926F">public <b>enqueue_device_kernel</b></a></li><li class="is-family-code"><a href="/docs/api/records/6AA200E81C0E2212/#4EE88CC8CD57F368">public <b>enqueue_host_alloc</b></a></li><li class="is-family-code"><a href="/docs/api/records/6AA200E81C0E2212/#CB90925654331A5D">public <b>enqueue_host_copy</b></a></li><li class="is-family-code"><a href="/docs/api/records/6AA200E81C0E2212/#EC2072218F1500ED">public <b>enqueue_host_free</b></a></li><li class="is-family-code"><a href="/docs/api/records/6AA200E81C0E2212/#A8CFDFAB7E40061F">public <b>enqueue_host_task</b></a></li><li class="is-family-code"><a href="/docs/api/records/6AA200E81C0E2212/#AE04E71169E73D55">public <b>get_system_info</b></a></li><li class="is-family-code"><a href="/docs/api/records/6AA200E81C0E2212/#76747C126864C9F6">public <b>init</b></a></li><li class="is-family-code"><a href="/docs/api/records/6AA200E81C0E2212/#7FFA241E162E772B">public <b>operator=</b></a></li><li class="is-family-code"><a href="/docs/api/records/6AA200E81C0E2212/#C911414E87A16BF3">public <b>operator=</b></a></li><li class="is-family-code"><a href="/docs/api/records/6AA200E81C0E2212/#5F8CED001DCD87B4">protected <b>get_device_queue</b></a></li><li class="is-family-code"><a href="/docs/api/records/6AA200E81C0E2212/#A99C29A85DE29BD1">protected <b>get_system_info</b></a></li><li class="is-family-code"><a href="/docs/api/records/6AA200E81C0E2212/#BC1975FD08D82FC2">protected <b>is_profiling_enabled</b></a></li></ul><p>Inherited from <a href="/docs/api/records/52288636C43413DD/">backend</a>:</p><ul><li class="is-family-code"><a href="/docs/api/records/52288636C43413DD/#7B5D61A4C233B23C">public <b>check_async_errors</b></a></li><li class="is-family-code"><a href="/docs/api/records/52288636C43413DD/#9F10776D1F091BD7">public <b>debug_alloc</b></a></li><li class="is-family-code"><a href="/docs/api/records/52288636C43413DD/#3B8B979563F43E0B">public <b>debug_free</b></a></li><li class="is-family-code"><a href="/docs/api/records/52288636C43413DD/#7BD72B983005E9FC">public <b>enqueue_device_alloc</b></a></li><li class="is-family-code"><a href="/docs/api/records/52288636C43413DD/#F1776E7E1F5EDD9C">public <b>enqueue_device_copy</b></a></li><li class="is-family-code"><a href="/docs/api/records/52288636C43413DD/#6CEA6D96E1227F1E">public <b>enqueue_device_free</b></a></li><li class="is-family-code"><a href="/docs/api/records/52288636C43413DD/#C932330DC6FE754B">public <b>enqueue_device_kernel</b></a></li><li class="is-family-code"><a href="/docs/api/records/52288636C43413DD/#3A452D8B0C7274F4">public <b>enqueue_host_alloc</b></a></li><li class="is-family-code"><a href="/docs/api/records/52288636C43413DD/#BD55A8545B3EA959">public <b>enqueue_host_copy</b></a></li><li class="is-family-code"><a href="/docs/api/records/52288636C43413DD/#19067DC859C8FFC4">public <b>enqueue_host_free</b></a></li><li class="is-family-code"><a href="/docs/api/records/52288636C43413DD/#72E6FBD0117C142B">public <b>enqueue_host_task</b></a></li><li class="is-family-code"><a href="/docs/api/records/52288636C43413DD/#6675BBE0A2F39379">public <b>get_system_info</b></a></li><li class="is-family-code"><a href="/docs/api/records/52288636C43413DD/#436DCB904D8F8947">public <b>init</b></a></li><li class="is-family-code"><a href="/docs/api/records/52288636C43413DD/#1B19948B8D471D20">public <b>operator=</b></a></li><li class="is-family-code"><a href="/docs/api/records/52288636C43413DD/#F57E6BC1D167DE27">public <b>operator=</b></a></li></ul></section><section><h2>Member Functions</h2><section><h3 id="7B7491830A4AF7BF" data-function-name="enqueue_device_copy"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#7B7491830A4AF7BF">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/75C01CF859B866AB/">async_event</a> enqueue_device_copy(\n    <a href="/docs/api/records/7D949A34B7A05510/">device_id</a> device,\n    size_t device_lane,\n    const void* source_base,\n    void* dest_base,\n    const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp; source_<a href="/docs/api/records/A87962C2586A4E24/">box</a>,\n    const box&lt;3&gt;&amp; dest_box,\n    const <a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt;&amp; copy_region,\n    size_t elem_size)</code></pre></h3><section><h4>Description</h4><p><p>Enqueues an n-dimensional copy between two device-accessible allocations (at least one device-native). The operation will complete in-order with respect to any other asynchronous device operation on <code>device</code> and <code>device_lane</code>.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/backend/sycl_backend.h#L103">include/backend/sycl_backend.h:103</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/7D949A34B7A05510/">device_id</a><b> device</b></dt><dt class="is-family-code">size_t<b> device_lane</b></dt><dt class="is-family-code">const void*<b> source_base</b></dt><dt class="is-family-code">void*<b> dest_base</b></dt><dt class="is-family-code">const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp;<b> source_box</b></dt><dt class="is-family-code">const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp;<b> dest_box</b></dt><dt class="is-family-code">const <a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt;&amp;<b> copy_region</b></dt><dt class="is-family-code">size_t<b> elem_size</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="375EC28376D5A942" data-function-name="sycl_cuda_backend"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#375EC28376D5A942">\xb6</a><code class="hdoc-function-code language-cpp">sycl_cuda_backend(\n    const <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;sycl::device&gt;&amp; devices,\n    bool enable_profiling)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/backend/sycl_backend.h#L101">include/backend/sycl_backend.h:101</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;sycl::device&gt;&amp;<b> devices</b></dt><dt class="is-family-code">bool<b> enable_profiling</b></dt></dl></section></section><hr class="member-fun-separator"></hr></section></main>',l={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class sycl_cuda_backend"},r=void 0,d={id:"api/records/6FE6C629E7818DE7",title:"class sycl_cuda_backend",description:"",source:"@site/celerity-runtime/docs/api/records/6FE6C629E7818DE7.mdx",sourceDirName:"api/records",slug:"/api/records/6FE6C629E7818DE7",permalink:"/docs/api/records/6FE6C629E7818DE7",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class sycl_cuda_backend"},sidebar:"api"},t={},n=[];function p(e){const{Head:c}={...(0,i.R)(),...e.components};return c||function(e,c){throw new Error("Expected "+(c?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c,{children:[(0,a.jsx)("script",{src:"/js/highlight.min.js"}),(0,a.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:o}})]})}function b(e={}){const{wrapper:c}={...(0,i.R)(),...e.components};return c?(0,a.jsx)(c,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,c,s)=>{s.d(c,{R:()=>l,x:()=>r});var a=s(96540);const i={},o=a.createContext(i);function l(e){const c=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function r(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(o.Provider,{value:c},e.children)}}}]);