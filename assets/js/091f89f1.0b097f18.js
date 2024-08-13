"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21989],{92774:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>d});var s=i(74848),t=i(28453);const c='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>class host_object_fence_promise: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page03C2C1616652DC60"><span>class host_object_fence_promise</span></a></li></ul></nav><main class="content"><h1>class host_object_fence_promise</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">template &lt;typename T&gt;\nclass host_object_fence_promise : public fence_promise { /* full declaration omitted */ };</code></pre><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/fence.h#L72">include/fence.h:72</a></p><p>Inherits from: <a href="/docs/api/records/A6A7A0BC6CEB734B/">fence_promise</a></p><h2>Template Parameters</h2><dl><dt class="is-family-code"><b> T</b></dt></dl><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_instance" data-member-name="m_instance">  const T* <b>m_instance</b></dt><dt class="is-family-code hdoc-private" id="var_m_promise" data-member-name="m_promise">  <a href="https://en.cppreference.com/w/cpp/thread/promise">std::promise</a>&lt;T&gt; <b>m_promise</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#79D54E5BA2FDF793"><b>fulfill</b></a>() &rarr; void</li><li class="is-family-code"><a href="#6A2BD752C2B06968"><b>get_future</b></a>() &rarr; std::future&lt;T&gt;</li><li class="is-family-code"><a href="#0474BEF675A6DA22"><b>get_user_allocation_id</b></a>() &rarr; allocation_id</li><li class="is-family-code"><a href="#04B419E0E07C6D6C"><b>host_object_fence_promise</b></a>(const T * instance) &rarr; explicit</li></ul><p>Inherited from <a href="/docs/api/records/A6A7A0BC6CEB734B/">fence_promise</a>:</p><ul><li class="is-family-code"><a href="/docs/api/records/A6A7A0BC6CEB734B/#DF0038B9BF6F1C44">public <b>fulfill</b></a></li><li class="is-family-code"><a href="/docs/api/records/A6A7A0BC6CEB734B/#72A8C8A169F10CFE">public <b>get_user_allocation_id</b></a></li><li class="is-family-code"><a href="/docs/api/records/A6A7A0BC6CEB734B/#AC942A04DB20EA0A">public <b>operator=</b></a></li></ul><h2>Member Functions</h2><h3 id="79D54E5BA2FDF793" data-function-name="fulfill"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#79D54E5BA2FDF793">\xb6</a><code class="hdoc-function-code language-cpp">void fulfill()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/fence.h#L78">include/fence.h:78</a></p><hr class="member-fun-separator"></hr><h3 id="6A2BD752C2B06968" data-function-name="get_future"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#6A2BD752C2B06968">\xb6</a><code class="hdoc-function-code language-cpp"><a href="https://en.cppreference.com/w/cpp/thread/future">std::future</a>&lt;T&gt; get_future()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/fence.h#L76">include/fence.h:76</a></p><hr class="member-fun-separator"></hr><h3 id="0474BEF675A6DA22" data-function-name="get_user_allocation_id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#0474BEF675A6DA22">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> get_user_allocation_id()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/fence.h#L80">include/fence.h:80</a></p><hr class="member-fun-separator"></hr><h3 id="04B419E0E07C6D6C" data-function-name="host_object_fence_promise"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#04B419E0E07C6D6C">\xb6</a><code class="hdoc-function-code language-cpp">explicit host_object_fence_promise(\n    const T* instance)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/fence.h#L74">include/fence.h:74</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const T*<b> instance</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',r={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class host_object_fence_promise"},l=void 0,n={id:"api/records/03C2C1616652DC60",title:"class host_object_fence_promise",description:"",source:"@site/celerity-runtime/docs/api/records/03C2C1616652DC60.mdx",sourceDirName:"api/records",slug:"/api/records/03C2C1616652DC60",permalink:"/docs/api/records/03C2C1616652DC60",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class host_object_fence_promise"},sidebar:"api"},o={},d=[];function p(e){const{Head:a}={...(0,t.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a,{children:[(0,s.jsx)("script",{src:"/js/highlight.min.js"}),(0,s.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:c}})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,a,i)=>{i.d(a,{R:()=>r,x:()=>l});var s=i(96540);const t={},c=s.createContext(t);function r(e){const a=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(c.Provider,{value:a},e.children)}}}]);