---
title: globalThis对象
tags:
    - js
---

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis>

不同环境中，获取全局对象需要不同的语句：

- 浏览器：`window`、`self` 或者 `frames`
- Web Worker：`self`
- nodejs：`global`

在松散模式下，可以在函数中返回 `this` 来获取全局对象，但是在严格模式和模块环境下，`this` 会返回 `undefined`。

并且这种方法在某些情况下会违反 CSP 规则

`globalThis` 提供了一个标准的方式来获取不同环境下的全局 `this`  对象（也就是全局对象自身）。

## es6-shim中的方式

```js
var getGlobal = function () { 
    if (typeof self !== 'undefined') { return self; } 
    if (typeof window !== 'undefined') { return window; } 
    if (typeof global !== 'undefined') { return global; } 
    throw new Error('unable to locate global object'); 
}; 

var globals = getGlobal();
```
