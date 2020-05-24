<https://aotu.io/notes/2016/06/24/Shadow-DOM/?o2src=juejin&o2layout=compat>

## 待整理

## 简介

Shadow DOM它允许在文档（document）渲染时插入一棵DOM元素子树，但是这棵子树不在主DOM树中。

```html
<video controls autoplay name="media" width="500">
    <source id="mp4" src="http://7ryl2t.com2.z0.glb.qiniucdn.com/572ffc37a2e5a.mp4" type="video/mp4">
</video>
```

在浏览器chrome中打开，然后打开 Chrome 的开发者工具，点击右上角的“Settings”按钮，勾选“Show user agent shadow DOM”。

![avatar](.\res\1.png)

`#shadow-root`称为影子根

## 怎样创建Shadow DOM

```html
<body>
    <div class="shadowhost">Hello, world!</div>
    <script>

        // 影子宿主（shadow host）
        var shadowHost = document.querySelector('.shadowhost');

        // 创建影子根（shadow root）
        var shadowRoot = shadowHost.createShadowRoot();

        // 影子根作为影子树的第一个节点，其他的节点比如p节点都是它的子节点。
        shadowRoot.innerHTML = '<p class="shadowroot_son">夏天夏天悄悄过去留下小秘密！</p>';

    </script>
</body>
```

影子宿主和影子根之间存在**影子边界**（shadow boundary），影子边界保证主 DOM写的 CSS 选择器和 JavaScript 代码都不会影响到Shadow DOM，当然也保护主文档不受 shadow DOM 样式的侵袭。