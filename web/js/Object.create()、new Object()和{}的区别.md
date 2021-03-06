---
title: Object.create()、new Object()和{}的区别
tags:
    - js
---

## `Object.create()`

`Object.create()`方法创建一个新对象，使用现有的对象来提供新创建的对象的`__proto__`。

Object.create(proto[, propertiesObject])

proto

新创建对象的原型对象。

propertiesObject

可选。如果没有指定为 undefined，则是要添加到新创建对象的不可枚举（默认）属性（即其自身定义的属性，而不是其原型链上的枚举属性）对象的属性描述符以及相应的属性名称。这些属性对应Object.defineProperties()的第二个参数。

## new Object(),{}

```js
new Object().__proto__==={}.__proto__   // true
new Object({}).__proto__==={}.__proto__ // true

var a={1:1};
new Object(a)===a   // true
```
