#

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

##
- childNodes: 获取元素节点与文本节点
- children: 获取元素节点

- firstChild: 文本节点或者元素节点
- firstElementChild: 第一个元素节点