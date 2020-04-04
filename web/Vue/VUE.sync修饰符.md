#

`Vue2.3.0` 新增

`Vue3.x`中`:xxx.sync` 将被 `v-model:xxx` 取代

`.sync`是vue中用于实现简单的“双向绑定”的语法糖

vue的prop是单向下行绑定：父级的prop的更新会向下流动到子组件中，但是反过来不行。

## 用法

父组件：

```html
<text-document :title.sync="doc.title"></text-document>
```

子组件：

```js
// 当子组件需要更新 title 的值时，它需要显式地触发一个更新事件：
this.$emit('update:title', newValue)
```

## Vue3.x

```html
<text-document v-model="doc"></text-document>
```

```html
<text-document 
    v-model:title="doc.title"
    v-model:content="doc.content"
></text-document>
```