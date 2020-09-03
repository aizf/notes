---
title: vue常用优化方法
categories:
    - vue
tags:
    - vue
date: 2020/9/3
---

## 1 `data`中的数据不要设置的太深

因为vue2采用`Object.defineProperty`进行递归监听`data`数据的变化

## 2 合理使用异步组件，按需引入，懒加载

## 3 事件代理

## 4 合理使用`keep-alive`

## 5 v-for时要加key

## 6 合理使用函数型组件

## 7 显式声明复杂数据为非响应式

## 8  `v-if` 和 `v-show`， `computed` 和 `watch`
