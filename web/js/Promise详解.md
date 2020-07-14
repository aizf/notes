---
title: Promise详解
tags:
    - js
    - 模拟
---

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 300);
});

promise1.then(res => {
    console.log(res); // "foo"
});
```

## 什么是 Promise

Promise 是异步编程的一种解决方案

## 解决的痛点

回调地狱:

- 代码臃肿。
- 可读性差。
- 耦合度过高，可维护性差。
- 代码复用性差。
- 容易滋生 bug。
- 只能在回调里处理异常。

## Promise有以下几种状态

- pending: 初始状态，既不是成功，也不是失败状态。
- resolved: 意味着操作成功完成。
- rejected: 意味着操作失败。

## API

`new Promise( function(resolve, reject) {...} );`

`Promise.prototype.then(onFulfilled, onRejected)`
>类似catch

`Promise.prototype.catch(onRejected)`
>返回一个新的promise。**当这个回调函数被调用，新 promise 将以它的返回值来resolve**，**否则以当前promise的完成结果作为新promise的完成结果**.

`Promise.prototype.finally(onFinally)`

`Promise.resolve(value)`
>返回一个状态由给定value决定的Promise对象。如果该值是thenable(即，带有then方法的对象)，**返回的Promise对象的初始状态为pending，最终状态由then方法执行决定**；否则的话(该value为空，基本类型或者不带then方法的对象),返回的Promise对象状态为**fulfilled**，并且将该value传递给对应的then方法。

`Promise.reject(value)`
>返回一个状态为失败的Promise对象，并将给定的失败信息传递给对应的处理方法

`Promise.race(iterable)`
>当iterable参数里的任意一个子promise被成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。

`Promise.all(iterable)`
>所有的promise对象都成功的时候才会触发成功，一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。

## 注意点

1. `Promise`内`resolve`或`reject`后错误将静默执行，且之后内容不再执行
2. `Promise`内`resolve`或`reject`之前发生错误，`Promise.prototype.catch(onRejected)`的`onRejected`为错误
3. 在未发生的情况下，`new Promise`内`resolve`后的内容也会执行

## unhandledrejection

当`Promise` 被 `reject` 且没有 `reject` 处理器的时候，会触发 `unhandledrejection` 事件

```js
window.addEventListener("unhandledrejection", event => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
```

## 手写(未完)

```js
class Promise {
    constructor(executor) {
        //控制状态，使用了一次之后，接下来的都不被使用
        this.status = 'pending'
        this.value = undefined
        this.reason = undefined

        //定义resolve函数
        let resolve = (data) => {
            //这里pendding，主要是为了防止executor中调用了两次resovle或reject方法，而我们只调用一次
            if (this.status === 'pending') {
                this.status = 'resolve'
                this.value = data
            }
        }

        //定义reject函数
        let reject = (data) => {
            if (this.status === 'pending') {
                this.status = 'reject'
                this.reason = data
            }
        }

        //executor方法可能会抛出异常，需要捕获
        try {
            //将resolve和reject函数给使用者
            executor(resolve, reject)
        } catch (e) {
            //如果在函数中抛出异常则将它注入reject中
            reject(e)
        }
    }
}
```

## 参考

<https://juejin.im/post/5b31a4b7f265da595725f322>
<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise>
<https://juejin.im/post/5b32f552f265da59991155f0#heading-3>