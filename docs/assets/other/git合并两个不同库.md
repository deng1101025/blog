---
lang: zh-CN
title: git合并两个不同库
description: git合并两个不同库
---

第一步. 下载需要合并的分支
第二步. 添加需要合并远程仓库
第三步. 把base远程仓库中数据抓取到本仓库
第四步. checkount切换到base分支上，命名为 asf
第五步. 合并

fatal: refusing to merge unrelated histories 错误
总结：(引用学习文章的总结)

场景：有一个系统基础脚手架，很多系统都在这个脚手架基础上开发，但是有时候这个脚手架也会更新迭代，这个时候需要把脚手架合并到已经开发系统中来，而且脚手架和现有系统不再一个Git仓库中，这时候需要合并两个不同的仓库的代码。

### 第一步. 下载需要合并的分支
要把需要合并的分支代码 clone到本地。

```shell
$ git clone https://gitee.com/alingfly/ASF_Test.git
```

### 第二步. 添加需要合并远程仓库
```shell
$ git remote add base https://github.com/AClumsy/ASF.git
```
将 base作为远程仓库，添加到 本地仓库(origin)中，设置别名为 base(自定义，这里我是为了方便区分仓库名)

### 第三步. 把base远程仓库中数据抓取到本仓库
```shell
$ git fetch base
  From https://github.com/AClumsy/ASF
    * [new branch]      master     -> base/master
```
### 第四步. checkount切换到base分支上，命名为 asf
```shell
$ git checkout -b asf base/master
  Switched to a new branch 'asf'
  Branch 'asf' set up to track remote branch 'master' from 'base'.
```

```shell
#查看一下所有分支
$ git branch 
* asf
  asf_test
```
由于我们需要把asf分支合并到asf_test分支中去，我们在切换到asf_test分支。
```shell
$ git checkout asf_test
```
### 第五步. 合并
```shell
$ git merge asf
```
合并完成之后会出现很多冲突，需要在本地代码中解决冲突，然后在提交到ASF_Test中去。
```shell
$ git push origin asf_test //上传到远程库
fatal: refusing to merge unrelated histories 错误
```
在执行 merge 合并的时候出现 fatal: refusing to merge unrelated histories 错误。这个错误可能会在 git pull 或者 git push 中都有可能会遇到，这是因为两个分支没有取得关系。
解决方案
在操作命令后面加 --allow-unrelated-histories
```shell
$ git merge asf --allow-unrelated-histories
```
总结：(引用学习文章的总结)
大致思路是伪造远程的asf仓库为asf_test的一个分支，然后合并进来；
若是文件有冲突、或要建立子目录，建议在asf中先解决，再进行如上操作。


出自
```
https://www.cnblogs.com/lfzm/p/10681412.html
```