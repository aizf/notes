---
title: js的一些features
tags:
    - js
---

### 1

```js
nodes=[1,2,3,4];
for (let i in nodes) {
    typeof i === "string";
    // true
}
```

### 2 变量提升

```js

console.log(a);

var a = 2;
```

相当于

```js
var a;

console.log(a);

a = 2;
```

都输出`undefined`

函数声明与其他声明一起出现的时候，函数声明高于一切，毕竟**函数是js的第一公民**,有多个函数声明的时候，是由**最后面的函数声明来替代前面的**。

### 3 右移（左移同理）

无符号位移（>>>）和有符号位移（>>）的区别是

有符号位移运算时如果数字为正数时位移后在前面补0，为负数时则在位移后在前面补1

### 4 alert()

弹出的为字符串

例：

```js
alert({})
//"[object Object]"
```

### 5 indexOf()

```js
let a=[1,2,NaN]
a.indexOf(NaN)  // -1
a.includes(NaN) // true
```

`findIndex()`可以传回调,配合JSON.stringify,用于判断对象

## 6 一些隐式转换

<https://segmentfault.com/a/1190000004482388>

遇到算数运算符(`-` 、`*` 、`/` 和 `%`)的时候会在运算之前将参与运算的双方转换成数字。

`+`

```js
0 / 0       // NaN
0.1 / 0     // Infinity
-0.1 / 0    // -Infinity
"3" + 2     // "32"
"3" - 2     // 1
"3" * 2     // 6
```
