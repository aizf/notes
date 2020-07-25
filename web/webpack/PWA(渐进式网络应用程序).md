---
title: PWA(渐进式网络应用程序)
tags:
    - js
    - webpack
    - pwa
    - 优化
date: 2019/11/4
---

渐进式网络应用程序(Progressive Web Application - PWA)，是一种可以提供类似于原生应用程序(native app)体验的网络应用程序(web app)。PWA 可以用来做很多事。其中最重要的是，**在离线(offline)时应用程序能够继续运行功能**。这是通过使用名为 Service Workers 的网络技术来实现的。

## 添加 `workbox-webpack-plugin` 插件

使用Google项目的Workbox来实现此目的，该项目提供的工具可帮助我们更轻松地配置 web app 的离线支持。

```js
// webpack.config.js

const WorkboxPlugin = require('workbox-webpack-plugin');

plugins: [
    new WorkboxPlugin.GenerateSW({
        // 这些选项帮助 ServiceWorkers 快速启用
        // 不允许遗留任何“旧的” ServiceWorkers
        clientsClaim: true,
        skipWaiting: true
    })
],
```

`npm run build`后多出两个文件：

- `service-worker.js`是 Service Worker 文件
- `workbox-abaa1409.js`是 `service-worker.js` 引用的文件

## 注册`Service Worker`

```js
// index.js

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
```

之后停止服务器并刷新页面。如果浏览器能够支持 `Service Worker`，你应该可以看到你的应用程序还在正常运行。
