---
title: iframe相关
tags:
    - html
---

把iframe解释成“浏览器中的浏览器“是很恰当的。iframe可以嵌在网页中的任意部分。

## 基本属性

`src`
>`<iframe src="https://www.baidu.com/"></iframe>`,指定iframe调用的文件或图片(html,htm,gif,jpeg,jpg,png,txt,*.*)

`name`
>框架的名称，`window.frames[name]`时专用的属性

`scrolling`
>是否有滚动条（yes,no,auto）

`<iframe height="31" width="88"></iframe>`
>边框的宽度和高度

`frameborder`
>是否显示边框（0无边框 1有边框(默认)）

`allowtransparency`
>背景是否透明 （yes透明 no不透明）

`sandbox`
>对iframe进行一些列限制，IE10+支持

同域，父页面可以对子页面进行改写

不同域，父页面没有权限改动子页面,但可以实现页面的跳转

## 同域时

### 获取iframe里的内容

```js
var iframe = document.getElementById("iframe1");

// iframe的window对象
var iwindow = iframe.contentWindow;
window.frames['ifr1'].window

// iframe的document对象
var idoc = iwindow.document;
```

### 在iframe中获取父级内容

```js
window.parent   //获取上一级的window对象，如果还是iframe则是该iframe的window对象
window.top  // 获取最顶级容器的window对象，即，就是你打开页面的文档
window.self // 返回自身window的引用。可以理解 window===window.self(脑残)
```

## iframe的轮询

## iframe安全性

有两个方面:

- 你的网页被别人iframe
- 你iframe别人的网页

### 防嵌套网页

最出名的clickhacking就是使用iframe来 拦截click事件。因为iframe享有着click的最优先权，当有人在伪造的主页中进行点击的话，如果点在iframe上，则会默认是在操作iframe的页面。

限定你的网页不能嵌套在任意网页内:

```js
if(window != window.top){
    window.top.location.href = correctURL;
}
```

### X-Frame-Options

`X-Frame-Options`是一个相应头，主要是描述服务器的网页资源的`iframe`权限。目前的支持度是IE8+

- `DENY`：当前页面不能被嵌套iframe里，即便是在相同域名的页面中嵌套也不允许,也不允许网页中有嵌套iframe
- `SAMEORIGIN`：iframe页面的地址只能为同源域名下的页面
- `ALLOW-FROM`：可以在指定的origin url的iframe中加载

## 解决跨域

### 主域相同而子域不同的跨域

对于主域相同而子域不同的跨域,可以使用`iframe`进行解决。

默认情况下`document.domain` 是指`window.location.hostname`,可以手动更改，但是最多只能设置为主域名。

对于`http: //www.foo.com/a.html`和`http: //script.foo.com/b.html`,两个文件中分别加上`document.domain = "foo.com"`,指定相同的主域，然后,两个文档就可以进行交互。

### 域名完全不同

- 发送消息: 使用postmessage方法,异步方式进行有限的通信
- 接受消息: 监听message事件

需要拥有另一个页面的`window`对象

`otherWindow.postMessage(message, targetOrigin)`
>otherWindow:其它窗口（window）的引用
>message: 就是传递给iframe的内容, 通常是string
>
>targetOrigin: 接受你传递消息的域名，可以设置绝对路径，也可以设置`"*"`或者`"/"`。 `"*"`表示任意域名都行，`"/"`表示只能传递给同域域名。在发送消息的时候，如果目标窗口的协议、主机地址或端口这三者的任意一项不匹配targetOrigin提供的值，那么消息就不会被发送；只有三者完全匹配，消息才会被发送。

当targetOrigin接受到message消息之后,会触发message事件。

message提供的event对象上有3个重要的属性，data,origin,source.

- data：postMessage传递进来的值
- origin：发送消息的文档所在的域
- source：发送消息文档的window对象的代理，如果是来自同一个域，则该对象就是window，可以使用其所有方法，如果是不同的域，则window只能调用postMessage()方法返回信息
