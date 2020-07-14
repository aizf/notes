---
title: this的绑定规则
tags:
    - js
    - this
---

this的绑定规则总共有下面5种。

- 1、默认绑定（严格/非严格模式）
- 2、隐式绑定
- 3、显式绑定
- 4、new绑定
- 5、箭头函数绑定

## 绑定规则

### 1 默认绑定

- 独立函数调用，可以把默认绑定看作是无法应用其他规则时的默认规则，this指向全局对象。
- 严格模式下，不能将全局对象用于默认绑定，this会绑定到undefined。只有函数运行在非严格模式下，默认绑定才能绑定到全局对象。在严格模式下调用函数则不影响默认绑定

### 2 隐式绑定

当函数引用有上下文对象时，隐式绑定规则会把函数中的this绑定到这个上下文对象。对象属性引用链中只有上一层或者说最后一层在调用中起作用。

```js
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

obj.foo(); // 2
```

#### 隐式丢失

特定情况下会丢失绑定对象

```js
// 虽然bar是obj.foo的一个引用，但是实际上，它引用的是foo函数本身。
// bar()是一个不带任何修饰的函数调用，应用默认绑定。
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

var bar = obj.foo; // 函数别名

var a = "oops, global"; // a是全局对象的属性

bar(); // "oops, global"
obj.foo(); // 2
```

### 3 显式绑定

call(..) 或者 apply(..)。第一个参数是一个对象，在调用函数时将这个对象绑定到this。

**无法解决丢失绑定**问题

```js
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2
};

foo.call( obj ); // 2  调用foo时强制把foo的this绑定到obj上
```

解决方案：

#### 1、硬绑定

创建函数bar()，并在它的内部手动调用foo.call(obj)，强制把foo的this绑定到了obj。

ES5内置了Function.prototype.bind，bind会返回一个硬绑定的新函数，用法如下。

```js
function foo(something) {
    console.log( this.a, something );
    return this.a + something;
}

var obj = {
    a: 2
};

var bar = foo.bind( obj );

var b = bar( 3 ); // 2 3
console.log( b ); // 5
```

#### 2、API调用的“上下文”

JS许多内置函数提供了一个可选参数，被称之为“上下文”（context），其作用和bind(..)一样，确保回调函数使用指定的this。这些函数实际上通过call(..)和apply(..)实现了显式绑定。

```js
function foo(el) {
	console.log( el, this.id );
}

var obj = {
    id: "awesome"
}

var myArray = [1, 2, 3]
// 调用foo(..)时把this绑定到obj
myArray.forEach( foo, obj );
// 1 awesome 2 awesome 3 awesome
```

### 4 new绑定

使用new来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。

- 1、创建（或者说构造）一个新对象。
- 2、这个新对象会被执行`[[Prototype]]`连接。
- 3、这个新对象会绑定到函数调用的this。
- 4、如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象。

手写一个new实现

```js
function create() {
    // 创建一个空的对象
    var obj = new Object(),
    // 获得构造函数，arguments中去除第一个参数
    Con = [].shift.call(arguments);
    // 链接到原型，obj 可以访问到构造函数原型中的属性
    obj.__proto__ = Con.prototype;
    // 绑定 this 实现继承，obj 可以访问到构造函数中的属性
    var ret = Con.apply(obj, arguments);
    // 优先返回构造函数返回的对象
    return ret instanceof Object ? ret : obj;
};
```

### bind实现柯里化

```js
function foo(a, b) {
    console.log( "a:" + a + "，b:" + b );
}

// 把数组”展开“成参数
foo.apply( null, [2, 3] ); // a:2，b:3

// 使用bind(..)进行柯里化
var bar = foo.bind( null, 2 );
bar( 3 ); // a:2，b:3
```

总是传入`null`来忽略this绑定可能产生一些**副作用**。如果某个函数确实使用了this，那默认绑定规则会把this绑定到全局对象中

安全的做法就是传入一个特殊的对象（空对象），把this绑定到这个对象不会对你的程序产生任何副作用。

JS中创建一个空对象最简单的方法是**Object.create(null)**，这个和{}很像，但是并不会创建Object.prototype这个委托，所以比{}更空。
