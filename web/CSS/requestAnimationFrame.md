---
title: requestAnimationFrame相关
tags:
    - css
    - js
---

```js
setTimeout(() => {
  console.log('setTimeout')
}, 0)

requestAnimationFrame(() => {
  console.log('requestAnimationFrame')
})

new Promise(r => {
  console.log('promise')
  r()
}).then(() => console.log('then'))

// promise
// then
// requestAnimationFrame
// setTimeout
```

浏览器可以优化并行的动画动作，更合理的重新排列动作序列，并把能够合并的动作放在一个渲染周期内完成，从而呈现出更流畅的动画效果。requestAnimationFrame就是为了这个而出现的。

requestAnimationFrame绘制间隔等于浏览设备绘制间隔,这样就不会存在过度绘制的问题，动画不会掉帧。

setTimeout会存在过度绘制，会造成帧丢失，继而导致动画断续显示。

如果在一个浏览器标签页里运行一个动画，当这个标签页不可见时，浏览器会暂停它，这会减少CPU，内存的压力，节省电池电量。

希望执行一个动画，并且要求浏览器在**下次重绘之前**调用指定的回调函数更新动画。

## 用法

```js
handle = requestAnimationFrame(callback);
cancelAnimationFrame(handle);
```

- 当页面被最小化或者被切换成后台标签页时，页面为不可见，浏览器会触发一个visibilitychange事件，并设置document.hidden属性为true
- 当页面切换到显示状态，页面变为可见，同时触发一个visibilitychange事件，设置document.hidden属性为false

## 执行过程

1. 首先判断document.hidden属性是否为true（页面是否可见），页面处于可见状态才会执行后面步骤
2. 浏览器清空上一轮的动画函数
3. requestAnimationFrame将回调函数追加到动画帧请求回调函数列表的末尾
    - 当执行requestAnimationFrame(callback)的时候，不会立即调用 callback 函数，只是将其放入队列。每个回调函数都有一个布尔标识cancelled，该标识初始值为false，并且对外不可见。
4. 当浏览器再执行列表中的回调函数的时候，判断每个元组的 callback 的cancelled，如果为false，则执行 callback
    - 当页面可见并且动画帧请求回调函数列表不为空，浏览器会定期将这些回调函数加入到浏览器 UI 线程的队列中
5. 递归调用。要想实现一个完整的动画，应该在回调函数中递归调用回调函数
