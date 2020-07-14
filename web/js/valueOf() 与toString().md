---
title: valueOf() 与 toString()
tags:
    - js
---

## 计算，比较时

计算，比较时优先`valueOf()`，其次`toString()`

```js
let a = {}
a.toString = () => 100
a.valueOf = () => 1
console.log(a > 5)  // true
console.log(a < 5)  // false
console.log(a == 1) // true
console.log(a === 1)// false
```

```js
let a = {}
a.toString = () => 100
// a.valueOf = () => 1
console.log(a > 5)      // true
console.log(a < 5)      // false
console.log(a == 100)   // true
console.log(a === 100)  // false
```

```js
let a = {}
// a.toString = () => 100
// a.valueOf = () => 1
console.log(a > 5)  // false
console.log(a < 5)  // false
```

## 数组/对象索引

只调用`toString()`

```js
let a = {};
a.toString = () => 0;
a.valueOf = () => 1;

let b = [0, 1];
console.log(b[0])   // 0
console.log(b["0"]) // 0
console.log(b[a])   // 0
```

```js
let a = {};
// a.toString = () => 0;
a.valueOf = () => 1;

let b = [0, 1];
console.log(b[0])   // 0
console.log(b["0"]) // 0
console.log(b[a])   // undefined
```
