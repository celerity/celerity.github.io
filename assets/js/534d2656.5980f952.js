"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99542],{4662:(e,a,c)=>{c.r(a),c.d(a,{assets:()=>n,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>m});var r=c(74848),s=c(28453);const o='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page98A0694E0D4693D2"><span>class command_graph_generator</span></a></li></ul></nav>\n<main><h1>class command_graph_generator</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class command_graph_generator { /* full declaration omitted */ };</code></pre><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L59">include/command_graph_generator.h:59</a></p></aside><section><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_num_nodes" data-member-name="m_num_nodes">  size_t <b>m_num_nodes</b></dt><dt class="is-family-code hdoc-private" id="var_m_local_nid" data-member-name="m_local_nid">  <a href="/docs/api/records/DBE63D9D086598BC/">node_id</a> <b>m_local_nid</b></dt><dt class="is-family-code hdoc-private" id="var_m_policy" data-member-name="m_policy">  <a href="/docs/api/records/A63340B559E8DDD3/">policy_set</a> <b>m_policy</b></dt><dt class="is-family-code hdoc-private" id="var_m_cdag" data-member-name="m_cdag">  <a href="/docs/api/records/36453EA66E0DF655/">command_graph</a>&amp; <b>m_cdag</b></dt><dt class="is-family-code hdoc-private" id="var_m_task_mngr" data-member-name="m_task_mngr">  const <a href="/docs/api/records/AF217E212CB99D08/">task_manager</a>&amp; <b>m_task_mngr</b></dt><dt class="is-family-code hdoc-private" id="var_m_buffers" data-member-name="m_buffers">  <a href="https://en.cppreference.com/w/cpp/container/unordered_map">std::unordered_map</a>&lt;buffer_id, buffer_state&gt; <b>m_buffers</b></dt><dt class="is-family-code hdoc-private" id="var_m_host_objects" data-member-name="m_host_objects">  <a href="https://en.cppreference.com/w/cpp/container/unordered_map">std::unordered_map</a>&lt;host_object_id,\n                   host_object_state&gt; <b>m_host_objects</b></dt><dt class="is-family-code hdoc-private" id="var_m_epoch_for_new_commands" data-member-name="m_epoch_for_new_commands">  <a href="/docs/api/records/2D98D7CFB741116F/">command_id</a> <b>m_epoch_for_new_commands</b> = 0</dt><dt class="is-family-code hdoc-private" id="var_m_epoch_last_pruned_before" data-member-name="m_epoch_last_pruned_before">  <a href="/docs/api/records/2D98D7CFB741116F/">command_id</a> <b>m_epoch_last_pruned_before</b> = 0</dt><dt class="is-family-code hdoc-private" id="var_m_current_horizon" data-member-name="m_current_horizon">  <a href="/docs/api/records/2D98D7CFB741116F/">command_id</a> <b>m_current_horizon</b> = no_command</dt><dt class="is-family-code hdoc-private" id="var_m_current_cmd_batch" data-member-name="m_current_cmd_batch">  command_set <b>m_current_cmd_batch</b></dt><dt class="is-family-code hdoc-private" id="var_m_completed_reductions" data-member-name="m_completed_reductions">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;reduction_id&gt; <b>m_completed_reductions</b></dt><dt class="is-family-code hdoc-private" id="var_m_command_buffer_reads" data-member-name="m_command_buffer_reads">  <a href="https://en.cppreference.com/w/cpp/container/unordered_map">std::unordered_map</a>&lt;command_id, buffer_read_map&gt; <b>m_command_buffer_reads</b></dt><dt class="is-family-code hdoc-private" id="var_m_last_collective_commands" data-member-name="m_last_collective_commands">  <a href="https://en.cppreference.com/w/cpp/container/unordered_map">std::unordered_map</a>&lt;collective_group_id,\n                   command_id&gt; <b>m_last_collective_commands</b></dt><dt class="is-family-code hdoc-private" id="var_m_recorder" data-member-name="m_recorder">  <a href="/docs/api/records/3B0C261F008C7843/">detail::command_recorder</a>* <b>m_recorder</b> = nullptr</dt><dt class="is-family-code hdoc-private" id="var_no_command" data-member-name="no_command"> static  const <a href="/docs/api/records/9BDCE80D30D46C5B/">write_command_state</a> <b>no_command</b> = celerity::detail::write_command_state(static_cast&lt;celerity::detail::command_id&gt;(-1))</dt></dl></section><section><h2>Member Aliases</h2><ul><li class="is-family-code hdoc-private">using buffer_read_map =\n    std::unordered_map&lt;buffer_id, region&lt;3&gt;&gt;;</li></ul></section><section><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#C45B2C9E3C7D4DEC"><b>build_task</b></a>(const task &amp; tsk) &rarr; command_set</li><li class="is-family-code"><a href="#0CB6999E9B96B9E6"><b>command_graph_generator</b></a>(size_t num_nodes, node_id local_nid, command_graph &amp; cdag, const task_manager &amp; tm, detail::command_recorder * recorder, const policy_set &amp; policy = default_policy_set())</li><li class="is-family-code"><a href="#719824F29E6186CF"><b>get_command_graph</b></a>() &rarr; command_graph &amp;</li><li class="is-family-code"><a href="#0A843AB552E8511B"><b>notify_buffer_created</b></a>(buffer_id bid, const range&lt;3&gt; &amp; range, bool host_initialized) &rarr; void</li><li class="is-family-code"><a href="#413FD58650069756"><b>notify_buffer_debug_name_changed</b></a>(buffer_id bid, const std::string &amp; debug_name) &rarr; void</li><li class="is-family-code"><a href="#41F7FC3E1BF9DB16"><b>notify_buffer_destroyed</b></a>(buffer_id bid) &rarr; void</li><li class="is-family-code"><a href="#4B567ECE26AB22F2"><b>notify_host_object_created</b></a>(host_object_id hoid) &rarr; void</li><li class="is-family-code"><a href="#EC5266B8FE8EEC1C"><b>notify_host_object_destroyed</b></a>(host_object_id hoid) &rarr; void</li><li class="is-family-code hdoc-private"><span class="hdoc-overview-template">template &lt;typename T, typename... Args&gt;</span><br><a href="#3420D4782DB63501"><b>create_command</b></a>(Args &amp;&amp;... args) &rarr; T *</li><li class="is-family-code hdoc-private"><a href="#BA8026AEDCEDBAE6"><b>default_policy_set</b></a>() &rarr; static constexpr policy_set</li><li class="is-family-code hdoc-private"><a href="#2C14E86A95445906"><b>generate_anti_dependencies</b></a>(task_id tid, buffer_id bid, const region_map&lt;write_command_state&gt; &amp; last_writers_map, const region&lt;3&gt; &amp; write_req, abstract_command * write_cmd) &rarr; void</li><li class="is-family-code hdoc-private"><a href="#6F82DD42E059610A"><b>generate_distributed_commands</b></a>(const task &amp; tsk) &rarr; void</li><li class="is-family-code hdoc-private"><a href="#F55B8AC56B9BDCF1"><b>generate_epoch_command</b></a>(const task &amp; tsk) &rarr; void</li><li class="is-family-code hdoc-private"><a href="#41967982C00EBBCA"><b>generate_epoch_dependencies</b></a>(abstract_command * cmd) &rarr; void</li><li class="is-family-code hdoc-private"><a href="#CA6DC186BF826ECE"><b>generate_horizon_command</b></a>(const task &amp; tsk) &rarr; void</li><li class="is-family-code hdoc-private"><a href="#07C338380AB70397"><b>print_buffer_debug_label</b></a>(buffer_id bid) const &rarr; std::string</li><li class="is-family-code hdoc-private"><a href="#77AFF5B1EA6F8808"><b>process_task_side_effect_requirements</b></a>(const task &amp; tsk) &rarr; void</li><li class="is-family-code hdoc-private"><a href="#E306D81881A81E4E"><b>prune_commands_before</b></a>(command_id epoch) &rarr; void</li><li class="is-family-code hdoc-private"><a href="#E81588531CEA2148"><b>reduce_execution_front_to</b></a>(abstract_command * new_front) &rarr; void</li><li class="is-family-code hdoc-private"><a href="#3CD617364B02487B"><b>report_overlapping_writes</b></a>(const task &amp; tsk, const box_vector&lt;3&gt; &amp; local_chunks) const &rarr; void</li><li class="is-family-code hdoc-private"><a href="#2FF0F74C18B8B7B9"><b>set_epoch_for_new_commands</b></a>(const abstract_command * epoch_or_horizon) &rarr; void</li></ul></section><section><h2>Member Functions</h2><section><h3 id="C45B2C9E3C7D4DEC" data-function-name="build_task"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#C45B2C9E3C7D4DEC">\xb6</a><code class="hdoc-function-code language-cpp">command_set build_<a href="/docs/api/records/A42A04C270A2D231/">task</a>(const task&amp; tsk)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L104">include/command_graph_generator.h:104</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp;<b> tsk</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="0CB6999E9B96B9E6" data-function-name="command_graph_generator"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#0CB6999E9B96B9E6">\xb6</a><code class="hdoc-function-code language-cpp">command_graph_generator(\n    size_t num_nodes,\n    <a href="/docs/api/records/DBE63D9D086598BC/">node_id</a> local_nid,\n    <a href="/docs/api/records/36453EA66E0DF655/">command_graph</a>&amp; cdag,\n    const <a href="/docs/api/records/AF217E212CB99D08/">task_manager</a>&amp; tm,\n    <a href="/docs/api/records/3B0C261F008C7843/">detail::command_recorder</a>* recorder,\n    const <a href="/docs/api/records/A63340B559E8DDD3/">policy_set</a>&amp; policy =\n        default_policy_set())</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L91">include/command_graph_generator.h:91</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">size_t<b> num_nodes</b></dt><dt class="is-family-code"><a href="/docs/api/records/DBE63D9D086598BC/">node_id</a><b> local_nid</b></dt><dt class="is-family-code"><a href="/docs/api/records/36453EA66E0DF655/">command_graph</a>&amp;<b> cdag</b></dt><dt class="is-family-code">const <a href="/docs/api/records/AF217E212CB99D08/">task_manager</a>&amp;<b> tm</b></dt><dt class="is-family-code"><a href="/docs/api/records/3B0C261F008C7843/">detail::command_recorder</a>*<b> recorder</b></dt><dt class="is-family-code">const <a href="/docs/api/records/A63340B559E8DDD3/">policy_set</a>&amp;<b> policy</b> = default_policy_set()</dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="719824F29E6186CF" data-function-name="get_command_graph"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#719824F29E6186CF">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/36453EA66E0DF655/">command_graph</a>&amp; get_command_graph()</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L106">include/command_graph_generator.h:106</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="0A843AB552E8511B" data-function-name="notify_buffer_created"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#0A843AB552E8511B">\xb6</a><code class="hdoc-function-code language-cpp">void notify_buffer_created(<a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a> bid,\n                           const <a href="/docs/api/records/B13622E7024342AF/">range</a>&lt;3&gt;&amp; range,\n                           bool host_initialized)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L94">include/command_graph_generator.h:94</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a><b> bid</b></dt><dt class="is-family-code">const <a href="/docs/api/records/B13622E7024342AF/">range</a>&lt;3&gt;&amp;<b> range</b></dt><dt class="is-family-code">bool<b> host_initialized</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="413FD58650069756" data-function-name="notify_buffer_debug_name_changed"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#413FD58650069756">\xb6</a><code class="hdoc-function-code language-cpp">void notify_buffer_debug_name_changed(\n    <a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a> bid,\n    const <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a>&amp; debug_name)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L96">include/command_graph_generator.h:96</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a><b> bid</b></dt><dt class="is-family-code">const <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a>&amp;<b> debug_name</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="41F7FC3E1BF9DB16" data-function-name="notify_buffer_destroyed"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#41F7FC3E1BF9DB16">\xb6</a><code class="hdoc-function-code language-cpp">void notify_buffer_destroyed(<a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a> bid)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L98">include/command_graph_generator.h:98</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a><b> bid</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="4B567ECE26AB22F2" data-function-name="notify_host_object_created"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#4B567ECE26AB22F2">\xb6</a><code class="hdoc-function-code language-cpp">void notify_host_object_created(\n    <a href="/docs/api/records/A0E5B68259E332A7/">host_object_id</a> hoid)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L100">include/command_graph_generator.h:100</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/A0E5B68259E332A7/">host_object_id</a><b> hoid</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="EC5266B8FE8EEC1C" data-function-name="notify_host_object_destroyed"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#EC5266B8FE8EEC1C">\xb6</a><code class="hdoc-function-code language-cpp">void notify_host_object_destroyed(\n    <a href="/docs/api/records/A0E5B68259E332A7/">host_object_id</a> hoid)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L102">include/command_graph_generator.h:102</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/A0E5B68259E332A7/">host_object_id</a><b> hoid</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="3420D4782DB63501" data-function-name="create_command"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#3420D4782DB63501">\xb6</a><code class="hdoc-function-code language-cpp">template &lt;typename T, typename... Args&gt;\nT* create_command(Args&amp;&amp;... args)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L111">include/command_graph_generator.h:111</a></p></aside><section><h4>Template Parameters</h4><dl><dt class="is-family-code"><b> T</b></dt><dt class="is-family-code"><b> Args</b></dt></dl></section><section><h4>Parameters</h4><dl><dt class="is-family-code">Args&amp;&amp;...<b> args</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="BA8026AEDCEDBAE6" data-function-name="default_policy_set"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#BA8026AEDCEDBAE6">\xb6</a><code class="hdoc-function-code language-cpp">static constexpr <a href="/docs/api/records/A63340B559E8DDD3/">policy_set</a> default_policy_set()</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L147">include/command_graph_generator.h:147</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="2C14E86A95445906" data-function-name="generate_anti_dependencies"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#2C14E86A95445906">\xb6</a><code class="hdoc-function-code language-cpp">void generate_anti_dependencies(\n    <a href="/docs/api/records/322167BB21F2212B/">task_id</a> tid,\n    <a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a> bid,\n    const <a href="/docs/api/records/42DEA3E8277ABF6F/">region_map</a>&lt;write_command_state&gt;&amp;\n        last_writers_map,\n    const <a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt;&amp; write_req,\n    <a href="/docs/api/records/45953E750EDED50D/">abstract_command</a>* write_cmd)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L123">include/command_graph_generator.h:123</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/322167BB21F2212B/">task_id</a><b> tid</b></dt><dt class="is-family-code"><a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a><b> bid</b></dt><dt class="is-family-code">const <a href="/docs/api/records/42DEA3E8277ABF6F/">region_map</a>&lt;write_command_state&gt;&amp;<b> last_writers_map</b></dt><dt class="is-family-code">const <a href="/docs/api/records/A3975FE869EB8647/">region</a>&lt;3&gt;&amp;<b> write_req</b></dt><dt class="is-family-code"><a href="/docs/api/records/45953E750EDED50D/">abstract_command</a>*<b> write_cmd</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="6F82DD42E059610A" data-function-name="generate_distributed_commands"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#6F82DD42E059610A">\xb6</a><code class="hdoc-function-code language-cpp">void generate_distributed_commands(\n    const <a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp; tsk)</code></pre></h3><section><h4>Description</h4><p><p>Generates command(s) that need to be processed by every node in the system, because they may require data transfers.</p>\n</p></section><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L121">include/command_graph_generator.h:121</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp;<b> tsk</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="F55B8AC56B9BDCF1" data-function-name="generate_epoch_command"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#F55B8AC56B9BDCF1">\xb6</a><code class="hdoc-function-code language-cpp">void generate_epoch_command(const <a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp; tsk)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L132">include/command_graph_generator.h:132</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp;<b> tsk</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="41967982C00EBBCA" data-function-name="generate_epoch_dependencies"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#41967982C00EBBCA">\xb6</a><code class="hdoc-function-code language-cpp">void generate_epoch_dependencies(\n    <a href="/docs/api/records/45953E750EDED50D/">abstract_command</a>* cmd)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L136">include/command_graph_generator.h:136</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/45953E750EDED50D/">abstract_command</a>*<b> cmd</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="CA6DC186BF826ECE" data-function-name="generate_horizon_command"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#CA6DC186BF826ECE">\xb6</a><code class="hdoc-function-code language-cpp">void generate_horizon_command(const <a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp; tsk)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L134">include/command_graph_generator.h:134</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp;<b> tsk</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="07C338380AB70397" data-function-name="print_buffer_debug_label"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#07C338380AB70397">\xb6</a><code class="hdoc-function-code language-cpp"><a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a> print_buffer_debug_label(\n    <a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a> bid) const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L149">include/command_graph_generator.h:149</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/72F1B234CCBF2E73/">buffer_id</a><b> bid</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="77AFF5B1EA6F8808" data-function-name="process_task_side_effect_requirements"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#77AFF5B1EA6F8808">\xb6</a><code class="hdoc-function-code language-cpp">void process_<a href="/docs/api/records/A42A04C270A2D231/">task</a>_side_effect_requirements(\n    const task&amp; tsk)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L126">include/command_graph_generator.h:126</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp;<b> tsk</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="E306D81881A81E4E" data-function-name="prune_commands_before"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#E306D81881A81E4E">\xb6</a><code class="hdoc-function-code language-cpp">void prune_commands_before(<a href="/docs/api/records/2D98D7CFB741116F/">command_id</a> epoch)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L138">include/command_graph_generator.h:138</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/2D98D7CFB741116F/">command_id</a><b> epoch</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="E81588531CEA2148" data-function-name="reduce_execution_front_to"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#E81588531CEA2148">\xb6</a><code class="hdoc-function-code language-cpp">void reduce_execution_front_to(\n    <a href="/docs/api/records/45953E750EDED50D/">abstract_command</a>* new_front)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L130">include/command_graph_generator.h:130</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/45953E750EDED50D/">abstract_command</a>*<b> new_front</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="3CD617364B02487B" data-function-name="report_overlapping_writes"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#3CD617364B02487B">\xb6</a><code class="hdoc-function-code language-cpp">void report_overlapping_writes(\n    const <a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp; tsk,\n    const box_vector&lt;3&gt;&amp; local_chunks) const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L140">include/command_graph_generator.h:140</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/A42A04C270A2D231/">task</a>&amp;<b> tsk</b></dt><dt class="is-family-code">const box_vector&lt;3&gt;&amp;<b> local_chunks</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="2FF0F74C18B8B7B9" data-function-name="set_epoch_for_new_commands"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#2FF0F74C18B8B7B9">\xb6</a><code class="hdoc-function-code language-cpp">void set_epoch_for_new_commands(\n    const <a href="/docs/api/records/45953E750EDED50D/">abstract_command</a>* epoch_or_horizon)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/command_graph_generator.h#L128">include/command_graph_generator.h:128</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/45953E750EDED50D/">abstract_command</a>*<b> epoch_or_horizon</b></dt></dl></section></section><hr class="member-fun-separator"></hr></section></main>',t={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class command_graph_generator"},d=void 0,i={id:"api/records/98A0694E0D4693D2",title:"class command_graph_generator",description:"",source:"@site/celerity-runtime/docs/api/records/98A0694E0D4693D2.mdx",sourceDirName:"api/records",slug:"/api/records/98A0694E0D4693D2",permalink:"/docs/api/records/98A0694E0D4693D2",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class command_graph_generator"},sidebar:"api"},n={},m=[];function l(e){const{Head:a}={...(0,s.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a,{children:[(0,r.jsx)("script",{src:"/js/highlight.min.js"}),(0,r.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:o}})]})}function p(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,a,c)=>{c.d(a,{R:()=>t,x:()=>d});var r=c(96540);const s={},o=r.createContext(s);function t(e){const a=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(o.Provider,{value:a},e.children)}}}]);