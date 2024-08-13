"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85840],{18911:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>n,toc:()=>p});var r=t(74848),i=t(28453);const s='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page42DEA3E8277ABF6F"><span>class region_map</span></a></li></ul></nav>\n<main><h1>class region_map</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">template &lt;typename ValueType&gt;\nclass region_map { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>The region_map is a spatial data structure for storing values within an n-dimensional extent. Each point within the extent can hold a single value of type ValueType, and all points are initially set to a provided default value.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1245">include/region_map.h:1245</a></p><h2>Template Parameters</h2><dl><dt class="is-family-code"><b> ValueType</b></dt></dl><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_dims" data-member-name="m_dims">  int <b>m_dims</b></dt><dt class="is-family-code hdoc-private" id="var_m_region_map" data-member-name="m_region_map">  <a href="https://en.cppreference.com/w/cpp/utility/variant">std::variant</a>&lt;\n    std::monostate,\n    region_map_detail::region_map_impl&lt;ValueType,\n                                       0&gt;,\n    region_map_detail::region_map_impl&lt;ValueType,\n                                       1&gt;,\n    region_map_detail::region_map_impl&lt;ValueType,\n                                       2&gt;,\n    region_map_detail::region_map_impl&lt;ValueType,\n                                       3&gt;&gt; <b>m_region_map</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><span class="hdoc-overview-template">template &lt;typename Functor&gt;</span><br><a href="#AB8C89D3EDF8FEB7"><b>apply_to_values</b></a>(const Functor &amp; f) &rarr; void</li><li class="is-family-code"><a href="#47E78D2A64DDD51F"><b>format_to</b></a>(fmt::format_context::iterator out) const &rarr; auto</li><li class="is-family-code"><a href="#645358BACCA85A79"><b>get_region_values</b></a>(const region&lt;3&gt; &amp; request) const &rarr; std::vector&lt;std::pair&lt;box&lt;3&gt;, ValueType&gt;&gt;</li><li class="is-family-code"><a href="#BFDC099F060B2AFF"><b>get_region_values</b></a>(const box&lt;3&gt; &amp; request) const &rarr; std::vector&lt;std::pair&lt;box&lt;3&gt;, ValueType&gt;&gt;</li><li class="is-family-code"><a href="#830121353BF6413C"><b>region_map</b></a>(const range&lt;3&gt; &amp; extent, const ValueType &amp; default_value = ValueType{})</li><li class="is-family-code"><a href="#433B67D6DA85A58C"><b>region_map</b></a>(const box&lt;3&gt; &amp; extent, const ValueType &amp; default_value = ValueType{})</li><li class="is-family-code"><a href="#7AAD6084D0024F33"><b>update_box</b></a>(const box&lt;3&gt; &amp; box, const ValueType &amp; value) &rarr; void</li><li class="is-family-code"><a href="#C398AFA7F35F8D1A"><b>update_region</b></a>(const region&lt;3&gt; &amp; region, const ValueType &amp; value) &rarr; void</li><li class="is-family-code hdoc-private"><span class="hdoc-overview-template">template &lt;int Dims&gt;</span><br><a href="#B1B08058822AC2DB"><b>get_map</b></a>() &rarr; region_map_detail::region_map_impl&lt;ValueType, Dims&gt; &amp;</li><li class="is-family-code hdoc-private"><span class="hdoc-overview-template">template &lt;int Dims&gt;</span><br><a href="#92D0CE16819BC9D5"><b>get_map</b></a>() const &rarr; const region_map_detail::region_map_impl&lt;ValueType, Dims&gt; &amp;</li></ul><h2>Member Functions</h2><h3 id="AB8C89D3EDF8FEB7" data-function-name="apply_to_values"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#AB8C89D3EDF8FEB7">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;typename Functor&gt;\nvoid apply_to_values(const Functor&amp; f)</code></pre></h3><h4>Description</h4><p><p>Applies a function f to every value within the region map and stores the result in its place.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1349">include/region_map.h:1349</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code"><b> Functor</b></dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">const Functor&amp;<b> f</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="47E78D2A64DDD51F" data-function-name="format_to"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#47E78D2A64DDD51F">\xb6</a><code class="hdoc-function-code language-cpp">auto format_to(\n    fmt::format_context::iterator out) const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1361">include/region_map.h:1361</a></p><h4>Parameters</h4><dl><dt class="is-family-code">fmt::format_context::iterator<b> out</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="645358BACCA85A79" data-function-name="get_region_values"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#645358BACCA85A79">\xb6</a><code class="hdoc-function-code language-cpp"><a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;std::pair&lt;box&lt;3&gt;, ValueType&gt;&gt;\nget_<a href="/docs/api/records/A3975FE869EB8647/">region</a>_values(const region&lt;3&gt;&amp; request) const</code></pre></h3><h4>Description</h4><p><p>Returns all entries in the region map that intersect with the request region.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1299">include/region_map.h:1299</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt;&amp;<b> request</b></dt></dl><h4>Returns</h4><p>A list of boxes clamped to the request region, and their associated values.</p><hr class="member-fun-separator"></hr><h3 id="BFDC099F060B2AFF" data-function-name="get_region_values"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#BFDC099F060B2AFF">\xb6</a><code class="hdoc-function-code language-cpp"><a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;std::pair&lt;<a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;, ValueType&gt;&gt;\nget_region_values(const box&lt;3&gt;&amp; request) const</code></pre></h3><h4>Description</h4><p><p>Returns all entries in the region map that intersect with the request box.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1314">include/region_map.h:1314</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp;<b> request</b></dt></dl><h4>Returns</h4><p>A list of boxes clamped to the request box, and their associated values.</p><hr class="member-fun-separator"></hr><h3 id="830121353BF6413C" data-function-name="region_map"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#830121353BF6413C">\xb6</a><code class="hdoc-function-code language-cpp">region_map(\n    const <a href="/docs/api/records/B13622E7024342AF/">range</a>&lt;3&gt;&amp; extent,\n    const ValueType&amp; default_value = ValueType{})</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1253">include/region_map.h:1253</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/B13622E7024342AF/">range</a>&lt;3&gt;&amp;<b> extent</b></dt><dd>The extent of the region map defines the set of points for which it can hold values. All update operations and query results are clamped to this extent.</dd><dt class="is-family-code">const ValueType&amp;<b> default_value</b> = ValueType{}</dt></dl><hr class="member-fun-separator"></hr><h3 id="433B67D6DA85A58C" data-function-name="region_map"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#433B67D6DA85A58C">\xb6</a><code class="hdoc-function-code language-cpp">region_map(\n    const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp; extent,\n    const ValueType&amp; default_value = ValueType{})</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1259">include/region_map.h:1259</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp;<b> extent</b></dt><dd>The extent of the region map defines the set of points for which it can hold values. All update operations and query results are clamped to this extent.</dd><dt class="is-family-code">const ValueType&amp;<b> default_value</b> = ValueType{}</dt></dl><hr class="member-fun-separator"></hr><h3 id="7AAD6084D0024F33" data-function-name="update_box"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#7AAD6084D0024F33">\xb6</a><code class="hdoc-function-code language-cpp">void update_<a href="/docs/api/records/A87962C2586A4E24/">box</a>(const box&lt;3&gt;&amp; box,\n                const ValueType&amp; value)</code></pre></h3><h4>Description</h4><p><p>Sets a new value for the provided box within the region map.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1283">include/region_map.h:1283</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A87962C2586A4E24/">box</a>&lt;3&gt;&amp;<b> box</b></dt><dt class="is-family-code">const ValueType&amp;<b> value</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="C398AFA7F35F8D1A" data-function-name="update_region"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#C398AFA7F35F8D1A">\xb6</a><code class="hdoc-function-code language-cpp">void update_<a href="/docs/api/records/A3975FE869EB8647/">region</a>(const region&lt;3&gt;&amp; region,\n                   const ValueType&amp; value)</code></pre></h3><h4>Description</h4><p><p>Sets a new value for the provided region within the region map.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1273">include/region_map.h:1273</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt;&amp;<b> region</b></dt><dt class="is-family-code">const ValueType&amp;<b> value</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="B1B08058822AC2DB" data-function-name="get_map"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#B1B08058822AC2DB">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;int Dims&gt;\nregion_map_detail::region_map_impl&lt;ValueType,\n                                   Dims&gt;&amp;\nget_map()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1376">include/region_map.h:1376</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code">int<b> Dims</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="92D0CE16819BC9D5" data-function-name="get_map"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#92D0CE16819BC9D5">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;int Dims&gt;\nconst region_map_detail::\n    region_map_impl&lt;ValueType, Dims&gt;&amp;\n    get_map() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1382">include/region_map.h:1382</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code">int<b> Dims</b></dt></dl><hr class="member-fun-separator"></hr></main>',o={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class region_map"},l=void 0,n={id:"api/records/42DEA3E8277ABF6F",title:"class region_map",description:"",source:"@site/celerity-runtime/docs/api/records/42DEA3E8277ABF6F.mdx",sourceDirName:"api/records",slug:"/api/records/42DEA3E8277ABF6F",permalink:"/docs/api/records/42DEA3E8277ABF6F",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class region_map"},sidebar:"api"},c={},p=[];function d(e){const{Head:a}={...(0,i.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a,{children:[(0,r.jsx)("script",{src:"/js/highlight.min.js"}),(0,r.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function m(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>l});var r=t(96540);const i={},s=r.createContext(i);function o(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);