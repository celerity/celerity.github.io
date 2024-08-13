"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78744],{62685:(e,a,c)=>{c.r(a),c.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>n,toc:()=>l});var i=c(74848),o=c(28453);const r='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page168797E532D55862"><span>class mpi_communicator</span></a></li></ul></nav>\n<main><h1>class mpi_communicator</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">class mpi_communicator : public communicator { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>MPI implementation of the <code>communicator</code> interface. Wraps an <code>MPI_Comm</code>, manages strided MPI datatypes for sends / receives and optionally maintains an inbound / outbound queue of pilot messages.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/mpi_communicator.h#L20">include/mpi_communicator.h:20</a></p><p>Inherits from: <a href="/docs/api/records/5445ADDDC225FF35/">communicator</a></p><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_mpi_comm" data-member-name="m_mpi_comm">  MPI_Comm <b>m_mpi_comm</b> = (static_cast&lt;ompi_communicator_t *&gt;(static_cast&lt;void *&gt;(&amp;(ompi_mpi_comm_null))))</dt><dt class="is-family-code hdoc-private" id="var_m_inbound_pilot" data-member-name="m_inbound_pilot">  <a href="/docs/api/records/5A48F43AE86D2B48/">in_flight_pilot</a> <b>m_inbound_pilot</b></dt><dd>continually Irecv&apos;d into after the first call to poll_inbound_pilots()</dd><dt class="is-family-code hdoc-private" id="var_m_outbound_pilots" data-member-name="m_outbound_pilots">  <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;in_flight_pilot&gt; <b>m_outbound_pilots</b></dt><dt class="is-family-code hdoc-private" id="var_m_scalar_type_cache" data-member-name="m_scalar_type_cache">  <a href="https://en.cppreference.com/w/cpp/container/unordered_map">std::unordered_map</a>&lt;size_t, unique_datatype&gt; <b>m_scalar_type_cache</b></dt><dt class="is-family-code hdoc-private" id="var_m_array_type_cache" data-member-name="m_array_type_cache">  <a href="https://en.cppreference.com/w/cpp/container/unordered_map">std::unordered_map</a>&lt;stride, unique_datatype&gt; <b>m_array_type_cache</b></dt></dl><h2>Member Aliases</h2><ul><li class="is-family-code hdoc-private">using unique_datatype = std::unique_ptr&lt;\n    std::remove_pointer_t&lt;MPI_Datatype&gt;,\n    datatype_deleter&gt;;</li></ul><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#FC362DB12C77AAEF"><b>collective_barrier</b></a>() &rarr; void</li><li class="is-family-code"><a href="#D7FD7F604361D08C"><b>collective_clone</b></a>() &rarr; [[nodiscard]] std::unique_ptr&lt;communicator&gt;</li><li class="is-family-code"><a href="#A5D984F3DD46EDFA"><b>get_local_node_id</b></a>() const &rarr; node_id</li><li class="is-family-code"><a href="#ACA32669213267D3"><b>get_native</b></a>() const &rarr; MPI_Comm</li><li class="is-family-code"><a href="#E78D5E03D384C577"><b>get_num_nodes</b></a>() const &rarr; size_t</li><li class="is-family-code"><a href="#515EDDE812A33195"><b>mpi_communicator</b></a>(const mpi_communicator &amp;)</li><li class="is-family-code"><a href="#3AE533973743DEF6"><b>mpi_communicator</b></a>(mpi_communicator &amp;&amp;)</li><li class="is-family-code"><a href="#CC1507D2BC92290F"><b>mpi_communicator</b></a>(collective_clone_from_tag tag, MPI_Comm mpi_comm) &rarr; explicit</li><li class="is-family-code"><a href="#60746A3B1BB9C1AA"><b>operator=</b></a>(const mpi_communicator &amp;) &rarr; mpi_communicator &amp;</li><li class="is-family-code"><a href="#BEA2381ED34966B6"><b>operator=</b></a>(mpi_communicator &amp;&amp;) &rarr; mpi_communicator &amp;</li><li class="is-family-code"><a href="#1AFCBD1F74D37C8D"><b>poll_inbound_pilots</b></a>() &rarr; [[nodiscard]] std::vector&lt;inbound_pilot&gt;</li><li class="is-family-code"><a href="#1F8A5BFB8D0D3316"><b>receive_payload</b></a>(node_id from, message_id msgid, void * base, const stride &amp; stride) &rarr; [[nodiscard]] async_event</li><li class="is-family-code"><a href="#70D34E10798A40FC"><b>send_outbound_pilot</b></a>(const outbound_pilot &amp; pilot) &rarr; void</li><li class="is-family-code"><a href="#9DE3A40F9AF65DA4"><b>send_payload</b></a>(node_id to, message_id msgid, const void * base, const stride &amp; stride) &rarr; [[nodiscard]] async_event</li><li class="is-family-code"><a href="#49519C6F95DBAAE5"><b>~mpi_communicator</b></a>()</li><li class="is-family-code hdoc-private"><a href="#15DBEE0191A8EDC6"><b>get_array_type</b></a>(const stride &amp; stride) &rarr; MPI_Datatype</li><li class="is-family-code hdoc-private"><a href="#84D6888FB517DC03"><b>get_scalar_type</b></a>(size_t bytes) &rarr; MPI_Datatype</li></ul><p>Inherited from <a href="/docs/api/records/5445ADDDC225FF35/">communicator</a>:</p><ul><li class="is-family-code"><a href="/docs/api/records/5445ADDDC225FF35/#7BCF839B16C5EBE1">public <b>collective_barrier</b></a></li><li class="is-family-code"><a href="/docs/api/records/5445ADDDC225FF35/#22BAFC41D4411DCD">public <b>collective_clone</b></a></li><li class="is-family-code"><a href="/docs/api/records/5445ADDDC225FF35/#9F965B7E1293CE79">public <b>get_local_node_id</b></a></li><li class="is-family-code"><a href="/docs/api/records/5445ADDDC225FF35/#A4690FA0C34240CC">public <b>get_num_nodes</b></a></li><li class="is-family-code"><a href="/docs/api/records/5445ADDDC225FF35/#1875381CEE79ED55">public <b>operator=</b></a></li><li class="is-family-code"><a href="/docs/api/records/5445ADDDC225FF35/#A69457B3CAE37CD7">public <b>operator=</b></a></li><li class="is-family-code"><a href="/docs/api/records/5445ADDDC225FF35/#126A40BF50AC7DEF">public <b>poll_inbound_pilots</b></a></li><li class="is-family-code"><a href="/docs/api/records/5445ADDDC225FF35/#39C30A5FAF8E83D3">public <b>receive_payload</b></a></li><li class="is-family-code"><a href="/docs/api/records/5445ADDDC225FF35/#FC6C8A695F081561">public <b>send_outbound_pilot</b></a></li><li class="is-family-code"><a href="/docs/api/records/5445ADDDC225FF35/#AAE1C0CF167AF8C5">public <b>send_payload</b></a></li></ul><h2>Member Functions</h2><h3 id="FC362DB12C77AAEF" data-function-name="collective_barrier"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#FC362DB12C77AAEF">\xb6</a><code class="hdoc-function-code language-cpp">void collective_barrier()</code></pre></h3><h4>Description</h4><p><p>Blocks until all nodes in this communicator have called <code>collective_barrier()</code>. Must be ordered identically to all other collective operations on this communicator across all nodes.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/mpi_communicator.h#L41">include/mpi_communicator.h:41</a></p><hr class="member-fun-separator"></hr><h3 id="D7FD7F604361D08C" data-function-name="collective_clone"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#D7FD7F604361D08C">\xb6</a><code class="hdoc-function-code language-cpp">[[nodiscard]] <a href="https://en.cppreference.com/w/cpp/memory/unique_ptr">std::unique_ptr</a>&lt;communicator&gt;\ncollective_clone()</code></pre></h3><h4>Description</h4><p><p>Creates a new communicator that is fully concurrent to this one, and which has its own &quot;namespace&quot; for peer-to-peer and collective operations. Must be ordered identically to all other collective operations on this communicator across all nodes.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/mpi_communicator.h#L40">include/mpi_communicator.h:40</a></p><hr class="member-fun-separator"></hr><h3 id="A5D984F3DD46EDFA" data-function-name="get_local_node_id"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#A5D984F3DD46EDFA">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/DBE63D9D086598BC/">node_id</a> get_local_node_id() const</code></pre></h3><h4>Description</h4><p><p>Returns the 0-based id of the local node in the communicator.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/mpi_communicator.h#L32">include/mpi_communicator.h:32</a></p><hr class="member-fun-separator"></hr><h3 id="ACA32669213267D3" data-function-name="get_native"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#ACA32669213267D3">\xb6</a><code class="hdoc-function-code language-cpp">MPI_Comm get_native() const</code></pre></h3><h4>Description</h4><p><p>Returns the underlying <code>MPI_Comm</code>. The result is never <code>MPI_COMM_NULL</code>.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/mpi_communicator.h#L44">include/mpi_communicator.h:44</a></p><hr class="member-fun-separator"></hr><h3 id="E78D5E03D384C577" data-function-name="get_num_nodes"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#E78D5E03D384C577">\xb6</a><code class="hdoc-function-code language-cpp">size_t get_num_nodes() const</code></pre></h3><h4>Description</h4><p><p>Returns the number of nodes (processes) that are part of this communicator.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/mpi_communicator.h#L31">include/mpi_communicator.h:31</a></p><hr class="member-fun-separator"></hr><h3 id="515EDDE812A33195" data-function-name="mpi_communicator"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#515EDDE812A33195">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/168797E532D55862/">mpi_communicator</a>(const mpi_communicator&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/mpi_communicator.h#L25">include/mpi_communicator.h:25</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/168797E532D55862/">mpi_communicator</a>&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="3AE533973743DEF6" data-function-name="mpi_communicator"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#3AE533973743DEF6">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/168797E532D55862/">mpi_communicator</a>(mpi_communicator&amp;&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/mpi_communicator.h#L26">include/mpi_communicator.h:26</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/168797E532D55862/">mpi_communicator</a>&amp;&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="CC1507D2BC92290F" data-function-name="mpi_communicator"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#CC1507D2BC92290F">\xb6</a><code class="hdoc-function-code language-cpp">explicit mpi_communicator(\n    <a href="/docs/api/records/344A353601D305EE/">collective_clone_from_tag</a> tag,\n    MPI_Comm mpi_comm)</code></pre></h3><h4>Description</h4><p><p>Creates a new <code>mpi_communicator</code> by cloning the given <code>MPI_Comm</code>, which must not be <code>MPI_COMM_NULL</code>.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/mpi_communicator.h#L23">include/mpi_communicator.h:23</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/344A353601D305EE/">collective_clone_from_tag</a><b> tag</b></dt><dt class="is-family-code">MPI_Comm<b> mpi_comm</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="60746A3B1BB9C1AA" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#60746A3B1BB9C1AA">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/168797E532D55862/">mpi_communicator</a>&amp; operator=(\n    const <a href="/docs/api/records/168797E532D55862/">mpi_communicator</a>&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/mpi_communicator.h#L27">include/mpi_communicator.h:27</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/168797E532D55862/">mpi_communicator</a>&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="BEA2381ED34966B6" data-function-name="operator="><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#BEA2381ED34966B6">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/168797E532D55862/">mpi_communicator</a>&amp; operator=(<a href="/docs/api/records/168797E532D55862/">mpi_communicator</a>&amp;&amp;)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/mpi_communicator.h#L28">include/mpi_communicator.h:28</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/168797E532D55862/">mpi_communicator</a>&amp;&amp;<b> </b></dt></dl><hr class="member-fun-separator"></hr><h3 id="1AFCBD1F74D37C8D" data-function-name="poll_inbound_pilots"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#1AFCBD1F74D37C8D">\xb6</a><code class="hdoc-function-code language-cpp">[[nodiscard]] <a href="https://en.cppreference.com/w/cpp/container/vector">std::vector</a>&lt;inbound_pilot&gt;\npoll_inbound_pilots()</code></pre></h3><h4>Description</h4><p><p>Returns all inbound pilots received on this communicator since the last invocation of the same function. Never blocks.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/mpi_communicator.h#L35">include/mpi_communicator.h:35</a></p><hr class="member-fun-separator"></hr><h3 id="1F8A5BFB8D0D3316" data-function-name="receive_payload"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#1F8A5BFB8D0D3316">\xb6</a><code class="hdoc-function-code language-cpp">[[nodiscard]] <a href="/docs/api/records/75C01CF859B866AB/">async_event</a> receive_payload(\n    <a href="/docs/api/records/DBE63D9D086598BC/">node_id</a> from,\n    <a href="/docs/api/records/9CC04BC93AB17E32/">message_id</a> msgid,\n    void* base,\n    const <a href="/docs/api/records/0E8486033E50D99A/">stride</a>&amp; stride)</code></pre></h3><h4>Description</h4><p><p>Begins receiving strided data (which was previously announced using an inbound_pilot) from the specified node. The <code>base</code> allocation must remain live until the returned event completes, and no element inside <code>stride</code> must be written to during that time.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/mpi_communicator.h#L38">include/mpi_communicator.h:38</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/DBE63D9D086598BC/">node_id</a><b> from</b></dt><dt class="is-family-code"><a href="/docs/api/records/9CC04BC93AB17E32/">message_id</a><b> msgid</b></dt><dt class="is-family-code">void*<b> base</b></dt><dt class="is-family-code">const <a href="/docs/api/records/0E8486033E50D99A/">stride</a>&amp;<b> stride</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="70D34E10798A40FC" data-function-name="send_outbound_pilot"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#70D34E10798A40FC">\xb6</a><code class="hdoc-function-code language-cpp">void send_<a href="/docs/api/records/346CE9659132E3D3/">outbound_pilot</a>(\n    const outbound_pilot&amp; pilot)</code></pre></h3><h4>Description</h4><p><p>Asynchronously sends a pilot message, returning without acknowledgement from the receiver. The pilot is copied internally and the reference does not need to remain live after the function returns.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/mpi_communicator.h#L34">include/mpi_communicator.h:34</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/346CE9659132E3D3/">outbound_pilot</a>&amp;<b> pilot</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="9DE3A40F9AF65DA4" data-function-name="send_payload"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#9DE3A40F9AF65DA4">\xb6</a><code class="hdoc-function-code language-cpp">[[nodiscard]] <a href="/docs/api/records/75C01CF859B866AB/">async_event</a> send_payload(\n    <a href="/docs/api/records/DBE63D9D086598BC/">node_id</a> to,\n    <a href="/docs/api/records/9CC04BC93AB17E32/">message_id</a> msgid,\n    const void* base,\n    const <a href="/docs/api/records/0E8486033E50D99A/">stride</a>&amp; stride)</code></pre></h3><h4>Description</h4><p><p>Begins sending strided data (that was previously announced using an outbound_pilot) to the specified node. The <code>base</code> allocation must remain live until the returned event completes, and no element inside <code>stride</code> must be written to during that time.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/mpi_communicator.h#L37">include/mpi_communicator.h:37</a></p><h4>Parameters</h4><dl><dt class="is-family-code"><a href="/docs/api/records/DBE63D9D086598BC/">node_id</a><b> to</b></dt><dt class="is-family-code"><a href="/docs/api/records/9CC04BC93AB17E32/">message_id</a><b> msgid</b></dt><dt class="is-family-code">const void*<b> base</b></dt><dt class="is-family-code">const <a href="/docs/api/records/0E8486033E50D99A/">stride</a>&amp;<b> stride</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="49519C6F95DBAAE5" data-function-name="~mpi_communicator"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#49519C6F95DBAAE5">\xb6</a><code class="hdoc-function-code language-cpp">~mpi_communicator()</code></pre></h3><h4>Description</h4><p><p>Communicator destruction is a collective operation like <code>collective_barrier</code>. The user must ensure that any asynchronous operation is already complete when the destructor runs.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/mpi_communicator.h#L29">include/mpi_communicator.h:29</a></p><hr class="member-fun-separator"></hr><h3 id="15DBEE0191A8EDC6" data-function-name="get_array_type"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#15DBEE0191A8EDC6">\xb6</a><code class="hdoc-function-code language-cpp">MPI_Datatype get_array_type(const <a href="/docs/api/records/0E8486033E50D99A/">stride</a>&amp; stride)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/mpi_communicator.h#L69">include/mpi_communicator.h:69</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/0E8486033E50D99A/">stride</a>&amp;<b> stride</b></dt></dl><hr class="member-fun-separator"></hr><h3 id="84D6888FB517DC03" data-function-name="get_scalar_type"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#84D6888FB517DC03">\xb6</a><code class="hdoc-function-code language-cpp">MPI_Datatype get_scalar_type(size_t bytes)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/mpi_communicator.h#L68">include/mpi_communicator.h:68</a></p><h4>Parameters</h4><dl><dt class="is-family-code">size_t<b> bytes</b></dt></dl><hr class="member-fun-separator"></hr></main>',t={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class mpi_communicator"},s=void 0,n={id:"api/records/168797E532D55862",title:"class mpi_communicator",description:"",source:"@site/celerity-runtime/docs/api/records/168797E532D55862.mdx",sourceDirName:"api/records",slug:"/api/records/168797E532D55862",permalink:"/docs/api/records/168797E532D55862",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class mpi_communicator"},sidebar:"api"},d={},l=[];function m(e){const{Head:a}={...(0,o.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a,{children:[(0,i.jsx)("script",{src:"/js/highlight.min.js"}),(0,i.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]})}function p(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},28453:(e,a,c)=>{c.d(a,{R:()=>t,x:()=>s});var i=c(96540);const o={},r=i.createContext(o);function t(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);