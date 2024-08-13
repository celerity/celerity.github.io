"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97455],{33695:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var t=r(74848),i=r(28453);const s='<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page06616C8D23BBC0CD"><span>class iterable_range</span></a></li></ul></nav>\n<main><h1>class iterable_range</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">template &lt;typename Iterator&gt;\nclass iterable_range { /* full declaration omitted */ };</code></pre><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/intrusive_graph.h#L28">include/intrusive_graph.h:28</a></p></aside><section><h2>Template Parameters</h2><dl><dt class="is-family-code"><b> Iterator</b></dt></dl></section><section><h2>Member Variables</h2><dl><dt class="is-family-code hdoc-private" id="var_m_first" data-member-name="m_first">  Iterator <b>m_first</b></dt><dt class="is-family-code hdoc-private" id="var_m_last" data-member-name="m_last">  Iterator <b>m_last</b></dt></dl></section><section><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#58D7DEFBA322D3BA"><b>begin</b></a>() const &rarr; Iterator</li><li class="is-family-code"><a href="#26B4D452F8255978"><b>empty</b></a>() const &rarr; bool</li><li class="is-family-code"><a href="#99C70B60874632C8"><b>end</b></a>() const &rarr; Iterator</li><li class="is-family-code"><a href="#588B60F44AD5E93D"><b>front</b></a>() const &rarr; auto &amp;</li><li class="is-family-code"><a href="#13F3A3644ED8F658"><b>iterable_range</b></a>(Iterator first, Iterator last)</li><li class="is-family-code"><a href="#8912179B16052CC9"><b>size</b></a>() const &rarr; size_t</li></ul></section><section><h2>Friend Function Overview</h2><ul><li class="is-family-code"><a href="#7032CEE95F6042FE"><b>begin</b></a>(const iterable_range&lt;Iterator&gt; &amp; ir) &rarr; friend Iterator</li><li class="is-family-code"><a href="#EC15D436E7CB7905"><b>end</b></a>(const iterable_range&lt;Iterator&gt; &amp; ir) &rarr; friend Iterator</li></ul></section><section><h2>Member Functions</h2><section><h3 id="58D7DEFBA322D3BA" data-function-name="begin"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#58D7DEFBA322D3BA">\xb6</a><code class="hdoc-function-code language-cpp">Iterator begin() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/intrusive_graph.h#L32">include/intrusive_graph.h:32</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="26B4D452F8255978" data-function-name="empty"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#26B4D452F8255978">\xb6</a><code class="hdoc-function-code language-cpp">bool empty() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/intrusive_graph.h#L38">include/intrusive_graph.h:38</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="99C70B60874632C8" data-function-name="end"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#99C70B60874632C8">\xb6</a><code class="hdoc-function-code language-cpp">Iterator end() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/intrusive_graph.h#L33">include/intrusive_graph.h:33</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="588B60F44AD5E93D" data-function-name="front"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#588B60F44AD5E93D">\xb6</a><code class="hdoc-function-code language-cpp">auto&amp; front() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/intrusive_graph.h#L37">include/intrusive_graph.h:37</a></p></aside></section><hr class="member-fun-separator"></hr><section><h3 id="13F3A3644ED8F658" data-function-name="iterable_range"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#13F3A3644ED8F658">\xb6</a><code class="hdoc-function-code language-cpp">iterable_range(Iterator first, Iterator last)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/intrusive_graph.h#L30">include/intrusive_graph.h:30</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">Iterator<b> first</b></dt><dt class="is-family-code">Iterator<b> last</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="8912179B16052CC9" data-function-name="size"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#8912179B16052CC9">\xb6</a><code class="hdoc-function-code language-cpp">size_t size() const</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/intrusive_graph.h#L39">include/intrusive_graph.h:39</a></p></aside></section><hr class="member-fun-separator"></hr></section><section><h2>Friend Functions</h2><section><h3 id="7032CEE95F6042FE" data-function-name="begin"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#7032CEE95F6042FE">\xb6</a><code class="hdoc-function-code language-cpp">friend Iterator begin(\n    const <a href="/docs/api/records/06616C8D23BBC0CD/">iterable_range</a>&lt;Iterator&gt;&amp; ir)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/intrusive_graph.h#L34">include/intrusive_graph.h:34</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/06616C8D23BBC0CD/">iterable_range</a>&lt;Iterator&gt;&amp;<b> ir</b></dt></dl></section></section><hr class="member-fun-separator"></hr><section><h3 id="EC15D436E7CB7905" data-function-name="end"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#EC15D436E7CB7905">\xb6</a><code class="hdoc-function-code language-cpp">friend Iterator end(\n    const <a href="/docs/api/records/06616C8D23BBC0CD/">iterable_range</a>&lt;Iterator&gt;&amp; ir)</code></pre></h3><aside><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/intrusive_graph.h#L35">include/intrusive_graph.h:35</a></p></aside><section><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/06616C8D23BBC0CD/">iterable_range</a>&lt;Iterator&gt;&amp;<b> ir</b></dt></dl></section></section><hr class="member-fun-separator"></hr></section></main>',c={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class iterable_range"},n=void 0,o={id:"api/records/06616C8D23BBC0CD",title:"class iterable_range",description:"",source:"@site/celerity-runtime/docs/api/records/06616C8D23BBC0CD.mdx",sourceDirName:"api/records",slug:"/api/records/06616C8D23BBC0CD",permalink:"/docs/api/records/06616C8D23BBC0CD",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class iterable_range"},sidebar:"api"},l={},d=[];function p(e){const{Head:a}={...(0,i.R)(),...e.components};return a||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("script",{src:"/js/highlight.min.js"}),(0,t.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>c,x:()=>n});var t=r(96540);const i={},s=t.createContext(i);function c(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);