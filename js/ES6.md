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

- includes():bool,是否包含
- startsWith():bool,是否在头部
- endsWith():bool,是否在尾部

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
'xa'.repeat(-0.5)   //0到-1

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
// 2.220446049250313e-16
```

### 安全整数和Number.isSafeInteger()

js能准确表示的整数范围是$-2^{53}$到$2^{53}$之间，不含左右端点。

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

- ES5,`f.name` 返回 `""`
- ES6,`f.name` 返回 `"f"`

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
[-1,2,3].find((n)=>n<0)
// -1

[-1,2,3].find(function (value,index,arr) {
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

- `keys()`：遍历键名
- `values()`：遍历键值
- `entries()`：遍历键值对

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
