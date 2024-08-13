"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79484],{22218:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var i=a(74848),t=a(28453);const r='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>struct send_instruction_record: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#06885D8AE2CD6C63"><span>namespace detail</span></a></li><li class="is-active"><a aria-current="page2C71C4B06FC71550"><span>struct send_instruction_record</span></a></li></ul></nav><main class="content"><h1>struct send_instruction_record</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">struct send_instruction_record : public implement_acceptor { /* full declaration omitted */ };</code></pre><h2>Description</h2><p><p>IDAG record type for a <code>send_instruction</code>.</p>\n</p><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L285">include/recorders.h:285</a></p><p>Inherits from: implement_acceptor</p><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_dest_node_id" data-member-name="dest_node_id">  <a href="/docs/api/records/DBE63D9D086598BC/">node_id</a> <b>dest_node_id</b></dt><dt class="is-family-code" id="var_message_id" data-member-name="message_id">  <a href="/docs/api/records/9CC04BC93AB17E32/">detail::message_id</a> <b>message_id</b></dt><dt class="is-family-code" id="var_source_allocation_id" data-member-name="source_allocation_id">  <a href="/docs/api/records/1824FC8BEBAA39C7/">allocation_id</a> <b>source_allocation_id</b></dt><dt class="is-family-code" id="var_source_allocation_range" data-member-name="source_allocation_range">  <a href="/docs/api/records/B13622E7024342AF/">range</a>&lt;3&gt; <b>source_allocation_range</b></dt><dt class="is-family-code" id="var_offset_in_source_allocation" data-member-name="offset_in_source_allocation">  <a href="/docs/api/records/9A5CC4DFBBD48E5E/">celerity::id</a>&lt;3&gt; <b>offset_in_source_allocation</b></dt><dt class="is-family-code" id="var_send_range" data-member-name="send_range">  <a href="/docs/api/records/B13622E7024342AF/">range</a>&lt;3&gt; <b>send_range</b></dt><dt class="is-family-code" id="var_element_size" data-member-name="element_size">  size_t <b>element_size</b></dt><dt class="is-family-code" id="var_push_cid" data-member-name="push_cid">  <a href="/docs/api/records/2D98D7CFB741116F/">command_id</a> <b>push_cid</b></dt><dt class="is-family-code" id="var_transfer_id" data-member-name="transfer_id">  <a href="/docs/api/records/3330F4171361EBD0/">detail::transfer_id</a> <b>transfer_id</b></dt><dt class="is-family-code" id="var_buffer_name" data-member-name="buffer_name">  <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a> <b>buffer_name</b></dt><dt class="is-family-code" id="var_offset_in_buffer" data-member-name="offset_in_buffer">  <a href="/docs/api/records/9A5CC4DFBBD48E5E/">celerity::id</a>&lt;3&gt; <b>offset_in_buffer</b></dt></dl><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#CE50C91BBBCEA16C"><b>send_instruction_record</b></a>(const send_instruction &amp; sinstr, command_id push_cid, const detail::transfer_id &amp; trid, std::string buffer_name, const celerity::id&lt;3&gt; &amp; offset_in_buffer)</li></ul><h2>Member Functions</h2><h3 id="CE50C91BBBCEA16C" data-function-name="send_instruction_record"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#CE50C91BBBCEA16C">\xb6</a><code class="hdoc-function-code language-cpp"><a href="/docs/api/records/32CA151DCE8CD2A2/">send_instruction</a>_record(\n    const send_instruction&amp; sinstr,\n    <a href="/docs/api/records/2D98D7CFB741116F/">command_id</a> push_cid,\n    const <a href="/docs/api/records/3330F4171361EBD0/">detail::transfer_id</a>&amp; trid,\n    <a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a> buffer_name,\n    const <a href="/docs/api/records/9A5CC4DFBBD48E5E/">celerity::id</a>&lt;3&gt;&amp; offset_in_buffer)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/recorders.h#L298">include/recorders.h:298</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/32CA151DCE8CD2A2/">send_instruction</a>&amp;<b> sinstr</b></dt><dt class="is-family-code"><a href="/docs/api/records/2D98D7CFB741116F/">command_id</a><b> push_cid</b></dt><dt class="is-family-code">const <a href="/docs/api/records/3330F4171361EBD0/">detail::transfer_id</a>&amp;<b> trid</b></dt><dt class="is-family-code"><a href="https://en.cppreference.com/w/cpp/string/basic_string">std::string</a><b> buffer_name</b></dt><dt class="is-family-code">const <a href="/docs/api/records/9A5CC4DFBBD48E5E/">celerity::id</a>&lt;3&gt;&amp;<b> offset_in_buffer</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',n={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct send_instruction_record"},c=void 0,d={id:"api/records/2C71C4B06FC71550",title:"struct send_instruction_record",description:"",source:"@site/celerity-runtime/docs/api/records/2C71C4B06FC71550.mdx",sourceDirName:"api/records",slug:"/api/records/2C71C4B06FC71550",permalink:"/docs/api/records/2C71C4B06FC71550",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"struct send_instruction_record"},sidebar:"api"},o={},l=[];function p(e){const{Head:s}={...(0,t.R)(),...e.components};return s||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s,{children:[(0,i.jsx)("script",{src:"/js/highlight.min.js"}),(0,i.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>n,x:()=>c});var i=a(96540);const t={},r=i.createContext(t);function n(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);