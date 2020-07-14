---
title: js Array
tags:
    - js
    - cheatsheet
---

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray>

## 属性

### Array.length

## 方法

### Array.from(arrayLike[, mapFn[, thisArg]])

- arrayLike
  - 想要转换成数组的**伪数组对象或可迭代对象**。
- mapFn 可选
  - 如果指定了该参数，**新数组中的每个元素会执行该回调函数**。
- thisArg 可选
  - 可选参数，执行回调函数 mapFn 时 this 对象。

```js
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]
```

### Array.isArray(obj)

如果值是 Array，则为true; 否则为false。

### Array.of(element0[, element1[, ...[, elementN]]])

创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

```js
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]
```
