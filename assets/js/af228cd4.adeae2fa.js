"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93237],{46369:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>n,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var c=i(74848),r=i(28453);const t='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>class config: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page49A1911E6365B281"><span>class config</span></a></li></ul></nav><main class="content"><h1>class config</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class config { /* full declaration omitted */ };</code></pre><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/config.h#L18">include/config.h:18</a></p><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_log_lvl" data-member-name="m_log_lvl">  log_level <b>m_log_lvl</b></dt><dt class="is-family-code hdoc-private" id="var_m_enable_device_profiling" data-member-name="m_enable_device_profiling">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;bool&gt; <b>m_enable_device_profiling</b></dt><dt class="is-family-code hdoc-private" id="var_m_dry_run_nodes" data-member-name="m_dry_run_nodes">  size_t <b>m_dry_run_nodes</b> = 0</dt><dt class="is-family-code hdoc-private" id="var_m_should_print_graphs" data-member-name="m_should_print_graphs">  bool <b>m_should_print_graphs</b> = false</dt><dt class="is-family-code hdoc-private" id="var_m_horizon_step" data-member-name="m_horizon_step">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;int&gt; <b>m_horizon_step</b></dt><dt class="is-family-code hdoc-private" id="var_m_horizon_max_parallelism" data-member-name="m_horizon_max_parallelism">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;int&gt; <b>m_horizon_max_parallelism</b></dt><dt class="is-family-code hdoc-private" id="var_m_tracy_mode" data-member-name="m_tracy_mode">  <a href="/docs/api/enums/3CB26C877861F3F6/">tracy_mode</a> <b>m_tracy_mode</b> = tracy_mode::off</dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#FEB1EBD2008A179C"><b>config</b></a>(int * argc, char *** argv)</li><li class="is-family-code"><a href="#CE42A1707B6EF80D"><b>get_dry_run_nodes</b></a>() const &rarr; int</li><li class="is-family-code"><a href="#57BCAAA53C369397"><b>get_horizon_max_parallelism</b></a>() const &rarr; std::optional&lt;int&gt;</li><li class="is-family-code"><a href="#212A8DBD86D7D6CE"><b>get_horizon_step</b></a>() const &rarr; std::optional&lt;int&gt;</li><li class="is-family-code"><a href="#639DE98D5F27969D"><b>get_log_level</b></a>() const &rarr; log_level</li><li class="is-family-code"><a href="#B83C0F054AC21F12"><b>get_tracy_mode</b></a>() const &rarr; tracy_mode</li><li class="is-family-code"><a href="#AD63DC5FC7E5AA55"><b>is_dry_run</b></a>() const &rarr; bool</li><li class="is-family-code"><a href="#1B79EF1AB5D56FC0"><b>should_enable_device_profiling</b></a>() const &rarr; bool</li><li class="is-family-code"><a href="#D11D8FE532E526C8"><b>should_print_graphs</b></a>() const &rarr; bool</li><li class="is-family-code"><a href="#2006865A875DFAB6"><b>should_record</b></a>() const &rarr; bool</li></ul><h2>Member Functions</h2><h3 id="FEB1EBD2008A179C" data-function-name="config"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#FEB1EBD2008A179C">\xb6</a><code class="hdoc-function-code language-cpp">config(int* argc, char*** argv)</code></pre></h3><h4>Description</h4><p><p>Initializes the @p config by parsing environment variables and passed arguments.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/config.h#L23">include/config.h:23</a></p><h4>Parameters</h4><dl><dt class="is-family-code">int*<b> argc</b></dt><dt class="is-family-code">char***<b> argv</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="CE42A1707B6EF80D" data-function-name="get_dry_run_nodes"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#CE42A1707B6EF80D">\xb6</a><code class="hdoc-function-code language-cpp">int get_dry_run_nodes() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/config.h#L34">include/config.h:34</a></p><hr class="member-fun-separator"></hr><h3 id="57BCAAA53C369397" data-function-name="get_horizon_max_parallelism"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#57BCAAA53C369397">\xb6</a><code class="hdoc-function-code language-cpp"><a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;int&gt; get_horizon_max_parallelism()\n    const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/config.h#L36">include/config.h:36</a></p><hr class="member-fun-separator"></hr><h3 id="212A8DBD86D7D6CE" data-function-name="get_horizon_step"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#212A8DBD86D7D6CE">\xb6</a><code class="hdoc-function-code language-cpp"><a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;int&gt; get_horizon_step() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/config.h#L35">include/config.h:35</a></p><hr class="member-fun-separator"></hr><h3 id="639DE98D5F27969D" data-function-name="get_log_level"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#639DE98D5F27969D">\xb6</a><code class="hdoc-function-code language-cpp">log_level get_log_level() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/config.h#L25">include/config.h:25</a></p><hr class="member-fun-separator"></hr><h3 id="B83C0F054AC21F12" data-function-name="get_tracy_mode"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#B83C0F054AC21F12">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/enums/3CB26C877861F3F6/">tracy_mode</a> get_tracy_mode() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/config.h#L37">include/config.h:37</a></p><hr class="member-fun-separator"></hr><h3 id="AD63DC5FC7E5AA55" data-function-name="is_dry_run"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#AD63DC5FC7E5AA55">\xb6</a><code class="hdoc-function-code language-cpp">bool is_dry_run() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/config.h#L28">include/config.h:28</a></p><hr class="member-fun-separator"></hr><h3 id="1B79EF1AB5D56FC0" data-function-name="should_enable_device_profiling"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#1B79EF1AB5D56FC0">\xb6</a><code class="hdoc-function-code language-cpp">bool should_enable_device_profiling() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/config.h#L27">include/config.h:27</a></p><hr class="member-fun-separator"></hr><h3 id="D11D8FE532E526C8" data-function-name="should_print_graphs"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#D11D8FE532E526C8">\xb6</a><code class="hdoc-function-code language-cpp">bool should_print_graphs() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/config.h#L29">include/config.h:29</a></p><hr class="member-fun-separator"></hr><h3 id="2006865A875DFAB6" data-function-name="should_record"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#2006865A875DFAB6">\xb6</a><code class="hdoc-function-code language-cpp">bool should_record() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/config.h#L30">include/config.h:30</a></p><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',s={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class config"},l=void 0,o={id:"api/records/49A1911E6365B281",title:"class config",description:"",source:"@site/celerity-runtime/docs/api/records/49A1911E6365B281.mdx",sourceDirName:"api/records",slug:"/api/records/49A1911E6365B281",permalink:"/docs/api/records/49A1911E6365B281",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class config"},sidebar:"api"},n={},d=[];function p(e){const{Head:a}={...(0,r.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(a,{children:[(0,c.jsx)("script",{src:"/js/highlight.min.js"}),(0,c.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,c.jsx)(a,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},28453:(e,a,i)=>{i.d(a,{R:()=>s,x:()=>l});var c=i(96540);const r={},t=c.createContext(r);function s(e){const a=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),c.createElement(t.Provider,{value:a},e.children)}}}]);