"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45116],{32019:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var s=i(74848),a=i(28453);const r='<!DOCTYPE html><html><head><meta charset="utf-8"></meta><meta content="width=device-width, initial-scale=1" name="viewport"></meta><title>class side_effect&lt;void, Order&gt;: Celerity 0.6.0 documentation</title><link href="../styles.css" rel="stylesheet"></link><script src="../highlight.min.js"><\/script><script>hljs.highlightAll();<\/script><link href="../katex.min.css" rel="stylesheet"></link><script src="../katex.min.js"><\/script><script src="../auto-render.min.js"><\/script><script>\n      document.addEventListener("DOMContentLoaded", function() {\n        renderMathInElement(document.body, {\n          delimiters: [\n            {left: \'$$\', right: \'$$\', display: true},\n            {left: \'$\', right: \'$\', display: false},\n          ],\n        });\n      });\n    <\/script><link href="../apple-touch-icon.png" sizes="180x180" rel="apple-touch-icon"></link><link href="../favicon-32x32.png" sizes="32x32" type="image/png" rel="icon"></link><link href="../favicon-16x16.png" sizes="16x16" type="image/png" rel="icon"></link></head><body><div id="wrapper"><section class="section"><div class="container"><div class="columns"><aside class="column is-one-fifth"><ul class="menu-list"><p class="is-size-4">Celerity 0.6.0</p><p class="menu-label">Navigation</p><li><a href="../index/">Home</a></li><li><a href="../search/">Search</a></li><li><a href="https://github.com/celerity/celerity-runtime/">Repository</a></li><p class="menu-label">API Documentation</p><li><a href="/docs/api/namespaces/">Namespaces</a></li><li><a href="/docs/api/records/">Records</a></li><li><a href="/docs/api/enums/">Enums</a></li><li><a href="/docs/api/functions/">Functions</a></li><li><a href="/docs/api/aliases/">Aliases</a></li></ul></aside><div class="column" style="overflow-x: auto"><nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs"><ul><li><a href="/docs/api/namespaces/#95420D3AD49404C0"><span>namespace celerity</span></a></li><li><a href="/docs/api/namespaces/#36211E2D24C9AB8E"><span>namespace experimental</span></a></li><li class="is-active"><a aria-current="pageE8B48F9DC1478042"><span>class side_effect&lt;void, Order&gt;</span></a></li></ul></nav><main class="content"><h1>class side_effect&lt;void, Order&gt;</h1><h2>Declaration</h2><pre class="p-0"><code class="hdoc-record-code language-cpp">template &lt;side_effect_order Order&gt;\nclass side_effect&lt;void, Order&gt; { /* full declaration omitted */ };</code></pre><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/side_effect.h#L52">include/side_effect.h:52</a></p><h2>Template Parameters</h2><dl><dt class="is-family-code">side_effect_order<b> Order</b></dt></dl><h2>Member Variables</h2><dl><dt class="is-family-code" id="var_order" data-member-name="order"> static  const <a href="/docs/api/enums/B878B875E0290D9D/">side_effect_order</a> <b>order</b> = Order</dt></dl><h2>Member Aliases</h2><ul><li class="is-family-code">using instance_type =\n    typename host_object&lt;void&gt;::instance_type;</li></ul><h2>Member Function Overview</h2><ul><li class="is-family-code"><a href="#A3B1750D1AEB6731"><b>side_effect</b></a>(const host_object&lt;void&gt; &amp; object, handler &amp; cgh) &rarr; explicit</li></ul><h2>Member Functions</h2><h3 id="A3B1750D1AEB6731" data-function-name="side_effect"><pre class="p-0 hdoc-pre-parent"><a class="hdoc-permalink-icon" href="#A3B1750D1AEB6731">\xb6</a><code class="hdoc-function-code language-cpp">explicit side_effect(\n    const <a href="/docs/api/records/EFCC0F2026173774/">host_object</a>&lt;void&gt;&amp; object,\n    <a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp; cgh)</code></pre></h3><p>Declared at: <a class="is-family-code" href="https://github.com/celerity/celerity-runtime/blob/master/include/side_effect.h#L57">include/side_effect.h:57</a></p><h4>Parameters</h4><dl><dt class="is-family-code">const <a href="/docs/api/records/EFCC0F2026173774/">host_object</a>&lt;void&gt;&amp;<b> object</b></dt><dt class="is-family-code"><a href="/docs/api/records/73E846FEAC018FF5/">handler</a>&amp;<b> cgh</b></dt></dl><hr class="member-fun-separator"></hr></main></div></div></div></section></div><footer class="footer"><p>Documentation for Celerity 0.6.0.</p><p>Generated by <a href="https://github.com/PeterTh/hdoc">&#129388;doc</a> version 1.5-internal on 2024-08-13T12:22:54 UTC.</p><p class="has-text-grey-light">19AD43E11B2996</p></footer></body></html>',c={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class side_effect<void, Order>"},n=void 0,l={id:"api/records/E8B48F9DC1478042",title:"class side_effect<void, Order>",description:"",source:"@site/celerity-runtime/docs/api/records/E8B48F9DC1478042.mdx",sourceDirName:"api/records",slug:"/api/records/E8B48F9DC1478042",permalink:"/docs/api/records/E8B48F9DC1478042",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null,sidebar_class_name:"sidebar-hidden",title:"class side_effect<void, Order>"},sidebar:"api"},o={},d=[];function p(e){const{Head:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t,{children:[(0,s.jsx)("script",{src:"/js/highlight.min.js"}),(0,s.jsx)("script",{src:"/js/api_docs.js",defer:!0})]}),"\n",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>n});var s=i(96540);const a={},r=s.createContext(a);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);