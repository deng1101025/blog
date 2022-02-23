"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7107],{681:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-6245c1c0",path:"/assets/home/2.%E7%AE%97%E6%B3%95%E5%BF%AB%E6%8E%92.html",title:"算法 - 快排",lang:"zh-CN",frontmatter:{lang:"zh-CN",title:"算法 - 快排",description:"快排实现"},excerpt:"",headers:[],filePathRelative:"assets/home/2.算法快排.md",git:{updatedTime:164121974e4,contributors:[{name:"邓占伟",email:"332877552@qq.com",commits:1}]}}},3081:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="快排算法" tabindex="-1"><a class="header-anchor" href="#快排算法" aria-hidden="true">#</a> 快排算法</h1><p>给定数组，快速从小到大排序</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>\n<span class="token keyword">function</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> arr\n\t<span class="token punctuation">}</span>\n\t<span class="token keyword">var</span> index <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>\n\t<span class="token keyword">var</span> pivod <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n\t<span class="token keyword">var</span> prev <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\t<span class="token keyword">var</span> last <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\tarr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">if</span><span class="token punctuation">(</span>item <span class="token operator">&gt;</span> pivod<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tlast<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n\t\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n\t\t\tprev<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n\t<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">quickSort</span><span class="token punctuation">(</span>prev<span class="token punctuation">)</span><span class="token punctuation">,</span> pivod<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token function">quickSort</span><span class="token punctuation">(</span>last<span class="token punctuation">)</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>总结：思想就是分而治之，时间复杂度 O(nlogn)</p>',4),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,p]of s)n[a]=p;return n}}}]);