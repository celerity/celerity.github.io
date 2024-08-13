"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70688],{79836:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>n,toc:()=>p});var s=t(74848),i=t(28453);const r='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li><a href="/docs/api/namespaces/#629206E626947F81"><span>namespace region_map_detail</span></a></li><li class="is-active"><a aria-current="page20DB13AA1EF819A8"><span>class region_map_impl</span></a></li></ul></nav>\n<main><h1>class region_map_impl</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">template &lt;typename ValueType, int Dims&gt;\nclass region_map_impl { /* full declaration omitted */ };</code></pre><section><h2>Description</h2><p><p>The region map is implemented as a customized R-Tree [Guttman 1984]. In order to maintain performance over time, entries with compatible boxes and equal values will be merged. The implementation logic is split between this class, which acts as a wrapper around the root node, as well as inner_node, which implements the recursive tree operations. This class is responsible for dispatching the recursive calls as well as handling the merging of entries and reinsertion of orphaned entries/nodes after update operations. It is also responsible for merging the final list of query results. TODO PERF: Try to minimize the number of value copies we do during intermediate steps (e.g. when merging) TODO PERF: Look into bulk-loading algorithms for updating multiple boxes at once</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L827">include/region_map.h:827</a></p></aside><section><h2>Template Parameters</h2><dl><dt class="is-family-code"><b> ValueType</b></dt><dt class="is-family-code">int<b> Dims</b></dt></dl></section><section><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_dimensions" data-member-name="dimensions"> static  const size_t <b>dimensions</b> = Dims</dt><dt class="is-family-code hdoc-private" id="var_m_extent" data-member-name="m_extent">  box&lt;Dims&gt; <b>m_extent</b></dt><dt class="is-family-code hdoc-private" id="var_m_root" data-member-name="m_root">  <a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;typename types::inner_node_type&gt; <b>m_root</b></dt><dt class="is-family-code hdoc-private" id="var_m_update_actions" data-member-name="m_update_actions">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;typename types::update_action&gt; <b>m_update_actions</b></dt><dt class="is-family-code hdoc-private" id="var_m_merge_candidates" data-member-name="m_merge_candidates">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;typename types::entry&gt; <b>m_merge_candidates</b></dt><dt class="is-family-code hdoc-private" id="var_m_updated_nodes" data-member-name="m_updated_nodes">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;typename types::entry&gt; <b>m_updated_nodes</b></dt><dt class="is-family-code hdoc-private" id="var_m_erase_orphans" data-member-name="m_erase_orphans">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;typename types::orphan&gt; <b>m_erase_orphans</b></dt><dt class="is-family-code hdoc-private" id="var_m_query_results_raw" data-member-name="m_query_results_raw">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;typename types::entry&gt; <b>m_query_results_raw</b></dt><dt class="is-family-code hdoc-private" id="var_m_query_results_clamped" data-member-name="m_query_results_clamped">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;typename types::entry&gt; <b>m_query_results_clamped</b></dt></dl></section><section><h2>Member Aliases</h2><ul><li class="is-family-code">using value_type = ValueType;</li><li class="is-family-code hdoc-private">using types = region_map_types&lt;ValueType, Dims&gt;;</li></ul></section><section><h2>Member Function Overview</h2><ul><li class="is-family-code"><span class="hdoc-overview-template">template &lt;typename Functor&gt;</span><br><a href="#A9E7623F3CF8F4D7"><b>apply_to_values</b></a>(const Functor &amp; f) &rarr; void</li><li class="is-family-code"><a href="#EC8B05EEB45398D5"><b>format_to</b></a>(fmt::format_context::iterator out) const &rarr; auto</li><li class="is-family-code"><a href="#D67766596BB29A83"><b>get_extent</b></a>() const &rarr; range&lt;Dims&gt;</li><li class="is-family-code"><a href="#D47562DF70846279"><b>get_region_values</b></a>(const box&lt;Dims&gt; &amp; request) const &rarr; std::vector&lt;typename types::entry&gt;</li><li class="is-family-code"><a href="#EB9FC8402FA1F66B"><b>operator=</b></a>(const region_map_impl&lt;ValueType, Dims&gt; &amp;) &rarr; region_map_impl&lt;ValueType, Dims&gt; &amp;</li><li class="is-family-code"><a href="#C606197A3FD37208"><b>operator=</b></a>(region_map_impl&lt;ValueType, Dims&gt; &amp;&amp;) noexcept &rarr; region_map_impl&lt;ValueType, Dims&gt; &amp;</li><li class="is-family-code"><a href="#273E1A5514B1BA4B"><b>region_map_impl</b></a>(const box&lt;Dims&gt; &amp; extent, const ValueType &amp; default_value = ValueType{})</li><li class="is-family-code"><a href="#BFD71A273C1BD51A"><b>region_map_impl</b></a>(const region_map_impl&lt;ValueType, Dims&gt; &amp;)</li><li class="is-family-code"><a href="#EE056DAD97D7F1E2"><b>region_map_impl</b></a>(region_map_impl&lt;ValueType, Dims&gt; &amp;&amp;) noexcept</li><li class="is-family-code"><a href="#74F9CCDDE7171C31"><b>update_box</b></a>(const box&lt;Dims&gt; &amp; box, const ValueType &amp; value) &rarr; void</li><li class="is-family-code"><a href="#DA84AAB1859E01FC"><b>~region_map_impl</b></a>()</li><li class="is-family-code hdoc-private"><a href="#9C4DCDF3A6DE98AD"><b>can_merge</b></a>(const box&lt;Dims&gt; &amp; box_a, const box&lt;Dims&gt; &amp; box_b) const &rarr; bool</li><li class="is-family-code hdoc-private"><a href="#C5E6221C1EAF7A0F"><b>erase</b></a>(const box&lt;Dims&gt; &amp; box) &rarr; void</li><li class="is-family-code hdoc-private"><span class="hdoc-overview-template">template &lt;typename Callback&gt;</span><br><a href="#0B882F4E696F2288"><b>for_each</b></a>(const Callback &amp; cb) const &rarr; void</li><li class="is-family-code hdoc-private"><a href="#02EDECA74FA336D8"><b>insert</b></a>(const box&lt;Dims&gt; &amp; box, const ValueType &amp; value) &rarr; void</li><li class="is-family-code hdoc-private"><a href="#C6A9CDAD2FEA5B1C"><b>insert_subtree</b></a>(const box&lt;Dims&gt; &amp; box, typename types::unique_inner_node_ptr &amp;&amp; subtree) &rarr; void</li><li class="is-family-code hdoc-private"><a href="#B39FC1E2FF8A3A40"><b>reroot</b></a>(typename types::insert_result new_sibling) &rarr; void</li><li class="is-family-code hdoc-private"><a href="#5A419E9136A516E2"><b>try_merge</b></a>(std::vector&lt;typename types::entry&gt; &amp;&amp; merge_candidates) &rarr; void</li></ul></section><section><h2>Member Functions</h2><section><h3 id="A9E7623F3CF8F4D7" data-function-name="apply_to_values"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#A9E7623F3CF8F4D7">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;typename Functor&gt;\nvoid apply_to_values(const Functor&amp; f)</code></pre></h3><section><h4>Description</h4><p><p>Applies the provided functor to all values and attempts to merge all entries that had their values changed.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L928">include/region_map.h:928</a></p></aside><section><h4>Template Parameters</h4><dl><dt class="is-family-code"><b> Functor</b></dt></dl></section><section><h4>Parameters</h4><dl><dt class="is-family-code">const Functor&amp;<b> f</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="EC8B05EEB45398D5" data-function-name="format_to"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#EC8B05EEB45398D5">\xb6</a><code class="hdoc-function-code language-cpp">auto format_to(\n    fmt::format_context::iterator out) const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1019">include/region_map.h:1019</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">fmt::format_context::iterator<b> out</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="D67766596BB29A83" data-function-name="get_extent"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#D67766596BB29A83">\xb6</a><code class="hdoc-function-code language-cpp">range&lt;Dims&gt; get_extent() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1024">include/region_map.h:1024</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="D47562DF70846279" data-function-name="get_region_values"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#D47562DF70846279">\xb6</a><code class="hdoc-function-code language-cpp"><a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;typename types::entry&gt;\nget_region_values(const box&lt;Dims&gt;&amp; request) const</code></pre></h3><section><h4>Description</h4><p><p>Finds all entries intersecting with request, clamps them to the extent and merges them. TODO PERF: In most cases we are unlikely to store the returned values, and the copy is unnecessary. Return const reference instead?</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L949">include/region_map.h:949</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const box&lt;Dims&gt;&amp;<b> request</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="EB9FC8402FA1F66B" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#EB9FC8402FA1F66B">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/20DB13AA1EF819A8/">region_map_impl</a>&lt;ValueType, Dims&gt;&amp; operator=(\n    const <a href="/docs/api/records/20DB13AA1EF819A8/">region_map_impl</a>&lt;ValueType, Dims&gt;&amp;)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L844">include/region_map.h:844</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/20DB13AA1EF819A8/">region_map_impl</a>&lt;ValueType, Dims&gt;&amp;<b> </b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="C606197A3FD37208" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#C606197A3FD37208">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/20DB13AA1EF819A8/">region_map_impl</a>&lt;ValueType, Dims&gt;&amp; operator=(\n    <a href="/docs/api/records/20DB13AA1EF819A8/">region_map_impl</a>&lt;ValueType, Dims&gt;&amp;&amp;) noexcept</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L845">include/region_map.h:845</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/20DB13AA1EF819A8/">region_map_impl</a>&lt;ValueType, Dims&gt;&amp;&amp;<b> </b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="273E1A5514B1BA4B" data-function-name="region_map_impl"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#273E1A5514B1BA4B">\xb6</a><code class="hdoc-function-code language-cpp">region_map_impl(\n    const box&lt;Dims&gt;&amp; extent,\n    const ValueType&amp; default_value = ValueType{})</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L835">include/region_map.h:835</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const box&lt;Dims&gt;&amp;<b> extent</b></dt><dt class="is-family-code">const ValueType&amp;<b> default_value</b> = ValueType{}</dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="BFD71A273C1BD51A" data-function-name="region_map_impl"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#BFD71A273C1BD51A">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/20DB13AA1EF819A8/">region_map_impl</a>(\n    const region_map_impl&lt;ValueType, Dims&gt;&amp;)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L842">include/region_map.h:842</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/20DB13AA1EF819A8/">region_map_impl</a>&lt;ValueType, Dims&gt;&amp;<b> </b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="EE056DAD97D7F1E2" data-function-name="region_map_impl"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#EE056DAD97D7F1E2">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/20DB13AA1EF819A8/">region_map_impl</a>(\n    region_map_impl&lt;ValueType, Dims&gt;&amp;&amp;) noexcept</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L843">include/region_map.h:843</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/20DB13AA1EF819A8/">region_map_impl</a>&lt;ValueType, Dims&gt;&amp;&amp;<b> </b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="74F9CCDDE7171C31" data-function-name="update_box"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#74F9CCDDE7171C31">\xb6</a><code class="hdoc-function-code language-cpp">void update_box(const box&lt;Dims&gt;&amp; box,\n                const ValueType&amp; value)</code></pre></h3><section><h4>Description</h4><p><p>Updates the value for the provided box within the tree. This operation consists of roughly three steps: 1) Prepare the tree by creating a &quot;hole&quot; for the new box. This usually means splitting existing boxes within the tree. The required set of operations is propagated back up the tree. In some situations an in-place or localized update can be performed, in this case step 2 is skipped (see inner_node::update_box). 2) Perform all erase and insert operations calculated in step 1. 3) Attempt to merge the box as well as any other newly created boxes with their surrounding entries.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L860">include/region_map.h:860</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const box&lt;Dims&gt;&amp;<b> box</b></dt><dt class="is-family-code">const ValueType&amp;<b> value</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="DA84AAB1859E01FC" data-function-name="~region_map_impl"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#DA84AAB1859E01FC">\xb6</a><code class="hdoc-function-code language-cpp">~region_map_impl()</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L840">include/region_map.h:840</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="9C4DCDF3A6DE98AD" data-function-name="can_merge"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#9C4DCDF3A6DE98AD">\xb6</a><code class="hdoc-function-code language-cpp">bool can_merge(const box&lt;Dims&gt;&amp; box_a,\n               const box&lt;Dims&gt;&amp; box_b) const</code></pre></h3><section><h4>Description</h4><p><p>Calculates whether two boxes can be merged. In order to be mergeable, the two boxes have to touch in one dimension and match exactly in all remaining dimensions.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1103">include/region_map.h:1103</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const box&lt;Dims&gt;&amp;<b> box_a</b></dt><dt class="is-family-code">const box&lt;Dims&gt;&amp;<b> box_b</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="C5E6221C1EAF7A0F" data-function-name="erase"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#C5E6221C1EAF7A0F">\xb6</a><code class="hdoc-function-code language-cpp">void erase(const box&lt;Dims&gt;&amp; box)</code></pre></h3><section><h4>Description</h4><p><p>Erases a box from the tree. If the parent box becomes underfull it is dissolved and its children are reinserted.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1080">include/region_map.h:1080</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const box&lt;Dims&gt;&amp;<b> box</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="0B882F4E696F2288" data-function-name="for_each"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#0B882F4E696F2288">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;typename Callback&gt;\nvoid for_each(const Callback&amp; cb) const</code></pre></h3><section><h4>Description</h4><p><p>Invokes the provided callback for every entry (box/value pair) within the region map, for debugging / testing / instrumentation.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1205">include/region_map.h:1205</a></p></aside><section><h4>Template Parameters</h4><dl><dt class="is-family-code"><b> Callback</b></dt></dl></section><section><h4>Parameters</h4><dl><dt class="is-family-code">const Callback&amp;<b> cb</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="02EDECA74FA336D8" data-function-name="insert"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#02EDECA74FA336D8">\xb6</a><code class="hdoc-function-code language-cpp">void insert(const box&lt;Dims&gt;&amp; box,\n            const ValueType&amp; value)</code></pre></h3><section><h4>Description</h4><p><p>Inserts a new entry into the tree. Precondition: The insert location must be empty.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1050">include/region_map.h:1050</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const box&lt;Dims&gt;&amp;<b> box</b></dt><dt class="is-family-code">const ValueType&amp;<b> value</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="C6A9CDAD2FEA5B1C" data-function-name="insert_subtree"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#C6A9CDAD2FEA5B1C">\xb6</a><code class="hdoc-function-code language-cpp">void insert_subtree(\n    const box&lt;Dims&gt;&amp; box,\n    typename types::unique_inner_node_ptr&amp;&amp;\n        subtree)</code></pre></h3><section><h4>Description</h4><p><p>Inserts a subtree (either from a dissolved parent or after a split) into the tree.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1058">include/region_map.h:1058</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const box&lt;Dims&gt;&amp;<b> box</b></dt><dt class="is-family-code">typename types::unique_inner_node_ptr&amp;&amp;<b> subtree</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="B39FC1E2FF8A3A40" data-function-name="reroot"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#B39FC1E2FF8A3A40">\xb6</a><code class="hdoc-function-code language-cpp">void reroot(\n    typename types::insert_result new_sibling)</code></pre></h3><section><h4>Description</h4><p><p>Creates a new root node that is parent to the current root node and new_sibling, increasing the tree\'s height by 1.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1067">include/region_map.h:1067</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">typename types::insert_result<b> new_sibling</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="5A419E9136A516E2" data-function-name="try_merge"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#5A419E9136A516E2">\xb6</a><code class="hdoc-function-code language-cpp">void try_merge(\n    <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;typename types::entry&gt;&amp;&amp;\n        merge_candidates)</code></pre></h3><section><h4>Description</h4><p><p>Try to merge a list of candidate entries with their neighbors within the tree.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/region_map.h#L1124">include/region_map.h:1124</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;typename types::entry&gt;&amp;&amp;<b> merge_candidates</b></dt></dl></section></section><hr class="member-fun-separator"></hr></section></main>',o={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class region_map_impl"},c=void 0,n={id:"api/records/20DB13AA1EF819A8",title:"class region_map_impl",description:"",source:"@site/celerity-runtime/docs/api/records/20DB13AA1EF819A8.mdx",sourceDirName:"api/records",slug:"/api/records/20DB13AA1EF819A8",permalink:"/docs/api/records/20DB13AA1EF819A8",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class region_map_impl"},sidebar:"api"},l={},p=[];function d(e){const{Head:a}={...(0,i.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a,{children:[(0,s.jsx)("script",{src:"/js/highlight.min.js"}),(0,s.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]})}function m(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>c});var s=t(96540);const i={},r=s.createContext(i);function o(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);