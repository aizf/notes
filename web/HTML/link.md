---
title: link标签
tags:
    - html
---

## preload,  prefetch和preconnect

<https://juejin.im/post/5b5984b851882561da216311>

浏览器预加载**只预先加载在HTML中声明的资源**。preload 指令事实上克服了这个限制并且**允许预加载在 CSS 和JavaScript 中定义的资源**，并允许决定何时应用每个资源。

### prefetch

低优先级的资源提示，允许浏览器在后台（空闲时）获取将来可能用得到的资源，并且将他们存储在浏览器的缓存中。

有三种不同的 prefetch 的类型，link，DNS 和 prerendering

DNS 请求在带宽方面流量非常小，可是延迟会很高，尤其是在移动设备上。通过 prefetching 指定的 DNS 可以在特定的场景显著的减小延迟

prerendering 在后台渲染了整个页面，整个页面所有的资源。要小心的使用 prerender，因为它将会加载很多资源并且可能造成带宽的浪费，尤其是在移动设备上。

```html
<link rel="prefetch" href="/uploads/images/pic.png">
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="prerender" href="https://www.keycdn.com">
```

### preload

可以指明哪些资源是在页面加载完成后即刻需要的,不会阻塞 `window` 的 `onload` 事件。

```html
<link rel="preload" href="style.css" as="style">
<link rel="preload" href="main.js" as="script">
<link rel="preload" href="https://example.com/fonts/font.woff" as="font" crossorigin>
<link rel="preload" href="image.png">
```

### preconnect

允许浏览器在一个 HTTP 请求正式发给服务器前预先执行一些操作，这包括 DNS 解析，TLS 协商，TCP 握手，这消除了往返延迟并为用户节省了时间。

```html
<link href="https://cdn.domain.com" rel="preconnect" crossorigin>
```
