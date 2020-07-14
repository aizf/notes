---
title: postMessage和onmessage
tags:
    - html
---

postMessage和onmessage是HTML5的方法，用来解决跨页面通信，或者通过iframe嵌套的不同页面的通信的。

postMessage为发送方，onmessage为接收方。

`otherWindow.postMessage(message, targetOrigin)`
>otherWindow:其它窗口（window）的引用
>message: 就是传递给iframe的内容, 通常是string
>
>targetOrigin: 接受你传递消息的域名，可以设置绝对路径，也可以设置`"*"`或者`"/"`。 `"*"`表示任意域名都行，`"/"`表示只能传递给同域域名。在发送消息的时候，如果目标窗口的协议、主机地址或端口这三者的任意一项不匹配targetOrigin提供的值，那么消息就不会被发送；只有三者完全匹配，消息才会被发送。