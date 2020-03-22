#

`generator`（生成器）是ES6标准引入的新的数据类型。一个`generator`看上去像一个函数，但可以返回多次。

函数在执行过程中，如果没有遇到`return`语句（函数末尾如果没有`return`，就是隐含的`return undefined;`），控制权无法交回被调用的代码。

定义如下：

```js
function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}
```

除了`return`语句，还可以用`yield`返回多次。

以下都可以

```js
function * foo(x, y) { ··· }
function *foo(x, y) { ··· }
function* foo(x, y) { ··· }
function*foo(x, y) { ··· }
```

直接调用一个`generator`和调用函数不一样，仅仅是创建了一个`generator`对象，还没有去执行它。

- `next()`方法会执行`generator`的代码，然后，每次遇到`yield x;`就返回一个对象`{value: x, done: true/false}`，然后“暂停”。返回的`value`就是`yield`的返回值，`done`表示这个`generator`是否已经执行结束了。如果`done`为`true`，则`value`就是`return`的返回值。
- 第二个方法是直接用`for ... of`循环迭代generator对象，这种方式不需要我们自己判断`done`

## `next`方法的参数

`yield`表达式本身没有返回值，或者说总是返回`undefined`。`next`方法可以带一个参数，该参数就会被当作上一个`yield`表达式的返回值。Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的。

```js
function* demo() {
    let a = 0;
    let b = yield a; // 若不赋值，b === undefined
    yield b;
}

let b = demo();
b.next();       // {value: 0, done: false}
b.next();       // {value: undefined, done: false}
b.next();       // {value: undefined, done: true}

let d = demo();
d.next();       // {value: 0, done: false}
d.next(10);     // {value: 10, done: false}
d.next(10);     // {value: undefined, done: true}
```

## 好处

- 可以实现需要用面向对象才能实现的功能。例如，保存状态
- 另一个巨大的好处，就是把异步回调代码变成“同步”代码。

## 注意点

- 调用时，仅仅创建`generator`，内部先不执行
- `yield`表达式只能用在 `Generator` 函数里面
- `for(let item of generator)`中，`item`为`value`值，不包括`return`结果
- `yield`总是返回`undefined`

### 异步任务封装

封装

```js
var fetch = require('node-fetch');

function* gen(){
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result.bio);
}
```

执行

```js
var g = gen();
var result = g.next();

result.value.then(function(data){
  return data.json();
}).then(function(data){
  g.next(data);
});
```
