---
title: Proxy
tags:
    - js
---

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy>

## 语法

`const p = new Proxy(target, handler)`

target
>包装的目标对象（可以是**任何类型的对象**，包括**原生数组**，**函数**，甚至**另一个代理**）。

handler
>包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。

## 方法

`Proxy.revocable()`
>创建一个可撤销的Proxy对象。

### handler 对象的方法

#### `get()`

用于拦截对象的读取属性操作。

`get: function(target, key, receiver)`

target
>目标对象。

key
>被获取的属性名。

receiver
>Proxy或者继承Proxy的对象

#### `set()`

用于拦截设置属性值的操作

`set: function(target, key, value, receiver)`

target
>目标对象。

key
>将被设置的属性名或 Symbol。

value
>新属性值。

receiver
>最初被调用的对象。通常是 proxy 本身，但 handler 的 set 方法也有可能在原型链上，或以其他方式被间接地调用（因此不一定是 proxy 本身）。
