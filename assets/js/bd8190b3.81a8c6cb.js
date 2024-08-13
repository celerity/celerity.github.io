"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1050],{97578:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=t(74848),c=t(28453);const i='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li class="is-active"><a aria-current="pageB56E981D7E9CD48F"><span>class buffer_allocation_window</span></a></li></ul></nav>\n<main><h1>class buffer_allocation_window</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">template &lt;typename T, int Dims&gt;\nclass buffer_allocation_window { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>In addition to the usual per-item access through the subscript operator, accessors in distributed and collective host tasks can access the underlying memory of the node-local copy of a buffer directly through <code>accessor::get_allocation_window()</code>. Celerity does not replicate buffers fully on all nodes unless necessary, instead keeping an allocation of a subset that is resized as needed. buffer_allocation_window denotes how indices in the subrange assigned to one node (the <em>window</em>) map to the underlying buffer storage (the <em>allocation</em>). The structure threrefore describes three subranges: The buffer, the allocation, and the window, with the latter being fully contained in the former. Popular third-party APIs, such as HDF5 hyperslabs, can accept parameters from such an explicit description in one or the other form.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/accessor.h#L51">include/accessor.h:51</a></p><h2>Template Parameters</h2><dl><dt class="is-family-code"><b> T</b></dt><dt class="is-family-code">int<b> Dims</b></dt></dl><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_allocation" data-member-name="m_allocation">  T* <b>m_allocation</b></dt><dt class="is-family-code hdoc-private" id="var_m_buffer_range" data-member-name="m_buffer_range">  range&lt;Dims&gt; <b>m_buffer_range</b></dt><dt class="is-family-code hdoc-private" id="var_m_allocation_range" data-member-name="m_allocation_range">  range&lt;Dims&gt; <b>m_allocation_range</b></dt><dt class="is-family-code hdoc-private" id="var_m_window_range" data-member-name="m_window_range">  range&lt;Dims&gt; <b>m_window_range</b></dt><dt class="is-family-code hdoc-private" id="var_m_allocation_offset_in_buffer" data-member-name="m_allocation_offset_in_buffer">  id&lt;Dims&gt; <b>m_allocation_offset_in_buffer</b></dt><dt class="is-family-code hdoc-private" id="var_m_window_offset_in_buffer" data-member-name="m_window_offset_in_buffer">  id&lt;Dims&gt; <b>m_window_offset_in_buffer</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#A4AB2190100E8B98"><b>buffer_allocation_window</b></a>(T * allocation, const range&lt;Dims&gt; &amp; buffer_range, const range&lt;Dims&gt; &amp; allocation_range, const range&lt;Dims&gt; &amp; window_range, const id&lt;Dims&gt; &amp; allocation_offset_in_buffer, const id&lt;Dims&gt; &amp; window_offset_in_buffer)</li><li class="is-family-code"><a href="#8A9436818DA19C25"><b>get_allocation</b></a>() const &rarr; T *</li><li class="is-family-code"><a href="#715ED3B5FAB95FBF"><b>get_allocation_offset_in_buffer</b></a>() const &rarr; id&lt;Dims&gt;</li><li class="is-family-code"><a href="#C5B49EB73887A913"><b>get_allocation_range</b></a>() const &rarr; range&lt;Dims&gt;</li><li class="is-family-code"><a href="#EF1E8E1139E05E81"><b>get_buffer_range</b></a>() const &rarr; range&lt;Dims&gt;</li><li class="is-family-code"><a href="#3C1F33DFF00A1464"><b>get_window_offset_in_allocation</b></a>() const &rarr; id&lt;Dims&gt;</li><li class="is-family-code"><a href="#4F66FEB8C24A93CE"><b>get_window_offset_in_buffer</b></a>() const &rarr; id&lt;Dims&gt;</li><li class="is-family-code"><a href="#D7E711BE0DA1F007"><b>get_window_range</b></a>() const &rarr; range&lt;Dims&gt;</li></ul><h2>Member Functions</h2><h3 id="A4AB2190100E8B98" data-function-name="buffer_allocation_window"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#A4AB2190100E8B98">\xb6</a><code class="hdoc-function-code language-cpp">buffer_allocation_window(\n    T* allocation,\n    const range&lt;Dims&gt;&amp; buffer_range,\n    const range&lt;Dims&gt;&amp; allocation_range,\n    const range&lt;Dims&gt;&amp; window_range,\n    const id&lt;Dims&gt;&amp; allocation_offset_in_buffer,\n    const id&lt;Dims&gt;&amp; window_offset_in_buffer)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/accessor.h#L76">include/accessor.h:76</a></p><h4>Parameters</h4><dl><dt class="is-family-code">T*<b> allocation</b></dt><dt class="is-family-code">const range&lt;Dims&gt;&amp;<b> buffer_range</b></dt><dt class="is-family-code">const range&lt;Dims&gt;&amp;<b> allocation_range</b></dt><dt class="is-family-code">const range&lt;Dims&gt;&amp;<b> window_range</b></dt><dt class="is-family-code">const id&lt;Dims&gt;&amp;<b> allocation_offset_in_buffer</b></dt><dt class="is-family-code">const id&lt;Dims&gt;&amp;<b> window_offset_in_buffer</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="8A9436818DA19C25" data-function-name="get_allocation"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#8A9436818DA19C25">\xb6</a><code class="hdoc-function-code language-cpp">T* get_allocation() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/accessor.h#L53">include/accessor.h:53</a></p><hr class="member-fun-separator"></hr><h3 id="715ED3B5FAB95FBF" data-function-name="get_allocation_offset_in_buffer"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#715ED3B5FAB95FBF">\xb6</a><code class="hdoc-function-code language-cpp">id&lt;Dims&gt; get_allocation_offset_in_buffer() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/accessor.h#L61">include/accessor.h:61</a></p><hr class="member-fun-separator"></hr><h3 id="C5B49EB73887A913" data-function-name="get_allocation_range"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#C5B49EB73887A913">\xb6</a><code class="hdoc-function-code language-cpp">range&lt;Dims&gt; get_allocation_range() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/accessor.h#L57">include/accessor.h:57</a></p><hr class="member-fun-separator"></hr><h3 id="EF1E8E1139E05E81" data-function-name="get_buffer_range"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#EF1E8E1139E05E81">\xb6</a><code class="hdoc-function-code language-cpp">range&lt;Dims&gt; get_buffer_range() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/accessor.h#L55">include/accessor.h:55</a></p><hr class="member-fun-separator"></hr><h3 id="3C1F33DFF00A1464" data-function-name="get_window_offset_in_allocation"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#3C1F33DFF00A1464">\xb6</a><code class="hdoc-function-code language-cpp">id&lt;Dims&gt; get_window_offset_in_allocation() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/accessor.h#L65">include/accessor.h:65</a></p><hr class="member-fun-separator"></hr><h3 id="4F66FEB8C24A93CE" data-function-name="get_window_offset_in_buffer"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#4F66FEB8C24A93CE">\xb6</a><code class="hdoc-function-code language-cpp">id&lt;Dims&gt; get_window_offset_in_buffer() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/accessor.h#L63">include/accessor.h:63</a></p><hr class="member-fun-separator"></hr><h3 id="D7E711BE0DA1F007" data-function-name="get_window_range"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#D7E711BE0DA1F007">\xb6</a><code class="hdoc-function-code language-cpp">range&lt;Dims&gt; get_window_range() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/accessor.h#L59">include/accessor.h:59</a></p><hr class="member-fun-separator"></hr></main>',o={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class buffer_allocation_window"},n=void 0,r={id:"api/records/B56E981D7E9CD48F",title:"class buffer_allocation_window",description:"",source:"@site/celerity-runtime/docs/api/records/B56E981D7E9CD48F.mdx",sourceDirName:"api/records",slug:"/api/records/B56E981D7E9CD48F",permalink:"/docs/api/records/B56E981D7E9CD48F",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class buffer_allocation_window"},sidebar:"api"},l={},d=[];function f(e){const{Head:a}={...(0,c.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a,{children:[(0,s.jsx)("script",{src:"/js/highlight.min.js"}),(0,s.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:i}})]})}function m(e={}){const{wrapper:a}={...(0,c.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>n});var s=t(96540);const c={},i=s.createContext(c);function o(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);