#

## 1 Web缓存

WEB缓存(cache)位于Web服务器和客户端之间。

带指纹资源(hash值): 永久缓存
非带指纹资源: 每次进行新鲜度校验

### 1.1 与缓存相关的http扩展消息头

`Expires`：指示响应内容过期的时间，格林威治时间GMT

`Cache-Control`：更细致的控制缓存的内容  `max-age`就是确定缓存的时间。不添加`Cache-Control`会对资源进行**强制缓存**

`Last-Modified`：响应中资源最后一次修改的时间

`ETag`：响应中资源的校验值，在服务器上某个时段是唯一标识的。

`Date`：服务器的时间

`If-Modified-Since`：客户端存取的该资源最后一次修改的时间，同Last-Modified。

`If-None-Match`：客户端存取的该资源的检验值，同ETag。

### 1.2 缓存（cache）生效的过程

1. 服务器收到请求时，会在`200OK`中回送该资源的`Last-Modified`和`ETag`头
2. 客户端将该资源保存在`cache`中，并记录这两个属性。
3. 当客户端需要发送相同的请求时，会在请求中携带`If-Modified-Since`和`If-None-Match`两个头。两个头的值分别是响应中`Last-Modified`和`ETag`头的值。
4. 服务器通过这两个头判断本地资源未发生变化，客户端不需要重新下载，返回`304`响应

### 1.3 http的缓存机制

HTTP定义了3种缓存机制：

1. `Freshness`：允许一个回应消息可以在源服务器不被重新检查，并且可以由服务器和客户端来控制。例如，Expires回应头给了一个文档不可用的时间。Cache-Control中的max-age标识指明了缓存的最长时间;
2. `Validation`：用来检查以一个缓存的回应是否仍然可用。例如，如果一个回应有一个`Last-Modified`回应头，缓存能够使用`If-Modified-Since`来判断是否已改变，以便判断根据情况发送请求;
3. `Invalidation`： 在另一个请求通过缓存的时候，常常有一个副作用。例如，如果一个URL关联到一个缓存回应，但是其后跟着POST、PUT和DELETE的请求的话，缓存就会过期。

### 1.4 断点续传和多线程下载的原理

1. HTTP协议的GET方法，支持只请求某个资源的某一部分;
   1. 206 Partial Content 部分内容响应;
   2. Range 请求的资源范围;
   3. Content-Range 响应的资源范围;

### 1.5 分层次缓存的打包方案，这是一个建议方案

- webpack-runtime: 应用中的 webpack 的版本比较稳定，分离出来，保证长久的永久缓存
- react/react-dom: react 的版本更新频次也较低
- vendor: 常用的第三方模块打包在一起，如 lodash，classnames 基本上每个页面都会引用到，但是它们的更新频率会更高一些。另外对低频次使用的第三方模块不要打进来
- pageA: A 页面，当 A 页面的组件发生变更后，它的缓存将会失效
- pageB: B 页面
- echarts: 不常用且过大的第三方模块单独打包
- mathjax: 不常用且过大的第三方模块单独打包
- jspdf: 不常用且过大的第三方模块单独打包

因此为了更好的缓存效果以及按需加载，也有很多方案建议把所有的第三方模块进行单模块打包。

### 1.6 强缓存和协商缓存

- 强缓存（200 from cache）时，浏览器如果判断本地缓存未过期，就直接使用，无需发起http请求
- 协商缓存（304）时，浏览器会向服务端发起http请求，然后服务端告诉浏览器文件未改变，让浏览器使用本地缓存

#### 1.6.1 怎么区分

属于强缓存控制的：

```txt
（http1.1）Cache-Control/Max-Age
（http1.0）Pragma/Expires
```

属于协商缓存控制的：

```txt
（http1.1）If-None-Match/E-tag
（http1.0）If-Modified-Since/Last-Modified
```

#### 1.6.2 Max-Age相比Expires

Expires使用的是服务器端的时间

而Max-Age使用的是客户端本地时间的计算

#### 1.6.3 E-tag相比Last-Modified

Last-Modified：

- 表明服务端的文件最后何时改变的
- 它有一个缺陷就是只能精确到1s，
- 然后还有一个问题就是有的服务端的文件会周期性的改变，导致缓存失效

E-tag：

- 是一种指纹机制，代表文件相关指纹
- 只有文件变才会变，也只要文件变就会变，
- 也没有精确时间的限制，只要文件一遍，立马E-tag就不一样了

同时带有E-tag和Last-Modified，服务端会优先检查E-tag
