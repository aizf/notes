---
title: document.ready和window.onload的区别
tags:
    - html
---

都是在都是在页面加载完执行的函数

`document.ready`:DOM树加载完毕，就执行，不必等到页面中图片或其他外部文件都加载完毕。并且可以写多个.ready。

`window.onload`:是页面所有元素都加载完毕，包括图片等所有元素。只能执行一次。
