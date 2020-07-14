---
title: js class
tags:
    - js
    - 模拟
---

## static

相当于将属性或方法添加到构造函数上

例：

```ts
class A {
    static b: string = "b"
    a: string
    constructor() {
        this.a = "1"
    }
    getA() {
        return this.a
    }
    static getB() {
        return this.b
    }
}
```

转化为js：

```js
"use strict";
var A = /** @class */ (function () {
    function A() {
        this.a = "1";
    }
    A.prototype.getA = function () {
        return this.a;
    };
    A.getB = function () {
        return this.b;
    };
    A.b = "b";
    return A;
}());
```

## super

### 当做函数使用

在 `constructor` 中必须调用 `super` 方法，因为子类没有自己的 `this` 对象(在调用`super()`之前)，而是继承父类的 `this` 对象，然后对其进行加工,而 `super` 就代表了父类的构造函数。`super` 虽然代表了父类 `A` 的构造函数，但是返回的是子类 `B` 的实例，即 `super` 内部的 `this` 指的是 `B`，因此 `super()` 在这里相当于 `A.prototype.constructor.call(this, props)`。

### 当做对象使用

在普通方法中，指向父类的原型对象；在静态方法中，指向父类。

通过 `super` 调用父类的方法时，`super` 会绑定子类的 `this`。

```js
class A {
  constructor {
    this.x = 1;
  }
  s() {
    console.log(this.x);
  }
}

class B extends A {
  constructor {
    super();
    this.x = 2;
  }
  m() {
    super.s();
  }
}

let b = new B();
b.m(); // 2
```

`super.s()` 虽然调用的是 `A.prototytpe.s()`，但是 `A.prototytpe.s()`会绑定子类 `B` 的 `this`，导致输出的是 2，而不是 1。也就是说，实际上执行的是 `super.s.call(this)`。
