# CSS动画对比JS动画

## JS动画

js实现动画: `setInterval` `setTimeout` `requestAnimationFrame`

`requestAnimationFrame`的优点在于：

1. 是**浏览器针对动画提出的API**。自动优化，页面不激活状态自动停止。
2. 集中所有dom，**一次重绘**就完成，重绘事件**跟随浏览器刷新频率**。
3. **隐藏或不可见元素，不进行回流重绘**

优点：

1. **过程控制**, 可以在动画播放过程中对动画进行控制：开始、暂停、回放、终止、取消都是可以做到的。
2. 动画**效果**比css3动画**丰富**,有些动画效果，比如曲线运动,冲击闪烁,视差滚动效果，只有JavaScript动画才能完成
3. CSS3有**兼容性**问题，而JS大多时候没有兼容性问题

缺点：

1. JavaScript在浏览器的主线程中运行，而主线程中还有其它需要运行的JavaScript脚本、样式计算、布局、绘制任务等,对其**干扰导致线程可能出现阻塞**，从而造成丢帧的情况。
2. 代码**的复杂度高**于CSS动画
3. 无法保证执行时间。timeout interval存在同步任务优先执行的问题。

## CSS动画

css实现动画：`animation` `transition` `transform`

优点：

1. 集中所有DOM，**一次重绘重排**，**刷新频率和浏览器刷新频率相同**。
2. **代码简单**，方便调优
3. 不可见元素不参与重排，节约cpu
4. **可以使用硬件加速**GPU(`translateZ(0)`)

缺点：

1. 对**过程无法把控**。无进度报告，无回调函数。
2. **代码冗长**。

## CSS动画比JS流畅的前提

- 在Chromium基础上的浏览器中
- JS在执行一些昂贵的任务
- 同时CSS动画不触发layout或paint
在CSS动画或JS动画触发了paint或layout时，需要main thread进行Layer树的重计算，这时CSS动画或JS动画都会阻塞后续操作

只有如下属性的修改才符合,仅触发Composite，不触发layout或paint

- backface-visibility
- opacity
- perspective
- perspective-origin
- transfrom

所以只有用上了3D加速或修改opacity时，才有机会用得上CSS动画的这一优势。

因此，在大部分应用场景下，效率角度更值得关注的还是下列问题。

- 是否导致layout
- repaint的面积
- 是否是有高消耗的属性（css shadow等）
- 是否启用硬件加速

## CSS动画流畅的原因

渲染线程分为main thread(主线程)和compositor thread(合成器线程)。

如果CSS动画只是改变`transform`和`opacity`，这时整个CSS动画得以在compositor thread完成（而JS动画则会在main thread执行，然后触发compositor进行下一步操作）

在JS执行一些昂贵的任务时，main thread繁忙，CSS动画由于使用了compositor thread可以保持流畅

CSS3开启硬件加速的使用和坑<https://www.jianshu.com/p/9596c82086d5>
