"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[700],{5341:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-4c9f632a",path:"/assets/javascript/9.%E6%89%8B%E5%86%99call-apply-bind.html",title:"手写call-apply-bind",lang:"zh-CN",frontmatter:{lang:"zh-CN",title:"手写call-apply-bind",description:"手写call-apply-bind"},excerpt:"",headers:[{level:2,title:"手写call",slug:"手写call",children:[]},{level:2,title:"手写apply",slug:"手写apply",children:[]},{level:2,title:"手写bind",slug:"手写bind",children:[]},{level:2,title:"vue源码尤大的polyfillBind",slug:"vue源码尤大的polyfillbind",children:[]}],filePathRelative:"assets/javascript/9.手写call-apply-bind.md",git:{updatedTime:null,contributors:[]}}},5356:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h2 id="手写call" tabindex="-1"><a class="header-anchor" href="#手写call" aria-hidden="true">#</a> 手写call</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myCall</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> ctx <span class="token operator">=</span> context <span class="token operator">||</span> window\n    args <span class="token operator">=</span> args <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token keyword">const</span> func <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    \n    ctx<span class="token punctuation">[</span>func<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span>\n    \n    <span class="token keyword">const</span> res <span class="token operator">=</span> args<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> ctx<span class="token punctuation">[</span>func<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">:</span> ctx<span class="token punctuation">[</span>func<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">delete</span> ctx<span class="token punctuation">[</span>func<span class="token punctuation">]</span>\n    \n    <span class="token keyword">return</span> res\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="手写apply" tabindex="-1"><a class="header-anchor" href="#手写apply" aria-hidden="true">#</a> 手写apply</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myApply</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> ctx <span class="token operator">=</span> context <span class="token operator">||</span> window\n    \n    <span class="token keyword">const</span> func <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    \n    ctx<span class="token punctuation">[</span>func<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span>\n    \n    <span class="token keyword">const</span> res <span class="token operator">=</span> args<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> ctx<span class="token punctuation">[</span>func<span class="token punctuation">]</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">:</span> ctx<span class="token punctuation">[</span>func<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">delete</span> ctx<span class="token punctuation">[</span>func<span class="token punctuation">]</span>\n    \n    <span class="token keyword">return</span> res\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="手写bind" tabindex="-1"><a class="header-anchor" href="#手写bind" aria-hidden="true">#</a> 手写bind</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> ctx <span class="token operator">=</span> context <span class="token operator">||</span> window\n    args <span class="token operator">=</span> args <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n    <span class="token keyword">const</span> func <span class="token operator">=</span> <span class="token keyword">this</span>\n\n    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">newFn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>newArgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 返回的函数用作构造函数</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">newFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>newArgs<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>newArgs<span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="vue源码尤大的polyfillbind" tabindex="-1"><a class="header-anchor" href="#vue源码尤大的polyfillbind" aria-hidden="true">#</a> vue源码尤大的polyfillBind</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * Simple bind polyfill for environments that do not support it,\n * e.g., PhantomJS 1.x. Technically, we don&#39;t need this anymore\n * since native bind is now performant enough in most browsers.\n * But removing it would mean breaking code that was able to run in\n * PhantomJS 1.x, so this must be kept for backward compatibility.\n */</span>\n\n<span class="token comment">/* istanbul ignore next */</span>\n<span class="token keyword">function</span> <span class="token function">polyfillBind</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token operator">:</span> Function<span class="token punctuation">,</span> ctx<span class="token operator">:</span> Object</span><span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token punctuation">{</span>\n  <span class="token keyword">function</span> <span class="token function">boundFn</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> l <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length\n    <span class="token comment">// 并没有兼容此函数用作构造函数的情况，因为vue源码里面用不到，所以就没实现</span>\n    <span class="token keyword">return</span> l\n      <span class="token operator">?</span> l <span class="token operator">&gt;</span> <span class="token number">1</span>\n        <span class="token operator">?</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>\n        <span class="token operator">:</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> a<span class="token punctuation">)</span>\n      <span class="token operator">:</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  boundFn<span class="token punctuation">.</span>_length <span class="token operator">=</span> fn<span class="token punctuation">.</span>length\n  <span class="token keyword">return</span> boundFn\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>',8),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,p]of s)n[a]=p;return n}}}]);