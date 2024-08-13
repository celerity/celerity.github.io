"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73462],{64975:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var i=r(74848),s=r(28453);const a='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>function report_error: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#A16ACF3ACAFB4303"><span>namespace utils</span></a></li><li class="is-active"><a aria-current="page628E59368B8EE9E5"><span>function report_error</span></a></li></ul></nav><main class="content"><h3 id="628E59368B8EE9E5" data-function-name="report_error"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#628E59368B8EE9E5">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;\n    typename... FmtParams,\n    std::enable_if_t&lt;sizeof...(FmtParams) &gt;= 1,\n                     int&gt; = 0&gt;\nvoid report_error(\n    <a href="/docs/api/enums/74E8F59E81C0B2E4/">error_policy</a> policy,\n    fmt::format_string&lt;FmtParams...&gt; fmt_string,\n    FmtParams&amp;&amp;... fmt_args)</code></pre></h3><h4>Description</h4><p><p>Ignores, logs, or panics on an error depending on the <code>error_policy</code>.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/utils.h#L170">include/utils.h:170</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code"><b> FmtParams</b></dt><dt class="is-family-code">std::enable_if_t&lt;sizeof...(FmtParams) &gt;= 1, int&gt;<b> </b> = 0</dt></dl><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/enums/74E8F59E81C0B2E4/">error_policy</a><b> policy</b></dt><dt class="is-family-code">fmt::format_string&lt;FmtParams...&gt;<b> fmt_string</b></dt><dt class="is-family-code">FmtParams&amp;&amp;...<b> fmt_args</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="1622FD63E4681B6F" data-function-name="report_error"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#1622FD63E4681B6F">\xb6</a><code class="hdoc-function-code language-cpp">void report_error(<a href="/docs/api/enums/74E8F59E81C0B2E4/">error_policy</a> policy,\n                  const <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a>&amp; msg)</code></pre></h3><h4>Description</h4><p><p>Ignores, logs, or panics on an error depending on the <code>error_policy</code>.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/utils.h#L166">include/utils.h:166</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/enums/74E8F59E81C0B2E4/">error_policy</a><b> policy</b></dt><dt class="is-family-code">const <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a>&amp;<b> msg</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',n={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function report_error"},o=void 0,c={id:"api/functions/celerity_detail_utils-report_error",title:"function report_error",description:"",source:"@site/celerity-runtime/docs/api/functions/celerity_detail_utils-report_error.mdx",sourceDirName:"api/functions",slug:"/api/functions/celerity_detail_utils-report_error",permalink:"/docs/api/functions/celerity_detail_utils-report_error",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"function report_error"},sidebar:"api"},l={},p=[];function d(e){const{Head:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t,{children:[(0,i.jsx)("script",{src:"/js/highlight.min.js"}),(0,i.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:a}})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>o});var i=r(96540);const s={},a=i.createContext(s);function n(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);