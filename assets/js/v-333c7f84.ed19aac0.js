"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1439],{5910:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-333c7f84",path:"/assets/javascript/1.%E9%97%AD%E5%8C%85.html",title:"闭包",lang:"zh-CN",frontmatter:{lang:"zh-CN",title:"闭包",description:"页面的描述"},excerpt:"",headers:[{level:3,title:"定义",slug:"定义",children:[]}],filePathRelative:"assets/javascript/1.闭包.md",git:{updatedTime:164121974e4,contributors:[{name:"邓占伟",email:"332877552@qq.com",commits:1}]}}},6077:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><blockquote><p>一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。</p></blockquote><p>从开始学习JavaScript开始就开始接触闭包，到开始工作对闭包的理解一直懵懵懂懂，查询各种文档和大牛的分析（都没看懂，哈哈，可能说的太深奥了），对闭包的解释有很多种</p><ol><li>闭包可以定义私有变量，避免被意外修改</li><li>闭包可以避免变量被回收</li><li>闭包可以避免全局变量污染</li><li>还有人说你写得每个方法都是一个闭包</li></ol><p>看了很多解释，每次都觉得自己理解了，其实都不太理解，而是理解了一部分（当然可能到现在对闭包的理解还是不全面，以后还要多多学习）</p><p>其实上面说的都是闭包的用法，闭包可以解决这些问题，所以我们觉得很奇怪，理解不了</p><p>首先拿一个很经典的例子 计数器</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//第一种写法（全局变量法）</span>\n<span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span>\n<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> <span class="token operator">++</span>count\n<span class="token punctuation">}</span>\n<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>\n<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>\n<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>\n\n<span class="token comment">// 第二种写法（闭包法）</span>\n<span class="token keyword">var</span> add <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span>\n\t<span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span>  <span class="token operator">++</span>count\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>\n<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>\n<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>这就是一个闭包</p><p>那么上面两种计数器的写法有什么区别呢，</p><p>第一种全局count是全局变量，会造成全局变量污染（当业务需求有很多需要用这种方法实现的时候，会定义很多全局变量才行）；而第二种不存在这种问题 第一种count因为是全局变量，谁都可以修改，会导致无法追溯到底谁改变了他，或者可能会被意外改变，很难维护 都是计数器，功能一样，实现方式不同</p><p>那么说到现在，什么才是闭包呢</p><h4 id="闭包可以定义私有变量-避免被意外修改" tabindex="-1"><a class="header-anchor" href="#闭包可以定义私有变量-避免被意外修改" aria-hidden="true">#</a> 闭包可以定义私有变量，避免被意外修改</h4><p>经过上面的例子我们可以看到，我们可以直接访问到count或者修改count的值么，显而易见不能，我们仅仅是获得了经过（包含）count的计算返回值而已，所以在这里（闭包）就有了私有变量的概念</p><h4 id="闭包可以避免变量被回收" tabindex="-1"><a class="header-anchor" href="#闭包可以避免变量被回收" aria-hidden="true">#</a> 闭包可以避免变量被回收</h4><p>这里牵扯到JavaScript的垃圾回收机制（不晓得的同学可以移步去看看js的垃圾回收）。js有两种情况会被当成垃圾回收掉</p><p>当变量没有被引用的时候，就会被回收 当变量被循环引用，没有被其他引用（其实就是一个闭环引用）时，也会被垃圾回收掉</p><p>而在闭包中，count一直在被内层函数引用，无法释放，所以就无法被垃圾回收（看到这里有同学可能会说，那大量的闭包会不会造成内存泄漏 @_@ ，想了解更深层次，可以继续探讨哦，在这里就不详解喽）</p><h4 id="闭包可以避免全局变量污染" tabindex="-1"><a class="header-anchor" href="#闭包可以避免全局变量污染" aria-hidden="true">#</a> 闭包可以避免全局变量污染</h4><p>答案显而易见，闭包是闭环，变量都定义在函数内，且不引用任何外部函数</p><h4 id="还有人说你写得每个方法都是一个闭包" tabindex="-1"><a class="header-anchor" href="#还有人说你写得每个方法都是一个闭包" aria-hidden="true">#</a> 还有人说你写得每个方法都是一个闭包</h4><p>这个解释不知道大家理解不，如果这句话成立，嘿嘿。那么我们看看第一种《计数器》的实现方式</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//第一种写法（全局变量法）</span>\n<span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span>\n<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> <span class="token operator">++</span>count\n<span class="token punctuation">}</span>\n<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>\n<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>\n<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>这也是闭包，那你这不模棱两可，前后不搭么？不是的，这也是闭包，可以这么理解，但是我们也可以不叫他闭包。叫他闭包是因为我们可以报全局看做是一个函数，那么全局就形成了闭包了。但是这也没啥意义，所以你可以这么理解，但是不要用到实际开发中，哈哈</p><p>最后，总结一下（别人都总结，我也总结） 闭包无处不在，我们很多时候都在使用闭包，因为他能让我们写出更好、更优雅、更易维护的代码</p>',25),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,p]of s)n[a]=p;return n}}}]);