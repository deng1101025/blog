---
lang: zh-CN
title: wenpack相关
description: wenpack相关
---

## resolve.extensions

因为想用webpack打包typescript， 在配置webpack脚手架的时候，如果ts模块想用es modules需要配置resolve.extensions，因为默认是不识别ts结尾的文件的，所以就手贱配置成了这
```js
resolve: {
    extensions: ['.ts']
},
```
然后运行 npm run dev ，就报错了
```js
ERROR in ./node_modules/html-entities/lib/index.js 14:25-54
Module not found: Error: Can't resolve './named-references' in '/Users/dengzhanwei/work/学习/base-cli-webpack/node_modules/html-entities/lib'
 @ ./node_modules/webpack-dev-server/client/overlay.js 4:0-39 148:26-32
 @ ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8081&pathname=%2Fws&logging=info&reconnect=10 6:0-57 77:6-10 115:6-10 124:6-10 142:27-40 158:6-10 165:28-41 181:6-10 191:6-10

ERROR in ./node_modules/html-entities/lib/index.js 15:28-60
Module not found: Error: Can't resolve './numeric-unicode-map' in '/Users/dengzhanwei/work/学习/base-cli-webpack/node_modules/html-entities/lib'
 @ ./node_modules/webpack-dev-server/client/overlay.js 4:0-39 148:26-32
 @ ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8081&pathname=%2Fws&logging=info&reconnect=10 6:0-57 77:6-10 115:6-10 124:6-10 142:27-40 158:6-10 165:28-41 181:6-10 191:6-10

ERROR in ./node_modules/html-entities/lib/index.js 16:24-52
Module not found: Error: Can't resolve './surrogate-pairs' in '/Users/dengzhanwei/work/学习/base-cli-webpack/node_modules/html-entities/lib'
 @ ./node_modules/webpack-dev-server/client/overlay.js 4:0-39 148:26-32
 @ ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8081&pathname=%2Fws&logging=info&reconnect=10 6:0-57 77:6-10 115:6-10 124:6-10 142:27-40 158:6-10 165:28-41 181:6-10 191:6-10

ERROR in ./node_modules/url/url.js 25:11-28
Module not found: Error: Can't resolve './util' in '/Users/dengzhanwei/work/学习/base-cli-webpack/node_modules/url'
 @ ./node_modules/webpack-dev-server/client/utils/parseURL.js 1:0-22 35:16-25
 @ ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8081&pathname=%2Fws&logging=info&reconnect=10 4:0-43 23:26-34

ERROR in ./node_modules/url/url.js 100:18-40
Module not found: Error: Can't resolve 'querystring' in '/Users/dengzhanwei/work/学习/base-cli-webpack/node_modules/url'

BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

If you want to include a polyfill, you need to:
        - add a fallback 'resolve.fallback: { "querystring": require.resolve("querystring-es3") }'
        - install 'querystring-es3'
If you don't want to include a polyfill, you can use an empty module like this:
        resolve.fallback: { "querystring": false }
 @ ./node_modules/webpack-dev-server/client/utils/parseURL.js 1:0-22 35:16-25
 @ ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8081&pathname=%2Fws&logging=info&reconnect=10 4:0-43 23:26-34

ERROR in ./node_modules/webpack/hot/dev-server.js 11:11-27
Module not found: Error: Can't resolve './log' in '/Users/dengzhanwei/work/学习/base-cli-webpack/node_modules/webpack/hot'

ERROR in ./node_modules/webpack/hot/dev-server.js 30:4-33
Module not found: Error: Can't resolve './log-apply-result' in '/Users/dengzhanwei/work/学习/base-cli-webpack/node_modules/webpack/hot'

ERROR in ./node_modules/webpack/hot/dev-server.js 50:18-38
Module not found: Error: Can't resolve './emitter' in '/Users/dengzhanwei/work/学习/base-cli-webpack/node_modules/webpack/hot'

8 errors have detailed information that is not shown.
Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.

webpack 5.64.3 compiled with 8 errors in 925 ms
```
一脸懵逼的看看错误，发现
```js
If you want to include a polyfill, you need to:
        - add a fallback 'resolve.fallback: { "querystring": require.resolve("querystring-es3") }'
        - install 'querystring-es3'
If you don't want to include a polyfill, you can use an empty module like this:
        resolve.fallback: { "querystring": false }
```
哦，我明白了，原来是webpack5的原因，以为webpack5里面少了默认的模块，得需要自己引入，于是乎，就一顿操作引入呗
......
一顿操作之后，继续报错，然后就提示，找不到module，具体提示就不粘贴了，最后在别人的配置中找到了配置方法，请看
```js
resolve: {
    extensions: ['.tsx', '.ts', '.js']
},
```
这样就可以了，本人秉持学习使我快乐的思想方针，就去问一下官网 Why！！！
在官网中看到

> 尝试按顺序解析这些后缀名。如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。

让我突发灵感，选择测试一下build试试，验证一下自己的猜想，最后我重新设置成
```js
resolve: {
    extensions: ['.ts']
},
```
使用npm run build，构建成功，并没有报错，用live server 打开构建成功的项目，也没有发现错误

最后得出结论：
在npm run dev的时候会在一个虚拟目录生成js文件（也有可能是在内存中），而es modules归根结底还是解析js的模块，并没有去寻找ts，所以npm run dev的时候是找不到那个模块的
但是使用npm run build的时候并不会执行，会直接解析，最后解释于行的时候，跟ts是没有关系的，应呗合并到bundle里面，是一个一个的模块，所以不会运行错误

最后resolve.extensions的设置如下
```js
resolve: {
    extensions: ['.tsx', '.ts', '.js', '...']
},
```
为什么多了三个点呢，因为官网的一句话

> 请注意，以上这样使用 resolve.extensions 会 覆盖默认数组，这就意味着 webpack 将不再尝试使用默认扩展来解析模块。然而你可以使用 '...' 访问默认拓展名：