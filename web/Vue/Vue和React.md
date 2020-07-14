---
title: Vue和React对比
tags:
    - vue
    - react
---

## 响应式更新对比

### React的更新粒度

React是自顶向下的进行递归更新的，也就是说，React 中假如父组件里还有十层嵌套子元素，那么所有层次都会递归的重新render（在不进行手动优化的情况下）。（因此，React 创造了Fiber，创造了异步渲染，其实本质上是弥补被自己搞砸了的性能）。

他们能用收集依赖的这套体系吗？不能，因为他们遵从Immutable的设计思想，永远不在原对象上修改属性，那么基于 Object.defineProperty 或 Proxy 的响应式依赖收集机制就无从下手了（你永远返回一个新的对象，我哪知道你修改了旧对象的哪部分？）

同时，由于没有响应式的收集依赖，React 只能递归的把所有子组件都重新 render一遍（除了memo和shouldComponentUpdate这些优化手段），然后再通过 diff算法 决定要更新哪部分的视图，这个递归的过程叫做 reconciler，听起来很酷，但是性能很灾难。

### Vue的更新粒度

那么，Vue 这种精确的更新是怎么做的呢？

1 其实每个组件都有自己的渲染 `watcher`，它掌管了当前组件的视图更新，但是并不会掌管 `ChildComponent` 的更新。

2 在 patch 的过程中，当组件更新到`ChildComponent`的时候，会走到 `patchVnode`

3 `patchVnode`执行 `vnode` 的 `prepatch` 钩子。

- 更新props（后续详细讲）
- 更新绑定事件
- 对于slot做一些更新（后续详细讲）

4 如果有子节点的话，对子节点进行 diff。

Vue 的组件更新确实是**精确到组件本身**的。

对于子组件：

那么在diff的过程中，只会对 component 上声明的 props、listeners等属性进行更新，而不会深入到组件内部进行更新。

5 props的更新如何触发重渲染？

补充：`vm.$forceUpdate`，它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。

本质上就是触发了`渲染watcher`的重新执行，和你去修改一个响应式的属性触发更新的原理是一模一样的，它只是帮你调用了 `vm._watcher.update()`