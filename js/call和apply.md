#

call() 和 apply()的区别在于，call()方法接受的是若干个参数的列表，而apply()方法接受的是一个包含多个参数的数组

```js
fun.call(thisArg, arg1, arg2, ...)
```

非严格模式下，则指定为null和undefined的this值会自动指向全局对象(浏览器中就是window对象)，同时值为原始值(数字，字符串，布尔值)的this自动用 Object() 转换

## 使用场景

### 1、合并两个数组

```js
var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];

// 将第二个数组融合进第一个数组
// 相当于 vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);
// 4

vegetables;
// ['parsnip', 'potato', 'celery', 'beetroot']
```

当第二个数组(如示例中的 moreVegs )**太大时不要使用这个方法**来合并数组，因为一个函数能够接受的参数个数是有限制的。不同的引擎有不同的限制,有些引擎会抛出异常，有些不抛出异常但丢失多余参数。

如何解决呢？方法就是将参数数组**切块**后循环传入目标方法

### 2、获取数组中的最大值和最小值

```js
Math.max.apply(Math, numbers);
```

### 3、验证是否是数组

```js
function isArray(obj){
    return Object.prototype.toString.call(obj) === '[object Array]';
}
isArray([1, 2, 3]);
// true

// 直接使用 toString()
[1, 2, 3].toString(); 	// "1,2,3"
"123".toString(); 		// "123"
123.toString(); 		// SyntaxError: Invalid or unexpected token
Number(123).toString(); // "123"
Object(123).toString(); // "123"
```

### 4、类数组对象（Array-like Object）使用数组方法

类数组对象有下面两个特性

- 1、具有：指向对象元素的数字索引下标和 length 属性
- 2、不具有：比如 push 、shift、 forEach 以及 indexOf等数组对象具有的方法

JS中存在一种名为类数组的对象结构，比如 `arguments` 对象，还有DOM API 返回的 `NodeList` 对象都属于类数组对象

通过 `Array.prototype.slice.call` ,`Array.from()`,扩展运算符转换成真正的数组

```js
// 上面代码等同于
var arr = [].slice.call(arguments)；

ES6:
let arr = Array.from(arguments);
let arr = [...arguments];
```

### call的模拟实现

ES6:

```JS
Function.prototype.call = function (context) {
  context = context ? Object(context) : window; 
  context.fn = this;

  let args = [...arguments].slice(1);
  let result = context.fn(...args);

  delete context.fn
  return result;
}
```

### apply的模拟实现

ES6：

```js
Function.prototype.apply = function (context, arr) {
    context = context ? Object(context) : window; 
    context.fn = this;
  
    let result;
    if (!arr) {
        result = context.fn();
    } else {
        result = context.fn(...arr);
    }
      
    delete context.fn
    return result;
}
```
