---
lang: zh-CN
title: X-UA-Compatible
description: html的head部分一般都会有个meta标签，来定义X-UA-Compatible
---

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
```

当你安装了vscode，使用快捷键创建一个html，用快捷键生成一个html的时候，结构是这样的

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

> Compatible 可共用的; 兼容的; 可共存的;

通过这个单词的解释，很容易理解，这句话就是渲染页面的时候以什么样的方式渲染

IE=edge 如果是IE浏览器，以最新版本的IE来渲染

IE=edge,chrome=1 优先使用chrome来渲染，但是IE浏览器下还是使用IE最新版本渲染，除非有安装 Chrome Frame 这个东西
这个东西会让IE使用Chrome的内核渲染页面