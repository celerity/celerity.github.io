"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43553],{72062:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>n,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=r(74848),s=r(28453);const c='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="pageAF217E212CB99D08"><span>class task_manager</span></a></li></ul></nav>\n<main><h1>class task_manager</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class task_manager { /* full declaration omitted */ };</code></pre><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L55">include/task_manager.h:55</a></p><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_initial_epoch_task" data-member-name="initial_epoch_task"> static  const <a href="/docs/api/records/322167BB21F2212B/">task_id</a> <b>initial_epoch_task</b> = 0</dt><dt class="is-family-code hdoc-private" id="var_m_num_collective_nodes" data-member-name="m_num_collective_nodes">  const size_t <b>m_num_collective_nodes</b></dt><dt class="is-family-code hdoc-private" id="var_m_policy" data-member-name="m_policy">  <a href="/docs/api/records/07C3760551F44363/">policy_set</a> <b>m_policy</b></dt><dt class="is-family-code hdoc-private" id="var_m_task_buffer" data-member-name="m_task_buffer">  <a href="/docs/api/records/2A72265DCF1483F1/">task_ring_buffer</a> <b>m_task_buffer</b></dt><dt class="is-family-code hdoc-private" id="var_m_epoch_for_new_tasks" data-member-name="m_epoch_for_new_tasks">  <a href="/docs/api/records/322167BB21F2212B/">task_id</a> <b>m_epoch_for_new_tasks</b> = {initial_epoch_task}</dt><dt class="is-family-code hdoc-private" id="var_m_buffers" data-member-name="m_buffers">  <a href="https://en.cppreference.com/w/cpp/container/unordered_map">std::unordered_map</a>&lt;buffer_id, buffer_state&gt; <b>m_buffers</b></dt><dt class="is-family-code hdoc-private" id="var_m_last_collective_tasks" data-member-name="m_last_collective_tasks">  <a href="https://en.cppreference.com/w/cpp/container/unordered_map">std::unordered_map</a>&lt;collective_group_id, task_id&gt; <b>m_last_collective_tasks</b></dt><dt class="is-family-code hdoc-private" id="var_m_host_objects" data-member-name="m_host_objects">  <a href="https://en.cppreference.com/w/cpp/container/unordered_map">std::unordered_map</a>&lt;host_object_id,\n                   host_object_state&gt; <b>m_host_objects</b></dt><dt class="is-family-code hdoc-private" id="var_m_task_callbacks" data-member-name="m_task_callbacks">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;task_callback&gt; <b>m_task_callbacks</b></dt><dt class="is-family-code hdoc-private" id="var_m_task_horizon_step_size" data-member-name="m_task_horizon_step_size">  int <b>m_task_horizon_step_size</b> = 4</dt><dt class="is-family-code hdoc-private" id="var_m_task_horizon_max_parallelism" data-member-name="m_task_horizon_max_parallelism">  int <b>m_task_horizon_max_parallelism</b> = 64</dt><dt class="is-family-code hdoc-private" id="var_m_max_pseudo_critical_path_length" data-member-name="m_max_pseudo_critical_path_length">  int <b>m_max_pseudo_critical_path_length</b> = 0</dt><dt class="is-family-code hdoc-private" id="var_m_current_horizon_critical_path_length" data-member-name="m_current_horizon_critical_path_length">  int <b>m_current_horizon_critical_path_length</b> = 0</dt><dt class="is-family-code hdoc-private" id="var_m_current_horizon" data-member-name="m_current_horizon">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;task_id&gt; <b>m_current_horizon</b></dt><dt class="is-family-code hdoc-private" id="var_m_latest_horizon_reached" data-member-name="m_latest_horizon_reached">  <a href="https://en.cppreference.com/w/cpp/utility/optional">std::optional</a>&lt;task_id&gt; <b>m_latest_horizon_reached</b></dt><dt class="is-family-code hdoc-private" id="var_m_latest_epoch_reached" data-member-name="m_latest_epoch_reached">  <a href="/docs/api/records/047DF54380FBC203/">epoch_monitor</a> <b>m_latest_epoch_reached</b> = {initial_epoch_task}</dt><dt class="is-family-code hdoc-private" id="var_m_execution_front" data-member-name="m_execution_front">  <a href="https://en.cppreference.com/w/cpp/container/unordered_set">std::unordered_set</a>&lt;task*&gt; <b>m_execution_front</b></dt><dt class="is-family-code hdoc-private" id="var_m_task_recorder" data-member-name="m_task_recorder">  <a href="/docs/api/records/2F8201EC461C5812/">detail::task_recorder</a>* <b>m_task_recorder</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#B02CD30CEA887B02"><b>await_epoch</b></a>(task_id epoch) &rarr; void</li><li class="is-family-code"><a href="#A779C30626A5410B"><b>find_task</b></a>(task_id tid) const &rarr; const task *</li><li class="is-family-code"><a href="#686EECA412DBE501"><b>generate_epoch_task</b></a>(epoch_action action) &rarr; task_id</li><li class="is-family-code"><a href="#AB99AE2BA244D439"><b>generate_fence_task</b></a>(buffer_access_map access_map, side_effect_map side_effects, std::unique_ptr&lt;fence_promise&gt; fence_promise) &rarr; task_id</li><li class="is-family-code"><a href="#C062818FCF23852E"><b>get_current_task_count</b></a>() const &rarr; size_t</li><li class="is-family-code"><a href="#7382458D942A88BF"><b>get_task</b></a>(task_id tid) const &rarr; const task *</li><li class="is-family-code"><a href="#C4453DFC0B369E89"><b>get_total_task_count</b></a>() const &rarr; size_t</li><li class="is-family-code"><a href="#CA72D503DFDC081E"><b>has_task</b></a>(task_id tid) const &rarr; bool</li><li class="is-family-code"><a href="#71BFD2E30DE8288E"><b>notify_buffer_created</b></a>(buffer_id bid, const range&lt;3&gt; &amp; range, bool host_initialized) &rarr; void</li><li class="is-family-code"><a href="#18D697C0638E832E"><b>notify_buffer_debug_name_changed</b></a>(buffer_id bid, const std::string &amp; name) &rarr; void</li><li class="is-family-code"><a href="#5DA08CE488628A37"><b>notify_buffer_destroyed</b></a>(buffer_id bid) &rarr; void</li><li class="is-family-code"><a href="#7B274B6B0AC812C3"><b>notify_epoch_reached</b></a>(task_id epoch_tid) &rarr; void</li><li class="is-family-code"><a href="#E1D6738BFB0922DB"><b>notify_horizon_reached</b></a>(task_id horizon_tid) &rarr; void</li><li class="is-family-code"><a href="#AD8CA3EA4A883579"><b>notify_host_object_created</b></a>(host_object_id hoid) &rarr; void</li><li class="is-family-code"><a href="#24FE4282EC143C7F"><b>notify_host_object_destroyed</b></a>(host_object_id hoid) &rarr; void</li><li class="is-family-code"><a href="#FADDE689AD20498E"><b>register_task_callback</b></a>(task_callback cb) &rarr; void</li><li class="is-family-code"><a href="#BEF43E9FCA94E611"><b>set_horizon_max_parallelism</b></a>(int para) &rarr; void</li><li class="is-family-code"><a href="#FC390FD8DE0C98CA"><b>set_horizon_step</b></a>(int step) &rarr; void</li><li class="is-family-code"><span class="hdoc-overview-template">template &lt;typename CGF&gt;</span><br><a href="#26C76501132BC265"><b>submit_command_group</b></a>(CGF cgf) &rarr; task_id</li><li class="is-family-code"><a href="#1F1B868790EEDEDC"><b>task_manager</b></a>(size_t num_collective_nodes, detail::task_recorder * recorder, const policy_set &amp; policy = default_policy_set())</li><li class="is-family-code"><a href="#D7D9C41047E86121"><b>~task_manager</b></a>() &rarr; virtual</li><li class="is-family-code hdoc-private"><a href="#DD7FB82F63E4597F"><b>add_dependency</b></a>(task &amp; depender, task &amp; dependee, dependency_kind kind, dependency_origin origin) &rarr; void</li><li class="is-family-code hdoc-private"><a href="#E3E0261913B7C8BA"><b>await_free_task_slot_callback</b></a>() &rarr; task_ring_buffer::wait_callback</li><li class="is-family-code hdoc-private"><a href="#D2FDFE1BE96BD9DB"><b>compute_dependencies</b></a>(task &amp; tsk) &rarr; void</li><li class="is-family-code hdoc-private"><a href="#D9987DB4F81989BE"><b>default_policy_set</b></a>() &rarr; static constexpr policy_set</li><li class="is-family-code hdoc-private"><a href="#E4BDC5B455EEEFEE"><b>generate_horizon_task</b></a>() &rarr; task_id</li><li class="is-family-code hdoc-private"><a href="#7823F3E63252E11F"><b>get_execution_front</b></a>() &rarr; const std::unordered_set&lt;task *&gt; &amp;</li><li class="is-family-code hdoc-private"><a href="#395BB9383240F094"><b>get_first_in_flight_epoch</b></a>() const &rarr; task_id</li><li class="is-family-code hdoc-private"><a href="#3B50B40CE4100626"><b>get_max_pseudo_critical_path_length</b></a>() const &rarr; int</li><li class="is-family-code hdoc-private"><a href="#99B9A3BBCE7C865C"><b>invoke_callbacks</b></a>(const task * tsk) const &rarr; void</li><li class="is-family-code hdoc-private"><a href="#BAE99DA2F88BF9E3"><b>need_new_horizon</b></a>() const &rarr; bool</li><li class="is-family-code hdoc-private"><a href="#2F96CA851BFBD18B"><b>print_buffer_debug_label</b></a>(buffer_id bid) const &rarr; std::string</li><li class="is-family-code hdoc-private"><a href="#9482D10F6342E9F2"><b>reduce_execution_front</b></a>(task_ring_buffer::reservation &amp;&amp; reserve, std::unique_ptr&lt;task&gt; new_front) &rarr; task &amp;</li><li class="is-family-code hdoc-private"><a href="#7C1FE7BC3E388ECB"><b>register_task_internal</b></a>(task_ring_buffer::reservation &amp;&amp; reserve, std::unique_ptr&lt;task&gt; task) &rarr; task &amp;</li><li class="is-family-code hdoc-private"><a href="#061EDB1BE0DC86F5"><b>set_epoch_for_new_tasks</b></a>(task_id epoch) &rarr; void</li></ul><h2>Member Functions</h2><h3 id="B02CD30CEA887B02" data-function-name="await_epoch"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#B02CD30CEA887B02">\xb6</a><code class="hdoc-function-code language-cpp">void await_epoch(<a href="/docs/api/records/322167BB21F2212B/">task_id</a> epoch)</code></pre></h3><h4>Description</h4><p><p>Blocks until an epoch task has executed on this node (or all nodes, if the epoch_for_new_tasks was created with <code>epoch_action::barrier</code>).</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L142">include/task_manager.h:142</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/322167BB21F2212B/">task_id</a><b> epoch</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="A779C30626A5410B" data-function-name="find_task"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#A779C30626A5410B">\xb6</a><code class="hdoc-function-code language-cpp">const <a href="/docs/api/records/A42A04C270A2D231/">task</a>* find_task(<a href="/docs/api/records/322167BB21F2212B/">task_id</a> tid) const</code></pre></h3><h4>Description</h4><p><p>Returns the specified task if it still exists, nullptr otherwise.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L124">include/task_manager.h:124</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/322167BB21F2212B/">task_id</a><b> tid</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="686EECA412DBE501" data-function-name="generate_epoch_task"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#686EECA412DBE501">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/322167BB21F2212B/">task_id</a> generate_epoch_task(<a href="/docs/api/enums/689AE42F7297671D/">epoch_action</a> action)</code></pre></h3><h4>Description</h4><p><p>Inserts an epoch task that depends on the entire execution front and that immediately becomes the current epoch_for_new_tasks and the last writer for all buffers.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L98">include/task_manager.h:98</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/enums/689AE42F7297671D/">epoch_action</a><b> action</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="AB99AE2BA244D439" data-function-name="generate_fence_task"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#AB99AE2BA244D439">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/322167BB21F2212B/">task_id</a> generate_fence_task(\n    <a href="/docs/api/records/EEAE4CFC41B6C788/">buffer_access_map</a> access_map,\n    <a href="/docs/api/records/CDD53C35CF67CCAE/">side_effect_map</a> side_effects,\n    <a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;fence_promise&gt; fence_promise)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L100">include/task_manager.h:100</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/EEAE4CFC41B6C788/">buffer_access_map</a><b> access_map</b></dt><dt class="is-family-code"><a href="/docs/api/records/CDD53C35CF67CCAE/">side_effect_map</a><b> side_effects</b></dt><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;fence_promise&gt;<b> fence_promise</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="C062818FCF23852E" data-function-name="get_current_task_count"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#C062818FCF23852E">\xb6</a><code class="hdoc-function-code language-cpp">size_t get_current_task_count() const</code></pre></h3><h4>Description</h4><p><p>Returns the number of tasks currently being managed by the task_manager.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L179">include/task_manager.h:179</a></p><hr class="member-fun-separator"></hr><h3 id="7382458D942A88BF" data-function-name="get_task"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#7382458D942A88BF">\xb6</a><code class="hdoc-function-code language-cpp">const <a href="/docs/api/records/A42A04C270A2D231/">task</a>* get_task(<a href="/docs/api/records/322167BB21F2212B/">task_id</a> tid) const</code></pre></h3><h4>Description</h4><p><p>Asserts that the specified task exists and returns a non-null pointer to the task object.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L137">include/task_manager.h:137</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/322167BB21F2212B/">task_id</a><b> tid</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="C4453DFC0B369E89" data-function-name="get_total_task_count"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#C4453DFC0B369E89">\xb6</a><code class="hdoc-function-code language-cpp">size_t get_total_task_count() const</code></pre></h3><h4>Description</h4><p><p>Returns the number of tasks created during the lifetime of the task_manager, including tasks that have already been deleted.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L174">include/task_manager.h:174</a></p><hr class="member-fun-separator"></hr><h3 id="CA72D503DFDC081E" data-function-name="has_task"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#CA72D503DFDC081E">\xb6</a><code class="hdoc-function-code language-cpp">bool has_task(<a href="/docs/api/records/322167BB21F2212B/">task_id</a> tid) const</code></pre></h3><h4>Description</h4><p><p>Checks whether a task has already been registered with the queue.</p>\n</p><p><p>This is useful for scenarios where the master node sends out commands concerning tasks that have not yet been registered through the local execution of the user program.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L132">include/task_manager.h:132</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/322167BB21F2212B/">task_id</a><b> tid</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="71BFD2E30DE8288E" data-function-name="notify_buffer_created"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#71BFD2E30DE8288E">\xb6</a><code class="hdoc-function-code language-cpp">void notify_buffer_created(<a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a> bid,\n                           const <a href="/docs/api/records/B13622E7024342AF/">range</a>&lt;3&gt;&amp; range,\n                           bool host_initialized)</code></pre></h3><h4>Description</h4><p><p>Adds a new buffer for dependency tracking</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L111">include/task_manager.h:111</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a><b> bid</b></dt><dt class="is-family-code">const <a href="/docs/api/records/B13622E7024342AF/">range</a>&lt;3&gt;&amp;<b> range</b></dt><dt class="is-family-code">bool<b> host_initialized</b></dt><dd>Whether this buffer has been initialized using a host pointer (i.e., it contains useful data before any write-task)</dd></dl><hr class="member-fun-separator"></hr><h3 id="18D697C0638E832E" data-function-name="notify_buffer_debug_name_changed"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#18D697C0638E832E">\xb6</a><code class="hdoc-function-code language-cpp">void notify_buffer_debug_name_changed(\n    <a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a> bid,\n    const <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a>&amp; name)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L113">include/task_manager.h:113</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a><b> bid</b></dt><dt class="is-family-code">const <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a>&amp;<b> name</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="5DA08CE488628A37" data-function-name="notify_buffer_destroyed"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#5DA08CE488628A37">\xb6</a><code class="hdoc-function-code language-cpp">void notify_buffer_destroyed(<a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a> bid)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L115">include/task_manager.h:115</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a><b> bid</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="7B274B6B0AC812C3" data-function-name="notify_epoch_reached"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#7B274B6B0AC812C3">\xb6</a><code class="hdoc-function-code language-cpp">void notify_epoch_reached(<a href="/docs/api/records/322167BB21F2212B/">task_id</a> epoch_tid)</code></pre></h3><h4>Description</h4><p><p>Notifies the task manager that the given epoch has been executed on this node.</p>\n</p><p><p>notify_horizon_reached and notify_epoch_reached must only ever be called from a single thread, but that thread does not have to be the main thread.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L168">include/task_manager.h:168</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/322167BB21F2212B/">task_id</a><b> epoch_tid</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="E1D6738BFB0922DB" data-function-name="notify_horizon_reached"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#E1D6738BFB0922DB">\xb6</a><code class="hdoc-function-code language-cpp">void notify_horizon_reached(<a href="/docs/api/records/322167BB21F2212B/">task_id</a> horizon_tid)</code></pre></h3><h4>Description</h4><p><p>Notifies the task manager that the given horizon has been executed (used for task deletion).</p>\n</p><p><p>notify_horizon_reached and notify_epoch_reached must only ever be called from a single thread, but that thread does not have to be the main thread.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L160">include/task_manager.h:160</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/322167BB21F2212B/">task_id</a><b> horizon_tid</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="AD8CA3EA4A883579" data-function-name="notify_host_object_created"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#AD8CA3EA4A883579">\xb6</a><code class="hdoc-function-code language-cpp">void notify_host_object_created(\n    <a href="/docs/api/records/A0E5B68259E332A7/">host_object_id</a> hoid)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L117">include/task_manager.h:117</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/A0E5B68259E332A7/">host_object_id</a><b> hoid</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="24FE4282EC143C7F" data-function-name="notify_host_object_destroyed"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#24FE4282EC143C7F">\xb6</a><code class="hdoc-function-code language-cpp">void notify_host_object_destroyed(\n    <a href="/docs/api/records/A0E5B68259E332A7/">host_object_id</a> hoid)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L119">include/task_manager.h:119</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/A0E5B68259E332A7/">host_object_id</a><b> hoid</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="FADDE689AD20498E" data-function-name="register_task_callback"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#FADDE689AD20498E">\xb6</a><code class="hdoc-function-code language-cpp">void register_task_callback(task_callback cb)</code></pre></h3><h4>Description</h4><p><p>Registers a new callback that will be called whenever a new task is created.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L105">include/task_manager.h:105</a></p><h4>Parameters</h4><dl><dt class="is-family-code">task_callback<b> cb</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="BEF43E9FCA94E611" data-function-name="set_horizon_max_parallelism"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#BEF43E9FCA94E611">\xb6</a><code class="hdoc-function-code language-cpp">void set_horizon_max_parallelism(int para)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L149">include/task_manager.h:149</a></p><h4>Parameters</h4><dl><dt class="is-family-code">int<b> para</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="FC390FD8DE0C98CA" data-function-name="set_horizon_step"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#FC390FD8DE0C98CA">\xb6</a><code class="hdoc-function-code language-cpp">void set_horizon_step(int step)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L144">include/task_manager.h:144</a></p><h4>Parameters</h4><dl><dt class="is-family-code">int<b> step</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="26C76501132BC265" data-function-name="submit_command_group"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#26C76501132BC265">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;typename CGF&gt;\n<a href="/docs/api/records/322167BB21F2212B/">task_id</a> submit_command_group(CGF cgf)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L70">include/task_manager.h:70</a></p><h4>Template Parameters</h4><dl><dt class="is-family-code"><b> CGF</b></dt></dl><h4>Parameters</h4><dl><dt class="is-family-code">CGF<b> cgf</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="1F1B868790EEDEDC" data-function-name="task_manager"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#1F1B868790EEDEDC">\xb6</a><code class="hdoc-function-code language-cpp">task_manager(size_t num_collective_nodes,\n             <a href="/docs/api/records/2F8201EC461C5812/">detail::task_recorder</a>* recorder,\n             const <a href="/docs/api/records/07C3760551F44363/">policy_set</a>&amp; policy =\n                 default_policy_set())</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L65">include/task_manager.h:65</a></p><h4>Parameters</h4><dl><dt class="is-family-code">size_t<b> num_collective_nodes</b></dt><dt class="is-family-code"><a href="/docs/api/records/2F8201EC461C5812/">detail::task_recorder</a>*<b> recorder</b></dt><dt class="is-family-code">const <a href="/docs/api/records/07C3760551F44363/">policy_set</a>&amp;<b> policy</b> = default_policy_set()</dt></dl><hr class="member-fun-separator"></hr><h3 id="D7D9C41047E86121" data-function-name="~task_manager"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#D7D9C41047E86121">\xb6</a><code class="hdoc-function-code language-cpp">virtual ~task_manager()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L67">include/task_manager.h:67</a></p><hr class="member-fun-separator"></hr><h3 id="DD7FB82F63E4597F" data-function-name="add_dependency"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#DD7FB82F63E4597F">\xb6</a><code class="hdoc-function-code language-cpp">void add_dependency(<a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp; depender,\n                    <a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp; dependee,\n                    <a href="/docs/api/enums/C6812AF27D88E0F8/">dependency_kind</a> kind,\n                    <a href="/docs/api/enums/7817B39C5DFD1B93/">dependency_origin</a> origin)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L252">include/task_manager.h:252</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp;<b> depender</b></dt><dt class="is-family-code"><a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp;<b> dependee</b></dt><dt class="is-family-code"><a href="/docs/api/enums/C6812AF27D88E0F8/">dependency_kind</a><b> kind</b></dt><dt class="is-family-code"><a href="/docs/api/enums/7817B39C5DFD1B93/">dependency_origin</a><b> origin</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="E3E0261913B7C8BA" data-function-name="await_free_task_slot_callback"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#E3E0261913B7C8BA">\xb6</a><code class="hdoc-function-code language-cpp">task_ring_buffer::wait_callback\nawait_free_task_slot_callback()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L273">include/task_manager.h:273</a></p><hr class="member-fun-separator"></hr><h3 id="D2FDFE1BE96BD9DB" data-function-name="compute_dependencies"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#D2FDFE1BE96BD9DB">\xb6</a><code class="hdoc-function-code language-cpp">void compute_dependencies(<a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp; tsk)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L266">include/task_manager.h:266</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp;<b> tsk</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="D9987DB4F81989BE" data-function-name="default_policy_set"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#D9987DB4F81989BE">\xb6</a><code class="hdoc-function-code language-cpp">static constexpr <a href="/docs/api/records/07C3760551F44363/">policy_set</a> default_policy_set()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L184">include/task_manager.h:184</a></p><hr class="member-fun-separator"></hr><h3 id="E4BDC5B455EEEFEE" data-function-name="generate_horizon_task"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#E4BDC5B455EEEFEE">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/322167BB21F2212B/">task_id</a> generate_horizon_task()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L264">include/task_manager.h:264</a></p><hr class="member-fun-separator"></hr><h3 id="7823F3E63252E11F" data-function-name="get_execution_front"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#7823F3E63252E11F">\xb6</a><code class="hdoc-function-code language-cpp">const <a href="https://en.cppreference.com/w/cpp/container/unordered_set">std::unordered_set</a>&lt;task*&gt;&amp;\nget_execution_front()</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L262">include/task_manager.h:262</a></p><hr class="member-fun-separator"></hr><h3 id="395BB9383240F094" data-function-name="get_first_in_flight_epoch"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#395BB9383240F094">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/322167BB21F2212B/">task_id</a> get_first_in_flight_epoch() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L270">include/task_manager.h:270</a></p><hr class="member-fun-separator"></hr><h3 id="3B50B40CE4100626" data-function-name="get_max_pseudo_critical_path_length"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#3B50B40CE4100626">\xb6</a><code class="hdoc-function-code language-cpp">int get_max_pseudo_critical_path_length() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L256">include/task_manager.h:256</a></p><hr class="member-fun-separator"></hr><h3 id="99B9A3BBCE7C865C" data-function-name="invoke_callbacks"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#99B9A3BBCE7C865C">\xb6</a><code class="hdoc-function-code language-cpp">void invoke_callbacks(const <a href="/docs/api/records/A42A04C270A2D231/">task</a>* tsk) const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L250">include/task_manager.h:250</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A42A04C270A2D231/">task</a>*<b> tsk</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="BAE99DA2F88BF9E3" data-function-name="need_new_horizon"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#BAE99DA2F88BF9E3">\xb6</a><code class="hdoc-function-code language-cpp">bool need_new_horizon() const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L254">include/task_manager.h:254</a></p><hr class="member-fun-separator"></hr><h3 id="2F96CA851BFBD18B" data-function-name="print_buffer_debug_label"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#2F96CA851BFBD18B">\xb6</a><code class="hdoc-function-code language-cpp"><a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a> print_buffer_debug_label(\n    <a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a> bid) const</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L275">include/task_manager.h:275</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a><b> bid</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="9482D10F6342E9F2" data-function-name="reduce_execution_front"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#9482D10F6342E9F2">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp; reduce_execution_front(\n    <a href="/docs/api/records/65C8A4D249162EF9/">task_ring_buffer::reservation</a>&amp;&amp; reserve,\n    <a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;task&gt; new_front)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L258">include/task_manager.h:258</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/65C8A4D249162EF9/">task_ring_buffer::reservation</a>&amp;&amp;<b> reserve</b></dt><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;task&gt;<b> new_front</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="7C1FE7BC3E388ECB" data-function-name="register_task_internal"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#7C1FE7BC3E388ECB">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp; register_task_internal(\n    <a href="/docs/api/records/65C8A4D249162EF9/">task_ring_buffer::reservation</a>&amp;&amp; reserve,\n    <a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;task&gt; task)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L248">include/task_manager.h:248</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/65C8A4D249162EF9/">task_ring_buffer::reservation</a>&amp;&amp;<b> reserve</b></dt><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;task&gt;<b> task</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="061EDB1BE0DC86F5" data-function-name="set_epoch_for_new_tasks"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#061EDB1BE0DC86F5">\xb6</a><code class="hdoc-function-code language-cpp">void set_epoch_for_new_tasks(<a href="/docs/api/records/322167BB21F2212B/">task_id</a> epoch)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/task_manager.h#L260">include/task_manager.h:260</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/322167BB21F2212B/">task_id</a><b> epoch</b></dt></dl><hr class="member-fun-separator"></hr></main>',i={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class task_manager"},o=void 0,d={id:"api/records/AF217E212CB99D08",title:"class task_manager",description:"",source:"@site/celerity-runtime/docs/api/records/AF217E212CB99D08.mdx",sourceDirName:"api/records",slug:"/api/records/AF217E212CB99D08",permalink:"/docs/api/records/AF217E212CB99D08",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class task_manager"},sidebar:"api"},n={},l=[];function h(e){const{Head:a}={...(0,s.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:c}})]})}function p(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>i,x:()=>o});var t=r(96540);const s={},c=t.createContext(s);function i(e){const a=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:a},e.children)}}}]);