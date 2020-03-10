#

bind返回的绑定函数也能使用 new 操作符创建对象：这种行为就像把原函数当成构造器，提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。

## 模拟实现

```js
Function.prototype.bind = function(context, ...bindArgs) {
    context = context === undefined || context === null ? window : Object(context)
    return (...args) => this.apply(context, [...bindArgs, ...args])
}
```
