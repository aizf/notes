#

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