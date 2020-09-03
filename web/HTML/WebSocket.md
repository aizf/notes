---
title: WebSocket
tags:
    - html
---

## 1 WebSocket

WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议

[WebSocket原理](https://www.zhihu.com/question/20215561)

允许服务端主动向客户端推送数据。

在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。

Ajax 轮询缺点：

- 可能包含较长的头部，其中真正有效的数据可能只是很小的一部分，浪费很多的带宽等资源
- 增大服务器压力
- 不能实时
- 每次都要建立HTTP连接
- 被动性

长轮询原理：客户端发起Long Polling，此时如果服务端没有相关数据，会hold住请求，直到服务端有相关数据，或者等待一定时间超时才会返回。返回后，客户端又会立即再次发起下一次Long Polling。

长轮询缺点：

- 每次都要建立HTTP连接
- 对服务器的并行要求比较大
- 被动性

获取 Web Socket 连接后，你可以通过 `send()` 方法来向服务器发送数据，并通过 `onmessage` 事件来接收服务器返回的数据。

创建 WebSocket 对象

`var Socket = new WebSocket(url, [protocol] );`

### 1.1 WebSocket 属性

`Socket.readyState`

只读属性 readyState 表示连接状态，可以是以下值：

- 0 - 表示连接尚未建立。
- 1 - 表示连接已建立，可以进行通信。
- 2 - 表示连接正在进行关闭。
- 3 - 表示连接已经关闭或者连接不能打开。

`Socket.bufferedAmount`

只读属性 bufferedAmount 已被 `send()` 放入正在队列中等待传输，但是还没有发出的 UTF-8 文本字节数。

### 1.2 WebSocket 事件

事件|事件处理程序|描述
-|-|-
open|Socket.onopen|连接建立时触发
message|Socket.onmessage|客户端接收服务端数据时触发
error|Socket.onerror|通信发生错误时触发
close|Socket.onclose|连接关闭时触发

### 1.3 WebSocket 方法

方法|描述
-|-
`Socket.send()`|使用连接发送数据
`Socket.close()`|关闭连接

### 1.4 pywebsocket

## 3 WebSocket和SSE对比

- WebSocket是全双工通道，可以双向通信，功能更强；SSE是单向通道，只能服务器向浏览器端发送。
- WebSocket是一个新的协议，需要服务器端支持；SSE则是部署在 HTTP协议之上的，现有的服务器软件都支持。
- SSE是一个轻量级协议，相对简单；WebSocket是一种较重的协议，相对复杂。
- SSE默认支持断线重连，WebSocket则需要额外部署。
- SSE支持自定义发送的数据类型。
- SSE不支持CORS 参数url就是服务器网址，必须与当前网页的网址在同一个网域（domain），而且协议和端口都必须相同。
