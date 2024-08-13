"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69769],{25173:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>o});var s=a(74848),c=a(28453);const i='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li class="is-active"><a aria-current="pageC0A7D0CE69BB24F9"><span>class buffer</span></a></li></ul></nav>\n<main><h1>class buffer</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">template &lt;typename DataT, int Dims = 1&gt;\nclass buffer { /* full declaration omitted */ };</code></pre><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/buffer.h#L48">include/buffer.h:48</a></p></aside><section><h2>Template Parameters</h2><dl><dt class="is-family-code"><b> DataT</b></dt><dt class="is-family-code">int<b> Dims</b> = 1</dt></dl></section><section><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_tracker" data-member-name="m_tracker">  <a href="https://en.cppreference.com/w/cpp/memory/shared_ptr">std::shared_ptr</a>&lt;tracker&gt; <b>m_tracker</b></dt></dl></section><section><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#80ADD009DAB1998E"><b>buffer</b></a>(const DataT * host_ptr, const range&lt;Dims&gt; &amp; range) &rarr; explicit</li><li class="is-family-code"><a href="#3FC143E64882013F"><b>buffer</b></a>(const range&lt;Dims&gt; &amp; range) &rarr; explicit</li><li class="is-family-code"><span class="hdoc-overview-template">template &lt;int D = Dims, typename  = std::enable_if_t&lt;D == 0&gt;&gt;</span><br><a href="#339C7400E97C885C"><b>buffer</b></a>()</li><li class="is-family-code"><span class="hdoc-overview-template">template &lt;int D = Dims, typename  = std::enable_if_t&lt;D == 0&gt;&gt;</span><br><a href="#E149706DBE48D3E3"><b>buffer</b></a>(const DataT &amp; value)</li><li class="is-family-code"><span class="hdoc-overview-template">template &lt;access_mode Mode, typename Functor, int D = Dims, std::enable_if_t&lt;(D &gt; 0), int&gt;  = 0&gt;</span><br><a href="#F5DB8420D82337C6"><b>get_access</b></a>(handler &amp; cgh, Functor rmfn) &rarr; accessor&lt;DataT, Dims, Mode, target::device&gt;</li><li class="is-family-code"><span class="hdoc-overview-template">template &lt;access_mode Mode, typename Functor, int D = Dims, std::enable_if_t&lt;D == 0, int&gt;  = 0&gt;</span><br><a href="#575403A3671ADDE8"><b>get_access</b></a>(handler &amp; cgh) &rarr; accessor&lt;DataT, Dims, Mode, target::device&gt;</li><li class="is-family-code"><span class="hdoc-overview-template">template &lt;access_mode Mode, target Target, typename Functor, int D = Dims, std::enable_if_t&lt;(D &gt; 0), int&gt;  = 0&gt;</span><br><a href="#E19D451A9CCE8556"><b>get_access</b></a>(handler &amp; cgh, Functor rmfn) &rarr; accessor&lt;DataT, Dims, Mode, Target&gt;</li><li class="is-family-code"><span class="hdoc-overview-template">template &lt;access_mode Mode, target Target, typename Functor, int D = Dims, std::enable_if_t&lt;D == 0, int&gt;  = 0&gt;</span><br><a href="#2C89930931434694"><b>get_access</b></a>(handler &amp; cgh) &rarr; accessor&lt;DataT, Dims, Mode, Target&gt;</li><li class="is-family-code"><span class="hdoc-overview-template">template &lt;access_mode Mode, typename Functor, int D = Dims, std::enable_if_t&lt;(D &gt; 0), int&gt;  = 0&gt;</span><br><a href="#F0DCBD24EA5F59A9"><b>get_access</b></a>(handler &amp; cgh, Functor rmfn) const &rarr; accessor&lt;DataT, Dims, Mode, target::device&gt;</li><li class="is-family-code"><span class="hdoc-overview-template">template &lt;access_mode Mode, target Target, typename Functor, int D = Dims, std::enable_if_t&lt;(D &gt; 0), int&gt;  = 0&gt;</span><br><a href="#82F033BD8453CA76"><b>get_access</b></a>(handler &amp; cgh, Functor rmfn) const &rarr; accessor&lt;DataT, Dims, Mode, Target&gt;</li><li class="is-family-code"><a href="#0D2A4363FA394795"><b>get_range</b></a>() const &rarr; const range&lt;Dims&gt; &amp;</li></ul></section><section><h2>Member Functions</h2><section><h3 id="80ADD009DAB1998E" data-function-name="buffer"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#80ADD009DAB1998E">\xb6</a><code class="hdoc-function-code language-cpp">explicit buffer(const DataT* host_ptr,\n                const range&lt;Dims&gt;&amp; range)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/buffer.h#L55">include/buffer.h:55</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const DataT*<b> host_ptr</b></dt><dt class="is-family-code">const range&lt;Dims&gt;&amp;<b> range</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="3FC143E64882013F" data-function-name="buffer"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#3FC143E64882013F">\xb6</a><code class="hdoc-function-code language-cpp">explicit buffer(const range&lt;Dims&gt;&amp; range)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/buffer.h#L57">include/buffer.h:57</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const range&lt;Dims&gt;&amp;<b> range</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="339C7400E97C885C" data-function-name="buffer"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#339C7400E97C885C">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;int D = Dims,\n          typename = std::enable_if_t&lt;D == 0&gt;&gt;\nbuffer()</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/buffer.h#L53">include/buffer.h:53</a></p></aside><section><h4>Template Parameters</h4><dl><dt class="is-family-code">int<b> D</b> = Dims</dt><dt class="is-family-code"><b> </b> = std::enable_if_t&lt;D == 0&gt;</dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="E149706DBE48D3E3" data-function-name="buffer"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#E149706DBE48D3E3">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;int D = Dims,\n          typename = std::enable_if_t&lt;D == 0&gt;&gt;\nbuffer(const DataT&amp; value)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/buffer.h#L60">include/buffer.h:60</a></p></aside><section><h4>Template Parameters</h4><dl><dt class="is-family-code">int<b> D</b> = Dims</dt><dt class="is-family-code"><b> </b> = std::enable_if_t&lt;D == 0&gt;</dt></dl></section><section><h4>Parameters</h4><dl><dt class="is-family-code">const DataT&amp;<b> value</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="F5DB8420D82337C6" data-function-name="get_access"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#F5DB8420D82337C6">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;access_mode Mode,\n          typename Functor,\n          int D = Dims,\n          std::enable_if_t&lt;(D &gt; 0), int&gt; = 0&gt;\naccessor&lt;DataT, Dims, Mode, target::device&gt;\nget_access(<a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp; cgh, Functor rmfn)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/buffer.h#L63">include/buffer.h:63</a></p></aside><section><h4>Template Parameters</h4><dl><dt class="is-family-code">access_mode<b> Mode</b></dt><dt class="is-family-code"><b> Functor</b></dt><dt class="is-family-code">int<b> D</b> = Dims</dt><dt class="is-family-code">std::enable_if_t&lt;(D &gt; 0), int&gt;<b> </b> = 0</dt></dl></section><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp;<b> cgh</b></dt><dt class="is-family-code">Functor<b> rmfn</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="575403A3671ADDE8" data-function-name="get_access"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#575403A3671ADDE8">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;access_mode Mode,\n          typename Functor,\n          int D = Dims,\n          std::enable_if_t&lt;D == 0, int&gt; = 0&gt;\naccessor&lt;DataT, Dims, Mode, target::device&gt;\nget_access(<a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp; cgh)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/buffer.h#L68">include/buffer.h:68</a></p></aside><section><h4>Template Parameters</h4><dl><dt class="is-family-code">access_mode<b> Mode</b></dt><dt class="is-family-code"><b> Functor</b></dt><dt class="is-family-code">int<b> D</b> = Dims</dt><dt class="is-family-code">std::enable_if_t&lt;D == 0, int&gt;<b> </b> = 0</dt></dl></section><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp;<b> cgh</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="E19D451A9CCE8556" data-function-name="get_access"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#E19D451A9CCE8556">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;access_mode Mode,\n          target Target,\n          typename Functor,\n          int D = Dims,\n          std::enable_if_t&lt;(D &gt; 0), int&gt; = 0&gt;\naccessor&lt;DataT, Dims, Mode, Target&gt; get_access(\n    <a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp; cgh,\n    Functor rmfn)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/buffer.h#L73">include/buffer.h:73</a></p></aside><section><h4>Template Parameters</h4><dl><dt class="is-family-code">access_mode<b> Mode</b></dt><dt class="is-family-code">target<b> Target</b></dt><dt class="is-family-code"><b> Functor</b></dt><dt class="is-family-code">int<b> D</b> = Dims</dt><dt class="is-family-code">std::enable_if_t&lt;(D &gt; 0), int&gt;<b> </b> = 0</dt></dl></section><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp;<b> cgh</b></dt><dt class="is-family-code">Functor<b> rmfn</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="2C89930931434694" data-function-name="get_access"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#2C89930931434694">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;access_mode Mode,\n          target Target,\n          typename Functor,\n          int D = Dims,\n          std::enable_if_t&lt;D == 0, int&gt; = 0&gt;\naccessor&lt;DataT, Dims, Mode, Target&gt; get_access(\n    <a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp; cgh)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/buffer.h#L78">include/buffer.h:78</a></p></aside><section><h4>Template Parameters</h4><dl><dt class="is-family-code">access_mode<b> Mode</b></dt><dt class="is-family-code">target<b> Target</b></dt><dt class="is-family-code"><b> Functor</b></dt><dt class="is-family-code">int<b> D</b> = Dims</dt><dt class="is-family-code">std::enable_if_t&lt;D == 0, int&gt;<b> </b> = 0</dt></dl></section><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp;<b> cgh</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="F0DCBD24EA5F59A9" data-function-name="get_access"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#F0DCBD24EA5F59A9">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;access_mode Mode,\n          typename Functor,\n          int D = Dims,\n          std::enable_if_t&lt;(D &gt; 0), int&gt; = 0&gt;\naccessor&lt;DataT, Dims, Mode, target::device&gt;\nget_access(<a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp; cgh, Functor rmfn) const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/buffer.h#L83">include/buffer.h:83</a></p></aside><section><h4>Template Parameters</h4><dl><dt class="is-family-code">access_mode<b> Mode</b></dt><dt class="is-family-code"><b> Functor</b></dt><dt class="is-family-code">int<b> D</b> = Dims</dt><dt class="is-family-code">std::enable_if_t&lt;(D &gt; 0), int&gt;<b> </b> = 0</dt></dl></section><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp;<b> cgh</b></dt><dt class="is-family-code">Functor<b> rmfn</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="82F033BD8453CA76" data-function-name="get_access"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#82F033BD8453CA76">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;access_mode Mode,\n          target Target,\n          typename Functor,\n          int D = Dims,\n          std::enable_if_t&lt;(D &gt; 0), int&gt; = 0&gt;\naccessor&lt;DataT, Dims, Mode, Target&gt; get_access(\n    <a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp; cgh,\n    Functor rmfn) const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/buffer.h#L89">include/buffer.h:89</a></p></aside><section><h4>Template Parameters</h4><dl><dt class="is-family-code">access_mode<b> Mode</b></dt><dt class="is-family-code">target<b> Target</b></dt><dt class="is-family-code"><b> Functor</b></dt><dt class="is-family-code">int<b> D</b> = Dims</dt><dt class="is-family-code">std::enable_if_t&lt;(D &gt; 0), int&gt;<b> </b> = 0</dt></dl></section><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp;<b> cgh</b></dt><dt class="is-family-code">Functor<b> rmfn</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="0D2A4363FA394795" data-function-name="get_range"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#0D2A4363FA394795">\xb6</a><code class="hdoc-function-code language-cpp">const range&lt;Dims&gt;&amp; get_range() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/buffer.h#L93">include/buffer.h:93</a></p></aside></section><hr class="member-fun-separator"></hr></section></main>',r={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class buffer"},l=void 0,n={id:"api/records/C0A7D0CE69BB24F9",title:"class buffer",description:"",source:"@site/celerity-runtime/docs/api/records/C0A7D0CE69BB24F9.mdx",sourceDirName:"api/records",slug:"/api/records/C0A7D0CE69BB24F9",permalink:"/docs/api/records/C0A7D0CE69BB24F9",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class buffer"},sidebar:"api"},d={},o=[];function m(e){const{Head:t}={...(0,c.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t,{children:[(0,s.jsx)("script",{src:"/js/highlight.min.js"}),(0,s.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:i}})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>l});var s=a(96540);const c={},i=s.createContext(c);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);