#

<https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img>

## 支持类型

常用：

- image/bmp
- image/gif
- image/jpeg
- image/png
- image/svg+xml
- image/webp

## 属性

`src`：图片的文件路径

`alt`：备用文本描述

`width`:图像的宽度,在 HTML5 中单位是 CSS 像素

可以只指定 width 和 height 中的一个值，浏览器会根据原始图像进行缩放。

`height`:图像的高度在 HTML5 中单位是 CSS 像素

`onerror`:加载或渲染图像时发生错误时调用，包括以下情况：

- src 属性的属性值为空（`""`）或者 `null`。
- src 属性的 URL 和用户正在浏览的页面的 URL 完全相同。
- 图像出于某些原因损坏了，从而无法加载。
- 图像的元数据被破坏了，无法检索它的分辨率/宽高，而且在 `<img>` - 元素的属性中没有指定宽度和/或高度。
- 用户代理尚未支持该图片所用的格式。

`crossorigin`：表明是否必须使用 CORS 完成相关图像的抓取。启用 CORS 的图像 可以在 `<canvas>` 元素中重复使用，而不会被污染（tainted）。默认不使用 CORS 发起请求

允许的值有：

- anonymous,执行一个跨域请求
- use-credentials,一个有证书的跨域请求。如果服务器没有给源站发送证书（通过 Access-Control-Allow-Credentials HTTP header），图像将会被污染，且它的使用会受限制。
