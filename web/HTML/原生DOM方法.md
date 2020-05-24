#

## 选择父子，兄弟等

<https://www.cnblogs.com/ilovexiaoming/p/6853176.html>

```js
var test = document.getElementById("test");
var parent = test.parentNode; // 父节点
var parent = test.parentNode.parentNode; // 父节点的父节点
var chils = test.childNodes; // 全部子节点
var first = test.firstChild; // 第一个子节点
var last = test.lastChile; // 最后一个子节点
var previous = test.previousSibling; // 上一个兄弟节点.!!!!!!!!!!!!
var next = test.nextSbiling; // 下一个兄弟节点,!!!!!!!!!
```

- childNodes: 获取元素节点与文本节点
- children: 获取元素节点

- firstChild: 文本节点或者元素节点
- firstElementChild: 第一个元素节点

## createElement()

```js
var btn=document.createElement("BUTTON");
```

语法:

`var element = document.createElement(tagName[, options]);`

在 HTML 文档上调用 `createElement()` 方法创建元素之前会将tagName 转化成小写，在 Firefox、Opera 和 Chrome 内核中，`createElement(null)` 等同于 `createElement("null")`

options可选