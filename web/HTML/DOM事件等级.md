---
title: DOM事件等级
categories:
    - html
tags:
    - html
date: 2020/8/6
---

## DOM0级事件

就是直接通过 `onclick` 等方式实现相应的事件

特点：

1. 覆盖前面的事件
2. 兼容好，跨浏览器

## DOM1级事件

因为DOM 1一般只有设计规范没有具体实现,所以一般跳过

## DOM2级事件

通过`addEventListener`/`attachEvent`进行绑定

所有DOM0支持的行为，DOM2都可以用，DOM2还支持DOM0没有的事件行为

DOM2事件流包括三个阶段：

1. 事件捕获阶段
2. 处于目标阶段
3. 事件冒泡阶段
