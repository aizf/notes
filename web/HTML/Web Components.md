#

<https://juejin.im/post/5badfc53f265da0af77527b8#heading-12>

Web Components本身不是一个规范，而是由W3C提出的另外4个规范的合集。这四个规范是：

- HTML Template
- HTML Imports
- Shadow DOM
- Custom Elements

## HTML Template

通过`<template>`标签存放模板

```html
<template id="mytemplate">
    <img src="" alt="great image">
    <div class="comment"></div>
</template>
```

### 是否支持

检查`<template>`是否拥有 content 属性

```js
function supportsTemplate() {
    return 'content' in document.createElement('template');
}

if (supportsTemplate()) {
    // 检测通过！
} else {
    // 使用旧的模板技术或库。
}
```

### 激活模板

即渲染出模板里面的内容。激活模板最简单的方法就是使用 `document.importNode()`对模板的 `.content` 进行深拷贝。

`.content` 为只读属性，关联一个包含模板内容的 DocumentFragment。

```js
var t = document.querySelector('#mytemplate');
// 在运行时填充 src。
t.content.querySelector('img').src = 'logo.png';

var clone = document.importNode(t.content, true);
document.body.appendChild(clone);
```

## HTML Imports

之前在页面引入另一个页面或片段往往是通过`iframe`或者`ajax`异步加载，而现在我们可以这样做：

```html
<head>
    <link rel="import" href="/path/to/imports/stuff.html">
</head>
<script>
    var content = document.querySelector('link[rel="import"]').import;
</script>
```

### 是否支持

可验证 `<link>` 元素上是否存在 import：

```js
function supportsImports() {
    return 'import' in document.createElement('link');
}

if (supportsImports()) {
    // 支持导入
} else {
    // 使用其他方法加载文件
}
```

## Shadow DOM

## Custom Elements

自定义元素，首先有个硬性规定，自定义元素的命名中必须要有中划线“`-`”，否则便是未知元素了。

自定义元素分为两种:

- 自主自定义元素
- 自定义内置元素

### 自特性主自定义元素(Autonomous custom elements)

不具备任何已有元素的，其样式和行为完全自定义，如我们要定义一个这样的元素：

`<flag-icon country="cn"></flag-icon>`

```js
class FlagIcon extends HTMLElement {
    constructor() {
      super();
      this._countryCode = null;
    }

    static get observedAttributes() { return ["country"]; }

    attributeChangedCallback(name, oldValue, newValue) {
      // name will always be "country" due to observedAttributes
      this._countryCode = newValue;
      this._updateRendering();
    }

    connectedCallback() {
      this._updateRendering();
    }

    get country() {
      return this._countryCode;
    }

    set country(v) {
      this.setAttribute("country", v);
    }

    _updateRendering() {
      //...
    }
}

//全局注册该元素
customElements.define("flag-icon", FlagIcon);
```

### 自定义内置元素(Customized built-in elements)

继承自已有元素，拥有已有元素的所有特性。

比如我们自定义一个按钮，集成普通按钮所有的特性，但是当点击的时候会有一个动效，就可以这么做:

```js
class PlasticButton extends HTMLButtonElement {
    constructor() {
        super();

        this.addEventListener("click", () => {
            // 动效逻辑
        });
    }
}
```

不同的是，注册时要加上一个参数

```js
customElements.define("plastic-button", PlasticButton, { extends: "button" });

```

使用时也稍有不同

```html
<button is="plastic-button">点我!</button>
```