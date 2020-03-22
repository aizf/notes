#

## 1.1 Cache Storage

## 1.2 应用程序缓存（Application Cache）

为应用带来三个优势：

- 离线浏览 - 用户可在应用离线时使用它们
- 速度 - 已缓存资源加载得更快
- 减少服务器负载 - 浏览器将只从服务器下载更新过或更改过的资源。

### 1.2.1 Cache Manifest 基础

如需启用应用程序缓存，请在文档的`<html>`标签中包含 `manifest` 属性：

```html
<!DOCTYPE HTML>
<html manifest="demo.appcache">
...
</html>
```

如果未指定 manifest 属性，则页面不会被缓存（除非在 manifest 文件中直接指定了该页面）。

manifest 文件的建议的文件扩展名是：".appcache"。