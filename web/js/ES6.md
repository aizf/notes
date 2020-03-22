# ES6

## 解构赋值

### 函数参数

```js
[[1,2],[3,4]].map(([a,b])=> a+b)

>   [3, 7]
```

```js
function move({x=0,y=0}={}) {
    return [x,y];
}

move({x:3});
>   [3, 0]
```

```js
function move({x=0,y=0}) {
    return [x,y];
}

move({x:3});
>   [3, 0]
move(3,7);
>   [0, 0]
```

注意：**尽量不要在解构模式中用()**

## 用途

交换变量值

```js
let x=1;
let y=2;
[x,y]=[y,x];
```

函数返回数组或字典

```js
function foo() {
    return [1,2,3];
}
let [a,b,c]=foo();
```

```js
function foo() {
    return {
        a:1,
        b:2
    };
}
// key要相同,顺序随意
let {a,b}=foo();
```

函数参数

```js
function foo([x,y,z]) {
    return;
}
foo([1,2,3]);
```

## 字符串

### Unicode

```js
// true
'\z'==='z'
'\172'==='z'
'\x7A'==='z'
'\u007a'==='z'
'\{7A}'==='z'
```

### for ... of

### 包含

es5只有`indexOf`
es6有

. includes():bool,是否包含
. startsWith():bool,是否在头部
. endsWith():bool,是否在尾部

### repeat()

```js
'xa'.repeat(3)

> "xaxaxa"
```

```js
'xa'.repeat(2.9)

> "xaxa"
```

```js
'xa'.repeat(.0.5)   //0到.1

> ""
```

### 模板字符串

用反引号`` ` ``标识，可定义多行字符串，或嵌入变量。`${}`中可以放入任意js表达式。

```js
`asdasd
asdasd`

let a="asd";
`hello ${a}`

> "hello asd"
```

### 标签模板

模版字符串紧跟在函数名后，该函数将被调用处理该模板字符串。

```js
alert`123`
// 等同于
alert(123)
```

如果模板字符串中有变量则：

```js
var a=5;
var b=10;
tag`hello ${a} world ${b}`;
// 等同于
tag(['hello ',' world '],5,10);
```

## 5 正则的扩展

## 6 数值的扩展

### Number.isFinite(),Number.isNaN()

### Number.EPSILON

新增的极小量

```js
// 2.220446049250313e.16
```

### 安全整数和Number.isSafeInteger()

js能准确表示的整数范围是$.2^{53}$到$2^{53}$之间，不含左右端点。

```js
Math.pow(2,53)===Math.pow(2.53)+1
// true
```

### **

```js
let a=3;
a**=2;
// a=a*a;
a**=3
// a=a*a*a
```

### Integer

#### 1

js所有的数字都保存为64位浮点，精度不够，不适合

为了与Number区分，Integer类型后要加上后缀n。

## 7 函数的扩展

### 基本

ES6才能给函数参数指定默认值。

### 解构赋值结合默认值

### 参数默认值的位置

```js
function f(x,y=5,z) {
    return[x,y,z];
}

f() //[undefined,5,undefined]

// 必须显式的输入undefined,null不行
f(1, ,2)    //报错
f(1,undefined,2)    //[1,5,2]
```

### 函数的length

指定默认值后，length将失效

### 作用域

```js
var x=1;
function foo(x,y=function(){x=2;}) {
    var x=3;
    y();
    console.log(x);
}

foo()   //3
x       //1
```

```js
var x=1;
function foo(x,y=function(){x=2;}) {
    x=3;
    y();
    console.log(x);
}

foo()   //2
x       //1
```

### rest参数

形式为`...变量名`，如：

```js
function f(...values) {
    // pass
}
```

### 7.4 name属性

```js
function foo() {}
foo.name    // "foo"
```

对于赋值给变量的匿名函数：

. ES5,`f.name` 返回 `""`
. ES6,`f.name` 返回 `"f"`

### 7.5箭头函数

#### 7.5.1 基本用法

`var f=v=>v;`

等同于：

```js
var f=function(v){
    return v;
}
```

当不需要参数或需要多个参数，用`()`

若代码块多于一条，用`{}`，并使用`return`

若需要箭头返回`对象`，则需要在对象的`{}`外边加上`()`

examples:

```js
// 一般写法
[1,2,3].map(function (x) {
    return x*x;
});
// 箭头函数
[1,2,3].map(x=>x*x);
```

#### 7.5.2 注意

1. `this`对象为定义时所在的对象，而不是使用时的对象。
2. 不可当作构造函数。
3. 不能用`arguments`，可使用`rest`参数代替。
4. 不能用`yield`。

其中第一点尤其要注意，箭头函数让指针固化，**非常有利于封装回调函数**。

箭头函数`this`的机制原因是因为它没有`this`，也因此不能当构造函数。

ES5中实现箭头函数`this`的机制：

```js
var _this=this;
```

### 7.6 绑定this

```js
foo::bar;
// 等同于
bar.bind(foo);
...
```

### 7.7 尾调用优化

#### 7.7.1 概念

尾调用(Tail Call)指某个函数的最后一步调用另一个函数。

#### 7.7.2 尾调用优化

尾调用时，调用的函数若不再使用外层函数的变量，则直接删除外层函数，节省内存。

注意：**只在严格模式下生效**。

#### 7.7.3 尾递归

尾递归只存在一个调用帧，不会发生“栈溢出”。

因此ES6中尾递归不会“栈溢出”。

## 8 数组的扩展

### 8.1 扩展运算符

#### 8.1.1 含义

扩展运算符(spread)是三个点(...)，如同rest的逆运算

```js
console.log(...[1,2,3])
// 1 2 3

// 常用
a=[1,2]
b=[3,4,5]
a.push(...b)
// 或
[...a,...b]
// [1,2,3,4,5]
```

#### 8.1.2 代替apply

```js
var args=[1,2,3];

//ES5
f.apply(null,args);
//ES6
f(...args);
```

#### 8.1.3 其他应用

解构赋值

```js
const [a,...b]=[1,2,3,4,5];
a   // 1
b   // [2,3,4,5]
```

字符串,优点：能正确识别32位Unicode字符。

```js
[...'hello']
// ["h", "e", "l", "l", "o"]
```

Map和Set、Generator

扩展运算符调用的`Iterator`接口，只要有`Iterator`接口的对象都可以，如Map结构：

```js
let map=new Map([
    [1,'a'],
    [2,'b'],
    [3,'c'],
]);
let arr=[...map.keys()];    // [1,2,3]
```

### 8.2 Array.from()

将两类对象转化为数组：**类似数组对象**和**iterable对象**

类数组对象，**本质特征是有length属性**

常见应用：把arguments转换成一个真正的数组

```js
let arrayLike={
    '0':'a',
    '1':'b',
    length:2
};

//ES5
var arr1=[].slice.call(arrayLike);
//ES6
let arr2=Array.from(arrayLike);

//['a','b']
```

```js
Array.from('hello')
//['h','e','l','l','o']
```

```js
Array.from({length:3});
//[undefined,undefined,undefined]
```

`Array.from`可以接受第二参数，类似于`map`

```js
Array.from(arr,x=>x*x);
//等同于
Array.from(arr).map(x=>x*x);
```

`Array.from`可以接受第二参数，用于绑定`this`

### 8.3 Array.of()

```js
Array.of(3,11);
// [3,11]
```

### 8.4 copyWithin()

### 8.5 find()和findIndex()

找到第一个符合条件的

`find()`的第一参数为回调函数,第二参数绑定`this`

```js
[.1,2,3].find((n)=>n<0)
// .1

[.1,2,3].find(function (value,index,arr) {
    return value>1;
})
// 2
```

findIndex()与find()类似，返回位置

都可以发现`NaN`,弥补`indexOf`不足

### 8.6 fill()

```js
[1,2,3,'a'].fill(5)
// [5, 5, 5, 5]
```

### 8.7 3种遍历数组

. `keys()`：遍历键名
. `values()`：遍历键值
. `entries()`：遍历键值对

都可调用遍历器对象的`next()`

### 8.8 includes()

第二参数为其实为起始位置，可为负数

```js
[1,2,NaN].includes(NaN)
// true
```

### 8.9 数组的空位

表示没有任何值,ES6的大多数函数会将空位转为`undefined`

```js
0 in [undefined,undefined]  //true
0 in [,]  //false
```

## 第9章 对象的扩展

### 9.1 属性简洁表示

```js
var foo='bar';
var baz={foo};  // 这个
baz // {foo:"bar"}
// 等同于
var baz={foo:foo};
```

```js
function f(x,y) {
    return{x,y};
}
f(1,2)  //{x: 1, y: 2}
```

方法也可以简写

```js
var o={
    f(){
        return 1;
    }
}
// 等同于
var o={
    f:function () {
        return 1;
    }
}
```

如果方法的值是`Generator`，则在函数前加`*`

### 9.2 属性名表达式

`[]`里为表达式

```js
let a='foo';

let d={
    [a]:true,
    ['a'+'bc']:123
};
// {foo: true, abc: 123}
```

### 9.3 方法的name属性

返回函数名

### 9.4 Object.assign()

```js
var a={a:1};
var b={b:2};
var c={c:3};
var d={c:4};    // 覆盖
Object.assign(a,b,c,d);
a   // {a: 1, b: 2, c: 4}
```

### 9.7 属性的遍历

ES6有5种方法遍历

1. for...in
2. Object.keys(obj)
3. Object.getOwnPropertyNames(obj)
4. Object.getOwnPropertySymbols(obj)
5. Reflect.ownKeys(obj)

### 9.8 \_\_proto\_\_ ,Object.setPrototypeOf() ,Object.getPrototypeOf()

#### 9.8.1 \_\_proto\_\_

读取或设置当前对象的`prototype`

### 9.10 对象的扩展运算符

```js
let {x,y,...z}={y:2,x:1,a:3,b:4};
// 注意x，y顺序
x // 1
y // 2
z // {a:3,b:4}
```

### 9.12 Null传到运算符

```js
var a={b:{c:1}};
const foo=a?.b?.c || 'default';
```

## 10 Symbol

### 10.1

ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值

它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

```js
let s = Symbol();

typeof s
// "symbol"
```

由于 Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。

```js
let s1 = Symbol('foo');
let s2 = Symbol('bar');

s1 // Symbol(foo)
s2 // Symbol(bar)

s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"
```

如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。

```js
const obj = {
  toString() {
    return 'abc';
  }
};
const obj1 = {
    a:1
};
const sym = Symbol(obj);
sym // Symbol(abc)

const sym1 = Symbol(ob1j);
sym1 // Symbol([object Object])
```

### 10.2 description

读取这个描述需要将 Symbol 显式转为字符串，即下面的写法

```js
const sym = Symbol('foo');

String(sym) // "Symbol(foo)"
sym.toString() // "Symbol(foo)"
```

ES2019 提供了一个实例属性description，直接返回 Symbol 的描述。

### 10.3 作为属性名的 Symbol

防止某一个键被不小心改写或覆盖

```js
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```

### 10.4 属性名的遍历

Symbol 作为属性名，遍历对象的时候，该属性不会出现在for...in、for...of循环中，**也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回**。

但是，它也不是私有属性，有一个Object.**getOwnPropertySymbols()**方法，可以获取**指定对象的所有 Symbol 属性名**。该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。

### 10.5 Symbol.for()，Symbol.keyFor()

有时，我们希望重新使用同一个 Symbol 值，`Symbol.for()`方法可以做到这一点。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，**否则就新建**一个以该字符串为名称的 Symbol 值，并将其注册到全局

Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。它们的区别是，**前者**会被**登记在全局环境**中供搜索，后者不会。

但是调用Symbol("cat")30 次，会返回 30 个**不同的** Symbol 值。

Symbol.keyFor()方法返回一个**已登记**的 Symbol 类型值的key。

Symbol.for()的这个全局登记特性，**可以用在不同的 iframe 或 service worker 中取到同一个值**。

### 10.6 使用Symbol定义类的私有属性/方法

```js
const PASSWORD = Symbol()

class Login {
  constructor(username, password) {
    this.username = username
    this[PASSWORD] = password
  }

  checkPassword(pwd) {
      return this[PASSWORD] === pwd
  }
}

export default Login
```

## 11 Proxy

### 11.1 概述

`Proxy` 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

```js
var obj = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
});
```

```js
obj.count = 1
//  setting count!
++obj.count
//  getting count!
//  setting count!
//  2
```

```js
var proxy = new Proxy(target, handler);
```

Proxy 对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。其中，`new Proxy()`表示生成一个Proxy实例，`target`参数表示所要拦截的目标对象，`handler`参数也是一个对象，用来定制拦截行为。

Proxy 支持的拦截操作一览，一共 13 种：

1. `get(target, propKey, receiver)`：拦截对象属性的读取，比如`proxy.foo和proxy['foo']`。
2. `set(target, propKey, value, receiver)`：拦截对象属性的设置，比如`proxy.foo = v`或`proxy['foo'] = v`，返回一个布尔值。
3. `has(target, propKey)`：拦截`propKey in proxy`的操作，返回一个布尔值。
4. `deleteProperty(target, propKey)`：拦截`delete proxy[propKey]`的操作，返回一个布尔值。
5. `ownKeys(target)`：拦截`Object.getOwnPropertyNames(proxy)`、`Object.getOwnPropertySymbols(proxy)`、`Object.keys(proxy)`、`for...in`循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而`Object.keys()`的返回结果仅包括目标对象自身的可遍历属性。
6. `getOwnPropertyDescriptor(target, propKey)`：拦截`Object.getOwnPropertyDescriptor(proxy, propKey)`，返回属性的描述对象。
7. `defineProperty(target, propKey, propDesc)`：拦截`Object.defineProperty(proxy, propKey, propDesc)`、`Object.defineProperties(proxy, propDescs)`，返回一个布尔值。
8. `preventExtensions(target)`：拦截`Object.preventExtensions(proxy)`，返回一个布尔值。
9. `getPrototypeOf(target)`：拦截`Object.getPrototypeOf(proxy)`，返回一个对象。
10. `isExtensible(target)`：拦截`Object.isExtensible(proxy)`，返回一个布尔值。
11. `setPrototypeOf(target, proto)`：拦截`Object.setPrototypeOf(proxy, proto)`，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
12. `apply(target, object, args)`：拦截 Proxy 实例作为函数调用的操作，比如`proxy(...args)`、`proxy.call(object, ...args)`、`proxy.apply(...)`。
13. `construct(target, args)`：拦截 Proxy 实例作为构造函数调用的操作，比如`new proxy(...args)`。

### 11.2 Proxy 实例的方法

如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性，否则通过 Proxy 对象访问该属性会报错。

`get(target, propKey, receiver)`
>拦截某个属性的读取操作,接受三个参数，依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选。

`set(target, propKey, value, receiver)`
>set方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。

### 11.3 `this` 问题

虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。主要原因就是在 Proxy 代理的情况下，目标对象内部的`this`关键字会指向 Proxy 代理。

```js
const target = {
  m: function () {
    console.log(this);
  }
};
const handler = {};

const proxy = new Proxy(target, handler);

target.m() // {m: ƒ}
proxy.m()  // Proxy {m: ƒ}
```

可以通过绑定this解决

```js
const target = new Date('2015-01-01');
const handler = {
  get(target, prop) {
    if (prop === 'getDate') {
      return target.getDate.bind(target);
    }
    return Reflect.get(target, prop);
  }
};
const proxy = new Proxy(target, handler);

proxy.getDate() // 1
```

## 12 Promise

`Promise`对象有以下两个特点。

1. 对象的状态**不受外界影响**。`Promise`对象代表一个异步操作，有三种状态：`pending`（进行中）、`fulfilled`（已成功）和`rejected`（已失败）。**只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态**。
2. **一旦状态改变，就不会再变，任何时候都可以得到这个结果**。`Promise`对象的状态改变，只有两种可能：从`pending`变为`fulfilled`和从`pending`变为`rejected`。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 `resolved`（已定型）。如果改变已经发生了，**你再对`Promise`对象添加回调函数，也会立即得到这个结果**。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

Promise也有一些缺点。

- 首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。
- 其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
- 第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

### 12.1 基本用法

```js
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

Promise构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`。

- `resolve`函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
- `reject`函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

Promise实例生成以后，可以用`then`方法分别指定resolved状态和rejected状态的回调函数。

下面是异步加载图片的例子。

```js
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image();

    image.onload = function() {
      resolve(image);
    };

    image.onerror = function() {
      reject(new Error('Could not load image at ' + url));
    };

    image.src = url;
  });
}
```

### 12.2 Promise.prototype.then()

then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数。

`then`方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。**因此可以采用链式写法**，即then方法后面再调用另一个then方法。

指定两个回调函数。第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。

### 12.3 Promise.prototype.catch()

是`.then(null, rejection)`或`.then(undefined, rejection)`的别名，用于指定发生错误时的回调函数。

### 12.4 Promise.prototype.finally()

用于指定不管 `Promise` 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。

`finally`方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 `Promise` 状态到底是fulfilled还是rejected。这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 `Promise` 的执行结果。

### 12.5 Promise.all()

用于将多个 `Promise` 实例，包装成一个新的 `Promise` 实例。

`Promise.all()`方法的参数可以不是数组，但必须具有 `Iterator` 接口，且返回的每个成员都是 `Promise` 实例。

```js
const p = Promise.all([p1, p2, p3]);
```

p的状态由p1、p2、p3决定，分成两种情况。

1. 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的**返回值组成一个数组**，传递给p的回调函数。
2. 只要p1、p2、p3之中**有一个**被rejected，p的状态就变成rejected，此时**第一个**被reject的实例的返回值，会传递给p的回调函数。

```js
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
})
.then(result => result)
.catch(e => e);

const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了');
})
.then(result => result)
.catch(e => e);

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log(e));
// ["hello", Error: 报错了]
```

上面代码中，`p1`会resolved，`p2`首先会rejected，但是`p2`有自己的catch方法，该方法返回的是一个新的 Promise 实例，`p2`指向的实际上是这个实例。导致`Promise.all()`方法参数里面的两个实例都会resolved

### 12.6 Promise.race()

```js
const p = Promise.race([p1, p2, p3]);
```

只要有一个实例率先改变状态，`p`的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给`p`的回调函数。

### 12.7 Promise.resolve()

将现有对象转为 Promise 对象

`Promise.resolve()`等价于下面的写法。

```js
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
```

**需要注意的是**，立即`resolve()`的 Promise 对象，是在**本轮**“事件循环”（event loop）的结束时执行，而**不是在下一轮**“事件循环”的开始时。

`Promise.resolve`方法的参数分成四种情况。

**（1）**参数是一个 Promise 实例

如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。

**（2）**参数是一个`thenable`对象

`thenable`对象指的是具有`then`方法的对象，比如下面这个对象。

```js
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};
```

Promise.resolve方法会将这个对象转为 Promise 对象，然后就立即执行`thenable`对象的`then`方法。

**（3）**参数不是具有then方法的对象，或根本就不是对象

返回一个新的 `Promise` 对象，状态为resolved。

`（4）`不带有任何参数

直接返回一个resolved状态的 Promise 对象。

### 12.8 Promise.reject()

### 12.9 Promise.try()

实际开发中，经常遇到一种情况：不知道或者不想区分，函数f是同步函数还是异步操作，但是想用 Promise 来处理它。因为这样就可以不管f是否包含异步操作，都用then方法指定下一步流程，用catch方法处理f抛出的错误。一般就会采用下面的写法。

```js
Promise.resolve().then(f)
```

**缺点**，就是如果f是同步函数，那么它会在本轮事件循环的**末尾**执行。

那么有没有一种方法，让同步函数同步执行，异步函数异步执行，并且让它们具有统一的 API 呢？回答是可以的，并且还有**两种**写法。

第一种写法是用`async`函数来写。

```js
const f = () => console.log('now');
(async () => f())();
console.log('next');
// now
// next
```

第二种写法是使用`new Promise()`。

```js
const f = () => console.log('now');
(
  () => new Promise(
    resolve => resolve(f())
  )
)();
console.log('next');
// now
// next
```

现在有一个提案，提供`Promise.try`方法替代上面的写法。
