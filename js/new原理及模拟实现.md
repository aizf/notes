#

## 1

当代码 `new Foo(...)` 执行时，会发生以下事情：

一个继承自 `Foo.prototype` 的新对象被创建。
使用指定的参数调用构造函数 `Foo` ，并将 `this` 绑定到新创建的对象。`new Foo` 等同于 `new Foo()``，也就是没有指定参数列表，Foo` 不带任何参数调用的情况。
由构造函数返回的对象就是 `new` 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。

```js
function create(Con,...args) {
    // 1、创建一个空的对象
    var obj = new Object(),
    // 2、Con构造函数

    // 3、链接到原型，obj 可以访问构造函数原型中的属性
    Object.setPrototypeOf(obj, Con.prototype);
    // 4、绑定 this 实现继承，obj 可以访问到构造函数中的属性
    var ret = Con.apply(obj, args);
    // 5、优先返回构造函数返回的对象
    return ret instanceof Object ? ret : obj;
};
```

## 优化实现

不建议使用 `__proto__`

```js
function create(Con,...args) {
    // 1、Con构造函数
    // 2、创建一个空的对象并链接到原型，obj 可以访问构造函数原型中的属性
    var obj = Object.create(Con.prototype);
    // 3、绑定 this 实现继承，obj 可以访问到构造函数中的属性
    var ret = Con.apply(obj, args);
    // 4、优先返回构造函数返回的对象
    return ret instanceof Object ? ret : obj;
};
```
