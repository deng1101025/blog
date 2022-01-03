---
lang: zh-CN
title: webpack性能优化
description: webpack性能优化
---

## development

开发环境性能优化 -> 就是加快构建速度

## production

生产环境性能优化 -> 主要在于tree shaking 和资源压缩, 当然也需要加快构建速度，但是不是主要的

想要进行性能优化，首先得知道影响性能的点
1. cpu的IO
2. 网络IO

1. cpu的IO提现在两方面，一、硬件的性能 二、代码的性能
2. 网络IO也提现在两方面，一、带宽 二、资源获取的数量和大小

name我们又可以针对