"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5494],{4159:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-175afb67",path:"/assets/javascript/5.%E9%98%B2%E6%8A%96%E5%92%8C%E8%8A%82%E6%B5%81.html",title:"防抖和节流",lang:"zh-CN",frontmatter:{lang:"zh-CN",title:"防抖和节流",description:"防抖和节流"},excerpt:"",headers:[{level:3,title:"防抖(debounce)",slug:"防抖-debounce",children:[]},{level:3,title:"节流(throttle)",slug:"节流-throttle",children:[]}],filePathRelative:"assets/javascript/5.防抖和节流.md",git:{updatedTime:164121974e4,contributors:[{name:"邓占伟",email:"332877552@qq.com",commits:1}]}}},7347:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<blockquote><p>防抖或是节流：限制函数的执行次数</p><ol><li>防抖：通过setTimeout的方式，在一定的时间间隔内，将多次触发变成一次触发；</li><li>节流：减少一段时间的触发频率；</li></ol></blockquote><h3 id="防抖-debounce" tabindex="-1"><a class="header-anchor" href="#防抖-debounce" aria-hidden="true">#</a> 防抖(debounce)</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//立即执行防抖函数</span>\n<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> duration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token keyword">null</span>\n    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>t<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>\n            t <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                t <span class="token operator">=</span> <span class="token keyword">null</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> duration <span class="token operator">||</span> <span class="token number">2000</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">//不立即执行防抖函数</span>\n<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> duration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token keyword">null</span>\n    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">clearTimeout</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        t <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> duration <span class="token operator">||</span> <span class="token number">2000</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="节流-throttle" tabindex="-1"><a class="header-anchor" href="#节流-throttle" aria-hidden="true">#</a> 节流(throttle)</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">let</span> begin <span class="token operator">=</span> <span class="token number">0</span>\n\tdelay <span class="token operator">=</span> delay <span class="token operator">||</span> <span class="token number">1000</span>\n\t<span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">let</span> end <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t\t<span class="token keyword">if</span><span class="token punctuation">(</span>end <span class="token operator">-</span> begin <span class="token operator">&gt;</span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tbegin <span class="token operator">=</span> end\n\t\t\t<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\t\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',5),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,p]of s)n[a]=p;return n}}}]);